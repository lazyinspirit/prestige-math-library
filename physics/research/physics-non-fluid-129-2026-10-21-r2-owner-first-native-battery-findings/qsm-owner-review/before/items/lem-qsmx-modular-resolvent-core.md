---
id: lem-qsmx-modular-resolvent-core
kind: lemma
title: Modular resolvent invariance and commutant equality
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
physical_scope: null
deps:
  - def-qsmx-standard-modular-data
  - lem-qsmx-tomita-operator-involution
  - lem-qsmx-modular-unitary-strong-continuity
  - lem-qsmx-von-neumann-predual
  - lem-qsmx-trace-class-duality
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - thm-ultrafilter-lemma
  - thm-banach-alaoglu
  - thm-hahn-banach-dominated-extension
  - thm-continuous-functional-calculus-for-bounded-self-adjoint-operators
  - thm-unbounded-borel-functional-calculus
  - thm-dominated-convergence
  - thm-residue-theorem-null-homologous-cycle
  - thm-l-one-fourier-inversion
dependency_roles:
  def-qsmx-standard-modular-data: mathematical-premise
  lem-qsmx-tomita-operator-involution: mathematical-premise
  lem-qsmx-modular-unitary-strong-continuity: mathematical-premise
  lem-qsmx-von-neumann-predual: mathematical-premise
  lem-qsmx-trace-class-duality: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-ultrafilter-lemma: mathematical-premise
  thm-banach-alaoglu: mathematical-premise
  thm-hahn-banach-dominated-extension: mathematical-premise
  thm-continuous-functional-calculus-for-bounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-residue-theorem-null-homologous-cycle: mathematical-premise
  thm-l-one-fourier-inversion: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: F. Hiai, Concise lectures on selected topics of von Neumann algebras
      url: https://arxiv.org/pdf/2004.02383
      locator: §2.1, Lemmas 2.5–2.8, Theorem 2.2 and Remark 2.9, printed pp. 12–16
    - title: Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory
      url: https://arxiv.org/pdf/1803.04993
      locator: §3.1, equations (3.1)–(3.19), printed pp. 18–20 (PDF pp. 19–21); closure caveat in footnote 15
---

## Statement

Assume the Axiom of Choice and the standard modular data of a concrete von Neumann algebra $M\subseteq\mathcal B(H)$ with unit cyclic-separating vector $\Omega$. Let $F=S^*$, where $S$ is the closure of $S_0(x\Omega)=x^*\Omega$, and let $F_0(x'\Omega)=x'^*\Omega$ on $M'\Omega$. For every $\lambda\in\mathbb C$ with $|\lambda|=1$ and $\lambda\ne-1$,
$$(\Delta+\lambda)^{-1}M'\Omega\subseteq M\Omega.$$
The modular conjugation and operator satisfy
$$JMJ=M',\qquad \Delta^{it}M\Delta^{-it}=M\quad(t\in\mathbb R),\qquad \overline{F_0}=F=S^*.$$

## Statement references

[[def-qsmx-standard-modular-data]]

[[lem-qsmx-tomita-operator-involution]]

[[lem-qsmx-modular-unitary-strong-continuity]]

[[lem-qsmx-von-neumann-predual]]

[[lem-qsmx-trace-class-duality]]

[[thm-banach-alaoglu]]

[[thm-hahn-banach-dominated-extension]]

[[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]]

[[thm-unbounded-borel-functional-calculus]]

[[thm-residue-theorem-null-homologous-cycle]]

[[thm-l-one-fourier-inversion]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the standard modular data $(M,H,\Omega,S,J,\Delta)$, and the trace-class quotient predual of $M$.

[A1] Assume the Axiom of Choice; it supplies the ultrafilter lemma and Countable Choice through the stated implication ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]], [[thm-ultrafilter-lemma]]).

[F1] The standard modular data fix a concrete von Neumann algebra $M$, its commutant, the linear-first inner-product convention, the unit cyclic-separating vector $\Omega$, the closure $S$, and the nonsingular positive operator $\Delta$ ([[def-qsmx-standard-modular-data]]).

