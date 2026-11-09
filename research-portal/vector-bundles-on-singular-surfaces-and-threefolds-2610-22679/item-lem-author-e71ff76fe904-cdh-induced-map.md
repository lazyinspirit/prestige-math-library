---
title: The exact cdh-local-to-objectwise étale map
status: draft
research_item: lem-author-e71ff76fe904-cdh-induced-map
dependency_level: 1
---

PDF p. 5: Prime-to-characteristic comparison

## Prerequisites

- [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input)

## Statement
Let $F=\mathbb Q$ or $\mathbb F_p$, let $j$ be a nonnegative integer and let $n\geq1$ be an integer invertible in $F$. Work on the qcqs prime-field cdh site of EM §3.3 p.14, with Nisnevich covers and abstract blowup families whose closed immersion and proper map are finitely presented. Let $L_{\mathrm{cdh}}$ be the source derived sheafification, left adjoint to the inclusion of derived cdh sheaves. Since $B_j=R\Gamma_{\mathrm{et}}(-,\mu_n^{\otimes j})$ is a cdh sheaf, the truncation map $\iota:\tau^{\leq j}B_j\to B_j$ has its canonical adjoint extension
$$\epsilon_j:L_{\mathrm{cdh}}\tau^{\leq j}B_j\longrightarrow B_j.$$
Its composite with the sheafification unit is $\iota$. This defines the actual source map; it asserts no objectwise range from a local equivalence alone.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input) supplies the exact derived cdh-localization/descent data used by the source proof.

## Proof
1.1 The exact source data in [F1] fix the large qcqs site, the derived localization and descent of $B_j$. Their adjunction gives $\operatorname{Map}(L_{\mathrm{cdh}}\tau^{\leq j}B_j,B_j)\simeq\operatorname{Map}(\tau^{\leq j}B_j,B_j),$ where maps on the left are between cdh-local derived functors and maps on the right are presheaf maps. Take the image of the actual truncation map under this equivalence. This constructs $\epsilon_j$ with the stated unit equation and a contractibly specified choice in the source derived enhancement. [F1, construct]

2.1 Evaluate this natural transformation at any source scheme. Its source is the evaluated sheafified functor, not the sheafification of an isolated complex at a point. All restriction squares commute because the adjunction was applied to functors. No bound on the cofiber follows merely from this adjunction; that bound will be imported separately. [F1, step 1.1] ∎
