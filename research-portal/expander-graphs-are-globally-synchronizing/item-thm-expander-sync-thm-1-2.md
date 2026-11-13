---
title: Erdős–Rényi global synchronization — Theorem 1.2
status: published
research_item: thm-expander-sync-thm-1-2
dependency_level: 11
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: Original PDF p. 4, Theorem 1.2; p. 8, proof of Theorem 1.2 and Theorem
        1.10
      statement: For every fixed $\varepsilon>0$ and every sequence
        $p(n)\ge(1+\varepsilon)\log n/n$, $G(n,p)$ is globally synchronizing
        with probability tending to one.
      hypotheses: Loop-free independent-edge G(n,p), p(n) in [0,1], epsilon fixed and
        positive, asymptotic limit n tending to infinity. This record attributes
        the original theorem only.
      reading_limits: Read the original extracted Theorem 1.2 and its proof; inspected
        original PDF images pp. 4 and 8. This citation attributes the claim and
        original strategy only. The new random-expansion argument uses the
        independent 2016 source and local helpers; no original-article result
        supplies its own prerequisite.
---

PDF p. 1: ` Abstract; Theorem 1.2; proof on p. 8 `; PDF p. 4: ` Abstract; Theorem 1.2; proof on p. 8 `; PDF p. 8: ` Abstract; Theorem 1.2; proof on p. 8 `

## Prerequisites

- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)
- [thm-expander-sync-thm-1-10](item-thm-expander-sync-thm-1-10)
- [lem-author-4a6b79e2d031-uniform-two-sided-expansion](item-lem-author-4a6b79e2d031-uniform-two-sided-expansion)
- [lem-author-4a6b79e2d031-vanishing-numerical-condition](item-lem-author-4a6b79e2d031-vanishing-numerical-condition)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded)
- [math:cor-integral-logarithm-is-strictly-increasing](https://alphabetamath.cc/item/cor-integral-logarithm-is-strictly-increasing)
- [math:cor-integral-logarithm-agrees-with-natural-logarithm](https://alphabetamath.cc/item/cor-integral-logarithm-agrees-with-natural-logarithm)


## Statement

Assume countable choice. For every fixed $\varepsilon>0$ and every sequence $p=p(n)\in[0,1]$ with $p\ge(1+\varepsilon)(\log n)/n$ eventually, a graph drawn from $G(n,p)$ is globally synchronizing with probability tending to one as $n\to\infty$.

## Facts & Assumptions

[F1] The model and global-synchrony meaning are [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi) and [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony). Countable choice is [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice).

[F2] The expander predicate and its centered-matrix conventions are [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander). The positive-reference spectral criterion [thm-expander-sync-thm-1-10](item-thm-expander-sync-thm-1-10) applies when $d^*>0$, $c^->-1$, $0<\alpha\le1/5$ and its displayed numerical expression is below one.

[F3] Uniform expansion with $d^*=np$, $\alpha=(np)^{-1/4}$, fixed $c^->-1$ and fixed $c^+>0$ is [lem-author-4a6b79e2d031-uniform-two-sided-expansion](item-lem-author-4a6b79e2d031-uniform-two-sided-expansion). The numerical limit is [lem-author-4a6b79e2d031-vanishing-numerical-condition](item-lem-author-4a6b79e2d031-vanishing-numerical-condition).

[F4] The integral logarithm $L$ is unbounded above ([math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded)) and strictly increasing on $(0,\infty)$ ([math:cor-integral-logarithm-is-strictly-increasing](https://alphabetamath.cc/item/cor-integral-logarithm-is-strictly-increasing)), and $L(x)=\log x$ for every $x>0$ ([math:cor-integral-logarithm-agrees-with-natural-logarithm](https://alphabetamath.cc/item/cor-integral-logarithm-agrees-with-natural-logarithm)).

## Proof

**Given:** A fixed $\varepsilon>0$, an admissible sequence $p(n)$, and countable choice.

**Goal:** Prove that the synchronization probability tends to one.

1.1 Set $\gamma_0=1+\varepsilon$ and $d=np$. The uniform expansion result [F3] supplies fixed $a,b,\eta>0$, $c^-=a/2-1\in(-1,0)$ and $c^+=b>0$, with an expander event of probability at least $1-Kd^{-1/4}-n^{-\eta}-n^{-2}$. For every $M\in\mathbb R$, [F4] supplies $x>0$ with $L(x)>M$; every positive integer $n\ge x$ then satisfies $\log n=L(n)\ge L(x)>M$. Hence $\log n\to\infty$, so $d\ge\gamma_0\log n\to\infty$ and $d>0$ eventually. Thus the expander event has probability tending to one along this arbitrary sequence. [F1, F2, F3, F4, given]

2.1 Apply the numerical-limit lemma in [F3] to these fixed $c^\pm$. Eventually $0<\alpha=d^{-1/4}\le1/5$ and the spectral criterion's numerical expression is strictly below one. All hypotheses of [F2], including positive reference degree, now hold on the expander event. [F2, F3, step 1.1]

3.1 By [F2], every graph in that event is globally synchronizing under the assumed countable choice. The synchronization probability is therefore at least the probability in step 1.1, which tends to one. This proves the complete fixed-$\varepsilon$ statement, including varying density and $p=1$. [F1, F2, step 1.1, step 2.1] ∎

## Source notes

The theorem statement is attributed to the original article, Theorem 1.2 on PDF p. 4. Its proof on p. 8 applies Theorem 1.10 after the constant-two estimate in Corollary 6.1. The local proof preserves that deterministic reduction and uses the declared uniform-expansion helpers, whose centered-adjacency input is based on an independent Bandeira–van Handel (2016) norm estimate. It needs only a vanishing relative adjacency error. The local argument establishes the synchronization conclusion separately from the article's constant-two estimate.
