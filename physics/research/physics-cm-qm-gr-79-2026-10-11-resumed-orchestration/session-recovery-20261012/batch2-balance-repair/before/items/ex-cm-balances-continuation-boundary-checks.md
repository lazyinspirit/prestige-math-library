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

Let $D:=\mathbb R\times\mathbb R$, and for $z\in\mathbb R$ put $G_+(z):=z^2$ and $G_-(z):=-z^2$; both are polynomial, hence finite at every point of $D$, and locally Lipschitz in the state variable (in the sense of [[def-locally-lipschitz-in-the-state-variable]], verified below).

**(i) Finite-time breakdown despite a pointwise-finite vector field.** The function $x_+:[0,1)\to\mathbb R$, $x_+(t):=\frac{1}{1-t}$, solves $x'=G_+(x)$ with $x(0)=1$ on $[0,1)$, and no solution of this initial value problem extends past $b=1$. For every compact $K\subseteq D$ and every $\eta>0$ there is $t\in(1-\eta,1)$ with $(t,x_+(t))\notin K$: the graph leaves every compact subset of $D$ as $t\uparrow1$. In particular the boundedness assertion of [[thm-cm-compact-continuation-for-locally-lipschitz-odes]] genuinely fails here, and its escape consequence [[cor-cm-finite-time-breakdown-requires-escape]] is witnessed explicitly.

**(ii) Trapping forces continuation.** The function $x_-:[0,\infty)\to\mathbb R$, $x_-(t):=\frac{1}{1+t}$, solves $x'=G_-(x)$ with $x(0)=1$, and its values lie in the compact set $K_0:=[0,1]\subseteq\mathbb R$. Consequently no finite right endpoint can occur for this solution: were there a finite $b$ beyond which it failed to extend, clause 2 of [[cor-cm-finite-time-breakdown-requires-escape]] would produce an extension, a contradiction; and indeed the displayed formula is defined and bounded on all of $[0,\infty)$.

Both fields are the same polynomial expression up to sign, so (i) and (ii) exhibit the continuation criterion of [[thm-cm-compact-continuation-for-locally-lipschitz-odes]] as a statement about compact trapping, not about pointwise finiteness of the vector field.

## Facts & Assumptions

**Given:** The open set $D=\mathbb R\times\mathbb R$, the polynomial fields $G_\pm(z)=\pm z^2$, and the two initial value problems $x'=G_\pm(x)$, $x(0)=1$ in the sense of [[def-first-order-ode-initial-value-problem-and-solution]].

[L1] Algebra of derivatives: sums, products and quotients of differentiable real functions on an interval are differentiable with the sum, product and quotient rules ([[def-derivative]], [[thm-algebra-of-derivatives]], [[def-interval]]); differentiability implies continuity ([[cor-differentiable-implies-continuous]]).

[L2] A continuous real function on a nonempty compact metric space is bounded and attains its bounds ([[thm-extreme-value-metric]]); a compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]); a closed bounded subset of $\mathbb R^n$, $n\ge1$, is compact ([[thm-heine-borel-rn]]).

[L3] Mean value inequality: if $g:[a,b]\to\mathbb R$ is continuous and differentiable on $(a,b)$ with $|g'|\le L$ on $(a,b)$, then $|g(b)-g(a)|\le L(b-a)$ ([[thm-mean-value-inequality]]).

## Verification

**Proof technique:** direct.

1.1 The quotient rule [L1] applied to $x_+(t)=(1-t)^{-1}$ gives $x_+'(t)=(1-t)^{-2}=x_+(t)^2$ on $[0,1)$, and $x_+(0)=1$; the same rule applied to $x_-(t)=(1+t)^{-1}$ gives $x_-'(t)=-(1+t)^{-2}=-x_-(t)^2$ on $[0,\infty)$, and $x_-(0)=1$. [given, L1, algebra]


1.2 Local Lipschitz continuity of $G_\pm$: let $C\subseteq D$ be a compact cylinder and let $S\subseteq\mathbb R$ be its state projection, a compact nonempty set; [L2] makes $L:=\max\{|G_\pm'(z)|:z\in S\}$ finite. For $(t,z),(t,w)\in C$, applying [L3] to $G_\pm$ on the interval between $z$ and $w$ gives $|G_\pm(z)-G_\pm(w)|\le L|z-w|$ with the same $L$; hence $G_\pm$ is locally Lipschitz in the state variable in the sense of [[def-locally-lipschitz-in-the-state-variable]]. [given, L2, L3]


2.1 Non-extendability in (i): suppose a solution $\tilde x$ of $x'=G_+(x)$, $x(0)=1$ existed on $[0,1+\varepsilon)$ for some $\varepsilon>0$. Both $\tilde x$ and $x_+$ solve the same initial value problem on the common interval $[0,1)$ containing $0$, and $G_+$ is locally Lipschitz by step 1.2, so the uniqueness clause of Picard-Lindelöf ([[thm-picard-lindelof-local-existence-and-uniqueness]]) gives $\tilde x=x_+$ on $[0,1)$; hence $\tilde x(t)=\frac{1}{1-t}\to+\infty$ as $t\uparrow1$; but $\tilde x$ is differentiable, hence continuous [L1], on the compact interval $[0,1]$, so [L2] bounds $|\tilde x|$ there — a contradiction. Hence no extension past $b=1$ exists. [step 1.1, step 1.2, given, L1, L2]


3.1 Escape in (i): let $K\subseteq D$ be compact and $\eta\in(0,1)$. By [L2], $K$ is bounded, so there is $R>0$ with $|z|\le R$ for every $(t,z)\in K$. Choose $t\in(1-\eta,1)$ with $\frac{1}{1-t}>R$, which is possible since $\frac{1}{1-t}\to+\infty$; then $x_+(t)>R$, so $(t,x_+(t))\notin K$. This is the escape asserted by [[cor-cm-finite-time-breakdown-requires-escape]] for this solution. [step 2.1, given, L2, algebra]


4.1 Trapping in (ii): $K_0=[0,1]\subseteq\mathbb R=\mathbb R^1$ is closed and bounded, hence compact by [L2]; and $0<x_-(t)\le1$ for every $t\ge0$, so $x_-(t)\in K_0$ for all $t$. If the solution had a finite right endpoint $b$ with $0<b<+\infty$, then for all $t$ in a left neighbourhood $(b-\delta,b)$ of $b$ the state $x_-(t)$ would lie in the compact $K_0\subseteq\mathbb R=U$; clause 2 of [[cor-cm-finite-time-breakdown-requires-escape]] (equivalently clause 2 of [[thm-cm-compact-continuation-for-locally-lipschitz-odes]]) would then extend the solution past $b$, contradicting the assumption that $b$ was the endpoint. Hence no finite right endpoint exists, in agreement with the explicit global formula. [step 1.1, step 1.2, given, L2, algebra] ∎
