---
id: ex-cft-feigin-fuchs-p2-first-level-pairing-and-screening
kind: example
title: First-level oscillator pairing and screening at $p=2$
status: published
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-cft-feigin-fuchs-oscillator-data
  - lem-cft-feigin-fuchs-virasoro-screening
  - lem-cft-fock-oscillator-duality
dependency_roles:
  def-cft-feigin-fuchs-oscillator-data: mathematical-premise
  lem-cft-feigin-fuchs-virasoro-screening: mathematical-premise
  lem-cft-fock-oscillator-duality: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Adamović and Milas, On the triplet vertex algebra W(p)
      url: https://arxiv.org/pdf/0707.1857v2
      locator: Section 1 supplies the oscillator conventions; the finite p=2 calculation is evaluated directly below, not quoted as a source theorem
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: Sections 2.4–2.5, the Heisenberg field example and formal n-th product/normal-order conventions, printed pp. 45–49
---

## Example

Take $p=2$ in the generic oscillator spaces, with weight
$\operatorname{wt}(f e^{t\alpha})=\deg f+2t^2-t$ for homogeneous
$f$. Use $L_t(n)$ for the mode of index $n$ on $\mathcal F_t$ and
$Q_t$ for the screening coefficient with input charge $t$. Then

A vector $u\in\mathcal F_t$ is called singular here if $u\ne0$,
$L_t(0)u=\lambda u$ for some $\lambda\in\mathbb C$, and
$L_t(n)u=0$ for every $n>0$.

$$L_0(-1)e^0=0,\qquad L_{1/2}(-1)e^{\alpha/2}=\tfrac12x_1e^{\alpha/2},\qquad Q_{-1/2}e^{-\alpha/2}=x_1e^{\alpha/2}.$$

The reflected-charge pairing satisfies

$$\langle x_1e^0,x_1e^{\alpha/2}\rangle=-4.$$

Both $e^0$ and $e^{\alpha/2}$ have oscillator degree and weight zero;
$e^{-\alpha/2}$ has oscillator degree zero and weight one.
The vectors $x_1e^0$ and $x_1e^{\alpha/2}$ have oscillator degree
and weight one. The screened vector $x_1e^{\alpha/2}$ is singular
with $L_{1/2}(0)$-eigenvalue one, and every $L_{1/2}(n)$ with $n>0$
kills it. The vector $x_1e^0$ is not singular, since
$L_1x_1e^0=-2e^0$.

## Example references

[[def-cft-feigin-fuchs-oscillator-data]]

[[lem-cft-feigin-fuchs-virasoro-screening]]

[[lem-cft-fock-oscillator-duality]]

[Adamović–Milas, Section 1](https://arxiv.org/pdf/0707.1857v2)

[Arakawa–Moreau, Sections 2.4–2.5](https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf)

## Facts & Assumptions

**Given:** Integer $p=2$, the polynomial $P=\mathbb C[x_1,x_2,\ldots]$,
the labelled oscillator spaces, the explicit operators $L_n$, and the
long-screening coefficient $Q_t:\mathcal F_t\to\mathcal F_{t+1}$.
All vectors in this example have polynomial degree at most one.

[F1] [[def-cft-feigin-fuchs-oscillator-data]] defines
$\alpha_{-m}=x_m$, $\alpha_m=4m\partial_{x_m}$,
$\alpha_0=4t$, the normal-ordered formula for $L_n$, and the
substitution/creation formula for $Q$.

[F2] [[lem-cft-feigin-fuchs-virasoro-screening]] proves that these
operators are a Virasoro representation and that the degree-zero
operator is $\sum_{m\ge1}m x_m\partial_{x_m}+2t^2-t$.

[F3] [[lem-cft-fock-oscillator-duality]] defines the pairing of reflected
charges $t$ and $1/2-t$, with monomial diagonal entries
$\prod_m(-4m)^{r_m}r_m!$.

## Verification

1.1 In [F1]'s normally ordered formula for $L_0(-1)$ and $L_{1/2}(-1)$, the only
terms surviving on a vacuum have indices $0,-1$ and $-1,0$.
Their sum is $2\alpha_0\alpha_{-1}/8=t x_1$, and the
improvement term is zero because its factor is $(-1)+1=0$.
Thus $L_t(-1)e^{t\alpha}=t x_1e^{t\alpha}$, which gives both
stated values at $t=0,1/2$. For $t=-1/2$, the screening field on
the vacuum is
$$\mathcal E_{1,-1/2}(z)e^{-\alpha/2}=z^{-2}\exp\left(\sum_{m\ge1}\frac{x_m}m z^m\right)e^{\alpha/2}.$$
Its coefficient of $z^{-1}$ is $x_1e^{\alpha/2}$ because the
creation exponential begins $1+x_1z+O(z^2)$. This proves the
screening equation directly. [given, F1, algebra]

2.1 At $p=2$, the vacuum weights $2t^2-t$ at $t=0,1/2,-1/2$
are respectively $0,0,1$. Multiplication by $x_1$ adds one to
the oscillator degree and to the weight by [F2], proving every
claimed degree and weight. Charges $0$ and $1/2$ are reflected
partners. Their degree-one monomials therefore pair by [F3] to
$(-4\cdot1)^1 1!=-4$, as asserted. Both monomials are nonzero
because they are basis elements of their labelled polynomial copies.
[F1, F2, F3, step 1.1, algebra]

3.1 Directly commute the quadratic and improvement terms of [F1]
with $x_1=\alpha_{-1}$. For $n>0$, the quadratic term gives
$\alpha_{n-1}$, while the improvement contributes
$-n(n+1)\delta_{n,1}I$. Hence
$$[L_t(n),x_1]=\alpha_{n-1}-2\delta_{n,1}I.$$
Positive modes annihilate each vacuum directly in the normal-ordered
formula. On $x_1e^{\alpha/2}$, the case $n=1$ therefore gives
$(4(1/2)-2)e^{\alpha/2}=0$, and every $n\ge2$ gives
$\alpha_{n-1}e^{\alpha/2}=0$ because that oscillator is a
derivative of a constant polynomial. Its weight-one eigenvalue was
computed in step 2.1, so it is the stated nonzero singular vector.
For $x_1e^0$, the same $n=1$ computation gives $-2e^0$, proving
its nonsingularity. All assertions follow by these finite polynomial
computations. [F1, F2, step 2.1, algebra] ∎

## Remarks

This example computes the first oscillator level at one value of $p$.
It verifies the stated screening and reflected-pairing conventions. It
does not prove an all-grade character formula, completeness of Fock
submodules, or any triplet endpoint or logarithmic-extension theorem.
