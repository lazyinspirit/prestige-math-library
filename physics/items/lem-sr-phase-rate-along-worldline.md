---
id: lem-sr-phase-rate-along-worldline
kind: lemma
title: 'The phase rate along a worldline is the wave covector evaluated on the four-velocity'
status: draft
origin: pipeline
domain: mathematics
deps: [def-sr-affine-phase-and-wave-covector,
       lem-sr-future-causal-pairing-negative,
       def-sr-regular-causal-curve-and-worldline,
       def-sr-proper-time,
       lem-sr-proper-time-parametrization,
       def-sr-four-velocity-and-four-acceleration,
       thm-sr-proper-time-and-observer-decomposition,
       thm-chain-rule, cor-mean-value-theorem, def-derivative]
dependency_roles:
  def-sr-affine-phase-and-wave-covector: mathematical-premise
  lem-sr-future-causal-pairing-negative: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  lem-sr-proper-time-parametrization: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-derivative: mathematical-premise
dependency_level: 12
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 6.4 Duality pp. 134-137 and Section 6.5.1 Doppler shift p. 137; signature (+---) converted to (-+++)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28, phase matching and the wave four-vector (6.1)-(6.5) pp. 25-26'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
---

## Statement

Let $\theta$ be an affine phase function with wave covector $k$ ([[def-sr-affine-phase-and-wave-covector]]). Then:

**(a)** for every $C^1$ curve $\gamma:I\to A$ in the sense of [[def-sr-affine-phase-and-wave-covector]], clause (b), one has $(\theta\circ\gamma)'(s)=k\bigl(\gamma'(s)\bigr)$ for all $s\in I$;

**(b)** if $x:I\to A$ is a future timelike worldline ([[def-sr-regular-causal-curve-and-worldline]]) with proper-time function $\tau$ ([[def-sr-proper-time]]) and four-velocity $U=\mathrm dx/\mathrm d\tau$ ([[def-sr-four-velocity-and-four-acceleration]]), then $\mathrm d(\theta\circ x)/\mathrm d\tau=k(U)$ along the worldline, the derivative being taken in the proper-time parametrization, whose inverse exists by [[lem-sr-proper-time-parametrization]];

**(c)** if $k$ is moreover a future null wave covector, then $k(U)<0$ at every point, so $\theta$ is strictly decreasing in proper time along every future timelike worldline; the positive number $-k(U)$ is the quantity given physical meaning in def-sr-null-wave-covector-and-observer-frequency;

**(d)** if $k$ is a future null wave covector and $x$ is the straight worldline of an inertial observer, so that $U=cn$ for a future unit timelike vector $n$ with $\eta(n,n)=-1$, then $k(U)=ck(n)$ and $-k(U)=-ck(n)>0$; conversely every future timelike worldline has $\eta(U,U)=-c^2$ ([[thm-sr-proper-time-and-observer-decomposition]]).

No choice principle is used.

## Facts & Assumptions

**Given:** An affine phase function $\theta$ with wave covector $k$ on the affine Minkowski space, and a $C^1$ curve $\gamma:I\to A$.

[L1] $\theta(p)-\theta(q)=k(p-q)$ for all $p,q\in A$, and for every $C^1$ curve $\gamma:I\to A$ one has $(\theta\circ\gamma)'(s)=k(\gamma'(s))$ for all $s\in I$ ([[def-sr-affine-phase-and-wave-covector]], clauses (a) and (b)).

[L2] A future timelike worldline $x:I\to A$ is a $C^1$ curve whose tangent $x'(s)$ is future timelike for every $s$, and the parametrization is part of the curve ([[def-sr-regular-causal-curve-and-worldline]]).

[L3] The proper-time function $\tau$ of a future timelike worldline is $C^1$ and strictly increasing with $\tau'(s)=c^{-1}\sqrt{-\eta(x'(s),x'(s))}>0$; its inverse $\rho:J\to I$ is $C^1$ with $\rho'(\tau(s))=1/\tau'(s)$, and $y:=x\circ\rho$ is a $C^1$ future timelike worldline with $y'(\tau(s))=x'(s)/\tau'(s)$ ([[def-sr-proper-time]], [[lem-sr-proper-time-parametrization]]).

