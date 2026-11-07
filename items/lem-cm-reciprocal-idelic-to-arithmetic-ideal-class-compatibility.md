---
id: lem-cm-reciprocal-idelic-to-arithmetic-ideal-class-compatibility
kind: lemma
title: "The reciprocal finite-idelic CM class agrees with arithmetic ideal reciprocity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-complex-cm-abelian-varieties-classified-up-to-isogeny-by-cm-pairs
  - thm-complex-abelian-variety-uniformizes-as-complex-torus
  - lem-cm-tate-module-rank-one-over-finite-adeles
  - lem-cm-type-has-positive-rational-riemann-form
  - thm-rational-riemann-form-makes-complex-torus-projective
  - thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic
  - thm-abelian-homomorphism-groups-finite-free-and-tate-faithful
  - def-ring-of-integers-of-a-number-field
  - def-ray-class-group
  - def-idele-group-of-a-global-field
  - thm-number-field-finite-weak-approximation-in-zf
  - thm-number-field-ray-class-field-artin-isomorphism
  - def-reflex-field-and-reflex-type-of-a-cm-type
  - def-reflex-norm-associated-to-a-cm-type
  - lem-reflex-norm-preserves-ray-subgroups
  - lem-cm-isogeny-can-be-adjusted-to-prescribed-torsion-level
  - thm-reflex-field-ideal-reciprocity-on-cm-torsion
  - lem-cm-idele-class-artin-kernel-is-uniquely-divisible-and-conjugation-fixed
  - lem-cm-idelic-norm-cyclotomic-character-relation
  - lem-reflex-norm-product-with-conjugate-is-field-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "Theorem3.2 and its proof, printed19–20, and Theorem3.10 proof and its ray-class diagram, printed23–24, actually read. The signs, arbitrary-order reduction and ray map are expanded below."
verification: {}
---

## Statement

Assume AC. Let $(A,\iota)$ be a complex abelian variety with CM by any CM algebra $E$, of type $\Phi$ and reflex field $F=E^r$; its integral endomorphism order is not assumed maximal. Let $\sigma\in\operatorname{Aut}(\mathbb C/F)$ and $s\in\mathbb A_{f,F}^\times$ satisfy $\operatorname{art}_F(s)=\sigma|_{F^{\mathrm{ab}}}$ under reciprocal Artin, which sends an unramified uniformizer to inverse arithmetic Frobenius. Choose an $E$-linear algebraic isogeny $f:A\to\sigma A$. The two maps on finite-adic Tate modules differ by the unique scalar $\eta_f\in\mathbb A_{f,E}^\times$ defined by
$$f(\eta_f x)=\sigma x\qquad(x\in V_fA).$$
Its class modulo $E^\times$ is independent of $f$. The ratio class $[\eta_f/N_\Phi(s)]$ belongs to the finite-idelic Artin kernel $K_E$ of the preceding kernel theorem. Furthermore, if $s'$ has the same reciprocal Artin image as $s$, then $N_\Phi(s'/s)\in E^\times$ as a principal finite idele. No claim that $\eta_f/N_\Phi(s)$ is principal is made here; that final claim additionally uses the polarization comparison in the parent theorem.

## Facts & Assumptions

**Given:** AC and precisely the CM pair, automorphism, matching idele and chosen isogeny of the Statement. Neither maximality of the original endomorphism order nor final idelic reciprocity is a Given.

[A1] AC implies DC and Countable Choice for the ideal-reciprocity and analytic suppliers. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Same-type CM pairs are E-isogenous. Complex uniformization has a faithful rational homology action, its CM rational homology is free of rank one over E, and its finite-adic Tate module is the scalar extension of the uniformizing lattice. [[thm-complex-cm-abelian-varieties-classified-up-to-isogeny-by-cm-pairs]] [[thm-complex-abelian-variety-uniformizes-as-complex-torus]] [[lem-cm-tate-module-rank-one-over-finite-adeles]]

[F2] A CM type has a positive rational trace Riemann form, integral after an integer multiple on any full lattice. The rational Riemann criterion constructs an actual abelian-variety model of its torus. Holomorphic group maps between complex abelian varieties are algebraic. Every actual abelian endomorphism is integral over Z, and the integer ring consists of the elements integral over Z. [[lem-cm-type-has-positive-rational-riemann-form]] [[thm-rational-riemann-form-makes-complex-torus-projective]] [[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]] [[thm-abelian-homomorphism-groups-finite-free-and-tate-faithful]] [[def-ring-of-integers-of-a-number-field]]

