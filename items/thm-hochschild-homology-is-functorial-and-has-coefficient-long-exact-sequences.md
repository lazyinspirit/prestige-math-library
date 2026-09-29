---
id: thm-hochschild-homology-is-functorial-and-has-coefficient-long-exact-sequences
title: Functoriality and coefficient long exact sequences for Hochschild homology
kind: theorem
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-hochschild-chain-complex-of-a-bimodule, thm-hochschild-homology-is-tor-over-the-enveloping-algebra, thm-long-exact-sequence-in-homology, cor-every-vector-space-has-a-basis, cor-free-modules-are-projective-and-flat, def-axiom-of-choice, thm-a-chain-map-induces-a-well-defined-map-on-homology, thm-naturality-of-the-homology-connecting-morphism, thm-modules-over-a-ring-form-an-abelian-category, def-short-exact-sequence-of-complexes, def-morphism-of-short-exact-sequences-of-complexes, thm-unit-isomorphisms-for-module-tensor-products]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1.2, Exercise 9.1.2"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Assume the Axiom of Choice (AC). Let $k$ be a field and $A$ a unital
associative $k$-algebra. Bimodule maps induce natural maps on
$HH_n(A,-)$. Each short exact sequence

$$0\longrightarrow M'\longrightarrow M\longrightarrow M''\longrightarrow0$$

of $k$-central $A$-bimodules yields the natural long exact sequence in
Hochschild homology, with connecting maps
$HH_n(A,M'')\longrightarrow HH_{n-1}(A,M')$ for $n\geq1$. In particular, its
bottom endpoint is

$$HH_0(A,M')\longrightarrow HH_0(A,M)\longrightarrow HH_0(A,M'')\longrightarrow0.$$

## Facts & Assumptions

**Given:** AC, a field $k$, a unital associative $k$-algebra $A$, and $k$-central $A$-bimodules.

[F1] The Hochschild chain terms are $C_0(A,M)=M$ and $C_n(A,M)=M\otimes_k A^{\otimes_k n}$ for $n\geq1$ ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F2] The first and last Hochschild faces use the right and left bimodule actions, and the internal faces multiply adjacent algebra factors ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F3] AC says that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F4] Assuming AC, every vector space over a field has a basis, including the zero space with empty basis ([[cor-every-vector-space-has-a-basis]]).

[F5] Every free module over a commutative ring is flat, without an additional choice assumption ([[cor-free-modules-are-projective-and-flat]]).

[F6] A chain map induces a unique map on homology compatible with the quotient from cycles ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[F7] The category of modules over a ring is abelian, hence so is the category of $k$-modules ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F8] A short exact sequence of complexes is a sequence of chain maps that is exact in each degree in the ambient abelian category ([[def-short-exact-sequence-of-complexes]]).

[F9] A morphism of short exact sequences of complexes is a commutative ladder whose rows are short exact sequences of complexes and whose vertical maps are chain maps ([[def-morphism-of-short-exact-sequences-of-complexes]]).

[F10] A short exact sequence of chain complexes in an abelian category gives the long exact sequence in homology ([[thm-long-exact-sequence-in-homology]]).

[F11] A morphism of short exact sequences of complexes induces a commutative square between their homology connecting morphisms ([[thm-naturality-of-the-homology-connecting-morphism]]).

[F12] Under AC, the canonical isomorphism $HH_n(A,M)\cong\operatorname{Tor}^{A^e}_n(A,M)$ is natural in the coefficient bimodule ([[thm-hochschild-homology-is-tor-over-the-enveloping-algebra]]).

