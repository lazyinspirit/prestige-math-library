---
id: ex-unramified-principal-series-and-semisimple-weil-parameter
kind: example
title: "Unramified principal series and its semisimple Weil parameter"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-smooth-admissible-representation-of-gln-over-a-p-adic-field
  - def-weil-deligne-representation-of-a-local-field
  - def-local-l-and-epsilon-factors-of-a-weil-deligne-representation
  - thm-unramified-local-langlands-for-gl-n
  - def-local-artin-reciprocity-map
  - thm-local-artin-reciprocity-and-norm-index
  - thm-local-artin-unramified-frobenius-normalization
  - thm-local-artin-reciprocity-identifies-the-weil-group-abelianization
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Torsten Wedhorn, The Local Langlands Correspondence for GL(n) over p-adic Fields, §§4.1.2–4.1.8"
      url: "https://arxiv.org/pdf/math/0011210"
    - title: "Masao Oi, Introduction to the Local Langlands Correspondence, §§6.1 and 6.2"
      url: "https://masaooi.github.io/LLC.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice. Let $K$ be a finite extension of $\mathbb Q_p$ with residue cardinality $q$, let $\pi_K$ be a uniformizer, let $G=\mathrm{GL}_n(K)$, and let $B$ be its subgroup of upper triangular matrices. For $b\in B(K)$ define $\delta_B(b)=\prod_{i<j}|b_{ii}/b_{jj}|_K$. Let $\chi_1,\ldots,\chi_n:K^\times\to\mathbb C^\times$ be unramified characters, meaning that each is trivial on $\mathcal O_K^\times$. Define their normalized induced representation $\Pi$ to be the right-translation action on locally constant functions $f:G\to\mathbb C$ satisfying
$$f(bg)=\delta_B(b)^{1/2}\prod_{i=1}^n\chi_i(b_{ii})f(g)\qquad(b\in B(K),\ g\in G).$$
Suppose $\Pi$ is irreducible, admissible, and unramified, so $\Pi^{K_0}\ne0$. Its normalized Satake parameter is the semisimple conjugacy class of $\operatorname{diag}(\chi_1(\pi_K),\ldots,\chi_n(\pi_K))$, and its unramified Weil–Deligne parameter has zero monodromy, trivial inertia, and geometric Frobenius eigenvalues $\chi_1(\pi_K),\ldots,\chi_n(\pi_K)$. The Galois-side local $L$-factor of this parameter is
$$L_K(s,\Pi)=\prod_{i=1}^n(1-\chi_i(\pi_K)q^{-s})^{-1}.$$

## Example references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-smooth-admissible-representation-of-gln-over-a-p-adic-field]]

[[def-weil-deligne-representation-of-a-local-field]]

[[def-local-l-and-epsilon-factors-of-a-weil-deligne-representation]]

[[thm-unramified-local-langlands-for-gl-n]]

[[def-local-artin-reciprocity-map]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[thm-local-artin-unramified-frobenius-normalization]]

[[thm-local-artin-reciprocity-identifies-the-weil-group-abelianization]]

[Torsten Wedhorn, *The Local Langlands Correspondence for GL(n) over p-adic Fields*, §§4.1.2–4.1.8](https://arxiv.org/pdf/math/0011210)

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §§6.1 and 6.2](https://masaooi.github.io/LLC.pdf)

[J. S. Milne, *Class Field Theory*, Chapter III §§1–3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]
## Facts & Assumptions

**Given:** The Axiom of Choice, $K$, $q$, $\pi_K$, the unramified characters $\chi_i$, and the irreducible admissible induction $\Pi$ in the Example.

[A1] [[def-axiom-of-choice]]: AC selects from every family of nonempty sets.

[A2] [[def-dependent-choice]]: DC supplies a serial path from any prescribed initial point.

[F6] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, AC implies DC and hence meets the separate DC hypothesis of the local Artin supplier.


[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: the normalized absolute value satisfies $|\pi_K|_K=q^{-1}$.

[F2] [[def-smooth-admissible-representation-of-gln-over-a-p-adic-field]]: an unramified admissible representation has nonzero $\mathrm{GL}_n(\mathcal O_K)$-fixed vectors.

[F3] [[def-local-artin-reciprocity-map]], [[thm-local-artin-reciprocity-and-norm-index]], and [[thm-local-artin-unramified-frobenius-normalization]]: the completed local reciprocity map uses arithmetic Frobenius and the unramified normalization sends $\pi_K$ to arithmetic Frobenius. The canonical profinite local reciprocity construction and its unramified normalization are proved under AC/DC; AC in this Example implies DC by [F6]. The separate Weil-group abelianization interface is supplied by [L1].

[L1] The canonical topological isomorphism $K^\times\to W_K^{\mathrm{ab}}$ exists under AC for every nonarchimedean local field with finite residue; its geometric convention sends a chosen uniformizer to its geometric Frobenius lift. [[thm-local-artin-reciprocity-identifies-the-weil-group-abelianization]]

[F4] [[thm-unramified-local-langlands-for-gl-n]]: the normalized Satake class is the semisimple conjugacy class of geometric Frobenius on the unramified Weil–Deligne parameter.

[F5] [[def-local-l-and-epsilon-factors-of-a-weil-deligne-representation]]: the Galois-side local $L$-factor is the determinant on $(\ker N)^{I_K}$.

## Verification

**Given:** The data in the Example.

1.1 Each $\chi_i$ is trivial on $\mathcal O_K^\times$. Via the LLC-normalized local Artin map, the associated one-dimensional Weil character is $\chi_i\circ\operatorname{Art}_{K,\mathrm{LL}}^{-1}$; it is trivial on inertia and takes geometric Frobenius to $\chi_i(\pi_K)$ by [L1]. [A1, A2, F3, F6, L1, given]

2.1 Their direct sum has zero nilpotent operator, trivial inertia, and Frobenius eigenvalues $\chi_i(\pi_K)$. By [F4], its Frobenius conjugacy class is the normalized Satake class of $\Pi$. Substituting these eigenvalues into the local $L$-factor definition gives the displayed product. [A1, F2, F4, F5, F6, given, algebra] ∎
