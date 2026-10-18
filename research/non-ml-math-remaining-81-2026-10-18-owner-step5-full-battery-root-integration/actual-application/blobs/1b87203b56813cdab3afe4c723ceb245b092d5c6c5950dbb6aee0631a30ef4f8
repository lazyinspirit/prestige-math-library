---
id: def-jordan-quiver-nilpotent-representation-category
kind: definition
title: "Nilpotent representations of the Jordan quiver"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-nilpotent-endomorphism
  - def-jordan-block-and-jordan-string
  - def-partition-young-diagram-and-conjugate-partition
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §2.1"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: n/a
---

## Definition

The **Jordan quiver** has one vertex and one loop, labelled $t$:

```tikz
\begin{tikzpicture}[>=stealth]
  \node[circle,draw,inner sep=2.5pt] (v) at (0,0) {$\bullet$};
  \draw[->] (v) edge[loop above] node {$t$} (v);
\end{tikzpicture}
```

A finite-dimensional representation over a field $k$ is a pair
$(V,x)$, where $V$ is a finite-dimensional $k$-vector space and
$x:V\to V$ is nilpotent ([[def-nilpotent-endomorphism]]). A morphism
$(V,x)\to(V',x')$ is a linear map $f:V\to V'$ satisfying
$fx=x'f$, encoded by the commutative square

```tikzcd
V \arrow[r, "x"] \arrow[d, "f"'] & V \arrow[d, "f"] \\
V' \arrow[r, "x'"'] & V'
```

For this page, $\mathcal J_k$ denotes the small model whose objects are
$(k^n,X)$, for $n\ge0$, with $X$ a nilpotent matrix, and whose
morphisms are all matrices intertwining the endomorphisms. Every finite-
dimensional vector space is isomorphic to a standard $k^n$, so the model
represents all finite-dimensional nilpotent representations. For any field
$k$, write $S=(k,0)$ for the one-dimensional object and
$I_m=(k^m,J_m(0))$ for the length-$m$ Jordan block, using
[[def-jordan-block-and-jordan-string]]. For a partition
$\lambda=(\lambda_1,\ldots,\lambda_s)$
([[def-partition-young-diagram-and-conjugate-partition]]), write
$I_\lambda$ for the block-diagonal representation with blocks
$J_{\lambda_1}(0),\ldots,J_{\lambda_s}(0)$.
Use $S^{\oplus0}=I_\varnothing=0$ for the zero object.
