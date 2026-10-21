---
id: lem-relative-function-event-paths-preserve-fixed-extrema
kind: lemma
title: "Relative function-event paths preserve fixed extrema"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-compact-relative-function-paths-have-finitely-many-simple-births
  - lem-compact-relative-function-folds-admit-separated-critical-value-crossings
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. Let $M$ be a compact closed smooth $n$-manifold, $n\ge1$, and let $g_0,g_1:M\to[0,1]$ be Morse functions agreeing on an open neighborhood $N$ of a specified compact set. Suppose the only critical points in $\overline N$ are a fixed finite set $P_-\cup P_+$, where points of $P_-$ are minima of value zero and points of $P_+$ are maxima of value one. Supply common quadratic coordinate models near these points. Suppose $g_j^{-1}(0)=P_-$ and $g_j^{-1}(1)=P_+$, and all the other critical values of each endpoint are distinct. Fix a compact smaller protected neighborhood $A_0\subset N$ containing these critical points in its interior, with a neighborhood on which the common function has no other critical point.

There is a smooth path $g_t$, stationary near its parameter endpoints and fixed on a neighborhood of $A_0$, whose only unprotected events are finitely many simple births/deaths and finitely many transverse crossings of exactly two unprotected Morse critical values, all at distinct parameters. No birth value equals another unprotected critical value. All unprotected critical points and folds lie outside a neighborhood of $A_0$ and have values strictly between zero and one, with a uniform positive margin from both. The protected critical points and models stay fixed; their repeated zero or one values are permitted and are not counted as value-crossing events. If a supplied field descends the common function near $A_0$, it descends every function of this path there.

This extends the noncritical-relative-set function-event construction by an actual excision and gluing argument. It asserts no trajectory genericity or attaching-disk movie.

## Statement references

[[lem-compact-relative-function-paths-have-finitely-many-simple-births]]

[[lem-compact-relative-function-folds-admit-separated-critical-value-crossings]]

## Facts & Assumptions

**Given:** The manifold, endpoint functions, protected neighborhood and common extrema models in the Statement.

[F1] On a compact manifold with boundary contained in a closed noncritical relative set, a smooth stationary-ended path has arbitrarily small perturbations away from that set and its endpoints with a compact critical curve and finitely many simple folds, at distinct parameters. ([[lem-compact-relative-function-paths-have-finitely-many-simple-births]])

[F2] If the endpoint critical values are distinct, a further arbitrarily small perturbation preserves that spatial critical locus and fold models and gives the stated finite separated transverse critical-value event list. ([[lem-compact-relative-function-folds-admit-separated-critical-value-crossings]])

[F3] Smooth compact-set cutoffs exist. ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]])

[A1] Countable Choice is inherited from [F1] and [F2]; all additional excisions, radii and bounds below are finite choices. ([[def-countable-choice]])

## Proof

**Given:** The data in the Statement.

1.1 Choose disjoint closed coordinate balls about the finitely many protected critical points, with closures in the interior of $A_0$ and inside their common quadratic charts. Their boundaries are regular levels of the corresponding radial quadratic function, and a whole annular neighborhood of each boundary is noncritical. Let $M'$ be $M$ minus their open interiors. It is a compact smooth manifold with boundary. The closed set $A=A_0\cap M'$ contains all of $\partial M'$. The common function is noncritical on a neighborhood of $A$ in $M'$, since its only possible critical points there were the centers just excised. The endpoint restrictions are Morse with distinct critical values: their remaining critical points are exactly the unprotected ones. On compact $M'$, both endpoint functions lie strictly between zero and one, because every zero or one was an excised center. Thus there is $\delta>0$ for which $\delta\le g_j\le1-\delta$ on $M'$ for $j=0,1$. [A1, given, construct, choose]

2.1 Choose a smooth scalar cutoff $\rho:[0,1]\to[0,1]$, zero near zero and one near one, and put $G_t=(1-\rho(t))g_0+\rho(t)g_1$ on $M'$. It is stationary near the endpoints and equals the common noncritical function on a neighborhood of $A$. Its values remain in $[\delta,1-\delta]$. Apply [F1] to this ACTUAL compact manifold with boundary and its closed set $A$, and then [F2] to the resulting path. Choose both perturbations so small in uniform norm that their sum is less than $\delta/2$, and supported away from a neighborhood of $A\times[0,1]$ and the endpoint intervals. The result has the finite simple-fold and separated transverse value-crossing list of [F1]–[F2], with every value in $[\delta/2,1-\delta/2]$. No protected critical point is present in this application, so neither supplier is being invoked outside its noncritical-relative-set hypotheses. [F1, F2, F3, step 1.1, construct]

3.1 Glue back each removed ball with its original parameter-independent quadratic function. The perturbed path agrees with that function on an open annulus about the ball boundary, because the entire boundary lies in $A$ and the perturbation vanishes near $A$. Thus the glued path is smooth in space and parameter and fixed on a neighborhood of $A_0$. In each replaced ball its only critical point is its original fixed quadratic center; there is no new critical point in its joining annulus. Every other critical branch and fold lies outside a neighborhood of $A_0$, as the suppliers leave its noncritical remainder fixed. The original protected centers stay at zero or one, while every unprotected critical value has the uniform margin proved in step2.1. Therefore no protected-unprotected equality is possible. Repeated protected values are fixed equalities, not events. The unprotected event list, its finiteness, its distinct parameters and its birth-value exclusions are unchanged by this gluing. Finally a field descending the common function near $A_0$ descends every path member there because the functions are identical there. This proves all assertions. [F1, F2, step 1.1, step 2.1, construct, algebra] ∎
