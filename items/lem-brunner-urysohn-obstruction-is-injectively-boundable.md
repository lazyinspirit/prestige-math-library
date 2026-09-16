---
id: lem-brunner-urysohn-obstruction-is-injectively-boundable
kind: lemma
title: "The Läuchli Urysohn obstruction is injectively boundable"
status: draft
origin: pipeline
deps: [def-boundable-sentence-over-an-atom-set, lem-brunner-choice-and-urysohn-obstructions, def-brunner-ordered-lauchli-permutation-models, def-normal-and-t4-spaces]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§§1-3, printed pp. 67-73"
---

## Statement

The existence of Brunner's specified normal non-Urysohn space admits an
**atom-blind typed transfer certificate** in the sense of
[[def-boundable-sentence-over-an-atom-set]], with a fixed absolute relative-rank
bound below $\omega + \omega$. That is: there is a fixed formula, with every
quantifier restricted to one of finitely many named carried sorts at levels
below $V_{\omega+\omega}(A \cup \omega)$, which says in every ZFA universe that
the carried ordered continuum is normal and has no continuous real-valued
separating map for its two endpoint closed sets, and whose atomic tests are
preserved under the atom-blind embedding of the transfer theorems.

## Facts & Assumptions

**Given:** The ordered Läuchli continuum $L$ of [[def-brunner-ordered-lauchli-permutation-models]], its two endpoint closed sets, and the failure of Urysohn's lemma in the two models of [[lem-brunner-choice-and-urysohn-obstructions]].

[F1] Boundable sentences over an atom set: a formula is boundable when it is provably equivalent, uniformly in ZFA, to its relativisation to $V_\alpha(\bigcup \vec x)$ for a fixed absolutely defined ordinal $\alpha$; ordered pairs, relations, functions, cuts, topologies, closedness, continuity and function graphs all expand into membership formulas, and an existential closure of such a formula is the sentence certified ([[def-boundable-sentence-over-an-atom-set]]).

[F2] The space $L$ is a compact linearly ordered normal space with two distinct endpoint closed sets, and every continuous real-valued function on it is constant ([[lem-brunner-choice-and-urysohn-obstructions]], [[def-normal-and-t4-spaces]]).

[L1] The carried sorts: the atom set and its completion, the order relation and the interval topology, the level sets of the relative hierarchy below $\omega+\omega$, the set of all candidate real-valued function graphs on $L$, and the two endpoint sets; every object mentioned in the expanded formula is an element of one of these sorts, and the pure ordinal and real parameters are fixed ([[def-boundable-sentence-over-an-atom-set]]).

## Proof

**Proof technique:** direct.

1.1 The claim to be certified is the conjunction: $L$ carries the order topology of a linear order with least and greatest element, that topology is a topology, the two endpoint sets are nonempty, disjoint and closed, $L$ is normal, and there is no continuous function from $L$ to $\mathbb{R}$ separating the endpoints. [given, F2]

2.1 Each conjunct of step 1.1 is a membership statement about objects of the carried sorts: an ordered pair is a set of sets, a function is a relation with the single-value property, a topology is a family of subsets closed under the listed operations, a closed set is the complement of a member of the topology, and continuity of a function graph is the statement that preimages of the basic open intervals lie in the topology. [step 1.1, L1]

3.1 The quantifiers can be relativised: for the existential claims about candidate topologies, candidate continuous functions and candidate separating values, quantification over the carried sorts at levels below $V_{\omega+\omega}(A \cup \omega)$ captures exactly the objects of the ambient universe that occur in these claims, because each such object is a finite tuple of atoms, ordinals below $\omega+\omega$, and sets of the cumulative hierarchy over the atoms, and functions and relations on the continuum are sets of ordered pairs of its points. [step 2.1, L1, F1]

3.2 The relativised formula is atom-blind: its only atomic tests are equality and membership on the carried sorts, and the atoms themselves are treated opaquely, since the order and the topology of the continuum are carried as separate sorts and are not reconstructed from the internal structure of atoms. [step 2.1, L1, F1]

4.1 By [F1], the relativised formula with its fixed ordinal bound is a boundable sentence, and its existential closure is the sentence asserting the existence of the ordered continuum with the stated properties; by step 1.1 and [F2] that sentence holds in the two Läuchli models. [step 3.1, step 3.2, F1, F2]

5.1 The bound is below $\omega+\omega$: the continuum, its topology, its endpoint sets and the candidate function graphs are all constructed from finitely many iterates of the power set over the atoms and the fixed purely mathematical parameters, so the fixed ordinal of [F1] can be taken below $\omega+\omega$ and is absolute, depending on the formula alone and not on the model. [step 4.1, L1, F1] ∎

## Remarks

- **Why a certificate is needed at all.** The transfer theorem used below accepts a sentence together with an absolute bound and a typed incidence structure; without the certificate the transfer step would have to be taken on trust. The certificate produced here is the one the Pincus and Jech–Sochor interfaces consume.

- **What the certificate does not say.** It speaks only of the carried continuum and its separating functions; it asserts nothing about the rest of the permutation model, and in particular it does not certify countable choice or BPI, which are transferred through the separate exceptional clauses.
