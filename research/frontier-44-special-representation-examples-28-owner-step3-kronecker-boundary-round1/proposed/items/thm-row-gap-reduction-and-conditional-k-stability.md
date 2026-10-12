---
id: thm-row-gap-reduction-and-conditional-k-stability
kind: theorem
title: Row-gap reduction and conditional k-stability of Kronecker coefficients
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-littlewood-richardson-tableau-and-coefficient,
       thm-littlewood-richardson-schur-product-expansion,
       def-kronecker-coefficient-and-internal-tensor-product,
       lem-kronecker-reduction-lemma,
       def-first-row-padding-of-a-partition,
       def-partition-young-diagram-and-conjugate-partition,
       cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
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

Fix $\lambda,\mu,\nu\vdash n$ and an integer $k\ge1$. Write $(t^k)$ for $k$ parts equal to $t$ and $(tk)$ for the one-part partition of size $tk$, and read missing parts as zero. Put $s:=n-\nu_1$, with $\nu_1=0$ if $n=0$.

**(i)** Suppose $\lambda_1\le\mu_1\le\nu_1$ and
$$\min\{\lambda_k,\mu_k\}\ge\max\{\lambda_{k+1},\mu_{k+1}\}+s.$$
Then for every integer $t\ge0$,
$$g(\lambda+(t^k),\mu+(t^k),\nu+(tk))=g(\lambda,\mu,\nu).$$
All shifted arguments are partitions of $n+tk$. For $k=1$, this is the first-row padding of the three tails to size $n+t$ ([[def-first-row-padding-of-a-partition]]).

**(ii)** For arbitrary $\lambda,\mu,\nu\vdash n$ and $k\ge1$, the sequence $G_k(t):=g(\lambda+(t^k),\mu+(t^k),\nu+(tk))$ is eventually constant. More precisely, it is constant for every integer $t\ge t_0$, where
$$t_0:=\max\{0,\ s+\max\{\lambda_{k+1},\mu_{k+1}\}-\min\{\lambda_k,\mu_k\}\}.$$
The proof of the row-gap identity does not require first-part ordering, so the threshold also covers $k=1$ when $\nu_1<\max\{\lambda_1,\mu_1\}$. No monotonicity is asserted.

## Facts & Assumptions

**Given:** The partitions, $k$ and $s$ in the Statement, the shifted partitions $\lambda_t:=\lambda+(t^k)$, $\mu_t:=\mu+(t^k)$ and $\nu_t:=\nu+(tk)$ of size $n_t:=n+tk$; a fixed common length bound $\ell\ge k$ for these partitions.

[F1] The Kronecker coefficient is the tensor-product multiplicity and is symmetric in its three arguments ([[def-kronecker-coefficient-and-internal-tensor-product]], [[cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric]]).

[F2] Steps 1.1 and 2.1 of [[lem-kronecker-reduction-lemma]] establish, for $0\le q\le s$ and $\eta\vdash q$, $K_n(q,\eta)=\sum_{\alpha\vdash n-q,\ \beta,\gamma\vdash q}c^\lambda_{\alpha\beta}c^\mu_{\alpha\gamma}g(\beta,\eta,\gamma)$, where $K_n(q,\eta):=[s_\mu](s_\lambda*(h_{n-q}s_\eta))$. They express $g(\lambda,\mu,\nu)$ as a finite signed combination of these coefficients whose weights depend only on the tail $(\nu_2,\ldots,\nu_\ell)$. Every nonzero term has $\alpha\subseteq\rho:=\lambda\cap\mu$, with $0\le\rho_i-\alpha_i\le q-g_0\le s$ and $g_0:=n-|\rho|$.

[F3] The coefficient $c^\lambda_{\alpha\beta}$ counts semistandard skew tableaux of shape $\lambda/\alpha$ and content $\beta$ with lattice reading word, and vanishes outside containment and size compatibility ([[def-littlewood-richardson-tableau-and-coefficient]], [[thm-littlewood-richardson-schur-product-expansion]]).

[F4] Intersection and union are rowwise minimum and maximum. Thus $\rho_t:=\lambda_t\cap\mu_t=\rho+(t^k)$, $\omega_t:=\lambda_t\cup\mu_t=\omega+(t^k)$ with $\omega:=\lambda\cup\mu$, and $n_t-|\rho_t|=g_0$ ([[def-partition-young-diagram-and-conjugate-partition]]).

