---
id: pthm-nrqm-approximations-nondegenerate-perturbation-expansion
aliases: [ nrqm-approximations-nondegenerate-perturbation-expansion ]
kind: physics-theorem
domain: physics
title: "Nondegenerate stationary perturbation of a simple gapped label: first-
  and second-order coefficients and an explicit cubic remainder"
status: published
origin: session
dependency_level: 10
deps:
  [
    def-nrqm-approximations-framework-perturbed-family-model,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    def-nrqm-observables-framework-observable-and-outcome-law,
    thm-kato-rellich,
    thm-nrqm-controlled-dynamics-contour-perturbation-projection,
    thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients,
    thm-nrqm-controlled-dynamics-analytic-perturbation-remainder,
    def-countable-choice
  ]
dependency_roles:
  def-nrqm-approximations-framework-perturbed-family-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  thm-kato-rellich: mathematical-premise
  thm-nrqm-controlled-dynamics-contour-perturbation-projection: mathematical-premise
  thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients: mathematical-premise
  thm-nrqm-controlled-dynamics-analytic-perturbation-remainder: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The stationary perturbation statement for the declared
  perturbed-family model with a simple isolated label: self-adjointness of the
  family for real couplings, existence, uniqueness and reality of the followed
  label inside the gap contour, the exact first- and second-order energy
  coefficients with the reduced inverse of the complementary spectral subspace,
  and the explicit cubic remainder bound on the coupling disk. The theorem
  concerns spectral data of the declared operator family only; it asserts no
  ramping protocol, no branch population, no relaxation, no transition rate and
  no measurement."
empirical_premises: []
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.1
        printed pages 203-205 (PDF pages 211-213): the perturbative expansions
        (9.2)-(9.11), the first-order shift E_b = <E0|Delta|E0> (9.6) and the
        second-order shift (9.11), derived under the non-degeneracy assumption"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 6.6 printed pages 153-159 (PDF pages 165-171): strong and norm
        resolvent convergence and the analytic perturbation consequences for
        bounded perturbations"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework data and the declared perturbed-family model of
[[def-nrqm-approximations-framework-perturbed-family-model]] in the
**simple-label case**: $H_{0}$ is self-adjoint on $D(H_{0})$, $V=V^{*}\in
\mathcal B(\mathfrak H)$ with $v=\|V\|\ge0$, $H(\lambda)=H_{0}+\lambda V$ on
$D(H_{0})$ for real $\lambda$, and $E$ is an isolated eigenvalue of $H_{0}$ of
**multiplicity one** with gap at least $g>0$,
$\operatorname{dist}(E,\sigma(H_{0})\setminus\{E\})\ge g$. Let $\psi_{0}$ be a
normalized eigenvector, $P_{0}\psi_{0}=\psi_{0}$, let
$$S:=\iota_{Q_{0}}\bigl(H_{0}|_{D(H_{0})\cap Q_{0}\mathfrak H}-E\bigr)^{-1}Q_{0}, \qquad Q_{0}=I-P_{0},$$
be the reduced inverse of the model clause (c)(iii). In the branch $v>0$ put
$$R:=\frac{g}{8v}.$$
Then clauses (a)-(e) hold for every real $\lambda$ with $|\lambda|<R$
in this positive-norm branch; clause (f) covers $v=0$ independently of $R$:

(a) $H(\lambda)$ is self-adjoint on $D(H_{0})$; the model's followed label
$E_{\lambda}$ of the contour $|z-E|=g/2$ exists, is the unique spectral value
of $H(\lambda)$ inside that contour, is real, and its spectral projection is
the orthogonal rank-one projection
$P_{\lambda}=E_{H(\lambda)}(\{E_{\lambda}\})$;

(b) the gauge-fixed eigenvector
$$\psi(\lambda):=\frac{P_{\lambda}\psi_{0}}{\langle P_{\lambda}\psi_{0},\psi_{0}\rangle}$$
is analytic in $\lambda$, satisfies $\langle\psi(\lambda),\psi_{0}\rangle=1$
and $(H_{0}+\lambda V)\psi(\lambda)=E_{\lambda}\psi(\lambda)$, and
$$q:=2|\lambda|v/g\le\tfrac14,\qquad \|P_{\lambda}-P_{0}\|\le\tfrac13,\qquad \|\psi(\lambda)\|\le2 ;$$

