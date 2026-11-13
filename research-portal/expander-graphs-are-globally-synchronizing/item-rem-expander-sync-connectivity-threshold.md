---
title: Classical Erdős–Rényi connectivity threshold
status: published
research_item: rem-expander-sync-connectivity-threshold
dependency_level: 3
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 30–31, Section 6 opening; PDF p. 4, Section 1 random graph
        paragraph
      statement: For p=(log n+c_n)/n, the article states the three connectivity limits
        according as c_n tends to negative infinity, a finite real c, or
        positive infinity.
      hypotheses: G(n,p) has independently present edges of common probability p, and
        n tends to infinity.
      reading_limits: The indicated passages in the supplied article text were
        inspected for attribution. The article citation is not used to prove the
        claim.
---

PDF p. 30: ` Section 6 opening connectivity formula `; PDF p. 31: ` Section 6 opening connectivity formula `; PDF p. 4: ` Section 1 random graph paragraph `

## Prerequisites

- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [thm-expander-prereq-connectivity-window-input](item-thm-expander-prereq-connectivity-window-input)


## Statement

Let $c_n$ be a real sequence such that $p_n=(\log n+c_n)/n\in[0,1]$ for all sufficiently large $n$. In $G(n,p_n)$, a graph is connected when every two vertices are joined by a path. As $n\to\infty$, $\mathbb P(G(n,p_n)\text{ is connected})$ tends to $0$ if $c_n\to-\infty$, to $e^{-e^{-c}}$ if $c_n\to c\in\mathbb R$, and to $1$ if $c_n\to+\infty$.

Here $G(n,p_n)$ is the simple graph on $\{1,\ldots,n\}$ in which each possible edge is present independently with probability $p_n$. Limits are along the positive integers; the probability spaces may vary with $n$.

## Facts & Assumptions

**Given:** The sequence and graph law in the Statement.

**Goal:** Establish the three asserted limits of connectivity probability.

[F1] The stated graph law is the independent-edge Erdős–Rényi model ([def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)), and connectedness means that the nonempty graph has a path between every pair of vertices ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

[F2] Sequence convergence is understood as $n\to\infty$, with probability spaces allowed to vary with $n$ ([def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[F3] For the independent-edge graph with $p=(\log n+c_n)/n\in[0,1]$, the connectivity probability has precisely the three limits stated above ([thm-expander-prereq-connectivity-window-input](item-thm-expander-prereq-connectivity-window-input)).

## Proof

**Proof technique:** direct.

1.1 By [F1], the graph in the Statement has the independent-edge law and the connectedness convention used in [F3]. Since only sufficiently large $n$ affect the limits in [F2], the eventual condition $p_n\in[0,1]$ supplies the probability-range hypothesis of [F3] on the relevant tail. [F1, F2, F3]

2.1 Apply [F3] to that tail. Its cases $c_n\to-\infty$, $c_n\to c\in\mathbb R$, and $c_n\to+\infty$ yield respectively $0$, $e^{-e^{-c}}$, and $1$. Thus all three stated limits follow. [F2, F3, step 1.1] ∎

## Source attribution

The article states this connectivity formula at the opening of Section 6 and identifies $\log n/n$ as the connectivity threshold in its introduction. The citation records attribution; the argument above uses the independent supplier [F3].
