---
id: cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
kind: corollary
title: Fourier transform is a topological automorphism of Schwartz space
deps: ["thm-fourier-inversion-on-schwartz-space", "thm-fourier-transform-maps-schwartz-space-continuously-to-itself", "thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Remark 11.16, p.124
---

## Statement

Assume countable choice. The Fourier transform is a topological automorphism of $\mathcal S(\mathbb R^n)$, with $\mathcal F^2=R$ and $\mathcal F^{-1}=R\mathcal F$, where $Rf(x)=f(-x)$.

## Facts & Assumptions

**Given:** [[def-countable-choice]].

[F1] Inversion holds everywhere on Schwartz space ([[thm-fourier-inversion-on-schwartz-space]]).

[F2] Fourier transformation is continuous on Schwartz space ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]).

[F3] Reflection is continuous on Schwartz space ([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]]).

## Proof

**Proof technique:** direct.

1.1 Evaluate [F1] at $-x$. Its right-hand side is $\mathcal F(\widehat f)(x)$, so $\mathcal F^2f=Rf$. Also $R^2=I$ directly. By associativity, $\mathcal FR=\mathcal F\mathcal F^2=\mathcal F^2\mathcal F=R\mathcal F$. All compositions are defined by [F2] and [F3]. [F1, F2, F3, algebra]

2.1 Consequently $(R\mathcal F)\mathcal F=R^2=I$ and $\mathcal F(R\mathcal F)=R\mathcal F^2=I$. These two identities prove both injectivity and surjectivity and the asserted inverse. Both the map and its inverse are continuous by [F2], [F3] and composition, establishing the topological automorphism. [step 1.1, F2, F3] ∎
