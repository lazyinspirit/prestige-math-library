---
id: "thm-cg-finite-subgroups-lie-in-spherical-parabolics"
kind: "theorem"
title: "Finite subgroups of a Coxeter group lie in spherical parabolics"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 22
deps: ["def-hh-coxeter-matrix-word-group-and-length", "def-cg-real-coxeter-form-and-reflection", "def-cg-canonical-reflection-homomorphism", "def-cg-parabolic-quotient-and-two-sided-minima", "thm-hh-parabolic-minimal-representatives-and-length-additivity", "def-cg-finite-reflection-arrangement-and-spherical-chambers", "thm-cg-finite-chamber-tiling-and-coset-face-identification", "lem-finite-set-has-max", "def-metric-space", "thm-cg-davis-complex-cell-incidence-and-stabilizers", "thm-cg-finite-rank-davis-moussong-cat-zero-theorem", "lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets", "def-cg-cat-zero-cat-one-and-local-geodesic", "def-generated-subgroup", "def-subgroup", "def-coset", "def-axiom-of-choice"]
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, first-edition author manuscript, 2007-2008"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Theorem 12.3.4(i), printed p. 236: a finite subgroup is conjugate into a spherical special subgroup; its proof uses the CAT(0) property, the Bruhat-Tits fixed-point theorem I.2.11, and point isotropy. Appendix I.2, printed pp. 502-504: the full proof of Proposition I.2.10 (center), Theorem I.2.11 (bounded-orbit fixed point) and Proposition I.2.12 (convex fixed set). Section 7.3, printed pp. 128-131, including Proposition 7.3.4: the Coxeter-cell and spherical-coset cell structure. Section 13.2, printed pp. 260-262, including the full proof of Lemma 13.2.3 (the minimal-spherical-parabolic fixed-subspace argument), read for comparison but not used as a premise. Appendix D.2, printed pp. 445-446, Theorem D.2.8 and Corollary D.2.9, read as an alternate Tits-cone averaging proof but not used in this item."
    - title: "M. R. Bridson and A. Haefliger, Metric Spaces of Non-Positive Curvature, Grundlehren der mathematischen Wissenschaften 319, Springer 1999"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "Chapter II.2, §2.7 and Corollary 2.8(1), PDF pp. 200-201 (printed pp. 178-179): the complete proof of the circumcenter construction and its use to show that a finite group or any group with a bounded orbit on a complete CAT(0) space has a nonempty convex fixed set. The radius restriction in Proposition 2.7 is vacuous at curvature zero."
    - title: "M. W. Davis, The geometry and topology of Coxeter groups, MSC lecture slides (Tsinghua University, 2013)"
      url: "https://people.math.osu.edu/davis.12/papers/Davis-MSC.pdf"
      locator: "PDF pp. 12-15, Theorem 2.19(ix): the W-action on Sigma is proper because each isotropy subgroup is conjugate to some spherical special subgroup; the same page states that later cells correspond to spherical subsets. Entire 19-page document opened."
    - title: "M. W. Davis and G. Moussong, Notes on nonpositively curved polyhedra, Turan Workshop notes (1998/1999)"
      url: "https://people.math.osu.edu/davis.12/notes.pdf"
      locator: "Section 6.5, printed pp. 38-39 (Coxeter cells and their face posets) and Section 6.6, printed p. 39 (the cells of Sigma and the isotropy description). The averaging route through the Tits cone was checked only against the statement of the linked in-run Tits-cone items; the notes' Chapter 6.3-6.8 were read at statement level."
  scraped: []
---
## Statement

