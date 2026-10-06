---
id: ex-pontryagin-dual-of-the-circle-is-the-integers
kind: example
title: The Pontryagin dual of the circle is $\mathbb Z$
deps:
- lem-unit-circle-is-a-compact-metrizable-topological-group
- def-pontryagin-dual-and-compact-open-topology
- thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals
- lem-continuous-characters-of-the-real-line-are-exponentials
- def-the-one-dimensional-torus-and-normalized-haar-integral
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-double-angle-and-power-reduction-identities
- thm-sine-cosine-zero-sets-and-fundamental-period
- thm-sine-and-cosine-derivatives
- def-countable-choice
- def-group-homomorphism
- lem-group-power-laws
- thm-complex-exponential-addition-and-real-extension
- def-homeomorphism-and-open-maps
- def-standard-topologies
- def-continuous-map-top
- lem-continuity-is-local-and-pastes
- def-complex-metric-convergence-and-continuity
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
    content_sha256: "39a18bd3819f6cc5a9baba5cd3dc8ce0dc3d25d004db5a20eef269fb8e73c799"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Dikran D. Dikranjan, Introduction to Topological Groups (author lecture
      notes, Universita di Udine / Universidad Complutense de Madrid, 2007)
    url: http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf
    locator: 'Section 7.2 (printed pp. 48-49), Lemma 7.5 and Example 7.7: every continuous
      endomorphism of the circle is k times the identity, k in Z, and the dual of
      the circle is Z.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards
      Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: "Appendix C.3, printed p. 436, paragraph following Theorem C.10 and equation (C.2): circle characters have integer frequencies."
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand
      1953, Chapter VII, Sections 34-35 (printed pp. 134-140)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: "Section 35D, printed p. 140: the dual of the quotient circle is the integer group."
status: published
origin: pipeline
proof_strategy: direct
---
## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Every
continuous group homomorphism $\chi:\mathbb T\to\mathbb T$ is
$\chi(z)=z^{n}$ for a unique $n\in\mathbb Z$; consequently
$n\mapsto(z\mapsto z^{n})$ is an isomorphism of topological groups
$\mathbb Z\to\widehat{\mathbb T}$ (equivalently, the dual of the published
circle $\mathbb R/\mathbb Z$ is $\mathbb Z$).

## Facts & Assumptions

[F1] $\varepsilon:\mathbb R/\mathbb Z\to\mathbb T$, $\varepsilon([t])=\exp(2\pi it)$, is an isomorphism of topological groups, so it is continuous, surjective, and satisfies $\varepsilon([0])=1$; the quotient homomorphism $p:\mathbb R\to\mathbb R/\mathbb Z$, $p(t)=[t]$, is continuous and $\varepsilon(p(t))=\exp(2\pi it)$. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]])

[F2] Every continuous homomorphism $\varphi:\mathbb R\to\mathbb T$ is $\varphi(t)=\exp(2\pi i\xi t)$ for a unique $\xi\in\mathbb R$. ([[lem-continuous-characters-of-the-real-line-are-exponentials]])

[F3] $\exp(2\pi iu)-1=(\cos 2\pi u-1)+i\sin 2\pi u$, so $|\exp(2\pi iu)-1|^{2}=2-2\cos 2\pi u=4\sin^{2}(\pi u)$ for real $u$ by the double-angle identity; and $\sin(\pi x)=0$ exactly when $x\in\mathbb Z$. ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-double-angle-and-power-reduction-identities]], [[thm-sine-cosine-zero-sets-and-fundamental-period]])

[F4] The addition formula for the complex exponential gives $\exp(nz)=(\exp z)^n$ for $n\in\mathbb Z$ by induction and inversion. Exponent laws in a group: $z^{m+n}=z^{m}z^{n}$; the map $z\mapsto z^{k}$ is a continuous endomorphism of the topological group $\mathbb T$; composites of continuous maps are continuous. ([[thm-complex-exponential-addition-and-real-extension]], [[lem-group-power-laws]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[lem-continuity-is-local-and-pastes]])

[F5] The dual of a compact abelian topological group is discrete, and the dual of a topological group is a Hausdorff topological group; every point of $\mathbb T$ is $\varepsilon([t])$ for some real $t$. ([[thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[def-standard-topologies]])

## Verification

**Given:** A continuous group homomorphism $\chi:\mathbb T\to\mathbb T$, and the quotient circle $\mathbb R/\mathbb Z$ with the map $\varepsilon([t])=\exp(2\pi it)$.

1.1 The composite $\varphi:=\chi\circ\varepsilon\circ p:\mathbb R\to\mathbb T$ is a continuous group homomorphism: $p$ and $\varepsilon$ are continuous homomorphisms by [F1], $\chi$ is one by hypothesis, and the composite of homomorphisms is a homomorphism; by [F2] there is a unique $\xi\in\mathbb R$ with $\varphi(t)=\exp(2\pi i\xi t)$ for all real $t$. [F1, F2, F4]

2.1 The parameter $\xi$ is an integer: for every integer $k$ one has $\varepsilon([k])=\exp(2\pi ik)=1$ by [F1] and [F3] (since $|\exp(2\pi ik)-1|^{2}=4\sin^{2}(\pi k)=0$), so $\varphi(k)=\chi(1)=1$; with $\varphi(k)=\exp(2\pi i\xi k)$ this gives $\sin(\pi\xi k)=0$ for every integer $k$, in particular for $k=1$, and so $\xi\in\mathbb Z$ by [F3]. [step 1.1, F1, F3]

3.1 Consequently $\chi(z)=z^{\xi}$ for every $z\in\mathbb T$: write $z=\varepsilon([t])=\exp(2\pi it)$ for some real $t$, which is possible because $\varepsilon$ is surjective by [F1]; then $\chi(z)=\varphi(t)=\exp(2\pi i\xi t)=\big(\exp(2\pi it)\big)^{\xi}=z^{\xi}$ by step 1.1, step 2.1 and the power laws of [F4]. [step 1.1, step 2.1, F1, F4]

4.1 Distinct integers give distinct characters: if $z^{n}=z^{m}$ for all $z\in\mathbb T$ with $n\ne m$, then evaluating at $z=\varepsilon([t])$ gives $\exp(2\pi i(n-m)t)=1$ for all real $t$, which fails for $t=1/(2|n-m|)$ by [F3], since then $\sin(\pi/2)\neq0$; hence $n=m$. Each $z\mapsto z^{n}$ is a continuous endomorphism of $\mathbb T$ by [F4]. [step 3.1, F1, F3, F4]

5.1 The map $n\mapsto(z\mapsto z^{n})$ is a bijective homomorphism from the discrete group $\mathbb Z$ onto the dual: it is a homomorphism by the power laws $z^{n+m}=z^{n}z^{m}$ of [F4], injective by step 4.1, and surjective by steps 1.1, 2.1 and 3.1. [step 2.1, step 3.1, step 4.1, F4]

6.1 It is a homeomorphism: $\mathbb Z$ is discrete by [F5] and the dual of the compact group $\mathbb T$ is discrete by [F5], so a bijection between discrete spaces is a homeomorphism; hence $\mathbb Z\cong\widehat{\mathbb T}$ as topological groups, and composing with the isomorphism $\mathbb T\cong\mathbb R/\mathbb Z$ gives the dual of the published circle. [step 5.1, F1, F5] ∎
