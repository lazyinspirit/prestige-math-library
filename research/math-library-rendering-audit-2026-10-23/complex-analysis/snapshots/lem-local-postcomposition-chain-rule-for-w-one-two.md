---
id: lem-local-postcomposition-chain-rule-for-w-one-two
kind: lemma
title: "A local Sobolev chain rule for C^1 postcomposition"
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - lem-test-function-cutoffs-and-euclidean-localization
  - cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences
  - thm-dominated-convergence
  - lem-classical-derivatives-are-weak-derivatives
  - lem-weak-stability-of-sobolev-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - def-ck-and-multi-index-notation-in-several-variables
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
dependency_level: 0
proof_strategy: direct
axiom_use: >-
  Assume Countable Choice, inherited through Meyers–Serrin density, the
  almost-everywhere subsequence, and weak-derivative interfaces used below.
  No full Axiom of Choice is used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (2026)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 1 §1.8, Theorem 1.21, printed pp. 19–20: smooth functions are dense in W^{k,p}(Ω) for 1 ≤ p < ∞; this is the approximation input, while the local composition chain rule is proved here."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
aliases: []
---

## Statement

Assume Countable Choice. Let $U,V\subseteq\mathbb C$ be open, let $u:U\to V$ be continuous and belong to $W^{1,2}_{\mathrm{loc}}(U;\mathbb C)$, and let $G:V\to\mathbb C$ be $C^1$ as a map of real planes. Then $G\circ u\in W^{1,2}_{\mathrm{loc}}(U;\mathbb C)$ and its real weak derivative satisfies
$$D(G\circ u)=DG(u)\,Du\qquad\text{almost everywhere on }U.$$

## Facts & Assumptions

**Given:** Countable Choice; open sets $U,V\subseteq\mathbb C$; a continuous map $u:U\to V$ in $W^{1,2}_{\mathrm{loc}}(U;\mathbb C)$; and a real-$C^1$ map $G:V\to\mathbb C$.

[F1] The $W^{1,2}$ class and its weak derivative are as in [[def-sobolev-space-wkp-and-its-norm]]. For every open set $W\subseteq\mathbb R^2$ and every $v\in W^{1,2}(W;\mathbb C)$ there are $v_j\in C^\infty(W;\mathbb C)\cap W^{1,2}(W;\mathbb C)$ with $v_j\to v$ in $W^{1,2}$, by Meyers–Serrin density ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]]).

[F2] If $K\subseteq V$ is compact, there is $\chi\in C_c^\infty(V)$ equal to $1$ on a neighborhood of $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F3] An $L^2$-convergent sequence has a subsequence of representatives converging almost everywhere under Countable Choice ([[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]).

[F4] If measurable functions converge almost everywhere and are dominated by an integrable function, their integrals converge ([[thm-dominated-convergence]]).

[F5] A $C^1$ function's classical first derivatives are its weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F6] If functions and their proposed first weak derivatives converge locally in $L^2$, the limits satisfy the same weak-derivative identities ([[lem-weak-stability-of-sobolev-derivatives]]).

[F7] A real-$C^1$ map has a total derivative at each point ([[def-ck-and-multi-index-notation-in-several-variables]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]), and the classical derivative of a composition of differentiable maps is the product of their total derivatives ([[thm-chain-rule-for-total-derivatives]]).

[F8] Every bounded open subset of $\mathbb R^2$ has finite Lebesgue measure under Countable Choice ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F9] Countable Choice says that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

**Choice use.** Countable Choice is used through [F1], [F3], [F5] and [F6], and to interpret local Sobolev and measure classes. The cutoff is supplied by an explicit ZF construction. The proof uses no full Axiom of Choice.

## Proof

**Proof technique:** local smooth approximation and passage of the classical chain rule to weak derivatives.

1.1 Fix $U_0\Subset U$. Its closure is compact, so continuity gives a compact set $K:=u(\overline{U_0})\subset V$. By [F2] choose $\chi\in C_c^\infty(V)$ equal to $1$ on a neighborhood of $K$. Define $\widetilde G=\chi G$ on $V$ and extend it by $0$ to $\mathbb C\setminus V$. Since $\chi$ has compact support in $V$, $\widetilde G$ is globally $C^1$, bounded, and has bounded derivative, and it agrees with $G$ on a neighborhood of $K$. [F2, given]

1.2 The restriction $u|_{U_0}$ belongs to $W^{1,2}(U_0;\mathbb C)$. By [F1] choose $u_j\in C^\infty(U_0;\mathbb C)$ converging to it in $W^{1,2}(U_0)$. Each $\widetilde G\circ u_j$ is $C^1$ and its classical derivative is $D\widetilde G(u_j)Du_j$ by [F7]; by [F5] this is also its weak derivative. [F1, F5, F7, F9, given]

2.1 Since $u_j\to u$ in $L^2(U_0)$, [F3] gives a subsequence, still denoted $u_j$, converging to $u$ almost everywhere. Thus $\widetilde G(u_j)\to\widetilde G(u)$ almost everywhere. The functions are uniformly bounded by $\|\widetilde G\|_\infty$, and $U_0$ has finite measure by [F8]; dominated convergence gives $\widetilde G(u_j)\to\widetilde G(u)$ in $L^2(U_0)$. [F3, F4, F8, F9, step 1.1, given]

3.1 Continuity of $D\widetilde G$ gives $D\widetilde G(u_j)\to D\widetilde G(u)$ almost everywhere along the subsequence of step 2.1, and these matrices are bounded by $M:=\|D\widetilde G\|_\infty$. Write
$$D\widetilde G(u_j)Du_j-D\widetilde G(u)Du=D\widetilde G(u_j)(Du_j-Du)+(D\widetilde G(u_j)-D\widetilde G(u))Du.$$
The first term tends to $0$ in $L^2$ because $Du_j\to Du$ in $L^2$ and the matrices have norm at most $M$. The second tends to $0$ in $L^2$ by [F4], since it converges almost everywhere and its squared norm is bounded by $4M^2|Du|^2\in L^1(U_0)$. Therefore the weak derivatives of $\widetilde G\circ u_j$ converge in $L^2(U_0)$ to $D\widetilde G(u)Du$. [F1, F4, F5, step 1.2, step 2.1]

4.1 Apply [F6] to the function convergence in step 2.1 and the derivative convergence in step 3.1. It gives $\widetilde G\circ u\in W^{1,2}(U_0)$ with weak derivative $D\widetilde G(u)Du$. Since $u(U_0)\subseteq K$ and $\widetilde G=G$ on a neighborhood of $K$, this is $G\circ u$ with derivative $DG(u)Du$. As $U_0\Subset U$ was arbitrary, the asserted local Sobolev membership and chain rule hold on $U$. The empty-domain case is vacuous. [F6, step 1.1, step 2.1, step 3.1, given] ∎
