---
id: thm-almost-all-integral-basis-extension-comparison
kind: theorem
title: "The local integer rings of a finite extension agree with the basis lattice at almost all places"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-global-field
  - def-place-of-a-global-field
  - def-adele-ring-of-a-global-field
  - thm-global-field-completion-tensor-product-decomposition
  - thm-global-field-element-integral-at-all-but-finitely-many-places
  - def-field-norm-and-trace
  - thm-field-norm-and-trace-by-embeddings
  - thm-trace-form-is-nondegenerate-iff-separable
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 5
proof_strategy: direct
axiom_use: >-
  AC and AC_omega enter through global places and metric completions. The finite
  exceptional-set and trace-lattice argument uses no further choice.
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "Chapter 18, Lemma 18.1.6 and complete proof, printed pp.183–184."
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I lecture notes, Fall 2021"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf"
      locator: "Lecture 11, Corollary 11.26, printed lecture p.9, as the integral-completion context."

---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice. Let $L/K$ be a finite separable extension of global fields of degree $n$, and choose a $K$-basis $\omega_1,\ldots,\omega_n$ of $L$. For all but finitely many finite places $v$ of $K$, the lattice
$$
\mathcal O_v\omega_1+\cdots+\mathcal O_v\omega_n
$$
inside $L\otimes_KK_v$ equals the product of the valuation rings $\prod_{w\mid v}\mathcal O_w$, under the completion decomposition for $L/K$ at $v$.

## Statement references

[[def-global-field|Global-field branches]]

[[def-adele-ring-of-a-global-field|Adele completion and valuation-ring notation]]

[[thm-global-field-completion-tensor-product-decomposition|Finite-place tensor decomposition]]

[[thm-global-field-element-integral-at-all-but-finitely-many-places|Integrality outside finitely many finite places]]

[[def-field-norm-and-trace|Trace as a linear-operator trace]]

[[thm-field-norm-and-trace-by-embeddings|Trace formula for separable extensions]]

[[thm-trace-form-is-nondegenerate-iff-separable|Nondegenerate trace pairing]]

[William A. Stein, Lemma 18.1.6](https://wstein.org/books/ant/ant.pdf)

[MIT 18.785 Lecture 11, Corollary 11.26](https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf)

## Facts & Assumptions

**Given:** AC and AC_omega; a finite separable extension $L/K$ of global fields; and a $K$-basis $\omega_1,\ldots,\omega_n$ of $L$.

[A1] AC supplies the place-classification assumption, and AC_omega supplies the metric-completion assumption. ([[def-axiom-of-choice]], [[def-countable-choice]])

[F1] A global-field element is integral at all but finitely many finite places; the finite places use the normalized discrete valuation. ([[def-global-field]], [[def-place-of-a-global-field]], [[thm-global-field-element-integral-at-all-but-finitely-many-places]])

[F2] For each finite place $v$ of $K$, the completion tensor product is the finite product of the completions $L_w$ with $w\mid v$. ([[thm-global-field-completion-tensor-product-decomposition]])

[F3] The trace form $(x,y)\mapsto\operatorname{Tr}_{L/K}(xy)$ is nondegenerate because $L/K$ is separable. ([[thm-trace-form-is-nondegenerate-iff-separable]])

[F4] For a finite separable extension of fields, the field trace is the sum of the distinct embedding values. ([[thm-field-norm-and-trace-by-embeddings]])

[F5] A finite extension of a complete nonarchimedean field has a unique extending absolute value; every embedding over the base preserves it. ([[thm-unique-extension-of-a-nonarchimedean-absolute-value]])

[F6] Let $\operatorname{Tr}_v$ be the $K_v$-algebra trace on $L\otimes_KK_v$, defined as the trace of multiplication. Scalar extension preserves this trace, and under the finite product decomposition it is the sum of the traces on the local factors. ([[def-field-norm-and-trace]], [[thm-global-field-completion-tensor-product-decomposition]])

## Proof

**Given:** The extension, basis, and choice assumptions in the Statement.

1.1 Form the Gram matrix $G=(\operatorname{Tr}_{L/K}(\omega_i\omega_j))_{i,j}$. By [F3] it is invertible over $K$, so $d=\det G$ is a nonzero element of $K$. By [F1], each $\omega_i$ is integral at all but finitely many finite places of $L$, and both $d$ and $d^{-1}$ are integral at all but finitely many finite places of $K$. Removing the finitely many places of $K$ below any exceptional place of $L$, assume that every $\omega_i$ lies in every $\mathcal O_w$ above $v$ and that $d$ is a unit of $\mathcal O_v$. [A1, F1, F3, given, choose]

2.1 Under [F2], every $\mathcal O_v$-linear combination of the $\omega_i$ lies in every $\mathcal O_w$ above $v$, so the basis lattice is contained in $\prod_{w\mid v}\mathcal O_w$. [F1, F2, step 1.1, algebra]

2.2 Let $x=(x_w)_{w\mid v}\in\prod_{w\mid v}\mathcal O_w$. For each $j$, the trace of multiplication by $x\omega_j$ on the product algebra is $\sum_{w\mid v}\operatorname{Tr}_{L_w/K_v}(x_w\omega_j)$ by [F6]. Each summand lies in $\mathcal O_v$: every conjugate of $x_w\omega_j$ has absolute value at most $1$ by [F5], and [F4] expresses its trace as a finite sum of those conjugates, whose absolute value is at most $1$ by the nonarchimedean triangle inequality. Thus $b_j:=\operatorname{Tr}_v(x\omega_j)\in\mathcal O_v$. Applying this to $x=\omega_i$ also shows $G_{ij}\in\mathcal O_v$. [F2, F4, F5, F6, step 1.1]

3.1 Write $x=\sum_{i=1}^n a_i\omega_i$ with $a_i\in K_v$ using [F2]. Then $b_j=\sum_i a_iG_{ij}$. The matrix $G$ has entries in $\mathcal O_v$ by step 2.2 and has unit determinant by step 1.1, so its inverse has entries in $\mathcal O_v$ by the adjugate formula. Therefore every $a_i\in\mathcal O_v$, proving the reverse inclusion. [F2, step 1.1, step 2.2, algebra]

4.1 Only the finite exceptional set removed in step 1.1 was excluded. Steps 2.1 and 3.1 prove the two inclusions for every other finite place, hence the stated equality for all but finitely many $v$. [step 1.1, step 2.1, step 3.1] ∎
