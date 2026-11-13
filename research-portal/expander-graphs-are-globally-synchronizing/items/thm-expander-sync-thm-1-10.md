---
id: thm-expander-sync-thm-1-10
title: General two-sided spectral criterion — Theorem 1.10
kind: theorem
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-10a0d5e0c110-psd-expander-rigidity
  - def-expander-sync-two-sided-expander
  - def-expander-sync-global-synchrony
  - prop-expander-sync-psd-criterion
  - math:def-countable-choice
  - math:def-real-exponential-function-and-e
  - math:def-natural-logarithm
  - math:thm-natural-logarithm-laws
  - math:thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume
  - math:thm-lebesgue-measure-is-a-complete-measure
  - math:cor-archimedean-reciprocal
dependency_roles:
  lem-author-10a0d5e0c110-psd-expander-rigidity: mathematical-premise
  def-expander-sync-two-sided-expander: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  prop-expander-sync-psd-criterion: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-real-exponential-function-and-e: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume: mathematical-premise
  math:thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  math:cor-archimedean-reciprocal: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 8, Theorem 1.10; equation (1.3); Section 4 proof; PDF p. 26,
        Theorem 1.10; equation (1.3); Section 4 proof; PDF p. 27, Theorem 1.10;
        equation (1.3); Section 4 proof; PDF p. 28, Theorem 1.10; equation
        (1.3); Section 4 proof
      statement: If $G$ is an $(n,d^*,\alpha,c^-,c^+)$-expander with $c^->-1$,
        $\alpha\le1/5$, and
        $\frac{32\alpha(1+4c^+-3c^-)}{(1+c^-)^2}\log\!\left(\frac{1+c^++\alpha}{2\alpha}\right)<1$,
        then $G$ is globally synchronizing.
      hypotheses: "Conditions and scope retained in the extracted formulation: If $G$
        is an $(n,d^*,\\alpha,c^-,c^+)$-expander with $c^->-1$,
        $\\alpha\\le1/5$, and
        $\\frac{32\\alpha(1+4c^+-3c^-)}{(1+c^-)^2}\\log\\!\\left(\\frac{1+c^++\
        \\alpha}{2\\alpha}\\right)<1$, then $G$ is globally synchronizing."
      reading_limits: Original PDF text extracted directly from pp. 6, 8, 11 and 26–28
        was inspected for the notation, exact theorem, connectedness
        qualification and two-stage proof attribution. This citation is
        attribution only; the local theorem uses the existing PSD rigidity and
        global-synchrony suppliers. No final author-defect disposition is made
        here.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 10
---

## Statement

Assume countable choice. Let $G$ be an $(n,d^*,\alpha,c^-,c^+)$-expander with **$d^*>0$**, $c^->-1$, $0<\alpha\le1/5$, and
$\frac{32\alpha(1+4c^+-3c^-)}{(1+c^-)^2}\log\!\left(\frac{1+c^++\alpha}{2\alpha}\right)<1$.
Then $G$ is globally synchronizing. The explicit positive-reference requirement corrects the zero-degree boundary of the unrestricted extracted formulation; it does not change the positive-degree main result.

## Facts & Assumptions

[F1] The expander convention is [[def-expander-sync-two-sided-expander]]. The critical-PSD rigidity conclusion, including the zero-width parameter case, is [[lem-author-10a0d5e0c110-psd-expander-rigidity]].

[F2] Under [[math:def-countable-choice]], [[prop-expander-sync-psd-criterion]] turns exclusion of nonsynchronized critical PSD points into [[def-expander-sync-global-synchrony]]. This uses analytic convergence and the null basin of strict saddles; it never asserts PSD implies local minimum.

[F3] The real exponential is given by its convergent power series, $\exp(x)=\sum_{k=0}^{\infty}x^k/k!$ ([[math:def-real-exponential-function-and-e]]). The natural logarithm is its inverse, so $\log(\exp x)=x$ ([[math:def-natural-logarithm]]), and is strictly increasing on $(0,\infty)$ ([[math:thm-natural-logarithm-laws]]).

