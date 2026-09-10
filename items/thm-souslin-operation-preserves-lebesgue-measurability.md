---
id: thm-souslin-operation-preserves-lebesgue-measurability
kind: theorem
title: "The Souslin operation preserves Lebesgue measurability"
status: draft
origin: pipeline
deps: ["def-souslin-operation-on-set-schemes", "thm-analytic-sets-are-souslin-operations-on-closed-sets", "cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls", "thm-lebesgue-measure-is-a-complete-measure", "thm-borel-sets-are-lebesgue-measurable", "def-caratheodory-measurable-set", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
sources:
  scraped: []
  references:
    - title: "Exercise 4.24 and Theorem 4.25, printed pp40–41; complete relevant text reread 2026-09-09. The source leaves the proof as an exercise; the finite-box envelope and full branch argument here are supplied locally. Correct the printed containment typo: D contains A."
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

Assume ZFC and $d\geq1$. Every $E\subseteq\mathbb R^d$ has a Lebesgue measurable envelope H containing E such that $H\setminus D$ is null for every Lebesgue measurable D containing E. The Souslin operation preserves Lebesgue measurability on $\mathbb R^d$. Every analytic subset of $\mathbb R^d$ is therefore Lebesgue measurable.

## Facts & Assumptions

[F1] [[def-souslin-operation-on-set-schemes]] gives decreasing prefix normalization and the branch union.

[F2] [[thm-analytic-sets-are-souslin-operations-on-closed-sets]] gives closed schemes for analytic sets.

[F3] [[cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls]] supplies measurable hulls with equal outer measure under countable choice.

[F4] [[thm-lebesgue-measure-is-a-complete-measure]] gives completeness, countable additivity, and finite volume for half-open boxes under countable choice.

[F5] [[thm-borel-sets-are-lebesgue-measurable]] includes closed sets among measurable sets under countable choice.

[F6] [[def-caratheodory-measurable-set]] supplies the splitting identity for outer measure at measurable sets.

[A1] Assume [[def-axiom-of-choice]], licensing those countable-choice hypotheses.

## Proof

**Given:** Dimension $d\geq1$ and the ZFC assumptions. Write $\lambda$ and $\lambda^*$ for measure and outer measure.

1.1 For any sequence of measurable sets, disjointize it by removing preceding finite unions; the disjoint pieces are measurable and contained in the original sets. Countable additivity in F4 and monotonicity then give countable subadditivity. In particular a countable union of null measurable sets is null, and every subset of it is measurable and null by completeness F4. These uses are licensed by A1. [F4, A1]

2.1 Put $Q_j=(-j,j]^d$ for positive integers j and $E_j=E\cap Q_j$. These boxes cover $\mathbb R^d$ and have finite measure $(2j)^d$ by F4. By F3 and A1 choose measurable $G_j\supseteq E_j$ with $\lambda(G_j)=\lambda^*(E_j)$; the value is finite by containment of E_j in Q_j and monotonicity. Set $H_j=G_j\cap Q_j$. Then $E_j\subseteq H_j\subseteq G_j$ implies $\lambda(H_j)=\lambda^*(E_j)$. If D is measurable and contains E, then $E_j\subseteq H_j\cap D$ implies $\lambda(H_j\cap D)\geq\lambda^*(E_j)=\lambda(H_j)$. Equality follows by the reverse monotonicity. F6's splitting of the finite-measure H_j at D gives $\lambda(H_j\setminus D)=0$. Thus $H=\bigcup_j H_j$ is measurable, contains E, and $H\setminus D$ is null by step 1.1. No subtraction of infinite quantities occurred. [F3, F4, F6, A1, step 1.1]

3.1 Normalize the measurable scheme $(A_s)$ using F1 and finite intersection closure from F4. Set $E_s=\bigcup_{f\supseteq s}\bigcap_n A_{f\upharpoonright n}$, so $E_s\subseteq A_s$ and $E_s=\bigcup_k E_{s^\frown k}$. Step 2.1 and A1 select measurable envelopes H_s. Put $B_s=A_s\cap\bigcap_{t\subseteq s}H_t$. These are measurable, decreasing, contain E_s, and are contained in H_s, so retain its envelope property. The measurable set $\bigcup_k B_{s^\frown k}$ contains E_s; hence $C_s=B_s\setminus\bigcup_k B_{s^\frown k}$ is null. The union C of these defects over all finite words is null by step 1.1. [F1, F4, A1, step 1.1, step 2.1]

4.1 For $x\in B_\varnothing\setminus C$ the exclusion of each defect lets us recursively choose the least child index retaining membership in B. The resulting branch f has $x\in A_{f\upharpoonright n}$ for all n, so $x\in\mathsf S(A)$. Conversely $\mathsf S(A)=E_\varnothing\subseteq B_\varnothing$. Their difference is therefore a subset of null C. Completeness F4 proves $\mathsf S(A)$ measurable, including schemes with empty root. Finally F2 with A1 represents analytic sets by closed schemes, whose entries are measurable by F5 with A1; the proved preservation applies. QED. [F1, F2, F4, F5, A1, step 3.1]
