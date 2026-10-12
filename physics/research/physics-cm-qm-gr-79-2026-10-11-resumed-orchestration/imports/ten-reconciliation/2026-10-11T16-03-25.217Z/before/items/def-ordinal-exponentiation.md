---
id: def-ordinal-exponentiation
kind: definition
title: "Ordinal exponentiation $\\alpha^{\\beta}$, with the conventions $\\alpha^{0} = 1$ and $0^{0} = 1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-ordinal-exponentiation-well-defined, def-ordinal-multiplication, def-ordinal-addition, def-ordinal, def-limit-ordinal]
justified_by: []
aliases: [def-ordinal-power]
landmark: true
short: "$\\alpha^{0}=1$, $\\alpha^{\\beta^{+}}=\\alpha^{\\beta}\\cdot\\alpha$, sup over $0<\\beta<\\lambda$"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Definition

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]). The **power**
$\alpha^{\beta}$ is defined by recursion on $\beta$, in the three cases of
[[def-limit-ordinal]]:

$$\alpha^{0} = 1, \qquad \alpha^{\beta^{+}} = \alpha^{\beta} \cdot \alpha, \qquad \alpha^{\lambda} = \bigcup\{\, \alpha^{\beta} : 0 < \beta < \lambda \,\} \quad (\lambda \text{ a limit ordinal}),$$

with $\cdot$ the ordinal multiplication of [[def-ordinal-multiplication]]. That
exactly one operation satisfies these three clauses, and that all its values are
ordinals, is [[cor-ordinal-exponentiation-well-defined]], proved immediately
above.

The first clause applies to every $\alpha$, so in particular $0^{0} = 1$.

## Remarks

- **The limit clause ranges over $0 < \beta < \lambda$, not over $\beta < \lambda$,
  and the restriction is load bearing.** The unrestricted union would include
  the value $\alpha^{0} = 1$, and at $\alpha = 0$ that single stray term flips
  the answer: it would make $0^{\omega} = 1$ instead of $0$. With the
  restriction, one formula is correct for every $\alpha$ at once and no case
  split on $\alpha$ is needed. [[cor-ordinal-exponentiation-well-defined]]
  carries the details of that restriction;
  [[thm-ordinal-exponent-laws]] proves the exponent law that the unrestricted
  clause would falsify. For $\alpha \ge 1$ the two clauses agree, because then
  $\alpha^{0} = 1 \le \alpha = \alpha^{1}$ and $1 < \lambda$, so dropping the
  term at $\beta = 0$ does not lower the supremum.

- **$\alpha^{1} = \alpha$.** Indeed
  $\alpha^{1} = \alpha^{0^{+}} = \alpha^{0} \cdot \alpha = 1 \cdot \alpha$, and
  $1 \cdot \alpha = \alpha$ is proved in
  [[thm-ordinal-arithmetic-monotonicity]].

- **This is not cardinal exponentiation.** The ordinal $2^{\omega}$ is $\omega$,
  computed in [[fs-the-ordinal-two-to-the-omega-is-uncountable]]; the *cardinal*
  power of $2$ by the size of $\mathbb{N}$ is the size of
  $\mathcal{P}(\mathbb{N})$, which is uncountable. The two operations share one
  notation and are not the same function.
  [[rem-ordinal-versus-cardinal-exponentiation]] is the standing warning, and
  cardinal exponentiation is not defined at this point in the reading order; it
  is introduced later, on Cardinal Arithmetic, Cofinality and the Alephs.

- **Notation and precedence.** $\alpha^{\beta} \cdot \gamma$ means
  $(\alpha^{\beta}) \cdot \gamma$, and $\alpha^{\beta} + \gamma$ means
  $(\alpha^{\beta}) + \gamma$; powers bind tightest, then products, then sums.
  The Cantor normal form of [[thm-cantor-normal-form]] is written with that
  convention throughout.

- **The base is a parameter, the exponent is what the recursion runs on.** As
  with [[def-ordinal-addition]] and [[def-ordinal-multiplication]], the
  recursion is on the right argument, and the operation is correspondingly
  asymmetric: $\alpha \mapsto \alpha^{\beta}$ and $\beta \mapsto \alpha^{\beta}$
  behave quite differently, and only the second is continuous at limits.
