---
id: ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit
aliases: [ nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit ]
kind: example
domain: physics
title: "Tunnelling through a rectangular barrier: an exactly solvable scaling
  and its thick-barrier comparison"
status: draft
origin: session
dependency_level: 12
deps:
  [
    pthm-nrqm-potentials-barrier-flux-and-transmission,
    def-nrqm-potentials-one-dimensional-line-model,
    def-nrqm-framework-quantities-and-units,
    def-natural-logarithm,
    thm-exponential-addition-formula,
    cor-exponential-reciprocal-and-positivity,
    def-hyperbolic-functions,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  pthm-nrqm-potentials-barrier-flux-and-transmission: physical-result
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-natural-logarithm: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite check in the declared line model of the pair: the
  rectangular barrier with height twice the incident energy and a width scaling
  chosen so that the barrier exponent is the natural logarithm of ten. The
  example computes the exact transmission and reflection coefficients as
  rational numbers, brackets them by rationals, compares the exact value with
  the thick-barrier approximation and verifies the theorem's error bound. It is
  a computation in the model, not a measurement; it reports no count, no
  apparatus and no empirical value, and it makes no claim about nature."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 2.4.2,
        printed pages 60-63 (PDF pages 63-66): the barrier matching calculation,
        the transmission probability and the thick-barrier exponential
        suppression"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 5.3,
        printed pages 87-89 (PDF pages 95-97): tunnelling through a potential
        barrier"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Work in the declared line model
[[def-nrqm-potentials-one-dimensional-line-model]] with mass parameter $m>0$,
action constant $\hbar>0$, and lengths, energies and currents read in the
units of [[def-nrqm-framework-quantities-and-units]]. Declare the incident
energy $E>0$ and the barrier height $U:=2E$, so that
$\kappa:=\sqrt{2m(U-E)}/\hbar=\sqrt{2mE}/\hbar=:k$; declare further the barrier
width $a:=\ln(10)/\kappa>0$, so that $\kappa a=\ln 10$ and
$e^{\kappa a}=10$. Consider the scattering solution of
[[pthm-nrqm-potentials-barrier-flux-and-transmission]] for this barrier and
set $q:=e^{-2\kappa a}$. Then, as exact identities in the model:

(i) $C:=U^{2}/(4E(U-E))=1$, $q=1/100$, and
$$T=\frac{400}{10201},\qquad R=1-T=\frac{9801}{10201};$$

(ii) with rational brackets,
$$\frac{3921}{100000}<T<\frac{3922}{100000},\qquad \frac{96078}{100000}<R<\frac{96079}{100000};$$

(iii) the thick-barrier approximation value is
$\frac{16E(U-E)}{U^{2}}q=\frac{1}{25}$, the exact difference is
$$T-\frac{1}{25}=-\frac{201}{255025},$$
which lies between $-0.000789$ and $-0.000788$, and the error bound of the
theorem reads
$$\Bigl|T-\frac1{25}\Bigr|\le\frac{201}{125000}=0.001608 ;$$

(iv) since $q=1/100>0$, the transmission $T$ is positive although the
declared barrier height satisfies $U>E$; and by clause (b) of the
barrier theorem the number $T$ is the transmitted fraction of the reference
current $j_{\mathrm{in}}=(\hbar k/m)|A_{\mathrm{in}}|^{2}$, with
$A_{\mathrm{in}}=1\,\mathrm{m}^{-1/2}$, while $R$ is the reflected fraction.

The example is an exact computation in the declared barrier model with
declared data $U,E,a,m,\hbar$ related as above; it records no measurement and
no apparatus value.

## Verification

**Proof technique:** direct; reduce the barrier formula under $U=2E$, evaluate
the hyperbolic cosine at $\kappa a=\ln 10$ with the exponential addition and
reciprocal laws, and verify the thick-barrier comparison by rational
arithmetic.

**Given:** The line model and the scattering theorem of the barrier item; the declared data $E>0$, $U=2E$, $a=\ln(10)/\kappa$ with $\kappa=\sqrt{2mE}/\hbar$, and $A_{\mathrm{in}}=1\,\mathrm{m}^{-1/2}$.

[F1] **Barrier formulas.** Under the hypotheses of [[pthm-nrqm-potentials-barrier-flux-and-transmission]] one has $T=|t|^{2}=[1+U^{2}\sinh^{2}(\kappa a)/(4E(U-E))]^{-1}$, $R=1-T$, $j=\frac{\hbar k}{m}|A_{\mathrm{in}}|^{2}(1-|r|^{2})=\frac{\hbar k}{m}|A_{\mathrm{in}}|^{2}|t|^{2}$, the reading of $T$ and $R$ as fractions of the reference current $j_{\mathrm{in}}=(\hbar k/m)|A_{\mathrm{in}}|^{2}$, and, with $q=e^{-2\kappa a}$ and $C=U^{2}/(4E(U-E))$, the thick-barrier form $T=(4/C)q/(1+(\frac4C-2)q+q^{2})$ with error bound $|T-\frac{16E(U-E)}{U^{2}}q|\le\frac{32E(U-E)}{U^{2}}q|\delta|$ whenever $|\delta|\le\frac12$, $\delta=(\frac4C-2)q+q^{2}$ (clauses (a)-(c) of the theorem).

[F2] **Exponential and hyperbolic laws.** $\exp(x+y)=\exp(x)\exp(y)$ for all real $x,y$; $\exp(-x)=1/\exp(x)$ for every real $x$; and $\log:(0,\infty)\to\mathbb R$ is the inverse of $\exp$, so that $\exp(\log 10)=10$; the real functions $\sinh$ and $\cosh$ are defined by $\sinh z=(e^{z}-e^{-z})/2$ and $\cosh z=(e^{z}+e^{-z})/2$ for real $z$, and satisfy $\cosh^{2}-\sinh^{2}=1$ ([[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]], [[def-natural-logarithm]], [[def-hyperbolic-functions]]).

[F3] **Rational arithmetic.** For positive integers the usual order and field laws of the rationals hold; in particular $x<y$ if and only if $ax<ay$ for $a>0$, and $\frac{p}{q}<\frac{r}{s}$ if and only if $ps<rq$ for positive denominators.

1.1 [Reduction of the data] $U=2E$ gives $U-E=E$, so $C=U^{2}/(4E(U-E))=(2E)^{2}/(4E\cdot E)=1$ and $\kappa=\sqrt{2mE}/\hbar=k$; the declared width gives $\kappa a=\ln 10$, hence $q=e^{-2\kappa a}=\exp(-2\ln 10)=\bigl(\exp(\ln 10)\bigr)^{-2}=10^{-2}=1/100$ by [F2]. [given, F2, algebra]

2.1 [Exact coefficients] With $C=1$ the formula of [F1] reads $T=\bigl[1+\sinh^{2}(\kappa a)\bigr]^{-1}=\cosh^{-2}(\kappa a)$ by $\cosh^{2}-\sinh^{2}=1$ of [F2]. By [F2], $\cosh(\kappa a)=\frac{e^{\kappa a}+e^{-\kappa a}}{2}=\frac{10+1/10}{2}=\frac{101}{20}$, so $T=\bigl(\frac{101}{20}\bigr)^{-2}=\frac{400}{10201}$ and $R=1-T=\frac{10201-400}{10201}=\frac{9801}{10201}$. [step 1.1, F1, F2, F3, algebra]

3.1 [Thick-barrier comparison] With $C=1$ and $q=\frac1{100}$, [F1] gives the thickness coefficient $\frac{16E(U-E)}{U^{2}}=\frac{16E\cdot E}{4E^{2}}=4$, so the approximation value is $4q=\frac{4}{100}=\frac1{25}$ and the exact difference is $\frac{400}{10201}-\frac1{25}=\frac{400\cdot 25-10201}{10201\cdot 25}=\frac{10000-10201}{255025}=-\frac{201}{255025}$. The parameter $\delta=(4-2)q+q^{2}=\frac{2}{100}+\frac{1}{10000}=\frac{201}{10000}$ satisfies $|\delta|=\frac{201}{10000}\le\frac12$, and the error bound is $\frac{32E(U-E)}{U^{2}}q|\delta|=\frac{32E^{2}}{4E^{2}}\cdot\frac1{100}\cdot\frac{201}{10000}=\frac{201}{125000}$. The exact difference obeys $\frac{201}{255025}<\frac{201}{125000}$ by [F3] because $125000$ and $255025$ are positive and $\frac{201}{255025}<\frac{201}{125000}$ is equivalent to $201\cdot 125000<201\cdot 255025$; this verifies the stated bound. The rational brackets of (iii) follow from the exact fractions: $\frac{788}{1000000}<\frac{201}{255025}<\frac{789}{1000000}$ because $788\cdot 255025<201\cdot 1000000<789\cdot 255025$, and $\frac{201}{125000}=\frac{1608}{1000000}$. [step 2.1, F1, F3, algebra]

3.2 [Rational brackets] By [F3], $\frac{3921}{100000}<\frac{400}{10201}$ is equivalent to $3921\cdot 10201<400\cdot 100000$, i.e. to $39\,998\,121<40\,000\,000$, which holds; and $\frac{400}{10201}<\frac{3922}{100000}$ is equivalent to $400\cdot 100000<3922\cdot 10201$, i.e. to $40\,000\,000<40\,008\,322$, which holds. Hence $\frac{3921}{100000}<T<\frac{3922}{100000}$; subtracting from $1$ reverses the inequalities and gives $\frac{96078}{100000}<R<\frac{96079}{100000}$, since $1-\frac{3922}{100000}=\frac{96078}{100000}$ and $1-\frac{3921}{100000}=\frac{96079}{100000}$. [step 2.1, F3, algebra]

4.1 [Reading] By the barrier theorem clause (b), the conserved current of the scattering solution is $j=\frac{\hbar k}{m}|A_{\mathrm{in}}|^{2}|t|^{2}=Tj_{\mathrm{in}}$, where $j_{\mathrm{in}}=(\hbar k/m)|A_{\mathrm{in}}|^{2}$; $T$ is the transmitted fraction and $R$ is the reflected fraction of this reference current. Since $q>0$, $T=\frac{400}{10201}>0$ even though $E<U$, which is the tunnelling statement of the model. This is a model computation and asserts no measured count or apparatus behaviour. [step 1.1, step 2.1, F1, algebra] ∎

## Remarks

- **Why this scaling is exactly solvable.** At $U=2E$ the factor
  $U^{2}/(4E(U-E))$ equals one and $\kappa=k$, so the general barrier formula
  collapses to $\operatorname{sech}^{2}(\kappa a)$, and the width
  $a=\ln(10)/\kappa$ makes the hyperbolic cosine rational.
- **What the check shows and what it does not.** The computation verifies the
  exact formulas, the rational brackets and the published error bound of the
  barrier theorem at one declared parameter point. It does not establish the
  accuracy of the physical model, does not compare with data and produces no
  experimental conclusion.
