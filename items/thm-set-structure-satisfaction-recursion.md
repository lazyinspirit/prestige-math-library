---
id: thm-set-structure-satisfaction-recursion
kind: theorem
title: "Existence and uniqueness of set satisfaction"
status: draft
origin: pipeline
deps: ["def-term-denotation-in-a-set-structure"]
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
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 1C.7\u20131C.8, pp.11\u201312; Appendix app4."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Statement

For every set signature $L$ and $L$-structure $\mathcal M$ there is a unique set $\operatorname{Sat}_{\mathcal M}\subseteq\operatorname{Form}_L\times M^\omega$. Writing $\mathcal M,s\models\phi$ for membership, its clauses are

$$\mathcal M,s\models u=v\iff\llbracket u\rrbracket_s=\llbracket v\rrbracket_s,$$
$$\mathcal M,s\models R(t_1,\ldots,t_n)\iff(\llbracket t_1\rrbracket_s,\ldots,\llbracket t_n\rrbracket_s)\in R^{\mathcal M},$$
$$\mathcal M,s\models\neg\phi\iff\text{not }\mathcal M,s\models\phi,$$
$$\mathcal M,s\models\phi\land\psi\iff(\mathcal M,s\models\phi\text{ and }\mathcal M,s\models\psi),$$
$$\mathcal M,s\models\exists x\phi\iff\exists b\in M\ (\mathcal M,s[x:=b]\models\phi).$$

The set is uniformly first-order definable from $L$ and the structure data.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] For an $L$-structure $\mathcal M$ and assignment $s\in M^\omega$, define $\llbracket v_i\rrbracket_s=s(i)$, $\llbracket c\rrbracket_s=c^{\mathcal M}$ and $$\llbracket f(t_1,\ldots,t_n)\rrbracket_s=f^{\mathcal M}(\llbracket t_1\rrbracket_s,\ldots,\llbracket t_n\rrbracket_s).$$ This is a simultaneous definition for all assignments: recurse on terms into the set $M^{(M^\omega)}$ of functions from assignments to $M$. Variable leaves are projections, constant leaves are constant maps, and each function operation acts pointwise. Structural recursion gives a unique evaluation. The operations are total because the interpreted functions are total. Superscripts $\mathcal M$ on brackets will distinguish structures when needed. Conventions and prerequisites: def-set-structures-and-variable-assignments, thm-structural-recursion-on-set-coded-syntax. ([[def-term-denotation-in-a-set-structure]])

## Proof

1.1 Put $S=M^\omega$. Term denotations give each atomic formula its truth subset of $S$ by Separation: equality compares the two values and a relation tests its interpreted tuple. [F1]

2.1 On truth subsets use complement in $S$, intersection, and for binder $x$ the operation $Q_x(B)=\{s\in S:\exists b\in M\ s[x:=b]\in B\}$. These are total operations on the set $\mathcal P(S)$. The structural recursion used to define denotation also applies to formulas with atoms as leaves, giving truth sets $B_\phi$. [F1, step 1.1, construct]

3.1 Separate $\{(\phi,s):s\in B_\phi\}$ inside $\operatorname{Form}_L\times S$. The displayed clauses follow directly from the operations. Any rival satisfies the same atomic and constructor rules, so structural induction forces equality of all truth sets. All operations and the assertion of existence of the unique recursive evaluation are first-order formulas on sets with parameters $L,\mathcal M$; this yields uniform definability. [step 1.1, step 2.1] ∎

