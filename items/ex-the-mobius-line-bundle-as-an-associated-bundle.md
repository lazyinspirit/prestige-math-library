---
id: ex-the-mobius-line-bundle-as-an-associated-bundle
kind: example
title: The Möbius line bundle as an associated bundle
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-principal-g-bundle-and-associated-fiber-bundle, def-associated-bundle-to-a-principal-bundle-and-representation, thm-associated-vector-bundle-is-well-defined]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Möbius Bundle Example 10.3, printed pages 251–252, and Problem 21-9, printed pages 560–561
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

For the principal $\{\pm1\}$-bundle $p:S^1\to S^1$, $p(z)=z^2$, and the
sign representation on $\mathbb R$, the associated line bundle is the Möbius
line bundle.

## Facts & Assumptions

**Given:** The right action $z\cdot\varepsilon=z\varepsilon$ of
$H=\{\pm1\}$ on $S^1$, and the representation
$\rho(\varepsilon)t=\varepsilon t$ on $\mathbb R$.

[F1] A principal bundle is locally equivariantly a product with its structure
group. [[def-principal-g-bundle-and-associated-fiber-bundle]].

[F2] For a right principal bundle and a left representation, the associated
relation is $[ph,v]=[p,\rho(h)v]$, and the quotient has its canonical smooth
vector-bundle structure.
[[def-associated-bundle-to-a-principal-bundle-and-representation]],
[[thm-associated-vector-bundle-is-well-defined]].

## Verification

**Proof technique:** identify the quotient relation and its transition sign.

1.1 Put $U_0=S^1\setminus\{-1\}$ and $U_1=S^1\setminus\{1\}$. For $-\pi<\theta<\pi$ define $s_0(e^{i\theta})=e^{i\theta/2}$, and for $0<\theta<2\pi$ define $s_1(e^{i\theta})=e^{i\theta/2}$. These are smooth and satisfy $s_j(w)^2=w$. The fibres of $p(z)=z^2$ are exactly $\{z,-z\}$, so $\tau_j:U_j\times H\to p^{-1}(U_j)$, $\tau_j(w,\varepsilon)=s_j(w)\varepsilon$, is an equivariant bijection with smooth inverse $z\mapsto(z^2,s_j(z^2)^{-1}z)$. Its second component takes values in the discrete zero-dimensional Lie group $H$, hence is locally constant and smooth. Thus the two $\tau_j$ are principal charts and $p$ is a smooth principal $H$-bundle in the sense of [F1]. [F1, algebra, construct]

2.1 The associated relation from [F2] is $(z,t)\sim(-z,-t)$, so $E=(S^1\times\mathbb R)/\sim$ is a smooth real line bundle over the base circle, with $[z,t]\mapsto z^2$. On the upper component of $U_0\cap U_1$, the two sections in step 1.1 agree. On the lower component, expressing the same angle in the second interval adds $2\pi$, so $s_1=-s_0$ and the associated fibre coordinate changes by $\rho(-1)=-1$. Thus its transition function is $+1$ on one overlap component and $-1$ on the other. [F2, step 1.1, algebra]

3.1 Writing $z=e^{\pi ix}$ identifies $E$ with $$([0,1]\times\mathbb R)/((0,t)\sim(1,-t)),$$ because the only two representatives in this half-circle fundamental domain are $(0,t)$ and $(1,-t)$. This is exactly the standard half-twisted-strip Möbius line bundle, and step 2.1 also records its nontrivial sign transition rather than merely the topology of the total space. The zero section and zero fibre vectors are fixed; the two-chart construction uses no choice principle. [step 1.1, step 2.1] ∎
