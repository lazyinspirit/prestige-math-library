---
id: pthm-em-action-maxwell-variation
kind: physics-theorem
title: "Action stationarity implies the inhomogeneous Maxwell equations"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 16
deps: [post-em-stationary-action-model,
       lem-em-compact-field-variation,
       def-em-field-action-definition,
       pthm-em-tensor-maxwell-equivalence,
       def-em-electromagnetic-tensor,
       def-em-si-conventions,
       def-em-sources,
       thm-clairaut-schwarz-mixed-partials,
       def-directional-and-partial-derivatives,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-countable-choice]
dependency_roles:
  post-em-stationary-action-model: physical-assumption
  lem-em-compact-field-variation: mathematical-premise
  def-em-field-action-definition: formulation-prerequisite
  pthm-em-tensor-maxwell-equivalence: physical-result
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional statement about a smooth four-potential and smooth prescribed four-current on a bounded chart region: stationarity of the adopted field action under all compactly supported smooth variations is equivalent to the inhomogeneous tensor equation, and stationarity implies the full smooth-branch Maxwell equations for the represented field pair and source. Excluded: existence of stationary fields, boundary and decay conditions, weak and distributional branches, singular sources, non-potential-represented fields, and any empirical claim."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David Tong, Electromagnetism (University of Cambridge Part II Mathematical Tripos), Chapter 5, §5.5.3"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf"
      locator: "printed pp. 125-126, the variation display of eq. (5.42) and the sourced eq. (5.43), including 'only half the Maxwell equations from the variation of the action'"
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields (Course of Theoretical Physics vol. 2, English text, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§30 printed pp. 73-75, eq. (30.1): variation of the action with fixed current and the resulting second pair of Maxwell equations"
    - title: "James Binney, Classical Fields (University of Oxford lecture course 2006-2007, complete 95-page notes)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/classf.pdf"
      locator: "§3.6 printed pp. 29-31, eqs. (3.29)-(3.36) (variation of $L_{\\rm vac}$ and the sourced field equations)"
proof_strategy: direct
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$,
[[def-countable-choice]]), inherited from
[[lem-em-compact-field-variation]]. Let $U\subseteq cI\times\Omega$, $N$, the
smooth fields $A,j$ on $N$, the components $A_\nu$,
$F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$, $F^{\mu\nu}$, the source
convention $j=(c\rho,J)$, the constants $c,\mu_0,\varepsilon_0$ and the field
action $S[A]=c^{-1}\int_U\bigl[-(4\mu_0)^{-1}F_{\mu\nu}F^{\mu\nu}+j^\nu A_\nu\bigr]d\lambda$
be as in clauses (a)-(b) of [[def-em-field-action-definition]] with the units
of [[def-em-si-conventions]].

Then the following are equivalent: (i) $A$ is stationary for $S$ under all
$h\in C_c^\infty(U;\mathbb R^4)$, i.e. the adopted field equation of
[[post-em-stationary-action-model]] (i); (ii)
$\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$ at every point of $U$ for every
$\nu\in\{0,1,2,3\}$.

Consequently, if $A$ is stationary then:

(a) [Inhomogeneous tensor equations] $\partial_\mu F^{\mu\nu}=-\mu_0 j^\nu$ on
$U$;

(b) [Homogeneous tensor equations]
$\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}=0$
on $U$, since $A$ is smooth and its mixed partial derivatives commute;

(c) [Laboratory Maxwell equations] define $\varphi:=-cA_0$, the spatial
potential vector $\mathbf A:=(A_1,A_2,A_3)$,
$E:=-\nabla\varphi-\partial_t\mathbf A$ and
$B:=\operatorname{curl}\mathbf A$ by clause (c) of
[[def-em-electromagnetic-tensor]], and $(\rho,J)$ by $j=(c\rho,J)$
([[def-em-sources]]); then on $U$ the four smooth-branch Maxwell equations
hold, equivalently the eight scalar equations (TM1)-(TM2) of
[[pthm-em-tensor-maxwell-equivalence]] hold with these fields and sources,
i.e. $\operatorname{div}E=\rho/\varepsilon_0$,
$\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and
$\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$.

The statement concerns a given smooth pair $(A,j)$ on the declared region: it
asserts no existence of a stationary field, imposes no boundary or decay
condition, and excludes the weak, distributional, singular-support and
non-potential-represented branches. The equivalence is conditional on the
adopted stationary-action postulate and makes no empirical claim.

## Facts & Assumptions

**Given:** Axiom of Countable Choice $\mathrm{AC}_\omega$; the bounded open
$U\subseteq cI\times\Omega$ with closure compact in the chart image, the open
neighbourhood $N$ of $\overline U$, and the smooth maps $A,j:N\to\mathbb R^4$
of the field-action definition; the component and potential dictionaries of
the electromagnetic two-form; the source convention $j=(c\rho,J)$; the
constants $c,\mu_0>0$ and $\varepsilon_0=(\mu_0c^2)^{-1}$; and the
field-action functional $S$ with its compact-variation stationarity predicate.

