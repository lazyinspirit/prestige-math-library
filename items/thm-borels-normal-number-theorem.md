---
id: thm-borels-normal-number-theorem
kind: theorem
title: Borel's normal number theorem
status: published
origin: pipeline
landmark: true
deps: [lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints, thm-birkhoff-ergodic-theorem, thm-ergodicity-and-invariant-functions, thm-dominated-convergence, thm-integrals-are-invariant-under-measure-preserving-maps, thm-integer-base-map-is-strongly-mixing, thm-mixing-implies-weak-mixing-implies-ergodicity, thm-lebesgue-measure-of-a-box-of-every-kind, thm-finite-and-countable-subadditivity-of-measures, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§11.2, printed pp. 99–101; §§10.1 and 10.5, printed pp. 89–97"
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice.  Lebesgue-almost every
$x\in[0,1)$ is normal in every integer base $b\geq2$.

## Facts & Assumptions

**Given:** Countable choice and Lebesgue probability on $[0,1)$.

[F1] For every $b\geq2$, $D_b$ is strongly mixing, hence ergodic, and preserves Lebesgue probability ([[thm-integer-base-map-is-strongly-mixing]], [[thm-mixing-implies-weak-mixing-implies-ergodicity]]).

[F2] Birkhoff gives an integrable, invariant almost-everywhere limit for the averages of each $L^1$ observable ([[thm-birkhoff-ergodic-theorem]]), and in an ergodic probability system every finite invariant measurable function is constant almost everywhere ([[thm-ergodicity-and-invariant-functions]]).

[F3] Integrals are unchanged by a measure-preserving map ([[thm-integrals-are-invariant-under-measure-preserving-maps]]), and dominated convergence passes the integral through an almost-everywhere bounded limit ([[thm-dominated-convergence]]).

[F4] A half-open interval has Lebesgue measure equal to its length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F5] Word occurrences agree with visits to their half-open orbit cylinder away from a countable null endpoint set ([[lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints]]).

[F6] A countable union of null measurable sets is null ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Proof

**Proof technique:** Birkhoff on every digit cylinder, followed by a countable intersection.

1.1 Fix $b\geq2$, $\ell\geq1$, and $w\in\{0,\ldots,b-1\}^{\ell}$.  Put $m=\sum_{r=1}^{\ell}w_rb^{\ell-r}$, $I_w=[m/b^\ell,(m+1)/b^\ell)$, and $f_w=\mathbf1_{I_w}$.  Then $0\leq f_w\leq1$ and $\int f_w\,d\lambda=b^{-\ell}$. [F4, construct]

2.1 By [F1] and [F2], $A_nf_w$ converges almost everywhere to an invariant function $F_w$, and $F_w=c_w$ almost everywhere for some constant $c_w$. Because $0\leq A_nf_w\leq1$, [F3] and invariance of the integral give $$c_w=\int F_w\,d\lambda=\lim_n\int A_nf_w\,d\lambda =\int f_w\,d\lambda=b^{-\ell}.$$ [F1, F2, F3, step 1.1]

3.1 For $x\notin E_b$, [F5] identifies $A_nf_w(x)$ with $N_n(w,x)/n$.  Thus outside the union of $E_b$ and the exceptional set from step 2.1, the word $w$ has limiting frequency $b^{-\ell}$. [F5, step 2.1]

4.1 The triples $(b,\ell,w)$ form a countable family: $b$ and $\ell$ range over integers and, for each pair, there are only $b^\ell$ words.  By [F6], the union of their null exceptional sets and the countable endpoint sets $E_b$ is null.  Every point outside that union satisfies step 3.1 for every base and word, hence is normal.  Countable choice is inherited from [F1], [F4], and [F5]; the indexing and cylinders are explicit. [F5, F6, step 3.1] ∎
