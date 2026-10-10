---
id: pthm-em-inductance-reciprocity
kind: physics-theorem
title: "Reciprocal linkage coefficients and magnetic energy of smooth compact conserved currents"
domain: physics
status: draft
origin: session
dependency_level: 19
proof_strategy: direct
deps:
  - def-em-steady-current-regime
  - def-em-si-conventions
  - pthm-em-magnetostatic-vector-potential
  - post-em-circuit-approximation
  - lem-em-newtonian-linkage-symmetry
  - lem-em-newtonian-curl-field-energy
  - def-newtonian-potential
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - cor-the-curl-of-a-curl-of-a-c2-field
  - def-laplacian-of-a-c2-function
  - def-divergence-and-curl-of-a-c1-vector-field
  - def-cross-product-in-r3
  - def-euclidean-inner-product
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - cor-continuous-functions-are-borel-measurable
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integral-over-a-measurable-set
  - def-countable-choice
dependency_roles:
  def-em-steady-current-regime: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  pthm-em-magnetostatic-vector-potential: physical-result
  post-em-circuit-approximation: physical-assumption
  lem-em-newtonian-linkage-symmetry: mathematical-premise
  lem-em-newtonian-curl-field-energy: mathematical-premise
  def-newtonian-potential: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  cor-the-curl-of-a-curl-of-a-c2-field: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "§7.2.3 printed pp. 310-317 (reciprocity M21=M12 and the Neumann formula; Problem 7.20, where the equality of the two mutual inductances is confirmed); read in the stamped 596-page scan."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin; complete course book, 364 pp.)"
      url: http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf
      locator: "§7.2 printed pp. 216-218 (stationary-loop linkage and reciprocity, equations (7.3)-(7.10)); §7.5 printed pp. 225-231 (coil energy and the mutual term MI1I2, equations (7.37)-(7.71)); read in the fetched complete 364-page course book."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (Lent Term 2015, 236 pp.)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "§4.1.2 printed pp. 71-73 (inductance as flux per unit current and the magnetostatic energy ½LI²); read in the retained complete text of the 236-page printing."
physical_scope: "Fixed compact smooth conserved current profiles of the adopted framework and their Coulomb-gauge Newtonian vector potential: finite reciprocal linkage coefficients, the linear linkage identity, the exact positive-semidefinite quadratic magnetic energy and the vanishing/positive-definiteness criterion. It asserts no thin-wire, sheet or singular self-inductance, no time-dependent, moving, radiating or material configuration and no uniqueness of the vector potential; the identification of the coefficients with the lumped circuit inductance matrix is the separately adopted circuit model."
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $\mu_0>0$, $c>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$ be the constants of [[def-em-si-conventions]], and let $j_1,\dots,j_n\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}j_\alpha=0$ be fixed compact smooth conserved current profiles of the class of [[def-em-steady-current-regime]](b), extended by zero to $\mathbb R^3$. Fix amplitudes $I\in\mathbb R^n$, label them by $I_\alpha:=I(\alpha-1)$ for $1\le\alpha\le n$ in the zero-based convention of [[def-euclidean-inner-product]], and put $J_I:=\sum_{\alpha=1}^nI_\alpha j_\alpha$, let $A_{J_I}$ be the Coulomb-gauge Newtonian vector potential of [[pthm-em-magnetostatic-vector-potential]] applied to the conserved current $J_I$, and let $B_{J_I}=\operatorname{curl}A_{J_I}$. Define the linkage coefficients
$$L_{\alpha\beta}:=\frac{\mu_0}{4\pi}\int_{\mathbb R^3}\int_{\mathbb R^3}\frac{\langle j_\alpha(x),j_\beta(y)\rangle}{|x-y|}\,d\lambda_3(y)\,d\lambda_3(x),\qquad\alpha,\beta=1,\dots,n .$$
The amplitudes $I_\alpha$ carry amperes and the profiles $j_\alpha$ are shapes per unit current, with units $\mathrm m^{-2}$; their numerical SI maps belong to the stated smooth class. Consequently $J_I$ has unit $\mathrm A\,\mathrm m^{-2}$, $A_{J_I}$ has $\mathrm T\,\mathrm m$, $L_{\alpha\beta}$ has H, the linkage has Wb and $U$ has joules. $A_{j_\alpha}$ denotes the linear potential response per ampere. Then:

