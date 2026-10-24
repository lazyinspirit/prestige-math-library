---
id: thm-ordinal-arithmetic-agrees-on-omega
kind: theorem
title: "On $\\omega$ the ordinal $+$ and $\\cdot$ are the Peano operations: $\\omega$ is closed under ordinal $+$, $\\cdot$ and exponentiation, and for naturals $m, n$ the ordinal $m + n$ and $m \\cdot n$ are the natural-number sum and product"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordinal-addition, def-ordinal-multiplication, def-ordinal-exponentiation, def-nat-addition, def-nat-multiplication, thm-omega-is-peano-system, thm-induction-principle, def-natural-numbers, lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-nat-order, def-ordinal]
justified_by: []
aliases: [thm-ordinal-arithmetic-extends-peano]
landmark: true
short: "the two arithmetics on $\\mathbb{N}$ agree, for $+$ and $\\cdot$"
proof_strategy: direct
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
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
    - title: "R. Moosa, Set Theory course notes"
      url: "https://www.math.uwaterloo.ca/~rmoosa/pm433-notes.pdf"
pipeline_run: null
---

## Statement

Write $+$, $\cdot$ and $\alpha^{\beta}$ for the ordinal operations
([[def-ordinal-addition]], [[def-ordinal-multiplication]],
[[def-ordinal-exponentiation]]), and $+_{\mathbb{N}}$, $\cdot_{\mathbb{N}}$ for
the natural-number operations defined by Peano recursion
([[def-nat-addition]], [[def-nat-multiplication]]). Let
$m, n \in \mathbb{N} = \omega$. Then:

**(a) Closure.** $m + n$, $m \cdot n$ and $m^{n}$ all lie in $\omega$.

**(b) Agreement for $+$ and $\cdot$.** $m + n = m +_{\mathbb{N}} n$ and
$m \cdot n = m \cdot_{\mathbb{N}} n$.

**(c) Agreement of the orders.** For $m, n \in \omega$, $m \in n$ if and only if
$m < n$ in the additive order of [[def-nat-order]]. This is claim (i) of
[[lem-omega-least-limit-ordinal]] and is cited, not reproved.

**No agreement is claimed for exponentiation.** The dictionary drawn here is
with `construction-of-the-natural-numbers`, which defines addition and
multiplication and no exponentiation, and nothing among this page's declared
prerequisites supplies a natural-number power for the ordinal power to be
compared with. What clause (a) says about $m^{n}$ is only that the ordinal power
of two naturals is again a natural.

**This item is the dictionary between the two arithmetics on $\mathbb{N}$.**
Without it the library would carry two unrelated operations written with the
same symbol on the same set. **No choice principle is used.**

## Facts & Assumptions

**Given:** Natural numbers $m, n \in \mathbb{N} = \omega$ ([[def-natural-numbers]]).

[L1] $\mathbb{N} = \omega$ carries $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]), and $(\mathbb{N}, 0, \sigma)$ is the Peano system over which $+_{\mathbb{N}}$ and $\cdot_{\mathbb{N}}$ are defined ([[thm-omega-is-peano-system]]). For an ordinal $\nu$ the successor is $\nu^{+} = \nu \cup \{\nu\}$ ([[def-ordinal]]), so $\sigma$ and ${\cdot}^{+}$ are the same operation on $\omega$.

[L2] $m +_{\mathbb{N}} 0 = m$ and $m +_{\mathbb{N}} \sigma(n) = \sigma(m +_{\mathbb{N}} n)$ ([[def-nat-addition]]); $m \cdot_{\mathbb{N}} 0 = 0$ and $m \cdot_{\mathbb{N}} \sigma(n) = m \cdot_{\mathbb{N}} n +_{\mathbb{N}} m$ ([[def-nat-multiplication]]).

[L3] $\alpha + 0 = \alpha$ and $\alpha + \delta^{+} = (\alpha + \delta)^{+}$ ([[def-ordinal-addition]]); $\alpha \cdot 0 = 0$ and $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$ ([[def-ordinal-multiplication]]); $\alpha^{0} = 1$ and $\alpha^{\delta^{+}} = \alpha^{\delta} \cdot \alpha$ ([[def-ordinal-exponentiation]]).

[L4] Every natural number is an ordinal, $\omega$ is a limit ordinal, and every ordinal in $\omega$ is $0$ or a successor ordinal; moreover $m \in n$ if and only if $m < n$ for $m, n \in \omega$ (claims (i), (ii), (iii), (iv) of [[lem-omega-least-limit-ordinal]], with the order of [[def-nat-order]]).

[L5] A limit ordinal is closed under successor ([[def-limit-ordinal]]), and every ordinal is exactly one of $0$, a successor or a limit; $1 = 0^{+}$ and $\mu^{+}$ is an ordinal ([[lem-ordinal-basics]]); trichotomy holds for ordinals ([[lem-ordinal-trichotomy]]).

[L6] Induction on $\mathbb{N}$: a subset of $\mathbb{N}$ containing $0$ and closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 On $\omega$ the natural-number successor $\sigma$ and the ordinal successor ${\cdot}^{+}$ are literally the same operation, both being $\nu \mapsto \nu \cup \{\nu\}$; $\omega$ is closed under it by [L5], since $\omega$ is a limit ordinal by [L4]; and every ordinal in $\omega$ is $0$ or a successor by [L4], so in evaluating an ordinal recursion at an argument in $\omega$ the limit clause never fires. [L1, L4, L5]

