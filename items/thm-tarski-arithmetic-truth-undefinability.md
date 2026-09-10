---
id: thm-tarski-arithmetic-truth-undefinability
kind: theorem
title: "Arithmetic truth is not arithmetically definable"
status: draft
origin: pipeline
deps: [thm-arithmetic-diagonal-lemma, def-robinson-q-and-peano-arithmetic, thm-set-language-first-order-soundness]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — 4A.4–4A.5 pp142–143 and 4B.14 p149; local syntactic version"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
    - title: "Avigad, Computability and Incompleteness (2007) — Theorem 4.9.5 and complete proof, p118"
      url: "https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf"
---


## Statement

No arithmetic formula defines the codes of all sentences true in the standard natural-number structure. More generally, no consistent extension of Q has a formula Tr satisfying every own-language biconditional $\operatorname{Tr}(\ulcorner\sigma\urcorner)\leftrightarrow\sigma$.

## Facts & Assumptions

[F1] [[thm-arithmetic-diagonal-lemma]]: For every formula $\psi(v)$ with no other free variables in an effective signature extending arithmetic, there is a sentence $\theta$ such that Q in that signature proves $\theta\leftrightarrow\psi(\ulcorner\theta\urcorner)$. The construction is effective and requires neither consistency nor soundness.

[F2] [[def-robinson-q-and-peano-arithmetic]]: Use the arithmetic signature $0,S,+,\cdot,=$. Robinson arithmetic $Q$ consists of the universal closures of these seven formulas:

$$Sx\ne0;\quad Sx=Sy\to x=y;\quad x\ne0\to\exists y\,x=Sy;$$
$$x+0=x;\quad x+Sy=S(x+y);\quad x\cdot0=0;\quad x\cdot Sy=x\cdot y+x.$$

PA adds, for every formula $\phi(x,\bar z)$, the universal closure of $[\phi(0,\bar z)\land\forall x(\phi(x,\bar z)\to\phi(Sx,\bar z))]\to\forall x\phi(x,\bar z)$. Parameters $\bar z$ are allowed. No induction schema is included in $Q$.

For an external natural number $n$, its numeral is the term $\bar n=S^n0$. Define $x\le y$ by $\exists z(z+x=y)$ and $x<y$ by $x\le y\land x\ne y$, with $z$ fresh. The left-addend witness is intentional: commutativity is not an axiom of Q.

Use def-set-coded-formal-derivation for the six logical schemes and three rules. Negation, conjunction and existential quantification are primitive: $A\to B$ expands to $\neg(A\land\neg B)$, $A\lor B$ to $\neg(\neg A\land\neg B)$, and $\forall x A$ to $\neg\exists x\neg A$. Inequality means negated equality. Substitute capture-free, always taking the least available fresh variable index and universally closing the remaining parameters in increasing index order. Thus each displayed axiom and each induction instance is a definite finite sentence.

[F3] [[thm-set-language-first-order-soundness]]: In ZF, for any set signature and sentence theory $T$, if $T\vdash\phi$, every nonempty set structure satisfying $T$ satisfies $\phi$ under every assignment. Consequently a theory with a model is consistent.

## Proof

**Given:** A proposed defining formula for standard truth, or all T-biconditionals in a consistent Q extension.

1.1 Given a proposed Tr, F1 applied to its negation gives a sentence L with $Q\vdash L\leftrightarrow\neg\operatorname{Tr}(\ulcorner L\urcorner)$. In the standard natural-number structure, the seven axioms F2 hold: successor is injective and nonzero, every positive number has a predecessor, and addition/multiplication obey the four defining recursion equations. F3 therefore makes that Q biconditional true in the standard structure. [F1, F2, F3, given]

2.1 If Tr defined its truth set, the same structure would satisfy $\operatorname{Tr}(\ulcorner L\urcorner)\leftrightarrow L$. Together the two equivalences say L is true exactly when it is false, impossible. In the syntactic version, T proves both equivalences, the first because it extends Q and the second by the hypothesized schema. Propositional reasoning yields a contradiction in T, contrary to consistency. [step 1.1, algebra] ∎
