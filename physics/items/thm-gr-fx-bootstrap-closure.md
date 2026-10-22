---
id: thm-gr-fx-bootstrap-closure
kind: theorem
title: "Open-closed bootstrap continuation"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
proof_strategy: direct
deps:
  - def-gr-fx-bootstrap-continuation-contract
  - def-infimum
  - thm-infimum-property
dependency_roles:
  def-gr-fx-bootstrap-continuation-contract: mathematical-premise
  def-infimum: mathematical-premise
  thm-infimum-property: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "G. Métivier, The Mathematics of Nonlinear Optics (2009), Chapter 3, §§3.3–3.5, PDF pp. 23–29: symmetric-hyperbolic existence, stability, continuation and a bootstrap-continuation implication"
      url: "https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf"
    - title: "Qian Wang, Lectures on Nonlinear Wave Equations (2015), §6.3, proof of Theorem 22, PDF pp. 174–186: continuity method, decay estimates and continuation"
      url: "https://people.maths.ox.ac.uk/wangq1/Lecture_notes/nonlinear_wave_9.pdf"
    - title: "S. Klainerman and J. Szeftel, Kerr stability for small angular momentum, arXiv:2104.11857v1 (2021), abstract and §1.2.1, PDF pp. 2 and 22–24"
      url: "https://arxiv.org/pdf/2104.11857"
    - title: "J. L. Jaramillo, J. A. Valiente Kroon and E. Gourgoulhon, From Geometry to Numerics: interdisciplinary aspects in mathematical and numerical relativity, arXiv:0712.2332v2 (2008), §§1.2.1 and 2.2, PDF pp. 2–3 and 11–12"
      url: "https://arxiv.org/pdf/0712.2332"

---

## Statement

Let a solution of a fixed evolution problem be maximal on $[0,T_{\max})$ and satisfy the preceding continuation and bootstrap contract, with its constants $A,\epsilon,\eta$ and initial bound $E(0)<A\epsilon^2$. If the bootstrap improvement holds on every compact subinterval, then $E(t)\le A\epsilon^2$ for all $t<T_{\max}$. If the listed margins persist throughout the interval, then $T_{\max}=\infty$.

## Statement references

[[def-gr-fx-bootstrap-continuation-contract]]

[[def-infimum]]

[[thm-infimum-property]]

[Metivier, Chapter 3, §§3.3–3.5](https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf)

[Wang, §6.3](https://people.maths.ox.ac.uk/wangq1/Lecture_notes/nonlinear_wave_9.pdf)

[Klainerman and Szeftel, abstract and §1.2.1](https://arxiv.org/pdf/2104.11857)

[Jaramillo, Valiente Kroon and Gourgoulhon, §§1.2.1 and 2.2](https://arxiv.org/pdf/0712.2332)

## Facts & Assumptions

**Given:** A right-maximal solution on $[0,T_{\max})$; continuous $E:[0,T_{\max})\to[0,\infty)$; constants $A,\epsilon,\eta>0$ with $2A\epsilon^2<\eta$; the initial bound $E(0)<A\epsilon^2$; the stated improvement implication on every compact subinterval; and the specified continuation criterion and margin functions.

[F1] [[def-gr-fx-bootstrap-continuation-contract]]: on each finite $[0,T]\subset[0,T_{\max})$, $E\le2A\epsilon^2$ implies $E\le A\epsilon^2$; a finite maximal endpoint extends if $E(t)\le\eta$ for every $t<T$ and all listed margins stay above their thresholds.

[F2] [[def-infimum]]: $\tau=\inf S$ means that $\tau$ is a lower bound of $S$ and is at least every other lower bound.

[F3] [[thm-infimum-property]]: every nonempty real set bounded below has an infimum; the proof derives this from the complete ordered field structure and uses no choice axiom.

## Proof

1.1 Fix a finite $T<T_{\max}$ and let $S_T=\{t\in[0,T]:E(t)\ge2A\epsilon^2\}$. If $S_T$ is nonempty, [F3] gives $\tau=\inf S_T$. Since $0$ is a lower bound and every element of $S_T$ is at most $T$, [F2] gives $0\le\tau\le T$; continuity and $E(0)<A\epsilon^2$ then give $\tau>0$. Since $\tau$ is a lower bound, $E(t)<2A\epsilon^2$ for every $t<\tau$. If $E(\tau)>2A\epsilon^2$, continuity would put points just below $\tau$ in $S_T$, contradicting that it is a lower bound; hence $E(\tau)\le2A\epsilon^2$. If $\tau=T$, nonemptiness and $\inf S_T=T$ force $T\in S_T$, so equality holds. If $\tau<T$ and $E(\tau)<2A\epsilon^2$, continuity gives $0<\delta<T-\tau$ such that $E(t)<2A\epsilon^2$ on $[\tau,\tau+\delta)$; no point of $S_T$ lies below $\tau$ or in this neighborhood, so $\tau+\delta/2$ is a larger lower bound, contradicting [F2]. Thus in either case $E(\tau)=2A\epsilon^2$. The improvement in [F1] on $[0,\tau]$ gives $E(\tau)\le A\epsilon^2$, a contradiction. Hence $S_T=\varnothing$. [given, F1, F2, F3, algebra]

2.1 Since $S_T=\varnothing$, $E(t)<2A\epsilon^2$ on $[0,T]$. Applying [F1] gives $E(t)\le A\epsilon^2$ on $[0,T]$. The choice of finite $T<T_{\max}$ was arbitrary, so this bound holds throughout the maximal interval. [given, F1, step 1.1, algebra]

3.1 If $T_{\max}<\infty$ and the margins persist, step 2.1 gives $E(t)\le A\epsilon^2<\eta$ for every $t<T_{\max}$. The continuation criterion in [F1] then extends the solution past $T_{\max}$, contradicting maximality. Therefore $T_{\max}=\infty$. [given, F1, step 2.1, algebra] ∎

## Remarks

The continuity proof uses only the real infimum property and the stated implication; it uses no choice principle. Applying it to the fixed general-relativity solution class still requires the exact hypotheses of [[thm-gr-fx-finite-slab-stability]], including that supplier's Countable Choice and Dependent Choice assumptions. No PDE decay, null-structure estimate, optical function, trapped-ray estimate, gauge control, or final-parameter modulation is proved here.
