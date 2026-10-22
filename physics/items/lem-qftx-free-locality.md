---
id: lem-qftx-free-locality
kind: lemma
title: Causally disjoint free Weyl local algebras commute
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-gr-causal-curves-and-reachability
  - def-qftx-free-weyl-net
  - def-qftx-green-hyperbolic-interface
  - lem-qftx-green-propagator-symplectic-quotient
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-qftx-free-weyl-net: mathematical-premise
  def-qftx-green-hyperbolic-interface: mathematical-premise
  lem-qftx-green-propagator-symplectic-quotient: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Bär, Nicolas Ginoux, and Frank Pfäffle, Wave Equations on Lorentzian Manifolds and Quantization
      url: https://arxiv.org/pdf/0806.1036
      locator: Chapter 4 §4.3, the causal propagator symplectic space and local algebras, printed pp. 127–130.
    - title: Christopher J. Fewster and Katarzyna Rejzner, Algebraic Quantum Field Theory—an introduction, version 2
      url: https://arxiv.org/pdf/1904.04051v2
      locator: §4.2, equations (23)–(33), causal propagator, symplectic quotient and algebraic local Weyl generators, printed pp. 14–18.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume Countable Choice and Dependent Choice. Let $(M,g,N,P,E_+,E_-)$ be a Green-data background of [[def-qftx-green-hyperbolic-interface]], and let $\mathfrak W_M(O)$ be the algebraic local Weyl subalgebra assigned to an open set $O\subseteq M$ by [[def-qftx-free-weyl-net]]. If $O_1\subseteq O_2$, then $\mathfrak W_M(O_1)\subseteq\mathfrak W_M(O_2)$. If $O_1$ and $O_2$ are causally disjoint, meaning that no point of either set is causally related in either direction to a point of the other, then every element of $\mathfrak W_M(O_1)$ commutes with every element of $\mathfrak W_M(O_2)$.

## Statement references

[[def-qftx-green-hyperbolic-interface]]

[[def-qftx-free-weyl-net]]

[[lem-qftx-green-propagator-symplectic-quotient]]

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, a Green-data background on $M$, and open sets $O_1,O_2\subseteq M$.

[A1] Assume $\mathrm{AC}_\omega$ and Dependent Choice as stated in [[def-countable-choice]] and [[def-dependent-choice]] for the Green-data and causal-curve suppliers.

[F1] [[def-qftx-green-hyperbolic-interface]]: for compact real test $g$, $Eg=E_-g-E_+g$ is smooth and $\operatorname{supp}(Eg)\subseteq J^-(\operatorname{supp}g)\cup J^+(\operatorname{supp}g)$.

[F2] [[lem-qftx-green-propagator-symplectic-quotient]]: $\sigma_M([f],[g])=\int_M f(Eg)\,\mu_g$ is the symplectic form on the test-function quotient.

[F3] [[def-qftx-free-weyl-net]]: $\mathfrak W_M(O)$ is generated as a unital algebra closed under $*$ by $W_M([f])$ for real compact tests supported in $O$, and $W_M(v)W_M(w)=e^{-i\sigma_M(v,w)/2}W_M(v+w)$.

[F4] [[def-gr-causal-curves-and-reachability]]: $J^\pm(K)$ consists of points causally reachable from or to $K$; causal disjointness of the two regions makes their test supports disjoint from the causal future and past of each other.

## Proof

1.1 If $O_1\subseteq O_2$, every real compact test supported in $O_1$ is also supported in $O_2$. Thus the generating set for $\mathfrak W_M(O_1)$ is included in the generating set for $\mathfrak W_M(O_2)$, so the generated unital $*$-subalgebra is included. [F3, given, algebra]

2.1 Let $f,g$ be real compact tests supported in $O_1,O_2$, respectively. By causal disjointness and [F1], $\operatorname{supp}f\cap\operatorname{supp}(Eg)=\varnothing$. Therefore [F2] gives $\sigma_M([f],[g])=\int_M f(Eg)\,\mu_g=0$. The Weyl relation [F3] now gives
$$W_M([f])W_M([g])=W_M([f]+[g])=W_M([g])W_M([f]),$$
because the same argument gives $\sigma_M([g],[f])=0$. The adjoints of these generators are $W_M(-[f])$ and $W_M(-[g])$, whose test functions have the same supports, so they commute across the two regions as well. Finite sums and products of mutually commuting cross-generators still commute, by distributivity and associativity; these sums and products are exactly the generated algebraic local subalgebras. Hence every pair of elements of the two local algebras commutes. [A1, F1, F2, F3, F4, given, algebra] ∎

## Remarks

This is an algebraic locality result conditional on the Green-data interface. It constructs no Hilbert-space representation, state or C*-completion. A represented local algebra inherits the same commutation relation under any *-representation where that representation is defined.
