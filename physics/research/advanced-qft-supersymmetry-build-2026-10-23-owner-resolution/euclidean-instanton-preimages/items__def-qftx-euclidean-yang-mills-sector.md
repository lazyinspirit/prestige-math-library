---
id: def-qftx-euclidean-yang-mills-sector
kind: definition
title: Euclidean Yang–Mills sectors and instanton interpretation
status: draft
origin: session
dependency_level: 3
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
physical_scope: "Conditional source-free pure SU(2) Euclidean Yang–Mills formulation on a closed oriented Riemannian four-manifold, or on R^4 only with the specified smooth compactification extension. Its Euclidean action is a separate model input, not a consequence of the current Lorentzian postulate. Classical sectors and formal continuum notation only; no quantum measure or continuum construction."
axiom_base: "ZF + AC_omega through the specified gauge-data and principal-connection suppliers; full AC enters through the supplied SU(2) integral Chern-class comparison."
deps:
  - def-countable-choice
  - def-axiom-of-choice
  - def-qftx-nonabelian-gauge-data
  - def-qftx-principal-connection-form
  - def-qftx-lie-algebra-valued-form-bracket
  - lem-qftx-principal-curvature-cartan-bianchi
  - def-gauge-group-of-a-smooth-principal-bundle
  - post-qftx-nonabelian-yang-mills-model
  - def-qftx-instanton-number-and-asd-sector
dependency_roles:
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-qftx-nonabelian-gauge-data: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  def-qftx-lie-algebra-valued-form-bracket: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-gauge-group-of-a-smooth-principal-bundle: mathematical-premise
  post-qftx-nonabelian-yang-mills-model: physical-assumption
  def-qftx-instanton-number-and-asd-sector: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, TASI Lectures on Solitons, Lecture 1: Instantons (full lecture notes)"
      url: "https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf"
      locator: "§§1.1–1.1.1, printed pp. 6–9: Euclidean SU(N) action, finite-action boundary data, winding sectors, action bound, and the Bianchi implication."
    - title: "Stefan Vandoren and Peter van Nieuwenhuizen, Lectures on instantons (full lecture notes)"
      url: "https://arxiv.org/pdf/0802.1862"
      locator: "§§1–2, printed pp. 3–9: finite-action Euclidean definition, SU(N) trace and curvature conventions, R^4 compactification, winding number, and self-dual action bound."
verification:
  precheck: n/a
---

## Definition

Assume countable choice $\mathrm{AC}_\omega$, meaning that every countable family of nonempty sets has a choice function, for the specified smooth gauge-data and principal-connection constructions. Let $(X,g_X)$ be a connected, compact, oriented, finite-dimensional Hausdorff second-countable smooth four-manifold without boundary, with a supplied Riemannian metric. The alternative flat-space branch is standard oriented Euclidean $M=\mathbb R^4$ together with a fixed smooth trivialization outside a ball and a specified smooth extension $(\bar P,\bar A)$ over $X=S^4$ with its unit round metric, which is conformal to the flat metric in the stereographic chart. In the compact branch set $M=X$ and $(\bar P,\bar A)=(P,A)$. The extension and its transition map are part of the field data. Finite action alone is not asserted to imply such an extension. Write $g=g_X$ in the compact branch and $g=\delta$ in the flat branch.

Fix the global structure group $G=SU(2)$, not its quotient, and let $\bar P\to X$ be a smooth right principal $SU(2)$-bundle: the right action is smooth, free, and transitive on each fibre, and local trivializations are equivariant. Its isomorphism class belongs to the model-specified set $\Sigma$ of admitted bundle sectors. In the flat branch the physical bundle is $P=\bar P|_M$. An isomorphism here is a smooth equivariant diffeomorphism over $\operatorname{id}_X$, and $\Sigma$ may be a singleton. Let $\bar\omega$ be a smooth $\mathfrak{su}(2)$-valued principal connection one-form satisfying $R_g^*\bar\omega=\operatorname{Ad}_{g^{-1}}\bar\omega$ and $\bar\omega(\xi_{\bar P})=\xi$, where $\xi_{\bar P}(p)=\left.\frac{d}{dt}\right|_0p\exp_{SU(2)}(t\xi)$. In a local section $s_i$ of $\bar P$, write $A_i=s_i^*\bar\omega$ and $F_i=dA_i+\tfrac12[A_i\wedge A_i]$; the alternating wedge–Lie bracket is normalized by $\tfrac12[A_i\wedge A_i](Y,Z)=[A_i(Y),A_i(Z)]$. The Hodge star is determined by $\alpha\wedge *_{g_X}\beta=\langle\alpha,\beta\rangle_{g_X}\,d\operatorname{vol}_{g_X}$ on two-forms, acts on the form part of $\mathfrak{su}(2)$-valued forms, and satisfies $*_{g_X}^2=1$ there.

