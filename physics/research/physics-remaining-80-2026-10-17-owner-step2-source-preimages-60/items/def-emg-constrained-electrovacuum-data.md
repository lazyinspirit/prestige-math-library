---
id: def-emg-constrained-electrovacuum-data
kind: definition
title: Constrained electrovacuum initial data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: [def-emg-electrovacuum-cauchy-system, def-emg-periodic-high-sobolev-state, def-gr-spacelike-initial-data-and-constraints, lem-emg-observer-field-decomposition, lem-gr-periodic-sobolev-embedding, lem-gr-periodic-sobolev-algebra, lem-gr-smooth-composition-and-commutator-estimates, thm-gr-constraint-equations-in-normal-frame]
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-periodic-high-sobolev-state: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, October 12 2022 revision, sections 10.3-10.5"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 10.4, equations (10.24)-(10.26), defines the Hamiltonian and momentum constraints using h and K=1/2 L_n h; section 10.5 describes the Cauchy data."
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Section II.3, equations (79)-(80), writes the electromagnetic Hamiltonian and momentum sources; its conventions are translated to the SI-normalized stress tensor and the stated positive K convention."
verification:
  precheck: pending
---

## Definition

Let $\Sigma$ be a nonempty, smooth, oriented three-manifold without boundary. Let $h$ be a smooth Riemannian metric on $\Sigma$, let $K$ be a smooth symmetric covariant two-tensor, and let $e,b$ be smooth vector fields tangent to $\Sigma$. Let $D$ and $R(h)$ be the Levi-Civita connection and scalar curvature of $h$, set $\tau:=\operatorname{tr}_hK$ and $|K|_h^2:=h^{ik}h^{j\ell}K_{ij}K_{k\ell}$, and choose the induced spatial orientation so $\operatorname{vol}_g=\theta^0\wedge\operatorname{vol}_h=-n^\flat\wedge\operatorname{vol}_h$ in a positively oriented normal coframe with $\theta^0(n)=1$. Define the spatial cross product by $h(e\times_hb,w)=\operatorname{vol}_h(e,b,w)$ for each tangent vector $w$.

For the fixed parameters $(\kappa,\Lambda,\mu_0)$ of [[def-emg-electrovacuum-cauchy-system]], the tuple $(\Sigma,h,K,e,b)$ is **constrained electrovacuum initial data** when

$$D_ie^i=0,\qquad D_ib^i=0,$$

$$R(h)+\tau^2-|K|_h^2=2\Lambda+\frac{\kappa}{\mu_0}\bigl(|e|_h^2+|b|_h^2\bigr),$$

$$D^jK_{ji}-D_i\tau=-\frac{\kappa}{\mu_0}(e\times_hb)_i.$$

Here the last display is an equality of covectors. The scalar-curvature form is the Gauss-Codazzi form of the normal projections in [[thm-gr-constraint-equations-in-normal-frame]]; the sign and $K$ convention are those of [[def-gr-spacelike-initial-data-and-constraints]] and [[def-emg-electrovacuum-cauchy-system]]. This definition asserts no existence or uniqueness of a spacetime development.

For the periodic high-regularity class, take $\Sigma=\mathbb T^3_{2\pi}$, integer $s\ge5$, $h\in H^{s+1}$, $K,e,b\in H^s$, and assume the continuous representative of $h$ has a uniform positive lower eigenvalue bound. The displayed constraint expressions then have continuous representatives: their weak-derivative orders are at most two for $h$ and one for $K,e,b$, and the embedding, algebra and smooth-composition suppliers [[lem-gr-periodic-sobolev-embedding]], [[lem-gr-periodic-sobolev-algebra]], and [[lem-gr-smooth-composition-and-commutator-estimates]] apply. In SI coordinates $K$ and $D$ carry one inverse-length factor, $R(h)$ and $\Lambda$ carry inverse-length squared, while $e,b$ have units tesla; the coefficients $\kappa/\mu_0$ give the displayed terms matching units.
