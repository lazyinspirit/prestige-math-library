---
id: thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence
kind: theorem
title: Five term exact sequence of a first quadrant homological spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-homological-spectral-sequence", "def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence", "lem-spectral-sequence-subquotient-and-local-lifting-calculus"]
proof_strategy: direct
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

Let $E^r_{p,q}$ be a homological spectral sequence in an abelian category, first quadrant from page $2$, with specified finite abutment to $H_n$ and increasing filtration normalized by $F_{-1}H_n=0$, $F_nH_n=H_n$ for $n\ge0$. There is an exact sequence
$$H_2\longrightarrow E^2_{2,0}\xrightarrow{d^2}E^2_{0,1}\longrightarrow H_1\longrightarrow E^2_{1,0}\longrightarrow0.$$
The maps adjacent to homology are the edge maps. No initial injectivity of $H_2\to E^2_{2,0}$ is asserted.

## Facts & Assumptions

[F1] [[def-homological-spectral-sequence]] gives degree $(-r,r-1)$ and homology transitions.

[F2] [[def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence]] specifies the homological edge maps through normalized extreme filtration pieces.

[F3] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] gives canonical kernel, image and quotient comparisons.

## Proof

**Given:** The sequence and normalized abutment in the statement. All page indices below satisfy $r\ge2$; terms outside the first quadrant stay zero.

1.1 At $(1,0)$ the outgoing target $(1-r,r-1)$ and incoming source $(1+r,1-r)$ are zero. Thus $E^2_{1,0}$ is canonically $E^\infty_{1,0}=H_1/F_0H_1$, and the edge $H_1\to E^2_{1,0}$ is the epic quotient map. [F1, F2]

1.2 At $(0,1)$ all outgoing targets $(-r,r)$ vanish. Its incoming source is $(r,2-r)$, which lies in the quadrant only for $r=2$. Therefore $E^\infty_{0,1}=\operatorname{coker}(d^2:E^2_{2,0}\to E^2_{0,1})$, identified by abutment with $F_0H_1/F_{-1}H_1=F_0H_1$. The edge $E^2_{0,1}\to H_1$ is the cokernel projection followed by the filtration inclusion. [F1, F2, F3]

1.3 At $(2,0)$ all incoming sources $(2+r,1-r)$ vanish. Its outgoing target $(2-r,r-1)$ lies in the quadrant only at $r=2$. Hence $E^\infty_{2,0}=\ker d^2$, identified with $F_2H_2/F_1H_2=H_2/F_1H_2$. The edge $H_2\to E^2_{2,0}$ is the quotient onto that kernel followed by its monic inclusion. [F1, F2, F3]

2.1 Step 1.3 proves that the image at $E^2_{2,0}$ is $\ker d^2$. Step 1.2 proves that the next kernel at $E^2_{0,1}$ is $\operatorname{im}d^2$, and its image in $H_1$ is $F_0H_1$. This is the kernel of the quotient in step 1.1, which is onto, proving exactness also at $E^2_{1,0}$ before the terminal zero. These are precisely all claimed positions. There is no claim about a kernel at the initial $H_2$ without a preceding map. Zero terms and zero $d^2$ give the same kernel and cokernel factorizations; the degree-one normalized endpoints are used explicitly. All maps are canonical from the specified data, without splittings or AC. [F3, step 1.1, step 1.2, step 1.3] ∎
