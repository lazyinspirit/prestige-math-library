---
dependency_level: 8
id: thm-gl3-voronoi-summation-full-level
kind: theorem
title: "GL3 Voronoi Summation at Full Level"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-full-level-gl3-automorphic-distribution
  - thm-gl3-heisenberg-fourier-expansion
  - lem-gl3-cuspidal-coefficients-canonical-extensions
  - thm-gl3-voronoi-archimedean-transform-calculus
  - def-countable-choice
  - thm-gl3-embedded-sl2-fourier-coefficient-relations
  - lem-gl3-simple-singularity-mellin-pairing
  - lem-gl3-fourier-calculus-for-simple-singularities
  - thm-fourier-inversion-on-schwartz-space
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials
  - thm-fourier-translation-modulation-dilation-and-reflection-laws
  - thm-cauchy-integral-formula-higher-derivatives
  - thm-bezout-identity
  - thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-pullback-of-a-distribution-by-a-diffeomorphism
  - lem-gl3-canonical-extension-is-unique
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), Theorem 1.18 and §5"
      url: "https://arxiv.org/pdf/math/0408100v3"
    - title: "Dorian Goldfeld and Xiaoqing Li, The Voronoi Formula for GL(n,R), Main Theorem and §7"
      url: "https://www.math.columbia.edu/~goldfeld/Voronoi-FinalVersion.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Assume Countable Choice. Let $\tau$ be a cuspidal full-level GL3 automorphic distribution with parameters $\lambda=(\lambda_1,\lambda_2,\lambda_3)$ and $\delta=(\delta_1,\delta_2,\delta_3)$ satisfying $\sum_j\lambda_j=0$ and $\sum_j\delta_j=0$ in $\mathbb Z/2\mathbb Z$. Let $a,c\in\mathbb Z$ with $c\ne0$ and $\gcd(a,c)=1$, let $\bar a$ be any integer inverse of $a$ modulo $|c|$, and let $q\geq1$. Let $f$ be either a Schwartz function on $\mathbb R$ vanishing to infinite order at $0$, or a smooth function on $\mathbb R\setminus\{0\}$ for which $(\operatorname{sgn}x)^{\delta_3}|x|^{-\lambda_3}f(x)$ extends to a Schwartz function on $\mathbb R$. Here a Schwartz function is smooth and all its derivatives decay faster than every inverse power. For $t\ne0$, set
$$F(t)=\int_{\mathbb R}\int_{\mathbb R}\int_{\mathbb R}f\!\left(\frac{x_1x_2x_3}{t}\right)\prod_{j=1}^3\left((\operatorname{sgn}x_j)^{\delta_j}|x_j|^{-\lambda_j}e(-x_j)\right)\,dx_3\,dx_2\,dx_1,$$
where the repeated integral is performed first in $x_3$, then in $x_2$, then in $x_1$. The three successive one-dimensional integrations converge absolutely in the indicated order when $\operatorname{Re}\lambda_1>\operatorname{Re}\lambda_2>\operatorname{Re}\lambda_3$, and for other parameters $F$ is its holomorphic continuation in $\lambda$. Define the Kloosterman sum
$$S(u,v;m)=\sum_{x\in(\mathbb Z/|m|\mathbb Z)^\times}e\!\left(\frac{ux+v\bar x}{m}\right),$$
where $\bar x$ is the inverse of $x$ modulo $|m|$. Then
$$\sum_{n\ne0}a_{q,n}e(-na/c)f(n)=\sum_{\substack{d\geq1\\d\mid |c|q}}\ \sum_{n\ne0}\frac{|c|}{|n|d}\,a_{n,d}\,S(q\bar a,n;cq/d)\,F\!\left(\frac{nd^2}{c^3q}\right).$$

## Statement references

