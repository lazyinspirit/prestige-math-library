---
id: ex-cg-s4-subword-descriptions-agree
kind: example
title: "Two reduced expressions of one element whose subword descriptions agree"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [thm-cg-bruhat-subword-characterization, lem-cg-bruhat-chain-refinement-and-gradedness, def-cg-bruhat-order-by-reflection-chains, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-finite-symmetric-group-and-permutation-notation, def-inversions-inversion-number-and-sign, def-group]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
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
      locator: "Section 2.2, printed p. 34: Corollary 2.2.3 (independence of the reduced expression in the subword description), which is exactly the phenomenon checked here; Section 1.4 for the braid relations"
    - title: "Tom Denton, Lifting property and poset structure of finite Coxeter groups (UC Davis MAT 280 lecture notes, 26 January 2009)"
      url: "https://www.math.ucdavis.edu/~anne/WQ2009/MAT280-Lecture9.pdf"
      locator: "Theorem 2 (printed p. 1): the subword property in the 'some, equivalently every' form"
---

## Example

In $W=S_4$ with one-line notation and $\ell$ the inversion number ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4)), the element $v=2431$ has the two reduced expressions
$$v=s_1s_2s_3s_2=s_1s_3s_2s_3,$$
both of length $4=\ell(2431)$.

**(i)** The element $u=s_2=1324$ satisfies $u\le v$, and the subword criterion certifies this in each expression, but at different positions: position $2$ of $s_1s_2s_3s_2$ and position $3$ of $s_1s_3s_2s_3$ (in the second word $s_2$ occurs only at position $3$). Thus the two descriptions of $u$ inside the two expressions of $v$ differ in position but must agree in value.

**(ii)** The $2^4=16$ subwords of either word realize the same set of $12$ elements, namely the interval
$$[1,v]=\{1234,1243,1324,1342,1423,1432,2134,2143,2314,2341,2413,2431\}.$$
The two expressions of $v$ therefore produce identical subword descriptions of the interval below $v$; if they could disagree, some element would be comparable with $v$ according to one reduced expression of $v$ and incomparable according to the other ([[thm-cg-bruhat-subword-characterization]] (2)).

## Facts & Assumptions

**Given:** $W=S_4$ with generators $s_1,s_2,s_3$, the element $v=2431$ with its two reduced expressions, the element $u=s_2$, and the subword enumerations of the statement.

[F1] For type $A_{n-1}$ with $S=\{s_1,\dots,s_{n-1}\}$, the assignment $s_i\mapsto(i\ i+1)$ extends to an isomorphism $W\to S_n$ and $\ell(w)=\operatorname{inv}(\varphi(w))$; in particular a word in the $s_i$ is reduced if and only if its length equals the inversion number of its value. ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4))

[F2] One-line notation lists the values of a permutation in order of the arguments, and the composition convention is $(\sigma\tau)(i)=\sigma(\tau(i))$; hence right multiplication by $s_i=(i\ i+1)$ swaps the entries in positions $i$ and $i+1$ of the one-line form. ([[def-finite-symmetric-group-and-permutation-notation]])

[F3] The inversion number of $\sigma$ is $\operatorname{inv}(\sigma)=|\{(i,j):i<j,\ \sigma(i)>\sigma(j)\}|$. ([[def-inversions-inversion-number-and-sign]])

[F4] Subword criterion: for a reduced expression $v=r_1\cdots r_q$ and $x\in W$, one has $x\le v$ if and only if there are $1\le i_1<\cdots<i_k\le q$ with $x=r_{i_1}\cdots r_{i_k}$, and the indices may be chosen with $k=\ell(x)$. ([[thm-cg-bruhat-subword-characterization]] (1))

[F5] Expression independence: for all $x,v\in W$ the following are equivalent: (a) $x\le v$; (b) every reduced expression of $v$ has a subword that is a reduced expression of $x$; (c) some reduced expression of $v$ has a subword that is a reduced expression of $x$. ([[thm-cg-bruhat-subword-characterization]] (2))

[F6] The interval of the statement is the Bruhat interval $[1,v]=\{x\in W:1\le x\le v\}$, and $1\le x$ holds for every $x\in W$. ([[lem-cg-bruhat-chain-refinement-and-gradedness]] (1), [[def-cg-bruhat-order-by-reflection-chains]] (2))

## Verification

1.1 For (i): $v=2431=s_1s_2s_3s_2=s_1s_3s_2s_3$, because the two words differ only in their last three letters, which are the two words $s_2s_3s_2$ and $s_3s_2s_3$ of the same element of the rank-two parabolic $\langle s_2,s_3\rangle$ (the braid relation), and $v$ has inversion number $4$ by [F3], so both words have length $4=\ell(v)$ and are reduced expressions of $v$ by [F1]; the product $s_1s_2s_3s_2=2431$ is computed by applying [F2] letter by letter. The element $u=s_2$ has one-line form $1324$ and $\ell(u)=1$; it occurs in $s_1s_2s_3s_2$ at positions $2$ and $4$ and in $s_1s_3s_2s_3$ at position $3$ only, so the subword criterion [F4] gives $u\le v$ from either occurrence, at different positions in the two expressions of $v$. [F1, F2, F3, F4]

1.2 For (ii): fix either reduced expression of $v$. Every subword value $x$ is the product of a subword of that reduced word, hence $x\le v$ by the right-to-left direction of [F4], and $1\le x$ by [F6], so the set of subword values of either expression is contained in the interval $[1,v]$; conversely, by [F5] every $x\in[1,v]$ has a reduced subword expression inside every reduced expression of $v$, hence is a value of a subword of either of the two words. Therefore the sets of subword values of the two expressions are both equal to $[1,v]$, so they coincide. Enumerating the $16$ subwords of $s_1s_2s_3s_2$ by multiplying out the indicated letters with [F2] gives exactly the $12$ displayed permutations $1234$, $1243$, $1324$, $1342$, $1423$, $1432$, $2134$, $2143$, $2314$, $2341$, $2413$, $2431$ (the empty subword gives $1234$), and enumerating the $16$ subwords of $s_1s_3s_2s_3$ gives the same $12$ values; hence $[1,v]$ is exactly the displayed set. [F2, F4, F5, F6]

2.1 Collecting: the two reduced expressions of $v$ describe the same interval below $v$, both by the general equivalence of [F5] and by the explicit enumeration of step 1.2 of the $16$ subwords of each expression; the element $u=s_2$ is described at position $2$ in the first expression and position $3$ in the second, so the positions may differ while the value is the same, as (i) says. If the two descriptions could disagree, then some element would have a subword expression in one reduced expression of $v$ and none in the other, contradicting [F5]; all computations are finite and use no choice principle. [F5, step 1.1, step 1.2] ∎
