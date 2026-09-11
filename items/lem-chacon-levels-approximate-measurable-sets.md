---
id: "lem-chacon-levels-approximate-measurable-sets"
kind: "lemma"
title: "Chacon levels approximate measurable sets"
deps: ["def-chacon-three-cut-one-spacer-towers", "lem-finite-measure-sets-are-approximable-by-a-generating-algebra", "lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn", "cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure", "thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Sarig Problem 3.8(3) p.101
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
    - title: Katok–Thouvenot generating partitions paragraph p.697
      url: https://akatok.s3.amazonaws.com/pub/KT-spectral.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Every Lebesgue-measurable $E\subseteq[0,1)$ can be approximated in symmetric-difference measure by unions of levels of the stage-$r$ Chacon tower, with error tending to zero as $r\to\infty$. Functions constant on those levels and zero off their tower are dense in complex $L^2$. If $\mu(E)>0$ and $\delta>0$, every sufficiently late stage has a level $J$ with $\mu(E\cap J)>(1-\delta)\mu(J)$.

## Facts & Assumptions

[F1] The physical tower levels and reservoir partition $[0,1)$, refining at each stage, with widths and reservoir mass tending to zero [[def-chacon-three-cut-one-spacer-towers]].

[F2] Finite-measure sets admit symmetric-difference approximation by a generating algebra [[lem-finite-measure-sets-are-approximable-by-a-generating-algebra]].

[F3] Half-open intervals generate the Borel sigma-algebra [[lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn]].

[F4] Lebesgue measurable sets have Borel representatives modulo null sets under countable choice [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]].

[F5] Finite complex simple functions are dense in $L^2$ [[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]].

[F6] The complex pairing supplies the norm inequalities [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F7] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** $E\subseteq[0,1)$ measurable and AC.

1.1 The algebra of finite unions of intervals in $[0,1)$ with any endpoint conventions generates the trace Borel sigma-algebra by F3. Under AC, F4 replaces $E$ by a Borel set modulo a null set. Given $\varepsilon>0$, F2 supplies a finite interval union $V$ with $\mu(E\mathbin\triangle V)<\varepsilon/2$. Let $q$ count its finitely many endpoints. The physical partition at stage $r$ has maximum atom length $b_r=\max(w_r,3^{-(r+1)})\to0$. Outside the at most $2q$ atoms incident to endpoints, every atom is wholly inside or outside $V$. Taking all atoms wholly inside $V$ therefore gives symmetric-difference error at most $2qb_r$ (endpoint singletons are null). Removing the reservoir adds at most $3^{-(r+1)}$. Hence a level union $Q_r$ satisfies $\mu(E\mathbin\triangle Q_r)\le\varepsilon/2+2qb_r+3^{-(r+1)}<\varepsilon$ for all sufficiently large $r$. [F1, F2, F3, F4, F7]

2.1 Given $f\in L^2$ and $\varepsilon>0$, choose $s=\sum_{j=1}^m c_j\mathbf1_{E_j}$ with $\|f-s\|_2<\varepsilon/2$. If $B=\sum|c_j|=0$, use zero. Otherwise approximate each $E_j$ by a level union at one common sufficiently late stage so that every error measure is below $(\varepsilon/(2B))^2$, using step 1.1. Then $s_r=\sum_jc_j\mathbf1_{Q_{r,j}}$ is constant on each level and zero off the tower, and $\|s-s_r\|_2\le\sum_j|c_j|\sqrt{\mu(E_j\mathbin\triangle Q_{r,j})}<\varepsilon/2$. Thus $\|f-s_r\|_2<\varepsilon$. [F5, F6, step 1.1]

3.1 For $\mu(E)>0$ take $0<\eta<\delta\mu(E)/(1+\delta)$ and choose, at any sufficiently late stage, a level union $Q$ with $\mu(E\mathbin\triangle Q)<\eta$. Then $\mu(Q)>\mu(E)-\eta>0$. If every level of $Q$ had $E$-proportion at most $1-\delta$, summing over its disjoint levels would give $\mu(Q\setminus E)\ge\delta\mu(Q)>\delta(\mu(E)-\eta)>\eta$, contradicting the error bound. At least one level has the required strict density. The case $\delta\ge1$ is also covered by this contradiction, and only finitely many levels are compared. [F1, step 1.1] ∎
