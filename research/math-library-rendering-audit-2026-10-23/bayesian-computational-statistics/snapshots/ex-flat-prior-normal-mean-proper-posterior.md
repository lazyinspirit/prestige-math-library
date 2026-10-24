---
id: ex-flat-prior-normal-mean-proper-posterior
kind: example
title: A flat prior gives a proper known-variance normal-mean posterior
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-finite-sigma-finite-and-semifinite-measures
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - prop-measure-monotonicity
  - cor-continuous-functions-are-borel-measurable
  - def-borel-sigma-algebra
  - thm-borel-sets-are-lebesgue-measurable
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - def-probability-measure
  - lem-normal-density-has-total-mass-one
  - def-standard-normal-and-normal-laws
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
proof_strategy: direct
axiom_use: >-
  Axiom of Choice is used only to supply countable choice for the Lebesgue
  measure, Borel measurability, standard-normal, and Lebesgue change-of-variables
  suppliers. The product construction, completing-the-square calculation, and
  fixed-fibre posterior normalization make no further arbitrary choices.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §§2.5, 2.8"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
---

## Example

Let $n\ge1$, let the observed real values be $y_1,\ldots,y_n$, and let the
known variance be $\sigma^2>0$, with $\sigma=\sqrt{\sigma^2}$. The parameter
space is $(\mathbb R,\mathcal L(\mathbb R))$ with Lebesgue measure $\lambda$.
Equip the data space $\mathbb R^n$ with the finite product of
$\mathcal L(\mathbb R)$ and the recursively defined product measure
$\lambda^{\otimes n}$. For each parameter $\mu$, define the one-observation
law by the density
$$q_\mu(x)=\frac{1}{\sigma\sqrt{2\pi}}\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$$
relative to $\lambda$ and take the $n$-observation sampling law to be the
product of these one-coordinate laws. Its likelihood density at
$\mathbf y=(y_1,\ldots,y_n)$ is $L_{\mathbf y}(\mu)=\prod_{i=1}^n q_\mu(y_i)$.
Take the flat prior measure $\lambda$ on $\mathbb R$. Writing
$\bar y=n^{-1}\sum_{i=1}^n y_i$, the evidence is finite and positive, and the
fiberwise posterior has Lebesgue density
$$\left(\frac{n}{2\pi\sigma^2}\right)^{1/2}\exp\!\left(-\frac{n(\mu-\bar y)^2}{2\sigma^2}\right).$$
Its restriction to Borel sets is the normal law $N(\bar y,\sigma^2/n)$.

## Facts & Assumptions

[A1] [[def-axiom-of-choice]]: the Axiom of Choice is assumed for the stated
choice-dependent Lebesgue-measure, standard-normal, and change-of-variables
suppliers.

[F1] [[def-posterior-evidence-normalizer-and-fiberwise-update]]: the fiberwise
update divides the likelihood section times the prior measure by its evidence
only on a finite positive fiber.

[F2] [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]]: a
finite positive evidence normalizer yields a probability after division by that
normalizer.

[F3] [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]:
assuming countable choice, Lebesgue measure on $\mathbb R^d$ is sigma-finite,
and the boxes $(-k,k]^d$ have measure $(2k)^d$ and cover the space.

[F4] [[prop-measure-monotonicity]]: if $A\subseteq B$ are measurable, then
$\lambda(A)\le\lambda(B)$.

[F5] [[lem-normal-density-has-total-mass-one]]: under the Axiom of Choice,
$\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$ is positive and Borel measurable with
$\int_{\mathbb R}\phi\,d\lambda=1$.

[F6] [[thm-choice-implies-dependent-implies-countable-choice]]: the Axiom of
Choice implies the Axiom of Countable Choice.

[F7] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]:
under countable choice, a $C^1$ diffeomorphism between open Euclidean sets
obeys the change-of-variables formula for every nonnegative Lebesgue-measurable
integrand.

