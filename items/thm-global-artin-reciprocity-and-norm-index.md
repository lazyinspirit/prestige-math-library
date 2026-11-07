---
id: thm-global-artin-reciprocity-and-norm-index
kind: theorem
title: "Global Artin reciprocity identifies the idèle norm quotient with the abelian Galois group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-global-artin-map-as-product-of-local-reciprocity-maps
  - thm-number-field-infinitely-many-nonsplit-primes
  - thm-number-field-second-norm-index-inequality
  - thm-local-artin-reciprocity-and-norm-index
  - thm-archimedean-local-reciprocity
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-local-cyclic-algebra-invariant-artin-compatibility
  - thm-local-artin-unramified-frobenius-normalization
  - thm-lubin-tate-explicit-local-reciprocity
  - def-lubin-tate-formal-group
  - lem-canonical-local-reciprocity-is-compatible-with-field-norms
  - cor-number-field-brauer-class-splits-over-cyclic-cyclotomic-extension
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - thm-archimedean-brauer-groups-and-invariant-maps
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - cor-unramified-prime-decomposition-in-a-cyclotomic-field
  - lem-arithmetic-frobenius-on-a-cyclotomic-field
  - thm-global-field-completion-tensor-product-decomposition
  - thm-field-norm-and-trace-by-embeddings
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC/CC/DC are the unchanged original assumptions. The proof uses canonical
  local reciprocity, finite norm functoriality, full Lubin–Tate comparison and
  finite Brauer splitting/comparison. Global Brauer sum-zero is derived here
  through cyclic cyclotomic splitting, not assumed from BHN or a global
  class-formation theorem.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII §8, Theorem 8.1 and its reciprocity-law deduction"
    - title: "J. Neukirch, Algebraic Number Theory"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
      locator: "VI §5, Propositions 5.6–5.8, printed pp. 391–394"
verification: {}
---

## Statement

Assume the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC). Let $L/K$ be a finite abelian extension of number fields, let $C_K=\mathbb A_K^\times/K^\times$, and let $N_{L/K}C_L$ be the image of the idèle-class norm. The global Artin map is trivial on $K^\times$, contains $N_{L/K}C_L$ in its kernel, and induces an isomorphism

$$C_K/N_{L/K}C_L\xrightarrow{\sim}\operatorname{Gal}(L/K).$$

## Statement references

[[def-global-artin-map-as-product-of-local-reciprocity-maps]]

[[thm-number-field-second-norm-index-inequality]]

[[cor-number-field-brauer-class-splits-over-cyclic-cyclotomic-extension]]

[Milne, *Class Field Theory*, VII §8](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Neukirch, *Algebraic Number Theory*, VI §5](https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, and DC; the finite abelian number-field extension $L/K$ in the unchanged Statement.

[F1] The idele Artin map is the finite product of the compatible distinguished local maps. Local reciprocity kills actual local norms and has arithmetic Frobenius normalization on unramified extensions. [[def-global-artin-map-as-product-of-local-reciprocity-maps]] [[thm-local-artin-reciprocity-and-norm-index]] [[thm-local-artin-unramified-frobenius-normalization]]

[F2] Full Lubin–Tate reciprocity identifies the distinguished map on normalized formal-module torsion: units act by their inverse scalar action, and the parameter acts trivially on its torsion field. [[thm-lubin-tate-explicit-local-reciprocity]] [[def-lubin-tate-formal-group]]

[F3] The distinguished local maps commute with finite separable field norms. Field norms are products over separable embeddings, and completion of a finite global extension is the product of its local completions. [[lem-canonical-local-reciprocity-is-compatible-with-field-norms]] [[thm-field-norm-and-trace-by-embeddings]] [[thm-global-field-completion-tensor-product-decomposition]]

[F4] Cyclotomic Galois automorphisms are their exponent classes; at an unramified rational prime the arithmetic Frobenius exponent is that prime. [[cor-the-galois-group-of-a-rational-cyclotomic-field]] [[cor-unramified-prime-decomposition-in-a-cyclotomic-field]] [[lem-arithmetic-frobenius-on-a-cyclotomic-field]]

[F5] For every finite-place scalar localization, the invariant of the cyclic algebra $C(\chi,a)$ is the value of the restricted character on the actual canonical local Artin factor, including decomposition-degree drops and the zero character. [[lem-local-cyclic-algebra-invariant-artin-compatibility]]

[F6] A central simple algebra split by a finite Galois extension has its finite factor-set class; the comparison $b=-o$ is an isomorphism to H2, sends a crossed-product algebra to its multiplication cocycle, and commutes with scalar extension. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F7] Every central simple number-field algebra is split by a totally complex finite cyclic cyclotomic extension. [[cor-number-field-brauer-class-splits-over-cyclic-cyclotomic-extension]]

