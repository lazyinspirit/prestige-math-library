---
id: thm-metric-regularity-hierarchy
kind: theorem
title: "Contraction implies Lipschitz implies uniformly continuous implies continuous; every Hölder map is uniformly continuous, and a Lipschitz map on a bounded space is Hölder for every exponent"
status: draft
origin: session
deps: [def-lipschitz-holder-contraction, def-metric-uniform-continuity,
       def-metric-continuity, def-rational-power, lem-rational-power-monotone,
       def-metric-bounded-diameter, lem-rational-power-laws, def-metric-space,
       lem-metric-nonnegativity, lem-of-inverse-positive, lem-of-sign-rules,
       def-rat-order, thm-of-archimedean, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-square-root-is-half-holder, cex-continuous-map-destroying-cauchyness]
aliases: []
landmark: true
short: "contraction $\\Rightarrow$ Lipschitz $\\Rightarrow$ uniform $\\Rightarrow$ continuous"
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
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Hölder condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder_condition"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function, with the three regularity conditions as in
[[def-lipschitz-holder-contraction]]. Then:

1. If $f$ is a contraction, it is Lipschitz.
2. If $f$ is Lipschitz, it is uniformly continuous
   ([[def-metric-uniform-continuity]]).
3. If $f$ is uniformly continuous, it is continuous
   ([[def-metric-continuity]]).
4. If $f$ is $\alpha$-Hölder for some rational $\alpha$ with $0 < \alpha \le 1$,
   it is uniformly continuous.
5. Suppose $X$ is nonempty and bounded, and put
   $R := \operatorname{diam}(X) + 1$, a real with $R > 0$
   ([[def-metric-bounded-diameter]]). If $f$ is Lipschitz with constant $L$, then
   for **every** rational $\alpha$ with $0 < \alpha \le 1$ the map $f$ is
   $\alpha$-Hölder with constant $L\,R^{\,1-\alpha}$.

**Claim 5 carries its boundedness hypothesis for a reason, and no unconditional
"Lipschitz implies Hölder" is asserted anywhere here.** On an unbounded space the
implication is false; the witness and its verification are in the first remark
below.

**Strictness is not claimed.** The five implications are asserted and nothing
more; that none of them reverses is witnessed elsewhere, and those witnesses are
not prerequisites of this theorem. See the second remark.

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$, $(Y,d_Y)$, a function $f : X \to Y$, a real $\varepsilon > 0$, and a rational $\alpha$ with $0 < \alpha \le 1$.

[A1] $f$ is a contraction with constant $q$: $f$ is Lipschitz with constant $q$ and $0 \le q < 1$ ([[def-lipschitz-holder-contraction]]).

