---
id: thm-hopf-turning-tangent-theorem
kind: theorem
title: Hopf turning-tangent theorem with ordinary corners
status: draft
origin: pipeline
deps:
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - def-rotation-index-of-a-regular-closed-plane-curve
  - def-signed-exterior-angle-at-a-piecewise-smooth-corner
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
  - thm-path-lifting-for-covering-maps
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §Some Plane Geometry and §The Gauss–Bonnet Formula, printed pp. 156–165 (PDF pp. 173–181), Theorem 9.1 and Corollary 9.6: a positively oriented simple closed piecewise smooth plane curve that bounds its region has total signed curvature plus exterior corner angles equal to 2π."
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 1, §1.3, Theorem 1.3.2 (Hopf's Umlaufsatz), printed pp. 6–8 (PDF pp. 13–15): rotation index one for a positively oriented simple closed curve, with prescribed corner increments. The secant/triangle argument below is carried out directly from the declared library items rather than cited from the source."
---

## Statement

Let $\gamma$ be a simple closed piecewise $C^2$ regular plane curve that
bounds a supplied positively oriented disk region $D$, has finitely many
ordinary corners, and has matching unit tangents at the identified endpoint.
Write $k_{\mathrm{plane}}$ for the signed curvature of its unit-speed
parametrization with respect to the positive quarter-turn $J$ of the standard
orientation, and $\alpha_1,\dots,\alpha_m$ for its signed exterior angles at the
corners. Then

$$\int_\gamma k_{\mathrm{plane}}\,ds+\sum_{j=1}^m\alpha_j=2\pi .$$

The identity is independent of the regular parametrization because
$k_{\mathrm{plane}}\,ds=d\theta$ for a continuous tangent-angle lift $\theta$ on
each smooth piece.

## Facts & Assumptions

**Given:** A simple closed piecewise $C^2$ regular plane curve with finitely many ordinary corners, bounding a supplied positively oriented disk region $D$, with matching unit tangents $T(a)=T(b)$ at the identified endpoint, and with arclength parametrization on each smooth piece.

[F1] An angle lift of the tangent data is continuous on each smooth piece with $T(t)=(\cos\theta(t),\sin\theta(t))$, and the rotation index is $\operatorname{rot}(\gamma)=(\theta(b)-\theta(a))/2\pi$ ([[def-rotation-index-of-a-regular-closed-plane-curve]]).

[F2] The signed exterior angle at a corner is the unique $\alpha\in(-\pi,\pi)$ such that $T_+=\cos(\alpha)T_-+\sin(\alpha)JT_-$ ([[def-signed-exterior-angle-at-a-piecewise-smooth-corner]]).

[F3] For a covering $p:E\to B$, a path $\alpha$ in $B$ and $e_0\in E$ with $p(e_0)=\alpha(0)$, there is a unique path $\widetilde\alpha$ with $\widetilde\alpha(0)=e_0$ and $p\circ\widetilde\alpha=\alpha$ ([[thm-path-lifting-for-covering-maps]]).

[F4] Signed geodesic curvature is defined by $A_\gamma=k_gJT$ and $k_g=g(A_\gamma,JT)$; in the Euclidean plane the covariant acceleration is the ordinary second derivative, so for a unit-speed plane curve $k_{\mathrm{plane}}=\langle\gamma'',J\gamma'\rangle$ ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F5] The boundary tangent of a positively oriented region satisfies the outward-normal-first rule ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]).

## Proof

**Proof technique:** Prove the cornerless case by the secant map on a parameter triangle and degree zero, then round the finitely many corners and pass to the limit.

1.1 Assume first that $\gamma$ has no corners, so $T$ is continuous and $T(0)=T(1)$. Let $K$ be the convex hull of the compact curve $\gamma^*$, let $p_0$ be an extreme point of $K$, and note $p_0=\gamma(t_0)$ for some $t_0$; after translating $p_0$ to the origin and rotating, $\gamma^*\subseteq\{y\ge0\}$ while $D\subseteq K\subseteq\{y\ge0\}$ because $D$ is a compact connected region whose interior is the connected bounded component of $\mathbb R^2\setminus\gamma^*$ and $\mathbb R^2\setminus K$ is connected and unbounded. [given, F5, algebra]

1.2 Now let $\gamma$ have its finitely many ordinary corners at parameters $t_1<\dots<t_m$, none at the identified endpoint. At corner $p_j$, let $T_j^-,T_j^+$ be the incoming and outgoing unit tangents. Their signed principal turn $\alpha_j$ lies in $(-\pi,\pi)$, so they are not antipodal. Use the unit vector $(T_j^-+T_j^+)/|T_j^-+T_j^+|$ as a positive $x$-axis. Both one-sided tangents have positive $x$-component; shrinking about $p_j$ makes both incident regular $C^2$ arcs a single positively traversed continuous piecewise $C^2$ graph $y=f_j(x)$, with $p_j=(0,0)$ and $x$ strictly increasing through $0$. Choose pairwise disjoint closed graph disks $B_j$ that meet $\gamma^*$ only in these two arcs; around a smaller compact graph subarc containing $p_j$, choose a fixed thin vertical tube with closure inside $B_j$. For sufficiently small $\delta>0$, the points $P_j^\pm=(\pm\delta,f_j(\pm\delta))$ lie in that tube. [F2, given, algebra]

2.1 Reparametrizing cyclically so that $t_0=0$ gives a cornerless closed curve $\gamma:[0,1]\to\mathbb R^2$ with $\gamma(0)=\gamma(1)=0$, $\gamma(t)\ne0$ for $0<t<1$ and $T(0)=T(1)=(1,0)$: indeed the tangent line at $p_0$ is a supporting line of $K$, since $\langle\gamma(t)-p_0,\nu\rangle\ge0$ with equality at $t_0$ forces the derivative at $t_0$ to be orthogonal to the inward normal $\nu=(0,1)$, and the local positive-orientation condition of [F5] rules out the direction $(-1,0)$. [F5, step 1.1, algebra]

2.2 Replace $f_j$ on $[-\delta,\delta]$ by the cubic Hermite polynomial $H_{j,\delta}$ matching both $f_j(\pm\delta)$ and $f'_j(\pm\delta)$, and leave $f_j$ unchanged outside that interval. In the rescaled variable $u=(x+\delta)/(2\delta)$, the four fixed Hermite basis polynomials have bounded absolute values; since $f_j(\pm\delta)=O(\delta)$ and $f'_j(\pm\delta)=O(1)$, both $H_{j,\delta}$ and $H_{j,\delta}-f_j$ are uniformly $O(\delta)$ on the replacement interval. The resulting arc is a regular embedded $C^1$ graph, piecewise $C^2$, with no tangent jump at its two joining points. Its positive unit tangent angle lies in the coordinate interval $(-\pi/2,\pi/2)$ and its signed curvature integral is exactly $\alpha_j(\delta)=\arctan f'_j(\delta)-\arctan f'_j(-\delta)$ by the tangent-angle derivative formula on the polynomial piece. Continuity of the one-sided tangent germs gives $\alpha_j(\delta)\to\alpha_j$. [F2, step 1.2, algebra]

3.1 Define the chord path $w:[0,1]\to S^1$ by $w(t)=\gamma(t)/|\gamma(t)|$ for $0<t<1$ and $w(0)=T(0)$, $w(1)=-T(0)$; it is continuous because the two limits are the tangent directions at $0$ and $1$, and it takes values in the closed upper semicircle. The map $\theta\mapsto(\cos\theta,\sin\theta)$ is a homeomorphism of $[0,\pi]$ onto that semicircle, so $w$ has a continuous lift with values in $[0,\pi]$ starting at $0$ and ending at $\pi$; hence $w$ has total angle change $\pi$. [given, step 2.1, algebra]

3.2 On the triangle $\Delta=\{(s,t):0\le s\le t\le1\}$ define $H(s,t)=(\gamma(t)-\gamma(s))/|\gamma(t)-\gamma(s)|$ for $s<t$, $H(t,t)=T(t)$, and $H(0,1)=-T(0)$. Then $H$ is continuous: away from the diagonal it is a quotient of continuous nonzero vectors; at a diagonal point $(t,t)$ with $0<t<1$ the secants tend to $T(t)$; at $(0,0)$ and $(1,1)$ they tend to $T(0)$; and at $(0,1)$ one has $\gamma(t)-\gamma(s)=-\bigl((1-t)+s\bigr)\gamma'(0)+o\bigl((1-t)+s\bigr)$ with $(1-t)+s>0$, so the direction tends to $-T(0)$. [given, step 2.1, algebra]

3.3 Replace each graph subarc by step 2.2's Hermite graph. Because its $x$-coordinate increases strictly, each new arc is embedded; its $O(\delta)$ displacement keeps it in its disjoint graph disk and away from the rest of the closed curve. More explicitly, the graph interpolation $f_{j,s}=(1-s)f_j+sH_{j,\delta}$ on $[-\delta,\delta]$, equal to $f_j$ elsewhere, consists of embedded arcs with the same endpoints. Choose a vertical cutoff $\chi$ equal to $1$ near the original graph and $0$ outside its fixed thin tube. The map $(x,y)\mapsto(x,y+s\chi(y-f_j(x))(H_{j,\delta}(x)-f_j(x)))$, extended by the identity outside $B_j$, carries the old arc to the interpolated arc. Its derivative in $y$ is $1+O(\delta)>0$ uniformly, so each map is an orientation-preserving homeomorphism fixed near $\partial B_j$. Combining the disjoint supports gives an ambient isotopy and a simple closed piecewise $C^2$ curve $\gamma_\delta$ that is $C^1$ at the joining points, bounds a positively oriented disk region, and equals $\gamma$ outside the $B_j$. [F5, step 1.2, step 2.2, construct]

4.1 The reversed chord path $v(s)=-w(s)$ takes values in the closed lower semicircle and has a continuous lift with values in $[\pi,2\pi]$ running from $\pi$ to $2\pi$; hence its total angle change is also $\pi$, and the reversed paths $s\mapsto w(1-s)$ and $s\mapsto v(1-s)$ have total angle changes $-\pi$. [step 3.1, algebra]

4.2 The restriction of $H$ to the boundary of the closed disk $\Delta$ is a closed loop in $S^1$ whose degree, defined by the endpoint difference of a lift, equals $0$. Since $\Delta$ is compact and $H$ is continuous, there is a finite triangulation of $\Delta$ so fine that the image of every triangle lies in an open semicircle of $S^1$. A loop lying in an open semicircle has degree zero, because the single-valued angle coordinate of that semicircle is a continuous lift and returns to its starting value at the endpoint; degree is additive under concatenation of loops. Traversing the triangle boundaries presents $\partial\Delta$ with each interior edge occurring twice with opposite orientations, and the two corresponding degree contributions cancel, so the degree of $H|_{\partial\Delta}$ is the sum of the degrees of the triangle boundary loops, each of which is zero. [F3, step 3.2, algebra]

5.1 Reading the three boundary sides of step 3.2 in the positive orientation of $\Delta$ gives total angle changes $2\pi\operatorname{rot}(\gamma)$ along the diagonal, $-\pi$ along the side $t=1$, and $-\pi$ along the side $s=0$, by steps 3.1, 4.1 and [F1]; combined with step 4.2 this gives $0=2\pi\operatorname{rot}(\gamma)-2\pi$, that is $\operatorname{rot}(\gamma)=1$. [F1, step 3.1, 4.1, 4.2, algebra]

6.1 For the cornerless case the tangent-angle lift of [F1] satisfies $\theta'=\langle\gamma'',J\gamma'\rangle=k_{\mathrm{plane}}$ along each unit-speed piece by [F4], so the fundamental theorem of calculus gives $\int_\gamma k_{\mathrm{plane}}\,ds=2\pi\operatorname{rot}(\gamma)=2\pi$. [F1, F4, step 5.1]

7.1 Applying steps 1.1–6.1 to the cornerless closed curve $\gamma_\delta$ gives $\int_{\gamma_\delta}k_{\mathrm{plane}}\,ds=2\pi$. The integral splits into the integrals over the retained subarcs of $\gamma$ and the Hermite-graph contributions, each equal to $\alpha_j(\delta)$ by step 2.2. [step 1.1, step 2.2, step 3.3, step 6.1]

8.1 Letting $\delta\to0$, the removed original graph intervals have total arclength $O(m\delta)$ because their derivatives are bounded on the finitely many regular $C^2$ germs. Their curvature integrals therefore tend to zero, so the integrals over the retained subarcs tend to $\int_\gamma k_{\mathrm{plane}}\,ds$. Also $\alpha_j(\delta)\to\alpha_j$ by step 2.2. Taking the limit in step 7.1 gives $\int_\gamma k_{\mathrm{plane}}\,ds+\sum_j\alpha_j=2\pi$. [F2, step 2.2, step 7.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, §“Some Plane Geometry,” Theorem 9.1 and Corollary 9.6, printed pp. 156–161, proves that a positively oriented simple closed piecewise smooth plane curve bounding its region has total signed curvature plus exterior angles equal to $2\pi$; Datar, *Lectures on Riemannian Geometry*, Lecture 1, §1.3, states the same result as his Theorem 1.3.2, with prescribed corner increments. The proof above is written out from the library's rotation-index, exterior-angle, curvature and path-lifting items: the cornerless case uses the secant map on a parameter triangle with the elementary degree-zero argument in step 4.2, and the piecewise case replaces each corner by an explicit cubic Hermite graph in steps 1.2–3.3. Its signed curvature contribution and shrinking-interval limit are proved in steps 2.2 and 7.1–8.1.
