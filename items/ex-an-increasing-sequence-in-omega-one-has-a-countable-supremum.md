---
id: ex-an-increasing-sequence-in-omega-one-has-a-countable-supremum
kind: example
title: "Assuming countable choice, a strictly increasing $\\omega$-sequence of countable ordinals has a countable supremum, which is a countable limit ordinal below $\\omega_1$; the instance $\\sup_n \\omega\\cdot(n+1) = \\omega^{2}$ needs no choice"
status: published
origin: session
deps: [thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal, def-first-uncountable-ordinal, def-countable-choice, def-countable, lem-subset-of-countable, lem-countable-iff-surjection-from-n, thm-product-of-countable, def-equinumerous, lem-ordinal-product-as-an-order-type, thm-mostowski-collapse, def-ordinal-addition, def-ordinal-multiplication, def-ordinal-exponentiation, thm-ordinal-arithmetic-monotonicity, def-limit-ordinal, lem-omega-least-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-natural-numbers, def-ordinal]
justified_by: []
aliases: []
landmark: false
short: "$\\sup_n \\omega\\cdot(n+1) = \\omega^{2} < \\omega_1$"
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
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
pipeline_run: null
---

## Example

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(\alpha_n)_{n \in \omega}$ be a strictly increasing sequence of ordinals with
every $\alpha_n \in \omega_1$ ([[def-first-uncountable-ordinal]]). Then

$$\sup_{n \in \omega} \alpha_n \;=\; \bigcup\{\alpha_n : n \in \omega\}$$

is again an ordinal **below $\omega_1$**, hence at most countable
([[def-countable]]), and it is a **limit ordinal**
([[def-limit-ordinal]]), since a strictly increasing sequence never attains its
supremum.

A concrete instance, with everything computed:

$$\alpha_n = \omega \cdot (n + 1), \qquad \sup_{n \in \omega} \omega \cdot (n+1) = \omega \cdot \omega = \omega^{2}.$$

So $\omega^{2}$ is a countable limit ordinal strictly below $\omega_1$, reached
from below by an $\omega$-sequence. That is exactly what
[[thm-countable-subsets-of-omega-one-are-bounded]] forbids for $\omega_1$
itself: $\omega_1$ is **not** the supremum of any such sequence.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice ([[def-countable-choice]]), a strictly increasing sequence $(\alpha_n)_{n \in \omega}$ of ordinals in $\omega_1$, and the operations of [[def-ordinal-addition]], [[def-ordinal-multiplication]] and [[def-ordinal-exponentiation]]; here $n + 1 = n^{+}$ ([[def-ordinal-addition]]).

[L1] Assuming $\mathrm{AC}_\omega$: every at most countable $A \subseteq \omega_1$ has $\sup A = \bigcup A \in \omega_1$, and $\alpha \le \sup A$ for every $\alpha \in A$ ([[thm-countable-subsets-of-omega-one-are-bounded]]).

[L2] $\omega_1$ is uncountable, every ordinal in $\omega_1$ is at most countable, and $\omega_1$ is a limit ordinal ([[thm-omega-one-is-the-least-uncountable-ordinal]]).

[L3] A nonempty set is at most countable if and only if it is a surjective image of $\mathbb{N}$ ([[lem-countable-iff-surjection-from-n]]); a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]); a product of two at most countable sets is at most countable ([[thm-product-of-countable]]); a set equinumerous with an at most countable set is at most countable ([[def-countable]], [[def-equinumerous]]).

[L4] $\alpha \cdot \beta$ is the order type of $\alpha \times \beta$ under last differences, and an order isomorphism is in particular a bijection ([[lem-ordinal-product-as-an-order-type]], [[thm-mostowski-collapse]]).

[L5] From [[thm-ordinal-arithmetic-monotonicity]]: for $\mu > 0$, $\nu < \theta$ implies $\mu\nu < \mu\theta$ (claim (d)); $\mu \cdot \theta = \sup\{\mu\eta : \eta \in D\}$ for $\mu > 0$, $\theta$ a limit and $D \subseteq \theta$ nonempty with $\sup D = \theta$ (claim (f)); $1 \cdot \mu = \mu$ (claim (a)).

[L6] $\mu^{1^{+}} = \mu^{1} \cdot \mu$ and $\mu^{1} = \mu$ ([[def-ordinal-exponentiation]], [[thm-ordinal-arithmetic-monotonicity]]); $\omega$ is a limit ordinal, closed under successor, with $\bigcup \omega = \omega$ ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[def-natural-numbers]]).

