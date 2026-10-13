---
id: thm-cm-burgers-riemann-shock-and-rarefaction
kind: theorem
title: "Riemann shock and rarefaction waves for $u_t+(u^2/2)_x=0$ are weak
  solutions, and the shock is an entropy solution"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps:
  - def-cm-scalar-conservation-law-weak-and-entropy-solution
  - def-bounded-piecewise-c-one-euclidean-domain
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-continuity-real
  - def-integral-over-a-measurable-set
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-ftc-second-part
  - def-oriented-integral
  - def-metric-ball
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - def-interval
  - def-countable-choice
dependency_roles:
  def-cm-scalar-conservation-law-weak-and-entropy-solution: mathematical-premise
  def-bounded-piecewise-c-one-euclidean-domain: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-continuity-real: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "L. C. Evans, Entropy and Partial Differential Equations (lecture notes),
        Chapter V, Section B (shocks, rarefactions and the entropy condition for
        a single conservation law)"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics
        (lecture notes, TUM, Winter term 2021/22), Chapter 5 (the Riemann
        problem for a scalar conservation law)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"

  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the Lebesgue weak formulation and the imported divergence theorem.

Let $F(u)=\tfrac12u^2$ and use the weak and entropy formulations of [[def-cm-scalar-conservation-law-weak-and-entropy-solution]].

**(a) Shock.** Let $u_L>u_R$, put $s:=(u_L+u_R)/2$ and

$$u(t,x):=\begin{cases}u_L,&x<st,\\ u_R,&x\ge st,\end{cases}\qquad(t>0),$$

with Riemann initial data $f$ equal to $u_L$ for $x<0$ and $u_R$ for $x\ge0$. Values on the shock line or at the single initial jump point do not change the integral identities. Then $u$ is a weak solution of $u_t+(F(u))_x=0$ with initial data $f$.

**(b) Entropy of the shock.** For every $k\in\mathbb R$, set $\eta_k(u):=|u-k|$ and $q_k(u):=\operatorname{sgn}(u-k)\,(u^2-k^2)/2$ for $u\ne k$, with $q_k(k):=0$. Then the entropy inequality (E) of [[def-cm-scalar-conservation-law-weak-and-entropy-solution]] holds for the pair $(\eta_k,q_k)$, with interface coefficient

$$s\,[\eta_k]-[q_k]=\begin{cases}-(k-u_L)(k-u_R),&u_R\le k\le u_L,\\0,&k\notin[u_R,u_L],\end{cases}\quad\ge0 ,$$

where $[h]:=h(u_R)-h(u_L)$. The shock also satisfies (E) for every convex $C^1$ entropy pair of the Definition, and is an entropy solution in its full declared sense.

**(c) Rarefaction.** Let $u_L<u_R$ and define

$$u(t,x):=\begin{cases}u_L,&x\le u_Lt,\\ x/t,&u_Lt<x<u_Rt,\\ u_R,&x\ge u_Rt,\end{cases}\qquad(t>0).$$

Then $u$ is continuous on $(0,\infty)\times\mathbb R$, is a weak solution of $u_t+(F(u))_x=0$ with the Riemann initial data, and satisfies the entropy inequality (E) for every convex $C^1$ entropy pair and for every pair $(\eta_k,q_k)$, $k\in\mathbb R$ (indeed with equality), and is an entropy solution.

## Facts & Assumptions

**Given:** Countable choice, the reals $u_L\ne u_R$; the constructions above.

[F1] Interface computation. Let $s\in\mathbb R$ and let $u$ be bounded, continuous ([[def-continuity-real]]) on the two open half-planes $\{x-st<0\}$ and $\{x-st>0\}$ with $C^1$ extensions to each closed half-plane, and suppose $u_t+(F(u))_x=0$ classically on each open half-plane. Let $f$ be the initial trace. Then for every test function $\varphi$,

$$\int_0^\infty\!\!\int_{\mathbb R}\bigl[u\varphi_t+F(u)\varphi_x\bigr]dx\,dt+\int_{\mathbb R}f(x)\varphi(0,x)\,dx=\int_0^\infty\varphi(t,st)\bigl(s[u]-[F(u)]\bigr)dt ,$$

with $[h]:=h_+-h_-$ the jump from the left trace to the right trace across the line $x=st$. **Proof.** Put $J:=(u\varphi,F(u)\varphi)$ on $(0,\infty)\times\mathbb R$, and let $D_\pm:=\{(t,x):0<t<T,\ \pm(x-st)>0,\ |x|<R\}$ for $T,R$ large enough that the support of $\varphi$ avoids the top and lateral boundaries; it may meet the initial boundary. These are bounded piecewise $C^1$ domains, and $\operatorname{div}J=u\varphi_t+F(u)\varphi_x$ on each (the classical equation kills the derivative of $u$). The divergence theorem on a plane polygon ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], [[def-bounded-piecewise-c-one-euclidean-domain]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]) gives $\int\int_{D_\pm}\operatorname{div}J=\int_{\partial D_\pm}J\cdot\nu\,dS$. The outward normals are $(-1,0)$ on the bottom segments $\{t=0\}$, $(0,-1)$ or $(0,1)$ on the far vertical sides (where $\varphi=0$), $ (s,-1)/\sqrt{1+s^2}$ on the interface from $D_+$ and $(-s,1)/\sqrt{1+s^2}$ from $D_-$. Summing the two identities, the vertical sides contribute $0$, the bottom segments contribute $-\int f\varphi(0,x)dx$ because $J\cdot(-1,0)=-u\varphi$, and the interface contributes $\int_0^\infty\varphi(t,st)\,(s\,[u]-[F(u)])dt$: indeed, with $dS=\sqrt{1+s^2}\,dt$, $J\cdot\nu_+=[su_+-F(u_+)]\varphi/\sqrt{1+s^2}$ and $J\cdot\nu_-=[-su_-+F(u_-)]\varphi/\sqrt{1+s^2}$. Rearranging gives the displayed identity. ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integral-over-a-measurable-set]].)

[F2] If a continuous function $h$ on $[0,\infty)$ satisfies $\int_0^\infty h(t)\varphi(t,st)dt=0$ for every test function $\varphi$, then $h=0$: the restrictions $t\mapsto\varphi(t,st)$ of test functions contain every compactly supported $C^1$ function of $t$. [Given directly: for any compactly supported $C^1$ $\psi(t)$ take $\varphi(t,x)=\psi(t)\chi(x-st)$ with a bump $\chi\in C_c^1(\mathbb R)$, $\chi(0)=1$.]

