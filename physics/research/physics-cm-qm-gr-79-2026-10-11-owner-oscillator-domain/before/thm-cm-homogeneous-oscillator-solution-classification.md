---
id: thm-cm-homogeneous-oscillator-solution-classification
kind: theorem
title: "The homogeneous damped oscillator: solution classification by the discriminant and uniqueness for initial data"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-oscillator-model-and-phase-system, lem-cm-continuous-dependence-on-initial-data, thm-derivative-of-exponential, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule, def-derivative, def-interval]
dependency_roles:
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  lem-cm-continuous-dependence-on-initial-data: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: cases
sources:
  references:
  - title: 'K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.1, Eqs. (5.6)-(5.12): characteristic equation $\lambda^2+2\delta\lambda+\omega_0^2=0$, its roots (5.8) and the free solution (5.9); printed pages 2-3 of Chapter 5 (PDF pages 88-89)'
    url: https://essentialgraduatephysics.org/Files/CM%20merged.pdf
  - title: 'I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1.3, Eq. (7.16): underdamped, critically damped and overdamped solution cases of the linearised oscillator, printed page 148'
    url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf
  - title: G. Teschl, Ordinary Differential Equations and Dynamical Systems (retrieved 365-page online edition), Section 3.1, printed pp. 59-61 (matrix exponential). The three scalar families and their exhaustiveness are verified locally from the declared mathematical suppliers.
    url: https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf
verification:
  precheck: pass
---

## Statement

Let $m>0$, $c\ge0$ and $k>0$, and consider the homogeneous damped oscillator model $m\,x''+c\,x'+k\,x=0$ ([[def-cm-oscillator-model-and-phase-system]]), with characteristic polynomial $p(\lambda)=m\lambda^2+c\lambda+k$, discriminant $\Delta=c^2-4mk$, damping rate $\gamma:=c/(2m)$, and, when applicable, roots
$$\lambda_\pm:=\frac{-c\pm\sqrt\Delta}{2m}\ (\Delta\ge0),\qquad \lambda:=-\frac{c}{2m},\qquad \omega:=\frac{\sqrt{4mk-c^2}}{2m}\ (\Delta<0).$$

1. **Distinct real roots.** If $\Delta>0$, then $\lambda_+>\lambda_-$ are exactly the real roots of $p$, and a function $x:J\to\mathbb R$ on an interval $J\subseteq\mathbb R$ with nonempty interior is a solution of the model if and only if
$$x(t)=Ae^{\lambda_+t}+Be^{\lambda_-t}\quad(t\in J)$$
for some $A,B\in\mathbb R$.

2. **Double real root.** If $\Delta=0$, then $\lambda=-c/(2m)$ is the only root of $p$, and $x:J\to\mathbb R$ is a solution if and only if
$$x(t)=(A+Bt)e^{\lambda t}\quad(t\in J)$$
for some $A,B\in\mathbb R$.

3. **Complex conjugate roots.** If $\Delta<0$, then $\omega>0$, the roots of $p$ are $-\gamma\pm i\omega$, and $x:J\to\mathbb R$ is a solution if and only if
$$x(t)=e^{-\gamma t}\bigl(A\cos(\omega t)+B\sin(\omega t)\bigr)\quad(t\in J)$$
for some $A,B\in\mathbb R$.

4. **Initial data.** In each of the three cases and for every $(x_0,v_0)\in\mathbb R^2$ there is exactly one solution $x:\mathbb R\to\mathbb R$ with $x(0)=x_0$ and $x'(0)=v_0$. Its coefficients are
$$A=\frac{v_0-\lambda_-x_0}{\lambda_+-\lambda_-},\quad B=\frac{\lambda_+x_0-v_0}{\lambda_+-\lambda_-}\quad(\Delta>0),\qquad A=x_0,\ B=v_0-\lambda x_0\quad(\Delta=0),$$
$$A=x_0,\quad B=\frac{v_0+\gamma x_0}{\omega}\quad(\Delta<0).$$

## Facts & Assumptions

**Given:** The parameters $m>0$, $c\ge0$, $k>0$, the homogeneous model of [[def-cm-oscillator-model-and-phase-system]], its phase-plane field $G_0(x,v)=(v,-(cv+kx)/m)$, the characteristic polynomial $p(\lambda)=m\lambda^2+c\lambda+k$, the discriminant $\Delta=c^2-4mk$, and, in the three cases, the constants $\lambda_\pm,\lambda,\gamma,\omega$ of the statement.

