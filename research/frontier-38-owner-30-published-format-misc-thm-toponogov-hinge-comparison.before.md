---
id: thm-toponogov-hinge-comparison
kind: theorem
title: Toponogov hinge comparison
status: published
origin: pipeline
deps:
  - lem-toponogov-distance-support-inequality
  - lem-first-variation-hinge-derivative-formula
  - def-comparison-triangle-in-the-two-dimensional-space-form
  - def-countable-choice
  - def-constant-sectional-curvature-and-space-form
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - thm-riemannian-distance-is-a-metric
  - thm-hopf-rinow
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - def-cut-point-and-cut-locus-of-a-point
  - thm-characterization-of-a-cut-point
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point
  - thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization
  - prop-round-sphere-model-geometry
  - thm-cartan-hadamard
  - cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points
  - thm-no-conjugate-points-under-nonpositive-sectional-curvature
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-sine-and-cosine-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-hyperbolic-identities-and-derivatives
  - def-principal-inverse-sine-and-cosine
  - thm-continuous-inverse
  - thm-algebra-of-continuous-functions
  - thm-sine-and-cosine-derivatives
  - cor-differentiable-implies-continuous
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§6, Theorem 6.1 and its proof (printed pp.21–25): the distance comparison |o,γ(t)| ≥ |õ,γ̃(t)| proved by the barrier argument; Corollary 6.3: the angle comparison α_i ≥ α̃_i, proved by first variation of the distance to a moving endpoint together with Theorem 6.1, with the shift o_ε = β_0(ε) when the vertex lies in the cut locus. Note: the displayed inequality (6.10) is printed with a reversed sign, while the proof establishes δ ≥ 0, i.e. the direction used here."
    - title: "U. Lang, Riemannian and Metric Geometry (lecture notes)"
      url: https://people.math.ethz.ch/~lang/RG.pdf
      locator: "Chapter 5, Lemma 5.1 (law of cosines in M²_κ), Lemma 5.2 (the opposite side c_{a,b} is continuous and strictly increasing in the included angle), Lemma 5.8 ((A_κ) ⇔ (H_κ)), and Remark 5.4 (existence of comparison triples)"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of dimension
$n\ge2$ with sectional curvature $\ge k$ at every tangent two-plane, where
$k\in\mathbb R$. Let $\sigma_1:[0,a]\to M$ and $\sigma_2:[0,b]\to M$ be
unit-speed **minimizing** geodesics with the common initial point
$p:=\sigma_1(0)=\sigma_2(0)$ and $a,b>0$; put
$$x:=\sigma_1(a),\qquad y:=\sigma_2(b),$$
let $\theta\in[0,\pi]$ be the included angle at $p$,
$$\cos\theta=g_p\bigl(\sigma_1'(0),\sigma_2'(0)\bigr),$$
and put $c:=d_g(x,y)$. If $k>0$, assume moreover
$$a,b,c<\frac{\pi}{\sqrt k},\qquad a+b+c<\frac{2\pi}{\sqrt k}.$$
Then
$$c\le c_k(a,b,\theta),$$
where $c_k(a,b,\theta)$ is the **opposite side of the constant-$k$ model
hinge**: in the two-dimensional space form $M^2_k$ of constant sectional
curvature $k$ choose a point $\bar p$ and unit-speed geodesics of lengths $a$
and $b$ issuing from $\bar p$ with included angle $\theta$, and let
$c_k(a,b,\theta)$ be the distance in $M^2_k$ between their endpoints. This
number is independent of the choices made and is the value determined by the
model cosine law recorded in
[[def-comparison-triangle-in-the-two-dimensional-space-form]]; the proof below
derives it as the inverse of the model comparison-angle function.

With the legs and the included angle fixed, the inequality says that a
curvature lower bound forces the opposite side to be at most the model value:
more curvature shortens the opposite side. Both legs are minimizing, of length
$a$ and $b$; the open unit-speed parametrization of the legs is the only
regularity used; the degenerate case $c=a+b$ forces $\theta=\pi$, and the
degenerate case $c=|a-b|$ is covered by the reverse triangle inequality. For $k>0$ the
three bounds $a,b,c<\pi/\sqrt k$ and the perimeter bound, together with
the strict triangle inequalities $|a-b|<c<a+b$, ensure that the comparison
triangle of side lengths $(a,b,c)$ exists. The endpoint cases
$c=a+b$ and $c=|a-b|$ are treated separately in the proof.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; the complete connected boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$ with $K\ge k$; the minimizing unit-speed legs $\sigma_1,\sigma_2$ with endpoints $x,y$ and lengths $a,b>0$; the included angle $\theta\in[0,\pi]$; and, when $k>0$, the bounds on $a,b,c$ and the perimeter displayed in the statement.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried through the Hopf–Rinow, exponential, cut-locus, comparison and continuity suppliers below; no further family is selected anywhere in the proof.

