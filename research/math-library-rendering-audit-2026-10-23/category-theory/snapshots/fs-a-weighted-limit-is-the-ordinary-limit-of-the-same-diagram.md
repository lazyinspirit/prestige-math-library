---
id: fs-a-weighted-limit-is-the-ordinary-limit-of-the-same-diagram
kind: false-statement
title: "FALSE: every weighted limit is the ordinary limit of the diagram it weights"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-set-weighted-limit-and-weighted-colimit, thm-the-constant-singleton-weight-recovers-an-ordinary-limit, prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight, def-limit-and-colimit-of-a-diagram, def-pullbacks-and-pushouts, prop-sets-and-functions-form-category-set, thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements, def-finite-cardinality, def-natural-transformation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "E. Riehl, Categorical Homotopy Theory, Example 7.1.16"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every weight $W$ and every diagram $F$, the weighted limit
$\{W,F\}$ is the ordinary limit of $F$
([[def-set-weighted-limit-and-weighted-colimit]],
[[def-limit-and-colimit-of-a-diagram]]).

## Facts & Assumptions

**Given:** The walking arrow $\mathcal J$, with objects $0$ and $1$ and one non-identity morphism $u:0\to1$; the diagram $F:\mathcal J\to\mathbf{Set}$ with $F(0)$ a two-element set and $F(1)$ a one-element set; and the weight $W:\mathcal J\to\mathbf{Set}$ with $W(0)$ a two-element set and $W(1)$ a one-element set.

[F5] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F6] A natural transformation $\alpha:F\Rightarrow G$ is a family $\alpha_A:FA\to GA$ such that every $f:A\to B$ satisfies the naturality equation $Gf\circ\alpha_A=\alpha_B\circ Ff$ ([[def-natural-transformation]]).

[F1] A weighted limit $\{W,F\}$ is an object that represents the functor sending an object to the set of natural transformations from the weight ([[def-set-weighted-limit-and-weighted-colimit]]).

[F2] A limit of $D$ is a terminal cone: explicitly, for every cone $(X,\xi)$ there exists a unique morphism $u:X\to L$ such that $\lambda_j u=\xi_j$ for every $j$ ([[def-limit-and-colimit-of-a-diagram]]).

[F3] For a cospan $X\xrightarrow f Z\xleftarrow gY$, a **pullback** is its limit, consisting of $X\times_ZY$ with two projections whose composites with $f$ and $g$ agree and through which every compatible pair factors uniquely ([[def-pullbacks-and-pushouts]]).

[F4] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$, and then $\lvert A\rvert$ is that unique $n$; equal cardinalities mean equinumerosity ([[def-finite-cardinality]]).

[L2] For a small $\mathcal J$ and set-valued $W$ and $D$, a weighted limit of a set-valued diagram is the set of natural transformations from the weight: $\{W,D\}=[\mathcal J,\mathbf{Set}](W,D)$ ([[prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight]]).

[L1] A weighted limit is an ordinary limit over the category of elements of the weight, and a weighted colimit an ordinary colimit over it ([[thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements]]).

[L3] A weighted limit with the constant singleton weight is exactly the ordinary limit: $\{\Delta\{*\},F\}=\lim F$ ([[thm-the-constant-singleton-weight-recovers-an-ordinary-limit]]).

## Refutation

**Proof technique:** direct.

1.1 Fix the witness. Let $\mathcal J$ be the walking arrow, let $F(0)=\{a,b\}$ and $F(1)=\{*\}$ with $F(u)$ the only function between them, and let $W(0)=\{p,q\}$ and $W(1)=\{*\}$ with $W(u)$ the only function between them. Both are functors, since the only equations to check involve identities. [F5, F6, given, construct]

2.1 The ordinary limit of $F$ has two elements. A cone over $F$ with apex $X$ is a pair of functions $\lambda_0:X\to F(0)$ and $\lambda_1:X\to F(1)$ with $F(u)\lambda_0=\lambda_1$, so $\lambda_1$ is determined by $\lambda_0$ and a cone is exactly a function $X\to F(0)$; by [F2] the limit is $F(0)$, a set with two elements. [F2, F4, step 1.1]

2.2 The weighted limit has four elements. By [L2] it is the set of natural transformations $W\Rightarrow F$; such a transformation is a pair of functions $\alpha_0:\{p,q\}\to\{a,b\}$ and $\alpha_1:\{*\}\to\{*\}$, and its naturality equation at $u$ is an equation between two functions into the one-element set $F(1)$, hence automatic. So there are exactly as many as there are functions $\{p,q\}\to\{a,b\}$, namely four. [F1, F4, F6, L2, step 1.1]

3.1 Four is not two, so $\{W,F\}$ is not the ordinary limit of $F$ and the claim is false. The same count follows from [L1] and [F3]: the category of elements of $W$ has the objects $(0,p)$, $(0,q)$ and $(1,*)$ and one morphism from each of the first two to the third, so it is a cospan, and the limit of the composed diagram is the pullback of $F(u)$ along itself, which for a map from a two-element set to a one-element set has four elements. [F3, L1, step 2.1, step 2.2]

4.1 What is true is [L3]: the ordinary limit is the weighted limit at the constant singleton weight, and the witness above differs from that case exactly by having a two-element value at the object $0$. By [L1] a larger value of the weight at an object puts more copies of that object into the category of elements, which is what changes the limit. [L1, L3, step 3.1] ∎

## Remarks

The weight is doing something visible here: it duplicates the object $0$ of the index category, so the limit is taken over a diagram with two copies of $F(0)$ mapping into $F(1)$ rather than one. That is why the answer is a pullback rather than the domain of the map.

Nothing about the witness needs the sets to be small or the target to be $\mathbf{Set}$ in any essential way; it is stated with three finite sets so that both sides can be counted by hand and the counts compared.
