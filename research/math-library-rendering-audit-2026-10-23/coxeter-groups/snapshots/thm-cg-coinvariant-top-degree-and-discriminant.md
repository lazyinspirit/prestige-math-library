---
id: thm-cg-coinvariant-top-degree-and-discriminant
kind: theorem
title: "The total degree sum, the invariant Jacobian as the discriminant, anti-invariants, and the top coinvariant class"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
deps: ["lem-cg-basic-degrees-independent-and-coinvariant-series","def-cg-coxeter-basic-degrees-and-graded-coinvariants","lem-cg-complexification-satisfies-reflection-invariant-hypotheses","lem-cg-formal-rational-differentials-and-invariant-jacobian","def-cg-real-coxeter-form-and-reflection","def-cg-canonical-reflection-homomorphism","def-hh-coxeter-matrix-word-group-and-length","lem-cg-reflection-representation-descends-and-root-norms","lem-cg-reflection-form-invariance-and-rank-two-orders","def-cg-dual-chambers-and-reflection-hyperplanes","thm-cg-root-inversion-formulas-and-strong-exchange","thm-cg-finite-chamber-tiling-and-coset-face-identification","thm-cg-root-length-criterion-and-faithfulness","def-finite-linear-invariant-and-coinvariant-polynomial-algebras","def-graded-ring-and-graded-module","lem-weyl-coinvariant-hilbert-series-has-order-w-dimension","def-inner-product-space","def-complex-conjugate-real-imaginary-part-and-modulus","def-formal-derivative-of-a-polynomial","def-jacobian-matrix-affine-algebraic-set","def-characteristic-polynomial-of-a-matrix","cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero","def-axiom-of-choice","def-multivariate-polynomial-ring-by-iteration","thm-cg-finite-type-positive-definite-criterion", thm-determinant-multiplicative]
dependency_level: 17
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
axiom_use: "The Axiom of Choice is inherited exactly through the finite complex reflection invariant-theory inputs: existence of the basic family, its regular-sequence/Hilbert conclusions, and the Molien identity. The finite root geometry, Laurent expansion, divisibility arguments, and coefficient-factorial pairing are choice-free."
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 course notes, 162-page PDF)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Theorem 12.2, printed p. 64: the product of the basic degrees equals the group order and the coinvariant Hilbert polynomial is prod_i [d_i]_q. Its stronger regular-representation clause is not used; the degree-sum and discriminant claims here are proved locally by the normalized Molien expansion and the pairing below."
    - title: "Bill Casselman, Essays on Coxeter groups: Coxeter elements in finite Coxeter groups (author-hosted PDF, 12 pages)"
      url: "https://www.math.ubc.ca/~cass/research/pdf/Element.pdf"
      locator: "Proposition 3.2 and the paragraph preceding it, printed p. 6: no Coxeter element has eigenvalue 1; an independent consistency check only, not an input to this proof."
---

## Statement

Assume the Axiom of Choice. Let $(W,S)$ be a finite-type Coxeter system with $S$ finite, $n:=|S|$, and let $V_{\mathbb C}$, its faithful real-matrix reflection representation $\rho_{\mathbb C}$, the positive roots $\Phi_+$, and the reflections $T$ be as in [[lem-cg-complexification-satisfies-reflection-invariant-hypotheses]], [[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]] and [[thm-cg-root-inversion-formulas-and-strong-exchange]]. Put $S_0:=\mathbb C[V_{\mathbb C}]=\mathbb C[x_1,\dots,x_n]$, $R:=S_0^W$, $R_+:=\bigoplus_{d>0}R_d$, $I:=S_0R_+$ and $A:=S_0/I$ as in [[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]]. Fix a homogeneous basic family $f_1,\dots,f_n$ of degrees $d_i$ and exponents $e_i=d_i-1$ as in [[def-cg-coxeter-basic-degrees-and-graded-coinvariants]], let $N:=|\Phi_+|=|T|$, and choose coordinates $x_1,\dots,x_n$ from a $B$-orthonormal real basis of $V$; then every matrix $\rho_{\mathbb C}(w)$ is real orthogonal. Define
$$
\Delta:=\prod_{\alpha\in\Phi_+}\ell_\alpha\in S_0,\qquad \ell_\alpha(x):=B_{\mathbb C}(x,\alpha),
$$
and let $\mathbf J:=\det(\partial f_i/\partial x_j)\ne0$ be the invariant Jacobian of [[lem-cg-formal-rational-differentials-and-invariant-jacobian]]. Write $\det(w):=\det(\rho_{\mathbb C}(w))$. Then:

