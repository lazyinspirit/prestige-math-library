---
id: def-deficiency-subspaces-and-deficiency-indices
kind: definition
title: "Deficiency subspaces and deficiency indices"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-symmetric-self-adjoint-and-essentially-self-adjoint, lem-unbounded-adjoint-is-well-defined-and-closed, def-densely-defined-closed-and-closable-operator, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-orthogonality-and-orthogonal-complement, thm-hilbert-adjoint-properties, def-countable-choice, thm-double-orthogonal-complement-is-closure, thm-self-adjoint-resolvent-estimate, thm-existence-of-a-maximal-orthonormal-family]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.6, (2.104) and its proof, p.91"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Remark 7.24 and Example 7.23, pp.32-34"
---

## Definition

Assume Countable Choice. Let $T$ be a densely defined closed symmetric
operator on $H$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[def-densely-defined-closed-and-closable-operator]]). Its **deficiency
subspaces** are
$$K_+:=\ker(T^*-i),\qquad K_-:=\ker(T^*+i),$$
and its **deficiency indices** are the Hilbert dimensions
$d_\pm(T):=\dim K_\pm$, that is, the cardinalities of orthonormal bases of
$K_\pm$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

**The subspaces are the orthocomplements of the ranges.** By
[[lem-unbounded-adjoint-is-well-defined-and-closed]]
$\operatorname{ran}(T\pm i)^\perp=\ker(T^*\mp i)$, so
$K_+=\operatorname{ran}(T+i)^\perp$ and $K_-=\operatorname{ran}(T-i)^\perp$.
Moreover $\operatorname{ran}(T\pm i)$ is closed: for symmetric $T$ and
$x\in D(T)$ one has $\|(T\pm i)x\|^2=\|Tx\|^2+\|x\|^2$ by
[[thm-self-adjoint-resolvent-estimate]], so $(T\pm i)x_n\to y$ makes $(x_n)$
Cauchy, and closedness of $T$ gives $x\in D(T)$ with $y=(T\pm i)x$. Hence
$$H=\operatorname{ran}(T+i)\oplus K_+=\operatorname{ran}(T-i)\oplus K_-$$
is an orthogonal decomposition ([[thm-double-orthogonal-complement-is-closure]],
[[def-orthogonality-and-orthogonal-complement]]), and $K_+\cap K_-=\{0\}$
because $iu=-iu$ forces $u=0$.

**Dimension convention.** $\dim$ is the Hilbert-space dimension, the cardinality
of an orthonormal basis, which exists for every Hilbert space under the Axiom
of Choice ([[thm-existence-of-a-maximal-orthonormal-family]]); it agrees with
the ordinary linear dimension in finite dimensions. The signs are tied to the
Cayley transform: with $C_T=(T-i)(T+i)^{-1}$ one has
$\operatorname{ran}(I-C_T)=D(T)$, and $K_+$ and $K_-$ are exactly the closed
subspaces on which the unitary extensions of $C_T$ may act, as made precise in
the extension parameterization theorem below.
