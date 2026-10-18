---
id: lem-na-nedelec-edge-unisolvence
kind: lemma
title: Lowest-order Nedelec edge circulation unisolvence
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [ def-na-lowest-order-whitney-de-rham-spaces ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture
        notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element
        exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
verification:
  precheck: pass
---

## Statement

On an oriented tetrahedron $K$ with vertices $x_0,x_1,x_2,x_3$, let $\phi_{ij}=\lambda_i\nabla\lambda_j-\lambda_j\nabla\lambda_i$ for $0\le i<j\le3$. Then the six edge circulations $\ell_{rs}(v)=\int_{[x_r,x_s]}v\cdot t_{rs}\,ds$ satisfy $\ell_{rs}(\phi_{ij})=\delta_{(r,s),(i,j)}$. The six functions form a basis of the local space $\operatorname{span}\{\phi_{ij}:i<j\}=\{a+b\times x:a,b\in\mathbb R^3\}$, so these edge circulations are unisolvent degrees of freedom.

## Facts & Assumptions

**Given:** The local edge shape functions, oriented edge circulations, and the first-family lowest-order local Nedelec space from [[def-na-lowest-order-whitney-de-rham-spaces]].

[F1] On each tetrahedron, $\phi_{ij}=\lambda_i\nabla\lambda_j-\lambda_j\nabla\lambda_i$ and the local edge space is their span. ([[def-na-lowest-order-whitney-de-rham-spaces]])

## Proof

1.1 Parametrize the oriented edge $[x_i,x_j]$ by $x(t)=(1-t)x_i+tx_j$, $0\le t\le1$. Along it, $\lambda_i=1-t$, $\lambda_j=t$, so $\nabla\lambda_j\cdot x'(t)=1$ and $\nabla\lambda_i\cdot x'(t)=-1$. Therefore $\phi_{ij}(x(t))\cdot x'(t)=(1-t)-t(-1)=1$, and $\ell_{ij}(\phi_{ij})=1$. [F1, construct, algebra]

2.1 Let $[x_r,x_s]$ be a different edge. If it shares no endpoint with $[x_i,x_j]$, then both $\lambda_i$ and $\lambda_j$ vanish identically along $[x_r,x_s]$, so its circulation is zero. If it shares $x_i$, then $\lambda_j$ vanishes identically along that edge and its directional derivative also vanishes; the remaining term $-\lambda_j\nabla\lambda_i$ is zero. The case sharing $x_j$ is symmetric. Thus $\ell_{rs}(\phi_{ij})=0$ whenever $(r,s)\ne(i,j)$. [F1, step 1.1, algebra]

3.1 Each $\phi_{ij}$ is affine in $x$. Its linear part is the skew-symmetric map $x\mapsto(\nabla\lambda_j\cdot x)\nabla\lambda_i-(\nabla\lambda_i\cdot x)\nabla\lambda_j$, hence equals $b_{ij}\times x$ for a unique $b_{ij}\in\mathbb R^3$; its constant part is a vector $a_{ij}$. The space $\{a+b\times x:a,b\in\mathbb R^3\}$ has dimension six: if $a+b\times x=0$ on the open tetrahedron, subtracting the values at two points shows $b\times y=0$ for every $y\in\mathbb R^3$, so $b=0$ and then $a=0$. The six functions are linearly independent because their circulation matrix is the identity by steps 1.1–1.2. They therefore form a basis of this six-dimensional space, and the six moments are unisolvent. [F1, step 1.1, step 2.1, algebra] ∎

