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

Fix an integer $d\ge1$ and a smooth $d$-manifold $M$, possibly with boundary. Fix the metric and signature, orientation and any time orientation, the geometric background bundles or lifts required by the model, and the boundary conditions. A **selected model** $\mathcal T$ on $M$ consists of a specified configuration space $\mathcal C_{\mathcal T}(M)$ of fields, including each field bundle, regularity class, and admissible boundary behavior; a collection of local observables with their types and supports; a set $\mathcal B_{\mathcal T}$ of admissible combined background and boundary data; and a set $\mathcal A_{\mathcal T}$ of admissible complete insertion inputs. An element of $\mathcal A_{\mathcal T}$ records data $b\in\mathcal B_{\mathcal T}$ and a finite ordered list whose entries are local observable insertions or other model-declared insertion data, together with the model's admissibility conditions on supports and labels. The model supplies a value space $\mathcal V_{\mathcal T}$ with a specified topology and a correlator functional $C_{\mathcal T}:\mathcal A_{\mathcal T}\to\mathcal V_{\mathcal T}$ with an explicit normalization convention, which may be normalized or unnormalized; the notation $C_{\mathcal T}(b;D;X_1,\ldots,X_n)$ denotes its value on the complete input with combined background and boundary data $b$, defect data $D$, and other insertion data $X_i$. The model also fixes its unit system, action and charge normalizations, and any regulator, measure, or renormalization prescription used to define $C_{\mathcal T}$. These are model inputs: this definition does not construct them or assume a general interacting continuum theory exists.

A **defect insertion** in $\mathcal T$ is data $(j,\lambda)$ where $j:\Sigma\hookrightarrow M^\circ$ is a smooth embedding of a manifold $\Sigma$ without boundary whose image is closed in the interior $M^\circ=M\setminus\partial M$, and $\lambda$ is the complete model-specified field, operator, or boundary-condition data supported on $j(\Sigma)$, including any orientation, coorientation, framing, or label-transport rule the model requires. Its codimension is $d-\dim\Sigma$. It is an allowed entry of $\mathcal A_{\mathcal T}$ only when the model defines $C_{\mathcal T}(b;D_{j,\lambda};O_1,\ldots,O_n)$ for each stated admissible combined background and boundary datum $b$ and list of other insertions.

A **defect network** is data $D=(K,\{S_s,j_s,\lambda_s\}_{s\in S},\{J_t\}_{t\in J})$ in which $K\subset M^\circ$ is closed, $S$ is finite, $K=\bigsqcup_{s\in S}S_s$ is a smooth stratification, and each $j_s:\Sigma_s\to S_s$ is a diffeomorphism from a smooth manifold without boundary onto its locally closed embedded stratum. The closure of each stratum is a union of strata, with the frontier condition that if $S_t$ meets the closure of $S_s$ and $S_t\ne S_s$, then $S_t$ lies in that closure and has smaller dimension; the incidence relation records exactly these pairs. Each stratum carries its complete model-specified field, operator, boundary, orientation, coorientation, framing, and other label data $\lambda_s$ as required; $J\subseteq S$ is the set of junction strata, and each $S_t$ with $t\in J$ carries a model-specified junction operator $J_t$ with an ordering of all incident labels. The model must declare which such networks and other insertions form admissible inputs of $\mathcal A_{\mathcal T}$ and define their correlators. A one-stratum network with no junction stratum is the preceding single defect, and a list of strata or a picture without its field and junction data is not a defect insertion.

An **isotopy** of a defect network is a smooth one-parameter family of its stratum embeddings $j_{s,t}:\Sigma_s\hookrightarrow M^\circ$, $t\in[0,1]$, compatible on stratum closures and incidence data, whose stratification and incidence relation are unchanged and which creates no additional intersections. The model-specified transport maps carry every stratum label $\lambda_s$, framing or orientation, and junction operator along the family; the combined background and boundary data remain fixed, and the network stays disjoint from every other insertion throughout the deformation. A single-stratum defect is the one-element special case. The insertion is **topological in $\mathcal T$** if, for every complete admissible input containing the selected network, every other insertion data $X_1,\ldots,X_n$ in that input (each of which may itself be an observable or another defect/network), and every such decorated isotopy from $D_0$ to $D_1$ disjoint from all the other insertion data, the model-defined correlators satisfy

$$C_{\mathcal T}(b;D_0;X_1,\ldots,X_n)=C_{\mathcal T}(b;D_1;X_1,\ldots,X_n).$$

This is a property to verify for the specified model and insertion, not an automatic consequence of assigning a defect label or drawing a crossing. No physical quantity with units is introduced here; all dimensional quantities and normalizations remain those declared by $\mathcal T$.

## Definition references

[Gaiotto, Kapustin, Seiberg, and Willett, §1, PDF pp. 1–3](https://arxiv.org/pdf/1412.5148)

[Carqueville, §2.1, PDF pp. 5–8](https://arxiv.org/pdf/1607.05747)
