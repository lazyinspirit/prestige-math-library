---
id: thm-murnaghan-expansion-for-all-admissible-ranks
kind: theorem
title: "The Murnaghan expansion at every admissible rank"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [def-reduced-kronecker-coefficient,
       lem-vertex-operator-series-for-padded-schur-functions,
       thm-brion-formula-for-reduced-kronecker-coefficients,
       def-first-row-padding-completion-and-the-stabilization-operator,
       lem-padding-completion-is-compatible-with-the-internal-product,
       def-first-row-padding-of-a-partition,
       def-kronecker-coefficient-and-internal-tensor-product,
       thm-schur-functions-form-an-orthonormal-integral-basis,
       thm-littlewood-richardson-schur-product-expansion,
       def-littlewood-richardson-tableau-and-coefficient,
       def-internal-product-on-symmetric-functions]
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
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Murnaghan Theorem (2) p. 4, Example 1 p. 4 and Lemma 2.1 pp. 7-8"
      url: "https://arxiv.org/pdf/0907.4652"
    - title: "Emmanuel Briand, Amarpreeet Rattan and Mercedes Rosas, On the growth of the Kronecker coefficients, arXiv:1607.02887v1 (2016); section 2.3 pp. 5-6"
      url: "https://arxiv.org/pdf/1607.02887"
---

## Statement

For all partitions $\alpha,\beta$ and every integer
$n\ge\max\{|\alpha|+\alpha_1,\,|\beta|+\beta_1\}$:
$$s_{\alpha[n]}*s_{\beta[n]}=\sum_\gamma \bar g^\gamma_{\alpha,\beta}\,s_{\gamma[n]},$$
an identity in the symmetric function ring, where $s_{\gamma[n]}$ is the
Jacobi–Trudi determinant attached to the integer sequence
$\gamma[n]=(n-|\gamma|,\gamma_1,\gamma_2,\dots)$, equal to $0$ or $\pm1$ times
a Schur function
([[def-first-row-padding-completion-and-the-stabilization-operator]],
[[def-first-row-padding-of-a-partition]]), and $*$ is the internal product
([[def-kronecker-coefficient-and-internal-tensor-product]]).

For an ordinary partition $\delta\vdash n$ the coefficient of $s_\delta$ is
$$g^\delta_{\alpha[n],\beta[n]} =\sum_\gamma \bar g^\gamma_{\alpha,\beta}\, \langle s_{\gamma[n]},s_\delta\rangle_H,$$
where each Hall factor is $0$ or a sign coming from Jacobi–Trudi
straightening ([[thm-schur-functions-form-an-orthonormal-integral-basis]]).
At small admissible ranks the signed terms can cancel or coalesce;
individual coefficients need not yet equal their reduced values. The range
displayed is precisely the set of $n$ for which $\alpha[n]$ and $\beta[n]$
are partitions.

## Facts & Assumptions

**Given:** Partitions $\alpha,\beta,\gamma,\delta$ with $\delta\vdash n$, and integers $k\ge0$.

[F1] $R_{\alpha,\beta}=\sum_\gamma\bar g^\gamma_{\alpha,\beta}s_\gamma$, a finite Schur expansion ([[thm-brion-formula-for-reduced-kronecker-coefficients]], [[def-reduced-kronecker-coefficient]]).

[F2] $(U_ns_\alpha)*(U_ns_\beta)=U_nR_{\alpha,\beta}$ for every $n\ge0$, including nonadmissible ranks, and $\sum_{n\ge0}(U_ns_\alpha)*(U_ns_\beta)t^n=\sigma[tX]R_{\alpha,\beta}[tX-1]$ ([[lem-padding-completion-is-compatible-with-the-internal-product]]).

[F3] $U_n(s_\lambda)=s_{\lambda[n]}$ on the Schur basis and $U_n$ is $\mathbb Z$-linear; for $n\ge|\alpha|+\alpha_1$ the sequence $\alpha[n]$ is a partition and $U_ns_\alpha=s_{\alpha[n]}$ is the honest Schur function ([[def-first-row-padding-completion-and-the-stabilization-operator]], [[def-first-row-padding-of-a-partition]]).

[F4] $s_\mu*s_\nu=\sum_\delta g^\delta_{\mu,\nu}s_\delta$ for partitions of equal size, the Schur basis is orthonormal, and $s_{\gamma[n]}$ is an integer combination of Schur functions of degree $n$ that is $0$ or $\pm1$ times a Schur function ([[def-kronecker-coefficient-and-internal-tensor-product]], [[thm-schur-functions-form-an-orthonormal-integral-basis]], [[def-first-row-padding-completion-and-the-stabilization-operator]]).

[F5] The vertex-operator series identifies the coefficients of $\sigma[tX]R_{\alpha,\beta}[tX-1]$, so $U_nR_{\alpha,\beta}$ is the coefficient of $t^n$ there ([[lem-vertex-operator-series-for-padded-schur-functions]]).

