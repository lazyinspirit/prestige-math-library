---
id: thm-cm-center-of-mass-and-kinetic-splitting
kind: theorem
title: "Centre of mass, the identity $\\sum_i m_i\\rho_i=0$, and the splitting of the kinetic sum $\\sum_i m_i\\lVert x_i'\\rVert_2^2$ into centre-of-mass and relative parts (with the two-body reduced-mass case)"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-vector-valued-derivative-and-integral, def-euclidean-inner-product, def-interval, lem-finite-sum-laws]
dependency_roles:
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.3, Eqs. (1.15)-(1.16) and (1.22)-(1.23), printed pp. 6-8: the centre of mass and the kinetic-energy split"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.4, Eqs. (3.30)-(3.35), printed pp. 40-42: centre of mass and reduced mass for two bodies"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $N\in\mathbb N$, $N\ge1$, let $I\subseteq\mathbb R$ be an interval with at least two points ([[def-interval]]), let $m_1,\dots,m_N>0$ and let $x_i:I\to\mathbb R^3$ be differentiable at every point of $I$ ([[def-vector-valued-derivative-and-integral]]). All sums over $i$ range over $1,\dots,N$: for a real family $a_1,\dots,a_N$, define $\sum_i a_i:=\sum_{k<N}b_k$, where $b:\mathbb N\to\mathbb R$ has $b_k=a_{k+1}$ for $k<N$ and $b_k=0$ for $k\ge N$, using the finite sums of [[lem-finite-sum-laws]]; vector sums are defined coordinatewise, and sums of curves pointwise. Put $M:=\sum_i m_i>0$, $X:=M^{-1}\sum_i m_ix_i$ and $\rho_i:=x_i-X$. The symbols $\langle\cdot,\cdot\rangle$ and $\lVert\cdot\rVert_2$ denote the Euclidean inner product and norm on $\mathbb R^3$ ([[def-euclidean-inner-product]]). Then:

1. $X$ and every $\rho_i$ are differentiable on $I$, with $X'=M^{-1}\sum_im_ix_i'$ and $\rho_i'=x_i'-X'$, and the identities $\sum_im_i\rho_i=0$ and $\sum_im_i\rho_i'=0$ hold on $I$;
2. for every $t\in I$, $$\sum_{i}m_i\lVert x_i'(t)\rVert_2^2=M\lVert X'(t)\rVert_2^2+\sum_{i}m_i\lVert\rho_i'(t)\rVert_2^2;$$
3. if $N=2$, then with $r:=x_1-x_2$ and $\mu:=m_1m_2/M$ one has $\sum_im_i\lVert\rho_i'(t)\rVert_2^2=\mu\lVert r'(t)\rVert_2^2$ and hence $$\sum_{i}m_i\lVert x_i'(t)\rVert_2^2=M\lVert X'(t)\rVert_2^2+\mu\lVert r'(t)\rVert_2^2$$ for every $t\in I$.

## Facts & Assumptions

**Given:** A natural $N\ge1$, an interval $I\subseteq\mathbb R$ with at least two points, positive reals $m_1,\dots,m_N$ and curves $x_i:I\to\mathbb R^3$ differentiable at every point of $I$.

[L1] If $f,g:I\to\mathbb R^m$ are differentiable at $t$ and $\mu\in\mathbb R$, then $f+g$ and $\mu f$ are differentiable at $t$ with $(f+g)'(t)=f'(t)+g'(t)$ and $(\mu f)'(t)=\mu f'(t)$; a vector-valued function is differentiable exactly when all its components are ([[def-vector-valued-derivative-and-integral]]).

[L2] The Euclidean inner product is bilinear and symmetric, $\langle u,w\rangle=\sum_{k<3}u_kw_k$, and $\lVert u\rVert_2^2=\langle u,u\rangle$ ([[def-euclidean-inner-product]]).

[L3] Under the statement's shifted indexing convention, additivity and scaling in [[lem-finite-sum-laws]] clauses 1–2 give $\sum_i(\alpha a_i+\beta b_i)=\alpha\sum_ia_i+\beta\sum_ib_i$ for real families and, by applying those scalar laws to each coordinate, vector families. Clause 4 also gives $\sum_i a_i\ge a_j$ for every $1\le j\le N$ when all $a_i\ge0$.

## Proof

**Proof technique:** direct.

1.1 Since $N\ge1$ and all masses are positive, [L3] gives $M\ge m_1>0$, so $M^{-1}$ is defined. Each $x_i$ is differentiable on $I$, so repeated application of [L1] makes the finite sum $\sum_im_ix_i$ and its scalar multiple $X=M^{-1}\sum_im_ix_i$ differentiable on $I$ with $X'=M^{-1}\sum_im_ix_i'$, and then every $\rho_i=x_i-X$ is differentiable on $I$ with $\rho_i'=x_i'-X'$. [given, L1, L3]


2.1 Using the definition of $X$ and [L3], $\sum_im_i\rho_i=\sum_im_ix_i-MX=\sum_im_ix_i-\sum_im_ix_i=0$ on $I$; differentiating this identity through the sum formula of step 1.1 gives $\sum_im_i\rho_i'=0$ on $I$. [step 1.1, L1, L3, algebra]


3.1 For every $t\in I$, substituting $x_i'=X'+\rho_i'$ and expanding with bilinearity and symmetry [L2], $$\sum_im_i\lVert x_i'\rVert_2^2=\sum_im_i\bigl(\lVert X'\rVert_2^2+2\langle X',\rho_i'\rangle+\lVert\rho_i'\rVert_2^2\bigr)=M\lVert X'\rVert_2^2+2\Bigl\langle X',\sum_im_i\rho_i'\Bigr\rangle+\sum_im_i\lVert\rho_i'\rVert_2^2,$$ and the middle term vanishes by step 2.1; this is clause 2. [step 2.1, L2, L3, algebra]


4.1 Let $N=2$. From the definitions, $X=\frac{m_1x_1+m_2x_2}{M}$ and $r=x_1-x_2$, so $\rho_1=x_1-X=\frac{Mx_1-m_1x_1-m_2x_2}{M}=\frac{m_2}{M}r$ and $\rho_2=x_2-X=\frac{Mx_2-m_1x_1-m_2x_2}{M}=-\frac{m_1}{M}r$; differentiating by [L1] and expanding squared norms by [L2] gives $\sum_im_i\lVert\rho_i'\rVert_2^2=\bigl(\frac{m_1m_2^2+m_2m_1^2}{M^2}\bigr)\lVert r'\rVert_2^2=\frac{m_1m_2(m_1+m_2)}{M^2}\lVert r'\rVert_2^2=\mu\lVert r'\rVert_2^2$, because $M=m_1+m_2$. Substitution into clause 2 gives clause 3. [step 3.1, L1, L2, L3, algebra] ∎
