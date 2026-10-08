---
id: ex-hh-type-a-reduced-words-and-inversions
kind: example
title: "Type-A reduced words and inversion numbers in $S_3$"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 6
deps: [def-hh-coxeter-matrix-word-group-and-length, lem-hh-dihedral-root-recurrence-and-root-sign, thm-hh-coxeter-exchange-deletion-and-faithfulness, thm-hh-parabolic-minimal-representatives-and-length-additivity, ex-hh-finite-dihedral-reduced-words, def-finite-symmetric-group-and-permutation-notation, def-inversions-inversion-number-and-sign]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups, Springer GTM 231 (2005) (complete author/class-hosted PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Proposition 1.5.2 and Proposition 1.5.4, printed pp. 20-22: l_A(x)=inv(x) and (S_n,S) is a Coxeter system of type A_{n-1}"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Example 6.7.1, printed pp. 92-93: the symmetric group as the Coxeter group of type A_{n-1}"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $n=3$, so $S=\{s_1,s_2\}$ with $m(s_1,s_2)=3$, and let $W\cong S_3$ be the identification of [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4) sending $s_1\mapsto(1\ 2)$ and $s_2\mapsto(2\ 3)$. As on the published examples pages, permutations are displayed on the letters $\{1,2,3\}$, identified with the library's $\{0,1,2\}$ by the order-preserving letter shift $j\mapsto j-1$ ([[def-finite-symmetric-group-and-permutation-notation]]); the shift preserves the order, hence preserves inversion numbers and lengths ([[def-inversions-inversion-number-and-sign]]). Then $\ell(w)=\operatorname{inv}(\varphi(w))$ for all $w\in W$, and the six elements of $W$ and their data are:

| $w$ | permutation | length $\ell(w)$ | inversion number |
|---|---|---|---|
| $1$ | $\mathrm{id}$ | $0$ | $0$ |
| $s_1$ | $(1\ 2)$ | $1$ | $1$ |
| $s_2$ | $(2\ 3)$ | $1$ | $1$ |
| $s_1s_2$ | $(1\ 2\ 3)$ | $2$ | $2$ |
| $s_2s_1$ | $(1\ 3\ 2)$ | $2$ | $2$ |
| $s_1s_2s_1=s_2s_1s_2$ | $(1\ 3)$ | $3$ | $3$ |

Consequently: the words $(s_1,s_2)$, $(s_2,s_1)$ and $(s_1,s_2,s_1)$ are reduced, the two reduced expressions $s_1s_2s_1$ and $s_2s_1s_2$ of the longest element are related by the braid move, and the word $(s_1,s_2,s_1,s_2)$ of length $4$ is nonreduced: it represents $s_2s_1$ (inversion number $2$) and deleting its first and last letters gives the reduced word $(s_2,s_1)$.

## Facts & Assumptions

**Given:** The type-A Coxeter matrix on $S=\{s_1,s_2\}$ with $m(s_1,s_2)=3$; the presented group $W$ with its length $\ell$ of [[def-hh-coxeter-matrix-word-group-and-length]]; the isomorphism $W\to S_3$ with $\ell=\operatorname{inv}$ and the relators of the presentation from [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4); the rank-two length formula of the dihedral specialisation [[ex-hh-finite-dihedral-reduced-words]] (3); and the deletion statement of [[thm-hh-coxeter-exchange-deletion-and-faithfulness]].

[F1] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4): for the type-A matrix, "$s_i\mapsto(i\ i+1)$ extends to an isomorphism $W\to S_n$, and for every $w\in W$, $\ell(w)=\operatorname{inv}(\varphi(w))$"; and "a word in the $s_i$ is reduced if and only if its length equals the inversion number of its value".

[F2] [[def-finite-symmetric-group-and-permutation-notation]]: $S_n=\operatorname{Sym}(\{0,1,\dots,n-1\})$ with composition $(\sigma\tau)(i)=\sigma(\tau(i))$, so the right factor acts first, and "An element of $S_n$ is named by either of the two notations below", one-line notation $[\sigma(0),\dots,\sigma(n-1)]$ and cycle notation.

[F3] [[def-inversions-inversion-number-and-sign]]: "An **inversion** of $\sigma$ is a pair $(i,j)$ with $i<j<n$ and $\sigma(i)>\sigma(j)$", and $\operatorname{inv}(\sigma):=|\operatorname{Inv}(\sigma)|$.

[F4] [[ex-hh-finite-dihedral-reduced-words]] (3): with $m=3$ the formulae "$\ell\bigl((st)^k\bigr)=\min(2k,\,2(m-k))$" and "$\ell\bigl((st)^ks\bigr)=\min(2k+1,\,2(m-k)-1)$" give, for the rotation values $k=0,1,2,3$ and the reflection values $k=0,1,2$, the lengths $0,2,2,0$ and $1,3,1$; the maximum is $3$, attained only by $(st)^1s$, and the same values hold after interchanging the roles of $s$ and $t$. In particular $\ell(s_1)=\ell(s_2)=1$, $\ell(s_1s_2)=\ell(s_2s_1)=2$ and $\ell(s_1s_2s_1)=3$, and the element $s_1s_2s_1$, which also equals the alternating word $s_2s_1s_2$ of length $3$, is the unique longest element of $W$.

[F5] [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (3): "Hence repeated deletion of two letters transforms every word into a reduced expression for the same element, and a word is reduced if and only if it cannot be shortened by deleting two letters."

## Verification

**Proof technique:** direct multiplication in $S_3$, with the lengths read off from the inversion-number identification of the type-A theorem.

1.1 **The six products.** Multiplying in $S_3$ with the right factor acting first [F2]: $s_1s_2=(1\ 2)(2\ 3)=(1\ 2\ 3)$, since the right factor $(2\ 3)$ sends $2\mapsto3$ and $3\mapsto2$ and the left factor $(1\ 2)$ then sends $1\mapsto2$, giving $1\mapsto2\mapsto3\mapsto1$; and symmetrically $s_2s_1=(2\ 3)(1\ 2)=(1\ 3\ 2)$. Further $s_1s_2s_1=(1\ 2)(2\ 3)(1\ 2)=(1\ 3)$ and $s_2s_1s_2=(2\ 3)(1\ 2)(2\ 3)=(1\ 3)$, so the two length-three words have the same value. The six values $\mathrm{id}$, $(1\ 2)$, $(2\ 3)$, $(1\ 2\ 3)$, $(1\ 3\ 2)$, $(1\ 3)$ are exactly the six elements of $S_3$, so the images of the six words of the table are correct. [F2]

2.1 **The inversion numbers.** Read the inversions of each value off its one-line form on the letters $1<2<3$ [F3]: $\mathrm{id}=[1,2,3]$ and $(1\ 2)=[2,1,3]$, $(2\ 3)=[1,3,2]$ have inversion numbers $0,1,1$; the $3$-cycles $(1\ 2\ 3)=[2,3,1]$ and $(1\ 3\ 2)=[3,1,2]$ have inversion numbers $2$ and $2$; and $(1\ 3)=[3,2,1]$ has all three pairs inverted, so its inversion number is $3$. Hence the inversion-number column of the table is $(0,1,1,2,2,3)$, and the length column is the same by [F1]. [F1, F3, step 1.1]

3.1 **Reducedness of the short words and the braid move.** By step 2.1, $\ell(s_1s_2)=2$ and $\ell(s_2s_1)=2$ equal the lengths of the words $(s_1,s_2)$ and $(s_2,s_1)$, so both are reduced; likewise $\ell(s_1s_2s_1)=\ell(s_2s_1s_2)=3$ equals the length of the words $(s_1,s_2,s_1)$ and $(s_2,s_1,s_2)$, so both are reduced expressions of the common element $s_1s_2s_1=s_2s_1s_2=(1\ 3)$ of step 1.1. By [F4] the maximum of $\ell$ on $W$ is $3$, attained only by the two equal alternating words of length $3$, so this common element is the unique longest element of $W$ and its two reduced expressions are the two alternating words; the replacement of $(s_1,s_2,s_1)$ by $(s_2,s_1,s_2)$ is the single braid move exchanging the two alternating words of length $m(s_1,s_2)=3$. [F1, F4, step 1.1, step 2.1]

4.1 **The nonreduced word and its deletion.** For the word $(s_1,s_2,s_1,s_2)$ one computes in $W$, using $s_2^2=1$, that $s_1s_2s_1s_2=(s_1s_2s_1)s_2=(s_2s_1s_2)s_2=s_2s_1$, by the relation $s_1s_2s_1=s_2s_1s_2$ of the type-A presentation; the value $s_2s_1$ has inversion number $2<4$ by step 2.1, so the word is not reduced. Its first and last letters are $s_1$ and $s_2$, and deleting them leaves the word $(s_2,s_1)$, which represents $s_2s_1$ and is reduced by step 3.1; this is the two-letter deletion asserted in [F5], here deleting the two letters at positions $1$ and $4$. [F5, step 2.1, step 3.1]

5.1 **Collected.** The table and the length identification (steps 1.1, 2.1) verify $\ell=\operatorname{inv}$ on all six elements of the type-A group and exhibit the two reduced expressions of the longest element (step 3.1) together with a nonreduced word whose first and last letters may be deleted (step 4.1). [step 1.1, step 2.1, step 3.1, step 4.1] ∎
