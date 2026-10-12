---
id: ex-cm-linear-shear-generating-function
kind: example
title: "The linear shear: the second-kind generating function $S(q,P)=qP+\\lambda q^2/2$ and the matrix test"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-cm-generating-function-of-the-first-and-second-kind, prop-cm-generating-functions-yield-canonical-maps, prop-cm-canonical-map-tests-and-hamiltonian-transport, lem-cm-standard-symplectic-form-is-closed-and-nondegenerate, def-cm-phase-domain-and-standard-symplectic-two-form, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix, def-linear-map]
dependency_roles:
  def-cm-generating-function-of-the-first-and-second-kind: mathematical-premise
  prop-cm-generating-functions-yield-canonical-maps: mathematical-premise
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  lem-cm-standard-symplectic-form-is-closed-and-nondegenerate: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-linear-map: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.4.3 (worked generating functions and the infinitesimal shear as a canonical transformation), printed pages 104-105"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.3 (canonical transformations and simple generating functions)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Example

Let $n=1$, let $\lambda\in\mathbb R$, and let $S:\mathbb R^2\to\mathbb R$,
$S(q,P):=qP+\lambda q^2/2$. Then:

1. $S$ is a generating function of the second kind with $S_{qP}=1\ne0$, and the local map it
   generates is $\Psi_\lambda(q,p)=(Q,P)=(q,\,p-\lambda q)$, defined on all of $\mathbb R^2$
   ([[def-cm-generating-function-of-the-first-and-second-kind]]);
2. $\Psi_\lambda$ is canonical, both by the generating-function theorem
   ([[prop-cm-generating-functions-yield-canonical-maps]]) and by direct verification of the matrix
   identity $D\Psi_\lambda^{\mathsf T}J\,D\Psi_\lambda=J$
   ([[prop-cm-canonical-map-tests-and-hamiltonian-transport]]).

## Facts & Assumptions

**Given:** The real number $\lambda$ and the function $S(q,P)=qP+\lambda q^2/2$.

[F1] Derivatives ([[def-directional-and-partial-derivatives]]): $S_q=P+\lambda q$ and $S_P=q$, so $S_{qP}=1$ and the second-kind relations $p=S_q$, $Q=S_P$ read $p=P+\lambda q$, $Q=q$; solving, $P=p-\lambda q$ and $Q=q$, so the generated map is $\Psi_\lambda(q,p)=(q,p-\lambda q)$ on all of $\mathbb R^2$, a $C^\infty$ diffeomorphism ([[def-cm-generating-function-of-the-first-and-second-kind]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F2] Matrix test ([[prop-cm-canonical-map-tests-and-hamiltonian-transport]], [[lem-cm-standard-symplectic-form-is-closed-and-nondegenerate]], [[def-matrix-product-and-identity-matrix]]): a $C^1$ map $\Psi$ between phase domains is canonical iff $D\Psi^{\mathsf T}J\,D\Psi=J$; here $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$.

## Verification

**Proof technique:** direct; read off the generated map from the defining relations and multiply the two-by-two matrices.

1.1 Clause 1 is [F1]: $S_{qP}=1\ne0$, and the relations $p=S_q=P+\lambda q$, $Q=S_P=q$ give $\Psi_\lambda(q,p)=(q,p-\lambda q)$, which is a linear isomorphism of $\mathbb R^2$ and therefore a $C^\infty$ diffeomorphism. [F1, algebra]

2.1 Clause 2: the derivative is $D\Psi_\lambda=\begin{pmatrix}1&0\\-\lambda&1\end{pmatrix}$, and $\begin{pmatrix}1&-\lambda\\0&1\end{pmatrix}\begin{pmatrix}0&1\\-1&0\end{pmatrix}\begin{pmatrix}1&0\\-\lambda&1\end{pmatrix}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}=J$ by direct block multiplication; hence $\Psi_\lambda$ is canonical by [F2], while the generating-function theorem gives the same conclusion because $dS=p\,dq+Q\,dP$ and $d^2S=0$ force $dq\wedge dp=dQ\wedge dP$. [F1, F2, step 1.1, algebra] ∎
