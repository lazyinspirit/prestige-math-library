---
id: lem-na-fortin-transfers-discrete-infsup
kind: lemma
title: "Fortin operators transfer the continuous inf-sup bound"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: ["def-na-fortin-operator"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and 8.7.1."
---

## Statement

Let $V_h\subset V$ and $Q_h\subset Q$, and suppose the continuous inf-sup constant of $b$ is $\beta>0$. If $Q_h=\{0\}$ the constraint assertion is vacuous. Otherwise, for a Fortin operator as in [[def-na-fortin-operator]] with bound $C_F$, define $\beta_h:=\inf_{q_h\ne0}\sup_{v_h\ne0}b(v_h,q_h)/(\|v_h\|_V\|q_h\|_Q)$. Then $\beta_h\ge\beta/C_F$.

## Facts & Assumptions

**Given:** Conforming subspaces, $\beta>0$, and a bounded linear Fortin operator preserving $b$ against $Q_h$.

[F1] For all $v\in V$ and $q_h\in Q_h$, $b(\Pi_hv,q_h)=b(v,q_h)$ and $\|\Pi_hv\|_V\le C_F\|v\|_V$. ([[def-na-fortin-operator]])

## Proof

1.1 The case $Q_h=\{0\}$ is vacuous, so fix $q_h\ne0$. For every nonzero $v\in V$, [F1] gives $|b(v,q_h)|=|b(\Pi_hv,q_h)|\le\beta_h\|\Pi_hv\|_V\|q_h\|_Q\le C_F\beta_h\|v\|_V\|q_h\|_Q$. If $\Pi_hv=0$, the equality forces $b(v,q_h)=0$ and the same inequality still holds. [F1, given]

2.1 Taking the supremum over nonzero $v$ and then the infimum over nonzero $q_h$ shows $\beta\le C_F\beta_h$. Since $C_F>0$ for any preserving map on nontrivial constraints, division gives the stated transfer bound; the zero pressure-space case is vacuous. [given, algebra, step 1.1] ∎
