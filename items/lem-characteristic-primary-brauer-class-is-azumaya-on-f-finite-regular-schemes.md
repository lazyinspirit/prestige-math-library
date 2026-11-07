---
id: lem-characteristic-primary-brauer-class-is-azumaya-on-f-finite-regular-schemes
kind: lemma
title: "Characteristic-primary Brauer classes are Azumaya on F-finite regular schemes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-cohomological-brauer-group-of-a-variety
  - lem-f-finite-regular-scheme-has-finite-flat-frobenius
  - lem-absolute-frobenius-multiplies-etale-multiplicative-cohomology
  - lem-finite-flat-splitting-cohomological-brauer-class-is-azumaya
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the Frobenius and finite-flat splitting suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Raymond T. Hoobler, A cohomological interpretation of Brauer groups of rings"
      url: "https://msp.org/pjm/1980/86-1/pjm-v86-n1-p05-s.pdf"
      locator: "p. 90, the characteristic-primary Frobenius splitting argument; the F-finite regular-scheme assembly is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $k$ be an F-finite field of characteristic $p>0$, and let $X$ be a connected regular finite-type $k$-scheme. Every $p$-primary torsion class in $H^2_{\mathrm{et}}(X,\mathbb G_m)$ is the cohomological class of an Azumaya algebra on $X$. This includes regular varieties over imperfect global function fields. No assertion is made here about torsion of order prime to $p$.

## Facts & Assumptions

**Given:** The F-finite field, connected regular scheme and characteristic-primary torsion class in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Absolute Frobenius on a regular finite-type scheme over an F-finite field is finite locally free. [[lem-f-finite-regular-scheme-has-finite-flat-frobenius]]

[F2] Absolute Frobenius acts as multiplication by $p$ on étale $\mathbb G_m$ cohomology. [[lem-absolute-frobenius-multiplies-etale-multiplicative-cohomology]]

[F3] An actual cohomology class that becomes zero on a finite locally free surjection of positive constant degree is represented by an Azumaya algebra. [[lem-finite-flat-splitting-cohomological-brauer-class-is-azumaya]]

[F4] The cohomological Brauer group is the torsion subgroup of étale $H^2(\mathbb G_m)$. [[def-cohomological-brauer-group-of-a-variety]]

## Proof

**Proof technique:** split the characteristic-primary class by a finite-flat Frobenius iterate.

1.1 Choose $e\ge0$ with $p^e\alpha=0$. By [F1], the iterate $F_X^e:X\to X$ is finite locally free; its underlying topological map is a universal homeomorphism and is therefore surjective. Its finite locally free rank is positive and locally constant, hence constant because $X$ is connected. [A1, F1, given, choose, algebra]

2.1 By [F2], the pullback of $\alpha$ under this iterate is $p^e\alpha=0$. The finite-flat splitting theorem [F3] therefore gives an Azumaya algebra whose cohomological class is exactly $\alpha$. This uses the actual cohomology class and makes no ordinary Čech-representation assumption. [F2, F3, step 1.1, algebra]

3.1 Every $p$-primary torsion class has such an exponent $e$, so steps 1.1–2.1 apply to the entire characteristic-primary subgroup. The zero class is covered by $e=0$. The base field of every global function field is F-finite by [F1], including when it is imperfect; [F4] identifies the result with the corresponding part of the cohomological Brauer group. Prime-to-$p$ classes are not asserted. [F1, F4, step 1.1, step 2.1, algebra] ∎