[F8] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: the
finite product sigma-algebra is defined recursively from measurable rectangles.

[F9] [[def-product-measure-on-sigma-finite-spaces]]: for sigma-finite factors,
the product measure is defined by integrating section measures.

[F10] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]:
for sigma-finite factors, the product measure exists, satisfies the rectangle
formula, and is sigma-finite.

[F11] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative
product-measurable function on a sigma-finite product has equal iterated and
product integrals.

[F12] [[cor-continuous-functions-are-borel-measurable]]: under countable
choice, a continuous map between finite-dimensional Euclidean spaces is Borel
measurable.

[F13] [[def-borel-sigma-algebra]]: $\mathcal B(\mathbb R)$ is the sigma-algebra
generated by the open subsets of $\mathbb R$.

[F14] [[def-standard-normal-and-normal-laws]]: $N(0,1)$ has density $\phi$ and
$N(m,s^2)$ for $s>0$ is the pushforward of $N(0,1)$ by $z\mapsto m+sz$.

[F15] [[thm-borel-sets-are-lebesgue-measurable]]: under countable choice, every
Borel subset of a Euclidean space is Lebesgue measurable.

[F16] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: the
set function $A\mapsto\int_A f\,d\mu$ is a measure for every nonnegative
measurable $f$.

[F17] [[def-probability-measure]]: a probability measure is a measure of total
mass one.

**Given:** The model and data in the Example, the Axiom of Choice, and Lebesgue
measure on the indicated real spaces.

## Verification

1.1 By [A1] and [F6], countable choice is available for [F3]. The boxes $E_k=(-k,k]$ have finite measure $2k$ and cover $\mathbb R$ by [F3], so $\lambda$ is sigma-finite. Since $E_k\subseteq\mathbb R$, [F4] gives $\lambda(\mathbb R)\ge2k$ for every $k$, hence $\lambda(\mathbb R)=+\infty$ and the flat prior is improper. [given, A1, F3, F4, F6, algebra]

1.2 Fix $\mu$ and set $T(x)=(x-\mu)/\sigma$. This is a $C^1$ diffeomorphism of $\mathbb R$ with inverse $t\mapsto\mu+\sigma t$ and $|T'(x)|=1/\sigma$. The formula for $q_\mu$ is continuous in $x$, hence Borel by [F12] and Lebesgue measurable by [F15]. Since $\phi$ is also Lebesgue measurable by [F5, F15], [F7] gives $\int_{\mathbb R}q_\mu\,d\lambda=\int_{\mathbb R}\phi\,d\lambda=1$. The set function $P_\mu(A)=\int_Aq_\mu\,d\lambda$ is a measure by [F16], and its total mass one makes it a probability by [F17]. For a Borel $A$, apply [F7] to $f=\mathbf1_Aq_\mu$ and $S(z)=\mu+\sigma z$: $$N(\mu,\sigma^2)(A)=\int \mathbf1_A(S(z))\phi(z)\,d\lambda(z)=\int_A q_\mu(x)\,d\lambda(x),$$ since $\sigma q_\mu(S(z))=\phi(z)$ and [F14] defines $N(\mu,\sigma^2)$ as this affine pushforward. Thus each coordinate law has the stated density. [given, A1, F5, F6, F7, F12, F13, F14, F15, F16, F17, algebra]

1.3 Put $S=\sum_{i=1}^n(y_i-\bar y)^2$. Expanding and using $\sum_i(y_i-\bar y)=0$ gives $\sum_i(y_i-\mu)^2=S+n(\mu-\bar y)^2$. Hence $L_{\mathbf y}(\mu)=(2\pi\sigma^2)^{-n/2}e^{-S/(2\sigma^2)}e^{-n(\mu-\bar y)^2/(2\sigma^2)}$. This is continuous in $\mu$, hence Borel by [F12] and $\mathcal L(\mathbb R)$-measurable by [F15]; therefore its evidence integral is defined by [F1]. [given, A1, F1, F6, F12, F15, algebra]

