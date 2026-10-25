---
id: lem-vertex-operator-series-for-padded-schur-functions
kind: lemma
title: "Vertex-operator generating series for the padded Schur functions"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-lambda-ring-specializations-and-the-sigma-series,
       lem-schur-specialization-coproduct-and-plethysm-identities,
       lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities,
       def-power-sum-and-complete-homogeneous-symmetric-polynomials,
       def-first-row-padding-of-a-partition,
       def-first-row-padding-completion-and-the-stabilization-operator,
       thm-jacobi-trudi-and-dual-jacobi-trudi-identities,
       thm-skew-jacobi-trudi-and-tableau-expansion,
       def-skew-schur-function-by-hall-adjointness,
       thm-littlewood-richardson-schur-product-expansion,
       def-littlewood-richardson-tableau-and-coefficient,
       cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients,
       thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions,
       cor-power-sums-are-orthogonal-for-the-hall-inner-product,
       thm-schur-functions-form-an-orthonormal-integral-basis,
       def-hall-inner-product-on-symmetric-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Amarpreeet Rattan and Mercedes Rosas, On the growth of the Kronecker coefficients, arXiv:1607.02887v1 (2016); section 2.4, identity (6), p. 7 (the vertex operator series), and section 2.3 p. 6 (lambda-ring specializations)"
      url: "https://arxiv.org/pdf/1607.02887"
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Section 1 p. 3, equation (1) (Jacobi-Trudi completion) and Lemma 2.1, identity (9), pp. 7-8 (Littlewood's vertex-operator identity)"
      url: "https://arxiv.org/pdf/0907.4652"
---

## Statement

Let $\alpha$ be a partition and $t$ a formal variable. With the Jacobi-Trudi
convention of [[def-first-row-padding-completion-and-the-stabilization-operator]]
for the integer sequences $\alpha[n]=(n-|\alpha|,\alpha_1,\alpha_2,\dots)$, one
has an identity of formal Laurent series with coefficients in the symmetric
function ring
([[def-lambda-ring-specializations-and-the-sigma-series]]):
$$\sum_{n\in\mathbb Z}s_{\alpha[n]}[X]\,t^n=\sigma[tX]\cdot s_\alpha[tX-1] =t^{|\alpha|}\cdot\sigma[tX]\cdot s_\alpha[X-t^{-1}],$$
where $s_\alpha[tX-1]$ is evaluated through $p_k\mapsto t^kp_k[X]-1$ and
$s_\alpha[X-t^{-1}]$ through $p_k\mapsto p_k[X]-t^{-k}$. Equivalently,
$$\sum_{n\in\mathbb Z}s_{\alpha[n]}[X]\,t^n =\sigma[tX]\sum_{\mu:\ \alpha/\mu\ \text{a vertical strip}} (-1)^{|\alpha|-|\mu|}t^{|\mu|}s_\mu[X].$$

## Facts & Assumptions

**Given:** A partition $\alpha$ of length $k$; formal variables $X$ and $t$; a partition $\nu\vdash m$.

[F1] $p_k[-1]=-1$, $p_k[tX-1]=t^kp_k[X]-1$, $p_k[X-t^{-1}]=p_k[X]-t^{-k}$, and $h_n[tX]=t^nh_n[X]$ by homogeneity of $h_n$ in the power sums ([[def-lambda-ring-specializations-and-the-sigma-series]], [[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F2] $\sigma[tX]=\sum_nt^nh_n[X]$ and the Cauchy identity $\sigma[XY]=\sum_\lambda s_\lambda[X]s_\lambda[Y]$ hold for all specializations ([[lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities]]).

[F3] $s_\alpha[A+B]=\sum_{\mu,\nu}c^\alpha_{\mu\nu}s_\mu[A]s_\nu[B]$ and $s_\alpha[AB]=\sum_{\mu,\nu}g^\alpha_{\mu\nu}s_\mu[A]s_\nu[B]$ for all specializations; in particular the coproduct applies to $A=tX$, $B=-1$ ([[lem-schur-specialization-coproduct-and-plethysm-identities]]).

[F4] $c^\lambda_{\mu\nu}=\langle s_\lambda,s_\mu s_\nu\rangle_H$ and $c^\lambda_{\mu\nu}=c^\lambda_{\nu\mu}$: the first by the LR product expansion and Schur orthonormality, the second because $s_\mu s_\nu=s_\nu s_\mu$ ([[thm-littlewood-richardson-schur-product-expansion]], [[thm-schur-functions-form-an-orthonormal-integral-basis]]); and $s_{\lambda/\mu}=\sum_\nu c^\lambda_{\mu\nu}s_\nu$ ([[def-skew-schur-function-by-hall-adjointness]]).

[F5] Jacobi–Trudi: for every partition $\lambda$ and every $r\ge\ell(\lambda)$, $s_\lambda=\det(h_{\lambda_i-i+j})_{1\le i,j\le r}$ with $h_0=1$, $h_q=0$ for $q<0$; and for $\mu\subseteq\lambda$, $s_{\lambda/\mu}=\det(h_{\lambda_i-\mu_j-i+j})$, with $s_{\lambda/\mu}=0$ if $\mu\not\subseteq\lambda$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]], [[thm-skew-jacobi-trudi-and-tableau-expansion]]).

