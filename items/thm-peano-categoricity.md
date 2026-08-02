---
id: thm-peano-categoricity
kind: theorem
title: "Categoricity: the natural numbers are unique up to unique isomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-peano-system, thm-recursion, thm-induction-principle]
aliases: [peano-uniqueness]
landmark: true
short: "any two Peano systems uniquely isomorphic"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $(N, 0, \sigma)$ and $(N', 0', \sigma')$ be Peano systems ([[def-peano-system]]). There is a unique bijection $h : N \to N'$ with $h(0) = 0'$ and $h(\sigma(n)) = \sigma'(h(n))$ for all $n \in N$, an isomorphism of Peano systems. Thus the natural numbers are determined up to a unique isomorphism.

## Facts & Assumptions

**Given:** Two Peano systems $(N, 0, \sigma)$ and $(N', 0', \sigma')$.

[L1] Recursion theorem, valid in any Peano system since its proof uses only the axioms P1 to P3: for a set $A$, an element $a \in A$, and $f : A \to A$, there is a unique $g : N \to A$ with $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ ([[thm-recursion]]).

[L2] Induction holds in each system (axiom P3): a subset containing the base point and closed under the successor is the whole system ([[def-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 Apply the recursion theorem [L1] in $(N, 0, \sigma)$ with $A = N'$, $a = 0'$, $f = \sigma'$: there is a unique $h : N \to N'$ with $h(0) = 0'$ and $h(\sigma(n)) = \sigma'(h(n))$. [L1]

1.2 Symmetrically, apply [L1] in $(N', 0', \sigma')$ with $A = N$, $a = 0$, $f = \sigma$: there is a unique $h' : N' \to N$ with $h'(0') = 0$ and $h'(\sigma'(n')) = \sigma(h'(n'))$. [L1]

2.1 The composite $h' \circ h : N \to N$ satisfies $(h' \circ h)(0) = h'(0') = 0$ and $(h' \circ h)(\sigma(n)) = h'(\sigma'(h(n))) = \sigma(h'(h(n))) = \sigma((h' \circ h)(n))$; the identity $\mathrm{id}_N$ satisfies the same two equations, so by induction [L2] the set $\{\, n : (h' \circ h)(n) = n \,\}$ is all of $N$, i.e. $h' \circ h = \mathrm{id}_N$. [step 1.1, step 1.2, L2]

2.2 Likewise $h \circ h' = \mathrm{id}_{N'}$ by the same argument carried out in $N'$. [step 1.1, step 1.2, L2]

3.1 Hence $h$ is a bijection with inverse $h'$, and it preserves the base point and the successor, so it is an isomorphism of Peano systems. [step 2.1, step 2.2]

4.1 Uniqueness: any $h_1 : N \to N'$ with $h_1(0) = 0'$ and $h_1(\sigma(n)) = \sigma'(h_1(n))$ satisfies the recursion clauses defining $h$ in step 1.1, so $h_1 = h$ by the uniqueness in [L1] (equivalently $\{\, n : h_1(n) = h(n) \,\}$ contains $0$ and is closed under $\sigma$, hence is all of $N$ by induction [L2]). [step 1.1, L1, L2] ∎
