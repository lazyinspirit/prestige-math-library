---
id: thm-levine-algebraic-concordance-classification
kind: theorem
title: "Classification of rational and integral algebraic concordance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-integral-witt-and-seifert-isometric-structures
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - def-axiom-of-choice
  - thm-rational-isometric-witt-group-has-reciprocal-primary-decomposition
  - thm-rational-primary-isometric-classes-are-hermitian-witt-classes
  - thm-rational-symmetric-signature-kernel-is-killed-by-four
  - thm-hermitian-number-field-signature-kernel-is-killed-by-four
  - thm-integral-seifert-witt-group-injects-into-rational-isometric-group
  - lem-integral-algebraic-concordance-has-independent-free-two-and-four-torsion-families
  - lem-countable-four-torsion-signature-kernel-classification-criterion
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§3, printed pp. 325–326: rational/integral distinction and classification attribution"
    - title: "Neal W. Stoltzfus, Unraveling the Integral Knot Concordance Group"
      url: "https://doi.org/10.1090/memo/0192"
      locator: "Memoirs of the American Mathematical Society 12(192), 1977; full classification and localization sequence"
    - title: "Charles Livingston, The concordance genus of a knot, II"
      url: "https://msp.org/agt/2009/9-1/agt-v9-n1-p06-p.pdf"
      locator: "§2, printed pp. 169–171: integral group, rationalization, and injection"
---

## Statement

Assume the full Axiom of Choice for knot Seifert pairings. Let $G_{\mathbb Q}$ be the rational Witt group of finite-dimensional even-dimensional nonsingular symmetric rational forms equipped with an invertible isometry $T$ for which $I-T$ is invertible, modulo metabolic $T$-invariant subspaces, and let $G_{\mathbb Z}$ be the integral algebraic concordance group of Seifert lattices. The rational algebraic concordance classification due to Levine and the integral classification completed by Stoltzfus identify each of these abelian groups, as an abstract group, with
$$
\mathbb Z^{(\mathbb N)}\oplus(\mathbb Z/2\mathbb Z)^{(\mathbb N)}\oplus(\mathbb Z/4\mathbb Z)^{(\mathbb N)}.
$$
Here $A^{(\mathbb N)}$ denotes the direct sum of countably infinitely many copies of the abelian group $A$; the statement does not identify Levine's rational classification with the distinct integral group or claim that their defining objects are the same.

## Statement references

[[def-integral-witt-and-seifert-isometric-structures|The definitions of the integral and rational Witt groups]]

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|The integral metabolic relation]]

## Facts & Assumptions

**Given:** The two groups in the Statement and its original full Axiom of Choice assumption.

[A1] Full AC is the explicitly assumed axiom; it supplies the basis choices in the final countable-group criterion. [[def-axiom-of-choice]]

[F1] Rational isometric classes decompose as the direct sum of self-reciprocal primary components other than $t-1$. [[thm-rational-isometric-witt-group-has-reciprocal-primary-decomposition]]

[F2] For $p\ne t+1$ each component is a hermitian Witt group over $E=\mathbb Q[t]/(p)$ with involution $\alpha\mapsto\alpha^{-1}$. The $t+1$ component is the even-dimensional symmetric Witt group over $\mathbb Q$. [[thm-rational-primary-isometric-classes-are-hermitian-witt-classes]]

[F3] The kernel of the rational symmetric signature is killed by four; for every quadratic number-field extension the joint hermitian signature kernel is likewise killed by four, with finitely many signature coordinates. The latter result is proved through local norm indices, the quadratic global norm principle, Hasse–Minkowski, and the number-field four-square theorem. [[thm-rational-symmetric-signature-kernel-is-killed-by-four]], [[thm-hermitian-number-field-signature-kernel-is-killed-by-four]]

[F4] Integral Seifert classes inject into $G_{\mathbb Q}$; every integral group element has an actual Seifert-form representative, and the injection is a homomorphism. [[thm-integral-seifert-witt-group-injects-into-rational-isometric-group]]

[F5] The explicit genus-one families $F_b,P_n,Q_q$ give independent infinite-order, order-two, and order-four integral classes. Together they generate their direct sum, and the $P_n$ are independent modulo $2G_{\mathbb Z}$. The proof gives each $P_n$ rational hermitian rank one at its own distinct quadratic primary factor. [[lem-integral-algebraic-concordance-has-independent-free-two-and-four-torsion-families]]