[F2] The Tomita operator is an involution; $F=S^*$, $F=J\Delta^{-1/2}=\Delta^{1/2}J$, $J^2=I$, $J\Delta J=\Delta^{-1}$, and $J\Delta^{it}J=\Delta^{it}$ ([[lem-qsmx-tomita-operator-involution]]).

[F3] The trace-class quotient $Q$ is a predual of $M$, diagonal vector functionals are normal, and the dual unit ball is weak-star compact under Choice ([[lem-qsmx-von-neumann-predual]]); rank-one trace pairing makes every matrix coefficient normal ([[lem-qsmx-trace-class-duality]]).

[F4] Under the ultrafilter lemma the closed dual unit ball of every normed space is weak-star compact ([[thm-banach-alaoglu]]).

[F5] A real linear functional dominated by a real sublinear functional on a subspace extends to the whole real vector space with the same domination, under Choice ([[thm-hahn-banach-dominated-extension]]).

[F6] The continuous functional calculus of a bounded self-adjoint operator is a norm-isometric unital star-homomorphism whose range is the generated $C^*$-algebra ([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]]).

[F7] The unbounded Borel calculus supplies the resolvent and spectral cutoffs of the positive self-adjoint operator $\Delta$ on their exact domains ([[thm-unbounded-borel-functional-calculus]]).

[F8] For a scalar meromorphic function on an open set and an admissible null-homologous cycle, the contour integral is the finite residue sum ([[thm-residue-theorem-null-homologous-cycle]]).

[F9] If $g\in L^1(\mathbb R)$ and $\widehat g\in L^1(\mathbb R)$, Fourier inversion recovers $g$ almost everywhere; in particular, $\widehat g=0$ implies $g=0$ almost everywhere ([[thm-l-one-fourier-inversion]], [[def-countable-choice]]).

[F10] The unitary group $t\mapsto\Delta^{it}$ is strongly continuous on every vector ([[lem-qsmx-modular-unitary-strong-continuity]]).

[F11] Dominated convergence justifies holomorphy of the exponentially weighted vector Laplace transform on compact substrips ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** prove the resolvent core by compact-convex separation, then use spectral cutoffs, a scalar residue contour and Fourier uniqueness.

**Given:** [A1], [F1]–[F9], and the standard modular data.

1.1 Fix $|\lambda|=1$ with $\lambda\ne-1$. Write $\lambda=e^{i\theta}$ with $-\pi<\theta<\pi$, set $\alpha=(1+\lambda)^{-1}$, and note $\alpha+\bar\alpha=1$. Because $\Delta$ is positive, its spectrum lies in $[0,\infty)$; $-\lambda\notin[0,\infty)$, so $(\Delta+\lambda)^{-1}$ is a bounded spectral multiplier. [A1, F1, F7, given]

1.2 First let $x'\in M'$ be a positive contraction. In the linear-second notation $(u|v)=\langle v,u\rangle$, define $\psi(y)=(x'\Omega|y\Omega)=\omega(x'y)$ and $\psi_x(y)=\omega(\alpha xy+\bar\alpha yx)$ for $y\in M$ and $x=x^*\in M$. Since $x'$ commutes with $M$, $0\leq\psi\leq\omega$, and $\psi$ is normal by its rank-one trace-class representation. Each $\psi_x$ is self-adjoint. For fixed $y$, both $x\mapsto\omega(xy)$ and $x\mapsto\omega(yx)$ are normal matrix-coefficient functionals, so $x\mapsto\psi_x$ is continuous from the weak-star topology of $M_{\rm sa}$ to the pointwise topology of $M_*^{\rm sa}$. The self-adjoint unit ball of $M$ is weak-star closed; [F3]–[F4] make it compact. Hence $V=\{\psi_x:x=x^*,\ \|x\|\leq1\}$ is compact and convex. [F3, F4, F6, given, algebra]

