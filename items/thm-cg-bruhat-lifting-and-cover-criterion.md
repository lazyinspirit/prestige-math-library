---
id: thm-cg-bruhat-lifting-and-cover-criterion
kind: theorem
title: "The lifting property in all four descent cases, the cover criterion, reflection deletion, and directedness"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [thm-cg-bruhat-subword-characterization, lem-cg-bruhat-chain-refinement-and-gradedness, lem-cg-bruhat-right-exchange-and-augmentation, def-cg-bruhat-order-by-reflection-chains, thm-hh-coxeter-exchange-deletion-and-faithfulness, def-hh-coxeter-matrix-word-group-and-length, def-group]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
aliases: []
landmark: false
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 2.2, printed pp. 35-36: Proposition 2.2.7 (Lifting Property) with its subword proof; the sentence that covers satisfy $\\ell(u)+1=\\ell(w)$; and Proposition 2.2.9 (directedness) with its induction"
    - title: "Carl Marberg, MATH 6150F Coxeter systems and Iwahori-Hecke algebras, Lecture 11: More about Bruhat order (HKUST, Spring 2017)"
      url: "https://www.math.hkust.edu.hk/~emarberg/teaching/2017/Math6150F/lectures/11_Math6150F_Spring2017.pdf"
      locator: "Lecture 11, printed p. 1: the lifting lemma 'if $u\\le v$ and $s\\in S$ then $us\\le v$ or $us\\le vs$', the covering lemma, and the gradedness corollary"
    - title: "Tom Denton, Lifting property and poset structure of finite Coxeter groups (UC Davis MAT 280 lecture notes, 26 January 2009)"
      url: "https://www.math.ucdavis.edu/~anne/WQ2009/MAT280-Lecture9.pdf"
      locator: "Proposition 5 (Lifting Property, printed pp. 1-2) and Proposition 7 (directedness, printed p. 2) with its two-case induction"
    - title: "Grant T. Barkley, Bruhat order and applications, Lecture 3 (CMND lecture notes, author-hosted)"
      url: "https://gtbarkley.org/cmnd/Lecture3Notes.pdf"
      locator: "Lemma 1.4 and Corollary 1.5 (printed pp. 1-2): existence of $u'$ with $u<u'\\le v$ and $\\ell(u')=\\ell(u)+1$, and the consequence $\\ell(v)=\\ell(u)+1$ for covers"
---

## Statement

Let $u\le v$ in $W$, let $s\in S$, and recall $\ell(ws)=\ell(w)\pm1$ for all $w\in W$ ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (1)).

**(1) Lifting.** All four cases hold:
(a) if $\ell(vs)<\ell(v)$ and $\ell(us)>\ell(u)$, then $us\le v$ and $u\le vs$;
(b) if $\ell(vs)>\ell(v)$ and $\ell(us)>\ell(u)$, then $us\le vs$, and also $u\le vs$;
(c) if $\ell(vs)<\ell(v)$ and $\ell(us)<\ell(u)$, then $us\le vs$, and also $us\le v$;
(d) if $\ell(vs)>\ell(v)$ and $\ell(us)<\ell(u)$, then $us\le v$ and $u\le vs$.
The same-direction cases (b) and (c) are the same-ascent and same-descent variants; (a) is the classical lifting property and (d) is its trivial companion.

**(2) Cover criterion.** Say that $u$ is **covered by** $v$ if $u<v$ and there is no $x\in W$ with $u<x<v$. For $u\le v$ the following are equivalent: (i) $u$ is covered by $v$; (ii) $\ell(v)=\ell(u)+1$; (iii) $u=vt$ for some reflection $t\in T$ with $\ell(vt)=\ell(v)-1$.

**(3) Reflection deletion.** Let $v=s_1\cdots s_q$ be a reduced expression and for $i\in\{1,\dots,q\}$ put $v_i:=s_1\cdots\widehat{s_i}\cdots s_q$ and $t_i:=(s_q\cdots s_{i+1})s_i(s_{i+1}\cdots s_q)\in T$, where a hat means that the letter is deleted. Then $v_i=vt_i$ and $v_i<v$; moreover $v_i$ is covered by $v$ if and only if $\ell(v_i)=q-1$, that is, if and only if the word $s_1\cdots\widehat{s_i}\cdots s_q$ is reduced. Conversely every element covered by $v$ is $v_i$ for a uniquely determined $i$; hence the elements covered by $v$ are exactly the distinct values of those single-letter deletions of a reduced expression of $v$ whose remaining word is reduced.

**(4) Directedness.** Bruhat order on $W$ is directed: for all $u,w\in W$ there is $z\in W$ with $u\le z$ and $w\le z$.

## Facts & Assumptions

**Given:** a Coxeter matrix $(S,m)$, the presented group $W$ with length $\ell$, reflection set $T$ and Bruhat order $\le$, a reduced expression $v=s_1\cdots s_q$, an element $s\in S$, and elements $u,w\in W$ as in the Statement.

[F1] Subword criterion: for a reduced expression $v=s_1\cdots s_q$ and $x\in W$, one has $x\le v$ if and only if there are $1\le i_1<\cdots<i_k\le q$ with $x=s_{i_1}\cdots s_{i_k}$, and the indices may be chosen with $k=\ell(x)$. ([[thm-cg-bruhat-subword-characterization]] (1))

[F2] Bruhat order: $x\le y$ if and only if there is a chain $x=x_0\to x_1\to\cdots\to x_m=y$ with $x_{j+1}=x_jt_j$, $t_j\in T$, $\ell(x_{j+1})>\ell(x_j)$; the empty chain is allowed, so $1\le y$ for every $y$ and $\le$ is reflexive; $\le$ is transitive by concatenation; and a nonempty chain satisfies $\ell(x)<\ell(y)$. ([[def-cg-bruhat-order-by-reflection-chains]] (1), (2))

[F3] Chain refinement: if $u<v$ there are $x_0,\dots,x_k$ with $u=x_0<x_1<\cdots<x_k=v$ and $\ell(x_i)=\ell(u)+i$; in particular a cover satisfies $\ell(v)=\ell(u)+1$. ([[lem-cg-bruhat-chain-refinement-and-gradedness]] (2), (3))

[F4] Words and length: for $x\in W$, $\ell(x)$ is the minimum of the lengths of the words in $S$ representing $x$; a word is a reduced expression of $x$ when it represents $x$ and has length $\ell(x)$; the empty word is a reduced expression of $1$. ([[def-hh-coxeter-matrix-word-group-and-length]])

[F5] Parity of simple right multiplication: for all $x\in W$ and $s\in S$ one has $\ell(xs)=\ell(x)\pm1$ and $\ell(xs)\equiv\ell(x)+1\pmod2$, so $\ell(xs)\ne\ell(x)$. ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (1))

## Proof

**Given:** the Coxeter data and elements of the Statement; (1) is proved in steps 1.1, 1.2, 1.3, 2.1 and 2.2, and (4) in step 2.4, and (2)-(3) in steps 1.4, 2.2, 2.3, 3.1, 4.1 and 5.1.

1.1 For (1a), assume $\ell(vs)<\ell(v)$ and $\ell(us)>\ell(u)$. Let $r:=\ell(vs)=\ell(v)-1$ and choose a reduced expression $vs=t_1\cdots t_r$, so that $v=(vs)s=t_1\cdots t_r s$ is a word of length $r+1=\ell(v)$, hence a reduced expression of $v$; put $t_{r+1}:=s$. The subword criterion [F1] applied to $u\le v$ gives a reduced subword expression $u=t_{i_1}\cdots t_{i_k}$ with $1\le i_1<\cdots<i_k\le r+1$ of the word $t_1\cdots t_r s$. This subword does not retain position $r+1$: if it did, then $k\ge1$ and $i_k=r+1$, and $u=u's$ where $u'$ is the product of the letters at $i_1,\dots,i_{k-1}$, so $\ell(u')=k-1=\ell(u)-1$ and $\ell(us)=\ell(u')=\ell(u)-1$, contradicting $\ell(us)>\ell(u)$. Hence all retained positions lie in $\{1,\dots,r\}$, including when $k=0$, so $u$ is a reduced subword of $t_1\cdots t_r$, a reduced expression of $vs$, and $u\le vs$ by [F1]; moreover $us=t_{i_1}\cdots t_{i_k}s$ is the product of the subword at positions $i_1<\cdots<i_k<r+1$ of the reduced word $t_1\cdots t_r s$ of $v$, so $us\le v$ by [F1]. [F1, F4]

