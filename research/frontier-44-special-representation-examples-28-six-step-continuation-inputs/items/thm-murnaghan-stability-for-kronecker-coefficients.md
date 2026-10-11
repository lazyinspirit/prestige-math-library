---
id: thm-murnaghan-stability-for-kronecker-coefficients
kind: theorem
title: "Murnaghan stability for Kronecker coefficients"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-padded-kronecker-coefficient-sequence,
       def-first-row-padding-of-a-partition,
       def-kronecker-coefficient-and-internal-tensor-product,
       prop-fi-module-realizing-one-padded-irreducible-family,
       prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated,
       thm-finite-generation-is-equivalent-to-uniform-representation-stability,
       def-uniform-representation-stability-for-consistent-sn-sequences,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]
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
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, FI-modules and stability for representations of symmetric groups, arXiv:1204.4533v4 (2014); Proposition 3.4.1 pp. 23-24, Proposition 2.3.6 pp. 12-13, Theorem 1.13 pp. 6-7"
      url: "https://arxiv.org/pdf/1204.4533"
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Murnaghan's theorem, p. 4"
      url: "https://arxiv.org/pdf/0907.4652"
---

## Statement

Fix partitions $\alpha,\beta,\gamma$ and work over a field $k$ of
characteristic $0$, with $V_\lambda$ denoting the irreducible $kS_n$-module
of shape $\lambda\vdash n$
([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]).
Put $m(\gamma):=\max\{|\alpha|+\alpha_1,\,|\beta|+\beta_1,\,|\gamma|+\gamma_1\}$
and, for $n\ge m(\gamma)$, let
$$g_n(\alpha,\beta,\gamma):=g^{\gamma[n]}_{\alpha[n],\beta[n]}$$
be the multiplicity of $V_{\gamma[n]}$ in
$V_{\alpha[n]}\otimes V_{\beta[n]}$
([[def-kronecker-coefficient-and-internal-tensor-product]],
[[def-padded-kronecker-coefficient-sequence]]); set
$g_n(\alpha,\beta,\gamma):=0$ for $n<m(\gamma)$, where the padded sequences
are not partitions.

Then the sequence $n\mapsto g_n(\alpha,\beta,\gamma)$ is eventually constant.
More precisely, there is a finite set $S(\alpha,\beta)$ of partitions and
nonnegative integers $\bar g^\gamma_{\alpha,\beta}$ for $\gamma\in S(\alpha,\beta)$,
with $\bar g^\gamma_{\alpha,\beta}:=0$ for $\gamma\notin S(\alpha,\beta)$, such
that $g_n(\alpha,\beta,\gamma)=\bar g^\gamma_{\alpha,\beta}$ for all
sufficiently large $n$ and every partition $\gamma$. No explicit bound on the
stable rank is asserted here; the sharp global bound is a separate claim.

## Facts & Assumptions

**Given:** Partitions $\alpha,\beta,\gamma$, a field $k$ of characteristic $0$, and the FI-module machinery over $k$.

[F1] There is a finitely generated FI-module $V(\alpha)$ over $k$ with $V(\alpha)_n\cong V_{\alpha[n]}$ for $n\ge|\alpha|+\alpha_1$ and $V(\alpha)_n=0$ below; it has weight $|\alpha|$ and stability degree $\alpha_1$ ([[prop-fi-module-realizing-one-padded-irreducible-family]]).

[F2] The pointwise tensor product of finitely generated FI-modules is finitely generated, with $(V\otimes W)_S=V_S\otimes_kW_S$; if $V$ is generated in degree $\le m_1$ and $W$ in degree $\le m_2$, then $V\otimes W$ is generated in degree $\le m_1+m_2$ ([[prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated]]).

[F3] A finitely generated FI-module over a characteristic-$0$ field with finite-dimensional values is uniformly representation stable: there are $N$ and finitely many partitions $\lambda$, with nonnegative multiplicities $c_\lambda$, such that the rank-$n$ value is $\bigoplus_\lambda c_\lambda V_{\lambda[n]}$ for every $n\ge N$; equivalently the multiplicity of each irreducible family is eventually constant ([[thm-finite-generation-is-equivalent-to-uniform-representation-stability]], [[def-uniform-representation-stability-for-consistent-sn-sequences]]).

