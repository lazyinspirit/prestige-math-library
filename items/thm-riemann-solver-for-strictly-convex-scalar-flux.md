---
id: thm-riemann-solver-for-strictly-convex-scalar-flux
kind: theorem
title: The Riemann solver for a strictly convex flux
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-self-similar-riemann-problem, def-scalar-conservation-law-and-flux, thm-rankine-hugoniot-jump-condition, def-convex-entropy-entropy-flux-pair, def-kruzhkov-entropy-solution, lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality, cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions, def-convex-and-strictly-convex-functions-on-euclidean-sets, thm-differentiable-convex-functions-and-monotone-derivatives, thm-euclidean-inverse-function-theorem, thm-chain-rule, thm-algebra-of-derivatives, thm-dominated-convergence, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, cor-lax-shock-inequalities-for-convex-scalar-laws]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§6.2, (6.6)–(6.7) and entropy verification, pp. 53–55"
    - title: "Victor Ivrii, Partial Differential Equations, University of Toronto, current complete 415-page PDF"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§§12.1.1–12.1.2, pp. 350–353"
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§1, characteristic-cone notation, pp. 218–219 (context); the Riemann profiles are proved locally"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $f\in C^2(\mathbb R)$ be strictly convex and let $u_L,u_R\in\mathbb R$.
The unique Kruzhkov entropy solution of the Riemann problem
([[def-self-similar-riemann-problem]]) is:

(i) if $u_L>u_R$, the shock
$$u(t,x)=\begin{cases}u_L,&x<st,\\u_R,&x>st,\end{cases}\qquad s=\frac{f(u_R)-f(u_L)}{u_R-u_L};$$

(ii) if $u_L<u_R$, the centred rarefaction
$$u(t,x)=\begin{cases}u_L,&x/t\le f'(u_L),\\(f')^{-1}(x/t),&f'(u_L)<x/t<f'(u_R),\\u_R,&x/t\ge f'(u_R).\end{cases}$$

Here $f'$ is continuous and strictly increasing, so its inverse on
$[f'(u_L),f'(u_R)]$ is continuous; it need not be differentiable, and the
rarefaction may have a cusp when $f''$ vanishes. Both profiles satisfy the weak
conservation law, all Kruzhkov entropy inequalities, and the strong local $L^1$
initial trace. Uniqueness in the bounded Kruzhkov class follows from
[[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]]. If
$u_L=u_R$, the constant solution is the unique one
([[def-scalar-conservation-law-and-flux]], [[def-kruzhkov-entropy-solution]]).

## Facts & Assumptions

**Given:** Countable Choice, a strictly convex flux $f\in C^2(\mathbb R)$, states $u_L,u_R\in\mathbb R$, the Riemann datum $u_0$, and the self-similar profiles of the statement.

[F1] The interior weak equation and the self-similar ansatz: the interior distributional equation is equivalent to $\int_{\Pi_T}(u\varphi_t+f(u)\varphi_x)=0$ for every $\varphi\in C_c^\infty(\Pi_T)$, and a self-similar solution has the form $u(t,x)=U(x/t)$, constant along rays ([[def-scalar-conservation-law-and-flux]], [[def-self-similar-riemann-problem]]).

[F2] Interface computation at a single jump: for a piecewise $C^1$ function with one interface and speed $s$, the weak residual against a test function supported near the interface equals $-\int_\Gamma\varphi\,\bigl([u]\nu_t+[f(u)]\nu_x\bigr)dS$; in one dimension with the graph $x=st$, $[u]\nu_t+[f]\nu_x=\bigl([f]-s[u]\bigr)/\sqrt{1+s^2}$. Thus Rankine--Hugoniot $s[u]=[f]$ makes the residual vanish there, and across a continuous interface (equal traces of $u$, hence of $f(u)$) the contribution vanishes identically ([[thm-rankine-hugoniot-jump-condition]]).

[F3] Chord criterion at a jump: a piecewise $C^1$ weak solution with a single nontrivial jump of speed $s$ satisfies the entropy inequality for every convex $C^2$ pair if and only if $F(z)(u^+-u^-)\ge0$ for all $z$ between the states, where $F(z)=f(z)-f(u^-)-s(z-u^-)$ ([[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]]).

[F4] Strict convexity: $f'$ is strictly increasing by the secant argument in [[cor-lax-shock-inequalities-for-convex-scalar-laws]], so $f'(u_L)<f'(u_R)$ when $u_L<u_R$ and the inverse $(f')^{-1}\colon[f'(u_L),f'(u_R)]\to[u_L,u_R]$ is continuous, strictly increasing; the graph of $f$ lies strictly below every chord on the interior of its interval ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]], [[thm-differentiable-convex-functions-and-monotone-derivatives]]).

