---
id: thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta
kind: theorem
title: "Under Dependent Choice, every completely metrizable subspace of a metric space is $G_\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-complete-remetrisation, def-g-delta-and-f-sigma-in-a-topological-space, def-dependent-choice, thm-metric-hausdorff-separation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
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

Assume Dependent Choice. If $Y$ is a completely metrizable subspace of a metric space $X$, then $Y$ is a $G_\delta$ subset of $X$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $(X,d)$ be a metric space (def-metric-space) and let $\mathcal{T}_d$ be its metric topology (def-metric-topology). Call $\mathcal{T}_d$ **completely metrizable** if some metric $\rho$ on $X$ is topologically equivalent to $d$, that is $\mathcal{T}_\rho = \mathcal{T}_d$ (def-equivalent-metrics), and makes $(X,\rho)$ complete (def-complete-metric-space). Then: 1. **Homeomorphism invariance.** Let $(Y,e)$ be a metric space and let $h : X \to Y$ be a bijection (def-injection-surjection-bijection) such that $h$ and $h^{-1}$ are continuous (def-metric-continuity). If $\mathcal{T}_d$ is completely metrizable then so is $\mathcal{T}_e$. 2. **Closed subspaces.** If $\mathcal{T}_d$ is completely metrizable and $A \subseteq X$ is closed in $(X,d)$, then $\mathcal{T}_{d_A}$ is completely metrizable, $d_A$ being the subspace metric (def-isometry-and-metric-embedding). 3. **The property is strictly weaker than completeness.** Let $P := (0,\infty) \subseteq \mathbb{R}$ (def-interval) carry $d(x,y) := |x-y|$ (lem-real-line-is-a-metric-space). Then $(P,d)$ is **not** complete, while $$\rho_P(x,y) \;:=\; |x-y| \;+\; \left| \frac{1}{x} - \frac{1}{y} \right|$$ is a complete metric on $P$ with $\mathcal{T}_{\rho_P} = \mathcal{T}_d$. So $\mathcal{T}_d$ is completely metrizable although no completeness assumption holds for $d$ itself. Complete metrizability is a condition on the *collection of open sets* alone: the metric is quantified over and does not survive into the statement. That is exactly what completeness fails to be, and claim 3 shows the two conditions are genuinely different rather than merely stated differently. ([[lem-complete-remetrisation]]).

[F2] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $A \subseteq X$. $A$ is a **$G_\delta$ set of $X$** when there is a sequence $(V_n)_{n\in\mathbb N}$ of open subsets of $X$ with $A=\bigcap_{n\in\mathbb N}V_n$, and an **$F_\sigma$ set of $X$** when there is a sequence $(F_n)_{n\in\mathbb N}$ of closed subsets of $X$ with $A=\bigcup_{n\in\mathbb N}F_n$. ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[F3] Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. The statement is: for every nonempty set $X$, every relation $R$ entire on $X$, and every $a\in X$, there is a sequence $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin{R}x_{n+1}$ for every $n\in\mathbb N$. ([[def-dependent-choice]]).

[F4] Let $(X,d)$ be a metric space (def-metric-space) and let $p, q \in X$ with $p \ne q$. Put $r := d(p,q)/2$. Then $r > 0$ and $$B(p,r) \cap B(q,r) = \emptyset .$$ Both sets are open (thm-metric-open-set-algebra) and contain $p$ respectively $q$ (def-metric-ball), so every metric space is **Hausdorff**: distinct points are separated by disjoint open sets (def-metric-topology). ([[thm-metric-hausdorff-separation]]).

## Proof

**Proof technique:** direct.

1.1 The empty subspace is the constant countable intersection of the ambient open set $\varnothing$. [given, F4, F1, F2]

2.1 Let $\rho$ be a compatible complete metric on the nonempty subspace $Y$ and let $d$ be the ambient metric. For $n\ge1$ call an ambient open $V$ **$n$-small** when $V\cap Y\ne\varnothing$, $\operatorname{diam}_d(V)<1/n$, **and** $\operatorname{diam}_\rho(V\cap Y)<1/n$. Both conditions are imposed, and neither may be dropped: $\rho$-smallness alone controls distances measured in $\rho$ but says nothing about ambient distances, so it cannot force a point of $Y$ to be near a prescribed ambient point, while ambient smallness alone gives no $\rho$-control and so cannot invoke completeness of $\rho$. Every $y\in Y$ lies in some $n$-small $V$, because $\rho$ induces the subspace topology, so a $\rho$-ball of radius below $1/2n$ about $y$ contains $B_d(y,r)\cap Y$ for some $r>0$, and $r$ may be shrunk below $1/2n$. Let $G_n$ be the union of all $n$-small ambient open sets, an ambient open set containing $Y$. [step 1.1, F1, F4]

3.1 Let $x\in\overline Y\cap\bigcap_{n\ge1}G_n$. For each $n$ pick an $n$-small $V_n$ with $x\in V_n$ and put $W_n:=V_1\cap\dots\cap V_n$, an ambient open neighbourhood of $x$ with $W_n\subseteq V_n$, so $\operatorname{diam}_d(W_n)<1/n$ and $\operatorname{diam}_\rho(W_n\cap Y)<1/n$; the $W_n$ decrease. Then pick $y_n\in W_n\cap Y$, which is nonempty because $x\in\overline Y$ and $W_n$ is an ambient neighbourhood of $x$. The selection over $n$ is a recursion whose $n$th admissible set depends on the previous choices, so it is licensed by the Dependent Choice of [F3]. Since $x,y_n\in W_n$ and $\operatorname{diam}_d(W_n)<1/n$, the points $y_n$ converge to $x$ in $d$. For $m,n\ge N$ both $y_m$ and $y_n$ lie in $W_N\cap Y$, so $\rho(y_m,y_n)<1/N$ and the sequence is $\rho$-Cauchy; completeness of $\rho$ gives it a $\rho$-limit in $Y$. [step 2.1, F1, F4, F3]

4.1 Hausdorff uniqueness puts the point back in the subspace. [step 3.1, F4, F1]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎

