---
id: fs-noetherian-rings-have-noetherian-subrings
kind: false-statement
title: "False statement: every subring of a Noetherian ring is Noetherian"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-noetherian-ring, def-field-of-fractions, thm-field-of-fractions-is-a-field-and-the-domain-embeds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Noetherian Modules, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf"
pipeline_run: null
---

## Statement

**False claim:** every subring of a Noetherian ring is Noetherian. See [[def-noetherian-ring]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the false claim.

[L1] A unital ring $R$ is left Noetherian when its left regular module ${}_R R$ is Noetherian, and right Noetherian when the right regular module $R_R$ is Noetherian. Unqualified “Noetherian ring” means left Noetherian here; the side is stated whenever both notions occur. ([[def-noetherian-ring]]).

[L2] If $D$ is an integral domain, then $D\setminus\{0\}$ is multiplicative. Its localisation $$ \operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D $$ is the field of fractions of $D$. Thus its elements are fractions $a/b$ with $a,b\in D$ and $b\ne0$, modulo the localisation equivalence relation. ([[def-field-of-fractions]]).

[L3] For every integral domain $D$, the localisation $\operatorname{Frac}(D)$ is a field. Its canonical map $$ D\longrightarrow\operatorname{Frac}(D),\qquad d\longmapsto d/1, $$ is an injective unital ring homomorphism. ([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

## Refutation

**Proof technique:** direct.

1.1 Fix a field $F$ and let $R$ consist of polynomials in symbols $x_0,x_1,\ldots$ in which each polynomial contains only finitely many monomials and variables. The usual polynomial operations make $R$ a domain, so it embeds in its fraction field $K$. [L1, L2, L3, given, algebra]

2.1 The field $K$ is Noetherian because its only ideals are $0$ and $K$. In $R$, the ideals $I_n=(x_0,\ldots,x_n)$ satisfy $I_n<I_{n+1}$: setting $x_0,\ldots,x_n$ to zero leaves $x_{n+1}$ nonzero, so $x_{n+1}\notin I_n$. [step 1.1, given, algebra]

3.1 Thus the Noetherian ring $K$ contains the non-Noetherian subring $R$, which refutes the claim. This proves the stated claim. [step 2.1, given, algebra] ∎
