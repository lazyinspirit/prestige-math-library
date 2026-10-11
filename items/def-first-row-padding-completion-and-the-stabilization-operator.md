---
id: def-first-row-padding-completion-and-the-stabilization-operator
kind: definition
title: "The Jacobi–Trudi completion $s_\\mu$, the operators $U_n$ and $V$, and $\\operatorname{stab}(\\alpha,\\beta)$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-padded-kronecker-coefficient-sequence,
       def-first-row-padding-of-a-partition,
       thm-jacobi-trudi-and-dual-jacobi-trudi-identities,
       def-stable-schur-function-by-bialternants,
       def-kronecker-coefficient-and-internal-tensor-product,
       def-internal-product-on-symmetric-functions,
       thm-schur-functions-form-an-orthonormal-integral-basis]
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
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Section 1 p. 3, equation (1) (Jacobi-Trudi determinant for an arbitrary integer sequence) and p. 5 (Definition of stab(alpha,beta) via the operator V); Lemma 3.1 and Theorem 3.2, pp. 8-9"
      url: "https://arxiv.org/pdf/0907.4652"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995; Chapter I section 3 (Jacobi-Trudi identities)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
---

## Definition

**Padded sequences.** For a partition $\alpha=(\alpha_1,\dots,\alpha_k)$ and an
integer $n$, with missing parts read as zero, the first-row padding is the sequence
$\alpha[n]:=(n-|\alpha|,\alpha_1,\dots,\alpha_k)$, a partition of $n$ exactly
when $n\ge|\alpha|+\alpha_1$
([[def-first-row-padding-of-a-partition]],
[[def-padded-kronecker-coefficient-sequence]]). When this sequence is used as
a partition label, omit trailing zero entries; in particular
$\varnothing[0]=\varnothing$ and the missing first part is zero.

**The Jacobi–Trudi completion.** For an arbitrary finite sequence of integers
$\mu=(\mu_1,\dots,\mu_m)$, define
$$s_\mu:=\det\bigl(h_{\mu_j-j+i}\bigr)_{1\le i,j\le m},$$
where $h_0=1$ and $h_k=0$ for $k<0$
([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]); for the empty sequence
the empty determinant is $1$. Every such determinant is $0$ or $\pm1$ times a
Schur function. Indeed, put $q_j:=\mu_j+m-j$. If $q_j=q_k$ for $j\ne k$, the
$j$-th and $k$-th columns of the matrix agree, so the determinant vanishes.
Otherwise let $\sigma$ be the permutation sorting $q$ into decreasing order
$q_{\sigma(1)}>\cdots>q_{\sigma(m)}$ and set $\nu_j:=q_{\sigma(j)}+j-m$; then
$\nu$ is weakly decreasing and, permuting columns with sign
$\operatorname{sgn}(\sigma)$ and using
$h_{\nu_j-j+i}=h_{q_{\sigma(j)}+i-m}$, the determinant equals
$\operatorname{sgn}(\sigma)\det(h_{\nu_j-j+i})$. If $\min_jq_j<0$ then
$\nu_m<0$ and the last column of this determinant is zero, so the value is
$0$; if $\min_jq_j\ge0$ then $\nu$, after deleting trailing zero entries, is a partition of $|\mu|$
with at most $m$ parts and the Jacobi–Trudi identity gives the value
$\operatorname{sgn}(\sigma)s_\nu$. In particular $s_{\alpha[n]}\in\Lambda^n$
for every $n\ge0$, and $s_{\alpha[n]}=0$ for $n<0$: every term of the
determinant expansion has total degree $n$, so for $n<0$ some factor has
negative index and vanishes.

**The operators $U_n$ and $V$.** The Schur functions form a $\mathbb Z$-basis of
$\Lambda$ ([[thm-schur-functions-form-an-orthonormal-integral-basis]]), so there are unique
$\mathbb Z$-linear endomorphisms $U_n$ ($n\in\mathbb Z$) and $V$ of $\Lambda$
determined on the Schur basis by
$$U_n(s_\lambda):=s_{\lambda[n]},\qquad V(s_\lambda):=s_{\lambda+(1)},$$
where $\lambda+(1)=(\lambda_1+1,\lambda_2,\dots)$. Thus $U_n(\Lambda)\subseteq\Lambda^n$ for $n\ge0$ (and $U_n=0$ for
$n<0$), while $V$ raises degree by one; in particular $V(1)=s_{(1)}$. The operators
are extended linearly, and $V^k$ denotes the $k$-fold iterate of $V$.

**The stabilization index.** The internal product $*$ on $\Lambda$ is the
degree-preserving product of
[[def-internal-product-on-symmetric-functions]] and
[[def-kronecker-coefficient-and-internal-tensor-product]]. For partitions
$\alpha,\beta$, define $\operatorname{stab}(\alpha,\beta)$ to be the least
integer $n_0\ge0$ such that
$$s_{\alpha[n_0+k]}*s_{\beta[n_0+k]}=V^k\bigl(s_{\alpha[n_0]}*s_{\beta[n_0]}\bigr) \qquad\text{for all }k>0,$$
following the source. This definition records the source's convention only: it
does not assert that such an $n_0$ exists, nor that a value of $n_0$ satisfying
the display is least for any other property. Existence, least-ness and the
exact value of $\operatorname{stab}(\alpha,\beta)$ are proved in
[[thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product]].
