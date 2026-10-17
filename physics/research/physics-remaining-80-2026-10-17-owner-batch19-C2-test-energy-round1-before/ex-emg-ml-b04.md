---
id: ex-emg-ml-b04
kind: example
title: Electrostatic test-energy first integral
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 7
proof_strategy: direct
deps:
  - post-emg-background-maxwell-test
  - thm-emg-charged-symmetry-current
dependency_roles:
  post-emg-background-maxwell-test: physical-assumption
  thm-emg-charged-symmetry-current: mathematical-premise
physical_scope: "A finite-segment charged test probe in a prescribed, stationary electrostatic potential on Minkowski spacetime. The conserved energy is conditional on the adopted Lorentz-force law and excludes self-field, self-gravity, radiation reaction, and any coupled source claim."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. S. Reall, General Relativity, Cambridge Part III lecture notes, 12 October 2022 revision, complete 125-page notes, §6.2"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf
      locator: "Equations (6.9)–(6.10), PDF pp. 61–63, state the charged test-particle Lorentz law in curved spacetime. The stationary potential and energy integral are computed here under the local model conventions."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes (2019)"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "§1.2.3, equation (1.20), PDF pp. 23–24, gives the charged-particle potential action and its electrostatic potential term. The item uses the local SI action sign and proves its conservation directly."
verification:
  precheck: pass
---

## Example

On Minkowski spacetime with signature $(-,+,+,+)$, time orientation $\partial_0$, and length coordinates $x^0=ct$, let $\phi(\mathbf x)$ be a $C^2$ time-independent scalar potential on an open spatial region and set $A=-\phi(\mathbf x)\,dx^0/c$. Use SI units $[\phi]=\mathrm V$, $[q]=\mathrm C$, $[m]=\mathrm{kg}$, and $[c]=\mathrm{m\,s^{-1}}$. For a $C^2$ future-timelike proper-time segment satisfying the charged-probe law of [[post-emg-background-maxwell-test]], define $\mathbf w=d\mathbf x/dt$ and $\gamma=(1-|\mathbf w|^2/c^2)^{-1/2}$. Then

$$E_{\mathrm{test}}=\gamma mc^2+q\phi(\mathbf x)$$

is constant along the segment. The field and metric are prescribed data; this is neither a measurement nor a coupled point-source solution.

## Facts & Assumptions

**Given:** Minkowski metric, the potential $A=-\phi\,dx^0/c$ with $\partial_0\phi=0$, constants $m>0,q\in\mathbb R$, and a finite proper-time curve segment governed by the adopted test-body model.

[F1] [[post-emg-background-maxwell-test]]: on a finite local-potential segment, the probe is a massive charged test body with fixed $m,q$; the metric and $A$ are independent prescribed inputs, and the force-law formulation is the exact conditional equivalent of the adopted action under its inherited $\mathrm{AC}_\omega$ hypothesis. No self-field or self-gravity is included.

[F2] [[thm-emg-charged-symmetry-current]]: for an existing proper-time curve satisfying $m\nabla_UU=qF^\sharp(U)$, a Killing field $\xi$ and local potential with $\mathcal L_\xi A=d\chi$ give the constant $C=mg(U,\xi)+q(A(\xi)-\chi)$.

[A1] The potential is stationary, $\xi=\partial_0$ is the Minkowski time-translation Killing field, and $\chi=0$. The curve remains inside the spatial potential domain.

## Verification

1.1 The one-form $A$ is time independent, so $\mathcal L_\xi A=0=d\chi$. By [F1] the stated curve obeys the Lorentz law, and [F2] therefore makes $C=mg(U,\xi)+qA(\xi)$ constant on the segment. [given, F1, F2, A1]

2.1 Since $\partial_0$ is future-directed, $U^0>0$. The relation $U^i/U^0=w^i/c$ and $g(U,U)=-c^2$ imply $U^0=c(1-|\mathbf w|^2/c^2)^{-1/2}=\gamma c$, hence $U_0=-\gamma c$. Also $A(\xi)=A_0=-\phi/c$, so $C=-\gamma mc-q\phi/c=-E_{\mathrm{test}}/c$. Since $c>0$ is constant, the displayed test energy is constant. [given, A1, step 1.1, algebra]

3.1 For an explicit work check, $F_{0i}=-E_i/c$ and $A_0=-\phi/c$ give $\mathbf E=-\nabla\phi$ and $\mathbf B=0$, so the flat Lorentz law is $d(\gamma m\mathbf w)/dt=q\mathbf E$. Writing $\mathbf a=d\mathbf w/dt$, differentiation gives $d\gamma/dt=\gamma^3\mathbf w\cdot\mathbf a/c^2$ and $d(\gamma m\mathbf w)/dt=m\gamma\mathbf a+m\gamma^3(\mathbf w\cdot\mathbf a)\mathbf w/c^2$; hence $\mathbf w\cdot d(\gamma m\mathbf w)/dt=m\gamma^3\mathbf w\cdot\mathbf a=d(\gamma mc^2)/dt$. Thus $d(\gamma mc^2)/dt=q\mathbf E\cdot\mathbf w$, whereas $d(q\phi)/dt=q\nabla\phi\cdot\mathbf w=-q\mathbf E\cdot\mathbf w$. The two work terms cancel, agreeing with step 2.1. [F1, A1, step 2.1, algebra] ∎
