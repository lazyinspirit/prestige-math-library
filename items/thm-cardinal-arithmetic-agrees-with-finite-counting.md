---
id: thm-cardinal-arithmetic-agrees-with-finite-counting
kind: theorem
title: "Every natural number and $\\omega$ are cardinals, every infinite cardinal is a limit ordinal, and on the natural numbers the cardinal operations are the published finite counting operations, with $\\lvert A \\rvert$ in the finite sense equal to $\\lvert A \\rvert$ in the cardinal sense"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-cardinal-arithmetic, lem-cardinality-of-a-well-orderable-set, def-finite-cardinality, thm-sum-rule, thm-product-rule, thm-cardinality-of-a-set-of-functions, def-nat-power, lem-pigeonhole, def-cardinal, lem-omega-least-limit-ordinal, thm-ordinal-arithmetic-agrees-on-omega, def-countable, def-natural-numbers, lem-nat-order-is-membership, lem-nat-nonzero-is-successor, thm-omega-is-peano-system, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, def-ordinal, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
short: "the finite dictionary for $\\oplus$, $\\otimes$, $\\kappa^{\\lambda}$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "K. Kearnes, Cardinal Arithmetic (Fall 2025 course handout)"
      url: "https://math.colorado.edu/~kearnes/Teaching/Courses/F25/cardinals_arithmetic.pdf"
    - title: "Cardinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
pipeline_run: null
---

## Statement

Work in ZF; no choice principle is used. Let $\mathbb{N} = \omega$ be the von
Neumann naturals ([[def-natural-numbers]]), and let $+_{\mathbb{N}}$,
$\cdot_{\mathbb{N}}$ and $m^{n}$ be the natural-number operations
([[def-nat-power]] for the power). Then:

**(a)** Every natural number is a cardinal ([[def-cardinal]]), and $\omega$ is a
cardinal.

**(b)** Every infinite cardinal is a limit ordinal ([[def-limit-ordinal]]).

**(c) One notation, one meaning.** If $A$ is finite ([[def-countable]]) then $A$
is well-orderable and the natural number $\lvert A \rvert$ of
[[def-finite-cardinality]] **is** the cardinal $\lvert A \rvert$ of
[[lem-cardinality-of-a-well-orderable-set]].

**(d) One arithmetic.** For $m, n \in \omega$, read as cardinals,

$$m \oplus n = m +_{\mathbb{N}} n, \qquad m \otimes n = m \cdot_{\mathbb{N}} n, \qquad m^{n} \text{ as a cardinal } = m^{n} \text{ as a natural number},$$

the natural-number power being that of [[def-nat-power]] and the cardinal
exponential being defined in ZF here because the function set it counts is
finite. Moreover $m \oplus n$ and $m \otimes n$ are also the **ordinal**
sum and product of $m$ and $n$ ([[thm-ordinal-arithmetic-agrees-on-omega]]).
**No agreement is claimed between the cardinal power and the ordinal power**;
[[thm-ordinal-arithmetic-agrees-on-omega]] itself claims none for exponentiation,
and none is needed below.

## Facts & Assumptions

**Given:** The von Neumann naturals $\mathbb{N} = \omega$, the finite counting operations of [[def-finite-cardinality]], and the cardinal operations of [[def-cardinal-arithmetic]], in ZF.

[L1] If $n \approx m$ with $n, m \in \mathbb{N}$ then $n = m$ (claim 3 of [[lem-pigeonhole]]); and $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$ (claim 4).

[L2] $\mathbb{N}$ is a transitive set and $m \in n$ if and only if $m < n$, so $n = \{m \in \mathbb{N} : m < n\}$ ([[lem-nat-order-is-membership]]).

[L3] Every natural number is an ordinal, and $\omega$ is an ordinal ([[lem-omega-least-limit-ordinal]] claim (ii), [[def-ordinal]]).

[L4] Every element of an ordinal is an ordinal, $\alpha \notin \alpha$, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, and ordinals satisfy trichotomy ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

[L5] For a well-orderable $X$, $\lvert X \rvert$ is the least ordinal equinumerous with $X$, and equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]]).

[L6] For finite $A$ there is exactly one $n \in \mathbb{N}$ with $A \approx n$, written $\lvert A \rvert$; $\lvert n \rvert = n$; and $\lvert B \rvert = \lvert A \rvert$ when $A \approx B$ ([[def-finite-cardinality]], [[def-countable]]).

[L7] For finite disjoint $A, B$: $A \cup B$ is finite with $\lvert A \cup B\rvert = \lvert A\rvert +_{\mathbb{N}} \lvert B\rvert$ ([[thm-sum-rule]], claim 1). For finite $A, B$: $A \times B$ is finite with $\lvert A \times B\rvert = \lvert A\rvert \cdot_{\mathbb{N}} \lvert B\rvert$ ([[thm-product-rule]], claim 1). For finite $A, B$: the set of functions $B \to A$ is finite with cardinality $\lvert A\rvert^{\lvert B\rvert}$ ([[thm-cardinality-of-a-set-of-functions]], [[def-nat-power]]).

[L8] $\omega$ is inductive, so it is closed under $\sigma(n) = n \cup \{n\}$; $\sigma$ is injective and never $0$; and every nonzero natural number is a successor ([[def-natural-numbers]], [[thm-omega-is-peano-system]], [[lem-nat-nonzero-is-successor]]).

