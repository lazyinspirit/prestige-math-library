---
id: cex-separately-continuous-not-jointly-continuous
kind: counterexample
title: "$g(x,y) = xy/(x^{2}+y^{2})$, extended by $g(0,0)=0$, is continuous in each variable separately and not continuous at the origin"
status: draft
origin: session
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, def-metric-continuity, thm-metric-continuity-characterisations, thm-algebra-of-continuous-functions, lem-metrics-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-p-norms-on-rn, def-norm-and-normed-space, def-metric-convergence, def-sequence, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, def-euclidean-inner-product, thm-componentwise-convergence-and-completeness, lem-standard-basis-of-f-n, def-continuity-real, lem-real-and-metric-notions-agree, thm-of-square-roots, def-integer-power, lem-of-inverse-positive, def-metric-space, lem-real-line-is-a-metric-space]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Multivariable calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Multivariable_calculus"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** a function $g : \mathbb{R}^{2} \to \mathbb{R}$ that is
continuous in each variable separately — that is, for which $t \mapsto g(t,b)$
and $t \mapsto g(a,t)$ are continuous on $\mathbb{R}$ for every fixed $a$ and $b$
([[def-continuity-real]]) — is continuous as a map
$(\mathbb{R}^{2}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$
([[def-vector-valued-functions-limits-and-continuity]],
[[def-metric-continuity]], [[lem-metrics-on-rn]]).

**The witness.** Define $g : \mathbb{R}^{2} \to \mathbb{R}$ by

$$g(p) \;:=\; \frac{p_0\,p_1}{p_0^{2}+p_1^{2}} \ \text{ for } p \ne 0, \qquad g(0) := 0 ,$$

writing $p = (p_0,p_1)$ for an element of $\mathbb{R}^{2}$, the set of functions
$2 \to \mathbb{R}$ ([[lem-metrics-on-rn]]). The quotient is defined for $p \ne 0$
because $p_0^{2}+p_1^{2} = \lVert p\rVert_2^{2} > 0$ there
([[def-euclidean-inner-product]], [[def-norm-and-normed-space]]).

Then $g$ is continuous in each variable separately at every point, and $g$ is
**not** continuous at $0$.

**This is the first function on $\mathbb{R}^{2}$ whose continuity this library
studies**, and its domain is $\mathbb{R}^{2}$ with the published metric $d_2$,
not an informal plane.

## Facts & Assumptions

**Given:** The function $g : \mathbb{R}^{2} \to \mathbb{R}$ above; the sequence $p^{(k)} := \bigl(1/\iota(k+1),\ 1/\iota(k+1)\bigr)$ in $\mathbb{R}^{2}$ ([[def-sequence]], [[def-canonical-natural]]).

[A1] The refuted claim, at this $g$: separate continuity everywhere implies continuity as a map $(\mathbb{R}^{2},d_2) \to (\mathbb{R},d_{\mathbb{R}})$.

[L1] Continuity of a real-valued function on a metric space, and the sequential characterisation: $g$ is continuous at $q$ if and only if $g(p^{(k)}) \to g(q)$ whenever $p^{(k)} \to q$ ([[def-vector-valued-functions-limits-and-continuity]], [[def-metric-continuity]], [[thm-metric-continuity-characterisations]] clauses (a) and (d), [[def-metric-space]], [[lem-real-line-is-a-metric-space]]).

[L2] Convergence in $(\mathbb{R}^{2},d_2)$ is componentwise ([[thm-componentwise-convergence-and-completeness]] clause 1, [[def-metric-convergence]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[def-p-norms-on-rn]], [[lem-standard-basis-of-f-n]]).

[L3] Algebra of continuous real functions on a subset of $\mathbb{R}$: sums, products and quotients with nonvanishing denominator of continuous functions are continuous, and every polynomial function is continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]], [[lem-real-and-metric-notions-agree]]).

[L4] The canonical natural: $\iota(k+1) > 0$ for every $k \in \mathbb{N}$, and for every real $\varepsilon > 0$ there is $k$ with $1/\iota(k+1) < \varepsilon$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[cor-archimedean-reciprocal]], [[lem-of-inverse-positive]]).

