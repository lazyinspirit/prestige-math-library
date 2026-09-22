---
id: cor-heat-semigroup-martingale
kind: corollary
title: "Heat-semigroup martingales"
status: draft
origin: pipeline
deps: [def-brownian-transition-semigroup, lem-brownian-transition-semigroup-property, thm-brownian-markov-property, def-brownian-motion, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-differentiation-under-the-integral-sign, thm-dominated-convergence, thm-tower-property-of-conditional-expectation, def-conditional-expectation-as-an-ae-class, def-continuous-time-adapted-process-and-martingale, def-natural-and-usual-augmented-brownian-filtrations, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Sections 3.3 and 3.6"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice. Let $g:\mathbb R\to\mathbb R$ be bounded and Borel
measurable, let $T>0$, and let $p_t$ and $P_t$ be the Brownian transition
kernel and operators [[def-brownian-transition-semigroup]]. Define
$$M_t:=P_{T-t}g(B_t)\quad(0\le t<T),\qquad M_t:=g(B_T)\quad(t\ge T).$$
Then $M$ is a bounded martingale relative to the Brownian filtration, and for
every $0\le t<T$ the function $u(t,x):=P_{T-t}g(x)$ is smooth on
$(0,T)\times\mathbb R$ and solves the backward heat equation
$$\partial_tu+\tfrac12\partial^2_{x}u=0\qquad(0<t<T,\ x\in\mathbb R).$$

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ with its natural filtration and usual augmentation, a bounded Borel $g:\mathbb R\to\mathbb R$, a fixed $T>0$, and $0\le t<T$.
 
[F1] **Transition kernel and its properties.** $P_sf(x)=\int_{\mathbb R}f(y)p_s(x,y)dy$ for $s>0$, $P_0f=f$, $p_s(x,y)=(2\pi s)^{-1/2}e^{-(y-x)^2/(2s)}$; for a standard Brownian motion $P_sf(x)=E[f(x+B_s)]$, the semigroup identity $P_rP_s=P_{r+s}$ holds, each $P_s$ is a probability kernel with $\|P_sf\|_\infty\le\|f\|_\infty$, and the kernel identity $\int p_r(x,z)p_s(z,y)dz=p_{r+s}(x,y)$ holds. [[def-brownian-transition-semigroup]] [[lem-brownian-transition-semigroup-property]] [[def-brownian-motion]] [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]
 
[F2] **Markov property.** For deterministic $s,u\ge0$ and bounded Borel $f$, $E[f(B_{s+u})\mid\mathcal F_s]=P_uf(B_s)$ almost surely, for both the raw natural filtration and its usual augmentation. [[thm-brownian-markov-property]] [[def-natural-and-usual-augmented-brownian-filtrations]]
 
[F3] **Tower property.** For $\mathcal H\subseteq\mathcal G$ and integrable $X$, $E[E[X\mid\mathcal G]\mid\mathcal H]=E[X\mid\mathcal H]$ almost surely. [[thm-tower-property-of-conditional-expectation]] [[def-conditional-expectation-as-an-ae-class]] [[def-continuous-time-adapted-process-and-martingale]]
 
[F4] **Differentiation under the integral sign.** If $x\mapsto f(x,s)$ is integrable for each $s$ in an open interval, $s\mapsto f(x,s)$ is differentiable for almost every $x$, the partial derivative is measurable in $x$, and $|\partial_sf(x,s)|\le G(x)$ with $G$ integrable and independent of $s$, then $\partial_s\int f(x,s)d\mu(x)=\int\partial_sf(x,s)d\mu(x)$; the same statement applies to the parameter $x$ of the kernel. Applied to the bounded $g$ and the Gaussian kernel with $s=T-t>0$, the derivative bounds of line 1.1 below are integrable majorants. [[thm-differentiation-under-the-integral-sign]] [[thm-dominated-convergence]]
 
[F5] **Gaussian derivative bounds of every order.** For $s>0$ and $z=y-x$ one has $p_s(x,y)=(2\pi s)^{-1/2}e^{-z^2/(2s)}$. For all integers $a,b\ge0$, repeated differentiation gives $\partial_s^a\partial_x^bp_s(x,y)=s^{-a-b/2}P_{a,b}(z/\sqrt{s})p_s(x,y)$ for a polynomial $P_{a,b}$; this follows inductively because differentiating in $x$ differentiates the scaled variable and differentiating in $s$ differentiates both the power of $s$ and that variable. Since every polynomial times $e^{-r^2/4}$ is bounded, $|\partial_s^a\partial_x^bp_s(x,y)|\le C_{a,b}s^{-a-b/2}q_s(x,y)$, where $q_s(x,y)$ is the Gaussian density in $y$ of variance $2s$. Thus on compact subintervals of $s>0$ every mixed derivative has an integrable, locally uniform Gaussian majorant. In particular, $\partial_xp_s=(z/s)p_s$, $\partial^2_{xx}p_s=((z^2/s^2)-(1/s))p_s$, and $\partial_sp_s=\tfrac12\partial^2_{xx}p_s$. [[def-brownian-transition-semigroup]] [[lem-normal-density-has-total-mass-one]] [[def-standard-normal-and-normal-laws]]
 
[F6] **AC bookkeeping.** Choice is declared for the conditional-expectation and completeness interfaces. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 Kernel identities and derivative bounds: for every $a,b\ge0$, [F5] bounds $|g(y)\partial_s^a\partial_x^bp_s(x,y)|$ by $\|g\|_\infty C_{a,b}s^{-a-b/2}q_s(x,y)$. On a neighborhood of any $(s_0,x_0)$ with $s_0>0$, these bounds admit one integrable Gaussian majorant, so every order of $s$- and $x$-differentiation may be passed successively through the integral by [F4]; the resulting derivative integrals are jointly continuous by the same domination argument. The low-order identity $\partial_sp_s=\tfrac12\partial^2_{xx}p_s$ is included in [F5]. [F4, F5, given]
 
1.2 Martingale property: for $0\le t\le T$ the Markov property [F2] with $s=t$, $u=T-t$ and $f=g$ gives $E[g(B_T)\mid\mathcal F_t]=P_{T-t}g(B_t)=M_t$ almost surely; at $t=T$ this is the identity $M_T=g(B_T)$ and at $t<T$ it is the defining formula. Hence $M$ is adapted on $[0,\infty)$, because it is a deterministic function of $B_t$ before $T$ and the $\mathcal F_T$-measurable variable $g(B_T)$ thereafter. For $0\le s\le t\le T$, the tower property [F3] gives $E[M_t\mid\mathcal F_s]=M_s$. If $s<T\le t$, then $M_t=M_T$ and the same identity follows from the preceding calculation with terminal time $T$; if $T\le s\le t$, then $M_s=M_t=g(B_T)$ is $\mathcal F_s$-measurable. Thus the martingale identity holds for every $0\le s\le t<\infty$. [F1, F2, F3]
 
2.1 Boundedness: for $t<T$, $|M_t|=|P_{T-t}g(B_t)|\le\|g\|_\infty$ by [F1], and for $t\ge T$, $|M_t|=|g(B_T)|\le\|g\|_\infty$; so $M$ is a bounded martingale and in particular uniformly integrable. [F1, step 1.2]
 
2.2 Smoothness and the heat equation: fix $0<t<T$ and put $s=T-t>0$; then $u(t,x)=\int g(y)p_s(x,y)dy$. Step 1.1 gives, for every $a,b\ge0$, the continuous mixed derivative $\partial_t^a\partial_x^bu(t,x)=(-1)^a\int g(y)\partial_s^a\partial_x^bp_s(x,y)dy$, so $u\in C^\infty((0,T)\times\mathbb R)$. Taking $(a,b)=(1,0)$ and $(0,2)$ and using $\partial_sp_s=\tfrac12\partial^2_{xx}p_s$ gives $\partial_tu+\tfrac12\partial^2_{xx}u=-\int g\partial_sp_s+\tfrac12\int g\partial^2_{xx}p_s=0$. [F4, step 1.1]
 
3.1 Boundary and consistency cases: at $t=0$ the solution $u(0,\cdot)=P_Tg$ is the positive-time smoothing of $g$ and the equation holds there; as $t\uparrow T$ one has $s\downarrow0$ and the formula $u(t,x)=\int g(y)p_s(x,y)dy$ degenerates to the point mass in the limit, so no smoothness or equation is asserted at $t=T$; for $g\equiv c$ constant one has $u\equiv c$ and the equation holds with all derivatives zero; for $g$ nonnegative bounded, $u\ge0$; the endpoint definition $M_T=g(B_T)$ is what makes the martingale identity of step 1.2 hold at $t=T$; and AC enters only through [F6]. [F1, F6, step 1.2, step 2.2] ∎

## Source notes

Lawler, Sections 3.3 and 3.6, computes backward-heat-equation martingales from the Markov property and the smoothness of the heat semigroup. The differentiation under the integral sign in step 3.1 is justified through the explicit Gaussian derivative majorants of [F5], not through an assumption of smoothness of $g$.
