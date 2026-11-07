---
id: lem-bounded-degree-local-field-extensions-finite
kind: lemma
title: Finitely many local extensions of bounded degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-countable-choice
  - def-field-of-p-adic-numbers
  - thm-p-adic-completion-is-a-field
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-splitting-fields-exist-for-nonzero-polynomials
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - cor-finite-extensions-of-finite-fields-are-simple
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - cor-complete-local-rings-are-henselian
  - cor-henselian-local-simple-root-criterion
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - lem-local-integers-of-finite-separable-local-extension-are-monogenic
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - thm-krasner-lemma-for-complete-nonarchimedean-fields
  - def-totally-bounded
  - thm-complete-and-totally-bounded-implies-compact
  - thm-finite-products-of-compact-spaces
  - lem-closed-subset-of-a-compact-space-is-compact
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: J. S. Milne, Algebraic Number Theory, Chapter VII, Proposition 7.64 and Remark 7.65
      url: https://www.jmilne.org/math/CourseNotes/ANTc.pdf
      locator: Proposition 7.64 proves finiteness of totally ramified extensions by compactness of Eisenstein-polynomial coefficient spaces and Krasner neighborhoods; Remark 7.65 reduces general local extensions to the unique unramified subextension.
    - title: G. Faltings, G. Wüstholz et al., Rational Points, Chapter V §2.3, Theorem 2.6
      url: https://yhzhumath.github.io/Mordell2024/RP.pdf
      locator: The global bounded-degree unramified-extension theorem and its reduction to bounded local discriminant exponents; the local finiteness proof is reconstructed in this item using Krasner neighborhoods.
---

## Statement

Assume Countable Choice. Let $F$ be a finite extension of the $p$-adic field $\mathbb Q_p$, and let $d\ge1$ be an integer. There are only finitely many $F$-isomorphism classes of finite extensions $E/F$ with $[E:F]\le d$.

## Statement references

[[def-countable-choice]]

[[def-field-of-p-adic-numbers]]

[Milne, *Algebraic Number Theory*, Chapter VII, Proposition 7.64 and Remark 7.65](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Faltings–Wüstholz et al., *Rational Points*, Chapter V §2.3, Theorem 2.6](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a finite extension $F/\mathbb Q_p$, and an integer $d\ge1$.

[A1] Countable Choice selects an element from each member of a countable family of nonempty sets. [[def-countable-choice]]

[F1] The named $\mathbb Q_p$ has a dense rational subfield and its extended $p$-adic metric as in [[def-field-of-p-adic-numbers]]; its complete nonarchimedean field structure is proved in [[thm-p-adic-completion-is-a-field]]. The local-field, valuation-ring and uniformizer terminology is [[def-local-field-valuation-ring-uniformizer-and-residue-field]]. Step 1.1 checks the finite-residue discrete-valuation hypotheses before applying [F2] and [F9].

[F2] For a finite extension of nonarchimedean local fields, $[E/F]=e(E/F)[k_E:k_F]$, and the normalized valuation on $F$ restricts from the normalized valuation on $E$ by the ramification index. [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[F3] Every finite extension of finite fields is simple and separable. [[cor-finite-extensions-of-finite-fields-are-simple]] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]

[F4] A complete local ring is Henselian, and each simple root over its residue field lifts to a root with that residue. [[cor-complete-local-rings-are-henselian]] [[cor-henselian-local-simple-root-criterion]]

[L1] [[lem-local-integers-of-finite-separable-local-extension-are-monogenic]] states that, under Countable Choice, equal residue fields imply every uniformizer generates the extension and its valuation ring. Its exact current body is included in the completed bounded independent five-item review.

[L2] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] states uniqueness of finite unramified local extensions with a given finite residue extension. Its exact current body is included in the completed bounded independent five-item review.

[L3] [[thm-krasner-lemma-for-complete-nonarchimedean-fields]] states Krasner's lemma: a root sufficiently close to a separable element contains that element's field. Its exact current body is included in the completed bounded independent five-item review.

