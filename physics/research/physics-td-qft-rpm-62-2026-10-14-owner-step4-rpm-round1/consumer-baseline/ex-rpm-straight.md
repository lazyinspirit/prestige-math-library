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
deps: [pthm-rpm-free-massive-and-null-geodesics, def-rpm-mechanical-momentum-and-observer-energy, def-sr-affine-minkowski-model, def-rpm-spacetime-observer-and-worldline, def-inertial-frame-and-inertial-chart, lem-tangent-space-of-affine-minkowski-space-is-v]
dependency_roles:
  pthm-rpm-free-massive-and-null-geodesics: physical-result
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  lem-tangent-space-of-affine-minkowski-space-is-v: mathematical-premise
physical_scope: "Direct flat-space solution of the adopted free massive test-particle equation; the displayed trajectory and conserved quantities are model deductions, not reported observations."
sources:
  references:
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 1 four-velocity and Ch. 3 geodesics"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §1.1 particle motion"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
---

## Example

In the affine Minkowski model $(A,V,\eta,C^+)$, let $p\in A$, let $U_0\in V$ be future timelike with $\eta(U_0,U_0)=-c^2$, and let $m>0$. The curve $x:\mathbb R\to A$, $x(\tau)=p+\tau U_0$, is a straight free massive trajectory.

## Facts & Assumptions

**Given:** The flat affine model with background metric $g=\eta$, $U_0$ and $m$ as above. Choose an inertial frame $(o;e_0,e_1,e_2,e_3)$ and its inertial chart; at each event of the curve let $n=e_0$ under the canonical identification $T_qA\cong V$.

[F1] The free massive equation is $D_\tau U=0$ and its solutions are affine timelike geodesics ([[pthm-rpm-free-massive-and-null-geodesics]]).

[F2] The momentum and observer energy are $P=mU$ and $E_n(P)=-c\,g(P,n)$ ([[def-rpm-mechanical-momentum-and-observer-energy]]).

[F3] An inertial frame supplies an inertial chart and a future unit time-axis vector $e_0$; the affine tangent-space identification makes this the same observer along the curve ([[def-inertial-frame-and-inertial-chart]], [[lem-tangent-space-of-affine-minkowski-space-is-v]]).

[F4] In the flat relativistic-particle model, the background metric used in the momentum and observer-energy definitions is $g=\eta$ ([[def-rpm-spacetime-observer-and-worldline]]).

## Verification

1.1 Differentiating $x(\tau)=p+\tau U_0$ gives $U=U_0$, which is constant in the flat affine connection. It is future timelike by assumption, and $D_\tau U=0$, so it solves the free massive equation of [F1]. The mechanical momentum $P=mU_0$ is also constant. [given, F1, algebra]

2.1 In the inertial chart of [F3], write $U_0=(U^0,\mathbf U)$. Since $\chi(x(\tau))=\chi(p)+\tau(U^0,\mathbf U)$ and $t=x^0/c$, the coordinate velocity is $\mathbf v=c\mathbf U/U^0$. The norm gives $(U^0)^2=c^2+|\mathbf U|^2$, while future direction gives $U^0>0$, so $|\mathbf v|<c$. The observer $n=e_0$ is fixed under the affine tangent identification; [F2] and [F4] therefore make $E_n(P)=-c\eta(P,e_0)$ constant because $P$ is constant. [step 1.1, F2, F3, F4, algebra] ∎
