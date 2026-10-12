---
id: lem-gr-geodesic-extension-from-compact-length
kind: lemma
title: "Affine extension of geodesics confined to a compact set with finite auxiliary length, and the logarithmic speed bound"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-gr-local-geodesics-and-exponential-map, prop-coordinate-geodesic-equation, def-gr-smooth-covariant-two-tensor-field, lem-gr-positive-definite-symmetric-matrix-bounds, cor-uniform-picard-lindelof-for-nearby-initial-values, thm-smooth-dependence-of-ode-solutions-on-parameters, def-compact-space, def-continuity-real]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  cor-uniform-picard-lindelof-for-nearby-initial-values: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  def-compact-space: mathematical-premise
  def-continuity-real: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Lemma 3.9, printed pp. 17-18: continuation of the corresponding boundary null geodesic (the detailed speed estimate and ODE continuation are supplied locally)"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: maximal geodesics and the geodesic equation in charts, Theorems 2.4 and 2.6 printed pp. 26-27"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and let geodesics
be the maximal geodesics with their affine parametrizations supplied by
[[thm-gr-local-geodesics-and-exponential-map]] clause (a). Let $h$ be a smooth
positive definite metric on $M$ ([[def-gr-smooth-covariant-two-tensor-field]]).

**(a)** For every compact $K\subseteq M$ there is a constant $c(K)\in[0,\infty)$
with the following property. Let $\gamma:J\to M$ be a nonconstant geodesic,
let $q>0$ be the $h$-speed of its affine velocity and let $\ell$ denote the
$h$-arclength parameter of $\gamma$, so that $q(\ell):=|d\gamma/d\lambda|_h$
is the $h$-norm of the affine velocity expressed in the parameter $\ell$. At
every parameter value with $\gamma(\ell)\in K$ one has
$$\left|\frac{d\log q}{d\ell}\right|\le c(K).$$

**(b)** Assume in addition that $(M,d_h)$ is complete and that every closed
$d_h$-bounded subset of $M$ is compact. Let $\gamma:(\alpha,\beta)\to M$ be a
maximal nonconstant geodesic with $\beta<+\infty$, let $\lambda_0\in(\alpha,\beta)$,
and let $K\subseteq M$ be compact with $\gamma([\lambda_0,\beta))\subseteq K$.
Suppose that the $h$-arclength of the tail is finite:
$$\int_{\lambda_0}^{\beta}\bigl|\gamma'(\lambda)\bigr|_h\,d\lambda<\infty .$$
Then the geodesic extends beyond $\beta$, contradicting the maximality of
$(\alpha,\beta)$; consequently no maximal geodesic can have a finite affine
endpoint while its tail remains in a compact set and has finite
$h$-arclength.

## Facts & Assumptions

**Given:** the Lorentzian manifold with its metric-selected connection, the positive definite metric $h$, and, in clause (b), a maximal geodesic with a compact tail.

