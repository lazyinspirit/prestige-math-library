---
id: thm-ordinal-division-with-remainder
kind: theorem
title: "For $\\alpha > 0$ every ordinal $\\beta$ is $\\alpha \\cdot \\xi + \\rho$ with $\\rho < \\alpha$, in exactly one way"
status: draft
origin: session
deps: [def-ordinal-multiplication, def-ordinal-addition, thm-ordinal-subtraction, thm-ordinal-arithmetic-monotonicity, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, def-ordinal]
justified_by: []
aliases: [thm-ordinal-division-algorithm]
landmark: true
short: "$\\beta = \\alpha\\xi+\\rho$, $\\rho<\\alpha$, uniquely"
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
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]) with $\alpha > 0$. Then
there are **unique** ordinals $\xi$ and $\rho$ with

$$\beta = \alpha \cdot \xi + \rho \qquad \text{and} \qquad \rho < \alpha.$$

$\xi$ is the **quotient** and $\rho$ the **remainder** of $\beta$ on division by
$\alpha$; concretely, $\xi$ is the largest ordinal with
$\alpha \cdot \xi \le \beta$, and $\rho$ is what [[thm-ordinal-subtraction]]
returns from $\alpha \cdot \xi \le \beta$.

**No choice principle is used.**

## Facts & Assumptions

**Given:** Ordinals $\alpha > 0$ and $\beta$, with $+$ and $\cdot$ as in [[def-ordinal-addition]] and [[def-ordinal-multiplication]]. For a set $A$ of ordinals, $\sup A = \bigcup A$ is its least upper bound.

[L1] $\alpha \cdot 0 = 0$, $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$, and $\alpha \cdot \lambda = \sup\{\alpha \cdot \zeta : \zeta \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-multiplication]]).

[L2] From [[thm-ordinal-arithmetic-monotonicity]]: $1 \cdot \mu = \mu$ and $\mu + 0 = \mu$ (claim (a)); $\mu < \nu$ implies $\alpha + \mu < \alpha + \nu$, left cancellation for $+$, and $\alpha \le \alpha + \mu$ (claim (b)); for $\alpha > 0$, $\mu < \nu$ implies $\alpha\mu < \alpha\nu$, hence $\mu \le \nu$ implies $\alpha\mu \le \alpha\nu$ (claim (d)); and $\mu \le \nu$ implies $\mu\gamma \le \nu\gamma$ (claim (e)).

[L3] If $\mu \le \nu$ there is exactly one $\gamma$ with $\mu + \gamma = \nu$ ([[thm-ordinal-subtraction]]).

[L4] Every nonempty set of ordinals has an $\in$-least element, and exactly one of $\mu \in \nu$, $\mu = \nu$, $\nu \in \mu$ holds ([[lem-ordinal-trichotomy]]).

[L5] $\mu^{+}$ is an ordinal, $\mu \subseteq \nu$ if and only if $\mu \in \nu$ or $\mu = \nu$, and $\mu \notin \mu$ (claims (b), (c), (f) of [[lem-ordinal-basics]]); consequently $\mu < \nu$ if and only if $\mu^{+} \le \nu$.

[L6] Every ordinal is exactly one of $0$, a successor, or a limit ([[def-limit-ordinal]]).

## Proof

**Proof technique:** direct.

1.1 $\beta < \alpha \cdot \beta^{+}$: since $\alpha > 0$ gives $1 \le \alpha$, claim (e) of [L2] gives $\beta^{+} = 1 \cdot \beta^{+} \le \alpha \cdot \beta^{+}$, and $\beta \in \beta^{+}$. [L1, L2, L5]

