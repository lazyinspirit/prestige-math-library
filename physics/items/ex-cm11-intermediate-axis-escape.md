---
id: ex-cm11-intermediate-axis-escape
kind: example
title: "Explicit escape from the intermediate-axis spin of the model with
  inertia diag(1,2,3): the constants, the perturbed invariant level, and the
  escape-time bound"
status: published
origin: session
domain: physics
dependency_level: 18
deps:
  [
    post-cm10-rigid-material,
    post-cm11-torque-balance,
    pthm-cm11-torque-free-invariants,
    pthm-cm11-nonlinear-spin-stability,
    def-cm10-inertia-tensor,
    pthm-cm10-principal-axes,
    thm-of-square-roots,
    def-euclidean-inner-product,
    def-interval,
    def-cm01-units,
    ex-cm11-free-top-checks
  ]
dependency_roles:
  post-cm10-rigid-material: formulation-prerequisite
  post-cm11-torque-balance: formulation-prerequisite
  pthm-cm11-torque-free-invariants: physical-result
  pthm-cm11-nonlinear-spin-stability: physical-result
  def-cm10-inertia-tensor: formulation-prerequisite
  pthm-cm10-principal-axes: physical-result
  thm-of-square-roots: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  def-cm01-units: formulation-prerequisite
  ex-cm11-free-top-checks: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked instance of the intermediate-axis instability of
  [[pthm-cm11-nonlinear-spin-stability]] on the declared model with body inertia
  matrix diag(1,2,3) and spin datum $l_0=e_2$: the instability constants, a
  perturbed datum on the same invariant level with the checked proximity bound,
  and the resulting escape time and escape radius. The numerical data are
  declared model parameters; no measurement, no concrete body and no experiment
  is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Section 3.4.3, Eqs. (3.40)-(3.45), printed pages 57-58 (PDF
        pages 63-64): the linear perturbation of the intermediate-axis spin
        and the linear sign criterion; the nonlinear escape is established
        by the cited local mathematical supplier"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics
        (title page last edited September 1, 2026), Chapter 4 Section 4.4,
        chapter pages 15-16 (PDF pages 69-70): Euler equations and discussion of
        extreme principal-axis stability; nonlinear escape is established
        by the cited local mathematical supplier"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical
        Mechanics, 2nd ed. (MIT Press, 2014), Sections 2.8.2-2.9:
        intermediate-axis behaviour on the invariant level curves"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9\
        579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Example

Use the numerical SI convention of [[ex-cm11-free-top-checks]]:
$t=T/(1\,\mathrm s)$ is dimensionless, inertia entries are in
$1\,\mathrm{kg}\,\mathrm m^2$, and $l,L,q,\delta_0,\varepsilon_0$ and
all distances in angular-momentum space are numerical values in
$1\,\mathrm{kg}\,\mathrm m^2\,\mathrm s^{-1}$. Restore the growth rate
by $c_{0,\rm phys}=c_0/(1\,\mathrm s)$ and the escape time by
$T=t(1\,\mathrm s)$; $\delta_0/q$ is dimensionless. The datum below
is model data, not an observation.

Adopt the **model A** of [[ex-cm11-free-top-checks]]: the rigid-material
model of [[post-cm10-rigid-material]] with body inertia matrix
$I=\mathrm{diag}(1,2,3)$ in the declared orthonormal basis, used in the
torque-free branch of [[post-cm11-torque-balance]] clause (iv). Its principal
moments are $I_{1}=1<I_{2}=2<I_{3}=3$
([[pthm-cm10-principal-axes]] clauses (a) and (d)). Take the intermediate-axis
spin datum $l_{0}:=Le_{2}$ with $L=1$, and let $q:=\tfrac1{400}$ and
$$l^{q}:=\Bigl(q,\ \sqrt{1-4q^{2}},\ -\sqrt3\,q\Bigr),$$
so that $q=1/400$ and $\sqrt{1-4q^{2}}=\sqrt{39999/40000}$. Verify:

1. **The instability constants of [[pthm-cm11-nonlinear-spin-stability]] clause 3.**

$$a=\sqrt3,\qquad c_{0}=\frac14,\qquad \delta_{0}=\frac14,\qquad \varepsilon_{0}=\frac12 .$$

