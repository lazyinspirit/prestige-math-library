---
id: thm-number-field-s-unit-structure-in-zf
kind: theorem
title: "Dirichlet and S-unit structure theorems in ZF"
status: draft
origin: session
deps: [thm-number-field-ideal-class-group-finite-in-zf, lem-axis-box-lattice-point-in-zf, thm-number-field-integral-ideal-factorisation-in-zf, thm-ring-of-integers-and-ideals-are-full-lattices, thm-ring-of-integers-free-of-rank-degree, thm-principal-ideal-norm-is-absolute-field-norm, lem-finitely-many-number-field-ideals-of-bounded-norm, lem-discrete-subgroups-of-real-vector-spaces-are-lattices, def-minkowski-embedding-of-a-number-field, def-field-norm-and-trace]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Theorems 5.1, 5.9 and 5.11"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

Work in ZF. Let $K$ be a number field of signature $(r,s)$, $R=\mathcal O_K$, and let $S$ be a finite set of $t$ nonzero prime ideals of $R$. Define
$$U_S=\{a\in K^\times:v_{\mathfrak p}(a)=0\text{ for every nonzero prime }\mathfrak p\notin S\},$$
where $v_{\mathfrak p}(a)$ is the exponent of $\mathfrak p$ in the principal fractional ideal $(a)$. The group $\mu(K)$ of roots of unity in $K$ is finite cyclic of even order, and
$$U_S\cong\mu(K)\times\mathbb Z^{r+s-1+t}.$$
In particular $\dim_{\mathbb F_2}(U_S/U_S^2)=r+s+t$. For $S=\varnothing$, $U_S=R^\times$, and the weighted logarithmic homomorphism
$$\lambda(a)=(\log|\sigma_1(a)|,\ldots,\log|\sigma_r(a)|,2\log|\tau_1(a)|,\ldots,2\log|\tau_s(a)|)$$
has kernel $\mu(K)$ on $R^\times$ and image a full lattice in $H=\{x\in\mathbb R^{r+s}:\sum_i x_i=0\}$. Here $\sigma_i$ are the real embeddings and $\tau_j$ one embedding from each complex-conjugate pair. No arbitrary choice axiom is used.

## Facts & Assumptions

**Given:** $K,R,r,s,S,t$ and $\lambda$ as in the statement; put $n=r+2s$ and $m=r+s$.

[F1] Nonzero fractional ideals are invertible, and the ideal class group is finite and annihilated by a positive integer $h$ ([[thm-number-field-ideal-class-group-finite-in-zf]]).

[F2] Nonzero integral ideals factor uniquely into primes in ZF ([[thm-number-field-integral-ideal-factorisation-in-zf]]).

[F3] The Minkowski image of $R$ is a full lattice, and $R$ has a finite integral basis ([[thm-ring-of-integers-and-ideals-are-full-lattices]], [[thm-ring-of-integers-free-of-rank-degree]]).

[F4] The axis-box lattice theorem is available in ZF ([[lem-axis-box-lattice-point-in-zf]]).

[F5] For $a\in R\setminus\{0\}$, $|N_{K/\mathbb Q}(a)|=N((a))$ is a positive integer; only finitely many integral ideals have bounded norm ([[thm-principal-ideal-norm-is-absolute-field-norm]], [[lem-finitely-many-number-field-ideals-of-bounded-norm]]).

[F6] A subgroup of a finite-dimensional real space meeting every bounded set in finitely many points is the integer span of finitely many real-linearly independent vectors; no choice principle is needed ([[lem-discrete-subgroups-of-real-vector-spaces-are-lattices]]).

[F7] In an integral basis the multiplication matrix for $a$ is conjugated by the invertible Minkowski basis matrix in [F3] to real scalar blocks $\sigma_i(a)$ and two-dimensional complex multiplication blocks of determinant $|\tau_j(a)|^2$. Taking determinants proves $|N(a)|=\prod_i|\sigma_i(a)|\prod_j|\tau_j(a)|^2$. Its logarithm gives $\sum_i\lambda_i(a)=\log|N_{K/\mathbb Q}(a)|$, and $\lambda(ab)=\lambda(a)+\lambda(b)$ ([[def-minkowski-embedding-of-a-number-field]], [[def-field-norm-and-trace]]).

## Proof

1.1 Fix one integral basis and the resulting natural-number coding of $R$. An ideal $(a)$ for $a\in K^\times$ has a well-defined finite prime factorisation with integer exponents: take a nonzero $d\in R$ with $da\in R$ and subtract the exponents of $(d)$ from those of $(da)$. Independence of $d$ follows from the integral identity $(da)(e)=(ea)(d)$ and uniqueness in [F2]. Exponents add under multiplication, and every fractional ideal has such a factorisation by clearing its denominator. In particular all exponents of $(a)$ vanish exactly when $(a)=R$, equivalently $a\in R^\times$. Since an integral unit and its inverse have positive integer absolute norms whose product is one, their absolute norms equal one. Thus $\lambda(R^\times)\subseteq H$ by [F7]. [F1, F2, F3, F5, F7, given, algebra]

2.1 A bounded set of Minkowski coordinates contains only finitely many elements of $R$: writing its points as $Bz$ for the fixed invertible lattice-basis matrix $B$, the integer vector $z=B^{-1}(Bz)$ ranges in a bounded integer box. If $\lambda(u)$ ranges in a bounded subset of $H$, each embedding modulus of $u$ is bounded above, so its real and imaginary Minkowski coordinates are bounded. Thus each bounded subset meets $\lambda(R^\times)$ in finitely many points. Its kernel $M$ is finite by the same argument, since kernel elements have all embedding moduli one. It is a subgroup; powers of any element repeat in this finite group, so each member is a root of unity. Conversely a root of unity is integral, its inverse is a positive power of itself and is integral, and every embedding takes it to a complex root of unity. It therefore belongs to $M$. Hence $M=\mu(K)$. [F3, step 1.1, algebra]

2.2 Let $D>0$ be the covolume in [F3] and fix a real $C>1$ with $C^n>D$. For any single $x\in H$, apply [F4] with real-coordinate bounds $C e^{x_i}$ at the real embeddings and bounds $C e^{x_{r+j}/2}$ on both real and imaginary coordinates at the $j$th complex embedding. Their product is $C^n e^{\sum_i x_i}=C^n>D$. There is consequently $a\in R\setminus\{0\}$ such that $\lambda_i(a)-x_i<c_i$, where $c_i=\log C$ for a real place and $c_{r+j}=2\log C+\log2$ for a complex place. The latter bound uses $|\tau_j(a)|<\sqrt2C e^{x_{r+j}/2}$. Put $A=\sum_i c_i=n\log C+s\log2$ and $B_0=e^A=2^sC^n$. Then $1\le|N(a)|<B_0$ by [F5] and [F7]. Also $\sum_i(\lambda_i(a)-x_i)=\log|N(a)|\ge0$, so each coordinate difference is at least $-\sum_{k\ne i}c_k$ and at most $c_i$. Thus $\|\lambda(a)-x\|_\infty\le A$. This produces a witness for each fixed $x$, not a chosen family indexed by $H$. [F3, F4, F5, F7, step 1.1, algebra]

3.1 By [F5] only finitely many principal integral ideals have norm below $B_0$; list them as $(b_1),\ldots,(b_q)$ with $b_j\in R\setminus\{0\}$. The list is nonempty since $B_0>1$ and $(1)$ qualifies. Generators can be taken least-coded in the fixed basis, or selected by finite choice, which is a theorem of ZF. For the $a$ of step 2.2, $(a)=(b_j)$ for some $j$, so $a=u b_j$ with $u\in R^\times$: both $a/b_j$ and $b_j/a$ are in $R$ by the equality of ideals. It follows that $\|\lambda(u)-x\|_\infty\le A+\max_j\|\lambda(b_j)\|_\infty=:R_0$. Thus every point of $H$ is at distance at most the fixed $R_0$ from $\lambda(R^\times)$. [F5, step 2.2, algebra]

3.2 Here is a finite proof that $\mu(K)$ is cyclic. For every rational prime $p$ dividing an element order in the finite group $\mu(K)$, let $e_p$ be the largest exponent of $p$ in those orders. An element of order $p^{e_p}b$ with $p\nmid b$, raised to the $b$th power, has order $p^{e_p}$. Select one such element for each of the finitely many primes. In an abelian group, the product of elements of coprime orders has the product order: if the product raised to $k$ is one, isolating either factor shows its $k$th power lies in the intersection of subgroups with coprime orders, whose intersection is trivial (Bezout's identity); induct on the number of factors. Their product therefore has order $M=\prod_p p^{e_p}$, and every element of $\mu(K)$ has order dividing $M$. The polynomial $X^M-1$ has at most $M$ roots in the field $K$, by repeated division by $X-a$ and induction on degree. Thus $|\mu(K)|\le M$, while the cyclic subgroup just constructed has $M$ distinct elements. It is the whole group. Since $1\ne-1$ in a characteristic-zero field and $-1\in\mu(K)$ has order two, $M$ is even. This argument also covers the empty-prime case with $M=1$ before observing $-1$. [step 2.1, algebra]

4.1 By [F6] and step 2.1, $\lambda(R^\times)$ has an integer basis $w_1,\ldots,w_d$ real-linearly independent in $H$, so $d\le m-1$. Its real span is all of $H$: otherwise finite-dimensional linear algebra gives a nonzero linear functional $f$ on $H$ vanishing on that span. There is a constant $c$ with $|f(y)|\le c\|y\|_\infty$ in finite coordinates. Step 3.1 would imply $|f(x)|\le cR_0$ for every $x\in H$, whereas $f(tv)=t f(v)$ is unbounded for some $v$ with $f(v)\ne0$. This contradiction proves $d=m-1$. If $H=0$ the conclusion holds with the empty basis. Lift these finitely many $w_i$ to units $u_i$. The homomorphism $\mathbb Z^{m-1}\to R^\times$ given by their powers splits $\lambda$: any unit, after dividing by the unique indicated product, is in $\mu(K)$, and a product in the kernel has all its exponents zero. Hence $R^\times\cong\mu(K)\times\mathbb Z^{m-1}$. [F6, step 2.1, step 3.1, algebra]

5.1 List $S=\{\mathfrak p_1,\ldots,\mathfrak p_t\}$, with the empty list allowed. The valuation homomorphism $v:U_S\to\mathbb Z^t$ has kernel $R^\times$ by step 1.1. For the integer $h$ in [F1], choose generators $\pi_i$ of the integral principal ideals $\mathfrak p_i^h$; these are finite choices and may again use least codes. Then $\pi_i\in U_S$ and $v(\pi_i)=h e_i$. The image $\Gamma$ therefore contains $h\mathbb Z^t$ and is contained in $\mathbb Z^t$. It meets bounded subsets of $\mathbb R^t$ finitely, so [F6] gives it a real-linearly independent integer basis; since it contains the real spanning set $h e_i$, that basis has exactly $t$ members. Lift those finitely many basis vectors to $a_1,\ldots,a_t\in U_S$. Their powers split $v$ just as in step 4.1, yielding $U_S\cong R^\times\times\mathbb Z^t\cong\mu(K)\times\mathbb Z^{m-1+t}$. [F1, F6, step 1.1, step 4.1, algebra]

6.1 Squaring in a finite cyclic group of even order has a quotient of order two, because the exponent residues modulo $M$ have exactly the two parity classes modulo the subgroup of doubles. Each infinite cyclic factor also has quotient of order two. The decomposition in step 5.1 therefore gives $U_S/U_S^2\cong(\mathbb Z/2\mathbb Z)^{m+t}$ and the asserted dimension. Every auxiliary list was finite; the uncountable quantifier in step 2.2 was used pointwise. The only coding fixed globally was a single integral basis of the given field, extended to rational coordinates when coding $K$ is desired. Thus the conclusions hold in ZF without a choice axiom. [step 3.2, step 5.1, algebra] ∎
