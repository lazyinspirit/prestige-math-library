---
id: thm-dini-derivatives-exist-are-ordered-and-detect-differentiability
kind: theorem
title: "The four Dini derivatives always exist in the extended reals, satisfy the one-sided order inequalities, and detect finite differentiability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-derivative, def-extended-reals, def-four-dini-derivatives-at-a-point, thm-two-sided-limit-iff-both-one-sided]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Section 1.6"
      url: "https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement

Let $I \subseteq \mathbb{R}$ be an interval, let $f : I \to \mathbb{R}$, and
let $x \in I$.

1. Every well-posed Dini derivative of
   [[def-four-dini-derivatives-at-a-point]] exists in
   $\overline{\mathbb{R}} = \mathbb{R} \cup \{\pm\infty\}$
   ([[def-extended-reals]]).
2. On each available side one has
   $$D_{+}f(x) \le D^{+}f(x), \qquad D_{-}f(x) \le D^{-}f(x).$$
3. If $x$ is an interior point of $I$, then the finite derivative
   $f'(x)$ of [[def-derivative]] exists if and only if all four Dini
   derivatives exist as the same finite real number.

## Facts & Assumptions

**Given:** The interval $I$, the function $f : I \to \mathbb{R}$, and the point
$x \in I$.

[A1] We use the Dini-derivative notation fixed in the statement.

## Proof

**Proof technique:** direct.

1.1 Each well-posed Dini derivative is an upper or lower limit of a nonempty family of real difference quotients, so its value exists in $\overline{\mathbb{R}}$ by the definitions of $\limsup$ and $\liminf$ on the extended line. This proves claim 1. [given]

1.2 For every family of real numbers, the liminf is at most the limsup. Applied to the right-hand difference quotients and to the left-hand difference quotients, this gives $D_{+}f(x) \le D^{+}f(x)$ and $D_{-}f(x) \le D^{-}f(x)$. This is claim 2. [given]

2.1 Assume first that $f'(x)$ exists as a finite real number $L$. Then the right and left difference quotients both converge to $L$, because a two-sided limit exists exactly when both one-sided limits exist and agree ([[thm-two-sided-limit-iff-both-one-sided]]). Hence each one-sided limsup and each one-sided liminf equals $L$, so all four Dini derivatives equal $L$. [step 1.2]

2.2 Conversely, assume that the four Dini derivatives all equal the same finite real number $L$. Then on the right the limsup and liminf of the difference quotients coincide at $L$, so the right-hand quotient limit exists and equals $L$; the same is true on the left. Therefore the two-sided derivative exists and equals $L$ by [[thm-two-sided-limit-iff-both-one-sided]]. [step 1.2]

3.1 Steps 2.1 and 2.2 prove claim 3, and steps 1.1 and 1.2 prove claims 1 and 2. [step 1.1, step 1.2, step 2.1, step 2.2] ∎
