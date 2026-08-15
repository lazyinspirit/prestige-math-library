---
id: prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two
kind: proposition
title: '$Q_8$ is a subgroup of $\mathbb{H}^{\times}$ with eight elements, and $-1$ is its only element of order $2$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quaternion-group-of-order-eight, def-quaternions, thm-quaternions-form-a-division-ring, lem-subgroup-criterion, def-order-in-a-group, lem-order-characterisation, lem-cyclic-subgroup-is-the-set-of-powers, def-generated-subgroup, def-group-power, def-subgroup]
justified_by: []
aliases: []
landmark: false
short: "$|Q_8|=8$, unique involution $-1$"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: 'J. S. Milne, Group Theory, Example 3.9(c)'
      url: 'https://www.jmilne.org/math/CourseNotes/GT.pdf'
verification:
  precheck: pass
pipeline_run: null
---

## Statement

Let $Q_8=\{1,-1,i,-i,j,-j,k,-k\}\subseteq\mathbb{H}^{\times}$ be as in
[[def-quaternion-group-of-order-eight]]. Then:

1. $Q_8$ is a subgroup of $\mathbb{H}^{\times}$ and $|Q_8|=8$;
2. $1$ is the only element of order $1$, $-1$ is the only element of order $2$,
   and each of $\pm i,\pm j,\pm k$ has order $4$;
3. $\langle i\rangle=\{1,i,-1,-i\}$ is a subgroup of order $4$ containing $-1$,
   and the same holds for $\langle j\rangle$ and $\langle k\rangle$.

## Facts & Assumptions

**Given:** The quaternions $\mathbb{H}$, the basis quaternions $1,i,j,k$, the real embedding $\lambda\mapsto\hat\lambda$, the element $n=\widehat{-1}$ and the abbreviation $-x=nx$ of [[def-quaternion-group-of-order-eight]] and [[def-quaternions]].

[F1] Evaluating the multiplication formula of $\mathbb{H}$ on the basis quaternions gives $i^{2}=j^{2}=k^{2}=-1$, $ij=k$, $jk=i$, $ki=j$, $ji=-k$, $kj=-i$, $ik=-j$, together with $1x=x1=x$ for $x\in\{1,i,j,k\}$; and $\hat\lambda x=x\hat\lambda=(\lambda x_0,\lambda x_1,\lambda x_2,\lambda x_3)$ for every real $\lambda$ ([[def-quaternions]]).

[F2] $\mathbb{H}$ is a ring with identity $1_{\mathbb{H}}$, and $\mathbb{H}\setminus\{0_{\mathbb{H}}\}$ is a group under multiplication ([[thm-quaternions-form-a-division-ring]]).

[F3] A nonempty subset $H\subseteq G$ of a group $G$ is a subgroup exactly when $gh^{-1}\in H$ for all $g,h\in H$ ([[lem-subgroup-criterion]], [[def-subgroup]]).

[F4] The order $\operatorname{ord}(g)$ of an element $g$ of a group is the least natural $m\ge1$ with $g^{m}=e$ when such an $m$ exists, and $\infty$ otherwise ([[def-order-in-a-group]], [[def-group-power]]).

[F5] If $\operatorname{ord}(g)=m$ with $m\ge1$, then for every integer $t$ one has $g^{t}=e$ if and only if $m\mid t$; the powers $g^{0},\dots,g^{m-1}$ are pairwise distinct; and $\langle g\rangle=\{g^{s}:s<m\}$ has exactly $m$ elements ([[lem-order-characterisation]]).

