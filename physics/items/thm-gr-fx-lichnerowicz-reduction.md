---
id: thm-gr-fx-lichnerowicz-reduction
kind: theorem
title: "Conformal reduction of the vacuum constraint equations"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-gr-fx-conformal-constraint-data
  - def-gr-spacelike-initial-data-and-constraints
  - thm-gr-constraint-equations-in-normal-frame
  - prop-christoffel-formula-for-the-levi-civita-connection
  - def-levi-civita-connection
  - def-dual-connection
  - def-product-connection-on-tensor-and-hom-bundles
  - thm-clairaut-schwarz-mixed-partials
  - thm-chain-rule-for-total-derivatives
  - thm-logarithm-derivative-and-integral
  - thm-algebra-of-derivatives
  - def-integer-power
  - lem-power-laws
  - def-countable-choice
dependency_roles:
  def-gr-fx-conformal-constraint-data: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  prop-christoffel-formula-for-the-levi-civita-connection: mathematical-premise
  def-levi-civita-connection: mathematical-premise
  def-dual-connection: mathematical-premise
  def-product-connection-on-tensor-and-hom-bundles: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-integer-power: mathematical-premise
  lem-power-laws: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Conditional mathematical identity for smooth compact vacuum conformal data with zero cosmological constant; it proves constraint equivalence only and no existence or spacetime development theorem."
sources:
  references:
    - title: "É. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012; author preprint arXiv:gr-qc/0703035v1), §6.3.3, §§6.4.1–6.4.2, §§6.5.2–6.5.3, and §§8.2.2–8.2.4"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Full 220-page lecture-note PDF retrieved; complete relevant sections inspected. Equations (6.48)–(6.52), (6.79)–(6.83), (6.101)–(6.104) and (8.5)–(8.8) give the scalar-curvature, tracefree-curvature, momentum and Hamiltonian transformations."
    - title: "R. Bartnik and J. Isenberg, The Constraint Equations, in The Einstein Equations and the Large Scale Behavior of Gravitational Fields (Birkhäuser, 2004), arXiv:gr-qc/0405092v1"
      url: "https://arxiv.org/pdf/gr-qc/0405092"
      locator: "Full 34-page review chapter retrieved; the relevant §4.1 discussion and equations (47)–(56) were inspected for the conformal free-data split and constant-mean-curvature Lichnerowicz equation."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $(h,K)$ be the vacuum conformal constraint data of the definition. Then
$\operatorname{tr}_hK=\tau$ and the momentum residual vanishes:
$$\mathcal M_j(h,K)=0.$$
The Hamiltonian residual is
$$\mathcal H(h,K)=0\quad\Longleftrightarrow\quad -8\widetilde\Delta\phi+\widetilde R\,\phi-|\widetilde\sigma|_{\widetilde h}^2\phi^{-7} +\frac{2}{3}\tau^2\phi^5=0.$$
The displayed scalar equation is the **Lichnerowicz equation** for these
constant-mean-curvature (CMC) vacuum data. Here CMC means that the trace
$\operatorname{tr}_hK$ is spatially constant; its value is $\tau$.

## Statement references

[[def-gr-fx-conformal-constraint-data]]

[[def-gr-spacelike-initial-data-and-constraints]]

[[thm-gr-constraint-equations-in-normal-frame]]

[[prop-christoffel-formula-for-the-levi-civita-connection]]

[[def-levi-civita-connection]]

[[def-dual-connection]]

[[def-product-connection-on-tensor-and-hom-bundles]]

[[thm-clairaut-schwarz-mixed-partials]]

[[thm-chain-rule-for-total-derivatives]]

[[thm-logarithm-derivative-and-integral]]

[[thm-algebra-of-derivatives]]

[[def-integer-power]]