(a) [Finiteness and self-energy] every $L_{\alpha\beta}$ is a finite real number: the defining double integral converges absolutely, and in particular every self-coefficient $L_{\alpha\alpha}$ is finite, so the compact smooth profiles carry a finite self-energy. This is a statement about the smooth profiles only; no finite value is assigned to a zero-radius thin-wire self-inductance.

(b) [Reciprocity and flux linkage] $L_{\alpha\beta}=L_{\beta\alpha}$ for all $\alpha,\beta$; $A_{J_I}=\sum_{\alpha}I_\alpha A_{j_\alpha}$ componentwise; and for every $\beta$ the linkage integral is
$$\int_{\mathbb R^3}\langle j_\beta,A_{J_I}\rangle\,d\lambda_3=\sum_{\alpha=1}^nL_{\beta\alpha}I_\alpha .$$
Thus the numbers $L_{\alpha\beta}$ are the linkage coefficients of the profiles: the linkage of profile $\beta$ with the field of the superposition is the linear combination $\sum_\alpha L_{\beta\alpha}I_\alpha$.

(c) [Magnetic energy and positivity] with $U(I):=\frac12\int_{\mathbb R^3}\langle J_I,A_{J_I}\rangle\,d\lambda_3$,
$$U(I)=\frac12\sum_{\alpha,\beta=1}^nL_{\alpha\beta}I_\alpha I_\beta=\frac1{2\mu_0}\int_{\mathbb R^3}|B_{J_I}|^2\,d\lambda_3\ \ge0,$$
all quantities finite; moreover $U(I)=0$ holds precisely when $J_I=0$ on $\mathbb R^3$. Identify these profile-labelled coefficients with the standard matrix by $L(i,j):=L_{i+1,j+1}$ for $0\le i,j<n$. Consequently the symmetric matrix $L$ is positive semidefinite, and it is positive definite exactly when the profiles are pointwise linearly independent, i.e. when $\sum_\alpha I_\alpha j_\alpha\equiv0$ forces $I=0$.

(d) [Scope] the theorem concerns fixed compact smooth conserved current profiles and their Coulomb-gauge fields. It asserts no thin-wire, sheet or singular self-inductance; no time-dependent, moving, radiating or material configuration; and no uniqueness of the vector potential. The identification of these coefficients with the inductance matrix of the adopted lumped circuit model, and of the linkage derivatives with terminal voltages, is adopted in [[post-em-circuit-approximation]]; the strict material-loop theorem applies separately only to an actual moving sheet and compatible smooth Maxwell fields satisfying its hypotheses. No terminal-voltage law for arbitrary varying frozen profiles is inferred from the present magnetostatic computation.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, the constants $\mu_0>0$, $c>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$, compact smooth divergence-free profiles $j_\alpha$, amplitudes $I\in\mathbb R^n$ with $I_\alpha=I(\alpha-1)$ and matrix entries $L(i,j)=L_{i+1,j+1}$, the current $J_I=\sum_\alpha I_\alpha j_\alpha$, and the Coulomb-gauge field $A_{J_I}$ of the magnetostatic potential theorem.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] For $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$, the Coulomb-gauge Newtonian potential $A=\mu_0N(J)$ is $C^\infty$ with $-\Delta A=\mu_0J$ and $\operatorname{div}A=0$ pointwise, and $B=\operatorname{curl}A$ is $C^\infty$ with $\operatorname{div}B=0$, $\operatorname{curl}B=\mu_0J$ pointwise. ([[pthm-em-magnetostatic-vector-potential]]).

[F2] For $u,v\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ the three integrals $\int\langle u,Nv\rangle$, $\int\langle Nu,v\rangle$ and $\frac1{4\pi}\iint\frac{\langle u(x),v(y)\rangle}{|x-y|}$ converge absolutely and have a common value; the pairing is symmetric and bilinear. ([[lem-em-newtonian-linkage-symmetry]]).

[F3] For $J\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ with $\operatorname{div}J=0$ and $A=\mu_0N(J)$: $\int|\operatorname{curl}A|^2=\mu_0\int\langle A,J\rangle$ and $\frac12\int\langle A,J\rangle=\frac1{2\mu_0}\int|\operatorname{curl}A|^2\ge0$, the integrals finite, and $\operatorname{curl}A\in L^2$. ([[lem-em-newtonian-curl-field-energy]]).

