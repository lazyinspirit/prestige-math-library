---
id: post-emx-lorentz-medium
kind: postulate
title: "Finite Lorentz oscillator closure"
status: draft
origin: pipeline
domain: physics
dependency_level: 0
deps:
  - post-em-material-closure
  - pthm-em-macroscopic-maxwell
  - def-em-fields
  - def-em-polarization-magnetization
  - def-em-si-conventions
dependency_roles:
  post-em-material-closure: formulation-prerequisite
  pthm-em-macroscopic-maxwell: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
verification:
  precheck: n/a
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A phenomenological classical Maxwell-Lorentz constitutive model in the material rest frame of the macroscopic electromagnetism framework. It is linear, homogeneous and spatially local, with finitely many electric polarization oscillators and a fixed nondispersive scalar magnetic coefficient. It asserts no microscopic mechanism, material realization or empirical validity; spatial dispersion, nonlinear saturation, moving-media constitutive laws and quantum transitions are outside its scope."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (236-page complete text)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§7.5.1, printed pp. 193–194: a forced, damped atomic polarization oscillator and its frequency response; this is model context, not a microscopic derivation of the adopted continuum closure."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS complete lecture script"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§12.1, printed p. 12.2 (PDF p. 143), equations (12.9)–(12.10): causal polarization response and frequency-dependent permittivity; its general group-velocity bound is not adopted."
---

## Postulate

Work in a material rest frame: an inertial frame in whose coordinates each modelled material element has fixed spatial position $x$ and history $t\mapsto(ct,x)$, as defined by the framework's earlier material-closure formulation. Let $\Omega\subseteq\mathbb R^3$ be the material region in that frame and $I\subseteq\mathbb R$ a nonempty open time interval. The electric field $E:\Omega\times I\to\mathbb R^3$, polarization fields $P_\ell:\Omega\times I\to\mathbb R^3$, and magnetic fields $B,H:\Omega\times I\to\mathbb R^3$ are real spatial-vector fields in that frame. In SI, $E$ is in V m$^{-1}$, $P_\ell$ in C m$^{-2}$, $B$ in T and $H$ in A m$^{-1}$.

For a fixed finite integer $N\ge1$, adopt at every material point $x$ the constitutive equations

$$D(x,t)=\varepsilon_\infty E(x,t)+\sum_{\ell=1}^{N}P_\ell(x,t),\qquad B(x,t)=\mu H(x,t),$$

$$\partial_t^2P_\ell(x,t)+\gamma_\ell\partial_tP_\ell(x,t)+\omega_\ell^2P_\ell(x,t)=a_\ell E(x,t)\qquad (1\le\ell\le N).$$

Here $\varepsilon_\infty>0$ is a constant scalar with units F m$^{-1}$, $\mu>0$ is a constant scalar with units H m$^{-1}$, $a_\ell>0$ are constant parameters with units F m$^{-1}$ s$^{-2}$, $\omega_\ell>0$ are constant angular frequencies with units s$^{-1}$, and $\gamma_\ell\ge0$ are constant damping rates with units s$^{-1}$. The parameters are independent of position and time; this is the meaning of homogeneous in this model. The model is linear because all displayed field and oscillator relations are linear with fixed coefficients, and spatially local because the oscillator equation at $x$ uses only the field and oscillator state at that same $x$. The magnetic law has only the constant scalar coefficient $\mu$ and no independent magnetic polarization variable; this is the nonmagnetic oscillator model adopted here.

The word nonmagnetic here means that the oscillator sector has no dynamic magnetic response; the fixed scalar coefficient $\mu$ can still encode a separate static constitutive response. To identify the displayed quantities with the framework's macroscopic definitions, stipulate $P_{\mathrm{tot}}=(\varepsilon_\infty-\varepsilon_0)E+\sum_{\ell=1}^N P_\ell$ and $M_{\mathrm{tot}}=(\mu_0^{-1}-\mu^{-1})B$. Then $D=\varepsilon_0E+P_{\mathrm{tot}}=\varepsilon_\infty E+\sum P_\ell$ and $H=\mu_0^{-1}B-M_{\mathrm{tot}}=\mu^{-1}B$. This is a constitutive identification in the model, not a microscopic decomposition.

The oscillator state at a time $t_0\in I$ includes both $P_\ell(x,t_0)$ and $\partial_tP_\ell(x,t_0)$. For a causal zero-past response, the oscillator state vanishes before the declared onset of the applied field and the solution at $t$ depends only on that past field history. If $\gamma_\ell=0$, no decaying stationary impulse response is assumed; the zero-past branch is the retarded solution of the initial-value equation, not an absolutely integrable convolution for arbitrary bounded histories. This postulate does not assert that any actual material realizes the equations.

## Postulate references

[[post-em-material-closure]]

[[pthm-em-macroscopic-maxwell]]

[[def-em-fields]]

[[def-em-polarization-magnetization]]

[[def-em-si-conventions]]
