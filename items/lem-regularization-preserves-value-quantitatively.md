---
id: lem-regularization-preserves-value-quantitatively
kind: lemma
title: "Regularization preserves value quantitatively"
status: published
origin: pipeline
deps: [lem-cloud-plurality-rounding]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification; §4 Lemma4.1, PDF pages13–14."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Statement

Let $G$ have $m=|E|>0$ ordinary edges, with the fixed nonempty alphabet and paired-loop convention. Its cloud graph $G_1$ is degree $129$, has $2m$ vertices and $129m$ ordinary edges, and is constructible in polynomial time without changing the alphabet. Put $K=\max(1,2/h_0)=20/7$ and $c=1/(129K)$. Then
$$c\operatorname{UNSAT}(G)\le\operatorname{UNSAT}(G_1)\le\operatorname{UNSAT}(G)/129.$$
For every labeling $\tau$ of $G_1$, plurality decoding $D\tau$ satisfies $\operatorname{UNSAT}_{D\tau}(G)\le129K\operatorname{UNSAT}_\tau(G_1)$. For an edgeless input use the empty output convention and UNSAT zero.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For any labeling of the cloud graph $G_1$ of a nonempty-edge constraint graph $G$, decode each original vertex by its cloud's plurality label, using fixed tie breaking. Let $S$ count the ports disagreeing with that label, and let $U_{\rm int},U_{\rm ext}$ count violated internal equality and external edges. Then $$U_{\rm int}\ge\frac{h_0}{2}S,\qquad U_G\le U_{\rm ext}+S,\qquad h_0=7/10,$$ where $U_G$ is the decoded violation count in $G$. ([[lem-cloud-plurality-rounding]]).


## Proof

1.1 Each original edge has two ports even if it is a loop. Every port has $128$ internal slots and one external slot, so there are $2m$ vertices and $129(2m)/2=129m$ edges. Listing each all-size cloud expander and copying the original relation tables takes polynomial time in the explicit input size; the sum of polynomial cloud costs is polynomial since their total size is $2m$. [F1]

2.1 For an arbitrary output labeling, the rounding inequalities give $U_G\le U_{\rm ext}+(2/h_0)U_{\rm int}\le K(U_{\rm ext}+U_{\rm int})$. Divide by $m$ and use the $129m$ output edge count to get the assignment-level inequality. Minimizing the output violation fraction then gives the lower bound with $c$. [F1, step 1.1]

3.1 An optimal original labeling exists because the alphabet and vertex set are finite nonempty (the empty vertex set has its one labeling). Extend it constantly on each cloud. No equality edge fails and exactly the original bad external edges fail, giving the upper bound after division by $129m$. If $m=0$, both UNSAT values are zero by the stipulated empty-output convention, without these divisions. [step 1.1, algebra] ∎
