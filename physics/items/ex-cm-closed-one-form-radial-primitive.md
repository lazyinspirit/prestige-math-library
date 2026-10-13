---
id: ex-cm-closed-one-form-radial-primitive
kind: example
title: "A closed field on a star-shaped domain with its radial primitive computed"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [thm-poincare-lemma-for-star-shaped-domains, def-closed-and-exact-c1-vector-fields, def-star-shaped-open-subset-of-rn, def-total-derivative-in-euclidean-space, def-euclidean-inner-product, thm-newton-leibniz-with-interior-derivative, lem-derivative-of-a-power, thm-continuous-on-a-rectangle-is-riemann-integrable]
dependency_roles:
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-poincare-lemma-for-star-shaped-domains: mathematical-premise
  def-closed-and-exact-c1-vector-fields: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J.-B. Campesato, Poincare Lemma, section 2 (the radial primitive)"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
    - title: "J. M. Lee, Introduction to Smooth Manifolds (2003), Theorem 17.14 (the Poincare lemma), printed page 447"
      url: "https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf"
verification:
  precheck: pass
---

## Example

On $U=\mathbb R^2$, which is star-shaped about the origin ([[def-star-shaped-open-subset-of-rn]]), consider the $C^1$ field $F(x,y):=(2xy,\,x^2)$ ([[def-closed-and-exact-c1-vector-fields]]). Its potential

$$\phi(x,y):=x^2y$$

has gradient $\nabla\phi=(2xy,x^2)=F$, so $F$ is exact with potential $\phi$. The closed field condition $\partial_1F_0=\partial_0F_1$ holds as well, and the radial formula of the published Poincare lemma returns exactly $\phi$:

$$\int_0^1\bigl\langle F(t(x,y)),(x,y)\bigr\rangle_2\,dt=\int_0^1 3x^2y\,t^2\,dt=x^2y.$$

## Facts & Assumptions

**Given:** The open set $U=\mathbb R^2$ with centre $0$, the field $F(x,y)=(2xy,x^2)$ and the function $\phi(x,y)=x^2y$.

[L1] $\mathbb R^2$ is open and star-shaped with respect to $0$: for every $x\in\mathbb R^2$ and $0\le t\le1$ the point $tx$ lies in $\mathbb R^2$ ([[def-star-shaped-open-subset-of-rn]]).

[L2] A $C^1$ field $F=(F_0,F_1)$ on an open subset of $\mathbb R^2$ is closed when $\partial_1F_0=\partial_0F_1$, and exact when there is a $C^2$ function $\phi$ with $\nabla\phi=F$ ([[def-closed-and-exact-c1-vector-fields]]).

[L3] Poincare's lemma: on a star-shaped open domain $U$ with centre $a$, every closed $C^1$ field is exact, and a $C^2$ potential is $\phi(x)=\int_0^1\langle F(a+t(x-a)),x-a\rangle_2\,dt$ ([[thm-poincare-lemma-for-star-shaped-domains]]).

[L4] If $f$ is Riemann integrable and $G$ is continuous on $[0,1]$ and differentiable on $(0,1)$ with $G'=f$ there, then $\int_0^1f=G(1)-G(0)$; and the derivative of $t\mapsto t^3$ is $3t^2$ ([[thm-newton-leibniz-with-interior-derivative]], [[lem-derivative-of-a-power]]). A continuous real function on the nondegenerate rectangle $[0,1]$ is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

## Verification

**Proof technique:** direct; compute the partial derivatives and evaluate the radial integral.

1.1 The component functions $F_0(x,y)=2xy$ and $F_1(x,y)=x^2$ are $C^1$, with $\partial_1F_0=2x=\partial_0F_1$; hence $F$ is closed by [L2]. [given, L2, algebra]

2.1 The function $\phi(x,y)=x^2y$ is $C^2$ with $\partial_0\phi=2xy=F_0$ and $\partial_1\phi=x^2=F_1$, so $\nabla\phi=F$ and $F$ is exact with potential $\phi$ by [L2]. [step 1.1, L2, algebra]

3.1 For $a=0$ the radial formula of [L3] reads $\phi_{\rm rad}(x,y)=\int_0^1\langle F(tx,ty),(x,y)\rangle_2\,dt=\int_0^1\bigl(2t^2x^2y+t^2x^2y\bigr)dt=\int_0^13x^2yt^2\,dt$. The integrand is a continuous polynomial on $[0,1]$, hence Riemann integrable by [L4]. By [L4] applied to $G(t):=x^2yt^3$, whose derivative is $3x^2yt^2$, the integral equals $G(1)-G(0)=x^2y$, so $\phi_{\rm rad}=\phi$. [step 2.1, L1, L3, L4, algebra] ∎

## Remarks

- The example exercises the exactness side of Poincare's lemma on the whole plane. Exactness is not a consequence of closedness on domains with holes: the standard angular field on $\mathbb R^2\setminus\{0\}$ is closed but has no global primitive, a result established separately in the published counterexample `cex-the-closed-angular-form-on-the-punctured-plane-is-not-exact`, which is not used as a premise here.

- Both displays agree on the potential because the radial formula is an explicit construction, not an independent existence argument; the differentiation check of step 2.1 is what identifies $\phi$ as a potential.
