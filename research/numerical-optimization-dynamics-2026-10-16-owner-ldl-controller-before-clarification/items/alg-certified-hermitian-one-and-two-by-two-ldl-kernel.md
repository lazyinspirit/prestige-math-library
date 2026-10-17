---
id: alg-certified-hermitian-one-and-two-by-two-ldl-kernel
kind: algorithm
title: Certified real-component Hermitian one-by-one and two-by-two LDL* kernels
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
- def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 7, §§7.2.4 and 7.3
    url: https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf
  - title: Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems,
      §11
    url: https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf
dependency_level: 1
---

## Definition

Input stored Hermitian $D\in\mathbb C^{k\times k}$, $B\in\mathbb C^{t\times k}$ and $C\in\mathbb C^{t\times t}$, with $k\in\{1,2\}$, $t\ge0$, threshold $0<\theta\le1$, unit roundoff $0<u<1$, and a finite certificate budget. Use [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]. Divide complex values by a nonzero real denominator by separately dividing their real and imaginary components, using the model's real operations; no complex division is used. Any invalid operation, nonfinite output or nonzero exact intermediate outside the normal range returns `range-failure`. Hermitian counterparts, sign changes and conjugation are exact copies.

Certificate arithmetic means exact real inequalities on the stored data and displayed bounds, or inequalities evaluated with their own rigorous outward allowances. Ordinary rounded estimates without allowances do not certify comparisons. If the declared certificate budget cannot establish acceptance or a definite failure, return `pivot-inconclusive`. For complex modulus guards, a successful two-component scaled norm first scales by the larger absolute real component, then rounds both divisions, squares, sum, positive square root and rescaling. Its returned $h$ gives bounds $h/(1+u)^4\le|z|\le h/(1-u)^4$; zero is exact. Maxima use the corresponding lower/upper bounds and an empty maximum is zero.

For $k=1$, write $D=[d]$, $d$ real. If $d=0$ return `pivot-failure`. Certify $\max_i|B_{i1}|\le|d|/\theta$ using the guard bounds. A rigorous lower maximum exceeding $|d|/\theta$ returns `pivot-failure`; an unresolved comparison returns `pivot-inconclusive`. Set $\widehat M_{i1}$ by rounded real-component divisions of $B_{i1}$ by $d$.

For $k=2$, write $D=\begin{pmatrix}a&z\\\overline z&c\end{pmatrix}$ with real $a,c$, and set $s=\max(|a|,|c|,|\operatorname{Re}z|,|\operatorname{Im}z|)$. If $s=0$ return `pivot-failure`. Compute the four real entries of $\widehat E=\operatorname{fl}(D/s)$ and the conjugate counterpart by copying. In order compute
$$p=\operatorname{fl}(\widehat a\widehat c),\quad q_1=\operatorname{fl}((\operatorname{Re}\widehat z)^2),\quad q_2=\operatorname{fl}((\operatorname{Im}\widehat z)^2),\quad q=\operatorname{fl}(q_1+q_2),\quad \widehat d=\operatorname{fl}(p-q).$$
Put $\epsilon_d=3((1+u)^5-1)$ and $\widehat J=\operatorname{adj}(\widehat E)=\begin{pmatrix}\widehat c&-\widehat z\\-\overline{\widehat z}&\widehat a\end{pmatrix}$ by copies. Unless $|\widehat d|>\epsilon_d$ is certified, return `pivot-inconclusive`. For each entry obtain rigorous modulus bounds $j^-_{ij}\le|\widehat J_{ij}|\le j^+_{ij}$ and set
$$U_{ij}=\frac{j^+_{ij}}{s(1-u)(|\widehat d|-\epsilon_d)},\qquad V_{ij}=\frac{j^-_{ij}}{s(1+u)(|\widehat d|+\epsilon_d)}.$$
Let $c_j^-,c_j^+$ bound $\max_i|B_{ij}|$. Accept only if $U c^+\le\theta^{-1}(1,1)^T$ componentwise. If any coordinate of $V c^-$ exceeds $\theta^{-1}$ return `pivot-failure`; otherwise an unresolved test returns `pivot-inconclusive`. On acceptance compute $\widehat B_s=\operatorname{fl}(B/s)$, $K=\operatorname{fl}(\widehat B_s\widehat J)$ by sequential two-term complex dots, then $\widehat M=\operatorname{fl}(K/\widehat d)$ by real-component divisions. No explicit reciprocal $1/s$ is formed.

For either block size, compute each allocated lower-triangle entry of $\widehat Z=\operatorname{fl}(\widehat M B^*)$ by sequential $k$-term dots. Compute $\operatorname{fl}(C-\widehat Z)$ there, retain only its real component on the diagonal, and obtain upper entries by exact conjugation. Return `success` with stored $D,\widehat M,\widehat S$ and the pivot certificates. An empty trailing block returns empty $\widehat M,\widehat S$. In the sparse application, allocate the original block-neighbor clique and retain positions even when their numerical value is zero. Additional sparsity drops must be recorded separately as additive perturbations.
