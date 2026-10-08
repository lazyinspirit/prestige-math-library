---
id: lem-cg-bruhat-chain-refinement-and-gradedness
kind: lemma
title: "Finiteness of Bruhat intervals, the chain refinement property, and grading by length"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: [thm-cg-bruhat-subword-characterization, lem-cg-bruhat-right-exchange-and-augmentation, def-cg-bruhat-order-by-reflection-chains, def-hh-coxeter-matrix-word-group-and-length, def-natural-numbers]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 2.2, printed p. 34 (Corollary 2.2.4: $|[u,w]|\\le 2^{\\ell(w)}$ via the injection into the subwords) and printed p. 35 (Theorem 2.2.6, the Chain Property, and the remark that Bruhat order is a graded poset whose rank function is the length function, and the same for every Bruhat interval)"
    - title: "Tom Denton, Lifting property and poset structure of finite Coxeter groups (UC Davis MAT 280 lecture notes, 26 January 2009)"
      url: "https://www.math.ucdavis.edu/~anne/WQ2009/MAT280-Lecture9.pdf"
      locator: "Theorem 4 (Chain Property) and the following paragraph (printed pp. 1-2): covers satisfy $\\ell(w)=\\ell(u)+1$ and Bruhat order is a ranked poset with rank function $\\ell$"
    - title: "Carl Marberg, MATH 6150F Coxeter systems and Iwahori-Hecke algebras, Lecture 11: More about Bruhat order (HKUST, Spring 2017)"
      url: "https://www.math.hkust.edu.hk/~emarberg/teaching/2017/Math6150F/lectures/11_Math6150F_Spring2017.pdf"
      locator: "Lecture 11, printed pp. 1-2: the chain proposition with its two-case induction, the remark bounding all chains by $\\ell(w)-\\ell(v)$, and the corollary that $(W,<)$ is graded with rank function $\\ell$"
---

## Statement

Let $u\le v$ in $W$ ([[def-cg-bruhat-order-by-reflection-chains]]) and put $[u,v]:=\{x\in W:u\le x\le v\}$.

**(1) Finiteness.** $[u,v]$ is finite; more precisely, for every reduced expression $v=s_1\cdots s_q$ there is an injection $[u,v]\to\{0,1\}^q$, so $|[u,v]|\le 2^{\ell(v)}$.

**(2) Chain refinement.** If $u<v$ there exist $x_0,\dots,x_k\in W$ with
$$u=x_0<x_1<\cdots<x_k=v,\qquad \ell(x_i)=\ell(u)+i\quad(0\le i\le k);$$
in particular $k=\ell(v)-\ell(u)$ and every step $x_{i-1}\to x_i$ is a Bruhat edge whose length increases by exactly one.

**(3) Grading.** Every maximal chain in $[u,v]$ has exactly $\ell(v)-\ell(u)$ strict steps, that is, $\ell(v)-\ell(u)+1$ elements; hence $[u,v]$ is a graded poset with rank function $x\mapsto\ell(x)-\ell(u)$. In particular, if $x<y$ and no $z\in W$ satisfies $x<z<y$, then $\ell(y)=\ell(x)+1$.

## Facts & Assumptions

**Given:** a Coxeter matrix $(S,m)$, the presented group $W$ with length $\ell$ and Bruhat order $\le$, and elements $u\le v$ of $W$.

[F1] Subword criterion: for a reduced expression $v=s_1\cdots s_q$ and $x\in W$ one has $x\le v$ if and only if there are $1\le i_1<\cdots<i_k\le q$ with $x=s_{i_1}\cdots s_{i_k}$; the indices may be chosen with $k=\ell(x)$. ([[thm-cg-bruhat-subword-characterization]] (1))

[F2] Augmentation lemma: if $v=s_1\cdots s_q$ is a reduced expression and $x\in W$, $x\ne v$, is the product of the letters of $s_1\cdots s_q$ remaining after deleting the letters at the positions of a set $D=\{i_1<\cdots<i_k\}$, the remaining word being a reduced expression of $x$, then for a description with $i_k$ minimal there is $t\in T$ with $x\to xt$, $\ell(xt)=\ell(x)+1$, and $xt$ the product of a reduced subword of $s_1\cdots s_q$. ([[lem-cg-bruhat-right-exchange-and-augmentation]] (2))

