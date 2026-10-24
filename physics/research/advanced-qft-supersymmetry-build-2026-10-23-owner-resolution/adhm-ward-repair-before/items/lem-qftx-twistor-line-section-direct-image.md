---
id: lem-qftx-twistor-line-section-direct-image
kind: lemma
title: Smooth framed bundle of sections over real twistor lines
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 4
axiom_base: "ZF + full AC and DC for the cited proper cohomology-and-base-change theorem."
deps:
  - def-qftx-zero-fi-regular-adhm-and-twistor-data
  - thm-qftx-projective-gaga-for-monad-data
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-cohomology-and-base-change
  - def-axiom-of-choice
  - def-dependent-choice
dependency_roles:
  def-qftx-zero-fi-regular-adhm-and-twistor-data: mathematical-premise
  thm-qftx-projective-gaga-for-monad-data: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  thm-cohomology-and-base-change: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§3, printed pp. 4–5: bundle of holomorphic sections over twistor lines and first-neighbourhood extension."
verification:
  precheck: pass
---

## Statement

Assume full AC and DC. Let $Z=\mathbb C\mathbb P^3$, let $G=\operatorname{Gr}(2,4)$ be the complex Grassmannian of projective lines in $Z$, and let $p:\mathscr L\to G$ be the universal line family with evaluation map $e:\mathscr L\to Z$. Let $\mathcal E\to Z$ be a holomorphic rank-$N$ bundle, $N\geq2$, with a positive Hermitian real structure and a unitary framing on the twistor line at $\infty$. Assume its restriction to every real twistor line $L_x$ is holomorphically and unitarily trivial. Assume also that, for every point $[L_x]\in G$ corresponding to a real twistor line, the cohomology-and-base-change map

$$\varphi^0_{[L_x]}:(p_*e^*\mathcal E)([L_x])\longrightarrow H^0(L_x,\mathcal E|_{L_x})$$

is surjective. Then $(p_*e^*\mathcal E)|_{S^4}$ is a smooth Hermitian rank-$N$ vector bundle, its fibre at $x$ is $H^0(L_x,\mathcal E|_{L_x})$, and the evaluation morphism identifies its pullback to the real incidence family with $e^*\mathcal E$. More precisely, for each line where the degree-zero base-change map is surjective, there is a complex-open neighbourhood in $G$ on whose entire universal-line family the evaluation morphism is an isomorphism. The framing on $L_\infty$ induces a unitary framing of this bundle at $\infty$.

## Statement references

[[thm-qftx-projective-gaga-for-monad-data]]

[[thm-cohomology-and-base-change]]

[[thm-cohomology-projective-space-twisting-sheaves]]

## Facts & Assumptions

**Given:** Full AC and DC; the projective twistor space and real lines; a holomorphic bundle with the stated linewise triviality and framing; and the stated surjectivity of the fibre base-change maps.

[A1] Conditional use of the current GAGA carrier: analytification on $\mathbb P^3_{\mathbb C}$ is an exact equivalence for the bundles in question and is compatible with the finite-type projective family of twistor lines under its stated flat base-change hypotheses. Its current Step 1 record is escalated because the local analytic package and relative comparison in its [A1]–[A2] remain unproved. [[thm-qftx-projective-gaga-for-monad-data]]

[F1] The universal line morphism $p$ is proper and of finite presentation; $\mathscr L$ is a projective-line bundle over $G$, and $e^*\mathcal E$ is coherent and flat over $G$ because it is locally free and $p$ is smooth. These are the hypotheses for proper cohomology and base change. [[thm-cohomology-and-base-change]]

[F2] On $L_x\cong\mathbb P^1$, the unitary holomorphic trivialization gives $\mathcal E|_{L_x}\cong\mathcal O^{\oplus N}$, with $H^0\cong\mathbb C^N$ and $H^1=0$. [[thm-cohomology-projective-space-twisting-sheaves]]

[F3] For a proper finite-presentation flat family and a coherent flat sheaf, surjectivity of $\varphi^q_s$ implies local freeness of $R^q p_*\mathcal F$ when $\varphi^{q-1}_s$ is surjective; for $q=0$ the latter condition is automatic, and $\varphi^0_s$ is then an isomorphism. [[thm-cohomology-and-base-change]]

## Proof

**Given:** The algebraic family obtained under [A1], the real-line restrictions, and the surjective maps $\varphi^0_{[L_x]}$.

1.1 By [F1], the universal line family is a proper flat projective family and $e^*\mathcal E$ is coherent and flat over $G$. By [F2], every real fibre has $H^0$ of dimension $N$ and vanishing $H^1$. The stated surjectivity and [F3] with $q=0$ make $p_*e^*\mathcal E$ locally free of rank $N$ near each real-line point, and identify its fibre with $H^0(L_x,\mathcal E|_{L_x})$. Restriction to the smooth real locus $S^4\subset G$ therefore gives a smooth rank-$N$ bundle. [A1, F1, F2, F3, given]

2.1 The evaluation morphism $p^*p_*e^*\mathcal E\to e^*\mathcal E$ restricts over each real line to the evaluation map $H^0(L_x,\mathcal E|_{L_x})\otimes\mathcal O_{L_x}\to\mathcal E|_{L_x}$. The unitary holomorphic trivialization in the Statement makes this a fibrewise isomorphism at every point of $L_x$. [given, F2, F3, step 1.1, algebra]

3.1 Fix a parameter $[L_x]$ satisfying the surjectivity hypothesis. By [F3], after shrinking a complex-open neighbourhood $U\subseteq G$, the sheaf $p_*e^*\mathcal E$ is locally free there and all degree-zero base-change maps are isomorphisms. Thus evaluation is a map between rank-$N$ vector bundles on $p^{-1}(U)$. Its non-isomorphism locus is closed, as it is the zero locus of its determinant. The morphism $p$ is proper, so the image of this closed set is closed in $U$. Step 2.1 shows that this image does not contain $[L_x]$; shrinking $U$ again makes it empty. Hence evaluation is an isomorphism on every line in this smaller neighbourhood. Restriction to the real locus gives the asserted incidence isomorphism, smooth variation of the Hermitian forms, and the induced framing at infinity. [F1, F2, F3, step 2.1, algebra] ∎
