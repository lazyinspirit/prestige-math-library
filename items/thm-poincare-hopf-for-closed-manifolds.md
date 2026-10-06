---
id: thm-poincare-hopf-for-closed-manifolds
kind: theorem
title: "Poincare-Hopf for closed manifolds"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-zero-and-local-index-of-a-vector-field, def-nondegenerate-zero-of-a-vector-field, thm-index-of-a-nondegenerate-vector-field-zero, lem-local-index-is-additive-under-a-transverse-perturbation, lem-index-sum-of-an-outward-field-is-the-gauss-degree, def-euler-characteristic-of-a-compact-manifold, thm-weak-whitney-proper-embedding-theorem, thm-euclidean-tubular-neighbourhood-theorem, cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction, def-riemannian-gradient-of-a-smooth-function, lem-riemannian-gradient-vanishes-exactly-at-critical-points, thm-every-smooth-manifold-admits-a-riemannian-metric, cor-every-compact-smooth-manifold-admits-an-excellent-morse-function, def-morse-function-and-excellent-morse-function, def-nondegenerate-critical-point-nullity-index-and-coindex, cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda, prop-singular-homology-of-a-disjoint-union-is-the-direct-sum, def-axiom-of-choice, def-countable-choice, cor-morse-euler-characteristic-identity]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, Theorem 1, printed pp. 38-39 (invariance), and Step 1, p. 40 (Morse evaluation sketch)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, the Poincare-Hopf index theorem and its proof, printed pp. 134-137"
dependency_level: 5
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed
smooth $n$-manifold, $n\ge1$, and let $X$ be a smooth vector field on $M$ with
only isolated zeros ([[def-isolated-zero-and-local-index-of-a-vector-field]]).
Then
$$\sum_{p:X(p)=0}\operatorname{ind}_pX=\chi(M),$$
with $\chi$ as in [[def-euler-characteristic-of-a-compact-manifold]]. In
particular the sum is independent of $X$ and vanishes over the empty zero set;
for disconnected $M$ the statement is applied componentwise.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, $n\ge1$, and a smooth field $X$ on $M$ with only isolated zeros.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]) is used only through the existence of an excellent Morse function; the embedding, tube and perturbation arguments use $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The zeros of $X$ are finite, and by [[lem-local-index-is-additive-under-a-transverse-perturbation]](iii) each zero can be perturbed, supported in an arbitrarily small ball around it, to finitely many nondegenerate zeros with the same index sum; a nondegenerate zero has index $\pm1$ ([[thm-index-of-a-nondegenerate-vector-field-zero]], [[def-nondegenerate-zero-of-a-vector-field]]).

[F2] Hopf's boundary lemma: for a compact smooth $k$-manifold with boundary
$N\subset\mathbb R^k$ and a smooth field $Y$ on $N$ with only isolated zeros
and $Y$ strictly outward on $\partial N$,
$$\sum_{Y(x)=0}\operatorname{ind}_xY=\deg\bigl(g:\partial N\to S^{k-1}\bigr),$$
the Gauss map of the boundary; the right-hand side is the degree of the normalized field, independent of $Y$
([[lem-index-sum-of-an-outward-field-is-the-gauss-degree]]).

[F3] Every smooth $n$-manifold admits a proper smooth embedding into $\mathbb R^{2n+1}$ ([[thm-weak-whitney-proper-embedding-theorem]]), a closed embedded submanifold of $\mathbb R^k$ has a tubular neighbourhood given by normal addition with a positive radius function, and a smooth nearest-point retraction onto it ([[thm-euclidean-tubular-neighbourhood-theorem]], [[cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction]]).