[F1] Comparison triangles and the model cosine law ([[def-comparison-triangle-in-the-two-dimensional-space-form]], [[def-constant-sectional-curvature-and-space-form]]): $M^2_k$ is the complete, simply connected surface of constant sectional curvature $k$; it is the round sphere of radius $1/\sqrt k$ when $k>0$, whose diameter is $D_k:=\pi/\sqrt k$; the Euclidean plane when $k=0$; and a hyperbolic plane when $k<0$. A comparison triangle with side lengths $(A,B,C)$ is a labelled triple of points of $M^2_k$ together with the three minimizing geodesic segments joining them and realizing those distances; it exists, and is unique up to the isometries of $M^2_k$, whenever $A,B,C>0$ satisfy the strict triangle inequalities and, in the case $k>0$, also $A,B,C<D_k$ and $A+B+C<2D_k$; when $k\le0$ no upper restriction is imposed. The angle $\bar\theta$ of such a triangle at the vertex opposite the side $C$ is the **comparison angle** and is given by the model cosine law: when $k>0$, $$\cos\bar\theta=\frac{\cos(\sqrt k\,C)-\cos(\sqrt k\,A)\cos(\sqrt k\,B)}{\sin(\sqrt k\,A)\sin(\sqrt k\,B)},$$ when $k=0$, $\cos\bar\theta=(A^2+B^2-C^2)/(2AB)$, and when $k<0$, $$\cos\bar\theta=\frac{\cosh(\sqrt{-k}\,A)\cosh(\sqrt{-k}\,B)-\cosh(\sqrt{-k}\,C)}{\sinh(\sqrt{-k}\,A)\sinh(\sqrt{-k}\,B)};$$ the stated side hypotheses make the value lie in $(-1,1)$, so $\bar\theta\in(0,\pi)$ exists and is unique.

[F2] Distance support inequality ([[lem-toponogov-distance-support-inequality]]): let $(N,h)$ be a complete connected boundaryless Riemannian manifold of dimension $\ge2$ with sectional curvature $\ge k$; let $\gamma:[0,L]\to N$ be a unit-speed minimizing geodesic; let $o\in N$; put $a:=d_h(o,\gamma(0))$, $b:=d_h(o,\gamma(L))$; suppose $(L,b,a)$ are the ordered side lengths of a comparison triangle $(\bar o,\bar x,\bar y)$ in $M^2_k$ with side $\bar\gamma:[0,L]\to M^2_k$ from $\bar x$ to $\bar y$. Then $$d_h(o,\gamma(t))\ \ge\ d_k(\bar o,\bar\gamma(t))\qquad(0\le t\le L).$$

[F3] First variation of the distance to a hinge endpoint ([[lem-first-variation-hinge-derivative-formula]]): let $N$ be a complete connected boundaryless Riemannian manifold, $o,q\in N$ with $q\ne o$ and $q$ not a cut point of $o$, let $\sigma:[0,\rho]\to N$ be the unit-speed minimizing geodesic from $o$ to $q$, and let $\gamma:[0,T]\to N$ be a unit-speed geodesic with $\gamma(0)=q$. Then $$\left.\frac{d}{dt}\right|_{0^+}d_h(o,\gamma(t))=g_q\bigl(\dot\gamma(0),\dot\sigma(\rho)\bigr)=-\cos\Theta,$$ where $\Theta\in[0,\pi]$ is the angle at $q$ between the two legs, $\cos\Theta:=-g_q(\dot\sigma(\rho),\dot\gamma(0))$. Part (a) of the same item gives $L'(0)=g(V(L),u(L))-g(V(0),u(0))$ for a smooth family of geodesics.

[F4] Cut loci, minimizing segments and consequences ([[def-cut-point-and-cut-locus-of-a-point]], [[thm-characterization-of-a-cut-point]], [[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]], [[thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point]], [[thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization]], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]], [[thm-hopf-rinow]], [[thm-riemannian-distance-is-a-metric]]): on a complete connected boundaryless manifold, (i) every two points are joined by a minimizing geodesic; (ii) for a unit direction $v$ at $q$ the set $A_q(v)=\{t\ge0:d(q,\gamma(t))=t\}$ is an initial interval, it contains $[0,c_q(v)]$ when the cut time is finite, and $q'\in\operatorname{Cut}(q)$ iff $q'=\gamma_v(c_q(v))$ for some unit $v$; (iii) $q'\in\operatorname{Cut}(q)$ iff either $q,q'$ are conjugate along a minimizing geodesic joining them, or two distinct minimizing geodesics join them; conversely each of these two alternatives forces the cut time in the relevant direction to be at most the time of occurrence; (iv) a nonconstant minimizing piecewise smooth curve has a unit-speed
geodesic arclength representative; any two nonzero one-sided velocities
at a breakpoint are positive multiples of the same tangent vector. In
particular, concatenated unit-speed pieces have equal one-sided velocities; (v) two geodesics with the same initial point and velocity coincide; (vi) the Riemannian distance is a metric, so the triangle inequality and the reverse triangle inequality hold.

[F5] Geometry of the model space forms ([[prop-round-sphere-model-geometry]], [[thm-cartan-hadamard]], [[cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points]], [[thm-no-conjugate-points-under-nonpositive-sectional-curvature]]): for $k>0$ the model $M^2_k$ is the round sphere of radius $1/\sqrt k$: for every point $q$ and every unit direction $v$ the cut time is $D_k=\pi/\sqrt k$ and $\operatorname{Cut}(q)=\{-q\}$, the antipode; the antipodal map is an involution. For $k\le0$ the model is complete, simply connected and has $K=k\le0$, so $\exp_{\bar p}$ is a diffeomorphism and every two points are joined by exactly one minimizing geodesic; in particular no point of the model is a cut point of another, and every radial geodesic minimizes on all of $\mathbb R$.

[F6] Elementary identities and continuity ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-hyperbolic-identities-and-derivatives]], [[def-principal-inverse-sine-and-cosine]], [[thm-continuous-inverse]], [[thm-algebra-of-continuous-functions]], [[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]], [[thm-cauchy-schwarz-in-an-inner-product-space]]): sine, cosine, sinh and cosh are continuous with the usual addition formulas; $\cos$ is strictly decreasing on $[0,\pi]$ with $\cos0=1$, $\cos\pi=-1$, and is even, and $\cos(2\pi-x)=\cos x$; $\cosh$ is strictly increasing on $[0,\infty)$ with $\cosh0=1$; $\cosh^2-\sinh^2=1$ and $\sinh a,\sinh b>0$ for $a,b>0$; the principal inverse cosine $\arccos:[-1,1]\to[0,\pi]$ is continuous and strictly decreasing; sums, products and quotients with nonvanishing denominator of continuous functions are continuous; and $|g(u,v)|\le|u|\,|v|$ for tangent vectors, with equality only for linearly dependent vectors.

## Proof

**Proof technique:** direct. The comparison angle of the triple with the actual side lengths is compared with $\theta$ by the distance support inequality applied to a shifted leg, whose first variation at the vertex is available because interior points of minimizing segments are off the cut locus; the model opposite side is the strictly increasing inverse of the model comparison-angle function. Degenerate side configurations are treated separately.

1.1 Setup and notation.
Take the data of the statement. The included angle satisfies $\cos\theta=g_p(\sigma_1'(0),\sigma_2'(0))$ with unit vectors $\sigma_1'(0),\sigma_2'(0)$, and $c=d_g(x,y)\ge0$; the triangle inequality gives $$|a-b|\le c\le a+b .$$ When $k>0$ put $D:=D_k=\pi/\sqrt k$ and record the hypotheses $a,b,c<D$ and $a+b+c<2D$. Both legs are minimizing, so $a=d_g(p,x)$ and $b=d_g(p,y)$. No geodesic is ever used beyond its stated role: $\sigma_1$ and $\sigma_2$ are the hinge legs, and $\sigma_1|_{[0,a-\varepsilon]}$, $\sigma_2$ are the two curves in the first-variation computations below.
[given, F1, F4, F6]

1.2 The model hinge.
Fix $\bar p\in M^2_k$ and a unit vector $u\in T_{\bar p}M^2_k$; since $T_{\bar p}M^2_k$ is two-dimensional, choose $w\perp u$ with $|w|=1$ and put $$v:=(\cos\theta)\,u+(\sin\theta)\,w .$$ Then $|v|^2=\cos^2\theta+\sin^2\theta=1$ and $g_{\bar p}(u,v)=\cos\theta$, so the geodesics $t\mapsto\exp_{\bar p}(tu)$ and $t\mapsto\exp_{\bar p}(tv)$ leave $\bar p$ at included angle $\theta$. Put $$\bar x:=\exp_{\bar p}(au),\qquad \bar y:=\exp_{\bar p}(bv),\qquad \hat c:=d_k(\bar x,\bar y).$$ By [F5] the model is complete and every radial geodesic of the model is minimizing on its initial interval up to the cut time; for $k>0$ the cut time is $D$ in every direction at every point, and $a,b<D$, while for $k\le0$ every radial geodesic minimizes on all of $\mathbb R$. Hence $$d_k(\bar p,\bar x)=a,\qquad d_k(\bar p,\bar y)=b .$$ The three points $\bar p,\bar x,\bar y$, together with any minimizing geodesic from $\bar x$ to $\bar y$ (which exists by [F4](i)), therefore form a labelled triple realizing the ordered side lengths $(\hat c,b,a)$. The model geodesic used below is the leg $\bar\sigma_2:=\exp_{\bar p}(\cdot\,v)|_{[0,b]}$ from $\bar p$ to $\bar y$.
[F1, F5, F6]

