---
id: lem-tensoring-defines-a-pseudofunctor-with-interchange
kind: lemma
title: "Tensoring defines a schematic pseudofunctor with interchange"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-bicategory-pseudofunctor-and-biequivalence, def-morita-bicategory-of-rings-and-bimodules, def-additive-cocontinuous-module-functor, def-strict-two-category, def-functor-category, def-natural-transformation, def-horizontal-composition-and-whiskering-of-natural-transformations, lem-additive-cocontinuous-module-functors-form-a-category, thm-interchange-law-for-natural-transformations, lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence, thm-associativity-of-balanced-tensor-products, thm-unit-isomorphisms-for-module-tensor-products, prop-functoriality-of-module-tensor-products, thm-eilenberg-watts-for-arbitrary-unital-rings]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Johnson and D. Yau, 2-Dimensional Categories, Example 2.1.26 (Bimod) and Definition 4.1.2/Explanation 4.1.5 (pseudofunctor)"
      url: "https://arxiv.org/pdf/2002.06055"
    - title: "Fuchs-Schaumann-Schweigert, Eilenberg-Watts calculus for finite categories, introduction (Morita-invariant Eilenberg-Watts equivalences)"
      url: "https://arxiv.org/pdf/1612.04561v3"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Write $\mathbf{RngMod}$ for the schematic strict 2-category with object labels the unital rings $A$, interpreted as the module categories $A\text{-Mod}$, whose 1-cells are the additive cocontinuous functors $A\text{-Mod}\to B\text{-Mod}$ ([[def-additive-cocontinuous-module-functor]]), and whose 2-cells are all natural transformations, with vertical and horizontal composition as in [[def-horizontal-composition-and-whiskering-of-natural-transformations]], so that $\mathbf{RngMod}(A\text{-Mod},B\text{-Mod})$ is the functor category $\mathrm{Fun}^{\mathrm{coc}}_{\mathrm{add}}(A\text{-Mod},B\text{-Mod})$ of [[lem-additive-cocontinuous-module-functors-form-a-category]]. Here the category and strict 2-category laws are interpreted componentwise for fixed definable functor schemas, as in [[def-additive-cocontinuous-module-functor]]: no category whose objects are proper-class functors is formed. The pseudofunctor terminology asserts the equations of [[def-bicategory-pseudofunctor-and-biequivalence]] in this schematic sense. Then the assignment
$$\Phi(A)=A\text{-Mod},\qquad \Phi(M)=T_M=M\otimes_A-,\qquad \Phi(f)=f\otimes1,$$
for a unital ring $A$, a $(B,A)$-bimodule $M$, and a bimodule map $f$, is a pseudofunctor $\Phi:\mathbf{Bimod}\to\mathbf{RngMod}$ ([[def-bicategory-pseudofunctor-and-biequivalence]]): its composition comparison is the associativity isomorphism $T_N\circ T_M\cong T_{N\otimes_BM}$ with components $N\otimes_B(M\otimes_AX)\cong(N\otimes_BM)\otimes_AX$, its identity comparison is $X\to A\otimes_AX$, $x\mapsto1_A\otimes x$, and the pseudofunctor coherence equations hold. Moreover horizontal composition of 2-cells corresponds to tensoring bimodule maps, $\phi_{N\prime,M\prime}\,(\Phi(g)*\Phi(f))=\Phi(g\otimes f)\,\phi_{N,M}$, so vertical and horizontal composition satisfy the interchange law ([[thm-interchange-law-for-natural-transformations]]). No commutativity and no choice are used.

## Facts & Assumptions

**Given:** The Morita bicategory $\mathbf{Bimod}$ of [[def-morita-bicategory-of-rings-and-bimodules]], the schematic strict 2-category $\mathbf{RngMod}$ of the Statement, with object labels the rings $A$, interpreted as $A\text{-Mod}$, whose 1-cells $A\text{-Mod}\to B\text{-Mod}$ are the additive cocontinuous functors, and whose 2-cells are all natural transformations, and the assignment $\Phi(A)=A\text{-Mod}$, $\Phi(M)=T_M=M\otimes_A-$, $\Phi(f)=f\otimes1$.

[F1] The hom-category $\mathbf{RngMod}(A\text{-Mod},B\text{-Mod})$ is the schematic category with set-coded fixed Hom-collections $\mathrm{Fun}^{\mathrm{coc}}_{\mathrm{add}}(A\text{-Mod},B\text{-Mod})$ of additive cocontinuous functors and all natural transformations, with componentwise vertical composition and composition of functors, and horizontal composition of 2-cells is whiskering ([[def-additive-cocontinuous-module-functor]], [[lem-additive-cocontinuous-module-functors-form-a-category]], [[def-natural-transformation]], [[def-horizontal-composition-and-whiskering-of-natural-transformations]]).

[F2] For every $(B,A)$-bimodule $M$ the functor $T_M=M\otimes_A-$ is additive, right exact and coproduct-preserving, hence additive cocontinuous; a bimodule map $f:M\to M'$ induces the natural transformation $f\otimes1:T_M\Rightarrow T_{M'}$, and these assignments preserve identities and composition ([[thm-eilenberg-watts-for-arbitrary-unital-rings]], [[prop-functoriality-of-module-tensor-products]]).

