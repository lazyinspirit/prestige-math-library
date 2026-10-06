---
id: "def-canonical-resolution-invariants"
kind: "definition"
title: "Canonical resolutions with invariants of a marked ideal"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 5
deps:
  - "def-equivalence-of-marked-ideals"
  - "def-locally-finite-type-and-finite-type-morphism"
  - "def-marked-ideal"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "def-simple-normal-crossings-divisors"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
    - title: "Herwig Hauser, The Hironaka theorem on resolution of singularities (or: A proof we always wanted to understand), Bull. Amer. Math. Soc. 40 (2003) 323-403"
      url: "https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf"
---

## Definition

Let $(\mathcal I,E,\mu)$ be a marked ideal on a smooth $K$-scheme $X$ of finite type ([[def-marked-ideal]]).
A canonical resolution of $(\mathcal I,E,\mu)$ is a resolution $(X_i)_{0\le i\le m}$, $X_0=X$, together with functions
$$\operatorname{inv}\colon\operatorname{supp}(\mathcal I_i,E_i,\mu)\to\mathbb Q_{\ge0}\times\mathbb Q_{\ge0}^{\infty},\qquad \nu\colon\operatorname{supp}(\mathcal I_i,E_i,\mu)\to\mathbb Q_{\ge0},\qquad \rho\colon\operatorname{supp}(\mathcal I_i,E_i,\mu)\to\operatorname{Sub}(E_i),$$
$\mathbb Q_{\ge0}^{\infty}$ being the lexicographically ordered set of infinite sequences in $\mathbb Q_{\ge0}$ with finitely many nonzero entries, such that for every $i$:
(i) the centers $C_i$ of the blow-ups are regular and are the locus where the pair $(\operatorname{inv},\rho)$ attains its maximum, in fact components of the maximal locus of $\operatorname{inv}$;
(ii) $\operatorname{inv},\nu,\rho$ are upper semicontinuous on each support;
(iii) for $x\in\operatorname{supp}(\mathcal I_{i+1},E_{i+1},\mu)$ with $\sigma_{i+1}(x)\in C_i$ one has $\operatorname{inv}(x)<\operatorname{inv}(\sigma_{i+1}(x))$ or $\operatorname{inv}(x)=\operatorname{inv}(\sigma_{i+1}(x))$ and $\nu(x)<\nu(\sigma_{i+1}(x))$, while for $\sigma_{i+1}(x)\notin C_i$ one has $\operatorname{inv}(x)=\operatorname{inv}(\sigma_{i+1}(x))$, $\nu(x)=\nu(\sigma_{i+1}(x))$ and $\rho(x)=\rho(\sigma_{i+1}(x))$;
(iv) for every etale morphism $\varphi\colon X'\to X$ the induced sequence $\varphi^*(X_i)$ is an extension of the canonical resolution of $\varphi^*(\mathcal I,E,\mu)$ and the invariants agree, $\operatorname{inv}(\varphi_i(x'))=\operatorname{inv}(x')$, $\nu(\varphi_i(x'))=\nu(x')$ and $\rho(\varphi_i(x'))=\rho(x')$.
Order $\operatorname{Sub}(E_i)$ by writing the labels of a subset in increasing order in the fixed total boundary order, padding with zeros, and comparing the resulting sequences lexicographically, with $0$ below every divisor label. An empty subset is the all-zero sequence. This supplies the order used for upper semicontinuity and maxima of $\rho$; it does not introduce a new choice of boundary order.

The invariant $\operatorname{inv}$ takes values in the lexicographic order; the resolution is canonical in the sense that it is uniquely determined by the invariants, which are intrinsic.
