---
id: def-qftx-spectral-network-data
kind: definition
title: Spectral-network, framed BPS, and defect data in a specified class-S model
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 1
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-spectral-networks
deps:
  - def-aqft-topological-defect
  - def-countable-choice
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
  - thm-trace-is-absolutely-convergent-and-basis-independent
dependency_roles:
  def-aqft-topological-defect: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
proof_strategy: not-applicable
physical_scope: Conditional definitions for a specified four-dimensional rigid N=2 class-S model of type A_{K-1}, its spectral curve, geometric and physical charge maps, WKB trajectories, finite webs, half-BPS surface defects, and model-supplied BPS indices; no continuum model, finite network, Hilbert space, trace, or physical charge identification is constructed.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Davide Gaiotto, Gregory W. Moore, and Andrew Neitzke, Spectral Networks
      url: https://arxiv.org/pdf/1204.4824
      locator: "§2 for class-S spectral curves; §§3.1–3.3 for trajectory, charge-lift, surface-defect, and framed-index conventions; §§4.1–4.4 and 5.1–5.2 for framed indices and wall construction; §9.2–9.3 for the distinction between geometric walls and soliton data."
    - title: "Clarence Kineider, Georgios Kydonakis, Eugen Rogozinnikov, Valdo Tatitscheff, and Alexander Thomas, Spectral Networks: Bridging Higher-Rank Teichmüller Theory and BPS States"
      url: https://arxiv.org/pdf/2412.03588v3
      locator: "Final monograph version (2026; Lecture Notes in Mathematics 2386), Chapter 22, printed pp. 365–396, §§22.1.1–22.1.3, §22.2.3 Eq. (22.7), and §§22.3.1.1–22.3.1.4: type-A class-S data, finite webs, relative charges, bulk and framed-index conventions, and the fermion-number sign ambiguity."
verification:
  precheck: pending
---

## Definition

Assume the Axiom of Countable Choice, $\mathrm{AC}_\omega$: for every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets, there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n$. Its exact use in the imported suppliers is the countable selection of finite orthonormal bases of the positive eigenspaces of compact positive operators in the singular-value and singular-value-decomposition construction used for the trace-class definition and trace theorem. No full Axiom of Choice is assumed here, and $\mathrm{AC}_\omega$ is not a physical premise.

Fix an integer $K\ge2$. A **Riemann surface** here is a connected complex one-manifold; assume $\overline C$ compact. A **selected class-S input of type $A_{K-1}$** consists of $\overline C$, a finite marked set $P\subset\overline C$, a collection $D$ of specified puncture defects at $P$, a Coulomb-branch datum $u=(\phi_2,\ldots,\phi_K)$, a selected global form with Lie algebra $\mathfrak{su}(K)$, and a four-dimensional rigid $\mathcal N=2$ model $\mathcal T$ on $M=\mathbb R^4$ with Minkowski metric $\eta=\operatorname{diag}(-1,+1,+1,+1)$, a chosen orientation, and a chosen time orientation. The model is adopted data: its six-dimensional $\mathcal N=(2,0)$ construction compactifies on $\overline C$ with a specified twist, meaning a chosen background coupling of the six-dimensional internal R-symmetry bundle to the tangent-bundle connection on $\overline C$ for which the compactification is taken to preserve four-dimensional $\mathcal N=2$ supersymmetry. This definition does not construct a continuum quantum field theory. The selected model also supplies its field bundles, admissible configuration space and field regularity, boundary conditions, observables, normalized correlation functional, and any regulator or measure used; none is deduced here. Put $C=\overline C\setminus P$. The holomorphic cotangent line bundle of $\overline C$ is $K_{\overline C}$. The sections $\phi_r$ of $K_{\overline C}^{\otimes r}$, for $2\le r\le K$, are meromorphic, have poles only in $P$, and have pole orders and residues fixed by $D$. The selected global form and allowed line and surface operators are part of the model data. Thus the coefficients have the units of the corresponding powers of mass when the Seiberg–Witten one-form is assigned mass dimension one. Use $c=\hbar=1$ and retain the model's trace, charge, and central-charge normalizations. A four-dimensional **Bogomolny–Prasad–Sommerfield (BPS) state** is a state in a model-supplied one-particle sector annihilated by a nonzero subset of the model's supercharges; when the selected supersymmetry algebra supplies a massive rest-fiber mass operator $M$ and central charge $Z$, its BPS-saturation condition is $M=|Z|$. No such state or algebraic identification is implied by the geometric data below.

