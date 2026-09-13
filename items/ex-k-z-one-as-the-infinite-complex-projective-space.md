---
id: ex-k-z-one-as-the-infinite-complex-projective-space
kind: example
title: Infinite complex projective space is K(Z,2)
status: draft
origin: pipeline
deps: ["def-eilenberg-maclane-space", "thm-long-exact-sequence-of-homotopy-groups-of-a-fibration", "lem-finite-join-models-for-circle-and-two-point-groups", "thm-milnor-join-model-is-a-contractible-free-g-space", "thm-numerable-fiber-bundles-are-hurewicz-fibrations", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Dale Husemoller, Fibre Bundles, Third Edition
      url: https://link.springer.com/book/10.1007/978-1-4757-2261-1
      locator: Chapter 4, Example 11.4, printed page 56
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Section 8.6, classifying-space fiber sequence, printed pages 217--218
---

## Claim

Assume AC. Despite the legacy item ID, the correct statement is

$$ \mathbb{CP}^{\infty}\simeq K(\mathbb Z,2), $$

not $K(\mathbb Z,1)$. The universal circle bundle is $S^\infty\to\mathbb{CP}^{\infty}$ and its total space is contractible.

## Facts & Assumptions

[F1] The join of $N+1$ copies of $S^1$ is $S^{2N+1}$, compatibly with the standard inclusions ([[lem-finite-join-models-for-circle-and-two-point-groups]]).

[F2] The same homeomorphism is equivariant and identifies the diagonal $S^1$-quotient with $\mathbb{CP}^N$ ([[lem-finite-join-models-for-circle-and-two-point-groups]]).

[F3] Milnor's infinite join is contractible and gives a numerable circle bundle ([[thm-milnor-join-model-is-a-contractible-free-g-space]]).

[F4] Assuming AC, every numerable fiber bundle is a Hurewicz fibration ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]), and its homotopy groups fit into the fibration long exact sequence ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[A1] AC is used exactly through the numerable-bundle lifting theorem in [F4] ([[def-axiom-of-choice]]).

## Verification

**Given:** The standard scalar action of $S^1$.

1.1 By [F1, F2], the finite stages of Milnor's bundle are the Hopf bundles $S^{2N+1}\to\mathbb{CP}^N$. Passing through their compatible inclusions identifies the infinite bundle with [F1, F2]

$$ S^1\longrightarrow S^\infty\longrightarrow\mathbb{CP}^{\infty}. $$

Its total space is Milnor's $ES^1$ and is contractible by [F3]. [F3]

2.1 Assume [A1]. By [F4], the numerable bundle in Step 1.1 is a Hurewicz fibration; the exact AC expenditure is the well-ordering used in that supplier's lifting-function construction. The long exact sequence and contractibility give $\pi_k(\mathbb{CP}^{\infty})\cong\pi_{k-1}(S^1)$ for $k\geq2$, while its component segment gives $\pi_1(\mathbb{CP}^{\infty})=0$. Since $\pi_1(S^1)\cong\mathbb Z$ and $\pi_j(S^1)=0$ for $j>1$, the sole positive homotopy group is $\pi_2\cong\mathbb Z$. The space is connected, so a CW model is $K(\mathbb Z,2)$. $\square$ [F3, F4, A1, step 1.1]
