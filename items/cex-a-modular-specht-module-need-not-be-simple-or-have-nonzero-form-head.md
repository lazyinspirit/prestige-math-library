---
id: cex-a-modular-specht-module-need-not-be-simple-or-have-nonzero-form-head
kind: counterexample
title: "Modular Specht modules need not be simple, and form heads can vanish"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-integral-specht-lattice-and-base-change
  - def-integral-tabloid-bilinear-form-and-specht-gram-matrix
  - def-modular-specht-form-and-radical-quotient
  - thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions
  - ex-specht-form-rank-for-shape-two-two-in-small-characteristics
  - def-young-subgroup-tabloid-and-permutation-module
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-young-tableau-standard-tableau-and-shape
  - def-simple-module
  - def-submodule
  - def-splitting-p-modular-system-for-a-finite-group
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Example 5.1 and Example 12.4, printed pp. 18 and 43"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, §2.3 and Exercise 2.4, printed pp. 23-25"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: pass
---

## Statement refuted

Every nonzero modular Specht module $S^\lambda_k\subseteq M^\lambda_k$ is
simple, and its invariant-form quotient $D^\lambda=S^\lambda_k/R^\lambda$ is
nonzero; in particular the Gram matrix and its quotient detect nonzero Specht
modules in every characteristic.

## Facts & Assumptions

**Given:** A prime $p$ and a splitting $p$-modular system $(K,\mathcal O,k)$ for $S_n$ ([[def-splitting-p-modular-system-for-a-finite-group]]), with the base-changed Specht module $S^\lambda_k\subseteq M^\lambda_k$ and its quotient $D^\lambda=S^\lambda_k/R^\lambda$ ([[def-integral-specht-lattice-and-base-change]], [[def-modular-specht-form-and-radical-quotient]]). For the first witness $p=3$, $n=3$, $\lambda=(2,1)$ and the two standard tableaux $t=\begin{smallmatrix}1&2\\3&\end{smallmatrix}$, $u=\begin{smallmatrix}1&3\\2&\end{smallmatrix}$; for the second witness $p=2$, $n=4$, $\lambda=(2,2)$.

[F1] The standard polytabloids form a basis of $S^\lambda_k$ over every field $k$, and $\dim_kS^\lambda_k$ is the number of standard $\lambda$-tableaux ([[def-integral-specht-lattice-and-base-change]], [[def-young-tableau-standard-tableau-and-shape]]). In particular $\dim_kS^{(2,1)}_k=2$ with basis $e_t,e_u$, and $\dim_kS^{(2,2)}_k=2$ with basis the polytabloids of the standard tableaux $12/34$ and $13/24$.

[F2] The $(2,1)$-tabloids are the three tabloids $v_1,v_2,v_3$, where $v_i$ is the tabloid whose singleton second row is $\{i\}$; they form a $k$-basis of $M^{(2,1)}_k$, and $\sigma$ acts by relabelling the entries, so $\sigma\cdot v_i=v_{\sigma(i)}$ ([[def-young-subgroup-tabloid-and-permutation-module]]).

[F3] For a tableau $t$ one has $\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$ and $e_t=\kappa_t\cdot\{t\}$; here $C_t=\{1,(13)\}$ for $t=12/3$ and $C_u=\{1,(12)\}$ for $u=13/2$, and $(13)\cdot t$ and $(12)\cdot u$ both have singleton second row $\{1\}$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]). Consequently $e_t=v_3-v_1$ and $e_u=v_2-v_1$ in $M^{(2,1)}_k$, for every field $k$.

[F4] The integral tabloid form $\beta$ has the tabloids as an orthonormal basis; its scalar extension $\beta_k$ is symmetric and nondegenerate, and $R^\lambda=S^\lambda_k\cap(S^\lambda_k)^\perp$ with $\dim_kD^\lambda=\operatorname{rank}_k(G_\lambda\bmod p)$ ([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]], [[def-modular-specht-form-and-radical-quotient]]).

[F5] The example [[ex-specht-form-rank-for-shape-two-two-in-small-characteristics]] computes $G_{(2,2)}=\begin{pmatrix}4&2\\2&4\end{pmatrix}$ and its reductions: $\operatorname{rank}_2(G_{(2,2)}\bmod 2)=0$, while $\dim_kS^{(2,2)}_k=2$ in every characteristic.

