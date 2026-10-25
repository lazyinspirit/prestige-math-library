---
id: lem-finite-serre-word-form-and-classical-rank-bound
kind: lemma
title: Finite Serre word forms descend and have classical PBW rank bounds
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-drinfeld-jimbo-quantized-enveloping-algebra
  - def-lusztig-divided-power-integral-form
  - def-quantum-integers-factorials-and-divided-powers-at-q-i
  - lem-quantum-pascal-recurrence-and-gaussian-integrality
  - lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double
  - lem-pbw-for-countably-presented-kac-moody-lie-algebras
  - thm-serre-presentation-of-a-kac-moody-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Olivier Schiffmann, Lectures on Hall Algebras
      url: https://arxiv.org/pdf/math/0611617v2
      locator: Sections 1.4–1.6, primitive simple classes, twisted tensor multiplication, and Green adjunction; the finite rank and algebraic descent arguments are supplied here.
---

## Statement

Work in ZF. Let $I$ be finite and nonempty and $a=(a_{ij})$ a symmetric generalized Cartan matrix. Also allow $I=\varnothing$ by taking each half to be the coefficient field and its integral subalgebra to be $A$. Set $A=\mathbb Z[t,t^{-1}]$, $k=\mathbb Q(t)$ and $S=k\langle f_i:i\in I\rangle/(s_{ij}:i\ne j)$, where, for $m=1-a_{ij}$,
$$s_{ij}=\sum_{r=0}^{m}(-1)^r\binom mr_t f_i^{m-r}f_jf_i^r.$$
Identify $S$ with the actual negative Drinfeld–Jimbo half by the choice-free crossed-double lemma, and let $U_A^-$ be its actual divided-power subalgebra. There exists a unique homogeneous bilinear form $B_t$ with $B_t(1,1)=1$ and
$$B_t(f_i x,y)=B_t(x,D_i y),\qquad D_i(f_jy)=\delta_{ij}y+t^{-a_{ij}}f_jD_i(y),\qquad D_i(1)=0.$$
It is symmetric. For ordinary words $u=f_{i_1}\cdots f_{i_h}$ and $v=f_{j_1}\cdots f_{j_h}$ its value is
$$B_t(u,v)=\sum_{\pi:\,j_{\pi(b)}=i_b}t^{-\sum_{b<c,\,\pi(b)>\pi(c)}a_{i_b i_c}},$$
where the sum is over matching permutations. In particular ordinary-word values lie in $A$, and values on $U_A^-$ lie in the localization of $A$ obtained by inverting the symmetric quantum factorials.

For any $\alpha\in\mathbb N^I$, including $\alpha=0$, enumerate the finite set $W_\alpha$ of ordinary words of that degree, and let $G_\alpha(t)$ be their Gram matrix in the displayed formula. At every real $c>0$,
$$\operatorname{rank}_{\mathbb Q(c)}G_\alpha(c)\le\operatorname{rank}_{k}G_\alpha(t)\le\dim_k S[\alpha]\le p_\alpha,$$
where $p_\alpha$ is the classical PBW rank: the dimension of the classical Serre enveloping-algebra component. No nondegeneracy or freeness of the divided-power lattice is asserted or used.

## Facts & Assumptions

**Given:** The finite symmetric Cartan matrix, its generic Serre quotient, its actual divided-power subalgebra and the finite ordinary words in each root degree.

[F1] Quantum factorials are nonzero rational functions; the symmetric Gaussian coefficients are Laurent polynomials, satisfy $\binom mr_t[m-r]_t=\binom m{r+1}_t[r+1]_t$, and obey $\sum_{r=0}^m(-1)^r\binom mr_t t^{\pm(m-1)r}=0$ for $m\ge1$ ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]], [[lem-quantum-pascal-recurrence-and-gaussian-integrality]]). The cross identity is direct factorial cancellation. The positive-exponent alternating identity is the Gauss product at $z=-1$; substituting $t^{-1}$ and using $[n]_{t^{-1}}=[n]_t$ gives the negative-exponent identity.

[F2] The abstract separate Serre half embeds as the actual negative half, without any choice principle ([[lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double]]). Its divided-power subalgebra consists exactly of finite $A$-linear combinations of products of $f_i^n/[n]_t!$ ([[def-lusztig-divided-power-integral-form]]).

[F3] PBW for a supplied ordered finite or countable Lie basis is proved by terminating adjacent-inversion reduction and Jacobi. In a finite-word graded Lie presentation an ordered homogeneous basis can be obtained by retaining the first independent bracket words, without AC ([[lem-pbw-for-countably-presented-kac-moody-lie-algebras]]). The proof works over $\mathbb Q$ verbatim: its reductions use only field arithmetic and Jacobi.

[F4] For the classical complex Kac–Moody algebra, its negative half is the Lie algebra on the negative simple generators with exactly the separate negative Serre relations ([[thm-serre-presentation-of-a-kac-moody-algebra]]). Thus the classical PBW rank here means the same $\dim_{\mathbb C}U(\mathfrak n^-)[-\alpha]$ as in the existing generic-rank theorem.

## Proof

1.1 If $I=\varnothing$, only degree zero occurs; both forms and Gram matrices are $(1)$ and $p_0=1$, so every assertion holds directly. Otherwise supply an order on the finite set $I$. On the free algebra $T=k\langle f_i\rangle$ define $D_i$ by the stated recursion. For homogeneous $x,y$, direct induction on word length gives $D_i(xy)=D_i(x)y+t^{-(\alpha_i,\deg x)}xD_i(y)$, where $(\alpha_i,\alpha_j)=a_{ij}$. The recursion also gives $D_i(f_i^n)=t^{-(n-1)}[n]_t f_i^{n-1}$. These are finite sums, and $D_i$ lowers height by one. [given, F1, construct, algebra]

2.1 Every $D_\ell$ kills each Serre polynomial already in $T$. Put $a=a_{ij}$ and $m=1-a$. If $\ell\notin\{i,j\}$ this is immediate. For $\ell=j$, its value is $t^{-am}f_i^m\sum_r(-1)^r\binom mr_t t^{ar}=0$, since $a=-(m-1)$ and [F1] applies. For $\ell=i$, the coefficient of $f_i^{m-1-r}f_jf_i^r$, $0\le r<m$, is $(-1)^r t^{-(m-r-1)}\binom mr_t[m-r]_t+(-1)^{r+1}t^{-2(m-r-1)-a-r}\binom m{r+1}_t[r+1]_t=0$: the two exponents agree because $a=1-m$, and the remaining factors agree by [F1]. This calculation includes $a=0,m=1$. [F1, step 1.1, algebra]

3.1 Let $J$ be the two-sided Serre ideal in $T$. Applying the twisted product rule to a homogeneous contextual relation $us_{ij}v$ shows $D_\ell(us_{ij}v)\in J$: differentiating the middle factor gives zero, and differentiating either outside factor leaves the Serre factor. Homogeneous contextual relations span $J$, so $D_\ell J\subseteq J$. Thus each $D_i$ descends to $S$, with augmentation $\epsilon:S\to k$ killing positive height. [step 1.1, step 2.1, algebra]

4.1 For a free word $u=f_{i_1}\cdots f_{i_h}$ and $y\in S$ define $b(u,y)=\epsilon(D_{i_h}\cdots D_{i_1}y)$, where $D_{i_1}$ acts first. Extend linearly in $u$. This is well-defined in its second argument by step 3.1. Repeated deletion of letters in a representative word $v$ gives exactly the matching-permutation formula in the Statement: the first deletion at position $\pi(1)$ crosses the preceding remaining letters, and these are precisely the inversion pairs involving the first matched letter; continue inductively. Unequal root degrees give zero. [step 1.1, step 3.1, construct, algebra]

4.2 Fix $\alpha=\sum_i n_i\alpha_i$. The words $W_\alpha$ are a finite ordered list of length $N=(\sum_i n_i)!/\prod_i n_i!$. Construct the finite $N$-row matrix $R_\alpha(t)$ whose columns are all contextual Serre polynomials $us_{ij}v$ of degree $\alpha$, expanded in $W_\alpha$. This is a finite list: $i,j$ have finitely many possibilities and both context lengths are bounded by $\operatorname{ht}\alpha$. Include all possible context words of the required complementary degrees. The image of this matrix over $k$ is exactly $J[\alpha]$, since every homogeneous ideal element is a finite sum of such contexts. Consequently $\dim_k S[\alpha]=N-\operatorname{rank}_k R_\alpha(t)$. [given, F1, step 3.1, construct, algebra]

