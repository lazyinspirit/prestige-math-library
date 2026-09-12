---
id: "lem-compact-cw-images-have-finite-cell-support-without-choice"
kind: "lemma"
title: "Compact CW images have finite cell support without choice"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-cw-complex-with-closure-finiteness-and-weak-topology","def-skeleta-cw-subcomplex-and-relative-cw-complex","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-closed-subspace-of-a-compact-space-is-compact","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness","thm-extreme-value-metric"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Appendix A, Proposition A.1 and its finite-subcomplex
        consequence; canonical coordinate selection replaces the usual
        unspecified point family
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $K$ be a compact topological space and $f:K\to X$ continuous, where $X$ is a CW complex with its characteristic maps supplied as part of the CW structure. Then $f(K)$ lies in a finite CW subcomplex of $X$. No AC or countable choice is used, even when the cells of $X$ form an arbitrary set and their dimensions are unbounded.

## Facts & Assumptions

[F1] [[def-cw-complex-with-closure-finiteness-and-weak-topology]] supplies Hausdorffness, characteristic disks homeomorphic on their interiors to open cells, closure finiteness, and the test for closed sets on every closed cell. [[def-skeleta-cw-subcomplex-and-relative-cw-complex]] specifies the subcomplex condition.

[F2] [[thm-compact-subset-of-a-hausdorff-space-is-closed]] makes a compact subset of $X$ closed, without choice.

[F3] [[thm-closed-subspace-of-a-compact-space-is-compact]] makes closed subsets of compact spaces compact, without choice.

[F4] [[thm-heine-borel-rn]] proves compactness of finite-dimensional closed bounded balls without choice. [[thm-compactness-agrees-with-metric-compactness]] identifies that compactness with topological compactness.

[F5] [[thm-extreme-value-metric]] gives an attained minimum for each continuous real coordinate on a nonempty compact metric space, without choice.

## Proof

**Given:** $K,f,X$ as in the statement. Let $L=f(K)$. The empty CW subcomplex is permitted.

1.1 The image $L$ is compact in the open-cover sense. Indeed, the inverse images of any open cover of $L$ cover $K$; a finite subcover of $K$ yields a finite subcover of $L$ by the same covering members. This argument does not impose a metric on the target. Since $X$ is Hausdorff, [F2] makes $L$ closed in $X$. [F1, F2, given]

1.2 Every nonempty compact subset $T\subseteq\mathbb R^d$ has a uniquely specified lexicographically least point. For $d\ge1$, minimize its first coordinate using [F5] and restrict to the minimum level set. That set is nonempty, closed in $T$ and compact by [F3]. Minimize the next coordinate on it and continue through the finite ordered coordinate set. After $d$ steps all coordinates are fixed, and the nonempty final set is a singleton. Each minimum value and each level set is unique; no minimizing point is selected until the final singleton. For $d=0$, the sole possible nonempty subset of $\mathbb R^0$ is already a singleton. This is a finite prescription defined for every such $T$, not a family of arbitrary existential choices. [F3, F4, F5, given]

2.1 Let $e$ be a positive-dimensional open cell meeting $L$, with characteristic map $\chi_e:D^d\to X$. For $r\ge0$ let $B_{d,r}$ be the concentric closed ball of radius $1-1/(r+2)$ in $D^d$. These balls exhaust its interior. Thus some $B_{d,r}$ meets $\chi_e^{-1}(L)$; let $r_e$ be the least such integer. The set $$T_e=B_{d,r_e}\cap\chi_e^{-1}(L)$$ is a nonempty compact subset of $\mathbb R^d$: it is closed in the compact ball by step 1.1, continuity and [F3], [F4]. Let $v_e$ be its uniquely specified point from step 1.2 and set $x_e=\chi_e(v_e)\in L\cap e$. For an occupied zero-cell use that point itself. The least integer, the finite sequence of coordinate minima, and the supplied characteristic map specify $x_e$ uniquely for every occupied cell; the resulting function is defined by this formula on the set of occupied cells. [F1, F3, F4, step 1.1, step 1.2]

3.1 Put $S=\{x_e:e\cap L\ne\varnothing\}$. Distinct occupied cells give distinct points, since their interiors are disjoint. For every subset $T\subseteq S$ and every closed cell $\overline a$, closure finiteness in [F1] says that $\overline a$ meets only finitely many open cells. Hence $T\cap\overline a$ is finite, with at most one point from each of those cells. A finite subset of a Hausdorff space is closed: singleton complements are open by the Hausdorff separation axiom, and finite unions of closed sets are closed. The weak topology in [F1] now makes $T$ closed in $X$. In particular $S$ is closed in $X$, hence closed in the compact $L$. By [F3], $S$ is compact. [F1, F3, step 1.1, step 2.1]

4.1 For $s\in S$, the set $S\setminus\{s\}$ is closed in $X$ by step 3.1. Its complement intersects $S$ in $\{s\}$, so $S$ is discrete. Its singleton cover is an open cover of $S$ and therefore has a finite subcover. Thus $S$ is finite, without first extracting a countably infinite subset from an arbitrary infinite set. The bijection $e\mapsto x_e$ from occupied cells to $S$ shows that only finitely many cells meet $L$. [step 2.1, step 3.1]

5.1 If there are occupied cells, start with their finite set. Add every cell meeting the boundary of a cell already in the set, and repeat downward in dimension. At each stage only finitely many cells are added by closure finiteness [F1]. A cell boundary lies in the preceding skeleton, so the dimensions strictly decrease along every newly required boundary chain. The finite starting set has a maximum dimension $N$, and after at most $N$ such downward stages no more are required. The union of these cells contains the entire closure of each member, hence is a finite CW subcomplex by [F1]. It contains $L$, because every point of $L$ belongs to an occupied open cell. [F1, step 4.1]

6.1 If $K$ or $L$ is empty, the empty subcomplex suffices and no minima are taken. For a point image, the closure process starts at its one occupied cell; it need not itself be a zero-cell. Zero-dimensional cells and the zero-dimensional Euclidean coordinate space were handled without a norm or empty-coordinate minimum. The radii in step 2.1 are strictly between zero and one and approach one, so all chosen preimages lie in cell interiors and no boundary point is mistaken for a point of that open cell. Nonregular characteristic maps cause no problem, since only their interior restrictions are used for the selected points. Steps 1.2 and 2.1 specify every selection uniquely, while steps 4.1 and 5.1 use compactness and finite closure operations; no AC is used anywhere. [step 1.2, step 2.1, step 4.1, step 5.1] ∎
