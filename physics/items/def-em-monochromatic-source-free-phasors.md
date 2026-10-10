---
id: def-em-monochromatic-source-free-phasors
kind: definition
title: "Frequency-$\\omega$ source-free vacuum phasor pairs and their real-field encoding"
status: draft
origin: pipeline
domain: physics
dependency_level: 9
deps: [def-em-si-conventions, def-em-fields, def-complex-exponential, def-complex-conjugate-real-imaginary-part-and-modulus, def-ck-euclidean-maps-and-diffeomorphisms, def-divergence-and-curl-of-a-c1-vector-field, def-em-complex-plane-wave]
dependency_roles:
  def-em-si-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-complex-exponential: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-em-complex-plane-wave: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Definition of the frequency-$\\omega$ complex phasor encoding $E=\\operatorname{Re}(\\widetilde Ee^{-i\\omega t})$, $B=\\operatorname{Re}(\\widetilde Be^{-i\\omega t})$ of a pair of $C^\\infty$ complex fields on an open spatial region, and of the class of pairs satisfying the four source-free vacuum phasor equations with the SI vacuum constants. Excluded: any assertion that the associated real fields solve Maxwell's equations, any outgoing, boundary, existence, uniqueness, energy, flux or constitutive statement, and every empirical claim; only the $C^\\infty$ open-set class is defined."
sources:
  references:
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS, section 13.2 'Wellenleiter'"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "printed p. 13.3, eqs. (13.10)-(13.11): ideal-conductor waveguide model and the monochromatic phasor convention"
    - title: "J. Peatross and M. Ware, Physics of Light and Optics (Brigham Young University, author-hosted complete 348-page textbook)"
      url: "https://optics.byu.edu/docs/OpticsBook.pdf"
      locator: "chapter 10 'Diffraction', printed pp. 261-271, sections 10.1-10.4 and Example 10.4; appendix 10.A"
verification:
  precheck: n/a
---

## Definition

Let $\omega>0$, let $D\subseteq\mathbb R^3$ be a nonempty open set, and let $c>0$, $\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$ be the vacuum constants of [[def-em-si-conventions]]; put $T:=2\pi/\omega$.

**(a) [Phasor encoding.]** For every pair of $C^\infty$ maps $\widetilde E,\widetilde B:D\to\mathbb C^3$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) define the **associated real fields** $E,B:D\times\mathbb R\to\mathbb R^3$ componentwise by

$$E(x,t):=\operatorname{Re}\bigl(\widetilde E(x)e^{-i\omega t}\bigr),\qquad B(x,t):=\operatorname{Re}\bigl(\widetilde B(x)e^{-i\omega t}\bigr)\qquad((x,t)\in D\times\mathbb R),$$

with the complex exponential and real part of [[def-complex-exponential]] and [[def-complex-conjugate-real-imaginary-part-and-modulus]]. This is the encoding convention of [[def-em-complex-plane-wave]] specialized from plane-wave amplitudes to a general $C^\infty$ amplitude, and the complex fields are not themselves physical fields.

**(b) [Source-free class.]** The pair $(\widetilde E,\widetilde B)$ is called a **frequency-$\omega$ source-free vacuum phasor pair on $D$** when it is $C^\infty$ and satisfies, on $D$,

$$\operatorname{div}\widetilde E=0,\qquad \operatorname{div}\widetilde B=0,\qquad \operatorname{curl}\widetilde E=i\omega\widetilde B,\qquad \operatorname{curl}\widetilde B=-i\omega\varepsilon_0\mu_0\widetilde E=-i\omega c^{-2}\widetilde E,$$

with the divergence and curl of [[def-divergence-and-curl-of-a-c1-vector-field]] applied componentwise to the complex fields. The word "source-free" records that the displayed equations carry no charge or current term; the associated real fields are read as an electric and a magnetic field of [[def-em-fields]], $\omega$ is the angular frequency and $T$ the period.

**(c) [Status and scope.]** This item fixes the encoding, the four phasor equations and the terminology only. It asserts no equation for the associated real fields, no outgoing or boundary condition, no existence or uniqueness statement, no energy or flux reading and no empirical content. In particular the deduction that the associated real fields satisfy the smooth-branch vacuum Maxwell equations with zero sources is not part of this definition; for the pairs used on the exterior-scattering page it is established by the exterior-scattering theorem recorded there. Only $C^\infty$ pairs on an open set are defined, so no boundary trace, weak or distributional class is introduced here.

### Well-definedness and conventions

The componentwise reading of the two complex fields is the one of [[def-ck-euclidean-maps-and-diffeomorphisms]]: $\widetilde E$ and $\widetilde B$ are $C^\infty$ exactly when the twelve real coordinate maps $\operatorname{Re}\widetilde E_k$, $\operatorname{Im}\widetilde E_k$, $\operatorname{Re}\widetilde B_k$, $\operatorname{Im}\widetilde B_k$ ($k=1,2,3$) are $C^\infty$ on the open set $D$. The real and imaginary parts and the complex exponential of [[def-complex-conjugate-real-imaginary-part-and-modulus]] and [[def-complex-exponential]] are total on $\mathbb C$, so the associated real fields are defined for every $C^\infty$ pair, with no equation assumed and no regularity asserted of them by clause (a). Clause (b) is the subclass cut out by the four displayed equations: the divergence and curl of a $C^\infty$ complex field are the componentwise extensions of the divergence and curl of [[def-divergence-and-curl-of-a-c1-vector-field]] to $\operatorname{Re}$ and $\operatorname{Im}$ parts, evaluated on the open set $D$, and the right-hand sides use only complex scalar multiplication by the constants $i\omega$ and $i\omega\varepsilon_0\mu_0$. In particular $\varepsilon_0\mu_0=c^{-2}$ by [[def-em-si-conventions]], a positive scalar parameter; all four equations are pointwise, so no selection of data and no choice principle enters the definition.

The units are inherited from [[def-em-fields]] and [[def-em-si-conventions]]: $\widetilde E$ and $E$ carry $\mathrm V\,\mathrm m^{-1}$, $\widetilde B$ and $B$ carry the tesla $\mathrm T$, the wavevector-like spatial variable $x$ carries $\mathrm m$, $t$ carries $\mathrm s$, and $\omega$ carries $\mathrm s^{-1}$. The complex fields are auxiliary amplitudes encoding the real fields; clause (b) is a condition on those amplitudes, not a new physical assertion about the real fields.
