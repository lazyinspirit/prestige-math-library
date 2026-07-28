---
id: thm-cofinality-basics
kind: theorem
title: "$\\operatorname{cf}(\\alpha) \\le \\alpha$; $\\operatorname{cf}(0) = 0$ and $\\operatorname{cf}(\\alpha + 1) = 1$; for a limit ordinal $\\lambda$ the value $\\operatorname{cf}(\\lambda)$ is an infinite cardinal with $\\operatorname{cf}(\\operatorname{cf}(\\lambda)) = \\operatorname{cf}(\\lambda)$, so it is regular; and every cofinal subset of $\\lambda$ has cardinality at least $\\operatorname{cf}(\\lambda)$, a value that is attained"
status: draft
origin: session
deps: [def-cofinality, lem-cofinality-is-well-defined, def-cofinal-subset-of-an-ordinal, def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, def-cardinal, lem-omega-least-limit-ordinal, lem-cardinality-of-a-well-orderable-set, lem-cardinal-arithmetic-basic-laws, def-equinumerous, def-injection-surjection-bijection, def-ordinal-addition, def-cardinal-arithmetic, thm-mostowski-collapse, def-order-isomorphism, def-well-order]
justified_by: []
aliases: []
landmark: true
short: "$\\operatorname{cf}(\\lambda)$ is a regular infinite cardinal"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
    - title: "Regular cardinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_cardinal"
pipeline_run: null
---

## Statement

Work in ZF; no choice principle is used. Let $\operatorname{cf}$ be the
cofinality of [[def-cofinality]]. Then:

**(a)** $\operatorname{cf}(\alpha) \le \alpha$ for every ordinal $\alpha$
([[def-ordinal]]);

**(b)** $\operatorname{cf}(0) = 0$, and $\operatorname{cf}(\alpha + 1) = 1$ for
every ordinal $\alpha$, where $\alpha + 1 = \alpha \cup \{\alpha\}$
([[def-ordinal-addition]]);

**(c)** for a limit ordinal $\lambda$ ([[def-limit-ordinal]]),
$\operatorname{cf}(\lambda)$ is an **infinite cardinal** ([[def-cardinal]]) and
$\operatorname{cf}(\operatorname{cf}(\lambda)) = \operatorname{cf}(\lambda)$, so
$\operatorname{cf}(\lambda)$ is a **regular** cardinal;

**(d)** for a limit ordinal $\lambda$, every cofinal $C \subseteq \lambda$
([[def-cofinal-subset-of-an-ordinal]]) satisfies
$\operatorname{cf}(\lambda) \le \lvert C \rvert$, and some cofinal subset of
$\lambda$ has cardinality exactly $\operatorname{cf}(\lambda)$.

Clause (c) is what discharges the naming obligation of [[def-cofinality]]:
"regular" is defined through $\operatorname{cf}$, and it is a theorem, not a
convention, that $\operatorname{cf}$ of a limit ordinal is a cardinal at which
the definition can be tested.

## Facts & Assumptions

**Given:** ZF, with no choice principle. Throughout, a map $f : \beta \to \alpha$ is called cofinal when $f[\beta]$ is cofinal in $\alpha$.

[L1] $\operatorname{cf}(\alpha)$ is the least ordinal $\beta$ admitting a cofinal $f : \beta \to \alpha$; for that $\beta$ a strictly increasing cofinal $g : \beta \to \alpha$ exists ([[def-cofinality]], [[lem-cofinality-is-well-defined]]).

[L2] $C \subseteq \alpha$ is cofinal when every $\zeta \in \alpha$ has some $\eta \in C$ with $\zeta \le \eta$ ([[def-cofinal-subset-of-an-ordinal]]).

[L3] Ordinals: trichotomy; $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$; $\alpha \notin \alpha$; every element of an ordinal is an ordinal; every set of ordinals is well ordered by $\in$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-well-order]]).

[L4] Every ordinal is exactly one of $0$, a successor, or a limit, and $\omega$ is the least limit ordinal ([[def-limit-ordinal]], [[lem-omega-least-limit-ordinal]]).

[L5] For a well-orderable $X$: $X \approx \lvert X\rvert$, the value is a cardinal, equinumerous sets receive the same one, and $\lvert \alpha\rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]]).

[L6] For cardinals $\kappa \le \lambda$ iff $\kappa \preceq \lambda$, and $A \preceq B$ with both well-orderable gives $\lvert A\rvert \le \lvert B\rvert$ (claim (a) of [[lem-cardinal-arithmetic-basic-laws]]).

[L7] Every well-order has a unique order type, and the isomorphism onto it is a bijection ([[thm-mostowski-collapse]], [[def-order-isomorphism]], [[def-equinumerous]]).