Let $p:T^*\overline C\to\overline C$ be the cotangent-bundle projection and let $\lambda$ be its tautological Liouville one-form. The **spectral curve** $\Sigma_u$ is the compactification of the degree-$K$ curve in $T^*\overline C$ defined by

$$\lambda^K+\sum_{r=2}^{K}p^*\phi_r\,\lambda^{K-r}=0,$$

Write $\pi=p|_{\Sigma_u}:\Sigma_u\to\overline C$ and also use $\lambda$ for the restriction of the tautological one-form. The curve is required to be reduced and to define a finite degree-$K$ branched cover. A **branch point** is a point of $\overline C$ over which at least one point of $\Sigma_u$ has local degree greater than one; the **branch locus** is the set of all such values. Away from the branch locus and $P$, the local roots are one-forms $\lambda^{(1)},\ldots,\lambda^{(K)}$. Remove the poles of $\lambda$ and write $\widetilde\Sigma=\Sigma_u\setminus\operatorname{Pol}(\lambda)$. The geometric charge group is the first singular homology $\Gamma_{\rm geom}=H_1(\widetilde\Sigma;\mathbb Z)$, namely closed integral one-cycles modulo boundaries. For a marked subset $A\subseteq\widetilde\Sigma$, relative one-cycles are chains in $\widetilde\Sigma$ whose boundary lies in $A$, modulo boundaries of two-chains in $\widetilde\Sigma$ and one-chains contained in $A$; their classes form $H_1(\widetilde\Sigma,A;\mathbb Z)$.

For distinct sheets $i,j$, a regular **$ij$-trajectory of Wentzel–Kramers–Brillouin (WKB) phase** $\vartheta_{\rm W}\in\mathbb R/2\pi\mathbb Z$ is a $C^1$ immersed path $z:I\to C\setminus\operatorname{Branch}(\pi)$, for an open interval $I\subseteq\mathbb R$, with $\dot z\ne0$ and

$$\operatorname{Im}\!\left(e^{-i\vartheta_{\rm W}}(\lambda^{(i)}-\lambda^{(j)})(\dot z)\right)=0.$$

Orient it so the real part inside this expression is positive. Reversing the orientation exchanges $ij$ with $ji$. A geometric WKB network is generated from the maximal such trajectories issuing from branch points and from the local junction rule: when compatible $ij$- and $jk$-trajectories meet, an $ik$-trajectory may issue from their joint. A simple branch point is one where exactly two sheets ramify and their local difference is proportional to $z^{1/2}$ in a local coordinate; this square-root form gives three outgoing trajectory directions. A physical **spectral network** also includes the model-supplied soliton data on its walls; in the usual class-S construction an $ij$ wall carries a soliton index $\mu$. A geometric trajectory with no supplied nonzero soliton data is not thereby a physical BPS state. The WKB phase $\vartheta_{\rm W}$ is independent data from the phase $\vartheta_{\rm fr}$ of a supersymmetric interface unless the selected model supplies a relation.

