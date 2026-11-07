---
id: thm-selmer-cubic-is-everywhere-locally-soluble-but-has-no-rational-point
kind: theorem
title: "Selmer's cubic is everywhere locally soluble but has no rational point"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - cor-p-adic-simple-root-lifting
  - thm-p-adic-newton-criterion
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
  - thm-eisenstein-irreducibility-criterion
  - thm-jacobian-criterion-affine-variety
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - thm-ring-of-integers-free-of-rank-degree
  - def-integral-basis-and-power-integral-basis
  - def-discriminant-of-a-number-field-basis-and-order
  - cor-order-index-discriminant-formula
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - cor-contraction-of-maximal-ideals-integral-extension
  - def-embedding-dimension-and-regular-local-ring
  - thm-p-adic-completion-is-a-field
  - thm-p-adic-absolute-value-is-nonarchimedean
  - cor-zp-is-the-valuation-ring-of-qp
  - lem-p-adic-valuation-on-q
  - thm-cauchy-for-finite-abelian-groups
  - thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient
  - thm-cyclotomic-polynomials-are-irreducible-over-the-rationals
  - thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity
  - cor-dimension-preserved-by-integral-extensions
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-valuation-ring-is-integrally-closed
  - cor-ring-of-integers-is-a-dedekind-domain
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-dedekind-kummer-prime-factorisation
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - def-ideal-class-group-of-a-domain
  - def-generated-and-principal-ideals
  - def-absolute-norm-of-an-ideal
  - thm-ideal-norm-is-multiplicative
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-minkowski-bound-for-ideal-classes
  - thm-dirichlet-unit-theorem
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed through the ring-of-integers, Dedekind, Minkowski, and Dirichlet suppliers; it is not used in the p-adic lifting arguments."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Keith Conrad, Selmer's Example"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/selmerexample.pdf"
      locator: "Complete local-solubility argument and algebraic-number-theory descent, pp. 1–5; the local proof and the index-at-2-and-3 step are reconstructed below."
verification: {}
---

## Statement

Assume AC. The smooth projective plane cubic $C:3X^3+4Y^3+5Z^3=0$ over $\mathbb Q$
has a point over $\mathbb R$ and over every $\mathbb Q_p$, but has no
$\mathbb Q$-rational point.

## Statement references

[[cor-p-adic-simple-root-lifting|Simple-root lifting over $\mathbb Z_p$]]

[[thm-p-adic-newton-criterion|Newton's criterion over $\mathbb Q_p$]]

[[thm-multiplicative-group-of-a-finite-field-is-cyclic|Finite-field multiplicative group is cyclic]]

[[thm-eisenstein-irreducibility-criterion|Eisenstein irreducibility criterion]]

[[thm-jacobian-criterion-affine-variety|Jacobian criterion on affine charts]]

[[cor-order-index-discriminant-formula|Order-index discriminant formula]]

[[thm-one-dimensional-regular-local-rings-are-dvrs|One-dimensional regular local rings are DVRs]]

[[cor-ring-of-integers-is-a-dedekind-domain|Ring of integers is Dedekind]]

[[thm-dedekind-kummer-prime-factorisation|Dedekind–Kummer prime ideal factorization]]

[[thm-minkowski-bound-for-ideal-classes|Minkowski bound for ideal classes]]

[[thm-dirichlet-unit-theorem|Dirichlet unit theorem]]

## Facts & Assumptions

**Given:** AC for the number-field ideal and unit results, and the projective
cubic $C$ in the Statement.

[A1] AC is an explicit hypothesis of the ring-of-integers-as-Dedekind,
Minkowski, and Dirichlet inputs below; it is not used in the local Hensel
arguments. ([[def-axiom-of-choice]],
[[cor-ring-of-integers-is-a-dedekind-domain]],
[[thm-minkowski-bound-for-ideal-classes]],
[[thm-dirichlet-unit-theorem]])

[F1] A simple root modulo $p$ of a polynomial in $\mathbb Z_p[T]$ lifts to a
$p$-adic root; if $|f(a)|_p<|f'(a)|_p^2$, Newton's criterion gives a root in
$\mathbb Z_p$. ([[cor-p-adic-simple-root-lifting]],
[[thm-p-adic-newton-criterion]])

[F2] For a finite field $\mathbb F_p$, the multiplicative group is cyclic of
order $p-1$. Thus cubing is bijective if $p\not\equiv1\pmod3$ and has image
of index three if $p\equiv1\pmod3$. ([[thm-multiplicative-group-of-a-finite-field-is-cyclic]])

[F3] The ring of integers of a number field is a free integral lattice of
rank its degree; the discriminant of an order is related to the field
discriminant by the square of the index. ([[def-number-field]],
[[def-ring-of-integers-of-a-number-field]],
[[thm-ring-of-integers-free-of-rank-degree]],
[[def-integral-basis-and-power-integral-basis]],
[[def-discriminant-of-a-number-field-basis-and-order]],
[[cor-order-index-discriminant-formula]],
[[thm-number-field-discriminant-is-well-defined-and-nonzero]])

[F4] The valuation group of $\mathbb Q_p^\times$ is $\mathbb Z$, and
$\mathbb Z_p$ is its valuation ring, hence a Noetherian DVR. Indeed, by density
choose a rational $q$ with $|x-q|_p<|x|_p$ for nonzero $x\in\mathbb Q_p$;
the ultrametric inequality gives $|q|_p=|x|_p$, and rational values are powers
of $p$. Every nonzero ideal of the valuation ring is then generated by an
element of least valuation. ([[thm-p-adic-completion-is-a-field]],
[[thm-p-adic-absolute-value-is-nonarchimedean]],
[[lem-p-adic-valuation-on-q]], [[cor-zp-is-the-valuation-ring-of-qp]])

[F12] A one-dimensional regular Noetherian local domain is a DVR and is
integrally closed. Dimension is preserved by an injective integral extension,
and a prime of a ring in an integral extension is maximal exactly when its
contraction is maximal. ([[def-embedding-dimension-and-regular-local-ring]],
[[cor-dimension-preserved-by-integral-extensions]],
[[cor-contraction-of-maximal-ideals-integral-extension]],
[[thm-one-dimensional-regular-local-rings-are-dvrs]],
[[thm-valuation-ring-is-integrally-closed]])

[F13] If a prime divides the order of a finite abelian group, the group has
an element of that prime order. ([[thm-cauchy-for-finite-abelian-groups]])

[F5] Under AC, the ring of integers is Dedekind and its nonzero ideals have
unique prime-ideal factorization. ([[cor-ring-of-integers-is-a-dedekind-domain]],
[[thm-number-field-integral-ideal-factorisation-in-zf]])

[F6] If the power-basis index is one, the factorization of a rational prime
in the ring of integers is read from the factorization of the minimal
polynomial modulo that prime; the residue degree is the degree of the
irreducible factor. ([[thm-dedekind-kummer-prime-factorisation]],
[[def-prime-above-and-residue-degree]], [[def-ramification-index]])

[F7] Ideal norms are multiplicative, and the norm of a principal ideal
$(u)$ is the absolute field norm $|N_{L/\mathbb Q}(u)|$.
([[def-absolute-norm-of-an-ideal]], [[thm-ideal-norm-is-multiplicative]],
[[thm-principal-ideal-norm-is-absolute-field-norm]])

[F8] Every ideal class of a degree-$n$ number field of signature
$(r_1,r_2)$ and discriminant $d_L$ contains an integral ideal of norm at most
$(4/\pi)^{r_2}(n!/n^n)\sqrt{|d_L|}$. ([[def-ideal-class-group-of-a-domain]],
[[thm-minkowski-bound-for-ideal-classes]])

[F9] Under AC, the unit group of a number field of signature $(r_1,r_2)$ is
$\mu(L)\times\mathbb Z^{r_1+r_2-1}$. For a primitive $m$-th root of unity,
$\Phi_m$ is its irreducible minimal polynomial and has degree $\varphi(m)$.
([[def-axiom-of-choice]], [[thm-dirichlet-unit-theorem]],
[[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]],
[[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]],
[[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]])

[F10] A primitive integer polynomial satisfying Eisenstein's divisibility
conditions at a prime is irreducible over $\mathbb Q$.
([[thm-eisenstein-irreducibility-criterion]])

[F11] At a closed point of an affine hypersurface over the perfect field
$\overline{\mathbb Q}$, the Jacobian rank criterion detects regularity and
hence smoothness. ([[thm-jacobian-criterion-affine-variety]])

## Proof

**Proof technique:** construct local points by Hensel lifting, then transform
a hypothetical rational point into a norm-form equation and descend ideals in
$\mathbb Q(\sqrt[3]{6})$.

**Given:** AC and the supplier facts [F1]–[F13].

1.1 The cubic is smooth over $\overline{\mathbb Q}$. On the chart $X\ne0$
its equation is $3+4y^3+5z^3=0$, whose partial derivatives vanish only at
$y=z=0$, where the equation is false; on the chart $Y\ne0$ the equation
$3x^3+4+5z^3=0$ has the same property, and on $Z\ne0$ the equation
$3x^3+4y^3+5=0$ has it as well. By [F11] each chart is smooth. Over
$\mathbb R$, set $Y=0$, $Z=-1$, and choose $X=\sqrt[3]{5/3}$; this gives
$3X^3+4Y^3+5Z^3=0$. [F11, given, algebra]

1.2 For $p=2$, the polynomial $T^3-3$ has root $1$ modulo $2$, and its
derivative $3T^2$ is $1$ there, so this root is simple. [F1] lifts it to
$x\in\mathbb Z_2$ with $x^3=3$. The point $(x,-1,-1)$
satisfies the cubic because $3x^3-4-5=9-9=0$. [F1, algebra]

1.3 For $p=3$, put $f(T)=T^3-5/4$ and $a=2$. Then
$v_3(f(2))=3$ and $v_3(f'(2))=1$, so
$|f(2)|_3=3^{-3}<3^{-2}=|f'(2)|_3^2$. By [F1] there is $y\in\mathbb Z_3$
with $y^3=5/4$, and $(0,y,-1)$ lies on $C$. [F1, algebra]

1.4 For $p=5$, $T^3-3$ has root $2$ modulo $5$, and its derivative
$3T^2$ is $2$ there, so this root is simple. It lifts to a root
$x\in\mathbb Z_5$ by [F1]. Then $(x,-1,-1)$ lies on $C$ because
$3x^3-9=0$. [F1, algebra]

1.5 Let $p\ne2,3,5$. If $3$ is a cube modulo $p$, its nonzero cube root
is simple since $3\ne p$; [F1] lifts $x^3=3$ and $(x,-1,-1)$ lies on
$C$. If $3$ is not a cube, [F2] implies $p\equiv1\pmod3$ and the cube
subgroup has index three. The cosets are represented by $1,3,9$, because
the class of $3$ is nontrivial in a quotient group of order three. Exactly
one of $5$, $5/3$, or $15$ is therefore a cube modulo $p$.
If $5$ is a cube, Hensel lifting gives $y^3=5$ and $( -y,y,-1)$ lies on
$C$. If $5/3$ is a cube, lifting gives $x^3=5/3$ and $(x,0,-1)$ lies on
$C$. If $15$ is a cube, lifting gives $t^3=15$ and $(3t,5,-7)$ lies on
$C$, since $81(15)+4(125)-5(343)=0$. These cases prove local
solubility at every finite place. [F1, F2, step 1.2, step 1.3, step 1.4,
algebra]

2.1 Suppose a rational projective point existed. Set $X=2Y_0$, $Y=X_0$,
$Z=-Z_0$ for its coordinates $(X_0:Y_0:Z_0)$. This invertible rational
change transforms the equation into
$$X^3+6Y^3=10Z^3.$$
Clearing denominators and dividing by the common gcd gives a primitive
integer solution $(X,Y,Z)$, meaning $\gcd(X,Y,Z)=1$. [given, construct,
algebra]

2.2 No coordinate can vanish: if $X=0$, then $6Y^3=10Z^3$ and
$(Y/Z)^3=5/3$; if $Y=0$, then $(X/Z)^3=10$; if $Z=0$, then
$(X/Y)^3=-6$. A rational cube has every prime valuation divisible by
three, while each displayed right side has a prime valuation not divisible
by three, so all three coordinates are nonzero. If a prime $q\ne2,3,5$
divides $X,Y$, the equation forces $q^3\mid10Z^3$ and hence $q\mid Z$;
if it divides $X,Z$, then $q^3\mid6Y^3$ and $q\mid Y$; if it divides
$Y,Z$, then $q^3\mid X^3$ and $q\mid X$. For $q=2$, if it divides
$X,Y$, the left side has valuation at least $3$, so
$1+3v_2(Z)\ge3$ and $2\mid Z$; if it divides $X,Z$, then
$6Y^3=10Z^3-X^3$ has valuation at least $3$, so
$1+3v_2(Y)\ge3$ and $2\mid Y$; if it divides $Y,Z$, then
$X^3=10Z^3-6Y^3$ has valuation at least $4$, so $2\mid X$. For
$q=3$, if it divides $X,Y$, then the left side has valuation at least
$3$, so $3v_3(Z)\ge3$ and $3\mid Z$; if it divides $X,Z$, then
$6Y^3=10Z^3-X^3$ has valuation at least $3$, so
$1+3v_3(Y)\ge3$ and $3\mid Y$; if it divides $Y,Z$, then
$X^3=10Z^3-6Y^3$ has valuation at least $3$, so $3\mid X$. For
$q=5$, if it divides $X,Y$, then $1+3v_5(Z)\ge3$ and $5\mid Z$;
if it divides $X,Z$, then $6Y^3=10Z^3-X^3$ has valuation at least
$3$, so $5\mid Y$; if it divides $Y,Z$, then
$X^3=10Z^3-6Y^3$ has valuation at least $3$, so $5\mid X$. Every
prime dividing two coordinates would therefore divide all three, contrary
to primitiveness. Hence the coordinates are pairwise coprime. [step 2.1,
algebra]

2.3 Reducing modulo $2$ gives $X$ even; pairwise coprimality then makes $Y$
odd. The two summands on the left have $2$-adic valuations at least $3$
and exactly $1$, respectively, so the left has valuation $1$ and the right
has valuation $1+3v_2(Z)$; hence $Z$ is odd. Modulo $3$, the equation gives
$X^3\equiv Z^3$, so $3$ divides neither $X$ nor $Z$ by pairwise
coprimality. Modulo $5$, $X^3+Y^3\equiv0$; cubing is bijective on
$\mathbb F_5^\times$ by [F2], hence $X\equiv-Y\pmod5$, and $5$ divides
neither $X$ nor $Y$. [F2, step 2.2, algebra]

3.1 Let $\alpha=\sqrt[3]{6}$ and $L=\mathbb Q(\alpha)$. The polynomial
$T^3-6$ is Eisenstein at $2$ by [F10], so it is the minimal polynomial and
$(1,\alpha,\alpha^2)$ is a $\mathbb Q$-basis. The traces are
$\operatorname{Tr}(1)=3$, $\operatorname{Tr}(\alpha)=
\operatorname{Tr}(\alpha^2)=0$, $\operatorname{Tr}(\alpha^3)=18$, and
$\operatorname{Tr}(\alpha^4)=0$. The trace matrix of this basis is
$$\begin{pmatrix}3&0&0\\0&0&18\\0&18&0\end{pmatrix},$$
so its discriminant is $-972=-2^2 3^5$. [F3, F10, algebra]

3.2 The order-index formula [F3] implies that any prime dividing
$[\mathcal O_L:\mathbb Z[\alpha]]$ is $2$ or $3$. Fix $p\in\{2,3\}$ and
put $R_p=\mathbb Z_p[\alpha]$. The polynomial $T^3-6$ has no root in
$\mathbb Q_p$, since a root $r$ would satisfy $3v_p(r)=v_p(6)=1$, impossible
for the integer-valued valuation in [F4]. A reducible cubic over a field has
a root, so $T^3-6$ is irreducible over $\mathbb Q_p$ and $R_p$ is a domain.
It is finite and integral over the DVR $\mathbb Z_p$. Modulo $p$ its
presentation is $\mathbb F_p[T]/(T^3)$, so it has a unique maximal ideal
$\mathfrak m=(p,\alpha)$ by the maximal-ideal contraction fact in [F12].
Since $\alpha^3=6=pu$ for a unit $u\in\mathbb Z_p^\times$,
$\mathfrak m=(\alpha)$. Its dimension is one by integral-extension
dimension, and it is Noetherian because it is module-finite over the
Noetherian DVR $\mathbb Z_p$. The class of $\alpha$ spans
$\mathfrak m/\mathfrak m^2$ and is
nonzero, since $\alpha=\alpha^2v$ would make $\alpha$ a unit; thus the
embedding dimension is one and $R_p$ is regular. By [F12] it is a DVR and
integrally closed. If $p$ divided the global order index, [F13] would give
$\beta\in\mathcal O_L\setminus\mathbb Z[\alpha]$ with
$p\beta=a+b\alpha+c\alpha^2$ for integers $a,b,c$ not all divisible by
$p$. The element $\beta$ is integral over $\mathbb Z_p$, so integrally
closedness gives $\beta\in R_p$; uniqueness of the basis
$1,\alpha,\alpha^2$ over $\mathbb Z_p$ then forces $a/p,b/p,c/p\in
\mathbb Z_p$, hence $p\mid a,b,c$, contradiction. Thus neither $2$ nor
$3$ divides the index and $\mathcal O_L=\mathbb Z[\alpha]$.
[A1, F3, F4, F12, F13, step 3.1, algebra]

3.3 By [F5] the ring $\mathcal O_L$ is Dedekind, and [F6] now applies.
Modulo $2$ and $3$, $T^3-6$ is $T^3$; modulo $5$ it is
$(T-1)(T^2+T+1)$. The quadratic takes the respective values
$1,3,2,3,1$ at $0,1,2,3,4$ modulo $5$, so it has no root and is
irreducible. Modulo $7$ the polynomial is $(T+1)(T+2)(T+4)$. Writing
$\mathfrak p_r$ for primes above $r$, Dedekind–Kummer factorization gives
$$
(2)=\mathfrak p_2^3,\qquad (3)=\mathfrak p_3^3,\qquad
(5)=\mathfrak p_5\mathfrak p_{25},\qquad
(7)=\mathfrak p_7\mathfrak p'_7\mathfrak p''_7,
$$
where the norms are $2,3,5,25,7,7,7$, respectively. The residue-degree
formula in [F6] gives these norms. The primes above $2$ and $3$ are unique;
$\mathfrak p_5$ corresponds to the root $1$ modulo $5$. Label the primes
above $7$ so the reductions of $\alpha$ are $-1,-2,-4$ in
$\mathfrak p_7,\mathfrak p'_7,\mathfrak p''_7$, respectively.
[F5, F6, step 3.2, algebra]

3.4 The field norm satisfies
$N_{L/\mathbb Q}(\alpha+k)=k^3+6$, so its absolute values at the needed
elements are $|N(\alpha-2)|=2$, $|N(\alpha)|=6$,
$|N(\alpha-1)|=5$, $|N(\alpha+1)|=7$, $|N(\alpha+2)|=14$, and
$|N(\alpha+4)|=70$. Each indicated element lies in the corresponding prime
ideals from step 3.3: $\alpha$ reduces to $0$ above $2$ and $3$,
$\alpha-1$ to $0$ at $\mathfrak p_5$, and $\alpha+1,\alpha+2,
\alpha+4$ to $0$ at $\mathfrak p_7,\mathfrak p'_7,\mathfrak p''_7$,
respectively. These absolute norms and unique ideal factorization [F5, F7]
therefore
give
$$
\mathfrak p_2=(\alpha-2),\quad \mathfrak p_3\text{ principal},\quad
\mathfrak p_5=(\alpha-1),\quad
\mathfrak p_7,\mathfrak p'_7,\mathfrak p''_7\text{ principal}.
$$
In detail, $(\alpha)=\mathfrak p_2\mathfrak p_3$; $(\alpha+1)=
\mathfrak p_7$; $(\alpha+2)=\mathfrak p_2\mathfrak p'_7$; and
$(\alpha+4)=\mathfrak p_2\mathfrak p_5\mathfrak p''_7$. Hence every
prime ideal of norm at most $8$ is principal. [F5, F6, F7, step 3.3,
algebra]

4.1 The signature of $L$ is $(1,1)$ and $|d_L|=972$. By [F8], every ideal
class contains an integral ideal of norm at most
$$\frac4\pi\frac{3!}{3^3}\sqrt{972}=\frac{16\sqrt3}{\pi}<9,$$
so that norm is at most $8$. Such an ideal factors into prime ideals of
norm at most $8$, all principal by step 3.4. Therefore the class group of
$\mathcal O_L$ is trivial. [A1, F5, F7, F8, step 3.4, algebra]

4.2 By [F9], $\mathcal O_L^\times\cong\mu(L)\times\mathbb Z$, since
$r_1+r_2-1=1$. If $\zeta\in L$ is a root of unity of order $m>2$, then
$[\mathbb Q(\zeta):\mathbb Q]=\varphi(m)$ is even by [F9], whereas it
divides $[L:\mathbb Q]=3$; here $\varphi(m)$ is even because the units
modulo $m$ pair into distinct pairs $a,-a$ when $m>2$. This is a
contradiction. Thus $\mu(L)=\{\pm1\}$ and
$\mathcal O_L^\times/(\mathcal O_L^\times)^3$ has order three.
The identity
$$\epsilon:=1-6\alpha+3\alpha^2=\frac{(2-\alpha)^3}{2}$$
and $(\alpha-2)^3=(2)$ show $\epsilon$ is a unit. Modulo
$\mathfrak p_7=(7,\alpha+1)$ it is $10\equiv3\pmod7$, which is not a
cube in $\mathbb F_7^\times$ because the cube subgroup is $\{1,6\}$ by
[F2]. Therefore $\epsilon$ is not a cube of a unit and generates the
order-three quotient. [F2, F6, F9, step 3.3, step 4.1, algebra]

5.1 Factor the equation of step 2.1 in $\mathcal O_L$:
$$
(X+Y\alpha)(X^2-XY\alpha+Y^2\alpha^2)=(10)(Z)^3.
$$
Write $Q=X^2-XY\alpha+Y^2\alpha^2$. Since $X$ is even and
$\alpha\in\mathfrak p_2$, $\mathfrak p_2\mid(X+Y\alpha)$. Since
$X\equiv-Y\pmod5$ and $\alpha\equiv1\pmod{\mathfrak p_5}$,
$\mathfrak p_5\mid(X+Y\alpha)$. The prime $\mathfrak p_{25}$ does not
divide $(X+Y\alpha)$: otherwise both $\mathfrak p_5$ and
$\mathfrak p_{25}$ divide it, so $(5)=\mathfrak p_5\mathfrak p_{25}$
divides it; the integral basis $1,\alpha,\alpha^2$ would then force
$5\mid X,Y$, contrary to step 2.3. Since $(2)=\mathfrak p_2^3$ and
$\alpha\in\mathfrak p_2$, $X$ even implies that the terms $X^2$,
$XY\alpha$, and $Y^2\alpha^2$ are divisible by $\mathfrak p_2^6$,
$\mathfrak p_2^4$, and $\mathfrak p_2^2$, respectively. Hence
$\mathfrak p_2^2\mid(Q)$. In the ideal identity, the right side has
$\mathfrak p_2$-valuation exactly $3$, because $Z$ is odd; the first
factor has valuation at least $1$ and $Q$ at least $2$, so these
valuations are exactly $1$ and $2$. The right side has valuation exactly
$1$ at each of $\mathfrak p_5$ and $\mathfrak p_{25}$, since $5\nmid Z$;
the first factor is divisible by $\mathfrak p_5$ but not by
$\mathfrak p_{25}$, so $Q$ is divisible by $\mathfrak p_{25}$ and not
by $\mathfrak p_5$. Consequently there exist integral ideals
$\mathfrak a,\mathfrak a'$ such that
$$
(X+Y\alpha)=\mathfrak p_2\mathfrak p_5\mathfrak a,\quad
(Q)=\mathfrak p_2^2\mathfrak p_{25}\mathfrak a',\quad
\mathfrak a\mathfrak a'=(Z)^3.
$$
[F5, F6, step 2.3, step 3.3, algebra]

5.2 The ideals $\mathfrak a$ and $\mathfrak a'$ are coprime. If a prime
ideal $\mathfrak p$ divided both, it would divide $X+Y\alpha$ and $Q$,
hence also
$$Q-(X+Y\alpha)^2=-3XY\alpha.$$
If $\mathfrak p\mid(3)$, then $\mathfrak p\nmid(10)$ and the factorization
in step 5.1 forces $\mathfrak p\mid(Z)$, contradicting $3\nmid Z$.
If $\mathfrak p\mid(X)$, then $\mathfrak p\mid(Y\alpha)$; the coprimality
of $X,Y$ rules out $\mathfrak p\mid(Y)$, so $\mathfrak p\mid(\alpha)$.
If $\mathfrak p\mid(Y)$, then $X+Y\alpha\equiv X$ gives
$\mathfrak p\mid(X)$, also impossible. Thus $\mathfrak p\mid(\alpha)$
and $\mathfrak p\nmid(3)$, so $\mathfrak p=\mathfrak p_2$ by
$(\alpha)^3=(6)=(2)(3)$ and the unique prime above $2$. But
$\mathfrak p_2\nmid(Z)$ because $Z$ is odd, and therefore it divides
neither factor of $\mathfrak a\mathfrak a'=(Z)^3$, a contradiction.
By unique factorization of ideals, coprime ideals whose product is a cube
are cubes, so $\mathfrak a=\mathfrak b^3$ for an integral ideal
$\mathfrak b$. [F5, F6, step 2.3, step 3.3, step 5.1, algebra]

5.3 The class number is one by step 4.1, so $\mathfrak b=(\beta)$ for
some $\beta\in\mathcal O_L$. Equality of principal ideals in step 5.1 then
gives a unit $u\in\mathcal O_L^\times$ with
$$X+Y\alpha=u(\alpha-2)(\alpha-1)\beta^3.$$
By step 4.2 write $u=\epsilon^k v^3$ for $k\in\{0,1,2\}$ and a unit
$v$. Using $\epsilon=(2-\alpha)^3/2$ and absorbing
$((2-\alpha)^k v\beta)^3$ into $\gamma^3$, we obtain
$$2^k(X+Y\alpha)=(\alpha-2)(\alpha-1)\gamma^3$$
for a nonzero $\gamma=A+B\alpha+C\alpha^2$ with integers $A,B,C$.
[F5, step 4.1, step 4.2, step 5.1, step 5.2, algebra]

5.4 In the basis $1,\alpha,\alpha^2$, the coefficient of $\alpha^2$
on the left of step 5.3 is zero. Expanding the right and using
$\alpha^3=6$ gives
$$
0=A^3+6B^3+36C^3+36ABC
-9(A^2B+6AC^2+6B^2C)+6(AB^2+A^2C+6BC^2).
$$
Modulo $3$ this forces $3\mid A$. After substituting that divisibility,
reduction modulo $9$ forces $3\mid B$; substituting both divisibilities
and reducing modulo $27$ forces $3\mid C$. The right side is a homogeneous
cubic in $A,B,C$, so dividing all three by $3$ gives another integer
solution of the same equation. Repeating yields an infinite strictly
decreasing sequence of positive integers $|A|+|B|+|C|$, unless
$A=B=C=0$, which contradicts $\gamma\ne0$. Thus no primitive integer
solution of step 2.1 exists, and the original cubic has no rational point.
[step 5.3, algebra] ∎
