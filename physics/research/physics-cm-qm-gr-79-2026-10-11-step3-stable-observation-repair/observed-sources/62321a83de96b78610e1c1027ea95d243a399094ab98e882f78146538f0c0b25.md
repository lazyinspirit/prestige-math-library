---
id: thm-nrqm-intervals-twisted-periodic-momentum-domain
aliases: [nrqm-intervals-and-contacts-twisted-periodic-momentum-domain]
kind: theorem
domain: mathematics
title: "The twisted-periodic momentum operator on an interval"
status: draft
origin: pipeline
dependency_level: 4
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-integration-by-parts, thm-nrqm-intervals-sine-on-completeness, lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-nrqm-oscillator-diagonal-spectrum, thm-trigonometric-system-is-complete-in-l-two-of-the-torus, def-the-one-dimensional-torus-and-normalized-haar-integral, def-fourier-coefficients-and-trigonometric-polynomials, cor-one-dimensional-change-of-variables-with-absolute-derivative, thm-linear-change-of-variables-for-lebesgue-measure, thm-monotone-convergence-for-the-integral, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-completion-measurable-functions-have-base-measurable-representatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-addition-and-real-extension, thm-sine-cosine-zero-sets-and-fundamental-period, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-self-adjointness-range-criterion, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-densely-defined-closed-and-closable-operator, def-complex-exponential, thm-termwise-differentiation-of-complex-power-series, lem-classical-derivatives-are-weak-derivatives, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  thm-nrqm-intervals-sine-on-completeness: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-nrqm-oscillator-diagonal-spectrum: mathematical-premise
  thm-trigonometric-system-is-complete-in-l-two-of-the-torus: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  def-fourier-coefficients-and-trigonometric-polynomials: mathematical-premise
  cor-one-dimensional-change-of-variables-with-absolute-derivative: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  thm-completion-measurable-functions-have-base-measurable-representatives: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-self-adjointness-range-criterion: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-termwise-differentiation-of-complex-power-series: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.1 pp. 181-186 (self-adjoint boundary conditions for first-order differential expressions on an interval)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.6 pp. 231-233 (periodic boundary conditions and the Fourier basis on an interval)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $0<L<\infty$ and $\theta\in[0,2\pi)$. Put
$D_\theta:=\{u\in H^1(0,L):u^*(L)=e^{i\theta}u^*(0)\},\qquad
P_\theta u:=-i\,Du,$
with $H^1$ and the trace $u^*$ of [[def-nrqm-intervals-hilbert-sobolev-spaces]]
and [[lem-nrqm-intervals-integration-by-parts]] clause (b). Then:

(a) $D_\theta$ is dense in $L^2(0,L;\mathbb C)$, $P_\theta$ is symmetric and
self-adjoint;

(b) the functions
$\varphi_n(x):=\frac{1}{\sqrt L}e^{i(2\pi n+\theta)x/L}\qquad(n\in\mathbb Z)$
form a complete orthonormal family of $L^2(0,L;\mathbb C)$, each
$\varphi_n\in D_\theta$, and $P_\theta\varphi_n=\kappa_n\varphi_n$ with
$\kappa_n:=\frac{2\pi n+\theta}{L};$
the eigenvalues $\kappa_n$ are simple and
$\sigma(P_\theta)=\{\kappa_n:n\in\mathbb Z\}$;

(c) $P_\theta$ is the unique self-adjoint extension of the symmetric operator
$P_\theta$ restricted to the finite linear span of the $\varphi_n$, and its
domain is exactly
$D_\theta=\Bigl\{\sum_nc_n\varphi_n:\sum_n\kappa_n^2|c_n|^2<\infty\Bigr\}.$

## Facts & Assumptions

**Given:** $0<L<\infty$; $\theta\in[0,2\pi)$; the space $D_\theta$ and operator $P_\theta$ of the statement.

[F1] $H^1(0,L)$ consists of the classes with an $L^2$ weak derivative, the trace $u^*$ is the continuous absolutely continuous representative, and for $u,v\in H^1(0,L)$, $\int_0^Lu\overline{v'}=u^*(L)\overline{v^*(L)}-u^*(0)\overline{v^*(0)}-\int_0^Lu'\overline v$ ([[def-nrqm-intervals-hilbert-sobolev-spaces]], [[lem-nrqm-intervals-integration-by-parts]]). The normalized sine functions $e_j(x)=\sqrt{2/L}\sin(j\pi x/L)$ form a complete orthonormal family in $L^2(0,L)$ ([[thm-nrqm-intervals-sine-on-completeness]]); each $e_j$ is in $H^1(0,L)$ and has zero endpoint traces, hence lies in $D_\theta$. Therefore their dense linear span is contained in $D_\theta$.

[F2] The characters $e_k(t)=e^{2\pi ikt}$ of [[def-fourier-coefficients-and-trigonometric-polynomials]] form an orthonormal basis of $L^2(\mathbb T;\mathbb C)$ ([[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]), and for an orthonormal family completeness is equivalent to having no nonzero orthogonal vector, equivalently to the Parseval identity holding for every vector ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F3] Change of variables: for the increasing absolutely continuous map $\varphi:t\mapsto Lt$ and integrable $H$, $\int_0^LH(Lt)\,dt=L^{-1}\int_0^LH(x)\,dx$ ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]).

