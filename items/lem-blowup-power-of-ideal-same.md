---
id: lem-blowup-power-of-ideal-same
kind: lemma
title: "Blowing up I and I^d agree"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - def-rees-algebra-ideal-sheaf
  - def-relative-proj-quasi-coherent-graded-algebra
  - lem-proj-veronese-invariance
  - thm-affine-blowup-standard-charts
  - lem-blowup-local-on-base-scheme
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: "Identify the Rees algebra of I^d with the Veronese regrading of the Rees algebra of I and apply Veronese invariance of Proj on an affine cover"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Theorem 19.3.2 (Rees Proj construction), pp. 385-387; power invariance is proved here using the local Veronese supplier"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Definition 31.33.1 (Rees Proj); power invariance follows from the cited local Veronese supplier"
    - title: "The Stacks Project, Commutative Algebra, Section 10.70 (Blow up algebras)"
      url: "https://stacks.math.columbia.edu/tag/052P"
      locator: "Definition 10.70.1, the Rees algebra definition; Veronese invariance is supplied by lem-proj-veronese-invariance"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice, inherited from the relative Proj construction
([[def-axiom-of-choice]]). Let $X$ be a scheme, let $\mathcal I$ be a
quasi-coherent ideal sheaf of finite type on $X$
([[def-quasi-coherent-ideal-sheaf]]) and let $d\ge1$. Then there is a canonical
isomorphism of $X$-schemes
$$\operatorname{Bl}_{\mathcal I^d}X\longrightarrow\operatorname{Bl}_{\mathcal I}X;$$
more precisely $\mathcal R(\mathcal I^d)$ is the Veronese regrading
$\mathcal R(\mathcal I)^{(d)}$ of the Rees algebra sheaf, the degree-$n$ piece
of $\mathcal R(\mathcal I^d)$ being $\mathcal I^{dn}$, and the canonical
identification $\operatorname{Proj}\mathcal R(\mathcal I)=\operatorname{Proj}\mathcal R(\mathcal I)^{(d)}$
of [[lem-proj-veronese-invariance]] glues over $X$.

## Facts & Assumptions

**Given:** A scheme $X$, a quasi-coherent ideal sheaf $\mathcal I$ of finite type, its powers $\mathcal I^n$, the Rees algebra sheaves $\mathcal R(\mathcal I)=\bigoplus_{n\ge0}\mathcal I^n$ and $\mathcal R(\mathcal I^d)=\bigoplus_{n\ge0}\mathcal I^{dn}$ ([[def-rees-algebra-ideal-sheaf]]), and the blowups $\operatorname{Bl}_{\mathcal I}X=\operatorname{Proj}_X\mathcal R(\mathcal I)$ and $\operatorname{Bl}_{\mathcal I^d}X =\operatorname{Proj}_X\mathcal R(\mathcal I^d)$ of [[def-blowup-scheme-along-ideal]].

[F1] [[def-rees-algebra-ideal-sheaf]]: The Rees algebra sheaf of a quasi-coherent ideal sheaf is the graded $\mathcal O_X$-algebra $\bigoplus_{n\ge0}\mathcal I^n$ with degree-$n$ piece $\mathcal I^n$, and $\mathcal R(\mathcal I)^{(d)}:=\bigoplus_{n\ge0}\mathcal R(\mathcal I)_{dn} =\bigoplus_{n\ge0}\mathcal I^{dn}$ is its Veronese regrading; the graded pieces are quasi-coherent.

[F2] [[lem-proj-veronese-invariance]]: For a commutative nonnegatively graded ring $S$ and $d\ge1$ there is a canonical isomorphism $\operatorname{Proj}S\cong\operatorname{Proj}S^{(d)}$ mapping the chart $D_+(f)$ of $\operatorname{Proj}S$, for homogeneous $f\in S_+$ of positive degree, to the chart $D_+(f^d)$ of $\operatorname{Proj}S^{(d)}$ with the same coordinate ring $S_{(f)}=S^{(d)}_{(f^d)}$; it is the identity for $d=1$ and sends the empty Proj to the empty Proj.

[F3] [[thm-affine-blowup-standard-charts]]: For $I=(f_0,\dots,f_r)$ the standard opens $D_+(f_it)=\operatorname{Spec}A[I/f_i]$ cover $\operatorname{Bl}_I\operatorname{Spec}A$ with the stated overlap identifications, and the presentation is independent of the chosen generating family.

