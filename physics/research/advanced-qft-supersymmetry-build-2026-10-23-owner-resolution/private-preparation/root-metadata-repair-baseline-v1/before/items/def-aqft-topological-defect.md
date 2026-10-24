---
id: def-aqft-topological-defect
kind: definition
title: "Topological defect insertion in a specified model"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-defects-and-topological-operators
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "A definition for a named field-theory or quantum model whose admissible configurations and correlation functionals are specified; it asserts neither existence of a general continuum QFT nor realization of any proposed defect."
sources:
  references:
    - title: "Davide Gaiotto, Anton Kapustin, Nathan Seiberg, and Brian Willett, Generalized Global Symmetries"
      url: "https://arxiv.org/pdf/1412.5148"
      locator: "§1 Introduction, PDF pp. 1–3, especially equations (1.1)–(1.2): codimension-(q+1) operator support, correlation-function invariance under deformation, and group fusion."
    - title: "Nils Carqueville, Lecture Notes on 2-Dimensional Defect TQFT"
      url: "https://arxiv.org/pdf/1607.05747"
      locator: "§2.1, PDF pp. 5–8: oriented defect bordisms, region and defect labels, isotopy classes, and the functorial correlator assignment in the explicitly two-dimensional TQFT setting."
verification:
  precheck: n/a
---

## Definition

Fix an integer $d\ge1$ and a smooth $d$-manifold $M$, possibly with boundary. Fix the metric and signature, orientation and any time orientation, the geometric background bundles or lifts required by the model, and the boundary conditions. A **selected model** $\mathcal T$ on $M$ consists of a specified configuration space $\mathcal C_{\mathcal T}(M)$ of fields, including each field bundle, regularity class, and admissible boundary behavior; a specified collection of local observables and their supports; a set $\mathcal A_{\mathcal T}$ of admissible finite observable lists with boundary data; a declared value space $\mathcal V_{\mathcal T}$ (for example, $\mathbb C$ or a specified distribution space); and a normalized correlation functional $C_{\mathcal T}:\mathcal A_{\mathcal T}\to\mathcal V_{\mathcal T}$. The model also fixes its unit system, action and charge normalizations, and any regulator, measure, or renormalization prescription used to define $C_{\mathcal T}$. These are model inputs: this definition does not construct them or assume a general interacting continuum theory exists.

A **defect insertion** in $\mathcal T$ is data $(j,\lambda)$ where $j:\Sigma\hookrightarrow M^\circ$ is a smooth embedding of a manifold $\Sigma$ without boundary whose image is closed in the interior $M^\circ=M\setminus\partial M$, and $\lambda$ is the model-specified local field, operator, or boundary-condition data supported on $j(\Sigma)$. Its codimension is $d-\dim\Sigma$. The model must define the modified correlator $C_{\mathcal T}(D_{j,\lambda};O_1,\ldots,O_n)$ for every allowed list of other insertions $O_j$. An orientation, coorientation, or framing is included in $\lambda$ whenever the model needs it. A defect network is a finite list of such strata with a specified incidence relation; each allowed meeting stratum has a stated order of incident labels and a local junction operator inserted by the model. A list of strata or a picture without this field and junction data is not a defect insertion.

An **isotopy** of this insertion is a smooth family of embeddings $j_t:\Sigma\hookrightarrow M^\circ$, $t\in[0,1]$, that transports all included orientation, coorientation, framing, and junction data, leaves the boundary conditions fixed, and keeps every support disjoint from every other insertion throughout the deformation. The insertion is **topological in $\mathcal T$** if, for every admissible list of other insertions and boundary data and every such isotopy, the model-defined correlators satisfy

$$C_{\mathcal T}(D_{j_0,\lambda_0};O_1,\ldots,O_n)=C_{\mathcal T}(D_{j_1,\lambda_1};O_1,\ldots,O_n).$$

This is a property to verify for the specified model and insertion, not an automatic consequence of assigning a defect label or drawing a crossing. No physical quantity with units is introduced here; all dimensional quantities and normalizations remain those declared by $\mathcal T$.

## Definition references

[Gaiotto, Kapustin, Seiberg, and Willett, §1, PDF pp. 1–3](https://arxiv.org/pdf/1412.5148)

[Carqueville, §2.1, PDF pp. 5–8](https://arxiv.org/pdf/1607.05747)
