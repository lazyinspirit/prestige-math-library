---
id: ex-artin-schreier-differential-residue-pairing
kind: example
title: Evaluate the Artin–Schreier pairing on a Laurent series
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
proof_strategy: direct
deps:
- def-local-field-valuation-ring-uniformizer-and-residue-field
- def-local-artin-schreier-pairing
- thm-artin-schreier-differential-residue-formula
- def-local-artin-reciprocity-map
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition,
      Chapter IV §§5.4–5.6
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: Artin–Schreier pairing and differential-residue formula, printed pp.147–150.
verification: {}
axiom_use: No AC existence is inferred. The original unqualified Example supplies the named
  canonical map, closure and normalized invariant data. The residue supplier proves the identity
  from exactly this supplied data using a finite coboundary, separately from its AC/DC norm-kernel
  branch.
---

## Example

Let $F=\mathbb F_3((t))$, let $F_s$ be a separable closure, and let
$F^{\mathrm{ab}}$ be its maximal abelian extension. Use
$\operatorname{rec}_F:\widehat{F^\times}\to
\operatorname{Gal}(F^{\mathrm{ab}}/F)$ normalized so a uniformizer maps to
arithmetic Frobenius on every finite unramified extension. For
$a=1+t\in F^\times$ and $b=t^{-1}\in F$, choose $\gamma\in F_s$ with
$\gamma^3-\gamma=b$ and define the Artin–Schreier pairing by
$$[a,b]_F=\operatorname{rec}_F(\bar a)(\gamma)-\gamma\in\mathbb F_3,$$
where $\bar a$ is the image of $a$ in the profinite completion of $F^\times$.
Writing $\operatorname{res}_t$ for the coefficient of $t^{-1}$, the
pairing's differential-residue formula gives
$$[1+t,t^{-1}]_F= \operatorname{Tr}_{\mathbb F_3/\mathbb F_3} \operatorname{res}_t\left(t^{-1}(1+t)^{-1}\frac{d(1+t)}{dt}\right) =1\in\mathbb F_3.$$
This is a characteristic-$3$ Artin–Schreier pairing, not a Hilbert symbol
whose exponent is prime to the characteristic.

## Example references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-local-artin-schreier-pairing]]

[[thm-artin-schreier-differential-residue-formula]]

## Facts & Assumptions

**Given:** The original Laurent-series field, closure and named canonical
map. Its supplied normalized invariant, finite-character property and
arithmetic unramified action are the canonical-map data of the Definition.
No existence of this supplied map is inferred without choice.

[F1] The residue theorem's proved Remark and identity proof apply in ZF
to the literally supplied canonical data above, independently of its
AC/DC existence/norm-kernel branch. Thus the pairing is
$[a,b]_F=\operatorname{Tr}_{k/\mathbb F_p}
\operatorname{res}_t(b\,a^{-1} da/dt)$.
[[thm-artin-schreier-differential-residue-formula]]

[F2] The symbol is defined using a root of $X^p-X-b$ and local reciprocity.
[[def-local-artin-schreier-pairing]]
[[def-local-artin-reciprocity-map]]

[F3] Here the field characteristic and the AS exponent both equal $3$,
so that exponent is not prime to the characteristic. This is direct
arithmetic from the original Example, not a Hilbert nondegeneracy input.

## Verification

**Proof technique:** compute the Laurent coefficient of the differential.

**Given:** Exactly the original supplied-map Example, $F=\mathbb F_3((t))$,
$a=1+t$, and $b=t^{-1}$; no AC existence premise is introduced.

1.1 Formal differentiation gives $da/dt=1$, and $a^{-1}=(1+t)^{-1}=1-t+t^2-\cdots$. Therefore $b\,a^{-1}da/dt=t^{-1}-1+t-\cdots$, whose $t^{-1}$ coefficient is $1$. [F1, given, algebra]

2.1 The residue-field trace $\operatorname{Tr}_{\mathbb F_3/\mathbb F_3}$ is the identity, so [F1] gives $[1+t,t^{-1}]_F=1$. Since the exponent here is the characteristic $3$, [F3] shows this is the separate Artin–Schreier branch. [F1, F3, step 1.1, algebra] ∎