1.2 For (1b), assume $\ell(vs)>\ell(v)$. Then $s_1\cdots s_q s$ has length $q+1=\ell(vs)$, so it is a reduced expression of $vs$. The reduced subword expression of $u$ inside $s_1\cdots s_q$ given by [F1] is also a subword of $s_1\cdots s_q s$, so $u\le vs$; and $us$ is the product of the subword at the positions $i_1<\cdots<i_k<q+1$ of the reduced word $s_1\cdots s_q s$ of $vs$, so $us\le vs$. [F1, F4]

1.3 For (1d), assume $\ell(vs)>\ell(v)$ and $\ell(us)<\ell(u)$. Then $us\to u$ is a Bruhat edge, because $u=(us)s$ with $s\in S\subseteq T$ and $\ell(u)>\ell(us)$; likewise $v\to vs$ is an edge. Hence $us\le u\le v\le vs$, which gives both $us\le v$ and $u\le vs$. [F2]

1.4 For the criterion (2), prove (i) and (ii) equivalent. If (i) holds and $\ell(v)>\ell(u)+1$, then [F3] produces $x_1$ with $u<x_1<v$, so $u$ is not covered by $v$; hence (i) implies (ii). Conversely, if $\ell(v)=\ell(u)+1$ and $u<x<v$, then $\ell(u)<\ell(x)<\ell(v)$ by the strict length increase of [F2], which is impossible; hence (ii) implies (i). [F2, F3]

2.1 For (1c), assume $\ell(vs)<\ell(v)$ and $\ell(us)<\ell(u)$. Then $us\to u$ is a Bruhat edge, so $us\le u\le v$; and $s$ is an ascent of $us$, since $\ell((us)s)=\ell(uss)=\ell(u)>\ell(us)$. Applying (1a), proved in step 1.1, to the pair $us\le v$ (legitimate: $\ell(vs)<\ell(v)$ is the hypothesis and $\ell((us)s)>\ell(us)$ was just checked) gives $(us)s\le v$, which is $u\le v$, and $us\le vs$; the extra claim $us\le v$ is the already established relation $us\le u\le v$. [F2, step 1.1]

2.2 For (3), first compute $vt_i=(s_1\cdots s_q)(s_q\cdots s_{i+1})s_i(s_{i+1}\cdots s_q)=s_1\cdots s_{i-1}s_{i+1}\cdots s_q=v_i$ by cancelling the tail $s_{i+1}\cdots s_q$ against its inverse and $s_is_i=1$. Hence $v_i$ is the product of a word of length $q-1$, so $\ell(v_i)\le q-1<q=\ell(v)$ and $v=v_it_i$ exhibits the edge $v_i\to v$, giving $v_i<v$. Applying the criterion of step 1.4 to the pair $v_i\le v$, the element $v_i$ is covered by $v$ if and only if $\ell(v)=\ell(v_i)+1$, i.e. if and only if $\ell(v_i)=q-1$; and $\ell(v_i)=q-1$ holds if and only if the word $s_1\cdots\widehat{s_i}\cdots s_q$ is reduced, because that word represents $v_i$ and has length $q-1$. [F2, F4, step 1.4]

