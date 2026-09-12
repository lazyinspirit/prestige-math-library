---
id: "thm-existence-uniqueness-and-smooth-dependence-of-geodesics"
kind: "theorem"
title: "Existence uniqueness and smooth dependence of geodesics"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm","thm-unique-maximal-integral-curve-through-each-point","thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves","thm-fundamental-theorem-on-flows","def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Theorem 15.2.1 and Remark 15.2.4, pp.115–117
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. For every $(p,v)\in TM$ there is a unique maximal geodesic $\gamma_{p,v}:I_{p,v}\to M$ with $\gamma_{p,v}(0)=p$ and $\gamma'_{p,v}(0)=v$. Each $I_{p,v}$ is an open interval containing zero, the domain
$$\mathcal G=\{(t,p,v):t\in I_{p,v}\}\subseteq\mathbb R\times TM$$
is open, and $(t,p,v)\mapsto\gamma_{p,v}(t)$ is smooth on $\mathcal G$.

## Facts & Assumptions

**Given:** An initial tangent vector $v\in T_pM$.

[F1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$, and [[lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm]] supplies a smooth spray on the resulting smooth manifold $TM$, with integral curves exactly the geodesic velocity lifts.

[F2] [[thm-unique-maximal-integral-curve-through-each-point]] gives a unique maximal integral curve through every point of a smooth manifold, while [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]] supplies its local initial-value uniqueness and smooth dependence.

[F3] [[thm-fundamental-theorem-on-flows]] makes the union of those maximal integral-curve domains open and their evaluation map smooth.

## Proof

1.1 Apply [F2] to the spray at the point $v\in TM$. It gives a unique maximal integral curve $Z_v:I_v\to TM$ on an open interval containing zero. By [F1], $Z_v$ is the velocity lift of $\gamma_{p,v}:=\pi\circ Z_v$. Since $Z_v(0)=v$, its base point is $p$, and the base component of the spray equation gives $\gamma'_{p,v}(0)=v$. [F1, F2, given]

2.1 If a geodesic with these initial data existed on a larger interval, [F1] would make its velocity lift an integral curve of the spray extending $Z_v$, contrary to maximality. The same lift argument and integral-curve uniqueness prove uniqueness on every common interval. Thus $I_{p,v}=I_v$ and the geodesic is uniquely maximal. [F1, F2, step 1.1]

3.1 By [F3], $\{(t,v):t\in I_v\}$ is open in $\mathbb R\times TM$ and $(t,v)\mapsto Z_v(t)$ is smooth. This is exactly $\mathcal G$ after writing $v$ together with its determined base point $p$. In induced tangent-bundle coordinates the projection $\pi(x,w)=x$ is smooth, so composing gives the asserted smooth geodesic evaluation. [F1, F3, step 1.1, step 2.1]

4.1 For $v=0$, [F1] makes $Z_v$ stationary and the maximal geodesic is the constant curve on all of $\mathbb R$. In dimension zero every initial vector is zero; for empty $M$ there are no initial vectors. Each maximal domain is open, so it has no included finite endpoints. All conclusions concern one supplied initial vector at a time. The only choice principle is the declared $\mathrm{AC}_\omega$, inherited exactly from the smooth-manifold structure on $TM$; [F2]–[F3] then apply without another family selection. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎
