---
id: pthm-qftx-perturbative-yang-mills-st-identity
kind: physics-theorem
title: Conditional Slavnov–Taylor Identity and Counterterm Classification
status: draft
origin: pipeline
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
axiom_base: "ZF + AC_omega inherited through the selected pure SU(2) bundle model; the supplied formal counterterm sequence requires no additional choice."
deps:
  - def-qftx-formal-perturbative-yang-mills-data
  - def-qftx-nonabelian-brst-complex
  - lem-qftx-nonabelian-brst-nilpotence
  - def-qftx-local-brst-cohomology
  - def-qftx-bv-antibracket-master-action
  - lem-qftx-bv-master-equation-brst-nilpotence
  - def-qftx-principal-connection-form
  - lem-qftx-principal-curvature-cartan-bianchi
  - def-qftx-gauge-slice-and-faddeev-popov-operator
  - post-qftx-nonabelian-yang-mills-model
  - pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance
dependency_roles:
  def-qftx-formal-perturbative-yang-mills-data: operational-prerequisite
  def-qftx-nonabelian-brst-complex: mathematical-premise
  lem-qftx-nonabelian-brst-nilpotence: mathematical-premise
  def-qftx-local-brst-cohomology: mathematical-premise
  def-qftx-bv-antibracket-master-action: mathematical-premise
  lem-qftx-bv-master-equation-brst-nilpotence: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-qftx-gauge-slice-and-faddeev-popov-operator: operational-prerequisite
  post-qftx-nonabelian-yang-mills-model: physical-assumption
  pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance: physical-result
proof_strategy: direct
physical_scope: "Formal coefficientwise Slavnov–Taylor identities for the adopted pure SU(2) Yang–Mills perturbation theory, conditional on the QAP and local anomaly exactness; no continuum measure, convergence, nonperturbative existence, or empirical prediction is asserted."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Glenn Barnich, Friedemann Brandt, and Marc Henneaux, Local BRST cohomology in gauge theories"
      url: "https://arxiv.org/pdf/hep-th/0002245"
      locator: "§§2.3–2.4 and §§12.2–12.3: counterterm and anomaly cocycles in the antifield-dependent local complex, and their quotient by local exact terms and total derivatives."
    - title: "Axel Maas, Quantum Field Theory II: Advanced Quantum Field Theory (full lecture notes, 2024)"
      url: "https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/maas_axel/qftii2024.pdf"
      locator: "§4.7.2, printed pp. 92–94, and §§5.2.7–5.2.8, printed pp. 120–124: the formal BRST derivation of Slavnov–Taylor identities and the role of local restoring counterterms after regularization."
verification:
  precheck: pass
---

## Statement
In the axiom base inherited from the adopted model, fix the classical pure $SU(2)$ Yang–Mills model on oriented, time-oriented Minkowski spacetime $M=\mathbb R^{1,3}$ with metric $\eta=\operatorname{diag}(-1,1,1,1)$, its selected smooth right-principal bundle sector $P\to M$, no matter fields, invariant form $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$ on $\mathfrak{su}(2)$, and fixed $g_{\rm YM}>0$. Let $U\subset M$ be a nonempty local trivialization chart, use natural units $c=\hbar=1$, and use the right-action curvature convention $F_A=dA+\tfrac12[A\wedge A]$. The adopted local classical action density is $-\kappa(F_A\wedge *_\eta F_A)/(2g_{\rm YM}^2)$. The local gauge potential $A_\mu$ is even with ghost number $0$ and engineering dimension $1$; the odd ghost $c$ has ghost number $1$ and dimension $0$. Define $D_\mu c=\partial_\mu c+[A_\mu,c]$ and the minimal BRST transformations $sA_\mu=D_\mu c$, $sc=-\tfrac12[c,c]$. When the nonminimal pair is included, let $\bar c$ be odd with ghost number $-1$ and dimension $2$, and $b$ even with ghost number $0$ and dimension $2$, with $s\bar c=b$ and $sb=0$. Antifields have the opposite field parity and ghost number $-1-\operatorname{gh}(\Phi)$, with engineering dimension $\dim\Phi^*=4-\dim\Phi$, so a nonzero $\Phi^*s\Phi$ has density dimension $4$. Use the extended finite-jet local BV/nonminimal horizontal complex of the Formal Perturbative Yang–Mills Renormalization Data definition: its generators are the jets of $A,c,\bar c,b$ and their antifields, $d_H=dx^\mu D_\mu$, and $s=B_{\Gamma_0}$ is the prolonged canonical BV differential, with $s^2=0$ and $sd_H+d_Hs=0$ on the stated domain.

