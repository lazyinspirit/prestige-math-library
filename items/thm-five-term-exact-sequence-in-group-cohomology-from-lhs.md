---
id: "thm-five-term-exact-sequence-in-group-cohomology-from-lhs"
kind: "theorem"
title: "Five-term exact sequence from LHS"
deps: ["thm-lyndon-hochschild-serre-spectral-sequence", "thm-five-term-exact-sequence-of-the-grothendieck-spectral-sequence", "prop-the-hypercohomology-edge-maps-are-the-canonical-maps-from-cohomology-of-f", "def-dependent-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 6.8.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

With the hypotheses and DC or supplied-comparison convention of LHS there is a natural exact sequence
$$0\to H^1(Q,M^N)\xrightarrow{\mathrm{inf}}H^1(G,M)\xrightarrow{\mathrm{res}}H^1(N,M)^Q\xrightarrow{\mathrm{tr}}H^2(Q,M^N)\xrightarrow{\mathrm{inf}}H^2(G,M).$$
Here inflation and restriction mean the canonical derived invariants maps described below, and transgression is $\mathrm{tr}=d_2^{0,1}$ with the LHS cochain sign convention. The last inflation need not be surjective.

## Facts & Assumptions

**Given:** The fixed group extension and coefficient module in LHS.

[F1] LHS identifies derived $N$-invariants, derived $Q$-invariants and their composite, including the quotient action ([[thm-lyndon-hochschild-serre-spectral-sequence]]).

[F2] The composite five-term sequence is exact with the canonical edges and $d_2^{0,1}$ ([[thm-five-term-exact-sequence-of-the-grothendieck-spectral-sequence]]).

[F3] The second hypercohomology edges are the bottom-cycle inclusion and the projection to invariant horizontal cohomology ([[prop-the-hypercohomology-edge-maps-are-the-canonical-maps-from-cohomology-of-f]]).

## Proof

1.1 Substituting $F=(-)^N$ and $T=(-)^Q$ into F2 gives the terms $H^1(Q,M^N)$, $H^1(G,M)$, $H^1(N,M)^Q$, $H^2(Q,M^N)$ and $H^2(G,M)$ by F1. The page arrow has source $(0,1)$ and target $(2,0)$, hence is precisely $d_2^{0,1}$, which defines transgression here. No low-degree cocycle classification is used. [F1, F2]

1.2 To identify restriction, take a $G$-injective resolution $I$ of $M$. Its restriction is an $N$-injective resolution, as included in F1. The inclusion of complexes $I^G\hookrightarrow I^N$ gives $H^n(G,M)\to H^n(N,M)$. Its cycles are already $Q$-fixed, so the image lies in $H^n(N,M)^Q$. This map is the projection edge in F3: after the augmentation $I^G\to\operatorname{Tot}(J^Q)$ for a Cartan–Eilenberg resolution $J$ of $I^N$, projection to resolution degree zero and horizontal cohomology sends a cocycle to that same class. Thus the second arrow is the derived restriction map. [F1, F3]

1.3 For inflation, $H^0(I^N)=M^N$ is the kernel in horizontal degree zero; there is no incoming horizontal boundary. In $J$, that bottom horizontal cycle column is an injective $Q$-resolution of $M^N$. Its inclusion into $J$, followed by $Q$-invariants and totalization, induces $H^n(Q,M^N)\to H^n(\operatorname{Tot}(J^Q))=H^n(G,M)$. This is the bottom-cycle edge of F3. It derives the fixed-point identification $(M^N)^Q=M^G$ through the quotient action and is the resolution definition of inflation used here. Comparisons preserve this cycle inclusion and the previous projection, so both descriptions are independent and natural under F1's data convention. [F1, F3]

2.1 Exactness now follows at every stated position from F2, with the arrows identified in steps 1.2 and 1.3. At the last domain its kernel is the transgression image; there is no claim that it exhausts $H^2(G,M)$. For zero coefficients all terms vanish. If $N=1$ the restriction term is zero and inflation is an isomorphism; if $Q=1$ the positive quotient terms vanish and restriction is an isomorphism in degree one. These follow also from F1's one-axis degeneracies. [F1, F2, step 1.1, step 1.2, step 1.3] ∎
