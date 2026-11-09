---
title: External prime-field cdh comparison and cdh dimension bound
status: published
research_item: thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
dependency_level: 8
---

PDF p. 4: Motivic dimension vanishing

## Prerequisites

- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)


## Statement
Fix a prime field $F$ and $j\geq0$. The actual EM functor $M_{j,F}=\mathbb Z(j)_{\mathrm{mot}}$ on qcqs $F$-schemes has a natural comparison $\alpha_{j,F}:M_{j,F}\to C_{j,F}$, where
$$C_{j,F}=\mathbb Z(j)_{\mathrm{cdh}}=L_{\mathrm{cdh}}L_{\mathrm{Kan}}\mathbb Z(j)_{\mathrm{cla}}.$$
Here $L_{\mathrm{Kan}}$ extends the classical smooth-$F$ motivic complex to qcqs $F$-schemes and $L_{\mathrm{cdh}}$ is derived cdh sheafification. The comparison identifies $C_{j,F}$ with $L_{\mathrm{cdh}}M_{j,F}$. For every Noetherian $F$-scheme $X$ of finite dimension $d$, $H^i(C_{j,F}(X))=0$ for $i>j+d$.

## Source contract
**Given:** The prime-field motivic sheaf already supplied by [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes), with cohomology in [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology).

**Goal:** Specify the actual comparison target and import its precise outer-term dimension bound.

[F1] EM comparison map(1.2), Theorem1.3(1), and definition(3.5) give the actual comparison and cdh target, on the same prime-field site as the supplied motivic complex.

[F2] The p.56 paragraph following Remark8.8 explicitly states $C_{j,F}(X)\in D(\mathbb Z)^{\leq j+d}$ in the Noetherian dimension-$d$ context, invoking Theorem3.5(1).

## External input
Import [F1]–[F2] with the full source records and reading limits. A complex belongs to $D(\mathbb Z)^{\leq N}$ when its cohomology vanishes in every degree $>N$. The source obtains the cdh-motivic bound from bounds on the individual filtered stages and shifted graded terms of KH, rather than from vanishing of the total KH-groups alone. The construction and comparison are imported established inputs, not local reconstructions of cdh motivic cohomology.
