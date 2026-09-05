---
id: thm-hahn-banach-dominated-extension
kind: theorem
title: "Hahn-Banach dominated extension theorem for real vector spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-hahn-banach-one-step-extension,
       lem-union-of-a-chain-of-dominated-extensions, thm-zorn]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis, Theorem 26.1"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Theorem 4.13"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a real vector space, let
$M \subseteq X$ be a linear subspace, let
$p:X \to \mathbb{R}$ be sublinear, and let $f:M \to \mathbb{R}$ be linear with
$f(m) \le p(m)$ for every $m \in M$. Then there exists a linear functional
$F:X \to \mathbb{R}$ such that $F|_M=f$ and $F(x) \le p(x)$ for every $x \in X$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a real vector space $X$, a linear subspace $M \subseteq X$, a
sublinear functional $p:X \to \mathbb{R}$, and a linear functional
$f:M \to \mathbb{R}$ with $f \le p$ on $M$.

[L1] The one-step extension problem over $M+\mathbb{R}x_0$ has a nonempty
interval of admissible values for $F(x_0)$
([[lem-hahn-banach-one-step-extension]]).

[L2] The union of a chain of dominated extensions is again a well-defined
dominated extension ([[lem-union-of-a-chain-of-dominated-extensions]]).

[L3] Assuming the Axiom of Choice, a nonempty poset in which every chain has an
upper bound has a maximal element ([[thm-zorn]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal{E}$ be the set of all pairs $(N,g)$ such that $M \subseteq N \subseteq X$, the set $N$ is a linear subspace of $X$, the map $g:N \to \mathbb{R}$ is linear, $g|_M=f$, and $g \le p$ on $N$. Order $\mathcal{E}$ by extension: $$(N_1,g_1) \preceq (N_2,g_2) \iff N_1 \subseteq N_2 \text{ and } g_2|_{N_1}=g_1.$$ The pair $(M,f)$ lies in $\mathcal{E}$, so this poset is nonempty. [given, construct]

2.1 Let $\mathcal{C} \subseteq \mathcal{E}$ be a chain. If $\mathcal{C}=\emptyset$, then $(M,f)$ is an upper bound for it. If $\mathcal{C} \ne \emptyset$, [L2] applies to the union of its domains and yields a well-defined linear functional dominated by $p$; because every chain element extends $f$, that union functional still extends $f$. Hence every chain in $\mathcal{E}$ has an upper bound in $\mathcal{E}$. [L2, step 1.1, given]

3.1 By [L3], choose a maximal element $(N,F)$ of $\mathcal{E}$. If $N \ne X$, choose $x_0 \in X \setminus N$. Applying [L1] to the dominated functional $F$ on the subspace $N$ produces a dominated linear extension $\widetilde{F}$ on $N+\mathbb{R}x_0$. Then $(N,F) \prec (N+\mathbb{R}x_0,\widetilde{F})$, contradicting maximality. Therefore $N=X$. [L1, L3, step 2.1, choose]

4.1 Since the maximal domain is all of $X$, the corresponding functional $F$ is the required dominated extension of $f$. [step 3.1] ∎
