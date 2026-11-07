---
id: thm-local-langlands-correspondence-for-gl-n-over-p-adic-fields
kind: theorem
title: "Local Langlands correspondence for GLₙ over a p-adic field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-weil-deligne-representation-of-a-local-field
  - def-local-l-and-epsilon-factors-of-a-weil-deligne-representation
  - def-smooth-admissible-representation-of-gln-over-a-p-adic-field
  - def-local-artin-reciprocity-map
  - thm-local-artin-reciprocity-and-norm-index
  - thm-local-artin-unramified-frobenius-normalization
  - thm-local-artin-reciprocity-identifies-the-weil-group-abelianization
  - thm-unramified-local-langlands-for-gl-n
  - def-local-rankin-selberg-integral-for-gln-times-glm
  - thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-bernstein-zelevinsky-classification-of-irreducible-admissible-gln-representations-by-segments
proof_strategy: "Harris–Taylor construction and Henniart's epsilon-factor characterization"
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Torsten Wedhorn, The Local Langlands Correspondence for GL(n) over p-adic Fields, Theorem 1.2.2 and §§4.2–4.4"
      url: "https://arxiv.org/pdf/math/0011210"
    - title: "Michael Harris, The Local Langlands Correspondence: Notes of (Half) a Course at the IHP, §§0, 4.3, 5, and Appendix A.2"
      url: "https://webusers.imj-prg.fr/~michael.harris/IHPcourse.pdf"
    - title: "Masao Oi, Introduction to the Local Langlands Correspondence, Theorem 6.4 and §§6.1–6.5"
      url: "https://masaooi.github.io/LLC.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a finite extension of $\mathbb Q_p$, let $n\ge1$, and let $\operatorname{Irr}_{\mathrm{adm}}(\mathrm{GL}_n(K))$ be the set of isomorphism classes of irreducible smooth admissible complex representations of $\mathrm{GL}_n(K)$. Let $\operatorname{WD}^{\mathrm{Fss}}_n(K)$ be the set of isomorphism classes of $n$-dimensional Frobenius-semisimple Weil–Deligne representations of $K$ over $\mathbb C$. Then there is a unique bijection
$$\operatorname{LLC}_{K,n}:\operatorname{Irr}_{\mathrm{adm}}(\mathrm{GL}_n(K))\longrightarrow\operatorname{WD}^{\mathrm{Fss}}_n(K)$$
with the following properties. For $n=1$, a smooth character $\chi:K^\times\to\mathbb C^\times$ maps to the one-dimensional Weil representation $\chi\circ\operatorname{Art}_{K,\mathrm{LL}}^{-1}$ with zero monodromy, where the local reciprocity map satisfies $\operatorname{Art}_{K,\mathrm{LL}}(\pi_K)=\Phi_K$ for geometric Frobenius. For every $n,m\ge1$, the correspondence preserves the Rankin–Selberg local factors:
$$L_K(s,\pi\times\pi')=L_K(s,\operatorname{LLC}_{K,n}(\pi)\otimes\operatorname{LLC}_{K,m}(\pi')),\qquad \epsilon_K(s,\pi\times\pi',\psi)=\epsilon_K(s,\operatorname{LLC}_{K,n}(\pi)\otimes\operatorname{LLC}_{K,m}(\pi'),\psi),$$
for every irreducible admissible $\pi$ of $\mathrm{GL}_n(K)$, every irreducible admissible $\pi'$ of $\mathrm{GL}_m(K)$, and every nontrivial continuous unitary additive character $\psi$ of $K$. Here the tensor Weil–Deligne representation has Weil action $r\otimes r'$ and nilpotent operator $N\otimes1+1\otimes N'$. Here the automorphic-side Rankin–Selberg factors on the left are the rational generators and epsilon monomials characterized by the local functional equation of the Rankin–Selberg integrals, while the Galois-side factors on the right are those defined above from Weil–Deligne representations. The bijection is compatible with character twists, central characters, and contragredients: twisting $\pi$ by $\chi\circ\det$ tensors its parameter by $\operatorname{LLC}_{K,1}(\chi)$; if $\omega_\pi:K^\times\to\mathbb C^\times$ is the character by which scalar matrices act on $\pi$, its local Artin parameter is $\det(r_\pi)$ with zero monodromy; and $\operatorname{LLC}_{K,n}(\pi^\vee)$ is isomorphic to the dual Weil–Deligne representation, whose Weil action is $r_\pi^\vee$ and whose nilpotent operator is $-N_\pi^\vee$.

## Statement references

[[def-weil-deligne-representation-of-a-local-field]]

[[def-local-l-and-epsilon-factors-of-a-weil-deligne-representation]]

[[def-smooth-admissible-representation-of-gln-over-a-p-adic-field]]

[[def-local-artin-reciprocity-map]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[thm-local-artin-unramified-frobenius-normalization]]

[[thm-local-artin-reciprocity-identifies-the-weil-group-abelianization]]

[[thm-unramified-local-langlands-for-gl-n]]

[[def-local-rankin-selberg-integral-for-gln-times-glm]]

[[thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation]]

[[thm-bernstein-zelevinsky-classification-of-irreducible-admissible-gln-representations-by-segments]]

[Torsten Wedhorn, *The Local Langlands Correspondence for GL(n) over p-adic Fields*, Theorem 1.2.2 and §§4.2–4.4](https://arxiv.org/pdf/math/0011210)

[Michael Harris, *The Local Langlands Correspondence: Notes of (Half) a Course at the IHP*, §§0, 4.3, 5, and Appendix A.2](https://webusers.imj-prg.fr/~michael.harris/IHPcourse.pdf)

[Masao Oi, *Introduction to the Local Langlands Correspondence*, Theorem 6.4 and §§6.1–6.5](https://masaooi.github.io/LLC.pdf)

[[def-dependent-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]
## Proof status

The complete Harris–Taylor or Henniart proof, including the construction of the bijection and verification of all Rankin–Selberg factor compatibilities, is not supplied in the active draft. Wedhorn §4.4 outlines the construction and explicitly leaves the compatibilities to the cited primary proof; Harris §5 states that his construction omits epsilon-pair compatibility at that point. The current JPSS functional-equation carrier has `proof: not-supplied`; its Statement identifies the ideal generator with the factor of the tensor Weil–Deligne parameter. The integral definition itself asserts neither continuation nor that identification. A noncircular automorphic construction is therefore still owed. The Galois epsilon factor in this Statement uses the spectral monodromy determinant in [[def-local-l-and-epsilon-factors-of-a-weil-deligne-representation]]; correcting that normalization supplies no missing compatibility proof. The canonical profinite local Artin map, its arithmetic Frobenius normalization and finite norm kernels are now proved at explicit AC/DC scope. The separate topological isomorphism with the Weil-group abelianization is now supplied, under AC and for both characteristics, by [[thm-local-artin-reciprocity-identifies-the-weil-group-abelianization]]. The Statement assumes AC only; the local Artin interface also names DC, which follows from AC by [[thm-choice-implies-dependent-implies-countable-choice]], but the absent full proof does not identify every axiom use. The same supplier proves the LLC-normalized geometric Frobenius convention; this closes only that rank-one conversion prerequisite. The Bernstein–Zelevinsky segment classification needed to extend the supercuspidal construction is also not supplied. This theorem remains escalated until those arguments and suppliers are reconciled.
