---
id: thm-tdmath-forward-boundary-graph
kind: theorem
title: Forward orientation and the Lipschitz boundary graph
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
deps: [def-total-derivative-in-euclidean-space, def-ck-euclidean-maps-and-diffeomorphisms, thm-continuous-partial-derivatives-imply-total-differentiability, def-tdmath-forward-sector-hypotheses, lem-tdmath-convex-sector-closedness, lem-tdmath-sector-interior, lem-tdmath-relative-boundary-support, lem-tdmath-unique-support-inward-ray, lem-tdmath-convex-function-local-lipschitz, lem-tdmath-integral-zero-uniqueness, thm-heine-borel-rn, thm-chain-rule-for-total-derivatives, thm-newton-leibniz-with-interior-derivative, thm-continuous-implies-integrable]
dependency_roles:
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  lem-tdmath-convex-sector-closedness: mathematical-premise
  lem-tdmath-sector-interior: mathematical-premise
  lem-tdmath-relative-boundary-support: mathematical-premise
  lem-tdmath-unique-support-inward-ray: mathematical-premise
  lem-tdmath-convex-function-local-lipschitz: mathematical-premise
  lem-tdmath-integral-zero-uniqueness: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorems 3.3–3.5, pp. 45–47"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§5.1 and 7.2–7.3, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: pass
---

## Statement

Under [[def-tdmath-forward-sector-hypotheses]], each simple domain has one orientation sign $\varepsilon_i\in\{-1,1\}$, constant across the domain, such that at fixed work coordinate $v$, $x\prec y$ exactly when $\varepsilon_i(u_y-u_x)\ge0$. In coordinates oriented so $\varepsilon_i=1$, for each $x\in\Gamma_i$ the projection $\rho_x$ of $\partial_{\Gamma_i}A_x$ onto work coordinates is open and connected; the boundary is the graph $(u_x(v),v)$ of a $C^1$ function with locally Lipschitz derivative

$$Du_x(v)=-P_i(u_x(v),v).$$

If $y\in\partial A_x$, then $A_y=A_x$ and their boundary graphs agree.

## Facts & Assumptions

**Given:** A1–A7 and S1–S3 on an open convex simple domain $\Gamma_i$.

[A1] [[def-tdmath-forward-sector-hypotheses]]: each $A_x$ is supported at $x$ by a unique finite-slope plane; $P_i$ is locally Lipschitz.

[F1] [[lem-tdmath-convex-sector-closedness]]: $A_x$ is convex and closed relative to $\Gamma_i$, and its collinear order implications hold.

[F2] [[lem-tdmath-sector-interior]]: every $A_x$ has nonempty ambient interior.

[F3] [[lem-tdmath-relative-boundary-support]]: a convex set has a support at each relative boundary point of its closure in its affine hull.

[F4] [[lem-tdmath-unique-support-inward-ray]]: at a full-dimensional convex set's boundary point with a unique support, every direction strictly toward the supporting half-space's interior enters the set's interior for all sufficiently small positive steps.

[F5] [[lem-tdmath-convex-function-local-lipschitz]]: every finite convex function on an open convex set is locally Lipschitz.

[F6] [[lem-tdmath-integral-zero-uniqueness]]: a nonnegative continuous function bounded by a constant times its zero-start integral is identically zero.

[F7] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional Euclidean space are compact.

[F8] [[def-total-derivative-in-euclidean-space]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], and [[thm-chain-rule-for-total-derivatives]]: the stated $C^1$ maps have total derivatives, and the derivative of a composition of Euclidean maps is the composition of those derivatives.

[F9] [[thm-newton-leibniz-with-interior-derivative]]: a continuous function on a closed interval, differentiable in its interior with an integrable derivative extension, has endpoint increment equal to the integral of that derivative.

[F10] [[thm-continuous-implies-integrable]]: a continuous real function on a compact interval is Riemann integrable.

## Proof

**Given:** [A1] and [F1]–[F10]. Write a support plane's inward unit normal with energy component nonzero, as ensured by its finite-slope form.