[F3] There is a canonical natural isomorphism $\alpha_{N,M,X}:(N\otimes_BM)\otimes_AX\to N\otimes_B(M\otimes_AX)$ with $\alpha((n\otimes m)\otimes x)=n\otimes(m\otimes x)$ for a $(C,B)$-bimodule $N$, a $(B,A)$-bimodule $M$ and a left $A$-module $X$, and it respects the outer actions ([[thm-associativity-of-balanced-tensor-products]]).

[F4] There is a canonical natural isomorphism $\lambda_X:A\otimes_AX\to X$, $a\otimes x\mapsto ax$, respecting the outer actions ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F5] A pseudofunctor carries invertible composition and identity comparisons satisfying the associativity and unit coherence equations of [[def-bicategory-pseudofunctor-and-biequivalence]].

[F6] The associator and unitors of the Morita data satisfy the pentagon and triangle identities, checked on elementary tensors and extended by additivity ([[lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence]], [[def-morita-bicategory-of-rings-and-bimodules]]).

[F7] Horizontal and vertical composition of natural transformations satisfy the interchange law ([[thm-interchange-law-for-natural-transformations]]).

## Proof

**Proof technique:** direct.

1.1 ($\Phi$ is well defined on 1-cells and 2-cells.) The object map sends a unital ring $A$ to the module category $A\text{-Mod}$. A 1-cell $A\to B$, that is, a $(B,A)$-bimodule $M$, is sent to the additive cocontinuous functor $T_M=M\otimes_A-$ by [F2], an object of $\mathbf{RngMod}(A\text{-Mod},B\text{-Mod})$ by [F1]; and a 2-cell $f:M\to M'$ is sent to $f\otimes1$, a natural transformation $T_M\Rightarrow T_{M'}$ by [F2] and hence a morphism of the same hom-category. Identity 2-cells $1_M$ are sent to the identity transformation $1_M\otimes1_X$ by [F2], and composition of bimodule maps is preserved, so $\Phi$ is a well-defined assignment on both sorts of cells. [F1, F2, given]

1.2 (Composition comparison.) For a $(C,B)$-bimodule $N$ and a $(B,A)$-bimodule $M$, the comparison $\phi_{N,M}:T_N\circ T_M\Rightarrow T_{N\otimes_BM}$ has component at a left $A$-module $X$ the inverse of the canonical associativity isomorphism of [F3], $\phi_{N,M,X}:N\otimes_B(M\otimes_AX)\to(N\otimes_BM)\otimes_AX$, natural in $X$ and compatible with the outer actions; it is an isomorphism of functors with inverse given componentwise by $\alpha_{N,M,X}$. [F1, F3, given]

1.3 (Identity comparison.) For a unital ring $A$, the comparison $\phi_A:1_{A\text{-}\mathrm{Mod}}\Rightarrow T_A=A\otimes_A-$ has component at $X$ the inverse of the unitor $\lambda_X$ of [F4], $x\mapsto1_A\otimes x$, a natural isomorphism of functors. [F1, F4, given]

2.1 (Naturality of the composition comparison.) For bimodule maps $f:M\to M\prime$ and $g:N\to N\prime$, the horizontal composite $\Phi(g)*\Phi(f)$ has component $n\otimes(m\otimes x)\mapsto g(n)\otimes(f(m)\otimes x)$. Consequently $\phi_{N\prime,M\prime}\circ(\Phi(g)*\Phi(f))=\Phi(g\otimes f)\circ\phi_{N,M}$: both sides send $n\otimes(m\otimes x)$ to $(g(n)\otimes f(m))\otimes x$, and these tensors generate. This is the required naturality, with domains and codomains related by the comparison rather than literally equal. [F1, F2, F3, step 1.2, given, algebra]

2.2 (Coherence equations.) Evaluate the pseudofunctor associativity equation of [F5] at a variable left $A$-module $X$. The two sides become composites of the comparisons of steps 1.2 and 1.3 with whiskered identities; after rewriting the comparison components as inverses of the associator of [F3] and applying the naturality of the associator, both sides reduce to the two paths of the pentagon of [F6] with the extra variable $X$ appended, which agree on elementary tensors and hence, by additivity of the functors, on all elements. The two unit equations similarly reduce to the triangle of [F6] with $X$ appended: on an elementary tensor involving a unit factor both sides multiply the unit with the neighbouring factor. Hence the coherence equations hold. [F3, F4, F5, F6, step 1.2, step 1.3, given, algebra]

3.1 (Interchange.) For composable bimodule maps the comparison identity of step 2.1 identifies horizontal composition of 2-cells with tensoring maps, while vertical composition is componentwise composition of natural transformations by [F1]; the interchange law for these operations is [F7], and the component computation of step 2.1 shows the two whiskerings of the induced transformations agree on $n\otimes m\otimes x$ and hence, by generation of tensor products by elementary tensors, on all elements. [F7, step 2.1, given, algebra]

4.1 Steps 1.1-1.3 give the object, 1-cell and 2-cell maps together with the invertible composition and identity comparisons, and steps 2.2 and 3.1 verify the pseudofunctor coherence equations and the interchange behaviour; hence $\Phi:\mathbf{Bimod}\to\mathbf{RngMod}$ is a pseudofunctor and horizontal composition of 2-cells corresponds to $g\otimes f$ under the composition comparisons. All comparisons are the canonical ones, no commutativity of rings is assumed, and no choice is used. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1] ∎
