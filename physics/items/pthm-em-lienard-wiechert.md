---
id: pthm-em-lienard-wiechert
kind: physics-theorem
title: "Retarded point fields off the worldline: Lienard-Wiechert potentials, the velocity/acceleration split and the uniform far-zone remainder"
domain: physics
status: draft
origin: pipeline
dependency_level: 20
deps: [def-em-retarded-point-geometry, pthm-em-retarded-potentials, lem-em-point-retarded-potential-and-fields, thm-em-retarded-root-and-fields, post-em-radiation-selection, def-em-weak-sources, def-em-potential-gauge-and-field-conventions, def-em-fields, def-em-sources, def-em-relativistic-worldlines-frames, def-em-lab-geometry, def-em-si-conventions, def-euclidean-inner-product, def-countable-choice, thm-em-retarded-point-distributional-maxwell, post-em-distributional-vacuum-maxwell, pthm-em-poynting-balance]
dependency_roles:
  def-em-retarded-point-geometry: formulation-prerequisite
  pthm-em-retarded-potentials: physical-result
  lem-em-point-retarded-potential-and-fields: mathematical-premise
  thm-em-retarded-root-and-fields: mathematical-premise
  post-em-radiation-selection: physical-assumption
  def-em-weak-sources: formulation-prerequisite
  def-em-potential-gauge-and-field-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-relativistic-worldlines-frames: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-em-retarded-point-distributional-maxwell: mathematical-premise
  post-em-distributional-vacuum-maxwell: physical-assumption
  pthm-em-poynting-balance: physical-result
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Retarded potentials and fields of a prescribed point charge with charge parameter $q\\in\\mathbb R$ on a uniformly subluminal $C^3$ worldline, off the worldline: exact Lienard-Wiechert split, $B=n\\times E/c$, the velocity-field bound and the uniform-in-direction far-zone remainder at a fixed emission event; and the constructed proper point-source weak Maxwell solution with $L^1_{\\mathrm{loc}}$ field representatives and distributional Lorenz-gauge potentials. Excluded: field values on the worldline and any nonlinear self-interaction (no products of distributions, no self-force, no radiation reaction); energy, flux or power (deferred to the emitted-power items of this page); uniform bounds in the emission event; and every empirical or measurement claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted 236-page PDF, title page dated Lent Term 2015)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.4.1$ and $\\S6.4.3$ printed pp. 158-165 ('Lienard-Wiechert Potentials', 'Computing the Electric and Magnetic Fields'): the retarded potentials $\\phi=q/(4\\pi\\epsilon_0\\kappa r)$, the split of the electric field into velocity and acceleration terms and $B=\\hat r\\times E/c$; the source's assumptions on the trajectory are made precise by the uniform subluminal bound of this page."
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted HTML lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Nodes 124-125 ('Potential due to a moving charge', 'Fields due to a moving charge') of chapter 10: the retarded denominator and the velocity/acceleration field decomposition for a prescribed moving charge."
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS (author-hosted 176-page script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "$\\S11.5$ printed pp. 11.15-11.19 (PDF pp. 135-139): point-source retarded potentials with implicit root, the momentarily resting charge fields derived explicitly, and the general-velocity fields quoted rather than derived -- the framework derives them locally through [[thm-em-retarded-root-and-fields]] instead of quoting."
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$) as carried by the point-source change-of-variables suppliers below ([[def-countable-choice]]). Let the laboratory region, chart and units be those of [[def-em-lab-geometry]] and [[def-em-si-conventions]] ($c>0$, $\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$), let $q\in\mathbb R$ and let $z$, $v_*$ be a retarded point-geometry datum of [[def-em-retarded-point-geometry]] (a prescribed $C^3$ uniformly subluminal worldline of a point charge, [[def-em-relativistic-worldlines-frames]], with the constant $C:=q/(4\pi\varepsilon_0)$), write $\Omega:=\mathbb R^3\times\mathbb R$ and $\Gamma:=\{(z(s),s):s\in\mathbb R\}$, and let $\rho,J$ be the point-source distributions of that charge on the worldline in the declared point-source class of [[def-em-weak-sources]](b) (the $C^3$ branch of the point-current construction). Let $(\varphi,A)$ be the retarded history pairings of [[lem-em-point-retarded-potential-and-fields]](b) -- the framework's retarded construction for this source under the adopted selection [[post-em-radiation-selection]] -- and define $E:=-\nabla\varphi-\partial_tA$, $B:=\nabla\times A$ on the off-worldline domain $\Omega\setminus\Gamma$ ([[def-em-potential-gauge-and-field-conventions]], [[def-em-fields]]). Then:

(a) [Potentials] $\varphi=C/(\kappa r)$ and $A=\beta\varphi/c$ on $\Omega\setminus\Gamma$, where $r,\kappa,\beta$ are the retarded data of [[def-em-retarded-point-geometry]](b); the zero extensions of $\varphi,A$ to $\Gamma$ are locally integrable on $\Omega$.

(b) [Exact fields] On $\Omega\setminus\Gamma$, $$E=E_{\mathrm{vel}}+E_{\mathrm{acc}},\qquad E_{\mathrm{vel}}=\frac{C(1-|\beta|^2)(n-\beta)}{\kappa^3r^2},\qquad E_{\mathrm{acc}}=\frac{C\,n\times\bigl((n-\beta)\times\dot\beta\bigr)}{c\,\kappa^3r},\qquad B=\frac{n\times E}{c},$$ and $E,B$ are of class $C^1$ there; the velocity part obeys $|E_{\mathrm{vel}}|\le|C|(1+v_*/c)(1-v_*/c)^{-3}r^{-2}$.

(c) [Uniform far-zone remainder] For every emission event $s_0$ and direction $n\in S^2$, with $x_r:=z(s_0)+rn$, $t_r:=s_0+r/c$, $\beta_0:=z'(s_0)/c$, $\dot\beta_0:=z''(s_0)/c$ and $\kappa_0:=1-n\cdot\beta_0$: $(x_r,t_r)\in\Omega\setminus\Gamma$, $s(x_r,t_r)=s_0$, and $$E(x_r,t_r)=\frac{C\,n\times\bigl((n-\beta_0)\times\dot\beta_0\bigr)}{c\,\kappa_0^3\,r}+\rho_E(s_0,n,r),\qquad|\rho_E(s_0,n,r)|\le|C|\frac{1+v_*/c}{(1-v_*/c)^3}\,r^{-2},\qquad B(x_r,t_r)=\frac{n\times E(x_r,t_r)}{c};$$ the bound is uniform in $n$ at fixed $s_0$.

(d) [Scope] These are the stipulated retarded model fields of the prescribed charge: the item identifies, through the same adopted causal selection used by [[pthm-em-retarded-potentials]] for the compact branch, the point-source potentials and fields of the model, and proves their exact form and bounds. It asserts no value of the fields on the worldline $\Gamma$ (where the formulas are undefined and the self-field is singular), no integral or energy statement, no self-force and no radiation reaction, and derives no mass. The uniform bound $v_*<c$ and the exclusion of $\Gamma$ are essential hypotheses; the companion example page shows that a merely pointwise subluminal curve can fail to have a retarded root, and no uniformity in the emission event $s_0$ is claimed ($z''$ is not assumed bounded). The signed constant $C$ is retained in every displayed formula while absolute-value bounds use $|C|$.

