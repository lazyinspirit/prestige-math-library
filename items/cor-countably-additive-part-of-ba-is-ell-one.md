---
id: cor-countably-additive-part-of-ba-is-ell-one
kind: corollary
title: "The countably additive part of ba is ell-one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-dual-of-ell-infinity-is-ba, thm-existence-of-a-shift-invariant-mean-on-bounded-sequences]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Michael Müger, Introduction to Functional Analysis"
      url: "https://www.math.ru.nl/~mueger/functionalanalysis.pdf"
      locator: "Definition B.20 and Proposition B.21, printed pp.193-194"
pipeline_run: phase-2-next-18
---

## Statement

Assume AC. A charge $\nu\in ba(\mathcal P(\mathbb N))$ is countably additive
exactly when there is $(a_n)\in\ell^1$ such that

$$\nu(A)=\sum_{n\in A}a_n\qquad(A\subseteq\mathbb N).$$

These charges form a proper linear subspace of $ba(\mathcal P(\mathbb N))$.

## Facts & Assumptions

[A1] AC holds ([[def-axiom-of-choice]]).

[L1] A positive norm-one shift-invariant mean exists under AC
([[thm-existence-of-a-shift-invariant-mean-on-bounded-sequences]]).

[L2] Functionals on $\ell^\infty$ correspond isometrically to finite-variation
charges ([[thm-dual-of-ell-infinity-is-ba]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Let $\nu$ be countably additive and put $a_n=\nu(\{n\})$. For every $N$, [given]
the singleton partition of $\{0,\ldots,N\}$ gives
$\sum_{n=0}^N|a_n|\le|\nu|(\mathbb N)$. Thus $(a_n)\in\ell^1$.
Countable additivity applied to $A=\bigsqcup_{n\in A}\{n\}$ gives the displayed
formula. [countable additivity, variation]

2.1 Conversely, if $(a_n)\in\ell^1$, absolute convergence makes [given, step 1.1]
$\nu_a(A)=\sum_{n\in A}a_n$ independent of enumeration and countably additive;
also $|\nu_a|(\mathbb N)=\sum_n|a_n|<\infty$. This proves the equivalence and
linearity of the subspace. [absolute convergence]

3.1 Use [A1] exactly through [L1], and let $L$ be the resulting mean. By [L2], [given, A1, L1, L2, step 2.1]
$\nu(A):=L(\mathbf1_A)$ is a charge. Shift invariance makes all singleton
masses equal because $S\mathbf1_{\{n+1\}}=\mathbf1_{\{n\}}$. Moreover
$S\mathbf1_{\{0\}}=0$, so shift invariance and linearity give
$\nu(\{0\})=L(\mathbf1_{\{0\}})=L(0)=0$. Hence
$\nu(\{n\})=0$ for every $n$ but $\nu(\mathbb N)=L(\mathbf1)=1$, so it is not
countably additive. The subspace is proper.
[A1, L1, L2] ∎
