---
id: thm-lebesgue-criterion-in-rn
kind: theorem
title: "Lebesgue's criterion in $\\mathbb{R}^m$: a bounded function on a closed nondegenerate rectangle is Riemann integrable iff its discontinuity set is null"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-multidimensional-riemann-criterion, def-multidimensional-darboux-sums, def-multidimensional-darboux-integral, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-null-and-content-zero-in-rn, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions, lem-compact-null-iff-content-zero-in-rn, def-oscillation-in-rn, lem-oscillation-characterisation-in-rn, cor-archimedean-reciprocal, lem-finite-cube-covers-admit-grid-control, thm-heine-borel-rn, lem-closed-subset-of-a-compact-space-is-compact, def-metric-compactness, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-countable-choice, lem-integer-part, thm-algebra-of-continuous-functions, def-continuity-real, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

A bounded real function on a closed nondegenerate rectangle in $\mathbb R^m$, $m\ge1$, is Riemann integrable if and only if its discontinuity set is null.

## Facts & Assumptions

**Given:** A closed nondegenerate rectangle $Q\subseteq\mathbb R^m$, $m\ge1$, and a bounded $f:Q\to\mathbb R$, with $|f|\le B$.

[L1] Continuity at $x$ is equivalent to $\omega_f(x)=0$, and each set $\{x:\omega_f(x)\ge\varepsilon\}$ is closed for $\varepsilon>0$ ([[def-oscillation-in-rn]], [[lem-oscillation-characterisation-in-rn]]).

[L2] The rectangle is compact ([[thm-heine-borel-rn]]), its relatively closed subsets are compact ([[lem-closed-subset-of-a-compact-space-is-compact]]), and compact null sets have content zero ([[lem-compact-null-iff-content-zero-in-rn]]).

[L3] Finite cube covers admit grid control ([[lem-finite-cube-covers-admit-grid-control]]), and small Darboux gaps characterize integrability ([[thm-multidimensional-riemann-criterion]]).

[L4] Compactness supplies finite subcovers ([[def-metric-compactness]]), and the Euclidean and sup norms satisfy fixed dimension-dependent comparisons ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L5] If $u\ge0$, the integer-part theorem supplies a natural $N\ge1$ with $u\le N\le u+1$ after treating the integral and zero cases separately ([[lem-integer-part]]). Rectangle volume is the product of the side lengths ([[def-multidimensional-rectangle-and-volume]]); finite sums and products obey [[def-finite-sum]] and [[lem-finite-sum-laws]]; and every real polynomial is continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L6] For every positive real $u$ there is a natural $r\ge1$ with $1/r<u$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 **Finite rectangle-to-cube claim.** Let $R_s=\prod_{j<m}[a_{s,j},b_{s,j}]$, for $s$ in a finite index set, and let $\gamma>0$. Put $\ell_{s,j}=b_{s,j}-a_{s,j}$. For every $\delta>0$, [L5] supplies naturals $N_{s,j}\ge1$ with $\ell_{s,j}\le\iota(N_{s,j})\delta\le\ell_{s,j}+\delta$. Partition the interval from $a_{s,j}$ into $N_{s,j}$ consecutive intervals of length $\delta$, allowing the last one to extend past $b_{s,j}$. Their Cartesian products are closed cubes of side $\delta$ covering $R_s$, and their total volume is $$\prod_{j<m}\iota(N_{s,j})\delta \le \prod_{j<m}(\ell_{s,j}+\delta).$$ The finite sum of the expressions on the right is a polynomial in $\delta$ whose value at $0$ is $\sum_s\operatorname{vol}(R_s)$. Continuity at $0$ therefore permits a common $\delta>0$ for which the resulting finite cube cover of $\bigcup_sR_s$ has total volume below $\sum_s\operatorname{vol}(R_s)+\gamma$. This includes degenerate rectangles: every zero side contributes a factor $\delta$, so its covering volume tends to $0$.  [L5, construct]

1.2 Suppose the discontinuity set $D$ is null. Given $\varepsilon>0$, choose $\alpha>0$ with $\alpha\operatorname{vol}Q<\varepsilon/2$, and put $S_\alpha=\{x:\omega_f(x)\ge\alpha\}$. Then $S_\alpha\subseteq D$ is relatively closed in $Q$, hence compact, and is null.  [L1, L2, choose]

1.3 Conversely, suppose $f$ is integrable. Fix $r\ge1$ and $\eta>0$, and choose a grid $P$ whose Darboux gap is below $\eta/(2r)$. Let $H_P\subseteq Q$ be the finite union of the pieces of the coordinate hyperplanes forming cell boundaries. Every point of $S_{1/r}\setminus H_P$ lies in the interior of a unique cell whose oscillation is at least $1/r$. Thus the total volume of these high-oscillation cells is below $\eta/2$.  [L1, L3, choose, algebra]

2.1 Cover $S_\alpha$ by finitely many cubes and enlarge them so that their interiors still cover $S_\alpha$, keeping their total volume below $\varepsilon/(8(B+1))$. Apply [L3] to the union of the enlarged cubes, with the remaining volume budget, to obtain a grid $P_0$ whose cells meeting that union have total volume below $\varepsilon/(4(B+1))$.  [step 1.2, L2, L3, choose]

2.2 The set $S_{1/r}$ is contained in the union of the high-oscillation cells and the finitely many pieces forming $H_P$. Each hyperplane piece is a degenerate rectangle of volume $0$.  [step 1.3, L5]

3.1 Let $O$ be the union of those cube interiors and $K=Q\setminus O$. The set $K$ is relatively closed in compact $Q$, hence compact by [L2]. For every $z\in K$, $\omega_f(z)<\alpha$, so some Euclidean ball about $z$ has oscillation below $\alpha$. Shrink these balls by a factor of two; compactness gives a finite subcover of $K$.  [step 2.1, L1, L2, L4, choose]

3.2 Apply the finite rectangle-to-cube claim of step 1.1 to that finite family, with $\gamma=\eta/2$. Its rectangle-volume sum is below $\eta/2$, so $S_{1/r}$ has a finite cube cover of total volume below $\eta$. Since $\eta>0$ was arbitrary, $S_{1/r}$ has content zero and is null.  [step 1.1, step 1.3, step 2.2, L2]

4.1 Refine $P_0$ to mesh small enough that the fixed norm comparison in [L4] makes every cell meeting a shrunken ball lie inside the corresponding original ball. Every cell not meeting $O$ contains a point of $K$, hence is contained in one of those original oscillation balls; refinement does not increase the total volume of cells meeting $O$.  [step 3.1, L3, L4]

5.1 The Darboux gap is therefore below $\alpha\operatorname{vol}Q+2B\,\varepsilon/(4(B+1))<\varepsilon$. By [L3], $f$ is integrable.  [step 1.2, step 2.1, step 4.1, L3, algebra]

6.1 By [L1] and [L6], $D=\bigcup_{r\ge1}S_{1/r}$. Countable-union closure makes $D$ null, with countable choice used exactly through [[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]] and [[def-countable-choice]]. Together with step 5.1, this proves both directions using cover-nullity only. [step 5.1, step 3.2, L1, L6] ∎
