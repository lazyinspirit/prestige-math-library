---
id: prop-universal-property-of-an-hnn-extension
kind: proposition
title: "The universal property of an HNN extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hnn-extension-and-stable-letter, thm-von-dyck]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Let

$$G=\left\langle A,t \,\middle|\, t\,\alpha(c)\,t^{-1}=\beta(c)\text{ for }c\in C\right\rangle$$

be an HNN extension. Let $H$ be a group, let $f:A\to H$ be a group
homomorphism, and let $h\in H$ satisfy

$$h\,f(\alpha(c))\,h^{-1}=f(\beta(c))\qquad(c\in C).$$

Then there is a unique group homomorphism

$$\overline f:G\to H$$

whose restriction to $A$ is $f$ and whose value on the stable letter is
$\overline f(t)=h$.

## Facts & Assumptions

**Given:** The HNN extension, the homomorphism $f:A\to H$, and the element $h\in H$ in the statement.

[L1] An HNN extension is the group presented by adjoining a stable letter $t$ and the relators $t\,\alpha(c)\,t^{-1}=\beta(c)$ for every $c\in C$. ([[def-hnn-extension-and-stable-letter]])

[L2] A map on generators of a presentation extends uniquely once every defining relator evaluates to the identity. ([[thm-von-dyck]])

## Proof

**Proof technique:** constructive.

1.1 Use $f$ on the base-group generators of a presentation of $A$ and send the stable letter $t$ to $h$. The old relators from $A$ are satisfied because $f$ is a homomorphism, and each new HNN relator from [L1] is satisfied because the hypothesis gives $h\,f(\alpha(c))\,h^{-1}=f(\beta(c))$. [L1, L2, given, construct]

2.1 Therefore [L2] gives a unique homomorphism $\overline f:G\to H$ extending those assignments. By construction it restricts to $f$ on $A$ and sends $t$ to $h$, which is exactly the required universal property. [L2, step 1.1, discharge-construct] ∎
