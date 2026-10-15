---
id: pthm-rpm-free-massive-and-null-geodesics
kind: physics-theorem
title: "Free massive and null particle geodesics"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [post-rpm-massive-test-particle-action, post-rpm-null-test-particle-action, def-rpm-mechanical-momentum-and-observer-energy, lem-rpm-length-action-first-variation, lem-rpm-einbein-variation-and-equivalence, thm-rpm-proper-time-parametrization, thm-gr-local-geodesics-and-exponential-map]
dependency_roles:
  post-rpm-massive-test-particle-action: physical-assumption
  post-rpm-null-test-particle-action: physical-assumption
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
  lem-rpm-length-action-first-variation: mathematical-premise
  lem-rpm-einbein-variation-and-equivalence: mathematical-premise
  thm-rpm-proper-time-parametrization: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
physical_scope: "Conditional model deduction for free spinless test bodies on a prescribed smooth background; local initial-value solutions only, with no geodesic completeness or empirical universality claim."
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §§1.1.1–1.1.2"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 3 §3.3"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "David Tong, String Theory, complete lecture notes, §1.1.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string1.pdf"
---

## Statement

On a prescribed smooth time-oriented Lorentzian background, stationary paths of the adopted massive action of [[post-rpm-massive-test-particle-action]] satisfy $D_\tau U=0$ in proper-time parameter, with $P=mU$ and $m>0$ constant. In the separately adopted null sector of [[post-rpm-null-test-particle-action]], stationary einbein paths have a nonzero future-null momentum $P$ satisfying $D_\lambda P=0$ in an affine parameter $\lambda$ with $dx/d\lambda=P$. Through each allowed initial point and tangent, each equation has a unique local solution and a unique maximal solution on an open interval. Neither maximal interval is asserted to be all of $\mathbb R$.

## Facts & Assumptions

**Given:** The postulated stationary-action rules and the prescribed smooth background.

[F1] The adopted massive action is $-mc\int\ell ds$ ([[post-rpm-massive-test-particle-action]]), the mechanical momentum is $P=mU$ ([[def-rpm-mechanical-momentum-and-observer-energy]]), and stationary paths satisfy $D_s(T/\ell)=0$ ([[lem-rpm-length-action-first-variation]]); the proper-time theorem gives $U=cT/\ell$ ([[thm-rpm-proper-time-parametrization]]).

[F2] The null einbein action is varied independently in $x,e$; its nonzero future-null branch has $P=T/e$ and $D_\lambda P=0$ after $d\lambda=e\,ds$ ([[post-rpm-null-test-particle-action]], [[lem-rpm-einbein-variation-and-equivalence]]).

[F3] For a smooth Lorentzian metric the geodesic initial-value problem has a unique local solution through each initial point and tangent ([[thm-gr-local-geodesics-and-exponential-map]]).

## Proof

1.1 By the first-variation result in [F1], a stationary massive path obeys $D_s(T/\ell)=0$. The proper-time relation $U=cT/\ell$ and $d\tau/ds=\ell/c$ then give $D_\tau U=0$. Since $P=mU$ with constant $m>0$, linearity of covariant differentiation gives $D_\tau P=mD_\tau U=0$. Thus its free trajectory is an affinely parametrized timelike geodesic. [given, F1, algebra]

1.2 By [F2], a stationary null einbein path has $D_\lambda P=0$ and $dx/d\lambda=P$, so it is an affinely parametrized null geodesic with nonzero future tangent. [given, F2]

2.1 Each displayed geodesic equation is a smooth first-order system in local coordinates for position and tangent. Applying [F3] gives unique local solutions and a unique maximal continuation on an open interval; the theorem gives no completeness claim. The physical conclusions are conditional deductions from the adopted actions, not experimental proofs that a particular body follows them. [step 1.1, step 1.2, F3] ∎
