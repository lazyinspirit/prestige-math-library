---
id: def-vector-field-and-section-along-a-smooth-curve
kind: definition
title: "Vector field and section along a smooth curve"
status: published
origin: pipeline
deps: ["lem-products-preserve-t0-t1-and-hausdorff","prop-second-countability-is-hereditary","lem-t0-t1-and-hausdorff-are-hereditary"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

Let $\pi:E\to M$ be a smooth vector bundle. Let $I\subseteq\mathbb R$ be an interval with nonempty interior and let $\gamma:I\to M$ be smooth, with smooth local extensions at any included endpoints. Give
$$\gamma^*E=\{(t,e)\in I\times E:\gamma(t)=\pi(e)\}$$
the subspace topology. For a bundle chart $\Phi:E|_U\to U\times\mathbb R^r$, writing $\Phi(e)=(\pi(e),v)$, the pulled-back chart and its inverse are
$$ (t,e)\longmapsto(t,v),\qquad (t,v)\longmapsto\bigl(t,\Phi^{-1}(\gamma(t),v)\bigr).$$
They are continuous for the subspace and product topologies, and the overlap maps are $(t,v)\mapsto(t,g_{\beta\alpha}(\gamma(t))v)$, hence smooth and fibrewise linear. Thus they directly define a smooth rank-$r$ bundle over $I$, with the stated smooth-up-to-endpoint convention. The interval $I$, as a subspace of $\mathbb R$, and the manifold $E$ are Hausdorff and second countable. Their product is Hausdorff by [[lem-products-preserve-t0-t1-and-hausdorff]], and products of their two fixed countable bases form a countable basis. Hence both properties pass to the subspace $\gamma^*E$ by [[lem-t0-t1-and-hausdorff-are-hereditary]] and [[prop-second-countability-is-hereditary]].

A **section of $E$ along $\gamma$** is a smooth section of this bundle $\gamma^*E$. Equivalently it is a smooth map $V:I\to E$ with $\pi(V(t))=\gamma(t)$. For $E=TM$ it is a **vector field along $\gamma$**. In a pulled-back frame it has the form $V(t)=\sum_jv^j(t)e_j(\gamma(t))$ with arbitrary smooth coefficients $v^j$.

Values belong to the fibre over the parameter value, even if $\gamma(t)=\gamma(u)$ for $t\ne u$. For example, for a constant curve at $p$ and $v\ne0$ in $E_p$, the section $V(t)=tv$ is allowed and cannot be $s\circ\gamma$ for an ambient section $s$. Thus an ambient extension is not part of this definition.

For a piecewise smooth curve on a compact interval, use a finite subdivision into smooth pieces (each smooth up to its endpoints). A piecewise smooth section is continuous on the whole interval and smooth on each piece. On a singleton interval it is just a fibre vector; on an empty interval it is the empty section. These conventions define sections, without attempting differentiation on a singleton.
