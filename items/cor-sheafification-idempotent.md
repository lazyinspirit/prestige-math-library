---
id: cor-sheafification-idempotent
kind: corollary
title: "Sheafification is idempotent"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sheafification, thm-sheafification-universal-property]
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
    - title: "The Stacks Project, Sheaves on Spaces, Section 17"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Statement

For every presheaf $\mathcal F$ on a topological space $X$, the canonical map
$$\eta_{a\mathcal F}:a\mathcal F\longrightarrow a(a\mathcal F)$$
is an isomorphism. Equivalently, sheafification is idempotent:
$$a(a\mathcal F)\cong a\mathcal F.$$

## Facts & Assumptions

**Given:** A presheaf $\mathcal F$ on $X$.

[F1] The object $a\mathcal F$ is the sheafification of $\mathcal F$
([[def-sheafification]]).

[L1] Any map from a presheaf to a sheaf factors uniquely through its
sheafification ([[thm-sheafification-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 Since $a\mathcal F$ is already a sheaf by [F1], apply [L1] to the identity map $1_{a\mathcal F}:a\mathcal F\to a\mathcal F$. There is a unique morphism $$\varepsilon:a(a\mathcal F)\longrightarrow a\mathcal F$$ such that $$\varepsilon\circ\eta_{a\mathcal F}=1_{a\mathcal F}.$$ [F1, L1]

2.1 Apply [L1] again to the map $\eta_{a\mathcal F}:a\mathcal F\to a(a\mathcal F)$, whose target is also a sheaf. The identity map on $a(a\mathcal F)$ is one factorization through $\eta_{a\mathcal F}$. The composite $\eta_{a\mathcal F}\circ\varepsilon$ is another, because step 1.1 gives $(\eta_{a\mathcal F}\circ\varepsilon)\circ\eta_{a\mathcal F} =\eta_{a\mathcal F}$. By uniqueness in [L1], $\eta_{a\mathcal F}\circ\varepsilon=1_{a(a\mathcal F)}$. [L1, step 1.1]

3.1 Steps 1.1 and 2.1 show that $\varepsilon$ and $\eta_{a\mathcal F}$ are two-sided inverses. Therefore $\eta_{a\mathcal F}$ is an isomorphism, so $a(a\mathcal F)\cong a\mathcal F$. [step 1.1, step 2.1] ∎
