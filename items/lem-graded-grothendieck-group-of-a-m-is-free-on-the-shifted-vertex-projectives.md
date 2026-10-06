---
id: lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives
kind: lemma
title: "The graded Grothendieck group is free on the vertex-projective classes"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
  - def-graded-grothendieck-group-of-a-m-perfect-complexes
  - lem-finite-graded-projective-a-m-modules-are-sums-of-shifted-vertex-projectives
  - thm-perfect-complex-k-zero-agrees-with-projective-k-zero
  - def-split-grothendieck-group-of-an-additive-category
  - lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero
  - lem-bounded-finite-projective-model-for-khovanov-seidel-modules
  - def-bounded-projective-homotopy-category-for-a-m
  - def-triangulated-k-zero-of-khovanov-seidel-projectives
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Section 2e.1"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Section 2e.1, printed pp. 14-15 (K(A_m-mod) free of rank m+1 on the [P_i])"
    - title: "The Stacks Project, More on Algebra, Lemma 15.121.2 (K_0 of perfect complexes versus split K_0 of finite projectives)"
      url: "https://stacks.math.columbia.edu/tag/0FJG"
      locator: "More on Algebra, Lemma 15.121.2 (tag 0FJG): K_0(D_perf(R)) = K_0(R)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $G(A_m)=K_0(C_m)$ be the graded Grothendieck group of
[[def-graded-grothendieck-group-of-a-m-perfect-complexes]]. Then $G(A_m)$ is a
free $\mathbb Z[q,q^{-1}]$-module with basis
$$[P_0],[P_1],\dots,[P_m].$$
Equivalently, the comparison isomorphism
$K_0(C_m)\cong K_0^{\mathrm{split}}(\operatorname{proj}^{gr}A_m)$ sends the class
$[X]$ of a bounded complex $X$ of finite graded projectives to its Euler class
$\sum_n(-1)^n[X^n]$, the split Grothendieck group is free abelian on the classes
$[P_i\{r\}]$, and the internal-shift rule $[P_i\{r\}]=q^r[P_i]$ identifies it
with
$$\bigoplus_{i=0}^{m}\mathbb Z[q,q^{-1}]\,[P_i].$$

## Facts & Assumptions
**Given:** An integer $m\ge1$, the category $C_m=K^b(\operatorname{proj}^{gr}A_m)$ with its triangulation and the equivalence $\Theta:C_m\to D^b(A_m\text{-mod})$, the graded Grothendieck group $G(A_m)=K_0(C_m)$, and the split Grothendieck group of the finite graded projectives.

[L1] $G(A_m)=K_0^{\mathrm{tri}}(C_m)$ is the free abelian group on the isomorphism classes of $C_m$ modulo the triangle relations $[Y]=[X]+[Z]$, with $[X\oplus Y]=[X]+[Y]$, $[X[1]]=-[X]$ and a $\mathbb Z[q,q^{-1}]$-module structure with $[X\{r\}]=q^r[X]$ ([[def-graded-grothendieck-group-of-a-m-perfect-complexes]], [[lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero]]).

[L2] $\Theta:C_m\to D^b(A_m\text{-mod})$ is exact, full, faithful and essentially surjective; every bounded complex of finitely generated graded $A_m$-modules is isomorphic in $D^b(A_m\text{-mod})$ to the image of an object of $C_m$, so every such complex is perfect, and $\Theta$ induces an isomorphism $K_0(C_m)\cong K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A_m))$ ([[lem-bounded-finite-projective-model-for-khovanov-seidel-modules]], [[def-bounded-projective-homotopy-category-for-a-m]]).

[L3] For any unital ring the degree-zero inclusion of finitely generated projectives induces an isomorphism $K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}})\to K_0^{\mathrm{tri}}(D_{\mathrm{perf}})$ whose inverse sends a perfect object represented by a bounded finite-projective complex $P$ to $\sum_n(-1)^n[P^n]$; the same holds in the graded setting with degree-zero maps ([[thm-perfect-complex-k-zero-agrees-with-projective-k-zero]]).

[L4] Every finitely generated graded projective left $A_m$-module is isomorphic to a finite direct sum $\bigoplus_{i,r}P_i\{r\}^{\oplus a_{i,r}}$ with unique multiplicities, and the classes $[P_i\{r\}]$ are linearly independent in the split Grothendieck group of the additive category of finite graded projectives ([[lem-finite-graded-projective-a-m-modules-are-sums-of-shifted-vertex-projectives]], [[def-split-grothendieck-group-of-an-additive-category]]).




## Proof

**Proof technique:** direct.

1.1 *$K_0(C_m)$ is the split Grothendieck group of finite graded projectives.* By [L2] the functor $\Theta$ is an exact equivalence onto the perfect objects, so it induces a bijection on isomorphism classes preserving cones and shifts and hence an isomorphism of abelian groups $K_0(C_m)\to K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A_m))$; by [L3] this group is identified with $K_0^{\mathrm{split}}(\operatorname{proj}^{gr}A_m)$ through the Euler class $\sum_n(-1)^n[X^n]$. Composition gives the displayed comparison isomorphism. [L1, L2, L3]

1.2 *Freeness of the split group.* By [L4] every finite graded projective is a finite direct sum of shifts of the $P_i$ with unique multiplicities, so the split Grothendieck group is free abelian with basis the classes $[P_i\{r\}]$, $0\le i\le m$, $r\in\mathbb Z$; there are no relations among distinct pairs by uniqueness. [L4]

2.1 *The $\mathbb Z[q,q^{-1}]$-action on the basis.* The internal shift is an automorphism of $C_m$ commuting with $\Theta$, so its induced operator $q$ on $K_0(C_m)$ is invertible and $q^r[P_i]=[P_i\{r\}]$ by [L1]; hence the free abelian group $\bigoplus_{i,r}\mathbb Z[P_i\{r\}]$ acquires the $\mathbb Z[q,q^{-1}]$-module structure of $\bigoplus_{i=0}^m\mathbb Z[q,q^{-1}][P_i]$, with the $q$-action shifting the basis. [step 1.2, L1]

3.1 *Conclusion.* $G(A_m)$ is a free $\mathbb Z[q,q^{-1}]$-module with basis $[P_0],\dots,[P_m]$, and the Euler-class comparison identifies it with the split Grothendieck group of finite graded projectives; the freeness uses the explicit classification of finite graded projectives and no finite-dimensional-field-algebra structure theorem. No choice principle is used. [step 1.1, step 1.2, step 2.1] ∎ 