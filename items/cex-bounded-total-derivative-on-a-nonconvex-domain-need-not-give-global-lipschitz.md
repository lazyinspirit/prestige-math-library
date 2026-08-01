---
id: cex-bounded-total-derivative-on-a-nonconvex-domain-need-not-give-global-lipschitz
kind: counterexample
title: "A locally constant step map on the disconnected open set $\\mathbb{R}\\setminus\\{0\\}$ has zero total derivative but is not globally Lipschitz"
status: draft
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  why_not_inline: "A standalone elementary witness isolates the convex-domain hypothesis and is not used as a dependency."
deps: [def-total-derivative-in-euclidean-space, thm-mean-value-inequality-for-total-derivatives, def-vector-valued-functions-limits-and-continuity, def-lipschitz-holder-contraction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Statement refuted

A uniform total-derivative bound on every open domain implies a global Lipschitz bound on that domain.

## Facts & Assumptions

**Given:** $U=\mathbb R\setminus\{0\}$ and $f:U\to\mathbb R$ defined by $f(x)=0$ for $x<0$ and $f(x)=1$ for $x>0$.

[L1] In the total-derivative definition, the normalized remainder tends to zero as $h$ tends to zero ([[def-total-derivative-in-euclidean-space]]).

[L2] A map is **Lipschitz** with **constant** $L$ when $|f(x)-f(y)|\le L|x-y|$ for every pair of points in its domain ([[def-lipschitz-holder-contraction]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $x\in U$ has a small interval contained in its own component of $U$, on which $f$ is constant; hence $Df(x)=0$ by [L1]. [L1, L2]

2.1 For any $L\ge0$, take $t=1/(2(L+1))$. The points $-t,t\in U$ satisfy $|f(t)-f(-t)|=1>2Lt=L|t-(-t)|$, so [L2] fails for that $L$. [step 1.1, L2, algebra]

3.1 The segment from $-t$ to $t$ contains $0\notin U$, so $U$ is not convex; this is exactly the omitted hypothesis of the mean-value inequality. [step 1.1, step 2.1] ∎
