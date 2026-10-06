---
id: lem-dalembert-formula-attains-both-initial-data
kind: lemma
title: "The d'Alembert expression attains both initial data"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
proof_strategy: direct
deps: [thm-dalembert-formula, lem-derivative-of-an-integral-with-moving-endpoints, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed pp. 168–169, Theorem 7.2 and the recovery of the data (the converse verification)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3.3, printed p. 48, (2.3.10)–(2.3.11): matching the data against $\\phi,\\psi$"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #10: Introduction to the Wave Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ccd4ae63858e855c18c96ce96a797b9b_MIT18_152F11_lec_10.pdf"
      locator: "§4, printed p. 5, the data check after (4.0.14)"
---


## Statement

Let $c>0$, $u_0\in C^2(\mathbb R)$, $u_1\in C^1(\mathbb R)$ and let $A$ be the d'Alembert expression of [[thm-dalembert-formula]],
$$A(x,t):=\frac12\bigl(u_0(x-ct)+u_0(x+ct)\bigr)+\frac{1}{2c}\int_{x-ct}^{x+ct}u_1(y)\,dy .$$
Then $A\in C^2(\mathbb R\times[0,\infty))$, $A(x,0)=u_0(x)$ for every $x$, and
$$\partial_tA(x,t)=\frac12\bigl(-cu_0'(x-ct)+cu_0'(x+ct)\bigr)+\frac12\bigl(u_1(x+ct)+u_1(x-ct)\bigr),$$
so $\partial_tA(x,0)=u_1(x)$. The orientation of the velocity integral is the $+$ sign in the second bracket: both ends of the characteristic base are traversed with speed $c$, and the two endpoint contributions add.

## Facts & Assumptions

**Given:** a speed $c>0$, data $u_0\in C^2(\mathbb R)$, $u_1\in C^1(\mathbb R)$, and the expression $A$ of the statement.

[F1] Let $\alpha,\beta\in C^1(I)$ with $\alpha<\beta$ and let $F$ be continuous on $I\times J$ with continuous $\partial_tF$, where $J$ contains the closure of the union of the intervals $[\alpha(t),\beta(t)]$. Then $G(t)=\int_{\alpha(t)}^{\beta(t)}F(t,y)\,dy$ is $C^1$ with $G'(t)=F(t,\beta(t))\beta'(t)-F(t,\alpha(t))\alpha'(t)+\int_{\alpha(t)}^{\beta(t)}\partial_tF(t,y)\,dy$ ([[lem-derivative-of-an-integral-with-moving-endpoints]]).

[F2] Sums, constant multiples of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]).

[F3] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]). The required total differentiability follows from continuous coordinate partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

## Proof

1.1 Displacement at $t=0$. At $t=0$ the two displacement terms are both $u_0(x)$ and the integral has equal endpoints, so $A(x,0)=\frac12\bigl(u_0(x)+u_0(x)\bigr)+0=u_0(x)$ for every $x\in\mathbb R$. [algebra]

1.2 Velocity. For $t>0$, by [F1] applied to the integral term with $\alpha(t)=x-ct$, $\beta(t)=x+ct$, $\alpha'(t)=-c$, $\beta'(t)=c$ and inner integrand $u_1$, $\partial_tA(x,t)=\frac12\bigl(-cu_0'(x-ct)+cu_0'(x+ct)\bigr)+\frac{1}{2c}\bigl(c\,u_1(x+ct)+c\,u_1(x-ct)\bigr)=\frac12\bigl(-cu_0'(x-ct)+cu_0'(x+ct)\bigr)+\frac12\bigl(u_1(x+ct)+u_1(x-ct)\bigr)$; the displacement term is differentiated by [F2] and [F3]. Continuity of the data and the $C^2$ regularity supplied by [[thm-dalembert-formula]] extend this derivative formula to $t=0$. [F1, F2, F3, algebra]

2.1 Setting $t=0$ in the velocity formula gives $\partial_tA(x,0)=\frac12(-cu_0'(x)+cu_0'(x))+\frac12(u_1(x)+u_1(x))=u_1(x)$; the regularity $A\in C^2(\mathbb R\times[0,\infty))$ is established in [[thm-dalembert-formula]]. Hence $A$ attains both initial data, and the two endpoint contributions of the velocity integral add with a $+$ sign as displayed. [F1, algebra] ∎ 