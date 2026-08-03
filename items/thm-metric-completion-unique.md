---
id: thm-metric-completion-unique
kind: theorem
title: "A completion is unique up to a unique isometry fixing the original space, and uniformly continuous maps into complete spaces extend through it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-metric-completion-exists, thm-uniformly-continuous-extension-from-dense,
       def-metric-completion, def-isometry-and-metric-embedding,
       lem-isometry-is-an-embedding, def-metric-uniform-continuity,
       def-complete-metric-space, thm-metric-sequential-closure,
       def-metric-convergence, lem-metric-reverse-triangle, lem-limit-unique,
       def-countable-choice, thm-metric-continuity-characterisations,
       def-metric-continuity, def-metric-interior-closure-boundary,
       def-metric-space, def-injection-surjection-bijection, def-real-limit,
       lem-of-abs-value, thm-euclidean-space-complete, thm-of-archimedean, def-interval]
justified_by: []
forward_refs: [cex-continuous-map-destroying-cauchyness]
aliases: []
landmark: true
short: "uniqueness of the completion"
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
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]); completions of it exist
([[thm-metric-completion-exists]], [[def-metric-completion]]). Then:

1. **Universal property.** Let $\big((\widehat{X},\widehat{d}), \iota\big)$ be a
   completion of $(X,d)$, let $(Z,d_Z)$ be a complete metric space
   ([[def-complete-metric-space]]) and let $f : X \to Z$ be uniformly continuous
   ([[def-metric-uniform-continuity]]). Then there is exactly one continuous
   $F : \widehat{X} \to Z$ with $F \circ \iota = f$, and that $F$ is uniformly
   continuous.
2. **Uniqueness of the completion.** Let
   $\big((\widehat{X}_1,\widehat{d}_1), \iota_1\big)$ and
   $\big((\widehat{X}_2,\widehat{d}_2), \iota_2\big)$ be completions of $(X,d)$.
   Then there is exactly one continuous
   $\varphi : \widehat{X}_1 \to \widehat{X}_2$ with
   $\varphi \circ \iota_1 = \iota_2$, and that $\varphi$ is an isometry
   ([[def-isometry-and-metric-embedding]]).

So a completion is determined by $(X,d)$ up to a unique isometry compatible with
the embeddings, which is what licenses the phrase *the* completion from here on.

## Facts & Assumptions

**Given:** A metric space $(X,d)$; completions $\big((\widehat{X},\widehat{d}),\iota\big)$, $\big((\widehat{X}_1,\widehat{d}_1),\iota_1\big)$ and $\big((\widehat{X}_2,\widehat{d}_2),\iota_2\big)$ of it; a complete metric space $(Z,d_Z)$; a uniformly continuous $f : X \to Z$; a real $\varepsilon > 0$.

[A1] Completion: $\widehat{X}$ is complete, $\iota$ is an isometric embedding, and $\iota[X]$ is dense in $\widehat{X}$ ([[def-metric-completion]], [[def-metric-interior-closure-boundary]]).

[A2] Uniform continuity of $f$: one $\delta > 0$ per $\varepsilon > 0$ serving every pair ([[def-metric-uniform-continuity]]).

[L1] An isometric embedding is injective and is an isometry onto its image, whose subspace metric is the restriction ([[lem-isometry-is-an-embedding]], [[def-isometry-and-metric-embedding]], [[def-injection-surjection-bijection]]).

[L2] Extension from a dense subspace: a uniformly continuous map from a dense subspace of a metric space into a complete metric space has a uniformly continuous extension to the whole space, and it is the only continuous one ([[thm-uniformly-continuous-extension-from-dense]]).

[L3] A point of the closure is a limit of a sequence from the set; this direction spends $\mathrm{AC}_\omega$ ([[thm-metric-sequential-closure]], [[def-countable-choice]], [[def-metric-convergence]]).

[L4] A continuous map is sequentially continuous ([[thm-metric-continuity-characterisations]], [[def-metric-continuity]]).

[L5] Quadrilateral estimate: $|d(u,v) - d(u',v')| \le d(u,u') + d(v,v')$, from the reverse triangle inequality and the triangle inequality for the absolute value ([[lem-metric-reverse-triangle]], [[lem-of-abs-value]]).

