---
id: ex-the-affine-a1-gcm-has-singular-rank-one-realization-data
kind: example
title: "The affine a1 gcm has singular rank one realization data"
status: draft
origin: pipeline
deps: ["prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Example 1.2.3 and Proposition 1.2.4, pp.10–12; affine A1 data in Example 1.5.4, pp.23–24"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Example

The GCM $A=\begin{pmatrix}2&-2\\-2&2\end{pmatrix}$ has rank one and requires a three-dimensional minimal Cartan. On a basis $h_0,h_1,d$, take simple-root coordinates $\alpha_0=(2,-2,1)$ and $\alpha_1=(-2,2,0)$.

## Facts & Assumptions

**Given:** The displayed matrix and independent h_0,h_1,d.

[F1] The smallest Cartan dimension with both families independent is 2n−rank A. ([[prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism]]).

## Verification

1.1 The second matrix row is the negative of the first, and the first is nonzero; hence $\operatorname{rank}A=1$. Its diagonal is 2 and both off-diagonal entries are −2, so it is a GCM. Here $n=2$, and F1 gives minimal dimension $4-1=3$. [F1, given]

2.1 The coordinate values give $\alpha_0(h_0)=2$, $\alpha_1(h_0)=-2$, $\alpha_0(h_1)=-2$, $\alpha_1(h_1)=2$. If $a\alpha_0+b\alpha_1=0$, evaluation on $d$ gives $a=0$, then on $h_0$ gives $b=0$. Thus the two roots, as well as the supplied two coroots, are independent. Both roots annihilate the nonzero vector $h_0+h_1$, while $(\alpha_0+\alpha_1)(d)=1$. Omitting $d$ would make the roots negatives of one another and destroy independence. The data are therefore a minimal realization with an essential complementary direction. [F1, step 1.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Example 1.2.3 and Proposition 1.2.4, pp.10–12; affine A1 data in Example 1.5.4, pp.23–24.
