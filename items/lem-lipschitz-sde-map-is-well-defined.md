---
id: lem-lipschitz-sde-map-is-well-defined
kind: lemma
title: Well-definedness and estimates for the Lipschitz SDE map
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
axiom_base: Full AC
deps:
  - def-ito-sde-and-strong-solution
  - lem-adapted-continuous-processes-are-progressively-measurable
  - def-progressively-measurable-and-predictable-process
  - def-ito-integral-for-square-integrable-predictable-processes
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-doob-maximal-bound-for-the-ito-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-ito-integral-process-has-a-continuous-martingale-version
  - lem-rat-embeds-dense
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Ramon van Handel, Stochastic Calculus, Filtering, and Stochastic Control: Lecture Notes (ACM 217, Spring 2007), Chapter 5.1"
      url: "https://web.math.princeton.edu/~rvan/acm217/ACM217.pdf"
    - title: "A.W. van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Section 7.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Use the data and coefficient bounds of
[[def-ito-sde-and-strong-solution]] on $[0,T]$, with $T\ge0$, dimensions
$d,m\ge1$, Lipschitz constant $L$, and growth constant $K$. Let
$\mathcal H_T$ be the set of adapted continuous $\mathbb R^d$-valued
processes $Z$ with $\|Z\|_t^2:=E\sup_{0\le u\le t}|Z_u|^2<\infty$ for
$0\le t\le T$. Use everywhere-continuous adapted representatives as in [[def-ito-sde-and-strong-solution]]; changing them on the $\mathcal F_0$-measurable null complement of a common continuity event preserves the path norm and Itô-integral classes. For $Z\in\mathcal H_T$ define
$$\Phi(Z)_t:=X_0+\int_0^t b(s,Z_s)\,ds+\left(\sum_{k=1}^m\int_0^t\sigma^{ik}(s,Z_s)\,dW_s^k\right)_{i=1}^d.$$
The integrals are well-defined, $\Phi(Z)\in\mathcal H_T$, and, with
$$C_g:=6K^2T+24mK^2,\qquad C_d:=2TL^2+8mL^2,$$
the following bounds hold for every $t\in[0,T]$ and $Z,V\in\mathcal H_T$:
$$E\sup_{0\le u\le t}|\Phi(Z)_u|^2\le 3E|X_0|^2+C_g\int_0^t(1+\|Z\|_s^2)\,ds,$$
$$E\sup_{0\le u\le t}|\Phi(Z)_u-\Phi(V)_u|^2\le C_d\int_0^t E\sup_{0\le r\le s}|Z_r-V_r|^2\,ds.$$
For the constant input $Z_t=X_0$,
$$E\sup_{0\le t\le T}|\Phi(Z)_t-X_0|^2\le (4K^2T^2+16mK^2T)(1+E|X_0|^2).$$

## Facts & Assumptions

**Given:** the finite-horizon SDE data and bounds in the Statement, the
Axiom of Choice required by the stochastic-integral suppliers, and adapted
continuous $Z,V$ with finite $\mathcal H_T$ path norms.

[F1] The coefficients are jointly Borel, satisfy
$|b(t,x)|+\|\sigma(t,x)\|_F\le K(1+|x|)$ and
$|b(t,x)-b(t,y)|+\|\sigma(t,x)-\sigma(t,y)\|_F\le L|x-y|$; the initial
variable is $\mathcal F_0$-measurable with finite second moment. The SDE
uses the displayed finite sum of scalar Itô integrals. [[def-ito-sde-and-strong-solution]]

[F2] Tonelli's theorem applies to the nonnegative jointly measurable
coefficient-square functions on $[0,T]\times\Omega$, so their expected time
integrals equal the time integrals of their expectations.
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F3] An adapted continuous process is predictable and progressive; Borel
functions of $(t,Z_t)$ are predictable, and these properties permit the
coefficient compositions in the scalar Itô integrals. [[lem-adapted-continuous-processes-are-progressively-measurable]] [[def-progressively-measurable-and-predictable-process]]

[F4] A finite-energy predictable scalar integrand has a continuous
square-integrable Itô-integral martingale version, its terminal second moment
is the integrand energy, and
$E\sup_{u\le t}|\int_0^u H_s\,dW_s|^2\le4E\int_0^tH_s^2ds$.
[[def-ito-integral-for-square-integrable-predictable-processes]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-doob-maximal-bound-for-the-ito-integral]]

[F5] Rational times are dense in each real interval, and continuity then gives
$\sup_{u\le t}|Z_u|=\sup_{q\in\mathbb Q\cap[0,t]\,\cup\{t\}}|Z_q|$ for a
continuous path: approximate each $u<t$ by rational times and pass to the
limit. This countable supremum is measurable for adapted $Z$.
[[lem-rat-embeds-dense]]

[F6] The Axiom of Choice is part of the stated scalar Itô-integral and
martingale interfaces. [[def-axiom-of-choice]]

