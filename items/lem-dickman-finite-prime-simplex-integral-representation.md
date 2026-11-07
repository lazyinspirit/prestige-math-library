---
dependency_level: 2
id: lem-dickman-finite-prime-simplex-integral-representation
kind: lemma
title: Finite simplex-integral representation of the Dickman function
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-dickman-method-of-steps-existence-uniqueness-and-positivity
- thm-riemann-fubini-on-product-rectangles
- thm-newton-leibniz-with-interior-derivative
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Hildebrand and Tenenbaum, Integers without large prime factors; direct local reconstruction of bounded-parameter and transform inputs
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
---

## Statement

For $k\ge1$ and real $u$, define

$$J_k(u)=\int_{\substack{t_1,\ldots,t_k\ge1\\t_1+\cdots+t_k\le u}}\frac{dt_1\cdots dt_k}{t_1\cdots t_k},$$

with value zero when the domain is empty. Put $J_0(u)=1$ for $u\ge0$ and $J_0(u)=0$ for $u<0$. Then, for every $u\ge0$,

$$\rho(u)=\sum_{k=0}^{\lfloor u\rfloor}\frac{(-1)^k}{k!}J_k(u).$$

For $k\ge1$ and $u>k$, one has $uJ_k'(u)=kJ_{k-1}(u-1)$. In particular $0<\rho(u)\le1$ for $u\ge0$, and $\rho$ is strictly decreasing on $(1,\infty)$.

## Statement references

[[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]]

[[thm-riemann-fubini-on-product-rectangles]]

[[thm-newton-leibniz-with-interior-derivative]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local result [[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]] supplies its stated facts under its stated hypotheses.

[F2] The local result [[thm-riemann-fubini-on-product-rectangles]] supplies its stated facts under its stated hypotheses.

[F3] The local result [[thm-newton-leibniz-with-interior-derivative]] supplies its stated facts under its stated hypotheses.

## Proof

1.1 All integrals can be evaluated on a bounded box with the simplex indicator inserted. The possible discontinuities lie on finitely many hyperplanes. A grid of mesh $\eta$ covers these hyperplanes by boxes of total volume $O_{k,U}(\eta)$ on any fixed bounded parameter range $u\le U$, and the integrands are bounded because $t_i\ge1$. Thus upper and lower Riemann sums have the same limit, and finite rectangular Fubini and affine substitutions apply by deleting those boundary boxes and passing to the limit. The empty domain gives $J_k(u)=0$ for $u<k$, and $0\le J_k(u)\le(u-k)^k/k!$ for $u\ge k$, by the volume of the translated simplex. [given, F1, F2, F3, algebra]

2.1 For $u>k$, integrating the last variable first gives $J_k(u)=\int_{t_i\ge1,\ S\le u-1}\log(u-S)\,dt_1\cdots dt_{k-1}/(t_1\cdots t_{k-1})$, where $S=t_1+\cdots+t_{k-1}$. Differentiation gives the same integral with $\log(u-S)$ replaced by $1/(u-S)$. To justify it directly, away from the moving boundary the difference quotients converge uniformly; the newly added or removed sliver has volume $O_{k,U}(|h|)$ and logarithm $O(|h|)$, so contributes $O_{k,U}(h^2)$ before division by $h$. This includes $k=1$, when $J_1(u)=\log u$. [given, F1, F2, F3, step 1.1, algebra]

3.1 On the boundary $t_1+\cdots+t_k=u$, write $u/(t_1\cdots t_k)=\sum_{i=1}^k1/\prod_{j\ne i}t_j$. In the derivative integral from step 2.1 take $t_k=u-S$. Each of the $k$ resulting integrals equals $J_{k-1}(u-1)$: the term omitting $t_k$ is that integral directly, and exchanging $t_i$ with $t_k$ is an affine involution of the parameter simplex with Jacobian of absolute value one. Hence $uJ_k'(u)=kJ_{k-1}(u-1)$. At the joining point $u=k\ge2$, the bound in step 1.1 gives both derivative limits zero. Thus these identities match continuously at every join relevant for $u>1$. [given, F1, F2, F3, step 2.1, algebra]

4.1 Let $R(u)=\sum_{k=0}^{\lfloor u\rfloor}(-1)^kJ_k(u)/k!$. Locally only finitely many summands occur. The zero values at joining points make $R$ continuous, $R=1$ on $[0,1]$, and step 3.1 gives $uR'(u)=-R(u-1)$ for every $u>1$. Integrating this differential equation on each unit interval gives the method-of-steps recurrence. Uniqueness in [F1] identifies $R=\rho$. Positivity is part of [F1]; its delay equation then gives $\rho'(u)=-\rho(u-1)/u<0$ for $u>1$, and the initial value yields the stated upper bound. [given, F1, F2, F3, step 3.1, algebra] ∎
