---
title: External non-A¹ projective-relation filtered and Whitney theorem
status: published
research_item: thm-author-32887006bdff-non-a1-whitney-input
dependency_level: 1
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [thm-author-32887006bdff-p1-spectrum-input](item-thm-author-32887006bdff-p1-spectrum-input)
- [Annala–Iwasa, Motivic spectra and universality of K-theory (author PDF,14April2025) · Definition4.4.1 and Lemma4.4.3(ii)–(iii), full proof pp30–31; §2.1.5 quotient convention and Lemma3.2.3](https://ryomei.com/papers/MotSp.pdf)

## Statement
Let $\mathcal E$ be a homotopy-commutative linearly oriented motivic ring spectrum over a qcqs derived scheme $S$, satisfying its actual class-power PBF. For a rank-$r$ bundle $V$ on $Y\in\mathrm{Sm}_S$, define $\widetilde c_i(V)$ by the quotient-projective relation
$$\sum_{j=0}^r(-1)^j\xi^j p^*\widetilde c_{r-j}(V)=0,\qquad\widetilde c_0=1.$$
Then a subbundle filtration with line quotients $L_s$ satisfies $\widetilde c_t(V)=\prod_s(1+c_1(L_s)t)$, and every fiber sequence of vector bundles $V'\to V\to V''$ satisfies $\widetilde c_t(V)=\widetilde c_t(V')\widetilde c_t(V'')$.

## External input
This is Definition4.4.1 and Lemma4.4.3(ii)–(iii). The local chain verifies its model, orientation, product and PBF hypotheses and applies it with base $S=X$, evaluated at the smooth identity $X\to X$. Thus the theorem’s smooth-relative scope does not impose smoothness of $X/k$. The substantial geometric splitting/vanishing argument is imported; no unsupplied A¹-invariance or affine-torsor detection is used.
