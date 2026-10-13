---
id: pthm-em-electric-dipole-torque
kind: physics-theorem
domain: physics
dependency_level: 18
title: "External force and torque of prescribed charge data in a Lipschitz external field"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Prescribed external force and torque for broad compact $L^1$ charge data and a Lipschitz external vector-field datum under an explicitly additional $\\rho E$ force model, with full force/torque/origin-shift bounds. A separate finite point-force assignment needs only external values (continuity for the stated field datum); its Lipschitz bounds are retained. Exact Lorentz-postulate instantiation is restricted explicitly to its smooth-source matter branch or $C^1$ prescribed tensor and massive $C^2$ test-worldline hypotheses at an instant of rest. No self-force, trajectory existence, permanent rest, equilibrium, stability or empirical assertion is supplied."
proof_strategy: direct
deps: [def-em-electric-moments, post-em-lorentz-coupling, def-em-electromagnetic-tensor, def-em-relativistic-worldlines-frames, def-em-lab-geometry, def-em-si-conventions, def-em-fields, def-countable-choice, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-l-one-of-a-measure, def-metric-ball, def-euclidean-inner-product, def-measure-null-set-and-almost-everywhere, def-cross-product-in-r3, thm-cross-product-norm-is-the-two-vector-gram-determinant, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-cauchy-schwarz-and-the-euclidean-norm, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-integral-triangle-inequality, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-finite-sum, lem-finite-sum-laws, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-ck-euclidean-maps-and-diffeomorphisms, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, pthm-sr-momentum-and-four-force]
dependency_roles:
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  pthm-sr-momentum-and-four-force: physical-result
  def-em-electric-moments: formulation-prerequisite
  post-em-lorentz-coupling: physical-assumption
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-relativistic-worldlines-frames: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-l-one-of-a-measure: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  def-finite-sum: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 4.1.3 printed pp. 163-165 (torque N = p x E (4.4) on a dipole in a field, the force F = (p . grad)E (4.5) in a nonuniform field, and the reference-point shift N = (p x E) + (r x F) for a perfect dipole). Read in the stamped scanned full text, OCR cross-checked."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 2.2.2 printed pp. 19-20 (the physical dipole of two opposite charges, its potential and its moment p = Qd). Read in the stamped full text."
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 40 printed pp. 95-97 (the dipole moment and the field of a neutral system of charges; only the external field acts on the declared test distribution in the present model). Read in the stamped full text."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), inherited from the Lebesgue interface ([[def-countable-choice]]). Let $a>0$ and let $\rho\in L^1(\mathbb R^3)$ be real and vanish $\lambda_3$-a.e. outside $\overline B_a(0)$; let $E_{\mathrm{ext}}:\mathbb R^3\to\mathbb R^3$ be a prescribed external vector-field datum, with electric-field units of [[def-em-si-conventions]], that is continuous on $\overline B_a(0)$ and Lipschitz there with constant $L\ge0$, i.e. $|E_{\mathrm{ext}}(x)-E_{\mathrm{ext}}(x')|\le L|x-x'|$ for all $x,x'\in\overline B_a(0)$. Consider the matter model in which the prescribed static distribution $\rho$ is carried by a body at rest in the laboratory frame and adopt additionally the prescribed external force model $f_{\mathrm{ext}}=\rho E_{\mathrm{ext}}$. This is a declared extension to these locally integrable charge data and Lipschitz fields, motivated by the smooth continuum coupling of [[post-em-lorentz-coupling]] (ii); that postulate covers smooth sources and does not itself establish this extension. The only force counted by the present model is $f_{\mathrm{ext}}$; the self-field of $\rho$, all other fields, mechanical support and back-reaction are excluded by this model. Define the **total external force** and the **total external torque about the origin** by the componentwise Lebesgue integrals

$$F:=\int_{\mathbb R^3}\rho(y)\,E_{\mathrm{ext}}(y)\,d\lambda_3(y)\in\mathbb R^3,\qquad \tau:=\int_{\mathbb R^3}\rho(y)\,\bigl(y\times E_{\mathrm{ext}}(y)\bigr)\,d\lambda_3(y)\in\mathbb R^3,$$

with units N and N m respectively; $L$ has units V m$^{-2}$. The integrands are interpreted through their a.e.-equal measurable zero extensions from the closed ball: continuity of $E_{\mathrm{ext}}$ there gives Borel factors, and null modifications remain Lebesgue measurable by [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]. They are absolutely convergent because a.e. on the support $|E_{\mathrm{ext}}|\le|E_{\mathrm{ext}}(0)|+La$ and $|y\times E_{\mathrm{ext}}|\le a(|E_{\mathrm{ext}}(0)|+La)$, so each component is dominated by a constant times $|\rho|\in L^1$ ([[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-cross-product-in-r3]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]). Then:

