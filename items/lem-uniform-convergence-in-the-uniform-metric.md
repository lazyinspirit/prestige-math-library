---
id: lem-uniform-convergence-in-the-uniform-metric
kind: lemma
title: "Convergence in the uniform metric is exactly uniform convergence: one $N$ serving every point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topology-of-uniform-convergence, lem-uniform-metric-on-a-function-space,
       lem-bounded-remetrisation, def-metric-convergence, def-metric-ball,
       def-metric-space, def-max-min, lem-finite-set-has-max, lem-rat-embeds-dense,
       def-complete-ordered-field, lem-sup-unique, def-ordered-field,
       lem-convergence-in-the-pointwise-topology]
justified_by: []
aliases: []
landmark: false
short: "uniform metric convergence is uniform convergence"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
    - title: "J. Munkres, Topology, 2nd ed., §21"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$ be a nonempty set, let $(Y,d)$ be a metric space
([[def-metric-space]]), and let $\bar\rho$ be the uniform metric on $Y^{X}$
([[lem-uniform-metric-on-a-function-space]]). Let $(f_k)$ be a sequence in
$Y^{X}$ and let $f \in Y^{X}$. Then

$$f_k \to f \text{ in } (Y^{X}, \bar\rho) \qquad \Longleftrightarrow \qquad (f_k) \text{ converges uniformly to } f ,$$

convergence in a metric space being [[def-metric-convergence]] and uniform
convergence being [[def-topology-of-uniform-convergence]].

**This is what makes the name of the topology accurate**, and it is the reason
the truncation at $1$ in the uniform metric costs nothing: below the threshold the
truncated and untruncated distances agree, and convergence is a statement about
arbitrarily small distances. No choice principle is used.

## Facts & Assumptions

**Given:** A nonempty set $X$, a metric space $(Y,d)$, the truncated metric $\bar d = \min\{d,1\}$ on $Y$, the uniform metric $\bar\rho(g,h) = \sup_x \bar d(g(x),h(x))$ on $Y^{X}$, a sequence $(f_k)$ in $Y^{X}$ and a point $f \in Y^{X}$.

[L1] $\bar d(u,v) \le d(u,v)$ and $\bar d(u,v) \le 1$ for all $u,v \in Y$, the minimum of a two-element set of reals being a lower bound of both elements and one of them ([[lem-bounded-remetrisation]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L2] If $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$: the minimum $\min\{d(u,v),1\}$ is one of its two arguments, and it is not $1$, so it is $d(u,v)$ ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-bounded-remetrisation]]).

[L3] $\bar\rho(g,h)$ is an upper bound of $\{\, \bar d(g(x),h(x)) : x \in X \,\}$ and is the least one; in particular $\bar d(g(x),h(x)) \le \bar\rho(g,h)$ for every $x \in X$, and any real bounding all these values above bounds $\bar\rho(g,h)$ ([[lem-uniform-metric-on-a-function-space]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

[L4] $g_k \to g$ in a metric space means: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with the distance from $g_k$ to $g$ below $\varepsilon$ for every $k \ge K$; and the test with a **real** $\varepsilon > 0$ is equivalent, since below every positive real lies a positive rational ([[def-metric-convergence]], [[lem-rat-embeds-dense]], [[def-metric-ball]]).

[L5] The minimum of two positive reals is positive, and halving a positive real gives a positive real strictly below it ([[lem-finite-set-has-max]], [[def-max-min]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(f_k)$ converges uniformly to $f$, and let $\varepsilon > 0$ be real. [assume-hyp]

1.2 Suppose instead that $f_k \to f$ in $(Y^{X}, \bar\rho)$, and let $\varepsilon > 0$ be real. [assume-hyp]

2.1 Under step 1.1: put $\eta := \varepsilon / 2$, a real with $0 < \eta < \varepsilon$, and take $K \in \mathbb{N}$ with $d(f_k(x), f(x)) < \eta$ for every $x \in X$ and every $k \ge K$. [step 1.1, L5, choose]

2.2 Under step 1.2: put $\eta := \min\{\varepsilon, 1\} / 2$, a real with $0 < \eta \le 1/2 < 1$ and $\eta < \varepsilon$, and take $K \in \mathbb{N}$ with $\bar\rho(f_k, f) < \eta$ for every $k \ge K$. [step 1.2, L4, L5, choose]

3.1 Under step 1.1: for $k \ge K$ and every $x \in X$ we have $\bar d(f_k(x), f(x)) \le d(f_k(x), f(x)) < \eta$, so $\eta$ bounds that set of values above and hence $\bar\rho(f_k, f) \le \eta < \varepsilon$. [step 2.1, L1, L3]

3.2 Under step 1.2: for $k \ge K$ and every $x \in X$ we have $\bar d(f_k(x), f(x)) \le \bar\rho(f_k, f) < \eta < 1$, so $\bar d(f_k(x), f(x)) = d(f_k(x), f(x))$ and therefore $d(f_k(x), f(x)) < \eta < \varepsilon$. [step 2.2, L2, L3]

4.1 Step 3.1 produces, for each real $\varepsilon > 0$, an index $K$ with $\bar\rho(f_k,f) < \varepsilon$ for every $k \ge K$, which is convergence $f_k \to f$ in $(Y^{X},\bar\rho)$; this is the forward implication. [step 3.1, L4]

4.2 Step 3.2 produces, for each real $\varepsilon > 0$, an index $K$ with $d(f_k(x),f(x)) < \varepsilon$ for every $x \in X$ and every $k \ge K$, which is uniform convergence of $(f_k)$ to $f$; this is the converse implication. [step 3.2]

5.1 Steps 4.1 and 4.2 are the two implications, so the two conditions are equivalent. [step 4.1, step 4.2] ∎

## Remarks

- **Where the threshold $1$ enters and where it does not.** It enters only in step 3.2, which needs the distance to be strictly below $1$ before the truncation can be undone; that is arranged by shrinking $\eta$ to at most $1/2$, which costs nothing because $\eta$ is being made small anyway. It does not enter the forward direction at all, since $\bar d \le d$ outright.

- **The lemma fails for the *value* of the distance, not for convergence.** The numbers $\bar\rho(f,g)$ and $\sup_x d(f(x),g(x))$ differ as soon as some distance exceeds $1$, and the second need not exist. What the lemma says is that the two determine the same convergent sequences and the same limits, which is all a topology sees.

- **Uniform convergence implies pointwise convergence, and not conversely.** From the definition, an index serving every point serves each point separately, so a uniformly convergent sequence converges at every point ([[lem-convergence-in-the-pointwise-topology]]). The converse fails, and the companion page exhibits the standard witness on $[0,1]$.