[L9] $\kappa \oplus \lambda = \lvert \kappa \sqcup \lambda\rvert$, $\kappa \otimes \lambda = \lvert \kappa \times \lambda\rvert$, $\kappa^{\lambda} = \lvert {}^{\lambda}\kappa\rvert$ ([[def-cardinal-arithmetic]]); a bijection witnesses $\approx$ and compositions of bijections are bijections ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L10] On $\omega$ the ordinal sum and product are the Peano ones ([[thm-ordinal-arithmetic-agrees-on-omega]], claim (b)).

## Proof

**Proof technique:** direct.

1.1 Let $n \in \mathbb{N}$ and suppose $\alpha \in n$ with $\alpha \approx n$; then $\alpha \in \mathbb{N}$ by [L2], so $\alpha = n$ by [L1], giving $n \in n$, which [L4] forbids; so $n$ is a cardinal. [L1, L2, L3, L4]

1.2 Suppose $\alpha \in \omega$ with $\alpha \approx \omega$; then $\alpha \in \mathbb{N}$ and $\mathbb{N} \approx \alpha$, which [L1] forbids; so $\omega$ is a cardinal, and claim (a) holds. [L1, L3, L4]

1.3 Let $\kappa$ be an infinite cardinal, so $\omega \subseteq \kappa$; then $\kappa \ne 0$, and if $\kappa = \beta \cup \{\beta\}$ for an ordinal $\beta$ then $\beta \in \omega$ is impossible, since $\kappa = \sigma(\beta) \in \omega$ by [L8] would give $\kappa \in \kappa$ against [L4], so $\omega \subseteq \beta$ by [L4]; the map sending $\beta$ to $0$, each $j \in \omega$ to $\sigma(j)$, and each $\xi \in \beta$ with $\omega \subseteq \xi$ to itself is then a bijection $\kappa \to \beta$, its three pieces having the pairwise disjoint images $\{0\}$, $\omega \setminus \{0\}$ and $\{\xi \in \beta : \omega \subseteq \xi\}$ by [L8]; so $\beta \approx \kappa$ with $\beta \in \kappa$, contradicting that $\kappa$ is a cardinal, and $\kappa$ is therefore a limit ordinal, which is claim (b). [L4, L8, L9]

1.4 For $m, n \in \mathbb{N}$ the sets $\{0\} \times m$ and $\{1\} \times n$ are finite and disjoint with $\lvert \{0\} \times m\rvert = m$ and $\lvert \{1\} \times n\rvert = n$ by [L6], so [L7] gives that $m \sqcup n$, $m \times n$ and ${}^{n}m$ are all finite, with finite cardinalities $m +_{\mathbb{N}} n$, $m \cdot_{\mathbb{N}} n$ and $m^{n}$ respectively. [L6, L7, L9]

2.1 Claim (c): let $A$ be finite and $n = \lvert A \rvert$ in the sense of [L6], so $A \approx n$ and $A$ is well-orderable; if $\beta \approx A$ with $\beta \in n$ then $\beta \in \mathbb{N}$ by [L2] and $\beta \approx n$ by [L9], so $\beta = n$ by [L1], contradicting [L4]; hence $n$ is the least ordinal equinumerous with $A$ and equals the cardinal $\lvert A \rvert$ of [L5]. [step 1.1, L1, L2, L4, L5, L6, L9]

3.1 Claim (d): each of $m \sqcup n$, $m \times n$ and ${}^{n}m$ is finite by step 1.4, hence well-orderable, so its cardinal cardinality is defined in ZF and equals its finite cardinality by step 2.1; reading this through [L9] gives $m \oplus n = m +_{\mathbb{N}} n$, $m \otimes n = m \cdot_{\mathbb{N}} n$ and $m^{n}$ (cardinal) $= m^{n}$ ([[def-nat-power]]), and [L10] identifies the first two with the ordinal sum and product. [step 1.4, step 2.1, L9, L10]

4.1 Claims (a), (b), (c) and (d) all hold, in ZF. [step 1.2, step 1.3, step 2.1, step 3.1] ∎

## Remarks

**Why this theorem is not optional.** Two published items already write $\lvert A \rvert$: [[def-finite-cardinality]], where the value is a natural number and the definition applies to finite sets only, and [[def-cardinal]], where the value is an initial ordinal. On a finite set both apply. Without claim (c) the same symbol would carry two meanings and every finite computation on this page would be ambiguous; with it there is one meaning, and a natural number may be read as a cardinal without comment.

**The same holds for $+$ on $\omega$, twice over.** Claim (d) closes the second half of a dictionary whose first half is [[thm-ordinal-arithmetic-agrees-on-omega]]: the Peano sum, the ordinal sum and the cardinal sum of two natural numbers are one natural number. The three operations diverge immediately above $\omega$, and that divergence is the reason [[def-cardinal-arithmetic]] writes $\oplus$ and $\otimes$ rather than $+$ and $\cdot$.

**What claim (b) is for.** It is used wherever an argument needs to take suprema below an infinite cardinal, or to know that $\max(\xi,\eta) + 1$ stays below $\kappa$ when $\xi, \eta < \kappa$. The proof is the shift bijection that [[def-cardinal]] already describes for $\omega^{+}$, carried out at an arbitrary infinite cardinal: prepending or removing one point does not change the size of an infinite well-ordered set, so a successor ordinal above $\omega$ is never an initial ordinal.
