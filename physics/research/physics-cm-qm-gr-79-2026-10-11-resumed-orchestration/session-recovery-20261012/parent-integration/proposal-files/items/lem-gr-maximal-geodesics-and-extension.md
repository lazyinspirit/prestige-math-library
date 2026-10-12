---
id: lem-gr-maximal-geodesics-and-extension
kind: lemma
title: "Convergent causal ends are extendible, maximal geodesics have no limit, and Cauchy sets are acausal"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-gr-spacelike-hypersurfaces-and-cauchy-sets, thm-gr-local-geodesics-and-exponential-map, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-metric-selected-connection, def-geodesic-of-an-affine-connection, lem-gr-parallel-transport-and-geodesic-speed, prop-coordinate-geodesic-equation, def-christoffel-symbols-of-an-affine-connection, thm-existence-and-uniqueness-of-a-maximal-ode-solution, cor-uniform-picard-lindelof-for-nearby-initial-values, cor-mean-value-theorem, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors, def-interval, lem-lorentz-form-has-orthonormal-basis, lem-gr-future-causal-classification-by-a-timelike-field, lem-gr-observer-pairing-with-future-causal-vectors, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, def-absolutely-continuous-function, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  cor-uniform-picard-lindelof-for-nearby-initial-values: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-interval: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase: mathematical-premise
  cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Definition 2.16 and Lemma 2.17 relating inextendibility to unbounded h-arclength domains, printed pp. 33-34; limit curve theorems, section 2.11 printed pp. 45-49"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the geodesic initial value problem and normal coordinates, sections 3.3-3.4 printed pp. 37-40 (PDF pp. 38-41)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and let causal
curves be those of [[def-gr-causal-curves-and-reachability]].

**(a) Convergent ends are extendible.** Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]) for the general absolutely continuous endpoint argument in this clause. Let $\gamma:I\to M$ be a future
causal curve and suppose $b:=\sup I<\infty$ and $\gamma(t)\to x\in M$ as
$t\to\sup I$. Then there is $\varepsilon>0$ and a future causal curve
$\tilde\gamma$ defined on $I\cup[b,b+\varepsilon)$ whose restriction to $I$
is $\gamma$. Consequently a future-inextendible causal curve whose domain is
bounded above does not converge at its upper end, and the dual statement
holds at the past end.

**(b) Maximal geodesics have no limit.** Let $(p,v)\in TM$ with $v\ne0$ and
let $\gamma_{p,v}:I_{p,v}\to M$ be the unique maximal geodesic with
$\gamma_{p,v}(0)=p$ and $\gamma_{p,v}'(0)=v$, as supplied by
[[thm-gr-local-geodesics-and-exponential-map]] clause (a). Then
$\gamma_{p,v}(t)$ does not converge to any point of $M$ as $t\to\sup I_{p,v}$
or as $t\to\inf I_{p,v}$ (where convergence at an infinite end means
convergence as $t\to+\infty$ or $t\to-\infty$ respectively).

**(c) Segments lie on inextendible causal curves.** Let $\gamma:[t_0,t_1]\to M$
with $t_0<t_1$ be a future causal curve, or a past causal curve. Then there
is an inextendible causal curve $\hat\gamma:J\to M$ (same direction as
$\gamma$ in the case at hand) and a strictly increasing affine map
$\rho:[t_0,t_1]\to J$ with $\hat\gamma\circ\rho=\gamma$. In particular, any
two distinct points $p,q\in M$ with $p\le q$ and $p\ne q$ lie on a common
inextendible causal curve, and likewise for the past relation.

