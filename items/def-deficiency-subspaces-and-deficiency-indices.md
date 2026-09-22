---
id: def-deficiency-subspaces-and-deficiency-indices
kind: definition
title: "Deficiency subspaces and deficiency indices"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-and-complex-inner-product-space, lem-orthogonal-complement-is-closed, thm-orthogonal-decomposition-by-a-closed-subspace, thm-bessel-inequality-for-an-arbitrary-orthonormal-family, cor-cardinal-absorption, lem-cardinal-arithmetic-basic-laws, def-symmetric-self-adjoint-and-essentially-self-adjoint, lem-unbounded-adjoint-is-well-defined-and-closed, def-densely-defined-closed-and-closable-operator, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-orthogonality-and-orthogonal-complement, def-axiom-of-choice, thm-existence-of-a-maximal-orthonormal-family]
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

Assume the Axiom of Choice. Let $T$ be a densely defined closed symmetric
operator on a complex Hilbert space $H$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
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
Each $K_\pm$ is a closed linear subspace by
[[lem-orthogonal-complement-is-closed]], hence is itself a Hilbert space.
For $x\in D(T)$, symmetry and conjugate symmetry make
$r:=\langle Tx,x\rangle=\langle x,Tx\rangle$ real. With the inner product
linear in its first variable [[def-real-and-complex-inner-product-space]],
$$\|(T\pm i)x\|^2=\|Tx\|^2+\|x\|^2\mp ir\pm ir=\|Tx\|^2+\|x\|^2.$$
Thus $T\pm i$ is injective. If $(T\pm i)x_n\to y$, applying the identity
to $x_n-x_m$ makes $(x_n)$ Cauchy. Completeness gives $x_n\to x$, and
$Tx_n=(T\pm i)x_n\mp ix_n\to y\mp ix$. Closedness of $T$ now gives
$x\in D(T)$ and $(T\pm i)x=y$, proving both ranges closed.
The closed-subspace decomposition theorem
[[thm-orthogonal-decomposition-by-a-closed-subspace]] therefore gives
$$H=\operatorname{ran}(T+i)\oplus K_+=\operatorname{ran}(T-i)\oplus K_-.$$
Also $K_+\cap K_-=\{0\}$, since membership forces $T^*u=iu=-iu$.
The two deficiency spaces need not be orthogonal to each other in $H$.

**Dimension convention and well-definedness.** An orthonormal basis exists
in each $K_\pm$ by [[thm-existence-of-a-maximal-orthonormal-family]], using
full AC. Its cardinality is independent of the basis, as follows. Let
$(e_i)_{i\in I}$ and $(f_j)_{j\in J}$ be two orthonormal bases of the same
Hilbert space. By [[thm-bessel-inequality-for-an-arbitrary-orthonormal-family]],
for each $i$ and integer $n\ge1$ at most $n$ indices satisfy
$|\langle e_i,f_j\rangle|^2\ge1/n$. Thus the support in $J$ of each row is
countable. Each column has a nonzero entry: otherwise $f_j$ is orthogonal
to the dense span of all $e_i$, hence to itself, contradicting norm one.
Here orthogonality passes to the closure by
[[lem-orthogonal-complement-is-closed]]. If $I$ is infinite, full AC lets
us enumerate the row supports and assign each $j$ to one row containing it;
this gives an injection $J\to I\times\mathbb N$. Cardinal absorption
[[cor-cardinal-absorption]] and cardinal comparison
[[lem-cardinal-arithmetic-basic-laws]] give $|J|\le|I|$.
If $I$ has finite size $n$, the residual
$f_j-\sum_{i\in I}\langle f_j,e_i\rangle e_i$ is orthogonal to the dense
span of the $e_i$ and so vanishes. Taking its norm gives
$\sum_{i\in I}|\langle f_j,e_i\rangle|^2=1$.
For every finite $F\subseteq J$, Bessel in the other direction yields
$$|F|=\sum_{j\in F}\sum_{i\in I}|\langle f_j,e_i\rangle|^2=\sum_{i\in I}\sum_{j\in F}|\langle e_i,f_j\rangle|^2\le n.$$
Hence $|J|\le n$. Exchanging the two bases proves equality of cardinalities
in all cases. In the finite case each basis also spans algebraically by the
same residual argument, so this is the ordinary linear dimension. For the
zero space the basis is empty and the dimension is zero. AC is used for
basis existence and the simultaneous choices in the infinite comparison.

**Cayley sign and domain convention.** Define
$$C_T:\operatorname{ran}(T+i)\longrightarrow\operatorname{ran}(T-i),\qquad C_T((T+i)x)=(T-i)x.$$
Injectivity of $T+i$ makes this well defined; the norm identity makes it an
isometry onto the stated range. On its domain,
$(I-C_T)(T+i)x=2ix$, whence $\operatorname{ran}(I-C_T)=D(T)$, since $D(T)$
is a complex linear subspace. If a unitary $U:H\to H$ extends $C_T$, it
maps the orthogonal complement $K_+$ of the initial range onto the
orthogonal complement $K_-$ of the final range, by preservation of inner
products and surjectivity. Conversely, any unitary $W:K_+\to K_-$ gives
the unitary extension $U=C_T\oplus W$ on the two displayed orthogonal
decompositions. This describes the free part of a unitary extension and
fixes the signs; it does not assert that such a $W$ always exists.
