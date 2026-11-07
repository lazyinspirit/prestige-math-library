---
id: thm-davenport-heilbronn-3-torsion-class-field-counting-identity
kind: theorem
title: "Class-field count of cubic fields and quadratic 3-torsion"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - lem-class-group-three-torsion-surjections
  - def-fundamental-quadratic-discriminant
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-ray-class-exact-sequence
  - def-ray-class-group
  - def-idele-class-group-of-a-global-field
  - def-ideal-class-group-of-a-domain
  - thm-number-field-ideal-class-group-finite-in-zf
  - thm-global-artin-reciprocity-and-norm-index
  - thm-global-class-field-existence-number-field
  - def-global-artin-map-as-product-of-local-reciprocity-maps
  - thm-local-artin-reciprocity-identifies-the-weil-group-abelianization
  - thm-fundamental-theorem-of-finite-galois-theory
  - thm-galois-group-of-an-irreducible-cubic-by-discriminant
  - thm-ramified-primes-and-the-number-field-discriminant
  - cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one
  - lem-s3-cubic-resolvent-discriminant-and-ramification
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice and DC are assumed in the original Statement and used through the ready global and local class-field and different suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bhargava, Shankar, and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms, §§8.1 and 8.5"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "§8.1 and §8.5, equation (59)"
    - title: "J. S. Milne, Class Field Theory, Theorem 0.4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter 0 §4, printed p. 12, unramified abelian class fields and Hilbert class fields"
    - title: "A. Landesman, Distributions of Class Groups of Global Fields, Lecture 3"
      url: "https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf"
      locator: "§3, Davenport–Heilbronn theorem"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. For $X>0$, let $\mathcal C_\pm(X)$ count isomorphism classes of cubic fields of the corresponding discriminant sign, with absolute discriminant less than $X$, in which no rational prime is totally ramified. Then
$$|\mathcal C_+(X)|=\sum_{\substack{K/\mathbb Q\text{ real quadratic}\\0<D_K<X}}\frac{|\operatorname{Cl}(K)[3]|-1}{2},\qquad |\mathcal C_-(X)|=\sum_{\substack{K/\mathbb Q\text{ imaginary quadratic}\\-X<D_K<0}}\frac{|\operatorname{Cl}(K)[3]|-1}{2},$$
where $D_K$ is the fundamental discriminant of $K$. 

## Statement references

[[lem-class-group-three-torsion-surjections]]

