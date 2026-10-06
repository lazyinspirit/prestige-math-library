---
id: ex-sectorial-nonselfadjoint-multiplication-generator
kind: example
title: A sectorial nonselfadjoint multiplication generator
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 17
deps: [ex-sectorial-multiplication-operator, ex-analytic-semigroup-generated-by-a-bounded-operator, def-sectorial-operator-with-the-semigroup-sign-convention, def-complex-sector-and-bounded-analytic-semigroup, thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups, thm-form-generated-sectorial-elliptic-semigroups, thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups, def-axiom-of-choice, def-hilbert-space-adjoint, def-bounded-linear-operator, def-l-p-space-as-a-quotient-by-null-functions, def-finite-sigma-finite-and-semifinite-measures, def-operator-norm, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 4.a, the nonselfadjoint multiplication examples, printed pp. 106-108"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 2 Section 2.3, multiplication-operator examples of analytic semigroups, printed pp. 66-68"
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(\Omega,\mu)$ be a $\sigma$-finite measure space with $\mu(\Omega)>0$, let $\theta\in(0,\pi/2)$, and let $q:\Omega\to\mathbb C$ be measurable and essentially bounded, with essential range contained in the closed left sector $\{\zeta:|\arg(-\zeta)|\le\pi/2-\theta\}\cup\{0\}$. Then $A=M_q$ on $L^2(\mu)$ satisfies the sectorial resolvent condition with exponent $\theta$ in the $e^{tA}$ convention and generates the bounded analytic semigroup $T(z)f=e^{zq}f$ on $\Sigma_\theta$; its maximal analytic angle is at least $\theta$. Its spectrum is $\operatorname{essran}(q)$ (as proved directly in step 1.2). Whenever $q$ is nonreal on a set of positive measure, the generator $A$ is nonselfadjoint: $A^*=M_{\bar q}\ne M_q=A$ (both are bounded operators on all of $L^2(\mu)$), so $A$ is not a self-adjoint semigroup generator. Self-adjoint nonpositive generation is a sufficient route to bounded analytic semigroups ([[thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups]]), but this example shows that self-adjointness is not necessary: the multiplier is nonselfadjoint and still generates a bounded analytic semigroup. It is the bounded-operator companion to the form-generated theorem [[thm-form-generated-sectorial-elliptic-semigroups]].

## Facts & Assumptions

**Given:** The Axiom of Choice; a $\sigma$-finite measure space $(\Omega,\mu)$ with $\mu(\Omega)>0$; a number $\theta\in(0,\pi/2)$; a measurable essentially bounded $q:\Omega\to\mathbb C$ whose essential range lies in the closed left sector $\{\zeta:|\arg(-\zeta)|\le\pi/2-\theta\}\cup\{0\}$; the bounded multiplication operator $A=M_q$ on the complex Hilbert space $H=L^2(\mu)$; and the family $T(z)f=e^{zq}f$.

[L1] For $\delta\in(0,\pi/2]$ and $\omega\in\mathbb R$ an operator is sectorial of angle $\delta$ with vertex $\omega$ in the $e^{tA}$ convention when $\omega+\Sigma_{\pi/2+\delta}\subseteq\rho(A)$ and $\|R(\lambda,A)\|\le M_\varepsilon/|\lambda-\omega|$ on each $\omega+\Sigma_{\pi/2+\delta-\varepsilon}$, where $\Sigma_\gamma$ is the open sector of half-angle $\gamma$ around the positive real axis ([[def-sectorial-operator-with-the-semigroup-sign-convention]], [[def-complex-sector-and-bounded-analytic-semigroup]]).

[L2] A bounded linear operator $T\in\mathcal B(H)$ is one with a finite bound $\|Tx\|\le C\|x\|$, and the operator norm is $\|T\|=\sup\{\|Tx\|:\|x\|\le1\}$ ([[def-bounded-linear-operator]], [[def-operator-norm]]).

[L3] A densely defined $A$ is sectorial of angle $\theta$ with vertex $0$ if and only if it generates a bounded analytic semigroup $(T(z))_{z\in\Sigma_\theta\cup\{0\}}$ of angle $\theta$ with generator $A$ ([[thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups]]).

[L4] For a bounded operator $A$ the exponential series $E(z)=\sum_{n\ge0}z^nA^n/n!$ converges in operator norm for every $z\in\mathbb C$, defines an entire function with $E(z+w)=E(z)E(w)$ whose restriction is a strongly continuous semigroup with generator $A$, and $E$ extends boundedly analytically to $\Sigma_\delta$ exactly when the sectorial resolvent condition with exponent $\delta$ holds ([[ex-analytic-semigroup-generated-by-a-bounded-operator]]).

[L5] The Hilbert adjoint of a bounded operator is the unique $T^*$ with $\langle Tx,y\rangle=\langle x,T^*y\rangle$; for multiplication operators $\langle M_qf,g\rangle=\int qf\overline g\,d\mu$ and $\langle f,M_{\bar q}g\rangle=\int f\overline{\bar qg}\,d\mu$ show $(M_q)^*=M_{\bar q}$ ([[def-hilbert-space-adjoint]]).

[L6] On a $\sigma$-finite measure space every positive-measure measurable set contains a finite-measure measurable subset of positive measure, and $L^2$ functions are almost-everywhere classes ([[def-finite-sigma-finite-and-semifinite-measures]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[L7] The special case of real $q\le0$ is the companion multiplication example: its resolvents are the bounded multiplications by $(\lambda-q)^{-1}$ and it is sectorial with maximal exponent $\pi/2$ ([[ex-sectorial-multiplication-operator]]).

[L8] A densely defined self-adjoint nonpositive operator generates a contractive bounded analytic semigroup ([[thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups]]).

[L9] The form-generated theorem gives a complementary generation route for operators associated with closed sectorial forms and assumes no symmetry ([[thm-form-generated-sectorial-elliptic-semigroups]]).

[L10] The Axiom of Choice supplies a choice function for the countable family of nonempty sets of finite-measure positive-measure subsets used in step 1.2 ([[def-axiom-of-choice]]).


## Verification

**Proof technique:** direct.

1.1 The resolvent bound. Since $A=M_q$ is bounded with $D(A)=H$, for $\lambda\ne0$ the operator $\lambda I-A=M_{\lambda-q}$ has the two-sided inverse $M_{(\lambda-q)^{-1}}$ as soon as $(\lambda-q)^{-1}$ is essentially bounded; fix $\varepsilon\in(0,\theta)$ and $\lambda\in\Sigma_{\pi/2+\theta-\varepsilon}$. The essential-range definition implies $q(x)\in\operatorname{essran}(q)$ almost everywhere: every value outside the essential range has a neighbourhood with null preimage; a countable rational-ball base covers that complement by countably many such neighbourhoods, so its preimage is null. Hence for almost every $x$ the value $q(x)$ lies in the closed sector $\{\zeta:|\arg(-\zeta)|\le\pi/2-\theta\}\cup\{0\}$ whose boundary rays have arguments $\pm(\pi/2+\theta)$, while $|\arg\lambda|\le\pi/2+\theta-\varepsilon$. For nonzero $\zeta=q(x)$ let $\gamma\in[0,\pi]$ be the principal angle between $\lambda$ and $\zeta$; the sector geometry gives $\gamma\ge\varepsilon$. If $\gamma\le\pi/2$, then $|\lambda-\zeta|^2=|\lambda|^2\sin^2\gamma+(|\lambda|\cos\gamma-|\zeta|)^2\ge|\lambda|^2\sin^2\varepsilon$. If $\gamma\ge\pi/2$, then $\cos\gamma\le0$ and $|\lambda-\zeta|^2=|\lambda|^2+|\zeta|^2-2|\lambda||\zeta|\cos\gamma\ge|\lambda|^2\ge|\lambda|^2\sin^2\varepsilon$; for $\zeta=0$ the same lower bound follows from $|\lambda-\zeta|=|\lambda|$. Thus $|\lambda-q(x)|\ge|\lambda|\sin\varepsilon$ almost everywhere; for each $f\in H$, $$\|M_{(\lambda-q)^{-1}}f\|_2^2=\int_\Omega|\lambda-q|^{-2}|f|^2\,d\mu\le(|\lambda|\sin\varepsilon)^{-2}\|f\|_2^2,$$ so $\|M_{(\lambda-q)^{-1}}\|\le1/(|\lambda|\sin\varepsilon)$ and $R(\lambda,A)=M_{(\lambda-q)^{-1}}$ with $\lambda\in\rho(A)$. [L1, L2, given, algebra]

1.2 The spectrum is the essential range. If $\lambda\notin\operatorname{essran}(q)$ then by definition of the essential range there is $\delta>0$ with $\mu(\{|q-\lambda|<\delta\})=0$, so $|\lambda-q|\ge\delta$ almost everywhere and $M_{(\lambda-q)^{-1}}$ is a bounded inverse of $\lambda I-A$, hence $\lambda\in\rho(A)$; conversely, if $\lambda\in\operatorname{essran}(q)$ then for every integer $n\ge1$ the set $E_n:=\{|q-\lambda|<1/n\}$ has positive measure, so by $\sigma$-finiteness it contains a measurable $F_n$ with $0<\mu(F_n)<\infty$, and $f_n:=\mu(F_n)^{-1/2}\mathbf 1_{F_n}$ is a unit vector with $\|(\lambda I-A)f_n\|_2^2=\int_{F_n}|\lambda-q|^2\,d\mu/\mu(F_n)\le1/n^2$; a bounded inverse $R$ of $\lambda I-A$ would give $1=\|f_n\|_2\le\|R\|/n$ for every $n$, impossible, so $\lambda\notin\rho(A)$ and $\sigma(A)=\operatorname{essran}(q)$. [L6, L10, given, algebra]

1.3 Nonselfadjointness. If $q$ is nonreal on a set of positive measure, [L6] supplies a finite-measure subset $F$ of that set with $\mu(F)>0$. Then $\mathbf 1_F\in L^2(\mu)$ and $(M_q-M_{\bar q})\mathbf 1_F=(q-\bar q)\mathbf 1_F$ is a nonzero $L^2$ class, so $M_q\ne M_{\bar q}$. By [L5] $(M_q)^*=M_{\bar q}$; hence $A^*\ne A$ and $A$ is not self-adjoint. [L5, L6, given, algebra]

2.1 Generation and the explicit semigroup. By [step 1.1] the sectorial resolvent condition of [L1] holds with exponent $\theta$: for every $\varepsilon\in(0,\theta)$ the bound $\|R(\lambda,A)\|\le1/(|\lambda|\sin\varepsilon)$ holds on $\Sigma_{\pi/2+\theta-\varepsilon}$; hence by [L4] the exponential series $E(z)=\sum_nz^nA^n/n!$ extends boundedly analytically to $\Sigma_\theta$ and is generated by $A$; moreover $\sum_nz^nq^n/n!$ converges in essential supremum norm to $e^{zq}$ because $q$ is essentially bounded, so $E(z)=M_{e^{zq}}$, that is $E(z)f=e^{zq}f$; on $\Sigma_\theta$ one has $\operatorname{Re}(zq)\le0$ almost everywhere, since the angle between $z$ and $q(x)$ is at least $\pi/2$, so $|e^{zq}|\le1$ and the family is bounded on every $\Sigma_{\delta'}$ with $\delta'<\theta$; therefore the maximal analytic angle of $A$ is at least $\theta$, by the definition of the angle as the supremum of the admissible exponents in [L1] and [L3]. [step 1.1, L1, L3, L4, given, algebra]

3.1 Assembly. By [L8], self-adjoint nonpositive generation is a sufficient route to bounded analytic semigroups. Here [step 2.1] shows that $A=M_q$ generates the bounded analytic semigroup $T(z)f=e^{zq}f$ with maximal angle at least $\theta$, while [step 1.3] shows that $A$ is nonselfadjoint when $q$ is nonreal on a set of positive measure; thus self-adjointness is not necessary. By [step 1.2] its spectrum is $\operatorname{essran}(q)$, [L7] is the real multiplier special case, and [L9] supplies the complementary form-based generation context without a symmetry restriction. [step 1.2, step 1.3, step 2.1, L7, L8, L9, given, algebra] ∎
