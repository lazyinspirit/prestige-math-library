---
id: lem-kronecker-reduction-lemma
kind: lemma
title: The Kronecker reduction lemma of Pak and Panova
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric,
       def-kronecker-coefficient-and-internal-tensor-product,
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
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
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

Let $n\ge0$ and $\ell\ge0$, and let $\lambda,\mu,\nu\vdash n$ have lengths at most $\ell$. Read missing parts as zero and put $s:=n-\nu_1$, with $\nu_1=0$ for the empty partition.

**(i)** If $|\lambda_i-\mu_i|>s$ for some $i\le\ell$, then $g(\lambda,\mu,\nu)=0$.

**(ii)** Otherwise put $\rho:=\lambda\cap\mu$, $\omega:=\lambda\cup\mu$, $\omega_{\ell+1}:=0$, and define
$$\delta_i:=\max\{0,\rho_i-\omega_{i+1}-2s\},\qquad D_j:=\sum_{i=j}^{\ell}\delta_i,\qquad \varphi(\theta)_j:=\theta_j-D_j\quad(1\le j\le\ell).$$
For every partition $\theta$ with at most $\ell$ parts satisfying $\rho_j-s\le\theta_j\le\omega_j$ for each $j$, the image $\varphi(\theta)$ is a partition after deletion of zero parts. In particular $\varphi(\lambda)$ and $\varphi(\mu)$ have a common size $r$, and $\varphi(\nu):=(r-s,\nu_2,\nu_3,\ldots)$ is a partition of $r$ after deletion of zero parts; in particular,
$\varphi(\nu)=\varnothing$ when $r=s=0$. Then
$$g(\lambda,\mu,\nu)=g(\varphi(\lambda),\varphi(\mu),\varphi(\nu)),\qquad r\le2s\ell^2.$$

This is a corrected reduction map for the bounded-reduction conclusion of Pak–Panova. It retains their Littlewood–Richardson/Jacobi–Trudi proof route and the same size bound; the map is not the block formula printed in their papers.

## Facts & Assumptions

**Given:** The partitions and length bound in the Statement; for part (ii), $|\lambda_i-\mu_i|\le s$, the vectors $\rho,\omega,\delta,D$ and the map $\varphi$ above; $g_0:=n-|\rho|$.

[F1] The internal product is bilinear, $h_m=s_{(m)}$ for $m>0$ and $h_0=s_\varnothing=1$ are its degreewise units, $s_\lambda*s_\mu=\sum_\xi g(\lambda,\mu,\xi)s_\xi$, and $g$ is symmetric in its arguments ([[def-internal-product-on-symmetric-functions]], [[prop-power-sums-diagonalize-the-internal-product]], [[def-kronecker-coefficient-and-internal-tensor-product]], [[cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric]]).

[F2] Littlewood's identity is $s_\lambda*(s_\tau s_\theta)=\sum_{\alpha,\beta}c^\lambda_{\alpha\beta}(s_\alpha*s_\tau)(s_\beta*s_\theta)$, with $|\alpha|=|\tau|$ and $|\beta|=|\theta|$ ([[lem-littlewood-internal-product-outer-compatibility]]).

[F3] The Schur-product coefficient $c^\lambda_{\alpha\beta}$ counts semistandard tableaux of shape $\lambda/\alpha$ and content $\beta$ with lattice reading word, read right to left in each row and top to bottom. It vanishes unless $\alpha\subseteq\lambda$ and $|\lambda|=|\alpha|+|\beta|$ ([[thm-littlewood-richardson-schur-product-expansion]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F4] Jacobi–Trudi gives $s_\xi=\det(h_{\xi_i-i+j})_{1\le i,j\le\ell}$ for a partition $\xi$ of length at most $\ell$, with $h_0=1$ and $h_a=0$ for $a<0$. The Schur functions form an integral basis in each homogeneous degree of the stable graded ring ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]], [[thm-schur-functions-form-an-orthonormal-integral-basis]], [[def-stable-graded-ring-of-symmetric-functions]]).

[F5] Intersection and union are componentwise minimum and maximum and are partitions; in case (ii), $0\le\omega_i-\rho_i\le s$ and $g_0=\sum_i(\lambda_i-\rho_i)$ ([[def-partition-young-diagram-and-conjugate-partition]]).

## Proof

**Proof technique:** preserve the small skew tableaux by an explicit row shear and apply the first-row Jacobi–Trudi expansion.