[L4] The four-velocity is $U(s)=x'(s)/\tau'(s)=cx'(s)/\sqrt{-\eta(x'(s),x'(s))}$, it is future timelike, and $\eta(U(s),U(s))=-c^2$ ([[def-sr-four-velocity-and-four-acceleration]], [[thm-sr-proper-time-and-observer-decomposition]], clause (a)).

[L5] A future null wave covector has $k^\sharp$ nonzero future causal, and for a future timelike vector $n$ and a nonzero future causal vector $v$ one has $\eta(n,v)<0$; moreover $k(w)=\eta(k^\sharp,w)$ for every $w$ ([[def-sr-affine-phase-and-wave-covector]], [[lem-sr-future-causal-pairing-negative]], clause (a)).

[L6] The one-variable chain rule and the definition of the derivative ([[thm-chain-rule]], [[def-derivative]]).

[L7] A real function continuous on $[a,b]$ and differentiable on $(a,b)$, with $a<b$, has $f(b)-f(a)=f'(r)(b-a)$ for some $r\in(a,b)$ ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Clause (a). This is exactly the chain-rule identity recorded in [L1] for $C^1$ curves: $(\theta\circ\gamma)'(s)=k(\gamma'(s))$. [L1]

2.1 Clause (b). By [L3] the inverse $\rho:J\to I$ of $\tau$ exists and is $C^1$, and the proper-time parametrized worldline $y:=x\circ\rho$ satisfies $y(\tau(s))=x(s)$ and $y'(\tau(s))=x'(s)/\tau'(s)=U(s)$ for every $s\in I$, the last equality by [L4]. The real function $\theta\circ x$ on $I$ equals $(\theta\circ y)\circ\tau$; differentiating at $s$ with the chain rule [L6] gives $(\theta\circ x)'(s)=(\theta\circ y)'(\tau(s))\,\tau'(s)$, and clause (a), applied to the $C^1$ curve $y$ [L1, L3], gives $(\theta\circ y)'(\tau(s))=k\bigl(y'(\tau(s))\bigr)=k(U(s))$. Hence $\mathrm d(\theta\circ x)/\mathrm d\tau:=\frac{(\theta\circ x)'(s)}{\tau'(s)}=(\theta\circ y)'(\tau(s))=k(U(s))$, since $\tau'(s)\neq0$ [L3]. [step 1.1, L1, L3, L4, L6]

3.1 Clause (c). For the worldline of [L2], if $k$ is future null, [L4, L5] give $k(U(s))=\eta(U(s),k^\sharp)<0$ for every $s\in I$. By step 2.1 the $C^1$ function $f:=\theta\circ y:J\to\mathbb R$ has $f'(\tau(s))=k(U(s))<0$. For any $a<b$ in the interval $J$, its restriction to $[a,b]$ is continuous and differentiable on $(a,b)$; [L7] gives $f(b)-f(a)=f'(r)(b-a)<0$ for some $r\in(a,b)$. Thus the phase is strictly decreasing in proper time, including comparisons with endpoints, and $-k(U)>0$. [step 2.1, L2, L3, L4, L5, L7]

4.1 Clause (d). If $U=cn$ with $n$ future unit timelike, then $k(U)=ck(n)$ by linearity of $k$, and $k(n)=\eta(k^\sharp,n)=\eta(n,k^\sharp)<0$ by [L5] applied to the future timelike vector $n$ and the nonzero future causal vector $k^\sharp$; hence $-k(U)=-ck(n)>0$. The converse claim is clause (a) of [L4], valid for every future timelike worldline. Together with steps 1.1, 2.1 and 3.1 this proves (a)-(d); no choice principle was used. [step 1.1, step 2.1, step 3.1, L4, L5] ∎
