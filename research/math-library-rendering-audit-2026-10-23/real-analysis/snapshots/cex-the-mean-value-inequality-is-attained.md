---
id: cex-the-mean-value-inequality-is-attained
kind: counterexample
title: "A curve for which the mean value inequality is an equality, showing the constant cannot be improved"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-mean-value-inequality, def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, def-p-norms-on-rn, def-euclidean-inner-product, def-norm-and-normed-space, lem-derivative-of-a-power, def-derivative, cex-mean-value-equality-fails-for-a-vector-valued-function, thm-of-square-roots, thm-algebra-of-continuous-functions, cor-differentiable-implies-continuous, def-canonical-natural, lem-of-naturals-positive, def-integer-power, def-interval]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the inequality of [[thm-mean-value-inequality]] can be
improved: there is a real $c < 1$ such that for every $m \ge 1$, every $a<b$ and
every $f : [a,b] \to \mathbb{R}^{m}$ continuous on $[a,b]$ and differentiable on
$(a,b)$ with $\lVert f'\rVert_2 \le M$ there,

$$\lVert f(b)-f(a)\rVert_2 \;\le\; c\,M\,(b-a).$$

**The witness.** Take $m = 2$, $[a,b] = [0,1]$ and
$f : [0,1] \to \mathbb{R}^{2}$ with $f_0(t) = t$ and $f_1(t) = 0$. Then
$\lVert f'(t)\rVert_2 = 1$ for every $t \in (0,1)$, so $M = 1$ is admissible, and

$$\lVert f(1)-f(0)\rVert_2 \;=\; 1 \;=\; M\,(1-0).$$

The inequality of [[thm-mean-value-inequality]] is therefore an **equality** on
this curve, and no constant smaller than $1$ can stand in front of $M(b-a)$.

## Facts & Assumptions

**Given:** The function $f : [0,1] \to \mathbb{R}^{2}$ with $f_0(t) = t$ and $f_1(t) = 0$.

[A1] The refuted claim: there is a real $c<1$ with $\lVert f(b)-f(a)\rVert_2 \le c\,M(b-a)$ in the situation of [[thm-mean-value-inequality]].

[L1] Derivatives of powers: $t \mapsto t$ is differentiable at every real with derivative $1$, and a constant function has derivative $0$ ([[lem-derivative-of-a-power]] claims 1 and 2, [[def-derivative]], [[def-integer-power]], [[def-canonical-natural]]).

[L2] A vector-valued function is differentiable at a point exactly when each component is, with $f'(t)_i = f_i'(t)$, and is continuous when each component is ([[def-vector-valued-derivative-and-integral]], [[thm-componentwise-limits-and-continuity]], [[def-vector-valued-functions-limits-and-continuity]], [[cor-differentiable-implies-continuous]], [[thm-algebra-of-continuous-functions]]).

[L3] The Euclidean norm on $\mathbb{R}^{2}$: $\lVert y\rVert_2 = \sqrt{y_0^{2}+y_1^{2}}$, and $\sqrt{1} = 1$ ([[def-p-norms-on-rn]], [[def-euclidean-inner-product]], [[def-norm-and-normed-space]], [[thm-of-square-roots]]).

[L4] The mean value inequality ([[thm-mean-value-inequality]], [[def-interval]]).

[L5] $1 > 0$ and $\iota$ is positive on the naturals $\ge 1$ ([[lem-of-naturals-positive]], [[def-canonical-natural]]).

## Counterexample

**Proof technique:** direct.

1.1 Each component of $f$ is differentiable at every real, with $f_0'(t) = 1$ and $f_1'(t) = 0$; so $f$ is differentiable at every $t \in [0,1]$ with $f'(t) = (1,0)$, and $f$ is continuous on $[0,1]$. [L1, L2]

1.2 $f(1) = (1,0)$ and $f(0) = (0,0)$, so $f(1)-f(0) = (1,0)$ and $\lVert f(1)-f(0)\rVert_2 = 1$. [L3]

2.1 $\lVert f'(t)\rVert_2 = \sqrt{1^{2}+0^{2}} = 1$ for every $t$, so $M := 1$ satisfies the hypothesis $\lVert f'\rVert_2 \le M$ on $(0,1)$, and $M \ge 0$. [step 1.1, L3]

3.1 The conclusion of [[thm-mean-value-inequality]] on this curve reads $1 \le M(1-0) = 1$: the inequality holds and is an equality. [step 2.1, step 1.2, L4]

4.1 Suppose [A1] held with some real $c<1$. Applied to this curve it would give $1 \le c\cdot 1\cdot 1 = c < 1$, which is impossible. So no constant smaller than $1$ works, and [A1] is false. [step 1.2, step 3.1, A1, L5] ∎

## Remarks

- **The two witnesses on this page say opposite-looking things and are consistent.** [[cex-mean-value-equality-fails-for-a-vector-valued-function]] shows that the **equality form** of the mean value theorem fails for $m \ge 2$: there need be no $\xi$ with $f(b)-f(a) = f'(\xi)(b-a)$. The present item shows that the **inequality** of [[thm-mean-value-inequality]] is nevertheless sharp. Together they say that the correct vector-valued statement is an inequality, and that it is the best inequality of its shape.

- **Why the equality is attained here and not there.** On the curve above the derivative is constant, so it points in one direction and the displacement accumulates with no cancellation. On $t \mapsto (t^{2},t^{3})$ the direction of $f'$ turns as $t$ increases, and the displacement is strictly shorter than the length the bound allows: there $\lVert f(1)-f(0)\rVert_2 = \sqrt{2}$ while the bound is $\sqrt{\iota(13)}$.

- **The curve is as simple as it can be.** Its image is a segment of the first coordinate axis, and the second component is present only so that the codomain is $\mathbb{R}^{2}$ rather than $\mathbb{R}^{1}$; the same computation in $\mathbb{R}^{m}$ for any $m \ge 1$ gives the same equality.
