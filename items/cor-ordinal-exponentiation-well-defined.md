---
id: cor-ordinal-exponentiation-well-defined
kind: corollary
title: "Ordinal exponentiation exists and is unique, with the limit clause taken over $0 < \\beta < \\lambda$ so that $0^{\\lambda} = 0$"
status: published
origin: session
deps: [lem-recursion-on-the-ordinals, def-ordinal-multiplication, cor-ordinal-multiplication-well-defined, def-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "one ordinal-valued power, limit clause over $0<\\beta<\\lambda$"
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

Fix an ordinal $\alpha$ ([[def-ordinal]]). There is **exactly one** class
function $\beta \mapsto \mathrm{e}_\alpha(\beta)$, defined at every ordinal
$\beta$, satisfying the three clauses

$$\mathrm{e}_\alpha(0) = 1, \qquad \mathrm{e}_\alpha(\beta^{+}) = \mathrm{e}_\alpha(\beta) \cdot \alpha, \qquad \mathrm{e}_\alpha(\lambda) = \bigcup\{\, \mathrm{e}_\alpha(\beta) : \beta \in \lambda \text{ and } \beta \ne 0 \,\} \ \ (\lambda \text{ a limit ordinal}),$$

with $\cdot$ the ordinal multiplication of [[def-ordinal-multiplication]], and
every value $\mathrm{e}_\alpha(\beta)$ is an ordinal.

**The limit clause runs over $0 < \beta < \lambda$, and that restriction is not
cosmetic.** With the unrestricted clause
$\mathrm{e}_\alpha(\lambda) = \bigcup\{\mathrm{e}_\alpha(\beta) : \beta \in \lambda\}$
the value $\mathrm{e}_0(0) = 1$ would be one of the sets united, so
$\mathrm{e}_0(\omega)$ would come out $\ge 1$ and in fact equal to $1$, whereas
$0$ raised to a limit must be $0$. With the restriction above the single formula
is correct for **every** $\alpha$, including $\alpha = 0$, and no case split on
$\alpha$ is needed. For $\alpha \ge 1$ the restriction changes nothing, since
then $\mathrm{e}_\alpha(0) = 1 \le \alpha = \mathrm{e}_\alpha(1)$ and $1 \in \lambda$.

This is the well-definedness obligation discharged before ordinal
exponentiation is written down; the operation itself is named in the
definition that follows. **The proof is a theorem of ZF and uses no
choice principle.**

## Facts & Assumptions

**Given:** A fixed ordinal $\alpha$ and the axioms of ZF. No choice principle is assumed. For a function $h$, $\operatorname{ran}(h)$ is its range, and $h \restriction X$ its restriction to $X$.

[L1] Recursion along the ordinals: for a class function $G$ assigning a set to every function whose domain is an ordinal there is exactly one class function $F$, defined at every ordinal, with $F(\beta) = G(F \restriction \beta)$ for all $\beta$ ([[lem-recursion-on-the-ordinals]]).

[L2] Every ordinal is exactly one of: $0$, a successor ordinal $\delta^{+}$ with $\delta$ uniquely determined, or a limit ordinal ([[def-limit-ordinal]]).

[L3] $\bigcup A$ is an ordinal for every set $A$ of ordinals, and is its least upper bound (claim (e) of [[lem-ordinal-basics]]).

[L4] $\mu \cdot \alpha$ is an ordinal whenever $\mu$ and $\alpha$ are ([[def-ordinal-multiplication]], [[cor-ordinal-multiplication-well-defined]]).

[L5] Every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]), and $\{\xi \in \beta_0^{+} : P(\xi)\}$ is such a set whenever $P(\beta_0)$ holds and $P$ is a property of ordinals.

## Proof

**Proof technique:** direct.

1.1 Define a class function $G$ on functions $h$ whose domain is an ordinal $\beta$ by: $G(h) = 1$ if $\beta = 0$; $G(h) = h(\delta) \cdot \alpha$ if $\beta = \delta^{+}$; and $G(h) = \bigcup \operatorname{ran}(h \restriction (\beta \setminus \{0\}))$ if $\beta$ is a limit ordinal. [construct]

1.2 The three cases are exhaustive and mutually exclusive by [L2], and $\delta$ is determined by $\beta = \delta^{+}$, so $G(h)$ is a well-determined set for every such $h$ and the rule is a formula. [L2, L4]