(a) [Uniform force and torque expansions]

$$F=Q\,E_{\mathrm{ext}}(0)+R_F,\qquad |R_F|\le L\,a\,\|\rho\|_1,\qquad \tau=p\times E_{\mathrm{ext}}(0)+R_\tau,\qquad |R_\tau|\le L\,a^2\|\rho\|_1,$$

where $Q$ and $p$ are the total charge and dipole moment of [[def-em-electric-moments]] (a) and $\|\rho\|_1=\int|\rho|\,d\lambda_3$;

(b) [Neutral distribution] if $Q=0$ then the leading force term vanishes, $F=R_F$ with $|R_F|\le La\|\rho\|_1$, and the torque is the ideal-dipole torque $p\times E_{\mathrm{ext}}(0)$ up to the bound $|R_\tau|\le La^2\|\rho\|_1$; in this sense a neutral distribution of size $a$ in a field with Lipschitz constant $L$ carries the dipole torque $p\times E_{\mathrm{ext}}(0)$ with an explicit remainder;

(c) [Reference-point shift] for any reference point $o\in\mathbb R^3$, the torque about $o$, $\tau_o:=\int_{\mathbb R^3}\rho(y)\,(y-o)\times E_{\mathrm{ext}}(y)\,d\lambda_3(y)$, equals $\tau-o\times F$ exactly;

(d) [Ideal pair of test charges at rest] let $q\in\mathbb R$ and $d\in\mathbb R^3\setminus\{0\}$, put $a=|d|/2$, and consider the two stationary point charges $+q$ at $d/2$ and $-q$ at $-d/2$ ([[def-em-electric-moments]] (c)), each treated as a test charge at rest in the laboratory chart in the same prescribed external field $E_{\mathrm{ext}}$, with the mutual interaction and the self-field of each charge excluded by the model. Adopt for this finite prescribed-charge branch the external force assignment $F_k=q_kE_{\rm ext}(x_k)$ and torque $x_k\times F_k$. It is defined for merely continuous external field values at the two points, independently of a worldline equation. For the same Lipschitz bound as above, finite summation gives the expansions of (a),(b), with $Q=0$, $p=qd$, and total variation $2|q|$: $|R_F|\le2|q|La$, $|R_\tau|\le2|q|La^2$. More generally the exact finite force/torque sum requires only the specified field values; no Lipschitz estimate is asserted without its hypothesis.

(d1) [Covariant sufficient specialization] If, in addition, an actual prescribed electromagnetic tensor $F$ of [[def-em-electromagnetic-tensor]] is $C^1$ on a neighbourhood of the graph of each massive future-timelike $C^2$ test worldline with constant charge $q'$ and supplied rest mass $m>0$, and the external-field coupling [[post-em-lorentz-coupling]] (i) applies, then at an instant with zero coordinate velocity $U=(c,0,0,0)$ its coordinate three-force $\mathbf f=d\mathbf p/dt$ is $q'E_{\rm ext}$: the four-force is $\gamma(\mathbf f\cdot v/c,\mathbf f)$ with $\gamma=1$ at rest ([[pthm-sr-momentum-and-four-force]] (b)), and $U_0=-c$ and $F^{i0}=-E_i/c$. This reproduces the prescribed point-force assignment at that instant. Similarly the smooth-source $J=0$ matter-coupling branch of postulate (ii) reproduces the continuum force assignment when its own source/field/matter hypotheses hold. No $C^1$ tensor or worldline is inferred from merely continuous $E$ data, and no two-charge trajectory existence or permanent rest is claimed.

(e) [Scope] the statement is conditional on the explicitly stated matter model: only the prescribed external field acts on the distribution, the distribution is prescribed and at rest, and no self-force, back-reaction, mechanical equilibrium, stability or dynamics of the body is asserted; the external field is a datum, not solved for. Clause (d) is an instantaneous idealisation of two ideal point test charges with mutual interaction excluded; it is not a two-body dynamics, a bound-state or a stability statement. No radiation, medium response or empirical claim is made. The prescribed finite force assignment and finite moment algebra in (d) are choice-free; the volume integrals in (a)-(c) carry their explicit measure premise, while (d1) is a separate conditional instantiation of the exact physical coupling.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $a>0$, let $\rho\in L^1(\mathbb R^3)$ be real and vanish $\lambda_3$-a.e. outside $\overline B_a(0)$, let $E_{\mathrm{ext}}:\mathbb R^3\to\mathbb R^3$ be continuous on $\overline B_a(0)$ and Lipschitz there with constant $L\ge0$, and adopt the prescribed external force model $f_{\mathrm{ext}}=\rho E_{\mathrm{ext}}$ on the prescribed distribution at rest in the laboratory frame.