A **finite web** is a finite connected metric ribbon graph: each edge has positive finite length and a cyclic order at each vertex; each internal vertex is trivalent and maps to a network joint, and each external univalent vertex maps to a branch point. The metric is part of the declared convention. In the Gaiotto–Moore–Neitzke (GMN) string convention, an $ij$ edge has length $L_{ij}=\int_a^b |(\lambda^{(i)}-\lambda^{(j)})(\dot z(t))|\,dt$ along a regular parameterization $z:[a,b]\to C$, and its physical string mass is $L_{ij}/\pi$. In the geometric cubic-differential convention, a lifted T3 edge has flat length $L_{\rm KT}=\int |\lambda(\dot{\tilde z}(t))|\,dt$ on the canonical cover. For a local K=3 sheet pair with $\lambda^{(i)}-\lambda^{(j)}=(1-\omega)\lambda$, the GMN edge length is $\sqrt3 L_{\rm KT}$; these conventions are not silently identified. The graph's map is isometric in the explicitly selected edge metric, with its sheet-pair labels, to compatible network trajectories. Closed edges are permitted. An open web ending at a surface-defect parameter point is instead a relative web. For a closed web, the chosen sheet-lift rule joins its oriented sheetwise edge lifts into a cycle $\gamma_{\rm geom}\in\Gamma_{\rm geom}$. For an open web on a surface defect $\mathbb S_z$, put $A_z=\pi^{-1}(z)\subset\widetilde\Sigma$; its lifted chain is a class in $H_1(\widetilde\Sigma,A_z;\mathbb Z)$ with boundary $z^{(j)}-z^{(i)}$ for its outgoing $ij$ edge, where $z^{(i)}$ and $z^{(j)}$ are the corresponding preimages of $z$. For an interface path $\wp:z_1\to z_2$, put $A_{12}=\pi^{-1}(\{z_1,z_2\})\subset\widetilde\Sigma$; its framed charge $\bar a$ is a class in $H_1(\widetilde\Sigma,A_{12};\mathbb Z)$ with boundary $z_2^{(j)}-z_1^{(i)}$. These lifts depend on the stated local branch and junction rules. The physical charge group $\Gamma_{\mathcal T}$ is a model-specified quotient of a subgroup $\Gamma_0\le\Gamma_{\rm geom}$, supplied with a surjective quotient map $\rho:\Gamma_0\to\Gamma_{\mathcal T}$; it is not identified with all of $H_1(\widetilde\Sigma;\mathbb Z)$ by notation alone.

For geometric periods use $Z_{\rm geom}(\gamma)=\int_\gamma\lambda$. The physical central charge is a model-supplied group homomorphism $Z_{\mathcal T}:\Gamma_{\mathcal T}\to(\mathbb C,+)$ of mass dimension one; in particular, $Z_{\mathcal T}(0)=0$. The selected GMN normalization $Z_{\mathcal T}(\rho(\gamma))=\pi^{-1}\int_\gamma\lambda$ for $\gamma\in\Gamma_0$ is available only when $\int_\kappa\lambda=0$ for every $\kappa\in\ker\rho$, so the period formula is independent of the representative of $\rho(\gamma)$. If this descent condition is not supplied, the physical central charge remains a separate model datum and no equality with geometric periods is asserted. A cubic-differential T3 geometry may use $Z_{\rm geom}$; its geometric normalization is not a physical mass normalization.

For a generic point $z\in C$ outside the branch and puncture loci, the selected model may supply a canonical half-BPS surface defect $\mathbb S_z$ in the fundamental representation of the type-$A_{K-1}$ Lie algebra, whose $K$ isolated gapped vacua are labeled by $\pi^{-1}(z)$. It is a codimension-two insertion: model-specified local field, operator, or boundary data are supported on a smooth embedded two-dimensional submanifold of $M$ labeled by $z$; no topological invariance is assumed. In Cartesian coordinates $x^0,x^1,x^2,x^3$ one standard interface arrangement places $\mathbb S_{z_1}$ on $x^2=x^3=0$, $x^1<0$, places $\mathbb S_{z_2}$ on $x^2=x^3=0$, $x^1>0$, and places their interface along $x^1=x^2=x^3=0$. A generic interface datum consists of distinct regular points $z_1,z_2$, a path $\wp:z_1\to z_2$, and a phase $\vartheta_{\rm fr}$, giving a half-BPS interface $L_{\wp,\vartheta_{\rm fr}}$ between the two surface defects. In the convention used here, genericity excludes any nonzero bulk or relative central charge on the forbidden ray $e^{-i\vartheta_{\rm fr}}Z\in\mathbb R_{<0}$.

