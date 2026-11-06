---
id: ex-m2-smooth-curve-protected-dirac-model
kind: example
title: M2 Smooth Curve Protected Dirac Model
status: published
origin: session
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
axiom_strength: "ZF + AC"
physical_scope: "Pure mathematical conditional statement/example; no physical membrane realization asserted."
deps:
  - def-axiom-of-choice
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface
  - thm-riemann-roch-compact-riemann-surfaces
  - thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
  - lem-equivariant-finite-chart-symbol-calculus
  - thm-elliptic-regularity-for-dolbeault-harmonic-forms
  - thm-self-adjointness-range-criterion
  - thm-choice-implies-dependent-implies-countable-choice
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-divisor-principal-and-canonical-divisor-riemann-surface: mathematical-premise
  def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface: mathematical-premise
  def-line-bundle-associated-to-a-divisor: mathematical-premise
  lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface: mathematical-premise
  thm-riemann-roch-compact-riemann-surfaces: mathematical-premise
  thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces: mathematical-premise
  def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface: mathematical-premise
  def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface: mathematical-premise
  lem-equivariant-finite-chart-symbol-calculus: mathematical-premise
  thm-elliptic-regularity-for-dolbeault-harmonic-forms: mathematical-premise
  thm-self-adjointness-range-criterion: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 9, Theorem 9.1, and Ch. 14, Theorem 14.2 and Corollary 14.3, printed pp. 85–87 and 119–120: divisor Riemann–Roch, finite-dimensional line-bundle cohomology, and meromorphic line-bundle sections"
    - title: "Stefan Haller, The Atiyah–Singer Index Theorem, full lecture notes (2012/13)"
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: "Part II §§2–3, pp. 64–85: elliptic differential operators, Sobolev realizations, and index"
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 6, §§1 and 3, printed pp. 52–55: divisor Riemann–Roch and the canonical degree formula"
generation:
  role: example
---

## Example

Let $C$ be a compact connected smooth Riemann surface of genus $g$,
let $L\to C$ be a Hermitian holomorphic line bundle, and let
$T\to C$ be a holomorphic line bundle with a supplied Hermitian
metric and a specified holomorphic isomorphism $T^{\otimes2}\cong K_C$.
Supply a compatible Riemannian
metric on $C$ and use the induced $L^2$ metric on
$V:=L\otimes T$. On the Hilbert space
$L^2(C,\Omega^{0,*}(C,V))=L^2(C,\Omega^{0,0}(C,V)\oplus
\Omega^{0,1}(C,V))$, take the Sobolev $H^1$ domain and define
$$Q=\sqrt{2\rho}\,(\bar\partial_V+\bar\partial_V^*),\qquad \rho\in\mathbb R_{>0}.$$
The $\mathbb Z_2$ grading is even degree zero and odd degree one. For
an odd Fredholm operator $R$, define its even-to-odd index by
$\operatorname{ind}(R_+):=\dim\ker R_+-\dim\operatorname{coker}R_+$.
With this grading, $Q$ is a self-adjoint odd elliptic operator and
$$\operatorname{ind}(Q_{\mathrm{even}\to\mathrm{odd}})=\deg L.$$
Here the degree of a holomorphic line bundle is the degree of the
divisor of any nonzero meromorphic section; the proof shows this is
well-defined. All data are mathematical inputs. The construction does
not identify this operator with a physical membrane sector.

## Facts & Assumptions

**Given:** Full AC; the compact connected curve $C$, the Hermitian holomorphic lines $L,T$, an isomorphism $T^{\otimes2}\cong K_C$, compatible metrics, and $\rho>0$.

[F1] [[def-axiom-of-choice]]: full AC is the foundational assumption used by the divisor Riemann–Roch and meromorphic-section interfaces.

[F2] [[def-divisor-principal-and-canonical-divisor-riemann-surface]]: on a compact connected curve, every principal divisor has degree zero and canonical divisors of nonzero meromorphic differentials are linearly equivalent.

[F3] [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]: the divisor of a nonzero meromorphic section is defined by its local orders; quotients of two such sections are meromorphic functions.

[F4] [[def-line-bundle-associated-to-a-divisor]]: $\mathcal O(D+D')\cong\mathcal O(D)\otimes\mathcal O(D')$, and $\mathcal O((\eta))\cong K_C$ for a nonzero meromorphic differential $\eta$.

[F5] [[lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface]]: every holomorphic line bundle on a compact connected Riemann surface has a nonzero meromorphic section; the supplier assumes full AC.

[F6] [[thm-riemann-roch-compact-riemann-surfaces]]: for each divisor $D$, $\ell(D)-h^0(K_C\otimes\mathcal O(D)^*)= \deg D+1-g$; the supplier proves existence of a nonzero meromorphic differential and full AC is among its hypotheses.

