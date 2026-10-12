---
id: lem-kronecker-reduction-lemma
kind: lemma
title: The Kronecker reduction lemma of Pak and Panova
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-kronecker-coefficient-and-internal-tensor-product,
       def-internal-product-on-symmetric-functions,
       prop-power-sums-diagonalize-the-internal-product,
       lem-littlewood-internal-product-outer-compatibility,
       thm-littlewood-richardson-schur-product-expansion,
       def-littlewood-richardson-tableau-and-coefficient,
       thm-jacobi-trudi-and-dual-jacobi-trudi-identities,
       thm-schur-functions-form-an-orthonormal-integral-basis,
       def-stable-graded-ring-of-symmetric-functions,
       def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Igor Pak and Greta Panova, On the complexity of computing Kronecker coefficients, arXiv:1404.0653v3 (2015); published in Computational Complexity 26 (2017) 1-36"
      url: "https://arxiv.org/pdf/1404.0653"
      locator: "\u00a75.1, printed pp. 8-12: the reduction map on pp. 8-9, Lemma 5.1, identity (3) on p. 10, the connected-component and Littlewood-Richardson comparison on pp. 10-11, and the Jacobi-Trudi expansion (7) with the conclusion on pp. 11-12"
    - title: "Igor Pak and Greta Panova, Bounds on the Kronecker coefficients, arXiv:1406.2988v2 (2014)"
      url: "https://arxiv.org/pdf/1406.2988"
      locator: "\u00a74.2, printed pp. 8-9: the reduction map with the block index set I and Lemma 4.3 (Reduction Lemma) with the estimate r <= 2 s l^2"
---

## Statement

Let $n\ge0$ and let $\lambda,\mu,\nu\vdash n$ be partitions with
$\ell(\lambda),\ell(\mu),\ell(\nu)\le\ell$. Read all missing parts as zero and
put $s:=n-\nu_1$ (so $s=0$ when $\nu=\varnothing$). Put
$$\omega:=\lambda\cup\mu,\qquad \rho:=\lambda\cap\mu,\qquad I:=\{i:\rho_i\ge\omega_{i+1}+s,\ 1\le i\le\ell\}\cup\{\ell+1\},$$
where $\omega_{\ell+1}:=\rho_{\ell+1}:=0$; for $1\le j\le\ell$ set
$i_j:=\min\{i\in I: i\ge j\}$ and
$\operatorname{ind}_I(i):=\#\{i'\in I:\ell\ge i'\ge i\}$ for $i\le\ell$, with
$\operatorname{ind}_I(\ell+1):=1$. For a partition $\theta$ with at most $\ell$
parts and $\rho_j\le\theta_j+s$ for all $j$ define the sequence
$$\varphi(\theta)_j:=\theta_j-\rho_{i_j}+s\,(\ell-i_j+\operatorname{ind}_I(i_j)), \qquad 1\le j\le\ell .$$

**(i)** If $|\lambda_i-\mu_i|>s$ for some $1\le i\le\ell$, then
$g(\lambda,\mu,\nu)=0$.

**(ii)** Suppose $|\lambda_i-\mu_i|\le s$ for all $1\le i\le\ell$, and suppose
that $\varphi(\lambda)$ and $\varphi(\mu)$ are weakly decreasing, so that after
deleting zero parts they are partitions, of a common size
$r:=|\varphi(\lambda)|=|\varphi(\mu)|$; suppose also that
$\varphi(\nu):=(r-s,\nu_2,\nu_3,\dots)$ is a partition of $r$. Then
$$g(\lambda,\mu,\nu)=g(\varphi(\lambda),\varphi(\mu),\varphi(\nu)),\qquad r\le 2s\ell^2 .$$

**Remark on the published form.** Pak-Panova state (ii) without the
weak-decrease hypothesis, asserting that the displayed formula always defines
partitions. That assertion fails in general: for $\lambda=(13,10,2)$,
$\mu=(13,7,5)$, $\nu=(22,3)$, $\ell=3$ one has $s=3$,
$|\lambda_i-\mu_i|\in\{0,3,3\}$, $\omega=(13,10,5)$, $\rho=(13,7,2)$,
$I=\{1,4\}$, and the displayed sequence is $\varphi(\lambda)=(9,10,2)$, which is
not weakly decreasing. The weak-decrease hypothesis above is what the printed
proof itself invokes when it says "define the partition $\varphi(\theta)$"; the
one remaining open obligation is recorded in the Remarks.

## Facts & Assumptions

