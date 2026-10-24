---
id: alg-graph-harmonic-label-propagation
kind: algorithm
title: "Finite graph-harmonic label propagation with a residual status"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-graph-harmonic-label-extension
  - thm-graph-harmonic-extension-uniqueness-and-maximum-principle
  - lem-real-cholesky-recurrence-computes-factorization
  - thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Xiaojin Zhu, Zoubin Ghahramani, and John Lafferty, Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions, ICML 2003"
      url: "https://mlg.eng.cam.ac.uk/pub/pdf/ZhuGhaLaf03a.pdf"
    - title: "Olivier Chapelle, Bernhard Schölkopf, and Alexander Zien (editors), Semi-Supervised Learning, MIT Press, 2006"
      url: "https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Inputs are $n\ge1$, $V=\{1,\ldots,n\}$, a matrix $W\in\mathbb R^{n\times n}$, a nonempty labeled subset $B\subseteq V$, a boundary-label matrix $Y_B\in\mathbb R^{|B|\times r}$ with $r\ge1$, an operation cap $K\in\mathbb N_0$ per label coordinate, and a residual tolerance $\varepsilon\ge0$. Use exact real arithmetic in the mathematical specification. Reject with status $\texttt{invalid-input}$ unless $W$ is symmetric, entrywise nonnegative, and zero-diagonal. Set $U=V\setminus B$, $d_i=\sum_jw_{ij}$, $D=\operatorname{diag}(d_1,\ldots,d_n)$, and $L=D-W$. The support graph has edge $\{i,j\}$ exactly when $w_{ij}>0$; two vertices are in the same connected component exactly when a finite path of support edges joins them. Use increasing vertex order for every submatrix, boundary vector, and returned output coordinate.

Inspect every connected component in increasing vertex order. If some component meeting $U$ misses $B$, return status $\texttt{unanchored-component}$ and the unanchored components before forming a solve. If $U=\varnothing$, return $Y_B$, an empty unlabeled output, and status $\texttt{no-unlabeled-vertices}$. Otherwise set $M=L_{UU}$.

For each column $c=1,\ldots,r$ in order, start a fresh counter at zero and form $b_c=-L_{UB}(Y_B)_{:,c}$, evaluating the matrix-vector product in increasing vertex order. Recompute a fresh lower-triangular Cholesky factor $R$ of $M$ for this column by the recurrence: initialize $R$ to zero; in increasing order $j=1,\ldots,|U|$, compute $p_j=M_{jj}-\sum_{k<j}R_{jk}^2$, return status $\texttt{factorization-failure}$ if $p_j\le0$, set $R_{jj}=\sqrt{p_j}$, and for $i>j$ set $R_{ij}=(M_{ij}-\sum_{k<j}R_{ik}R_{jk})/R_{jj}$. Recompute $R$ for each column so that the factorization cost is part of that column's cap.

Count each real addition, subtraction, multiplication, division, comparison, and square root as one scalar operation. Evaluate every finite sum left-to-right in increasing index order, with an empty sum equal to zero. For each coordinate of $b_c$, implement the unary negation as one subtraction from zero and include that subtraction in the count. Input validation, degree/Laplacian construction, component scans, loop-control comparisons, and budget checks are outside the per-column count. The count for column $c$ includes forming $b_c$, its Cholesky recurrence, both triangular substitutions, and its residual calculation. Before each counted operation, if it would make the counter exceed $K$, return status $\texttt{budget-exhausted}$ with outputs and residuals for only the fully completed columns before $c$. If a Cholesky pivot satisfies $p_j\le0$, return status $\texttt{factorization-failure}$ with outputs and residuals for only the fully completed columns before $c$.

Solve $Rv_c=b_c$ by $v_{c,i}=((b_c)_i-\sum_{j<i}R_{ij}v_{c,j})/R_{ii}$ in increasing $i$, and solve $R^Tz_c=v_c$ by $z_{c,i}=(v_{c,i}-\sum_{j>i}R_{ji}z_{c,j})/R_{ii}$ in decreasing $i$, using the same counter and sum convention. Compute $e_{c,i}=\sum_{j=1}^{|U|}M_{ij}z_{c,j}-(b_c)_i$ in increasing $i$, then $\rho_c=(\sum_{i=1}^{|U|}e_{c,i}^2)^{1/2}$, again using the same counter. If $\rho_c>\varepsilon$, return status $\texttt{residual-failure}$ with candidate coordinates and residuals through column $c$. If all columns pass, return $Y_U=(z_1,\ldots,z_r)$, the residuals, and status $\texttt{residual-passed}$.
## Definition references

[[def-graph-harmonic-label-extension]]: fixes the finite support graph, boundary data, componentwise anchor condition, and energy.

[[thm-graph-harmonic-extension-uniqueness-and-maximum-principle]]: proves that the anchored principal block is positive definite and gives the exact harmonic solution.

[[lem-real-cholesky-recurrence-computes-factorization]]: proves the displayed deterministic recurrence returns the real positive-diagonal Cholesky factor for the anchored positive-definite block.

[[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]: supplies the unique triangular substitutions used to solve each column.

[Zhu, Ghahramani, and Lafferty, Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions, §2](https://mlg.eng.cam.ac.uk/pub/pdf/ZhuGhaLaf03a.pdf)

[Chapelle, Schölkopf, and Zien, Semi-Supervised Learning, Chapter 11 §§11.2–11.3](https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf)
