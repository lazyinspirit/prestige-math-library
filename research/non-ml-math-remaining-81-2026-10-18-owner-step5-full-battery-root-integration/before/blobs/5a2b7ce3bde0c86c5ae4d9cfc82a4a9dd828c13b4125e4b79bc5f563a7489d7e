---
id: lem-hall-and-dj-borel-conventions-are-isomorphic
kind: lemma
title: "The extended Green and repository Drinfeld–Jimbo coproduct conventions agree on simple generators"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps:
  - def-quiver-hall-positive-borel
  - def-extended-hall-algebra-and-composition-subalgebra
  - def-drinfeld-jimbo-quantized-enveloping-algebra
  - thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra
  - lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals
  - cor-extended-green-hall-bialgebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.5 and §3.3, PDF pp. 16 and 38–40: the extended Hall simple coproduct in the Hall convention and the Ringel generator assignment."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: '§1, printed p. 6, display (1.6): the repository Drinfeld–Jimbo coproduct convention Delta(E_i)=E_i tensor K_i^{-1}+1 tensor E_i.'
verification:
  precheck: pending
---

## Statement

For a vertex simple $S_i$, the DJ-compatible extended Green coproduct has
$$ \Delta_-([S_i])=[S_i]\otimes k_i^{-1}+1\otimes[S_i], $$
which is exactly the repository Drinfeld–Jimbo coproduct formula on $E_i$.
The alternative Hall convention
$\Delta_+([S_i])=[S_i]\otimes1+k_i\otimes[S_i]$ is distinct and is not
silently identified with $\Delta_-$. The positive Borel coproduct formulas
are well-defined at $\nu=\sqrt q>1$.

## Facts & Assumptions

**Given:** A finite loopless quiver, its positive Borel presentation, and the
extended Green coproduct of
[[cor-extended-green-hall-bialgebra]].

[F1] The repository Drinfeld–Jimbo coproduct is
$\Delta(E_i)=E_i\otimes K_i^{-1}+1\otimes E_i$ and
$\Delta(K_i)=K_i\otimes K_i$
([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]).

[F2] The positive Borel coproduct assignments are the same formulas in the
presentation of [[def-quiver-hall-positive-borel]].

[F3] The positive Serre ideal is a coideal for these coproducts in the toral
action quotient
([[lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals]]).
Its identities are Laurent-polynomial identities in $q_i$; at $q_i=\nu>1$
all quantum factorial denominators are nonzero, so those identities
specialize.

[F4] For a simple $S_i$, the extended coproduct is
$\Delta_-([R])=\sum\nu^{\langle M,N\rangle}P^R_{M,N}a_R^{-1}
[M]\otimes k_{-[M]}[N]$
([[cor-extended-green-hall-bialgebra]]).

## Proof



**Proof technique:** direct comparison of generator formulas.

1.1 In the sum [F4] for $R=S_i$, the only endpoint pairs are $(S_i,0)$ and $(0,S_i)$. Each endpoint-labelled exact-sequence count is $a_{S_i}$, and the Euler exponents involving zero are zero. Their terms are respectively $[S_i]\otimes k_i^{-1}$ and $1\otimes[S_i]$. [F4, given, algebra]

2.1 The formula in step 1.1 agrees term by term with [F1] under $E_i\mapsto[S_i]$ and $K_i\mapsto k_i$. The group-like torus formulas agree as well. Formula [F2] is well-defined on the positive Serre quotient by [F3] and specialization at $\nu>1$. Schiffmann’s $\Delta_+$ has different simple terms, so no equality between those two coproduct conventions is asserted. [F1, F2, F3, step 1.1, algebra] ∎

