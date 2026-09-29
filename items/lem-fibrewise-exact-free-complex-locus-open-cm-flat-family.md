---
id: lem-fibrewise-exact-free-complex-locus-open-cm-flat-family
kind: lemma
title: Fibrewise exactness of a finite free complex is open in a flat Cohen-Macaulay family
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-fibrewise-exact-flat-complex-lifts-noetherian-target
  - thm-determinantal-grade-criterion-free-complex-exactness
  - lem-ring-detected-at-associated-prime-localizations
  - lem-fibre-regular-sequence-locus-open-cm-equidimensional
  - thm-support-and-annihilator-of-a-finite-module
  - thm-localisation-of-modules-is-exact
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.129.3 (tag 00RB), openness of fibrewise exactness"
      url: https://stacks.math.columbia.edu/tag/00RB
---

## Statement

Assume the Axiom of Choice. Let $R$ be Noetherian and
$R\to S$ a finite-type flat ring map whose nonempty
fibres $S\otimes_R\kappa(\mathfrak p)$ are
Cohen–Macaulay and equidimensional of one fixed
dimension $d$. Let
$F_\bullet:0\to S^{n_e}\xrightarrow{d_e}\cdots
\xrightarrow{d_1}S^{n_0}$ be a finite free complex.
For $\mathfrak q\in\operatorname{Spec}S$ with
$\mathfrak p=\mathfrak q\cap R$, reduce the localized
complex $F_{\bullet,\mathfrak q}$ modulo
$\mathfrak pR_{\mathfrak p}$. Then the set of points
$\mathfrak q$ where this fibre complex is exact in
every positive degree is open in $\operatorname{Spec}S$.

The case $e=0$ has the whole spectrum as its exactness
locus. This is the Stacks 00RB assertion with the
equidimensional fibre hypothesis made explicit; it
applies in particular to polynomial families.

## Facts & Assumptions

**Given:** The flat finite-type family, Cohen–Macaulay equidimensional fibres, and finite free complex.

[F1] Exactness of a finite complex of target-finite base-flat modules on one closed fibre of a Noetherian local map lifts to exactness of the local total complex ([[lem-fibrewise-exact-flat-complex-lifts-noetherian-target]]).

[F2] The Buchsbaum–Eisenbud criterion gives both directions: exactness forces expected ranks and determinantal grade, and those conditions force exactness over a local Noetherian ring ([[thm-determinantal-grade-criterion-free-complex-exactness]]).

[F3] A finite module's support is closed and records where its localization is nonzero. Associated-prime localizations detect zero elements even in a nonreduced Noetherian commutative ring ([[thm-support-and-annihilator-of-a-finite-module]], [[lem-ring-detected-at-associated-prime-localizations]], [[thm-localisation-of-modules-is-exact]]).

[F4] On a finite-type family with Cohen–Macaulay equidimensional fibres of fixed dimension, the locus where a chosen tuple is regular in the local fibre is open relative to its common zero set ([[lem-fibre-regular-sequence-locus-open-cm-equidimensional]]).

## Proof

**Proof technique:** lift exactness at the chosen point, fix the expected ranks nearby, and propagate each determinantal regular sequence across nearby fibres.

1.1 For $e=0$ the claim is immediate. Assume $e\ge1$ and fix $\mathfrak q$ where the fibre complex is positively exact. Put $\mathfrak p=\mathfrak q\cap R$. The local map $R_{\mathfrak p}\to S_{\mathfrak q}$ is Noetherian, and every $F_{j,\mathfrak q}$ is finite over $S_{\mathfrak q}$ and flat over $R_{\mathfrak p}$ because $S$ is $R$-flat. By [F1] the total complex $F_{\bullet,\mathfrak q}$ is positively exact. Its homology modules are finite over the Noetherian ring $S$, so [F3] gives $g\in S\setminus\mathfrak q$ such that $F_\bullet$ is positively exact on $D(g)$. [F1, F3]

2.1 Put $r_i=n_i-n_{i+1}+\cdots+(-1)^{e-i}n_e$ and let $I_i\subseteq S$ be the ideal of $r_i$-minors of $d_i$. By [F2] at the total local ring $S_{\mathfrak q}$, all $r_i$ are nonnegative. At every point of $D(g)$, [F2] applied to the exact total complex makes all $(r_i+1)$-minors vanish in that local ring. Applying the associated-prime detection of [F3] to the Noetherian ring $S_g$ shows those larger minors vanish identically in $S_g$, including nilpotent coefficients. [F2, F3, step 1.1]

3.1 Apply [F2] again, now to the fibre local ring $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$, where the reduced complex is exact by hypothesis. For each $i$, either $(I_i)$ is the unit ideal there or it contains a regular sequence of length $i$. In the unit case, a selected $r_i$-minor is not in $\mathfrak q$, so on a principal neighbourhood of $\mathfrak q$ the ideal $I_i$ is unit in every local ring and every local fibre. In the other case, choose the regular sequence in the localized fibre ideal $(I_i)_{\mathfrak q}/\mathfrak p(I_i)_{\mathfrak q}$. Clearing its finitely many denominators gives $f_{i1},\ldots,f_{ii}\in I_i\subseteq S$ whose images still form a regular sequence in that local fibre, since the denominators are units there. [F2, step 2.1]

4.1 For each nonunit case, apply [F4] to the tuple $(f_{i1},\ldots,f_{ii})$. It gives an ambient open neighbourhood $U_i$ of $\mathfrak q$ whose points inside $V(f_{i1},\ldots,f_{ii})$ have this tuple regular in their local fibres. At a point of $U_i$ outside that zero set, at least one $f_{ij}\in I_i$ is a unit locally, so $I_i$ is the unit ideal in the local fibre. Thus throughout $U_i$ the fibre local determinantal ideal has the unit-or-regular alternative required by [F2]. The unit cases from step 3.1 have their own principal neighbourhoods. [F2, F4, step 3.1]

5.1 Intersect $D(g)$ with the finitely many open neighbourhoods from steps 3.1–4.1. At every point $\mathfrak q'$ of this open set, the fibre local complex has nonnegative expected ranks $r_i$; its larger minors vanish by step 2.1, and its $r_i$-minor ideals satisfy the unit-or-regular alternative by step 4.1. The sufficiency direction of [F2] makes that fibre local complex positively exact. Every initially exact point has such a neighbourhood, proving openness. AC is inherited through [F1]–[F4]; the neighbourhood intersection and denominator choices are finite. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎
