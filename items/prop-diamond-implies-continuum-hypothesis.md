---
id: prop-diamond-implies-continuum-hypothesis
kind: proposition
title: "Diamond implies CH"
status: draft
origin: pipeline
deps: [def-diamond-on-omega-one, def-cardinal, thm-cantor-powerset, def-club-subsets-of-ordinals, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Proposition 9.8, printed p44; least-index injection expanded locally"
      url: https://karagila.org/files/set-theory-2017.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, $\diamondsuit$ implies $2^{\aleph_0}=\aleph_1$.

## Facts & Assumptions

**Given:** A diamond sequence $(A_\alpha)_{\alpha<\omega_1}$; assume AC.

[F1] For each $A\subseteq\omega_1$, the correct-guess set meets every club. [[def-diamond-on-omega-one]]

[F2] Club means closed and unbounded, with closure tested at nonzero limits. [[def-club-subsets-of-ordinals]]

[F3] The power set of any set has strictly larger cardinality than that set. [[thm-cantor-powerset]]

[F4] Under AC cardinality is the least equinumerous ordinal. [[def-cardinal]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 The tail $C=\{\alpha<\omega_1:\alpha>\omega\}$ is club: it is unbounded, and any nonzero limit point of it is greater than $\omega$ and still belongs to it. For $B\subseteq\omega$, apply F1 to $B$ and $C$. At the resulting $\alpha>\omega$ one has $B\cap\alpha=B$, so $A_\alpha=B$. Define $j(B)$ to be the least such $\alpha>\omega$. This minimum exists in the nonempty set of eligible ordinals. If $j(B)=j(D)=\alpha$, then $B=A_\alpha=D$, proving that $j:\mathcal P(\omega)\to\omega_1$ is injective. The argument includes $B=\varnothing$ and $B=\omega$. [F1, F2, given]

2.1 Step 1.1 gives $|\mathcal P(\omega)|\le\aleph_1$. F3 with $A=\omega$ gives $\aleph_0<|\mathcal P(\omega)|$, and by F4 and A1 any uncountable cardinal is at least the least uncountable cardinal $\aleph_1$. The two inequalities give $|\mathcal P(\omega)|=\aleph_1$, which is $2^{\aleph_0}=\aleph_1$. [F3, F4, A1, step 1.1] ∎
