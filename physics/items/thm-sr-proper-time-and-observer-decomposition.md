---
id: thm-sr-proper-time-and-observer-decomposition
kind: theorem
title: "Norms of four-velocity and four-acceleration, and the observer rest-space decomposition"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 11
deps:
  - def-sr-four-velocity-and-four-acceleration
  - def-sr-affine-minkowski-model
  - lem-sr-proper-time-parametrization
  - def-sr-proper-time
  - def-sr-regular-causal-curve-and-worldline
  - def-lorentz-form-and-inertia
  - def-lorentz-orthogonality-and-orthogonal-complement
  - lem-lorentz-form-has-orthonormal-basis
  - lem-timelike-cone-has-two-convex-components
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - def-inertial-frame-and-inertial-chart
  - def-spatial-euclidean-structure-of-an-inertial-frame
  - def-linear-map
  - thm-cauchy-schwarz-finite
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-real-power-continuity-and-derivatives
  - def-rational-power
  - def-vector-valued-derivative-and-integral
  - def-derivative
  - def-complete-ordered-field
dependency_roles:
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  lem-sr-proper-time-parametrization: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-linear-map: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-complete-ordered-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Sections 3.5 and 3.7 pp. 60-68; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 pp. 27-28 and Section 2.3 pp. 28-30 (PDF pp. 28-31); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 pp. 26-27 (PDF pp. 33-34; worldline, proper time (1.97), four-velocity (1.98)-(1.99)) and Chapter 3 pp. 68-71 (PDF pp. 75-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $c > 0$ and let $(A,V,\eta,C^{+})$ be an oriented time-oriented affine
Minkowski space ([[def-sr-affine-minkowski-model]]).

**(a) Norm of the four-velocity.** Let $x : I \to A$ be a $C^{1}$ future
timelike worldline with four-velocity $U$
([[def-sr-four-velocity-and-four-acceleration]]). Then
$\eta(U(s),U(s)) = -c^{2}$ for every $s \in I$; equivalently the dimensionless
four-velocity $u = U/c$ satisfies $\eta(u,u) = -1$, and $U(s)$ is future
timelike. Thus the dimensionless four-velocity lies on the future unit
hyperboloid $\{v \in C^{+}:\eta(v,v)=-1\}$.

**(b) Orthogonality of the four-acceleration.** If $x$ is $C^{2}$ at $s$, then
$\eta(U(s),A(s)) = 0$: the four-acceleration has no component along the
four-velocity; if in addition $A(s) \ne 0$, then $A(s)$ is spacelike.

**(c) Rest space and projection.** Let $n \in V$ be future unit timelike,
$\eta(n,n) = -1$, and put $n^{\perp} := \{\,v \in V : \eta(n,v) = 0\,\}$
([[def-lorentz-orthogonality-and-orthogonal-complement]]). Then $n^{\perp}$ is a
3-dimensional linear subspace of $V$, the restriction of $\eta$ to $n^{\perp}$
is positive definite, and the map $h : V \to V$, $h(v) := v + \eta(n,v)\,n$, is
linear, idempotent with $h \circ h = h$, has image $n^{\perp}$ and kernel
$\operatorname{span}(n)$, satisfies $h(n) = 0$ and $\eta(n,h(v)) = 0$ for all
$v \in V$, and every $v \in V$ has the unique decomposition
$v = -\eta(n,v)\,n + h(v)$. Moreover $|w| := \sqrt{\eta(w,w)}$ defines a norm
on $n^{\perp}$.

**(d) Relative velocity and Lorentz factor.** Let $n$ and $u$ be future unit
timelike vectors, put $\gamma := -\eta(n,u)$ and $w := c\,h(u)/\gamma$. Then
$\gamma \ge 1$, $w$ lies in $n^{\perp}$,
$u = \gamma\,(n + w/c)$, $|w|^{2} = c^{2}(1-\gamma^{-2}) < c^{2}$,
$\gamma = (1-|w|^{2}/c^{2})^{-1/2}$, and $\gamma = 1$ if and only if $u = n$.
The vector $w$ is the velocity of a worldline with four-velocity $cu$ relative
to the observer $n$, and $\gamma$ is its Lorentz factor.

**(e) Coordinate form.** Let $(o;e_0,\dots,e_3)$ be an inertial frame and let
$y$ be a $C^{1}$ future timelike worldline whose inertial coordinates are
$t \mapsto (ct,r(t))$, with coordinate velocity $w(t) := r'(t)$ in
$\mathbb{R}^{3}$ and, when $y$ is $C^{2}$, coordinate acceleration
$a(t) := w'(t)$. Then $|w(t)| < c$, the four-velocity is
$U = \gamma_w\,(c,w)$ with $\gamma_w := (1-|w|^{2}/c^{2})^{-1/2}$, and the
four-acceleration is $A = \gamma_w\,\frac{d}{dt}\bigl(\gamma_w(c,w)\bigr)$, so
that

$$A^{0} = \gamma_w^{4}\,\frac{w \cdot a}{c}, \qquad A_{\mathrm{vec}} = \gamma_w^{2}\,a + \gamma_w^{4}\,\frac{(w \cdot a)\,w}{c^{2}} ;$$

consequently
$\eta(A,A) = \gamma_w^{4}|a|^{2} + \gamma_w^{6}(w \cdot a)^{2}/c^{2} \ge 0$,
with $\eta(A,A) = 0$ if and only if $a = 0$, and $\eta(U,A) = 0$. For the
observer $n = e_0$ of the chart, clauses (c) and (d) specialize to
$\gamma = \gamma_w$ and $w_{\mathrm{rel}} = (0,w)$ in the frame coordinates, identified with $w$ via the spatial basis.

**(f) Scope.** The statement is a theorem about the affine Minkowski model with
a fixed positive constant $c$; it asserts no clock reading and identifies no
physical four-velocity. No choice principle is used.

## Facts & Assumptions

**Given:** A real $c > 0$ and an oriented time-oriented affine Minkowski space $(A,V,\eta,C^{+})$; a $C^{1}$ future timelike worldline $x$ with four-velocity $U$ and (when $C^{2}$) four-acceleration $A$; a future unit timelike vector $n$; and, in clause (e), an inertial frame with coordinate path $t \mapsto (ct,r(t))$.

[L1] Four-velocity and four-acceleration ([[def-sr-four-velocity-and-four-acceleration]]): $U = x'/\tau'$ and, when $x$ is $C^{2}$, $A = U'/\tau'$; the dimensionless four-velocity is $u = U/c$.

[L2] Proper time ([[def-sr-proper-time]], [[lem-sr-proper-time-parametrization]]): $\tau'(s) = c^{-1}\sqrt{-\eta(x'(s),x'(s))} > 0$ everywhere, and $x'$ is future timelike.

[L3] Bilinearity and symmetry of $\eta$ ([[def-lorentz-form-and-inertia]]): $\eta$ is a symmetric bilinear form; $\eta(\lambda v, \lambda w) = \lambda^{2}\eta(v,w)$.

[L4] The future cone in orthonormal coordinates ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]): in a future $\eta$-orthonormal basis, $v$ is future timelike exactly when $v^{0} > |v_{\mathrm{sp}}|$, timelike exactly when $\eta(v,v) < 0$, spacelike exactly when $\eta(v,v) > 0$, and the future timelike set is closed under multiplication by positive scalars.