[F3] Ray classes are ideals prime to the modulus modulo the ray-principal subgroup. Finite ideles have the restricted-product topology, finite weak approximation permits a simultaneous prescribed local ratio modulo a modulus, and ray-class Artin identifies the corresponding finite-idele quotient with the arithmetic ray-class Galois group. [[def-ray-class-group]] [[def-idele-group-of-a-global-field]] [[thm-number-field-finite-weak-approximation-in-zf]] [[thm-number-field-ray-class-field-artin-isomorphism]]

[F4] The reflex field is a CM field, the reflex norm is the continuous determinant map on finite ideles, and it preserves ray subgroups for the same integer modulus. [[def-reflex-field-and-reflex-type-of-a-cm-type]] [[def-reflex-norm-associated-to-a-cm-type]] [[lem-reflex-norm-preserves-ray-subgroups]]

[F5] For maximal-order CM actions, a torsion-level-adjusted isogeny has ideal a=c I J^{-1}, kernel A[a], and its unique ray class is identified by arithmetic ideal reciprocity with the reflex norm of the arithmetic Artin ideal. [[lem-cm-isogeny-can-be-adjusted-to-prescribed-torsion-level]] [[thm-reflex-field-ideal-reciprocity-on-cm-torsion]]

[F6] The finite-idelic Artin kernel is the principal closure modulo the principal subgroup, is uniquely divisible, and is fixed by CM conjugation, including finite products. [[lem-cm-idele-class-artin-kernel-is-uniquely-divisible-and-conjugation-fixed]]

[F7] For a reciprocal-Artin matching pair the scalar finite-idelic norm is the cyclotomic value times a positive rational. The reflex norm times its conjugate is that scalar field norm. [[lem-cm-idelic-norm-cyclotomic-character-relation]] [[lem-reflex-norm-product-with-conjugate-is-field-norm]]

## Proof

1.1 Since sigma fixes the reflex field, [F4] gives the same tangent character set for A and sigma A, so [F1] supplies an actual E-isogeny to choose. The map of torsion points induced by $\sigma$ is compatible with integral multiplication and the transported E-action, hence induces an $E\otimes\mathbb A_f$-linear continuous isomorphism $V_fA\to V_f(\sigma A)$; continuity follows at each level from its compatible isomorphisms on finite torsion groups. The isogeny $f$ is also an isomorphism of these rational finite-adic modules by [F1]. The inverse of an actual complex E-isogeny is a rational homomorphism: its inverse rational lattice map becomes integral after an integer multiple and algebraizes by [F2]. Their comparison is therefore multiplication by a unique $\eta_f\in\mathbb A_{f,E}^\times$. If $f$ is replaced by another E-linear rational isogeny, their quotient is an E-linear rational endomorphism of A. Faithfulness on rank-one E-homology in [F1] identifies that centralizer with E, so the quotient is in $E^\times$. Thus the class of $\eta_f$ is independent even of an invertible rational rather than integral base map. It is also preserved under an E-isogeny $q:A\to B$: choose the rational comparison map $(\sigma q)f q^{-1}$ on B and use $\sigma_B q=(\sigma q)\sigma_A$ on torsion to see its scalar comparison is the same, after the E-linear identification by q. Multiplying this rational base map by an integer makes it an actual isogeny and changes the scalar only by $E^\times$. [A1, F1, F2, F4, given, construct, algebra]

1.2 We spell out the ray map and its sign. For a number field C with no real places and a finite idele t, choose $b\in C^\times$ with $t_v/b\in1+mO_{C_v}$ at every place over m, using [F3]. Then $I(t/b)=\prod_v\mathfrak p_v^{v_v(t_v/b)}$ is prime to m and put $\theta_{m,C}(t)=[I(t/b)]\in\operatorname{Cl}_m(C)$. A different b differs at those places by a ray-principal scalar, proving independence; multiplying choices proves multiplicativity and principal t maps to1. Its kernel is $C^\times W_m$, where $W_m$ is the unit congruence subgroup: a trivial ideal ray class means $I(t/b)=(a)$ with a ray-principal generator a, so $t/(ba)$ is a unit everywhere and congruent to1 at m, and the converse is immediate. By [F3], arithmetic Artin of t on the ray field is precisely arithmetic Artin of this ideal class. Moreover $\theta_{m,E}(N_\Phi(t))=N_\Phi(\theta_{m,F}(t))$. To justify the local congruence clause here from [F4], approximate a tuple of local elements in $1+mO_{F_v}$ by global elements in that same open set via weak approximation. The global congruence implication of [F4], continuity of the local determinant norm, and closedness of the target congruence subgroup give the identical implication for the local tuple. Apply it to t/b. The valuation definition of the ideal reflex norm then gives the asserted commuting ray maps. For a product E perform these choices in each field factor. [F3, F4, given, choose, construct, algebra]

