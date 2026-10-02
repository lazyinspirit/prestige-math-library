---
id: lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel
kind: lemma
title: "Lower-rank Artin letters conjugate x-letters"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-zariski-braid-combing-words-alpha-and-x,
       def-braid-group-by-the-artin-presentation,
       prop-the-artin-presentation-surjects-onto-geometric-braids,
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
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 3.1, printed pp. 20-21"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume $n\ge3$, let $1\le i\le n-2$ and $1\le j\le n-1$, and work in the group
$B_n$ of [[def-braid-group-by-the-artin-presentation]] with the words
$\sigma_1,\dots,\sigma_{n-1}$ and $x_1,\dots,x_{n-1}$ of
[[def-zariski-braid-combing-words-alpha-and-x]]. Using only the two families of
defining relations and free insertions and deletions of adjacent inverse
letters:

**(i)** $\sigma_i^{-1}x_j\sigma_i$ equals $x_j$ when $j<i$ or $j>i+1$, equals
$x_{i+1}x_ix_{i+1}^{-1}$ when $j=i+1$, and equals $x_{i+1}$ when $j=i$;

**(ii)** $\sigma_ix_j\sigma_i^{-1}$ equals $x_j$ when $j<i$ or $j>i+1$, equals
$x_i$ when $j=i+1$, and equals $x_i^{-1}x_{i+1}x_i$ when $j=i$.

Consequently, for every pair of signs $\varepsilon,\delta\in\{\pm1\}$ there is a
word $w$ in the letters $x_1^{\pm1},\dots,x_{n-1}^{\pm1}$ with
$$\sigma_i^{\varepsilon}x_j^{\delta}=w\,\sigma_i^{\varepsilon},$$
so that in any word over the mixed alphabet
$\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1},x_1^{\pm1},\dots,x_{n-1}^{\pm1}$
each occurrence of a lower-rank $\sigma$-letter can be moved to the right of
every $x$-letter, the $x$-letters changing only by further $x$-letters and their
inverses. All identities also hold in the geometric braid group under the
published surjection $\varphi$ of
[[prop-the-artin-presentation-surjects-onto-geometric-braids]].

## Facts & Assumptions

**Given:** Integers $n\ge3$, $1\le i\le n-2$, $1\le j\le n-1$, the group $B_n$
of [[def-braid-group-by-the-artin-presentation]], and the elements
$x_1,\dots,x_{n-1}\in B_n$ of [[def-zariski-braid-combing-words-alpha-and-x]].

[F1] In $B_n$ the two defining families of relations hold: $\sigma_r\sigma_{r+1}\sigma_r=\sigma_{r+1}\sigma_r\sigma_{r+1}$ for $1\le r\le n-2$, and $\sigma_r\sigma_s=\sigma_s\sigma_r$ whenever $|r-s|>1$; words equal in the free group on $\sigma_1,\dots,\sigma_{n-1}$ and their inverses represent the same element of $B_n$, so adjacent inverse letters may be freely inserted and deleted ([[def-braid-group-by-the-artin-presentation]], [[def-zariski-braid-combing-words-alpha-and-x]]).

[F2] For every $r$ with $1\le r\le n-1$ one has the two displayed words $x_r=\sigma_{n-1}^{-1}\cdots\sigma_{r+1}^{-1}\sigma_r^{2}\sigma_{r+1}\cdots\sigma_{n-1}=\alpha_{r+1}^{-1}\sigma_r^{2}\alpha_{r+1}$, and $x_r^{-1}=\sigma_{n-1}^{-1}\cdots\sigma_{r+1}^{-1}\sigma_r^{-2}\sigma_{r+1}\cdots\sigma_{n-1}$; also $\alpha_s=\sigma_s\sigma_{s+1}\cdots\sigma_{n-1}$ for $1\le s\le n-1$ and $\alpha_n=1$ ([[def-zariski-braid-combing-words-alpha-and-x]]).

[F3] The map $\varphi\colon B_n\to G_n$ of [[prop-the-artin-presentation-surjects-onto-geometric-braids]] is a homomorphism with $\varphi(\sigma_r)=[\sigma_r]$, and in the geometric braid group $G_n$ the two families of relations of [F1] hold: $[\sigma_r][\sigma_{r+1}][\sigma_r]=[\sigma_{r+1}][\sigma_r][\sigma_{r+1}]$ and $[\sigma_r][\sigma_s]=[\sigma_s][\sigma_r]$ for $|r-s|>1$ ([[lem-geometric-three-strand-braid-relation]], [[lem-geometric-far-commutativity]]).

## Proof

**Proof technique:** direct.

1.1 **Two mixed forms of the braid relation.** Let $1\le r\le n-2$. Multiplying $\sigma_r\sigma_{r+1}\sigma_r=\sigma_{r+1}\sigma_r\sigma_{r+1}$ on the left by $\sigma_r^{-1}$ and on the right by $\sigma_{r+1}^{-1}$ gives $$\sigma_r^{-1}\sigma_{r+1}\sigma_r=\sigma_{r+1}\sigma_r\sigma_{r+1}^{-1},$$ and multiplying the braid relation on the left by $\sigma_{r+1}^{-1}$ and on the right by $\sigma_r^{-1}$ gives $\sigma_{r+1}^{-1}\sigma_r\sigma_{r+1}=\sigma_r\sigma_{r+1}\sigma_r^{-1}$, whose inverse is $$\sigma_r\sigma_{r+1}^{-1}\sigma_r^{-1}=\sigma_{r+1}^{-1}\sigma_r^{-1}\sigma_{r+1}.$$ Both are consequences of the defining relations of [F1] alone. [F1]

1.2 **The case $j>i+1$.** Every letter $\sigma_r^{\pm1}$ occurring in the displayed word for $x_j$ of [F2] has $r\ge j\ge i+2$, so $|i-r|\ge2$ and $\sigma_i$ commutes with that letter by the far-commutation relation of [F1]; repeating this letter by letter, $\sigma_i$ commutes with the whole word, so $\sigma_i^{\pm1}x_j\sigma_i^{\mp1}=x_j$. In particular both assertions (i) and (ii) hold for $j>i+1$. [F1, F2]

2.1 **The case $j<i$: sliding $\sigma_i$ past $x_j$.** Decompose the word of [F2] for $x_j$ at the index $i$, which satisfies $j<i$, as $$x_j=A\,\sigma_i^{-1}K\sigma_iB,\qquad A:=\sigma_{n-1}^{-1}\cdots\sigma_{i+1}^{-1},\quad K:=\sigma_{i-1}^{-1}\cdots\sigma_{j+1}^{-1}\sigma_j^{2}\sigma_{j+1}\cdots\sigma_{i-1},\quad B:=\sigma_{i+1}\cdots\sigma_{n-1},$$ where each of $A$, $K$, $B$ may be empty and the displayed equality is free cancellation in the two words of [F2]. Since $\sigma_i$ commutes with every letter of $A$ except $\sigma_{i+1}^{-1}$, and $\sigma_i\sigma_{i+1}^{-1}\sigma_i^{-1}=\sigma_{i+1}^{-1}\sigma_i^{-1}\sigma_{i+1}$ by step 1.1, one has $\sigma_iA\sigma_i^{-1}=A\sigma_i^{-1}\sigma_{i+1}$; since $\sigma_{i+1}$ commutes with every letter of $K$ (all its indices are at most $i-1$), and since $B=\sigma_{i+1}B'$ with $B':=\sigma_{i+2}\cdots\sigma_{n-1}$, the computation $$\sigma_ix_j=\sigma_iA\sigma_i^{-1}K\sigma_iB=A\sigma_i^{-1}\sigma_{i+1}K\sigma_iB=A\sigma_i^{-1}K\sigma_{i+1}\sigma_i\sigma_{i+1}B'=A\sigma_i^{-1}K\,\sigma_i\sigma_{i+1}\sigma_i\,B'=A\sigma_i^{-1}K\sigma_i\sigma_{i+1}B'\sigma_i=x_j\sigma_i$$ uses only far commutation, the braid relation, and the fact that $\sigma_i$ commutes with every letter of $B'$. Left-multiplying by $\sigma_i^{-1}$ gives $\sigma_i^{-1}x_j\sigma_i=x_j$, and right-multiplying by $\sigma_i^{-1}$ gives $\sigma_ix_j\sigma_i^{-1}=x_j$; both assertions hold for $j<i$. [F1, F2, step 1.1]

2.2 **The case $j=i+1$.** Put $C:=\sigma_{n-1}^{-1}\cdots\sigma_{i+2}^{-1}$ and $D:=\sigma_{i+2}\cdots\sigma_{n-1}$, so that $C=D^{-1}$ as words and, by [F2], $$x_{i+1}=C\sigma_{i+1}^{2}D,\qquad x_i=C\sigma_{i+1}^{-1}\sigma_i^{2}\sigma_{i+1}D,\qquad x_{i+1}^{-1}=D^{-1}\sigma_{i+1}^{-2}C^{-1}.$$ Since $\sigma_i$ commutes with every letter of $C$ and of $D$, and using step 1.1, $$\sigma_i^{-1}x_{i+1}\sigma_i=C\,\sigma_i^{-1}\sigma_{i+1}^{2}\sigma_i\,D=C\bigl(\sigma_i^{-1}\sigma_{i+1}\sigma_i\bigr)^{2}D=C\bigl(\sigma_{i+1}\sigma_i\sigma_{i+1}^{-1}\bigr)^{2}D=C\,\sigma_{i+1}\sigma_i^{2}\sigma_{i+1}^{-1}D .$$ Expanding the product $x_{i+1}x_ix_{i+1}^{-1}$ with the three displayed words and using $D\,C=D\,D^{-1}=1$ and $C^{-1}=D$ gives $$x_{i+1}x_ix_{i+1}^{-1}=C\sigma_{i+1}^{2}(DC)\sigma_{i+1}^{-1}\sigma_i^{2}\sigma_{i+1}(DD^{-1})\sigma_{i+1}^{-2}C^{-1}=C\sigma_{i+1}\sigma_i^{2}\sigma_{i+1}^{-1}D,$$ so $\sigma_i^{-1}x_{i+1}\sigma_i=x_{i+1}x_ix_{i+1}^{-1}$. [F1, F2, step 1.1]

3.1 **The case $j=i$.** With the same words $C,D$ of step 2.2, [F2] gives $x_i=C\sigma_{i+1}^{-1}\sigma_i^{2}\sigma_{i+1}D$, and $\sigma_i$ commutes with every letter of $C$ and of $D$, so $$\sigma_i^{-1}x_i\sigma_i=C\,\sigma_i^{-1}\sigma_{i+1}^{-1}\sigma_i^{2}\sigma_{i+1}\sigma_i\,D=C\bigl(\sigma_i^{-1}\sigma_{i+1}^{-1}\sigma_i\bigr)\bigl(\sigma_i\sigma_{i+1}\sigma_i\bigr)D .$$ Inverting the first identity of step 1.1 gives $\sigma_i^{-1}\sigma_{i+1}^{-1}\sigma_i=\sigma_{i+1}\sigma_i^{-1}\sigma_{i+1}^{-1}$, and the defining braid relation gives $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$; substituting, $$\sigma_i^{-1}x_i\sigma_i=C\,\sigma_{i+1}\sigma_i^{-1}\sigma_{i+1}^{-1}\sigma_{i+1}\sigma_i\sigma_{i+1}D=C\,\sigma_{i+1}\sigma_i^{-1}\sigma_i\sigma_{i+1}D=C\sigma_{i+1}^{2}D=x_{i+1},$$ the penultimate equality deleting the adjacent inverse pairs and the last equality being [F2] again. [F1, F2, step 1.1]

4.1 **The second orientation for $j=i$ and $j=i+1$.** The map $c_i\colon B_n\to B_n$, $c_i(g):=\sigma_i^{-1}g\sigma_i$, is the conjugation automorphism by $\sigma_i$, with inverse $c_i^{-1}(g)=\sigma_ig\sigma_i^{-1}$. Steps 2.2 and 3.1 give $c_i(x_i)=x_{i+1}$ and $c_i(x_{i+1})=x_{i+1}x_ix_{i+1}^{-1}$, hence $c_i\bigl(x_i^{-1}x_{i+1}x_i\bigr)=x_{i+1}^{-1}\bigl(x_{i+1}x_ix_{i+1}^{-1}\bigr)x_{i+1}=x_i$; therefore $c_i^{-1}(x_i)=x_i^{-1}x_{i+1}x_i$, that is $\sigma_ix_i\sigma_i^{-1}=x_i^{-1}x_{i+1}x_i$, and $c_i^{-1}(x_{i+1})=x_i$, that is $\sigma_ix_{i+1}\sigma_i^{-1}=x_i$. This is assertion (ii) in the two remaining cases. [step 2.2, step 3.1]

5.1 **All four signs.** Let $\varepsilon,\delta\in\{\pm1\}$. If $\delta=1$, then $\sigma_i^{\varepsilon}x_j=\bigl(\sigma_i^{\varepsilon}x_j\sigma_i^{-\varepsilon}\bigr)\sigma_i^{\varepsilon}$; by steps 1.2, 2.1, 2.2, 3.1 and 4.1 the middle factor equals $x_j$ (for $j<i$ or $j>i+1$), or $x_{i+1}$, $x_{i+1}x_ix_{i+1}^{-1}$, $x_i$, $x_i^{-1}x_{i+1}x_i$ (for $j=i$ or $j=i+1$, according to the sign of $\varepsilon$), so in every case it is a word in $x_1^{\pm1},\dots,x_{n-1}^{\pm1}$. If $\delta=-1$, then $\sigma_i^{\varepsilon}x_j^{-1}=\bigl(\sigma_i^{\varepsilon}x_j\sigma_i^{-\varepsilon}\bigr)^{-1}\sigma_i^{\varepsilon}$, and the same case list applies with the inverse word. Hence for all signs $\sigma_i^{\varepsilon}x_j^{\delta}=w\sigma_i^{\varepsilon}$ with $w$ a word in the $x$-letters and their inverses, and a leftmost occurrence of $\sigma_i^{\pm1}$ in any mixed word can therefore be moved one $x$-letter at a time to the right of all $x$-letters, only $x$-letters changing. [F2, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1]

6.1 **Transfer to the geometric braid group.** Since $\varphi$ is a homomorphism with $\varphi(\sigma_r)=[\sigma_r]$ by [F3], and since the relations used in steps 1.1-5.1 are exactly the two families of [F1], applying $\varphi$ to each identity yields the corresponding identity in $G_n$ between $\varphi(\sigma_i)^{\pm1}$ and $\varphi(x_j)^{\pm1}$: the images satisfy the braid relation and far commutation by the published geometric lemmas, and the free cancellations map to cancellations in the group $G_n$. [F3, step 1.1, step 5.1]

7.1 Assertion (i) is steps 1.2, 2.1, 2.2 and 3.1, assertion (ii) is steps 1.2, 2.1 and 4.1, the collection statement is step 5.1, and the geometric transfer is step 6.1. ∎ [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1, step 6.1]
