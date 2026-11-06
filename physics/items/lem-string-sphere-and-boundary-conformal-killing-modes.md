---
id: lem-string-sphere-and-boundary-conformal-killing-modes
kind: lemma
title: Sphere and boundary conformal-Killing modes for tree gauge fixing
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 0
domain: mathematics
deps:
  - cor-cauchy-inequalities
dependency_roles:
  cor-cauchy-inequalities: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, String Theory, Cambridge Part III notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string.pdf"
      locator: "§4.3.2, printed pp. 72–73, sphere Möbius group; §5.4.1–5.4.2, printed pp. 102–112, sphere and upper-half-plane tree gauge fixing."
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "§5.1, printed pp. 99–105, disk and sphere residual conformal transformations in tree four-point amplitudes."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\mathbb{CP}^1$ have affine coordinate $z$ and coordinate $w=1/z$ near infinity. Every global holomorphic vector field on $\mathbb{CP}^1$ is $(a+bz+cz^2)\partial_z$, so the sphere conformal-Killing space has complex dimension $3$. For the boundary tree gauge, adopt the upper-half-plane model and residual group $PSL(2,\mathbb R)$ of real fractional-linear maps $(az+b)/(cz+d)$ with $ad-bc=1$, modulo the common sign; its real Lie algebra is three-dimensional. The group statement fixes the gauge convention and does not assert a global gauge slice on moduli.

## Facts & Assumptions

**Given:** The two-chart definition of $\mathbb{CP}^1$, the coordinate transition $w=1/z$, and the stated upper-half-plane boundary gauge convention.

[F1] [[cor-cauchy-inequalities]]: for an entire function $f$ bounded by $M_R$ on the circle of radius $R$, $|f^{(n)}(0)|\le n!M_R/R^n$.

## Proof

1.1 Write a global holomorphic vector field in the affine chart as $f(z)\partial_z$, with $f$ entire. Since $\partial_z=-w^2\partial_w$, regularity at $w=0$ means $w^2f(1/w)$ is holomorphic near zero, hence $f(z)=O(|z|^2)$ at infinity. Thus for sufficiently large $R$, $\sup_{|z|=R}|f(z)|\le C R^2$ for a constant $C$. By [F1], for every $n\ge3$, $|f^{(n)}(0)|\le n!C R^{2-n}$; letting $R\to\infty$ gives $f^{(n)}(0)=0$. The entire Taylor series therefore has degree at most two. Conversely, if $f(z)=a+bz+cz^2$, then $-w^2f(1/w)=-(aw^2+bw+c)$ is holomorphic at $w=0$, so each such polynomial defines a global vector field. The three monomials are linearly independent, proving dimension three. [given, F1, algebra]

2.1 An infinitesimal real matrix $M(t)=I+t\begin{pmatrix}\alpha&\beta\\\gamma&-\alpha\end{pmatrix}+O(t^2)$ acts by $z\mapsto ((1+t\alpha)z+t\beta)/(t\gamma z+1-t\alpha)+O(t^2)$. Differentiating at $t=0$ gives $\beta+2\alpha z-\gamma z^2$. The real parameters $\alpha,\beta,\gamma$ are independent, so the adopted boundary group has real Lie algebra spanned by the same three polynomial vector fields over $\mathbb R$ and dimension three. [given, step 1.1, algebra] ∎

## Remarks

These are the finite-dimensional residual modes used to gauge-fix three tree-level punctures. The proof is local and finite-dimensional; it makes no statement about choosing a global gauge slice over the full moduli space.
