---
id: ex-cm17-spring-chain-limit-numbers
kind: example
title: "Chain versus string on the normalized standing wave: exact discrete error, the N=100 bounds, and physical circumference 2π m"
status: draft
origin: session
domain: physics
dependency_level: 10
deps: [thm-ftc-second-part, thm-continuous-implies-integrable, cor-mean-value-theorem, thm-sine-and-cosine-addition-formulas, thm-ftc-first-part, pthm-cm17-chain-limit-of-the-string-model, thm-cm-spring-chain-continuum-limit, thm-cm-spring-chain-dispersion-relation, def-cm-cyclic-spring-chain, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, def-cm17-continuum-body-and-units]
dependency_roles:
  thm-ftc-second-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  pthm-cm17-chain-limit-of-the-string-model: physical-result
  thm-cm-spring-chain-continuum-limit: mathematical-premise
  thm-cm-spring-chain-dispersion-relation: mathematical-premise
  def-cm-cyclic-spring-chain: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked comparison in SI-normalized numerical variables of the cyclic mass-spring chain and continuum string on the standing wave sin(x)cos(t), using a physical circumference of 2π m, linear density 1 kg m^{-1}, tension 1 N, and speed 1 m s^{-1}. It computes the exact chain solution and frequency, nodal error, the theorem's nodal and full interpolation bounds at N=100 (both O(a^{3/2}) for fixed positive time, with interpolation remainder Aa^2/8), the sharper O(a^2) nodal and interpolation errors for these standing-wave data, and the dispersion-relation error a^2/12. The normalized results are model calculations, not measurements."
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 6.1 (discrete mass-spring chain and continuum elastic-rod derivation; the standing-wave numerical comparison is verified locally)"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Sections 6.2-6.5 (the discrete chain, its dispersion and its continuum limit)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Take the periodic string model of [[pthm-cm17-chain-limit-of-the-string-model]]
with physical circumference $L_*=2\pi\,\mathrm m$, linear mass density
$\rho_{\ell,*}=1\,\mathrm{kg\,m^{-1}}$ and tension
$\tau_{s,*}=1\,\mathrm N=1\,\mathrm{kg\,m\,s^{-2}}$. Then
$c_*:=\sqrt{\tau_{s,*}/\rho_{\ell,*}}=1\,\mathrm{m\,s^{-1}}$.
Use reference units $\ell_*=1\,\mathrm m$, $\tau_*=1\,\mathrm s$ and
displacement scale $A_*=1\,\mathrm m$. In the equations below, $x,t,L,c$
denote numerical values in these units, so $L=2\pi$, $c=1$, and the
dimensionless displacement $u=u_{\mathrm{phys}}/A_*$ has the exact
travelling-standing solution with physical wave number $1\,\mathrm{m^{-1}}$
and angular frequency $1\,\mathrm{s^{-1}}$

$$u(t,x):=A\sin x\cos t\qquad(A>0),$$

where $A$ is dimensionless. Physical displacements and their error bounds are
obtained by multiplying the displayed values by $A_*$. The normalized density
and tension values are $\rho_\ell=\rho_{\ell,*}/(1\,\mathrm{kg\,m^{-1}})=1$
and $\tau_s=\tau_{s,*}/(1\,\mathrm N)=1$; these are numerical values of
different dimensioned quantities. The normalized field is $2\pi$-periodic and
solves $u_{tt}=u_{xx}$. For $N\ge2$ put
$a=2\pi/N$ and consider the cyclic spring chain of
[[def-cm-cyclic-spring-chain]] with parameter $c=1$ and spacing $a$, i.e.
the normalized node mass is $m=\rho_\ell a$ in units of $1\,\mathrm{kg}$ and
the normalized spring constant is $k_s=\tau_s/a$ in units of
$1\,\mathrm{N\,m^{-1}}$. Then:

1. $M=\sup|\partial_x^4u|=A$, $M_2=\sup|\partial_x^2u|=A$ and the theorem's
   constant is $C=\sqrt{2\pi}A/12\approx0.20889A$;
2. the exact chain solution with the sampled data is
   $q_j(t)=A\sin(ja)\cos(\omega_at)$ with
   $\omega_a=2\sin(a/2)/a$ (positive for $0<a<\pi$), the exact nodal error is
   $e_j(t)=A\sin(ja)[\cos(\omega_at)-\cos t]$, and the theorem's bounds read
   $\|e(t)\|_a\le Ca^2t^2/2$,
   $\max_j|e_j(t)|\le \tfrac12Ca^{3/2}t^2$ and
   $\sup_x|I_aq-u|\le\max_j|e_j|+Aa^2/8$;
