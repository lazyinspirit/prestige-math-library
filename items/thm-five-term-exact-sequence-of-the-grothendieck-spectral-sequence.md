---
id: "thm-five-term-exact-sequence-of-the-grothendieck-spectral-sequence"
kind: "theorem"
title: "Five-term exact sequence of the Grothendieck spectral sequence"
deps: ["thm-grothendieck-spectral-sequence", "thm-five-term-exact-sequence-of-a-first-quadrant-cohomological-spectral-sequence"]
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
    - title: "Weibel, Theorem 5.8.3, low-degree sequence, printed p.151"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Under the hypotheses and choice/data conventions of the Grothendieck spectral sequence there is a natural exact sequence
$$0\to R^1G(F(A))\to R^1(GF)(A)\to G(R^1F(A))\xrightarrow{d_2^{0,1}}R^2G(F(A))\to R^2(GF)(A).$$
The unnamed arrows are the canonical edges. No surjectivity onto the last term is asserted.

## Facts & Assumptions

**Given:** The hypotheses of the Grothendieck theorem.

[F1] The second page is $R^pG(R^qF(A))$, the target is $R^{p+q}(GF)(A)$ and its normalized filtration is finite ([[thm-grothendieck-spectral-sequence]]).

[F2] A first-quadrant cohomological sequence with such finite abutment has the five-term exact sequence with the middle $d_2$ and the extremal edge arrows ([[thm-five-term-exact-sequence-of-a-first-quadrant-cohomological-spectral-sequence]]).

## Proof

1.1 In F2 substitute $H^n=R^n(GF)(A)$ and the page of F1. Left exactness gives $R^0F(A)=F(A)$ and $R^0G=G$. Thus the three page entries $(1,0),(0,1),(2,0)$ are respectively $R^1G(F(A))$, $G(R^1F(A))$ and $R^2G(F(A))$. The only relevant later differential is $d_2^{0,1}$ with target $(2,0)$. [F1, F2]

2.1 After the substitutions of step 1.1, the displayed sequence is exactly the five-term exact sequence exported by F2, and F2 identifies the arrows adjacent to the two abutment terms as the corresponding edges. Because it is applied to the filtered sequence of F1, these are the Grothendieck spectral sequence's canonical edges. The spectral-sequence maps supplied by F1 commute with $d_2$ and with those edge maps, proving naturality. If $d_2=0$ or a displayed object is zero, F2's same exact sequence still applies. Its Statement has no outgoing arrow from $H^2$, so no final epimorphism is claimed. [F1, F2, step 1.1] ∎