[F1] For $\rho\in L^1(\mathbb R^3)$ vanishing $\lambda_3$-a.e. outside $\overline B_a(0)$, the total charge $Q=\int\rho\,d\lambda_3$ and the dipole moment $p=\int y\,\rho(y)\,d\lambda_3(y)$ about the chart origin are absolutely convergent, and in the finite system of stationary point charges $(x_k,q_k)_{k=1}^N$ one has $Q=\sum_kq_k$ and $p=\sum_kq_kx_k$ as finite sums ([[def-em-electric-moments]]).

[F2] The electric field carries V m$^{-1}$, a force carries the newton, and $\varepsilon_0=(\mu_0c^2)^{-1}>0$; the laboratory structure is that of [[def-em-lab-geometry]] ([[def-em-si-conventions]]).

[F3] An electric field of class $C^k$ is a map $E:\Omega\times I\to\mathbb R^3$, and at fixed $t$ the map $E(\cdot,t):\Omega\to\mathbb R^3$ is a real spatial vector field read in the frame basis; no value at a point of singular source support is asserted ([[def-em-fields]]).

[F4] The postulate's external-field coupling (i) is $m\,dU/d\tau=q\,\Phi(U)$ with $\Phi$ the raised-index operator $\eta(\Phi(u),w)=F(w,u)$ of the field, equivalently $m\,dU^\mu/d\tau=qF^{\mu\nu}U_\nu$, for a constant charge, a supplied rest mass $m>0$ and a future timelike $C^2$ worldline, with the particle's own field excluded; clause (ii) adopts the continuum force density $\rho E+J\times B$ for a smooth source interacting through a matter model to which the coupling applies ([[post-em-lorentz-coupling]]).

[F5] In the chart the electromagnetic two-form has $F_{0i}=-E_i/c$ and $F^{i0}=-E_i/c$ for the field pair $(E,B)$ ([[def-em-electromagnetic-tensor]]).

[F6] A massive worldline is a $C^k$ future timelike curve, $k\ge1$, with everywhere nonzero future timelike tangent; its four-velocity satisfies $\eta(U,U)=-c^2$; and a massive $C^2$ worldline with laboratory reading $t\mapsto r(t)$ satisfies $|r'(t)|<c$ with four-velocity $U=\gamma(c,r')$ and Lorentz factor $\gamma=(1-|r'|^2/c^2)^{-1/2}$, so that at a parameter with $r'=0$ one has $\gamma=1$ and $U=(c,0,0,0)$ ([[def-em-relativistic-worldlines-frames]]).

[F7] On $\mathbb R^3$ the cross product is bilinear and alternating, and $|w\times z|^2=|w|^2|z|^2-\langle w,z\rangle^2$, so $|w\times z|\le|w|\,|z|$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]]).

[F8] For the Euclidean inner product, $|\langle u,w\rangle|\le|u|\,|w|$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F9] If $f,g\in L^1$ and $\alpha,\beta\in\mathbb R$, then $\int(\alpha f+\beta g)=\alpha\int f+\beta\int g$; if $f$ and $g$ agree a.e. their integrals agree; and $|\int f|\le\int|f|$ with monotonicity for nonnegative integrands ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]], [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F10] Finite sums are distributive and may be reindexed, and the empty sum is $0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[F12] Lebesgue measure is the completion of Borel Lebesgue measure under Countable Choice; any finite modification of a measurable function on a subset of a null set remains measurable ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]). For example, each preimage differs from its old measurable preimage only by subsets of that null set.

[F13] For a massive constant-mass $C^2$ worldline, the coordinate spatial momentum is $\mathbf p=m\gamma v$, the coordinate three-force is $\mathbf f=d\mathbf p/dt$, and the four-force $m\,dU/d\tau$ is $\gamma(\mathbf f\cdot v/c,\mathbf f)$ ([[pthm-sr-momentum-and-four-force]] (a),(b)).

