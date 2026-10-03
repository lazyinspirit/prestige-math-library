---
id: def-normalization-defect-of-reduced-curve
kind: definition
title: "Normalization defect delta of a reduced curve"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-normalization-reduced-curve-exists-finite
  - def-coherent-module-scheme
  - thm-proper-pushforward-coherent
  - lem-curve-closed-subsets-finite
  - def-euler-characteristic-coherent-sheaf
  - def-reduction-of-scheme
  - def-axiom-of-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Chapter 8 resolution of singularities and normalization, pp. 194-197"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "curve normalization and singular point theory in Chapter 21, pp. 431-460"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and
let $C$ be a reduced curve of finite type over $k$: a $k$-scheme of finite
type with $C=C_{\mathrm{red}}$ ([[def-reduction-of-scheme]]) and pure
dimension one, proper over $k$ in the applications. Let

$$\nu\colon\widetilde C\longrightarrow C$$

be the finite normalization of [[thm-normalization-reduced-curve-exists-finite]],
and let

$$\mathcal Q_C:=\operatorname{coker}\bigl(\mathcal O_C\longrightarrow\nu_*\mathcal O_{\widetilde C}\bigr)$$

be the **normalization defect sheaf**, a coherent $\mathcal O_C$-module
([[def-coherent-module-scheme]]). The **normalization defect** of $C$ is

$$\delta_k(C):=\dim_k H^0(C,\mathcal Q_C),$$

the $k$-dimension of its space of global sections, a nonnegative integer.

The following comments record why the definition is meaningful. Since $\nu$
is finite, $\nu_*\mathcal O_{\widetilde C}$ is a coherent
$\mathcal O_C$-module and so is its quotient $\mathcal Q_C$; this is the
finite-pushforward case of [[thm-proper-pushforward-coherent]], and also
follows directly from the affine-local description of a finite morphism. The
stalks of $\mathcal Q_C$ vanish exactly at the points $p$ at which
$\mathcal O_{C,p}\to(\nu_*\mathcal O_{\widetilde C})_p$ is an isomorphism,
so $\mathcal Q_C$ is supported on the non-normal locus of $C$: a closed
subset of the Noetherian one-dimensional space $C$ containing no generic
point of $C$, because the local ring of the reduced curve $C$ at a generic
point is a field and hence normal. Such a closed set is a finite set of
closed points; componentwise this is the finiteness of
[[lem-curve-closed-subsets-finite]]. Consequently $H^0(C,\mathcal Q_C)$ is
the direct sum of the finitely many stalk contributions $\mathcal Q_{C,p}$
over the support of $\mathcal Q_C$, each of which is a finite-dimensional
$k$-vector space because $\mathcal Q_{C,p}$ has finite length over the
Noetherian local ring $\mathcal O_{C,p}$ and the residue field
$\kappa(p)$ is finite over $k$. Thus $\delta_k(C)$ is a well-defined
nonnegative integer. When $C$ is proper over $k$, the same finiteness is the
statement of [[def-euler-characteristic-coherent-sheaf]] for the coherent
sheaf $\mathcal Q_C$.

## Remarks

- The definition uses only the finite normalization $\nu$, its pushforward
  $\nu_*\mathcal O_{\widetilde C}$, and $H^0$ of the cokernel; no choice of
  a resolution of singularities or of a blowup sequence enters.
- The defect can be read off pointwise as a sum of local contributions; the
  identity with the Euler characteristic difference
  $\chi(\mathcal O_{\widetilde C})-\chi(\mathcal O_C)$ and the weighted sum
  of local lengths are proved later on this page, and are not part of the
  definition.