[L8] A composition of a function with a bijection has the same range; a strictly increasing map of ordinals is injective, and satisfies $\xi \le \eta \Rightarrow g(\xi) \le g(\eta)$, both by trichotomy ([[def-injection-surjection-bijection]], [[lem-ordinal-trichotomy]]).

[L9] A cardinal $\kappa$ is infinite exactly when $\omega \le \kappa$ ([[def-cardinal-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 Claim (a): the identity $\alpha \to \alpha$ is cofinal by [L2], so the least length in [L1] is at most $\alpha$. [L1, L2]

1.2 Claim (b): for $\alpha = 0$ the empty map $0 \to 0$ is cofinal vacuously, so $\operatorname{cf}(0) = 0$; for $\alpha + 1$ the map $0 \mapsto \alpha$ is cofinal, since every $\zeta \in \alpha + 1$ satisfies $\zeta \le \alpha$ by [L3], while the empty map into the nonempty $\alpha + 1$ is not, so $\operatorname{cf}(\alpha + 1) = 1$. [L1, L2, L3]

1.3 Let $\lambda$ be a limit ordinal, $\beta = \operatorname{cf}(\lambda)$ and $g : \beta \to \lambda$ strictly increasing and cofinal by [L1]; then $\beta$ is a limit ordinal, so $\omega \le \beta$ by [L4]: $\beta \ne 0$ because $0 \in \lambda$ and the empty range is not cofinal, and $\beta = \gamma + 1$ is impossible, since then $g(\eta) \le g(\gamma)$ for all $\eta \in \beta$ by [L8], so cofinality would give $\lambda \subseteq g(\gamma) + 1$ while $g(\gamma) \in \lambda$ gives $g(\gamma) + 1 \subseteq \lambda$, making $\lambda = g(\gamma) + 1$ a successor. [L1, L2, L3, L4, L8]

1.4 With $\lambda$, $\beta$, $g$ as above, $\beta$ is a cardinal: if $\mu = \lvert \beta\rvert \in \beta$ then a bijection $h : \mu \to \beta$ makes $g \circ h : \mu \to \lambda$ a map with the same range as $g$, hence cofinal, so the least length would be at most $\mu \in \beta$, contradicting $\beta = \operatorname{cf}(\lambda)$; so $\lvert \beta\rvert = \beta$ and [L5] applies. [L1, L2, L5, L8]

2.1 Claim (c): $\beta$ is an infinite cardinal by steps 1.3, 1.4 and [L9]; and writing $\gamma = \operatorname{cf}(\beta)$, step 1.1 gives $\gamma \le \beta$, while a cofinal $k : \gamma \to \beta$ makes $g \circ k : \gamma \to \lambda$ cofinal — given $\zeta \in \lambda$ pick $\xi \in \beta$ with $\zeta \le g(\xi)$, then $\rho \in \gamma$ with $\xi \le k(\rho)$, and $g(\xi) \le g(k(\rho))$ by [L8] — so $\beta = \operatorname{cf}(\lambda) \le \gamma$ and therefore $\operatorname{cf}(\operatorname{cf}(\lambda)) = \operatorname{cf}(\lambda)$. [step 1.1, step 1.3, step 1.4, L1, L2, L8, L9]

3.1 Claim (d): a cofinal $C \subseteq \lambda$ is a set of ordinals, well ordered by $\in$ by [L3], with order type $\delta$ and an order isomorphism $e : \delta \to C$ by [L7]; then $e$ is a cofinal map $\delta \to \lambda$, so $\beta \le \delta$ by [L1], and applying [L5] and [L6] gives $\beta = \lvert \beta\rvert \le \lvert \delta\rvert = \lvert C\rvert$ using step 2.1; conversely $g[\beta]$ is cofinal with $\lvert g[\beta]\rvert = \beta$, since $g$ is injective by [L8]. [step 2.1, L1, L2, L3, L5, L6, L7, L8]

4.1 Claims (a), (b), (c) and (d) are established, in ZF. [step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

**Why (c) is restricted to limit ordinals.** At $0$ and at a successor the cofinality is $0$ or $1$, neither of which is an infinite cardinal, and the regular/singular vocabulary is not applied there. Since every infinite cardinal is a limit ordinal, the restriction costs nothing where the notion is used.

**What clause (d) is for.** It converts a cofinality question into a counting question: to show $\operatorname{cf}(\lambda) \le \kappa$ it suffices to exhibit **any** cofinal subset of size $\kappa$, with no attention to its order type. That is how every cofinality on the companion page is computed, and the attainment half is what makes the bound sharp.

**Where the strictly increasing witness is spent.** Twice, and both times essentially: in step 1.3, to know that a witness of successor length would have a largest value; and in step 2.1, to know that $g$ preserves $\le$, without which the composite $g \circ k$ need not be cofinal. That is why [[lem-cofinality-is-well-defined]] proves claim (b) rather than stopping at the existence of a least length.
