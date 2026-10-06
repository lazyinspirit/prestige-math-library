---
id: cex-a-projective-generator-need-not-be-small
kind: counterexample
title: "A projective generator need not be small"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
justified_by: []
aliases: []
deps: [def-small-projective-generator-and-progenerator, lem-small-projective-modules-are-exactly-finitely-generated-projective-modules, thm-free-modules-are-projective-with-choice-boundary, def-axiom-of-choice, def-direct-sum-of-a-family-of-modules, thm-universal-property-of-module-direct-sums, def-hom-groups-and-induced-hom-maps, def-field, def-generated-cyclic-finitely-generated-and-free-modules, def-projective-module, def-generator-and-cogenerator-of-a-category, def-separating-set-and-coseparating-set, def-preservation-reflection-creation-continuity-and-cocontinuity]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references: []
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

False claim: every projective generator of a module category is small, in the sense that its representable functor preserves every set-indexed coproduct.

Assume the Axiom of Choice. Let $k$ be a field and let $P=k^{(\mathbb N)}=\bigoplus_{n\in\mathbb N}k$ be the free $k$-module on a countably infinite set, identified with the direct sum of countably many copies of $k$. Then $P$ is projective and a generator of $k\text{-Mod}$, but it is not small: the identity $\operatorname{id}_P$ is not in the image of the canonical comparison
$$\bigoplus_{n\in\mathbb N}\operatorname{Hom}_k(P,k)\longrightarrow\operatorname{Hom}_k(P,P),$$
because every element of the source is a finite-support family of linear functionals and hence has image contained in a finite-dimensional subspace, whereas $\operatorname{id}_P$ does not. Consequently $P$ is a projective generator for which $\operatorname{Hom}_k(P,-)$ fails to preserve a set-indexed coproduct, so the smallness hypothesis in [[def-small-projective-generator-and-progenerator]] cannot be weakened to "projective generator". The Axiom of Choice is used exactly to make the infinite free module $P$ projective; the example is not choice-free.

## Facts & Assumptions

Assume the Axiom of Choice.

**Given:** A field $k$ and the direct sum $P=k^{(\mathbb N)}=\bigoplus_{n\in\mathbb N}k$ over the index set $\mathbb N$, with standard basis vectors $e_n=\jmath_n(1_k)$ and coordinate maps $\pi_n:P\to k$, $x\mapsto x_n$.

[F1] Under AC every free module is projective, and a lift of a map out of a free module through a surjection is obtained by choosing one preimage of each basis value, so an infinite basis set is where AC is used ([[thm-free-modules-are-projective-with-choice-boundary]], [[def-axiom-of-choice]], [[def-projective-module]]).

[F2] Every element of the direct sum $\bigoplus_n k$ has finite support, the coordinate maps satisfy $\pi_n\jmath_m=\delta_{mn}$ and $x=\sum_n\jmath_n(\pi_n(x))$ for every $x$, and a family of $k$-linear maps $f_n:k\to Y$ extends uniquely to a $k$-linear map $\bigoplus_n k\to Y$ with components $f_n$ ([[def-direct-sum-of-a-family-of-modules]], [[thm-universal-property-of-module-direct-sums]]).

[F3] $\operatorname{Hom}_k(P,k)$ and $\operatorname{Hom}_k(P,P)$ are abelian groups under pointwise addition ([[def-hom-groups-and-induced-hom-maps]]).

[F4] A $k$-module is a vector space over the field $k$, and the elements $e_n$ form a basis: distinct basis vectors are $k$-linearly independent because a finite linear combination $\sum a_ne_n$ has $n$-th coordinate $a_n$ ([[def-field]], [[def-generated-cyclic-finitely-generated-and-free-modules]]).

[F5] The singleton $\{G\}$ is a separating set, that is, $G$ is a generator, exactly when for all $u\neq v:X\to Y$ there is $h:G\to X$ with $u\circ h\neq v\circ h$ ([[def-generator-and-cogenerator-of-a-category]], [[def-separating-set-and-coseparating-set]]).

[F6] The abelian-group-valued functor $\operatorname{Hom}_k(P,-)$ preserves a coproduct $\bigoplus_iY_i$ precisely when its comparison $\bigoplus_i\operatorname{Hom}_k(P,Y_i)\to\operatorname{Hom}_k(P,\bigoplus_iY_i)$, $(h_i)\mapsto\sum_i\jmath_i h_i$, is an isomorphism ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

## Counterexample

1.1 ($P$ is projective and a generator.) As the free $k$-module on $\mathbb N$, $P$ is projective by [F1] under the declared Axiom of Choice. For generation, let $u\neq v:X\to Y$ be distinct $k$-linear maps and pick $x\in X$ with $(u-v)(x)\neq0$; the family with $f_0:k\to X$, $1\mapsto x$, and $f_n=0$ for $n\geq1$ extends by [F2] to a $k$-linear $h:P\to X$ with $h(e_0)=x$ and $h(e_n)=0$ for $n\geq1$. Then $(u-v)h\neq0$, so $uh\neq vh$, and by [F5] the object $P$ is a generator. [F1, F2, F5, given, construct]

1.2 (Every map in the comparison image has finite-dimensional range.) An element of the source $\bigoplus_n\operatorname{Hom}_k(P,k)$ is a family $(\varphi_n)$ with finite support by [F2], and by the universal property of the direct sum its image under the canonical comparison is the map $c(\varphi):x\mapsto\sum_n\varphi_n(x)e_n$ with $\varphi_n=0$ off a finite set $F$. For $x\in P$ one has $c(\varphi)(x)\in\bigoplus_{n\in F}ke_n$, a finite-dimensional subspace of $P$; hence $\operatorname{im}c(\varphi)\subseteq\bigoplus_{n\in F}ke_n$. [F2, F3, given, algebra]

2.1 ($\operatorname{id}_P$ is not in that image.) Suppose $\operatorname{id}_P=c(\varphi)$ for some finite-support family $(\varphi_n)$ with support $F$. Then every basis vector $e_m$ with $m\notin F$ would lie in $\operatorname{im}c(\varphi)\subseteq\bigoplus_{n\in F}ke_n$, so $e_m$ would be a finite $k$-linear combination of the finitely many vectors $e_n$, $n\in F$, contradicting the linear independence of the basis recorded in [F4]. Hence $\operatorname{id}_P$ is not in the image of the canonical comparison, and that comparison is not surjective. [F4, step 1.2, given, algebra]

3.1 (Conclusion.) By steps 1.1-2.1 the module $P$ is projective and a generator, but the canonical comparison $\bigoplus_n\operatorname{Hom}_k(P,k)\to\operatorname{Hom}_k(P,P)$ fails to be surjective, so $\operatorname{Hom}_k(P,-)$ does not preserve the coproduct $\bigoplus_nk$ and $P$ is not a small projective generator by [F6] and [[def-small-projective-generator-and-progenerator]]. Equivalently $P$ is not finitely generated, in agreement with [[lem-small-projective-modules-are-exactly-finitely-generated-projective-modules]]. Thus "projective generator" cannot replace "small projective generator", and the only use of choice is the projectivity from [F1], so the failure is not choice-free. [F1, F6, step 1.1, step 2.1] ∎
