---
id: def-thom-euler-class-of-an-oriented-vector-bundle
kind: definition
title: Thom-defined Euler class of an oriented vector bundle
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-thom-diagonal-and-zero-section-collapse, thm-naturality-and-uniqueness-of-thom-classes, thm-naturality-of-the-singular-cohomology-pair-sequence, def-axiom-of-choice]
proof_strategy: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles and K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Euler class from the zero section, printed pp.88–91"
---

## Definition

Assume the general Thom theorem's AC hypothesis, and let $\xi\to B$ be an
$R$-oriented rank-$n$ bundle with normalized Thom class $u_\xi$.  Let
$$j^*:H^n(D(\xi),S(\xi);R)\longrightarrow H^n(D(\xi);R)$$
be the relative-to-absolute map in the pair sequence, and let
$s:B\to D(\xi)$ be the zero section.  The **Thom-defined Euler class** is
$$e_{\rm Th}(\xi)=s^*j^*(u_\xi)\in H^n(B;R).$$

This definition uses no later characteristic-class page.  Naturality of the
pair sequence and of the Thom class gives
$e_{\rm Th}(f^*\xi)=f^*e_{\rm Th}(\xi)$ for an orientation-preserving
pullback.  Reversing an integral orientation negates the class.

For rank zero, $j$ and $s$ are identities and $u=1$, so
$e_{\rm Th}(0_B)=1\in H^0(B;R)$.  On an empty base the class is the unique
zero class; over the zero ring it is zero (and also the unit).  Point bases,
identity pullbacks, the zero section and both maps of the pair all follow the
displayed composite.  The formula is choice-free once $u_\xi$ is supplied;
AC is inherited only from general Thom existence and naturality.