1.1 For $0\le q\le n$ and $\eta\vdash q$, apply [F2] to $h_{n-q}s_\eta$ and use the unit in [F1], then extract $[s_\mu]$ using [F3]. This gives the finite coefficient identity $K_n(q,\eta):=[s_\mu](s_\lambda*(h_{n-q}s_\eta))=\sum_{\alpha\vdash n-q,\ \beta,\gamma\vdash q}c^\lambda_{\alpha\beta}c^\mu_{\alpha\gamma}g(\beta,\eta,\gamma)$. Every nonzero summand has $\alpha\subseteq\rho$; writing $e_i:=\rho_i-\alpha_i$ gives $\sum_i e_i=q-g_0$, so $0\le e_i\le q-g_0\le q$. If $\ell=0$, then $n=s=r=0$, all three partitions are empty, and the degree-zero unit gives $g(\varnothing,\varnothing,\varnothing)=1$, proving the claim; hence assume $\ell\ge1$ for the rest of the proof. [F1, F2, F3, F5, algebra]

1.2 For part (ii) only, and put $D_{\ell+1}=0$, $\rho_{\ell+1}=0$. One has $\delta_i\le\rho_i-\rho_{i+1}$. If $D_j>0$, let $b\ge j$ be the last index with $\delta_b>0$; telescoping gives $D_j\le\rho_j-\rho_b+\delta_b\le\rho_j-2s$. Hence $\varphi(\theta)_j\ge s$ when $D_j>0$, and when $D_j=0$ its value is $\theta_j\ge0$. If $\delta_j=0$, consecutive parts of $\varphi(\theta)$ have the same difference as those of $\theta$. If $\delta_j>0$ and $j<\ell$, then $\varphi(\theta)_j-\varphi(\omega)_{j+1}=\theta_j-\omega_{j+1}-\delta_j=\theta_j-\rho_j+2s\ge s\ge0$. Since $\theta\subseteq\omega$, this proves weak decrease at every remaining boundary. Thus $\varphi$ maps the stated domain to partitions, is injective, and satisfies $|\varphi(\theta)|=|\theta|-\sum_jD_j$. [F5, algebra]

2.1 Independently of case (ii), expand the Jacobi–Trudi determinant for $\nu=(n-s,\nu_2,\ldots)$ along the first row. Its $j$th cofactor $B_j$, indexed by $0\le j\le\ell-1$, depends only on $(\nu_2,\ldots,\nu_\ell)$ and is homogeneous of degree $s-j$, since every product in that minor has that degree. Thus $s_\nu=\sum_{j=0}^{\ell-1}(-1)^j h_{n-s+j}B_j$, with $B_j=0$ when $j>s$; for $j\le s$, expand $B_j$ in the Schur basis of degree $q=s-j$. By symmetry [F1], $g(\lambda,\mu,\nu)=[s_\mu](s_\lambda*s_\nu)$ is therefore a signed sum of $K_n(q,\eta)$ with $0\le q\le s$. If $|\lambda_i-\mu_i|>s$ for some $i$, then $g_0\ge|\lambda_i-\mu_i|>s$: the sums of the positive row differences in either direction agree because $|\lambda|=|\mu|$. Step 1.1 then has no contributing $\alpha$ for any $q\le s$. Every term vanishes, proving part (i). [F1, F4, F5, step 1.1, algebra]

2.2 Return to case (ii) and put $r:=|\varphi(\lambda)|=|\varphi(\mu)|$. If any $\delta_i>0$, step 1.2 gives $\rho_1-D_1\ge2s$ and therefore $r\ge2s$, so $r-s\ge s\ge\nu_2$. If every $\delta_i=0$, then $r=n$ and $r-s=\nu_1\ge\nu_2$. Thus $\varphi(\nu)$ is a partition after deletion of zero parts, including $\varnothing$ when $r=s=0$. To bound $r$, use $\delta_i\ge\rho_i-\omega_{i+1}-2s$ and telescope to obtain $\lambda_j-D_j\le2s(\ell-j+1)+\sum_{i=j}^{\ell}(\lambda_i-\rho_i)+\sum_{i=j+1}^{\ell}(\omega_i-\lambda_i)\le3s(\ell-j+1)$; the last two sums together equal $(\lambda_j-\rho_j)+\sum_{i=j+1}^{\ell}(\omega_i-\rho_i)\le s(\ell-j+1)$. Therefore $r\le3s\ell(\ell+1)/2\le2s\ell^2$ for $\ell\ge3$. If $\ell=2$, equal total sizes imply $\omega_2=\rho_2+a$ and $n=\rho_1+\rho_2+a$, where $a=|\lambda_1-\mu_1|=|\lambda_2-\mu_2|\le s$; then $r=n-\delta_1-2\delta_2\le(\rho_1+\rho_2+a)-(\rho_1-\rho_2-a-2s)-2(\rho_2-2s)=6s+2a\le8s$. If $\ell=1$, then $s=0$, $\lambda=\mu=\nu=(n)$ and $\delta_1=n$, giving $r=0$. [F5, step 1.2, algebra]