[F8] At a real place, reciprocity is the sign/conjugation map and the nonzero Brauer class has invariant $1/2$; complex reciprocity and the complex Brauer group are trivial. [[thm-archimedean-local-reciprocity]] [[thm-archimedean-brauer-groups-and-invariant-maps]]

[F9] Every nontrivial finite solvable extension has infinitely many nonsplit primes. The class norm quotient for a finite Galois extension is finite with order dividing its degree. [[thm-number-field-infinitely-many-nonsplit-primes]] [[thm-number-field-second-norm-index-inequality]]

[A1] The original AC/CC/DC satisfy the literal hypotheses of the local, finite Brauer, cyclotomic-splitting and norm-index suppliers. Neither BHN nor global class formation is an input. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** prove principal reciprocity first for rational cyclotomic fields, then by norm base change for cyclotomic number-field extensions; cyclic cyclotomic splitting transfers this to the cyclic classes testing every finite character.

**Given:** The original data and [F1]–[F9], [A1].

1.1 On $\mathbb Q_\ell$, the formal multiplicative group $F(X,Y)=X+Y+XY$ with $[a](X)=(1+X)^a-1$ is normalized Lubin–Tate for parameter $\ell$. Its binomial coefficients are integral: for each coefficient approximate $a\in\mathbb Z_\ell$ by nonnegative integers and use continuity of that fixed rational polynomial; integrality follows from closedness of $\mathbb Z_\ell$. The formal action identities hold for nonnegative integers and therefore for all $a,b\in\mathbb Z_\ell$ coefficientwise by the same polynomial continuity. Its tangent coefficient is $a$ and $[\ell](X)\equiv X^\ell\pmod\ell$. Its level-$r$ torsion is $\zeta_{\ell^r}-1$. Thus [F2] says the distinguished local map for $a=u\ell^t$ acts on $\mu_{\ell^r}$ by exponent $u^{-1}$; the uniformizer part acts trivially. This verifies the formal model directly, without importing a later Example as a logical supplier. [F2, A1, given, construct, algebra]

1.2 If a central simple $K$-algebra $A$ is split by a cyclic extension $M/K$ with generator $\sigma$, [F6] represents its class by a normalized factor set $c$ and its crossed product. In that crossed product choose the homogeneous element $u$ of degree $\sigma$. Then $u^n=b\in M^\times$, $n=[M:K]$, and commutation with $u$ forces $\sigma(b)=b$, so $b\in K^\times$. Each other homogeneous basis element is an $M^\times$ multiple of the corresponding $u^i$. Hence this crossed product is $A(M,\sigma,b)$ with relations $ux=\sigma(x)u$ and $u^n=b$. Injectivity of the comparison shows $[A]=[A(M,\sigma,b)]$. The associated character is $\chi(\sigma)=1/n$. At finite places [F5] gives its invariant as $\chi(\operatorname{Art}_v(b))$. The same formula holds at real places: restricting the carry factor set to the order-two decomposition group gives $u^{n/2}$ with square $b$, hence the algebra $(\mathbb C/\mathbb R,b)$; it splits for $b>0$ and is the quaternion class for $b<0$, with invariant $1/2$ as in [F8]. If the local group is trivial its invariant is zero, and at complex places both sides vanish. The quaternion assertion follows by scaling to $b=-1$, whose four-square norm has no nonzero zero and so gives a division algebra; for $b>0$ the positive square root gives the split action on $\mathbb C$. These arguments also cover smaller decomposition groups in [F5]. [F5, F6, F8, A1, given, construct, algebra]

