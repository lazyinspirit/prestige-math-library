---
id: thm-computably-dominated-characterizes-truth-table-reducibility
kind: theorem
title: "Computable domination characterizes truth-table reducibility"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computably-dominated-oracle, def-truth-table-reduction, def-turing-reducibility-and-equivalence, lem-total-oracle-functional-has-computable-use-bound]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Theorem 5.12"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

For $X\subseteq\mathbb N$, the following are equivalent:

1. $X$ is computably dominated.
2. Every $Y\le_TX$ satisfies $Y\le_{tt}X$.

## Facts & Assumptions

**Given:** an oracle $X$; for the forward direction, $Y\le_TX$ via a functional $\Phi$; for the reverse direction, the stated universal truth-table property.

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is computably dominated. For $\Phi^X(n)=\chi_Y(n)$, let $t(n)$ be the running time of this halting computation. Then $t$ is total and $X$-computable, hence has a computable dominator $b$. [given, construct]

1.2 Conversely, suppose every $Y\le_TX$ is truth-table reducible to $X$. Toward a contradiction, let $f\le_TX$ be total and not dominated by any total computable function. Fix an effective enumeration $(\Theta_e)_{e\in\mathbb N}$ of the bit-output oracle functionals and a computable pairing function $\langle e,k\rangle$. [given, assume-contra]

2.1 Truncate $\Phi^Z(n)$ after $b(n)$ steps for every oracle $Z$, returning $0$ if it has not halted with a bit. This is total on every oracle and agrees with $\Phi^X$ because $t(n)\le b(n)$; hence $Y\le_{tt}X$. [step 1.1, construct]

2.2 Let $D(e,k,s)$ mean that, for every $\sigma\in2^s$, the finite-oracle computation $\Theta_e^\sigma(\langle e,k\rangle)$ halts within $s$ steps with a bit and without querying a position at least $s$. This is decidable. Define $Y\le_TX$ by first computing $s=f(k)$ and then setting $$ \chi_Y(\langle e,k\rangle)= \begin{cases} 1-\Theta_e^X(\langle e,k\rangle),&D(e,k,s),\\ 0,&\neg D(e,k,s). \end{cases} $$ When $D(e,k,s)$ holds, the displayed oracle computation halts within the tested bound, so this definition gives a total $X$-computable set. [step 1.2, construct]

3.1 If $\Theta_e$ is total on every oracle, the compactness search in [[lem-total-oracle-functional-has-computable-use-bound]] yields, for each $k$, some $s$ satisfying $D(e,k,s)$. Thus the least such value $q_e(k)$ is a total computable function. Since $f$ has no computable dominator, some $k$ satisfies $f(k)>q_e(k)$. The predicate $D$ persists at larger bounds, so step 2.2 gives $$ \chi_Y(\langle e,k\rangle)=1-\Theta_e^X(\langle e,k\rangle). $$ Hence no everywhere-total bit functional $\Theta_e$ computes $Y$ from $X$. [step 2.2, given, contradiction]

4.1 By [[def-truth-table-reduction]], step 3.1 says $Y\not\le_{tt}X$, contradicting the assumed universal property because $Y\le_TX$. Therefore every total $f\le_TX$ has a computable dominator, so $X$ is computably dominated. [step 3.1, discharge-contradiction]

5.1 This argument also justifies the function-valued shorthand in the cited source theorem without upgrading the set-valued hypothesis by fiat. Once step 4.1 gives domination, the running time of any natural-valued computation of $f\le_TX$ has a computable bound $b(n)$. Truncating at that bound gives an everywhere-total natural-valued functional $\Psi$. Apply [[lem-total-oracle-functional-has-computable-use-bound]] to obtain a computable use bound $u(n)$; then the finite maximum of $\Psi^\sigma(n)+1$ over $\sigma\in2^{u(n)}$ is a computable strict dominator of $f$. [step 4.1, construct]

6.1 Steps 2.1 and 4.1 establish the two implications. [step 2.1, step 4.1] ∎
