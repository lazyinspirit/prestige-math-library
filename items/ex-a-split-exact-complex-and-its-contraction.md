---
id: ex-a-split-exact-complex-and-its-contraction
kind: example
title: "A split exact complex and its contraction"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible, thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Example

Consider the complex of abelian groups
$$0\to\mathbb Z\xrightarrow{u}\mathbb Z\oplus\mathbb Z\xrightarrow{v}\mathbb Z\to0,$$
where
$$u(a)=(a,0),\qquad v(a,b)=b.$$
It is split exact, and a contraction is given by
$$s_0(c)=(0,c),\qquad s_1(a,b)=a,$$
with all other components zero.

## Facts & Assumptions

**Given:** The split exact three-term complex displayed above.

[L1] A compatible degreewise split exact complex is contractible ([[lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible]]).

[L2] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 The complex is exact because $\ker(v)=\{(a,0)\}$ equals $\operatorname{im}(u)$, and $u$ is injective while $v$ is surjective. The displayed formulas for $s_0$ and $s_1$ are compatible with the splitting $$\mathbb Z\oplus\mathbb Z\cong Z_1\oplus Z_0\cong\mathbb Z\oplus\mathbb Z.$$ [L2, given, algebra]

2.1 A direct calculation gives $$u s_1+s_0 v=1_{\mathbb Z\oplus\mathbb Z},\qquad s_1u=1_{\mathbb Z},\qquad vs_0=1_{\mathbb Z},$$ so the identity map is null-homotopic. Hence [L1] applies and the complex is contractible. [L1, step 1.1, algebra] ∎