[F4] Range criterion: a densely defined symmetric operator $T$ is self-adjoint if and only if $\operatorname{ran}(T-z)=H$ for every $z\in\mathbb C\setminus\mathbb R$ ([[thm-self-adjointness-range-criterion]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-densely-defined-closed-and-closable-operator]]).

[F5] The diagonal operator lemma [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]: for a complete orthonormal family $(w_n)$ and real numbers $(\nu_n)$, the finite-support diagonal operator is essentially self-adjoint with unique self-adjoint extension $T$, $Tw_n=\nu_nw_n$, and $D(T)=\{x:\sum_n\nu_n^2|\langle x,w_n\rangle|^2<\infty\}$; the spectrum is the closure of $\{\nu_n\}$ ([[thm-nrqm-oscillator-diagonal-spectrum]]).

[F6] The affine map $\phi(t)=Lt$ satisfies $\lambda_1(\phi^{-1}(E))=L^{-1}\lambda_1(E)$ for Lebesgue-measurable $E$, by linear scaling of Lebesgue measure ([[thm-linear-change-of-variables-for-lebesgue-measure]]). Thus $\int_0^1Q(Lt)\,dt=L^{-1}\int_0^LQ(x)\,dx$ first for indicators and simple functions, then for nonnegative measurable functions by monotone convergence, and then for integrable complex $Q$ by decomposition ([[thm-monotone-convergence-for-the-integral]]).

[F7] Extend a Lebesgue-measurable function on $(0,L)$ by zero to $\mathbb R$; Lebesgue measure on $\mathbb R$ is the completion of its Borel restriction, and each real component has a Borel representative equal almost everywhere under Countable Choice ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-completion-measurable-functions-have-base-measurable-representatives]]). The representative map $[t]\mapsto t\in[0,1)$ is Borel: the quotient map restricts to a homeomorphism from $(0,1)$ onto $\mathbb T\setminus\{[0]\}$, and the remaining singleton is Borel; hence the function induced on $\mathbb T$ from a Borel function on $[0,1)$ is Borel ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[F8] Termwise differentiation of the complex exponential power series gives $\exp'(z)=\exp z$ on $\mathbb C$ ([[thm-termwise-differentiation-of-complex-power-series]], [[def-complex-exponential]]). For fixed $c\in\mathbb C$, the real-variable difference quotient along $x\mapsto cx$ therefore gives $\frac{d}{dx}e^{cx}=c e^{cx}$ (if $c\ne0$, use the increment $ch$ in the complex difference quotient; if $c=0$, the function is constant). Classical derivatives of $C^1$ functions are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F9] The complex exponential satisfies $\exp(z+w)=\exp z\exp w$, and for real $x,y$, $|\exp(x+iy)|=e^x$ and $\exp(iy)=\cos y+i\sin y$ ([[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]). In particular $|e^{iy}|=1$ and $\overline{e^{iy}}=e^{-iy}$: multiplication gives $e^{iy}e^{-iy}=1$, and a unit complex number has inverse equal to its conjugate. Sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]); consequently $e^{2\pi in}=1$ for each $n\in\mathbb Z$.

## Proof

1.1 [Density and symmetry] By [F1], $D_\theta$ contains the linear span of the complete sine family and is therefore dense in $L^2(0,L)$. For $u,v\in D_\theta$, [F1] gives $\langle P_\theta u,v\rangle-\langle u,P_\theta v\rangle =-i\bigl(u^*(L)\overline{v^*(L)}-u^*(0)\overline{v^*(0)}\bigr)=0,$ because $u^*(L)\overline{v^*(L)}=e^{i\theta}u^*(0) \overline{e^{i\theta}v^*(0)}=u^*(0)\overline{v^*(0)}$. Hence $P_\theta$ is symmetric. [F1, given, algebra]

