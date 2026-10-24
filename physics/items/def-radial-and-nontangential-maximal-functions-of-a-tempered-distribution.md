---
id: def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution
kind: definition
title: "Radial and nontangential maximal functions of a tempered distribution"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-countable-choice, def-schwartz-space-and-its-seminorms, def-tempered-distribution, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, thm-tempered-convolution-is-smooth-with-polynomial-growth, lem-schwartz-dilations-preserve-schwartz-space]
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
      locator: "ch. I, section 1.1.1, printed pp. 3-4 (PDF pp. 11-12): isotropic dilation, radial maximal function, nontangential maximal function"
    - title: "Martin Hiserote, A Characterization of Anisotropic H^1(R^N) by Smooth Homogeneous Multipliers (PhD dissertation, University of Oregon, 2019)"
      url: "https://scholarsbank.uoregon.edu/server/api/core/bitstreams/2549164c-324f-46dc-9a42-07e76fc68fc0/content"
      locator: "ch. I, section 1.1, Definition 4, printed p. 3 (PDF p. 10): $M_\\varphi(f)(x)=\\sup_{|x-y|<t}|(f*\\varphi_t)(y)|$"
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "section 1.1, printed p. 60 (PDF p. 2): $M_\\varphi f$ and $M^*_{\\varphi,a}f$ with aperture $a\\ge1$"
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 1, pp. 15-16: $M_\\varphi f(x)=\\sup_{t>0}|\\varphi_t*f(x)|$"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Fix an integer $n\ge1$, work with $\mathcal S(\mathbb R^n)$ and
$\mathcal S'(\mathbb R^n)$ of [[def-schwartz-space-and-its-seminorms]] and
[[def-tempered-distribution]], and let $\varphi\in\mathcal S(\mathbb R^n)$
satisfy $\int_{\mathbb R^n}\varphi\ne0$. For $t>0$ write
$$\varphi_t(x)=t^{-n}\varphi(x/t),\qquad x\in\mathbb R^n .$$
For $f\in\mathcal S'(\mathbb R^n)$ define the **radial maximal function**
$$M^0_\varphi f(x)=\sup_{t>0}|(f*\varphi_t)(x)|,\qquad x\in\mathbb R^n,$$
and, for an **aperture** $a\ge1$, the **nontangential maximal function**
$$M^{*,a}_\varphi f(x)=\sup_{t>0}\ \sup_{|y-x|\le at}|(f*\varphi_t)(y)|, \qquad x\in\mathbb R^n .$$

Each convolution is the distributional convolution of
[[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]]. It is
well defined: $x\mapsto t^{-n}\varphi(x/t)$ again lies in
$\mathcal S(\mathbb R^n)$ by
[[lem-schwartz-dilations-preserve-schwartz-space]], so the pairing of $f$ with
the reflected translate of $\varphi_t$ exists at every point. Its values are
smooth and of polynomial growth by
[[thm-tempered-convolution-is-smooth-with-polynomial-growth]], so each function
$x\mapsto(f*\varphi_t)(x)$ is finite at every point and the suprema displayed
above are suprema of a nonempty family of real numbers; the radial case is the
diagonal $y=x$ of the nontangential case, so
$M^0_\varphi f\le M^{*,a}_\varphi f$ for every $a\ge1$.

The aperture convention is $|y-x|\le at$ with the closed cone, and the
normalisation $t^{-n}$ is the one of the sources. Under Countable Choice
([[def-countable-choice]]), each $\varphi_t$ has the same integral as
$\varphi$ by [[lem-schwartz-dilations-preserve-schwartz-space]]. This additional
mass identity uses that supplier's stated choice premise. No measurability of
$M^0_\varphi f$ or $M^{*,a}_\varphi f$ is asserted here, and the pointwise
convolution and maximal-function definitions use no choice principle; the finiteness of the supremum at a point
is not claimed, since the family $\{(f*\varphi_t)(y)\}$ need not be bounded
a priori. Apertures $a>1$ and the grand maximal function are treated in the
following items.
