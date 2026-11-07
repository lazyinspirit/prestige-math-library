---
id: op-fontaine-mazur-in-higher-dimensions-and-general-number-fields
kind: open-problem
title: Fontaine–Mazur beyond the regular two-dimensional case over Q
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-number-field
  - def-scheme-over-base
  - def-smooth-morphism-schemes
  - def-projective-morphism-pre-proj
  - def-locally-finite-type-and-finite-type-morphism
  - def-p-adic-period-rings
  - def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf
  - def-de-rham-p-adic-galois-representation
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: >-
  AC supplies the current global absolute-Galois-group convention, and Countable
  Choice supplies the countable choices of place prolongations and compatible
  roots of unity used in this formulation. No choice-free branch is asserted.
sources:
  references:
    - title: "James Newton, Modularity of Galois Representations and Langlands Functoriality, §2.4"
      url: "https://people.maths.ox.ac.uk/newton/iisc.pdf"
    - title: "Michael Emerton, Langlands Reciprocity: L-functions, Automorphic Forms, and Diophantine Equations, §6.4.2"
      url: "https://math.uchicago.edu/~emerton/pdffiles/reciprocity.pdf"
    - title: "Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II, Chapter 6, §6.1"
      url: "https://math.stanford.edu/~conrad/papers/notes.pdf"
    - title: "Xinyao Zhang, On the Fontaine–Mazur Conjecture for p=3, arXiv:2412.06812v5"
      url: "https://arxiv.org/abs/2412.06812v5"
    - title: "OpenAI, Fontaine–Mazur modularity at the prime 2, Math Release preprint README"
      url: "https://github.com/openai/math/blob/main/preprints/Fontaine-Mazur-modularity-at-the-prime-2-October-6-2026/README.md"
verification:
  precheck: n/a
---

## Open problem

Assume AC and Countable Choice for the current global and local Galois-group
conventions. Let $K$ be any number field, let $p$ be any rational prime, let $E/\mathbb Q_p$
be a finite extension, and let $V$ be a finite-dimensional $E$-vector space
with a continuous irreducible action $\rho$ of $G_K=\operatorname{Gal}(K^{\mathrm{sep}}/K)$.
For each finite place $v$ of $K$, choose a prolongation $\bar v$ to
$K^{\mathrm{sep}}$, let $D_{\bar v}$ be its stabilizer, and let $I_{\bar v}$ be
the kernel of the residue-field action of $D_{\bar v}$. For $v\mid p$, use a
chosen completion identification $D_{\bar v}\cong G_{K_v}$ and the underlying
$\mathbb Q_p$-representation of $V$. Call $\rho$ **geometric** when there is
a finite set $S$ of finite places such that $\rho(I_{\bar v})=\{1\}$ for
$v\notin S$, and, for every $v\mid p$,
$$\dim_{K_v}(B_{\mathrm{dR},K_v}\otimes_{\mathbb Q_p}V)^{G_{K_v}}=\dim_{\mathbb Q_p}V.$$
Here $B_{\mathrm{dR},K_v}$ is Fontaine's de Rham period field. Choose
compatible primitive $p^m$th roots of unity $\zeta_{p^m}$ in
$K^{\mathrm{sep}}$. The $p$-adic cyclotomic character $\chi_p:G_K\to
\mathbb Z_p^\times$ is determined by
$g(\zeta_{p^m})=\zeta_{p^m}^{\chi_p(g)\bmod p^m}$. For an integer $r$, let
$E(r)=E\otimes_{\mathbb Q_p}\mathbb Q_p(r)$, where $\mathbb Q_p(r)$ is the
one-dimensional representation on which $G_K$ acts by $\chi_p^r$. A
subquotient means a quotient of a $G_K$-stable subspace by a $G_K$-stable
subspace. For a smooth projective finite-type $K$-scheme $X$, put
$X_{\bar K}=X\times_K\operatorname{Spec}K^{\mathrm{sep}}$ and let
$H^i_{\mathrm{et}}(X_{\bar K},\mathbb Q_p)$ denote ordinary p-adic étale
cohomology, defined by derived global sections on the small étale site with
constant p-adic coefficients; its $G_K$-action is induced by the action on
$K^{\mathrm{sep}}$. The Fontaine–Mazur question is whether every such $\rho$
occurs as an irreducible subquotient of
$$H^i_{\mathrm{et}}(X_{\bar K},\mathbb Q_p)\otimes_{\mathbb Q_p}E(r)$$
for some smooth projective finite-type $K$-scheme $X$, integer $i\ge0$, and
integer $r$.

## Open problem references

[[def-geometric-p-adic-galois-representation]]

[[def-de-rham-p-adic-galois-representation]]

[[def-unramified-galois-representation-at-a-place]]

[[def-p-adic-period-rings]]

[[def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf]]

[[def-number-field]]

[[def-scheme-over-base]]

[[def-smooth-morphism-schemes]]

[[def-projective-morphism-pre-proj]]

[[def-locally-finite-type-and-finite-type-morphism]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

[James Newton, *Modularity of Galois Representations and Langlands Functoriality*, §2.4](https://people.maths.ox.ac.uk/newton/iisc.pdf)

[Michael Emerton, *Langlands Reciprocity: L-functions, Automorphic Forms, and Diophantine Equations*, §6.4.2](https://math.uchicago.edu/~emerton/pdffiles/reciprocity.pdf)

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part II, Chapter 6, §6.1](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Xinyao Zhang, *On the Fontaine–Mazur Conjecture for p=3*, arXiv:2412.06812v5, Theorem 1.0.2](https://arxiv.org/abs/2412.06812v5)

## Status

Open in the universal higher-dimensional and general-number-field scope as of
2026-10-26. Zhang's arXiv v5 states the regular two-dimensional result over
$\mathbb Q$ for odd $p$. An OpenAI Math Release preprint dated 2026-10-06
claims the corresponding regular two-dimensional case at $p=2$; this batch
checked its public README and abstract only and did not verify its proof. This
item records that as a preprint claim, not as an established input. The open
scope recorded here is $[K:\mathbb Q]>1$ or $\dim_E V\ge3$; it does not assert
that every remaining low-dimensional or prime-by-prime case is open.

## Status references

[Xinyao Zhang, *On the Fontaine–Mazur Conjecture for p=3*, arXiv:2412.06812v5, last revised 7 October 2026](https://arxiv.org/abs/2412.06812v5)

[OpenAI, *Fontaine–Mazur modularity at the prime 2*, Math Release preprint README, dated 6 October 2026; claim only, proof not read in this batch](https://github.com/openai/math/blob/main/preprints/Fontaine-Mazur-modularity-at-the-prime-2-October-6-2026/README.md)

[Michael Emerton, *Langlands Reciprocity: L-functions, Automorphic Forms, and Diophantine Equations*, §6.4.2](https://math.uchicago.edu/~emerton/pdffiles/reciprocity.pdf)
