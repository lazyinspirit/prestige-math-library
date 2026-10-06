---
id: cor-spectral-gap-gives-exponential-decay-of-a-self-adjoint-parabolic-semigroup
kind: corollary
title: Quadratic spectral bounds control a self-adjoint parabolic semigroup
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 14
deps: [thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups, thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups, def-dissipative-operator, thm-lumer-phillips-generation-theorem, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-axiom-of-choice, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-complex-sector-and-bounded-analytic-semigroup, lem-semigroup-generator-commutes-with-orbits-on-its-domain, lem-banach-valued-cauchy-theorem-on-star-shaped-domains, lem-power-series-coefficients-are-determined-by-real-values, thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions, thm-generators-are-closed-and-densely-defined, def-resolvent-of-a-closed-operator, thm-laplace-transform-formula-for-the-semigroup-resolvent, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-unbounded-integral-against-a-pvm, thm-bounded-borel-pvm-integral, def-projection-valued-measure, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: 'Chapter 11 Section 11.5, (11.46)-(11.48), printed p. 275'
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, Corollary 4.7 and the paragraph after it, printed pp. 105-106'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Let $H$ be a complex Hilbert space and let $A$ be a self-adjoint densely defined
operator satisfying the quadratic upper bound
$\langle Au,u\rangle\le-\lambda_1\|u\|^2$ for every $u\in D(A)$ and some
$\lambda_1\in\mathbb R$
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). Then $A$
generates a holomorphic semigroup family $(T(z))_{z\in\Sigma_{\pi/2}\cup\{0\}}$
with $\|T(z)\|\le e^{-\lambda_1\operatorname{Re}z}$ for every
$z\in\Sigma_{\pi/2}$. If $\lambda_1\ge0$, this is a bounded analytic semigroup
and $\|T(z)\|\le1$ throughout the sector; if $\lambda_1>0$ it decays
exponentially on the positive real axis, $\|T(t)\|\le e^{-\lambda_1t}$ and
$\|T(t)x\|\le e^{-\lambda_1t}\|x\|$ for $t\ge0$. For $\lambda_1=0$ the
semigroup is contractive, while for $\lambda_1<0$ the displayed estimate
allows exponential growth. If $A$ is self-adjoint and
$\sigma(A)\subseteq(-\infty,-\lambda_1]$, then the quadratic hypothesis holds,
so the same conclusion applies; passing from the spectral hypothesis to the
quadratic one uses the projection-valued-measure spectral theorem and declares
the Axiom of Choice exactly for that step
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]). The semigroup
bound itself uses only the quadratic hypothesis.

## Facts & Assumptions

**Given:** A complex Hilbert space $H$, a self-adjoint densely defined operator $A$ with quadratic upper bound $\langle Au,u\rangle\le-\lambda_1\|u\|^2$ for a fixed real $\lambda_1$ and all $u\in D(A)$, and the shifted operator $B:=A+\lambda_1I$ with $D(B)=D(A)$.

[L1] Self-adjointness means $T=T^*$: domains and values agree; and $y\in D(T^*)$ with $T^*y=w$ exactly when $\langle Tx,y\rangle=\langle x,w\rangle$ for all $x\in D(T)$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[L2] A self-adjoint densely defined operator satisfying $\langle Au,u\rangle\le0$ is sectorial of angle $\pi/2$, generates a bounded analytic semigroup of angle $\pi/2$, and that semigroup is contractive on $[0,\infty)$ ([[thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups]]).

[L3] For $x\in D(A)$ the orbit of a strongly continuous semigroup is differentiable on $(0,\infty)$ with $\frac{d}{dt}T(t)x=T(t)Ax=AT(t)x$, and $T(t)x\in D(A)$ for all $t\ge0$ ([[lem-semigroup-generator-commutes-with-orbits-on-its-domain]]).

[L4] On a star-shaped open set a continuous complex-differentiable $F$ has a holomorphic primitive $G$ with $G'=F$ ([[lem-banach-valued-cauchy-theorem-on-star-shaped-domains]]).

[L5] A holomorphic Banach-space-valued function has norm-convergent power-series expansions; two power series about a real centre that agree on a real interval have equal coefficients ([[thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions]], [[lem-power-series-coefficients-are-determined-by-real-values]]).

