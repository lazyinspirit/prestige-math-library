---
id: ex-standard-limits-worked
kind: example
title: "The four standard limits $n^{1/n} \\to 1$, $a^{1/n} \\to 1$, $n^{\\alpha}/(1+p)^n \\to 0$ and $x^k/k! \\to 0$, computed"
status: draft
origin: session
deps: [lem-nth-root-of-n-tends-to-one, lem-nth-root-of-constant-tends-to-one, lem-power-over-geometric-null, lem-factorial-beats-geometric, thm-algebra-of-limits, def-real-limit, def-sequence, def-rational-power, def-integer-power, thm-nth-roots-exist, def-finite-sum, lem-of-naturals-positive, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
pipeline_run: null
---

## Example

The four standard limits of this page, written as sequences on $\mathbb{N}$ and
instantiated. Throughout $\iota(n) = n \cdot 1_{\mathbb{R}}$ is the canonical
natural, with $\iota(0) = 0$.

| classical form | as a sequence on $\mathbb{N}$ | value | source |
|---|---|---|---|
| $n^{1/n} \to 1$ | $(k+1)^{1/(k+1)}$ | $1$ | [[lem-nth-root-of-n-tends-to-one]] |
| $a^{1/n} \to 1$, $a > 0$ | $a^{1/(k+1)}$ | $1$ | [[lem-nth-root-of-constant-tends-to-one]] |
| $n^{\alpha}/(1+p)^{n} \to 0$ | $\iota(k)^{\alpha}/(1+p)^{k}$ | $0$ | [[lem-power-over-geometric-null]] |
| $x^{k}/k! \to 0$ | $x^{k}/k!$ | $0$ | [[lem-factorial-beats-geometric]] |

Two of the four need an index shift and two do not, and the reason is visible in
the classical forms: in the first two the index sits in the *exponent* as $1/n$,
which is not a rational number at $n = 0$, so those families begin at $n = 1$ and
are written here with $n = k+1$. In the last two the index sits in the base or in
a factorial, both of which are defined at $0$, so no shift is needed and the
sequences begin at $k = 0$ with the values $0$ and $1$ respectively.

The instances computed below are:

$$2^{1/(k+1)} \to 1, \qquad \frac{\iota(k)^{2}}{2^{k}} \to 0, \qquad \frac{2^{k}}{k!} \to 0, \qquad \frac{(-3)^{k}}{k!} \to 0, \qquad \frac{\iota(k)^{2}}{k!} \to 0 .$$

The last of these is not one of the four; it is the composite that orders the
three scales, and it is obtained from two of them by the product rule.

## Facts & Assumptions

**Given:** The canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$ with $\iota(0) = 0$; the factorial $k! = \prod_{j<k}\iota(j+1)$ of [[lem-factorial-beats-geometric]]; rational powers ([[def-rational-power]]) and integer powers ([[def-integer-power]]).

[L1] $(k+1)^{1/(k+1)} \to 1$, with $1 \le n^{1/n} \le 1 + 2/n^{1/2}$ for every natural $n \ge 1$ ([[lem-nth-root-of-n-tends-to-one]]).

[L2] For every real $a > 0$, $a^{1/(k+1)} \to 1$; and for real $b \ge 1$ and natural $n \ge 1$, $1 \le b^{1/n} \le 1 + (b-1)/\iota(n)$ ([[lem-nth-root-of-constant-tends-to-one]]).

[L3] For every real $p > 0$ and rational $\alpha > 0$, $\iota(k)^{\alpha}/(1+p)^{k} \to 0$ ([[lem-power-over-geometric-null]]).

[L4] For every real $x$, $x^{k}/k! \to 0$ ([[lem-factorial-beats-geometric]]).

[L5] Algebra of limits: products of convergent sequences converge to the product of the limits ([[thm-algebra-of-limits]], [[def-real-limit]], [[def-sequence]]).

[L6] Arithmetic: $0 < 1 < 2 < 3$, so $1$, $2$, $3/2$ and $1/2$ are positive and $2 = 1 + 1$, $3/2 = 1 + 1/2$; a positive integer power of a positive real is positive and nonzero; $2$ is a positive rational and $1/2$ is a positive rational ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[lem-of-naturals-positive]], [[thm-nth-roots-exist]], [[def-finite-sum]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 The first standard limit gives $(k+1)^{1/(k+1)} \to 1$, together with the explicit two-sided bound $1 \le (k+1)^{1/(k+1)} \le 1 + 2/(k+1)^{1/2}$ valid at every $k \in \mathbb{N}$, since $k+1 \ge 1$. [given, L1]

1.2 The second gives $2^{1/(k+1)} \to 1$ and $(1/2)^{1/(k+1)} \to 1$, both bases being positive; for the first of these the explicit bound of [L2] with $b = 2$ reads $1 \le 2^{1/n} \le 1 + 1/\iota(n)$ for every natural $n \ge 1$. [given, L2, L6]

1.3 The third, with $p = 1$ and $\alpha = 2$, gives $\iota(k)^{2}/2^{k} \to 0$; with $p = 1/2$ and $\alpha = 1/2$ it gives $\iota(k)^{1/2}/(3/2)^{k} \to 0$. Both $p$ are positive reals and both $\alpha$ are positive rationals, so [L3] applies in each case. [given, L3, L6]

1.4 The fourth, with $x = 2$ and with $x = -3$, gives $2^{k}/k! \to 0$ and $(-3)^{k}/k! \to 0$; no hypothesis on $x$ is needed, in particular no positivity. [given, L4]

2.1 Multiplying the first limit of step 1.3 by the first of step 1.4 and using $2^{k} \ne 0$ gives $\iota(k)^{2}/k! = \big(\iota(k)^{2}/2^{k}\big)\big(2^{k}/k!\big) \to 0 \cdot 0 = 0$. [step 1.3, step 1.4, L5, L6]

2.2 Multiplying the limit of step 1.1 by the first of step 1.2 gives $(k+1)^{1/(k+1)} \, 2^{1/(k+1)} \to 1 \cdot 1 = 1$. [step 1.1, step 1.2, L5]

3.1 The four limits and the two composites are therefore established as displayed, and together they order the three growth scales: a fixed power of $n$ is beaten by every geometric sequence of ratio $> 1$ by step 1.3, every geometric sequence is beaten by the factorial by step 1.4, and consequently a fixed power of $n$ is beaten by the factorial by step 2.1. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2] ∎

## Remarks

- **The two bounds quoted in steps 1.1 and 1.2 are the useful part in practice.**
  They convert the qualitative statement into a rate: $n^{1/n}$ is within
  $2/n^{1/2}$ of $1$, and $a^{1/n}$ within $(a-1)/n$ of $1$ when $a \ge 1$. The
  second rate is faster, and the difference is real: in $n^{1/n}$ the base itself
  grows with the index.

- **Why $\alpha$ is rational and $p$ is real.** The exponent $\alpha$ must be
  rational because rational powers are all this library has; the base $1+p$ may be
  any real $> 1$ because it is raised only to *integer* powers. The asymmetry is a
  fact about what has been constructed, not about the mathematics, and it
  disappears once real exponents are available.

- **The composite in step 2.1 is the one usually quoted as "factorials beat
  polynomials".** It is not proved directly anywhere on this page: it is the
  product of two of the four standard limits, and the product rule
  ([[thm-algebra-of-limits]]) is what assembles it.

- **Nothing here uses $\limsup$.** All four are ordinary limits, and the page's
  machinery is needed only to *prove* them, not to state them; the connection to
  the rest of the page is that [[thm-ratio-root-inequality]] is the tool that
  makes several of them routine once one of them is known.
