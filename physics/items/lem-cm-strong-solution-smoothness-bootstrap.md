---
id: lem-cm-strong-solution-smoothness-bootstrap
kind: lemma
title: "A strong solution of the projected periodic equation with all Sobolev norms continuous in time is $C^\\infty$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-periodic-vector-sobolev-space-and-leray-projection, lem-fourier-lattice-sobolev-embedding, lem-discrete-young-and-sobolev-product, lem-cm-integral-and-ftc-for-continuous-normed-space-curves, def-countable-choice, def-vector-space, def-norm-and-normed-space]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-fourier-lattice-sobolev-embedding: mathematical-premise
  lem-discrete-young-and-sobolev-product: mathematical-premise
  lem-cm-integral-and-ftc-for-continuous-normed-space-curves: mathematical-premise
  def-countable-choice: mathematical-premise
  def-vector-space: mathematical-premise
  def-norm-and-normed-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Sections 4.4 and 4.5 (regularity of strong solutions: time and space regularity upgrades by differentiating the equation)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Theorem 3.5 and Section 4.4 (continuity in the high norm and higher regularity of solutions of the Euler and Navier-Stokes equations)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $\nu\ge0$, let $T>0$, and let $u:[0,T]\to\bigcap_{p\in\mathbb R}H^p(\mathbb T^3;\mathbb R^3)$ be a curve such that, in the notation of [[def-periodic-vector-sobolev-space-and-leray-projection]]:

1. for every real $p$, $t\mapsto u(t)$ is continuous into $H^p$;
2. for every real $p$, $t\mapsto u(t)$ is differentiable into $H^p$, with
$$u'(t)=\nu\Delta u(t)-P\bigl((u(t)\cdot\nabla)u(t)\bigr)\qquad(0\le t\le T),$$
the right-hand side being an element of $H^p$ for every $p$ (which follows from the other hypotheses as below);
3. $u(t)$ is divergence-free and real for every $t$.

Then the map $(t,x)\mapsto u(t,x)$ belongs to $C^\infty([0,T]\times\mathbb T^3;\mathbb R^3)$ (with one-sided time derivatives at the endpoints). For every integer $r\ge0$ and spatial multi-index $\alpha=(\alpha_1,\alpha_2,\alpha_3)\in\mathbb N_0^3$, with $\partial_x^\alpha:=\partial_1^{\alpha_1}\partial_2^{\alpha_2}\partial_3^{\alpha_3}$, one has $\partial_t^r\partial_x^\alpha u=\partial_x^\alpha\Phi_r$, where $\Phi_0:=u$ and, for integers $r\ge1$,
$$\Phi_r:=\nu\Delta(\partial_t^{r-1}u)-P\!\left(\sum_{j=0}^{r-1}\binom{r-1}{j}\bigl(\partial_t^ju\cdot\nabla\bigr)\partial_t^{r-1-j}u\right).$$
Thus for $r\ge1$ the identity uses $r-1$ differentiations of the equation for $u'$, while $r=0$ is the spatial derivative of $u$ itself.

## Facts & Assumptions

**Given:** The curve $u$ satisfying hypotheses 1-3, the operators of [[def-periodic-vector-sobolev-space-and-leray-projection]], and the product bounds of [[lem-discrete-young-and-sobolev-product]].

[F1] If $v\in C([0,T],H^p)$ for all $p$, then for every multi-index $\alpha$ the map $(t,x)\mapsto\partial_x^\alpha v(t,x)$ is continuous: choose $p>|\alpha|+3/2$ and apply the embedding $H^p\subseteq C^{|\alpha|}$ of [[lem-fourier-lattice-sobolev-embedding]] to each time slice. In particular the norms $\|v(t)\|_{H^p}$ and the pointwise values vary continuously.

[F2] If $f\in C([0,T],H^{p})$ and $g\in C([0,T],H^{p})$ with $p>5/2$, then $t\mapsto f(t)g(t)$ and $t\mapsto (f(t)\cdot\nabla)g(t)$ are continuous into $H^{p}$ (respectively $H^{p-1}$), by claim 2 at order $p$ and claim 3 at order $p-1>3/2$, because the product maps are continuous and $t\mapsto(f(t),g(t))$ is continuous ([[lem-discrete-young-and-sobolev-product]], claims 2 and 3).

[F3] The product rule for a continuous bilinear map: if $X,Y,Z$ are normed real vector spaces, $B:X\times Y\to Z$ is continuous bilinear ([[def-norm-and-normed-space]], [[def-vector-space]]), and $x:[0,T]\to X$, $y:[0,T]\to Y$ are differentiable, then $t\mapsto B(x(t),y(t))$ is differentiable with derivative $B(x'(t),y(t))+B(x(t),y'(t))$: the difference quotient equals $B\bigl((x(t+h)-x(t))/h,y(t+h)\bigr)+B\bigl(x(t),(y(t+h)-y(t))/h\bigr)$, which tends to the claimed value by continuity of $B$.

