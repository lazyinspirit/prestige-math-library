---
id: thm-tqbf-is-pspace-complete
kind: theorem
title: "TQBF is PSPACE-complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-tqbf-is-in-pspace, lem-space-bounded-machines-have-exponentially-many-configurations, def-reachable-configuration-formula, lem-quantifier-reuse-keeps-reachability-formulas-polynomial, def-polynomial-time-many-one-reduction, def-multitape-and-nondeterministic-machines, def-worst-case-time-and-space-complexity]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Statement

TQBF lies in PSPACE, and every language in PSPACE polynomial-time many-one reduces to TQBF. Therefore TQBF is PSPACE-complete.

## Facts & Assumptions

**Given:** the language TQBF and an arbitrary language $L\in\mathrm{PSPACE}$.

[L1] TQBF belongs to PSPACE ([[prop-tqbf-is-in-pspace]]).

[L2] For a fixed multitape machine running in space $p(n)$, a configuration is determined by its state, finitely many head positions, and the contents of at most $p(n)$ visited cells, so configurations admit encodings of length $O(p(n))$ ([[def-multitape-and-nondeterministic-machines]], [[def-worst-case-time-and-space-complexity]]).

[L3] A polynomial-space machine has at most exponentially many configurations ([[lem-space-bounded-machines-have-exponentially-many-configurations]]).

[L4] The formulas $\Theta_i(U,V)$ are the reachability formulas of [[def-reachable-configuration-formula]].

[L5] Those formulas have only polynomial size when the configuration length and the index $i$ are polynomially bounded ([[lem-quantifier-reuse-keeps-reachability-formulas-polynomial]]).

[L6] A polynomial-time many-one reduction is a polynomial-time computable map preserving yes and no instances exactly ([[def-polynomial-time-many-one-reduction]]).

## Proof

**Proof technique:** direct.

1.1 The membership part is exactly [L1]. So it remains to prove PSPACE-hardness. [L1, given]

1.2 Because $L\in\mathrm{PSPACE}$, there is a deterministic machine $M$ deciding $L$ in space $p(n)$ for some polynomial $p$. Fix an input $x$ of length $n$. By [L2], configurations of $M$ on $x$ can be encoded by bit strings of length $m=O(p(n))$. If $M$ has more than one accepting configuration, adjoin one fresh sink vertex $t$ and one edge from every accepting configuration to $t$; this changes the encoding length by at most one bit and preserves acceptance. [L2, construct]

2.1 By [L3], the resulting graph has at most $2^{c p(n)}$ vertices for some constant $c$. Choose $k:=c p(n)$ large enough that $2^k$ exceeds this number, and form the quantified Boolean formula $\Phi_x:=\Theta_k(C_{\mathrm{start}}(x),t)$ using [L4]. [L3, L4, step 1.2, algebra]

3.1 We claim that $\Phi_x$ is true if and only if $M$ accepts $x$. The proof is by induction on the index used in [L4]. For $i=0$, $\Theta_0(U,V)$ says exactly that $U=V$ or that one legal edge joins $U$ to $V$. For $i\ge 1$, the formula chooses a midpoint $W$ and then, by the universal choice of the selector bit $b$, forces one recursive call to certify the left half and one to certify the right half. Hence $\Theta_i(U,V)$ is true exactly when there is a path from $U$ to $V$ of length at most $2^i$. With $U=C_{\mathrm{start}}(x)$ and $V=t$, this means exactly that $M$ accepts $x$. [L4, step 2.1, induction]

4.1 By [L5], $\Phi_x$ has polynomial size. Because the transition table of $M$ is fixed and the configuration length is polynomial, the formula $\Phi_x$ can be written down from $x$ in polynomial time. Step 3.1 shows $x\in L\iff \Phi_x\in\mathrm{TQBF}$, so by [L6] the map $x\mapsto\Phi_x$ is a polynomial-time many-one reduction from $L$ to TQBF. [L5, L6, step 3.1]

5.1 Steps 1.1 and 4.1 prove that TQBF is in PSPACE and PSPACE-hard. Therefore TQBF is PSPACE-complete. [step 1.1, step 4.1] ∎