[L5] Orthogonal complements ([[def-lorentz-orthogonality-and-orthogonal-complement]]): $S^{\perp} = \{v : \eta(v,s) = 0 \ \forall s \in S\}$ is a linear subspace, and $u \in u^{\perp}$ exactly when $\eta(u,u) = 0$.

[L6] Orthonormal bases ([[lem-lorentz-form-has-orthonormal-basis]]): there is an ordered $\eta$-orthonormal basis with $\eta(e_a,e_b) = \operatorname{diag}(-1,1,1,1)_{ab}$; one basis vector is timelike and the other three spacelike.

[L7] Chart structure ([[def-inertial-frame-and-inertial-chart]], [[def-spatial-euclidean-structure-of-an-inertial-frame]]): in an inertial chart $\eta_0 = \operatorname{diag}(-1,1,1,1)$; the restriction $\delta$ of $\eta$ to $S = \operatorname{span}(e_1,e_2,e_3)$ is the Euclidean form with norm $|\cdot|$ and inner product written $w \cdot z := \delta(w,z)$; $(e_1,e_2,e_3)$ is a $\delta$-orthonormal basis.

[L8] Linearity ([[def-linear-map]]): a map $h$ is linear when $h(\lambda v + \mu w) = \lambda h(v) + \mu h(w)$.

