---
id: ex-nrqm-central-hydrogen-radial-distributions-and-moments
aliases: [nrqm-central-hydrogen-radial-distributions-and-moments]
kind: example
domain: physics
title: "Low-lying radial distributions of the Coulomb model: normalisations, moments and the failure of cross-l orthogonality of reduced functions"
status: draft
origin: session
dependency_level: 16
deps: [def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-bound-state-radial-distributions, pthm-nrqm-kinematics-spin-s-outcome-laws, lem-nrqm-central-exponential-moments, thm-nrqm-coulomb-kummer-recurrence-and-termination, def-nrqm-framework-quantities-and-units, def-countable-choice]
dependency_roles:
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-bound-state-radial-distributions: physical-result
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  lem-nrqm-central-exponential-moments: mathematical-premise
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "An exact computation of the reduced radial functions, their normalisations and low moments for the states with n = 1 and n = 2 of the declared one-centre Coulomb model, together with the explicit check that reduced radial functions of different angular momentum are not orthogonal in L^2(dr). The example is a conditional model computation in terms of the declared parameters; it reports no measured radius or density, identifies no size with a laboratory length, and asserts no orbit or trajectory."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1.2, printed pages 187-193 (Table 8.1 of radial eigenfunctions for n <= 3, equation (8.37) <r> = n(n+1/2)a_0/Z for circular orbits and equations (8.52)-(8.60) for <r^-1>, <r^-2>, <r^-3>)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.3.2, printed pages 116-117 (the generalised Laguerre radial functions L^{2l+1}_{n-l-1}(2r/(n r_B)) and the ground state)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.4, printed pages 229-235 (the explicit Laguerre eigenfunctions and their normalisation)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Example

Adopt the declared one-centre Coulomb model
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (a)-(c) with
parameters $\hbar>0$, $m>0$, coupling $\kappa>0$ and
$a:=a_{\kappa}=\hbar^{2}/(m\kappa)$, and the radial reading of
[[pthm-nrqm-central-coulomb-bound-state-radial-distributions]]. In the
notation of that item, $u_{nl}$ denotes the reduced regular solution with
$\psi_{nlm}(x)=u_{nl}(r)Y_{lm}(\Omega)/r$ and $p_{nl}=|u_{nl}|^{2}/\|u_{nl}\|_{2}^{2}$
the radial density of the normalised bound state. For the three reduced
solutions below choose the normalisation $\|u_{nl}\|_2=1$ and the phase
for which the coefficient $c_{nl}$ multiplying the displayed Laguerre
polynomial-exponential expression is positive real. Then:

(a) $u_{10}(r)=2a^{-3/2}r\,e^{-r/a}$ and
$u_{20}(r)=2^{-3/2}a^{-3/2}\bigl(2r-\frac{r^{2}}{a}\bigr)e^{-r/(2a)}$ and
$u_{21}(r)=2^{-3/2}3^{-1/2}a^{-5/2}r^{2}e^{-r/(2a)}$;

(b) $\|u_{10}\|_{2}=\|u_{20}\|_{2}=\|u_{21}\|_{2}=1$, so for these states the
reduced solution is already normalised and $p_{nl}=|u_{nl}|^{2}$;

(c) the moments
$$\int_{0}^{\infty}r\,p_{10}(r)\,dr=\frac{3a}{2},\qquad \int_{0}^{\infty}r^{2}p_{10}(r)\,dr=3a^{2},\qquad \int_{0}^{\infty}r\,p_{20}(r)\,dr=6a,\qquad \int_{0}^{\infty}r\,p_{21}(r)\,dr=5a,$$
and
$$\int_{0}^{\infty}\frac{p_{20}(r)}{r}\,dr=\int_{0}^{\infty}\frac{p_{21}(r)}{r}\,dr=\frac{1}{4a};$$

(d) the same-$l$ pair is orthogonal,
$\int_{0}^{\infty}u_{10}(r)u_{20}(r)\,dr=0$, while the different-$l$ pair is
not: $\int_{0}^{\infty}u_{20}(r)u_{21}(r)\,dr=-\frac{\sqrt 3}{2}\ne0$, so the
reduced radial functions of different angular momentum are not orthogonal in
$L^{2}((0,\infty),dr)$, the orthogonality of the full bound states being
carried by the angular factor;

(e) the closed forms of (a) agree with the standard radial functions
$R_{nl}=u_{nl}/r$ of the cited treatments for these states, and the value
$\int r\,p_{nl}$ for the circular state $n=2$, $l=1$ agrees with the general
circular-orbit formula $\langle r\rangle_{n,n-1}=n(n+\tfrac12)a$ at $n=2$;

