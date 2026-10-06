---
id: thm-graded-eilenberg-watts-with-coherent-shifts
kind: theorem
title: Graded Eilenberg-Watts theorem with coherent shifts
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-coherent-shift-functors-and-transformations-form-hom-categories, lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action, lem-homogeneous-free-presentations-prove-the-graded-comparison, lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent, lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving, def-coherently-shift-compatible-functor-and-natural-transformation, def-graded-ring-module-bimodule-and-internal-shift, def-bimodule, def-left-and-right-modules, thm-unit-isomorphisms-for-module-tensor-products, def-natural-transformation, def-natural-isomorphism, def-equivalence-and-adjoint-equivalence-of-categories, def-k-linear-category-and-k-linear-functor, def-vector-space, def-field, lem-field-is-a-commutative-ring, def-functor-and-contravariant-functor, def-category]
justified_by: []
aliases: []
dependency_level: 6
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

Let $k$ be a field and $A,B$ graded $k$-algebras. Fix a uniformly definable family $J$
as in clause 4 of [[lem-coherent-shift-functors-and-transformations-form-hom-categories]],
containing the canonical tensor generator labelled by $(A,B,M)$ for every graded $(B,A)$-bimodule $M$.
In this statement $\mathrm{CohFun}(A,B)$ denotes its actual word-coded category
$\mathrm{CohFun}_J(A,B)$; a word is interpreted as its composite coherent functor. Write $\mathrm{GrBimod}(B,A)$ for the category of
graded $(B,A)$-bimodules and degree-zero bimodule maps and $\mathrm{CohFun}(A,B)$ for the locally
small $k$-linear category of words representing $k$-linear right exact coproduct-preserving coherently
shift-compatible functors $\operatorname{GrMod}_0(A)\to\operatorname{GrMod}_0(B)$ with coherent
natural transformations
([[lem-coherent-shift-functors-and-transformations-form-hom-categories]]) — equivalently, by
[[lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving]], the
$k$-linear cocontinuous functors with coherent comparisons. Then
$$\Phi:\mathrm{GrBimod}(B,A)\longrightarrow\mathrm{CohFun}(A,B),\qquad \Phi(M)=(T_M,\theta^M),\qquad \Phi(f)=f\otimes1,$$
is an equivalence of $k$-linear categories. Explicitly:

1. $\Phi$ is well defined on objects and morphisms by
[[lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent]];
2. (essential surjectivity) for every $F$ in $\mathrm{CohFun}(A,B)$, $M:=F(A)$ carries the graded
$(B,A)$-bimodule structure of
[[lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action]] and the comparison
$\tau:T_M\Rightarrow F$ of [[lem-homogeneous-free-presentations-prove-the-graded-comparison]] is a
coherent natural isomorphism;
3. (quasi-inverse) the unit isomorphism $M\otimes_AA\to M$, $m\otimes a\mapsto ma$, is a degree-zero
$(B,A)$-bimodule isomorphism $T_M(A)\cong M$, so the object map $F\mapsto F(A)$ with the action of 2
is inverse to $\Phi$ up to coherent natural isomorphism, and the unit and comparison isomorphisms
satisfy the triangle identities;
4. (full and faithful) for all graded $(B,A)$-bimodules $M,M'$ the map $\eta\mapsto\eta_A$, read
through the unit isomorphisms, is a $k$-linear bijection
$\operatorname{Nat}^{\mathrm{coh}}(T_M,T_{M'})\to\operatorname{Hom}_{B\text{-}A}(M,M')$ with
inverse $f\mapsto f\otimes1$.

Any separately supplied definable coherent functor may be included in $J$ using finitely many fixed formulas,
so its tensor representation is still covered; no category of all proper-class functor graphs is formed.
The statement assumes no commutativity beyond the field $k$ and uses no choice; specialising $F$ to
an equivalence recovers the tensor-representation statement of Hazrat's Theorem 2.3.7 for
shift-commuting equivalences, while the statement here classifies all right exact
coproduct-preserving shift-coherent functors and their transformations.

## Facts & Assumptions

**Given:** A field $k$, graded $k$-algebras $A,B$, graded $(B,A)$-bimodules $M,M'$, a degree-zero $(B,A)$-bimodule map $f:M\to M'$, and $F\in\mathrm{CohFun}(A,B)$.

[L1] For the specified uniformly definable family $J$, the word-coded $\mathrm{CohFun}_J(A,B)=\mathrm{CohFun}(A,B)$ is a locally small $k$-linear category whose morphisms are the coherent transformations and whose composition is vertical composition, the map $\eta\mapsto\eta_A$ is injective for $k$-linear right exact coproduct-preserving $F,G$, and composite and identity functors carry coherent data ([[lem-coherent-shift-functors-and-transformations-form-hom-categories]]).

[L2] $M:=F(A)$ carries a graded $(B,A)$-bimodule structure with $m\cdot a=F(r_a)\theta^{-1}_{A,d}(m)$, $m\cdot1=m$ and $(m\cdot a)\cdot b=m\cdot(ab)$ ([[lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action]]).

[L3] The comparison $\tau:T_{F(A)}\Rightarrow F$ is a coherent natural isomorphism for $k$-linear right exact coproduct-preserving coherent $F$ ([[lem-homogeneous-free-presentations-prove-the-graded-comparison]]).

[L4] $T_M$ is $k$-linear, right exact and coproduct preserving with the coherent comparisons $\theta^M$, the components $f\otimes1_X$ are degree-zero $B$-linear and define the coherent transformation $f\otimes1$, and $f\mapsto f\otimes1$ preserves identities and composition ([[lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent]]).

[L6] Coherently shift-compatible functors carry natural degree-zero isomorphisms satisfying the unit and cocycle, coherent transformations satisfy the equivariance square, and $\mathrm{CohFun}$ is the $k$-linear right exact coproduct-preserving sub-class ([[def-coherently-shift-compatible-functor-and-natural-transformation]]).

[L7] A graded $(B,A)$-bimodule is a $(B,A)$-bimodule whose graded pieces are homogeneous under both actions, with degree-zero maps as morphisms ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[L10] The tensor-unit maps $\lambda_M:M\otimes_AA\to M$, $m\otimes a\mapsto ma$, are group isomorphisms with inverse $m\mapsto m\otimes1$, natural in $M$, and respect every displayed outer module structure ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L11] A natural transformation has components satisfying the naturality equation and isomorphisms of functors are its natural isomorphisms ([[def-natural-transformation]], [[def-natural-isomorphism]]).

[L12] An equivalence of categories consists of quasi-inverse functors with natural isomorphisms $\eta:1\Rightarrow GF$ and $\varepsilon:FG\Rightarrow1$; an adjoint equivalence additionally satisfies the triangle identities $G\varepsilon\circ\eta G=1_G$ and $\varepsilon F\circ F\eta=1_F$ ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

[L13] A functor between $k$-linear categories is $k$-linear when each induced map of hom-spaces is $k$-linear ([[def-k-linear-category-and-k-linear-functor]]).

[L14] A $k$-vector space has a pointwise abelian group structure and scalar action ([[def-vector-space]]).

[L15] A field has a commutative multiplication ([[def-field]]); every field is a commutative ring ([[lem-field-is-a-commutative-ring]]).

[L16] A functor assigns objects and morphisms compatibly with identities and composites ([[def-functor-and-contravariant-functor]]).

[L17] A category consists of objects and morphisms with associative unital composition ([[def-category]]).

## Proof

**Proof technique:** direct.

1.1 Represent $\Phi(M)$ by its canonical one-letter tensor word, and read $f\otimes1$ as the transformation code with those source and target words. The generator assignments are uniformly definable in the set parameter $M$, so [L1] supplies the actual target category. Clause 1: by [L4] the assignment $M\mapsto(T_M,\theta^M)$ takes each graded $(B,A)$-bimodule to a $k$-linear right exact coproduct-preserving coherently shift-compatible functor, and $f\mapsto f\otimes1$ takes degree-zero bimodule maps to coherent transformations and preserves identities and composition; hence $\Phi$ is a well-defined functor $\mathrm{GrBimod}(B,A)\to\mathrm{CohFun}(A,B)$ [L16, L17]. [L4, L6, L16, L17]