1.1 To apply [F4] to a sector at a boundary point $z$, choose $r>0$ with $\overline B(z,r)\subset\Gamma_i$ and put $K=A_x\cap\overline B(z,r)$. This is globally closed and convex, and agrees with $A_x$ near $z$. It has nonempty interior: join $z$ to an interior point of $A_x$ and take points sufficiently close to $z$. Supporting planes at $z$ coincide for $K$ and $A_x$: a local supporting inequality extends along every segment from $z$ to a point of $A_x$. Any such plane also supports $A_z\subseteq A_x$ at $z$, so S2 makes it unique. Thus [F4] applies to $K$ and its interior conclusions hold for $A_x$ locally. For fixed $x=(u_x,v_x)$, the vertical section $I_x:=\{u:(u,v_x)\in A_x\}$ is a relatively closed convex interval by [F1]. The support plane at $x$ confines it to one side of $u_x$. Its inward normal has nonzero energy component, so [F4] gives a nontrivial interior vertical segment on that side. [A1, F1, F2, F4]


1.2 Let $u,w$ be two $C^1$ graph solutions of $Dq=-P_i(q,v)$ on a common open domain, and suppose $u(v_0)=w(v_0)$. Since $P_i$ is locally Lipschitz, choose a convex neighborhood of $(u(v_0),v_0)$ on which one Lipschitz constant $L$ works. Continuity of $u,w$ lets us choose a convex ball about $v_0$ whose closure lies in the common domain and whose two graph images stay in that neighborhood; take any $v$ in a smaller concentric ball. Put $d=v-v_0$ and $\gamma(t)=v_0+td$ for $0\le t\le1$. By [F8], $r(t)=u(\gamma(t))-w(\gamma(t))$ is $C^1$ and
$r'(t)=[-P_i(u(\gamma(t)),\gamma(t))+P_i(w(\gamma(t)),\gamma(t))]\cdot d.$
The local Lipschitz bound for $P_i$ gives $|r'(t)|\le L\|d\||r(t)|$. The derivative is continuous, hence integrable by [F10]; [F9] gives $r(t)=\int_0^t r'(s)\,ds$; hence $h(t):=|r(t)|\le L\|d\|\int_0^t h(s)\,ds$. Apply [F6] on $[0,1]$ to obtain $h=0$. Thus $u=w$ near $v_0$. Along any polygonal path in the common open domain, the set of path parameters at which equality holds is closed by continuity and open by this local result; since the path interval is connected and the set is nonempty, equality holds along the whole path. Every open connected subset of Euclidean space is polygonally connected: points reachable from a fixed point by finitely many segments in small balls form a nonempty relatively open and relatively closed set. Therefore equality extends throughout each common connected domain. [A1, F6, F8, F9, F10, given, construct]

2.1 The convex, relatively closed interval $I_x$ contains a nontrivial segment on the inward side by step 1.1 and [F4]. Suppose it does not contain the whole open $\Gamma_i$-fiber on that side. Its endpoint $b$ toward that side then lies inside $\Gamma_i$; relative closedness puts $b$ in $I_x$, so the interval from $x$ to $b$ is a compact nondegenerate interval by [F7]. Let $x_1$ be its midpoint. Since $x_1\in A_x$, transitivity gives $A_{x_1}\subseteq A_x$. The supporting plane of $A_{x_1}$ has nonzero energy coefficient, so its vertical section lies wholly on one side of $x_1$; being contained in $I_x$, it lies in one half of $[x,b]$ and has at most half its length. It is nonempty and closed relative to $[x,b]$, hence compact. Repeat: take the midpoint $x_{k+1}$ of the current compact interval $I_{x_k}$; then $x_k\prec x_{k+1}$, so the next section is nested inside the current one and again has at most half its length. These intervals have nonempty total intersection: otherwise their open complements would cover the first compact interval, a finite subcover would do so by [F7], and nesting would make one interval empty. Their lengths tend to zero, so the intersection has a unique point $x_\infty$, still in the first interval contained in $\Gamma_i$. The midpoint recursion and this unique intersection require no selection from an arbitrary countable family. Relative closedness puts $x_\infty$ in every $A_{x_k}$, hence $A_{x_\infty}\subseteq A_{x_k}$ by transitivity. Its vertical section is therefore only $\{x_\infty\}$, contradicting the nontrivial interior vertical segment at $x_\infty$ supplied by [F4]. Thus $I_x$ contains the whole open fiber on its inward side. [A1, F1, F4, F7, step 1.1, construct]

3.1 All states on a fixed work-coordinate fiber have the same orientation. If $x$ is oriented upward and a state $z$ above it were oriented downward, the full upward section from step 2.1 gives $x\prec z$, and the full downward section from $z$ gives $z\prec w$ for a state $w$ below $x$, contradicting the support at $x$. If a state $y$ below an upward $x$ were oriented downward, choose $z$ above $x$ with $x\prec z$; the first collinear implication in [F1], applied to $x$ between $y$ and $z$, gives $y\prec x$, contradicting the downward support at $y$. The reversed argument handles a downward $x$. [F1, step 2.1, algebra]

4.1 By step 3.1, orientation is constant on each fixed-work fiber. The fiber orientation is locally constant in $v$. At any $x$, choose one vertical point just inside the supported half-space and one just outside; by [F4] the inside point can be chosen in $\operatorname{int}A_x$. Openness of $\Gamma_i$ and of the interior and exterior regions preserves these memberships on nearby fibers. Each such fiber therefore meets $\partial A_x$ between these two energy values. A support of $A_x$ at that boundary point also supports the point's own sector and so has its S2 orientation; the inside/outside placement fixes that orientation. Thus nearby fibers have the same sign as the fiber through $x$. Since $\Gamma_i$ is convex, it is connected; a locally constant two-valued sign is constant. [A1, F2, F3, F4, step 3.1]

5.1 Adopt the coordinate convention $\varepsilon_i=1$. Step 2.1 and the common orientation give $x\prec y$ exactly for $u_y\ge u_x$ at fixed $v$, with strict comparison for $u_y>u_x$. [step 3.1, step 4.1, algebra]

6.1 Put $\rho_x=\pi_v(\partial A_x)$. At a boundary point $z\in\partial A_x$, [F3] supplies a support to $A_x$. Because $A_z\subseteq A_x$, that plane also supports $A_z$ and equals its unique S2 plane. Its finite slope gives a nonvertical inward direction; [F4] supplies nearby vertical points inside $A_x$, while the opposite side is outside by the support. Neighborhoods of one inside and one outside point show every nearby work fiber meets $\partial A_x$. Hence $\rho_x$ is open. It is connected because S3 makes $\partial A_x$ arcwise connected and projection is continuous. By step 5.1, every vertical fiber over $\rho_x$ has exactly one boundary energy; call it $u_x(v)$. [A1, F1, F2, F3, F4, step 5.1]

7.1 For $v,v'\in\rho_x$, convexity of $A_x$ puts every convex combination of their boundary states in $A_x$. On any sufficiently small convex ball in $\rho_x$, the unique-boundary property and upward orientation make $u_x$ the least energy in each fiber. Therefore $u_x(tv+(1-t)v')\le t u_x(v)+(1-t)u_x(v')$, so $u_x$ is finite and convex there. It is locally Lipschitz by [F5]. The inward support at $(u_x(v),v)$ gives
$u_x(v')-u_x(v)\ge -P_i(u_x(v),v)\cdot(v'-v).$
The support at $(u_x(v'),v')$ gives
$u_x(v')-u_x(v)\le -P_i(u_x(v'),v')\cdot(v'-v).$
Local Lipschitz continuity of $u_x$ and $P_i$ makes the difference between these linear bounds $O(\|v'-v\|^2)$. Thus $u_x$ is differentiable with derivative $-P_i(u_x(v),v)$, and that derivative is locally Lipschitz. Hence $u_x\in C^1$ with locally Lipschitz derivative. [A1, F1, F5, F8, step 6.1]

8.1 If $y\in\partial A_x$, then $A_y\subseteq A_x$. The boundary graphs agree at $v_y$ and solve the same differential equation. The set of $v\in\rho_y$ where $v\in\rho_x$ and $u_y(v)=u_x(v)$ is nonempty, open by step 1.2, and closed by continuity and relative closedness of $\partial A_x$. Connectedness of $\rho_y$ makes it all of $\rho_y$. This shows $\rho_y\subseteq\rho_x$. The same argument, using relative closedness of $\partial A_y$, shows $\rho_y$ is relatively closed in connected $\rho_x$; it is relatively open because both projections are open. Hence $\rho_x=\rho_y$ and the boundary graphs agree. In particular $x\in\partial A_y$, so $y\prec x$; together with $y\in A_x$ and transitivity this gives $A_x=A_y$. [A1, F1, step 7.1, step 1.2] ∎