[L7] $\bigcup A$ is an ordinal and the least upper bound of a set $A$ of ordinals; $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$; $\mu \notin \mu$; $\mu < \nu$ iff $\mu^{+} \le \nu$; and trichotomy holds ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-ordinal]]).

## Verification

**Proof technique:** direct.

1.1 The set $A = \{\alpha_n : n \in \omega\}$ is a nonempty subset of $\omega_1$ and is at most countable, being the image of $\mathbb{N}$ under $n \mapsto \alpha_n$, hence a surjective image of $\mathbb{N}$ onto $A$, so [L3] applies. [L3, given]

1.2 An ordinal $\mu$ lies in $\omega_1$ if and only if it is at most countable: one direction is [L2]; conversely if $\mu \notin \omega_1$ then $\omega_1 \le \mu$ by [L7], so $\omega_1 \subseteq \mu$ and $\omega_1$ would be at most countable by [L3], contradicting [L2]. [L2, L3, L7]

2.1 By [L1] the ordinal $\beta = \sup A = \bigcup A$ lies in $\omega_1$ and is an upper bound of $A$, so $\beta$ is at most countable by [L2]. [step 1.1, L1, L2]

2.2 The instance: each $\omega \cdot (n+1)$ is at most countable, because by [L4] it is order isomorphic, hence equinumerous, to $\omega \times (n+1)$, which is at most countable by [L3]; so $\omega \cdot (n+1) \in \omega_1$ by step 1.2. The sequence is strictly increasing, since $n + 1 < m + 1$ for $n < m$ gives $\omega \cdot (n+1) < \omega \cdot (m+1)$ by [L5] with $\omega > 0$. [step 1.2, L3, L4, L5]

3.1 $\beta$ is a limit ordinal: it is nonzero because $\alpha_0 \le \alpha_1 \le \beta$ with $\alpha_0 < \alpha_1$, so $\beta \ne 0$; and it is not a successor, since $\beta = \mu^{+}$ would put $\mu \in \alpha_n$ for some $n$, whence $\mu^{+} \le \alpha_n < \alpha_{n^{+}} \le \beta = \mu^{+}$ by [L7] and strict increase, which [L7] forbids. [step 2.1, L7, given]

3.2 Its supremum is $\omega^{2}$: the set $\{n + 1 : n \in \omega\}$ is a nonempty subset of $\omega$ with supremum $\omega$, because $\omega$ is closed under successor and $\bigcup \omega = \omega$ by [L6], so claim (f) of [L5] with $\mu = \omega > 0$ gives $\omega \cdot \omega = \sup\{\omega \cdot (n+1) : n \in \omega\}$; and $\omega \cdot \omega = \omega^{1} \cdot \omega = \omega^{1^{+}} = \omega^{2}$ by [L6]. [step 2.2, L5, L6]

4.1 So for a strictly increasing $\omega$-sequence in $\omega_1$ the supremum is a limit ordinal below $\omega_1$ and is at most countable; concretely $\sup_{n} \omega \cdot (n+1) = \omega^{2}$, a countable limit ordinal below $\omega_1$. [step 2.1, step 3.1, step 2.2, step 3.2] ∎

## Remarks

**Where the choice principle is and is not needed.** The general statement uses $\mathrm{AC}_\omega$, at the single step where [[thm-countable-subsets-of-omega-one-are-bounded]] is applied. The concrete instance does **not**: $\omega^{2}$ is shown at most countable directly, from [[lem-ordinal-product-as-an-order-type]] and [[thm-product-of-countable]], both of which are choice free. So the example is available in ZF and only the general statement carries the hypothesis.

**The contrast with $\omega_1$ itself.** $\omega_1$ is also a limit ordinal, and it is also the supremum of the ordinals below it; what fails there, under $\mathrm{AC}_\omega$, is that no *at most countable* family of them suffices. That is [[thm-countable-subsets-of-omega-one-are-bounded]] again, and it is **not a theorem of ZF alone**: consistently with ZF the first uncountable ordinal *is* the supremum of an $\omega$-sequence of at most countable ordinals, so no choice-free proof of it exists ([[rem-omega-one-and-the-cost-of-choice]]).

**Strict increase is used only for the limit clause.** Boundedness needs only that the set of values is at most countable; strictness is what makes the supremum unattained and hence a limit ordinal. A sequence that is eventually constant has its final value as supremum, and that value need not be a limit ordinal at all, which is why step 2.2 quotes the strictness hypothesis.
