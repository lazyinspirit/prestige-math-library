---
id: ex-tgr-two-first-law-calibrations
kind: example
title: Two entropy-temperature calibrations preserve the same energy differential
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - lem-tgr-first-law-calibration-freedom
dependency_roles:
  lem-tgr-first-law-calibration-freedom: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Pietro Benetti Genolini, Introduction to black hole thermodynamics, 78-page lecture notes, §§1.3 and 2.1, arXiv:2512.24929v1"
      url: https://arxiv.org/html/2512.24929v1
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6, §§2–3, arXiv:gr-qc/9912119v2"
      url: https://arxiv.org/html/gr-qc/9912119v2
verification:
  precheck: pass
---

## Example

Use the abstract state family $X=(0,\infty)$ with coordinate $r$, and define $E(r)=r$, $A(r)=r$, $\kappa(r)=1$, and $C=1$. These are formal real-valued functions with no physical units assigned. Then $dE=C\kappa\,dA=dr$. The choices $b=1$ and $b=2$, with offset $s_*=0$, give $(T_1,S_{1,0})=(1,r)$ and $(T_2,S_{2,0})=(2,r/2)$.

## Facts & Assumptions

**Given:** The stated smooth state family and the calibration-freedom lemma.

[A1] On $X=(0,\infty)$, $E(r)=A(r)=r$, $\kappa(r)=1$, and $C=1$.

[F1] [[lem-tgr-first-law-calibration-freedom]]: For every constant $b>0$ and offset $s_*\in\mathbb R$, set $T_b:=b\kappa$ and $S_{b,s_*}:=(C/b)A+s_*$. Then $T_b dS_{b,s_*}=dE$. Distinct positive $b$ give distinct functions $T_b$, and changing $s_*$ changes $S_{b,s_*}$ without changing its differential.

## Verification

**Given:** [A1] and [F1].

1.1 The family $X=(0,\infty)$ is a nonempty connected smooth manifold, the displayed functions are smooth, $C=1>0$, and $\kappa(r)=1>0$. Direct differentiation gives $dE=dr=C\kappa\,dA$, so the lemma's hypotheses hold. [given, A1, algebra]

2.1 Apply [F1] with $(b,s_*)=(1,0)$ and $(2,0)$. The resulting functions are $(T_1,S_{1,0})=(1,r)$ and $(T_2,S_{2,0})=(2,r/2)$; hence $T_1 dS_{1,0}=1\cdot dr=dr$ and $T_2 dS_{2,0}=2\cdot(1/2)dr=dr=dE$, although the temperatures and entropy gradients differ. [F1, A1, step 1.1, algebra] ∎