[Miller and Schmid, *Automorphic Distributions, L-functions, and Voronoi Summation for GL(3)*, Theorem 1.18 and §5](https://arxiv.org/pdf/math/0408100v3)

[Goldfeld and Li, *The Voronoi Formula for GL(n,R)*, Main Theorem and §7](https://www.math.columbia.edu/~goldfeld/Voronoi-FinalVersion.pdf)

## Remarks

This statement is for cuspidal full-level GL3 distributions. It asserts no formula at general level or arbitrary rank, and is distinct from the classical GL1 divisor and circle Voronoi transforms.


For the weighted test class, parameter continuation uses the fixed Schwartz function $f_0=(\operatorname{sgn}x)^{\delta_3}|x|^{-\lambda_3}f(x)$, so the varying test is $f_\lambda=(\operatorname{sgn}x)^{\delta_3}|x|^{\lambda_3}f_0$. A fixed flat Schwartz test also gives a holomorphic Schwartz family $f_0(\lambda)$. At each parameter this retains exactly the full test class above.

## Facts & Assumptions

**Given:** The stated cuspidal datum, integers and test function under [[def-countable-choice|Countable Choice]]. Put $\alpha=\lambda_2-\lambda_3$, $\beta=\lambda_1-\lambda_2$.

[F1] [[def-full-level-gl3-automorphic-distribution]] gives $a_{r,s}=c_{r,s}|r|^{\lambda_1}|s|^{-\lambda_3}(\operatorname{sgn}r)^{\delta_1}(\operatorname{sgn}s)^{\delta_3}$. [[thm-gl3-embedded-sl2-fourier-coefficient-relations]] gives polynomial coefficient growth, sign invariance of the normalized coefficients, and the full global coefficient relations.

[F2] [[thm-gl3-heisenberg-fourier-expansion]] gives the exact finite Fourier relation between $\rho$ and $\widehat\sigma$.

[F3] [[lem-gl3-cuspidal-coefficients-canonical-extensions]] supplies canonical extensions and flatness at every rational point. [[lem-gl3-canonical-extension-is-unique]] identifies two such extensions agreeing away from the endpoint. Thus every adjoint operation below is on an actually infinitely flat tempered distribution, including its origin value.

[F4] [[thm-gl3-voronoi-archimedean-transform-calculus]] gives the full $\mathcal S_{\mathrm{sis}}$ mapping and canonical adjoint identity. [[lem-gl3-simple-singularity-mellin-pairing]] gives the canonical integration pairing.

[F5] [[thm-fourier-inversion-on-schwartz-space]], [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]], [[thm-fourier-translation-modulation-dilation-and-reflection-laws]] and [[thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials]] give the negative-sign Fourier normalization, its scaling Jacobian and the exact transforms of point masses. [[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]] and [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]] supply the continuous bounded transforms of the L1 functions in the initial convergence chamber. [[def-pullback-of-a-distribution-by-a-diffeomorphism]] supplies the scalar distribution scaling used by transposition.

[F6] [[lem-gl3-fourier-calculus-for-simple-singularities]] gives all-parameter holomorphy, uniform rapid decay at infinity and the common power bounds at zero. [[thm-cauchy-integral-formula-higher-derivatives]] controls parameter derivatives on smaller compact parameter discs. [[thm-dominated-convergence]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] justify the uniformly integrable parameter differentiation and Cauchy-coefficient integrations.

[F7] [[thm-bezout-identity]] supplies the integer inverse after each coprime gcd decomposition. All sums over residue classes below are finite.

## Proof

**Given:** The stated data.

1.1 Put $f_0(x)=(\operatorname{sgn}x)^{\delta_3}|x|^{-\lambda_3}f(x)$ and $g=\widehat f_0\in\mathcal S$. In the first test class this is also Schwartz: every derivative of a fixed sign/power times an infinitely flat smooth function extends smoothly by zero, and the multiplier has only polynomial growth at infinity. Let [F1, F2, F3, F4, F5, given, algebra]
$$A(x)=\sum_{m\ne0}a_{q,m}(\operatorname{sgn}m)^{\delta_3}|m|^{\lambda_3}e(mx-ma/c).$$
This equals $q^{\lambda_1}D_q(x-a/c)$ and is flat at zero by [F3]. Set $N=cq$ and
$$\Sigma_0(x)=q^{\lambda_1-1}(\operatorname{sgn}c)^{\delta_1}|c|^\alpha\sum_{l\bmod N}e(l\bar a/c)\sigma_{N,l}(cx/q).$$
For $A\ne0$, testing the Schwartz dilation formula against a tempered $T$ gives $\langle\mathcal F(T(A\,\cdot)),\phi\rangle=\langle\mathcal FT,\phi(A\,\cdot)\rangle$, hence $\mathcal F(T(A\,\cdot))(y)=|A|^{-1}\widehat T(y/A)$ by scalar pullback. With this justified tempered scaling, the finite Fourier relation [F2] gives $\widehat\Sigma_0(y)=q^{\lambda_1}(\operatorname{sgn}c)^{\delta_1}|c|^{\alpha-1}\rho_{N,\bar a q}(y/c^2)$. Substitute the global $\rho$ formula of [F1] with $a,\bar a$ exchanged. Its reciprocal argument yields exactly
$$A=T^*_{\alpha,\delta_1}\Sigma_0.$$
All terms are flat at zero by [F3]; equality on the punctured line is therefore equality of their canonical distributions, without a missing delta term. Fourier inversion and [F4] consequently give
$$\sum_{m\ne0}a_{q,m}e(-ma/c)f(m)=\langle A,g\rangle=\langle\Sigma_0,T_{\alpha,\delta_1}g\rangle.$$
The first series is absolutely convergent by polynomial coefficient growth and Schwartz decay at integer points. [F1, F2, F3, F4, F5, given, algebra]

