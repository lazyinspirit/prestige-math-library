---
id: cex-an-acyclic-noncontractible-cone
kind: counterexample
title: "An acyclic noncontractible cone"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift, prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms, def-contractible-complex, def-quasi-isomorphism]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement refuted

Every acyclic mapping cone is contractible.

## Facts & Assumptions

**Given:** The zero map from the three-term complex
$$0\to\mathbb Z\xrightarrow{2}\mathbb Z\xrightarrow{\bmod 2}\mathbb Z/2\to0$$
to the zero complex.

[L1] A contractible complex is one whose identity map is null-homotopic
([[def-contractible-complex]]).

[L2] The cone of the zero map is the direct sum with a shift
([[prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift]]).

[L3] Shift preserves contractibility and quasi-isomorphism status
([[prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms]]).

[L4] A quasi-isomorphism is a chain map inducing isomorphisms on all homology
objects ([[def-quasi-isomorphism]]).

## Counterexample

**Proof technique:** direct.

1.1 The displayed source complex is acyclic: multiplication by $2$ is injective, reduction modulo $2$ is surjective, and its kernel is $2\mathbb Z$, the image of the first map. If it were contractible, [L1] would make its identity null-homotopic; in degree $0$ that would supply a section $\mathbb Z/2\to\mathbb Z$ of the quotient map $\mathbb Z\to\mathbb Z/2$, which is impossible. Thus the source complex is acyclic and noncontractible. [L1, given, algebra]

2.1 By [L2], the cone of the displayed zero map is the shift of the source complex. Because the zero map from an acyclic complex to the zero complex induces isomorphisms on all homology groups, [L4] makes that map a quasi-isomorphism; then [L3] makes its shift a quasi-isomorphism too. Hence the cone is acyclic. If the cone were contractible, applying [L3] with shift $[-1]$ would make the source complex contractible, contradicting step 1.1. Thus this cone is acyclic and noncontractible, so it refutes the displayed statement. [L2, L3, L4, step 1.1, given, algebra] ∎
