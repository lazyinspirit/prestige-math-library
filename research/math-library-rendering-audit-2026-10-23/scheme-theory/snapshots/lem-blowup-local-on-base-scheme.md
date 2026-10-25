---
id: lem-blowup-local-on-base-scheme
kind: lemma
title: "Blowups restrict to open subschemes of the base"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-relative-proj-quasi-coherent-graded-algebra
  - def-blowup-scheme-along-ideal
  - def-rees-algebra-ideal-sheaf
  - thm-relative-proj-base-change
  - def-base-change-morphism-schemes
  - lem-pullback-qc-module-quasi-coherent
  - lem-base-change-open-closed-immersions
  - def-quasi-coherent-ideal-sheaf
  - def-open-immersion-schemes
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: "Identify the pullback of the Rees algebra with the Rees algebra of the restricted ideal and apply relative-Proj base change"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.3 (flat base change) and Lemma 31.33.4(1), section 31.33"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Exercises 19.2.A-B, p. 382; discussion after Theorem 19.3.2, pp. 385-387"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-2.md"
      - "research/frontier-38-owner-30-alpha-batch-2-5a.md"
      - "research/frontier-38-owner-30-step5-hash-2-post.json"
    reviewed_raw_sha256: "92ed41fd35996d959c4ba300027bf6f5424c808cc4eac8622ea752e7a9c2a4d7"
    content_sha256: "4cafa1cf1c90342b1b9f3c70ba19f1a6bf1c9ae3cec6496674a38ce4ba4b83fc"
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the relative Proj construction.
Let $j\colon U\to X$ be an open subscheme of a scheme $X$, let $\mathcal I$ be
a quasi-coherent ideal sheaf on $X$ and let $\mathcal I|_U$ be its
restriction. Then there is a canonical isomorphism of $U$-schemes
$\operatorname{Bl}_{\mathcal I|_U}U\to\operatorname{Bl}_{\mathcal I}X\times_XU$,
equivalently an isomorphism of the open subscheme $\pi^{-1}(U)$ of
$\operatorname{Bl}_{\mathcal I}X$ with
$\operatorname{Bl}_{\mathcal I|_U}U$ over $U$; these isomorphisms are
compatible with inclusions of opens.

## Facts & Assumptions

**Given:** A scheme $X$, an open subscheme $j\colon U\to X$ ([[def-open-immersion-schemes]]), a quasi-coherent ideal sheaf $\mathcal I\subseteq\mathcal O_X$ ([[def-quasi-coherent-ideal-sheaf]]) with restriction $\mathcal I|_U=j^*\mathcal I$, and the blowup $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ of ([[def-blowup-scheme-along-ideal]]), whose Rees algebra is $\mathcal R(\mathcal I)=\bigoplus_{n\ge0}\mathcal I^n$.

[F1] [[thm-relative-proj-base-change]]: For a morphism $g\colon S'\to S$ and a quasi-coherent graded $\mathcal O_S$-algebra $\mathcal A$, with $\mathcal A'=g^*\mathcal A$ graded by $(\mathcal A')_d=g^*\mathcal A_d$, there is a canonical isomorphism of $S'$-schemes $\operatorname{Proj}_S\mathcal A\times_SS'\cong\operatorname{Proj}_{S'}\mathcal A'$, natural in $S'\to S$, compatible with the relative twists. No flatness and no finite-generation hypothesis is required.

[F2] [[def-rees-algebra-ideal-sheaf]]: For a quasi-coherent ideal sheaf $\mathcal I$ on a scheme $X$, the Rees algebra sheaf is $\mathcal R(\mathcal I)=\bigoplus_{n\ge0}\mathcal I^n$ with degree-$n$ piece $\mathcal I^n$ and multiplication induced by multiplication in $\mathcal O_X$; the construction is local on $X$ and on an affine chart $\operatorname{Spec}A$ with $\mathcal I=\widetilde I$ it restricts to the sheaf associated to $\bigoplus_{n\ge0}I^n$.

[F3] [[lem-pullback-qc-module-quasi-coherent]]: Pullback of a quasi-coherent module along a morphism of schemes is quasi-coherent, and on affine opens with $f(U)\subseteq V$, $U=\operatorname{Spec}B$, $V=\operatorname{Spec}A$ and $\mathcal F|_V=\widetilde M$ one has $f^*\mathcal F|_U\cong\widetilde{(B\otimes_AM)}$.