Use the canonical BV antibracket and let the classical BV functional be the pure-gauge extension
$$\Gamma_0=S_0+\int_U d^4x\left(A^{*\mu}_a(D_\mu c)^a+\tfrac12c^*_a[c,c]^a-\bar c^*_ab\right),$$
where the nonminimal term is omitted if that pair is not included, and $S_0$ denotes the adopted classical action on the chosen domain. Assume $\Gamma_0$ is even, has ghost number zero, satisfies $\tfrac12(\Gamma_0,\Gamma_0)=0$, and the chosen local BV functional domain has no nonzero central element of ghost number one. The model postulate and its classical gauge-invariance theorem are explicit inputs fixing and interpreting $S_0$; neither is proved by this theorem.

Choose the local Lorenz gauge $\partial^\mu A_\mu=0$ with constant $\xi>0$, dimensional regularization $D=4-2\epsilon$ with fixed positive reference mass $\mu$, $g_D=\mu^\epsilon g(\mu)$, $g_B=\mu^\epsilon Z_g g(\mu)$, $g(\mu)=g_{\rm YM}$ at the chosen scale, and modified minimal subtraction in the unrescaled-$\mu$ convention, removing pole parts and their associated $-\gamma_E+\log(4\pi)$ constants, and a finite engineering-dimension bound $d_*$. The geometric-connection gauge-action coefficient in the continued rules is $\mu^{-2\epsilon}/g(\mu)^2$, while all local cochain bounds below use four-dimensional engineering dimensions. For this adopted pure-gauge sector, treat dimensional regularization as BRST preserving in the formal analytic continuation, in the sense specified in the preceding formal-data definition; this is a regulator property, not a consequence of this theorem. The allowed counterterms are integrated Lorentz-scalar finite-jet polynomials of ghost number zero and dimension at most $d_*$ in $A,c,\bar c,b$, their antifields, and their spacetime derivatives. The formal loop variable $\lambda$ is dimensionless; $\Gamma(\lambda)=\Gamma_0+\sum_{n\geq1}\lambda^n\Gamma_n$ is a formal coefficient sequence with no convergence at nonzero $\lambda$ asserted. Write $\Gamma^{(<n)}$ for a partial action whose coefficients below order $n$ already satisfy the Slavnov identity.

Assume the local quantum action principle (QAP): at each first failing order $n$ there are a local ghost-number-one four-form $\delta_n\in\mathcal A_{\mathrm{BV,nm}}^{1,4}(U)$ of engineering dimension at most $d_*$ and local ghost-number-two three-form $\rho_n\in\mathcal A_{\mathrm{BV,nm}}^{2,3}(U)$ of dimension at most $d_*-1$ such that
$$\mathfrak S(\Gamma^{(<n)})=\lambda^n\int_U\delta_n+O(\lambda^{n+1}),\qquad B_{\Gamma_0}\delta_n+d_H\rho_n=0,$$
where $\mathfrak S(\Gamma)=\tfrac12(\Gamma,\Gamma)$, $B_{\Gamma_0}X=(\Gamma_0,X)$, and $d_H=dx^\mu D_\mu$ is the horizontal differential on finite-jet local forms. Assume local anomaly cancellation in the explicit form of a supplied sequence of allowed ghost-number-zero four-forms $\Xi_n\in\mathcal A_{\mathrm{BV,nm}}^{0,4}(U)$ and ghost-number-one three-forms $\Theta_n\in\mathcal A_{\mathrm{BV,nm}}^{1,3}(U)$ satisfying
$$\delta_n=B_{\Gamma_0}\Xi_n+d_H\Theta_n$$
at every first failing order; put $\Xi_n=\Theta_n=0$ at nonfailing orders. Compact support or the model's boundary conditions make the integral of each $d_H$-exact four-form vanish. Then the counterterm series $C(\lambda)=-\sum_{n\geq1}\lambda^n\int_U\Xi_n$ yields $\mathfrak S(\Gamma(\lambda)+C(\lambda))=0$ coefficientwise.