2.1 We may replace A by an E-isogenous variety with full OE-action, without adding a maximal-order hypothesis. Choose a rational homology basis and let $I\subset E$ be its integral uniformizing lattice. The lattice $J=O_E I$ is full, contains I with finite index, and is a fractional OE-ideal: finitely many integral generators of OE times a finite basis of I lie in a common integer denominator lattice. The positive rational form in [F2] is integral after an integer multiple on J. Apply its actual projectivity theorem to obtain an abelian variety B with torus $\mathbb C^\Phi/J$. Multiplication by OE on this torus algebraizes by [F2] and gives a faithful rational E-action. Conversely every element of $E\cap\operatorname{End}(B)$ is integral over Z by [F2] and hence lies in OE; thus the integral intersection is exactly OE. The inclusion $I\subset J$ gives a holomorphic surjective group map with finite kernel A to B, algebraic by [F2], hence an actual E-isogeny. Step 1.1 shows its replacement preserves the comparison class. The same replacement transports under sigma. It therefore suffices to prove the kernel claim for full OE-actions. [F1, F2, step 1.1, choose, construct, algebra]

3.1 Fix m for the full-order pair of step 2.1 and use [F5] to choose an actual isogeny $f_m:A\to\sigma A$ agreeing with sigma on A[m], of degree prime to m. Let its ideal be a, and put $\eta_m=f_m^{-1}\sigma$ on the finite-adic module. At every rational prime dividing m it preserves the integral Tate lattice, and its reduction modulo m is1, by the torsion relation and the lattice description in [F1]. As that local lattice is an invertible rank-one OE-lattice, this means $\eta_{m,v}\equiv1\pmod{mO_{E_v}}$. At all finite places sigma carries the integral torsion lattice isomorphically onto the target's lattice. In rational lattice coordinates I,J with $f_m$ multiplier c, this says $\eta_m\widehat I=c^{-1}\widehat J$, hence $I(\eta_m)=c^{-1}J I^{-1}=a^{-1}$. Thus step 1.2 with b=1 gives $\theta_{m,E}(\eta_m)=[a]^{-1}$. Since $\eta_m$ differs from the original $\eta_f$ only by $E^\times$, it gives the same ray image. No inverse ideal sign is omitted. [F1, F3, F5, step 1.1, step 2.1, step 1.2, construct, algebra]

4.1 The Given reciprocal-Artin identity means that the arithmetic Artin image of s is sigma inverse. Thus for every sufficiently divisible m the ideal reciprocity assertion in [F5] gives $[a]=N_\Phi(\theta_{m,F}(s))^{-1}$. Combining step 1.2 and step 3.1 yields $\theta_{m,E}(\eta_f)=\theta_{m,E}(N_\Phi(s))$. Consequently $\eta_f/N_\Phi(s)$ lies in $E^\times W_m$ for this cofinal collection of integer moduli. Such unit congruence subgroups are a basis at the identity in the finite idele group, so the ratio lies in the principal closure. By [F6] its class is in $K_E$. This proves the first claim, and step 2.1 transports it back to the original arbitrary endomorphism order. [F3, F4, F5, F6, step 2.1, step 1.2, step 3.1, algebra]

5.1 Finally let $d=s'/s$ have reciprocal Artin image1. By [F6] for the CM field F, d lies in its principal closure, so $\theta_{m,F}(d)=1$ for every m. Step 1.2 gives $\theta_{m,E}(N_\Phi(d))=1$ for every m, hence its class k lies in $K_E$. Apply [F7] with the identity automorphism of C over F: $N_{F/\mathbb Q}(d)=q$ for a positive rational q. Its reflex-product identity gives $N_\Phi(d)\overline{N_\Phi(d)}=q\in E^\times$. Therefore $k\bar k=1$. By [F6], $\bar k=k$ and the kernel has no nontrivial 2-torsion, so $k=1$. This means exactly $N_\Phi(s'/s)\in E^\times$ as a principal finite idele. These arguments include m=1, product CM algebras and all ramification, with no assumption that the initial order is maximal or that a reciprocal Artin element is arithmetic Frobenius. [F4, F6, F7, step 1.2, step 4.1, algebra] ∎

## Source-reading boundary

Milne2007 Theorem3.2 and its complete proof, printed19–20, and the finite-adic comparison/ray-diagram part of Theorem3.10's proof, printed23–24, were read in full. The inverse signs, cofinal-modulus argument, local determinant-congruence extension and arbitrary-order saturation are supplied explicitly above. The parent polarization comparison is not silently imported. The final representative-change claim follows from the actual recorded norm/cyclotomic and Artin-kernel suppliers; no Hasse norm, Chevalley or Kronecker–Weber theorem is imported here.