1.3 Suppose $\psi\notin V$. The pointwise topology on $M_*^{\rm sa}$ has a base of finite evaluation conditions, so there are self-adjoint $a_1,\ldots,a_m\in M$ for which $q=(\psi(a_j))_{j=1}^m$ is outside the compact convex set $K=\{(\phi(a_j))_{j=1}^m:\phi\in V\}\subset\mathbb R^m$. Choose $0<r<\operatorname{dist}(q,K)$, put $U=K+B(0,r)$, choose $u_0\in U$, and set $C=U-u_0$. The open convex neighborhood $C$ of $0$ is absorbing; its gauge $p(v)=\inf\{s>0:v\in sC\}$ is finite and sublinear, and convexity and openness give $C=\{v:p(v)<1\}$. With $v_0=q-u_0\notin C$, $p(v_0)\geq1$. On the line $\mathbb Rv_0$ define $f(tv_0)=t\,p(v_0)$. Positive homogeneity gives $f\leq p$ for $t\geq0$; for $t<0$ the inequality $p(v_0)+p(-v_0)\geq0$ gives the same domination. By [F5], extend $f$ to a real linear $L$ on $\mathbb R^m$ with $L\leq p$. Then $L(k-u_0)<1\leq L(q-u_0)$ for every $k\in K$. Writing $L(z)=\sum_j c_jz_j$ and $y_0=\sum_jc_ja_j\in M_{\rm sa}$ gives $\psi(y_0)>\sup_{\|x\|\leq1,\ x=x^*}\psi_x(y_0)$. [A1, F5, given, construct]

1.4 Fix $|\lambda|=1$, $\lambda=e^{i\theta}$, $-\pi<\theta<\pi$. For $n\geq1$ let $E_n=1_{[1/n,n]}(\Delta)$. On $E_nH$, $\Delta$ and its inverse are bounded. Apply [F8] to each scalar matrix coefficient of $$f_n(z)=\frac{e^{i\theta z}}{\sin(\pi z)}\Delta^{-z}E_nxE_n\Delta^z$$ around the rectangle $-1/2\leq\operatorname{Re}z\leq1/2$, $|\operatorname{Im}z|\leq R$. On $E_nH$, $\log\Delta$ is bounded, so $f_n$ is norm-meromorphic with simple poles at integers; the rectangle encloses only $0$, with residue $E_nxE_n/\pi$. On the horizontal sides, the norm is at most $2e^{|\theta|R}n^2\|x\|/(e^{\pi R}-e^{-\pi R})$, which tends to zero. On the right vertical side, $z=it+1/2$ gives $\sin(\pi z)=\cosh(\pi t)$, $e^{i\theta z}=e^{-\theta t}e^{i\theta/2}$, and $\Delta^{-z}E_nxE_n\Delta^z=\Delta^{-1/2}\Delta^{-it}E_nxE_n\Delta^{it}\Delta^{1/2}$. On the left side, $z=it-1/2$ gives $\sin(\pi z)=-\cosh(\pi t)$ and the corresponding factors $\Delta^{1/2}\Delta^{-it}E_nxE_n\Delta^{it}\Delta^{-1/2}$ and $e^{-\theta t}e^{-i\theta/2}$. Substitution in the oriented contour formula therefore gives $$E_nxE_n=\Delta^{1/2}E_n\widetilde xE_n\Delta^{-1/2}+\lambda\Delta^{-1/2}E_n\widetilde xE_n\Delta^{1/2},\qquad \widetilde x=e^{-i\theta/2}\int_{\mathbb R}\frac{e^{-\theta t}}{e^{\pi t}+e^{-\pi t}}\Delta^{-it}x\Delta^{it}\,dt.$$ The scalar weight is integrable because $|\theta|<\pi$. For fixed $\xi\in H$, the orbit $t\mapsto\Delta^{-it}x\Delta^{it}\xi$ is norm-continuous: writing $U_t=\Delta^{-it}$, $\|U_txU_t^*\xi-U_sxU_s^*\xi\|\leq\|x\|\|(U_t^*-U_s^*)\xi\|+\|(U_t-U_s)xU_s^*\xi\|,$ and each term tends to zero as $t\to s$ by [F10]. Its norm is at most $\|x\|\|\xi\|$. Define the integral as the norm limit of ordinary vector integrals over finite intervals; the integrable scalar weight makes the tails Cauchy. The resulting linear map has norm at most $\|x\|$ times the weight's $L^1$ norm, so it is a bounded operator. This contour identity has the normalization fixed by the residue $E_nxE_n/\pi$. [A1, F1, F7, F8, F10, given, construct]