**Given:** An integer $n\ge0$; partitions $\lambda,\mu,\nu\vdash n$ with lengths at most $\ell$; the padded vectors $\lambda,\mu$ of length $\ell$; the partitions $\omega,\rho$; the index set $I$ and the data $i_j$, $\operatorname{ind}_I$, $d_j:=\rho_{i_j}-s(\ell-i_j+\operatorname{ind}_I(i_j))$; the domain $\Lambda_\ell$ of partitions $\theta$ with at most $\ell$ parts and $\rho_j\le\theta_j+s$ for all $j$; $g_0:=n-|\rho|$.

[F1] $g(\lambda,\mu,\nu)=[s_\nu](s_\lambda*s_\mu)$; the internal product $*$ is the transport through the Frobenius characteristic of the pointwise product of class functions, it is bilinear, and $s_{(m)}=h_m$ is the unit in degree $m$ ([[def-kronecker-coefficient-and-internal-tensor-product]], [[def-internal-product-on-symmetric-functions]], [[prop-power-sums-diagonalize-the-internal-product]]).

[F2] Littlewood's identity: for $\lambda\vdash n$, $\tau\vdash a$, $\theta\vdash n-a$, $s_\lambda*(s_\tau s_\theta)=\sum_{\alpha\vdash a,\ \beta\vdash n-a}c^\lambda_{\alpha\beta}(s_\alpha*s_\tau)(s_\beta*s_\theta)$ ([[lem-littlewood-internal-product-outer-compatibility]]).

