---
id: ex-volterra-square-has-zero-trace
kind: example
title: The square of the Volterra operator has zero trace
status: published
origin: pipeline
deps:
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-axiom-of-choice
  - def-borel-sigma-algebra
  - def-bounded-linear-operator
  - def-canonical-natural
  - def-completed-product-measure
  - def-compact-linear-operator
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable
  - def-derivative
  - def-factorial-and-falling-factorial
  - def-finite-sigma-finite-and-semifinite-measures
  - def-hilbert-space
  - def-hilbert-schmidt-operator
  - def-integral-of-a-nonnegative-simple-function
  - def-integral-over-a-measurable-set
  - def-l-one-of-a-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-nonnegative-lebesgue-integral
  - def-operator-norm
  - def-separable-space
  - def-space-of-bounded-linear-operators
  - def-spectrum-and-resolvent-of-a-bounded-operator
  - def-spectrum-and-resolvent-set-in-a-banach-algebra
  - def-trace-class-operator
  - def-unital-banach-algebra
  - lem-composition-operator-norm-inequality
  - lem-compositions-with-a-compact-operator-are-compact
  - lem-countable-iff-surjection-from-n
  - lem-derivative-of-a-power
  - lem-exponential-series-has-infinite-radius
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-quasinilpotent-trace-class-operator-has-zero-trace
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-algebra-of-derivatives
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-banach-series-criterion
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-bounded-operator-space-is-banach
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-chain-rule
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-continuous-implies-integrable
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-ftc-second-part
  - thm-hilbert-schmidt-operators-are-compact
  - thm-l-two-kernels-give-hilbert-schmidt-operators
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-product-of-countable
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-spectrum-is-nonempty-compact-and-norm-bounded
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-trace-class-iff-product-of-two-hilbert-schmidt-operators
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, §6.1, Volterra operator example, equations (6.23)–(6.26), printed pp. 167–168; comparison only (the example acts on C([0,1]) and leaves the power estimate as Problem 6.7)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-36-complete
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$H=L^2([0,1];\mathbb C)$ with its usual integral pairing, linear in the first
argument ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]), and set
$$ Vf(x)=\int_0^x f(t)\,dt \qquad (0\le x\le1). $$
Then $V$ is Hilbert–Schmidt; $V^2$ is trace class and quasinilpotent; and
$$ \operatorname{tr}(V^2)=0, \qquad D_{V^2}(z)=1\quad(z\in\mathbb C), $$
where $D_{V^2}$ is the locally constructed determinant.

## Facts & Assumptions

**Given:** AC, the complex Hilbert space $H=L^2([0,1];\mathbb C)$, and the
Volterra operator $V$ above.

[A1] AC means that every family of nonempty sets has a choice function
([[def-axiom-of-choice]]); it implies DC and hence Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]).

[A2] Complex $L^2$ consists of almost-everywhere classes of measurable complex
functions; for $f=u+iv$, $|f|^2=u^2+v^2$ and $|u|,|v|\le|f|$
([[def-complex-lp-and-euclidean-test-function-conventions]],
[[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]]). Under Countable
Choice, this space with the integral pairing is a complex Hilbert space
([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]],
[[def-hilbert-space]]).

