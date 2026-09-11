---
id: def-pullback-connection
kind: definition
title: "Pullback connection"
status: published
origin: pipeline
deps: ["thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law","prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure","prop-second-countability-is-hereditary","lem-t0-t1-and-hausdorff-are-hereditary"]
justified_by: [thm-pullback-connection-is-well-defined-and-functorial]
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

Let $f:N\to M$ be smooth and let $\nabla$ be a connection on $E\to M$. Give
$$f^*E=\{(q,e)\in N\times E:f(q)=\pi(e)\}$$
the subspace topology. If $\Phi:E|_U\to U\times\mathbb R^r$ is a vector-bundle chart and $\Phi(e)=(\pi(e),v)$, then
$$\widetilde\Phi(q,e)=(q,v),\qquad \widetilde\Phi^{-1}(q,v)=\bigl(q,\Phi^{-1}(f(q),v)\bigr).$$
Both displayed maps are continuous in the subspace and product topologies, so this is a homeomorphism from $(f^*E)|_{f^{-1}U}$ to $f^{-1}U\times\mathbb R^r$. On overlaps its change of coordinates is
$$ (q,v)\longmapsto(q,g_{\beta\alpha}(f(q))v),$$
which is smooth and fibrewise linear. These charts therefore supply the smooth rank-$r$ bundle structure directly. Its total space is Hausdorff and second countable: $N\times E$ is a smooth manifold by [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], and both properties pass to the subspace $f^*E$ by [[lem-t0-t1-and-hausdorff-are-hereditary]] and [[prop-second-countability-is-hereditary]].

In a pulled-back frame $f^*e$ on $f^{-1}U$, the **pullback connection** $f^*\nabla$ is specified by
$$ (f^*\nabla)_X((f^*e)u)=(f^*e)\bigl(X(u)+(f^*\omega)(X)u\bigr),$$
where $(f^*\omega)_q(v)=\omega_{f(q)}(df_qv)$ entrywise and $u$ is any smooth coefficient column on $N$. These are local prescriptions under the gluing criterion [[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]; their compatibility and hence well-definedness are proved in the next theorem.

In particular, coefficient functions are not required to factor through $f$. For constant $f$, a constant frame of $E_{f(N)}$ gives zero pulled-back matrix and ordinary differentiation of arbitrary $u$; it does not make every varying section parallel. Empty source and rank-zero bundles use empty coefficient data. No injectivity, immersion, submersion, or choice of an extension is part of this definition.
