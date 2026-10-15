---
id: lem-polyhedral-event-restricts-contrast-to-interval
kind: lemma
title: A polyhedral event restricts the contrast to a computable interval
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-polyhedral-selection-event-and-contrast-interval
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jason D. Lee, Dennis L. Sun, Yuekai Sun, and Jonathan E. Taylor, Exact Post-Selection Inference, with Application to the Lasso"
      url: "https://arxiv.org/pdf/1311.6238"
---

## Statement

In the setup of [[def-polyhedral-selection-event-and-contrast-interval]], for every $y\in\mathbb R^n$,
$$Ay\le b\quad\Longleftrightarrow\quad G(Z(y))\ \text{and}\ L(Z(y))\le T(y)\le U(Z(y)).$$
The functions $L,U$ are Borel measurable as extended-real-valued functions, and the set of pairs $(t,z)$ satisfying the right-hand side is Borel.

## Facts & Assumptions

**Given:** Finite $n,m$, fixed $A,b,\eta\ne0$, and the notation of the definition.

[F1] The contrast decomposition is $y=c_\eta T(y)+Z(y)$ with $c_\eta=\eta/\|\eta\|^2$. [[def-polyhedral-selection-event-and-contrast-interval]]

[F2] Each row has coefficient $r_j=a_j^Tc_\eta$ and offset $d_j(z)=b_j-a_j^Tz$; the sign of $r_j$ determines its upper, lower, or zero-row feasibility condition in the definitions of $L,U,G$. [[def-polyhedral-selection-event-and-contrast-interval]]

## Proof

1.1 Since $P_\eta y=c_\eta(\eta^Ty)=c_\eta T(y)$ and $Z(y)=(I_n-P_\eta)y$, we have $y=c_\eta T(y)+Z(y)$. [F1, algebra]

2.1 For each row $j$, the inequality $a_j^Ty\le b_j$ becomes $r_jT(y)\le d_j(Z(y))$. If $r_j>0$, division gives $T(y)\le d_j(Z(y))/r_j$; if $r_j<0$, division reverses the inequality and gives $T(y)\ge d_j(Z(y))/r_j$; if $r_j=0$, the row is feasible exactly when $d_j(Z(y))\ge0$. Intersecting the finitely many row conditions is therefore equivalent to $G(Z(y))$, $T(y)\ge L(Z(y))$, and $T(y)\le U(Z(y))$, with the empty-index conventions in [F2]. [F1, F2, step 1.1, cases, algebra]

3.1 Each $d_j$ is affine and hence continuous. The finite maximum defining $L$ and finite minimum defining $U$ are Borel, with the constant infinite values in the empty-index cases; $G$ is a finite intersection of closed half-spaces. Thus the fiber set is Borel. The rowwise equivalence in step 2.1 proves both implications, including zero coefficients and empty or degenerate intervals. [F2, step 2.1, algebra] ∎