**(d) Cauchy sets are acausal.** Every Cauchy set of
[[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c) is acausal in
the sense of clause (b) of that definition.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold, a future causal curve $\gamma:I\to M$ with a convergent upper end, a maximal geodesic $\gamma_{p,v}$ with $v\ne0$, and the curves of the claims; Countable Choice and Dependent Choice are assumed only for clause (a).

[L1] For $(p,v)$ there is a unique maximal geodesic $\gamma_{p,v}:I_{p,v}\to M$ with $\gamma_{p,v}(0)=p$ and $\gamma_{p,v}'(0)=v$, defined on an open interval containing $0$; $t\mapsto\exp_p(tv)$ extends the local geodesic for small $|t|$, and for fixed $v\ne0$ the geodesic is smooth on $I_{p,v}$ ([[thm-gr-local-geodesics-and-exponential-map]]).

[L2] In a smooth chart the coordinate path of a geodesic satisfies $\ddot y^k=-\Gamma^k{}_{ij}(y)\dot y^i\dot y^j$ with the smooth Christoffel symbols of the chart ([[prop-coordinate-geodesic-equation]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L3] Along a geodesic the quantity $g(\gamma',\gamma')$ is constant, and the causal character and time orientation of $\gamma'$ are therefore constant: if $v$ is future timelike then every tangent of $\gamma_{p,v}$ is future timelike ([[lem-gr-parallel-transport-and-geodesic-speed]], [[def-causal-classification-of-lorentz-vectors]]).

[L4] The exponential map of [[thm-gr-local-geodesics-and-exponential-map]] clause (d) has open star-shaped domain $\mathcal E_p\subseteq T_pM$ containing $0$ and is smooth there with $d(\exp_p)_0=\operatorname{id}$; in particular, for every $w\in T_pM$ there is $\varepsilon>0$ with $sw\in\mathcal E_p$ for $s\in[0,\varepsilon]$, and the curve $s\mapsto\exp_p(sw)$ equals the geodesic $\gamma_{p,w}$ on $[0,\varepsilon]$.

[L5] Uniform Picard-Lindelof: under the hypotheses of the local existence theorem at a point of the domain of a locally Lipschitz vector field, there are $h,r,\eta>0$ such that every initial value in one cylinder has a unique solution on a common interval of half-length $h$ with graph in a larger cylinder ([[cor-uniform-picard-lindelof-for-nearby-initial-values]]).

[L6] Every initial value problem satisfying the Picard-Lindelof hypotheses has a unique maximal solution, and every other solution is its restriction ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[L7] Finite concatenation follows directly from the absolute-continuity definition, without invoking the stronger choice-scoped Statement of [[lem-gr-causal-curve-calculus]]. On a compact parameter interval, split any finite family of interior-disjoint test intervals at the finitely many curve junctions. For each of the $k$ closed pieces use its AC bound with tolerance $\varepsilon/k$, and take the minimum of the finitely many resulting $\delta$ values. If the original intervals have total length below this minimum, the split subintervals in each piece also have total length below its own $\delta$; the triangle inequality bounds the total coordinate endpoint increments by the sum of the $k$ errors, below $\varepsilon$. Thus each chart representative of the concatenation is AC. The velocities agree with those on the pieces off the finitely many junctions, and the finite union of the pieces' exceptional null sets and junction points is null. Hence nonzero future causal velocities remain so almost everywhere. A smooth future timelike curve is itself locally AC by the bounded-derivative mean-value estimate on compact chart intervals, and its tangent is nonzero future causal by definition. These facts use [[def-gr-causal-curves-and-reachability]], [[def-absolutely-continuous-function]] and [[cor-mean-value-theorem]] directly; they add no choice premise to clauses (b)-(d).


[L8] Mean value bound: if $U$ is $C^1$ on an interval containing $[\sigma,\sigma+L]$ with $|U'|\le C$, then $|U(\sigma)-\frac1L\int_\sigma^{\sigma+L}U|\le\frac{C}{2}L$; indeed $|U(\sigma)-U(t)|\le C|t-\sigma|$ by the mean value theorem applied to each component on $[\sigma,t]$, and the integral of $C(t-\sigma)$ over $[\sigma,\sigma+L]$ is $CL^2/2$ ([[cor-mean-value-theorem]]).

[L9] A Lorentz form admits an ordered orthonormal basis; the timelike basis vector can be chosen future-directed. Every nonzero causal vector pairs nontrivially with a timelike vector, and a future unit timelike vector pairs strictly negatively with every nonzero future causal vector ([[lem-lorentz-form-has-orthonormal-basis]], [[lem-gr-future-causal-classification-by-a-timelike-field]], [[lem-gr-observer-pairing-with-future-causal-vectors]]).

[L10] For clause (a) only, under its stated choice assumptions, an AC coordinate function is the integral of its integrable derivative; the derivative of a bounded nondecreasing function on a compact interval is integrable with integral bounded by its total increase. The indefinite integral of an L1 function is AC ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase]], [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]).

## Proof

**Proof technique:** direct.