2.1 By [L1] there is exactly one class function $\mathrm{e}_\alpha$, defined at every ordinal, with $\mathrm{e}_\alpha(\beta) = G(\mathrm{e}_\alpha \restriction \beta)$ for every ordinal $\beta$. [step 1.1, step 1.2, L1]

3.1 Unwinding the three cases of $G$: $\mathrm{e}_\alpha(0) = G(\varnothing) = 1$; $\mathrm{e}_\alpha(\delta^{+}) = (\mathrm{e}_\alpha \restriction \delta^{+})(\delta) \cdot \alpha = \mathrm{e}_\alpha(\delta) \cdot \alpha$, since $\delta \in \delta^{+}$; and for a limit $\lambda$, $\mathrm{e}_\alpha(\lambda) = \bigcup\{\mathrm{e}_\alpha(\beta) : \beta \in \lambda \text{ and } \beta \ne 0\}$, because the domain of $\mathrm{e}_\alpha \restriction \lambda$ is $\lambda$ and removing $0$ from it removes exactly the value at $0$. [step 2.1, step 1.1]

4.1 Every value is an ordinal: were $\mathrm{e}_\alpha(\beta_0)$ not an ordinal for some $\beta_0$, [L5] would give a least $\mu \in \beta_0^{+}$ with $\mathrm{e}_\alpha(\mu)$ not an ordinal, and each of the three cases refutes that, since $1$ is an ordinal, $\mathrm{e}_\alpha(\delta^{+}) = \mathrm{e}_\alpha(\delta) \cdot \alpha$ is an ordinal by [L4] because $\delta \in \mu$ makes $\mathrm{e}_\alpha(\delta)$ an ordinal, and at a limit the set united is a set of ordinals, so its union is an ordinal by [L3]. [step 3.1, L2, L3, L4, L5]

4.2 Uniqueness: a class function $\mathrm{t}$ defined at every ordinal and satisfying the three displayed clauses satisfies $\mathrm{t}(\beta) = G(\mathrm{t} \restriction \beta)$ for every $\beta$, one case at a time, so $\mathrm{t} = \mathrm{e}_\alpha$ by the uniqueness half of [L1]. [step 3.1, step 2.1, L1, L2]

5.1 Hence exactly one class function on the ordinals satisfies the three clauses, and all its values are ordinals. [step 4.1, step 4.2, step 3.1] ∎

## Remarks

**The value at $\alpha = 0$, worked out, and what the naive clause breaks.** By the clauses, $\mathrm{e}_0(0) = 1$ and $\mathrm{e}_0(1) = \mathrm{e}_0(0) \cdot 0 = 1 \cdot 0 = 0$, and then $\mathrm{e}_0(\beta) = 0$ for every $\beta > 0$; at a limit $\lambda$ the restricted union is $\bigcup\{0\} = 0$, as it should be. Had the union run over all $\beta \in \lambda$ it would have contained $\mathrm{e}_0(0) = 1$, giving $\mathrm{e}_0(\omega) = \bigcup\{1, 0\} = 1$. That is not merely unattractive: it falsifies the exponent law $\alpha^{\beta + \gamma} = \alpha^{\beta} \cdot \alpha^{\gamma}$ of [[thm-ordinal-exponent-laws]] at $\alpha = 0$, $\beta = 1$, $\gamma = \omega$, since $1 + \omega = \omega$ makes the left side $0^{\omega} = 1$ while the right side is $0^{1} \cdot 0^{\omega} = 0 \cdot 1 = 0$. Many texts avoid the issue by splitting the definition into a case $\alpha = 0$ and a case $\alpha > 0$; the restricted clause is the same definition without the split.

**The convention $0^{0} = 1$.** The clause $\mathrm{e}_\alpha(0) = 1$ applies to every $\alpha$, so $0^{0} = 1$ here. This is the convention that makes the successor clause uniform, and it is the one used in [[def-ordinal-exponentiation]] and everywhere below.

**This is ordinal, not cardinal, exponentiation.** The two operations share the notation $\alpha^{\beta}$ and disagree already at $2^{\omega}$, which is $\omega$ here. [[rem-ordinal-versus-cardinal-exponentiation]] sets out the difference; [[fs-the-ordinal-two-to-the-omega-is-uncountable]] computes the value.
