---
id: thm-qa-27-pseudoinverse-polynomial-degree
kind: theorem
title: "Gapped pseudoinverse polynomial degree and error"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - thm-gaussian-integral
  - thm-laurent-expansion-annulus
  - thm-laurent-coefficient-formula-and-uniqueness
  - def-qa-27-block-encoded-qlsp
  - alg-qa-27-qsvt-pseudoinverse
  - lem-qa-27-even-sign-window
  - def-qa-24-singular-value-transform
  - thm-qa-24-real-polynomial-extraction
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Lemma 40 and Theorem 41, PDF pp.36–38; polynomial approximation proof."
---

## Statement

For rational $0<e\le\delta\le1/2$, the uncapped bare-gap OP1A construction terminates and returns an odd real polynomial $p$ of degree $O(\delta^{-1}\log(1/e))$ satisfying $|p(x)|\le1$ on $[-1,1]$, $p(0)=0$, and
$$\sup_{x\in[\delta,1]}\left|p(x)-\frac{\delta}{2x}\right|\le e.$$
For a normalized block $\bar A=A/\alpha$ whose supported singular values lie in $\{0\}\cup[\delta,1]$, this gives the singular-space approximation $p^{\rm SV}(\bar A^\dagger)\approx(\delta/2)\bar A^+=(\gamma/2)A^+$ on the supported input, where $\delta=\gamma/\alpha$.

In the uncapped phase-generation route, the exact phase list returned by [[alg-qa-27-qsvt-pseudoinverse]] has ordered QSP product equal to the completed polynomial pair used by its generator, and the algorithm's coefficientwise product check passes before QSVT execution. Numerical angle and compiler errors remain subject to their separate certificates; a failed exact product check returns `PHASE_PRODUCT_ERROR` and is never treated as a successful transform.

## Facts & Assumptions

**Given:** Rational $0<e\le\delta\le1/2$ and the uncapped OP1A construction. Certified upper endpoints for the integer bounds are chosen within one of their real ceilings; arbitrary larger endpoints have their actual degree charged separately.

[F1] OP1A specifies the finite binomial sums, odd Chebyshev interpolant, cutoff, exact range test, reciprocal Bernstein subdivision, and returned-phase product check ([[alg-qa-27-qsvt-pseudoinverse]]).

[F2] The real-polynomial extraction acts by the declared polynomial on the supported singular vectors ([[thm-qa-24-real-polynomial-extraction]]).

[F3] The Gaussian normalization is $\int_{-\infty}^{\infty}e^{-x^2}dx=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F4] A holomorphic function on an annulus has its locally uniformly convergent Laurent expansion and contour coefficient formula ([[thm-laurent-expansion-annulus]], [[thm-laurent-coefficient-formula-and-uniqueness]]).

## Proof


1.1 Put $\kappa_0=2/\delta$, $u=e/(100\delta)$ and $f_b(x)=(1-(1-x^2)^b)/x$, with its polynomial value at zero. For $|x|\ge1/\kappa_0$, $|f_b(x)-1/x|\le\kappa_0\exp(-b/\kappa_0^2)\le u$. To identify its Chebyshev coefficients, expand $\sin^{2b}\theta=2^{-2b}\binom{2b}b+2^{1-2b}\sum_{r=1}^b(-1)^r\binom{2b}{b+r}\cos(2r\theta)$, obtained by expanding $(e^{i\theta}-e^{-i\theta})^{2b}$. Multiplying $\sum_{j=0}^{b-1}a_jT_{2j+1}(x)$ by $x$ and using $2xT_n=T_{n+1}+T_{n-1}$ telescopes the binomial tails to $1-(1-x^2)^b$. This proves the stated coefficient formula. [given, F1, algebra]

1.2 Write $H(z)=\operatorname{erf}(\beta z)$, $h=g/2$, $q=h+\sqrt{1+h^2}$ and $L=\ln(16/v)$. The defining erf series is entire by the ratio test, and [F3] gives $|H(x)|\le1$ on the real line. On the ellipse of parameter $q$, $|\operatorname{Im}z|\le h$. Integrating vertically from the real axis gives $|H(z)|\le1+2\beta h\exp(\beta^2h^2)=C$. The Laurent expansion of $H((w+w^{-1})/2)$ and [F4] give Chebyshev coefficients bounded by $2Cq^{-l}$. Put $N=n+1$ and $\theta_j=(j+1/2)\pi/N$. At these nodes, $\cos((l+2N)\theta_j)=-\cos(l\theta_j)$, $\cos((2N-l)\theta_j)=-\cos(l\theta_j)$, and $\cos(N\theta_j)=0$. Repeated reduction therefore interpolates every unresolved $T_l$ as $\pm T_r$ for $0\le r<N$, or as zero; each folded mode has sup norm at most one. Subtracting the original mode costs at most twice its coefficient, so summing the omitted modes bounds interpolation error by $4Cq^{-n}/(q-1)$, at most $v/32$ under OP1A's stopping condition. Odd symmetrization cannot increase this error because $H$ is odd. The declared aggregate evaluation and rounding errors contribute at most $v/32$ more, so the pre-rescaled interpolant differs uniformly from $H$ by at most $v/16$. After division by $1+v/4$, its output $S$ satisfies $|S|<1$, and differs from $H/(1+v/4)$ by at most $v/16$. The Gaussian tail inequality $1-\operatorname{erf}(z)\le e^{-z^2}$ for $z\ge0$ follows, for $0\le z\le1/\sqrt\pi$, by differentiation of $e^{-z^2}-\operatorname{erfc}(z)$, and thereafter by the integral bound $\operatorname{erfc}(z)\le e^{-z^2}/(\sqrt\pi z)$. Hence $|S(x)-\operatorname{sign}x|<v/2$ when $|x|\ge g$. [F1, F3, F4, algebra]

