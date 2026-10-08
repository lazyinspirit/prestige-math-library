---
id: lem-cg-weak-order-prefix-property-and-left-translation
kind: lemma
title: "The length identity, the prefix property, left translation, and interval translation for weak order"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 12
deps:
  - def-cg-left-right-weak-order-and-descents
  - def-hh-coxeter-matrix-word-group-and-length
  - def-cg-parabolic-quotient-and-two-sided-minima
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
justified_by: []
proof_strategy: "length identity, prefix property, left translation and interval translation"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Proposition 3.1.2(ii),(iv),(vi), printed p. 66, and Proposition 3.1.6 with proof, printed pp. 69-70 (length identity, prefix property, left translation and interval translation)"
    - title: "John R. Stembridge, On the fully commutative elements of Coxeter groups (author-hosted preprint)"
      url: "https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf"
      locator: "Section 1.3 and Proposition 1.3, printed p. 5 (PDF p. 6; weak-order conventions and the interval translation)"
---

## Statement

Let $(S,m)$ be a finite Coxeter matrix, $W$ the presented group with length
$\ell$, the descent sets $D_L,D_R$ and the weak orders $\le_R,\le_L$ as in
[[def-cg-left-right-weak-order-and-descents]]. Then:

**(1) Length identity.** For all $u,v\in W$,

$$u\le_R v\iff\ell(v)=\ell(u)+\ell(u^{-1}v),\qquad u\le_L v\iff\ell(v)=\ell(u)+\ell(vu^{-1}).$$

In particular $u\le_R v$ implies $\ell(u)\le\ell(v)$, and likewise for
$\le_L$.

**(2) Prefix property.** $u\le_R v$ if and only if there exist reduced
expressions $u=s_1\cdots s_k$ and $v=s_1\cdots s_k s'_1\cdots s'_q$ with
$k,q\ge0$; equivalently, some reduced expression of $v$ has a reduced
expression of $u$ as its initial segment. Symmetrically, $u\le_L v$ if and
only if there exist reduced expressions $u=t_1\cdots t_k$ and
$v=t'_1\cdots t'_{q}t_1\cdots t_k$.

**(3) Left translation.** For all $u,v\in W$ and $s\in S$ with
$s\in D_L(u)\cap D_L(v)$,

$$u\le_R v\iff su\le_R sv.$$

**(4) Interval translation.** If $u\le_R v$, then $x\mapsto ux$ is a
bijection $[1,u^{-1}v]_R\to[u,v]_R$ satisfying
$\ell(ux)=\ell(u)+\ell(x)$ for every $x\in[1,u^{-1}v]_R$ and preserving and
reflecting the relation: for all $x,x'$ in the source interval,
$x\le_R x'\iff ux\le_R ux'$. If $u\le_L v$, then $x\mapsto xu$ is a
bijection $[1,vu^{-1}]_L\to[u,v]_L$ with the analogous length and relation
properties. No Choice is used.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$ with presented group $W$, length function $\ell$, descent sets $D_L,D_R$ and weak orders $\le_R,\le_L$ as in [[def-cg-left-right-weak-order-and-descents]], and elements $u,v,x\in W$ and $s\in S$ as specified in each clause.

[F1] [[def-cg-left-right-weak-order-and-descents]]: $u\le_R v$ means that $v=ux$ for some $x\in W$ with $\ell(v)=\ell(u)+\ell(x)$; $u\le_L v$ means that $v=xu$ for some $x\in W$ with $\ell(v)=\ell(u)+\ell(x)$; and $u\le_R v\iff u^{-1}\le_L v^{-1}$. Intervals, covers and bounded subsets are defined there.

[F2] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3): by inversion, $w\mapsto w^{-1}$ preserves lengths, that is $\ell(y)=\ell(y^{-1})$ for every $y\in W$.

[F3] [[def-hh-coxeter-matrix-word-group-and-length]]: for $w\in W$, $\ell(w)=\min\{k\in\mathbb{N}:\ \text{there exist }s_1,\dots,s_k\in S\text{ with }w=s_1\cdots s_k\}$; a reduced expression of $w$ is a word $(s_1,\dots,s_k)$ in $S$ with $w=s_1\cdots s_k$ and $k=\ell(w)$.

[F4] [[def-cg-parabolic-quotient-and-two-sided-minima]] (2): $D_L(w)=\{s\in S:\ell(sw)<\ell(w)\}$, $D_R(w)=\{s\in S:\ell(ws)<\ell(w)\}$, and for every $s\in S,w\in W$, $\ell(sw)-\ell(w)$ and $\ell(ws)-\ell(w)$ lie in $\{-1,+1\}$. Thus $s\in D_L(w)$ implies $\ell(sw)=\ell(w)-1$; also $\ell(s)=1$ by taking $w=1$ and using $\ell(1)=0$ from [A1].

