---
id: thm-sr-endpoint-proper-time-bound-and-flat-maximum
kind: theorem
title: "The endpoint bound for proper time and the maximality of the straight worldline in affine Minkowski space"
status: draft
origin: pipeline
domain: mathematics
proof_strategy: direct
deps: [def-sr-piecewise-proper-time, lem-sr-endpoint-displacement-of-a-future-timelike-worldline, lem-sr-rest-frame-of-a-future-timelike-displacement, def-sr-proper-time, def-sr-regular-causal-curve-and-worldline, def-inertial-frame-and-inertial-chart, def-spatial-euclidean-structure-of-an-inertial-frame, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, cor-zero-derivative-implies-constant, thm-monotonicity-of-the-integral, thm-nonnegative-continuous-with-zero-integral-vanishes, def-vector-valued-derivative-and-integral, def-oriented-integral, def-interval, def-sr-affine-minkowski-model, lem-sr-weak-piecewise-causal-integrability, thm-of-square-roots, lem-of-square-monotone, def-ordered-field, def-sr-inertial-and-piecewise-inertial-worldline, thm-intermediate-value, thm-linearity-of-the-integral]
dependency_roles:
  thm-linearity-of-the-integral: mathematical-premise
  def-sr-inertial-and-piecewise-inertial-worldline: mathematical-premise
  thm-intermediate-value: mathematical-premise
  def-sr-piecewise-proper-time: mathematical-premise
  lem-sr-endpoint-displacement-of-a-future-timelike-worldline: mathematical-premise
  lem-sr-rest-frame-of-a-future-timelike-displacement: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-nonnegative-continuous-with-zero-integral-vanishes: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-oriented-integral: mathematical-premise
  def-interval: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  lem-sr-weak-piecewise-causal-integrability: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  def-ordered-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), section 1.3.3 'The gamma factor' pp. 25-27 (figure s and the two-leg metric computation, the reunion discussion); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 68-73 (proper-time functional, geodesic variation, the maximality remark and its 'locally' caveat, the twin remark)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), section 2.3 'Curves of extremal proper time' pp. 28-30 (Minkowski example: straight lines are extremal and maximize); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
dependency_level: 10
aliases: []
---

## Statement

Let $c>0$ and let $x:[a,b]\to A$ be a future timelike worldline with $a<b$
([[def-interval]]) that is piecewise $C^1$ with partition
$a=s_0<s_1<\dots<s_m=b$ in the weak sense of
[[def-sr-regular-causal-curve-and-worldline]], with total proper time
$\Delta\tau(x)$ of [[def-sr-piecewise-proper-time]]. Put $p:=x(a)$, $q:=x(b)$
and $T:=\sqrt{-\eta(q-p,q-p)}$, a positive real number
([[lem-sr-endpoint-displacement-of-a-future-timelike-worldline]]). Then:

**(i) Endpoint bound.** $c\,\Delta\tau(x)\le T$.

**(ii) Equality case.** $c\,\Delta\tau(x)=T$ if and only if $x$ is a strictly
increasing reparametrization of the straight segment from $p$ to $q$: there is a
continuous strictly increasing surjection $\sigma:[a,b]\to[0,1]$ with
$\sigma(a)=0$, $\sigma(b)=1$, $C^1$ on every open piece of a finite weak
piecewise partition of $[a,b]$, with $\sigma'(s)>0$ at every point of each open
piece and finite positive one-sided difference-quotient derivatives at both
endpoints of every piece, without any requirement that $\sigma'$ extend
continuously there, such that $x(s)=p+\sigma(s)(q-p)$ for every $s\in[a,b]$;
equivalently, every open-piece tangent $x'(s)$ is a positive multiple of
$q-p$.

**(iii) Strictness.** If the image of $x$ is not contained in the straight
segment $\{p+\lambda(q-p):0\le\lambda\le1\}$, then $c\,\Delta\tau(x)<T$. In
particular, if $x$ is piecewise inertial and its piece tangents $d_1,\dots,d_m$
are not all positive multiples of one another (equivalently, its image is not
contained in the straight segment), then the inequality is strict, while a
piecewise inertial itinerary whose piece tangents are all positive multiples of
one another has the straight segment as image and attains the bound.

**(iv) Straight worldlines attain the bound.** For the worldline
$x_s(s):=p+\frac{s-a}{b-a}(q-p)$ one has $c\,\Delta\tau(x_s)=T$; more generally
every worldline whose image is the straight segment and which is traversed in
the future direction attains the bound.

**(v) Scope.** The theorem concerns the affine Minkowski model with a fixed
positive constant $c$; it is a statement about the weak piecewise $C^1$ future
timelike class, including the ordinary Riemann special case (H); it does not
identify proper time with any clock reading, and it asserts nothing about
maximality of geodesics in curved spacetimes or in Lorentzian manifolds with
different global structure.

