---
id: lem-cm-local-flow-composition-law
kind: lemma
title: "The local flow is a partial one-parameter group: identity, composition and inverse-time laws"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-local-flow-of-an-autonomous-system, def-maximal-ode-solution, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable]
dependency_roles:
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 6.1 (properties of the flow phi(t, x); the cocycle identity), printed pages 190-192"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "J. Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), Section 1.3 (gluing of solutions on overlapping intervals), printed pages 22-28"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $F:U\to\mathbb R^n$ be continuous and locally Lipschitz in the state variable ([[def-locally-lipschitz-in-the-state-variable]]), and let $\Phi:\Omega\to U$ be the local flow of $x'=F(x)$ as in [[def-cm-local-flow-of-an-autonomous-system]], with maximal solutions $x(\,\cdot\,;a):I_a\to U$ and flow domain $\Omega=\{(t,a):t\in I_a\}$. Then:

1. $(0,a)\in\Omega$ and $\Phi(0,a)=a$ for every $a\in U$;
2. if $(s,a)\in\Omega$ and $(t,\Phi(s,a))\in\Omega$, then $(s+t,a)\in\Omega$ and $\Phi(s+t,a)=\Phi\bigl(t,\Phi(s,a)\bigr)$;
3. if $(t,a)\in\Omega$, then $(-t,\Phi(t,a))\in\Omega$ and $\Phi\bigl(-t,\Phi(t,a)\bigr)=a$.

## Facts & Assumptions

**Given:** The open set $U$, the field $F$, and the local flow $\Phi$ built from the unique maximal solutions $x(\,\cdot\,;a)$ through $(0,a)$.

[F1] For every $a\in U$, $x(\,\cdot\,;a):I_a\to U$ is a solution of $x'=F(x)$ with $x(0;a)=a$ on the open interval $I_a$ containing $0$, it is maximal, and every solution of that initial value problem is a restriction of it; moreover this maximal solution is unique ([[def-cm-local-flow-of-an-autonomous-system]], [[def-maximal-ode-solution]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-first-order-ode-initial-value-problem-and-solution]]).

[F2] If $y:J\to U$ is a solution of $x'=F(x)$ and $s\in J$, then the translate $y_s(\sigma):=y(\sigma+s)$, defined for $\sigma\in J-s:=\{\sigma:\sigma+s\in J\}$, is again a solution of $x'=F(x)$ on the open interval $J-s$, with $y_s(0)=y(s)$: this is the chain rule applied to the translation $\sigma\mapsto\sigma+s$, which has derivative $1$ ([[def-first-order-ode-initial-value-problem-and-solution]]).

## Proof

**Proof technique:** direct; use uniqueness and maximality of solutions to glue translated solutions.

1.1 Clause 1 is definitional: $0\in I_a$ because $I_a$ is the maximal interval of the solution through $(0,a)$, and $\Phi(0,a)=x(0;a)=a$. [given, F1]

1.2 Fix $(s,a)\in\Omega$ and put $b:=\Phi(s,a)=x(s;a)$. Define $J:=I_a-s$ and $y:J\to U$ by $y(\sigma):=x(\sigma+s;a)$. By [F2], $y$ solves $x'=F(x)$ on the open interval $J$, and $y(0)=x(s;a)=b$. [given, F2]

2.1 The curve $x(\,\cdot\,;b)$ is the unique maximal solution through $(0,b)$ and $y$ is a solution through $(0,b)$; by [F1] $y$ is the restriction of $x(\,\cdot\,;b)$ to $J$, so $J\subseteq I_b$ and $y=x(\,\cdot\,;b)|_J$. Now let $t\in I_b$; then $t\in J$, that is $s+t\in I_a$, and $\Phi(s+t,a)=x(s+t;a)=y(t)=x(t;b)=\Phi(t,\Phi(s,a))$. This is clause 2. [given, step 1.2, F1]

3.1 For clause 3, fix $(t,a)\in\Omega$ and put $b:=\Phi(t,a)=x(t;a)$. Define $K:=I_a-t$ and $w:K\to U$ by $w(\sigma):=x(\sigma+t;a)$. By [F2] (with $s=t$) $w$ solves $x'=F(x)$ on the open interval $K$, and $w(0)=x(t;a)=b$. By [F1] $w$ is the restriction of the unique maximal solution $x(\,\cdot\,;b)$ to $K$; hence $-t\in K\subseteq I_b$ and $\Phi(-t,b)=x(-t;b)=w(-t)=x(0;a)=a$. [given, step 2.1, F1, F2] ∎

## Remarks

- Clause 2 is the **cocycle** or semigroup identity for the partial flow; it is proved, not assumed. Its hypothesis $(t,\Phi(s,a))\in\Omega$ cannot be dropped: for a field whose solutions blow up in finite time, the solution through $a$ may be defined at time $s$ but not for a further time $t$ from $\Phi(s,a)$.

- Clause 3 says that $\Phi_t$ is injective on its domain with inverse $\Phi_{-t}$ restricted to $\Phi_t(\Omega_t)$; this is a consequence of uniqueness and maximality, and it is used in [[def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent]].