[F5] [[def-hh-coxeter-matrix-word-group-and-length]]: every simple generator $s\in S$ satisfies $s^2=1$ in $W$.

[A1] For the word length of [F3]: $\ell(1)=0$, since $1$ is the value of the empty word and no shorter length is possible; $\ell(a)=0$ forces $a=1$; and $\ell(ab)\le\ell(a)+\ell(b)$ for all $a,b\in W$, because concatenating a reduced expression of $a$ with one of $b$ gives a word of length $\ell(a)+\ell(b)$ representing $ab$.

## Proof
1.1 For all $u,v\in W$, $u\le_R v$ if and only if $\ell(v)=\ell(u)+\ell(u^{-1}v)$, and then $\ell(u)\le\ell(v)$. Indeed, if $u\le_R v$ then $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$ for some $x$, and multiplying $v=ux$ on the left by $u^{-1}$ gives $x=u^{-1}v$, hence $\ell(v)=\ell(u)+\ell(u^{-1}v)$; conversely, if $\ell(v)=\ell(u)+\ell(u^{-1}v)$, then $x:=u^{-1}v$ satisfies $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$, so $u\le_R v$. The final inequality follows from $\ell(u^{-1}v)\ge0$. [F1, F3, A1, given, algebra]

1.2 For all $u,v\in W$, $u\le_L v$ if and only if $\ell(v)=\ell(u)+\ell(vu^{-1})$, and then $\ell(u)\le\ell(v)$. The argument is symmetric: if $u\le_L v$ then $v=xu$ with $\ell(v)=\ell(u)+\ell(x)$, and multiplying on the right by $u^{-1}$ gives $x=vu^{-1}$; conversely $x:=vu^{-1}$ realizes the defining factorization whenever the displayed length identity holds. [F1, F3, A1, given, algebra]

2.1 If $u\le_R v$, then $v$ has a reduced expression $s_1\cdots s_k s'_1\cdots s'_q$ whose initial segment $s_1\cdots s_k$ is a reduced expression of $u$. By step 1.1, $\ell(v)=\ell(u)+\ell(u^{-1}v)$; choose reduced expressions $u=s_1\cdots s_k$ and $u^{-1}v=s'_1\cdots s'_q$, so $k=\ell(u)$ and $q=\ell(u^{-1}v)$. The concatenated word $s_1\cdots s_k s'_1\cdots s'_q$ represents the element $u\cdot u^{-1}v=v$ and has length $k+q=\ell(v)$; hence it is a reduced expression of $v$ whose initial segment $s_1\cdots s_k$ is the chosen reduced expression of $u$. [F1, F3, A1, step 1.1, given, algebra]

2.2 Conversely, if $v$ has a reduced expression $s_1\cdots s_m$ and $k\le m$ is such that the initial segment $s_1\cdots s_k$ is a reduced expression of $u$, then $u\le_R v$. Indeed the suffix $x:=s_{k+1}\cdots s_m$ satisfies $v=ux$ and $\ell(x)\le m-k$, so $\ell(u)+\ell(x)\le k+(m-k)=m=\ell(v)$, while subadditivity gives the reverse inequality $\ell(v)\le\ell(u)+\ell(x)$; hence $\ell(v)=\ell(u)+\ell(x)$, which is the defining condition for $u\le_R v$ by step 1.1. [F1, A1, step 1.1, given, algebra]

2.3 Let $s\in D_L(u)\cap D_L(v)$. Then $u\le_R v$ if and only if $su\le_R sv$. By [F4], each of $\ell(su)-\ell(u)$ and $\ell(sv)-\ell(v)$ lies in $\{-1,+1\}$; the strict descent inequalities therefore give $\ell(su)=\ell(u)-1$ and $\ell(sv)=\ell(v)-1$. Also $\ell(s)=1$ by [F4] and [A1]. For the forward direction assume $u\le_R v$; by step 1.1, $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$. Subadditivity gives $\ell(sv)=\ell(sux)\le\ell(su)+\ell(x)=\ell(v)-1$, while $v=s(sv)$ by [F5], so $\ell(v)\le\ell(s)+\ell(sv)=1+\ell(sv)$ and $\ell(sv)\ge\ell(v)-1$. Therefore $\ell(sv)=\ell(su)+\ell(x)$ and $sv=su\cdot x$, which is $su\le_R sv$. For the converse assume $su\le_R sv$; then $sv=su\cdot x$ with $\ell(sv)=\ell(su)+\ell(x)$. Multiplying on the left by $s$ and using [F5] gives $v=ux$, and the descent identities give $\ell(v)=\ell(sv)+1=\ell(su)+\ell(x)+1=\ell(u)+\ell(x)$, so $u\le_R v$. [F1, F4, F5, A1, step 1.1, given, algebra]

