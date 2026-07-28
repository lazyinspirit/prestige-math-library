---
id: thm-hessenberg
kind: theorem
title: "Hessenberg: $\\kappa \\otimes \\kappa = \\kappa$ for every infinite cardinal $\\kappa$, proved in ZF from the canonical well-order of $\\kappa \\times \\kappa$"
status: draft
origin: session
deps: [def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, lem-cardinality-of-a-well-orderable-set, lem-cardinal-operations-are-well-defined, thm-cardinal-arithmetic-agrees-with-finite-counting, def-cardinal, def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-well-order, thm-transfinite-induction, thm-mostowski-collapse, def-order-isomorphism, def-initial-segment, lem-omega-least-limit-ordinal, def-limit-ordinal, def-equinumerous, def-injection-surjection-bijection, thm-n-cross-n-countable, def-countable]
justified_by: []
aliases: [thm-cardinal-square]
landmark: true
short: "$\\kappa \\otimes \\kappa = \\kappa$, in ZF"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
    - title: "Aleph number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Aleph_number"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $\kappa$ be an **infinite cardinal**, that is a cardinal
([[def-cardinal]]) with $\omega \le \kappa$. Then

$$\kappa \otimes \kappa = \kappa, \qquad \text{equivalently} \qquad \lvert \kappa \times \kappa \rvert = \kappa$$

([[def-cardinal-arithmetic]]).

**This is a theorem of ZF and uses no choice principle.** The well-order that
carries the proof is written down from the ordinal order on $\kappa$; nothing is
selected anywhere. That matters for this page: Hessenberg's theorem is exactly
the part of "an infinite set is the same size as its square" that survives
without choice.

## Facts & Assumptions

**Given:** An infinite cardinal $\kappa$, in ZF. No choice principle is assumed. For ordinals $\xi, \eta$ write $\max(\xi,\eta)$ for the $\subseteq$-larger of the two, which exists by comparability.

[L1] For a well-orderable $X$: $X \approx \lvert X \rvert$, the value is a cardinal, equinumerous sets receive the same one, $\lvert \alpha \rvert \le \alpha$, and $\lvert \alpha \rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]]).

[L2] $\times$ respects $\approx$, and $\alpha \times \beta$ carries an explicit well-order for ordinals $\alpha, \beta$ ([[lem-cardinal-operations-are-well-defined]]).

[L3] For cardinals, $\kappa \le \lambda$ iff $\kappa \preceq \lambda$; and $A \preceq B$ with both well-orderable gives $\lvert A \rvert \le \lvert B \rvert$ (claim (a) of [[lem-cardinal-arithmetic-basic-laws]]).

[L4] $\omega$ is a cardinal, every natural number is a cardinal, every infinite cardinal is a limit ordinal, and for $m, n \in \omega$ the value $m \otimes n$ is again a natural number ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[def-limit-ordinal]]).

[L5] $\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$, that is $\omega \times \omega \approx \omega$ ([[thm-n-cross-n-countable]], [[def-countable]]).

[L6] Every well-order is order isomorphic to exactly one ordinal, its order type; an order isomorphism is a bijection and carries the initial segment below a point onto the initial segment below its image ([[thm-mostowski-collapse]], [[def-order-isomorphism]], [[def-initial-segment]]).

[L7] If $S \subseteq W$ for a well-order $(W,<)$ satisfies "$W_{<a} \subseteq S$ implies $a \in S$" for every $a \in W$, then $S = W$ ([[thm-transfinite-induction]]).

[L8] Ordinals: elements of ordinals are ordinals, $\alpha \notin \alpha$, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, trichotomy holds, every nonempty set of ordinals has an $\in$-least element, and every set of ordinals is well ordered by $\in$ ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-ordinal]], [[def-well-order]]).

[L9] $\omega$ is the least limit ordinal and is an ordinal ([[lem-omega-least-limit-ordinal]]); a bijection witnesses $\approx$ and a subset inclusion is an injection ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 For an ordinal $\alpha$ define $(\xi,\eta) \lhd (\xi',\eta')$ on $\alpha \times \alpha$ to hold when $\max(\xi,\eta) \in \max(\xi',\eta')$, or the two maxima are equal and $\xi \in \xi'$, or the two maxima are equal, $\xi = \xi'$ and $\eta \in \eta'$; this is the lexicographic order on the triple $(\max(\xi,\eta), \xi, \eta)$ of ordinals, hence irreflexive, transitive and trichotomous by [L8], and a nonempty $S \subseteq \alpha \times \alpha$ has a $\lhd$-least element obtained by taking in turn the $\in$-least maximum occurring in $S$, then the $\in$-least admissible $\xi$, then the $\in$-least admissible $\eta$, each of which is the least element of a nonempty set of ordinals and so is determined rather than chosen; therefore $\lhd$ well-orders $\alpha \times \alpha$. [L8]

1.2 For $(\xi,\eta) \in \alpha \times \alpha$ put $\gamma = \max(\xi,\eta) \cup \{\max(\xi,\eta)\}$, the successor of the maximum; then every $(\xi',\eta') \lhd (\xi,\eta)$ has $\max(\xi',\eta') \subseteq \max(\xi,\eta) \in \gamma$, so $\xi', \eta' \in \gamma$, and the $\lhd$-initial segment of $\alpha \times \alpha$ below $(\xi,\eta)$ is contained in $\gamma \times \gamma$. [L8]

