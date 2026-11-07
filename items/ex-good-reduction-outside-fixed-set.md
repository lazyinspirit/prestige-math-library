---
id: ex-good-reduction-outside-fixed-set
kind: example
title: "Abelian varieties with good reduction outside a fixed finite set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-good-reduction-and-abelian-scheme-model
  - def-number-field
  - def-weierstrass-model-and-discriminant-invariants
  - thm-faltings-isogeny-finiteness-theorem
  - thm-plane-cubic-chord-tangent-group-law
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, *Elliptic Curves*, Chapter II §3"
      url: "https://www.jmilne.org/math/Books/ectext6.pdf"
      locator: "Chapter II §§2–3, printed pp. 50–59; Weierstrass discriminant and good reduction when p is odd and does not divide it."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC, CC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Example

Assume AC, DC, and CC. Let $E/\mathbb Q$ be the elliptic curve $y^2=x^3-x$, with its point at infinity as identity. Its discriminant is $64$, so the displayed smooth cubic model defines good reduction at every odd prime; hence $E$ has good reduction outside $S=\{2\}$. For every fixed dimension $g=1$, the set of elliptic curves over $\mathbb Q$ with good reduction outside $\{2\}$ meets only finitely many $\mathbb Q$-isogeny classes.

## Example references

[[def-good-reduction-and-abelian-scheme-model]]

[[def-weierstrass-model-and-discriminant-invariants]]

[[thm-faltings-isogeny-finiteness-theorem]]

[[thm-plane-cubic-chord-tangent-group-law]]

[Silverman, *The Arithmetic of Elliptic Curves*, Chapter III, §1](https://link.springer.com/book/10.1007/978-1-4757-1920-8)

## Facts & Assumptions

**Given:** AC, DC, and CC; the plane cubic $E:y^2z=x^3-xz^2$ over $\mathbb Q$, its point at infinity, and the finite set $S=\{2\}$.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A3] [[def-countable-choice]]: CC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[thm-plane-cubic-chord-tangent-group-law]]: a smooth plane cubic with a rational identity point carries its elliptic-curve group law.

[F2] [[def-good-reduction-and-abelian-scheme-model]]: good reduction at a prime is exhibited by a smooth proper abelian-scheme model over the local ring.

[F3] [[thm-faltings-isogeny-finiteness-theorem]]: fixed dimension and good reduction outside a fixed finite set give finitely many isogeny classes.

[F4] [[def-weierstrass-model-and-discriminant-invariants]]: for coefficients $(a_1,a_2,a_3,a_4,a_6)=(0,0,0,-1,0)$, the invariants satisfy $b_2=0$, $b_4=-2$, $b_6=0$, $b_8=-1$, and $\Delta=-b_2^2b_8-8b_4^3-27b_6^2+9b_2b_4b_6$.

## Proof status

The discriminant computation is $b_2=0$, $b_4=-2$, $b_6=0$, $b_8=-1$, hence $\Delta=-8(-2)^3=64$ by [F4]. For every odd prime $p$, the projective reduction is smooth: at infinity its only point is $[0:1:0]$, where $F_Z=Y^2+2XZ=1$; on $Z=1$, a singular point would have $2y=0$, $y^2=x^3-x$, and $-3x^2+1=0$. Since $p$ is odd, $y=0$ and $x\in\{0,1,-1\}$, where the last derivative is respectively $1,-2,-2$, all nonzero. The displayed integral model is proper and has its identity section. Milne, *Elliptic Curves*, Chapter II §3, states the good-reduction criterion for odd $p$ with $p\nmid\Delta$; the current library dependencies do not supply the full step from this smooth genus-one model to an abelian-scheme model, so the assertion that this particular $E$ has good reduction outside $\{2\}$ remains escalated. Proposed supplier ID: `thm-smooth-proper-genus-one-model-with-section-is-an-elliptic-scheme` (not scaffolded or accepted; proposed placement is this A page before this example). The finiteness conclusion is conditional on [[thm-faltings-isogeny-finiteness-theorem]], whose Chebotarev, Weil-weight and Tate-chain proof obligations remain unresolved. The local Frobenius-characteristic-polynomial proof is now independently accepted, as recorded in `local-galois/residue72-weil-repair/representations72/owner-acceptance.json`; that acceptance does not prove this example’s abelian-scheme model assertion or the finiteness theorem. No item readiness is inferred.