[F11] $\overline B_a(0)=\{y:|y|\le a\}$ and $|y|\le a$ holds $\lambda_3$-a.e. on the support of $\rho$; the Euclidean norm obeys the reverse triangle inequality $|\,|u|-|w|\,|\le|u-w|$ ([[def-metric-ball]], [[def-euclidean-inner-product]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

## Proof

**Proof technique:** direct.

1.1 Establish that $F$ and $\tau$ are well defined. Their integrands on the closed ball are measurable products of $\rho$ with continuous coordinate functions; the zero extensions are measurable, and the displayed full-space integrands differ from them only on the null exceptional set where $\rho$ fails to vanish outside the ball, so [F12] supplies measurability of those integrands as well. For $\lambda_3$-a.e. $y$ either $\rho(y)=0$ or $y\in\overline B_a(0)$, and then $|y|\le a$ by [F11]; the Lipschitz property gives $|E_{\mathrm{ext}}(y)|\le|E_{\mathrm{ext}}(0)|+L|y|\le|E_{\mathrm{ext}}(0)|+La$ and hence $|y\times E_{\mathrm{ext}}(y)|\le|y|\,|E_{\mathrm{ext}}(y)|\le a(|E_{\mathrm{ext}}(0)|+La)$ by [F7] and [F8]. Each component of the integrands is therefore dominated $\lambda_3$-a.e. by a finite constant times $|\rho|\in L^1$, so the componentwise integrals converge absolutely by the triangle and monotonicity rules, and no value of $E_{\mathrm{ext}}$ on a null set matters [F9]. [F7, F8, F9, F11, F12, given]

2.1 Expand the force and bound its remainder. Write $E_{\mathrm{ext}}(y)=E_{\mathrm{ext}}(0)+\bigl(E_{\mathrm{ext}}(y)-E_{\mathrm{ext}}(0)\bigr)$ and integrate: by finite linearity of the componentwise integral [F9], $F=\bigl(\int\rho\,d\lambda_3\bigr)E_{\mathrm{ext}}(0)+\int\rho(y)\bigl(E_{\mathrm{ext}}(y)-E_{\mathrm{ext}}(0)\bigr)d\lambda_3(y)=QE_{\mathrm{ext}}(0)+R_F$ with $Q$ as in [F1]. If $R_F\ne0$, test against the unit vector $u:=R_F/|R_F|$: $|R_F|=u\cdot R_F=\int\rho(y)\,u\cdot\bigl(E_{\mathrm{ext}}(y)-E_{\mathrm{ext}}(0)\bigr)d\lambda_3(y)\le\int|\rho(y)|\,|E_{\mathrm{ext}}(y)-E_{\mathrm{ext}}(0)|\,d\lambda_3(y)\le L\int|y|\,|\rho(y)|\,d\lambda_3(y)\le La\|\rho\|_1$, using [F8] for $u\cdot v\le|v|$, the Lipschitz hypothesis, the monotonicity rule, and $|y|\le a$ $\lambda_3$-a.e. on the support [F11]; the case $R_F=0$ is trivial. This is the force statement of (a). [step 1.1, F1, F8, F9, F11]

3.1 Expand the torque and bound its remainder. Since $y\times E_{\mathrm{ext}}(y)=y\times E_{\mathrm{ext}}(0)+y\times\bigl(E_{\mathrm{ext}}(y)-E_{\mathrm{ext}}(0)\bigr)$, finite linearity of the componentwise integral and the bilinearity of the cross product [F7] give $\int\rho(y)\,y\times E_{\mathrm{ext}}(0)\,d\lambda_3(y)=\bigl(\int y\,\rho(y)\,d\lambda_3(y)\bigr)\times E_{\mathrm{ext}}(0)=p\times E_{\mathrm{ext}}(0)$ with $p$ as in [F1], so $\tau=p\times E_{\mathrm{ext}}(0)+R_\tau$ with $R_\tau:=\int\rho(y)\,y\times\bigl(E_{\mathrm{ext}}(y)-E_{\mathrm{ext}}(0)\bigr)d\lambda_3(y)$. For the bound, apply the unit-vector pairing argument of step 2.1 to $R_\tau$ (with the zero case immediate): $|R_\tau|\le\int|\rho(y)|\,|y|\,|E_{\mathrm{ext}}(y)-E_{\mathrm{ext}}(0)|\,d\lambda_3(y)\le L\int|y|^2|\rho|\,d\lambda_3\le La^2\|\rho\|_1$ by [F7], [F9] and [F11]. This is the torque statement of (a). [step 2.1, F1, F7, F9, F11]

4.1 Specialise to the neutral case (b): if $Q=0$, the leading force term $QE_{\mathrm{ext}}(0)$ vanishes and step 2.1 leaves $F=R_F$ with $|R_F|\le La\|\rho\|_1$, while step 3.1 gives the torque as the ideal-dipole torque plus the stated bound. [step 3.1]

5.1 Prove the reference-point shift (c). For any $o\in\mathbb R^3$, $(y-o)\times E_{\mathrm{ext}}(y)=y\times E_{\mathrm{ext}}(y)-o\times E_{\mathrm{ext}}(y)$ by bilinearity [F7]; integrating, $o$ is a constant vector and $\int\rho(y)E_{\mathrm{ext}}(y)\,d\lambda_3(y)=F$, so finite linearity [F9] gives $\tau_o=\tau-o\times F$ exactly. [step 4.1, F7, F9]

6.1 Treat the ideal pair of test charges (d). Under the explicitly adopted finite force assignment $F_k=q_kE_{\mathrm{ext}}(x_k)$, the total force is $F=qE_{\mathrm{ext}}(d/2)-qE_{\mathrm{ext}}(-d/2)=q\bigl(E_{\mathrm{ext}}(d/2)-E_{\mathrm{ext}}(-d/2)\bigr)$, and inserting $\pm E_{\mathrm{ext}}(0)$ gives $F=R_F$ with $R_F=q\bigl[(E_{\mathrm{ext}}(d/2)-E_{\mathrm{ext}}(0))-(E_{\mathrm{ext}}(-d/2)-E_{\mathrm{ext}}(0))\bigr]$ and $|R_F|\le|q|(L|d/2|+L|d/2|)=2|q|La$; the total torque is $\tau=(d/2)\times qE_{\mathrm{ext}}(d/2)+(-d/2)\times(-q)E_{\mathrm{ext}}(-d/2)=q(d/2)\times\bigl(E_{\mathrm{ext}}(d/2)+E_{\mathrm{ext}}(-d/2)\bigr)=q\,d\times E_{\mathrm{ext}}(0)+R_\tau$ with $R_\tau=q(d/2)\times\bigl[(E_{\mathrm{ext}}(d/2)-E_{\mathrm{ext}}(0))+(E_{\mathrm{ext}}(-d/2)-E_{\mathrm{ext}}(0))\bigr]$ and $|R_\tau|\le|q|a\cdot2La=2|q|La^2$, using [F7], the Lipschitz hypothesis and [F10]; the finite-branch moments are $Q=0$ and $p=qd$ by [F1], and no convergence or Lipschitz hypothesis is needed for the bare finite sums themselves. All these sums are finite and choice-free. [step 5.1, F1, F7, F10]

7.1 Instantiate the exact coupling at an instant of rest, proving (d1). Under the additional hypotheses of (d1) the postulate gives $m\,dU^i/d\tau=q'\Phi(U)^i=q'F^{i\nu}U_\nu$ [F4]; at an instant with $r'=0$ the chart reading of the four-velocity is $U=(c,0,0,0)$ by [F6], so the spatial components $U_j$ vanish, $U_0=\eta_{00}U^0=-c$, and only the term $q'F^{i0}U_0$ survives; with $F^{i0}=-E_i/c$ from [F5] this equals $q'(-E_i/c)(-c)=q'E_i$. By [F13], $m\,dU^i/d\tau=\gamma\mathbf f_i$; since $\gamma=1$ at rest, the computed spatial four-force is exactly the coordinate three-force. Hence the covariant equation reproduces the prescribed assignment $F_k=q_kE_{\mathrm{ext}}(x_k)$ at that instant and nothing more: no $C^1$ tensor or massive worldline is inferred from the continuous datum $E_{\mathrm{ext}}$, and no trajectory or permanent-rest claim is made. In the same way the smooth source branch of the postulate reproduces the continuum density $\rho E$ only when its own stated smoothness and matter hypotheses hold [F4]. [step 6.1, F4, F5, F6, F13]

8.1 Record the scope (e) and close the argument. The prescribed data carry the field units and laboratory conventions of [F2]; only the prescribed external field acts in the model, the self-field, other fields, mechanical support and back-reaction are excluded by hypothesis, the external field is a datum rather than a solution of any field equation, and clauses (a)-(c) concern the declared source moments of a prescribed distribution without asserting force dynamics, equilibrium or stability; clause (d) is an instantaneous idealisation with mutual interaction and self-fields excluded, and clause (d1) is a conditional instantiation of the exact coupling, so no empirical, radiative or medium-response content is introduced. The volume integrals used the declared Countable Choice through the Lebesgue interface, while the finite-point algebra of (d) is choice-free. [step 7.1, F2, F3, given]

9.1 Combine the clauses: step 2.1 and step 3.1 give (a) with the stated bounds, step 4.1 gives (b), step 5.1 gives the exact reference-point shift (c), step 6.1 gives the finite two-charge expansions and their choice-free status (d), and step 7.1 gives the conditional covariant specialization (d1), all under the model assumptions of the statement and with the exclusions of step 8.1, which is (e). [step 8.1] ∎
