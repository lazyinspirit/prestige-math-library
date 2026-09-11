---
id: ex-acyclic-assembly-with-exact-columns
kind: example
title: Acyclic assembly with exact columns
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["thm-acyclic-assembly-lemma-for-a-first-quadrant-double-complex", "lem-abelian-group-model-for-spectral-sequence-computations", "def-direct-sum-total-complex-of-a-double-complex"]
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

## Example

Let $k=\mathbb Z/2$, put $C_{p,q}=k$ for $p,q\in\{0,1\}$ and zero elsewhere, set both vertical maps $C_{p,1}\to C_{p,0}$ equal to identity, and set all horizontal maps zero. Every column and the total complex are acyclic.

## Facts & Assumptions

[F1] [[thm-acyclic-assembly-lemma-for-a-first-quadrant-double-complex]] makes the total complex acyclic when every column of a first-quadrant double complex is acyclic.

[F2] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies the binary group and coordinate homology quotients. [[def-direct-sum-total-complex-of-a-double-complex]] uses differential $h+v$.

## Verification

**Given:** The four components and maps in the example. Both vertical squares are zero because all components outside vertical indices zero and one vanish; mixed composites vanish because every horizontal map is zero.

1.1 Each nonzero column is $k\xrightarrow{1}k$ in degrees one and zero. Its degree-one kernel and degree-zero cokernel are zero, and all other columns and homology degrees are zero. Thus every column is acyclic, including its degree-zero homology. The first-quadrant support satisfies [F1], so there is no surviving edge complex and assembly gives an acyclic total complex. [F1, F2]

2.1 For a direct check order total degree one as $C_{1,0}\oplus C_{0,1}$. The total complex is $k\xrightarrow{x\mapsto(x,0)}k^2\xrightarrow{(u,v)\mapsto v}k$ in degrees $2,1,0$. The first map is injective, the second is surjective, and the kernel of the second is $k\oplus0$, exactly the first image. Hence $H_2=H_1=H_0=0$, with all other degrees already zero. This checks the two endpoints and the middle image-kernel equality independently of the assembly invocation, using explicit maps and no AC. [F2] ∎
