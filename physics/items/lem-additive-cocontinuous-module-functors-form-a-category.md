---
id: lem-additive-cocontinuous-module-functors-form-a-category
kind: lemma
title: "Natural transformations of additive cocontinuous module functors are determined at the regular module"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-additive-cocontinuous-module-functor
  - def-additive-functor
  - def-natural-transformation
  - def-vertical-composition-of-natural-transformations
  - lem-vertical-composition-of-natural-transformations-is-natural
  - cor-every-module-is-a-quotient-of-a-free-module
  - thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms
  - def-left-exact-and-right-exact-functor
  - thm-modules-over-a-ring-form-an-abelian-category
  - def-direct-sum-of-a-family-of-modules
  - thm-universal-property-of-module-direct-sums
justified_by: []
aliases: []
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, Theorem 5.1.43, Proposition 5.1.40, Lemma 5.1.46, Corollaries 5.1.48-5.1.49"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "A. Nyman and S. P. Smith, A Generalization of Watts's Theorem: Right Exact Functors on Module Categories, arXiv:0806.0832, Theorem 1.1-1.2, Propositions 3.2-3.3, Lemma 3.4"
      url: "https://arxiv.org/pdf/0806.0832"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A,B$ be unital rings. The additive cocontinuous functors
$A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ ([[def-additive-cocontinuous-module-functor]]),
satisfy the category laws schematically, with componentwise identities and
vertical composition. For each fixed pair $F,G$, every natural transformation
$F\Rightarrow G$ is determined by its component at $A$. The admissible
components constitute a subset of $\operatorname{Hom}_B(F(A),G(A))$, giving a
set of codes $\operatorname{Nat}(F,G)$. This is local smallness in the
schematic sense of [[def-additive-cocontinuous-module-functor]]; it does not
make proper-class functors or component families into sets. No choice is used.

## Facts & Assumptions

**Given:** Unital rings $A$ and $B$, additive cocontinuous functors $F,G:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$, and a natural transformation $\eta:F\Rightarrow G$.

[F1] A functor is additive cocontinuous when it is additive and preserves every small colimit; the categorical notation is schematic under the definable-class convention ([[def-additive-cocontinuous-module-functor]]).

[F2] Additivity means that the induced maps on hom-groups are group homomorphisms; in particular the identity functor and composites of additive functors are additive ([[def-additive-functor]]).

[F3] A natural transformation $\eta:F\Rightarrow G$ satisfies the naturality equation $G(u)\circ\eta_X=\eta_Y\circ F(u)$ for every $u:X\to Y$ ([[def-natural-transformation]]).

[F4] Identity transformations are natural, and the vertical composite $\beta\circ\alpha$ of natural transformations is natural (componentwise) and is associative and unital componentwise ([[def-vertical-composition-of-natural-transformations]], [[lem-vertical-composition-of-natural-transformations-is-natural]]).

[F5] The free module $A^{(X)}$ on the underlying set of a left $A$-module $X$ carries the canonical surjection $q_X:A^{(X)}\to X$ with $q_X(e_x)=x$ ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[F6] A right exact functor between abelian categories preserves epimorphisms ([[thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms]]).

[F7] $A\text{-}\mathbf{Mod}$ and $B\text{-}\mathbf{Mod}$ are abelian categories ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F8] A functor is right exact when it preserves every finite colimit; a cocontinuous functor preserves all small colimits and therefore every finite colimit ([[def-left-exact-and-right-exact-functor]]).

[F9] The direct sum $\bigoplus_{i\in I}X_i$ is the coproduct of the family with its coordinate inclusions $\jmath_i$, and a homomorphism out of it is uniquely determined by its composites with the $\jmath_i$ ([[def-direct-sum-of-a-family-of-modules]], [[thm-universal-property-of-module-direct-sums]]).

## Proof

**Proof technique:** direct.

1.1 The identity functor $1_{A\text{-}\mathbf{Mod}}$ is additive, its induced maps on hom-groups being identity homomorphisms, and it preserves every colimit; hence it is additive cocontinuous. [F1, F2]

