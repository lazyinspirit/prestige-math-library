---
id: fs-several-variable-identity-theorem-from-an-accumulation-point
kind: false-statement
title: "A holomorphic function on a domain in $\\mathbb{C}^2$ vanishing on a set with an accumulation point vanishes identically"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-identity-theorem-in-several-complex-variables, cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded, thm-identity-theorem-holomorphic-functions, thm-isolated-zeros-holomorphic-function, def-holomorphic-function-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 2"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
pipeline_run: null
---

## Statement

**False claim:** if $f$ is holomorphic on a nonempty connected open subset of
$\mathbb C^2$ and the zero set of $f$ has an accumulation point in the domain,
then $f$ is identically zero.

This is exactly the one-variable identity theorem carried over without change.
The several-variable page proves only the honest open-set form
([[thm-identity-theorem-in-several-complex-variables]]).

## Facts & Assumptions

**Given:** The false claim above and the function $f(z_0,z_1)=z_0$ on $\mathbb C^2$.

[L1] In one complex variable, equality on a set with an accumulation point forces equality everywhere ([[thm-identity-theorem-holomorphic-functions]]).

[L2] In one complex variable, a nonzero holomorphic function has isolated zeros ([[thm-isolated-zeros-holomorphic-function]]).

[L3] The function $f(z_0,z_1)=z_0$ is a nonzero holomorphic function on $\mathbb C^2$ whose zero set is the hyperplane $\{0\}\times\mathbb C$, hence is unbounded and has no isolated points ([[cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded]]).

## Refutation

**Proof technique:** direct.

1.1 The false claim is the one-variable identity theorem [L1] repeated verbatim in two complex variables. [L1]

1.2 By [L3], the function $f(z_0,z_1)=z_0$ is holomorphic and not identically zero, while every point of its zero set $\{0\}\times\mathbb C$ is an accumulation point of that zero set. So the hypothesis of the false claim holds for this $f$. [L3]

2.1 Yet the conclusion fails, since $f(1,0)=1\ne0$. What breaks from the one-variable proof is exactly [L2]: in one variable a nonzero holomorphic function has isolated zeros, whereas [L3] shows that in several variables a nonzero holomorphic function can vanish on a whole hyperplane. Therefore the false claim is false. [step 1.2, L2, L3] ∎
