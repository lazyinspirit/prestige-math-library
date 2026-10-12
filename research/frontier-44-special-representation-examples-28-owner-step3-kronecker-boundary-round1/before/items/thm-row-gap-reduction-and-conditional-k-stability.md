---
id: thm-row-gap-reduction-and-conditional-k-stability
kind: theorem
title: Row-gap reduction and conditional k-stability of Kronecker coefficients
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-kronecker-coefficient-and-internal-tensor-product,
       lem-kronecker-reduction-lemma,
       def-first-row-padding-of-a-partition,
       def-partition-young-diagram-and-conjugate-partition,
       cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Igor Pak and Greta Panova, Bounds on the Kronecker coefficients, arXiv:1406.2988v2 (2014)"
      url: "https://arxiv.org/pdf/1406.2988"
      locator: "\u00a74.1, printed pp. 7-8: Theorem 4.1 with condition (*), Corollary 4.2, and the proof of Theorem 1.1 on p. 8; \u00a72.3, printed p. 4, for the S_3 symmetry of g"
    - title: "Igor Pak and Greta Panova, On the complexity of computing Kronecker coefficients, arXiv:1404.0653v3 (2015)"
      url: "https://arxiv.org/pdf/1404.0653"
      locator: "\u00a78.9, printed pp. 17-18: Corollary 8.3 (the k = 1 case of row-gap reduction)"
---

## Statement

Fix $\lambda,\mu,\nu\vdash n$ and an integer $k\ge1$. Write $(t^k)$ for the
partition with $k$ parts equal to $t$ and $(tk)$ for the one-part partition of
size $tk$, and read every missing part of $\lambda,\mu,\nu$ as zero.

**(i)** Suppose $\lambda_1\le\mu_1\le\nu_1$, put $s:=n-\nu_1$, and suppose
$$\min\{\lambda_k,\mu_k\}\ge\max\{\lambda_{k+1},\mu_{k+1}\}+s .$$
Then for every $t\ge0$,
$g(\lambda+(t^k),\mu+(t^k),\nu+(tk))=g(\lambda,\mu,\nu)$. All three shifted
arguments are partitions of $n+tk$; for $k=1$ one has
$\nu+(t)=(\nu_2,\nu_3,\dots)$ padded to size $n+t$ in the notation of
[[def-first-row-padding-of-a-partition]].

**(ii)** For arbitrary $\lambda,\mu,\nu\vdash n$ and $k\ge1$ the sequence
$G_k(t):=g(\lambda+(t^k),\mu+(t^k),\nu+(tk))$, $t\ge0$, is eventually constant:
it is constant for all $t\ge t_0$ as soon as
$$\min\{\lambda_k,\mu_k\}+t\ge\max\{\lambda_{k+1},\mu_{k+1}\}+(n-\nu_1) \quad\text{and}\quad \lambda_1+t\le\mu_1+t\le\nu_1+tk$$
hold for $t=t_0$, where one may first exchange $\lambda$ and $\mu$ (this leaves
$G_k$ unchanged). No monotonicity of $G_k$ is asserted.

## Facts & Assumptions

**Given:** Partitions $\lambda,\mu,\nu\vdash n$, an integer $k\ge1$, and for each $t\ge0$ the shifted triple $\alpha_t:=\lambda+(t^k)$, $\beta_t:=\mu+(t^k)$, $\gamma_t:=\nu+(tk)$, all of size $n+tk$.

[F1] $g(\rho,\sigma,\tau)$ is the multiplicity of $S^\tau$ in $S^\rho\otimes_{\mathbb C}S^\sigma$, it is symmetric in its three arguments, and it is computed by the three-character inner product ([[def-kronecker-coefficient-and-internal-tensor-product]], [[cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric]]).