2.3 For the converse part of (3), let $x$ be covered by $v$. By step 1.4, $\ell(x)=\ell(v)-1=q-1$, and [F1] exhibits $x$ as the product of a reduced subword of $s_1\cdots s_q$ of length $q-1$, which omits exactly one position $i$; then $x=v_i$ by the definition of $v_i$. For uniqueness, suppose $v_i=v_j$ with $i<j$ and put $W:=s_j s_{j-1}\cdots s_{i+1}=(s_{i+1}\cdots s_j)^{-1}$ and $Y_j:=s_q\cdots s_{j+1}$, so that $Y_i:=s_q\cdots s_{i+1}=Y_jW$; from $vt_i=v_i=v_j=vt_j$ we get $t_i=t_j$, that is, $Y_jW\,s_i\,W^{-1}Y_j^{-1}=Y_js_jY_j^{-1}$, hence $Ws_iW^{-1}=s_j$, i.e. $s_is_{i+1}\cdots s_j=s_{i+1}\cdots s_j s_j=s_{i+1}\cdots s_{j-1}$. The word $s_is_{i+1}\cdots s_j$ is a subword of the reduced word $s_1\cdots s_q$, hence is reduced of length $j-i+1$: if it admitted a shorter expression, substituting that expression into $s_1\cdots s_q$ would produce a word of length $<q$ for $v$, contradicting $\ell(v)=q$. But the same element is represented by the word $s_{i+1}\cdots s_{j-1}$ of length $j-i-1$, and $j-i-1<j-i+1$ contradicts the minimality of the length. Hence $i=j$ and the position is unique. This completes (3). [F1, F4, step 1.4]

2.4 For (4), induct on the natural number $\ell(u)+\ell(w)$. If $\ell(u)=0$ then $u=1\le w$ by [F2], and $z:=w$ satisfies $u\le z$ and $w\le z$. Otherwise $u\ne1$, and if $u=s_1\cdots s_m$ is a reduced expression with $m\ge1$ then $s:=s_m$ satisfies $\ell(us)<\ell(u)$, since $us=s_1\cdots s_{m-1}$ is represented by a word of length $m-1$. By the induction hypothesis applied to the pair $(us,w)$ there is $x\in W$ with $us\le x$ and $w\le x$. If $\ell(xs)<\ell(x)$, apply (1a), proved in step 1.1, to the pair $us\le x$ (legal since $s$ is a descent of $x$ and an ascent of $us$: $\ell((us)s)=\ell(uss)=\ell(u)>\ell(us)$): it gives $(us)s\le x$, i.e. $u\le x$, so $z:=x$ works with $w\le x$. If $\ell(xs)>\ell(x)$, apply (1b), proved in step 1.2, to the pair $us\le x$: it gives $u=(us)s\le xs$; and $x\le xs$ because $x\to xs$ is an edge with $\ell(xs)>\ell(x)$, so $w\le x\le xs$ and $z:=xs$ works. [F2, F4, F5, step 1.1, step 1.2]

3.1 For the criterion (2), prove (i) equivalent to (iii). If (i) holds then by step 1.4 $\ell(v)=\ell(u)+1$, and writing $q:=\ell(v)$ and fixing a reduced expression $v=s_1\cdots s_q$, the subword criterion [F1] gives a reduced subword expression of $u$ of length $q-1$, i.e. a single-letter deletion; the element is $v_i$ for the omitted position $i$, and by step 2.2 $v_i=vt_i$ with $\ell(vt_i)=\ell(v_i)=q-1$, which is (iii). Conversely, if $u=vt$ with $t\in T$ and $\ell(vt)=\ell(v)-1$, then $v=ut$ with $t\in T$ and $\ell(v)>\ell(u)$, so $u\to v$ is an edge and $u<v$ with $\ell(v)=\ell(u)+1$; by step 1.4 this is (i). [F1, F2, step 1.4, step 2.2]

4.1 For the criterion (2), combine steps 1.4, 3.1 and 2.2: (i) implies (ii) by step 1.4, (ii) implies (i) by step 1.4, (i) implies (iii) and (iii) implies (i) by step 3.1, and step 2.2 identifies the elements of (iii) with the single-letter deletions of a fixed reduced expression; so (i), (ii) and (iii) are equivalent, which is (2). [step 1.4, step 2.2, step 3.1]

5.1 Collecting: (1) holds by steps 1.1, 1.2, 1.3, 2.1 and 2.2; (2) holds by steps 1.4 and 4.1, which establish both directions of each equivalence; (3) holds by steps 2.2 and 2.3; and (4) holds by step 2.4. No use of the Axiom of Choice is made: all selections are among finitely many positions of a fixed word or are the unique deleted index of strong exchange, and the induction of step 2.4 runs on natural numbers. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 2.4, step 3.1] ∎
