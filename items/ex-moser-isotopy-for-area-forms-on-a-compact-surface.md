---
id: ex-moser-isotopy-for-area-forms-on-a-compact-surface
kind: example
title: Moser isotopy for area forms on a compact surface
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-moser-stability-theorem", "thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Homework 6, Problem 3(b), pp. 49--50
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. Let $\omega_0,\omega_1$ be positive area forms
on a nonempty compact connected oriented surface $\Sigma$ without boundary.
If $\int_\Sigma\omega_0=\int_\Sigma\omega_1$, then they are related by a
Moser isotopy.

## Facts & Assumptions

**Given:** The surface and two forms in the statement.

[F1] Integration is an isomorphism on top compactly supported de Rham cohomology of a connected oriented boundaryless manifold. [[thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology]].

[F2] A cohomologous symplectic path on compact $M$ is trivialized by an isotopy. [[thm-moser-stability-theorem]].

## Verification

**Proof technique:** direct.

1.1 Compactness makes both top forms compactly supported. Their difference has integral zero, so [F1] makes it exact and therefore $[\omega_0]=[\omega_1]$. [F1, given]

2.1 Relative to any fixed positive area form, write $\omega_i=f_i\mu$ with $f_i>0$. Then $\omega_t=(1-t)\omega_0+t\omega_1=((1-t)f_0+tf_1)\mu$ stays positive and hence symplectic, and step 1.1 makes its class constant. [step 1.1, given, algebra]

3.1 Apply [F2] to obtain $\phi_t^*\omega_t=\omega_0$; in particular $\phi_1^*\omega_1=\omega_0$. The connected nonempty hypothesis is exactly what [F1] uses. [F2, step 1.1, step 2.1] ∎