[F4] If $t\mapsto v(t)$ is differentiable into $H^{p+2}$ for every $p$, then so are $t\mapsto\Delta v(t)$ (into $H^p$) and $t\mapsto\partial_jv(t)$ (into $H^{p+1}$), with the expected derivatives, because these are bounded linear operators ([[def-periodic-vector-sobolev-space-and-leray-projection]]).

[F5] If $t\mapsto v(t)$ is continuous into $H^p$ for all $p$, then $t\mapsto P v(t)$ is continuous into $H^p$ for all $p$ (bounded linear operator), with the same for $\Delta$ and $\Lambda^s$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]).

## Proof


**Proof technique:** direct; identify the equation as an identity between curves, verify the first-order regularity from the product estimates and the embedding, and iterate the product rule for bilinear maps.

**Given:** The curve $u$ with hypotheses 1-3 and the facts [F1]-[F5].

1.1 By hypothesis 3 and the divergence-free condition, $(u(t)\cdot\nabla)u(t)=\sum_j u_j(t)\partial_ju(t)$ is well defined as a field; by [F1] and [F2] with $p$ arbitrarily large, $t\mapsto(u(t)\cdot\nabla)u(t)$ is continuous into $H^{p}$ for every $p>3/2$. Hence $t\mapsto G(t):=\nu\Delta u(t)-P((u(t)\cdot\nabla)u(t))$ is continuous into every real-order $H^{p}$ by [F5], the boundedness of $\Delta:H^{p+2}\to H^p$, and inclusion from arbitrarily high orders. Since $u'=G$ by hypothesis 2, this also shows that $G$ is the derivative of $u$ in every $H^p$. [F1, F2, F4, F5, given]

2.1 Choose $q>3/2$. For each $x$, evaluation $E_x:H^q\to\mathbb R^3$, $E_xv=\widetilde v(x)$, is bounded linear with $|E_xv|_2\le W_q\|v\|_{H^q}$ by the embedding. Applying $E_x$ to the $H^q$ difference quotient identifies the pointwise derivative $\partial_tu(t,x)=G(t,x)$. More generally, $v\mapsto\partial_x^\alpha\widetilde v(x)$ is bounded on $H^q$ when $q>|\alpha|+3/2$, so it also commutes with time differentiation. In particular $\partial_tu=G$ is a continuous field whose spatial derivatives of every order are continuous, by [F1]; so $u$ is $C^1$ on $[0,T]\times\mathbb T^3$ and $u\in C([0,T],H^p)$ for every $p$. [step 1.1, F1]

2.2 **Induction claim.** We prove by induction on integers $r\ge1$ that $u$ is $C^r$ into every $H^p$ and, for $0\le j\le r$, $\partial_t^ju=\Phi_j$ with $\Phi_j$ as in the Statement, continuous into every $H^p$. The zeroth identity is $\partial_t^0u=u=\Phi_0$ by convention and hypothesis 1. For the base $r=1$, step 1.1 gives $u'=G=\Phi_1$ continuous into every $H^p$, so $u$ is $C^1$ there and both $j=0,1$ are covered. [step 1.1, given]

3.1 **Induction step.** Suppose $u$ is $C^r$ into every $H^p$, with $r\ge1$. For any target order $p$, choose $q>\max(p,3/2)$. The product bound [F2] makes $(f,g)\mapsto(f\cdot\nabla)g$ a continuous bilinear map $H^{q+1}\times H^{q+1}\to H^q\subseteq H^p$. Applying the ordinary bilinear product rule [F3] repeatedly therefore shows that $t\mapsto(u\cdot\nabla)u$ is $C^r$ into $H^p$; its derivatives through order $r$ use only derivatives of $u$ already supplied by the induction hypothesis. Likewise $\Delta:H^{p+2}\to H^p$ and $P:H^p\to H^p$ are bounded linear maps [F4,F5], so $G=\nu\Delta u-P((u\cdot\nabla)u)$ is $C^r$ into $H^p$. Since $u\prime=G$, this proves $u$ is $C^{r+1}$ into $H^p$, with derivative of order $r+1$ equal to the formal Leibniz expression. No differentiability of $u^{(r+1)}$ was assumed to reach this conclusion. As $p$ was arbitrary, induction proves the claim of step 2.2. [step 2.2, F2, F3, F4, F5]

4.1 By step 2.2 with $r$ arbitrary, for every $r\ge0$ and every $p$ the derivative $\partial_t^ru$ is continuous into $H^p$; by [F1], every mixed derivative $\partial_t^r\partial_x^\alpha u$ is continuous on $[0,T]\times\mathbb T^3$. Hence $u\in C^\infty([0,T]\times\mathbb T^3;\mathbb R^3)$, with one-sided time derivatives at the endpoints, and the differentiated identities of the equation hold by construction of the $\Phi_j$. [step 2.2, step 3.1, F1] ∎

## Remarks

- The lemma separates the smoothness of a strong solution from its construction: the main theorem supplies a curve satisfying hypotheses 1-3, and this lemma upgrades it to a classical smooth solution.
- Only the product estimates of the torus Sobolev scale and the boundedness of $P,\nabla,\Delta$ are used; no parabolic regularity or Schauder theory is presupposed.
