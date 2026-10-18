---
id: ex-radial-square-well-exact-partial-wave-matching
kind: example
title: Exact matching for the radial square well in the zeroth partial wave
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Assume Countable Choice and Dependent Choice. Let $Q(r)=V_0>0$ on $0\le r\le R$, let $k>0$, and put $\kappa=\sqrt{k^2+V_0}$. In the $\ell=0$ reduced radial channel with incident regular mode $w^{\rm inc}(r)=\sin(kr)/k$, write the regular interior solution as $A\sin(\kappa r)$ and the exterior total mode as $\sin(kr)/k+B e^{ikr}$. Exact continuity of the value and derivative determines $A$ and $B$ below.

## Verification

**Given:** Countable Choice, Dependent Choice, $R,k,V_0>0$, and the $\ell=0$ matching statement of [[thm-volume-scattering-radial-partial-wave-boundary-problem]].

[F1] For a constant radial contrast $Q=V_0$, the reduced $ℓ=0$ equation is $w''+(k^2+V_0)w=0$ inside and $w''+k^2w=0$ outside; matching requires $w,w'$ continuous ([[thm-volume-scattering-radial-partial-wave-boundary-problem]]).

[F2] The outgoing zeroth spherical Hankel function is $h_0^{(1)}(z)=-ie^{iz}/z$, so a constant multiple of $r h_0^{(1)}(kr)$ is a constant multiple of $e^{ikr}$ ([[def-spherical-bessel-and-hankel-functions]]).

[F3] [[thm-certified-scaled-spherical-bessel-enclosures]] and [[def-spherical-bessel-evaluation-contract]]: positive represented real arguments admit containing enclosures for spherical values and their first argument derivatives at any positive rational absolute tolerance when sufficiently large finite caps are supplied. Fixed capped calls may return inconclusive instead; a zero-containing output has no relative certificate.

1.1 By [F1], the regular interior mode has form $A\sin(\kappa r)$; the exterior mode stated in the Example is the free regular incident mode plus the outgoing $ℓ=0$ mode by [F2]. At $r=R$, continuity of value gives $B e^{ikR}=A\sin(\kappa R)-\sin(kR)/k$. [F1, F2, given]

1.2 For numerical comparison only, suppose additionally that $k,R,V_0$ are supplied by terminating dyadic enclosure interfaces whose widths on request $q$ are at most $2^{-q}$. Their exact values retain the unrestricted real domain in the Example. To supply either composed argument on a width request $2^{-n}$, scan $q=n,n+1,\ldots$, request all three parameter boxes at $q$, and skip until they have positive lower endpoints. Denote them by $K_q,\mathcal R_q,\mathcal V_q$ and form the positive dyadic radicand box $[L_q,U_q]=K_q^2+\mathcal V_q$. Choose an integer $N_q\ge1$ with $N_q^2\ge U_q$, by scanning positive integers. For each endpoint $x\in\{L_q,U_q\}$, start with $[0,N_q]$ and perform $q$ bisections: a dyadic midpoint $m$ replaces the lower endpoint if $m^2\le x$, and otherwise replaces the upper endpoint. The bracket always contains $\sqrt x$ and its width is $N_q2^{-q}$. Use the lower endpoint of the $L_q$ bracket and upper endpoint of the $U_q$ bracket to form $S_q\supset\sqrt{[L_q,U_q]}$. Form $Z_q=K_q\mathcal R_q$ and $\widetilde Z_q=S_q\mathcal R_q$, and return the requested one when its lower endpoint is positive and its width is at most $2^{-n}$; otherwise continue the scan. Every operation before a scan increment is finite. The parameter boxes are eventually bounded and bounded away from zero, so $N_q$ is eventually bounded. Also $\sqrt{U_q}-\sqrt{L_q}=(U_q-L_q)/(\sqrt{U_q}+\sqrt{L_q})\to0$, and $\operatorname{width}(S_q)\le\sqrt{U_q}-\sqrt{L_q}+2N_q2^{-q}\to0$. Interval product widths tend to zero by boundedness and the product-width inequality. Thus both returned intervals eventually have positive lower endpoints and the required width; every requested scan terminates. They contain exactly $kR$ and $\kappa R$, which need not be dyadic. [given, algebra, construct]

2.1 Continuity of derivative gives $A\kappa\cos(\kappa R)=\cos(kR)+ikB e^{ikR}$. Substitute step 1.1 and rearrange to obtain $A(\kappa\cos(\kappa R)-ik\sin(\kappa R))=\cos(kR)-i\sin(kR)=e^{-ikR}$. [F1, step 1.1, algebra]

3.1 The denominator has squared modulus $\kappa^2\cos^2(\kappa R)+k^2\sin^2(\kappa R)>0$, because $k,\kappa>0$ and sine and cosine cannot both vanish. Hence $A=\frac{e^{-ikR}}{\kappa\cos(\kappa R)-ik\sin(\kappa R)}$ and $B=e^{-ikR}\left(A\sin(\kappa R)-\frac{\sin(kR)}k\right)$. If $V_0=0$, then $\kappa=k$, these formulas reduce to $A=1/k$ and $B=0$, the unscattered solution. [given, step 2.1, algebra]

4.1 For $z>0$, the degree-zero definitions and their first derivatives give $\sin z=zj_0(z)$, $\cos z=j_0(z)+zj_0'(z)$ and $e^{iz}=iz h_0^{(1)}(z)$. At stage $j\ge1$, use step 1.2 to enclose the arguments and parameters with widths at most $2^{-j}$; invoke [F3] at the two represented arguments with absolute tolerance $2^{-j}$, setting all four evaluator caps successively to $t=1,2,\ldots$ until each call succeeds. For this fixed $j$ the sufficient-cap assertion in [F3] proves that each search terminates. Reconstruct these elementary values by exact interval operations, enclose $\kappa$ by dividing the $\kappa R$ enclosure by the positive $R$ enclosure, and use complex conjugation for $e^{-ikR}$. The exact denominator $D=\kappa\cos(\kappa R)-ik\sin(\kappa R)$ satisfies $|D|^2\ge k^2>0$, since $\kappa\ge k$ and $\cos^2+\sin^2=1$. The shrinking enclosures therefore eventually exclude zero for $D$ and $k$. Enclose $1/D$ as $\overline D/((\operatorname{Re}D)^2+(\operatorname{Im}D)^2)$ only when its real denominator interval has positive lower endpoint; the same shrinking-width argument eventually certifies this condition. Then the formulas in step 3.1 give containing rectangles for $A,B$ with widths tending to zero, because sums and products of bounded shrinking intervals shrink and these divisions have denominators bounded away from zero. Round the final coefficient endpoints outward to the dyadic grid $2^{-j}\mathbb Z$, which adds at most $2^{1-j}$ to each component width and preserves containment. Consequently scanning $j$ until any specified positive rational absolute-radius tests pass terminates, although a prescribed finite cap can instead return inconclusive. This procedure proves a certified numerical comparison for represented parameters without altering the exact matching formulas for arbitrary positive real parameters. No relative accuracy for $B$ is asserted when $B=0$, including the unscattered case. [F2, F3, step 3.1, step 1.2, algebra, construct] ∎

