---
id: "prop-pullbacks-of-fibrations-are-fibrations"
kind: "proposition"
title: "Pullbacks of fibrations are fibrations"
deps: ["def-hurewicz-and-serre-fibrations", "thm-product-universal-property", "def-subspace-topology-top"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $p:E\to B$ be a Hurewicz or Serre fibration and $g:A\to B$ continuous. The pullback projection $q:g^*E\to A$, where $g^*E=\{(a,e):g(a)=p(e)\}$ and $q(a,e)=a$, is a fibration of the same type. Use ordinary subspaces and products in ordinary spaces, and kified subspaces and k-products in CGWH. No surjectivity or AC is required.

## Facts & Assumptions

[F1] HLP supplies one lift of a compatible homotopy problem. [[def-hurewicz-and-serre-fibrations]]

[F2] Pairing continuous maps gives a continuous map into a product, without its separate surjectivity/choice clause. [[thm-product-universal-property]]

[F3] A continuous ambient map landing in a subspace is continuous into that subspace. [[def-subspace-topology-top]]

## Proof

**Given:** Continuous $v:X\to g^*E$ and $H:X\times I\to A$ with $qv=H(-,0)$, for an allowed test space $X$.

1.1 Write $v=(v_A,v_E)$. Then $pv_E=gv_A=gH(-,0)$. By F1 the base homotopy $gH$ has a lift $L:X\times I\to E$ with $L(-,0)=v_E$ and $pL=gH$. This uses exactly the original test class: every space for ordinary Hurewicz, every CGWH space for its CG version, or every disk for Serre. [F1, F2]

2.1 Set $\widetilde H(x,t)=(H(x,t),L(x,t))$. Its coordinates are continuous, it lands in the pullback by $pL=gH$, and F2–F3 give continuity. In CGWH this is the same categorical pairing into the kified pullback; the CG source property gives the kified target map. Its initial value is $(v_A,v_E)=v$, and $q\widetilde H=H$. Thus it solves the required HLP problem. [F2, F3, step 1.1]

3.1 Empty parameter spaces have the empty lift; if the pullback is empty, every allowable initial-map problem has empty parameter space. Disk dimension zero is included in step 1.1. Constant base maps, point bases, $t=0$ and $t=1$ satisfy the same equations, with no uniqueness or regularity needed. Only one existential HLP witness is used; no indexed selections are made. This proves the claim for both types. [step 1.1, step 2.1] ∎