## Facts & Assumptions

**Given:** A real $c>0$; a weak piecewise $C^1$ future timelike worldline $x:[a,b]\to A$, $a<b$, with partition $a=s_0<\dots<s_m=b$; $p=x(a)$, $q=x(b)$, $d=q-p$, $T=\sqrt{-\eta(d,d)}$.

[F1] Endpoint displacement ([[lem-sr-endpoint-displacement-of-a-future-timelike-worldline]]): $d=q-p$ is future timelike, so $T>0$, and in every inertial chart the time component of $d$ is positive and dominates the norm of its spatial part.

[F2] Rest frame of the displacement ([[lem-sr-rest-frame-of-a-future-timelike-displacement]], [[def-inertial-frame-and-inertial-chart]]): $n:=d/T$ is future unit timelike, for every event $o$ there is an inertial frame with first vector $n$, and for the chart $\xi$ of any such frame $\xi(o+\lambda d)=(\lambda T,0,0,0)$ for every real $\lambda$; in particular with $o:=p$ one has $\xi(p)=(0,0,0,0)$ and $\xi(q)=(T,0,0,0)$.

[F3] Weak piecewise structure and proper time ([[def-sr-regular-causal-curve-and-worldline]], [[lem-sr-weak-piecewise-causal-integrability]], [[def-sr-piecewise-proper-time]], [[def-vector-valued-derivative-and-integral]], [[def-oriented-integral]]): $x$ is $C^1$ on each open piece with future timelike interior tangent and has finite one-sided difference-quotient tangents; on a piece $(\alpha,\beta)$ with coordinate path $y=(y^0,z)$ one has $y^0{}'>|z'|\ge0$, the density $g=\sqrt{(y^0{}')^2-|z'|^2}=\sqrt{-\eta(x',x')}$ has a finite positive improper integral $\int_{(\alpha,\beta)}g$ in the two-sided convention, the signed improper integral of $y^0{}'$ over the piece equals $y^0(\beta)-y^0(\alpha)$, improper values are additive under subdivision, and the finite piece sums are independent of the admissible partition; $\Delta\tau(x)=c^{-1}\sum_i\int_{(s_{i-1},s_i)}g$, the based proper-time function is strictly increasing, and under the corner hypothesis (H) the improper values coincide with the ordinary Riemann integrals, agreeing with [[def-sr-proper-time]] in the globally $C^1$ case.

[F4] Cone coordinates and metric ([[def-inertial-frame-and-inertial-chart]], [[lem-timelike-cone-has-two-convex-components]], [[def-spatial-euclidean-structure-of-an-inertial-frame]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]): in an inertial chart a vector with coordinates $(v^0,v_s)$ is future timelike exactly when $v^0>|v_s|$, and $-\eta(v,v)=(v^0)^2-|v_s|^2$; a constant-tangent worldline on $[a,b]$ with tangent the future timelike $w$ has total proper time $c^{-1}(b-a)\sqrt{-\eta(w,w)}$.

[F5] Piecewise inertial histories ([[def-sr-inertial-and-piecewise-inertial-worldline]]): on each closed piece of a finite partition the curve is affine with a constant future timelike tangent, and consecutive pieces share their corner events.

[L5] Square roots and monotonicity ([[thm-of-square-roots]], [[lem-of-square-monotone]]): every real $c\ge0$ has a unique $\sqrt c\ge0$ with $(\sqrt c)^2=c$; for $x,y\ge0$ one has $x\le y\iff x^2\le y^2$.

[L6] Monotonicity and positivity of the Riemann integral ([[thm-monotonicity-of-the-integral]], [[thm-nonnegative-continuous-with-zero-integral-vanishes]]): $g_1\le g_2$ pointwise on $[u,v]$ implies $\int_u^vg_1\le\int_u^vg_2$, and a nonnegative continuous function on $[u,v]$ that is positive somewhere has positive integral.

[L7] Zero derivative gives a constant ([[cor-zero-derivative-implies-constant]]): a continuous real function on an order-convex interval whose derivative vanishes at every interior point is constant.

[L8] Order arithmetic ([[def-ordered-field]], [[def-interval]]): the order is transitive, a finite sum of nonnegative reals is nonnegative and vanishes only if every term vanishes, and a finite sum of positive reals is positive.

[L9] Intermediate value theorem ([[thm-intermediate-value]]): a continuous real function on $[a,b]$ assumes every value between its endpoint values.

[L10] Integral linearity ([[thm-linearity-of-the-integral]]): on every compact truncation $\int(f-g)=\int f-\int g$. When the two improper values are finite, their one-sided limits give the same identity for the improper integral of their difference.

## Proof

**Proof technique:** direct.

1.1 By [F1] $d$ is future timelike and $T>0$; put $n:=d/T$ and fix, by [F2], the inertial frame with origin $p$ and first vector $n$, with chart $\xi$ and coordinate path $y=\xi\circ x=(y^0,z)$; then $\xi(p)=(0,0,0,0)$ and $\xi(q)=(T,0,0,0)$, so $y(a)=(0,0,0,0)$ and $y(b)=(T,0,0,0)$. [given, F1, F2, choose]

2.1 On every open piece $(s_{i-1},s_i)$ the tangent is future timelike, so [F3] and [F4] give $y^0{}'>|z'|\ge0$; the density is $g_i=\sqrt{(y^0{}')^2-|z'|^2}$ with finite positive improper integral, and setting $f_i:=g_i$ and $h_i:=y^0{}'-f_i$ one has $h_i\ge0$ and $f_i\le y^0{}'$ pointwise on the piece, because $0\le (y^0{}')^2-|z'|^2\le(y^0{}')^2$ and $f_i,y^0{}'\ge0$ with monotonicity of the square root [L5]. [step 1.1, F3, F4, L5]

3.1 Endpoint bound: $c\,\Delta\tau(x)=\sum_{i=1}^m\int_{(s_{i-1},s_i)}f_i\le\sum_{i=1}^m\int_{(s_{i-1},s_i)}y^0{}'=y^0(b)-y^0(a)=T$, where the first equality is the definition of $\Delta\tau$ in [F3], the inequality is termwise monotonicity of the improper integrals from step 2.1 together with positivity of each term, the middle equality combines the endpoint increments of [F3] for $y^0{}'$ with additivity under the partition, and the last equality is $y^0(b)-y^0(a)=\xi^0(q)-\xi^0(p)=T$ from step 1.1; this is (i). [step 2.1, F3, L6]

4.1 Assume now $c\,\Delta\tau(x)=T$. Then by step 3.1 and additivity, $\sum_{i=1}^m\int_{(s_{i-1},s_i)}h_i=0$ with every term $\ge0$ by step 2.1, so by [L8] every term vanishes; since each $h_i$ is continuous and nonnegative on the open piece, $h_i\equiv0$ there: if $h_i(u_0)>0$ at some point, continuity gives $h_i\ge h_i(u_0)/2>0$ on a compact interval around $u_0$ inside the piece, whose ordinary integral is then positive by [L6], and the improper integral dominates it, a contradiction. [step 2.1, step 3.1, L6, L8, L10]

5.1 Consequently $f_i^2=(y^0{}')^2$ on each piece, so $|z'|^2=(y^0{}')^2-f_i^2=0$ and hence $z'=0$ there; each coordinate of $z$ is continuous on the closed piece with vanishing derivative on its interior, so by [L7] each coordinate is constant on the closed piece, and since consecutive pieces share their corner values, $z\equiv z_0$ for a single $z_0\in\mathbb{R}^3$ on all of $[a,b]$. [step 4.1, F3, L7, algebra]

6.1 Hence for every $s\in[a,b]$ the coordinates of $x(s)$ are $(y^0(s),z_0)$; by the inverse chart formula $\xi^{-1}(u)=p+E(u)$ with $E(u)=\sum_a u^a e_a$ from [F2] and step 1.1, $x(s)=p+\frac{y^0(s)}{T}\,d+w_0$ with $w_0$ the vector whose coordinates are $(0,z_0)$, and evaluating at $s=a$, where $x(a)=p$ and $y^0(a)=0$, gives $w_0=0$; thus $x(s)=p+\sigma(s)\,d$ for $\sigma(s):=\frac{y^0(s)}{T}$, and $\sigma$ is continuous with $\sigma(a)=0$ and $\sigma(b)=1$. [step 5.1, F2, algebra]

7.1 Properties of $\sigma$: it is $C^1$ on every open piece with $\sigma'=y^0{}'/T>0$ by step 2.1; its one-sided difference-quotient derivatives at the piece endpoints are the one-sided quotients of $y^0$ divided by $T$, hence finite and positive because the corresponding one-sided tangent of $x$ is future timelike, so its time component strictly dominates the spatial norm [F3, F4]; and it is strictly increasing: for $s<t$ in $[a,b]$ the restricted worldline $x|_{[s,t]}$ is again weak piecewise future timelike, and its proper time satisfies $\Delta\tau_{[s,t]}(x)=c^{-1}\sum\int_{(\text{induced pieces})}f$ with $f=y^0{}'$ on all open pieces by step 5.1, so by the endpoint increments and additivity of [F3] this equals $c^{-1}(y^0(t)-y^0(s))$, while the based proper-time function is strictly increasing by [F3]; hence $y^0(t)-y^0(s)>0$ and $\sigma(t)>\sigma(s)$. [step 6.1, F3, F4, algebra]

8.1 By [L9], continuity and the endpoint values $\sigma(a)=0$, $\sigma(b)=1$ imply that $\sigma$ assumes every value of $[0,1]$; strict monotonicity keeps its values in $[0,1]$. This proves the forward implication of (ii): the $\sigma$ of step 6.1 and step 7.1 is a continuous strictly increasing surjection $[a,b]\to[0,1]$ with $\sigma(a)=0$, $\sigma(b)=1$, $C^1$ on the open pieces of the partition of $x$, with $\sigma'>0$ there and finite positive one-sided quotient derivatives, and $x(s)=p+\sigma(s)d$. The tangent form of the statement is immediate in this direction, since $x'(s)=\sigma'(s)\,d$ with $\sigma'(s)>0$ at every differentiable point of every open piece. [step 6.1, step 7.1, L9, algebra]

9.1 Conversely, suppose $x(s)=p+\sigma(s)(q-p)=p+\sigma(s)d$ for a $\sigma$ as in (ii) with respect to a finite weak piecewise partition of $[a,b]$; then on each open piece the tangent is $\sigma'(s)d$ with $\sigma'(s)>0$, so $x$ is again a weak piecewise future timelike worldline with that partition, its coordinate path in the chart of step 1.1 is $y^0=T\sigma$, $z=0$, and its density is $f=\sqrt{(y^0{}')^2}=y^0{}'=T\sigma'$; therefore $c\,\Delta\tau(x)=\sum\int f=\sum\int y^0{}'=y^0(b)-y^0(a)=T(\sigma(b)-\sigma(a))=T$, using for the middle equality the endpoint increments and additivity of [F3] applied to $x$ with that partition; this is the reverse implication of (ii), and the stated equivalence with 'every open-piece tangent is a positive multiple of $q-p$' holds because the representation gives such tangents, and conversely such tangents have vanishing spatial coordinates in the rest frame of step 1.1, so [L7] makes the continuous spatial coordinates constant on each closed piece; the shared corner values and $z(a)=0$ make $z=0$ throughout. Then $\sigma=y^0/T$ has precisely the positivity, endpoint and surjectivity properties established in steps 7.1 and 8.1. [step 7.1, step 8.1, F3, F4, L7, algebra]

10.1 For (iii): by (ii), $c\,\Delta\tau(x)=T$ forces $x$ to be a reparametrization with $\sigma$ valued in $[0,1]$, so the image of $x$ is contained in $\{p+\lambda d:0\le\lambda\le1\}$; hence if the image is not contained in the straight segment the inequality is strict. If $x$ is piecewise inertial with constant piece tangents $d_1,\dots,d_m$, then: if all $d_i$ are positive multiples of one another, say $d_i=\alpha_i u$ with $u$ future timelike and $\alpha_i>0$, then all legs lie on the line through $p$ in direction $u$ and the parameter $\sigma$ defined by $x=p+\sigma d$ is continuous, piecewise affine and strictly increasing with image $[0,1]$, so the image is exactly the straight segment and the bound is attained by step 9.1; conversely, if the image is contained in the straight segment, each leg's tangent is parallel to $d$ and future timelike, hence a positive multiple of $d$ by [F4], so all $d_i$ are positive multiples of one another; this proves (iii). [step 9.1, F4, F5, algebra]

10.2 For (iv): $x_s(s)=p+\frac{s-a}{b-a}d$ has constant tangent $\frac{1}{b-a}d$, a future timelike vector, so it is a weak piecewise (indeed $C^1$) future timelike worldline, and $\sigma(s)=\frac{s-a}{b-a}$ satisfies the conditions of (ii): it is continuous, strictly increasing, maps $[a,b]$ onto $[0,1]$, is $C^1$ with positive constant derivative, and $x_s=p+\sigma d$; by step 9.1, $c\,\Delta\tau(x_s)=T$. More generally, any weak piecewise future timelike worldline whose image is the straight segment from $p$ to $q$ and which is traversed in the future direction satisfies the representation of (ii) by the argument in step 9.1 and hence attains the bound. [step 9.1, F4, F5, algebra]

11.1 Clause (v) is a scope statement: every step above is an argument in the oriented time-oriented affine Minkowski model with the fixed positive constant $c$, within the weak piecewise $C^1$ future timelike class; the corner hypothesis (H) is the special case in which the improper values equal the ordinary Riemann integrals and the total proper time agrees with [[def-sr-proper-time]] for globally $C^1$ histories by [F3], so that case is included; no clock reading, curved-spacetime maximality or choice principle is introduced, the only analytic inputs being the compact-interval improper-integral and one-dimensional differentiability suppliers listed above. [step 10.2, F3] ∎
