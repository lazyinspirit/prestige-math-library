---
id: ex-cm13-determinant-tests-for-linear-canonical-maps
kind: example
title: "Determinant tests on explicit linear maps: $\\det A=1$ is equivalent to canonicity in dimension two, and strictly weaker in dimension four (the volume-preserving shear)"
status: draft
origin: session
domain: mathematics
dependency_level: 4
deps: [def-cm-phase-domain-and-standard-symplectic-two-form, lem-cm-standard-symplectic-form-is-closed-and-nondegenerate, prop-cm-canonical-map-tests-and-hamiltonian-transport, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-determinant-of-a-square-matrix, thm-determinant-multiplicative, thm-determinant-of-transpose, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-linear-map, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  lem-cm-standard-symplectic-form-is-closed-and-nondegenerate: mathematical-premise
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-determinant-of-transpose: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.4, printed pages 100-101 (PDF pages 106-107): the symplectic-matrix condition $\\mathcal J J\\mathcal J^{\\mathsf T}=J$ for a change of variables to be canonical"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.2-5.2.2: the symplectic condition on the derivative and the fundamental Poisson bracket tests"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Example

Let $J_{2}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ and, in the ordered
coordinates $(q^{1},p_{1},q^{2},p_{2})$ of $\mathbb R^{4}$, let
$J_{4}=\operatorname{diag}(J_{2},J_{2})$ be the standard symplectic matrix of
the phase domain $\mathbb R^{4}$
([[def-cm-phase-domain-and-standard-symplectic-two-form]]); recall that a
linear map $A$ is canonical exactly when $A^{\mathsf T}JA=J$
([[prop-cm-canonical-map-tests-and-hamiltonian-transport]]). Then:

1. **(dimension two)** For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ one has

$$A^{\mathsf T}J_{2}A=(ad-bc)\,J_{2}=(\det A)\,J_{2},$$

   so an invertible $A$ is canonical if and only if $\det A=1$: in one degree
   of freedom canonicity and oriented area preservation coincide. For instance
   $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ has $\det A=1$ and is canonical.
2. **(scaling)** For $\lambda\neq0$ the block-diagonal map
   $C(q,p)=(\lambda q,\lambda^{-1}p)$ on the phase domain
   $\mathbb R^{2n}$ is canonical: its derivative
   $\operatorname{diag}(\lambda I_{n},\lambda^{-1}I_{n})$ satisfies
   $DC^{\mathsf T}J\,DC=J$ and $\det DC=1$; it even preserves the canonical
   one-form, $C^{*}\lambda=\lambda$, because
   $(\lambda^{-1}p)\cdot d(\lambda q)=p\cdot dq$.
3. **(volume preservation is weaker in dimension four)** The linear shear

$$C(q^{1},q^{2},p_{1},p_{2})=(q^{1},\,q^{2}+q^{1},\,p_{1},\,p_{2})$$

   is written in grouped coordinates $(q^1,q^2,p_1,p_2)$, whose
   symplectic matrix is $J_{\mathrm{grp}}=\begin{pmatrix}0&I_2\\-I_2&0\end{pmatrix}$.
   It has $\det DC=1$, so it preserves volume, but
   $DC^{\mathsf T}J_{\mathrm{grp}}\,DC=J_{\mathrm{grp}}+e_{1}e_{4}^{\mathsf T}-e_{4}e_{1}^{\mathsf T}\neq J_{\mathrm{grp}}$:
   the $(1,4)$-entry is $1$ instead of $0$. Equivalently the fundamental
   bracket $\{Q^{2},P_{1}\}=1$ does not vanish, while canonicity would force
   $\{Q^{2},P_{1}\}=\delta^{2}_{1}=0$. Hence $|\det DC|=1$ does **not**
   imply canonicity in dimension $4$.
4. **(positive control)** If $A=\operatorname{diag}(A_{1},A_{2})$ in the
   ordered coordinates $(q^{1},p_{1},q^{2},p_{2})$ with each $2\times2$ block
   satisfying $A_{i}^{\mathsf T}J_{2}A_{i}=J_{2}$, then
   $A^{\mathsf T}J_{4}A=J_{4}$: canonicity is preserved blockwise.

## Facts & Assumptions

**Given:** The standard symplectic matrices $J_{2}$ and $J_{4}=\operatorname{diag}(J_{2},J_{2})$, the displayed linear maps, and the coordinate functions of the phase domains.

[F1] Symplectic matrix and canonical tests ([[def-cm-phase-domain-and-standard-symplectic-two-form]], [[lem-cm-standard-symplectic-form-is-closed-and-nondegenerate]], [[prop-cm-canonical-map-tests-and-hamiltonian-transport]]): $J^{\mathsf T}=-J$, $J^{2}=-I$; a $C^{1}$ map between phase domains is canonical exactly when $DC^{\mathsf T}J\,DC=J$; canonicity is equivalent to the preservation of the standard two-form.

[F2] Brackets ([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]): the coordinate functions of a phase domain satisfy $\{z^{i},z^{j}\}=J^{ij}$; in particular $\{q^{i},p_{j}\}=\delta^{i}_{j}$, $\{q^{i},q^{j}\}=\{p_{i},p_{j}\}=0$.

[F3] Matrix algebra ([[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-linear-map]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): matrix products, transposes and determinants are computed entrywise by the ordinary rules, $\det(A^{\mathsf T})=\det A$, and a linear map has constant derivative equal to its matrix.

## Verification

**Proof technique:** direct. Multiply the explicit matrices, read the determinant, and evaluate the fundamental bracket that distinguishes the shear from a canonical map.

1.1 Dimension two: multiplying $A^{\mathsf T}J_{2}A$ by [F3] gives $\begin{pmatrix}0&ad-bc\\-(ad-bc)&0\end{pmatrix}=(ad-bc)J_{2}$; for invertible $A$ this equals $J_{2}$ exactly when $\det A=ad-bc=1$ by [F1], and $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ has determinant $2-1=1$, which is claim 1. [F1, F3, algebra]

1.2 Scaling: $DC=\operatorname{diag}(\lambda I_{n},\lambda^{-1}I_{n})$ computed by [F3], and $\operatorname{diag}(\lambda I_{n},\lambda^{-1}I_{n})^{\mathsf T}J\operatorname{diag}(\lambda I_{n},\lambda^{-1}I_{n})$ has the off-diagonal blocks $\lambda\cdot I\cdot\lambda^{-1}I=I_{n}$ and $-\lambda^{-1}I\cdot\lambda I=-I_{n}$, so it equals $J$; the determinant is $\lambda^{n}\lambda^{-n}=1$, and $C^{*}\lambda=\sum_{a}(\lambda^{-1}p_{a})d(\lambda q^{a})=\lambda$; this is claim 2. [F1, F3, algebra]

1.3 Shear: the derivative of $C$ computed by [F3] is $DC=I_{4}+e_{2}e_{1}^{\mathsf T}$ (in grouped coordinates), with $\det DC=1$ because it is triangular with unit diagonal; expanding $DC^{\mathsf T}J_{\mathrm{grp}}DC=(I+e_{1}e_{2}^{\mathsf T})J_{\mathrm{grp}}(I+e_{2}e_{1}^{\mathsf T})$ gives $J_{\mathrm{grp}}+e_{1}e_{4}^{\mathsf T}-e_{4}e_{1}^{\mathsf T}$, whose $(1,4)$-entry is $1$, so the matrix identity fails; equivalently, by [F2], $\{Q^{2},P_{1}\}=\sum_{a}(Q^{2}_{q^{a}}P_{1,p_{a}}-Q^{2}_{p_{a}}P_{1,q^{a}})=\partial Q^{2}/\partial q^{1}\cdot\partial P_{1}/\partial p_{1}=1\neq\delta^{2}_{1}$, and canonicity would force the vanishing of this bracket; this is claim 3. [F1, F2, F3, algebra]

1.4 Block positive control: in the ordered coordinates $J_{4}=\operatorname{diag}(J_{2},J_{2})$, so $\operatorname{diag}(A_{1},A_{2})^{\mathsf T}J_{4}\operatorname{diag}(A_{1},A_{2})=\operatorname{diag}(A_{1}^{\mathsf T}J_{2}A_{1},A_{2}^{\mathsf T}J_{2}A_{2})=\operatorname{diag}(J_{2},J_{2})=J_{4}$ whenever each block satisfies its two-dimensional identity; this is claim 4. [F1, F3, algebra]

2.1 Necessity of determinant $+1$ in dimension four: put $\omega(v,w)=v^{\mathsf T}J_4w$ and define $T(v_1,v_2,v_3,v_4)=\omega(v_1,v_2)\omega(v_3,v_4)-\omega(v_1,v_3)\omega(v_2,v_4)+\omega(v_1,v_4)\omega(v_2,v_3)$. Bilinearity and skew-symmetry make $T$ multilinear and alternating (interchanging any adjacent pair negates the displayed expression), and $T(e_1,e_2,e_3,e_4)=1$. Expanding each argument in the coordinate basis therefore gives $T(Ae_1,Ae_2,Ae_3,Ae_4)=\det A$ by the permutation definition of the determinant. If $A^{\mathsf T}J_4A=J_4$, each pairing in $T$ is preserved, so that value is $T(e_1,e_2,e_3,e_4)=1$. Thus every canonical $A$ has $\det A=1$, while step 1.3 gives a noncanonical map with determinant $1$. The grouped-coordinate version has the same determinant by conjugation with the coordinate permutation. [F1, F3, step 1.3, algebra]

3.1 Collecting steps 1.1-1.4 and 2.1 proves the four claims; in particular the determinant test is equivalent to canonicity in dimension two and strictly weaker in dimension four. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎
