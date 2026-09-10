---
id: "fs-the-riemannian-volume-form-exists-on-every-riemannian-manifold"
kind: "false-statement"
title: "The riemannian volume form exists on every riemannian manifold"
deps: ["def-riemannian-volume-form-on-an-oriented-manifold", "thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every Riemannian manifold admits an ordinary nowhere-vanishing Riemannian volume form.

## Facts & Assumptions

**Given:** Let $M=\mathbb R^2/\sim$, where $(t,s)\sim(t+m,(-1)^m s)$ for $m\in\mathbb Z$; let $q$ be the quotient map.

[F1] [[def-riemannian-volume-form-on-an-oriented-manifold]]: On an oriented Riemannian $n$-manifold, the **Riemannian volume form** is $\operatorname{vol}_g=\sqrt{\det G_x}\,dx^1\wedge\cdots\wedge dx^n$ in positively oriented charts for $n\ge1$. For $n=0$ it is the supplied orientation sign $\varepsilon(p)\in\{1,-1\}$ at each point. def-oriented-smooth-manifold-and-oriented-chart supplies the orientation. On positive-chart overlaps the Jacobian determinant is positive, so the density calculation in lem-the-riemannian-volume-density-is-coordinate-independent is also the top-form transformation law. Thus the formula glues, and $|\operatorname{vol}_g|=\mu_g$. Reversing orientation negates the form but leaves the density unchanged, also in dimension zero.

## Refutation

**Proof technique:** direct.

1.1 Write $T_m(t,s)=(t+m,(-1)^m s)$. Saturations of open sets are unions of their open translates, so $q$ is open. On any open rectangular box of $t$-width less than $1$, $q$ is injective and is a homeomorphism onto its open image. The transition maps on overlap components are restrictions of some $T_m$, hence are smooth with invertible diagonal derivative $(1,(-1)^m)$. [given]

2.1 The quotient is Hausdorff: for distinct orbits choose representatives $z,w$. Only finitely many integers $m$ can give $\|z-T_mw\|\le1$, by the first coordinate. None gives zero. Thus the distances from $z$ to the orbit of $w$ have a positive lower bound $\delta$ (take the minimum of $1$ and those finitely many positive distances). Since all $T_m$ are Euclidean isometries, the saturations of radius-$\delta/3$ balls around $z,w$ are disjoint. Their quotient images separate the orbits. Images of rational boxes form a countable basis because $q$ is open. The charts in step 1.1 therefore make $M$ a smooth two-dimensional manifold. [step 1.1]

3.1 Each $T_m$ preserves $dt^2+ds^2$. These coordinate metrics consequently agree on overlaps and define a smooth positive-definite metric on $M$. The positive density $|dt\,ds|$ also agrees, since the absolute transition determinant is $1$. [step 1.1, step 2.1]

4.1 If $\omega$ were a nowhere-vanishing ordinary two-form on $M$, write $q^*\omega=f(t,s)\,dt\wedge ds$. The local diffeomorphism property implies $f$ is smooth and never zero. Since $qT_1=q$, pullback invariance gives $f(t+1,-s)=-f(t,s)$. In particular the nonzero real numbers $f(0,0)$ and $f(1,0)$ have opposite signs. Continuity on the segment $\{(t,0):0\le t\le1\}$ forces a zero by the intermediate value theorem, a contradiction. A Riemannian volume form would be such a nowhere-vanishing top form. Thus this metric has a global density but no ordinary volume form. [F1, step 2.1, step 3.1] ∎

## Source locator

Lee, pp. 389–391, orientations and nonvanishing top forms, and pp. 422–423, Riemannian volume. The quotient atlas, metric descent, and sign obstruction are proved here without an orientability existence theorem or a choice assumption.
