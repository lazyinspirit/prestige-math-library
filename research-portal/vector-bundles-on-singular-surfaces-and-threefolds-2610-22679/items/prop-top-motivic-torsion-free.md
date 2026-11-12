---
id: prop-top-motivic-torsion-free
kind: proposition
title: Torsion freeness of top threefold motivic cohomology
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - lem-author-c5b0693f4fc3-top-torsion-bockstein
  - lem-author-c5b0693f4fc3-top-torsion-primewise
  - lem-author-c5b0693f4fc3-top-torsion-invertible-prime
  - lem-author-c5b0693f4fc3-top-torsion-characteristic-prime
  - def-article-conventions
  - math:def-affine-scheme
  - math:def-algebraically-closed-field
  - math:def-annihilator-and-torsion-of-a-module
  - math:def-axiom-of-choice
  - def-derived-sections-on-sites
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-field
  - math:def-ring-characteristic
  - math:def-prime
  - math:lem-characteristic-and-additive-order
  - thm-author-c5b0693f4fc3-top-torsion-em-syntomic
formulation_deps:
  - def-motivic-cohomology
  - def-article-conventions
  - math:def-affine-scheme
  - math:def-algebraically-closed-field
  - math:def-annihilator-and-torsion-of-a-module
  - math:def-axiom-of-choice
  - def-derived-sections-on-sites
argument_deps:
  - def-motivic-cohomology
  - lem-author-c5b0693f4fc3-top-torsion-bockstein
  - lem-author-c5b0693f4fc3-top-torsion-primewise
  - lem-author-c5b0693f4fc3-top-torsion-invertible-prime
  - lem-author-c5b0693f4fc3-top-torsion-characteristic-prime
  - def-article-conventions
  - math:def-affine-scheme
  - math:def-algebraically-closed-field
  - math:def-annihilator-and-torsion-of-a-module
  - math:def-axiom-of-choice
  - def-derived-sections-on-sites
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-field
  - math:def-ring-characteristic
  - math:def-prime
  - math:lem-characteristic-and-additive-order
  - thm-author-c5b0693f4fc3-top-torsion-em-syntomic
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  lem-author-c5b0693f4fc3-top-torsion-bockstein: mathematical-premise
  lem-author-c5b0693f4fc3-top-torsion-primewise: mathematical-premise
  lem-author-c5b0693f4fc3-top-torsion-invertible-prime: mathematical-premise
  lem-author-c5b0693f4fc3-top-torsion-characteristic-prime: mathematical-premise
  def-article-conventions: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-annihilator-and-torsion-of-a-module: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:thm-affine-schemes-quasi-separated: mathematical-premise
  math:def-field: mathematical-premise
  math:def-ring-characteristic: mathematical-premise
  math:def-prime: mathematical-premise
  math:lem-characteristic-and-additive-order: mathematical-premise
  thm-author-c5b0693f4fc3-top-torsion-em-syntomic: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Proposition 2.6, printed pp. 5–6; Notation and conventions, printed p. 3
      statement: Proposition 2.6 asserts torsion-freeness of integral motivic
        cohomology in degree six and weight three for affine threefolds over
        algebraically closed fields. Its proof treats characteristic zero and
        defers the general case. The affine schemes in the article are of finite
        type.
      hypotheses: X is an affine threefold over an algebraically closed field k. No
        smoothness, reducedness, normality or irreducibility hypothesis appears
        in the proposition. The printed proof assumes characteristic zero.
      reading_limits: Freshly read the frozen article extraction at the conventions
        and the complete Proposition 2.6 statement and proof. No new visual PDF
        inspection or source-defect adjudication is claimed. The local proof
        uses the current declared vanishing and algebra suppliers; the deferred
        positive-characteristic proof is not imported as a premise.
    - title: Elden Elmanto (joint work with Matthew Morrow), Zero cycles on singular
        varieties, Oberwolfach Report 36/2025
      url: https://ems.press/content/serial-article-files/52244
      locator: "Printed pp. 1994–1996 (PDF pages 46–48, one-based): Theorem 1, Theorem
        3(2), Theorem 4 and its proof, and affine torsion application"
      statement: Theorem 4 makes the prime-coefficient motivic-to-syntomic comparison
        an equivalence in weights at least the dimension. Its
        characteristic-prime proof kills the Artin–Schreier obstruction. The
        subsequent affine application separates invertible and characteristic
        primes. Theorem 3(2) prints an etale lower-right corner; Theorem 4
        describes the obstruction cofiber without the shift appearing in EM
        Corollary 4.32.
      hypotheses: For Theorem 4, X is finite type over an algebraically closed field,
        the coefficient is a prime, and the weight is at least dim X;
        reducedness is not assumed. Reducedness belongs separately to Theorem 1.
        The affine application obtains primewise injectivity in dimension at
        least three in both prime cases.
      reading_limits: Freshly read the primary published PDF extraction at these
        statements, the complete Theorem 4 proof and the affine application. No
        fresh visual inspection or reconstruction of Artin vanishing, rigidity
        or Kato–Kuzumaki is claimed. The existing source-display findings remain
        historical; this repair makes no new source-defect finding. The precise
        comparison used in the proof remains supplied through the two declared
        vanishing lemmas.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: "v1, printed pp. 24–25: Definition 4.14 and Lemma 4.16 with proof;
        printed pp. 29–30: Theorem 4.28, Definition 4.29, Remarks 4.30–4.31,
        (4.7), Corollary 4.32 with proof"
      statement: Lemma 4.16 gives the finite filtration of mod-p weight-j syntomic
        cohomology for every F_p-algebra. Theorem 4.28 prints the eh lower-right
        corner. Definition 4.29 specifies the obstruction; Corollary 4.32 gives
        the natural fiber sequence from motivic to syntomic cohomology with
        final term R Gamma_cdh(X, nu-tilde_r(j))[-j-1].
      hypotheses: p is prime; A is any F_p-algebra in Lemma 4.16. The comparison
        square and fiber sequence apply to qcqs F_p-schemes, with nonnegative
        weight and the specified p-power coefficients. Use r=1 and weight three.
        No regularity, smoothness or reducedness condition is imposed.
      reading_limits: Freshly read the versioned primary PDF extraction at these
        definitions and statements, Lemma 4.16 and its proof, and the comparison
        and fiber-sequence passages with their proofs. The title-page extraction
        confirms v1. No fresh image inspection is claimed. Underlying de
        Rham–Witt, Cartier, TC, rigidity and field theorems are not
        reconstructed; the existing EM supplier specifies the obstruction and
        the exact derived conventions.
