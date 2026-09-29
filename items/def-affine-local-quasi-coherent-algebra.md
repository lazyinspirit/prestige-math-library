---
id: def-affine-local-quasi-coherent-algebra
kind: definition
title: Affine-local quasi-coherent algebras before general sheaf theory
status: published
origin: pipeline
deps:
  - def-scheme-over-base
  - thm-affine-scheme-ring-anti-equivalence
  - def-affine-scheme-spectrum
  - def-multiplicative-subset-and-localisation
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: Stacks Project, Morphisms of Schemes §§29.11, 29.42–45
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Stacks Project, Schemes, §26.5 Definition 26.5.3 and Lemma 26.5.4"
      url: https://stacks.math.columbia.edu/tag/01HR
---

## Definition

Let $S$ be a scheme. A sheaf $\mathcal A$ of commutative unital
$\mathcal O_S$-algebras is **affine-locally module-associated** if, for every
affine open $U=\operatorname{Spec}R\subseteq S$, there is an $R$-algebra $B_U$
and an isomorphism of $\mathcal O_U$-algebras
$$\mathcal A|_U\cong\widetilde{B_U}.$$
The isomorphism is required to identify restriction to every principal open
$D(r)\subseteq U$ with localization
$B_U\to B_U[\varphi(r)^{-1}]$ induced by the structure map $\varphi:R\to B_U$;
equivalently,
$$\Gamma(D(r),\mathcal A)=B_U[\varphi(r)^{-1}]$$
under this identification. The notation $\widetilde{B_U}$ is the standard
module-associated sheaf on $\operatorname{Spec}R$: on the principal-open basis
it has sections $B_U[\varphi(r)^{-1}]$, with the usual localization maps as
restrictions. This is the construction in Stacks Schemes §26.5, Definition
26.5.3 and Lemma 26.5.4; module localization and the spectrum conventions
are those of [[def-multiplicative-subset-and-localisation]] and
[[def-affine-scheme-spectrum]]. Here $S$ and its structure sheaf are as in
[[def-scheme-over-base]], and the affine ring--scheme correspondence is the one
in [[thm-affine-scheme-ring-anti-equivalence]].

This is the local algebra condition used on this page. It makes no appeal to a
later general theorem about quasi-coherent sheaves.