[F5] Calculus and regularization: the chain rule and algebra of derivatives compute the classical residual of a $C^1$ self-similar profile; for $f_\epsilon(r)=f(r)+\tfrac\epsilon2r^2$ one has $f_\epsilon''\ge\epsilon$, so $f_\epsilon'$ is a $C^1$ diffeomorphism of $[u_L,u_R]$ onto its image and $\psi_\epsilon=(f_\epsilon')^{-1}$ is $C^1$ on $[f_\epsilon'(u_L),f_\epsilon'(u_R)]$ by the inverse function theorem; on the fixed interval $[u_L,u_R]$ the derivatives $f_\epsilon'$ converge uniformly to $f'$ as $\epsilon\downarrow0$ ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-euclidean-inverse-function-theorem]]).

[F6] Limits: dominated convergence and uniform convergence on compact sets justify passing to the limit in the weak and entropy test integrals, and $L^p$ membership is a property of equivalence classes ([[thm-dominated-convergence]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** direct.

1.1 **The shock profile solves the equation and has the right trace.** Assume $u_L>u_R$ and let $u$ be the profile (i) with speed $s=\bigl(f(u_R)-f(u_L)\bigr)/(u_R-u_L)$, so $s[u]=[f]$ with $[h]=h(u_R)-h(u_L)$: this is the Rankine--Hugoniot condition. By [F2] the weak residual of a piecewise constant profile with a single jump reduces to the interface integral $-\int\varphi(t,st)([f]-s[u])\,dt$, which vanishes; hence $u$ is a distributional weak solution. Moreover $u(t,\cdot)$ differs from $u_0$ only on the interval between $0$ and $st$, whose length is $|s|t$, and $|u-u_0|\le|u_L-u_R|$ there, so $\int_K|u(t,x)-u_0(x)|\,dx\le|u_L-u_R|\,|s|t\to0$ as $t\downarrow0$: the strong local $L^1$ trace holds. [F1, F2, given]


1.2 **Regularized fans are weak solutions with vanishing entropy production.** For $\epsilon>0$ put $f_\epsilon(r)=f(r)+\tfrac\epsilon2r^2$, let $\psi_\epsilon=(f_\epsilon')^{-1}$ on $[f_\epsilon'(u_L),f_\epsilon'(u_R)]$, and define $U_\epsilon$ by the same three-branch formula with $\xi_L^\epsilon=f_\epsilon'(u_L)$, $\xi_R^\epsilon=f_\epsilon'(u_R)$, and $u^\epsilon(t,x)=U_\epsilon(x/t)$. Each branch is $C^1$ by [F5], and on the open middle region the chain rule gives $u^\epsilon_t+f_\epsilon(u^\epsilon)_x=\tfrac1t\,\psi_\epsilon'(\xi)\bigl(f_\epsilon'(\psi_\epsilon(\xi))-\xi\bigr)=0$ since $f_\epsilon'(\psi_\epsilon(\xi))=\xi$; on the outer regions the profile is constant, so the residual vanishes pointwise there as well. At the two interfaces the traces of $u^\epsilon$, hence of $f_\epsilon(u^\epsilon)$, agree from both sides, so by [F2] no interface term arises and $u^\epsilon$ is a distributional weak solution of $u_t+f_\epsilon(u)_x=0$. The same computation applied to a convex $C^2$ pair $(\eta,q_\epsilon)$ with $q_\epsilon'=\eta'f_\epsilon'$ gives $\partial_t\eta(u^\epsilon)+\partial_xq_\epsilon(u^\epsilon)=\eta'(u^\epsilon)\bigl(u^\epsilon_t+f_\epsilon'(u^\epsilon)u^\epsilon_x\bigr)=0$ on each open branch and continuous traces $\eta(u^\epsilon),q_\epsilon(u^\epsilon)$ at the interfaces, so the entropy residual is identically $0$ for every convex $C^2$ pair. [F2, F5]


2.1 **The shock is entropic.** With $u^-=u_L$, $u^+=u_R$ and speed $s$, the function $F(z)=f(z)-f(u_L)-s(z-u_L)$ satisfies $F(u_L)=F(u_R)=0$, and by strict convexity [F4] the graph of $f$ lies strictly below the chord through $(u_L,f(u_L))$, $(u_R,f(u_R))$ on $(u_R,u_L)$; that chord has slope $s$, so $F(z)<0$ for $z\in(u_R,u_L)$. Since $u_R-u_L<0$, $F(z)(u_R-u_L)\ge0$ on $[u_R,u_L]$, and the chord criterion [F3] gives the entropy inequality for every convex $C^2$ pair. [F3, F4, step 1.1]


2.2 **The rarefaction profile and its inverse.** Assume $u_L<u_R$ and set $\xi_L=f'(u_L)<\xi_R=f'(u_R)$; by [F4] the inverse $\psi=(f')^{-1}\colon[\xi_L,\xi_R]\to[u_L,u_R]$ is continuous and strictly increasing. Define $U(\xi)=u_L$ for $\xi\le\xi_L$, $U(\xi)=\psi(\xi)$ for $\xi_L\le\xi\le\xi_R$, and $U(\xi)=u_R$ for $\xi\ge\xi_R$, and set $u(t,x)=U(x/t)$ for $t>0$. Then $u$ takes values in $[u_L,u_R]$, differs from $u_0$ only between $\min\{0,\xi_L\}t$ and $\max\{0,\xi_R\}t$, an interval of length $(\max\{0,\xi_R\}-\min\{0,\xi_L\})t$, and satisfies the strong local $L^1$ initial trace by the same estimate as in step 1.1. [F1, F4, F5]


2.3 **Passage to the limiting fan.** As $\epsilon\downarrow0$, $f_\epsilon'\to f'$ uniformly on $[u_L,u_R]$ by [F5], so the clamped inverse profiles converge uniformly on $\mathbb R$. Indeed, if $D=\max\{|u_L|,|u_R|\}$, then $|f_\epsilon'-f'|\le\epsilon D$ on the state interval, so $U(\xi-\epsilon D)\le U_\epsilon(\xi)\le U(\xi+\epsilon D)$. The extended continuous profile $U$ is uniformly continuous (it is constant outside a compact interval), yielding $\sup_\xi|U_\epsilon-U|\to0$; also $f_\epsilon\to f$ and $q_\epsilon\to q$ uniformly on the compact range $[u_L,u_R]$, where $q'=\eta'f'$ is the flux of the same convex pair for $f$. Passing to the limit in the weak residual: $\bigl|\int_{\Pi_T}(U_\epsilon(x/t)-U(x/t))\varphi_t\bigr|\le\sup|U_\epsilon-U|\,\|\varphi_t\|_1\to0$ and $\|f_\epsilon(U_\epsilon)-f(U)\|_\infty\le\|f_\epsilon-f\|_{\infty,[u_L,u_R]}+\mathrm{Lip}(f)\sup|U_\epsilon-U|\to0$, so $\int_{\Pi_T}(U\varphi_t+f(U)\varphi_x)=0$ and $u$ is a weak solution. The entropy residual passes similarly, so for every convex $C^2$ pair $(\eta,q)$ with $q'=\eta'f'$ one has $\int_{\Pi_T}\bigl(\eta(u)\varphi_t+q(u)\varphi_x\bigr)\ge0$ for every nonnegative $\varphi\in C_c^\infty(\Pi_T)$. [F6, step 1.2]


3.1 **Kruzhkov pairs by smoothing.** Fix $k\in\mathbb R$ and let $\eta^\delta(r)=\sqrt{(r-k)^2+\delta^2}-\delta$, a smooth convex function with $0\le\eta^\delta(r)\le|r-k|$ and $|\eta^\delta(r)-|r-k||\le\delta$, and let $q^\delta(s)=\int_k^s(\eta^\delta)'(r)f'(r)\,dr$, so that $(q^\delta)'=(\eta^\delta)'f'$. Since $z\mapsto\operatorname{sgn}(z-k)$ is bounded and $f'$ is continuous on the compact range of the profiles, dominated convergence gives $q^\delta(s)\to\int_k^s\operatorname{sgn}(r-k)f'(r)\,dr=\operatorname{sgn}(s-k)\bigl(f(s)-f(k)\bigr)=q_k(s)$ uniformly for $s$ in the profile range; and $\eta^\delta\to\eta_k$ uniformly there. Applying the entropy inequality of step 2.1 (shock case, via [F3]) or of step 2.3 (rarefaction case) to $(\eta^\delta,q^\delta)$ and passing to the limit using uniform convergence and $\varphi\in C_c^\infty$ gives $\int_{\Pi_T}\bigl(\eta_k(u)\varphi_t+q_k(u)\varphi_x\bigr)\ge0$ for every nonnegative $\varphi$; hence both profiles satisfy all Kruzhkov entropy inequalities. [F6, step 2.1, step 2.3]


4.1 **The constant case and uniqueness.** If $u_L=u_R$, the constant $u\equiv u_L$ is a distributional weak solution with the exact trace, and its entropy production vanishes, so it is a Kruzhkov entropy solution; any bounded Kruzhkov entropy solution with the same constant datum equals it by order preservation applied in both directions. In the cases (i) and (ii), the profiles are bounded Kruzhkov entropy solutions with datum $u_0$ by steps 1.1, 2.1, 2.2–2.3 and 3.1, and any bounded Kruzhkov entropy solution with datum $u_0$ coincides with the profile almost everywhere on $\Pi_T$ by [[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]] applied in both directions. This proves existence, uniqueness, and the asserted profile in each case. [step 1.1, step 2.1, step 2.2, step 1.2, step 2.3, step 3.1] ∎
