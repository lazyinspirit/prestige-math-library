---
id: lem-henselian-completion-finite-etale-and-finite-module-tate-comparison
kind: lemma
title: "Henselian completion preserves finite etale objects and finite-module Tate duality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-completion-of-an-absolutely-valued-field
  - thm-jacobian-criterion-smooth-morphism
  - thm-etale-locally-standard-etale
  - cor-henselian-local-simple-root-criterion
  - def-henselian-pair-and-henselian-local-ring
  - thm-adjugate-identity-over-a-commutative-ring
  - lem-finite-etale-galois-refinements-and-quotients
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-krasner-lemma-for-complete-nonarchimedean-fields
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-local-finite-module-tate-duality-in-characteristic-zero
  - lem-henselian-finite-residue-brauer-completion-and-support-trace
  - thm-cartier-smoothness-for-affine-groups-in-characteristic-zero
  - def-finite-flat-group-scheme-and-cartier-dual
  - thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC are explicit, including the CC convention for completion and Krasner. Compatible separable closures are chosen once under AC. Finite Galois cochains are actually compared; neither generic local Tate duality nor an arbitrary completion-invariance theorem is imported."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, II Section1 and III Section1; Algebraic Number Theory, Krasner approximation"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Noncomplete Henselian comparison is reconstructed below: explicit smooth approximation gives full faithfulness, polynomial approximation and Krasner give essential surjectivity, and normalized finite cochains give the actual duality comparison."
verification: {}
---

## Statement

Assume AC and DC. Let $R$ be a Henselian DVR of characteristic zero with
finite residue field, fraction field $K$ and valuation completion
$\widehat K$. Scalar extension is an equivalence between finite etale
$K$-algebras and finite etale $\widehat K$-algebras. Choose an embedding of a
separable closure $K_s$ into a separable closure $\widehat K_s$ extending
$K\to\widehat K$. The induced map
$$\operatorname{Gal}(\widehat K_s/\widehat K)\xrightarrow{\sim}\operatorname{Gal}(K_s/K)$$
is an isomorphism of profinite groups. For every finite discrete continuous
$G_K$-module $M$, it induces the actual cohomology restriction isomorphisms
in every degree, identifies its character duals, and carries the normalized
Tate cup pairings over $K$ to those over $\widehat K$. Consequently the
pairings
$$H^r_{\mathrm{cts}}(G_K,M^D)\times H^{2-r}_{\mathrm{cts}}(G_K,M)\longrightarrow\mathbb Q/\mathbb Z$$
are perfect pairings of finite groups for every integer $r$, with cohomology
zero in degrees above two and below zero.
For any commutative finite locally free $R$-group $N$, the same conclusions
hold for the generic fppf groups of $N_K$ and $(N^D)_K$, with the actual
Cartier evaluation and the support trace over $R$.
No completeness hypothesis on $R$ or $K$ is added. No integral exact
annihilator or unqualified choice-scope conclusion is asserted.

## Facts & Assumptions

**Given:** Exactly the Henselian DVR, completion, finite coefficients and explicit AC/DC in the Statement.

