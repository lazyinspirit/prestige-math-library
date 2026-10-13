---
id: ex-em-te-ten-example
kind: example
domain: physics
title: "The TE10 candidate of a lossless rectangular guide: explicit fields, cutoff and propagating branch"
status: published
origin: pipeline
dependency_level: 19
deps: [def-em-guide-cavity-geometry, def-em-si-conventions, pthm-em-rectangular-mode-candidates, lem-em-rectangle-mode-profile-identities]
dependency_roles:
  lem-em-rectangle-mode-profile-identities: mathematical-premise
  def-em-guide-cavity-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  pthm-em-rectangular-mode-candidates: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The explicit TE10 candidate mode of the lossless rectangular guide in the lossless isotropic scalar branch, with its polarization, standing profile, cutoff and propagating/evanescent branches. Conditional on the adopted model; no measurement or empirical claim."
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

Every displayed component and parameter below is its real or complex numerical value in fixed coherent SI units: lengths in m, time in s, $\omega$ in $\mathrm s^{-1}$, $\beta$ in $\mathrm m^{-1}$, $\varepsilon$ in $\mathrm F\,\mathrm m^{-1}$, $\mu$ in $\mathrm H\,\mathrm m^{-1}$, $E,\tilde E$ in $\mathrm V\,\mathrm m^{-1}$ and $H,\tilde H$ in $\mathrm A\,\mathrm m^{-1}$. The physical longitudinal normalization is $H_*=1\,\mathrm A\,\mathrm m^{-1}$ in [[pthm-em-rectangular-mode-candidates]](a), whose numerical value is one.

Let $\varepsilon,\mu>0$, $a,b>0$, $\omega>0$, $\beta>0$ with $\beta^2=\omega^2\varepsilon\mu-(\pi/a)^2>0$, and put $\omega_c:=\pi/(a\sqrt{\varepsilon\mu})$, $\theta:=\beta x_3-\omega t$. In the rectangular guide of [[def-em-guide-cavity-geometry]] with cross-section $(0,a)\times(0,b)$, take the TE candidate of [[pthm-em-rectangular-mode-candidates]](a) with $(m,n)=(1,0)$, whose amplitudes are $$\tilde E=\bigl(0,\,i\omega\mu\tfrac{a}{\pi}\sin\tfrac{\pi x_1}{a},\,0\bigr),\qquad \tilde H=\bigl(-i\beta\tfrac{a}{\pi}\sin\tfrac{\pi x_1}{a},\,0,\,\cos\tfrac{\pi x_1}{a}\bigr).$$ Then the real fields $E=\operatorname{Re}(\tilde Ee^{i\theta})$, $B=\mu\operatorname{Re}(\tilde He^{i\theta})$ are smooth, have $E_z=0$ (TE) with $E$ linearly polarized along $e_2$, satisfy the source-free lossless macroscopic equations and the PEC wall conditions, and carry a half-sine standing profile $\sin(\pi x_1/a)$ in $x_1$ with a traveling wave in $x_3$. The cutoff of this mode is $\omega_c=\pi/(a\sqrt{\varepsilon\mu})$: real nonzero $\beta$ exists exactly for $\omega>\omega_c$, at $\omega=\omega_c$ the mode is at cutoff ($\beta=0$), and for $\omega<\omega_c$ it is evanescent. If $a\ge b$, then $\omega_c=\pi/(a\sqrt{\varepsilon\mu})$ is the lowest cutoff among all TE and TM candidates of the cited theorem (attained also by $(m,n)=(0,1)$ when $a=b$); the case $(m,n)=(0,0)$ is not a mode by the index restriction of the theorem. This is an explicit conditional candidate of the adopted model; it asserts no measurement and no completeness.

## Facts & Assumptions

**Given:** The SI numerical-value convention and normalization $H_*=1\,\mathrm A\,\mathrm m^{-1}$ of the Example; constants $\varepsilon,\mu>0$, $a,b>0$, $\omega>0$, $\beta>0$ with $\beta^2=\omega^2\varepsilon\mu-(\pi/a)^2>0$, $\omega_c:=\pi/(a\sqrt{\varepsilon\mu})$ and $\theta:=\beta x_3-\omega t$; the rectangular guide of [[def-em-guide-cavity-geometry]] with cross-section $(0,a)\times(0,b)$ and the SI conventions of [[def-em-si-conventions]].

[F1] With the SI numerical-value convention and $H_*=1\,\mathrm A\,\mathrm m^{-1}$, the TE candidate theorem [[pthm-em-rectangular-mode-candidates]] (a): for indices $(m,n)\ne(0,0)$ with $h_{mn}=\cos\frac{m\pi x_1}{a}\cos\frac{n\pi x_2}{b}$ and $k_{mn}^2=(\frac{m\pi}{a})^2+(\frac{n\pi}{b})^2$, and with $\beta^2=\omega^2\varepsilon\mu-k_{mn}^2$, the amplitudes $\tilde E=-\frac{i\omega\mu}{k_{mn}^2}e_z\times\nabla_th_{mn}$, $\tilde H=\frac{i\beta}{k_{mn}^2}\nabla_th_{mn}+e_zh_{mn}$ give smooth real fields $E=\operatorname{Re}(\tilde Ee^{i\theta})$, $B=\mu\operatorname{Re}(\tilde He^{i\theta})$ that are TE, satisfy the four source-free lossless macroscopic equations and the PEC wall conditions, and whose cutoff is $\omega_c=k_c/\sqrt{\varepsilon\mu}$ with the alternatives of clause (d); clause (c) excludes $(0,0)$.