(f) *Scope.* The computation is conditional on the declared model and the
cited mathematics; $a$ is a model scale, the moments are moments of the
model's radial reading and not measured radii, and no measurement, orbit or
trajectory is asserted.

## Verification

**Given:** The declared one-centre Coulomb model with $\hbar,m,\kappa>0$, $a=\hbar^{2}/(m\kappa)$, $\gamma=2/a$; the reduced solutions $u_{nl}$ of the model with $\psi_{nlm}=u_{nl}(r)Y_{lm}(\Omega)/r$; the Axiom of Countable Choice.

[L1] **Exponential moments.** For every $\lambda>0$ and integer $k\ge0$, $\int_{0}^{\infty}r^{k}e^{-\lambda r}dr=k!/\lambda^{k+1}$ ([[lem-nrqm-central-exponential-moments]]).

[L2] **Reduced solutions.** $u_{nl}(r)=c_{nl}r^{l+1}e^{-r/(na)}L_{n-l-1}^{(2l+1)}(2r/(na))$ with $c_{nl}\ne0$ and $L_{j}^{(a)}$ the Laguerre polynomial $L_{j}^{(a)}(x)=\sum_{i=0}^{j}(-1)^{i}\binom{j+a}{j-i}x^{i}/i!$; for $j=0$ one has $L_{0}^{(a)}=1$ and for $j=1$ one has $L_{1}^{(a)}(x)=1+a-x$ ([[thm-nrqm-coulomb-kummer-recurrence-and-termination]] clause (d), [[pthm-nrqm-central-coulomb-bound-state-radial-distributions]] clause (c)).

