---
id: "fs-every-complex-of-projectives-is-homotopically-projective"
kind: "false-statement"
deps: ["def-homotopically-projective-bounded-above-complex", "def-projective-module"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://mathoverflow.net/questions/120075/dg-projective-vs-k-projective-complexes"
      title: "Boundary check against the licensed construction"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every complex of projective modules, without any boundedness hypothesis, is K-projective.

## Facts & Assumptions

**Given:** Every complex of projective modules, without any boundedness hypothesis, is K-projective.

[F1] K-projectivity requires vanishing of Hom into every acyclic shift ([[def-homotopically-projective-bounded-above-complex]]).

[F2] A projective module lifts maps through epimorphisms ([[def-projective-module]]).

## Refutation

1.1 Let $R=\mathbb Z/4$ and $P^i=R$ for every integer $i$, with all differentials multiplication by two. Then $d^2=4=0$ and $\ker(2)=2R=\operatorname{im}(2)$, so $P$ is acyclic. Each term is projective: a map out of $R$ lifts through any epimorphism by choosing a preimage of the value at $1$. [F2, algebra]

2.1 Every $R$-linear $h^i:R\to R$ is multiplication by some $a_i$. If $1_P=dh+hd$, degree $i$ gives $1=2a_i+2a_{i+1}$ in $R$, impossible after reduction modulo two. Thus $\operatorname{Hom}_K(P,P)$ contains a nonzero identity although its target $P$ is acyclic. This violates K-projectivity. [F1, step 1.1, algebra] ∎
