---
id: def-pe18-spherical-dtn-truncated-variational-problem
kind: definition
title: Exact-DtN truncated modal variational formulation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  [
    def-pe18-exterior-helmholtz-problem,
    def-pe18-exact-spherical-dtn-map,
    thm-pe18-exact-spherical-dtn-map-on-smooth-data
  ]
justified_by: [ lem-pe18-modal-trace-and-form-continuity ]
proof_strategy: not-applicable
axiom_use: "No axiom is used; the coefficient energy space is a countable
  Hilbert direct sum and the data are smooth."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 10: Bessel
        Functions"
      url: "https://dlmf.nist.gov/10"
    - title: "Plamen Stefanov, Scattering and Inverse Scattering in R^n, Appendix 1,
        §§1.1–1.2"
      url: "https://www.math.purdue.edu/~stefanov/publications/SCATTERING.pdf"
verification:
  precheck: n/a
---

## Definition

Fix $0<a<R$ and $k>0$. The coefficient energy space $\mathcal V_{a,R}$ consists of sequences $u=(u_\ell)_{\ell\ge0}$ with $u_\ell\in H^1((a,R);\mathcal H_\ell)$ and
$$\|u\|_{\mathcal V}^2=\sum_{\ell=0}^\infty\int_a^R\left(r^2\|u_\ell'(r)\|_2^2+(1+\ell(\ell+1))\|u_\ell(r)\|_2^2\right)dr<\infty.$$
For smooth inner data $f$ on $\mathbb S^2$, let $f_\ell$ be its projection onto $\mathcal H_\ell$ and define the affine trial space $\mathcal V_f=\{u\in\mathcal V_{a,R}:u_\ell(a)=f_\ell\text{ for every }\ell\}$ and test space $\mathcal V_0=\{v\in\mathcal V_{a,R}:v_\ell(a)=0\text{ for every }\ell\}$. Traces and continuity of the following form are established in [[lem-pe18-modal-trace-and-form-continuity]]. With the inner product linear in its first argument, set
$$\mathfrak a_{k,a,R}(u,v)=\sum_{\ell=0}^\infty\int_a^R\left(r^2\langle u_\ell',v_\ell'\rangle+(\ell(\ell+1)-k^2r^2)\langle u_\ell,v_\ell\rangle\right)dr-R^2\sum_{\ell=0}^\infty\tau_\ell(k,R)\langle u_\ell(R),v_\ell(R)\rangle.$$
The exact-DtN variational problem is to find $u\in\mathcal V_f$ such that $\mathfrak a_{k,a,R}(u,v)=0$ for every $v\in\mathcal V_0$. The assigned theorem on this page proves existence and uniqueness.
