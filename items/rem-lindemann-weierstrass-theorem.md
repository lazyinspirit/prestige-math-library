---
id: rem-lindemann-weierstrass-theorem
kind: remark
title: "The Lindemann-Weierstrass theorem (awaiting a scope decision)"
status: published
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Distinct algebraic exponents give linearly independent exponentials; settled 1882/1885, not authored here"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Lindemann-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lindemann%E2%80%93Weierstrass_theorem"
    - title: "F. Lindemann, Ueber die Zahl π, Mathematische Annalen 20 (1882) 213-225"
      url: "https://link.springer.com/article/10.1007/BF01446522"
    - title: "Transcendental number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Transcendental_number"
pipeline_run: null
---

## Statement

**Lindemann-Weierstrass theorem.** If $\alpha_1, \dots, \alpha_n$ are distinct
algebraic numbers, then $e^{\alpha_1}, \dots, e^{\alpha_n}$ are linearly
independent over the field $\overline{\mathbb{Q}}$ of algebraic numbers.

Equivalently: if $\alpha_1, \dots, \alpha_n$ are algebraic numbers that are
linearly independent over $\mathbb{Q}$, then $e^{\alpha_1}, \dots, e^{\alpha_n}$
are algebraically independent over $\mathbb{Q}$.

**Status: settled, and awaiting an owner decision here.** The theorem is a
theorem: Lindemann proved the case that yields the transcendence of $\pi$ in
1882, and Weierstrass proved the general form in 1885. It is *not* deferred for a
missing prerequisite in the sense of the rest of this category. It is reachable in
principle from material this library is built to contain, but the development is
long, and whether to author it has been flagged for a decision rather than
answered. Until that decision is taken it is recorded here and used nowhere.

## Remarks

**Not proved in this library.** No page of this library proves the
Lindemann-Weierstrass theorem, and nothing here may cite it as an established
result. This item exists so that the transcendence facts about $\pi$ can be
stated honestly rather than assumed.

**What is known, and what would settle its place here.** The proof is a
quantitative refinement of Hermite's 1873 argument for the transcendence of $e$:
one builds an auxiliary integral against a high power of a polynomial with the
$\alpha_i$ as roots, uses the fundamental theorem of symmetric polynomials to
show that the resulting algebraic sum is a nonzero rational integer, and then
contradicts that with an analytic bound that forces it below $1$ in absolute
value. The prerequisites are algebraic numbers and algebraic integers, symmetric
polynomials, and elementary estimates on the exponential, all of which sit inside
the intended scope of this library. What would settle its place is therefore a
scope decision, not new mathematics: either the track is authored and this item is
replaced by a proof-bearing theorem, or the decision is recorded to leave it out.

**Why it matters here.** Hermite's theorem that $e$ is transcendental **is** in
scope and will be proved. Lindemann-Weierstrass is the next step up, and it is
what delivers the transcendence of $\pi$, of $\sin 1$, of $\log \alpha$ for
algebraic $\alpha \neq 0, 1$, and with them the impossibility of squaring the
circle. Everything this library will be able to say about $\pi$ beyond
irrationality is downstream of this one statement, so its status has to be
recorded exactly rather than left vague.
