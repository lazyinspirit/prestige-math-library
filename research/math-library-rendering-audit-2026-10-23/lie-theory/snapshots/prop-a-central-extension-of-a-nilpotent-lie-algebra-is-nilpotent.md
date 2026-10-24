---
id: prop-a-central-extension-of-a-nilpotent-lie-algebra-is-nilpotent
kind: proposition
title: A central extension of a nilpotent Lie algebra is nilpotent
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lower-central-series-and-nilpotent-lie-algebra, def-quotient-lie-algebra, def-lie-subalgebra-ideal-and-center]
landmark: false
proof_strategy: direct
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
    - title: "Milne, Lie Algebras, Proposition 2.5(b)"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Proposition 2.5(b), printed p. 12"
---

## Statement

Let $\mathfrak i\subseteq Z(\mathfrak g)$ be an ideal. If
$\mathfrak g/\mathfrak i$ is nilpotent of class $c$, then $\mathfrak g$ is
nilpotent of class at most $c+1$.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ and a central ideal $\mathfrak i\subseteq Z(\mathfrak g)$ whose quotient has class $c$.

[L1] The lower central series has $\gamma_{r+1}=[\mathfrak g,\gamma_r]$ ([[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L2] The quotient map $\pi:\mathfrak g\to\mathfrak g/\mathfrak i$ is a surjective Lie homomorphism ([[def-quotient-lie-algebra]]).

[L3] Centrality means $[\mathfrak g,\mathfrak i]=0$ ([[def-lie-subalgebra-ideal-and-center]]).

## Proof

**Proof technique:** direct.

1.1 Surjectivity and bracket preservation in [L2] give $\pi(\gamma_r(\mathfrak g))=\gamma_r(\mathfrak g/\mathfrak i)$ by induction on $r$. Since the quotient has class $c$, its $(c+1)$st term vanishes, and therefore $\gamma_{c+1}(\mathfrak g)\subseteq\ker\pi=\mathfrak i$. [given, L1, L2, algebra]

2.1 Now [L1], step 1.1, and centrality [L3] give $\gamma_{c+2}(\mathfrak g)=[\mathfrak g,\gamma_{c+1}(\mathfrak g)]\subseteq[\mathfrak g,\mathfrak i]=0$. Thus $\mathfrak g$ has class at most $c+1$. When the quotient is zero ($c=0$), this says precisely that the central algebra $\mathfrak g=\mathfrak i$ is abelian. [L1, L3, step 1.1] ∎
