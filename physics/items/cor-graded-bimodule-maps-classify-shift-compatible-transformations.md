---
id: cor-graded-bimodule-maps-classify-shift-compatible-transformations
kind: corollary
title: Graded bimodule maps classify shift-compatible transformations
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-graded-eilenberg-watts-with-coherent-shifts, def-coherently-shift-compatible-functor-and-natural-transformation, lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent, lem-internal-shift-endofunctors-and-tensor-compatibility, def-bimodule, def-left-and-right-modules, thm-unit-isomorphisms-for-module-tensor-products, def-natural-transformation, def-natural-isomorphism]
justified_by: []
aliases: []
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roozbeh Hazrat, Graded Rings and Graded Grothendieck Groups (arXiv:1405.5071), §1.2.2 shift of modules (1.16), printed p.34; §1.2.6 graded tensor product (1.21)-(1.23), printed pp.40-41; §2.3 Definitions 2.3.3-2.3.4, Theorem 2.3.7 with its proof, Theorem 2.3.8, Example 2.3.9, printed pp.118-123"
      url: "https://arxiv.org/pdf/1405.5071"
    - title: "J. Fuchs, G. Schaumann, C. Schweigert, Eilenberg-Watts calculus for finite categories and a bimodule Radford S^4 theorem (arXiv:1612.04561v3), Introduction (classical unital-ring statement) and §2.1 Lemma 2.1"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Let $k$ be a field, $A,B$ graded $k$-algebras and $M,M'$ graded $(B,A)$-bimodules. The map
