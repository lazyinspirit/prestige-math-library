---
id: thm-ordinal-subtraction
kind: theorem
title: "For $\\alpha \\le \\beta$ there is exactly one ordinal $\\gamma$ with $\\alpha + \\gamma = \\beta$"
status: published
origin: session
deps: [def-ordinal-addition, thm-ordinal-arithmetic-monotonicity, lem-ordinal-sum-as-an-order-type, thm-mostowski-collapse, def-initial-segment, def-well-order, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal]
justified_by: []
aliases: [thm-left-subtraction-of-ordinals]
landmark: false
short: "unique $\\gamma$ with $\\alpha+\\gamma=\\beta$, namely $\\mathrm{ot}(\\beta \\setminus \\alpha)$"
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
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]) with $\alpha \le \beta$.
Then there is **exactly one** ordinal $\gamma$ with

$$\alpha + \gamma = \beta,$$

namely the order type of the set $\beta \setminus \alpha$ of ordinals lying in
$\beta$ but not in $\alpha$, taken with the membership order
([[thm-mostowski-collapse]]).

This is subtraction **on the left**: the unknown sits on the right of the $+$
sign, which is the side on which ordinal addition is strictly increasing and
cancellative ([[thm-ordinal-arithmetic-monotonicity]]). Subtraction on the other
side does not exist in general: there is no ordinal $\gamma$ at all with
$\gamma + \omega = \omega + 1$, since $\gamma + \omega$ is a limit ordinal for
every $\gamma$ while $\omega + 1$ is a successor.

**No choice principle is used.**

## Facts & Assumptions

**Given:** Ordinals $\alpha \le \beta$, that is $\alpha \subseteq \beta$. Every subset of a well-order carries the inherited order, again a well-order ([[def-well-order]]).

[L1] $\mathrm{ot}(W) = \mathrm{ot}(I) + \mathrm{ot}(W \setminus I)$ for every well-order $W$ and every initial segment $I$ of it (claim (b) of [[lem-ordinal-sum-as-an-order-type]]).

[L2] Every well-order is order isomorphic to exactly one ordinal, its order type ([[thm-mostowski-collapse]]).

[L3] An initial segment is a downward closed subset ([[def-initial-segment]]); an ordinal is a transitive set strictly well ordered by $\in$, so it is a well-order ([[def-ordinal]], [[def-well-order]]).

[L4] $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or $\alpha = \beta$ ([[lem-ordinal-basics]], claim (f)); exactly one of $\mu \in \nu$, $\mu = \nu$, $\nu \in \mu$ holds ([[lem-ordinal-trichotomy]]).

[L5] Left cancellation: $\alpha + \gamma = \alpha + \gamma'$ implies $\gamma = \gamma'$; and $\alpha + \lambda$ is a limit ordinal whenever $\lambda$ is (claims (b) and (g) of [[thm-ordinal-arithmetic-monotonicity]], with $+$ as in [[def-ordinal-addition]]).

## Proof

**Proof technique:** direct.

1.1 $\alpha$ is an initial segment of the well-order $(\beta, \in)$: it is a subset of $\beta$ because $\alpha \le \beta$, and it is downward closed in $\beta$ because $x \in y \in \alpha$ gives $x \in \alpha$ by transitivity of $\alpha$. [L3, L4]

1.2 For an ordinal $\mu$ the identity is an order isomorphism of $\mu$ onto $\mu$, so $\mathrm{ot}(\mu) = \mu$ by the uniqueness in [L2]. [L2, L3]

2.1 Put $\gamma = \mathrm{ot}(\beta \setminus \alpha)$, which exists by [L2] since $\beta \setminus \alpha$ is a subset of the well-order $\beta$; then [L1] applied to $W = \beta$ and $I = \alpha$ gives $\beta = \mathrm{ot}(\beta) = \mathrm{ot}(\alpha) + \mathrm{ot}(\beta \setminus \alpha) = \alpha + \gamma$. [step 1.1, step 1.2, L1, L2, L3]

3.1 If also $\alpha + \gamma' = \beta$ then $\alpha + \gamma' = \alpha + \gamma$, so $\gamma' = \gamma$ by [L5]; hence exactly one such $\gamma$ exists, and it is $\mathrm{ot}(\beta \setminus \alpha)$. [step 2.1, L5] ∎

## Remarks

**The proof is a picture.** $\beta$ is a copy of $\alpha$ followed by whatever is left, and "whatever is left" is $\beta \setminus \alpha$. Clause (b) of [[lem-ordinal-sum-as-an-order-type]] says exactly that the order type of a well-order split at an initial segment is the sum of the two order types, so no recursion is needed at all.

**Why the hypothesis $\alpha \le \beta$ cannot be dropped.** $\alpha \le \alpha + \gamma$ always holds (claim (b) of [[thm-ordinal-arithmetic-monotonicity]]), so $\alpha + \gamma = \beta$ forces $\alpha \le \beta$. The theorem is therefore sharp: the equation is solvable exactly when the hypothesis holds.

**The other-sided equation.** The claim in the Statement that no $\gamma$ satisfies $\gamma + \omega = \omega + 1$ uses only that $\gamma + \omega$ is a limit ordinal, which is claim (g) of [[thm-ordinal-arithmetic-monotonicity]], and that $\omega + 1 = \omega^{+}$ is a successor. Right subtraction, when it exists, is also not unique: $0 + \omega = 1 + \omega = \omega$, so the equation $\gamma + \omega = \omega$ has at least two solutions ([[fs-ordinal-addition-is-strictly-monotone-in-the-left-argument]]).

**Where it is used.** Existence of the remainder in [[thm-ordinal-division-with-remainder]] is a direct application, and that theorem in turn is what extracts the coefficients of a Cantor normal form ([[thm-cantor-normal-form]]).
