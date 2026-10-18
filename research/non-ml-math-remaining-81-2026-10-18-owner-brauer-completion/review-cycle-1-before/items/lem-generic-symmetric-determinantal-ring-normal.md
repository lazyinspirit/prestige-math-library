---
id: lem-generic-symmetric-determinantal-ring-normal
kind: lemma
title: Normality of the symmetric determinantal ring
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [lem-generic-symmetric-minor-straightening]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Lakshmibai, Raghavan, Sankaran, and Shukla, Standard Monomial Bases, Moduli Spaces of Vector Bundles & Invariant Theory, §§5–6"
      url: https://www.imsc.res.in/~sankaran/Papers/0604321.pdf
      locator: "PDF pp. 25–29: normality by Serre's criterion after standard-monomial and Schubert-variety inputs."
---

## Statement

Under the hypotheses and notation of [[lem-generic-symmetric-minor-straightening]], the ring $k[z_{ij}]/I_{m+1}$ is an integrally closed domain for every $0\le m\le t$.

## Facts & Assumptions

**Given:** The standard-monomial basis proved in [[lem-generic-symmetric-minor-straightening]].

[F1] [[lem-generic-symmetric-minor-straightening]]: the standard products form a basis of the quotient by $I_{m+1}$.

## Proof

**Given:** The basis assertion [F1], including its full range of ranks.

1.1 Put $P=k[x_{ir}:1\le i\le t,1\le r\le m]$ and map $Z$ to $XX^{\mathsf T}$. Order the variables lexicographically, with $x_{11}>\cdots>x_{t1}>x_{12}>\cdots>x_{tm}$. For $|A|=|B|=s\le m$, Cauchy–Binet gives $p(A,B)(XX^{\mathsf T})=\sum_{|C|=s}\det X_{A,C}\det X_{B,C}$. The leading term of a determinant with increasing row and column sets pairs their first indices, then their second indices, and so on: at the first column, the lexicographically largest variable available has its smallest row index. The largest summand in Cauchy–Binet has $C=(1,\ldots,s)$, by comparing the first column belonging to exactly one of two column sets. Consequently the leading monomial of this Gram minor, with coefficient one, is $\prod_{r=1}^s x_{a_r r}x_{b_r r}$. [given, algebra]

1.2 We record the local normality transfer used here. If $A$ is a local domain essentially of finite type over $k$, $h$ is a nonzero element of its maximal ideal, and $A/hA$ is normal, then $A$ is normal. To check this with Serre's criterion, first take a prime $Q$ containing $h$. The depth formula for a nonzerodivisor gives $\operatorname{depth}A_Q=1+\operatorname{depth}(A/hA)_{Q/hA}\ge\min(3,\dim A_Q)$. If $\dim A_Q\le2$, its quotient is a field or a normal one-dimensional local domain, hence is regular; lifting generators of the maximal ideal and adjoining $h$ shows $A_Q$ is regular. For a prime $q$ not containing $h$, choose $Q$ minimal over $q+(h)$ in $A$. Such a prime exists since $A$ is local and $h$ belongs to its maximal ideal. The principal ideal theorem in $A/q$, and the dimension formula for rings essentially of finite type over a field, give $\dim A_Q=\dim A_q+1$ and $\dim(A_Q/qA_Q)=1$. If $\dim A_q=1$, $A_Q$ is regular by the preceding observation, and so is its localization $A_q$. If $\dim A_q\ge2$, the depth localization inequality gives $\operatorname{depth}A_q\ge\operatorname{depth}A_Q-1\ge2$. Together with the primes containing $h$, this proves $R_1$ and $S_2$, hence normality. [algebra]

2.1 For a standard product discard empty factors and write its columns in reverse order, $B_q,A_q,\ldots,B_1,A_1$. This is a tableau with weakly increasing rows, strictly increasing columns, nonincreasing column lengths, and columns of each length occurring an even number of times. Its row lengths are therefore even. Conversely such a tableau has pairs of consecutive columns of equal length, and reversing its columns and grouping these pairs recovers exactly one standard product. The exponents of its leading monomial record the entries in every row; weak increase reconstructs those rows uniquely. Distinct standard products thus have distinct leading monomials. All $(m+1)$-minors vanish under the Gram map, and [F1] now shows that the induced map $R=k[z_{ij}]/I_{m+1}\longrightarrow P$ is injective. In particular $R$ is a domain. [F1, step 1.1, construct]

3.1 Describe these leading exponents as arrays $a=(a_{ri})\in\mathbb N^{mt}$. Set $c_r(u)=\sum_{i\le u}a_{ri}$, with $c_r(0)=0$. The necessary and sufficient conditions are that every $c_r(t)$ is even and $c_{r+1}(u)\le c_r(u-1)$ for $1\le r<m$ and $1\le u\le t$. Indeed the latter inequalities say exactly that the $j$th entry of row $r$ is strictly smaller than the $j$th entry of row $r+1$, whenever the latter exists: count entries at most $u$ to obtain necessity, and apply the inequality with $u$ equal to that lower entry to obtain sufficiency. They imply nonincreasing row lengths. Even row lengths make their consecutive differences even, so the resulting columns have the required paired lengths. Thus these arrays form exactly the semigroup $S$ of leading monomials of $R$. It is closed under addition. If $a\in\operatorname{gp}(S)$ and $Na\in S$ for a positive integer $N$, its entries are nonnegative, the displayed inequalities hold after division by $N$, and its row sums are even since every element of $\operatorname{gp}(S)$ has that parity. Hence $a\in S$: this is saturation in the actual group of the semigroup, rather than saturation in the larger unrestricted integer lattice. [step 2.1, algebra]

4.1 The algebra $k[S]$ is integrally closed. Here is the lattice argument. Write $L=\operatorname{gp}(S)$ and let $C$ be the cone cut out by nonnegativity and the inequalities in step 3.1. That step proves $S=C\cap L$. Inside $k[L]$, each integral linear inequality $\ell\ge0$ defines a valuation by $v_\ell(\sum b_a x^a)=\min_{b_a\ne0}\ell(a)$; the product rule follows because the associated lowest-weight Laurent polynomials have nonzero product. Its nonnegative subring is a valuation ring intersected with $k[L]$. The Laurent polynomial ring $k[L]$ is integrally closed, and so are valuation rings: a monic equation for an element of negative valuation has its highest power of strictly smallest valuation, which is impossible. The intersection of these rings, inside their common fraction field, is precisely $k[C\cap L]$, by the monomial independence in $k[L]$. Intersections of integrally closed subrings of a field are integrally closed. [step 3.1, algebra]

4.2 We construct a finite weight degeneration, to make the normality transfer explicit. The finitely many Gram minors generate $R$, because they include all its degree-one generators $z_{ij}$. By steps 2.1 and 3.1 their leading monomials generate $S$: every standard monomial is a product of those leading monomials. Introduce one variable for each nonempty Gram minor, mapped to its leading monomial. The kernel of this monomial map is generated by finitely many binomials. This follows from the ascending chain condition in the finite polynomial ring, and the kernel is spanned by binomials because monomials with the same image exponent are the only linear dependencies. For each of these finitely many binomials substitute the actual Gram minors; their largest terms cancel. Repeatedly subtract the uniquely matching standard product to cancel the largest remaining term, using [F1] and step 2.1. This process terminates: all polynomials involved have one fixed ordinary degree in the $x$'s and there are only finitely many monomials of that degree. Choose a positive integer weight on the $x$ variables realizing all the strict lexicographic comparisons in this finite list of reductions and all the minor expansions; sufficiently separated positive powers realize any finite list of lexicographic comparisons. [F1, step 1.1, step 2.1, step 3.1, construct]

5.1 For this weight the minors still form a basis for leading-term subduction: if highest-weight terms in a polynomial expression in the minors cancel, its highest-weight symbolic part belongs to the toric kernel from step 4.2. Express it in the finitely many binomial generators, and replace each by its recorded reduction. Each replacement lowers the weight of the cancelling part. All weights are nonnegative integers; this induction terminates. It proves that the associated graded algebra for the weight filtration on $R\subset P$ is $k[S]$. For $F_dR=\{f\in R:\deg_w f\le d\}$, its Rees algebra $T=\bigoplus_{d\ge0}(F_dR)h^d\subset R[h]$ is generated by $h$ and the finitely many $h^{d_j}p_j$, where $d_j$ is the weight of the leading monomial of the $j$th minor. Subduction proves this last assertion by induction on weight. We have $T/hT=k[S]$, $T[h^{-1}]=R[h,h^{-1}]$, and $h$ is a nonzerodivisor. The $h$ grading makes $T$ a positively graded finite algebra with $T_0=k$, since all variable weights are positive. [step 4.2, algebra]

6.1 Apply step 1.2 to the local ring of $T$ at its homogeneous maximal ideal $M=T_{>0}$. Its quotient by $h$ is a localization of the normal ring in step 4.1, so $T_M$ is normal. For completeness, this implies that all of $T$ is normal: the normalization of a finite type domain over a field is finite, and for a positively graded domain it is a graded algebra. Thus the finite module $\overline T/T$ is graded and its support is a homogeneous closed subset. Any nonempty homogeneous closed subset of $\operatorname{Spec}T$, when $T_0=k$, contains $M$ (every proper homogeneous ideal is contained in $M$). Its localization at $M$ is zero, so the module is zero. Thus $T$ and its localization $R[h,h^{-1}]$ are normal. An element of $\operatorname{Frac}(R)$ integral over $R$ is then in $R[h,h^{-1}]\cap\operatorname{Frac}(R)=R$, as comparison of Laurent coefficients shows. This proves normality for $1\le m<t$. For $m=0$, the ideal of entries has quotient $k$; for $m\ge t$, the ideal is zero and its quotient is a polynomial ring, which is integrally closed. [step 4.1, step 5.1, step 1.2, algebra] ∎
