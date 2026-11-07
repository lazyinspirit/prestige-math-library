---
id: thm-global-field-idelic-diagonal-discrete-and-closed
kind: theorem
title: "The diagonal global-field multiplicative group is discrete and closed in the ideles"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-global-field-adeles-and-ideles-locally-compact
  - def-adele-ring-of-a-global-field
  - def-idele-group-of-a-global-field
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-ring-of-integers-of-a-number-field
  - def-prime-ideal-valuations-on-fractional-ideals
  - thm-unique-factorisation-of-ideals-in-dedekind-domains
  - cor-algebraic-integer-minimal-polynomial-criterion
  - thm-product-formula-for-number-fields
  - thm-product-formula-for-function-fields
  - thm-field-norm-and-trace-by-embeddings
  - thm-basic-laws-for-field-norm-and-trace
  - thm-evaluation-kernel-and-minimal-polynomial
  - thm-global-regular-functions-projective-variety
  - def-regular-function-projective-variety
  - def-axiom-of-choice
  - def-countable-choice
  - def-topological-group
  - thm-metric-hausdorff-separation
dependency_level: 7
proof_strategy: direct
axiom_use: >-
  Full AC is inherited from the Tychonoff local-compactness theorem and the
  projective global-regular-functions theorem; AC_omega is inherited through
  the local completion interfaces. The subgroup-isolation argument itself uses
  no additional choice.
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §4, the diagonal ideles and local compactness discussion, printed pp.170–171."
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I lecture notes, Fall 2021"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf"
      locator: "Lecture 25, Proposition 25.9 and the discussion of the diagonal embedding, pp.5–6."

---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice. For every global field $F$, the diagonal subgroup $F^\times$ is discrete and closed in the idele group $\mathbb A_F^\times$ with its restricted-product topology. Discrete means that the identity has an open neighborhood meeting the diagonal subgroup only at the identity.

## Statement references

[[def-idele-group-of-a-global-field|Restricted-product idele topology]]

[[thm-product-formula-for-number-fields|Normalized product formula for number fields]]

[[thm-product-formula-for-function-fields|Normalized product formula for function fields]]

[[thm-global-field-adeles-and-ideles-locally-compact|Hausdorff topological-group structure]]

[Milne, Class Field Theory, Chapter V §4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[MIT 18.785 Lecture 25, Proposition 25.9](https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf)

[Milne, Algebraic Number Theory, Chapter VII, Theorem 7.15 and Chapter IX, Proposition 9.1](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

## Facts & Assumptions

**Given:** AC and AC_omega; a global field $F$; its adele ring and idele group; and the diagonal embeddings.

[F1] The normalized product formula holds for number fields with finite factors $N\mathfrak p^{-v_{\mathfrak p}(x)}$ and complex factors $|\tau(x)|^2$, and for function fields with their place-degree-normalized absolute values. ([[thm-product-formula-for-number-fields]], [[thm-product-formula-for-function-fields]])

[F2] In a number field, if $v_{\mathfrak p}(x)=0$ at every finite prime, then the principal fractional ideal $(x)$ has all prime exponents zero and equals $\mathcal O_K$; thus $x$ is an algebraic integer and a unit. ([[def-ring-of-integers-of-a-number-field]], [[def-prime-ideal-valuations-on-fractional-ideals]], [[thm-unique-factorisation-of-ideals-in-dedekind-domains]])

[F3] The ring of integers of a number field consists of the elements integral at every finite prime; an algebraic integer has a monic minimal polynomial in $\mathbb Z[X]$. ([[def-ring-of-integers-of-a-number-field]], [[cor-algebraic-integer-minimal-polynomial-criterion]])

[F4] The field norm is the product over embeddings and is transitive in towers; for a monic minimal polynomial of $x$ over $\mathbb Q$, its constant coefficient is $(-1)^mN_{\mathbb Q(x)/\mathbb Q}(x)$, where $m=[\mathbb Q(x):\mathbb Q]$. ([[thm-field-norm-and-trace-by-embeddings]], [[thm-basic-laws-for-field-norm-and-trace]], [[thm-evaluation-kernel-and-minimal-polynomial]], [[thm-product-formula-for-number-fields]])

[F5] For a function field with exact constant field $\mathbb F_q$, the places are the closed points of a smooth proper curve; an element regular at every place is a global regular function. Pullback to the projective curve over $\overline{\mathbb F_q}$ remains regular and is constant; the exact constant-field condition then puts an element of $F$ that is constant over $\overline{\mathbb F_q}$ in $\mathbb F_q$. The neighborhoods $1+\mathfrak m_v$ are open at local fields. ([[def-global-field]], [[def-place-of-a-global-field]], [[def-regular-function-projective-variety]], [[thm-global-regular-functions-projective-variety]], [[def-local-field-valuation-ring-uniformizer-and-residue-field]])

[F6] The idele group is a Hausdorff topological group, and its restricted-product basis uses $\mathcal O_v^\times$ at all but finitely many finite places. ([[thm-global-field-adeles-and-ideles-locally-compact]], [[def-topological-group]], [[thm-metric-hausdorff-separation]], [[def-idele-group-of-a-global-field]])

## Proof


**Given:** The data and assumptions in the Statement.

1.1 Suppose first that $F=K$ is a number field and let $d=[K:\mathbb Q]$. For a diagonal $x\in K^\times$ with all finite idelic components in $\mathcal O_v^\times$, [F2] makes $x$ a unit of $\mathcal O_K$. The normalized product formula [F1] gives $\prod_{\sigma\text{ real}}|\sigma(x)|\prod_{\tau\text{ complex}}|\tau(x)|^2=1$, since every finite factor equals $1$; by [F4] this is $|N_{K/\mathbb Q}(x)|=1$. If $m=[\mathbb Q(x):\mathbb Q]$, norm transitivity gives $|N_{\mathbb Q(x)/\mathbb Q}(x)|^{d/m}=1$, so the integer constant coefficient of the minimal polynomial of $x$ is $\pm1$. Restrict every archimedean component to the open disk of radius $1$ about $1$; all conjugates of $x$ then have absolute value less than $2$. Its monic minimal polynomial over $\mathbb Q$ has integer coefficients by [F3]; each coefficient is an elementary symmetric sum of roots and is bounded in absolute value by the corresponding binomial coefficient times a power of $2$. There are only finitely many such integer polynomials of degree at most $d$ (in particular with constant coefficient $\pm1$), hence only finitely many roots lying in $K$. Let $T$ be their nonidentity roots. For each $\alpha\in T$, the maximum of $|\tau(\alpha)-1|$ over the real embeddings and one representative from each complex pair is positive, since an embedding is injective. The minimum of these positive numbers is positive when $T$ is nonempty; choose a smaller disk radius, and use radius $1$ if $T$ is empty. The resulting open idelic neighborhood of $1$ contains no diagonal number-field element except $1$. [F1, F2, F3, F4, given, construct, choose]

1.2 Suppose next that $F$ is a function field with exact constant field $\mathbb F_q$. Take the restricted-product neighborhood that requires every local component to lie in $\mathcal O_v^\times$, and at one fixed place $v_0$ require the smaller open set $1+\mathfrak m_{v_0}$, where $\mathfrak m_{v_0}$ is its maximal ideal. If a diagonal $x\in F^\times$ lies in this neighborhood, all its place valuations are zero. The normalized function-field product formula [F1] gives product one, and the zero valuations mean both $x$ and $x^{-1}$ are regular at every closed point of the smooth proper curve for $F$. Thus $x$ is a global regular function. By [F5], it lies in the exact constant field $\mathbb F_q^\times$. Every nonidentity constant $c$ has $v_{v_0}(c-1)=0$, so it does not lie in $1+\mathfrak m_{v_0}$. Hence this neighborhood meets the diagonal only at $1$. [F1, F5, given, choose]

2.1 In either global-field branch, the preceding open neighborhood proves that $F^\times$ is isolated at the identity and therefore discrete. By [F6], $\mathbb A_F^\times$ is Hausdorff. The general topological-group argument now gives closedness: choose an identity neighborhood $U_H$ meeting $H=F^\times$ only at $1$, then a symmetric open $W$ with $W^{-1}W\subseteq U_H$. If $z\in\overline H$, the set $zW\cap H$ has at most one element. Every smaller translate of $z$ still meets $H$ at that same element, so it lies in every neighborhood of $z$ and equals $z$ by Hausdorffness. Thus $H$ is closed. [F6, step 1.1, step 1.2, construct] ∎

