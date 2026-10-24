---
id: thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square
kind: theorem
title: "The Eilenberg–Moore forgetful functor creates every colimit in the base that the monad and its square preserve"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-eilenberg-moore-category, def-preservation-reflection-creation-continuity-and-cocontinuity, def-limit-and-colimit-of-a-diagram]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Theorem 5.6.5(ii)"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Lemma 6.5.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $D:\mathcal J\to\mathcal C^T$ be a diagram of algebras whose underlying diagram has a colimit $(Q,i_j)$ in $\mathcal C$. If both $T$ and $T^2$ preserve this colimit, then there is a unique algebra structure on $Q$ making every $i_j$ an algebra homomorphism, and the resulting cocone is a colimit in $\mathcal C^T$. Thus $U^T$ creates every such colimit.

## Facts & Assumptions

**Given:** The diagram, its structure maps $a_j$, the base colimit $(Q,i_j)$, and preservation of that colimit by $T$ and $T^2$.

[L1] Creation of colimits is the cocone dual of creation of limits ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]), with colimits as in [[def-limit-and-colimit-of-a-diagram]].

## Proof

**Proof technique:** direct.

1.1 Since $T$ preserves the colimit, the maps $i_j\circ a_j:TU^TDj\to Q$ induce a unique $a:TQ\to Q$ satisfying $a\circ T(i_j)=i_j\circ a_j$ for every $j$. [given, L1]

2.1 Precomposition with every $i_j$ proves $a\circ\eta_Q=1_Q$. Precomposition with every $T^2(i_j)$ proves $a\circ T(a)=a\circ\mu_Q$; these families are jointly epic because $T$ and $T^2$ preserve the colimit, so $(Q,a)$ is an algebra and every $i_j$ is an algebra homomorphism. [step 1.1, given]

3.1 Any algebra cocone has a unique underlying mediating arrow $u:Q\to X$; precomposition with every $T(i_j)$ shows $u\circ a=x\circ T(u)$, so $u$ is automatically an algebra homomorphism. This proves the lifted universal property and the conditional creation claim. [step 1.1, step 2.1] ∎
