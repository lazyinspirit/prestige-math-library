---
id: thm-qa-30-quantum-membership-separation-cost
kind: theorem
title: "Quantum weak-separation query bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-30-quantum-membership-to-separation
  - def-qa-30-quantum-membership-separation-model
  - lem-qa-30-membership-height-geometry
  - lem-qa-30-finite-grid-quantum-subgradient
  - lem-qa-30-centroid-weak-separation-optimization
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is used only for the classical volume-based optimization composition; the separation construction uses finite grids and finite-dimensional geometry."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "van Apeldoorn, Gilyen, Gribling, de Wolf, Convex optimization using quantum oracles, Lemmas 14–21 and Theorem 23"
      url: "https://arxiv.org/pdf/1809.00643"
    - title: "Lee, Sidford, Vempala, Efficient convex optimization with membership oracles, Section 4, Theorem 15"
      url: "https://arxiv.org/pdf/1706.07357"
---

## Statement

Let $n\ge1$, with rationally encoded radii, precision and failure budgets as in the model, and let $B(0,r)\subseteq K\subseteq B(0,R)$ be a closed convex body, $0<\eta\le R$, and $0<\rho\le1/3$. The completed deterministic coherent oracle $\mathrm{MEM}_{\varepsilon,0}(K)$ and its inverse are supplied, with
$$\varepsilon\le\eta(58n)^{-9/2}(r/R)^3(\eta/R)^2\rho.$$
Under the finite encoding and numerical-error budgets of [[alg-qa-30-quantum-membership-to-separation]], that procedure implements $\mathrm{SEP}_{\eta,\rho}(K)$ using
$$O\!\left(\log(n/\rho)\log\!\left((n/\rho)(R/\eta)(R/r)\right)\right)$$
membership and inverse queries combined. The promise applies to all encoded query points; in particular it applies throughout the bounded rational localization queries used below. The oracle completion need not be unique in the weak boundary band.

For the optimization composition assume countable choice. Given $0<\zeta\le R$, $0<\nu\le1/3$, and a unit objective with costed rational approximations, use $\tau,s,\eta_*,T,B$ from [[lem-qa-30-centroid-weak-separation-optimization]] and $\rho_* =\nu/(2BT)$. Membership access at any precision
$$\varepsilon_*\le\eta_*(58n)^{-9/2}(r/R)^3(\eta_*/R)^2\rho_*$$
then returns, with probability at least $1-\nu$, a point $y\in B(K,\zeta)$ satisfying $\langle c,y\rangle\ge\max_{x\in K}\langle c,x\rangle-\zeta$, with at most $BT$ times the preceding per-separation membership-query bound, evaluated at $(\eta_*,\rho_*)$. This is $\widetilde O(n)$ membership queries, where the suppressed factors are logarithmic in $n,R/r,R/\zeta,1/\nu$. It implies the corresponding weak-optimization guarantee over $B(K,-\zeta)$. Output, QFT/phase gates, rotations, numerical precision, centroid computation, and all classical arithmetic/bit costs are additional. No polynomial-time centroid implementation is asserted.

## Facts & Assumptions

**Given:** The body, radii, weak-membership completion, inverse access, and finite procedure specified in the Statement.

[F1] The local height lemma proves convexity, Lipschitz constant $2R/r$, weak-membership value search, clean query implementation, and conversion of an approximate subgradient to an inward separator. ([[lem-qa-30-membership-height-geometry]])

[F2] The local finite-grid lemma proves the full Fourier-tail, mesh, median, approximate-subgradient and value-query bounds. ([[lem-qa-30-finite-grid-quantum-subgradient]])

[F3] The weak-separation contract uses an outward unit normal and an upper halfspace inequality. ([[def-qa-30-quantum-membership-separation-model]])

[F4] The explicit OP7 chooses its finite mesh, power-of-two Fourier grid, encoded output and deterministic error budgets. ([[alg-qa-30-quantum-membership-to-separation]])

[F5] Under countable choice the local centroid reduction proves the stated weak-separation precision, adaptive call count and optimization guarantee with separately charged arithmetic. ([[lem-qa-30-centroid-weak-separation-optimization]], [[def-countable-choice]])

## Proof


1.1 If the supplied boundary width is smaller than half its positive admissible upper bound, regard the same oracle as having that larger width. Its two assertions remain valid because outer bands enlarge and inward erosions shrink; the same is true for an exact zero-width oracle. Write $\varepsilon>0$ for this working allowance, which still satisfies the displayed input bound. First query membership at $x$. IN implies $x\in B(K,\varepsilon)\subseteq B(K,\eta)$, which is a permitted output. OUT implies $x\notin B(K,-\varepsilon)$, hence $x\notin B(K,-\eta)$ since inward erosions decrease with their radius. For $n=1$, $K$ is an interval containing $[-r,r]$ and $\varepsilon<r/2$. A positive OUT point must be at or beyond the positive endpoint minus $\varepsilon$; a negative one has the analogous property. Its outward signed normal therefore satisfies the separation contract with slack at most $\varepsilon$. The point zero necessarily has an IN answer. This proves the scalar case with a single query. [given, F3, F4, algebra]

