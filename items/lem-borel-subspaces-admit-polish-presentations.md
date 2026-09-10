---
id: lem-borel-subspaces-admit-polish-presentations
kind: lemma
title: "Borel subspaces admit polish presentations"
status: published
origin: pipeline
deps: [def-standard-borel-space, def-polish-space, thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable, lem-standard-complete-metric-on-a-countable-product, prop-polish-space-countability-conventions-agree, def-axiom-of-choice, thm-countable-union-of-countable, thm-product-of-countable]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Rao and Srivastava, An Elementary Proof of the Borel Isomorphism Theorem"
      url: https://math.iisc.ac.in/~manju/MartBM/RaoSrivastava_borelisomorphism.pdf
    - title: "Marker, Descriptive Set Theory, Lemmas 2.22-2.23 and Theorem 2.24"
      url: https://www.math.uic.edu/~marker/math512/dst.pdf
---

## Statement

Assume AC. If $B$ is a Borel subset of a Polish space $(P,\tau)$, then $B$ has a finer Polish topology with exactly the trace sigma-algebra $\mathcal B(P)|_B$. In fact there is a finer Polish topology on $P$ with the same Borel sets which makes $B$ clopen. Thus $(B,\mathcal B(P)|_B)$ is standard Borel.

## Facts & Assumptions

**Given:** AC, a Polish space $(P,\tau)$, and a Borel subset $B\subseteq P$.

[F1] Polish means separable and completely metrizable. ([[def-polish-space]])

[F2] Under countable choice, a $G_\delta$ subspace of a complete metric space has a compatible complete metric. ([[thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable]])

[F3] Countably many complete metrics bounded by one have a complete product metric. ([[lem-standard-complete-metric-on-a-countable-product]])

[F4] Under countable choice, complete metrizability plus a countable basis is equivalent to being Polish. ([[prop-polish-space-countability-conventions-agree]])

[F5] AC selects the countable family of topology, metric and basis witnesses and supplies countable choice. ([[def-axiom-of-choice]])

[F6] A Polish presentation with exactly the given Borel sigma-algebra makes a space standard Borel. ([[def-standard-borel-space]])

[F7] Under countable choice, a countable union of countable sets is countable. ([[thm-countable-union-of-countable]])

[F8] A finite product of countable sets is countable, by iteration of the binary product statement. ([[thm-product-of-countable]])

## Proof

**Proof technique:** direct.

1.1 If $P$ is empty there is only the empty subset and the assertion holds. On nonempty $P$, fix a compatible complete metric and a countable basis using [F1], [F4] and [F5]. An open $U$ is $G_\delta$ (repeat $U$), so [F2] completely metrizes it; its closed complement is complete in the restricted original metric since a limit of a sequence in a closed set stays there. Both subspaces have countable trace bases and hence are Polish by [F4]. [F1, F2, F4, F5]

2.1 Bound each component metric by replacing $d$ with $\min(d,1)$; this preserves its topology and Cauchy sequences, hence completeness. On the disjoint union of $U$ and $P\setminus U$, retain those metrics within components and set cross-component distance equal to two. The triangle inequality holds within a component and across components (any cross-component path includes an edge of length two). A Cauchy sequence is eventually in one component and converges there. A union of the two countable bases is countable. This Polish topology is finer than $\tau$, makes $U$ clopen, and has the same Borel sets: each new open is the union of two old trace-open sets, hence old Borel. Empty components simply contribute no points. [step 1.1]

3.1 Let $\mathcal R$ be the old Borel subsets that can be made clopen by such a refinement. Step 2.1 puts every open set in $\mathcal R$; closure under complements uses the same topology. Given $B_n\in\mathcal R$, [F5] selects a witnessing Polish topology $\tau_{n+1}$, complete bounded metric and countable basis for each $n$. Include $\tau_0=\tau$. In $\prod_{n\ge0}(P,\tau_n)$ let $\Delta=\{(x,x,\ldots):x\in P\}$. [step 2.1, F5]

4.1 The diagonal $\Delta$ is closed. If two coordinates differ, disjoint neighbourhoods in the original metric topology pull back to open neighbourhoods in both refined coordinates; their product cylinder misses $\Delta$. The product is completely metrized by [F3], so its closed subspace $\Delta$ is complete. It has a countable basis of finite cylinders restricted to $\Delta$; For each finite length the coordinate-index and basis-index lists form a countable set by [F8]; [F7] makes the union over lengths countable, with its countable-choice hypothesis supplied by [F5]. By [F4] it is Polish. Pull its topology back to $P$ along $x\mapsto(x,x,\ldots)$. This refines every $\tau_n$. Each basic open is a finite intersection of old Borel sets, and every open is a union of a subfamily of the countable basis. Thus every new open is old Borel; the two Borel sigma-algebras coincide. [step 3.1, F3, F4, F5, F7, F8]

5.1 Each $B_n$ is clopen in the common refinement, so $\bigcup_n B_n$ is open. Apply the splitting construction of step 2.1 to that Polish topology, making the union clopen while preserving its Borel sets, hence the original Borel sets. Consequently $\mathcal R$ is a sigma-algebra containing $\tau$, and contains every old Borel set. For the specified $B$, restrict the resulting complete metric and countable basis to the closed set $B$. This is a Polish topology on $B$, finer than its original subspace topology; its Borel sets are precisely the old traces, since relative opens generate traces of Borel sets in either topology. The identity is the Polish presentation required by [F6]. [step 2.1, step 4.1, F4, F6] ∎

## Source notes

Marker, Descriptive Set Theory, Lemmas 2.22–2.23 and Theorem 2.24, printed pp.20–21 (PDF indices 19–20), full statements and proofs read. The closed-diagonal argument is expanded using continuity to the original Hausdorff topology. Rao–Srivastava, An Elementary Proof of the Borel Isomorphism Theorem, pp.347–349, is retained as the scaffold’s independent background treatment, not a load-bearing citation in this proof.
