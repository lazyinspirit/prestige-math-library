---
id: pthm-st-bosonic-bc-ghost-central-charge
kind: physics-theorem
title: "Bosonic Bc Ghost Central Charge"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 5
deps:
  - def-st-bosonic-bc-ghost-system
dependency_roles:
  def-st-bosonic-bc-ghost-system: formulation-prerequisite
physical_scope: "One chiral bc system with the exact weights, vacuum, stress tensor, and normal ordering in def-st-bosonic-bc-ghost-system."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§5.2–5.3.2 (PDF file pp.121–126; printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.113–120); bc stress tensor and displayed TT double-contraction calculation."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the fermionic bc system with weights (2,-1), OPE b(z)c(w)~1/(z-w), SL(2)-invariant vacuum, and stress tensor $T_{\mathrm{gh}}=-2:b\partial c:-:\partial b\,c:$, the TT OPE has central charge $c_{\mathrm{gh}}=-26$ on the algebraic finite-particle domain.

## Statement references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §§5.2–5.3.2 (PDF file pp.121–126; printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.113–120); bc stress tensor and displayed TT double-contraction calculation.

## Facts & Assumptions

[F1] [[def-st-bosonic-bc-ghost-system]] fixes odd modes with $\{b_m,c_n\}=\delta_{m+n,0}$, $\{b_m,b_n\}=\{c_m,c_n\}=0$, normal ordering relative to the SL(2)-invariant vacuum, and the adopted stress tensor $T_{gh}=-2:b\partial c:-:\partial b\,c:$.

[A1] The OPE calculation is formal radial ordering on the algebraic finite-particle domain. Fermionic Wick signs are retained; no analytic completion is used.

**Given:** Use $T_{gh}(z)=-2:b(z)\partial c(z):-:\partial b(z)c(z):$ and $b(z)c(w)\sim(z-w)^{-1}$.

## Proof

1.1 Put $u=z-w$. Differentiating the basic contraction gives $\partial b(z)c(w)\sim-u^{-2}$, $b(z)\partial c(w)\sim u^{-2}$, and $\partial b(z)\partial c(w)\sim-2u^{-3}$. The reversed-order contractions have the signs required by the odd CAR. [given, F1, A1, algebra]

2.1 Write $A=:\partial b\,c:$ and $B=:b\,\partial c:$, so $T=-A-2B$. Wick's rule gives the double-contraction coefficients of $AA$, $AB$, $BA$, and $BB$ respectively as $-1,-2,-2,-1$ times $u^{-4}$; the two cross terms each carry coefficient $(-1)(-2)=2$ from $T$. Thus the total fourth-order coefficient is $(-1)+2(-2)+2(-2)+4(-1)=-13$. The single contractions, using the same differentiated kernels and Taylor expansion about $w$, give $2T(w)u^{-2}+\partial T(w)u^{-1}$; all remaining terms are regular. [step 1.1, F1, A1, algebra]

3.1 Therefore $T(z)T(w)\sim-13(z-w)^{-4}+2T(w)(z-w)^{-2}+\partial T(w)(z-w)^{-1}$. By the convention $T(z)T(w)\sim\frac{c_{gh}/2}{(z-w)^4}+\cdots$, $c_{gh}/2=-13$ and $c_{gh}=-26$. [step 2.1, algebra] ∎
