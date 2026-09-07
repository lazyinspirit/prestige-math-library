---
id: cex-variable-capture-changes-satisfaction
kind: counterexample
title: "Variable capture changes satisfaction"
status: published
origin: pipeline
deps: ["prop-capture-avoiding-substitution"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 chapter 1 worked substitution pp.17\u201318."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Statement refuted

False claim: replacing free occurrences by a variable without first avoiding capture always has the intended substitution semantics. In $\phi=\exists v_2(v_2\in v_1)$, naively substitute $v_2$ for $v_1$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement refuted.

[F1] There is a canonical total capture-avoiding substitution $\phi\langle t/x\rangle$ on formulas, obtained by renaming obstructing binders using least unused variable indices. It replaces the original free occurrences of $x$ and satisfies $$\mathcal M,s\models\phi\langle t/x\rangle\iff\mathcal M,s[x:=\llbracket t\rrbracket_s]\models\phi.$$ Canonicity refers to the specified coding and traversal, not to literal invariance under other fresh-variable conventions. ([[prop-capture-avoiding-substitution]])

## Counterexample

1.1 In $M=\{\varnothing,\{\varnothing\}\}$ with restricted membership, take $s(v_2)=\{\varnothing\}$. The intended substitution truth, supplied by capture-avoiding substitution, is the truth of $\phi$ after setting $v_1$ to $s(v_2)$. It is true, with witness $\varnothing$. [F1]

2.1 Naive replacement gives $\exists v_2(v_2\in v_2)$, false since neither carrier element belongs to itself. Renaming the binder to $v_3$ first gives $\exists v_3(v_3\in v_2)$, true at the displayed assignment. Thus the naive operation changes the required truth value. [step 1.1, given] ∎
