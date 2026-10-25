---
id: ex-distant-alternatives-without-uniform-tests
kind: example
title: "Distant alternatives can prevent uniform testability"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - def-metric-space
  - def-total-variation-distance-for-probability-laws
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "R. V. Ramamoorthi, K. Sriram, and R. Martin, On Posterior Concentration in Misspecified Models, §1, pp. 760–761"
      url: "https://arxiv.org/pdf/1312.4620"
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, §4.1, p. 378"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Example

On $\mathsf X=\{0,1\}$ with counting measure, let
$p_0(0)=p_0(1)=1/2$. Use labels $0,1,2,\ldots$, with $p_0$ at label
$0$ and, for $j\ge1$,
$$p_j(1)=1/2+\delta_j,\qquad p_j(0)=1/2-\delta_j, \qquad\delta_j:=1/(j+4).$$
Give label $0$ prior probability $1/2$ and label $j$ prior probability
$2^{-(j+1)}$. Use the discrete metric $\rho(j,k)=0$ if $j=k$ and $1$
otherwise, so every alternative is distance one from label $0$.
Take observations IID with the law at the selected parameter label.

## Facts & Assumptions

**Given:** The model, prior, parameter metric, and IID law in the Example.

[F1] [[def-kl-projection-set-and-relative-kl-neighborhoods]]: the
relative KL neighborhoods are defined using
$K(\theta)-K^*$.

[A1] Assume AC through the imported KL convention
[[def-axiom-of-choice]]. The displayed finite density family is explicit.

[F2] [[def-total-variation-distance-for-probability-laws]]:
$\|P-Q\|_{\mathrm{TV}}=\sup_A|P(A)-Q(A)|$.

[F3] [[def-metric-space]]: a metric separates distinct points and obeys
the triangle inequality.

## Verification




1.1 For $\delta_j=1/(j+4)$, direct substitution gives $\mathrm{KL}(P_0\Vert P_j) =\frac12\log\frac{1/2}{1/2+\delta_j} +\frac12\log\frac{1/2}{1/2-\delta_j} =-\frac12\log(1-4\delta_j^2)>0.$ Thus $\Theta^*=\{0\}$. Every relative KL neighborhood contains $0$ and therefore has prior mass at least $1/2$, while every $j\ge1$ lies in the distance-one alternative set. [A1, F1, F3, algebra]

1.2 Fix $n$ and choose $j_n\ge n^2$. For one coordinate define a joint law of $(X,Y)$ by masses $1/2-\delta_{j_n}$ at $(0,0)$, $1/2$ at $(1,1)$, and $\delta_{j_n}$ at $(0,1)$, with zero mass at $(1,0)$. Its marginals are $P_0$ and $P_{j_n}$, and its disagreement probability is $\delta_{j_n}$. Take the $n$-fold product of this finite joint law. By the union bound, the coupled vectors differ with probability at most $n\delta_{j_n}\le1/n$. For every event $A$, the indicators of $\{X_{1:n}\in A\}$ and $\{Y_{1:n}\in A\}$ can differ only when the vectors differ, so by [F2], $\|P_0^n-P_{j_n}^n\|_{\mathrm{TV}}\le1/n.$ [F2, given, algebra]

2.1 For probability laws $P,Q$ on the finite set $\{0,1\}^n$, $\|P-Q\|_{\mathrm{TV}}=\sum_{z:P(z)>Q(z)}(P(z)-Q(z))$: the set of points with positive difference attains the supremum over events, and no event can sum more than all positive differences. Hence for every test $\phi_n$ with $0\le\phi_n\le1$, $P\phi_n-Q\phi_n =\sum_z\phi_n(z)(P(z)-Q(z)) \le\sum_{z:P(z)>Q(z)}(P(z)-Q(z)) =\|P-Q\|_{\mathrm{TV}}.$ Taking $P=P_0^n$, $Q=P_{j_n}^n$ and rearranging gives $P_0^n\phi_n+P_{j_n}^n(1-\phi_n) \ge1-\|P_0^n-P_{j_n}^n\|_{\mathrm{TV}}\ge1-\frac1n.$ If $P_0^n\phi_n\to0$, then $\sup_{j\ge1}P_j^n(1-\phi_n)\ge P_{j_n}^n(1-\phi_n)\to1$. Since the selected minimizer is the true law, $Q_j=P_j$ here. Thus no test sequence has both error limits required by the KL-projection theorem. [F2, step 1.2, algebra] ∎

