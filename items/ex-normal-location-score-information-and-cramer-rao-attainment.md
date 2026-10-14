---
id: ex-normal-location-score-information-and-cramer-rao-attainment
kind: example
title: "Normal location score, information, and attainment"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-score-and-fisher-information
  - thm-score-mean-zero-and-information-identity
  - thm-cramer-rao-lower-bound
  - def-statistic-and-estimator
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - thm-integration-against-a-density
  - thm-monotone-convergence-for-the-integral
  - thm-ftc-second-part
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-derivative-of-exponential
  - thm-exponential-definition-equivalence
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-change-of-variables-for-expectation
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - def-derivative
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, §3.1, PDF pp. 21–24"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Anna Mikusheva, MIT 14.381 Lecture 6: Efficient Estimators, Rao-Cramer Bound, PDF pp. 2–5"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/15224973dfc1c2b4287804c8712681f7_MIT14_381F18_lec6.pdf"
---

## Example

Assume AC. Let $X\sim N(\mu,\sigma^2)$, where $\mu\in\mathbb R$ is the
parameter and $\sigma^2>0$ is fixed. With Lebesgue measure as dominator, the
density is
$$p_\mu(x)=\frac{1}{\sqrt{2\pi\sigma^2}} \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right).$$
The estimator $T=X$ is unbiased for $\psi(\mu)=\mu$, and it attains the
scalar Cramér–Rao bound.

## Facts & Assumptions

**Given:** AC; $\sigma^2>0$; the normal location model and density displayed above; and $T(X)=X$.

[A1] [[def-axiom-of-choice]]: AC supplies the normal probability law and the arbitrary-index density representatives used by the general score definition.

[F1] [[def-standard-normal-and-normal-laws]]: $N(0,1)$ has density $\phi(z)=e^{-z^2/2}/\sqrt{2\pi}$, and $N(\mu,\sigma^2)$ is the law of $\mu+\sigma Z$ for $Z\sim N(0,1)$.

[F2] [[lem-normal-density-has-total-mass-one]]: the standard normal density $\phi(z)=e^{-z^2/2}/\sqrt{2\pi}$ integrates to $1$. The required second moment is established locally below by compact-interval integration. Also [[lem-gaussian-even-moment-bound-for-brownian-increments]] gives $E Z^2=1$: instantiate its increment as $X_t=Z$ minus the constant $X_s=0$, with labels $s=0,t=1$ and $m=1$; no Brownian process is required.

