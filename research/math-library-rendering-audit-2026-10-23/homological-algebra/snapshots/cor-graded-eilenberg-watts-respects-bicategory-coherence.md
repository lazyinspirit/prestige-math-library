---
id: cor-graded-eilenberg-watts-respects-bicategory-coherence
kind: corollary
title: Graded Eilenberg-Watts respects bicategorical coherence
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [cor-graded-bimodule-maps-classify-shift-compatible-transformations, lem-coherent-shift-functors-and-transformations-form-hom-categories, thm-graded-eilenberg-watts-with-coherent-shifts, lem-graded-balanced-tensor-and-shift-isomorphisms, def-graded-balanced-tensor-product-and-homogeneous-hom, thm-associativity-of-balanced-tensor-products, thm-unit-isomorphisms-for-module-tensor-products, prop-functoriality-of-module-tensor-products, thm-interchange-law-for-natural-transformations, def-bicategory-pseudofunctor-and-biequivalence, lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence, def-coherently-shift-compatible-functor-and-natural-transformation, def-graded-ring-module-bimodule-and-internal-shift]
justified_by: []
aliases: []
dependency_level: 8
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

Let $k$ be a field. Fix one uniformly definable family $J$ as in clause 4 of
[[lem-coherent-shift-functors-and-transformations-form-hom-categories]], containing
the canonical tensor generators for every graded bimodule and all endpoint algebras.
Here $\mathrm{CohFun}(A,B)$ means the actual word-coded category $\mathrm{CohFun}_J(A,B)$;
its 1-cells are words interpreted as coherent functors, and composition is word concatenation.
Any finite collection of separately supplied definable coherent functors can also be included in $J$.

1. The **graded Morita bicategory** $\mathbf{GrBimod}$ has graded $k$-algebras as objects, graded
$(B,A)$-bimodules as 1-cells $A\to B$, degree-zero bimodule maps as 2-cells, composition
$(N,M)\mapsto N\otimes_BM$ on 1-cells and $g\otimes f$ on 2-cells, regular bimodules as identity
1-cells, and the graded associators and unitors of
[[lem-graded-balanced-tensor-and-shift-isomorphisms]] as coherence isomorphisms; it is a bicategory
in the sense of [[def-bicategory-pseudofunctor-and-biequivalence]]: the associators and unitors are
degree-zero natural isomorphisms, they satisfy the pentagon and triangle identities because they are
the ungraded coherence maps of
[[lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence]] read on graded modules,
and horizontal composition is the functorial tensor product of bimodule maps with
$(g'\otimes f')(g\otimes f)=(g'g)\otimes(f'f)$
([[prop-functoriality-of-module-tensor-products]]).

2. The assignment $\Phi$ of [[thm-graded-eilenberg-watts-with-coherent-shifts]] is a pseudofunctor
from $\mathbf{GrBimod}$ to the bicategory whose objects are the graded $k$-algebras, whose
hom-categories are the $\mathrm{CohFun}(A,B)$ of
[[lem-coherent-shift-functors-and-transformations-form-hom-categories]], whose composition is
composition of coherent functors with the composite comparison, and whose identity 1-cells are the
identity functors with their canonical coherence: the composition comparison
$$T_{N\otimes_BM}\cong T_N\circ T_M$$
is the graded associator of [[lem-graded-balanced-tensor-and-shift-isomorphisms]], the identity
comparison $\mathrm{id}\Rightarrow T_A$ is the inverse graded unitor, and the pseudofunctor coherence equations are
transported from (1).

3. $\Phi$ is a biequivalence: each local functor is an equivalence of categories by
[[cor-graded-bimodule-maps-classify-shift-compatible-transformations]], and it is essentially
surjective on 1-cells because every coherent functor is coherently isomorphic to $T_{F(A)}$ by
[[thm-graded-eilenberg-watts-with-coherent-shifts]]. Horizontal composition of coherent
transformations corresponds to tensoring the underlying graded bimodule maps,
$(g\otimes1)*(f\otimes1)=(g\otimes f)\otimes1$ up to the canonical comparison, so the equivariance
restriction on 2-cells of
[[def-coherently-shift-compatible-functor-and-natural-transformation]] is preserved by the
bicategorical structure. No commutativity beyond $k$, no choice and no enhancement data are
introduced.

## Facts & Assumptions

**Given:** A field $k$; graded $k$-algebras $A,B,C,D,E$; graded bimodules $F$ of type $(B,A)$, $G$ of type $(C,B)$, $H$ of type $(D,C)$; degree-zero bimodule maps $f:M\to M'$, $g:N\to N'$, $g':N'\to N''$, $f':M'\to M''$; and graded left $A$-modules $X$.

[L1] The functor $\Phi(M)=(T_M,\theta^M)$, $\Phi(f)=f\otimes1$, is an equivalence of categories and the map $\eta\mapsto\eta_A$ is a bijection with inverse $f\mapsto f\otimes1$ ([[thm-graded-eilenberg-watts-with-coherent-shifts]], [[cor-graded-bimodule-maps-classify-shift-compatible-transformations]]).

[L2] For this specified family $J$, words representing $k$-linear right exact coproduct-preserving coherent functors and their set-coded coherent transformations form locally small $k$-linear hom-categories with composite comparisons, identities and composition ([[lem-coherent-shift-functors-and-transformations-form-hom-categories]]).

[L3] $\Phi$ is essentially surjective up to coherent natural isomorphism: every coherent functor is coherently isomorphic to $T_{F(A)}$ ([[thm-graded-eilenberg-watts-with-coherent-shifts]]).

