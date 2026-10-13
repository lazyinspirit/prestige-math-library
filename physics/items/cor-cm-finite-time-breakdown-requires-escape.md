---
id: cor-cm-finite-time-breakdown-requires-escape
kind: corollary
title: "A non-extendable solution leaves every compact subset of the domain near its finite endpoint; an autonomous solution trapped in a compact subset of its state domain cannot break down there"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [thm-cm-compact-continuation-for-locally-lipschitz-odes, def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable]
dependency_roles:
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, §2.6, Corollary 2.16, printed p. 53: if the maximal right endpoint is finite the solution eventually leaves every compact set"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Julien Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), §1.3, Theorem 1.3.3 and Corollary 1.3.4, printed pp. 25-26: failure of continuation forces the solution to approach the boundary of the domain"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
---

## Statement

Let $n\ge1$, let $D\subseteq\mathbb R\times\mathbb R^n$ be open, and let $F:D\to\mathbb R^n$ be continuous and locally Lipschitz in the state variable in the sense of [[def-locally-lipschitz-in-the-state-variable]]. Let $t_0<b$ be reals, let $x_0\in\mathbb R^n$ with $(t_0,x_0)\in D$, and let $x:[t_0,b)\to\mathbb R^n$ be a solution of the initial value problem $x'=F(t,x)$, $x(t_0)=x_0$ ([[def-first-order-ode-initial-value-problem-and-solution]]). Suppose $x$ admits no extension past $b$: there do not exist $\varepsilon>0$ and a solution $\tilde x:[t_0,b+\varepsilon)\to\mathbb R^n$ of the same initial value problem with $\tilde x(t)=x(t)$ for every $t\in[t_0,b)$. Then:

1. for every compact $K\subseteq D$ and every $\eta>0$ there is $t\in(b-\eta,b)\cap[t_0,b)$ with $(t,x(t))\notin K$; that is, the graph of $x$ leaves every compact subset of $D$ that could contain it arbitrarily close to $b$;
2. if $D=\mathbb R\times U$ for an open $U\subseteq\mathbb R^n$, $F$ is autonomous, $F(t,z)=G(z)$ with $G:U\to\mathbb R^n$ continuous and locally Lipschitz in the state variable, and there are a compact $K_0\subseteq U$ and $\delta>0$ with $x(t)\in K_0$ for all $t\in(b-\delta,b)\cap[t_0,b)$, then the no-extension hypothesis is false: $x$ does extend past $b$.

## Facts & Assumptions

**Given:** The data of the statement and the no-extension hypothesis on $x$.

[L1] Compact continuation: under the hypotheses of the statement without the no-extension hypothesis, if there are a compact $K\subseteq D$ and $\delta>0$ with $(t,x(t))\in K$ for all $t\in(b-\delta,b)\cap[t_0,b)$, then $x$ extends past $b$; and the same holds for an autonomous field $F(t,z)=G(z)$ on $D=\mathbb R\times U$ when $x(t)\in K_0$ for a compact $K_0\subseteq U$ and all $t\in(b-\delta,b)\cap[t_0,b)$ ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]]).

## Proof

**Proof technique:** contrapositive.

1.1 Clause 1 is the contrapositive of the compact continuation statement in [L1]: if for some compact $K\subseteq D$ and some $\eta>0$ every $t\in(b-\eta,b)\cap[t_0,b)$ had $(t,x(t))\in K$, then [L1] would produce an extension of $x$ past $b$, contradicting the no-extension hypothesis; hence for every compact $K\subseteq D$ and every $\eta>0$ such a $t$ exists. [given, L1]


2.1 Clause 2 likewise contradicts the no-extension hypothesis: the autonomy and trapping hypotheses are exactly those of the second part of [L1], which would give an extension of $x$ past $b$; therefore no such trapping compact set $K_0$ can exist under the no-extension hypothesis, and a fortiori every autonomous solution that is trapped in such a $K_0$ near $b$ does extend past $b$. [step 1.1, given, L1] ∎
