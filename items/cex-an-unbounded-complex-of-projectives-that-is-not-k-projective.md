---
id: "cex-an-unbounded-complex-of-projectives-that-is-not-k-projective"
kind: "counterexample"
deps: ["def-homotopically-projective-bounded-above-complex"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://mathoverflow.net/questions/120075/dg-projective-vs-k-projective-complexes"
      title: "Explicit specialization of the bounded models; see batch notes"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

Every unbounded complex whose terms are projective modules is K-projective.

## Facts & Assumptions

**Given:** Every unbounded complex whose terms are projective modules is K-projective.

[F1] K-projectivity annihilates Hom into every acyclic complex and all its shifts ([[def-homotopically-projective-bounded-above-complex]]).

## Counterexample

1.1 Set $R=\mathbb Z/4$, and take $P^i=R$ and $d^i=2$ for every integer $i$. The terms are free of rank one and thus projective (a map out of $R$ lifts by lifting its value at $1$). Also $d^{i+1}d^i=4=0$, and $\ker d^i=2R=\operatorname{im}d^{i-1}$. Thus $P$ is an acyclic doubly infinite complex. [given, algebra]

2.1 Every proposed homotopy $h^i:R\to R$ is multiplication by an element $a_i$. The identity-homotopy equation at degree $i$ would require $1=2a_i+2a_{i+1}$, impossible modulo two. Hence $1_P$ is nonzero in $\operatorname{Hom}_K(P,P)$. Since $P$ itself is acyclic, this contradicts the vanishing required for a K-projective source. The obstruction is an equation at every degree, not evidence from a finite truncation. [F1, step 1.1, algebra] ∎