2.1 For completeness, if $X$ is a sum of $2b$ independent fair bits, $\mathbb E\exp(s(X-b))=\cosh(s/2)^{2b}\le\exp(bs^2/4)$: the last inequality follows by integrating $\tanh z\le z$ for $z\ge0$. Markov's inequality and minimization at $s=2r/b$ yield $\Pr[X-b\ge r]\le\exp(-r^2/b)$. Consequently the omitted coefficient sum beyond $J$ is at most $4b\exp(-J^2/b)\le u$, and $|T_n(x)|\le1$ on $[-1,1]$ proves uniform truncation error at most $u$. Thus $P=(\delta/2)g$ differs from $\delta/(2x)$ by at most $\delta u=e/100$ on $|x|\ge\delta/2$, and $|P|\le2\delta(J+1)<P_{\max}$ globally. [step 1.1, algebra]

3.1 For $t=3\delta/4$, $a=1+t$, monotonicity of $H$ gives $0\le C_{\rm cut}(x)\le1+v/16$ on $[-1,1]$: nonnegativity uses $|S|\le1$, and the upper bound uses $x-t<x+t$ in step 1.2. If $|x|\le\delta/2$, the two shifted arguments have opposite signs and magnitude at least $g$, so $C_{\rm cut}(x)\le v/2$. If $|x|\ge\delta$, their signs agree and $|C_{\rm cut}(x)-1|\le v/2$. Therefore inside $[-\delta/2,\delta/2]$, $|PC_{\rm cut}|\le P_{\max}v/2\le e/2000$; outside it, $|PC_{\rm cut}|\le(1+e/100)(1+v/16)$. Division by $1+e/10$ gives a strict global bound below $1-e/20$. The total coefficient error $e/1000$ preserves a strict range margin. On $[\delta,1]$, the unrounded reciprocal error after division is at most $e/100+P_{\max}v/2+e/20<e/8$; rounding retains error below $e/4$. Both reciprocal certificate polynomials are therefore strictly positive, by at least $3e\delta/4$. Parity-preserving coefficient rounding leaves $p$ odd, hence $p(0)=0$. [step 2.1, step 1.2, algebra]

4.1 All generation loops terminate. The binomial and Chebyshev sums are finite; $q>1$ makes the interpolation tail test terminate; and the explicit entire-function Taylor remainder tends to zero by the ratio test. Certified arithmetic refines positive strict inequalities finitely. For any fixed certificate polynomial $r$ of degree $D$ and a cell $[a,a+w]$, its Bernstein coefficient is $r(a)+\sum_{k=1}^j r^{(k)}(a)w^k\binom jk/(k!\binom Dk)$. On the compact interval, the absolute difference from $r(a)$ tends uniformly to zero as $w\to0$. Thus the positive margin in step 3.1 guarantees a finite dyadic level with every coefficient positive. The exact critical-point test succeeds by the strict global margin, and no actual failed-certificate regeneration is needed at adequate precision. This proves deterministic termination in the uncapped mode; a declared finite cap retains its timeout branch. [step 3.1, F1, algebra]

5.1 Since $e\le\delta$, $b=O(\delta^{-2}\ln(1/e))$, $J=O(\delta^{-1}\ln(1/e))$, and $\ln P_{\max}=O(\ln(1/e))$. Also $g=\Theta(\delta)$, $\ln q=\Theta(g)$, $\ln C=O(\ln(1/v))$ and $\ln(1/v)=O(\ln(1/e))$; therefore the least interpolation degree is $O(\delta^{-1}\ln(1/e))$. Multiplication adds degrees and rounding does not increase them, proving the stated degree bound. This does not assign a bit-time or gate bound to the coefficient generation or Bernstein refinement. On each supported singular vector, apply [F2] to this odd polynomial; the finite SVD then turns the uniform scalar error into operator error at most $e$. Finally $\bar A^+=\alpha A^+$ gives $(\delta/2)\bar A^+=(\gamma/2)A^+$. [step 2.1, step 1.2, step 3.1, step 4.1, F2, algebra]

6.1 It remains to link the phase list emitted by the QA23 peeling procedure to the exact completed pair. At each nonconstant peel, its unit scalar $\omega_n$ is chosen with $\omega_n^2=a_\ell/b_{\ell-1}$; the explicit square-root formula and coefficient checks give this identity exactly. The simultaneous updates in that procedure are the coefficients of right multiplication of the current source-convention matrix by $Z(-\psi_n)W_S^*$. Therefore the saved peel is reversed by multiplication by $W_SZ(\psi_n)$. At the terminal constant pair, the stored base phase gives its exact diagonal matrix; each degree-padding block is the exact identity. Induction over the finite peel list, followed by reversing its stored order, reconstructs the original source-convention matrix. The stated convention conversion then gives the exact reflected QSP product with upper-left entry $p_0+iB$ and the other three entries of the returned completed pair. Thus the coefficientwise product check in [F1] passes for every uncapped promised construction. It uses finitely many coefficient-array operations, all charged to the phase-generation/certificate arithmetic coordinate; exact arithmetic failures still return `PHASE_PRODUCT_ERROR` before execution. Numerical angle and compiler certificates concern later implementations and are not part of this exact identity. [F1, step 1.2, step 4.1, algebra, induction] ∎

