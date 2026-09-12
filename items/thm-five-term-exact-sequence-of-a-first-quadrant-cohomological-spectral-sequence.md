---
id: thm-five-term-exact-sequence-of-a-first-quadrant-cohomological-spectral-sequence
kind: theorem
title: Five term exact sequence of a first quadrant cohomological spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-cohomological-spectral-sequence", "def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence", "lem-spectral-sequence-subquotient-and-local-lifting-calculus"]
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

Let $E_r^{p,q}$ be a cohomological spectral sequence in an abelian category, first quadrant from page $2$, with specified finite abutment to $H^n$ and decreasing filtration normalized by $F^0H^n=H^n$, $F^{n+1}H^n=0$ for $n\ge0$. There is an exact sequence
$$0\longrightarrow E_2^{1,0}\longrightarrow H^1\longrightarrow E_2^{0,1}\xrightarrow{d_2}E_2^{2,0}\longrightarrow H^2,$$
whose maps adjacent to $H^1,H^2$ are the corresponding edge maps. No terminal surjectivity onto $H^2$ is asserted.

## Facts & Assumptions

[F1] [[def-cohomological-spectral-sequence]] gives degree $(r,1-r)$ and the specified homology transitions.

[F2] [[def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence]] specifies the cohomological edge maps through the finite filtration's extreme graded pieces.

[F3] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] gives canonical kernel, image and quotient comparisons in an abelian category.

## Proof

**Given:** The sequence and normalized abutment in the statement. All support claims refer to pages $r\ge2$; a zero term remains zero under a homology transition.

1.1 At $(1,0)$ the outgoing target $(1+r,1-r)$ has negative second coordinate and the incoming source $(1-r,r-1)$ has negative first coordinate. Both are zero. Thus $E_2^{1,0}$ is canonically the stable term $E_\infty^{1,0}=F^1H^1/F^2H^1=F^1H^1$. Its edge map is the monic filtration inclusion into $H^1$. [F1, F2]

1.2 At $(0,1)$ every incoming source $(-r,r)$ is zero. The outgoing target is $(r,2-r)$, which is in the first quadrant only for $r=2$. Consequently the transition identifies $E_3^{0,1}$ with $\ker(d_2:E_2^{0,1}\to E_2^{2,0})$, and all later transitions there are stationary. By abutment this kernel is $E_\infty^{0,1}=H^1/F^1H^1$. Therefore the edge $H^1\to E_2^{0,1}$ is the quotient onto this kernel followed by its inclusion. [F1, F2, F3]

1.3 At $(2,0)$ all outgoing targets $(2+r,1-r)$ are zero. The incoming source $(2-r,r-1)$ is in the quadrant only for $r=2$, when it is $(0,1)$. Hence $E_\infty^{2,0}=\operatorname{coker}d_2$. Abutment identifies this with $F^2H^2/F^3H^2=F^2H^2$. Its edge into $H^2$ is the cokernel projection followed by that filtration inclusion. [F1, F2, F3]

2.1 Step 1.1 proves exactness at $E_2^{1,0}$ including the initial zero. The kernel at $H^1$ in step 1.2 is $F^1H^1$, the preceding image. Its image at $E_2^{0,1}$ is exactly $\ker d_2$. Step 1.3 says that the kernel of the next edge at $E_2^{2,0}$ is exactly $\operatorname{im}d_2$, because its second factor is monic. These are every asserted exactness position; $H^2$ has no outgoing arrow in the statement. The formulas remain valid when any term or $d_2$ is zero; when $d_2=0$, its kernel and cokernel are their whole source and target. All identifications use specified transitions and abutment maps, not chosen splittings, and require no AC. [F3, step 1.1, step 1.2, step 1.3] ∎
