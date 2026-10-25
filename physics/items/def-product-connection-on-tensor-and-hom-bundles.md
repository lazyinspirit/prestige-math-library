---
id: def-product-connection-on-tensor-and-hom-bundles
kind: definition
title: "Product connection on tensor and hom bundles"
status: published
origin: pipeline
deps: ["def-dual-connection","lem-finite-tensor-products-of-smooth-vector-bundles","thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
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

Give each of finitely many bundles $E_j$ a connection. Use the tensor bundle constructed in [[lem-finite-tensor-products-of-smooth-vector-bundles]], including its multilinear model on the dual fibres. The **product connection** is characterized on local elementary tensors by
$$\nabla_X(s_1\otimes\cdots\otimes s_k)=\sum_j s_1\otimes\cdots\otimes\nabla^j_Xs_j\otimes\cdots\otimes s_k.$$
For the empty product, the connection on scalar functions is $\nabla_Xf=X(f)$.

To construct it without a decomposition assumption, for a multilinear-model section $T$ and local dual sections $\alpha_j$ put
$$(\nabla_XT)(\alpha_1,\ldots,\alpha_k)=X\bigl(T(\alpha_1,\ldots,\alpha_k)\bigr)-\sum_jT(\alpha_1,\ldots,(\nabla^j)^*_X\alpha_j,\ldots,\alpha_k).$$
Use the dual connections of [[def-dual-connection]]. Multiplying any argument by a smooth $f$ produces two opposite $X(f)T(\alpha_1,\ldots,\alpha_k)$ terms; thus this expression is function-linear in every dual argument. In dual frames its coefficients are smooth and depend only on their fibre values, so it defines a smooth tensor section. The same intrinsic expression on overlaps gives agreement. Its real-linearity, function-linearity in $X$, and rule $\nabla_X(fT)=X(f)T+f\nabla_XT$ follow by direct expansion, establishing the connection. This also gives the gluing criterion of [[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]].

On a pure tensor, the scalar product rule and the dual pairing identity reduce this expression to the first displayed sum. Hence it respects the balanced identity $(fs)\otimes t=s\otimes(ft)$: either derivative gives the same term $X(f)s\otimes t$ and the same two terms multiplied by $f$. Every section has a finite local product-frame expansion, so that rule and the connection Leibniz identity force uniqueness.

For bundles $E,F$, identify $F\otimes E^*$ with $\operatorname{Hom}(E,F)$ by $t\otimes\alpha\mapsto(v\mapsto\alpha(v)t)$. In local bases these elementary tensors are precisely the matrix units, proving this is a smooth fibrewise isomorphism. The induced **Hom connection** is therefore
$$(\nabla_XA)(s)=\nabla^F_X(A(s))-A(\nabla^E_Xs).$$
The two $X(f)A(s)$ terms cancel when $s$ is replaced by $fs$, ensuring a fibrewise map. Rank-zero factors give zero bundles, whereas the empty product is the scalar line; these conventions are different. No choice beyond finitely many local frames is needed.
