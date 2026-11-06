---
id: def-r5-flux-vacuum-ensemble-data
kind: definition
title: "Flux-vacuum ensemble and tadpole-bound data"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Definition of a specified compactification and vacuum-counting ensemble. It supplies no cosmological population probability, observer measure, or claim that a counted effective-theory root is a globally complete string background."
empirical_premises: []
sources:
  references:
    - title: "Frederik Denef and Michael R. Douglas, Distributions of Flux Vacua, arXiv:hep-th/0404116v2"
      url: "https://arxiv.org/pdf/hep-th/0404116v2"
      locator: "§1.5 and §2.1, PDF pp. 9–14; ensemble, flux coordinates, allowed orientifold subspace, and tadpole convention."
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.1, Eqs. (2.23)–(2.25), PDF pp. 7–9; three-form flux charge, quantization convention, and the source-dependent tadpole."
    - title: "Mariana Graña, Flux Compactifications in String Theory: A Comprehensive Review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "Complete 85-page review; §8, Eqs. (8.1)–(8.12); vacuum density, flux sum, and the distinction between signed index and total count."
---
## Definition

A flux-vacuum ensemble datum is a record
$$
(\mathcal C,\mathcal M,U,V_{\mathbb R},\Lambda,\eta,\mathscr S,L_*,\Phi,\kappa).
$$
Here $\mathcal C$ is the supplied compactification-model data, not a set over which this record automatically sums. It includes a compact smooth internal manifold $Y$ of declared dimension and stated boundary status, orientation and smooth geometric structures; a declared field-index set $J$ and smooth vector bundles $E_j\to Y$ for $j\in J$; and each field $s_j$ as a $C^{r_j}$ section of $E_j$ on a stated open domain $Y_{\rm reg}\subseteq Y$, with $r_j\in\mathbb N_0\cup\{\infty\}$. If a field is singular at a source, its distributional extension and support are supplied; no smoothness across that support is assumed. The admissible field configurations form a declared set $\mathscr F$ of such sections. The field and critical-point equations are supplied as maps $\mathcal E_\ell:\mathscr F\to W_\ell$ into declared target spaces, with their regularity and boundary conditions; solutions are elements of $\bigcap_\ell\mathcal E_\ell^{-1}(0)$. An equivalence relation $\sim$ on this solution set records the adopted dualities. A localized-source record specifies a closed support $S_s\subseteq Y$, a source current $J_s$ (a distributional section of a declared bundle supported on $S_s$), a charge in a declared charge space, and an orientation convention. A brane label is a declared source type on such a record. Orientifold data specify a smooth involution $\sigma:Y\to Y$ with $\sigma^2=\mathrm{id}$, its declared bundle maps on the fields, and the associated source records on the fixed set. All these are model inputs; this definition asserts neither that the equations have a solution nor that the supplied data form a consistent string background. Pooling distinct model records requires an additional counting or weighting rule and is not part of this datum. The moduli space $\mathcal M$ and equation maps below are the specified moduli and critical-equation data for this model. The manifold $\mathcal M$ is second-countable and smooth complex of dimension $m\geq1$, with local complex coordinates $z^1,\ldots,z^m$; $U\subseteq\mathcal M$ is the root-counting region, measurable in every local real coordinate chart.

The real flux space $V_{\mathbb R}$ has dimension $K$. Its flux lattice $\Lambda\subset V_{\mathbb R}$ is a discrete subgroup with an ordered integral basis $e_1,\ldots,e_K$; a lattice element has coordinate vector $N=(N^1,\ldots,N^K)\in\mathbb Z^K$. The chosen basis fixes the Lebesgue measure $d^K N$ with unit lattice covolume. The nondegenerate symmetric bilinear pairing $\eta:V_{\mathbb R}\times V_{\mathbb R}\to\mathbb R$ has matrix $(\eta_{\alpha\beta})$ in this basis. Define the dimensionless flux tadpole $L(N)=\tfrac12N^\alpha\eta_{\alpha\beta}N^\beta$. The pairing need not be positive definite on all of $V_{\mathbb R}$; positivity on a supersymmetric solution locus is separate model data. The allowed source set $\mathscr S$ fixes localized charges, orientation, cover-versus-quotient multiplicity, and the resulting tadpole bound $L_*>0$.

The equation data include a jointly $C^1$ map $\Phi:V_{\mathbb R}\times\mathcal M\to\mathbb C^m$ whose slices $\Phi_N(z):=\Phi(N,z)$ are smooth in $z$; the map is understood in local real coordinates on $V_{\mathbb R}$ and $\mathcal M$. Write $\phi_N:\mathcal M\to\mathbb R^{2m}$ for its real-coordinate form. A finite-lattice mode uses only the restrictions with $N\in\Lambda$. A continuum-approximation mode uses the supplied map for every real $N\in V_{\mathbb R}$; these values are additional model data and are not determined by the restriction to $\Lambda$. Thus lattice maps alone do not define the continuum integral below. The selected region $U$ is measurable with respect to local Lebesgue measure in these charts; roots are counted only at $z\in U$. Such a root is regular when the real derivative $D\phi_N(z):T_z\mathcal M\to\mathbb R^{2m}$ is an isomorphism, equivalently when its matrix in local real coordinates is invertible. For a regular root set, the local zero-counting density is the coordinate expression $\delta_0^{(2m)}(\phi_N(z))|\det_{\mathbb R}D\phi_N(z)|\,d^{2m}z$, where $\delta_0^{(2m)}$ is the Dirac distribution defined by $\int_{\mathbb R^{2m}}\delta_0^{(2m)}(y)\psi(y)\,d^{2m}y=\psi(0)$ for smooth compactly supported $\psi$.

The record $\kappa$ identifies which quantity is being counted: total roots, supersymmetric roots, signed index, finite-lattice count, or continuum approximation. The signed index uses the signed real Jacobian rather than its absolute value. The delta-density prescription is admissible only for regular counted roots: in a lattice count using that prescription, require every counted root at each allowed lattice vector to be regular. For a continuum count, supply a Lebesgue-null measurable exceptional set $E\subseteq V_{\mathbb R}$ and require every counted root to be regular for every $N\notin E$ with $L(N)\leq L_*$. For such $N$, the density means the atomic measure $\sum_{z\in U:\,\phi_N(z)=0}\delta_z$, each root carrying unit mass; it is not a delta pullback at a singular zero. For the index, replace each unit mass by $\operatorname{sgn}\det_{\mathbb R}D\phi_N(z)$, using the complex orientation of $\mathcal M$ and the standard orientation of $\mathbb R^{2m}$. A mode that includes singular roots must supply a separate counting rule for them; the displayed density assigns them no count. A mode called finite requires finitely many counted lattice-root pairs; the tadpole inequality alone does not ensure this for an indefinite $\eta$. In the continuum-approximation mode, replace the lattice sum by the Lebesgue integral of the root count over $L(N)\leq L_*$ in the fixed unit-covolume basis, with integrand set to zero on $E$. Require that count to be Lebesgue measurable. Nonnegative total counts may take the value $+\infty$; a finite signed index requires absolute integrability of its positive and negative root contributions. These are admissibility conditions, not asserted properties of arbitrary smooth equation data. This is a counting approximation, not a probability distribution on vacua; its error and regime of validity must be stated separately and are not supplied by this definition.

## Remarks

The flux coordinates and tadpole are dimensionless in the chosen charge normalization. Different flux lattices, duality quotients, source conventions, or zero-counting modes define different ensemble data. A finite continuum integral does not by itself define how cosmological histories populate vacua or how observers select them.