[F6] The finite Littlewood expression for $R_{\alpha,\beta}$ is given in [[lem-padding-completion-is-compatible-with-the-internal-product]]; LR coefficients count lattice semistandard tableaux ([[thm-littlewood-richardson-schur-product-expansion]], [[def-littlewood-richardson-tableau-and-coefficient]]), and $s_{(m)}$ is the internal-product unit in degree $m$ ([[def-internal-product-on-symmetric-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $R_{\alpha,\beta}=\sum_\gamma\bar g^\gamma_{\alpha,\beta}s_\gamma$ with finitely many nonzero terms. [F1]

1.2 *Local reduced coefficients for $(2),(2)$.* In the Littlewood expression of [F6], $(s_\delta s_\tau)^\perp s_{(2)}$ is nonzero only when $\delta=(m)$ and $\tau=(r)$ are rows with $m+r\le2$ (a row LR target forces every factor to be a row); it then equals $s_{(2-m-r)}$. The analogous condition holds for $\epsilon$, and $s_\delta*s_\epsilon=0$ unless their degrees agree, in which case it is $s_{(m)}$ by the unit rule. Here $(0)$ means $\varnothing$. Hence $R_{(2),(2)}=\sum_{m+r\le2}s_{(2-m-r)}^2s_{(m)}=s_{(2)}^2+s_{(1)}^2+1+s_{(1)}^3+s_{(1)}+s_{(2)}$. Counting row LR tableaux gives $s_{(2)}^2=s_{(4)}+s_{(3,1)}+s_{(2,2)}$ and $s_{(1)}^2=s_{(2)}+s_{(1,1)}$; adding one box to these two shapes gives $s_{(1)}^3=s_{(3)}+2s_{(2,1)}+s_{(1,1,1)}$. Thus $R_{(2),(2)}=1+s_{(1)}+2s_{(2)}+s_{(1,1)}+s_{(1,1,1)}+2s_{(2,1)}+s_{(2,2)}+s_{(3)}+s_{(3,1)}+s_{(4)}$, whose coefficients are exactly the reduced coefficients by [F1]. [F1, F6]

2.1 By [F2], $(U_ns_\alpha)*(U_ns_\beta)=U_nR_{\alpha,\beta}$ for every $n\ge0$; by [F5], $U_nR_{\alpha,\beta}$ is the coefficient of $t^n$ in $\sigma[tX]R_{\alpha,\beta}[tX-1]$, and since $U_n$ is $\mathbb Z$-linear with $U_n(s_\gamma)=s_{\gamma[n]}$ by [F3], it equals $\sum_\gamma\bar g^\gamma_{\alpha,\beta}s_{\gamma[n]}$, a finite sum. Hence the displayed identity holds for every $n\ge0$ at the level of Jacobi–Trudi completions. [F2, F3, F5, step 1.1]

3.1 In the admissible range $n\ge\max\{|\alpha|+\alpha_1,|\beta|+\beta_1\}$ the padded sequences $\alpha[n],\beta[n]$ are partitions, so by [F3] the left side of step 2.1 is the internal product $s_{\alpha[n]}*s_{\beta[n]}$ of two honest Schur functions; this proves the first display in exactly the stated range and shows that the range is the full set of $n$ for which both inputs are partitions. [F3, step 2.1]

3.2 *Rank-four cancellation.* Apply $U_4$ to the ten terms of step 1.2. The tails $\varnothing,(1),(2),(1,1),(1,1,1)$ give $s_{(4)},s_{(3,1)},s_{(2,2)},s_{(2,1,1)},s_{(1,1,1,1)}$ respectively. The tails $(2,1),(2,2)$ give zero by repeated straightening indices. The tails $(3),(3,1),(4)$ give $-s_{(2,2)},-s_{(2,1,1)},-s_{(3,1)}$ respectively by [F3]–[F4]. With their multiplicities from step 1.2, the sum is $s_{(4)}+s_{(1,1,1,1)}+s_{(2,2)}$; in particular its $(2,2)$ coefficient is $2-1=1$, whereas the reduced $(2)$ coefficient is $2$. This proves the announced cancellation locally. [F3, F4, step 2.1, step 1.2]

4.1 *Coefficient form.* For $\delta\vdash n$, pair the identity of step 2.1 against $s_\delta$ using orthonormality [F4]: the left side gives $\langle s_{\alpha[n]}*s_{\beta[n]},s_\delta\rangle_H=g^\delta_{\alpha[n],\beta[n]}$ by [F4], and the right side gives $\sum_\gamma\bar g^\gamma_{\alpha,\beta}\langle s_{\gamma[n]},s_\delta\rangle_H$, where each factor is a Hall pairing of the Jacobi–Trudi determinant $s_{\gamma[n]}$ with a Schur function, hence a signed multiplicity of a Schur constituent, $0$ or $\pm1$ by [F4]. This is the second display, and it shows that individual coefficients can receive both positive and negative contributions from different $\gamma$ and need not equal $\bar g^\gamma_{\alpha,\beta}$. [F4, step 3.1]

5.1 *Choice and finiteness.* Every step uses finite sums: the Schur expansion of $R_{\alpha,\beta}$ is finite by [F1], the sum over $\gamma$ in step 2.1 is finite, and the coefficient extraction of step 4.1 uses the finite degree-$n$ part of the Schur basis. No form of the axiom of choice is used; the identity is asserted for all admissible ranks, not only for the eventually stable ones. [F1, F2, step 4.1] ∎

## Remark

For $\alpha=\beta=(2)$, every rank $n\ge4$ product is $U_nR_{(2),(2)}$, where
$$R_{(2),(2)}=1+s_{(1)}+2s_{(2)}+s_{(1,1)}+s_{(1,1,1)}+2s_{(2,1)}+s_{(2,2)}+s_{(3)}+s_{(3,1)}+s_{(4)}.$$
Its coefficients are the reduced coefficients, and all other reduced coefficients vanish. This finite polynomial and its rank-four cancellation are proved in steps 1.2 and 3.2 above.
