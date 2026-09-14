---
id: def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section
kind: definition
title: Gysin pushforward for an oriented zero section
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-thom-isomorphism-for-oriented-vector-bundles, def-thom-diagonal-and-zero-section-collapse, def-thom-euler-class-of-an-oriented-vector-bundle, prop-cup-product-is-natural-unital-and-associative, def-axiom-of-choice]
proof_strategy: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles and K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Thom and Euler maps, printed pp.88–91"
---

## Definition

Assume AC. Let $\xi$ be an $R$-oriented rank-$n$ numerable vector bundle over
a CW complex, or over a paracompact Hausdorff base of CW type. For its zero
section define
$$s_!:H^k(B;R)\longrightarrow H^{k+n}(D(\xi);R);\quad s_!(a)=j^*(\pi^*a\smile u_\xi),$$
where $j^*$ is the relative-to-absolute map.  This is the **Gysin
pushforward of the oriented zero section**.

The radial homotopy $v\mapsto(1-t)v$ retracts $D(\xi)$ to $s(B)$, so $s^*$
identifies the target with $H^{k+n}(B;R)$.  Under that identification,
cup-product naturality and the Euler definition give
$$s^*s_!(a)=a\smile s^*j^*u_\xi=a\smile e_{\rm Th}(\xi).$$

For rank zero, $s_!$ is the identity and multiplication by $e=1$.  Empty
bases and the zero ring give the unique zero maps.  At $k=0$ the unit maps to
$j^*u$; negative-degree sources are zero.  Both radial endpoints, the zero
section, identity bundle maps, and zero inputs are included.  The displayed
construction is choice-free after $u_\xi$ is supplied; AC is inherited only
from the general existence theorem.
