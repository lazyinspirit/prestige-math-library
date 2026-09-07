---
id: cex-truth-at-one-assignment-does-not-survive-substitution
kind: counterexample
title: "Agreement at one assignment is insufficient"
status: draft
origin: pipeline
deps: ["lem-formula-substitution-satisfaction"]
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
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 x1.3.2 p.48, adapted from arithmetic to a finite structure."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Statement refuted

False claim: if two formulas agree at one assignment, they still agree there after the same free-for substitution. Use the two-element equality structure $M=\{0,1\}$ with constant $c^{\mathcal M}=1$, distinct variables $x,y$, and $s(x)=s(y)=0$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement refuted.

[F1] If $t$ is free for $x$ in $\phi$, then for every structure $\mathcal M$ and assignment $s$, $$\mathcal M,s\models\phi[t/x]\iff\mathcal M,s[x:=\llbracket t\rrbracket_s]\models\phi.$$ ([[lem-formula-substitution-satisfaction]])

## Counterexample

1.1 At $s$, the formulas $x=y$ and $y=y$ are both true. The constant $c$ has no variables, so is free for $x$ in each formula. The free-for identity evaluates substitution by changing $s(x)$ to $1$. [F1]

2.1 After substitution the formulas are $c=y$ and $y=y$. Their truth values are respectively false ($1\ne0$) and true ($0=0$). The original agreement at $s$ imposes no agreement at the updated assignment, which is exactly the missing hypothesis. [F1, step 1.1] ∎

