---
id: thm-unramified-local-langlands-for-gl-n
kind: theorem
title: "Unramified local Langlands dictionary for GLₙ"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-weil-group-of-a-local-field
  - def-weil-deligne-representation-of-a-local-field
  - def-smooth-admissible-representation-of-gln-over-a-p-adic-field
  - thm-local-artin-reciprocity-identifies-the-weil-group-abelianization
  - thm-satake-isomorphism-and-unramified-classification-for-gln
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Torsten Wedhorn, The Local Langlands Correspondence for GL(n) over p-adic Fields, §§4.1.3–4.1.8"
      url: "https://arxiv.org/pdf/math/0011210"
    - title: "Masao Oi, Introduction to the Local Langlands Correspondence, §6.1"
      url: "https://masaooi.github.io/LLC.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a finite extension of $\mathbb Q_p$ with residue field of cardinality $q$, let $\mathcal O_K$ be its valuation ring, let $\pi_K$ be a uniformizer, let $G=\mathrm{GL}_n(K)$, let $K_0=\mathrm{GL}_n(\mathcal O_K)$, and let $B$ be the subgroup of upper triangular matrices. Give the spherical Hecke algebra of compactly supported $K_0$-bi-invariant complex functions the convolution normalization $\operatorname{vol}(K_0)=1$. For an irreducible smooth admissible representation $\Pi$ of $G$ with $\Pi^{K_0}\ne0$, its normalized Satake parameter $s(\Pi)$ is the semisimple conjugacy class in $\mathrm{GL}_n(\mathbb C)$ obtained from the Hecke eigencharacter on the one-dimensional space $\Pi^{K_0}$ under the normalized Satake isomorphism with $\mathbb C[X_1^{\pm1},\ldots,X_n^{\pm1}]^{S_n}$. The unramified local Langlands parameter of $\Pi$ is the unique Frobenius-semisimple Weil–Deligne representation $(r_\Pi,\mathbb C^n,0)$ for which $r_\Pi$ is trivial on $I_K$ and $r_\Pi(\Phi)$ is conjugate to $s(\Pi)$ for geometric Frobenius $\Phi$. Its Galois-side local $L$-factor is $\det(1-q^{-s}s(\Pi))^{-1}$. Under local reciprocity normalized by $\operatorname{Art}_{K,\mathrm{LL}}(\pi_K)=\Phi_K$, this normalization agrees in rank one with $\chi\mapsto\chi\circ\operatorname{Art}_{K,\mathrm{LL}}^{-1}$.

## Statement references

[[def-weil-deligne-representation-of-a-local-field]]

[[def-weil-group-of-a-local-field]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-local-l-and-epsilon-factors-of-a-weil-deligne-representation]]

[[def-smooth-admissible-representation-of-gln-over-a-p-adic-field]]

[[def-local-artin-reciprocity-map]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[thm-local-artin-unramified-frobenius-normalization]]

[[thm-local-artin-reciprocity-identifies-the-weil-group-abelianization]]

[[thm-satake-isomorphism-and-unramified-classification-for-gln]]