1.2 Claim (c) is claim (i) of [L4], quoted as it stands: for $m, n \in \omega$, $m \in n$ if and only if $m < n$ in the additive order of [[def-nat-order]]. [L4]

2.1 Claim (b) for $+$, together with the additive half of claim (a): let $S$ be the set of $n \in \mathbb{N}$ such that $m + n = m +_{\mathbb{N}} n \in \mathbb{N}$ for every $m \in \mathbb{N}$. Then $0 \in S$, because $m + 0 = m = m +_{\mathbb{N}} 0$ by [L2] and [L3] and $m \in \mathbb{N}$. And $n \in S$ implies $\sigma(n) \in S$, because $\sigma(n) = n^{+}$ by step 1.1, so $m + \sigma(n) = m + n^{+} = (m + n)^{+} = \sigma(m +_{\mathbb{N}} n) = m +_{\mathbb{N}} \sigma(n)$, using [L3], the hypothesis at $n$, step 1.1 and [L2] in turn, and that value lies in $\mathbb{N}$ because $\mathbb{N}$ is closed under $\sigma$. Hence $S = \mathbb{N}$ by [L6]. [step 1.1, L1, L2, L3, L6]

3.1 Claim (b) for $\cdot$, together with the multiplicative half of claim (a): let $T$ be the set of $n \in \mathbb{N}$ such that $m \cdot n = m \cdot_{\mathbb{N}} n \in \mathbb{N}$ for every $m \in \mathbb{N}$. Then $0 \in T$, because $m \cdot 0 = 0 = m \cdot_{\mathbb{N}} 0$ by [L2] and [L3]. And $n \in T$ implies $\sigma(n) \in T$, because $m \cdot \sigma(n) = m \cdot n^{+} = m \cdot n + m = (m \cdot_{\mathbb{N}} n) + m$ by [L3], step 1.1 and the hypothesis at $n$, while step 2.1 applied to the two naturals $m \cdot_{\mathbb{N}} n$ and $m$ turns that ordinal sum into $(m \cdot_{\mathbb{N}} n) +_{\mathbb{N}} m$, which is $m \cdot_{\mathbb{N}} \sigma(n)$ by [L2] and again lies in $\mathbb{N}$. Hence $T = \mathbb{N}$ by [L6]. [step 2.1, step 1.1, L2, L3, L6]

4.1 The exponential half of claim (a): let $U$ be the set of $n \in \mathbb{N}$ such that $m^{n} \in \mathbb{N}$ for every $m \in \mathbb{N}$. Then $0 \in U$, because $m^{0} = 1 = 0^{+} \in \mathbb{N}$ by [L3] and [L5]. And $n \in U$ implies $\sigma(n) \in U$, because $m^{\sigma(n)} = m^{n^{+}} = m^{n} \cdot m$ by [L3] and step 1.1, a product of two naturals, which lies in $\mathbb{N}$ by step 3.1. Hence $U = \mathbb{N}$ by [L6]. [step 3.1, step 1.1, L3, L5, L6]

5.1 Claims (a), (b) and (c) are established. [step 4.1, step 3.1, step 2.1, step 1.2] ∎

## Remarks

**Why the limit clause never fires below $\omega$.** Every ordinal in $\omega$ is $0$ or a successor ([[lem-omega-least-limit-ordinal]], claim (iv)), so the two remaining clauses of each ordinal recursion are exactly the two Peano clauses of [[def-nat-addition]] and [[def-nat-multiplication]]. That is the whole reason the two arithmetics agree, and it is also the precise sense in which ordinal arithmetic *extends* rather than *replaces* the arithmetic of $\mathbb{N}$.

**The agreement stops immediately above $\omega$.** The natural-number operations are commutative; the ordinal operations are not, and the failure begins at the first infinite ordinal, with $1 + \omega = \omega \ne \omega + 1$ ([[fs-ordinal-addition-is-commutative]]). So this item says the ordinal operations restrict correctly, and says nothing about their behaviour anywhere else.

**Exponentiation is closure only.** `construction-of-the-natural-numbers` has no exponentiation, and no prerequisite of this page supplies one, so there is no natural-number power here for the ordinal power to agree with and clause (a) is all that this page claims. Wherever in the library a natural-number exponentiation with the clauses $m^{0} = 1$ and $m^{n^{+}} = m^{n} \cdot m$ is available, the corresponding agreement is a one-line induction of exactly the shape of step 4.1, on top of claim (b) for the product; it is not carried out here only because this page does not declare the page that mints it as a prerequisite.

**What would go wrong without this item.** The symbol $+$ would denote two different functions on $\mathbb{N}$, one defined in `construction-of-the-natural-numbers` and one here, with nothing connecting them. Every later computation mixing finite and infinite ordinals, such as the coefficients of a Cantor normal form ([[thm-cantor-normal-form]]) or the value $2^{\omega} = \omega$ ([[fs-the-ordinal-two-to-the-omega-is-uncountable]]), silently uses the identification proved here.