(e) [Constructed weak solution] Let $\Phi,\Upsilon$ be the global regular potential distributions in (a), and let $\mathcal E=-\nabla\Phi-\partial_t\Upsilon$, $\mathcal B=\operatorname{curl}\Upsilon$. By [[thm-em-retarded-point-distributional-maxwell]], their representatives are exactly the locally integrable zero extensions of the displayed off-worldline fields. They satisfy all four identities of [[def-em-weak-sources]](e) with the proper all-time point pair $\rho,J$; the volume source parts are zero. Thus they are an admitted point-source model of the explicit physical adoption [[post-em-distributional-vacuum-maxwell]], under the same retarded selection. The potentials satisfy $W\Phi=\rho/\varepsilon_0$, $W\Upsilon=\mu_0J$ and the distributional Lorenz identity. This existence and solution property is supplied by the mathematical theorem, not by the selection postulate or by the compact-source theorem. The zero extensions on the null graph give no physically defined self-field and no nonlinear products there. All original exact field, regularity and uniform far-zone branches remain as stated. On each product neighborhood disjoint from $\Gamma$ the fields satisfy the smooth source-free Maxwell equations. Consequently any use of [[pthm-em-poynting-balance]] by the radiation items is local on such neighborhoods, with $\rho=J=0$; it neither applies that smooth theorem across the point source nor forms self-work or a global finite-energy identity.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the laboratory chart, units and constants of [[def-em-lab-geometry]] and [[def-em-si-conventions]]; a retarded point-geometry datum: $q\in\mathbb R$, $z:\mathbb R\to\mathbb R^3$ of class $C^3$ with $|z'(s)|\le v_*<c$, and the off-worldline domain $\Omega\setminus\Gamma$ with the retarded data $s,r,n,\beta,\kappa,\dot\beta$ of [[def-em-retarded-point-geometry]]; the constant $C=q/(4\pi\varepsilon_0)$.

[F1] Retarded point geometry: on $\Omega\setminus\Gamma$ the root $s=s(x,t)<t$ solves $t-s=|x-z(s)|/c$, is $C^3$, satisfies $\partial_ts=1/\kappa$ and $\nabla_xs=-n/(c\kappa)$, and $\kappa=1-n\cdot\beta\in[1-v_*/c,1+v_*/c]$; at an emission event $s_0$ and direction $n\in S^2$, the event $(x_r,t_r)=(z(s_0)+rn,s_0+r/c)$ lies in $\Omega\setminus\Gamma$ and has root $s(x_r,t_r)=s_0$. ([[def-em-retarded-point-geometry]] (a)-(c))

[F2] Point-source history pairings: for the point-source distributions $\rho,J$ attached to $q$ and $z$, the retarded-history pairings $\Phi,\Upsilon$ define distributions on $\Omega$, are finite for every test, and satisfy $\langle\Phi,\psi\rangle=\int_{\Omega\setminus\Gamma}C\psi/(\kappa r)$ and $\langle\Upsilon,\psi\rangle=\int_{\Omega\setminus\Gamma}(\beta/c)C\psi/(\kappa r)$ componentwise; consequently $\varphi=C/(\kappa r)$ and $A=\beta\varphi/c$ are $C^2$ functions off the worldline whose locally integrable zero extensions have $\Phi,\Upsilon$ as their regular distributions. ([[lem-em-point-retarded-potential-and-fields]] (b))

[F3] Exact fields: with $E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$ on $\Omega\setminus\Gamma$, one has $E=E_{\mathrm{vel}}+E_{\mathrm{acc}}$ with the displayed velocity and acceleration parts, $B=n\times E/c$, both fields $C^1$ off the worldline, and $|E_{\mathrm{vel}}|\le|C|(1+v_*/c)(1-v_*/c)^{-3}r^{-2}$. ([[thm-em-retarded-root-and-fields]] (c))

[F4] Uniform far-zone remainder: at the emission sphere $E(x_r,t_r)=C\,n\times((n-\beta_0)\times\dot\beta_0)/(c\kappa_0^3r)+\rho_E$ with $|\rho_E|\le|C|(1+v_*/c)(1-v_*/c)^{-3}r^{-2}$ uniformly over $n\in S^2$ at fixed $s_0$, and $B(x_r,t_r)=n\times E(x_r,t_r)/c$. ([[thm-em-retarded-root-and-fields]] (d))

