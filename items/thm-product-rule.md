---
id: thm-product-rule
kind: theorem
title: "The product rule: $\\lvert A \\times B\\rvert = \\lvert A\\rvert\\,\\lvert B\\rvert$, and $\\big\\lvert\\prod_{i<m} A_i\\big\\rvert = \\prod_{i<m}\\lvert A_i\\rvert$"
status: published
origin: session
deps: [def-finite-cardinality, thm-sum-rule, def-sum-over-a-finite-index-set,
       def-nat-finite-sum-and-product, def-injection-surjection-bijection,
       def-equinumerous, def-nat-multiplication, lem-nat-mult-commutative,
       thm-induction-principle, lem-nat-order-is-membership, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Rule of product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rule_of_product"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set_(mathematics)"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

1. If $A$ and $B$ are finite then $A \times B$ is finite and
   $\lvert A \times B\rvert = \lvert A\rvert \cdot \lvert B\rvert$
   ([[def-finite-cardinality]]).
2. Let $m \in \mathbb{N}$ and let $A_0, \dots, A_{m-1}$ be finite sets. Write
   $$\prod_{i<m} A_i := \{\, f : f \text{ is a function with domain } m \text{ and } f(i) \in A_i \text{ for every } i < m \,\}.$$
   Then $\prod_{i<m} A_i$ is finite and
   $\big\lvert\prod_{i<m} A_i\big\rvert = \prod_{i<m}\lvert A_i\rvert$, the
   right-hand product being the $\mathbb{N}$-valued one of
   [[def-nat-finite-sum-and-product]].

At $m = 0$ clause 2 reads $\big\lvert\prod_{i<0} A_i\big\rvert = 1$: there is
exactly one function with domain $\varnothing$, the empty function, and the empty
product is $1$. Both sides are computed, not stipulated.

## Facts & Assumptions

**Given:** Finite sets $A$, $B$ and a finite list $A_0, \dots, A_{m-1}$ of finite sets. Recall $\sigma(m) = m \cup \{m\}$ and $m = \{\,i : i < m\,\}$.

[L1] Induction ([[thm-induction-principle]]).

[L2] Cardinality ([[def-finite-cardinality]]): $\lvert A\rvert$ is the unique natural with $A \approx \lvert A\rvert$; $\lvert n\rvert = n$; and a bijection transports finiteness and cardinality.

[L3] The sum rule ([[thm-sum-rule]]): a family of pairwise disjoint finite sets indexed by a finite set has finite union, whose cardinality is the sum over that index set of the cardinalities.

[L4] Sums over a finite index set ([[def-sum-over-a-finite-index-set]]): $\sum_{i \in S} c = \lvert S\rvert \cdot c$ for a constant $c$.

[L5] Recursion clause for the $\mathbb{N}$-valued product ([[def-nat-finite-sum-and-product]]): $\prod_{i<0} c_i = 1$ and $\prod_{i<\sigma(m)} c_i = \big(\prod_{i<m} c_i\big)\cdot c_m$.

[L6] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection, and composites of bijections are bijections.

[L7] Arithmetic: multiplication of naturals is commutative ([[lem-nat-mult-commutative]], [[def-nat-multiplication]]); and $m = \{\,i : i<m\,\}$, $\sigma(m) = m \cup \{m\}$, $m \notin m$ ([[lem-nat-order-is-membership]], [[def-natural-numbers]]).

## Proof

**Proof technique:** induction.

1.1 The slices. For $b \in B$ put $A_b := A \times \{b\}$. The map $a \mapsto (a,b)$ is a bijection of $A$ onto $A_b$, with inverse the first projection, so $A_b$ is finite with $\lvert A_b\rvert = \lvert A\rvert$; and the family $(A_b)_{b \in B}$ is pairwise disjoint, since an element of $A_b$ has second coordinate $b$. Moreover $A \times B = \bigcup_{b \in B} A_b$. [L2, L6, construct]

1.2 Base case of clause 2, at $m = 0$. A function with domain $0 = \varnothing$ is the empty function and there is exactly one of them, so $\prod_{i<0} A_i = \{\varnothing\}$, which is finite with cardinality $1$ because $b \mapsto \varnothing$ is a bijection of $1 = \{0\}$ onto it; and $\prod_{i<0}\lvert A_i\rvert = 1$ by [L5]. [base, L2, L5, L6]

1.3 Inductive hypothesis for clause 2: fix $m$ and assume that for every finite list $A_0, \dots, A_{m-1}$ of finite sets the set $\prod_{i<m} A_i$ is finite with cardinality $\prod_{i<m}\lvert A_i\rvert$. [ih]

2.1 Clause 1. By step 1.1 and [L3], $A \times B$ is finite and $\lvert A \times B\rvert = \sum_{b \in B}\lvert A_b\rvert = \sum_{b \in B}\lvert A\rvert = \lvert B\rvert \cdot \lvert A\rvert = \lvert A\rvert \cdot \lvert B\rvert$, using [L4] for the constant summand and commutativity for the last step. [step 1.1, L3, L4, L7]

3.1 Inductive step for clause 2. Let $A_0, \dots, A_m$ be finite. Define $\Phi : \prod_{i<\sigma(m)} A_i \to \big(\prod_{i<m} A_i\big) \times A_m$ by $\Phi(f) = (f\restriction m,\ f(m))$, where $f \restriction m$ is the restriction of $f$ to $m$. Its inverse is $(g, a) \mapsto g \cup \{(m,a)\}$, a function with domain $\sigma(m) = m \cup \{m\}$ because $m \notin m$; the two composites are the identity, so $\Phi$ is a bijection. By the hypothesis of step 1.3 and clause 1, the codomain is finite with cardinality $\big(\prod_{i<m}\lvert A_i\rvert\big)\cdot\lvert A_m\rvert = \prod_{i<\sigma(m)}\lvert A_i\rvert$, and transport carries this to $\prod_{i<\sigma(m)} A_i$. [step 1.3, step 2.1, L2, L5, L6, L7]

4.1 By step 1.2, step 3.1 and induction, clause 2 holds for every $m \in \mathbb{N}$. [step 1.2, step 3.1, L1]

5.1 Clause 1 is step 2.1 and clause 2 is step 4.1. [step 2.1, step 4.1, discharge-induction] ∎

## Remarks

- **No arithmetic is needed for clause 1.** Slicing $A \times B$ over $B$ and
  applying the sum rule replaces the usual bijection
  $(p,q) \mapsto p\lvert B\rvert + q$, which would have to be proved bijective by
  division with remainder. Division with remainder lives later in the reading
  order, so the slicing argument is not merely shorter here, it is the one
  available.

- **The empty cases are computed.** With $A = \varnothing$ and $B$ arbitrary,
  clause 1 reads $\lvert\varnothing\rvert = 0 \cdot \lvert B\rvert = 0$, which is
  right because $\varnothing \times B = \varnothing$. With $m = 0$, clause 2 reads
  $1 = 1$. Neither is a convention.

- **The infinite analogue of clause 1 fails in the shape a reader expects.** A
  product of two infinite sets need not be strictly larger than either factor:
  $\mathbb{N}\times\mathbb{N} \approx \mathbb{N}$ ([[thm-n-cross-n-countable]]).
  The companion page records that as a false statement, with finiteness located
  as the hypothesis that fails.
