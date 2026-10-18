---
id: "lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts"
kind: "lemma"
title: "Cw homotopy equivalence inclusions are strong deformation retracts"
deps: ["prop-relative-cw-inclusions-are-cofibrations"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Propositions 0.18–0.19 and Corollary 0.20, complete proofs pp.16–17"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
      locator: "Propositions 0.18–0.19 and Corollary 0.20, complete proofs pp.16–17"
status: published
origin: "pipeline"
proof_strategy: "Prove the relative inverse lemma inline: extend the inverse homotopy to make it fix A; cancel the retraced restriction by an HEP homotopy of homotopies. Apply to the inclusion. For attachment invariance use the homotopy attaching cylinder and its two relative deformation retractions."
---

## Statement

If $A\subset X$ is a CW subcomplex and its inclusion is a homotopy equivalence, then $X$ strongly deformation retracts onto $A$. Moreover, if $(Y,B)$ is a CW pair and $u_0,u_1:B\to Z$ are homotopic, then the adjunction spaces $Z\cup_{u_0}Y$ and $Z\cup_{u_1}Y$ are homotopy equivalent relative to their common subspace $Z$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] If $(X,A)$ is a relative CW complex, then $A\hookrightarrow X$ has the homotopy extension property; in particular it is a cofibration. ([[prop-relative-cw-inclusions-are-cofibrations]])

## Proof

1.1 First prove the relative inverse assertion: if $f:(X,A)\to(Y,A)$ is a homotopy equivalence, equals the identity on $A$, and both inclusions have HEP, let $g$ be an inverse and $h_t:gf\simeq\mathrm{id}_X$. Extend $h_t|_A$ over $Y$ by HEP, starting at $g$, to obtain $g_t$ with $g_1|_A=\mathrm{id}$. CW inclusions have the needed HEP by F1. [F1, given]

2.1 Concatenate the homotopy $g_{1-2t}f$ for $0\le t\le1/2$ with $h_{2t-1}$ for $1/2\le t\le1$. It runs from $g_1f$ to the identity, and on $A$ is a path followed by its reverse. Such a loop contracts relative to its endpoints: if its first-half path is $\gamma$, replace $\gamma(\min(2t,2-2t))$ by $\gamma((1-u)\min(2t,2-2t))$. HEP for $(X\times I,A\times I)$ extends this homotopy of homotopies. Following the left, top, and right sides of the parameter square now gives $g_1f\simeq\mathrm{id}_X$ relative to $A$. This product HEP follows by taking the product of the HEP retraction $X\times I\to X\times\{0\}\cup A\times I$ with the other interval. [F1, step 1.1]

3.1 Repeat the preceding adjustment with $g_1$ and $f$ interchanged, obtaining $f_1$ fixed on $A$ with $f_1g_1\simeq\mathrm{id}_Y$ relative to $A$. Then $f_1\simeq f_1g_1f\simeq f$ relative to $A$, so $fg_1\simeq\mathrm{id}_Y$ relative to $A$. Apply this result with the map $A\hookrightarrow X$: its relative inverse is a retraction, and the relative inverse homotopy is precisely a strong deformation retraction. If $A$ is empty, the existence of an inverse forces $X$ empty. [step 1.1, step 2.1]

4.1 For a homotopy $U:B\times I\to Z$ from $u_0$ to $u_1$, use the common space $W=Z\cup_U(Y\times I)$. The CW prism retraction of $Y\times I$ onto $Y\times\{0\}\cup B\times I$ fixes $B\times I$ and descends to a strong deformation retraction of $W$ onto the first adjunction space, fixed on $Z$. The reversed prism gives the second retraction. These prism retractions can be built cellwise using radial projection of $D^r\times I$ onto its bottom and sides; concatenate over dimensions with the CW weak topology, as in the HEP construction. Composing the two inclusions and retractions gives inverse homotopy equivalences relative to $Z$. [F1, algebra] ∎