[F13] For every $k$-module $M$, the tensor-unit maps $k\otimes_k M\to M$ and $M\otimes_k k\to M$ are isomorphisms ([[thm-unit-isomorphisms-for-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Let $f:M\to N$ be a $k$-central $A$-bimodule map. In degree $n\geq1$ set $C_n(f)=f\otimes 1_{A^{\otimes_k n}}$, and set $C_0(f)=f$. For the first face, $f(ma_1)=f(m)a_1$; for each internal face the map on the coefficient factor does not alter the multiplied algebra entries; for the last face, $f(a_nm)=a_nf(m)$. Thus $C(f)$ commutes with every face and with every boundary, including $b_0=0$, so it is a chain map. The identity bimodule map gives the identity chain map, and $C(g\circ f)=C(g)\circ C(f)$. By [F6] the induced homology maps obey the same identities. Hence $M\mapsto HH_n(A,M)$ is a covariant functor. [F1, F2, F6, given, algebra]

1.2 The maps just defined agree with the coefficient maps under the preceding Tor comparison. On an elementary bar tensor, $$ C_n(f)\big((a_{n+1}ma_0)\otimes a_1\otimes\cdots\otimes a_n\big) =(a_{n+1}f(m)a_0)\otimes a_1\otimes\cdots\otimes a_n, $$ which is the image of $(a_0\otimes\cdots\otimes a_{n+1})\otimes f(m)$ under the comparison for $N$. The equality uses that $f$ is a bimodule map. Since elementary tensors span, the comparison square commutes; [F12] therefore identifies the induced Hochschild map with the natural map on Tor. This compatibility uses the completed preceding theorem and adds no projectivity hypothesis on $M$. [F1, F2, F12, given, algebra]

1.3 For $n\geq0$ put $V_n=A^{\otimes_k n}$, with $V_0=k$. By [F3] and [F4], choose bases $B_n$ for this set-indexed family of vector spaces; take $B_0=\{1\}$. Each $V_n$ is then a free, hence flat, $k$-module by [F5]. For any exact sequence of $k$-modules $0\to X'\to X\to X''\to0$, tensoring with $V_n$ is exact: using the chosen basis, the tensor sequence identifies with the direct sum over $B_n$ of copies of the original sequence. In particular, for each $n\geq0$, $$ 0\longrightarrow C_n(A,M')\longrightarrow C_n(A,M) \longrightarrow C_n(A,M'')\longrightarrow0 $$ is exact. At $n=0$, this is the original coefficient sequence under $C_0(A,M)=M$. For $n<0$ all three chain groups are zero. [F1, F3, F4, F5, given, algebra]

2.1 The inclusions and quotient map in the coefficient sequence are $A$-bimodule maps. By step 1.1, their maps on every chain degree commute with the Hochschild boundaries. By [F8], the degreewise exact sequences in step 1.3, with the chain maps checked in step 1.1, form a short exact sequence of chain complexes. [F1, F8, step 1.1, step 1.3, given, construct]

3.1 By [F7] the category of $k$-modules is abelian; apply [F10] to the short exact sequence of complexes from step 2.1, which qualifies by [F8]. This gives, in each degree $n\geq1$, $$ \cdots\to HH_n(A,M')\to HH_n(A,M)\to HH_n(A,M'') \xrightarrow{\partial_n}HH_{n-1}(A,M')\to HH_{n-1}(A,M)\to\cdots. $$ At the lower endpoint $C_{-1}=0$, so the sequence ends as $$ HH_0(A,M')\to HH_0(A,M)\to HH_0(A,M'')\to0. $$ This is the asserted long exact sequence. [F7, F8, F10, step 2.1, given, algebra]

3.2 A morphism between two short exact sequences of $k$-central $A$-bimodules induces in each degree the corresponding morphism between the short exact sequences of Hochschild chains: the vertical maps are the tensor maps of step 1.1, and commute with the differentials there. By [F9] this is a morphism of short exact sequences of complexes; [F11] makes the square for the homology connecting maps commute. The maps at all other positions are the functorial homology maps of step 1.1, so the entire long exact sequence is natural in the coefficient sequence. [F6, F9, F11, step 1.1, step 2.1, given, construct]

4.1 If a coefficient module is zero, all its chain groups and homology groups are zero. A zero bimodule map induces the zero chain and homology maps, while an identity map induces identities; the composition check in step 1.1 covers all composites. As a unit-case check, when $A=k$ the maps in [F13] identify $C_n(k,M)\cong M$ and every face is the identity, so $b_n=0$ for odd $n$ and $b_n=1_M$ for positive even $n$. Thus $HH_0(k,M)=M$ and $HH_j(k,M)=0$ for $j>0$; the coefficient long exact sequence reduces to the original short exact sequence in degree zero and zeros in positive degrees. No iff claim occurs. AC is used through [F12] for the Tor comparison in step 1.2 and in step 1.3 to supply bases for the tensor powers; the chain-map and connecting-map constructions are choice-free. [F1, F2, F3, F4, F12, F13, step 1.1, step 1.2, step 1.3, step 3.1, given, algebra] ∎

## Source notes

Weibel, *An Introduction to Homological Algebra*, §9.1.2, Exercise 9.1.2, printed p.301/PDF p.1, lines 40–43, asks for the coefficient long exact sequence when the short exact sequence of bimodules is $k$-split. It states the result but leaves the proof as an exercise. Under the stated AC assumption the local basis argument above proves degreewise exactness for every short exact sequence of $k$-central bimodules, rather than relying on the exercise as proof text.
