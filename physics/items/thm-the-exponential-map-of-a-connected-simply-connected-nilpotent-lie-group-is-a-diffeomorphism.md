---
id: thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism
kind: theorem
title: Exponential diffeomorphism for simply connected nilpotent Lie groups
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lower-central-series-and-nilpotent-lie-algebra, thm-baker-campbell-hausdorff, def-exponential-map-of-a-lie-group, thm-lie-second-fundamental-theorem, def-countable-choice]
landmark: true
proof_strategy: construction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, Theorem 1.127"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Chapter I, Theorem 1.127 and proof, printed pp. 115–116"
---

## Statement

Assume countable choice. If $N$ is a connected simply connected real Lie
group with nilpotent Lie algebra $\mathfrak n$, then
$\exp_N:\mathfrak n\to N$ is a diffeomorphism. In these coordinates,
multiplication is the BCH polynomial, which terminates after finitely many
bracket lengths.

## Facts & Assumptions

**Given:** Countable choice and such a group $N$.

[A1] Countable choice is [[def-countable-choice]].

[L1] Nilpotence means sufficiently long iterated brackets vanish ([[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L2] Locally, exponential coordinates multiply by the BCH series; its published proof assumes [A1] ([[thm-baker-campbell-hausdorff]]).

[L3] Lie II integrates maps from connected simply connected groups uniquely ([[thm-lie-second-fundamental-theorem]]).

[L4] The exponential is defined through one-parameter subgroups under [A1] ([[def-exponential-map-of-a-lie-group]]).

## Proof

**Proof technique:** construct the global BCH group and invoke Lie II.

1.1 By [L1], every term of BCH above some bracket length is zero. Thus $x*y=\operatorname{BCH}(x,y)$ is a polynomial map on the entire vector space $\mathfrak n$. On a neighborhood of $(0,0)$ it agrees with multiplication in exponential coordinates by [L2]. Both expressions $(x*y)*z$ and $x*(y*z)$ are polynomial maps, and they agree on a nonempty open neighborhood of $(0,0,0)$; their coordinate polynomials therefore agree everywhere. Hence $*$ is associative globally. [L1, L2, algebra]

1.2 The formal BCH identities give $x*0=0*x=x$ and $x*(-x)=0$; alternatively they hold locally by [L2] and then globally by the same polynomial-identity argument. Thus the vector space with $*$ is a real Lie group $B$. Its underlying manifold is $\mathbb R^{\dim\mathfrak n}$, hence connected and simply connected. The quadratic commutator term of BCH is the original bracket, so $\operatorname{Lie}(B)=\mathfrak n$. [L1, L2, algebra]

1.3 For fixed $x$, all brackets involving only $x$ vanish, so $(sx)*(tx)=(s+t)x$. Hence $t\mapsto tx$ is the one-parameter subgroup of $B$ tangent to $x$, and [L4] gives $\exp_B(x)=x$. [L4, algebra]

2.1 Apply [L3] to the identity map on $\mathfrak n$ to obtain homomorphisms $F:B\to N$ and $Q:N\to B$. Both composites have identity differential, so uniqueness in [L3] makes them the identity homomorphisms. Thus $F$ is a Lie-group isomorphism. Homomorphisms preserve one-parameter subgroups, so $F(x)=F(\exp_Bx)=\exp_Nx$ by step 1.3. Therefore $\exp_N=F$ is a diffeomorphism and transports multiplication to the stated BCH polynomial. For $\mathfrak n=0$, all groups and maps are one-point objects. Countable choice is used exactly through [L2]–[L4]. [A1, L3, L4, step 1.2, 1.3] ∎