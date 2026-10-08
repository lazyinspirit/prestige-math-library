---
id: thm-cg-bruhat-subword-characterization
kind: theorem
title: "The subword characterization of Bruhat order and its independence of the reduced expression"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 13
deps: [lem-cg-bruhat-right-exchange-and-augmentation, def-cg-bruhat-order-by-reflection-chains, thm-hh-coxeter-exchange-deletion-and-faithfulness, def-hh-coxeter-matrix-word-group-and-length, def-group]
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
      locator: "Section 2.2, printed pp. 34-35: Theorem 2.2.2 (the Subword Property, both directions) and Corollary 2.2.3 (independence of the chosen reduced expression); read in the extracted full text"
    - title: "Tom Denton, Lifting property and poset structure of finite Coxeter groups (UC Davis MAT 280 lecture notes, 26 January 2009)"
      url: "https://www.math.ucdavis.edu/~anne/WQ2009/MAT280-Lecture9.pdf"
      locator: "Theorem 2 (printed p. 1): the Subword Property, stated as $u\\le w$ iff there is a reduced expression of $u$ that is a subword of the given reduced word of $w$"
    - title: "Carl Marberg, MATH 6150F Coxeter systems and Iwahori-Hecke algebras, Lecture 11: More about Bruhat order (HKUST, Spring 2017)"
      url: "https://www.math.hkust.edu.hk/~emarberg/teaching/2017/Math6150F/lectures/11_Math6150F_Spring2017.pdf"
      locator: "Lecture 11, printed p. 1: the theorem that $v\\le w$ iff indices $1\\le i_1<\\cdots<i_q\\le r$ with $v=s_{i_1}\\cdots s_{i_q}$ exist for some, equivalently every, reduced expression $w=s_1\\cdots s_r$"
    - title: "Grant T. Barkley, Bruhat order and applications, Lecture 3 (CMND lecture notes, author-hosted)"
      url: "https://gtbarkley.org/cmnd/Lecture3Notes.pdf"
      locator: "Corollary 1.6 (printed p. 2): one fixed reduced word of $v$ suffices to test $u\\le v$, proved by following a path in the Bruhat graph and using strong exchange plus deletion"
---

## Statement

Let $w\in W$ have reduced expression $w=s_1\cdots s_q$ ([[def-hh-coxeter-matrix-word-group-and-length]]) and let $\le$ be the Bruhat order ([[def-cg-bruhat-order-by-reflection-chains]]).

**(1) Subword criterion.** For every $u\in W$,
$$u\le w\iff\text{there exist }1\le i_1<\cdots<i_k\le q\text{ with }u=s_{i_1}\cdots s_{i_k},$$
and the indices may be chosen with $k=\ell(u)$, so that $s_{i_1}\cdots s_{i_k}$ is then a reduced expression of $u$.

**(2) Expression independence.** For all $u,w\in W$ the following are equivalent: (a) $u\le w$; (b) every reduced expression of $w$ has a subword that is a reduced expression of $u$; (c) some reduced expression of $w$ has a subword that is a reduced expression of $u$.

**(3) The identity.** In particular $1\le w$ for every $w\in W$: the empty subword of any reduced expression realizes the identity.

## Facts & Assumptions

**Given:** a Coxeter matrix $(S,m)$, the presented group $W$ with length $\ell$ and Bruhat order $\le$, a reduced expression $w=s_1\cdots s_q$, and elements $u,w\in W$ as in the Statement.

[F1] Augmentation lemma: if $v=s_1\cdots s_q$ is a reduced expression and $u\in W$, $u\ne v$, is the product of the letters of $s_1\cdots s_q$ remaining after the letters at the positions of some set $D=\{i_1<\cdots<i_k\}$ are deleted, the remaining word being a reduced expression of $u$, then for a description with $i_k$ minimal there is $t\in T$ with $u\to ut$, $\ell(ut)=\ell(u)+1$, and $ut$ the product of a reduced subword of $s_1\cdots s_q$. ([[lem-cg-bruhat-right-exchange-and-augmentation]] (2))

[F2] Right-handed strong exchange: if $x=r_1\cdots r_m$ is a reduced expression and $t\in T$ satisfies $\ell(xt)<\ell(x)$, then $xt=r_1\cdots\widehat{r_j}\cdots r_m$ for exactly one index $j$. ([[lem-cg-bruhat-right-exchange-and-augmentation]] (1))

[F3] Two-letter deletion: if a word $(s_1,\dots,s_m)$ in $S$ is not reduced, then $s_1\cdots\widehat{s_i}\cdots\widehat{s_j}\cdots s_m=s_1\cdots s_m$ for some $i<j$; hence repeated deletion of two letters transforms every word into a reduced expression for the same element, and a word is reduced if and only if it cannot be shortened by deleting two letters. ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (3))