2.3 Fix $q\le s$. The map $\alpha\mapsto\varphi(\alpha)$ is a bijection from partitions $\alpha\subseteq\rho$ of size $n-q$ to partitions $\theta\subseteq\varphi(\rho)$ of size $r-q$. If either set is nonempty, its total deficit from $\rho$ or $\varphi(\rho)$ is $q-g_0\le s$. For the forward direction this proves $\alpha_j\ge\rho_j-s$, so step 1.2 applies. Conversely, given $\theta$ in the second set, set $\alpha_j:=\theta_j+D_j$. These parts are nonnegative and have consecutive differences $(\theta_j-\theta_{j+1})+\delta_j\ge0$. They satisfy $\alpha\subseteq\rho$, $|\alpha|=n-q$, and $\rho_j-\alpha_j=\varphi(\rho)_j-\theta_j\le q-g_0\le s$. This is the inverse. Empty index sets, including $q<g_0$, correspond as well. [step 1.1, step 1.2, algebra]

3.1 For such an $\alpha$, shift every cell $(j,c)$ of $\lambda/\alpha$ to $(j,c-D_j)$. Its image is $\varphi(\lambda)/\varphi(\alpha)$, with each row order and the whole reading word preserved. Within runs of rows with $\delta_j=0$, consecutive rows share columns in exactly the same way. At a cut $\delta_j>0$, the original rows have no common skew column across the cut, since $\alpha_j\ge\rho_j-s>\omega_{j+1}\ge\lambda_{j+1}$. The shifted rows likewise have no common skew column across it, because $\varphi(\alpha)_j-\varphi(\omega)_{j+1}=\alpha_j-\rho_j+2s\ge s\ge0$. The partition inequalities imply the same separation for every row above and below the cut. Thus all column comparisons, weak row inequalities, content and lattice-word conditions are preserved in both directions. Consequently $c^\lambda_{\alpha\beta}=c^{\varphi(\lambda)}_{\varphi(\alpha),\beta}$ for every $\beta\vdash q$, and the identical argument gives $c^\mu_{\alpha\gamma}=c^{\varphi(\mu)}_{\varphi(\alpha),\gamma}$. [F3, step 1.1, step 1.2, step 2.3, construct]

4.1 Apply step 1.1 to the reduced outer partitions of size $r$. Because intersection commutes with subtracting the same row vector, their intersection is $\varphi(\rho)$. Steps 2.3 and 3.1 identify the two finite sums term by term, with the same $\beta,\gamma,\eta$ and unchanged $g(\beta,\eta,\gamma)$, so $K_n(q,\eta)=[s_{\varphi(\mu)}](s_{\varphi(\lambda)}*(h_{r-q}s_\eta))$ for every $q\le s$. All degrees are nonnegative: if a reduction occurs then $r\ge2s$ by step 2.2, and otherwise $r=n\ge s$. [step 1.1, step 2.2, step 2.3, step 3.1, algebra]

5.1 The first-row Jacobi–Trudi expansion for $\varphi(\nu)=(r-s,\nu_2,\ldots)$ has exactly the cofactors $B_j$ of step 2.1, since its tail is unchanged. Replacing each $K_n(q,\eta)$ by its equal reduced coefficient from step 4.1 in that finite signed expansion gives $g(\lambda,\mu,\nu)=g(\varphi(\lambda),\varphi(\mu),\varphi(\nu))$. Step 2.2 gives the asserted size bound, completing part (ii). [F1, F4, step 2.1, step 2.2, step 4.1] ∎

## Remarks

The block map printed in Pak–Panova is not used here. For $\lambda=(13,10,2)$, $\mu=(13,7,5)$, $\nu=(22,3)$, $\ell=3$, their complexity-paper formula gives $(9,10,2)$ for the first image, which is not a partition. The corrected map above retains a $2s$ separation at every shortened cut and proves the claimed bounded reduction without weak-decrease assumptions on its outputs.

The sharp $s$-gap stability result uses the coefficient identity and first-row expansion of steps 1.1 and 2.1 directly on a single row shift; it need not equate the two compacted images of this corrected map. All constructions and sums here are finite and use no choice principle.
