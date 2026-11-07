---
id: thm-faltings-semisimplicity-of-tate-module
kind: theorem
title: "Semisimplicity of the rational Tate module of an abelian variety over a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-arith-tate-module-and-inertia
  - lem-faltings-galois-invariant-subspace-is-direct-summand
  - thm-abelian-variety-dual-and-polarization
  - lem-finite-index-restriction-semisimplicity-descends-by-coset-averaging
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” Satz 3"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed p. 360, semisimplicity of the Tate-module representation."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. Let $A/K$ be an abelian variety over a number field and let $\ell$ be a prime. The rational Tate module $V_\ell(A)$ is semisimple as a continuous representation of $G_K=\operatorname{Gal}(\overline K/K)$; equivalently, every $G_K$-stable subspace has a $G_K$-stable complement.

## Statement references

[[def-arith-tate-module-and-inertia]]

[[lem-faltings-galois-invariant-subspace-is-direct-summand]]

[[thm-abelian-variety-dual-and-polarization]]

[Faltings 1983, §5, Satz 3](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Faltings–Wüstholz, *Rational Points*, Chapter IV, §3](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC and DC; a number field $K$, an abelian variety $A/K$, a prime $\ell$, and its rational Tate module.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-arith-tate-module-and-inertia]]: the Tate module is a finite-dimensional continuous $\mathbb Q_\ell$-representation of $G_K$.

[F2] [[lem-faltings-galois-invariant-subspace-is-direct-summand]]: under its semistable and finite-quotient hypotheses, each invariant subspace is the image of an endomorphism idempotent.

## Proof status

For an arbitrary $A/K$, the geometric route still requires a finite extension $L/K$ with semistable reduction and the invariant-subspace/idempotent lemma establishing semisimplicity on $G_L$. Once those actual inputs are established, [[lem-finite-index-restriction-semisimplicity-descends-by-coset-averaging]] supplies the complete finite-coset averaging argument: every $G_K$-stable subspace has a $G_L$-equivariant projection, whose average over $G_K/G_L$ is a continuous $G_K$-equivariant projection. Its denominator is invertible in $\mathbb Q_\ell$. No normality of $G_L$ is needed. The semistable-reduction theorem and the key idempotent lemma remain held, so the full original theorem remains held.

The remaining proof prerequisites are the actual semistable-reduction extension and the invariant-subspace/idempotent construction. The finite-index descent itself is now supplied locally; it does not supply either geometric prerequisite.
