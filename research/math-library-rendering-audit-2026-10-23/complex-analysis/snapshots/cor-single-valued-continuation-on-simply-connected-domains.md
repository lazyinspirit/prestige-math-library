---
id: cor-single-valued-continuation-on-simply-connected-domains
kind: corollary
title: "On a simply connected domain, pathwise continuation glues to one holomorphic function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monodromy-theorem, def-simply-connected, def-based-loops-and-fundamental-group, thm-fundamental-group-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §1.6"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Henry Wilton, Riemann Surfaces lecture notes, Corollary 9.5"
      url: "https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton"
---

## Statement

Let $\Omega \subseteq \mathbb C$ be simply connected, let $a_0 \in \Omega$, and
let $\xi_0$ be a holomorphic germ at $a_0$ that admits analytic continuation
along every path in $\Omega$ starting at $a_0$. Then there is a holomorphic
function $F:\Omega\to\mathbb C$ such that for every path $\gamma$ in $\Omega$
starting at $a_0$, the terminal germ of the continuation of $\xi_0$ along
$\gamma$ is exactly the germ of $F$ at $\gamma(1)$.

## Facts & Assumptions

**Given:** A simply connected complex domain $\Omega$, a base point $a_0 \in \Omega$, and a germ $\xi_0$ at $a_0$ that admits continuation along every path from $a_0$.

[L1] Fixed-endpoint path-homotopic paths give the same terminal germ ([[thm-monodromy-theorem]]).

[L2] A simply connected space is nonempty, path-connected, and has trivial fundamental group at every basepoint ([[def-simply-connected]]).

[L3] A based loop class is the class of a loop modulo endpoint-fixed path homotopy, and the constant loop is the identity element ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]).

## Proof

**Proof technique:** direct.

1.1 Fix $z \in \Omega$. Because $\Omega$ is path-connected by [L2], there is at least one path $\gamma_z$ from $a_0$ to $z$. Let $T_\gamma$ denote the terminal germ obtained by continuing $\xi_0$ along a path $\gamma$ from $a_0$. [L2, choose]

1.2 If $\gamma$ and $\beta$ are two paths from $a_0$ to $z$, then $\lambda:=\bar\gamma * \beta$ is a based loop at $z$. By [L2] and [L3], its loop class is the identity, so there is an endpoint-fixed path homotopy $K:[0,1]\times[0,1]\to\Omega$ from $\lambda$ to the constant loop $c_z$. [L2, L3]

2.1 Define $e:[0,1]\to[0,1]^2$ by $e(t)=(0,3t)$ for $0\le t\le\tfrac13$, $e(t)=(3t-1,1)$ for $\tfrac13\le t\le\tfrac23$, and $e(t)=(1,3-3t)$ for $\tfrac23\le t\le1$. For $(s,t)\in[0,1]^2$, put $q_t(s):=(1-s)(\tfrac12,0)+s\,e(t)$ and $H(s,t):=K(q_t(s))$. Then $H$ is continuous, $H(0,t)=K(\tfrac12,0)=\lambda(\tfrac12)=a_0$, and $H(1,t)=K(e(t))=z$ because $e(t)$ lies on the three edges where $K$ is constantly $z$. Also $q_0(s)=((1-s)/2,0)$ and $q_1(s)=((1+s)/2,0)$, so $H(s,0)=\lambda((1-s)/2)=\gamma(s)$ and $H(s,1)=\lambda((1+s)/2)=\beta(s)$. Thus $H$ is a path homotopy from $\gamma$ to $\beta$ relative to the endpoints. [step 1.2, algebra]

3.1 Fact [L1] applied to the path homotopy of step 2.1 gives $T_\gamma=T_\beta$. Therefore the value of the terminal germ over $z$ is independent of the chosen path from $a_0$ to $z$. [L1, step 2.1]

4.1 Define $F(z)$ to be the value at $z$ of this common germ. This is well defined by step 3.1. [step 3.1]

5.1 Let $z \in \Omega$ and choose a path $\gamma$ from $a_0$ to $z$. Let $(f,U)$ represent the terminal germ $T_\gamma$ at $z$. For every $w \in U$, the same function element $(f,U)$ continues that germ from $z$ to $w$, so step 3.1 forces the terminal germ over $w$ to be $[f]_w$. Hence $F|_U=f$, and $F$ is holomorphic on $U$. Since $z$ was arbitrary, $F$ is holomorphic on all of $\Omega$, and its germ at each point is the continued germ. [step 3.1, step 4.1, given] ∎
