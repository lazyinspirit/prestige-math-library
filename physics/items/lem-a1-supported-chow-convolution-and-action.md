---
id: lem-a1-supported-chow-convolution-and-action
kind: lemma
title: "Supported Chow convolution and its action for the A1 family"
status: published
dependency_level: 2
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - lem-a1-arbitrary-framing-cotangent-hecke-model
  - def-refined-gysin-pullback-for-regular-embeddings
  - lem-refined-gysin-commutation-and-composition
  - lem-proper-pushforward-of-cycles-well-defined
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hiraku Nakajima, Introduction to quiver varieties—for ring and representation theorists"
      url: "https://arxiv.org/pdf/1611.10000v1"
      locator: "Example 10 and §§4.2–4.5; local A1 proofs below supply the geometry and intersection calculations"
    - title: "The Stacks Project, Chow Homology and Chern Classes"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Sections 42.36–42.44 and 42.53–42.59; the proved local Chow suppliers are explicit dependencies"
---

## Statement

For $0\le u,v\le w$ use the smooth $M_v$ and projective maps $\mu_v$ of
[[lem-a1-arbitrary-framing-cotangent-hecke-model]], and put
$R_{uv}=M_u\times_{\operatorname{End}(W)}M_v$. A cycle on $R_{uv}$ is
regarded as a cycle with this support in the smooth product. Define
$$D\star C=(p_{13})_*\Delta_{M_v}^!(C\times D), \qquad C\in A_c(R_{uv})_{\mathbb Q},\quad D\in A_d(R_{vt})_{\mathbb Q},$$
where the diagonal identifies the two middle factors. Its degree is
$c+d-2a_v$ and its support is in $R_{ut}$. For
$\alpha\in A_k(L_u)_{\mathbb Q}$ define
$$C\star\alpha=(p_v)_*\Delta_{M_u}^!(\alpha\times C) \in A_{k+c-2a_u}(L_v)_{\mathbb Q}.$$
All pushforwards here are proper on the indicated supports. Convolution is
associative, the diagonal fundamental classes are units, and
$D\star(C\star\alpha)=(D\star C)\star\alpha$.
A cycle of degree $a_u+a_v$ therefore acts between the top zero-fiber
Chow groups. For $\alpha=[L_u]$, its action is equivalently the refined
intersection of $C$ with $L_u\times M_v\hookrightarrow M_u\times M_v$,
followed by pushforward with support to $L_v$.
These operations commute with the $\operatorname{GL}(W)$-actions on
ordinary Chow groups.

## Facts & Assumptions

**Given:** The common-endomorphism fiber products and Chow operations
in the statement; every diagonal below is taken in its smooth ambient
variety, not in a possibly singular $R_{uv}$.

[F1] Every $\mu_v$ is projective, $\dim M_v=2a_v$, and $L_v=\mu_v^{-1}(0)$
([[lem-a1-arbitrary-framing-cotangent-hecke-model]]).

[F2] Refined Gysin maps for regular embeddings exist after every base
change, commute with proper pushforward, and commute and compose with
one another and smooth pullback
([[def-refined-gysin-pullback-for-regular-embeddings]],
[[lem-refined-gysin-commutation-and-composition]]).

[F3] Proper pushforward is functorial on Chow groups
([[lem-proper-pushforward-of-cycles-well-defined]]).

## Proof

1.1 The projections of $R_{uv}$ to either factor are projective by base change from $\mu_v$ or $\mu_u$. The intersection support defining $D\star C$ lies in $M_u\times_{\operatorname{End}(W)}M_v \times_{\operatorname{End}(W)}M_t$; forgetting the middle factor is projective by base change from $\mu_v$, so $p_{13}$ is proper there. The support for $C\star\alpha$ lies in $L_u\times L_v$ and projects properly to $L_v$ because $L_u$ is projective. The diagonals of the smooth $M_v$ and $M_u$ are regular of codimensions $2a_v$ and $2a_u$. Refined Gysin and pushforward therefore define the stated homomorphisms with exactly the displayed degree shifts. [F1, F2, F3, algebra]

2.1 For three kernels on consecutive pairs, place their external product on the six-factor product, and impose the two identifications of the repeated middle varieties by refined diagonal Gysins. The two regular embeddings use independent factors; their refined operations commute and their composite is the common double-diagonal operation by [F2]. Either parenthesization of convolution is this operation followed by forgetting the two middle factors. To move each intermediate pushforward past the remaining Gysin, use the proper base-change compatibility in [F2] on the common-endomorphism support; properness was checked in step 1.1. Functoriality [F3] then identifies the two expressions, proving associativity without a transversality assertion for the kernels. [F2, F3, step 1.1, algebra]

3.1 Place $\alpha$, $C$ and $D$ on the corresponding five-factor product. The same argument imposes first the source and then the middle diagonal, or in the opposite order, with the same final projection to $L_t$. This proves the action identity. For a diagonal kernel the imposed middle equality is a regular section of a smooth projection; its refined Gysin cancels that projection's flat pullback by [F2], so the resulting operation is the identity. This proves the unit assertions as well. [F2, F3, step 2.1, algebra]

4.1 Since $L_u$ and $M_u$ are smooth and $L_u\hookrightarrow M_u$ is a zero section, the diagonal intersection with $[L_u]\times C$ equals the base-changed zero-section Gysin on $C$. In local smooth coordinates this is the graph equality followed by the equations for that zero section; Gysin composition [F2] identifies it with the single regular embedding $L_u\times M_v\hookrightarrow M_u\times M_v$. The resulting classes remain supported on $L_v$ by step 1.1. Finally transport by $h\in\operatorname{GL}(W)$ preserves the common-endomorphism supports, all diagonals and all projection maps by [F1]. Proper and Gysin naturality [F2]–[F3] therefore intertwine the induced ordinary Chow actions. This proves the final assertions. [F1, F2, F3, step 3.1, algebra] ∎

