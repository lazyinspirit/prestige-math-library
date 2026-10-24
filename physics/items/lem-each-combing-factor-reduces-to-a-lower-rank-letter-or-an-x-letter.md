---
id: lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter
kind: lemma
title: "Each combing factor reduces to a lower-rank letter or an x-letter"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-zariski-braid-combing-words-alpha-and-x,
       def-braid-group-by-the-artin-presentation,
       prop-the-artin-presentation-surjects-onto-geometric-braids,
       lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors,
       lem-geometric-far-commutativity,
       lem-geometric-three-strand-braid-relation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 3.1, printed pp. 19-20"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume $n\ge2$, work in the group
$B_n=\langle\sigma_1,\dots,\sigma_{n-1}\rangle$ of
[[def-braid-group-by-the-artin-presentation]], and use the words
$\alpha_1,\dots,\alpha_n$ and $x_1,\dots,x_{n-1}$ of
[[def-zariski-braid-combing-words-alpha-and-x]]. Let $1\le j\le n$ be a
position, $1\le k\le n-1$ an index and $\varepsilon\in\{\pm1\}$ a sign, and let
the combing factor be the word
$$F=\alpha_j^{-1}\,\sigma_k^{\varepsilon}\,\alpha_{j'},\qquad j':=\begin{cases}k+1,&j=k,\\ k,&j=k+1,\\ j,&\text{otherwise},\end{cases}$$
so that $j'=s_k(j)$; in the bottom-to-top reading of this factor, $j'$ is the
position below the letter and $j$ is the position above it, as in
[[lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors]].
Then, using only the two Artin relations and free insertions and deletions of
adjacent inverse letters:

**(a)** $F\equiv 1$ (the empty word) if $j=k$ and $\varepsilon=1$;

**(b)** $F\equiv x_k^{-1}$ if $j=k$ and $\varepsilon=-1$;

**(c)** $F\equiv x_k$ if $j=k+1$ and $\varepsilon=1$;

**(d)** $F\equiv 1$ if $j=k+1$ and $\varepsilon=-1$;

**(e)** $F\equiv\sigma_k^{\varepsilon}$ if $k<j-1$;

**(f)** $F\equiv\sigma_{k-1}^{\varepsilon}$ if $k>j$.

The six cases are mutually exclusive and exhaustive, and in every one of them
the reduced form is a word in
$\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1},x_1^{\pm1},\dots,x_{n-1}^{\pm1}$
alone. In particular the letter $\sigma_{n-1}$ and its inverse never survive
the reduction outside an $x$-letter, and all identities also hold in the
geometric braid group $G_n$ under the published surjection $\varphi$ of
[[prop-the-artin-presentation-surjects-onto-geometric-braids]].

## Facts & Assumptions

