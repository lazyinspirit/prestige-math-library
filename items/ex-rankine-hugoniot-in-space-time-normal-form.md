---
id: ex-rankine-hugoniot-in-space-time-normal-form
kind: example
title: A planar discontinuity and the space--time normal form of Rankine--Hugoniot
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-scalar-conservation-law-and-flux, def-distributional-weak-solution-of-a-scalar-conservation-law, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-ftc-second-part, thm-differentiation-under-the-integral-sign, thm-chain-rule, thm-algebra-of-derivatives, lem-schwartz-cutoffs-from-the-standard-smooth-step]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§4.2, pp. 20--23"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.2, pp. 11--14"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $n\ge2$, $T>0$, $f\in C^1(\mathbb R;\mathbb R^n)$, $c\in\mathbb R$, a unit
vector $\eta\in\mathbb R^n$, and distinct states $u_L,u_R\in\mathbb R$.
Prescribe the Riemann datum $u_0(x)=u_L$ for $x\cdot\eta<0$ and
$u_0(x)=u_R$ for $x\cdot\eta>0$, and for $0<t<T$ set $u(t,x)=u_L$ when
$x\cdot\eta<ct$ and $u(t,x)=u_R$ when $x\cdot\eta>ct$. This bounded
piecewise-constant function has strong local $L^1$ initial trace $u_0$ and is a
distributional weak solution of $u_t+\operatorname{div}_x f(u)=0$ exactly when
$$(f(u_R)-f(u_L))\cdot\eta=c\,(u_R-u_L).$$
The plane interface $\Gamma=\{(t,x):x\cdot\eta=ct\}$ has unit normal from the
left side to the right side $\nu=(-c,\eta)/\sqrt{1+c^2}$; hence the equivalent
space--time normal equation is
$$[u]\nu_t+[f(u)]\cdot\nu_x=\frac{-c\,(u_R-u_L)+(f(u_R)-f(u_L))\cdot\eta}{\sqrt{1+c^2}}=0,$$
where $[u]=u_R-u_L$ and $[f(u)]=f(u_R)-f(u_L)$. This direct plane calculation
uses no division by the jump.

## Facts & Assumptions

**Given:** $n\ge2$, $T>0$, $f\in C^1(\mathbb R;\mathbb R^n)$, a unit vector $\eta\in\mathbb R^n$, $c\in\mathbb R$, distinct $u_L,u_R$, the piecewise constant function $u$ above, and a test function $\varphi\in C_c^\infty(\mathbb R^n\times(-\infty,T))$.

[F1] The Cauchy weak identity is the integral over $0<t<T$ with its initial term ([[def-distributional-weak-solution-of-a-scalar-conservation-law]]). For this profile the interior equation and the strong trace established in step 1.1 give that identity by a time cutoff and passage to $t=0$ ([[def-scalar-conservation-law-and-flux]]).

[F2] On the graph $x_k=\gamma(t,x')$, Fubini's theorem reduces the space--time integral to iterated integrals, the one-dimensional fundamental theorem of calculus evaluates the $x_k$-integral against $\partial_{x_k}\varphi$ at the moving endpoint, differentiation under the integral sign with the chain rule differentiates the endpoint $\gamma$ in the remaining variables (the compactly supported smooth test supplies a uniform integrable majorant), and products of smooth functions are smooth ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-ftc-second-part]], [[thm-differentiation-under-the-integral-sign]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[F3] For every point of an open set and every neighbourhood of it there is a nonnegative smooth compactly supported test function, supported in that neighbourhood and positive at the point: take a finite product of rescaled translated copies of the bump of [[lem-schwartz-cutoffs-from-the-standard-smooth-step]].

## Proof

**Proof technique:** direct.

1.1 **The initial trace.** For a compact $K\subseteq\mathbb R^n$ and $0<t<T$, the two definitions of $u(t,x)$ and $u_0(x)$ differ exactly on $\{x\in K: x\cdot\eta\text{ lies strictly between }0\text{ and }ct\}$, a set of measure at most $C_K|t|$; hence $\int_K|u(t,x)-u_0(x)|\,dx\le|u_R-u_L|\,C_K|t|\to0$ as $t\downarrow0$. So $u$ has the strong local $L^1$ trace $u_0$. [F1, given]


1.2 **The interface computation.** Choose $k$ with $\eta_k\ne0$, and put $\gamma(t,x')=(ct-\sum_{j\ne k}\eta_jx_j)/\eta_k$. For a test supported in $t>0$, integrate first in $x_k$ on each side of $x_k=\gamma$. FTC and the moving-endpoint rule give the weak pairing $$\frac1{|\eta_k|}\int_{\mathbb R^{n-1}\times(0,T)}\varphi(t,x',\gamma(t,x'))\bigl(c[u]-[f]\cdot\eta\bigr)\,dx'\,dt.$$ For $\eta_k>0$ the lower side is the left state; for $\eta_k<0$ the lower side is the right state, which reverses the jump and converts $\eta_k$ to $|\eta_k|$. The endpoint derivatives are $\gamma_t=c/\eta_k$ and $\gamma_{x_j}=-\eta_j/\eta_k$. [F1, F2, given]


2.1 **The initial boundary.** For a test meeting $t=0$, perform the same integration on $\delta<t<T$. The bottom term is $-\int u(\delta,x)\varphi(\delta,x)\,dx$. By step 1.1 it converges to $-\int u_0\varphi(0,x)\,dx$, cancelling the prescribed initial term. Thus the full Cauchy residual is the interface integral of step 1.2 over $0<t<T$. [F1, F2, step 1.1, step 1.2]


3.1 **Necessity.** If $c(u_R-u_L)-(f(u_R)-f(u_L))\cdot\eta\ne0$, then it is nonzero on a small interface patch; by [F3] there is a nonnegative smooth compactly supported test function supported in a small space--time neighbourhood of a point of that patch and positive on the patch, and step 2.1 makes the weak residual for this test nonzero, contradicting the weak identity. [F3, step 2.1]


4.1 **Sufficiency and normal form.** Conversely, if $(f(u_R)-f(u_L))\cdot\eta=c(u_R-u_L)$, the interface bracket vanishes identically and step 2.1 shows that the weak identity holds for every test function; the trace was verified in step 1.1, so $u$ is a distributional weak solution. Since $\eta$ is a unit vector, $\nabla_{t,x}(x\cdot\eta-ct)=(-c,\eta)$ has length $\sqrt{1+c^2}$, so the unit normal from the minus side is $\nu=(-c,\eta)/\sqrt{1+c^2}$ and the condition becomes $[u]\nu_t+[f(u)]\cdot\nu_x=(-c[u]+[f(u)]\cdot\eta)/\sqrt{1+c^2}=0$. No division by the jump was used at any point. [step 1.1, step 3.1, F1] ∎
