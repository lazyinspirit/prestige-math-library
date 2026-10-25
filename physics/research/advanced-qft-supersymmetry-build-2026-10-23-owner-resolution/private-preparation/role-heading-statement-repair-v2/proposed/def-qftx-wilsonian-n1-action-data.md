---
id: def-qftx-wilsonian-n1-action-data
kind: definition
title: Local N=1 Wilsonian Superspace Action Data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-ward-and-nonrenormalization
deps:
  - def-qftx-physical-superspace-normalization
  - def-qftx-n1-vector-superfield
  - def-qftx-n1-chiral-superfield
  - def-qftx-superspace-grassmann-algebra
  - def-qftx-nonabelian-brst-complex
  - lem-qftx-nonabelian-brst-nilpotence
dependency_roles:
  def-qftx-physical-superspace-normalization: formulation-prerequisite
  def-qftx-n1-vector-superfield: formulation-prerequisite
  def-qftx-n1-chiral-superfield: mathematical-premise
  def-qftx-superspace-grassmann-algebra: mathematical-premise
  def-qftx-nonabelian-brst-complex: mathematical-premise
  lem-qftx-nonabelian-brst-nilpotence: mathematical-premise
physical_scope: "Formal local perturbative Wilsonian action data for rigid four-dimensional N=1 gauge theories at a nonzero Wilsonian scale, in the topologically trivial sector. No regulator existence theorem, continuum construction, nonperturbative result, or empirical claim is asserted."
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Steven Weinberg, Non-Renormalization Theorems in Non-Renormalizable Theories"
      url: "https://arxiv.org/pdf/hep-th/9803099v1"
      locator: "The action and Wilsonian cutoff data in equations (1)–(3), pp. 2–3; the holomorphic F and real D integrands and their field arguments."
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§4.7 and 4.10, printed pp. 41 and 48–49: chiral superspace actions, general holomorphic superpotential, Kähler potential, and holomorphic gauge-kinetic function."
verification:
  precheck: n/a
---

## Definition

Use the physical action brackets $[U]_D=-I_D(U)/4$ and $[Y]_F=I_F(Y)/2$ from Physical superspace action brackets and canonical chiral components, with raw mathematical coefficient integrals $I_D,I_F$ unchanged. Physical chiral components obey $\psi_{\mathrm{raw}}=\sqrt2\psi$ and $F_{\mathrm{raw}}=2F$. All physical action and coupling formulas below use these brackets and physical component names; adding Hermitian conjugation applies only to the F action and occurs once.

Use the flat four-dimensional N=1 superspace conventions in natural units $c=\hbar=1$, with $M=\mathbb R^{1,3}$, metric $\eta=\operatorname{diag}(-1,1,1,1)$, and the ordered Grassmann generators, Berezin measures, chiral constraint, and covariant derivatives fixed by the earlier superspace definitions. Fix the global gauge group as a compact closed matrix subgroup $G\subset U(N)$; this chosen subgroup, rather than only its Lie algebra, is part of the data. Let $\mathfrak g$ be its finite-dimensional real Lie algebra, let $\mathcal H_i$ be finite-dimensional Hermitian spaces, and let $\rho_i:G\to U(\mathcal H_i)$ be smooth unitary representations for a finite family of chiral superfields $\Phi_i$. Work on the trivial bundle $M\times G$ and expand in the topologically trivial sector. Let $A_\mu$ be the connection component of the vector prepotential in a local trivialization. For the odd ghost $c$, use the non-Abelian BRST transformations $sA_\mu=\partial_\mu c+[A_\mu,c]$, $sc=-\tfrac12[c,c]$, and $s\Phi_i=-\rho_{i*}(c)\Phi_i$ on component fields and jets.

A vector prepotential $V$ is a dimensionless even Hermitian matrix-valued superfield in the chosen faithful representation of $G$. Representation maps below mean the complex-linear extension of the Lie-algebra differential, rather than evaluation of a group representation on a Lie-algebra element. Write $V_i$ for this represented prepotential. Let $\Lambda$ be an even chiral complexified Lie-algebra parameter, write $h_i=e^{-\Lambda_i}$, and define the Hermitian matter kernel $\mathscr H_i=e^{-V_i}$. The supergauge laws are $\Phi_i\mapsto h_i\Phi_i$ and $\mathscr H_i\mapsto(h_i^\dagger)^{-1}\mathscr H_i h_i^{-1}$. Define the curvature using this SAME matter kernel:

$$W_\alpha=-\tfrac14\bar D^{\dot\beta}\bar D_{\dot\beta}(\mathscr H^{-1}D_\alpha\mathscr H)=-\tfrac14\bar D^{\dot\beta}\bar D_{\dot\beta}(e^{V}D_\alpha e^{-V}).$$

