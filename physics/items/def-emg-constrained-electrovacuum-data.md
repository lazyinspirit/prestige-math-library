---
id: def-emg-constrained-electrovacuum-data
kind: definition
title: Constrained electrovacuum initial data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: [def-emg-electrovacuum-cauchy-system, def-emg-periodic-high-sobolev-state, def-gr-spacelike-initial-data-and-constraints, lem-emg-observer-field-decomposition, lem-gr-periodic-sobolev-embedding, lem-gr-periodic-sobolev-algebra, lem-gr-smooth-composition-and-commutator-estimates, thm-gr-constraint-equations-in-normal-frame, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-periodic-high-sobolev-state: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $\Sigma$ be a nonempty, smooth, oriented three-manifold without boundary. Let $h$ be a smooth Riemannian metric on $\Sigma$, let $K$ be a smooth symmetric covariant two-tensor, and let $e,b$ be smooth vector fields tangent to $\Sigma$. For data induced on an embedded spacelike slice $i:\Sigma\hookrightarrow M$, let $n$ be its future unit normal, let $F$ be the smooth two-form of [[def-emg-electrovacuum-cauchy-system]], and define spatial covectors $\mathcal E,\mathcal B\in\Omega^1(\Sigma)$ by $\mathcal E(X):=F(X,n)$ and $\mathcal B(X):=-({\star_gF})(X,n)$ for $X\in T\Sigma$. Identify these with vector fields using the positive metric $h$: $e:=\sharp_h\mathcal E$ and $b:=\sharp_h\mathcal B$, so in any coordinates $e^i=h^{ij}\mathcal E_j$ and $b^i=h^{ij}\mathcal B_j$. Equivalently, $\mathcal E$ is the restriction of the observer electric covector $E/c$ and $\mathcal B$ the restriction of the observer magnetic covector $B$ of [[lem-emg-observer-field-decomposition]]. For an abstract data tuple not assumed to come from $F$, $e,b$ are simply the specified tangent vector fields. This fixes the convention without adding a potential or an existence assumption.

For the observer-covector comparison above, the smooth normal along $\Sigma$ has local smooth ambient extensions by [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]; shrinking and normalizing an extension gives an observer congruence to which [[lem-emg-observer-field-decomposition]] applies. The restrictions $\mathcal E,\mathcal B$ depend only on $n|_\Sigma$, so they are independent of the chosen extension.

Write $h^{ij}$ for the inverse matrix to $h_{ij}$ and use $h$ to raise every spatial index. Let $D$ and $R(h)$ denote the Levi-Civita connection and scalar curvature of $h$, set $\tau:=h^{ij}K_{ij}$ and $|K|_h^2:=h^{ik}h^{j\ell}K_{ij}K_{k\ell}$, and choose the induced spatial orientation so $\operatorname{vol}_g=\theta^0\wedge\operatorname{vol}_h=-n^\flat\wedge\operatorname{vol}_h$ in a positively oriented normal coframe with $\theta^0(n)=1$. Define the spatial cross product by $h(e\times_hb,w)=\operatorname{vol}_h(e,b,w)$ for each tangent vector $w$.

For the fixed parameters $(\kappa,\Lambda,\mu_0)$ of [[def-emg-electrovacuum-cauchy-system]], the tuple $(\Sigma,h,K,e,b)$ is **constrained electrovacuum initial data** when

$$D_ie^i=0,\qquad D_ib^i=0,$$

$$R(h)+\tau^2-|K|_h^2=2\Lambda+\frac{\kappa}{\mu_0}\bigl(|e|_h^2+|b|_h^2\bigr),$$

$$D^jK_{ji}-D_i\tau=-\frac{\kappa}{\mu_0}(e\times_hb)_i.$$

Here the last display is an equality of covectors. The scalar-curvature form is the Gauss-Codazzi form of the normal projections in [[thm-gr-constraint-equations-in-normal-frame]]; the sign and $K$ convention are those of [[def-gr-spacelike-initial-data-and-constraints]] and [[def-emg-electrovacuum-cauchy-system]]. This definition asserts no existence or uniqueness of a spacetime development.

For the periodic high-regularity class, use the dimensionless coordinate $\theta^i$ and length coordinate $X^i=L_0\theta^i$ of [[def-emg-periodic-high-sobolev-state]], for a fixed $L_0>0$. The arrays $h_{ij}$ and $K_{ij}$ are the length-coordinate covariant components with $h_{ij}\in H^{s+1}$ and $K_{ij}\in H^s$. The Sobolev components of $e,b$ are $e_A=h(e,\mathsf e_A)$ and $b_A=h(b,\mathsf e_A)$ in the canonical positively oriented $h$-orthonormal frame $\mathsf e_A$ specified there; thus $e_A,b_A\in H^s$. If $\mathsf e_A=E_A^i\partial_{X^i}$, their coordinate components are $e^i=E_A^i e_A$ and $b^i=E_A^i b_A$. The coefficients $E_A^i$ are smooth functions of the positive matrix $h_{ij}$; on the compact range of each such metric, [[lem-gr-smooth-composition-and-commutator-estimates]] puts them in $H^{s+1}$ and [[lem-gr-periodic-sobolev-algebra]] makes the coordinate components $H^s$ as well.

For these representatives define the spatial connection coefficients by $\Gamma(h)^k{}_{ij}=\tfrac12h^{k\ell}(\partial_{X^i}h_{j\ell}+\partial_{X^j}h_{i\ell}-\partial_{X^\ell}h_{ij})$, with $\partial_{X^i}=L_0^{-1}\partial_{\theta^i}$. On coordinate vector components put $D_i e^j=\partial_{X^i}e^j+\Gamma(h)^j{}_{ik}e^k$ and $D_i b^j=\partial_{X^i}b^j+\Gamma(h)^j{}_{ik}b^k$; on the covariant tensor $K$ put $D_iK_{jk}=\partial_{X^i}K_{jk}-\Gamma(h)^\ell{}_{ij}K_{\ell k}-\Gamma(h)^\ell{}_{ik}K_{j\ell}$. Define $R(h)$ by $R^a{}_{bij}=\partial_{X^i}\Gamma(h)^a{}_{jb}-\partial_{X^j}\Gamma(h)^a{}_{ib}+\Gamma(h)^a{}_{ic}\Gamma(h)^c{}_{jb}-\Gamma(h)^a{}_{jc}\Gamma(h)^c{}_{ib}$, followed by the Ricci and scalar contractions of [[def-gr-curvature-tensor-and-derived-tensors]]. Sobolev embedding gives $h\in C^{s-1}$ and $K,e,b\in C^{s-2}$; the uniform positive lower eigenvalue makes $h^{-1}$ well defined, and the smooth-composition and algebra suppliers give $\Gamma(h)\in H^s$, $R(h)\in H^{s-1}$, and $D K,D e,D b\in H^{s-1}$. Since $s\ge5$, these constraint terms have continuous representatives, and their displayed equalities mean pointwise equality of those representatives. In the SI interpretation, $K$ and $D$ carry one inverse-length factor, $R(h)$ and $\Lambda$ carry inverse-length squared, and the orthonormal components $e_A,b_A$ have units tesla; the factors $\kappa/\mu_0$ give matching units in the constraints. No numerical parameter values are assigned here.
