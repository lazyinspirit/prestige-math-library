---
id: thm-dodd-jensen-covering-supplies-fleissner-hyp-data
kind: theorem
title: "Dodd-Jensen covering supplies Fleissner HYP data"
status: published
origin: pipeline
deps: [def-fleissner-hyp-covering-interface, def-dodd-jensen-covering-and-square-package, def-axiom-of-choice, def-cardinal, def-aleph-and-beth-hierarchies]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Chris Good, Large cardinals and small Dowker spaces"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/large.pdf"
      locator: "Definitions 3-6, Theorem 7, and Lemmas 8, 11-12, printed pp. 2-4"
    - title: "William G. Fleissner, If all normal Moore spaces are metrizable, then there is an inner model with a measurable cardinal"
      url: "https://kuscholarworks.ku.edu/server/api/core/bitstreams/88062b98-5ab8-4fdc-9548-9e00a9c7507d/content"
      locator: "Application of Jensen-Dodd covering to HYP, printed pp. 366-368"
verification:
  audited: 2026-09-22
---

## Statement

In $\mathrm{ZFC}$, if there is no inner model with a measurable cardinal, then
the Dodd-Jensen covering and square package
([[def-dodd-jensen-covering-and-square-package]]) supplies a singular strong
limit cardinal $\kappa$ of cofinality $\omega$ with $2^\kappa = \kappa^+$ and a
nonreflecting stationary set $E \subseteq \{\, \delta < \kappa^+ :
\operatorname{cf}(\delta) = \omega \,\}$. Consequently HYP holds
([[def-fleissner-hyp-covering-interface]]).

## Facts & Assumptions

**Given:** The hypothesis that there is no inner model with a measurable cardinal, and the Dodd-Jensen covering and square package for the core model $K$ that this hypothesis supplies.

[F1] The package: $\operatorname{Cov}(V,K)$; GCH and square in $K$; an uncountable strong limit cardinal $\kappa$ of countable cofinality with $2^\kappa = \kappa^+$ and $\square_\kappa$; $\diamondsuit_{\kappa^+}(W)$ for $W = \{\alpha < \kappa^+ : \operatorname{cf}(\alpha) = \omega\}$; and a stationary $E \subseteq W$ with $\square_\kappa(E)$ ([[def-dodd-jensen-covering-and-square-package]]).

[F2] If $C$ is club in an ordinal $\beta$ of uncountable cofinality, then the set $\operatorname{acc}(C)$ of its limit points is also club in $\beta$; closedness gives $\operatorname{acc}(C)\subseteq C$. The uncountable-cofinality qualification is essential: a club of order type $\omega$ can have no limit points below its supremum. Here "$\alpha$ is a limit point of $C_\beta$" means $\alpha=\sup(C_\beta\cap\alpha)$ ([[def-cardinal]]).

[L1] A cardinal $\kappa$ is a strong limit exactly when $2^\lambda < \kappa$ for every $\lambda < \kappa$; if in addition $\operatorname{cf}(\kappa) = \omega$, then there is an increasing sequence of cardinals $(\kappa_n)_{n \in \omega}$ cofinal in $\kappa$ ([[def-cardinal]], [[def-aleph-and-beth-hierarchies]]).

[L2] A $\Sigma_1$-definable choice from the given data, e.g. $\kappa_n := \left(\sup_{m \le n} 2^{\gamma_m}\right)^+$ for a fixed cofinal $\omega$-sequence $(\gamma_n)$ in $\kappa$, is legitimate, since a single sequence is chosen once and the rest is defined by a formula; only the initial choice of $(\gamma_n)$ uses the axiom of choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Assume there is no inner model with a measurable cardinal; by [F1] the package provides $\kappa$ with $2^\kappa = \kappa^+$, $\square_\kappa$, $\diamondsuit_{\kappa^+}(W)$ and a stationary $E \subseteq W$ with $\square_\kappa(E)$. [given, F1]

2.1 Clause (2) of HYP holds: $2^\kappa = \kappa^+$ by step 1.1. [step 1.1]

2.2 Clause (1) of HYP holds: $\kappa$ is an uncountable strong limit of countable cofinality by step 1.1, so [L1] and [L2] give an increasing sequence $(\kappa_n)$ of cardinals cofinal in $\kappa$ with $2^{\kappa_n} < \kappa$ for every $n$. [step 1.1, L1, L2]

2.3 $E$ is stationary in $\kappa^+$: it is stationary in $\kappa^+$ as a subset of $W$ by step 1.1, and $E \subseteq W \subseteq \kappa^+$. Hence clause (3a) of HYP holds. [step 1.1]

2.4 Clause (3b) holds. Suppose towards a contradiction that $E\cap\beta$ is stationary in some $\beta<\kappa^+$ with $\operatorname{cf}(\beta)>\omega$. Let $\langle C_\alpha\rangle$ witness $\square_\kappa(E)$. By [F2], $\operatorname{acc}(C_\beta)$ is club in $\beta$, so stationarity gives $\alpha\in E\cap\operatorname{acc}(C_\beta)$. But clause (iii) of $\square_\kappa(E)$ says that every limit point of $C_\beta$ lies outside $E$, a contradiction. Hence $E\cap\beta$ is nonstationary for every such $\beta$, exactly as required by the local HYP interface. [step 1.1, F2]

3.1 By steps 2.1, 2.2, 2.3 and 2.4 the objects $\kappa,(\kappa_n)_{n\in\omega},E$ satisfy clauses (1a), (1b), (2), (3a) and (3b) of the local interface. Thus HYP holds, with $\kappa$ singular of cofinality $\omega$ and $E$ nonreflecting at every uncountable-cofinality stage as asserted. [step 2.1, step 2.2, step 2.3, step 2.4] ∎

## Remarks

- **The covering theorem is a declared input.** Statements 1-2 of the package are the Dodd-Jensen covering theorem and the fine-structure of $K$; this item derives the HYP clauses from them and does not reprove them. The exact citations are in [[def-dodd-jensen-covering-and-square-package]].

- **Where the conclusion is used.** HYP is the hypothesis of the construction of a normal nonmetrizable Moore space recorded elsewhere on this page, and hence of the inner-model lower bound for the normal Moore space conjecture.
