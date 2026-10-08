---
id: ex-cg-s4-subwords-and-covers
kind: example
title: "Subwords, reflection deletions and the covers of the longest element in S4"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps: [thm-cg-bruhat-subword-characterization, thm-cg-bruhat-lifting-and-cover-criterion, lem-cg-bruhat-chain-refinement-and-gradedness, def-cg-bruhat-order-by-reflection-chains, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-finite-symmetric-group-and-permutation-notation, def-inversions-inversion-number-and-sign, def-group]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
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
      locator: "Section 2.1, printed pp. 30-32 (Figure 2.4, the Bruhat poset of $S_4$) and Section 2.2 (subword, chain and cover criteria used to organise the computation)"
    - title: "Tom Denton, Lifting property and poset structure of finite Coxeter groups (UC Davis MAT 280 lecture notes, 26 January 2009)"
      url: "https://www.math.ucdavis.edu/~anne/WQ2009/MAT280-Lecture9.pdf"
      locator: "Theorem 2 and the following cover/rank paragraph (printed pp. 1-2): the general forms of the claims instantiated here"
---

## Example

Let $W=S_4$ with simple reflections $s_1=(1\ 2)$, $s_2=(2\ 3)$, $s_3=(3\ 4)$, so that $\ell$ is the inversion number ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4), [[def-finite-symmetric-group-and-permutation-notation]], [[def-inversions-inversion-number-and-sign]]); write permutations in one-line notation and use the reduced expression $w_0=s_1s_2s_3s_1s_2s_1$ of the longest element $w_0=4321$.

**(i)** The element $u:=s_1s_3=2143$ satisfies $u\le w_0$: the subword at the positions $1,3$ of $s_1s_2s_3s_1s_2s_1$ is $s_1s_3$, a reduced expression of $u$ ([[thm-cg-bruhat-subword-characterization]] (1)).

**(ii)** The $2^6=64$ subwords of $s_1s_2s_3s_1s_2s_1$ realize exactly $24=4!$ distinct elements, namely all of $S_4=[1,w_0]$. For example the position sets $\{1\}$, $\{3\}$, $\{1,3\}$, $\{2,3\}$, $\{1,2,3\}$, $\{1,2,3,5\}$ and $\{1,2,3,4,5,6\}$ realize $s_1=2134$, $s_3=1243$, $s_1s_3=2143$, $s_2s_3=1342$, $s_1s_2s_3=2341$, $s_1s_2s_3s_2=2431$ and $w_0=4321$; and the element $s_1=2134$ alone arises from the position sets $\{1\}$, $\{4\}$, $\{6\}$, $\{1,2,5\}$, $\{1,4,6\}$ and $\{2,5,6\}$, so different subwords of one reduced expression may realize the same element.

**(iii)** Reflection deletions. Deleting the $i$-th letter of $s_1s_2s_3s_1s_2s_1$ realizes the following elements: $4312$, $4231$ and $3421$ of length $5$ for $i=1,4,6$; $4123$ and $2341$ of length $3$ for $i=2,5$; and $1324$ of length $1$ for $i=3$. By [[thm-cg-bruhat-lifting-and-cover-criterion]] (3) each of these equals $w_0t_i$ for the reflection $t_i$ conjugated to the letter at position $i$, and each lies strictly below $w_0$; exactly the first three are covers of $w_0$ (their remaining words are reduced of length $5=\ell(w_0)-1$), while the other three deletion words are not reduced and realize much shorter elements. Consistently the covers of $w_0$ are precisely the three elements of length $5$ in $S_4$ ([[thm-cg-bruhat-lifting-and-cover-criterion]] (2)), and no element of length $<5$ can be covered by $w_0$.

## Facts & Assumptions

**Given:** $W=S_4$ with generators $s_1,s_2,s_3$, the isomorphism with the symmetric group of type $A_3$, the reduced expression $w_0=s_1s_2s_3s_1s_2s_1$ of $w_0=4321$, and the elements listed in the statement.

[F1] For type $A_{n-1}$ with $S=\{s_1,\dots,s_{n-1}\}$, the assignment $s_i\mapsto(i\ i+1)$ extends to an isomorphism $W\to S_n$ and $\ell(w)=\operatorname{inv}(\varphi(w))$; in particular a word in the $s_i$ is reduced if and only if its length equals the inversion number of its value. ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4))

[F2] One-line notation lists the values of a permutation in order of the arguments, and the composition convention is $(\sigma\tau)(i)=\sigma(\tau(i))$; hence right multiplication by $s_i=(i\ i+1)$ swaps the entries in positions $i$ and $i+1$ of the one-line form. ([[def-finite-symmetric-group-and-permutation-notation]])

[F3] The inversion number of $\sigma$ is $\operatorname{inv}(\sigma)=|\{(i,j):i<j,\ \sigma(i)>\sigma(j)\}|$. ([[def-inversions-inversion-number-and-sign]])

[F4] Subword criterion: for a reduced expression $v=s_1\cdots s_q$ and $x\in W$, one has $x\le v$ if and only if there are $1\le i_1<\cdots<i_k\le q$ with $x=s_{i_1}\cdots s_{i_k}$, and the indices may be chosen with $k=\ell(x)$. ([[thm-cg-bruhat-subword-characterization]] (1))

[F5] Cover criterion and reflection deletion: $x$ is covered by $y$ if and only if $x<y$ and $\ell(y)=\ell(x)+1$; and for a reduced expression $y=r_1\cdots r_q$ and each $i$, the deletion $y_i=r_1\cdots\widehat{r_i}\cdots r_q$ equals $y\,\tau_i$ for the reflection $\tau_i=(r_q\cdots r_{i+1})r_i(r_{i+1}\cdots r_q)\in T$, satisfies $y_i<y$, and is covered by $y$ if and only if its word is reduced. ([[thm-cg-bruhat-lifting-and-cover-criterion]] (2), (3))

[F6] Intervals: $[x,z]=\{y:x\le y\le z\}$ is finite, every maximal chain in it has exactly $\ell(z)-\ell(x)$ strict steps, and $1\le z$ for every $z$. ([[lem-cg-bruhat-chain-refinement-and-gradedness]] (1), (3), [[def-cg-bruhat-order-by-reflection-chains]] (2))

[F7] Strict comparisons satisfy $\ell(x)<\ell(y)$ when $x<y$, and distinct elements of equal length are incomparable: if $x\le y$ and $\ell(x)=\ell(y)$, then $x=y$. ([[def-cg-bruhat-order-by-reflection-chains]] (2))

## Verification

1.1 Multiplying $s_1s_2s_3s_1s_2s_1$ by the position-swapping rule [F2] gives $4321$, whose six pairs are all inversions; thus the word is reduced of length $6$ by [F1] and [F3]. For (i), the word $s_1s_3$ is a subword of $s_1s_2s_3s_1s_2s_1$ at positions $1,3$, and it is reduced because $s_1$ and $s_3$ act on disjoint pairs of positions, so its value $s_1s_3$ has one-line form $2143$ and inversion number $2$, equal to its length of $2$ by [F1] and [F2]. The subword criterion [F4] applied to $x=u$ and $v=w_0$ gives $u\le w_0$, which is (i). [F1, F2, F3, F4]

1.2 For (ii), first note that $S_4=[1,w_0]$: $S_4$ has $24$ elements and is finite, the Bruhat order on it is directed ([[thm-cg-bruhat-lifting-and-cover-criterion]] (4)), so finitely many pairwise upper bounds combine to a greatest element $z$ with $1\le x\le z$ for every $x\in S_4$; by the strict length increase of [F7] the element $z$ must have maximal length, and the maximum of $\operatorname{inv}$ on $S_4$ is $6$, attained only by the reverse permutation $4321=w_0$; hence $z=w_0$ and every element of $S_4$ satisfies $x\le w_0$, while conversely $x\le w_0$ means $x\in S_4$. [F1, F3, F6, F7]

1.3 For (iii), multiplying out each deletion and reading the inversion numbers with [F1], [F2] and [F3]: deletion of position $1$, $4$ or $6$ gives $4312$, $4231$ or $3421$, each of length $5$; deletion of position $2$ or $5$ gives $4123$ or $2341$, each of length $3$; and deletion of position $3$ gives $1324$ of length $1$. By [F5] each value equals $w_0\tau_i$ for the reflection $\tau_i$ conjugated to the letter at position $i$, and each is strictly below $w_0$. Since $\ell(w_0)=6$, the cover criterion [F5] says a deletion value is covered by $w_0$ exactly when its length is $5$: this holds for $i=1,4,6$ (the deletion words of length $5$ are reduced, since their length equals the inversion number of their value) and fails for $i=2,5,3$, where the deletion words of length $5$ are not reduced. Finally, the elements of $S_4$ of length $5$ are exactly $4312$, $4231$ and $3421$: a permutation has inversion number $5$ if and only if exactly one of the six pairs $i<j$ satisfies $\sigma(i)<\sigma(j)$, and the enumeration of the $24$ permutations confirms that this holds only for those three; hence the covers of $w_0$ are precisely the three elements of length $5$, and no element of length $<5$ can be covered by $w_0$ by [F5]. [F1, F2, F3, F5]

2.1 For (ii), every element of $S_4$ lies below $w_0$ by step 1.2 and therefore occurs as a subword value by [F4]; conversely every subword value belongs to $S_4$. Thus the $64$ position subsets realize exactly $S_4=[1,w_0]$, a set of $24$ elements. By the position-swapping rule [F2], the seven listed position sets evaluate respectively to $2134$, $1243$, $2143$, $1342$, $2341$, $2431$ and $4321$. Evaluating all $64$ subsets also gives exactly the six listed position sets for $2134$: the singletons $\{1\}$, $\{4\}$ and $\{6\}$ carry $s_1$, and $\{1,2,5\}$, $\{1,4,6\}$ and $\{2,5,6\}$ evaluate to $s_1s_2s_2=s_1$, $s_1^3=s_1$ and $s_2s_2s_1=s_1$, respectively. [F2, F4, step 1.2]

3.1 Collecting: (i) is a direct instance of the subword criterion; (ii) shows that the $64$ subwords of one fixed reduced expression of $w_0$ realize exactly the $24$ elements of $S_4=[1,w_0]$, so subwords of one expression may repeat values, and the element $s_1$ arises from six different position sets; (iii) shows that the single-letter deletions of a reduced expression of $w_0$ realize three covers and three shorter elements, realizing the general cover criterion and reflection-deletion statements. All computations are finite and use no choice principle. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 1.2, step 2.1, step 1.3] ∎
