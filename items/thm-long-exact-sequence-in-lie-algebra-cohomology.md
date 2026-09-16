---
id: thm-long-exact-sequence-in-lie-algebra-cohomology
kind: theorem
title: Long exact sequence in Lie algebra cohomology
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lie-algebra-cohomology, thm-long-exact-sequence-in-cohomology, def-subrepresentation-quotient-representation-and-intertwiner]
landmark: false
proof_strategy: reduction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Weibel, Lie Algebra Homology and Cohomology, §§7.7–7.8"
      url: https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf
      locator: "§§7.7–7.8, coefficient exact sequence used in Corollary 7.8.10, printed pp. 240 and 246"
---

## Statement

For finite-dimensional $\mathfrak g$ and a short exact sequence
$0\to M'\to M\to M''\to0$ of $\mathfrak g$-modules, the induced CE
complexes form a degreewise short exact sequence and yield the natural long
exact sequence

$$\cdots\to H^n(\mathfrak g,M')\to H^n(\mathfrak g,M)\to H^n(\mathfrak g,M'')\to H^{n+1}(\mathfrak g,M')\to\cdots.$$

## Facts & Assumptions

**Given:** The stated short exact coefficient sequence and finite-dimensional $\mathfrak g$.

[L1] CE cochains and cohomology are as in [[def-lie-algebra-cohomology]].

[L2] A short exact sequence of cochain complexes has a natural cohomology long exact sequence ([[thm-long-exact-sequence-in-cohomology]]).

[L3] The coefficient maps are intertwiners ([[def-subrepresentation-quotient-representation-and-intertwiner]]).

## Proof

**Proof technique:** degreewise exactness followed by the abstract theorem.

1.1 For each $n$, the space $\Lambda^n\mathfrak g$ is finite-dimensional. Applying $\operatorname{Hom}_k(\Lambda^n\mathfrak g,-)$ preserves injections and kernels. It also preserves the given surjection: lift the images of a finite basis and extend linearly. Thus the three CE cochain spaces form a short exact sequence in every degree, including $n<0$, where all are zero. [L1, algebra]

1.2 Because the coefficient maps intertwine the action [L3], applying one before or after each of the two sums in the CE differential gives the same result. Hence the degreewise maps are cochain maps. [L1, L3]

2.1 Apply [L2] to the short exact sequence from steps 1.1–1.2. This gives the displayed natural sequence with the connecting map raising degree by one. At $n=0$ it begins with the invariant subspaces; at degrees above $\dim\mathfrak g$ all terms vanish. The finite basis lift is a single finite construction and uses no choice principle. [L2, step 1.1, 1.2] ∎