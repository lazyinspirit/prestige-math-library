---
id: post-tgr-supported-static-heat-model
kind: postulate
title: Supported static heat model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - def-tgr-framework-units
  - post-tgr-local-material-thermodynamics
  - post-tgr-first-order-dissipation
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  post-tgr-local-material-thermodynamics: formulation-prerequisite
  post-tgr-first-order-dissipation: formulation-prerequisite
justified_by: []
physical_scope: "One fixed-background, fixed-medium, supported parabolic heat branch with positive static lapse, constant heat capacity, conductivity A0/N, insulated rectangular faces, and compatible positive initial data; not a full Einstein-fluid or causal evolution model."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.3 and 5.1–5.3"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page lecture-note PDF; PDF pp. 16–19: the local first law, perfect-fluid stress-energy, local conservation and its projection along the fluid velocity. These are contextual conventions; the restricted dissipative balance is an adopted model assumption."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2015), §§IX.4.1–IX.4.4"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page lecture-note PDF; PDF pp. 152–159 (printed pp. 144–151): dissipative currents, entropy balance and first-order constitutive models. The cited Landau-frame discussion is contextual; the exact heat closure and static support here come from the declared local suppliers and this restricted postulate. The source warns that first-order relativistic models need not be causal or stable."
---

## Postulate

Choose positive lengths $L_1,L_2,L_3$, the rectangular box $\Omega=\prod_{i=1}^3(0,L_i)$, and an open neighborhood $U\subset\mathbb R^3$ of $\overline\Omega$. Let $N\in C^\infty(U,(0,\infty))$ satisfy $0<N_{\min}\leq N(x)\leq N_{\max}<\infty$ on $\overline\Omega$. On $M=\mathbb R_{x^0}\times U$, use $x^0=ct_K$, where $c>0$ is in $\mathrm{m\,s^{-1}}$, and the fixed metric

$$g=-N(x)^2(dx^0)^2+\sum_{i=1}^3(dx^i)^2.$$

The coordinates $x^i$ and lengths $L_i$ are measured in metres, $t_K$ in seconds, and the lapse $N$ is dimensionless. The metric is independent of $x^0$ and has no time-space cross terms; this is the static background in this model. Give $M$ time orientation $\xi=\partial_{x^0}$. Then $\xi$ is a future timelike Killing field, $N=\sqrt{-g(\xi,\xi)}$, and $u=N^{-1}\xi$ is the smooth future unit timelike observer congruence in the conventions of [[def-tgr-framework-units]]. Here a frame means this vector field and its pointwise rest spaces, not a coordinate chart or tetrad. The material is held at rest in this congruence; no flow evolution is included. The scalar $T>0$ is proper temperature in kelvins, and $\vartheta:=NT$ is the Killing-normalized (redshifted) temperature of [[def-tgr-framework-units]]; this definition alone does not assert that $\vartheta$ is constant.

Adopt the fixed-composition material branch of [[post-tgr-local-material-thermodynamics]] with constants $C_V,n_0,T_{\rm ref}>0$, $\sigma_{\rm ref}\in\mathbb R$, and $e_0\in\mathbb R$. The units are $C_V$ in $\mathrm{J\,m^{-3}K^{-1}}$, $n_0$ in $\mathrm{marker\,m^{-3}}$, $T_{\rm ref}$ in kelvins, $\sigma_{\rm ref}$ in $\mathrm{J\,K^{-1}marker^{-1}}$, and $e_0$ in $\mathrm{J\,marker^{-1}}$. Put $c_v=C_V/n_0$ in $\mathrm{J\,K^{-1}marker^{-1}}$ and choose the state function on $X=(0,\infty)\times\mathbb R$ to be

$$e(v,\sigma_p)=c_vT_{\rm ref}\exp\!\left(\frac{\sigma_p-\sigma_{\rm ref}}{c_v}\right)+e_0,$$

independent of the rest volume per marker $v$. For a given positive $T$, set $v=1/n_0$ and $\sigma_p=\sigma_{\rm ref}+c_v\log(T/T_{\rm ref})$. For this branch define $n=v^{-1}$, $s=n\sigma_p$, $\epsilon=ne$, $T=\partial_{\sigma_p}e$, and $p=-\partial_ve$, using the units of [[def-tgr-framework-units]] and the adopted material convention of [[post-tgr-local-material-thermodynamics]]. These maps give $n=n_0$, $p=0$, $\epsilon=C_VT+n_0e_0$, and $s=n_0\sigma_{\rm ref}+C_V\log(T/T_{\rm ref})$. These assignments describe the selected model only; they do not assert a measured equation of state.

Take an admissible initial redshifted-temperature profile $\vartheta_0\in C^2(\overline\Omega)$ with constants $0<m_0\leq M_0<\infty$ such that $m_0\leq\vartheta_0\leq M_0$, and require a $C^2$ extension $\widetilde\vartheta_0:\mathbb R^3\to\mathbb R$ with the same bounds, period $2L_i$ in each coordinate $x^i$, and evenness under each reflection $x^i\mapsto-x^i$. Its even periodic extension makes the normal derivative vanish at both faces in each coordinate once evolved smoothly. The initial proper temperature is $T(0,x)=\vartheta_0(x)/N(x)$.

