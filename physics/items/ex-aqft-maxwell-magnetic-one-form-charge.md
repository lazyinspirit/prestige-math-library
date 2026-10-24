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

Use natural units $\hbar=c=1$ and $M=\mathbb R^4$ with its standard orientation and Euclidean metric. Let $C$ be an admitted closed smooth oriented curve and set $X=M\setminus C$. The selected field model is pure compact Maxwell theory with actual gauge group $U(1)=\{e^{i\alpha}:\alpha\in\mathbb R/2\pi\mathbb Z\}$, no dynamical electric or magnetic matter, and an ordinary smooth right principal $U(1)$-bundle $P\to X$ with smooth connection, using the defining character and the standard compact-circle normalization. The model admits nonzero genuine external magnetic line probes $T_n(C')$ for every $n\in\mathbb Z$ on its admitted closed smooth oriented curves $C'$, with flux $2\pi n$ on sufficiently small linking spheres; in each correlator sector considered below, one such line is fixed and is the only magnetic source. In particular, the complete admitted insertion data include a unit-charge probe $T_1$, which is used to make the $U(1)$ symmetry action effective. A principal connection is a smooth $\mathfrak u(1)$-valued one-form reproducing each fundamental vertical vector and equivariant under the right group action. Identify $\mathfrak u(1)=i\mathbb R$ with $\mathbb R$ by $ia\mapsto a$, so its local potentials $A_i$ have holonomy $\exp(i\int A_i)$ and the real curvature $F$ obeys $F|_{U_i}=dA_i$, since the Abelian Lie bracket vanishes. The model fixes the action convention $S[A]=(2e^2)^{-1}\int F\wedge *F$ with dimensionless $e>0$, integrating outside any prescribed line-core tube with its declared boundary condition. It also fixes the allowed bundle sectors, boundary behavior at infinity, and any regulator or measure; no continuum measure is constructed here. With this normalization $[A_i]=\mathrm{length}^{-1}$, $[F]=\mathrm{length}^{-2}$, and $\int_\Sigma F$ is dimensionless.

Let $C$ be the closed image of an orientation-preserving smooth embedding $c:\mathcal C\hookrightarrow M$ from an oriented smooth one-manifold $\mathcal C$ without boundary, and in the sector being calculated let it carry the admitted genuine external magnetic line $T_m(C)$, where genuine means that no auxiliary surface is attached to define the insertion. At each $x\in C$, orient the normal quotient $N_xC:=T_xM/T_xC$ by requiring that a positive tangent $u\in T_xC$, followed by lifts of a positive basis of $N_xC$, gives the positive orientation of $T_xM$. Orient every small linking sphere $S^2_{\mathrm{link}}$ as the boundary of a small ball in $N_xC$, with the outward normal first. The line's integer charge $m\in\mathbb Z$ is specified by $\int_{S^2_{\mathrm{link}}}F=2\pi m$ on every sufficiently small such sphere. In this sector the model has no other magnetic source. Its complete input domain for this fixed sector has the external line $T_m(C)$, any finite list of compact oriented surface insertions $U_{\alpha_j}(\Sigma_j)$ disjoint from $C$, and any finite list of admitted gauge-invariant ordinary field functionals $f_k$ with specified supports. The data $b$ record the boundary behavior at infinity, any excised core-tube boundary condition, bundle sectors and regulator choices. Let $\mathscr F_{C,m,b}$ be the complex vector space of actual functions on the admitted bundle-and-connection configurations generated by finite products of these $f_k$ and the surface functions defined below, with equality understood pointwise. The selected model supplies a complex-linear functional $\mathcal L_{C,m,b}$ on that space, with its prescribed normalization. Its complete correlator rule is

$$
C_b(T_m(C);U_{\alpha_1}(\Sigma_1),\ldots,U_{\alpha_r}(\Sigma_r);f_1,\ldots,f_n)=\mathcal L_{C,m,b}\!\left(\prod_{j=1}^rU_{\alpha_j}(\Sigma_j)\prod_{k=1}^nf_k\right).
$$

There is no assumption that $\mathcal L_{C,m,b}(1)$ is nonzero. The functional, admissibility and normalization are conditional model inputs; no continuum measure is constructed. Gauge changes transport configurations and $b$, with the model's functional required to satisfy the corresponding pullback covariance. Allowed support isotopies transport all orientations and line boundary data, keep $b$ fixed, and avoid the other insertions. Pointwise equalities of the displayed functions therefore imply equalities for every such complete correlator by linearity, and a constant pointwise phase factors out of it.

For a compact smooth oriented two-manifold $\Sigma$ without boundary and a smooth embedding $\iota:\Sigma\hookrightarrow X$, and $\alpha\in\mathbb R/2\pi\mathbb Z$, define the magnetic surface operator using any representative $\widetilde\alpha\in\mathbb R$:

$$
U_\alpha(\Sigma)=\exp\!\left(\frac{i\widetilde\alpha}{2\pi}\int_\Sigma F\right).
$$

For this example, a smooth singular three-chain is a finite integer linear combination of smooth maps from the standard 3-simplex, with boundary the alternating sum of its face maps. For a source-free move, the model supplies a compact smooth singular three-chain $V$ in $M\setminus C$ with $\partial V=\Sigma_1-\Sigma_0$. For a move across the line, the model supplies a compact oriented smooth three-dimensional track $W$ in $M$, represented as a finite smooth singular chain, with endpoint boundary $\partial W=\Sigma_1-\Sigma_0$; its support is a smooth embedded three-manifold near each of its finitely many intersections with $C$, and the intersections are transverse interior points. Transverse means that the tangent space of this three-manifold and the tangent line of $C$ span $T_xM$. At an intersection $x_j$, let $u$ be a positive tangent vector to $C$ and $(w_1,w_2,w_3)$ a positive basis of $T_{x_j}W$. Set $\epsilon_j=+1$ when $(u,w_1,w_2,w_3)$ is positive in $T_{x_j}M$ and $\epsilon_j=-1$ otherwise; this ordered convention defines $I(W,C):=\sum_j\epsilon_j$. The quotient map $T_{x_j}W\to N_{x_j}C$ then has orientation sign $\epsilon_j$. Orient each small linking sphere $S_j^2$ as the boundary of a small ball in the already oriented normal space, with the outward normal first. Since the inner boundary of the punctured track has the opposite boundary orientation, excising a small open three-ball at each intersection gives a punctured chain $V$ in $M\setminus C$ with $\partial V=\Sigma_1-\Sigma_0-\sum_j\epsilon_jS_j^2$. The claimed action is that a source-free move leaves $U_\alpha$ unchanged, while a move across the line multiplies it by $e^{i\widetilde\alpha m I(W,C)}$. In particular, the line carries the character $\chi_m(e^{i\alpha})=e^{i\alpha m}$ of the magnetic one-form $U(1)$ symmetry.

## Example references

[Gaiotto, Kapustin, Seiberg, and Willett, §4.1, PDF pp. 14–16](https://arxiv.org/pdf/1412.5148)

[Bhardwaj et al., §2.2.2 Example 2.3 and §4.1 Example 4.1](https://arxiv.org/pdf/2307.07547)

## Facts & Assumptions

**Given:** The compact $U(1)$ field model, its connection and flux normalization, the external line boundary condition, and the finite-chain support motion in the Example.

[A1] The selected model has $\mathfrak u(1)=i\mathbb R$, no dynamical magnetic matter, and admits the nonzero genuine external line probes $T_n$ of each integer flux $2\pi n$, including a unit-charge probe. The sector considered here fixes one such line with charge $m$, and the model supplies the complete admissible function space and linear functional $\mathcal L_{C,m,b}$ stated above; their existence and gauge covariance are conditional model input, not an experimental premise.

[A2] The mathematical connection and Bianchi inputs require only $\mathrm{AC}_\omega$, not full Choice. [[def-countable-choice]]

[A3] For each admitted compact $\Sigma$, the restricted principal $U(1)$-bundle has a finite good cover with local sections and transition functions $g_{ij}$ obeying $g_{ij}g_{jk}=g_{ik}$; choose smooth real lifts $\theta_{ij}$ with $g_{ij}=e^{i\theta_{ij}}$ on the overlaps. A finite triangulation subordinate to this cover is used in the period calculation.

[F1] [[def-qftx-principal-connection-form]]: for a smooth right principal bundle and supplied connection, $\omega$ is a global Lie-algebra-valued one-form; the right-action and local-section conventions are fixed.

[F2] [[lem-qftx-principal-curvature-cartan-bianchi]]: with $\Omega_\omega=d\omega+\frac12[\omega\wedge\omega]$ and local $F_i=s_i^*\Omega_\omega$, one has $D_{A_i}F_i=dF_i+[A_i\wedge F_i]=0$ and $F_i=dA_i+\frac12[A_i\wedge A_i]$.

[F3] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a smooth manifold, smooth form $\eta$, and finite smooth singular chain $V$ of degree $k\ge1$, $\int_V d\eta=\int_{\partial V}\eta$.

[F4] [[def-aqft-p-form-global-symmetry]]: a genuine line observable has a model-specified defect-crossing action; for a specified crossing prescription, a continuous scalar homomorphism from an Abelian symmetry group is its character charge.


## Verification

1.1 The Lie algebra of $U(1)$ is Abelian, so $[A_i\wedge F_i]=0$; its adjoint action is trivial, so the local forms $F_i$ agree on overlaps. Applying [F2] gives the global curvature $F$ and $dF_i=0$ in every chart away from the external line, hence $dF=0$ there. [A1, A2, F1, F2, algebra]

2.1 Fix an admitted compact $\Sigma$. On its finite good cover, the local connection forms satisfy $A_j-A_i=d\theta_{ij}$ by the transition formula in [F2]. On a triple overlap, $g_{ij}g_{jk}=g_{ik}$ implies $\theta_{ij}+\theta_{jk}-\theta_{ik}=2\pi n_{ijk}$ for an integer $n_{ijk}$; on fourfold overlaps these integers satisfy $n_{jkl}-n_{ikl}+n_{ijl}-n_{ijk}=0$. Refine the chosen finite triangulation so each oriented triangle lies in one cover set and label each triangle by such a set. Stokes [F3] on each triangle writes its curvature integral as a boundary integral of its local $A_i$. For an interior edge shared by triangles labelled $i$ and $j$, the two opposite boundary contributions combine to $\int_e(A_i-A_j)=-\int_e d\theta_{ij}$, an endpoint difference of the chosen transition lift. Summing the edge endpoint differences around a vertex gives a signed cyclic sum of transition angles; its exponential is the product of transition functions around that cycle, equal to $1$ by $g_{ij}g_{jk}=g_{ik}$. Hence each vertex contribution lies in $2\pi\mathbb Z$, and $\frac{1}{2\pi}\int_\Sigma F$ is a signed sum of integers. This uses the ordinary compact $U(1)$ bundle sectors and is independent of the separate magnetic-line boundary condition [A1]. [A3, F2, F3, step 1.1]

2.2 Suppose the swept chain $V$ is disjoint from $C$. By [F3] and step 1.1, $\int_{\Sigma_1}F-\int_{\Sigma_0}F=\int_{\partial V}F=\int_VdF=0$. The defining exponential is therefore pointwise unchanged by every admitted source-free isotopy. Multiplying by any other admitted insertion functions preserves that equality, and applying the model's linear functional $\mathcal L_{C,m,b}$ proves equality for every complete correlator. Thus the surface operator is topological in this sector. [given, A1, F3, step 1.1, algebra]

2.3 At each intersection, projection $T_{x_j}W\to N_{x_j}C$ has orientation sign $\epsilon_j$ by the Example's convention; excision reverses the boundary orientation on the linking sphere, giving $\partial V=\Sigma_1-\Sigma_0-\sum_j\epsilon_jS_j^2$. The punctured chain lies in the source-free region, so [F3] and step 1.1 give $0=\int_VdF=\int_{\Sigma_1}F-\int_{\Sigma_0}F-\sum_j\epsilon_j\int_{S_j^2}F$. The flux boundary condition in [A1] therefore gives $\int_{\Sigma_1}F-\int_{\Sigma_0}F=2\pi m I(W,C)$. [given, A1, F3, step 1.1, algebra]

3.1 Write $N_\Sigma=(2\pi)^{-1}\int_\Sigma F\in\mathbb Z$ by step 2.1. Replacing $\widetilde\alpha$ by $\widetilde\alpha+2\pi k$ multiplies $U_\alpha(\Sigma)$ by $e^{2\pi i kN_\Sigma}=1$, so the operator depends only on $\alpha\in\mathbb R/2\pi\mathbb Z$. For representatives $\widetilde\alpha,\widetilde\beta$, pointwise multiplication gives $U_\alpha(\Sigma)U_\beta(\Sigma)=U_{\alpha+\beta}(\Sigma)$; also $U_0(\Sigma)=1$ and $U_{-\alpha}(\Sigma)$ is its inverse. Thus these operators define the claimed $U(1)$ fusion action on every admitted closed surface. [given, step 2.1, algebra]

3.2 Substitution into the definition of $U_\alpha$ yields $U_\alpha(\Sigma_1)T_m(C)=e^{i\widetilde\alpha m I(W,C)}T_m(C)U_\alpha(\Sigma_0)$. Multiplying this pointwise relation by all other admitted insertion functions and applying $\mathcal L_{C,m,b}$ gives the same phase relation for every complete correlator, without dividing by any possibly zero correlator. For one positively oriented linking, the phase is $e^{i\alpha m}$, which is independent of the representative of $\alpha$. [given, A1, F4, step 2.3, algebra]

4.1 Because $m\in\mathbb Z$, $\chi_m(e^{i(\alpha+2\pi)})=\chi_m(e^{i\alpha})$, so the formula defines a map on $U(1)$; it is continuous, multiplicative, and sends $1$ to $1$. By the character-charge convention in [F4] and the unit-linking crossing phase in step 3.2, $\chi_m$ is the line's one-form charge and lies in $\widehat{U(1)}$. [given, A1, F4, step 3.2, algebra]

4.2 Applying step 3.2 to the admitted unit-charge probe $T_1$ gives crossing phase $\chi_1(e^{i\alpha})=e^{i\alpha}$. If two group elements induce the same crossing action on every admitted observable and background, they induce the same action on $T_1$; since $T_1$ is nonzero, their phases coincide, so the group elements are equal in $U(1)$. Thus the stated symmetry action is effective as required by the preceding definition. [A1, F4, step 3.2, algebra]

5.1 If $m=0$ or $\alpha=0$, the linking phase is one. Reversing the orientation of the line changes $m$ to $-m$, and reversing the swept-chain orientation changes $I$ to $-I$, so the formula respects the declared orientation convention. No equation of motion, observation, or continuum-existence conclusion is used. [given, A1, step 2.3, step 3.2, algebra] ∎

