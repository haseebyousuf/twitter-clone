import JWT, { Secret } from 'jsonwebtoken';
import { User } from '@prisma/client';

class JWTService {
  public static generateTokenForUser(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = JWT.sign(payload, process.env.JWT_SECRET as Secret);
    return token;
  }
}

export default JWTService;