On $O=(0,\infty)\times\Omega$, identified with the subset of $M$ by $x^0=ct_K$, the admissible temperature field is a positive map $T:[0,\infty)\times\overline\Omega\to(0,\infty)$ continuous with initial trace $T(0,x)=\vartheta_0(x)/N(x)$ and $C^\infty$ on $O$. For every $0<a<b<\infty$, it extends smoothly in all space-time variables to a neighborhood of $[a,b]\times\overline\Omega$; no smoothness across $t_K=0$ is required. The state map on $O$ is

$$v=1/n_0,\qquad \sigma_p=\sigma_{\rm ref}+c_v\log(T/T_{\rm ref}).$$

With the definition $\mu=e+pv-T\sigma_p$ in [[def-tgr-local-fluid-state]], this branch has $\mu/T=c_v+e_0/T-\sigma_p$ and $\nabla_a(\mu/T)=-(e_0/T^2+c_v/T)\nabla_aT$. The state map and these derived fields are smooth on $O$.

For [[post-tgr-first-order-dissipation]], declare the regime $\mathcal R$ as follows. Its tuples record $(v,\sigma_p,u,T,\mu/T)$ and the first covariant derivatives $\nabla u$, $\nabla T$, and $\nabla(\mu/T)$ generated by first derivatives of the displayed state maps and of a future unit timelike field $u$; thus $u_b\nabla_a u^b=0$. Require $1/(2n_0)<v<3/(2n_0)$, with arbitrary $\sigma_p\in\mathbb R$ and no bounds on the derivatives. This is a nonempty open regime in the relative topology of the state/first-jet space after the normalization and state-map constraints are imposed. It contains the fixed-density heat branch pointwise because $v=1/n_0$, $T>0$, and $u=N^{-1}\xi$ is future unit timelike. In this application set the diffusion coefficient $L=0$, so $V=0$ and the supplier's number current is $J=nu$; it is future timelike throughout $\mathcal R$ since $n=1/v>0$, and on the fixed-density branch $J=n_0u$.

Adopt from [[post-tgr-first-order-dissipation]] the first-order heat closure and current/stress/entropy conventions on this regime. The physical heat-flux field $q$ is spatial, has units $\mathrm{W\,m^{-2}}$, and has constitutive coefficient $\kappa_{\rm th}=A_0/N$ for a constant $A_0>0$ in $\mathrm{W\,m^{-1}K^{-1}}$. With $\nabla_x$ the Euclidean spatial gradient, its specified static heat law, local energy balance, and insulated-face condition are

$$q=-\kappa_{\rm th}(\nabla_xT+T\nabla_x\log N),\qquad \kappa_{\rm th}=\frac{A_0}{N},\qquad NC_V\partial_{t_K}T+\operatorname{div}_x(N^2q)=0,\qquad N^2q\cdot\nu=0\ \text{on each face},$$

where $\operatorname{div}_x$ is Euclidean divergence and $\nu$ is the outward Euclidean unit normal to a box face. The adopted first-order closure specializes to this lapse-gradient form in the selected static frame; it is not inferred from an experiment. Since $N$ is time independent, $\nabla_xT+T\nabla_x\log N=N^{-1}\nabla_x\vartheta$, so this coefficient choice gives $N^2q=-A_0\nabla_x\vartheta$ and diffusivity $A_0/C_V$ in $\mathrm{m^2\,s^{-1}}$.

For the material stress/current in this selected branch put $Q^0=0$, $Q^i=q^i/c$, $J^a=n_0u^a$, and

$$\mathsf T^{ab}=\epsilon u^au^b+u^aQ^b+Q^au^b.$$

Here $Q=q/c$ has units $\mathrm{Pa}$ and $\mathsf T^{ab}$ has components in $\mathrm{Pa}$. In the first-order notation set the bulk, shear, and diffusion coefficients to zero, so $\Pi=0$, $\pi^{ab}=0$, and $V^a=0$; the thermal coefficient is $\kappa=\kappa_{\rm th}$. These are nonnegative $C^1(O)$ coefficient fields. The source-free number balance $\nabla_aJ^a=0$ remains part of this branch. The external support is the force-density field $f^b:=\nabla_a\mathsf T^{ab}$, in $\mathrm{N\,m^{-3}}$, required to hold the medium on the fixed background. This model adopts the first-order heat closure but replaces that supplier's source-free stress balance by this supported balance. Require $u_bf^b=0$: the support may supply spatial force but no local power. Thus the state maps, constitutive fields, currents, and stress are smooth on $O$, and $f^b$ is a classical covariant divergence; this is a supported material model, not source-free full matter dynamics. Its entropy current is $S^a=su^a+Q^a/T$, with units $\mathrm{J\,K^{-1}m^{-3}}$; this postulate alone does not assert an entropy inequality.

This is an adopted effective parabolic model. It asserts no Einstein equation, no general relativistic-fluid initial-value theorem, no finite propagation speed, and no universal material law. It supplies no experiment, measurement, empirical premise, or evidence that a physical medium realizes the model.
