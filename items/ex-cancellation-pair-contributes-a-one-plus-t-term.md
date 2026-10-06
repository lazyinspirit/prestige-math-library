---
id: ex-cancellation-pair-contributes-a-one-plus-t-term
kind: example
title: "A created cancelling pair contributes a $(1+t)t^k$ term"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-homology-of-spheres
  - def-countable-choice
  - def-critical-point-and-critical-value-of-a-smooth-function
  - def-handle-decomposition-relative-to-the-incoming-boundary
  - def-hessian-of-a-function-at-a-critical-point
  - def-morse-numbers-and-morse-polynomial
  - def-nondegenerate-critical-point-nullity-index-and-coindex
  - def-poincare-polynomial-over-a-field
  - thm-handle-cancellation
  - thm-creation-of-a-cancelling-handle-pair
  - thm-morse-functions-and-handle-decompositions-correspond
  - thm-morse-polynomial-identity
  - thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology
justified_by: []
aliases: []
landmark: false
proof_strategy: presentation-comparison
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
dependency_level: 9
---

## Example

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed smooth $n$-manifold with a
handle presentation, and let $M'$ be the presentation obtained by inserting a
geometrically cancelling pair of consecutive indices $k,k+1$ at an intermediate
stage ($0\le k\le n-1$), transporting the later attaching embeddings across the cancellation diffeomorphism and leaving their indices unchanged. Then $M'$ presents
the same manifold $M$; if $f$ and $f'$ are adapted Morse functions inducing the
two presentations, then
$$M_{f'}(t)=M_f(t)+t^k+t^{k+1}=M_f(t)+(1+t)t^k,\qquad P_{M',F}=P_{M,F},$$
and the correction polynomials satisfy $Q'=Q+t^k$. In the model case $M=S^2$
with the two-critical-point presentation $M_f(t)=1+t^2$, inserting a cancelling
$(0,1)$-pair gives $M_{f'}(t)=2+t+t^2$ and $Q'=1$.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$ with a finite handle presentation in stages, a geometrically cancelling pair of consecutive indices $k,k+1$ inserted at an intermediate stage, the resulting presentation $M'$, and adapted Morse functions $f$, $f'$ inducing the two presentations (empty-face convention for the closed case).

[F1] The cancellation theorem deletes any geometrically cancelling pair ([[thm-handle-cancellation]]). The creation theorem attaches a $k$-handle and then a $(k+1)$-handle in the standard complementary way on a disc of the outgoing boundary and produces a diffeomorphism of $W\cup h^k\cup h^{k+1}$ with $W$ relative to the incoming boundary, so the modified presentation presents the same manifold; the two new handles are added, and later attaching embeddings are transported across this diffeomorphism without changing their indices ([[thm-creation-of-a-cancelling-handle-pair]], [[def-handle-decomposition-relative-to-the-incoming-boundary]]).

[F2] Adapted Morse functions on the triad and handle presentations correspond: the Morse numbers of the function inducing a presentation equal the numbers of handles by index ([[thm-morse-functions-and-handle-decompositions-correspond]]).

[F3] The Morse polynomial is $M_f(t)=\sum_km_k(f)t^k$ with $m_k(f)=\#\{p:\operatorname{ind}(p)=k\}$ ([[def-morse-numbers-and-morse-polynomial]]); the Poincare polynomial over $F$ is $P_{X,F}(t)=\sum_k\dim_FH_k(X;F)t^k$ ([[def-poincare-polynomial-over-a-field]]).

[F4] For every field $F$ there is a unique $Q\in\mathbb Z[t]$ with nonnegative coefficients and $M_f=P_{M,F}+(1+t)Q$ ([[thm-morse-polynomial-identity]]).

[F5] The height function on $S^2$ has Morse polynomial $1+t^2$. (computed below).

[F6] A homotopy equivalence induces isomorphisms on singular homology with every coefficient group ([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]); in particular a diffeomorphism does so.

## Verification

**Proof technique:** presentation-comparison.

1.1 For $h(x)=x_3$ on $S^2$, a point away from the poles has tangent vector $v=e_3-x_3x$ with $dh(v)=1-x_3^2>0$, so it is not critical. In pole charts $h(u)=\pm\sqrt{1-|u|^2}$ has Hessian $\mp I_2$ at $u=0$; thus the south and north poles have indices $0,2$, and $M_h=1+t^2$. Sphere homology gives $P_{S^2,F}=1+t^2$, so the correction polynomial is $Q=0$. [given, algebra]

1.2 Apply cancellation in [F1] to the affected connected component of the intermediate stage, keeping other components fixed; for a $(0,1)$-pair its second foot lies on that existing component by the one-intersection condition. It supplies a diffeomorphism of the new presentation's underlying manifold with the old one relative to the incoming face; transport each later attaching embedding across its boundary restriction; hence the modified presentation still presents $M$, and its handle counts are those of the old presentation increased by one in index $k$ and one in index $k+1$. [F1, given]

2.1 Let $f,f'$ be the adapted Morse functions inducing the two presentations by [F2]. Their Morse numbers count the handles by index, so $$m'_j=m_j+\delta_{jk}+\delta_{j,k+1}$$ for every $j$, and therefore, by [F3], $M_{f'}(t)=M_f(t)+t^k+t^{k+1}=M_f(t)+(1+t)t^k$. [F2, F3, step 1.2]

2.2 The diffeomorphism of step 1.2 induces homology isomorphisms by [F6]. Thus the Betti numbers, and hence the Poincare polynomials defined in [F3], agree: $P_{M',F}(t)=P_{M,F}(t)$ for every field $F$. [F3, F6, step 1.2]

3.1 Apply [F4] to both functions, whose Poincare polynomials coincide by step 2.2: $M_f=P_{M,F}+(1+t)Q$ and $M_{f'}=P_{M,F}+(1+t)Q'$. By step 2.1, the nonnegative polynomial $Q+t^k$ also satisfies the second identity. Uniqueness in [F4] therefore gives $Q'=Q+t^k$. [F4, step 2.1, step 2.2]

4.1 Model case: for $M=S^2$ the two-critical-point presentation of the height function has Morse polynomial $1+t^2$ by [F5]; inserting a cancelling $(0,1)$-pair gives $M_{f'}(t)=1+t^2+t^0+t^1=2+t+t^2$ and $Q'=0+1=1$ by steps 2.1 and 3.1. The Euler sum is preserved: $2-1+1=2=1-0+1$, consistent with the Euler characteristic identity. [F5, step 2.1, step 3.1] ∎

## Remarks

- **What the example shows.** A birth of a cancelling pair adds $(1+t)t^k$ to the Morse polynomial while leaving the manifold and its homology unchanged, so the correction polynomial of the Morse polynomial identity is exactly the algebraic record of such pairs.
- **The perfectness defect.** The pair is invisible in homology but increases the excess of Morse numbers over Betti numbers; the added term $(1+t)t^k$ has value zero at $t=-1$, which is why the Euler identity cannot detect it.
