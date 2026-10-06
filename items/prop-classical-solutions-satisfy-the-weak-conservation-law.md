---
id: prop-classical-solutions-satisfy-the-weak-conservation-law
kind: proposition
title: Classical solutions are distributional weak solutions, and conversely
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-scalar-conservation-law-and-flux, def-distributional-weak-solution-of-a-scalar-conservation-law, thm-ftc-second-part, thm-chain-rule, thm-algebra-of-derivatives, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-countable-choice, thm-locally-integrable-functions-embed-in-distributions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§4.1, Theorem 4.1, Corollary 4.2 and (4.3), pp. 18--20"
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§2, relation of (2.1) to (1.6), p. 221"
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

Assume Countable Choice ([[def-countable-choice]]) for the injectivity interface below. Let $n\ge1$, $T>0$, $f\in C^1(\mathbb R;\mathbb R^n)$ and
$u_0\in L^\infty(\mathbb R^n)\cap L^1_{\mathrm{loc}}(\mathbb R^n)$.

(i) If $u\in C^1(\Pi_T)\cap C^0([0,T];L^1_{\mathrm{loc}}(\mathbb R^n))\cap L^\infty(\Pi_T)$
satisfies $u_t+\operatorname{div}_x f(u)=0$ pointwise in $\Pi_T$ and has initial
trace $u(\cdot,t)\to u_0$ in $L^1_{\mathrm{loc}}$ as $t\downarrow0$, then $u$ is
a distributional weak solution in the sense of
[[def-distributional-weak-solution-of-a-scalar-conservation-law]].

(ii) Conversely, if $u$ is a bounded distributional weak solution,
$u\in C^1(\Pi_T)$, and $u(\cdot,t)$ has an $L^1_{\mathrm{loc}}$-continuous trace
$\bar u_0$ as $t\downarrow0$, then $u_t+\operatorname{div}_x f(u)=0$ pointwise in
$\Pi_T$ and $\bar u_0=u_0$ as $L^1_{\mathrm{loc}}$ equivalence classes.

The initial-trace conclusion is an almost-everywhere class equality; no
pointwise representative on $t=0$ is asserted
([[def-scalar-conservation-law-and-flux]]).

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $T>0$, $f\in C^1(\mathbb R;\mathbb R^n)$, $u_0\in L^\infty\cap L^1_{\mathrm{loc}}$, a classical solution $u\in C^1(\Pi_T)$ satisfying $u_t+\operatorname{div}_x f(u)=0$ pointwise with an $L^1_{\mathrm{loc}}$ initial trace (i), and, in (ii), a bounded distributional weak solution $u\in C^1(\Pi_T)$ with an $L^1_{\mathrm{loc}}$-continuous initial trace $\bar u_0$.

[F1] For a $C^1$ function $u$ the composition $f(u)$ is $C^1$ with $\operatorname{div}_x f(u)=f'(u)\cdot\nabla_xu$, by the chain rule and the algebra of derivatives; the Laplacian-free flux is locally integrable on compact space--time boxes ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-scalar-conservation-law-and-flux]]).

[F2] Integration by parts on a box follows coordinatewise from [[thm-ftc-second-part]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] applied to the $C^1$ products $u\varphi$ and $f_i(u)\varphi$. Compact support kills spatial and terminal faces. No surface divergence theorem is used.

[F3] A continuous function on an open set whose integral against every compactly supported smooth test function vanishes is identically zero there; testing against a translate of a fixed nonzero smooth compactly supported bump gives a nonzero pairing where the function does not vanish ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F4] Under Countable Choice, two locally integrable functions with equal pairings against every smooth compactly supported test represent the same almost-everywhere class ([[thm-locally-integrable-functions-embed-in-distributions]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\varphi\in C_c^\infty(\mathbb R^n\times(-\infty,T))$ and choose $Q_R=(-R,R)^n$ and $\tau$ with $\operatorname{supp}\varphi\subset Q_R\times(-\infty,\tau)$, $\tau<T$. Multiplying the pointwise equation by $\varphi$ and integrating over $Q_R\times(\delta,\tau)$, $0<\delta<\tau$, [F2] gives $0=\int_{Q_R}u\varphi\big|_{\delta}^{\tau}\,dx-\int_\delta^\tau\!\!\int_{Q_R}u\,\varphi_t-\int_\delta^\tau\!\!\int_{Q_R}f(u)\cdot\nabla_x\varphi$, since $\varphi$ vanishes on the lateral and terminal faces. [F1, F2]


1.2 For (ii), test the weak identity with $\varphi\in C_c^\infty(\Pi_T)$ (so $\varphi=0$ near $t=0$): integration by parts over the support of $\varphi$ gives $0=\int_{\Pi_T}(u\varphi_t+f(u)\cdot\nabla_x\varphi)=-\langle u_t+\operatorname{div}_xf(u),\varphi\rangle$, where the residual $R:=u_t+\operatorname{div}_xf(u)$ is continuous by [F1]. By [F3] applied on the open set $\Pi_T$, $R\equiv0$, so the equation holds pointwise. [F1, F3, given]


2.1 In step 1.1 the terminal term vanishes and $\varphi(\cdot,\delta)\to\varphi(\cdot,0)$ uniformly on the compact spatial support while $u(\cdot,\delta)\to u_0$ in $L^1_{\mathrm{loc}}$; letting $\delta\downarrow0$ gives $\int_{\Pi_T}(u\varphi_t+f(u)\cdot\nabla_x\varphi)\,dx\,dt+\int_{\mathbb R^n}u_0\varphi(\cdot,0)\,dx=0$, which is the weak formulation for this test function. As $\varphi$ was arbitrary, (i) holds. [F2, given, step 1.1]


3.1 **Identification of the trace.** Fix $\psi\in C_c^\infty(\mathbb R^n)$ and $\beta\in C_c^\infty((-\infty,T))$ with $\beta(0)=1$. The pointwise equation from step 1.2, integrated on a box times $(\delta,\tau)$ containing the positive-time support of $\psi\beta$, gives the calculation of steps 1.1 and 2.1 with trace $\bar u_0$. Hence $\int_{\Pi_T}(u\varphi_t+f(u)\cdot\nabla\varphi)+\int\bar u_0\psi=0$ for $\varphi=\psi\beta$. Subtract the given weak identity, whose bottom term is $\int u_0\psi$, to get $\int(\bar u_0-u_0)\psi=0$. By [F4], $\bar u_0=u_0$ almost everywhere. [F2, F4, given, step 1.2, step 2.1] ∎
