---
id: lem-gr-flrw-metric-and-comoving-data
kind: lemma
title: "The FLRW metric is smooth Lorentzian; the comoving field is unit
  timelike and cosmic time parametrizes comoving curves by proper time; the slices carry the scaled
  spatial metric"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  [
    def-gr-flrw-model-data,
    def-gr-flrw-spatial-model,
    def-gr-smooth-lorentzian-objects,
    def-gr-smooth-covariant-two-tensor-field,
    lem-gr-covariant-two-tensor-transformation-law,
    def-riemannian-metric-and-riemannian-manifold,
    lem-gr-constant-rescaling-preserves-levi-civita-and-curvature,
    lem-gr-constant-curvature-three-manifold-ricci,
    def-causal-classification-of-lorentz-vectors,
    def-lorentz-form-and-inertia,
    def-definiteness-inertia-and-signature-data-over-the-reals,
    def-gr-timelike-worldline-and-proper-time,
    lem-gr-proper-time-reparametrization-and-four-velocity,
    def-smooth-vector-field-as-a-tangent-bundle-section,
    thm-unique-maximal-integral-curve-through-each-point,
    def-integral-curve-of-a-vector-field,
    def-c-r-and-smooth-maps-between-smooth-manifolds,
    prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure,
    thm-ftc-second-part,
    def-derivative,
    def-interval,
    def-countable-choice,
    cor-zero-derivative-implies-constant
  ]
dependency_roles:
  def-gr-flrw-model-data: mathematical-premise
  def-gr-flrw-spatial-model: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  lem-gr-constant-rescaling-preserves-levi-civita-and-curvature: mathematical-premise
  lem-gr-constant-curvature-three-manifold-ricci: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-definiteness-inertia-and-signature-data-over-the-reals: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  thm-unique-maximal-integral-curve-through-each-point: mathematical-premise
  def-integral-curve-of-a-vector-field: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 8: the metric (8.1) with the comoving
        family of observers, printed pp. 218-219 (PDF pp. 225-226)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
        Michaelmas 2019), section 4.6.1: the FRW metric (4.63), its signature
        and the comoving frame with u^mu = (1,0,0,0), printed pp. 199-202 (PDF
        pp. 206-209)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /gr/gr.pdf"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019
        revision), sections 1.1.2 and 1.2.1: the Robertson-Walker metric, the
        comoving coordinates and the fluid rest frame, printed pp. 10-12 and
        24-26 (PDF pp. 16-18 and 30-32)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /cosmo/cosmo.pdf"
verification:
  precheck: pass
---

## Statement

Let $(I,\Sigma,\gamma,k,a)$ be an FLRW model datum with conversion constant
$c>0$, with spacetime $M=I\times\Sigma$, metric $g=-c^2dt^2+a(t)^2\gamma$ and
comoving congruence $n=c^{-1}\partial_t$
([[def-gr-flrw-model-data]], [[def-gr-flrw-spatial-model]]). Then:

**(a)** The field $g$ is a smooth Lorentzian metric of signature $(-,+,+,+)$
on $M$, and $N:=\partial_t$ satisfies $g(N,N)=-c^2<0$ at every point; hence
$(M,g,N)$ is a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]],
[[def-lorentz-form-and-inertia]]).

**(b)** The comoving congruence $n=c^{-1}\partial_t$ is a smooth
future-directed unit timelike vector field on $M$: $g(n,n)=-1$ and
$g(n,N)=-c<0$ at every point
([[def-causal-classification-of-lorentz-vectors]]). Its maximal integral
curve through $(t_0,x)$ is $\eta_{t_0,x}(s)=(t_0+s/c,x)$ on
$c(I-t_0)=\{c(t-t_0):t\in I\}$. Reparametrizing by cosmic time gives the
**comoving curve** $\gamma_x(t):=(t,x)$ on $I$; each is a future timelike
worldline whose parameter $t$ is its proper time up to an additive constant:
for $t_0,t_1\in I$ with $t_0<t_1$, the proper-time increment between
$\gamma_x(t_0)$ and $\gamma_x(t_1)$ is $t_1-t_0$
([[def-gr-timelike-worldline-and-proper-time]],
[[lem-gr-proper-time-reparametrization-and-four-velocity]]). The physical
four-velocity of a comoving observer is $U=\partial_t=cn$, with $g(U,U)=-c^2$.