[L3] **Radial reading.** For a radial set the position law of the normalised bound state is $\int_{a}^{b}p_{nl}(r)dr$ with $p_{nl}=|u_{nl}|^{2}/\|u_{nl}\|_{2}^{2}$, and $\int_{0}^{\infty}p_{nl}dr=1$ ([[pthm-nrqm-central-coulomb-bound-state-radial-distributions]] clause (a), [[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (b)).

**Proof technique:** direct; insert the Laguerre data into the closed forms, evaluate the resulting elementary integrals with the exponential-moments lemma, and compare with the cited radial functions.

**Given:** The data of the statement and [L1]-[L3].

1.1 [Closed forms] For $n=1$, $l=0$: $j=0$, $k=1/(na)=1/a$, so [L2] gives $u_{10}(r)=c\,r e^{-r/a}$. For $n=2$, $l=0$: $j=1$, $L_{1}^{(1)}(x)=2-x$ and $k=1/(2a)$, so $u_{20}(r)=c\,r e^{-r/(2a)}(2-r/a)$. For $n=2$, $l=1$: $j=0$, $L_{0}^{(3)}=1$ and $k=1/(2a)$, so $u_{21}(r)=c\,r^{2}e^{-r/(2a)}$. The constants $c$ are fixed by the normalisation condition $\|u_{nl}\|_{2}=1$, evaluated in the next step, giving the displayed coefficients of (a). [given, L2, algebra]

2.1 [Normalisations] By [L1] with $\lambda=2/a$: $\int_{0}^{\infty}r^{2}e^{-2r/a}dr=2/(2/a)^{3}=a^{3}/4$ and $\int_{0}^{\infty}r^{4}e^{-2r/a}dr=24/(2/a)^{5}=3a^{5}/4$; hence $\int_{0}^{\infty}(2a^{-3/2}r e^{-r/a})^{2}dr=4a^{-3}\cdot a^{3}/4=1$, so $c=2a^{-3/2}$ for $u_{10}$ and $\|u_{10}\|_{2}=1$. By [L1] with $\lambda=1/a$: $\int_{0}^{\infty}r^{2}e^{-r/a}dr=2a^{3}$, $\int_{0}^{\infty}r^{3}e^{-r/a}dr=6a^{4}$, $\int_{0}^{\infty}r^{4}e^{-r/a}dr=24a^{5}$; expanding $(2-r/a)^{2}=4-4r/a+r^{2}/a^{2}$ gives $\int_{0}^{\infty}r^{2}(2-r/a)^{2}e^{-r/a}dr=8a^{3}-24a^{3}+24a^{3}=8a^{3}$, so $c=2^{-3/2}a^{-3/2}$ yields $\|u_{20}\|_{2}=1$; and $c^{2}\int r^{4}e^{-r/a}dr=c^{2}\cdot 24a^{5}=1$ gives $c=24^{-1/2}a^{-5/2}=2^{-3/2}3^{-1/2}a^{-5/2}$ for $u_{21}$. This is (b). [step 1.1, L1, algebra]

2.2 [Moments of the ground state] With $p_{10}=4a^{-3}r^{2}e^{-2r/a}$, [L1] gives $\int_0^\infty r\,p_{10}(r)dr=4a^{-3}\cdot3!/(2/a)^4=4a^{-3}\cdot6a^4/16=3a/2$ and $\int_0^\infty r^2p_{10}(r)dr=4a^{-3}\cdot4!/(2/a)^5=4a^{-3}\cdot24a^5/32=3a^2$. Thus the variance is $3a^2-(3a/2)^2=3a^2/4$. [step 1.1, L1, algebra]

2.3 [Moments of the $n=2$ states] With $p_{20}=2^{-3}a^{-3}r^{2}(2-r/a)^{2}e^{-r/a}$ and $p_{21}=24^{-1}a^{-5}r^{4}e^{-r/a}$, [L1] gives $\int r\,p_{20}=2^{-3}a^{-3}\int r^{3}(2-r/a)^{2}e^{-r/a}dr=2^{-3}a^{-3}\cdot a^{4}\int x^{3}(4-4x+x^{2})e^{-x}dx=2^{-3}a^{-3}\cdot a^{4}(4\cdot 3!-4\cdot 4!+5!)=2^{-3}a^{-3}\cdot 48a^{4}=6a$; and $\int r\,p_{21}=24^{-1}a^{-5}\cdot 5!a^{6}=5a$. Moreover $\int r^{-1}p_{20}=2^{-3}a^{-3}\int r(2-r/a)^{2}e^{-r/a}dr=2^{-3}a^{-3}(4\cdot 1!\,a^{2}-4\cdot 2!\,a^{2}+3!\,a^{2})=2^{-3}a^{-3}\cdot 2a^{2}=a^{-1}/4$, and $\int r^{-1}p_{21}=24^{-1}a^{-5}\cdot 3!a^{4}=a^{-1}/4$. This is (c). [step 1.1, L1, algebra]

2.4 [Overlaps] With $u_{10}=2a^{-3/2}re^{-r/a}$ and $u_{20}=2^{-3/2}a^{-3/2}(2r-r^{2}/a)e^{-r/(2a)}$ one has $\int u_{10}u_{20}dr=2^{-1/2}a^{-3}\int(2r^{2}-r^{3}/a)e^{-3r/(2a)}dr$; by [L1] with $\lambda=3/(2a)$, $\int r^{2}e^{-3r/(2a)}dr=2(2a/3)^{3}=16a^{3}/27$ and $\int r^{3}e^{-3r/(2a)}dr=6(2a/3)^{4}=32a^{4}/27$, so the bracket is $2\cdot 16a^{3}/27-(32a^{4}/27)/a=0$: the same-$l$ pair is orthogonal. With $u_{21}=2^{-3/2}3^{-1/2}a^{-5/2}r^{2}e^{-r/(2a)}$, the cross overlap is $\int u_{20}u_{21}dr=2^{-3}3^{-1/2}a^{-4}\int(2r^{3}-r^{4}/a)e^{-r/a}dr=2^{-3}3^{-1/2}a^{-4}(2\cdot 6a^{4}-24a^{4})=2^{-3}3^{-1/2}(-12)=-3/(2\sqrt3)=-\sqrt3/2$, nonzero. This is (d). [step 1.1, L1, algebra]

3.1 [Cross-checks and scope] Since $R_{nl}=u_{nl}/r$, step 1.1 gives $R_{10}=2a^{-3/2}e^{-r/a}$, $R_{20}=2^{-3/2}a^{-3/2}(2-r/a)e^{-r/(2a)}$ and $R_{21}=2^{-3/2}3^{-1/2}a^{-3/2}(r/a)e^{-r/(2a)}$, which agree with the cited tabulated radial functions, and the value $5a$ of step 2.3 agrees with the circular-orbit formula $\langle r\rangle_{n,n-1}=n(n+\tfrac12)a$ at $n=2$; this is (e). Only the declared model, the cited mathematics and the exponential-moments lemma were used, and $a$ remains a model scale, so the scope statement (f) holds. [step 1.1, step 2.3, L1, L2, L3] ∎

## Remarks

- **Why cross-$l$ overlaps need not vanish.** The full bound states
  $\psi_{nlm}$ and $\psi_{n'l'm'}$ are orthogonal in $L^{2}(\mathbb R^{3})$
  whenever the angular factors $Y_{lm},Y_{l'm'}$ are orthogonal, even if the
  reduced radial functions overlap; the nonzero value $-\sqrt3/2$ computed in
  (d) is exactly such a case. No orthogonality of reduced functions across
  angular momenta is claimed anywhere on this pair.
- **Moments are readings, not measurements.** The mean radius and the inverse
  radius are moments of the model's radial reading; the inverse-radius value
  $1/(4a)$ for the two $n=2$ states is a consistency check with the model's
  virial-type relation and is not compared with any measured quantity here.
