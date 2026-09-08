---
id: lem-open-dense-and-closed-nowhere-dense-baire-forms-are-equivalent-in-zf
kind: lemma
title: "Open-dense and closed-nowhere-dense Baire forms are equivalent in ZF"
status: draft
origin: pipeline
deps: [def-complete-metric-baire-principle-over-zf, cor-distributive-and-de-morgan-laws-for-indexed-families, thm-metric-closure-characterisation, thm-metric-open-set-algebra, def-metric-interior-closure-boundary, def-metric-topology]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Miller, Lecture notes on set theory without choice; Definitions 4.2\u20134.4, p.8; Proposition 5.4(2), p.10"
      url: https://people.math.wisc.edu/~awmille1/old/m873-08/ac.pdf
    - title: "Karagila, Zornian Functional Analysis, Definition 4 and Chapter 2, pp. 4–5, 8–11"
      url: https://karagila.org/wp-content/uploads/2016/10/axiom-of-choice-in-analysis.pdf
---

## Statement

For any metric space $(X,d)$, the following are equivalent in ZF, with the
category conventions of [[def-complete-metric-baire-principle-over-zf]]:

1. Every $\omega$-indexed intersection of open dense sets is dense.
2. Every union of a $\omega$-indexed sequence of closed nowhere dense sets has empty interior.
3. Every nonempty open subset of $X$ is nonmeagre in the ambient space $X$.
4. Every comeagre subset of $X$ is dense.

For any $D\subseteq X$, density is equivalent to meeting every nonempty open
set, and to $\operatorname{int}(X\setminus D)=\varnothing$.

## Facts & Assumptions

**Given:** A metric space $(X,d)$; all complements and closures are relative to $X$.

[F1] Meagreness is witnessed by containment in one sequence of nowhere dense sets; comeagre means meagre complement ([[def-complete-metric-baire-principle-over-zf]]).

[F2] Indexed De Morgan laws apply to a nonempty index set, in particular $\omega$ ([[cor-distributive-and-de-morgan-laws-for-indexed-families]]).

[F3] Closure is the smallest closed superset, including for the empty set; a set is closed exactly when it equals its closure ([[thm-metric-closure-characterisation]]).

[F5] Density, closure and interior have their metric ball definitions ([[def-metric-interior-closure-boundary]]). Open sets contain a ball about each point and closed sets have open complement ([[def-metric-topology]]).

[F4] Metric balls are open, and finite intersections of open sets are open ([[thm-metric-open-set-algebra]]).

## Proof

1.1 From the ball definition of closure, $D$ is dense precisely when every ball about every point meets $D$. This is equivalent to meeting every nonempty open set: a point of such an open set has a ball inside it; conversely each ball is itself nonempty and open. It follows that $D$ is dense exactly when $\operatorname{int}(X\setminus D)=\varnothing$, since a nonempty open subset of the complement is exactly an open set disjoint from $D$. [F4, F5, given]

2.1 If $F$ is closed, $\overline F=F$, so $F$ is nowhere dense exactly when $\operatorname{int}(F)=\varnothing$, exactly when $X\setminus F$ is dense. Its complement is open by closedness. Conversely, if $U$ is open dense, $F=X\setminus U$ is closed and has empty interior by the preceding test, hence is nowhere dense. [F1, F3, F5, step 1.1]

2.2 Assume (2). If a nonempty open $V$ were meagre, fix its one witness $V\subseteq\bigcup_n N_n$. Put $F_n=\overline{N_n}$ by the uniquely specified closure operation. Each $F_n$ is closed and has empty interior by nowhere density of $N_n$; by closedness its own closure equals itself. Thus the $F_n$ are closed nowhere dense. But $V\subseteq\bigcup_n F_n$ makes that union's interior nonempty, contradicting (2). This proves (3). The family of closures is defined from the given witness, without choosing decompositions. [F1, F3, step 1.1]

2.3 Assume (3), and let $(F_n)$ be closed nowhere dense. If its union had nonempty interior $V$, this open set would be meagre, witnessed by the very sequence $(F_n)$, contrary to (3). Thus (2) follows. [F1, step 1.1]

2.4 Assume (3), and let $C$ be comeagre. If $C$ were not dense, the open-set test would give a nonempty open $V\subseteq X\setminus C$. A meagre witness for $X\setminus C$ also covers $V$, contradicting (3). Thus (4) follows. Conversely assume (4). If a nonempty open $V$ were meagre, $X\setminus V$ would be comeagre and hence dense, yet disjoint from $V$, a contradiction. Thus (4) implies (3). [F1, step 1.1]

3.1 Apply these complement correspondences term by term. For each sequence of closed nowhere dense $F_n$, the $U_n=X\setminus F_n$ are open dense and $X\setminus\bigcup_n F_n=\bigcap_n U_n$. The union has empty interior exactly when this intersection is dense. Conversely, starting with any sequence of open dense $U_n$ and taking its closed nowhere dense complements gives the same identity. Thus (1) and (2) imply each other; the De Morgan index set is $\omega\ne\varnothing$. [F2, step 1.1, step 2.1]

4.1 These implications prove all four equivalences. They also cover $X=\varnothing$: every set and every union or intersection under consideration is empty, hence dense with empty interior, and there is no nonempty open set. No choice axiom or completeness hypothesis was used. [step 3.1, step 2.2, step 2.3, step 2.4] ∎
