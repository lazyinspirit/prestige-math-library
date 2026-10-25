---
id: lem-every-trivial-braid-word-combs-as-w-one-w-two
kind: lemma
title: "Every trivial braid word combs as W_1W_2"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors,
       lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter,
       lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel,
       def-zariski-braid-combing-words-alpha-and-x,
       def-braid-group-by-the-artin-presentation,
       prop-the-artin-presentation-surjects-onto-geometric-braids]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 3.1, printed pp. 19-21"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume $n\ge2$, and let $W$ be a word in
$\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}$ whose geometric image under the
surjection $\varphi$ of
[[prop-the-artin-presentation-surjects-onto-geometric-braids]] is the trivial
geometric braid. Then $W$ is equivalent to a product $W_1W_2$, using only the
two Artin relations and free insertions and deletions of adjacent inverse
pairs $\sigma^{\pm1}\sigma^{\mp1}$, in which

- $W_1$ is a word in the $x$-letters $x_1^{\pm1},\dots,x_{n-1}^{\pm1}$ of
  [[def-zariski-braid-combing-words-alpha-and-x]], and
- $W_2$ is a word in the lower-rank letters
  $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1}$.

Both $W_1$ and $W_2$ may be empty, and no letter $\sigma_{n-1}$ or
$\sigma_{n-1}^{-1}$ occurs in either of the two words.

## Facts & Assumptions

**Given:** An integer $n\ge2$, the group $B_n=\langle\sigma_1,\dots,\sigma_{n-1}\rangle$ of [[def-braid-group-by-the-artin-presentation]], a word $W$ in the Artin letters and their inverses with $\varphi(W)=1$, and the words $\alpha_1,\dots,\alpha_n$ and $x_1,\dots,x_{n-1}$ of [[def-zariski-braid-combing-words-alpha-and-x]].

[F1] In $B_n$ the two families of defining relations hold, and two words differing by insertions or deletions of adjacent inverse pairs $w^{\pm1}w^{\mp1}$ represent the same element; write $u\equiv v$ when the words $u,v$ can be connected by these moves and the two relation families ([[def-braid-group-by-the-artin-presentation]]). The moves are symmetric, so $\equiv$ is an equivalence relation, and it is compatible with concatenation in the sense that $u\equiv v$ implies $put\equiv pvt$ for words $p,t$.

[F2] $\varphi\colon B_n\to G_n$ is the surjective homomorphism of [[prop-the-artin-presentation-surjects-onto-geometric-braids]] with $\varphi(\sigma_i)=[\sigma_i]$.

[F3] Prefix insertion ([[lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors]]): if $W=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_m}^{\varepsilon_m}$ and $\varphi(W)=1$, then there are positions $j_0,j_1,\dots,j_m\in\{1,\dots,n\}$ with $j_0=j_m=n$ and $j_k=s_{i_k}(j_{k-1})$ such that $W\equiv\prod_{k=1}^{m}\bigl(\alpha_{j_{k-1}}^{-1}\sigma_{i_k}^{\varepsilon_k}\alpha_{j_k}\bigr)$, where each factor is a combing factor in the sense of [[lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter]] with $j=j_{k-1}$, $k\mapsto i_k$, $\varepsilon\mapsto\varepsilon_k$ and $j'=j_k$.

[F4] Each combing factor reduces to a word of at most one letter in the mixed alphabet $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1},x_1^{\pm1},\dots,x_{n-1}^{\pm1}$: the empty word, or $x_{i_k}^{\pm1}$, or $\sigma_{i_k}^{\varepsilon_k}$ with $i_k\le n-2$, or $\sigma_{i_k-1}^{\varepsilon_k}$ with $i_k-1\le n-2$ ([[lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter]]).

[F5] Conjugation table ([[lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel]]): for every $1\le i\le n-2$, $1\le j\le n-1$ and signs $\varepsilon,\delta\in\{\pm1\}$ there is a word $w$ in the letters $x_1^{\pm1},\dots,x_{n-1}^{\pm1}$ with $\sigma_i^{\varepsilon}x_j^{\delta}=w\,\sigma_i^{\varepsilon}$ in $B_n$. In particular a contiguous pair consisting of a lower-rank $\sigma$-letter followed immediately by an $x$-letter can be replaced by a word of $x$-letters followed by that same $\sigma$-letter.

## Proof

**Proof technique:** direct.

1.1 **Prefix insertion.** By [F3] and $\varphi(W)=1$, there are positions $j_0=j_m=n$ with $j_k=s_{i_k}(j_{k-1})$ and $W\equiv\prod_{k=1}^{m}F_k$, $F_k:=\alpha_{j_{k-1}}^{-1}\sigma_{i_k}^{\varepsilon_k}\alpha_{j_k}$. [F2, F3]

1.2 **Reducing the factors.** Fix $k$ and apply [F4] to $F_k$, whose letter has index $i_k$ and whose connector position is $j_{k-1}$ with $j_k=s_{i_k}(j_{k-1})$; the factor is equivalent to the empty word, or to a single letter $x_{i_k}$ or $x_{i_k}^{-1}$, or to a single letter $\sigma_{i_k}^{\varepsilon_k}$ with $i_k\le n-2$, or to a single letter $\sigma_{i_k-1}^{\varepsilon_k}$ with $i_k-1\le n-2$. Deleting the factors that reduce to the empty word and choosing one such reduced word in each remaining factor, we obtain a word $U$ in the mixed alphabet $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1},x_1^{\pm1},\dots,x_{n-1}^{\pm1}$ with $W\equiv U$, because $\equiv$ is compatible with concatenation by [F1]. [F1, F4]

1.3 **Collection of the lower-rank letters.** We show: for every word $U$ in the mixed alphabet $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1},x_1^{\pm1},\dots,x_{n-1}^{\pm1}$ there are a word $u$ in the $x$-letters and a word $v$ in $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1}$ with $U\equiv uv$. Proceed by induction on the number $r$ of $\sigma$-letters occurring in $U$. If $r=0$, take $u:=U$ and $v$ empty. If $r\ge1$, let $s$ be the last (rightmost) $\sigma$-letter of $U$ and write $U=P\,s\,A$, where $A$ is the (possibly empty) $x$-word following $s$, so that no $\sigma$-letter occurs in $A$. While $A$ is nonempty, let $x$ be its first letter and replace the adjacent pair $sx$ by $ws$, where $s=\sigma_i^{\varepsilon}$ with $i\le n-2$, $x=x_j^{\delta}$ and $\sigma_i^{\varepsilon}x_j^{\delta}=w\sigma_i^{\varepsilon}$ is the identity of [F5]; this is a permitted rewrite, and the new word again has $s$ as its rightmost $\sigma$-letter, now followed by $A$ with its first letter deleted, because the $x$-word $w$ stands immediately to the left of $s$. Hence the number of letters strictly to the right of $s$ decreases by exactly one at each rewrite, so after finitely many steps we obtain a word $U'\equiv U$ whose letters strictly to the right of the rightmost $\sigma$-letter $s$ are none, that is, $U'=P'\,s$ where $P'$ is a word in the mixed alphabet with exactly $r-1$ $\sigma$-letters. By the induction hypothesis applied to $P'$, there are an $x$-word $u'$ and a $\sigma$-word $v'$ with $P'\equiv u'v'$; then $U\equiv U'\equiv u'(v's)$ by [F1], where $u'$ is an $x$-word and $v's$ is a word in the $\sigma$-letters of rank at most $n-2$, so the induction is complete. [F1, F5]

2.1 **Assembly.** By step 1.2 there is a mixed word $U$ with $W\equiv U$, and by step 1.3 there are an $x$-word $W_1$ and a lower-rank $\sigma$-word $W_2$ with $U\equiv W_1W_2$; since $\equiv$ is transitive by [F1], $W\equiv W_1W_2$, which is the required product. [F1, step 1.2, step 1.3]

3.1 **Conclusion.** Given $W$ with $\varphi(W)=1$, steps 1.1-1.3 rewrite it, using only the two Artin relations and free insertions and deletions of adjacent inverse pairs, first into the product of its combing factors, then into a word $U$ in the mixed alphabet, and finally into a product $W_1W_2$ with $W_1$ a word in $x_1^{\pm1},\dots,x_{n-1}^{\pm1}$ and $W_2$ a word in $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1}$; the name $n-2$ in the statement is justified because [F4] bounds every surviving $\sigma$-index by $n-2$. ∎ [step 1.1, step 1.2, step 1.3, step 2.1]

## Remarks

- The collection step is the source's "we can collect all the $\sigma_i^{\pm1}$ on the right". The naive measure "number of pairs (an $x$-letter left of a $\sigma$-letter)" is not monotone, because a pair $sx$ can be replaced by a word $ws$ in which $w$ has up to three letters, for instance $\sigma_ix_i=x_i^{-1}x_{i+1}x_i\sigma_i$; the proof above instead processes the $\sigma$-letters from right to left, and each swap strictly shortens the segment to the right of the processed letter.
- Only the two Artin relations, the conjugation table of [[lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel]], and the tracking of [[lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors]] are used; in particular the geometric input is only $\varphi(W)=1$.
- For $n=2$ the mixed alphabet contains no $\sigma$-letters of rank at most $0$, so the conclusion reads $W\equiv W_1$ with $W_1$ a word in $x_1^{\pm1}$; the lemma is not used to determine how many $x_1$-factors occur, and the induction of the completeness theorem below supplies that in the trivial case.