[F2] Reduction Lemma: for partitions of a common size with lengths at most a common bound $\ell$, with $s$ the size minus the largest part of the third argument: if $|\rho_i-\sigma_i|>s$ for some $i\le\ell$ then $g(\rho,\sigma,\tau)=0$; and if $|\rho_i-\sigma_i|\le s$ for all $i\le\ell$, then $g(\rho,\sigma,\tau)=g(\varphi(\rho),\varphi(\sigma),\varphi(\tau))$ for the reduction map $\varphi$ of [[lem-kronecker-reduction-lemma]], whose construction uses only $\rho\cap\sigma$, $\rho\cup\sigma$ and $s$ ([[lem-kronecker-reduction-lemma]]).

[F3] For the shifted triple, $\alpha_t\cap\beta_t=(\lambda\cap\mu)+(t^k)$ and $\alpha_t\cup\beta_t=(\lambda\cup\mu)+(t^k)$ componentwise, and $\alpha_{t,i}-\beta_{t,i}=\lambda_i-\mu_i$ for every row $i$ ([[def-partition-young-diagram-and-conjugate-partition]]).



## Proof

**Proof technique:** direct.

1.1 Fix a common row bound $\ell\ge k$, $\ell(\lambda),\ell(\mu),\ell(\nu)$ and all their shifted lengths. For the original triple put $s:=n-\nu_1$; for the shifted triple $\alpha_t,\beta_t,\gamma_t$ the same parameter is $(n+tk)-\gamma_{t,1}=(n+tk)-(\nu_1+tk)=s$. By [F3] one has $|\alpha_{t,i}-\beta_{t,i}|=|\lambda_i-\mu_i|$ for every $i\le\ell$, so the original triple and every shifted triple fall in the same case of [F2]. If $|\lambda_i-\mu_i|>s$ for some $i$, then both coefficients $g(\lambda,\mu,\nu)$ and $g(\alpha_t,\beta_t,\gamma_t)$ vanish by [F2], and the claimed identity holds for every $t\ge0$. [F2, F3, algebra]

1.2 Assume now $|\lambda_i-\mu_i|\le s$ for all $i\le\ell$, so both triples are in the reduction case of [F2]. Let $\omega=\lambda\cup\mu$, $\rho=\lambda\cap\mu$ and let $I=\{i\le\ell:\rho_i\ge\omega_{i+1}+s\}\cup\{\ell+1\}$ be the block index set of the reduction map for the original triple; the hypothesis of part (i) says $\rho_k\ge\omega_{k+1}+s$, so $k\in I$ (here $k\le\ell$, since $k\le\ell$ by the choice of $\ell$). [F2, F3, given]

2.1 The shifted triple has intersection $\alpha_t\cap\beta_t=\rho+(t^k)$ and union $\omega+(t^k)$ by [F3], so its index set is $I_t=\{i:\rho_i+t\ge\omega_{i+1}+t+s\ (i\le k)\}\cup\{i:\rho_i\ge\omega_{i+1}+s\ (k<i\le\ell)\}\cup\{\ell+1\}$, which equals $I$: the condition at $i\le k$ is unchanged by adding $t$ to both sides, and rows $i>k$ have the same data as before; in particular $k\in I_t$. Hence the two reduction maps use the same index set, the same $i_j$ and the same $\operatorname{ind}_I(i_j)$; the shifts differ only because $\rho$ is replaced by $\rho+(t^k)$. [F2, F3, step 1.2, algebra]

3.1 Since $k\in I$ and $i_j=\min\{i\in I: i\ge j\}$, one has $i_j\le k$ for all $j\le k$, while $i_j>k$ for $j>k$; hence in the shifted triple $\rho'_{i_j}=\rho_{i_j}+t$ and $\alpha_{t,j}=\lambda_j+t$ for $j\le k$, and $\rho'_{i_j}=\rho_{i_j}$, $\alpha_{t,j}=\lambda_j$ for $j>k$. Therefore $\varphi_{\text{shifted}}(\alpha_t)_j=\alpha_{t,j}-\rho'_{i_j}+s(\ell-i_j+\operatorname{ind}_I(i_j))$ equals $\lambda_j-\rho_{i_j}+s(\ell-i_j+\operatorname{ind}_I(i_j))=\varphi_{\text{original}}(\lambda)_j$ for every $j$, and likewise $\varphi_{\text{shifted}}(\beta_t)=\varphi_{\text{original}}(\mu)$. [step 2.1, algebra]

