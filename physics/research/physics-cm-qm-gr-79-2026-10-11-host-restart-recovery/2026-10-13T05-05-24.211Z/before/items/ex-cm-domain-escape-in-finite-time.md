---
id: ex-cm-domain-escape-in-finite-time
kind: example
title: "A bounded field whose solution leaves the domain in finite time: $x'=v$, $v'=0$ on $(0,\\infty)\\times(-2,2)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-local-flow-of-an-autonomous-system, def-maximal-ode-solution, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-first-order-ode-initial-value-problem-and-solution, def-interval]
dependency_roles:
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.1 and the blow-up examples of Chapter 2 (maximal domains are determined by the open domain of the field, not only by the size of the field), printed pages 17-24"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "J. Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), Section 1.3 (maximal solutions and the role of the domain boundary), printed pages 22-30"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Let $U=(0,\infty)\times(-2,2)\subseteq\mathbb R^2$ and let $F:U\to\mathbb R^2$, $F(x,v)=(v,0)$, so that the first-order system $(x,v)'=F(x,v)$ is the free particle with velocity $v$ ([[def-cm-local-flow-of-an-autonomous-system]]). The solution of $z'=F(z)$, $z(0)=(1,-1)$ is

$$z(t)=\bigl(x(t),v(t)\bigr)=(1-t,\ -1),\qquad t\in(-\infty,1).$$

Its maximal interval of existence is $(-\infty,1)$: at $t=1$ the position reaches the excluded boundary value $x=0$, although $\|F(x,v)\|=|v|<2$ is bounded on $U$ and the field extends smoothly to the plane. Hence a finite maximal interval does not require the field to blow up; the domain can force it.

## Facts & Assumptions

**Given:** The domain $U=(0,\infty)\times(-2,2)$, the field $F(x,v)=(v,0)$, and the datum $z_0=(1,-1)$.

[L1] $F$ is continuous and locally Lipschitz in the state variable; the flow, maximal solutions and maximal intervals are those of [[def-cm-local-flow-of-an-autonomous-system]] and [[def-maximal-ode-solution]]; every initial value problem has a unique maximal solution, and every other solution through the same data is a restriction of it ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-first-order-ode-initial-value-problem-and-solution]]). A solution on an interval $I$ must satisfy $(t,z(t))\in\mathbb R\times U$ for every $t\in I$ ([[def-interval]]). [given]

## Verification

**Proof technique:** direct; verify the explicit solution, then show no extension past $t=1$ can meet the domain condition.

1.1 The curve $z(t)=(1-t,-1)$ is defined for $t<1$ and lies in $\mathbb R\times U$ there because $1-t>0$ and $-1\in(-2,2)$; it is differentiable with $z'(t)=(-1,0)=F(z(t))$ for every $t<1$, and $z(0)=(1,-1)$. So it is a solution on $(-\infty,1)$. [given, L1, algebra]

2.1 Maximality: suppose a solution $\zeta$ through $(1,-1)$ were defined on an interval containing some $t_0>1$. By [L1] it agrees with $z$ on the overlap of their intervals and is continuous at $t=1$, so $\zeta(1)=\lim_{t\uparrow1}(1-t,-1)=(0,-1)$, i.e. its position is $0$ at time $1$; but then $(1,\zeta(1))=(1,(0,-1))$ does not lie in $\mathbb R\times U$, contradicting the domain condition for a solution on that interval. Hence no solution through the datum is defined at $t_0>1$, while $z$ is defined at every $t<1$; the maximal interval is exactly $(-\infty,1)$. In particular the maximal solution escapes the domain at the finite time $1$ with $\|F(x,v)\|=|v|<2$ bounded on $U$, so boundedness of the field alone does not guarantee a global solution. [step 1.1, L1, algebra] ∎
