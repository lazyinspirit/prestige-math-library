---
id: lem-minuscule-gln-hecke-transforms-and-triangularity
kind: lemma
title: Minuscule GL(n) Hecke transforms and dominance triangularity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln
- lem-gln-local-iwasawa-and-cartan-decompositions
- lem-normalized-satake-transform-is-convolution-homomorphism-for-gln
- def-elementary-symmetric-polynomials
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- def-axiom-of-choice
sources:
  references:
  - title: Masao Oi, Introduction to the Local Langlands Correspondence, §§8.2, 11.1–11.2
    url: https://masaooi.github.io/LLC.pdf
  - title: W. Casselman, Introduction to the Theory of Admissible Representations of p-adic Reductive Groups (1995 draft), §§2.1–2.2
    url: https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf
proof_strategy: direct
---
## Statement

Assume the Axiom of Choice and the local data and normalized transform of the spherical Hecke definition. For $0\le r\le n$, put $\omega_r=(1,\ldots,1,0,\ldots,0)$ with $r$ ones and $h_r=1_{Kt_{\omega_r}K}$. Then
$$
\mathcal S(h_r)=q^{r(n-r)/2}e_r(X_1,\ldots,X_n).
$$
Here $h_0=1_K$, and the central element $h_n$ has convolution inverse $1_{\varpi^{-1}IK}$. For decreasing integer words $\lambda$, the transform of $h_\lambda=1_{Kt_\lambda K}$ is supported only on words $\mu$ whose decreasing rearrangement $\mu^+$ satisfies $\mu^+\preceq\lambda$, where $\preceq$ means equal total sum and no larger sum of the first $j$ entries for every $j<n$. Its coefficient at $X^\lambda$ is strictly positive. Consequently $\mathcal S$ is injective, and $H$ is generated as a complex algebra by $h_1,\ldots,h_n,h_n^{-1}$.

## Statement references

[[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]]

[[lem-gln-local-iwasawa-and-cartan-decompositions]]

[[lem-normalized-satake-transform-is-convolution-homomorphism-for-gln]]

[[def-elementary-symmetric-polynomials]]

