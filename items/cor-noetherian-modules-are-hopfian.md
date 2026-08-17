---
id: cor-noetherian-modules-are-hopfian
kind: corollary
title: "Every surjective endomorphism of a Noetherian module is injective"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-equivalent-characterizations-of-noetherian-modules, def-endomorphism-ring-of-a-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Noetherian Modules, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf"
pipeline_run: null
---

## Statement

Every surjective endomorphism of a Noetherian module is injective, hence an automorphism. See [[thm-equivalent-characterizations-of-noetherian-modules]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a left $R$-module $M$, the following are equivalent: every submodule is finitely generated; every ascending chain of submodules stabilizes; and every nonempty family of submodules has a maximal member. The implication from ACC to the maximal condition uses dependent choice; the other displayed implications are choice-free. ([[thm-equivalent-characterizations-of-noetherian-modules]]).

[L2] For a left $R$-module $M$, define $$\operatorname{End}_R(M):=\operatorname{Hom}_R(M,M).$$ Addition is pointwise and multiplication is composition, $(fg)(m):=f(g(m))$. The ring laws and the identity endomorphism are established in prop-endomorphisms-form-a-ring. ([[def-endomorphism-ring-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 For a surjective endomorphism $f$, the ascending chain $\ker f\subseteq\ker f^2\subseteq\cdots$ stabilizes. [L1, L2, given, algebra]

2.1 Choose $n$ with $\ker f^n=\ker f^{n+1}$. For $x\in\ker f$, surjectivity of $f^n$ gives $y$ with $f^n(y)=x$. Then $f^{n+1}(y)=0$, so $y\in\ker f^{n+1}=\ker f^n$ and $x=f^n(y)=0$. [step 1.1, given, algebra]

3.1 The zero module is admitted: its only endomorphism is the identity, which is injective, so the conclusion holds there and the argument of step 2.1 is not vacuous by accident. This proves the stated claim. [step 2.1, given, algebra] ∎
