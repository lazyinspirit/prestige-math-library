---
id: lem-cohen-lenstra-mass-normalization
kind: lemma
title: "Cohen–Lenstra automorphism weights have total mass one"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-group, def-group-isomorphism-and-automorphism, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form, thm-nilpotent-jordan-string-basis, thm-jordan-form-uniqueness-from-ranks-of-powers, thm-orbit-stabilizer, thm-z-mod-p-is-a-field]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Majumder, An Elementary Proof of a Power Series Identity for the Weighted Sum of All Finite Abelian p-Groups"
      url: "https://arxiv.org/pdf/1407.3066"
      locator: "Theorem and full combinatorial proof, §§1–2"
    - title: "A. Landesman, Distributions of Class Groups of Global Fields, Lecture 3"
      url: "https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf"
      locator: "§3, normalization of the finite abelian p-group mass"
verification: {}
---

## Statement

For every odd prime $\ell$, if $\mathcal G_\ell$ is the set of isomorphism classes of finite abelian $\ell$-groups, then
$$\sum_{A\in\mathcal G_\ell}\frac{1}{|\operatorname{Aut}(A)|}=\prod_{j=1}^{\infty}(1-\ell^{-j})^{-1}.$$
Thus multiplying each inverse-automorphism weight by $c_\ell:=\prod_{j=1}^{\infty}(1-\ell^{-j})$ makes its total mass one.

## Statement references

