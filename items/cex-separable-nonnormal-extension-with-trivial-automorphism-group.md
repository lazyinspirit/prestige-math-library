---
id: cex-separable-nonnormal-extension-with-trivial-automorphism-group
kind: counterexample
title: "$\\mathbb Q(\\sqrt[3]{2})/\\mathbb Q$ is separable and nonnormal with trivial automorphism group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-field-automorphism-group, def-normal-algebraic-extension, thm-eisenstein-irreducibility-criterion, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]
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
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Example 3.3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, introductory examples"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement refuted

The assertion that every finite separable extension with trivial relative automorphism group is normal is false. In fact, $\mathbb Q(\sqrt[3]{2})/\mathbb Q$ has degree three and trivial automorphism group, but it is separable and not normal.

## Facts & Assumptions

**Given:** The real cube root $a=\sqrt[3]{2}$; Eisenstein's irreducibility criterion ([[thm-eisenstein-irreducibility-criterion]]); characteristic-zero fields are perfect ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]); and the definitions of normal extension and relative automorphism ([[def-normal-algebraic-extension]], [[def-relative-field-automorphism-group]]).

[L1] For a simple algebraic extension, embeddings into an algebraically closed field correspond bijectively to the distinct roots of the generator's minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

## Counterexample

**Proof technique:** direct.

1.1 Eisenstein at $2$ makes $x^3-2$ irreducible, so $[\mathbb Q(a):\mathbb Q]=3$. Characteristic zero makes the polynomial separable, and $a\ne0$ because $a^3=2$. [given]

2.1 The other roots are $\omega a$ and $\omega^2a$ for nonreal cube roots of unity $\omega,\omega^2$, whereas $\mathbb Q(a)\subseteq\mathbb R$. Thus the minimal polynomial does not split in $\mathbb Q(a)$, so the extension is not normal. [step 1.1, algebra]

3.1 By [L1], a $\mathbb Q$-automorphism must send $a$ to a root of $x^3-2$ that lies in $\mathbb Q(a)$. Step 2.1 leaves only $a$, and fixing the generator fixes all of $\mathbb Q(a)$. Hence the automorphism group has exactly its identity element. [step 2.1, L1] ∎