1.3 The comparison-angle function of the side lengths.
Fix $A,B>0$ with $A,B<D$ when $k>0$. Let $I(A,B)$ be the set of $C>0$ for which $(A,B,C)$ satisfies the side hypotheses of [F1]: the strict triangle inequalities and, when $k>0$, $C<D$ and $A+B+C<2D$. We claim $$I(A,B)=\bigl(|A-B|,\ m(A,B)\bigr),\qquad m(A,B):=\begin{cases}\min\{A+B,\ 2D-A-B\},&k>0,\\[2pt] A+B,&k\le0.\end{cases}$$ For $k>0$ the conditions $C<D$ and $C<2D-A-B$ combine to $C<\min\{A+B,D,2D-A-B\}$, and since $A,B<D$ one has $\min\{A+B,D,2D-A-B\}=\min\{A+B,2D-A-B\}$: if $A+B\le D$ then $A+B\le D\le 2D-A-B$, and if $A+B\ge D$ then $2D-A-B\le D\le A+B$. For $k\le0$ there is no upper bound. So $I(A,B)$ is the displayed interval. On it define $\Phi_{A,B}(C)\in(0,\pi)$ by the model cosine law of [F1], i.e. $\Phi_{A,B}(C):=\arccos F_{A,B}(C)$ with $$F_{A,B}(C):=\begin{cases}\dfrac{\cos(\sqrt k\,C)-\cos(\sqrt k\,A)\cos(\sqrt k\,B)}{\sin(\sqrt k\,A)\sin(\sqrt k\,B)},&k>0,\\[8pt] \dfrac{A^2+B^2-C^2}{2AB},&k=0,\\[8pt] \dfrac{\cosh(\sqrt{-k}\,A)\cosh(\sqrt{-k}\,B)-\cosh(\sqrt{-k}\,C)}{\sinh(\sqrt{-k}\,A)\sinh(\sqrt{-k}\,B)},&k<0.\end{cases}$$ Each denominator is strictly positive on the domain ($\sin>0$ and $\sinh>0$ for positive arguments, $2AB>0$), so by [F6] the function $F_{A,B}$ is continuous on $I(A,B)$, and $\Phi_{A,B}=\arccos\circ F_{A,B}$ is continuous with values in $(0,\pi)$.
Moreover the same function is strictly increasing on $I(A,B)$. On that interval the numerator of $F_{A,B}$ is strictly decreasing in $C$: for $k>0$, $\cos(\sqrt k\,C)$ is strictly decreasing because $\cos$ is strictly decreasing on $[0,\pi]$ and $C\mapsto\sqrt k\,C$ is strictly increasing with values in $(0,\pi)$; for $k=0$, $A^2+B^2-C^2$ is strictly decreasing in $C>0$; for $k<0$, $-\cosh(\sqrt{-k}\,C)$ is strictly decreasing because $\cosh$ is strictly increasing on $[0,\infty)$. Hence $F_{A,B}$ is strictly decreasing, and since $\arccos$ is strictly decreasing on $[-1,1]$, the composition $\Phi_{A,B}$ is strictly increasing on $I(A,B)$; in particular $\Phi_{A,B}$ is injective. Moreover $\Phi_{A,B}$ has the one-sided limits $$\lim_{C\downarrow|A-B|}\Phi_{A,B}(C)=0,\qquad \lim_{C\uparrow m(A,B)}\Phi_{A,B}(C)=\pi .$$ Indeed at $C=|A-B|$ the addition formulas of [F6] give $F_{A,B}(C)=1$; at $C=A+B$ they give $F_{A,B}(C)=-1$; and when $k>0$ and $m(A,B)=2D-A-B<A+B$, the shift formula $\cos(2\pi-x)=\cos x$ of [F6] gives $\cos(\sqrt k\,C)=\cos(\sqrt k(2\pi/\sqrt k-(A+B)))=\cos(\sqrt k(A+B))$, so again $F_{A,B}(C)=-1$. Continuity of $F_{A,B}$ and of $\arccos$ gives the two displayed limits, and the values lie in $(0,\pi)$ for $C\in I(A,B)$.
[F1, F6]

