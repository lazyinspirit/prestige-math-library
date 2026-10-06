---
id: thm-courant-fischer-minimax-for-elliptic-eigenvalues
kind: theorem
title: "The Courant-Fischer min-max principle for elliptic eigenvalues"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 12
deps: [def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-orthogonality-and-orthogonal-complement, lem-eigenbasis-expansion-in-the-form-norm, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator, thm-rank-nullity, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-heine-borel-rn, thm-extreme-value-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 9, Poincare minimax characterization (9.2), printed pp. 51-52 (read in full)'
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 10, min-max principle for the eigenvalues, printed pp. 104-105 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.1, multiplicity conventions and the eigenvalue list, printed p. 227 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice and Countable Choice. In the symmetric case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]] with $\Omega$ nonempty bounded open, let $\lambda_1\le\lambda_2\le\cdots$ be the eigenvalues of [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], repeated according to multiplicity. Then for every $k\ge1$,
$$\lambda_k=\min\Big\{\max_{u\in S\setminus\{0\}}\frac{a(u,u)}{\|u\|_{L^2}^2}:\ S\subseteq H^1_0(\Omega),\ \dim S=k\Big\}=\max\Big\{\inf_{u\in (H^1_0(\Omega)\cap T^{\perp_{L^2}})\setminus\{0\}}\frac{a(u,u)}{\|u\|_{L^2}^2}:\ T\subseteq H^1_0(\Omega),\ \dim T=k-1\Big\},$$
where $T^{\perp_{L^2}}$ is the orthogonal complement in $L^2(\Omega)$, and for $k=1$ the maximum is over $T=\{0\}$, so $H^1_0(\Omega)\cap T^{\perp_{L^2}}=H^1_0(\Omega)$. Both outer extrema are attained: the first at $S=\operatorname{span}\{e_1,\dots,e_k\}$, and the second at $T=\operatorname{span}\{e_1,\dots,e_{k-1}\}$, where the inner infimum is attained at $e_k$. No smoothness of $\partial\Omega$ is required.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a nonempty bounded open set $\Omega\subseteq\mathbb R^n$; the symmetric divergence-form case with form $a$; the orthonormal eigenbasis $\{e_j\}$ and nondecreasing eigenvalue list $\lambda_j\to+\infty$; and $k\ge1$.

[F1] Weighted average: for every $u\in H^1_0(\Omega)\setminus\{0\}$ with $c_j:=(u,e_j)_{L^2}$ one has $$a(u,u)=\sum_j\lambda_j|c_j|^2,\qquad \|u\|_{L^2}^2=\sum_j|c_j|^2,$$ both series converging; the expansion is unconditional over the Hilbert basis ([[lem-eigenbasis-expansion-in-the-form-norm]], [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], [[def-orthogonality-and-orthogonal-complement]]).

[F2] Finite-dimensional intersection: a linear map from a $k$-dimensional space into a $(k-1)$-dimensional space has nonzero kernel ([[thm-rank-nullity]], [[def-hilbert-space]]).

## Proof

**Proof technique:** direct.

1.1 For a finite-dimensional nonzero $S\subseteq H^1_0$, choose an $L^2$-orthonormal basis using [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]. In its real coordinates (real and imaginary coordinates when the field is complex), the $L^2$ unit sphere is a nonempty compact Euclidean sphere by [[thm-heine-borel-rn]], and $a(u,u)$ is a continuous quadratic polynomial there. It has a maximum by [[thm-extreme-value-metric]]. Homogeneity identifies that maximum with $\max_{S\setminus\{0\}}Q$, so every inner maximum in the statement exists. Weighted averages. For $u\ne0$ the quotient is the weighted average $Q(u):=a(u,u)/\|u\|_{L^2}^2=\sum_j\lambda_j|c_j|^2/\sum_j|c_j|^2$ with $\sum_j|c_j|^2>0$; if $u$ lies in the span of finitely many eigenvectors $e_{j_1},\dots,e_{j_m}$ then the quotient is the corresponding finite convex combination of the $\lambda_{j_i}$. [F1, given, algebra]

2.1 The min-max identity. Let $k\ge1$ and put $S_k:=\operatorname{span}\{e_1,\dots,e_k\}$, a $k$-dimensional subspace on which $Q(u)$ is a weighted average of $\lambda_1,\dots,\lambda_k$, hence at most $\lambda_k$, with value $\lambda_k$ at $u=e_k$; therefore the min over $k$-dimensional $S$ of $\max_{S\setminus\{0\}}Q$ is at most $\lambda_k$. Conversely, for any $k$-dimensional $S\subseteq H^1_0(\Omega)$ the $(k-1)$ linear functionals $u\mapsto(u,e_j)_{L^2}$, $j<k$, have a nonzero common zero $u\in S\setminus\{0\}$ by [F2]; then $c_j=0$ for $j<k$, so $Q(u)$ is a weighted average of $\lambda_k,\lambda_{k+1},\dots$ and is at least $\lambda_k$. Hence every $k$-dimensional $S$ contains a direction of quotient at least $\lambda_k$, so the minimum is exactly $\lambda_k$, attained at $S_k$; this proves the first displayed identity. [F1, F2, step 1.1, given, algebra]

2.2 The max-inf identity. Let $T_{k-1}:=\operatorname{span}\{e_1,\dots,e_{k-1}\}$ (the zero subspace for $k=1$); on $H^1_0(\Omega)\cap T_{k-1}^{\perp_{L^2}}$ the quotient is a weighted average of $\lambda_k,\lambda_{k+1},\dots$ by [F1], so its infimum equals $\lambda_k$, attained at $u=e_k$; hence the outer maximum is at least $\lambda_k$. Conversely, let $T$ be any $(k-1)$-dimensional subspace and choose a basis $t_1,\dots,t_{k-1}$ (the empty basis when $k=1$). The linear map $J:\operatorname{span}\{e_1,\dots,e_k\}\to\mathbb K^{k-1}$ given by $J(u)=((u,t_1)_{L^2},\dots,(u,t_{k-1})_{L^2})$ has a nonzero kernel by [F2], since its domain has dimension $k$ and its codomain has dimension $k-1$. A nonzero $u$ in that kernel lies in $H^1_0(\Omega)\cap T^{\perp_{L^2}}\cap\operatorname{span}\{e_1,\dots,e_k\}$; its quotient $Q(u)$ is a weighted average of $\lambda_1,\dots,\lambda_k$ and is therefore at most $\lambda_k$. Thus the infimum over $H^1_0(\Omega)\cap T^{\perp_{L^2}}$ is at most $\lambda_k$ for every $T$. Hence the outer maximum is exactly $\lambda_k$, attained at $T=T_{k-1}$. [F1, F2, step 1.1, given, algebra]

3.1 Attainment. The extreme subspaces $S_k$ and $T_{k-1}$ are explicit finite-dimensional spans of the eigenbasis, and the values $\lambda_k$ are attained at $e_k$; no smoothness of $\partial\Omega$ entered the argument, which uses only the eigenbasis expansion and linear algebra. [F1, step 2.1, step 2.2, given] ∎ 
