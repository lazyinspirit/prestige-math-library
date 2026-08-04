---
id: thm-countable-subsets-of-omega-one-are-bounded
kind: theorem
title: "Assuming countable choice: every at most countable subset of $\\omega_1$ is bounded below $\\omega_1$, so no at most countable subset of $\\omega_1$ is cofinal in it, and a supremum of at most countably many at most countable ordinals is at most countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal, def-cofinal-subset-of-an-ordinal, def-countable-choice, thm-countable-union-of-countable, def-countable, lem-countable-iff-surjection-from-n, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal, def-limit-ordinal, def-natural-numbers]
justified_by: []
aliases: [thm-omega-one-is-regular-under-countable-choice]
landmark: true
short: "under $\\mathrm{AC}_\\omega$, countable subsets of $\\omega_1$ are bounded"
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
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
    - title: "A. Karagila, Forcing course notes (2023)"
      url: "https://karagila.org/files/Forcing-2023.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$**
([[def-countable-choice]]). Let $\omega_1$ be the first uncountable ordinal
([[def-first-uncountable-ordinal]]). Then:

**(a) Boundedness.** Every at most countable ([[def-countable]]) subset
$A \subseteq \omega_1$ is bounded below $\omega_1$: the ordinal
$\sup A = \bigcup A$ lies in $\omega_1$ and satisfies $\alpha \le \sup A$ for
every $\alpha \in A$.

**(b) No small cofinal set.** No at most countable subset of $\omega_1$ is
cofinal in $\omega_1$ ([[def-cofinal-subset-of-an-ordinal]]).

**(c) Suprema stay countable.** If $A$ is an at most countable set of at most
countable ordinals, then $\sup A = \bigcup A$ is an at most countable ordinal.

**The hypothesis is not decoration.** $\mathrm{AC}_\omega$ is spent at exactly
one step, step 1.2 below, and it is spent there only through
[[thm-countable-union-of-countable]], whose own statement carries the same
hypothesis. Everything else on this page, including the existence of $\omega_1$
and all of [[thm-omega-one-is-the-least-uncountable-ordinal]], is a theorem of
ZF. The ledger is the choice-ledger remark at the end of this page.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice ([[def-countable-choice]]), and $\omega_1 = \aleph(\omega)$ ([[def-first-uncountable-ordinal]]).

[L1] $\bigcup A$ is an ordinal for every set $A$ of ordinals, and it is the least upper bound of $A$; $\bigcup \varnothing = 0$; every element of an ordinal is an ordinal; $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$; and $\mu \notin \mu$ ([[lem-ordinal-basics]], [[def-ordinal]]).

[L2] Exactly one of $\mu \in \nu$, $\mu = \nu$, $\nu \in \mu$ holds for ordinals ([[lem-ordinal-trichotomy]]).

[L3] $\omega_1$ is uncountable, every ordinal in $\omega_1$ is at most countable, and $\omega_1$ is a limit ordinal ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-limit-ordinal]]).

[L4] A nonempty set $A$ is at most countable if and only if there is a surjection $\mathbb{N} \to A$ ([[lem-countable-iff-surjection-from-n]], [[def-natural-numbers]]).

[L5] **Assuming $\mathrm{AC}_\omega$:** if $(A_n)_{n \in \mathbb{N}}$ is a family of at most countable sets then $\bigcup_{n \in \mathbb{N}} A_n$ is at most countable ([[thm-countable-union-of-countable]]).

[L6] $C \subseteq \alpha$ is cofinal in $\alpha$ when every $\xi \in \alpha$ satisfies $\xi \le \eta$ for some $\eta \in C$ ([[def-cofinal-subset-of-an-ordinal]]).

## Proof

**Proof technique:** direct.

1.1 For a set $A$ of ordinals, $\bigcup A$ is an ordinal and is the least upper bound of $A$, so $\alpha \le \bigcup A$ for every $\alpha \in A$; and $\bigcup \varnothing = 0$. [L1]

1.2 **The one step that spends $\mathrm{AC}_\omega$.** Let $A$ be a nonempty at most countable set each of whose members is an at most countable set. By [L4] there is a surjection $s : \mathbb{N} \to A$; putting $A_n = s(n)$ gives a family of at most countable sets indexed by $\mathbb{N}$, with no selection made, and $\bigcup_{n \in \mathbb{N}} A_n = \bigcup A$ because $s$ is onto $A$; so $\bigcup A$ is at most countable by [L5]. [L4, L5]

