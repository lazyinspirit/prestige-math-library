---
id: thm-kunneth-theorem-for-free-complexes-over-a-pid
title: "The Kunneth theorem for free complexes over a PID"
kind: theorem
status: published
origin: pipeline
deps: ["lem-the-kunneth-cross-product-map-is-well-defined-and-natural", "lem-the-kunneth-tor-map", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "def-tensor-product-total-complex-of-chain-complexes", "thm-long-exact-sequence-in-homology", "thm-right-exactness-of-tensor-products", "def-axiom-of-choice"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Theorem 3.6.3, printed p. 88"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. Let $R$ be a PID and $C,D$ be complexes of free $R$-modules for which each total degree has a finite direct-sum diagonal. For every integer $n$, there is a natural exact sequence $0\to\bigoplus_{p+q=n}H_pC\otimes_RH_qD\to H_n(C\otimes_RD)\to\bigoplus_{p+q=n-1}\operatorname{Tor}^R_1(H_pC,H_qD)\to0$.

## Proof

**Given:** free PID-complexes $C,D$ with finite direct-sum diagonal in every total degree, and the Axiom of Choice ([[def-axiom-of-choice]]).

1.1 Use the construction proved in [[lem-the-kunneth-tor-map]]: put $Z_p=Z_pC$ and $A_p=B_{p-1}C$, with zero differentials. The canonical sequence $0\to Z\otimes D\to C\otimes D\to A\otimes D\to0$ is exact. AC is used here for freeness of the cycle and boundary submodules by [[lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free]] and their free-module lifts which split the degree sequences, exactly as in that construction. [given]

2.1 By [[thm-long-exact-sequence-in-homology]], its relevant segment gives $0\to\operatorname{coker}\partial_{n+1}\to H_n(C\otimes D)\to\ker\partial_n\to0$. The calculation in the Tor-map lemma identifies $H_n(Z\otimes D)=\bigoplus_{p+q=n}Z_pC\otimes H_qD$ and identifies $\partial_{n+1}$ with the sum of the inclusion maps $B_pC\otimes H_qD\to Z_pC\otimes H_qD$. It also identifies $\ker\partial_n$ and the map onto it with the displayed Tor sum and its established natural quotient. [step 1.1, algebra]

3.1 For each $(p,q)$, right exactness in [[thm-right-exactness-of-tensor-products]] applied to $B_pC\to Z_pC\to H_pC\to0$ identifies the cokernel of that inclusion-tensor map with $H_pC\otimes H_qD$. Cokernels of direct-sum maps are computed coordinatewise, giving $\operatorname{coker}\partial_{n+1}=\bigoplus_{p+q=n}H_pC\otimes H_qD$. The injection into the middle homology sends $[z]\otimes[y]$ to $[z\otimes y]$, since it is induced by $Z\otimes D\to C\otimes D$. Thus it is precisely the cross product in [[lem-the-kunneth-cross-product-map-is-well-defined-and-natural]]. [step 2.1, algebra]

4.1 Step 2.1 and step 3.1 prove exactness for the specified maps. Both are natural by the two map lemmas, hence this is a natural short exact sequence. The tensor differential and totalization are those of [[def-tensor-product-total-complex-of-chain-complexes]]; the construction works for every integer degree with the stated finite diagonals, including zero summands and empty diagonals. [step 2.1, step 3.1, algebra] ∎
