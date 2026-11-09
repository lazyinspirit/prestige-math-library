---
title: Exact cdh factorization inputs for the source étale map
status: published
research_item: thm-author-e71ff76fe904-cdh-factorization-input
dependency_level: 0
---

PDF p. 5: Prime-to-characteristic comparison

## Prerequisites

None.

## Statement
For $F=\mathbb Q$ or $\mathbb F_p$, $j\geq0$, $n\geq1$ invertible in $F$, use the derived cdh sheafification $L_{\mathrm{cdh}}$ on the source’s entire qcqs site of §3.3. It is the ordinary stable-valued sheafification of source §2.1, left adjoint to inclusion of derived cdh sheaves satisfying covering descent; no identification with unrestricted hypercompletion on the entire qcqs site is asserted. The source supplies: (i) the canonical $M_j\to\mathbb Z(j)_{\mathrm{cdh}}$, an equivalence modulo $n$ in characteristic zero and an equivalence after inverting $p$ in characteristic $p$; (ii) the natural equivalence $\theta_j:\mathbb Z(j)_{\mathrm{cdh}}/n\simeq L_{\mathrm{cdh}}\tau^{\leq j}B_j$; (iii) cdh descent of $B_j=R\Gamma_{\mathrm{et}}(-,\mu_n^{\otimes j})$. The last datum permits the induced map $\epsilon_j$ adjoint to the ordinary truncation map.

## External input
Source version: arXiv:2309.08463v1, September 2023. Theorem 4.33(1) and its proof are on printed p. 31 (zero-based PDF page 30). Its proof sentence says “fiber” where the cofiber bound is needed. That sentence is not imported as a fiber bound; the map, descent and comparison data here are unaffected.

Import precisely (i)–(iii) and the source derived-localization convention under the recorded hypotheses. The role of this item is to supply substantial established cdh foundations after the five authored local applications; it does not claim objectwise cofiber bounds merely from local equivalences. No new bound or mixed-characteristic extension is imported.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] The exact source statements, site and hypotheses recorded in External input.

## Proof
1.1 Import the precise source statements in External input. [F1]

2.1 Theorem4.10(4) gives (i) in characteristic zero; Theorem4.24(3) gives it after inverting $p$ in characteristic $p$. Theorem3.5(3) gives (ii). Example4.26 and the complete proof of Theorem4.33(1) explicitly use étale cdh descent and the induced map in (iii). The source derived sheafification is used with its localization meaning, not deduced from the completed set-valued sheafification supplier. These are established external inputs; their underlying descent and motivic comparison proofs are not reconstructed here. [F1, step 1.1] ∎
