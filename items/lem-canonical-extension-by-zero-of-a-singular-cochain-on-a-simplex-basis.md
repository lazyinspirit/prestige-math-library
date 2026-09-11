---
id: "lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis"
kind: "lemma"
title: "Canonical extension by zero of a singular cochain on a simplex basis"
deps: ["def-real-singular-cochain-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 8; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a subspace $A\subseteq U$ and $k\ge0$, restriction $C^k(U;\mathbb R)\to C^k(A;\mathbb R)$ has a canonical real-linear section $E_A^U$: extend the values on the supplied $A$-simplex basis by zero on every other $U$-simplex. It is a degreewise section, generally not a cochain map. In particular this applies to $A=U\cap V$ for an open cover. The construction is choice-free in classical ZF.

## Facts & Assumptions

**Given:** A subspace $A\subseteq U$, and a cochain $\eta\in C^k(A;\mathbb R)$.

[F1] Cochains are arbitrary functions on the simplex basis extended linearly over finite chains, and their differential is signed face precomposition ([[def-real-singular-cochain-complex]]).

## Proof

1.1 For each $U$-simplex $\sigma$, set $(E_A^U\eta)([\sigma])=\eta([\sigma:A])$ if $\sigma(\Delta^k)\subseteq A$, and set it to zero otherwise; $\sigma:A$ is the unique continuous corestriction. Extend by the finite sum formula of [F1]. Membership in $A$ and the unique corestriction specify a function, so no selection of a vector-space basis or representatives occurs. This formula is linear in $\eta$. [given, F1]

2.1 On an $A$-simplex the first clause always applies, so restriction of $E_A^U\eta$ is $\eta$ on each generator and hence on every chain. If $A=\varnothing$ this is the zero map; if $A=U$ it is the identity. At degree zero it extends point functions by zero, including a one-point subspace. In negative degrees define the unique zero section. [F1, step 1.1]

3.1 To check that this is not generally a cochain map, take $U=[0,1]$, $A=\{0\}$, and the zero-degree cochain $\eta(0)=1$. On the identity path $\sigma(t)=t$, $\delta E_A^U\eta([\sigma])=0-1=-1$. But $\delta\eta=0$, since every path in $A$ is constant and has equal endpoints, so $E_A^U\delta\eta([\sigma])=0$. Thus the two composites differ. Constant and repeated simplices are fully allowed in the formulas. All degreewise section assertions, including the zero cases, follow from the prescribed basis values and require no AC. [F1, step 1.1, step 2.1, algebra] ∎
