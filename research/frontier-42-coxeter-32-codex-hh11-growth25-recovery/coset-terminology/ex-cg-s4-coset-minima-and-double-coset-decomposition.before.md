---
id: ex-cg-s4-coset-minima-and-double-coset-decomposition
kind: example
title: "Left and right coset minima and a double coset decomposition in S4"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [def-cg-parabolic-quotient-and-two-sided-minima,
       thm-cg-parabolic-intersections-and-coset-factorization,
       thm-cg-double-coset-unique-minimum-and-normal-form,
       lem-cg-double-coset-intersection-parabolic,
       def-hh-coxeter-matrix-word-group-and-length,
       thm-hh-parabolic-minimal-representatives-and-length-additivity]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
    - title: "Sara Billey, Matjaz Konvalinka, T. Kyle Petersen, William Slofstra and Bridget Tenner, Parabolic double cosets in Coxeter groups (arXiv:1612.00736v2)"
      url: "https://arxiv.org/pdf/1612.00736v2"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised arXiv edition of the CRM monograph, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154v2"
---

## Example

Let $W=S_4$ with simple reflections $s_1=(1\,2)$, $s_2=(2\,3)$, $s_3=(3\,4)$,
so that $m(s_i,s_j)=3$ if $|i-j|=1$ and $=2$ if $|i-j|=2$
([[def-hh-coxeter-matrix-word-group-and-length]]). Write permutations in
one-line notation, so that $s_1=2134$, $s_2=1324$, $s_3=1243$, and $\ell(w)$ is
the inversion number
([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4)). Fix
$I=\{s_1,s_2\}$, $J=\{s_2,s_3\}$ and, for $K\subseteq I$, let
$W_I^K=\{u\in W_I:\ell(us)>\ell(u)\ \text{for all }s\in K\}$.

**(i) The parabolics.** $W_I=\{w:w(4)=4\}=\{1234,1324,2134,2314,3124,3214\}$
and $W_J=\{w:w(1)=1\}=\{1234,1243,1324,1342,1423,1432\}$, both of order $6$, and
$W_I\cap W_J=W_{I\cap J}=W_{\{s_2\}}=\{1234,1324\}$
([[thm-cg-parabolic-intersections-and-coset-factorization]] (1)).

**(ii) The quotients.**
$W^J=\{w:\ell(ws_i)>\ell(w)\ (i=2,3)\}=\{1234,2134,3124,4123\}$,
${}^IW=\{w:\ell(s_iw)>\ell(w)\ (i=1,2)\}=\{1234,1243,1423,4123\}$, and
${}^IW^J=\{1234,4123\}$; hence $S_4$ is the disjoint union of exactly two double
cosets $W_IwW_J$
([[thm-cg-double-coset-unique-minimum-and-normal-form]] (1)).

**(iii) The two double cosets.** The double coset $W_I\,1234\,W_J$ has $18$
elements, minimum $d=1234$ (length $0$) and $K=\{s_2\}$ with
$W_I^K=\{1234,2134,3124\}$; the double coset $W_I\,4123\,W_J$ has $6$ elements,
minimum $d=4123$ (length $3$) and $K=\{s_1,s_2\}$ with $W_I^K=\{1234\}$. In both
cases $|W_IwW_J|=|W_I^K|\cdot|W_J|$, and $18=6\cdot6/2$, $6=6\cdot6/6$ in
agreement with
[[thm-cg-double-coset-unique-minimum-and-normal-form]] (2),(3).

**(iv) Coset minima and a normal form of a single element.** For $w=2143$ (so
$\ell(w)=2$): the element of minimum length in $W_Iw$ is $1243$ (of length $1$),
the element of minimum length in $wW_J$ is $2134$ (of length $1$), and the
double coset $W_IwW_J$ has minimum $d=1234$ and normal form

$$2143=2134\cdot 1234\cdot 1243,\qquad \ell(2134)+\ell(1234)+\ell(1243)=1+0+1=2=\ell(2143),$$

with $2134\in W_I^K$ for $K=\{s_2\}$ and $1243\in W_J$
([[thm-cg-double-coset-unique-minimum-and-normal-form]] (2)).

**(v) A second pair of parabolics.** For $I=\{s_1\}$ and $J=\{s_3\}$ one has
${}^IW^J=\{1234,1324,1423,3124,3412,4123,4312\}$ ($7$ elements), the seven
double cosets have sizes $4,4,4,4,4,2,2$ and minima
$1234,1324,1423,3124,4123,3412,4312$ respectively, and the associated sets are
$K=\emptyset$ for the first five minima and $K=\{s_1\}$ for $d=3412$ and
$d=4312$ (so $W_I^K=\{1,s_1\}$ or $W_I^K=\{1\}$ respectively); for instance

$$W_I\,3412\,W_J=\{3412,3421\},\qquad W_I\,4123\,W_J=\{4123,4132,4213,4231\}.$$

This exhibits a case where $K$ varies with $d$ and $|W_IwW_J|$ is not constant.

## Facts & Assumptions

**Given:** the Coxeter group $W$ of type $A_3$ with $S=\{s_1,s_2,s_3\}$,
identified with $S_4$ by $s_i\mapsto(i\ i+1)$ and one-line notation for
permutations, the subsets $I=\{s_1,s_2\}$, $J=\{s_2,s_3\}$, and the sets
$W_I^K$, ${}^IW^J$ of the statement.

[F1] The assignment $s_i\mapsto(i\ i+1)$ extends to an isomorphism $W\to S_4$ with $\ell(w)=\operatorname{inv}(\varphi(w))$; for $J\subseteq S$ one has $W_J=\{w\in W:S(w)\subseteq J\}$ and $W_J\cap S=J$, and $(W_J,J)$ is a Coxeter system whose group is the type-$A$ Coxeter group on $J$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]]).

[F2] $W_I=\{w:S(w)\subseteq I\}$ for a standard parabolic, $W^J=\{w:\ell(ws)>\ell(w)\text{ for all }s\in J\}$, ${}^IW=\{w:\ell(sw)>\ell(w)\text{ for all }s\in I\}$ and ${}^IW^J={}^IW\cap W^J$ ([[def-cg-parabolic-quotient-and-two-sided-minima]]).

[F3] $W_I\cap W_J=W_{I\cap J}$ ([[thm-cg-parabolic-intersections-and-coset-factorization]]).

[F4] Every double coset $W_IwW_J$ contains exactly one element of ${}^IW^J$, its unique minimum; if $d$ is that element and $K=I\cap dJd^{-1}$, then every $x\in W_IdW_J$ has a unique representation $x=udv$ with $u\in W_I^K$, $v\in W_J$ and $\ell(x)=\ell(u)+\ell(d)+\ell(v)$, and $|W_IdW_J|=|W_I^K|\cdot|W_J|$, which for finite $W_I$ equals $|W_I||W_J|/|W_K|$ ([[thm-cg-double-coset-unique-minimum-and-normal-form]]).

[F5] For $d\in{}^IW^J$ the subset $K=\{s\in I:d^{-1}sd\in J\}$ satisfies $W_I\cap dW_Jd^{-1}=W_K$ ([[lem-cg-double-coset-intersection-parabolic]]).

[F6] For every $d\in W^I$ and $u\in W_I$ one has $\ell(du)=\ell(d)+\ell(u)$; dually $\ell(ud)=\ell(u)+\ell(d)$ for $d\in{}^IW$ and $u\in W_I$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]]).

## Verification

**Proof technique:** direct finite computations in $S_4$, with the coset and double coset theory of the listed suppliers.

1.1 *The two parabolics and their intersection.* By [F1] the group $W_I=\langle s_1,s_2\rangle$ is the type-$A_2$ Coxeter group, of order $6$, consisting of the permutations of $\{1,2,3\}$ extended by $4\mapsto4$, i.e. the permutations with $w(4)=4$: the six elements are $1234$, $s_1=2134$, $s_2=1324$, $s_1s_2=2314$, $s_2s_1=3124$ and $s_1s_2s_1=s_2s_1s_2=3214$. Likewise $W_J=\langle s_2,s_3\rangle$ consists of the permutations with $w(1)=1$: $1234$, $s_3=1243$, $s_2=1324$, $s_2s_3=1342$, $s_3s_2=1423$ and $s_2s_3s_2=1432$. Their intersection is $\{1234,1324\}=W_{\{s_2\}}=W_{I\cap J}$ by [F3]. [F1, F2, F3]

1.2 *The quotients and the two double cosets.* Right multiplication by $s_i$ swaps the entries of the one-line form in positions $i$ and $i+1$, so it changes the inversion number by $\pm1$, and decreases it exactly when those two entries are in decreasing order, that is when $w(i)>w(i+1)$; by [F1] the same holds for $\ell$. Left multiplication by $s_i$ swaps the values $i$ and $i+1$ wherever they occur, so it decreases the inversion number exactly when the value $i$ occurs after the value $i+1$, that is when $w^{-1}(i)>w^{-1}(i+1)$. Hence $w\in W^J$ iff $w(2)<w(3)$ and $w(3)<w(4)$, which for the $24$ permutations gives $W^J=\{1234,2134,3124,4123\}$, and $w\in{}^IW$ iff $w^{-1}(1)<w^{-1}(2)$ and $w^{-1}(2)<w^{-1}(3)$, which gives ${}^IW=\{1234,1243,1423,4123\}$. Intersecting, ${}^IW^J=\{1234,4123\}$. By [F4] each double coset contains exactly one element of ${}^IW^J$, so the two double cosets $W_I\,1234\,W_J$ and $W_I\,4123\,W_J$ are distinct and their union is all of $S_4$. [F1, F2, F4]

