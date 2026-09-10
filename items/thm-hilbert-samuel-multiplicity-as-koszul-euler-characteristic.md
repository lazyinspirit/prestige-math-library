---
id: thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic
kind: theorem
title: "degree-r Hilbert–Samuel coefficient as Koszul Euler characteristic"
status: published
origin: pipeline
deps: [def-koszul-euler-characteristic-and-degree-indexed-multiplicity, lem-koszul-homology-finite-length-for-an-ideal-of-definition, lem-bounded-finite-length-complex-euler-identities, lem-shifted-adic-koszul-filtration-euler-comparison, lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison, def-axiom-of-choice, cor-length-is-additive-in-short-exact-sequences]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Stacks Project, 43.15.4\u20136; local proof with stated module-relative and coefficient conventions"
      url: "https://stacks.math.columbia.edu/tag/0AZU"
    - title: "Hochster, Math 615 Winter 2012, pp.104\u2013108: Euler characteristics and the multiplicity theorem"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2024/10/615W12.pdf"
pipeline_run: phase-2-catchup-24
---

## Statement

Assume AC. Let $(R,\mathfrak m)$ be a commutative Noetherian local ring, $M$ a finite $R$-module and $I=(f_1,\ldots,f_r)$ with $\ell_R(M/IM)<\infty$. Use $P(n)=\ell_R(M/I^{n+1}M)$ for all sufficiently large $n$. Then $P=0$ or $\deg(P)\leq r$, and
$$e_r(I,M)=r![T^r]P(T)=\chi(K(f_1,\ldots,f_r;M)).$$
The degree-$r$ coefficient may vanish. This includes $M=0$, $I=R$ and $r=0$.

## Facts & Assumptions

**Given:** AC, a commutative Noetherian local ring $(R,\mathfrak m)$, a finite $R$-module $M$, and $I=(f_1,\ldots,f_r)$ with $\ell_R(M/IM)<\infty$.

[A1] We assume [[def-axiom-of-choice]].

[F1] Euler characteristic and every coefficient $e_j$ use the fixed $n+1$ convention: [[def-koszul-euler-characteristic-and-degree-indexed-multiplicity]].

[F2] All the Koszul homology modules here have finite length: [[lem-koszul-homology-finite-length-for-an-ideal-of-definition]].

[F3] Euler characteristic equals the alternating sum of finite-length terms: [[lem-bounded-finite-length-complex-euler-identities]].

[F4] A sufficiently deep shifted-adic quotient has the homology of $K$ and finite-length terms; for a unit ideal $K$ is acyclic: [[lem-shifted-adic-koszul-filtration-euler-comparison]].

[F5] The module-relative eventual rational polynomial exists uniquely: [[lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison]].

[F6] Finite length is additive and passes to quotients: [[cor-length-is-additive-in-short-exact-sequences]].

## Proof

**Proof technique:** direct.

1.1 If $M=0$, both sides are zero. If $I=R$, the polynomial is zero and the Koszul complex is acyclic. If $r=0$, then $I=0$ and $M$ has finite length; the complex is $M[0]$, its Euler characteristic is $\ell_R(M)$ and $P$ is that constant, so $e_0=\ell_R(M)$. The remaining argument concerns $r\geq1$ and a proper ideal. [F1, F4, F5, given]

1.2 Put $c=\ell_R(M/IM)$. For $j\geq0$, degree-$j$ monomials in the $r$ generators give a surjection $(M/IM)^{a_j}\to I^jM/I^{j+1}M$, where $a_j$ is the number of tuples $(\alpha_1,\ldots,\alpha_r)$ of nonnegative integers summing to $j$. Encode a tuple by $j$ marks with $r-1$ separators, including adjacent separators for zero entries. This is a bijection with choices of separator positions, giving $a_j=\binom{j+r-1}{r-1}$. Consequently $\ell_R(I^jM/I^{j+1}M)\leq c\binom{j+r-1}{r-1}$. [F6, given, algebra]

1.3 Choose $p>r$ deep enough for the shifted-adic comparison and for $P(p-i-1)=\ell_R(M/I^{p-i}M)$ for every $0\leq i\leq r$. This is possible since only finitely many inequalities are required. The term in cochain degree $-i$ of $K/F^pK$ is $(M/I^{p-i}M)^{\binom ri}$. Homology comparison and term cancellation therefore give $$\chi(K)=\sum_{i=0}^r(-1)^i\binom ri P(p-i-1).$$ The AC hypothesis supplies that in the finite-length and tail lemmas. [A1, F2, F3, F4, F5]

1.4 Define $\Delta Q(t)=Q(t)-Q(t-1)$. For $k=0$ the identity $\Delta^kQ(t)=\sum_{i=0}^k(-1)^i\binom kiQ(t-i)$ is the single term $Q(t)$. If it holds at $k$, subtract its value at $t-1$ from its value at $t$. The coefficient of $Q(t-i)$ becomes $(-1)^i(\binom ki+\binom k{i-1})=(-1)^i\binom{k+1}i$, with out-of-range binomials zero; the two endpoint coefficients are $1$ and $(-1)^{k+1}$. This proves the identity for every $k$ by induction. [algebra]

2.1 Summing along the $I$-adic filtration gives $0\leq\ell_R(M/I^{n+1}M)\leq c\sum_{j=0}^n\binom{j+r-1}{r-1}=c\binom{n+r}{r}$. For the last identity, tuples in $r$ variables of total at most $n$ correspond bijectively to tuples in $r+1$ variables of total exactly $n$, by adjoining the slack $n-j$; the same separator count applies. This holds for every $n\geq0$. [F6, step 1.2]

3.1 The eventual polynomial is nonnegative at all sufficiently large integers. If it is nonzero, its leading coefficient is positive: division by its highest power of $n$ makes the lower terms tend to zero, so the sign is eventually the leading sign. If its degree exceeded $r$, that same division would make the upper bound from the preceding step tend to zero while the polynomial tends to a positive leading coefficient. This is impossible. Hence $P=0$ or $\deg(P)\leq r$. [F5, step 2.1, algebra]

4.1 For $d\geq1$, the binomial expansion gives $t^d-(t-1)^d=dt^{d-1}$ plus terms of degree at most $d-2$; a constant has difference zero. By linearity, $r$ differences annihilate every monomial of degree less than $r$ and take $t^r$ to $r!$. The degree bound thus gives $\Delta^rP=r![T^r]P(T)$, including the zero polynomial. At $t=p-1$ the preceding finite-difference identity is precisely the Euler sum, so it equals $e_r(I,M)$. Together with the initial cases this proves the theorem. [F1, step 1.1, step 3.1, step 1.3, step 1.4, algebra] ∎

## Remarks

Source locators: Stacks 43.15.4 (finite differences), Theorem 43.15.5 and Remark 43.15.6; Hochster printed pp.106–108. In the present convention the quotient by $I^{p-i}$ contributes $P(p-i-1)$, not $P(p-i)$. The monomial count proves the degree bound independently of a dimension theorem. No parameter-reduction result is a premise.