[F3] [[thm-change-of-variables-for-expectation]], [[thm-integration-against-a-density]], and [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: expectations under a density are density integrals, affine normal laws are computed from $X=\mu+\sigma Z$, and expectation is linear on integrable variables.

[F4] [[def-score-and-fisher-information]]: the score is the derivative of the log density and scalar information is its expected square.

[F5] [[thm-score-mean-zero-and-information-identity]]: the stated regularity hypotheses imply mean-zero score and $I=-\mathbb E[\ell'']$.

[F6] [[def-moments-variance-and-covariance]]: variance and covariance are centered second moments.

[F7] [[thm-cramer-rao-lower-bound]]: under the score-covariance identity, the scalar variance bound has equality exactly when the centered estimator is $(\psi'/I)$ times the score.

[F8] [[def-derivative]]: the derivative is the limit of the difference quotient $(f(x)-f(c))/(x-c)$ at $c$.

[F9] [[thm-derivative-of-exponential]], [[thm-exponential-definition-equivalence]], [[thm-chain-rule]], and [[thm-algebra-of-derivatives]]: the exponential is smooth and equals its power series; the chain and product rules give the derivatives of $\phi$ and $z\phi(z)$.

[F10] [[thm-continuous-implies-integrable]], [[thm-ftc-second-part]], and [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: continuous functions on a compact interval are integrable, the second FTC evaluates an integral of a derivative, and the Riemann and Lebesgue integrals agree there.

[F11] [[thm-monotone-convergence-for-the-integral]]: increasing sequences of nonnegative measurable functions pass to the limit under the integral.

[F12] [[thm-linear-change-of-variables-for-lebesgue-measure]]: under Countable Choice, for $a>0$ and Lebesgue measurable $E\subseteq\mathbb R$, $\lambda(aE)=a\lambda(E)$. The assumed AC supplies this premise. For nonnegative measurable $f$, correspondence of simple minorants under the bijection $z\mapsto az$ and the defining supremum for the nonnegative integral give $\int f(az)\,dz=a^{-1}\int f(y)\,dy$. Likewise [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]] and the same simple-minorant argument give $\int f(x-b)\,dx=\int f(y)\,dy$ for every real $b$.

## Verification

**Proof technique:** direct.

1.1 Let $Z\sim N(0,1)$ have density $\phi$, and put $G(z):=z\phi(z)$. By [F9], $\phi'(z)=-z\phi(z)$ and $G'(z)=\phi(z)-z^2\phi(z)$. These functions are smooth. [A1, F1, F9, given, algebra]

2.1 For each integer $n\ge1$, $G'$ is continuous on $[-n,n]$, hence integrable there by [F10]. Applying the second FTC and then the Riemann–Lebesgue integral identity in [F10] gives $\int_{[-n,n]}(\phi-z^2\phi)\,d\lambda=G(n)-G(-n)=2n\phi(n)$. Linearity [F3] therefore yields $\int_{[-n,n]}z^2\phi\,d\lambda=\int_{[-n,n]}\phi\,d\lambda-2n\phi(n)$. [F3, F10, step 1.1, algebra]

3.1 By the power-series representation in [F9], $e^{n^2/2}\ge(n^2/2)^2/2!=n^4/8$, so $0\le n\phi(n)\le8/(\sqrt{2\pi}n^3)\to0$. Also $\phi\mathbf1_{[-n,n]}\uparrow\phi$ and $z^2\phi\mathbf1_{[-n,n]}\uparrow z^2\phi$. Monotone convergence [F11], normalization [F2], and the compact calculation in step 2.1 give $\mathbb E Z^2=\int z^2\phi\,d\lambda=\lim_n\int_{[-n,n]}z^2\phi\,d\lambda=1<\infty$, also the second moment supplied in [F2]. [F2, F3, F9, F11, step 2.1, algebra]

4.1 Differentiating the displayed normal density gives $\partial_\eta p_\eta=(x-\eta)p_\eta/\sigma^2$, $\partial_{\eta\eta}p_\eta=((x-\eta)^2/\sigma^4-1/\sigma^2)p_\eta$, $S_\mu=(X-\mu)/\sigma^2$, and $\ell_\mu''=-1/\sigma^2$. The support is all of $\mathbb R$, and step 3.1 with $X=\mu+\sigma Z$ gives $\mathbb E_\mu S_\mu^2=1/\sigma^2<\infty$. [F1, F3, F4, step 3.1, given, algebra]

5.1 Fix $\mu_0\in\mathbb R$ and $\delta>0$, put $y=x-\mu_0$, and take $|\eta-\mu_0|<\delta$. Then $|x-\eta|\le|y|+\delta$ and $(x-\eta)^2\ge y^2/2-\delta^2$, so both first and second density derivatives are bounded by $C(1+y^2)e^{-y^2/(4\sigma^2)}$ for a finite $C$ independent of $\eta,x$. First, write the displayed density as $p_\mu(x)=\sigma^{-1}\phi((x-\mu)/\sigma)$. For every Borel set $A$, the scaling and translation identities [F12] with $a=\sigma$ and $b=\mu$ give $\int_Ap_\mu(x)\,dx=\int\mathbf1_A(\mu+\sigma z)\phi(z)\,dz=P(\mu+\sigma Z\in A)$, so $p_\mu$ is indeed a density of the specified law $N(\mu,\sigma^2)$. To justify the envelope transformation, put $a=\sqrt2\sigma>0$ and $q(y)=(4\pi\sigma^2)^{-1/2}e^{-y^2/(4\sigma^2)}$. For every Borel set $A$, [F12] applied to $f=\mathbf1_Aq$ gives $\int_A q(y)\,dy=a\int\mathbf1_A(az)q(az)\,dz=\int\mathbf1_A(az)\phi(z)\,dz$, since $a q(az)=\phi(z)$. By [F1] and [F3], the last integral equals $P(aZ\in A)$; thus $q$ is indeed a density of the affine law $Y=aZ\sim N(0,2\sigma^2)$. The envelope is a constant multiple of $(1+y^2)q(y)$. By [F3] and step 3.1, its integral in $y$ is finite, since $E(1+Y^2)=1+a^2 E Z^2=1+2\sigma^2$. Translation invariance in [F12] transfers this finite integral from $y$ to $x=y+\mu_0$, proving integrability of the displayed envelope on the original data space. Thus the fixed-support, continuous-derivative, envelope, and score-moment hypotheses of [F5] hold, so $\mathbb E_\mu S_\mu=0$ and $I(\mu)=-\mathbb E_\mu\ell_\mu''=1/\sigma^2$. [F1, F3, F5, F12, step 3.1, step 4.1, given, algebra]

6.1 From $X-\mu=\sigma^2S_\mu$ and step 5.1, $\mathbb E_\mu X=\mu$. Also $\mathbb E_\mu[(X-\mu)^2]=\sigma^2\mathbb E Z^2=\sigma^2$, so $T=X$ has variance $\sigma^2$. [F1, F3, F6, step 3.1, step 5.1, algebra]

7.1 The pointwise identity $X-\mu=\sigma^2S_\mu$ and [F6] give $\operatorname{Cov}_\mu(X,S_\mu)=\sigma^2I(\mu)=1$. On $\mathbb R$, $\psi(\mu)=\mu$ has difference quotient $1$ at every $x\ne\mu$, so [F8] gives $\psi'(\mu)=1$; the score-covariance identity required by [F7] holds. [F4, F6, F7, F8, step 5.1, step 6.1, algebra]

8.1 The bound [F7] is $\operatorname{Var}_\mu(X)\ge1/I(\mu)=\sigma^2$, and step 6.1 gives equality. Also $X-\mu=\sigma^2S_\mu=(\psi'(\mu)/I(\mu))S_\mu$, so the stated equality condition holds. [F6, F7, step 6.1, step 7.1, algebra] ∎