[L6] The generator of a strongly continuous semigroup is closed, and for real $\lambda$ above the exponential growth bound it belongs to the resolvent set ([[thm-generators-are-closed-and-densely-defined]], [[thm-laplace-transform-formula-for-the-semigroup-resolvent]], [[def-resolvent-of-a-closed-operator]]).

[L7] On a Hilbert space an operator is dissipative exactly when $\operatorname{Re}\langle Ax,x\rangle\le0$ for all $x\in D(A)$ ([[def-dissipative-operator]]).

[L8] A bounded analytic semigroup of angle $\delta$ is a family with $T(0)=I$, the functional equation, operator-norm holomorphy on $\Sigma_\delta$, strong continuity at the vertex and uniform boundedness on smaller sectors ([[def-complex-sector-and-bounded-analytic-semigroup]]).

[L9] The spectral theorem: a self-adjoint operator $A$ on a nonzero complex Hilbert space has a unique regular projection-valued measure $E$ on the Borel sets of $\mathbb R$ with $D(A)=\{x:\int\lambda^2dE_x<\infty\}$ and $Ax=\int\lambda\,dE(\lambda)x$; the proof assumes the Axiom of Choice ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-axiom-of-choice]]).

[L10] For a PVM, $E(J)$ is an orthogonal projection and the scalar measure of $E(J)x$ is the restriction of $E_x$ to $J$; the PVM calculus gives $\|(A-\lambda)y\|^2=\int|s-\lambda|^2dE_y(s)$ whenever $A=\int s\,dE$ and $y\in D(A)$ ([[def-projection-valued-measure]], [[def-unbounded-integral-against-a-pvm]], [[lem-unbounded-pvm-integral-is-well-defined-and-closed]], [[thm-bounded-borel-pvm-integral]]).

## Proof

**Proof technique:** direct.

1.1 The shifted operator. $D(B)=D(A)$ is dense; for $x,y\in D(A)$ one has $\langle Bx,y\rangle=\langle Ax,y\rangle+\lambda_1\langle x,y\rangle=\langle x,Ay\rangle+\lambda_1\langle x,y\rangle=\langle x,By\rangle$, so $B$ is symmetric, and [L1] identifies $D(B^*)$ with the $y$ for which $x\mapsto\langle Ax,y\rangle$ is bounded on $D(A)$, namely $D(A^*)=D(A)$, with $B^*y=A^*y+\lambda_1y=By$; hence $B$ is self-adjoint, and $\langle Bu,u\rangle=\langle Au,u\rangle+\lambda_1\|u\|^2\le0$ for every $u\in D(A)$; by [L2] $B$ is sectorial of angle $\pi/2$ and generates a bounded analytic semigroup $S$ of angle $\pi/2$ that is contractive on $[0,\infty)$. [L1, L2, given, algebra]

2.1 The rotated generators. Fix $\alpha\in(-\pi/2,\pi/2)$ and put $V(t):=S(e^{i\alpha}t)$ for $t\ge0$: the functional equation of $S$ makes $V$ a semigroup, strong continuity at $0$ holds along the ray $e^{i\alpha}[0,\infty)\subseteq\Sigma_{\pi/2}$ by [L8], and $\|V(t)\|\le C_\alpha$ for a finite constant because the ray lies in a strictly smaller sector; moreover for $f\in D(B)$ the identity $S(z)f-f=\int_0^zS(w)Bf\,dw$ holds on $\Sigma_{\pi/2}$, because both sides are holomorphic by [L4] and [L5] (the primitive of $w\mapsto S(w)Bf$ is holomorphic with derivative $S(z)Bf$) and they agree on the real axis by the fundamental theorem and the orbit derivative $S'(t)f=S(t)Bf$ of [L3], so the Banach-valued identity theorem proved in [[thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups]] extends the identity to the sector; dividing by $z=e^{i\alpha}t$ and letting $t\downarrow0$ gives $(V(t)f-f)/t\to e^{i\alpha}Bf$, so the generator $C_\alpha$ of $V$ contains the closed operator $e^{i\alpha}B$; for real $\lambda>0$ one has $\lambda\in\rho(C_\alpha)$ by [L6] and $\lambda\in\rho(e^{i\alpha}B)$ with $R(\lambda,e^{i\alpha}B)=e^{-i\alpha}R(e^{-i\alpha}\lambda,B)$ because $e^{-i\alpha}\lambda\notin(-\infty,0]$ and $B$ is self-adjoint nonpositive; both operators are closed and their resolvents at $\lambda$ agree (the identity $(\lambda-C_\alpha)R(\lambda,e^{i\alpha}B)=I$ holds on $H$ since the two operators agree on $D(B)$), so [L1] and the resolvent definition give $C_\alpha=e^{i\alpha}B$. [step 1.1, L1, L3, L4, L5, L6, L8, given, algebra]

