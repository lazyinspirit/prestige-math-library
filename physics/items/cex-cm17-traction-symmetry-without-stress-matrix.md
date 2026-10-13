---
id: cex-cm17-traction-symmetry-without-stress-matrix
kind: counterexample
title: "FALSE: the reversed-normal convention alone makes a continuous traction field a stress matrix. The field t(n)=|n_1|n refutes it"
status: published
origin: session
domain: mathematics
dependency_level: 1
deps: [def-cm-traction-and-stress, def-matrix-space, def-matrix-product-and-identity-matrix, def-euclidean-spheres-and-closed-balls, def-euclidean-inner-product, def-continuity-real, thm-algebra-of-limits, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]
dependency_roles:
  def-cm-traction-and-stress: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-algebra-of-limits: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 4.3 (Cauchy's hypothesis and the need for force balance in the tetrahedron argument)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "MIT OpenCourseWare 12.005, Applications of Continuum Mechanics, Lecture 3 (Cauchy tetrahedron and Cauchy's formula t = sigma n)"
      url: "https://ocw.mit.edu/courses/12-005-applications-of-continuum-mechanics-to-earth-atmospheric-and-planetary-sciences-spring-2006/5005ac6aec16d031bffbd361c792ca70_lec3.pdf"
verification:
  precheck: pass
---

## Statement refuted

The false statement is: *every continuous traction field
$t:S^2\to\mathbb R^3$ satisfying the reversed-normal convention
$t(-n)=-t(n)$ for every $n\in S^2$ is represented by a matrix
$\sigma\in M_3(\mathbb R)$ with $t(n)=\sigma n$ for every $n$.*

The field constructed below is continuous and satisfies the convention, and
inherits Cauchy's hypothesis (it depends on the surface only through the unit
normal), but no matrix represents it. The refutation shows that the balance
hypothesis of the Cauchy-tetrahedron theorem is essential: symmetry of the
traction in the normal alone is not enough.

## Facts & Assumptions

**Given:** the unit sphere $S^2=\{n\in\mathbb R^3:\|n\|_2=1\}$, the first standard basis vector $e_1$, and the map

$$t:S^2\longrightarrow\mathbb R^3,\qquad t(n):=\bigl\|{\langle n,e_1\rangle_2}\,e_1\bigr\|_2\;n .$$

Write $n_1:=\langle n,e_1\rangle_2$, so $t(n)=|n_1|\,n$ with $|n_1|=\|n_1e_1\|_2$.

[F1] Traction and representation ([[def-cm-traction-and-stress]], [[def-matrix-space]], [[def-matrix-product-and-identity-matrix]]): a matrix $\sigma$ represents $t$ when $t(n)=\sigma n$ for every $n\in S^2$; the columns of $\sigma$ are then determined by $\sigma e_j=t(e_j)$; and $t(-n)=-t(n)$ is the reversed-normal convention, which is a property and not a definition.

[F2] Continuity of the field ([[def-continuity-real]], [[thm-algebra-of-limits]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-euclidean-inner-product]]): $n\mapsto\langle n,e_1\rangle_2$ is linear, hence continuous; the Euclidean norm is continuous on $\mathbb R^3$; the product of a continuous scalar and the continuous map $n\mapsto n$ is continuous; hence $t$ is continuous on $S^2$.

[F3] Sphere and basis ([[def-euclidean-spheres-and-closed-balls]], [[def-euclidean-inner-product]]): $e_1,e_2,e_3$ and $n_*:=(e_1+e_2+e_3)/\sqrt3$ all belong to $S^2$, with $\langle e_j,e_1\rangle_2=\delta_{j1}$ and $\langle n_*,e_1\rangle_2=1/\sqrt3$; and $\|-v\|_2=\|v\|_2$ for every $v\in\mathbb R^3$ by symmetry of the inner product.

## Counterexample

**Proof technique:** direct; verify continuity and the reversed-normal convention, then assume a representing matrix and derive a contradiction by evaluating at the diagonal direction.

1.1 Continuity and reversed normals: by [F2] the field $t$ is continuous on $S^2$. For $n\in S^2$, [F3] gives $\|{\langle -n,e_1\rangle_2e_1}\|_2=\|{-n_1e_1}\|_2=\|{n_1e_1}\|_2$, so $t(-n)=|n_1|(-n)=-|n_1|n=-t(n)$: the reversed-normal convention holds. [given, F2, F3, algebra]

1.2 Assume a representing matrix: suppose $\sigma\in M_3(\mathbb R)$ satisfies $t(n)=\sigma n$ for all $n\in S^2$. Evaluating at the basis vectors, [F1] and [F3] give $\sigma e_1=t(e_1)=|1|e_1=e_1$, $\sigma e_2=t(e_2)=|0|e_2=0$ and $\sigma e_3=0$; hence $\sigma=\mathrm{diag}(1,0,0)$. [given, F1, F3, algebra]

2.1 Contradiction: at $n_*=(e_1+e_2+e_3)/\sqrt3\in S^2$ one has $t(n_*)=|1/\sqrt3|\,n_*=n_*/\sqrt3=(1/3)(1,1,1)$, while $\sigma n_*=(1/\sqrt3,0,0)$. These vectors differ (their second and third components are $1/3$ and $0$ respectively), contradicting the assumed representation for every $n$. Hence no matrix represents $t$, although $t$ is continuous, satisfies Cauchy's hypothesis in the sense that it depends on the surface only through its unit normal, and satisfies the reversed-normal convention. [step 1.2, F1, algebra] ∎

## Remarks

- The counterexample isolates the missing hypothesis: the Cauchy-tetrahedron
  theorem derives the matrix from the **balance** of contact forces on
  shrinking regions, not from the symmetry of the traction in the normal.
  The field above is not balanced on all admissible regions; by the cited
  theorem, the balance condition must fail for it, and continuity plus the
  reversed-normal convention are insufficient on their own.

- The physical reading is the corresponding warning for the model page: the
  representation of contact forces by a stress matrix is a consequence of the
  adopted balance principles, not of the format of the traction field, and a
  model whose contact forces violate the balance hypotheses lies outside the
  Cauchy continuum framework.