2.1 The inverse of $\Phi$ is the model opposite side.
We show that for every $\theta\in(0,\pi)$ the number $\hat c$ of step 1.2 satisfies $$\hat c=\Phi_{a,b}^{-1}(\theta),$$ which proves at once that $\hat c$ depends only on $(a,b,\theta)$ and that $c_k(a,b,\theta)=\Phi_{a,b}^{-1}(\theta)$ for $\theta\in(0,\pi)$.
First, $\hat c\le m(a,b)$: the triangle inequality in the model gives $\hat c\le a+b$; when $k>0$ and $a+b>D$ (the only case in which $2D-a-b<a+b$) let $\bar p^{*}$ be the antipode of $\bar p$. By [F5] the cut time of $\bar p$ is $D$ in every direction with cut locus $\{\bar p^{*}\}$, so the radial geodesic $\varphi(t):=\exp_{\bar p}(tu)$ runs from $\bar p$ to $\bar p^{*}$ and is minimizing on $[0,D]$, and it is $2D$-periodic: $\varphi(s+D)$ is the cut point of $\varphi(s)$ in direction $u$, hence the antipode of $\varphi(s)$, and applying this twice with the involution $q\mapsto-q$ gives $\varphi(s+2D)=\varphi(s)$. Consequently for $0\le s<t\le s+D$ one has $d_k(\varphi(s),\varphi(t))=t-s$, because the radial geodesic from $\varphi(s)$ in direction $u$ is minimizing on all of $[0,D]$. Since $\bar x=\varphi(a)$ and $t\mapsto\exp_{\bar p}(tv)$ is minimizing on $[0,D]$ with terminal point $\exp_{\bar p}(Dv)=\bar p^{*}$, the cut point at time $D$, the sub-segments of $\varphi$ from $a$ to $D$ and of this radial geodesic from $b$ to $D$ give $d_k(\bar x,\bar p^{*})=D-a$ and $d_k(\bar y,\bar p^{*})=D-b$, whence $\hat c\le(D-a)+(D-b)=2D-a-b$. So $\hat c\le m(a,b)$ in all cases.
Second, $\hat c>|a-b|$ and $\hat c<m(a,b)$ unless the included angle is $0$ or $\pi$. If $\hat c=a+b$, the concatenation of the two model legs $\bar x\bar p$ and $\bar p\bar y$ is a piecewise smooth curve of length $a+b=d_k(\bar x,\bar y)$, hence minimizing; by [F4](iv) it is a unit-speed geodesic, so its one-sided velocities at $\bar p$ agree. The velocity arriving from the $\bar x$-side is $-u$ and the departing velocity is $v$, so $v=-u$ and $\cos\theta=-1$, i.e. $\theta=\pi$. Similarly, if $\hat c=|a-b|$, say $a\ge b$, then $d_k(\bar p,\bar x)=b+d_k(\bar y,\bar x)$, so a minimizing geodesic from $\bar p$ to $\bar y$ concatenated with a minimizing geodesic from $\bar y$ to $\bar x$ is minimizing and smooth; since $d_k(\bar p,\bar y)=b<D$ when $k>0$ and minimizing geodesics of the model are unique by [F5] (and for $k\le0$ likewise), that initial segment is the leg $t\mapsto\exp_{\bar p}(tv)$, while as a segment of the geodesic from $\bar p$ to $\bar x$ it is also $t\mapsto\exp_{\bar p}(tu)$; hence $v=u$ and $\theta=0$. Finally, if $\hat c=2D-a-b$ with $k>0$, the same concatenation argument applied to the two minimizing pieces $\bar x\to\bar p^{*}$ and $\bar p^{*}\to\bar y$ shows that these pieces join smoothly at $\bar p^{*}$; the first is the sub-segment $\varphi|_{[a,D]}$ of the geodesic $\varphi$, uniqueness of minimizing geodesics between those two points ([F5]; the distance is $D-a<D$) identifies the pieces with the corresponding sub-segments of $\varphi$, and smoothness forces $\bar y=\varphi(2D-b)=\varphi(-b)=\exp_{\bar p}(-bu)$. Since also $\bar y=\exp_{\bar p}(bv)$ with $b<D$, the uniqueness of minimizing geodesics in the model gives $v=-u$, so $\theta=\pi$. Thus for $\theta\in(0,\pi)$ we have $|a-b|<\hat c<m(a,b)$, i.e. $\hat c\in I(a,b)$.
Now the triple $(\bar p,\bar x,\bar y)$ realizes the ordered side lengths $(\hat c,b,a)$ with minimizing sides: the two legs are minimizing geodesics of lengths $a$ and $b$, and a minimizing geodesic from $\bar x$ to $\bar y$ exists by [F4](i). Hence it is a comparison triangle with these ordered side lengths, and by [F1] its angle at $\bar p$ is the model cosine law value $\Phi_{a,b}(\hat c)$; its angle at $\bar p$ is $\theta$ by construction of $v$. Therefore $\theta=\Phi_{a,b}(\hat c)$, and injectivity of $\Phi_{a,b}$ from step 1.3 gives $\hat c=\Phi_{a,b}^{-1}(\theta)$. In particular the model opposite side $c_k(a,b,\theta)$ is well defined on $(0,\pi)$ and equals $\Phi_{a,b}^{-1}(\theta)$.
[F1, F4, F5, step 1.2, step 1.3]

2.2 The endpoint values.
At $\theta=0$ the construction of step 1.2 gives $v=u$, so $\bar x=\varphi(a)$, $\bar y=\varphi(b)$ for the radial geodesic $\varphi(t)=\exp_{\bar p}(tu)$, which minimizes on $[0,\max\{a,b\}]$ by [F5]; therefore $$c_k(a,b,0)=d_k(\varphi(a),\varphi(b))=|a-b| .$$ At $\theta=\pi$ one has $v=-u$, so $\bar y=\varphi(-b)$, where $\varphi$ minimizes on all of $\mathbb R$ when $k\le0$ and on $[0,D]$ together with its $2D$-periodicity when $k>0$. If $k\le0$, then $c_k(a,b,\pi)=d_k(\varphi(a),\varphi(-b))=a+b$. If $k>0$ and $a+b\le D$, the sub-interval $[-b,a]$ has length $a+b\le D$, so it is minimizing and $c_k(a,b,\pi)=a+b$; if $a+b>D$, periodicity gives $\bar y=\varphi(2D-b)$ with $(2D-b)-a=2D-a-b\in(0,D)$, so $c_k(a,b,\pi)=2D-a-b$. Thus $$c_k(a,b,\pi)=\begin{cases}\min\{a+b,\ 2D-a-b\},&k>0,\\ a+b,&k\le0.\end{cases}$$ This also shows that $c_k(a,b,\theta)$ is well defined on all of $[0,\pi]$, agrees with the model-hinge construction of the statement, and extends $\Phi_{a,b}^{-1}$ at the two endpoints.
[F5, F6, step 1.2, step 1.3]

