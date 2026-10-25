---
id: ex-aqft-maxwell-magnetic-one-form-charge
kind: example
title: "Magnetic one-form charge of an external U(1) line"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-p-form-symmetries-examples
dependency_level: 2
deps:
  - def-aqft-p-form-global-symmetry
  - def-countable-choice
  - def-qftx-principal-connection-form
  - lem-qftx-principal-curvature-cartan-bianchi
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-aqft-p-form-global-symmetry: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "A conditional field-configuration example for a pure compact U(1) Maxwell model in four Euclidean dimensions with an external genuine magnetic line; it makes no continuum-measure, empirical, or general interacting-QFT claim."
sources:
  references:
    - title: "Davide Gaiotto, Anton Kapustin, Nathan Seiberg, and Brian Willett, Generalized Global Symmetries"
      url: "https://arxiv.org/pdf/1412.5148"
      locator: "§4.1, PDF pp. 14–16: pure U(1) gauge theory, the magnetic one-form current F/(2π), the magnetic surface operator, its 2π periodicity, and charged 't Hooft loops."
    - title: "Lakshya Bhardwaj et al., Lectures on Generalized Symmetries"
      url: "https://arxiv.org/pdf/2307.07547"
      locator: "§2.2.2 Example 2.3, PDF pp. 19–21, and §4.1 Example 4.1, PDF pp. 60–61: U(1) characters, magnetic line flux, and background normalization."
verification:
  precheck: pending
---

## Example

Use natural units $\hbar=c=1$ and $M=\mathbb R^4$ with its standard orientation and Euclidean metric. The selected field model is pure compact Maxwell theory with actual gauge group $U(1)=\{e^{i\alpha}:\alpha\in\mathbb R/2\pi\mathbb Z\}$, no dynamical electric or magnetic matter, and a smooth right principal $U(1)$-bundle with connection on the complement of admitted external line insertions. A principal connection is a smooth $\mathfrak u(1)$-valued one-form reproducing each fundamental vertical vector and equivariant under the right group action. Identify $\mathfrak u(1)=i\mathbb R$ with $\mathbb R$ so its local potentials $A_i$ have holonomy $\exp(i\int A_i)$ and the real curvature $F$ obeys $F|_{U_i}=dA_i$, since the Abelian Lie bracket vanishes. The model fixes the action convention $S[A]=(2e^2)^{-1}\int F\wedge *F$ with dimensionless $e>0$, integrating outside any prescribed line-core tube with its declared boundary condition. It also fixes the allowed bundle sectors, boundary behavior at infinity, and any regulator or measure; no continuum measure is constructed here. With this normalization $[A_i]=\mathrm{length}^{-1}$, $[F]=\mathrm{length}^{-2}$, and $\int_\Sigma F$ is dimensionless.

Let $C$ be a closed smooth oriented curve carrying an admitted genuine external magnetic line $T_m(C)$, where genuine means that no auxiliary surface is attached to define the insertion. Its integer charge $m\in\mathbb Z$ is specified by $\int_{S^2_{\mathrm{link}}}F=2\pi m$ on every sufficiently small oriented normal two-sphere linking $C$. The model has no other magnetic sources, and its normalized correlation functional is assumed to be defined for these insertions.

For a closed smooth oriented surface $\Sigma$ disjoint from the line, and $\alpha\in\mathbb R/2\pi\mathbb Z$, define the magnetic surface operator

$$
U_\alpha(\Sigma)=\exp\!\left(\frac{i\alpha}{2\pi}\int_\Sigma F\right).
$$

For this example, a smooth singular three-chain is a finite real linear combination of smooth maps from the standard 3-simplex, with boundary the alternating sum of its face maps. For a source-free move, the model supplies a compact smooth singular three-chain $V$ in $M\setminus C$ with $\partial V=\Sigma_1-\Sigma_0$. For a move across the line, the model supplies a compact oriented smooth three-dimensional track $W$ in $M$, represented as a finite smooth singular chain, with endpoint boundary $\partial W=\Sigma_1-\Sigma_0$; its support is a smooth embedded three-manifold near each of its finitely many intersections with $C$, and the intersections are transverse interior points. Transverse means that the tangent space of this three-manifold and the tangent line of $C$ span $T_xM$. Excise a small open three-ball in each such regular neighborhood. The model supplies a source-free collar in the punctured tubular neighborhood identifying each resulting boundary sphere with a small oriented normal two-sphere $S_j^2$ linking $C$. The resulting punctured chain $V$ lies in $M\setminus C$ and has $\partial V=\Sigma_1-\Sigma_0-\sum_j\epsilon_jS_j^2$, where $\epsilon_j$ is the oriented intersection sign of $W$ with $C$. Define the algebraic intersection number $I(W,C)=\sum_j\epsilon_j$. The claimed action is that a source-free move leaves $U_\alpha$ unchanged, while a move across the line multiplies it by $e^{i\alpha m I(W,C)}$. In particular, the line carries the character $\chi_m(e^{i\alpha})=e^{i\alpha m}$ of the magnetic one-form $U(1)$ symmetry.

