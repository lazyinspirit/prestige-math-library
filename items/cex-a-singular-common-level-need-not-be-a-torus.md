---
id: cex-a-singular-common-level-need-not-be-a-torus
kind: counterexample
title: A singular common level need not be a torus
status: draft
origin: pipeline
deps: ["def-completely-integrable-hamiltonian-system"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Definition 18.10 and Theorem 18.12, pp. 110--111
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Counterexample

For $H(q,p)=(q^2+p^2)/2$ on the symplectic plane, the zero-energy fibre is
the single point $(0,0)$, not a one-torus.

## Facts & Assumptions

**Given:** The standard symplectic plane and the displayed Hamiltonian.

[F1] In one degree of freedom, complete integrability requires one integral
whose differential is independent on a dense regular locus.
[[def-completely-integrable-hamiltonian-system]].

## Verification

**Proof technique:** direct.

1.1 Here $dH=q\,dq+p\,dp$, so it is nonzero on $\mathbb R^2\setminus\{0\}$, an open dense set. Thus $H$ supplies a completely integrable one-degree-of-freedom system in the sense of [F1]. [F1, given, algebra]

2.1 But $H^{-1}(0)=\{(0,0)\}$ because it is a sum of squares, and $dH_{(0,0)}=0$. The fibre is singular and zero-dimensional, hence cannot be diffeomorphic to $S^1$. This shows why the regular-value hypothesis in the torus theorem is essential. [step 1.1, algebra] ∎
