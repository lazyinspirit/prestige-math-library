---
id: thm-a-monad-morphism-induces-restriction-of-algebras-and-a-comparison-of-free-algebras
kind: theorem
title: "A monad morphism induces restriction of algebras and a natural comparison of free algebras"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monad-morphism, def-eilenberg-moore-category, def-free-t-algebra, def-t-algebra-and-algebra-homomorphism, def-natural-transformation]
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
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Exercise VI.2.3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

A monad morphism $\alpha:T\Rightarrow S$ on $\mathcal C$ induces a functor $\alpha^*:\mathcal C^S\to\mathcal C^T$ over $\mathcal C$, defined by restriction of algebra structure. Its components also define a natural transformation from the free $T$-algebra functor to the free $S$-algebra functor followed by $\alpha^*$.

## Facts & Assumptions

**Given:** A monad morphism $\alpha:(T,\eta^T,\mu^T)\Rightarrow(S,\eta^S,\mu^S)$ on $\mathcal C$.

[L1] The equations for $\alpha$ are $\alpha\eta^T=\eta^S$ and $\alpha\mu^T=\mu^S\,S\alpha\,\alpha T$ ([[def-monad-morphism]]).

[L2] An $S$-algebra $(A,a)$ satisfies $a\eta^S_A=1_A$ and $a\mu^S_A=aS(a)$, and its homomorphisms satisfy $fa=bS(f)$ ([[def-t-algebra-and-algebra-homomorphism]]).

[L3] The free $T$-algebra on $A$ is $(TA,\mu^T_A)$ ([[def-free-t-algebra]]).

## Proof

**Proof technique:** direct.

1.1 For an $S$-algebra $(A,a)$, put $a_T=a\alpha_A:TA\to A$. By [L1]–[L2], $a_T\eta^T_A=a\eta^S_A=1_A$, while naturality of $\alpha$ and the two multiplication equations give $a_T\mu^T_A=a_TT(a_T)$. Thus $(A,a_T)$ is a $T$-algebra. [L1, L2]

2.1 If $f:(A,a)\to(B,b)$ is an $S$-algebra homomorphism, then $fa\alpha_A=bS(f)\alpha_A=b\alpha_BT(f)$ by naturality of $\alpha$. Hence the unchanged underlying arrow is a $T$-algebra homomorphism, and unchanged identities and composites define a functor $\alpha^*$ over $\mathcal C$. [L1, L2, step 1.1]

3.1 For every $A$, the multiplication equation in [L1] says precisely that $\alpha_A:(TA,\mu^T_A)\to(SA,\mu^S_A\alpha_{SA})$ is a $T$-algebra homomorphism. Naturality of $\alpha$ makes these maps natural in $A$, giving the claimed comparison of free algebras. [L1, L3, step 2.1] ∎
