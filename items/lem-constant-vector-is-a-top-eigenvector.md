---
id: lem-constant-vector-is-a-top-eigenvector
kind: lemma
title: "Constant vector is a top eigenvector"
status: draft
origin: pipeline
deps: [def-regular-multigraph-and-normalized-adjacency, cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §2.3 spectral properties, pp20–21."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

For a finite $d$-regular adjacency-slot multigraph, $M\mathbf1=\mathbf1$, every eigenvalue of $M$ lies in $[-1,1]$, and $\mathbf1^\perp$ is invariant. The multiplicity of eigenvalue $1$ equals the number of connected components. For a connected graph, $-1$ is an eigenvalue if and only if its positive slots join opposite parts of a bipartition, so in particular it has no loop slots.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] A finite $d$-regular adjacency-slot multigraph on $V=\{1,\ldots,n\}$, with $n\ge1$ and integer $d>0$, is a symmetric matrix $A\in\mathbb Z_{\ge0}^{n\times n}$ with every row sum $d$. $A_{uv}$ counts slots from $u$ to $v$; diagonal entries count loop slots. Its normalized adjacency is $M=A/d$. We use $\langle f,g\rangle=n^{-1}\sum_v f(v)\overline{g(v)}$ unless an unnormalized inner product is explicitly specified. An adjacency list records the $d$ destinations per vertex, including repetitions. An ordinary undirected edge has two incidence slots paired by reversal; an ordinary loop has two slots at the same vertex. Such a representation requires even diagonal entries. Any symmetric integer matrix can be converted to it by doubling every slot. Uniform directed-slot sampling chooses one of the $nd$ slots; for a reverse-paired graph it induces the uniform distribution on its $nd/2$ ordinary edges. Connectivity uses positive off-diagonal entries. When $n=1$, the mean-zero subspace is $\{0\}$. ([[def-regular-multigraph-and-normalized-adjacency]]).

[F2] Let $V$ be a finite-dimensional real inner product space and let $T:V\to V$ be self-adjoint. Then $V$ has an orthonormal basis consisting of eigenvectors of $T$. ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).


## Proof

1.1 The row sums give $M\mathbf1=\mathbf1$; symmetry gives $\langle Mf,\mathbf1\rangle=\langle f,\mathbf1\rangle$. The real spectral theorem applies since $M$ is a symmetric endomorphism of a finite-dimensional real inner product space. If $Mf=\mu f$ and $|f(v)|$ is maximal and nonzero, then $|\mu|\,|f(v)|\le\sum_u M_{vu}|f(u)|\le|f(v)|$, proving the interval bound. [F1, F2]

2.1 Expansion of the squares gives $\langle f,(I-M)f\rangle=(2nd)^{-1}\sum_{u,v}A_{uv}(f(u)-f(v))^2$. Its zero vectors are exactly functions constant on each connected component. Thus the eigenspace for eigenvalue one has dimension the component count; the spectral theorem identifies this with multiplicity. [step 1.1, algebra]

3.1 Similarly $\langle f,(I+M)f\rangle=(2nd)^{-1}\sum_{u,v}A_{uv}(f(u)+f(v))^2$. For a nonzero $-1$ eigenvector all positive slots force $f(v)=-f(u)$. Connectivity propagates one nonzero absolute value to every vertex, excludes loops, and partitions the vertices by sign. Conversely on such a bipartition the vector taking values $+1,-1$ has $Mf=-f$. At $n=1$ positive degree forces loops and $M=[1]$, so no $-1$ eigenvalue occurs and the mean-zero space is zero. [step 1.1, algebra] ∎