[F7] A Littlewood–Richardson tableau of shape $\alpha/\mu$ and content $\nu$ is a semistandard skew tableau whose reading word (rows right to left, top to bottom) satisfies the lattice condition: in every prefix and for every $j$, the number of $j$'s is at least the number of $(j+1)$'s; $c^\alpha_{\mu\nu}$ counts them ([[def-littlewood-richardson-tableau-and-coefficient]]).

[F8] $\alpha[n]=(n-|\alpha|,\alpha_1,\alpha_2,\dots)$ is a partition of $n$ exactly when $n\ge|\alpha|+\alpha_1$, and $s_{\alpha[n]}$ is the Jacobi–Trudi determinant of the integer sequence $\alpha[n]$, equal to $0$ for $n<0$ ([[def-first-row-padding-of-a-partition]], [[def-first-row-padding-completion-and-the-stabilization-operator]]).

## Proof

**Proof technique:** direct.

1.1 *Negative one-letter evaluation.* By [F2], $\sigma[-t]=1-t$, so homogeneity gives $h_0[-1]=1$, $h_1[-1]=-1$ and $h_j[-1]=0$ for $j\ge2$. If $\nu_1\ge2$, every entry in the first row of its Jacobi–Trudi determinant [F5] has index at least two, so $s_\nu[-1]=0$. If $\nu=(1^m)$, the matrix is lower triangular with diagonal $h_1[-1]=-1$, hence $s_\nu[-1]=(-1)^m$. The empty determinant gives $s_\varnothing[-1]=1$. Thus $s_\nu[-1]=(-1)^m\delta_{\nu,(1^m)}$. [F2, F5]

1.2 *Consequences for skew functions.* For all partitions $\lambda,\mu,\nu$ one has $c^\lambda_{\mu\nu}=c^\lambda_{\nu\mu}$ by [F4], so the skew expansion [F4] gives $s_{\alpha/(1^i)}=\sum_\mu c^\alpha_{(1^i),\mu}s_\mu=\sum_\mu c^\alpha_{\mu,(1^i)}s_\mu$ for every $i\ge0$, where $(1^0)=\varnothing$ and $s_{\alpha/\varnothing}=s_\alpha$. [F4]

2.1 *Coproduct at $tX-1$.* Apply [F3] with $A=tX$, $B=-1$, and expand over $\nu$ using step 1.1: $s_\alpha[tX-1]=\sum_{\mu,\nu}c^\alpha_{\mu\nu}s_\mu[tX]s_\nu[-1]=\sum_{i\ge0}(-1)^i\bigl(\sum_\mu c^\alpha_{\mu,(1^i)}s_\mu[tX]\bigr)=\sum_{i=0}^{k}(-1)^is_{\alpha/(1^i)}[tX]$ by step 1.2, using that $s_{\alpha/(1^i)}=0$ for $i>\ell(\alpha)$ and $s_\nu[-1]=0$ for $\nu$ not a column. Since $s_{\alpha/(1^i)}$ is homogeneous of degree $|\alpha|-i$ and $p_j[tX]=t^jp_j[X]$, homogeneity in the power sums gives $s_{\alpha/(1^i)}[tX]=t^{|\alpha|-i}s_{\alpha/(1^i)}[X]$, so $s_\alpha[tX-1]=\sum_{i=0}^k(-1)^it^{|\alpha|-i}s_{\alpha/(1^i)}[X]$. [F1, F3, step 1.1, step 1.2]