1.3 *The second pair of parabolics.* Now $I=\{s_1\}$, $J=\{s_3\}$, so $W_I=\{1234,2134\}$ and $W_J=\{1234,1243\}$. An element lies in ${}^IW$ iff $w^{-1}(1)<w^{-1}(2)$ (the value $1$ occurs before the value $2$), and in $W^J$ iff $w(3)<w(4)$; listing the $24$ permutations gives ${}^IW^J=\{1234,1324,1423,3124,3412,4123,4312\}$, seven elements, hence seven double cosets by [F4]. Computing each double coset $W_IdW_J$ by multiplying the two generators on the left and right gives sizes $4,4,4,4,4,2,2$ for the minima $1234,1324,1423,3124,4123,3412,4312$; for the last two minima $d=3412$ and $d=4312$ one computes $d^{-1}s_1d=s_3$ in both cases, so $K=\{s_1\}$ and $W_I^K=\{1\}$ there, while for the first five minima $d^{-1}s_1d\notin\{s_3\}$, so $K=\emptyset$ and $W_I^K=\{1,s_1\}$; the sizes agree with $|W_I^K|\cdot|W_J|=4$ and $2$. Explicitly, $W_I\,3412\,W_J=\{3412,3421\}$ and $W_I\,4123\,W_J=\{4123,4132,4213,4231\}$. [F1, F2, F4, F5, algebra]

2.1 *The two double cosets of part (iii).* For the pair $I=\{s_1,s_2\}$, $J=\{s_2,s_3\}$, listing the products $udv$ with $u\in W_I$, $v\in W_J$ gives $W_I\,1234\,W_J$ of order $18$ and $W_I\,4123\,W_J$ of order $6$, with $18+6=24$; by step 1.2 these two sets cover $S_4$ and are disjoint, and by [F4] their minima are $1234$ and $4123$. For $d=1234$ one has $d^{-1}s_id=s_i$, so $K=\{s_1,s_2\}\cap\{s_2,s_3\}=\{s_2\}$, and the right-descent test $\ell(us_2)>\ell(u)$ selects $W_I^K=\{1234,2134,3124\}$ from $W_I$; for $d=4123$ one computes $d^{-1}s_1d=s_2$ and $d^{-1}s_2d=s_3$, both of which lie in $J$, so $K=\{s_1,s_2\}$ and $W_I^K=\{1234\}$. The sizes match $|W_I^K|\cdot|W_J|=3\cdot6=18$ and $1\cdot6=6$, and the finite formula gives $18=6\cdot6/2$ and $6=6\cdot6/6$, since $|W_K|=|\{1,s_2\}|=2$ and $|W_K|=|W_I|=6$ respectively. [F1, F4, F5, step 1.1, step 1.2, algebra]

3.1 *Coset minima and the normal form of $2143$.* Let $w=2143$, of length $2$ by [F1]. Multiplying the six elements of $W_I$ into $w$ gives $W_Iw=\{1243,1342,2143,2341,3142,3241\}$, whose element of least length is $1243=s_3$, of length $1$, and this is the unique element of ${}^IW$ in the left coset by step 1.2; multiplying the six elements of $W_J$ on the right gives $wW_J=\{2134,2143,2314,2341,2413,2431\}$, whose element of least length is $2134=s_1$, of length $1$, the unique element of $W^J$ in the right coset by step 1.2. Since $2143=2134\cdot1243$ and $2134\in W_I$, $1243\in W_J$, the element $2143$ lies in the double coset of $d=1234$, whose minimum is $1234$ by step 2.1; the representation in the normal form of [F4] for $K=\{s_2\}$ is $2143=2134\cdot1234\cdot1243$, with $2134\in W_I^K=\{1234,2134,3124\}$ by step 2.1 and $1243\in W_J$, and the lengths add: $\ell(2134)+\ell(1234)+\ell(1243)=1+0+1=2=\ell(2143)$, in agreement with [F4] and [F6]. This completes the example. [F1, F4, F6, step 1.1, step 1.2, step 2.1] ∎

## Remarks

- The example shows that both transversals are needed to reach the minimum of a
  double coset: for $w=2143$ the left minimum $1243$ and the right minimum
  $2134$ are different elements, and the double coset minimum $1234$ is neither
  of them.
- In part (v) the set $K$ is not determined by the pair $(I,J)$ alone: it
  depends on the minimum $d$, which is why
  [[lem-cg-double-coset-intersection-parabolic]] recomputes it for each double
  coset.
