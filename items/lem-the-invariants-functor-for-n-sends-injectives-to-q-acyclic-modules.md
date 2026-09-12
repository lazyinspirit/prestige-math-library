---
id: "lem-the-invariants-functor-for-n-sends-injectives-to-q-acyclic-modules"
kind: "lemma"
title: "N-invariants send injective G-modules to Q-acyclics"
deps: ["lem-invariants-for-a-group-extension-compose", "def-injective-object", "def-dependent-choice", "prop-positive-right-derived-functors-vanish-on-injective-objects", "def-group-cohomology-as-a-derived-functor", "def-right-derived-object-relative-to-injective-resolution-data"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 6.8.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
    - title: "Sharifi, Section 4.3"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

For $1\to N\to G\xrightarrow{\pi}Q\to1$, if $I$ is an injective $G$-module, then $I^N$ is an injective $Q$-module. This assertion is choice-free. Under DC, $H^p(Q,I^N)=0$ for every $p>0$. Choice-free relative version: if $J$ is a supplied injective resolution datum at $I^N$ and one is also supplied a cochain-homotopy equivalence from $J(I^N)_{\mathrm{del}}$ to the deleted trivial injective resolution $I^N[0]$, then
$$R_J^p((-)^Q)(I^N)=0\qquad(p>0).$$

## Facts & Assumptions

**Given:** The extension and injective module $I$.

[F1] Normal-subgroup invariants have the induced quotient action ([[lem-invariants-for-a-group-extension-compose]]).

[F2] An injective object extends maps along monomorphisms ([[def-injective-object]]).

[F3] Under DC, positive right derived functors vanish on injectives; group cohomology is derived invariants ([[prop-positive-right-derived-functors-vanish-on-injective-objects]], [[def-group-cohomology-as-a-derived-functor]]).

[F4] Relative right derived objects are the cohomology of the functor applied to the deleted complex of the named supplied injective datum ([[def-right-derived-object-relative-to-injective-resolution-data]]).

## Proof

1.1 Inflate a $Q$-module $V$ to $G$ by $g v=\pi(g)v$. This leaves the underlying groups and all arrows unchanged, hence preserves exact sequences. A $G$-map from an inflated $V$ to $I$ has image in $I^N$, since $N$ acts trivially on $V$. Conversely a $Q$-map $V\to I^N$ is a $G$-map after inclusion. These inverse correspondences prove the inflation–invariants adjunction directly. [F1]

2.1 For a $Q$-monomorphism $U\hookrightarrow V$ and map $U\to I^N$, inflate both and compose into $I$. By F2 the resulting $G$-map extends over $V$. Its image is $N$-fixed, so step 1.1 turns it back into a $Q$-map $V\to I^N$ extending the original. This is the defining injectivity property. It applies also to zero modules and to either trivial subgroup or quotient, and makes only one existential extension at a time. [F2, step 1.1]

3.1 Under DC, apply F3 to invariants for $Q$ and the injective $I^N$. It gives the asserted vanishing for all positive degrees; degree zero is $(I^N)^Q=I^G$, which need not vanish. For the relative branch, F4 identifies $R_J^p((-)^Q)(I^N)$ with the degree-$p$ cohomology after applying invariants to $J(I^N)_{\mathrm{del}}$. The supplied cochain-homotopy equivalence remains one after applying the additive invariants functor and compares this complex with $((I^N)^Q)[0]$, whose positive cohomology is zero. Thus the displayed relative vanishing follows without any choice. DC is used only for the resolution-independent group-cohomology conclusion, not step 2.1 or the explicitly supplied relative comparison. [F1, F3, F4, step 2.1] ∎