[F3] For $u(t,x)=x/t$ on the fan $u_Lt<x<u_Rt$: $u_t=-x/t^2$, $u_x=1/t$, hence $u_t+uu_x=0$; the constant branches satisfy the equation trivially. The pair $(\eta_k,q_k)$ has $q_k'=u\eta_k'$ off $u=k$; on a strip $t\ge\varepsilon>0$, $u\ne k$ except on one line, and $\eta_k\circ u$, $q_k\circ u$ are piecewise $C^1$ and Lipschitz, so the classical chain rule holds off that line and the distribution has no singular part there ([[def-cm-scalar-conservation-law-weak-and-entropy-solution]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct; the two profiles are piecewise $C^1$ with a linear interface, so [F1] computes their weak residual, and the entropy residual is evaluated in closed form.

1.1 On each of the two open regions $x<st$ and $x>st$ the function $u$ of (a) is constant, so the equation holds classically there. The traces across $x=st$ are $u_-=u_L$ (left) and $u_+=u_R$ (right), and the initial trace is the Riemann data $f$. By [F1], the weak residual of (a) integrates $\varphi(t,st)$ against $$s[u]-[F(u)]=s(u_R-u_L)-\tfrac12(u_R^2-u_L^2)=(u_R-u_L)\Bigl(s-\frac{u_L+u_R}{2}\Bigr)=0 .$$ Hence the weak identity (W) holds for every test function, and $u$ is a weak solution. [given, F1, algebra]

1.2 For (c), first integrate on $\varepsilon<t<T$, splitting the truncated domain into the left constant region, the fan, and the right constant region, with $T$ and the spatial cutoff outside the support of the test function. There $u=x/t$ is $C^1$ on the closed fan and satisfies $u_t+uu_x=0$ by [F3]; the constant pieces do too. Apply the divergence theorem to each piece. On a shared fan edge the outward normals are opposite and the traces of $u$, $F(u)$ and $\varphi$ agree, so the two boundary integrals cancel. The bottom term is $-\int u(\varepsilon,x)\varphi(\varepsilon,x)\,dx$. As $\varepsilon\downarrow0$, $u(\varepsilon,x)$ differs from $f(x)$ only between the rays $x=u_L\varepsilon$ and $x=u_R\varepsilon$, an interval of length $(u_R-u_L)\varepsilon$, and it is uniformly bounded by $\max(|u_L|,|u_R|)$. Thus the difference in the bottom integral tends to zero; continuity of $\varphi$ on its compact support replaces $\varphi(\varepsilon,x)$ by $\varphi(0,x)$. The integrands over $0<t<\varepsilon$ are bounded on a fixed compact spatial support, so their integrals also tend to zero. Taking the limit gives (W) with the actual initial term. [given, F1, F3, algebra]

2.1 For (b), apply the same computation to the pair $(\eta_k,q_k)$ in place of $(u,F(u))$: on each open region the function $u$ is constant, so $(\eta_k(u))_t+(q_k(u))_x=0$ classically there, and [F1] gives $$\int_0^\infty\!\!\int_{\mathbb R}\bigl[\eta_k\varphi_t+q_k\varphi_x\bigr]+\int_{\mathbb R}\eta_k(f)\varphi(0)=\int_0^\infty\varphi(t,st)\bigl(s[\eta_k]-[q_k]\bigr)dt .$$ For $u_R<k<u_L$ a direct evaluation gives $[\eta_k]=2k-u_L-u_R$ and $[q_k]=(2k^2-u_L^2-u_R^2)/2$, whence $s[\eta_k]-[q_k]=-(k-u_L)(k-u_R)\ge0$. For $k\ge u_L$ or $k\le u_R$ the same expressions give $s[\eta_k]-[q_k]=0$. In every case the right-hand side is $\ge0$ for nonnegative test functions, which is (E). [given, step 1.1, F1, algebra]

3.1 Let $(\eta,q)$ be any convex $C^1$ entropy pair. On either side of the shock the entropy residual vanishes classically, and [F1] applied to $(\eta(u),q(u))$ gives the residual coefficient $$s[\eta]-[q]=\int_{u_R}^{u_L}(z-s)\eta'(z)\,dz=\int_{u_R}^{u_L}(z-s)\bigl(\eta'(z)-\eta'(s)\bigr)\,dz\ge0.$$ The middle equality uses $s=(u_L+u_R)/2$, hence $\int_{u_R}^{u_L}(z-s)dz=0$. For any $a<b$, convexity gives $\eta(a+h)\le(1-h/(b-a))\eta(a)+(h/(b-a))\eta(b)$ for $0<h<b-a$; dividing by $h$ after subtracting $\eta(a)$ and taking $h\downarrow0$ yields $\eta'(a)\le(\eta(b)-\eta(a))/(b-a)$. Applying convexity to $b-h$ and taking the same limit gives $(\eta(b)-\eta(a))/(b-a)\le\eta'(b)$. Thus $\eta'$ is nondecreasing, so $(z-s)(\eta'(z)-\eta'(s))\ge0$ for every $z$. This proves (E) for every declared convex $C^1$ pair, in addition to the Kružkov computation of step 2.1. [step 1.1, step 2.1, F1, algebra]

4.1 On the rarefaction fan every $C^1$ entropy pair has $\partial_t\eta(u)+\partial_xq(u)=\eta'(u)(u_t+uu_x)=0$; its traces are continuous across the fan edges. For a Kružkov pair split additionally along $x=kt$ when that line lies inside the fan; the two entropy and flux traces agree there too. Apply the truncated-domain argument of step 1.2 to these entropy fields. Since $u$ ranges in the compact interval $[u_L,u_R]$, $\eta(u)$ and $q(u)$ are bounded and the initial difference is supported on an interval of length $(u_R-u_L)\varepsilon$; the same limit establishes (E) with equality and its nonzero initial trace for every stated pair. Both profiles are therefore entropy solutions for the full class of the Definition, with the asserted additional Kružkov identities. [step 1.2, step 3.1, F1, F3, algebra] ∎

## Remarks

- Parts (a) and (c) construct two explicit weak solutions of the same conservation law with different jump behaviour: the shock is discontinuous and satisfies the entropy inequalities of (b), while the rarefaction is continuous and satisfies them with equality. The theorem does not claim uniqueness or that all weak solutions are entropy solutions; a general existence or contraction theory is not part of this statement.

- The entropy family $\eta_k$ is only Lipschitz at $u=k$; the computation is carried out at the level of continuous piecewise $C^1$ functions, for which the interface formula [F1] applies verbatim. The Riemann initial data are bounded and Borel, so the weak formulation is in force.
