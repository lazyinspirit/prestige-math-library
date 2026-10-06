---
id: ex-wave-support-from-pure-displacement-versus-pure-velocity-data
kind: example
title: "Displacement data versus velocity data in one dimension"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
proof_strategy: direct
deps: [thm-dalembert-formula, lem-dalembert-formula-attains-both-initial-data, ex-one-dimensional-wave-from-a-compactly-supported-velocity, cor-one-dimensional-wave-domain-of-dependence]
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
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed pp. 211–212: the two initial conditions and their different roles"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #10: Introduction to the Wave Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ccd4ae63858e855c18c96ce96a797b9b_MIT18_152F11_lec_10.pdf"
      locator: "§4, printed pp. 4–5: displacement and velocity contributions in (4.0.14)–(4.0.15)"
---


## Example

Let $c>0$, $a>0$, $t\ge0$, and let $u_0\in C_c^2(\mathbb R)$ and $u_1\in C_c^1(\mathbb R)$, with $\operatorname{supp}u_0,\operatorname{supp}u_1\subseteq[-a,a]$. The two terms of the classical d'Alembert formula of [[thm-dalembert-formula]] behave differently:
(i) pure displacement, $u_1=0$: $u(x,t)=\frac12(u_0(x-ct)+u_0(x+ct))$ is the sum of two half-amplitude copies of the profile translating rigidly at speed $c$; each component preserves its own values and the support lies in $[-a-ct,a+ct]$.
(ii) pure velocity, $u_0=0$: $u(x,t)=\frac{1}{2c}\int_{x-ct}^{x+ct}u_1$ is $t$ times the interval average of $u_1$ for $t>0$, and hence is an integral over a growing interval: where the whole support of $u_1$ lies inside the interval the value is the constant $\frac{1}{2c}\int u_1$, and the profile is smoothed by integration rather than generally undergoing a rigid translation. For the bounded indicator extension $u_1=\mathbf 1_{[-a,a]}$, this integral is the expanding plateau of [[ex-one-dimensional-wave-from-a-compactly-supported-velocity]]; that indicator example describes the formula extension, while the present Cauchy-problem data are classical. Both classical solutions are supported in $[-a-ct,a+ct]$, consistent with [[cor-one-dimensional-wave-domain-of-dependence]].

## Facts & Assumptions

**Given:** a speed $c>0$, $a>0$, compactly supported data $u_0\in C_c^2(\mathbb R)$, $u_1\in C_c^1(\mathbb R)$ with supports in $[-a,a]$, and the classical d'Alembert solution $u$ of [[thm-dalembert-formula]].

[F1] For admissible data the d'Alembert solution is $u(x,t)=\frac12(u_0(x-ct)+u_0(x+ct))+\frac{1}{2c}\int_{x-ct}^{x+ct}u_1(y)\,dy$ ([[thm-dalembert-formula]], [[lem-dalembert-formula-attains-both-initial-data]]).

[F2] The value at $(x,t)$ depends on the data only through their restrictions to $[x-ct,x+ct]$ ([[cor-one-dimensional-wave-domain-of-dependence]]).

[F3] For $u_1=\mathbf 1_{[-a,a]}$ the integral extension is the expanding plateau computed in [[ex-one-dimensional-wave-from-a-compactly-supported-velocity]].

## Verification

1.1 Pure displacement. Setting $u_1=0$ in [F1] leaves $u(x,t)=\frac12u_0(x-ct)+\frac12u_0(x+ct)$. Each summand is a rigid translate of the half-amplitude profile $u_0/2$. Their supports lie in the translates $[-a+ct,a+ct]$ and $[-a-ct,a-ct]$, so the total support lies in $[-a-ct,a+ct]$. Where the two profiles overlap they add, and can reinforce or cancel; preservation of amplitude is a claim about the individual translating summands. [F1, algebra]


1.2 Pure velocity. Setting $u_0=0$ leaves $u(x,t)=\frac{1}{2c}\int_{x-ct}^{x+ct}u_1$, the overlap integral of the datum with the interval $[x-ct,x+ct]$, which equals the constant $\frac{1}{2c}\int u_1$ whenever $\operatorname{supp}u_1\subseteq[x-ct,x+ct]$; for $u_1\in C_c^1$ the profile gains one derivative and generally changes shape through integration rather than translating a fixed profile. The bounded indicator extension in [F3] has the exact plateau computed there, though the present classical solution claim uses the stated $C_c^1$ data. [F1, F3, algebra]

2.1 Support. In both cases the data vanish outside $[-a,a]$, so by [F1] the value is zero unless $[x-ct,x+ct]\cap[-a,a]\ne\emptyset$, that is unless $|x|\le a+ct$; continuity of the compactly supported data makes the value zero also at $|x|=a+ct$; this is the one-dimensional instance of the domain of dependence [F2]. [F1, F2, algebra] ∎ 
