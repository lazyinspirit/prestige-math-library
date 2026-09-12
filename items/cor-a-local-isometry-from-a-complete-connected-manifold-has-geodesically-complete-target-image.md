---
id: "cor-a-local-isometry-from-a-complete-connected-manifold-has-geodesically-complete-target-image"
kind: "corollary"
title: "A local isometry from a complete connected manifold has geodesically complete target image"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice","rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow","def-riemannian-isometry-and-local-isometry","def-geodesically-complete-riemannian-manifold","thm-hopf-rinow","thm-existence-uniqueness-and-smooth-dependence-of-geodesics","lem-local-isometries-send-geodesics-to-geodesics"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Theorem 20.1.1 and geodesic-lifting step, pp.147--149
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "lift initial data"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let
$F:(M,g)\to(N,h)$ be a local Riemannian isometry between boundaryless
Riemannian manifolds. Suppose $M$ is connected and complete for its Riemannian
distance, and put $O=F(M)$.

Then $O$ is open in $N$ and, with the restricted Riemannian metric, is
geodesically complete. More strongly, for every $q\in O$ and
$w\in T_qN$, the maximal $N$-geodesic with initial data $(q,w)$ is defined for
all real time and its entire image lies in $O$.

No injectivity, surjectivity onto $N$, or covering-map conclusion is asserted.

## Facts & Assumptions

**Given:** The local isometry and completeness hypotheses in the statement.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$, and [[rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow]] fixes the boundaryless convention.

[F1] [[def-riemannian-isometry-and-local-isometry]] says that a local Riemannian isometry is a smooth local diffeomorphism satisfying $F^*h=g$; in particular every $dF_p$ is a linear isomorphism and every $p$ has a neighbourhood mapped diffeomorphically onto an open subset of $N$.

[F2] Under [A1], [[thm-hopf-rinow]] makes a nonempty connected boundaryless Riemannian manifold that is complete for its Riemannian distance geodesically complete. [[def-geodesically-complete-riemannian-manifold]] says this means that every maximal geodesic has domain $\mathbb R$.

[F3] Under [A1], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] supplies the unique maximal geodesic for each initial tangent vector and identifies every other geodesic with the same initial data as its restriction.

[F4] [[lem-local-isometries-send-geodesics-to-geodesics]] says that a local Riemannian isometry sends affinely parametrized geodesics to affinely parametrized geodesics and intertwines their velocities.

## Proof

**Proof technique:** lift initial data.

1.1 For $q\in O$, choose $p\in M$ with $F(p)=q$. By [F1], some neighbourhood of $p$ maps diffeomorphically onto an open neighbourhood $V$ of $q$ in $N$, and $V\subseteq F(M)=O$. Thus every point of $O$ is interior and $O$ is open. The choice of $p$ instantiates one existential statement for one fixed $q$. [F1, given]

2.1 If $O=\varnothing$, it has no initial tangent vectors and is geodesically complete vacuously by [F2]; the stronger assertion is vacuous as well. Suppose $q\in O$ and fix $w\in T_qN$. Choose one $p\in M$ with $F(p)=q$. Since $O$ is open, $T_qO=T_qN$, and [F1] gives the unique vector $$v=(dF_p)^{-1}w\in T_pM.$$ [F1, F2, step 1.1]

3.1 The point $p$ shows that $M$ is nonempty, so [F2] applies to the assumed metric completeness of $M$. By [F3], the maximal source geodesic $\eta:\mathbb R\to M$ with initial data $(p,v)$ is therefore defined for every real time. [F2, F3, step 2.1]

4.1 Regard $F$ first as a map $M\to O$ with the restricted target metric. It is still a local Riemannian isometry by [F1], so [F4] makes $\sigma=F\circ\eta:\mathbb R\to O$ a geodesic. It has $\sigma(0)=q$ and $\sigma'(0)=dF_p(v)=w$. By [F3], the maximal geodesic in $O$ with data $(q,w)$ contains this global geodesic and hence has domain $\mathbb R$. Since $(q,w)$ was arbitrary, $O$ is geodesically complete. [F1, F3, F4, step 3.1]

5.1 Regard the same $\sigma$ as an $N$-valued geodesic. It has the same initial data $(q,w)$, so uniqueness in [F3] identifies it with the maximal $N$-geodesic on that geodesic's domain. Because $\sigma$ itself is defined on all of $\mathbb R$, maximality makes the $N$-geodesic global; its value at every time is $F(\eta(t))\in O$. This proves the stronger assertion. [F3, F4, step 4.1]

6.1 The empty case was settled in step 2.1. In dimension zero, every tangent vector is zero and the relevant geodesics are constant; dimension one is unchanged. The zero vector and both positive and negative infinite-time directions are included because $\eta$ has domain all of $\mathbb R$. The statement is one-way and does not infer a covering map. Assumption [A1] is used through [F2] and [F3]; choosing one preimage after fixing $(q,w)$ and applying one inverse linear map require no family-wide choice. [A1, F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎

## Source locator

Datar, Theorem 20.1.1 and its geodesic-lifting step, pp.147--149, prove the stronger covering and target-completeness theorem for a complete source local isometry. The present corollary retains only the initial-data lifting and geodesic-complete-image consequences.
