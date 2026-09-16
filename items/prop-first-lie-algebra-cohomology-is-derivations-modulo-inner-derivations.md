---
id: prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations
kind: proposition
title: First cohomology is derivations modulo inner derivations
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lie-algebra-cohomology, def-chevalley-eilenberg-differential, def-derivation-of-a-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Weibel, Lie Algebra Homology and Cohomology, §7.7"
      url: https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf
      locator: "§7.7, low-degree calculation, printed pp. 239–241"
---

## Statement

A linear map $\delta:\mathfrak g\to M$ is a $1$-cocycle exactly when

$$\delta([x,y])=x\delta(y)-y\delta(x).$$

The $1$-coboundaries are $\delta_m(x)=xm$. Hence
$H^1(\mathfrak g,M)=\operatorname{Der}(\mathfrak g,M)/
\operatorname{Inn}(\mathfrak g,M)$; for the adjoint module this is
$\operatorname{Der}(\mathfrak g)/\operatorname{ad}(\mathfrak g)$.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ and a module $M$.

[L1] The CE differential has the declared low-degree formula ([[def-chevalley-eilenberg-differential]]).

[L2] Cohomology is cocycles modulo coboundaries ([[def-lie-algebra-cohomology]]).

[L3] Ordinary derivations obey the Leibniz rule for the adjoint module ([[def-derivation-of-a-lie-algebra]]).

## Proof

**Proof technique:** compute in degrees zero and one.

1.1 For a $1$-cochain $\delta$, [L1] gives $(d\delta)(x,y)=x\delta(y)-y\delta(x)-\delta([x,y])$. Thus its kernel is precisely the space of module-valued derivations in the displayed sense. [L1]

1.2 For $m\in C^0=M$, [L1] gives $(dm)(x)=xm$, so the image consists exactly of the inner module-valued derivations. Taking the quotient in [L2] proves the first identification. [L1, L2]

2.1 If $M=\mathfrak g$ with the adjoint action, step 1.1 becomes $\delta([x,y])=[\delta x,y]+[x,\delta y]$, the derivation law in [L3], while step 1.2 gives $x\mapsto[x,m]=\operatorname{ad}_{-m}(x)$; its span is the same inner-derivation space. Zero algebras and zero modules satisfy the same formulas. [L3, step 1.1, 1.2] ∎