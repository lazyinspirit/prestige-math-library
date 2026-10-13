---
id: cex-gr-achronal-set-need-not-be-acausal
kind: counterexample
title: "An achronal set that is not acausal: two null-related points"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-dependent-choice, def-countable-choice, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-curves-and-reachability, def-gr-flat-minkowski-model-and-inertial-charts, lem-gr-flat-inertial-cone-criterion-and-sums, def-time-orientation-and-future-causal-sets, def-causal-classification-of-lorentz-vectors, thm-gr-minkowski-cauchy-and-global-hyperbolicity]
dependency_roles:
  def-dependent-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  lem-gr-flat-inertial-cone-criterion-and-sums: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  thm-gr-minkowski-cauchy-and-global-hyperbolicity: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: achronal sets (Definition 2.19 printed p. 34), acausal sets (Definition 2.95 printed p. 63) and the local theory of achronality, sections 2.14-2.15 printed pp. 59-66"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): light cones and null-separated events, printed p. 7 (PDF p. 14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "every achronal subset of a time-oriented smooth
Lorentzian four-manifold is acausal"
([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (b)).

## Facts & Assumptions

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the general absolutely continuous causal-curve
conclusions used here.

**Given:** The flat model $(A,\eta,N)$ of [[def-gr-flat-minkowski-model-and-inertial-charts]], written $A=\mathbb R^4$, with its global inertial chart $x=(t,z)$, and the two events $p:=x^{-1}(0,0,0,0)$, $r:=x^{-1}(1,1,0,0)$.

[L1] For all events $u,v$ in the flat model, $u\le v$ exactly when $v-u\in\overline{C^+}$ and $u\ll v$ exactly when $v-u\in C^+$, with $C^+=\{w:w^0>|w_s|_{\mathrm e}\}$ and $\overline{C^+}=\{w:w^0\ge|w_s|_{\mathrm e}\}$ in the global inertial chart. For $u\ne v$ the straight path realizes the relation when the displayed condition holds; for $u=v$, $u\le u$ instead follows from the equality alternative, without a constant causal curve ([[thm-gr-minkowski-cauchy-and-global-hyperbolicity]] clause (a), [[lem-gr-flat-inertial-cone-criterion-and-sums]] clauses (a), (b), [[def-time-orientation-and-future-causal-sets]], [[def-causal-classification-of-lorentz-vectors]]).

[L2] For events $u,v$ of the model: $u\ll v$ when there is a future timelike curve from $u$ to $v$, and $u\le v$ when $u=v$ or there is a future causal curve from $u$ to $v$; a set is achronal when no two distinct of its points are chronologically related and acausal when no two distinct of its points are causally related ([[def-gr-causal-curves-and-reachability]] clause (c), [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (b)).

## Counterexample

1.1 (The two points.) The displacement $r-p$ has coordinates $(1,1,0,0)$, so $\eta(r-p,r-p)=-1+1=0$ and $r-p\ne0$: it is a future null vector. By [L1], its closed-cone membership gives $p\le r$, while it is not in the open cone $C^+$, so the full reachability equivalence gives $p\not\ll r$. [given, L1]

2.1 (Achronality.) Suppose $p\ll r$; then by [L1] $r-p\in C^+$, i.e. $1>|(1,0,0)|_{\mathrm e}=1$, a contradiction. In the other direction, $r\ll p$ would require $p-r\in C^+$, i.e. $-1>|(-1,0,0)|_{\mathrm e}=1$, also false. Hence the two distinct points $p,r$ are not chronologically related in either direction and the set $S:=\{p,r\}$ is achronal by [L2]. [step 1.1, L1, L2]

3.1 (Conclusion.) By step 1.1 the distinct points $p,r\in S$ satisfy $p\le r$, so $S$ is not acausal by [L2]. By step 2.1 the set $S$ is achronal. Hence an achronal set need not be acausal, which refutes the displayed statement. [step 1.1, step 2.1, given, L2] ∎

## Remarks

- **Why the two notions differ.** Achronality excludes only timelike relations, acausality also excludes null ones; the lightlike separation of two events is the elementary witness. Both notions are defined for arbitrary subsets; the two-point set $S$ is not a hypersurface, and no regularity is claimed for it.
- **Use.** The example shows that the implication "acausal implies achronal" of [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (b) cannot be reversed, so a proof that only establishes achronality does not establish acausality.