5.1 The bijection $\pi\mapsto\pi^{-1}$ preserves the exponent after interchanging $u,v$, since $a$ is symmetric. Consequently $b(u,[v])=b(v,[u])$ for free words and hence for free polynomials. If $P\in J$, then $b(u,[P])=0$ for every $u$; symmetry implies $b(P,[u])=0$ for every $u$. Thus $b$ factors in its first argument too, defining the asserted symmetric bilinear form on $S$. Its definition gives the adjunction and vacuum value. Conversely these adjunctions and homogeneity evaluate any first word by successive deletion, proving uniqueness. Identification [F2] makes this a form on the actual generic half, rather than a form on an unrelated free word space. [step 4.1, F2, algebra]

5.2 All entries of $R_\alpha(t)$ lie in $A$. At $t=1$, $[n]_t$ evaluates to $n$ and each Gaussian coefficient evaluates to the ordinary binomial coefficient, by its polynomial identity or factorial quotient. Hence $R_\alpha(1)$ is exactly the contextual classical Serre matrix. Every nonzero minor of $R_\alpha(1)$ comes from a Laurent-polynomial minor nonzero at $1$, and that minor is therefore nonzero over $k$. Thus $\operatorname{rank}_k R_\alpha(t)\ge\operatorname{rank}_{\mathbb Q}R_\alpha(1)$ and $\dim_k S[\alpha]\le N-\operatorname{rank}_{\mathbb Q}R_\alpha(1)$. This is an upper bound; no equality of generic and classical ranks is needed. [F1, step 4.2, algebra]

6.1 The finite permutation expression has Laurent-polynomial values. Every divided-power product is an ordinary word divided by a finite product of quantum factorials. Bilinearity and [F2] therefore give the asserted localization bound on $B_t(U_A^-,U_A^-)$. This uses the actual integral lattice's defining inclusion in the actual half, not a claim that a torsion-free module over $A$ is free. [F1, F2, step 5.1, algebra]

6.2 The final rational classical quotient is $U(\mathfrak n^-_{\mathbb Q})$: define $\mathfrak n^-_{\mathbb Q}$ as the rational Lie algebra on the finite generators $f_i$ modulo $(\operatorname{ad}f_i)^{1-a_{ij}}f_j=0$. A linear map from these generators into the commutator Lie algebra of an associative algebra factors through $\mathfrak n^-_{\mathbb Q}$ exactly when its images satisfy the ordinary associative Serre sums, since expanding the iterated commutator gives $\sum_r(-1)^r\binom mr f_i^{m-r}f_jf_i^r$. Therefore the enveloping algebra and the associative classical Serre quotient have the same universal property, giving mutually inverse generator maps. Enumerate finite homogeneous bracket words, degree by degree, retaining each first independent image to obtain an ordered homogeneous Lie basis. Each root degree has finitely many bracket words and hence finite dimension. PBW [F3] identifies the degree-$\alpha$ component dimension with the number $p_\alpha$ of ordered basis monomials of that degree. Extending the finite rational matrix $R_\alpha(1)$ to $\mathbb C$ preserves its rank: each nonzero rational minor stays nonzero, and each zero minor stays zero. Thus the rational and complex associative quotient dimensions agree. Over $\mathbb C$, [F4] identifies the Lie Serre half with the actual classical Kac–Moody negative half; the enveloping universal property just proved identifies its enveloping algebra with the complex associative Serre quotient. Consequently $p_\alpha$ is exactly the classical PBW rank of the original target, rather than the rank of a newly chosen different Lie algebra. At $\alpha=0$ there is one empty word, no contextual relation, $G_0=(1)$ and $p_0=1$. [F3, F4, step 5.2, algebra, construct]

7.1 By step 5.1, $G_\alpha(t)$ is the pullback of a bilinear form on the $\dim_k S[\alpha]$-dimensional quotient, so its rank is at most that dimension. At $c>0$ the Laurent entries evaluate. If a specialized minor of $G_\alpha(c)$ is nonzero over $\mathbb Q(c)$, its Laurent-polynomial minor is nonzero in $k$. Thus $\operatorname{rank}_{\mathbb Q(c)}G_\alpha(c)\le\operatorname{rank}_kG_\alpha(t)$. Combine this with steps 5.2 and 6.2 to obtain the full chain. All bases and matrix ranks needed here are furnished by finite pivot scans or the explicit bracket-word enumeration. The recursion defines the form in all degrees at once; there is no family of arbitrary choices. [step 5.1, step 5.2, step 6.2, algebra] ∎
