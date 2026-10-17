---
id: def-finite-straight-line-computational-program
kind: definition
title: "Finite straight-line computational programs and real-arithmetic tapes"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-c-one-map-and-local-inverse, def-total-derivative-in-euclidean-space]
justified_by: []
verification:
  precheck: n/a
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §§8.3–8.4.1"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
    - title: "A. Griewank, Achieving Logarithmic Growth of Temporal and Spatial Complexity in Reverse Automatic Differentiation, §§1, 3–6"
      url: "https://web.archive.org/web/20210506204927/http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.455.4143&rep=rep1&type=pdf"
dependency_level: 0
---

## Definition

Fix an input dimension $n\ge0$, finitely many operation nodes $1,\ldots,T$, and a designated output node $o$, either an input coordinate or an operation, whose value space is $\mathbb R$. Give input coordinate $i$ a label $\mathrm{in}_i$ distinct from all operation indices, and set $z_{\mathrm{in}_i}=x_i$ and $E_{\mathrm{in}_i}=\mathbb R$ with its standard Euclidean inner product. Operation node $j$ has an ordered list of parent slots $p_{j,1},\ldots,p_{j,r_j}$; each slot is either an input label $\mathrm{in}_i$ or an operation index $\ell<j$. Repeated parent slots are allowed and count separately. The graph is a finite straight-line program because every operation reads only earlier values and there are no data-dependent loops.

For each operation $j$, choose a dimension $d_j\ge0$, set $E_j=\mathbb R^{d_j}$ with its standard Euclidean inner product, take an open set $U_j\subseteq E_{p_{j,1}}\times\cdots\times E_{p_{j,r_j}}$ with the product inner product, and choose a primitive map $\phi_j:U_j\to E_j$. A smooth primitive is $C^1$: it is totally differentiable and its derivative matrix is continuous. For Hessian-vector products require the primitive to be $C^2$, meaning $C^1$ with a continuously differentiable derivative map. Derivatives are represented in these coordinates, and every transpose is the Euclidean transpose for the stated inner products; the gradient of a scalar output is the Euclidean gradient. The real-arithmetic primal recursion is $z_j=\phi_j(z_{p_{j,1}},\ldots,z_{p_{j,r_j}})$ whenever the parent tuple lies in $U_j$. Its admissible input domain is the set of $x\in\mathbb R^n$ for which every operation in this recursion is defined. The graph's scalar output function $f$ is the value at $o$: it is $x_i$ when $o$ is input coordinate $i$, and $z_j$ when $o$ is operation node $j$.

The **primal tape** is the finite ordered record of input and node values, parent-slot indices, primitive identities, and (when applicable) selected branch labels. A deterministic replay starts from the identical checkpoint state and applies the identical primitive maps in the identical order, so it reproduces the same real-arithmetic values and local derivative inputs. Opaque solver calls are not primitive operations unless their complete deterministic map and derivative rule are explicitly supplied.

A piecewise-$C^1$ primitive is specified by finitely many open branch regions and a $C^1$ formula on each region; its primal boundary value, if any, is specified separately. If the current parent tuple lies strictly inside exactly one declared branch, the program uses that branch and its derivative. At a branch boundary or ambiguous branch selection, forward or reverse AD returns NONDIFFERENTIABLE; it does not silently choose a subgradient or generalized derivative. If no primal value is specified at a boundary, that input is outside the program's domain. All correctness theorems below apply on a fixed strict branch. The same convention applies to piecewise-$C^2$ primitives for Hessian-vector products.
