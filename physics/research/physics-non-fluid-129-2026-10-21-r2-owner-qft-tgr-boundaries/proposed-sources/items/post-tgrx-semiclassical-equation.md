---
id: post-tgrx-semiclassical-equation
kind: postulate
title: Semiclassical equation with fixed counterterms and state
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 5
deps:
  - def-tgrx-hadamard-stress-contract
  - post-tgrx-free-collapse-scattering
  - def-gr-curvature-tensor-and-derived-tensors
  - def-tgrx-curvature-squared-variation-tensors
dependency_roles:
  def-tgrx-hadamard-stress-contract: formulation-prerequisite
  post-tgrx-free-collapse-scattering: formulation-prerequisite
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-tgrx-curvature-squared-variation-tensors: formulation-prerequisite
physical_scope: "An adopted effective semiclassical scalar-field/gravity model on a specified smooth globally hyperbolic Lorentzian four-manifold, with fixed renormalized couplings, state, scale, and retarded prescription below a supplied cutoff. It asserts no solution existence, uniqueness, stability, order reduction, or backreaction history."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stefan Hollands and Robert M. Wald, Quantum fields in curved spacetime, complete review"
      url: "https://arxiv.org/pdf/1401.2026"
      locator: "Complete 77-page PDF retrieved; §3.1, PDF pp. 38–45, for locally covariant stress observables and curvature ambiguities; §3 and concluding discussion for the fixed-background quantum-field regime and its limits."
    - title: "Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0308048"
      locator: "Complete 59-page lecture-note PDF retrieved; §4.5, PDF pp. 16–17, equations (4.29)–(4.30), for the semiclassical source and conserved local curvature ambiguity."
    - title: "L. H. Ford, Quantum Field Theory in Curved Spacetime, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9707062"
      locator: "Complete 44-page lecture-note PDF retrieved; §3, PDF pp. 19–21, equations (3.7)–(3.10), for curvature-squared counterterms and the semiclassical equation; §5.1, PDF pp. 32–33, for higher-derivative and fluctuation limitations. Ford uses signature (+---); this item defines its own variation signs."
verification:
  precheck: n/a
---

## Postulate

Use SI units, a smooth globally hyperbolic Lorentzian four-manifold
$(M,g)$ without boundary of signature $(-,+,+,+)$, and length coordinates
$x^0=ct$. Let Newton's gravitational constant $G>0$ have units
$\mathrm{m^3\,kg^{-1}\,s^{-2}}$ and let $c>0$ have units
$\mathrm{m\,s^{-1}}$. Use the curvature convention
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and
$\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$,
$S=g^{bd}\operatorname{Ric}_{bd}$, and
$G_{ab}=\operatorname{Ric}_{ab}-\tfrac12 Sg_{ab}$; thus $S$ is the scalar
curvature and $G_{ab}$ is the Einstein tensor in that convention.
Use the positive Lorentzian volume density
$d\mathrm{vol}_g=|\det(g_{ab})|^{1/2}|dx^0\,dx^1\,dx^2\,dx^3|$.
The framework uses the same SI meanings of $G$ and $c$ as its selected
fixed-background free scalar-field model; no collapse geometry or scattering
premise from that model is imposed here.

Select finite constants $\Lambda_{\mathrm{cc}}$,
$\alpha_{\mathrm{ct}}$, and $\beta_{\mathrm{ct}}$, with units
$\mathrm{m^{-2}}$, $\mathrm{m^2}$, and $\mathrm{m^2}$ respectively;
$\Lambda_{\mathrm{cc}}$ is the cosmological
constant. Fix a positive renormalization scale $\mu$ in
$\mathrm{m^{-1}}$, finite renormalization conditions $\mathbf c$, and a
positive normalized state $\omega$ on the selected free scalar-field
algebra, with Hadamard two-point distribution. Use the prescribed local
stress tensor
$T^{\mathrm{ren}}_{ab}[g,\omega]$, obtained by subtracting one state-independent
Hadamard singular kernel from the state's two-point distribution, applying a
finite-order bidifferential operator and adding the fixed local curvature
correction. The tensors $H^{(R^2)}_{ab}$ and
$H^{(\operatorname{Ric}^2)}_{ab}$ are the selected smooth symmetric tensors
whose pairings with compactly supported inverse-metric variations give,
with positive sign, the first variations obtained by integrating the
pointwise derivatives of the scalar-curvature-squared and Ricci-squared
densities at the reference metric. These are the compactly supported
density derivatives specified by the variation-tensor definition; no finite
total curvature action or finite-parameter action difference is required. Also fix a retarded boundary rule for selecting the state/source
data on the modeled domain. A retarded Green operator for the selected Klein-Gordon operator $P$ means a supplied linear map
$E_R:C^\infty_0(M)\to C^\infty(M)$ satisfying both Green identities
$PE_Rf=f=E_RPf$ for every $f\in C^\infty_0(M)$ and
$\operatorname{supp}(E_Rf)\subseteq J^+(\operatorname{supp}f)$, where
$J^+(K)$ is the set of points reachable from $K$ by future-directed causal
curves. The retarded rule specifies the chosen $E_R$ and initial state data;
no future boundary data are inferred from the equation. Let
$E_{\mathrm{cut}}>0$ joules be the
chosen effective-model cutoff; its numerical value and admissible input
domain are supplied with each model instance.

Adopt the equation
$$G_{ab}+\Lambda_{\mathrm{cc}}g_{ab}+\alpha_{\mathrm{ct}}H^{(R^2)}_{ab}+\beta_{\mathrm{ct}}H^{(\operatorname{Ric}^2)}_{ab}=\frac{8\pi G}{c^4}T^{\mathrm{ren}}_{ab}[g,\omega]$$
on that domain, in the stated regime below $E_{\mathrm{cut}}$. With
$R_{abcd}$, $S$ and $G_{ab}$ of units $\mathrm{m^{-2}}$ and the two $H$
tensors of units $\mathrm{m^{-4}}$, every term has units $\mathrm{m^{-2}}$ in
length coordinates; $T^{\mathrm{ren}}_{ab}$ has SI stress-energy units
$\mathrm{J\,m^{-3}}$. This is an adopted effective model equation. It does
not assert that any solution exists, is unique or stable, or that it
describes a given physical system.

## Postulate references

[[def-tgrx-hadamard-stress-contract]]

[[post-tgrx-free-collapse-scattering]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-tgrx-curvature-squared-variation-tensors]]

