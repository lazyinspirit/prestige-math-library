---
id: pthm-em-action-gauge-source-compatibility
kind: physics-theorem
title: "Compact gauge variation is boundary-free for conserved source"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 17
deps: [def-em-field-action-definition,
       pthm-em-charge-continuity,
       def-distribution,
       def-distributional-derivative,
       lem-em-fundamental-variation-lemma,
       pthm-em-tensor-maxwell-equivalence,
       def-em-electromagnetic-tensor,
       def-em-sources,
       def-em-lab-geometry,
       def-regular-distribution-from-a-locally-integrable-function,
       thm-distributional-differentiation-is-continuous-and-commutes,
       def-test-function-space-d-of-an-open-set,
       thm-clairaut-schwarz-mixed-partials,
       def-divergence-and-curl-of-a-c1-vector-field,
       thm-linearity-of-the-lebesgue-integral-on-l-one,
       def-directional-and-partial-derivatives,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-integral-over-a-measurable-set,
       def-countable-choice]
dependency_roles:
  def-em-field-action-definition: formulation-prerequisite
  pthm-em-charge-continuity: physical-result
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  lem-em-fundamental-variation-lemma: mathematical-premise
  pthm-em-tensor-maxwell-equivalence: physical-result
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional statement about the smooth finite-region action: for a smooth prescribed four-current on a bounded chart region, the exact gauge difference of the field action under compactly supported smooth gauge parameters, and the equivalence between invariance under all compact gauges and conservation of the four-current, including the Maxwell-compatible instantiation through charge continuity and the distributional reading of the pairing. Excluded: derivation of the field equations from gauge invariance, stationarity conclusions, global or topological obstructions, Noether machinery, and rough-source products."
sources:
  references:
    - title: "David Tong, Electromagnetism (University of Cambridge Part II Mathematical Tripos), Chapter 5, §5.5.3"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf"
      locator: "printed pp. 125-126, the gauge-shift paragraph after eqs. (5.42)-(5.43) ($S\\to S-\\tfrac1c\\int\\chi\\,\\partial_\\mu J^\\mu$, invariant iff $\\partial_\\mu J^\\mu=0$)"
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields (Course of Theoretical Physics vol. 2, English text, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§28 printed pp. 69-71 (four-dimensional current) and §29 printed pp. 71-73, eqs. (29.1)-(29.4) (continuity equation)"
    - title: "James Binney, Classical Fields (University of Oxford lecture course 2006-2007, complete 95-page notes)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/classf.pdf"
      locator: "§3.6-§3.7 printed pp. 29-33, eqs. (3.35)-(3.39) (interaction term and charge conservation)"
proof_strategy: direct
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$,
[[def-countable-choice]]), inherited through the componentwise
fundamental-variation step of [[lem-em-fundamental-variation-lemma]] and
through [[thm-distributional-differentiation-is-continuous-and-commutes]]. Let
$U,N,A,j,F,S$ and the constants $c,\mu_0,\varepsilon_0$ be as in clauses (a)-(b)
of [[def-em-field-action-definition]]: $U$ bounded open with $\overline U$
compact in the laboratory chart image $cI\times\Omega$, $N$ an open
neighbourhood of $\overline U$, $A$ and $j$ smooth on $N$,
$F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$, $j=(c\rho,J)$ with the
source fields of [[def-em-sources]], and
$S[A]=c^{-1}\int_U\bigl[-(4\mu_0)^{-1}F_{\mu\nu}F^{\mu\nu}+j^\nu A_\nu\bigr]d\lambda$.
For $\chi\in C_c^\infty(U;\mathbb R)$ write $\partial^\sharp\chi$ for the
vector field with contravariant components
$(\partial^\sharp\chi)^\mu:=\partial^\mu\chi=\eta^{\mu\nu}\partial_\nu\chi$
([[def-test-function-space-d-of-an-open-set]],
[[def-directional-and-partial-derivatives]]). It is a compactly supported
smooth field variation. Thus $A^\mu\mapsto A^\mu+\partial^\mu\chi$ lowers to
$A_\nu\mapsto A_\nu+\partial_\nu\chi$; $A+\partial^\sharp\chi$ denotes this
vector addition.

(a) [Exact gauge difference, no boundary term] For every such $\chi$ one has
$F_{\mu\nu}(A+\partial^\sharp\chi)=F_{\mu\nu}(A)$ on $U$, because
$\partial_\mu\partial_\nu\chi-\partial_\nu\partial_\mu\chi=0$ for the smooth
$\chi$ ([[thm-clairaut-schwarz-mixed-partials]]); consequently the field term
of $S$ is unchanged and

