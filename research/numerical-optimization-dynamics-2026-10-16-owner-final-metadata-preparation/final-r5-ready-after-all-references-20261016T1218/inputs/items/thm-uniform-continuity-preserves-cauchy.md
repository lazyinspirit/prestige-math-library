---
id: thm-uniform-continuity-preserves-cauchy
kind: theorem
title: "A uniformly continuous map sends Cauchy sequences to Cauchy sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-uniform-continuity, def-cauchy-in-metric, def-metric-space,
       lem-rat-embeds-dense, def-equivalent-metrics]
justified_by: []
forward_refs: [cex-continuous-map-destroying-cauchyness]
aliases: []
landmark: true
short: "uniform continuity preserves Cauchy"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]), let
$f : X \to Y$ be uniformly continuous ([[def-metric-uniform-continuity]]) and let
$(x_k)$ be a Cauchy sequence in $X$ ([[def-cauchy-in-metric]]). Then
$\big(f(x_k)\big)$ is a Cauchy sequence in $Y$.

**Continuity alone does not suffice**, and the failure is not marginal: a
continuous map can send a Cauchy sequence to an unbounded one. The witness is
named in the remarks below.

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$ and $(Y,d_Y)$, a uniformly continuous $f : X \to Y$, a Cauchy sequence $(x_k)$ in $X$, and a real $\varepsilon > 0$.

[A1] Uniform continuity: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $d_Y(f(x),f(x')) < \varepsilon$ whenever $d_X(x,x') < \delta$, for all $x,x' \in X$ ([[def-metric-uniform-continuity]]).

[A2] Cauchyness of $(x_k)$: for every real $\delta > 0$ there is $K$ with $d_X(x_m,x_n) < \delta$ for all $m,n \ge K$ ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

[L1] Cauchyness in $Y$ is established by producing, for every real $\varepsilon > 0$, an index $K$ with $d_Y(f(x_m),f(x_n)) < \varepsilon$ for all $m,n \ge K$ ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** direct.

1.1 Apply [A1] to $\varepsilon$ to obtain a real $\delta > 0$ such that $d_Y(f(x),f(x')) < \varepsilon$ for every pair $x, x' \in X$ with $d_X(x,x') < \delta$. [A1, choose]

1.2 Apply [A2] to that $\delta$ to obtain $K \in \mathbb{N}$ with $d_X(x_m,x_n) < \delta$ for all $m,n \ge K$. [A2]

2.1 For all $m,n \ge K$ the pair $(x_m, x_n)$ satisfies the hypothesis of step 1.1, so $d_Y\big(f(x_m), f(x_n)\big) < \varepsilon$. [step 1.1, step 1.2]

3.1 Since $\varepsilon > 0$ was an arbitrary real, $\big(f(x_k)\big)$ is Cauchy in $(Y,d_Y)$. [step 2.1, L1] ∎

## Remarks

- **This is the exact point where uniform continuity is indispensable.** The $\delta$ produced in step 1.1 is chosen before any index is known, and it is then fed to the Cauchy condition. With ordinary continuity the $\delta$ would depend on a base point, and there is no base point available: the sequence has no limit in $X$ to serve as one. That is not a defect of the proof but the reason the statement is false for continuous maps; the witness is $x \mapsto 1/x$ on $(0,1)$ ([[cex-continuous-map-destroying-cauchyness]]).
- **No completeness and no surjectivity is assumed**, and $f$ need not be injective. The theorem is a statement about a single map and a single sequence.
- **Consequences used later on this page.** Uniformly equivalent metrics have the same Cauchy sequences ([[def-equivalent-metrics]]), because uniform equivalence says exactly that both identity maps are uniformly continuous; and a uniformly continuous map defined on a dense subspace transports the Cauchy sequences that approximate a point, which is what makes [[thm-uniformly-continuous-extension-from-dense]] possible.
