---
id: thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis
kind: theorem
title: "Self-dual indecomposable KLR projectives give the lower global basis (symmetric type)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-klr-categorification-of-the-negative-quantum-half, def-the-klr-cartan-pairing, def-lower-global-basis-of-a-quantum-highest-weight-module, thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis, thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module, def-axiom-of-choice, lem-klr-projective-duality-and-positive-divided-string-leading-terms, lem-crystal-lattice-polarizations-are-perfect-at-q-zero, lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis, lem-lusztig-and-kashiwara-normalizations-match-by-root-color, thm-the-highest-weight-crystal-triple-is-balanced, thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes, cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum, thm-polynomial-representation-of-a-klr-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 29
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Michela Varagnolo and Eric Vasserot, Canonical Bases and Khovanov-Lauda Algebras, Journal fur die reine und angewandte Mathematik 659 (2011) 67-100, arXiv:0901.3992'
      url: 'https://arxiv.org/pdf/0901.3992'
      locator: '§4.5-4.8, printed pp. 89-97 (PDF pp. 25-33): Theorem 4.5 (the canonical basis and the indecomposable projectives), the construction of the functor $Y_V$ and the proof; §1-§3 for the geometric realization and PBW identification.'
    - title: 'Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, Bulletin of the AMS 47 (2010) 419-481 (survey), arXiv:0909.4844'
      url: 'https://arxiv.org/pdf/0909.4844'
      locator: '§9.1, Theorem 9.2 and the paragraph preceding it, printed pp. 40-41: the characteristic-zero identification of the Lusztig canonical basis with self-dual indecomposable projectives.'
    - title: 'Ben Webster, Knot Invariants and Higher Representation Theory I, arXiv:1001.2020v9 (62 pages)'
      url: 'https://arxiv.org/pdf/1001.2020'
      locator: '§1.3, Theorem 1.8, printed pp. 18-20: the cyclotomic normalization conventions for self-dual projectives used in the statement.'
---

## Statement

Assume the Cartan datum of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] has symmetric Cartan matrix $a_{ij}=a_{ji}$ and uses the quiver normalization $d_i=1$ for every $i$, the field $k$ has characteristic $0$, and the KLR parameters are the quiver-geometric ones (the specialization attached to a finite quiver without loops, with arbitrary arrow multiplicities $h_{ij}$ and $a_{ij}=-(h_{ij}+h_{ji})$: $Q_{ij}(u,v)=(-1)^{h_{ij}}(u-v)^{h_{ij}+h_{ji}}$ for $i\ne j$, in the fixed native crossing-sign convention; arbitrary parameter changes, including a global replacement by $u+v$, require their own proved gauge equivalence). Then, normalizing each indecomposable finitely generated graded projective $R(\beta)$-module to be self-dual for the contravariant graded projective duality $P^\#=\operatorname{HOM}_{R(\beta)}(P,R(\beta))^\psi$ ($P\cong P^\#$ after the unique normalizing shift), the map $b\mapsto[P_b]$ is a bijection between the lower global basis $B(\infty)$ of the negative half ([[def-lower-global-basis-of-a-quantum-highest-weight-module]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]]) and the shift-orbit basis of $K_0(R)$ by self-dual indecomposable projectives; under the isomorphism $\gamma$ of [[thm-klr-categorification-of-the-negative-quantum-half]] one has $\gamma(G(b))=[P_b]$ for the lower global lift $G(b)$, and the identification is compatible with the based quotient of [[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]]. No extension to arbitrary KLR parameters or to non-symmetric Cartan data is asserted here; any such extension requires its own parameter-change invariance theorem.

## Facts & Assumptions

**Given:** The symmetric quiver-normalized Cartan datum with $d_i=1$, a characteristic-zero field $k$, the quiver-geometric parameters $Q_{ij}(u,v)=(-1)^{h_{ij}}(u-v)^{h_{ij}+h_{ji}}$, the categorical form of [[def-the-klr-cartan-pairing]], the isomorphism $\gamma$ of [[thm-klr-categorification-of-the-negative-quantum-half]], and the QG-5 global-basis machinery of [[def-lower-global-basis-of-a-quantum-highest-weight-module]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]], [[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]], [[lem-crystal-lattice-polarizations-are-perfect-at-q-zero]], [[lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis]], [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]] and [[thm-the-highest-weight-crystal-triple-is-balanced]].

**Open obligation (flagged).** The geometric input of step 1.1 is supplied by the two items `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes` (pair `signed-quiver-flag-convolution-and-klr-ext-realization`) and `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero` (pair `quiver-full-flag-projective-semisimplicity`). Both are declared in this run's manifests and in this item's deps, but neither is authored yet in this dispatch; this item is therefore conditional on them and its Step-3 decision is escalated until the completed suppliers and their actual use in step 1.1 are reconciled.

[F1] Categorical input ([[thm-klr-categorification-of-the-negative-quantum-half]], [[def-the-klr-cartan-pairing]]): $\gamma:Af\to K_0(R)$ is an isomorphism of $A$-algebras and twisted bialgebras intertwining the forms, and every finite graded projective has a normalized self-dual representative with the pairing of [[def-the-klr-cartan-pairing]].

[F2] Positive first-string supplier ([[lem-klr-projective-duality-and-positive-divided-string-leading-terms]]): normalized self-dual projective covers satisfy the coefficient-$1$ FIRST-block expansion, the integral LEFT divided-string ideal equality, and the positive FIRST/LEFT global comparison; its inherited Axiom of Choice ([[def-axiom-of-choice]]) is carried here.

## Proof

**Proof technique:** direct; build the geometric realization, run the graded-Yoneda argument, then globalize and fix the signs with the positive first-string supplier.

1.1 (Geometric input, open obligation.) The quiver-flag semisimplicity corollary `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero` makes $L=\bigoplus_\nu L_\nu$, $L_\nu=R\pi_{\nu!}k[d_\nu]$, a finite direct sum of shifted simple actual $G$-equivariant perverse objects in the full finite loopless quiver scope with arbitrary arrow multiplicities and characteristic zero; the signed Ext-realization theorem `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes` identifies the intrinsic signed algebra $S_\Gamma(\beta)$ with $\operatorname{Ext}_G^\bullet(L,L)$ with its Yoneda/convolution product and grading, and the same faithful polynomial operators of [[thm-polynomial-representation-of-a-klr-algebra]] (unequal crossings $(x_r-x_{r+1})^{h_{ij}}s_r$, equal crossings $(1-s_r)/(x_r-x_{r+1})$, with the polynomial unit of degree $-d_\nu$) generate both $R(\beta;Q)$ and $S_\Gamma(\beta)$, so the two are isomorphic as graded algebras; the equal geometric crossing is minus its standard complex Borel-Moore class, which keeps the native signs. This step uses exactly the two flagged suppliers; until they are authored and inspected, it is an open obligation of this item. [given, algebra]

2.1 (Graded Yoneda and positive End.) With $R=\operatorname{Ext}_G^\bullet(L,L)$, the graded Yoneda functor $Y_T=\operatorname{Ext}_G^\bullet(\delta L,T)$ is verified to be a fully faithful equivalence from the additive category generated by shifts of $\delta L$ to the finite graded projective $R$-modules: on the generator it reduces to $\operatorname{Hom}_R(R,R)=R^{\mathrm{op}}=\operatorname{End}_{DG}(\delta L)$ with ordinary composition, and it extends to finite sums, shifts and idempotent summands. Each simple perverse summand $T$ belongs to that additive category up to shift, so $\operatorname{End}_R^\bullet(Y_T)=\operatorname{Ext}_G^\bullet(T,T)$, which has no negative degrees by the heart orthogonality of perverse sheaves, with degree-zero part the division algebra $\operatorname{End}(T)$; hence $Y_T$ is indecomposable, and the equivalence exhausts the indecomposable projective shift orbits. The algebraic maximal-tail supplier already proves every simple $R$-module absolutely simple, so the division degree-zero endomorphism algebra of a projective cover injects into the scalar ring of its simple head, giving $\operatorname{End}_R^0(Y_T)=k$. [step 1.1, F1, algebra]

3.1 (Self-dual normalization, norm one and signed globalization.) By [F1] every projective shift orbit has a unique $^\#$ self-dual representative $P_b$; put $x_b=\gamma^{-1}[P_b]$, which is integral and bar fixed. The exact Hom/tensor comparison for a self-dual $P$ gives $B_L(x_b,x_b)=h(P_b,P_b)$, a nonnegative integer power series in $q$ congruent to $1$ modulo $q$, since the geometric nonnegative-End property is unchanged by grading shifts. Dividing by $C_\beta$ (which is $1$ modulo $q$) gives a value $B_K(x_b,x_b)$ congruent to $1$ modulo $q$ with integer coefficients, so the general half norm criterion places $x_b$ in the $q^0$ crystal lattice; being bar fixed, it also lies in the actual bar chart, and the integral balanced globalization writes $x_b$ as a finite $\mathbb Z$-linear combination of lower global vectors. Their residue Gram matrix is the identity, so norm residue $1$ forces the sum of coefficient squares to be $1$: $x_b$ is exactly plus or minus one lower global vector. Distinct projective shift orbits are independent and have the same finite weight cardinality as the global basis by the integral $K_0$ isomorphism, so they exhaust this signed set. [step 2.1, F1, F2, algebra]

4.1 (Positivity and the based quotient.) The positive divided-string leading-term supplier [F2] removes every minus sign using its integral LEFT-string ideal equality, its coefficient-$1$ projective adjunction expansion, and the general adapted LEFT global recursion (carried with its inherited Axiom of Choice, [[def-axiom-of-choice]]); batch 8's finite-ADE canonical-comparison item is not used. Consequently the sign in step 3.1 is $+1$, giving $\gamma(G(b))=[P_b]$ for every lower global vector $G(b)$ and establishing the bijection of the statement. The compatibility with the based quotient is the general zero/survival projection theorem of the QG-5 machinery. [step 3.1, F2, algebra] ∎
