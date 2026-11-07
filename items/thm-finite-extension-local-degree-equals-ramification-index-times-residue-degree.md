---
id: thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
kind: theorem
title: "Local degree equals ramification index times residue degree"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-extension-degree-and-finite-extension
  - def-field-norm-and-trace
  - def-normed-vector-space-over-an-absolutely-valued-field
  - thm-local-valuation-ring-compact-open
  - thm-finite-products-of-compact-spaces
  - lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring
  - lem-choice-free-norm-equivalence-over-finite-residue-local-field
  - thm-determinant-multiplicative
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Brian Conrad, Some basics concerning absolute values, section 6, Theorem 6.4, pp. 11–12; local uniqueness uses choice-free norm equivalence"
      url: "https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Theorem 7.38 and Corollary 7.42"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I, Fall 2021, Lecture 10, Theorem 10.4"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification: {}
---

## Statement

Let $K$ be a nonarchimedean local field
with residue field $k_K$ of cardinality $q$, and let $L/K$ be any finite field
extension of degree $n=[L:K]$, not necessarily separable. Extend the normalized
absolute value of $K$ uniquely to $L$, and set
$w_L(x)=-\log_q|x|_L$ for $x\in L^\times$. Let
$\Gamma_L=w_L(L^\times)$, $e=[\Gamma_L:\mathbb Z]$,
$\mathcal O_L=\{x:|x|_L\le1\}$,
$\mathfrak m_L=\{x:|x|_L<1\}$, $k_L=\mathcal O_L/\mathfrak m_L$, and
$f=\dim_{k_K} k_L$. Then $e$ and $f$ are finite positive integers and
$$[L:K]=ef.$$

## Statement references

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Theorem 7.38 and Corollary 7.42](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Andrew V. Sutherland, MIT 18.785, Fall 2021, Lecture 10, Theorem 10.4](https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf)

## Facts & Assumptions

**Given:** A complete nonarchimedean discretely valued field
$K$ with finite residue field $k_K$, and a finite extension $L/K$.

[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: The
valuation ring $\mathcal O_K$ is a discrete valuation ring with uniformizer
$\pi_K$, and $K$ is complete for its normalized nonarchimedean absolute value.

[F2] [[lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring]]:
A monic irreducible polynomial over a complete nonarchimedean field whose
constant term has absolute value at most one has all coefficients in the
valuation ring. Its Hensel proof uses only finite initial lifts and
deterministic coefficient recursion.

[F3] [[thm-local-valuation-ring-compact-open]] and
[[thm-finite-products-of-compact-spaces]]: The valuation ring of $K$ is
compact open, and each finite product of compact spaces is compact. Both
interfaces hold without an additional choice axiom.

[F4] [[def-normed-vector-space-over-an-absolutely-valued-field]]: A norm on a
$K$-vector space satisfies $\|ax\|=|a|_K\|x\|$ and the triangle inequality.

[F5] [[def-extension-degree-and-finite-extension]]: For a finite field
extension, $[L:K]$ is the dimension of $L$ as a $K$-vector space.

[F6] [[def-field-norm-and-trace]]: For a finite extension $L/K$, the field
norm $N_{L/K}(x)$ is the determinant of the $K$-linear map $y\mapsto xy$ on
$L$.

[F7] [[lem-choice-free-norm-equivalence-over-finite-residue-local-field]]:
Every norm on a finite-dimensional vector space over $K$ is equivalent to
the coordinate maximum norm and makes the space complete, in ZF.

[F8] [[thm-determinant-multiplicative]]: Determinants of finite square
matrices satisfy $\det(AB)=\det(A)\det(B)$.

## Proof

**Given:** The data in the Statement.

1.1 Put $n=[L:K]$ and $u(x)=|N_{L/K}(x)|_K^{1/n}$. By [F6], the norm is the determinant of multiplication by $x$. Multiplication operators compose, so [F8] makes $u$ multiplicative. Multiplication by a nonzero element is invertible, while multiplication by $a\in K$ is scalar, so $u$ vanishes exactly at zero and restricts to $|\cdot|_K$. For $z\in L$, put $E=K(z)$, $m=[E:K]$, and $r=[L:E]$. If $h$ is the monic minimal polynomial of $z$, polynomial division gives the basis $1,z,\ldots,z^{m-1}$ of $E$. Choose an $E$-basis of $L$. In the resulting $K$-basis, multiplication by $z$ is a direct sum of $r$ companion matrices for $h$, so $n=mr$ and $N_{L/K}(z)=((-1)^m h(0))^r$. The same basis gives $N_{L/K}(1+z)=((-1)^m h(-1))^r$, by evaluating the characteristic polynomial of the companion matrix at $-1$. These finite matrix calculations apply also to inseparable extensions. [F5, F6, F8, given, choose, algebra]

2.1 If $u(z)\le1$, step 1.1 gives $|h(0)|_K\le1$. By [F2], all coefficients of $h$ have value at most one, hence $|h(-1)|_K\le1$ and $u(1+z)\le1$. For $y\ne0$ with $u(x)\le u(y)$, apply this to $z=x/y$ and use multiplicativity to get $u(x+y)\le u(y)$. Interchange $x,y$ when needed; the case $y=0$ is immediate. Thus $u$ is a nonarchimedean absolute value extending the base value, and hence a $K$-vector-space norm by [F4]. [F2, F4, step 1.1, algebra]

2.2 Put $n=[L:K]$, the vector-space dimension by [F5]. By [F6], $N_{L/K}(x)$ in step 1.1 is the determinant of multiplication by $x$. Thus $n w_L(x)=v_K(N_{L/K}(x))\in\mathbb Z$ for every $x\in L^\times$, while $w_L|_{K^\times}=v_K$ because the extended absolute value restricts to that of $K$ by step 1.1. Hence $\mathbb Z\subseteq\Gamma_L\subseteq\frac1n\mathbb Z$. Every subgroup of $\frac1n\mathbb Z$ containing $\mathbb Z$ is $\frac1e\mathbb Z$ for a unique positive divisor $e$ of $n$: after multiplication by $n$ it is a subgroup of $\mathbb Z$ containing $n\mathbb Z$. Thus $e=[\Gamma_L:\mathbb Z]$ is finite. [F5, F6, step 1.1, given, algebra]

2.3 Choose a $K$-basis $b_1,\ldots,b_n$ of $L$, whose length is $n$ by [F5], and put $\Lambda=\sum_i\mathcal O_Kb_i$. The coordinate sphere $S=\{(a_i)\in\mathcal O_K^n:\max_i|a_i|_K=1\}$ is closed in a compact finite product by [F3], hence compact. The determinant defining $N_{L/K}(\sum_i a_ib_i)$ is a continuous polynomial in the coordinates, nonzero on $S$. Thus step 1.1 gives positive lower and finite upper bounds $c,C$ for $|\sum_i a_ib_i|_L$ there. Every nonzero coordinate vector can be rescaled by a power of $\pi_K$ to lie in $S$; scalar homogeneity then gives $c\max_i|a_i|_K\le|\sum_i a_ib_i|_L\le C\max_i|a_i|_K$. Choose an integer $r\ge0$ with $C|\pi_K|_K^r\le1$ and $|\pi_K|_K^{-r}\ge c^{-1}$. Hence $\pi_K^r\Lambda\subseteq\mathcal O_L\subseteq\pi_K^{-r}\Lambda$. This uses one finite basis and compactness, with no sequence of arbitrary choices. [F1, F3, F4, F5, F6, step 1.1, given, choose]

3.1 By [F7], this norm makes $L$ complete. Any other extending absolute value is also a $K$-vector-space norm, so [F7] gives constants $c,C>0$ with $c u(x)\le u'(x)\le C u(x)$. Apply the inequalities to $x^j$ and take $j$th roots for positive integers $j$. Multiplicativity and $c^{1/j},C^{1/j}\to1$ give $u'(x)=u(x)$; zero is immediate. Thus the unique extension in the Statement exists, is complete, and equals the field-norm formula. This proof uses finite bases and the choice-free norm-equivalence lemma, without Countable Choice. [F7, step 1.1, step 2.1, algebra]

3.2 Normalize $v_L=e w_L$, so $v_L(L^\times)=\mathbb Z$ and $v_L(\pi_K)=e$. Choose $\pi_L\in L$ with $v_L(\pi_L)=1$; then $\pi_K/\pi_L^e$ is a unit of $\mathcal O_L$. [F1, step 2.2, choose, algebra]

3.3 The set $\mathcal O_L$ is an $\mathcal O_K$-submodule of $\pi_K^{-r}\Lambda$, since multiplying an element of absolute value at most one by an element of $\mathcal O_K$ preserves that bound. Every submodule of a finite-rank free module over the discrete valuation ring $\mathcal O_K$ is finite free: induct on the rank, project to the first coordinate ideal, choose a generator and a preimage when that ideal is nonzero, split off the resulting free rank-one summand, and apply the induction hypothesis to the kernel; when the image is zero apply induction directly. Since $\mathcal O_L$ contains $\pi_K^r\Lambda$, its $K$-span is all of $L$, so its free rank is $n$. [F1, step 2.3, construct, algebra]

4.1 The quotient $\mathcal O_L/\pi_K\mathcal O_L$ is therefore an $n$-dimensional vector space over $k_K$. Because $\pi_K\mathcal O_L=\pi_L^e\mathcal O_L$, the filtration by the ideals $\pi_L^i\mathcal O_L$ for $0\le i\le e$ has $e$ successive quotients, each isomorphic to $k_L$ via multiplication by $\pi_L^i$. The quotient map onto $\mathcal O_L/\pi_L\mathcal O_L=k_L$ also shows $k_L$ is finite-dimensional over $k_K$; writing its dimension as $f$, the filtered quotient has dimension $ef$. [step 3.2, step 3.3, algebra]

5.1 The same quotient has dimension $n$ by step 3.3 and [F5]. Hence $n=ef$, and the definitions in the Statement give the ramification index and residue degree with the asserted finite values. [F5, step 2.2, step 3.3, step 4.1, given, algebra] ∎
