---
id: ex-pontryagin-dual-of-a-finite-cyclic-group
kind: example
title: "The Pontryagin dual of a finite cyclic group"
deps:
- lem-unit-circle-is-a-compact-metrizable-topological-group
- lem-compact-open-topology-on-a-discrete-domain-is-pointwise
- def-pontryagin-dual-and-compact-open-topology
- thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals
- thm-complex-nth-roots-and-roots-of-unity
- def-integers-modulo-n
- thm-integers-modulo-n-basic-algebra
- def-standard-topologies
- def-group-homomorphism
- lem-group-power-laws
- thm-complex-exponential-addition-and-real-extension
- def-homeomorphism-and-open-maps
- def-continuous-map-top
- def-compact-space
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-sine-cosine-zero-sets-and-fundamental-period
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-10.md"
      - "research/frontier-38-owner-30-alpha-batch-10-5a.md"
      - "research/frontier-38-owner-30-step5-hash-10-post-5a.json"
    content_sha256: "ac7dbd8e4a21e3b6ca4b68da3787fb23fe72940f9659915811a9b992ad7a7eed"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: "Dikran D. Dikranjan, Introduction to Topological Groups (author lecture notes, Universita di Udine / Universidad Complutense de Madrid, 2007)"
    url: "http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf"
    locator: "Section 7.3, Proposition 7.13 proof, printed p. 51: finite cyclic duals from the subgroup of the circle of order N."
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand 1953, Chapter VII, Sections 34-35 (printed pp. 134-140)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
    locator: "Sections 35D-35E, printed p. 140, give the circle/integer dual background; the finite cyclic root-of-unity computation is proved here."
status: published
origin: pipeline
proof_strategy: direct
---
## Example

For $N\ge1$, on the presented group $\mathbb Z/N\mathbb Z$ carrying the
quotient topology of the discrete group $\mathbb Z$ (so that the finite group is
discrete), every continuous homomorphism
$\chi:\mathbb Z/N\mathbb Z\to\mathbb T$ is
$\chi([m])=\exp(2\pi i\,km/N)$ for a unique $k\in\mathbb Z/N\mathbb Z$, and
$k\mapsto\chi_{k}$ is an isomorphism of topological groups
$\mathbb Z/N\mathbb Z\to\widehat{\mathbb Z/N\mathbb Z}$ for the presented group
([[def-integers-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]); no
generator of an abstract cyclic group is chosen.

## Facts & Assumptions

[F1] The dual consists of the continuous homomorphisms into $\mathbb T$ with pointwise multiplication and the compact-open topology; a finite group is compact in the discrete topology and its dual is discrete. ([[def-pontryagin-dual-and-compact-open-topology]], [[def-standard-topologies]], [[def-compact-space]], [[thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals]])

[F2] In the presented group $\mathbb Z/N\mathbb Z$ one has $N[1]=[0]$ and $[m]=m[1]$, and $[m]=[m']$ holds exactly when $m\equiv m'\pmod N$. ([[def-integers-modulo-n]], [[thm-integers-modulo-n-basic-algebra]])

[F3] The $N$-th roots of unity in $\mathbb T$ are exactly the numbers $\exp(2\pi ik/N)$ with $k\in\mathbb Z$, and $\exp(2\pi ik/N)=\exp(2\pi ik'/N)$ holds exactly when $k\equiv k'\pmod N$; the identity $\exp(2\pi iu)=1$ for real $u$ holds exactly when $u\in\mathbb Z$. ([[thm-complex-nth-roots-and-roots-of-unity]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-cosine-zero-sets-and-fundamental-period]])

[F4] The addition formula $\exp(u+v)=\exp u\exp v$ gives $\exp(mz)=(\exp z)^m$ for integers $m$ by induction and inversion. $\mathbb T$ is a topological abelian group and group powers satisfy $z^{m+n}=z^{m}z^{n}$; a bijection between discrete spaces is a homeomorphism. ([[thm-complex-exponential-addition-and-real-extension]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[lem-group-power-laws]], [[def-homeomorphism-and-open-maps]], [[def-standard-topologies]])

## Verification

**Given:** $N\ge1$, the presented group $\mathbb Z/N\mathbb Z$, and the unit circle $\mathbb T$.

1.1 Let $\chi$ be a continuous homomorphism of $\mathbb Z/N\mathbb Z$ into $\mathbb T$ and put $\zeta:=\chi([1])$. Then $\zeta^{N}=\chi([1])^{N}=\chi(N[1])=\chi([0])=1$ by [F2] and the power laws of [F4], so $\zeta$ is an $N$-th root of unity and by [F3] there is $k\in\mathbb Z$ with $\zeta=\exp(2\pi ik/N)$; then $\chi([m])=\chi([1])^{m}=\exp(2\pi ikm/N)$ for every $m$ by [F2] and the power laws. [F2, F3, F4]

2.1 The integer $k$ is unique modulo $N$, and every $k$ defines a character: if $\exp(2\pi ikm/N)=\exp(2\pi ik'm/N)$ for all $m$, then for $m=1$ the congruence $k\equiv k'\pmod N$ follows from [F3]; conversely for fixed $k$ the formula $\chi_{k}([m]):=\exp(2\pi ikm/N)$ is well defined by [F3] and [F2], is a homomorphism because $\exp(2\pi ik(m+m')/N)=\exp(2\pi ikm/N)\exp(2\pi ikm'/N)$, and is continuous because $\mathbb Z/N\mathbb Z$ is finite and discrete by [F1]. [step 1.1, F1, F2, F3, F4]

3.1 The map $k\mapsto\chi_{k}$ from $\mathbb Z/N\mathbb Z$ to the dual is a bijective homomorphism: $\chi_{k+k'}=\chi_{k}\chi_{k'}$ by the addition formula, injectivity is step 2.1, and surjectivity is step 1.1 combined with the uniqueness in step 2.1. [step 1.1, step 2.1, F3, F4]

4.1 It is a homeomorphism: $\mathbb Z/N\mathbb Z$ is finite and discrete by [F1], its dual is discrete by [F1] because the finite discrete group is compact, and any bijection between discrete spaces is a homeomorphism by [F4]; hence $k\mapsto\chi_{k}$ is an isomorphism of topological groups. [step 3.1, F1, F4] ∎