2. **The perturbed datum lies on the invariant level of the spin.**
   $C(l^{q})=C(l_{0})=1$ and $E(l^{q})=E(l_{0})=\tfrac14$, where
   $C(z)=\langle z,z\rangle$ and $E(z)=\tfrac12\langle z,I^{-1}z\rangle$ are
   the invariants of [[pthm-cm11-torque-free-invariants]] clause 2.
3. **The perturbed datum is close to the spin.** $\lVert l^{q}-l_{0}\rVert_2<\tfrac1{100}$
   and $q<\min\{\delta_{0},\tfrac1{100}\}$.
4. **The escape.** There is a torque-free motion of model A whose $l$-path has
   $l(0)=l^{q}$ and satisfies
   $$\lVert l(0)-e_{2}\rVert_2<\tfrac1{100},\qquad \lVert l(t)-e_{2}\rVert_2\ge\tfrac12$$
   at some time $0\le t\le4\log 100\approx18.42$; in particular the
   intermediate-axis spin $e_{2}$ of model A is not Lyapunov stable, with an
   explicit effective escape at the displayed constants.

## Facts & Assumptions

**Given:** The model A with $I=\mathrm{diag}(1,2,3)$ and principal moments $I_{1}=1<I_{2}=2<I_{3}=3$, the spin datum $l_{0}=e_{2}$, the number $q=1/400$ and the datum $l^{q}$ of the statement.

[L1] Model data: $I=\mathrm{diag}(1,2,3)$ is symmetric positive definite in the declared basis, so model A is nondegenerate with the displayed principal moments ([[def-cm10-inertia-tensor]] clause (a), [[pthm-cm10-principal-axes]] clauses (a) and (d), [[post-cm10-rigid-material]], [[ex-cm11-free-top-checks]]).

[L2] Instability statement: for a nondegenerate torque-free model with $I_{1}<I_{2}<I_{3}$ and $L\neq0$, the spin $Le_{2}$ is not Lyapunov stable, and with $a$, $c_{0}$, $\delta_{0}$, $\varepsilon_{0}$ as in [[pthm-cm11-nonlinear-spin-stability]] clause 3, for every $\delta>0$ and every $q\in(0,\min\{\delta_{0},\delta\})$ whose prescribed datum additionally satisfies $\lVert l^{q}-Le_{2}\rVert_2<\delta$, there is a torque-free motion with $\lVert l(0)-Le_{2}\rVert_2<\delta$ and a time $t\le c_{0}^{-1}\log(\delta_{0}/q)$ with $\lVert l(t)-Le_{2}\rVert_2\ge\varepsilon_{0}$; the motion's datum is the $l$-path with $l(0)=l^{q}$ of the statement ([[pthm-cm11-nonlinear-spin-stability]] clause 3).

[L3] Invariants and global existence: $C$ and $E$ are constant along every solution of $l'=l\times(I^{-1}l)$, which has a unique global maximal solution through every datum ([[pthm-cm11-torque-free-invariants]] clauses 2 and 4).

[L4] Arithmetic: $\sqrt3\cdot\sqrt3=3$ and the nonnegative square root is unique, $\sqrt4=2$, and for $0\le s\le1$ the elementary ordered-field inequalities used below hold; squares of nonnegative reals are ordered as their bases are ([[thm-of-square-roots]], [[def-euclidean-inner-product]], [[def-interval]], [[def-cm01-units]]).

## Proof

**Proof technique:** direct; compute the instability constants from the principal moments, check the invariants and the proximity of the perturbed datum by explicit arithmetic, and instantiate the escape statement.

1.1 With $I_{1}=1$, $I_{2}=2$, $I_{3}=3$ and $L=1$: $1/I_{1}-1/I_{2}=\tfrac12$, $1/I_{2}-1/I_{3}=\tfrac16$, so $a^{2}=\tfrac{1/2}{1/6}=3$ and $a=\sqrt3>0$ by [L4]; then $c_{0}=a\,(1/I_{2}-1/I_{3})\,\tfrac{\sqrt3}{2}\lvert L\rvert=\sqrt3\cdot\tfrac16\cdot\tfrac{\sqrt3}{2}=\tfrac{3}{12}=\tfrac14$ by [L4]. Further $1+a^{2}=1+3=4$, so $\delta_{0}=\tfrac{\lvert L\rvert}{2\sqrt{1+a^{2}}}=\tfrac1{2\cdot2}=\tfrac14$ by [L4] and $\varepsilon_{0}=\tfrac{\lvert L\rvert}{2}=\tfrac12$, which is claim 1. [given, L1, L4, algebra]

