---
id: thm-finite-rank-complement-theorem-over-compact-hausdorff-bases
kind: theorem
title: Finite-rank complement theorem over compact Hausdorff bases
status: published
origin: pipeline
deps: [cor-compact-hausdorff-partitions-of-unity, lem-ac-supplies-dependent-choice-for-vector-bundle-constructions, def-vector-bundle-map-section-subbundle-and-isomorphism, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 1.4"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Finite-dimensional embedding and orthogonal complement, printed pp.13–14"
    - title: "MIT 18.906 notes, Lecture 20"
      url: https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Gauss map and complement, printed pp.66–68"
---

## Statement

Assume AC. If $E$ is a finite-rank real or complex vector bundle over a
compact Hausdorff space $X$, then for some finite $N$ there is a finite-rank
bundle $E'$ with

$$E\oplus E'\cong X\times\mathbb F^N.$$

For the empty base and for the rank-zero bundle one may take $N=0$.

## Facts & Assumptions

**Given:** AC, a compact Hausdorff $X$, and a rank-$n$ bundle $E\to X$.

[F1] Under AC and DC, every open cover of a compact Hausdorff space admits a
finite subordinate partition of unity
([[cor-compact-hausdorff-partitions-of-unity]]).

[F2] A locally coordinatewise fixed-dimensional family is a subbundle
([[def-vector-bundle-map-section-subbundle-and-isomorphism]]).

[A1] AC is the stated principle and implies DC
([[def-axiom-of-choice]],
[[lem-ac-supplies-dependent-choice-for-vector-bundle-constructions]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$ or $n=0$, the asserted $N=0$ is immediate. Otherwise, use [A1] to obtain DC and [F1] to choose a finite linear trivializing cover $U_1,\ldots,U_m$ with a subordinate partition $\rho_1,\ldots,\rho_m$. Let $\phi_i:E|_{U_i}\to U_i\times\mathbb F^n$ be the corresponding fiber coordinates. [F1, A1, choose]

2.1 Define $j:E\to X\times(\mathbb F^n)^m$ by $j(e)=(p(e),(\sqrt{\rho_i(p(e))}\,\phi_i(e))_{i=1}^m)$, interpreting the $i$th coordinate as zero off $U_i$. Support containment makes every coordinate continuous. If $e\ne0$ lies over $x$, some $\rho_i(x)>0$, so the $i$th coordinate is nonzero; hence each $j_x$ is injective. [step 1.1, algebra]

3.1 In a local frame, $j$ is a continuous full-rank matrix $A(x)$. The matrix $A(x)(A(x)^*A(x))^{-1}A(x)^*$ is the continuous orthogonal projection onto $j(E_x)$. Its complementary projections therefore have locally constant rank $mn-n$, and [F2] makes their images a subbundle $E'\subseteq X\times\mathbb F^{mn}$. Fiberwise orthogonal decomposition gives $j(E)\oplus E'=X\times\mathbb F^{mn}$ and hence $E\oplus E'\cong X\times\mathbb F^{mn}$. [F2, step 2.1, algebra] ∎
