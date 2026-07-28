---
id: def-aleph-and-beth-hierarchies
kind: definition
title: "The successor cardinal $\\kappa^{+}$, the alephs $\\aleph_\\alpha$, the beths $\\beth_\\alpha$, successor and limit cardinals, and the identifications $\\aleph_0 = \\omega$ and $\\aleph_1 = \\omega_1$"
status: published
origin: session
deps: [cor-the-aleph-and-beth-hierarchies-are-well-defined, lem-successor-cardinal-exists, thm-hartogs, def-cardinal, def-cardinal-arithmetic, def-limit-ordinal, def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal, def-ordinal, def-countable, rem-ordinal-versus-cardinal-exponentiation]
justified_by: []
aliases: [def-aleph, def-beth, def-successor-cardinal]
landmark: true
short: "$\\aleph_\\alpha$, $\\beth_\\alpha$, $\\kappa^{+}$"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Aleph number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Aleph_number"
    - title: "Beth number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Beth_number"
    - title: "Successor cardinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Successor_cardinal"
pipeline_run: null
---

## Definition

**The successor cardinal.** For a cardinal $\kappa$ ([[def-cardinal]]) write

$$\kappa^{+} \;:=\; \aleph(\kappa),$$

the Hartogs number of $\kappa$ ([[thm-hartogs]]). By
[[lem-successor-cardinal-exists]] this is the least cardinal strictly above
$\kappa$, and its existence is a theorem of ZF.

> **Notation rule, in force on this page and its companion.** The superscript
> $+$ means the **successor cardinal** only on a cardinal letter
> $\kappa, \lambda, \mu$ or an aleph. On an ordinal letter
> $\alpha, \beta, \gamma, \xi, \eta$ the superscript $+$ keeps its published
> meaning, the **ordinal successor** $\alpha^{+} = \alpha \cup \{\alpha\}$ of
> [[def-ordinal]]. The two never agree on an infinite cardinal: $\kappa \cup \{\kappa\}$
> is a successor ordinal and therefore not a cardinal at all, while $\kappa^{+}$
> is much larger. To keep the reader out of the collision, everything below
> writes $\alpha + 1$ for the ordinal successor and reserves $\kappa^{+}$ for the
> cardinal one.

**The alephs.** By [[cor-the-aleph-and-beth-hierarchies-are-well-defined]] there
is exactly one operation $\alpha \mapsto \aleph_\alpha$, defined at every ordinal
([[def-ordinal]]), with

$$\aleph_0 = \omega, \qquad \aleph_{\alpha+1} = \aleph_\alpha^{+}, \qquad \aleph_\lambda = \sup\{\, \aleph_\alpha : \alpha \in \lambda \,\} \ \ (\lambda \text{ a limit ordinal}),$$

the limit clause being taken over limit ordinals in the sense of
[[def-limit-ordinal]], and $\sup$ being $\bigcup$ applied to a set of ordinals.
Every $\aleph_\alpha$ is an infinite cardinal, the operation is strictly
increasing, and $\alpha \le \aleph_\alpha$; all of this is that corollary, and all
of it is ZF.

**The beths**, assuming the Axiom of Choice, are the parallel operation

$$\beth_0 = \omega, \qquad \beth_{\alpha+1} = 2^{\beth_\alpha}, \qquad \beth_\lambda = \sup\{\, \beth_\alpha : \alpha \in \lambda \,\} \ \ (\lambda \text{ a limit ordinal}),$$

with $2^{\kappa}$ the cardinal power of [[def-cardinal-arithmetic]].

**Successor and limit cardinals.** An infinite cardinal $\kappa$ is a
**successor cardinal** when $\kappa = \lambda^{+}$ for some infinite cardinal
$\lambda$, and a **limit cardinal** otherwise. So $\aleph_{\alpha+1}$ is a
successor cardinal for every $\alpha$, and $\aleph_0 = \omega$ is a limit
cardinal, there being no infinite cardinal below it.

**The two identifications.**

$$\aleph_0 = \omega, \qquad \aleph_1 = \omega_1 .$$

The first is the base clause. The second holds because
$\aleph_1 = \aleph_0^{+} = \aleph(\omega)$, and $\aleph(\omega)$ is by definition
the first uncountable ordinal $\omega_1$ ([[def-first-uncountable-ordinal]]);
[[thm-omega-one-is-the-least-uncountable-ordinal]] independently confirms that
$\omega_1$ is a cardinal, is uncountable ([[def-countable]]), and has every
ordinal below it at most countable, which is the same thing said in the language
of the ordinal development.

## Remarks

**Why the aleph notation is introduced at all, when $\omega$ and $\omega_1$
already exist.** The subscript is an *ordinal index into the cardinals*: it makes
"the $\alpha$-th infinite cardinal" a term of the language, so that statements
such as "$\aleph_{\alpha+1}$ is regular" and "$\aleph_\omega$ is singular" can be
quantified over $\alpha$. The published ordinal development deliberately avoids
the notation, writing $\omega$ and $\omega_1$ throughout, precisely so that an
ordinal computation there is never silently read as a cardinal one; that
convention is recorded in [[rem-ordinal-versus-cardinal-exponentiation]] and is
not disturbed here. On this page the reverse convention is in force: an aleph is
always a cardinal, and an exponential is always the cardinal one.

**$\aleph$ with an argument and $\aleph$ with a subscript are different things.**
$\aleph(A)$ is the Hartogs number of a **set** $A$, defined for every set in ZF
([[thm-hartogs]]); $\aleph_\alpha$ is the $\alpha$-th infinite cardinal. They
agree in the one case that matters, $\aleph(\aleph_\alpha) = \aleph_{\alpha+1}$,
which is the successor clause, and the same symbol is used because the notation
is Hartogs' own.

**Where the beths sit.** $\beth_0 = \aleph_0$, by the two base clauses. The two
hierarchies then climb by different rules: the aleph step takes the **least**
cardinal strictly above, and the beth step takes the power. Whether they
nevertheless agree at every index is the generalised continuum hypothesis, which
is not decided by the axioms in use here and is asserted nowhere on this page or
its companion.
