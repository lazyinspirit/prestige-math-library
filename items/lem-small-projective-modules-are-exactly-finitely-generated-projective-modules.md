---
id: lem-small-projective-modules-are-exactly-finitely-generated-projective-modules
kind: lemma
title: "Small projective modules are exactly finitely generated projective modules; the progenerator identification"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
justified_by: []
aliases: []
deps: [def-small-projective-generator-and-progenerator, def-projective-module, def-generated-cyclic-finitely-generated-and-free-modules, lem-generated-submodule-as-finite-linear-combinations, thm-projective-object-characterisations, cor-every-module-is-a-quotient-of-a-free-module, def-free-module-on-a-set-and-standard-basis, thm-universal-property-of-free-modules, thm-universal-property-of-module-direct-sums, def-direct-sum-of-a-family-of-modules, def-hom-groups-and-induced-hom-maps, thm-free-modules-are-projective-with-choice-boundary, thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree, thm-modules-over-a-ring-form-an-abelian-category, prop-modules-and-homomorphisms-form-category-rmod, thm-rmod-is-complete-and-cocomplete]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §3.12 ('P is finitely generated if Hom(P,-) preserves coproducts'), printed p.68"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
    - title: "P. Etingen, S. Gelaki, D. Nikshych, V. Ostrik, Tensor Categories, printed p.10 (projective generator and End(P)^op)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $B$ be a unital ring and $P$ a left $B$-module. Then:
1. $P$ is projective and $\operatorname{Hom}_B(P,-)$ preserves every set-indexed coproduct if and only if $P$ is finitely generated and projective.
2. Consequently $P$ is a small projective generator of $B\text{-Mod}$ if and only if $P$ is a progenerator (finitely generated, projective, and a generator).
3. In particular the regular module ${}_BB$ is a small projective generator of $B\text{-Mod}$.
The equivalence in (1) is choice-free; projectivity of the infinite free modules is not used anywhere, and only the finite free module $B$ is used in (3). No commutativity of $B$ is assumed.

## Facts & Assumptions

**Given:** A unital ring $B$ and a left $B$-module $P$.

[F1] A left $B$-module is a small projective generator of $B$-Mod when it is projective, is a generator, and $\operatorname{Hom}_B(P,-)$ preserves every set-indexed coproduct; a progenerator is a finitely generated projective generator ([[def-small-projective-generator-and-progenerator]]).

[F2] $P$ is projective exactly when every epimorphism onto $P$ splits ([[def-projective-module]], [[thm-projective-object-characterisations]]).

[F3] $P$ is finitely generated when $P=\langle S\rangle_B$ for a finite $S$, and the generated submodule is the set of finite $B$-linear combinations of $S$ ([[def-generated-cyclic-finitely-generated-and-free-modules]], [[lem-generated-submodule-as-finite-linear-combinations]]).

[F4] In a direct sum of modules an element has finite support, the coordinate inclusions and projections satisfy $\pi_i\jmath_i=1$ and $\pi_i\jmath_j=0$ for $i\neq j$, and a family of maps out of the summands extends uniquely to a map out of the direct sum ([[def-direct-sum-of-a-family-of-modules]], [[thm-universal-property-of-module-direct-sums]]).

[F5] $B$-Mod is a locally small complete and cocomplete abelian category in which the coproducts are the direct sums of [F4] ([[prop-modules-and-homomorphisms-form-category-rmod]], [[thm-modules-over-a-ring-form-an-abelian-category]], [[thm-rmod-is-complete-and-cocomplete]]).

[F6] For every left $B$-module $M$ there is a canonical surjection $\varepsilon_M:B^{(M)}\to M$ from the free module on the underlying set of $M$, determined by $\varepsilon_M(e_m)=m$ ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[F7] A set map from the basis set of $R^{(X)}$ into a module extends uniquely to a module homomorphism, and evaluation at $1_B$ identifies $\operatorname{Hom}_B(B,Y)\cong Y$ ([[def-free-module-on-a-set-and-standard-basis]], [[thm-universal-property-of-free-modules]]).

[F8] Free modules are projective, with AC required only for infinite basis sets and finite choice sufficient for finite ones ([[thm-free-modules-are-projective-with-choice-boundary]]).

[F9] In a locally small abelian category with AB3, an object $G$ is a generator exactly when $\operatorname{Hom}(G,-)$ is faithful ([[thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree]]).

[F10] For left $B$-modules $M,N$ the set $\operatorname{Hom}_B(M,N)$ is an abelian group under pointwise addition and postcomposition is additive ([[def-hom-groups-and-induced-hom-maps]]).

## Proof

**Proof technique:** direct.

