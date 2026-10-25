---
id: def-residue-field-scheme-point
kind: definition
title: "The residue field at a point of an affine scheme"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-spectrum-with-structure-sheaf-locally-ringed, thm-stalk-structure-sheaf-prime-localization, cor-residue-field-of-a-localisation-at-a-prime]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Section 26.5"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Definition

For a point $x$ of a locally ringed space, put
$\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$. If $x=\mathfrak p$ in an affine
spectrum, the canonical isomorphism
$\mathcal O_{X,\mathfrak p}\cong A_{\mathfrak p}$ carries
$\mathfrak m_{\mathfrak p}$ to $\mathfrak pA_{\mathfrak p}$ and therefore
induces canonical field isomorphisms
$$\kappa(\mathfrak p)\cong A_{\mathfrak p}/\mathfrak pA_{\mathfrak p}\cong\operatorname{Frac}(A/\mathfrak p).$$