[F6] Under AC, a countable group with a signature map to $\mathbb Z^{(\mathbb N)}$, kernel killed by four, and the three independent families of the types in [F5] (order-two classes independent modulo doubles) has the displayed abstract group shape. The criterion includes the explicit splitting of its free quotient and the decomposition of its exponent-four torsion subgroup. [[lem-countable-four-torsion-signature-kernel-classification-criterion]]

## Proof

**Given:** $G_{\mathbb Q},G_{\mathbb Z}$ and [A1].

1.1 Both groups are countable. A rational isometric structure has a finite rational matrix pair $(B,T)$ after choosing a basis, and the set of all such finite pairs is countable. An integral Seifert lattice has a finite integral matrix. Every group element is represented by one actual form: negating a form gives its inverse, since the diagonal subspace metabolizes its sum with its negative, and addition is orthogonal sum. Thus the countable sets of finite matrices surject onto the respective groups. Countability of a quotient causes no choice issue here under [A1]; alternatively use least matrix codes for the equivalence classes. [A1, F4, given, construct, algebra]

2.1 For a self-reciprocal factor $p\ne t\pm1$, the involution of $E=\mathbb Q[t]/(p)$ is nontrivial, since a fixed $\alpha=\alpha^{-1}$ would imply $\alpha^2=1$. Its fixed field $F$ has $[E:F]=2$: put $u=\alpha-\alpha^{-1}\ne0$; then $\bar u=-u$ and every $x\in E$ is uniquely $(x+\bar x)/2+u(x-\bar x)/(2u)$, with both coefficients in $F$. Both are number fields. Apply all the finitely many hermitian signatures to this primary component via [F2], and apply ordinary signature to the $t+1$ component. There are countably many rational polynomials and finitely many signature coordinates per factor. Index all these coordinates by a subset of $\mathbb N$, adjoining zero coordinates if necessary. Because [F1] gives each element finite primary support, these signatures combine into a homomorphism $$\sigma_{\mathbb Q}:G_{\mathbb Q}\longrightarrow\mathbb Z^{(\mathbb N)}.$$ If it vanishes, [F3] kills each component by four, so [F1] gives $4x=0$. The restriction $\sigma_{\mathbb Z}=\sigma_{\mathbb Q}\circ\iota$ along the injection [F4] likewise has kernel killed by four: $4\iota(x)=0$ implies $4x=0$. [F1, F2, F3, F4, step 1.1, construct, algebra]

3.1 Apply [F5] first in $G_{\mathbb Z}$. Its $F_b$ are independent of infinite order. Its $P_n$ have order two and independent images modulo $2G_{\mathbb Z}$. Its $Q_q$ have order four, and their doubles are independent over $\mathbb F_2$, since the $Q_q$ generate a direct sum of cyclic groups of order four. All index sets are countably infinite, as proved in [F5]. Together with the map $\sigma_{\mathbb Z}$ and countability in step 1.1, these are exactly the hypotheses of [F6]. Therefore $G_{\mathbb Z}$ has the asserted abstract isomorphism type. [A1, F4, F5, F6, step 1.1, step 2.1, algebra]

4.1 Their images under [F4] remain independent of the same exact orders in $G_{\mathbb Q}$. It remains to check the order-two family modulo $2G_{\mathbb Q}$, since injection alone does not imply that condition. For each distinct quadratic primary factor belonging to $P_n$, take the hermitian dimension modulo two after the comparison [F2]. Dimension parity is an additive invariant of a hermitian Witt class, because isometric forms have the same dimension and a metabolic form has even dimension. It consequently vanishes on every double. The class $P_n$ has parity one at its own factor and zero at the factors of every other $P_m$, by [F5]. Applying these parity coordinates to any finite relation $\sum\epsilon_n[P_n]\in2G_{\mathbb Q}$ forces each $\epsilon_n=0$ in $\mathbb F_2$. Thus the order-two family is independent modulo $2G_{\mathbb Q}$. With $\sigma_{\mathbb Q}$ and step 1.1, [F6] now gives the asserted isomorphism type for $G_{\mathbb Q}$ as well. These are separate applications of the same abstract criterion, not an identification of their defining forms or an assertion that [F4] is surjective. This proves precisely both displayed classifications under the original choice assumption. [A1, F2, F4, F5, F6, step 1.1, step 2.1, step 3.1, construct, algebra] ∎

## Remarks

The proof establishes the stated abstract group types by signature-kernel bounds and explicit independent genus-one families. No integral localization sequence or coupling theorem is used as an unproved premise. The integral rationalization map is proved injective by its supplier; its image need not be the entire rational group. Geometric invariance and surjectivity of the knot-to-algebraic-concordance map are separate assertions and are not needed as logical suppliers for this pure algebraic classification.