2.1 For a residue $l\bmod N$ put $d=\gcd(|N|,l)>0$, $C=N/d$, and choose $\bar l'$ inverse to $l/d$ modulo $|C|$. The global $\sigma$ relation [F1], with $c=C$, $q=d$, $a=l/d$, gives [F1, F3, F4, F5, F7, step 1.1, algebra]
$$\sigma_{N,l}(cx/q)=T^*_{\beta,\delta_3}\mathcal D_l(x),$$
where
$$\mathcal D_l=\sum_{m\ne0}|c|^{2\beta-2}d^{1-\beta+\lambda_3}(\operatorname{sgn}m)^{\delta_1}|m|^{-\lambda_1}a_{m,d}e\left(\frac{md\bar l'}{cq}\right)\delta_{md^2/(c^3q)}.$$
Indeed the reciprocal phase in that $\sigma$ formula is $-md^2/(c^3qx)$, and its multiplier is $(\operatorname{sgn}x)^{\delta_3}|x|^{\beta-1}$ times $|c|^{2\beta-2}d^{1-\beta}$; substituting $c_{m,d}=a_{m,d}|m|^{-\lambda_1}d^{\lambda_3}(\operatorname{sgn}m)^{\delta_1}$ gives the display. The point masses have polynomial weights on a nonzero arithmetic lattice, so $\mathcal D_l$ is tempered and zero on a neighborhood of zero. Its adjoint is therefore valid. Equality across zero follows from [F3] and canonical uniqueness as in step 1.1. This includes $l=0$, for which $|C|=1$ and its one residue class has an inverse modulo one. [F1, F3, F4, F5, F7, step 1.1, algebra]

3.1 Set $H=T_{\beta,\delta_3}T_{\alpha,\delta_1}g$ and [F1, F3, F4, F5, step 1.1, step 2.1, algebra]
$$F_0(t)=(\operatorname{sgn}t)^{\delta_1}|t|^{1-\lambda_1}H(t).$$
The mapping theorem [F4] makes $H$, and hence $F_0$, a simple-singularity function with rapid derivative decay at infinity. Apply the adjoint identity a second time to step 2.1 and substitute in step 1.1. Evaluating against each $\mathcal D_l$ is an absolutely convergent series, since its lattice is separated from zero, its coefficients grow polynomially and $H$ decays rapidly at infinity. The resulting coefficient of $a_{m,d}F_0(md^2/(c^3q))$ simplifies to $|c|/(|m|d)$. In detail the $q$ exponents cancel; the $|c|$ exponent is $\alpha+2\beta-2-3(\lambda_1-1)=1$ and the $d$ exponent is $1-\beta+\lambda_3+2(\lambda_1-1)=-1$, using $\sum\lambda_j=0$. The signs cancel because $\operatorname{sgn}(md^2/(c^3q))=\operatorname{sgn}(mc)$ and $q>0$. Thus the sum equals
$$\sum_{l\bmod cq}\sum_{m\ne0}\frac{|c|}{|m|d}a_{m,d}e\left(\frac{md\bar l'}{cq}+\frac{l\bar a}{c}\right)F_0\left(\frac{md^2}{c^3q}\right).$$
[F1, F3, F4, F5, step 1.1, step 2.1, algebra]

4.1 Partition the finite $l$ sum by $d\mid |c|q$ and write $l=dl'$ with $l'$ a unit modulo $|cq/d|$. Its inverse is $\bar l'$. The exponential in step 3.1 becomes [F1, F4, F7, step 3.1, algebra]
$$e\left(\frac{m\bar l'+q\bar a l'}{cq/d}\right),$$
so its sum is exactly $S(q\bar a,m;cq/d)$. This yields the claimed divisor/Kloosterman formula with $F_0$ in place of $F$. All infinite sums remain absolutely convergent, and the outer divisor and unit sums are finite. In particular modulus $\pm1$, $d=|c|q$, $c<0$ and $q=1$ need no omitted boundary case. Changing either inverse lift changes its exponent by an integer. [F1, F4, F7, step 3.1, algebra]

4.2 It remains to identify the kernel. In the chamber $\operatorname{Re}\alpha>0$, $\operatorname{Re}\beta>0$, the transform $T_{\alpha,\delta_1}g$ is the Fourier transform of an L1 function and is globally bounded and continuous, while still rapidly decreasing at infinity. Hence the next $T_{\beta,\delta_3}$ is also computed by its absolutely convergent one-dimensional integral. Expanding these two integrals and the absolutely convergent Fourier integral for $g$ gives, in the order $x$, then $y$, then $z$, [F1, F4, F5, F6, step 1.1, step 3.1, algebra]
$$F_0(t)=(\operatorname{sgn}t)^{\delta_1}|t|^{1-\lambda_1}\int_z\int_y\int_x f(x)e(-x/y-y/z-tz)(\operatorname{sgn}x)^{\delta_3}(\operatorname{sgn}y)^{\delta_1}(\operatorname{sgn}z)^{\delta_3}|x|^{-\lambda_3}|y|^{-\alpha-1}|z|^{-\beta-1}\,dx\,dy\,dz.$$
Each successive integral is absolute in that order; no joint absolute integral is used. Make the successive changes $x_1=tz$, $x_2=y/z$, $x_3=x/y$. Their absolute Jacobians turn the total modulus weight into $\prod_j|x_j|^{-\lambda_j}$, since the residual factor $|t|^{\lambda_1-1}$ cancels the prefactor. Their signs become $(\operatorname{sgn}x_1)^{\delta_1}(\operatorname{sgn}x_2)^{\delta_2}(\operatorname{sgn}x_3)^{\delta_3}$ by $\sum\delta_j=0$, and the phase becomes $e(-x_1-x_2-x_3)$. The resulting ordered repeated integral is exactly the one in the Statement. [F1, F4, F5, F6, step 1.1, step 3.1, algebra]

5.1 The continuation is genuinely holomorphic in the parameters. Fix $f_0\in\mathcal S$. For $\alpha$ in a compact parameter set, [F6] gives common bounds $|D^jh_\alpha(x)|\le C_j|x|^{-K-j}$ near zero and uniform rapid derivative decay at infinity for $h_\alpha=T_{\alpha,\delta_1}\widehat f_0$. Cauchy's formula on a slightly larger parameter compact set gives the same bounds for parameter derivatives. Therefore $h_\alpha(1/u)(\operatorname{sgn}u)^{\delta_3}|u|^{-\beta-1}$ is a jointly holomorphic smooth function family on $u\ne0$, uniformly flat at zero and with a common polynomial symbol bound at infinity on compact $(\alpha,\beta)$ sets. After sufficiently many $u$ derivatives it and the finitely many desired moment/parameter derivatives are uniformly L1. Its Fourier transform off zero is thus jointly holomorphic by differentiation of these dominated L1 formulas. Equivalently Cauchy coefficients on a slightly larger parameter polydisc have a common integrable majorant and may be integrated termwise, giving a convergent local joint power series. Multiplication by $|t|^{1-\lambda_1}$ is entire for fixed $t\ne0$. This proves the stated holomorphic continuation of $F_0$, so $F=F_0$ everywhere. For a fixed flat Schwartz $f$, the normalized $f_0(\lambda)$ is itself holomorphic in every Schwartz seminorm, by its uniform flatness at zero and rapid decay at infinity, and the same estimates apply. Thus both approved test classes and all complex parameters are retained. Combining with step 4.1 proves the full formula. [F1, F4, F5, F6, step 1.1, step 3.1, step 4.1, step 4.2, algebra] ∎