(c) the model's label identity
$$E_{\lambda}=\bigl\langle (H_{0}+\lambda V)\psi(\lambda),\psi_{0}\bigr\rangle =E+\lambda\langle V\psi(\lambda),\psi_{0}\rangle$$
holds, so the deviation $\lambda\mapsto E_{\lambda}-E$ of the model's energy
label is controlled by the perturbation alone;

(d) the exact coefficients are
$$E'(0)=\langle V\psi_{0},\psi_{0}\rangle,\qquad \psi'(0)=-SV\psi_{0},\qquad E''(0)=-2\langle VSV\psi_{0},\psi_{0}\rangle,$$
with $|E'(0)|\le v$, $\|\psi'(0)\|\le v/g$ and $|E''(0)|\le2v^{2}/g$; the
second-order coefficient involves the whole complementary spectral subspace of
$H_{0}$ through $S$, continuum included;

(e) the cubic remainder obeys
$$\left|E_{\lambda}-E-\lambda E'(0)-\frac{\lambda^{2}}{2}E''(0)\right| \le \frac{Rv\,(|\lambda|/R)^{3}}{1-|\lambda|/R},$$
so at $|\lambda|=R/2$ the bound is $g/32$ and for $|\lambda|\le R/2$ it is at
most $128v^{3}|\lambda|^{3}/g^{2}$;

(f) if $v=0$, that is $V=0$, then $P_{\lambda}=P_{0}$, $E_{\lambda}=E$ and
$\psi(\lambda)=\psi_{0}$ for every real $\lambda$, and no radius involving
division by $v$ is used in this branch;

(g) the theorem is conditional on the strict positive gap, on the multiplicity
one of $E$ and on the boundedness of $V$; it asserts no unbounded or
degenerate perturbation theorem, no time-dependent perturbation, and no
statement about which branch of the family a preparation occupies.

## Facts & Assumptions

**Given:** the declared perturbed-family model in the simple-label case; $E,g,v,R$ and the reduced inverse $S$ as in the statement; a real $\lambda$ with $|\lambda|<R$; the Axiom of Countable Choice.

[F1] **Self-adjointness of bounded perturbations.** For a self-adjoint $A$ and a symmetric $B$ with $D(A)\subseteq D(B)$ and $A$-bound less than one, $A+B$ on $D(A)$ is self-adjoint ([[thm-kato-rellich]]).

[F2] **Contour construction and reality.** Under the hypotheses of the contour theorem ($H_{0}$ self-adjoint on its exact dense domain, $E$ isolated with gap at least $g>0$ and rank-one spectral projection $P_{0}$, $V=V^{*}$ bounded with $v=\|V\|>0$, $q=2|\lambda|v/g<1$): $H_{\lambda}=H_{0}+\lambda V$ is closed and densely defined on $D(H_{0})$ with norm-convergent resolvent series on the contour $\Gamma=\{|z-E|=g/2\}$; the operator $P_{\lambda}=\frac{1}{2\pi i}\oint_{\Gamma}R_{\lambda}(z)\,dz$ is an operator-norm holomorphic rank-one Riesz projection, there is exactly one spectral value $E_{\lambda}$ of $H_{\lambda}$ inside $\Gamma$, of algebraic multiplicity one with $\operatorname{ran}P_{\lambda}=\ker(H_{\lambda} -E_{\lambda})$, and for real $\lambda$ the operator $H_{\lambda}$ is self-adjoint and $P_{\lambda}=E_{H_{\lambda}}(\{E_{\lambda}\})$ is its orthogonal spectral projection ([[thm-nrqm-controlled-dynamics-contour-perturbation-projection]] clauses (a)-(d)).

[F3] **Coefficients and remainder.** Under the hypotheses of [F2] with the reduced inverse $S$ of [[thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients]] and the gauge-fixed $\psi(\lambda)$: on the complex disk $|\lambda|<R=g/(8v)$, $q=2|\lambda|v/g\le1/4$, $\|P_{\lambda}-P_{0}\|\le1/3$, $\|\psi(\lambda)\|\le2$, the identity $E_{\lambda}=\langle(H_{0}+\lambda V)\psi(\lambda),\psi_{0} \rangle=E+\lambda\langle V\psi(\lambda),\psi_{0}\rangle$ holds, the coefficients and bounds of clause (d) hold, and the cubic remainder bound of clause (e) holds; for $v=0$ one has $P_{\lambda}=P_{0}$, $E_{\lambda}=E$, $\psi(\lambda)=\psi_{0}$ ([[thm-nrqm-controlled-dynamics-analytic-perturbation-remainder]] clauses (a)-(c)).

