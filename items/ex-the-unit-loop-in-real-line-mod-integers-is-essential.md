---
id: ex-the-unit-loop-in-real-line-mod-integers-is-essential
kind: example
title: "The projected unit interval is not nullhomotopic in $\\mathbb R/\\mathbb Z$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-real-line-mod-integer-translations-is-a-covering, thm-homotopy-lifting-for-covering-maps, cor-lifted-path-endpoints-depend-only-on-path-homotopy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
    - title: "Omar Antolín Camarena, Proper local homeomorphisms and covering maps"
      url: "https://www.matem.unam.mx/~omar/notes/propetale.html"
pipeline_run: null
---

## Example

The loop $t\mapsto[t]$ in $\mathbb R/\mathbb Z$ is not nullhomotopic.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For the quotient by integer translation, $q:\mathbb R\to\mathbb R/\mathbb Z$ is a covering map, and every deck transformation is a unique translation $x\mapsto x+n$ with $n\in\mathbb Z$. ([[ex-real-line-mod-integer-translations-is-a-covering]]).

[F2] Let $p:E\to B$ be a covering, $H:Y\times I\to B$ a homotopy, and $\widetilde H_0:Y\to E$ a lift of $H(-,0)$. There is a unique lift $\widetilde H:Y\times I\to E$ of $H$ extending $\widetilde H_0$. ([[thm-homotopy-lifting-for-covering-maps]]).

[F3] Endpoint-fixed homotopic paths in the base have lifts with the same endpoint whenever their lifts begin at the same point. ([[cor-lifted-path-endpoints-depend-only-on-path-homotopy]]).

## Verification

**Proof technique:** direct.

1.1 The loop $t\mapsto[t]$ lifts from zero to the path $t\mapsto t$, whose endpoint is one. [given, F3, F1]

2.1 If it had an endpoint-fixed nullhomotopy, homotopy lifting would keep the terminal lift in the discrete fibre while deforming the initial lift to the constant path at zero, forcing endpoints one and zero to agree. [step 1.1, F3, F2]

3.1 This proves essentiality without asserting $\pi_1(\mathbb R/\mathbb Z)\cong\mathbb Z$. [step 2.1, F1]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
