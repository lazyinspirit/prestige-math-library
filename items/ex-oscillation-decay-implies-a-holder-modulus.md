---
id: ex-oscillation-decay-implies-a-holder-modulus
kind: example
title: "Worked oscillation decay and its Hölder modulus"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [lem-geometric-oscillation-decay-implies-a-holder-modulus, lem-de-giorgi-oscillation-reduction, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-ball-average-operator-on-r-n, def-real-power]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Brian Krummel, Consequences of De Giorgi-Nash-Moser (4 March 2016; complete 7-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/ConseqDNM.pdf"
      locator: "Theorem 5 and the oscillation inequality (7), printed pp. 1-7 (read in full)"
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Lemma 12 and the oscillation-to-regularity conclusion, printed pp. 1-7 (read in full)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

**Example.** Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open and let $u:\Omega\to\mathbb R$ have finite oscillation on every compactly contained ball and satisfy $\operatorname{osc}_{B_r(x)}u\le\theta\operatorname{osc}_{B_{2r}(x)}u$ for all $B_{2r}(x)\Subset\Omega$, in the setting of [[lem-geometric-oscillation-decay-implies-a-holder-modulus]].
1. If $\theta=\tfrac12$, then $\alpha_0=1$ and the lemma uses the capped exponent $\alpha=\tfrac12$ to give $|u(x)-u(y)|\le2\,(|x-y|/R)^{1/2}\operatorname{osc}_{B_R(x_0)}u$ for $x,y\in B_{R/2}(x_0)$.
2. If $\theta=2^{-1/3}$, then $\alpha_0=\alpha=\tfrac13$ and $|u(x)-u(y)|\le4^{1/3}(|x-y|/R)^{1/3}\operatorname{osc}_{B_R(x_0)}u$; smaller exponents have the corresponding constant $4^{\alpha'}$.

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb R^n$, a function $u:\Omega\to\mathbb R$ with finite oscillation on every compactly contained ball satisfying $\operatorname{osc}_{B_r(x)}u\le\theta\operatorname{osc}_{B_{2r}(x)}u$ whenever $B_{2r}(x)\Subset\Omega$, and the two values $\theta=\tfrac12$ and $\theta=2^{-1/3}$.

[F1] Oscillation-to-modulus conversion: under the stated finite-oscillation hypothesis, put $\alpha_0=\log(1/\theta)/\log2$ and $\alpha=\min\{\alpha_0,1/2\}$; then $|u(x)-u(y)|\le4^{\alpha}(|x-y|/R)^{\alpha}\operatorname{osc}_{B_R(x_0)}u$ for all $x,y\in B_{R/2}(x_0)$, with $4^{\alpha'}$ for every $0<\alpha'<\alpha$ ([[lem-geometric-oscillation-decay-implies-a-holder-modulus]]).

[F2] Real powers with positive base satisfy $2^{-a}=1/2^a$, $\log(2^a)=a\log2$ and $\log(1/\theta)=-\log\theta$ for $\theta\in(0,1)$ ([[def-real-power]]); the Hölder seminorm on balls is defined as in [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]].

[F3] The De Giorgi oscillation reduction produces a ratio $\theta\in(0,1)$ on balls satisfying its doubled-ball condition. Reserving this interior margin permits dyadic iteration; the resulting power-law conversion is the one illustrated in [F1] ([[lem-de-giorgi-oscillation-reduction]]).

## Verification

1.1 The case $\theta=1/2$. Since $1/\theta=2$, $\alpha_0=\log2/\log2=1$ and the capped exponent is $\alpha=1/2$; [F1] gives $|u(x)-u(y)|\le2\,(|x-y|/R)^{1/2}\operatorname{osc}_{B_R(x_0)}u$ for $x,y\in B_{R/2}(x_0)$. [given, F1, F2, algebra]

2.1 The case $\theta=2^{-1/3}$. Here $1/\theta=2^{1/3}$, so $\alpha_0=\log(2^{1/3})/\log2=\tfrac13=\alpha$; [F1] gives $|u(x)-u(y)|\le4^{1/3}(|x-y|/R)^{1/3}\operatorname{osc}_{B_R(x_0)}u$ on $B_{R/2}(x_0)$, so $u$ is $\tfrac13$-Hölder there with the displayed constant. For the De Giorgi reduction, [F3] records the extra interior margin before the analogous dyadic conversion is used. [step 1.1, given, F1, F2, F3, algebra] ∎
