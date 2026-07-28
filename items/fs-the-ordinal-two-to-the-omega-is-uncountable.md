---
id: fs-the-ordinal-two-to-the-omega-is-uncountable
kind: false-statement
title: "FALSE: the ordinal $2^{\\omega}$ is uncountable"
status: draft
origin: session
deps: [def-ordinal-exponentiation, thm-ordinal-exponent-laws, thm-ordinal-arithmetic-agrees-on-omega, thm-ordinal-arithmetic-monotonicity, def-countable, def-equinumerous, lem-omega-least-limit-ordinal, def-limit-ordinal, def-natural-numbers, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal]
justified_by: []
aliases: []
landmark: false
short: "$2^{\\omega} = \\omega$, which is countably infinite"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "Cardinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

**FALSE.** The ordinal $2^{\omega}$ ([[def-ordinal-exponentiation]]) is
uncountable ([[def-countable]]).

The claim comes from importing an expectation about **cardinal** exponentiation,
where the power of $2$ by the size of $\mathbb{N}$ is the size of
$\mathcal{P}(\mathbb{N})$ and really is uncountable. Ordinal exponentiation is a
different operation that happens to share the notation, and here
$2^{\omega} = \omega$, which is countably infinite.

## Facts & Assumptions

**Given:** The ordinals with the operations of [[def-ordinal-exponentiation]], and $\omega = \mathbb{N}$ the least limit ordinal ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[def-natural-numbers]]).

[L1] $\alpha^{0} = 1$, $\alpha^{\delta^{+}} = \alpha^{\delta} \cdot \alpha$, and $\alpha^{\lambda} = \bigcup\{\alpha^{\beta} : 0 < \beta < \lambda\}$ for limit $\lambda$ ([[def-ordinal-exponentiation]]).

[L2] For $\alpha > 1$ one has $\beta \le \alpha^{\beta}$ for every ordinal $\beta$ (claim (d) of [[thm-ordinal-exponent-laws]]).

[L3] For $m, n \in \omega$ the ordinal $m^{n}$ lies in $\omega$ (claim (a) of [[thm-ordinal-arithmetic-agrees-on-omega]]).

[L4] $\omega$ is a limit ordinal, so $\bigcup \omega = \omega$ and $\xi \in \omega$ implies $\xi^{+} \in \omega$ ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]); every ordinal is transitive, $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$, and $\mu \notin \mu$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]); $\mu < \nu$ iff $\mu^{+} \le \nu$; and $1 \in 2$, so $1 < 2$.

[L5] A set is at most countable when it is finite or equinumerous with $\mathbb{N}$, and uncountable when it is neither; $\omega = \mathbb{N}$ is equinumerous with $\mathbb{N}$ by the identity ([[def-countable]], [[def-equinumerous]], [[def-natural-numbers]]).

[L6] $\mu \cdot 1 = \mu$ (claim (a) of [[thm-ordinal-arithmetic-monotonicity]]).

## Refutation

**Proof technique:** direct.

1.1 For every $n \in \omega$ the ordinal $2^{n}$ lies in $\omega$ by [L3], hence $2^{n} \subseteq \omega$ by [L4]; and $n \le 2^{n}$ by [L2], since $1 < 2$. [L2, L3, L4]

1.2 The set united in the limit clause at $\lambda = \omega$ is $\{2^{n} : n \in \omega \text{ and } n \ne 0\}$, and it is nonempty, since $1 \in \omega$ and $1 \ne 0$, with $2^{1} = 2^{0} \cdot 2 = 1 \cdot 2 = 2$. [L1, L4, L6]

2.1 $2^{\omega} = \omega$: the union is contained in $\omega$ because each $2^{n} \subseteq \omega$ by step 1.1; and it contains $\omega$, because a given $m \in \omega$ has $m^{+} \in \omega$ with $m^{+} \ne 0$ by [L4], and $m \in m^{+} \le 2^{m^{+}}$ by step 1.1, so $m \in 2^{m^{+}}$, one of the sets united. [step 1.1, step 1.2, L1, L4]

3.1 $\omega$ is equinumerous with $\mathbb{N}$ by [L5], so $2^{\omega} = \omega$ is countably infinite and in particular at most countable, hence not uncountable; the claim is false. [step 2.1, L5] ∎

## Remarks

**The general pattern.** The same computation gives $k^{\omega} = \omega$ for every finite $k \ge 2$. What makes a finite base collapse is that $k^{n}$ is again a natural number, by [[thm-ordinal-arithmetic-agrees-on-omega]], so the whole tower stays inside $\omega$ and its supremum is $\omega$. An infinite base does not collapse: $\omega^{\omega}$ is computed on the companion examples page and is far above $\omega$.

**Order type against cardinality.** $2^{\omega} = \omega$ is a statement about **order type**. It says nothing about the size of $\mathcal{P}(\mathbb{N})$, which is uncountable by [[thm-cantor-powerset]]. The two operations that both get written $2^{\omega}$ are compared in [[rem-ordinal-versus-cardinal-exponentiation]], which is where the clash of notation is set out.

**A weaker true statement.** Every ordinal below $\omega_1$ is at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]]), and $2^{\omega} = \omega < \omega_1$, so countability of $2^{\omega}$ also follows from that theorem. The computation above is preferred because it identifies the ordinal exactly.