2.1 Writing $s=\sqrt{1-4q^{2}}$, one has $s^{2}=1-4q^{2}$; hence $C(l^{q})=q^{2}+s^{2}+3q^{2}=4q^{2}+1-4q^{2}=1$ and $E(l^{q})=\tfrac12\bigl(q^{2}+\tfrac{s^{2}}{2}+\tfrac{3q^{2}}{3}\bigr)=\tfrac12\bigl(q^{2}+\tfrac{1-4q^{2}}{2}+q^{2}\bigr)=\tfrac12\cdot\tfrac12=\tfrac14$ by [L4]. For $l_{0}=e_{2}$: $C(l_{0})=1$ and $E(l_{0})=\tfrac12\langle e_{2},I^{-1}e_{2}\rangle=\tfrac12\cdot\tfrac12=\tfrac14$. This is claim 2, and by [L3] the perturbed datum and the spin datum lie on the same invariant level. [step 1.1, given, L1, L3, L4, algebra]

2.2 For the proximity bound: $\lVert l^{q}-l_{0}\rVert_2^{2}=q^{2}+(s-1)^{2}+3q^{2}=4q^{2}+(1-s)^{2}$, and $1-s=\tfrac{1-s^{2}}{1+s}=\tfrac{4q^{2}}{1+s}\le4q^{2}$ because $s\ge0$; with $q=\tfrac1{400}$, $4q^{2}=\tfrac{4}{160000}=\tfrac1{40000}$ and $(1-s)^{2}\le(4q^{2})^{2}=\tfrac{16}{400^{4}}=\tfrac{1}{16\cdot10^{8}}<\tfrac{1}{10^{9}}$, so $\lVert l^{q}-l_{0}\rVert_2^{2}\le\tfrac1{40000}+\tfrac1{10^{9}}<\tfrac1{10000}$, whence $\lVert l^{q}-l_{0}\rVert_2<\tfrac1{100}$ by [L4] applied to the nonnegative squares. Moreover $q=\tfrac1{400}<\tfrac1{100}=\min\{\delta_{0},\tfrac1{100}\}$ by step 1.1. This is claim 3. [step 1.1, given, L4, algebra]

3.1 Apply clause 3 of [[pthm-cm11-nonlinear-spin-stability]] with $\delta=\tfrac1{100}$ and $q=\tfrac1{400}$, which is admissible by step 2.2 and [L2]: there is a torque-free motion of model A with $\lVert l(0)-e_{2}\rVert_2<\tfrac1{100}$ and a time $0\le t\le c_{0}^{-1}\log(\delta_{0}/q)$ with $\lVert l(t)-e_{2}\rVert_2\ge\varepsilon_{0}$. With the constants of step 1.1, $c_{0}^{-1}\log(\delta_{0}/q)=4\log\bigl(\tfrac{1/4}{1/400}\bigr)=4\log100$ and $\varepsilon_{0}=\tfrac12$, so the escape-time bound and escape radius of claim 4 follow; by [L3] the motion's $l$-path is defined for all times, so the escape time is finite as displayed. [step 1.1, step 2.2, given, L2, L3, algebra] ∎

## Remarks

- **The escape is effective.** The initial perturbation has $\lVert l(0)-e_{2}\rVert_2<10^{-2}$ while the escape radius is $\tfrac12$ at a time at most $4\log100\approx18.421$ in the declared units; this is a quantitative instance of the statement that the intermediate-axis spin is not Lyapunov stable, not merely a linearized indication.

- **What is declared.** The inertia matrix, the spin datum and the perturbation parameter $q$ are declared model data in the framework's units; no measurement is reported and no concrete body is asserted to have inertia $\mathrm{diag}(1,2,3)$.
