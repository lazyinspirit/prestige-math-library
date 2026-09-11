---
id: ex-a-first-quadrant-five-term-exact-sequence
kind: example
title: A first quadrant five term exact sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["thm-five-term-exact-sequence-of-a-first-quadrant-cohomological-spectral-sequence", "thm-the-cohomological-filtered-complex-construction", "lem-abelian-group-model-for-spectral-sequence-computations", "lem-the-filtered-differential-induces-d-r-on-the-r-page"]
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

Over $k=\mathbb Z/2$, take $C^1=ka\oplus kb$, $C^2=kc$, zero in every other degree, and $da=0$, $db=c$. Give $a,b,c$ weights $1,0,2$ respectively and let $F^pC$ be spanned by vectors of weight at least $p$. Its cohomological spectral sequence is first quadrant and has the nonzero differential $d_2[b]=[c]$. Its five-term sequence is
$$0\longrightarrow k\xrightarrow{1}k\xrightarrow{0}k\xrightarrow{1}k\longrightarrow0,$$
with the two middle homology targets $H^1(C)=k[a]$ and $H^2(C)=0$ occupying the positions prescribed by the five-term theorem.

## Facts & Assumptions

[F1] [[thm-the-cohomological-filtered-complex-construction]] constructs the pages, degree $(r,1-r)$ and finite image-filtration abutment by index reversal.

[F2] [[lem-the-filtered-differential-induces-d-r-on-the-r-page]] computes a page differential by $[x]\mapsto[dx]$; reversing the two indices as in [F1] gives the same positive formula in cohomological notation.

[F3] [[thm-five-term-exact-sequence-of-a-first-quadrant-cohomological-spectral-sequence]] specifies the five-term maps under normalized finite abutment.

[F4] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies the binary coefficient group and finite coordinate quotient calculations.

## Verification

**Given:** The cochain complex and weight filtration above; scalars are binary.

1.1 The only nonzero differential sends the weight-zero vector $b$ to the weight-two vector $c$. Thus it preserves every decreasing piece, and $d^2=0$ because the next degree is zero. All filtration pieces are full for $p\le0$ and zero for $p\ge3$, so the finite construction applies. The $E_0$ terms are $k[a]$ at $(1,0)$, $k[b]$ at $(0,1)$ and $k[c]$ at $(2,0)$; all other positions vanish. This support is first quadrant. [F1, F4]

2.1 The differential raises weight by two on $b$ and vanishes on $a,c$, so its graded $d_0$ is zero. The $d_1$ of $[b]$ is its differential projected to weight one in degree two, which is zero, and all other $d_1$ maps are zero as well. Hence $E_2=E_1=E_0$ as the displayed graded groups. On page two, $db=c\in F^2C^2$ gives $d_2[b]=[c]$ by [F2]. Both classes generate their copies of $k$, so this map is identity under those identifications. The class $[a]$ has zero differential and receives none, and every later nonzero term is therefore just $k[a]$ at $(1,0)$. [F1, F2, F4, step 1.1]

2.2 Directly, the kernel of $d:C^1\to C^2$ is $ka$, there are no incoming boundaries in degree one, and $d(C^1)=kc=C^2$. Thus $H^1=k[a]$ and $H^2=0$. The class $[a]$ is represented in $F^1C$, so $F^1H^1=H^1$ and $F^2H^1=0$. This is the normalized finite abutment of [F1]; all degree-two target pieces are zero. [F1, F4, step 1.1]

3.1 In [F3], the map $E_2^{1,0}\to H^1$ sends $[a]$ to $[a]$ and is identity. The next map $H^1\to E_2^{0,1}$ factors through $H^1/F^1H^1=0$, so is zero. The transgression is the identity $[b]\mapsto[c]$ from step 2.1, and the last map has zero target $H^2$. Thus at the first $k$ the kernel is zero, at the second $k$ the zero-map kernel is all $k$ and equals the preceding image, at the third $k$ the identity-map kernel is zero and equals the preceding image, and at the fourth $k$ the next kernel is all $k$ and equals the transgression image. The terminal target is zero. This checks the printed sequence at every position, including its nonzero $d_2$ and both ends, with no AC. [F3, step 2.1, step 2.2] ∎
