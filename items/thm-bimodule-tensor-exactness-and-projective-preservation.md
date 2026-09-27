---
id: thm-bimodule-tensor-exactness-and-projective-preservation
kind: theorem
title: Bimodule tensor exactness and preservation of finite projectives have separate hypotheses
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-graded-balanced-tensor-product-and-homogeneous-hom, lem-graded-balanced-tensor-and-shift-isomorphisms, thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules, lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise, def-left-and-right-flat-modules-over-an-arbitrary-ring, thm-universal-property-of-module-tensor-products]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §§2a-2b, author pp. 8-9"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, ch. 3, §3.2, printed pp. 68-69"
      url: "https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf"
    - title: "Stacks Project, Algebra, §10.12, tag 00CV"
      url: "https://stacks.math.columbia.edu/tag/00CV"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $A$ and $B$ be graded $k$-algebras and $M$ a graded $(B,A)$-bimodule. Write
$\Phi_M:=M\otimes_A-$ for the functor that sends a graded left $A$-module $N$ to
the graded left $B$-module $M\otimes_AN$ of the total-degree grading.

1. **Exactness.** If $M$ is flat as an underlying right $A$-module, then
$\Phi_M$ is exact on graded left $A$-modules.

2. **Projectives.** If $M$ is finite graded projective as a left $B$-module,
then $\Phi_M$ carries every finite graded projective left $A$-module to a finite
graded projective left $B$-module.

Neither hypothesis is asserted to imply the other; the companion page exhibits
a right-flat $M$ whose output is not projective and a left-projective $M$ whose
tensor functor is not exact.

## Facts & Assumptions

**Given:** Graded $k$-algebras $A,B$, a graded $(B,A)$-bimodule $M$, graded left $A$-modules $N,N',N''$ and graded left $B$-modules as specified below.

[L1] The tensor product $M\otimes_AN$ is graded by total internal degree on homogeneous elementary tensors, and the left $B$-action $b(m\otimes n)=(bm)\otimes n$ makes it a graded left $B$-module ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[L2] The balanced unit and shift maps are degree-zero isomorphisms: $M\otimes_AA\cong M$ by $m\otimes a\mapsto ma$, and $M\otimes_AA\{r\}\cong(M\otimes_AA)\{r\}\cong M\{r\}$ ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[L3] A graded left module is finite graded projective exactly when it is a degree-zero direct summand of a finite direct sum of shifts $B\{s_1\}\oplus\cdots\oplus B\{s_n\}$ ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]]).

[L4] A right $A$-module $M$ is flat exactly when $M\otimes_A-$ is exact on left $A$-modules ([[def-left-and-right-flat-modules-over-an-arbitrary-ring]]).

