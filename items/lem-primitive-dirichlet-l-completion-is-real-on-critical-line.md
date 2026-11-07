---
id: lem-primitive-dirichlet-l-completion-is-real-on-critical-line
kind: lemma
title: "A phase of the completed primitive Dirichlet $L$-function is real on the critical line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-dirichlet-l-function
  - def-induced-dirichlet-character
  - def-primitive-dirichlet-character-and-conductor
  - def-completed-dirichlet-l-function
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-primitive-dirichlet-l-functional-equation
  - thm-primitive-gauss-sum-norm
  - def-euler-gamma-function
  - thm-euler-gamma-function-is-holomorphic
  - cor-gamma-function-has-no-zeros
  - thm-complex-nth-roots-and-roots-of-unity
  - thm-identity-theorem-holomorphic-functions
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
proof_strategy: direct
sources:
  references:
    - title: "David J. Platt, Numerical Computations Concerning the GRH, arXiv:1305.3087v1"
      url: "https://arxiv.org/pdf/1305.3087v1"
      locator: "§§1–3; completed-L normalization and Turing setup"
    - title: "Nickolas Andersen, Analytic Number Theory, Course Notes for UCLA Math 205A"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
      locator: "§17.3, printed p. 73; full 96-page lecture-note PDF"
---

## Statement

Let $q\ge1$, let $\chi$ be a primitive Dirichlet character modulo $q$ of parity $a\in\{0,1\}$, define
$$\Lambda(s,\chi):=\left(\frac q\pi\right)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi),$$
and let $\varepsilon_\chi=(-i)^a\tau(\chi)/\sqrt q$ be the root number in the primitive Dirichlet functional equation, where $\tau(\chi)=\sum_{m\bmod q}\chi(m)e^{2\pi i m/q}$. There exists a unit complex number $u_\chi$ satisfying $u_\chi^2\varepsilon_\chi=1$, and for every such $u_\chi$ the function $t\mapsto u_\chi\Lambda(\tfrac12+it,\chi)$ is real-valued on $\mathbb R$ and vanishes exactly where $t\mapsto L(\tfrac12+it,\chi)$ vanishes.

## Statement references

[David J. Platt, *Numerical Computations Concerning the GRH*, arXiv:1305.3087v1](https://arxiv.org/pdf/1305.3087v1)

[Nickolas Andersen, *Analytic Number Theory*, §§11.2 and 17.3](https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf)

## Facts & Assumptions

**Given:** A primitive Dirichlet character $\chi$ modulo $q$, its parity $a$, the displayed completion and root number, and the cited supplier statements.

[F1] [[thm-primitive-gauss-sum-norm]]: for primitive $\chi$ modulo $q$, $|\tau(\chi)|^2=q$.

[F2] [[thm-complex-nth-roots-and-roots-of-unity]]: every nonzero complex number has a square root.

[F3] [[def-dirichlet-l-function]]: on $\operatorname{Re}s>1$, $L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$.

[F4] [[thm-primitive-dirichlet-l-analytic-continuation]]: if $\chi$ is nonprincipal primitive, $L(s,\chi)$ and its completion continue entirely.

[F5] [[thm-identity-theorem-holomorphic-functions]]: holomorphic functions on a connected domain that agree on a set with an interior accumulation point agree throughout the domain.

[F6] [[def-euler-gamma-function]]: for $\operatorname{Re}z>0$, $\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}\,dt$ with the real logarithm in $t^{z-1}$.

[F7] [[thm-primitive-dirichlet-l-functional-equation]]: $\Lambda(s,\chi)=\varepsilon_\chi\Lambda(1-s,\overline\chi)$ with the displayed root-number convention.

[F8] [[def-completed-dirichlet-l-function]]: $\Lambda(s,\chi)=(q/\pi)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi)$.

[F9] [[thm-euler-gamma-function-is-holomorphic]]: $\Gamma$ is holomorphic for $\operatorname{Re}z>0$.

[F10] [[cor-gamma-function-has-no-zeros]]: $\Gamma$ has no zeros.

[F11] [[def-induced-dirichlet-character]]: induction is pullback on units and zero extension off units.

[F12] [[def-primitive-dirichlet-character-and-conductor]]: a primitive character is not induced from a proper divisor.

[F13] [[def-complex-logarithms-principal-logarithm-and-complex-powers]]: a positive real base uses its real logarithm in the complex power.

[F14] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: a complex exponential is nonzero.

[F15] [[thm-riemann-zeta-continuation-to-the-right-half-plane]]: on $\operatorname{Re}s>0$, zeta is holomorphic away from its simple pole at $s=1$.

## Proof

**Proof technique:** direct.

1.1 By [F1], $|\varepsilon_\chi|=1$. The number $\varepsilon_\chi^{-1}$ is nonzero, so [F2] gives a square root $u_\chi$; because $|u_\chi|^2=|\varepsilon_\chi|^{-1}=1$, it is a unit and satisfies $u_\chi^2\varepsilon_\chi=1$. [given, F1, F2, algebra, choose]

1.2 If $\overline\chi$ were induced from a proper divisor, conjugating its inducing character would make $\chi$ induced from the same divisor by [F11], contrary to [F12]; hence $\overline\chi$ is primitive modulo $q$. On $\operatorname{Re}s>1$, [F3] and the real logarithm convention give $L(s,\overline\chi)=\overline{L(\overline s,\chi)}$. For $q>1$, [F4] makes both sides holomorphic on $\mathbb C$, since reflection-conjugation of a local Taylor series is holomorphic. For $q=1$, both sides are holomorphic on the connected domain $\{s:\operatorname{Re}s>0\}\setminus\{1\}$ by [F15], with the same reflection-conjugation argument. Thus [F5] extends the equality from the open half-plane where the defining series converge to the domain containing the critical line. [given, F3, F4, F5, F11, F12, F15]

2.1 For $s=\tfrac12+it$, the argument $(s+a)/2$ has positive real part. Taking conjugates in the absolutely convergent integral [F6] shows $\Gamma(\overline z)=\overline{\Gamma(z)}$ there. By [F13] the positive real base $q/\pi$ also has the conjugation property, so [F8] gives $\Lambda(\overline s,\overline\chi)=\overline{\Lambda(s,\chi)}$. Since $1-s=\overline s$, [F7] yields $\Lambda(s,\chi)=\varepsilon_\chi\overline{\Lambda(s,\chi)}$. [given, F6, F7, F8, F13, step 1.2, algebra]

3.1 For every unit phase from step 1.1, $\overline{u_\chi\Lambda(s,\chi)}=\overline{u_\chi}\varepsilon_\chi^{-1}\Lambda(s,\chi)=u_\chi\Lambda(s,\chi)$, because $\overline{u_\chi}=u_\chi^{-1}$ and $u_\chi^2=\varepsilon_\chi^{-1}$. Thus the displayed value is real. [step 1.1, step 2.1, algebra]

4.1 The multiplier $u_\chi(q/\pi)^{(s+a)/2}\Gamma((s+a)/2)$ is nonzero at every $s=\tfrac12+it$: $u_\chi\ne0$, [F14] makes the positive-base exponential nonzero, the Gamma argument has positive real part, and [F9]–[F10] show that Gamma is holomorphic and nonzero there. Therefore $u_\chi\Lambda(s,\chi)=0$ exactly when $L(s,\chi)=0$. [given, F8, F9, F10, F13, F14, algebra] ∎