## Example references

[Gaiotto, Kapustin, Seiberg, and Willett, §4.1, PDF pp. 14–16](https://arxiv.org/pdf/1412.5148)

[Bhardwaj et al., §2.2.2 Example 2.3 and §4.1 Example 4.1](https://arxiv.org/pdf/2307.07547)

## Facts & Assumptions

**Given:** The compact $U(1)$ field model, its connection and flux normalization, the external line boundary condition, and the finite-chain support motion in the Example.

[A1] The selected model has $\mathfrak u(1)=i\mathbb R$, no dynamical magnetic sources, and a genuine external line with integer flux $2\pi m$ through every small linking $S^2$. It specifies a correlation functional for the listed insertions; this is model input, not an experimental premise.

[A2] The mathematical connection and Bianchi inputs require only $\mathrm{AC}_\omega$, not full Choice. [[def-countable-choice]]

[F1] [[def-qftx-principal-connection-form]]: for a smooth right principal bundle and supplied connection, $\omega$ is a global Lie-algebra-valued one-form; the right-action and local-section conventions are fixed.

[F2] [[lem-qftx-principal-curvature-cartan-bianchi]]: with $\Omega_\omega=d\omega+\frac12[\omega\wedge\omega]$ and local $F_i=s_i^*\Omega_\omega$, one has $D_{A_i}F_i=dF_i+[A_i\wedge F_i]=0$ and $F_i=dA_i+\frac12[A_i\wedge A_i]$.

[F3] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a smooth manifold, smooth form $\eta$, and finite smooth singular chain $V$ of degree $k\ge1$, $\int_V d\eta=\int_{\partial V}\eta$.

[F4] [[def-aqft-p-form-global-symmetry]]: a genuine line observable has a model-specified symmetry action by defect crossing; a continuous scalar crossing homomorphism for an Abelian group is its character charge.


## Verification

1.1 The Lie algebra of $U(1)$ is Abelian, so $[A_i\wedge F_i]=0$; its adjoint action is trivial, so the local forms $F_i$ agree on overlaps. Applying [F2] gives the global curvature $F$ and $dF_i=0$ in every chart away from the external line, hence $dF=0$ there. [A1, A2, F1, F2, algebra]

2.1 Suppose the swept chain $V$ is disjoint from $C$. By [F3] and step 1.1, $\int_{\Sigma_1}F-\int_{\Sigma_0}F=\int_{\partial V}F=\int_VdF=0$. The defining exponential is therefore unchanged by every admitted source-free isotopy, so the surface operator is topological in this sector. [given, A1, F3, step 1.1, algebra]

2.2 For a move past the line, the supplied punctured chain lies in the source-free region and has $\partial V=\Sigma_1-\Sigma_0-\sum_j\epsilon_jS_j^2$ by the Example's support convention. Applying [F3] and step 1.1 gives $0=\int_VdF=\int_{\Sigma_1}F-\int_{\Sigma_0}F-\sum_j\epsilon_j\int_{S_j^2}F$. The flux boundary condition in [A1] therefore gives $\int_{\Sigma_1}F-\int_{\Sigma_0}F=2\pi m I(W,C)$. [given, A1, F3, step 1.1, algebra]

3.1 Substitution into the definition of $U_\alpha$ yields $U_\alpha(\Sigma_1)T_m(C)=e^{i\alpha m I(W,C)}T_m(C)U_\alpha(\Sigma_0)$. For one positively oriented linking, the phase is $e^{i\alpha m}$. [given, A1, F4, step 2.2, algebra]

4.1 Because $m\in\mathbb Z$, $\chi_m(e^{i(\alpha+2\pi)})=\chi_m(e^{i\alpha})$, so the formula defines a map on $U(1)$; it is continuous, multiplicative, and sends $1$ to $1$. By the character-charge convention in [F4] and the unit-linking crossing phase in step 3.1, $\chi_m$ is the line's one-form charge and lies in $\widehat{U(1)}$. [given, A1, F4, step 3.1, algebra]

5.1 If $m=0$ or $\alpha=0$, the linking phase is one. Reversing the orientation of the line changes $m$ to $-m$, and reversing the swept-chain orientation changes $I$ to $-I$, so the formula respects the declared orientation convention. No equation of motion, observation, or continuum-existence conclusion is used. [given, A1, step 2.2, step 3.1, algebra] ∎

