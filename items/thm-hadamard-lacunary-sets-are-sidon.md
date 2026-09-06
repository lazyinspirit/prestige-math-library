---
id: thm-hadamard-lacunary-sets-are-sidon
kind: theorem
title: "Hadamard-lacunary sets are Sidon"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sidon-set-in-the-integer-dual, lem-riesz-product-for-a-hadamard-lacunary-set, thm-holder-inequality-for-integrals]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed., Theorem 3.6.6"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Every subset $E$ of a positive $q$-Hadamard-lacunary sequence is a Sidon set in the sense of [[def-sidon-set-in-the-integer-dual]]. More precisely, one may take $C_E=2r$ for any positive integer $r$ such that
$$q^r\ge3,\qquad \frac1{q^r-1}<1-\frac1q.$$
Such an $r$ exists for every $q>1$.

## Facts & Assumptions

**Given:** A finite polynomial $F=\sum_{\lambda\in\Lambda}a_\lambda e_\lambda$, with $\Lambda\subset E$, and $r$ as in the Statement. The original sequence consists of positive integers indexed by $j\ge1$, with $\lambda_{j+1}\ge q\lambda_j$. Integrals are over the period-one circle with normalized measure.

[L1] A finite ratio-three frequency class has a nonnegative Riesz product of integral one and prescribed coefficient $\widehat P(-\lambda)=\overline{\varepsilon_\lambda}/2$ at its own frequencies ([[lem-riesz-product-for-a-hadamard-lacunary-set]]).

[L2] The real-valued endpoint Holder inequality bounds $\int |h|g$ by $\|h\|_\infty\|g\|_1$ for real measurable $h$ and nonnegative integrable $g$ ([[thm-holder-inequality-for-integrals]]).

## Proof

**Proof technique:** separate each residue-class product from the other original frequencies, then pair and sum.

1.1 Set $Q=q^r$ and split the original indices of $\Lambda$ into $r$ residue classes $\Lambda_\nu$. Each class has successive ratios at least $Q\ge3$. Set $\varepsilon_\lambda=a_\lambda/|a_\lambda|$ when $a_\lambda\ne0$, and set it to $1$ otherwise. By [L1], the product $P_\nu=\prod_{\lambda\in\Lambda_\nu}(1+\operatorname{Re}(\varepsilon_\lambda e_\lambda))$ is nonnegative, has integral one, and has the prescribed coefficients on its class. Empty classes use the product $1$. [given, L1, construct]

2.1 Every nonzero frequency $m$ in the product expansion is a signed sum of distinct frequencies of $\Lambda_\nu$. If $L$ is its largest contributing frequency, the sum of the smaller frequencies is less than $L/(Q-1)$, so $$\bigl||m|-L\bigr|<\frac{L}{Q-1}<\left(1-\frac1q\right)L.$$ Every other frequency of the original sequence is at most $L/q$ or at least $qL$; in the latter case its distance from $L$ is at least $(q-1)L>(1-1/q)L$. Thus if $|m|$ belongs to the original sequence it must equal $L$, which lies in this class. In particular $\widehat P_\nu(-\lambda)=0$ for $\lambda\in\Lambda\setminus\Lambda_\nu$. [step 1.1, given, algebra]

3.1 Finite character integration, [L1], and this vanishing give $$\int_0^1F P_\nu=\frac12\sum_{\lambda\in\Lambda_\nu}|a_\lambda|.$$ For completeness, if $z=\int F P_\nu\ne0$, multiplication by $\overline z/|z|$ and taking real parts gives $|z|\le\int |F|P_\nu$; the same inequality is immediate if $z=0$. Apply [L2] to the real functions $|F|$ and $P_\nu$ to obtain $$\frac12\sum_{\lambda\in\Lambda_\nu}|a_\lambda|\le\int_0^1|F|P_\nu\le\|F\|_\infty.$$ [step 1.1, step 2.1, L1, L2]

4.1 Summing over the $r$ classes yields $\sum_{\lambda\in\Lambda}|a_\lambda|\le2r\|F\|_\infty$. The constant depends only on $q$ and $r$, not on the finite support or coefficients, so this is the Sidon inequality. [step 3.1, algebra] ∎
