---
id: ex-first-cohomology-with-trivial-coefficients-is-the-dual-abelianization
kind: example
title: First cohomology with trivial coefficients
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations, def-quotient-lie-algebra]
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
    - title: "Weibel, An Introduction to Homological Algebra, Lie algebra cohomology"
      url: https://www.math.ias.edu/~weibel/HAbook/HA.pdf
      locator: "§7.7, low-degree interpretation immediately after Definition 7.7.2, printed p. 224"
---

## Example

For the trivial $\mathfrak g$-module $k$ there is a natural isomorphism

$$H^1(\mathfrak g,k)\cong\operatorname{Hom}_k(\mathfrak g/[\mathfrak g,\mathfrak g],k)=(\mathfrak g/[\mathfrak g,\mathfrak g])^*.$$

No finite-dimensionality assumption on $\mathfrak g$ is needed.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ over $k$, with $k$ carrying the trivial action.

[L1] First cohomology is derivations modulo inner derivations ([[prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations]]).

[L2] The quotient $\mathfrak g/I$ consists of cosets, and its canonical projection $q:\mathfrak g\to\mathfrak g/I$ is linear ([[def-quotient-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 A linear map $\lambda:\mathfrak g\to k$ is a derivation precisely when $\lambda([x,y])=x\cdot\lambda(y)-y\cdot\lambda(x)=0$. Thus $Z^1(\mathfrak g,k)$ is exactly the space of linear forms vanishing on $[\mathfrak g,\mathfrak g]$. [L1, given, algebra]

1.2 Every inner derivation into the trivial module has the form $x\mapsto x\cdot a=0$, so $B^1(\mathfrak g,k)=0$ and $H^1=Z^1$. [L1, algebra]

2.1 Put $I=[\mathfrak g,\mathfrak g]$. If $\lambda$ is in the space from step 1.1, define $\bar\lambda(x+I)=\lambda(x)$. This is well-defined because $x+I=y+I$ implies $x-y\in I$ and hence $\lambda(x-y)=0$; it is plainly linear and satisfies $\lambda=\bar\lambda\circ q$. Conversely every linear form on $\mathfrak g/I$ pulls back along the linear map $q$ from [L2] to a form vanishing on $I$. These constructions are linear and inverse, proving the displayed natural isomorphism together with steps 1.1–1.2. If the abelianization is zero, both sides are zero; no basis or choice is used. [L2, step 1.1, step 1.2, algebra] ∎