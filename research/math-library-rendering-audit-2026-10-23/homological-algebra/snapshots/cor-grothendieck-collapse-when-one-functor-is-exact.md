---
id: "cor-grothendieck-collapse-when-one-functor-is-exact"
kind: "corollary"
title: "Grothendieck collapse when one functor is exact"
deps: ["thm-grothendieck-spectral-sequence", "prop-an-exact-functor-has-vanishing-positive-derived-functors", "def-collapse-at-a-page", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Stacks Project, Tags 015J-015N"
      url: "https://stacks.math.columbia.edu/download/derived.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Assume the Grothendieck hypotheses and supplied-data/choice conventions. If $F$ is exact, then $R^nG(F(A))\cong R^n(GF)(A)$. If $G$ is exact, then $R^n(GF)(A)\cong G(R^nF(A))$. Both are natural edge isomorphisms for every $n\ge0$. In the first alternative the hypothesis that $F$ sends injectives to $G$-acyclics is still required.

## Facts & Assumptions

**Given:** The Grothendieck setup and either stated exactness hypothesis.

[F1] The second page, finite target filtration and canonical edges are those of the Grothendieck theorem ([[thm-grothendieck-spectral-sequence]]).

[F2] Exact functors have zero positive relative derived objects ([[prop-an-exact-functor-has-vanishing-positive-derived-functors]]).

[F3] Collapse at $E^s$ means $d_r=0$ at every bidegree for every $r\ge s$, so $E^s$ identifies with the stable page ([[def-collapse-at-a-page]]).

## Proof

1.1 If $F$ is exact, F2 makes $R^qF(A)=0$ for $q>0$. Thus F1 is supported on $q=0$ and $E_2^{p,0}=R^pG(F(A))$. If $G$ is exact, F2 instead makes $R^pG(R^qF(A))=0$ for $p>0$, leaving $E_2^{0,q}=G(R^qF(A))$. In either alternative, a differential of bidegree $(r,1-r)$ with $r\ge2$ cannot have both source and target on that one axis. All such differentials vanish, and repeated page homology preserves this support, proving collapse in the sense of F3. [F1, F2, F3]

2.1 In degree $n$ the first alternative has only the quotient at $(n,0)$, so all preceding filtration quotients vanish and $F^nH^n=H^n$, with $F^{n+1}H^n=0$. Its lower edge is therefore the first claimed isomorphism. The second alternative has only $(0,n)$; all positive filtration pieces are zero, so its upper edge is the second claimed isomorphism. Naturality comes from the edge maps in F1. For $n=0$ these are the identification with $GF(A)$; if both functors are exact the positive targets are zero. No splitting or additional choice is used. [F1, step 1.1] ∎