[F4] Under countable choice, Lebesgue outer measure $\lambda_2^*$ is nonnegative, monotone and countably subadditive, and equals ordinary area on every half-open rectangle ([[math:thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]). An outer-null subset of $\mathbb R^2$ is Lebesgue measurable with measure zero ([[math:thm-lebesgue-measure-is-a-complete-measure]]). The reciprocal Archimedean property gives, for each $\varepsilon>0$, an integer $N\ge1$ with $1/N<\varepsilon$ ([[math:cor-archimedean-reciprocal]]).

## Original claim and scope correction

The original Theorem 1.10 is retained verbatim as the attributed claim:

If $G$ is an $(n,d^*,\alpha,c^-,c^+)$-expander with $c^->-1$, $\alpha\le1/5$, and $\frac{32\alpha(1+4c^+-3c^-)}{(1+c^-)^2}\log\!\left(\frac{1+c^++\alpha}{2\alpha}\right)<1$, then $G$ is globally synchronizing.

Definition 1.9 on original PDF p. 8 and the notation on p. 6 impose no explicit positive-reference condition. The notation calls $d^*$ an “expected average degree” and takes $d^*=d$ for regular graphs. This does not itself exclude a zero-regular graph. Section 2.1 on p. 11 subsequently assumes connectedness while developing the phase estimates; the edgeless example is outside that local standing assumption. Whether positivity or connectedness is intended globally is reserved for the source assessor. The example below concerns the unrestricted extracted predicate. The displayed local theorem above therefore records positivity explicitly. The full nonregular positive-degree scope and original numerical condition are preserved.

## Proof

**Given:** The graph and numerical hypotheses in the Statement, and the unrestricted extracted formulation for the boundary example, under countable choice.

**Goal:** Prove global synchrony under the stated hypotheses and verify the zero-degree boundary example.

1.1 Apply the PSD rigidity helper with $d=d^*$ and $a=\alpha$. Every hypothesis is in the Statement, including positivity of the reference degree. Hence every equilibrium with positive-semidefinite Hessian is fully synchronized. [F1, given]

1.2 The unrestricted extracted statement admits the edgeless graph on $V=\{1,2\}$, with $d^*=0$, $\alpha=1/10000$ and $c^-=c^+=0$. Here $A=D=L=\Delta_A=\Delta_L=0$, so both expander conditions hold and $c^->-1$, $0<\alpha\le1/5$. [F1, algebra]

1.3 By the nonnegative exponential series in [F3], $\exp(9)\ge\sum_{k=0}^{12}9^k/k!=13988552987/1971200>10001/2=5000.5$. Strict increase of the logarithm and its inverse identity in [F3] therefore give $\log(5000.5)<\log(\exp(9))=9$. Thus condition (1.3) holds, since its left side is $(32/10000)\log(5000.5)<288/10000<1$. [F3, algebra]

2.1 The global-synchrony criterion [F2] now applies to the graph in the Statement under countable choice. It gives convergence to a fully synchronized state for phase-volume almost every initial state, which is exactly global synchrony. [F2, step 1.1]

2.2 Every rotating-frame trajectory is constant, because $A=0$ in the equation in [F2]. Its initial state is fully synchronized exactly on the phase diagonal. In the fundamental domain $(-\pi,\pi]^2$ from [F2], that diagonal is represented by $S=\{(t,t):-\pi<t\le\pi\}$. For each integer $N\ge1$, let $I_j=(-\pi+2\pi j/N,-\pi+2\pi(j+1)/N]$, $0\le j<N$. These intervals partition $(-\pi,\pi]$, so $S\subseteq\bigcup_{j=0}^{N-1}(I_j\times I_j)$. Monotonicity, subadditivity (with the finite family padded by empty sets), and the half-open rectangle areas in [F4] give $0\le\lambda_2^*(S)\le N(2\pi/N)^2=4\pi^2/N$. For any $\varepsilon>0$, the reciprocal Archimedean property in [F4] gives $N$ with $1/N<\varepsilon/(4\pi^2)$; hence $\lambda_2^*(S)=0$. By [F4], $S$ is Lebesgue measurable and $\lambda_2(S)=0$. The phase-volume formula in [F2] now gives normalized volume $(2\pi)^{-2}\lambda_2(S)=0$ to the synchronized diagonal. [F2, F4, step 1.2, construct, algebra]

3.1 All the unrestricted expander and numerical hypotheses hold by steps 1.2 and 1.3, but step 2.2 shows that convergence to a fully synchronized state has probability zero. Thus the unrestricted real-parameter extraction is false at this boundary. This example does not challenge the corrected positive-reference theorem; no positive-reference counterexample is asserted. [step 1.2, step 1.3, step 2.2, F2] ∎

## Source notes

The original formulation and amplification strategy are attributed to the article, Theorem 1.10 on PDF p. 8 and proof on pp. 26–28. The local proof uses five fully authored prerequisite helpers. They retain the kernel and two-stage amplification method, but replace local-minimum-only interfaces by critical-PSD interfaces. Under the theorem condition, $\alpha<1/32$ makes the elementary order-parameter estimate sufficient; the cubic bootstrap from Lemma 2.5 is unnecessary. No claim of PSD implying a local minimum is made. The explicit boundary example requires source-assessor confirmation of its disposition before any final article report.
