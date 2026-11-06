---
id: ex-gts-weak-phase-ordinary-low-kernel
kind: example
title: "Gts weak phase ordinary low kernel"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli-examples
dependency_level: 1
deps:
  - def-gts-weak-phase-framing-moduli-datum
dependency_roles:
  def-gts-weak-phase-framing-moduli-datum: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Y. Bojko, Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications"
      url: https://arxiv.org/pdf/2507.05922v3
      locator: "Assumptions 5.1 and 5.10; Definitions 5.3 and 5.4; §6.3; §7.2. Diagnostic examples do not claim the full hypotheses."
    - title: "Bojko, Kuhn, Liu, and Thimm, Wall-crossing for equivariant DT4 invariants"
      url: https://arxiv.org/html/2608.23515v1
      locator: "§§3.2 and 4.2; exact conditional hypotheses and scope limits."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Example

Surjective-arrow weak maximum phase: ordinary intersections/kernels can lie LOW although ambient objects and image are critical. Distinguish diagnostic from a model satisfying all 5.10.

## Example references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10; Definition 5.3; §6.2; §6.3; Assumption 6.9; Remark 6.10; Example 6.11; Theorem 6.12; Lemma 6.13; Equation (6.14); §7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Setup


Let $Q$ be the one-arrow quiver $b\to a$. A representation is a map $f:B\to A$ of finite-dimensional complex vector spaces. Use the source-style filtration $0\subset\mathbb Z e_a\subset\mathbb Z e_a\oplus\mathbb Z e_b$, with $Z_1(e_a)=i$ and $Z_2(e_b)=-1$. It gives phase $\phi(B,A)=1$ for $B\ne0$ and $1/2$ for $B=0$. Since source dimensions add in exact sequences, the phase satisfies weak see-saw as the maximum of the two phases. Use the semistability convention $\phi(U)\le\phi(E/U)$ for every proper nonzero subrepresentation. Every representation has an HN filtration: $(B,\operatorname{im}f)$ is the phase-one subobject and its quotient $(0,A/\operatorname{im}f)$ has phase $1/2$.

Set $E=(\mathbb C^2\xrightarrow{I}\mathbb C^2)$ and $F=(\mathbb C^3\xrightarrow{\pi}\mathbb C^2)$ with $\pi(k,w_1,w_2)=(w_1,w_2)$. Define $h_B(e_1)=k$, $h_B(e_2)=w_1$ and $h_A(e_1)=0$, $h_A(e_2)=w_1$. The commuting square is

```tikzcd
B_E \arrow[r,"f_E"] \arrow[d,"h_B"'] & A_E \arrow[d,"h_A"] \\
B_F \arrow[r,"f_F"'] & A_F
```

The diagram records the actual linear maps and the equality $h_Af_E=f_Fh_B$; the proof below uses the matrices, not the drawing. This is a diagnostic weak-phase example only; no claim is made that its CY4 master satisfies all original 5.10 hypotheses.

## Facts & Assumptions

**Given:** the exact data and all unresolved suppliers retain their stated status.

[F1] [[def-gts-weak-phase-framing-moduli-datum]]: exact planned interface: “Specify original weak stability, exact phase category, actual ordinary-vs-admissible maps, original concentration opens and exact Fr_k, common-line framing, even emergent class domain, torus linearizations and orientations. No sum closure, cofinal-index availability, or abelian phase category is implicit.” The link records scope, not proof acceptance.

## Verification

1.1 If $f:B\twoheadrightarrow A$ is surjective and $B\ne0$, then $(B,A,f)$ has phase $1$ and is semistable. For a proper subrepresentation $(B',A')$, if $B'=0$ its phase is $1/2$ and the quotient has nonzero $B/B'$ and phase $1$. If $B'\ne0$, its phase is $1$; if $B'=B$, surjectivity forces $A'=A$, so a proper subobject must instead have $B/B'\ne0$, whose quotient phase is $1$. Each case satisfies $\phi(B',A')\le\phi((B,A)/(B',A'))$. [given, F1, algebra]

2.1 Both $E$ and $F$ are surjective-arrow objects, so 1.1 makes them phase-$1$ semistable. The morphism commutes since $f_Fh_B(e_1)=0=h_Af_E(e_1)$ and $f_Fh_B(e_2)=w_1=h_Af_E(e_2)$. Its image has $B$-space $\langle k,w_1\rangle$, $A$-space $\langle w_1\rangle$, and a surjective induced arrow; hence its image is also phase-$1$ semistable by 1.1. [given, F1, step 1.1, algebra]

3.1 The map $h_B$ is injective and $\ker h_A=\mathbb C e_1$. Therefore the ordinary kernel has $B=0$ and $A=\mathbb C e_1$, so its phase is $1/2$. Thus the ambient objects and image are critical while the ordinary kernel is low phase. [given, F1, step 2.1, algebra]

4.1 This calculation proves that weak-phase semistability alone does not place ordinary kernels in the exact phase category. It is diagnostic and does not verify the original CY4 obstruction, properness, or 5.10 hypotheses. [given, F1, step 3.1, algebra] ∎