Use the formal-data definition's Lorentz-covariant subspaces $\mathcal L_{\leq d_*}^{g,p}$ of the full BV/nonminimal complex: coefficients have dimension at most $d_*-4+p$, top forms have Lorentz-scalar densities, and three-forms are covariant currents. Assume the QAP representatives and supplied exactness sequence lie in these subspaces: $\delta_n\in\mathcal L^{1,4}_{\leq d_*}$, $\rho_n\in\mathcal L^{2,3}_{\leq d_*}$, $\Xi_n\in\mathcal L^{0,4}_{\leq d_*}$, and $\Theta_n\in\mathcal L^{1,3}_{\leq d_*}$. For $g\in\{0,1\}$ use $H_{\mathrm{Lor},\leq d_*}^{g,4}(s\mid d_H)$: its cocycles are $a\in\mathcal L^{g,4}_{\leq d_*}$ with $sa+d_Hb=0$ for some $b\in\mathcal L^{g+1,3}_{\leq d_*}$, and equivalences are $a\sim a+sm+d_Hn$ with $m\in\mathcal L^{g-1,4}_{\leq d_*}$ and $n\in\mathcal L^{g,3}_{\leq d_*}$. Thus both cochains and primitives obey covariance and the stated bounds; unrestricted BV exactness alone is insufficient. The resulting ghost-number-zero quotient is exactly the infinitesimally Slavnov-invariant local counterterm freedom modulo the stated allowed trivial counterterms and total derivatives. The ghost-number-one quotient classifies local obstruction classes in that space; a nonzero class cannot be removed by an allowed local counterterm. This is a quotient statement and asserts no finite basis of representatives. The conclusion is conditional on the local QAP and supplied anomaly-cancellation sequence; it proves neither premise and asserts no empirical result, continuum functional measure, convergence, or nonperturbative existence. For supplied finite-dimensional regulated gauge-slice data, the Faddeev–Popov Jacobian at every point $x$ of the gauge-condition domain is the density determinant $\Delta_{\rm FP}(x)=|\det(d\chi_x\circ R_x)|$ of the specified regulated right action and gauge condition, relative to the specified positive densities. It equals zero when $d\chi_x\circ R_x$ is singular and is positive at a slice point exactly when the slice is transverse; it is not a continuum functional determinant.
## Statement references

