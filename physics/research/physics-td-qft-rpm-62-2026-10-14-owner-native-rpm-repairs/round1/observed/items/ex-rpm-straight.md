---
id: ex-rpm-straight
kind: example
title: "Straight timelike free particle"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
deps: [pthm-rpm-free-massive-and-null-geodesics, def-rpm-mechanical-momentum-and-observer-energy]
dependency_roles:
  pthm-rpm-free-massive-and-null-geodesics: physical-result
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
physical_scope: "Direct flat-space solution of the adopted free massive test-particle equation; the displayed trajectory and conserved quantities are model deductions, not reported observations."
sources:
  references:
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 1 four-velocity and Ch. 3 geodesics"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §1.1 particle motion"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
---

## Example

In flat Minkowski spacetime let $p$ be an event, let $U_0$ be a future vector with $\eta(U_0,U_0)=-c^2$, and let $m>0$. The curve $x(\tau)=p+\tau U_0$ is a straight free massive trajectory.

## Facts & Assumptions

**Given:** The flat affine model, $U_0$ and $m$ as above, and a fixed inertial observer $n$.

[F1] The free massive equation is $D_\tau U=0$ and its solutions are affine timelike geodesics ([[pthm-rpm-free-massive-and-null-geodesics]]).

[F2] The momentum and observer energy are $P=mU$ and $E_n(P)=-c\,g(P,n)$ ([[def-rpm-mechanical-momentum-and-observer-energy]]).

## Verification

1.1 Differentiating $x(\tau)=p+\tau U_0$ gives $U=U_0$, which is constant in the flat affine connection. It is future timelike by assumption, and $D_\tau U=0$, so it solves the free massive equation of [F1]. The mechanical momentum $P=mU_0$ is also constant. [given, F1, algebra]

2.1 For an inertial chart with $U_0=(U^0,\mathbf U)$, the norm condition gives $(U^0)^2=c^2+|\mathbf U|^2$ and future direction gives $U^0>0$. Therefore $|\mathbf v|=|c\mathbf U/U^0|<c$. For fixed $n$, [F2] makes $E_n(P)$ constant because $P$ is constant. [step 1.1, F2, algebra] ∎