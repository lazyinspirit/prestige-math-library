---
id: lem-author-6ad39f024b17-nonbacktracking-norm-transfer
title: Transfer two nonbacktracking good events to the required norm bound
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - math:def-adjacency-matrix-of-a-finite-simple-graph
  - math:def-graph-adjacency-incidence-neighbourhood-and-degree
  - math:lem-operator-norm-is-a-norm
  - math:def-eigenvalue-eigenvector-eigenspace-and-spectrum
dependency_roles:
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  math:def-adjacency-matrix-of-a-finite-simple-graph: mathematical-premise
  math:def-graph-adjacency-incidence-neighbourhood-and-degree: mathematical-premise
  math:lem-operator-norm-is-a-norm: mathematical-premise
  math:def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Benaych-Georges, Bordenave and Knowles, Spectral radii of sparse random
        matrices (19 September 2019)
      url: https://www.unige.ch/~knowles/SP.pdf
      locator: PDF p. 3, Definition 2.1; p. 4, Theorem 2.2
      statement: For a Hermitian matrix $H$, set $r=\max_i(\sum_j|H_{ij}|^2)^{1/2}$
        and $b=\max_{ij}|H_{ij}|$. If $r>0$, Theorem 2.2 gives $\|H\|\le r
        f(\rho(B)/r)+7b$, where $f(x)=2$ for $0\le x\le1$ and $f(x)=x+x^{-1}$
        for $x\ge1$.
      hypotheses: Finite Hermitian H; the nonbacktracking matrix is defined by the
        displayed ordered-pair formula. Treat H=0 separately.
      reading_limits: Checked the extracted PDF text on pp. 3–4 for Definition 2.1,
        the matrix norm conventions and Theorem 2.2, including its full
        deterministic Hermitian hypothesis. The theorem is imported; its proof
        and the remaining paper were not reconstructed or fully read.
dependency_level: 0
---

## Statement

Let $G=(V,E)$ be a finite simple graph on $n$ ordered vertices, with adjacency matrix $A$. Let $J$ be the $n\times n$ all-ones matrix and $I$ the $n\times n$ identity matrix. Write $d(i)$ for the degree of vertex $i$ in this order and $d_{\max}=\max_i d(i)$. Let $0<p<1$, $\mu=np>16$, and $H=(A-p(J-I))/\sqrt\mu$. All matrix norms below are Euclidean operator norms on $\mathbb C^n$. For a matrix $H$, its nonbacktracking matrix $B$ is indexed by all ordered vertex pairs and has $B_{(i,j),(k,l)}=H_{kl}\mathbf1_{j=k}\mathbf1_{i\ne l}$. Write $\rho(B)=\max\{|z|:z\text{ is an eigenvalue of }B\}$. If $d_{\max}<8\mu$ and $\rho(B)<2$, then $\|A-pJ\|<8\sqrt\mu$.

## Facts & Assumptions

[F1] The operator norm on bounded linear maps between normed spaces satisfies the triangle inequality and absolute homogeneity ([[math:lem-operator-norm-is-a-norm]]). The finite-dimensional operator norm used here is the maximum over the Euclidean unit sphere ([[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F2] For a Hermitian matrix $H$, set $r=\max_i(\sum_j|H_{ij}|^2)^{1/2}$ and $b=\max_{ij}|H_{ij}|$. If $r>0$, Theorem 2.2 gives $\|H\|\le r f(\rho(B)/r)+7b$, where $f(x)=2$ for $0\le x\le1$ and $f(x)=x+x^{-1}$ for $x\ge1$.

[F3] In an ordered finite simple graph, $A$ is symmetric with zero diagonal; row $i$ has $d(i)$ entries equal to one and $n-1-d(i)$ off-diagonal entries equal to zero ([[math:def-adjacency-matrix-of-a-finite-simple-graph]], [[math:def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## External input

For a matrix $H$, its nonbacktracking matrix $B$ is indexed by ordered vertex pairs and has $B_{(i,j),(k,l)}=H_{kl}\mathbf1_{j=k}\mathbf1_{i\ne l}$. Write $\rho(B)=\max\{|z|:z\text{ is an eigenvalue of }B\}$. For a Hermitian matrix $H$, set $r=\max_i(\sum_j|H_{ij}|^2)^{1/2}$ and $b=\max_{ij}|H_{ij}|$. If $r>0$, Theorem 2.2 gives $\|H\|\le r f(\rho(B)/r)+7b$, where $f(x)=2$ for $0\le x\le1$ and $f(x)=x+x^{-1}$ for $x\ge1$.

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove its conclusions.

1.1 Since $np>16$ and $0<p<1$, we have $n>0$. For any matrix $T$ on $\mathbb C^n$, let $M$ be its finite unit-sphere maximum from [F1]. For $x\ne0$, rescaling to $x/\|x\|$ gives $\|Tx\|\le M\|x\|$; the same inequality holds at zero. Thus $T$ is bounded, and its unit-ball supremum equals $M$, since it is at most $M$ and the unit ball contains the unit sphere. Consequently the triangle inequality and absolute homogeneity in [F1] apply to our finite-dimensional matrix norm. Also $\|Ix\|=1$ for every unit vector, so $\|I\|=1$. [F1, given, algebra]

1.2 Let $r,b$ be as in [F2] and put $\rho=\rho(B)$. By [F3], $H$ is real symmetric, hence Hermitian, with zero diagonal. Its off-diagonal entries are $(1-p)/\sqrt\mu$ at adjacent vertices and $-p/\sqrt\mu$ otherwise. Hence $b\le1/\sqrt\mu$ and $\sum_j|H_{ij}|^2=[d(i)(1-p)^2+(n-1-d(i))p^2]/\mu\le d(i)/\mu+p<9$, so $r<3$. For $r>0$, $r f(\rho/r)\le2\max\{r,\rho\}$: if $\rho\le r$ it is $2r$, and if $\rho\ge r$ it is $\rho+r^2/\rho\le2\rho$. Thus [F2] and $\rho<2$ give $\|H\|<6+7/\sqrt\mu$. If $r=0$, every entry of $H$ vanishes and this bound is immediate. [F2, F3, given, algebra]

2.1 Since $A-pJ=\sqrt\mu H-pI$, step 1.1 and step 1.2 give $\|A-pJ\|\le\sqrt\mu\|H\|+p\|I\|<6\sqrt\mu+7+p<6\sqrt\mu+8<8\sqrt\mu$, the last comparison using $\mu>16$. [step 1.1, step 1.2, algebra] ∎
