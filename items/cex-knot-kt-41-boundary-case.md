---
id: cex-knot-kt-41-boundary-case
kind: counterexample
title: "Vanishing tau does not imply smooth sliceness"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - lem-tau-is-independent-of-heegaard-grid
  - def-rasmussen-s-invariant
  - thm-rasmussen-s-bounds-smooth-four-ball-genus
  - lem-lee-cobordism-filtration-genus-bound
  - def-smooth-and-topological-slice-genus
  - lem-knot-kt41-whitehead-double-values
  - def-countable-choice
dependency_level: 12
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is inherited from the knot invariant and smooth genus definitions; the final contradiction is finite arithmetic."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Matthew Hedden and Philip Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
      locator: "Theorem 1.1, printed p.2; §§2.1–2.2 for the knot and invariant computations"
    - title: "Jacob Rasmussen, Khovanov homology and the slice genus"
      url: "https://arxiv.org/pdf/math/0402131v1"
      locator: "Theorem 1, PDF/printed p.1; proof in §4.4, printed p.12, gives |s(K)|≤2g₄(K)"
---

## Statement refuted

Assume the Axiom of Countable Choice. The universal implication that a knot with $\tau(K)=0$ is smoothly slice is false. Let $s(K)=s_{\max}(K)-1$, where $s_{\max}(K)$ is the maximal quantum filtration level of a nonzero class in rational Lee homology. In the twist convention of Hedden and Ording, with two full right-handed twists, the positive-clasped Whitehead double $D_+(T_{2,3},2)$ has $\tau=0$ and $s=2$, so its smooth four-ball genus is at least one and it is not smoothly slice.

## Statement references

[[def-knot-floer-filtration-and-tau|The tau invariant]]

[[def-rasmussen-s-invariant|Rasmussen's s invariant]]

[[thm-rasmussen-s-bounds-smooth-four-ball-genus|The smooth genus bound for s]]

[[lem-knot-kt41-whitehead-double-values|The proved values for this Whitehead double]]

[Hedden and Ording, *The Ozsvath-Szabo and Rasmussen concordance invariants are not equal*, Theorem 1.1](https://arxiv.org/pdf/math/0512348v1)

[Rasmussen, *Khovanov homology and the slice genus*, §§3–4](https://arxiv.org/pdf/math/0402131v1)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the universal implication, and the specified positive-clasped, two-full-twist Whitehead double in Hedden and Ording's convention.

[A1] [[def-countable-choice]] is the axiom assumption retained in the Statement.

[F1] **External input, authorized by the run-specific source boundary.** Hedden and Ording, *The Ozsváth–Szabó and Rasmussen concordance invariants are not equal*, Theorem 1.1, printed p. 2, states $\tau(D_+(T_{2,3},2))=0$ and $s(D_+(T_{2,3},2))=2$ for the two-twisted positive Whitehead double of the right-handed trefoil. Their Figure 1 specifies the twist box as full right-handed twists. The theorem states both values. Section 2.1, printed p. 4, reports a computer-computed Khovanov Poincaré polynomial: its homological-degree-zero support forces $s\in\{2,4\}$, and the genus-one upper bound together with Rasmussen's inequality forces $s=2$. The acknowledgments on printed p. 3 credit Rasmussen with the $s$ computations. This is a published derivation using computer output, not a reproduced Lee chain-complex computation; the numerical theorem is imported here.

[F2] **External input, authorized by the run-specific source boundary.** Rasmussen, *Khovanov homology and the slice genus*, Theorem 1 in §1, PDF p. 1, states $|s(K)|\le 2g_4(K)$ for every knot, where $g_4$ is the minimum genus of a smooth properly embedded surface in $B^4$. The source proof in §4.4 derives this from the filtered Lee cobordism map; I read that proof. This is the same smooth genus convention as [[def-smooth-and-topological-slice-genus]].

[F3] [[def-knot-floer-filtration-and-tau]] uses the same normalized threshold convention for the standard Ozsváth–Szabó invariant in [F1]. The target total homology is one-dimensional, so nonzero image agrees with Hom's surjective-inclusion convention.

[F4] The $s$ in [F1] is Rasmussen's standard integer obtained from rational Lee homology with the convention $s=s_{\max}-1$ stated in the Statement. The external Theorem 1 in [F2] uses this normalization; no local Lee-map proof is used here.

[F5] [[def-smooth-and-topological-slice-genus]] defines $g_4^{\mathrm{sm}}$ by minimizing the genera of smooth connected oriented properly embedded surfaces in $B^4$ with boundary the knot.

[F6] **External input, authorized by the run-specific source boundary.** Hom, *A survey on Heegaard Floer homology and concordance*, §3.1, Theorem 3.1(1), printed p. 8, identifies the standard $\tau$ defined by the same normalized threshold as a knot-concordance homomorphism. The survey's coefficient convention is stated on printed p. 2. I read the threshold definition and theorem statement; I do not claim to reconstruct the cited proof.

## Proof

**Given:** Countable Choice, the proposed implication, and the Whitehead double in the Statement.

1.1 By [F1], the specified knot has $\tau=0$ and $s=2$. The smooth genus bound [F2] gives $2=|s|\le2g_4^{\mathrm{sm}}$. Since $g_4^{\mathrm{sm}}$ is a nonnegative integer, it is at least one. [A1, F1, F2, F3, F4, F5, F6, given, algebra]

2.1 A smoothly slice knot bounds a smooth properly embedded disk in the four-ball and has $g_4^{\mathrm{sm}}=0$. This contradicts step 1.1 for the specified knot, proving that the universal implication is false. [F5, step 1.1, algebra] ∎
