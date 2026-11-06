---
id: pthm-st-bosonic-virasoro-central-extension
kind: physics-theorem
title: "Bosonic Virasoro Central Extension"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 7
deps:
  - def-st-bosonic-matter-oscillator-modes
dependency_roles:
  def-st-bosonic-matter-oscillator-modes: formulation-prerequisite
physical_scope: "The oscillator Virasoro algebra for D flat target-coordinate bosons on the algebraic finite-particle domain with the stated normal ordering."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§2.1–2.1.2 and 4.5.2 (PDF file pp.35–38 and 101–102; printed pp.28–31 and 94–95); printed pp.28–31 and 94–95); printed pp.28–31 and 94–95); printed pp.28–31 and 94–95); printed pp.28–31 and 94–95); printed pp.28–31 and 94–95); printed pp.28–32 and 94–96); source convention only, with the oscillator commutator proved locally."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For D covariantly quantized free bosons with the stated oscillator algebra and normal ordering, the modes $L_m=1/2$ $\sum _n$ $:\alpha _{m-n}$ dot $\alpha _n$: satisfy $[L_m,L_n]=(m-n)L_{m+n}+(D/12)(m^3-m)$ $\delta _{m+n,0}$.

## Statement references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §§2.1–2.1.2 and 4.5.2 (PDF file pp.35–38 and 101–102; printed pp.28–31 and 94–95); printed pp.28–31 and 94–95); printed pp.28–31 and 94–95); printed pp.28–31 and 94–95); printed pp.28–31 and 94–95); printed pp.28–31 and 94–95); printed pp.28–32 and 94–96); source convention only, with the oscillator commutator proved locally.

## Facts & Assumptions

[F1] [[def-st-bosonic-matter-oscillator-modes]] fixes $[\alpha_m^\mu,\alpha_n^\nu]=m\eta^{\mu\nu}\delta_{m+n,0}$, the Minkowski contraction, the algebraic finite-particle Fock domain, and normal ordering relative to the momentum vacuum.

[A1] Work at one fixed target momentum. For each fixed mode index the normally ordered quadratic sum is locally finite on this algebraic domain; no completion or convergence of an infinite operator series is used.

**Given:** Let $D\ge3$ be an integer and define $L_m=\frac12\sum_{k\in\mathbb Z}:\alpha_{m-k}\cdot\alpha_k:$ on the stated domain.

## Proof

1.1 For fixed $m,n$, the oscillator commutator and $[AB,C]=A[B,C]+[A,C]B$ give
$[L_m,\alpha_n^\rho]=\frac12\sum_k\left(\alpha_{m-k}^\mu[\alpha_{k\mu},\alpha_n^\rho]+[\alpha_{m-k}^\mu,\alpha_n^\rho]\alpha_{k\mu}\right)=-n\alpha_{m+n}^\rho$.
More explicitly, the first nonzero Kronecker term has $k=-n$ and coefficient $k=-n$; the second has $k=m+n$ and coefficient $m-k=-n$. Normal ordering changes only scalar commutators and does not affect this commutator with a single oscillator. [given, F1, A1, algebra]

2.1 Set $C_{m,n}=[L_m,L_n]-(m-n)L_{m+n}$. The Jacobi identity and step 1.1 show $[C_{m,n},\alpha_r^\rho]=0$ for every $r,\rho$. An operator commuting with every creation and annihilation mode is scalar on the fixed-momentum irreducible Fock module: it sends the vacuum to a scalar vacuum because all positive modes annihilate it, and commuting with creation modes gives the same scalar on every finite-particle descendant. Mode degree then forces that scalar to vanish unless $m+n=0$. [step 1.1, F1, algebra]

3.1 Let $m>0$. In $[L_m,L_{-m}]$ the noncentral terms combine to $2mL_0$; the remaining double contractions pair the finitely many creation/annihilation modes with indices $r$ and $m-r$, $1\le r\le m-1$. There are $D$ target components and the quadratic-generator factor contributes $1/2$, so the scalar remainder is $\frac D2\sum_{r=1}^{m-1}r(m-r)$. Since $\sum_{r=1}^{m-1}r=m(m-1)/2$ and $\sum_{r=1}^{m-1}r^2=m(m-1)(2m-1)/6$, this scalar equals $D(m^3-m)/12$. The cases $m=0$ and $m<0$ follow from antisymmetry of the commutator. [given, F1, A1, step 2.1, algebra]

4.1 Step 2.1 restricts the scalar $C_{m,n}$ to $m+n=0$, and step 3.1 computes that scalar for all integer $m$. Hence $C_{m,n}=\frac D{12}(m^3-m)\delta_{m+n,0}I$, which is the asserted Virasoro relation. [step 2.1, step 3.1] ∎
