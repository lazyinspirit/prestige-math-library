---
id: lem-em-symmetric-coercive-variational-solver
kind: lemma
domain: mathematics
title: "Unique solution of a symmetric coercive variational problem on a Hilbert space"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [def-hilbert-space, def-complete-metric-space, thm-parallelogram-law, def-bounded-bilinear-map, def-operator-norm, def-axiom-of-choice, def-countable-choice, def-infimum, thm-infimum-property, lem-inf-epsilon]
dependency_roles:
  def-hilbert-space: mathematical-premise
  def-complete-metric-space: mathematical-premise
  thm-parallelogram-law: mathematical-premise
  def-bounded-bilinear-map: mathematical-premise
  def-operator-norm: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-infimum: mathematical-premise
  thm-infimum-property: mathematical-premise
  lem-inf-epsilon: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014), Chapter 4.7 (the Lax-Milgram theorem, Theorem 4.20)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 4.7 and Theorem 4.20 confirm the standard existence and uniqueness statement for symmetric coercive bounded forms on a Hilbert space (and the estimate). The proof given here is the local minimisation of the explicit functional J (the design's branch), not the source's Lax-Milgram invocation; the Countable-Choice use and the infimum/existence-of-minimiser step are proved locally and attribute no further claim to the source."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]); in particular the hypothesis is met under the Axiom of Choice ([[def-axiom-of-choice]]). Let $H$ be a real Hilbert space ([[def-hilbert-space]], [[def-complete-metric-space]]), let $a:H\times H\to\mathbb R$ be a symmetric bounded bilinear form ([[def-bounded-bilinear-map]]) with $a(v,v)\ge\alpha\|v\|^2$ for every $v\in H$ and some $\alpha>0$, and let $\ell:H\to\mathbb R$ be a bounded linear functional with operator norm $\|\ell\|$ ([[def-operator-norm]]). Then there is exactly one $u\in H$ with

$$a(u,v)=\ell(v)\qquad\text{for every }v\in H,$$

and it satisfies $\|u\|\le\|\ell\|/\alpha$. The argument minimises the explicit functional $J(v)=\tfrac12a(v,v)-\ell(v)$; no Lax-Milgram theorem, Zorn-type argument or unproved minimiser existence is invoked, and the only choice use is the selection of one point from each of the countably many nonempty sublevel sets $\{v\in H:J(v)<m+1/(n+1)\}$.

## Facts & Assumptions
**Given:** A real Hilbert space $H$ with norm $\|v\|=\sqrt{\langle v,v\rangle}$, a symmetric bounded bilinear form $a:H\times H\to\mathbb R$, a constant $\alpha>0$ with $a(v,v)\ge\alpha\|v\|^2$ for every $v\in H$, a bounded linear functional $\ell:H\to\mathbb R$, and the functional $J(v)=\tfrac12a(v,v)-\ell(v)$.

[F1] **Hilbert norm and completeness.** $\|v\|=\sqrt{\langle v,v\rangle}\ge0$ with $\|v\|=0$ exactly for $v=0$, and the induced metric $(v,w)\mapsto\|v-w\|$ is complete: every Cauchy sequence in $H$ converges in norm to a point of $H$ ([[def-hilbert-space]], [[def-complete-metric-space]]).

[F2] **Parallelogram law.** $\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2$ for all $x,y\in H$ ([[thm-parallelogram-law]]).

[F3] **Bounded symmetric bilinear form.** $a$ is linear in each argument, $a(v,w)=a(w,v)$, and there is a real $C\ge0$ with $|a(v,w)|\le C\|v\|\,\|w\|$ for all $v,w\in H$ ([[def-bounded-bilinear-map]]).

[F4] **Operator norm.** $\|\ell\|=\sup\{|\ell(v)|:\|v\|\le1\}$ is finite and $|\ell(v)|\le\|\ell\|\,\|v\|$ for every $v\in H$ ([[def-operator-norm]]).

[F5] **Infima.** Every nonempty subset of $\mathbb R$ bounded below has an infimum, and $m=\inf S$ is characterised by: $m\le s$ for all $s\in S$, and for every $\varepsilon>0$ there is $s\in S$ with $s<m+\varepsilon$ ([[def-infimum]], [[thm-infimum-property]], [[lem-inf-epsilon]]).

[F6] **Countable choice.** $\mathrm{AC}_\omega$ provides, for every family $(X_n)_{n\in\mathbb N}$ of nonempty sets, a function $f$ with domain $\mathbb N$ and $f(n)\in X_n$ for all $n$ ([[def-countable-choice]]).



## Proof

**Proof technique:** direct.

1.1 For every $v\in H$ one has $\tfrac12a(v,v)\ge\tfrac\alpha2\|v\|^2$ by the coercivity hypothesis and $-\ell(v)\ge-|\ell(v)|\ge-\|\ell\|\,\|v\|$ by [F4], hence $J(v)\ge\tfrac\alpha2\|v\|^2-\|\ell\|\,\|v\|$. [given, F3, F4, algebra]

1.2 Expanding with bilinearity and symmetry of $a$ (the same expansion as the parallelogram identity [F2], applied to the quadratic form $v\mapsto a(v,v)$) gives $a\bigl(\tfrac{v+w}2,\tfrac{v+w}2\bigr)=\tfrac12a(v,v)+\tfrac12a(w,w)-\tfrac14a(v-w,v-w)$, hence $J\bigl(\tfrac{v+w}2\bigr)=\tfrac{J(v)+J(w)}2-\tfrac18a(v-w,v-w)$ for all $v,w\in H$. [given, F2, algebra]

2.1 Completing the square gives $\tfrac\alpha2\|v\|^2-\|\ell\|\,\|v\|=\tfrac\alpha2\bigl(\|v\|-\tfrac{\|\ell\|}\alpha\bigr)^2-\tfrac{\|\ell\|^2}{2\alpha}\ge-\tfrac{\|\ell\|^2}{2\alpha}$, so the image $S=\{J(v):v\in H\}$ is nonempty and bounded below in $\mathbb R$, and its infimum $m=\inf S\in\mathbb R$ exists by [F5]. [step 1.1, F5, algebra]

3.1 For each $n\in\mathbb N$ the set $X_n:=\{v\in H:J(v)<m+\tfrac1{n+1}\}$ is nonempty: otherwise $m+\tfrac1{n+1}$ would be a lower bound of $S$ larger than $m$, contradicting [F5] (equivalently, [F5] with $\varepsilon=\tfrac1{n+1}$ produces $v$ with $J(v)<m+\tfrac1{n+1}$). Applying $\mathrm{AC}_\omega$ [F6] to the family $(X_n)_{n\in\mathbb N}$ gives a sequence $(v_n)$ in $H$ with $J(v_n)<m+\tfrac1{n+1}$ for all $n$; since $m$ is a lower bound of $S$, also $J(v_n)\ge m$, so $J(v_n)\to m$. [step 2.1, F5, F6, choose]

4.1 Since $m$ is a lower bound of $S$ one has $J\bigl(\tfrac{v_n+v_k}2\bigr)\ge m$, so step 1.2 and the coercivity bound $a(v_n-v_k,v_n-v_k)\ge\alpha\|v_n-v_k\|^2$ give $\tfrac\alpha8\|v_n-v_k\|^2\le\tfrac{J(v_n)+J(v_k)}2-m\le\tfrac12\bigl(\tfrac1{n+1}+\tfrac1{k+1}\bigr)$; the right-hand side tends to $0$ as $n,k\to\infty$, so $(v_n)$ is a Cauchy sequence in $H$. [step 3.1, step 1.2, given, algebra]

5.1 By completeness [F1] there is $u\in H$ with $\|v_n-u\|\to0$. [step 4.1, F1]

6.1 The functional $J$ is continuous in the norm: for $v,w\in H$ one has $|J(v)-J(w)|\le\tfrac12|a(v,v)-a(w,w)|+|\ell(v-w)|=\tfrac12|a(v+w,v-w)|+|\ell(v-w)|\le\bigl(\tfrac C2\|v+w\|+\|\ell\|\bigr)\|v-w\|$ by [F3] and [F4], which tends to $0$ as $v\to w$; hence $J(u)=\lim_nJ(v_n)=m$. [step 5.1, step 3.1, F3, F4, algebra]

7.1 Fix $v\in H$ and consider $g(s)=J(u+sv)$; expanding with bilinearity and symmetry gives $g(s)=J(u)+s\bigl(a(u,v)-\ell(v)\bigr)+\tfrac{s^2}2a(v,v)$ for all $s\in\mathbb R$. Since $J(u)=m$ is the minimum of $J$, $g(s)\ge g(0)$ for all $s$: for $s>0$ division by $s$ gives $a(u,v)-\ell(v)+\tfrac s2a(v,v)\ge0$, and letting $s\to0^+$ gives $a(u,v)-\ell(v)\ge0$, while for $s<0$ the same division gives $a(u,v)-\ell(v)+\tfrac s2a(v,v)\le0$, and letting $s\to0^-$ gives $a(u,v)-\ell(v)\le0$. Therefore $a(u,v)=\ell(v)$, and since $v\in H$ was arbitrary, $u$ solves the variational equation. [step 6.1, given, algebra]

8.1 Uniqueness: if $u_1,u_2\in H$ both satisfy the equation, then testing the difference at $v=u_1-u_2$ gives $a(u_1-u_2,u_1-u_2)=0$, and coercivity gives $\alpha\|u_1-u_2\|^2\le a(u_1-u_2,u_1-u_2)=0$, so $\|u_1-u_2\|=0$ and $u_1=u_2$ by [F1]. [step 7.1, given, F1, algebra]

9.1 Estimate: testing the equation at $v=u$ gives $a(u,u)=\ell(u)$, and coercivity together with [F4] gives $\alpha\|u\|^2\le a(u,u)=\ell(u)\le\|\ell\|\,\|u\|$; if $\|u\|=0$ then $0\le\|\ell\|/\alpha$ holds, and otherwise division by $\alpha\|u\|>0$ gives $\|u\|\le\|\ell\|/\alpha$. This proves existence, uniqueness and the estimate, and identifies the sole use of $\mathrm{AC}_\omega$ as the selection in step 3.1. [step 7.1, step 8.1, given, F1, F4, algebra] ∎
