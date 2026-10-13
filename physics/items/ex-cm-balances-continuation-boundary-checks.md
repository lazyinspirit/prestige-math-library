---
id: ex-cm-balances-continuation-boundary-checks
kind: example
title: "Breakdown versus trapping: the blow-up of $x'=x^2$ and the global trapped solution of $x'=-x^2$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-cm-compact-continuation-for-locally-lipschitz-odes, cor-cm-finite-time-breakdown-requires-escape, def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable, def-derivative, def-interval, thm-algebra-of-derivatives, thm-picard-lindelof-local-existence-and-uniqueness, thm-heine-borel-rn, thm-extreme-value-metric, thm-mean-value-inequality, thm-compact-subset-is-closed-and-bounded, cor-differentiable-implies-continuous]
dependency_roles:
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  cor-cm-finite-time-breakdown-requires-escape: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, §2.6, printed pp. 50-53: the blow-up of $x'=x^2$ and the compact-continuation criterion"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Julien Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), §1.3, Theorem 1.3.7 and its remark, printed pp. 27-28: maximal intervals and approach to the boundary"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
---

## Example

Let $D:=\mathbb R\times\mathbb R$. For $z\in\mathbb R$ define $G_+(z):=z^2$ and $G_-(z):=-z^2$, and define the autonomous vector fields $F_\pm:D\to\mathbb R$ by $F_\pm(t,z):=G_\pm(z)$. Their continuity and local Lipschitz property in the state variable are verified below.

**(i) Finite-time breakdown despite a pointwise-finite vector field.** The function $x_+:[0,1)\to\mathbb R$, $x_+(t):=\frac{1}{1-t}$, solves $x'(t)=F_+(t,x_+(t))$ with $x(0)=1$ on $[0,1)$, and no solution of this initial value problem extends past $b=1$. For every compact $K\subseteq D$ and every $\eta>0$ there is $t\in(1-\eta,1)$ with $(t,x_+(t))\notin K$: the graph leaves every compact subset of $D$ as $t\uparrow1$. The compact-containment hypothesis of [[thm-cm-compact-continuation-for-locally-lipschitz-odes]] fails here, and its escape consequence [[cor-cm-finite-time-breakdown-requires-escape]] is witnessed explicitly.

**(ii) Trapping forces continuation.** The function $x_-:[0,\infty)\to\mathbb R$, $x_-(t):=\frac{1}{1+t}$, solves $x'(t)=F_-(t,x_-(t))$ with $x(0)=1$, and its values lie in the compact set $K_0:=[0,1]\subseteq\mathbb R$. For each finite $b>0$, its restriction to $[0,b)$ is trapped in $K_0$, so clause 2 of [[cor-cm-finite-time-breakdown-requires-escape]] extends it past $b$; thus no finite right endpoint is nonextendable, and the displayed formula supplies a global extension on $[0,\infty)$.

Both fields are the same polynomial expression up to sign, so (i) and (ii) exhibit the continuation criterion of [[thm-cm-compact-continuation-for-locally-lipschitz-odes]] as a statement about compact trapping, not about pointwise finiteness of the vector field.

## Facts & Assumptions

**Given:** $D=\mathbb R\times\mathbb R$, the state maps $G_\pm(z)=\pm z^2$, the vector fields $F_\pm(t,z)=G_\pm(z)$, and the two initial value problems $x'=F_\pm(t,x)$, $x(0)=1$ in the sense of [[def-first-order-ode-initial-value-problem-and-solution]].

[L1] Algebra of derivatives: sums, products and quotients of differentiable real functions on an interval are differentiable with the sum, product and quotient rules ([[def-derivative]], [[thm-algebra-of-derivatives]], [[def-interval]]); differentiability implies continuity ([[cor-differentiable-implies-continuous]]).

[L2] A continuous real function on a nonempty compact metric space is bounded and attains its bounds ([[thm-extreme-value-metric]]); a compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]); a closed bounded subset of $\mathbb R^n$, $n\ge1$, is compact ([[thm-heine-borel-rn]]).

[L3] Mean value inequality: if $g:[a,b]\to\mathbb R$ is continuous and differentiable on $(a,b)$ with $|g'|\le L$ on $(a,b)$, then $|g(b)-g(a)|\le L(b-a)$ ([[thm-mean-value-inequality]]).

