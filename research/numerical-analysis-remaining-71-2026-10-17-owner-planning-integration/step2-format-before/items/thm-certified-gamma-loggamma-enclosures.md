---
id: thm-certified-gamma-loggamma-enclosures
kind: theorem
title: Soundness of finite Gamma and log-Gamma enclosures
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-loggamma-series-convergence-and-gamma-identity, lem-loggamma-product-tail-bound, lem-explicit-euler-constant-enclosure, lem-sectorial-stirling-explicit-remainder-bound, lem-trigonometric-identities-machin-and-range-reduction, alg-certified-gamma-loggamma-evaluation, alg-certified-elementary-range-evaluation, def-certified-evaluation-result-contract, def-outward-rounded-interval-and-ball-operations, lem-loggamma-shift-independent, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §5.11, asymptotic expansions
      url: https://dlmf.nist.gov/5.11
    - title: DLMF, §5.5, functional relations
      url: https://dlmf.nist.gov/5.5
    - title: DLMF, §§5.5, 5.8, and 5.11
      url: https://dlmf.nist.gov/5.8
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 5
---

## Statement

For any finite dyadic rectangle $Z\subset\mathbb C\setminus(-\infty,0]$,
whenever [[alg-certified-gamma-loggamma-evaluation]] returns `success`, its
returned enclosure contains the range of $\Gamma$ or the continued log-Gamma
branch on $Z$ and passes the stated absolute-radius test. Any reported
relative certificate obeys the zero-exclusion condition. No assertion
guarantees success for every valid input or finite cap. Every execution with
finite caps terminates.

## Facts & Assumptions

**Given:** An invocation of [[alg-certified-gamma-loggamma-evaluation]] with its finite backend parameters. For enclosure assertions assume a successful return on the admissible rectangle $Z$; termination also covers unsuccessful returns.

[A1] [[alg-certified-elementary-range-evaluation]], [[thm-real-elementary-range-enclosures]] and [[thm-complex-elementary-range-enclosures]] give sound finite real and complex elementary outputs. [[def-outward-rounded-interval-and-ball-operations]] and [[thm-outward-rounded-operations-are-isotone-and-dag-sound]] preserve containment through the finite arithmetic expressions.

[F1] [[alg-certified-gamma-loggamma-evaluation]] defines the least admissible shift, finite stage cutoffs, actual outward range calls, coordinate enlargements, candidate intersection, final tests and shared work accounting. This is a procedure specification; its correctness is proved below.

[F2] [[def-certified-evaluation-result-contract]] defines the absolute-radius and optional zero-excluding relative-radius tests and the four statuses.

[F3] [[lem-loggamma-shift-independent]]: on the slit plane, for an admissible shift $m$,
$$\ell(z)=\ell_+(z+m)-\sum_{j=0}^{m-1}\operatorname{Log}(z+j),\qquad \exp(\ell(z))=\Gamma(z).$$

[F4] [[lem-loggamma-series-convergence-and-gamma-identity]]: the series defining $\ell_+$ converges to the stated Gamma branch on the right half-plane. [[lem-loggamma-product-tail-bound]] bounds the tail after $N>2|w|$ terms by $|w|^2/(2N(1-|w|/(N+1)))$.

[F5] [[lem-explicit-euler-constant-enclosure]]: $H_M-\log M-1/M\le\gamma_E\le H_M-\log M$ for $M\ge1$.

[F6] [[lem-sectorial-stirling-explicit-remainder-bound]]: on the right half-plane,
$$\ell_+(w)=(w-\tfrac12)\operatorname{Log}w-w+\tfrac12\log(2\pi)+R(w),\qquad |R(w)|\le\frac1{4|w|}.$$

[F7] [[lem-trigonometric-identities-machin-and-range-reduction]] gives the Machin identity and the finite arctangent tails used to enclose $\pi$.

## Proof

1.1 For an admissible $Z$, the prescribed integer shift has $a_W=\inf\Re(Z+m)>0$. Translation by a nonnegative real integer preserves cut avoidance: either the imaginary interval omits zero, or the real lower endpoint was already positive. Thus each exact shift-log input lies in its domain. Its outward-rounded input still contains it; the procedure uses it only when its domain is certified. By [A1] the finite shift-log sum therefore encloses the corresponding exact sum for every $z\in Z$. An unavailable shift sum discards the stage and makes no finite claim. [given, A1, F1, F3, algebra]

1.2 Write $G_M=[g_-,g_+]$ for a finite enclosure of $\log M$. By [F5], the outward interval $[H_M-g_+-1/M,H_M-g_-]$ contains the same real $\gamma_E$ used by the branch. Finite outward evaluation of the product partial sum contains its exact value for every $w\in W_Z=Z+m$ by [A1]. The exact rational majorant $R_W$ bounds $|w|$ uniformly. When $N>2R_W$, [F4] bounds each omitted tail by $T_N=R_W^2/(2N(1-R_W/(N+1)))$, since the numerator increases and the positive denominator decreases when $|w|$ is replaced by $R_W$. The disk of radius $T_N$ lies in the coordinate rectangle used to enlarge the partial sum. Subtracting the containing shift-log sum from step 1.1 and using [F3] therefore encloses the full range $\ell(Z)$. [A1, F1, F3, F4, F5, step 1.1, algebra]

2.1 The finite Machin construction encloses $\pi$ by [F7]. Its positive interval and the real logarithm call enclose $\log(2\pi)$ by [A1]. Therefore the finite Stirling main-term rectangle contains the exact main term on $W_Z$. For every such $w$, $|w|\ge\Re w\ge a_W>0$, so [F6] gives $|R(w)|\le1/(4a_W)$. The prescribed outward coordinate enlargement contains this remainder disk. After subtracting the shift-log sum, [F3] again identifies every enclosed target as the same continued branch $\ell(z)$. [A1, F1, F3, F6, F7, step 1.1, algebra]

2.2 Either finite log candidate thus contains $\ell(Z)$; their coordinatewise intersection, when used, also contains that entire image. For a log-Gamma target the selected rectangle is therefore sound. For a Gamma target, [A1] encloses its complex exponential, and [F3] identifies the pointwise exponential with $\Gamma(z)$ for every $z\in Z$. This proves full input-range containment for both targets. [A1, F1, F3, step 1.2, step 2.1, algebra]

3.1 The algorithm tests the actual final outward rectangle's radius before reporting `success`, and sets a relative flag only when the rectangle excludes zero and passes the relative-radius test. By [F2] these arithmetic tests give exactly the stated absolute and reported relative guarantees. Failed or non-finite candidates are never used for a finite success claim; no finite-cap success guarantee is asserted. [F1, F2, step 2.2]

4.1 The stage count is at most $P$, each shift and sum has a finite integer cutoff, and each elementary call has a finite DAG, format and truncation index. Moreover [F1] checks the shared counter before each local or nested primitive operation and loop update, interrupting before either its own or its caller's remaining work budget is exceeded. Consequently every capped invocation returns a status after finitely many charged operations, whether or not any candidate succeeds. [given, F1, A1, algebra] ∎