[A1] AC implies the CC convention used by completion and Krasner; DC remains explicit. [[def-axiom-of-choice]] [[def-dependent-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The completion is a complete valued field containing $K$ densely, with the same discrete value group and residue field. [[thm-completion-of-an-absolutely-valued-field]]

[F2] Smooth charts have finite presentations with invertible Jacobian minors; etale charts are locally standard etale; Henselianity lifts simple monic residue roots. Unit matrices are inverted by the adjugate identity. [[thm-jacobian-criterion-smooth-morphism]] [[thm-etale-locally-standard-etale]] [[cor-henselian-local-simple-root-criterion]] [[def-henselian-pair-and-henselian-local-ring]] [[thm-adjugate-identity-over-a-commutative-ring]]

[F3] Finite etale objects admit finite Galois refinements and all finite permutation objects descend along them; finite separable field extensions are simple. [[lem-finite-etale-galois-refinements-and-quotients]] [[thm-primitive-element-theorem-for-finite-separable-extensions]]

[F4] Krasner's strict conjugate-distance bound implies field containment over a complete local field. Finite complete extensions have the unique extending absolute value and are complete, and the complete-field Hensel factor theorem lifts sufficiently close simple polynomial roots. [[thm-krasner-lemma-for-complete-nonarchimedean-fields]] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F5] Complete characteristic-zero finite-residue fields have the full actual finite-module Tate cup duality and finite cohomology, with the canonical Frobenius carry normalization. [[thm-local-finite-module-tate-duality-in-characteristic-zero]]

[F6] Brauer completion over the present Henselian field is an isomorphism, and its normalized cohomological invariant and support trace commute with completion. [[lem-henselian-finite-residue-brauer-completion-and-support-trace]]

[F7] Affine finite-type group schemes in characteristic zero are smooth under AC. Cartier duality represents characters and their evaluation, and finite etale coefficients have actual etale/fppf cohomology comparison. [[thm-cartier-smoothness-for-affine-groups-in-characteristic-zero]] [[def-finite-flat-group-scheme-and-cartier-dual]] [[thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison]]

## Proof

**Proof technique:** finite smooth approximation, Krasner polynomial descent and comparison of the actual finite Galois cochains.

**Given:** The data above; use one uniformizer $\pi$ of $R$.

1.1 Smooth $K$-points are dense in completed points. We give the finite calculation needed here rather than assume completion invariance. In a standard smooth chart $f=(f_1,\ldots,f_r)=0$ through a completed point, fix its free coordinates at close $K$-approximations $a$. Let $J$ be the invertible dependent-coordinate Jacobian at $a$. Choose a sufficiently small fixed neighbourhood so all coefficients and entries of $J^{-1}$ have valuation lower bounds and all open denominators retain their nonzero values. For large $m$ the polynomial system $F(z)=\pi^{-m}f(a_{\mathrm{dep}}+\pi^mJ^{-1}z,a_{\mathrm{free}})$ has integral coefficients in positive degrees: its degree-$d\ge2$ coefficients gain $(d-1)m$. Choose $a$ close enough that its constant terms lie in $\pi R$; its Jacobian at zero is the identity. The residual zero lifts by Henselianity [F2]: the unit Jacobian defines an etale neighbourhood, a standard-etale chart reduces it to a monic simple-root problem, and unit denominators are preserved. The resulting $z\in\pi R^r$ gives a $K$-point arbitrarily close to the chosen completed point. All bounds involve only finitely many coefficients, and $m$ may be increased to prescribe the final neighbourhood. [F1, F2, given, choose, construct, algebra]

2.1 Every finite etale $K$-scheme $Y$ has $Y(K)=Y(\widehat K)$ under the actual scalar map. Its completed rational points form a finite set and are isolated from one another in any affine coordinate embedding. Since it is smooth, step 1.1 approximates each completed point by a $K$-point within a neighbourhood containing no other completed point; hence that point itself is over $K$. Injectivity is ordinary field injection. In particular no new separable algebraic elements of $K$ lie in $\widehat K$. [F1, F2, step 1.1, algebra]

3.1 For finite etale algebras $E,F$, the functor of algebra maps $E\to F$ is itself represented by a finite etale $K$-scheme. To see this using [F3], choose one finite Galois field splitting both algebras. Upstairs the functor is the finite constant set of maps between their finite geometric point sets. The permutation action descends this finite object by [F3], and affine descent identifies its points over every test algebra with the required maps; descent is unique because the two trivialized algebras and all their maps satisfy their actual Galois cocycle identities. Applying step 2.1 to this scheme proves that scalar extension is fully faithful, including equality of specified maps and isomorphisms. [F3, step 2.1, construct, algebra]

4.1 Let $\widehat L/\widehat K$ be any finite separable extension, generated by $\alpha$ with monic separable minimal polynomial $\widehat f$ of degree $n$, by [F3]. Choose a polynomial $f\in K[T]$ with coefficients sufficiently close to those of $\widehat f$. Its value at $\alpha$ is as small as desired and its derivative retains its nonzero value. The complete Hensel theorem [F4], after scaling the variable and equation to a simple residual root, gives a root $\beta\in\widehat L$ of $f$ arbitrarily close to $\alpha$. Choose this distance strictly below every nonzero conjugate distance for $\alpha$. Krasner [F4] gives $\widehat K(\alpha)\subseteq\widehat K(\beta)$, while $\beta\in\widehat L$ gives the opposite inclusion. Thus $\beta$ generates $\widehat L$; its degree is $n$, so the monic degree-$n$ polynomial $f$ is irreducible over $\widehat K$ and therefore over $K$. The finite separable algebra $L=K[T]/f$ has $L\otimes_K\widehat K\cong\widehat L$. For $n=1$ the same conclusion is immediate. Applying this to each factor of a finite etale algebra proves essential surjectivity, so the claimed category equivalence is established. [F1, F3, F4, step 3.1, choose, construct, algebra]

5.1 This equivalence preserves fields and finite Galois extensions. For a finite etale algebra, idempotents are the algebra maps $K\times K\to E$; full faithfulness proves that the completed algebra has precisely its original idempotents. Thus a field stays a field and a descended field is connected. Its degree is preserved by scalar extension. Automorphism groups are preserved by full faithfulness, so a finite Galois field stays Galois with its exact automorphisms, and every finite Galois completed extension descends to one because its automorphism count equals the preserved degree. The same argument applies to all intermediate fields and restriction maps. Under AC choose the compatible separable closures in the Statement; the algebraic closure of $K$ inside $\widehat K_s$ realizes such an embedding because characteristic zero makes all algebraic elements separable. Its compositum with $\widehat K$ contains every finite Galois extension of $\widehat K$, by the just-proved equivalence and uniqueness of the embeddings up to a finite automorphism. Restricting and taking the inverse limits of these identical finite Galois systems therefore gives the asserted topological Galois-group isomorphism. Changing the closure embedding only conjugates it. [A1, F3, step 3.1, step 4.1, construct, algebra]

6.1 Regard $M$ as a module for the completed group by this actual isomorphism. Pullback gives isomorphic normalized continuous cochain complexes in every degree, since both the topological group and its action are the same under that isomorphism. If $n$ kills $M$, its character dual has image in $\mu_n$. Both separable closures contain exactly the same $n$th roots under the chosen embedding, since characteristic zero gives $n$ distinct roots and they are all algebraic over $K$. Thus $M^D$ is also the actual completed dual, with the same evaluation. The cochain isomorphisms commute with cup product and the coefficient map $K_s^\times\to\widehat K_s^\times$. By [F6], the induced degree-two coefficient map has exactly the invariant compatibility required for the trace. Consequently the normalized pairings agree, not merely their group orders. [F6, step 5.1, construct, algebra]

7.1 Apply the actual completed-field theorem [F5] to those isomorphic complexes and pairings. All finite-module groups over $K$ are finite in degrees zero, one and two and zero in higher degrees. The pairings in the Statement are perfect in every integer degree, including the zero groups outside that range. This proves the generic noncomplete finite-module comparison without replacing the original Henselian field by a completeness hypothesis. [F5, F6, step 6.1, algebra]

8.1 Finally a generic fibre $N_K$ of the finite locally free group is affine of finite type over a characteristic-zero field, so [F7] makes it smooth. It has dimension zero because it is finite; hence it is finite etale, and the same holds for $(N^D)_K$. After one finite Galois splitting field these are constant finite groups with their descent action, and Cartier evaluation on their points is precisely the character duality in step 6.1. Over a field the finite Galois Cech nerves and exact geometric stalk compute etale cohomology by the corresponding continuous Galois cochains: on an injective sheaf the augmented free Cech sheaf complex is exact after Hom, and the finite-degree cochain double complex compares the resolutions. The actual finite-etale topology comparison in [F7] identifies this with fppf cohomology. Applying steps 6.1-5.2 therefore gives exactly the final generic fppf assertions, with the support trace of [F6]. The trivial algebra/product, zero module, rank-one group and all residue characteristics are included. Integral annihilators and the original unqualified choice scope remain separate obligations. [F5, F6, F7, step 5.1, step 6.1, step 7.1, construct, algebra] ∎