[F4] The compact smooth current class consists of the currents $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$, extended by zero to $\mathbb R^3$. ([[def-em-steady-current-regime]]).

[F5] The framework constants are $\mu_0>0$, $c>0$ and $\varepsilon_0=(\mu_0c^2)^{-1}$. ([[def-em-si-conventions]]).

[F6] The lumped circuit model of [[post-em-circuit-approximation]] is an adopted reduced model: its matrix $L$ is declared model data, the flux linkage is $LI$, and its terminal law is a branch relation of the model, not a derivation from arbitrary time-dependent Maxwell fields. ([[post-em-circuit-approximation]]).

[F7] The Newtonian potential is $Nf(x)=\int_{\mathbb R^n}\Phi(x-y)f(y)\,dy$ at each $x$ where the integral is absolutely finite. ([[def-newtonian-potential]]).

[F8] The Lebesgue integral is linear on $L^1$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F9] For a $C^2$ field $F$ on open $U\subseteq\mathbb R^3$, $\operatorname{curl}\operatorname{curl}F=\nabla\operatorname{div}F-\Delta F$. ([[cor-the-curl-of-a-curl-of-a-c2-field]]).

[F10] For a $C^2$ map $\Delta F$ is componentwise and the Laplacian is $\operatorname{div}\nabla$. ([[def-laplacian-of-a-c2-function]]).

[F11] The divergence and curl are defined pointwise from the first partial derivatives. ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F12] The Euclidean inner product is symmetric and real bilinear. ([[def-euclidean-inner-product]]).

[F13] A nonnegative measurable function has zero integral exactly when it vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F14] Under Countable Choice every continuous map $\mathbb R^n\to\mathbb R^m$ is Borel measurable. ([[cor-continuous-functions-are-borel-measurable]]).

[F15] For measurable $f,g:X\to[0,+\infty]$ with $f\le g$, $\int f\le\int g$. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F16] For $n\ge1$, $x\in\mathbb R^n$, $r>0$ the ball satisfies $0<\lambda(B(x,r))<\infty$. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F17] On a measure space $(X,\mathcal A,\mu)$, for measurable $f:X\to[0,+\infty]$ and $E\in\mathcal A$, $\int_Ef\,d\mu:=\int f\chi_E\,d\mu$, with the nonnegative Lebesgue integral on the right. ([[def-integral-over-a-measurable-set]]).



## Proof

**Proof technique:** direct.

1.1 For each $\alpha$ the profile $j_\alpha$ lies in the class of [F4], and so does $J_I$; by [F1] applied to $J_I$ the field $A_{J_I}$ is $C^\infty$ with $-\Delta A_{J_I}=\mu_0J_I$ and $\operatorname{div}A_{J_I}=0$ pointwise, and $B_{J_I}=\operatorname{curl}A_{J_I}$ is $C^\infty$ with $\operatorname{curl}B_{J_I}=\mu_0J_I$, the Laplacian here being the componentwise operator of [F10]. Since each $A_{j_\alpha}=\mu_0N(j_\alpha)$ is the Newtonian potential of [F7] and $N$ is componentwise linear by [F8], $A_{J_I}=\sum_\alpha I_\alpha A_{j_\alpha}$ componentwise, and $B_{J_I}=\sum_\alpha I_\alpha B_{j_\alpha}$ by linearity of the pointwise curl [F11]. [F1, F4, F7, F8, F10, F11, algebra]

1.2 By [F2] applied to $(J_I,J_I)$ and the definitions of $U$ and the coefficients, $U(I)=\frac12\int\langle J_I,A_{J_I}\rangle=\frac{\mu_0}{2}\frac1{4\pi}\iint\frac{\langle J_I(x),J_I(y)\rangle}{|x-y|}=\frac12\sum_{\alpha,\beta}L_{\alpha\beta}I_\alpha I_\beta$, all finite. On the other hand [F3] applied to the divergence-free current $J_I$ with parameter $\mu_0$ gives $\int\langle J_I,A_{J_I}\rangle=\frac1{\mu_0}\int|B_{J_I}|^2$, hence $U(I)=\frac1{2\mu_0}\int|B_{J_I}|^2\ge0$; this is the energy identity of (c). [F2, F3, algebra]

