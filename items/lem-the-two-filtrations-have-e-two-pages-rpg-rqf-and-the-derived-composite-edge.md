---
id: "lem-the-two-filtrations-have-e-two-pages-rpg-rqf-and-the-derived-composite-edge"
kind: "lemma"
title: "The two filtrations identify E2 and the composite edge"
deps: ["lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite", "thm-second-hypercohomology-spectral-sequence", "prop-the-hypercohomology-edge-maps-are-the-canonical-maps-from-cohomology-of-f"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 5.8.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Sharifi, Theorem 4.3.8"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

For the supplied composite data $A\to I$, $F(I)\to J$ under the acyclicity and comparison hypotheses of the total-composite lemma, the vertical-first filtration of $\operatorname{Tot}(GJ)$ collapses to $R^n(GF)(A)$. The other filtration has
$$E_2^{p,q}=R^pG(R^qF(A)).$$
Its two edges are the canonical maps $R^nG(F(A))\to R^n(GF)(A)$ and $R^n(GF)(A)\to G(R^nF(A))$.

## Facts & Assumptions

**Given:** The supplied data and exact hypotheses in the statement.

[F1] The first filtration identifies the target through the augmentation $GF(I)\to\operatorname{Tot}(GJ)$ ([[lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite]]).

[F2] The second hypercohomology sequence has $E_2^{p,q}=R^pG(H^q(F(I)))$ and finite resolution-degree filtration ([[thm-second-hypercohomology-spectral-sequence]]).

[F3] Its edges are inclusion of the bottom horizontal cycles and projection onto resolution degree zero ([[prop-the-hypercohomology-edge-maps-are-the-canonical-maps-from-cohomology-of-f]]).

## Proof

1.1 The cohomology of $F(I)$ is $R^qF(A)$, with $H^0(F(I))=F(A)$. Substitute this into F2 to obtain the displayed $E_2$. F1 identifies the total target with $R^{p+q}(GF)(A)$ through the actual augmentation quasi-isomorphism. Its proof computes the other filtration as one row, so these are two filtrations of the same total complex, not a claimed equality of their second pages. [F1, F2]

2.1 Set the lower bound to zero in F3. The bottom horizontal-cycle inclusion gives $R^nG(H^0(F(I)))=R^nG(F(A))\to H^n(\operatorname{Tot}(GJ))$; projection gives $H^n(\operatorname{Tot}(GJ))\to G(H^n(F(I)))=G(R^nF(A))$. Transport both along the augmentation isomorphism of step 1.1. This defines the canonical derived-composite edges and agrees with the finite filtration definition. In degree zero both reduce to $GF(A)$; vanishing edge terms are permitted. The naturality/choice qualifications are exactly those of F1–F3. [F1, F3, step 1.1] ∎
