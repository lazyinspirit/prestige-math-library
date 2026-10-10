---
id: ex-em-rectangular-cavity-example
kind: example
domain: physics
title: "A rectangular-cavity standing mode at resonance: explicit fields and the PEC end-cap check"
status: draft
origin: pipeline
dependency_level: 19
deps: [def-em-guide-cavity-geometry, def-divergence-and-curl-of-a-c1-vector-field, lem-em-rectangle-mode-profile-identities, lem-em-transverse-vector-identities, pthm-em-rectangular-mode-candidates]
dependency_roles:
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-em-guide-cavity-geometry: formulation-prerequisite
  lem-em-rectangle-mode-profile-identities: mathematical-premise
  lem-em-transverse-vector-identities: mathematical-premise
  pthm-em-rectangular-mode-candidates: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An explicit conditional standing-wave cavity mode of the lossless isotropic scalar branch in the rectangular perfectly conducting cavity, with its exact resonance condition and end-cap check. No measured resonance or empirical claim."
sources:
  references:
    - title: "N. Beisert, Elektrodynamik, Vorlesungsskript, ETH Zurich, 2024 FS (German), Chapter 13 'Wellenleiter' and 'Kavitaeten', PDF pp. 153-162 (printed pp. 13.1-13.10); complete 176-page author-hosted PDF and official TeX read, with the conjugate-error in (13.26), the 'Wendepunkt' mislabel and the general group-velocity restriction recorded as source defects not copied"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin, 2006-02-02), node 105 'Wave-guides', complete author-hosted HTML node read in the run's pinned full-notes snapshot"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node105.html"
    - title: "D. J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596-page full scan), sections 9.5.1-9.5.3 printed pp. 405-412 (wave guides, TE waves in a rectangular wave guide, coaxial transmission line), read in the stamped full text; OCR noise cross-checked against the other treatments"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
    - title: "D. Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.), section 4.3.3 'An Application: Reflection off a Conductor' printed pp. 89-90 (ideal-conductor boundary reading: E=0 inside, tangential E continuity and n.B=0, surface current), read in the stamped full PDF"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
verification:
  precheck: pass
---

## Example

All displayed fields and parameters below are numerical values in fixed coherent SI units: $a,b,d,x_j$ in m, $t$ in s, $\omega$ in $\mathrm s^{-1}$, $\varepsilon$ in $\mathrm F\,\mathrm m^{-1}$, $\mu$ in $\mathrm H\,\mathrm m^{-1}$, $E,E_{\mathrm{sp}}$ in $\mathrm V\,\mathrm m^{-1}$ and $B$ in T. The TM longitudinal normalization is $E_*=1\,\mathrm V\,\mathrm m^{-1}$ in [[pthm-em-rectangular-mode-candidates]](b), so the dimensionless profile below specifies the numerical electric-field components.

Let $a,b,d>0$ and $\varepsilon,\mu>0$ be constants, put $E_{\mathrm{sp}}(x):=e_1\sin\frac{\pi x_2}{b}\sin\frac{\pi x_3}{d}$, and for $\omega>0$ define $E(x,t):=E_{\mathrm{sp}}(x)\cos(\omega t)$ and $B(x,t):=-\frac1\omega(\operatorname{curl}E_{\mathrm{sp}})(x)\sin(\omega t)$, where the curl is the fixed-time spatial curl of [[def-divergence-and-curl-of-a-c1-vector-field]]. Then $E,B$ are smooth, $\operatorname{div}E_{\mathrm{sp}}=0$, $\Delta E_{\mathrm{sp}}=-[(\pi/b)^2+(\pi/d)^2]E_{\mathrm{sp}}$, and $E,B$ satisfy the four source-free macroscopic equations on the box $\Omega_c=(0,a)\times(0,b)\times(0,d)$ in the lossless isotropic scalar branch exactly when $$\omega^2=\frac{1}{\varepsilon\mu}\Bigl[\Bigl(\frac{\pi}{b}\Bigr)^2+\Bigl(\frac{\pi}{d}\Bigr)^2\Bigr];$$ with that resonance, $n\times E=0$ and $n\cdot B=0$ hold on all six walls, so $(E,B)$ is a PEC cavity mode. It is the cutoff instance $\beta=0$ of the TM family of [[pthm-em-rectangular-mode-candidates]](b) taken with axis $e_1$, cross-section $(0,b)\times(0,d)$ and indices $(m,n)=(1,1)$: the field is independent of $x_1$, which is why it also satisfies the $x_1=0$ and $x_1=a$ end-cap conditions for every box length $a>0$. The example asserts a conditional model solution, not an observed resonance.

