---
id: ex-cft-r5-compact-boson-self-dual-charge-sectors
kind: example
title: Momentum-winding exchange at the self-dual radius
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-cft-r5-compact-boson-charge-lattice-and-cocycle
  - lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local
dependency_roles:
  def-cft-r5-compact-boson-charge-lattice-and-cocycle: mathematical-premise
  lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: Section 8.1, printed pp. 112–115, momentum and winding charges, the self-dual radius, and T-duality.
    - title: Pavel Mnev and Nicolai Reshetikhin, Lecture notes on conformal field theory
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
      locator: Sections 6.1.5–6.1.6, printed pp. 198–200, momentum-winding charge sectors and radius duality.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

In the Ginsparg normalization, the positive self-dual radius is $r_*=1/\sqrt2$. At $r_*$ the momentum state $q_m=(1,0)$ and the winding state $q_w=(0,1)$ both have weights $(h,\bar h)=(1/4,1/4)$ and integral spin zero. Radius duality exchanges them. Their leading OPE is $V_{1,0}(z,\bar z)V_{0,1}(w,\bar w)=-(z-w)^{1/2}(\bar z-\bar w)^{-1/2}V_{1,1}(w,\bar w)+\text{descendants}$; the cocycle sign cancels the exchange branch phase, so the full fields are mutually local.

## Statement references

[[def-cft-r5-compact-boson-charge-lattice-and-cocycle]]

[[lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local]]

[Ginsparg, Section 8.1](https://arxiv.org/pdf/hep-th/9108028v1)

[Mnev–Reshetikhin, Sections 6.1.5–6.1.6](https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf)

## Facts & Assumptions

**Given:** The charge lattice, cocycle, vertex operators, and radius-duality map of the compact-boson data.

[F1] [[def-cft-r5-compact-boson-charge-lattice-and-cocycle]] defines $p_L=m/(2r)+nr$, $p_R=m/(2r)-nr$, $\varepsilon((m,n),(m',n'))=(-1)^{mn'}$, and the lattice vertex fields.

[F2] [[lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local]] proves the spin formula $h-\bar h=mn$, the OPE factor $\varepsilon(q,q')$, and cancellation of the cocycle and exchange phases.

[F3] [[lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local]] proves the duality $r\mapsto(2r)^{-1}$, $(m,n)\mapsto(n,m)$ with phase $(-1)^{mn}$.

## Proof

**Given:** $r>0$ is the self-dual radius and $q_m=(1,0)$, $q_w=(0,1)$.

1.1 A positive fixed point of $r\mapsto(2r)^{-1}$ satisfies $r=(2r)^{-1}$, hence $2r^2=1$. Positivity selects the unique solution $r_*=1/\sqrt2$. [given, F3, algebra]

2.1 At $r_*$, [F1] gives $p_L(q_m)=p_R(q_m)=1/\sqrt2$ and $p_L(q_w)=1/\sqrt2$, $p_R(q_w)=-1/\sqrt2$. With no oscillator excitations, each weight is half the square of the corresponding charge, so both states have $(h,\bar h)=(1/4,1/4)$. The spin is $h-\bar h=mn=0$ for each label. [F1, F2, step 1.1, algebra]

3.1 For $q_m=(1,0)$ and $q_w=(0,1)$, [F1] gives $\varepsilon(q_m,q_w)=-1$ and $\varepsilon(q_w,q_m)=1$. Their left and right charge products are $1/2$ and $-1/2$, so the stated leading OPE follows directly from the vertex formula. Set $\lambda_*(q)=(p_L(q;r_*),p_R(q;r_*))\in\mathbb R^2$. The Lorentzian pairing is $b:=B(\lambda_*(q_m),\lambda_*(q_w))=1/2-(-1/2)=1$; exchanging the radial order contributes $e^{\pi ib}=-1$, which is canceled by the cocycle ratio $\varepsilon(q_m,q_w)/\varepsilon(q_w,q_m)=-1$. Thus the continued full fields commute. [F1, F2, step 2.1, algebra]

4.1 The duality map sends $(r_*,q_m)$ to $(r_*,q_w)$ and vice versa because $r_*$ is fixed and $(m,n)\mapsto(n,m)$. Its phase $(-1)^{mn}$ equals $+1$ on both labels. The duality therefore exchanges the two equal-weight sectors and, by [F3], preserves their vertex OPE data. [F1, F3, step 1.1, step 2.1, step 3.1, algebra] ∎
## Remarks

The two sectors are degenerate but distinct: one carries one unit of momentum and the other one unit of winding. This example uses the dimensionless worldsheet radius convention and assigns no dimensional target-space length.