[F1] The field-action definition fixes
$$S[A]=c^{-1}\int_U\Bigl[-\frac{1}{4\mu_0}F_{\mu\nu}F^{\mu\nu}+j^\nu A_\nu\Bigr]d\lambda$$
with $F_{\mu\nu}:=\partial_\mu A_\nu-\partial_\nu A_\mu$,
$F^{\mu\nu}:=\eta^{\mu\alpha}\eta^{\nu\beta}F_{\alpha\beta}$,
$A_\nu:=\eta_{\nu\mu}A^\mu$ and $\eta=\operatorname{diag}(-1,1,1,1)$ on
$N\supseteq\overline U$, its admissible field variations
$h\in C_c^\infty(U;\mathbb R^4)$, the quadratic expansion along $A+sh$, and
the stationarity predicate; it identifies $S[A]=c^{-1}S_{\rm math}[A]$ at
$\kappa=\mu_0$, $J=j$ ([[def-em-field-action-definition]]).

[F2] The compact-variation lemma states (clause (c)) that for bounded open
$U\subseteq\mathbb R^4$, $N\supseteq\overline U$ open, $\kappa>0$ and smooth
$A,J:N\to V=\mathbb R^4$, the field $A$ is stationary for its functional
$S_{\rm math}$ under all $h\in C_c^\infty(U;V)$ if and only if
$\partial_\mu F^{\mu\nu}=-\kappa J^\nu$ for every $\nu$ on $U$, all
derivatives being classical partial derivatives of the smooth field
([[lem-em-compact-field-variation]]).

[F3] Clause (a) of the tensor-equivalence theorem states that, for jointly
$C^1$ fields with the additional derivatives required by each equation
existing and continuously, continuous sources, $F_{0i}=-E_i/c$,
$F_{ij}=\epsilon_{ijk}B_k$, $F^{0i}=E_i/c$, $j=(c\rho,J)$ and
$\varepsilon_0=(\mu_0c^2)^{-1}$, the four smooth-branch equations hold if and
only if the systems
$\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$ and
$\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}=0$
hold ([[pthm-em-tensor-maxwell-equivalence]]).

[F4] The component dictionary of the electromagnetic two-form is
$F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, $F^{0i}=E_i/c$,
$F^{i0}=-E_i/c$, $F^{ij}=\epsilon_{ijk}B_k$, with
$\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-em-electromagnetic-tensor]] (a)).

[F5] The potential dictionary of the same definition states that if a
$C^1$ covector field $A_\mu$ on $U$ satisfies
$F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$, then $E,B$ recovered from
$F$ by the component dictionary obey $E=-\nabla\varphi-\partial_tA$ and
$B=\operatorname{curl}A$ with $\varphi:=-cA_0$ and
$A:=(A_1,A_2,A_3)$ ([[def-em-electromagnetic-tensor]] (c)).

[F6] The four-current convention is $j:=(c\rho,J)$, so $j^0=c\rho$ and
$j^i=J^i$, with the charge parameter $q\in\mathbb R$ and smooth source fields
of the framework ([[def-em-sources]]).

[F7] The electric constant is
$\varepsilon_0:=(\mu_0c^2)^{-1}$, so that $\mu_0c^2\varepsilon_0=1$
([[def-em-si-conventions]]).

[F8] If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then
$\partial_i\partial_jf=\partial_j\partial_if$ for every pair of coordinate
indices ([[thm-clairaut-schwarz-mixed-partials]]).

[F9] Countable Choice $\mathrm{AC}_\omega$ is the statement that every
sequence of nonempty sets has a choice function
([[def-countable-choice]]).

[F10] The adopted field equation of the stationary-action postulate states
that a smooth field $A:N\to\mathbb R^4$ on $U$ is dynamically admissible
exactly when it is stationary for the field action $S[A]$ under all
$h\in C_c^\infty(U;\mathbb R^4)$ ([[post-em-stationary-action-model]] (i)).

## Proof

**Proof technique:** direct; identify the physical functional with the
mathematical functional of the compact-variation lemma at $\kappa=\mu_0$,
$J=j$, transport the stationarity equivalence along the positive factor
$c^{-1}$, then translate the two tensor systems into the laboratory equations
through the fixed component dictionary.

1.1 The data of [F1] meet the hypotheses of [F2] at $\kappa:=\mu_0$ and $J:=j$: $U$ is a bounded open subset of $\mathbb R^4$ whose closure is a compact subset of the chart image, $N$ is an open neighbourhood of $\overline U$, $\mu_0>0$ by [F7], and $A,j$ are smooth on $N$; the integrand of [F1] is term-by-term the integrand of [F2] at these parameters, so $S[A]=c^{-1}S_{\rm math}[A]$ and both integrals are finite real numbers by the finiteness clause of [F2]. [given, F1, F2, F7]

