---
id: thm-qa-23-polynomial-root-isolation-correctness
kind: theorem
title: Correctness and termination of certified complex-polynomial root isolation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - alg-qa-23-polynomial-root-isolation
  - lem-qa-23-sturm-root-counting
  - lem-qa-23-polynomial-interval-sign-certificate
  - thm-polynomial-division-algorithm-over-a-field
  - def-formal-derivative-of-a-polynomial
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - lem-complex-conjugation-and-modulus-laws
  - thm-polar-form-with-unique-principal-argument
  - thm-complex-numbers-form-a-field
  - def-real-numbers
  - thm-reals-field
  - thm-reals-ordered-field
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Colm Ó Dúnlaing, Mathematics 1263: Introduction to Numerical Analysis, §2, Sturm's Theorem"
      url: "https://www.maths.tcd.ie/~odunlain/1263/book.pdf"
    - title: "Sturm's Theorem, EPFL lecture note"
      url: "https://lara.epfl.ch/w/_media/sar10/sturms_proof.pdf"
---

## Statement

For every nonzero rational or exact-algebraic complex polynomial $p$ and integer $b\ge1$, under the exact algebraic operation model declared in [[alg-qa-23-polynomial-root-isolation]], the algorithm terminates and returns pairwise-disjoint open rational rectangles of Euclidean diameter at most $2^{-b}$, each containing exactly one distinct root and together containing every root. Each rectangle carries the algebraic root descriptor and the original multiplicity. The supplied `REALROOTS` and `SIGNCERT` routines also terminate and return the stated exact real-root and interval-sign certificates. No bit-complexity bound is asserted.

## Facts & Assumptions

**Given:** A nonzero polynomial $p\in\mathbb C[z]$ with rational or exact-algebraic coefficients and an integer $b\ge1$, with the exact arithmetic and comparison operations of [[alg-qa-23-polynomial-root-isolation]].

[F1] [[alg-qa-23-polynomial-root-isolation]] defines square-free reduction, a strict Cauchy bound, admissible rectangles, the signed positive-ray crossing count, subdivision, multiplicity testing, `REALROOTS`, and `SIGNCERT`.

[F2] [[lem-qa-23-sturm-root-counting]]: for a square-free real polynomial and root-free endpoints, the signed-remainder variation drop equals the number of distinct roots in the open interval.

[F3] [[thm-polynomial-division-algorithm-over-a-field]]: division over a field gives a quotient and a remainder of strictly smaller degree; a polynomial vanishing at $\zeta$ is divisible by $z-\zeta$.

[F4] [[def-formal-derivative-of-a-polynomial]]: the formal derivative of $\sum_j a_jz^j$ is $\sum_{j\ge1}j a_jz^{j-1}$.

[F5] [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]: every nonconstant complex polynomial has a complex root.

[F7] [[lem-complex-conjugation-and-modulus-laws]]: $|z+w|\le|z|+|w|$, $|zw|=|z||w|$, and $z\overline z=|z|^2$.

[F8] [[thm-polar-form-with-unique-principal-argument]]: every nonzero $z$ has a unique polar representation $z=|z|(\cos\theta+i\sin\theta)$ with $-\pi<\theta\le\pi$.

[F9] [[lem-qa-23-polynomial-interval-sign-certificate]]: a nonzero real polynomial has constant sign on each open interval between consecutive real roots; checking one point in each root-free gap and checking the endpoints certifies its sign on $[-1,1]$.

[F10] [[thm-complex-numbers-form-a-field]]: $\mathbb C$ is a field, so the complex polynomial Euclidean operations and coefficient arithmetic are defined.

[F11] [[thm-reals-field]] and [[thm-reals-ordered-field]]: $\mathbb R$ is a totally ordered field, so the real-root isolation, exact order tests, and sign comparisons are defined.

## Proof

1.1 The Euclidean gcd in [F1] terminates because each nonzero remainder has smaller degree by [F3]. By induction on degree, [F5] and [F3] factor $p$ over the field $\mathbb C$ [F10]: take a root, divide by its linear factor, and repeat on the lower-degree quotient. At a root of multiplicity $m$, write $p(z)=(z-\zeta)^m h(z)$ with $h(\zeta)\ne0$. Differentiation by [F4] gives $p^{(j)}(\zeta)=0$ for $j<m$ and $p^{(m)}(\zeta)=m!h(\zeta)\ne0$. Also $p'$ has multiplicity exactly $m-1$ at $\zeta$, so $p/\gcd(p,p')$ contains that root once. Thus square-free reduction preserves exactly the distinct roots, and the least derivative order with no common root at $\zeta$ is its original multiplicity. It remains to verify the membership implementation. [F1, F3, F4, F5, F10, algebra]

