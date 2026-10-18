---
id: thm-roe-flux-is-consistent-and-conservative
kind: theorem
title: "The Roe flux is consistent and conservative"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-roe-linearization-and-flux]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 14 §§14.2–14.2.2, printed pp. 148–152: Roe flux and sonic-rarefaction entropy failure"
---

## Statement

For any supplied Roe matrix, the Roe flux is consistent:
$\widehat f_{\rm Roe}(u,u)=f(u)$. For a finite periodic array define
$$U_j^{new}=U_j-\nu\bigl(\widehat f_{j+1/2}-\widehat f_{j-1/2}\bigr),$$
where $\widehat f_{j+1/2}=\widehat f_{\rm Roe}(U_j,U_{j+1})$ and indices are
modulo $n$, with $n\ge1$. For any scalar $\nu$, the update preserves the sum of cell states. The
Roe jump property is the defining matrix identity in
[[def-roe-linearization-and-flux]] and is not an entropy assertion.

## Facts & Assumptions

**Given:** A Roe matrix for each state pair and the flux definition.

[F1] [[def-roe-linearization-and-flux]]: $\widehat f_{\rm Roe}=\frac12(f_L+f_R)-\frac12|\widetilde A|(u_R-u_L)$ and $\widetilde A(u,u)=Df(u)$.

## Proof

1.1 If $u_L=u_R=u$, the jump is zero, so [F1] gives $\widehat f_{\rm Roe}(u,u)=\tfrac12(f(u)+f(u))=f(u)$. [given, F1, algebra]

2.1 Substituting the displayed periodic update into the sum of all cells gives $-\nu\sum_j(\widehat f_{j+1/2}-\widehat f_{j-1/2})$. Each interface flux occurs once with each sign, so the sum is zero. The Roe jump identity is not used in this telescoping argument and no entropy inequality follows from it. [given, F1, algebra] ∎