**(c)** The congruence $n$ is $g$-orthogonal to the spatial slices: for every
$t_0\in I$, the slice inclusion $\iota_{t_0}:\Sigma\to M$, $x\mapsto(t_0,x)$,
is a smooth embedding, the pullback $\iota_{t_0}^*g=a(t_0)^2\gamma$ is a
Riemannian metric on $\Sigma$, and $g(n,\iota_{t_0*}v)=0$ for every
$v\in T_x\Sigma$. Moreover the slice metric $\gamma_{t_0}:=a(t_0)^2\gamma$
has Ricci curvature $\operatorname{Ric}(\gamma_{t_0})=2k\gamma$ and constant
sectional curvature $k/a(t_0)^2$
([[lem-gr-constant-rescaling-preserves-levi-civita-and-curvature]],
[[lem-gr-constant-curvature-three-manifold-ricci]]).

## Facts & Assumptions

**Given:** An FLRW model datum $(I,\Sigma,\gamma,k,a)$ with $c>0$, the product $M=I\times\Sigma$, the field $g$ of [[def-gr-flrw-model-data]] with components $g_{00}=-c^2$, $g_{0i}=0$, $g_{ij}=a(t)^2\gamma_{ij}$ in product charts, $N=\partial_t$ and $n=c^{-1}\partial_t$.

[L1] Component functions of a smooth symmetric $(0,2)$-tensor field in the charts of one smooth atlas of $M$ define a smooth $(0,2)$-tensor field on $M$, and components in different charts are related by the covariant transformation law ([[def-gr-smooth-covariant-two-tensor-field]], [[lem-gr-covariant-two-tensor-transformation-law]]).

[L2] A symmetric bilinear form on a four-dimensional real vector space is a Lorentz form when it is nondegenerate and has inertia $(3,1,0)$ ([[def-lorentz-form-and-inertia]]). Inertia is computed from the numbers of positive, negative and zero diagonal entries in any diagonalizing basis and is independent of that basis ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[L3] A time orientation of $(M,g)$ is a smooth vector field $N$ with $g(N,N)<0$ everywhere; a nonzero causal vector $v$ is future-directed when $g(v,N)<0$ ([[def-gr-smooth-lorentzian-objects]], [[def-causal-classification-of-lorentz-vectors]]).

[L4] A $C^1$ curve $\gamma:I\to M$ is a future timelike worldline when $g(\gamma',\gamma')<0$ and $g(\gamma',N)<0$; its proper-time increment is $\tau(b)-\tau(a)=\frac1c\int_a^bh$ with $h=\sqrt{-g(\gamma',\gamma')}$ ([[def-gr-timelike-worldline-and-proper-time]]), the value being independent of the admissible partition ([[lem-gr-proper-time-reparametrization-and-four-velocity]] clause 1). If $h\equiv c$ on $[a,b]$, then $\frac1c\int_a^b h=b-a$ ([[thm-ftc-second-part]]).

[L5] The maximal integral curves of a smooth vector field through the points of its domain exist and are unique ([[thm-unique-maximal-integral-curve-through-each-point]], [[def-integral-curve-of-a-vector-field]]); a smooth vector field is a smooth section of the tangent bundle ([[def-smooth-vector-field-as-a-tangent-bundle-section]]). A differentiable real function on an interval with zero derivative is constant ([[cor-zero-derivative-implies-constant]]), so solving $dt/ds=c^{-1}$ and zero spatial velocity gives the displayed integral curves in product charts.

[L6] Since $I$ is an open interval, it has the restricted smooth structure from $\mathbb R$ ([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]), and the FLRW product charts are smooth. For fixed $t_0\in I$, the slice map $\iota_{t_0}(x)=(t_0,x)$ has coordinate form $u\mapsto(t_0,u)$, so it is a smooth embedding and $D\iota_{t_0}(\partial_i)=\partial_i$. Define its pullback by $(\iota_{t_0}^*g)_x(v,w):=g_{(t_0,x)}(D\iota_{t_0}v,D\iota_{t_0}w)$; its components are therefore $(\iota_{t_0}^*g)_{ij}=g_{ij}(t_0,x)=a(t_0)^2\gamma_{ij}(x)$. This is a smooth symmetric positive-definite form, hence a Riemannian metric, because $a(t_0)>0$ and $\gamma$ is Riemannian ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-riemannian-metric-and-riemannian-manifold]]).