## Proof

1.1 For $Z\in\mathcal H_T$, the path supremum is measurable by [F5], [F3] makes each coefficient composition predictable, and [F1] and Tonelli's theorem [F2] give $E\int_0^T\bigl(|b(s,Z_s)|^2+\|\sigma(s,Z_s)\|_F^2\bigr)ds\le2K^2\int_0^T(1+E|Z_s|^2)ds\le2K^2T(1+\|Z\|_T^2)<\infty.$ This nonnegative energy is finite almost surely; on each such path, applying $0\le\int_0^T(g-\bar g)^2ds$ to $g(s)=|b(s,Z_s)|$ and its average gives $\int_0^T|b(s,Z_s)|ds\le\sqrt{T}(\int_0^T|b(s,Z_s)|^2ds)^{1/2}<\infty$. Every scalar diffusion coordinate has finite energy. By [F4] each scalar integral has a continuous adapted version; their finite sum and the drift integral define $\Phi(Z)$ continuously and adaptedly. [F1, F2, F3, F4, F5, given]

1.2 Write $S_t=(\sum_k\int_0^t\sigma^{ik}(s,Z_s)dW_s^k)_{i=1}^d$. For vectors $z_1,\dots,z_m$, expansion gives $m\sum_k|z_k|^2-|\sum_kz_k|^2=\sum_{k<\ell}|z_k-z_\ell|^2\ge0$. Hence $\sup_{u\le t}|S_u|^2\le m\sum_k\sum_i\sup_{u\le t}|M^{ik}_u|^2$ for the scalar coordinate integrals $M^{ik}$. Applying [F4] to each gives $E\sup_{u\le t}|S_u|^2\le4mE\int_0^t\|\sigma(s,Z_s)\|_F^2ds$. [F4, given]

2.1 For a square-integrable vector path $h$ on $[0,u]$, put $\bar h=u^{-1}\int_0^u h(s)ds$ when $u>0$. The identity $0\le\int_0^u|h-\bar h|^2ds=\int_0^u|h|^2ds-u^{-1}|\int_0^u h(s)ds|^2$ gives $|\int_0^u h(s)ds|^2\le u\int_0^u|h(s)|^2ds$; for $u=0$ both sides vanish. Applying this pathwise to the drift and using $|X_0+D+S|^2\le3(|X_0|^2+|D|^2+|S|^2)$ give $E\sup_{u\le t}|\Phi(Z)_u|^2\le3E|X_0|^2+3tE\int_0^t|b(s,Z_s)|^2ds+12mE\int_0^t\|\sigma(s,Z_s)\|_F^2ds.$ By [F1], each squared coefficient is at most $2K^2(1+|Z_s|^2)$. Since $t\le T$, the last display is at most $3E|X_0|^2+(6K^2T+24mK^2)\int_0^t(1+\|Z\|_s^2)ds$. Hence $\Phi(Z)\in\mathcal H_T$ and the first bound holds. [F1, F2, step 1.2, given]

2.2 For $Z,V\in\mathcal H_T$, the initial terms cancel. The two-term square inequality, the drift Cauchy–Schwarz bound, the coordinate estimate of step 1.2, and the Lipschitz part of [F1] give $E\sup_{u\le t}|\Phi(Z)_u-\Phi(V)_u|^2\le2tL^2\int_0^tE|Z_s-V_s|^2ds+8mL^2\int_0^tE|Z_s-V_s|^2ds\le(2TL^2+8mL^2)\int_0^tE\sup_{r\le s}|Z_r-V_r|^2ds.$ This is the second bound. [F1, F2, step 1.2, given]

2.3 For the constant input $Z_t=X_0$, apply $|D+S|^2\le2|D|^2+2|S|^2$ to $\Phi(Z)-X_0$. Cauchy–Schwarz bounds the drift term by $2T\int_0^T E|b(s,X_0)|^2ds\le4K^2T^2(1+E|X_0|^2)$; step 1.2 and [F1] bound the diffusion term by $8m\int_0^T E\|\sigma(s,X_0)\|_F^2ds\le16mK^2T(1+E|X_0|^2)$. Their sum is the stated base-iterate bound. [F1, F2, step 1.2, given]

3.1 If $T=0$, both integrals vanish, $\Phi(Z)_0=X_0$, and all three estimates hold with zero integral terms; for $T>0$, the preceding steps establish every assertion. The coordinate sums are finite and no nondegeneracy of $\sigma$ is used. The Axiom of Choice enters only through the interfaces recorded in [F6]. [F1, F6, step 1.1, step 2.1, step 2.2, step 2.3, given, algebra] ∎

## Source notes

Van Handel, Chapter 5.1, and van der Vaart, Section 7.1, independently use
linear growth, Itô maximal estimates, and Picard iteration. The bounds above
are supplied here for adapted continuous vector inputs and finite
matrix-coordinate integrals; no source estimate is imported without its
dimension and integrability hypotheses.