[[lem-power-laws]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** A nonempty compact smooth three-manifold without boundary, a smooth
Riemannian metric $\widetilde h$, a smooth TT covariant two-tensor
$\widetilde\sigma$, a constant $\tau\in\mathbb R$, and a positive smooth
dimensionless function $\phi$, with $\Lambda=0$ and zero stress-energy. Assume
$\mathrm{AC}_\omega$ for the embedded Lorentzian constraint interpretation.

[A1] [[def-countable-choice]], [[def-gr-fx-conformal-constraint-data]]:
$\mathrm{AC}_\omega$ is the axiom that every countable family of nonempty sets
has a choice function; the local definition requires it only for the embedded
Lorentzian interpretation, not for the abstract tensor identity.

[F1] [[def-gr-fx-conformal-constraint-data]]: $h=\phi^4\widetilde h$,
$K=\phi^{-2}\widetilde\sigma+(\tau/3)h$,
$\operatorname{tr}_{\widetilde h}\widetilde\sigma=0$,
$\widetilde D^i\widetilde\sigma_{ij}=0$, and
$\widetilde\Delta f=\widetilde h^{ij}
(\partial_i\partial_jf-\widetilde\Gamma^k{}_{ij}\partial_kf)$.

[F2] [[def-gr-spacelike-initial-data-and-constraints]]: the library initial-data
convention is $K(X,Y)=g(\nabla_Xn,Y)$ and the vacuum constraints are the
normal and normal-tangential projections with $\Lambda=0$ and $T=0$.

[F3] [[thm-gr-constraint-equations-in-normal-frame]]: with this $K$ convention,
the vacuum scalar and covector constraint residuals are
$R(h)+(\operatorname{tr}_hK)^2-|K|_h^2$ and
$\operatorname{div}_hK-d(\operatorname{tr}_hK)$, respectively.

[F4] [[prop-christoffel-formula-for-the-levi-civita-connection]]: for a smooth
Riemannian metric $m$ in coordinates,
$\Gamma[m]^k{}_{ij}=\tfrac12m^{k\ell}(\partial_i m_{j\ell}
+\partial_jm_{i\ell}-\partial_\ell m_{ij})$.

[F5] [[def-levi-civita-connection]]: a Levi-Civita connection is
metric-compatible and torsion-free.

[F6] [[def-dual-connection]],
[[def-product-connection-on-tensor-and-hom-bundles]]: the induced covariant
derivative on dual and tensor-product bundles obeys the dual-pairing and
Leibniz rules, so a metric-compatible connection also annihilates the inverse
metric.

[F7] [[thm-clairaut-schwarz-mixed-partials]]: second partial derivatives of a
smooth scalar function commute in every coordinate chart.

[F8] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composite
of differentiable Euclidean maps is the composition of their derivatives.

[F9] [[thm-logarithm-derivative-and-integral]]: for $x>0$,
$(\log x)'=1/x$.

[F10] [[thm-algebra-of-derivatives]]: product and quotient differentiation
rules hold where the denominator is nonzero.

[F11] [[def-integer-power]], [[lem-power-laws]]: negative integer powers are
reciprocals of positive powers, and integer powers obey the addition and
quotient laws on nonzero bases.

## Proof

1.1 From [F1], $h^{ij}=\phi^{-4}\widetilde h^{ij}$ and
$h^{ij}K_{ij}=\phi^{-6}\widetilde h^{ij}\widetilde\sigma_{ij}+\tau=\tau$.
Writing $A_{ij}:=\phi^{-2}\widetilde\sigma_{ij}$, its trace is zero and
$|A|_h^2=\phi^{-12}|\widetilde\sigma|_{\widetilde h}^2$: each of the two
inverse metrics contributes $\phi^{-4}$ and the two $A$ factors contribute
$\phi^{-2}$. The cross term between $A$ and $(\tau/3)h$ vanishes by the
trace-free condition, while $|(\tau/3)h|_h^2=3(\tau/3)^2=\tau^2/3$. Hence
$$|K|_h^2=\phi^{-12}|\widetilde\sigma|_{\widetilde h}^2+\frac{\tau^2}{3}.$$
[F1, algebra]

1.2 Put $u:=2\log\phi$, so $h=e^{2u}\widetilde h$, and let
$C^k{}_{ij}:=\Gamma[h]^k{}_{ij}-\widetilde\Gamma^k{}_{ij}$. Substitute
$h_{ij}=e^{2u}\widetilde h_{ij}$ and $h^{ij}=e^{-2u}\widetilde h^{ij}$ in
[F4]; using
$\partial_i(e^{2u}\widetilde h_{j\ell})
=e^{2u}(2u_i\widetilde h_{j\ell}+\partial_i\widetilde h_{j\ell})$
then gives
$$C^k{}_{ij}=\delta_i^ku_j+\delta_j^ku_i-\widetilde h_{ij}u^k,\qquad u_i:=\widetilde D_i u,\quad u^k:=\widetilde h^{k\ell}u_\ell.$$
By the affine-connection Leibniz rule,
$D_{\partial_i}(f\partial_a)=(\partial_i f)\partial_a
+f\Gamma^c{}_{ia}\partial_c$. Applying this in the curvature definition [F1]
and using $[\partial_i,\partial_j]=0$ gives
$R[\Gamma]^a{}_{bij}=\partial_i\Gamma^a{}_{jb}-\partial_j\Gamma^a{}_{ib}
+\Gamma^a{}_{i\ell}\Gamma^\ell{}_{jb}-\Gamma^a{}_{j\ell}\Gamma^\ell{}_{ib}$.
The difference of two affine connections is tensorial, since the derivative
terms in their Leibniz rules cancel. For this type $(1,2)$ tensor,
$$\widetilde D_iC^a{}_{jb}=\partial_iC^a{}_{jb} +\widetilde\Gamma^a{}_{i\ell}C^\ell{}_{jb} -\widetilde\Gamma^\ell{}_{ij}C^a{}_{\ell b} -\widetilde\Gamma^\ell{}_{ib}C^a{}_{j\ell}.$$
Substituting $\Gamma[h]=\widetilde\Gamma+C$ into the curvature formula,
the terms linear in $C$ are $\widetilde D_iC^a{}_{jb}-
\widetilde D_jC^a{}_{ib}$: the two terms containing
$\widetilde\Gamma^\ell{}_{ij}$ cancel because the lower Christoffel indices
are symmetric, and the remaining mixed terms pair with the displayed two
covariant-derivative terms. The quadratic terms in $C$ remain, giving
$R[h]^a{}_{bij}=\widetilde R^a{}_{bij}
+\widetilde D_iC^a{}_{jb}-\widetilde D_jC^a{}_{ib}
+C^a{}_{i\ell}C^\ell{}_{jb}-C^a{}_{j\ell}C^\ell{}_{ib}$.
Contracting the output and first direction slots gives
$$\operatorname{Ric}(h)_{ij}=\widetilde{\operatorname{Ric}}_{ij} +\widetilde D_kC^k{}_{ij}-\widetilde D_jC^k{}_{ik} +C^k{}_{k\ell}C^\ell{}_{ij}-C^k{}_{j\ell}C^\ell{}_{ik}.$$
Directly contracting the displayed $C$ gives
$\widetilde D_kC^k{}_{ij}=2\widetilde D_i u_j-\widetilde h_{ij}\widetilde\Delta u$,
$C^k{}_{ik}=3u_i$, and
$\widetilde D_jC^k{}_{ik}=3\widetilde D_j u_i$. The two quadratic terms expand to
$C^k{}_{k\ell}C^\ell{}_{ij}=6u_i u_j-3\widetilde h_{ij}|du|_{\widetilde h}^2$
and
$C^k{}_{j\ell}C^\ell{}_{ik}=5u_i u_j-2\widetilde h_{ij}|du|_{\widetilde h}^2$.
By [F4] the symbols $\widetilde\Gamma^k{}_{ij}$ are symmetric in $i,j$; hence
$\widetilde D_i u_j-\widetilde D_j u_i
=\partial_i\partial_j u-\partial_j\partial_i u=0$ by [F7]. Substitution gives
$$\operatorname{Ric}(h)_{ij}=\widetilde{\operatorname{Ric}}_{ij} -\widetilde D_i u_j+u_i u_j -(\widetilde\Delta u+|du|_{\widetilde h}^2)\widetilde h_{ij}.$$
Tracing with $h^{ij}=\phi^{-4}\widetilde h^{ij}$ gives
$R(h)=\phi^{-4}(\widetilde R-4\widetilde\Delta u-2|du|_{\widetilde h}^2)$.
Since $u=2\log\phi$, [F8, F9] give
$u_i=2\phi^{-1}\partial_i\phi$. Differentiating once more by [F10] gives
$\partial_i\partial_j u=2\phi^{-1}\partial_i\partial_j\phi-
2\phi^{-2}(\partial_i\phi)(\partial_j\phi)$. Substitution in the coordinate
Laplacian yields
$$\widetilde\Delta u=2\phi^{-1}\widetilde\Delta\phi- 2\phi^{-2}|d\phi|_{\widetilde h}^2,$$
with the minus sign applying to the second term. [F8, F9, F10] also give
$|du|_{\widetilde h}^2=4\phi^{-2}|d\phi|_{\widetilde h}^2$. The
gradient-square terms cancel, so
$$R(h)=\phi^{-5}(-8\widetilde\Delta\phi+\widetilde R\,\phi).$$
[F1, F4, F5, F6, F7, F8, F9, F10, algebra]

2.1 Raise both indices of $A_{ij}$ with $h$ to get
$A^{ij}=\phi^{-10}\widetilde\sigma^{ij}$. Apply the tensor-product derivative
rule [F6] to $A=A^{k j}\partial_k\otimes\partial_j$:
$(D_iA)^{k j}=\partial_iA^{k j}+\Gamma[h]^k{}_{i\ell}A^{\ell j}
+\Gamma[h]^j{}_{i\ell}A^{k\ell}$, with the same formula for $\widetilde D$.
Subtracting cancels the ordinary derivative and gives
$$D_iA^{ij}=\widetilde D_iA^{ij}+C^i{}_{ik}A^{kj}+C^j{}_{ik}A^{ik}.$$
Metric compatibility [F5, F6] gives $D_i h^{k\ell}=0$ and
$\widetilde D_i\widetilde h^{k\ell}=0$: apply the dual-pairing rule to
$h^{k\ell}h_{\ell m}=\delta^k_m$ and use $D h=0$ (and likewise for
$\widetilde h$). The chain and quotient rules give
$\partial_i\phi^{-1}=-\phi^{-2}\partial_i\phi$; applying the product rule to
ten factors and using [F11] gives
$\partial_i\phi^{-10}=10\phi^{-9}(-\phi^{-2}\partial_i\phi)
=-10\phi^{-11}\partial_i\phi$. Now
$C^i{}_{ik}=6\phi^{-1}\partial_k\phi$, and, because
$\widetilde\sigma$ is symmetric and trace-free,
$C^j{}_{ik}\widetilde\sigma^{ik}=4\phi^{-1}\partial_i\phi\,\widetilde\sigma^{ij}$;
$\widetilde D_i(\phi^{-10}\widetilde\sigma^{ij})$ contributes
$-10\phi^{-11}\partial_i\phi\,\widetilde\sigma^{ij}
+\phi^{-10}\widetilde D_i\widetilde\sigma^{ij}$, so the three conformal
gradient terms cancel. By metric compatibility and the TT condition,
$$\widetilde D_i\widetilde\sigma^{ij} =\widetilde h^{j\ell}\widetilde h^{ik}\widetilde D_i\widetilde\sigma_{k\ell} =\widetilde h^{j\ell}(\operatorname{div}_{\widetilde h}\widetilde\sigma)_\ell=0.$$
Therefore $D_iA^{ij}=0$. Lowering the free index with the metric-compatible
connection gives
$h_{j\ell}D_iA^{i\ell}=D_i(h_{j\ell}A^{i\ell})
=D_iA^i{}_j=h^{ik}D_iA_{kj}=0$, so
$\operatorname{div}_hA=0$. The pure trace part contributes
$h^{ik}D_i((\tau/3)h_{kj})-D_j\tau=0$, because $D h=0$ by [F5, F6] and
$\tau$ is constant by [F1]. Therefore
$\mathcal M(h,K)=0$.
[F1, F3, F5, F6, F8, F10, F11, step 1.2, algebra]

3.1 By [F3] and steps 1.1 and 1.2,
$$\mathcal H(h,K)=\phi^{-5}(-8\widetilde\Delta\phi+\widetilde R\,\phi) +\frac{2}{3}\tau^2-\phi^{-12}|\widetilde\sigma|_{\widetilde h}^2.$$
Multiplying by $\phi^5>0$ is reversible and gives exactly the scalar equation
in the Statement. The momentum residual is already zero by step 2.1, so
simultaneous satisfaction of both vacuum constraints is equivalent to that
scalar equation. This is a deduction about the constraint equations only; it
does not assert a solution of the nonlinear equation for arbitrary free data.
[A1, F1, F2, F3, step 1.1, step 1.2, step 2.1, algebra] ∎

## Remarks

The conformal weight is attached to the covariant TT tensor
$\widetilde\sigma_{ij}$: after raising both indices with $h$, its weight is
$\phi^{-10}$, and its one-index divergence is
$\phi^{-6}\widetilde D^i\widetilde\sigma_{ij}$. No general Yamabe, non-CMC,
puncture, matter, or conformal-thin-sandwich existence claim follows.
