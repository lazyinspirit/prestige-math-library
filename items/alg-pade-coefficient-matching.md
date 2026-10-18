---
id: alg-pade-coefficient-matching
kind: algorithm
title: Exact Padé coefficient matching with defect statuses
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: []
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pedro Gonnet, Stefan Güttel, and Lloyd N. Trefethen, Robust Padé
        Approximation via SVD, Section 2
      url: https://people.maths.ox.ac.uk/trefethen/gonnet_guettel_trefethen.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Input nonnegative integers $m,n$ and coefficients $c_0,\ldots,c_{m+n}\in
\mathbb C$ of a formal power series or of an analytic function at $0$. Set
$c_k=0$ for negative $k$. Seek a normalized denominator
$q(z)=1+\sum_{j=1}^nq_jz^j$. Form the $n\times n$ moment system
$$\sum_{j=1}^{n}q_jc_{m+\ell-j}=-c_{m+\ell}, \qquad 1\le\ell\le n.$$
Classify it by exact Gaussian elimination on the augmented matrix. Start with
pivot row $r=1$ and scan columns $j=1,\ldots,n$ in order. In column $j$, if
all entries in rows $r$ through $n$ are zero, leave that column free and
continue. Otherwise choose the first row $s\ge r$ with a nonzero entry in
column $j$, swap rows $s$ and $r$, divide row $r$ by its column-$j$ entry,
and subtract the resulting row multiple from every other row to make the
other entries in column $j$ zero; then increment $r$. After all columns, a
row whose coefficient entries are all zero and whose augmented entry is
nonzero makes the system inconsistent, so return status
$\texttt{full-order-inconsistent}$. If the system is consistent but has
rank less than $n$, return status $\texttt{defective-nonunique}$ together
with the rank and reduced system; do not select a denominator from its
affine solution set. Here rank is the number of pivot rows; consistency and rank are
read from the reduced augmented matrix. If the system has rank $n$, return status
$\texttt{full-order-solvable}$ and the unique solution
$(q_1,\ldots,q_n)$ and set
$$p_k=\sum_{j=0}^{\min(k,n)}q_jc_{k-j}, \qquad 0\le k\le m,\qquad q_0:=1.$$
The output is the coefficient-matching candidate $p/q$ with its full-order
status. If $n=0$, return status $\texttt{full-order-solvable}$ with the empty
denominator system's unique solution $q=1$ and numerator coefficients
$p_k=c_k$ for $0\le k\le m$.
This procedure claims no pole-location or analytic-continuation guarantee.
