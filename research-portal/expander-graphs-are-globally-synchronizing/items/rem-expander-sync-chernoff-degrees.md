---
id: rem-expander-sync-chernoff-degrees
title: Chernoff degree concentration used in Section 6
kind: remark
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-graph-notation
  - def-expander-prereq-asymptotic-quantifiers
  - prop-expander-prereq-degree-law-and-dependence
  - math:lem-chernoff-bound-for-independent-bernoulli-trials
  - math:thm-finite-union-bound
  - def-expander-sync-two-sided-expander
  - prop-expander-sync-prop-3-2
  - math:def-product-of-finite-probability-spaces
  - math:thm-product-probability-has-independent-coordinate-events
dependency_roles:
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  prop-expander-prereq-degree-law-and-dependence: mathematical-premise
  math:lem-chernoff-bound-for-independent-bernoulli-trials: mathematical-premise
  math:thm-finite-union-bound: mathematical-premise
  def-expander-sync-two-sided-expander: mathematical-premise
  prop-expander-sync-prop-3-2: mathematical-premise
  math:def-product-of-finite-probability-spaces: mathematical-premise
  math:thm-product-probability-has-independent-coordinate-events: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 31, equation (6.2) and surrounding paragraph
      statement: For p = γ log n/n, equation (6.2) displays the union and Chernoff
        estimate with exponent −ε²pn/3, and the surrounding paragraph states
        that degree concentration permits |c±| = o(1) when γ tends to infinity.
      hypotheses: The paragraph takes γ = γ(n) > 1 and discusses the limit n tending
        to infinity; p is a graph edge probability.
      reading_limits: The indicated passage in the supplied article text was inspected
        for attribution. The article is not used as proof of the estimate.
dependency_level: 6
---

## Statement

Let $0<\varepsilon\le1$, $n\ge12/\varepsilon$, and $p=\gamma\log n/n\in[0,1]$. In the simple Erdős–Rényi graph $G(n,p)$, write $d(v)$ for the number of edges incident to vertex $v$. Then, for any fixed vertex $v_1$,
$$\mathbb P(\exists v:|d(v)-pn|\ge\varepsilon pn)\le n\mathbb P(|d(v_1)-pn|\ge\varepsilon pn)\le2n\exp(-\varepsilon^2pn/3)=2n^{1-\varepsilon^2\gamma/3}.$$

Consequently, for each fixed $0<\varepsilon\le1$ and each fixed $\gamma_0>3/\varepsilon^2$, the probability on the left tends to zero uniformly for $\gamma\ge\gamma_0$ subject to $p\le1$. If instead $\gamma=\gamma(n)\to\infty$ and $p\le1$, there is a deterministic sequence $\varepsilon_n\to0$ such that, with high probability, every degree lies between $(1-\varepsilon_n)pn$ and $(1+\varepsilon_n)pn$.

Here “with high probability” means that the event probability tends to one as $n\to\infty$. The parameters $c^-$ and $c^+$ are the lower and upper centered-Laplacian parameters in the two-sided $(n,d^*,\alpha,c^-,c^+)$-expander definition, with reference degree $d^*=pn$. In the article’s expander application, these bounds provide the degree-control part of the assertion that $|c^\pm|=o(1)$; the separate centered-adjacency bound and the degree-to-expander implication are also needed for that spectral assertion.

## Statement references

[[def-expander-sync-two-sided-expander]]

[[prop-expander-sync-prop-3-2]]

## Facts & Assumptions

[F1] In $G(n,p)$ the indicators of distinct possible edges are independent Bernoulli$(p)$ variables, and each degree is their sum over the $n-1$ possible incident edges. In particular, all vertices have the same degree distribution. ([[def-expander-sync-erdos-renyi]], [[def-expander-sync-graph-notation]], [[prop-expander-prereq-degree-law-and-dependence]])

[F2] For a sum of independent Bernoulli variables with mean $\mu$, its upper and lower tail probabilities at relative displacement $\delta\in[0,1]$ are at most $\exp(-\mu\delta^2/3)$ and $\exp(-\mu\delta^2/2)$, respectively. ([[math:lem-chernoff-bound-for-independent-bernoulli-trials]])

[F3] The probability of a finite union is at most the sum of the probabilities; the events need not be independent. ([[math:thm-finite-union-bound]])

[F4] High probability and $o(1)$ mean convergence of the relevant deterministic probability or error sequence to one or zero, respectively. ([[def-expander-prereq-asymptotic-quantifiers]])

[F5] The finite product of finite probability spaces assigns each outcome the product of its factor weights. These weights normalize, each coordinate has its original marginal law, and coordinate events from distinct factors are mutually independent. ([[math:def-product-of-finite-probability-spaces]], [[math:thm-product-probability-has-independent-coordinate-events]])

