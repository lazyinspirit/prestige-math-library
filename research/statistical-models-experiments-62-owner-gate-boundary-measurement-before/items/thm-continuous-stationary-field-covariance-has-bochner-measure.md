---
id: thm-continuous-stationary-field-covariance-has-bochner-measure
kind: theorem
title: "Bochner spectral measure of a continuous stationary field covariance"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-random-field-stationarity-covariance-and-variogram
  - lem-random-field-covariance-kernel-is-positive-semidefinite
  - def-positive-definite-function-on-an-abelian-group
  - thm-bochner-theorem-for-lca-groups
  - def-fourier-transform-on-an-lca-group
  - def-pontryagin-dual-and-compact-open-topology
  - def-axiom-of-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf"
    - title: "Evgeny Spodarev, Random Fields I: Lecture Notes (Draft, 2009)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/allgemein/zuloeschen/Random_Field.pdf"
    - title: "Hermine Biermé, Introduction to random fields and scale invariance: Lecture I (2016)"
      url: "https://www.lebesgue.fr/sites/default/files/attach/Bierme_Lecture1.pdf"
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let
$G=(\mathbb R^d,+)$, $d\ge1$, with its usual locally compact Hausdorff
topology, and let $X=(X(t))_{t\in\mathbb R^d}$ be a real wide-stationary
field whose covariance function
$$C(h):=\operatorname{Cov}(X(s),X(s+h))$$
is continuous on $\mathbb R^d$. There is a unique finite positive Radon measure
$\mu$ on the Pontryagin dual $\widehat G$ such that
$$C(h)=\int_{\widehat G}\chi(h)\,\mu(d\chi)\qquad(h\in\mathbb R^d),$$
and $\mu(\widehat G)=C(0)$. This is a measure representation and makes no
density assertion.

## Facts & Assumptions

**Given:** AC, DC, the usual locally compact Hausdorff additive group
$G=\mathbb R^d$, and a real wide-stationary field on $\mathbb R^d$ with
continuous covariance function $C$.

[A1] AC says every family of nonempty sets has a choice function.
[[def-axiom-of-choice]]

[A2] DC supplies an $\mathbb N$-indexed chain for every total relation with a
prescribed starting point. [[def-dependent-choice]]

[F1] [[def-random-field-stationarity-covariance-and-variogram]]: wide
stationarity means square-integrable coordinates, one constant mean, and
$\operatorname{Cov}(X(s),X(t))=C(t-s)$.

[F2] [[lem-random-field-covariance-kernel-is-positive-semidefinite]]: every
finite real covariance matrix of field coordinates is symmetric and
positive semidefinite.

[F3] [[def-positive-definite-function-on-an-abelian-group]]: a function on an
abelian group is positive definite when every finite complex quadratic form
with conjugated coefficients is a nonnegative real number.

[F4] [[def-fourier-transform-on-an-lca-group]] and
[[def-pontryagin-dual-and-compact-open-topology]]: for a locally compact
Hausdorff abelian group $G$, $\widehat G$ is its group of continuous
circle-valued characters with the compact-open topology, and $\chi(h)$ is the
evaluation pairing.

[F5] [[thm-bochner-theorem-for-lca-groups]]: under AC and DC, every continuous
positive-definite function on an LCA group has a unique finite positive
Radon representing measure on its Pontryagin dual, with total mass equal to
its value at zero.

**Axiom use:** AC and DC are used in step 3.1 only through the LCA Bochner supplier [F5]. This theorem gives no density, path-continuity, or joint-measurability conclusion.

## Proof

**Given:** AC, DC, $G=\mathbb R^d$, and the wide-stationary field with
continuous covariance in the statement.

1.1 By wide stationarity [F1], $C(h)=\operatorname{Cov}(X(0),X(h))$ and $C(-h)=\operatorname{Cov}(X(h),X(0))$. Covariance symmetry in [F2] gives $C(-h)=C(h)$. For any finite $h_1,\ldots,h_n\in\mathbb R^d$, the matrix $$M_{ij}:=C(h_i-h_j)$$ is the covariance matrix of $(X(h_1),\ldots,X(h_n))$: indeed, $\operatorname{Cov}(X(h_i),X(h_j))=C(h_j-h_i)=C(h_i-h_j)$ by evenness. Thus $M$ is real symmetric positive semidefinite by [F2]. [F1, F2, given, algebra]

2.1 Write any complex coefficients as $z_i=u_i+iv_i$ with $u_i,v_i\in\mathbb R$. Since $M$ is real symmetric, $$\sum_{i,j}z_i\overline{z_j}M_{ij}=\sum_{i,j}u_i u_jM_{ij}+\sum_{i,j}v_i v_jM_{ij}\ge0.$$ The imaginary cross terms cancel after interchanging $i$ and $j$, and each real quadratic form is nonnegative by step 1.1. Therefore $C:G\to\mathbb C$ is positive definite in the complex-coefficient sense of [F3]. [F2, F3, step 1.1, algebra]

3.1 The given covariance is continuous, so it satisfies the continuity hypothesis of [F5]. The given usual topology on $G$ is locally compact, Hausdorff, and abelian, so [F4] identifies the dual and its evaluation pairing required there. Applying [F5] with the hypotheses [A1] and [A2] gives a unique finite positive Radon measure $\mu$ on $\widehat G$ with the displayed representation and $\mu(\widehat G)=C(0)$. The zero-covariance case is included: then the mass is zero and uniqueness gives the zero measure. [A1, A2, F4, F5, given, step 2.1] ∎