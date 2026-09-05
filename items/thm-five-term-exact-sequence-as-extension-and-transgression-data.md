---
id: thm-five-term-exact-sequence-as-extension-and-transgression-data
kind: theorem
title: "Extension-theoretic interpretation of the standard five-term exact sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-restriction-inflation-and-the-quotient-conjugation-action-on-first-cohomology, thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action, thm-inflation-restriction-exact-sequence-in-degree-one]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

For an extension $1\to N\to G\to Q\to1$ and an abelian $G$-module $A$, assume
the standard low-degree sequence

$$
0\to H^1(Q,A^N)\xrightarrow{\operatorname{Inf}}H^1(G,A)\xrightarrow{\operatorname{Res}}H^1(N,A)^Q\xrightarrow{\operatorname{Tra}}H^2(Q,A^N)\xrightarrow{\operatorname{Inf}}H^2(G,A)
$$

is exact. Then the transgression detects extension of degree-one classes:
for $[u]\in H^1(N,A)^Q$ one has $\operatorname{Tra}[u]=0$ exactly when $[u]$
is the restriction of a class in $H^1(G,A)$. Under the factor-set
classification, the last inflation map is represented by
pulling a $Q$-extension back along $G\to Q$ and then pushing it out along the
inclusion $A^N\hookrightarrow A$.

## Facts & Assumptions

**Given:** An extension $1\to N\to G\to Q\to1$ and an abelian $G$-module $A$.

[F1] Restriction and inflation in degree one are the explicit maps defined on cocycles in [[def-restriction-inflation-and-the-quotient-conjugation-action-on-first-cohomology]].

[L1] The degree-one inflation-restriction sequence is exact ([[thm-inflation-restriction-exact-sequence-in-degree-one]]).

[L2] $H^2(Q,A^N)$ classifies extensions of $Q$ by $A^N$ ([[thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]]).

[A1] The displayed five-term sequence is the standard exact low-degree five-term sequence attached to $1\to N\to G\to Q\to1$.

## Proof

**Proof technique:** direct.

1.1 The first three terms are exactly the degree-one inflation-restriction sequence, so they are exact by [L1], with maps described concretely by [F1]. [F1, L1, given]

1.2 Under [L2], a class in $H^2(Q,A^N)$ is an extension of $Q$ by $A^N$. The map to $H^2(G,A)$ first pulls that extension back along $G\to Q$, producing an extension of $G$ by $A^N$, and then pushes out along the inclusion $A^N\hookrightarrow A$. That is the extension-theoretic meaning of the last inflation map in the displayed sequence. [L2, given, algebra]

1.3 Exactness of [A1] at $H^1(N,A)^Q$ says
$$\ker(\operatorname{Tra})=\operatorname{im}(\operatorname{Res}).$$
Thus $\operatorname{Tra}[u]=0$ exactly when $[u]$ is the restriction of a
degree-one class on $G$, which is precisely the asserted extension criterion
for the cohomology class. [A1, algebra]

2.1 Steps 1.2 and 1.3 give the two claimed interpretations, while step 1.1 identifies the preceding degree-one maps. [step 1.1, step 1.2, step 1.3] ∎