[L6] Limits of real sequences are unique ([[lem-limit-unique]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the map $\iota$ is an isometry of $X$ onto the subspace $\iota[X]$ of $\widehat{X}$, so its inverse $\iota^{-1} : \iota[X] \to X$ is an isometry and $\widehat{d}(u,v) = d(\iota^{-1}(u), \iota^{-1}(v))$ for all $u,v \in \iota[X]$. [A1, L1]

2.1 Hence $f \circ \iota^{-1} : \iota[X] \to Z$ is uniformly continuous: the $\delta$ that [A2] supplies for $\varepsilon$ also serves here, since $\widehat{d}(u,v) < \delta$ gives $d(\iota^{-1}(u),\iota^{-1}(v)) < \delta$ and hence $d_Z(f(\iota^{-1}(u)), f(\iota^{-1}(v))) < \varepsilon$. [step 1.1, A2]

3.1 $\iota[X]$ is dense in $\widehat{X}$ and $Z$ is complete, so [L2] gives a uniformly continuous $F : \widehat{X} \to Z$ extending $f \circ \iota^{-1}$, and $F$ is the only continuous map $\widehat{X} \to Z$ that does so. [step 2.1, A1, L2]

4.1 $F \circ \iota = f$, since $F(\iota(x)) = f(\iota^{-1}(\iota(x))) = f(x)$ for every $x \in X$; and if $G : \widehat{X} \to Z$ is continuous with $G \circ \iota = f$ then $G$ agrees with $f \circ \iota^{-1}$ on $\iota[X]$, so $G = F$ by the uniqueness in step 3.1. This is claim 1. [step 3.1, L1]

5.1 For claim 2, note that $\iota_2 : X \to \widehat{X}_2$ is an isometric embedding, hence uniformly continuous with $\delta = \varepsilon$, and $\widehat{X}_2$ is complete. Claim 1, applied to the completion $\big((\widehat{X}_1,\widehat{d}_1),\iota_1\big)$ with $Z = \widehat{X}_2$ and $f = \iota_2$, yields exactly one continuous $\varphi : \widehat{X}_1 \to \widehat{X}_2$ with $\varphi \circ \iota_1 = \iota_2$, and $\varphi$ is uniformly continuous. [step 4.1, A1]

6.1 Symmetrically there is exactly one continuous $\psi : \widehat{X}_2 \to \widehat{X}_1$ with $\psi \circ \iota_2 = \iota_1$, and it is uniformly continuous. [step 5.1]

6.2 Let $u,v \in \widehat{X}_1$. Density of $\iota_1[X]$ and [L3] supply sequences $(p_k)$ and $(q_k)$ in $X$ with $\iota_1(p_k) \to u$ and $\iota_1(q_k) \to v$ in $\widehat{X}_1$; by continuity of $\varphi$ and $\varphi \circ \iota_1 = \iota_2$ we get $\iota_2(p_k) \to \varphi(u)$ and $\iota_2(q_k) \to \varphi(v)$ in $\widehat{X}_2$. [step 5.1, A1, L3, L4]

7.1 $\psi \circ \varphi : \widehat{X}_1 \to \widehat{X}_1$ is continuous and satisfies $(\psi \circ \varphi) \circ \iota_1 = \psi \circ \iota_2 = \iota_1$; the identity of $\widehat{X}_1$ is continuous and satisfies the same identity; so by the uniqueness in claim 1, applied with $Z = \widehat{X}_1$ and $f = \iota_1$, we get $\psi \circ \varphi = \mathrm{id}$. Symmetrically $\varphi \circ \psi = \mathrm{id}$, so $\varphi$ is a bijection with inverse $\psi$. [step 4.1, step 5.1, step 6.1]

7.2 By [L5] the real sequence $\big(\widehat{d}_1(\iota_1(p_k),\iota_1(q_k))\big)_k$ converges to $\widehat{d}_1(u,v)$ and $\big(\widehat{d}_2(\iota_2(p_k),\iota_2(q_k))\big)_k$ converges to $\widehat{d}_2(\varphi(u),\varphi(v))$; but the two sequences are equal termwise, both being $d(p_k,q_k)$ because $\iota_1$ and $\iota_2$ are isometric embeddings. Hence the limits agree and $\widehat{d}_2(\varphi(u),\varphi(v)) = \widehat{d}_1(u,v)$. [step 6.2, A1, L5, L6]

8.1 So $\varphi$ is a bijective isometric embedding, that is an isometry, and it is the only continuous map with $\varphi \circ \iota_1 = \iota_2$; this is claim 2, and claim 1 is step 4.1. [step 4.1, step 7.1, step 7.2] ∎

## Remarks

- **Claim 1 is the reason claim 2 is short.** Once a completion is known to receive every uniformly continuous map into a complete space, in exactly one way, two completions each receive the other's embedding, and the two induced maps are mutually inverse for the same uniqueness reason. No property of the particular construction of [[thm-metric-completion-exists]] is used anywhere in this proof.
- **Uniform continuity is not decoration in claim 1.** A merely continuous $f : X \to Z$ need not extend at all. Take $X = (0,1)$ with the usual metric, which is dense in the complete space $[0,1]$, so that $[0,1]$ with the inclusion is a completion of it; take $Z = \mathbb{R}$, which is complete ([[thm-euclidean-space-complete]]); and take $f(x) = 1/x$, which is continuous on $(0,1)$ and not uniformly continuous ([[cex-continuous-map-destroying-cauchyness]]). No continuous $F : [0,1] \to \mathbb{R}$ extends it: the points $1/(k+2)$ converge to $0$ in $[0,1]$, so sequential continuity would force $F(1/(k+2)) = k+2$ to converge to $F(0)$, and the sequence $(k+2)$ is unbounded, hence not convergent ([[thm-metric-continuity-characterisations]], [[thm-of-archimedean]]).
- **Uniqueness is up to a unique isometry, not up to equality**, and the compatibility condition $\varphi \circ \iota_1 = \iota_2$ is what makes it unique. Dropping it leaves room for isometries of $\widehat{X}$ onto itself that move $X$ around, and $\mathbb{R}$ has many of those.
- **Where choice enters.** Only at step 5.1, through [[thm-metric-sequential-closure]], which spends $\mathrm{AC}_\omega$ to produce one approximating sequence at one point at a time ([[def-countable-choice]]); and inside [[thm-uniformly-continuous-extension-from-dense]], which is cited as [L2].