[F6] The parameters $c^-$ and $c^+$ give the lower and upper centered-Laplacian bounds in the two-sided expander definition. With $d^*=pn$, if $\|A-pJ\|\le\alpha pn$ and all degrees lie in $[(1-\eta)pn,(1+\eta)pn]$, Proposition 3.2 applies with $c^-=-\eta-\alpha$ and $c^+=\eta+\alpha$. ([[def-expander-sync-two-sided-expander]], [[prop-expander-sync-prop-3-2]])

## Proof

**Given:** The parameters and graph in the Statement.

**Goal:** Establish the displayed estimate, its two asymptotic consequences, and their conditional role in two-sided expansion.

**Proof technique:** Apply separate upper and lower Chernoff tails, accounting for the exact mean $(n-1)p$, and then take a union bound.

1.1 If $p=0$, every degree and $pn$ are zero, so the displayed event has probability one and the displayed inequalities hold. Suppose henceforth that $p>0$. Fix a vertex $v$. Let $(\Omega_G,w_G)$ be the original finite graph probability space. Form its product with $\{0,1\}$ carrying weights $q(0)=1-p$ and $q(1)=p$: the outcome $(G,b)$ has weight $w_G(G)q(b)$. Lift the graph variables through the first coordinate and put $B(G,b)=b$. By [F5], the graph and Bernoulli coordinate laws are unchanged, and $B$ is independent of every graph-coordinate event. For any assignment $E$ of incident-edge indicators and $b\in\{0,1\}$, $\mathbb P(E\cap\{B=b\})=\mathbb P_G(E)q(b)$; [F1] factors $\mathbb P_G(E)$ over the prescribed edges. Thus the $n-1$ incident-edge indicators and $B$ are mutually independent Bernoulli$(p)$ variables. Their sum $Y=d(v)+B$ has mean $np$, and $d(v)\le Y$. Hence [F2] with relative displacement $\varepsilon$ bounds $\mathbb P(d(v)\ge(1+\varepsilon)pn)$ by $\exp(-\varepsilon^2pn/3)$, for the unchanged original degree law. [F1, F2, F5]

1.2 The actual degree mean is $\mu=(n-1)p$. Put $\delta=(n\varepsilon-1)/(n-1)$. The assumptions give $0\le\delta\le1$, and $(1-\delta)\mu=(1-\varepsilon)pn$. By [F2], the lower-tail probability is at most $\exp(-p(n\varepsilon-1)^2/(2(n-1)))$. Since $n\varepsilon\ge12$, $(n\varepsilon-1)^2/(2(n-1))\ge\varepsilon^2n(11/12)^2/2\ge\varepsilon^2n/3$. The lower tail is therefore also at most $\exp(-\varepsilon^2pn/3)$. [F1, F2, algebra]

2.1 The event at one vertex is the union of its upper and lower deviation events. Applying [F3] first to those two events and then to the $n$ vertex events, and using their identical distributions from [F1], proves the two inequalities. Substitution of $pn=\gamma\log n$ gives the displayed power of $n$. No independence between degrees is used. [F1, F3, step 1.1, step 1.2, algebra]

3.1 For fixed $\varepsilon$ and $\gamma\ge\gamma_0>3/\varepsilon^2$, the last bound is at most $2n^{1-\varepsilon^2\gamma_0/3}$, which tends to zero independently of $\gamma$. If $\gamma\to\infty$, choose $\varepsilon_n=\max\{12/n,\gamma^{-1/4}\}$. Eventually $0<\varepsilon_n\le1$, $n\ge12/\varepsilon_n$, and $\gamma\varepsilon_n^2\ge\sqrt\gamma\to\infty$. The same displayed estimate then tends to zero, while $\varepsilon_n\to0$. Its complementary event gives the asserted simultaneous degree bounds with high probability. [F4, step 2.1, algebra]

4.1 In the regime $\gamma\to\infty$, on the simultaneous degree event from step 3.1, any separately supplied bound $\|A-pJ\|\le\alpha_n pn$ with deterministic $\alpha_n\ge0$ and $\alpha_n\to0$ gives, by [F6], a two-sided expander with $c^-=-\varepsilon_n-\alpha_n$ and $c^+=\varepsilon_n+\alpha_n$. These satisfy $|c^\pm|\to0$. This is a conditional implication; the degree estimate supplies no probability bound for that separate spectral event. [F4, F6, step 3.1, algebra] ∎

## Source notes

Equation (6.2) and the surrounding discussion are attributed to the article cited above. The proof here uses the actual mean $(n-1)p$ and establishes the displayed estimate in the explicitly stated sufficiently-large-$n$ range. The degree bounds alone do not assert a centered-adjacency spectral estimate.
