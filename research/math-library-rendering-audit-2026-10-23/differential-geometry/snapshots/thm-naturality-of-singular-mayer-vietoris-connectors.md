---
id: "thm-naturality-of-singular-mayer-vietoris-connectors"
kind: "theorem"
title: "Naturality of singular mayer vietoris connectors"
deps: ["thm-mayer-vietoris-sequence-in-real-singular-cohomology", "thm-naturality-of-the-cohomology-connecting-morphism"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 11; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
proof_strategy: "direct"
verification:
  audited: 2026-09-12
---

## Statement

Suppose $f:X\to Y$ is continuous, $X=U\cup V$ and $Y=U'\cup V'$ are ordered open covers, and $f(U)\subseteq U'$, $f(V)\subseteq V'$. For the $V-U$ convention, the Mayer–Vietoris connectors satisfy
$$ f^*\Delta_Y=\Delta_X(f|_{U\cap V})^*:H^k(U'\cap V';\mathbb R)\to H^{k+1}(X;\mathbb R).$$
The entire long exact sequences commute with these pullbacks. The ordered-cover hypotheses are part of the assertion.

## Facts & Assumptions

**Given:** The continuous map and both ordered covers as in the statement.

[F1] The real Mayer–Vietoris sequence uses restriction, difference $V-U$, and the positive lift-differential connector transported along the canonical small-chain inclusion ([[thm-mayer-vietoris-sequence-in-real-singular-cohomology]]).

[F2] A morphism of cochain short exact sequences commutes with the connecting maps ([[thm-naturality-of-the-cohomology-connecting-morphism]]).

## Proof

1.1 Postcomposition by $f$ takes an $X$-simplex in $U$ to a $Y$-simplex in $U'$, and likewise for $V$ and the intersections. It therefore induces chain maps on all three terms of the small-chain sequence. Composition commutes with face restriction, the signed overlap inclusion and sum. Dualizing gives cochain maps $D_Y\to D_X$, $E_Y\to E_X$, $F_Y\to F_X$ commuting with the two arrows in [F1]. [given, F1]

2.1 By [F2] this cochain diagram commutes with the connectors into $H(D)$. Explicitly, if $be=c$ and $\delta e=a(d)$ in the $Y$ row, the images satisfy the same equations in the $X$ row, so the image of $d$ is the connecting representative of the image of $c$. This uses an image of a supplied lift; it does not claim that zero extension is natural. [F1, F2, step 1.1]

3.1 Write $I_X,I_Y$ for the small-chain inclusions and $f_{\mathrm{sm},\#}$ for the small-chain map. The equation $f_\#I_X=I_Yf_{\mathrm{sm},\#}$ holds on every generator. Hence the canonical isomorphisms $\theta=H(I^*)$ of [F1] commute with pullback. Transporting step 2.1 by their inverses proves the displayed connector identity. The restriction and difference squares already commute by step 1.1, giving the full sequence claim. [F1, step 1.1, step 2.1, algebra]

4.1 Empty intersections yield zero connector domains; empty spaces yield zero groups. In degree zero the same lift calculation applies, with negative primitives zero. On one-point spaces or identical covers the connector is zero by [F1]. Constant or degenerate simplices still satisfy the generator equation in step 3.1. All maps are supplied by postcomposition; neither natural choices of chain inverses nor AC are required. [F1, step 1.1, step 2.1, step 3.1] ∎