[F5] Distributional point-source Maxwell theorem: $W\Phi=\rho/\varepsilon_0$, $W\Upsilon=\mu_0J$ and $\operatorname{div}\Upsilon+c^{-2}\partial_t\Phi=0$ in $\mathcal D'(\Omega)$; the distributions $\mathcal E=-\nabla\Phi-\partial_t\Upsilon$, $\mathcal B=\operatorname{curl}\Upsilon$ satisfy the four distributional Maxwell identities with the point pair; and off $\Gamma$ they restrict to the exact $C^1$ fields of [F3], the locally integrable zero extensions of the field formulas being their regular representatives. ([[thm-em-retarded-point-distributional-maxwell]] (a)-(c))

[F6] Weak source class and solution predicate: the all-time $C^3$ uniformly subluminal worldline with its proper graph is an admitted point source, the predicate consists of the four vanishing distributional pairings with the source pairings of the declared point class, and no product of two distributions is formed anywhere. ([[def-em-weak-sources]] (b),(e),(f))

[F7] Adopted singular-source physics: point-source models satisfying the weak predicate are the adopted physical models of the separate postulate, which the earlier smooth-source postulate neither covers nor implies. ([[post-em-distributional-vacuum-maxwell]])

[F8] Adopted selection: the retarded branch with no free addition is the framework's selected branch, and for the point-source branch the same selection is adopted in the weak equations of the singular-source model. ([[post-em-radiation-selection]] (b),(c))

[F9] Conventions: $E=-\nabla\varphi-\partial_tA$ and $B=\nabla\times A$ are those of [[def-em-potential-gauge-and-field-conventions]] with field classes of [[def-em-fields]]; $\varepsilon_0=(\mu_0c^2)^{-1}$ and $C=q/(4\pi\varepsilon_0)$ are the SI conventions of [[def-em-si-conventions]]; the curve $s\mapsto(z(s),s)$ is the laboratory reading of a prescribed massive future timelike worldline by [[def-em-relativistic-worldlines-frames]]. ([[def-em-potential-gauge-and-field-conventions]], [[def-em-fields]], [[def-em-si-conventions]], [[def-em-relativistic-worldlines-frames]])

[F10] The same adopted causal selection is used by the compact-source theorem [[pthm-em-retarded-potentials]] for its branch, and that theorem explicitly leaves point sources to the point-source items of its page; the uniform speed bound and the exclusion of $\Gamma$ are essential hypotheses of the point construction. ([[pthm-em-retarded-potentials]] (b),(g))

[F11] Local Poynting balance: for jointly $C^1$ fields solving the smooth source-free vacuum Maxwell equations on a region, the local identity $\partial_tu+\operatorname{div}S=-J\cdot E$ of [[pthm-em-poynting-balance]] holds there, and on a product neighborhood disjoint from $\Gamma$ the point pair restricts to zero. ([[pthm-em-poynting-balance]] (a),(c))

## Proof

**Proof technique:** direct identification; clauses (a)-(d) instantiate the retarded point-geometry datum and the two point-source suppliers, and clause (e) instantiates the distributional point-source theorem and the weak solution predicate, with the physical adoption supplied separately by the postulates.

1.1 Potentials (a). By [F1] the retarded data are defined, with $s,r,n$ of class $C^3$ and $\beta,\kappa$ of class $C^2$ on $\Omega\setminus\Gamma$ with $\kappa\ge1-v_*/c>0$, and $C=q/(4\pi\varepsilon_0)$ is the stated signed constant [F9]. Clause (b) of [F2] identifies the retarded-history pairings with the exact integrals $\int_{\Omega\setminus\Gamma}C\psi/(\kappa r)$ and $\int_{\Omega\setminus\Gamma}(\beta/c)C\psi/(\kappa r)$, and states that the potentials are the $C^2$ functions $\varphi=C/(\kappa r)$ and $A=\beta\varphi/c$ off the worldline whose zero extensions to $\Gamma$ are locally integrable. This is (a). [F1, F2, F9, algebra]

