---
id: thm-adelic-base-change-for-finite-separable-global-field-extensions
kind: theorem
title: "Additive adeles and principal fields commute with finite separable base change"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-global-field
  - def-adele-ring-of-a-global-field
  - thm-global-field-completion-tensor-product-decomposition
  - thm-number-field-archimedean-completion-tensor-product-decomposition
  - thm-almost-all-integral-basis-extension-comparison
  - thm-global-field-element-integral-at-all-but-finitely-many-places
  - thm-ag-separating-transcendence-basis-perfect-field
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 6
proof_strategy: direct
axiom_use: >-
  AC and AC_omega are inherited through the global place, completion, and
  restricted-product definitions. The restricted-product comparison itself
  uses only the finite exceptional set supplied by the integral-basis theorem.
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "Chapter 18, Lemma 18.3.3 and Corollary 18.3.4, printed pp.186–187."
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I lecture notes, Fall 2021"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf"
      locator: "Lecture 25, Propositions 25.10 and Corollary 25.11, pp.6–7."

---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice. Let $L/K$ be a finite separable extension of global fields. Give $\mathbb A_K\otimes_KL$ the finite-dimensional tensor-product topology: after choosing a $K$-basis of $L$, it is the product topology on $[L:K]$ copies of $\mathbb A_K$. The natural map
$$
\mathbb A_K\otimes_KL\longrightarrow\mathbb A_L,\qquad a\otimes\ell\longmapsto(a_v\ell)_{w\mid v}
$$
is a topological $L$-algebra isomorphism. It carries $1\otimes L$ onto the diagonal copy of $L$ in $\mathbb A_L$. Consequently, as additive topological groups,
$$
\mathbb A_L^+\cong(\mathbb A_K^+)^{[L:K]},\qquad L^+\cong(K^+)^{[L:K]}.
$$

## Statement references

[[def-global-field|Global-field branches]]

[[def-adele-ring-of-a-global-field|Restricted-product topology]]

[[thm-global-field-completion-tensor-product-decomposition|Finite-place completion decomposition]]

[[thm-number-field-archimedean-completion-tensor-product-decomposition|Archimedean completion decomposition]]

[[thm-almost-all-integral-basis-extension-comparison|Almost-all valuation-ring comparison]]

[[thm-ag-separating-transcendence-basis-perfect-field|Separating transcendence basis]]

[Stein, Lemma 18.3.3 and Corollary 18.3.4](https://wstein.org/books/ant/ant.pdf)

[MIT 18.785 Lecture 25, Proposition 25.10 and Corollary 25.11](https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf)

## Facts & Assumptions

**Given:** AC and AC_omega; a finite separable extension $L/K$ of global fields; and a $K$-basis $\omega_1,\ldots,\omega_n$ of $L$.

[A1] AC supplies global place classification and AC_omega supplies the metric completions. ([[def-axiom-of-choice]], [[def-countable-choice]])

[F1] The restricted-product topology on $\mathbb A_K$ uses $\mathcal O_v$ at all but finitely many finite places. ([[def-adele-ring-of-a-global-field]])

[F2] At each finite place $v$, $L\otimes_KK_v$ is the product of the completions $L_w$ for $w\mid v$; at archimedean places the corresponding algebra factors are the real and complex completions. ([[thm-global-field-completion-tensor-product-decomposition]], [[thm-number-field-archimedean-completion-tensor-product-decomposition]])

[F3] Outside a finite set of finite places, $\sum_i\mathcal O_v\omega_i=\prod_{w\mid v}\mathcal O_w$. ([[thm-almost-all-integral-basis-extension-comparison]])

[F4] Every global adele has integral coordinates at all but finitely many finite places, so the diagonal copy of a global field is defined. ([[thm-global-field-element-integral-at-all-but-finitely-many-places]])

## Proof


**Given:** The data and hypotheses in the Statement.

1.1 The chosen basis identifies $\mathbb A_K\otimes_KL$ with $\mathbb A_K^n$. A change of $K$-basis acts by an invertible finite matrix with coefficients in $K$. Each coefficient is a diagonal adele by [F4]. Multiplication by a fixed diagonal $c\in K$ is continuous: outside the finite set where $c\notin\mathcal O_v$, it maps $\mathcal O_v$ into itself, and on the finite exceptional set it is a continuous local multiplication map. Applying this to the matrix and its inverse proves that the finite-product topology is independent of the basis. [F1, F4, given, algebra]

2.1 For each place $v$ of $K$, use the local algebra decomposition in [F2]. At every finite place outside the finite exceptional set in [F3], this decomposition carries the standard lattice $\sum_i\mathcal O_v\omega_i$ exactly to $\prod_{w\mid v}\mathcal O_w$. The archimedean factors have no restricted-product integrality condition. [F2, F3, step 1.1]

3.1 Define $\Phi$ on the restricted product by the local maps of step 2.1. Each local map is an algebra isomorphism. A tensor element is a finite tuple of adeles in the chosen basis, so all its coefficients lie in $\mathcal O_v$ outside a finite set. At every finite place outside the union of this set and the exceptional set in [F3], the local decomposition carries the coefficient lattice $\sum_i\mathcal O_v\omega_i$ onto $\prod_{w\mid v}\mathcal O_w$, so its image is integral at every $w$. Conversely, an adele on $L$ is integral at every $w$ outside a finite set; [F3] then puts all its basis coefficients in $\mathcal O_v$ at every remaining $v$. Thus the inverse image lies in $\mathbb A_K^n$, and $\Phi$ is a bijection of restricted products. [F1, F2, F3, step 2.1, construct]

4.1 The restricted-product bases on both sides are products of local open sets with the reference subrings at all other finite places. The local maps and their inverses are homeomorphisms, and the reference subrings agree outside the finite set from [F3]. Hence $\Phi$ and $\Phi^{-1}$ are continuous; since the local maps preserve multiplication, $\Phi$ is a topological $L$-algebra isomorphism. [F1, F2, F3, step 3.1]

5.1 For $\ell\in L$, the tensor element $1\otimes\ell$ maps at every place $w$ to the image of $\ell$ in $L_w$, which is its diagonal adele by [F4]. Under the basis identification this diagonal subspace is $K^n$, so $\mathbb A_L^+\cong(\mathbb A_K^+)^n$ and $L^+\cong(K^+)^n$. [F2, F4, step 4.1, algebra] ∎

