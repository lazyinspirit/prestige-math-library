---
id: thm-author-32887006bdff-non-a1-whitney-input
kind: theorem
title: External non-A¹ projective-relation filtered and Whitney theorem
status: draft
domain: mathematics
deps:
  - thm-author-32887006bdff-p1-spectrum-input
dependency_roles:
  thm-author-32887006bdff-p1-spectrum-input: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory (author
        PDF,14April2025)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Definition4.4.1 and Lemma4.4.3(ii)–(iii), full proof pp30–31; §2.1.5
        quotient convention and Lemma3.2.3
      hypotheses: Homotopy-commutative linearly oriented motivic ring spectrum over
        any qcqs derived base S, satisfying the source PBF; bundle on Y∈Sm_S. No
        A¹-invariance or finite quasi-smooth-transfer hypothesis.
      statement: Classes are coefficients of Σ_(j=0)^r (−1)^j ξ^j p*c_(r−j)(V)=0,
        c0=1. A line-quotient filtration gives c(V)=Π(1+c1(L_s)t); any fiber
        sequence of vector bundles gives c(V)=c(V′)c(V″).
      reading_limits: Read Definition4.4.1 and full Lemma4.4.3 proof across pp30–31,
        including its use of the splitting trick, sections on the quotient
        projective bundle, empty common zero locus and formal group law. Those
        geometric steps are imported as an established theorem, not claimed
        reconstructed from a flag filtration alone. Read Lemma3.1.8 fully and
        the relevant projective conventions. The prior AI22 proof gap mentioned
        by the source is historical and corrected in this version; no new
        independent defect diagnosis is made.
dependency_level: 1
---

## Statement
Let $\mathcal E$ be a homotopy-commutative linearly oriented motivic ring spectrum over a qcqs derived scheme $S$, satisfying its actual class-power PBF. For a rank-$r$ bundle $V$ on $Y\in\mathrm{Sm}_S$, define $\widetilde c_i(V)$ by the quotient-projective relation
$$\sum_{j=0}^r(-1)^j\xi^j p^*\widetilde c_{r-j}(V)=0,\qquad\widetilde c_0=1.$$
Then a subbundle filtration with line quotients $L_s$ satisfies $\widetilde c_t(V)=\prod_s(1+c_1(L_s)t)$, and every fiber sequence of vector bundles $V'\to V\to V''$ satisfies $\widetilde c_t(V)=\widetilde c_t(V')\widetilde c_t(V'')$.

## External input
This is Definition4.4.1 and Lemma4.4.3(ii)–(iii). The local chain verifies its model, orientation, product and PBF hypotheses and applies it with base $S=X$, evaluated at the smooth identity $X\to X$. Thus the theorem’s smooth-relative scope does not impose smoothness of $X/k$. The substantial geometric splitting/vanishing argument is imported; no unsupplied A¹-invariance or affine-torsor detection is used.