[A3] Under Countable Choice, finite rational linear combinations of indicators
of rational half-open boxes form a countable dense subset of real
$L^2(\mathbb R)$ ([[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]).
Countable sets are closed under products, and an image of a nonempty countable
set is countable by the surjection characterization
([[def-countable]], [[thm-product-of-countable]],
[[lem-countable-iff-surjection-from-n]]). A space is separable when it has a
countable dense subset ([[def-separable-space]]).

[A4] Lebesgue measure of $[a,b]$ is $b-a$; in particular
$\lambda([0,1])=1$ and $\lambda([0,x])=x$ for $0\le x\le1$
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]]). A finite measure space is
sigma-finite ([[def-finite-sigma-finite-and-semifinite-measures]]).
For nonnegative measurable functions the integral is monotone
([[def-nonnegative-lebesgue-integral]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]); its integral
over a measurable set is the integral after multiplying by that set's
indicator ([[def-integral-over-a-measurable-set]]). A nonnegative simple
function integrates as the finite sum of its values times the measures of its
level sets ([[def-integral-of-a-nonnegative-simple-function]]), and the
integral is additive on nonnegative summands
([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[A5] The Borel sigma-algebra of $\mathbb R^2$ is the product of the two
one-dimensional Borel sigma-algebras
([[def-borel-sigma-algebra]],
[[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]); continuous
preimages of Borel sets are Borel and arithmetic operations preserve
measurability ([[thm-continuous-preimages-of-borel-sets-are-borel]],
[[thm-arithmetic-and-lattice-operations-preserve-measurability]]). For
sigma-finite factors the product measure exists, has the rectangle formula,
and is sigma-finite
([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]);
its completion is the completed product measure
([[def-completed-product-measure]]). Tonelli evaluates nonnegative product
integrals by iterated integrals
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[A6] On the product space of measure $1$, a bounded measurable complex
function has finite absolute integral: if $|g|\le C$, monotonicity bounds its
integral by that of the constant simple function $C$, whose integral is $C$.
By definition this makes $g$ an $L^1$ function
([[def-l-one-of-a-measure]], [[def-nonnegative-lebesgue-integral]],
[[def-integral-of-a-nonnegative-simple-function]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]). Fubini then
equates its product and iterated integrals
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[A7] Under AC, a square-integrable kernel class on a completed sigma-finite
product defines a bounded kernel operator with $\|T_k\|\le\|k\|_2$ and an
exact Hilbert–Schmidt norm $\|T_k\|_{HS}=\|k\|_2$; AC also supplies Hilbert
bases ([[thm-l-two-kernels-give-hilbert-schmidt-operators]],
[[def-hilbert-schmidt-operator]], [[def-bounded-linear-operator]],
[[def-operator-norm]]).

[A8] Under Countable Choice, Hilbert–Schmidt operators are compact
([[thm-hilbert-schmidt-operators-are-compact]],
[[def-compact-linear-operator]]); a composition with a compact operator is
compact ([[lem-compositions-with-a-compact-operator-are-compact]]). For
Hilbert–Schmidt $A,B$ on spaces with supplied Hilbert bases, if $AB$ is
compact then it is trace class and
$\|AB\|_1\le\|A\|_{HS}\|B\|_{HS}$
([[thm-trace-class-iff-product-of-two-hilbert-schmidt-operators]],
[[def-trace-class-operator]]).

[A9] The derivative of $x^n$ is $n x^{n-1}$ for $n\ge1$
([[lem-derivative-of-a-power]]); derivative sums and scalar multiples obey
the algebra rules ([[def-derivative]], [[thm-algebra-of-derivatives]]), and
the chain rule applies to differentiable compositions
([[thm-chain-rule]]). The factorial satisfies $0!=1$ and
$n!=n(n-1)!$ for $n\ge1$
([[def-factorial-and-falling-factorial]], [[def-canonical-natural]]).
Continuous functions on compact intervals are Riemann integrable
([[thm-continuous-implies-integrable]]); Newton–Leibniz evaluates the Riemann
integral from a differentiable primitive ([[thm-ftc-second-part]]), and a
bounded Riemann-integrable function has the same Lebesgue integral under
Countable Choice
([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[A10] The bounded-operator space $\mathcal B(H)$ is Banach
([[def-space-of-bounded-linear-operators]],
[[thm-bounded-operator-space-is-banach]]); operator norms are submultiplicative
([[lem-composition-operator-norm-inequality]]), and an absolutely convergent
series in a Banach space converges ([[thm-banach-series-criterion]]). The
scalar exponential factorial series converges at every real argument
([[lem-exponential-series-has-infinite-radius]]). The spectrum is the
complement of the bounded resolvent set
([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A11] If $H$ is separable complex Hilbert and $Q$ is trace class with
$\sigma(Q)\subseteq\{0\}$, then the local quasinilpotent lemma gives
$\operatorname{tr}(Q)=0$ and $D_Q\equiv1$
([[lem-quasinilpotent-trace-class-operator-has-zero-trace]]).


[A12] AC implies Countable Choice by [A1]. By [A2], $H$ is a complex Hilbert
space, and since $1\in H$ has norm $1$ by [A4], it is nonzero. Thus
$\mathcal B(H)$ is Banach by [[thm-bounded-operator-space-is-banach]]. Its
identity has norm $1$, composition is associative and satisfies
$\|ST\|\le\|S\|\|T\|$ by [[lem-composition-operator-norm-inequality]], and
the nonzero identity makes this a nonzero unital complex Banach algebra
([[def-unital-banach-algebra]]). Its algebra spectrum agrees with the operator
spectrum by their definitions
([[def-spectrum-and-resolvent-set-in-a-banach-algebra]],
[[def-spectrum-and-resolvent-of-a-bounded-operator]]), and it is nonempty by
[[thm-spectrum-is-nonempty-compact-and-norm-bounded]].
## Verification

**Proof technique:** direct.

**Source qualification:** Teschl, *Topics in Real and Functional Analysis*,
§6.1, equations (6.23)–(6.26), printed pp. 167–168, treats a
Volterra operator on $C([0,1])$ and leaves its power estimate as Problem 6.7.
That passage is comparison only; it does not prove this $L^2$ claim. The proof
below derives the $L^2$ kernel estimate and uses the local trace-class,
determinant and spectrum results cited in [A7]–[A12].

**Given:** the data in the statement and facts [A1]–[A12].

1.1 Build a countable dense subset of $H$ by pairing restricted rational-box steps. [A2, A3, A4]
Let $S$ be the countable dense family of real rational-box steps in
$L^2(\mathbb R)$ from [A3]. For $f\in H$, choose a measurable representative
$f=u+iv$. By [A2], both real components belong to real $L^2([0,1])$. Extend
each by zero to $\mathbb R$. For a Borel set $B\subseteq\mathbb R$, the
extension's inverse image is $(u^{-1}(B)\cap[0,1])$, together with
$\mathbb R\setminus[0,1]$ exactly when $0\in B$; these sets are Lebesgue
measurable, so the extension is measurable. Its norm agrees with the norm on
$[0,1]$ by the integral-over-a-set definition [A4]. Restriction from
$\mathbb R$ to $[0,1]$ is contractive by [A4].
Thus, for any $\varepsilon>0$, choose $s,t\in S$ with each component's
restriction error less than $\varepsilon/\sqrt2$. The set
$$ D:=\{\left.(s+it)\right|_{[0,1]}:s,t\in S\} $$
is countable by [A3], and its members are bounded step functions. The identity
$|a+ib|^2=a^2+b^2$ and additivity in [A2] give
$$ \|f-\left.(s+it)\right|_{[0,1]}\|_2^2 =\|u-\left.s\right|_{[0,1]}\|_2^2 +\|v-\left.t\right|_{[0,1]}\|_2^2<\varepsilon^2. $$
Hence $D$ is dense and $H$ is separable. [A2, A3, A4]

1.2 Compute the triangle area and identify its indicator kernel with $V$. [A4, A5, A7, A9]
Put
$$ \Delta:=\{(x,t)\in[0,1]^2:0\le t\le x\le1\}. $$
It is closed in $\mathbb R^2$, hence Borel and product-measurable by [A5].
The two restricted Lebesgue factors are finite, so their product measure
$\rho$ exists by [A4, A5], and the rectangle formula gives
$\rho([0,1]^2)=1$. Tonelli and [A4] give
$$ \rho(\Delta)=\int_0^1\lambda([0,x])\,dx=\int_0^1x\,dx=\tfrac12. $$
For the last equality, $x\mapsto x$ is continuous, the primitive $x^2/2$
has derivative $x$ by [A9], Newton–Leibniz evaluates the Riemann integral,
and [A9] identifies it with the Lebesgue integral. Thus
$k_1=\mathbf1_\Delta$ is in $L^2(\overline\rho)$ with
$\|k_1\|_2^2=1/2$. The kernel theorem [A7] identifies $V=T_{k_1}$ and gives
$$ \|V\|_{HS}=\|k_1\|_2=1/\sqrt2. $$
[A4, A5, A7, A9]

1.3 Prove $V^2$ is trace class. [A1, A7, A8]
By [A7], AC supplies a Hilbert basis $E$ of $H$ and $V$ is
Hilbert–Schmidt relative to it. By [A1], AC supplies Countable Choice for
[A8]; hence [A8] makes $V$ compact and then $V^2=V\circ V$ compact. Apply
the Hilbert–Schmidt product theorem [A8] with both factors $V$ and the same
basis $E$. It follows that $V^2$ is trace class and
$$ \|V^2\|_1\le\|V\|_{HS}^2=\tfrac12. $$
[A1, A7, A8]

2.1 Bound the kernel operators $T_{k_n}$. [A4, A5, A7, step 1.2]
For each integer $n\ge1$, define
$$ k_n(x,t):=\frac{(x-t)^{n-1}}{(n-1)!}\mathbf1_\Delta(x,t). $$
Each $k_n$ is product-measurable by [A5]. Since $|x-t|\le1$ on $\Delta$,
[A4] gives
$$ \|k_n\|_2^2\le\frac{\rho(\Delta)}{((n-1)!)^2} =\frac1{2((n-1)!)^2} \le\frac1{((n-1)!)^2}, $$
using $\rho(\Delta)=1/2$ from step 1.2. The kernel theorem [A7] therefore
defines a bounded operator $T_{k_n}$ with $\|T_{k_n}\|\le1/(n-1)!$.
[A4, A5, A7, step 1.2]

3.1 Prove the power-kernel identity and factorial norm estimate by induction. [A2, A3, A5, A6, A7, A9, step 1.1, step 2.1, algebra]
We prove $V^nd=T_{k_n}d$ for every $d\in D$. At $n=1$ this is the
definition of $V$. Suppose the identity holds for $n$. Choose a bounded
Borel step representative of $d$, since its rational half-open boxes are
Borel. For each fixed $x\in[0,1]$, the
integrand on $[0,1]^2$
$$ (s,t)\longmapsto \mathbf1_{\{0\le t\le s\le x\}}(s-t)^{n-1}d(t) $$
is product-measurable by [A5] and bounded; the product space has finite
measure. It is therefore in $L^1$ by [A6], so Fubini changes the order of
integration. If $t=x$ the inner integral is zero. If $t<x$, [A9], applied
to the primitive $(s-t)^n/n!$, gives
$$ \int_t^x\frac{(r-t)^{n-1}}{(n-1)!}\,dr =\frac{(x-t)^n}{n!}. $$
Indeed $r\mapsto r-t$ has derivative $1$: the identity has derivative $1$
by the $n=1$ power case, while the constant $-t$ has zero difference
quotient. The chain rule differentiates the shifted power, and the factorial
recursion cancels its factor $n$. Consequently
$$ V^{n+1}d(x)=\int_0^x\frac{(x-t)^n}{n!}d(t)\,dt $$
for almost every $x$. This proves the induction. Both $V^n$ and $T_{k_n}$
are bounded; since $D$ is dense by step 1.1, equality on $D$ extends to all
$H$. Thus
$$ \|V^n\|=\|T_{k_n}\|\le\frac1{(n-1)!}\qquad(n\ge1). $$
[A2, A3, A5, A6, A7, A9, step 1.1, step 2.1, algebra]

4.1 Exclude every nonzero scalar from $\sigma(V^2)$. [A2, A10, step 3.1, algebra]
Fix $\lambda\ne0$ and put
$$ R_N:=\sum_{m=0}^N\lambda^{-m-1}(V^2)^m. $$
For $m\ge1$, step 3.1 gives
$$ \|\lambda^{-m-1}(V^2)^m\| \le\frac{|\lambda|^{-m-1}}{(2m-1)!} \le\frac{|\lambda|^{-m-1}}{m!}, $$
because $(2m-1)!\ge m!$. The scalar majorant is summable by the
exponential-series fact [A10]. Since $\mathcal B(H)$ is Banach [A10], its
series criterion gives an operator-norm limit $R_\lambda=\lim_NR_N$. Finite
telescoping gives on both sides
$$ (\lambda I-V^2)R_N=R_N(\lambda I-V^2) =I-\lambda^{-N-1}V^{2N+2}. $$
The remainder tends to zero by step 3.1 and the vanishing terms of the
convergent scalar majorant. Submultiplicativity [A10] lets the products pass
to the operator-norm limit, so $R_\lambda$ is a bounded two-sided inverse of
$\lambda I-V^2$. Therefore every nonzero $\lambda$ lies in the resolvent
set [A10], and
$$ \sigma(V^2)\subseteq\{0\}. $$
[A2, A10, step 3.1, algebra]

5.1 Prove quasinilpotence, the trace and determinant conclusions, and the nonzero witness. [A1, A2, A4, A11, A12, step 1.1, step 1.3, step 3.1, step 4.1, algebra]
By [A2], $H$ is a complex Hilbert space; it is separable by step 1.1 and
$V^2$ is trace class by step 1.3. Step 4.1 puts its spectrum inside
$\{0\}$, while [A12] makes the
spectrum nonempty; hence $\sigma(V^2)=\{0\}$ and $V^2$ is quasinilpotent.
The local quasinilpotent lemma [A11] applies, yielding
$$ \operatorname{tr}(V^2)=0,\qquad D_{V^2}(z)=1\quad(z\in\mathbb C). $$
This particular operator is not zero: $1\in H$, $\|1\|_2=1$ by [A4],
and the same Newton–Leibniz calculation gives $V1(x)=x$ and
$V^21(x)=x^2/2$, which is positive on $[1/2,1]$ of positive measure [A4].
The formula includes the degenerate endpoint $x=0$ because that integral is
zero; the closed triangle convention retains both endpoints, and no boundary
point is discarded in Tonelli or Fubini. The base case $n=1$ is step 3.1.
AC is the exact declared assumption [A1]: it supplies the Hilbert basis used
in step 1.3 and supplies Countable Choice for the stated auxiliary results;
the separability approximation selects only two approximants for a single
tolerance. There is no one-dimensional branch: the intervals
$I_n=(2^{-n},2^{-(n-1)})$, indexed by integers $n\ge1$, lie in $[0,1]$,
are pairwise disjoint and have measure $2^{-n}>0$
by [A4]; if a finite linear combination of their indicator classes is zero,
restricting to each $I_n$ forces its coefficient to vanish. Thus $H$ is
infinite-dimensional. The assertion is a conjunction, not an iff, so neither
iff direction applies. [A1, A2, A4, A11, A12, step 1.1,
step 1.3, step 3.1, step 4.1, algebra] ∎
