---
id: lem-gr-dominating-cone-bounds
kind: lemma
title: "Causal cone domination in adapted charts and Lipschitz-graph bounds for causal curves"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [cor-gr-adapted-chart-existence, thm-flow-box-theorem, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-gr-causal-conditions-and-global-hyperbolicity, lem-gr-future-causal-classification-by-a-timelike-field, lem-gr-observer-pairing-with-future-causal-vectors, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, def-lorentz-orthogonality-and-orthogonal-complement, thm-gram-schmidt-orthonormalisation, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-absolutely-continuous-functions-have-integrable-derivatives, thm-continuous-implies-integrable, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval, def-countable-choice, def-dependent-choice, lem-gr-observer-projection-decomposition]
dependency_roles:
  cor-gr-adapted-chart-existence: mathematical-premise
  thm-flow-box-theorem: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  thm-gram-schmidt-orthonormalisation: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the local time coordinate and Lipschitz parametrization of causal curves (Lemma 1.33, Theorem 2.12 and Remark 2.13 printed pp. 29-33; Theorem 2.87 proof printed pp. 60-61)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. W. Hawking and G. F. R. Ellis, The Large Scale Structure of Space-Time, Cambridge University Press (1973): the local Lipschitz behaviour of causal curves, section 6.2"
      url: "https://doi.org/10.1017/CBO9780511524646"
verification:
  precheck: pending
---


## Statement

For the absolutely continuous curve conclusion (c), assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]) as required by the cited causal-curve calculus and fundamental theorem. The other clauses use the given smooth observer structure, pointwise adapted-chart existence and finite compactness arguments, without these additional curve-calculus premises. Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold ([[def-gr-smooth-lorentzian-objects]]), and put $n=N/\sqrt{-g(N,N)}$. Write $\eta=\operatorname{diag}(-1,1,1,1)$. In a chart $(U,x)$ put $v^a=dx^a(v)$, $v_s=(v^1,v^2,v^3)$ and $|v|_{\mathrm e}=(\sum_{a=0}^3(v^a)^2)^{1/2}$.

**(a) Adapted orthonormal charts.** For every $p\in M$ there are a chart $(U,x)$, $x(p)=0$, a radius $r>0$ with $U=x^{-1}(B_r)$, and $K\ge1$, such that on all of $U$
$$n=\partial_{x^0},\qquad g_{00}\equiv-1,\qquad g_{ab}(p)=\eta_{ab}.$$

**(b) Cone domination.** The chart and radius in (a) can be chosen so every nonzero future causal vector at any point of $U$ satisfies
$$|v_s|\le K v^0,\qquad |v^i|\le K v^0\quad(i=1,2,3),\qquad v^0\ge K^{-1}|v|_{\mathrm e}>0.$$

**(c) Curve form.** Every future causal curve $\gamma:I\to U$ of [[def-gr-causal-curves-and-reachability]] has strictly increasing time coordinate, and for all $s<t$ in $I$
$$x^0(\gamma(s))<x^0(\gamma(t)),\qquad |x_s(\gamma(t))-x_s(\gamma(s))|\le K\left(x^0(\gamma(t))-x^0(\gamma(s))\right).$$
Consequently every spatial component satisfies the same bound, and the curve image is the graph of a $K$-Lipschitz function into Euclidean $\mathbb R^3$ over the interval $x^0(\gamma(I))$.