## Verification

**Proof technique:** direct.

1.1 The quotient rule [L1] gives $x_+'(t)=(1-t)^{-2}=x_+(t)^2=F_+(t,x_+(t))$ on $[0,1)$ and $x_+(0)=1$, and $x_-'(t)=-(1+t)^{-2}=-x_-(t)^2=F_-(t,x_-(t))$ on $[0,\infty)$ and $x_-(0)=1$. [given, L1, algebra]


1.2 Local Lipschitz continuity of $F_\pm$: by [L1], $G_\pm$ are differentiable and continuous, with $G_\pm'(z)=\pm2z$; consequently $F_\pm$ are continuous, since $(t,z)\to(t_0,z_0)$ implies $z\to z_0$ and $F_\pm(t,z)=G_\pm(z)$. Here a compact time-state cylinder means $C=T\times[a,b]$, where $T\subseteq\mathbb R$ is a compact interval and $a\le b$; this includes the one-dimensional closed-ball cylinders used in [L2] of [[thm-cm-compact-continuation-for-locally-lipschitz-odes]]. Put $S:=[a,b]$. Set $R:=\max\{|a|,|b|\}$, so $|G_\pm'(z)|\le2R$ on $S$. For $(t,z),(t,w)\in C$ with the same time and $z\ne w$, the mean value inequality [L3] on the interval between $z$ and $w$ gives $|F_\pm(t,z)-F_\pm(t,w)|=|G_\pm(z)-G_\pm(w)|\le2R|z-w|$, since that interval lies in $S$; for $z=w$ the inequality is immediate. If $C$ is empty it holds with $L=0$. This verifies the local Lipschitz condition of [[def-locally-lipschitz-in-the-state-variable]] on every such cylinder. [given, L1, L3]


2.1 Non-extendability in (i): suppose a solution $\widetilde x$ of the IVP $x'(t)=F_+(t,x(t))$, $x(0)=1$ existed on $[0,1+\varepsilon)$ for some $\varepsilon>0$. Both $\widetilde x$ and $x_+$ solve the same IVP on the common interval $[0,1)$ containing $0$, and $F_+$ is continuous and locally Lipschitz in the state variable by step 1.2. The uniqueness clause of Picard-Lindelöf ([[thm-picard-lindelof-local-existence-and-uniqueness]]) gives $\widetilde x=x_+$ on $[0,1)$, so $\widetilde x(t)=1/(1-t)\to+\infty$ as $t\uparrow1$. But $\widetilde x$ is continuous [L1] on the compact interval $[0,1]$, so [L2] bounds $|\widetilde x|$ there, a contradiction. Hence no extension past $b=1$ exists. [step 1.1, step 1.2, given, L1, L2]


3.1 Escape in (i): let $K\subseteq D$ be compact and $\eta>0$. Put $\eta_0:=\min\{\eta,1/2\}>0$, so $(1-\eta_0,1)\subseteq(1-\eta,1)$ and all times in the smaller interval lie in $[0,1)$. By [L2], $K$ is bounded, so there is $R>0$ with $|z|\le R$ for every $(t,z)\in K$. Choose $t\in(1-\eta_0,1)$ with $\frac{1}{1-t}>R$, which is possible since $\frac{1}{1-t}\to+\infty$; then $x_+(t)>R$, so $(t,x_+(t))\notin K$. This is the escape asserted by [[cor-cm-finite-time-breakdown-requires-escape]] for this solution. [step 2.1, given, L2, algebra]


4.1 Trapping in (ii): $K_0=[0,1]\subseteq\mathbb R=\mathbb R^1$ is closed and bounded, hence compact by [L2], and $0<x_-(t)\le1$ for every $t\ge0$, so $x_-(t)\in K_0$ throughout its domain. For any finite $b>0$, its restriction to $[0,b)$ is a solution trapped in $K_0$ near $b$; clause 2 of [[cor-cm-finite-time-breakdown-requires-escape]] therefore extends that restriction past $b$. Thus no finite right endpoint can be a nonextendable endpoint for this solution, and the displayed formula gives its global extension. [step 1.1, step 1.2, given, L2, algebra] ∎
