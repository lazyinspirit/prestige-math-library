---
id: thm-gaussian-contraction-error-energy-gradient-bounds
kind: theorem
title: Explicit finite-dimensional contraction error bounds for energy and gradient
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-finite-gaussian-basis-variational-energy-and-gradient, cor-cauchy-schwarz-inequality-for-l-two]
proof_strategy: direct
axiom_use: None. The proof uses only finite sums and finite-dimensional Cauchy–Schwarz.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; finite tensor contraction and Coulomb-potential contractions on pp. 2 and 27–28. The norm bounds below are proved locally."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §V and Table 1, finite contraction loops on pp. 19–21."
---

## Statement

Let $n,r\ge1$, $C\in\mathbb R^{n\times r}$ with $\|C\|_F\le B$, and $D\in\mathbb R^{r\times r}$ with $\|D\|_F\le M$. Suppose $|\widetilde H_{ab}-H_{ab}|\le\varepsilon_2$ and $|\widetilde G_{abcd}-G_{abcd}|\le\varepsilon_4$ for every entry. With the functional of [[def-finite-gaussian-basis-variational-energy-and-gradient]],
$$|\widetilde E-E|\le MrnB^2\varepsilon_2+\frac12M^2r^2n^2B^4\varepsilon_4,$$
and
$$\|\nabla_C\widetilde E-\nabla_CE\|_F\le2nrBM\varepsilon_2+2n^2r^2B^3M^2\varepsilon_4.$$

## Facts & Assumptions

**Given:** The finite real functional in [[def-finite-gaussian-basis-variational-energy-and-gradient]], dimensions $n,r\ge1$, and the entrywise error bounds and norm bounds in the statement.

[F1] [[def-finite-gaussian-basis-variational-energy-and-gradient]]: $H'$ has two factors of $C$, $G'$ has four, $E=\langle D,H'\rangle_F+\tfrac12\sum D_{pq}D_{rs}G'_{pqrs}$, and the gradient is with respect to the $nr$ entries of $C$.

[F2] [[cor-cauchy-schwarz-inequality-for-l-two]]: on a finite counting measure, $\|x\|_1\le\sqrt{k}\|x\|_2$ for a vector with $k$ entries.

## Proof

1.1 Apply [F2] to each column $c_p$ of $C$: $\|c_p\|_1\le\sqrt n\|c_p\|_2\le\sqrt nB$. Therefore every transformed one-body error satisfies $|\Delta H'_{pq}|\le\varepsilon_2\|c_p\|_1\|c_q\|_1\le nB^2\varepsilon_2$. With $r^2$ entries, $\|\Delta H'\|_F\le rnB^2\varepsilon_2$. [given, F1, F2, algebra]

1.2 Each transformed four-index error is bounded by $\varepsilon_4\prod_{j\in\{p,q,r,s\}}\|c_j\|_1\le n^2B^4\varepsilon_4$. There are $r^4$ entries, so $\|\Delta G'\|_F\le r^2n^2B^4\varepsilon_4$. The rank-two coefficient tensor $(D_{pq}D_{rs})$ has Frobenius norm $\|D\|_F^2\le M^2$. [given, F1, F2, algebra]

1.3 For a fixed entry $C_{a\mu}$, differentiating the two occurrences of $C$ in $H'$ yields two sums. Each row of $D$ or column of $D$ has $\ell^1$ norm at most $\sqrt rM$ by [F2], while $\sum_b|\Delta H_{ab}||C_{bq}|\le\sqrt nB\varepsilon_2$. Thus each gradient entry from $H$ has magnitude at most $2\sqrt{nr}BM\varepsilon_2$, and the Frobenius norm over $nr$ entries is at most $2nrBM\varepsilon_2$. [given, F1, F2, algebra]

1.4 Differentiating the four factors of $C$ in $G'$ gives four sums. For each fixed slot, the sum over the other three basis indices is at most $n^{3/2}B^3\varepsilon_4$ by [F2]. The remaining coefficient sum over the three orbital indices is at most $r^{3/2}M^2$: one row or column of $D$ has $\ell^1$ norm at most $\sqrt rM$ and all entries of the other copy sum to at most $rM$. Including the factor $1/2$ and four slots, each gradient entry is bounded by $2n^{3/2}r^{3/2}B^3M^2\varepsilon_4$. Multiplying by $\sqrt{nr}$ for its $nr$ entries gives $2n^2r^2B^3M^2\varepsilon_4$. [given, F1, F2, algebra]

2.1 By finite Cauchy–Schwarz, the one-body energy error is at most $\|D\|_F\|\Delta H'\|_F\le MrnB^2\varepsilon_2$. Pairing $(D_{pq}D_{rs})$ with $\Delta G'$ gives the two-body bound $\tfrac12M^2r^2n^2B^4\varepsilon_4$. Adding them proves the energy estimate. [step 1.1, step 1.2, algebra]

3.1 The full gradient error is the sum of the one-body and two-body gradient errors. The triangle inequality and steps 1.3 and 1.4 give the claimed bound. [step 1.3, step 1.4, algebra] ∎
