---
id: rem-classical-oscillator-is-sine-of-one-over-x
kind: remark
title: "The classical form of the oscillator above is $\\sin(1/x)$, which this library can only construct much later"
status: draft
origin: session
deps: [cex-psi-of-one-over-x-has-no-limit-at-zero, ex-distance-to-the-integers, ex-x-times-psi-tends-to-zero]
justified_by: []
aliases: []
landmark: false
short: "why $\\psi$ and not $\\sin$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Sine and cosine (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sine_and_cosine"
    - title: "Topologist's sine curve (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topologist%27s_sine_curve"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 8 (the trigonometric functions)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Orientation, not a claim of this library

Every analysis course states the two examples of this page in the form

$$\sin(1/x) \quad \text{has no limit at } 0, \qquad x \sin(1/x) \to 0 \text{ as } x \to 0 ,$$

and a reader who has met them before will recognise
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] and
[[ex-x-times-psi-tends-to-zero]] as those examples with $\psi$ in place of
$\sin$. This remark records the correspondence, and it records that the
correspondence is **orientation only**: nothing on this page asserts, uses, or
proves anything about $\sin$.

## Why $\sin$ is not available here

This library has not defined $\sin$. Doing so honestly is a substantial piece of
work that has not been done: one needs the exponential and trigonometric
functions built from power series, or from a differential equation, or from arc
length — and then the number $\pi$ has to be *defined*, as (twice) the first
positive zero of the cosine or by an equivalent characterisation, and that
definition has to be justified by proving the zero exists and is unique. None of
that machinery — power series, convergence of series of functions,
differentiation — exists in this library at this point in the reading order. It
belongs to a later page of the plan, on sine, cosine and the definition of $\pi$,
which has not yet been written.

Because that page has no items yet, this remark contains **no link** to a sine or
cosine item: there is no id to link to, and inventing one would leave a dangling
reference. When that page is authored, this remark is the natural place to add a
forward reference to it, declared in `forward_refs` as the schema requires.

## What $\psi$ supplies instead

The function $\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ of
[[ex-distance-to-the-integers]] is elementary — it needs only the integer part,
the order and the absolute value — and it has the three properties that make the
classical examples work:

- it is **bounded**, with values exactly in $[0, 1/2]$;
- it is **periodic**, with period $1$, so $\psi(1/x)$ oscillates without damping
  as $x \to 0$;
- it **attains** two distinct values on every punctured neighbourhood of $0$
  after the substitution $x \mapsto 1/x$, namely $0$ at the reciprocals of the
  integers and $1/2$ at the reciprocals of the half-integers.

The third property is what
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] uses, and it is *sharper* than
what $\sin$ would give: the two witnessing sequences here take the extreme values
exactly, with no estimate needed, because $\psi$ is defined by an infimum that
is attained rather than by a series.

## What is genuinely lost, and what is not

Nothing on this page is weaker for using $\psi$. The two statements proved are
exactly the statements usually proved with $\sin$, and their proofs are shorter.

What is lost is a connection to a different subject. The classical pair
$\sin(1/x)$, $x\sin(1/x)$ also carries information about smoothness, about power
series and about the topologist's sine curve, none of which $\psi$ can carry,
since $\psi$ is assembled from the order and the absolute value alone and none of
those notions is defined in this library yet. Those phenomena are not in scope
here, and when they come into scope they will be stated with $\sin$, on the page
that defines it.