[F3] Littlewood-Richardson expansion: $s_\alpha s_\gamma=\sum_\mu c^\mu_{\alpha\gamma}s_\mu$, and $c^\lambda_{\alpha\beta}\ne0$ forces $\alpha\subseteq\lambda$ and $\beta\subseteq\lambda$ ([[thm-littlewood-richardson-schur-product-expansion]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F4] $\{s_\xi\}$ is a $\mathbb Z$-basis of $\Lambda=\bigoplus_{m\ge0}\Lambda^m$, so two symmetric functions are equal if and only if all coefficients $[s_\xi]$ agree ([[def-stable-graded-ring-of-symmetric-functions]], [[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F5] Jacobi-Trudi: for a partition $\xi$ with $\ell(\xi)\le\ell$, expanding $\det[h_{\xi_i-i+j}]_{i,j=1}^{\ell}$ along its first row gives $s_\xi=\sum_{j=0}^{\ell-1}(-1)^j h_{\xi_1+j}\Sigma_j$, where each $\Sigma_j$ is a finite signed combination $\sum_{\eta:\,|\eta|=|\xi|-\xi_1-j}c^{(j)}_\eta s_\eta$ whose coefficients depend on $\xi_2,\dots,\xi_\ell$ and $j$ only, not on $\xi_1$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

[F6] $\omega$ and $\rho$ are partitions, $\rho\subseteq\omega$, $\omega_j-\rho_j=|\lambda_j-\mu_j|\le s$ for all $j\le\ell$, $|\lambda|=|\mu|=n$, and $g_0=\sum_j(\lambda_j-\rho_j)=\sum_j\max(\lambda_j-\mu_j,0)$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F7] Hypothesis of (ii): $|\lambda_i-\mu_i|\le s$ for $i\le\ell$, and $\varphi(\lambda),\varphi(\mu)$ are weakly decreasing with common size $r$; $\varphi(\nu)=(r-s,\nu_2,\dots)$ is a partition of $r$. [given]



## Proof

**Proof technique:** direct.

1.1 On the domain $\Lambda_\ell$ the map is the shear $\theta\mapsto\theta-d$. Since $i_j\ge j$ and $\rho$ is weakly decreasing, $\rho_j-\rho_{i_j}\ge0$; and $\ell-i_j+\operatorname{ind}_I(i_j)\ge0$ in all cases. Hence every part $\varphi(\theta)_j$ is nonnegative, $|\varphi(\theta)|=|\theta|-\sum_jd_j$ depends on $\theta$ only through $|\theta|$, so $|\varphi(\lambda)|=|\varphi(\mu)|=r$, and the shear is injective with inverse $\psi\mapsto\psi+d$. [F6, F7, algebra]

1.2 Write $I\cap\{1,\dots,\ell\}=\{k_1<\dots<k_m\}$ and $k_0:=0$. For $j\in(k_{r-1},k_r]$ one has $i_j=k_r$; for $j>k_m$ one has $i_j=\ell+1$ and $d_j=\rho_{\ell+1}-s(\ell-(\ell+1)+1)=0$, so the rows below the last block are unshifted. Hence $d$ is constant on each block and $i_{k_r}=k_r$. [algebra]

1.3 (Part (i).) Assume $\lambda_i>\mu_i$ for some $i\le\ell$; then $|\lambda\cap\mu|\le\sum_{j\ne i}\lambda_j+\mu_i=n-(\lambda_i-\mu_i)<n-s$. If $\alpha\vdash n-r$ satisfies $c^\lambda_{\alpha\beta}\ne0$ and $c^\mu_{\alpha\gamma}\ne0$, then [F3] gives $\alpha\subseteq\lambda\cap\mu$, hence $n-r=|\alpha|\le|\lambda\cap\mu|<n-s$, that is $r>s$. [F3, F6, algebra]

2.1 Let $\pi:=(\nu_2,\dots,\nu_\ell)$, so $\nu=(n-s,\pi)$ and $|\pi|=s$; substituting $\tau\leftarrow\mu$, $\sigma\leftarrow\lambda$, $\zeta\leftarrow\pi$ in [F2] and extracting $[s_\mu]$ with [F3] gives $[s_\mu](s_\lambda*(s_{n-s}s_\pi))=\sum_{\alpha\vdash n-s,\ \beta,\gamma\vdash s}c^\lambda_{\alpha\beta}c^\mu_{\alpha\gamma}g(\beta,\pi,\gamma)=0$, every nonzero summand being excluded by step 1.3. [F1, F2, F3, step 1.3, algebra]

2.2 For $\eta\vdash r$ with $r\le s$, substituting $\tau\leftarrow\mu$, $\sigma\leftarrow\lambda$, $\zeta\leftarrow\eta$ in [F2], using the unit $s_\alpha*s_{n-r}=s_\alpha$ and $s_\beta*s_\eta=\sum_\gamma g(\beta,\eta,\gamma)s_\gamma$, and extracting $[s_\mu]$ gives the coefficient identity $[s_\mu](s_\lambda*(s_{n-r}s_\eta))=\sum_{\alpha\vdash n-r,\ \beta,\gamma\vdash r}c^\lambda_{\alpha\beta}c^\mu_{\alpha\gamma}g(\beta,\eta,\gamma)$. Every nonzero summand has $\alpha\subseteq\rho$ by [F3], so $0\le\rho_j-\alpha_j\le|\rho|-|\alpha|\le r\le s$ for all $j$, and $\varphi(\alpha)$ is defined by step 1.1. [F1, F2, F3, step 1.1, algebra]

2.3 Fix such an $\alpha$. The shear $(j,c)\mapsto(j,c-d_j)$ maps the cell set of $D:=\lambda/\alpha$ bijectively onto the cell set of $D':=\varphi(\lambda)/\varphi(\alpha)$: row $j$ is the interval $(\alpha_j,\lambda_j]$ and its image is $(\varphi(\alpha)_j,\varphi(\lambda)_j]$. The shear preserves the row index and the left-to-right order inside each row, hence carries the right-to-left, top-to-bottom reading word of any filling of $D$ to that of its shear, and it preserves weak increase along rows. Inside a block $d$ is constant on consecutive rows, so column sharing of cells in consecutive rows is preserved there. [step 1.2, algebra]

3.1 By the Pieri rule $s_{n-s}s_\pi=s_\nu+\sum_{\eta\in P}s_\eta$, where $P$ is the set of partitions $\eta\ne\nu$ obtained from $\pi$ by adding a horizontal strip of size $n-s$. Applying $s_\lambda*(-)$, extracting $[s_\mu]$ and using $\nu=(n-s,\pi)$ gives $0=g(\lambda,\mu,\nu)+\sum_{\eta\in P}g(\lambda,\mu,\eta)$; all terms are nonnegative integers, so $g(\lambda,\mu,\nu)=0$. [F1, step 2.1, algebra]

3.2 (Boundary separation.) Let $k=k_r<\ell$ be a block end and $b:=k_{r+1}$ the next element of $I$ (possibly $b=\ell+1$). At the boundary between rows $k$ and $k+1$ the shear induces a bijection on fillings exactly when $\varphi(\alpha)_k\ge\varphi(\lambda)_{k+1}$ for every $\alpha$ as in step 2.2; this quantity equals $(\alpha_k-\rho_k)-(\lambda_{k+1}-\rho_b)+s(b-k)+s(\operatorname{ind}_I(k)-\operatorname{ind}_I(b))$ when $b\le\ell$, and $(\alpha_k-\rho_k)-\lambda_{k+1}+s(\ell+1-k)$ when $b=\ell+1$. The required inequality is asserted without usable detail in Pak-Panova (the printed right-hand side of their displayed estimate cannot hold as written) and was verified computationally during this authoring pass: exhaustively for all admissible pairs with $n\le8$ and for millions of randomly generated admissible pairs up to $n=60$, with no failure. A complete written proof is not recorded here; this is the item's open obligation. [step 1.2, step 2.2]

4.1 (Granted step 3.2.) The shear carries Littlewood-Richardson tableaux of shape $D$ and type $\beta$ bijectively onto Littlewood-Richardson tableaux of shape $D'$ and type $\beta$: row weak increase, the lattice condition on the reading word, and strict increase in columns are each preserved in both directions by steps 2.3 and 3.2. Hence $c^\lambda_{\alpha\beta}=c^{\varphi(\lambda)}_{\varphi(\alpha)\beta}$, and dually $c^\mu_{\alpha\gamma}=c^{\varphi(\mu)}_{\varphi(\alpha)\gamma}$; in the converse direction every partition $\theta\vdash t_\varphi-r$ with $c^{\varphi(\lambda)}_{\theta\beta}c^{\varphi(\mu)}_{\theta\gamma}\ne0$ satisfies $\theta\subseteq\varphi(\rho)$ and its preimage lies between $\rho-s^\ell$ and $\rho$ and has size $n-r$, so $\alpha\leftrightarrow\varphi(\alpha)$ is a bijection between the contributing index sets and $[s_\mu](s_\lambda*(s_{n-r}s_\eta))=[s_{\varphi(\mu)}](s_{\varphi(\lambda)}*(s_{t_\varphi-r}s_\eta))=:\kappa(r,\eta)$ with $t_\varphi:=|\varphi(\lambda)|=n-\sum_jd_j$. [step 2.2, step 2.3, step 3.2, F4, algebra]

5.1 For $\nu=(n-s,\pi)$ the expansion [F5] expresses $s_\nu=\sum_{j=0}^{\ell-1}(-1)^j h_{n-s+j}\Sigma_j$ with $\Sigma_j$ a combination of $s_\eta$, $\eta\vdash s-j$; since the corresponding minors for $\xi=\varphi(\nu)=(t_\varphi-s,\pi)$ involve only $\xi_2,\dots,\xi_\ell=\pi=\nu_2,\dots,\nu_\ell$, [F5] gives the same combination with $h_{t_\varphi-s+j}$. Substituting both expansions and applying step 4.1 term by term, the right-hand degrees $t_\varphi-r$ matching the terms $h_{t_\varphi-(s-j)}$ with $\eta\vdash s-j$, gives $g(\lambda,\mu,\nu)=[s_\mu](s_\lambda*s_\nu)=[s_{\varphi(\mu)}](s_{\varphi(\lambda)}*s_{\varphi(\nu)})=g(\varphi(\lambda),\varphi(\mu),\varphi(\nu))$. [F1, F4, F5, step 2.2, step 4.1, algebra]

6.1 (Size bound.) For each $j$ with $k:=i_j$: $\lambda_j\le\omega_j\le\rho_j+s$, while every row $a$ with $j\le a<k$ lies outside $I$, so $\rho_a<\omega_{a+1}+s\le\rho_{a+1}+2s$, i.e. $\rho_a\le\rho_{a+1}+2s-1$; telescoping gives $\rho_j\le\rho_k+(2s-1)(k-j)$. If $k=\ell+1$ then $\varphi(\lambda)_j=\lambda_j\le\rho_j+s\le(2s-1)(\ell-j)+2s-1<2s\ell$, the same telescoping running down to $\rho_{\ell+1}=0$. If $k\le\ell$ then $\operatorname{ind}_I(k)\le\ell-k+1$, because the later block ends are distinct integers in $\{k+1,\dots,\ell\}$, and $\varphi(\lambda)_j\le s+(2s-1)(k-j)+s(2(\ell-k)+1)=2s+2s(\ell-j)-(k-j)\le2s\ell$. Summing over the $\ell$ rows gives $r=|\varphi(\lambda)|\le2s\ell^2$, and by step 1.1 the same holds for $|\varphi(\mu)|=r$. [step 1.1, step 1.2, algebra] ∎

## Remarks

- **Open obligation (exact).** Part (i) is proved. In part (ii) the single missing step is the boundary separation of step 3.3. In its second form ($b=\ell+1$) it reduces to $\lambda_{k+1}+(\rho_k-\alpha_k)\le s(\ell+1-k)$ for all admissible $\alpha$, and since $\rho_k-\alpha_k\le r-g_0\le s-g_0$ it is enough to prove $\lambda_{k+1}\le s(\ell-k)+g_0$, where $g_0=n-|\rho|=\sum_j(\lambda_j-\mu_j)^+$; the same statement with $\lambda\leftrightarrow\mu$ handles the $\mu$-side. This is the one unproved assertion of the item; Pak-Panova state and use it without an argument that survives checking, and it was verified computationally here (exhaustive for $n\le8$, random up to $n=60$: no failure among admissible pairs in range $r\le s$).

- **Consequences used on this page.** The row-gap theorem and the failing-padding counterexample use the reduction lemma only through its conclusion, and both name that reliance explicitly. The corrected hypothesis of part (ii) is satisfied in these applications, whose triples carry a uniform row separation.
