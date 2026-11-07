---
dependency_level: 0
id: lem-finite-tree-density-gives-hausdorff-lower-bound
kind: lemma
title: "Finite tree densities and diameter imply Hausdorff lower bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-hausdorff-measure
  - thm-hausdorff-dimension-critical-exponent
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock, Badly approximable systems of affine forms"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "Lemma 3.3, specialized uniform densities and diameters; finite-level proof avoids its Frostman import"
---

## Statement

Let $A_0$ be a compact subset of a finite-dimensional Riemannian manifold with a Borel measure $\nu$ and $0<\nu(A_0)<\infty$. Suppose $\nu(B(z,r))\le Lr^k$ for all sufficiently small balls meeting $A_0$, with fixed $k,L>0$. Let $\mathcal A_j$ be finite nonempty families of positive-measure compact subsets of $A_0$, starting with $\mathcal A_0=\{A_0\}$, such that distinct members at a level have measure-zero intersection, every child is contained in its parent, and every parent retains at least fraction $0<\delta\le1$ of its measure in its children. Suppose all depth-$j$ diameters are at most $D\rho^j$, where $D>0$ and $0<\rho<1$.

The nested limit $A_\infty=\bigcap_j\bigcup\mathcal A_j$ is nonempty compact, and
$$\dim_H A_\infty\ge\max\{0,k-a\},\qquad a=\frac{\log\delta}{\log\rho}.$$
Only explicitly defined finite-level probabilities are needed; no limiting probability, infinite-product measure or Frostman theorem is assumed.

## Statement references

[Kleinbock, Lemma 3.3](https://arxiv.org/pdf/math/9808057v2) — uniform retained-density and diameter specialization.

## Facts & Assumptions

**Given:** The measure, compact sets, finite parent-child families and constants in the Statement.

[F1] A positive lower bound on the sums of $s$-th diameter powers of every sufficiently fine countable cover gives positive Hausdorff $s$-measure and hence Hausdorff dimension at least $s$. [[def-hausdorff-measure]], [[thm-hausdorff-dimension-critical-exponent]]

## Proof

**Proof technique:** finite-level probability weights and compact covers.

1.1 The level unions are nonempty nested compact subsets of $A_0$, so compactness gives a nonempty compact intersection. If $k-a\le0$ the dimension conclusion follows already. Assume $s=k-a>0$. Assign mass1 to $A_0$, and distribute each parent's mass among its finitely many children in proportion to their $\nu$ measures. The sum of child volumes is at least $\delta$ times the parent volume, since same-level intersections are null. Induction therefore gives each depth-$j$ cell $A$ mass at most $\delta^{-j}\nu(A)/\nu(A_0)$. [given, construct, algebra]

2.1 For a finite depth $J$, distribute each leaf mass uniformly relative to $\nu$ inside that leaf and sum these finitely many measures, obtaining an actual Borel probability $\mu_J$. Its mass in any depth-$j$ cell, $j\le J$, is the mass previously assigned to that cell: descendants remain inside it and intersections with other level-$j$ cells are $\nu$-null. The construction requires only finite sums and divisions by positive cell measures. [step 1.1, construct, algebra]

3.1 Fix a sufficiently small $0<r<D$ and let $j$ be the least integer with $D\rho^j\le r$. For $J\ge j$, a ball $B(z,r)$ meets only depth-$j$ cells contained in $B(z,2r)$, by their diameter bound. Their total $\nu$ volume is at most $L(2r)^k$. Thus $\mu_J(B(z,r))\le\delta^{-j}L(2r)^k/\nu(A_0)$. Minimality gives $\rho r/D<\rho^j\le r/D$, and $\delta^{-j}=(\rho^j)^{-a}$. Consequently $\mu_J(B(z,r))\le C r^{k-a}=Cr^s$ for a constant independent of $r,J,z$. Balls not meeting $A_0$ have zero mass. [given, step 1.1, step 2.1, algebra]

4.1 Any countable open-ball cover of $A_\infty$ has a finite subcover. For all sufficiently large $J$, the whole level-$J$ union lies inside this finite union of balls: otherwise the compact sets obtained by deleting that open union from successive nested level unions would have nonempty intersection outside the cover. Choose $J$ also at least the finitely many indices $j$ needed in step 3.1 for these ball radii. Then $1\le\sum_i\mu_J(B_i)\le C\sum_i r_i^s$. The same lower bound holds for the full countable ball cover. [step 1.1, step 2.1, step 3.1, algebra]

5.1 This also bounds arbitrary countable diameter covers. Restrict their members to $A_0$, choose a fixed countable dense set in a finite coordinate neighbourhood of this compact set, and enumerate its rational-radius balls. For a cover member $E_i$ and any $\eta>0$, the first such ball containing it with radius at most $2\operatorname{diam}(E_i)+\eta2^{-i-1}$ exists by density; empty members are ignored. This determined rule also covers zero-diameter members and requires no new Choice axiom. Taking the original cover fine and $\eta$ small makes all radii eligible for step 3.1. The inequality $(x+y)^s\le\max(1,2^{s-1})(x^s+y^s)$ and step 4.1 give a fixed positive lower bound on $\sum_i\operatorname{diam}(E_i)^s$ after letting $\eta\downarrow0$. F1 now proves $\dim_HA_\infty\ge s$. The dense set used here is obtained from rational coordinates in finitely many charts, so no general separability selection, limiting tree measure or weak compactness argument has been inserted. [F1, step 3.1, step 4.1, algebra] ∎

