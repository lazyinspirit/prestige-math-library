---
id: lem-faltings-height-sequence-eventually-stationary
kind: lemma
title: "Faltings heights of l-divisible quotients are eventually stationary"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-arith-tate-module-and-inertia
  - def-fiberwise-semiabelian-group-scheme
  - def-axiom-of-choice
  - def-dependent-choice
  - def-stable-faltings-height-of-an-abelian-variety
  - thm-abelian-variety-acquires-semistable-reduction-after-finite-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "G. Faltings, “Erratum: Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” p. 381"
      url: "https://gdz.sub.uni-goettingen.de/id/PPN356556735_0075?tify=%7B%22view%22:%22info%22,%22pages%22:%5B383%5D%7D"
      locator: "Correction to §4, Theorem 2; eventual stationarity after shifting the initial variety."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. Let $A$ be a fiberwise semiabelian group scheme over the ring of integers of a number field, with proper abelian generic fiber, and let $\ell$ be a prime. Let $G\subset A[\ell^\infty]$ be an $\ell$-divisible subgroup, put $G_n=G[\ell^n]$, and let $A_n=A/G_n$ be the fiberwise semiabelian quotient. Then the sequence of Faltings heights $h(A_n)$ is eventually constant. No assertion is made that its eventual value equals $h(A_0)$.

## Statement references

[[def-fiberwise-semiabelian-group-scheme]]

[[def-stable-faltings-height-of-an-abelian-variety]]

[[thm-abelian-variety-acquires-semistable-reduction-after-finite-extension]]

[Faltings 1983, §4, Theorem 2, printed pp. 358–360](https://math.uchicago.edu/~drinfeld/Deligne%27s_conjecture_Manin_conf/Faltings_argument/Faltings.pdf)

[Faltings 1984 erratum, printed p. 381](https://gdz.sub.uni-goettingen.de/id/PPN356556735_0075?tify=%7B%22view%22:%22info%22,%22pages%22:%5B383%5D%7D)

## Facts & Assumptions

**Given:** AC and DC; a fiberwise semiabelian model, a prime $\ell$, and an $\ell$-divisible subgroup of its generic fiber.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-stable-faltings-height-of-an-abelian-variety]]: the height is the normalized degree of the invariant top-differential module with the Faltings metric.

## Proof status

Faltings's original §4 argument is corrected by the 1984 erratum. The proof requires a sufficiently late shift to ensure (i) successive finite flat quotient maps are isomorphisms at the relevant stages and (ii) the intersections of local and global divisible subgroups have the needed divisibility. The local reconstruction has not verified those two details from the active supplier bodies. The exact corrected statement is retained; escalate until the full shifted argument and its group-scheme hypotheses are supplied.

Unresolved proof prerequisite (not an accepted given): Faltings's 1984 erratum corrects the original assertion: only the sequence $h(A_n)$ is eventually stationary; its limit need not equal $h(A_0)$. Proposed supplier ID: `lem-faltings-shifted-quotient-height-stationarity-after-erratum` (not scaffolded or accepted in this run; proposed placement is this A page before this consumer).
