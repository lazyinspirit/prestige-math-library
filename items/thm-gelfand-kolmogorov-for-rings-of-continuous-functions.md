---
id: thm-gelfand-kolmogorov-for-rings-of-continuous-functions
kind: theorem
title: Gelfand-Kolmogorov for rings of continuous functions
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters, lem-zero-set-ultrafilters-and-stone-cech-points, def-zero-set-filter-and-zero-set-ultrafilter, thm-stone-cech-evaluation-closure-universal-property, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "L. Gillman, M. Henriksen and M. Jerison, On a Theorem of Gelfand and Kolmogoroff Concerning Maximal Ideals in Rings of Continuous Functions (1954) — §2, Theorem 1 and fixed-ideal consequences, pp. 448–449. This endpoint was inaccessible in the current run; the exact local proof and failed recovery record are in the Batch 4 coverage ledger."
      url: "https://scispace.com/pdf/on-a-theorem-of-gelfand-and-kolmogoroff-concerning-maximal-25sdibbtka.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a Tychonoff
space with Stone–Čech compactification $\beta X$
([[thm-stone-cech-evaluation-closure-universal-property]]) and let $C(X) =
C(X,\mathbb R)$ be the ring of all continuous real functions with pointwise
operations ([[def-zero-set-filter-and-zero-set-ultrafilter]]). For $p \in \beta X$
put

$$M_p \;:=\; \{\,f \in C(X) : p \in \overline{Z(f)}^{\,\beta X}\,\}.$$

Then:

1. the maximal ideals of $C(X)$ are exactly the ideals $M_p$, with $p \in \beta X$
   uniquely determined by the ideal;
2. $M_p$ is a **fixed** ideal — that is, $M_p = \{f : f(x) = 0\}$ for some
   $x \in X$ — if and only if $p \in X$; for $p \in X$ one has
   $M_p = \{f : f(p) = 0\}$, and for $p \in \beta X \setminus X$ the ideal $M_p$
   is free.

No topology is minted on the maximal ideal space here; the statement is the
bijection and the fixed/free dichotomy. Arbitrary unbounded real functions are
never extended to $\beta X$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Tychonoff space $X$, its Stone–Čech compactification $\beta X$, and the ring $C(X)$ of all continuous real functions.

[L1] The assignments $M \mapsto \mathcal Z[M] = \{Z(f) : f \in M\}$ and $\mathcal U \mapsto M_{\mathcal U} = \{f : Z(f) \in \mathcal U\}$ are mutually inverse bijections between maximal ideals of $C(X)$ and z-ultrafilters on $X$ ([[lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters]]).

[L2] The map $p \mapsto \mathcal U_p = \{Z : p \in \overline{Z}^{\,\beta X}\}$ is a bijection from $\beta X$ onto the set of z-ultrafilters on $X$; in particular $p = q$ whenever $\mathcal U_p = \mathcal U_q$ ([[lem-zero-set-ultrafilters-and-stone-cech-points]]).

[L3] For $p \in \beta X$ the ideal $M_p$ of the statement equals $M_{\mathcal U_p}$, since $Z(f)$ ranges over all zero sets: $f \in M_p$ iff $Z(f) \in \mathcal U_p$; consequently $\mathcal Z[M_p] = \mathcal U_p$ ([[lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters]], [[def-zero-set-filter-and-zero-set-ultrafilter]]).

[L4] For $x \in X$ and $f \in C(X)$: $x \in \overline{Z(f)}^{\,\beta X} \cap X$ if and only if $x \in Z(f)$, because $Z(f)$ is closed in $X$ and $X$ carries the subspace topology ([[def-zero-set-filter-and-zero-set-ultrafilter]]).

## Proof

**Proof technique:** direct.

1.1 For $x \in X$ the ideal $M_x = \{f : Z(f) \ni x\} = \{f : f(x) = 0\}$ is a maximal ideal, and $\mathcal Z[M_x] = \mathcal U_x := \{Z : x \in Z\}$: maximality follows from [L1] applied to the z-ultrafilter $\mathcal U_x$ (a family of zero sets containing $x$, closed under finite intersections and upward closed, and maximal because any zero set either contains $x$ or is disjoint from $\{x\}$), and the displayed identity for $M_x$ uses [L4]. [L1, L4, algebra]

1.2 For every $p \in \beta X$ the ideal $M_p$ is maximal: by [L3] $M_p = M_{\mathcal U_p}$ with $\mathcal U_p$ a z-ultrafilter, and [L1] says that $M_{\mathcal U_p}$ is maximal. [L1, L3]

1.3 Every maximal ideal of $C(X)$ is of the form $M_p$ for a unique $p \in \beta X$: if $M$ is maximal, then $\mathcal U := \mathcal Z[M]$ is a z-ultrafilter by [L1], and by [L2] there is a unique $p$ with $\mathcal U = \mathcal U_p$; then $M = M_{\mathcal U} = M_{\mathcal U_p} = M_p$ by [L1] and [L3], and uniqueness of $p$ follows from [L2] applied to $\mathcal Z[M] = \mathcal U_p$. [1.2, L1, L2, L3]

1.4 If $p \in X$ then $M_p$ is the fixed ideal $\{f : f(p) = 0\}$: by [L4], $f \in M_p$ iff $p \in \overline{Z(f)}\cap X$ iff $p \in Z(f)$ iff $f(p) = 0$. [1.1, L4, algebra]

2.1 If $p \in \beta X \setminus X$ then $M_p$ is not fixed: suppose $M_p = \{f : f(x) = 0\}$ for some $x \in X$, that is, $M_p = M_x$ with the notation of [step 1.1]; applying the bijection of [L1] to both sides gives $\mathcal Z[M_p] = \mathcal Z[M_x]$, that is, $\mathcal U_p = \mathcal U_x$ by [L3] and [step 1.1], so $p = x$ by [L2], contradicting $p \notin X$. Hence $M_p$ is free for $p \notin X$. [step 1.1, step 1.4, L1, L2, L3]

3.1 Claims 1 and 2 are proved: [step 1.3] gives the maximal ideals as the uniquely indexed $M_p$, [step 1.4] gives the fixed form for $p \in X$, and [step 2.1] shows no ideal $M_p$ with $p \notin X$ is fixed. [step 1.3, step 1.4, step 2.1] ∎

## Remarks

- **The dichotomy is purely point-theoretic.** The result says that the ring $C(X)$ determines $\beta X$ and detects the subspace $X \subseteq \beta X$; it does not by itself reconstruct the topology of $X$ from the ring, which would require the hull-kernel topology on the maximal ideal space and is not claimed here.
- **Unbounded functions are not evaluated at infinity.** Both $M_p$ for $p \notin X$ and the definition of $\mathcal U_p$ use only zero sets and closures in $\beta X$; no value $f(p)$ is defined for $f \in C(X)$.
