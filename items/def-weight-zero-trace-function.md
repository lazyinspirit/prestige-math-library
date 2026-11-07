---
id: def-weight-zero-trace-function
kind: definition
title: "Weight-Zero Trace Function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-l-adic-middle-extension-sheaf-over-finite-field
  - def-frobenius-trace-on-a-constructible-stalk
  - def-pointwise-purity-and-weights-of-an-l-adic-sheaf
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §§2.1–2.3"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "PDF pp. 5–8; trace convention and pointwise weight-zero condition"
    - title: "Pierre Deligne, *La conjecture de Weil II*, §1.2"
      url: "https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf"
      locator: "printed p. 143; pointwise weights under geometric Frobenius"
verification:
  precheck: pending
---

## Definition

Fix a prime $p$, a prime $\ell\ne p$, and an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$. Let $\mathcal M$ be a constructible middle-extension $\overline{\mathbb Q}_\ell$-sheaf on $\mathbb P^1_{\mathbb F_p}$, lisse on its maximal open $U$. Its trace function on $\mathbb F_p$ is
$$t_{\mathcal M}(x)=\iota\!\left(\operatorname{Tr}(\operatorname{Frob}^{\rm geom}_x\mid\mathcal M_{\bar x})\right),\qquad x\in\mathbb F_p,$$
where $\operatorname{Frob}^{\rm geom}$ is inverse arithmetic Frobenius on the geometric stalk. In the Fouvry–Kowalski–Michel weight-zero convention, $\mathcal M$ is pointwise of weight zero when its restriction to $U$ is pointwise pure of weight zero and for every closed boundary point $y$ every geometric-Frobenius eigenvalue on $\mathcal M_{\bar y}$ has complex absolute value at most $1$. A weight-zero trace function means the function $t_{\mathcal M}$ of such a sheaf; in particular $|t_{\mathcal M}(x)|\le\operatorname{rank}(\mathcal M|_U)$ at every $x\in\mathbb F_p$.

## Definition references

[[def-l-adic-middle-extension-sheaf-over-finite-field|ℓ-adic middle-extension sheaf over a finite field]]

[[def-frobenius-trace-on-a-constructible-stalk|Geometric-Frobenius trace on a constructible stalk]]

[[def-pointwise-purity-and-weights-of-an-l-adic-sheaf|Pointwise purity and weights of an l-adic sheaf]]

## Remarks

Purity on the lisse locus and the displayed boundary eigenvalue bound are the hypotheses of this weight-zero convention. They are not a replacement for genuine finite-filtration mixedness. The tensor mixedness bridge and ramified dual-trace statement are separate held suppliers. The all-points rank bound also uses the middle-extension boundary-stalk rank comparison; that geometric interface is not proved by this definition.
