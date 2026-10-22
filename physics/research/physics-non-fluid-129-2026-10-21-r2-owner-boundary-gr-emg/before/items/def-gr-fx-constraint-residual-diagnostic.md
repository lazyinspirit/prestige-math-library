---
id: def-gr-fx-constraint-residual-diagnostic
kind: definition
title: "A discrete Hamiltonian and momentum constraint diagnostic"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps:
  - def-gr-fx-fixed-gauge-data-topology
  - thm-gr-constraint-equations-in-normal-frame
dependency_roles:
  def-gr-fx-fixed-gauge-data-topology: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
physical_scope: "A mathematical definition of finite-grid residuals in the stated general-relativity sign and SI-coordinate conventions. The values are diagnostics and do not certify a continuum development or a physical solution."
sources:
  references:
    - title: "Éric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012; author preprint arXiv:gr-qc/0703035v1), §§2.5, 4.4.3, 6.5.2–6.5.3 and 10.3.2; complete 220-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "Helmut Friedrich and Alan Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), §§2.2 and 3.1; complete 97-page review"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon and Éric Gourgoulhon, From Geometry to Numerics, arXiv:0712.2332v2 (2008), §§3.2, 4.1–4.2 and 5.1; complete 72-page review"
      url: "https://arxiv.org/pdf/0712.2332"
verification:
  precheck: pending
---

## Definition

Use the dimensionless angular coordinates $x^i$ and the periodic spatial
three-torus from the earlier fixed-gauge data definition. Choose integers
$N_i\ge3$, coordinate spacings $\Delta_i:=2\pi/N_i$, and the finite periodic
grid
$$
G_{\boldsymbol\Delta}:=\{(2\pi j_1/N_1,2\pi j_2/N_2,2\pi j_3/N_3): 0\le j_i<N_i\}\subset\mathbb T^3_{2\pi}.
$$
At each grid node $p$, supply a real symmetric positive-definite matrix
$h_{ij}(p)$ and its matrix inverse $h^{ij}(p)$ (so
$h^{ik}(p)h_{kj}(p)=\delta^i{}_j$), a real symmetric array $K_{ij}(p)$,
a scalar $\rho(p)$, a covector array $j_i(p)$, and real constants $\Lambda$
and $\kappa>0$. These are the sampled spatial metric, second fundamental
form, energy density and momentum density in the convention of
[[thm-gr-constraint-equations-in-normal-frame]]: for a future unit normal $n$
and the coordinate basis $\partial_i$, $K(X,Y)=g(\nabla_Xn,Y)$,
$\rho=T(n,n)$ and $j_i=-T(n,\partial_i)$, where $T$ is a smooth symmetric
covariant two-tensor. The array definition itself needs only the listed
samples and does not assume the continuum field equation. The vacuum case is
$\rho=j_i=\Lambda=0$. In the SI angular-coordinate convention used here,
$[x^i]=1$, $[h_{ij}]=\mathrm m^2$, $[K_{ij}]=\mathrm m$,
$[\rho]=\mathrm{J\,m^{-3}}$, $[j_i]=\mathrm{J\,m^{-2}}$,
$[\Lambda]=\mathrm m^{-2}$, and
$[\kappa]=\mathrm{m^{-1}\,kg^{-1}\,s^2}$. Thus the scalar residual below
has units $\mathrm m^{-2}$ and its covector components in this angular basis
have units $\mathrm m^{-1}$.