1.1 (Endpoint absolute continuity and extension.) Let $\gamma$ and $x$ be as in (a). By [L9] choose a Lorentz-orthonormal basis $e_0,e_1,e_2,e_3$ at $x$, with $e_0$ future-directed. An invertible linear change of any chart centred at $x$ gives coordinates $z$ whose coordinate basis at $x$ is this basis, hence $g_{ab}(x)=\operatorname{diag}(-1,1,1,1)$. After shrinking to a coordinate ball there is $C<\infty$ such that $|v|_{\mathrm e}\le C v^0$ for every nonzero future causal vector based in that ball. To prove this, otherwise there are base points $q_n\to x$ and coordinate unit future causal vectors $v_n$ with $v_n^0<1/2$. Pass to a convergent subsequence of the unit vectors. Its unit limit $v$ satisfies $g_x(v,v)\le0$ and $g_x(v,N_x)\le0$; the latter is strict by [L9], so $v$ is future causal. Thus $v^0>0$ and $|v_s|\le v^0$ in the chosen orthonormal basis, giving $v^0\ge1/\sqrt2$, a contradiction. The coordinate $z^0$ is therefore strictly increasing on future causal curves in this ball, and supplies the local strict temporal coordinate. Choose $a<b$ so the tail of $\gamma$ stays in this chart, write $y=z\circ\gamma$, and extend $y(b)=z(x)$. Put $\tau=y^0$; on each compact subinterval of $[a,b)$, the AC chain rule and FTC give $\tau'>0$ and $|y'|_{\mathrm e}\le C\tau'$ almost everywhere and make $\tau$ strictly increasing. Its continuous endpoint extension is bounded and nondecreasing on $[a,b]$, so [L10] gives $\tau'\in L^1[a,b]$. Consequently each component of $y'$ is integrable on $[a,b]$. For $t<b$ the local FTC gives $y(t)=y(a)+\int_a^t y'$ componentwise; letting $t\uparrow b$ gives the same identity at $b$, since the integral of an L1 function is continuous and $y(t)\to y(b)$. Thus the endpoint extension of $y$ is AC on $[a,b]$ by [L10], and retains its original nonzero future causal velocity almost everywhere. Choose a future timelike $w\in T_xM$; [L4] supplies a short geodesic $\beta(s)=\exp_x(sw)$ with $\beta(0)=x$, whose tangents are future timelike by [L3]. Concatenate the now AC closed tail with $\beta$ by [L7] and leave the earlier part of $\gamma$ unchanged. This defines the required future causal $\tilde\gamma$ on $I\cup[b,b+\varepsilon)$ and proves (a). The past case reverses time. [given, L3, L4, L7, L9, L10, construct]

1.2 (Set-up for the maximal geodesic.) Suppose, for contradiction, that $\gamma:=\gamma_{p,v}$ with $v\ne0$ converges to some $x\in M$ at one of its ends. Treat the upper end $b:=\sup I_{p,v}$, the past case being the time reverse of the same argument. Choose a chart $(U,y)$ around $x$ with $y(x)=0$; by convergence there is $t_1<b$ with $\gamma([t_1,b))\subseteq K$ for a compact $K\subseteq U$. Put $K'=y(K)$, a compact subset of the open coordinate domain $y(U)\subseteq\mathbb R^4$. Write $y(t):=y(\gamma(t))$ and $w(t):=y'(t)$ for $t\in[t_1,b)$; the curve is smooth and $w(t)\ne0$ for all $t$, by uniqueness, including when $v$ is null: if $\gamma'(t_*)=0$ at any interior parameter, its geodesic initial data at $t_*$ agree with the constant geodesic at $\gamma(t_*)$. Local uniqueness of the chart geodesic ODE [L2], [L6] makes them agree near $t_*$. The agreement set is closed and locally open in the connected geodesic interval, so they agree throughout, contradicting $v\ne0$. Put $\rho(t):=|w(t)|_{\mathrm e}>0$, $u(t):=w(t)/\rho(t)\in S^3$, and $\sigma(t):=\int_{t_1}^t\rho$, a strictly increasing $C^1$ function with $\sigma'=\rho>0$. Let $\sigma_\infty:=\lim_{t\to b}\sigma(t)\in(0,\infty]$ and let $t(\sigma)$ be the inverse of $\sigma$ on $[0,\sigma_\infty)$. By [L2], $w'=-\Gamma(y)(w,w)$ componentwise. [given, L1, L2, L6]

1.3 (A maximal solution whose graph stays in a compact set has no finite endpoint.) Let $O\subseteq\mathbb R^n$ be open, let $F:O\to\mathbb R^n$ be smooth, and let $z:[0,\tau_\infty)\to O$ be a maximal solution of $z'=F(z)$ whose graph is contained in a compact set $K\subseteq O$. If $\tau_\infty<\infty$, then $z$ extends to a solution on a strictly larger interval: indeed, by compactness of $K$ and [L5], finitely many cylinders cover $K$ and there is a common $h>0$ such that every initial condition in $K$ admits a solution on an interval of length $h$ contained in $O$; decreasing $h$ if necessary so that $h<\tau_\infty$, and starting from $z(\tau_\infty-h/2)$ and invoking uniqueness [L6] extends $z$ past $\tau_\infty$, contradicting maximality. Hence $\tau_\infty=\infty$. [given, L5, L6]

2.1 (The normalized equations in both parameters.) Put $Q(y,u):=\Gamma(y)(u,u)$ and $a(y,u):=\langle u,Q(y,u)\rangle_{\mathrm e}$. In the affine parameter $t$, differentiating $\rho=|w|_{\mathrm e}$ and $u=w/\rho$ gives $\frac{d\rho}{dt}=-\rho^2a(y,u)$ and $\frac{du}{dt}=-\rho P_uQ(y,u)$, where for unit $u$, $P_u=I-u\otimes u$ is the Euclidean orthogonal projection onto $u^\perp$. Since $d\sigma/dt=\rho$, in the parameter $\sigma$ the fields $Y(\sigma)=y(t(\sigma))$, $U(\sigma)=u(t(\sigma))$, and $r(\sigma)=\rho(t(\sigma))$ satisfy $\frac{dY}{d\sigma}=U$, $\frac{dU}{d\sigma}=-P_UQ(Y,U)$, and $\frac{dr}{d\sigma}=-r a(Y,U)$. For ODE continuation extend $P_U$ off the unit sphere by $I-U\otimes U$; this defines a smooth field on the open coordinate domain times $\mathbb R^4$. The unit sphere is invariant: $q=|U|_{\mathrm e}^2-1$ satisfies $q'=2a(Y,U)q$, so the zero initial value forces $q=0$. Thus the normalized solution remains unit-speed in $\sigma$. [step 1.2, L2, L6, algebra]

3.1 (Finite normalized length forces a finite affine end and extension.) Suppose $\sigma_\infty<\infty$. On the original normalized interval $(Y,U)$ lies in the compact set $y(K)\times S^3$ inside the coordinate ODE domain. Its maximal ODE extension from the initial data therefore passes beyond $\sigma_\infty$ by step 1.3 and uniqueness [L6]. Choose $\delta>0$ so this extension on $[0,\sigma_\infty+\delta]$ still has coordinate values in the chart; by the sphere invariance of step 2.1 its direction remains unit. The continuous coefficient $a(Y,U)$ is bounded there, by $C$ say. Its speed is $r(\sigma)=\rho(t_1)\exp(-\int_0^\sigma a(Y,U)\,ds)$, so $0<\rho(t_1)e^{-C(\sigma_\infty+\delta)}\le r(\sigma)\le\rho(t_1)e^{C(\sigma_\infty+\delta)}<\infty$. In particular, on the original interval $t(\sigma)=t_1+\int_0^\sigma r(s)^{-1}\,ds$ has a finite limit $t_1+\int_0^{\sigma_\infty}r^{-1}$; since this is the inverse of $\sigma(t)$, that limit equals $b$, so this case explicitly excludes $b=+\infty$. On the extended interval this strictly increasing smooth affine-time reconstruction attains values greater than $b$. Its inverse gives $dy/dt=rU$ and $d(rU)/dt=r\,d(rU)/d\sigma=-r^2Q(Y,U)$ by step 2.1, hence the coordinate geodesic equation [L2]. The reconstructed curve agrees with $\gamma$ on the old tail by uniqueness, glues with its earlier part, and extends the affine geodesic past $b$. This contradicts maximality [L1]. [step 1.2, step 1.3, step 2.1, L1, L2, L6, algebra]

