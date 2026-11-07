---
id: lem-r2-conifold-dual-cycle-monodromy
kind: lemma
title: "Local monodromy of a dual conifold chain"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-r2-ordinary-double-point-smoothing-model
  - lem-r2-standard-conifold-residue-periods
  - thm-gts-gaussmanin-connection-and-griffiths-transversality
dependency_roles:
  def-r2-ordinary-double-point-smoothing-model: mathematical-premise
  lem-r2-standard-conifold-residue-periods: mathematical-premise
  thm-gts-gaussmanin-connection-and-griffiths-transversality: mathematical-premise
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Hossein Movasati, A Course in Hodge Theory With Emphasis on Multiple Integrals, §§6.4–6.6"
      url: "https://w3.impa.br/~hossein/myarticles/hodgetheory.pdf"
    - title: "S. Stark, The Ordinary Double Point (notes based on R. Thomas's lectures), §§1–2"
      url: "https://lekili.freemath.xyz/teaching/topics/ODP.pdf"
---

## Statement

For the single-node family of [[def-r2-ordinary-double-point-smoothing-model]], glue $B_R^{\rm loc}(t)$ to a cap in the smooth compact complement which is fixed under local monodromy, and let $B_t$ be the resulting flat integral cycle. Use the period-pairing convention $A\cdot B:=-I_{\rm geom}(A,B)$, where $I_{\rm geom}$ is the oriented transverse intersection sign obtained by placing the tangent frame of $A$ before that of $B$ in the complex orientation. With the real-sphere orientation, the local chain orientation, and a counterclockwise meridian about $t=0$, one has $A_t\cdot B_t=+1$ and the monodromy is $A_t\mapsto A_t$, $B_t\mapsto B_t+A_t$.

## Facts & Assumptions

**Given:** A single ordinary double point, the local orientations of [[def-r2-ordinary-double-point-smoothing-model]], and a cap in a smooth complement fixed by local monodromy.

[F1] [[lem-r2-standard-conifold-residue-periods]]: the local residue periods satisfy $\int_{A_t}\omega_t=-\pi^2t$ and $\int_{B_R^{\rm loc}(t)}\omega_t=H_R(t)+(\pi i/2)t\log t$.

[F2] [[thm-gts-gaussmanin-connection-and-griffiths-transversality]]: under the stated smooth-proper, Kähler, Hodge-number and relative-filtration hypotheses, cohomology is a flat local system with the Gauss–Manin connection and the Hodge filtration is holomorphic.

## Proof

**Given:** A positive base point $0<t<R^2$ and the positively oriented meridian $t(s)=t e^{2\pi i s}$, $0\le s\le1$.

1.1 At the unique local intersection of $A_t$ and $B_R^{\rm loc}$, namely $w=(0,0,0,\sqrt t)$, their tangent frames are $(\partial_{x_1},\partial_{x_2},\partial_{x_3})$ and $(\partial_{y_1},\partial_{y_2},\partial_{y_3})$ in the complex coordinates $w_j=x_j+iy_j$ on $Q_t$. The combined frame has sign $-1$ relative to the complex orientation $(x_1,y_1,x_2,y_2,x_3,y_3)$, so $I_{\rm geom}(A,B)=-1$ and the declared period pairing gives $A\cdot B=+1$. [given, algebra]

2.1 Along the meridian, continue the square-root branch in the parameterization of $B_R^{\rm loc}$. At $|y|=R$, the number $t(s)+R^2$ winds zero times about $0$ because $0<t<R^2$, so the boundary of the continued chain returns pointwise to its initial boundary. Therefore the difference $B_R^{\rm loc}(1)-B_R^{\rm loc}(0)$ is a closed integral three-cycle in $Q_t$. The cap is fixed, so the same difference is the global cycle $T(B)-B$ and is supported in the local smoothing. [given, step 1.1, algebra]

3.1 Write $w=x+iy$ on $Q_t$ for positive real $t$. The equation $q(w)=t$ is equivalent to $x\cdot y=0$ and $|x|^2=t+|y|^2$. Thus $(x,y)\mapsto (u=x/|x|,y)$ identifies $Q_t$ with $T^*S^3=\{(u,y):|u|=1,\ u\cdot y=0\}$, with inverse $(u,y)\mapsto\sqrt{t+|y|^2}\,u+iy$. Scaling the cotangent fibers gives a deformation retraction to $A_t$, so $H_3(Q_t;\mathbb Z)=\mathbb Z[A_t]$. Hence $T(B)-B=kA_t$ for an integer $k$. [given, step 2.1, algebra]

4.1 By the flat local system in [F2], analytic continuation of a period around the meridian is the integral over the transported cycle. The explicit local period in [F1] changes only $\log t$, by $2\pi i$; its change is $(\pi i/2)t(2\pi i)=-\pi^2t=\int_{A_t}\omega_t$. Since step 3.1 says $T(B)-B=kA_t$, integration gives $k\int_A\omega_t=\int_A\omega_t$. This period is nonzero for $t>0$, hence $k=1$. The flat continuation of the first formula in [F1] is still $-\pi^2t$, so if $T(A)=jA_t$ then $j(-\pi^2t)=-\pi^2t$ and $j=1$. Thus $T(A)=A$ and $T(B)=B+A$. [F1, F2, step 3.1, algebra] ∎

## Remarks

The source notes state the Picard–Lefschetz formula but refer elsewhere for its general proof. The argument here proves the needed one-node dual-cycle action directly from the explicit local chain integral and its rank-one Milnor fiber; it does not assert a formula for multiple nodes or other singularities. The sign convention is made explicit because the plan-spec gave $A\cdot B=+1$ without defining whether the odd-dimensional pairing is the geometric intersection or its negative.

