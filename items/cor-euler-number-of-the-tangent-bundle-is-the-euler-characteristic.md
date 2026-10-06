---
id: cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic
kind: corollary
title: "The Euler number of the tangent bundle is the Euler characteristic"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda, cor-morse-euler-characteristic-identity, def-euler-class-by-zero-section-pullback-of-the-thom-class, thm-self-intersection-is-the-euler-number-of-the-normal-bundle, cor-diagonal-self-intersection-is-the-euler-number-of-tm, prop-mod-two-self-intersection-needs-no-orientation, thm-mod-two-euler-class-is-the-top-stiefel-whitney-class, prop-vector-field-zero-index-is-a-zero-section-intersection-number, def-self-intersection-number-of-an-oriented-submanifold, def-riemannian-gradient-of-a-smooth-function, lem-riemannian-gradient-vanishes-exactly-at-critical-points, cor-every-compact-smooth-manifold-admits-an-excellent-morse-function, def-morse-function-and-excellent-morse-function, thm-every-smooth-manifold-admits-a-riemannian-metric, def-euler-characteristic-of-a-compact-manifold, def-axiom-of-choice, lem-second-countable-smooth-manifolds-have-cw-homotopy-type]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "§9 and §11, printed pp. 95-104 and 115-137 (the Euler class evaluated on the fundamental class is the signed zero count)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5 and §6, printed pp. 134-140 (the index sum and the Euler number)"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "Ch. 9, Theorem 9.12 and its corollaries (self-intersection of the diagonal and the Euler characteristic)"
dependency_level: 5
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

(i) Let $M$ be a closed oriented smooth $n$-manifold, $n\ge1$. Then the Euler number of
the tangent bundle satisfies
$$\langle e(TM),[M]\rangle=\chi(M),$$
where $e(TM)\in H^n(M;\mathbb Z)$ is the Euler class of
[[def-euler-class-by-zero-section-pullback-of-the-thom-class]] and the bracket
is the Kronecker evaluation; equivalently the diagonal satisfies
$\Delta_M\cdot\Delta_M=\chi(M)$ in the self-intersection number of
[[def-self-intersection-number-of-an-oriented-submanifold]].

(ii) For any closed smooth $n$-manifold with $n\ge1$,
$$\langle w_n(TM),[M]\rangle_2\equiv\chi(M)\pmod 2,$$
with $w_n$ the top Stiefel-Whitney class.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, oriented in part (i).

[F1] Choose an excellent Morse function $f$ and a Riemannian metric $g$. The section $s=\operatorname{grad}_gf$ of $TM$ vanishes exactly at $\operatorname{Crit}(f)$ and is transverse to the zero section there (the linearization is the nondegenerate Hessian) ([[def-riemannian-gradient-of-a-smooth-function]], [[lem-riemannian-gradient-vanishes-exactly-at-critical-points]], [[cor-every-compact-smooth-manifold-admits-an-excellent-morse-function]], [[thm-every-smooth-manifold-admits-a-riemannian-metric]], [[def-morse-function-and-excellent-morse-function]]).

[F2] The signed zero count of a transverse section of a rank-$n$ oriented bundle over a closed oriented $n$-manifold equals $\langle e(E),[M]\rangle$; the local sign of a zero of a vector field, read on the zero-section/graph intersection in $TM$ with the horizontal-then-vertical orientation, is the index of the zero ([[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]], [[prop-vector-field-zero-index-is-a-zero-section-intersection-number]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[F3] The signed zero count of $\operatorname{grad}_gf$ is $\sum_p(-1)^{\operatorname{ind}(p)}$, and this equals $\chi(M)$; in particular the Euler number is $\chi(M)$. The diagonal form is the self-intersection statement for $\Delta_M$, and over $\mathbb F_2$ the unsigned zero count satisfies $\#\operatorname{Crit}(f)\equiv\langle w_n(TM),[M]\rangle_2$, since the canonical mod 2 Euler class is the top Stiefel-Whitney class ([[cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda]], [[cor-morse-euler-characteristic-identity]], [[cor-diagonal-self-intersection-is-the-euler-number-of-tm]], [[prop-mod-two-self-intersection-needs-no-orientation]], [[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]]).

[F4] Under the assumed AC, $M$ is paracompact Hausdorff and CGWH with CW homotopy type, and the smooth tangent bundle is numerable ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]). These are the base and bundle hypotheses of the cited Thom and Stiefel-Whitney results.

## Proof

1.1 For (i): by [F1] the section $s=\operatorname{grad}_gf$ is transverse to the zero section with zero set $\operatorname{Crit}(f)$, and by [F2] its signed zero count equals $\langle e(TM),[M]\rangle$; by [F3] that signed count is $\sum_p(-1)^{\operatorname{ind}(p)}=\chi(M)$, so $\langle e(TM),[M]\rangle=\chi(M)$. [F1, F2, F3, F4, algebra]

2.1 The diagonal statement of [F3] identifies $\Delta_M\cdot\Delta_M$ with $\langle e(TM),[M]\rangle$, so it equals $\chi(M)$ as well. [F3, step 1.1, algebra]

3.1 For (ii): the unsigned count $\#\operatorname{Crit}(f)$ of the transverse section $\operatorname{grad}_gf$ satisfies $\#\operatorname{Crit}(f)\equiv\langle w_n(TM),[M]\rangle_2$ by [F3], while $\#\operatorname{Crit}(f)\equiv\sum_p(-1)^{\operatorname{ind}(p)}=\chi(M)\pmod 2$ because $(-1)^{\lambda}\equiv1$; hence $\langle w_n(TM),[M]\rangle_2\equiv\chi(M)\pmod2$. [F3, F4, step 1.1, algebra] ∎