[F1] The model, its solutions, the phase-plane system and the characteristic data are those of [[def-cm-oscillator-model-and-phase-system]]: $x$ solves the model on $J$ exactly when $t\mapsto(x(t),x'(t))$ solves $z'=G_0(z)$ on $J$; $G_0$ is continuous and locally Lipschitz in the state variable, with the global state-Lipschitz constant $(1+(c+k)/m)\sqrt2$ on $\mathbb R^2$. [given]

[F2] Local uniqueness and Lipschitz dependence: under the hypotheses of [[lem-cm-continuous-dependence-on-initial-data]] with field $G_0$, $U:=\mathbb R^2$, centre $a_0\in\mathbb R^2$, radius $R>0$, $M=\sup_{\overline B(a_0,R)}\|G_0\|_2$, state-Lipschitz constant $L$, and $0<\rho<R$ with $hM\le R-\rho$, $Lh<1$, for every $a\in\overline B(a_0,\rho)$ the initial value problem $z'=G_0(z)$, $z(0)=a$ has exactly one solution on $[-h,h]$ with graph in $[-h,h]\times\overline B(a_0,R)$. [given]

[F3] Differentiation rules: for real $\mu$ the real exponential satisfies $(e^{\mu t})'=\mu e^{\mu t}$; for complex $\mu$ and real $t$ the complex exponential satisfies $\frac{d}{dt}\exp(\mu t)=\mu\exp(\mu t)$; sums, products and composites are differentiated by the algebra of derivatives and the chain rule; $(\cos t)'=-\sin t$ and $(\sin t)'=\cos t$. [thm-derivative-of-exponential, thm-complex-exponential-is-entire-with-derivative-itself, thm-algebra-of-derivatives, thm-chain-rule, thm-sine-and-cosine-derivatives]

[F4] Euler's form: for real $\gamma,\omega$ and $t$, $\exp(-\gamma t+i\omega t)=e^{-\gamma t}(\cos(\omega t)+i\sin(\omega t))$. [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, given]

## Proof

**Proof technique:** cases; verify the three explicit solution families by differentiation, match initial data by explicit coefficients, and deduce exhaustiveness from the local uniqueness lemma by a connectedness argument.

1.1 Algebraic reduction: for all $\lambda$, $$p(\lambda)=m\Bigl[\Bigl(\lambda+\frac{c}{2m}\Bigr)^2-\frac{\Delta}{4m^2}\Bigr]=m\bigl[(\lambda+\gamma)^2-\tfrac{\Delta}{4m^2}\bigr].$$ Hence: if $\Delta>0$ the real roots of $p$ are exactly $\lambda_\pm=(-c\pm\sqrt\Delta)/(2m)$ with $\lambda_+>\lambda_-$; if $\Delta=0$ then $\lambda=-c/(2m)$ is the only root, a double one; and if $\Delta<0$ then $p$ has no real root, $\Delta=-4m^2\omega^2$ for the positive number $\omega=\sqrt{4mk-c^2}/(2m)$, and the complex roots of $p$ are $-\gamma\pm i\omega$ because $(\pm i\omega)^2=\Delta/(4m^2)$. In particular $p(\lambda_\pm)=0$ in case 1 and $p(\lambda)=0$ in case 2. [given, algebra]

2.1 Verification of the real-root families. [assume-case 1, assume-case 2] For a real number $\mu$ with $p(\mu)=0$ the function $t\mapsto e^{\mu t}$ satisfies $m(e^{\mu t})''+c(e^{\mu t})'+k e^{\mu t}=(m\mu^2+c\mu+k)e^{\mu t}=0$ by [F3]; and $t\mapsto te^{\mu t}$ satisfies $$m(te^{\mu t})''+c(te^{\mu t})'+kte^{\mu t}=e^{\mu t}\bigl[(2m\mu+c)+t\,p(\mu)\bigr],$$ since $(te^{\mu t})'=e^{\mu t}(1+\mu t)$ and $(te^{\mu t})''=e^{\mu t}(2\mu+\mu^2t)$ by [F3]; this vanishes exactly when $2m\mu+c=0$, that is $\mu=-c/(2m)=\lambda$, and then also $p(\mu)=0$. By step 1.1 the roots $\lambda_+,\lambda_-$ in case 1 and the double root $\lambda$ in case 2 do satisfy $p=0$, so by linearity of the differential expression every $Ae^{\lambda_+t}+Be^{\lambda_-t}$ and every $(A+Bt)e^{\lambda t}$ is a solution on every interval. [step 1.1, F3]

2.2 Verification of the oscillatory family. [assume-case 3] Let $\mu:=-\gamma+i\omega$, so that $p(\mu)=0$ by step 1.1; by [F3] the complex-valued curve $z(t):=\exp(\mu t)$ satisfies $mz''+cz'+kz=p(\mu)z=0$. Real and imaginary parts of a complex-valued solution of a real linear constant-coefficient equation solve that equation, by componentwise differentiation; by [F4], $z(t)=e^{-\gamma t}(\cos\omega t+i\sin\omega t)$, so $e^{-\gamma t}\cos\omega t$ and $e^{-\gamma t}\sin\omega t$ are real solutions, and every $e^{-\gamma t}(A\cos\omega t+B\sin\omega t)$ is one by linearity. This family too is defined on all of $\mathbb R$. [step 1.1, F3, F4]

3.1 Matching initial data: in case 1, the two linear conditions $A+B=x_0$ and $\lambda_+A+\lambda_-B=v_0$ are solved uniquely by the coefficients displayed in clause 4 because $\lambda_+-\lambda_-\ne0$, and substitution verifies $x(0)=x_0$, $x'(0)=v_0$. In case 2, $x(t)=(A+Bt)e^{\lambda t}$ has $x(0)=A$ and $x'(0)=\lambda A+B$ by [F3], giving $A=x_0$, $B=v_0-\lambda x_0$. In case 3, $x(t)=e^{-\gamma t}(A\cos\omega t+B\sin\omega t)$ has $x(0)=A$ and, by [F3], $x'(0)=-\gamma A+\omega B$, giving $A=x_0$ and $B=(v_0+\gamma x_0)/\omega$ since $\omega\ne0$. Thus in each case there is a global solution with the prescribed data. [step 2.1, step 2.2, F3]

4.1 Exhaustiveness and uniqueness. [cases-exhaustive: $\Delta>0$, $\Delta=0$, $\Delta<0$] Let $x$ solve the model on an interval $J$ with nonempty interior and choose an arbitrary $t_*\in J^\circ$. For the ordered fundamental pairs $(e^{\lambda_+t},e^{\lambda_-t})$, $(e^{\lambda t},te^{\lambda t})$ and $(e^{-\gamma t}\cos\omega t,e^{-\gamma t}\sin\omega t)$, the determinant of their value/derivative matrix is respectively $(\lambda_--\lambda_+)e^{(\lambda_++\lambda_-)t}$, $e^{2\lambda t}$ and $\omega e^{-2\gamma t}$, by [F3]. Each is nonzero, so there is a unique combination $y$ from the corresponding global family with $y(t_*)=x(t_*)$ and $y'(t_*)=x'(t_*)$. Put $S=\{t\in J^\circ:(x(t),x'(t))=(y(t),y'(t))\}$. This set is nonempty and relatively closed by phase-curve continuity. It is relatively open: at $t_1\in S$ choose a closed time neighborhood in $J^\circ$ and a state ball centered at the common phase value, containing both curves on a smaller time neighborhood. Choose $h>0$ within that neighborhood with $h\sup_{\overline B(a_0,R)}\|G_0\|_2\le R/2$ and $Lh<1$. Since $G_0$ is autonomous, translate $t_1$ to zero and apply [F2] with $\rho=R/2$ to the two phase curves; uniqueness gives equality on this neighborhood. The interval $J^\circ$ is connected, so $S=J^\circ$. Continuity extends the equality to any endpoints belonging to $J$, proving $x=y|_J$. Thus every local solution is a restriction of exactly one global member of the appropriate family. In particular the global members matched in step 3.1 are the unique solutions with the prescribed data at zero, and all four clauses follow. [step 2.1, step 2.2, step 3.1, F1, F2, F3, algebra] ∎
