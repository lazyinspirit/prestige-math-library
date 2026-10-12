---
id: thm-cm-burgers-riemann-shock-and-rarefaction
kind: theorem
title: "Riemann shock and rarefaction waves for $u_t+(u^2/2)_x=0$ are weak solutions, and the shock is an entropy solution"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-scalar-conservation-law-weak-and-entropy-solution, def-bounded-piecewise-c-one-euclidean-domain, def-surface-integral-on-a-compact-c-one-hypersurface, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, def-ck-euclidean-maps-and-diffeomorphisms, def-continuity-real, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-ftc-second-part, def-oriented-integral, def-metric-ball, thm-extreme-value-metric, thm-heine-borel-rn, def-interval]
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
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "L. C. Evans, Entropy and Partial Differential Equations (lecture notes), Chapter V, Section B (shocks, rarefactions and the entropy condition for a single conservation law)"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics (lecture notes, TUM, Winter term 2021/22), Chapter 5 (the Riemann problem for a scalar conservation law)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"

  precheck: pass
---

## Statement

Let $F(u)=\tfrac12u^2$ and use the weak and entropy formulations of [[def-cm-scalar-conservation-law-weak-and-entropy-solution]].

**(a) Shock.** Let $u_L>u_R$, put $s:=(u_L+u_R)/2$ and

$$u(t,x):=\begin{cases}u_L,&x<st,\\ u_R,&x>st,\end{cases}\qquad(t>0),$$

with Riemann initial data $f$ equal to $u_L$ for $x<0$ and $u_R$ for $x>0$. Then $u$ is a weak solution of $u_t+(F(u))_x=0$ with initial data $f$.

**(b) Entropy of the shock.** For every $k\in\mathbb R$, set $\eta_k(u):=|u-k|$ and $q_k(u):=\operatorname{sign}(u-k)\,(u^2-k^2)/2$. Then the entropy inequality (E) of [[def-cm-scalar-conservation-law-weak-and-entropy-solution]] holds for the pair $(\eta_k,q_k)$, with interface coefficient

$$s\,[\eta_k]-[q_k]=-(k-u_L)(k-u_R)\ \ge\ 0 ,$$

where $[h]:=h(u_R)-h(u_L)$. Hence the shock satisfies every stated entropy inequality of this family.

**(c) Rarefaction.** Let $u_L<u_R$ and define

$$u(t,x):=\begin{cases}u_L,&x\le u_Lt,\\ x/t,&u_Lt<x<u_Rt,\\ u_R,&x\ge u_Rt,\end{cases}\qquad(t>0).$$

Then $u$ is continuous on $(0,\infty)\times\mathbb R$, is a weak solution of $u_t+(F(u))_x=0$ with the Riemann initial data, and satisfies the entropy inequality (E) for every pair $(\eta_k,q_k)$, $k\in\mathbb R$ (indeed with equality).

## Facts & Assumptions

**Given:** The reals $u_L\ne u_R$; the constructions above.

[F1] Interface computation. Let $s\in\mathbb R$ and let $u$ be bounded, continuous ([[def-continuity-real]]) on the two open half-planes $\{x-st<0\}$ and $\{x-st>0\}$ with $C^1$ extensions to each closed half-plane, and suppose $u_t+(F(u))_x=0$ classically on each open half-plane. Let $f$ be the initial trace. Then for every test function $\varphi$,

$$\int_0^\infty\!\!\int_{\mathbb R}\bigl[u\varphi_t+F(u)\varphi_x\bigr]dx\,dt+\int_{\mathbb R}f(x)\varphi(0,x)\,dx=\int_{\mathbb R}\varphi(t,st)\bigl(s[u]-[F(u)]\bigr)dt ,$$

with $[h]:=h_+-h_-$ the jump from the left trace to the right trace across the line $x=st$. **Proof.** Put $J:=(u\varphi,F(u)\varphi)$ on $(0,\infty)\times\mathbb R$, and let $D_\pm:=\{(t,x):0<t<T,\ \pm(x-st)>0,\ |x|<R\}$ for $T,R$ large enough that the support of $\varphi$ is interior. These are bounded piecewise $C^1$ domains, and $\operatorname{div}J=u\varphi_t+F(u)\varphi_x$ on each (the classical equation kills the derivative of $u$). The divergence theorem on a plane polygon ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], [[def-bounded-piecewise-c-one-euclidean-domain]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]) gives $\int\int_{D_\pm}\operatorname{div}J=\int_{\partial D_\pm}J\cdot\nu\,dS$. The outward normals are $(-1,0)$ on the bottom segments $\{t=0\}$, $(0,-1)$ or $(0,1)$ on the far vertical sides (where $\varphi=0$), and $\pm(-s,1)/\sqrt{1+s^2}$ on the interface. Summing the two identities, the vertical sides contribute $0$, the bottom segments contribute $-\int f\varphi(0,x)dx$ because $J\cdot(-1,0)=-u\varphi$, and the interface contributes $\int_{\mathbb R}\varphi(t,st)\,(s\,[u]-[F(u)])dt$: indeed, with $dS=\sqrt{1+s^2}\,dt$, $J\cdot\nu_+=[su_+-F(u_+)]\varphi/\sqrt{1+s^2}$ and $J\cdot\nu_-=[-su_-+F(u_-)]\varphi/\sqrt{1+s^2}$. Rearranging gives the displayed identity. ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integral-over-a-measurable-set]].)

