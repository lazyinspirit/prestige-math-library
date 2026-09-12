---
id: thm-spectral-sequence-comparison-theorem
kind: theorem
title: Spectral sequence comparison theorem
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-strong-convergence-of-a-spectral-sequence", "lem-finite-and-complete-filtered-isomorphism-lifting", "def-morphism-of-spectral-sequences", "def-homology-object-of-a-chain-complex"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

Let $f:E\to\widetilde E$ be a morphism of spectral sequences that is an isomorphism at every bidegree on one page $s$. Suppose the two sequences strongly converge in this page's convention to filtered families $H_n$ and $\widetilde H_n$, and let $h_n:H_n\to\widetilde H_n$ be filtered maps compatible with the specified abutment identifications. Then every $\operatorname{gr}_ph_n$ is an isomorphism. Each $h_n$ is an isomorphism of filtered objects if both degree-$n$ filtrations are finite in an abelian category, or if the targets are modules with exhaustive separated complete filtrations. An abstract page isomorphism without compatible target maps supplies no such target conclusion.

## Facts & Assumptions

[F1] [[def-morphism-of-spectral-sequences]] requires differential commutation and $f_{r+1}\alpha_r=\widetilde\alpha_rH(f_r)$; the abutment maps are additional data.

[F2] [[def-homology-object-of-a-chain-complex]] takes homology as cycles modulo boundaries.

[F3] [[def-strong-convergence-of-a-spectral-sequence]] provides two-sided pointwise stationarity, specified weak-convergence identifications and the stated target-filtration conditions.

[F4] [[lem-finite-and-complete-filtered-isomorphism-lifting]] upgrades a graded isomorphism to a filtered isomorphism under either of the two target hypotheses, without AC.

## Proof

**Given:** $f$, its page $s$, and the compatible filtered maps $h_n$.

1.1 The inverse of the page map $f_s$ commutes with differentials: multiply $\widetilde d f_s=f_s d$ by the componentwise inverses at the source and target to obtain $d f_s^{-1}=f_s^{-1}\widetilde d$. Hence both maps preserve cycle kernels and incoming boundary images. They induce mutually inverse homology quotient maps. The transition identity gives $f_{s+1}=\widetilde\alpha_sH(f_s)\alpha_s^{-1}$, an isomorphism. Induction proves $f_r$ is an isomorphism at every bidegree for every $r\ge s$. [F1, F2]

2.1 Fix $(p,q)$. Choose an integer $r\ge s$ beyond the two stationarity bounds for this position in both sequences. Their specified transitions canonically identify these terms with their limiting terms. By step 1.1 the resulting limiting map $f_\infty:E^\infty_{p,q}\to\widetilde E^\infty_{p,q}$ is an isomorphism. Compatibility of $h_{p+q}$ with the abutment data says that its graded map is this map conjugated by the two specified graded identifications. Thus $\operatorname{gr}_ph_{p+q}$ is an isomorphism. Only finitely many bounds were compared at each fixed position; there is no uniform-collapse hypothesis. [F1, F3, step 1.1]

3.1 Fix $n$. Step 2.1 proves that the filtered map $h_n$ induces an isomorphism on every graded piece. Apply [F4] to its finite filtrations in the abelian-category case, or to its exhaustive separated complete module filtrations in the other case. It follows that $h_n$ is invertible with filtered inverse. This uses strong convergence as supplied data, and does not invoke any theorem asserting convergence of an unbounded filtered complex. Zero page terms, a zero target, and a single filtration jump are included in [F4]. No AC is introduced. Without the compatibility in step 2.1, the page map would say nothing about the graded map of the specified $h_n$, so that hypothesis cannot be omitted from this argument. [F3, F4, step 2.1] ∎