1.1 (Finitely generated implies coproduct preservation.) Assume $P$ is finitely generated, with finite generating set $S=\{x_1,\dots,x_n\}$, so every element of $P$ is a finite $B$-linear combination of the $x_j$ by [F3]. Let $Y=\bigoplus_iY_i$ be a set-indexed direct sum in $B$-Mod and let $f:P\to Y$. Each $f(x_j)$ has finite support by [F4], so the union $F$ of the finitely many supports is finite and $f(x_j)\in\bigoplus_{i\in F}Y_i$ for every $j$; since the $x_j$ generate $P$ and the submodule $\bigoplus_{i\in F}Y_i$ contains all their images, $f$ factors through the inclusion $\jmath_F:\bigoplus_{i\in F}Y_i\to Y$. The canonical comparison $c:\bigoplus_i\operatorname{Hom}_B(P,Y_i)\to\operatorname{Hom}_B(P,Y)$, $(u_i)\mapsto\sum_i\jmath_i\circ u_i$, has components $\pi_i\circ c(u)=u_i$ by [F4] and [F10], so $c$ is injective; and for arbitrary $f$ the finite-support family $(\pi_i\circ f)_i$ satisfies $c((\pi_i\circ f)_i)=\sum_i\jmath_i\circ\pi_i\circ f=f$ by [F4], so $c$ is surjective. Hence $\operatorname{Hom}_B(P,-)$ preserves this coproduct, and projectivity of $P$ was not used. [F3, F4, F10, given, algebra]

1.2 (Coproduct preservation and projectivity imply finite generation.) Assume $P$ is projective and $\operatorname{Hom}_B(P,-)$ preserves every set-indexed coproduct. Let $\varepsilon:B^{(P)}\to P$ be the canonical surjection of [F6] from the free module on the underlying set of $P$, and let $s:P\to B^{(P)}$ be a section of $\varepsilon$, which exists because $P$ is projective: lift the identity of $P$ through the epimorphism by [F2]. Smallness identifies $\operatorname{Hom}_B(P,B^{(P)})$ with $\bigoplus_{p\in P}\operatorname{Hom}_B(P,B)$ under the comparison, so the family $\varphi_p:=\pi_p\circ s$ has finite support: there is a finite subset $F\subseteq P$ with $\varphi_p=0$ for $p\notin F$. For every $x\in P$ the element $s(x)$ has support contained in $F$ by [F4], so $x=\varepsilon(s(x))=\sum_{p\in F}\varphi_p(x)\,p$ is a finite $B$-linear combination of the finitely many elements $p\in F$; by [F3] the module $P$ is generated by $F$, hence finitely generated. No infinite choice is used: the section $s$ is a single existential instance and the set $F$ is computed from it. [F2, F3, F4, F6, given, construct]

2.1 (Proof of (1).) Step 1.1 gives "finitely generated $\Rightarrow$ coproduct-preserving" and step 1.2 gives "projective and coproduct-preserving $\Rightarrow$ finitely generated"; combining them, a left $B$-module $P$ is projective with $\operatorname{Hom}_B(P,-)$ preserving every set-indexed coproduct if and only if $P$ is finitely generated and projective. Neither direction uses projectivity of an infinite free module or any choice principle. [step 1.1, step 1.2, given]

2.2 (Proof of (3).) The regular module ${}_BB$ is the free module on the one-element set $\{1_B\}$ by [F7], so it is finitely generated, and it is projective by [F8] with a one-element basis, where finite choice suffices and no AC is needed. By step 1.1 the functor $\operatorname{Hom}_B(B,-)$ preserves every set-indexed coproduct. Evaluation at $1_B$ identifies $\operatorname{Hom}_B(B,Y)\cong Y$ naturally by [F7], so $\operatorname{Hom}_B(B,-):B\text{-Mod}\to\mathbf{Ab}$ is naturally isomorphic to the faithful underlying-additive-group functor: if $u\neq v:X\to Y$, choose $x$ with $u(x)\neq v(x)$ and the map $B\to X$, $b\mapsto bx$, distinguishes their postcompositions; hence ${}_BB$ is a generator by [F9] applied in the locally small abelian category $B$-Mod with AB3, which is cocomplete by [F5]. Therefore ${}_BB$ is a small projective generator. [F5, F7, F8, F9, step 1.1, given]

3.1 (Proof of (2).) By [F1] both a small projective generator and a progenerator include the condition of being a generator, and $B$-Mod is a locally small cocomplete abelian category by [F5] whose coproducts are the direct sums of [F4]; the remaining conditions are "projective and coproduct-preserving" on the one side and "finitely generated and projective" on the other, which step 2.1 shows to be equivalent. Hence a left $B$-module $P$ is a small projective generator of $B$-Mod if and only if it is a progenerator. [F1, F4, F5, step 2.1, given]

4.1 Steps 2.1, 2.2 and 3.1 prove the three assertions: the smallness criterion for projective modules, the progenerator identification, and the regular module example. The only module projectivities used are those of $P$ itself, given in the hypothesis, and of the free module on one generator; no commutativity of $B$ is assumed and no choice principle is used. [step 2.1, step 2.2, step 3.1] ∎