3.1 *Coefficient of $t^n$ and the Jacobi–Trudi expansion.* By [F2], $\sigma[tX]=\sum_mt^mh_m[X]$, so the coefficient of $t^n$ in $\sigma[tX]s_\alpha[tX-1]$ is $\sum_{i=0}^{k}(-1)^ih_{n-|\alpha|+i}[X]\,s_{\alpha/(1^i)}[X]$, where $h_q=0$ for $q<0$ by [F5]. Expand the Jacobi–Trudi determinant $s_{\alpha[n]}=\det(h_{\alpha[n]_r-r+j})_{1\le r,j\le k+1}$ of [F8] and [F5] along its first row: the entry in column $j=t+1$ is $h_{\alpha[n]_1-1+t+1}=h_{n-|\alpha|+t}$, its cofactor sign is $(-1)^{1+(t+1)}=(-1)^t$, and deleting row $1$ and column $t+1$ leaves the matrix with entries $h_{\alpha_r-r+c}$ over column offsets $c\in\{0,1,\dots,k\}\setminus\{t\}$, which is exactly the skew Jacobi–Trudi determinant $\det(h_{\alpha_r-1_{j\le t}-r+j})=s_{\alpha/(1^t)}$ of [F5], the first $t$ columns being shifted by one. Hence $s_{\alpha[n]}[X]=\sum_{t=0}^{k}(-1)^th_{n-|\alpha|+t}[X]s_{\alpha/(1^t)}[X]$ for every $n\in\mathbb Z$, which is the coefficient of $t^n$ computed above; for $n<0$ all indices $n-|\alpha|+t$ are negative, both sides vanish, and for $t>\ell(\alpha)$ the skew functions vanish. [F2, F5, F8, step 2.1]

4.1 *Vertical strips and the second form.* By the definition of the Littlewood–Richardson coefficients [F7], $c^\alpha_{\mu,(1^i)}$ counts semistandard skew tableaux of shape $\alpha/\mu$ with content $(1^i)$ whose reading word is lattice. A word using each of $1,\dots,i$ exactly once is lattice if and only if it is the increasing word $1,2,\dots,i$: the lattice condition at the position of the letter $j+1$ forces $j$ to occur earlier, for every $j<i$. Hence such a tableau exists precisely when each row of $\alpha/\mu$ has at most one box (a vertical strip), the filling being then forced row by row top to bottom, with the empty skew shape giving the case $i=0$; so $s_{\alpha/(1^i)}=\sum_{\mu:\ \alpha/\mu\ \text{vertical strip,}\ |\alpha|-|\mu|=i}s_\mu$. Substituting into step 2.1 and collecting by $|\mu|=|\alpha|-i$ gives $s_\alpha[tX-1]=\sum_{\mu:\ \alpha/\mu\ \text{vertical strip}}(-1)^{|\alpha|-|\mu|}t^{|\mu|}s_\mu[X]$, which combined with [F2] and step 3.1 is the second displayed formula. [F2, F7, step 1.2, step 2.1, step 3.1]

5.1 *Second evaluation of the shift.* By [F1], $p_j[tX-1]=t^jp_j[X]-1=t^j(p_j[X]-t^{-j})=p_j[t(X-t^{-1})]$, so $s_\alpha[tX-1]=s_\alpha[t(X-t^{-1})]=t^{|\alpha|}s_\alpha[X-t^{-1}]$ by homogeneity; this gives the middle equality of the first display. All coefficient sums are finite in each degree: for fixed $n$ only $t=0,1,\dots,k$ contribute, with $h_{n-|\alpha|+t}=0$ whenever $n-|\alpha|+t<0$, and each $s_{\alpha/(1^t)}$ is a finite $\mathbb Z$-combination of Schur functions. No convergence of a scalar series is asserted, no value $\sigma[1]$ is evaluated, and no choice principle is used. [F1, F5, step 2.1, step 3.1] ∎
