---
id: lem-normal-cone-maximal-monotone-and-projection-resolvent
kind: lemma
title: The convex normal-cone operator is maximal monotone and its resolvent is projection
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-projected-contact-dynamics-and-euler-step
  - def-kkt-residual-and-normal-cone
  - def-indicator-function-of-closed-convex-set
  - def-extended-real-epsilon-subdifferential
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - lem-prox-indicator-is-euclidean-projection
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
axiom_use: No choice axiom is used; the resolvent is obtained by the unique finite-dimensional proximal point.
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 4.3, pp. 122–124; maximal-monotone uniqueness and the convex normal-cone projected inclusion.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 12, slides 158–161; subdifferential of an indicator equals the outward normal cone.
---

## Statement

Let $C\subseteq\mathbb R^d$ be nonempty, closed, and convex, and let $N_C$ have the convention of [[def-projected-contact-dynamics-and-euler-step]]. In dimension $d=0$, interpret this convention directly as $C=\mathbb R^0=\{0\}$, $N_C(0)=\{0\}$, and $P_C(0)=0$. An operator $A:\mathbb R^d\rightrightarrows\mathbb R^d$ is **monotone** if $\langle u-v,x-y\rangle\ge0$ for all $u\in A(x)$ and $v\in A(y)$; it is **maximal monotone** if its graph has no proper monotone graph extension. Then $N_C$ is maximal monotone. For every $\tau>0$ and $y\in\mathbb R^d$, there is a unique $p$ with $y-p\in\tau N_C(p)$, and that point is $P_C(y)$. Equivalently, $(I+\tau N_C)^{-1}=P_C$.

## Facts & Assumptions

**Given:** The set $C$ and normal-cone convention in the Statement, and a scalar $\tau>0$.

[F1] [[def-kkt-residual-and-normal-cone]] and [[def-projected-contact-dynamics-and-euler-step]]: for $x\in C$, $N_C(x)=\{n:\langle n,z-x\rangle\le0\text{ for every }z\in C\}$; outside $C$, the operator is empty.

[F2] [[def-indicator-function-of-closed-convex-set]]: $\iota_C$ is $0$ on $C$ and $+\infty$ outside $C$.

[F3] [[def-extended-real-epsilon-subdifferential]]: for proper convex $g$ and $x\in\operatorname{dom}g$, $p\in\partial g(x)$ means $g(z)\ge g(x)+\langle p,z-x\rangle$ for every $z$; if $x\notin\operatorname{dom}g$, then $\partial g(x)=\varnothing$.

[F4] [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]: for proper closed convex $g$ and $\tau>0$, $u=\operatorname{prox}_{\tau g}(y)$ iff $(y-u)/\tau\in\partial g(u)$.

[F5] [[lem-prox-indicator-is-euclidean-projection]]: the indicator of this nonempty closed convex set is proper, closed, and convex, and $\operatorname{prox}_{\tau\iota_C}(y)=P_C(y)$, the unique nearest point.

## Proof

1.1 Let $n\in N_C(x)$ and $m\in N_C(y)$. Testing the definition in [F1] with $z=y$ and $z=x$ gives $\langle n,y-x\rangle\le0$ and $\langle m,x-y\rangle\le0$. Adding and changing signs yields $\langle n-m,x-y\rangle\ge0$. Thus $N_C$ is monotone. [F1, given, algebra]

1.2 The indicator is proper, closed, and convex by [F5], and its domain is $C$ by [F2]. At $x\in C$, [F2]–[F3] show $p\in\partial\iota_C(x)$ exactly when $\langle p,z-x\rangle\le0$ for every $z\in C$; inequalities for $z\notin C$ are automatic because $\iota_C(z)=+\infty$. At $x\notin C$, both $\partial\iota_C(x)$ and $N_C(x)$ are empty. Hence $\partial\iota_C=N_C$. [F1, F2, F3, F5, given]

2.1 Given any $y\in\mathbb R^d$, put $p=P_C(y)=\operatorname{prox}_{\tau\iota_C}(y)$ by [F5]. By [F4] and step 1.2, $(y-p)/\tau\in N_C(p)$, so $y-p\in\tau N_C(p)$. If also $y-q\in\tau N_C(q)$, monotonicity [step 1.1] gives $0\le\langle(y-p-y+q)/\tau,p-q\rangle=-\|p-q\|_2^2/\tau$, hence $p=q$. Therefore the resolvent exists uniquely at every $y$ and equals $P_C$. [F4, F5, step 1.1, step 1.2, given, algebra]

3.1 Suppose $(x,v)$ is monotonically related to the graph of $N_C$, so $\langle v-n,x-y\rangle\ge0$ for every $n\in N_C(y)$. Apply step 2.1 to $x+\tau v$ to obtain $p$ and $n=(x+\tau v-p)/\tau\in N_C(p)$. Then $x-p=\tau(n-v)$, and the relation gives $0\le\langle v-n,x-p\rangle=-\tau\|v-n\|_2^2$. Thus $v=n$ and $x=p$, so $(x,v)$ already lies in the graph. Every monotone extension adds no point; $N_C$ is maximal monotone. [step 2.1, given, algebra] ∎