[[def-fundamental-quadratic-discriminant]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[Bhargava, Shankar, and Tsimerman, §§8.1 and 8.5](https://arxiv.org/pdf/1005.0672)

## Facts & Assumptions

**Given:** AC, Countable Choice and DC, the discriminant bound and sign in the Statement.

[F1] The ordinary ideal class group of a number field is finite. The modulus-one ray class group is that ideal class group; its ray class field has Galois group canonically identified with it. Global reciprocity is compatible with the local maps, and local units map onto inertia. [[thm-number-field-ideal-class-group-finite-in-zf]] [[def-ideal-class-group-of-a-domain]] [[def-ray-class-group]] [[thm-ray-class-exact-sequence]] [[thm-number-field-ray-class-field-artin-isomorphism]] [[thm-global-artin-reciprocity-and-norm-index]] [[def-global-artin-map-as-product-of-local-reciprocity-maps]] [[thm-local-artin-reciprocity-identifies-the-weil-group-abelianization]]

[F2] Global class-field existence and finite Galois correspondence identify finite abelian extensions with the corresponding idèle norm quotients and their subgroups. [[thm-global-class-field-existence-number-field]] [[thm-fundamental-theorem-of-finite-galois-theory]]

[F3] For any finite abelian group $A$, the number of surjections $A\to\mathbb Z/3\mathbb Z$ is $|A[3]|-1$. [[lem-class-group-three-torsion-surjections]]

[F4] A non-Galois cubic field has $S_3$ Galois closure. For an $S_3$ cubic field $L$ and its quadratic resolvent $K$, the Galois closure is unramified over $K$ at a rational prime exactly when that prime is not totally ramified in $L$; moreover $D_L=D_K$ when this holds at every prime. [[thm-galois-group-of-an-irreducible-cubic-by-discriminant]] [[lem-s3-cubic-resolvent-discriminant-and-ramification]]

[F5] A nontrivial number field has discriminant of absolute value greater than one, and a rational prime divides its discriminant exactly when it ramifies. [[cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one]] [[thm-ramified-primes-and-the-number-field-discriminant]]

[F6] A quadratic field with fundamental discriminant $D$ is $\mathbb Q(\sqrt D)$, so each admissible discriminant determines its field. [[def-fundamental-quadratic-discriminant]]

[A1] AC, Countable Choice and DC are explicit hypotheses of the original Statement and the cited class-field and local-different suppliers. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Given:** The data and assumptions in the Statement.

1.1 Fix a quadratic number field $K$. At modulus one with no positivity restriction, [F1] identifies the ray class group with $\operatorname{Cl}(K)$. The corresponding ray class field is unramified at every finite place: local units lie in its norm subgroup, and [F1] identifies their Artin images with inertia. Conversely, a cyclic cubic extension of $K$ unramified at finite places is also unramified at every real place, since its degree is odd and a nontrivial real local extension has degree two. Its norm subgroup contains all local units and all archimedean components, so [F2] makes it a subextension of that ray class field. Thus index-three subgroups of $\operatorname{Cl}(K)$ correspond bijectively to cyclic cubic extensions of $K$ unramified at every finite place. [A1, F1, F2, given, construct, algebra]

2.1 Let $\sigma$ be the nontrivial automorphism of $K/\mathbb Q$. For every fractional ideal $\mathfrak a$, $\mathfrak a\sigma(\mathfrak a)$ is the principal ideal generated by its rational ideal norm. Hence $\sigma$ acts on $\operatorname{Cl}(K)$ by inversion, and every index-three subgroup is stable. Conjugating the associated class field by $\sigma$ carries its Artin subgroup to itself, so uniqueness in [F2] makes the cubic extension $N/K$ Galois over $\mathbb Q$. The quotient involution acts by inversion on $\operatorname{Gal}(N/K)\cong C_3$. A lift $t$ of that involution has $t^2\in C_3$ and conjugates it to its inverse, while also centralizing its own square; hence $t^2=1$. Thus $\operatorname{Gal}(N/\mathbb Q)\cong C_3\rtimes C_2\cong S_3$. Its three cubic subfields are conjugate, hence give one isomorphism class over $\mathbb Q$. [F1, F2, step 1.1, construct, algebra]

3.1 Conversely, let $L/\mathbb Q$ be a cubic field with no totally ramified rational prime. It cannot be Galois cyclic: by [F5] some rational prime ramifies in a nontrivial cubic field, and in a cyclic extension of prime degree every ramified prime has ramification index $3$. Hence [F4] gives an $S_3$ closure $N$ and its unique quadratic subfield $K$. The local equivalence in [F4] makes $N/K$ unramified at all finite places, so step 1.1 recovers it from an index-three class-group subgroup. The constructions in steps 2.1 and 3.1 are inverse on isomorphism classes: the unique index-two subfield of an $S_3$ closure is its quadratic resolvent, and its three index-two subgroup-fixed cubic fields are conjugate. [F1, F2, F4, F5, step 1.1, step 2.1, algebra]

4.1 By [F3], the number of surjections $\operatorname{Cl}(K)\to C_3$ is $|\operatorname{Cl}(K)[3]|-1$. Every index-three subgroup is the kernel of exactly two such surjections, because $C_3$ has two automorphisms. Thus the number of cubic fields in the correspondence with quadratic resolvent $K$ is $(|\operatorname{Cl}(K)[3]|-1)/2$. By [F4], their discriminant equals $D_K$, including its sign. There are only finitely many such $K$: by [F6] its discriminant is a nonzero integer determining the field, and only finitely many integers lie in the prescribed interval. Summing this finite-fibre correspondence over those real or imaginary quadratic fields gives the two displayed identities. [F3, F4, F6, step 2.1, step 3.1, algebra] ∎
