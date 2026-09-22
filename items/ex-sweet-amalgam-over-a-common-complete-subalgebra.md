---
id: ex-sweet-amalgam-over-a-common-complete-subalgebra
kind: example
title: Amalgamating two sweet models over a common complete subalgebra
status: published
origin: pipeline
deps: [def-shelah-sweetness-model, thm-shelah-sweet-amalgamation-preserves-sweetness, lem-shelah-sweet-density-transfer-along-complete-suborders, lem-shelah-sweet-forcings-are-sigma-directed-ccc]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Claim 7.4, Lemma 7.5, Claims 7.12-7.13 and Main Lemma 7.14(a), pp. 35-36 and 41-43"}
verification:
  audited: 2026-09-22
---

## Example

Let $(P_1,D_1,E^1_n)$ and $(P_2,D_2,E^2_n)$ be sweetness models whose complete
Boolean algebras share a common complete subalgebra $B_0$, with $B_0$ contained
in $BA(P_1)$ and in $BA(P_2)$. Then the amalgam $P_1*_{B_0}P_2$ is sweet: below
each admitted pair in the canonical dense set there is a least admission
modulus, and the equivalence relations obtained by shifting the two factor
relations by that modulus have countably many downward-directed classes and
satisfy the sweetness diagonal and transfer clauses. The canonical embeddings
of $P_1$ and $P_2$ into the amalgam are complete, and
$BA(P_1*_{B_0}P_2)$ is ccc because every sweet forcing is ccc.

## Verification

**Given:** Sweetness models $(P_1,D_1,E^1_n)$ and
$(P_2,D_2,E^2_n)$, named complete embeddings of the complete algebra $B_0$
into both Boolean completions, and the positive forcing
$P_0=B_0\setminus\{0\}$ with those two images identified.

[F1] [[def-shelah-sweetness-model]]: the sweetness clauses and the extension relation.

[F2] [[lem-shelah-sweet-density-transfer-along-complete-suborders]]: the
two-part uniformity and density conclusion of Claim 7.4 used to synchronize
the quotient witnesses in both coordinates.

[F3] [[thm-shelah-sweet-amalgamation-preserves-sweetness]]: the amalgam classes and the denseness of the amalgam data.

[F4] [[lem-shelah-sweet-forcings-are-sigma-directed-ccc]]: completeness of suborders and the sigma-directed decomposition.

1.1 The amalgam data are those of [F3]: $O=P_1*_{P_0}P_2$ consists of the pairs admitted by a common positive $B_0$-condition and is ordered coordinatewise. Its canonical dense subset is $$D=\{(q_1,q_2)\in O:q_\ell\in D_\ell\text{ for }\ell=1,2\}.$$ The denseness assertion already includes the synchronization of the two quotient witnesses; it is not inferred from coordinatewise denseness alone. [F2, F3]

1.2 For $x=(q_1,q_2)\in D$, let $m(x)$ be the least $m$ such that every pair $(q'_1,q'_2)$ with $q'_\ell\mathrel{E^\ell_m}q_\ell$ is admitted. Existence is the double application of [F2] in the proof of [F3]: a countable directed cover of $P_0$ is used first for $P_1$ and then, after retaining the dense subfamily below the admission witness, for $P_2$. Two reductions in the same directed piece have a common strengthening and hence admit the perturbed pair. The least number $m(x)$ depends only on the two equivalence classes and admission, not on a chosen witness. [F2, F3]

1.3 No partial-isomorphism extension theorem is needed. The theorem [F3] applies directly to the two named complete embeddings of the arbitrary common complete subalgebra $B_0$. The weak-coordinate maps give complete canonical copies of both factors in the full amalgam, independently of whether those canonical conditions belong to the selected dense presentation $D$. [F3]

2.1 If $x'=(q'_1,q'_2)$ has $q'_\ell\mathrel{E^\ell_{m(x)}}q_\ell$ in both coordinates, then the relevant factor classes are unchanged and minimality gives $m(x')=m(x)$. Hence [F3] defines $$x\mathrel{E_n}x'\quad\Longleftrightarrow\quad m(x)=m(x')=:m\ \text{ and }\ q_1\mathrel{E^1_{m+n}}q'_1\ \text{ and }\ q_2\mathrel{E^2_{m+n}}q'_2.$$ These relations refine with $n$, have countably many classes, and every class is downward directed. In particular every two members of one $E_n$-class are compatible. The diagonal and transfer assertions are the coordinatewise sweetness clauses combined with the same common-admission property; they are not consequences of pairwise compatibility alone. [F1, F3, step 1.2]

2.2 The canonical embeddings are complete by the exact conclusion of [F3]; no countable-generation hypothesis on $B_0$ is present in that theorem. [F3, step 1.1]

3.1 Countable chain condition: the amalgam is sweet by [F3] and step 2.1, and a sweet forcing is a countable union of directed sets, hence ccc by [F4]. [F3, F4, step 2.1]

4.1 The steps above exhibit the intrinsic least modulus, the $E_n$-classes, the two canonical complete embeddings and the ccc conclusion for the amalgam over an arbitrary common complete subalgebra, verifying the claimed instance. [step 2.1, step 2.2, step 3.1] ∎
