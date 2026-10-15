---
id: thm-tdmath-specific-entropy-density
kind: theorem
title: Specific Relative Entropy Density
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [def-axiom-of-choice, def-tdmath-poisson-configuration-reference, thm-tdmath-poisson-reference-count-properties, def-tdmath-finite-region-relative-entropy, lem-tdmath-relative-entropy-variational-and-chain-rules, def-tdmath-local-tame-topology]
justified_by: []
dependency_roles:
  def-tdmath-local-tame-topology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  def-tdmath-finite-region-relative-entropy: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Section 2.3 and Remark 2.5, printed p.184 / PDF p.7, definition and cube-supremum formula for Poisson-reference specific entropy"
    - title: "H.-O. Georgii, Probabilistic aspects of entropy, in Entropy"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/Dresden.pdf"
      locator: "Section 6, printed pp.48–50 / PDF pp.9–12, independent finite-state lattice entropy-density treatment; used for comparison only"
---

## Statement

Assume AC and let $P\in\mathcal P^1_{\rm stat}(\Omega)$, with this class defined in [[def-tdmath-local-tame-topology]], be stationary for the translations of [[def-tdmath-poisson-configuration-reference]]. For a bounded Borel set $G$, write $P_G$ and $Q_G$ for the restrictions of $P$ and the unit-intensity Poisson reference $Q$ to configurations in $G$. For $L>0$, put $\Lambda_L=[0,L)^d$ and
$$D_L:=D(P_{\Lambda_L}\Vert Q_{\Lambda_L}).$$
Then the specific relative entropy density
$$I(P):=\lim_{L\to\infty}\frac{D_L}{L^d}$$
exists in $[0,+\infty]$ and satisfies
$$I(P)=\sup_{m\in\mathbb N,\ m\geq1}\frac{D(P_{\Lambda_m}\Vert Q_{\Lambda_m})}{m^d}.$$
If $I(P)<\infty$, every bounded Borel restriction has finite relative entropy. This is an information functional relative to the specified unit-intensity Poisson law; changing the reference changes its value.

## Facts & Assumptions

**Given:** AC, dimension $d\geq1$, a stationary finite-intensity configuration law $P$, and the unit-intensity reference $Q$.

[A1] The Axiom of Choice is inherited from the standard-Borel Poisson reference and its countable product construction ([[def-axiom-of-choice]], [[def-tdmath-poisson-configuration-reference]]).

[F1] For independent Poisson reference restrictions on disjoint bounded sets, the finite-region relative entropy is nonnegative, obeys the conditional chain rule, and does not increase under restriction ([[thm-tdmath-poisson-reference-count-properties]], [[def-tdmath-finite-region-relative-entropy]], [[lem-tdmath-relative-entropy-variational-and-chain-rules]]).

[F2] The domain $\mathcal P^1_{\rm stat}(\Omega)$ consists of translation-invariant laws with finite unit-cell count, and stationarity of $P$ and $Q$ gives $D(P_{G+x}\Vert Q_{G+x})=D(P_G\Vert Q_G)$ for every bounded Borel $G$ and translation $x$ ([[def-tdmath-local-tame-topology]], [[def-tdmath-poisson-configuration-reference]], [[thm-tdmath-poisson-reference-count-properties]]).

[F3] If a cube restriction has finite relative entropy, then every bounded subregion has no larger relative entropy ([[lem-tdmath-relative-entropy-variational-and-chain-rules]], claim 2).

## Proof

**Given:** AC, $P$, and $Q$ as in the Statement.

1.1 If $G_1,G_2$ are disjoint bounded Borel sets, [F1] decomposes $D(P_{G_1\cup G_2}\Vert Q_{G_1}\otimes Q_{G_2})$ into $D(P_{G_1}\Vert Q_{G_1})$ plus the mean conditional relative entropy of $G_2$ given $G_1$. That conditional increment is at least $D(P_{G_2}\Vert Q_{G_2})$ by the conditioning monotonicity in [F1], comparing observation by $G_1$ with no observation. Thus relative entropy is superadditive over disjoint regions; if the left side is infinite the inequality is immediate, and otherwise all terms in the chain rule are finite. [A1, F1, algebra]

2.1 Fix an integer $m\geq1$ and let $q_N=\lfloor N/m\rfloor$. Tile $[0,q_Nm)^d$ by $q_N^d$ disjoint translates of $\Lambda_m$, leaving the Borel remainder $\Lambda_N\setminus[0,q_Nm)^d$. Iterating step 1.1 and using nonnegativity on the remainder gives $$D(P_{\Lambda_N}\Vert Q_{\Lambda_N})\geq q_N^dD(P_{\Lambda_m}\Vert Q_{\Lambda_m}),$$ because stationarity gives the same entropy for each translated $m$-cube. If $D(P_{\Lambda_m}\Vert Q_{\Lambda_m})=+\infty$, this forces $D(P_{\Lambda_N}\Vert Q_{\Lambda_N})=+\infty$ for every $N\geq m$. [F1, F2, step 1.1, construct]

3.1 Put $s=\sup_{m\geq1}m^{-d}D(P_{\Lambda_m}\Vert Q_{\Lambda_m})$. If $s=+\infty$, step 2.1 makes the liminf of $N^{-d}D_N$ exceed every finite bound, so the integer-cube limit is $+\infty=s$. If $s<+\infty$, step 2.1 gives $$\liminf_{N\to\infty}N^{-d}D_N\geq m^{-d}D(P_{\Lambda_m}\Vert Q_{\Lambda_m})$$ for every $m$, since $q_N^d/N^d\to m^{-d}$. Taking the supremum gives liminf at least $s$, while the definition of $s$ gives $N^{-d}D_N\leq s$ for every integer $N$. Hence the integer-cube limit exists and equals $s$. [step 2.1, algebra]

4.1 For real $L\to\infty$, let $N=\lfloor L\rfloor$. The inclusions $\Lambda_N\subseteq\Lambda_L\subseteq\Lambda_{N+1}$ and [F3] give $D_N\leq D_L\leq D_{N+1}$. Since $N/L\to1$ and $(N+1)/L\to1$, step 3.1 squeezes $L^{-d}D_L$ to the same extended limit $s$; if some integer-cube entropy is infinite, monotonicity gives the same conclusion directly. [F2, F3, step 3.1, algebra]

5.1 If $I(P)<\infty$ and $A$ is bounded, choose an integer cube $\Lambda_N+x$ containing $A$. Stationarity [F2] and restriction monotonicity [F3] give $$D(P_A\Vert Q_A)\leq D(P_{\Lambda_N+x}\Vert Q_{\Lambda_N+x})=D(P_{\Lambda_N}\Vert Q_{\Lambda_N})\leq N^d I(P)<\infty.$$ Thus every bounded restriction has finite relative entropy. [F2, F3, step 3.1, construct] ∎

