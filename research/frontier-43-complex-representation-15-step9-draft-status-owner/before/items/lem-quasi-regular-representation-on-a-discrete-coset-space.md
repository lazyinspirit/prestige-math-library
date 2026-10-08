---
id: lem-quasi-regular-representation-on-a-discrete-coset-space
kind: lemma
title: Quasi-regular representations on discrete coset spaces
deps:
  - def-axiom-of-choice
  - def-topological-group
  - def-subgroup
  - def-coset
  - def-quotient-topology
  - def-group-action
  - def-hilbert-space
  - def-hilbert-direct-sum-of-unitary-representations
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-counting-measure
  - def-strongly-continuous-unitary-representation
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_audit: "Assume AC to use the arbitrary-index Hilbert direct-sum construction of ell^2(G/H); the coset, permutation, continuity and invariant-vector arguments use no additional choice."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, proof of Theorem 1.3.1, printed pp. 41–42: for an open subgroup H, G/H is discrete, the quasi-regular representation on ell^2(G/H) is used, delta_H is H-fixed, and a nonzero G-invariant square-summable vector forces G/H finite. The topology, strong continuity, and invariant-vector criterion are proved in full here."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a topological
group and let $H\le G$ be an open subgroup ([[def-subgroup]]). Give the left
coset set $X=G/H:=\{gH:g\in G\}$ its quotient topology. Then $X$ is discrete,
and $\ell^2(X):=\widehat{\bigoplus}_{xH\in X}\mathbb C$ is a Hilbert space
whose norm is the counting-measure norm ([[def-hilbert-direct-sum-of-unitary-representations]],
[[def-counting-measure]]). The left quasi-regular representation
$$\lambda_{G/H}(g)f(xH):=f(g^{-1}xH)$$
is a strongly continuous unitary representation of $G$
([[def-strongly-continuous-unitary-representation]]). Its Dirac vector
$\delta_H$ at the identity coset is a unit vector fixed by $H$. The
$G$-invariant vectors in $\ell^2(G/H)$ are exactly the constant functions;
therefore this invariant subspace is nonzero if and only if $G/H$ is finite.

## Facts & Assumptions

**Given:** AC; a topological group $G$; an open subgroup $H\le G$; its left-coset set $X=G/H$ and quotient map $q:G\to X$.

[F1] Left and right translations in a topological group are homeomorphisms, and the quotient topology declares $U\subseteq X$ open exactly when $q^{-1}(U)$ is open ([[def-topological-group]], [[def-quotient-topology]]).

[F2] Under AC, the Hilbert direct sum of copies of $\mathbb C$ indexed by a set $X$ is a Hilbert space; its elements are square-summable coordinate families, the coordinate vectors $\delta_x$ have norm one, and finite-support vectors are dense by the finite-tail property ([[def-hilbert-space]], [[def-hilbert-direct-sum-of-unitary-representations]], [[def-square-summable-family-on-an-arbitrary-index-set]], [[def-counting-measure]]).

[F3] The formula $g\cdot(xH)=gxH$ defines a left action on $G/H$; its permutations induce the coordinate rule $\lambda(g)\delta_{xH}=\delta_{gxH}$ ([[def-coset]], [[def-group-action]]).

[F4] The stabilizer of $xH$ under this action is $xHx^{-1}$, which is open because conjugation by $x$ is a homeomorphism ([[def-topological-group]]).

[F5] A square-summable family has finite support approximants with arbitrarily small squared tail, and its squared norm is the supremum of finite coordinate sums ([[def-square-summable-family-on-an-arbitrary-index-set]]).

## Proof

Bekka–de la Harpe–Valette use this quasi-regular representation in the proof of Theorem 1.3.1, printed pp. 41–42. The local argument supplies the topology and continuity details needed for the present general open-subgroup statement.

**Proof technique:** realize $\ell^2(G/H)$ as a coordinate Hilbert sum and prove continuity on the dense finite-support subspace.

1.1 For any coset $xH$, its preimage under $q$ is $xH$, which is open because left translation by $x$ is a homeomorphism and $H$ is open. Thus every singleton of the quotient topology on $X$ is open, so $X$ is discrete. [F1, given]

1.2 By [F2], $\ell^2(X)$ is the Hilbert space of square-summable complex coordinate families on $X$. The action in [F3] is well defined on left cosets and satisfies the group-action law. For each $g\in G$, $\lambda(g)$ permutes the coordinate vectors, so it extends linearly to a norm-preserving bijection with inverse $\lambda(g^{-1})$; hence it is unitary and $g\mapsto\lambda(g)$ is a representation. [F2, F3, algebra]

1.3 For each $xH\in X$, the orbit map $g\mapsto\lambda(g)\delta_{xH}=\delta_{gxH}$ is locally constant: at $g_0$ it is constant on the open neighborhood $g_0xHx^{-1}$ by [F4]. A finite linear combination of coordinate vectors therefore has a locally constant orbit map. [F2, F3, F4]

1.4 If $\eta$ is $G$-invariant, transitivity of the action in [F3] makes its coordinates equal to one constant $c$. If $X$ is infinite and $c\ne0$, finite subsets of arbitrarily large cardinality have squared coordinate sum $n|c|^2$, contradicting square summability by [F5]; hence the invariant subspace is zero. If $X$ is finite, the constant function $1_X$ is square-summable, nonzero, and invariant. Therefore the invariant subspace is nonzero exactly when $G/H$ is finite. [F3, F5, algebra]

2.1 Given $\eta\in\ell^2(X)$ and $\epsilon>0$, choose a finite-support $\eta_0$ with $\|\eta-\eta_0\|<\epsilon/3$ by [F2, F5]. Near any $g_0\in G$, the orbit of $\eta_0$ is constant by step 1.3, and unitarity gives $\|\lambda(g)\eta-\lambda(g_0)\eta\|\le2\|\eta-\eta_0\|+\|\lambda(g)\eta_0-\lambda(g_0)\eta_0\|<\epsilon$. Thus every orbit map is continuous and $\lambda_{G/H}$ is strongly continuous. [F2, F5, step 1.3]

3.1 The coordinate vector $\delta_H$ has norm one by [F2]. For $h\in H$, $hH=H$, so $\lambda(h)\delta_H=\delta_H$ by [F3]; thus $\delta_H$ is $H$-fixed. [F2, F3, step 1.2] ∎
