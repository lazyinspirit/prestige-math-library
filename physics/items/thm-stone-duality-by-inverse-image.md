---
id: thm-stone-duality-by-inverse-image
kind: theorem
title: Stone duality and its natural maps
status: published
origin: pipeline
deps: [thm-stone-clopen-representation-under-bpi, thm-stone-space-recovered-from-its-clopens, def-boolean-homomorphism-and-quotient]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 4.1–4.4, pp. 16–17"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Statement

Under BPI over ZF, Boolean algebras with bound-preserving homomorphisms and Stone spaces with continuous maps are contravariantly equivalent. On maps the assignments are $h:B\to C\mapsto h^*:V\mapsto h^{-1}[V]$ and $f:X\to Y\mapsto f^*:D\mapsto f^{-1}[D]$. Their composites are naturally isomorphic to the identity by $\epsilon_B(b)=[b]$ and $\eta_X(x)=\{D:x\in D\}$.

## Facts & Assumptions

[F1] [[thm-stone-clopen-representation-under-bpi]] gives the isomorphisms $\epsilon_B$ and Stone ultrafilter spaces under BPI.

[F2] [[thm-stone-space-recovered-from-its-clopens]] gives the homeomorphisms $\eta_X$.

[F3] [[def-boolean-homomorphism-and-quotient]] requires homomorphisms to preserve both bounds and every Boolean operation.

## Proof

**Given:** BPI, a Boolean homomorphism $h:B\to C$ and a continuous map $f:X\to Y$ of Stone spaces.

1.1 If $V$ is an ultrafilter of $C$, its inverse image under $h$ contains $1$, excludes $0$, and is upward and meet closed by F3. It decides complements because $h(\neg b)=\neg h(b)$ and $V$ decides complements. Such a proper filter is maximal: adjoining a missing $b$ includes both it and its complement. Thus $h^*(V)$ is an ultrafilter. For each $b$, $(h^*)^{-1}([b])=[h(b)]$, since $b\in h^{-1}[V]$ exactly when $h(b)\in V$. Hence $h^*$ is continuous. Equivalently its character is $\chi_V\circ h$, with this order of composition. [F1, F3, algebra]

1.2 The inverse image of a clopen $D\subseteq Y$ is open by continuity of $f$ and closed because its complement is the inverse image of the open complement of $D$. Preimages preserve intersections, unions, complements and the empty and whole sets. Thus $f^*$ is a Boolean homomorphism. [F3, given, algebra]

2.1 For composable maps $h:B\to C$ and $k:C\to D$, $(k\circ h)^{-1}[V]=h^{-1}[k^{-1}[V]]$, so $(k\circ h)^*=h^*\circ k^*$. The identical preimage computation proves the composition law for continuous maps, and the identity map has identity preimage on every subset. Thus both assignments are contravariant functors on the stated objects. [F1, F2, step 1.1, step 1.2, algebra]

3.1 For $b\in B$, the identity of step 1.1 says $(h^*)^*(\epsilon_B(b))=[h(b)]=\epsilon_C(h(b))$. For $x\in X$ and a clopen $D\subseteq Y$, membership of $D$ in $(f^*)^*(\eta_X(x))$ means $x\in f^{-1}[D]$, equivalently $f(x)\in D$; hence $(f^*)^*\eta_X=\eta_Yf$. These are the two naturality equations, and F1 and F2 make their components isomorphisms. The formulas also apply to empty Stone spaces and trivial algebras whenever the indicated maps exist, since bound preservation is required throughout. QED. [F1, F2, step 1.1, algebra]
