---
id: cor-morse-euler-characteristic-identity
kind: corollary
title: "Morse Euler characteristic identity"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-morse-polynomial-identity, def-morse-numbers-and-morse-polynomial, thm-morse-functions-and-handle-decompositions-correspond, lem-a-handle-decomposition-gives-a-relative-cw-complex, def-euler-characteristic-of-a-finite-cw-complex, thm-euler-poincare-formula-for-finite-cw-complexes, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-countable-choice, def-cellular-homology, thm-cellular-homology-computes-singular-homology, thm-rat-field, def-rationals, def-polynomial-evaluation-and-root, lem-finitely-many-critical-values-can-be-separated-locally, prop-morse-handle-chain-complex-computes-singular-homology, thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]
justified_by: []
aliases: []
landmark: false
proof_strategy: evaluation-at-minus-one
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Chapter 12 Section 5, printed pp. 489-493 (PDF pp. 501-505)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
    - title: "C. T. C. Wall, Differential Topology, Sections 5.1-5.4, printed pp. 129-148 (PDF pp. 137-151)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
dependency_level: 4
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed smooth $n$-manifold and
$f:M\to\mathbb R$ a Morse function. Then
$$\sum_{p\in\operatorname{Crit}(f)}(-1)^{\operatorname{ind}(p)}=\chi(M),$$
where $\chi(M)$ is the Euler characteristic computed from a finite CW
model homotopy equivalent to $M$ ([[def-euler-characteristic-of-a-finite-cw-complex]]); the
Euler-Poincare formula makes it independent of the chosen structure and equal
to the alternating sum of the Betti numbers
([[thm-euler-poincare-formula-for-finite-cw-complexes]]). The identity is
independent of the coefficient field, and it holds for every closed smooth
manifold, orientable or not.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, a Morse function $f:M\to\mathbb R$, the Morse polynomial $M_f(t)=\sum_km_k(f)t^k$ and the alternating critical-point sum $\sum_k(-1)^km_k(f)=M_f(-1)$.

[F1] For every field $F$ there is a unique $Q\in\mathbb Z[t]$ with nonnegative coefficients such that $M_f(t)=P_{M,F}(t)+(1+t)Q(t)$ ([[thm-morse-polynomial-identity]], [[def-morse-numbers-and-morse-polynomial]]).

[F2] $\mathbb Q$ is a field ([[thm-rat-field]], [[def-rationals]]).

[L1] A finite CW complex has Euler characteristic equal to its alternating cell count, which by the Euler-Poincare formula equals $\sum_n(-1)^n\operatorname{rank}H_n(X;\mathbb Z)$ ([[def-euler-characteristic-of-a-finite-cw-complex]], [[thm-euler-poincare-formula-for-finite-cw-complexes]]); applied to the finite CW model of $M$ furnished by its handle presentation ([[lem-a-handle-decomposition-gives-a-relative-cw-complex]]), the rational equality is established by the finite chain calculation in step 1.2 below.

[F3] Evaluation at a ring element is additive and multiplicative: $(P+Q)(a)=P(a)+Q(a)$ and $(PQ)(a)=P(a)Q(a)$ ([[def-polynomial-evaluation-and-root]]).

[F4] Critical values can be separated without changing critical points or Hessians ([[lem-finitely-many-critical-values-can-be-separated-locally]]). An excellent Morse function on the compact collared triad determines a finite handle presentation with exactly one handle of index $\operatorname{ind}(p)$ per critical point, and for the closed case this presentation is obtained by the empty-face convention ([[thm-morse-functions-and-handle-decompositions-correspond]]).

[F5] A handle decomposition of a compact manifold gives a relative CW model homotopy equivalent to the manifold, with one cell per handle, of the same index ([[lem-a-handle-decomposition-gives-a-relative-cw-complex]]).

[F6] For a finite CW complex, $\chi(X)=\sum_n(-1)^n\operatorname{rank}H_n(X;\mathbb Z)$, and the cellular chain complex computes singular homology, the rational Betti alternating sum follows by cancellation of boundary ranks in its finite rational cellular complex ([[thm-euler-poincare-formula-for-finite-cw-complexes]], [[def-euler-characteristic-of-a-finite-cw-complex]], [[thm-cellular-homology-computes-singular-homology]], [[def-cellular-homology]]). Homotopy equivalences induce homology isomorphisms over every coefficient group ([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]).

## Proof

**Proof technique:** evaluation-at-minus-one.

1.1 By [F2] we may apply [F1] with $F=\mathbb Q$: there is $Q\in\mathbb Z[t]$ with nonnegative coefficients and $M_f(t)=P_{M,\mathbb Q}(t)+(1+t)Q(t)$. [F1, F2, given]

1.2 The handle chain complex computes $H_*(M;\mathbb Q)$ and has dimensions $m_k(f)$ ([[prop-morse-handle-chain-complex-computes-singular-homology]]). An index-ordered presentation gives a finite CW model by [F5], so its cell-count Euler characteristic is $\sum_k(-1)^km_k(f)$. For any finite rational chain complex, choose a basis of each boundary space, extend it to a basis of the cycle space, and lift a basis of the next boundary space to the chain group. This gives $\dim C_k=\dim H_k+\dim B_k+\dim B_{k-1}$; taking the alternating sum cancels both boundary terms. Applied to the model cellular complex, it gives $\chi(M)=\sum_k(-1)^k\dim_{\mathbb Q}H_k(M;\mathbb Q)$, using [F6]. Homotopy invariance makes this independent of the finite model. [F5, F6, L1, algebra]

2.1 Evaluating the identity of step 1.1 at $t=-1$ and using [F3] gives $M_f(-1)=P_{M,\mathbb Q}(-1)+(1+(-1))Q(-1)=P_{M,\mathbb Q}(-1)$, that is $$\sum_{p\in\operatorname{Crit}(f)}(-1)^{\operatorname{ind}(p)}=\sum_k(-1)^k\dim_{\mathbb Q}H_k(M;\mathbb Q)=\chi(M),$$ the last equality by [L1]. [F3, L1, step 1.1]

3.1 Field independence: repeating steps 1.1–2.1 with an arbitrary field $F$ in place of $\mathbb Q$ gives $\sum_k(-1)^kb_k(M;F)=M_f(-1)=\chi(M)$, so the alternating sum of the Betti numbers is the same for every field; in particular the identity does not depend on $F$. [F1, step 2.1]

4.1 For the handle-side count, rescale $f$ into $(0,1)$ when $M\ne\varnothing$, separate its critical values by [F4], and use the index-ordered handle presentation already constructed in step 1.2. Its finite CW model has $m_k(f)$ cells of dimension $k$, so its Euler characteristic is $M_f(-1)$. The empty manifold gives the empty model and zero on both sides. This confirms the identity without asserting that the cell model is a CW structure on the original manifold itself. [F4, F5, F6, step 1.2, step 2.1] ∎

## Remarks

- **Independence of the field.** Both the Morse numbers (geometric) and $\chi(M)$ are field independent, and step 3.1 shows the intermediate Betti alternating sums are too; this is why the Euler identity survives while the weak and strong inequalities fail to be field independent.
- **The role of orientability.** Neither the handle presentation nor the cell-count computation uses an orientation; the identity therefore holds for nonorientable closed manifolds as well, and the mod-two handle chain complex would compute the same alternating count.
