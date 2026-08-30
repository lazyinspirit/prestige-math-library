---
id: ex-the-hom-complex-of-two-two-term-complexes
kind: example
title: "The Hom complex of two two-term complexes"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-hom-complex-of-chain-complexes, prop-zero-cocycles-in-the-hom-complex-are-chain-maps, thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Example

Let $C_\bullet=D_\bullet$ be the two-term identity complex
$$0\to\mathbb Z\xrightarrow{1_{\mathbb Z}}\mathbb Z\to0.$$
Then
$$\underline{\operatorname{Hom}}(C,D)_1\cong\mathbb Z,\qquad \underline{\operatorname{Hom}}(C,D)_0\cong\mathbb Z^2,\qquad \underline{\operatorname{Hom}}(C,D)_{-1}\cong\mathbb Z,$$
with differentials
$$\partial_1(m)=(m,m),\qquad \partial_0(a,b)=b-a.$$

## Facts & Assumptions

**Given:** The two-term identity complex $C_\bullet=D_\bullet$ in $\mathbf{Ab}$.

[L1] The Hom complex in degree $r$ consists of families $u_n:C_n\to D_{n+r}$ with differential $$ (\partial u)_n=d_{n+r}u_n-(-1)^r u_{n-1}d_n $$ ([[def-hom-complex-of-chain-complexes]]).

[L2] Degree-$0$ cycles in the Hom complex are exactly chain maps ([[prop-zero-cocycles-in-the-hom-complex-are-chain-maps]]).

[L3] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 A degree-$1$ map has only one possible nonzero component $u_0:\mathbb Z\to\mathbb Z$, so it is determined by an integer $m$. A degree-$0$ map has components $u_1,u_0$, hence is determined by $(a,b)\in\mathbb Z^2$, and a degree $-1$ map is determined by $u_1:\mathbb Z\to\mathbb Z$. [L1, L3, given, algebra]

2.1 Substituting these components into [L1] gives $$\partial_1(m)=(m,m),\qquad \partial_0(a,b)=b-a.$$ Therefore $\ker(\partial_0)=\{(a,a)\}$, exactly the degree-$0$ chain maps from [L2]. [L1, L2, step 1.1, algebra] ∎
