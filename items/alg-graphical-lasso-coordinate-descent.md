---
id: alg-graphical-lasso-coordinate-descent
kind: algorithm
title: "Finite-budget block and cyclic-coordinate graphical-lasso procedure"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-graphical-lasso-objective
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
justified_by: [lem-graphical-lasso-finite-budget-properties]
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition"
      url: "https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf"
      locator: "§17.3.2, Algorithm 17.2 and equations (17.26)–(17.27), printed pp. 635–636"
    - title: "Friedman, Hastie and Tibshirani, Sparse inverse covariance estimation with the lasso"
      url: "https://hastie.su.domains/Papers/graph.pdf"
      locator: "§§2–3, Algorithm 1 and equations (11)–(12), PDF pp. 3–5"
---

## Definition

Input an integer $p\ge2$, a real symmetric positive-semidefinite matrix $S\in\mathbb S_+^p$, a real $\lambda>0$, and positive integers $R,K$. The output is either `failure` or a matrix $\Theta\in\mathbb S_{++}^p$. Let $I_p$ be the $p\times p$ identity, $t_+=\max(t,0)$, $\operatorname{sign}(t)=1$ for $t>0$, $0$ for $t=0$, and $-1$ for $t<0$, and $\mathsf{Soft}(t,\lambda)=\operatorname{sign}(t)(|t|-\lambda)_+$. Initialize $W=S+\lambda I_p$.

For each outer sweep $r=1,\ldots,R$, and within it for each original-coordinate index $j=1,\ldots,p$, use the temporary coordinate order $\pi_j=(1,\ldots,j-1,j+1,\ldots,p,j)$. Form the same reindexing of both matrices, $S^{(j)}_{ab}=S_{\pi_j(a),\pi_j(b)}$ and $W^{(j)}_{ab}=W_{\pi_j(a),\pi_j(b)}$, for $1\le a,b\le p$. Set $V=(W^{(j)}_{ab})_{a,b<p}$, $s=(S^{(j)}_{a,p})_{a<p}$, and $d=W^{(j)}_{pp}$. Initialize $\beta=0\in\mathbb R^{p-1}$. For each of $K$ inner sweeps, update coordinates $\ell=1,\ldots,p-1$ in increasing order: if $V_{\ell\ell}\le0$, return `failure`; otherwise set
$$\beta_\ell\leftarrow\frac{\mathsf{Soft}\!\left(s_\ell-\sum_{\substack{1\le k<p\\k\ne\ell}}V_{\ell k}\beta_k,\lambda\right)}{V_{\ell\ell}}.$$

After the inner sweeps, form $\widetilde W^{(j)}=\begin{pmatrix}V&V\beta\\(V\beta)^T&d\end{pmatrix}$. Restore original indexing by forming the candidate matrix $W^{\mathrm{cand}}$ with $W^{\mathrm{cand}}_{\pi_j(a),\pi_j(b)}=\widetilde W^{(j)}_{ab}$ for all $1\le a,b\le p$. Compute a symmetric eigendecomposition of $W^{\mathrm{cand}}$; if any eigenvalue is nonpositive, return `failure`. Otherwise set $W=W^{\mathrm{cand}}$ before proceeding to the next original-coordinate index $j$. After all $R$ sweeps, return $\Theta=W^{-1}$. This bounded truncation of the coupled block and lasso updates makes no convergence or optimizer claim.

## Definition references

[The Elements of Statistical Learning, §17.3.2](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf)

[Friedman, Hastie and Tibshirani, §§2–3](https://hastie.su.domains/Papers/graph.pdf)