[F4] **Model data.** The model's clause (c) supplies $E_{\lambda}$ and $P_{\lambda}$ exactly as the followed perturbed label and Riesz/spectral projection of the contour theorem, the multiplicity-one hypothesis, the gap at least $g$, the reduced inverse $S$ and the reading of $H(\lambda)$ as the model's sharp energy observable ([[def-nrqm-approximations-framework-perturbed-family-model]]).

## Proof

**Proof technique:** direct; instantiate the supplied contour construction and the supplied remainder theorem at the model's data, with Kato-Rellich for the self-adjointness of the family.

**Given:** the data of the statement and [F1]-[F4].

1.1 [Self-adjointness on $D(H_{0})$] The perturbation $V$ is bounded and symmetric with $D(H_{0})\subseteq D(V)=\mathfrak H$, and the $H_{0}$-bound of $V$ is $0<1$ because $\|Vu\|\le v\|u\|$; hence [F1] gives that $H(\lambda)=H_{0}+\lambda V$ on $D(H_{0})$ is self-adjoint for every real $\lambda$. This is the self-adjointness assertion of (a). [F1, F4, given]

1.2 [Contour, label and projection] In the simple-label case the projection $P_{0}=E_{H_{0}}(\{E\})$ has rank one and the gap hypothesis is $\operatorname{dist}(E,\sigma(H_{0})\setminus\{E\})\ge g$, so [F2] applies for every real $\lambda$ with $2|\lambda|v/g<1$; since $|\lambda|<R=g/(8v)$ gives $q=2|\lambda|v/g<1/4<1$, the conclusions hold: there is exactly one spectral value $E_{\lambda}$ of $H(\lambda)$ inside $|z-E|=g/2$, it has algebraic multiplicity one with range $\ker(H(\lambda)-E_{\lambda})$, $P_{\lambda}$ is holomorphic and rank one, and for real $\lambda$ the projection is the orthogonal spectral projection at the real value $E_{\lambda}$. By [F4] these are exactly the model's followed label and its projection, so clause (a) is proved. [F2, F4, given]

1.3 [Gauge-fixed eigenvector, coefficients and remainder] With the identified objects, [F3] applies on the disk $|\lambda|<R$: $\psi(\lambda)$ is analytic with the displayed normalization and eigenvector equation, the quantitative bounds $q\le1/4$, $\|P_{\lambda}-P_{0}\|\le1/3$, $\|\psi(\lambda)\|\le2$ hold, the label identity of clause (c) holds, and the coefficients, the bounds $|E'(0)|\le v$, $\|\psi'(0)\|\le v/g$, $|E''(0)|\le2v^{2}/g$ and the cubic remainder bound hold. By [F4] the operator $S$ is the model's complementary reduced inverse, so the second-order term involves the whole complementary spectral subspace, continuum included. This proves clauses (b), (c), (d) and (e). [F3, F4, given, algebra]

1.4 [The $v=0$ branch] If $V=0$ then $v=0$ and the family is constant, $H(\lambda)=H_{0}$; [F3] clause (c) gives $P_{\lambda}=P_{0}$, $E_{\lambda}=E$, $\psi(\lambda)=\psi_{0}$ for every real $\lambda$ without using a radius $R$ (no division by $v$ occurs). This is clause (f). [F3, given]

2.1 [Scope] Every hypothesis used above is one of: the model's bounded self-adjoint perturbation and simple gapped label, the strict positive gap $g>0$, multiplicity one, and the choice assumption of the spectral suppliers. No unbounded perturbation, degenerate label, time-dependent coupling, ramping protocol, transition rate, branch population or measurement entered the argument; the objects $E_{\lambda}$, $P_{\lambda}$, $\psi(\lambda)$ are spectral data of the declared family, which is clause (g). [F1, F2, F3, F4, given] ∎

## Remarks

- **Where the continuum enters.** The reduced inverse $S$ acts on the whole complementary subspace $Q_{0}\mathfrak H$, so the second-order coefficient $-2\langle VSV\psi_{0},\psi_{0}\rangle$ automatically includes the contribution of the continuous spectrum of $H_{0}$; the theorem needs no discrete-eigenbasis expansion and no sum over bound states.
- **Determinant of the remainder.** The bound is a genuine cubic bound on the disk of radius $R=g/(8v)$; no uniformity in $\lambda$ beyond that disk is claimed, and the gap enters both the radius and the constant.