For the Euclidean branch considered here, separately stipulate the pure-gauge action as a model input; this is not derived by Wick rotation from the current Lorentzian SU(2) model postulate, whose spacetime metric is fixed to Minkowski. Use anti-Hermitian defining-representation generators with $\operatorname{tr}_{\mathbf2}(T_aT_b)=-\tfrac12\delta_{ab}$, the positive invariant form $\kappa(X,Y)=-2\operatorname{tr}_{\mathbf2}(XY)$, and a fixed dimensionless coupling $g_{\mathrm{YM}}>0$. In natural units $c=\hbar=1$, $A_\mu$ has mass dimension one, $F_{\mu\nu}$ has mass dimension two, and $S_E/\hbar$ is dimensionless. The conditional Euclidean action is

$$S_E[A]=\frac{1}{2g_{\mathrm{YM}}^2}\int_M\kappa(F_A\wedge *_gF_A).$$

In the flat-space branch admissibility also requires $S_E[A]<\infty$ on $\mathbb R^4$. Define $B_{\mathrm{top}}(X,Y)=-\operatorname{tr}_{\mathbf2}(XY)=\kappa(X,Y)/2$. The mathematical charge used here is the supplied trace-normalized charge of the compactified connection,

$$\nu(\bar P,\bar A)=\frac{1}{8\pi^2}\int_X B_{\mathrm{top}}(F_{\bar A}\wedge F_{\bar A})=-\frac{1}{8\pi^2}\int_X\operatorname{tr}_{\mathbf2}(F_{\bar A}\wedge F_{\bar A})=-\langle c_2(\bar E_{\mathbf2}),[X]\rangle\in\mathbb Z,$$

where $\bar E_{\mathbf2}=\bar P\times_{\mathbf2}\mathbb C^2$ and the final equality uses the supplied instanton-number definition with its full-Axiom-of-Choice and Chern–Weil hypotheses. This sign makes a positive-charge self-dual configuration satisfy $F_{\bar A}=*_{g_X}F_{\bar A}$ and a negative-charge anti-self-dual configuration satisfy $F_{\bar A}=-*_{g_X}F_{\bar A}$ on the compactified base. The charge label is not asserted to classify every connected component or every gauge orbit.

Let $\mathcal A_\nu(\Sigma)$ denote the disjoint union, over the bundle sectors in $\Sigma$, of their admissible smooth connections whose compactified charge is $\nu$. In the flat-space branch, admissible connections are required to have the specified smooth extension and finite Euclidean action.

A classical Euclidean saddle is a smooth admissible connection whose first variation of $S_E$ vanishes for every smooth compactly supported connection variation preserving the boundary data. An instanton (respectively anti-instanton) saddle is a nonzero-charge saddle satisfying the positive (respectively negative) self-duality equation. A source observable is a gauge-invariant function $O$ on the admissible connection data; gauge transformations are smooth principal-bundle automorphisms over $\operatorname{id}_M$.

The notation

$$Z_{\mathrm{formal}}(\theta;O)=\sum_{\nu}e^{i\theta\nu}\int_{\mathcal A_{\nu}(\Sigma)}\mathcal D A\;O[A]e^{-S_E[A]}$$

denotes only a formal continuum sector expression over connections, with gauge redundancy left untreated. Here $\theta$ is dimensionless and has period $2\pi$ when $\nu$ is integral. The expression defines no functional measure, gauge fixing or orbit-volume prescription, determinant, convergent integral, Hilbert-space sector, or continuum quantum field theory, and selects no finite regulator or limit.

## Definition references

[Tong, §§1.1–1.1.1, complete instanton lecture](https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf)

[Vandoren and van Nieuwenhuizen, §§1–2, complete instanton lecture notes](https://arxiv.org/pdf/0802.1862)

[[def-countable-choice|Countable-choice assumption for the supplied connection construction]]

[[def-axiom-of-choice|Full choice assumption in the integral charge comparison]]

[[def-qftx-nonabelian-gauge-data|Specified global form, bundle sector, and representation data]]

[[def-qftx-principal-connection-form|Right-action principal connection form]]

[[def-qftx-lie-algebra-valued-form-bracket|Graded wedge–Lie bracket convention]]

[[lem-qftx-principal-curvature-cartan-bianchi|Cartan curvature and Bianchi identity]]

[[def-gauge-group-of-a-smooth-principal-bundle|Gauge transformations as base-fixing principal automorphisms]]

[[post-qftx-nonabelian-yang-mills-model|Current Lorentzian SU(2) model postulate; it has no Euclidean branch]]

[[def-qftx-instanton-number-and-asd-sector|Trace-normalized charge and self-duality definition on the compact base]]
