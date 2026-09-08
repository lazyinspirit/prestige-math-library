---
id: thm-henkin-closed-term-truth-lemma
kind: theorem
title: "Truth lemma for the term quotient"
status: published
origin: pipeline
deps: [def-henkin-closed-term-model, lem-complete-henkin-theory-truth-rules, lem-formula-substitution-satisfaction, thm-structural-recursion-on-set-coded-syntax, lem-henkin-term-equality-congruence]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
sources:
  references:
    - title: "Moschovakis, Lemma 1I.5, pp41–43; full local free-variable constructor induction for the closed-term quotient."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZF let $H$ be any consistent deductively closed complete Henkin theory with a seed, and $\mathcal M_H$ its term quotient. For a formula $\phi$, distinct variables $x_1,\ldots,x_n$ covering its free variables, closed terms $t_1,\ldots,t_n$, and an assignment $a$ with $a(x_i)=[t_i]$,

$$\mathcal M_H,a\models\phi\iff\phi[t_1/x_1,\ldots,t_n/x_n]\in H.$$

Substitution is simultaneous at original free occurrences. In particular $\mathcal M_H\models H$. Neither the size of $H$ nor choice of representatives for all classes is required.

## Facts & Assumptions

**Given:** $H$, its quotient, a formula and a finite representative tuple as in the statement.

[F1] The quotient interprets constants, functions, relations and equality by closed terms and congruence. ([[def-henkin-closed-term-model]])

[F2] Membership in $H$ obeys negation, conjunction and existential closed-term witness equivalences. ([[lem-complete-henkin-theory-truth-rules]])

[F3] Free-for substitution commutes with satisfaction. ([[lem-formula-substitution-satisfaction]])

[F4] Constructor induction holds for terms and formulas. ([[thm-structural-recursion-on-set-coded-syntax]])

[F5] Equal closed terms can be substituted in formula instances in either direction. ([[lem-henkin-term-equality-congruence]])

## Proof

1.1 By term induction, the denotation of a term $u$ whose variables lie in the tuple is $[u[\bar t/\bar x]]$. At a variable this is the given value, at a constant it is F1, and at $f(u_1,\ldots,u_r)$ the induction hypotheses and F1 give $[f(u_1[\bar t/\bar x],\ldots,u_r[\bar t/\bar x])]$, the required substituted term. Closed insertions do not acquire free variables; sequential substitution at distinct variables agrees here with simultaneous substitution, since inserted terms contain no free variables. [F1, F4]

2.1 For equality atoms step 1.1 gives equality of classes iff the two closed terms are equivalent, which is exactly membership of their equality in $H$. For a relation atom, step 1.1 and its definition in F1 identify truth with membership of the substituted atom. F5 ensures the result is unchanged if any representative is replaced by an equivalent term. [F1, F5, step 1.1]

3.1 Suppose the equivalence has been proved for immediate subformulas, with arbitrary finite representative tuples. At $\neg\psi$, its semantic truth means failure of $\psi$; the induction hypothesis and F2 translate that to membership of the closed negation. At $\psi\land\theta$, truth means truth of both subformulas, which the hypotheses and F2 identify with membership of the closed conjunction. Both calculations are equivalences. [F2, F4, step 2.1]

3.2 For $\phi=\exists y\psi$, substitute the supplied closed terms for the free variables other than $y$ in $\psi$, obtaining a matrix $\rho$ with free variables at most $y$. The closed instance of $\phi$ is literally $\exists y\rho$. If $\mathcal M_H,a\models\exists y\psi$, take its one witness class $b$ and one closed term $u$ with $b=[u]$. The induction hypothesis for $\psi$ with the updated finite tuple gives $\rho[u/y]\in H$. F2 gives $\exists y\rho\in H$. Free-for composition here is legitimate because all inserted terms are closed: binders cannot capture them, and insertions in distinct free positions do not interfere; equivalently their semantic updates agree by F3. [F1, F2, F3, F4, step 2.1]

4.1 Conversely if $\exists y\rho\in H$, F2 supplies a closed term $u$ with $\rho[u/y]\in H$. The induction hypothesis for $\psi$ gives $\mathcal M_H,a[y:=[u]]\models\psi$, hence the existential formula is true. If $y$ is vacuous, the same argument uses the nonempty quotient and the unchanged instance. These two directions establish the constructor case. [F1, F2, F4, step 3.2]

5.1 The atom, Boolean and existential cases exhaust the primitive syntax, so F4 proves the equivalence for every formula. For a sentence the tuple is empty and the closed instance is the sentence itself; each member of $H$ is therefore true in the quotient. At any induction step only finitely many representative classes and at most one additional witness are involved; finite existential selections are available in ZF and no global representative function is constructed. [F4, step 2.1, step 3.1, step 4.1] ∎
