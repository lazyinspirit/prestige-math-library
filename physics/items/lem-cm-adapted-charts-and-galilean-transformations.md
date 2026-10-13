---
id: lem-cm-adapted-charts-and-galilean-transformations
kind: lemma
title: "Transformation between adapted charts and its kinematic consequences"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-affine-time-space, lem-cm-adapted-coordinates-exist-and-are-unique, def-cm-special-orthogonal-group, def-orientation-of-a-finite-dimensional-real-vector-space, def-orthogonal-vectors-sets-and-orthonormal-bases, def-vector-valued-derivative-and-integral, thm-algebra-of-derivatives, def-determinant-of-a-square-matrix, thm-determinant-of-transpose, thm-determinant-multiplicative, thm-of-square-roots]
dependency_roles:
  def-cm-affine-time-space: mathematical-premise
  lem-cm-adapted-coordinates-exist-and-are-unique: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-determinant-of-transpose: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-of-square-roots: mathematical-premise
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

2. Let $I\subseteq\mathbb R$ be a nondegenerate interval and let $\gamma:I\to A$ be a map whose first-chart time coordinate satisfies $t(\gamma(s))=s$ for all $s\in I$. Write $x(s):=x(\gamma(s))$ and $y(s):=x'(\gamma(s))$. The regularity hypothesis below means that this coordinate function $x:I\to\mathbb R^3$ is continuously differentiable (respectively, twice continuously differentiable); no additional smooth structure on $A$ is assumed. If $x$ is continuously differentiable then $y$ is continuously differentiable with

$$y'(s)=R\,x'(s)+v\qquad(s\in I),$$

and if $x$ is twice continuously differentiable then $y''(s)=R\,x''(s)$ for all $s\in I$. Equivalently, in the differentiated variables of the two charts, $dx'/dt'=R\,dx/dt+v$ and $d^2x'/dt'^2=R\,d^2x/dt^2$.

3. Consequently $x''=0$ on $I$ if and only if $y''=0$ on $I$: the two charts agree on which time-parametrized curves have zero coordinate acceleration.

## Facts & Assumptions

**Given:** Two adapted charts $(o,u,(e_1,e_2,e_3))$ and $(o',u',(e_1',e_2',e_3'))$ of the data $(V,\tau,g,A)$, with coordinate functions $(t,x)$ and $(t',x')$; for clauses 2 and 3 a map $\gamma:I\to A$ with $t(\gamma(s))=s$, and its first-chart spatial coordinate $x(s)$ of the stated regularity.

[L1] Affine displacement identities: $p+(q-p)=q$, $(q-p)+(r-q)=r-p$, and displacements are additive over the action, as recorded in [[def-cm-affine-time-space]].

[L2] $\tau$ is linear with $\tau(u)=\tau(u')=1$ and $K=\ker\tau$; hence $\tau(u-u')=0$, so $u-u'\in K$; moreover $\tau(o-o')=t'(o)-t(o)$ is a constant ([[def-cm-affine-time-space]]).

[L3] Adapted coordinates are unique, and for each slice $A_t$ the coordinate vector of $p-o-tu\in K$ in the basis $(e_1,e_2,e_3)$ is $x(p)$; likewise for the primed chart ([[lem-cm-adapted-coordinates-exist-and-are-unique]]).

[L4] Both ordered bases are $g$-orthonormal and positively oriented; if $M$ is the change-of-basis matrix defined by $e_j=\sum_kM_{kj}e_k'$, then $M^{\mathsf T}M=I_3$, and $\det M>0$ because the two bases lie in the same orientation class. Determinant multiplicativity and invariance under transpose give $(\det M)^2=\det(M^{\mathsf T}M)=1$; positivity and uniqueness of the positive square root give $\det M=1$. Hence $M\in O(3)$, and $M\in SO(3)$ under the orientation hypothesis of clause 1 ([[def-orientation-of-a-finite-dimensional-real-vector-space]], [[def-orthogonal-vectors-sets-and-orthonormal-bases]], [[def-cm-special-orthogonal-group]], [[thm-determinant-of-transpose]], [[thm-determinant-multiplicative]], [[thm-of-square-roots]]).

[L5] A fixed matrix applied to a $C^1$ vector-valued curve, plus an affine function of the parameter, is $C^1$ and differentiates componentwise; if the curve is $C^2$, differentiating again gives the same fixed matrix times its second derivative ([[def-vector-valued-derivative-and-integral]], [[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 By the slice formula of [L3] applied at $p$ and at $o$, $t'(p)-t(p)=\tau(p-o')-\tau(p-o)=\tau(o-o')$, which does not depend on $p$; put $b:=\tau(o-o')$. This proves the first display of clause 1. [L1, L2, L3, algebra]

2.1 Let $k:=p-o-tu=\sum_ix_i(p)e_i\in K$ and $k':=p-o'-t'u'=\sum_ix_i'(p)e_i'\in K$. Subtracting the second expansion from the first and using [L1], $k'=k+(o-o')+(t-t')u+t'(u-u')$. Here $(o-o')+(t-t')u\in K$ because its $\tau$-value is $b-b=0$ by step 1.1 and [L2], and $t'(u-u')\in K$ by [L2]; hence the displayed equality is an identity in $K$. [step 1.1, L1, L2, L3, algebra]

3.1 Let $c\in\mathbb R^3$ be the coordinate vector in the unprimed basis of the constant vector $(o-o')+(t-t')u\in K$, and let $d\in\mathbb R^3$ be the coordinate vector of $u-u'\in K$; by step 2.1 and [L3], the coordinate vector of $k'$ in the unprimed basis is $x(p)+c+t'(p)d$. Since the coordinate vector of $k'$ in the primed basis is $x'(p)$ and changes of coordinates are given by [L4], $x'(p)=M\bigl(x(p)+c+t'(p)d\bigr)=Mx(p)+(Md)t'(p)+Mc$. Using $t'=t+b$ from step 1.1 and setting $R:=M$, $v:=Md$, $a:=Mc+bv$, this reads $x'(p)=Rx(p)+vt(p)+a$, the second display of clause 1. [step 1.1, step 2.1, L1, L3, L4, algebra]

4.1 By [L4], $M^{\mathsf T}M=I_3$, so $R=M\in O(3)$; and if both bases are positively oriented then $\det M>0$, which with $\det M=\pm1$ gives $\det M=1$ and $R\in SO(3)$. This completes clause 1. [step 3.1, L4, algebra]

4.2 For the map $\gamma$ with $t(\gamma(s))=s$, clause 1 gives $y(s)=x'(\gamma(s))=Rx(s)+vs+a$. By [L5], this coordinate function is $C^1$ with $y'(s)=Rx'(s)+v$, and if $x$ is $C^2$ it satisfies $y''(s)=Rx''(s)$. Since $t'(\gamma(s))=s+b$, one has $dt'/ds=1$, giving the equivalent differentiated-coordinate formulas. This proves clause 2. [step 3.1, L5, algebra]

5.1 If $x''=0$ on the interval then $y''=Rx''=0$ by step 4.2; conversely if $y''=0$ then $0=R^{\mathsf T}y''=R^{\mathsf T}Rx''=x''$ because $R^{\mathsf T}R=I_3$ by [L4]. This proves clause 3. [step 4.2, L4, algebra] ∎