2.4 Assume $u\le_R v$. Then for every $x\in W$ one has $x\in[1,u^{-1}v]_R$ if and only if $ux\in[u,v]_R$, and in that case $\ell(ux)=\ell(u)+\ell(x)$. For the forward direction suppose $x\le_R u^{-1}v$; by step 1.1, $\ell(u^{-1}v)=\ell(x)+\ell(x^{-1}u^{-1}v)$, so $\ell(v)=\ell(u)+\ell(u^{-1}v)=\ell(u)+\ell(x)+\ell(x^{-1}u^{-1}v)$. Since $\ell(ux)\le\ell(u)+\ell(x)$ and $\ell(v)\le\ell(ux)+\ell(x^{-1}u^{-1}v)$ both hold by subadditivity, these are equalities, giving $\ell(ux)=\ell(u)+\ell(x)$ and $\ell(v)=\ell(ux)+\ell((ux)^{-1}v)$, that is $u\le_R ux\le_R v$. For the converse suppose $u\le_R ux\le_R v$; then $\ell(ux)=\ell(u)+\ell(x)$ and $\ell(v)=\ell(ux)+\ell(x^{-1}u^{-1}v)=\ell(u)+\ell(x)+\ell(x^{-1}u^{-1}v)$, while the hypothesis $u\le_R v$ and step 1.1 give $\ell(v)=\ell(u)+\ell(u^{-1}v)$; cancelling $\ell(u)$ yields $\ell(u^{-1}v)=\ell(x)+\ell(x^{-1}u^{-1}v)$, that is $x\le_R u^{-1}v$. [F1, A1, step 1.1, given, algebra]

3.1 $u\le_L v$ if and only if there are reduced expressions $u=t_1\cdots t_k$ and $v=t'_1\cdots t'_q t_1\cdots t_k$. By [F1], $u\le_L v\iff u^{-1}\le_R v^{-1}$, and by [F2] inversion preserves lengths; moreover, if $s_1\cdots s_m$ is a reduced expression, then $(s_1\cdots s_m)^{-1}=s_m\cdots s_1$ has length $m=\ell(s_1\cdots s_m)=\ell((s_1\cdots s_m)^{-1})$, so reversing a reduced expression gives a reduced expression of the inverse. Applying steps 2.1 and 2.2 to the pair $u^{-1}\le_R v^{-1}$ and then inverting the two reduced expressions produces exactly the two directions of the claim. [F1, F2, A1, step 2.1, step 2.2, given, algebra]

4.1 Assume $u\le_R v$. The map $y\mapsto uy$ on $W$ is a bijection with inverse $y\mapsto u^{-1}y$; by step 2.4 it restricts to a bijection $[1,u^{-1}v]_R\to[u,v]_R$ satisfying $\ell(ux)=\ell(u)+\ell(x)$ throughout. For $x,x'\in[1,u^{-1}v]_R$, if $x\le_R x'$, then $x'=xy$ with $\ell(x')=\ell(x)+\ell(y)$, so $ux'=ux\,y$ and $\ell(ux')=\ell(u)+\ell(x')=\ell(u)+\ell(x)+\ell(y)=\ell(ux)+\ell(y)$, giving $ux\le_R ux'$; conversely, if $ux\le_R ux'$, then $ux'=ux\,y$ with $\ell(ux')=\ell(ux)+\ell(y)$, so cancelling $u$ gives $x'=xy$, and step 2.4 gives $\ell(u)+\ell(x')=\ell(ux')=\ell(ux)+\ell(y)=\ell(u)+\ell(x)+\ell(y)$, hence $\ell(x')=\ell(x)+\ell(y)$ and $x\le_R x'$. Thus the bijection preserves and reflects $\le_R$. If instead $u\le_L v$, then $u^{-1}\le_R v^{-1}$ by [F1]; applying the right-handed result to $u^{-1}\le_R v^{-1}$ and inverting gives a bijection $x\mapsto xu$ from $[1,vu^{-1}]_L$ to $[u,v]_L$ that preserves and reflects $\le_L$. Its length identity is $\ell(xu)=\ell((xu)^{-1})=\ell(u^{-1}x^{-1})=\ell(u^{-1})+\ell(x^{-1})=\ell(u)+\ell(x)$ by [F2]. No Choice was used anywhere in this proof. [F1, F2, step 2.4, given, algebra] ∎