proof_strategy: direct
dependency_level: 13
---

## Statement
Assume the Axiom of Choice and fixed universe and site-size bounds for the derived-section construction used by the vanishing suppliers. For an affine threefold $X$ over an algebraically closed field $k$, $H^{6,3}_{\rm mot}(X,\mathbb Z)$ is torsion-free. Threefold means finite type and dimension three, without any smoothness, reducedness or irreducibility assumption. A group is torsion-free when $na=0$ for a positive integer $n$ implies $a=0$.

## Statement references
[[def-article-conventions]]

[[math:def-affine-scheme]]

[[math:def-algebraically-closed-field]]

[[math:def-annihilator-and-torsion-of-a-module]]

[[def-motivic-cohomology]]

[[math:def-axiom-of-choice]]

[[def-derived-sections-on-sites]]

## Facts & Assumptions
[F1] [[def-motivic-cohomology]] defines $C=\mathbb Z(3)_{\rm mot}(X)$ in $D(\mathbb Z)$, its cohomology as an abelian group, and $C/\ell=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/\ell$ by the objectwise derived coefficient construction. Thus $H^i(C/\ell)=H^{i,3}_{\rm mot}(X,\mathbb Z/\ell)$ and $H^6(C)=H^{6,3}_{\rm mot}(X,\mathbb Z)$.

[F2] [[lem-author-c5b0693f4fc3-top-torsion-invertible-prime]] gives $H^5(C/\ell)=0$ for primes invertible in $k$, under [A1]. [[lem-author-c5b0693f4fc3-top-torsion-characteristic-prime]] gives the same when $\operatorname{char}k=\ell>0$. Both apply to affine finite-type dimension-three schemes over algebraically closed fields, without smoothness, reducedness or irreducibility.

