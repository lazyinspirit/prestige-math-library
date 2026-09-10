---
id: prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip
kind: proposition
title: Cofibrations are characterized by a retraction of the mapping cylinder strip
deps: ["def-cofibration-and-homotopy-extension-property", "lem-interval-exponential-law-and-quotient-homotopies", "thm-quotient-universal-property", "lem-compact-generation-preserves-the-cylinder-and-closed-pushouts", "lem-weak-hausdorff-diagonals-and-closed-quotients"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 6 §2 p.44
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For $i:A\to X$ in CGWH, let $R=X\cup_i(A\times I)$, identifying $(a,0)$ with i(a), and let $c:R\to X\times I$ send x to $(x,0)$ and $(a,t)$ to $(i(a),t)$. Unbased HEP is equivalent to the existence of $s:X\times I\to R$ with $sc=\mathrm{id}_R$. It forces i to be a closed embedding. For a closed inclusion this is the retraction criterion for $X\times\{0\}\cup A\times I$. The based version holds with the basepoint track collapsed in both R and the cylinder, and based HEP also forces i to be a closed embedding.

## Facts & Assumptions

[F1] HEP extends each compatible initial map and homotopy. [[def-cofibration-and-homotopy-extension-property]]

[F2] Closed attachments and closed-track quotients are CGWH. [[lem-compact-generation-preserves-the-cylinder-and-closed-pushouts]]

[F3] Equalizers into CGWH spaces are closed by the closed k-diagonal. [[lem-weak-hausdorff-diagonals-and-closed-quotients]]

[F4] Compatible maps descend through the quotient. [[thm-quotient-universal-property]]

[F5] Quotient times I is quotient. [[lem-interval-exponential-law-and-quotient-homotopies]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 The attachment $A\times\{0\}\hookrightarrow A\times I$ is closed, so R is CGWH by F2. Use R as target in HEP, with the initial copy of X and the homotopy $a,t\mapsto[a,t]$. The required extension s satisfies $sc=\mathrm{id}$ on each summand, hence on R. Conversely, compatible data $f,h$ induce a continuous $d:R\to Z$ by F4, and $ds$ is the required extension. [F1, F2, F4]

2.1 A left inverse s makes c injective and gives a continuous inverse from its image. Moreover $c(R)=\{z:cs(z)=z\}$, closed by F3; hence c is a closed embedding. The free end $A\times\{1\}$ embeds closed in R: it is disjoint from the attaching end and every closed subset of it has closed saturated image in the quotient. Its image under c is $i(A)\times\{1\}$. Restricting the resulting closed embedding to the endpoint identifies i as a closed embedding. [F2, F3, F4, step 1.1]

3.1 When i is a closed inclusion, both $X\times\{0\}$ and $A\times I$ are closed in the cylinder. A function out of their union is continuous exactly when its restrictions are continuous and agree on the overlap, by finite closed pasting. Thus its subspace topology is the pushout topology of R, and c is the inclusion of that strip. The first equivalence becomes exactly the ordinary strip-retraction criterion. [F2, F4, step 1.1, step 2.1]

4.1 For based HEP replace R and $X\times I$ by their reduced versions, collapsing the closed basepoint tracks. They are CGWH by F2. The same universal test uses based maps and yields a left inverse; conversely the composite extension is based. Thus c is again a closed embedding by the equalizer argument. In each reduced space an endpoint copy is a closed embedding: a closed endpoint subset has saturation itself if it misses the basepoint, and its union with the collapsed track if it contains it. Applying this to the free copies of A and X recovers i as a closed embedding. All cylinder homotopies descend with their actual topology by F5. [F1, F2, F3, F4, F5, step 1.1, step 2.1] ∎
