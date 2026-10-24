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
  statement: ai-altered
  proof: not-applicable
physical_scope: "A kinematic definition for a named d-dimensional model with model-defined fields, correlators, symmetry defects and background sectors; it asserts no continuum QFT existence, anomaly absence, universal background coupling, or gauging."
sources:
  references:
    - title: "Davide Gaiotto, Anton Kapustin, Nathan Seiberg, and Brian Willett, Generalized Global Symmetries"
      url: "https://arxiv.org/pdf/1412.5148"
      locator: "§1, PDF pp. 1–3, and §3, printed p. 11 (PDF p. 12): ordinary invertible higher-form symmetry and the local exchange argument; Appendix F, printed pp. 70–71 (PDF pp. 71–72): topology-dependent electric/magnetic torsion-flux operations and their mixed anomaly."
    - title: "Lakshya Bhardwaj et al., Lectures on Generalized Symmetries"
      url: "https://arxiv.org/pdf/2307.07547"
      locator: "§§2.2.1–2.2.2, PDF pp. 12–20, and §4.1, PDF pp. 60–62: invertible topological defects, higher-form charges and Pontryagin duals, and continuous/discrete background data."
    - title: "Jeff Cheeger and James Simons, Differential Characters and Geometric Invariants"
      url: "https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf"
      locator: "§I, PDF pp. 2–3: differential characters as homomorphisms on smooth singular cycles whose boundary values are given by a closed form modulo the period subgroup."
verification:
  precheck: n/a
---

## Definition

Fix an integer $d\ge1$, an integer $p$ with $0\le p<d$, and a smooth $d$-dimensional spacetime manifold $M$, possibly with boundary. A selected model $\mathcal T$ specifies its spacetime structure and boundary conditions; field configuration space, field bundles, regularity and admitted sectors; observables and their supports; complete admissible insertion inputs, including decorated defects and networks, and their correlation functionals with an explicit normalization; and, when present, its action, regulator, measure, unit system and charge normalization. No such data are inferred from a familiar theory name.

Use the preceding topological-defect definition with its exact content: a defect is model-specified field, operator or boundary-condition data on a closed embedded support, and it is topological when every declared correlator is invariant under each admissible isotopy that transports its data, avoids other insertions and preserves boundary data. For this symmetry, each defect is an endodefect insertion in the same selected model; the model supplies parallel fusion and the induced action on its admitted observables and backgrounds. A support $\Sigma$ is the image of a smooth embedding $\iota:\Sigma\hookrightarrow M^\circ$ from a manifold without boundary, with closed image in the interior $M^\circ$.

A **group-like $p$-form global symmetry** of $\mathcal T$ consists of a locally compact Hausdorff topological group $G$, required to be Abelian when $p>0$, and an assignment $g\mapsto U_g(\Sigma)$ of invertible topological symmetry defects to the allowed closed supports $\Sigma$ of dimension $d-p-1$ and codimension $p+1$. For every support and every ordered pair $g,h\in G$, the model supplies parallel fusion $\star$ and the fusion is defined, with

$$U_e(\Sigma)=\mathbf 1_{\mathcal T},\qquad U_g(\Sigma)\star U_h(\Sigma)=U_{gh}(\Sigma),\qquad U_g(\Sigma)\star U_{g^{-1}}(\Sigma)=U_{g^{-1}}(\Sigma)\star U_g(\Sigma)=\mathbf 1_{\mathcal T}.$$

Crossing $U_g$ induces a bijection $\rho_g$ on the model's complete typed insertion data, including other defects and their decorations, and a bijection $b\mapsto\beta_g(b)$ on the admissible combined background and boundary data. Both preserve types, supports, algebraic relations and admissibility. With $I$ any complete insertion list and $C_{\mathcal T}$ its model-supplied correlator, covariance means

$$
C_{\mathcal T}(\beta_g(b);\rho_g(I))=C_{\mathcal T}(b;I).
$$

This includes lists with any model-admitted decorated networks, not only ordinary observables. The model specifies crossing junctions and label transport on that domain. Use the convention that crossing $U_g\star U_h$ means crossing $U_h$ and then $U_g$; fusion-action compatibility is the group-action law $\rho_e=\mathrm{id}$, $\rho_{gh}=\rho_g\circ\rho_h$, $\beta_e=\mathrm{id}$ and $\beta_{gh}=\beta_g\circ\beta_h$. The group $G$ is **effective**: if two elements induce identical crossing automorphisms on every admitted observable and background and give identical actions in every admitted correlator, then they are equal. A group element labels a transformation, not the charge of an observable.

The positive-form restriction selects ordinary local invertible symmetry defects: in codimension at least two, two nearby parallel defects can exchange order in a transverse disk while avoiding other insertions. When decorated transport identifies their crossing and background actions, topologicality and fusion identify the actions of $gh$ and $hg$, and effectiveness gives $gh=hg$. This is the local exchange argument; it does not assert that arbitrary wrapped supports or networks on a topologically nontrivial spacetime can be exchanged. In particular, electric and magnetic flux operators constructed from networks with charged junctions can have a mixed commutator on torsion cycles without changing either ordinary local Abelian label group. Such global network operations are not silently included as a non-Abelian positive-form group in this definition. At $p=0$ no Abelian restriction is imposed.