3. at $N=100$ (so $a=2\pi/100\approx0.062832$) and $t=1$ the evaluated bounds
   are $\|e(1)\|_a\le0.0004124A$,
   $\max_j|e_j(1)|\le0.001645A$ and
   $\sup|I_aq-u|\le0.002139A$, while the exact error satisfies
   $|e_j(1)|\le A|\omega_a-1|\approx0.00016449A$, so the theoretical bound is
   verified and visibly conservative;
4. the exact dispersion relation is
   $\omega_a^2=(4/a^2)\sin^2(a/2)$, and the theorem's bound
   $|\omega_a^2-1|\le a^2/12$ gives $\le0.00032899$ at $N=100$, while the
   exact value satisfies $|\omega_a^2-1|\approx0.00032894$.

## Facts & Assumptions

**Given:** the physical parameters $L_*=2\pi\,\mathrm m$, $\rho_{\ell,*}=1\,\mathrm{kg\,m^{-1}}$, $\tau_{s,*}=1\,\mathrm N$, the reference units and normalized values $L=2\pi$, $c=1$, $\rho_\ell=1$, $\tau_s=1$; the dimensionless amplitude $A>0$; the standing wave $u$; and the integer $N\ge2$ and normalized spacing $a=2\pi/N$.

[F1] Chain and norms ([[def-cm-cyclic-spring-chain]]): the cyclic chain equation is $q_j''=(c^2/a^2)(q_{j+1}-2q_j+q_{j-1})$ with discrete norm $\|\cdot\|_a$, and the sampled data are $q_j(0)=u(0,ja)$, $q_j'(0)=u_t(0,ja)$.

[F2] Continuum-limit theorem ([[thm-cm-spring-chain-continuum-limit]]): under the stated smoothness and periodicity hypotheses on $u$ and its wave equation, the chain solution exists and is unique on $[0,T]$, and with $e_j=q_j-u(t,ja)$ and $C=c^2\sqrt L M/12$ one has $\|e(t)\|_a\le Ca^2t^2/2$, $\|e'(t)\|_a\le Ca^2t$, $\max_j|e_j(t)|\le\tfrac12Ca^{3/2}t^2$ and $\sup_x|I_aq(t,x)-u(t,x)|\le\max_j|e_j(t)|+M_2a^2/8$.

[F3] Dispersion theorem ([[thm-cm-spring-chain-dispersion-relation]]): for $A\ne0$ and $\kappa Na\in2\pi\mathbb Z$, $q_j(t)=A\cos(\kappa ja-\omega t)$ solves the chain equation if and only if $\omega^2=(4c^2/a^2)\sin^2(\kappa a/2)$; when this dispersion relation holds and $|\kappa a|\le1$, $|\omega^2-c^2\kappa^2|\le c^2\kappa^4a^2/12$.

[F4] Trigonometry and calculus ([[thm-ftc-first-part]], [[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[cor-mean-value-theorem]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]]): the difference formula for the cosine, $|\cos x-\cos y|\le|x-y|$ for real $x,y$ (mean value theorem bound for the derivative $-\sin$, $|\sin|\le1$), and $\sin^2z\le z^2$. For the sine and cosine used here, their derivatives are continuous on every compact interval, hence Riemann integrable; the second part of the fundamental theorem evaluates their derivative integrals. The addition formulas give the centered second differences in step 1.2.

[F5] Model scales ([[pthm-cm17-chain-limit-of-the-string-model]], [[def-cm17-continuum-body-and-units]]): with $c=1$ and $L=2\pi$ the theorem's constant for this data is $C=c^2\sqrt L\,M/12=\sqrt{2\pi}A/12$.

## Verification

**Proof technique:** direct; verify the standing wave and the exact discrete solution, evaluate the theorem's bounds at $N=100$, and compare with the exact error and dispersion values.

1.1 Data: $\partial_x^4u=A\sin x\cos t$ and $\partial_x^2u=-A\sin x\cos t$, so $M=M_2=A$; by [F5], $C=\sqrt{2\pi}A/12$. [given, F4, F5, algebra]

