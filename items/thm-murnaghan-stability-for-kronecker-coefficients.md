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
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       lem-generation-degree-bounds-surjectivity-degree-and-weight,
       def-weight-of-a-characteristic-zero-fi-module]
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
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, FI-modules and stability for representations of symmetric groups, arXiv:1204.4533v4 (2014); Proposition 3.4.1 pp. 23-24, Proposition 2.3.6 p. 14, Theorem 1.13 p. 6 and its proof p. 22"
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

[F3] A finitely generated FI-module over a characteristic-zero field with finite-dimensional values is uniformly representation stable, so the multiplicity of each admissible padded irreducible family is constant in a common stable range ([[thm-finite-generation-is-equivalent-to-uniform-representation-stability]], [[def-uniform-representation-stability-for-consistent-sn-sequences]]).

[F4] For partitions $\lambda\ne\lambda'$ of possibly different sizes and $n\ge\max(|\lambda|+\lambda_1,|\lambda'|+\lambda'_1)$, the irreducible modules $V_{\lambda[n]}$ and $V_{\lambda'[n]}$ of $kS_n$ are nonisomorphic; and $V_{\mu}\otimes V_{\nu}\cong\bigoplus_\gamma g^\gamma_{\mu,\nu}V_\gamma$ with $g^\gamma_{\mu,\nu}$ the Kronecker coefficient ([[def-kronecker-coefficient-and-internal-tensor-product]], [[def-first-row-padding-of-a-partition]], [[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]).

[F5] Generation in a finite degree $d$ bounds the weight by $d$: only tails $\lambda$ with $|\lambda|\le d$ can occur ([[lem-generation-degree-bounds-surjectivity-degree-and-weight]], [[def-weight-of-a-characteristic-zero-fi-module]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the assignment $n\mapsto V_{\alpha[n]}$ (and $0$ below the threshold) is a finitely generated FI-module $V(\alpha)$ over $k$ with finite-dimensional values, and likewise $V(\beta)$. [F1]

2.1 By [F2] the pointwise tensor product $T:=V(\alpha)\otimes V(\beta)$ is finitely generated and has finite-dimensional values; at every rank where both paddings are admissible its value is $V_{\alpha[n]}\otimes_kV_{\beta[n]}$. Its tensor multiplicities are the usual complex Kronecker coefficients: by the rational-model construction in [[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]], $V_\mu=k\otimes_{\mathbb Q}S^\mu_{\mathbb Q}$. The map $(c\otimes u)\otimes(e\otimes v)\mapsto ce\otimes(u\otimes v)$ identifies its tensor product with the scalar extension of the rational tensor product. Extend a rational Specht decomposition to $k$ and to $\mathbb C$; tensoring carries a finite direct sum to the same sum of extended Specht modules (by the displayed map on bases), so the two fields have identical multiplicities. [F2, F4, step 1.1]

3.1 Since $T$ is finitely generated, it is generated in some finite degree $d$. By [F5] only the finitely many partitions $\lambda$ with $|\lambda|\le d$ can label constituents. By [F3] their multiplicities are constant from some rank $N$ onward. Increase $N$ to make all these finitely many labels admissible. Then $T_n\cong\bigoplus_{\lambda\in S}c_\lambda V_{\lambda[n]}$ for $n\ge N$, where $S$ is the finite set of labels with positive multiplicity; put $\bar g^\gamma_{\alpha,\beta}:=c_\gamma$ on $S$ and zero outside $S$. [F3, F5, step 2.1]

4.1 Put $N_0:=\max\{N,\,|\alpha|+\alpha_1,\,|\beta|+\beta_1,\,\max(\{0\}\cup\{|\lambda|+\lambda_1:\lambda\in S\})\}$, finite because $S$ is finite. For $n\ge N_0$ the equality of step 3.1 holds with every $V_{\gamma[n]}$, $\gamma\in S$, an honest irreducible of $kS_n$; and the rank-$n$ value also decomposes by [F4] as $\bigoplus_\gamma g^{\gamma[n]}_{\alpha[n],\beta[n]}V_{\gamma[n]}$, the sum over admissible tails $\gamma$ with $n\ge|\gamma|+\gamma_1$, which label all partitions of $n$ uniquely by deleting their first row. By the nonisomorphism clause of [F4], the two decompositions have the same labels and multiplicities: $g_n(\alpha,\beta,\gamma)=\bar g^\gamma_{\alpha,\beta}$ for every partition $\gamma$ and every $n\ge N_0$, where for $\gamma\notin S$ this says $g_n(\alpha,\beta,\gamma)=0$. [F4, step 3.1]

5.1 The case $\gamma\notin S$ and $n<m(\gamma)$ also gives $g_n(\alpha,\beta,\gamma)=0$ by the convention in the statement, so making $N_0$ larger if necessary the equality $g_n(\alpha,\beta,\gamma)=\bar g^\gamma_{\alpha,\beta}$ holds for all $n\ge N_0$ and all partitions $\gamma$; this is eventual constancy with the finite support $S(\alpha,\beta):=S$. The empty partition is included: $V_{\varnothing[n]}$ is the trivial module, the thresholds $|\varnothing|+\varnothing_1=0$ cause no special case, and the argument did not use any bound on $N_0$ sharper than existence. [given, step 4.1]

6.1 No choice principle is used: the FI-module suppliers are $\mathbb Z$-linear constructions on finite-dimensional representation categories, the finite family $S$ and its multiplicities come from [F3], and the comparison of irreducibles in step 4.1 is a finite-dimensional decomposition statement over $k$; the statement is asserted for every field of characteristic $0$. [F1, F2, F3, step 4.1] ∎