[L7] The Ricci tensor of a metric is unchanged by a constant rescaling of that metric, and under a rescaling $\tilde\lambda\gamma$ of a metric with constant sectional curvature $K$ the sectional curvature is $\tilde\lambda^{-1}K$ ([[lem-gr-constant-rescaling-preserves-levi-civita-and-curvature]]); in dimension three, $\operatorname{Ric}=2k\gamma$ is equivalent to constant sectional curvature $k$ ([[lem-gr-constant-curvature-three-manifold-ricci]], [[def-gr-flrw-spatial-model]]).

## Proof

**Proof technique:** direct; verify the pointwise algebraic conditions in product charts, then identify the integral curves and the slice metrics.

1.1 (Smoothness and Lorentzian signature.) In a product chart $(x^0,x^1,x^2,x^3)$ with $x^0=t$ the components of $g$ are the smooth functions displayed in [[def-gr-flrw-model-data]]: $g_{00}=-c^2$, $g_{0i}=0$, $g_{ij}=a(t)^2\gamma_{ij}(x)$. Product charts cover $M$ and their transition maps are products of the transition maps of $I$ and $\Sigma$, so by the transformation law [L1] the family $g$ is a smooth symmetric $(0,2)$-tensor field on $M$. At a point, the matrix of $g_p$ in the coordinate basis is block diagonal, $\operatorname{diag}(-c^2,\,a(t)^2(\gamma_{ij}(x))_{i,j=1}^{3})$. The $1\times1$ block has the single negative entry $-c^2$, and the $3\times3$ block is a positive multiple of the positive-definite matrix of $\gamma_x$; hence the diagonal entries of a diagonalization are one negative and three positive numbers, and $g_p$ is nondegenerate with inertia $(3,1,0)$. By [L2] this makes $g_p$ a Lorentz form at every point; by [[def-gr-smooth-lorentzian-objects]] the smooth field $g$ with these pointwise Lorentz forms is a Lorentzian metric of signature $(-,+,+,+)$ on $M$. Since $g(N,N)=g_{00}=-c^2<0$ at every point, [L3] makes $N=\partial_t$ a time orientation and $(M,g,N)$ a time-oriented smooth Lorentzian four-manifold. [L1, L2, L3, algebra]

