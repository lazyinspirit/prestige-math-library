---
id: thm-pullback-connection-is-well-defined-and-functorial
kind: theorem
title: "Pullback connection is well defined and functorial"
status: draft
origin: pipeline
deps: ["def-pullback-connection","thm-connection-one-form-transformation-law","thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law","prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

The pullback prescription defines a unique connection $f^*\nabla$, independent of frames. Under the canonical bundle isomorphisms it satisfies $\operatorname{id}^*\nabla=\nabla$ and $g^*(f^*\nabla)=(f\circ g)^*\nabla$. For a local section $s$ of $E$,
$$ (f^*\nabla)_X(f^*s)(q)=(\nabla s)_{f(q)}(df_qX_q).$$
The right side is interpreted in the fibre of the pullback bundle at $q$.

## Facts & Assumptions

**Given:** Smooth maps $g:P\to N$, $f:N\to M$ and a connection on $E\to M$.

[F1] The pullback prescription uses matrix $f^*\omega$ in frame $f^*e$ ([[def-pullback-connection]]).

[F2] Matrices transform by $\omega'=A^{-1}\omega A+A^{-1}dA$ ([[thm-connection-one-form-transformation-law]]).

[F3] The matrix overlap condition is necessary and sufficient for unique gluing ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F4] The canonical composite pullback isomorphisms preserve fibre coordinates in pulled-back charts ([[prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism]]).

## Proof

1.1 Pull back the identity in [F2]. Composition preserves matrix products and inverses, and the chain rule gives $d(A\circ f)=f^*(dA)$. Thus $f^*\omega'=(A\circ f)^{-1}(f^*\omega)(A\circ f)+(A\circ f)^{-1}d(A\circ f)$. These are exactly the transition matrices of the pulled-back frames, so the prescription glues uniquely and is frame independent. [F1, F2, F3]

2.1 For a one-form entry $\eta$ and $v\in T_xP$, $(g^*f^*\eta)_x(v)=\eta_{f(g(x))}(df_{g(x)}dg_xv)=((f\circ g)^*\eta)_x(v)$ by the chain rule. Hence the connection matrices coincide in the frames identified by the canonical bundle isomorphism. Gluing uniqueness gives composite functoriality; the identity case is the same evaluation with $d\operatorname{id}=\operatorname{id}$. [F1, F3, F4, step 1.1]

3.1 If $s=eu$, then $f^*s=(f^*e)(u\circ f)$. Its coefficient derivative is $X(u\circ f)=du(dfX)$, giving the displayed section identity. Constant $f$ has $df=0$, so pulled-back sections from $E$ are parallel, whereas general coefficients on $N$ still differentiate as prescribed. Empty bases and rank-zero bundles give unique zero operators; no rank condition on $df$ was used and rank one follows entrywise. All local values are specified uniquely without AC. [F1, step 1.1] ∎