1.2 Suppose $n\ge2$ and OUT occurs. Rotate $x$ to $-\|x\|e_n$ and use the height function of [F1]. Set $L=2R/r$, $\rho_0=99\rho/100$, $r_1=r\eta/(12\sqrt nR)$ and $$\delta=\frac{\eta\rho_0 n^{-9/2}}{96\cdot23^4}\left(\frac{r\eta}{R^2}\right)^2.$$ Then $[-2r_1,2r_1]^{n-1}\subseteq B(0,r/2)$ since $2\sqrt n r_1\le r/6$. Moreover $\delta\le nr_1L/\rho_0$, by substituting $r_1,L$, $r\le R$, $\eta\le R$ and $\rho_0\le1/3$. Thus the height and grid lemma hypotheses hold. [F1, F2, F4, given, algebra]

2.1 Substitution of the input bound shows $\varepsilon<0.97\,r\delta/(3R)$: squaring verifies $58^9>(300\cdot23^4)^2$, while the remaining factor is at most $288/(300\cdot0.99)<0.97$. The deterministic address perturbation in [F4] is at most $\varepsilon/1000$ and its height displacement at most $\delta/1000$. Thus effective membership uncertainty is less than $0.98\,r\delta/(3R)$. The lower height error is less than $0.98\delta$, and the upper one is at most $2(0.98)\delta/3+\delta/3<0.987\delta$ before the additional $\delta/1000$ value rounding. Hence the implemented clean height-value oracle has uniform error below $\delta$. Binary search and its inverse use $O(1+\log(R/\delta))$ membership/inverse calls by [F1]. This explicit slack also permits the certified rotation/address rounding in [F4]; those are bit costs, not uncounted queries. [F1, F4, step 1.2, algebra]

3.1 Apply [F2] to the transverse dimension $d=n-1$, using its finite shift and $M\ge32$ grid. With failure probability at most $\rho$, it returns $g$ satisfying $$h(y)\ge h(0)+\langle g,y\rangle-(23n)^2\sqrt{\delta L/(\rho_0r_1)}\|y\|-2L\sqrt n r_1.$$ The parameter substitutions are exact: $2L\sqrt n r_1=\eta/3$ and $(23n)^2\sqrt{\delta L/(\rho_0r_1)}=\eta/(2R)$. No differentiability of $h$ or exact membership at boundary points is used. [F2, step 1.2, step 2.1, algebra]

3.2 The finite shift uses no membership query. There are $O(\log(n/\rho))$ phase/median runs by [F2], each using a height query and its inverse; step 2.1 supplies their logarithmic membership cost. Since $R/\delta$ is a fixed constant times a product of powers of $n$, $1/\rho$, $R/r$ and $R/\eta$, its logarithm is $O(\log((n/\rho)(R/\eta)(R/r)))$. Initial queries and the scalar branch are absorbed because the displayed logarithms are bounded below by positive constants. This proves the first bound, counting forward and inverse calls separately and then adding them. [F2, F4, step 1.1, step 1.2, step 2.1, algebra]

4.1 The separator conversion [F1] therefore gives, on this event, a unit inward normal $s$ with $\langle s,z\rangle\ge\langle s,x\rangle-5\eta/6-2R\varepsilon/r$ on all of $K$. The input precision implies $2R\varepsilon/r<\eta/100$, so the additional encoded direction/rotation slack $\eta/100$ in [F4] still leaves error below $\eta$. Emit $G=-s$ in the original coordinates. This gives $\langle G,z\rangle\le\langle G,x\rangle+\eta$ on $K$, in particular on its inward $\eta$-erosion, with the OUT assertion already justified in step 1.1. Together with the IN branch this is exactly [F3]. The rational-direction encoding in [F4] specifies an exact unit normal by normalization; its output approximation was charged in the displayed slack. [F1, F3, F4, step 1.1, step 3.1, algebra]

5.1 For optimization, [F5] makes at most $BT$ adaptive weak-separation calls at precision $\eta_*$ and per-call failure $\rho_*$. Each is implemented by the first part with the stated $\varepsilon_*$; the conditional oracle guarantee is uniform over its input point and completed membership oracle, so the classical adaptive reduction applies. Its failure accounting and output guarantee are exactly those proved in [F5]. Now $BT=O(n\log(nR/s)(1+\log(R/\zeta)))$ and $s=r\zeta/(128R)$, while $1/\eta_*$ and $1/\rho_*$ have only polynomial dependence on these radius/precision ratios, $n$, and $1/\nu$. Multiplying by step 3.2 therefore gives the claimed $\widetilde O(n)$ membership queries. This multiplication charges every call; it imports neither the stronger arithmetic bound from a cited cutting-plane paper nor a free centroid operation. [F5, step 3.2, algebra] ∎

