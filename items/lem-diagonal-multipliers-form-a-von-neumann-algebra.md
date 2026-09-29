---
id: lem-diagonal-multipliers-form-a-von-neumann-algebra
kind: lemma
title: Diagonal multipliers form a von Neumann algebra
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-essential-supremum-with-respect-to-a-measure
  - def-measurable-and-decomposable-operator-fields
  - def-measurable-function-between-measurable-spaces
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-operator-norm
  - def-real-and-complex-inner-product-space
  - def-von-neumann-algebra-and-commutant
  - lem-complex-conjugation-and-modulus-laws
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - prop-essential-supremum-is-attained-as-the-least-essential-bound
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-measurable-essentially-bounded-operator-fields-act-decomposably
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Ch. 10"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr14.pdf"
      locator: "Part III, Chapter 10 §1.8, Theorem 3, printed pp. 101–102 (continuous/Lusin field convention)"
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1 §1.H, Proposition 1.H.2, printed pp. 65–66 (constant-field diagonal multipliers)"
axiom_use: "Assume AC to meet the hypotheses of the direct-integral action theorem, the decomposable-commutant theorem, and the von Neumann algebra/adjoint conventions. The normalized fundamental family, countable exceptional-set union, and least-index scalar partition below are explicit and use no additional choice."
verification:
  precheck: pass
---

## Statement

Assume AC. Let $(X,\mathcal B,\mu)$ be a sigma-finite standard-Borel measure
space, let $(H_x,e_n(x))_{x\in X}$ be a measurable complex Hilbert field with
a countable fundamental family from
[[def-measurable-hilbert-field-from-a-countable-fundamental-family]], and put
$$\mathcal H=\int_X^\oplus H_x\,d\mu(x),$$
the direct integral of [[def-direct-integral-of-a-measurable-hilbert-field]].
For $f\in L^\infty(X,\mu)$, let $M_f$ be scalar multiplication on $\mathcal H$,
and set
$$\mathcal D=\{M_f:f\in L^\infty(X,\mu)\}\subseteq\mathcal B(\mathcal H).$$
Then $\mathcal D$ is a unital abelian $*$-subalgebra,
$$\mathcal D''=\mathcal D,$$
and hence $\mathcal D$ is a concrete von Neumann algebra. This remains true
when zero fibres make $f\mapsto M_f$ noninjective. On the zero Hilbert space,
$\mathcal D=\{0\}$ and its sole element is the identity operator. Inner
products are linear in their first variable.

## Facts & Assumptions

**Given:** AC; the preceding direct integral and its scalar-multiplication operators; a measurable Hilbert field with its countable fundamental family; and the action, commutant, and WOT conventions in the cited items.

[F1] Each fundamental vector $e_n$ is a measurable section, their complex span is dense in every fibre, and zero-dimensional fibres are allowed ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]]).

[F2] Measurable sections have measurable pointwise norms and pairings, and multiplication by a measurable scalar function preserves measurability ([[lem-measurable-sections-have-measurable-pointwise-inner-products]]).

[F3] Measurability is defined by inverse-image measurability ([[def-measurable-function-between-measurable-spaces]]).

[F4] A bounded operator field is weakly measurable when its fundamental matrix coefficients are measurable, and is decomposable when weakly measurable and essentially bounded ([[def-measurable-and-decomposable-operator-fields]]).

[F5] Weakly measurable essentially bounded fields act on the direct integral; the induced norm is the essential supremum of the fibre norms, and products and adjoints of fields induce the corresponding operator products and adjoints ([[thm-measurable-essentially-bounded-operator-fields-act-decomposably]]).

[F6] The commutant of all scalar multipliers consists exactly of the decomposable operators, and two fields inducing the same operator agree almost everywhere ([[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]]).

[F7] For any operator set, a commutant is WOT closed; if a set is self-adjoint, its commutant is a unital $*$-subalgebra. Commutants are taken inside $\mathcal B(\mathcal H)$ ([[def-von-neumann-algebra-and-commutant]]).

[F8] A countable union of Borel null sets is a Borel null set ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F9] The operator norm bounds the image norm ([[def-operator-norm]]).

[F10] An essentially bounded measurable scalar or norm function has finite essential supremum ([[def-essential-supremum-with-respect-to-a-measure]]).

[F11] The inner product is linear in its first variable and conjugate-linear in its second ([[def-real-and-complex-inner-product-space]]).

[F12] AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); here it is assumed only to meet the hypotheses of the preceding Hilbert-field, action, commutant, and adjoint results.

[F13] The direct integral is the quotient of square-integrable measurable sections modulo Borel null sets, and scalar and fibrewise operations act on classes pointwise ([[def-direct-integral-of-a-measurable-hilbert-field]]).

[F14] $L^\infty(X,\mu;\mathbb C)$ consists of a.e.-equivalence classes of measurable complex functions with finite essential-supremum modulus ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F15] Arithmetic operations on measurable real functions preserve measurability; complex addition, multiplication, and conjugation are measurable by applying these rules to real and imaginary parts ([[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F16] Complex modulus is multiplicative and subadditive, and conjugation preserves modulus ([[lem-complex-conjugation-and-modulus-laws]]).

[F17] A finite essential supremum of a real measurable function is an almost-everywhere bound ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F18] Cauchy–Schwarz bounds the modulus of an inner product by the product of the vector norms ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F19] A commutant is WOT closed because each commutation equation is a WOT-closed condition ([[def-von-neumann-algebra-and-commutant]]).

[F20] A Borel function composed with a measurable map is measurable ([[thm-composition-with-borel-functions-preserves-measurability]]).

[F21] A continuous map has Borel inverse images of Borel sets ([[thm-continuous-preimages-of-borel-sets-are-borel]]).

## Proof

**Proof technique:** direct, using countably many measurable rank-one fields.

**Given:** AC and the measurable direct-integral field above.

1.1 For each $n$, define $$u_n(x)=\begin{cases}e_n(x)/\|e_n(x)\|,&\|e_n(x)\|>0,\\0,&\|e_n(x)\|=0.\end{cases}$$ The norm is measurable by [F2]. The scalar function $r(0)=0$ and $r(t)=1/t$ for $t>0$ is Borel: its inverse image of any Borel set is the possible singleton contribution at $0$ together with the inverse image under the continuous reciprocal map on $(0,\infty)$, using [F21]. Thus $u_n=(r\circ\|e_n\|)e_n$ is a measurable section by [F1, F2, F3, F20]. Each $u_n$ is either zero or a unit vector. Its pointwise linear span is dense in $H_x$, since each $e_n(x)$ is a scalar multiple of $u_n(x)$ and [F1] gives dense span. In particular, if every $u_n(x)$ is zero then $H_x=\{0\}$. [F1, F2, F3, F20, F21, construct]

1.2 For $n,m\in\mathbb N$, define the rank-one field $$R_{n,m}(x)\xi=\langle\xi,u_n(x)\rangle u_m(x),\qquad \xi\in H_x.$$ By the first-variable linearity in [F11], this is a bounded linear operator of norm at most one, including on zero fibres, by [F9, F18]. For each pair of fundamental sections $e_i,e_j$, the section $R_{n,m}e_i=\langle e_i,u_n\rangle u_m$ is measurable by [F2]; pairing it with $e_j$ is measurable by [F2] again. Hence every fundamental matrix coefficient of $R_{n,m}$ is measurable, so [F4] makes it a weakly measurable, essentially bounded field. By [F5] it induces a decomposable operator $Q_{n,m}=\int_X^\oplus R_{n,m}(x)\,d\mu(x)$, which belongs to $\mathcal D'$ by [F6]. [F2, F4, F5, F6, F9, F11, F12, F18, construct]

1.3 Let $f,g\in L^\infty(X,\mu;\mathbb C)$ and choose measurable representatives. Their moduli have finite essential suprema by [F14], so [F17] gives finite bounds outside null sets; [F8] combines the two exceptional sets. The inequalities in [F16] show that $f+g$, $fg$, $af$, and $\bar f$ are essentially bounded for every $a\in\mathbb C$. Their measurability follows from [F14,F15], so all belong to $L^\infty(X,\mu;\mathbb C)$. Pointwise action on direct-integral classes [F13] and product/adjoint compatibility [F5,F11] give $M_fM_g=M_{fg}$, $M_f+M_g=M_{f+g}$, $aM_f=M_{af}$, and $M_f^*=M_{\bar f}$. Also $M_1=I_{\mathcal H}$, including when $\mathcal H=\{0\}$. Thus $\mathcal D$ is a unital abelian $*$-subalgebra. Consequently $\mathcal D\subseteq\mathcal D'$ and $\mathcal D\subseteq \mathcal D''$ by [F7]. [F5, F7, F8, F11, F12, F13, F14, F15, F16, F17, given, algebra]

2.1 Let $T\in\mathcal D''$. Since $\mathcal D\subseteq\mathcal D'$, $T$ commutes with every element of $\mathcal D$, so $T\in\mathcal D'$. By [F6], there is a weakly measurable essentially bounded field $(T_x)$ inducing $T$. For each $n,m$, $T$ commutes with $Q_{n,m}$ because $Q_{n,m}\in\mathcal D'$. By the product clause in [F5], the fields $(T_xR_{n,m}(x))$ and $(R_{n,m}(x)T_x)$ are weakly measurable and essentially bounded and induce $TQ_{n,m}$ and $Q_{n,m}T$, respectively. These induced operators are equal; the uniqueness clause in [F6] therefore makes the two fields equal outside a Borel null set. There are only countably many pairs $(n,m)$, so [F8] gives one Borel null set $N$ outside which all fibrewise commutation identities hold simultaneously. [F4, F5, F6, F7, F8, F12, step 1.2, step 1.3]

3.1 Fix $x\notin N$. If $H_x=\{0\}$, then $T_x=0$. Otherwise some $u_n(x)$ is nonzero by step 1.1. For every nonzero $u_n(x)$, $R_{n,n}(x)$ is the orthogonal projection onto its one-dimensional span. Commutation with this projection shows that $T_xu_n(x)=\lambda_n u_n(x)$, where $\lambda_n=\langle T_xu_n(x),u_n(x)\rangle$. If $u_n(x)$ and $u_m(x)$ are both nonzero, apply $T_xR_{n,m}(x)=R_{n,m}(x)T_x$ to $u_n(x)$: the left side is $\lambda_m u_m(x)$ and the right side is $\lambda_n u_m(x)$, so $\lambda_m=\lambda_n$. Thus a single scalar $\lambda_x$ satisfies $T_xu_n(x)=\lambda_xu_n(x)$ for every $n$ (also when $u_n(x)=0$). Their span is dense by step 1.1, and boundedness of $T_x$ extends this identity to all of $H_x$. Hence $T_x=\lambda_x I_{H_x}$. [F1, F9, F11, step 1.1, step 1.2, step 2.1]

4.1 Let $Z=\{x:H_x=\{0\}\}$, which is Borel because $Z=\bigcap_n\{x:\|e_n(x)\|=0\}$ by [F1,F2,F3]. On $X\setminus(N\cup Z)$, partition into the Borel sets $B_n$ on which $n$ is the least index with $u_n(x)\ne0$. Define $$\lambda(x)=\begin{cases}\langle T_xu_n(x),u_n(x)\rangle,&x\in B_n,\\0,&x\in N\cup Z.\end{cases}$$ For each $n$, the displayed pairing is measurable by the all-section coefficient criterion in [F4] and the measurable-section pairing result [F2]. The countable Borel partition therefore makes $\lambda$ Borel. Cauchy–Schwarz and the operator-norm bound [F9, F18] give $|\lambda(x)|\le\|T_x\|$ on the $B_n$; since the field $(T_x)$ is essentially bounded by [F4,F10], [F17] gives a finite a.e. bound for its norm, so $\lambda$ represents an element of $L^\infty(X,\mu;\mathbb C)$ by [F14]. Step 3.1 gives $T_x=\lambda(x)I_{H_x}$ outside $N$, including zero fibres. The action definition then implies $T=M_\lambda$ on direct-integral classes by [F5,F13]. This proves $\mathcal D''\subseteq\mathcal D$, and step 1.3 gives the reverse inclusion. Finally, [F19] says $\mathcal D''$, being a commutant, is WOT closed. Thus $\mathcal D=\mathcal D''$ is a concrete von Neumann algebra. [F1, F2, F3, F4, F5, F9, F10, F12, F13, F14, F17, F18, F19, step 1.3, step 2.1, step 3.1, algebra] ∎

## Boundary cases

- **Empty:** If $X=\varnothing$, then $\mathcal H=\{0\}$, $\mathcal D=\{0\}$, and $\mathcal D''=\mathcal D$; its sole operator is the identity on the zero space.
- **Zero:** On all-zero fibres the same zero-space calculation applies. On a mixed field, the proof defines $\lambda=0$ on zero fibres; multiplier values there may lie in the kernel of $f\mapsto M_f$, which does not affect the operator equality.
- **One:** On a one-dimensional nonzero fibre, every bounded fibre operator is scalar and the rank-one commutation argument gives exactly that scalar.
- **Degenerate:** Zero or dependent fundamental vectors normalize to zero or repeat directions; their total span remains dense, and the countable null-set union handles all pairs simultaneously. Fibre dimensions may vary.
- **Endpoints:** Not applicable; the base has no interval parameter.
- **Nonempty choice:** AC from [F12] is assumed to invoke the cited direct-integral, commutant, and adjoint conventions. The countable family, null-set union, and least-index partition use no additional choice.
- **Iff forward:** The inclusion $\mathcal D\subseteq\mathcal D''$ follows from the commutant definition in step 1.3.
- **Iff reverse:** Steps 2.1–4.1 show each $T\in\mathcal D''$ is a scalar multiplier, including on zero fibres.

## Source qualifications

Bruhat, Part III Chapter 10 §1.8, Theorem 3, printed pp. 101–102, argues that the scalar diagonal algebra is weakly closed by countably many fibrewise rank-one tests in his continuous-sum setting. His field convention is based on locally compact spaces and Lusin-type measurability; it is not silently identified with the standard-Borel measurable-field convention here. Bekka and de la Harpe, Chapter 1 §1.H, Proposition 1.H.2, printed pp. 65–66, prove WOT closure of diagonal multipliers for a constant Hilbert fibre by a weak-star compactness argument. Neither passage proves this varying-fibre, possibly nonfaithful statement in the present convention; the rank-one field, common-null-set, scalar-recovery, and zero-fibre arguments above are local.
