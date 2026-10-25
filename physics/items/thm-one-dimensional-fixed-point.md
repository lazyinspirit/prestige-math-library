---
id: thm-one-dimensional-fixed-point
kind: theorem
title: "Every continuous map of a closed bounded interval into itself has a fixed point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-intermediate-value, thm-algebra-of-continuous-functions, def-continuity-real, def-interval, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [thm-fixed-point-interval]
forward_refs: [ex-fixed-point-from-the-ivt]
landmark: true
short: "one-dimensional fixed point theorem"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Brouwer fixed-point theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Brouwer_fixed-point_theorem"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "K. Conrad, The Contraction Mapping Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/analysis/contraction.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$ and let $\varphi : [a,b] \to \mathbb{R}$
be continuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) with

$$\varphi(x) \in [a,b] \qquad \text{for every } x \in [a,b] .$$

Then $\varphi$ has a **fixed point**: there is $c \in [a,b]$ with
$\varphi(c) = c$.

**This is the one-dimensional case of Brouwer's theorem, and here it is
elementary.** The whole content is that $\varphi(x) - x$ is $\ge 0$ at the left
endpoint and $\le 0$ at the right, so the intermediate value theorem produces a
zero. Nothing about contraction, and no metric hypothesis, is needed: the map is
not assumed to shrink distances, and the fixed point need not be unique.

**Both hypotheses on the interval are used.** The interval must be closed, or
the fixed point can escape through an endpoint; and it must be bounded, or there
need be no fixed point at all, as $x \mapsto x + 1$ on $[0,\infty)$ shows.

## Facts & Assumptions

**Given:** Reals $a \le b$ and a continuous $\varphi : [a,b] \to \mathbb{R}$ with $\varphi(x) \in [a,b]$ for every $x \in [a,b]$.

[L1] Sums, scalar multiples and the identity: the identity $x \mapsto x$ is continuous on $[a,b]$, and a sum of two functions continuous on $[a,b]$ is continuous on $[a,b]$, as is a scalar multiple ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] Intermediate value theorem: if $g$ is continuous on $[a,b]$ with $a \le b$ and $y$ lies between $g(a)$ and $g(b)$ in either order, then $g(c) = y$ for some $c \in [a,b]$ ([[thm-intermediate-value]]).

[L3] Membership in $[a,b]$ means $a \le x \le b$ ([[def-interval]]).

[L4] Ordered-field arithmetic in $\mathbb{R}$: adding and subtracting preserves order, and $u - v \ge 0$ exactly when $u \ge v$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Define $g : [a,b] \to \mathbb{R}$ by $g(x) := \varphi(x) - x$. By [L1] the function $g$ is continuous on $[a,b]$, being the sum of $\varphi$ and $(-1)$ times the identity. [L1]

1.2 By hypothesis $\varphi(a) \in [a,b]$, so $\varphi(a) \ge a$ and hence $g(a) = \varphi(a) - a \ge 0$ by [L4]. Likewise $\varphi(b) \in [a,b]$ gives $\varphi(b) \le b$ and hence $g(b) = \varphi(b) - b \le 0$. [L3, L4]

2.1 So $g(b) \le 0 \le g(a)$: the value $0$ lies between $g(b)$ and $g(a)$. By [L2], applied to $g$ on $[a,b]$ with $y := 0$, there is $c \in [a,b]$ with $g(c) = 0$. [step 1.1, step 1.2, L2, choose]

3.1 Then $\varphi(c) - c = 0$, that is $\varphi(c) = c$, with $c \in [a,b]$: the map $\varphi$ has a fixed point. [step 2.1, L4] ∎

## Remarks

- **Uniqueness is not claimed and is false in general.** The identity map of $[a,b]$ into itself is continuous and fixes every point. What forces uniqueness is a contraction hypothesis, which is the setting of the Banach fixed point theorem in a complete metric space; that theorem also *produces* the fixed point as a limit of iterates, whereas the argument above only asserts that one exists.

- **The interval may not be replaced by an arbitrary compact set.** The map $x \mapsto -x$ carries the compact set $\{-1, 1\}$ into itself, is continuous, and fixes nothing. Order-convexity, not compactness alone, is what the intermediate value theorem needs.

- **A worked instance** is [[ex-fixed-point-from-the-ivt]] on the companion page, where $\varphi(x) = (x + 2/x)/2$ maps $[1,2]$ into itself and its unique fixed point is $\sqrt{2}$.