2.1 The last strict inequality is impossible. Positivity and $0\leq\psi\leq\omega$ imply $\psi(y_0)\leq\psi(|y_0|)\leq\omega(|y_0|)$. For $n\geq1$, let $x_n=f_n(y_0)$ by [F6], where $f_n(s)=s/(|s|+1/n)$. Each $x_n$ is self-adjoint with $\|x_n\|\leq1$ and commutes with $y_0$. The positive functions $g_n(s)=s^2/(|s|+1/n)$ increase to $|s|$, so $x_ny_0=y_0x_n=g_n(y_0)\uparrow|y_0|$. Normality gives $\psi_{x_n}(y_0)=\omega(g_n(y_0))\uparrow\omega(|y_0|)$, contradicting the strict separator. Therefore $\psi=\psi_x$ for some self-adjoint contraction $x$. [F3, F6, step 1.3, algebra]

2.2 Apply the same residue calculation to $g_n(z)=e^{i\theta z}\Delta^{-z}E_n/\sin(\pi z)$, whose residue at $0$ is $E_n/\pi$. On the right vertical side its multiplier is $2e^{-\theta t}e^{i\theta/2}\Delta^{-1/2}\Delta^{-it}E_n/(e^{\pi t}+e^{-\pi t})$; on the left it is $-2e^{-\theta t}e^{-i\theta/2}\Delta^{1/2}\Delta^{-it}E_n/(e^{\pi t}+e^{-\pi t})$. Including the opposite orientations of the two vertical sides and using $\lambda=e^{i\theta}$ yields $$\Delta^{1/2}(\Delta+\lambda)^{-1}E_n=e^{-i\theta/2}\left(\int_{\mathbb R}\frac{e^{-\theta t}}{e^{\pi t}+e^{-\pi t}}\Delta^{-it}\,dt\right)E_n.$$ This follows by factoring $\Delta^{-1/2}(\Delta+\lambda)=\Delta^{1/2}+\lambda\Delta^{-1/2}$ from the vertical-side integral. Define the strong integral vectorwise as in step 1.4. The bounded spectral multiplier on the left and the integrable weight on the right allow $n\to\infty$ strongly, so the identity holds with $E_n$ omitted. In particular the scalar factor has no additional $i$: at $\lambda=1$ and $\Delta=I$ both sides equal $1/2$. [F1, F7, F8, F10, step 1.4, algebra]

3.1 For every $y\in M$, $\psi=\psi_x$ and $\alpha+\bar\alpha=1$ give $$(x'\Omega-\bar\alpha x\Omega|y\Omega)=\omega(x'y)-\alpha\omega(xy)=\bar\alpha\,\omega(yx)=(S_0y\Omega|\bar\alpha x\Omega).$$ The antilinear-adjoint definition therefore puts $\bar\alpha x\Omega$ in $D(F)$ and gives $F(\bar\alpha x\Omega)=x'\Omega-\bar\alpha x\Omega$, or $\alpha F(x\Omega)=x'\Omega-\bar\alpha x\Omega$. Since $x=x^*$, $Sx\Omega=x\Omega$; hence $x\Omega\in D(\Delta)$ and $F(x\Omega)=\Delta x\Omega$. Thus $x'\Omega=(\alpha\Delta+\bar\alpha)x\Omega=(\Delta+\lambda)x\Omega/(1+\lambda)$. Replacing $x$ by $x/(1+\lambda)$ proves $(\Delta+\lambda)^{-1}x'\Omega\in M\Omega$. For a general $x'\in M'$, write $x'=h_1+ih_2$ with $h_j=h_j^*$. If $c\geq\max(1,\|h_1\|,\|h_2\|)$, each $(I\pm h_j/c)/2$ is a positive contraction, so $x'$ is a complex linear combination of positive contractions. Linearity extends the inclusion to all of $M'\Omega$. Uniqueness follows because $\Delta+\lambda$ is injective and $\Omega$ is separating. [F1, F2, step 1.1, step 1.2, step 2.1, algebra]