**Given:** An integer $n\ge2$, the group $B_n$ of [[def-braid-group-by-the-artin-presentation]], the words $\alpha_j$ and $x_k$ of [[def-zariski-braid-combing-words-alpha-and-x]], a position $1\le j\le n$, an index $1\le k\le n-1$, a sign $\varepsilon\in\{\pm1\}$, and the word $F=\alpha_j^{-1}\sigma_k^{\varepsilon}\alpha_{j'}$ with $j'=s_k(j)$ as in the statement.

[F1] In $B_n$ the two defining families of relations hold, $\sigma_r\sigma_{r+1}\sigma_r=\sigma_{r+1}\sigma_r\sigma_{r+1}$ for $1\le r\le n-2$ and $\sigma_r\sigma_s=\sigma_s\sigma_r$ for $|r-s|>1$, and two words that differ by insertions or deletions of adjacent inverse pairs $w^{\pm1}w^{\mp1}$ represent the same element of $B_n$ ([[def-braid-group-by-the-artin-presentation]]). Below we write $u\equiv v$ when the words $u$ and $v$ can be connected by these two families of relations together with such free insertions and deletions.

[F2] $\alpha_j=\sigma_j\sigma_{j+1}\cdots\sigma_{n-1}$ for $1\le j\le n-1$, $\alpha_n$ is the empty word, and consequently the word identity $\alpha_k=\sigma_k\alpha_{k+1}$ and its inverse form $\alpha_k^{-1}=\alpha_{k+1}^{-1}\sigma_k^{-1}$ hold for every $1\le k\le n-1$. For every $1\le k\le n-1$ one has $x_k=\sigma_{n-1}^{-1}\cdots\sigma_{k+1}^{-1}\sigma_k^{2}\sigma_{k+1}\cdots\sigma_{n-1}=\alpha_{k+1}^{-1}\sigma_k^{2}\alpha_{k+1}$ and hence $x_k^{-1}=\alpha_{k+1}^{-1}\sigma_k^{-2}\alpha_{k+1}$ ([[def-zariski-braid-combing-words-alpha-and-x]]).

[F3] The factor $F$ is exactly the shape of a combing factor in [[lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors]]: read bottom to top, the tracked point starts at position $n$ at the bottom, is carried by $\alpha_{j'}$ to position $j'$ below the letter, is exchanged by $\sigma_k^\varepsilon$ to $j=s_k(j')$ when $j'\in\{k,k+1\}$ and is fixed otherwise, and is carried by $\alpha_j^{-1}$ back to position $n$ at the top. Since $s_k$ is an involution, this is the same relation $j'=s_k(j)$ used in the statement.

[F4] The map $\varphi\colon B_n\to G_n$ of [[prop-the-artin-presentation-surjects-onto-geometric-braids]] is a surjective homomorphism with $\varphi(\sigma_r)=[\sigma_r]$, and in $G_n$ the two families of relations of [F1] hold: $[\sigma_r][\sigma_{r+1}][\sigma_r]=[\sigma_{r+1}][\sigma_r][\sigma_{r+1}]$ for $1\le r\le n-2$ and $[\sigma_r][\sigma_s]=[\sigma_s][\sigma_r]$ for $|r-s|>1$ ([[lem-geometric-three-strand-braid-relation]], [[lem-geometric-far-commutativity]]).

## Proof

**Proof technique:** direct.

1.1 **The four cases in which the letter moves the tracked point.** Assume $j=k$ or $j=k+1$; by [F2] we have the word identities $\alpha_k=\sigma_k\alpha_{k+1}$, $\alpha_k^{-1}=\alpha_{k+1}^{-1}\sigma_k^{-1}$, $x_k=\alpha_{k+1}^{-1}\sigma_k^{2}\alpha_{k+1}$ and $x_k^{-1}=\alpha_{k+1}^{-1}\sigma_k^{-2}\alpha_{k+1}$. Substituting $\alpha_k$ or $\alpha_{k+1}$ for the two connectors and cancelling the adjacent inverse pair $\sigma_k^{-1}\sigma_k$, or its inverse pair, by [F1]: for $j=k$ and $\varepsilon=1$, $$F=\alpha_k^{-1}\sigma_k\alpha_{k+1}=\alpha_{k+1}^{-1}\sigma_k^{-1}\sigma_k\alpha_{k+1}\equiv\alpha_{k+1}^{-1}\alpha_{k+1}\equiv 1,$$ the empty word; for $j=k$ and $\varepsilon=-1$, $$F=\alpha_k^{-1}\sigma_k^{-1}\alpha_{k+1}=\alpha_{k+1}^{-1}\sigma_k^{-2}\alpha_{k+1}=x_k^{-1};$$ for $j=k+1$ and $\varepsilon=1$, $$F=\alpha_{k+1}^{-1}\sigma_k\alpha_k=\alpha_{k+1}^{-1}\sigma_k\sigma_k\alpha_{k+1}=\alpha_{k+1}^{-1}\sigma_k^{2}\alpha_{k+1}=x_k;$$ and for $j=k+1$ and $\varepsilon=-1$, $$F=\alpha_{k+1}^{-1}\sigma_k^{-1}\alpha_k=\alpha_{k+1}^{-1}\sigma_k^{-1}\sigma_k\alpha_{k+1}\equiv\alpha_{k+1}^{-1}\alpha_{k+1}\equiv 1.$$ This gives (a), (b), (c) and (d). [F1, F2, F3]

1.2 **The case $k<j-1$: far commutation.** Here $j\notin\{k,k+1\}$, so $j'=j$ and $F=\alpha_j^{-1}\sigma_k^{\varepsilon}\alpha_j$. Every letter $\sigma_r^{\pm1}$ occurring in the word $\alpha_j$ of [F2] has index $r\ge j\ge k+2$, hence $|r-k|\ge2$ and $\sigma_k$ commutes with that letter by the far-commutation relation of [F1]; iterating over the letters of $\alpha_j$ (whose length is $n-j$, possibly $0$ when $j=n$), we get $\sigma_k^{\varepsilon}\alpha_j\equiv\alpha_j\sigma_k^{\varepsilon}$, whence $$F=\alpha_j^{-1}\sigma_k^{\varepsilon}\alpha_j\equiv\alpha_j^{-1}\alpha_j\sigma_k^{\varepsilon}\equiv\sigma_k^{\varepsilon}$$ by free cancellation. This is (e); note $k\le j-2$ and $j\le n$, so $k\le n-2$. [F1, F2]

1.3 **The case $k>j$: sliding the letter to the right.** Here again $j\notin\{k,k+1\}$, so $j'=j$ and $F=\alpha_j^{-1}\sigma_k^{\varepsilon}\alpha_j$. First take $\varepsilon=1$. Since $j<k\le n-1$, the word $\alpha_j=\sigma_j\cdots\sigma_{n-1}$ splits, with the three groups possibly empty, as the word $$\alpha_j=(\sigma_j\cdots\sigma_{k-2})\,\sigma_{k-1}\,\sigma_k\,(\sigma_{k+1}\cdots\sigma_{n-1}),$$ where the first group contains exactly the letters with indices $r\le k-2$ and the last exactly those with indices $r\ge k+1$. Every letter of the first group has $k-r\ge2$, so $\sigma_k$ commutes with each of them and moves right past them; every letter of the last group has $r-(k-1)\ge2$, so $\sigma_{k-1}$ commutes with each of them and moves right past them; and the three middle letters satisfy the braid relation $\sigma_k\sigma_{k-1}\sigma_k\equiv\sigma_{k-1}\sigma_k\sigma_{k-1}$ by [F1]. Combining the three moves gives the chain $$\sigma_k\alpha_j\equiv(\sigma_j\cdots\sigma_{k-2})\,\sigma_k\sigma_{k-1}\sigma_k\,(\sigma_{k+1}\cdots\sigma_{n-1})\equiv(\sigma_j\cdots\sigma_{k-2})\,\sigma_{k-1}\sigma_k\sigma_{k-1}\,(\sigma_{k+1}\cdots\sigma_{n-1})\equiv(\sigma_j\cdots\sigma_{k-2})\,\sigma_{k-1}\sigma_k\,(\sigma_{k+1}\cdots\sigma_{n-1})\,\sigma_{k-1}=\alpha_j\sigma_{k-1}.$$ For $\varepsilon=-1$, left-multiply this identity in the group $B_n$ by $\sigma_k^{-1}$: it becomes $\alpha_j=\sigma_k^{-1}\alpha_j\sigma_{k-1}$, hence $\sigma_k^{-1}\alpha_j=\alpha_j\sigma_{k-1}^{-1}$. In both signs, therefore, $\sigma_k^{\varepsilon}\alpha_j\equiv\alpha_j\sigma_{k-1}^{\varepsilon}$ and $$F=\alpha_j^{-1}\sigma_k^{\varepsilon}\alpha_j\equiv\alpha_j^{-1}\alpha_j\sigma_{k-1}^{\varepsilon}\equiv\sigma_{k-1}^{\varepsilon}$$ by free cancellation. This is (f); here $k>j\ge1$ gives $k-1\ge1$ and $k\le n-1$ gives $k-1\le n-2$. [F1, F2]

2.1 **Transfer to the geometric braid group.** Since $\varphi$ is a homomorphism with $\varphi(\sigma_r)=[\sigma_r]$ by [F4], applying $\varphi$ to each of the reductions of steps 1.1, 1.2 and 1.3 turns it into the corresponding identity in $G_n$: the free cancellations become $[\gamma][\gamma]^{-1}=1$, and the two Artin relations used are the geometric relations supplied by the published [[lem-geometric-three-strand-braid-relation]] and [[lem-geometric-far-commutativity]]. [F1, F4, step 1.1, step 1.2, step 1.3]

3.1 **Conclusion.** The conditions of the six cases are exactly: $j=k$ (with either sign), $j=k+1$ (with either sign), $j\notin\{k,k+1\}$ with $k\le j-2$, and $j\notin\{k,k+1\}$ with $k\ge j+1$; if $j\notin\{k,k+1\}$ then either $j>k+1$, that is $k<j-1$, or $j<k$, that is $k>j$, so the list is exhaustive, and the conditions are visibly mutually exclusive. Steps 1.1, 1.2 and 1.3 establish the reductions (a)-(f), and the reduced forms are the empty word, $x_k^{\pm1}$, or $\sigma_k^{\varepsilon}$ with $k\le n-2$, or $\sigma_{k-1}^{\varepsilon}$ with $k-1\le n-2$, so all of them are words in $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1},x_1^{\pm1},\dots,x_{n-1}^{\pm1}$; in particular no copy of $\sigma_{n-1}$ survives the reduction outside an $x$-letter. Step 2.1 transfers each reduction to $G_n$. ∎ [step 1.1, step 1.2, step 1.3, step 2.1]

## Remarks

- The case list is exactly the source's list for the factors $(\sigma_{n-1}^{-1}\cdots\sigma_i^{-1})\sigma_k^{\pm1}(\sigma_i\cdots\sigma_{n-1})$, written with the library's first-letter-first convention; the slide identity $\sigma_k\alpha_j\equiv\alpha_j\sigma_{k-1}$ is the source's displayed relation (3.2), and it is the only place where the braid relation is used in cases (e) and (f).
- Cases (a)-(f) are the mechanism by which a combing factor that meets the trivial point either disappears, becomes an $x$-letter, or degenerates to a letter of rank at most $n-2$; the surviving lower-rank letters are collected to the right of the $x$-letters by [[lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel]].