[F2] If a continuous function $h$ on $[0,\infty)$ satisfies $\int_0^\infty h(t)\varphi(t,st)dt=0$ for every test function $\varphi$, then $h=0$: the restrictions $t\mapsto\varphi(t,st)$ of test functions contain every compactly supported $C^1$ function of $t$. [Given directly: for any compactly supported $C^1$ $\psi(t)$ take $\varphi(t,x)=\psi(t)\chi(x-st)$ with a bump $\chi\in C_c^1(\mathbb R)$, $\chi(0)=1$.]

[F3] For $u(t,x)=x/t$ on the fan $u_Lt<x<u_Rt$: $u_t=-x/t^2$, $u_x=1/t$, hence $u_t+uu_x=0$; the constant branches satisfy the equation trivially. The pair $(\eta_k,q_k)$ has $q_k'=u\eta_k'$ off $u=k$; on the fan $u\ne k$ except on one line, and $\eta_k\circ u$, $q_k\circ u$ are Lipschitz, so the classical chain rule holds off that line and the distribution has no singular part there ([[def-cm-scalar-conservation-law-weak-and-entropy-solution]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct; the two profiles are piecewise $C^1$ with a linear interface, so [F1] computes their weak residual, and the entropy residual is evaluated in closed form.

1.1 On each of the two open regions $x<st$ and $x>st$ the function $u$ of (a) is constant, so the equation holds classically there. The traces across $x=st$ are $u_-=u_L$ (left) and $u_+=u_R$ (right), and the initial trace is the Riemann data $f$. By [F1], the weak residual of (a) integrates $\varphi(t,st)$ against $$s[u]-[F(u)]=s(u_R-u_L)-\tfrac12(u_R^2-u_L^2)=(u_R-u_L)\Bigl(s-\frac{u_L+u_R}{2}\Bigr)=0 .$$ Hence the weak identity (W) holds for every test function, and $u$ is a weak solution. [given, F1, algebra]

1.2 For (c), $u$ is continuous across $x=u_Lt$ and $x=u_Rt$ (the fan value $x/t$ tends to $u_L$ and $u_R$ at the two interfaces), and by [F3] the equation holds classically in the three open regions and at the interfaces the classical equation holds with continuous traces. Applying [F1] on each interface with $s=u_L$ and $s=u_R$, the interface coefficients vanish because $[u]=0$ and $[F(u)]=0$ act on continuous traces: separating the plane by each line and summing, the total weak residual is $0$. Hence $u$ is a weak solution. [given, F3, F1, algebra]

2.1 For (b), apply the same computation to the pair $(\eta_k,q_k)$ in place of $(u,F(u))$: on each open region the function $u$ is constant, so $(\eta_k(u))_t+(q_k(u))_x=0$ classically there, and [F1] gives $$\int_0^\infty\!\!\int_{\mathbb R}\bigl[\eta_k\varphi_t+q_k\varphi_x\bigr]+\int_{\mathbb R}\eta_k(f)\varphi(0)=\int_{\mathbb R}\varphi(t,st)\bigl(s[\eta_k]-[q_k]\bigr)dt .$$ For $u_R<k<u_L$ a direct evaluation gives $[\eta_k]=2k-u_L-u_R$ and $[q_k]=(2k^2-u_L^2-u_R^2)/2$, whence $s[\eta_k]-[q_k]=-(k-u_L)(k-u_R)\ge0$. For $k\ge u_L$ or $k\le u_R$ the same expressions give $s[\eta_k]-[q_k]=0$. In every case the right-hand side is $\ge0$ for nonnegative test functions, which is (E). [given, step 1.1, F1, algebra]

3.1 For the entropy claim in (c), repeat step 1.2 with $(\eta_k,q_k)$: the traces of $\eta_k(u)$ and $q_k(u)$ are continuous across both interfaces (composition of continuous maps), so the interface coefficients $s[\eta_k]-[q_k]$ vanish and the entropy identity holds with equality for every test function, in particular for nonnegative ones. This proves (E) in the rarefaction case. [step 1.2, F1, F3, algebra] ∎

## Remarks

- Parts (a) and (c) construct two explicit weak solutions of the same conservation law with different jump behaviour: the shock is discontinuous and satisfies the entropy inequalities of (b), while the rarefaction is continuous and satisfies them with equality. The theorem does not claim uniqueness or that all weak solutions are entropy solutions; a general existence or contraction theory is not part of this statement.

- The entropy family $\eta_k$ is only Lipschitz at $u=k$; the computation is carried out at the level of continuous piecewise $C^1$ functions, for which the interface formula [F1] applies verbatim. The Riemann initial data are bounded and Borel, so the weak formulation is in force.
