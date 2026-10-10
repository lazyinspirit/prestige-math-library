---
id: pthm-em-classical-interference
kind: physics-theorem
title: "Superposition intensity and the coherent interference cross term"
status: draft
origin: pipeline
domain: physics
dependency_level: 20
deps: [pthm-em-linear-superposition,
       pthm-em-wave-energy-average,
       pthm-em-plane-wave-maxwell,
       def-em-plane-wave-definition,
       lem-em-period-average,
       def-cross-product-in-r3,
       def-euclidean-inner-product,
       def-complex-conjugate-real-imaginary-part-and-modulus,
       def-em-vacuum-energy-flux]
dependency_roles:
  pthm-em-linear-superposition: physical-result
  pthm-em-wave-energy-average: physical-result
  pthm-em-plane-wave-maxwell: physical-result
  def-em-plane-wave-definition: formulation-prerequisite
  lem-em-period-average: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-em-vacuum-energy-flux: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Deterministic superposition identities for two same-frequency ideal plane-wave solutions of the smooth source-free vacuum Maxwell branch in a named inertial chart with SI constants: the averaged energy density of the coherent sum with its interference cross term, the averaged Poynting vector, and the equal-wavevector specialization. Excluded: ensembles or random phases, partially coherent and finite sources, detection or sampling statistics, any empirical conclusion, and any claim discriminating classical from quantum descriptions."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.3.1 p. 86 (the principle of superposition for linear Maxwell theory: any sum of solutions of the form (4.15)-(4.16) is again a solution, and waves travelling in different directions pass through one another)"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.2.2 printed pp. 376-379 (linearity of the wave equation and of Maxwell's equations in vacuum; the polarization vector and monochromatic amplitudes on which the superposition is written)"
verification:
  precheck: pass
---

## Statement

Let $\omega>0$ and let $k_1,k_2\in\mathbb R^3\setminus\{0\}$ satisfy
$|k_1|=|k_2|=\omega/c$. For $j=1,2$ let $e_j\in\mathbb C^3$ with
$k_j\cdot e_j=0$, put $b_j=k_j\times e_j/\omega$ and let $(E_j,B_j)$ be the
plane-wave solutions of [[pthm-em-plane-wave-maxwell]] given by
[[def-em-plane-wave-definition]]. Let $a_1,a_2\in\mathbb R$ and put
$(E,B):=a_1(E_1,B_1)+a_2(E_2,B_2)$. Write
$\hat k_j=k_j/|k_j|$, $T=2\pi/\omega$,
$|z|^2:=z\cdot\overline z=\sum_{\ell=1}^3|z_\ell|^2$ for $z\in\mathbb C^3$,
and $\langle f\rangle(x):=T^{-1}\int_0^Tf(x,s)\,ds$ componentwise.
Then:

(a) [Superposition] $(E,B)$ is a smooth source-free solution of the vacuum
Maxwell equations ([[pthm-em-linear-superposition]]), and at each fixed $x$ it
can be written with a single phase,
$$E(x,t)=\operatorname{Re}(\alpha(x)\,e^{i(k_1\cdot x-\omega t)}),\qquad B(x,t)=\operatorname{Re}(\beta(x)\,e^{i(k_1\cdot x-\omega t)}),$$
where $\alpha(x):=a_1e_1+a_2e_2e^{i\delta(x)}$,
$\beta(x):=a_1b_1+a_2b_2e^{i\delta(x)}$ and
$\delta(x):=(k_2-k_1)\cdot x$; constant relative phases are absorbed in $e_2$.

(b) [Averaged energy density with the coherent cross term] For every $x$,
$$\langle u\rangle(x)=\frac{\varepsilon_0}{4}|\alpha(x)|^2+\frac{1}{4\mu_0}|\beta(x)|^2=\frac{\varepsilon_0}{2}\bigl(a_1^2|e_1|^2+a_2^2|e_2|^2\bigr)+\frac{\varepsilon_0}{2}a_1a_2\operatorname{Re}\bigl(W(x)\bigr),$$
where
$W(x):=\bigl(e_1\cdot\overline e_2+(\hat k_1\times e_1)\cdot(\hat k_2\times\overline e_2)\bigr)e^{-i\delta(x)}$.
The first two terms are the sum of the averaged energy densities of the two
waves ([[pthm-em-wave-energy-average]]); the third is the interference cross
term, which may remain nonzero after time averaging at fixed relative phase.

(c) [Averaged flux and momentum; equal wavevectors] (with $u$ the energy
density and $S$ the Poynting vector of [[def-em-vacuum-energy-flux]])
$\langle S\rangle(x)=\frac{1}{2\mu_0}\operatorname{Re}\bigl(\alpha(x)\times\overline{\beta(x)}\bigr)$.
In particular, if $k_1=k_2=:k$ then the superposition is the single plane wave
with amplitude $a_1e_1+a_2e_2$, and
$\langle u\rangle=\frac{\varepsilon_0}{2}|a_1e_1+a_2e_2|^2$,
$\langle S\rangle=\frac{\varepsilon_0c}{2}|a_1e_1+a_2e_2|^2\hat k$
([[pthm-em-wave-energy-average]]).

(d) [No incoherent or statistical claim] The formulas are deterministic
identities for the specified coherent superposition; they are not an ensemble
average over phases, and no detection statistics, finite-sample visibility
estimate or empirical conclusion is drawn. The computation is a conditional
consequence of the adopted Maxwell postulate and does not by itself distinguish
classical from quantum descriptions of light.

## Facts & Assumptions

**Given:** The frequency $\omega>0$; wavevectors $k_1,k_2\ne0$ with $|k_1|=|k_2|=\omega/c$; amplitudes $e_j\in\mathbb C^3$ with $k_j\cdot e_j=0$ and $b_j=k_j\times e_j/\omega$; the plane-wave fields $(E_j,B_j)$ with phases $\theta_j(x,t)=k_j\cdot x-\omega t$; real coefficients $a_1,a_2$; and the energy density $u$ and Poynting vector $S$ of [[def-em-vacuum-energy-flux]].

[F1] Linear superposition ([[pthm-em-linear-superposition]](a)): for any finite list of field-source pairs satisfying one and the same branch of the vacuum Maxwell postulate on the same region and real coefficients, the corresponding linear combination of fields and sources satisfies the same branch with the same constants; pointwise in the smooth branch.

[F2] Plane-wave solutions ([[pthm-em-plane-wave-maxwell]]): for $|k|=\omega/c$, $k\cdot e=0$ and $b=k\times e/\omega$ the plane-wave pair lies in the source-free smooth Maxwell branch, its fields are $C^\infty$, and $B=\hat k\times E/c$; there are no sources.

[F3] Plane-wave encoding ([[def-em-plane-wave-definition]]): $E_j=\operatorname{Re}(e_j\exp(i\theta_j))$, $B_j=\operatorname{Re}(b_j\exp(i\theta_j))$ componentwise.

[F4] Period averages ([[lem-em-period-average]]): for $a,d\in\mathbb C^3$ and $T=2\pi/\omega$, $\frac1T\int_0^T\langle\operatorname{Re}(ae^{-i\omega t}),\operatorname{Re}(de^{-i\omega t})\rangle\,dt=\frac12\operatorname{Re}(\langle a,\overline d\rangle)$ and $\frac1T\int_0^T\operatorname{Re}(ae^{-i\omega t})\times\operatorname{Re}(de^{-i\omega t})\,dt=\frac12\operatorname{Re}(a\times\overline d)$ componentwise.

[F5] Energy density and Poynting vector ([[def-em-vacuum-energy-flux]]): $u=\frac{\varepsilon_0}{2}\langle E,E\rangle+\frac{1}{2\mu_0}\langle B,B\rangle$ and $S=\frac{1}{\mu_0}E\times B$.

[F6] Single-wave averages ([[pthm-em-wave-energy-average]]): for a single transverse plane wave with amplitude $\tilde e$, wavevector $\tilde k$, $|\tilde k|=\omega/c$, the period-averaged energy density and Poynting vector are $\langle u\rangle=\frac{\varepsilon_0}{2}|\tilde e|^2$ and $\langle S\rangle=\frac{\varepsilon_0c}{2}|\tilde e|^2\hat k$.

[F7] Cross and inner product algebra ([[def-cross-product-in-r3]], [[def-euclidean-inner-product]]): both products are bilinear over $\mathbb R$ and extend componentwise to complex entries as complex-bilinear maps, the cross product is alternating, and the polynomial identity $\langle u\times v,w\times z\rangle=\langle u,w\rangle\langle v,z\rangle-\langle u,z\rangle\langle v,w\rangle$ holds; in particular $\langle\hat k\times u,\hat k\times\overline v\rangle=\langle u,\overline v\rangle$ whenever $\langle\hat k,u\rangle=\langle\hat k,v\rangle=0$ and $|\hat k|=1$.

[F8] Complex parts and conjugation ([[def-complex-conjugate-real-imaginary-part-and-modulus]]): $\operatorname{Re}$ is $\mathbb R$-linear, $\overline{zw}=\overline z\,\overline w$, $z\overline z=|z|^2$, and the complex norm is $|z|=(\sum_\ell|z_\ell|^2)^{1/2}$; for real vectors this is the Euclidean norm.

## Proof

**Proof technique:** direct.

1.1 Setting. For $j=1,2$ the data satisfy $|k_j|=\omega/c$, $k_j\cdot e_j=0$ and $b_j=k_j\times e_j/\omega$, so by [F2] each $(E_j,B_j)$ of [F3] is a $C^\infty$ source-free solution of the smooth vacuum Maxwell branch on $\mathbb R^3\times\mathbb R$; put $\theta_j(x,t)=k_j\cdot x-\omega t$ and $\delta(x):=(k_2-k_1)\cdot x=\theta_2(x,t)-\theta_1(x,t)$, a function of $x$ alone. [given, F2, F3]

2.1 Clause (a). The pairs $(E_1,B_1,\rho_1,J_1)$ and $(E_2,B_2,\rho_2,J_2)$ with $\rho_1=\rho_2=0$, $J_1=J_2=0$ each satisfy the smooth branch on the same whole-space region by step 1.1, so [F1](a) with $n=2$ and the real coefficients $a_1,a_2$ gives that $(E,B)=a_1(E_1,B_1)+a_2(E_2,B_2)$ satisfies the smooth source-free branch with the same constants, and the fields are $C^\infty$ as finite linear combinations of $C^\infty$ fields. The single-phase rewriting follows from $\exp(i\theta_2)=\exp(i\delta(x))\exp(i\theta_1)$ and the $\mathbb R$-linearity of $\operatorname{Re}$ of [F8]: componentwise $E=\operatorname{Re}(e_1e^{i\theta_1})a_1+\operatorname{Re}(e_2e^{i\theta_1}e^{i\delta})a_2=\operatorname{Re}\bigl((a_1e_1+a_2e_2e^{i\delta})e^{i\theta_1}\bigr)=\operatorname{Re}(\alpha e^{i\theta_1})$ by the field arithmetic of $\mathbb C$, and identically for $B$ with $\beta=a_1b_1+a_2b_2e^{i\delta}$. [step 1.1, F1, F3, F8, algebra]

3.1 Clause (b). Fix $x$ and write $\theta=\theta_1(x,t)=k_1\cdot x-\omega t$, so that by step 2.1 $E=\operatorname{Re}(A e^{-i\omega t})$ and $B=\operatorname{Re}(D e^{-i\omega t})$, where $A:=\alpha(x)e^{ik_1\cdot x}$ and $D:=\beta(x)e^{ik_1\cdot x}$. Applying [F4] to the scalar components (equivalently its vector form with one component retained) gives $\langle E_iE_j\rangle=\frac12\operatorname{Re}(A_i\overline{A_j})=\frac12\operatorname{Re}(\alpha_i\overline{\alpha_j})$, since $e^{ik_1\cdot x}e^{-ik_1\cdot x}=1$, hence $\langle|E|^2\rangle=\frac12|\alpha|^2$, and likewise $\langle|B|^2\rangle=\frac12|\beta|^2$; therefore $\langle u\rangle=\frac{\varepsilon_0}{4}|\alpha|^2+\frac{1}{4\mu_0}|\beta|^2$ by [F5]. Expanding the squares with the complex bilinearity of [F7] and [F8] gives $|\alpha|^2=a_1^2|e_1|^2+a_2^2|e_2|^2+2a_1a_2\operatorname{Re}\bigl(e_1\cdot\overline e_2e^{-i\delta}\bigr)$ and $|\beta|^2=a_1^2|b_1|^2+a_2^2|b_2|^2+2a_1a_2\operatorname{Re}\bigl(b_1\cdot\overline b_2e^{-i\delta}\bigr)$. For the magnetic terms, $|b_j|^2=\omega^{-2}\langle k_j\times e_j,\overline{k_j\times e_j}\rangle=\omega^{-2}|k_j|^2|e_j|^2=|e_j|^2/c^2$ by [F7] and $k_j\cdot e_j=0$, and $b_1\cdot\overline b_2=\omega^{-2}(k_1\times e_1)\cdot\overline{(k_2\times e_2)}=\frac{|k_1||k_2|}{\omega^2}(\hat k_1\times e_1)\cdot(\hat k_2\times\overline e_2)=\frac{1}{c^2}(\hat k_1\times e_1)\cdot(\hat k_2\times\overline e_2)$; substituting and using $\frac{1}{4\mu_0c^2}=\frac{\varepsilon_0}{4}$ from the SI relation gives $\langle u\rangle=\frac{\varepsilon_0}{2}(a_1^2|e_1|^2+a_2^2|e_2|^2)+\frac{\varepsilon_0}{2}a_1a_2\operatorname{Re}(W)$ with $W=(e_1\cdot\overline e_2+(\hat k_1\times e_1)\cdot(\hat k_2\times\overline e_2))e^{-i\delta}$, which is clause (b). [step 2.1, F4, F5, F7, F8, algebra]

3.2 Clause (c). At the same fixed $x$, the cross-product form of [F4] gives $\langle E\times B\rangle=\frac12\operatorname{Re}(A\times\overline D)=\frac12\operatorname{Re}(\alpha\times\overline\beta)$, since the common spatial phase cancels, so $\langle S\rangle=\frac{1}{\mu_0}\langle E\times B\rangle=\frac{1}{2\mu_0}\operatorname{Re}(\alpha\times\overline\beta)$ by [F5], which is the first display of clause (c). If $k_1=k_2=:k$ then $\delta=0$, $\alpha=a_1e_1+a_2e_2=:\tilde e$ and $\beta=a_1b_1+a_2b_2$; by the bilinearity of the cross product [F7], $\beta=k\times(a_1e_1+a_2e_2)/\omega=k\times\tilde e/\omega$, and $k\cdot\tilde e=0$, so $(E,B)$ is exactly the single plane wave with amplitude $\tilde e$ and wavevector $k$, of the class covered by [F6]; clause (a) of [F6] gives $\langle u\rangle=\frac{\varepsilon_0}{2}|\tilde e|^2$ and clause (b) gives $\langle S\rangle=\frac{\varepsilon_0c}{2}|\tilde e|^2\hat k$. These agree with clauses (b) and the first display of (c): when $k_1=k_2=k$ the bracket in $W$ reduces to $2e_1\cdot\overline e_2$ by the identity of [F7], and $|\tilde e|^2=a_1^2|e_1|^2+a_2^2|e_2|^2+2a_1a_2\operatorname{Re}(e_1\cdot\overline e_2)$ by [F8]. [step 2.1, F4, F5, F6, F7, F8, algebra]

4.1 Conclusion and scope. Step 2.1 is clause (a), step 3.1 is clause (b), step 3.2 is clause (c), and clause (d) is a scope qualification on the same computation: every average above is the deterministic period average at a fixed point of the specified coherent superposition, no ensemble or random-phase average, detector model, finite-sample frequency or visibility estimate is introduced, and nothing in the proof uses any property distinguishing classical from quantum descriptions of light beyond the adopted Maxwell equations and the definitions; in particular classical electromagnetic waves interfere, so these formulas do not by themselves discriminate between descriptions. The identities are conditional on the adopted postulate and make no empirical claim. [step 2.1, step 3.1, step 3.2, F5, given] ∎

## Source notes

The cited treatments state the superposition principle for linear Maxwell theory and the monochromatic amplitude representation on which the two-beam sum is written; the interference cross term and its averaged form are proved here from the framework's own definitions and period-average lemma. The scope qualification (d) records explicitly that this is a deterministic field calculation, not a detection or sampling analysis.
