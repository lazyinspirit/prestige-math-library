---
id: def-em-ideal-harmonic-dipole-model
kind: definition
title: "The ideal harmonic electric-dipole radiation model and its adopted status"
status: published
origin: pipeline
domain: physics
dependency_level: 21
deps: [pthm-em-dipole-radiation, def-em-si-conventions, def-em-vacuum-energy-flux, def-em-fields, def-em-complex-plane-wave, def-complex-exponential, def-complex-conjugate-real-imaginary-part-and-modulus, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-euclidean-inner-product, def-cross-product-in-r3, def-countable-choice, lem-em-harmonic-forcing-periodic-response, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-real-power-continuity-and-derivatives]
dependency_roles:
  pthm-em-dipole-radiation: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-vacuum-energy-flux: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-complex-plane-wave: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-em-harmonic-forcing-periodic-response: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Explicit ideal radiation-law model of a harmonic electric dipole of complex amplitude $p_0$ in vacuum: the leading transverse far-zone fields $E_{\\rm d},B_{\\rm d}$ on the punctured space, their flux $S_{\\rm d}$, and the declared absence of magnetic-dipole and higher-multipole content. Excluded: exact Maxwell solutions at finite radius, near-zone and static fields, any actual source construction, boundary conditions, finite total energy, self-force and radiation reaction, material response laws, and every measured or empirical statement; the relation to actual compact smooth sources is only through the explicit error bounds of the dipole theorem."
sources:
  references:
    - title: "David Tong, Electromagnetism (University of Cambridge Part II Mathematical Tripos, author-hosted complete 236-page notes)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "section 6.2.1 'Electric Dipole Radiation', printed pp. 144-146 (far-zone dipole fields and the long-wavelength setting)"
    - title: "R. Fitzpatrick, Classical Electromagnetism, node 94 'The Hertzian dipole' and node 95 'Electric dipole radiation' (University of Texas at Austin)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node94.html"
      locator: "nodes 94-95 of chapter 9: the oscillating dipole far-zone fields and the sin^2 angular power pattern"
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS, section 12.3 'Streuung an Materie'"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "eqs. (12.39)-(12.41) printed pp. 12.8-12.11: dipole radiation law and angular power; the framework re-derives every constant in its own SI dictionary"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $\omega>0$, $k:=\omega/c$ with $c$ the vacuum speed of [[def-em-si-conventions]], $\mu_0>0$ the vacuum permeability of [[def-em-si-conventions]], and $p_0\in\mathbb C^3$ (the complex dipole-moment amplitude, in $\mathrm C\,\mathrm m$). Define, on the punctured space $\mathbb R^3\setminus\{0\}$ and all times $t\in\mathbb R$,

$$E_{\rm d}(x,t):=\operatorname{Re}\Bigl(-\frac{\mu_0\omega^2}{4\pi r}\,n\times(n\times p_0)\,e^{i(kr-\omega t)}\Bigr),\qquad B_{\rm d}(x,t):=\frac1c\,n\times E_{\rm d}(x,t),$$

where $r:=|x|$ and $n:=x/r$ ([[def-euclidean-inner-product]], [[def-cross-product-in-r3]]), with the real part and complex exponential of [[def-complex-conjugate-real-imaginary-part-and-modulus]] and [[def-complex-exponential]] and the componentwise real-part encoding convention of [[def-em-complex-plane-wave]] (the spatial amplitude here varies with $x$; no plane-wave instance is asserted). Call $(E_{\rm d},B_{\rm d})$ the **ideal harmonic electric-dipole radiation model of frequency $\omega$ and amplitude $p_0$**, and call $S_{\rm d}:=E_{\rm d}\times B_{\rm d}/\mu_0$ its model flux ([[def-em-vacuum-energy-flux]]); the model fields are read as an electric and a magnetic field of [[def-em-fields]].

### Adopted status

This is an explicitly adopted ideal radiation-law model, fixed by the following declarations.

