---
id: cex-normal-inseparable-extension-with-trivial-automorphism-group
kind: counterexample
title: "$\\mathbb F_p(t)/\\mathbb F_p(t^p)$ is normal and inseparable with trivial automorphism group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, def-purely-inseparable-extension, cor-purely-inseparable-extensions-are-normal, def-relative-field-automorphism-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Example 3.8"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, positive-characteristic examples"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement refuted

The assertion that every finite normal extension is separable, or that every nontrivial finite normal extension has a nontrivial relative automorphism, is false. For every prime $p$, $\mathbb F_p(t)/\mathbb F_p(t^p)$ is normal and inseparable of degree $p$ with trivial automorphism group.

## Facts & Assumptions

**Given:** A prime $p$, a transcendental element $t$, the purely inseparable extension definition ([[def-purely-inseparable-extension]]), and the criterion that $x^p-u$ is irreducible when $u$ is not a $p$-th power ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L1] Every purely inseparable algebraic extension is normal ([[cor-purely-inseparable-extensions-are-normal]]).

## Counterexample

**Proof technique:** direct.

1.1 Put $u=t^p$. The element $u$ is not a $p$-th power in the rational-function field $\mathbb F_p(u)$, as the valuation at the prime $u$ of a $p$-th power is divisible by $p$. Hence $x^p-u$ is irreducible over $\mathbb F_p(u)=\mathbb F_p(t^p)$, while in $\mathbb F_p(t)[x]$ it equals $(x-t)^p$. [given, algebra]

2.1 Step 1.1 gives degree $p$ and shows that every element of the extension has a power in the base field, so the extension is purely inseparable and not separable. By [L1] it is normal. This includes the smallest prime $p=2$. [step 1.1, L1]

3.1 A base-field automorphism must send $t$ to another root of its minimal polynomial, but step 1.1 shows that $t$ is the unique root. Thus every such automorphism fixes $t$ and is the identity on $\mathbb F_p(t)$. [step 1.1, given] ∎
