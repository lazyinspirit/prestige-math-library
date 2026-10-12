---
id: lem-cm-adapted-coordinates-exist-and-are-unique
kind: lemma
title: "Existence and uniqueness of adapted coordinates, and the affine structure of simultaneous slices"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-affine-time-space, def-kernel-and-image-of-a-linear-map, def-orthogonal-vectors-sets-and-orthonormal-bases, def-linear-map]
dependency_roles:
  def-cm-affine-time-space: mathematical-premise
  def-kernel-and-image-of-a-linear-map: mathematical-premise
  def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  def-linear-map: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, 2013), Section 1.2.1, printed pages 5-7"
      url: "https://www.damtp.cam.ac.uk/user/tong/relativity/dynrel.pdf"
verification:
  precheck: pass
---

## Statement

Let $(V,\tau,g,A)$ and an adapted chart $(o,u,(e_1,e_2,e_3))$ be as in [[def-cm-affine-time-space]].

1. Every $p\in A$ has exactly one pair $(t,x)\in\mathbb R\times\mathbb R^3$ with

$$p=o+tu+\sum_{i=1}^3x_ie_i,$$

so the adapted-coordinate map $\iota:A\to\mathbb R\times\mathbb R^3$ of that definition is well defined, and it is a bijection.

2. For every $t\in\mathbb R$ the simultaneous slice $A_t=\{p:\tau(p-o)=t\}$ is an affine space modelled on $K=\ker\tau$, and for $p,q\in A_t$ one has $p-q\in K$ with $p-q=\sum_i(x_i(p)-x_i(q))e_i$ and

$$d_g(p,q)=\|x(p)-x(q)\|_2.$$

## Facts & Assumptions

**Given:** A real vector space $V$ of dimension $4$, a surjective linear map $\tau:V\to\mathbb R$ with kernel $K$, an inner product $g$ on $K$, an affine space $A$ modelled on $V$, an adapted chart $(o,u,(e_1,e_2,e_3))$, and a point $p\in A$; for clause 2 also $t\in\mathbb R$ and $p,q\in A_t$.

[L1] $A$ carries the free transitive $V$-action recorded in [[def-cm-affine-time-space]]: every pair $p,q$ has a unique displacement $q-p$ with $p+(q-p)=q$, and displacements satisfy $(q-p)+(r-q)=r-p$ and $q-p=-(p-q)$, the latter two being consequences of the action axioms and uniqueness of displacements ([[def-cm-affine-time-space]]).

[L2] $\tau$ is linear and surjective, $K=\ker\tau$, and the chart vector $u$ satisfies $\tau(u)=1$ ([[def-cm-affine-time-space]], [[def-kernel-and-image-of-a-linear-map]], [[def-linear-map]]).

[L3] $(e_1,e_2,e_3)$ is an ordered $g$-orthonormal basis of $K$: every $k\in K$ has a unique expansion $k=\sum_ix_ie_i$, and $g(e_i,e_j)=\delta_{ij}$ ([[def-orthogonal-vectors-sets-and-orthonormal-bases]], [[def-cm-affine-time-space]]).

## Proof

**Proof technique:** direct.

1.1 For every $v\in V$ the vector $v-\tau(v)u$ lies in $K$, because $\tau(v-\tau(v)u)=\tau(v)-\tau(v)\tau(u)=\tau(v)-\tau(v)=0$ by linearity [L2]. Hence $v=\tau(v)u+k$ with $k:=v-\tau(v)u\in K$, so $V=\mathbb Ru+K$. [L2, algebra]

2.1 Suppose $v=tu+k=t'u+k'$ with $t,t'\in\mathbb R$ and $k,k'\in K$. Applying $\tau$ gives $t=t'$ since $\tau(u)=1$ and $\tau(k)=\tau(k')=0$; then $k=v-tu=k'$. Hence every $v$ has exactly one decomposition $v=tu+k$, and $t=\tau(v)$. [step 1.1, L2, algebra]

2.2 Fix $t\in\mathbb R$. For $k\in K$ and $p\in A_t$ one has $\tau((p+k)-o)=\tau(p-o)+\tau(k)=t$, so $p+k\in A_t$; the action of $K$ on $A_t$ so defined is associative, and it is free and transitive because displacements in $A_t$ are displacements in $A$ and lie in $K$: if $p,q\in A_t$ then $\tau(q-p)=\tau(q-o)-\tau(p-o)=0$, so $q-p\in K$ and $p+(q-p)=q$ with the displacement unique in $V$ and hence in $K$ [L1, L2]. Thus $A_t$ is an affine space modelled on $K$. [step 1.1, L1, L2, algebra]

3.1 Let $p\in A$ and put $v:=p-o$, the unique displacement vector of [L1]. By steps 1.1 and 2.1 there are unique $t\in\mathbb R$ and $k\in K$ with $v=tu+k$; by [L3] there is a unique $x\in\mathbb R^3$ with $k=\sum_ix_ie_i$. Hence $(t,x)$ is the unique pair with $p=o+tu+\sum_ix_ie_i$, and the map $\iota$ is well defined. The assignment $(t,x)\mapsto o+tu+\sum_ix_ie_i$ is a left and right inverse of $\iota$ by the defining property of the action [L1]; hence $\iota$ is a bijection onto $\mathbb R\times\mathbb R^3$. This proves clause 1. [step 1.1, step 2.1, L1, L3]

4.1 For $p,q\in A_t$ the coordinate expressions $p-o=t_pu+\sum_ix_i(p)e_i$ and $q-o=t_qu+\sum_ix_i(q)e_i$ have $t_p=t_q=t$ by definition of $A_t$, so subtracting the two displays and using [L1] gives $p-q=\sum_i(x_i(p)-x_i(q))e_i$. By [L3], $g(p-q,p-q)=\sum_i(x_i(p)-x_i(q))^2$, so $d_g(p,q)=\|x(p)-x(q)\|_2$. This proves clause 2. [step 3.1, step 2.2, L1, L3, algebra] ∎