1.2 For $F,G\in\mathrm{CohFun}(A,B)$ and a coherent $\eta:F\Rightarrow G$, naturality at $r_a:A\{d\}\to A$ and coherence at $A,d$ give $\eta_AF(r_a)\theta^{F,-1}_{A,d}=G(r_a)\theta^{G,-1}_{A,d}(\eta_A\{d\})$. Hence $\eta_A(m\cdot a)=\eta_A(m)\cdot a$ for homogeneous $a$, and therefore for all $a$ by additivity. Since $\eta_A$ is degree-zero $B$-linear, evaluation defines a $k$-linear functor $\Psi(F)=F(A)$, $\Psi(\eta)=\eta_A$ into graded bimodules, preserving identities and composition componentwise. For $F=T_M$ its reconstructed action on $T_M(A)=M\otimes_AA$ sends $m\otimes b$ to $m\otimes ba$; the unit $\lambda_M$ sends this to $mba=\lambda_M(m\otimes b)a$, so $\lambda_M$ identifies the reconstructed action with that on $M$. Evaluation on tensor functors thus lands in $\operatorname{Hom}_{B\text{-}A}(M,M\prime)$. It is injective by [L1] and surjective with inverse $f\mapsto f\otimes1$ by [L4] and [L10]. Both maps are $k$-linear componentwise. [L1, L2, L4, L6, L7, L10, L11, L13, L14, L16]

2.1 Clause 2: for $F\in\mathrm{CohFun}(A,B)$ the module $M=F(A)$ with the reconstructed action is a graded $(B,A)$-bimodule by [L2, L7], and the comparison $\tau:T_M\Rightarrow F$ of [L3] is a coherent natural isomorphism; hence every object of $\mathrm{CohFun}(A,B)$ is isomorphic to $\Phi(F(A))$, which is essential surjectivity. [step 1.1, L2, L3, L7]

2.2 The degree-zero bimodule isomorphisms $\lambda_M:\Psi\Phi(M)\to M$ are natural in $M$, since on $m\otimes a$ both paths for a bimodule map $f$ give $f(m)a=f(ma)$. Put $\eta_M=\lambda_M^{-1}:m\mapsto m\otimes1_A$. The coherent comparisons $\varepsilon_F=\tau^F:\Phi\Psi(F)\Rightarrow F$ of [L3] are natural in $F$: for coherent $\zeta:F\Rightarrow G$ and homogeneous $x\in X_d$, naturality at $\ell_x$ and coherence at $A,d$ give $\zeta_X\tau^F_X(m\otimes x)=G(\ell_x)\theta^{G,-1}_{A,d}(\zeta_A(m))=\tau^G_X(\zeta_A(m)\otimes x)$. Thus $\eta:1\Rightarrow\Psi\Phi$ and $\varepsilon:\Phi\Psi\Rightarrow1$ are natural isomorphisms. The first triangle sends $m\otimes x$ to $(m\otimes1_A)\otimes x$ and then to $m\otimes x$, because $\tau^{T_M}_X((m\otimes1_A)\otimes x)=m\otimes x$. The second sends $m\in F(A)$ to $m\otimes1_A$ and then to $F(\ell_{1_A})(m)=m$, since $\ell_{1_A}=\mathrm{id}_A$ and $\theta_{A,0}=1$. Hence both triangle identities hold and $\Phi,\Psi$ form an adjoint equivalence. [step 1.2, L2, L3, L4, L6, L10, L11, L12]

3.1 Collecting steps 1.1, 1.2, 2.1 and 2.2: $\Phi$ is well defined, essentially surjective, full and faithful, and admits the quasi-inverse $\Psi$ with unit $\lambda^{-1}$ and counit $\tau$; hence $\Phi$ is an equivalence of categories [L12], and it is an equivalence of $k$-linear categories because the bijection of clause 4 is $k$-linear [L13]. Every construction used the canonical tensor product, the canonical reconstructed action and the canonical free covers, so no choice is used, and no commutativity of $A$ or $B$ beyond the central field $k$, which is a commutative ring [L15], entered. [step 1.1, step 2.1, step 1.2, step 2.2, L11, L12, L13, L15] ∎

