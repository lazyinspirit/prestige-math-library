---
id: def-real-and-complex-topological-vector-bundle
kind: definition
title: Real and complex topological vector bundles
status: published
origin: pipeline
deps: [def-locally-trivial-fiber-bundle, def-invertible-matrix-and-general-linear-group]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §1.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Definition and transition functions, printed pp.6–8"
    - title: "Milnor and Stasheff, Characteristic Classes, §2"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Vector-bundle conventions, printed pp.14–16"
---

## Definition

Fix $\mathbb F\in\{\mathbb R,\mathbb C\}$ and $n\geq0$. A **rank-$n$
$\mathbb F$-vector bundle** over $X$ is a locally trivial bundle
$p:E\to X$ in the sense of [[def-locally-trivial-fiber-bundle]], together with
an $\mathbb F$-vector-space structure on every fiber $E_x=p^{-1}(x)$, whose local charts

$$\phi_i:p^{-1}(U_i)\xrightarrow{\cong}U_i\times\mathbb F^n$$

restrict on every fiber to linear isomorphisms $E_x\cong\mathbb F^n$. Here
$M_n(\mathbb F)\cong\mathbb F^{n^2}$ has its Euclidean topology and
$\operatorname{GL}_n(\mathbb F)$ has the subspace topology; its underlying
algebraic set is the one fixed in
[[def-invertible-matrix-and-general-linear-group]]. The transition
from chart $\phi_i$ to $\phi_j$ is therefore

$$\phi_j\phi_i^{-1}(x,v)=(x,g_{ji}(x)v)$$

for a continuous $g_{ji}:U_i\cap U_j\to\operatorname{GL}_n(\mathbb F)$.
Indeed, evaluating the continuous chart change at each standard basis vector
gives the matrix columns continuously, and its values are invertible because
the chart change is fiberwise linear.
Our index convention gives

$$g_{ii}=I,\qquad g_{ki}=g_{kj}g_{ji}.$$

Rank is fixed in this definition. The case $n=0$ is the bundle $X\to X$
with zero-dimensional fibers, and $X=\varnothing$ is allowed.

The bundle is **numerable** if it has a linear trivializing cover
$(U_i)$ together with a locally finite partition of unity $(\rho_i)$ such
that $\operatorname{supp}\rho_i\subseteq U_i$. The charts and the subordinate
partition, when specified, are called a **numeration**.