4.1 The third arguments satisfy $\gamma_{t,j}=\nu_j$ for $j\ge2$ and $\gamma_{t,1}=\nu_1+tk$, and both triples have the same parameter $s$, so $\varphi(\gamma_t)=(r_t-s,\nu_2,\nu_3,\dots)$ and $\varphi(\nu)=(r-s,\nu_2,\nu_3,\dots)$ where $r_t=|\varphi_{\text{shifted}}(\alpha_t)|$ and $r=|\varphi_{\text{original}}(\lambda)|$; by step 3.1 these images are equal, so $r_t=r$ and $\varphi(\gamma_t)=\varphi(\nu)$. [step 1.1, 3.1, algebra]

5.1 Applying [F2] to both triples and using steps 3.1 and 4.1 gives $g(\alpha_t,\beta_t,\gamma_t)=g(\varphi_{\text{shifted}}(\alpha_t),\varphi_{\text{shifted}}(\beta_t),\varphi_{\text{shifted}}(\gamma_t))=g(\varphi_{\text{original}}(\lambda),\varphi_{\text{original}}(\mu),\varphi_{\text{original}}(\nu))=g(\lambda,\mu,\nu)$ for every $t\ge0$. This proves part (i). [F2, step 3.1, step 4.1] ∎

**Part (ii).** Exchange $\lambda$ and $\mu$ if necessary; by [F1] this does not change $g$ in any of the triples, so $G_k$ is unchanged. Let $t_0$ satisfy $\lambda_1+t_0\le\mu_1+t_0\le\nu_1+t_0k$ and $\min\{\lambda_k,\mu_k\}+t_0\ge\max\{\lambda_{k+1},\mu_{k+1}\}+(n-\nu_1)$; such $t_0$ exists because the second condition is a lower bound on $t$ and the first fails only if $\mu_1>\nu_1+tk$, which for $k\ge2$ is again a lower bound and for $k=1$ holds for all $t\ge\mu_1-\nu_1$. Fix $t\ge t_0$ and put $\alpha:=\lambda+(t^k)$, $\beta:=\mu+(t^k)$, $\gamma:=\nu+(tk)$. Then $\alpha_1\le\beta_1\le\gamma_1$, the parameter of the triple $(\alpha,\beta,\gamma)$ is $(n+tk)-\gamma_1=n-\nu_1$, and $\min\{\alpha_k,\beta_k\}=\min\{\lambda_k,\mu_k\}+t\ge\max\{\lambda_{k+1},\mu_{k+1}\}+(n-\nu_1)=\max\{\alpha_{k+1},\beta_{k+1}\}+(n-\nu_1)$. So part (i), applied to the triple $(\alpha,\beta,\gamma)$ with shift $u\ge0$, gives $G_k(t+u)=g(\alpha+(u^k),\beta+(u^k),\gamma+(uk))=g(\alpha,\beta,\gamma)=G_k(t)$ for every $u\ge0$. Hence $G_k$ is constant on $\{t:t\ge t_0\}$, that is, eventually constant. No monotonicity is used or claimed. [F1, part (i), algebra] ∎

## Remarks

- The proof is a direct application of the Reduction Lemma [[lem-kronecker-reduction-lemma]]: the two triples differ only in the first $k$ rows and the lemma's index set is stable under the shift. The item inherits the open obligation recorded there (the boundary separation in the lemma's part (ii)), since it uses no property of the reduction map beyond the conclusion of the lemma.

- The estimate is sharp in the sense that the hypothesis on rows $k$ and $k+1$ cannot be dropped: [[cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability]] exhibits $\lambda=\mu=(2,2)$, $\nu=(3,1)$, $k=1$ with the separation condition failing at $t=0$ and $g=0$, while the padded coefficients are $1$ from $t=1$ on.