4.1 Let $x'\in M'$ and $x\in M$ satisfy $x'\Omega=(\Delta+\lambda)x\Omega$. For $y_1,y_2\in M$, commutation, $\Delta=FS$, $S(y\Omega)=y^*\Omega$, and $S=J\Delta^{1/2}=\Delta^{-1/2}J$ give $$(y_1\Omega|x'y_2\Omega)=(y_2^*y_1\Omega|x'\Omega)=(Sx\Omega|S(y_2^*y_1\Omega))+\lambda(y_1\Omega|y_2x\Omega)=(y_1x^*\Omega|y_2\Omega)+\lambda(y_1\Omega|S(x^*S(y_2\Omega)))=(\Delta^{-1/2}JxJ\Delta^{1/2}y_1\Omega|y_2\Omega)+\lambda(y_1\Omega|\Delta^{-1/2}Jx^*J\Delta^{1/2}y_2\Omega).$$ If $y_1\Omega,y_2\Omega\in(\Delta+1)^{-1}M'\Omega$, then both lie in $D(\Delta^{1/2})\cap D(\Delta^{-1/2})$. Since $JxJ$ is bounded with adjoint $Jx^*J$, $$(\Delta^{-1/2}JxJ\Delta^{1/2}y_1\Omega|y_2\Omega)=(JxJ\Delta^{1/2}y_1\Omega|\Delta^{-1/2}y_2\Omega)=(\Delta^{1/2}y_1\Omega|Jx^*J\Delta^{-1/2}y_2\Omega),$$ and self-adjointness of $\Delta^{-1/2}$ gives $$(y_1\Omega|\Delta^{-1/2}Jx^*J\Delta^{1/2}y_2\Omega)=(\Delta^{-1/2}y_1\Omega|Jx^*J\Delta^{1/2}y_2\Omega).$$ Therefore $$(y_1\Omega|x'y_2\Omega)=(\Delta^{1/2}y_1\Omega|Jx^*J\Delta^{-1/2}y_2\Omega)+\lambda(\Delta^{-1/2}y_1\Omega|Jx^*J\Delta^{1/2}y_2\Omega).$$ [F1, F2, step 3.1, algebra]

5.1 The space $\Delta^{-1/2}M'\Omega$ is dense: $F(y'\Omega)=y'^*\Omega$ and $F=J\Delta^{-1/2}$ give $\Delta^{-1/2}M'\Omega=JM'\Omega$, which is dense by cyclicity of $\Omega$ for $M'$. For $\xi\in D(\Delta^{1/2})\cap D(\Delta^{-1/2})$, choose $y_n'\in M'$ with $\Delta^{-1/2}y_n'\Omega\to(\Delta^{1/2}+\Delta^{-1/2})\xi$. By step 3.1 at $\lambda=1$, choose $y_n\in M$ with $y_n\Omega=(\Delta+1)^{-1}y_n'\Omega$. The spectral multipliers $(\Delta^{1/2}+\Delta^{-1/2})^{-1}$, $\Delta^{1/2}(\Delta+1)^{-1}$, and $\Delta^{-1/2}(\Delta+1)^{-1}$ are bounded, so $y_n\Omega\to\xi$ and $\Delta^{\pm1/2}y_n\Omega\to\Delta^{\pm1/2}\xi$. Thus the core in step 4.1 is dense in the joint graph norms. [F1, F2, F7, step 3.1, step 4.1]

6.1 Both sides of the identity in step 4.1 are continuous in those graph norms: the left side is bounded by $\|x'\|\|\xi_1\|\|\xi_2\|$, and the right side by $\|x\|$ times the products of the indicated $\Delta^{\pm1/2}$ norms. Passing to the approximating sequences of step 5.1 proves the displayed form identity for every $\xi_1,\xi_2\in D(\Delta^{1/2})\cap D(\Delta^{-1/2})$. [step 4.1, step 5.1, algebra]

7.1 If $y$ satisfies the form identity of step 6.1, compression to $E_nH$ and comparison with step 1.4 show that $v_n=E_n(y-\widetilde x)E_n$ satisfies $\Delta_n v_n+\lambda v_n\Delta_n=0$, where $\Delta_n=\Delta|_{E_nH}$. The spectra of $\Delta_n$ and $-\lambda\Delta_n$ are disjoint compact sets: $\sigma(\Delta_n)\subset[1/n,n]$ and $-\lambda$ is not positive real. Choose a contour $\Gamma$ enclosing $\sigma(\Delta_n)$ and excluding $\sigma(-\lambda\Delta_n)$. For $z\in\Gamma$, multiplying the Sylvester equation by $(z-\Delta_n)^{-1}$ on the left and $(z+\lambda\Delta_n)^{-1}$ on the right gives $$(z-\Delta_n)^{-1}v_n=v_n(z+\lambda\Delta_n)^{-1}.$$ The spectral theorem and scalar residue formula give $(2\pi i)^{-1}\int_\Gamma(z-\Delta_n)^{-1}\,dz=I$ and $(2\pi i)^{-1}\int_\Gamma(z+\lambda\Delta_n)^{-1}\,dz=0$. Integration yields $v_n=0$. [F1, F7, F8, step 6.1, step 1.4, algebra]

8.1 The projections $E_n$ increase strongly to $I$ because $\ker\Delta=0$. Thus $E_n(y-\widetilde x)E_n=0$ for all $n$ implies $y=\widetilde x$ by taking matrix coefficients and passing to the strong limit. Applying this to the form identity of step 6.1 proves the resolvent-core formula $$Jx^*J=e^{-i\theta/2}\int_{\mathbb R}\frac{e^{-\theta t}}{e^{\pi t}+e^{-\pi t}}\Delta^{-it}x'\Delta^{it}\,dt.$$ The displayed scalar factor is determined by step 1.4; for $\lambda=1$ and $\Delta=I$ the integral gives $x/2$, as required by the form identity. [F1, F2, step 6.1, step 1.4, step 7.1, algebra]

9.1 Fix $x',y'\in M'$. Use step 3.1 to choose $x\in M$ with $x'\Omega=(\Delta+\lambda)x\Omega$. Then step 8.1 and step 2.2 give, for each $-\pi<\theta<\pi$, $$\int_{\mathbb R}\frac{e^{-\theta t}}{e^{\pi t}+e^{-\pi t}}\Bigl(J\Delta^{-it}x'\Delta^{it}Jy'\Omega-y'J\Delta^{-it}x'\Omega\Bigr)\,dt=0.$$ The first summand is bounded by $\|x'\|\|y'\|$ and norm-continuous by the conjugation-orbit estimate in step 1.4 applied to $x'$ and $Jy'\Omega$; the second is bounded by the same constant and norm-continuous by [F10] applied to $x'\Omega$, followed by the fixed bounded maps $J$ and $y'$. For any $\eta\in H$, let $c(t)$ be its scalar coefficient. If $|\operatorname{Re}z|\leq r<\pi$, then $|c(t)e^{-zt}/(e^{\pi t}+e^{-\pi t})|\leq C e^{-(\pi-r)|t|}$ for a fixed $C$. For difference quotients with $|h|\leq\delta<\pi-r$, the integral formula for $e^{-ht}-1$ gives the integrable bound $C|t|e^{-(\pi-r-\delta)|t|}$. By [F11], dominated convergence differentiates the integral in $z$ on every such compact substrip, so its Laplace transform is holomorphic on $|\operatorname{Re}z|<\pi$. It vanishes on the real interval $(-\pi,\pi)$. A scalar holomorphic function with zeros accumulating at an interior point is identically zero: its Taylor series at that point either has a first nonzero coefficient, which would make the zero isolated, or all coefficients vanish and it is zero in a neighborhood; the set of points with a zero neighborhood is then open and closed in the connected strip. Evaluating at $z=is$ shows the Fourier transform of that $L^1$ coefficient is zero for every $s\in\mathbb R$. [F1, F2, F9, F10, F11, step 1.4, step 3.1, step 8.1, step 2.2, algebra]

10.1 By [F9] the scalar coefficient in step 9.1 vanishes almost everywhere; continuity makes it vanish everywhere. Since this holds for every $\eta\in H$, $$J\Delta^{-it}x'\Delta^{it}Jy'\Omega=y'J\Delta^{-it}x'\Omega\qquad(t\in\mathbb R).$$ For fixed $t,x'$, apply this identity with $y'_2$ and then with $y'_1y'_2$. It gives $$(y'_1J\Delta^{-it}x'\Delta^{it}J)y'_2\Omega=y'_1y'_2J\Delta^{-it}x'\Omega =(J\Delta^{-it}x'\Delta^{it}J)y'_1y'_2\Omega.$$ The vectors $M'\Omega$ are dense, so $J\Delta^{-it}x'\Delta^{it}J$ commutes with every $y'_1\in M'$. Thus it lies in $M''=M$. At $t=0$, $JM'J\subseteq M$, hence $M'\subseteq JMJ$. [F1, F2, F9, step 9.1, algebra]

11.1 To prove the reverse inclusion, fix $x,y\in M$ and $x'\in M'$. Step 10.1 gives $Jx'J\in M$. Using commutation of $x'$ and $y$, the identities $F=S^*=JSJ$, $S(x\Omega)=x^*\Omega$, and $(JxJ)^*=Jx^*J$, we obtain $$(x'^*\Omega|yJx\Omega)=(y^*\Omega|x'Jx\Omega) =(y^*\Omega|J(Jx'J)x\Omega) =(y^*\Omega|JS(x^*Jx'^*J\Omega)) =(y^*\Omega|F(Jx^*Jx'^*\Omega)) =(Jx^*Jx'^*\Omega|Sy^*\Omega) =(x'^*\Omega|JxJy\Omega).$$ Since $x'^*\Omega$ ranges over the dense subspace $M'\Omega$, this implies $yJx\Omega=JxJy\Omega$. For $y_1,y_2\in M$, it follows that $y_1JxJy_2\Omega=y_1y_2Jx\Omega=JxJy_1y_2\Omega$. Density of $M\Omega$ then gives $JxJ\in M'$. Therefore $JMJ\subseteq M'$, and step 10.1 yields $JMJ=M'$. [F1, F2, step 10.1, algebra]

12.1 The inclusions $J\Delta^{-it}M'\Delta^{it}J\subseteq M$ from step 10.1 and $JMJ=M'$ from step 11.1 imply $\Delta^{-it}M'\Delta^{it}\subseteq M'$ for every $t$. Replacing $t$ by $-t$ and conjugating gives equality. Taking commutants and using $M''=M$ gives $\Delta^{it}M\Delta^{-it}=M$. [F1, F2, step 10.1, step 11.1, algebra]

13.1 For $x'\in M'$, write $x'=JxJ$ with $x\in M$ by step 11.1. Since $J\Omega=\Omega$ and $S_0(x\Omega)=x^*\Omega$, direct substitution gives $JS_0J(x'\Omega)=x'^*\Omega=F_0(x'\Omega)$. Thus $F_0=JS_0J$, so graph closure gives $\overline{F_0}=JSJ=F=S^*$. Steps 3.1, 11.1–12.1, and this closure identity establish all stated conclusions. [F1, F2, step 3.1, step 11.1, step 12.1, algebra] ∎
