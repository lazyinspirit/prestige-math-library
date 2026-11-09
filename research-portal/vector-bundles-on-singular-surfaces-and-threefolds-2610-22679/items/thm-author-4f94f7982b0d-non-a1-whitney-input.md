---
id: thm-author-4f94f7982b0d-non-a1-whitney-input
kind: theorem
title: External non-A¹ projective-relation filtered and Whitney theorem
status: published
domain: mathematics
deps:
  - thm-author-4f94f7982b0d-p1-spectrum-input
dependency_roles:
  thm-author-4f94f7982b0d-p1-spectrum-input: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory (author
        PDF,14April2025)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Definition4.4.1 and Lemma4.4.3(ii)–(iii), full proof pp30–31; §2.1.5
        quotient convention and Lemma3.2.3
      hypotheses: Homotopy-commutative linearly oriented motivic ring spectrum over a
        qcqs derived base S, satisfying the source PBF; Y is smooth and qcqs
        over S. Definition 4.4.1 treats positive constant rank. No A1-invariance
        or finite quasi-smooth-transfer hypothesis is imposed.
      statement: Definition 4.4.1 determines the positive-rank Chern polynomial by the
        quotient-projective relation with c0=1. Lemma 4.4.3(ii)-(iii) gives
        line-quotient factorization and the exact-sequence Whitney identity. The
        zero-bundle convention below is a local extension.
      reading_limits: This adjudication read the April 14, 2025 author PDF, Definition
        4.4.1 and Lemma 4.4.3 with its complete proof on printed pages 30-31;
        also sections 2.1.1-2.1.5 on page 14, orientation conventions on pages
        21-22, Lemma 3.1.8 with proof on page 22, and section 3.2 through Lemma
        3.2.3 with proof on page 23. The geometric splitting argument is
        imported as an established theorem; the cited AI22 splitting trick and
        the general non-A1 spectrum machinery were not reconstructed. Also read
        section 0.4 on printed page 4. The prior AI22 proof gap mentioned by the
        source is historical and corrected in this version; no new independent
        defect diagnosis is made.
      source_sha256: ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261
dependency_level: 1
local_argument_provenance: ai-altered
---

## Statement
Let $\mathcal E$ be a homotopy-commutative linearly oriented motivic ring spectrum over a qcqs derived scheme $S$, satisfying its actual class-power PBF. For a bundle $V$ of positive constant rank $r$ on $Y\in\mathrm{Sm}_S$, define $\widetilde c_i(V)$ by the quotient-projective relation
$$\sum_{j=0}^r(-1)^j\xi^j p^*\widetilde c_{r-j}(V)=0,\qquad\widetilde c_0=1.$$
Then a subbundle filtration with line quotients $L_s$ satisfies $\widetilde c_t(V)=\prod_s(1+c_1(L_s)t)$, and every fiber sequence of vector bundles $V'\to V\to V''$ satisfies $\widetilde c_t(V)=\widetilde c_t(V')\widetilde c_t(V'')$.

For the zero bundle adopt $\widetilde c_t(0)=1$, and read coefficients above the degree of any Chern polynomial as zero. These are explicit local coefficient conventions extending the positive-rank definition. With them both identities also hold when a bundle has rank zero: a zero end term in a fiber sequence makes the other map an isomorphism, and the rank-zero filtered formula is the empty product $1$.

## External input
The positive-rank input is Definition 4.4.1 and Lemma 4.4.3(ii)–(iii) of the April 14, 2025 author PDF at printed pages 30–31. Its quotient convention and smooth-qcqs relative site are as in section 2.1. The rank-zero extension and the polynomial coefficient convention are local, rather than assertions that Definition 4.4.1 defines a zero-bundle class. For a zero end term, the isomorphism just noted preserves the positive-rank coefficients because their projective relation and orientation are preserved; if the middle bundle is zero, all three bundles are zero.

The local chain verifies the model, orientation, product and PBF hypotheses and applies the input with base $S=X$, evaluated at the smooth identity $X\to X$. Thus smooth-relative scope imposes no smoothness of $X/k$. The substantial geometric splitting and vanishing argument is imported through the stated source result; its proof and upstream machinery are not reconstructed here.
