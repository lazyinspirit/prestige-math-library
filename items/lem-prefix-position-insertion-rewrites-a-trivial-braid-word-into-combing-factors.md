---
id: lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors
kind: lemma
title: "Prefix insertion rewrites a trivial braid word into combing factors"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-zariski-braid-combing-words-alpha-and-x,
       def-braid-group-by-the-artin-presentation,
       prop-the-artin-presentation-surjects-onto-geometric-braids,
       def-elementary-geometric-half-twist,
       prop-stacking-of-geometric-braids-is-well-defined,
       thm-geometric-braids-form-a-group]
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
  precheck: pass
---

## Statement

Assume $n\ge2$ and let $W=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_m}^{\varepsilon_m}$
be a word in the Artin letters and their inverses whose image under the
published surjection $\varphi$ of
[[prop-the-artin-presentation-surjects-onto-geometric-braids]] is the trivial
geometric braid. Write $W_k:=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_k}^{\varepsilon_k}$
for $k=0,\dots,m$, and for $k=0,\dots,m$ let
$$j_k:=\pi\bigl(\varphi(W_k)\bigr)^{-1}(n)\in\{1,\dots,n\}$$
be the position at the bottom of the sub-braid $\varphi(W_k)$ of the point that
sits at position $n$ at its top, where $\pi\colon G_n\to S_n$ is the endpoint
permutation homomorphism; here $s_r$ denotes the transposition of $r$ and
$r+1$. Then $j_0=n$, the recursion
$$j_k=s_{i_k}(j_{k-1})\qquad(k=1,\dots,m)$$
holds, and $j_m=n$ because $\varphi(W)=1$. Equivalently, $j_k$ is the position
of the point that starts at position $n$ at the top of $W$ after it has passed
the first $k$ letters (the library's stacking puts the first letter of a word
on top, so this point meets the letters in word order).

Using only free insertions of the words $\alpha_j\alpha_j^{-1}$ and free
deletions of cancelling pairs (no braid relation), $W$ is equivalent in the
group $B_n$ of [[def-braid-group-by-the-artin-presentation]] to the product of
combing factors
$$W\equiv\prod_{k=1}^{m}\Bigl(\alpha_{j_{k-1}}^{-1}\,\sigma_{i_k}^{\varepsilon_k}\,\alpha_{j_k}\Bigr),$$
where the words $\alpha_1,\dots,\alpha_n$ are those of
[[def-zariski-braid-combing-words-alpha-and-x]]. The $k$-th factor is the
$k$-th letter decorated by its two connectors: read bottom to top (the library's
stacking puts the first letter of a word on top, so the last block of the factor
is met first), the tracked point that starts at position $n$ travels through
$\alpha_{j_k}$ to position $j_k$, is exchanged by the letter $\sigma_{i_k}^{\varepsilon_k}$
to position $j_{k-1}$ when $j_k\in\{i_k,i_k+1\}$ (and is fixed otherwise), and is carried back to position $n$ by
$\alpha_{j_{k-1}}^{-1}$; equivalently, in the source's bottom-up reading the
point has position $j_k$ below the letter and $j_{k-1}$ above it. It lies in
the letter's support precisely when $j_k\in\{i_k,i_k+1\}$; otherwise
$j_{k-1}=j_k$ and it remains fixed outside that support during the letter.
In every case the recursion above is exactly the interchange rule
$j_{k-1}=s_{i_k}(j_k)$ used by the six-case analysis, the empty word is allowed
($m=0$, where $W$ is empty and $j_0=j_m=n$), and nothing but
$\varphi(W)=1$ is assumed about the geometric braid.

## Facts & Assumptions

**Given:** An integer $n\ge2$, a word $W=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_m}^{\varepsilon_m}$ with $\varphi(W)=1$, its prefixes $W_k$, and the words $\alpha_j$ of [[def-zariski-braid-combing-words-alpha-and-x]].

[F1] $\alpha_j=\sigma_j\sigma_{j+1}\cdots\sigma_{n-1}$ for $1\le j\le n-1$ and $\alpha_n=1$ is the empty word; all these are words in the generators and their inverses ([[def-zariski-braid-combing-words-alpha-and-x]]).

[F2] $B_n$ is the quotient of the free group on $\sigma_1,\dots,\sigma_{n-1}$ by the normal closure of the two relation families; consequently words differing by insertions or deletions of adjacent inverse pairs $w^{\pm1}w^{\mp1}$ represent the same element, and a product of words telescopes whenever adjacent connector words cancel ([[def-braid-group-by-the-artin-presentation]], [[def-zariski-braid-combing-words-alpha-and-x]]).

[F3] The assignment $\varphi(\sigma_i)=[\sigma_i]$ extends to a surjective homomorphism $\varphi\colon B_n\to G_n$ ([[prop-the-artin-presentation-surjects-onto-geometric-braids]]).

[F4] The endpoint permutation $\pi\colon G_n\to S_n$ is a homomorphism, the class of the half twist $\sigma_r$ has $\pi([\sigma_r])=s_r$, and under the stacking convention of [[prop-stacking-of-geometric-braids-is-well-defined]] the class of a word $u_1\cdots u_l$ satisfies $\pi(\varphi(u_1\cdots u_l))=\pi(\varphi(u_1))\circ\cdots\circ\pi(\varphi(u_l))$ as functions, the first factor applied last ([[def-elementary-geometric-half-twist]], [[thm-geometric-braids-form-a-group]], [[prop-stacking-of-geometric-braids-is-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 **The connectors move the $n$-th point down to position $j$.** By [F3] and [F1], $\varphi(\alpha_j)=\varphi(\sigma_j)\cdots\varphi(\sigma_{n-1})=[\sigma_j]\cdots[\sigma_{n-1}]$, so by [F4] the endpoint permutation is $\pi(\varphi(\alpha_j))=s_j\circ s_{j+1}\circ\cdots\circ s_{n-1}$ as a function. Evaluating on positions, this function sends $n\mapsto n-1\mapsto n-2\mapsto\cdots\mapsto j$ and fixes every $x<j$, so it is the cycle $t_j:=(j\ j+1\ \cdots\ n)$ with $t_j(n)=j$; in particular a point starting at position $n$ ends at position $j$, and $t_j^{-1}(j)=n$. For $j=n$ the word $\alpha_n$ is empty and $\pi(\varphi(\alpha_n))=\operatorname{id}$ with $\operatorname{id}(n)=n$. [F1, F3, F4]

1.2 **The recursion and its endpoints.** For each $k$, [F3] and [F4] give $\pi(\varphi(W_k))=\pi(\varphi(\sigma_{i_1}^{\varepsilon_1}))\circ\cdots\circ\pi(\varphi(\sigma_{i_k}^{\varepsilon_k}))=s_{i_1}\circ\cdots\circ s_{i_k}$, because $s_r^{\pm1}=s_r$. Taking inverses, $\pi(\varphi(W_k))^{-1}=s_{i_k}\circ\cdots\circ s_{i_1}$, so $j_k:=\pi(\varphi(W_k))^{-1}(n)$ satisfies $j_0=n$ (the empty product) and $j_k=s_{i_k}(j_{k-1})$ for $1\le k\le m$. Since $W_m=W$ and $\varphi(W)=1$, $\pi(\varphi(W_m))=\operatorname{id}$ and therefore $j_m=\operatorname{id}(n)=n$. [F3, F4]

2.1 **The telescoping insertion.** For $k=1,\dots,m-1$ insert the word $\alpha_{j_k}\alpha_{j_k}^{-1}$ between the $k$-th and $(k+1)$-st letter of $W$ and bracket the result as $$W=\alpha_{j_0}^{-1}\,\sigma_{i_1}^{\varepsilon_1}\,\alpha_{j_1}\ \cdot\ \alpha_{j_1}^{-1}\,\sigma_{i_2}^{\varepsilon_2}\,\alpha_{j_2}\ \cdots\ \alpha_{j_{m-1}}^{-1}\,\sigma_{i_m}^{\varepsilon_m}\,\alpha_{j_m}.$$ Each interior position contributes $\alpha_{j_k}\alpha_{j_k}^{-1}=1$, which is a free cancellation by [F2], and by [F1] and step 1.2 the two end connectors are $\alpha_{j_0}=\alpha_n=1$ and $\alpha_{j_m}=\alpha_n=1$; expanding the displayed product therefore returns the original word $W$ by free cancellations alone, and conversely $W$ is obtained from the displayed product by the inverse free moves. No defining relation of the Artin presentation is used. [F1, F2, step 1.2]

2.2 **The bookkeeping inside a factor.** Fix $k$ and read the factor $F_k=\alpha_{j_{k-1}}^{-1}\sigma_{i_k}^{\varepsilon_k}\alpha_{j_k}$ from the bottom upward, that is, starting from its last and lowest block $\alpha_{j_k}$ and ending with its first and topmost block $\alpha_{j_{k-1}}^{-1}$ (the word's first letter is the topmost layer in the stacking of [F4]). A point starting at position $n$ at the bottom of the factor is carried by the block $\alpha_{j_k}$ to position $t_{j_k}(n)=j_k$ by step 1.1, then by the letter $\sigma_{i_k}^{\varepsilon_k}$ to position $s_{i_k}^{\varepsilon_k}(j_k)=s_{i_k}(j_k)=j_{k-1}$ by [F4] and step 1.2 (if $j_k=j_{k-1}$ the letter fixes it), and then by the block $\alpha_{j_{k-1}}^{-1}$ to position $t_{j_{k-1}}^{-1}(j_{k-1})=n$ by step 1.1. Hence inside the $k$-th factor the letter acts on the tracked point exactly through the interchange rule connecting the two connector positions $j_k$ (below the letter) and $j_{k-1}$ (above it), and the tracked point returns to position $n$ at the top of every factor, as it must because at the top of $W$ it is again at position $n$ by $\varphi(W)=1$. [F3, F4, step 1.1, step 1.2]

3.1 **Conclusion.** Steps 1.2 and 2.1 establish the recursion, its endpoints, and the telescoping product. Step 2.2 gives the positions $j_k$ below and $j_{k-1}$ above each letter. By the half-twist definition in [F4], the tracked point lies in the letter's support if $j_k\in\{i_k,i_k+1\}$; otherwise it is a fixed base point outside that support. For $m=0$ the product is empty. ∎ [F4, step 1.2, step 2.1, step 2.2]

## Remarks

- The lemma is a pure bookkeeping statement: the group element is unchanged because each inserted connector is immediately cancelled, and the geometric input is only the published endpoint-permutation homomorphism, which fixes the positions $j_k$ by the triviality of $\varphi(W)$.
- In the source the same product is displayed with $\alpha_{j_0}=\alpha_{j_m}=1$, reading words bottom-up; the recursion $j_k=s_{i_k}(j_{k-1})$ is identical in both conventions, and the six-case reduction of the next item depends only on this recursion and on the displayed shape of the factors.