3.1 The degenerate cases $c=a+b$ and $c=|a-b|$.
By step 1.1 exactly one of the following holds: (i) $c=a+b$; (ii) $c=|a-b|$; (iii) $|a-b|<c<a+b$. We dispose of the first two cases. If $c=a+b$, the concatenation of $\sigma_1$ reversed and $\sigma_2$ is a piecewise smooth curve from $x$ to $y$ of length $a+b=d_g(x,y)$, hence minimizing; by [F4](iv) it is a unit-speed geodesic, so its one-sided velocities at $p$ agree: the velocity arriving from the $x$-side is $-\sigma_1'(0)$ and the departing velocity is $\sigma_2'(0)$, so $\sigma_2'(0)=-\sigma_1'(0)$ and $\theta=\pi$. The endpoint value of step 2.2 then gives $c_k(a,b,\theta)=c_k(a,b,\pi)=a+b=c$ when $k\le0$; when $k>0$ the hypothesis gives $2(a+b)=a+b+c<2D$, i.e. $a+b<D$, so $2D-a-b>a+b$ and $c_k(a,b,\pi)=\min\{a+b,2D-a-b\}=a+b=c$. So $c\le c_k(a,b,\theta)$ in case (i). If $c=|a-b|$, the reverse triangle inequality in the model, applied to the hinge points $\bar p,\bar x,\bar y$ of step 1.2, gives $$c=|a-b|=\bigl|d_k(\bar p,\bar x)-d_k(\bar p,\bar y)\bigr|\le d_k(\bar x,\bar y)=c_k(a,b,\theta),$$ which is the claim. Only case (iii) remains.
[given, F4, step 1.2, step 2.2]

4.1 Case (iii): the strict comparison data.
Assume $|a-b|<c<a+b$. Then the triple $(a,b,c)$ satisfies the strict triangle inequalities, and for $k>0$ the bounds $a,b,c<D$ and $a+b+c<2D$ are hypotheses; hence $(a,b,c)$ satisfies the side hypotheses of [F1] and the comparison angle $$\bar\theta:=\Phi_{a,b}(c)\in(0,\pi)$$ is defined, with $c=\Phi_{a,b}^{-1}(\bar\theta)$ by step 1.3. Also $\theta\ne0$: if $\theta=0$ then $\sigma_1'(0)=\sigma_2'(0)$ by [F6] (equality in the Cauchy–Schwarz bound for unit vectors), so the two legs coincide by [F4](v), placing $x$ and $y$ on one radial geodesic and forcing $c=|a-b|$, contrary to case (iii). If $\theta=\pi$, then $c<a+b$ by case (iii) and $c<2D-a-b$ when $k>0$ by hypothesis, so $$c<\min\{a+b,\ 2D-a-b\}=c_k(a,b,\pi)=c_k(a,b,\theta)$$ by step 2.2 when $k>0$, and $c<a+b=c_k(a,b,\pi)=c_k(a,b,\theta)$ when $k\le0$; this is the claim. It remains to treat $\theta\in(0,\pi)$, which is done in the next layer.
[F1, step 1.3, step 2.1, step 2.2, step 3.1]