It is chiral and transforms by $W_\alpha\mapsto hW_\alpha h^{-1}$. Indeed, with $D_\alpha(h^\dagger)^{-1}=0$, the transformed logarithmic derivative is $h\mathscr H^{-1}(D_\alpha\mathscr H)h^{-1}+hD_\alpha h^{-1}$. The chiral projection of the second term vanishes: $\bar D_{\dot\beta}h=0$ and the superspace derivative anticommutator makes $\bar D^2D_\alpha h^{-1}=0$. Chiral projection of the first term gives the stated conjugation law. The matter density is invariant because $\Phi_i'^\dagger\mathscr H_i'\Phi_i'=\Phi_i^\dagger\mathscr H_i\Phi_i$.

For each simple factor choose a fixed invariant quadratic trace functional $\operatorname{Tr}_{\mathrm h}$ (including its normalization and sign), and set $\tau=\vartheta/(2\pi)+4\pi i/g_{\mathrm h}^2$. The gauge density uses $\tau\operatorname{Tr}_{\mathrm h}(W^\alpha W_\alpha)/(8\pi i)$; the quadratic functional and $g_{\mathrm h}$ together, not a symbol $g$ alone, determine its normalization. Product groups have one such choice per factor. For a fixed normalized trace, $g_{\mathrm h}$ occurs in $\tau$, not in the prepotential exponential.

The exact classical bridge to Four-dimensional N=1 non-Abelian vector superfield in connection normalization is at fixed real $g=g_{\mathrm{YM}}>0$: set $V=-2gV_{30}$, $\Lambda=-i\Lambda_{30}$ and $\mathscr H=e^{2gV_{30}}$. Then $h=e^{i\Lambda_{30}}$, the matter kernel and its gauge law agree, and $W_\alpha=\mathscr C_{\alpha,30}$ is the earlier REPRESENTED matrix curvature by substitution. The earlier abstract Lie-algebra-valued curvature instead satisfies $\rho_*(\mathcal W_{\alpha,30})=W_\alpha/(2i)$, because $W_\alpha=2g t_aW^a_{\mathrm{can},\alpha}$ and $\mathcal W_{\alpha,30}=gT_aW^a_{\mathrm{can},\alpha}$ with $t_a=iT_a$. The connection remains $A_\mu=-igB_\mu$, with the same component BRST law. For this selected $SU(2)$ bridge use the ordinary defining trace $\operatorname{Tr}_{\mathrm h}=\operatorname{Tr}_2$. Then

$$\frac{1}{4g^2}\kappa_{\mathbb C}(\mathcal W^\alpha_{30},\mathcal W_{\alpha,30})=\frac{1}{8g^2}\operatorname{Tr}_2(W^\alpha W_\alpha).$$

The holomorphic datum writes this coefficient as $\tau\operatorname{Tr}_2(W^\alpha W_\alpha)/(8\pi i)$. Therefore at zero topological angle the exact parameter match is $\tau=\pi i/g^2$, or $g_{\mathrm h}=2g$ in the displayed definition $\tau=4\pi i/g_{\mathrm h}^2$. This factor is derived from the matrix-versus-Lie curvature dictionary, not removed by changing the trace sign. Hermitian conjugation is added once on both sides of the chiral equality; the real D-term is not doubled. The selected earlier models have zero theta term, so no global theta-period or D'Hoker prepotential conversion is asserted here. These are identities of classical densities at fixed real parameters, with no quantum change of variables, anomalous Jacobian, holomorphic canonical normalization or equality of regulated measures.

A local rigid N=1 action datum has the fixed canonical matter kinetic term $\sum_i\Phi_i^\dagger e^{-V_i}\Phi_i$, an additional real gauge-invariant formal power series $G(\Phi,\bar\Phi,V,\partial_\mu,D_\alpha,\bar D_{\dot\alpha})$, and a holomorphic gauge-invariant formal power series $F(\Phi,W)$. The additional $G$ may contain local spacetime or superspace derivatives; $F$ contains no such derivatives, anti-chiral variables, or spacetime dependence. Its formal ultraviolet-cutoff density is

$$\mathcal L_{\Lambda_0}=[\sum_i\Phi_i^\dagger e^{-V_i}\Phi_i+G]_D+2\operatorname{Re}[\frac{\tau}{8\pi i}\operatorname{Tr}_{\mathrm h}(W^\alpha W_\alpha)+F(\Phi,W)]_F.$$

In a two-derivative scalar sector, a real function $K(\phi,\bar\phi)$ of the scalar components $\phi_i$ is a Kähler potential, and its Hermitian matrix $g_{i\bar j}=\partial^2 K/(\partial\phi_i\partial\bar\phi_j)$ is the associated Kähler metric wherever it is nondegenerate. These are particular data in the real D-term, not part of the holomorphic F-term.