[F6] For a $p$-modular system as above, $D^\lambda\ne0$ if and only if $\lambda$ is $p$-regular ([[thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions]]).

[F7] A $k[S_n]$-module is simple when it is nonzero and has no proper nonzero submodule; a subspace closed under the action is a submodule ([[def-simple-module]], [[def-submodule]]).

## Counterexample

**Proof technique:** direct.

1.1 Take $k$ of characteristic $3$ and $\lambda=(2,1)$, so $n=3$. By [F1]
and [F3] the module $S^{(2,1)}_k$ has $k$-basis $e_t=v_3-v_1$, $e_u=v_2-v_1$, and $$e_t+e_u=(v_3-v_1)+(v_2-v_1)=v_1+v_2+v_3-3v_1 =v_1+v_2+v_3=:w$$ because $3v_1=0$ in characteristic $3$. In particular $w\in S^{(2,1)}_k$ and $w\ne0$, since its coefficients at the basis vectors $v_1,v_2,v_3$ are all $1$. For every $\sigma\in S_3$ one has $\sigma\cdot w=v_{\sigma(1)}+v_{\sigma(2)}+v_{\sigma(3)}=w$ by [F2], so the one-dimensional subspace $kw\subseteq S^{(2,1)}_k$ is a submodule. It is proper because $\dim_kS^{(2,1)}_k=2$ by [F1]. Hence $S^{(2,1)}_k$ has a proper nonzero submodule and is not simple by [F7]; the characteristic-$3$ witness is a nonzero two-dimensional modular Specht module with a one-dimensional trivial submodule. [given, F1, F2, F3, F7, algebra]

1.2 Take $k$ of characteristic $2$ and $\lambda=(2,2)$, so $n=4$. By [F5]
the reduction of the integral Gram matrix $G_{(2,2)}$ modulo $2$ is the zero matrix, of rank $0$; by the dimension formula of [F4] this gives $\dim_kD^{(2,2)}=\operatorname{rank}_2(G_{(2,2)}\bmod 2)=0$, so $D^{(2,2)}=0$ while $S^{(2,2)}_k\ne0$ of dimension $2$ by [F5]. Equivalently, $(2,2)$ has the part $2$ occurring twice and is $2$-singular, so [F6] also predicts $D^{(2,2)}=0$. Thus the Gram quotient of a nonzero modular Specht module can vanish. [given, F4, F5, F6, algebra]

2.1 Step 1.1 exhibits a nonzero modular Specht module that is not simple, and step 1.2 exhibits a nonzero modular Specht module whose invariant-form quotient is zero; the two failures are independent, since the first occurs for a $p$-regular label (where $D^{(2,1)}\ne0$ by [F6]) and the second for a $p$-singular one. Hence the statement refuted fails in both clauses, and no field-independent appeal to the ordinary-case simplicity or to nonvanishing of the form quotient is available in prime characteristic. [given, F6, step 1.1, step 1.2] ∎

## Remarks

- **The quotient in the characteristic-$3$ witness.** Quotienting $S^{(2,1)}_k$ by $kw$ leaves a one-dimensional module; from $(12)\cdot e_t=v_3-v_2$ and $v_3-v_2+e_t=2v_3-v_1-v_2=3v_3-w\equiv0$ one computes $(12)\cdot(e_t+kw)=-e_t+kw$ in characteristic $3$, so the transposition acts by $-1$ on the quotient and the quotient is the sign representation. With step 1.1 this is the factor list $[S^{(2,1)}_k]=[D^{(3)}]+[D^{(2,1)}]$ at $p=3$, matching the decomposition matrix of James Example 12.4 for $S_3$ ([[thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular]]).
- **What is not claimed about the characteristic-$2$ witness.** Step 1.2 only refutes nonvanishing of the form quotient for $S^{(2,2)}_k$; nothing here asserts that $S^{(2,2)}_k$ is or is not simple in characteristic $2$.
- **No detection criterion is claimed.** The reduction of the Gram matrix computes $\dim_kD^\lambda$ and hence detects whether $D^\lambda\ne0$ ([[def-modular-specht-form-and-radical-quotient]]); it does not detect reducibility of $S^\lambda_k$, as the characteristic-$3$ witness shows, where $D^{(2,1)}\ne0$ and yet $S^{(2,1)}_k$ is reducible.
