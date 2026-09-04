---
id: cex-presheaf-bounded-continuous-functions-not-sheaf
kind: counterexample
title: "Bounded continuous functions need not form a sheaf"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-presheaf-on-topological-space, def-sheaf-on-topological-space]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Example 7.6"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Statement refuted

The assignment
$$U\longmapsto C^0_b(U,\mathbb R):=\{f:U\to\mathbb R\text{ continuous and bounded}\}$$
with the usual restriction maps is a sheaf on $\mathbb R$.

## Facts & Assumptions

**Given:** The presheaf $C^0_b(-,\mathbb R)$ on $\mathbb R$.

[F1] Restriction of a bounded continuous function is again bounded and
continuous, so this is a presheaf ([[def-presheaf-on-topological-space]]).

[L1] A sheaf must glue every compatible local family to a global section
([[def-sheaf-on-topological-space]]).

## Counterexample

**Proof technique:** direct.

1.1 For each integer $n\ge1$, let $U_n:=(-n,n)$ and let $s_n:U_n\to\mathbb R$ be the identity function $s_n(x)=x$. Each $s_n$ lies in $C^0_b(U_n,\mathbb R)$ because $U_n$ is bounded. [F1, given, construct]

2.1 If $m\le n$, then $s_n|_{U_m}=s_m$, so the family $(s_n)$ is compatible on the open cover $\mathbb R=\bigcup_{n\ge1}U_n$. [step 1.1, given]

3.1 Any glued section on $\mathbb R$ would have to equal the identity function $x\mapsto x$, because it agrees with each $s_n$ on $U_n$. But $x\mapsto x$ is not bounded on $\mathbb R$, so it does not lie in $C^0_b(\mathbb R,\mathbb R)$. This violates the gluing requirement in [L1]. Therefore the stated presheaf is not a sheaf. [L1, step 2.1] ∎
