---
id: ex-explicit-function-definition-is-conservative
kind: example
title: "A uniquely defined function adds no old-language theorems"
status: published
origin: pipeline
deps: [thm-explicit-definitions-give-conservative-extensions, def-robinson-q-and-peano-arithmetic]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — §4C.1 interpretation framework, local worked instance"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Example

Adding $\forall x\,f(x)=x+x$ to PA is conservative. For example $f(\bar2)=\bar4$ expands to the ordinary PA calculation $\bar2+\bar2=\bar4$. An added constant c with all axioms $\bar n<c$ for external n is not a single explicit definition; no nonconservativity claim about that separate axiom family is made.

## Facts & Assumptions

[F1] [[thm-explicit-definitions-give-conservative-extensions]]: Adding relation symbols by old-language defining formulas and function symbols by old-language graphs that T proves uniquely total gives a conservative extension of T. The extension is equiconsistent with T. This includes any set of such definitions, since a proof uses only finitely many.

[F2] [[def-robinson-q-and-peano-arithmetic]]: Use the arithmetic signature $0,S,+,\cdot,=$. Robinson arithmetic $Q$ consists of the universal closures of these seven formulas:

$$Sx\ne0;\quad Sx=Sy\to x=y;\quad x\ne0\to\exists y\,x=Sy;$$
$$x+0=x;\quad x+Sy=S(x+y);\quad x\cdot0=0;\quad x\cdot Sy=x\cdot y+x.$$

PA adds, for every formula $\phi(x,\bar z)$, the universal closure of $[\phi(0,\bar z)\land\forall x(\phi(x,\bar z)\to\phi(Sx,\bar z))]\to\forall x\phi(x,\bar z)$. Parameters $\bar z$ are allowed. No induction schema is included in $Q$.

For an external natural number $n$, its numeral is the term $\bar n=S^n0$. Define $x\le y$ by $\exists z(z+x=y)$ and $x<y$ by $x\le y\land x\ne y$, with $z$ fresh. The left-addend witness is intentional: commutativity is not an axiom of Q.

Use def-set-coded-formal-derivation for the six logical schemes and three rules. Negation, conjunction and existential quantification are primitive: $A\to B$ expands to $\neg(A\land\neg B)$, $A\lor B$ to $\neg(\neg A\land\neg B)$, and $\forall x A$ to $\neg\exists x\neg A$. Inequality means negated equality. Substitute capture-free, always taking the least available fresh variable index and universally closing the remaining parameters in increasing index order. Thus each displayed axiom and each induction instance is a definite finite sentence.

## Verification

**Given:** PA with its displayed addition axioms and the graph y=x+x.

1.1 Use the graph $F(x,y):=y=x+x$. For every x, taking the term x+x gives existence, and equality transitivity gives uniqueness. Hence F1 applies. Eliminating f from $f(\bar2)=\bar4$ gives $\exists y(y=\bar2+\bar2\land y=\bar4)$, equivalent to $\bar2+\bar2=\bar4$. By the addition axioms F2, $\bar2+S(S0)=S(\bar2+S0)=S(S(\bar2+0))=S(S\bar2)=\bar4$. [F1, F2, given]

2.1 At zero the same graph gives $f(0)=0+0=0$. At one, $f(S0)=S0+S0=S(S0+0)=S(S0)=\bar2$. In contrast the formulas $\bar n<c$ form a separate infinite family indexed externally by n; they contain no old-language uniquely total defining graph for c as specified. The conservativity conclusion above comes from the displayed graph F, not from misclassifying that family as one defining equation. [F2, step 1.1] ∎
