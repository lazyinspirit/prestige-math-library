---
id: thm-universal-coefficient-theorem-for-cohomology-over-a-pid
title: "The universal coefficient theorem for cohomology over a PID"
kind: theorem
status: published
origin: pipeline
deps: ["def-evaluation-map-from-cohomology-to-hom-of-homology", "lem-the-cohomology-universal-coefficient-extension-map", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
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
    date: 2026-09-06
---

## Statement

Assume the Axiom of Choice. Let $R$ be a PID, $C$ a chain complex of free
$R$-modules, and $G$ an $R$-module. Then naturally
$$0\to\operatorname{Ext}^1_R(H_{n-1}C,G)\to H^n\operatorname{Hom}_R(C,G)\xrightarrow{\operatorname{ev}_n}\operatorname{Hom}_R(H_nC,G)\to0$$
is exact.

## Proof

**Given:** the free PID-complex $C$, the evaluation map, and the cycle-boundary sequences.

1.1 By the boundary-and-cycle lemma under Choice, $B_{n-1}C$ is free and therefore projective. Hence $0\to Z_nC\to C_n\xrightarrow{d_n}B_{n-1}C\to0$ splits. Every map $H_nC\to G$ pulls back to a map $Z_nC\to G$ vanishing on $B_nC$ and extends across a chosen projection $C_n\to Z_nC$ to a cocycle. Thus $\operatorname{ev}_n$ is surjective. [given]

2.1 A cocycle lies in $\ker\operatorname{ev}_n$ exactly when its restriction to $Z_nC$ vanishes modulo $B_nC$. Subtracting a representative that is zero on $Z_nC$ shows that the kernel is $$\operatorname{Hom}_R(B_{n-1}C,G)\big/ \operatorname{im}\bigl(\operatorname{Hom}_R(Z_{n-1}C,G)\bigr).$$ Applying $\operatorname{Hom}_R(-,G)$ to the free presentation $0\to B_{n-1}C\to Z_{n-1}C\to H_{n-1}C\to0$ identifies this quotient with $\operatorname{Ext}^1_R(H_{n-1}C,G)$. The inclusion is the extension map of the preceding lemma, and all constructions before the optional splitting are natural, proving the exact sequence. [step 1.1, algebra] ∎
