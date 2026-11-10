---
title: External extension and morphism input for perfect complexes
status: published
research_item: thm-author-50b5133c29cc-klocal-tt-extension-input
dependency_level: 5
---

PDF p. 7: Zariski locality; PDF p. 15: Localization diagram

## Prerequisites

- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [R. W. Thomason and Thomas Trobaugh, Higher Algebraic K-Theory of Schemes and of Derived Categories · §5, hypotheses of Theorem 5.1 p. 337; Propositions 5.2.2–5.2.4 pp. 338–339; general-qcqs completion Lemma 5.6.2 and 5.6.3 pp. 348–350; Euler relations 1.5.6–1.5.7 p. 261. PDF pages 91–93, 102–104 and 15.](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Thomason-Trobaugh.pdf)
- [The Stacks Project, Derived Categories · Lemma 13.6.6 and Definition 13.6.7 (05RI)](https://stacks.math.columbia.edu/tag/05RA)

## Statement
Let $X$ be qcqs and $j:U\hookrightarrow X$ a quasi-compact open. In the ordinary sheaf-derived perfect categories:

(a) For $E,F\in D_{\mathrm{perf}}(\mathcal O_X)$ and $b:j^*E\to j^*F$, there exist a perfect $Q$ and maps $c:Q\to E$, $a:Q\to F$ with $j^*c$ invertible and $b\,j^*c=j^*a$.

(b) If $a,b:E\to F$ have the same restriction, there are a perfect $Q$ and $c:Q\to E$ with $j^*c$ invertible and $ac=bc$.

(c) A perfect object on $U$ extends to $X$ whenever its Euler class lies in the image of restriction on the classical perfect Euler groups. In particular $F\oplus F[1]$ extends for every perfect $F$ on $U$.

The Euler group here is the classical perfect-complex Grothendieck group, with $[B]=[A]+[C]$ for triangles and $[F[1]]=-[F]$. This is a source-side extension criterion, not an identification with $\pi_0$ of the K spectrum defined in this run. Verdier quotient by a full thick triangulated subcategory is localization at maps with cone in it.

## Source contract
**Given:** qcqs $X$, quasi-compact open $U$, and ordinary derived categories of sheaf complexes with locally bounded finite locally free representatives.

**Goal:** Import exactly the established extension/roof inputs needed before applying enhanced localization.

[F1] TT Propositions 5.2.2(a), 5.2.3(a), 5.2.4(a) supply (a)–(c), under the hypotheses of 5.1 with its auxiliary $Z=X$; 5.6.3 removes the temporary ample-family/noetherian hypotheses in their proof.

[F2] TT 1.5.6–1.5.7 give the Euler relations, so $[F\oplus F[1]]=0$ is in the image of any restriction map. Stacks Lemma 13.6.6 and Definition 13.6.7 give the quotient convention.

## External input
Import [F1] and [F2] with the exact references and reading limits in the metadata. Only their perfect-complex and ordinary morphism assertions are used. No TT nonconnective spectrum, model comparison, or claim of a reconstructed extension theorem is included.
