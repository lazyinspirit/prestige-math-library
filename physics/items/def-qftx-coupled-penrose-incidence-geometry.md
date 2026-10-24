---
id: def-qftx-coupled-penrose-incidence-geometry
kind: definition
title: Positive incidence geometry for the coupled Penrose transform
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere
dependency_level: 0
deps:
  - def-complex-manifolds-and-holomorphic-vector-bundles
dependency_roles:
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_base: "ZF"
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§1, printed pp. 43–46: quaternionic projective twistor fibration and incidence coordinates."
    - title: "R. O. Wells, The Conformally Invariant Laplacian and the Instanton Vanishing Theorem"
      url: "https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html"
      locator: "§2, printed pp. 484–488: the quaternionic real form and the double fibration by twistor lines."
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: "https://arxiv.org/pdf/2205.08639"
      locator: "§§3–4, printed pp. 4–7: quaternionic real lines and Ward conventions."
verification:
  precheck: n/a
---

## Definition

Let $S^4={X\in\mathbb R^5:|X|=1}$ have its unit round metric and the orientation which, on the stereographic chart $S^4\setminus\{\infty\}\cong\mathbb R^4$, is $dx_0\wedge dx_1\wedge dx_2\wedge dx_3$. Put $z_1=x_0+ix_1$, $z_2=x_2+ix_3$, and $r^2=|z_1|^2+|z_2|^2$; in these coordinates the metric is $g=4(1+r^2)^{-2}\sum_{\mu=0}^3dx_\mu^2$. Identify $\mathbb H^2$ with $\mathbb C^4$ using a right quaternionic structure $j$ with $j^2=-1$, put $Z=\mathbb CP^3=\mathbb P_{\mathbb C}(\mathbb H^2)$, and define $\pi:Z\to\mathbb HP^1=S^4$ by $\pi(\ell)=\ell+j\ell$ for a complex line $\ell\subset\mathbb H^2$. Its fibres are projective lines $L_x\cong\mathbb CP^1$. In homogeneous coordinates $[\lambda_1:\lambda_2:\mu_1:\mu_2]$, the fibre over finite $z=(z_1,z_2)$ is the line

$$\mu_1=z_1\lambda_1-\bar z_2\lambda_2,\qquad \mu_2=z_2\lambda_1+\bar z_1\lambda_2,$$

and the fibre over infinity is $L_\infty=\{\lambda_1=\lambda_2=0\}$. Give $Z$ the Fubini–Study metric induced by the standard Hermitian metric on $\mathbb C^4$ and give $\mathcal O_Z(-2)$ its induced Hermitian metric. On the incidence chart $\lambda_1\ne0$, set $t=\lambda_2/\lambda_1$, $\mu_1/\lambda_1=z_1-\bar z_2t$, and $\mu_2/\lambda_1=z_2+\bar z_1t$. The horizontal complex directions of type $(0,1)$ are spanned by

$$H_1=\partial_{\bar z_1}-t\partial_{z_2},\qquad H_2=\partial_{\bar z_2}+t\partial_{z_1};$$

They annihilate the displayed holomorphic coordinates. Together with $\partial_{\bar t}$ they form a direct local frame of $T^{0,1}Z$. Here $H_i$ are the constant-$t$ chart lifts; their projected complex alpha-plane is intrinsic, but this chart splitting is not asserted to be the global metric splitting. Globally let $V^{0,1}=\ker(d\pi)\cap T^{0,1}Z$, and let $H^{0,1}$ be its Fubini–Study orthogonal complement. Its lifts project to the same alpha-planes and may differ from the displayed $H_i$ by vertical components. All global horizontal/vertical form decompositions use this orthogonal splitting; local computations may use the displayed constant-$t$ splitting after retaining the resulting frame and normalization factors. The second projective chart supplies the same alpha-plane at $t=\infty$. The line bundle $\mathcal O_Z(-1)$ is the tautological holomorphic line bundle and $\mathcal O_Z(-2)=\mathcal O_Z(-1)^{\otimes2}$.

## Definition references

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[Rawnsley, §1, pp. 43–46](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

[Wells, §2, pp. 484–488](https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html)

[Donaldson, §§3–4, pp. 4–7](https://arxiv.org/pdf/2205.08639)

## Remarks

The arrows record only the inclusion of a fibre and the restriction of its projection; they fix the domain and codomain of the twistor fibration used above.

```tikzcd
L_x \arrow[r,hook] \arrow[d,"\\pi|_{L_x}"'] & Z \arrow[d,"\\pi"] \\
\{x\} \arrow[r,hook] & S^4
```