For a compact operator $A$ on a real or complex Hilbert space, **trace class** means that its singular values $s_n(A)$, the positive eigenvalues of $(A^*A)^{1/2}$ counted with multiplicity and padded with zeros, satisfy $\sum_{n\ge1}s_n(A)<+\infty$. Under the stated $\mathrm{AC}_\omega$ premise, the imported trace theorem gives a basis-independent trace $\operatorname{Tr}(A)$; for any supplied complete orthonormal system $E$, it equals the absolutely convergent sum $\sum_{e\in E}\langle Ae,e\rangle$. The following one-particle BPS sectors, when they exist, are model-supplied complex Hilbert spaces in the stated bulk-charge, defect-soliton, and framed-interface sectors. The selected model must specify the domains of the displayed composite operators; each must be defined on a dense domain and extend to a bounded trace-class operator on its indicated sector. Here and below, $\operatorname{Tr}$ denotes the basis-independent trace of that extension.

The **bulk second-helicity index** is

$$\Omega_{\mathcal T}(\gamma)=-\frac12\operatorname{Tr}_{\mathcal H^{1,\mathrm{BPS}}_{\gamma}}\!\left((-1)^{2J_3}(2J_3)^2\right),$$

where $J_3$ is the self-adjoint generator of a massive four-dimensional spatial rotation in the rest frame. The unrefined **surface-defect soliton index** is $\mu(\bar a)=\operatorname{Tr}_{\mathcal H^{1,\mathrm{BPS}}_{\mathbb S_z,\bar a}}F e^{i\pi F}$, with $F$ the specified fermion-number operator. The framed index for $L_{\wp,\vartheta_{\rm fr}}$ is

$$\overline\Omega(L_{\wp,\vartheta_{\rm fr}},\bar a;y)=\operatorname{Tr}_{\mathcal H^{1,\mathrm{BPS}}_{L_{\wp,\vartheta_{\rm fr}},\bar a}} e^{i\pi F}(-y)^{\mathcal J},\qquad \mathcal J=2J_{12}+2I_{12},$$

where $J_{12}$ is the generator of spatial rotations in the selected $1$–$2$ plane, $I_{12}$ is the selected $SU(2)_R$ generator, and $y$ is dimensionless; $y=1$ gives the unrefined framed index in this GMN convention. The choice of fermion-number operator and sign refinement is part of the model data; without it these indices are defined only up to sign. When the chosen sign refinement requires an extended lift of $\bar a$, the index is indexed by that lift and it must not be silently identified with a function of $\bar a$ alone. The cited LNM chapter writes its unrefined framed trace as $\operatorname{Tr} e^{i\pi F}$; these are recorded as separate conventions, with no equality asserted without a supplied operator relation. The geometric network does not determine any of these traces without the specified physical Hilbert sectors.

## Definition references

[[def-aqft-topological-defect]]

[[def-countable-choice]]

[[def-trace-class-operator]]

[[def-trace-of-a-trace-class-operator]]

[[thm-trace-is-absolutely-convergent-and-basis-independent]]

[Gaiotto, Moore, and Neitzke, *Spectral Networks*, §§2–5 and §9](https://arxiv.org/pdf/1204.4824)

[Kineider, Kydonakis, Rogozinnikov, Tatitscheff, and Thomas, *Spectral Networks: Bridging Higher-Rank Teichmüller Theory and BPS States*, Chapter 22](https://arxiv.org/pdf/2412.03588v3)

## Remarks

Gaiotto, Moore, and Neitzke state that the general finite-web zero-mode quantization is not complete in their treatment and describe the geometric wall-crossing explanation as “if not quite a proof.” The 2026 T3 cubic-differential preprint establishes geometric finite-web properties, not a numerical physical BPS index. These source qualifications do not update any historical open question to a current open status; any such classification needs a separate current source review.
