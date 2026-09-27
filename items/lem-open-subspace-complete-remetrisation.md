---
id: lem-open-subspace-complete-remetrisation
kind: lemma
title: "Every open subspace of a completely metrizable space is completely metrizable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-complete-remetrisation, lem-distance-to-set-is-lipschitz]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

If $X$ is completely metrizable and $U\subseteq X$ is open, then $U$ is completely metrizable in its subspace topology.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $(X,d)$ be a metric space (def-metric-space) and let $\mathcal{T}_d$ be its metric topology (def-metric-topology). Call $\mathcal{T}_d$ **completely metrizable** if some metric $\rho$ on $X$ is topologically equivalent to $d$, that is $\mathcal{T}_\rho = \mathcal{T}_d$ (def-equivalent-metrics), and makes $(X,\rho)$ complete (def-complete-metric-space). Then: 1. **Homeomorphism invariance.** Let $(Y,e)$ be a metric space and let $h : X \to Y$ be a bijection (def-injection-surjection-bijection) such that $h$ and $h^{-1}$ are continuous (def-metric-continuity). If $\mathcal{T}_d$ is completely metrizable then so is $\mathcal{T}_e$. 2. **Closed subspaces.** If $\mathcal{T}_d$ is completely metrizable and $A \subseteq X$ is closed in $(X,d)$, then $\mathcal{T}_{d_A}$ is completely metrizable, $d_A$ being the subspace metric (def-isometry-and-metric-embedding). 3. **The property is strictly weaker than completeness.** Let $P := (0,\infty) \subseteq \mathbb{R}$ (def-interval) carry $d(x,y) := |x-y|$ (lem-real-line-is-a-metric-space). Then $(P,d)$ is **not** complete, while $$\rho_P(x,y) \;:=\; |x-y| \;+\; \left| \frac{1}{x} - \frac{1}{y} \right|$$ is a complete metric on $P$ with $\mathcal{T}_{\rho_P} = \mathcal{T}_d$. So $\mathcal{T}_d$ is completely metrizable although no completeness assumption holds for $d$ itself. Complete metrizability is a condition on the *collection of open sets* alone: the metric is quantified over and does not survive into the statement. That is exactly what completeness fails to be, and claim 3 shows the two conditions are genuinely different rather than merely stated differently. ([[lem-complete-remetrisation]]).

[F2] Let $(X,d)$ be a metric space (def-metric-space), let $A \subseteq X$ be nonempty and let $x, y \in X$. Then $$|d(x,A) - d(y,A)| \le d(x,y),$$ with $d(\cdot,A)$ the distance to a nonempty set (def-metric-bounded-diameter). Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$ between $u$ and $v$: it is **$1$-Lipschitz**. ([[lem-distance-to-set-is-lipschitz]]).

## Proof

**Proof technique:** direct.

1.1 If $U=\varnothing$, its unique metric is compatible and complete. Otherwise choose a complete metric $\rho$ on $X$ compatible with its given topology, as allowed by [F1]. Since $U$ is open, it is also $\rho$-open. [given, F1]

2.1 If $U=X$, the restricted metric $\rho|_{U\times U}$ is compatible and complete. Hence assume $U$ is nonempty and proper, and put $F=X\setminus U$. Then $F$ is nonempty and $\rho$-closed. For $x\in U$, let $\delta(x)=\inf_{z\in F}\rho(x,z)$. Openness of $U$ gives $\delta(x)>0$, and [F2] gives $|\delta(x)-\delta(y)|\le\rho(x,y)$. [step 1.1, F2]

3.1 Define $\sigma(x,y)=\rho(x,y)+|1/\delta(x)-1/\delta(y)|$ on $U$. This is a metric: it is nonnegative and symmetric, vanishes only when $x=y$ because $\rho$ is a metric, and satisfies the triangle inequality by adding those for $\rho$ and absolute value. Also $\rho(x,y)\le\sigma(x,y)$. [step 2.1, algebra]

4.1 The metrics $\sigma$ and $\rho|_{U\times U}$ induce the same topology. Indeed, fix $x\in U$ and $\varepsilon>0$. If $\rho(x,y)<\delta(x)/2$, then $\delta(y)>\delta(x)/2$ by [F2], so $|1/\delta(x)-1/\delta(y)|\le 2\rho(x,y)/\delta(x)^2$. Thus $\rho(x,y)<\min\{\delta(x)/2,\varepsilon/(1+2/\delta(x)^2)\}$ implies $\sigma(x,y)<\varepsilon$. Conversely $\sigma(x,y)<\varepsilon$ implies $\rho(x,y)<\varepsilon$ by step 3.1. [step 2.1, step 3.1, F2]

4.2 Let $(x_n)$ be $\sigma$-Cauchy. Then $(x_n)$ is $\rho$-Cauchy and the real sequence $(1/\delta(x_n))$ is Cauchy by step 3.1. Completeness of $(X,\rho)$ gives a limit $x\in X$, and every Cauchy real sequence is bounded, so $1/\delta(x_n)\le M$ for some finite $M>0$ and all $n$. Hence $\delta(x_n)\ge 1/M$; [F2] and $x_n\to x$ imply $\delta(x)\ge1/M>0$. If $x\in F$, its distance to $F$ would be zero, so $x\in U$. [step 1.1, step 2.1, step 3.1, F2]

5.1 Since $x\in U$ and $\delta(x_n)\to\delta(x)>0$, the reciprocal estimate of step 4.1 gives $1/\delta(x_n)\to1/\delta(x)$. Therefore $\sigma(x_n,x)\to0$, proving completeness of $\sigma$. Steps 1.1–2.1 cover the empty and whole-space cases, and step 4.1 gives compatibility in the remaining case. Thus $U$ is completely metrizable. [step 1.1, step 2.1, step 4.1, step 4.2] ∎