[F4] [[def-relative-proj-quasi-coherent-graded-algebra]]: The relative Proj $\operatorname{Proj}_X\mathcal A$ of a quasi-coherent graded $\mathcal O_X$-algebra is constructed by gluing the spectra of the degree-zero localisations over affine opens of $X$, compatibly with restriction to smaller affine opens.

[F5] [[lem-blowup-local-on-base-scheme]]: For an open subscheme $U\hookrightarrow X$ there is a canonical isomorphism $\operatorname{Bl}_{\mathcal I|_U}U\to\operatorname{Bl}_{\mathcal I}X\times_XU$, and the blowup is determined up to canonical isomorphism by its restrictions to an open cover.

## Proof

1.1 The graded $\mathcal O_X$-algebras $\mathcal R(\mathcal I^d)$ and $\mathcal R(\mathcal I)^{(d)}$ are canonically isomorphic: their degree-$n$ pieces are $(\mathcal I^d)^n=\mathcal I^{dn}$ in both cases, the multiplications are the multiplication of $\mathcal O_X$, and the identifications are compatible with restriction to open subschemes. [F1]

1.2 On an affine open $U=\operatorname{Spec}A\subseteq X$ with $\mathcal I|_U=\widetilde I$ and $R(I)=\bigoplus_{n\ge0}I^nt^n$, [F2] applied to the graded ring $S=R(I)$ gives a canonical isomorphism $\operatorname{Proj}R(I)\cong\operatorname{Proj}R(I)^{(d)}$ that maps a chart $D_+(f)$, for homogeneous $f\in R(I)_+$ of positive degree, to $D_+(f^d)$ with the same coordinate ring $R(I)_{(f)}=R(I)^{(d)}_{(f^d)}$. [F2]

2.1 The isomorphism of step 1.2 identifies the standard charts of the two blowups: for $a\in I$ the chart $D_+(at)$ of $\operatorname{Proj}R(I)$ corresponds to $D_+((at)^d)=D_+(a^dt^d)$ in $\operatorname{Proj}R(I)^{(d)}$, and under step 1.1 this is the standard chart $D_+(a^dt')$ of $\operatorname{Proj}R(I^d)$, with coordinate ring $A[I/a]=(R(I))_{(at)}=R(I^d)_{(a^dt')}=A[I^d/a^d]$ via the identification $at\leftrightarrow a^dt'$; the charts $D_+(at)$ cover $\operatorname{Bl}_{\mathcal I}U$ for any generating family by [F3], and their images cover $\operatorname{Bl}_{\mathcal I^d}U$. [F1, F3, step 1.1, step 1.2]

3.1 The chartwise identifications are canonical: on the overlap of two charts they are the identity of the common localisation of $R(I)$, and on restriction to a smaller affine open $V\subseteq U$ the identification for $V$ is the restriction of the identification for $U$, because both sides are computed by the same graded localisations and the Veronese isomorphism of [F2] is natural in the graded ring; hence the identifications are compatible with the gluing data of the standard charts. [F2, F4, step 2.1]

4.1 The identifications of step 3.1 glue over an affine cover of $X$ to an isomorphism of $X$-schemes $\operatorname{Proj}_X\mathcal R(\mathcal I)\to\operatorname{Proj}_X\mathcal R(\mathcal I^d)$ by [F4], and over arbitrary open subschemes the restriction compatibility of [F5] gives the same isomorphism; since $\mathcal R(\mathcal I^d)\cong\mathcal R(\mathcal I)^{(d)}$ by step 1.1, this proves the stated canonical isomorphism $\operatorname{Bl}_{\mathcal I^d}X\to\operatorname{Bl}_{\mathcal I}X$, which is the identity when $d=1$. [F4, F5, step 1.1, step 3.1] ∎

## Remarks

- The identification matches the relative twists $\mathcal O_{\operatorname{Bl}_{\mathcal I^d}X}(1)$ with $\mathcal O_{\operatorname{Bl}_{\mathcal I}X}(d)$ under the Veronese isomorphism, as recorded in [[lem-proj-veronese-invariance]].
- Together with [[def-blowup-fractional-ideal]] this shows that the blowup depends on the ideal sheaf only up to the equivalence generated by invertible rescaling and positive powers.
