---
id: thm-tdmath-local-implicit-rank
kind: theorem
title: "Local graph form at a nonsingular derivative minor"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: reduction
deps:
  - def-c-one-map-and-local-inverse
  - def-invertible-euclidean-linear-map
  - def-metric-topology
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-chain-rule-for-total-derivatives
  - thm-euclidean-implicit-function-theorem
  - thm-euclidean-inverse-function-theorem
dependency_roles:
  def-c-one-map-and-local-inverse: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-metric-topology: mathematical-premise
  lem-euclidean-linear-maps-have-matrices-and-are-bounded: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-euclidean-implicit-function-theorem: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Faye Jackson, MATH 395 notes, Implicit Function Theorem, pp. 99–106 and 127–132"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
    - title: "K. C. Border, Notes on the Implicit Function Theorem, Theorems 3–5"
      url: "https://kcborder.caltech.edu/Courses/Notes/IFT.pdf"
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.6"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
verification:
  precheck: n/a
---

## Statement

Let $1\le q\le n$, let $U\subseteq\mathbb R^n$ be open, and let $F:U\to\mathbb R^q$ be $C^1$ in the sense of [[def-c-one-map-and-local-inverse]]. Suppose $F(x_*)=0$ and some $q\times q$ minor of the derivative matrix $DF(x_*)$ is invertible. This nonsingular-minor hypothesis is the explicit full-row-rank condition used here. If $q<n$, then after permuting coordinates $x=(u,v)\in\mathbb R^{n-q}\times\mathbb R^q$, there are open neighborhoods $P$ of $u_*$ and $Q$ of $v_*$ and a unique $C^1$ map $\varphi:P\to Q$ such that

$$F(u,v)=0\quad\Longleftrightarrow\quad v=\varphi(u)\qquad((u,v)\in P\times Q).$$

Its derivative is

$$D\varphi(u)=-D_vF(u,\varphi(u))^{-1}D_uF(u,\varphi(u)).$$

Thus the local zero set is a graph over $n-q$ free coordinates. If $q=n$, the zero is locally isolated, so the local graph dimension is zero. Here “local graph dimension $k$” means a local graph parameterized by an open subset of $\mathbb R^k$, with a singleton counted as dimension zero.

## Facts & Assumptions

**Given:** The open domain, $C^1$ map, zero, dimensions, and invertible derivative minor in the Statement.

[F1] [[def-c-one-map-and-local-inverse]]: a map is $C^1$ when it is totally differentiable everywhere and the entries of its derivative matrix are continuous.

[F2] [[def-invertible-euclidean-linear-map]]: a square linear map is invertible when it has a two-sided linear inverse.

[L1] [[thm-euclidean-implicit-function-theorem]]: for a $C^1$ map $G:W\to\mathbb R^q$ on an open $W\subseteq\mathbb R^{m+q}$ with $m,q\ge1$, $(a,b)\in W$, $G(a,b)=0$, and invertible derivative in the second block, the local zero set is a unique $C^1$ graph, with derivative $D\varphi=-(D_yG)^{-1}D_xG$.

[L2] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ map between open subsets of $\mathbb R^n$ with invertible derivative at a point is a local $C^1$ bijection with a $C^1$ inverse.

[L3] [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]: linear maps between Euclidean spaces have coordinate matrices and are bounded, hence continuous; a coordinate permutation is an invertible linear map.

[L4] [[thm-chain-rule-for-total-derivatives]]: composing a $C^1$ map with a linear coordinate permutation preserves total differentiability and the derivative formula; [L3] and [[def-metric-topology]] make that permutation a homeomorphism, so it preserves open domains.

## Proof

**Proof technique:** reduction.

1.1 First suppose $q<n$. Choose the coordinate permutation that puts the columns of the stated invertible minor into the second block $v\in\mathbb R^q$, and write the remaining coordinates as $u\in\mathbb R^{n-q}$. Composing $F$ with the inverse permutation preserves openness and the $C^1$ property by [F1], [L3], and [L4]; its second-block derivative at $(u_*,v_*)$ is exactly the chosen invertible minor in the sense of [F2]. Since $n-q\ge1$ and $q\ge1$, [L1] applies and gives the neighborhoods, unique graph $\varphi$, equivalence, and displayed derivative formula. [F1, F2, L1, L3, L4, given, construct]

2.1 The graph map $u\mapsto(u,\varphi(u))$ is one-to-one because its first coordinate is $u$, and its inverse on the graph is coordinate projection. Its parameter domain $P$ is open in $\mathbb R^{n-q}$, so this is the claimed local graph dimension. [step 1.1, algebra]

3.1 Now suppose $q=n$. The selected minor is the whole square derivative matrix $DF(x_*)$, so it is invertible by [F2]. Apply [L2] on neighborhoods $V$ of $x_*$ and $W$ of $0$. Injectivity of $F|_V$ and $F(x_*)=0$ imply $F(x)=0$ for $x\in V$ exactly when $x=x_*$. Thus the local zero set is a singleton and has the stated zero-dimensional graph form. [F2, L2, given, algebra] ∎