[F3] [[lem-author-c5b0693f4fc3-top-torsion-bockstein]] turns $H^5(C/\ell)=0$ into injectivity of multiplication by $\ell$ on $H^6(C)$. [[lem-author-c5b0693f4fc3-top-torsion-primewise]] detects torsion-freeness of an abelian group from this injectivity for all primes. The group convention is the $\mathbb Z$-module torsion convention of [[math:def-annihilator-and-torsion-of-a-module]], as spelled out in that primewise supplier and in the Statement.

[F4] The scheme-over-base, affine finite-type and chain-dimension conventions are those of [[def-article-conventions]]. Affine means isomorphic to the spectrum of a ring, as in [[math:def-affine-scheme]], and algebraically closed has the polynomial-root meaning in [[math:def-algebraically-closed-field]]. Under [A1], [[math:cor-affine-scheme-quasi-compact]] and [[math:thm-affine-schemes-quasi-separated]] show that $X$ lies in the qcqs category on which [F1] is defined.

[F5] In the field of [[math:def-field]], every nonzero element is a unit and $1_k\ne0_k$. For an integer $n$, write $n\cdot1_k$ for its additive multiple; characteristic is the least positive multiple that vanishes, or zero if none, as in [[math:def-ring-characteristic]]. By [[math:lem-characteristic-and-additive-order]], $n\cdot1_k=0$ exactly when $\operatorname{char}k$ divides $n$. A prime has only $1$ and itself as positive divisors, as in [[math:def-prime]]. Invertibility of a prime in $k$ means invertibility of $\ell\cdot1_k$.

[A1] Assume [[math:def-axiom-of-choice]] and the fixed universe and site-size conventions of [[def-derived-sections-on-sites]], using compatible sites for the comparison and vanishing constructions. These are the Choice and size premises in the invertible-prime supplier of [F2]; Choice also permits the quasi-compactness input in [F4]. No extra geometric hypothesis on $X$ is imposed by these conventions.

## Proof
**Given:** $X,k$ as stated, with [A1].

**Goal:** Prove torsion-freeness in every characteristic.

1.1 By [F4] and [A1], the complex $C$ of [F1] is defined for $X$. Fix any prime $\ell$. If $\ell\cdot1_k\ne0$, it is a unit by [F5], so apply the invertible-prime part of [F2]. Otherwise [F5] shows that the characteristic is positive and divides $\ell$; it exceeds one since $1_k\ne0_k$, so primality forces $\operatorname{char}k=\ell$. Apply the characteristic-prime part of [F2]. All its geometric hypotheses follow from [F4] and the given assumptions. Hence $H^5(C/\ell)=0$ for every prime. [given, F1, F2, F4, F5, A1]

2.1 By [F3], multiplication by every prime on the abelian group $H^6(C)$ is injective. The primewise criterion makes $H^6(C)$ torsion-free. By [F1] this is precisely $H^{6,3}_{\rm mot}(X,\mathbb Z)$. [F1, F3, step 1.1] ∎

## Source qualifications
The article's Proposition 2.6, pp. 5–6, states the full assertion but supplies only a characteristic-zero proof. This is the previously recorded nonfatal omission in that source. The current argument uses the separate published report Theorem 4 at weight three and EM v1 Lemma 4.16 through [F2], rather than treating the article's deferred positive-characteristic proof as a premise. The report's separate reducedness hypothesis in Theorem 1 is not imposed in its Theorem 4.

The report Theorem 3(2) prints an étale lower-right corner, while EM v1 Theorem 4.28 prints the éh corner. This is the previously recorded display discrepancy, not an assertion here of theorem-level falsity. The proof above uses the precise EM comparison through its declared suppliers. The report's Theorem 4 proof describes its characteristic-prime comparison cofiber without the shift: EM v1 Corollary 4.32 gives $R\Gamma_{\rm cdh}(X,\widetilde\nu_1(3))[-4]$. Here the obstruction and derived cdh expression are exactly those specified by [[thm-author-c5b0693f4fc3-top-torsion-em-syntomic]], specialized to weight three and prime coefficients. The previously recorded omission is nonfatal for that application because the report proves vanishing of the obstruction itself, which also kills its shift.

The separate historical finding about the unused display in report Remark 5 is retained in the workflow findings. No higher-Chow counterexample or replacement duality formula is asserted in this proposition.