[A2] $f$ is Lipschitz with constant $L \ge 0$: $d_Y(f(x),f(x')) \le L\,d_X(x,x')$ for all $x,x' \in X$ ([[def-lipschitz-holder-contraction]]).

[A3] $f$ is $\alpha$-Hölder with constant $C \ge 0$: $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for all $x,x' \in X$ ([[def-lipschitz-holder-contraction]]).

[A4] $X$ is nonempty and bounded, so $\operatorname{diam}(X)$ exists and $d_X(x,x') \le \operatorname{diam}(X)$ for all $x,x' \in X$ ([[def-metric-bounded-diameter]], [[def-complete-ordered-field]]).

[L1] Uniform continuity: one $\delta > 0$ per $\varepsilon > 0$ serving every pair ([[def-metric-uniform-continuity]]); continuity at a point allows $\delta$ to depend on the point as well ([[def-metric-continuity]]).

[L2] Rational powers of a positive base, with $a^{1} = a$, $a^{0} = 1$, and the supplementary clause $0^{r} = 0$ for rational $r > 0$ ([[def-rational-power]], [[def-rat-order]]).

[L3] Exponent laws for positive bases: $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, and $a^{r} > 0$ ([[lem-rational-power-laws]]).

[L4] Monotonicity in the base: for rational $r > 0$ and $0 < a < b$ one has $a^{r} < b^{r}$ ([[lem-rational-power-monotone]]).

[L5] A metric is nonnegative, and $d(x,x') = 0$ forces $x = x'$ ([[lem-metric-nonnegativity]], [[def-metric-space]]).

[L6] Positivity of inverses and multiplication of inequalities by positives ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is immediate from the definitions: a contraction with constant $q$ is Lipschitz with the constant $q$, and $q \ge 0$. [A1, A2]

1.2 Claim 2: assume [A2] and put $\delta := \varepsilon/(L+1)$, a positive real since $L + 1 > 0$. If $d_X(x,x') < \delta$ then, using $d_X(x,x') \ge 0$, $d_Y(f(x),f(x')) \le L\,d_X(x,x') \le (L+1)\,d_X(x,x') < (L+1)\delta = \varepsilon$; the same $\delta$ served every pair, so $f$ is uniformly continuous. [A2, L1, L5, L6]

1.3 Claim 3: assume $f$ uniformly continuous and let $a \in X$; the $\delta$ belonging to $\varepsilon$ satisfies $d_X(x,a) < \delta \Rightarrow d_Y(f(x),f(a)) < \varepsilon$ for all $x$, which is continuity at $a$, and $a$ was arbitrary. [L1]

1.4 Claim 4, the case of equal points: assume [A3]; if $d_X(x,x') = 0$ then $x = x'$, so $d_Y(f(x),f(x')) = 0 < \varepsilon$ whatever $\delta$ is. [A3, L5]

1.5 Claim 4, the main case: put $\eta := \varepsilon/(C+1) > 0$ and $\delta := \eta^{1/\alpha}$, which is a positive real because $1/\alpha$ is a positive rational and $\eta > 0$. [L2, L3, L6, choose]

1.6 Claim 5: assume [A2] and [A4], put $R := \operatorname{diam}(X) + 1$ and $C := L\,R^{\,1-\alpha}$. Since $\operatorname{diam}(X) \ge 0$ we have $R \ge 1 > 0$, so $R^{\,1-\alpha}$ is defined and positive and $C \ge 0$. [A2, A4, L2, L3]

2.1 Let $t := d_X(x,x')$ with $0 < t < \delta$. Then $t^{\alpha} < \delta^{\alpha} = (\eta^{1/\alpha})^{\alpha} = \eta^{(1/\alpha)\alpha} = \eta^{1} = \eta$, so $d_Y(f(x),f(x')) \le C\,t^{\alpha} \le (C+1)\,t^{\alpha} < (C+1)\eta = \varepsilon$. [step 1.5, A3, L2, L3, L4, L6]

2.2 Let $x, x' \in X$ and $t := d_X(x,x')$; then $0 \le t \le \operatorname{diam}(X) < R$. If $t = 0$ then $d_Y(f(x),f(x')) \le L \cdot 0 = 0 = C \cdot 0^{\alpha} = C\,t^{\alpha}$, because $\alpha > 0$. [step 1.6, A2, A4, L2, L5]

2.3 If $t > 0$ then $t = t^{\alpha + (1-\alpha)} = t^{\alpha}\,t^{\,1-\alpha}$ and $t^{\,1-\alpha} \le R^{\,1-\alpha}$: for $\alpha < 1$ the exponent $1-\alpha$ is a positive rational and $0 < t < R$, and for $\alpha = 1$ both sides are $1$. Multiplying by $L\,t^{\alpha} \ge 0$ gives $L t = L\,t^{\alpha}\,t^{\,1-\alpha} \le L\,R^{\,1-\alpha}\,t^{\alpha} = C\,t^{\alpha}$, and hence $d_Y(f(x),f(x')) \le L t \le C\,t^{\alpha}$. [step 1.6, A2, L2, L3, L4, L6]

3.1 Steps 1.4 and 2.1 cover every pair with $d_X(x,x') < \delta$, and $\delta$ did not depend on the pair, so $f$ is uniformly continuous: claim 4 holds. [step 1.4, step 2.1, L1]

4.1 Steps 2.2 and 2.3 give $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for every pair, so $f$ is $\alpha$-Hölder with constant $C = L\,R^{\,1-\alpha}$, which is claim 5; claims 1 to 4 are steps 1.1, 1.2, 1.3 and 3.1. [step 1.1, step 1.2, step 1.3, step 3.1, step 2.2, step 2.3] ∎

## Remarks

- **Boundedness in claim 5 cannot be dropped, and here is the witness.** Take $X = Y = \mathbb{R}$ with the usual metric and $f(x) = x$, which is Lipschitz with constant $1$. Suppose $f$ were $\alpha$-Hölder with constant $C \ge 0$ for some rational $\alpha$ with $0 < \alpha < 1$, so that $|x - y| \le C\,|x-y|^{\alpha}$ for all reals $x,y$. Taking $y = 0$ and $x = t$ with $t > 0$, and writing $t = t^{\alpha} t^{\,1-\alpha}$ ([[lem-rational-power-laws]]), division by $t^{\alpha} > 0$ gives $t^{\,1-\alpha} \le C$ for every real $t > 0$. At $t = 1$ this reads $1 \le C$, so $C > 0$; and then choosing a natural $n$ with $n > C^{1/(1-\alpha)}$, which exists by the Archimedean property ([[thm-of-archimedean]]), and raising to the positive rational power $1-\alpha$ ([[lem-rational-power-monotone]], [[lem-rational-power-laws]]) gives $n^{\,1-\alpha} > \big(C^{1/(1-\alpha)}\big)^{1-\alpha} = C$, contradicting $t^{\,1-\alpha} \le C$ at $t = n$. So the identity of $\mathbb{R}$ is Lipschitz and $\alpha$-Hölder for no exponent $\alpha < 1$. A chain reading "Lipschitz implies Hölder implies uniformly continuous" is therefore false as stated, which is why claims 4 and 5 are separated here and why claim 5 carries a hypothesis.
- **No implication reverses, and two of the witnesses are on the companion page.** The square root on $[0,\infty)$ is $1/2$-Hölder and not Lipschitz ([[ex-square-root-is-half-holder]]), and $x \mapsto 1/x$ on $(0,1)$ is continuous and not uniformly continuous ([[cex-continuous-map-destroying-cauchyness]]). Both are read here as orientation only: this theorem does not depend on them and claims nothing about strictness. That a Lipschitz map need not be a contraction is visible already in the identity map, whose only Lipschitz constants are the reals $\ge 1$.
- **The constant $L+1$ and the constant $C+1$ are there to avoid a case split.** Dividing by $L$ or by $C$ would require them to be nonzero, and a Lipschitz constant or a Hölder constant is allowed to be $0$ ([[def-lipschitz-holder-contraction]]). Enlarging the constant by $1$ is harmless, since the defining inequalities are preserved by enlarging the constant.
- **What claim 5 costs.** The constant it produces, $L\,R^{1-\alpha}$, grows with the diameter of $X$, and that dependence is exactly what the unbounded counterexample above exploits: as $R \to \infty$ no single Hölder constant survives.