5.1 The shifted configuration.
Assume case (iii) and $\theta\in(0,\pi)$. For $\varepsilon\in(0,a)$ put $$x_\varepsilon:=\sigma_1(a-\varepsilon),\qquad c_\varepsilon:=d_g(x_\varepsilon,y).$$ Then $d_g(p,x_\varepsilon)=a-\varepsilon$, the sub-segment $\sigma_1|_{[0,a-\varepsilon]}$ is a minimizing geodesic from $p$ to $x_\varepsilon$, and $d_g(x_\varepsilon,x)=\varepsilon$. By the triangle inequality, $c_\varepsilon\to c$ and $c-\varepsilon\le c_\varepsilon\le c+\varepsilon$. For all sufficiently small $\varepsilon>0$ the triple $(a-\varepsilon,b,c_\varepsilon)$ satisfies the side hypotheses of [F1]: $c_\varepsilon>0$ and the strict triangle inequalities hold by the estimates $c_\varepsilon\ge c-\varepsilon$, $c_\varepsilon\le c+\varepsilon$ together with $|a-b|<c<a+b$ (for the inequality $c_\varepsilon<(a-\varepsilon)+b$ use $c_\varepsilon\le c+\varepsilon<a+b-\varepsilon$ for $\varepsilon<\tfrac12(a+b-c)$; the lower bounds are analogous), and for $k>0$ one has $a-\varepsilon,b,c_\varepsilon<D$ and $(a-\varepsilon)+b+c_\varepsilon\le a+b+c<2D$. Also $p\notin\operatorname{Cut}(x_\varepsilon)$: if $p\in\operatorname{Cut}(x_\varepsilon)$, then by the characterization [F4](iii) either $x_\varepsilon$ and $p$ are conjugate along a minimizing geodesic joining them, or two distinct minimizing geodesics join them. In the second case, reversing the two geodesics gives two distinct minimizing geodesics joining $p$ and $x_\varepsilon$; at most one of these two is the segment $\sigma_1|_{[0,a-\varepsilon]}$, so choose one of them and call it $\tau$. Then $\tau:[0,a-\varepsilon]\to M$ is a unit-speed minimizing geodesic with $\tau(0)=p$ and $\tau(a-\varepsilon)=x_\varepsilon$, and $\tau'(0)\ne\sigma_1'(0)$, because otherwise $\tau=\sigma_1|_{[0,a-\varepsilon]}$ by uniqueness of geodesics with the same initial data [F4](v), contrary to the choice of $\tau$. Since $\sigma_1(t)=\exp_p(t\,\sigma_1'(0))$, applying the converse (b)(2) of the characterization [F4](iii) with base $p$, direction $\sigma_1'(0)$ and time $a-\varepsilon$ gives $c_p(\sigma_1'(0))\le a-\varepsilon$, contradicting $c_p(\sigma_1'(0))\ge a$, which holds because $\sigma_1|_{[0,a]}$ is minimizing. In the first case, if the conjugacy is carried by a minimizing geodesic joining $p$ and $x_\varepsilon$ other than $\sigma_1|_{[0,a-\varepsilon]}$, then that geodesic together with $\sigma_1|_{[0,a-\varepsilon]}$ gives two distinct minimizing geodesics joining $p$ and $x_\varepsilon$, and we are back in the second case. If instead the conjugacy is carried by $\sigma_1$, then $p$ and $\sigma_1(a-\varepsilon)$ are conjugate along $\sigma_1$ with $a-\varepsilon<a$, so $\sigma_1|_{[0,a]}$ does not minimize past its first conjugate point, by [[thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point]]; this contradicts the minimality of $\sigma_1$. Hence $p\notin\operatorname{Cut}(x_\varepsilon)$.
[F4, given, step 4.1]

6.1 The support inequality for the shifted triangle.
Take a minimizing geodesic $\gamma_\varepsilon$ from $x_\varepsilon$ to $y$ (exists by [F4](i)). Apply [F2] with $N:=M$, $\gamma:=\sigma_2$ (a unit-speed minimizing geodesic of length $b$ from $p$ to $y$), $o:=x_\varepsilon$, $a:=a-\varepsilon=d_g(x_\varepsilon,p)$ and $b:=c_\varepsilon=d_g(x_\varepsilon,y)$: by step 5.1 the triples $\bigl(b,\ c_\varepsilon,\ a-\varepsilon\bigr)$ are the side lengths of a comparison triangle $(\bar x_\varepsilon,\bar p,\bar y)$ in $M^2_k$, with model side $\bar\sigma_{2,\varepsilon}$ from $\bar p$ to $\bar y$. The lemma gives $$d_g\bigl(x_\varepsilon,\sigma_2(t)\bigr)\ \ge\ d_k\bigl(\bar x_\varepsilon,\bar\sigma_{2,\varepsilon}(t)\bigr) \qquad(0\le t\le b).$$
[F2, F4, step 5.1]

6.2 The two first-variation derivatives.
Apply [F3] in $M$ with $o:=x_\varepsilon$, $q:=p$ (so the role of the minimizing geodesic $\sigma$ of [F3] is played by the reverse of $\sigma_1|_{[0,a-\varepsilon]}$) and the moving geodesic $\gamma:=\sigma_2$. The hypothesis holds by step 5.1, and the included angle at $p$ is $\theta$, because the reversed sub-segment has the same initial direction at $p$ as $\sigma_1$. Hence $$\left.\frac{d}{dt}\right|_{0^+}d_g\bigl(x_\varepsilon,\sigma_2(t)\bigr)=-\cos\theta .$$ Apply [F3] in the model $M^2_k$ with $o:=\bar x_\varepsilon$, $q:=\bar p$ (the minimizing geodesic from $\bar x_\varepsilon$ to $\bar p$ being the corresponding side of the comparison triangle) and $\gamma:=\bar\sigma_{2,\varepsilon}$. The vertex $\bar p$ is not a cut point of $\bar x_\varepsilon$: when $k>0$ the model distance is $d_k(\bar x_\varepsilon,\bar p)=a-\varepsilon<D$ while the cut locus of a point of the model sphere is the singleton antipode at distance $D$ [F5]; when $k\le0$ the model has empty cut loci [F5]. Hence $$\left.\frac{d}{dt}\right|_{0^+}d_k\bigl(\bar x_\varepsilon,\bar\sigma_{2,\varepsilon}(t)\bigr)=-\cos\bar\theta_\varepsilon, \qquad \bar\theta_\varepsilon:=\Phi_{a-\varepsilon,b}(c_\varepsilon),$$ the equality $\bar\theta_\varepsilon=\Phi_{a-\varepsilon,b}(c_\varepsilon)$ holding because the angle at $\bar p$ of the comparison triangle is its comparison angle by [F1], and the two legs at $\bar p$ are the side of length $a-\varepsilon$ and the side $\bar\sigma_{2,\varepsilon}$ of length $b$.
[F3, F4, F5, step 5.1]

7.1 The angle comparison.
Define $G_\varepsilon(t):=d_g(x_\varepsilon,\sigma_2(t))- d_k(\bar x_\varepsilon,\bar\sigma_{2,\varepsilon}(t))$ on $[0,b]$. By step 6.1, $G_\varepsilon\ge0$, and $G_\varepsilon(0)=(a-\varepsilon)-(a-\varepsilon)=0$. Both summands have right derivatives at $0$ by step 6.2, so $G_\varepsilon$ has a right derivative at $0$, and since $G_\varepsilon(t)\ge0=G_\varepsilon(0)$ for $t>0$, $$0\le G_\varepsilon'(0^+)=\cos\bar\theta_\varepsilon-\cos\theta .$$ Since $\cos$ is strictly decreasing on $[0,\pi]$ and $\bar\theta_\varepsilon\in(0,\pi)$, $\theta\in(0,\pi)$, this gives $\theta\ge\bar\theta_\varepsilon$.
[step 6.1, step 6.2, F4, F6]

8.1 Passage to the limit and conclusion in case (iii).
As $\varepsilon\downarrow0$ we have $a-\varepsilon\to a$ and $c_\varepsilon\to c$ by step 5.1. The three explicit formulas of step 1.3 define a function of $(A,B,C)$ that is jointly continuous near $(a,b,c)$ by [F6]: the denominators $\sin(\sqrt k\,A)\sin(\sqrt k\,B)$, $2AB$ and $\sinh(\sqrt{-k}\,A)\sinh(\sqrt{-k}\,B)$ are nonzero there, and for $k>0$ one has $\sqrt k\,a,\sqrt k\,b\in(0,\pi)$ because $a,b<D$; also $\arccos$ is continuous. Hence $$\bar\theta_\varepsilon=\Phi_{a-\varepsilon,b}(c_\varepsilon)\ \longrightarrow\ \Phi_{a,b}(c)=\bar\theta .$$ Step 7.1 therefore gives $\theta\ge\bar\theta$. Since $c=\Phi_{a,b}^{-1}(\bar\theta)$ (step 4.1), $\theta\in(0,\pi)$ and $\Phi_{a,b}^{-1}$ is strictly increasing (step 1.3), while $c_k(a,b,\theta)=\Phi_{a,b}^{-1}(\theta)$ by step 2.1, $$c=\Phi_{a,b}^{-1}(\bar\theta)\le\Phi_{a,b}^{-1}(\theta)=c_k(a,b,\theta).$$ This completes case (iii) and, with the degenerate cases of step 3.1, the whole proof.
[F6, step 1.3, step 2.1, step 4.1, step 7.1]

9.1 Boundary, choice and consistency audit.
Every cited hypothesis is used where it is stated: the completeness and $K\ge k$ enter through the support inequality [F2] and Hopf–Rinow; the minimality of both legs enters in step 1.1 and in the comparison of $c_p(\sigma_1'(0))$ in step 5.1; the bounds $a,b,c<D$ and the perimeter bound for $k>0$ enter in steps 5.1 and 6.1 (validity of the shifted comparison triangles) and in steps 2.2, 3.1 and 4.1 (endpoint and comparison-data cases). The degenerate cases $c=a+b$, $c=|a-b|$, $\theta=0$, $\theta=\pi$ and $a=b$, and the boundary value $k=0$, are each treated explicitly and none is excluded by hypothesis in the general case; the empty case does not arise because $a,b>0$ and $n\ge2$. No iff is asserted, and the equality case $c=c_k(a,b,\theta)$ is not characterized here. Only the inherited $\mathrm{AC}_\omega$ [A1] is used, through the geodesic, cut-locus and continuity suppliers; no family is selected in the proof, and no minimality of $\sigma_2$ beyond its role as a leg, no convexity of the distance function, and no equality characterization in the support inequality are used.
[A1, F4, F5, F6, step 4.1, step 8.1] ∎

## Source locator

The statement is the hinge (angle) comparison of Toponogov for curvature $\ge k$, in the equivalent forms $|xy|\le|\hat x\hat y|$ and $\theta\ge\bar\theta$ recorded by Lang, *Riemannian and Metric Geometry*, Chapter 5: Lemma 5.1 is the model cosine law used in [F1], Lemma 5.2 is the strict monotonicity of the opposite side in the included angle (used in steps 1.3 and 2.1 of the proof), Lemma 5.8 is the equivalence $(A_\kappa)\Leftrightarrow(H_\kappa)$ between the angle and hinge comparisons, and Remark 5.4 is the existence range of comparison triples used in step 1.3. The route followed here is Eschenburg, *Comparison Theorems in Riemannian Geometry*, §6: the distance comparison is Theorem 6.1 (the barrier argument proving $\delta\ge0$, printed pp.21–25), and the angle comparison is Corollary 6.3, whose proof takes the first variation of the distance to a moving endpoint and shifts the base point to $o_\varepsilon$ when the vertex lies in the cut locus; that shift is step 5.1 here, and the support inequality supplier [F2] is the library form of Theorem 6.1. The displayed inequality (6.10) in the source is printed with a reversed sign, while the proof of Theorem 6.1 establishes $\delta=\sigma\circ\gamma-\bar\sigma\circ\bar\gamma\ge0$, i.e. the direction $d_g(o,\gamma(t))\ge d_k(\bar o,\bar\gamma(t))$ used in [F2]; the library supplier records the proved direction. Lang, *Riemannian and Metric Geometry*, Chapter 5, Lemmas 5.1–5.2 and Theorem 5.15 (printed pp.64–70, PDF pp.67–73), records the model cosine law, monotonicity of the opposite side in its angle, and Toponogov comparison. Eschenburg §6, Corollary 6.3, gives the first-variation reading of the hinge angle used in steps 6.1–7.1.
