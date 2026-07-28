---
id: thm-cardinality-of-a-set-of-functions
kind: theorem
title: "The set $A^{B}$ of functions $B \\to A$ between finite sets is finite, with $\\lvert A^{B}\\rvert = \\lvert A\\rvert^{\\lvert B\\rvert}$"
status: draft
origin: session
deps: [def-nat-power, thm-product-rule, thm-sum-rule, def-finite-cardinality,
       thm-subset-of-a-finite-set, def-injection-surjection-bijection, def-equinumerous,
       thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership,
       lem-nat-add-cancellative]
justified_by: []
forward_refs: [def-function-space]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Function (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_(mathematics)"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

Let $A$ and $B$ be finite sets and write

$$A^{B} := \{\, f : f \text{ is a function } B \to A \,\}.$$

Then $A^{B}$ is finite and $\lvert A^{B}\rvert = \lvert A\rvert^{\lvert B\rvert}$,
the power being the $\mathbb{N}$-valued exponentiation of [[def-nat-power]].

Both degenerate cases are covered and neither is a stipulation. If
$B = \varnothing$ there is exactly one function $B \to A$, the empty function, so
$\lvert A^{\varnothing}\rvert = 1 = \lvert A\rvert^{0}$ **even when
$A = \varnothing$**. If $A = \varnothing$ and $B \ne \varnothing$ there is no
function at all, so $\lvert A^{B}\rvert = 0 = 0^{\lvert B\rvert}$ with
$\lvert B\rvert \ge 1$.

## Facts & Assumptions

**Given:** Finite sets $A$ and $B$, and $n := \lvert B \rvert$. Here $A^B$ is the SET of functions $B \to A$; it carries no further structure.

[L1] Induction ([[thm-induction-principle]]).

[L2] Cardinality ([[def-finite-cardinality]]): $\lvert A\rvert$ is the unique natural with $A \approx \lvert A\rvert$; $\lvert n\rvert = n$; $\lvert A\rvert = 0$ exactly when $A = \varnothing$; and a bijection transports finiteness and cardinality.

[L3] The sum rule for two disjoint blocks: $\lvert S \cup T\rvert = \lvert S\rvert + \lvert T\rvert$ ([[thm-sum-rule]], clause 1).

[L4] The product rule: $\lvert X \times Y\rvert = \lvert X\rvert\cdot\lvert Y\rvert$ for finite $X$, $Y$ ([[thm-product-rule]], clause 1).

[L5] Powers ([[def-nat-power]]): $m^{0} = 1$ and $m^{\sigma(n)} = m^{n}\cdot m$.

[L6] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection.

[L7] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]], clause 1); cancellation in $\mathbb{N}$: $x + 1 = y + 1$ implies $x = y$ ([[lem-nat-add-cancellative]]); and $\sigma(n) = n+1$, $n = \{\,i : i<n\,\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]).

## Proof

**Proof technique:** induction.

1.1 Base case $\lvert B\rvert = 0$. Then $B = \varnothing$ by [L2], and a function $\varnothing \to A$ is the empty function, of which there is exactly one whatever $A$ is; so $A^{B} = \{\varnothing\}$, which is finite with cardinality $1$ because $0 \mapsto \varnothing$ is a bijection of $1 = \{0\}$ onto it. And $\lvert A\rvert^{0} = 1$ by [L5]. [base, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume that for every finite $A$ and every finite $B'$ with $\lvert B'\rvert = n$ the set $A^{B'}$ is finite with $\lvert A^{B'}\rvert = \lvert A\rvert^{n}$. [ih]

2.1 Inductive step. Let $\lvert B\rvert = \sigma(n)$. Then $B \ne \varnothing$ by [L2], so fix $b \in B$ and put $B' := B \setminus \{b\}$, which is finite by [L7]. Since $B = B' \cup \{b\}$ with $B' \cap \{b\} = \varnothing$ and $\lvert\{b\}\rvert = 1$, [L3] gives $\sigma(n) = \lvert B'\rvert + 1$, hence $\lvert B'\rvert = n$ by cancellation. Define $\Psi : A^{B} \to A^{B'} \times A$ by $\Psi(f) = (f\restriction B',\ f(b))$; its inverse is $(g,a) \mapsto g \cup \{(b,a)\}$, which is a function on $B' \cup \{b\} = B$ because $b \notin B'$, and the two composites are the identity, so $\Psi$ is a bijection. By the hypothesis of step 1.2 and by [L4] the codomain is finite with cardinality $\lvert A\rvert^{n}\cdot\lvert A\rvert = \lvert A\rvert^{\sigma(n)}$, and transport carries this to $A^{B}$. [step 1.2, L2, L3, L4, L5, L6, L7, construct]

3.1 By induction on $\lvert B\rvert$ the statement holds for every pair of finite sets $A$, $B$. [step 1.1, step 2.1, L1]

4.1 The two degenerate readings are instances of it: $B = \varnothing$ gives $1 = \lvert A\rvert^{0}$ by step 1.1, valid for $A = \varnothing$ as well; and $A = \varnothing$ with $\lvert B\rvert \ge 1$ gives $\lvert A^{B}\rvert = 0^{\lvert B\rvert} = 0$, which is right because a function $B \to \varnothing$ would have to supply a value in $\varnothing$ for some element of $B$. [step 1.1, step 3.1, L2, L5, discharge-induction] ∎

## Remarks

- **Where the choice of $b$ sits.** A single element is taken from a single
  nonempty set, which is an ordinary existential instantiation and not a choice
  principle. Nothing in the argument selects a point of every member of a family.

- **$A^{B}$ here is a bare set.** The same set carries a vector space structure
  over a field in [[def-function-space]], much later in the reading order; that
  structure is not used, and this theorem is a count and nothing more.

- **The exponent notation is not an accident.** $\lvert A\rvert^{\lvert B\rvert}$
  counts the functions $B \to A$, and $\lvert A\rvert^{n}$ is by clause (e) of
  [[def-nat-power]] the product of $n$ copies of $\lvert A\rvert$: one factor for
  each element of the domain, which is exactly what the inductive step does one
  point at a time.