[L5] $\lVert p\rVert_2^{2} = p_0^{2}+p_1^{2}$, which is $0$ only for $p = 0$ ([[def-euclidean-inner-product]], [[thm-of-square-roots]], [[def-integer-power]], [[thm-componentwise-limits-and-continuity]]).

## Counterexample

**Proof technique:** direct.

1.1 For a fixed real $b \ne 0$ the function $t \mapsto g(t,b) = tb/(t^{2}+b^{2})$ is a quotient of two polynomial functions of $t$ whose denominator never vanishes, since $t^{2}+b^{2} \ge b^{2} > 0$; so it is continuous on $\mathbb{R}$. [L3, L5]

1.2 For $b = 0$ the function $t \mapsto g(t,0)$ is constantly $0$: at $t \ne 0$ its value is $t\cdot 0/(t^{2}+0) = 0$, and at $t = 0$ it is $g(0) = 0$. A constant function is continuous. [L3, L5]

1.3 Each coordinate sequence of $\bigl(p^{(k)}\bigr)$ is $k \mapsto 1/\iota(k+1)$, which converges to $0$: given a rational $\varepsilon > 0$, an index $K$ with $1/\iota(K+1) < \varepsilon$ gives $0 < 1/\iota(k+1) \le 1/\iota(K+1) < \varepsilon$ for every $k \ge K$. Hence $p^{(k)} \to 0$ in $(\mathbb{R}^{2},d_2)$. [L2, L4]

2.1 By the symmetry $g(p_0,p_1) = g(p_1,p_0)$, the same two arguments give continuity of $t \mapsto g(a,t)$ for every fixed real $a$. [step 1.1, step 1.2]

2.2 For every $k$ the point $p^{(k)}$ is nonzero, and with $u := 1/\iota(k+1)$ its value is $g(p^{(k)}) = u\cdot u/(u^{2}+u^{2}) = u^{2}/\bigl(\iota(2)u^{2}\bigr) = 1/\iota(2)$. [step 1.3, L4, L5]

3.1 So $g$ is continuous in each variable separately at every point of $\mathbb{R}^{2}$. [step 1.1, step 1.2, step 2.1]

3.2 So the constant sequence $\bigl(g(p^{(k)})\bigr)$ converges to $1/\iota(2)$, while $g(0) = 0$ and $1/\iota(2) \ne 0$ because $\iota(2) > 0$. [step 2.2, L4]

4.1 By the sequential characterisation of continuity, $g$ is not continuous at $0$: the sequence $p^{(k)} \to 0$ has $g(p^{(k)}) \not\to g(0)$. [step 1.3, step 2.2, step 3.2, L1]

5.1 Steps 3.1 and 4.1 together refute [A1]: $g$ is separately continuous everywhere and is not continuous at the origin. [step 3.1, step 4.1, A1] ∎

## Remarks

- **What the sequence sees.** Along the line $p_1 = p_0$ the value of $g$ is constantly $1/\iota(2)$ off the origin, and points of that line come arbitrarily close to the origin; along either axis the value is constantly $0$. So the two partial functions through the origin cannot detect what a general approach does, and that is the whole phenomenon.

- **Separate continuity is strictly weaker, and no repair is proposed here.** What the refuted claim would need is a hypothesis controlling the two variables together — joint continuity is exactly such a hypothesis, and it is what [[def-vector-valued-functions-limits-and-continuity]] defines. Nothing here claims that any weaker hypothesis suffices.

- **Nothing is claimed about $g$ away from the origin.** The refutation needs only the behaviour of $g$ at $0$ together with the two partial functions, and that is all that is proved. In particular this item does **not** assert that $g$ is continuous at the points $p \ne 0$, true though that is; establishing it would need an algebra of continuous real-valued functions on a metric domain, which [[thm-componentwise-limits-and-continuity]] provides for sums, scalar multiples and inner products but not for quotients.
