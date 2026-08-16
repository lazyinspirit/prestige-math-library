---
id: thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space
kind: theorem
title: "Under Dependent Choice, every nonempty Polish space is a continuous image of Baire sequence space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-baire-sequence-space, def-polish-space, def-dependent-choice, thm-cantor-intersection-metric, def-metric-ball]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

Assume Dependent Choice. Every nonempty Polish space is the image of a continuous surjection from Baire sequence space $\mathbb N^{\mathbb N}$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] The **Baire sequence space** is $\mathcal N:=\mathbb N^{\mathbb N}$, the set of functions from $\mathbb N$ to itself (def-the-set-of-functions-from-one-set-to-another), with the product topology obtained by giving each copy of $\mathbb N$ the discrete topology (def-product-topology, def-standard-topologies). For a finite sequence $s=(s_0,\ldots,s_{k-1})$, its cylinder is $N_s:=\{x\in\mathcal N:x_i=s_i\text{ for }i<k\}$. The empty sequence has cylinder $\mathcal N$, and these cylinders form a basis. ([[def-baire-sequence-space]]).

[F2] A topological space is **Polish** when it is separable (def-separable-space) and completely metrizable: its topology is induced by some complete metric (lem-complete-remetrisation). No particular compatible complete metric or countable dense subset is part of the structure. ([[def-polish-space]]).

[F3] Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. The statement is: for every nonempty set $X$, every relation $R$ entire on $X$, and every $a\in X$, there is a sequence $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin{R}x_{n+1}$ for every $n\in\mathbb N$. ([[def-dependent-choice]]).

[F4] Let $(X,d)$ be a metric space (def-metric-space). Call a sequence $(F_k)_{k \in \mathbb{N}}$ of subsets of $X$ a **Cantor chain** if every $F_k$ is nonempty, closed (def-metric-topology) and bounded, $F_{k+1} \subseteq F_k$ for every $k$, and $\operatorname{diam}(F_k) \to 0$ in $\mathbb{R}$ (def-metric-bounded-diameter, def-real-limit). Then: 1. If $(X,d)$ is complete (def-complete-metric-space), every Cantor chain in $X$ has an intersection $\bigcap_{k \in \mathbb{N}} F_k$ with **exactly one** element. 2. Conversely, if every Cantor chain in $X$ has nonempty intersection, then $(X,d)$ is complete. Boundedness of each $F_k$ is part of the definition of a Cantor chain because $\operatorname{diam}$ is defined for nonempty bounded sets only in this library (def-metric-bounded-diameter); it is not an extra hypothesis but the precondition for writing the diameter condition down. ([[thm-cantor-intersection-metric]]).

[F5] Let $(X,d)$ be a metric space (def-metric-space), let $x \in X$ and let $r \in \mathbb{R}$ with $r > 0$ (def-real-order). Define $$B(x,r) := \{\, y \in X : d(x,y) < r \,\}, \qquad \bar B(x,r) := \{\, y \in X : d(x,y) \le r \,\}, \qquad S(x,r) := \{\, y \in X : d(x,y) = r \,\}.$$ $B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the **sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly positive real; a ball of radius $0$ or of negative radius is never written in this library. ([[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 Choose a compatible complete metric and recursively refine each nonempty open set into a countable cover by open sets whose closures remain inside the parent and whose diameters tend to zero. [given, F4, F2, F5]

2.1 An infinite branch determines one point by completeness, giving a continuous map from Baire space. [step 1.1, F1, F2, F4]

3.1 For a prescribed target point, dependent choice selects a nested branch containing it, proving surjectivity. [step 2.1, F3]

4.1 Nonemptiness is necessary because the domain is nonempty. [step 3.1, F4]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎
