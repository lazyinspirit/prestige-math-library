---
id: lem-a-self-transverse-immersion-has-no-double-points-when-n-is-greater-than-two-m
kind: lemma
title: A self-transverse immersion has no double points when $n>2m$
status: draft
origin: session
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-self-transverse-immersion-and-double-point-locus
- lem-double-point-locus-has-expected-dimension-two-m-minus-n
- cor-negative-expected-dimension-generic-intersections-are-empty
- def-immersion-submersion-and-constant-rank-map
- def-countable-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University
      Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course
      copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2,
      6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)
    url: https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf
  - title: Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045), §1,
      article pp. 2–5 (self-intersection set; ambient versus non-ambient isotopy) and §2, article pp. 6–14 (Theorems
      2.1–2.3 and 2.8; the modulo 2 and integral Whitney obstruction; the Whitney invariant); §3 and §5 used only
      for the recorded knotting boundary
    url: https://arxiv.org/pdf/math/0604045
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $f:M^m\to X^n$ be a self-transverse immersion with $n>2m$. Then $\Delta_2(f)=\varnothing$, so $f$ is injective. No properness or compactness of $M$ is used; in particular self-transversality, not genericity, is the hypothesis.

## Facts & Assumptions

**Given:** Countable choice and a self-transverse immersion $f:M^m\to X^n$ with $n>2m$.

[F1] $\Delta_2(f)=\{(x,y)\in M\times M\setminus\Delta_M:f(x)=f(y)\}$ and $\Sigma(f)=f(\operatorname{pr}_1\Delta_2(f))$ ([[def-self-transverse-immersion-and-double-point-locus]]).

[L1] For a self-transverse immersion $f:M^m\to X^n$, if $2m-n<0$ then $\Delta_2(f)=\varnothing$ and $\Sigma(f)=\varnothing$ ([[lem-double-point-locus-has-expected-dimension-two-m-minus-n]]).

[L2] Transverse maps $F:U^x\to W^w$, $G:Z^z\to W^w$ with $x+z<w$ have empty fibre product; in particular transverse embedded submanifolds whose dimensions sum to less than the ambient dimension do not meet ([[cor-negative-expected-dimension-generic-intersections-are-empty]]).

[A1] Countable choice is inherited from the transversality machinery used in [L1] and [L2]; this proof selects nothing ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 The hypothesis $n>2m$ is $2m-n<0$, so clause 2 of [L1] applies to the self-transverse immersion $f$ and gives $\Delta_2(f)=\varnothing$ and $\Sigma(f)=\varnothing$. The negative expected dimension is the instance of [L2] for the transverse pair $(f\times f,\ \Delta_X\hookrightarrow X\times X)$, whose source dimensions $2m$ and $n$ sum to less than the target dimension $2n$ exactly when $2m<n$. [L1, L2, A1]

2.1 By [F1] an element of $\Delta_2(f)$ is a pair of distinct points with equal image; since $\Delta_2(f)=\varnothing$ there are no such pairs, hence $f(x)=f(y)$ implies $x=y$, that is, $f$ is injective. [F1, step 1.1]

3.1 Therefore every self-transverse immersion from an $m$-manifold into an $n$-manifold with $n>2m$ is injective, without any compactness or properness hypothesis and with self-transversality in place of genericity. [step 1.1, step 2.1] ∎
