---
id: lem-na-fortin-transfers-discrete-infsup
kind: lemma
title: "Fortin operators transfer the continuous inf-sup bound"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [ "def-na-fortin-operator" ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and
        inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and
        8.7.1."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $V_h\subset V$ and $Q_h\subset Q$, and suppose the continuous inf-sup constant of $b$ is $\beta>0$. If $Q_h=\{0\}$ the constraint assertion is vacuous. Otherwise, for a Fortin operator as in [[def-na-fortin-operator]] with bound $C_F$, define $\beta_h:=\inf_{q_h\ne0}\sup_{v_h\ne0}b(v_h,q_h)/(\|v_h\|_V\|q_h\|_Q)$. Then $\beta_h\ge\beta/C_F$.

## Facts & Assumptions

**Given:** Conforming subspaces, $\beta>0$, and a bounded linear Fortin operator preserving $b$ against $Q_h$.

[F1] For all $v\in V$ and $q_h\in Q_h$, $b(\Pi_hv,q_h)=b(v,q_h)$ and $\|\Pi_hv\|_V\le C_F\|v\|_V$. ([[def-na-fortin-operator]])

## Proof

1.1 The case $Q_h=\{0\}$ is vacuous, so fix $q_h\ne0$. In these real spaces, replacing a nonzero velocity by its negative shows that the supremum of $b(v,q_h)/\|v\|_V$ equals the supremum with $|b(v,q_h)|$ in the numerator, both on $V$ and on any nonzero subspace $V_h$. The continuous inf-sup bound gives $\sup_{v\ne0}|b(v,q_h)|/\|v\|_V\ge\beta\|q_h\|_Q>0$, so some $v$ has $b(v,q_h)\ne0$. Constraint preservation [F1] then implies $\Pi_hv\ne0$, and its norm bound forces $C_F>0$; in particular $V_h\ne\{0\}$. Define $s(q_h):=\sup_{v_h\ne0}|b(v_h,q_h)|/\|v_h\|_V$. For every nonzero $v\in V$ with $\Pi_hv\ne0$, [F1] and the definition of this fixed-$q_h$ supremum give $|b(v,q_h)|=|b(\Pi_hv,q_h)|\le s(q_h)\|\Pi_hv\|_V\le C_Fs(q_h)\|v\|_V$. If $\Pi_hv=0$, preservation gives $b(v,q_h)=0$, so the same bound holds. [F1, given, algebra]

2.1 Taking the supremum over nonzero $v$ in step 1.1 and using the continuous bound yields $\beta\|q_h\|_Q\le C_Fs(q_h)$. Divide by the positive $C_F\|q_h\|_Q$, and only then take the infimum over $q_h\ne0$. The real-sign equivalence in step 1.1 identifies $\inf_{q_h\ne0}s(q_h)/\|q_h\|_Q$ with the stated $\beta_h$, giving $\beta_h\ge\beta/C_F$. [given, algebra, step 1.1] ∎
