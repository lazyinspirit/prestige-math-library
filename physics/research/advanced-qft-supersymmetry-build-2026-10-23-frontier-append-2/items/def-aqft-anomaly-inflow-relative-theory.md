---
id: def-aqft-anomaly-inflow-relative-theory
kind: definition
title: Relative boundary theory and invertible anomaly inflow
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 5
deps:
  - def-aqft-global-anomaly-holonomy
  - def-aqft-thooft-anomaly
dependency_roles:
  def-aqft-global-anomaly-holonomy: formulation-prerequisite
  def-aqft-thooft-anomaly: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: >-
  This defines the line-valued boundary and invertible-bulk interface for a
  specified spin theory and compatible background fields. It does not assert
  that a proposed bulk exists or that a continuum quantum field theory has
  been constructed.
sources:
  references:
    - title: "Daniel S. Freed, Lectures on Field Theory and Topology"
      url: "https://abel.math.harvard.edu/~dafr/CBMS133.pdf"
      locator: "Lecture 11, §§11.1–11.2, printed pp.154–158/PDF pp.162–166; anomaly lines and relative/invertible field theory structure."
    - title: "Xianzhe Dai and Daniel S. Freed, Eta-Invariants and Determinant Lines"
      url: "https://arxiv.org/pdf/hep-th/9405012"
      locator: "§5, PDF pp. 31–35; parallel transport and holonomy of the inverse determinant line."
verification:
  precheck: pass
---

## Definition

Fix an integer $d\ge1$. Let $Y$ be a compact oriented smooth spin $(d+1)$-manifold with boundary $M=\partial Y$, using the outward-normal-first boundary orientation. A background $b$ consists of the metric, spin structure, and any specified principal-bundle connections and associated fields on $Y$; its restriction to $M$ is the boundary background. A $d$-dimensional boundary theory is **relative to an invertible bulk theory** when its partition value is a vector $Z_\partial(M,b|_M)$ in a specified one-dimensional Hermitian line $\mathcal L_\partial(M,b|_M)$, and the bulk assigns the dual line $\mathcal L_{\mathrm{bulk}}(M,b|_M)\cong\mathcal L_\partial(M,b|_M)^*$ together with a vector $Z_{\mathrm{bulk}}(Y,b)$ in that line. The canonical evaluation

$$\mathrm{ev}:\mathcal L_\partial(M,b|_M)\otimes\mathcal L_{\mathrm{bulk}}(M,b|_M)\longrightarrow\mathbb C$$

then defines the combined scalar amplitude. Invertibility means that the bulk assigns a one-dimensional line to each closed $d$-dimensional boundary background and an isomorphism to each bordism map; orientation reversal replaces the assigned line by its dual. For a loop $\gamma$ of compatible background fields and endpoint gauge identifications, the boundary/bulk pair cancels that anomaly along $\gamma$ exactly when

$$\operatorname{Hol}_{\gamma}(\mathcal L_\partial)\operatorname{Hol}_{\gamma}(\mathcal L_{\mathrm{bulk}})=1.$$

The diagram records this condition: the vertical maps are the line evaluation at the two endpoints, and the top map is parallel transport on both lines.

~~~tikzcd
\mathcal L_{\partial,0}\otimes\mathcal L_{\mathrm{bulk},0}
  \arrow[r,"\mathrm{PT}^{\partial}_{\gamma}\otimes\mathrm{PT}^{\mathrm{bulk}}_{\gamma}"]
  \arrow[d,"\mathrm{ev}_0"'] &
\mathcal L_{\partial,1}\otimes\mathcal L_{\mathrm{bulk},1}
  \arrow[d,"\mathrm{ev}_1"] \\
\mathbb C \arrow[r,"\mathrm{id}_{\mathbb C}"'] & \mathbb C
~~~

## Definition references

[Freed, Lecture 11, §§11.1–11.2](https://abel.math.harvard.edu/~dafr/CBMS133.pdf)

[Dai and Freed, §5](https://arxiv.org/pdf/hep-th/9405012)

## Facts & Assumptions

**Given:** The spin bordism, compatible backgrounds, boundary anomaly line, and candidate invertible bulk line in the Definition.

[F1] [[def-aqft-global-anomaly-holonomy]] defines the boundary holonomy as the scalar of parallel transport on its one-dimensional Hermitian line.

[F2] [[def-aqft-thooft-anomaly]] defines only a four-dimensional local perturbative anomaly class for a nondynamical background subalgebra modulo admissible local counterterms; it explicitly excludes determinant-line holonomy and makes no global-anomaly claim. It therefore does not establish that a given loop phase cancels or that a bulk exists.

[A1] The bulk/boundary line-duality and its compatibility with bordism gluing are part of the adopted relative-theory data; this definition alone does not construct those data for any proposed model.

[L1] Freed, Lecture 11, §§11.1–11.2, printed pp.154–158/PDF pp.162–166, gives the Pfaffian-line and invertible/relative-theory interface; the later thesis discussion in §11.4 is not used as a proved theorem.

## Proof

1.1 By [A1], $\mathcal L_{\mathrm{bulk}}(M,b|_M)$ is the dual of $\mathcal L_\partial(M,b|_M)$. Evaluation of a one-dimensional vector space against its dual is a well-defined nondegenerate pairing to $\mathbb C$, so the tensor of the two boundary values gives the stated scalar. [given, A1, algebra]

2.1 Parallel transport on a dual line has the inverse scalar to parallel transport on the original line. Therefore the top transport in the displayed diagram preserves evaluation exactly when the product of the two holonomies is $1$, which is the stated cancellation condition. This is a definition of the scoped inflow interface, not an existence theorem for a bulk. [F2] explicitly excludes determinant-line holonomy, so it does not derive this geometric cancellation criterion or identify a particular global phase. [given, F1, F2, A1, L1, step 1.1, algebra] ∎
