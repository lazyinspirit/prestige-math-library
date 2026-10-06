---
id: ex-sectorial-multiplication-operator
kind: example
title: The sectorial multiplication operator
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 14
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-hilbert-space, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-resolvent-of-a-closed-operator, def-sectorial-operator-with-the-semigroup-sign-convention, def-complex-sector-and-bounded-analytic-semigroup, thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups, thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups, def-adjoint-of-a-densely-defined-unbounded-operator, def-unbounded-linear-operator-domain-and-graph, def-operator-norm, def-bounded-linear-operator, def-strongly-continuous-semigroup, def-infinitesimal-generator-of-a-c-zero-semigroup, thm-laplace-transform-formula-for-the-semigroup-resolvent, thm-dominated-convergence, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-cauchy-schwarz-in-an-inner-product-space, def-bochner-integrable-function, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, the multiplication examples of analytic semigroups, printed pp. 106-108'
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, multiplication-semigroup examples, printed pp. 56-57'
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Let $(\Omega,\mu)$ be a $\sigma$-finite measure space with $\mu(\Omega)>0$, let
$q:\Omega\to\mathbb R$ be measurable with $q\le0$ $\mu$-a.e., and let $A=M_q$ on
$H=L^2(\mu)$ have maximal domain
$D(A)=\{f\in L^2(\mu):qf\in L^2(\mu)\}$. Then:

(1) $A$ is self-adjoint and densely defined;

(2) for every $\lambda\in\mathbb C\setminus(-\infty,0]$, the multiplication
operator $M_{(\lambda-q)^{-1}}$ is bounded and is the inverse of $\lambda I-A$,
so $R(\lambda,A)f=(\lambda-q)^{-1}f$;

(3)
$$\|R(\lambda,A)\|=\operatorname{ess\,sup}_{x}|\lambda-q(x)|^{-1}\le\frac1{\operatorname{dist}(\lambda,(-\infty,0])}.$$
Thus $\|R(\lambda,A)\|\le1/|\lambda|$ when $\operatorname{Re}\lambda\ge0$ and
$\|R(\lambda,A)\|\le1/|\operatorname{Im}\lambda|$ when
$\operatorname{Re}\lambda<0$; in particular on $\Sigma_{\pi-\varepsilon}$ it is
at most $1/(|\lambda|\sin\varepsilon)$. These are sharp uniform bounds over all
$q\le0$, but equality for a fixed $q$ is not asserted. Consequently $A$ is
sectorial with maximal exponent $\pi/2$ in the $e^{tA}$ convention;

(4) $T(t)f=e^{tq}f$ is a strongly continuous contraction semigroup:
$\|e^{tq}\|_\infty\le1$, and $T(t)f\to f$ in $L^2$ by dominated convergence as
$t\downarrow0$. For each real $\lambda>0$, its Bochner Laplace integral acts
pointwise as $\int_0^\infty e^{-\lambda t}e^{tq}f\,dt=(\lambda-q)^{-1}f$. Thus
the Laplace-transform formula
[[thm-laplace-transform-formula-for-the-semigroup-resolvent]] gives
$R(\lambda,G)=M_{(\lambda-q)^{-1}}=R(\lambda,A)$, where $G$ is the generator of
$T$; equality of resolvents at one point implies $G=A$, including equality with
the stated maximal domain. The computation is pointwise; a nonreal bounded
multiplier requires its own argument. Dependent Choice is assumed for the semigroup suppliers; Countable Choice is inherited from the
$L^2$ Hilbert-space and adjoint vocabulary.

## Facts & Assumptions

**Given:** A $\sigma$-finite measure space $(\Omega,\mu)$ with $\mu(\Omega)>0$, a measurable $q\le0$ a.e., the Hilbert space $H=L^2(\mu)$ with its integral inner product, and $A=M_q$ with $D(A)=\{f\in H:qf\in H\}$.

[L1] $L^2(\mu)$ is the quotient of $\mathcal L^2(\mu)$ by the a.e. zero functions, and its integral pairing makes it a complex Hilbert space under Countable Choice ([[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-hilbert-space]]).

