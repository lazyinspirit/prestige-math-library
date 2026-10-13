---
id: lem-tail-curve-tangents-and-homoclinic-transversality
kind: lemma
title: "The coded curves are genuine $C^1$ stable and unstable curves of $F$, with transverse intersection at every finite-word homoclinic point"
status: published
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
4. **(local stable and unstable sets at the fixed point)** put $\rho:=1/8$ and define $\|(x,y)\|_{\max}:=\max(|x|,|y|)$. Then the set of points $y=(y_{-1},y_0)\in\mathbb R^2$ whose forward orbit stays within max-norm distance $\rho$ of $(r_u,r_u)$,

$$\Gamma^s_\rho:=\{\,y:\ \bigl\|F^n(y)-(r_u,r_u)\bigr\|_{\max}\le\rho\ \text{for every }n\ge0\,\},$$

is exactly the graph $\{(b,\,r_u+u_0(b)):|b-r_u|\le\rho\}$ of the half-tail solution map $b\mapsto u_0(b)$ obtained from [F2] with the constant reference $y_n:=r_u$ and $b_*:=r_u$; in particular it is a $C^1$ embedded curve through $(r_u,r_u)$ whose tangent at the fixed point lies in $C^s_{1/2}$. With $\Sigma(x,y):=(y,x)$ the same statement holds in the unstable direction: a point has all its backward iterates $F^{-n}(y)$ within max-norm distance $\rho$ of $(r_u,r_u)$ if and only if it lies in $\Sigma(\Gamma^s_\rho)$, and $\Sigma(\Gamma^s_\rho)$ is a $C^1$ embedded curve through $(r_u,r_u)$ whose tangent lies in $C^u_{1/2}$.

## Facts & Assumptions

**Given:** The parameter $a\ge100$, the constants $R,L$, the coded sequences $x(s)$, the coding map $h$, the fixed points $r_u$, the square-root updates $M_u^{\sqrt{\ }}$, and a nonconstant code $s$ with $s_n=u$ for $|n|\ge N$.

[F1] Coding data ([[lem-coded-quadratic-recurrence-is-a-contraction]], [[lem-symbol-locality-gives-coding-continuity]], [[thm-henon-coded-invariant-set-is-conjugate-to-shift]]): $x_n(s)=M^{\sqrt{\ }}_{s_n}(x_{n-1}(s),x_{n+1}(s))$, $|x_n(s)|\in[L,R]$, and $F(h(s))=h(S_\pm s)$; moreover $|x_n(s)|\le\sqrt{a+2R}<R$ and $R-\sqrt{a+2R}=(4\sqrt a+3)/(R+\sqrt{a+2R})>(4\sqrt a+3)/(2R)>1/2$, since $R^2-(a+2R)=4\sqrt a+3$.

[F2] Weighted half-tail lemma ([[lem-weighted-tail-contractions-give-c-one-curves]]): for θ=1/2, q=c(θ+θ⁻¹)<1, a compact interval J, a reference half-orbit, and a local parameter interval I satisfying the lemma's radius and margin hypotheses, T_b is a contraction of the closed weighted ball of radius ρ̄ into itself for b∈I. Its unique fixed points u(b) are C¹ in b, satisfy ‖u(b)‖_θ≤c|b−b_*|/(1−q), and the phase curve b↦(b,y₀+u₀(b)) has tangent (1,d₀) with |d₀|≤c/(1−q); its forward orbit tracks the reference with deviations bounded by ‖u(b)‖_θ.

[F3] Homoclinic and constant-code data ([[lem-finite-word-deviations-give-homoclinic-orbits]]): the constant code $\bar u$ has $x_n(\bar u)=r_u$ with $r_u^2=a+2r_u$ and $\operatorname{sign}(r_u)=u$; for a finite-word code $s$, $F^n(h(s))\to(r_u,r_u)$ as $n\to\pm\infty$, and $h(s)\ne(r_u,r_u)$ when $s\ne\bar u$.

[F4] The reflection symmetry ([[def-stable-unstable-cones-and-line-slopes]], [[def-total-derivative-in-euclidean-space]]): with $\Sigma(x,y):=(y,x)$ one has $\Sigma^2=\mathrm{id}$, $\Sigma\circ F\circ\Sigma=F^{-1}$ (because $\Sigma F\Sigma(x,y)=\Sigma F(y,x)=\Sigma(x,x^2-a-y)=(x^2-a-y,x)=F^{-1}(x,y)$), and $\Sigma$ maps $C^s_{1/2}$ onto $C^u_{1/2}$.

[F5] Hyperbolic fixed points ([[def-stable-unstable-cones-and-line-slopes]], [[def-jacobian-matrix-and-gradient]], [[def-abs-value]], [[lem-of-abs-value]], [[thm-of-square-roots]]): $DF(x,y)=\begin{pmatrix}0&1\\-1&2y\end{pmatrix}$; the characteristic polynomial at $(r_u,r_u)$ is $\lambda^2-2r_u\lambda+1$, with roots $r_u\pm\sqrt{r_u^2-1}$. Here $r_+=1+\sqrt{a+1}>1$ and $r_-=1-\sqrt{a+1}<-1$, so the supplier's definition tests whether each eigenvalue has modulus different from $1$.

[F6] Convergence and continuity ([[def-metric-convergence]], [[def-metric-space]], [[def-continuity-real]], [[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): the definitions of convergence in $\mathbb R^2$, of $C^1$ curves on an interval, and of the stable and unstable sets of [[def-stable-unstable-cones-and-line-slopes]].

[F7] One-sided bounded sequences and the deviation operator ([[lem-bounded-bilateral-sequence-ball-is-complete]], clause 4, [[lem-finite-word-deviations-give-homoclinic-orbits]], [[def-abs-value]], [[lem-of-abs-value]], [[thm-of-square-roots]]): let $\rho=1/8$. For either sign, $|r_u|=\sqrt{a+1}-1$ or $1+\sqrt{a+1}$, so $|r_u|>9$ for $a\ge100$. If $|b-r_u|\le\rho$ and $v,w:\mathbb N\to\mathbb R$ have $\|v\|_\infty,\|w\|_\infty\le\rho$, then in the update $$(T_bv)_n:=M^{\sqrt{\ }}_u(r_u+v_{n-1},r_u+v_{n+1})-r_u,\qquad v_{-1}:=b-r_u,$$ every radicand lies in $[r_u^2-1/4,r_u^2+1/4]\subset(64,\infty)$, so $T_b$ is defined. For each $n\ge1$ the difference of two outputs is at most $(|v_{n-1}-w_{n-1}|+|v_{n+1}-w_{n+1}|)/16$; at $n=0$ it is at most $|v_1-w_1|/16$. Thus $\|T_bv-T_bw\|_\infty\le(1/8)\|v-w\|_\infty$.

## Proof

**Proof technique:** direct; solve the two slope-free half-tail problems for the square-root update, use the reflection symmetry for the unstable direction, and read off hyperbolicity and transversality.

1.1 Hyperbolicity: the characteristic polynomial in [F5] has the two real roots $r_u\pm\sqrt{r_u^2-1}$, whose product is $1$. If $u=+1$, then $r_u>1$, so $r_u+\sqrt{r_u^2-1}>1$ and $r_u-\sqrt{r_u^2-1}=1/(r_u+\sqrt{r_u^2-1})\in(0,1)$. If $u=-1$, write $r_u=-m$ with $m>1$; then $r_u-\sqrt{r_u^2-1}<-1$ and $r_u+\sqrt{r_u^2-1}=-1/(m+\sqrt{m^2-1})\in(-1,0)$. Thus each fixed point has one eigenvalue of modulus greater than $1$ and one of modulus less than $1$, proving clause 1 by the hyperbolicity definition of [[def-stable-unstable-cones-and-line-slopes]]. [given, F5, algebra]

2.1 Stable curve: apply [F2] with $\theta:=1/2$, $J:=[-R,R]$, $c:=1/16$, $q:=5/32$, the update $M^{\sqrt{\ }}_{s_n}$, reference $y_n:=x_n(s)$ $(n\ge0)$, $b_*:=x_{-1}(s)$, $\bar\rho:=1/2$, and $\delta_*:=1/4$. By [F1], $|y_n|\ge L>1/2$ and $|y_n|\le\sqrt{a+2R}<R-1/2$, so the margin condition holds; also $|b_*|<R-1/2$, so $[b_* -\delta_*,b_*+\delta_*]\subseteq J$, and $\delta_*<(1-q)\bar\rho/c$. The updates are $C^2$ on the open set $a+v+w>0$, containing $J\times J$, with first partials $u/(2\sqrt{a+v+w})$ and second partials $-u/(4(a+v+w)^{3/2})$. On $J\times J$ their first partials have absolute value at most $1/(2L)<1/16$, since $L\ge\sqrt{74}>8$, and $|M_u^{\sqrt{\ }}|\le\sqrt{a+2R}<R$. Thus their extensions, image and derivative bounds match every premise of [F2]. The recurrence holds by [F1]. Hence there is a $C^1$ curve $b\mapsto Z(b):=(b,x_0(b))$ through $Z(b_*)=(x_{-1}(s),x_0(s))=z_*$ with tangent $(1,d_0)$ and $|d_0|\le c/(1-q)=2/27<1/2$. Every point $Z(b)$ has forward orbit tracking the reference orbit $F^n(z_*)$, which converges to $(r_u,r_u)$ by [F3]; hence $Z(b)$ lies in $W^s(r_u,r_u)$ and its tangent lies in $C^s_{1/2}$. This proves clause 2. [given, step 1.1, F1, F2, F3, algebra]

3.1 Unstable curve: put $w:=\Sigma(z_*)=(x_0(s),x_{-1}(s))$ and let $y_n:=x_{-n-1}(s)$ for $n\ge0$, with boundary value $b_*:=x_0(s)$. By the recurrence of [F1], this is a reference half-orbit for the square-root update, and $|y_n|\ge L>1/2$, $|y_n|\le\sqrt{a+2R}<R-1/2$. Apply [F2] with $\theta=1/2$, $J=[-R,R]$, $c=1/16$, $q=5/32$, $\bar\rho=1/2$, and $\delta_*=1/4$; the margin and parameter-interval conditions hold by [F1]. The resulting $C^1$ curve through $w$ has tangent $(1,d_0)$ with $|d_0|\le2/27$, and its forward orbits track that of $w$: by [F4], $F^n(w)=\Sigma(F^{-n}(z_*))$, which converges to $(r_u,r_u)$ by [F3]. Reflecting the curve by $\Sigma$ gives a $C^1$ curve $\gamma_u$ through $z_*$, tangent $(d_0,1)\in C^u_{1/2}$, whose points lie in $W^u(r_u,r_u)$. This proves clause 3. [given, step 2.1, F1, F2, F3, F4, algebra]

3.2 Local stable set: apply [F2] with $\theta=1/2$, $J=[-R,R]$, $c=1/16$, $q=5/32$, $\bar\rho=1/8$, $\delta_*=1/4$, the constant symbols $s_n:=u$, constant reference $y_n:=r_u$, and $b_*:=r_u$. The reference satisfies the recurrence because $r_u^2=a+2r_u$ and $\operatorname{sign}(r_u)=u$, so $r_u=M^{\sqrt{\ }}_u(r_u,r_u)$ by [F3]. By [F7], $|r_u|>9$, and $|r_u|\le\sqrt{a+2R}<R-1/2$, so the reference-margin condition and $[r_u-\delta_*,r_u+\delta_*]\subseteq J$ hold; also $\delta_*<(1-q)\bar\rho/c=27/16$. Hence there is a $C^1$ map $b\mapsto u(b)$ with $\|u(b)\|_\theta\le(c/(1-q))|b-r_u|=(2/27)|b-r_u|$. Define $\Gamma:=\{(b,r_u+u_0(b)):|b-r_u|\le\rho\}$ with $\rho:=1/8$; this closed parameter interval lies inside $I$ because $\delta_*=1/4$. [given, step 1.1, step 2.1, F1, F2, F4]

4.1 Transversality: by steps 2.1 and 3.1 the tangent of $\gamma_s$ at $z_*$ lies in $C^s_{1/2}$ and that of $\gamma_u$ in $C^u_{1/2}$; since $C^s_{1/2}\cap C^u_{1/2}=\{0\}$ ([F4], [[def-stable-unstable-cones-and-line-slopes]]) the two tangent lines are distinct, so the two curves cross transversely at $z_*$. This is the transversality assertion of clause 3. [step 2.1, step 3.1, F4]

4.2 The graph lies in the trapping set: let $|b-r_u|\le\rho$ and put $x_{-1}:=b$, $x_n:=r_u+u_n(b)$ for $n\ge0$. By the fixed-point equation of [F2], the sequence satisfies $x_n=M^{\sqrt{\ }}_u(x_{n-1},x_{n+1})$ for every $n\ge0$, so $F(x_{n-1},x_n)=(x_n,x_{n+1})$ by [F1] and $F^n(b,x_0)=(x_{n-1},x_n)$ for all $n\ge0$. Also $|x_{-1}-r_u|=|b-r_u|\le\rho$ and $|x_n-r_u|\le\|u(b)\|_\theta\le(2/27)|b-r_u|\le\rho$ for $n\ge0$. Thus every point of $\Gamma$ has all forward iterates within max-norm distance $\rho$ of $(r_u,r_u)$. [step 3.2, F1, F2, F4, algebra]

4.3 The trapping set lies in the graph: let $y=(y_{-1},y_0)$ satisfy $\|F^n(y)-(r_u,r_u)\|_{\max}\le\rho$ for every $n\ge0$, and write $F^n(y)=(\xi_{n-1},\xi_n)$. Then $|\xi_n-r_u|\le\rho$ for every $n\ge-1$. Since $|r_u|>9$ by [F7], each $\xi_n$ has sign $u$ and $|\xi_n|>8$. The orbit identity $\xi_{n+1}=\xi_n^2-a-\xi_{n-1}$ gives $a+\xi_{n-1}+\xi_{n+1}=\xi_n^2>64$, so for $n\ge0$ one has $\xi_n=u\sqrt{a+\xi_{n-1}+\xi_{n+1}}=M^{\sqrt{\ }}_u(\xi_{n-1},\xi_{n+1})$. Put $v_n:=\xi_n-r_u$ for $n\ge0$ and $b:=y_{-1}$. Then $\|v\|_\infty\le\rho$, $|b-r_u|\le\rho$, and the displayed identity says exactly $(T_bv)_n=v_n$ for all $n\ge0$. The weighted solution $u(b)$ from step 3.2 also satisfies $T_bu(b)=u(b)$ and $\|u(b)\|_\infty\le\|u(b)\|_\theta\le(2/27)|b-r_u|<\rho$. By [F7], $\|v-u(b)\|_\infty=\|T_bv-T_bu(b)\|_\infty\le(1/8)\|v-u(b)\|_\infty$, so $v=u(b)$ and $y=(y_{-1},r_u+u_0(y_{-1}))\in\Gamma$. [given, step 3.2, F1, F2, F6, F7, algebra]

5.1 Local stable set identified: steps 4.2 and 4.3 show that the set $\Gamma^s_\rho$ of clause 4 equals $\Gamma$; by [F2] and step 4.1 the curve $\Gamma$ is $C^1$ with tangent $(1,d_0)$ at the fixed point and $|d_0|\le c/(1-q)\le2/27<\tfrac12$, so the tangent lies in $C^s_{1/2}$. This is the stable half of clause 4. [step 4.1, step 4.2, step 4.3, F2, F4]

6.1 Local unstable set: by [F4], $F^{-1}=\Sigma F\Sigma$ with $\Sigma^2=\mathrm{id}$, and $\Sigma$ preserves the max norm because it permutes coordinates. Hence for every $y$ and $n\ge0$, $\|F^{-n}(y)-(r_u,r_u)\|_{\max}=\|F^n(\Sigma y)-(r_u,r_u)\|_{\max}$. Therefore the set of points whose backward orbit stays within max-norm distance $\rho$ of $(r_u,r_u)$ is exactly $\Sigma(\Gamma^s_\rho)=\Sigma(\Gamma)$. Its tangent at $(r_u,r_u)$ is $\Sigma(1,d_0)=(d_0,1)\in C^u_{1/2}$ because $\Sigma$ maps $C^s_{1/2}$ onto $C^u_{1/2}$ by [F4], and it is a $C^1$ embedded curve as the image under a linear homeomorphism. This completes the proof of clause 4. [step 4.3, step 5.1, F4, F6] ∎


## Remarks

- Clause 4 identifies the local stable and unstable sets of the fixed points with the constructed graphs, which is the piece of the stable-manifold picture used by the transversality argument; no global stable-manifold theorem and no structural-stability theorem is invoked.

- The unstable curve is obtained from the stable construction by the exact reflection symmetry $\Sigma F\Sigma=F^{-1}$ of the quadratic family; this avoids a separate backward half-tail contraction.

- The aperture $1/2$ is the one used throughout; the derivative bound $|d_0|\le1/2$ is verified with the explicit bound $L\ge\sqrt{74}$ and is not claimed to be optimal.
