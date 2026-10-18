---
id: lem-pe18-modal-trace-and-form-continuity
kind: lemma
title: Modal trace bound and continuity of the exact-DtN variational form
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-pe18-spherical-dtn-truncated-variational-problem, thm-pe18-exact-spherical-dtn-map-on-smooth-data]
justified_by: []
proof_strategy: direct
axiom_use: "No axiom is used; the endpoint estimate is one-dimensional and the global bound follows by Cauchy–Schwarz."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 10: Bessel Functions"
      url: "https://dlmf.nist.gov/10"
    - title: "Plamen Stefanov, Scattering and Inverse Scattering in R^n, Appendix 1, §§1.1–1.2"
      url: "https://www.math.purdue.edu/~stefanov/publications/SCATTERING.pdf"
---

## Statement

Fix $0<a<R$, $k>0$, and let $\mathcal V_{a,R}$ and $\mathfrak a_{k,a,R}$ be as in [[def-pe18-spherical-dtn-truncated-variational-problem]]. There is $C=C(a,R,k)$ such that for every $u,v\in\mathcal V_{a,R}$,
$$\sum_{\ell\ge0}(1+\ell)\bigl(\|u_\ell(a)\|_2^2+\|u_\ell(R)\|_2^2\bigr)\le C\|u\|_{\mathcal V}^2,\qquad |\mathfrak a_{k,a,R}(u,v)|\le C\|u\|_{\mathcal V}\|v\|_{\mathcal V}.$$
In particular, the defining traces and boundary pairing are finite, the form is continuous, $\mathcal V_{a,R}$ is a Hilbert direct sum, and finite-degree truncations converge in its norm.

## Facts & Assumptions

**Given:** The annulus $0<a<R$, fixed $k>0$, and the energy space and form [F1].

[F1] [[def-pe18-spherical-dtn-truncated-variational-problem]]: $u_\ell\in H^1((a,R);\mathcal H_\ell)$ with squared energy weighted by $r^2$ and $1+\ell(\ell+1)$; the boundary coefficient satisfies $\tau_\ell=k h_\ell'(kR)/h_\ell(kR)$.

[F2] [[thm-pe18-exact-spherical-dtn-map-on-smooth-data]]: for fixed $k,R$, $|\tau_\ell|\le k+(\ell+1)/R$.


## Proof

**Given:** $u,v\in\mathcal V_{a,R}$ and [F1]–[F2].

1.1 Each $H^1((a,R);\mathcal H_\ell)$ is complete because $\mathcal H_\ell$ is finite dimensional. A Cauchy sequence in the weighted square-sum norm is Cauchy in each coordinate; take its coordinatewise $H^1$ limits. For every finite number of coordinates the squared norm of the limit is bounded by the liminf of the sequence norms, so the coordinatewise limit has finite total norm; applying the same argument to differences shows convergence in the sum norm. Tails of the defining convergent nonnegative series tend to zero, so finite-degree truncations are dense. For any scalar or finite-dimensional Hilbert-valued $w\in H^1(a,R)$, absolute continuity and $|w(R)|^2-|w(t)|^2=2\operatorname{Re}\int_t^R\langle w'(s),w(s)\rangle ds$ give, after averaging $t$ over $[a,R]$ and applying Cauchy–Schwarz, $\|w(R)\|^2\le(R-a)^{-1}\int_a^R\|w\|^2dr+2\left(\int_a^R\|w\|^2dr\right)^{1/2}\left(\int_a^R\|w'\|^2dr\right)^{1/2}.$ Using $2(1+\ell)AB\le A^2+(1+\ell)^2B^2$, $(1+\ell)^2\le2(1+\ell(\ell+1))$, and $a^2\le r^2\le R^2$, this yields $ (1+\ell)\|w(R)\|^2\le C_{a,R}\int_a^R\left(r^2\|w'\|^2+(1+\ell(\ell+1))\|w\|^2\right)dr.$ Replacing $r$ by $a+R-r$ proves the same inequality at the inner endpoint. Summing with $w=u_\ell$ proves the weighted trace estimate. [F1, algebra]

2.1 The volume terms of $\mathfrak a$ are bounded by a constant times $\|u\|_{\mathcal V}\|v\|_{\mathcal V}$ because $r$ lies in $[a,R]$ and $k$ is fixed. By [F2], $|\tau_\ell|\le C_{k,R}(1+\ell)$. Cauchy–Schwarz over degrees and the trace estimate from step 1.1 give $\sum_\ell |\tau_\ell\langle u_\ell(R),v_\ell(R)\rangle|\le C\left(\sum_\ell(1+\ell)\|u_\ell(R)\|_2^2\right)^{1/2}\left(\sum_\ell(1+\ell)\|v_\ell(R)\|_2^2\right)^{1/2}\le C\|u\|_{\mathcal V}\|v\|_{\mathcal V}.$ Thus the boundary series is absolutely convergent and the whole form is continuous. [F1, F2, step 1.1, algebra] ∎
