---
id: lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
kind: lemma
title: "Compact smooth manifolds have finite CW models under countable choice"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-collar-neighborhood-theorem, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-morse-sard-for-euclidean-maps, thm-transverse-preimage-theorem, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, thm-morse-functions-and-handle-decompositions-correspond, lem-a-handle-decomposition-gives-a-relative-cw-complex, def-countable-choice, thm-morse-lemma, thm-compactly-supported-vector-fields-are-complete, def-morse-function-adapted-to-a-cobordism]
justified_by: []
aliases: []
landmark: false
dependency_level: 4
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, sections 1-3 (handle decompositions from Morse functions)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "the handle decomposition associated with an excellent Morse function and its dimension hypotheses"
    - title: "John Milnor, Morse Theory, Annals of Mathematics Studies 51, sections 3-4"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/milnmorse.pdf"
      locator: "Morse functions on compact manifolds, finitely many critical points and handle attachments"
    - title: "Morris W. Hirsch, Differential Topology, Chapter 6 (approximation and transversality)"
      url: "https://link.springer.com/book/10.1007/978-1-4684-9449-5"
      locator: "generic transversality and the Sard argument used to make critical points nondegenerate"
---

## Statement

Assume $\mathrm{AC}_\omega$. Every compact smooth manifold, with boundary
allowed, has the homotopy type of a finite CW complex. If its boundary is a
supplied finite CW manifold, the collar may be retained in a finite relative CW
model.

## Facts & Assumptions

**Given:** A compact smooth $n$-manifold $W$ with boundary $\partial W$, and, when stated, a supplied finite CW structure on $\partial W$.

[A1] Countable choice $\mathrm{AC}_\omega$ is assumed ([[def-countable-choice]]).

[L1] A compact smooth manifold with boundary has a collar neighbourhood of its boundary, and smooth partitions of unity subordinate to any open cover exist under $\mathrm{AC}_\omega$ ([[thm-collar-neighborhood-theorem]], [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]).

[L2] For a compact $K$ inside an open $W_0$ there is a smooth bump equal to $1$ near $K$ with support in $W_0$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L3] Sard's theorem for $C^r$ Euclidean maps: with $r>\max\{m-n,0\}$ the critical values form a null set ([[thm-morse-sard-for-euclidean-maps]]); the preimage of a regular value of a transverse map is an embedded submanifold of the expected codimension ([[thm-transverse-preimage-theorem]]).

[L4] A Morse function on a compact manifold has only finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[L5] Assume $\mathrm{AC}_\omega$. An adapted excellent Morse function on a compact collared triad determines a finite handle decomposition relative to the incoming face, with one handle per critical point and the index as the Morse index; conversely every finite handle decomposition is induced by such a function ([[thm-morse-functions-and-handle-decompositions-correspond]]).

[L6] Assume $\mathrm{AC}_\omega$. A finite handle decomposition of a compact triad relative to $M_0$ yields a finite relative CW pair with one relative cell per handle and a homotopy equivalence of pairs; in particular the absolute case $M_0=\varnothing$ gives a finite CW model of $W$ ([[lem-a-handle-decomposition-gives-a-relative-cw-complex]]).

[L7] Morse coordinates exist at every nondegenerate critical point ([[thm-morse-lemma]]). Under $\mathrm{AC}_\omega$, a compactly supported smooth vector field on a boundaryless collar extension is complete ([[thm-compactly-supported-vector-fields-are-complete]]); adapted pairs use this ambient completeness convention ([[def-morse-function-adapted-to-a-cobordism]]).

## Proof

**Proof technique:** constructive.

1.1 Empty manifolds have the empty CW model. A compact zero-dimensional manifold is finite, since its singleton open cover has a finite subcover, and has a finite discrete CW model. Hence assume $\dim W>0$. Use [L1] to collar the boundary. For the absolute model take $(W;\varnothing,\partial W)$ and choose $f_0:W\to[0,1]$ equal to $1-t$ near the outgoing face, with all other values in $(0,1)$; cut off this collar formula to the constant $1/2$ in the interior. When the boundary is empty use $f_0=1/2$. For the relative model instead take $(W;\partial W,\varnothing)$ and use $f_0=t$ near its incoming face. These functions have no critical point on a fixed boundary strip and the required boundary level sets. [L1, A1, given, construct]

2.1 Let $K$ be the compact complement of a smaller boundary strip, contained in the interior. Take finitely many coordinate charts with compact cores covering $K$ and bumps $\rho_i$ equal to one near those cores, supported in the interior, by [L2]. The smooth functions $\rho_i x_i^j$, extended by zero, have differentials spanning $T_p^*W$ on an open neighbourhood $O$ of $K$. [step 1.1, L2, construct]

3.1 Put $f_t=f_0+\sum t_{ij}\rho_i x_i^j$ with parameter space $\mathbb R^N$. The section $(p,t)\mapsto df_t(p)$ over $O\times\mathbb R^N$ is transverse to the zero section because its parameter derivatives span the fibre. Its zero set $Z$ is therefore a smooth $N$-manifold by [L3]. At a zero its tangent equation in local coordinates is $H_pv+B_p\tau=0$, where $H_p$ is the Hessian and $B_p:\mathbb R^N\to T_p^*W$ is onto. Thus the projection $Z\to\mathbb R^N$ is regular at $(p,t)$ exactly when $H_p$ is onto, equivalently invertible. [step 2.1, L3, algebra]

4.1 Apply Euclidean Sard in countably many charts of $Z$. Under [A1] their critical-value sets have null union (choose covers with budgets $\epsilon2^{-i}$), so that union contains no open parameter ball. Take a regular parameter $t$ arbitrarily near zero. On the remaining compact boundary strip $df_0$ is bounded away from zero in a metric built by a finite chart partition; a sufficiently small $t$ preserves this property. Its support misses a neighbourhood of the boundary, and a small perturbation keeps the interior values strictly between zero and one. Hence $f_t$ is adapted and Morse throughout $W$. [step 1.1, step 3.1, L1, L3, A1, choose]

5.1 The critical set is finite by [L4]. Choose disjoint small critical-point neighbourhoods and bumps constant one near each critical point. Adding sufficiently small independent constants times those bumps preserves the critical points and their Hessians; on the compact transition annuli the differential was bounded away from zero, so it remains nonzero. Choose the constants to make the finitely many critical values distinct, retaining the boundary formulas and range. This gives an excellent adapted function $f$. [step 4.1, L2, L4, choose]

6.1 By [L7], choose Morse charts at the finitely many critical points and their prescribed negative Euclidean gradient fields. Away from those charts choose local fields with $df(X)<0$, and on the boundary collars take the descending collar direction. A partition as in [L1], equal to one near the critical points, glues these fields: strict negativity is preserved by convex combination. Append exterior collars, extend the collar fields, and cut off outside a compact neighbourhood of $W$. The resulting ambient field is complete by [L7] and has the adapted local models and boundary signs. Thus $(f,X)$ meets the pair hypotheses of [L5]. [step 5.1, L1, L2, L7, construct]

7.1 Apply [L5] to obtain a finite handle decomposition relative to the chosen incoming face. In the absolute construction this face is empty, and [L6] gives a finite CW model homotopy equivalent to $W$. In the relative construction the incoming face is the supplied finite CW boundary; [L6] gives a finite relative CW pair and an equivalence fixing that face, with its initial collar compressed onto it. [step 1.1, step 6.1, L5, L6]

8.1 These models prove both assertions. Only finite selections and the countable chart, null-cover, collar, partition and completeness suppliers used $\mathrm{AC}_\omega$. [step 7.1, A1, discharge-construct] ∎