1.2 Exact chain solution: with $q_j(t)=A\sin(ja)\cos(\omega_at)$ one has $q_j''=-\omega_a^2q_j$ and $q_{j+1}-2q_j+q_{j-1}=-4\sin^2(a/2)q_j$, so the chain equation $q_j''=a^{-2}(q_{j+1}-2q_j+q_{j-1})$ holds for the chosen frequency $\omega_a^2=4\sin^2(a/2)/a^2$, i.e. $\omega_a=2\sin(a/2)/a$ for $a\in(0,\pi]$, since $N\ge2$; at $N=2$ the sampled values $\sin(j\pi)$ vanish and the zero chain solves independently of frequency. The sampled data match because $q_j(0)=A\sin(ja)=u(0,ja)$ and $q_j'(0)=0=u_t(0,ja)$. [given, F1, F3, F4, algebra]

2.1 Exact nodal error: $e_j(t)=q_j(t)-u(t,ja)=A\sin(ja)[\cos(\omega_at)-\cos t]$, hence by [F4] $|e_j(t)|\le A|\omega_a-1|\,t$ for $t\ge0$. [step 1.2, F4, algebra]

2.2 Bounds at $N=100$: with $a=2\pi/100$ one has $a^2=4\pi^2/10^4$ and $a^{3/2}=(2\pi/100)^{3/2}$. Hence at $t=1$ the three right-hand sides of [F2] are $Ca^2/2=\sqrt{2\pi}\,\pi^2A/60000$, $\tfrac12Ca^{3/2}=\pi^2A/6000$ and $\pi^2A/6000+\pi^2A/20000=13\pi^2A/60000$, using $M_2a^2/8=Aa^2/8=\pi^2A/20000$. [step 1.1, F2, algebra]

3.1 Exact comparison: with $a=\pi/50$ one has $\omega_a=2\sin(a/2)/a=100\sin(\pi/100)/\pi$, so by step 2.1 the exact nodal error at $t=1$ obeys $|e_j(1)|\le A\lvert100\sin(\pi/100)/\pi-1\rvert$, while the theorem's nodal bound at $t=1$ is $\pi^2A/6000$ by step 2.2; the comparison of the two explicit numerical factors is a finite check recorded in the Remarks. [step 2.1, step 2.2, algebra]

4.1 Dispersion for all $N\ge2$: put $z=a/2>0$. By [F4] and the fundamental theorem, $\sin z-z=\int_0^z(\cos s-1)\,ds$ and $\cos s-1=-\int_0^s\sin r\,dr$; hence $|\sin z-z|\le\int_0^z\int_0^s r\,dr\,ds=z^3/6$, using $|\sin r|\le r$, while $|\sin z+z|\le2z$. Therefore $|\omega_a^2-1|=4|\sin^2z-z^2|/a^2\le4(z^3/6)(2z)/a^2=a^2/12$. At $N=100$ this equals $\pi^2/30000$; here $a<1$ also permits the bound of [F3] with $c=\kappa=1$ and the chosen solving-mode frequency. Moreover $\omega_a^2=\sin^2(a/2)/(a/2)^2=1-a^2/12+O(a^4)$ by the power series of sine, so the exact error equals the bound to leading order in $a$. [step 1.2, F3, F4, algebra] ∎

## Remarks

- The comparison is a finite, exact check: the chain's standing mode has frequency $\omega_a$ and the continuum mode frequency $1$; the nodal error is the interference of the two cosines, so the discrepancy is a purely discrete-dispersion effect and decays like $a^2$ for the exact standing-wave data, while the theorem's uniform-in-data bound grows like $a^{3/2}$ through the worst-case nodal factor $a^{-1/2}$ of the discrete norm comparison.

- Numerical readings at $N=100$ for the bounds of step 2.2: $\sqrt{2\pi}\,\pi^2/60000\approx0.0004124$, $\pi^2/6000\approx0.001645$ and $13\pi^2/60000\approx0.002139$, while the frequency-difference upper bound of step 3.1 is $|100\sin(\pi/100)/\pi-1|\approx0.0001645$, while the exact maximum nodal error factor is $|\cos(100\sin(\pi/100)/\pi)-\cos1|\approx0.0001384$ (nodes $j=25,75$ have $|\sin(ja)|=1$) and the dispersion bound of step 4.1 is $\pi^2/30000\approx0.000329$; the exact dispersion error $|\omega_a^2-1|=1-\sin^2(\pi/100)/(\pi/100)^2$ agrees to leading order. The theorem's bounds are therefore satisfied and conservative on these data.

- The evaluated numbers are properties of the model's bounds under the stated scaling $m=\rho_\ell a$, $k_s=\tau_s/a$; they are not measured errors of any physical chain, and no measured stiffness or density is used.
