---
id: ex-degree-reduction-preserves-unsatisfaction
kind: example
title: "A cloud rounding calculation"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-cloud-consistency-forces-near-constant-labels, thm-degree-reduction-preserves-unsatisfaction, def-degree-reduction-by-expander-clouds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §4 Definition 4.1 and Lemma 4.1, printed pp. 12-14."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5, printed pp. 371-373."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

Let $G$ be a binary constraint graph, let $G_1$ be its cloud graph as constructed by [[def-degree-reduction-by-expander-clouds]], and let $\tau$ be a labeling of the ports of $G_1$. Suppose that $S=10$ ports carry a label different from the decoded label of their original vertex, that $U_{\rm int}=4$ equality edges inside clouds are violated (counted with multiplicity), and that $U_{\rm ext}=2$ external edges are violated. Then the bounds of [[lem-cloud-consistency-forces-near-constant-labels]] give $U_{\rm int}\ge(7/20)\cdot10=7/2$ and $U_G\le U_{\rm ext}+S=2+10=12$ for the number $U_G$ of ordinary edges of $G$ violated by the decoded labeling: the first is consistent with the integer value $4$, and the second is an upper bound, so no equality and no stronger local bound is asserted. Passing from these counts to the unsatisfaction fractions of the $387$-regular registered graph $G_2$ costs the constant factor of [[thm-degree-reduction-preserves-unsatisfaction]].

## Facts & Assumptions

**Given:** a binary constraint graph $G$ over the fixed alphabet $\Sigma$, its cloud graph $G_1$ and registered graph $G_2$, a labeling $\tau$ of the ports of $G_1$ with plurality decoding $\sigma=D\tau$, and the counts $S=10$, $U_{\rm int}=4$, $U_{\rm ext}=2$ of the statement.

[F1] If $S$ is the number of ports whose label differs from the decoded label of their vertex, then the violated equality edges inside the clouds and the violated ordinary edges of $G$ satisfy $U_{\rm int}\ge\frac{7}{20}S$ and $U_G\le U_{\rm ext}+S$, where $U_{\rm ext}$ counts the violated external edges ([[lem-cloud-consistency-forces-near-constant-labels]]).

[F2] The registered graph $G_2$ is $387$-regular with $2|E(G)|$ vertices, and its unsatisfaction fraction is at least $1/(387K)$ times that of $G$ with $K=20/7$; the additive $65$ ordinary loops and the overlay edges at every port are tautological, so the count $U_G$ of the previous item is a count of edges of $G$ and not of edges of $G_2$ ([[thm-degree-reduction-preserves-unsatisfaction]], [[def-degree-reduction-by-expander-clouds]]).

## Verification

**Proof technique:** direct.

1.1 The first inequality of [F1] with $S=10$ gives $U_{\rm int}\ge(7/20)\cdot10=7/2$, and the labelling has $U_{\rm int}=4$, so the bound holds and its slack is $4-7/2=1/2$. [F1, algebra]

1.2 The second inequality of [F1] with $U_{\rm ext}=2$ and $S=10$ gives $U_G\le2+10=12$. [F1, algebra]

2.1 Both bounds are one-sided and the integers $U_{\rm int}=4$ and $U_G\in\{0,\dots,12\}$ are compatible with them, so the numerical data are consistent; the example shows in particular that $S=10$ ports of disagreement force at least $7/2$ (hence at least $4$ integer) internal violations and at most $12$ ordinary edge violations in $G$, and nothing of the stronger form $U_G\le U_{\rm ext}$ or $U_{\rm int}\ge S$ may be inferred from these bounds. [step 1.1, step 1.2, algebra]

3.1 The comparison with the registered graph is a constant rescaling and not a count identity: by [F2] the fraction of violated edges of $G_2$ is at least $\frac{7}{7740}$ times the fraction of violated ordinary edges of $G$, and the tautological overlay edges at the ports do not contribute violations in either direction, so the counts $U_{\rm int}$, $U_{\rm ext}$ and $U_G$ above are statements about the cloud graph $G_1$ and the original graph $G$. [F2, step 2.1, algebra] ∎
