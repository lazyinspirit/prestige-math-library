---
id: "cex-a-critical-point-free-noncompact-band-need-not-be-a-global-product"
kind: "counterexample"
title: "A critical point free noncompact band need not be a global product"
deps: ["def-closed-sublevel-and-level-set-of-a-smooth-function", "thm-regular-interval-diffeomorphism"]
provenance:
  statement: "ai-generated"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      title: "Audin–Damian, Morse Theory and Floer Homology"
status: "draft"
origin: "pipeline"
proof_strategy: "fiber components and explicit flow"
generation:
  role: "counterexample"
---

## Statement refuted

The assertion that every critical-point-free closed band is a level-preserving product is false when compactness is omitted. On $M=\mathbb R^2\setminus\{(0,0)\}$, the function $f(x,y)=x$ has no critical point, but $f^{-1}([-1,1])$ is not a product with its levels as fibers. Its Euclidean normalized ascending gradient trajectory from $(-1,0)$ escapes at time $1$.

## Facts & Assumptions

[F1] [[def-closed-sublevel-and-level-set-of-a-smooth-function]]: Let $f:M\to\mathbb R$ be smooth on a boundaryless smooth $n$-manifold. Write $M^a=f^{-1}(( -\infty,a])$, $M_a=f^{-1}(\{a\})$, and $f^{-1}([a,b])$ for the closed band. Both endpoints are included. A regular value may have empty fiber. The smooth-manifold convention is def-smooth-manifold.

[F2] [[thm-regular-interval-diffeomorphism]]: Assume $\mathrm{AC}_\omega$. If $a<b$ and the closed band $K=f^{-1}([a,b])$ of a smooth function on a boundaryless manifold is compact and critical-point-free, its normalized flow gives a level-preserving diffeomorphism $T:M_a\times[a,b]\to K$, $T(x,t)=\Phi_{t-a}(x)$.

## Counterexample

**Given:** The objects and hypotheses in the statement refuted.

1.1 Using the closed-band notation, the differential is $df=dx$, nonzero at every point of $M$. The level at $-1$ is a copy of $\mathbb R$, while the level at zero is $\{0\}\times(\mathbb R\setminus\{0\})$, with two connected components. A level-preserving product would restrict to homeomorphisms from one fixed fiber onto both, which is impossible. [F1, algebra]

2.1 The band is noncompact, for it contains the unbounded sequence $(0,j)$ for positive integers $j$. The normalized gradient is $\partial_x$, whose trajectory from $(-1,0)$ is $(-1+t,0)$ for $t<1$. At $t=1$ its only possible limit in $\mathbb R^2$ is the removed point, so it cannot extend as a trajectory in $M$. This is exactly the missing compact-band hypothesis in the regular-interval theorem, not a counterexample to that theorem. [F2, step 1.1, algebra] ∎
