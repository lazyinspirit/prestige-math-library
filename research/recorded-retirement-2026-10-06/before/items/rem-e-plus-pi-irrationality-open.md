---
id: rem-e-plus-pi-irrationality-open
kind: remark
title: "Is $e + \\pi$ irrational? (open)"
status: published
origin: session
proved_here: false
deps: [rem-transcendence-of-pi]
justified_by: []
forward_refs: [fs-sqrt2-rational]
aliases: []
landmark: true
short: "Open: nobody knows whether e + π is irrational"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Transcendental number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Transcendental_number"
    - title: "Schanuel's conjecture (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Schanuel%27s_conjecture"
    - title: "Gelfond's constant (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Gelfond%27s_constant"
    - title: "Pi (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pi"
pipeline_run: null
---

## Statement

**Question.** Is $e + \pi$ irrational?

**Status: open.** No proof and no disproof is known. The same is true of
$e\pi$, of $e - \pi$, of $e/\pi$, of $\pi^{e}$, of $\pi^{\pi}$ and of $e^{e}$:
for none of these is it known whether the number is rational, let alone whether
it is transcendental. This is not a gap in this library's prerequisites. It is a
gap in the subject.

## Remarks

**Not proved in this library, and not provable anywhere at present.** Nothing on
any page here depends on the value or the arithmetic nature of $e + \pi$.

**What is known, and what would settle it.** Both constituents are settled
individually: $e$ is transcendental (Hermite, 1873, a result that is in scope for
this library and will be proved), and $\pi$ is transcendental
([[rem-transcendence-of-pi]]). A cheap symmetric-function argument already shows
that the two candidates cannot both be tame: $e$ and $\pi$ are the roots of

$$x^2 - (e + \pi)x + e\pi,$$

so if $e + \pi$ and $e\pi$ were both algebraic then $e$ and $\pi$ would be
algebraic too. Hence **at least one of $e + \pi$ and $e\pi$ is transcendental**,
and that is essentially the whole of what is known about this pair. Note the
asymmetry with $e^{\pi}$, which **is** known to be transcendental (Gelfond, via
the Gelfond-Schneider theorem of 1934 applied to
$e^{\pi} = (e^{i\pi})^{-i} = (-1)^{-i}$), and about which much more is known:
Nesterenko (1996) proved that $\pi$ and $e^{\pi}$ are algebraically independent
over $\mathbb{Q}$. By contrast $\pi^{e}$ is not known even to be irrational,
because it is not of the form $\alpha^{\beta}$ with $\alpha, \beta$ algebraic and
so Gelfond-Schneider says nothing about it.

Schanuel's conjecture, if proved, would settle all of these at once: it implies
that $e$ and $\pi$ are algebraically independent over $\mathbb{Q}$, and hence that
$e + \pi$ and $e\pi$ are both transcendental. Schanuel's conjecture is itself
open, so this reduces one open problem to a much harder one rather than solving
anything.

**Why it matters here.** The library proves irrationality where irrationality is
provable, starting from the refutation of the claim that $\sqrt{2}$ is rational
([[fs-sqrt2-rational]]), and it constructs $\mathbb{R}$ so that $e$ and $\pi$ can
be defined at all. This item is the honest boundary marker: the elementary
irrationality arguments do not scale, and the first genuinely simple combination
of the library's two favourite constants is already past the edge of what anyone
can prove.
