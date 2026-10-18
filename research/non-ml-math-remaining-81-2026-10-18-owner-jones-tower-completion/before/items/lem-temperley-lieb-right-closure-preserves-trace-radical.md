---
id: lem-temperley-lieb-right-closure-preserves-trace-radical
kind: lemma
title: "Normalized right closure preserves the diagram trace radical"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - lem-temperley-lieb-diagram-tower-conditional-expectation-identities
  - def-temperley-lieb-diagram-category
  - def-temperley-lieb-normalized-markov-trace-by-closure
  - lem-temperley-lieb-closure-trace-is-cyclic-and-markov
justified_by: []
aliases: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "§2.1.4, Exercise 2.1.12(6), PDF p. 8: the trace-adjoint relation between right closure and inclusion. The two-sided ideal and radical-stability assertions are proved directly below."
---

## Statement

Let $n\ge1$ and $\delta\in\mathbb C^\times$. Define the trace-pairing radical
$$
J_n:=\{x\in\mathrm{TL}_n(\mathbb C,\delta):\tau_n(yx)=0\text{ for every }y\in\mathrm{TL}_n(\mathbb C,\delta)\}.
$$
Then $J_n$ is a two-sided ideal, $\iota_n(J_n)\subseteq J_{n+1}$, and $E_n(J_{n+1})\subseteq J_n$. Consequently the inclusion and normalized right closure descend to the quotient tower $\mathrm{TL}_n/J_n$.

## Facts & Assumptions

**Given:** $\delta\in\mathbb C^\times$, the trace-pairing radicals, and the maps from [[def-temperley-lieb-diagram-tower-and-right-closure]].

[F1] The diagram tower maps $\iota_n$ and $E_n$ are bimodular and trace-preserving. ([[lem-temperley-lieb-diagram-tower-conditional-expectation-identities]])

[F2] $\tau_n$ is the normalized closure trace on the finite diagram algebra, and stacking defines its algebra products. ([[def-temperley-lieb-diagram-category]], [[def-temperley-lieb-normalized-markov-trace-by-closure]])

[F3] The closure trace is cyclic: $\tau_n(xy)=\tau_n(yx)$. ([[lem-temperley-lieb-closure-trace-is-cyclic-and-markov]])

## Proof

**Proof technique:** direct.

1.1 Let $x\in J_n$ and $a,b,y\in\mathrm{TL}_n$. The defining radical condition gives $\tau_n((ya)x)=0$, so $\tau_n(yax)=0$. By cyclicity, $\tau_n(yxb)=\tau_n((by)x)=0$, since $by\in\mathrm{TL}_n$. Thus both $ax$ and $xb$ lie in $J_n$, proving that $J_n$ is a two-sided ideal. [F2, F3, given, algebra]

2.1 If $x\in J_n$ and $z\in\mathrm{TL}_{n+1}$, trace preservation and right bimodularity yield $\tau_{n+1}(z\iota_n(x))=\tau_n(E_n(z\iota_n(x)))=\tau_n(E_n(z)x)=0$, because $E_n(z)\in\mathrm{TL}_n$. Hence $\iota_n(x)\in J_{n+1}$. [F1, step 1.1, algebra]

3.1 If $x\in J_{n+1}$ and $a\in\mathrm{TL}_n$, then $\tau_n(aE_n(x))=\tau_n(E_n(\iota_n(a)x))$ by left bimodularity, and trace preservation makes this $\tau_{n+1}(\iota_n(a)x)=0$ by the definition of $J_{n+1}$. Thus $E_n(x)\in J_n$. These ideal inclusions make both quotient maps independent of representatives, so the tower and right-closure maps descend. [F1, step 1.1, step 2.1, algebra] ∎