[L4] The graded associator $\alpha_{H,G,F}:(H\otimes_CG)\otimes_BF\to H\otimes_C(G\otimes_BF)$ and the graded unitors $B\otimes_BF\cong F$, $F\otimes_AA\cong F$ are degree-zero natural isomorphisms compatible with outer actions ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[L5] The graded balanced tensor product is graded by total internal degree on elementary tensors, and its outer actions make it a graded bimodule ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[L6] The ungraded balanced associator is a canonical natural isomorphism respecting outer actions ([[thm-associativity-of-balanced-tensor-products]]).

[L7] The ungraded tensor-unit maps $R\otimes_RN\to N$ and $M\otimes_RR\to M$ are natural isomorphisms respecting outer module structures ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L8] For module maps $g,g'$ and $f,f'$ the tensor product is functorial: $(g'\circ g)\otimes(f'\circ f)=(g'\otimes f')\circ(g\otimes f)$ and $\operatorname{id}\otimes\operatorname{id}=\operatorname{id}$ ([[prop-functoriality-of-module-tensor-products]]).

[L9] Horizontal and vertical composition of natural transformations satisfy the interchange law ([[thm-interchange-law-for-natural-transformations]]).

[L10] A bicategory has hom-categories, identity 1-cells, composition functors and invertible associators and unitors satisfying the pentagon and triangle identities; a pseudofunctor carries composition and identity comparisons satisfying the pseudofunctor coherence equations; a biequivalence has local equivalences and is essentially surjective on objects ([[def-bicategory-pseudofunctor-and-biequivalence]]).

[L11] The data of the ungraded Morita bicategory satisfy the bicategory axioms: the associators and unitors are natural isomorphisms, the pentagon and triangle identities hold, and $(g,f)\mapsto g\otimes f$ is a functor on hom-categories preserving identities and composition, with all coherence identities checked on elementary tensors ([[lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence]]).

[L12] Coherent transformations satisfy the equivariance square for the comparisons of their source and target functors ([[def-coherently-shift-compatible-functor-and-natural-transformation]]).

[L13] Graded bimodules, degree-zero maps and the graded tensor product are the conventions of the graded bimodule page, where the internal grading multiplies no sign ([[def-graded-ring-module-bimodule-and-internal-shift]]).

## Proof

**Proof technique:** direct.

1.1 The graded Morita data form a bicategory [L10]: for graded bimodules the tensor product is a graded bimodule by [L5] and composition $N\otimes_BM$ is associative with the degree-zero natural associators and unitors of [L4] and [L6, L7]; on 2-cells the assignment $(g,f)\mapsto g\otimes f$ is functorial by [L8], which gives the composition functors and the identity conditions $(g'\otimes f')(g\otimes f)=(g'g)\otimes(f'f)$; the pentagon and triangle identities for the graded associators and unitors hold because the graded balanced tensor is the ordinary balanced tensor with the induced internal grading and the coherence maps are the same underlying maps as those of [L11], whose identities were verified on elementary tensors, and every graded tensor is a finite sum of elementary tensors [L5]; no sign enters the coherence maps [L13]. [L4, L5, L6, L7, L8, L10, L11, L13]

2.1 By [L2], finite words give actual set objects, concatenation gives strictly associative composition, and the empty word gives the identity. The tensor generator for each bimodule is present in $J$, so the realization satisfies [L1]. The assignment $\Phi$ is a pseudofunctor [L10]: it is the identity on objects, its local functors $M\mapsto(T_M,\theta^M)$, $f\mapsto f\otimes1$ are functorial and $k$-linear by the local equivalence [L1], the composition comparison has components the degree-zero natural isomorphisms $N\otimes_B(M\otimes_AX)\to(N\otimes_BM)\otimes_AX$ inverse to the graded associators of [L4] and the identity comparison $\mathrm{id}\Rightarrow T_A$ has components $x\mapsto1_A\otimes x$, inverse to the unitor isomorphisms of [L4]; these comparisons are coherent because they are the identity on elementary tensors under the total grading [L5], so the pseudofunctor coherence equations become the pentagon and unit triangle identities of step 1.1 applied at a variable module, and the interchange needed on 2-cells is [L9]. [step 1.1, L1, L2, L4, L5, L9, L10]

3.1 For degree-zero bimodule maps $f:M\to M'$ and $g:N\to N'$ the horizontal composite $(g\otimes1)*(f\otimes1)$ has components $n\otimes(m\otimes x)\mapsto g(n)\otimes(f(m)\otimes x)$, and under the associators of [L4] this corresponds to $(g\otimes f)(n\otimes m)\otimes x$, that is, to the components of $(g\otimes f)\otimes1$; hence horizontal composition of the coherent transformations of $\Phi$ is the tensor product of the underlying bimodule maps up to the canonical comparison, and the equivariance restriction of [L12] is preserved. [step 2.1, L4, L8, L12]

3.2 The pseudofunctor $\Phi$ is a biequivalence [L10]: each local functor is an equivalence of categories by [L1], and on 1-cells it is essentially surjective because every coherent functor is coherently isomorphic to $T_{F(A)}$ by [L3]; it is the identity on objects, so essential surjectivity on objects is immediate. [step 1.1, step 2.1, L1, L3, L10]

4.1 Collecting steps 1.1, 2.1, 3.1 and 3.2: the graded Morita data form a bicategory, $\Phi$ is a pseudofunctor that is a biequivalence, horizontal composition of coherent transformations corresponds to tensoring the underlying graded bimodule maps, and the equivariance restriction on 2-cells is preserved; all coherence maps are the canonical associators and unitors, no commutativity beyond the central field $k$ is used, no enhancement data are introduced, and no choice is made. [step 2.1, step 3.1, step 3.2] ∎