3.1 Contractivity on the sector. The operator $e^{i\alpha}B$ is dissipative by [L7], because for $v\in D(B)$ one has $\operatorname{Re}\langle e^{i\alpha}Bv,v\rangle=\cos\alpha\,\langle Bv,v\rangle\le0$ (the value $\langle Bv,v\rangle=\overline{\langle v,Bv\rangle}$ is real and nonpositive by self-adjointness and the quadratic bound); by [step 2.1] it is the generator of $V$, so [L3] gives $\frac{d}{dt}\|V(t)f\|^2=2\operatorname{Re}\langle V(t)f,e^{i\alpha}BV(t)f\rangle\le0$ for $f\in D(B)$ and hence $\|V(t)f\|\le\|f\|$; since $D(B)$ is dense and $V(t)$ is bounded this extends to all $f\in H$, so $\|S(z)\|\le1$ for every $z=e^{i\alpha}t\in\Sigma_{\pi/2}$. [step 2.1, L3, L7, given, algebra]

4.1 The semigroup generated by $A$. Define $T(z):=e^{-\lambda_1z}S(z)$ on $\Sigma_{\pi/2}\cup\{0\}$: the functional equation, operator-norm holomorphy and strong continuity at the vertex are inherited, and $\|T(z)\|\le e^{-\lambda_1\operatorname{Re}z}\|S(z)\|\le e^{-\lambda_1\operatorname{Re}z}$ by [step 3.1]. For every real $\lambda_1$ this is a holomorphic semigroup family with generator $A$, since for $f\in D(A)=D(B)$ the real difference quotient satisfies $\frac{e^{-\lambda_1t}S(t)f-f}{t}=\frac{S(t)f-f}{t}+\frac{e^{-\lambda_1t}-1}{t}S(t)f\to Bf-\lambda_1f=Af$; conversely $S(t)=e^{\lambda_1t}T(t)$ shows that a vector with a convergent $T$ difference quotient belongs to $D(B)=D(A)$, so the generator is exactly $A$. When $\lambda_1\ge0$ the bound is at most $1$ on the whole sector, so $T$ is a bounded analytic semigroup of angle $\pi/2$; when $\lambda_1>0$ it gives the stated strict exponential decay on the real axis. [step 1.1, step 3.1, L8, given, algebra]

5.1 The spectral clause. If $H=\{0\}$, the conclusion is immediate. Otherwise assume AC and $\sigma(A)\subseteq(-\infty,-\lambda_1]$, and let $E$ be supplied by [L9]. To prove its carrier assertion, fix a real $\lambda\in\rho(A)$ and $0<r<\|R(\lambda,A)\|^{-1}$. For $J=(\lambda-r,\lambda+r)$, $y=E(J)x$ belongs to $D(A)$ because $J$ is bounded. By [L10], $\|(A-\lambda)y\|\le r\|y\|$, whereas the bounded inverse gives $\|y\|\le\|R(\lambda,A)\|\|(A-\lambda)y\|$. Hence $y=0$, and $E(J)=0$. Every real point outside $\sigma(A)$ has such a neighborhood; a countable rational-interval base gives a countable cover of this open set by subsets of these zero-projection neighborhoods. Countable additivity therefore gives $E(\mathbb R\setminus\sigma(A))=0$. Now [L9, L10] yield $\langle Au,u\rangle=\int s\,dE_u(s)\le-\lambda_1E_u(\mathbb R)=-\lambda_1\|u\|^2$ for $u\in D(A)$, so step 4.1 applies. AC is used in the spectral branch; the quadratic branch inherits Countable Choice from the self-adjoint generation supplier. [step 4.1, L9, L10, given, algebra] ∎