2.1 Exact fields (b). Clause (c) of [F3] gives, at every event of $\Omega\setminus\Gamma$, the split $E=E_{\mathrm{vel}}+E_{\mathrm{acc}}$ with the displayed velocity and acceleration parts, the relation $B=n\times E/c$, the $C^1$ regularity of both fields, and the velocity bound $|E_{\mathrm{vel}}|\le|C|(1+v_*/c)(1-v_*/c)^{-3}r^{-2}$; the fields are defined as $E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$ with the conventions of [F9], and the constant $C$ is retained with its sign in the field formulas while the bound uses $|C|$. This is (b). [step 1.1, F3, F9, algebra]

2.2 Uniform far-zone remainder (c). Fix $s_0\in\mathbb R$ and $n\in S^2$; by [F1](c) the event $(x_r,t_r)=(z(s_0)+rn,s_0+r/c)$ lies in $\Omega\setminus\Gamma$ and its root is $s(x_r,t_r)=s_0$, so the retarded data at that event are exactly $\beta_0,\dot\beta_0,\kappa_0$ and $r$. Clause (d) of [F4] then gives the displayed decomposition of $E(x_r,t_r)$ with the uniform bound $|\rho_E(s_0,n,r)|\le|C|(1+v_*/c)(1-v_*/c)^{-3}r^{-2}$ over $n\in S^2$ at fixed $s_0$, together with $B(x_r,t_r)=n\times E(x_r,t_r)/c$. This is (c). [step 1.1, F1, F4, algebra]

3.1 Scope (d). The identification of the retarded construction of clause (a)-(b) with the model fields of the prescribed charge is the adopted causal selection of [F8], the same selection used by the compact-source theorem [F10]; nothing in steps 1.1-2.2 assigns a field value on $\Gamma$ (the formulas require $r>0$), forms a product of the singular source with a field, or proves a self-force, radiation-reaction, energy or mass statement, and [F10] records that the compact-source branch explicitly leaves point sources to this page. The bound in (c) is uniform in $n$ at fixed $s_0$ only, since $\dot\beta_0$ and $\kappa_0^{-3}$ depend on the emission event and $z''$ is not assumed bounded. This is (d). [step 1.1, step 2.2, F8, F10, algebra]

4.1 Constructed weak solution (e) and conclusion. By [F5](a) the potential distributions of [F2] satisfy $W\Phi=\rho/\varepsilon_0$, $W\Upsilon=\mu_0J$ and the distributional Lorenz identity, and by [F5](b) the field distributions $\mathcal E,\mathcal B$ satisfy all four distributional Maxwell identities with the point pair $\rho,J$; [F5](c) identifies their representatives with the locally integrable zero extensions of the off-worldline fields of [F3] and records that the off-worldline $C^1$ fields satisfy the source-free classical Maxwell equations. The all-time $C^3$ uniformly subluminal worldline with its proper graph is an admitted point source of the declared class [F6], the source pairings are those of the predicate, and the volume source parts vanish; hence the four identities are exactly the solution predicate of [F6](e) with $(\rho,J)$, and by the explicit physical adoption [F7] under the same retarded selection [F8] these constructed weak fields are the model fields of the point charge. This is the solution property claimed in (e); it is supplied by the mathematical theorem and not by the selection postulate. No product of distributions is formed anywhere ([F6](f)), and the zero extension on the null graph gives no physically defined self-field there. Finally, on a product neighborhood disjoint from $\Gamma$ the point pair restricts to the zero source so that the smooth source-free Maxwell equations of [F5](c) hold and the local Poynting identity [F11] applies there with $\rho=J=0$; it is never applied across the point source and forms no self-work or global finite-energy identity. This completes (e) and, with steps 1.1-3.1, all clauses (a)-(e). [step 1.1, step 2.1, step 2.2, step 3.1, F5, F6, F7, F8, F11, algebra] ∎
