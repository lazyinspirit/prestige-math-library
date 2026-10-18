---
id: ex-radial-square-well-exact-partial-wave-matching
kind: example
title: Exact matching for the radial square well in the zeroth partial wave
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [thm-certified-scaled-spherical-bessel-enclosures, def-spherical-bessel-evaluation-contract, def-volume-integral-scattering-model, def-spherical-harmonic-partial-wave-conventions, def-spherical-bessel-and-hankel-functions, thm-volume-scattering-radial-partial-wave-boundary-problem, def-countable-choice, def-dependent-choice]
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

[F3] [[thm-certified-scaled-spherical-bessel-enclosures]] and [[def-spherical-bessel-evaluation-contract]]: a positive represented real argument has finite certified spherical-value and first-derivative enclosures of any requested absolute precision when sufficient finite caps are allowed; each fixed capped call may instead be inconclusive.

1.1 By [F1], the regular interior mode has form $A\sin(\kappa r)$; the exterior mode stated in the Example is the free regular incident mode plus the outgoing $ℓ=0$ mode by [F2]. At $r=R$, continuity of value gives $B e^{ikR}=A\sin(\kappa R)-\sin(kR)/k$. [F1, F2, given]

2.1 Continuity of derivative gives $A\kappa\cos(\kappa R)=\cos(kR)+ikB e^{ikR}$. Substitute step 1.1 and rearrange to obtain $A(\kappa\cos(\kappa R)-ik\sin(\kappa R))=\cos(kR)-i\sin(kR)=e^{-ikR}$. [F1, step 1.1, algebra]

3.1 The denominator has squared modulus $\kappa^2\cos^2(\kappa R)+k^2\sin^2(\kappa R)>0$, because $k,\kappa>0$ and sine and cosine cannot both vanish. Hence $A=\frac{e^{-ikR}}{\kappa\cos(\kappa R)-ik\sin(\kappa R)}$ and $B=e^{-ikR}\left(A\sin(\kappa R)-\frac{\sin(kR)}k\right)$. If $V_0=0$, then $\kappa=k$, these formulas reduce to $A=1/k$ and $B=0$, the unscattered solution. [given, step 2.1, algebra]


4.1 For certified numerical comparison, suppose additionally that $k,R,V_0$ are supplied by terminating dyadic enclosure interfaces of widths tending effectively to zero. This is only a numerical representation hypothesis; the exact Example retains all real $k,R,V_0>0$. Refine to positive parameter boxes. Rational interval multiplication and squaring enclose $kR$ and $k^2+V_0$. The positive square root has certified dyadic enclosures by rational bisection: choose an integer upper bracket whose square exceeds the rational upper endpoint, bisect the dyadic bracket, and compare midpoint squares with each endpoint. The bracket widths halve, so any specified width is reached finitely. Since the positive limiting radicand is bounded below, $\sqrt b-\sqrt a=(b-a)/(\sqrt b+\sqrt a)$ shows that the resulting root-image widths tend to zero as the radicand boxes shrink. Multiplication by the positive $R$ boxes yields enclosures of $\kappa R$ with widths tending effectively to zero. To implement the width-$2^{-n}$ interface for either product, refine until its rational width, including outward dyadic rounding, is at most $2^{-n}$; convergence proves finite termination of each such request. [given, algebra, construct]

4.2 With $z>0$, the zeroth-order formulas give $\sin z=zj_0(z)$, $\cos z=j_0(z)+zj_0'(z)$, and $e^{iz}=iz h_0^{(1)}(z)$. Apply [F3] at the two positive arguments constructed in step 4.1, reconstruct these elementary values by interval operations, and use complex conjugation for $e^{-ikR}$. The denominator $D=\kappa\cos(\kappa R)-ik\sin(\kappa R)$ satisfies $|D|^2\ge k^2$ because $\kappa\ge k>0$. The shrinking enclosures from [F3] and step 4.1 therefore eventually exclude zero for $D$ and $k$. Complex division may then be performed as $1/D=\overline D/((\operatorname{Re}D)^2+(\operatorname{Im}D)^2)$ with a strictly positive real denominator interval. The formulas in step 3.1 yield containing rectangles for $A,B$ with widths tending to zero, by finite sums, products and these nonzero divisions. For any positive absolute tolerance, sufficiently fine finite input/evaluation precision therefore certifies $A,B$ to that tolerance; a finite cap that does not achieve it returns inconclusive. Relative accuracy for $B$ is not claimed when $B=0$, including the unscattered case. [F2, F3, step 3.1, step 4.1, algebra] ∎