[F2] The profile identities of [[lem-em-rectangle-mode-profile-identities]] for $(m,n)=(1,0)$: $h_{10}=\cos\frac{\pi x_1}{a}$, $k_{10}=\pi/a$, $\Delta_th_{10}=-(\pi/a)^2h_{10}$, $\partial_1h_{10}=0$ at $x_1\in\{0,a\}$ and $\partial_2h_{10}=0$ at $x_2\in\{0,b\}$.



## Verification

**Proof technique:** direct: instantiate the TE candidate at $(1,0)$, read off the amplitudes and the wall conditions, and evaluate the cutoff and the index comparison.

1.1 [Instantiation] With $(m,n)=(1,0)$ one has $k_c:=\pi/a$, $\nabla_th_{10}=-\frac{\pi}{a}\sin\frac{\pi x_1}{a}e_1$ and $e_z\times\nabla_th_{10}=-\frac{\pi}{a}\sin\frac{\pi x_1}{a}e_2$ by [F2] and the coordinate formula for the cross product, so the amplitudes of [F1] become $\tilde E=-(i\omega\mu a/\pi)(-\sin\frac{\pi x_1}{a})e_2=(0,i\omega\mu\frac{a}{\pi}\sin\frac{\pi x_1}{a},0)$ and $\tilde H=(i\beta a^2/\pi^2)(-\frac{\pi}{a}\sin\frac{\pi x_1}{a})e_1+\cos\frac{\pi x_1}{a}e_z=(-i\beta\frac{a}{\pi}\sin\frac{\pi x_1}{a},0,\cos\frac{\pi x_1}{a})$, exactly as displayed. The theorem supplies smoothness, the four source-free equations, the TE property $E_z=0$ and the PEC wall conditions, and the first component $\tilde E_1=\tilde E_3=0$ shows that $E$ is polarized along $e_2$; the real fields are $E=\omega\mu\frac{a}{\pi}\sin\frac{\pi x_1}{a}\operatorname{Re}(ie^{i\theta})\,e_2$ and $B=\mu\operatorname{Re}(\tilde He^{i\theta})$, so the transverse factor $\sin(\pi x_1/a)$ is a fixed half-sine standing profile and the phase $\theta=\beta x_3-\omega t$ is a traveling wave in $x_3$. [F1, F2, algebra]

2.1 [Cutoff and propagation alternatives] Applying clause (d) of [F1] with $k_c=\pi/a$ gives $\omega_c=\pi/(a\sqrt{\varepsilon\mu})$: real longitudinal wave numbers with $\beta^2=\omega^2\varepsilon\mu-(\pi/a)^2$ exist exactly for $\omega\ge\omega_c$, with $\beta\ne0$ exactly for $\omega>\omega_c$ and $\beta=0$ at $\omega=\omega_c$; for $\omega<\omega_c$ the two algebraic roots are $\beta=\pm i\sqrt{(\pi/a)^2-\omega^2\varepsilon\mu}$ and the same verified fields carry the factor $e^{-\operatorname{Im}\beta\,x_3}$, so the mode is evanescent. [step 1.1, F1]

2.2 [Lowest cutoff for $a\ge b$] Let $(m,n)\ne(0,0)$ be any TE index pair and let $k_{mn}^2=(\frac{m\pi}{a})^2+(\frac{n\pi}{b})^2$. If $m\ge1$ then $k_{mn}^2\ge(\pi/a)^2$; if $m=0$ then $n\ge1$ and $k_{mn}^2\ge(\pi/b)^2\ge(\pi/a)^2$ because $a\ge b$. Hence $k_{mn}^2\ge\pi^2/a^2=k_{10}^2$, with equality possible only for $m=1,n=0$, or for $m=0,n=1$ when $a=b$; since the cutoff $\omega_c=k_c/\sqrt{\varepsilon\mu}$ is increasing in $k_c$, the cutoff $\pi/(a\sqrt{\varepsilon\mu})$ of the $(1,0)$ candidate is the lowest cutoff of all TE indices. Every TM index has $m,n\ge1$ by [F1], so its $k_{mn}^2\ge\pi^2/a^2+\pi^2/b^2>\pi^2/a^2$ and its cutoff is strictly larger; and $(m,n)=(0,0)$ is not a mode by the index restriction of [F1]. Thus $\omega_c=\pi/(a\sqrt{\varepsilon\mu})$ is the lowest cutoff among those TE/TM candidates, attained also by $(0,1)$ at $a=b$. [step 1.1, F1, algebra]

3.1 [Scope] The displayed fields are an explicit conditional candidate of the adopted lossless model, with the stated cutoff and lower-bound comparison; the quantities are declared model parameters, no measurement, resonance observation, completeness or uniqueness is asserted, and no empirical premise is used. [step 1.1, step 2.1, step 2.2, F1] ∎
