---
id: def-thom-class-and-thom-isomorphism-interface
kind: definition
title: "Thom class and Thom isomorphism: the AT interface"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-thom-class-by-fiberwise-normalization", "thm-thom-isomorphism-for-oriented-vector-bundles", "thm-naturality-and-uniqueness-of-thom-classes", "def-disk-sphere-and-thom-space-of-a-metric-vector-bundle", "lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology", "def-axiom-of-choice"]
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Definition

Assume AC as in [[def-axiom-of-choice]]. Let $E\to B$ be an $R$-oriented numerable rank-$r$ real vector bundle over a CW complex, or over a paracompact Hausdorff base of CW type. Its AT Thom class is the unique $u_E\in H^r(D(E),S(E);R)$ of [[def-thom-class-by-fiberwise-normalization]], whose restriction to every oriented fiber disk pair is the supplied generator. In the based quotient model $D_h(E)/S_h(E)$ of [[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]] write the same class in $$\widetilde H^r(\operatorname{Th}_h(E);R)\cong H^r(D(E),S(E);R).$$ The isomorphism is the actual quotient-map pullback of [[lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology]], proved there from the exact cohomology excision and natural pair-sequence interfaces, including reduced degree0 and the empty sphere case. In rank zero it reads $\widetilde H^k(B_+;R)\cong H^k(B;R)$ in every degree, with the supplied rank-zero orientation normalization. The AT theorem [[thm-thom-isomorphism-for-oriented-vector-bundles]] gives the isomorphism $a\mapsto\pi^*a\smile u_E$ from $H^k(B;R)$ onto $H^{k+r}(D(E),S(E);R)$ for all $k$, and [[thm-naturality-and-uniqueness-of-thom-classes]] gives uniqueness, oriented pullback naturality and integral sign reversal. For $R=\mathbb F_2$ the orientation is automatic. No Thom class and no Thom isomorphism is constructed again in DT: the collapse and duality statements below consume exactly this interface. On compact smooth bases the finite-cover AT proof is available choice-free once the cover and its data are supplied; references to the general supplier retain its stated AC assumption.
