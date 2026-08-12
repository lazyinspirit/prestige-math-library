---
id: thm-arc-length-is-invariant-under-monotone-reparametrization
kind: theorem
title: "Arc length is invariant under every continuous surjective monotone reparametrization, including pauses and reversal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-path-polygonal-length-and-rectifiability-in-rn, def-monotone-function]
justified_by: []
aliases: []
landmark: true
proof_strategy: two-inequalities
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "U. Lang, Differential Geometry I, Section 1.1"
      url: "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb R^n$ be a path, and let $\varphi:[c,d]\to[a,b]$ be continuous, surjective, and either nondecreasing or nonincreasing. Then

$$L_{[c,d]}(\gamma\circ\varphi)=L_{[a,b]}(\gamma).$$

The equality holds for finite or infinite length. Constant stretches of $\varphi$ are allowed. If $[c,d]$ is a singleton, surjectivity forces $[a,b]$ to be one as well; if instead $[a,b]$ is a singleton, $[c,d]$ need not be, since a constant map on a nondegenerate interval is continuous, surjective and monotone. In both cases each side of the displayed equality is zero.

## Facts & Assumptions

**Given:** The path $\gamma$ and reparametrization $\varphi$.

[L1] A nondecreasing map preserves order and a nonincreasing map reverses it ([[def-monotone-function]]).

[L2] Arc length is the supremum of polygonal sums and repeated consecutive image points contribute zero ([[def-path-polygonal-length-and-rectifiability-in-rn]]).

## Proof

**Proof technique:** two inequalities.

1.1 Suppose first that $\varphi$ is nondecreasing. The image under $\varphi$ of any partition of $[c,d]$ is a nondecreasing finite list from $a$ to $b$; deleting repetitions produces a partition of $[a,b]$ with the same polygonal sum for $\gamma$. [given, L1, L2]

1.2 Conversely, for a partition $a=t_0<\cdots<t_m=b$, choose one $s_i\in\varphi^{-1}(t_i)$ for each of its finitely many values. Monotonicity forces $s_0<\cdots<s_m$, after taking $s_0=c$ and $s_m=d$, and the resulting polygonal sum of $\gamma\circ\varphi$ equals that of $\gamma$. [given, L1, choose]

2.1 Hence every polygonal sum of $\gamma\circ\varphi$ is at most $L(\gamma)$, so $L(\gamma\circ\varphi)\le L(\gamma)$. [step 1.1, L2]

2.2 Taking the supremum over target partitions gives $L(\gamma)\le L(\gamma\circ\varphi)$, proving equality in the nondecreasing case. [step 1.2, L2]

2.3 If $\varphi$ is nonincreasing, reverse the order of every finite list in steps 1.1 and 1.2; Euclidean chord lengths are symmetric, so the same two inequalities hold. [step 1.1, step 1.2, L1, L2]

3.1 If $[c,d]$ is a singleton, so is its image $[a,b]$, and the singleton convention in [L2] gives both lengths as zero. If instead $a=b$ while $c<d$, then $\gamma\circ\varphi$ is constant, so every polygonal sum for it vanishes and $L_{[c,d]}(\gamma\circ\varphi)=0$, while $L_{[a,b]}(\gamma)=0$ by the same convention. [given, L2] ∎
