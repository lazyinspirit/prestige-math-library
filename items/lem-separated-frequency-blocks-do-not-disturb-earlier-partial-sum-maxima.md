---
id: "lem-separated-frequency-blocks-do-not-disturb-earlier-partial-sum-maxima"
kind: "lemma"
title: "Separated frequency blocks do not disturb earlier partial sum maxima"
deps: ["def-kolmogorov-analytic-partial-sum-maximal-function", "def-period-one-fourier-coefficients-partial-sums-and-convolution"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Grafakos, Classical Fourier Analysis, third edition
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: FR-4K design item 3 versus Grafakos 4.2.7–4.2.13
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $P=\sum_{k=0}^dc_ke_k$, $m\ge1$ an integer, $a\in\mathbb C$, and $Q=ae_mP$. Its Fourier support is contained in $[m,m+d]$, $A_NQ=0$ for $N<m$, and $A_{m+r}Q=ae_mA_rP$ for $0\le r\le d$. Thus disjoint later blocks leave earlier cutoffs unchanged, and internal maxima scale by $|a|$. Pointwise $|Q|=|a||P|$; for any set E, a separate bound $|a||P(x)|\le\varepsilon$ for all $x\in E$ implies $|Q(x)|\le\varepsilon$ there. When the supremum of $|P|$ on E is finite, this is equivalently the stated bound $|a|\sup_E|P|\le\varepsilon$. Modulation alone gives no magnitude reduction.

## Facts & Assumptions

[F1] Analytic cutoff and finite maximal-function conventions are fixed [[def-kolmogorov-analytic-partial-sum-maximal-function]].

[F2] $e_ke_m=e_{k+m}$ and Fourier coefficients use normalized period-one integration [[def-period-one-fourier-coefficients-partial-sums-and-convolution]].

## Proof

**Given:** The polynomial P, scalar a and integer m in the statement.

1.1 Multiplying the finite sum gives $Q=\sum_{k=0}^dac_ke_{m+k}$. Orthogonality of the characters, verified in F1, identifies the coefficient at $m+k$ with $ac_k$ and all other coefficients with zero. Thus the claimed support containment holds, even when some coefficients vanish. At $N<m$ the cutoff contains no supported frequency, so $A_NQ=0$. [F1, F2]

2.1 At $N=m+r$, $0\le r\le d$, exactly the terms with $k\le r$ occur, so $A_{m+r}Q=\sum_{k=0}^rac_ke_{m+k}=ae_mA_rP$. Taking absolute values and the finite maximum gives $\max_{0\le r\le d}|A_{m+r}Q|=|a|A_*^dP$. By linearity of a finite coefficient sum, adding any polynomial supported strictly beyond a cutoff leaves that cutoff unchanged; the same conclusion applies to any finite list of later separated blocks. [F1, F2, step 1.1]

3.1 Since $|e_m(x)|=1$ for every x, $|Q(x)|=|a||P(x)|$ at every point, and every separately supplied amplitude bound on E transfers unchanged. If $a=0$, Q is zero regardless of E; for E empty the pointwise bound is vacuous (use supremum zero for nonnegative functions on the empty set). In particular $a=1$, $P=1$ gives $|Q|=1$ for every m, so frequency shifts cannot make it smaller than one on a nonempty set. These are finite algebraic identities and use no choice axiom. [F2, step 2.1] ∎
