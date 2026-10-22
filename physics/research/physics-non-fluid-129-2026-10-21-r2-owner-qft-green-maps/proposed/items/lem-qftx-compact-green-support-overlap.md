---
id: lem-qftx-compact-green-support-overlap
kind: lemma
title: Compactness of closed advanced-retarded support overlaps under Countable Choice
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
- def-qftx-green-hyperbolic-interface
- def-countable-choice
- def-gr-causal-conditions-and-global-hyperbolicity
- def-gr-causal-curves-and-reachability
- def-compact-space
dependency_roles:
  def-qftx-green-hyperbolic-interface: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-compact-space: mathematical-premise
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Christian Bär, Nicolas Ginoux, and Frank Pfäffle, Wave Equations on Lorentzian
      Manifolds and Quantization
    url: https://arxiv.org/pdf/0806.1036
    locator: Chapter 3 §§3.2–3.4, Theorems 3.2.11–3.2.12 and Corollary 3.4.3, printed
      pp. 85–89. Local analytic construction here instead uses the explicitly cited
      published symmetric-hyperbolic suppliers.
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. Let $(M,g,N)$ have the geometric hypotheses of the Green-data definition. If $K,L\subseteq M$ are compact and $A,B\subseteq M$ are closed with $A\subseteq J^+(K)$ and $B\subseteq J^-(L)$, then $A\cap B$ is compact. More generally every closed subset of $J^+(K)\cap J^-(L)$ is compact. This assertion requires no Green maps and does not assume that $J^\pm(K)$ themselves are closed.

## Statement references

[[def-qftx-green-hyperbolic-interface]]

[[def-gr-causal-conditions-and-global-hyperbolicity]]

[[def-gr-causal-curves-and-reachability]]

## Facts & Assumptions

**Given:** Countable Choice, the smooth globally hyperbolic spacetime, the compact sets $K,L$, and the indicated closed sets.

[F1] [[def-gr-causal-conditions-and-global-hyperbolicity]] includes compactness of each causal diamond $J^+(p)\cap J^-(q)$. [[def-gr-causal-curves-and-reachability]] defines causal reachability by locally absolutely continuous curves with nonzero causal tangent almost everywhere; finite concatenations of two such curves again have this property after affine rescaling of their parameter intervals.

[F2] [[def-compact-space]] supplies finite subcovers; finite unions and closed subsets of compact sets are compact by applying the open-cover definition. The smooth metric and time orientation in [[def-qftx-green-hyperbolic-interface]] give local coordinates and continuity of the metric coefficients. Countable Choice is inherited from those geometric data as in [[def-countable-choice]]; the argument below uses only finite selections.

## Proof

**Proof technique:** constructive.

1.1 (Elementary timelike coordinate neighborhoods.) At $x$ choose linear coordinates about $x$ in which $\partial_0$ is future timelike at $x$. Shrinking the coordinate box, continuity of $g$ and $N$ gives $\epsilon>0$ such that every vector with positive zeroth component and spatial-to-time coordinate ratio below $\epsilon$ is future timelike throughout that box. Choose a point $p$ on the negative time axis and a smaller open box $O_x$ about $x$, with closures inside the first box, so that every straight coordinate segment from $p$ to any point of $O_x$ has such a tangent. Then $O_x\subseteq J^+(p)$ by the definition in [F1]. The reversed construction gives an open box about $x$ contained in $J^-(q)$ for a point $q$ on its positive time axis. This uses local smooth metric continuity and straight smooth segments, without a limit-curve, global chronology-openness or dependent-choice theorem. [F1, F2, construct]

2.1 (Finite compact enclosure.) Take the family of all pairs of boxes and past points furnished by step 1.1 over $K$. These boxes form an open cover of $K$; taking a finite subcover names finitely many $p_i$ with $K\subseteq\bigcup_iJ^+(p_i)$. No past-point choice for an infinite family is made. Similarly take finitely many $q_j$ with $L\subseteq\bigcup_jJ^-(q_j)$. Concatenating the finite causal segments as in [F1] proves transitivity directly, so

$$J^+(K)\cap J^-(L)\subseteq\bigcup_{i,j}\bigl(J^+(p_i)\cap J^-(q_j)\bigr).$$

The right side is a finite union of compact diamonds by [F1]. Every closed subset of the left side is a closed subset of this compact union and therefore compact by [F2]. In particular $A\cap B$ is closed and has the required containment. If either input compact is empty the conclusion is immediate from the empty cover. [step 1.1, F1, F2, construct, discharge-construct] ∎

## Remarks

Closedness is supplied by the actual smooth-function supports in the Green arguments. The result does not assert a general Countable-Choice proof of causal simplicity. It suffices for integration by parts on an advanced-retarded overlap and for compactness of a smooth function supported both to the past and future of compact tests.