[P. Majumder, *An Elementary Proof of a Power Series Identity for the Weighted Sum of All Finite Abelian p-Groups*](https://arxiv.org/pdf/1407.3066)

[A. Landesman, *Distributions of Class Groups of Global Fields*, Lecture 3](https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf)

## Facts & Assumptions

**Given:** An odd prime $\ell$. Write $q=\ell$ and $t=q^{-1}$. Empty products have value one, and the trivial group has one automorphism.

[F1] Finite abelian $q$-groups are classified by their cyclic prime-power elementary divisors. [[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]

[F2] Automorphisms are the invertible endomorphisms. [[def-group-isomorphism-and-automorphism]]

[F3] Every finite-dimensional nilpotent operator over a field has a Jordan-string basis, including the zero-dimensional case. [[thm-nilpotent-jordan-string-basis]]

[F4] The ranks of its powers determine the numbers of Jordan blocks of each size, so the block partition is unique. [[thm-jordan-form-uniqueness-from-ranks-of-powers]]

[F6] For a prime $q$, $\mathbb Z/q$ is a field, denoted $\mathbb F_q$. [[thm-z-mod-p-is-a-field]]

[F5] A group orbit is in bijection with the cosets of its stabilizer. [[thm-orbit-stabilizer]]

## Proof

1.1 For a partition $\lambda$, let $m_i$ be the number of parts equal to $i$, and put $S_\lambda=\sum_{a,b}\min(\lambda_a,\lambda_b)$. Let $A_\lambda=\bigoplus_a\mathbb Z/q^{\lambda_a}\mathbb Z$. A homomorphism from a cyclic summand of length $i$ to one of length $j$ is determined by an element killed by $q^i$, so has $q^{\min(i,j)}$ choices. Consequently $|\operatorname{End}(A_\lambda)|=q^{S_\lambda}$. Order the summands by length. On $A_\lambda/qA_\lambda$, a component from length $i$ to length $j>i$ is zero, since its image is divisible by $q^{j-i}$. Thus the induced matrix is block triangular, with one diagonal block of size $m_i$ for each length. Its diagonal entries range independently and uniformly over all such matrices over $\mathbb F_q$: specifying those residues fixes $\sum_i m_i^2$ independent coordinates of the endomorphism count. [F1, F2, F6, algebra]

2.1 An endomorphism $f$ of $A_\lambda$ is invertible exactly when every one of those diagonal blocks is invertible. Necessity follows on the quotient. For sufficiency their invertibility gives $A_\lambda=f(A_\lambda)+qA_\lambda$. Iterating this equality, using $f(qx)=qf(x)$, gives $A_\lambda=f(A_\lambda)+q^LA_\lambda=f(A_\lambda)$ for $L\ge\max\lambda_a$. Surjectivity on the finite set is bijectivity. Counting independent columns gives $|\operatorname{GL}_d(\mathbb F_q)|=\prod_{j=0}^{d-1}(q^d-q^j)=q^{d^2}\prod_{j=1}^d(1-q^{-j})$. Hence $$|\operatorname{Aut}(A_\lambda)|=q^{S_\lambda}\prod_{i\ge1}\prod_{j=1}^{m_i}(1-q^{-j}).$$ For the empty partition this reads $1=1$. [step 1.1, algebra]

3.1 The identical count applies to $M_\lambda=\bigoplus_a\mathbb F_q[T]/(T^{\lambda_a})$: replace divisibility by $q$ with divisibility by $T$ throughout steps 1.1 and 2.1. Each module homomorphism between lengths $i,j$ has $q^{\min(i,j)}$ choices, reduction modulo $T$ has the same block triangular form, and $M=f(M)+TM$ iterates to surjectivity because $T^LM=0$. Thus $|\operatorname{Aut}_{\mathbb F_q[T]}(M_\lambda)|=|\operatorname{Aut}(A_\lambda)|$, without identifying the groups themselves. [step 1.1, step 2.1]

4.1 Let $a_n$ be the number of nilpotent endomorphisms of $\mathbb F_q^n$, and let $g_n=|\operatorname{GL}_n(\mathbb F_q)|$, with $a_0=g_0=1$. By [F3] and [F4], nilpotent conjugacy classes correspond exactly to partitions of $n$. The stabilizer of an operator of type $\lambda$ consists of its invertible commuting linear maps, which are precisely $\operatorname{Aut}_{\mathbb F_q[T]}(M_\lambda)$. Orbit–stabilizer and step 3.1 therefore give the finite identity $$b_n:=\frac{a_n}{g_n}=\sum_{\lambda\vdash n}\frac1{|\operatorname{Aut}(A_\lambda)|}.$$ No infinite rearrangement has occurred. [F3, F4, F5, step 3.1]

5.1 Count pairs $(N,v)$ with $N$ nilpotent on $\mathbb F_q^n$ and $v\ne0$, for $n\ge1$. Let $r\ge1$ be the least integer with $N^rv=0$. The ordered list $(v,Nv,\ldots,N^{r-1}v)$ is independent: in a nontrivial relation, apply $N^{r-1-j}$ where $j$ is the least index with nonzero coefficient. This contradicts $N^{r-1}v\ne0$. There are $\prod_{j=0}^{r-1}(q^n-q^j)$ possible independent ordered lists. For each, its span $U$ has a prescribed nilpotent map. On $V/U$ there are $a_{n-r}$ possible nilpotent maps. For each quotient map, its lifts extending the prescribed map on $U$ form an affine set with $q^{r(n-r)}$ elements: after any finite choice of a complement, the free block is a map $V/U\to U$. Every lift is nilpotent because its restriction and quotient are nilpotent, and every lift has the specified cyclic string. Consequently $$(q^n-1)a_n=\sum_{r=1}^n\left(\prod_{j=0}^{r-1}(q^n-q^j)\right)a_{n-r}q^{r(n-r)}.$$ The formula includes $r=n$ with zero-dimensional quotient. [step 4.1, algebra]

6.1 Counting ordered bases extending a fixed independent $r$-tuple gives $$g_n=\left(\prod_{j=0}^{r-1}(q^n-q^j)\right)q^{r(n-r)}g_{n-r}.$$ Divide step 5.1 by $g_n$ to obtain $(q^n-1)b_n=\sum_{s=0}^{n-1}b_s$. For $n=1$ this gives $b_1=(q-1)^{-1}$. For $n\ge2$, the preceding recurrence at $n-1$ yields $\sum_{s=0}^{n-1}b_s=q^{n-1}b_{n-1}$. Thus, also for $n=1$ using $b_0=1$, $$b_n=\frac{q^{-1}}{1-q^{-n}}b_{n-1}=\frac{t^n}{\prod_{j=1}^n(1-t^j)}.$$ [step 5.1, algebra]

7.1 Put $c_N=\prod_{j=1}^N(1-t^j)$. These positive numbers decrease to a strictly positive limit $c$. Indeed choose $J$ with $\sum_{j>J}t^j\le1/2$. The finite product inequality $\prod(1-u_i)\ge1-\sum u_i$ for $0\le u_i\le1$ gives $c_N\ge c_J/2$ for all $N\ge J$. Hence $b_n\le2c_J^{-1}t^n$, and the series $F(z)=\sum_{n\ge0}b_nz^n$ converges uniformly for $0\le z\le1$ by a geometric tail bound. In particular $F(0)=1$ and $F$ is continuous at zero, as is also immediate from that bound. [step 6.1, algebra]

8.1 The recurrence $b_n(1-t^n)=tb_{n-1}$ gives, by subtracting two absolutely convergent series, $$(1-tz)F(z)=F(tz)\qquad(0\le z\le1).$$ Iterate at $z=1,t,\ldots,t^{N-1}$ to get $F(1)=c_N^{-1}F(t^N)$. Since $t^N\to0$, step 7.1 gives $F(t^N)\to1$ and $c_N\to c>0$, so $$\sum_{n\ge0}b_n=F(1)=c^{-1}=\prod_{j=1}^{\infty}(1-q^{-j})^{-1}.$$ [step 6.1, step 7.1, algebra]

9.1 By [F1], the finite partition sets for $n=0,1,\ldots$ index all finite abelian $q$-groups once. For nonnegative summands the total sum is the limit of sums over these finite sets: any finite set of partitions is contained in some initial union. Combining step 4.1 with step 8.1 proves the displayed mass identity. Multiplication by $c_q=c>0$ gives total mass one for $c_q/|\operatorname{Aut}(A)|$. This includes the trivial group's weight $c_q$ and requires no arithmetic class-group distribution theorem. Taking $q=\ell$ proves exactly the stated odd-prime scope. [F1, step 4.1, step 8.1] ∎

## Proof references

[[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]

[[thm-nilpotent-jordan-string-basis]]

[[thm-jordan-form-uniqueness-from-ranks-of-powers]]

[[thm-orbit-stabilizer]]

[[thm-z-mod-p-is-a-field]]

## Source notes

The mass identity and normalizing constant agree with the cited sources. The local proof above reconstructs the automorphism count and uses an elementary nilpotent-map count and uniformly convergent geometric majorants, rather than importing the source's weighted partition bijection. The sentence following the displayed identity has been corrected to multiply by the reciprocal of the displayed total mass. No conjectural Cohen–Lenstra distribution is asserted.
