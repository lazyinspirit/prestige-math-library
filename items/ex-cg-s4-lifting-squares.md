---
id: ex-cg-s4-lifting-squares
kind: example
title: "The four lifting squares in S4"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps: [thm-cg-bruhat-lifting-and-cover-criterion, thm-cg-bruhat-subword-characterization, def-cg-bruhat-order-by-reflection-chains, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-finite-symmetric-group-and-permutation-notation, def-inversions-inversion-number-and-sign, def-group]
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
      locator: "Section 2.2, printed p. 35: Proposition 2.2.7 (Lifting Property) and Figure 2.6 (the lifting square) for the shape of the four cases"
    - title: "Carl Marberg, MATH 6150F Coxeter systems and Iwahori-Hecke algebras, Lecture 11: More about Bruhat order (HKUST, Spring 2017)"
      url: "https://www.math.hkust.edu.hk/~emarberg/teaching/2017/Math6150F/lectures/11_Math6150F_Spring2017.pdf"
      locator: "Lecture 11, printed p. 1: the lifting lemma '$us\\le v$ or $us\\le vs$', instantiated in the mixed cases"
    - title: "Tom Denton, Lifting property and poset structure of finite Coxeter groups (UC Davis MAT 280 lecture notes, 26 January 2009)"
      url: "https://www.math.ucdavis.edu/~anne/WQ2009/MAT280-Lecture9.pdf"
      locator: "Proposition 5 (printed pp. 1-2): the left-handed lifting statement, translated here to right multiplication"
---

## Example

In $W=S_4$ with simple reflections $s_i=(i\ i+1)$, one-line notation and $\ell$ the inversion number ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4)), the four cases of the lifting property ([[thm-cg-bruhat-lifting-and-cover-criterion]] (1)) occur as follows (products are right multiplication, $ws_i$ swapping the entries in positions $i$ and $i+1$).

**(a)** $u=1342$ ($\ell=2$), $v=4132$ ($\ell=4$), $s=s_1$: $us=3142$ ($\ell=3$) and $vs=1432$ ($\ell=3$); here $s$ is a descent of $v$ and an ascent of $u$, and indeed $us=3142\le v=4132$ and $u=1342\le vs=1432$, while $us\le vs$ fails: the two lifted elements are incomparable.

**(b)** $u=1342$, $v=4132$, $s=s_2$: $us=1432$ ($\ell=3$) and $vs=4312$ ($\ell=5$); here $s$ is an ascent of both, and $us=1432\le vs=4312$.

**(c)** $u=1342$ ($\ell=2$), $v=1432$ ($\ell=3$), $s=s_3$: $us=1324$ ($\ell=1$) and $vs=1423$ ($\ell=2$); here $s$ is a descent of both, and $us=1324\le vs=1423$, while $u\le vs$ fails.

**(d)** $u=1423$ ($\ell=2$), $v=4123$ ($\ell=3$), $s=s_2$: $us=1243$ ($\ell=1$) and $vs=4213$ ($\ell=4$); here $s$ is a descent of $u$ and an ascent of $v$, and $us=1243\le v=4123$, $u=1423\le vs=4213$.

In each case $u,v,us,vs$ are the four vertices of a Bruhat square whose sides are $u\le v$ together with $us\le vs$ or $us\le v$ or $u\le vs$ according to the case; cases (a) and (c) show that the extra comparisons $us\le vs$ and $u\le vs$, respectively, cannot be asserted in all four cases: in (a) the comparison $us\le vs$ is false and in (c) the comparison $u\le vs$ is false.

## Facts & Assumptions

**Given:** $W=S_4$ with generators $s_1,s_2,s_3$, the elements $u,v$ of the four cases, and the products $us$, $vs$ displayed in the statement.

[F1] For type $A_{n-1}$ with $S=\{s_1,\dots,s_{n-1}\}$, the assignment $s_i\mapsto(i\ i+1)$ extends to an isomorphism $W\to S_n$ and $\ell(w)=\operatorname{inv}(\varphi(w))$; in particular a word in the $s_i$ is reduced if and only if its length equals the inversion number of its value. ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4))

[F2] One-line notation lists the values of a permutation in order of the arguments, and the composition convention is $(\sigma\tau)(i)=\sigma(\tau(i))$; hence right multiplication by $s_i=(i\ i+1)$ swaps the entries in positions $i$ and $i+1$ of the one-line form. ([[def-finite-symmetric-group-and-permutation-notation]])

[F3] The inversion number of $\sigma$ is $\operatorname{inv}(\sigma)=|\{(i,j):i<j,\ \sigma(i)>\sigma(j)\}|$. ([[def-inversions-inversion-number-and-sign]])

[F4] Lifting property in all four cases: if $u\le v$ and $s\in S$, then (a) $\ell(vs)<\ell(v)$, $\ell(us)>\ell(u)$ give $us\le v$ and $u\le vs$; (b) $\ell(vs)>\ell(v)$, $\ell(us)>\ell(u)$ give $us\le vs$ and $u\le vs$; (c) $\ell(vs)<\ell(v)$, $\ell(us)<\ell(u)$ give $us\le vs$ and $us\le v$; (d) $\ell(vs)>\ell(v)$, $\ell(us)<\ell(u)$ give $us\le v$ and $u\le vs$. ([[thm-cg-bruhat-lifting-and-cover-criterion]] (1))

[F5] Subword criterion: for a reduced expression $v=s_1\cdots s_q$ and $x\in W$, one has $x\le v$ if and only if there are $1\le i_1<\cdots<i_k\le q$ with $x=s_{i_1}\cdots s_{i_k}$, and the indices may be chosen with $k=\ell(x)$. ([[thm-cg-bruhat-subword-characterization]] (1))

[F6] Distinct elements of equal length are incomparable: if $x\le y$ and $\ell(x)=\ell(y)$, then $x=y$. ([[def-cg-bruhat-order-by-reflection-chains]] (2))

## Verification

1.1 The displayed products are computed by [F2]: $1342\cdot s_1=3142$, $1342\cdot s_2=1432$, $1342\cdot s_3=1324$, $1423\cdot s_2=1243$, $4132\cdot s_1=1432$, $4132\cdot s_2=4312$, $1432\cdot s_3=1423$ and $4123\cdot s_2=4213$. Their inversion numbers, computed with [F3] and equal to the lengths by [F1], are: $\ell(1342)=2$, $\ell(1423)=2$, $\ell(4132)=4$, $\ell(1432)=3$, $\ell(4123)=3$, $\ell(3142)=3$, $\ell(1324)=1$, $\ell(1243)=1$, $\ell(4312)=5$ and $\ell(4213)=4$. [F1, F2, F3]

1.2 First certify $u\le v$ in each case: in (a) and (b), $1342=s_2s_3$ occurs at positions $1,2$ of $4132=s_2s_3s_2s_1$; in (c), it occurs at positions $1,2$ of $1432=s_2s_3s_2$; and in (d), $1423=s_3s_2$ occurs at positions $1,2$ of $4123=s_3s_2s_1$. Each ambient word has length equal to the inversion number of its value, so [F1] and [F5] prove these initial comparisons. The comparisons required by the four cases — $us\le v$ and $u\le vs$ in (a), $us\le vs$ and $u\le vs$ in (b), $us\le vs$ and $us\le v$ in (c), and $us\le v$ and $u\le vs$ in (d) — are certified by subword witnesses in the displayed reduced words, each verified by multiplying out the indicated letters: $3142=s_2s_3s_1$ is the subword at positions $1,2,4$ of $4132=s_2s_3s_2s_1$; $1342=s_2s_3$ is the subword at positions $1,2$ of $1432=s_2s_3s_2$ and at positions $1,3$ of $4312=s_2s_1s_3s_2s_1$; $1432=s_2s_3s_2$ is the subword at positions $1,3,4$ of $4312=s_2s_1s_3s_2s_1$; $1324=s_2$ is the subword at position $1$ of $1432=s_2s_3s_2$ and at position $2$ of $1423=s_3s_2$; $1243=s_3$ is the subword at position $1$ of $4123=s_3s_2s_1$; and $1423=s_3s_2$ is the subword at positions $2,3$ of $4213=s_1s_3s_2s_1$. Each listed ambient word is reduced, since its value has inversion number equal to its length by [F1]; hence the subword criterion [F5] applies and gives the stated comparisons. [F1, F2, F5]

2.1 The two negative comparisons follow from length alone: in case (a) the elements $us=3142$ and $vs=1432$ both have length $3$ and are distinct, so they are incomparable by [F6], and in particular $us\le vs$ fails; in case (c) the elements $u=1342$ and $vs=1423$ both have length $2$ and are distinct, so they are incomparable by [F6], and in particular $u\le vs$ fails. The equalities of the displayed lengths with the inversion numbers were computed in step 1.1. [F1, F3, F6, step 1.1]

2.2 The descent and ascent patterns are read off the lengths computed in step 1.1: in (a) $\ell(vs)=3<4=\ell(v)$ and $\ell(us)=3>2=\ell(u)$; in (b) $\ell(vs)=5>4$ and $\ell(us)=3>2$; in (c) $\ell(vs)=2<3$ and $\ell(us)=1<2$; and in (d) $\ell(vs)=4>3$ and $\ell(us)=1<2$. [F1, step 1.1]

3.1 Each of the four cases of [F4] is therefore instantiated: case (a) by the pair $u=1342\le v=4132$ with $s=s_1$, where step 1.2 gives $us\le v$ and $u\le vs$ and step 2.1 shows the companion comparison $us\le vs$ fails; case (b) by the same pair with $s=s_2$, where $s$ is an ascent of both and step 1.2 gives $us\le vs$ and $u\le vs$; case (c) by $u=1342\le v=1432$ with $s=s_3$, where $s$ is a descent of both, step 1.2 gives $us\le vs$, $us\le v$ and step 2.1 shows $u\le vs$ fails; and case (d) by $u=1423\le v=4123$ with $s=s_2$, where step 1.2 gives $us\le v$ and $u\le vs$. In each case the four elements $u,v,us,vs$ form the lifting square of the theorem with the sides listed in the statement, and cases (a) and (c) show that the two extra comparisons cannot be asserted uniformly. All computations are finite enumerations in $S_4$ and use no choice principle. [F4, step 1.2, step 2.1, step 2.2] ∎
