---
id: lem-q-numeral-calculation-and-bounded-cases
kind: lemma
title: "Q calculates numerals and finite bounded cases"
status: draft
origin: pipeline
deps: [def-robinson-q-and-peano-arithmetic]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — Lemmas 4B.6–4B.10, p147"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Statement

Q decides every closed arithmetic atomic formula and every closed bounded formula. For every external $n$, it proves $x\le\bar n\to\bigvee_{i=0}^n x=\bar i$ and $x\le\bar n\lor\overline{n+1}\le x$. These are metatheoretic schemes; induction on $n$ here is not an induction axiom in Q.

## Facts & Assumptions

[F1] [[def-robinson-q-and-peano-arithmetic]]: Use the arithmetic signature $0,S,+,\cdot,=$. Robinson arithmetic $Q$ consists of the universal closures of these seven formulas:

$$Sx\ne0;\quad Sx=Sy\to x=y;\quad x\ne0\to\exists y\,x=Sy;$$
$$x+0=x;\quad x+Sy=S(x+y);\quad x\cdot0=0;\quad x\cdot Sy=x\cdot y+x.$$

PA adds, for every formula $\phi(x,\bar z)$, the universal closure of $[\phi(0,\bar z)\land\forall x(\phi(x,\bar z)\to\phi(Sx,\bar z))]\to\forall x\phi(x,\bar z)$. Parameters $\bar z$ are allowed. No induction schema is included in $Q$.

For an external natural number $n$, its numeral is the term $\bar n=S^n0$. Define $x\le y$ by $\exists z(z+x=y)$ and $x<y$ by $x\le y\land x\ne y$, with $z$ fresh. The left-addend witness is intentional: commutativity is not an axiom of Q.

Use def-set-coded-formal-derivation for the six logical schemes and three rules. Negation, conjunction and existential quantification are primitive: $A\to B$ expands to $\neg(A\land\neg B)$, $A\lor B$ to $\neg(\neg A\land\neg B)$, and $\forall x A$ to $\neg\exists x\neg A$. Inequality means negated equality. Substitute capture-free, always taking the least available fresh variable index and universally closing the remaining parameters in increasing index order. Thus each displayed axiom and each induction instance is a definite finite sentence.

## Proof

**Given:** The displayed Q axioms and the left-addend order convention; n is external.

1.1 Use the seven Q axioms F1. Externally inducting on $b$ gives Q proofs of $\bar a+\bar b=\overline{a+b}$ and $\bar a\cdot\bar b=\overline{ab}$, by substituting the previous equality into the respective recursion axiom. Structural induction reduces each closed term to a numeral. For distinct numerals cancel their common successor prefix using injectivity; a remaining successor cannot equal zero. Hence Q proves the correct equality or inequality between any two closed terms. [F1, given]

2.1 We prove the bounded-case scheme externally on $n$. If $z+x=0$ and $x\ne0$, predecessor gives $x=Sy$, so $z+x=S(z+y)\ne0$, a contradiction. Hence $x\le0\to x=0$. For the next bound, either $x=0$ or $x=Sy$. In the second case $z+x=S\bar n$ implies $z+y=\bar n$ by injectivity, hence $y\le\bar n$ and the earlier finite case scheme makes $x$ one of $\bar1,\ldots,\overline{n+1}$. This is a finite derivation for each n. [F1, step 1.1]

2.2 For every fixed $k$, external induction proves $z+\bar k=S^kz$ and $S z+\bar k=z+\overline{k+1}$. Repeatedly applying the predecessor axiom $n+1$ times gives the finite disjunction: $x=0$, ..., $x=\bar n$, or $x=S^{n+1}z$ for some $z$. In a numeral case, a numeral left-addend witness proves $x\le\bar n$ by step 1.1. In the last case, $z+\overline{n+1}=x$ proves $\overline{n+1}\le x$. This gives the second scheme without internal induction. The same calculation shows $\overline{n+1}\le x\to\bar n\le x$ by replacing z with Sz. [F1, step 1.1]

3.1 A numeral instance of $\le$ is true exactly when its first numeral is among those allowed by step 2.1. If it is, a numeral witness proves it; otherwise the finite disjunction and the unequal-numeral proofs refute it. Thus closed order atoms are decided as well. For a closed bounded quantifier first reduce its bounding term to $\bar n$, then use step 2.1 to replace the bounded variable by the finite list of possible numerals. Induction on the formula gives a proof or a refutation for each substituted matrix. Existential introduction proves a true existential; the finite case disjunction refutes a false one. Negation handles universal quantifiers; Boolean truth tables combine the remaining cases. The zero bound yields either a singleton test for <= or no candidates for <. [step 1.1, step 2.1, step 2.2] ∎

