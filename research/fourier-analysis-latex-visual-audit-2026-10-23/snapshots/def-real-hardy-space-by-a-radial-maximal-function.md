---
id: def-real-hardy-space-by-a-radial-maximal-function
kind: definition
title: "The real Hardy space $H^p$ defined by a radial maximal function"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution, lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable, lem-euclidean-balls-have-positive-finite-lebesgue-measure, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm, def-countable-choice, lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "ch. I, section 1.1.1, printed pp. 4-5: $f\\in H^p$ iff $M^0_\\Phif\\in L^p$, with $\\|f\\|_{H^p}\\simeq\\|M_Ff\\|_p\\simeq\\|M_\\Phif\\|_p$"
    - title: "Martin Hiserote, A Characterization of Anisotropic H^1(R^N) by Smooth Homogeneous Multipliers (PhD dissertation, University of Oregon, 2019)"
      url: "https://scholarsbank.uoregon.edu/server/api/core/bitstreams/2549164c-324f-46dc-9a42-07e76fc68fc0/content"
      locator: "Definition 4 and Definition 5, printed pp. 3-4: $\\|f\\|_{H^p}=\\|M_\\varphi f\\|_p$ and independence of $\\varphi$"
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "Definition 1, printed p. 60 (PDF p. 2): the maximal-function definition of $H^p$"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Fix $n\ge1$, $0<p<\infty$ and an admissible kernel
$\varphi\in\mathcal S(\mathbb R^n)$ with $\int_{\mathbb R^n}\varphi\ne0$, and
let $M^0_\varphi f$ be the radial maximal function of
[[def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution]].
The **real Hardy space** is
$$H^p(\mathbb R^n)=\{f\in\mathcal S'(\mathbb R^n):M^0_\varphi f\in L^p(\mathbb R^n)\},$$
with the functional
$$\|f\|_{H^p}:=\|M^0_\varphi f\|_{L^p(\mathbb R^n)} .$$
Here $L^p$ is the quotient by almost-everywhere null functions of
[[def-l-p-space-as-a-quotient-by-null-functions]] with the complex scalar
conventions of [[def-complex-lp-and-euclidean-test-function-conventions]], and
$M^0_\varphi f$ is the Borel measurable extended-real function supplied by
[[lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable]];
the membership condition includes that $M^0_\varphi f$ is finite almost
everywhere and that its class lies in $L^p$. Since $M^0_\varphi f\ge0$, the
functional takes values in $[0,\infty]$ and is finite on $H^p$; the zero
distribution lies in $H^p$ with $\|0\|_{H^p}=0$. Under Countable Choice, for
$p\ge1$ the functional $\|\cdot\|_{H^p}$ is a norm. For $0<p<1$ it is
$p$-subadditive. No Banach-space duality of $H^p$ with a normed dual is
asserted here below $p=1$. The kernel
$\varphi$ is held fixed in the definition; the
maximal-characterisation theorem on this page shows that different admissible
kernels give the same space with equivalent quasi-norms, so that the notation
$H^p(\mathbb R^n)$ does not depend on the choice up to equivalence. No choice
principle is used in the definition itself.

## Norm properties

The set defining $H^p$ is specified without a choice principle. Under Countable
Choice, positive definiteness holds for every $p>0$. If $\|f\|_{H^p}=0$, then
$M^0_\varphi f=0$ almost everywhere. Lower semicontinuity of the radial
maximal function makes it identically zero: if it has a positive value, one
of its open strict superlevel sets contains a Euclidean ball, which has
positive measure under Countable Choice by
[[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]. Thus
$f*\varphi_t=0$ for
every $t>0$ at every point. Apply
[[lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions]]
to $\Phi=\varphi/(\int\varphi)$ to conclude $f=0$ in $\mathcal S'$. The
lower-semicontinuity input is
[[lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable]],
and the approximate-identity limit is as stated. For $p\ge1$, homogeneity and
the triangle inequality follow from $M^0_\varphi(f+g)\le
M^0_\varphi f+M^0_\varphi g$ and the complex $L^p$ norm properties
[[thm-complex-holder-minkowski-and-the-quotient-norm]], so the functional is a
norm.

For $0<p<1$, pointwise sublinearity and $(u+v)^p\le u^p+v^p$ for $u,v\ge0$
give $\|f+g\|_{H^p}^p\le\|f\|_{H^p}^p+\|g\|_{H^p}^p$. The $H^p$ membership
definition itself uses no choice principle.
