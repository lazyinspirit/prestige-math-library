---
title: Refined order estimates for regular graphs — Remark 2.7
status: published
research_item: rem-expander-sync-regular-order-bounds
dependency_level: 13
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 11, Section 2.1 standing conventions; pp. 12–16, equations
        (2.8)–(2.12) and Remark 2.7; p. 29, Section 5 opening
      statement: Remark 2.7 asserts the regular-graph bounds X at least 1-2alpha for
        alpha at most 0.1, both Lemma 2.5 conclusions through alpha at most
        0.24585, and average H mass at most 5alpha squared/4. Its final
        mass-bound sentence has no explicit alpha restriction. The printed cubic
        has constant term +4alpha to the fourth.
      hypotheses: Stable state on a finite connected d-regular adjacency spectral
        expander, allowing loops counted once in degree; the first order
        parameter is normalized real and nonnegative.
      reading_limits: Inspected original PDF p. 16 visually, including Remark 2.7 and
        Corollary 2.6; inspected extracted text at Section 2.1 standing
        conventions, the regular inequality (2.9), Lemma 2.5 and its proof, and
        the Section 5 opening and application at alpha 0.0816. This source
        supplies attribution and wording, not a mathematical premise for the
        local proof. No full article or underlying-literature reading claimed;
        the intended inherited range of the final mass-bound sentence is not
        resolved.
---

PDF p. 16: ` Remark 2.7; Section 5 discussion `; PDF p. 29: ` Remark 2.7; Section 5 discussion `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-daido](item-def-expander-sync-daido)
- [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)
- [def-expander-sync-h](item-def-expander-sync-h)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [lem-author-73027818342b-regular-lemma-extension](item-lem-author-73027818342b-regular-lemma-extension)
- [lem-author-73027818342b-regular-small-alpha-mass](item-lem-author-73027818342b-regular-small-alpha-mass)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph, with $n=|V|>0$, symmetric binary adjacency matrix $A$, and self-loops allowed and counted once in each row sum. Suppose every row sum is $d\ge0$, let $\alpha\ge0$, and assume $\|\Delta\|\le\alpha d$, where $\Delta=A-(d/n)J$ and $J$ is the all-ones matrix; the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum on the phase torus of $\mathcal E_G(\theta)=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$. Choose representatives in $(-\pi,\pi]$ after common rotation so that $\rho_1\ge0$ is real, where $\rho_k=n^{-1}\sum_xe^{ik\theta_x}$. Put $X=\rho_1^2$, $r=|\rho_2|$, and $M=n^{-1}\sum_x H(\theta_x)$, where $H(t)=\sin^2|t|$ for $|t|\le\pi/2$ and $H(t)=1$ for $\pi/2\le|t|\le\pi$.

For $0\le\alpha\le0.24585$, one has $\rho_1^2\ge1-3\alpha$, $|\rho_2|\ge1-5\alpha^2$, and $M\le5\alpha^2/4$. For $0\le\alpha\le0.1$, the stronger first bound $\rho_1^2\ge1-2\alpha$ holds. The regular version of the article's bootstrap uses, for $x>0$, $f_{\rm reg}(x,\alpha)=2x+3\alpha-1-(1-2\alpha^2/x)^2$; its associated polynomial is $Q_\alpha(x)=x^2f_{\rm reg}(x,\alpha)=2x^3+(3\alpha-2)x^2+4\alpha^2x-4\alpha^4$. The article prints the last sign as positive; the corrected algebra does not change the quantitative conclusions above.

As a separately attributed assertion, the final sentence of Remark 2.7 gives $n^{-1}\sum_{x\in V}H(\theta_x)\le5\alpha^2/4$ for a $d^*$-regular $(n,d^*,\alpha)$-expander and a stable state $\theta$, under the article's standing connectedness and phase-normalization conventions. That sentence states no explicit restriction on $\alpha$. Its scope beyond $0\le\alpha\le0.24585$ is retained here as a source assertion; the local proof establishes the range-qualified estimates above.

## Facts & Assumptions

[F1] The endpoint extension proves $X\ge1-3\alpha$ and $r\ge1-5\alpha^2$ for $0\le\alpha\le0.24585$ ([lem-author-73027818342b-regular-lemma-extension](item-lem-author-73027818342b-regular-lemma-extension)).

[F2] The regular small-alpha and mass estimates give $X\ge1-2\alpha$ for $\alpha\le0.1$ and $M\le5\alpha^2/4$ throughout $\alpha\le0.24585$ ([lem-author-73027818342b-regular-small-alpha-mass](item-lem-author-73027818342b-regular-small-alpha-mass)).

[F10] Definition or convention used in the Statement: [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation).

[F11] Definition or convention used in the Statement: [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander).

[F12] Definition or convention used in the Statement: [def-expander-sync-states](item-def-expander-sync-states).

[F13] Definition or convention used in the Statement: [def-expander-sync-daido](item-def-expander-sync-daido).

[F14] Definition or convention used in the Statement: [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties).

[F15] Definition or convention used in the Statement: [def-expander-sync-h](item-def-expander-sync-h).

[F16] Definition or convention used in the Statement: [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices).

[F17] Definition or convention used in the Statement: [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order).

[F18] Definition or convention used in the Statement: [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus).

[F19] Definition or convention used in the Statement: [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice).

## Proof

**Given:** The graph, stable normalized state, parameters and notation in the Statement.

**Goal:** Establish the estimates on the explicitly stated parameter ranges and the corrected polynomial identity.

1.1 All graph, stability, rotation and nonnegative-parameter hypotheses agree with those of [F1] and [F2]. Apply [F1] on $0\le\alpha\le0.24585$ to obtain both extended Lemma 2.5 inequalities. Apply [F2] on the same range for the mass estimate and on $0\le\alpha\le0.1$ for the stronger first-parameter estimate. [F1, F2, given]

2.1 For $x>0$, expand the square in the definition of $f_{\rm reg}$ and multiply by $x^2$: $x^2f_{\rm reg}=2x^3+(3\alpha-2)x^2+4\alpha^2x-4\alpha^4$. This proves the asserted polynomial identity. In particular the printed positive constant term is an algebraic transcription error, while the range-qualified quantitative conclusions have been established independently in step 1.1. [given, step 1.1, algebra] ∎

## Source notes

Remark 2.7 on original PDF p. 16 asserts all the estimates retained here. Its printed cubic is $2x^3+(3\alpha-2)x^2+4\alpha^2x+4\alpha^4$. The last sign is a typo: multiplying $2x+3\alpha-1-(1-2\alpha^2/x)^2$ by $x^2$ gives the corrected $Q_\alpha(x)$ in the Statement. This algebraic defect does not refute any order-parameter conclusion. The present proof keeps the source's regular Hessian inequality and pointwise-to-norm method, strengthens the norm step by removing the constant phase-vector component, and supplies a finite rational bootstrap in place of the source's unprovided endpoint root calculation. The source's final sentence attributes $n^{-1}\sum_{x\in V}H(\theta_x)\le5\alpha^2/4$ to the proof of Corollary 2.6 for a $d^*$-regular $(n,d^*,\alpha)$-expander, without an explicit $\alpha$ restriction in that sentence. The preceding sentences discuss $\alpha\le0.1$ and $\alpha\le0.24585$, while Corollary 2.6 itself assumes $\alpha\le1/5$. The unrestricted reading of the final sentence is therefore preserved as attributed coverage, with its intended inherited range left unspecified. The local mass estimate is established for $0\le\alpha\le0.24585$, including the later application $\alpha=0.0816$. The broader reading is neither established nor refuted here, and no failure of an order-parameter or synchrony conclusion is inferred.
