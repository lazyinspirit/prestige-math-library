---
id: thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits
kind: theorem
title: "The Eilenberg–Moore forgetful functor strictly creates every limit that exists in the base"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-eilenberg-moore-category, def-preservation-reflection-creation-continuity-and-cocontinuity, def-limit-and-colimit-of-a-diagram]
aliases: []
landmark: true
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Theorem 5.6.5(i)"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Theorem 6.5.1"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

For every monad $T$ on $\mathcal C$, the forgetful functor $U^T:\mathcal C^T\to\mathcal C$ strictly creates every limit that exists in $\mathcal C$. No preservation hypothesis on $T$ is required.

## Facts & Assumptions

**Given:** A diagram $D:\mathcal J\to\mathcal C^T$ with algebra structures $a_j:TU^TDj\to U^TDj$, and a limiting cone $p_j:L\to U^TDj$ in $\mathcal C$.

[L1] Strict creation requires a unique lifted limiting cone with exactly the supplied apex and legs ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L2] A limit admits a unique mediating arrow from every cone ([[def-limit-and-colimit-of-a-diagram]]).

## Proof

**Proof technique:** direct.

1.1 The maps $a_j\circ T(p_j):TL\to U^TDj$ form a cone because every arrow of $D$ is an algebra homomorphism. By [L2] there is a unique $\ell:TL\to L$ with $p_j\circ\ell=a_j\circ T(p_j)$ for every $j$. [L1, L2]

2.1 After composition with every $p_j$, the equations $\ell\circ\eta_L=1_L$ and $\ell\circ T(\ell)=\ell\circ\mu_L$ become the corresponding algebra laws for $a_j$ by naturality; the limit legs are jointly monic by uniqueness in [L2], so both equations hold and $(L,\ell)$ is a $T$-algebra. [step 1.1, L2]

3.1 If a cone from an algebra $(X,x)$ has underlying mediating arrow $u:X\to L$, then composing $u\circ x$ and $\ell\circ T(u)$ with every $p_j$ gives the same map because each cone leg is an algebra homomorphism; joint monicity makes $u$ an algebra homomorphism. Its uniqueness and the uniqueness of $\ell$ follow from the base limit, giving exactly the strict lift required by [L1], including when $\mathcal J$ is empty. [step 1.1, step 2.1, L1] ∎
