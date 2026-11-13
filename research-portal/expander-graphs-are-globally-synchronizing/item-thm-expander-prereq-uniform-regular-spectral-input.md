---
title: Friedman spectral expansion in the uniform simple model
status: draft
research_item: thm-expander-prereq-uniform-regular-spectral-input
dependency_level: 4
sources:
  references:
    - title: Charles Bordenave, A new proof of Friedman’s second eigenvalue Theorem
        and its extension to random lifts
      url: https://arxiv.org/pdf/1502.04482v4
      locator: arXiv:1502.04482v4 (5 March 2019), Section 1, simple ensemble
        definition and Theorem 1, PDF/printed p. 2; eigenvalue ordering on p. 1
      statement: For fixed integer $d\ge3$, $G$ uniform on the labelled simple graph
        set $\mathcal G_d(n)$, and every fixed $\varepsilon>0$, $\mathbb
        P(\max\{\lambda_2(A),|\lambda_n(A)|\}\ge2\sqrt{d-1}+\varepsilon)\to0$
        along every sequence $n\to\infty$ with $nd$ even. The eigenvalues are
        decreasingly ordered with multiplicity, so only one copy of the top
        eigenvalue is excluded.
      hypotheses: Fixed integer degree d at least 3; fixed positive epsilon; n tends
        to infinity through orders with nd even and n at least d+1; uniform
        distribution on all labelled simple d-regular graphs with vertex set
        {1,...,n}. No conditioning on connectedness or nonbipartiteness.
      reading_limits: Freshly read extracted PDF pp. 1–2, including the eigenvalue
        ordering, definition of G_d(n), and full Theorem 1; visually inspected
        PDF p. 2. Read extracted overview pp. 3–5 as context only. Did not
        reconstruct or audit the probabilistic proof in Sections 2.3–2.6,
        quantitative bound (2), or random-lift results. The five local helper
        arguments establish model and spectral interfaces, not Friedman’s
        probabilistic estimate.
external_input: true
---

## Prerequisites

- [lem-author-bcce21321c2a-feasible-regular-orders](item-lem-author-bcce21321c2a-feasible-regular-orders)
- [lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum)
- [lem-author-bcce21321c2a-regular-spectral-obstructions](item-lem-author-bcce21321c2a-regular-spectral-obstructions)
- [lem-author-bcce21321c2a-normalized-spectral-thresholds](item-lem-author-bcce21321c2a-normalized-spectral-thresholds)
- [lem-author-bcce21321c2a-simple-spectral-event-counting](item-lem-author-bcce21321c2a-simple-spectral-event-counting)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [` Charles Bordenave, A new proof of Friedman’s second eigenvalue Theorem and its extension to random lifts · arXiv:1502.04482v4 (5 March 2019), Section 1, simple ensemble definition and Theorem 1, PDF/printed p. 2; eigenvalue ordering on p. 1 `](https://arxiv.org/pdf/1502.04482v4)


## Statement

Fix $d\ge3$ and $\varepsilon>0$. For a uniformly sampled labelled simple $d$-regular graph on $n$ vertices, $\mathbb P(\max\{\lambda_2(A),|\lambda_n(A)|\}\ge2\sqrt{d-1}+\varepsilon)\to0$ as $n\to\infty$ along $nd$ even. This includes all nonconstant eigenvalues with multiplicity. It gives a fixed-degree, asymptotic bound, not an exact Ramanujan conclusion.

Here $d$ is an integer, $\varepsilon$ is fixed before the limit, and $n\ge d+1$. The eigenvalues of the adjacency matrix $A$ are ordered $d=\lambda_1\ge\cdots\ge\lambda_n$ with multiplicity. The finite graph space exists by [lem-author-bcce21321c2a-feasible-regular-orders](item-lem-author-bcce21321c2a-feasible-regular-orders), and its relation to conditional pairings is the exact event identity in [lem-author-bcce21321c2a-simple-spectral-event-counting](item-lem-author-bcce21321c2a-simple-spectral-event-counting). The spectral maximum is $\rho_0(A)=\|A-(d/n)J\|_{\mathrm{op}}$ by [lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum). In particular extra eigenvalues $d$ from disconnection and $-d$ from a bipartite component are retained, as made explicit in [lem-author-bcce21321c2a-regular-spectral-obstructions](item-lem-author-bcce21321c2a-regular-spectral-obstructions). The equivalent normalized threshold is $2\sqrt{d-1}/d+\varepsilon/d$ by [lem-author-bcce21321c2a-normalized-spectral-thresholds](item-lem-author-bcce21321c2a-normalized-spectral-thresholds), with all asymptotic quantifiers as in [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers).

## External input

Bordenave, Section 1, Theorem 1 (PDF/printed p. 2), explicitly imports the outstanding probabilistic estimate for a uniform member of $\mathcal G_d(n)$ stated above. The preceding definition on that page specifies labelled simple graphs. Its ordered eigenvalues are denoted $\mu_i$ there; replacing that letter by $\lambda_i$ changes no hypothesis or conclusion. The five local intermediate items establish feasibility, ordered deflation, obstruction witnesses, normalization, and exact event/model encoding before this import. They do not prove the probability bound.

Application is direct: the graph law is precisely the uniform simple law by [lem-author-bcce21321c2a-simple-spectral-event-counting](item-lem-author-bcce21321c2a-simple-spectral-event-counting), the spectral event is exactly the source's ordered event by [lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum), and the limits keep $d$ and $\varepsilon$ fixed by [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers). Thus Theorem 1 applies without an additional connectedness condition, a permutation-model identification, or any claimed local reconstruction of its proof. The assertion about exceptional eigenvalues follows from [lem-author-bcce21321c2a-regular-spectral-obstructions](item-lem-author-bcce21321c2a-regular-spectral-obstructions), and the normalized version follows from [lem-author-bcce21321c2a-normalized-spectral-thresholds](item-lem-author-bcce21321c2a-normalized-spectral-thresholds). The exact source contract and actual reading limits are recorded in the reference metadata.
