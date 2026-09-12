---
id: "fs-the-grothendieck-spectral-sequence-needs-only-left-exactness-of-f-and-g"
kind: "false-statement"
title: "Grothendieck needs only left exactness"
deps: ["thm-grothendieck-spectral-sequence", "lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite", "thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic", "thm-injective-modules-over-a-pid-are-exactly-divisible", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Stacks Project, Tag 015N"
      url: "https://stacks.math.columbia.edu/download/derived.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Additive left exactness of $F$ and $G$ alone guarantees a strongly convergent spectral sequence $R^pG(R^qF(A))\Longrightarrow R^{p+q}(GF)(A)$.

## Facts & Assumptions

**Given:** We refute the assertion over abelian groups; assume AC for the injective models below.

[F1] The Grothendieck theorem requires injective-image acyclicity; that hypothesis identifies the total target with the derived composite ([[thm-grothendieck-spectral-sequence]], [[lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite]]).

[F2] Supplied projective and injective Ext computations agree ([[thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic]]).

[F3] Under AC, divisible abelian groups are injective ([[thm-injective-modules-over-a-pid-are-exactly-divisible]]).

## Refutation

1.1 Set $F=G=\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,-)$ and $A=\mathbb Z$. Both functors are additive and left exact, since maps into a kernel are precisely maps killed by the next arrow. Evaluation at $1$ identifies $F(B)$ with $B[2]$, so $GF(B)=(B[2])[2]=B[2]=F(B)$ naturally. The complexes $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$ and $0\to\mathbb Z/2\to\mathbb Q/\mathbb Z\xrightarrow{2}\mathbb Q/\mathbb Z\to0$ are injective resolutions by F3: rational division proves divisibility, and the displayed kernels and images prove exactness. [F3, construct]

2.1 The rank-one free resolution $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0$ computes $\operatorname{Ext}^j(\mathbb Z/2,B)$ as the cohomology of $B\xrightarrow{2}B$, by F2. Hence $R^qF(\mathbb Z)$ is $\mathbb Z/2$ at $q=1$ and zero elsewhere, while $R^pG(\mathbb Z/2)$ is $\mathbb Z/2$ at $p=0,1$ and zero elsewhere. The proposed $E_2$ therefore has precisely two nonzero entries, at $(0,1)$ and $(1,1)$. Every $d_r$ for $r\ge2$ has zero source or target, so both survive. In total degree two the finite filtration would force $R^2(GF)(\mathbb Z)\cong\mathbb Z/2$. But $GF=F$ and the same length-one calculation gives $R^2F(\mathbb Z)=0$, a contradiction. [F2, step 1.1]

3.1 The missing hypothesis really fails: $I=\mathbb Q/\mathbb Z$ is injective, $F(I)=I[2]\cong\mathbb Z/2$, and $R^1G(F(I))\cong\mathbb Z/2\ne0$. This is exactly the acyclicity used in F1's target comparison. Thus the counterexample retains explicit resolution existence and isolates the failure of injective-image acyclicity. AC was used only to license divisibility as injectivity; the displayed finite Ext calculations and failure of the conclusion are algebraic. [F1, F2, F3, step 1.1, step 2.1] ∎
