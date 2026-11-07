---
id: thm-complex-cm-abelian-varieties-classified-up-to-isogeny-by-cm-pairs
kind: theorem
title: "Complex CM abelian varieties are classified up to isogeny by CM pairs"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-complex-abelian-variety-with-cm-type
  - def-complex-vector-space-lattice-and-torus
  - lem-cm-type-has-positive-rational-riemann-form
  - thm-rational-riemann-form-makes-complex-torus-projective
  - thm-complex-abelian-variety-uniformizes-as-complex-torus
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-cm-algebra-and-cm-type
  - thm-ring-of-integers-free-of-rank-degree
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-fundamental-theorem-of-algebra-liouville-proof
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - lem-cm-tate-module-rank-one-over-finite-adeles
  - thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic
  - thm-jacobian-criterion-smooth-morphism
  - thm-proper-quasi-finite-is-finite
  - lem-proper-source-to-separated-target-proper
  - def-k-isogeny-of-abelian-varieties
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Complex Multiplication, Chapter I §3"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "Classification up to isogeny, printed pp. 21–24."
    - title: "Margaret Bilu, Complex multiplication of abelian varieties, §3.4"
      url: "https://perso.pages.math.cnrs.fr/users/margaret.bilu/Complexmultiplication.pdf"
      locator: "§3.4, classification proof, printed pp. 15–19."
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "Section1, classification up to isogeny, Proposition1.2, printed4–5; locally reconstructed using actual Riemann projectivity and algebraicity suppliers."
verification: {}
---

## Statement

Assume the Axiom of Choice. For a CM algebra $E$ and a CM type $\Phi$, the isogeny classes of complex abelian varieties with an $E$-action of type $(E,\Phi)$ form one class. More precisely, two pairs $(A,\iota)$ and $(B,\jmath)$ with the same CM pair are related by an $E$-linear isogeny, and any $E$-linear isogeny preserves the CM type. This classification is only up to isogeny; it makes no claim about integral models or moduli stacks.

## Statement references

[J. S. Milne, *Complex Multiplication*, Chapter I §3](https://www.jmilne.org/math/CourseNotes/CM.pdf)

[Margaret Bilu, *Complex multiplication of abelian varieties*, §3.4](https://perso.pages.math.cnrs.fr/users/margaret.bilu/Complexmultiplication.pdf)

## Facts & Assumptions

**Given:** AC and an arbitrary CM pair $(E,\Phi)$; for the comparison assertions, the complex abelian varieties and $E$-actions of the types specified in the Statement. No pre-existing variety is assumed for the existence assertion.

[A1] AC is the stated hypothesis and implies Countable Choice and DC for the provided Riemann-form and analytic interfaces ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] CM algebras are finite products of CM number fields, with embeddings in conjugate pairs and a type choosing one from each pair. A complex CM action has the specified tangent character decomposition. Integer rings have integral bases. Finite separable extensions have primitive elements; complex polynomials split; pairwise comaximal factors give the Chinese remainder product ([[def-cm-algebra-and-cm-type]], [[def-complex-abelian-variety-with-cm-type]], [[thm-ring-of-integers-free-of-rank-degree]], [[thm-primitive-element-theorem-for-finite-separable-extensions]], [[thm-fundamental-theorem-of-algebra-liouville-proof]], [[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

[F2] Every CM type has a positive rational Riemann form on its standard complex structure, integral after a positive integer scaling on any full lattice ([[lem-cm-type-has-positive-rational-riemann-form]]).

[F3] Every complex torus carrying such a positive rational Riemann form has an actual holomorphic projective embedding and an abelian-variety model with the same holomorphic group ([[thm-rational-riemann-form-makes-complex-torus-projective]]).

[F4] A complex abelian variety uniformly is its complex tangent space modulo its full integral lattice, naturally for algebraic homomorphisms. Its rational lattice has a faithful rational endomorphism action, and for a CM action is a free rank-one $E$-module ([[thm-complex-abelian-variety-uniformizes-as-complex-torus]], [[lem-cm-tate-module-rank-one-over-finite-adeles]], [[def-complex-vector-space-lattice-and-torus]]).

[F5] Every holomorphic group homomorphism between complex abelian varieties is uniquely algebraic. An invertible tangent differential between smooth varieties of equal dimension gives etaleness; proper quasi-finite maps are finite; maps from proper to separated schemes are proper. Every nonempty finite-type complex scheme has a complex closed point. An isogeny is a surjective group homomorphism with finite scheme kernel ([[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]], [[thm-jacobian-criterion-smooth-morphism]], [[thm-proper-quasi-finite-is-finite]], [[lem-proper-source-to-separated-target-proper]], [[def-k-isogeny-of-abelian-varieties]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

## Proof

1.1 Construct the standard torus for the arbitrary pair. Put $g=[E:\mathbb Q]/2=|\Phi|$ and $V=\mathbb C^\Phi$, with $E$ acting diagonally through the characters $\Phi$. Evaluation identifies $E\otimes_{\mathbb Q}\mathbb R$ with this underlying real space. In detail, for a primitive element in each CM-field factor, [F1] splits its separable polynomial over $\mathbb C$ into distinct roots. Over $\mathbb R$ there are no real roots because the field is totally imaginary; grouping conjugate pairs and applying CRT gives one copy of $\mathbb C$ per chosen embedding in $\Phi$. Thus the evaluation map is a real-algebra isomorphism. An integral basis of $O_E$ is a rational basis of $E$, so its evaluated image is a real basis and $\Lambda=\Phi(O_E)$ is a full lattice in $V$. The quotient $T=V/\Lambda$ is therefore a complex torus, constructed for every CM pair, including product CM algebras. [A1, F1, F4, given, construct, algebra]

1.2 Now let $A,B$ be any two complex abelian varieties with $E$-action of this type. By [F4], their rational uniformizing lattices $H_A,H_B$ are free rank-one $E$-modules. Choose an $E$-linear rational isomorphism $u:H_A\to H_B$. Its real extension between the real tangent spaces is complex-linear. To verify this, complexify: the rank-one modules split into the one-dimensional embedding-character spaces for all $\sigma:E\to\mathbb C$ by the same separable CRT in [F1]. The complex structure $J_A$ has $+i$ eigenspace with characters $\Phi$ and $-i$ eigenspace with conjugate characters $\bar\Phi$; this is the elementary decomposition of a real complex vector space's complexification into its complex tangent representation and its conjugate. The same holds for $J_B$. The $E$-linear complexification of $u$ preserves each character space, hence commutes with these two complex structures. Faithful scalar extension gives $u_\mathbb R J_A=J_Bu_\mathbb R$, proving complex linearity. [A1, F1, F4, given, choose, algebra]

2.1 By [F2], the standard complex structure of step 1.1 admits a positive rational Riemann form on this lattice. By the locally proved construction [F3], $T$ is the holomorphic group of a complex abelian variety $A_\Phi$. Each $b\in O_E$ preserves the lattice and hence gives a holomorphic group endomorphism of $T$, with differential the diagonal matrix $(\varphi(b))_{\varphi\in\Phi}$. Transport to $A_\Phi$ and use [F5] to algebraize these endomorphisms. Uniqueness preserves all their ring operations and the identity. The action is faithful, since its zero differential would make the evaluated element zero in step 1.1's real-algebra isomorphism. After clearing a positive integer denominator this extends injectively to $E\hookrightarrow\operatorname{End}^0(A_\Phi)$; torsion-freeness of the integral lattice action in [F4] detects a zero rational endomorphism. Its tangent characters are exactly $\Phi$. This proves actual existence, not merely comparison of already-existing pairs. [F1, F2, F3, F4, F5, step 1.1, construct, algebra]



2.2 In integral bases of the two full lattices, $u$ has rational entries. Choose a positive common denominator $N$ so that $Nu(\Lambda_A)\subseteq\Lambda_B$. Both lattices have the same full rational rank, and this inclusion has finite index: a nonsingular integer matrix has its adjugate as an integer matrix, so its nonzero determinant annihilates its lattice cokernel. The invertible complex-linear map $Nu_\mathbb R$ therefore induces a holomorphic surjective group homomorphism $f:A^{\rm an}\to B^{\rm an}$ with finite kernel $(Nu_\mathbb R)^{-1}\Lambda_B/\Lambda_A$. Surjectivity follows directly from invertibility on the vector-space covers. [F4, step 1.2, choose, construct, algebra]

3.1 By [F5] the map from step 2.2 is an algebraic group homomorphism. Its invertible complex differential and translation make it etale by the Jacobian criterion. Its scheme kernel is consequently etale and zero-dimensional; it is proper as a closed subscheme of $A$, so it is finite by [F5]. The map is proper, and its image contains every complex point by step 2.2; its closed algebraic image is therefore all of $B$. Hence it is an isogeny. It is $E$-linear: for any $a\in E$, clear one denominator making the two prescribed $a$-actions actual endomorphisms. The $E$-linear lift in step 1.2 makes their compositions with $f$ agree analytically by uniformization naturality. Uniqueness of algebraization in [F5] makes them agree algebraically, and dividing by the denominator gives the rational $E$-linearity. [F4, F5, step 1.2, step 2.2, algebra]

4.1 Conversely, let an $E$-linear isogeny be given between complex CM pairs. By [F4] it lifts to its complex-linear tangent map. That map has zero kernel: a nonzero tangent vector in its kernel would, on a sufficiently small line segment where the exponential cover is injective, give infinitely many distinct points of the isogeny's finite kernel. The dimensions are equal to half the degree of $E$, so the tangent map is an isomorphism. Its $E$-linearity therefore identifies the tangent embedding-character decompositions, proving equality of the CM types with multiplicities. Step 2.1 supplied at least one variety for every abstract pair, and steps 1.2–3.1 put all varieties of a fixed pair in one isogeny class. Together these prove the full original Statement, including its opening existence assertion, with no claim about integral models or moduli stacks. [F1, F4, F5, step 1.2, step 2.1, step 2.2, step 3.1, algebra] ∎

## Source-reading boundary

The cached Milne CM notes were consulted at Chapter I section2 Propositions2.1–2.2 and its Riemann-form discussion, printed24–26, Chapter I Example3.4/Proposition3.6, printed28, and Chapter II Proposition6.1, printed46–47. The cached 2007 article was read at section1 classification/Proposition1.2, printed4–5. The Bilu reference is retained as a bibliographical comparison; no new reading coverage is claimed for it. The original uniformization, Riemann projectivity and algebraicity gaps now have complete local suppliers. Existence uses the actual Gaussian embedding and normalization/group-law construction. The public Statement is unchanged, and its opening nonemptiness assertion is expressly discharged in step 2.1.
