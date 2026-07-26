---
id: ex-lipschitz-extension-from-the-rationals
kind: example
title: "A Lipschitz function on $\\mathbb{Q}$ extends uniquely to a Lipschitz function on $\\mathbb{R}$ with the same constant"
status: published
origin: session
deps: [thm-uniformly-continuous-extension-from-dense, def-lipschitz-holder-contraction,
       lem-rat-embeds-dense, thm-euclidean-space-complete, lem-real-line-is-a-metric-space,
       def-isometry-and-metric-embedding, lem-limit-preserves-order, thm-algebra-of-limits,
       thm-metric-sequential-closure, def-metric-convergence,
       thm-metric-regularity-hierarchy, lem-metric-reverse-triangle,
       thm-metric-continuity-characterisations, def-metric-interior-closure-boundary,
       def-countable-choice, def-metric-uniform-continuity, def-metric-continuity,
       def-real-limit, lem-of-abs-value, def-metric-space, def-complete-metric-space,
       def-metric-ball, thm-uniform-continuity-preserves-cauchy]
justified_by: []
aliases: []
landmark: true
short: "Lipschitz extension from $\\mathbb{Q}$"
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
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
pipeline_run: null
---

## Example

Regard $\mathbb{Q}$ as a subspace of $\mathbb{R}$ with the metric inherited from
the usual metric ([[lem-rat-embeds-dense]],
[[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), let
$L \in \mathbb{R}$ with $L \ge 0$, and let $f : \mathbb{Q} \to \mathbb{R}$ be
Lipschitz with constant $L$ ([[def-lipschitz-holder-contraction]]), that is

$$|f(p) - f(q)| \;\le\; L\,|p - q| \qquad \text{for all } p,q \in \mathbb{Q}.$$

**Then there is exactly one continuous $F : \mathbb{R} \to \mathbb{R}$ with
$F(q) = f(q)$ for every $q \in \mathbb{Q}$, and that $F$ is again Lipschitz with
the same constant $L$.**

## Facts & Assumptions

**Given:** $\mathbb{Q}$ as a metric subspace of $\mathbb{R}$; a real $L \ge 0$; a Lipschitz $f : \mathbb{Q} \to \mathbb{R}$ with constant $L$; reals $x, y$.

[A1] Lipschitz hypothesis: $|f(p) - f(q)| \le L\,|p-q|$ for all $p,q \in \mathbb{Q}$ ([[def-lipschitz-holder-contraction]]).

[L1] A Lipschitz map is uniformly continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-uniform-continuity]]).

[L2] $\mathbb{Q}$ is dense in $\mathbb{R}$: every ball of $\mathbb{R}$ contains a rational ([[lem-rat-embeds-dense]], [[def-metric-interior-closure-boundary]], [[def-metric-ball]]).

[L3] $\mathbb{R}$ with the usual metric is complete ([[thm-euclidean-space-complete]], [[def-complete-metric-space]], [[lem-real-line-is-a-metric-space]], [[def-metric-space]]).

[L4] Extension from a dense subspace into a complete space: a uniformly continuous map extends to a uniformly continuous map, and that extension is the only continuous one ([[thm-uniformly-continuous-extension-from-dense]]).

[L5] A point of the closure is the limit of a sequence from the set; this direction spends $\mathrm{AC}_\omega$ ([[thm-metric-sequential-closure]], [[def-countable-choice]], [[def-metric-convergence]]).

[L6] A continuous map is sequentially continuous ([[thm-metric-continuity-characterisations]], [[def-metric-continuity]]).

[L7] Algebra of limits, and limits preserve non-strict inequalities holding eventually ([[thm-algebra-of-limits]], [[lem-limit-preserves-order]], [[def-real-limit]]).

[L8] $\big||a| - |b|\big| \le |a - b|$ for reals, which is the reverse triangle inequality of the usual metric of $\mathbb{R}$ with third point $0$ ([[lem-metric-reverse-triangle]], [[lem-of-abs-value]]).

## Verification

**Proof technique:** direct.

1.1 By [A1] and [L1] the map $f$ is uniformly continuous on the subspace $\mathbb{Q}$ of $\mathbb{R}$. [A1, L1]

1.2 Let $x,y \in \mathbb{R}$. By density and [L5] there are sequences $(p_k)$ and $(q_k)$ of rationals with $p_k \to x$ and $q_k \to y$. [L2, L5]

2.1 $\mathbb{Q}$ is dense in $\mathbb{R}$ and $\mathbb{R}$ is complete, so [L4] supplies a uniformly continuous $F : \mathbb{R} \to \mathbb{R}$ with $F(q) = f(q)$ for every rational $q$, and $F$ is the only continuous map $\mathbb{R} \to \mathbb{R}$ with that property. [step 1.1, L2, L3, L4]

2.2 Likewise $p_k - q_k \to x - y$, so $|p_k - q_k| \to |x-y|$ and $L\,|p_k - q_k| \to L\,|x-y|$. [step 1.2, L7, L8]

3.1 $F$ is continuous, being uniformly continuous, so $F(p_k) \to F(x)$ and $F(q_k) \to F(y)$; hence $F(p_k) - F(q_k) \to F(x) - F(y)$ and, by [L8], $|F(p_k) - F(q_k)| \to |F(x) - F(y)|$. [step 2.1, step 1.2, L6, L7, L8]

3.2 For every $k$ the terms $p_k, q_k$ are rational and $F$ agrees with $f$ on them, so $|F(p_k) - F(q_k)| = |f(p_k) - f(q_k)| \le L\,|p_k - q_k|$ by [A1]. [step 2.1, step 1.2, A1]

4.1 Passing to the limit in step 3.2, using steps 3.1 and 2.2, gives $|F(x) - F(y)| \le L\,|x-y|$; as $x,y$ were arbitrary reals, $F$ is Lipschitz with constant $L$. [step 3.1, step 2.2, step 3.2, L7]

5.1 So $F$ exists, is the unique continuous extension of $f$, and is Lipschitz with the same constant $L$. [step 2.1, step 4.1] ∎

## Remarks

- **The extension theorem gives uniform continuity; the constant is recovered separately.** [[thm-uniformly-continuous-extension-from-dense]] transports a modulus of continuity, not a Lipschitz constant, so step 4.1 is genuinely needed. The mechanism is generic: a non-strict inequality that holds on a dense set and whose two sides are continuous holds everywhere, by [[lem-limit-preserves-order]].
- **Nothing here is special to $\mathbb{Q}$ and $\mathbb{R}$.** The same argument extends a Lipschitz map from any dense subspace of any metric space into any complete metric space, with the same constant; $\mathbb{Q} \subseteq \mathbb{R}$ is used only because it is the density statement this library already has ([[lem-rat-embeds-dense]]).
- **Uniqueness is what makes "the" extension meaningful**, and it needs only continuity, not the Lipschitz condition: two continuous maps agreeing on a dense set agree everywhere ([[thm-metric-sequential-closure]], [[thm-metric-continuity-characterisations]]).
- **The hypothesis cannot be relaxed to continuity.** A continuous $f : \mathbb{Q} \to \mathbb{R}$ need not extend continuously to $\mathbb{R}$ at all, and the reason is the same one that defeats every argument of this kind: continuity does not control a function along a Cauchy sequence ([[thm-uniform-continuity-preserves-cauchy]], [[cex-continuous-map-destroying-cauchyness]]).