[F9] Every finite extension of a complete nonarchimedean field has a unique extending absolute value. [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[F8] The valuation ring of a complete discretely valued field is complete. If the residue field is finite, each quotient modulo a power of a uniformizer is finite, so the cosets give finite nets at every radius and the ring is totally bounded; Countable Choice and the complete-plus-totally-bounded theorem make it compact. The sets $\pi\mathcal O$ and $\pi\mathcal O^\times=\pi\mathcal O\setminus\pi^2\mathcal O$ are closed, so the coefficient space $\mathscr E_e=(\pi\mathcal O)^{e-1}\times\pi\mathcal O^\times$ is a closed subset of a finite product of compact spaces and is compact. [[def-totally-bounded]] [[thm-complete-and-totally-bounded-implies-compact]] [[thm-finite-products-of-compact-spaces]] [[lem-closed-subset-of-a-compact-space-is-compact]]

[F10] A single nonzero polynomial over a field has a finite splitting field; only such finite extensions are used below. [[thm-splitting-fields-exist-for-nonzero-polynomials]]

[F11] Over a complete nonarchimedean field with valuation ring $A$, a polynomial $r\in A[U]$ with reduction $\bar r=U$ factors with a monic linear factor reducing to $U$: apply the nonmonic factor-Hensel lemma with $h_0=U$ and $H_0=1$. Thus $r$ has a root in the maximal ideal. No monicity of $r$ is assumed. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

## Proof

1.1 First check the local hypotheses for the given base. By [F1], $\mathbb Q_p$ is complete. A sufficiently close rational approximation to a nonzero $x\in\mathbb Q_p$ has the same absolute value as $x$, so its nonzero value group is $p^{\mathbb Z}$. A rational approximation within absolute value $<1$ to an element of its unit ball has denominator prime to $p$ after cancellation, and reduction of that denominator identifies its residue with an element of $\mathbb F_p$. Distinct integers modulo $p$ give distinct residues, and the maximal ideal is $p$ times the unit ball. Thus $\mathbb Q_p$ is a local field in [F1]. The already proved [F2] and [F9] give a complete discrete finite-residue extending valuation on every finite extension $F/\mathbb Q_p$. Fix a finite extension $E/F$ with $[E:F]\le d$. Let $f=[k_E:k_F]$. By [F3], choose a primitive residue element $\bar a$ and its monic minimal polynomial $\bar g\in k_F[T]$ of degree $f$. Lift $\bar g$ to a monic polynomial $g\in\mathcal O_F[T]$. A lift $a_0\in\mathcal O_E$ of $\bar a$ is a simple residue root of $g$, so [F4] gives $a\in\mathcal O_E$ with residue $\bar a$ and $g(a)=0$. Put $F_0=F(a)$. Since $g$ has degree $f$, $[F_0:F]\le f$; since its residue field contains $\bar a$, the residue degree is at least $f$. By [F2], $[F_0:F]=f$ and $e(F_0/F)=1$. Thus $F_0/F$ is unramified and $E/F_0$ has residue degree one. [A1, F1, F2, F3, F4, F9, given, choose, construct, algebra]

2.1 The possible residue degrees $f$ are integers between $1$ and $d$. For each such $f$, [L2] gives at most one $F$-isomorphism class of unramified extensions $F_0/F$ of degree $f$. Fix one such $F_0$. It remains to show that for every integer $e\le d/f$ there are only finitely many totally ramified extensions $E/F_0$ of degree $e$. [F2, L2, step 1.1, cases]

3.1 The case $e=1$ contributes only $F_0$. Suppose $e\ge2$ and let $\pi_E$ be a uniformizer. By [L1], $E=F_0(\pi_E)$ and $\mathcal O_E=\mathcal O_{F_0}[\pi_E]$. Its monic minimal polynomial $q(T)=T^e+c_{e-1}T^{e-1}+\cdots+c_0$ is Eisenstein: take a finite splitting field of $q$ containing $E$ using [F10]. By [F9], every $F_0$-embedding of $E$ into that field preserves the absolute value, so each conjugate of $\pi_E$ has normalized $F_0$-valuation $1/e$. Each elementary symmetric sum of $i<e$ conjugates has positive valuation and, being in $F_0$, valuation at least one, while the product of all $e$ conjugates has valuation exactly one. [A1, F1, F2, F9, F10, L1, step 2.1, given, construct, algebra]

4.1 Let $\mathscr E_e$ be the coefficient space of monic Eisenstein polynomials of degree $e$ over $F_0$. It is compact by [F8]. Every member $q$ is irreducible by the following direct DVR argument. If $q=ab$ with monic positive-degree factors over $F_0$, choose a finite splitting field using [F10] and its extending absolute value using [F9]. Every root of $q$ has absolute value at most one: otherwise its monic leading term strictly dominates every lower term. The symmetric root expressions for the coefficients of $a,b$ therefore put them in $\mathcal O_{F_0}$. Their monic reductions multiply to $T^e$, so both are positive powers of $T$. Both constant terms would belong to $\pi\mathcal O_{F_0}$, contradicting valuation one of $q(0)$. Finally $q$ is separable because $F_0$ has characteristic zero. [F1, F8, F9, F10, step 3.1, algebra]

5.1 Fix $q\in\mathscr E_e$, take $\alpha$ as the class of $T$ in the field $M=F_0[T]/(q)$, and use its complete extending valuation from [F9]. By [F10], split $q$ in one finite field $N$ containing $M$; equip $N$ with its unique extending absolute value. Since $q$ is separable, $D=q'(\alpha)\ne0$. Choose $\epsilon>0$ smaller than the finitely many distances $|\alpha-\alpha_1|$ to distinct roots in $N$. Choose $\rho\in M$ with $0<|\rho|<\epsilon$ small enough that all coefficients of $U^i$, $i\ge2$, in $q(\alpha+\rho U)/(D\rho)$ have absolute value less than one. Its constant coefficient is zero and its linear coefficient is one. Coefficientwise continuity gives an open coefficient neighborhood of $q$ such that every monic degree-$e$ polynomial $h$ in it has $r_h(U)=h(\alpha+\rho U)/(D\rho)\in\mathcal O_M[U]$ with reduction $U$. The generally nonmonic polynomial $r_h$ therefore has a root $u\in\mathfrak m_M$ by [F11]. Put $\beta=\alpha+\rho u\in M$, a root of $h$ satisfying $|\beta-\alpha|<\epsilon$. Here the finite form of the argument in [L3] needs no chosen algebraic closure: if $\alpha\notin F_0(\beta)$, its separable minimal polynomial over $F_0(\beta)$ divides $q$ and has a second root in $N$. That root defines an $F_0(\beta)$-embedding $\sigma:M\to N$ moving $\alpha$. Uniqueness in [F9] makes it isometric, so $|\sigma(\alpha)-\beta|=|\alpha-\beta|$, and the ultrametric inequality gives $|\sigma(\alpha)-\alpha|\le|\alpha-\beta|<\epsilon$, a contradiction. Thus $M=F_0(\beta)$, since $\beta\in M$. In particular every $h\in\mathscr E_e$ in this neighborhood defines the same extension class. [A1, F1, F9, F10, F11, L3, step 4.1, given, choose, construct, algebra]

6.1 Take the set of ALL open neighborhoods with witnesses as in step 5.1; it covers the compact space $\mathscr E_e$, without selecting a witness for every polynomial. A finite subcover and its finitely many witnesses show that only finitely many $F_0$-isomorphism classes of totally ramified extensions of degree $e$ occur. Taking the finite union over $f\le d$ and $e\le d/f$, using the uniqueness of $F_0$ for each $f$ from step 2.1, gives the claimed finiteness. [L1, L2, L3, step 2.1, step 4.1, step 5.1, algebra] ∎

## Proof status

The proof is complete at the original Countable Choice scope. The exact local-field definition, supplier proofs [L1]–[L3], and this lemma have completed the bounded independent review recorded in `research/number-theory-all-141-2026-10-25-escalations/native138/local-field-stale-readiness-resolution/independent-review-kolesnik/`. The former stale-hash escalation is retained in the authentic before records; official workflow readiness remains a separate owner operation. This local result accepts no downstream theorem.
