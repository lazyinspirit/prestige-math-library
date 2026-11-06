---
id: def-gts-u-1-bundle-gerbe-with-connection-and-curving
kind: definition
title: U(1)-bundle gerbe with connection and curving
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 4
deps:
  - def-gts-cheegersimons-differential-character
  - def-gts-smooth-deligne-cohomology-model
  - def-smooth-principal-g-bundle
  - def-associated-bundle-to-a-principal-bundle-and-representation
  - def-qftx-principal-connection-form
  - def-connection-on-a-smooth-vector-bundle
  - def-curvature-of-a-vector-bundle-connection
justified_by:
  - lem-gts-gerbe-curvature-descends
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  def-gts-smooth-deligne-cohomology-model: mathematical-premise
  def-smooth-principal-g-bundle: mathematical-premise
  def-associated-bundle-to-a-principal-bundle-and-representation: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  def-connection-on-a-smooth-vector-bundle: mathematical-premise
  def-curvature-of-a-vector-bundle-connection: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: M. K. Murray, Bundle Gerbes, arXiv:dg-ga/9407015v1
      url: https://arxiv.org/pdf/dg-ga/9407015v1
      locator: Sections 3, 6–9 and 11–12, PDF pp. 5–18.
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Sections 3.1–3.2, Deligne cocycles and curvature diagram, PDF pp. 32–41.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $M$ and $Y$ be finite-dimensional Hausdorff second-countable smooth manifolds and let $\pi:Y\to M$ be a surjective smooth submersion admitting local smooth sections. For $q\ge2$, define $Y^{[q]}=\{(y_1,\ldots,y_q)\in Y^q:\pi(y_1)=\cdots=\pi(y_q)\}$, and write $P_{ab}$ for the pullback of a line bundle $P\to Y^{[2]}$ to the pair $(y_a,y_b)$.

A Hermitian complex line bundle is a smooth rank-one complex vector bundle with a smoothly varying positive Hermitian metric; its unit-vector bundle is a smooth principal right $U(1)=\{z\in\mathbb C:|z|=1\}$-bundle as in [[def-smooth-principal-g-bundle]], and the associated line uses the relation $[pg,z]=[p,gz]$ for the standard scalar representation, as in [[def-associated-bundle-to-a-principal-bundle-and-representation]]. A unitary connection $\nabla$ on $P$ is a complex-linear connection satisfying the Leibniz rule and preserving this metric, in the sense of [[def-connection-on-a-smooth-vector-bundle]]. In a unit frame $e$ write $\nabla e=Ae$; metric compatibility gives $A\in i\Omega^1$. A unit vector is $p=e(x)u$ with $u\in U(1)$. Along a curve $t\mapsto e(x(t))u(t)$, its covariant derivative is $e(x(t))(\dot u+A(\dot x)u)$, so the horizontal condition is $u^{-1}\dot u+A(\dot x)=0$. Thus the principal connection form on the unit-vector bundle is $\omega=u^{-1}du+A$, with the convention of [[def-qftx-principal-connection-form]]. Equivalently, sections correspond to functions $f$ with $f(pg)=g^{-1}f(p)$, and their covariant derivative is represented by differentiating along the horizontal distribution. Its curvature $F_\nabla$ is the imaginary-valued two-form defined by [[def-curvature-of-a-vector-bundle-connection]]; in this unit frame, $F_\nabla=dA+A\wedge A=dA$ because $A$ is scalar-valued, so $F_\nabla/(2\pi i)$ is real-valued.

A $U(1)$-bundle gerbe with connection and curving consists of this $\pi$, a Hermitian line bundle $P\to Y^{[2]}$, a smooth unitary bundle isomorphism $m:P_{12}\otimes P_{23}\to P_{13}$ over $Y^{[3]}$, and a unitary connection $\nabla$ on $P$ preserved by $m$. The product is associative on $Y^{[4]}$ and has unit identifications $P_{y,y}\cong\mathbb C$ and inverse identifications $P_{y_2,y_1}\cong P_{y_1,y_2}^*$, all preserving the induced connections. A curving is a real smooth two-form $B\in\Omega^2(Y)$ satisfying
$$\operatorname{pr}_2^*B-\operatorname{pr}_1^*B=F_\nabla/(2\pi i)\quad\text{on }Y^{[2]}.$$
The descended closed three-form $H$ with $\pi^*H=dB$ is supplied by [[lem-gts-gerbe-curvature-descends]].

## Statement references

[[def-gts-cheegersimons-differential-character]]

[[def-gts-smooth-deligne-cohomology-model]]


## Definition

