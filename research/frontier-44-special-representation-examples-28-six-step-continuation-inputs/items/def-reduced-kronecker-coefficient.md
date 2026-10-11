---
id: def-reduced-kronecker-coefficient
kind: definition
title: "The reduced (stable) Kronecker coefficient $\\bar g^\\gamma_{\\alpha,\\beta}$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [thm-murnaghan-stability-for-kronecker-coefficients,
       def-padded-kronecker-coefficient-sequence,
       def-kronecker-coefficient-and-internal-tensor-product]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Introduction pp. 2 and 5 (definition of the reduced Kronecker coefficients) and the displayed product table p. 2"
      url: "https://arxiv.org/pdf/0907.4652"
---

## Definition

For partitions $\alpha,\beta,\gamma$ define the **reduced (stable) Kronecker
coefficient** $\bar g^\gamma_{\alpha,\beta}$ to be the eventual value of the
padded sequence $n\mapsto g_n(\alpha,\beta,\gamma)$ furnished by
[[thm-murnaghan-stability-for-kronecker-coefficients]]; equivalently
$$\bar g^\gamma_{\alpha,\beta}:=\lim_{n\to\infty}g^{\gamma[n]}_{\alpha[n],\beta[n]},$$
where the sequence is defined for
$n\ge\max\{|\alpha|+\alpha_1,|\beta|+\beta_1,|\gamma|+\gamma_1\}$ and set to
$0$ below ([[def-padded-kronecker-coefficient-sequence]],
[[def-kronecker-coefficient-and-internal-tensor-product]]).

**Well-definedness.** The sequence is eventually constant by the Murnaghan
stability theorem, and the eventual value of an eventually constant sequence
of nonnegative integers is a unique nonnegative integer; no choice is
involved. Two immediate conventions: (i) $\bar g^\gamma_{\alpha,\beta}=
\bar g^\gamma_{\beta,\alpha}$ for all $\alpha,\beta,\gamma$, because
$V_\mu\otimes V_\nu\cong V_\nu\otimes V_\mu$ and the Kronecker coefficients
are symmetric in their two lower indices; (ii) for fixed $\alpha,\beta$ only
finitely many $\gamma$ have $\bar g^\gamma_{\alpha,\beta}\ne0$, because the
finite set $S(\alpha,\beta)$ of the stability theorem carries the whole
support. The values used later and verified in the source's introduction for
$\alpha=\beta=(2)$ are $\bar g^{(2)}_{(2),(2)}=2$ and
$\bar g^{(4)}_{(2),(2)}=1$; they are read off from the displayed stable row
and are not used as logical inputs anywhere on this page.