Let $(S,m)$ be a Coxeter matrix with $S$ finite and $W$ the presented group ([[def-hh-coxeter-matrix-word-group-and-length]]). For $T\subseteq S$ put $W_T:=\langle s:s\in T\rangle$ ([[def-cg-parabolic-quotient-and-two-sided-minima]] (1), [[def-generated-subgroup]]) and call $T$ **spherical** when $W_T$ is finite; write $\mathbb S$ for the set of spherical subsets. Let $\Sigma$ be the Davis realization with cells $q=wW_T$ for $T\in\mathbb S$, the point-stabilizer formula and the chain metric of [[thm-cg-davis-complex-cell-incidence-and-stabilizers]] and [[thm-cg-finite-rank-davis-moussong-cat-zero-theorem]]. A **spherical parabolic** is a conjugate $wW_Tw^{-1}$ with $T\in\mathbb S$. **Assume the Axiom of Choice** ([[def-axiom-of-choice]]); this is required through [[thm-cg-finite-rank-davis-moussong-cat-zero-theorem]] for its CAT(0) conclusion. The proper-space branch of [[lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets]] used for finite orbits in (1) requires no additional Choice; no Choice is used in (2) or (3).

**(1) Fixed points of finite subgroups.** Every finite subgroup $H\le W$ has a fixed point on $\Sigma$: for any $x_0\in\Sigma$ the orbit $Hx_0$ is finite, hence bounded, and its center $c$ ([[lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets]] (1),(2)) is fixed by every $h\in H$. Moreover the fixed set $\Sigma^H=\bigcap_{h\in H}\operatorname{Fix}(h)$ is nonempty, closed, convex, complete and CAT(0) in the induced metric, and contractible with a continuous geodesic contraction to each of its points ([[lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets]] (3),(4), [[def-cg-cat-zero-cat-one-and-local-geodesic]] (3)).

**(2) Point stabilizers are spherical parabolics.** Every point of $\Sigma$ lies in the relative interior of exactly one cell $q=wW_T$ ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (2)); let $\dot q$ be the unique minimum-length representative of $q$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3)). Since $T$ is spherical, $(W_T,T)$ is a finite-type Coxeter system, and the chamber tiling of its reflection space partitions $V_T$ into relative interiors of chamber faces $w_0C^T_I$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2), [[def-cg-canonical-reflection-homomorphism]], [[def-cg-finite-reflection-arrangement-and-spherical-chambers]], [[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (1),(3),(4)). Thus if $y$ is in the relative interior of $q$ and has coordinate $y'\in\operatorname{relint}(w_0C^T_I)$ in the $\dot q$-chart, where $w_0\in W_T$ and $I\subseteq T$, then $$\operatorname{Stab}_W(y)=(\dot q w_0)W_I(\dot q w_0)^{-1}$$ ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (2)). Because $I\subseteq T$ and $W_T$ is finite, $W_I\le W_T$ is finite; hence this point stabilizer is a spherical parabolic and is contained in the setwise stabilizer $wW_Tw^{-1}$ of $q$.

**(3) Containment in a spherical parabolic.** Every finite subgroup $H\le W$ is contained in a spherical parabolic. Choose an $H$-fixed point $c$ by (1), let $q=wW_T$ be its unique carrier cell, and let $\dot q$, $y'$, $w_0$, $I$ be as in (2). Then $$H\le\operatorname{Stab}_W(c)=(\dot q w_0)W_I(\dot q w_0)^{-1}\le\dot qW_T\dot q^{-1}=wW_Tw^{-1};$$ the last equality holds because $\dot q\in wW_T$ and $W_T$ is a subgroup. Since $W_T$ is finite, $wW_Tw^{-1}$ is a spherical parabolic. One may take this parabolic to be the setwise stabilizer of the unique carrier cell of $c$.

**(4) Scope and abstentions.** The statements hold for every finite-rank Coxeter system, including infinite and noncrystallographic ones; the finite subgroup $H$, the conjugating element $w$ and the spherical type $T$ all exist without any finiteness or crystallographic hypothesis on $(W,S)$. No assertion is made here about the conjugacy classes or the number of finite subgroups, about virtual torsion-freeness or residual finiteness, about automaticity, flat subspaces, Moussong hyperbolicity or about the visual boundary, and no alternative proof route is used as a supplier in this item.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite Coxeter matrix $(S,m)$, its presented group $W$, the spherical subsets $\mathbb S$, the Davis realization $\Sigma$ with its cellulation and its CAT(0) chain metric, and a finite subgroup $H\le W$.

[F1] For a complete CAT(0) space $X$ and a nonempty bounded $Y\subseteq X$, under AC there is a unique center $c$ minimizing $r_Y(x)=\sup_{y\in Y}d(x,y)$; every isometry $\varphi$ with $\varphi(Y)=Y$ fixes $c$; every group of isometries with a bounded orbit has a nonempty fixed set; and common fixed sets are closed and convex; when nonempty, they are complete and CAT(0) in the induced metric, and contractible with a continuous geodesic contraction to each of their points. If $X$ is proper, clauses (1)-(4) hold without Choice by the proper-space branch ([[lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets]] (1)-(5), [[def-cg-cat-zero-cat-one-and-local-geodesic]] (3)).

[F2] The Davis complex has an isometric cellular $W$-action; its cells are indexed by spherical cosets $q=wW_T$, and every point lies in the relative interior of exactly one cell. If $\dot q$ is the minimum-length representative, the coordinate chart determined by $\dot q$ gives the point-stabilizer formula $\operatorname{Stab}_W(y)=(\dot q w_0)W_I(\dot q w_0)^{-1}$ whenever the cell coordinate lies in the relative interior of $w_0C^T_I$ ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (1)-(3), [[def-coset]]).