[L2] The adjoint domain consists of the vectors $y$ for which $x\mapsto\langle Tx,y\rangle$ is bounded on $D(T)$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[L3] $z\in\rho(T)$ when $zI-T:D(T)\to H$ is bijective with bounded inverse $R(z,T)$ ([[def-resolvent-of-a-closed-operator]]).

[L4] The operator norm of a bounded operator is the supremum of $\|Tx\|$ over the unit ball, so $\|Tx\|\le\|T\|\,\|x\|$ ([[def-operator-norm]], [[def-bounded-linear-operator]]).

[L5] $A$ is sectorial of angle $\delta\in(0,\pi/2]$ at vertex $0$ when $\Sigma_{\pi/2+\delta}\subseteq\rho(A)$ with $\|R(\lambda,A)\|\le M_\varepsilon/|\lambda|$ on $\Sigma_{\pi/2+\delta-\varepsilon}$ for every $\varepsilon\in(0,\delta)$; the equivalent conditions of the characterisation theorem then give a bounded analytic semigroup of angle $\delta$ generated by $A$ ([[def-sectorial-operator-with-the-semigroup-sign-convention]], [[thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups]]).

[L6] A strongly continuous semigroup is a family $T(t)$ of bounded operators with $T(0)=I$, $T(t+s)=T(t)T(s)$ and continuous orbits, and its generator is defined by the right difference quotients ([[def-strongly-continuous-semigroup]], [[def-infinitesimal-generator-of-a-c-zero-semigroup]]).

[L7] For a strongly continuous semigroup with generator $G$ and bound $\|T(t)\|\le Me^{\omega t}$ one has $R(\lambda,G)x=\int_0^\infty e^{-\lambda t}T(t)x\,dt$ for every real $\lambda>\omega$ ([[thm-laplace-transform-formula-for-the-semigroup-resolvent]]).

[L8] Dominated convergence gives $L^2$ convergence from pointwise convergence with a fixed $L^2$ majorant ([[thm-dominated-convergence]]).

## Verification

**Proof technique:** direct.

1.1 The operator is densely defined and self-adjoint. For $f\in H$ the truncations $f_n:=f\mathbf 1_{\{|q|\le n\}}$ lie in $D(A)$ and $f_n\to f$ in $H$ by [L8], so $D(A)$ is dense; for $f,g\in D(A)$ the identity $\langle M_qf,g\rangle=\int qf\overline g\,d\mu=\langle f,M_qg\rangle$ shows symmetry. If $g\in D(A^*)$, then for every $h\in D(A)$ the adjoint relation gives $\int h(q\overline g-\overline{A^*g})\,d\mu=0$. Put $r:=A^*g-qg$ and $E_n:=\{|q|\le n,\ |r|\le n\}$, and define $h_n:=\mathbf 1_{E_n}r$. Then $h_n$ is in $L^2$, since $\|h_n\|_2\le\|A^*g\|_2+n\|g\|_2$, while $qh_n\in L^2$ because $|q|\le n$ on its support, so $h_n\in D(A)$. The adjoint identity with $h=h_n$ yields $0=\int h_n(q\overline g-\overline{A^*g})\,d\mu=-\int_{E_n}|r|^2\,d\mu$. The sets $E_n$ increase to full measure because $q$ is finite-valued and $g,A^*g\in L^2$, so $r=0$ almost everywhere. Thus $qg=A^*g\in H$, and $g\in D(A)$ with $A^*g=Ag$; therefore $D(A^*)=D(A)$ and $A=A^*$ by [L2]. [L1, L2, L8, given, algebra]

1.2 The contraction semigroup. For $f\in H$ define $T(t)f:=e^{tq}f$ for $t\ge0$; since $q\le0$ one has $|e^{tq}|\le1$ and $\|T(t)f\|_2\le\|f\|_2$ with $T(t)$ linear and $T(0)=I$, the functional equation is immediate from $e^{(t+s)q}=e^{tq}e^{sq}$, and $|e^{tq}-1|^2|f|^2\le4|f|^2$ together with pointwise convergence $e^{tq}\to1$ gives $\|T(t)f-f\|_2\to0$ as $t\downarrow0$ by [L8]; hence $T$ is a strongly continuous semigroup of contractions by [L6]. [L1, L6, L8, given, algebra]

