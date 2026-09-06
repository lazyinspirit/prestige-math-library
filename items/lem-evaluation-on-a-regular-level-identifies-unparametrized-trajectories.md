---
id: lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories
kind: lemma
title: "A regular level identifies unparametrized trajectories"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-unparametrized-morse-trajectory-moduli-space, def-parametrized-morse-trajectory-space, def-downward-gradient-like-vector-field, thm-a-regular-level-set-is-an-embedded-submanifold, thm-fundamental-theorem-on-flows]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, Remark 2.2.3"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

Let $f(q)<c<f(p)$ and suppose that $c$ is a regular value.  Each class in $\mathcal M(p,q)$ has exactly one representative whose value at $0$ lies in $f^{-1}(c)$.  Thus evaluation induces a bijection

$$\mathcal M(p,q)\cong\widetilde{\mathcal M}(p,q)\cap f^{-1}(c).$$

## Facts & Assumptions

**Given:** A Morse trajectory from $p$ to $q$ and a regular $c$ strictly between its endpoint values.

[F1] Along a nonconstant trajectory, $\frac d{dt}(f\circ\gamma)=df(X)<0$ ([[def-downward-gradient-like-vector-field]]).

[F2] A regular level is an embedded hypersurface ([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

## Proof

**Proof technique:** direct.

1.1 Continuity and the endpoint limits give a time $t_0$ with $f(\gamma(t_0))=c$; strict decrease in [F1] makes $t_0$ unique.  Translating by $t_0$ therefore gives exactly one representative in the stated slice. [F1, given]

2.1 Conversely, two slice representatives in one time orbit differ by a translation, and step 1.1 forces that translation to be zero.  The slice lies in the embedded hypersurface of [F2], giving the asserted identification. [F2, step 1.1] ∎
