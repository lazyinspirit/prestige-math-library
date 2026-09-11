---
id: thm-a-first-quadrant-filtered-complex-spectral-sequence-converges-to-filtered-homology
kind: theorem
title: A first quadrant filtered complex spectral sequence converges to filtered homology
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-strong-convergence-of-a-spectral-sequence", "thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology", "def-induced-filtration-on-homology"]
proof_strategy: direct
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
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

An exhaustive first-quadrant filtered chain complex in an abelian category, with finite filtration on each chain object, has a pointwise stationary spectral sequence strongly converging to its homology with the induced finite image filtration. No uniform bound over all chain degrees is required. In the normalized case $F_{-1}C=0$ and $F_nC_n=C_n$, one has $F_{-1}H_n(C)=0$ and $F_nH_n(C)=H_n(C)$.

## Facts & Assumptions

[F1] [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]] proves pointwise stabilization, natural actual-cycle graded identifications and finiteness of the homology image filtration for a degreewise finite filtration.

[F2] [[def-induced-filtration-on-homology]] defines that filtration as the image of $H_n(F_pC)\to H_n(C)$.

[F3] [[def-strong-convergence-of-a-spectral-sequence]] requires the weak identifications, two-sided regularity, exhaustiveness, separatedness and completeness; it specifies the inverse-system orientation and proves the constant-tail limit description.

## Proof

**Given:** Such a filtered complex $(C,d,F)$. Fix a degree $n$.

1.1 Choose finite endpoints $a_j,b_j$ in each of the three degrees $j=n-1,n,n+1$. The hypothesis of [F1] holds degreewise. Its proof identifies the stationary page with the quotient of $F_pC_n\cap\ker d_n$ by $(F_{p-1}C_n\cap\ker d_n)+(F_pC_n\cap\operatorname{im}d_{n+1})$: the lower endpoint in degree $n-1$ makes approximate cycles actual cycles, and the upper endpoint in degree $n+1$ includes all actual boundaries. Thus its graded isomorphisms have exactly the actual-cycle meaning required for weak convergence, and are natural in filtered chain maps. The same theorem gives eventual vanishing of both incident differentials, hence two-sided regularity. [F1, F3]

1.2 The image filtration satisfies $F_pH_n(C)=0$ for $p\le a_n$, since there are no degree-$n$ cycles in $F_pC$. It satisfies $F_pH_n(C)=H_n(C)$ for $p\ge b_n$, since every cycle of $C_n$ is then a cycle in $F_pC$. Images, not the possibly larger domain homology groups, are being used. The filtration is therefore finite, and its meet is zero and its join is $H_n(C)$. This proves separatedness and exhaustiveness, including when $H_n(C)=0$. [F1, F2]

2.1 For $p\le a_n$ the quotients $H_n(C)/F_pH_n(C)$ are canonically $H_n(C)$ and their transitions are identities. A compatible cone into the full inverse system is uniquely determined by its component at $a_n$: compatibility fixes every smaller-index component and every larger-index component is its quotient. Consequently $H_n(C)$ with the quotient maps satisfies the limit universal property, and the canonical completion map is an isomorphism. All the conditions in [F3] now hold. No general existence of infinite limits or choice of a family of representatives is required. [F3, step 1.1, step 1.2]

3.1 Under the normalized hypotheses, the zero subcomplex $F_{-1}C$ has zero homology, giving $F_{-1}H_n(C)=0$. Every degree-$n$ cycle lies in $F_nC_n=C_n$, so the inclusion $F_nC\to C$ is surjective on degree-$n$ homology, giving the other endpoint. The statements also hold for zero chain degrees, repeated filtration terms and the boundary axis of the first quadrant. The proof above fixed $n$ and used finitely many integer bounds, so it introduces no uniform-degree bound or AC assumption. [F2, step 1.2] ∎

## Source notes

[Stacks, Lemma 12.24.11](https://stacks.math.columbia.edu/tag/012K), with increasing homological indices. The local bounded supplier gives the full numerator proof; the constant-tail argument supplies completeness in the stated strong-convergence convention.
