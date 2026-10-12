---
id: thm-nrqm-intervals-twisted-periodic-momentum-domain
aliases: [nrqm-intervals-and-contacts-twisted-periodic-momentum-domain]
kind: theorem
domain: mathematics
title: "The twisted-periodic momentum operator on an interval"
status: draft
origin: pipeline
dependency_level: 4
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-integration-by-parts, thm-nrqm-intervals-sine-on-completeness, lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-nrqm-oscillator-diagonal-spectrum, thm-trigonometric-system-is-complete-in-l-two-of-the-torus, def-the-one-dimensional-torus-and-normalized-haar-integral, cor-one-dimensional-change-of-variables-with-absolute-derivative, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-self-adjointness-range-criterion, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-densely-defined-closed-and-closable-operator, def-complex-exponential, lem-classical-derivatives-are-weak-derivatives, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  thm-nrqm-intervals-sine-on-completeness: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-nrqm-oscillator-diagonal-spectrum: mathematical-premise
  thm-trigonometric-system-is-complete-in-l-two-of-the-torus: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  cor-one-dimensional-change-of-variables-with-absolute-derivative: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-self-adjointness-range-criterion: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-complex-exponential: mathematical-premise
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

[F1] $H^1(0,L)$ consists of the classes with an $L^2$ weak derivative, the trace $u^*$ is the continuous absolutely continuous representative, and for $u,v\in H^1(0,L)$, $\int_0^Lu\overline{v'}=u^*(L)\overline{v^*(L)}-u^*(0)\overline{v^*(0)}-\int_0^Lu'\overline v$ ([[def-nrqm-intervals-hilbert-sobolev-spaces]], [[lem-nrqm-intervals-integration-by-parts]]); $C_c^\infty(0,L)\subseteq D_\theta$ since its representatives vanish near the endpoints, so $D_\theta$ contains a dense subspace.

[F2] The characters $e_k(t)=e^{2\pi ikt}$ form an orthonormal basis of $L^2(\mathbb T;\mathbb C)$ ([[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]), and for an orthonormal family completeness is equivalent to having no nonzero orthogonal vector, equivalently to the Parseval identity holding for every vector ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F3] Change of variables: for the increasing absolutely continuous map $\varphi:t\mapsto Lt$ and integrable $H$, $\int_0^LH(Lt)\,dt=L^{-1}\int_0^LH(x)\,dx$ ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]).

[F4] Range criterion: a densely defined symmetric operator $T$ is self-adjoint if and only if $\operatorname{ran}(T-z)=H$ for every $z\in\mathbb C\setminus\mathbb R$ ([[thm-self-adjointness-range-criterion]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-densely-defined-closed-and-closable-operator]]).

[F5] The diagonal operator lemma [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]: for a complete orthonormal family $(w_n)$ and real numbers $(\nu_n)$, the finite-support diagonal operator is essentially self-adjoint with unique self-adjoint extension $T$, $Tw_n=\nu_nw_n$, and $D(T)=\{x:\sum_n\nu_n^2|\langle x,w_n\rangle|^2<\infty\}$; the spectrum is the closure of $\{\nu_n\}$ ([[thm-nrqm-oscillator-diagonal-spectrum]]). Classical derivatives of $C^1$ functions are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]), and the complex exponential is differentiable with derivative $i\alpha e^{i\alpha x}$ ([[def-complex-exponential]]).

## Proof

1.1 [Density and symmetry] By [F1], $C_c^\infty(0,L)\subseteq D_\theta$ and $C_c^\infty(0,L)$ is dense in $L^2$, so $D_\theta$ is dense. For $u,v\in D_\theta$, [F1] gives $\langle P_\theta u,v\rangle-\langle u,P_\theta v\rangle =-i\bigl(u^*(L)\overline{v^*(L)}-u^*(0)\overline{v^*(0)}\bigr)=0,$ because $u^*(L)\overline{v^*(L)}=e^{i\theta}u^*(0) \overline{e^{i\theta}v^*(0)}=u^*(0)\overline{v^*(0)}$. Hence $P_\theta$ is symmetric. [F1, given, algebra]

1.2 [The twisted characters and their completeness] For $n,m\in\mathbb Z$, $\langle\varphi_n,\varphi_m\rangle =\frac1L\int_0^Le^{i(2\pi(n-m))x/L}dx=\delta_{nm},$ since for $n=m$ the integrand is $1$, and for $n\ne m$ the function $L^{-1}e^{2\pi i(n-m)x/L}$ is the transport under $x=Lt$ of the torus character $e_{n-m}$, whose integral over $\mathbb T$ vanishes by [F2]; the transport of the integral is [F3]. To see completeness, let $g\in L^2(0,L)$ satisfy $\langle g,\varphi_n\rangle=0$ for every $n$, and put $h(x):=e^{-i\theta x/L}g(x)$. Since $e^{i\theta x/L}\varphi_n$ is the standard character $\chi_n(x)=L^{-1/2}e^{2\pi inx/L}$, $\langle h,\chi_n\rangle=\int_0^Lg(x)\overline{\varphi_n(x)}dx=0$ for every $n$. Transporting to the torus by the same change-of-variables argument as in [[thm-nrqm-intervals-sine-on-completeness]] — define $H(t):=h(Lt)$ on $[0,1)$; then $\widehat H(k) =\int_0^1h(Lt)e^{-2\pi ikt}dt=L^{-1}\int_0^Lh(x)e^{-2\pi ikx/L}dx =L^{-1/2}\langle h,\chi_k\rangle=0$ by [F3] — completeness of the torus characters [F2] gives $H=0$, hence $h=0$ and $g=0$ almost everywhere. By [F2] the family $(\varphi_n)$ is complete. [F2, F3, algebra]

1.3 [Range of $P_\theta-z$] Let $z\in\mathbb C\setminus\mathbb R$ and $f\in L^2(0,L)$. Define $A(x):=u_0+i\int_0^xe^{-izt}f(t)\,dt,\qquad u(x):=e^{izx}A(x),$ where $u_0\in\mathbb C$ is chosen below. Then $A$ is absolutely continuous with $A'=ie^{-izx}f\in L^2$ and $A(0)=u_0$, so $u\in H^1(0,L)$ with $Du=izu+if$; hence $(P_\theta-z)u=-i(izu+if)-zu=f$. The boundary condition $u^*(L)=e^{i\theta}u^*(0)$ reads $e^{izL}\bigl(u_0+i\int_0^Le^{-izt}f(t)dt\bigr)=e^{i\theta}u_0$, i.e. $u_0\bigl(e^{izL}-e^{i\theta}\bigr)=-ie^{izL}\int_0^Le^{-izt}f(t)\,dt .$ Since $z\notin\mathbb R$, $|e^{izL}|=e^{-L\operatorname{Im}z}\ne1=|e^{i\theta}|$, so $e^{izL}-e^{i\theta}\ne0$ and the displayed equation has exactly one solution $u_0\in\mathbb C$; the resulting $u\in D_\theta$ satisfies $(P_\theta-z)u=f$. Hence $\operatorname{ran}(P_\theta-z)=L^2(0,L)$ for every nonreal $z$. [F1, F4, algebra]

2.1 [Eigenvalues] Each $\varphi_n$ is $C^1$ with $D\varphi_n=i\kappa_n\varphi_n$ by [F5], and $\varphi_n^*(L)=L^{-1/2}e^{i(2\pi n+\theta)} =e^{i\theta}L^{-1/2}e^{i\theta\cdot0}\cdot e^{2\pi in} =e^{i\theta}\varphi_n^*(0)$, so $\varphi_n\in D_\theta$ and $P_\theta\varphi_n=\kappa_n\varphi_n$. The numbers $\kappa_n=(2\pi n+\theta)/L$ are pairwise distinct, so the eigenvalues listed are simple provided the eigenvalue set is exactly $\{\kappa_n\}$ (proved in the final phase). [step 1.2, F5, algebra]

2.2 [Self-adjointness] Steps 1.1 and 1.3 give a densely defined symmetric operator with $\operatorname{ran}(P_\theta-z)=L^2$ for every nonreal $z$; by the range criterion [F4], $P_\theta$ is self-adjoint. [step 1.1, step 1.3, F4]

3.1 [Diagonal form] Let $S$ be the restriction of $P_\theta$ to the linear span $D_0$ of the $\varphi_n$. By step 2.1, $S$ is the finite-support diagonal operator with respect to the complete orthonormal family $(\varphi_n)$ and the real numbers $\kappa_n$; by [F5] $S$ has a unique self-adjoint extension $T$ with $D(T)=\{\sum_nc_n\varphi_n:\sum_n\kappa_n^2|c_n|^2<\infty\}$ and $T\varphi_n=\kappa_n\varphi_n$, and $\sigma(T)$ is the closure of $\{\kappa_n\}$. Since $P_\theta$ is self-adjoint and extends $S$, uniqueness in [F5] gives $P_\theta=T$. Because $\kappa_n\to\pm\infty$ as $n\to\pm\infty$, the set $\{\kappa_n\}$ has no finite accumulation point, so $\sigma(P_\theta)=\{\kappa_n:n\in\mathbb Z\}$, and the domain is the displayed coefficient domain; the diagonal representation also gives $\ker(P_\theta-\kappa_n)=\mathbb C\varphi_n$ by uniqueness of coefficients. This proves (b) and (c). [step 1.2, step 2.1, step 2.2, F2, F5] ∎
