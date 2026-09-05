---
id: lem-direct-image-is-sheaf
kind: lemma
title: "Direct image preserves sheaves and objectwise algebraic structure"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-direct-image-sheaf, def-presheaf-of-groups-rings-modules, def-sheaf-on-topological-space]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 6.21.1"
      url: "https://stacks.math.columbia.edu/tag/008C"
    - title: "Ravi Vakil, The Rising Sea, Section 2.2.H"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Let $f:X\to Y$ be a continuous map.

1. If $\mathcal F$ is a sheaf on $X$, then $f_*\mathcal F$ is a sheaf on $Y$.
2. If $\mathcal F$ is a sheaf of groups, rings, or modules on $X$, then
   $f_*\mathcal F$ is a sheaf of the same kind on $Y$.

## Facts & Assumptions

**Given:** A continuous map $f:X\to Y$.

[F1] The direct image is defined by
$(f_*\mathcal F)(V)=\mathcal F(f^{-1}(V))$
([[def-direct-image-sheaf]]).

[L1] A sheaf is exactly a presheaf whose compatible local sections glue
uniquely on every open cover ([[def-sheaf-on-topological-space]]).

[L2] A sheaf of groups, rings, or modules is a set-valued sheaf together with
objectwise algebraic operations preserved by restriction
([[def-presheaf-of-groups-rings-modules]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal F$ be a sheaf on $X$, let $V=\bigcup_i V_i$ be an open cover in $Y$, and let $s_i\in (f_*\mathcal F)(V_i)=\mathcal F(f^{-1}(V_i))$ be compatible on overlaps. By [F1], the sets $f^{-1}(V_i)$ cover $f^{-1}(V)$, so [L1] gives a unique section $s\in\mathcal F(f^{-1}(V))$ restricting to every $s_i$. This section is exactly an element of $(f_*\mathcal F)(V)$, so $f_*\mathcal F$ is a sheaf. [F1, L1, given, construct]

2.1 If $\mathcal F$ is a sheaf of groups, rings, or modules, then each section set of $f_*\mathcal F$ is literally the corresponding section set of $\mathcal F$ over a preimage open set. Hence the algebraic operations are inherited objectwise, and the restriction maps are the same homomorphisms as before. By [L2] and step 1.1, $f_*\mathcal F$ is a sheaf of the same kind. [F1, L2, step 1.1]

3.1 Steps 1.1 and 2.1 prove both assertions. [step 1.1, step 2.1] ∎