[J. S. Milne, *Class Field Theory*, Chapter III §§1–3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Torsten Wedhorn, *The Local Langlands Correspondence for GL(n) over p-adic Fields*, §§4.1.3–4.1.8](https://arxiv.org/pdf/math/0011210)

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §6.1](https://masaooi.github.io/LLC.pdf)

[[def-dependent-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]
## Facts & Assumptions

**Given:** Exactly the Axiom of Choice, field, local groups, valuation and irreducible admissible spherical representation in the Statement.

[A1] AC is the original explicit hypothesis and is the scope of the two theorem suppliers below. [[def-axiom-of-choice]]

[F1] The Weil group has open inertia and infinite cyclic quotient; arithmetic and geometric Frobenius cosets are inverse generators. [[def-weil-group-of-a-local-field]]

[F2] A Weil–Deligne representation has finite-dimensional space, finite inertia image and nilpotent $N$ satisfying $r(w)Nr(w)^{-1}=|w|_KN$; Frobenius semisimplicity means the Frobenius action is diagonalizable. [[def-weil-deligne-representation-of-a-local-field]]

[F3] An unramified smooth admissible representation has a nonzero maximal-compact-fixed subspace. [[def-smooth-admissible-representation-of-gln-over-a-p-adic-field]]

[F4] The normalized Satake isomorphism identifies the Hecke character on the one-dimensional fixed subspace with an unordered nonzero tuple; the spherical constituent of the normalized principal series with $\chi_i(\pi_K)=\alpha_i$ has that tuple. This supplier now has its actual complete local proof, replacing the old absence marker. [[thm-satake-isomorphism-and-unramified-classification-for-gln]]

[F5] For finite $K/\mathbb Q_p$ and AC, arithmetic local reciprocity identifies $K^\times$ topologically with the Hausdorff Weil abelianization. Its inverse-argument convention $\operatorname{Art}_{K,\mathrm{LL}}$ has geometric Frobenius coset, and an unramified $\chi$ corresponds to the unique unramified Weil character with geometric Frobenius value $\chi(\pi_K)$. [[thm-local-artin-reciprocity-identifies-the-weil-group-abelianization]]

## Proof

**Proof technique:** construct an unramified representation of the cyclic Weil quotient.

1.1 Apply [F4] under [A1]. The space $\Pi^{K_0}$ is one-dimensional, its Hecke character has a well-defined normalized Satake class $s(\Pi)$, and a diagonalizable representative $A\in\mathrm{GL}_n(\mathbb C)$ exists. For example, take the diagonal matrix of the unordered nonzero tuple in any finite ordering; different orderings give conjugate matrices. [A1, F3, F4, given, choose]

2.1 Choose a geometric Frobenius lift $\Phi\in W_K$. For $w=\Phi^m i$ with $m\in\mathbb Z$ and $i\in I_K$, set $r(w)=A^m$ and $N=0$. This is the composite of the quotient $W_K\to\mathbb Z$, using the geometric generator, with the homomorphism $m\mapsto A^m$, so it is well-defined. It is continuous because inertia is open, and has trivial inertia image; the monodromy relation holds because $N=0$. The action of $\Phi$ is $A$, hence is diagonalizable. Thus this is an unramified Frobenius-semisimple Weil–Deligne representation as required. [F1, F2, step 1.1, construct]

3.1 Conjugating $A$ conjugates this representation. Conversely any unramified representation factors through $W_K/I_K=\mathbb Z$ and is determined by the action of $\Phi$. An isomorphism is exactly a conjugacy of that action. Thus the semisimple conjugacy class $s(\Pi)$ determines the claimed parameter uniquely up to isomorphism, independently of the finite ordering and of the Frobenius lift (inertia acts trivially). [F1, step 2.1, algebra]

4.1 Its nilpotent kernel and inertia-fixed subspace are both $\mathbb C^n$. The Galois-side unramified local factor is, by the inverse characteristic-polynomial convention in the Statement, $\det(1-q^{-s}r(\Phi))^{-1}=\det(1-q^{-s}s(\Pi))^{-1}$. This finite determinant exists directly from the constructed matrix and is invariant under conjugacy. No construction or property of any epsilon factor is required for this clause. [step 2.1, step 3.1, given, algebra]

5.1 In rank one [F4] identifies $\Pi$ with the unramified character $\chi$ satisfying $\chi(\pi_K)=A$: the normalized principal series of $\mathrm{GL}_1$ is that character itself. By [F5] under [A1], $\chi\circ\operatorname{Art}_{K,\mathrm{LL}}^{-1}$ is unramified and has value $A$ on geometric Frobenius. The uniqueness proved in step 3.1 identifies it with our $r$. The exact equality $\operatorname{Art}_{K,\mathrm{LL}}(\pi_K)=\Phi_K$ is understood in the Weil abelianization by choosing its Frobenius lift through that fixed uniformizer; another lift has the same value for this unramified character. This proves the original rank-one normalization, rather than assuming normalization alone constructs reciprocity. [A1, F4, F5, step 3.1, algebra] ∎

## Proof status

Complete at the original AC, finite-$\mathbb Q_p$, spherical scope, using the actual Satake and characteristic-zero Artin–Weil bridge. Former L1/L2/L3 absence/conditional markers are obsolete. The determinant clause is proved directly, so unused general epsilon-factor and Deligne-construction dependencies are removed. This theorem neither proves nor uses the ramified higher-rank local Langlands correspondence, and gives no equal-characteristic extension of the Artin–Weil bridge.