[L1] Geodesic ODE in charts: in every chart a smooth curve is a geodesic exactly where it satisfies $\ddot x^k+\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0$, with smooth Christoffel symbols; a maximal geodesic through a point with given nonzero initial velocity is unique, and solutions depend continuously on initial data with a uniform existence time on compact sets of initial data ([[prop-coordinate-geodesic-equation]], [[thm-gr-local-geodesics-and-exponential-map]] clause (a), [[cor-uniform-picard-lindelof-for-nearby-initial-values]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[L2] Bounded coefficients on compact sets: for every compact $K\subseteq M$ there are $0<m\le M$ with $m|w|_{\mathrm e}^2\le h_p(w,w)\le M|w|_{\mathrm e}^2$ for all $p\in K\cap U$ in a chart $(U,x)$ and all $w\in\mathbb R^4$, uniformly over a finite chart cover of $K$, and the first derivatives of the components $h_{ij}$ in these charts are bounded ($h$ is smooth); hence $\nabla h$, contracted with three $h$-unit vectors, is bounded on $K$ ([[lem-gr-positive-definite-symmetric-matrix-bounds]] clauses (a) and (c), [[def-gr-smooth-covariant-two-tensor-field]], [[def-compact-space]], [[def-continuity-real]]).

No choice principle is used in this item.

## Proof

**Proof technique:** direct.

1.1 (The rescaled velocity.) A nonconstant geodesic has no zero velocity at any parameter: a zero-velocity datum launches the constant solution, and ODE uniqueness would make the entire maximal solution constant. Therefore its $h$-speed is positive.  Let $\gamma:J\to M$ be a nonconstant geodesic with affine parameter $\lambda$ and let $\ell$ be $h$-arclength, so $d\ell/d\lambda=q>0$. Write $v:=d\gamma/d\ell$ for the $h$-unit velocity of $\gamma$ and $u:=d\gamma/d\lambda=q\,v$ for the affine velocity. Since $\gamma$ is a geodesic, $\nabla_uu=0$, hence $\nabla_vv=\sigma v$ for the function $\sigma:=-d\log q/d\ell$: indeed $\nabla_{qv}(qv)=q^2\nabla_vv+q\,v(q)\,v$, so $\nabla_vv=-\frac{v(q)}{q}v$ and $v(q)=dq/d\ell$ because $q$ is a function of $\ell$ along the curve. [given, L1, algebra]

2.1 (Derivative of the $h$-speed.) Covariant differentiation along the reparametrized curve gives $\nabla_vu=q^{-1}\nabla_uu=0$; equivalently $\nabla_v(qv)=q'v+q\nabla_vv=0$ by step 1.1. Thus the tensor product rule gives $\frac{d}{d\ell}h(u,u)=(\nabla_vh)(u,u)+2h(\nabla_vu,u)=(\nabla_vh)(u,u)$. Since $h(u,u)=q^2$, one obtains $2q\,q'=(\nabla_vh)(u,u)$. [step 1.1, algebra]

3.1 (The bound.) Let $K$ be compact. By [L2] there is $\kappa(K)<\infty$ with $|(\nabla_Z h)(X,Y)|\le\kappa(K)|X|_h|Y|_h|Z|_h$ for all points of $K$ and all tangent vectors there. On the parameters with $\gamma(\ell)\in K$: $|(\nabla_v h)(u,u)|\le\kappa(K)|u|_h^2|v|_h=\kappa(K)q^2$, so by step 2.1, $2q|q'|\le\kappa(K)q^2$, that is, $|d\log q/d\ell|\le\kappa(K)/2$ there. This proves (a) with $c(K):=\kappa(K)/2$. [step 2.1, L2, algebra]

4.1 (Bounds on the affine data up to the endpoint.) In the situation of clause (b), let $L:=\int_{\lambda_0}^{\beta}|\gamma'|_h\,d\lambda<\infty$ be the finite tail length and put $\ell(\lambda):=\int_{\lambda_0}^{\lambda}|\gamma'|_h\,dt$, a strictly increasing smooth map $[\lambda_0,\beta)\to[0,L)$ with smooth inverse, so $\ell\to L$ as $\lambda\to\beta$. By clause (a) applied on the tail, with $\gamma([\lambda_0,\beta))\subseteq K$, one has $q(\ell)\le q(0)e^{c(K)L}=:M$ and $q(\ell)\ge q(0)e^{-c(K)L}=:m>0$ for all $\ell\in[0,L)$. [given, step 3.1, algebra]

5.1 (A compact set of bounded affine data.) The set $B:=\{(x,w)\in TM:x\in K,\ |w|_h\le M\}$ is compact. Indeed take finitely many compact chart pieces covering $K$, each contained in a tangent-bundle trivialization; such pieces are obtained by shrinking coordinate balls and taking a finite subcover of $K$. On each piece [L2] bounds the Euclidean velocity coordinates by $M/\sqrt{m_j}$, and the condition $h_x(w,w)\le M^2$ cuts out a closed subset of the product of that compact piece and a closed Euclidean ball. Each resulting set is compact, and their finite union is $B$. Step 4.1 puts every affine datum $(\gamma(\lambda),\gamma'(\lambda))$ on the tail in $B$. No sequence or subsequence of velocities is selected. [step 4.1, L2, algebra, construct]

6.1 (Uniform ODE continuation.) Apply [L1] to the smooth first-order geodesic vector field in tangent-bundle charts. At every datum in $B$ it supplies a neighborhood of initial data and a positive common existence time in that chart. Take a finite subcover of $B$ by all such neighborhoods and let $\delta>0$ be smaller than their finitely many times. Every datum in $B$ therefore launches a geodesic for at least time $\delta$. Fix $\lambda_*\in(\lambda_0,\beta)$ with $\beta-\lambda_*<\delta/2$. The solution launched from $(\gamma(\lambda_*),\gamma'(\lambda_*))$ exists past $\beta$ and agrees with $\gamma$ on their overlap by uniqueness. Gluing it to the earlier part extends the affine geodesic beyond $\beta$, contradicting maximality and proving (b). This uses only a finite subcover and finite minima, so no choice principle is needed. [step 5.1, L1, contradiction] ∎

## Remarks

Clause (a) is the statement that the $h$-speed of an affine velocity changes at most exponentially in $h$-arclength on compact regions; clause (b) is the affine continuation used in [[lem-gr-boundary-null-geodesic-segment]] to rule out an implicit affine-completeness assumption for boundary geodesics. The hypothesis of clause (b) is met in applications for the auxiliary metric of [[thm-gr-auxiliary-complete-riemannian-metric]], and the finite-length hypothesis is automatic when the tail is confined to a compact set of a strongly causal spacetime, by [[lem-gr-strong-causality-compact-length-bound]]; that composition is used in [[lem-gr-boundary-null-geodesic-segment]].