1.2 Uniqueness: suppose $\alpha \xi_1 + \rho_1 = \alpha \xi_2 + \rho_2 = \beta$ with $\rho_1, \rho_2 < \alpha$; if $\xi_1 < \xi_2$ then $\xi_1^{+} \le \xi_2$ by [L5], so $\alpha \xi_1 + \alpha = \alpha \xi_1^{+} \le \alpha \xi_2 \le \alpha \xi_2 + \rho_2 = \beta = \alpha \xi_1 + \rho_1 < \alpha \xi_1 + \alpha$ by [L1] and [L2], which [L5] forbids; by symmetry $\xi_2 < \xi_1$ is impossible too, so $\xi_1 = \xi_2$ by [L4] and then $\rho_1 = \rho_2$ by left cancellation. [L1, L2, L4, L5]

2.1 The collection $C = \{\eta \in (\beta^{+})^{+} : \beta \in \alpha \cdot \eta\}$ is a set of ordinals by Separation, and it is nonempty, because $\beta^{+} \in (\beta^{+})^{+}$ and $\beta \in \alpha \cdot \beta^{+}$ by step 1.1. [step 1.1, L5]

3.1 Let $\eta_0$ be the $\in$-least element of $C$, which exists by [L4]. [step 2.1, L4]

4.1 $\eta_0$ is a successor: it is not $0$, since $\alpha \cdot 0 = 0$ and $\beta \notin 0$; and it is not a limit $\lambda$, for then every $\zeta \in \lambda$ would lie in $(\beta^{+})^{+}$ by transitivity and outside $C$ by minimality, so $\alpha\zeta \le \beta$ by [L4], making $\beta$ an upper bound of $\{\alpha\zeta : \zeta \in \lambda\}$ and hence $\alpha \cdot \lambda \le \beta$ by [L1], contradicting $\beta \in \alpha \cdot \lambda$; so $\eta_0 = \xi^{+}$ for a unique ordinal $\xi$ by [L6]. [step 3.1, L1, L4, L5, L6]

5.1 With that $\xi$: $\xi \in \eta_0 \subseteq (\beta^{+})^{+}$ and $\xi \notin C$ by minimality of $\eta_0$, so $\alpha \xi \le \beta$ by [L4]; and $\beta \in \alpha \cdot \xi^{+} = \alpha \xi + \alpha$ because $\eta_0 = \xi^{+} \in C$. [step 4.1, step 3.1, L1, L4, L5]

6.1 By [L3] applied to $\alpha \xi \le \beta$ there is exactly one $\rho$ with $\alpha \xi + \rho = \beta$, and $\alpha \xi + \rho = \beta < \alpha \xi + \alpha$ forces $\rho < \alpha$, since $\alpha \le \rho$ would give $\alpha \xi + \alpha \le \alpha \xi + \rho$ by [L2]. [step 5.1, L2, L3, L4]

7.1 Existence is step 6.1 and uniqueness is step 1.2, so $\beta = \alpha \cdot \xi + \rho$ with $\rho < \alpha$ in exactly one way. [step 6.1, step 1.2] ∎

## Remarks

**Why the least $\eta$ with $\beta < \alpha \cdot \eta$ has to be a successor.** Because $\eta \mapsto \alpha \cdot \eta$ is continuous at limits: at a limit stage its value is the supremum of the earlier values, so it cannot overtake $\beta$ for the first time there. That is claim (f) of [[thm-ordinal-arithmetic-monotonicity]] in the form used at step 4.1, and it is the only place the limit clause of [[def-ordinal-multiplication]] is used.

**The bound $(\beta^{+})^{+}$ is a Separation device.** "The least $\eta$ with $\beta < \alpha\eta$" quantifies over all ordinals, which is not a set; step 1.1 supplies a specific witness inside $(\beta^{+})^{+}$, so the collection can be cut out of a set. Nothing depends on the particular bound.

**Uniqueness is proved before existence, and independently of it.** Step 1.2 uses only the monotonicity laws, so it applies to any two representations whatever their origin. This is the order used again in [[thm-cantor-normal-form]], where uniqueness is what licenses the definite article in "*the* Cantor normal form".

**The remainder can be $0$ and the quotient can be $0$.** If $\beta < \alpha$ then $\xi = 0$ and $\rho = \beta$; if $\alpha$ divides $\beta$ exactly then $\rho = 0$. Neither case is excluded, and neither needs separate treatment.