[L5] $\operatorname{GrMod}_0(A)$ and $\operatorname{GrMod}_0(B)$ are abelian, and exactness, kernels, images and cokernels are computed degreewise ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[L6] A balanced pairing induces a unique homomorphism out of the tensor product, and every element of a tensor product is a finite sum of elementary tensors ([[thm-universal-property-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Let $f:N\to N'$ be a degree-zero $A$-linear map. The pairing $(m,n)\mapsto m\otimes f(n)$ is balanced and additive in each variable, so [L6] gives a unique additive map $M\otimes_Af:M\otimes_AN\to M\otimes_AN'$ with $(M\otimes_Af)(m\otimes n)=m\otimes f(n)$. It is left $B$-linear, since $b(m\otimes f(n))=(bm)\otimes f(n)$ by the outer action of [L1], and degree-zero, since $f(n)$ has the degree of $n$ and the tensor grading is total degree. Identities and composites are inherited from those of $f$, so $\Phi_M$ is a functor $\operatorname{GrMod}_0(A)\to\operatorname{GrMod}_0(B)$. [L1, L6]

1.2 For every $r$ the map $\theta_r:M\otimes_AA\{r\}\to M\{r\}$, $m\otimes a\mapsto ma$, is a degree-zero isomorphism of graded left $B$-modules. It is well defined and additive by [L6], since the pairing is balanced; for homogeneous $m\in M_i$ and $a\in A\{r\}_j=A_{j-r}$ one has $ma\in M_{i+j-r}=(M\{r\})_{i+j}$, so $\theta_r$ is degree-zero, and it is left $B$-linear because $(bm)a=b(ma)$. The inverse $m\mapsto m\otimes1_A$ is the published unit isomorphism on $M\otimes_AA$, transported along the shift; hence $\theta_r$ is bijective. [L1, L2, L6]

2.1 Assume $M$ is flat as a right $A$-module and let $0\to N'\xrightarrow{i}N\xrightarrow{p}N''\to0$ be a short exact sequence in $\operatorname{GrMod}_0(A)$. By [L5] its underlying sequence of $A$-modules is exact, so flatness [L4] makes $0\to M\otimes_AN'\xrightarrow{1\otimes i}M\otimes_AN\xrightarrow{1\otimes p}M\otimes_AN''\to0$ exact as a sequence of abelian groups, with the degree-zero $B$-linear maps of step 1.1. The maps are degree-zero, so this ungraded exactness restricts to exactness of the degree-$d$ part at every $d$: a preimage can be replaced by its degree-$d$ component, and an element of degree $d$ killed by $1\otimes p$ is the image of an element of degree $d$ because $1\otimes i$ is injective on homogeneous components. By [L5] the graded sequence is exact in $\operatorname{GrMod}_0(B)$, so $\Phi_M$ is exact. [step 1.1, L4, L5]

2.2 For graded left $A$-modules $N_1,\dots,N_n$, the coordinate inclusions induce a degree-zero isomorphism $\bigoplus_j(M\otimes_AN_j)\cong M\otimes_A(N_1\oplus\cdots\oplus N_n)$ of graded left $B$-modules: the pairing $\bigl(m,(n_j)\bigr)\mapsto\sum_jm\otimes n_j$ is balanced, its finite sum being a finite sum of elementary tensors, so [L6] gives a map $\psi$ out of the tensor product, while the maps $1\otimes\jmath_j$ assemble by the biproduct property of [L5] into $\varphi$; both composites fix elementary tensors and therefore are identities, and every map involved is degree-zero and $B$-linear. [step 1.1, L1, L5, L6]

2.3 If $M$ is finite graded projective as a left $B$-module, then so is each shift $M\{r\}$. By [L3] there is a degree-zero splitting of $M$ inside a finite direct sum $F=B\{s_1\}\oplus\cdots\oplus B\{s_n\}$; the same underlying maps, read with the gradings shifted by $r$, give a degree-zero splitting of $M\{r\}$ inside $F\{r\}=B\{s_1+r\}\oplus\cdots\oplus B\{s_n+r\}$, because shifting changes no underlying map and translates every degree by $r$. Hence $M\{r\}$ is a degree-zero direct summand of a finite direct sum of shifts, so finite graded projective by [L3]. [step 1.2, L3]

3.1 Finite direct sums of finite graded projectives are finite graded projective, and degree-zero direct summands of finite graded projectives are finite graded projective. For the first claim, write each summand as a degree-zero direct summand of a finite direct sum of shifts using [L3] and take the direct sum of the splittings, the direct sum of finitely many finite shifted-free modules being finite shifted-free. For the second, compose the two splittings: a degree-zero direct summand of a degree-zero direct summand is a degree-zero direct summand. Both closures then follow from [L3]. [step 2.3, L3]

4.1 Assume now that $M$ is finite graded projective as a left $B$-module and let $X$ be a finite graded projective left $A$-module. By [L3] there are degree-zero maps $i:X\to F$ and $p:F\to X$ with $pi=1_X$ for some finite direct sum $F=A\{r_1\}\oplus\cdots\oplus A\{r_n\}$. Applying the functor of step 1.1 gives $1\otimes i$ and $1\otimes p$ with $(1\otimes p)(1\otimes i)=1\otimes1_X=1_{M\otimes_AX}$, so $M\otimes_AX$ is a degree-zero direct summand of $M\otimes_AF$. By steps 1.2 and 2.2, $M\otimes_AF\cong\bigoplus_jM\otimes_AA\{r_j\}\cong\bigoplus_jM\{r_j\}$, which is finite graded projective by steps 2.3 and 3.1; by step 3.1 again, its degree-zero direct summand $M\otimes_AX$ is finite graded projective as a left $B$-module. [step 1.2, step 2.2, step 2.3, step 3.1, L3]

5.1 Step 2.1 proves the exactness clause under right $A$-flatness and step 4.1 proves the preservation of finite graded projectives under finite graded projectivity of $M$ over $B$. The two hypotheses are used separately and neither is derived from the other. ∎ [step 2.1, step 4.1]