2.1 The resolvent formula and its norm. Fix $\lambda\notin(-\infty,0]$ and put $m_\lambda:=(\lambda-q)^{-1}$, bounded with $|m_\lambda(x)|\le1/\operatorname{dist}(\lambda,(-\infty,0])$ because $q(x)\in(-\infty,0]$ a.e.; the multiplication operator $M_{m_\lambda}$ is bounded with $\|M_{m_\lambda}\|=\operatorname{ess\,sup}_x|m_\lambda(x)|$ (the upper bound from [L4] and the lower bound by testing on the indicator of a finite-measure subset of $\{|m_\lambda|>s-\varepsilon\}$); also $qm_\lambda=\lambda m_\lambda-1$ is bounded, so $M_{m_\lambda}H\subset D(A)$. The pointwise identities $(\lambda-q)m_\lambda=1=m_\lambda(\lambda-q)$ give $(\lambda I-A)M_{m_\lambda}f=f$ for $f\in H$ and $M_{m_\lambda}(\lambda I-A)g=g$ for $g\in D(A)$; hence $M_{m_\lambda}$ is the two-sided inverse of $\lambda I-A$, so $\lambda\in\rho(A)$ with $R(\lambda,A)=M_{m_\lambda}$ and $\|R(\lambda,A)\|=\operatorname{ess\,sup}_x|\lambda-q(x)|^{-1}\le1/\operatorname{dist}(\lambda,(-\infty,0])$. [step 1.1, L1, L3, L4, given, algebra]

3.1 Sectoriality with exponent $\pi/2$. By [step 2.1] every $\lambda\notin(-\infty,0]$, in particular every $\lambda\in\Sigma_\pi=\mathbb C\setminus(-\infty,0]$, lies in $\rho(A)$ with $\|R(\lambda,A)\|\le1/\operatorname{dist}(\lambda,(-\infty,0])$; for $\operatorname{Re}\lambda\ge0$ the nearest point of $(-\infty,0]$ is the origin and the distance is $|\lambda|$, for $\operatorname{Re}\lambda<0$ it is $|\operatorname{Im}\lambda|$, and on $\Sigma_{\pi-\varepsilon}$ the distance is at least $|\lambda|\sin\varepsilon$ (for $|\arg\lambda|\le\pi/2$ the distance is $|\lambda|$, and for $\pi/2\le|\arg\lambda|\le\pi-\varepsilon$ it is $|\lambda|\sin(\pi-|\arg\lambda|)\ge|\lambda|\sin\varepsilon$); hence $A$ is sectorial of angle $\pi/2$ by [L5], and as the sectorial exponent is capped at $\pi/2$ by the definition this exponent is maximal. [step 2.1, L5, given, algebra]

4.1 The generator is $A$. For real $\lambda>0$ the Bochner integral $v=\int_0^\infty e^{-\lambda t}T(t)f\,dt$ exists by the contraction bound. For $h\in H$, Cauchy–Schwarz and $q\le0$ give $\int_0^\infty\int_\Omega e^{-(\lambda-q(x))t}|f(x)h(x)|\,d\mu\,dt\le\lambda^{-1}\|f\|_2\|h\|_2$. Scalar Fubini ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]) therefore gives $\langle v,h\rangle=\int_\Omega(\lambda-q)^{-1}f\overline h\,d\mu$. A bounded linear functional commutes with the Bochner integral by its simple-function definition, so this equality identifies $v=M_{(\lambda-q)^{-1}}f$. By [L7], $R(\lambda,G)=M_{(\lambda-q)^{-1}}=R(\lambda,A)$. The common inverse has range $D(G)=D(A)$ and determines both operators, so $G=A$. Thus $T$ is the real-time restriction of the bounded analytic semigroup generated by $A$, by [L5] and uniqueness of real-time semigroups. [step 1.2, step 2.1, L5, L7, given, algebra] ∎

