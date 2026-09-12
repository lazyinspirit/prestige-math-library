---
id: "prop-a-collapsed-first-quadrant-spectral-sequence-with-field-vector-space-abutment-splits-noncanonically"
kind: "proposition"
title: "Collapsed vector-space spectral sequences split noncanonically"
deps: ["prop-collapse-with-projective-associated-graded-pieces-splits-the-finite-filtration-noncanonically", "prop-modules-over-a-field-are-projective-flat-and-injective", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Section 5.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Assume AC. A collapsed first-quadrant spectral sequence of $k$-vector spaces with finite abutment filtrations gives, degree by degree, an isomorphism of the target with the direct sum of its $E_\infty$ terms on that diagonal, respecting the filtration. Such a splitting exists but cannot in general be chosen naturally in filtered data. If the finitely many graded pieces in a fixed degree are finite-dimensional, existence in that degree needs only finite choice and is valid in ZF.

## Facts & Assumptions

**Given:** The stated finite filtered abutment over a field $k$.

[F1] A finite filtration with projective quotients splits by lifting their identity maps across the quotient maps ([[prop-collapse-with-projective-associated-graded-pieces-splits-the-finite-filtration-noncanonically]]).

[F2] Under AC, every vector space is projective, using a basis ([[prop-modules-over-a-field-are-projective-flat-and-injective]]).

[F3] AC permits choices from arbitrary families of nonempty sets ([[def-axiom-of-choice]]).

## Proof

1.1 Convergence identifies each graded quotient with the corresponding stationary page term. Under AC, F2 makes each such quotient projective. Apply F1 to the finite filtration; a decreasing filtration is first read in reverse order. The resulting isomorphism is the asserted direct sum, with partial sums in the filtration order. Zero quotients use the zero section. If the whole target is zero, its empty nonzero sum is zero; if only one quotient is nonzero, the normalized endpoints identify it with the target canonically. [F1, F2, F3]

1.2 In the finite-dimensional branch, choose a finite basis of each quotient in the fixed degree and choose a lift of each basis vector to the preceding extension. Linear extension is a section: composing with the quotient sends every basis vector to itself. There are only finitely many such bases and lifts, so finite induction supplies them in ZF. The same successive direct-sum construction as F1 therefore works without AC in that degree. This does not assert a simultaneous choice of splittings across an arbitrary family of degrees or spectral sequences. [F1]

2.1 For nonnaturality take $H=k^2$ with $0\subset ke_1\subset H$. The quotient has basis $\bar e_2$ and any linear section sends it to $ae_1+e_2$ for some $a\in k$. The filtration-preserving automorphism $T(e_1)=e_1$, $T(e_2)=e_2+e_1$ induces the identity on both graded pieces but moves every such section, since $a+1\ne a$. These filtered data occur as a collapsed first-quadrant cohomological sequence: put $H$ in cochain degree one, differential zero, with $F^0H=H,F^1H=ke_1,F^2H=0$. The two associated graded entries at $(0,1)$ and $(1,0)$ remain unchanged on every page. A natural splitting would have to commute with $T$, contradicting the calculation. Thus even finite-dimensional collapse gives no general natural splitting. [F1, step 1.1] ∎
