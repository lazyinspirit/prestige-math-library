---
id: lem-r2-standard-conifold-residue-periods
kind: lemma
title: "Standard conifold residue periods"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 1
deps: [def-r2-ordinary-double-point-smoothing-model]
dependency_roles:
  def-r2-ordinary-double-point-smoothing-model: mathematical-premise
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
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
    - title: "Hossein Movasati, A Course in Hodge Theory With Emphasis on Multiple Integrals, §§6.4–6.6"
      url: "https://w3.impa.br/~hossein/myarticles/hodgetheory.pdf"
    - title: "S. Stark, The Ordinary Double Point (notes based on R. Thomas's lectures)"
      url: "https://lekili.freemath.xyz/teaching/topics/ODP.pdf"
---

## Statement

Use the model, orientations and residue form of [[def-r2-ordinary-double-point-smoothing-model]]. For positive real $t$, the local periods are
$$\int_{A_t}\omega_t=-\pi^2t,\qquad \int_{B_R^{\rm loc}(t)}\omega_t=2\pi i\int_0^R\frac{r^2}{\sqrt{t+r^2}}\,dr.$$
With the branch of $\log t$ on the slit disk that is real for positive $t$, the latter is
$$\int_{B_R^{\rm loc}(t)}\omega_t=H_R(t)+\frac{\pi i}{2}t\log t,\qquad H_R(t):=\pi iR\sqrt{R^2+t}-\pi i t\log\!\bigl(R+\sqrt{R^2+t}\bigr),$$
where $H_R$ is holomorphic near $t=0$. In particular its logarithmic coefficient is $(-\pi^2t)/(2\pi i)$, the vanishing period divided by $2\pi i$. These are local integrals; the second chain is relative and is not a compact $B$-cycle.

## Facts & Assumptions

**Given:** A positive real $t<R^2$, the sphere $A_t$, and the oriented chain $B_R^{\rm loc}(t)$ of [[def-r2-ordinary-double-point-smoothing-model]].

[F1] [[def-r2-ordinary-double-point-smoothing-model]] fixes $\omega_t=-dw_1\wedge dw_2\wedge dw_3/(2w_4)$ on $w_4\ne0$, and fixes both chain orientations.

## Proof

**Given:** The residue normalization and orientations in [F1].

1.1 On the chart $u_4>0$ of the unit sphere, write $u_4=(1-u_1^2-u_2^2-u_3^2)^{1/2}$. The boundary orientation of $S^3$ has volume form $du_1\wedge du_2\wedge du_3/u_4$ there: the outward normal followed by the graph tangent frame has positive determinant $1/u_4$. Pulling back the residue to $w=\sqrt t\,u$ therefore gives $-(t/2)$ times the unit-sphere volume form. The same identity holds on the other charts by smoothness, so $\int_{A_t}\omega_t=-(t/2)\operatorname{Area}(S^3)$. [F1, algebra]

1.2 On $B_R^{\rm loc}$, $dw_1\wedge dw_2\wedge dw_3=i^3dy_1\wedge dy_2\wedge dy_3=-i\,dy_1\wedge dy_2\wedge dy_3$ and $w_4=\sqrt{t+|y|^2}$. The residue pullback is thus $i\,dy_1\wedge dy_2\wedge dy_3/(2\sqrt{t+|y|^2})$. Spherical coordinates in $\mathbb R^3$ give the second integral in the Statement, since $\operatorname{Area}(S^2)=4\pi$ by direct integration of $\sin\theta\,d\theta\,d\phi$. [F1, algebra]

2.1 In coordinates $u=(\cos\chi,\sin\chi\cos\theta,\sin\chi\sin\theta\cos\phi,\sin\chi\sin\theta\sin\phi)$, the induced area density is $\sin^2\chi\sin\theta\,d\chi\,d\theta\,d\phi$. Its integral over $0\le\chi,\theta\le\pi$, $0\le\phi\le2\pi$ is $(\pi/2)\cdot2\cdot2\pi=2\pi^2$. Hence the first period is $-\pi^2t$. [step 1.1, algebra]

3.1 Differentiating $\tfrac12[r\sqrt{r^2+t}-t\log(r+\sqrt{r^2+t})]$ with respect to $r$ gives $r^2/\sqrt{r^2+t}$. Its value at $r=0$ is $-(t/4)\log t$ on the chosen branch. Evaluating from $0$ to $R$ and multiplying by $2\pi i$ gives exactly $H_R(t)+(\pi i/2)t\log t$. Since $R+\sqrt{R^2+t}$ is nonzero near $0$ and the square root is holomorphic there, $H_R$ is holomorphic at $0$. Finally $(\pi i/2)t=(-\pi^2t)/(2\pi i)$, proving the coefficient assertion. [step 1.2, algebra] ∎

## Remarks

Giddings–Kachru–Polchinski state the same logarithmic coefficient for the conifold dual period in §3, equations (3.3), (3.8)–(3.9), but do not derive this local integral. The derivation above fixes the residue sign and local orientation explicitly.

