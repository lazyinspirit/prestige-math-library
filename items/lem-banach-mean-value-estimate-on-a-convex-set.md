---
id: lem-banach-mean-value-estimate-on-a-convex-set
kind: lemma
title: Banach mean value estimate on a convex set
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-frechet-derivative-between-banach-spaces, thm-dual-norms-every-vector, cor-mean-value-theorem, def-axiom-of-choice, def-relative-normed-convexity-and-separation, def-norm-and-normed-space, def-dual-space-of-a-normed-space, def-operator-norm, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Zuoqin Wang, Lecture 6 — §2.2.3 (mean value theorem via Hahn–Banach)"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $U$ be an open convex
subset of a real Banach space $X$, let $f : U \to Y$ be Fréchet differentiable
on $U$ with values in a real Banach space $Y$, let $x, y \in U$ and let
$M \ge 0$ be a real number with

$$\|Df(z)\| \le M \qquad \text{for every } z \in [x,y] := \{\,x+t(y-x) : 0 \le t \le 1\,\} \subseteq U .$$

Then

$$\|f(y)-f(x)\| \le M\,\|y-x\| .$$

## Facts & Assumptions

**Given:** An assumed AC, an open convex $U$ in a real Banach space $X$, a differentiable $f : U \to Y$ into a real Banach space $Y$, points $x,y \in U$ and a real $M \ge 0$ bounding $\|Df\|$ on the segment $[x,y]$.

[L1] Differentiability of $f$ at each $z \in U$ means $f(z+h)-f(z)-Df(z)h = o(\|h\|)$ for $h \to 0$ in the sense of the $\varepsilon$-$\delta$ remainder estimate ([[def-frechet-derivative-between-banach-spaces]]).

[L2] Since $U$ is convex and $x, y \in U$, the point $\gamma(t) := x+t(y-x)$ lies in $U$ for every real $t \in [0,1]$; a convex set contains all convex combinations of its points with real coefficients in $[0,1]$ ([[def-relative-normed-convexity-and-separation]]).

[L3] Under AC, every nonzero $w \in Y$ admits $\varphi \in Y^*$ with $\|\varphi\| = 1$ and $\varphi(w) = \|w\|$ ([[thm-dual-norms-every-vector]]); here $Y^*$ is the dual space of bounded linear functionals ([[def-dual-space-of-a-normed-space]]) and $|\varphi(v)| \le \|\varphi\|\,\|v\|$.

[L4] Chain rule, sum rule and the differentiability of bounded linear maps ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]): if $\gamma$ is differentiable at $t$ and $f$ is differentiable at $\gamma(t)$, then $f \circ \gamma$ is differentiable at $t$ with $D(f\circ\gamma)(t) = Df(\gamma(t))\,D\gamma(t)$, and a bounded linear functional $\varphi$ composed with a differentiable map is differentiable with $D(\varphi \circ h)(t) = \varphi \circ Dh(t)$.

[L5] The mean value theorem: a real function continuous on $[0,1]$ and differentiable on $(0,1)$ has some $c \in (0,1)$ with $g(1)-g(0) = g'(c)$ ([[cor-mean-value-theorem]]).

[L6] The operator norm satisfies $\|Tu\| \le \|T\|\,\|u\|$ for all $u$ ([[def-operator-norm]]).

[L7] Norm axioms: triangle inequality and absolute homogeneity ([[def-norm-and-normed-space]]); the absolute value of a real number is its norm, so $|g'(c)| \le M\|y-x\|$ reads as $g'(c) \ge -M\|y-x\|$ and $g'(c) \le M\|y-x\|$.

## Proof

**Proof technique:** direct.

1.1 If $x = y$ the estimate reads $\|f(x)-f(x)\| \le 0$ and holds; if $w := f(y)-f(x) = 0$ it reads $0 \le M\|y-x\|$ and holds. Hence we may assume $x \ne y$ and $w \ne 0$, and then [L3] provides a norming functional for this nonzero $w$. [given, L7, algebra]

1.2 By [L3] fix $\varphi \in Y^*$ with $\|\varphi\| = 1$ and $\varphi(w) = \|w\|$; then $\varphi(f(y)) - \varphi(f(x)) = \|f(y)-f(x)\| \ge 0$. [L3, L7, algebra]

1.3 Define $\gamma : \mathbb R \to X$ by $\gamma(t) := x + t(y-x)$ and $g(t) := \varphi(f(\gamma(t)))$; by [L2] one has $\gamma(t) \in U$ for every $t \in [0,1]$. [L2, construct]

1.4 The map $\gamma$ is differentiable at every $t_0 \in \mathbb R$ with constant derivative $D\gamma(t_0) = (s \mapsto s\,(y-x))$, because $\gamma(t_0+s)-\gamma(t_0) = s(y-x)$ exactly, so the remainder vanishes. [given, L7, algebra]

2.1 For every $t_0 \in [0,1]$, the map $f$ is differentiable at $\gamma(t_0) \in U$ by [L1], so by [L4] the composite $g$ is differentiable at $t_0$ with $g'(t_0) = \varphi\bigl(Df(\gamma(t_0))(y-x)\bigr)$; in particular $g$ is continuous at every point of $[0,1]$. [L1, L4, step 1.3, step 1.4, algebra]

3.1 For every $t_0 \in [0,1]$ the bound in the statement gives $\|Df(\gamma(t_0))\| \le M$ because $\gamma(t_0) \in [x,y]$, so by [step 2.1], [L6] and $\|\varphi\| = 1$, $$|g'(t_0)| = \bigl|\varphi\bigl(Df(\gamma(t_0))(y-x)\bigr)\bigr| \le \|Df(\gamma(t_0))\| \cdot \|y-x\| \le M\|y-x\| .$$ [step 2.1, L6, L7, algebra]

3.2 By [L5] applied to $g$ on the interval $[0,1]$, whose hypotheses were verified in [step 2.1], there is $c \in (0,1)$ with $g(1)-g(0) = g'(c)$. [step 2.1, L5]

4.1 Combining [step 1.2], [step 1.3] and [step 2.1], $$\|f(y)-f(x)\| = \varphi(f(y))-\varphi(f(x)) = g(1)-g(0) = g'(c) = |g'(c)| \le M\|y-x\| ,$$ the second equality because $g(1)-g(0) = \|f(y)-f(x)\| \ge 0$ forces $g'(c) \ge 0$. [step 1.2, step 1.3, step 3.1, step 3.2, L7, algebra]

5.1 The estimate is [step 4.1] under the assumptions made there, and [step 1.1] disposes of the two degenerate cases; hence it holds in general. [step 1.1, step 4.1] ∎
