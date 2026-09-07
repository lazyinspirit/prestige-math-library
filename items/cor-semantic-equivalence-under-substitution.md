---
id: cor-semantic-equivalence-under-substitution
kind: corollary
title: "Semantic equivalence is preserved by substitution"
status: draft
origin: pipeline
deps: ["prop-capture-avoiding-substitution"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 x1.3.3 p.48; Weiss chapter 1 Equality Principle p.18."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Statement

If $\phi$ and $\psi$ have the same truth at every assignment in every $L$-structure, then so do $\phi\langle t/x\rangle$ and $\psi\langle t/x\rangle$. Moreover, in any fixed structure and assignment, terms $t,u$ of equal value give the same truth for $\phi\langle t/x\rangle$ and $\phi\langle u/x\rangle$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] There is a canonical total capture-avoiding substitution $\phi\langle t/x\rangle$ on formulas, obtained by renaming obstructing binders using least unused variable indices. It replaces the original free occurrences of $x$ and satisfies $$\mathcal M,s\models\phi\langle t/x\rangle\iff\mathcal M,s[x:=\llbracket t\rrbracket_s]\models\phi.$$ Canonicity refers to the specified coding and traversal, not to literal invariance under other fresh-variable conventions. ([[prop-capture-avoiding-substitution]])

## Proof

1.1 Fix a structure and assignment $s$ and put $b=\llbracket t\rrbracket_s$. The two substituted formulas have the truth values of $\phi$ and $\psi$ at the same assignment $s[x:=b]$. The hypothesis applies at this assignment, so they agree. [F1]

2.1 If $\llbracket t\rrbracket_s=\llbracket u\rrbracket_s$, the updated assignments are literally equal. Apply the substitution identity once for each term to obtain equality of the two truth values. [F1] ∎

