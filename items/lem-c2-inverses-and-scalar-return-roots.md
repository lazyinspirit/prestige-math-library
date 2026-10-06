---
id: lem-c2-inverses-and-scalar-return-roots
kind: lemma
title: "C² inverses and scalar return roots"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-euclidean-inverse-function-theorem, thm-chain-rule-for-total-derivatives, def-invertible-euclidean-linear-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 0
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
      locator: "Chapter 2 local ODE/dependence; the finite-regularity constructions are supplied locally"
---

## Statement

Let $f$ be a $C^2$ map between open subsets of $\mathbb R^n$ with invertible
derivative at a point. Its local inverse is $C^2$. If $g(s,t)$ is $C^2$ near
$(s_0,t_0)$, $g(s_0,t_0)=0$ and $g_t(s_0,t_0)\neq0$, then there is a unique
local $C^2$ root $t=T(s)$, with
$T'=-g_s/g_t$ and
$T''=-(g_{ss}+2g_{st}T'+g_{tt}(T')^2)/g_t$, evaluated at $(s,T(s))$. No choice
axiom is used.

## Facts & Assumptions
**Given:** A $C^2$ map $f$ between open subsets of $\mathbb R^n$ with invertible
derivative at $x_0$, and a $C^2$ function $g(s,t)$ near $(s_0,t_0)$ with
$g(s_0,t_0)=0$ and $g_t(s_0,t_0)\neq0$.

[F1] If $U\subseteq\mathbb R^n$ is open, $f:U\to\mathbb R^n$ is $C^1$ and
$Df(a)$ is invertible, then $f$ is a local diffeomorphism at $a$ whose inverse
$g$ is $C^1$ with $Dg(y)=Df(g(y))^{-1}$
([[thm-euclidean-inverse-function-theorem]]).

[F2] For composable differentiable maps the total derivative of the composite
is the composite of the total derivatives
([[thm-chain-rule-for-total-derivatives]]).



## Proof

**Proof technique:** direct.

1.1 Let $f$ be $C^2$ at $x_0$ with $Df(x_0)$ invertible; by [F1] there are open sets $V$ with $x_0\in V$ and $W$ with $f(x_0)\in W$ such that $f|_V:V\to W$ is a bijection with $C^1$ inverse $g:W\to V$ satisfying $Dg(y)=Df(g(y))^{-1}$. [given, F1]

2.1 The matrix $Df$ is invertible throughout a neighbourhood of $g(W)$, and the entries of its inverse are quotients of polynomial functions of the entries of $Df$ by the determinant, hence are $C^1$ functions of the entries of $Df$; since $f$ is $C^2$ and $g$ is $C^1$, [F2] shows that $y\mapsto Dg(y)=Df(g(y))^{-1}$ is $C^1$, that is, $g$ is $C^2$. [step 1.1, F2]

3.1 Apply step 1.1 to the $C^2$ map $G(s,t):=(s,g(s,t))$ near $(s_0,t_0)$: its derivative $DG=\begin{pmatrix}1&0\\ g_s&g_t\end{pmatrix}$ has determinant $g_t$, which is nonzero at $(s_0,t_0)$ by hypothesis, so $DG(s_0,t_0)$ is invertible and $G$ has a local $C^2$ inverse by step 2.1. [step 1.1, algebra]

4.1 Write the second component of that local inverse as $t=T(s)$ with $T$ defined near $s_0$; then $G(s,T(s))=(s,0)$, that is $g(s,T(s))=0$, and the equality is unique among $t$ near $t_0$ because the local inverse of $G$ is a function. [step 3.1]

5.1 Differentiating the identity $g(s,T(s))=0$ in $s$ with [F2] gives $g_s+g_tT'=0$ at $(s,T(s))$, hence $T'=-g_s/g_t$ wherever $g_t\neq0$, which holds near $s_0$. [step 4.1, F2]

6.1 Differentiating the same identity twice with [F2] gives $g_{ss}+g_{st}T'+g_tT''+(g_{ts}+g_{tt}T')T'=0$ at $(s,T(s))$; using $g_{st}=g_{ts}$ and solving for $T''$ because $g_t\neq0$ yields $T''=-(g_{ss}+2g_{st}T'+g_{tt}(T')^2)/g_t$, and all steps used only the stated local inverse and chain rule, so no choice axiom is invoked. [F2, step 5.1] ∎