**(1) Total degree.** $\sum_{i=1}^{n}(d_i-1)=N=|\Phi_+|=|T|$.

**(2) The Jacobian is the discriminant.** For every $w\in W$, $w\cdot\mathbf J=\det(w)\mathbf J$. Each $\ell_\alpha$ divides $\mathbf J$, and the $\ell_\alpha$ are pairwise nonproportional. For some $c\in\mathbb C^\times$,
$$
\mathbf J=c\,\Delta,\qquad \deg\mathbf J=\sum_i(d_i-1)=N=\deg\Delta.
$$

**(3) Anti-invariants.** If $S_0^{\det}:=\{p\in S_0:w\cdot p=\det(w)p\text{ for every }w\in W\}$, then $S_0^{\det}=\Delta R$. Each $p\in S_0^{\det}$ has a unique expression $p=\Delta q$ with $q\in R$.

**(4) Top coinvariant class.** The top degree of $A$ is $N=\sum_i e_i$, its component $A_N$ is one-dimensional, and $[\Delta]\in A_N$ is nonzero and spans it. The action on this line is $w\cdot[\Delta]=\det(w)[\Delta]$.

**(5) Conventions.** For $n=0$, $W$ is trivial, $\Delta=\mathbf J=1$, $N=0$, and the clauses hold with empty products and determinant. The product defining $\Delta$ is independent of the order in which the fixed set $\Phi_+$ is listed. Replacing the positive system by its opposite multiplies $\Delta$ by $(-1)^N$. The polynomial $\Delta$ is coordinate-free; changing orthonormal coordinates substitutes the corresponding orthogonal change into its coordinate expression, while the proportionality scalar in $\mathbf J=c\Delta$ changes by the determinant of that basis change. These are conventions, not proof inputs. No claim is made that $A$ is the regular representation, that it is a Kostant harmonic space, or that it is flag-variety cohomology.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-type Coxeter system, a fixed basic family $f_1,\dots,f_n$, and $B$-orthonormal coordinates.