$$\eta\longmapsto\eta_A,$$
read through the unit isomorphisms $T_M(A)=M\otimes_AA\cong M$ and $T_{M'}(A)\cong M'$, is a
$k$-linear bijection
$$\operatorname{Nat}^{\mathrm{coh}}(T_M,T_{M'})\xrightarrow{\ \cong\ }\operatorname{Hom}_{B\text{-}A}(M,M')$$
onto the degree-zero $(B,A)$-bimodule maps, with inverse $f\mapsto f\otimes1$. In particular a
coherent transformation between graded tensor functors is determined by its component on the
regular module $A$; that component is automatically degree-zero and right $A$-linear, and conversely
every degree-zero bimodule map induces one and only one coherent transformation. For $A=B=k$
concentrated in degree zero the coherent endomorphisms of the identity functor are the scalars
$k$, and no larger family satisfies the equivariance square.

## Facts & Assumptions

**Given:** A field $k$, graded $k$-algebras $A,B$, graded $(B,A)$-bimodules $M,M'$, a coherent
transformation $\eta:T_M\Rightarrow T_{M'}$ and a degree-zero $(B,A)$-bimodule map $f:M\to M'$.

[L1] Fix a uniformly definable family $J$ containing every canonical tensor generator as in
[[thm-graded-eilenberg-watts-with-coherent-shifts]], and write $\mathrm{CohFun}(A,B)=\mathrm{CohFun}_J(A,B)$ for its word-coded category. The functor $\Phi:\mathrm{GrBimod}(B,A)\to\mathrm{CohFun}(A,B)$, $\Phi(M)=(T_M,\theta^M)$,
$\Phi(f)=f\otimes1$, is an equivalence of $k$-linear categories, and for all $M,M'$ the map
$\eta\mapsto\eta_A$, read through the unit isomorphisms, is a $k$-linear bijection
$\operatorname{Nat}^{\mathrm{coh}}(T_M,T_{M'})\to\operatorname{Hom}_{B\text{-}A}(M,M')$ with inverse
$f\mapsto f\otimes1$ ([[thm-graded-eilenberg-watts-with-coherent-shifts]]).

[L2] Coherent transformations satisfy the equivariance square
$\theta^{T_{M'}}_{X,r}\eta_{X\{r\}}=(\eta_X\{r\})\theta^{T_M}_{X,r}$
([[def-coherently-shift-compatible-functor-and-natural-transformation]]), and the canonical
comparisons $\theta^M_{X,r}$ of the tensor functor are the identity on elementary tensors
([[lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent]]).

[L3] The components $f\otimes1_X$ are degree-zero $B$-linear, define the coherent transformation
$f\otimes1$, and $f\mapsto f\otimes1$ preserves identities and composition
([[lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent]]).

[L4] A $(B,A)$-bimodule map is a function that is left $B$-linear and right $A$-linear with respect
to commuting actions ([[def-bimodule]], [[def-left-and-right-modules]]).

[L5] The tensor-unit maps $\lambda_M:M\otimes_AA\to M$, $m\otimes a\mapsto ma$, are group
isomorphisms with inverse $m\mapsto m\otimes1$, natural in $M$, and respect every displayed outer
module structure; in the graded setting they are degree-zero
([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L6] A natural transformation has components satisfying the naturality equation
$Gf\circ\alpha_X=\alpha_Y\circ Ff$, and a natural isomorphism is a natural transformation with a
two-sided inverse ([[def-natural-transformation]], [[def-natural-isomorphism]]).

[L7] The internal shift acts as the identity on underlying sets and sends a degree-zero map to the
same underlying map, so the shift $(\eta_A\{d\})$ of the morphism $\eta_A$ is the same function as
$\eta_A$, and $(X\{r\})_e=X_{e-r}$
([[lem-internal-shift-endofunctors-and-tensor-compatibility]]).

## Proof

**Proof technique:** direct.

1.1 In the specified word-coded category of [L1], $T_M$ and $T_{M'}$ are represented by their canonical tensor generators. The equivalence $\Phi$ gives the displayed $k$-linear bijection $\eta\mapsto\eta_A$ onto $\operatorname{Hom}_{B\text{-}A}(M,M')$ with inverse $f\mapsto f\otimes1$. Its morphisms code exactly the coherent transformations between these two tensor functors, so this proves the asserted fixed-pair bijection. The unit isomorphisms of [L5] are degree-zero $(B,A)$-bimodule isomorphisms, and the inverse is the one recorded in [L3]. [L1, L3, L5]

2.1 Direct direction check: for coherent $\eta$ the component $\eta_A$ is a morphism of $\operatorname{GrMod}_0(B)$, hence degree-zero $B$-linear [L6, L2]; writing $f$ for the map corresponding to $\eta_A$ through the unit isomorphism, one has $f(m)\otimes1_A=\eta_A(m\otimes1_A)$. The equivariance square of [L2] at $X=A$ with parameter $d$ reads $\theta^{T_{M'}}_{A,d}\circ\eta_{A\{d\}}=(\eta_A\{d\})\circ\theta^{T_M}_{A,d}$; both $\theta$'s are the identity on elementary tensors [L2] and the shift of the morphism $\eta_A$ is the same underlying map [L7], so $\eta_{A\{d\}}$ and $\eta_A$ are the same function. Naturality of $\eta$ at the degree-zero map $r_a:A\{d\}\to A$, $x\mapsto xa$, reads $\eta_A\circ(1\otimes r_a)=(1\otimes r_a)\circ\eta_{A\{d\}}$; evaluating at $m\otimes1_A\in M\otimes_AA\{d\}$ and using $\eta_{A\{d\}}(m\otimes1_A)=\eta_A(m\otimes1_A)=f(m)\otimes1_A$ together with $r_a(1_A)=a$ gives $\eta_A(m\otimes a)=f(m)\otimes a$ for homogeneous $a\in A_d$. Then $f(ma)\otimes1_A=\eta_A(ma\otimes1_A)=\eta_A(m\otimes a)=f(m)\otimes a=f(m)a\otimes1_A$, the middle equality using the balancing relation $ma\otimes1_A=m\otimes a$ and its analogue for $f(m)$, so $f(ma)=f(m)a$ because $m'\mapsto m'\otimes1_A$ is injective, being the inverse of the unit isomorphism [L5]; hence $f$ is a degree-zero $(B,A)$-bimodule map [L4], and conversely every such $f$ produces $f\otimes1$ by [L3]. [step 1.1, L2, L3, L4, L5, L6, L7]

2.2 For $A=B=k$ concentrated in degree zero the unit isomorphism $u:T_k\Rightarrow\mathrm{id}$ has components the degree-zero isomorphisms $k\otimes_kX\to X$, $c\otimes x\mapsto cx$ [L5], and it is coherent for the canonical comparisons: $\theta^{T_k}$ is the identity on elementary tensors [L2] while $\theta^{\mathrm{id}}_{X,r}=1_{X\{r\}}$, so $\theta^{\mathrm{id}}_{X,r}u_{X\{r\}}=(u_X\{r\})\theta^{T_k}_{X,r}$; conjugating by the coherent isomorphism $u$ gives a $k$-linear bijection between the coherent endomorphisms of $\mathrm{id}$ and those of $T_k$, and by step 1.1 the latter correspond bijectively to $\operatorname{Hom}_{k\text{-}k}(k,k)\cong k$, since a $(k,k)$-bimodule map $k\to k$ is multiplication by the scalar $f(1)$; hence the coherent endomorphisms of the identity functor correspond bijectively to $k$ via $\eta\mapsto\eta_k$, and no family larger than the scalars satisfies the equivariance square. [step 1.1, L1, L2, L4, L5, L6]

3.1 Collecting steps 1.1, 2.1 and 2.2: the map $\eta\mapsto\eta_A$ is a $k$-linear bijection onto the degree-zero $(B,A)$-bimodule maps with inverse $f\mapsto f\otimes1$, every coherent transformation is determined by its component at $A$, that component is automatically degree-zero, $B$-linear and right $A$-linear, and for $A=B=k$ the coherent endomorphisms of the identity functor are exactly the scalars; no selection of elements or bases was made, so no choice is used. [step 1.1, step 2.1, step 2.2, L1, L3] ∎