[F3] If $I\subseteq T\subseteq S$, then $W_I\le W_T$ because both are generated by their indicated subsets; if $W_T$ is finite then $W_I$ is finite, and conjugation preserves this inclusion. Also $W_\emptyset=\{1\}$, so the empty type is spherical. Thus for spherical $T$, $W_I$ is a spherical standard parabolic and any conjugate of it lies in the corresponding conjugate of $W_T$ ([[def-cg-parabolic-quotient-and-two-sided-minima]] (1), [[def-generated-subgroup]]).

[F4] The space $\Sigma$ with its chain metric is connected, proper, complete and CAT(0), and every two of its points are joined by exactly one minimizing geodesic ([[thm-cg-finite-rank-davis-moussong-cat-zero-theorem]] (3),(4), [[def-cg-cat-zero-cat-one-and-local-geodesic]] (3)).

[F5] The Axiom of Choice: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F6] Every nonempty finite subset of the real numbers has a maximum ([[lem-finite-set-has-max]]); distances in a metric space are real numbers ([[def-metric-space]]).

[F7] For every spherical $T$, the restricted parabolic $(W_T,T)$ is a finite-type Coxeter system, and in its reflection space $V_T$ the relative interiors of the finite-type chamber faces $w_0C^T_I$ partition $V_T$, including the rank-zero case $T=\emptyset$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2), [[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[def-cg-finite-reflection-arrangement-and-spherical-chambers]], [[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (1),(3),(4)).

[F8] Every subgroup contains the identity element ([[def-subgroup]]).

[F9] The Coxeter group is generated by $S$ with relations $s^2=1$; for $S=\emptyset$ this gives $W=\{1\}$, and for $S=\{s\}$ every word reduces to $1$ or $s$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

## Proof

**Given:** The Axiom of Choice, a finite Coxeter matrix $(S,m)$, its presented group $W$, the spherical subsets $\mathbb S$, the Davis realization $\Sigma$ with its cellulation and CAT(0) chain metric, and a finite subgroup $H\le W$.

**Proof technique:** direct.

1.1 Clause (1). By [F3,F9], $W_\emptyset=\{1\}$ is spherical, so its coset is a vertex $x_0$ of $\Sigma$ by [F2]. If $S=\emptyset$, then $W=\{1\}$ and this is the only cell; $H=\{1\}$, its orbit is $\{x_0\}$ of radius $0$, and its fixed set is $\Sigma$. If $|S|=1$, [F9] shows that $W_S$ is finite, so the full standard parabolic already contains every $H$. In all ranks, the orbit $Y:=Hx_0$ is nonempty because $H$ contains the identity [F8], and finite because it is the image of the finite set $H$. Its distances from $x_0$ form a finite set of real numbers, so [F6] gives a maximum $R$ and $Y\subseteq\overline B(x_0,R+1)$. When $H=\{1\}$, this gives $Y=\{x_0\}$ and $R=0$, with center $x_0$. The $W$-action is isometric by [F2], and $\Sigma$ is proper, complete and CAT(0) by [F4]; hence the choice-free proper branch of the circumcenter lemma [F1] gives the unique center $c$ of $Y$. Each $h\in H$ preserves $Y$, so it fixes $c$ by [F1]; thus $H$ fixes $c$ and $\Sigma^H=\bigcap_{h\in H}\operatorname{Fix}(h)$ is nonempty. The fixed-set clause of [F1] gives that $\Sigma^H$ is closed, convex, complete and CAT(0) in the induced metric, and contractible with a continuous geodesic contraction to each of its points. [F1, F2, F3, F4, F6, F8, F9]

1.2 Clause (2), the carrier cell. By [F2], every point of $\Sigma$ lies in the relative interior of exactly one cell $q=wW_T$; hence each point has a unique carrier cell. [F2]

1.3 Clause (2), the stabilizer formula. Let $q=wW_T$ be a cell and $y$ a point in its relative interior, with coordinate $y'\in C_T$ in the chart determined by $\dot q$. By [F7], there is a unique chamber face $w_0C^T_I$ whose relative interior contains $y'$, including the full chamber face and its lower-dimensional faces. The stabilizer formula of [F2] gives $\operatorname{Stab}_W(y)=(\dot q w_0)W_I(\dot q w_0)^{-1}$; since $I\subseteq T$ and $W_T$ is finite, [F3] shows this is a finite spherical parabolic contained in $\dot qW_T\dot q^{-1}=wW_Tw^{-1}$. [F2, F3, F7]

2.1 Clause (3). Let $H\le W$ be finite and choose an $H$-fixed point $c\in\Sigma$ by step 1.1; let $q=wW_T$ be its unique carrier cell by step 1.2. With $\dot q$, $y'$, $w_0$, $I$ as in step 1.3, the stabilizer formula of [F2] gives $\operatorname{Stab}_W(c)=(\dot q w_0)W_I(\dot q w_0)^{-1}$. Every $h\in H$ fixes $c$, so $H\le\operatorname{Stab}_W(c)\le\dot qW_T\dot q^{-1}=wW_Tw^{-1}$ by [F3]. Since $W_T$ is finite, this cell stabilizer is a spherical parabolic; the carrier cell $q$ is unique by step 1.2. [F2, F3, F7, step 1.1, step 1.2, step 1.3]

3.1 Clause (4) and the Choice bookkeeping. The finite subgroup $H$, its containing spherical parabolic $wW_Tw^{-1}$ and the cell $q$ were obtained in step 2.1 with no finiteness or crystallographic hypothesis on $(W,S)$ beyond $S$ finite, so the statements hold for every finite-rank Coxeter system; the listed abstentions delimit the result. In this proof, AC is required only through [F4], the CAT(0) theorem; although [F1] has a general AC branch, step 1.1 uses its proper-space branch because [F4] gives properness, and that branch is choice-free. The chamber-face and stabilizer calculations in steps 1.2-2.1 use no Choice. [F1, F4, F5, F7, step 1.1, step 1.2, step 1.3, step 2.1] ∎

## Open supplier obligations

This item remains escalated until the following in-run supplier uses are reconciled.

- `thm-cg-finite-rank-davis-moussong-cat-zero-theorem` → this item, Statement clause (1), Fact F4, and proof step 1.1, for properness and CAT(0). Its current proof remains provisional on the open link CAT(1), local link-criterion and globalization inputs recorded in that supplier's Step-3b checkpoint.
- `lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets` → this item, Fact F1 and proof step 1.1, for the orbit center, its invariance and the fixed-set conclusions, including the proper-space branch. The supplier's current Step-3 item decision is not closed; its proper branch was inspected and is used choice-free here, but the consumer decision stays open until the supplier and this use receive a current audit.
- `thm-cg-davis-complex-cell-incidence-and-stabilizers` → this item, Fact F2 and proof steps 1.2, 1.3 and 2.1, for the unique carrier cell, isometric action and the point-stabilizer formula using the minimum coset representative. Its current item receipt is escalated on upstream supplier audits; preserve this use as provisional until those audits and the formula are reconciled.

The finite parabolic presentation and chamber-face decomposition used in Fact F7 and step 1.3 were checked against current repaired/accepted receipts for `thm-hh-parabolic-minimal-representatives-and-length-additivity`, `thm-cg-finite-chamber-tiling-and-coset-face-identification`, `def-cg-finite-reflection-arrangement-and-spherical-chambers`, and `def-cg-canonical-reflection-homomorphism`; their actual uses are not open.

## Remarks

- **The point-stabilizer formula is the chamber-face formula.** The naive reading $\operatorname{Stab}_W(y)=wW_{T\cap S(y')}w^{-1}$ with $S(y')=\{s\in T:B(y',e_s)=0\}$ is false: in $A_2$ with $S=\{s,t\}$ let $y'=sv_s=\tfrac23(e_t-e_s)$, so that $B(y',e_s)=-1$ and $B(y',e_t)=1$, whence $S(y')=\emptyset$; but $\rho(t)v_s=v_s$ because $B(v_s,e_t)=0$, so $sts$ fixes $y'$ and $\operatorname{Stab}_{W_S}(y')=\langle sts\rangle\ne\{1\}$. The formula recorded in clause (2) is the chamber-face formula of [[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (2), which computes the correct conjugate $W_I$ through the chamber containing $y'$.

## Current supplier receipt status

These direct in-run supplier decisions remain open. The final report distinguishes current escalations from missing or stale receipts.

- `def-hh-coxeter-matrix-word-group-and-length`: its current in-run supplier decision is not closed; this item consumes it in Facts F9 and proof steps 1.1.
- `def-cg-real-coxeter-form-and-reflection`: its current in-run supplier decision is not closed; this item consumes it in Facts F7 and proof steps 1.3, 2.1, 3.1.
- `def-cg-canonical-reflection-homomorphism`: its current in-run supplier decision is not closed; this item consumes it in Facts F7 and proof steps 1.3, 2.1, 3.1.
- `def-cg-parabolic-quotient-and-two-sided-minima`: its current in-run supplier decision is not closed; this item consumes it in Facts F3 and proof steps 1.1, 1.3, 2.1.
- `thm-hh-parabolic-minimal-representatives-and-length-additivity`: its current in-run supplier decision is not closed; this item consumes it in Facts F7 and proof steps 1.3, 2.1, 3.1.
- `def-cg-finite-reflection-arrangement-and-spherical-chambers`: its current in-run supplier decision is not closed; this item consumes it in Facts F7 and proof steps 1.3, 2.1, 3.1.
- `thm-cg-finite-chamber-tiling-and-coset-face-identification`: its current in-run supplier decision is not closed; this item consumes it in Facts F7 and proof steps 1.3, 2.1, 3.1.
- `thm-cg-davis-complex-cell-incidence-and-stabilizers`: its current in-run supplier decision is not closed; this item consumes it in Facts F2 and proof steps 1.1, 1.2, 1.3, 2.1.
- `thm-cg-finite-rank-davis-moussong-cat-zero-theorem`: its current in-run supplier decision is not closed; this item consumes it in Facts F4 and proof steps 1.1, 3.1.
- `lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets`: its current in-run supplier decision is not closed; this item consumes it in Facts F1 and proof steps 1.1, 3.1.
- `def-cg-cat-zero-cat-one-and-local-geodesic`: its current in-run supplier decision is not closed; this item consumes it in Facts F1, F4 and proof steps 1.1, 3.1.
