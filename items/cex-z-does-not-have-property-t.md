---
status: draft
id: cex-z-does-not-have-property-t
kind: counterexample
title: The integers do not have property (T)
deps:
  - cor-inner-product-induces-a-norm
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-axiom-of-choice
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-integer-powers
  - def-complex-numbers-and-arithmetic
  - def-compact-space
  - def-countable
  - def-group
  - def-group-power
  - def-hilbert-space
  - def-int-operations
  - def-int-order
  - def-integers
  - def-linear-map
  - def-product-topology
  - def-real-and-complex-inner-product-space
  - def-standard-topologies
  - def-strongly-continuous-unitary-representation
  - def-subspace-topology-top
  - def-topological-group
  - def-kazhdan-pair-and-kazhdan-constant
  - def-kazhdans-property-t
  - lem-complex-conjugation-and-modulus-laws
  - lem-group-power-laws
  - lem-of-abs-value
  - lem-int-embeds-rat
  - lem-of-q-embeds
  - thm-int-comm-ring
  - thm-int-ordered-ring
  - thm-complex-numbers-form-a-field
  - thm-complex-plane-is-complete
  - thm-property-t-is-equivalent-to-the-existence-of-a-kazhdan-pair
  - thm-reals-ordered-field
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC only for the final implication from absence of compact Kazhdan pairs to failure of property (T), through the property-(T)/Kazhdan-pair equivalence. The discrete-character construction and all finite-set displacement estimates are choice-free."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T), Cambridge University Press 2008; author-hosted complete text"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Definitions 1.1.1 and 1.1.3, printed pp. 32–33 (property (T) and Kazhdan sets/pairs); Example 1.1.7, printed p. 35 (states that Z^n has no property (T), without the character proof given here)."
    - title: "Terence Tao, 254B, Notes 2: Cayley graphs and Kazhdan's property (T)"
      url: "https://terrytao.wordpress.com/2011/12/06/254b-notes-2-cayley-graphs-and-kazhdans-property-t/"
      locator: "§1, Exercise 37(i), asks to show that Z does not have property (T); this is a prompt, not a proof, and is not used as proof support."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), and give the additive
group $\mathbb Z$ ([[def-integers]]) the discrete topology
([[def-standard-topologies]]). For every compact subset $Q\subseteq\mathbb Z$
([[def-compact-space]]) and every $\varepsilon>0$, there is a complex number
$z$ with $|z|=1$ and $z\ne1$ such that the character
$\chi_z(n)=z^n$ defines a strongly continuous unitary representation
$\pi_z(n)u=z^n u$ on the standard complex Hilbert space $\mathbb C$
([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]])
with no nonzero invariant vector, while its unit vector $1$ is
$(Q,\varepsilon)$-invariant ([[def-almost-invariant-vectors-for-a-unitary-representation]]):
$$|z^n-1|<\varepsilon\qquad(n\in Q).$$
Consequently, no compact subset of $\mathbb Z$ is a Kazhdan set, and $\mathbb Z$
does not have property (T) ([[def-kazhdans-property-t]]) by
[[thm-property-t-is-equivalent-to-the-existence-of-a-kazhdan-pair]]. No compact
Kazhdan pair exists ([[def-kazhdan-pair-and-kazhdan-constant]]).

## Facts & Assumptions

**Given:** AC, the additive group $\mathbb Z$ with discrete topology, a compact
subset $Q\subseteq\mathbb Z$, and a real $\varepsilon>0$.

[F1] A compact subset of a discrete space is finite: the singleton sets form an
open cover in the subspace topology, and compactness gives a finite subcover
([[def-compact-space]], [[def-standard-topologies]], [[def-subspace-topology-top]]).

[F2] Give $\mathbb C$ the pairing $\langle u,v\rangle=u\overline v$. Field
arithmetic and conjugation make it linear in the first variable and conjugate
symmetric, and $\langle u,u\rangle=|u|^2$ is nonnegative and vanishes exactly
at $u=0$; hence this is a complex inner product with induced norm $|u|$. The
complex plane is complete for that norm, so it is a complex Hilbert space
([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]],
[[def-real-and-complex-inner-product-space]], [[cor-inner-product-induces-a-norm]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]],
[[lem-complex-conjugation-and-modulus-laws]], [[thm-complex-plane-is-complete]],
[[def-hilbert-space]], [[def-linear-map]]).

[F3] For $z\ne0$, integer powers agree with the powers in the multiplicative
group $\mathbb C^\times$; $z^{n+m}=z^nz^m$, $z^{-n}=(z^n)^{-1}$, and the
complex modulus is multiplicative and subadditive. If $|z|=1$, then
$|z^n|=1$ for every integer $n$ ([[def-complex-numbers-and-arithmetic]],
[[thm-complex-numbers-form-a-field]], [[def-complex-integer-powers]],
[[def-group]], [[def-group-power]], [[lem-group-power-laws]],
[[lem-complex-conjugation-and-modulus-laws]]).

[F4] The discrete topology makes every map from $\mathbb Z$ continuous; the
addition map is continuous because $\mathbb Z\times\mathbb Z$ is discrete in
the product topology, and negation is continuous for the same reason. Thus
$\mathbb Z$ is a topological group and every scalar character on it is
continuous. The integer operations form an additive group by the commutative
ring theorem ([[def-integers]], [[def-int-operations]], [[thm-int-comm-ring]],
[[def-group]]); the topology assertions use [[def-standard-topologies]],
[[def-product-topology]], and [[def-topological-group]].

[F5] The order-preserving embeddings $\mathbb Z\hookrightarrow\mathbb Q
\hookrightarrow\mathbb R$ turn the finite set of integer magnitudes from [F1]
into a finite linearly ordered subset of $\mathbb R$, so it has a maximum $M$.
Also $M\ge0$ and $1>0$, hence $M+1>0$. These facts use the ordered-field
structure of $\mathbb R$, the integer order and absolute value, and the finite
set convention ([[lem-int-embeds-rat]], [[lem-of-q-embeds]],
[[thm-reals-ordered-field]], [[def-int-order]], [[thm-int-ordered-ring]],
[[lem-of-abs-value]], [[def-countable]]).

[F6] Under AC, property (T) implies the existence of a compact Kazhdan pair;
this is the forward implication in the property-(T)/Kazhdan-pair equivalence
([[def-axiom-of-choice]], [[def-kazhdans-property-t]],
[[def-kazhdan-pair-and-kazhdan-constant]],
[[thm-property-t-is-equivalent-to-the-existence-of-a-kazhdan-pair]]).

## Proof

**Proof technique:** choose a nontrivial scalar of modulus one explicitly and
bound its integer powers on the finite compact test set.

1.1 The additive group $\mathbb Z$ with the discrete topology is a topological group: every subset of $\mathbb Z$ and of $\mathbb Z\times\mathbb Z$ is open, so addition and negation are continuous by [F4]. [F4]

1.2 The compact set $Q$ is finite by [F1]. Let $M:=\max(\{0\}\cup\{|n|:n\in Q\})$ in $\mathbb R$, using the order-preserving embeddings in [F5]. This maximum exists because the displayed set is finite and linearly ordered; it also gives $M=0$ when $Q=\varnothing$. Set $t:=\varepsilon/(4(M+1))>0$ and $z:=((1-t^2)+2it)/(1+t^2)$. Then $|z|^2=((1-t^2)^2+4t^2)/(1+t^2)^2=1$, so $|z|=1$ by nonnegativity of the modulus; the imaginary part $2t/(1+t^2)$ is nonzero, so $z\ne1$. Moreover, $|z-1|^2=(4t^4+4t^2)/(1+t^2)^2=4t^2/(1+t^2)\le4t^2$, and hence $|z-1|\le2t=\varepsilon/(2(M+1))$. [F1, F3, F5, algebra]

2.1 For every integer $n$, the geometric-sum identity and [F3] give $|z^n-1|\le |n|\,|z-1|$: for $n=k\ge1$ factor $z^k-1=(z-1)(1+z+\cdots+z^{k-1})$ and use $|z^j|=1$; for $n=-k<0$, $|z^{-k}-1|=|z^{-k}(1-z^k)|=|1-z^k|$; for $n=0$ both sides are zero. Therefore, for every $n\in Q$, $|z^n-1|\le |n|\varepsilon/(2(M+1))\le M\varepsilon/(2(M+1))<\varepsilon$. The last strict inequality also holds when $M=0$. [F3, step 1.2, algebra]

2.2 Since $|z|=1$, the map $\chi_z(n)=z^n$ is a homomorphism from the additive group $\mathbb Z$ into the unit scalars by [F3], and it is continuous because its domain is discrete by [F4]. On $H=\mathbb C$ with the inner product from [F2], define $\pi_z(n)u:=\chi_z(n)u$. Each $\pi_z(n)$ is complex linear by the field laws and preserves the norm since $|z^n u|=|z^n||u|=|u|$; its inverse is $\pi_z(-n)$. The homomorphism law for $\chi_z$ gives the representation law, and its orbit maps are continuous by [F4], so $\pi_z$ is a strongly continuous unitary representation. [F2, F3, F4, step 1.1]

3.1 The vector $1\in\mathbb C$ has norm one by [F2] and satisfies $\|\pi_z(n)1-1\|=|z^n-1|<\varepsilon$ for each $n\in Q$ by step 2.1. If $u\in\mathbb C$ were invariant under $\pi_z$, invariance under $1\in\mathbb Z$ would give $zu=u$; since $z\ne1$ and $\mathbb C$ is a field, this forces $u=0$. Thus $1$ is a $(Q,\varepsilon)$-invariant unit vector in a representation with no nonzero invariant vector. [step 1.2, step 2.1, step 2.2, F2]

4.1 Since $Q$ and $\varepsilon>0$ were arbitrary, the witness in step 3.1 shows that no compact $Q$ and positive tolerance form a Kazhdan pair. Hence $\mathbb Z$ has no compact Kazhdan set. By [F6], this rules out property (T). The character construction itself uses no Choice; AC is used only in this final implication. [F1, F6, step 3.1] ∎