[F4] For a Riemannian metric $g$ and an excellent Morse function $f$ on $M$ ([[cor-every-compact-smooth-manifold-admits-an-excellent-morse-function]], [[thm-every-smooth-manifold-admits-a-riemannian-metric]], [[def-morse-function-and-excellent-morse-function]]), the field $\operatorname{grad}_gf$ vanishes exactly at the critical points ([[def-riemannian-gradient-of-a-smooth-function]], [[lem-riemannian-gradient-vanishes-exactly-at-critical-points]]), all of which are nondegenerate, and a critical point of index $\lambda$ contributes $\operatorname{ind}_p(\operatorname{grad}_gf)=(-1)^{\lambda}$ ([[cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

[F5] For a closed manifold, the alternating sum of $(-1)^{\lambda}$ over the critical points of a Morse function equals $\chi(M)$, and $\chi$ is additive over disjoint unions ([[cor-morse-euler-characteristic-identity]], [[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]]).

## Proof

1.1 Reduction to nondegenerate zeros: by [F1] the zeros of $X$ are finite, and in pairwise disjoint small balls around them $X$ may be replaced by fields whose zeros in those balls are nondegenerate with the same index sum; the replacements paste smoothly with the unchanged field outside and produce a smooth field $X_0$ on $M$ with only nondegenerate zeros and $\sum_{p}\operatorname{ind}_pX_0=\sum_p\operatorname{ind}_pX$. Since the right-hand side $\chi(M)$ does not involve $X$, it suffices to prove the identity for fields with nondegenerate zeros. [F1, algebra]

2.1 An invariant: embed $M$ properly in $\mathbb R^k$ with $k=2n+1$ by [F3] and let $N$ be a closed tubular neighbourhood given by normal addition (radius $\varepsilon>0$ uniform by compactness of $M$) with nearest-point retraction $r:N\to M$. Define $w(z):=z-r(z)+X_0(r(z))$ for $z\in N$; the two summands are orthogonal, since $z-r(z)\perp T_{r(z)}M$ and $X_0(r(z))\in T_{r(z)}M$. Hence $w(z)=0$ iff $z=r(z)\in M$ and $X_0(z)=0$: the zeros of $w$ are exactly the zeros of $X_0$, viewed in $M\subseteq N$. On $\partial N$ we have $|z-r(z)|=\varepsilon$ and the outward normal is $(z-r(z))/\varepsilon$, so $\langle w(z),z-r(z)\rangle=\varepsilon^2>0$: the field $w$ points strictly outward, and in particular $w\ne0$ on $\partial N$. At a zero $p\in M$ the derivative of $w$ as a map on $N\subseteq\mathbb R^k$ is $D w_p=D X_0{}_p\oplus I$ in the splitting $T_pN=T_pM\oplus T_pM^\perp$ (the map $z\mapsto z-r(z)$ has derivative the orthogonal projection onto the normal space), so $\det Dw_p=\det(DX_0)_p$ and $\operatorname{ind}_p w=\operatorname{ind}_pX_0$ by the determinant sign formula. Hopf's boundary lemma [F2] applied to $N$ therefore gives $$\sum_{p:X_0(p)=0}\operatorname{ind}_pX_0=\deg(g:\partial N\to S^{k-1}),$$ a number depending only on $M$ (through its embedding and tube), not on $X_0$. [F2, F3, step 1.1, algebra]

3.1 Evaluation: choose an excellent Morse function $f:M\to\mathbb R$ by [A1] and [F4] and a Riemannian metric $g$, and take $X_0:=\operatorname{grad}_gf$, a field with only nondegenerate zeros. By [F4] each critical point $p$ contributes $(-1)^{\operatorname{ind}(p)}$, so the invariant of step 2.1 equals $\sum_p(-1)^{\operatorname{ind}(p)}=\chi(M)$ by [F5]; combining with steps 1.1 and 2.1 gives $\sum_p\operatorname{ind}_pX=\chi(M)$ for the original field $X$, which is therefore independent of $X$ and equal to $0$ when $X$ has no zeros. [F4, F5, step 1.1, step 2.1, algebra]

4.1 If $M$ is disconnected, apply the identity on each component and add: the index sum splits over the components, and $\chi$ is additive over disjoint unions by [F5], so the same identity holds; the empty zero set is included (the empty alternating sum is $0$). [F5, step 3.1, algebra] ∎