1.3 Base value: $\omega \times \omega \approx \omega$ by [L5], so $\lvert \omega \times \omega \rvert = \lvert \omega \rvert = \omega$ by [L1] and [L4]. [L1, L4, L5]

1.4 Lower bound: for any ordinal $\mu$ with $0 \in \mu$ the map $\xi \mapsto (\xi, 0)$ is an injection $\mu \to \mu \times \mu$, so $\lvert \mu \rvert \le \lvert \mu \times \mu \rvert$ by [L3], and $\lvert \mu \rvert = \mu$ when $\mu$ is a cardinal. [L1, L3, L9]

2.1 Now let $\mu$ be an infinite cardinal with $\omega \in \mu$, and assume the induction hypothesis that $\lvert \nu \times \nu \rvert = \nu$ for every infinite cardinal $\nu \in \mu$; for $(\xi,\eta) \in \mu \times \mu$ and $\gamma$ as in step 1.2 we have $\gamma \in \mu$, because $\mu$ is a limit ordinal by [L4] and $\max(\xi,\eta) \in \mu$, and moreover $\lvert \gamma \times \gamma \rvert \in \mu$: if $\gamma \in \omega$ then $\lvert \gamma \times \gamma \rvert = \gamma \otimes \gamma \in \omega \subseteq \mu$ by [L4], while if $\omega \subseteq \gamma$ then $\nu = \lvert \gamma \rvert$ satisfies $\omega \le \nu \le \gamma \in \mu$ by [L1] and [L3], so $\nu$ is an infinite cardinal in $\mu$ and $\gamma \times \gamma \approx \nu \times \nu$ by [L1] and [L2], whence $\lvert \gamma \times \gamma \rvert = \lvert \nu \times \nu \rvert = \nu \in \mu$. [step 1.2, L1, L2, L3, L4]

3.1 Under the same hypothesis, the $\lhd$-initial segment $I$ of $\mu \times \mu$ below any $(\xi,\eta)$ has order type in $\mu$: $I \subseteq \gamma \times \gamma$ by step 1.2 and $I$ is well ordered by the restriction of $\lhd$ by step 1.1, so $\lvert I \rvert \le \lvert \gamma \times \gamma \rvert \in \mu$ by [L3] and step 2.1; and if the order type $\theta$ of $I$ satisfied $\mu \subseteq \theta$ then $\mu \preceq \theta \approx I$ by [L6] and [L9], giving $\mu \le \lvert I \rvert$ by [L3], which contradicts $\lvert I \rvert \in \mu$. [step 1.1, step 1.2, step 2.1, L3, L6, L9]

4.1 Under the same hypothesis, $\lvert \mu \times \mu \rvert = \mu$: let $\delta$ be the order type of $(\mu \times \mu, \lhd)$ and $g : \delta \to \mu \times \mu$ the inverse of the collapsing isomorphism ([L6]); if $\mu \in \delta$ then $g$ carries the initial segment of $\delta$ below $\mu$, which is $\mu$ itself, onto the $\lhd$-initial segment below $g(\mu)$, whose order type would then be $\mu$, contradicting step 3.1; so $\delta \subseteq \mu$ and $\lvert \mu \times \mu \rvert = \lvert \delta \rvert \le \delta \le \mu$ by [L1], while step 1.4 gives $\mu \le \lvert \mu \times \mu \rvert$. [step 3.1, step 1.4, L1, L6, L8]

5.1 Apply [L7] to the well-order $(\kappa \cup \{\kappa\}, \in)$ of [L8] and to $S = \{\mu \in \kappa \cup \{\kappa\} : \mu$ is not an infinite cardinal, or $\lvert \mu \times \mu \rvert = \mu\}$: a $\mu$ below which everything lies in $S$ is in $S$, trivially if $\mu$ is not an infinite cardinal, by step 1.3 if $\mu = \omega$, and by step 4.1 otherwise; hence $S = \kappa \cup \{\kappa\}$, so $\kappa \in S$ and $\kappa \otimes \kappa = \lvert \kappa \times \kappa \rvert = \kappa$. [step 1.3, step 4.1, L7, L8] ∎

## Remarks

**Why the maximum comes first.** Under the plain lexicographic order of [[lem-cardinal-operations-are-well-defined]], the initial segment below $(1,0)$ in $\omega \times \omega$ is the whole of $\{0\} \times \omega$, which is already infinite; the order type of $\omega \times \omega$ is then $\omega \cdot \omega$, far above $\omega$. Ordering by the maximum first bounds every initial segment inside a **square** $\gamma \times \gamma$ with $\gamma < \kappa$, and the induction hypothesis then says that square is small. The whole proof is that one change of order.

**No choice, and it is worth saying why.** Every place that invites a selection avoids it: the $\lhd$-least element of a nonempty set is found by three successive minimisations, the order type of a well-order is unique, and the bijection $\gamma \approx \lvert \gamma \rvert$ is used only through [[lem-cardinal-operations-are-well-defined]], which quantifies over existing bijections rather than picking one for each $\gamma$ at once.

**What the theorem does not say.** It is about **cardinals**, that is about well-orderable sets. "Every infinite set $A$ satisfies $A \times A \approx A$" is a strictly stronger statement, and [[thm-tarski-square]] shows it is equivalent to the Axiom of Choice. So Hessenberg's theorem is not a weaker version of Tarski's with a cheaper proof; it is the exact fragment that ZF proves.