1.2 [The twisted characters and their completeness] For $n,m\in\mathbb Z$, $\langle\varphi_n,\varphi_m\rangle =\frac1L\int_0^Le^{i(2\pi(n-m))x/L}dx=\delta_{nm},$ since for $n=m$ the integrand is $1$, and for $n\ne m$ the function $L^{-1}e^{2\pi i(n-m)x/L}$ is the transport under $x=Lt$ of the torus character $e_{n-m}$, whose integral over $\mathbb T$ vanishes by [F2]; the transport of the continuous integral is [F3]. To see completeness, let $g\in L^2(0,L)$ satisfy $\langle g,\varphi_n\rangle=0$ for every $n$. By [F7] choose a Borel representative of $g$ and set $h(x):=e^{-i\theta x/L}g(x)$, also Borel. By [F9], $e^{-i\theta x/L}\varphi_n(x)=L^{-1/2}e^{2\pi inx/L}=\chi_n(x)$, so $\langle h,\chi_n\rangle=\int_0^Lg(x)\overline{\varphi_n(x)}dx=0$ for every $n$. Define $H([t]):=h(Lt)$ for the unique representative $t\in[0,1)$; it is measurable by [F7]. The affine integral identity [F6] gives $\widehat H(k)=\int_0^1h(Lt)e^{-2\pi ikt}dt=L^{-1}\int_0^Lh(x)e^{-2\pi ikx/L}dx=L^{-1/2}\langle h,\chi_k\rangle=0$. Completeness of the torus characters [F2] gives $H=0$, hence $h=0$ and $g=0$ almost everywhere. By [F2] the family $(\varphi_n)$ is complete. [F2, F6, F7, F9, algebra]

1.3 [Range of $P_\theta-z$] Let $z\in\mathbb C\setminus\mathbb R$ and $f\in L^2(0,L)$. Define $A(x):=u_0+i\int_0^xe^{-izt}f(t)\,dt,\qquad u(x):=e^{izx}A(x),$ where $u_0\in\mathbb C$ is chosen below. By [F8] and the product rule, $A$ is absolutely continuous with $A'=ie^{-izx}f\in L^2$ and $A(0)=u_0$, so $u\in H^1(0,L)$ with $Du=izu+if$; hence $(P_\theta-z)u=-i(izu+if)-zu=f$. The boundary condition $u^*(L)=e^{i\theta}u^*(0)$ reads $e^{izL}\bigl(u_0+i\int_0^Le^{-izt}f(t)dt\bigr)=e^{i\theta}u_0$, i.e. $u_0\bigl(e^{izL}-e^{i\theta}\bigr)=-ie^{izL}\int_0^Le^{-izt}f(t)\,dt .$ Since $z\notin\mathbb R$, [F9] gives $|e^{izL}|=e^{-L\operatorname{Im}z}\ne1=|e^{i\theta}|$, so $e^{izL}-e^{i\theta}\ne0$ and the displayed equation has exactly one solution $u_0\in\mathbb C$; the resulting $u\in D_\theta$ satisfies $(P_\theta-z)u=f$. Hence $\operatorname{ran}(P_\theta-z)=L^2(0,L)$ for every nonreal $z$. [F1, F4, F8, F9, algebra]

2.1 [Eigenvalues] Each $\varphi_n$ is $C^1$ with $D\varphi_n=i\kappa_n\varphi_n$ by [F8]. By [F9], $\varphi_n^*(L)=L^{-1/2}e^{i(2\pi n+\theta)}=e^{i\theta}L^{-1/2}e^{2\pi in}=e^{i\theta}\varphi_n^*(0)$, so $\varphi_n\in D_\theta$ and $P_\theta\varphi_n=\kappa_n\varphi_n$. The numbers $\kappa_n=(2\pi n+\theta)/L$ are pairwise distinct, so the eigenvalues listed are simple provided the eigenvalue set is exactly $\{\kappa_n\}$ (proved in the final phase). [step 1.2, F8, F9, algebra]

2.2 [Self-adjointness] Steps 1.1 and 1.3 give a densely defined symmetric operator with $\operatorname{ran}(P_\theta-z)=L^2$ for every nonreal $z$; by the range criterion [F4], $P_\theta$ is self-adjoint. [step 1.1, step 1.3, F4]

3.1 [Diagonal form] Let $S$ be the restriction of $P_\theta$ to the linear span $D_0$ of the $\varphi_n$. By step 2.1, $S$ is the finite-support diagonal operator with respect to the complete orthonormal family $(\varphi_n)$ and the real numbers $\kappa_n$; by [F5] $S$ has a unique self-adjoint extension $T$ with $D(T)=\{\sum_nc_n\varphi_n:\sum_n\kappa_n^2|c_n|^2<\infty\}$ and $T\varphi_n=\kappa_n\varphi_n$, and $\sigma(T)$ is the closure of $\{\kappa_n\}$. Since $P_\theta$ is self-adjoint and extends $S$, uniqueness in [F5] gives $P_\theta=T$. Because $\kappa_n\to\pm\infty$ as $n\to\pm\infty$, the set $\{\kappa_n\}$ has no finite accumulation point, so $\sigma(P_\theta)=\{\kappa_n:n\in\mathbb Z\}$, and the domain is the displayed coefficient domain; the diagonal representation also gives $\ker(P_\theta-\kappa_n)=\mathbb C\varphi_n$ by uniqueness of coefficients. This proves (b) and (c). [step 1.2, step 2.1, step 2.2, F2, F5] ∎
