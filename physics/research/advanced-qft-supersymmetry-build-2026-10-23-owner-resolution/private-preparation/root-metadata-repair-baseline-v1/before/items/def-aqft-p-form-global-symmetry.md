---
id: def-aqft-p-form-global-symmetry
kind: definition
title: "Group-like p-form global symmetry and backgrounds"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-p-form-symmetries
dependency_level: 1
deps:
  - def-aqft-topological-defect
dependency_roles:
  def-aqft-topological-defect: formulation-prerequisite
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "A kinematic definition for a named d-dimensional model with model-defined fields, correlators, symmetry defects and background sectors; it asserts no continuum QFT existence, anomaly absence, universal background coupling, or gauging."
sources:
  references:
    - title: "Davide Gaiotto, Anton Kapustin, Nathan Seiberg, and Brian Willett, Generalized Global Symmetries"
      url: "https://arxiv.org/pdf/1412.5148"
      locator: "§1, PDF pp. 1–3, and §3, PDF pp. 11–12: defect support, deformation invariance, fusion, charge support, and the exchange argument; Appendix F, PDF pp. 70–71, for the torsion-flux caveat."
    - title: "Lakshya Bhardwaj et al., Lectures on Generalized Symmetries"
      url: "https://arxiv.org/pdf/2307.07547"
      locator: "§§2.2.1–2.2.2, PDF pp. 12–20, and §4.1, PDF pp. 60–62: invertible topological defects, higher-form charges and Pontryagin duals, and continuous/discrete background data."
verification:
  precheck: n/a
---

## Definition

Fix an integer $d\ge1$, an integer $p$ with $0\le p<d$, and a smooth $d$-dimensional spacetime manifold $M$, possibly with boundary. A selected model $\mathcal T$ specifies its spacetime structure and boundary conditions; field configuration space, field bundles, regularity and admitted sectors; observables and their supports; normalized correlation functionals; and, when present, its action, regulator, measure, unit system and charge normalization. No such data are inferred from a familiar theory name.

Use the preceding topological-defect definition with its exact content: a defect is model-specified field, operator or boundary-condition data on a closed embedded support, and it is topological when every declared correlator is invariant under each admissible isotopy that transports its data, avoids other insertions and preserves boundary data. For this symmetry, each defect is an endodefect insertion in the same selected model; the model supplies parallel fusion and the induced action on its admitted observables and backgrounds. A support $\Sigma$ is the image of a smooth embedding $\iota:\Sigma\hookrightarrow M^\circ$ from a manifold without boundary, with closed image in the interior $M^\circ$.

A **group-like $p$-form global symmetry** of $\mathcal T$ consists of a locally compact Hausdorff topological group $G$ and an assignment $g\mapsto U_g(\Sigma)$ of invertible topological symmetry defects to the allowed closed supports $\Sigma$ of dimension $d-p-1$ and codimension $p+1$. The model must define the parallel fusion operation and a transparent identity defect, with $U_e(\Sigma)=\mathbf 1_{\mathcal T}$ and $U_g(\Sigma)\star U_h(\Sigma)=U_{gh}(\Sigma)$ whenever that fusion is defined. Each $U_g$ has a two-sided inverse $U_{g^{-1}}$ under the supplied fusion law, and crossing it induces an automorphism preserving the declared observables, backgrounds and correlators. The group $G$ is **effective**: elements inducing identical actions in every admitted correlator and on every admitted observable and background are identified. A group element labels a transformation, not the charge of an observable.

A **genuine $p$-dimensional observable** is an observable supported on a closed embedded $p$-dimensional submanifold whose definition is independent of an attached higher-dimensional support. Its symmetry action is defined by moving a symmetry defect across it, with the model specifying the resulting junction or operator action. For $p>0$, if crossing by every $U_g$ preserves the one-dimensional space $\mathbb C O$ for a nonzero genuine observable $O$, write the scalar action as $\chi_O(g)O$. If the resulting map $\chi_O:G\to U(1)$ is a continuous homomorphism in a model where $G$ is Abelian, call $\chi_O$ the character charge of $O$; it is an element of $\widehat G$. This definition does not assert scalarity, continuity or multiplicativity for every observable. For $p=0$, local observables may carry higher-dimensional representations of a non-Abelian group; the representation label is distinct from the group element implementing a transformation. For a locally compact Hausdorff Abelian group $A$, write its character group as $\widehat A=\operatorname{Hom}_{\mathrm{cts}}(A,U(1))$, with pointwise multiplication. Here $U(1)=\{e^{i\alpha}:\alpha\in\mathbb R/2\pi\mathbb Z\}$, so every character value and its argument are dimensionless.

A **background** for a symmetry is nondynamical model data, not summed over. For a finite Abelian group $A$, fix a triangulation $K$ of $M$ and let $C^k(K;A)$ be the group of functions from oriented $k$-simplices to $A$, with orientation reversal acting by negation. Its coboundary is the alternating sum over faces,

$$
(\delta c)([v_0,\ldots,v_{k+1}])=\sum_{j=0}^{k+1}(-1)^j c([v_0,\ldots,\widehat v_j,\ldots,v_{k+1}]).
$$

Since $\delta^2=0$ by pairwise cancellation of twice-deleted faces, a discrete $(p+1)$-form background with no higher-group mixing is a cocycle $B\in C^{p+1}(K;A)$ modulo $B\mapsto B+\delta\Lambda$ for $\Lambda\in C^p(K;A)$. Relative cochains or boundary-fixed gauge transformations are used when required by the model's boundary conditions. If other backgrounds mix with $B$, the model must give the modified cocycle and gauge-transformation laws.

For a continuous $U(1)^r$ $p$-form symmetry, a background consists of model-supplied local $(p+1)$-form potentials, their overlap and lower-overlap transition data, a globally specified curvature locally given by $H=dB$, and the small and large gauge transformations with their holonomy and integral-flux normalization. Small transformations have the local form $B\mapsto B+d\Lambda$ for a $p$-form $\Lambda$. The unit system and all coefficients in background couplings remain model inputs. The model must define its correlators in these backgrounds; this definition asserts neither that every symmetry admits such a coupling nor that the symmetry can be gauged.

## Definition references

[[def-aqft-topological-defect|Model-specified defects on closed embedded supports and the isotopy-invariance criterion]]

[Gaiotto, Kapustin, Seiberg, and Willett, §§1 and 3, with the Appendix F topology caveat](https://arxiv.org/pdf/1412.5148)

[Bhardwaj et al., §§2.2.1–2.2.2 and §4.1](https://arxiv.org/pdf/2307.07547)