[L9] Cauchy-Schwarz ([[thm-cauchy-schwarz-finite]]): for the positive definite form $\delta$, $|\delta(u,v)| \le |u|\,|v|$, with equality exactly when $u,v$ are linearly dependent.

[L10] Calculus ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[thm-real-power-continuity-and-derivatives]], [[def-rational-power]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]]): products and compositions of differentiable real functions obey the product and chain rules; $t \mapsto t^{\alpha}$ is differentiable on $(0,\infty)$ with derivative $\alpha t^{\alpha-1}$; and vector-valued derivatives are read componentwise.

[L11] Ordered-field arithmetic ([[def-complete-ordered-field]]): squares are nonnegative, a sum of nonnegative terms is nonnegative and vanishes exactly when all terms vanish, and positive quantities have positive inverses; order is total and transitive.

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $U = x'/\tau'$ with $\tau' = c^{-1}\sqrt{-\eta(x',x')} > 0$; hence $\eta(U,U) = \eta(x',x')/(\tau')^{2} = \eta(x',x')\,c^{2}/(-\eta(x',x')) = -c^{2}$ by bilinearity [L3], and $u = U/c$ satisfies $\eta(u,u) = -c^{2}/c^{2} = -1$; $U$ is a positive multiple of the future timelike $x'$, hence future timelike by [L4]. [given, L1, L2, L3, L4]

1.2 Fix an $\eta$-orthonormal basis $(e_0,e_1,e_2,e_3)$ with $e_0$ future (replace $e_0$ by $-e_0$ if necessary, using the cone description [L4]), write $n = n^{0}e_0 + n_{\mathrm{s}}$ and $v = v^{0}e_0 + v_{\mathrm{s}}$ with $n_{\mathrm{s}},v_{\mathrm{s}} \in S$, and use $\eta(n,n) = -(n^{0})^{2}+|n_{\mathrm{s}}|^{2} = -1$ and $\eta(n,v) = -n^{0}v^{0} + n_{\mathrm{s}}\cdot v_{\mathrm{s}}$ from [L6], [L7], [L3]. [given, L3, L6, L7]

1.3 In the chart of clause (e) the coordinate path is $t \mapsto (ct, r(t))$, so its coordinate derivative is $(c,w(t))$ with $w = r'$ by [L10], and $- \eta(x',x') = c^{2}-|w(t)|^{2}$ by [L7]; since $x'$ is future timelike, [L4] gives $c > |w(t)|$ and $\tau' = c^{-1}\sqrt{c^{2}-|w|^{2}} = (1-|w|^{2}/c^{2})^{1/2} = 1/\gamma_w$; hence $U = x'/\tau' = \gamma_w(c,w)$. [given, L1, L2, L4, L7, L10]

2.1 For $n$ future unit timelike, [L4] gives $n^{0} > |n_{\mathrm{s}}| \ge 0$, and from $\eta(n,n) = -1$ we get $(n^{0})^{2} = 1+|n_{\mathrm{s}}|^{2} > 0$, so $n^{0} > 0$ and division by $n^{0}$ is legitimate. [step 1.2, L4]

