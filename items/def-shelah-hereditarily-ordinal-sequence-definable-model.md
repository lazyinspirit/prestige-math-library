---
id: def-shelah-hereditarily-ordinal-sequence-definable-model
kind: definition
title: The Shelah HOD(S) model and its real-ordinal presentation
status: draft
origin: pipeline
deps: [def-ordinal-definability-and-hod, def-solovay-hereditarily-ordinal-sequence-definable-model, thm-shelah-ch-omega-one-sweet-construction]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Theorems 7.16-7.17 and concluding remark (3), pp. 43-44"}
    - {title: "Robert M. Solovay, A Model of Set-Theory in Which Every Set of Reals Is Lebesgue Measurable", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf", locator: "Part III, Sections 2.2-2.7, pp. 51-52"}
---

## Definition

Work in the generic extension $V[G]$ of the CH-length Shelah construction
[[thm-shelah-ch-omega-one-sweet-construction]] started over the constructible
universe $L$. Let $S=\bigcup_{\alpha\in\mathrm{Ord}}{}^{\omega}\alpha$ be the class
of all countable sequences of ordinals, exactly as in the
Solovay $HOD(S)$ presentation
[[def-solovay-hereditarily-ordinal-sequence-definable-model]], and define

$$N=HOD(S)=\{x:\operatorname{tc}(\{x\})\subseteq OD(S)\},$$

where $OD(S)$ is the class of sets uniquely definable in a rank from one
$s\in S$, finitely many ordinals and a formula, in the sense of
[[def-ordinal-definability-and-hod]]. The definition is the same uniform
first-order class as in the Solovay presentation, with the ambient model now
being the Shelah extension rather than a Lévy collapse.

**Conventions proved in this pair.** Finite and countable tuples of members of
$S$ interleave into one member of $S$ by a fixed pairing function on $\omega$, so
"one $S$-parameter" loses no generality; a real, viewed as a binary sequence of
ordinals, is itself a member of $S$; and every real belongs to $N$, because a
real is definable from itself as an $S$-parameter.

**Real-ordinal presentation.** In this branch the ambient ground model is $L$.
By the countably-generated-support coding of
[[lem-shelah-real-name-capture-and-coded-meagre-unions]], every set
$A\subseteq\mathbb R$ in $N$ is definable from one real together with finitely
many ordinals: take the $B$-name of the $S$-parameter defining $A$, capture its
countably many deciding antichains in a stage $B_\alpha$, record the generic's
chosen index in each of them by a single real, and code the ground-model name
and the canonical enumerations by ordinals, which lie in $L$. Conversely, a real
together with finitely many ordinals interleaves into one member of $S$. This is
the real-and-ordinal presentation required by the equiconsistency statement; it
is asserted only in the branch over $L$ and is not claimed for an arbitrary
ground extension.

No equality with $L(\mathbb R)$, with $HOD(\mathbb R)$, or with any class built
from all $\omega_1$-sequences of ordinals is asserted. The ambient $\omega_1$ is
not collapsed: the construction is ccc and adds no new ordinals, so the ordinal
height of $N$ is that of $V[G]$.
