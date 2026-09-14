---
id: thm-discrete-strong-markov-property
kind: theorem
title: "Discrete strong Markov property"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-markov-property-for-bounded-future-path-functionals, def-discrete-stopping-time, def-sigma-algebra-at-a-stopping-time, lem-stopping-time-sigma-algebra-is-a-sigma-algebra, lem-stopped-random-variable-is-measurable-at-the-stopping-time, thm-dominated-convergence]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Theorem 5.2.5 and complete proof, printed p. 283"
---

## Statement

Assume Choice. Let $X$ be a $K$-chain, let
$\tau:\Omega\to\mathbb N_0\cup\{\infty\}$ be a stopping time, and let $H$ be a
bounded measurable path functional. Put $h(x)=\mathbb E_xH$ and define the
everywhere meaningful random variables
$$ Z_H:=\sum_{n\ge0}1_{\{\tau=n\}}H(X_n,X_{n+1},\ldots), \qquad R_h:=\sum_{n\ge0}1_{\{\tau=n\}}h(X_n). $$ Both are defined to be zero on $\{\tau=\infty\}$. Then $$ \mathbb E[Z_H\mid\mathcal F_\tau]=R_h\quad\text{a.s.} $$ This is the precise meaning of the usual eventwise notation $$ \mathbb E[1_{\{\tau<\infty\}}H(X_\tau,X_{\tau+1},\ldots)\mid\mathcal F_\tau] =1_{\{\tau<\infty\}}h(X_\tau): $$
no value $X_\infty$ is used. If $\tau<\infty$ almost surely, the indicators can
be omitted.

## Facts & Assumptions

**Given:** Choice, the chain, stopping time and bounded $H$ in the statement.

[F1] At deterministic time $n$, $\mathbb E[H(X_n,X_{n+1},\ldots)\mid\mathcal F_n]=h(X_n)$, with measurable $h$. ([[thm-markov-property-for-bounded-future-path-functionals]])

[F2] If $A\in\mathcal F_\tau$, then $A\cap\{\tau=n\}\in\mathcal F_n$ for every finite $n$. ([[def-sigma-algebra-at-a-stopping-time]])

[F3] A stopped adapted random variable, set to a fixed value on $\{\tau=\infty\}$, is $\mathcal F_\tau$-measurable. ([[lem-stopped-random-variable-is-measurable-at-the-stopping-time]])

[F4] Dominated convergence passes the partial-sum limit through expectation. ([[thm-dominated-convergence]])

## Proof

1.1 Since $h$ is measurable, $(h(X_n))$ is adapted. Applying [F3] with value [F1, F3] zero at infinity shows that $R_h$ is $\mathcal F_\tau$-measurable. Moreover $|Z_H|,|R_h|\le\lVert H\rVert_\infty$, so both variables are integrable. This also covers $H=0$, constant $H=1$, and the event $\{\tau=\infty\}$, where both variables vanish by definition. [F1, F3]

2.1 Fix $A\in\mathcal F_\tau$. For every finite $n$, [F2] and [F1] give [F1, F2, F4, step 1.1] $$ \begin{aligned} &\mathbb E[1_{A\cap\{\tau=n\}}H(X_n,X_{n+1},\ldots)]\\ &\qquad=\mathbb E[1_{A\cap\{\tau=n\}}h(X_n)]. \end{aligned} $$ Sum from $n=0$ to $N$. The partial sums on either side are bounded in absolute value by $\lVert H\rVert_\infty$ and converge pointwise to $1_AZ_H$ and $1_AR_h$. By [F4], letting $N\to\infty$ gives $\mathbb E[1_AZ_H]=\mathbb E[1_AR_h]$. Together with step 1.1 this is the defining event test for the displayed conditional expectation. Empty $A$, full $A$, $\tau=0$, and an almost-surely infinite $\tau$ require no separate argument. [F1, F2, F4, step 1.1]

3.1 If $\mathbb P(\tau<\infty)=1$, the exceptional infinity event is null, so [step 2.1] $Z_H=H(X_\tau,X_{\tau+1},\ldots)$ and $R_h=h(X_\tau)$ almost surely for any arbitrary values assigned there. This proves the finite form. Choice is used only by [F1] and the conditional expectation in the conclusion. [step 2.1] ∎
