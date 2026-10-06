---
id: cor-finite-eilenberg-watts-is-a-biequivalence
kind: corollary
title: "Finite Eilenberg–Watts is a biequivalence"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
justified_by: []
aliases: []
deps: [def-bicategory-pseudofunctor-and-biequivalence, def-bimodule, def-equivalence-and-adjoint-equivalence-of-categories, def-functor-category, def-left-exact-and-right-exact-functor, def-morita-bicategory-of-rings-and-bimodules, def-natural-isomorphism, def-natural-transformation, def-strict-two-category, lem-tensoring-defines-a-pseudofunctor-with-interchange, prop-finite-dimensional-module-categories-are-intrinsically-finite, thm-finite-eilenberg-watts-for-right-exact-linear-functors]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6, Proposition 1.8.10, Corollary 1.8.11, Remark 1.8.7), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1, Lemma 2.2, Corollary 2.3)"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Throughout, a bimodule over $k$-algebras means a $k$-vector space with $k$-bilinear commuting actions and agreeing scalar actions: $(c1_B)m=m(c1_A)=cm$ for $c\in k$ in a $(B,A)$-bimodule. This compatibility is an additional requirement beyond the ring-bimodule definition [[def-bimodule]].

For assertions forming categories of functors, fix a set of allowed finite-dimensional $k$-vector space structures containing $k$ and the underlying spaces of the algebras considered, and closed under finite biproducts, subspaces, quotients, $k$-tensor products, $k$-duals and spaces of linear maps. Allow every compatible algebra, module and bimodule structure on these spaces. The resulting module categories are small, so their functors and natural transformations are set-coded as required by [[def-functor-category]]. The objectwise formulas apply without this size restriction; no category of proper-class functors is asserted.

Let $A,B$ range over finite-dimensional unital algebras over a field $k$, and
consider the assignment $\Phi(A)=A\text{-}\mathrm{mod}$,
$\Phi(M)=T_M=M\otimes_A-$, $\Phi(f)=f\otimes1$ on finite-dimensional bimodules
and bimodule maps. (i) For all $A,B$ the assignment $M\mapsto T_M$ is an
equivalence of categories between finite-dimensional $(B,A)$-bimodules with
bimodule maps and $k$-linear right exact functors
$A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$ with all natural
transformations, so it is full, faithful and essentially surjective. (ii) The
composition and unit comparisons of the pseudofunctor
[[lem-tensoring-defines-a-pseudofunctor-with-interchange]] restrict to
finite-dimensional algebras and finite-dimensional modules: the associativity
isomorphism $N\otimes_B(M\otimes_A-)\cong(N\otimes_BM)\otimes_A-$ with
components $N\otimes_B(M\otimes_AX)\cong(N\otimes_BM)\otimes_AX$ and the inverse unit
isomorphism $X\cong A\otimes_AX$ are natural isomorphisms of
finite-dimensional modules, and the pseudofunctor coherence equations remain
satisfied. Consequently these data define a biequivalence from the bicategory
of finite-dimensional algebras, finite-dimensional bimodules and bimodule maps
to the 2-category of finite-dimensional module categories, $k$-linear right
exact functors and natural transformations. No commutativity and no choice are
used.

## Facts & Assumptions

**Given:** A field $k$ and the assignment $\Phi$ on finite-dimensional unital $k$-algebras, finite-dimensional bimodules and bimodule maps described in the statement.

