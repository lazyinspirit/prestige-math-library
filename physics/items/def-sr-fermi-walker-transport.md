---
id: def-sr-fermi-walker-transport
kind: definition
domain: mathematics
title: "Fermi-Walker transport along a timelike worldline"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-regular-causal-curve-and-worldline, def-sr-four-velocity-and-four-acceleration, def-flat-covariant-derivative-on-affine-minkowski-space, thm-sr-proper-time-and-observer-decomposition, def-vector-field-and-section-along-a-smooth-curve, def-ck-tensor-field-on-minkowski-space]
dependency_roles:
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-vector-field-and-section-along-a-smooth-curve: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Definition

Let $x:I\to A$ be a $C^2$ future timelike worldline with four-velocity $U=dx/d\tau$ and four-acceleration $A=dU/d\tau$ ([[def-sr-four-velocity-and-four-acceleration]], [[def-sr-regular-causal-curve-and-worldline]]), so that $\eta(U,U)=-c^2$ and $\eta(U,A)=0$ ([[thm-sr-proper-time-and-observer-decomposition]]), write $s$ for its given parameter and $\tau$ for its proper-time function, with $\tau'(s)>0$, and let $X:I\to V$ be a $C^1$ field along $x$ ([[def-vector-field-and-section-along-a-smooth-curve]]).

**(a) Fermi–Walker derivative.** The **Fermi–Walker derivative of $X$** is

$$\frac{D_{\mathrm{FW}}X}{d\tau}:=\frac{X'}{\tau'}-\frac{1}{c^2}\bigl(\eta(A,X)U-\eta(U,X)A\bigr),$$

where $X'$ denotes differentiation with respect to $s$ and $dX/d\tau:=X'/\tau'$. Here $\tau'=c^{-1}\sqrt{-\eta(x',x')}>0$ by [[def-sr-four-velocity-and-four-acceleration]]. The derivative $X'$ is the ordinary $V$-valued derivative of $X$, which is the covariant derivative of $X$ along $x$ in the flat model ([[def-flat-covariant-derivative-on-affine-minkowski-space]], clause (d)). The field $X$ is **Fermi–Walker transported along $x$** when $D_{\mathrm{FW}}X/d\tau=0$, that is, when

$$X'=\frac{\tau'}{c^2}\bigl(\eta(A,X)U-\eta(U,X)A\bigr).$$

**(b) The four-velocity is Fermi–Walker transported.** Substituting $X=U$ and using $\eta(A,U)=0$ and $\eta(U,U)=-c^2$ gives $D_{\mathrm{FW}}U/d\tau=U'/\tau'-c^{-2}\bigl(\eta(A,U)U-\eta(U,U)A\bigr)=A-A=0$.

**(c) Comparison with parallel transport.** If $A=0$ on an interval $J\subseteq I$, then on $J$ the Fermi–Walker equation reduces to $X'=0$ and coincides with ordinary parallel transport; if $A$ is not zero, the definition includes exactly the correction that also transports the time leg $U/c$ along the worldline.

**(d) Fermi–Walker transported tetrad.** A **Fermi–Walker transported tetrad along $x$** is a tuple $(E_0,E_1,E_2,E_3)$ of $C^1$ fields along $x$ with $\eta(E_a(s),E_b(s))=\operatorname{diag}(-1,1,1,1)_{ab}$ at every $s\in I$, $E_0=U/c$ future, and every $E_a$ Fermi–Walker transported along $x$. These pairings make the four vectors a basis: pairing a linear relation with each $E_b$ forces every coefficient to vanish. Existence and uniqueness from initial data are proved in the following lemma; metric preservation is proved in the subsequent theorem. The physical interpretation as a nonrotating spatial frame carried by an accelerated observer is not asserted here; only the transport rule is defined.

## Remarks

- **Well-definedness.** For a $C^2$ worldline the fields $U$ and $A$ are continuous and $U$ is nowhere zero, so the coefficients $\tau'\eta(A,\cdot)/c^2$ and $\tau'\eta(U,\cdot)/c^2$ of the transport equation are continuous functions along $x$; the equation $X'=\tau'c^{-2}\bigl(\eta(A,X)U-\eta(U,X)A\bigr)$ is therefore a first-order linear differential equation for the $V$-valued field $X$ ([[def-vector-field-and-section-along-a-smooth-curve]], [[def-flat-covariant-derivative-on-affine-minkowski-space]], clause (d)). This definition fixes the rule and does not assert that solutions exist; existence and uniqueness are proved in the following lemma, and preservation of the tetrad conditions in the subsequent theorem.

- **Clause (b) is a computation, not a definition.** The two identities used, $\eta(U,U)=-c^2$ and $\eta(U,A)=0$, are clauses (a) and (b) of [[thm-sr-proper-time-and-observer-decomposition]]; the cancellation displayed in (b) is then immediate from the bilinearity of $\eta$. The definition deliberately introduces no norm or orthogonality claim of its own.

- **Fermi–Walker transport of tensors along a worldline.** Write $D$ for the vector Fermi–Walker derivative in (a). For a covector field $\alpha$ along $x$, define $(D\alpha)(X):=d[\alpha(X)]/d\tau-\alpha(DX)$; for a type-$(r,s)$ tensor $T$, define $(DT)(\alpha_1,\ldots;X_1,\ldots)$ as $d[T(\alpha_1,\ldots;X_1,\ldots)]/d\tau$ minus the evaluation terms in which each argument in turn is replaced by its $D$ derivative ([[def-ck-tensor-field-on-minkowski-space]]). In a constant basis the ordinary product rule cancels argument derivatives, leaving a well-defined tensor; in this framework only the vector case with the fields $E_a$ and the four-velocity is used, and no additional structure (connection coefficients, Christoffel symbols, curvature) is needed because the model's covariant derivative along a curve is the ordinary $V$-valued derivative.