3.2 (Second case: infinite $\sigma_\infty$.) Suppose $\sigma_\infty=\infty$. Then $t(\sigma)\to b$ as $\sigma\to\infty$, and by convergence of $\gamma$ one has $Y(\sigma)=y(t(\sigma))\to0$ in the chart. By step 2.1, $|U'|_{\mathrm e}=|P_U\Gamma(Y)(U,U)|_{\mathrm e}\le C$ on the compact set $K'\times S^3$. Let $\sigma>0$ and $L>0$; the mean value bound [L8] gives $\left|U(\sigma)-\frac1L\int_\sigma^{\sigma+L}U\right|_{\mathrm e}\le\frac{CL}{2}$, while $\left|\frac1L\int_\sigma^{\sigma+L}U\right|_{\mathrm e}=\frac1L|Y(\sigma+L)-Y(\sigma)|_{\mathrm e}\le\frac1L\bigl(|Y(\sigma+L)|_{\mathrm e}+|Y(\sigma)|_{\mathrm e}\bigr)$. Choose $L$ with $CL<1$ and then $\sigma$ so large that the last expression is less than $\frac12$; then $|U(\sigma)|_{\mathrm e}<\frac12+\frac12=1$, contradicting $|U|_{\mathrm e}=1$. Hence $\sigma_\infty=\infty$ is impossible. [step 2.1, L8, algebra]

4.1 (Conclusions.) Steps 3.1 and 3.2 show that a maximal geodesic with $v\ne0$ cannot converge at either end, which is (b); the past end is the time reverse of the same argument. For (c), let $\gamma:[t_0,t_1]\to M$ be future causal. Choose a future timelike $w_1\in T_{\gamma(t_0)}M$ and a future timelike $w_2\in T_{\gamma(t_1)}M$. By [L1] there are maximal geodesics $\gamma_1:=\gamma_{\gamma(t_0),w_1}$ and $\gamma_2:=\gamma_{\gamma(t_1),w_2}$; both are future-directed and smooth on their domains by [L3], and they contain $\gamma(t_0)$ at parameter $0$ and $\gamma(t_1)$ at parameter $0$ respectively. Concatenating the restriction of $\gamma_1$ to $(\inf I_1,0]$, the curve $\gamma$ (after shifting the parameter), and the restriction of $\gamma_2$ to $[0,\sup I_2)$ gives a future causal curve $\hat\gamma:J\to M$ by [L7], where $J$ is the corresponding interval, and there is a strictly increasing affine identification of $[t_0,t_1]$ with a subinterval of $J$ carrying $\gamma$ to $\hat\gamma$. By (b) the maximal geodesics do not converge at their outer ends, so the two outer ends of $\hat\gamma$ have no limits, at finite or infinite endpoints alike; this is exactly inextendibility in [[def-gr-causal-curves-and-reachability]] clause (d). If $p\ne q$ and $p\le q$, a future causal curve from $p$ to $q$ exists by the definition of $\le$, and the construction applies to it; the past case is the time reverse. This proves (c). [step 3.1, step 3.2, L1, L3, L7]

5.1 (Cauchy sets are acausal.) Let $S$ be a Cauchy set in the sense of [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c). Suppose $p,q\in S$ are distinct and $p\le q$. Choose a future causal curve $\gamma:[t_0,t_1]\to M$ with $\gamma(t_0)=p$ and $\gamma(t_1)=q$, and let $\hat\gamma:J\to M$ and the affine identification $\rho$ be as in (c). Then $\hat\gamma$ is an inextendible causal curve and $\rho(t_0)\ne\rho(t_1)$, since $\rho$ is strictly increasing and $t_0<t_1$ while $\hat\gamma(\rho(t_0))=p\ne q=\hat\gamma(\rho(t_1))$; thus the parameter set $\hat\gamma^{-1}[S]$ contains the two distinct elements $\rho(t_0)$ and $\rho(t_1)$, contradicting the defining property of a Cauchy set. The relation $q\le p$ is excluded symmetrically by the past version of (c). Hence no two distinct points of $S$ are causally related, that is, $S$ is acausal; this is (d) and completes the proof. [step 4.1, given, algebra] ∎

## Remarks

- **The compactness input.** The only compactness used in (b) is that the image of the geodesic near a hypothetical limit lies in a compact chart region and that the normalized coordinate direction lies in the unit sphere; no completeness of $M$ and no auxiliary Riemannian metric is assumed. The argument also covers convergence at an infinite affine end, which is why clause (b) has no finiteness restriction on the ends.
- **The convergence convention.** Clause (a) proves causal extension at a finite parameter endpoint without changing the earlier parametrization. Inextendibility throughout (b)-(d) uses the no-limit convention of [[def-gr-causal-curves-and-reachability]] clause (d), including infinite parameter ends; an infinite parameter endpoint is not itself a finite endpoint to which clause (a) applies.
