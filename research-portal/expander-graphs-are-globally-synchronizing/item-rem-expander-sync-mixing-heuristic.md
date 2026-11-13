---
title: Expansion and the distribution of phases in stable states
status: published
research_item: rem-expander-sync-mixing-heuristic
dependency_level: 11
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 4–5, explanation following Theorem 1.2 and Section 1.1; p. 19,
        introduction to Section 3
      statement: The article gives a qualitative explanation in terms of
        phase-dependent over-connection, expander mixing, the half-circle lemma
        and amplification between concentrated and spread-out regimes.
      hypotheses: The discussion concerns stable states of the homogeneous graph
        Kuramoto model and sufficiently strong graph expansion; the overview is
        qualitative and does not specify a standalone numerical spread
        threshold.
      reading_limits: The cited passages of the supplied article text were inspected
        for attribution. They are not used as proof of the quantitative
        consequences below; no independent verification of the complete
        amplification argument is claimed here.
---

PDF p. 4: ` Section 1, explanation following Theorem 1.2 `; PDF p. 5: ` Section 1.1, proof overview `; PDF p. 19: ` Section 3, introduction to mixing lemmas `

## Prerequisites

- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [prop-expander-prereq-centered-bilinear-estimate](item-prop-expander-prereq-centered-bilinear-estimate)
- [prop-expander-sync-stable-hessian](item-prop-expander-sync-stable-hessian)
- [lem-expander-sync-half-circle](item-lem-expander-sync-half-circle)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with $n=|V|>0$, symmetric binary adjacency matrix $A$ and possible self-loops. Let $d^*>0$ and $\alpha\geq0$, and suppose $G$ is an $(n,d^*,\alpha)$-expander: $\|A-(d^*/n)J\|\leq\alpha d^*$, where $J$ is the all-ones matrix and the norm is the Euclidean operator norm. For subsets $X,Y\subseteq V$, write $e(X,Y)=\sum_{x\in X,y\in Y}A_{xy}$; this counts ordered adjacency entries and includes diagonal entries. Then $|e(X,Y)-(d^*/n)|X||Y||\leq\alpha d^*\sqrt{|X||Y|}$. For nonempty $X,Y$, its relative error compared with $(d^*/n)|X||Y|$ is at most $\alpha n/\sqrt{|X||Y|}$.

A phase state assigns an angle modulo $2\pi$ to each vertex. A stable state is a local minimum on the phase torus of $\mathcal E_G(\theta)=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$; it is spurious if its phases are not all equal. At a stable state, $\sum_{x,y}A_{xy}\cos(\theta_x-\theta_y)(1-\cos(\theta_x-\theta_y))\geq0$. Thus the negative contributions from pairs whose cosine is negative must be offset by positive contributions from other pairs. If $G$ is connected, representatives satisfy $\theta_x\in(-\pi/2,\pi/2)$, and $\rho_1=n^{-1}\sum_x e^{i\theta_x}$ is real and nonnegative, the half-circle lemma gives $\theta_x=0$ for every vertex.

These estimates illustrate the article's qualitative explanation: spurious stable states require, in a suitable sense, more connections between similar phases than between disparate phases, while mixing constrains such imbalances for sufficiently large vertex sets. Together with stability conditions, expansion can rule out suitably well-spread states; the half-circle lemma handles a concentrated extreme. The article uses an amplification argument to bridge intermediate distributions. The phrases “sufficiently large”, “suitably well-spread” and “more connections” here describe the method, not separate quantitative hypotheses or an additional theorem.

## Statement references

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)

[def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)

[def-expander-sync-states](item-def-expander-sync-states)

[def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)

[prop-expander-prereq-centered-bilinear-estimate](item-prop-expander-prereq-centered-bilinear-estimate)

[prop-expander-sync-stable-hessian](item-prop-expander-sync-stable-hessian)

[lem-expander-sync-half-circle](item-lem-expander-sync-half-circle)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

[F1] Under the stated centered-adjacency norm bound, the ordered-entry estimate holds for all subsets, including overlapping subsets and diagonal entries ([def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander), [prop-expander-prereq-centered-bilinear-estimate](item-prop-expander-prereq-centered-bilinear-estimate)).

[F2] Under countable choice, the stated stable-state energy has the displayed nonnegative weighted sum ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [def-expander-sync-states](item-def-expander-sync-states), [prop-expander-sync-stable-hessian](item-prop-expander-sync-stable-hessian)).

[F3] Under countable choice, connectedness, the strict half-circle representatives and the stated normalization of $\rho_1$, the half-circle lemma says that every representative is zero ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [lem-expander-sync-half-circle](item-lem-expander-sync-half-circle)).

[F4] For real $t$, $e^{it}=\cos t+i\sin t$ and $|e^{it}|=1$, with $\cos t$ and $\sin t$ real ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

## Proof

**Given:** The graph, parameters, subsets and phase-state hypotheses stated above.

**Goal:** Establish the displayed mixing and stability consequences and the stated half-circle conclusion.

1.1 Apply [F1] to $X$ and $Y$. When both are nonempty, divide its additive error bound by the positive reference value $(d^*/n)|X||Y|$ to obtain the relative bound $\alpha n/\sqrt{|X||Y|}$. Thus the estimate is informative as a relative approximation when this ratio is small; it does not give a uniform multiplicative estimate for arbitrary small sets. [given, F1, algebra]

2.1 By [F2], the displayed weighted sum is nonnegative. By [F4], $\cos^2t+\sin^2t=|e^{it}|^2=1$, so $\cos^2t\leq1$ and hence $\cos t\leq1$. Thus $1-\cos t\geq0$; since $A_{xy}\geq0$, terms with negative cosine are nonpositive and terms with positive cosine are nonnegative, giving the stated offset interpretation. Under the further connectedness, representative and normalization hypotheses, [F3] gives $\theta_x=0$ for all $x$. These consequences establish the precise assertions above; the subsequent description of amplification is a qualitative account of the article's method. [given, F2, F3, F4, algebra] ∎

## Source notes

The qualitative explanation and amplification overview are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pages 4–5 and 19. The exact consequences proved here use the linked mathematical suppliers; the overview itself is not presented as a proof of a quantitative synchronization theorem.
