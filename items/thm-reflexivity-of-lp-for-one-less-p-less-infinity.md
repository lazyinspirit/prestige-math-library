---
id: thm-reflexivity-of-lp-for-one-less-p-less-infinity
kind: theorem
title: Reflexivity of Lp for one less p less infinity
status: published
origin: pipeline
deps: ["def-reflexive-banach-space", "thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity", "lem-complex-lp-duality-from-real-lp-duality", "thm-riesz-fischer-completeness-of-l-p", "thm-complex-holder-minkowski-and-the-quotient-norm", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed."
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
      locator: "Theorem 6.15; arbitrary-measure Lp duality supplied locally"
    - title: "John K. Hunter, Measure Theory"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
      locator: "Theorems 7.10 and 7.14; completeness and duality"
proof_strategy: direct
---

## Statement

**Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$.**  For every
measure space $(S,\mathcal A,\mu)$ and every $1<p<\infty$, both
$L^p(\mu;\mathbb R)$ and $L^p(\mu;\mathbb C)$ are reflexive.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an arbitrary measure space, $1<p<\infty$, and the conjugate exponent $q$, so $1<q<\infty$ and the conjugate exponent of $q$ is $p$.

[F1] A Banach space is reflexive exactly when its canonical evaluation map into the bidual is surjective ([[def-reflexive-banach-space]]).

[F2] Under Countable Choice, real $L^r$ duality over an arbitrary measure space identifies every member of $(L^r)^*$ uniquely and isometrically with a bilinear integration density in $L^{r'}$, for $1<r<\infty$ ([[thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity]]).

[F3] Under Countable Choice, the same unique isometric bilinear-pairing identification holds for complex $L^r$, $1<r<\infty$ ([[lem-complex-lp-duality-from-real-lp-duality]]).

[F4] Under Countable Choice, real $L^r$ is complete for every $1\leq r\leq\infty$ ([[thm-riesz-fischer-completeness-of-l-p]]).

[F5] Complex $L^r$ has a well-defined norm, and its real and imaginary parts have norm at most the complex norm while the complex norm is at most the sum of their norms ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F6] Countable Choice is the assertion that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

**Proof technique:** apply the $L^p$ representation theorem twice and identify the resulting map with canonical evaluation.

1.1 First verify the Banach condition.  Real $L^p$ is complete by [F4].  If $(f_n)$ is Cauchy in complex $L^p$, [F5] makes $(\operatorname{Re}f_n)$ and $(\operatorname{Im}f_n)$ Cauchy in real $L^p$; [F4] gives limits $u,v\in L^p(\mu;\mathbb R)$.  The upper component bound in [F5] gives $\lVert f_n-(u+iv)\rVert_p\leq\lVert\operatorname{Re}f_n-u\rVert_p+\lVert\operatorname{Im}f_n-v\rVert_p\to0$.  Thus complex $L^p$ is complete as well, including the zero and empty measure spaces. [F4, F5, given]

1.2 Fix either scalar field $\mathbb K$ and write $E=L^p(\mu;\mathbb K)$ and $H=L^q(\mu;\mathbb K)$.  By [F2] in the real case and [F3] in the complex case, the map $T_q:H\to E^*$ defined by $(T_qh)(f)=\int fh\,d\mu$ is a scalar-linear isometric bijection.  The same theorem with $q$ in place of $p$ identifies $H^*$ isometrically with $L^p=E$ by the same bilinear formula. [F2, F3, given]

2.1 Let $\Phi\in E^{**}$.  Since $T_q$ is a bounded linear map, $\Phi\circ T_q$ lies in $H^*$.  The $q$-duality assertion in step 1.2 therefore supplies $u\in E$ such that $\Phi(T_qh)=\int hu\,d\mu$ for every $h\in H$.  This includes $\Phi=0$, for which uniqueness gives $u=0$. [step 1.2]

3.1 Given any $\ell\in E^*$, surjectivity of $T_q$ supplies $h\in H$ with $\ell=T_qh$.  Commutativity of scalar multiplication and the bilinear pairing then gives $\Phi(\ell)=\Phi(T_qh)=\int hu=\int uh=(T_qh)(u)=\ell(u)=(J_Eu)(\ell)$.  Hence $\Phi=J_Eu$. [step 1.2, step 2.1, algebra]

4.1 Every $\Phi\in E^{**}$ is therefore in the range of $J_E$.  Step 1.1 makes $E$ Banach, so [F1] proves reflexivity in both scalar fields.  The proof uses Countable Choice only through the completeness and arbitrary-measure duality suppliers cited in steps 1.1–1.2; [F6] records that exact assumption.  No Hahn–Banach or compactness principle is additionally invoked.  The argument requires both $p$ and $q$ to lie strictly between one and infinity, so it makes no endpoint claim. [F1, F6, step 1.1, step 1.2, step 3.1] ∎

## Remarks

Using the bilinear complex pairing is what makes the canonical-map calculation
literal: the two scalar factors commute in $\int hu=\int uh$.  With a
sesquilinear convention an explicit conjugation map would be required.
