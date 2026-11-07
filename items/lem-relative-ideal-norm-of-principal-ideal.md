---
id: lem-relative-ideal-norm-of-principal-ideal
kind: lemma
title: "Relative norm of a principal ideal"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - cor-norm-of-a-prime-ideal
  - def-absolute-norm-of-an-ideal
  - def-field-norm-and-trace
  - def-number-field
  - def-prime-above-and-residue-degree
  - def-prime-ideal-valuations-on-fractional-ideals
  - def-relative-ideal-norm-in-number-field-extension
  - def-ring-of-integers-of-a-number-field
  - lem-dvr-determinant-cokernel-index
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - thm-clearing-denominators-for-an-algebraic-number
  - thm-invariant-factor-decomposition-over-a-pid
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-ramification-and-residue-degrees-in-towers
  - thm-ring-of-integers-free-of-rank-degree
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Sharifi, Iwasawa Theory"
      url: "https://www.math.ucla.edu/~sharifi/iwasawa.pdf"
      locator: "Chapter 3, printed pp. 73–82"
    - title: "J. S. Milne, Algebraic Number Theory"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Chapter 4, ideal norms and field norms"
verification: {}
---

## Statement

Let $L/K$ be a finite extension of number fields and $\alpha\in L^\times$. The relative ideal norm of the principal fractional ideal is principal and satisfies
$$N_{L/K}((\alpha))=(N_{L/K}^{\mathrm{field}}(\alpha)),$$
where $N_{L/K}^{\mathrm{field}}(\alpha)$ is the determinant of multiplication by $\alpha$ on the $K$-vector space $L$.

## Statement references

[J. Sharifi, *Iwasawa Theory*, Chapter 3, §§3.1–3.2, pp. 73–82](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

[J. S. Milne, *Algebraic Number Theory*, Chapter 4](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** A finite extension $L/K$ and a nonzero $\alpha\in L$.

[F1] Relative ideal norm is the residue-degree-weighted product of contracted prime ideals. [[def-relative-ideal-norm-in-number-field-extension]]

[F2] The field norm is the determinant of the $K$-linear multiplication map by $\alpha$. [[def-field-norm-and-trace]]

[F3] Rings of integers are finite free abelian groups; their integral bases also give finite generating sets over the smaller ring of integers. [[thm-ring-of-integers-free-of-rank-degree]]

[F4] Localizing a number-field ring of integers at a nonzero prime yields a DVR; the ZF ideal-factorization proof constructs its uniformizer and unit-times-power form. [[thm-number-field-integral-ideal-factorisation-in-zf]]

[F5] Finite torsion-free modules over a PID are free; finitely generated modules over a PID have invariant-factor form. [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]] [[thm-invariant-factor-decomposition-over-a-pid]]

[F6] Nonzero ideals factor uniquely and pairwise comaximal ideals satisfy the Chinese remainder theorem. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]

[F7] Residue-field degrees multiply in towers, $f(\mathfrak P/\mathfrak p)$ is the degree of $\mathcal O_L/\mathfrak P$ over $\mathcal O_K/\mathfrak p$, and these prime residue fields are finite. [[thm-ramification-and-residue-degrees-in-towers]] [[def-prime-above-and-residue-degree]] [[cor-norm-of-a-prime-ideal]]

[F8] Every algebraic number has a nonzero integer multiple in the ring of integers. [[thm-clearing-denominators-for-an-algebraic-number]]

## Proof

**Given:** The finite extension and nonzero element in the Statement.

1.1 First let $\alpha\in\mathcal O_L\setminus\{0\}$. Fix a nonzero prime $\mathfrak p$ of $\mathcal O_K$, put $A=(\mathcal O_K)_{\mathfrak p}$, and put $B=\mathcal O_L\otimes_{\mathcal O_K}A$. A finite $\mathbb Z$-basis of $\mathcal O_L$ also generates it over $\mathcal O_K$, so $B$ is finite over $A$; it is torsion-free because it embeds in the localization of the field $L$. By [F4], $A$ is a DVR, hence a PID, and [F5] makes $B$ free. Its rank is $[L:K]$: [F8] shows $\mathcal O_L$ spans $L$ over $K$, so tensoring $B$ with the fraction field $K$ gives $L$. Multiplication by $\alpha$ on $B$ is injective and has determinant $N_{L/K}^{\mathrm{field}}(\alpha)$ by [F2].[F2, F3, F4, F5, F8, given, algebra]

1.2 The invariant-factor form [F5] for the cokernel of this endomorphism over the DVR $A$ yields diagonal entries $u_j\pi^{m_j}$ after invertible row and column operations, with each $u_j$ a unit. Thus the quotient has $q^{\sum_jm_j}$ elements, where $q=|\mathcal O_K/\mathfrak p|$ is finite by [F7], while the determinant has $\mathfrak p$-valuation $\sum_jm_j$. Consequently
$$|B/\alpha B|=q^{v_{\mathfrak p}((N_{L/K}^{\mathrm{field}}(\alpha)))}.$$[F4, F5, F7, step 1.1, algebra]

2.1 Factor $(\alpha)=\prod_{\mathfrak P}\mathfrak P^{m_{\mathfrak P}}$ in $\mathcal O_L$. In $B$, factors not above $\mathfrak p$ become units. The remaining prime powers are pairwise comaximal by [F6], so the quotient $B/\alpha B$ is the product of the quotients $B/\mathfrak P^{m_{\mathfrak P}}$ for $\mathfrak P\mid\mathfrak p$. For each such $\mathfrak P$, localization gives a DVR by [F4]. The quotient has a filtration by successive powers of its maximal ideal; its $m_{\mathfrak P}$ layers are one-dimensional over the residue field $\mathcal O_L/\mathfrak P$. By [F7], each layer has $q^{f(\mathfrak P/\mathfrak p)}$ elements. Therefore
$$|B/\alpha B|=q^{\sum_{\mathfrak P\mid\mathfrak p}f(\mathfrak P/\mathfrak p)m_{\mathfrak P}}.$$[F4, F6, F7, step 1.2, algebra]

2.2 Comparing steps 1.2 and 2.1 shows that the exponent of $\mathfrak p$ in $(N_{L/K}^{\mathrm{field}}(\alpha))$ equals $\sum_{\mathfrak P\mid\mathfrak p}f(\mathfrak P/\mathfrak p)m_{\mathfrak P}$. By [F1], this is its exponent in $N_{L/K}((\alpha))$. Since this holds for every $\mathfrak p$, unique factorization [F6] proves the ideal equality for integral $\alpha$.[F1, F2, F6, F7, step 1.2, step 2.1]

3.1 For arbitrary $\alpha\in L^\times$, [F8] supplies $d\in\mathbb Z\setminus\{0\}$ with $d\alpha\in\mathcal O_L$. Apply the integral case to $d\alpha$ and $d$. Relative ideal norms are multiplicative by [F1], and the determinant field norm is multiplicative because multiplication maps compose. Dividing the two ideal equalities gives the asserted formula for $\alpha$.[F1, F2, F8, step 2.2, algebra] ∎