1.2 Put $M=\max_{j<n}|a_j/a_n|$ for a degree-$n$ polynomial. If $|z|>1+M$, then $|z|>1$ and $\sum_{j<n}|a_jz^j|\le |a_n|M\sum_{j<n}|z|^j=|a_n|M\frac{|z|^n-1}{|z|-1}<|a_n||z|^n.$ Hence $p(z)\ne0$. The exact comparisons and increasing rational enumeration in [F1] therefore find a strict rational bound; any rectangle whose two half-widths exceed that bound contains every root in its interior. [F1, F7, algebra]

1.3 For nonconstant square-free $q$, each root has finite real and imaginary coordinates, so only finitely many vertical or horizontal offsets pass through a root. Only finitely many horizontal offsets can make $\operatorname{Im}q(t+iy)$ identically zero as a polynomial in $t$: otherwise every coefficient polynomial in $y$ would vanish identically, which would force $\operatorname{Im}q(x+iy)$ to be the zero bivariate polynomial; writing $q$ first on the real axis and then differentiating its coefficient expansion in $y$ shows this is impossible for nonconstant $q$. The vertical case is identical. Each vertex condition $\operatorname{Im}q(\pm X\pm iY)=0$ is the zero set of a nonzero polynomial in $(X,Y)$. A nonzero bivariate polynomial cannot vanish on an open rectangle: fixing one coordinate on an interval makes each coefficient polynomial in the other coordinate vanish on an interval and hence identically. The finitely many forbidden coordinate lines and vertex zero sets thus cannot fill the open rational search region $X,Y>B$. Rational pairs are dense there, so the outer-bound enumeration in [F1] finds an admissible rectangle. [F1, F5, algebra]

1.4 On each edge, simultaneous vanishing of $R$ and $I$ is equivalent to a root of their gcd. The vertex test excludes endpoint roots, so [F2] decides whether such a root lies in the edge interior. At each zero of $I$, boundary-root-freeness implies $R\ne0$; the sign of this exact nonzero algebraic value is decidable by refinement, and the square-free Sturm sequence isolates every zero of $I$. Thus every crossing and its direction in [F1] is finitely and exactly determined. [F1, F2, F3, algebra]

1.5 `REALROOTS` is correct at each subdivision by [F2]: its square-free polynomial first records any roots at $-1$ and $1$, divides out those endpoint linear factors using [F3], and applies Sturm to the residual, whose endpoints are root-free. The selected interior cut is not a root, so the two open children partition the residual roots. The polynomial has finitely many distinct roots by repeated division and degree decrease [F3]. If there are at least two, the minimum separation of its finite root set is positive in the real order [F11]; repeated bisection eventually makes every positive-count interval narrower than both that separation and the requested width. Each level has finitely many intervals, so the recursion terminates and outputs disjoint isolators for all real roots in $(-1,1)$, together with the endpoint roots tested separately. [F1, F2, F3, F11, algebra]

2.1 In a parent rectangle already satisfying the admissibility tests, the same finite-exclusion argument gives an admissible cut pair in the product of the two middle-third intervals. Cut coordinates that pass through roots are finite in number; offsets making an edge imaginary restriction identically zero are finite; vertex-zero conditions along an old side are nonzero univariate polynomials because that side's imaginary restriction is not identically zero; and conditions at a new cut intersection are nonzero bivariate polynomials by the argument in step 1.3. Their finite union has empty interior. The exhaustive dyadic enumeration therefore finds cuts for which all four child boundaries satisfy the exact tests. [F1, step 1.3, algebra]

2.2 Let $\gamma(t)=q(z(t))$ traverse an admissible rectangle counterclockwise. Each edge restriction is polynomial, avoids zero, has nonzero imaginary-part polynomial, and has no endpoint with zero imaginary part. It therefore meets the positive real ray only at the finitely many interior zeros isolated in step 1.4. For $w\notin[0,\infty)$, define $\operatorname{Arg}_+(w)$ as the unique $\theta\in(0,2\pi)$ in its polar representation; existence follows by applying [F8] to $-w$ and adding $\pi$. This branch is continuous: on each open semicircle avoiding the cut, the unit-circle parametrization is one-to-one, and the chord identity $|e^{i\theta}-e^{i\theta_0}|=2|\sin((\theta-\theta_0)/2)|$ shows that nearby circle points have nearby angles. Thus on every subarc between positive-ray intersections, $\operatorname{Arg}_+(\gamma(t))$ is continuous. At an upward crossing its one-sided values approach $2\pi$ and $0$, so adding $2\pi$ to the subsequent branch continues the lift and increases its integer offset by one. A downward crossing decreases the offset by one, and a non-crossing contact leaves it unchanged. The curve is closed and its starting vertex is off the ray, so the lifted argument's total increment divided by $2\pi$ is exactly the signed crossing sum in [F1]. [F1, F8, step 1.4]

2.3 For nonzero real $h$, `REALROOTS` returns all roots in $[-1,1]$ by step 1.5, and the additional isolator refinement terminates: the finite distinct interior roots have positive distances from each other and from $-1,1$, and each refined interval contracts by at least $2/3$. Thus their closures eventually separate strictly. Every component between consecutive actual roots contains the rational sample in the gap between their isolators; the two outer components are treated the same way. By [F9] this sample determines the sign on that whole component, including the portions inside isolators up to their roots; the root values themselves are zero and the endpoints are tested separately. Thus the routine accepts exactly when $h\ge0$ on the whole interval. The $h=0$ branch accepts directly. [F1, F9, F11, step 1.5, algebra]

3.1 Step 1.1 factors $q(z)=c\prod_j(z-\zeta_j)$ over its distinct roots. Continuous argument lifts add under multiplication, so the winding increment of $q$ is the sum of the increments of these linear factors. Fix one root $\zeta$ not on the rectangle boundary. Enumerate rational directions $(r,s)$ with $(r,s)\ne(0,0)$ by increasing positive denominator and then numerator pair, and take the first whose line is not parallel to a rectangle side and whose line through $\zeta$ contains no rectangle vertex. Only finitely many directions are forbidden, while rational directions are dense, so this search terminates. Normalize the chosen vector to a unit scalar $u$; its norm is nonzero. Rotating the curve $z-\zeta$ by the constant unit scalar $\overline u$ does not change its total argument increment, and makes the chosen direction the positive real ray. If $\zeta$ is inside the convex rectangle, the ray leaves it exactly once; counterclockwise orientation puts the interior on the left, so this outward crossing is upward and contributes $+1$. If $\zeta$ is outside, the ray either misses the rectangle or enters and exits it, contributing a downward crossing and an upward crossing whose signs cancel. Thus the winding increment of $z-\zeta$ divided by $2\pi$ is $1$ exactly for an interior root and $0$ otherwise. Summing over the distinct roots shows that the signed crossing count of $q$ in step 2.2 is exactly the number of roots inside the rectangle. Since $q$ is square-free, this is the number of distinct roots. [F1, F8, step 1.1, step 2.2, algebra]

4.1 For a retained rectangle containing the unique root $\zeta$ of $q$, let $h=\gcd(q,p^{(m)})$, $1\le m\le n$. This gcd is nonzero. A constant $h$ has zero roots; otherwise $h$ divides square-free $q$, so it is square-free and has no boundary root. At a vertex $v$, $\operatorname{Im}((1+it)h(v))=\operatorname{Im}h(v)+t\operatorname{Re}h(v)$ vanishes for at most one real $t$, since $h(v)\ne0$. On an edge write $h=R+iI$. The polynomial $I+tR$ can be identically zero for at most one $t$: two such values would force $R=I=0$, contradicting boundary-root-freeness. Thus the four vertices and four edges exclude at most eight scalars, and one of $0,\ldots,8$ passes all exact tests. The nonzero scalar $1+it$ preserves roots and square-freeness. Steps 1.4, 2.2 and 3.1 therefore count its roots on the unchanged rectangle, giving one exactly when $h(\zeta)=0$. Each derivative test terminates, and step 1.1 gives the least zero-count order as the original multiplicity, by $m=n$. For `REALROOTS`, root-free interval endpoints also remain root-free for gcd divisors; [F2] decides interior membership, constants have zero count, and endpoint singletons use direct derivative evaluation. [F1, F2, F3, step 1.1, step 1.4, step 2.2, step 3.1, algebra]

4.2 A cut line contains no root by step 2.1, and each parent boundary is root-free by admissibility. The four child interiors therefore partition the parent's roots without omission or duplication; their exact counts are correct by step 3.1. Discarding count-zero children and continuing preserves exactly the roots inside the initial rectangle, which contains all roots by step 1.2. [F1, step 1.2, step 2.1, step 3.1]

5.1 Each subdivision cut lies strictly inside the corresponding middle third, so each child's side lengths are at most $2/3$ of its parent's. The finite set of distinct roots has a positive minimum pairwise distance when it has at least two elements. After finitely many levels, every rectangle has diameter below that separation and below $2^{-b}$; hence it cannot contain two roots. If there is one root, only the precision condition is needed. The finite four-child tree then terminates. Every retained rectangle contains exactly one root, their open interiors are pairwise disjoint, and step 4.1 supplies the correct multiplicity. [F1, step 3.1, step 4.1, step 4.2, algebra] ∎









