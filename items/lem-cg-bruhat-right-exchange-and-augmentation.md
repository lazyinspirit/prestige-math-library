---
id: lem-cg-bruhat-right-exchange-and-augmentation
kind: lemma
title: "Right-handed strong exchange and the augmentation step for reduced subwords"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 12
deps: [def-cg-bruhat-order-by-reflection-chains, thm-cg-root-inversion-formulas-and-strong-exchange, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-hh-coxeter-matrix-word-group-and-length, def-cg-canonical-reflection-homomorphism, def-group]
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
      locator: "Section 2.2, printed pp. 33-34: Lemma 2.2.1 with its complete proof (the deleted positions $i_1<\\cdots<i_k$ with $i_k$ minimal, the reflection $t=s_q\\cdots s_{i_k}\\cdots s_q$, and the two contradiction cases (2.8) and (2.9)); re-read on the raw PDF pages 42-43 so that the hat convention marking the deleted letters could be verified"
    - title: "Tom Denton, Lifting property and poset structure of finite Coxeter groups (UC Davis MAT 280 lecture notes, 26 January 2009)"
      url: "https://www.math.ucdavis.edu/~anne/WQ2009/MAT280-Lecture9.pdf"
      locator: "Lemma 1 (printed p. 1): the augmentation lemma for a reduced subword of a reduced word, with conclusion $v>u$, $\\ell(v)=\\ell(u)+1$"
    - title: "Carl Marberg, MATH 6150F Coxeter systems and Iwahori-Hecke algebras, Lecture 11: More about Bruhat order (HKUST, Spring 2017)"
      url: "https://www.math.hkust.edu.hk/~emarberg/teaching/2017/Math6150F/lectures/11_Math6150F_Spring2017.pdf"
      locator: "Lecture 11, printed p. 1: the strong exchange condition with uniqueness of the deleted index in the reduced case, the input to (1)"
---

## Statement

Let $W$ be the presented Coxeter group with length $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]), reflection set $T$ ([[def-cg-canonical-reflection-homomorphism]]) and Bruhat order $\le$ ([[def-cg-bruhat-order-by-reflection-chains]]).

**(1) Right-handed strong exchange.** Let $u=s_1\cdots s_q$ be a reduced expression and let $t\in T$ satisfy $\ell(ut)<\ell(u)$. Then there is exactly one index $i\in\{1,\dots,q\}$ with
$$ut=s_1\cdots\widehat{s_i}\cdots s_q,\qquad t=(s_q\cdots s_{i+1})\,s_i\,(s_{i+1}\cdots s_q),$$
where a hat over a letter of a displayed word means that this letter is deleted from the word. In particular $ut\to u$ is a Bruhat edge.

**(2) Augmentation lemma.** Let $w=s_1\cdots s_q$ be a reduced expression and let $u\in W$, $u\ne w$, be such that some reduced expression of $u$ is a subword of $s_1\cdots s_q$: explicitly, the deleting positions form a set $D=\{i_1<\cdots<i_k\}\subseteq\{1,\dots,q\}$ such that $u$ is the product of the letters of $s_1\cdots s_q$ that remain after the letters at the positions in $D$ are deleted, and then $k=q-\ell(u)\ge1$ because the remaining word is a reduced expression of $u$. Choose such a description for which $i_k$ is as small as possible, and put
$$t:=(s_q\cdots s_{i_k+1})\,s_{i_k}\,(s_{i_k+1}\cdots s_q)\in T.$$
Then $ut$ is the product of the word obtained from $s_1\cdots s_q$ by deleting only the letters at the positions $i_1,\dots,i_{k-1}$; that word has length $q-k+1=\ell(u)+1$, and it is a reduced expression of $ut$. In particular there is $v:=ut\in W$, namely $v=ut$, with
$$u\to v,\qquad \ell(v)=\ell(u)+1,$$
and $v$ has a reduced expression that is a subword of $s_1\cdots s_q$.

## Facts & Assumptions

**Given:** a Coxeter matrix $(S,m)$, the presented group $W$ with length $\ell$ and reflection set $T$, and elements $u,w\in W$ as in the Statement.

[F1] Strong exchange in left-handed form: if $w\in W$, $t\in T$ satisfy $\ell(tw)<\ell(w)$ and $w=s_1\cdots s_n$ is a reduced expression, then there is a unique $i\in\{1,\dots,n\}$ with $tw=s_1\cdots\widehat{s_i}\cdots s_n$ and $t=s_1\cdots s_{i-1}s_is_{i-1}\cdots s_1$, and if $\alpha\in\Phi_+$ is the positive root with $t=t_\alpha$ then $\alpha\in N(w^{-1})$ and $\alpha=\rho(s_1\cdots s_{i-1})e_{s_i}$. ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (3))

[F2] Inversion of the length: $w\mapsto w^{-1}$ preserves lengths and interchanges left and right cosets, and $\ell(x)=\ell(x^{-1})$ for all $x\in W$; consequently the reversal of a reduced expression of $x$ is a reduced expression of $x^{-1}$. ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3))

