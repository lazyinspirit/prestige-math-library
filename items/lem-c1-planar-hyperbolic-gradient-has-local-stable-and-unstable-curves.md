---
id: lem-c1-planar-hyperbolic-gradient-has-local-stable-and-unstable-curves
kind: lemma
title: "A C1 planar gradient at a nondegenerate saddle has local stable and unstable curves"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-c1-euclidean-maximal-flow-with-c2-upgrade, cor-primitives-of-a-continuous-function, thm-banach-fixed-point, lem-neumann-series-and-small-perturbations-of-bounded-inverses, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, cor-mean-value-theorem, thm-heine-cantor-metric, thm-uniform-limit-continuous-real-functions, thm-euclidean-space-complete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 2
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
      locator: "\u00a77.3 (planar systems near a critical point) and \u00a79.2 (the stable/unstable manifold construction); the fixed-point and regularity details are supplied locally"
---

## Statement

Let $u$ be of class $C^2$ near a point $p$ of the Euclidean plane
$\mathbb R^2$, and suppose $p$ is a **nondegenerate saddle** of $u$:
$\nabla u(p)=0$ and $D^2u(p)$ is invertible with one positive and one negative
eigenvalue. Then the $C^1$ field $X:=-\nabla u$ has a local **stable curve**
$S$ and a local **unstable curve** $U$ through $p$: both are $C^1$ embedded
curves containing $p$, the tangent line $T_pS$ is the positive eigenline of
$D^2u(p)$ and $T_pU$ is its negative eigenline, and each of $S\setminus\{p\}$
and $U\setminus\{p\}$ consists of exactly two half-trajectories of $X$. There
is a neighbourhood $V$ of $p$ such that every trajectory of $X$ that is defined
and stays in $V$ for all $t\ge0$ lies on $S$, and every trajectory that is
defined and stays in $V$ for all $t\le0$ lies on $U$. The convergence to $p$
along $S$ is exponentially fast as $t\to+\infty$ and the convergence along $U$
is exponentially fast as $t\to-\infty$: there are constants $\delta,C,\beta>0$
with $|\Phi_t(x)-p|\le Ce^{-\beta t}|x-p|$ for all $x\in S$ with
$|x-p|<\delta$ and all $t\ge0$, and $|\Phi_t(x)-p|\le Ce^{\beta t}|x-p|$ for
all $x\in U$ with $|x-p|<\delta$ and all $t\le0$. No choice principle is used.

## Facts & Assumptions

**Given:** A $C^2$ function $u$ near a point $p\in\mathbb R^2$ with $\nabla u(p)=0$ and $D^2u(p)$ invertible with one positive and one negative eigenvalue.

[F1] For a $C^1$ field $Y$ on an open set of $\mathbb R^n$ there is a unique maximal jointly $C^1$ flow $\Phi$ with $\partial_t\Phi=Y(\Phi)$, trajectories of $Y$ are $C^1$ in time, and two trajectories through the same point agree on the common part of their time intervals ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F2] A contraction of a nonempty complete metric space has a unique fixed point ([[thm-banach-fixed-point]]).

[F3] If $T$ is a bounded linear operator on a Banach space with $\lVert T\rVert<1$, then $I-T$ is invertible with $(I-T)^{-1}=\sum_{n\ge0}T^n$ and $\lVert(I-T)^{-1}\rVert\le(1-\lVert T\rVert)^{-1}$, and $S\mapsto(I-S)^{-1}$ is continuous at every such $S$ ([[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]).

[F4] A pointwise limit of continuous real functions that is uniform on the domain is continuous ([[thm-uniform-limit-continuous-real-functions]]).

[F5] $\mathbb R^n$ with the Euclidean metric is complete ([[thm-euclidean-space-complete]]).

[F6] For real $a<b$, a real function continuous on $[a,b]$ and differentiable on $(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$ ([[cor-mean-value-theorem]]).

[F7] A continuous map from a nonempty compact space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[F8] A real symmetric endomorphism of $\mathbb R^n$ has an orthonormal basis of eigenvectors with real eigenvalues ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F9] Every continuous real function on an order-convex interval with at least two elements has a primitive there, and primitives differ by constants ([[cor-primitives-of-a-continuous-function]]).



## Proof

**Proof technique:** direct.

1.1 Translating the source point to the origin and subtracting the constant $u(p)$, assume $p=0$, $u(0)=0$ and $\nabla u(0)=0$. Put $H:=D^2u(0)$ and $A:=-H$. By [F8] the symmetric matrix $A$ has an orthonormal basis of eigenvectors; its eigenvalues are $-a$ and $b$ for some $a,b>0$, because $H$ has one negative and one positive eigenvalue. Let $E^s$ be the eigenline of $-a$ and $E^u$ the eigenline of $b$, and let $P_s,P_u$ be the orthogonal projections onto them, so $P_s+P_u=I$, $e^{tA}=e^{-at}P_s+e^{bt}P_u$, and for $s\ge t\ge0$ one has $|e^{(t-s)A}P_u|\le e^{-b(s-t)}$ while $|e^{tA}P_s|\le e^{-at}$. Fix $\beta$ with $0<\beta<\min(a,b)$. Since $\nabla u$ is $C^1$ with derivative $H$ at the origin, the field $X:=-\nabla u$ has the form $X(x)=Ax+R(x)$ with $R$ of class $C^1$, $R(0)=0$ and $DR(0)=0$. [given, F8]

2.1 **A compactly supported perturbation of $R$ with small derivative.** Let $\varepsilon>0$ (to be fixed below). Choose $\rho>0$ with $|DR(x)|\le \varepsilon$ for $|x|\le 2\rho$; this is possible because $DR(0)=0$ and $DR$ is continuous. Choose a smooth cutoff $\chi:\mathbb R^2\to[0,1]$ with $\chi=1$ on the ball $B_\rho$ and $\chi=0$ outside $B_{2\rho}$, and put $\widetilde R:=\chi R$. On $B_\rho$ one has $\widetilde R=R$, and $\widetilde R(0)=0$ and $D\widetilde R=0$ there at the origin. On the support of $D\chi$, which is a compact subset of $B_{2\rho}\setminus B_\rho$, the mean value theorem [F6] gives $|R(x)|\le\varepsilon|x|\le2\varepsilon\rho$, while $|D\chi|\le C/\rho$ for a constant $C$ depending only on the fixed cutoff profile; hence $|D\widetilde R(x)|\le\varepsilon+(2C)\varepsilon=(1+2C)\varepsilon$ for every $x$, using $D\widetilde R=\chi\,DR+R\,D\chi$. Since $\varepsilon$ is arbitrary, $\varepsilon':=\sup_{x}|D\widetilde R(x)|$ can be made as small as we please. Moreover $D\widetilde R$ is continuous with compact support, hence uniformly continuous on $\mathbb R^2$ by [F7]. Set $\widetilde X(x):=Ax+\widetilde R(x)$; then $\widetilde X=X$ on $B_\rho$. [step 1.1, F6, F7]

2.2 **The weighted space of paths.** Let $\mathcal B$ be the set of continuous $z:[0,\infty)\to\mathbb R^2$ with $\lVert z\rVert_\beta:=\sup_{t\ge0} e^{\beta t}|z(t)|<\infty$. This is a normed vector space, and it is complete: if $(z_n)$ is $\lVert\cdot\rVert_\beta$-Cauchy then each sequence $(z_n(t))$ is Cauchy in $\mathbb R^2$, which is complete by [F5], so $z(t):=\lim_nz_n(t)$ exists; the Cauchy bound $e^{\beta t}|z_n(t)|\le M$ passes to the limit, so $z\in\mathcal B$, and on each $[0,T]$ the convergence is uniform, so every component of $z$ is continuous by [F4]; finally $\lVert z_n-z\rVert_\beta\to0$. Also $|z(t)|\le e^{-\beta t}\lVert z\rVert_\beta$ for every $z\in\mathcal B$ and $t\ge0$. [step 1.1, F4, F5]

3.1 **The integral operator and its contraction constant.** For $z\in\mathcal B$ define $$N(z)(t):=\int_0^te^{(t-s)A}P_s\widetilde R(z(s))\,ds-\int_t^\infty e^{(t-s)A}P_u\widetilde R(z(s))\,ds .$$ Both integrals converge absolutely, because $|\widetilde R(p)|\le\varepsilon'|p|$ by [F6] and the kernel bounds of step 1.1 give $|e^{(t-s)A}P_u\widetilde R(z(s))|\le\varepsilon'e^{-b(s-t)}e^{-\beta s}\lVert z\rVert_\beta$ whose $s$-integral over $[t,\infty)$ is $\varepsilon'\lVert z\rVert_\beta e^{-\beta t}/(b+\beta)$. The same kernel bounds give, after multiplying by $e^{\beta t}$, $$\lVert N(z)\rVert_\beta\le\varepsilon'\Bigl(\tfrac1{a-\beta}+\tfrac1{b+\beta}\Bigr)\lVert z\rVert_\beta,\qquad \lVert N(z)-N(w)\rVert_\beta\le\varepsilon'\Bigl(\tfrac1{a-\beta}+\tfrac1{b+\beta}\Bigr)\lVert z-w\rVert_\beta,$$ because $|\widetilde R(p)-\widetilde R(q)|\le\varepsilon'|p-q|$ by the componentwise mean value theorem [F6]; recall $a>\beta$. Also $N(z)$ is continuous, being the difference of two continuous functions of $t$. Fix $\varepsilon$ in step 2.1 so small that $k:=\varepsilon'(1/(a-\beta)+1/(b+\beta))\le\frac12$ and $k_0:=\varepsilon'(1/a+1/b)\le\frac12$. [step 1.1, 2.1, 2.2, F6, F9]

4.1 **$\mathcal B$-Fréchet differentiability of $N$.** For $z,w\in\mathcal B$ let $DN(z)w$ be given by the same formula with $\widetilde R(z(s))$ replaced by $D\widetilde R(z(s))w(s)$. The estimates of step 3.1 show that $DN(z)$ is linear and bounded with $\lVert DN(z)w\rVert_\beta\le k\lVert w\rVert_\beta$. By the componentwise mean value theorem [F6] applied on the segment from $z(s)$ to $z(s)+w(s)$, $$|\widetilde R(z(s)+w(s))-\widetilde R(z(s))-D\widetilde R(z(s))w(s)|\le\omega(|w(s)|)\,|w(s)|,$$ where $\omega(\delta):=\sup\{|D\widetilde R(p')-D\widetilde R(p)|:|p'-p|\le\delta\}$ satisfies $\omega(\delta)\to0$ as $\delta\to0$ by the uniform continuity of $D\widetilde R$ established in step 2.1. Since $|w(s)|\le\lVert w\rVert_\beta$, the weighted kernel estimates give $\lVert N(z+w)-N(z)-DN(z)w\rVert_\beta\le C_\beta\omega(\lVert w\rVert_\beta)\lVert w\rVert_\beta$, where $C_\beta=1/(a-\beta)+1/(b+\beta)$; this is $o(\lVert w\rVert_\beta)$: thus $DN(z)$ is the Fréchet derivative of $N$ at $z$, and $z\mapsto DN(z)$ is continuous in operator norm because $\omega$ is a modulus of continuity. [step 2.1, 3.1, F6, F7]

4.2 **Fixed points of the contractions $T_\xi$.** For $\xi\in E^s$ put $y_\xi(t):=e^{tA}\xi$, so $y_\xi\in\mathcal B$ and $\lVert y_\xi\rVert_\beta\le |\xi|$ by step 1.1, and define $T_\xi(z):=y_\xi+N(z)$. By step 3.1, $T_\xi$ is a $k$-contraction of the nonempty complete space $\mathcal B$ with $k\le\frac12$; by the Banach fixed point theorem [F2] it has a unique fixed point $z_\xi\in\mathcal B$. Since $N(0)=0$, the estimates of step 3.1 give $\lVert z_\xi\rVert_\beta\le\lVert y_\xi\rVert_\beta+k\lVert z_\xi\rVert_\beta$, hence $\lVert z_\xi\rVert_\beta\le2|\xi|$ and $$|z_\xi(t)|\le2|\xi|e^{-\beta t}\qquad(t\ge0).$$ [step 1.1, 3.1, F2]

4.3 **$z_\xi$ is a trajectory of $X$ with exponential decay.** Write the first integral of $N(z_\xi)(t)$ as $e^{tA}P_s\int_0^te^{-sA}P_s\widetilde R(z_\xi(s))\,ds$ and the second as $e^{tA}P_u\bigl(I_\infty-\int_0^te^{-sA}P_u \widetilde R(z_\xi(s))\,ds\bigr)$ with $I_\infty:=\int_0^\infty e^{-sA}P_u \widetilde R(z_\xi(s))\,ds$; the integrands are continuous and the integrals converge absolutely as in step 3.1. Differentiating with the product rule and the primitive of a continuous function [F9] gives $$z_\xi'(t)=Az_\xi(t)+P_s\widetilde R(z_\xi(t))+P_u\widetilde R(z_\xi(t))=Az_\xi(t)+\widetilde R(z_\xi(t))=\widetilde X(z_\xi(t))$$ for every $t\ge0$, so $z_\xi$ solves the ODE of $\widetilde X$; by [F1] it is the trajectory $\Phi_t(z_\xi(0))$. If $|\xi|\le\rho/2$ then $|z_\xi(t)|\le\rho$ for all $t\ge0$ by the exponential bound, so the trajectory stays in the ball where $\widetilde X=X$; hence it is a trajectory of $X$ and $$z_\xi(0)=\xi+h(\xi),\qquad h(\xi):=-\int_0^\infty e^{-sA}P_u\widetilde R(z_\xi(s))\,ds\in E^u,$$ is the initial point of a trajectory of $X$ converging exponentially to the origin with rate $\beta$. [step 2.1, 3.1, 4.2, F1, F9]

5.1 **The initial points depend $C^1$ on $\xi$.** Let $\Psi(y)$ be the unique fixed point of $z\mapsto y+N(z)$; it exists by the same contraction argument as in step 4.2 and $z_\xi=\Psi(y_\xi)$, where $\xi\mapsto y_\xi=e^{\cdot A}\xi$ is linear and bounded into $\mathcal B$. We show that $\Psi$ is Fréchet differentiable with $D\Psi(y)=(I-DN(\Psi(y)))^{-1}$. Let $u:=\Psi(y)$, $v:=\Psi(y+\eta)$ and $r:=N(v)-N(u)-DN(u)(v-u)$; step 4.1 gives $\lVert r\rVert\le C_\beta\omega(\lVert v-u\rVert)\lVert v-u\rVert$, and $(I-DN(u))(v-u)=\eta+r$. Since $\lVert DN(u)\rVert\le k<1$, the operator $I-DN(u)$ is invertible with inverse of norm at most $(1-k)^{-1}$ by the Neumann series [F3], so $\lVert v-u\rVert\le(1-k)^{-1}(\lVert\eta\rVert+\lVert r\rVert)$, while the contraction inequality directly gives $\lVert v-u\rVert\le(1-k)^{-1}\lVert\eta\rVert$. Therefore $v-u-(I-DN(u))^{-1}\eta=(I-DN(u))^{-1}r=o(\lVert\eta\rVert)$, so $D\Psi(y)$ exists and has the stated form; it is a bounded linear map. Continuity of $y\mapsto D\Psi(y)$ follows from the Lipschitz continuity of $\Psi$, the continuity of $DN$ (step 4.1) and the continuity of the inversion map $S\mapsto (I-S)^{-1}$ [F3]. Consequently $\xi\mapsto z_\xi=\Psi(e^{\cdot A}\xi)$ is $C^1$, and since the evaluation $z\mapsto z(0)$ is linear and bounded and $DN(0)=0$, differentiating $z_\xi$ at $\xi=0$ in a direction $\delta\in E^s$ gives $e^{\cdot A}\delta$, so $DG(0)=\mathrm{id}$ for $$G(\xi):=z_\xi(0)=\xi+h(\xi),\qquad Dh(0)=P_u\,DG(0)|_{E^s}=0 .$$ [step 4.1, 4.2, 4.3, F3]

5.2 **Bounded trajectories.** A bounded trajectory $y$ in $B_\rho$ satisfies variation of constants. In its unstable component, $e^{-bt}P_uy(t)\to0$ and the integral of $e^{-bs}P_u\widetilde R(y(s))$ converges, since its integrand is bounded by $\varepsilon\prime\rho e^{-bs}$. Therefore $y=T_\xi y$ with $\xi=P_sy(0)$. This does not yet put $y$ in the weighted space. Instead use the complete space $C_b([0,\infty),\mathbb R^2)$ with the supremum norm; its completeness follows by the pointwise-limit and uniform-continuity argument of step 2.2. The same operator has contraction constant $k_0=\varepsilon\prime(1/a+1/b)\le\frac12<1$ there. The weighted fixed point $z_\xi$ is bounded and solves the same equation, so uniqueness in this larger space gives $y=z_\xi$, and hence exponential decay. [F2, F4, F5, step 2.2, step 3.1, step 4.2, step 4.3]

6.1 **The stable curve, the unstable curve and the half-trajectories.** Choose $\delta_0\in(0,\rho/2)$ with $|h(\xi)|\le|\xi|$ for $|\xi|<\delta_0$; this holds by step 5.1 because $Dh(0)=0$. Then $G=(\mathrm{id},h)$ maps $(-\delta_0,\delta_0)\subset E^s$ $C^1$-injectively onto a $C^1$ embedded curve $S$, because the linear projection $P_s$ restricts to the inverse of $G$ on $S$ and $S$ is the graph of the $C^1$ function $h$; and $T_0S=E^s$ because $DG(0)=\mathrm{id}$. For $x=G(\xi)$, uniqueness of the fixed point after shifting time gives $z_\xi(t)=G(P_sz_\xi(t))$. On this graph, $|h(\xi)|\le|\xi|$ and the small derivative bound give $\dot\xi=-a\xi+P_s\widetilde R(G(\xi))$, with $|P_s\widetilde R(G(\xi))|\le2\varepsilon'|\xi|<a|\xi|/2$ after decreasing $\varepsilon$ initially. Thus $|\xi|$ strictly decreases toward zero and each local half-graph is invariant. By step 4.3 every point of $S$ has its forward trajectory in $S$, converging to $0$ at rate $\beta$; by step 5.2 every trajectory of $\widetilde X$, hence of $X$, that stays in a sufficiently small ball $V\subset B_\rho$ for all $t\ge0$ equals some $z_\xi$, with $|\xi|<\delta_0$, and therefore starts on $S$. If $x=G(\xi)\ne0$, the forward trajectory of $x$ is a connected subset of $S\setminus\{0\}$ whose parameter values $P_s z_\xi(t)$ tend to $0$ and contain $\xi$, so by the intermediate value property it meets both components of $S\setminus\{0\}$ only according to the sign of $\xi$: the two components $\{G(\xi):\xi>0\}$ and $\{G(\xi):\xi<0\}$ are each a single half-trajectory. Applying the same construction to the function $\widetilde u:=-u$, whose Hessian $-H$ is again a nondegenerate saddle and whose gradient field is $-X$, produces the unstable curve $U$ of $X$, tangent to the negative eigenline of $H$ and swept out by the two backward half-trajectories with exponential backward convergence; the neighbourhood $V$ is the intersection of the two trapping balls. This proves all the assertions; every step used only the displayed estimates, the Banach fixed point theorem, the Neumann series and the primitive of continuous functions, none of which needs a choice principle. [step 4.3, 5.1, 5.2] ∎
