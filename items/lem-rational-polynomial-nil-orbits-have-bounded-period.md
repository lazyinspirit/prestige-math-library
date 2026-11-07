---
dependency_level: 5
id: lem-rational-polynomial-nil-orbits-have-bounded-period
kind: lemma
title: "Rational polynomial nil orbits have bounded period"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-quantitative-malcev-polynomial-coordinate-calculus
  - lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates
  - lem-finite-nilpotent-exponential-and-bch-calculus
  - def-smooth-and-rational-polynomial-nilsequences
  - def-polynomial-sequence-on-a-filtered-group
  - def-malcev-basis-and-rationality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Appendix A, Lemmas A.11–A.12, printed pp. 534–535
---

## Statement

Fix dimension $m$ and filtration degree $d$. There is a constant $C=C_{m,d}$ with the following properties for every nilmanifold $G/\Gamma$ with a $B$-rational adapted Mal’cev basis, $B\geq2$, and second-kind coordinate map $\psi$. A group element is rational if and only if its coordinates are rational, and rational group elements form a group. If $x^r\in\Gamma$ with $1\leq r\leq Q$, then $\psi(x)\in E_x^{-1}\mathbb Z^m$ for an integer $E_x\leq C Q^C$. Conversely, $\psi(x)\in E^{-1}\mathbb Z^m$ implies that $x$ is $C(BE)^C$-rational. Products and inverses of $Q$-rational group elements are $C(BQ)^C$-rational, uniformly without any coordinate numerator bound. If $\gamma\in\operatorname{poly}(\mathbb Z,G_\bullet)$ and every $\gamma(n)\Gamma$ is a $Q$-rational point, then all ordinary-power coefficients of $\psi(\gamma(n))$ have a common denominator at most $C(BQ)^C$, and the right-coset sequence has an integer period at most $C(BQ)^C$. The per-point denominators $E_x$ need not be equal for different points.

## Statement references

[Green and Tao, Appendix A, Lemmas A.11–A.12](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

## Facts & Assumptions

[F1] Finite exponential coordinates and one-parameter subgroups are supplied by [[lem-finite-nilpotent-exponential-and-bch-calculus]].

[F2] Rational coordinate changes, multiplication and inversion are bounded-degree polynomials with coefficient heights and common coefficient denominators bounded by a fixed power of $B$, by [[lem-quantitative-malcev-polynomial-coordinate-calculus]].

[F3] The polynomial group and weighted binomial-coordinate descriptions are supplied by [[lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates]].

[F4] Rational elements, rational points, polynomiality and adapted coordinates have the conventions in [[def-smooth-and-rational-polynomial-nilsequences]], [[def-polynomial-sequence-on-a-filtered-group]] and [[def-malcev-basis-and-rationality]].

## Proof

**Given:** The data in the statement. All constants below depend only on $m,d$, and may be enlarged finitely many times.

1.1 For $x\in G$, put $F_x(t)=\psi(\exp(t\log x))$. Compute first-kind coordinates of $x$, multiply them by $t$, and change back to second-kind coordinates. Thus $F_x$ is a polynomial in $t$ of bounded degree $L$, with $F_x(0)=0$ and $F_x(n)=\psi(x^n)$ for integral $n$. Its coefficients are rational polynomials of bounded degree in $\psi(x)$ with common coefficient denominator at most $B^C$. These assertions use only a bounded number of compositions of the finite coordinate formulas. [F1, F2]

2.1 If $x^r\in\Gamma$, every coordinate of $F_x$ takes integer values at $0,r,2r,\ldots,Lr$. In the ordinary-power basis the evaluation matrix at these nodes is $V\operatorname{diag}(1,r,\ldots,r^L)$, where $V$ is the fixed Vandermonde matrix at $0,1,\ldots,L$. Choose a fixed integer $c_L$ clearing $V^{-1}$. Its inverse shows that every coefficient of $F_x$, and therefore $F_x(1)=\psi(x)$, belongs to $(c_Lr^L)^{-1}\mathbb Z^m$. This proves the per-point denominator bound independently of all numerators. [step 1.1, F4, algebra]

3.1 Conversely, if $\psi(x)\in E^{-1}\mathbb Z^m$, substituting these coordinates in the coefficient polynomials of $F_x$ gives a common coefficient denominator $S\leq B^C E^C$. Since the constant term is zero, every coordinate of $F_x(S)$ is integral, so $x^S\in\Gamma$. The same argument without quantitative bounds proves the qualitative converse. Coordinate multiplication and inversion take vectors with denominators $E_1,E_2$ to vectors with a denominator at most $B^C(E_1E_2)^C$. Applying the converse to these vectors proves closure under products and inversion and the quantitative rational-product assertions. In particular a lattice element may have arbitrarily large coordinates without affecting these bounds. [F2, F4, step 1.1, step 2.1, algebra]

4.1 The statement uses rationality of cosets, rather than necessarily of their displayed representatives. If $x\Gamma=y\Gamma$ and $y$ is $Q$-rational, then $x=y\lambda$ for $\lambda\in\Gamma$. By step 3.1, $x$ is $(BQ)^C$-rational. Thus for the polynomial sequence in the statement, each displayed value $\gamma(n)$ has rational coordinates with a denominator of size at most $(BQ)^C$. This is a bound on each denominator, not a single denominator selected over all rational points. [F4, step 3.1]

5.1 By the weighted coordinate description the coordinate polynomials of $\gamma$ have degree at most $d$. Sample them at $n=0,\ldots,d$. For these finitely many samples multiply their denominators from step 4.1, and multiply by the fixed denominator of the inverse Vandermonde matrix at $0,\ldots,d$. Interpolation gives one integer $E\leq(BQ)^C$ clearing every ordinary-power coefficient. The number of samples and coefficients is bounded in terms of $m,d$, so this product is a fixed power. No least common multiple over infinitely many values or over all $Q$-rational points is taken. [F3, step 4.1, algebra]

6.1 Form $H(n,r)=\psi(\gamma(n)^{-1}\gamma(n+r))$. Substitution in the rational multiplication and inversion formulas gives a polynomial in $n,r$ with one coefficient denominator $T\leq B^CE^C\leq(BQ)^C$. The polynomial identity $H(n,0)=0$ implies that every nonzero monomial has positive $r$ degree. Consequently $H(n,T)\in\mathbb Z^m$ for all integral $n$, including negative $n$. Thus $\gamma(n)^{-1}\gamma(n+T)\in\Gamma$, which is exactly $\gamma(n+T)\Gamma=\gamma(n)\Gamma$ for right cosets. This proves the claimed bounded period and completes all assertions. [F2, F4, step 5.1, algebra] ∎

## Source notes

The proof reconstructs A.11–A.12 from the local coordinate suppliers. The local full-text extraction of these lemmas was read; this does not assert a visual comparison of every PDF page. A.11(iii) cannot mean that one polynomial-size denominator works for all $Q$-rational points: even on the circle the denominators $1,\ldots,\lfloor Q\rfloor$ require their least common multiple. The proof instead uses per-point bounds and finitely many interpolation samples. The final difference is ordered for right cosets.