2.1 Claim (a): let $A \subseteq \omega_1$ be at most countable. Every $\alpha \in A$ lies in $\omega_1$ and hence is an at most countable ordinal by [L3], and $\alpha \subseteq \omega_1$ by [L1], so $\bigcup A \subseteq \omega_1$ and $\bigcup A$ is an ordinal with $\bigcup A \le \omega_1$ by [L1]. If $A = \varnothing$ then $\bigcup A = 0 \in \omega_1$ by step 1.1 and [L3], since $\omega_1$ is a nonzero ordinal. If $A \ne \varnothing$ then $\bigcup A$ is at most countable by step 1.2, so $\bigcup A \ne \omega_1$ because $\omega_1$ is uncountable by [L3], and therefore $\bigcup A \in \omega_1$ by [L1]. In both cases $\sup A = \bigcup A \in \omega_1$ is an upper bound of $A$ by step 1.1. [step 1.1, step 1.2, L1, L2, L3]

2.2 Claim (c): an at most countable set $A$ of at most countable ordinals has $\bigcup A$ an ordinal by [L1], equal to $0$ when $A = \varnothing$ and at most countable by step 1.2 otherwise; in either case $\sup A = \bigcup A$ is an at most countable ordinal. [step 1.1, step 1.2, L1]

3.1 Claim (b): suppose $A \subseteq \omega_1$ is at most countable and cofinal in $\omega_1$; put $\beta = \bigcup A$, which lies in $\omega_1$ by step 2.1, so $\beta^{+} \in \omega_1$ because $\omega_1$ is a limit ordinal by [L3]; cofinality applied to $\beta^{+}$ gives $\eta \in A$ with $\beta^{+} \le \eta$, while $\eta \le \beta$ by step 1.1, so $\beta^{+} \le \beta \in \beta^{+}$ and hence $\beta \in \beta$, which [L1] forbids. [step 2.1, step 1.1, L1, L3, L6]

4.1 Claims (a), (b) and (c) are established, and the only appeal to a choice principle is the use of [L5] inside step 1.2. [step 3.1, step 2.1, step 2.2, step 1.2, L5] ∎

## Remarks

**Where exactly the choice is spent, and why it cannot be avoided here.** Step 1.2 hands an $\mathbb{N}$-indexed family of at most countable sets to [[thm-countable-union-of-countable]], and that theorem selects one enumeration of each member at once. Each ordinal $\alpha < \omega_1$ has enumerations by $\mathbb{N}$, in general many, and countability alone gives no rule for singling one out. Note that the family $(A_n)$ itself is produced without choice: it is $n \mapsto s(n)$ for a surjection $s$ that [[lem-countable-iff-surjection-from-n]] hands over, and that lemma is choice free.

**The hypothesis is genuinely needed, not merely convenient.** Without a choice principle the conclusion can fail outright: it is consistent with ZF, granted the consistency of ZF, that $\omega_1$ is the supremum of an $\omega$-sequence of at most countable ordinals. That is the Feferman-Levy model, recorded in [[rem-omega-one-and-the-cost-of-choice]] with the external citation. So the boundedness proved here is not a fact about $\omega_1$ alone; it is a fact about $\omega_1$ *plus* $\mathrm{AC}_\omega$.

**What the statement deliberately avoids.** The usual formulation is "$\omega_1$ is a regular cardinal", using the cofinality function $\operatorname{cf}$. Neither $\operatorname{cf}$ nor the regular/singular vocabulary is defined in this library, so the conclusion is stated in terms of subsets: no at most countable subset is cofinal. That is exactly the form the applications need, for instance the non-normality of the deleted Tychonoff plank, where the countably many ordinals produced by a covering argument must be capped below $\omega_1$.

**Claim (c) restated.** A supremum of at most countably many at most countable ordinals is at most countable. This is the same fact viewed without reference to $\omega_1$, and it is the form used when the ambient ordinal is not $\omega_1$ but some countable limit; see the worked increasing-sequence example on the companion examples page.
