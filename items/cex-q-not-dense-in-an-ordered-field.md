---
id: cex-q-not-dense-in-an-ordered-field
kind: counterexample
title: "In $\\mathbb{R}(t)$ the rationals are not dense: no rational lies strictly between $0$ and $1/t$"
status: draft
origin: session
deps: [cex-ordered-field-not-archimedean, ex-rational-function-field-order, lem-of-q-dense, lem-of-q-embeds, def-archimedean-field, lem-of-inverse-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Dense order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_order"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** in every ordered field $F$ the image of $\mathbb{Q}$ is
dense, that is, for all $x < y$ in $F$ there is a rational $q$ with
$x < q \cdot 1_F < y$.

The witness is $\mathbb{R}(t)$ with the eventual-sign order
([[cex-ordered-field-not-archimedean]], [[ex-rational-function-field-order]]),
and the pair $x = 0$, $y = 1/t$: the interval between them contains no rational
at all.

The true statement requires the Archimedean property and is
[[lem-of-q-dense]]; $\mathbb{R}(t)$ is not Archimedean, and this counterexample
is exactly the failure that the Archimedean hypothesis rules out.

## Facts & Assumptions

**Given:** The ordered field $\mathbb{R}(t)$ with positive cone $P = \{f \ne 0 : f(x) > 0 \text{ for all sufficiently large real } x\}$, and its element $1/t$.

[L1] $\mathbb{R}(t)$ is an ordered field and is not Archimedean ([[cex-ordered-field-not-archimedean]], [[def-archimedean-field]]).

[L2] $0 < 1/t$, and $1/t < q \cdot 1$ for every rational $q > 0$ ([[ex-rational-function-field-order]]).

[L3] The canonical embedding of $\mathbb{Q}$ into an ordered field is an embedding of ordered fields, so $q \cdot 1 > 0$ if and only if $q > 0$, and $q \cdot 1 \le 0$ when $q \le 0$ ([[lem-of-q-embeds]]).

[L4] $\mathbb{Q}$ is dense in every Archimedean ordered field ([[lem-of-q-dense]]).

[L5] In an ordered field the order is total and transitive, exactly one of $u < v$, $u = v$, $v < u$ holds, and a positive element has a positive inverse ([[def-ordered-field]], [[lem-of-inverse-positive]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbb{R}(t)$ is an ordered field, it is not Archimedean, and $0 < 1/t$ in it. [L1, L2, L5]

1.2 For every rational $q > 0$ one has $1/t < q \cdot 1$. [L2]

2.1 No rational $q$ satisfies $0 < q \cdot 1 < 1/t$: if $q \le 0$ then $q \cdot 1 \le 0$ and the left inequality fails, while if $q > 0$ then $1/t < q \cdot 1$ by step 1.2, so $q \cdot 1 < 1/t$ fails by trichotomy. [step 1.1, step 1.2, L3, L5]

3.1 So $0 < 1/t$ in $\mathbb{R}(t)$ with no rational strictly between them: the image of $\mathbb{Q}$ is not dense in $\mathbb{R}(t)$, and the claim is false. [step 1.1, step 2.1]

4.1 The hypothesis the claim omitted is the Archimedean property, which $\mathbb{R}(t)$ lacks and under which the conclusion does hold. [step 1.1, L1, L4] ∎

## Remarks

- **What density really needs.** Given $0 < x < y$ in an Archimedean field one
  finds $n$ with $1/n < y - x$ and then a multiple of $1/n$ in the gap; the
  Archimedean property is used precisely to make the mesh $1/n$ finer than the
  gap. In $\mathbb{R}(t)$ the gap $1/t - 0$ is smaller than every $1/n$, so no
  mesh built from rationals is ever fine enough.

- **An element like $1/t$ is called an infinitesimal**: positive, and below
  every positive rational. A non-Archimedean ordered field always has one, since
  if $x$ exceeds every canonical natural then $1/x$ is below every $1/n$
  ([[lem-of-inverse-positive]]). So the failure of density is not special to
  this field; it happens in every non-Archimedean ordered field, including
  $\mathbb{R}((t^{-1}))$.

- **Density is not the same as completeness.** $\mathbb{Q}$ is dense in itself
  and in $\mathbb{R}$, and $\mathbb{Q}$ is not complete. What this counterexample
  shows is only that density of $\mathbb{Q}$ needs the Archimedean property,
  which is also the hypothesis missing from
  [[fs-nested-intervals-implies-lub]] and [[fs-cauchy-complete-implies-lub]].