2.1 For $E=\mathbb Q(\mu_{\ell^r})$ and a principal rational $a\ne0$, the local factor at $p\ne\ell$ has exponent $p^{v_p(a)}$ by [F1] and [F4]. The real factor has exponent $\operatorname{sgn}(a)$ by [F8]. At $\ell$, write $a=u\ell^{v_\ell(a)}$; step 1.1 gives exponent $u^{-1}$. Since $u=\operatorname{sgn}(a)\prod_{p\ne\ell}p^{v_p(a)}$ in $\mathbb Z_\ell^\times$, their finite product is exactly one modulo $\ell^r$. Therefore the rational principal Artin map is trivial on every prime-power cyclotomic field, and hence on $\mathbb Q(\mu_N)$ for every $N$, since those fields form its finite compositum. This includes $\ell=2$ and the trivial conductors. [F1, F4, F8, step 1.1, algebra]

3.1 Let $K$ be any number field and put $M=K(\mu_N)$. At a finite rational place $p$, [F3] identifies the norm of a principal $K$-element with the product of the local norms over $v\mid p$, and its local Artin values with the restrictions of the corresponding $K_v$ Artin values to roots of unity. At infinity the same compatibility is immediate: a complex norm is positive real and has trivial real Artin value, while a real norm is the identity local map. Multiplying these finite local norm squares gives that the restriction of $\operatorname{Art}_{M/K}(a)$ to $\mathbb Q(\mu_N)$ equals $\operatorname{Art}_{\mathbb Q(\mu_N)/\mathbb Q}(N_{K/\mathbb Q}a)$ for $a\in K^\times$. The latter is one by step 2.1. Restriction $\operatorname{Gal}(M/K)\to\operatorname{Gal}(\mathbb Q(\mu_N)/\mathbb Q)$ is injective, since $M$ is their compositum. Thus principal reciprocity holds for $M/K$, and for every subextension by compatibility [F1]. [F1, F3, F8, step 2.1, algebra]

4.1 Let $A$ be any central simple algebra over $K$. By [F7] it is split by a cyclic cyclotomic $M/K$, so step 1.2 expresses its Brauer class as $A(M,\sigma,b)$. Its local invariant sum is therefore $\sum_v\chi(\operatorname{Art}_v(b))=\chi(\operatorname{Art}_{M/K}(b))=0$ by step 3.1. The sum is finite: outside the finitely many ramified places and divisors of $b$, the local extension is unramified and $b$ is a unit, so [F1] and [F5] give zero invariant. Equality of Brauer classes preserves each local invariant by scalar compatibility [F6], so the original algebra has the same finite zero sum. This derives exactly the global sum-zero needed here without assuming the BHN theorem. [F1, F5, F6, F7, step 3.1, step 1.2, algebra]

5.1 Return to the given finite abelian $L/K$ and $a\in K^\times$. For any character $\psi:G\to\mathbb Q/\mathbb Z$, form the cyclic algebra $C(\psi,a)$ from its cyclic quotient, using the scalar algebra for the zero character. Its finite-place invariants are $\psi(\operatorname{Art}_v(a))$ by [F5], and its archimedean invariants are the same evaluations by step 1.2. Step 4.1 now gives $\psi(\operatorname{Art}_{L/K}(a))=0$. Characters separate a finite abelian group: a finite cyclic decomposition supplies a character nonzero on any given nonidentity coordinate. Therefore $\operatorname{Art}_{L/K}(a)=1$ for every principal idele. [F1, F5, F8, step 1.2, step 4.1, construct, algebra]

6.1 Every idele norm from $L$ is killed by the idele Artin map: at a finite place it is the product of field norms from the completions above it, which [F1] kills; at real places complex norms are positive and [F8] kills them. Step 5.1 makes principal ideles trivial too. Hence the map factors through $C_K/N_{L/K}C_L$ with the asserted norm containment. [F1, F3, F8, step 5.1, algebra]

7.1 The unramified Frobenius elements generate $G$. Indeed, if the subgroup they generate were proper, its fixed field would be a nontrivial abelian extension of $K$ with all but finitely many primes split, contradicting [F9]. Each such Frobenius is the Artin image of an idele with a uniformizer at that place and $1$ elsewhere by [F1], so the quotient map of step 6.1 is onto. Its domain is finite with order dividing $|G|$ by [F9]; surjectivity makes its order at least $|G|$, so its order is exactly $|G|$ and the map is an isomorphism. When $L=K$, the norm is the identity and both groups are trivial, included in the same argument. Thus all clauses of the original Statement hold. [F1, F9, step 6.1, algebra] ∎