**(d) Flat minorant cone.** The same chart can be chosen so the constant-coordinate metric $\eta_{16}=-(dx^0)^2+16\sum_i(dx^i)^2$ has every nonzero $\eta_{16}$-causal vector $g$-timelike throughout $U$. If $q,q'\in U$ and $\eta_{16}(x(q')-x(q),x(q')-x(q))<0$, then $q\ll q'$ if $x^0(q')>x^0(q)$, and $q'\ll q$ otherwise.

**(e) General temporal charts: exact compact uniformity.** For any chart $(U',z)$ define its temporal locus
$$P=\{q\in U':\nabla z^0(q)\text{ is past timelike}\}.$$
For every compact set $K_0\subset P$ there is $L\ge1$ such that all nonzero future causal vectors based in $K_0$, with coordinate components and Euclidean norm taken in $z$, satisfy
$$|v_s|\le L v^0,\qquad |v^i|\le L v^0,\qquad v^0\ge L^{-1}|v|_{\mathrm e}>0.$$
In particular these bounds hold throughout any relatively compact $U_0\Subset U'$ whose closure is contained in $P$, equivalently whose time gradient is past timelike on its entire closure. Timelikeness merely on $U_0$ gives local bounds at each point and uniform bounds on each compact subset of $U_0$; it does not alone give a uniform bound on all of $U_0$.

No additional choice is used to select the pointwise linear bases or compact cone constants. Countable and Dependent Choice are explicitly required only for the general absolutely continuous curve clause (c), through its actual calculus suppliers.

## Facts & Assumptions

**Given:** A smooth time-oriented Lorentzian manifold, $n=N/\sqrt{-g(N,N)}$, a point $p$, and for (e) a chart and compact subset of its temporal locus. For (c), Countable Choice, Dependent Choice and the specified locally absolutely continuous causal curve are also given.

[L1] The normalized field $n$ is smooth and unit future timelike. Its adapted chart exists with $n=\partial_{y^0}$ and spatial coordinates constant along its integral curves ([[def-gr-observer-and-rest-space]], [[def-gr-observer-congruence-and-adapted-charts]], [[cor-gr-adapted-chart-existence]], [[thm-flow-box-theorem]]).

[L2] For unit timelike $n_p$, the rest-space projection $T(w)=w+g_p(w,n_p)n_p$ has kernel $\mathbb Rn_p$, image $n_p^\perp$, and is the identity on $n_p^\perp$. The rest space is positive definite and finite Gram-Schmidt provides an orthonormal basis ([[lem-gr-observer-projection-decomposition]] clauses 1-2 and its positivity proof, [[def-lorentz-orthogonality-and-orthogonal-complement]], [[thm-gram-schmidt-orthonormalisation]]).

[L3] The nonzero future causal vectors satisfy $g(v,v)\le0$ and $g(v,n)<0$. Their normalized cone is closed: a causal nonzero limit cannot be orthogonal to a timelike vector. Future unit timelike $m$ pairs strictly negatively with nonzero future causal $v$ ([[lem-gr-future-causal-classification-by-a-timelike-field]], [[lem-gr-observer-pairing-with-future-causal-vectors]], [[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]]).

[L4] Metric components and inverse components in a smooth chart are smooth and continuous; past timelikeness of a gradient is an open condition ([[def-gr-smooth-covariant-two-tensor-field]], [[def-gr-smooth-lorentzian-objects]], [[def-continuity-real]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L5] Coordinate functions of the stated causal curves are locally absolutely continuous, with derivatives equal to the corresponding velocity components almost everywhere. With Countable and Dependent Choice the fundamental theorem of calculus identifies increments with integrals of derivatives ([[lem-gr-causal-curve-calculus]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]]).

## Proof

1.1 (Projection and full adapted shear.) Choose [L1]'s adapted chart centered at $p$ and write $e_a=\partial_{y^a}|_p$, with $e_0=n_p$. The subspace $E=\operatorname{span}(e_1,e_2,e_3)$ complements $\mathbb Rn_p$, so [L2]'s projection restricts to an isomorphism from $E$ onto $n_p^\perp$. In particular $T(n_p)=0$, not $n_p$. Put $w_k=e_k+g_p(e_k,n_p)n_p$. Finite Gram-Schmidt yields an orthonormal basis $v_i=\sum_k C^k{}_i w_k$ of the rest space with $C$ invertible. Define new coordinates by the inverse linear transformation $y^k=\sum_i C^k{}_i x^i$ and $y^0=x^0+\sum_i a_i x^i$, where $a_i=\sum_k C^k{}_i g_p(e_k,n_p)$. Its block-triangular matrix is invertible. The chain rule gives $\partial_{x^0}=\partial_{y^0}=n$ throughout the chart and $\partial_{x^i}|_p=a_i n_p+\sum_k C^k{}_i e_k=v_i$. Hence $g_{00}\equiv-1$, $g_{0i}(p)=0$ and $g_{ij}(p)=\delta_{ij}$. A coordinate ball centered at zero inside this chart gives the adapted properties of (a). [given, L1, L2, algebra, construct]

1.2 (Positive time component on a compact temporal locus.) Let $K_0\subset P$ be compact and nonempty. In the $z$ coordinate trivialization define $\mathcal Z=\{(q,v):q\in K_0,\ |v|_{\mathrm e}=1,\ g_q(v,v)\le0,\ g_q(v,n_q)\le0\}$. It is closed in the compact product $K_0\times S^3$ by continuity. At each such vector the last inequality is strict by [L3], so $\mathcal Z$ consists exactly of normalized nonzero future causal vectors and is nonempty. For $w=\nabla z^0$, set $\lambda=\sqrt{-g(w,w)}>0$ and $m=-w/\lambda$, a future unit timelike vector on $K_0$. The exact sign is $v^0=dz^0(v)=g(w,v)=-\lambda g(m,v)>0$ by [L3]. Thus the continuous time-component function has a positive compact minimum $\beta=\min_{\mathcal Z}v^0>0$. No minimum over points where the gradient may be null is taken. [given, L3, L4, construct, algebra]

2.1 (Uniform compact cone bounds; (e).) For any nonzero future causal $v$ based in $K_0$, normalization $u=v/|v|_{\mathrm e}$ puts $(q,u)$ in step 1.2's compact cone. Consequently $v^0\ge\beta|v|_{\mathrm e}$ and $|v_s|\le|v|_{\mathrm e}\le\beta^{-1}v^0$. Choose $L=\max\{1,\beta^{-1}\}$, giving all bounds of (e). If $K_0$ is empty, take $L=1$. If the gradient is past timelike on the whole closure of $U_0\Subset U'$, apply this result to $K_0=\overline{U_0}$. For merely pointwise temporal $U_0$, openness from [L4] provides local precompact neighbourhoods with closure in $P$, while each compact subset of $U_0$ is already an admissible $K_0$. This proves exactly the stated local and compact uniform scope. [step 1.2, L3, L4, algebra]

3.1 (One adapted chart with uniform outer and inner cones.) At $p$ in step 1.1's chart, $\nabla x^0=-n_p$. By [L4], choose a closed coordinate ball inside the chart on which this gradient remains past timelike. Also shrink the ball so the coordinate Euclidean operator norm of $g(q)-\eta$ is less than $1/4$ on its closure. The compact bound of step 2.1 supplies $K\ge1$ for both the full spatial norm and full coordinate norm on this ball, proving (a)-(b). If $|e|_{\mathrm e}=1$ and $\eta_{16}(e,e)\le0$, then $|e_s|^2\le(e^0)^2/16$, $(e^0)^2\ge16/17$, and $\eta(e,e)\le-15/17$. Therefore $g_q(e,e)\le-15/17+1/4<0$ throughout the ball. Positive scaling proves every nonzero $\eta_{16}$-causal vector is $g$-timelike there. All properties hold on the same open coordinate ball $U=x^{-1}(B_r)$. [step 1.1, step 2.1, L4, algebra, construct]

4.1 (Absolutely continuous graph bound; (c).) Assume the declared Countable and Dependent Choice premises and let $\gamma:I\to U$ be future causal. On any compact $[s,t]\subset I$, smooth composition and [L5] make its coordinate functions absolutely continuous; by step 3.1, their almost-everywhere derivatives satisfy $v^0>0$ and $|v_s|\le K v^0$. The fundamental theorem then gives $x^0(\gamma(t))-x^0(\gamma(s))=\int_s^t v^0>0$. For the spatial vector, the triangle inequality for its component integrals gives $|x_s(\gamma(t))-x_s(\gamma(s))|\le\int_s^t|v_s|\le K\int_s^t v^0$. These are the claimed bounds. Strict increase and continuity make $x^0(\gamma(I))$ an interval and give a unique spatial value for each of its time values; the increment estimate makes that function $K$-Lipschitz in the Euclidean norm. No smooth inverse time parametrization is assumed. [step 3.1, given, L5, algebra]

4.2 (Chronology from the flat minorant; (d).) For $q,q'\in U$ satisfying the stated strict $\eta_{16}$ inequality, put $d=x(q')-x(q)$. If $d^0>0$, the straight coordinate segment $x(q)+td$, $0\le t\le1$, stays in the convex ball and its nonzero tangent is $g$-timelike by step 3.1. Its positive $dx^0$ component makes it future-directed, since a past timelike vector pairs negatively with the past timelike gradient $\nabla x^0$ and so has negative $dx^0$ component. Its coordinate representative is affine, hence absolutely continuous directly; in any other chart it is smooth and has bounded derivative on each sufficiently small compact segment, giving a Lipschitz and hence absolutely continuous representative, with finite subdivision handling a larger compact segment. Thus it belongs to the stated causal-curve class and is a smooth future timelike curve from $q$ to $q'$. Reversing the segment when $d^0<0$ proves the other chronological direction. This establishes the rest of (d), without an absolutely continuous integration argument. [step 3.1, L3, L4, algebra]

5.1 The chart and cone bounds are steps 1.1 and 3.1, the causal graph estimate is step 4.1, the minorant chronology is steps 3.1 and 4.2, and the general compact temporal bounds are step 2.1. They prove (a)-(e), with exactly the declared choice uses and temporal compactness hypotheses. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2] ∎

## Remarks

Relative compactness of an open temporal region does not prevent its gradient from approaching a null covector at the boundary. Uniform normalization requires a compact set inside the temporal locus, including the closure when an estimate over the entire relatively compact open region is claimed.

The full shear changes the time coordinate as well as the spatial coordinates while keeping $n=\partial_{x^0}$. A spatial-only coordinate change with unchanged time cannot add the normal component needed to make the spatial coordinate vectors orthogonal to $n$ at the center.