[F1] The complexified representation is faithful, finite, and generated by reflections; $B$ is positive definite and preserved by real matrices; each $t_\alpha$ has fixed hyperplane $\ell_\alpha=0$, determinant $-1$, and unit root normal; and $\Phi_+\to T$ is a bijection ([[lem-cg-complexification-satisfies-reflection-invariant-hypotheses]], [[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[def-hh-coxeter-matrix-word-group-and-length]], [[lem-cg-reflection-form-invariance-and-rank-two-orders]], [[lem-cg-reflection-representation-descends-and-root-norms]], [[thm-cg-root-inversion-formulas-and-strong-exchange]], [[thm-cg-root-length-criterion-and-faithfulness]], [[thm-cg-finite-type-positive-definite-criterion]]).

[F2] The finite reflecting arrangement has chambers whose interiors have trivial point stabilizer; every nonzero vector lies in a unique open face $wC_I$, and a point of that face has stabilizer $wW_Iw^{-1}$; for $I=\{s\}$, $W_I=\{1,s\}$ ([[def-cg-dual-chambers-and-reflection-hyperplanes]], [[def-hh-coxeter-matrix-word-group-and-length]], [[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (1),(3)).

[F3] Under the stated Choice assumption, the invariant Hilbert series is $\prod_i(1-t^{d_i})^{-1}$, the coinvariant Hilbert series is $\prod_i(1+t+\cdots+t^{d_i-1})$, and the full normalized Molien identity is
$$
\prod_i(1-t^{d_i})^{-1}=\frac1{|W|}\sum_{w\in W}\det(1-tw\mid V_{\mathbb C}^*)^{-1}
$$
as a formal series ([[lem-cg-basic-degrees-independent-and-coinvariant-series]] (2),(4), [[lem-weyl-coinvariant-hilbert-series-has-order-w-dimension]]).

[F4] The invariant Jacobian $\mathbf J$ is nonzero ([[lem-cg-formal-rational-differentials-and-invariant-jacobian]] (3)); each $f_i$ is homogeneous of degree $d_i$ ([[def-cg-coxeter-basic-degrees-and-graded-coinvariants]]).

[F5] Every finite-order complex linear operator is diagonalisable, and the determinant polynomial factors over its eigenvalues ([[cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero]], [[def-characteristic-polynomial-of-a-matrix]]).

[F6] $S_0$ is the iterated polynomial ring over $\mathbb C$ ([[def-multivariate-polynomial-ring-by-iteration]]). Leading monomials show it is a domain. Taking a nonzero linear form $\ell$ as one coordinate identifies $S_0/(\ell)$ with a polynomial domain in $n-1$ variables, so $(\ell)$ is prime. Two linear forms are associates exactly when they are proportional: degree comparison forces any multiplier between them to be constant.

[F7] The polynomial action is the contragredient substitution action, invariants form the graded subalgebra $R$, and $I=S_0R_+$ is homogeneous ([[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]], [[def-graded-ring-and-graded-module]]).

[F8] Formal partial derivatives obey the monomial rule and chain rule, and the Jacobian determinant is the determinant of the matrix of those partials ([[def-formal-derivative-of-a-polynomial]], [[def-jacobian-matrix-affine-algebraic-set]]). Determinants satisfy $\det(AB)=\det(A)\det(B)$ ([[thm-determinant-multiplicative]]).

[F9] Complex conjugation and the linear-first inner-product convention are those of [[def-complex-conjugate-real-imaginary-part-and-modulus]] and [[def-inner-product-space]]. The coefficient-factorial pairing used below is constructed in step 5.1.

## Proof

**Proof technique:** Compare the first two Laurent coefficients of the normalized Molien identity, then use reflection divisibility and a coefficient-factorial pairing. All calculations are in polynomial rings or finite-dimensional spaces.

1.1 If $n=0$, then $W=\{1\}$, $S_0=R=A=\mathbb C$, and every family and product is empty; all clauses follow. If $n=1$, the Coxeter group is $W=\{1,s\}$, $T=\{s\}$ and $N=1$. For its single degree $d_1$, [F3] gives $\frac1{1-t^{d_1}}=\frac12\left(\frac1{1-t}+\frac1{1+t}\right)$. With $\delta=1-t$, the left side is $d_1^{-1}\delta^{-1}+(d_1-1)/(2d_1)+O(\delta)$ and the right side is $\tfrac12\delta^{-1}+\tfrac14+O(\delta)$; comparing the $\delta^{-1}$ and constant coefficients gives $d_1=2$ and $d_1-1=1=N$. In rank one, write the unit positive-root form as $\Delta=\varepsilon x_1$ with $\varepsilon=\pm1$. Invariance under $x_1\mapsto-x_1$ gives $R=\mathbb C[x_1^2]$; the degree-two basic generator is $f_1=a x_1^2$ with $a\ne0$, so $I=(x_1^2)$, $\mathbf J=2a x_1=(2a/\varepsilon)\Delta$, and the anti-invariant polynomials are precisely the odd polynomials $\Delta R$. The quotient has basis $1,[x_1]$, so its top component is the nonzero sign line spanned by $[\Delta]$. This proves every clause for $n=1$. In the rest of the proof assume $n\ge2$. [given, F1, F3]

1.2 For $n\ge2$, let $g\ne1$ have fixed space of codimension one in $V_{\mathbb C}$. Because its matrix is real, the real and complex fixed spaces have the same codimension, so $H:=\operatorname{Fix}_V(g)$ is a real hyperplane. If $H$ were not in the finite reflecting arrangement, a point $x\in H$ outside every arrangement hyperplane could be chosen: for each proper subspace cut out on $H$, choose a nonzero linear form vanishing there; their product is a nonzero polynomial on $H$, which cannot vanish everywhere over $\mathbb R$ (by induction on $\dim H$). It would lie in a chamber interior, whose point stabilizer is trivial by [F2], contrary to $gx=x$. Hence $H$ is an arrangement hyperplane. The same finite-union argument chooses $x\in H$ outside all other distinct arrangement hyperplanes; $x$ is nonzero. By [F2], $x\in w_0C_I$ for some $I\subsetneq S$. Since $x$ lies on an arrangement hyperplane, $I$ is nonempty; the walls indexed by $I$ are distinct because their normals are the images of distinct basis vectors under the invertible map $\rho(w_0)$. They all pass through $x$, so $|I|=1$. For $I=\{s\}$, [F2] gives $\operatorname{Stab}_W(x)=w_0\{1,s\}w_0^{-1}$; since $g\ne1$ fixes $x$, it is the reflection $w_0sw_0^{-1}\in T$. Conversely every element of $T$ has a fixed hyperplane by [F1]. Thus the nonidentity elements with fixed-space codimension one are exactly the reflections. [F1, F2, algebra]

2.1 Assume $n\ge2$ and put $\delta=1-t$. The left side of [F3] expands as $\prod_i(1-t^{d_i})^{-1}=\frac{\delta^{-n}}{\prod_i d_i}\left(1+\frac{\delta}{2}\sum_i(d_i-1)+O(\delta^2)\right)$. In the normalized sum on its right, the identity contributes $|W|^{-1}\delta^{-n}$. Each of the $N$ reflections contributes $|W|^{-1}\delta^{-(n-1)}/(1+t)=\frac1{2|W|}\delta^{-(n-1)}+O(\delta^{-(n-2)})$. For every other element, [F5] and step 1.2 give at most $n-2$ eigenvalues equal to $1$ on $V_{\mathbb C}^*$: indeed $\operatorname{rank}(M^{-\mathsf T}-I)=\operatorname{rank}(M-I)$, so the fixed dimensions on a representation and its dual agree. Its Molien term is therefore $O(\delta^{-(n-2)})$. Comparing the coefficients of $\delta^{-n}$ and $\delta^{-(n-1)}$ first gives $\prod_i d_i=|W|$ and then $\sum_i(d_i-1)=N$. The identity is a finite sum of rational functions, so these Laurent expansions compare coefficients without an infinite-limit interchange. [F3, F5, step 1.2, algebra]

3.1 Write $M=\rho_{\mathbb C}(w)$ in the chosen orthonormal coordinates. The tuple $F=(f_1,\dots,f_n)$ satisfies $F(Mx)=F(x)$; differentiating gives $DF(Mx)M=DF(x)$ and hence $\mathbf J(Mx)=\det(M)^{-1}\mathbf J(x)=\det(M)\mathbf J(x)$, since $M$ is real orthogonal. If $x$ lies on the fixed hyperplane of $t_\alpha$, then $\mathbf J(x)=\mathbf J(\rho_{\mathbb C}(t_\alpha)x)=-\mathbf J(x)$, so $\mathbf J$ vanishes there. After taking $\ell_\alpha$ as one coordinate, restriction to $\ell_\alpha=0$ is the zero polynomial; thus $\ell_\alpha$ divides $\mathbf J$. If $\ell_\alpha$ and $\ell_\beta$ are proportional, nondegeneracy of $B_{\mathbb C}$ gives $\alpha=c\beta$; since both roots are real with $B$-norm one, $c=\pm1$, and positivity of both roots gives $c=1$, so $\alpha=\beta$. Thus the forms are pairwise nonproportional primes by [F6], and $\Delta$ divides $\mathbf J$. Every determinant term of the Jacobian matrix has degree $\sum_i(d_i-1)$; [F4] makes this the degree of its nonzero determinant. Since $\deg\Delta=N$, step 2.1 gives $\deg\mathbf J=\deg\Delta$, so $\mathbf J=c\Delta$ for a nonzero scalar $c$. This proves (2), including anti-invariance of $\Delta$. If an orthonormal basis changes by $P$, its coordinate expressions satisfy $\Delta_{\rm new}(y)=\Delta_{\rm old}(Py)$ and $\mathbf J_{\rm new}(y)=\det(P)\mathbf J_{\rm old}(Py)$. Listing the fixed roots in a different order leaves the product unchanged; replacing $\Phi_+$ by $-\Phi_+$ multiplies it by $(-1)^N$. [F1, F4, F6, F8, step 2.1, algebra]

4.1 If $p\in S_0^{\det}$, every reflection $t_\alpha$ acts by determinant $-1$, so $p$ vanishes on its fixed hyperplane and each $\ell_\alpha$ divides $p$. The same pairwise-prime argument as in step 3.1 gives $p=\Delta q$ for some $q\in S_0$. By step 3.1, $\Delta$ is anti-invariant; applying any $w$ to $p=\Delta q$ and cancelling $\Delta$ in the domain $S_0$ then gives $w\cdot q=q$. Conversely, if $q\in R$, the product $\Delta q$ is anti-invariant. The quotient $q$ is unique because $S_0$ is a domain and $\Delta\ne0$. [F1, F6, F7, step 3.1, algebra]

5.1 By [F3] the Hilbert series of $A$ is $\prod_i(1+t+\cdots+t^{d_i-1})$, whose top degree is $\sum_i(d_i-1)=N$ by step 2.1 and whose top coefficient is $1$, so $A_N$ is one-dimensional. For $f=\sum_{|a|=N}f_ax^a$ and $g=\sum_{|a|=N}g_ax^a$ in $(S_0)_N$, set $\langle f,g\rangle:=\sum_{|a|=N}a!\,f_a\overline{g_a}$ with $a!:=\prod_j a_j!$; this is positive definite. If $p\in R_d$ is homogeneous with $d>0$ and $f\in(S_0)_{N-d}$, direct monomial expansion gives $\langle pf,\Delta\rangle=\langle f,\overline p(\partial)\Delta\rangle$, where $\overline p(\partial)$ conjugates the coefficients of $p$ and substitutes the formal partial derivatives for its variables. For a real orthogonal matrix $M$, the chain rule, first on linear symbols and then by products and linearity, gives $\overline p(\partial_x)(q\circ M)=\bigl(\overline p(M^{\mathsf T}\partial)q\bigr)\circ M$. Since $M^{\mathsf T}=M^{-1}\in W$ and real matrices preserve coefficientwise conjugation, $\overline p$ is invariant and $\overline p(M^{\mathsf T}\partial)=\overline p(\partial)$; thus this differential operator commutes with substitution by $M$. Since $\Delta\circ M=\det(M)\Delta$ by step 3.1, $\overline p(\partial)\Delta$ is anti-invariant. If $d\le N$ it has degree $N-d<N$, so step 4.1 forces it to be zero; if $d>N$ the derivative is already zero. Every homogeneous element of $I_N$ is a sum of such products $pf$, hence $\Delta$ is orthogonal to $I_N$. But $\Delta$ is a nonzero real-coefficient polynomial, so $\langle\Delta,\Delta\rangle>0$; consequently $\Delta\notin I_N$ and $[\Delta]\ne0$ in $A_N$. It spans this one-dimensional component and has the determinant action by step 3.1. [F3, F6, F7, F8, F9, step 2.1, step 3.1, step 4.1, algebra] ∎
