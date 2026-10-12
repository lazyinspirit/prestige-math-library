---
id: lem-tail-curve-tangents-and-homoclinic-transversality
kind: lemma
title: "The coded curves are genuine $C^1$ stable and unstable curves of $F$, with transverse intersection at every finite-word homoclinic point"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 8
deps: [def-bilateral-symbol-and-bounded-sequence-space, lem-bounded-bilateral-sequence-ball-is-complete, lem-coded-quadratic-recurrence-is-a-contraction, lem-symbol-locality-gives-coding-continuity, thm-henon-coded-invariant-set-is-conjugate-to-shift, lem-finite-word-deviations-give-homoclinic-orbits, def-stable-unstable-cones-and-line-slopes, lem-slope-graph-transforms-converge, lem-weighted-tail-contractions-give-c-one-curves, thm-of-square-roots, def-abs-value, lem-of-abs-value, def-metric-convergence, def-metric-space, def-continuity-real, def-interval, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  lem-bounded-bilateral-sequence-ball-is-complete: mathematical-premise
  lem-coded-quadratic-recurrence-is-a-contraction: mathematical-premise
  lem-symbol-locality-gives-coding-continuity: mathematical-premise
  thm-henon-coded-invariant-set-is-conjugate-to-shift: mathematical-premise
  lem-finite-word-deviations-give-homoclinic-orbits: mathematical-premise
  def-stable-unstable-cones-and-line-slopes: mathematical-premise
  lem-slope-graph-transforms-converge: mathematical-premise
  lem-weighted-tail-contractions-give-c-one-curves: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-metric-convergence: mathematical-premise
  def-metric-space: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Sections 13.1-13.2, stable and unstable manifolds of the horseshoe fixed points and transverse homoclinic points"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 15 Sections 15.1-15.2, continuation of stable and unstable curves and the complete horseshoe"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, invariant sectors and hyperbolic structure of the invariant set"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
verification:
  precheck: pass
---

## Statement

Fix $a\ge100$ and let $R=\sqrt a+3$, $L=\sqrt{a-2R}$, $F(x,y)=(y,y^2-a-x)$, $x(s)$, $h$ and the sets $W^s,W^u$ be as in [[def-bilateral-symbol-and-bounded-sequence-space]], [[lem-coded-quadratic-recurrence-is-a-contraction]], [[lem-symbol-locality-gives-coding-continuity]] and [[def-stable-unstable-cones-and-line-slopes]]. For $u\in\{-1,+1\}$ put $r_u:=1+u\sqrt{a+1}$ and let

$$M_u^{\sqrt{\ }}(v,w):=u\sqrt{a+v+w}$$

be the square-root update of the coded recurrence. Then:

1. **(hyperbolicity)** the fixed points $(r_u,r_u)$ of $F$ are hyperbolic: $DF(r_u,r_u)$ has two real eigenvalues, one of modulus $>1$ and one of modulus $<1$;
2. **(stable curve at a finite-word point)** let $s\in X_\pm$ be nonconstant with $s_n=u$ for $|n|\ge N$, and put $z_*:=h(s)$. Then there are $\delta_s>0$ and a $C^1$ curve $\gamma_s:(-\delta_s,\delta_s)\to\mathbb R^2$ with $\gamma_s(0)=z_*$, $\gamma_s\bigl((-\delta_s,\delta_s)\bigr)\subseteq W^s(r_u,r_u)$ and tangent $\gamma_s'(0)\in C^s_{1/2}$;
3. **(unstable curve at a finite-word point)** likewise there are $\delta_u>0$ and a $C^1$ curve $\gamma_u:(-\delta_u,\delta_u)\to\mathbb R^2$ with $\gamma_u(0)=z_*$, $\gamma_u\bigl((-\delta_u,\delta_u)\bigr)\subseteq W^u(r_u,r_u)$ and $\gamma_u'(0)\in C^u_{1/2}$; consequently $z_*$ is a transverse homoclinic point of $(r_u,r_u)$ ([[def-stable-unstable-cones-and-line-slopes]]);
4. **(local stable and unstable sets at the fixed point)** put $\rho:=1/8$. Then the set of points $y=(y_{-1},y_0)\in\mathbb R^2$ whose forward orbit stays within Euclidean distance $\rho$ of $(r_u,r_u)$,

$$\Gamma^s_\rho:=\{\,y:\ \bigl\|F^n(y)-(r_u,r_u)\bigr\|_2\le\rho\ \text{for every }n\ge0\,\},$$

is exactly the graph $\{(b,\,r_u+u_0(b)):|b-r_u|\le\rho\}$ of the half-tail solution map $b\mapsto u_0(b)$ obtained from [F2] with the constant reference $y_n:=r_u$ and $b_*:=r_u$; in particular it is a $C^1$ embedded curve through $(r_u,r_u)$ whose tangent at the fixed point lies in $C^s_{1/2}$. With $\Sigma(x,y):=(y,x)$ the same statement holds in the unstable direction: a point has all its backward iterates $F^{-n}(y)$ within distance $\rho$ of $(r_u,r_u)$ if and only if it lies in $\Sigma(\Gamma^s_\rho)$, and $\Sigma(\Gamma^s_\rho)$ is a $C^1$ embedded curve through $(r_u,r_u)$ whose tangent lies in $C^u_{1/2}$.

## Facts & Assumptions

**Given:** The parameter $a\ge100$, the constants $R,L$, the coded sequences $x(s)$, the coding map $h$, the fixed points $r_u$, the square-root updates $M_u^{\sqrt{\ }}$, and a nonconstant code $s$ with $s_n=u$ for $|n|\ge N$.

[F1] Coding data ([[lem-coded-quadratic-recurrence-is-a-contraction]], [[lem-symbol-locality-gives-coding-continuity]], [[thm-henon-coded-invariant-set-is-conjugate-to-shift]]): $x_n(s)=M^{\sqrt{\ }}_{s_n}(x_{n-1}(s),x_{n+1}(s))$, $|x_n(s)|\in[L,R]$, $F(h(s))=h(S_\pm s)$, and $h$ is a homeomorphism onto its image; moreover $|x_n(s)|=\sqrt{a+x_{n-1}(s)+x_{n+1}(s)}\le\sqrt{a+2R}=\sqrt{126}<12.5$.

[F2] The weighted half-tail lemma ([[lem-weighted-tail-contractions-give-c-one-curves]]): for $\theta=1/2$, a bound $c$ with $q:=c(\theta+\theta^{-1})<1$, a closed interval $J$ and a reference half-orbit satisfying the recurrence, the fixed points $u(b)$ of $T_b$ provide a $C^1$ map $b\mapsto u(b)$ into the weighted space with $\|u(b)\|_\theta\le c|b-b_*|/(1-q)$, the associated curve $b\mapsto(b,y_0+u_0(b))$ has derivative $(1,d_0)$ with $|d_0|\le c/(1-q)$, and every point of the curve has forward orbit tracking the reference orbit with deviations bounded by $\|u(b)\|_\theta$.

[F3] Homoclinic data ([[lem-finite-word-deviations-give-homoclinic-orbits]]): $F^n(h(s))\to(r_u,r_u)$ as $n\to\pm\infty$, and $h(s)\ne(r_u,r_u)$ for $s\ne\bar u$.

[F4] The reflection symmetry ([[def-stable-unstable-cones-and-line-slopes]], [[def-total-derivative-in-euclidean-space]]): with $\Sigma(x,y):=(y,x)$ one has $\Sigma^2=\mathrm{id}$, $\Sigma\circ F\circ\Sigma=F^{-1}$ (because $\Sigma F\Sigma(x,y)=\Sigma F(y,x)=\Sigma(x,x^2-a-y)=(x^2-a-y,x)=F^{-1}(x,y)$), and $\Sigma$ maps $C^s_{1/2}$ onto $C^u_{1/2}$.

[F5] Hyperbolic fixed points ([[def-jacobian-matrix-and-gradient]], [[def-abs-value]], [[lem-of-abs-value]], [[thm-of-square-roots]]): $DF(x,y)=\begin{pmatrix}0&1\\-1&2y\end{pmatrix}$; the characteristic polynomial at $(r_u,r_u)$ is $\lambda^2-2r_u\lambda+1$, and $|r_u|=\sqrt{a+1}+1\ge11>1$.

[F6] Convergence and continuity ([[def-metric-convergence]], [[def-metric-space]], [[def-continuity-real]], [[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): the definitions of convergence in $\mathbb R^2$, of $C^1$ curves on an interval, and of the stable and unstable sets of [[def-stable-unstable-cones-and-line-slopes]].

[F7] One-sided bounded sequences and the deviation operator ([[lem-bounded-bilateral-sequence-ball-is-complete]], clause 4; [[def-abs-value]], [[lem-of-abs-value]], [[thm-of-square-roots]]): the bounded sequences $u:\mathbb N\to\mathbb R$ form a complete metric space in the supremum distance $\|u-v\|_\infty$, and for $b\in[-R,R]$ and the constant reference $y_n:=r_u$ the operator

$$(T_bu)_n:=M^{\sqrt{\ }}_{u}\bigl(r_u+u_{n-1},\,r_u+u_{n+1}\bigr)-r_u\qquad(n\ge0,\ u_{-1}:=b-r_u)$$

is well defined on all bounded $u$ whose entries satisfy $|u_n|\le1/8$, and there

$$|(T_bv)_n-(T_bw)_n|\le2c\,\|v-w\|_\infty,\qquad 2c=\frac1L\le\frac1{\sqrt{74}}<1,$$

because for $|v_n|\le1/8$ the radicands $a+(r_u+v_{n-1})+(r_u+v_{n+1})=r_u^2+v_{n-1}+v_{n+1}$ lie in $[r_u^2-\tfrac14,r_u^2+\tfrac14]\subseteq[81,123]\subseteq[L^2,a+2R]$ and $|\sqrt s-\sqrt t|=|s-t|/(\sqrt s+\sqrt t)\le|s-t|/(2L)$.



## Proof

**Proof technique:** direct; solve the two slope-free half-tail problems for the square-root update, use the reflection symmetry for the unstable direction, and read off hyperbolicity and transversality.

1.1 Hyperbolicity: at $(r_u,r_u)$ the characteristic polynomial of [F5] is $\lambda^2-2r_u\lambda+1$, with real roots $r_u\pm\sqrt{r_u^2-1}$ because $r_u^2>1$; their product is $1$ and $|\lambda_+|>1>|\lambda_-|>0$. This proves clause 1. [given, F5, algebra]

2.1 Stable curve: apply [F2] with $\theta:=1/2$, $J:=[-R,R]$, $c:=1/(2L)\le1/(2\sqrt{74})$, the update $M^{\sqrt{\ }}_{s_n}$, the reference $y_n:=x_n(s)$ $(n\ge0)$ and $b_*:=x_{-1}(s)$; then $q=c(5/2)<1$ (indeed $c<1/14$ and $q<1/4$ because $2L>14$ and $5/(4L)<1$), the recurrence holds by [F1], and the margin hypothesis holds because $|y_n|\ge L>1/2$ and $|y_n|\le\sqrt{126}<R-\tfrac12$ by [F1]. Hence there is a $C^1$ curve $b\mapsto Z(b):=\bigl(b,x_0(b)\bigr)$ through $Z(b_*)=(x_{-1}(s),x_0(s))=z_*$ with tangent $(1,d_0)$ and $|d_0|\le c/(1-q)\le(1/14)/(3/4)=2/21<\tfrac12$. Every point $Z(b)$ has forward orbit tracking the reference orbit $F^n(z_*)$, which converges to $(r_u,r_u)$ by [F3]; hence $Z(b)$ lies in $W^s(r_u,r_u)$ and the tangent lies in $C^s_{1/2}$. This proves clause 2. [given, step 1.1, F1, F2, F3, algebra]

3.1 Unstable curve: put $w:=\Sigma(z_*)=(x_0(s),x_{-1}(s))$ and let the sequence $(y_n)_{n\ge0}$ be given by $y_n:=x_{-n-1}(s)$, with $y_{-1}:=x_0(s)$; by the recurrence of [F1], $y_n=M^{\sqrt{\ }}_{\operatorname{sign}y_n}(y_{n-1},y_{n+1})$ for all $n\ge0$, and $|y_n|\in[L,\sqrt{126}]$ by [F1], so the margin hypothesis of [F2] holds as in step 2.1. Applying [F2] with the same parameters and this reference gives a $C^1$ curve $b\mapsto(b,x_0(b))$ through $w$ with tangent $(1,d_0)$, $|d_0|\le2/21$, whose points have forward orbits tracking the orbit of $w$: indeed $F^n(w)=\Sigma(F^{-n}(z_*))$ by [F4], so those orbits converge to $\Sigma(r_u,r_u)=(r_u,r_u)$ by [F3]. The reflected curve $\gamma_u:=\Sigma\circ\gamma$ is a $C^1$ curve through $\Sigma(w)=z_*$ with tangent $\Sigma(1,d_0)=(d_0,1)\in C^u_{1/2}$, and it lies in $W^u(r_u,r_u)$ because $F^{-n}\bigl(\Sigma(\xi)\bigr)=\Sigma\bigl(F^n(\xi)\bigr)$ by [F4]. This proves clause 3. [given, step 2.1, F1, F2, F3, F4, algebra]

3.2 Local stable set: apply [F2] with $\theta:=1/2$, $J:=[-R,R]$, $c:=1/(2L)$, the constant symbols $s_n:=u$, the constant reference $y_n:=r_u$ and $b_*:=r_u$. The reference satisfies the recurrence because $r_u=M^{\sqrt{\ }}_u(r_u,r_u)$ by step 1.1, and the margin hypothesis holds because $L\le|r_u|\le\sqrt{a+2R}<R-\tfrac12$: for $u=+1$, $r_+\ge11$ and $r_+^2=a+2r_+\le a+2R$; for $u=-1$, $|r_u|^2=a+2r_-\ge a-2R=L^2$; and $(R-\tfrac12)^2=a+5\sqrt a+\tfrac{25}{4}>a+2\sqrt a+6=a+2R$. Hence there is a $C^1$ map $b\mapsto u(b)$ with $\|u(b)\|_\infty\le\|u(b)\|_\theta\le c|b-r_u|/(1-q)$, where $q=(5/2)c\le5/32$, so $c/(1-q)\le(1/16)/(27/32)=2/27$. Define $\Gamma:=\{(b,r_u+u_0(b)):|b-r_u|\le\rho\}$ with $\rho:=1/8$. [given, step 1.1, step 2.1, F1, F2, F4]

4.1 Transversality: by steps 2.1 and 3.1 the tangent of $\gamma_s$ at $z_*$ lies in $C^s_{1/2}$ and that of $\gamma_u$ in $C^u_{1/2}$; since $C^s_{1/2}\cap C^u_{1/2}=\{0\}$ ([F4], [[def-stable-unstable-cones-and-line-slopes]]) the two tangent lines are distinct, so the two curves cross transversely at $z_*$. This is the transversality assertion of clause 3. [step 2.1, step 3.1, F4]

4.2 The graph lies in the trapping set: let $|b-r_u|\le\rho$ and put $x_{-1}:=b$, $x_n:=r_u+u_n(b)$ for $n\ge0$. By the fixed point equation of [F2] the sequence satisfies $x_n=M^{\sqrt{\ }}_u(x_{n-1},x_{n+1})$ for every $n\ge0$, so $F(x_{n-1},x_n)=(x_n,x_{n+1})$ by [F1] and $F^n(b,x_0)=(x_{n-1},x_n)$ for all $n\ge0$; also $|x_n-r_u|\le\|u(b)\|_\theta\le(2/27)|b-r_u|\le\rho$. Hence every point of $\Gamma$ has its forward orbit inside the Euclidean ball of radius $\rho$ about $(r_u,r_u)$. [step 3.2, F1, F2, F4, algebra]

4.3 The trapping set lies in the graph: let $y=(y_{-1},y_0)$ satisfy $\|F^n(y)-(r_u,r_u)\|_2\le\rho$ for every $n\ge0$, and write $F^n(y)=(\xi_{n-1},\xi_n)$ for $n\ge0$. Then $|\xi_n-r_u|\le\rho$ for every $n\ge-1$, so $\operatorname{sign}\xi_n=u$, and $|\xi_n|\ge|r_u|-\rho\ge\sqrt{101}-1-\tfrac18>9-\tfrac18=\tfrac{71}{8}>L$ because $\sqrt{101}>10$ and $\tfrac{71}{8}>\sqrt{74}$, the latter since $71^2=5041>4736=64\cdot74$. The orbit identity $\xi_{n+1}=\xi_n^2-a-\xi_{n-1}$ gives $a+\xi_{n-1}+\xi_{n+1}=\xi_n^2>0$, hence $$\xi_n=u\sqrt{a+\xi_{n-1}+\xi_{n+1}}=M^{\sqrt{\ }}_u(\xi_{n-1},\xi_{n+1})\qquad(n\ge0).$$ Put $v_n:=\xi_n-r_u$ for $n\ge0$. Then $v$ is bounded, $|v_n|\le\rho\le1/8$, and the displayed identity says exactly $(T_{y_{-1}}v)_n=0$ for all $n\ge0$; the half-tail $u(y_{-1})$ of step 3.2 satisfies $(T_{y_{-1}}u(y_{-1}))_n=0$ as well, and $|u_n(y_{-1})|\le(2/27)|y_{-1}-r_u|\le1/8$ since $|y_{-1}-r_u|\le\rho$. By the contraction estimate of [F7], $$\|v-u(y_{-1})\|_\infty=\|T_{y_{-1}}v-T_{y_{-1}}u(y_{-1})\|_\infty\le\frac1L\,\|v-u(y_{-1})\|_\infty,$$ and $1/L<1$, so $v=u(y_{-1})$; therefore $y=(y_{-1},\,r_u+u_0(y_{-1}))\in\Gamma$. [given, step 3.2, F1, F2, F6, F7, algebra]

5.1 Local stable set identified: steps 4.2 and 4.3 show that the set $\Gamma^s_\rho$ of clause 4 equals $\Gamma$; by [F2] and step 4.1 the curve $\Gamma$ is $C^1$ with tangent $(1,d_0)$ at the fixed point and $|d_0|\le c/(1-q)\le2/27<\tfrac12$, so the tangent lies in $C^s_{1/2}$. This is the stable half of clause 4. [step 4.1, step 4.2, step 4.3, F2, F4]

6.1 Local unstable set: by [F4], $F^{-1}=\Sigma F\Sigma$ with $\Sigma^2=\mathrm{id}$, and $\Sigma$ preserves the Euclidean norm because it permutes coordinates. Hence for every $y$ and $n\ge0$, $\|F^{-n}(y)-(r_u,r_u)\|_2=\|\Sigma F^n\Sigma(y)-(r_u,r_u)\|_2=\|F^n(\Sigma y)-(r_u,r_u)\|_2$ (using $\Sigma(r_u,r_u)=(r_u,r_u)$). Therefore the set of points whose backward orbit stays within distance $\rho$ of $(r_u,r_u)$ is exactly $\Sigma(\Gamma^s_\rho)=\Sigma(\Gamma)$. Its tangent at $(r_u,r_u)$ is $\Sigma(1,d_0)=(d_0,1)\in C^u_{1/2}$ because $\Sigma$ maps $C^s_{1/2}$ onto $C^u_{1/2}$ by [F4], and it is a $C^1$ embedded curve as the image of one under the linear homeomorphism $\Sigma$. This completes the proof of clause 4. [step 4.3, step 5.1, F4, F6] ∎


## Remarks

- Clause 4 identifies the local stable and unstable sets of the fixed points with the constructed graphs, which is the piece of the stable-manifold picture used by the transversality argument; no global stable-manifold theorem and no structural-stability theorem is invoked.

- The unstable curve is obtained from the stable construction by the exact reflection symmetry $\Sigma F\Sigma=F^{-1}$ of the quadratic family; this avoids a separate backward half-tail contraction.

- The aperture $1/2$ is the one used throughout; the derivative bound $|d_0|\le1/2$ is verified with the explicit constants $L=\sqrt{74}$ and is not claimed to be optimal.
