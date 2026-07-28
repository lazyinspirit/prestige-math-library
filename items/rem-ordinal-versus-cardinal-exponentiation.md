---
id: rem-ordinal-versus-cardinal-exponentiation
kind: remark
title: "Ordinal $\\alpha^{\\beta}$ and cardinal $\\kappa^{\\lambda}$ are different operations that share one notation"
status: published
origin: session
deps: [def-ordinal-exponentiation, fs-the-ordinal-two-to-the-omega-is-uncountable, thm-cantor-powerset, thm-r-uncountable, def-cardinal, def-countable, rem-continuum-hypothesis]
justified_by: []
aliases: []
landmark: false
short: "$2^{\\omega} = \\omega$ as ordinals; $\\mathcal{P}(\\mathbb{N})$ is uncountable"
verification:
  precheck: n/a
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "Cardinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number"
    - title: "Cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
pipeline_run: null
---

## Remark

The notation $\alpha^{\beta}$ is used in set theory for **two different
operations**, and on this page it always means the first of them.

**Ordinal exponentiation**, the one defined here
([[def-ordinal-exponentiation]]), is built by transfinite recursion on the
exponent, with a supremum at limits. Its value depends on the ordinals
$\alpha$ and $\beta$ as *order types*, and the operation is designed so that
$\beta \mapsto \alpha^{\beta}$ is strictly increasing and continuous for
$\alpha > 1$.

**Cardinal exponentiation** is a different operation, defined on cardinals
([[def-cardinal]]) by counting functions: $\kappa^{\lambda}$ is the number of
functions from a set of size $\lambda$ to a set of size $\kappa$. It is not
defined at this point in the reading order; it is introduced later, on Cardinal
Arithmetic, Cofinality and the Alephs. It is named in this remark only to warn
the reader off the identification.

**The two disagree at the smallest interesting input.** As ordinals,

$$2^{\omega} = \omega,$$

computed in [[fs-the-ordinal-two-to-the-omega-is-uncountable]] from the limit
clause: every $2^{n}$ with $n \in \omega$ is again a natural number, so the
supremum of the tower is $\omega$ itself, and the result is countably infinite
([[def-countable]]). The cardinal reading of the same symbols asks instead for
the number of functions $\mathbb{N} \to \{0,1\}$, that is for the size of
$\mathcal{P}(\mathbb{N})$, and **$\mathcal{P}(\mathbb{N})$ is uncountable**:
there is no surjection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$ at all, by
[[thm-cantor-powerset]]. So under one reading the answer is the smallest
infinite ordinal, and under the other it is a set strictly larger than
$\mathbb{N}$.

**Why this remark is here rather than in a footnote.** A reader who knows that
"$2^{\aleph_0}$ is uncountable" and then meets $2^{\omega}$ on this page has
every reason to expect an uncountable ordinal, and would conclude that something
above has gone wrong. Nothing has: the two expressions are values of two
different functions. This page writes $\omega$ for the least infinite ordinal
throughout and $\omega_1$ for the first uncountable one, and never writes
$\aleph_0$ or $\aleph_1$, precisely so that an ordinal expression here is never
silently read as a cardinal one. Where the aleph subscript notation appears
elsewhere in this library it is inside a statement *about* cardinal arithmetic,
never inside an ordinal computation; no page of the ordinal development uses it.

**What else is nearby, and what it is not.** $\mathbb{R}$ is uncountable too
([[thm-r-uncountable]]), by an argument that has nothing to do with power sets;
and whether any set sits strictly between $\mathbb{N}$ and
$\mathcal{P}(\mathbb{N})$ in size is the continuum hypothesis, independent of
ZFC ([[rem-continuum-hypothesis]]). None of that is a statement about ordinal
arithmetic, and none of it bears on the value $2^{\omega} = \omega$ proved on
this page.

**A rule of thumb that is safe here.** If the exponent is being used to index a
transfinite recursion, the exponentiation is ordinal. If it is being used to
count functions, it is cardinal. On this page it is always the first, because
the second is not defined at this point in the reading order.
