---
id: thm-pe05-hydrostatic-update-preserves-water-and-dry-admissibility
kind: theorem
title: The hydrostatic HLL step conserves water and preserves dry admissibility
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-pe05-shallow-water-balance-law
  - def-pe05-hydrostatic-hll-scheme
  - lem-pe05-hll-depth-flux-decomposition
  - lem-pe05-hll-dry-face-direction-and-zero-flux
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; §2.1, equations (2.9)–(2.16), Theorem 2.1(i), and §2.2, Proposition 2.2, printed pp. 2052–2057."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions, Chapter 12"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Complete chapter; §HLL solver and §Entropy and positivity, lines 367–387 and 518–552. The assigned scheme's finite-volume CFL and dry-state extension are proved locally."
---

## Statement

Let $N\ge1$ cells form a finite chain, with two admissible ghost states used only to define the boundary faces, or let the cells be periodic. Apply one step of [[def-pe05-hydrostatic-hll-scheme]] to states in $K$ from [[def-pe05-shallow-water-balance-law]]. If
$$\lambda\big(a_{R,i+1/2}-a_{L,i-1/2}\big)\le1\quad(1\le i\le N),$$
then each updated state remains in $K$. The depth is nonnegative; if it is zero then the momentum is zero. On a finite chain the total water changes by the net boundary discharge, and on a periodic mesh total water is conserved.

## Facts & Assumptions

**Given:** Admissible cell and ghost states, the hydrostatic update, the stated cellwise CFL, and the HLL coefficient and dry-face lemmas. Prove one-step admissibility and water balance.

[F1] [[def-pe05-hydrostatic-hll-scheme]]: one-sided corrections change only momentum; the first component uses one shared face mass flux, and each reconstructed depth is no larger than its original cell depth.

[F2] [[lem-pe05-hll-depth-flux-decomposition]]: at a face, $\widehat F^h=p h_L^*-q h_R^*$ with $0\le p\le a_R$ and $0\le q\le-a_L$; the corresponding coefficient is strictly below its speed bound when its reconstructed side is wet.

[F3] [[lem-pe05-hll-dry-face-direction-and-zero-flux]]: at a dry reconstructed side the mass flux points into the dry side, and zero mass flux implies the full vector flux is zero.

[F4] [[def-pe05-shallow-water-balance-law]]: every state with positive depth lies in $K$, while a state with zero depth lies in $K$ exactly when its momentum is zero.

## Proof

1.1 Write $p_R$ for the left-state coefficient at face $i+1/2$, $q_L$ for the right-state coefficient at face $i-1/2$, and use analogous notation for the two inflow coefficients. Expanding the first component of [F1] with [F2] gives $h_i^{n+1}=h_i^n-\lambda(p_R h_{i,+}^*+q_L h_{i,-}^*)+\lambda(q_R h_{i+1,-}^*+p_L h_{i-1,+}^*)$. The inflow terms are nonnegative and the total outflow is at most $(a_{R,i+1/2}-a_{L,i-1/2})h_i^n$, so the CFL gives $h_i^{n+1}\ge0$. [given, F1, F2, algebra]

2.1 If $h_i^n>0$ and at least one outgoing speed is positive, the corresponding outflow term is strictly below its speed bound times $h_i^n$: this follows from [F2] if the reconstructed depth is positive, and is immediate if that reconstructed depth is zero. By step 1.1 and the CFL, $h_i^{n+1}>0$. If both outgoing speeds are zero, the outflow is zero and step 1.1 gives $h_i^{n+1}\ge h_i^n>0$. Thus a wet cell remains wet and is in $K$ by [F4]. [F1, F2, F4, step 1.1, algebra]

2.2 If $h_i^n=0$, then $m_i^n=0$ and [F1] gives $h_{i,+}^*=h_{i,-}^*=0$, so both corrections on this cell vanish. Its left face has dry right state and its right face has dry left state. By [F3], the left mass flux is nonnegative and the right mass flux nonpositive; if the updated depth is zero, nonnegativity forces both mass fluxes to vanish. [F1, F3, step 1.1, algebra]

3.1 In the zero-depth case of step 2.2, [F3] makes both full HLL face fluxes zero. The cell corrections also vanish, so its updated momentum is zero and its updated state lies in $K$ by [F4]. If instead that initially dry cell has positive updated depth, its updated state lies in $K$ by [F4] as well. Together with step 2.1, this proves that every updated state lies in $K$ under the stated CFL condition. [F1, F3, F4, step 2.1, step 2.2, algebra]

4.1 Multiplying the first component of each update by $\Delta x$ and summing over the finite chain cancels every interior shared mass flux, because the one-sided corrections have zero first component. This gives $\Delta x\sum_{i=1}^N(h_i^{n+1}-h_i^n)=-\Delta t(\widehat F^h_{N+1/2}-\widehat F^h_{1/2})$. Thus only boundary discharge changes finite-domain water; periodic identification makes the right-hand side zero. Combining this identity with steps 2.1 and 3.1 proves the theorem. [F1, step 2.1, step 3.1, algebra] ∎