1.2 If $F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ and $G:B\text{-}\mathbf{Mod}\to C\text{-}\mathbf{Mod}$ are additive cocontinuous, then $GF$ is additive, a composite of hom-group homomorphisms being one, and cocontinuous, since for a small diagram $D$ with colimit $L$ the object $F(L)$ is a colimit of $F\circ D$ and $G(F(L))$ is a colimit of $G\circ F\circ D$. [F1, F2]

1.3 Identity transformations and vertical composites are natural by [F4]. Associativity and the identity laws hold at each component. Thus the categorical operations satisfy their laws for fixed functor and transformation schemas; this does not form a category whose objects are proper classes. [F1, F3, F4]

1.4 Free modules: let $I$ be a set and let $\iota_i:A\to A^{(I)}$ be the coordinate inclusions of the free module $A^{(I)}=\bigoplus_{i\in I}A$, a coproduct of copies of $A$. Since $F$ and $G$ preserve this coproduct, $F(A^{(I)})$ with the maps $F(\iota_i):M\to F(A^{(I)})$, where $M=F(A)$, is a coproduct of copies of $M$, and by [F9] a map out of $F(A^{(I)})$ is determined by its composites with the maps $F(\iota_i)$; the same holds for $G(A^{(I)})$ with $N=G(A)$. Naturality [F3] gives $\eta_{A^{(I)}}\circ F(\iota_i)=G(\iota_i)\circ\eta_A$ for every $i$, so $\eta_{A^{(I)}}$ is determined by $\eta_A$: if $\eta_A=0$ then $\eta_{A^{(I)}}=0$. [F1, F3, F9]

1.5 Epic free covers: the canonical surjection $q_X:A^{(X)}\to X$ is an epimorphism, since two maps out of $X$ agreeing after composition with $q_X$ agree everywhere by surjectivity of $q_X$. Each of $F,G$ is right exact by [F8], and $A\text{-}\mathbf{Mod}$, $B\text{-}\mathbf{Mod}$ are abelian by [F7], so $F(q_X)$ and $G(q_X)$ are epimorphisms by [F6]. [F5, F6, F7, F8]

2.1 Suppose $\eta_A=\theta_A$ for two natural transformations $F\Rightarrow G$. Step 1.4 and naturality at every coordinate inclusion give $\eta_{A^{(X)}}=\theta_{A^{(X)}}$. Naturality at $q_X$ then gives $\eta_X\circ F(q_X)=G(q_X)\circ\eta_{A^{(X)}}=G(q_X)\circ\theta_{A^{(X)}}=\theta_X\circ F(q_X)$; epicness of $F(q_X)$ from step 1.5 yields $\eta_X=\theta_X$. Hence the transformations agree at every module. [F3, step 1.4, step 1.5]

3.1 To obtain set codes, fix the defining formulas and parameters for $F,G$. For $h\in\operatorname{Hom}_B(F(A),G(A))$ and a module $X$, let $p_{h,X}:F(A^{(X)})\to G(X)$ be the unique map whose composite with $F(\iota_x)$ is $G(q_X\iota_x)h$ for every $x\in X$; it exists by coproduct preservation and [F9]. Call $h$ admissible when, for every $X$, there is a map $a_X:F(X)\to G(X)$ with $a_XF(q_X)=p_{h,X}$, these maps satisfy $G(u)a_X=a_YF(u)$ for every $u:X\to Y$, and $a_A=h$. The descents are unique by step 1.5, so this is a predicate quantifying only over sets and set-coded module maps, not over class families. Separation gives the set of admissible $h$. Every natural transformation gives such a code by naturality at $q_X\iota_x$, and each admissible code defines its component family uniquely. Together with steps 1.3 and 2.1 this proves the claimed schematic category laws and local smallness, without applying replacement to proper-class-valued outputs. No choice is used. [F1, F3, F5, F9, step 1.3, step 1.5, step 2.1] ∎