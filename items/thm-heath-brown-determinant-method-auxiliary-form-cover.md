---
id: thm-heath-brown-determinant-method-auxiliary-form-cover
kind: theorem
title: "Heath-Brown's determinant method covers bounded rational points by auxiliary forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-anisotropic-box-and-monomial-scale-parameters
  - def-coefficient-height-of-an-integral-form
  - def-degree-projective-hypersurface
  - def-formal-derivative-of-a-polynomial
  - thm-fundamental-theorem-of-arithmetic
  - thm-logarithm-derivative-and-integral
  - lem-lattice-point-count-in-a-box-from-a-lattice-basis
  - lem-many-primes-in-a-constant-factor-interval
  - lem-finite-field-projective-hypersurface-point-bound
  - lem-implicit-polynomial-lift-mod-prime-powers
  - lem-rational-zeros-of-a-nonabsolute-irreducible-form-lie-on-a-rational-form
  - lem-determinant-rank-drop-on-a-nonsingular-residue-class
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, Theorem 14"
      url: "https://arxiv.org/pdf/math/0405392v1"
    - title: "Per Salberger, Counting rational points on hypersurfaces of low dimension, Theorem 2.7"
      url: "https://www.numdam.org/article/ASENS_2005_4_38_1_93_0.pdf"
    - title: "D. R. Heath-Brown, Counting Rational Points on Algebraic Varieties, Lecture 3"
      url: "https://www.researchgate.net/publication/298863534_Counting_rational_points_on_algebraic_varieties"
    - title: "Per Salberger, Counting rational points on projective varieties, Theorem 1.2"
      url: "https://research.chalmers.se/publication/535246/file/535246_Fulltext.pdf"
---

## Statement

Let $n\ge3$, $d\ge1$, and $\varepsilon>0$. Let
$F\in\mathbb Z[x_1,\ldots,x_n]$ be a nonzero homogeneous form of degree $d$
that is irreducible over $\mathbb Q$, and let $B_1,\ldots,B_n\ge1$. The
projective hypersurface is the zero locus of $F$, with its reduced structure
and degree $d$. Put $V=\prod_iB_i$, let $T$ be the maximum of
$\prod_iB_i^{e_i}$ over the monomials $x_1^{e_1}\cdots x_n^{e_n}$ that occur
in $F$, and let $\|F\|$ be the maximum absolute coefficient. Then there exist
an integer $D=D(n,d,\varepsilon)$ and an integer $k\ge0$ such that

$$k\ll_{n,d,\varepsilon} \left(\frac{V^d}{T}\right)^{d^{-(n-1)/(n-2)}} V^\varepsilon\bigl(\log(2+\|F\|)\bigr)^{2n-3},$$

and nonzero integral homogeneous forms $F_1,\ldots,F_k$ of degrees at most
$D$ such that $F$ divides none of the $F_j$ in $\mathbb Q[x_1,\ldots,x_n]$
and every rational projective zero of $F$ with primitive normalized
representative $x$ satisfying $|x_i|\le B_i$ is a zero of at least one
$F_j$. The implicit constant is independent of the coefficients of $F$.

## Statement references

[Heath-Brown, Theorem 14 and its proof](https://arxiv.org/pdf/math/0405392v1)

[Salberger, Theorem 2.7, the isotropic covering interface](https://www.numdam.org/article/ASENS_2005_4_38_1_93_0.pdf)

[Heath-Brown, lecture-note exposition of the p-adic determinant method](https://www.researchgate.net/publication/298863534_Counting_rational_points_on_algebraic_varieties)

[Salberger, the distinct global determinant method](https://research.chalmers.se/publication/535246/file/535246_Fulltext.pdf)

## Facts & Assumptions

**Given:** The form $F$, the box sizes, and the parameters in the Statement.

[F1] [[def-anisotropic-box-and-monomial-scale-parameters]]: $N(F;B_1,\ldots,B_n)$,
$V$, and $T$ use the unique primitive normalized coordinate representative;
each occurring monomial contributes $\prod_iB_i^{e_i}$ to $T$.

[F2] [[def-coefficient-height-of-an-integral-form]]: $\|F\|$ is the maximum
absolute coefficient; dividing by the content gives a primitive integral form
with the same support and a no larger coefficient height.

[F3] [[def-degree-projective-hypersurface]]: A reduced projective hypersurface
defined by a nonconstant square-free homogeneous form has degree equal to the
degree of that form.

[F4] [[lem-lattice-point-count-in-a-box-from-a-lattice-basis]]: A full lattice
has finitely many points in any bounded coordinate box; in particular the
integer vectors in the box are finite.

[F5] [[lem-many-primes-in-a-constant-factor-interval]]: Given an integer $r$
and $P\ge Kr^2$, one can choose $r$ distinct primes in a fixed interval
$(AP,CP]$.

[F6] [[lem-finite-field-projective-hypersurface-point-bound]]: A nonzero
degree-$d$ form in $n$ variables over $\mathbb F_p$ has at most
$ndp^{n-2}$ projective zeros.

[F7] [[lem-determinant-rank-drop-on-a-nonsingular-residue-class]]: If the
prime-power divisor of every monomial evaluation determinant exceeds its
archimedean bound, then that determinant is zero and the evaluation matrix
loses rank.

[F8] [[lem-rational-zeros-of-a-nonabsolute-irreducible-form-lie-on-a-rational-form]]:
If $F$ is irreducible over $\mathbb Q$ but reducible over $\overline{\mathbb Q}$,
its geometric factors are distinct and its rational projective zeros lie on a
lower-degree rational form.

[F9] [[def-formal-derivative-of-a-polynomial]]: A formal partial derivative is
computed term by term after viewing the polynomial as univariate in the chosen
variable.

[F10] [[thm-fundamental-theorem-of-arithmetic]]: The product of distinct prime
divisors of a nonzero integer divides its absolute value.

[F11] [[thm-logarithm-derivative-and-integral]]: The natural logarithm is
increasing on positive reals and $\log x=\int_1^xdt/t$ for $x>0$.

## Proof

1.1 Let $F_0=F^{\mathrm{prim}}$. It has the same support, degree, rational
zero set, and value of $T$ as $F$, with $\|F_0\|\le\|F\|$ by [F2].
Moreover $T\le V^d$: for every support exponent $e$, $e_i\le d$ and
$B_i\ge1$, so $\prod_iB_i^{e_i}\le\prod_iB_i^d=V^d$. If $F$ is absolutely
irreducible then $F_0$ is square-free over $\overline{\mathbb Q}$; otherwise
[F8] says its geometric factors are distinct. Thus in either case the reduced
projective hypersurface has degree $d$ by [F3]. [F1, F2, F3, F8, given, algebra]

1.2 If $F_0$ is reducible over $\overline{\mathbb Q}$, [F8] supplies a nonzero
rational form $H$ of degree $e<d$ vanishing on every rational zero of $F_0$.
Clear denominators; $H$ remains nonzero and integral, and $F_0$ cannot divide
it because its degree is smaller. Choose $D\ge d$ and take this one form as
$F_1$. Since $V^d/T\ge1$, $V\ge1$, and $\log(2+\|F\|)\ge\log3$, the right
side of the asserted bound is bounded below by a positive constant, so $k=1$
satisfies the estimate after enlarging its implicit constant. [F1, F2, F8, step 1.1, construct, algebra]

1.3 It remains to treat the case where $F_0$ is irreducible over
$\overline{\mathbb Q}$. Put $H_0=\max_iB_i$,
$\mathcal B=2+H_0$, $L_F=\log(2+\|F_0\|)$, and
$L_B=\log(2+H_0)$. These logarithms exceed $1$. For every variable $x_j$
that occurs in $F_0$, the formal partial derivative $F_{0,x_j}$ is nonzero
because the coefficient field has characteristic zero. It has degree $d-1$,
so it is not divisible by $F_0$. Include every such derivative among the
auxiliary forms; at any point where the full gradient vanishes, all these
forms vanish. [F2, F9, given, algebra]

2.1 Let $D\ge d$ be an integer to be fixed below. On exponent vectors use
the translation-invariant order that first compares
$\sum_i e_i\log B_i$ and breaks ties lexicographically. Let $f^*$ be the
leading exponent of $F_0$ in this order. Then
$\prod_iB_i^{f_i^*}=T$. Put
$$\mathcal E=\{e\in\mathbb N^n:\sum_i e_i=D,\ e_i<f_i^* \text{ for at least one }i\},\quad M=|\mathcal E|,\quad s_i=\sum_{e\in\mathcal E}e_i.$$
The complement of $\mathcal E$ among all degree-$D$ exponents is
$f^*+\{g\in\mathbb N^n:\sum_i g_i=D-d\}$. Hence
$$M=\binom{D+n-1}{n-1}-\binom{D-d+n-1}{n-1} =\frac{dD^{n-2}}{(n-2)!}+O_{n,d}(D^{n-3}).$$
By symmetry, the sum of the $i$th exponents over all degree-$D$ monomials is
$\frac Dn\binom{D+n-1}{n-1}$. The excluded exponents have the form $f^*+g$,
so
$$s_i=\frac Dn\binom{D+n-1}{n-1} -\left(f_i^*+\frac{D-d}{n}\right)\binom{D-d+n-1}{n-1} =\frac{(d-f_i^*)D^{n-1}}{(n-1)!}+O_{n,d}(D^{n-2}).$$
Choose $f$ by
$\binom{f+n-2}{n-2}\le M<\binom{f+n-1}{n-2}$ and set
$\nu=(f+1)M-\binom{f+n-1}{n-1}$. The binomial expansions give
$f=d^{1/(n-2)}D+O_{n,d}(1)$ and
$$\nu=\frac{(n-2)d^{(n-1)/(n-2)}D^{n-1}}{(n-1)!}+O_{n,d}(D^{n-2}), \qquad \frac{s_i}{\nu}=\frac{d-f_i^*}{(n-2)d^{(n-1)/(n-2)}}+O_{n,d}(D^{-1}).$$
[F1, F2, F3, algebra]

2.2 The estimates in step 2.1 imply
$$M^{M/\nu}\prod_iB_i^{s_i/\nu} \ll_{n,d}\left(\frac{V^d}{T}\right)^{1/((n-2)d^{(n-1)/(n-2)})} V^{C_{n,d}/D}.$$
Indeed $M/\nu=O_{n,d}(D^{-1})$, so
$M^{M/\nu}=\exp(O_{n,d}(\log D/D))$ is bounded; the main exponents give
$(V^d/T)^{1/((n-2)d^{(n-1)/(n-2)})}$, and the $O(D^{-1})$ errors contribute
at most $V^{C_{n,d}/D}$. Choose $D$ sufficiently large, depending only on
$n,d,\varepsilon$, so $\nu\ge1$ and
$C_{n,d}/D\le\varepsilon/(2(n-2))$. Let
$$r=\left\lceil C'_{n,d}(L_F+L_B)\right\rceil,\qquad P=C_{n,d,\varepsilon} \left(\frac{V^d}{T}\right)^{1/((n-2)d^{(n-1)/(n-2)})} V^{\varepsilon/(2(n-2))}L_F^2L_B^2.$$
With the constant large enough, $P\ge Kr^2$ in [F5] and every prime in
$(2P,CP]$ exceeds the determinant threshold
$M^{M/\nu}\prod_iB_i^{s_i/\nu}$. [F5, step 2.1, algebra]

3.1 Select $r$ distinct primes $p_1,\ldots,p_r\in(2P,CP]$ using [F5].
For any counted point whose gradient is nonzero, choose an index $j$ with
$F_{0,x_j}(x)\ne0$. This is a nonzero integer of absolute value at most
$C_{n,d}\|F_0\|\mathcal B^{d-1}$, so the number of selected primes dividing
it is at most
$$\frac{\log(C_{n,d}\|F_0\|\mathcal B^{d-1})}{\log(2P)} \le C''_{n,d}(L_F+L_B)<r,$$
by taking $C'_{n,d}$ sufficiently large. Here [F10] bounds the product of the
distinct prime divisors by the derivative value. Thus some selected prime
does not divide that derivative, and the point reduces to a nonsingular
projective zero of $F_0$ modulo that prime. Points with zero gradient are
already covered by one of the derivative forms included in step 1.3. [F2, F5, F9, F10, step 1.3, step 2.2, algebra]

3.2 Fix one such prime $p$. Since $F_0$ is primitive, its reduction modulo
$p$ is nonzero. By [F6] there are at most $ndp^{n-2}$ projective zero classes
$t$. For each class, the integer representatives in the box are finite by
[F4]. If a class is nonsingular, normalize a nonzero coordinate of $t$ to
$1$. The homogeneous Euler identity
$\sum_i t_iF_{0,x_i}(t)=dF_0(t)=0$ shows that some other partial derivative
is nonzero: otherwise the derivative in the normalized coordinate would also
vanish, contradicting nonsingularity. Relabel the coordinates, and relabel the
corresponding $B_i$ and exponent coordinates, so that the normalized coordinate
is first and this derivative is second. These permutations leave $V$, $T$,
$\prod_iB_i^{s_i}$ and the determinant size unchanged. The residue-class
determinant lemma [F7] now applies to the correspondingly relabelled exponent
set $\mathcal E$ from step 2.1, since step 2.2 ensures its strict determinant
inequality. If the class
contains fewer than $M$ counted representatives, its evaluation matrix has
fewer rows than columns; otherwise every maximal minor vanishes by [F7]. In
either case the integer evaluation matrix has rank less than $M$, so its
rational kernel contains a nonzero vector. Clearing denominators yields a
nonzero integral homogeneous form $G_t$ supported on $\mathcal E$ that vanishes
on every counted representative in that class. [F1, F4, F6, F7, step 2.1, step 2.2, algebra]

3.3 The form $G_t$ is not divisible by $F_0$. If $G_t=F_0K$, choose the
leading exponent $k^*$ of $K$ in the translation-invariant weighted
lexicographic order of step 2.1. The leading exponent of the product is
$f^*+k^*$, with nonzero coefficient: if either exponent in a product term is
smaller than its corresponding leading exponent, translation invariance makes
the resulting sum smaller. Since $f^*+k^*$ is coordinatewise at least $f^*$,
it is not in $\mathcal E$, contradicting the support of $G_t$. [step 2.1, step 3.2, algebra]

4.1 There are at most $n$ singular-point derivative forms, and for every
selected prime at most $ndp^{n-2}\le C_{n,d}P^{n-2}$ nonsingular residue
classes, each producing one $G_t$. Thus the total number of forms is at most
$$n+C_{n,d}rP^{n-2}.$$
Since $r\ll_{n,d}L_F+L_B\ll L_FL_B$, the definition of $P$ gives
$$rP^{n-2}\ll_{n,d,\varepsilon} \left(\frac{V^d}{T}\right)^{d^{-(n-1)/(n-2)}} V^{\varepsilon/2}L_F^{2n-3}L_B^{2n-3}.$$
Also $H_0\le V$, so $L_B\le\log(2+V)$. For any $q\ge1$ and $\eta>0$,
the integral expression in [F11] gives
$\log(2+V)^q\ll_{q,\eta}V^\eta$: use
$\log x=\int_1^xdt/t\le (x^\alpha-1)/\alpha$ with $\alpha=\eta/q$ and
$x=2+V\le3V$. Taking $q=2n-3$ and $\eta=\varepsilon/2$ absorbs
$L_B^{2n-3}$ into another factor $V^{\varepsilon/2}$. The initial $n$ is
absorbed because $V^d/T\ge1$ and $L_F\ge\log3$. The forms cover every
counted point by steps 1.1, 3.1, and 3.2; their degree bound is the chosen
$D=D(n,d,\varepsilon)$, and replacing $\|F_0\|$ by $\|F\|$ only increases
the logarithmic factor. [F1, F2, F11, step 1.1, step 3.1, step 3.2, algebra] ∎