$$S[A+\partial^\sharp\chi]-S[A]=c^{-1}\int_Uj^\mu\,\partial_\mu\chi\,d\lambda=-c^{-1}\int_U(\partial_\mu j^\mu)\,\chi\,d\lambda,$$

the second equality being the distributional integration-by-parts identity for
the locally integrable fields $j^\mu$ and the smooth compactly supported
$\chi$ ([[def-distributional-derivative]],
[[def-regular-distribution-from-a-locally-integrable-function]],
[[thm-distributional-differentiation-is-continuous-and-commutes]]); no
boundary term arises precisely because $\chi$ is compactly supported in $U$.

(b) [Equivalence for smooth sources] If $\partial_\mu j^\mu=0$ on $U$ (the
source is conserved), then $S[A+\partial^\sharp\chi]=S[A]$ for every
$\chi\in C_c^\infty(U;\mathbb R)$. Conversely, if
$S[A+\partial^\sharp\chi]=S[A]$ for every such $\chi$, then
$\partial_\mu j^\mu=0$ pointwise on $U$: the function $\partial_\mu j^\mu$ is
continuous on the open $U$ and pairs to zero against every compactly supported
smooth $\chi$, so [[lem-em-fundamental-variation-lemma]] applies. Hence for
smooth prescribed sources the invariance of the field action under all compact
gauge variations is equivalent to the conservation of the four-current.

(c) [Maxwell-compatible sources] Suppose in addition that the field pair
$(E,B)$ represented by $A$ through the potential dictionary of clause (c) of
[[def-em-electromagnetic-tensor]] and the source fields $(\rho,J)$ satisfy the
smooth branch of the vacuum Maxwell equations on $U$ (equivalently, by clause
(a) of [[pthm-em-tensor-maxwell-equivalence]], the tensor system
$\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$ together with the cyclic identity). Then
clause (a) of [[pthm-em-charge-continuity]] gives
$\partial_t\rho+\operatorname{div}J=0$ on $U$
([[def-divergence-and-curl-of-a-c1-vector-field]]), which in the chart reads
$\partial_\mu j^\mu=\partial_0(c\rho)+\operatorname{div}J=c^{-1}\partial_t(c\rho)+\operatorname{div}J=0$;
hence $S[A+\partial^\sharp\chi]=S[A]$ for every compact gauge variation.

(d) [Distributional reading] If $j^\mu$ is a distribution on $U$
([[def-distribution]]), the gauge-difference pairing
$c^{-1}\langle j^\mu,\partial_\mu\chi\rangle$ is defined for every test
function $\chi\in C_c^\infty(U;\mathbb R)$ and equals
$-c^{-1}\langle\partial_\mu j^\mu,\chi\rangle$ by the signed definition of the
distributional derivative; hence the pairing vanishes for every compact gauge
variation if and only if $\partial_\mu j^\mu=0$ as a distribution. This is a
statement about the pairing only: the smooth $j$ of the definition is retained
whenever the functional $S$ itself is used, and no products of distributions
are formed.

Scope: the item computes the gauge variation of the field action and its
compatibility with source conservation; it does not derive the field equations
from gauge invariance, does not assert that conservation of a source implies
stationarity, does not treat global or topological obstructions, and uses no
Noether machinery.

## Facts & Assumptions

**Given:** Axiom of Countable Choice; the bounded open
$U\subseteq cI\times\Omega$ with $\overline U$ compact in the chart image, the
open neighbourhood $N$, and the smooth $A,j:N\to\mathbb R^4$ of the
field-action definition; the source convention $j=(c\rho,J)$; the compactly
supported smooth gauge direction $\partial^\sharp\chi$ of $\chi\in
C_c^\infty(U;\mathbb R)$; and the pairing framework of the distributions on
$U$.

[F1] The field action is
$S[A]=c^{-1}\int_U\bigl[-(4\mu_0)^{-1}F_{\mu\nu}F^{\mu\nu}+j^\nu A_\nu\bigr]d\lambda$
with $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$,
$F^{\mu\nu}=\eta^{\mu\alpha}\eta^{\nu\beta}F_{\alpha\beta}$ and the admissible
variations $C_c^\infty(U;\mathbb R^4)$ ([[def-em-field-action-definition]]).

[F2] The test space $\mathcal D(U)=C_c^\infty(U;\mathbb C)$ consists of smooth
functions whose support is a compact subset of $U$, and all constructions may
be restricted to real scalars ([[def-test-function-space-d-of-an-open-set]]).

[F3] Coordinate partial derivatives $\partial_\mu$ are the directional
derivatives in the standard directions
([[def-directional-and-partial-derivatives]]).

