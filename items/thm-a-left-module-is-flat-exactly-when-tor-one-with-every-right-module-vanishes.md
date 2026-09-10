---
id: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes
title: "A left module is flat exactly when Tor one against every right module vanishes"
kind: theorem
status: published
origin: pipeline
deps: ["def-left-and-right-flat-modules-over-an-arbitrary-ring", "def-tor-by-resolving-the-right-module", "thm-horseshoe-lemma-for-projective-resolutions", "thm-long-exact-sequence-in-homology", "def-balanced-tor-bifunctor", "thm-universal-property-of-module-tensor-products"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
---

## Statement

Assume the Axiom of Dependent Choice and supplied projective-resolution data.
A left $R$-module $M$ is flat if and only if $\operatorname{Tor}_1^R(N,M)=0$ for every right $R$-module $N$.

## Proof

**Given:** a left module $M$ and an arbitrary right module $N$.

1.1 If $M$ is flat, tensor a full projective resolution $Q_\bullet\to N$ with $M$. Exactness of $-\otimes_RM$ preserves its augmented exactness, so $H_i(Q_\bullet\otimes_RM)=0$ for every $i>0$. The right-resolution definition and [[def-balanced-tor-bifunctor]] give $\operatorname{Tor}_1^R(N,M)=0$. [given]

1.2 For right modules $A\to B\to C\to0$, the universal property [[thm-universal-property-of-module-tensor-products]] gives $C\otimes_R M\cong(B\otimes_R M)/\operatorname{im}(A\otimes_R M)$: a balanced map on $B\times M$ kills that image exactly when it factors through $C\times M$. Thus tensoring is right exact over the arbitrary ring $R$. In particular $H_0(Q_\bullet\otimes_R M)\cong N\otimes_R M$, naturally under augmentation-preserving maps. [given, algebra]

2.1 Conversely, let $K\hookrightarrow P$ be an inclusion of right modules. Apply the projective horseshoe construction to $0\to K\to P\to P/K\to0$, tensor its degreewise split resolution sequence with $M$, and take the long exact homology sequence. Its degree-zero boundary identifies the kernel of $K\otimes M\to P\otimes M$ with the image of $\operatorname{Tor}_1(P/K,M)$. [step 1.2, algebra]

3.1 The assumed vanishing makes every such tensor map injective; together with right exactness this gives exactness on all short exact sequences, hence flatness. [step 2.1, algebra] ∎
