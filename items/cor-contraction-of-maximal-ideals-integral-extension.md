---
id: cor-contraction-of-maximal-ideals-integral-extension
kind: corollary
title: "Under an integral extension, a prime is maximal if and only if its contraction is maximal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-field-integrality-criterion, thm-quotient-is-domain-iff-ideal-prime, thm-quotient-is-field-iff-ideal-maximal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (14.3)(1)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 7.3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq B$ be an integral extension, let $\mathfrak q$ be a prime ideal of $B$, and let $\mathfrak p:=\mathfrak q\cap A$. Then $\mathfrak q$ is maximal if and only if $\mathfrak p$ is maximal.

## Facts & Assumptions

**Given:** An integral extension $A \subseteq B$, a prime ideal $\mathfrak q \subseteq B$, and its contraction $\mathfrak p:=\mathfrak q \cap A$.

[L1] In an integral extension of domains, the upper ring is a field if and only if the lower ring is a field ([[lem-field-integrality-criterion]]).

[L2] A quotient by a prime ideal is a domain ([[thm-quotient-is-domain-iff-ideal-prime]]).

[L3] A quotient by a maximal ideal is a field ([[thm-quotient-is-field-iff-ideal-maximal]]).

[A1] The induced map $A/\mathfrak p \to B/\mathfrak q$ is injective and integral.

## Proof

**Proof technique:** direct.

1.1 Because $\mathfrak q$ is prime, [L2] makes $B/\mathfrak q$ a domain. The map $A/\mathfrak p \to B/\mathfrak q$ is injective by definition of $\mathfrak p$, so $A/\mathfrak p$ is a subring of a domain and is therefore a domain. Thus [L2] also shows that $\mathfrak p$ is prime. [L2, A1, given]

2.1 By [A1], $A/\mathfrak p \subseteq B/\mathfrak q$ is an integral extension of domains. Therefore [L1] says that $A/\mathfrak p$ is a field if and only if $B/\mathfrak q$ is a field. Using [L3] on both quotients, this is exactly the statement that $\mathfrak p$ is maximal if and only if $\mathfrak q$ is maximal. [L1, L3, step 1.1] ∎
