---
id: def-zero-set-filter-and-zero-set-ultrafilter
kind: definition
title: Zero set filter and zero set ultrafilter
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-completely-regular-and-tychonoff-spaces, def-zero-sets-and-cozero-sets]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "L. Gillman, M. Henriksen and M. Jerison, On a Theorem of Gelfand and Kolmogoroff Concerning Maximal Ideals in Rings of Continuous Functions (1954) — §1, pp. 447–448. This endpoint was inaccessible in the current run; the exact local alternative and failed recovery record are in the Batch 4 coverage ledger."
      url: "https://scispace.com/pdf/on-a-theorem-of-gelfand-and-kolmogoroff-concerning-maximal-25sdibbtka.pdf"
---

## Definition

Let $X$ be a Tychonoff space ([[def-completely-regular-and-tychonoff-spaces]])
and let $\mathbb R$ carry its usual topology. Put

$$C(X) \;:=\; C(X,\mathbb R),$$

the **ring of all continuous real-valued functions** on $X$ with pointwise
addition and multiplication. No boundedness and no norm is assumed: functions in
$C(X)$ may be unbounded, and $C(X)$ is not treated as a Banach algebra anywhere
on this page. For $f \in C(X)$ let

$$Z(f) \;:=\; f^{-1}[\{0\}] \;=\; \{\,x \in X : f(x) = 0\,\}$$

be the **zero set** of $f$ ([[def-zero-sets-and-cozero-sets]]), and call a subset
of $X$ *a zero set of $X$* when it is $Z(f)$ for some $f \in C(X)$. Write
$\mathcal Z(X)$ for the family of all zero sets of $X$.

A **z-filter** on $X$ is a family $\mathcal F \subseteq \mathcal Z(X)$ of zero
sets with

1. $X \in \mathcal F$;
2. $\emptyset \notin \mathcal F$;
3. $\mathcal F$ is closed under finite intersections: if $Z, Z' \in \mathcal F$
   then $Z \cap Z' \in \mathcal F$;
4. $\mathcal F$ is upward closed *inside* $\mathcal Z(X)$: if $Z \in \mathcal F$
   and $Z \subseteq Z'$ with $Z' \in \mathcal Z(X)$, then $Z' \in \mathcal F$.

A **z-ultrafilter** on $X$ is a z-filter that is maximal among z-filters with
respect to inclusion: a z-filter $\mathcal U$ such that every z-filter
$\mathcal G \supseteq \mathcal U$ satisfies $\mathcal G = \mathcal U$.

Two elementary facts about $\mathcal Z(X)$ are used repeatedly and are recorded
here rather than reproved each time:

- $\mathcal Z(X)$ is closed under finite intersections, because
  $Z(f) \cap Z(g) = Z(f^2+g^2)$ for all $f,g \in C(X)$; in particular
  $Z(f) \cap Z(g)$ is again a zero set and the condition 3 of a z-filter is not
  vacuous. Similarly $X = Z(0)$ and $\emptyset = Z(1)$ are zero sets, so the
  conditions 1 and 2 are meaningful.
- If $Z(f) \subseteq Z(g)$, no algebraic formula for $g$ in terms of $f$ is
  claimed; inclusions of zero sets are handled through maximal ideals in
  [[lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters]].

## Remarks

- **Why zero sets and not arbitrary closed sets.** Arbitrary closed sets are
  also closed under finite intersections.  What is special here is that the
  intersection remains represented by continuous functions through the
  explicit identity $Z(f)\cap Z(g) = Z(f^2+g^2)$; this function-theoretic
  representation is what connects z-filters to ideals of $C(X)$.
- **Source status.** The historical target
  (the neighbouring deferral is recorded as a remark on the companion examples
  page) was inaccessible in this run, and the failed recovery record is in
  the Batch 4 coverage ledger. This definition and its consumers
  ([[lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters]],
  [[lem-zero-set-ultrafilters-and-stone-cech-points]],
  [[thm-gelfand-kolmogorov-for-rings-of-continuous-functions]]) are complete
  local proofs, not source citations.