A **genuine $p$-dimensional observable** is an observable supported on a closed embedded $p$-dimensional submanifold whose definition is independent of an attached higher-dimensional support. Its symmetry action is defined by moving a symmetry defect across it, with the model specifying the resulting junction or operator action. For $p>0$, if crossing by every $U_g$ preserves the one-dimensional space $\mathbb C O$ for a nonzero genuine observable $O$, write the scalar action as $\chi_O(g)O$. If the resulting map $\chi_O:G\to U(1)$ is a continuous homomorphism in a model where $G$ is Abelian, call $\chi_O$ the character charge of $O$; it is an element of $\widehat G$. This definition does not assert scalarity, continuity or multiplicativity for every observable. For $p=0$, local observables may carry higher-dimensional representations of a non-Abelian group; the representation label is distinct from the group element implementing a transformation. For a locally compact Hausdorff Abelian group $A$, write its character group as $\widehat A=\operatorname{Hom}_{\mathrm{cts}}(A,U(1))$, with pointwise multiplication. Here $U(1)=\{e^{i\alpha}:\alpha\in\mathbb R/2\pi\mathbb Z\}$, so every character value and its argument are dimensionless.

A **background** for a symmetry is nondynamical model data, not summed over. For a finite Abelian group $A$, fix a triangulation $K$ of $M$ and let $C^k(K;A)$ be the group of functions from oriented $k$-simplices to $A$, with orientation reversal acting by negation. Its coboundary is the alternating sum over faces,

$$
(\delta c)([v_0,\ldots,v_{k+1}])=\sum_{j=0}^{k+1}(-1)^j c([v_0,\ldots,\widehat v_j,\ldots,v_{k+1}]).
$$

Since $\delta^2=0$ by pairwise cancellation of twice-deleted faces, a discrete $(p+1)$-form background with no higher-group mixing is a cocycle $B\in C^{p+1}(K;A)$ modulo $B\mapsto B+\delta\Lambda$ for $\Lambda\in C^p(K;A)$. Relative cochains or boundary-fixed gauge transformations are used when required by the model's boundary conditions. If other backgrounds mix with $B$, the model must give the modified cocycle and gauge-transformation laws.

For a continuous $U(1)^r$ $p$-form symmetry, use the following global differential-character model. For $k\geq0$, let $C_k^\infty(M;\mathbb Z)$ be the abelian group of finite integer sums of restrictions to the standard oriented $k$-simplex of smooth maps defined on a neighborhood of that simplex, with boundary the alternating sum of face maps, and let $Z_k^\infty(M;\mathbb Z)=\ker\partial$. For a smooth $k$-form $\omega$, set $\int_c\omega=\sum_\sigma n_\sigma\int_{\Delta^k}\sigma^*\omega$ when $c=\sum_\sigma n_\sigma\sigma$. A normalized degree-$(p+2)$ $U(1)$ differential character is a pair $(\check b,H)$ consisting of a group homomorphism $\check b:Z_{p+1}^\infty(M;\mathbb Z)\to U(1)$ and a smooth closed real $(p+2)$-form $H$ such that

$$\check b(\partial c)=\exp\!\left(i\int_c H\right)\quad\text{for every }c\in C_{p+2}^\infty(M;\mathbb Z).$$

Indeed, taking $c=z$ for a cycle $z$ gives $\check b(0)=1=\exp(i\int_zH)$, so $\int_zH\in2\pi\mathbb Z$. A $U(1)^r$ background is an $r$-tuple of such characters and curvatures. The character records holonomy on every smooth integral $(p+1)$-cycle, including flat holonomy data that the curvature alone does not record. An optional local presentation on a contractible $V\subset M$ is a smooth potential $B_V\in\Omega^{p+1}(V)$ with $dB_V=H|_V$ and with character values on cycles $z$ in $V$ given by $\check b(z)=\exp(i\int_zB_V)$. The global pair is the background datum, so no choice of local overlap or lower-overlap variables is additional model data; local presentations represent the same background exactly when they specify the same pair $(\check b,H)$. In a global-potential presentation $B\in\Omega^{p+1}(M)$ with $H=dB$, this includes small transformations $B\mapsto B+d\Lambda$ for smooth $p$-forms $\Lambda$ and large shifts $B\mapsto B+\eta$ by smooth closed $(p+1)$-forms $\eta$ whose periods are in $2\pi\mathbb Z$; for nontrivial sectors the equality-of-pair rule is the complete gauge-equivalence condition. If fixed boundary data are imposed, the selected model specifies the corresponding relative chain and character convention. The unit system and all coefficients in background couplings remain model inputs. The model must define its correlators in these backgrounds; this definition asserts neither that every symmetry admits such a coupling nor that the symmetry can be gauged.

## Definition references

[[def-aqft-topological-defect|Model-specified defects on closed embedded supports and the isotopy-invariance criterion]]

[Gaiotto, Kapustin, Seiberg, and Willett, §§1 and 3, with the Appendix F topology caveat](https://arxiv.org/pdf/1412.5148)

[Bhardwaj et al., §§2.2.1–2.2.2 and §4.1](https://arxiv.org/pdf/2307.07547)

[Cheeger and Simons, §I, PDF pp. 2–3](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

