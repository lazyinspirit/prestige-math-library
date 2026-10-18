---
id: def-motivic-hall-algebra-of-a-finite-quiver
kind: definition
title: "The motivic Hall algebra of a finite quiver"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-motivic-stack-function-groups-for-quiver-representations
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Dominic Joyce, Configurations in abelian categories. II. Ringel-Hall algebras, arXiv:math/0503029v2, §5.1"
      url: "https://arxiv.org/pdf/math/0503029v4"
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, arXiv:1002.4372v1, §§4.1–4.2"
      url: "https://arxiv.org/pdf/1002.4372v1"
verification:
  precheck: n/a
---

## Definition

Let $Q=(Q_0,Q_1,s,t)$ be a finite quiver over a field $k$. A representation
of $Q$ assigns a finite-dimensional $k$-vector space $V_i$ to each vertex
$i\in Q_0$ and a linear map $V_{s(a)}\to V_{t(a)}$ to each arrow
$a\in Q_1$. Its dimension vector is
$\mathbf d=(\dim V_i)_{i\in Q_0}\in\mathbb N^{Q_0}$.

For $\mathbf d\in\mathbb N^{Q_0}$ put
$$\operatorname{Rep}_{\mathbf d}(Q) =\prod_{a\in Q_1}\operatorname{Hom}_k (k^{d_{s(a)}},k^{d_{t(a)}}),\qquad G_{\mathbf d}=\prod_{i\in Q_0}\operatorname{GL}_{d_i}(k),$$and let $\mathfrak M_{\mathbf d}(Q)=[\operatorname{Rep}_{\mathbf d}(Q)/ G_{\mathbf d}]$ be the quotient Artin stack. It is finite type and has affine stabilizers: the representation variety and the acting group are finite type and affine, and each stabilizer is a closed subgroup of $G_{\mathbf d}$. For dimension vectors $\mathbf d,\mathbf e$, let $\mathfrak E_{\mathbf d,\mathbf e}(Q)$ be the stack of short exact sequences of representations$$0\longrightarrow B_{\mathbf e}\longrightarrow E_{\mathbf d+\mathbf e} \longrightarrow A_{\mathbf d}\longrightarrow0.$$The endpoints are part of the data, and isomorphisms are isomorphisms of the whole exact sequence. Equivalently, after choosing the standard $\mathbf e$-dimensional subspaces at each vertex, this is the quotient by the product parabolic preserving those subspaces of the affine space of block upper-triangular arrow maps. Thus $\mathfrak E_{\mathbf d,\mathbf e}(Q)$ is a finite-type Artin stack with affine stabilizers. More explicitly, on a local splitting $E_i=B_i\oplus A_i$, the arrow $a:i\to j$ has block matrix$$\begin{pmatrix} B_a & \xi_a\\ 0 & A_a \end{pmatrix}, \qquad \xi_a:A_i\to B_j.$$Changing the splitting by $h_i:A_i\to B_i$ changes $\xi_a$ to $\xi_a+B_a h_i-h_j A_a$. This is the translation action of the vector bundle $\bigoplus_i\operatorname{Hom}(A_i,B_i)$ on $\bigoplus_{a:i\to j}\operatorname{Hom}(A_i,B_j)$ used in the extension stack calculation. Let $q:\mathfrak E_{\mathbf d,\mathbf e}\to\mathfrak M_{\mathbf d}$ send a sequence to its quotient, $s:\mathfrak E_{\mathbf d,\mathbf e}\to \mathfrak M_{\mathbf e}$ send it to its subrepresentation, and $m:\mathfrak E_{\mathbf d,\mathbf e}\to\mathfrak M_{\mathbf d+\mathbf e}$ send it to its middle representation. The Hall correspondence is ~~~ tikzcd & \mathfrak E_{\mathbf d,\mathbf e}(Q) \ar[dl,"(q,s)"'] \ar[dr,"m"] & \\ \mathfrak M_{\mathbf d}(Q)\times\mathfrak M_{\mathbf e}(Q) && \mathfrak M_{\mathbf d+\mathbf e}(Q) ~~~ Its arrows record the ordered quotient, subrepresentation, and middle object of the displayed short exact sequence; the diagram fixes the convolution convention. Define$$H_Q:=\bigoplus_{\mathbf d\in\mathbb N^{Q_0}} \mathscr K(\mathfrak M_{\mathbf d}(Q)).$$For $\alpha\in\mathscr K(\mathfrak M_{\mathbf d})$ and $\beta\in\mathscr K(\mathfrak M_{\mathbf e})$, define$$\alpha*\beta :=m_!\big((q,s)^*(\alpha\boxtimes\beta)\big) \in\mathscr K(\mathfrak M_{\mathbf d+\mathbf e}).$$
Thus the first factor is the quotient and the second factor is the
subrepresentation, so the sequence is
$0\to B\to E\to A\to0$. Each homogeneous product is defined by one
finite-type stack correspondence; no completion or finiteness of a sum over
isomorphism classes is required. This is the stack-function product without
a potential or a vanishing-cycle weight.

