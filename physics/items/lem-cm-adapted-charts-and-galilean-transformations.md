---
id: lem-cm-adapted-charts-and-galilean-transformations
kind: lemma
title: "Transformation between adapted charts and its kinematic consequences"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-affine-time-space, lem-cm-adapted-coordinates-exist-and-are-unique, def-cm-special-orthogonal-group, def-orientation-of-a-finite-dimensional-real-vector-space, def-orthogonal-vectors-sets-and-orthonormal-bases, thm-chain-rule-for-total-derivatives, def-vector-valued-derivative-and-integral]
dependency_roles:
  def-cm-affine-time-space: mathematical-premise
  lem-cm-adapted-coordinates-exist-and-are-unique: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, 2013), Section 1.2.1 (translations, rotations, boosts and absolute time), printed pages 5-7"
      url: "https://www.damtp.cam.ac.uk/user/tong/relativity/dynrel.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 3.1, printed pages 46-48"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $(V,\tau,g,A)$ be as in [[def-cm-affine-time-space]] and let $(o,u,(e_1,e_2,e_3))$ and $(o',u',(e_1',e_2',e_3'))$ be two adapted charts, with coordinate functions $(t,x)$ and $(t',x')$ of [[lem-cm-adapted-coordinates-exist-and-are-unique]].

1. There are $b\in\mathbb R$, $a,v\in\mathbb R^3$ and a matrix $R\in O(3)$ such that for every $p\in A$

$$t'(p)=t(p)+b,\qquad x'(p)=R\,x(p)+v\,t(p)+a.$$

If $(e_1,e_2,e_3)$ and $(e_1',e_2',e_3')$ are both positively oriented for the fixed orientation of $K$, then $R\in SO(3)$ ([[def-cm-special-orthogonal-group]]).

2. Let $I\subseteq\mathbb R$ be a nondegenerate interval and let $\gamma:I\to A$ be a curve whose parameter is the first chart's time coordinate, $t(\gamma(s))=s$ for all $s\in I$. Write $x(s):=x(\gamma(s))$ and $y(s):=x'(\gamma(s))$. If $\gamma$ is continuously differentiable then $y$ is continuously differentiable with

$$y'(s)=R\,x'(s)+v\qquad(s\in I),$$

and if $\gamma$ is twice continuously differentiable then $y''(s)=R\,x''(s)$ for all $s\in I$. Equivalently, in the differentiated variables of the two charts, $dx'/dt'=R\,dx/dt+v$ and $d^2x'/dt'^2=R\,d^2x/dt^2$.

3. Consequently $x''=0$ on $I$ if and only if $y''=0$ on $I$: the two charts agree on which time-parametrized curves have zero coordinate acceleration.

## Facts & Assumptions

**Given:** Two adapted charts $(o,u,(e_1,e_2,e_3))$ and $(o',u',(e_1',e_2',e_3'))$ of the data $(V,\tau,g,A)$, with coordinate functions $(t,x)$ and $(t',x')$; for clauses 2 and 3 a curve $\gamma:I\to A$ with $t(\gamma(s))=s$.

[L1] Affine displacement identities: $p+(q-p)=q$, $(q-p)+(r-q)=r-p$, and displacements are additive over the action, as recorded in [[def-cm-affine-time-space]].

[L2] $\tau$ is linear with $\tau(u)=\tau(u')=1$ and $K=\ker\tau$; hence $\tau(u-u')=0$, so $u-u'\in K$; moreover $\tau(o-o')=t'(o)-t(o)$ is a constant ([[def-cm-affine-time-space]]).

[L3] Adapted coordinates are unique, and for each slice $A_t$ the coordinate vector of $p-o-tu\in K$ in the basis $(e_1,e_2,e_3)$ is $x(p)$; likewise for the primed chart ([[lem-cm-adapted-coordinates-exist-and-are-unique]]).

[L4] Both ordered bases are $g$-orthonormal and positively oriented; if $M$ is the change-of-basis matrix defined by $e_j=\sum_kM_{kj}e_k'$, then $M^{\mathsf T}M=I_3$, and $\det M>0$ because the two bases lie in the same orientation class; hence $M\in O(3)$, and $M\in SO(3)$ whenever the orientation hypothesis of clause 1 holds ([[def-orientation-of-a-finite-dimensional-real-vector-space]], [[def-orthogonal-vectors-sets-and-orthonormal-bases]], [[def-cm-special-orthogonal-group]]).

[L5] Chain rule and vector-valued calculus: composition of a differentiable curve with a smooth coordinate function is differentiable with the chain-rule derivative, and a vector-valued function is differentiable exactly when its components are, with the derivative read componentwise ([[thm-chain-rule-for-total-derivatives]], [[def-vector-valued-derivative-and-integral]]).

## Proof

**Proof technique:** direct.

1.1 By the slice formula of [L3] applied at $p$ and at $o$, $t'(p)-t(p)=\tau(p-o')-\tau(p-o)=\tau(o-o')$, which does not depend on $p$; put $b:=\tau(o-o')$. This proves the first display of clause 1. [L1, L2, L3, algebra]

2.1 Let $k:=p-o-tu=\sum_ix_i(p)e_i\in K$ and $k':=p-o'-t'u'=\sum_ix_i'(p)e_i'\in K$. Subtracting the second expansion from the first and using [L1], $k'=k+(o-o')+(t-t')u+t'(u-u')$. Here $(o-o')+(t-t')u\in K$ because its $\tau$-value is $b-b=0$ by step 1.1 and [L2], and $t'(u-u')\in K$ by [L2]; hence the displayed equality is an identity in $K$. [step 1.1, L1, L2, L3, algebra]

3.1 Let $c\in\mathbb R^3$ be the coordinate vector in the unprimed basis of the constant vector $(o-o')+(t-t')u\in K$, and let $d\in\mathbb R^3$ be the coordinate vector of $u-u'\in K$; by step 2.1 and [L3], the coordinate vector of $k'$ in the unprimed basis is $x(p)+c+t'(p)d$. Since the coordinate vector of $k'$ in the primed basis is $x'(p)$ and changes of coordinates are given by [L4], $x'(p)=M\bigl(x(p)+c+t'(p)d\bigr)=Mx(p)+(Md)t'(p)+Mc$. Using $t'=t+b$ from step 1.1 and setting $R:=M$, $v:=Md$, $a:=Mc+bv$, this reads $x'(p)=Rx(p)+vt(p)+a$, the second display of clause 1. [step 1.1, step 2.1, L1, L3, L4, algebra]

4.1 By [L4], $M^{\mathsf T}M=I_3$, so $R=M\in O(3)$; and if both bases are positively oriented then $\det M>0$, which with $\det M=\pm1$ gives $\det M=1$ and $R\in SO(3)$. This completes clause 1. [step 3.1, L4, algebra]

4.2 For the curve $\gamma$ with $t(\gamma(s))=s$, clause 1 gives $y(s)=x'(\gamma(s))=Rx(\gamma(s))+vs+a=Rx(s)+vs+a$, and the chain rule [L5] applied to the components gives $y'(s)=Rx'(s)+v$; applying it again gives $y''(s)=Rx''(s)$. This proves clause 2, the displayed equivalences following from $dt'/ds=1$ because $t'(\gamma(s))=s+b$. [step 3.1, L5, algebra]

5.1 If $x''=0$ on the interval then $y''=Rx''=0$ by step 4.2; conversely if $y''=0$ then $0=R^{\mathsf T}y''=R^{\mathsf T}Rx''=x''$ because $R^{\mathsf T}R=I_3$ by [L4]. This proves clause 3. [step 4.2, L4, algebra] ∎
