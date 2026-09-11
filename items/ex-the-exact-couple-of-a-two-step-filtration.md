---
id: ex-the-exact-couple-of-a-two-step-filtration
kind: example
title: The exact couple of a two step filtration
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["thm-a-filtered-complex-produces-an-exact-couple", "lem-abelian-group-model-for-spectral-sequence-computations", "def-exact-couple"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Example

Let $C$ be concentrated in degree zero with $C_0=\mathbb Z/4$, zero differential, and filtration $F_pC=0$ for $p<0$, $F_0C=2\mathbb Z/4$, $F_pC=C$ for $p\ge1$. Its initial exact couple has nonzero terms only on total degree zero:
$$D^1_{p,-p}=\begin{cases}0&p<0,\\2\mathbb Z/4&p=0,\\\mathbb Z/4&p\ge1,\end{cases}\qquad E^1_{p,-p}=\begin{cases}2\mathbb Z/4&p=0,\\(\mathbb Z/4)/(2\mathbb Z/4)&p=1,\\0&\text{otherwise}.\end{cases}$$
Both displayed $E^1$ terms are isomorphic to $\mathbb Z/2$. The $i$ maps are the filtration inclusions, $j$ is identity at $p=0$ and quotient at $p=1$, and $k=0$. This finite filtered example is not first quadrant: $(1,-1)$ is a nonzero spectral position.

## Facts & Assumptions

[F1] [[thm-a-filtered-complex-produces-an-exact-couple]] defines $D^1=H(F_pC)$, $E^1=H(F_pC/F_{p-1}C)$ and their maps.

[F2] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies the integer residue groups and their ordinary subgroup quotients.

[F3] [[def-exact-couple]] specifies $i$ degree $(1,-1)$, initial $j$ degree zero, $k$ degree $(-1,0)$ and all three exactness equalities.

## Verification

**Given:** The complex and finite filtration in the example. The subgroup $2\mathbb Z/4=\{0,2\}$ is closed under addition and negatives, and all differentials are zero.

1.1 Homology of each piece equals its degree-zero group and vanishes in all other degrees. The successive quotient at $p=0$ is $\{0,2\}$, isomorphic to $\mathbb Z/2$ by $[a]_2\mapsto[2a]_4$. At $p=1$ it has cosets $\{0,2\},\{1,3\}$, identified with $\mathbb Z/2$ by parity. All other graded quotients are zero. This proves every displayed $D^1$ and $E^1$ term, including the infinite constant $D^1$ tail. [F1, F2]

2.1 The $i$ arrow from $D^1_{0,0}$ to $D^1_{1,-1}$ is the inclusion of $\{0,2\}$; at every $p\ge1$ it is identity into the next $\mathbb Z/4$. At $p<0$ it is the map from zero. The $j$ arrows are the stated identity and parity quotient at $p=0,1$, and zero to zero targets elsewhere. Every $k$ lowers total degree to minus one, where the $D^1$ terms vanish, so $k=0$. These maps have the exact degrees in [F3]. [F1, F3, step 1.1]

3.1 Check exactness at $D^1$ before $j$: at $p=0$, the incoming $i$ image and $\ker j$ are zero; at $p=1$, both are $\{0,2\}$; at $p\ge2$, both are all of $\mathbb Z/4$; at $p<0$ both are zero. At every $E^1$ term $j$ is onto, so $\operatorname{im}j=\ker k=E^1$. At $D^1$ before $i$, each $i$ is injective, so $\ker i=0=\operatorname{im}k$. All off-diagonal terms give zero equalities. Thus all vertices are explicitly exact. The $d^1=jk$ differentials are zero, and the nonzero $(1,-1)$ term prevents a first-quadrant interpretation. No AC or representative section is used. [F2, F3, step 1.1, step 2.1] ∎