[F3] Bruhat order: $u\le v$ if and only if there is a chain $u=u_0\to u_1\to\cdots\to u_m=v$ with $u_{j+1}=u_jt_j$, $t_j\in T$, $\ell(u_{j+1})>\ell(u_j)$; the empty chain is allowed; a nonempty chain satisfies $\ell(u)<\ell(v)$; and $\le$ is transitive. ([[def-cg-bruhat-order-by-reflection-chains]] (1), (2))

[F4] Words and length: a word $(s_1,\dots,s_k)$ in $S$ is a reduced expression of $x$ when $x=s_1\cdots s_k$ and $k=\ell(x)$; the empty word is the reduced expression of $1$, and $\ell(1)=0$. ([[def-hh-coxeter-matrix-word-group-and-length]])

## Proof

**Given:** the Coxeter data and $u\le v$.

1.1 For (1), fix a reduced expression $v=s_1\cdots s_q$. For every $x\in[u,v]$ the relation $x\le v$ and [F1] provide at least one subset $P\subseteq\{1,\dots,q\}$ with $x$ the product of the letters at the positions in $P$ in increasing order; assign to $x$ the lexicographically first such subset, a determinate rule on a nonempty finite set of subsets of $\{1,\dots,q\}$. The resulting map $[u,v]\to\{0,1\}^q$ is injective, because a subset determines $x$ as the product of its letters in the given order; hence $|[u,v]|\le2^q=2^{\ell(v)}$, which proves (1). [F1, F4, choose]

1.2 For (2), induct on $d:=\ell(v)-\ell(u)\ge0$. If $d=0$ then $u=v$ by the strict length increase of [F3], and the one-element chain $x_0:=u=v$ works. [F3]

2.1 For the inductive step of step 1.2, let $d>0$, so that $u\ne v$. Fix a reduced expression $v=s_1\cdots s_q$ and a reduced subword expression of $u$ inside it, written in deleted-position form; the augmentation lemma [F2] gives $x_1\in W$ with $u\to x_1$, $\ell(x_1)=\ell(u)+1$, and $x_1$ the product of a reduced subword of the same word $s_1\cdots s_q$. By the subword criterion [F1], $x_1\le v$; the length gap $\ell(v)-\ell(x_1)$ is $d-1$, so the induction hypothesis of step 1.2 applies to the pair $(x_1,v)$ and produces a chain $x_1< y_2<\cdots< y_m=v$ with lengths $\ell(x_1)+1,\dots,\ell(v)$; prepending the edge $u\to x_1$ gives the required chain, each step of which is a Bruhat edge increasing the length by exactly one. This proves (2). [F1, F2, step 1.2]

3.1 For (3), along a strict step the length strictly increases by [F3], so a chain from $u$ to $v$ with $m$ strict steps satisfies $\ell(v)\ge\ell(u)+m$, that is, $m\le\ell(v)-\ell(u)$. If $m<\ell(v)-\ell(u)$, then some step $x_{i-1}<x_i$ of the chain has $\ell(x_i)-\ell(x_{i-1})\ge2$, and step 2.1 applied to that pair produces $z$ with $x_{i-1}<z<x_i$, so the chain is not maximal; hence every maximal chain has exactly $\ell(v)-\ell(u)$ steps, that is, $\ell(v)-\ell(u)+1$ elements. Thus the rank function $x\mapsto\ell(x)-\ell(u)$ is well defined on $[u,v]$ and every maximal chain between two comparable elements has the same length. If $x<y$ with no $z$ satisfying $x<z<y$, then the two-element chain $x<y$ is maximal in $[x,y]$, so it has exactly $\ell(y)-\ell(x)$ strict steps, whence $\ell(y)=\ell(x)+1$. No use of the Axiom of Choice is made: the only selection is the lexicographically first subword of step 1.1, a deterministic rule on a finite set. [F3, step 2.1] ∎