2.1 Apply [F2] to the pair $(j_\alpha,j_\beta)$: the double integral defining $L_{\alpha\beta}$ (with the prefactor $\mu_0$) converges absolutely, so $L_{\alpha\beta}$ is a finite real number, and exchanging the two fields and the two integration variables leaves it unchanged, so $L_{\alpha\beta}=L_{\beta\alpha}$; this is (a) and the reciprocity of (b). Applying [F2] to $(j_\beta,J_I)$ and using the symmetry of the Euclidean pairing [F12] and the linearity of the integrals [F8] gives $\int\langle j_\beta,A_{J_I}\rangle=\mu_0\frac1{4\pi}\iint\frac{\langle j_\beta(x),J_I(y)\rangle}{|x-y|}=\sum_\alpha I_\alpha L_{\beta\alpha}$; this is the linkage identity of (b). [F2, F8, F12, step 1.1, algebra]

2.2 If $U(I)=0$ then $\int|B_{J_I}|^2=0$ by step 1.2. The function $|B_{J_I}|^2$ is nonnegative, continuous by step 1.1 and Borel by [F14], so [F13] gives $|B_{J_I}|=0$ almost everywhere; were $B_{J_I}(x_0)\ne0$ for some $x_0$, continuity would give $|B_{J_I}|^2\ge\varepsilon>0$ on a ball $B(x_0,r)$ of finite positive measure [F16], and [F15] with [F17] would give $\int|B_{J_I}|^2\ge\varepsilon\lambda_3(B(x_0,r))>0$, a contradiction; hence $B_{J_I}=0$ everywhere. Then $\operatorname{curl}\operatorname{curl}A_{J_I}=\nabla\operatorname{div}A_{J_I}-\Delta A_{J_I}=\mu_0J_I$ by [F9] and step 1.1, while $\operatorname{curl}B_{J_I}=0$; so $\mu_0J_I=0$ and $J_I=0$. Conversely $J_I=0$ gives $A_{J_I}=0$ componentwise and $U(I)=0$. [F9, F13, F14, F15, F16, F17, step 1.1, step 1.2, algebra]

3.1 By step 1.2, $U$ is the quadratic form $I\mapsto\frac12I^{\mathsf T}LI$ of the symmetric matrix $L$ of step 2.1, and $U\ge0$; hence $L$ is positive semidefinite. By step 2.2, $U(I)=0$ exactly when $\sum_\alpha I_\alpha j_\alpha\equiv0$; therefore $L$ is positive definite exactly when that vanishing forces $I=0$, that is, exactly when the profiles are pointwise linearly independent. [step 2.1, step 1.2, step 2.2, algebra]

4.1 The theorem establishes (a)-(c) for the fixed compact smooth conserved profiles and their Coulomb-gauge fields, with no thin-wire, singular, moving, radiating or material configuration treated; the identification of $L$ with the lumped-model inductance matrix and of the linkage derivatives with terminal voltages is the adopted model content of [F6], not a consequence of this magnetostatic computation, and no terminal-voltage law for arbitrary varying frozen profiles is inferred. The constants used are those of [F5], and Countable Choice is inherited only through the named Newtonian, measure and vector-calculus interfaces. [A1, F5, F6, step 1.1, step 2.1, step 1.2, step 2.2, step 3.1] ∎



## Source notes

Griffiths §7.2.3, printed pp. 310-317, derives $M_{21}=M_{12}$ and the Neumann formula; Fitzpatrick §7.2, printed pp. 216-218, treats stationary-loop linkage and reciprocity in (7.3)-(7.10); §7.5, printed pp. 225-231, treats coil energy and the mutual term $MI_1I_2$ in (7.37)-(7.71); Tong §4.1.2, printed pp. 71-73, defines the inductance as flux per unit current and writes the magnetostatic energy $\frac12LI^2$. The present theorem replaces the thin-loop formulas by the explicitly defined smooth compact conserved profiles, makes the reciprocity an instance of the symmetry of the Newtonian linkage pairing, and identifies the energy with the frozen curl-field energy of the Newtonian construction; the thin-wire self-inductance and every singular limit remain outside the statement.
