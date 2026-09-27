---
id: thm-the-homology-universal-coefficient-sequence-splits-nonnaturally
title: "The homology universal-coefficient sequence splits nonnaturally"
kind: theorem
status: published
origin: pipeline
deps: ["thm-universal-coefficient-theorem-for-homology-over-a-pid", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "def-axiom-of-choice"]
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

Assume the Axiom of Choice. For a chain complex $C$ of free abelian groups
and an abelian group $G$, the homological UCT short exact sequence admits a
splitting. The splitting is not asserted to be natural in $C$ or $G$.

## Proof

**Given:** AC, the free abelian groups $C_n$, and the UCT short exact sequence
of [[thm-universal-coefficient-theorem-for-homology-over-a-pid]]. Write
$Z_k=\ker d_k$ and $B_k=\operatorname{im}d_{k+1}$.

1.1 By [[lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free]] under AC, $B_{n-1}$ and $B_{n-2}$ are free abelian. Choose a basis of $B_{n-1}$ and a preimage in $C_n$ of each basis element. AC supplies these choices, which extend to a homomorphism $s:B_{n-1}\to C_n$ with $d_ns=\operatorname{id}$. Hence $C_n=Z_n\oplus s(B_{n-1})$. The same argument gives $C_{n-1}=Z_{n-1}\oplus s'(B_{n-2})$, so the inclusion $Z_{n-1}\otimes G\to C_{n-1}\otimes G$ is injective. [given]

2.1 The free presentation $0\to B_{n-1}\xrightarrow{i}Z_{n-1}\to H_{n-1}(C)\to0$ identifies $$T:=\ker(i\otimes1:B_{n-1}\otimes G\to Z_{n-1}\otimes G)\cong\operatorname{Tor}_1^{\mathbb Z}(H_{n-1}(C),G).$$ For $t\in T$, the element $(s\otimes1)(t)$ is a cycle in $C_n\otimes G$: its differential is the image of $(i\otimes1)(t)=0$ in $C_{n-1}\otimes G$. Thus $$\sigma:T\longrightarrow H_n(C\otimes G),\qquad t\longmapsto[(s\otimes1)(t)]$$ is a well-defined homomorphism. The UCT quotient map of the cited theorem first takes a cycle to its $B_{n-1}\otimes G$ component under $C_n\otimes G=(Z_n\otimes G)\oplus(B_{n-1}\otimes G)$ and then identifies that component with $T$. Consequently its composite with $\sigma$ is the identity on $T$, giving the asserted splitting. The chosen section $s$ need not be preserved by chain maps, so this construction makes no naturality claim. [step 1.1, given] ∎