Let $\mathbb R^{G_{\boldsymbol\Delta}}$ denote the real arrays indexed by
the grid. Choose and specify linear maps
$\delta_i:\mathbb R^{G_{\boldsymbol\Delta}}\to
\mathbb R^{G_{\boldsymbol\Delta}}$ with $\delta_i1=0$; apply them
componentwise to tensor arrays. Periodic index wrapping is used here. Define
the discrete connection components, curvature, Ricci array and scalar
curvature by nodewise operations, with every index $i,j,k,\ell,a,b$ ranging
over $1,2,3$ and repeated upper/lower indices summed:
$$
\Gamma^k{}_{ij,\boldsymbol\Delta}:= \frac12h^{k\ell}(\delta_i h_{j\ell}+\delta_j h_{i\ell}-\delta_\ell h_{ij}),
$$
$$
R^a{}_{b i j,\boldsymbol\Delta}:= \delta_i\Gamma^a{}_{jb,\boldsymbol\Delta} -\delta_j\Gamma^a{}_{ib,\boldsymbol\Delta} +\Gamma^a{}_{i\ell,\boldsymbol\Delta}\Gamma^\ell{}_{jb,\boldsymbol\Delta} -\Gamma^a{}_{j\ell,\boldsymbol\Delta}\Gamma^\ell{}_{ib,\boldsymbol\Delta}, \qquad \operatorname{Ric}_{ij,\boldsymbol\Delta}:=R^k{}_{i k j,\boldsymbol\Delta}, \qquad R_{\boldsymbol\Delta}:=h^{ij}\operatorname{Ric}_{ij,\boldsymbol\Delta}.
$$
Set
$$
\tau_{\boldsymbol\Delta}:=h^{ij}K_{ij},\qquad |K|^2_{\boldsymbol\Delta}:=h^{ik}h^{j\ell}K_{ij}K_{k\ell},
$$
$$
(D_i^{\boldsymbol\Delta}K)_{kj}:= \delta_iK_{kj}-\Gamma^\ell{}_{ik,\boldsymbol\Delta}K_{\ell j} -\Gamma^\ell{}_{ij,\boldsymbol\Delta}K_{k\ell}.
$$
The signed discrete Hamiltonian and momentum residuals are
$$
\mathcal H_{\boldsymbol\Delta}:= R_{\boldsymbol\Delta}+\tau_{\boldsymbol\Delta}^2 -|K|^2_{\boldsymbol\Delta}-2\Lambda-2\kappa\rho,
$$
$$
\mathcal M_{\boldsymbol\Delta,j}:= h^{ik}(D_i^{\boldsymbol\Delta}K)_{kj} -\delta_j\tau_{\boldsymbol\Delta}+\kappa j_j.
$$
These signs match the Hamiltonian and momentum constraints in
[[thm-gr-constraint-equations-in-normal-frame]] when its pointwise equation
$G+\Lambda g=\kappa T$ is assumed. The displayed discrete formulas are array
operations: they do not define a coordinate-covariant discrete connection or
assume a discrete Leibniz rule. A reconstruction map has the exact type
$$
\mathcal I_{\boldsymbol\Delta}:\mathcal D_{\boldsymbol\Delta}\longrightarrow \mathcal C,
$$
where $\mathcal D_{\boldsymbol\Delta}$ is the set of all grid arrays
$(h_{ij},K_{ij},\rho,j_i)$ with the pointwise symmetry and positive-definite
conditions above, and $\mathcal C$ is the set of pointwise assignments on
$\mathbb T^3_{2\pi}$ of a positive-definite symmetric covariant two-tensor
$h$, a symmetric covariant two-tensor $K$, a scalar $\rho$ and a covector
$j$, with the same units. No continuity or differentiability of a member of
$\mathcal C$ is implied; if continuum derivatives are used, the needed
regularity must be stated separately. Specify $\mathcal I_{\boldsymbol\Delta}$
as part of each diagnostic, since it records which continuum field the grid
is intended to represent. For every reported diagnostic, also record the grid
norm and its weights, the mesh hierarchy, the units, the derivative maps, the
periodic boundary treatment, and $\mathcal I_{\boldsymbol\Delta}$. A small
residual by itself does not assert closeness to an exact constraint-satisfying
development.

## Definition references

[[def-gr-fx-fixed-gauge-data-topology]]

[[thm-gr-constraint-equations-in-normal-frame]]

## Remarks

The geometric convention in the constraint theorem fixes the signs above.
Gourgoulhon's 3+1 lecture notes use the opposite sign for the second
fundamental form in their convention; their displayed equations are therefore
context and cross-checks only, not a source for silently replacing the local
sign convention.