1. It is the leading transverse far-zone field of [[pthm-em-dipole-radiation]](c) evaluated at the harmonic transverse moment $V(u)=\operatorname{Re}(-\omega^2p_0e^{-i\omega u})$, i.e. at $p''$ for the waveform $p(u)=\operatorname{Re}(p_0e^{-i\omega u})$: by part (a) of [[lem-em-harmonic-forcing-periodic-response]] the second derivative of that explicit $C^\infty$ waveform is $\operatorname{Re}(-\omega^2p_0e^{-i\omega u})$, and substituting $u=t-r/c$ into $\mu_0\,n\times(n\times V(u))/(4\pi r)$ gives exactly $E_{\rm d}$, because $e^{i(kr-\omega t)}=e^{-i\omega(t-r/c)}$.
2. The model contains no independent magnetic-dipole or higher-multipole radiation, no near-zone or static field and no other radiating component.
3. It is not asserted to solve the vacuum Maxwell equations at finite $r$, to be the field of any actual source, to satisfy any boundary condition or to have finite total energy on $\mathbb R^3\setminus\{0\}$.
4. For compact smooth conserved sources, comparison with these prescribed model fields uses the actual source's moment $p_{\rm act}(u)$ of [[pthm-em-dipole-radiation]], the harmonic waveform $p_{\rm h}(u)=\operatorname{Re}(p_0e^{-i\omega u})$, their second-derivative mismatch

$$M(u):=|p_{\rm act}''(u)-p_{\rm h}''(u)|,$$

and the explicit $D,\Gamma$ bounds of [[pthm-em-dipole-radiation]] (b), (c) and (e). A bound depending only on that source's $D$ and $\Gamma$ is valid when $M\equiv0$ on the observation window, in which case the theorem's leading fields for the source's moment coincide with the model fields; for $M\not\equiv0$ the comparison carries the additional mismatch term. The source's moment is not automatically the independently prescribed $p_0$. These actual-source comparisons assume Countable Choice ([[def-countable-choice]]) carried by the cited theorem. The explicit ideal fields themselves and their pointwise flux definition remain choice-free.

No measured, empirical or material-response content is adopted: $p_0$ is prescribed model data, not a derived polarizability.

### Well-definedness and conventions

On the declared domain $r>0$, so $r=|x|$ is the positive Euclidean norm and $n=x/r$ is a unit vector; $n\times(n\times p_0)$ and its real part are defined componentwise, and $E_{\rm d}$, $B_{\rm d}$ are $C^\infty$ on $(\mathbb R^3\setminus\{0\})\times\mathbb R$ because $r$ is $C^\infty$ there and the real and imaginary parts of $-\frac{\mu_0\omega^2}{4\pi r}n\times(n\times p_0)e^{i(kr-\omega t)}$ are smooth combinations of the smooth functions $r^{-1}$, $x_i$, $\cos(kr-\omega t)$ and $\sin(kr-\omega t)$ ([[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]). The field is transverse in the sense that $E_{\rm d}\cdot n=0$ and $B_{\rm d}\cdot n=0$, because $n\times(n\times p_0)$ is orthogonal to $n$ and $n\times E_{\rm d}$ is orthogonal to $n$ by [[lem-cross-product-is-bilinear-alternating-and-orthogonal]] applied separately to real and imaginary parts, and $B_{\rm d}=n\times E_{\rm d}/c$ holds by definition with $|B_{\rm d}|=|E_{\rm d}|/c$. The model is meaningful at $p_0=0$, where both fields and the flux vanish identically. The varying radial amplitude $1/r$ is not a plane-wave amplitude, and the componentwise real-part convention is that of [[def-em-complex-plane-wave]]; the cross product, inner product and norms are those of [[def-cross-product-in-r3]] and [[def-euclidean-inner-product]]. No equation of motion of any source, no determination of $p_0$ from any charge distribution and no energy or flux reading beyond the pointwise definition of $S_{\rm d}$ in [[def-em-vacuum-energy-flux]] is part of this item.
