---
id: rem-transcendence-of-pi
kind: remark
title: "Transcendence of $\\pi$ (awaiting a scope decision)"
status: published
origin: session
proved_here: false
deps: [rem-lindemann-weierstrass-theorem]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "π is transcendental (Lindemann 1882); settled, but not authored here"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "F. Lindemann, Ueber die Zahl π, Mathematische Annalen 20 (1882) 213-225"
      url: "https://link.springer.com/article/10.1007/BF01446522"
    - title: "Transcendental number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Transcendental_number"
    - title: "I. Niven, A simple proof that π is irrational, Bulletin of the AMS 53 (1947) 509"
      url: "https://www.ams.org/journals/bull/1947-53-06/S0002-9904-1947-08821-2/"
pipeline_run: null
---

## Statement

**Transcendence of $\pi$.** The number $\pi$ is transcendental over $\mathbb{Q}$:
it is not a root of any nonzero polynomial with rational coefficients. In
particular $\pi$ is irrational, and $\pi$ is not constructible by straightedge and
compass, so the circle cannot be squared.

**Status: settled, and awaiting an owner decision here.** Lindemann proved it in
1882. Like [[rem-lindemann-weierstrass-theorem]], of which it is the headline
corollary, it is neither open nor blocked by a missing track; it has been flagged
for a decision on whether to author the transcendence machinery, and until that
decision is taken it is recorded and not used.

## Remarks

**Not proved in this library.** No page here proves that $\pi$ is transcendental,
and no proof in this library may lean on it.

**What is known, and what would settle its place here.** The derivation from
[[rem-lindemann-weierstrass-theorem]] is short: if $\pi$ were algebraic then so
would $i\pi$ be, and $e^{i\pi} = -1$ together with $e^0 = 1$ would exhibit two
exponentials of distinct algebraic numbers that are linearly dependent over
$\overline{\mathbb{Q}}$, contradicting the theorem. So the whole cost sits in the
theorem, plus Euler's identity, which this library does intend to prove once the
complex exponential is built. Authoring both is what would replace this item by a
theorem.

**Why it matters here.** Transcendence and irrationality are routinely confused,
and the difference is exactly the difference between what this library proves and
what it records. The irrationality of $\sqrt{2}$ is proved here, and the
irrationality of $\pi$ alone has a famously short elementary proof (Niven, 1947)
that is well inside scope. Transcendence is a strictly stronger and strictly more
expensive statement, and the classical geometric consequence, the impossibility of
squaring the circle, needs the stronger one. Recording the distinction is the
point of this item.
