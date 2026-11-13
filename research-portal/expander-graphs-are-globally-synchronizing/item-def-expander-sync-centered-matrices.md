---
title: Centered graph matrices and reference degree
status: published
research_item: def-expander-sync-centered-matrices
dependency_level: 2
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 6, Section 1.2
      statement: The article defines the three centered matrices, describes its
        reference parameter as an expected average degree, and chooses d* = d
        for a d-regular graph and d* = pn for G(n,p).
      hypotheses: A graph on n vertices, with adjacency matrix A, degree matrix D and
        Laplacian L = D - A; n is positive for the displayed division by n.
      reading_limits: Section 1.2 was inspected in the supplied article text and the
        original PDF page 6 image. This reference attributes the notation,
        description and choices; the justification is local.
---

PDF p. 6: ` Section 1.2 `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [prop-expander-prereq-constant-projection](item-prop-expander-prereq-constant-projection)
- [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)
- [math:thm-linearity-of-expectation](https://alphabetamath.cc/item/thm-linearity-of-expectation)


## Definition

Let $G=(V,E)$ be a finite undirected graph with $n=|V|>0$, adjacency matrix $A$, degree matrix $D$, and graph Laplacian $L=D-A$, using the conventions of [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation). Thus $D_{xx}=\sum_y A_{xy}$ and a self-loop contributes once to this sum. Let $I$ be the identity matrix and $J$ the all-ones matrix. For a real reference parameter $d^*$, define the **centered adjacency matrix** $\Delta_A=A-(d^*/n)J$, the **centered diagonal degree matrix** $\Delta_D=D-d^*I$, and the **centered Laplacian matrix** $\Delta_L=\Delta_D-\Delta_A=L-d^*I+(d^*/n)J$.

The article describes its intended selection of $d^*$ as an “expected average degree” of $G$. The article chooses $d^*=d$ when $G$ is $d$-regular, meaning every vertex has degree $d$. For the Erdős–Rényi graph $G(n,p)$, whose distinct possible edges occur independently with probability $p$ and which has no loops, it chooses $d^*=pn$ ([def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)). This is the reference parameter; under that loop-free convention the exact expected degree is $(n-1)p$.

## Facts & Assumptions

[F1] The graph notation supplies the matrices $A,D,L,I,J$ of the same size and the identity $L=D-A$ ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

[F2] For nonempty $V$, $J/n$ is the orthogonal projection onto the constant vectors in $\mathbb C^V$ ([prop-expander-prereq-constant-projection](item-prop-expander-prereq-constant-projection)).

[F3] In $G(n,p)$ the $n-1$ possible edges incident to a fixed vertex have Bernoulli probability $p$ ([def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)).

[F4] For a real random variable $X$ on a finite probability space $(\Omega,w)$, expectation is the weighted sum $\mathbb E[X]=\sum_{\omega\in\Omega}X(\omega)w(\omega)$ ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F5] For a finite family of real random variables on one finite probability space, $\mathbb E[\sum_i X_i]=\sum_i\mathbb E[X_i]$, without any independence hypothesis; for the empty family both sides are zero ([math:thm-linearity-of-expectation](https://alphabetamath.cc/item/thm-linearity-of-expectation)).

## Justification

**Given:** The graph and real reference parameter in the definition, and the stated random-graph law when the random example is considered.

**Goal:** Verify that the centered matrices and their displayed identity are well defined, and clarify the reference choices.

1.1 Since $n>0$, the scalar $d^*/n$ exists. The matrices in [F1] have matching dimensions, so the three displayed sums and differences define matrices uniquely. Substituting $L=D-A$ gives $(D-d^*I)-(A-(d^*/n)J)=L-d^*I+(d^*/n)J$. By [F2], the term $(d^*/n)J$ is $d^*$ times the projection onto constant vectors. [given, F1, F2, algebra]

1.2 For the random example, take the finite probability space $(\Omega,w)$ of simple graphs on $[n]$ with the law in [F3]. For distinct vertices $x,y$, let $X_{xy}$ be the indicator of the edge $\{x,y\}$. Since it is $1$ on the edge-present event and $0$ elsewhere, [F4] gives $\mathbb E[X_{xy}]=\sum_{\omega:X_{xy}(\omega)=1}w(\omega)=p$ by [F3]. [given, F3, F4, algebra]

2.1 For a $d$-regular graph the common degree $d$ specifies the stated reference value. For $G(n,p)$, the degree of a fixed vertex $x$ is $d(x)=\sum_{y\ne x}X_{xy}$ by [F1] and the absence of loops. These are $n-1$ real indicators on the same finite probability space, so [F5] and step 1.2 give $\mathbb E[d(x)]=\sum_{y\ne x}\mathbb E[X_{xy}]=(n-1)p$, including the empty sum when $n=1$. Thus $pn$ is the stated reference choice, not an assertion that this exact expectation equals $pn$. Both reference choices are valid real parameters in the preceding construction. [given, F1, F3, F5, step 1.1, step 1.2, algebra] ∎





## Source notes

The notation and the two reference choices are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Section 1.2. The justification uses the stated suppliers and elementary calculation.
