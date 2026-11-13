---
title: Ramanujan graph convention used in the article
status: published
research_item: def-expander-sync-ramanujan
dependency_level: 4
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 7, Section 1.3, paragraph after Remark 1.5; PDF p. 28, Section 5
        opening
      statement: The article calls d-regular (n,d,alpha)-expanders with alpha = 2
        sqrt(d-1)/d Ramanujan graphs.
      hypotheses: A d-regular graph and the article's centered adjacency definition of
        an (n,d,alpha)-expander; the displayed parameter requires positive d.
      reading_limits: The supplied extracted article text at the cited passages was
        inspected for attribution. The article is not used as a proof of the
        spectral equivalence.
---

PDF p. 7: ` Section 1.3, paragraph after Remark 1.5 `; PDF p. 28: ` Section 5 `

## Prerequisites

- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)


## Definition

Let $G=(V,E)$ be a finite undirected graph with $n=|V|>0$ vertices, with at most one edge between each pair and with self-loops allowed. Its adjacency matrix $A$ has $A_{xy}=1$ when $x$ and $y$ are adjacent and $0$ otherwise; a diagonal entry records a self-loop. The degree of a vertex is its row sum, so a loop counts once. Suppose $G$ is $d$-regular, meaning that every row sum is the same positive integer $d$.

Write $J$ for the all-ones matrix. In the convention used in the article, $G$ is a **$d$-regular Ramanujan graph** when it is an $(n,d,\alpha)$-expander for $\alpha=2\sqrt{d-1}/d$: explicitly, $\|A-(d/n)J\|_{\mathrm{op}}\le 2\sqrt{d-1}$. Here the operator norm is induced by the Euclidean norm on $\mathbb C^V$.

Equivalently, choose an orthonormal eigenbasis of $A$ beginning with the constant unit vector $\mathbf1/\sqrt n$, and call the remaining eigenvalues, counted with multiplicity, $\lambda_2,\ldots,\lambda_n$. The condition is $|\lambda_i|\le 2\sqrt{d-1}$ for every $i\ge2$. When $n=1$ this last condition is vacuous. In particular, any additional eigenvalue $d$ and any eigenvalue $-d$ are included among the eigenvalues tested.

## Definition references

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)

[prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)

## Justification

The graph convention gives a finite symmetric adjacency matrix and an unambiguous positive degree $d$ for the stated regular graph ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)). Since $n$ and $d$ are positive and $d$ is an integer, $2\sqrt{d-1}/d$ is a well-defined nonnegative real number. The expander definition gives a well-defined centered operator norm and requires that norm to be at most $\alpha d$; substituting this value of $\alpha$ gives the displayed inequality ([def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)).

The regular-spectrum proposition applies because $A$ is real symmetric, nonnegative, and has every row sum equal to $d>0$. It identifies the centered norm with the largest absolute eigenvalue on the subspace orthogonal to constants, including multiplicities and any further $d$ or $-d$ eigenvalues. It also states that this norm is zero when $n=1$. Thus the eigenvalue condition is equivalent to the displayed inequality and the predicate is well defined ([prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)).

## Source notes

The terminology and parameter are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Section 1.3 and the opening of Section 5. The spectral equivalence is justified by the separately stated proposition above.