[F4] The component dictionary of the electromagnetic two-form fixes
$\eta=\operatorname{diag}(-1,1,1,1)$, $F_{00}=0$, $F_{0i}=-E_i/c$,
$F_{ij}=\epsilon_{ijk}B_k$ and $F_{ab}=-F_{ba}$
([[def-em-electromagnetic-tensor]] (a)).

[F5] If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then
$\partial_i\partial_jf=\partial_j\partial_if$ for every pair of coordinate
indices ([[thm-clairaut-schwarz-mixed-partials]]).

[F6] The Lebesgue integral is linear on $L^1$
([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F7] For open $\Omega$, a locally integrable $f$ has the regular functional
$\langle u_f,\varphi\rangle=\int_\Omega f\varphi\,dx$
([[def-regular-distribution-from-a-locally-integrable-function]]).

[F8] Distributional derivatives commute and, assuming Countable Choice, if
$f\in C^k$ then $\partial^\alpha u_f=u_{\partial^\alpha f}$: distributional
differentiation extends classical smooth differentiation
([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F9] Distributional derivatives are defined by
$\langle\partial^\alpha u,\varphi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle$
([[def-distributional-derivative]]).

[F10] If a continuous $g:U\to\mathbb R^m$ on an open $U\subseteq\mathbb R^n$
satisfies $\int_U\langle g,k\rangle\,d\lambda=0$ for every
$k\in C_c^\infty(U;\mathbb R^m)$, then $g=0$ on $U$
([[lem-em-fundamental-variation-lemma]]).

[F11] Clause (a) of the charge-continuity theorem states that for jointly $C^2$
fields and $C^1$ sources satisfying the smooth branch of the vacuum Maxwell
equations, the continuity equation
$\partial_t\rho+\operatorname{div}J=0$ holds pointwise
([[pthm-em-charge-continuity]]).

[F12] The four-current convention is $j=(c\rho,J)$, so $j^0=c\rho$ and
$j^i=J^i$ ([[def-em-sources]]).

[F13] The divergence is
$\operatorname{div}J=\partial_1J_1+\partial_2J_2+\partial_3J_3$ for a $C^1$
vector field $J$ on an open subset of $\mathbb R^3$
([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F14] The laboratory chart has $x^0=ct$
([[def-em-lab-geometry]]).

[F15] Clause (a) of the tensor-equivalence theorem states that the four
smooth-branch laboratory equations hold if and only if
$\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$ together with the cyclic identity hold for
the fixed component dictionary ([[pthm-em-tensor-maxwell-equivalence]]).

[F16] A distribution on an open $\Omega\subseteq\mathbb R^n$ is a continuous
complex-linear map $u:\mathcal D(\Omega)\to\mathbb C$, with the pairing linear
in both arguments ([[def-distribution]]).

[F17] Countable Choice $\mathrm{AC}_\omega$ is the statement that every
sequence of nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

**Proof technique:** direct; the gauge direction is an admissible compact
variation, the field term is invariant by the commuting mixed partials of
$\chi$, and the source term is evaluated first as an integral and then through
the signed distributional pairing.

1.1 For $\chi\in C_c^\infty(U;\mathbb R)$ the components $(\partial^\sharp\chi)^\mu=\eta^{\mu\nu}\partial_\nu\chi$ are smooth on $U$ by [F4] and [F3], and their support is contained in the compact set $\operatorname{supp}\chi\subseteq U$ by [F2], so $\partial^\sharp\chi\in C_c^\infty(U;\mathbb R^4)$ is an admissible field variation of [F1]; moreover $\eta_{\nu\mu}\eta^{\mu\alpha}=\delta_\nu^\alpha$ for $\eta=\operatorname{diag}(-1,1,1,1)$ by [F4], so lowering gives $(A+\partial^\sharp\chi)_\nu=A_\nu+\partial_\nu\chi$. [given, F1, F2, F3, F4]

2.1 Since $\chi$ is smooth, hence $C^2$, [F5] gives $\partial_\mu\partial_\nu\chi=\partial_\nu\partial_\mu\chi$ on $U$; therefore $F_{\mu\nu}(A+\partial^\sharp\chi)=\partial_\mu(A_\nu+\partial_\nu\chi)-\partial_\nu(A_\mu+\partial_\mu\chi)=F_{\mu\nu}(A)+\partial_\mu\partial_\nu\chi-\partial_\nu\partial_\mu\chi=F_{\mu\nu}(A)$ on $U$ by step 1.1 and [F1], so the quadratic field term of $S$ is unchanged along the gauge path. [step 1.1, F1, F4, F5]

3.1 Because the field term is unchanged by step 2.1, the difference of the functionals is the difference of the source terms, and linearity [F6] of the integral gives $S[A+\partial^\sharp\chi]-S[A]=c^{-1}\int_Uj^\nu\bigl((A+\partial^\sharp\chi)_\nu-A_\nu\bigr)d\lambda=c^{-1}\int_Uj^\mu\partial_\mu\chi\,d\lambda$ by step 1.1; the integrand is smooth and compactly supported in $U$, so the integral is finite. [step 2.1, F1, F6]

4.1 Each $j^\mu$ is smooth, hence locally integrable, with regular distribution $\langle u_{j^\mu},\varphi\rangle=\int_Uj^\mu\varphi\,d\lambda$ by [F7]; the signed definition [F9] gives $\langle\partial_\mu j^\mu,\chi\rangle=-\langle j^\mu,\partial_\mu\chi\rangle$, and [F8] identifies the distributional derivative of $j^\mu$ with the classical one, so $\int_U(\partial_\mu j^\mu)\chi\,d\lambda=-\int_Uj^\mu\partial_\mu\chi\,d\lambda$ componentwise for every $\chi\in C_c^\infty(U;\mathbb R)$; substituting into step 3.1 gives $S[A+\partial^\sharp\chi]-S[A]=-c^{-1}\int_U(\partial_\mu j^\mu)\chi\,d\lambda$, with no boundary term because $\chi$ is compactly supported in $U$ by [F2]. This is clause (a). [step 3.1, F2, F7, F8, F9, algebra]

5.1 If $\partial_\mu j^\mu=0$ on $U$, the identity of step 4.1 gives $S[A+\partial^\sharp\chi]=S[A]$ for every $\chi\in C_c^\infty(U;\mathbb R)$, which is the forward direction of clause (b). [step 4.1]

6.1 Conversely, suppose $S[A+\partial^\sharp\chi]=S[A]$ for every $\chi\in C_c^\infty(U;\mathbb R)$; by step 4.1 the continuous function $g:=\partial_\mu j^\mu$ on the open $U$ (sum of the smooth derivatives $\partial_\mu j^\mu$) satisfies $\int_Ug\chi\,d\lambda=0$ for every $\chi\in C_c^\infty(U;\mathbb R)$, so [F10] with $m=1$ gives $g=0$ on $U$, that is $\partial_\mu j^\mu=0$ pointwise; hence compact-gauge invariance and conservation are equivalent for smooth sources, which is clause (b). [step 5.1, F10, algebra]

7.1 Under the additional hypothesis of clause (c), the represented fields and sources lie in the class of [F11], so $\partial_t\rho+\operatorname{div}J=0$ holds pointwise on $U$; in the chart $x^0=ct$ of [F14] the four-current identity reads $\partial_\mu j^\mu=\partial_0j^0+\partial_iJ^i=c^{-1}\partial_t(c\rho)+\operatorname{div}J=\partial_t\rho+\operatorname{div}J=0$ by [F12] and [F13], where the equivalence of the Maxwell hypothesis with the tensor system is [F15]; step 6.1 then gives $S[A+\partial^\sharp\chi]=S[A]$ for every compact gauge variation, as asserted in clause (c). [step 6.1, F11, F12, F13, F14, F15, algebra]

8.1 If $j^\mu$ is a distribution on $U$ in the sense of [F16], the signed definition [F9] applied coordinatewise gives $\langle j^\mu,\partial_\mu\chi\rangle=-\langle\partial_\mu j^\mu,\chi\rangle$ for every test function $\chi$, so the gauge-difference pairing $c^{-1}\sum_\mu\langle j^\mu,\partial_\mu\chi\rangle$ equals $-c^{-1}\langle\partial_\mu j^\mu,\chi\rangle$ and vanishes for every compact gauge variation exactly when the distribution $\partial_\mu j^\mu$ is zero, which is clause (d); no product of distributions is formed, and whenever the functional $S$ of step 3.1 is used the smooth $j$ of [F1] is retained, while the only choice assumption is the inherited Countable Choice of [F17]. [given, step 4.1, F2, F9, F16, F17] ∎

## Source notes

The gauge-shift computation is Tong §5.5.3 (printed pp. 125-126), which
computes $S\to S-\tfrac1c\int\chi\,\partial_\mu J^\mu$ and reads invariance as
$\partial_\mu J^\mu=0$; Landau–Lifshitz §§28-29 and Binney §§3.6-3.7 supply the
four-current, continuity and interaction-term context. The exact boundary-free
formulation here uses the framework's own compact-support hypothesis and the
published distribution interface; the converse direction replaces the
sources' informal 'arbitrary gauge direction at a point' step by the
fundamental variation lemma, and no Noether formalism is adopted.