2.1 For $k\ge1$, recursively form the finite product data measure $\nu_k=\lambda^{\otimes k}$ on $\mathcal L(\mathbb R)^{\otimes k}$ using [F8] and [F9]. Starting from the sigma-finite $\lambda$, [F10] ensures that each $\nu_k$ exists and is sigma-finite. The coordinate projections are measurable by [F8], so each pullback of $q_\mu$ is measurable by step 1.2; finite multiplication is continuous, making $f_k(y_1,\ldots,y_k)=\prod_{i=1}^kq_\mu(y_i)$ product-measurable. Step 1.2 gives $\int f_1\,d\nu_1=1$. If $\int f_k\,d\nu_k=1$, the recursive product definition and Tonelli [F11] give $\int f_{k+1}\,d\nu_{k+1}=\int f_k\,d\nu_k\int q_\mu\,d\lambda=1$. Thus $P_{\mu,n}(E):=\int_E f_n\,d\nu_n$ is a measure by [F16] and a probability by [F17]. For measurable rectangles $E=A_1\times\cdots\times A_n$, repeated Tonelli gives $P_{\mu,n}(E)=\prod_{i=1}^nP_\mu(A_i)$. The product measure theorem [F10], iterated over the finite factors, identifies $P_{\mu,n}$ as the product of the one-coordinate laws. Therefore these coordinates are independent and $L_{\mathbf y}(\mu)$ is their joint density. [given, A1, F3, F6, F8, F9, F10, F11, F16, F17, step 1.2]

2.2 Set $T(\mu)=\sqrt n(\mu-\bar y)/\sigma$, a $C^1$ diffeomorphism of $\mathbb R$ with inverse $u\mapsto\bar y+\sigma u/\sqrt n$ and derivative $\sqrt n/\sigma$. Since $e^{-u^2/2}=\sqrt{2\pi}\,\phi(u)$ is nonnegative and Lebesgue measurable by [F5, F15], [F7] gives $\int_{\mathbb R}e^{-n(\mu-\bar y)^2/(2\sigma^2)}\,d\lambda(\mu)=\frac{\sigma}{\sqrt n}\sqrt{2\pi}$. Integrating the factorization in step 1.3 against the flat prior gives $Z(\mathbf y)=(2\pi\sigma^2)^{-n/2}e^{-S/(2\sigma^2)}\frac{\sigma\sqrt{2\pi}}{\sqrt n}$, which is strictly positive and finite for every finite data vector. [given, A1, F1, F5, F6, F7, F15, step 1.3, algebra]

3.1 Dividing step 1.3 by the finite positive evidence in step 2.2 gives $h(\mu)=\frac{\sqrt n}{\sigma}\phi\!\left(\frac{\sqrt n(\mu-\bar y)}{\sigma}\right)$, the displayed Lebesgue density. Put $s=\sigma/\sqrt n>0$; $S(z)=\bar y+sz$ is a $C^1$ diffeomorphism with inverse $\mu\mapsto(\mu-\bar y)/s$. For every Borel $A$, [F14] defines $N(\bar y,s^2)$ as this pushforward; [F7] applied to $f=\mathbf1_Ah$, which is Lebesgue measurable by [F12, F13, F15], gives $$\int_Ah(\mu)\,d\lambda(\mu)=\int\mathbf1_A(S(z))h(S(z))s\,d\lambda(z)=\int\mathbf1_A(S(z))\phi(z)\,d\lambda(z)=N(\bar y,s^2)(A).$$ The update on the full Lebesgue sigma-algebra is a probability by [F2]. If $n=0$ were allowed, its empty-product likelihood would be $1$ and the evidence would be $\lambda(\mathbb R)=+\infty$ by step 1.1, so no normalized update would exist. [given, A1, F2, F6, F7, F12, F13, F14, F15, step 1.1, step 1.3, step 2.2, algebra] ∎

