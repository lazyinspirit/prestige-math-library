---
id: ex-sweet-amalgam-over-a-common-complete-subalgebra
kind: example
title: Amalgamating two sweet models over a common complete subalgebra
status: draft
origin: pipeline
deps: [def-shelah-sweetness-model, thm-shelah-sweet-amalgamation-preserves-sweetness, lem-shelah-sweet-density-transfer-along-complete-suborders, lem-shelah-sweet-forcings-are-sigma-directed-ccc]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Claim 7.4, Lemma 7.5, Claims 7.12-7.13 and Main Lemma 7.14(a), pp. 35-36 and 41-43"}
---

## Example

Let $(P_1,D_1,E^1_n)$ and $(P_2,D_2,E^2_n)$ be sweetness models whose complete
Boolean algebras share a common complete subalgebra $B_0$, with $B_0$ contained
in $BA(P_1)$ and in $BA(P_2)$. Then the amalgam $P_1*_{B_0}P_2$ is sweet: below
any condition of the amalgam there is a single modulus $k$ such that every
$n\ge k$ and every two conditions in the same $E_n$-class are compatible, the
canonical embeddings of $P_1$ and $P_2$ into the amalgam are complete, and
$BA(P_1*_{B_0}P_2)$ is ccc because every sweet forcing is ccc.

## Verification

**Given:** Sweetness models $(P_1,D_1,E^1_n)$ and $(P_2,D_2,E^2_n)$, a complete subalgebra $B_0$ common to $BA(P_1)$ and $BA(P_2)$, and a condition $(q_1,q_2)$ of the amalgam admitted by a common $B_0$-condition.

[F1] [[def-shelah-sweetness-model]]: the sweetness clauses and the extension relation.

[F2] [[lem-shelah-sweet-density-transfer-along-complete-suborders]]: the uniform modulus of Claim 7.4 in the source proof.

[F3] [[thm-shelah-sweet-amalgamation-preserves-sweetness]]: the amalgam classes and the denseness of the amalgam data.

[F4] [[lem-shelah-sweet-forcings-are-sigma-directed-ccc]]: completeness of suborders and the sigma-directed decomposition.

1.1 The amalgam data are those of the amalgamation theorem: $O=P_1*_{B_0}P_2$ consists of the pairs admitted by a common $B_0$-condition, ordered coordinatewise, with dense subset $D=\{(q_1,q_2)\in O:q_\ell\in D_\ell\}$. [F1]

1.2 Display of the modulus: write $\{A_j\}$ for the countably many directed subsets covering $B_0$ supplied by the sweetness of $P_1$ over $B_0$, and apply the two-part uniform conclusion of the corresponding source claim first in $P_1$ and then in $P_2$; this produces an index $j$ and, for the given admitted pair, moduli $k_1,k_2$ such that every $E^1_{k_1}$-equivalent strengthening of $q_1$ and every $E^2_{k_2}$-equivalent strengthening of $q_2$ is admitted by a common member of $A_j$. The single modulus $k=\max\{k_1,k_2\}$ is the modulus displayed in the Statement. [F2]

1.3 Display of the $E_n$-classes: by the corresponding source claim the amalgam is equipped with
$$(q_1,q_2)\mathrel{E_n}(q_1',q_2')\quad\Longleftrightarrow\quad q_1\mathrel{E^1_{m+n}}q_1',\quad q_2\mathrel{E^2_{m+n}}q_2',$$
where $m$ is the least common modulus of the two pairs as in step 1.2; these are equivalence relations with countably many classes, refining in $n$, and their classes are downward directed, so any two conditions in one $E_n$-class are compatible. [F3, step 1.2]

1.4 No partial-isomorphism extension theorem is needed: [F3] applies directly to the two named complete embeddings of the arbitrary common complete subalgebra $B_0$ and concludes that their Boolean amalgam is sweet and contains complete canonical copies of both factors. [F3]

2.1 The canonical embeddings are complete by the exact conclusion of [F3]; no countable-generation hypothesis on $B_0$ is present in that theorem. [F3, step 1.1]

2.2 Countable chain condition: the amalgam is sweet by [F3] and step 1.3, and a sweet forcing is a countable union of directed sets, hence ccc by [F4]. [F3, F4, step 1.3]

3.1 The steps above exhibit the modulus, the $E_n$-classes, the two canonical complete embeddings and the ccc conclusion for the amalgam of two sweet models over an arbitrary common complete subalgebra, verifying the claimed instance. [step 1.3, step 2.1, step 2.2] ∎