[F7] [[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]: for a holomorphic line $V$, $H^1(C,\mathcal O(V))\cong C^\infty(\Omega^{0,1}(V))/\bar\partial_V C^\infty(V)$, and $H^0(C,\mathcal O(V))$ is the holomorphic-section space. This comparison alone does not identify the Hilbert cokernel.

[F8] [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]: the supplied compatible metrics define the $L^2$ Hilbert spaces and the formal adjoint $\bar\partial_V^*$.

[F9] [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]: the maximal Dolbeault operator is closed and densely defined, its adjoint is closed and dense, and $\ker\bar D^*=(\operatorname{ran}\bar D)^\perp$.

[F10] [[lem-equivariant-finite-chart-symbol-calculus]]: first-order elliptic operators have Fredholm Sobolev realizations on compact manifolds; its parametrix proof gives $Pu\in H^s\Rightarrow u\in H^{s+1}$ for an order-one elliptic $P$ and distribution $u$.

[F11] [[thm-self-adjointness-range-criterion]]: a densely defined symmetric operator $R$ is self-adjoint if both $\operatorname{ran}(R+i)$ and $\operatorname{ran}(R-i)$ equal the Hilbert space.

[F12] [[thm-elliptic-regularity-for-dolbeault-harmonic-forms]]: the graph domain of $\bar D\oplus\bar D^*$ is the first Sobolev space; harmonic forms and the orthogonal projection to them are smooth; every smooth form in the range of $\bar D$ has a smooth preimage.

[F13] [[thm-choice-implies-dependent-implies-countable-choice]]: full AC implies DC and countable choice, which supply the weaker foundational hypotheses used by [F11].

## Verification

1.1 Choose nonzero meromorphic sections $s_L,s_T$ by [F5], using the stated full AC [F1], and write $D_L=(s_L)$, $D_T=(s_T)$. If $s'_L$ is another nonzero meromorphic section, $s'_L/s_L$ is a nonzero meromorphic function and $D'_L-D_L=(s'_L/s_L)$; [F2] gives $\deg D'_L=\deg D_L$. The same argument applies to $T$, so both line-bundle degrees in the statement are well-defined. Local orders add under tensor products, hence $s_L\otimes s_T$ has divisor $D_L+D_T$, and $\deg V=\deg L+\deg T$. [F1, F2, F3, F5, algebra]

1.2 In the even/odd splitting, the unscaled operator is
$$R=\begin{pmatrix}0&\bar D^*\\\bar D&0\end{pmatrix},$$
where $\bar D$ is the maximal $L^2$ Dolbeault operator on $V$.
By [F12] the common graph domain of $\bar D$ and $\bar D^*$ is
$H^1$, dense in the total $L^2$ space. Integration by parts in the
definition of $\bar D^*$ [F8, F9] makes $R$ symmetric there. Its
principal symbol at a nonzero cotangent vector is
the off-diagonal matrix formed from the symbol of $\bar\partial_V$
and its adjoint. On a complex curve that scalar symbol is nonzero for
every nonzero real cotangent vector, so the matrix is invertible.
Thus $R$ is elliptic; [F10] gives its Fredholm $H^1\to L^2$
realization and elliptic regularity. [F8, F9, F10, F12, given]

2.1 Let $\eta$ be a nonzero meromorphic differential supplied by [F6]
and put $D_K=(\eta)$. Apply [F6] first to $D=0$, using $\ell(0)=1$, to obtain $h^0(K_C)=g$; apply it next to $D=D_K$, using $\mathcal O(D_K)\cong K_C$, to obtain $g-1=\deg D_K+1-g$. Thus $\deg K_C=\deg D_K=2g-2$. The isomorphism $T^{\otimes2}\cong K_C$ sends the tensor square of $s_T$ to a meromorphic section of $K_C$ with divisor $2D_T$. Therefore $2\deg T=\deg K_C=2g-2$, so $\deg T=g-1$. [F4, F5, F6, step 1.1, algebra]

2.2 For either sign, $R\pm i$ has zero kernel: if $(R\pm i)u=0$, symmetry gives $0=\langle (R\pm i)u,u\rangle$, whose imaginary part is $\pm\|u\|^2$. If $v\in L^2$ is orthogonal to the range of $R\pm i$, testing against smooth sections gives the distributional equation $(R\mp i)v=0$. By [F10] this elliptic order-one equation puts $v$ in $H^1$, after which symmetry gives $v=0$. The Fredholm realization $R\pm i:H^1\to L^2$ from [F10] has closed range; its orthogonal complement is zero, so it is onto. The range criterion [F11] proves that $R$ is self-adjoint. The countable-choice hypothesis of [F11] follows from full AC by [F13]. Multiplication by $\sqrt{2\rho}>0$ preserves symmetry, self-adjointness and the domain, so $Q=\sqrt{2\rho}R$ is self-adjoint and odd. [F10, F11, F13, step 1.2, algebra]

3.1 The even-to-odd block of $Q$ is the positive scalar $\sqrt{2\rho}\bar D$, so its kernel is $\ker\bar D$, and its cokernel is $\ker\bar D^*$: the range is closed by the Fredholm realization [F10], and [F9] identifies its orthogonal complement. The kernel/cokernel are finite-dimensional, and [F12] makes every element of $\ker\bar D^*$ smooth. Thus every $L^2$ cokernel class has a smooth representative. Conversely, if a smooth $(0,1)$-form is in $\operatorname{ran}\bar D$, [F12] gives it a smooth preimage. Inclusion of smooth forms therefore induces an isomorphism from the smooth Dolbeault quotient to the Hilbert quotient. By [F7], the dimensions are $h^0(C,V)$ and $h^1(C,V)$. Apply [F6] to a divisor $D_V$ representing $V$, supplied by [F5]; the divisor line-bundle identification [F4] gives $h^0(C,V)-h^1(C,V)=\deg D_V+1-g=\deg V+1-g$. By steps 1.1 and 2.1, this equals $\deg L+(g-1)+1-g=\deg L$, proving the index formula. [F4, F5, F6, F7, F9, F10, F12, step 1.1, step 2.1] ∎