Here $[\Phi_i]=1$, $[W_\alpha]=3/2$, $[g]=0$, $[\tau]=0$, the F-term integrand has mass dimension three, and the D-term integrand has mass dimension two; dimensionful coefficients in nonrenormalizable interactions carry the dimensions needed to make the density have mass dimension four. A Wilsonian prescription with cutoffs $0<\lambda<\Lambda_0$ formally separates Euclidean momentum modes with $|q|\geq\lambda$ from modes with $|p|<\lambda$. Let $S_\lambda^{\mathrm{vert}}$ denote the coefficientwise functional assigned by the selected cutoff prescription. For this definition, its perturbative vertex coefficients are assumed to be sums of one-particle-irreducible graphs in that prescribed expansion: cutting a single internal propagator line cannot disconnect a graph counted as one vertex. This is an explicit property of the selected formal vertex functional, not a theorem about generic partial integration in an interacting theory. Assume also that $S_\lambda^{\mathrm{vert}}$ has a local derivative expansion in local terms with finitely many derivatives at each formal perturbative order for external momenta $|p|\ll\lambda$. Write its density using $G_\lambda$, $F_\lambda$, and $\tau_\lambda$ in the same form as $\mathcal L_{\Lambda_0}$.

A regulated formal expectation $\langle\mathcal O\rangle_\lambda$ is the normalized coefficientwise functional assigned by a specified cutoff prescription; the notation asserts no convergence or physical continuum measure. A local insertion $\mathcal O$ is a polynomial or formal local function of the fields and finitely many spacetime derivatives, multiplied by a compactly supported test function. For an insertion $\mathcal O$ and the rigid supersymmetry variation generated by the N=1 supercharges, its Ward identity is the change-of-variables equation $\langle\delta_{\epsilon,\bar\epsilon}\mathcal O\rangle_\lambda=\langle\mathcal O\,\delta_{\epsilon,\bar\epsilon}S_\lambda\rangle_\lambda$. The BRST Ward identity is $\langle s\mathcal O\rangle_\lambda=0$ when $sS_\lambda=0$. A local gauge anomaly is a nonzero local insertion in the latter identity. A regulator preserves these Ward identities when the equations hold coefficientwise at every perturbative order without an anomaly insertion; this definition does not assert that such a regulator exists for every field representation.

The spurion argument additionally uses the local background extension of this formal prescription: independent F coefficients and $\tau$ are nondynamical chiral superfields, and independent real D coefficients are unconstrained real superfields. The prescribed regulated counterterms obey the same superspace and gauge Ward identities for these backgrounds and have a local derivative expansion in them. The derivative-free chiral sector is evaluated at constant scalar backgrounds after that extension; background-superderivative terms belong to the real D sector after chiral projection. This is the usual spurion-compatible regulator hypothesis, not a consequence of classical BRST nilpotence or a regulator-existence theorem. Its counterterms depend on the original background coefficients, so a redundant parametrization of those coefficients introduces no independent physical coupling. No rescaling of an integrated matter or vector field is assumed in this extension.

The component background fields are smooth on $M$, and admissible variations and insertions are compactly supported or satisfy decay conditions that make the stated total-derivative boundary terms vanish. Loop momenta are regulated separately by the Wilsonian high-mode prescription.

For a U(1) factor, normalize its gauge parameter as $e^{i\alpha}$ with period $2\pi$. Each chiral matter representation decomposes into integer charge weights $q_{i,a}$; the total charge trace $\sum_i\sum_a q_{i,a}$ counts each weight with its multiplicity. In the stated supergauge convention the real Abelian vector prepotential $V_1$ shifts by the negative of a chiral parameter and its conjugate. Under compact-support or vanishing-boundary-term conditions, the physical action $\int d^4x\,[\xi V_1]_D$ is gauge invariant for constant $\xi$ and is called a Fayet–Iliopoulos term; $\xi$ is its field-independent coefficient. For an Abelian fixed-$g$ component bridge, $V_1=-2gV_{30}$ gives $[\xi V_1]_D=-g\xi D_B$ in the auxiliary sector. Thus the coefficient $\xi_D$ of $+D_B$ is $\xi_D=-g\xi$ in this convention; no differently signed source FI symbol is silently identified. This definition specifies formal action and cutoff data only; it does not assert that a gauge-invariant supersymmetric regulator exists for every field representation or that the perturbative series converges.

## Definition references

[Weinberg, equations (1)–(3)](https://arxiv.org/pdf/hep-th/9803099v1)

[Martin, §§4.7 and 4.10](https://arxiv.org/pdf/hep-ph/9709356v7)

[[def-qftx-n1-vector-superfield|earlier vector-prepotential convention and fixed-coupling bridge]]

[[def-qftx-n1-chiral-superfield|N=1 chiral-superfield definition]]

[[def-qftx-superspace-grassmann-algebra|N=1 superspace Grassmann algebra]]

[[def-qftx-nonabelian-brst-complex|finite-jet non-Abelian BRST complex]]

[[lem-qftx-nonabelian-brst-nilpotence|BRST nilpotence lemma]]

[[def-qftx-physical-superspace-normalization]]