[F4] Words and length: for $w\in W$, $\ell(w)=\min\{k\in\mathbb N:\text{ there exist }s_1,\dots,s_k\in S\text{ with }w=s_1\cdots s_k\}$; a word $(s_1,\dots,s_k)$ in $S$ is a reduced expression of $w$ when $w=s_1\cdots s_k$ and $k=\ell(w)$; the empty word is the reduced expression of $1$ and $\ell(1)=0$. ([[def-hh-coxeter-matrix-word-group-and-length]])

[F5] Bruhat order: $u\le v$ holds if and only if there exist $u_0,\dots,u_m\in W$ with $u=u_0\to u_1\to\cdots\to u_m=v$, where $u_j\to u_{j+1}$ means $u_{j+1}=u_jt_j$ for some reflection $t_j\in T$ with $\ell(u_{j+1})>\ell(u_j)$; the empty chain is allowed, so $\le$ is reflexive, and $\le$ is transitive by concatenation of chains. ([[def-cg-bruhat-order-by-reflection-chains]] (1), (2))

## Proof

**Given:** the Coxeter data and the elements of the Statement; direction (1) is proved in steps 1.1, 2.1 and 3.1, direction (2) in steps 1.2 and 2.2, and the final step 4.1 completes (2) and (3).

1.1 For the implication from left to right in (1), let $u=x_0\to x_1\to\cdots\to x_m=w$ be a chain exhibiting $u\le w$, with $x_{j+1}=x_jt_j$, $t_j\in T$ and $\ell(x_{j+1})>\ell(x_j)$; the case $m=0$ (so $u=w$) is the case of the full subword, and we prove by downward induction on $j$ that every $x_j$ is the product of a subword of $s_1\cdots s_q$. For the base case $j=m$ this is clear since $x_m=w=s_1\cdots s_q$. [F4, F5]

1.2 For the implication from right to left in (1), assume $u=s_{i_1}\cdots s_{i_k}$ with $1\le i_1<\cdots<i_k\le q$; reducing that word by two-letter deletions if necessary, we may suppose it is a reduced expression of $u$, since deletions only remove positions and so the result is still a subword of $s_1\cdots s_q$. Induct on $d:=\ell(w)-\ell(u)\ge0$: if $d=0$ then $k=q$ and $u=w$, so $u\le w$ by reflexivity. [F3, F4, F5]

2.1 For the inductive step of step 1.1, suppose $x_{j+1}$ is the product of the subword at positions $P_{j+1}\subseteq\{1,\dots,q\}$. If the word $(s_p)_{p\in P_{j+1}}$ is not reduced, apply the two-letter deletion property repeatedly to replace it by a reduced expression of $x_{j+1}$ obtained by deleting letters, so that the result is again a subword of $s_1\cdots s_q$; applying the right-handed strong exchange of [F2] to this reduced expression of $x_{j+1}$ and to $t_j$ (legal since $\ell(x_{j+1}t_j)=\ell(x_j)<\ell(x_{j+1})$) exhibits $x_j=x_{j+1}t_j$ as that word with one letter deleted, hence as the product of a subword of $s_1\cdots s_q$. [F2, F3, step 1.1]

2.2 For the inductive step of step 1.2, let $d>0$, so $u\ne w$; the augmentation lemma [F1] applied to the fixed reduced expression $w=s_1\cdots s_q$ produces $v\in W$ with $u\to v$, $\ell(v)=\ell(u)+1$, and $v$ the product of a reduced subword of $s_1\cdots s_q$. The induction hypothesis applies to $v$ (the length gap is $d-1$) and gives $v\le w$, whence $u\le v\le w$ by transitivity. [F1, F5, step 1.2]

3.1 This completes the downward induction of step 2.1: $x_0=u$ is the product of a subword of $s_1\cdots s_q$, and applying the two-letter deletion property once more to that subword word produces a reduced subword expression of $u$, whose length is $\ell(u)$; hence the indices in (1) may always be chosen with $k=\ell(u)$. Together with step 2.2 this proves (1) in both directions. [F3, F4, step 2.1, step 2.2]

4.1 For (2), the statement of part (1) is formulated for an arbitrary reduced expression $w=s_1\cdots s_q$ of $w$ and its proof used nothing particular about that expression, so (a) implies (b); (b) trivially implies (c); and (c) implies (a) by the right-to-left direction of (1). Finally the empty subword of any reduced expression of $w$ realizes $1$ and is one of the subwords allowed in (1), so $1\le w$ for every $w$, which is (3). No use of the Axiom of Choice is made: the induction runs on natural numbers, deletions act on the current explicit word, and the subword expressions used are the given ones. [F4, step 3.1, step 2.2, step 1.2] ∎