For each $(y_1,y_2,y_3,y_4)\in Y^{[4]}$, associativity means $m(m(p_{12}\otimes p_{23})\otimes p_{34})=m(p_{12}\otimes m(p_{23}\otimes p_{34}))$. Product compatibility means $m$ preserves the tensor-product connection $\nabla_{12}\otimes1+1\otimes\nabla_{23}$. The Dixmier–Douady cocycle is obtained from local sections $s_i:U_i\to Y$, unit sections $\sigma_{ij}$ of $(s_i,s_j)^*P$, and the functions $g_{ijk}:U_{ijk}\to U(1)$ determined by $m(\sigma_{ij}\otimes\sigma_{jk})=\sigma_{ik}g_{ijk}$.

The underlying topological gerbe is trivial when there is a smooth Hermitian line bundle $Q\to Y$ and a product-preserving unitary isomorphism $P\cong\operatorname{pr}_1^*Q^*\otimes\operatorname{pr}_2^*Q$. The product on the latter line bundle contracts the middle factors $Q_{y_2}\otimes Q_{y_2}^*$ by evaluation.

For two underlying gerbes $(P,Y,M)$ and $(P',Y',M)$, a common refinement consists of a surjective smooth submersion $\rho:Z\to M$ and surjective smooth submersions $f:Z\to Y$, $f':Z\to Y'$ over $M$, with $\pi f=\rho=\pi'f'$. One such refinement is $Z=Y\times_M Y'$ with its projections. Put $Z^{[q]}=Z\times_M\cdots\times_M Z$ ($q$ factors), let $f^{[q]}$ and $f'^{[q]}$ apply these maps in each factor, and put $L=(f^{[2]})^*P$, $L'=(f'^{[2]})^*P'$. The **quotient gerbe** on this refinement has line bundle $D=L^*\otimes L'\to Z^{[2]}$. For $\alpha\in L_{12}^*$ and $\beta\in L_{23}^*$ define $\alpha\star\beta=(\alpha\otimes\beta)\circ m_L^{-1}\in L_{13}^*$. Its product is
$$m_D((\alpha\otimes p')\otimes(\beta\otimes q'))=(\alpha\star\beta)\otimes m_{L'}(p'\otimes q').$$
Here $m_L,m_{L'}$ are the pulled-back products; the ordinary symmetry of tensor products of complex lines reorders the factors without a sign. This defines a smooth unitary associative product, with units and inverses induced from those of $L,L'$. The two gerbes are **stably equivalent** when on some common refinement there is a smooth Hermitian line bundle $Q\to Z$ and a product-preserving unitary isomorphism $D\cong\operatorname{pr}_1^*Q^*\otimes\operatorname{pr}_2^*Q$. Stable equivalence forgets connection and curving data. It is an equivalence relation: the identity refinement gives reflexivity, dualizing the trivializing line gives symmetry, and for transitivity the fibre product of two refinements over their shared intermediate gerbe submersion is a common refinement; tensoring the pulled-back trivializing line bundles contracts the shared middle gerbe line.

## Definition references

[[lem-gts-gerbe-curvature-descends]]

## Remarks

The two-form interpretation used above follows directly in rank one from the curvature operator. In a unit frame $e$, $\nabla_X(fe)=(Xf+A(X)f)e$. Expanding $R^\nabla(X,Y)(fe)$ cancels all derivatives of $f$ and gives $f\bigl(X(A(Y))-Y(A(X))-A([X,Y])\bigr)e=f\,dA(X,Y)e$. Under $e'=eg$, with $g$ circle-valued, $A'=A+g^{-1}dg$ and $d(g^{-1}dg)=0$, as follows locally from $g=e^{2\pi i t}$. Thus the local $dA$ glue to the global imaginary-valued curvature two-form used in the curving equation.

The diagram displays the required associativity. Every arrow $m_{ab,c}$ is the stated product map; the equality follows from the definition and is part of the gerbe data.

```tikzcd
P_{12}\otimes P_{23}\otimes P_{34} \arrow[r,"m_{12,3}"] \arrow[d,"1\otimes m_{23,4}"'] & P_{13}\otimes P_{34} \arrow[d,"m_{13,4}"] \\
P_{12}\otimes P_{24} \arrow[r,"m_{12,4}"'] & P_{14}
```

The differential-character convention is additive $U(1)=\mathbb R/\mathbb Z$. The exponential identifies a holonomy value $\theta\in\mathbb R/\mathbb Z$ with $e^{2\pi i\theta}$. Raw bundle-gerbe presentations depend on the submersion and are not themselves classified by $H^3(M;\mathbb Z)$.
