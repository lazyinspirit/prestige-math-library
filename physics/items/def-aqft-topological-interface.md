---
id: def-aqft-topological-interface
kind: definition
title: "Topological interface between specified models"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-defects-and-topological-operators
dependency_level: 1
deps:
  - def-aqft-topological-defect
dependency_roles:
  def-aqft-topological-defect: formulation-prerequisite
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "A definition of a codimension-one interface for named models with compatible spacetime, background, boundary, and unit data; it assumes only model-defined correlators and a stated fusion limit, and asserts no general continuum interface exists."
sources:
  references:
    - title: "Davide Gaiotto, Anton Kapustin, Nathan Seiberg, and Brian Willett, Generalized Global Symmetries"
      url: "https://arxiv.org/pdf/1412.5148"
      locator: "§1 Introduction, PDF pp. 1–3: topological defect operators and their group-like fusion when they implement an ordinary or higher-form symmetry."
    - title: "Nils Carqueville, Lecture Notes on 2-Dimensional Defect TQFT"
      url: "https://arxiv.org/pdf/1607.05747"
      locator: "§2.1, PDF pp. 5–8: labeled regions, source/target maps on domain walls, isotopy classes of defect bordisms, and functorial correlators in oriented 2D TQFT."
verification:
  precheck: n/a
---

## Definition

Use the selected-model and defect-insertion data from the preceding defect definition: a model specifies its manifold, background and boundary data, fields with regularity conditions, unit conventions, complete admissible insertion inputs, correlator, and topology on its value space. Let $\mathcal T_-$ and $\mathcal T_+$ be two such models in the same spacetime dimension $d$ on the same smooth manifold $M$. Their metric or signature, background bundles, boundary conditions, field normalizations, and units must either agree or be related by an explicitly supplied identification. No such identification is inferred from names or equal dimensions.

A **codimension-one interface** from $\mathcal T_-$ to $\mathcal T_+$ is data $(\mathcal W,\mathcal I)$ where $\mathcal W\hookrightarrow M^\circ$ is a closed smooth embedded hypersurface with a chosen coorientation and a specified collar $\mathcal W\times(-\epsilon,\epsilon)$, $\epsilon>0$. The negative side uses $\mathcal T_-$ and the positive side uses $\mathcal T_+$. The interface data $\mathcal I$ is a specified local transmission condition, operator map, or boundary condition relating the one-sided field data in that collar, together with any orientation, framing, or junction labels required by the models. The combined model declares its admissible complete inputs, including combined background and boundary data and all other finite insertion data on each side. Write $\Xi_-$ and $\Xi_+$ for those ordered lists; each entry is an ordinary observable insertion or other model-admitted decorated defect/network insertion. The combined model assigns each such input a correlator $C_{\mathcal T_-,\mathcal T_+}(b_-;b_+;\mathcal I(\mathcal W);\Xi_-;\Xi_+)$. The interface is **topological** when, for every such input, this correlator is unchanged under every allowed decorated isotopy of the interface that preserves the source and target side labels and incidence data and crosses no other insertion.

For interfaces $\mathcal I_{01}:\mathcal T_0\to\mathcal T_1$ and $\mathcal I_{12}:\mathcal T_1\to\mathcal T_2$, define their **fusion** only when the model supplies a product collar containing two parallel interfaces at separation $\delta>0$ and a common Hausdorff topological value space $\mathcal V$ for the compared correlators. If the selected models use different value spaces, the model must also specify comparison maps into $\mathcal V$; convergence below means convergence after those maps, in the topology of $\mathcal V$. For every declared complete input with the pair and all other finite insertion data, including ordinary observables and other decorated defects or networks, held fixed outside the shrinking collar, the model must specify $C_\delta\in\mathcal V$ and a correlator $C_0\in\mathcal V$ of a single interface such that $C_\delta\to C_0$ as $\delta\downarrow0$. The model also specifies the limiting insertion's normalization and junction data; when all these requirements hold, it is the fused interface $\mathcal I_{12}\star\mathcal I_{01}:\mathcal T_0\to\mathcal T_2$. If the comparison topology or the required correlator limits are absent, no single fused interface is asserted.

An **endodefect** has $\mathcal T_- = \mathcal T_+$ as the same complete model data, not merely models with similarly named fields. The **transparent identity interface** $\mathbf 1_{\mathcal T}$ is the model-supplied transmission condition whose correlator equals the no-interface correlator for every complete admissible input. For an endodefect $\mathcal I$ to induce a symmetry, its data must specify a bijection $\alpha_{\mathcal I}$ on the model's typed local-observable and other-insertion data and a bijection $\beta_{\mathcal I}$ on its combined background and boundary data; these maps must preserve types, supports, algebraic relations, and admissibility. They preserve correlators precisely when, for every admissible input $(b;\mathbf O,D)$,

$$C_{\mathcal T}(\beta_{\mathcal I}(b);\alpha_{\mathcal I}(\mathbf O,D))=C_{\mathcal T}(b;\mathbf O,D).$$

An endodefect is an **invertible symmetry interface** only if a two-sided inverse exists under the stated fusion operation, both composites equal $\mathbf 1_{\mathcal T}$ in all declared correlators, and the induced bijections above are automorphisms preserving correlators. A topological interface between distinct source and target models is an interface, not an internal symmetry of either model. No supersymmetry or BPS condition is implicit; claiming one requires additional model data and a separate check of the specified supercharges and their domains.

No dimensional quantity is added by this definition. Each model and interface must retain its declared unit system and normalization, and this definition does not assert that a continuum fusion limit exists.

## Definition references

[[def-aqft-topological-defect]]

[Gaiotto, Kapustin, Seiberg, and Willett, §1, PDF pp. 1–3](https://arxiv.org/pdf/1412.5148)

[Carqueville, §2.1, PDF pp. 5–8](https://arxiv.org/pdf/1607.05747)

## Remarks

The diagram records only the directed source-to-target convention: the label $\mathcal I$ has source $\mathcal T_-$ and target $\mathcal T_+$. It does not assert topologicality, existence of a fusion limit, or invertibility.

```tikzcd
\mathcal T_- \arrow[r, "\mathcal I"] & \mathcal T_+
```
