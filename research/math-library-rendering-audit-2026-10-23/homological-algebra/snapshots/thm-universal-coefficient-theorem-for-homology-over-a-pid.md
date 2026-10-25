---
id: thm-universal-coefficient-theorem-for-homology-over-a-pid
title: "The universal coefficient theorem for homology over a PID"
kind: theorem
status: published
origin: pipeline
deps: ["lem-the-universal-coefficient-edge-map-for-homology-is-well-defined", "lem-the-universal-coefficient-tor-obstruction-map-for-homology", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "def-axiom-of-choice"]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume the Axiom of Choice. Let $R$ be a PID, $C$ a chain complex of free
right $R$-modules, and $G$ a left $R$-module. Then naturally in $C,G$,
$0\to H_n(C)\otimes_RG\to H_n(C\otimes_RG)\to\operatorname{Tor}^R_1(H_{n-1}(C),G)\to0$
is exact.

## Proof

**Given:** the Axiom of Choice and the two cycle-boundary short exact
sequences of the free PID-complex $C$.

1.1 The cycle and boundary modules are free, hence flat. Since $B_{n-1}C$ is flat, tensoring $0\to Z_nC\to C_n\to B_{n-1}C\to0$ remains exact. The differential on $C_n\otimes G$ factors as the resulting surjection $C_n\otimes G\twoheadrightarrow B_{n-1}C\otimes G$ followed by the map $B_{n-1}C\otimes G\to Z_{n-1}C\otimes G\hookrightarrow C_{n-1}\otimes G$. The last inclusion stays injective because $B_{n-2}C$ is flat. [given]

2.1 Tensoring $B_nC\to Z_nC\to H_n(C)\to0$ gives $H_n(C)\otimes G=\operatorname{coker}(B_nC\otimes G\to Z_nC\otimes G)$. By step 1.1, $Z_nC\otimes G$ embeds in $C_n\otimes G$, and the image of $B_nC\otimes G$ there is exactly the boundary group. Thus the edge map $[z]\otimes g\mapsto[z\otimes g]$ injects $H_n(C)\otimes G$ into $H_n(C\otimes G)$. [step 1.1, algebra]

3.1 The remaining quotient maps by $d_n\otimes1$ onto $\ker(B_{n-1}C\otimes G\to Z_{n-1}C\otimes G)$. The free presentation $0\to B_{n-1}C\to Z_{n-1}C\to H_{n-1}C\to0$ identifies this kernel with $\operatorname{Tor}_1^R(H_{n-1}C,G)$. All maps come from the natural cycle, boundary and tensor maps, so the sequence is natural in $C$ and $G$. [step 1.1, step 2.1, algebra] ∎
