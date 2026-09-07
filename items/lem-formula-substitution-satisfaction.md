---
id: lem-formula-substitution-satisfaction
kind: lemma
title: "Free-for substitution commutes with satisfaction"
status: draft
origin: pipeline
deps: ["lem-term-substitution-denotation", "lem-satisfaction-coincidence"]
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
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 x1.1.3, p.48 (formula case)."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Statement

If $t$ is free for $x$ in $\phi$, then for every structure $\mathcal M$ and assignment $s$,

$$\mathcal M,s\models\phi[t/x]\iff\mathcal M,s[x:=\llbracket t\rrbracket_s]\models\phi.$$

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] For any terms $u,t$, variable $x$, structure $\mathcal M$ and assignment $s$, put $b=\llbracket t\rrbracket_s$. Then $\llbracket u[t/x]\rrbracket_s=\llbracket u\rrbracket_{s[x:=b]}$. ([[lem-term-substitution-denotation]])

[F2] Assignments agreeing on $\operatorname{FV}(e)$ give equal denotations when $e$ is a term and the same truth value when $e$ is a formula. Also, passage to a reduct preserves denotations and satisfaction for expressions in the smaller signature. In particular sentence truth is independent of assignment; the truth of a formula can be specified by any tuple assigning all its free variables. ([[lem-satisfaction-coincidence]])

## Proof

1.1 Write $b=\llbracket t\rrbracket_s$. The term substitution identity proves the assertion for both kinds of atoms. Negation and conjunction transport the inductive equivalences through their truth clauses. [F1]

1.2 At $\exists y\psi$, if $y=x$, raw substitution leaves this quantified formula unchanged and updating its bound variable externally cannot affect its truth by coincidence. If $x\notin\operatorname{FV}(\psi)$, substitution again changes nothing and coincidence gives the result. [F2]

1.3 Otherwise $y\ne x$ and $x\in\operatorname{FV}(\psi)$. The free-for hypothesis gives $y\notin\operatorname{FV}(t)$ and the free-for condition in $\psi$. For each $a\in M$, coincidence makes $\llbracket t\rrbracket_{s[y:=a]}=b$. The two distinct-variable updates commute: $s[y:=a][x:=b]=s[x:=b][y:=a]$. Applying the induction hypothesis to $\psi$ at $s[y:=a]$ therefore gives the same truth at each witness $a$ on both sides. [F1, F2]

2.1 Existential quantification over these pointwise equivalent assertions proves both directions for $\exists y\psi$. The cases above exhaust its possibilities, so structural induction gives the result for every formula. [step 1.1, step 1.2, step 1.3] ∎