## Facts & Assumptions

**Given:** The SI numerical-value convention and $E_*=1\,\mathrm V\,\mathrm m^{-1}$ normalization of the Example; constants $a,b,d>0$ and $\varepsilon,\mu>0$; $E_{\mathrm{sp}}(x):=e_1\sin\frac{\pi x_2}{b}\sin\frac{\pi x_3}{d}$; for $\omega>0$ the fields $E(x,t):=E_{\mathrm{sp}}(x)\cos(\omega t)$ and $B(x,t):=-\frac1\omega(\operatorname{curl}E_{\mathrm{sp}})(x)\sin(\omega t)$ on the box $\Omega_c=(0,a)\times(0,b)\times(0,d)$; the fixed-time spatial curl and divergence of [[def-divergence-and-curl-of-a-c1-vector-field]]; the box geometry, its six open walls and the PEC conditions of [[def-em-guide-cavity-geometry]].

[F1] Profile identities: with $e_{11}(y_1,y_2):=\sin\frac{\pi y_1}{b}\sin\frac{\pi y_2}{d}$ on the rectangle $(0,b)\times(0,d)$ one has $\Delta e_{11}=-k_{11}^2e_{11}$ with $k_{11}^2=(\pi/b)^2+(\pi/d)^2$, $e_{11}=0$ on the rectangle boundary; in particular $\sin0=\sin\pi=0$ and the second derivatives of the sine factors are $-\frac{\pi^2}{b^2}\sin\frac{\pi y_1}{b}$ and $-\frac{\pi^2}{d^2}\sin\frac{\pi y_2}{d}$ ([[lem-em-rectangle-mode-profile-identities]] (b)).

[F2] Use the positively oriented cyclic coordinates $(y_1,y_2,y_3)=(x_2,x_3,x_1)$ with basis $(e_2,e_3,e_1)$: cyclic permutation leaves the coordinate cross-product, divergence and curl formulas unchanged. Thus the transverse lemma and candidate theorem apply with longitudinal axis $e_1$ and transverse coordinates $(x_2,x_3)$. For an $x_1$-independent profile $h$ regarded on the splitting $\mathbb R^3=\mathbb R^2\oplus\mathbb Re_1$ with coordinates $(x_2,x_3)$, $\operatorname{curl}(e_1h)=-e_1\times\nabla^{(2,3)}h$, $\operatorname{div}(e_1h)=\partial_1h=0$, and $e_1\times(e_1\times v)=-v$ for transverse $v$ ([[lem-em-transverse-vector-identities]] (a),(b) applied with $e_z:=e_1$).

[F3] With the stated SI numerical-value convention and $E_*=1\,\mathrm V\,\mathrm m^{-1}$, the TM family of [[pthm-em-rectangular-mode-candidates]] (b) with axis $e_1$, cross-section $(0,b)\times(0,d)$, indices $(1,1)$ and $\beta=0$: $k_c^2=k_{11}^2$, and the amplitudes $\tilde E=\frac{i\beta}{k_c^2}\nabla_te+e_ze$, $\tilde H=\frac{i\omega\varepsilon}{k_c^2}e_z\times\nabla_te$ at $\beta=0$ become $\tilde E=e_1e_{11}$ and $\tilde H=\frac{i\omega\varepsilon}{k_{11}^2}e_1\times\nabla e_{11}$; the theorem gives smoothness, the four source-free equations at the cutoff $\omega^2=k_c^2/(\varepsilon\mu)$, and the PEC conditions on the four faces with normals $\pm e_2,\pm e_3$ ([[pthm-em-rectangular-mode-candidates]] (b),(d)).



## Verification

**Proof technique:** direct: compute the divergence, Laplacian and curl of the explicit spatial profile, verify the four equations and the six wall conditions, and identify the field with the cutoff TM instance.

1.1 [The spatial profile, the equations and the resonance] The profile has only its first component, independent of $x_1$, so $\operatorname{div}E_{\mathrm{sp}}=\partial_1(\sin\frac{\pi x_2}{b}\sin\frac{\pi x_3}{d})=0$ and $\Delta E_{\mathrm{sp}}=e_1(\partial_2^2+\partial_3^2)e_{11}=-\bigl[(\pi/b)^2+(\pi/d)^2\bigr]E_{\mathrm{sp}}=-k_{11}^2E_{\mathrm{sp}}$ by [F1]. Hence $\operatorname{div}E=\operatorname{div}E_{\mathrm{sp}}\cos\omega t=0$ and $\operatorname{div}B=-\frac1\omega\operatorname{div}(\operatorname{curl}E_{\mathrm{sp}})\sin\omega t=0$ (a divergence of a curl vanishes componentwise by the equality of mixed partials of the smooth profile). Further $\operatorname{curl}E=(\operatorname{curl}E_{\mathrm{sp}})\cos\omega t$ and $-\partial_tB=(\operatorname{curl}E_{\mathrm{sp}})\cos\omega t$, so Faraday's law holds identically. For Amp\`ere's law compute $\operatorname{curl}\operatorname{curl}E_{\mathrm{sp}}$: by [F2] $\operatorname{curl}E_{\mathrm{sp}}=\operatorname{curl}(e_1e_{11})=-e_1\times\nabla e_{11}=(0,\partial_3e_{11},-\partial_2e_{11})$, whose curl is $\bigl(\partial_2(-\partial_2e_{11})-\partial_3(\partial_3e_{11}),0,0\bigr)=-(\Delta e_{11})e_1=k_{11}^2e_1e_{11}=k_{11}^2E_{\mathrm{sp}}$ by [F1]; therefore $\operatorname{curl}H=\frac1\mu\operatorname{curl}B=-\frac{1}{\omega\mu}k_{11}^2E_{\mathrm{sp}}\sin\omega t$ and $\partial_tD=\varepsilon\partial_tE=-\varepsilon\omega E_{\mathrm{sp}}\sin\omega t$, which agree exactly when $k_{11}^2=\omega^2\varepsilon\mu$, i.e. when $\omega^2=\frac{1}{\varepsilon\mu}[(\pi/b)^2+(\pi/d)^2]$. The fields are smooth because $E_{\mathrm{sp}}$ is a product of sines and $\operatorname{curl}E_{\mathrm{sp}}$ a finite combination of such products, and both are independent of $x_1$. [F1, F2, algebra]

2.1 [The six wall conditions] On the walls $x_1=0$ and $x_1=a$ with normals $\mp e_1$: $n\times E=\mp e_1\times E=\mp\cos\omega t\,e_1\times E_{\mathrm{sp}}=0$ since $E_{\mathrm{sp}}$ is parallel to $e_1$, and $n\cdot B=\mp B_1=\pm\frac1\omega(\operatorname{curl}E_{\mathrm{sp}})_1\sin\omega t=0$ because $(\operatorname{curl}E_{\mathrm{sp}})_1=\partial_2(E_{\mathrm{sp}})_3-\partial_3(E_{\mathrm{sp}})_2=0$. On the walls $x_2=0$ and $x_2=b$ with normals $\mp e_2$: $e_2\times E=E_1(e_2\times e_1)=-E_1e_3$ and $E_1=\sin\frac{\pi x_2}{b}\sin\frac{\pi x_3}{d}\cos\omega t$ vanishes because $\sin\frac{\pi x_2}{b}=0$ there, so $n\times E=0$; and $n\cdot B=\mp B_2=\pm\frac1\omega(\operatorname{curl}E_{\mathrm{sp}})_2\sin\omega t$ with $(\operatorname{curl}E_{\mathrm{sp}})_2=\partial_3(E_{\mathrm{sp}})_1-\partial_1(E_{\mathrm{sp}})_3=\frac{\pi}{d}\sin\frac{\pi x_2}{b}\cos\frac{\pi x_3}{d}$, which vanishes at $x_2=0,b$. On the walls $x_3=0$ and $x_3=d$ with normals $\mp e_3$: $e_3\times E=E_1e_2$, whose coefficient $E_1$ vanishes because $\sin\frac{\pi x_3}{d}=0$ there, so $n\times E=0$; and $n\cdot B=\mp B_3=\pm\frac1\omega(\operatorname{curl}E_{\mathrm{sp}})_3\sin\omega t$ with $(\operatorname{curl}E_{\mathrm{sp}})_3=\partial_1(E_{\mathrm{sp}})_2-\partial_2(E_{\mathrm{sp}})_1=-\frac{\pi}{b}\cos\frac{\pi x_2}{b}\sin\frac{\pi x_3}{d}$, which vanishes at $x_3=0,d$. Thus all six walls satisfy $n\times E=0$ and $n\cdot B=0$ at resonance. [step 1.1, F1, F2, algebra]

3.1 [Identification with the cutoff TM instance] In the setting of [F3] with axis $e_1$, cross-section $(0,b)\times(0,d)$, indices $(1,1)$ and $\beta=0$, the dispersion relation $\beta^2=\omega^2\varepsilon\mu-k_{11}^2$ at $\beta=0$ is exactly the resonance $k_{11}^2=\omega^2\varepsilon\mu$ of step 1.1, $e_{11}=\sin\frac{\pi x_2}{b}\sin\frac{\pi x_3}{d}$, and the amplitudes become $\tilde E=e_1e_{11}$ and $\tilde H=\frac{i\omega\varepsilon}{k_{11}^2}e_1\times\nabla e_{11}$. Then $\theta=-\omega t$, $E=\operatorname{Re}(\tilde Ee^{-i\omega t})=e_1e_{11}\cos\omega t=E_{\mathrm{sp}}\cos\omega t$, and $B=\mu\operatorname{Re}(\tilde He^{-i\omega t})=\mu\frac{\omega\varepsilon}{k_{11}^2}(e_1\times\nabla e_{11})\sin\omega t=-\frac1\omega\operatorname{curl}E_{\mathrm{sp}}\sin\omega t$ because $\operatorname{curl}E_{\mathrm{sp}}=-e_1\times\nabla e_{11}$ [F2] and $\mu\omega\varepsilon/k_{11}^2=1/\omega$ at resonance. The amplitudes are independent of $x_1$, which is why the end-cap conditions on $x_1=0,a$ hold for every box length $a>0$; the theorem's clause (d) supplies the resonance condition and clause (b) the guide-wall conditions on the four faces with normals $\pm e_2,\pm e_3$. [step 1.1, step 2.1, F2, F3, algebra]

4.1 [Scope] The displayed pair is an explicit conditional standing-wave mode of the lossless isotropic scalar branch in the rectangular perfectly conducting cavity, with the exact resonance condition and the full wall check, identified as the cutoff $\beta=0$ TM$(1,1)$ instance with axis $e_1$; the example asserts a model solution and not an observed resonance, and no measurement, completeness or empirical claim is made. [step 1.1, step 2.1, step 3.1, F3] ∎