[F4] [[lem-base-change-open-closed-immersions]]: Open immersions remain open immersions after arbitrary base change.

[F5] [[def-base-change-morphism-schemes]]: The base change of $f\colon X\to S$ along $h\colon S'\to S$ is $X\times_SS'$ with second projection as structure map, and the formulas preserve identities and composition.

[F6] [[def-blowup-scheme-along-ideal]]: For a scheme $X$ and a quasi-coherent ideal sheaf of finite type with zero scheme $Z$, the blowup is $\operatorname{Bl}_{\mathcal I}X=\operatorname{Proj}_X\mathcal R(\mathcal I)$ with structural morphism to $X$ and relative twists.

## Proof

1.1 The pullback along $j$ of the Rees algebra is the Rees algebra of the restricted ideal: $j^*\mathcal R(\mathcal I)\cong\mathcal R(\mathcal I|_U)$ as graded $\mathcal O_U$-algebras. Indeed, restriction to the open subscheme $U$ is exact and commutes with tensor products, so $j^*(\mathcal I^n)\cong(j^*\mathcal I)^n=(\mathcal I|_U)^n$ for every $n\ge0$, and these identifications are compatible with the multiplications inherited from $\mathcal O_X$ and $\mathcal O_U$; the graded pieces of both sides are quasi-coherent by [F3], and $\mathcal I|_U$ is again quasi-coherent (of finite type when $\mathcal I$ is). [F2, F3]

2.1 Applying [F1] to the morphism $j\colon U\to X$ and the graded algebra $\mathcal A=\mathcal R(\mathcal I)$ gives a canonical isomorphism of $U$-schemes $\operatorname{Bl}_{\mathcal I}X\times_XU=\operatorname{Proj}_X\mathcal R(\mathcal I)\times_XU\cong\operatorname{Proj}_U\bigl(j^*\mathcal R(\mathcal I)\bigr)\cong\operatorname{Proj}_U\mathcal R(\mathcal I|_U)=\operatorname{Bl}_{\mathcal I|_U}U$, where the last equality is the definition of the blowup of $U$ along $\mathcal I|_U$; the isomorphism is compatible with the relative twists. [F1, F6, step 1.1]

3.1 The first projection $\operatorname{Bl}_{\mathcal I}X\times_XU\to\operatorname{Bl}_{\mathcal I}X$ is the base change of the open immersion $j$ along $\pi$, hence an open immersion by [F4], and its underlying image is the open subset $\pi^{-1}(U)$. Identifying the fibre product with this open subscheme via that open immersion turns the isomorphism of step 2.1 into an isomorphism $\pi^{-1}(U)\to\operatorname{Bl}_{\mathcal I|_U}U$ over $U$. [F4, F5, step 2.1]

4.1 The isomorphisms are compatible with inclusions of opens: for open subschemes $U'\subseteq U\subseteq X$ one has $(\operatorname{Bl}_{\mathcal I}X\times_XU)\times_UU'=\operatorname{Bl}_{\mathcal I}X\times_XU'$ by [F5], and the isomorphism of [F1] is natural in the base morphism, so the identifications for $U$ and for $U'$ restrict to one another; the same naturality makes the passage to $\pi^{-1}(U)$ of step 3.1 compatible with the inclusion $\pi^{-1}(U')\subseteq\pi^{-1}(U)$. [F1, F5, step 3.1] ∎

## Remarks

For an ideal not of finite type, the notation here extends [[def-blowup-scheme-along-ideal]] by using $\operatorname{Proj}_X(\bigoplus_{n\ge0}\mathcal I^n)$ directly. Its graded algebra is quasi-coherent by the affine ideal-power calculation of [[def-rees-algebra-ideal-sheaf]], and no finite generation is required by [[def-relative-proj-quasi-coherent-graded-algebra]].

- The statement is written for a quasi-coherent ideal sheaf; the finite type hypothesis of [[def-blowup-scheme-along-ideal]] is not needed for either side of the comparison and is preserved under restriction when it is imposed.
- The identifications are canonical: on the overlaps of two open subschemes the two blowups agree because both restrict the same graded algebra $\mathcal R(\mathcal I)$.
