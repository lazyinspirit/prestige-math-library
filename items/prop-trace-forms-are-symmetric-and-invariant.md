---
id: prop-trace-forms-are-symmetric-and-invariant
kind: proposition
title: Trace forms are symmetric and invariant
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-trace-form-of-a-finite-dimensional-representation, thm-trace-of-ab-equals-trace-of-ba]
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
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Lemma 6.1"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§6.1, Lemma 6.1, printed p. 105"
---

## Statement

For every finite-dimensional representation $\rho:\mathfrak g\to
\mathfrak{gl}(V)$, the trace form is bilinear and symmetric, and it is
invariant in the sense that

$$B_\rho([z,x],y)+B_\rho(x,[z,y])=0.$$

Consequently the Killing form has all three properties.

## Facts & Assumptions

**Given:** A representation $\rho:\mathfrak g\to\mathfrak{gl}(V)$ with
$V$ finite-dimensional and elements $x,y,z\in\mathfrak g$.

[L1] The trace form is $B_\rho(x,y)=\operatorname{tr}(\rho(x)\rho(y))$
([[def-trace-form-of-a-finite-dimensional-representation]]).

[L2] Finite-dimensional endomorphisms satisfy
$\operatorname{tr}(AB)=\operatorname{tr}(BA)$
([[thm-trace-of-ab-equals-trace-of-ba]]).

## Proof

**Proof technique:** direct trace calculation.

1.1 Linearity of $\rho$, composition, and trace makes $B_\rho$ bilinear. By [L2], $B_\rho(x,y)=\operatorname{tr}(\rho(x)\rho(y))= \operatorname{tr}(\rho(y)\rho(x))=B_\rho(y,x)$, so it is symmetric. [L1, L2, algebra]

1.2 Put $X=\rho(x)$, $Y=\rho(y)$, and $Z=\rho(z)$. Since $\rho$ preserves brackets, the left side of the invariance identity is $\operatorname{tr}((ZX-XZ)Y)+\operatorname{tr}(X(ZY-YZ))$. After expansion, the middle terms cancel directly and [L2] gives $\operatorname{tr}(ZXY)=\operatorname{tr}(XYZ)$, so the remaining terms cancel as well. [L1, L2, algebra]

2.1 The Killing form is the trace form for $\rho=\operatorname{ad}$, so steps 1.1–1.2 apply verbatim. The zero representation and zero-dimensional space cause no exception: every displayed trace is then zero. [L1, step 1.1, 1.2] ∎