[F4] For partitions $\lambda\ne\lambda'$ of possibly different sizes and $n\ge\max(|\lambda|+\lambda_1,|\lambda'|+\lambda'_1)$, the irreducible modules $V_{\lambda[n]}$ and $V_{\lambda'[n]}$ of $kS_n$ are nonisomorphic; and $V_{\mu}\otimes V_{\nu}\cong\bigoplus_\gamma g^\mu_{\nu,\gamma}V_\gamma$ with $g^\mu_{\nu,\gamma}$ the Kronecker coefficient ([[def-kronecker-coefficient-and-internal-tensor-product]], [[def-first-row-padding-of-a-partition]], [[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the assignment $n\mapsto V_{\alpha[n]}$ (and $0$ below the threshold) is a finitely generated FI-module $V(\alpha)$ over $k$ with finite-dimensional values, and likewise $V(\beta)$. [F1]

2.1 By [F2] the pointwise tensor product $V(\alpha)\otimes V(\beta)$ is a finitely generated FI-module with values $V_{\alpha[n]}\otimes_kV_{\beta[n]}$ at rank $n$; all values are finite dimensional over $k$ because each is a tensor product of finite-dimensional $kS_n$-modules. [F2, step 1.1]

3.1 By [F3] applied to $V(\alpha)\otimes V(\beta)$ there are an integer $N$ and a finite family of partitions $\lambda$ with multiplicities $c_\lambda\ge0$ such that $(V(\alpha)\otimes V(\beta))_n\cong\bigoplus_\lambda c_\lambda V_{\lambda[n]}$ for every $n\ge N$; let $S:=\{\lambda:c_\lambda\ne0\}$ and put $\bar g^\gamma_{\alpha,\beta}:=c_\gamma$ for $\gamma\in S$ and $\bar g^\gamma_{\alpha,\beta}:=0$ otherwise, so that $\bigoplus_\lambda c_\lambda V_{\lambda[n]}=\bigoplus_{\gamma\in S}\bar g^\gamma_{\alpha,\beta}V_{\gamma[n]}$ for $n\ge N$. [F3, step 2.1]

4.1 Put $N_0:=\max\{N,\,|\alpha|+\alpha_1,\,|\beta|+\beta_1,\,\max_{\lambda\in S}(|\lambda|+\lambda_1)\}$, finite because $S$ is finite. For $n\ge N_0$ the equality of step 3.1 holds with every $V_{\gamma[n]}$, $\gamma\in S$, an honest irreducible of $kS_n$; and the rank-$n$ value also decomposes by [F4] as $\bigoplus_\gamma g^{\gamma[n]}_{\alpha[n],\beta[n]}V_{\gamma[n]}$, the sum over all partitions $\gamma$ (finitely many nonzero, and $V_{\gamma[n]}$ an irreducible of $kS_n$ for $n\ge|\gamma|+\gamma_1$). By the nonisomorphism clause of [F4], the two decompositions have the same labels and multiplicities: $g_n(\alpha,\beta,\gamma)=\bar g^\gamma_{\alpha,\beta}$ for every partition $\gamma$ and every $n\ge N_0$, where for $\gamma\notin S$ this says $g_n(\alpha,\beta,\gamma)=0$. [F4, step 3.1]

5.1 The case $\gamma\notin S$ and $n<m(\gamma)$ also gives $g_n(\alpha,\beta,\gamma)=0$ by the convention in the statement, so making $N_0$ larger if necessary the equality $g_n(\alpha,\beta,\gamma)=\bar g^\gamma_{\alpha,\beta}$ holds for all $n\ge N_0$ and all partitions $\gamma$; this is eventual constancy with the finite support $S(\alpha,\beta):=S$. The empty partition is included: $V_{\varnothing[n]}$ is the trivial module, the thresholds $|\varnothing|+\varnothing_1=0$ cause no special case, and the argument did not use any bound on $N_0$ sharper than existence. [given, step 4.1]

6.1 No choice principle is used: the FI-module suppliers are $\mathbb Z$-linear constructions on finite-dimensional representation categories, the finite family $S$ and its multiplicities come from [F3], and the comparison of irreducibles in step 4.1 is a finite-dimensional decomposition statement over $k$; the statement is asserted for every field of characteristic $0$. [F1, F2, F3, step 4.1] ∎