[Barnich, Brandt, and Henneaux, §§2.3–2.4 and 12.2–12.3](https://arxiv.org/pdf/hep-th/0002245)

[Maas, §4.7.2 and §§5.2.7–5.2.8](https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/maas_axel/qftii2024.pdf)

## Facts & Assumptions

**Given:** The selected pure $SU(2)$ Yang–Mills model, its local field and BV algebras, the formal regulator and counterterm space, and the QAP and anomaly-cancellation hypotheses in the statement.

[A1] The current draft model postulate fixes $M$, the right-principal $SU(2)$ bundle sector, absence of matter, $\kappa$, the coupling, units, action density, boundary conditions, and physical scope; it is used as the adopted assumption. [[post-qftx-nonabelian-yang-mills-model]]

[A2] The chosen even ghost-number-zero BV functional satisfies the classical master equation, and the stated BV domain has no nonzero central element of ghost number one. These are explicit hypotheses of the statement.

[F1] The formal perturbative data fix Lorenz gauge, $D=4-2\epsilon$, the positive scale $\mu$ and convention $g_D=\mu^\epsilon g(\mu)$, $g_B=\mu^\epsilon Z_g g(\mu)$, modified minimal subtraction in the unrescaled-$\mu$ convention, BRST preservation by dimensional regularization in the adopted pure-gauge sector, the finite local counterterm space, and the local QAP representative and consistency equation. [[def-qftx-formal-perturbative-yang-mills-data]]

[F2] The minimal BRST transformations are $sA_\mu=\partial_\mu c+[A_\mu,c]$ and $sc=-\tfrac12[c,c]$ on the finite-jet local algebra. [[def-qftx-nonabelian-brst-complex]]

[F3] Under the Lie-algebra Jacobi identity, the finite-jet BRST derivation is nilpotent and commutes with total derivatives. [[lem-qftx-nonabelian-brst-nilpotence]]

[F4] The local BRST cohomology definition gives the quotient formula for relative cocycles modulo $d_H$ on the minimal field/ghost jet algebra; the formal-data definition separately extends that formula to the stated full BV/nonminimal field/antifield jet complex and defines its Lorentz-covariant, power-counted subcomplex, with the same restrictions on equivalence primitives. [[def-qftx-local-brst-cohomology]], [[def-qftx-formal-perturbative-yang-mills-data]]

[F5] The canonical odd BV antibracket has ghost number $+1$, shifted graded skew-symmetry and shifted Jacobi identity; its minimal master functional is the classical action plus antifield couplings to the BRST variations, with optional nonminimal term $-\bar c^*b$. [[def-qftx-bv-antibracket-master-action]]

[F6] For the stated BV domain, the shifted Jacobi identity identifies the classical master equation with nilpotence of $B_{\Gamma_0}=(\Gamma_0,\cdot)$. [[lem-qftx-bv-master-equation-brst-nilpotence]]

[F7] At every point $x$ of a finite-dimensional regulated gauge-condition domain, the specified densities define $\Delta_{\rm FP}=|\det(d\chi_x\circ R_x)|$ relative to those densities; it is zero for a singular map and entails no continuum functional-measure assertion. [[def-qftx-gauge-slice-and-faddeev-popov-operator]]

[F9] In the right-action convention, the local gauge potential is the pullback $A_i=s_i^*\omega$ of the principal connection form. [[def-qftx-principal-connection-form]]

[F10] In this convention $F_i=dA_i+\tfrac12[A_i\wedge A_i]$ and the curvature transforms by the adjoint action under local section changes. [[lem-qftx-principal-curvature-cartan-bianchi]]

[A3] At every first failing order, an allowed local ghost-number-zero four-form $\Xi_n$ and ghost-number-one three-form $\Theta_n$ are supplied with $\delta_n=B_{\Gamma_0}\Xi_n+d_H\Theta_n$. This is the explicit anomaly-cancellation hypothesis in the statement.

[A4] Compact support or the selected model's boundary conditions make the integral of every $d_H$-exact four-form vanish, as assumed in the statement.

[A5] The current draft classical gauge-invariance carrier states that the adopted pure $SU(2)$ action is invariant under the declared principal-bundle gauge transformations. Its full proof was inspected; it is used as an explicit conditional input. [[pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance]]


## Proof

1.1 The model [A1] and explicit conditional classical gauge-invariance input [A5] fix the pure $SU(2)$ action and its gauge-invariant interpretation, while [F9]–[F10] fix the local curvature convention. Separately, the explicit master-equation hypothesis [A2] and [F6] imply that $B_{\Gamma_0}$ is nilpotent on the chosen BV functional domain. This is a formal prerequisite for the local cohomology argument, not a quantum conclusion. [given, A1, A2, A5, F6, F9, F10, algebra]

1.2 Fix a first failing order $n$ after the lower-order coefficients have been chosen. By [F1] and the QAP hypothesis, the defect has a local representative $\delta_n$ with $\mathfrak S(\Gamma^{(<n)})=\lambda^n\int_U\delta_n+O(\lambda^{n+1})$ and $B_{\Gamma_0}\delta_n+d_H\rho_n=0$. [given, F1]

1.3 The finite-jet BRST differential on the minimal fields is the one in [F2], is nilpotent and commutes with total derivatives by [F3], and is generated on the BV complex by the antibracket convention [F5]. Under [A2], [F6] gives nilpotence of $s=B_{\Gamma_0}$ on the full canonical BV domain. Its evolutionary prolongation commutes with each $D_\mu$, so its graded extension anticommutes with $d_H$ by [F4]. Thus the cohomology in the statement is the full BV/nonminimal relative quotient defined in the formal-data item, not merely the minimal complex. [given, A2, F2, F3, F4, F5, F6]

2.1 The shifted Jacobi identity in [F5] gives $(\Gamma^{(<n)},\mathfrak S(\Gamma^{(<n)}))=0$. Taking the coefficient of $\lambda^n$ yields the integrated consistency condition $\int_U B_{\Gamma_0}\delta_n=0$; its local representative is the QAP equation recorded in step 1.2. [F1, F5, step 1.2, algebra]

2.2 By the supplied exactness sequence in the statement, write $\delta_n=B_{\Gamma_0}\Xi_n+d_H\Theta_n$ and set $\Gamma^{(<n+1)}:=\Gamma^{(<n)}-\lambda^n\int_U\Xi_n$. Bilinearity of the antibracket shows that the coefficient at order $n$ changes by $-B_{\Gamma_0}\Xi_n$; pairings with positive-loop terms and the quadratic counterterm term are $O(\lambda^{n+1})$. Thus the new defect is $\lambda^n\int_U d_H\Theta_n+O(\lambda^{n+1})$. [given, A3, F5, step 1.2, algebra]

2.3 The master density is Lorentz scalar and its canonical bracket contracts dual field/antifield indices, so $s$ preserves covariance. It has coefficient engineering dimension zero: $s\Phi$ has the dimension of $\Phi$, and the Euler derivative giving $s\Phi^*$ has dimension $4-\dim\Phi=\dim\Phi^*$. Prolongation preserves these weights. The tensorial derivative $d_H$ raises coefficient dimension by one and form degree by one. Thus both maps preserve the spaces $\mathcal L^{g,p}_{\leq d_*}$ with bound $d_*-4+p$. For an allowed boundary $a=sm+d_Hn$, the allowed current $b=sn$ gives $sa+d_Hb=0$ by step 1.3, so the restricted quotient is well-defined. Its ghost-zero cocycles are precisely the allowed infinitesimal counterterm changes satisfying the local Slavnov equation modulo an allowed current; quotienting by the stated bounded covariant $sm+d_Hn$ gives exactly their declared trivial-counterterm freedom. At ghost number one, an allowed restoring counterterm and current would express the obstruction as such a boundary; a nonzero class therefore forbids that removal. No identification with unrestricted cohomology or elimination of antifield dependence is used. [given, F4, F5, step 1.3, algebra]

3.1 The integral of the remaining $d_H$-exact term vanishes by the stated compact-support or boundary hypothesis, so the identity holds through order $n$. The supplied sequence defines a formal counterterm series, and induction over $n$ therefore yields $\mathfrak S(\Gamma(\lambda)+C(\lambda))=0$ coefficientwise, without a convergence assertion. [given, A3, A4, F1, step 2.2, algebra]

4.1 The finite-dimensional determinant in the conclusion is only the determinant of the regulated map from the regulated Lie algebra to the gauge-condition target, as in [F7]. It is defined even for a singular map, when it is zero; at a slice point its positivity is equivalent to invertibility of that map, which is the definition of transversality. Its definition concerns finite-dimensional densities and supplies no continuum determinant or functional measure. [given, F7] ∎
