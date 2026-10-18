---
id: ex-radial-square-well-exact-partial-wave-matching
kind: example
title: Exact matching for the radial square well in the zeroth partial wave
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-volume-integral-scattering-model, def-spherical-harmonic-partial-wave-conventions, def-spherical-bessel-and-hankel-functions, thm-volume-scattering-radial-partial-wave-boundary-problem, def-countable-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
axiom_use: "No additional axiom is used; the example is a two-equation boundary matching calculation under the radial theorem's conditional hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Maximilian Kreuzer, Quantum Theory: Lecture Notes, version July 15, 2009, Chapter 8"
      url: "https://hep.itp.tuwien.ac.at/~kreuzer/Quanten.15.07.09.pdf"
      locator: "PDF pp. 151–153, exact radial square-well matching."
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
      locator: "PDF pp. 29–32, radial matching and phase-shift conventions."
verification:
  precheck: pass
---

## Example

Assume Countable Choice and Dependent Choice. Let $Q(r)=V_0>0$ on $0\le r\le R$, let $k>0$, and put $\kappa=\sqrt{k^2+V_0}$. In the $\ell=0$ reduced radial channel with incident regular mode $w^{\rm inc}(r)=\sin(kr)/k$, write the regular interior solution as $A\sin(\kappa r)$ and the exterior total mode as $\sin(kr)/k+B e^{ikr}$. Exact continuity of the value and derivative determines $A$ and $B$ below.

## Verification

**Given:** Countable Choice, Dependent Choice, $R,k,V_0>0$, and the $\ell=0$ matching statement of [[thm-volume-scattering-radial-partial-wave-boundary-problem]].

[F1] For a constant radial contrast $Q=V_0$, the reduced $ℓ=0$ equation is $w''+(k^2+V_0)w=0$ inside and $w''+k^2w=0$ outside; matching requires $w,w'$ continuous ([[thm-volume-scattering-radial-partial-wave-boundary-problem]]).

[F2] The outgoing zeroth spherical Hankel function is $h_0^{(1)}(z)=-ie^{iz}/z$, so a constant multiple of $r h_0^{(1)}(kr)$ is a constant multiple of $e^{ikr}$ ([[def-spherical-bessel-and-hankel-functions]]).

1.1 By [F1], the regular interior mode has form $A\sin(\kappa r)$; the exterior mode stated in the Example is the free regular incident mode plus the outgoing $ℓ=0$ mode by [F2]. At $r=R$, continuity of value gives $B e^{ikR}=A\sin(\kappa R)-\sin(kR)/k$. [F1, F2, given]

2.1 Continuity of derivative gives $A\kappa\cos(\kappa R)=\cos(kR)+ikB e^{ikR}$. Substitute step 1.1 and rearrange to obtain $A(\kappa\cos(\kappa R)-ik\sin(\kappa R))=\cos(kR)-i\sin(kR)=e^{-ikR}$. [F1, step 1.1, algebra]

3.1 The denominator has squared modulus $\kappa^2\cos^2(\kappa R)+k^2\sin^2(\kappa R)>0$, because $k,\kappa>0$ and sine and cosine cannot both vanish. Hence $A=\frac{e^{-ikR}}{\kappa\cos(\kappa R)-ik\sin(\kappa R)}$ and $B=e^{-ikR}\left(A\sin(\kappa R)-\frac{\sin(kR)}k\right)$. If $V_0=0$, then $\kappa=k$, these formulas reduce to $A=1/k$ and $B=0$, the unscattered solution. [given, step 2.1, algebra] ∎
