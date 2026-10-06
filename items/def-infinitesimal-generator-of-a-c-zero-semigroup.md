---
id: def-infinitesimal-generator-of-a-c-zero-semigroup
kind: definition
title: "Infinitesimal generator of a C0-semigroup"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - def-strongly-continuous-semigroup
  - def-banach-space
  - def-bounded-linear-operator
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - def-normed-subspace
justified_by: []
aliases: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 1, Definition 1.2 and the following observations, printed pp. 49-50"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, definition of generator, printed pp. 254-255"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.1, Definition 1.1 and Remark 1.2, printed pp. 1-2 (March 19, 2026 revision)"
verification:
  precheck: n/a
---

## Definition

For a Banach space $X$, the operator vocabulary of [[def-unbounded-linear-operator-domain-and-graph]] and [[def-densely-defined-closed-and-closable-operator]] is extended as follows: an operator is a linear map $A:D(A)\to X$ on a linear subspace of $X$, its graph is $\Gamma(A)=\{(x,Ax):x\in D(A)\}\subseteq X\times X$, it is closed when this graph is closed, and densely defined when $D(A)$ is dense in $X$. Use $\|(x,y)\|=\|x\|+\|y\|$ on $X\times X$ and the graph norm $\|x\|_A=\|x\|+\|Ax\|$. These norms are equivalent to the square-sum norms in the Hilbert suppliers. The product is Banach because its two coordinate Cauchy sequences converge in $X$; the closed graph is therefore Banach, and $x\mapsto(x,Ax)$ is an isometry of the graph-norm domain onto it. Under Countable Choice, sequential closedness is equivalent to closedness: for any point in a closure, choose graph points within $1/n$ and pass to their limit.

Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ ([[def-strongly-continuous-semigroup]]). Its **infinitesimal generator** is the linear operator $A:D(A)\subseteq X\to X$ with domain $$D(A):=\Bigl\{x\in X:\ \lim_{t\downarrow0}\frac{T(t)x-x}{t}\ \text{exists in }X\Bigr\}$$ and $Ax:=\lim_{t\downarrow0}\frac{T(t)x-x}{t}$ for $x\in D(A)$. The limit is a one-sided limit at the boundary point $0$, and $D(A)$ is a linear subspace of $X$ ([[def-normed-subspace]]); the operator is recorded as the pair $(A,D(A))$ in the sense of [[def-unbounded-linear-operator-domain-and-graph]] and [[def-densely-defined-closed-and-closable-operator]]. Neither boundedness nor closedness of $A$, nor density of $D(A)$, is assumed in the definition; under its stated choice hypothesis, [[thm-generators-are-closed-and-densely-defined]] proves that the graph of $A$ is closed and $D(A)$ is dense in $X$. The domain need not be closed in the norm of $X$.

**The one-sided limit.** For $x\in D(A)$ the difference quotient
$\frac{T(t)x-x}{t}\in X$ is defined for every $t>0$, and the defining limit is
taken along $t\downarrow0$ only; no two-sided limit at the boundary point $0$ of
$[0,\infty)$ is considered, and the vector $Ax$ is the limit when it exists. The
value $Ax$ is unique because $X$ is a metric space ([[def-banach-space]]).

**The domain is a linear subspace.** The zero vector lies in $D(A)$ and $A0=0$. If $x,y\in D(A)$ and $\alpha,\beta$ are scalars, then by linearity of
each $T(t)$ ([[def-bounded-linear-operator]]) the difference quotient of
$\alpha x+\beta y$ equals
$\alpha\frac{T(t)x-x}{t}+\beta\frac{T(t)y-y}{t}$ for every $t>0$; as
$t\downarrow0$ this converges to $\alpha Ax+\beta Ay$, because vector addition
and scalar multiplication are continuous and scalar multiplication by the fixed
scalars $\alpha,\beta$ is continuous. Hence $\alpha x+\beta y\in D(A)$ with
$A(\alpha x+\beta y)=\alpha Ax+\beta Ay$, so $D(A)$ is a linear subspace of $X$
([[def-normed-subspace]]) and $A$ is linear on it. The operator is recorded as
the pair $(A,D(A))$ in the vocabulary of [[def-unbounded-linear-operator-domain-and-graph]]
and [[def-densely-defined-closed-and-closable-operator]].

**What is not assumed.** Boundedness and graph closedness of $A$, and density of
$D(A)$ in $X$, are not defining assumptions. Graph closedness and domain density
are conclusions of the later theorem under its stated choice hypothesis; they
do not assert that $D(A)$ is closed in the norm of $X$. The semigroup axioms used here are those of
[[def-strongly-continuous-semigroup]], in particular $T(t)$ is everywhere
defined and bounded for every $t\ge0$.