2.1 Fix $h\in C_c^\infty(U;\mathbb R^4)$. Clause (a) of [F2] presents $s\mapsto S_{\rm math}[A+sh]=a_0+a_1s+a_2s^2$ with finite real coefficients $a_0=S_{\rm math}[A]$, $a_1=\int_U\bigl(-\mu_0^{-1}F^{\mu\nu}\partial_\mu h_\nu+j^\nu h_\nu\bigr)d\lambda$ and $a_2=\int_U\ell_2\,d\lambda$, hence step 1.1 gives $S[A+sh]=c^{-1}a_0+c^{-1}a_1s+c^{-1}a_2s^2$; in particular the first variation of $S$ at $A$ in the direction $h$ is $c^{-1}a_1$, the first variation of $S_{\rm math}$ multiplied by $c^{-1}>0$. [step 1.1, F1, F2]

2.2 Because $A$ is smooth on the open $N\supseteq U$, every second partial derivative $\partial_\lambda\partial_\mu A_\nu$ exists and is continuous on $U$, so [F8] applies: expanding $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$ from [F1] gives $\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}=(\partial_\lambda\partial_\mu A_\nu-\partial_\lambda\partial_\nu A_\mu)+(\partial_\mu\partial_\nu A_\lambda-\partial_\mu\partial_\lambda A_\nu)+(\partial_\nu\partial_\lambda A_\mu-\partial_\nu\partial_\mu A_\lambda)=0$ on $U$, the six terms cancelling in three commuting pairs. This is clause (b). [step 1.1, F1, F8]

3.1 Since $c^{-1}>0$, one has $c^{-1}a_1=0$ exactly when $a_1=0$; as $h$ was an arbitrary element of $C_c^\infty(U;\mathbb R^4)$ and the two variation classes coincide by [F1] and [F2], the field $A$ is stationary for $S$ in the sense of clause (b) of [F1] if and only if $A$ is stationary for $S_{\rm math}$ in the sense of [F2]. [step 2.1, F1, F2]

4.1 Applying clause (c) of [F2] with $\kappa=\mu_0$, $J=j$ and the field $A$ of step 1.1, the field $A$ is stationary for $S_{\rm math}$ if and only if $\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$ on $U$ for every $\nu\in\{0,1,2,3\}$, the derivatives being classical partial derivatives of the smooth $A$ by [F2]; combined with step 3.1 this proves (i)$\Leftrightarrow$(ii), and it uses $\mathrm{AC}_\omega$ of [F9] exactly through the cited lemma. [step 3.1, F1, F2, F9]

5.1 If $A$ is stationary, then (ii) holds by the equivalence of step 4.1; that consequent statement is clause (a). [step 4.1, given]

6.1 Put $\varphi:=-cA_0$, $\mathbf A:=(A_1,A_2,A_3)$, $E:=-\nabla\varphi-\partial_t\mathbf A$ and $B:=\operatorname{curl}\mathbf A$. Since $A_\mu$ is the lowering of the smooth $A^\mu$ and satisfies $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$ by [F1], clause (c) of the potential dictionary [F5] identifies these $E,B$ with the fields whose component dictionary [F4] reproduces the same $F_{\mu\nu}$ and $F^{\mu\nu}$; the sources $\rho,J$ satisfy $j=(c\rho,J)$ by [F6], and $E,B$ are smooth and $\rho,J$ continuous on $U$. The source convention and the constant identity $\varepsilon_0=(\mu_0c^2)^{-1}$ of [F7] place these data in the class of [F3]; the tensor system (TM1) holds by step 5.1 and the cyclic identity (TM2) by step 2.2, since the equivalence of clause (a) of [F3] is a pointwise component statement it restricts from the laboratory region to the open subset $U$, so that clause yields the four smooth-branch equations $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ on $U$, equivalently the eight scalar equations identified there. This is clause (c). [step 5.1, step 2.2, F3, F4, F5, F6, F7]

7.1 The argument used exactly the smooth class, the fixed component dictionary, the identification $S=c^{-1}S_{\rm math}$ and the positive factor $c^{-1}$; it asserted no existence of a stationary field, imposed no boundary or decay condition, and used no weak, distributional, singular-source or non-potential-represented branch. The equivalence is conditional on the adopted stationarity principle [F10] and makes no empirical claim; Countable Choice enters only through [F2], as declared in the statement. [given, F1, F2, F10, step 4.1] ∎

## Source notes

The variation computation producing the inhomogeneous field equations from
the action is Tong §5.5.3 (printed pp. 125-126), Landau–Lifshitz §30 eq.
(30.1) and Binney §3.6, each in its own conventions; the conversion to the
framework's $(-,+,+,+)$ dictionary, the source coupling $+j^\nu A_\nu$, the
normalisation $c^{-1}$ and the boundary term's disappearance through
compact support are carried out here rather than assumed from the sources.
The homogeneous equations are the closedness of $F=dA$, the structural remark
of Binney §3.6 (printed pp. 30-31) and the 'only half the Maxwell equations'
remark of Tong (printed p. 126).
