---
id: cex-lie-root-system-does-not-record-full-root-datum
kind: counterexample
title: The Lie algebra and root system do not determine the root datum
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 28
deps: [thm-split-rank-one-reductive-classification, def-root-datum-of-a-split-reductive-group, lem-sl2-structure-and-root-coordinates, thm-root-subgroups-of-a-split-reductive-group, lem-root-datum-combinatorics, lem-reductive-center-radical-and-semisimple-quotient, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 21 (21.15), printed pp. 429-430; Ch. 20 (20.39)-(20.40)"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "Remarks 179 and Theorem 178(iii), pp. 82-83"
---

## Statement refuted

The isomorphism class of the Lie algebra together with the abstract root system determines the root datum, and hence the split reductive group.

## Facts & Assumptions

**Given:** AC, a field $k$ of characteristic $\neq2$, and the split reductive groups $G_1=\mathrm{SL}_2$, $G_2=\mathrm{PGL}_2$ over $k$ with their split maximal tori $T_1$ (the diagonal torus in $\mathrm{SL}_2$) and $T_2$ (its image in $\mathrm{PGL}_2$).

[F1] The root data of the semisimple rank-one groups: for $\mathrm{SL}_2$ with $X(T_1)=\mathbb Z\chi_1$ one has $\Phi_1=\{\pm2\chi_1\}$, $\alpha_1^\vee=\chi_1^\vee$, and $X_*(T_1)=\mathbb Z\chi_1^\vee$; for $\mathrm{PGL}_2$ with $X(T_2)=\mathbb Z\chi_2$ one has $\Phi_2=\{\pm\chi_2\}$, $\alpha_2^\vee=2\chi_2^\vee$, and $X_*(T_2)=\mathbb Z\chi_2^\vee$ with $\mathbb Z\alpha_2^\vee=2\mathbb Z\chi_2^\vee$ ([[thm-split-rank-one-reductive-classification]], [[def-root-datum-of-a-split-reductive-group]], [[lem-sl2-structure-and-root-coordinates]]).

[F2] $\operatorname{Lie}(\mathrm{SL}_2)=\mathfrak{sl}_2$ and $\operatorname{Lie}(\mathrm{PGL}_2)=\mathfrak{sl}_2$ in characteristic $\neq2$: the differential of the central isogeny $\mathrm{SL}_2\to\mathrm{PGL}_2$ is an isomorphism of Lie algebras, both being the $2\times2$ traceless matrices, and the root space decomposition is $\mathfrak{sl}_2=\mathfrak t\oplus\mathfrak g_\alpha\oplus\mathfrak g_{-\alpha}$ ([[lem-sl2-structure-and-root-coordinates]], [[thm-root-subgroups-of-a-split-reductive-group]]).

[F3] The centres are $Z(\mathrm{SL}_2)=\mu_2$ and $Z(\mathrm{PGL}_2)=1$, and $\mathrm{PGL}_2=\mathrm{SL}_2/\mu_2$ via the natural central isogeny ([[lem-sl2-structure-and-root-coordinates]], [[lem-reductive-center-radical-and-semisimple-quotient]]); a root datum is determined by its lattices, roots and coroots, and an isomorphism of root data must carry roots bijectively onto roots and coroots onto coroots with compatible pairings ([[def-root-datum-of-a-split-reductive-group]], [[lem-root-datum-combinatorics]]).

## Counterexample

1.1 The Lie algebras agree and the abstract root systems agree: by [F2], $\operatorname{Lie}(G_1)\cong\operatorname{Lie}(G_2)\cong\mathfrak{sl}_2$, and both root systems are $\{\pm\alpha\}$, abstractly the root system $A_1$; the groups are not isomorphic because their centres differ, $\mu_2\neq1$ by [F3]. [F1, F2, F3, given, algebra]

2.1 The root data are nevertheless not isomorphic. Write $X_1=X(T_1)=\mathbb Z\chi_1$ and $X_2=X(T_2)=\mathbb Z\chi_2$, so a $\mathbb Z$-linear isomorphism $f:X_1\to X_2$ carries the generator $\chi_1$ to $\pm\chi_2$. An isomorphism of root data must carry $\Phi_1$ onto $\Phi_2$, in particular it must send the root $\alpha_1=2\chi_1$ to an element of $\Phi_2=\{\pm\chi_2\}$. But $f(2\chi_1)=\pm2\chi_2\notin\{\pm\chi_2\}$ because $\chi_2$ generates a free $\mathbb Z$-lattice. Equivalently, $\alpha_1$ is divisible by $2$ in $X_1$ while $\alpha_2=\chi_2$ is not divisible by $2$ in $X_2$: divisibility of a root in the character lattice is an invariant of root data. The same obstruction appears dually: $\mathbb Z\alpha_1^\vee=X_*(T_1)$ is the full cocharacter lattice while $\mathbb Z\alpha_2^\vee=2\mathbb Z\chi_2^\vee$ has index $2$ in $X_*(T_2)$. Hence there is no isomorphism of quadruples $(X,\Phi,X^\vee,\Phi^\vee)$. [F1, F3, step 1.1, algebra]

3.1 Therefore the Lie algebra $\mathfrak{sl}_2$ and the abstract root system $A_1$, which are the same for the two groups in characteristic $\neq2$, do not determine the root datum or the group: the additional data are the position of the coroot lattice $\mathbb Z\alpha^\vee$ inside $X_*(T)$ and the divisibility of the root in $X(T)$, and these separate the simply connected group $\mathrm{SL}_2$ from the adjoint group $\mathrm{PGL}_2$. [F1, F2, F3, step 2.1, algebra] ∎ 