[F3] The Bruhat graph and reflection parity: for $u,v\in W$ one has $u\to v$ if and only if $v=ut$ for some $t\in T$ with $\ell(v)>\ell(u)$; and if $x\in W$, $t\in T$ then $\ell(xt)\equiv\ell(x)+1\pmod 2$, so $\ell(xt)\ne\ell(x)$ and for each pair $(x,t)$ exactly one of the relations $x\to xt$, $xt\to x$ holds. ([[def-cg-bruhat-order-by-reflection-chains]] (1), (4))

[F4] Words and length: for $w\in W$ the length is $\ell(w)=\min\{k\in\mathbb N:\text{ there exist }s_1,\dots,s_k\in S\text{ with }w=s_1\cdots s_k\}$, a word $(s_1,\dots,s_k)$ in $S$ is a reduced expression of $w$ when $w=s_1\cdots s_k$ and $k=\ell(w)$, and nonreduced otherwise; the empty word is the reduced expression of the identity and $\ell(1)=0$. ([[def-hh-coxeter-matrix-word-group-and-length]])

[F5] The reflection set is $T=\{wsw^{-1}:w\in W,\ s\in S\}$, so every conjugate $wsw^{-1}$ of a simple generator is a reflection, and $T$ is stable under conjugation. ([[def-cg-canonical-reflection-homomorphism]] (2))

## Proof

**Given:** the Coxeter data and elements of the Statement; part (1) is proved in steps 1.1, 2.1 and 3.1, and part (2) in steps 1.2, 2.2 and 4.1-6.1.

1.1 Assume the hypotheses of (1): $u=s_1\cdots s_q$ is reduced and $t\in T$ has $\ell(ut)<\ell(u)$. Then $u^{-1}=(s_1\cdots s_q)^{-1}=s_q\cdots s_1$ by the inverse of a product, and the reversed word $s_q\cdots s_1$ has length $q=\ell(u)=\ell(u^{-1})$, so it is a reduced expression of $u^{-1}$; moreover $\ell(tu^{-1})=\ell((tu^{-1})^{-1})=\ell(ut)<\ell(u)=\ell(u^{-1})$, since $(tu^{-1})^{-1}=ut$. [F2, F4, algebra]

1.2 Now assume the hypotheses of (2): $w=s_1\cdots s_q$ is reduced, $u\ne w$, and $u$ is the product of the letters of $s_1\cdots s_q$ remaining after the letters at the positions of a set $D=\{i_1<\cdots<i_k\}\subseteq\{1,\dots,q\}$ are deleted, the remaining word being a reduced expression of $u$; then its length $q-k$ equals $\ell(u)$, so $k=q-\ell(u)$. Fix such a description for which $i_k$ is as small as possible, for instance the lexicographically least one among those with $i_k$ minimal; this is a determinate rule on a finite nonempty set of positions, so it uses no choice. Since $i_k$ is the largest element of $D$, every position of $\{i_k+1,\dots,q\}$ is retained. Put $Y:=s_q\cdots s_{i_k+1}$ and $C:=s_{i_k+1}\cdots s_q=Y^{-1}$, and put $t:=Y\,s_{i_k}\,Y^{-1}=(s_q\cdots s_{i_k+1})\,s_{i_k}\,(s_{i_k+1}\cdots s_q)$; then $t\in T$, because it is the conjugate of the simple reflection $s_{i_k}$ by the element $Y$. [F4, F5, choose]

2.1 Apply [F1] to the element $u^{-1}$, the reflection $t$ and the reduced expression $u^{-1}=t_1\cdots t_q$ with $t_j:=s_{q+1-j}$ (so $t_1=s_q$ down to $t_q=s_1$): there is a unique $i'\in\{1,\dots,q\}$ with $tu^{-1}=t_1\cdots\widehat{t_{i'}}\cdots t_q=s_q\cdots\widehat{s_{q+1-i'}}\cdots s_1$ and $t=t_1\cdots t_{i'-1}\,t_{i'}\,t_{i'-1}\cdots t_1=(s_q\cdots s_{q+2-i'})\,s_{q+1-i'}\,(s_{q+2-i'}\cdots s_q)$. [F1, step 1.1]

2.2 Since every position greater than $i_k$ is retained, the retained letters of $s_1\cdots s_q$ are the retained letters at positions less than $i_k$, followed by the letters $s_{i_k+1},\dots,s_q$; writing $P$ for the product of the retained letters at positions less than $i_k$, in increasing order, we have $u=P\,C$ by [F4]. Hence $ut=P\,C\,Y\,s_{i_k}\,Y^{-1}=P\,s_{i_k}\,Y^{-1}=P\,s_{i_k}\,(s_{i_k+1}\cdots s_q)$, using $C\,Y=(s_{i_k+1}\cdots s_q)\,(s_q\cdots s_{i_k+1})=1$; this is exactly the product $W'$ of the word obtained from $s_1\cdots s_q$ by deleting only the letters at the positions $i_1,\dots,i_{k-1}$. The word $W'$ has length $(q-k)+1=\ell(u)+1$, so $\ell(ut)\le\ell(u)+1$. [F4, step 1.2, algebra]

3.1 Invert the first identity of step 2.1: using $(xy)^{-1}=y^{-1}x^{-1}$ and $s_j^{-1}=s_j$ for all letters, $ut=(tu^{-1})^{-1}=(s_q\cdots\widehat{s_{q+1-i'}}\cdots s_1)^{-1}=s_1\cdots\widehat{s_{q+1-i'}}\cdots s_q$. Put $i:=q+1-i'$, so that $i'\in\{1,\dots,q\}$ runs through $\{1,\dots,q\}$ exactly as $i$ does; then $ut=s_1\cdots\widehat{s_i}\cdots s_q$, the second identity of step 2.1 reads $t=(s_q\cdots s_{i+1})s_i(s_{i+1}\cdots s_q)$, and $i$ is unique because $i'$ is. Finally $u=(ut)t$ with $t\in T$ and $\ell(u)>\ell(ut)$, so $ut\to u$ is a Bruhat edge by [F3]. This proves (1). [F3, step 2.1, algebra]

4.1 By reflection parity $\ell(ut)\equiv\ell(u)+1\pmod2$, so $\ell(ut)\ne\ell(u)$; together with step 2.2 this leaves $\ell(ut)=\ell(u)+1$ or $\ell(ut)\le\ell(u)-1$. Suppose, to rule out the second alternative, that $\ell(ut)<\ell(u)$. Apply part (1), proved in step 3.1, to the reduced expression of $u$ formed by the retained letters of $s_1\cdots s_q$ and to the reflection $t$: there is a unique retained position $p$ of $s_1\cdots s_q$ such that $ut$ is the product of that reduced expression with its letter at $p$ deleted, and such that $t=Z^{-1}s_pZ$, where $Z$ is the product, in increasing order, of the retained letters at positions strictly greater than $p$. [F3, step 3.1, step 2.2]

5.1 Consider first the case $p>i_k$. Then every position greater than $p$ is retained, so $Z=s_{p+1}\cdots s_q$. Compute $wt$: since $s_1\cdots s_q=(s_1\cdots s_{i_k})C$ and $CY=1$, we get $wt=(s_1\cdots s_{i_k})\,C\,Y\,s_{i_k}\,Y^{-1}=(s_1\cdots s_{i_k})\,s_{i_k}\,Y^{-1}=s_1\cdots s_{i_k-1}\,s_{i_k+1}\cdots s_q=:w''$, a word of length $q-1$ for $wt$, so $\ell(wt)\le q-1<q=\ell(w)$. Now multiply $w''$ on the right by $t=Z^{-1}s_pZ$: in the word $w''$ the letters after position $p$ are again $s_{p+1}\cdots s_q=Z$, so $w\,t^2=w''\,Z^{-1}s_pZ=(s_1\cdots\widehat{s_{i_k}}\cdots s_p)\,Z\,Z^{-1}s_pZ=s_1\cdots\widehat{s_{i_k}}\cdots\widehat{s_p}\cdots s_q$, a word of length $q-2$ representing $wt^2=w$, which contradicts $\ell(w)=q$. [F4, step 4.1, algebra]

5.2 It remains to rule out the case $p<i_k$. Let $B$ be the product, in increasing order, of the retained letters at positions strictly between $p$ and $i_k$, and let $A$ be the product, in increasing order, of the retained letters at positions less than $p$; thus $u=A\,s_p\,B\,C$ and $Z=B\,C$. From $t=Z^{-1}s_pZ=C^{-1}B^{-1}s_pBC$ and $t=Y\,s_{i_k}Y^{-1}=C^{-1}s_{i_k}C$ we get $B^{-1}s_pB=s_{i_k}$, hence $u=A\,s_p\,B\,C=A\,(B\,s_{i_k}\,B^{-1})\,B\,C=A\,B\,s_{i_k}\,C$, so $u$ is the product of the word obtained from $s_1\cdots s_q$ by deleting the letters at the positions $(D\setminus\{i_k\})\cup\{p\}$: this word has $k$ deleted positions, hence length $q-k=\ell(u)$, and it represents $u$, so it is a reduced subword expression of $u$; its largest deleted position is $\max(i_{k-1},p)$ when $k\ge2$ and $p$ when $k=1$, in both cases strictly smaller than $i_k$, contradicting the minimality of $i_k$ in step 1.2. [F4, step 4.1, algebra]

6.1 Both cases being impossible, $\ell(ut)=\ell(u)+1$, so $u\to ut$ is a Bruhat edge by [F3]; the word $W'$ of step 2.2 has length $\ell(ut)$ and represents $ut$, so it is a reduced expression of $ut$ and it is a subword of $s_1\cdots s_q$. With $v:=ut$ this is precisely the conclusion of (2). The only selections in the proof are a description with $i_k$ minimal (a deterministic rule on a finite set, step 1.2) and the unique strong-exchange index of step 2.1 or step 4.1; no choice principle is used. [F3, F4, step 2.2, step 5.1, step 5.2] ∎