## Proof

**Proof technique:** apply the small-skew coefficient identity to the single cut between rows $k$ and $k+1$.

1.1 Assume the row-gap inequality $\rho_k\ge\omega_{k+1}+s$; first-part ordering will not be used. The shifted parameter is $n_t-(\nu_1+tk)=s$, and the shifted tail is unchanged. Fix $q\le s$. The map $\alpha\mapsto\alpha_t:=\alpha+(t^k)$ is a bijection from partitions $\alpha\subseteq\rho$ of size $n-q$ to partitions $\theta\subseteq\rho_t$ of size $n_t-q$. In the forward direction the shift preserves the partition order. Conversely a partition $\theta$ in the second set has total deficit $|\rho_t|-|\theta|=q-g_0\le s$, so $\theta_k\ge\rho_k+t-s\ge\omega_{k+1}+t\ge\theta_{k+1}+t$. Consequently subtracting $t$ in its first $k$ rows produces a partition $\alpha\subseteq\rho$ of size $n-q$, with nonnegative $k$th part since $\theta_k-t\ge\omega_{k+1}\ge0$. All other boundary and row inequalities are preserved. If $q<g_0$, both sets are empty. [F2, F4, given, algebra]

2.1 Shift each cell in the first $k$ rows of $\lambda/\alpha$ horizontally by $t$, leaving lower rows fixed. The image is $\lambda_t/\alpha_t$. There are no shared skew columns across the cut in either shape: originally $\alpha_k\ge\rho_k-s\ge\omega_{k+1}\ge\lambda_{k+1}$, and after shifting $\alpha_{t,k}=\alpha_k+t\ge\lambda_{t,k+1}$. Partition inequalities give the same separation for all rows on either side. Within each side, every horizontal shift is the same, so shared columns and their strict inequalities are preserved. Row order, content and the right-to-left, top-to-bottom reading word are unchanged. This is a bijection of LR tableaux, so $c^\lambda_{\alpha\beta}=c^{\lambda_t}_{\alpha_t,\beta}$ for every $\beta\vdash q$, and the same proof gives $c^\mu_{\alpha\gamma}=c^{\mu_t}_{\alpha_t,\gamma}$ for every $\gamma\vdash q$. [F2, F3, F4, step 1.1, construct]

3.1 Use the bijection of step 1.1 and the LR equalities of step 2.1 in the finite coefficient sum [F2]. The small partitions $\beta,\gamma,\eta$ and their Kronecker coefficient are unchanged, so $K_n(q,\eta)=K_{n_t}(q,\eta)$ for every $q\le s$. The first-row expansions [F2] for $\nu$ and $\nu_t$ use the same cofactors because they have the same tail. Their signed sums are therefore equal, giving $g(\lambda_t,\mu_t,\nu_t)=g(\lambda,\mu,\nu)$ for every $t\ge0$. This proves part (i) and also proves that the equality holds under the row-gap inequality without the first-part ordering. [F2, step 1.1, step 2.1, algebra]

4.1 For an arbitrary triple, $\min\{\lambda_{t,k},\mu_{t,k}\}=\min\{\lambda_k,\mu_k\}+t$ and $\max\{\lambda_{t,k+1},\mu_{t,k+1}\}=\max\{\lambda_{k+1},\mu_{k+1}\}$. Thus the row-gap inequality with parameter $s$ holds at $t=t_0$ and for every larger $t$. Apply the ordering-free identity established in step 3.1 to the triple at $t_0$ with further shift $u\ge0$. It gives $G_k(t_0+u)=G_k(t_0)$ for every $u\ge0$, proving part (ii) with the stated threshold for all $k\ge1$. [F4, step 3.1, algebra] ∎

## Remarks

The proof uses the locally proved Littlewood–Richardson coefficient identity and Jacobi–Trudi expansion from [[lem-kronecker-reduction-lemma]]. Its corrected bounded-reduction map retains $2s$ gaps, so equality of compacted images is not assumed for the sharper $s$-gap theorem.

The row-gap condition cannot be omitted: [[cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability]] gives $\lambda=\mu=(2,2)$, $\nu=(3,1)$ and $k=1$, for which $G_1(0)=0$ but $G_1(t)=1$ for every $t\ge1$.