2.1 (The comoving congruence and the comoving curves.) By step 1.1 the manifold $(M,g,N)$ is time-oriented smooth Lorentzian, so the causal vocabulary of [L3] applies. The field $n=c^{-1}\partial_t$ is a smooth vector field; its metric pairing is $g(n,n)=c^{-2}g(\partial_t,\partial_t)=c^{-2}(-c^2)=-1$, and $g(n,N)=-c<0$. Hence $n$ is a future-directed unit timelike vector field, i.e. a smooth future-directed unit timelike congruence. For fixed $x\in\Sigma$ the smooth curve $\gamma_x:I\to M$, $\gamma_x(t)=(t,x)$ has tangent $\partial_t=cn$; its image is $I\times\{x\}$ and its velocity satisfies $g(\gamma_x',\gamma_x')=-c^2<0$ and $g(\gamma_x',N)=-c^2<0$, so it is a future timelike worldline. For $(t_0,x)\in M$, the curve $\eta_{t_0,x}(s)=(t_0+s/c,x)$ on $c(I-t_0)$ has derivative $c^{-1}\partial_t=n$, so it is the integral curve of $n$ through that point by [L5]. Any extension would still satisfy $dt/ds=c^{-1}$ and constant spatial coordinates, hence would leave $I\times\Sigma$ beyond this interval; its domain is therefore maximal. The curve $\gamma_x$ is the cosmic-time reparametrization $s=c(t-t_0)$ of this same observer trajectory, with velocity $cn$. [L3, L5, algebra]

3.1 (Cosmic time is proper time.) For the comoving curve $\gamma_x$ of step 2.1, the proper-time density of [L4] is $h(t)=\sqrt{-g(\gamma_x'(t),\gamma_x'(t))}=\sqrt{c^2}=c$, a constant. Hence for $t_0<t_1$ in $I$, the proper-time increment is $c^{-1}\int_{t_0}^{t_1}c\,dt=t_1-t_0$ by [L4]; in particular the parameter $t$ is proper time along $\gamma_x$ up to the choice of zero. The physical four-velocity, defined as the derivative of the worldline with respect to this proper time ([[lem-gr-proper-time-reparametrization-and-four-velocity]]), is therefore $U=d\gamma_x/dt=\partial_t=cn$, with $g(U,U)=-c^2$. [L4, step 2.1, algebra]

3.2 (Slices, orthogonality and the scaled spatial curvature.) Fix $t_0\in I$. The map $\iota_{t_0}:\Sigma\to M$, $\iota_{t_0}(x)=(t_0,x)$, is a smooth embedding onto the embedded submanifold $\{t_0\}\times\Sigma$. In a product chart the differential of $\iota_{t_0}$ sends $\partial_i|_x$ to $\partial_i|_{(t_0,x)}$, so the pullback components are $(\iota_{t_0}^*g)_{ij}=g_{ij}(t_0,x)=a(t_0)^2\gamma_{ij}(x)$: a smooth, symmetric, positive definite field, hence a Riemannian metric $\gamma_{t_0}=a(t_0)^2\gamma$ by [L6]. Moreover $g(n,\partial_i)=0$ for $i=1,2,3$ because $g_{0i}=0$ and $n$ has no spatial component: the congruence is orthogonal to every slice. Finally, by [L7] the constant rescaling gives $\operatorname{Ric}(\gamma_{t_0})=\operatorname{Ric}(\gamma)=2k\gamma=\frac{2k}{a(t_0)^2}\,\gamma_{t_0}$, so $\gamma_{t_0}$ satisfies the Ricci form with parameter $k/a(t_0)^2$; the equivalence [L7] turns this into constant sectional curvature $k/a(t_0)^2$. [L6, L7, step 1.1, step 2.1, algebra]

4.1 (Conclusion.) Steps 1.1 and 2.1 establish clauses (a) and (b), step 3.1 establishes the proper-time and four-velocity statements of (b), and step 3.2 establishes clause (c). The proofs used only the displayed component functions, the pointwise algebra of symmetric bilinear forms and the cited general facts; no field equation and no choice beyond the inherited $\mathrm{AC}_\omega$ of the suppliers was used. [step 1.1, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **What is not asserted.** The lemma asserts neither completeness of the comoving observers beyond their computed domains (the maximal $n$-integral parameter domain is $c(I-t_0)$; their cosmic/proper-time domain is $I$), nor any global product structure of the spacetime beyond the product structure that defines the datum, nor any relation between the time parameter and a physical clock; the physical clock reading is supplied by the framework's clock postulate, not by this lemma.

- **Sign of the curvature reading.** The slice curvature $k/a(t_0)^2$ is a real number whose sign is the sign of $k$. The Ricci form displayed in the final proof step uses the equivalence of [[lem-gr-constant-curvature-three-manifold-ricci]] for the real parameter $k/a(t_0)^2$, which is not restricted to the three signs $\{-1,0,1\}$.