[F1] For finite-dimensional unital $k$-algebras $A,B$, the assignment $M\mapsto T_M$ is an equivalence of categories between finite-dimensional $(B,A)$-bimodules with bimodule maps and $k$-linear right exact functors $A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$ with all natural transformations; in particular it is full and faithful with $\operatorname{Nat}(T_M,T_{M'})\cong\operatorname{Hom}_{B\text{-}A}(M,M')$ and essentially surjective ([[thm-finite-eilenberg-watts-for-right-exact-linear-functors]], [[def-equivalence-and-adjoint-equivalence-of-categories]], [[def-natural-transformation]]).

[F2] The explicit tensor comparison maps in [[lem-tensoring-defines-a-pseudofunctor-with-interchange]] have composition comparison $T_N\circ T_M\cong T_{N\otimes_BM}$ built from the associativity isomorphism $N\otimes_B(M\otimes_AX)\cong(N\otimes_BM)\otimes_AX$, identity comparison the inverse unit isomorphism $X\cong A\otimes_AX$, and coherence given by the pentagon and triangle diagrams; horizontal composition corresponds to tensoring bimodule maps ([[lem-tensoring-defines-a-pseudofunctor-with-interchange]], [[def-morita-bicategory-of-rings-and-bimodules]], [[def-bicategory-pseudofunctor-and-biequivalence]]).

[F3] The finite-dimensional module categories $A\text{-}\mathrm{mod}$ are well formed and the right exact $k$-linear functors between them with all natural transformations form a strict 2-category, with composition of functors and identity transformations as structure ([[prop-finite-dimensional-module-categories-are-intrinsically-finite]], [[def-strict-two-category]], [[def-functor-category]], [[def-natural-transformation]], [[def-left-exact-and-right-exact-functor]]); the restriction of the Morita bicategory to finite-dimensional algebras and finite-dimensional bimodules is a bicategory, since tensor products of finite-dimensional bimodules over finite-dimensional algebras are again finite-dimensional and the associators and unitors are the same isomorphisms ([[def-morita-bicategory-of-rings-and-bimodules]], [[def-bimodule]]).

[F4] A pseudofunctor is a biequivalence when each local functor on hom-categories is an equivalence of categories and every object of the target is equivalent to $FY$ for some object $Y$ of the source ([[def-bicategory-pseudofunctor-and-biequivalence]]).

## Proof

**Proof technique:** direct.

1.1 (i) By [F1] the assignment $M\mapsto T_M$ on finite-dimensional $(B,A)$-bimodules is full and faithful and essentially surjective onto the $k$-linear right exact functors $A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$, so it is an equivalence of categories for the given $A,B$. [F1]

1.2 (ii, restriction of the pseudofunctor.) Let $A,B,C$ be finite-dimensional unital $k$-algebras and let $M$ be a finite-dimensional $(B,A)$-bimodule, $N$ a finite-dimensional $(C,B)$-bimodule. Use the explicit maps of [F2]: the comparison 2-cells of $\Phi$ are the associativity isomorphism $N\otimes_B(M\otimes_AX)\cong(N\otimes_BM)\otimes_AX$ and the inverse unit isomorphism $X\cong A\otimes_AX$; for finite-dimensional $X$ all objects occurring are quotients of finite tensor products of finite-dimensional spaces, hence finite-dimensional, and tensoring finite-dimensional bimodules over finite-dimensional algebras gives a finite-dimensional bimodule, so the source and target data together with these comparisons lie in the smaller bicategory and 2-category of [F3]. The coherence equations hold directly: on an elementary tensor every associativity path sends each nested tensor to the same reassociation of its factors, and every unit path multiplies the same adjacent unit factor. Elementary tensors generate the iterated tensor products, so equality there proves the required equations. Horizontal composition corresponds to tensoring bimodule maps under these comparisons, since both send $n\otimes m\otimes x$ to $g(n)\otimes f(m)\otimes x$. The set-sized construction here uses the supplier's explicit maps and componentwise equations. [F2, F3]

2.1 (ii, biequivalence.) The restricted assignment is a pseudofunctor by step 1.2. Its local functor at $(A,B)$ is the equivalence of step 1.1, so every local functor is an equivalence of categories; and every object $A\text{-}\mathrm{mod}$ of the target is $\Phi(A)$ for the finite-dimensional algebra $A$ itself, so essential surjectivity holds trivially. Hence by [F4] the restriction is a biequivalence between the bicategory of finite-dimensional algebras, finite-dimensional bimodules and bimodule maps and the 2-category of finite-dimensional module categories, $k$-linear right exact functors and natural transformations. [F3, F4, step 1.1, step 1.2]

3.1 Steps 1.1 and 2.1 prove (i) and (ii). All algebras, bimodules, modules and comparison isomorphisms occurring above are finite-dimensional, no commutativity of any ring was used, and no choice is used. [step 1.1, step 1.2, step 2.1, given] ∎