2.2 If $x$ is $C^{2}$ at $s$, then $U$ is differentiable at $s$ by [L1] and [L2] (a quotient of differentiable maps with positive denominator), and differentiating the constant $\eta(U,U) = -c^{2}$ of step 1.1 in an orthonormal basis gives $0 = \frac{d}{ds}\eta(U,U) = 2\eta(U,U')$ by the product rule [L10] and symmetry of $\eta$; since $A = U'/\tau'$ with $\tau' > 0$, this gives $\eta(U,A) = 0$. [step 1.1, L1, L2, L3, L10]

2.3 For future unit timelike $n$ and $u$, [L4] gives $n^{0} > |n_{\mathrm{s}}|$ and $u^{0} > |u_{\mathrm{s}}|$ in a future orthonormal basis of [L6]; hence $\eta(n,u) = -n^{0}u^{0}+n_{\mathrm{s}}\cdot u_{\mathrm{s}} \le -n^{0}u^{0}+|n_{\mathrm{s}}|\,|u_{\mathrm{s}}| < 0$ by Cauchy-Schwarz [L9] (the last inequality because $n^{0}u^{0} > |n_{\mathrm{s}}|u^{0} \ge |n_{\mathrm{s}}||u_{\mathrm{s}}|$ with at least one strict inequality), so $\gamma := -\eta(n,u) > 0$. [step 1.2, L4, L9]

2.4 If $y$ is $C^{2}$, then $w$ is differentiable with derivative $a$, $|w|^{2} = w \cdot w$ has derivative $2\,w \cdot a$ by the product rule, and the chain rule with the power $t^{-1/2}$ [L10] gives $\frac{d}{dt}\gamma_w = \gamma_w^{3}\,(w \cdot a)/c^{2}$; collecting terms in $A = \gamma_w\frac{d}{dt}(\gamma_w(c,w))$ gives $A^{0} = \gamma_w^{4}(w \cdot a)/c$ and $A_{\mathrm{vec}} = \gamma_w^{2}a + \gamma_w^{4}(w \cdot a)w/c^{2}$. [step 1.3, L10]

3.1 For $v \in n^{\perp}$, $\eta(n,v) = 0$ gives $v^{0} = (n_{\mathrm{s}} \cdot v_{\mathrm{s}})/n^{0}$, hence $\eta(v,v) = -(v^{0})^{2}+|v_{\mathrm{s}}|^{2} = |v_{\mathrm{s}}|^{2} - (n_{\mathrm{s}}\cdot v_{\mathrm{s}})^{2}/(n^{0})^{2} \ge |v_{\mathrm{s}}|^{2}\bigl(1 - |n_{\mathrm{s}}|^{2}/(n^{0})^{2}\bigr) = |v_{\mathrm{s}}|^{2}/(n^{0})^{2} \ge 0$ by Cauchy-Schwarz [L9] and the identity $(n^{0})^{2} = 1+|n_{\mathrm{s}}|^{2}$; if $\eta(v,v) = 0$ then $|v_{\mathrm{s}}| = 0$ and $v^{0} = 0$, so $v = 0$: the restriction of $\eta$ to $n^{\perp}$ is positive definite. [step 1.2, step 2.1, L9]

3.2 Expanding $\eta(A,A) = -(A^{0})^{2}+|A_{\mathrm{vec}}|^{2}$ in the chart using step 2.4 and the identity $\gamma_w^{2}(1-|w|^{2}/c^{2}) = 1$ yields $\eta(A,A) = \gamma_w^{4}|a|^{2}+\gamma_w^{6}(w \cdot a)^{2}/c^{2} \ge 0$ by [L11], with equality if and only if $a = 0$ (the first term vanishes only for $a = 0$ because $\gamma_w > 0$); and $\eta(U,A) = 0$ holds by step 2.2. [step 2.2, step 1.3, step 2.4, L11]

4.1 The map $\varphi : S \to n^{\perp}$, $\varphi(v_{\mathrm{s}}) := v^{0}e_0 + v_{\mathrm{s}}$ with $v^{0} := (n_{\mathrm{s}}\cdot v_{\mathrm{s}})/n^{0}$, is linear and bijective: linearity is clear from bilinearity of the inner product, injectivity from $v_{\mathrm{s}} = 0 \Rightarrow v^{0} = 0$, and surjectivity from step 3.1's computation of the first coordinate; hence $n^{\perp}$ is 3-dimensional. [step 1.2, step 3.1, L3, L8]

4.2 The map $h(v) = v + \eta(n,v)n$ is linear by bilinearity [L3] and [L8]; $\eta(n,h(v)) = \eta(n,v)+\eta(n,v)\eta(n,n) = 0$ and $h(n) = n+\eta(n,n)n = 0$; $h(h(v)) = h(v)+\eta(n,h(v))n = h(v)$; so $h$ is idempotent with image contained in $n^{\perp}$ and kernel containing $\operatorname{span}(n)$, and $v = -\eta(n,v)n + h(v)$ is a decomposition into $\operatorname{span}(n)$ and $n^{\perp}$, unique because those subspaces meet only in $0$ (a multiple $\lambda n$ with $\eta(n,\lambda n) = \lambda\eta(n,n) = -\lambda = 0$ vanishes); hence the image of $h$ is exactly $n^{\perp}$ and the kernel exactly $\operatorname{span}(n)$. [step 1.2, step 3.1, L3, L5, L8]

4.3 On $n^{\perp}$, positive definiteness from step 3.1 gives $|w|:=\sqrt{\eta(w,w)}\ge0$, with equality exactly for $w=0$, and bilinearity gives $|\lambda w|=|\lambda||w|$. For $z\ne0$, expand $0\le\eta(w-tz,w-tz)$ at $t=\eta(w,z)/\eta(z,z)$ to obtain $\eta(w,z)^2\le\eta(w,w)\eta(z,z)$; the same inequality holds for $z=0$. Thus $|w+z|^2\le(|w|+|z|)^2$, and taking nonnegative square roots proves the triangle inequality. Hence this function is a norm on $n^{\perp}$. [step 3.1, L3, L11, algebra]

4.4 If moreover $A(s) \ne 0$, then $A(s) \in n^{\perp}$ for $n := U(s)/c$, a future unit timelike vector by step 1.1; the restriction of $\eta$ to $n^{\perp}$ is positive definite by step 3.1, so $\eta(A,A) > 0$ and $A(s)$ is spacelike by [L4]. [step 1.1, step 3.1, step 2.2, L4]

5.1 With $h$ of step 4.2, the decomposition $u = -\eta(n,u)n + h(u) = \gamma n + h(u)$ and bilinearity give $\eta(u,u) = \gamma^{2}\eta(n,n)+\eta(h(u),h(u)) = -\gamma^{2}+|h(u)|^{2} = -1$; since $|h(u)|^{2} \ge 0$ by positive definiteness on $n^{\perp}$ (step 4.3), $\gamma \ge 1$, and with $w := c\,h(u)/\gamma$ we get $|w|^{2} = c^{2}(\gamma^{2}-1)/\gamma^{2} = c^{2}(1-\gamma^{-2}) < c^{2}$; also $u = \gamma n + h(u) = \gamma(n + w/c)$ and $(1-|w|^{2}/c^{2}) = \gamma^{-2}$, so $\gamma = (1-|w|^{2}/c^{2})^{-1/2}$ by [L11]. [step 4.2, step 4.3, step 2.3, L3, L11]

6.1 Since $\gamma > 0$ and $u = \gamma n + h(u)$, one has $\gamma = 1$ if and only if $h(u) = 0$ if and only if $u = n$: if $u = n$ then $\eta(n,u) = \eta(n,n) = -1$ so $\gamma = 1$, and conversely $\gamma = 1$ forces $|h(u)|^{2} = \gamma^{2}-1 = 0$, hence $h(u) = 0$ by positive definiteness and $u = n$. [step 2.3, step 5.1]

6.2 For the observer $n = e_0 = (1,0,0,0)$ of the chart, $h(u) = u + \eta(e_0,u)e_0 = u - u^{0}e_0 = (0, u_{\mathrm{s}})$ where $u_{\mathrm{s}} = w/c\,\gamma_w$ by step 1.3, and $\gamma = -\eta(e_0,u) = u^{0} = \gamma_w$; hence $w_{\mathrm{rel}} = c\,h(u)/\gamma = (0,w)$, the coordinate velocity, so clauses (c) and (d) specialize to $\gamma = \gamma_w$ and $w_{\mathrm{rel}} = (0,w)$ in the frame coordinates, identified with $w$ via the spatial basis. [step 5.1, step 1.3]

7.1 All arguments are finite-dimensional linear algebra and one-variable calculus in the given data; nothing is selected from a family and no choice principle is used. [step 6.2] ∎

## Remarks

- **The hard part is clause (c).** Positive definiteness of the restriction of $\eta$ to $n^{\perp}$ is where the signature hypothesis is spent; it is what makes $|h(u)|^{2} = \gamma^{2}-1$ a nonnegative quantity and hence $\gamma \ge 1$ and $|w| < c$ in clause (d), and it is also what makes a nonzero four-acceleration spacelike in clause (b).

- **The four-acceleration is not defined at kinks.** Clause (b) assumes $x$ is $C^{2}$ at the point in question; no tangent or acceleration is asserted at a corner of a piecewise worldline, consistently with [[def-sr-piecewise-proper-time]].