[F6] For $g$ in a group, $\langle g\rangle$ is the set of integer powers of $g$ ([[lem-cyclic-subgroup-is-the-set-of-powers]], [[def-generated-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 The element $n=\widehat{-1}$ is central in $\mathbb{H}$ and satisfies $n^{2}=1$. Centrality is the clause $\hat\lambda x=x\hat\lambda$ of [F1] with $\lambda=-1$; and $n^{2}=\widehat{-1}\,\widehat{-1}$, which the same clause evaluates at $\lambda=-1$ and $x=(-1,0,0,0)$ to give $(1,0,0,0)=1$. Hence also $-(-x)=n(nx)=n^{2}x=x$ for every $x$, multiplication in $\mathbb{H}$ being associative by [F2]. [F1, F2, algebra]

2.1 The eight quaternions listed in $Q_8$ are pairwise distinct, so $|Q_8|=8$. Written out as quadruples they are $(\pm1,0,0,0)$, $(0,\pm1,0,0)$, $(0,0,\pm1,0)$, $(0,0,0,\pm1)$, and two such quadruples agree only if they agree in every coordinate; since $1\ne-1$ and $1\ne0$ in $\mathbb{R}$, no two of the eight agree. [step 1.1, F1, algebra]

2.2 $Q_8$ is closed under multiplication. Every element of $Q_8$ is $\varepsilon u$ with $u\in\{1,i,j,k\}$ and $\varepsilon\in\{1,n\}$, and for two such elements associativity and the centrality of step 1.1 give $(\varepsilon u)(\delta v)=(\varepsilon\delta)(uv)$. Here $\varepsilon\delta\in\{1,n\}$ because $n^{2}=1$, and $uv\in\{\pm1,\pm i,\pm j,\pm k\}$ by the table in [F1]. Hence $(\varepsilon u)(\delta v)\in Q_8$. [step 1.1, F1, F2]

3.1 Every element of $Q_8$ has an inverse lying in $Q_8$. From [F1], $i(-i)=-(i^{2})=-(-1)=1$ by step 1.1, and likewise $j(-j)=k(-k)=1$; also $1\cdot1=1$ and $nn=1$. So each of $1,-1$ is its own inverse and each of $\pm i,\pm j,\pm k$ has its negative as inverse, all inside $Q_8$. [step 1.1, step 2.2, F1]

3.2 $\operatorname{ord}(1)=1$ and $\operatorname{ord}(-1)=2$. The identity of $Q_8$ is $1$ by [F2], so $\operatorname{ord}(1)=1$ by [F4]. For $-1=n$ we have $n\ne1$ by step 2.1 and $n^{2}=1$ by step 1.1, so $2$ is the least $m\ge1$ with $n^{m}=1$. [step 1.1, step 2.1, F2, F4]

3.3 Each of $\pm i,\pm j,\pm k$ has order $4$. Write such an element as $\varepsilon u$ with $u\in\{i,j,k\}$ and $\varepsilon\in\{1,n\}$. By step 1.1 and [F1], $(\varepsilon u)^{2}=\varepsilon^{2}u^{2}=u^{2}=-1$, and $(\varepsilon u)^{4}=((\varepsilon u)^{2})^{2}=(-1)^{2}=1$. So the order is finite by [F4] and divides $4$ by [F5]; it is not $1$ because $(\varepsilon u)^{1}=\varepsilon u\ne1$ by step 2.1, and not $2$ because $(\varepsilon u)^{2}=-1\ne1$ by step 2.1. The only remaining divisor of $4$ is $4$. [step 1.1, step 2.1, F1, F4, F5]

4.1 $Q_8$ is a subgroup of $\mathbb{H}^{\times}$. It is nonempty and contained in $\mathbb{H}^{\times}$, since none of its eight elements is $0_{\mathbb{H}}$ by step 2.1; and for $g,h\in Q_8$ steps 2.2 and 3.1 give $h^{-1}\in Q_8$ and then $gh^{-1}\in Q_8$, which is the criterion [F3]. With step 2.1 this proves claim 1. [step 2.1, step 2.2, step 3.1, F3]

4.2 Claim 2 follows: steps 3.2 and 3.3 assign an order to each of the eight elements of $Q_8$, and among them exactly one has order $1$, namely $1$, and exactly one has order $2$, namely $-1$. [step 2.1, step 3.2, step 3.3]

5.1 $\langle i\rangle=\{1,i,-1,-i\}$ has four elements and contains $-1$. By step 3.3 $\operatorname{ord}(i)=4$, so [F5] gives $\langle i\rangle=\{i^{0},i^{1},i^{2},i^{3}\}$ with these four powers pairwise distinct, and [F6] confirms these are all the integer powers. Evaluating, $i^{0}=1$, $i^{1}=i$, $i^{2}=-1$ by [F1], and $i^{3}=i^{2}i=(-1)i=-i$ by step 1.1. The same computation with $j$ and with $k$ gives $\langle j\rangle=\{1,j,-1,-j\}$ and $\langle k\rangle=\{1,k,-1,-k\}$, each of order $4$ and each containing $-1$. This is claim 3. [step 1.1, step 3.3, F1, F5, F6] $\blacksquare$
