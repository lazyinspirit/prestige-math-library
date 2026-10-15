---
id: thm-banach-gaussian-covariance-rkhs-is-well-defined
kind: theorem
title: "The Banach Gaussian covariance and RKHS construction is well-defined"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-banach-gaussian-covariance-operator-and-rkhs
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - thm-fernique-integrability-for-separable-banach-gaussian-law
  - lem-borel-map-into-separable-banach-is-strongly-measurable
  - thm-bochner-integrability-criterion
  - lem-bochner-integral-norm-inequality
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - cor-relative-hahn-banach-dual-norming
  - def-axiom-of-choice
  - thm-hahn-banach-dominated-extension
  - def-hahn-banach-extension-principle-relative
  - cor-cauchy-schwarz-for-random-variables
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC supplies HB for the continuous-dual separation used to prove injectivity. No basis of the Banach dual is chosen."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors (2008)"
      url: "https://arxiv.org/pdf/0806.3024"
      locator: "Section 2.1, printed pp. 1436–1437: covariance operator and quotient RKHS construction."
    - title: "A. Lunardi, M. Miranda, and D. Pallara, Infinite Dimensional Analysis"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/Lectures.pdf"
      locator: "Section 3.1: covariance bilinear form and canonical embedding of the completed RKHS."
---

## Statement

Assume AC. Under the hypotheses and notation of
[[def-banach-gaussian-covariance-operator-and-rkhs]], each $C\ell$ exists as a
Bochner integral; $Q$ is a finite positive-semidefinite bilinear form;
$N=\{\ell:Q(\ell,\ell)=0\}$ is its nullspace; and the induced map from the
completion of $B^*/N$ to $B$ is continuous and injective. Thus the definition
identifies a Hilbert space of shifts in $B$.

## Facts & Assumptions

[A1] AC is assumed for Fernique integrability and supplies HB for the dual-separation step ([[def-axiom-of-choice]], [[thm-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

[F1] Fernique integrability gives $E\|W\|^2<\infty$
([[thm-fernique-integrability-for-separable-banach-gaussian-law]]).

[F2] A Borel map into a separable Banach space is strongly measurable
([[lem-borel-map-into-separable-banach-is-strongly-measurable]]).

[F3] A strongly measurable Banach-valued function is Bochner integrable
when the integral of its norm is finite; its integral norm is bounded by that
scalar integral ([[thm-bochner-integrability-criterion]],
[[lem-bochner-integral-norm-inequality]]).

[F4] Bounded linear maps commute with Bochner integration
([[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[F5] Continuous linear functionals separate points of a normed space
([[cor-relative-hahn-banach-dual-norming]]).


[F6] Cauchy–Schwarz bounds the product of two square-integrable real random variables ([[cor-cauchy-schwarz-for-random-variables]]).

## Proof


**Given:** AC and a centered Borel Gaussian random element $W$ in a real separable Banach space $B$, with $C,Q,N,H$ as in the Definition.

1.1 For $\ell\in B^*$, the map $\omega\mapsto\ell(W(\omega))W(\omega)$ is Borel as the composition of $W$ with the continuous map $x\mapsto\ell(x)x$. It is strongly measurable by [F2], and $\|\ell(W)W\|\le\|\ell\|\|W\|^2$ is integrable by [F1]. Hence [F3] defines $C\ell=E[\ell(W)W]$ as a Bochner integral. [A1, F1, F2, F3, given]

2.1 By [F1], $E|\ell(W)|^2\le\|\ell\|^2E\|W\|^2<\infty$ for every $\ell\in B^*$; Cauchy–Schwarz [F6] therefore makes $E|m(W)\ell(W)|$ finite. Applying $m\in B^*$ to the Bochner integral using [F4] gives $m(C\ell)=E[m(W)\ell(W)]$. Thus $Q(\ell,m)=m(C\ell)$ is a finite symmetric bilinear form, nonnegative on the diagonal. Again by [F6], $|Q(\ell,m)|\le Q(\ell,\ell)^{1/2}Q(m,m)^{1/2}$, so $Q(\ell,\ell)=0$ implies $Q(\ell,m)=0$ for every $m$; therefore $N$ is the radical of $Q$ and the quotient form is an inner product. [F1, F4, F6, step 1.1, algebra]

3.1 If $\ell\in N$, step 2.1 gives $m(C\ell)=0$ for every $m$, so $C\ell=0$ by [F5]. Conversely, if $C\ell=0$, taking $m=\ell$ in step 2.1 gives $Q(\ell,\ell)=0$, hence $\ell\in N$. Therefore $[\ell]\mapsto C\ell$ is well-defined and injective on $B^*/N$. [A1, F5, step 2.1]

4.1 By [F3] and [F6], $\|C\ell\|\le E(|\ell(W)|\|W\|) \le Q(\ell,\ell)^{1/2}(E\|W\|^2)^{1/2}.$ So the map on the quotient is bounded and extends uniquely to its Hilbert completion because $B$ is complete. For every $m\in B^*$, the identity $m(C\ell)=\langle[\ell],[m]\rangle_H$ from step 2.1 extends by continuity to $m(iu)=\langle u,[m]\rangle_H$. If $iu=0$, then $u$ is orthogonal to the dense subspace $B^*/N$, so $u=0$. The extension is injective, proving all claims. [F1, F3, F6, step 2.1, step 3.1, algebra] ∎