[[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]

[[def-axiom-of-choice]]

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §§11.1–11.2](https://masaooi.github.io/LLC.pdf)

[W. Casselman, *Introduction to the Theory of Admissible Representations of p-adic Reductive Groups*, §§2.1–2.2](https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf)

## Facts & Assumptions

**Given:** The fixed local field datum, $n\ge1$, and the volume-one Haar measures.

[A1] AC is assumed for the Haar-existence and normalization context used by the local data. [[def-axiom-of-choice]]

[F1] The groups, measures, modulus and normalized Satake expression are those defined in [[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]].

[F2] Iwasawa and Cartan decompositions, triangular lattice representatives and determinantal minor invariants are proved in [[lem-gln-local-iwasawa-and-cartan-decompositions]].

[F3] The normalized transform descends to a finite Laurent polynomial and preserves convolution. [[lem-normalized-satake-transform-is-convolution-homomorphism-for-gln]]

[F4] The polynomial $e_r$ is the sum of the square-free monomials of degree $r$. [[def-elementary-symmetric-polynomials]]

[F5] Haar measure is positive on every nonempty open set. [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]

## Proof

**Given:** The local data and $n\ge1$. Upper-triangular matrices act on column lattices.

1.1 By [F3], the transform is already a finite Laurent polynomial. Membership of $t_\mu u$ in $Kt_{\omega_r}K$ is equivalent to $\varpi\mathcal O^n\subseteq L=t_\mu u\mathcal O^n\subseteq\mathcal O^n$ with $[\mathcal O^n:L]=q^r$: by [F2], both conditions say that the elementary divisors are $r$ copies of $\varpi$ and $n-r$ copies of $1$. The principal-minor inequalities in [F2] then force $0\le\mu_i\le1$ and $\sum_i\mu_i=r$. Fix such a word $\mu$ and let $I=\{i:\mu_i=1\}$. [F1, F2, F3, algebra]

1.2 If $h_\gamma$ occurs in $h_\alpha*h_\beta$, there are $x\in Kt_\alpha K$ and $y\in Kt_\beta K$ with $xy\in Kt_\gamma K$. By Cauchy–Binet, the least valuation of a $j$-minor of $xy$ is at least the sum of the least valuations of the $j$-minors of $x$ and $y$. Hence the bottom-$j$ elementary-divisor sums of $\gamma$ are at least those of $\alpha+\beta$, and the equal determinant sums imply $\gamma\preceq\alpha+\beta$. The coefficient at $h_{\alpha+\beta}$ is positive: at $g=t_{\alpha+\beta}$ the integrand $h_\alpha(x)h_\beta(x^{-1}g)$ is one at $x=t_\alpha$ and hence on an open neighborhood; [F5] gives that neighborhood positive Haar measure. [A1, F1, F2, F5, algebra]

2.1 Right multiplication by $U\cap K$ reduces each entry $A_{ij}$ of the upper-triangular basis matrix $A=t_\mu u$, for $i<j$, modulo $\varpi^{\mu_i}\mathcal O$: in column $j$, process $i=j-1,j-2,\ldots,1$ and subtract a multiple in $\mathcal O$ of column $i$. This changes row $i$ by a multiple of its diagonal $\varpi^{\mu_i}$ and does not change rows below $i$, already reduced. Choose fixed representatives for the finite residue field when $\mu_i=1$; when $\mu_i=0$, reduce the entry to zero. The reduced matrix in each right coset is unique: if two reduced matrices differ by right multiplication by $C\in U\cap K$, compare column $j$ from row $j-1$ upward; after the higher entries of that column agree, the difference in row $i$ is $C_{ij}\varpi^{\mu_i}$. Both entries are fixed representatives modulo $\varpi^{\mu_i}\mathcal O$, so this difference is zero and $C_{ij}=0$. Thus reduced representatives have zero off-diagonal rows for $i\notin I$ and residues in $k$ for rows $i\in I$. [F1, F2, step 1.1, construct, algebra]

3.1 Reduce these columns modulo $\varpi$. The columns with $j\notin I$ project to the distinct coordinate basis vectors on the coordinates outside $I$, so they are linearly independent. Since $\dim_k(L/\varpi\mathcal O^n)=n-r$, each column with $j\in I$ must be zero modulo $\varpi$: it is supported on $I$, while projection onto the outside coordinates is injective on the span of the other $n-r$ columns. Conversely, arbitrary residues are allowed exactly at positions $i<j$ with $i\in I$ and $j\notin I$. Writing $A=D+R$ with $D=t_\mu$, all length-two products through entries of $R$ vanish because its nonzero rows lie in $I$ and its nonzero columns lie outside $I$. Hence $A^{-1}=D^{-1}-D^{-1}RD^{-1}$, and $\varpi A^{-1}$ is integral. Therefore $\varpi\mathcal O^n\subseteq A\mathcal O^n$; the other inclusion and index $q^r$ follow from integrality and $\det A=\varpi^r$. There are exactly $q^a$ such right cosets, where $a=\#\{(i,j):i<j,\ \mu_i=1,\ \mu_j=0\}$. Each has $du$-mass one. [A1, F1, step 1.1, step 2.1, algebra]

4.1 Let $b=\#\{(i,j):i<j,\ \mu_i=0,\ \mu_j=1\}$. Then $a+b=r(n-r)$ and $\delta(t_\mu)=q^{-(a-b)}$. The coefficient of $X^\mu$ in $\mathcal S(h_r)$ is therefore $q^a q^{-(a-b)/2}=q^{r(n-r)/2}$. Step 1.1 excludes all other exponent words, so [F4] gives the minuscule formula, including $r=0,n$. Since $\varpi I$ is central, convolution by $h_n=1_{\varpi I K}$ is translation by $\varpi I$; its inverse is translation by $\varpi^{-1}I$, namely $1_{\varpi^{-1}IK}$, and the two compose to $1_K$. [F1, F4, step 1.1, step 3.1, algebra]

5.1 For arbitrary decreasing $\lambda$, the principal-minor inequalities in [F2] give equal total sums and show that every $j$-term sum of $\mu$ is at least the sum of the $j$ smallest entries of $\lambda$. Taking the minimum over $j$-element subsets and then complements gives $\mu^+\preceq\lambda$. The coefficient at $X^\lambda$ is positive because every $u\in U\cap K$ has $t_\lambda u\in Kt_\lambda K$ and this subgroup has measure one. In a nonzero finite linear combination of the basis $h_\lambda$, restrict to one total degree and choose a dominance-maximal $\lambda$ with nonzero coefficient. No other term can contribute to $X^\lambda$, since that would require a distinct term to dominate $\lambda$. Thus the transform is injective. [F1, F2, step 4.1, algebra]

6.1 Let $\lambda$ be decreasing, nonnegative and have total sum $N$. The identity $\lambda=\lambda_n(1,\ldots,1)+\sum_{r=1}^{n-1}(\lambda_r-\lambda_{r+1})\omega_r$ gives the product $P_\lambda=h_n^{*\lambda_n}*h_1^{*(\lambda_1-\lambda_2)}*\cdots*h_{n-1}^{*(\lambda_{n-1}-\lambda_n)}$ in the displayed order, with an exponent zero meaning that the factor is omitted. For $N=0$ this is the empty product $1_K$, whose top coefficient is one. Iterating the support bound of step 1.2 shows that its Cartan terms are dominated by $\lambda$. Its top coefficient is positive by induction on the number of factors: if a partial product is positive at $t_\eta$, multiplying by $h_\rho$ is positive at $t_{\eta+\rho}$ because the integrand is positive at $x=t_\eta$ and, by local constancy, on an open neighborhood; [F5] gives that neighborhood positive measure. Thus $P_\lambda=c_\lambda h_\lambda+\sum_{\nu\prec\lambda}c_\nu h_\nu$ with $c_\lambda>0$. Only nonnegative words occur because all factor matrices are integral; there are finitely many partitions of $N$. Induction over this finite dominance order, starting at its minimal elements, expresses each $h_\lambda$ as a polynomial in $h_1,\ldots,h_n$. For arbitrary integer $\lambda$, choose $M\ge0$ with $\lambda+M(1,\ldots,1)$ nonnegative. By step 4.1, $h_n^{-1}=1_{\varpi^{-1}IK}$; writing $h_n^{-M}$ for its $M$-fold convolution power, central translation gives $h_\lambda=h_n^{-M}*h_{\lambda+M(1,\ldots,1)}$. This proves the asserted generation. [A1, F5, step 4.1, step 1.2, algebra] ∎

## Notes

The argument uses no Hall-polynomial or intertwining-operator formula. The finite residue choices in the Hermite representatives require only finite choice; AC is carried for the Haar-existence context.
