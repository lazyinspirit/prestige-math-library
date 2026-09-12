---
id: cor-normalized-haar-probability-on-a-compact-group
kind: corollary
title: Normalized Haar probability on a compact group
deps: [cor-existence-of-left-and-right-haar-measures, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, thm-uniqueness-of-left-haar-measure-up-to-scale, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
proof_strategy: direct
---

## Statement

Assume AC. Every compact Hausdorff group has a unique left Haar probability measure. It is right invariant and inversion invariant as well.

## Facts & Assumptions

**Given:** A compact Hausdorff group and AC.

[F1] A left Haar measure exists under AC. ([[cor-existence-of-left-and-right-haar-measures]])

[F2] The whole compact nonempty group has positive finite Haar mass. ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]])

[F3] Left Haar measures differ by a positive scalar. ([[thm-uniqueness-of-left-haar-measure-up-to-scale]])

[A1] AC is assumed in the choice-function form stated in the cited definition. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 Under the assumed AC, take a left Haar measure $\lambda$. Since $G$ is open, nonempty and compact, $0<\lambda(G)<\infty$. Put $\mu(E)=\lambda(E)/\lambda(G)$; it is left Haar and $\mu(G)=1$. Any other left Haar probability is $c\mu$, and evaluation on $G$ forces $c=1$. [F1, F2, F3, A1]

2.1 For fixed $a$, $\nu(E)=\mu(Ea)$ is Radon by the right-translation homeomorphism and is a probability. Left and right translations commute, so $\nu(bE)=\mu(bEa)=\mu(Ea)=\nu(E)$. Uniqueness gives $\nu=\mu$, proving right invariance. Now $\eta(E)=\mu(E^{-1})$ is a Radon probability and $\eta(aE)=\mu(E^{-1}a^{-1})=\mu(E^{-1})$ by right invariance; uniqueness again gives $\eta=\mu$. [F1, F3, step 1.1] ∎

## Sources

Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13. Local argument and conventions as displayed above.
