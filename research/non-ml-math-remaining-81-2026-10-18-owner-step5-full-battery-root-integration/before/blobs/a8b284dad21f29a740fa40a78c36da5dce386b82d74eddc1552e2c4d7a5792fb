---
id: thm-it-perfect-privacy-kernel-criterion
kind: theorem
title: "A finite kernel criterion for perfect privacy"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-finite-source-privacy-utility-region, def-it-finite-mutual-information, thm-it-finite-kl-nonnegative-equality]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all variables and sums are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Ali Makhdoumi, Salman Salamatian, Nadia Fawaz, and Muriel Médard, From the Information Bottleneck to the Privacy Funnel, ITW 2014"
      url: https://www.nadiafawaz.com/Publis/ConfPapers/Fawaz-ITW2014.pdf
      locator: "§II: finite sensitive/useful variables and randomized privacy mappings; §III: mutual-information leakage."
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF pp. 23-8–23-11: finite joint laws and secrecy-related mutual information."
---

## Statement

Let $(S,X)$ have a finite joint law and let $K(z\mid x)$ be a finite release kernel, giving $P_{SXZ}=P_{SX}K_{Z\mid X}$ as in [[def-it-finite-source-privacy-utility-region]]. Then $I(S;Z)=0$ if and only if, for each $z$ with $P_Z(z)>0$, the conditional mixture

$$\sum_xP_{X\mid S=s}(x)K(z\mid x)$$

is independent of $s$ over $\operatorname{supp}P_S$. No full-support assumption is imposed; zero-mass values of $s$ are not constrained.

## Facts & Assumptions

**Given:** A finite joint law $P_{SX}$ and a finite stochastic release kernel $K(z\mid x)$.

[F1] [[def-it-finite-source-privacy-utility-region]]: $P_{SXZ}(s,x,z)=P_{SX}(s,x)K(z\mid x)$, so $P_{Z\mid S=s}(z)=\sum_xP_{X\mid S=s}(x)K(z\mid x)$ for $P_S(s)>0$.

[F2] [[def-it-finite-mutual-information]]: $I(S;Z)=D(P_{SZ}\|P_S\otimes P_Z)$.

[F3] [[thm-it-finite-kl-nonnegative-equality]]: $D(P\|Q)=0$ if and only if the finite probability vectors $P,Q$ are equal; a positive numerator above a zero denominator gives $+\infty$.

## Proof

1.1 If $I(S;Z)=0$, [F2] and [F3] give $P_{SZ}=P_S\otimes P_Z$. For every $s$ with $P_S(s)>0$, divide the equality $P_{SZ}(s,z)=P_S(s)P_Z(z)$ by $P_S(s)$ and use [F1]. The conditional mixture in the Statement is therefore $P_Z(z)$, independent of $s$ for every $z$, in particular for every positive-mass $z$. [F1, F2, F3, given, algebra]

1.2 Conversely, assume the stated mixture is a constant $c_z$ in $s$ on $\operatorname{supp}P_S$ for each $z$ with $P_Z(z)>0$. Averaging it over $P_S$ shows $c_z=P_Z(z)$. If $P_Z(z)=0$, [F1] gives $0=P_Z(z)=\sum_{s:P_S(s)>0}P_S(s)P_{Z\mid S=s}(z)$, a finite sum of nonnegative terms with positive weights; hence each $P_{Z\mid S=s}(z)=0=P_Z(z)$. Thus for every $s$ in the support and every $z$, $P_{Z\mid S=s}(z)=P_Z(z)$, so [F1] yields $P_{SZ}=P_S\otimes P_Z$. [F1, given, algebra]

2.1 Applying [F2] and [F3] to this equality gives $I(S;Z)=0$. This proves both directions, including zero-probability release symbols. [F2, F3, step 1.2] ∎
