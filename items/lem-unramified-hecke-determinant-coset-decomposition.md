---
dependency_level: 1
id: lem-unramified-hecke-determinant-coset-decomposition
kind: lemma
title: "Unramified determinant Hecke cosets and their primitive decomposition"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: [def-congruence-subgroup-of-sl2-z, thm-bezout-identity, thm-chinese-remainder-theorem, thm-fundamental-theorem-of-arithmetic]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "Section 4.2, printed pp. 28–29: normalized triangular Hecke convention and Fourier action (4.10). The coset and primitive-decomposition proofs are supplied locally."
---

## Statement

Let $N,n\ge1$ be integers with $(n,N)=1$, let $\Gamma=\Gamma_0(N)$, and put
$$
\Delta_n(N)=\left\{A\in M_2(\mathbb Z):\det A=n,\ N\mid A_{21}\right\}.
$$
The left $\Gamma$-cosets in $\Delta_n(N)$ have the unique representatives
$$
\begin{pmatrix}a&b\\0&d\end{pmatrix},\qquad a,d>0,\quad ad=n,\quad 0\le b<d.
$$
For a pointwise $\Gamma$-invariant function $f:\mathbb H\to\mathbb C$, the finite sum
$$
T_nf(z)=n^{-1/2}\sum_{A\in\Gamma\backslash\Delta_n(N)}f(Az)
=n^{-1/2}\sum_{\substack{a,d>0\\ad=n}}\sum_{b=0}^{d-1}f\!\left(\frac{az+b}{d}\right)
$$
is independent of the coset representatives and is $\Gamma$-invariant. Here a positive-determinant matrix acts by its fractional-linear map on $\mathbb H$.

Call an integer matrix primitive if the positive gcd of all its entries is one. The primitive part of $\Delta_n(N)$ is exactly $\Gamma\operatorname{diag}(1,n)\Gamma$. Define its normalized operator by
$$
P_nf(z)=n^{-1/2}\sum_{A\in\Gamma\backslash\Gamma\operatorname{diag}(1,n)\Gamma}f(Az).
$$
Then
$$
T_n=\sum_{\substack{h\ge1\\h^2\mid n}}h^{-1}P_{n/h^2}.
$$
In particular $T_1=P_1=I$, $T_p=P_p$ for each prime $p\nmid N$, and $T_{p^2}=P_{p^2}+p^{-1}I$. The two families $(T_n)_{(n,N)=1}$ and $(P_n)_{(n,N)=1}$ have exactly the same nonzero common eigenfunctions, with their respective eigenvalues.

## Statement references

[A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, §4.2, printed pp. 28–29.](https://arxiv.org/pdf/1202.0189v1)

## Facts & Assumptions

**Given:** The positive integer parameters, matrices and pointwise invariant functions in the Statement. All coset sums below are finite.

[F1] [[def-congruence-subgroup-of-sl2-z]] defines $\Gamma_0(N)$ as the determinant-one integer matrices whose lower-left entry is divisible by $N$, proves it is a subgroup, and gives its fractional-linear action.

[F2] [[thm-bezout-identity]]: if integers $a,c$ are not both zero, their positive gcd $g$ is $ua+vc$ for some integers $u,v$.

[F3] [[thm-chinese-remainder-theorem]]: a finite pairwise-coprime list of positive moduli admits every prescribed list of residue classes, including the empty list.

[F4] [[thm-fundamental-theorem-of-arithmetic]]: every positive integer factors as a finite product of primes. Thus an integer greater than one has a prime divisor.

## Proof

**Proof technique:** direct.

1.1 Matrix multiplication and the lower-left divisibility show that $\Gamma\Delta_n(N)=\Delta_n(N)=\Delta_n(N)\Gamma$; inverse matrices in $\Gamma$ give equality rather than just inclusion. If $A=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)\in\Delta_n(N)$, then $ad\equiv n\pmod N$, so $a$ is invertible modulo $N$. Its first column is nonzero. Put $g=\gcd(a,c)>0$, choose $ua+vc=g$ by [F2], and set
$$
\gamma=\begin{pmatrix}u&v\\-c/g&a/g\end{pmatrix}.
$$
It has determinant one. Since $g\mid a$ and $a$ is coprime to $N$, $g$ is coprime to $N$; Bezout for $g,N$ and $N\mid g(c/g)$ gives $N\mid c/g$. Therefore $\gamma\in\Gamma$, and $\gamma A=\left(\begin{smallmatrix}g&B\\0&n/g\end{smallmatrix}\right)$. The second diagonal entry is a positive integer. Left multiplication by $\left(\begin{smallmatrix}1&k\\0&1\end{smallmatrix}\right)$ reduces $B$ to its unique residue in $[0,n/g)$. [given, F1, F2, construct, algebra]

1.2 If two displayed positive upper-triangular representatives belong to the same left coset, the element of $\Gamma$ carrying one to the other is itself upper triangular. Its integer diagonal entries have product one and are positive, so they are both one. Consequently the two positive diagonal entries of the representatives agree, and their upper-right entries differ by an integer multiple of $d$. Their prescribed ranges force equality. There are finitely many positive divisors $d\mid n$ and finitely many residues $0\le b<d$, proving the exact finite representative list. [step 1.1, F1, algebra]

2.1 For any positive-determinant integer matrix $A$, its denominator $cz+d$ cannot vanish on $\mathbb H$, and direct expansion gives $\operatorname{Im}(Az)=\det(A)\operatorname{Im}(z)/|cz+d|^2>0$ and the composition law $A(Bz)=(AB)z$. Thus left replacement of a representative by $\gamma A$ does not change $f(Az)$. Right multiplication by any fixed $\gamma\in\Gamma$ bijects the left cosets of $\Delta_n(N)$, by step 1.1, and hence $T_nf(\gamma z)=T_nf(z)$. This proves independence, the triangular formula and invariance. [given, F1, step 1.1, step 1.2, algebra]

3.1 Suppose $A=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)\in\Delta_n(N)$ is primitive. There are finitely many prime divisors of $n$, since each is between $2$ and $n$. For each such prime $p$, the matrix $A$ is not zero modulo $p$. Also $p\nmid N$. Prescribe $t\equiv0\pmod p$ if the first column of $A$ is nonzero modulo $p$, and prescribe $t\equiv1\pmod p$ otherwise. In the latter case its second column is nonzero and multiplication by $N$ preserves that fact, so in both cases $A(1,Nt)^{\mathsf t}$ is nonzero modulo $p$. By [F3] these prescriptions are realized by one integer $t$; take $t=0$ if the list is empty. [given, F2, F3, construct, algebra]

3.2 The integer vector $w=A(1,Nt)^{\mathsf t}$ satisfies $d w_1-b w_2=n>0$, so it is nonzero. It is primitive: if its positive coordinate gcd were greater than one, [F4] would give a prime divisor $p$ of both coordinates. The identity $d w_1-b w_2=n$ then forces $p\mid n$, contradicting step 3.1. The matrix $\beta_1=\left(\begin{smallmatrix}1&0\\Nt&1\end{smallmatrix}\right)$ lies in $\Gamma$ and makes $w$ the first column of $A\beta_1$. Applying step 1.1 with gcd one gives $\gamma A\beta_1=\left(\begin{smallmatrix}1&B\\0&n\end{smallmatrix}\right)$, and right multiplication by $\beta_2=\left(\begin{smallmatrix}1&-B\\0&1\end{smallmatrix}\right)\in\Gamma$ gives $\operatorname{diag}(1,n)$. Thus every primitive matrix belongs to the asserted double coset. Conversely $\operatorname{diag}(1,n)$ is primitive, and multiplication on either side by a determinant-one integer matrix preserves the gcd of all entries, since both the matrix and its inverse have integer entries. Step 1.1 gives the required lower-left condition throughout. This proves the primitive double-coset assertion. [F1, F2, F4, step 1.1, step 3.1, algebra]

4.1 For $A\in\Delta_n(N)$ let $h>0$ be its entry gcd. Dividing every entry by $h$ gives a primitive integer matrix $A'$ with $\det A'=n/h^2$, so $h^2\mid n$ and $(h,N)=1$. Bezout as in step 1.1 gives $N\mid A'_{21}$. Conversely each $h^2\mid n$ and primitive $A'\in\Delta_{n/h^2}(N)$ gives such an $A=hA'$, of content exactly $h$. Content is preserved by left $\Gamma$ multiplication, and scaling by $h$ bijects the corresponding left cosets. The fractional-linear maps of $A'$ and $hA'$ agree. Comparing the normalizations, $n^{-1/2}=h^{-1}(n/h^2)^{-1/2}$, proves $T_n=\sum_{h^2\mid n}h^{-1}P_{n/h^2}$. [F2, step 1.1, step 3.2, algebra]

5.1 At $n=1$ there is just the identity left coset; for prime $p$ the scalar-content sum has only $h=1$, and for $p^2$ its terms are $h=1,p$. These prove the displayed special cases. Every common eigenfunction for all $P_n$ is a common eigenfunction for all $T_n$ by the finite formula in step 4.1. Conversely rearrange it as $P_n=T_n-\sum_{h^2\mid n,\,h>1}h^{-1}P_{n/h^2}$ and induct on $n$: every index in the remaining sum is smaller than $n$ and coprime to $N$. The base case is $P_1=T_1=I$. Thus every common eigenfunction for all $T_n$ is one for all $P_n$, without asserting equality of their nonprime eigenvalues. [step 1.2, step 4.1, induction, algebra] ∎
