---
id: lem-r2-exact-top-current-has-zero-total-charge
kind: lemma
title: "An exact top-degree current has zero total charge on a closed manifold"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - lem-r2-current-differential-is-continuous-and-squares-to-zero
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  lem-r2-current-differential-is-continuous-and-squares-to-zero: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  scraped: []
  references:
    - title: "Tien-Cuong Dinh and Nessim Sibony, Introduction to the Theory of Currents, §§3.1–3.2"
      url: "https://people.math.harvard.edu/~demarco/Math274/DinhSibony_Introduction.pdf"
    - title: "Victor Guillemin and Peter J. Haine, Differential Forms, MIT 18.952 course book, §5.5"
      url: "https://math.mit.edu/classes/18.952/2018SP/files/18.952_book.pdf"
---

## Statement

If $X$ is a compact oriented smooth $n$-manifold without boundary and $T$ is a degree-$(n-1)$ de Rham current on $X$, then $\langle dT,1\rangle=0$. Thus a top-degree current identity can be paired with the constant test function only after every term has been defined as a degree-$n$ current with the same pairing convention. This conclusion determines no physical source coefficient or normalization.

## Statement references

[[def-r2-compact-de-rham-current-of-a-source-cycle]]

## Facts & Assumptions

**Given:** The closed oriented manifold $X$, a degree-$(n-1)$ current $T$, and the constant function $1\in\Omega^0(X)$.

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]] defines $\langle dT,\eta\rangle=(-1)^{k+1}\langle T,d\eta\rangle$ for a degree-$k$ current and sets $d$ to zero outside current degrees $0,\ldots,n$.

[F2] [[lem-r2-current-differential-is-continuous-and-squares-to-zero]] verifies that this differential is a current in the stated degree.

## Proof

**Given:** The current differential sign and the smooth exterior derivative on functions.

1.1 If $n=0$, then $T$ has degree $-1$ and is zero by the out-of-range current convention in [F1], so the conclusion holds. If $n\ge1$, then $k=n-1$ is an allowed degree and, for the test function $1$, [F1] gives $$\langle dT,1\rangle=(-1)^{(n-1)+1}\langle T,d1\rangle=(-1)^n\langle T,0\rangle=0,$$ since the exterior derivative of a constant function is zero. The pairing is well-typed by [F2]. [F1, F2, given, cases, algebra]

2.1 By [F1], a degree-$n$ current acts on $\Omega^0(X)$, so equality of degree-$n$ currents permits evaluation on $1$ term by term. If any proposed Bianchi term has not been defined in this same dual space, the displayed pairing is not defined and the calculation in step 1.1 cannot be applied to it. The argument is mathematical only and supplies no value for any physical coefficient. [F1, step 1.1, given] ∎

## Statement references

[[lem-r2-current-differential-is-continuous-and-squares-to-zero]]

