---
id: lem-em-separated-phasor-calculus
kind: lemma
domain: mathematics
title: "Calculus of separated phasor fields: real-part derivative identities and amplitude injectivity"
status: published
origin: pipeline
dependency_level: 0
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-numbers-and-arithmetic, def-directional-and-partial-derivatives, def-divergence-and-curl-of-a-c1-vector-field, def-complex-exponential, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-numbers-form-a-field, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sine-and-cosine-addition-formulas, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-derivative-of-exponential, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, cor-exponential-reciprocal-and-positivity]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Beisert, Elektrodynamik, Vorlesungsskript, ETH Zurich, 2024 FS (German), Chapter 13 'Wellenleiter' and 'Kavitaeten', PDF pp. 153-162 (printed pp. 13.1-13.10); complete 176-page author-hosted PDF and official TeX read, with the conjugate-error in (13.26), the 'Wendepunkt' mislabel and the general group-velocity restriction recorded as source defects not copied"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin, 2006-02-02), node 105 'Wave-guides', complete author-hosted HTML node read in the run's pinned full-notes snapshot"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node105.html"
    - title: "D. J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596-page full scan), sections 9.5.1-9.5.3 printed pp. 405-412 (wave guides, TE waves in a rectangular wave guide, coaxial transmission line), read in the stamped full text; OCR noise cross-checked against the other treatments"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $\Omega_t\subseteq\mathbb R^2$ be open, let $\beta\in\mathbb C$, $\omega>0$, and let $\tilde F,\tilde G:\Omega_t\to\mathbb C^3$ be $C^1$ maps (componentwise, in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]]). Write $\theta(x_3,t):=\beta x_3-\omega t$ and define $F:\Omega_t\times\mathbb R\times\mathbb R\to\mathbb R^3$ by $F(x_1,x_2,x_3,t):=\operatorname{Re}\bigl(\tilde F(x_1,x_2)e^{i\theta(x_3,t)}\bigr)$ componentwise, and $G$ likewise from $\tilde G$; here $e^{i\theta}$ is the complex exponential of [[def-complex-exponential]] and $\operatorname{Re}$ the real part of [[def-complex-conjugate-real-imaginary-part-and-modulus]]. Then $F$ is $C^1$ and, for every point of the domain:
(a) $\partial_{x_j}F=\operatorname{Re}\bigl(\partial_{x_j}\tilde F\,e^{i\theta}\bigr)$ for $j=1,2$, $\partial_{x_3}F=\operatorname{Re}\bigl(i\beta\tilde F e^{i\theta}\bigr)$, $\partial_tF=\operatorname{Re}\bigl(-i\omega\tilde F e^{i\theta}\bigr)$, where the divergence and curl are those of [[def-divergence-and-curl-of-a-c1-vector-field]] and the partial derivatives are those of [[def-directional-and-partial-derivatives]];
(b) $\operatorname{div}F=\operatorname{Re}\bigl((\partial_1\tilde F_1+\partial_2\tilde F_2+i\beta\tilde F_3)e^{i\theta}\bigr)$;
(c) $\operatorname{curl}F=\operatorname{Re}\bigl((\partial_2\tilde F_3-i\beta\tilde F_2,\; i\beta\tilde F_1-\partial_1\tilde F_3,\; \partial_1\tilde F_2-\partial_2\tilde F_1)e^{i\theta}\bigr)$;
(d) [amplitude injectivity] if $C\in\mathbb C^3$ and $\operatorname{Re}\bigl(Ce^{i\varphi_1}\bigr)=\operatorname{Re}\bigl(Ce^{i\varphi_2}\bigr)=0$ for two real phases with $\varphi_1-\varphi_2\notin\pi\mathbb Z$, then $C=0$; consequently, if $F=G$ on a nonempty open subset $U$ of $\Omega_t\times\mathbb R\times\mathbb R$, then $\tilde F=\tilde G$ on the projection of $U$ to $\Omega_t$ (a nonempty open subset of $\Omega_t$).

## Facts & Assumptions

**Given:** An open set $\Omega_t\subseteq\mathbb R^2$; complex numbers $\beta=p+iq$ ($p,q\in\mathbb R$) and $\omega>0$; $C^1$ maps $\tilde F,\tilde G:\Omega_t\to\mathbb C^3$, with real functions $a_l:=\operatorname{Re}\tilde F_l$ and $b_l:=\operatorname{Im}\tilde F_l$ for $l=1,2,3$; the phase $\theta(x_3,t)=\beta x_3-\omega t$; and the fields $F,G$ of the Statement.

[F1] A map into $\mathbb R^n$ is $C^k$ when each component is, and a $C^1$ component has continuous first partial derivatives; the $j$th partial derivative $\partial_jf(a)=D_{e_j}f(a)$ is the derivative along the coordinate line $t\mapsto f(a+te_j)$ ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-directional-and-partial-derivatives]]).

[F2] $\mathbb C$ is a field with $i^2=-1$, every $z$ has the unique form $z=\operatorname{Re}z+i\operatorname{Im}z$ with real parts, and $\operatorname{Re}$ is $\mathbb R$-linear; in particular $\operatorname{Re}(i\zeta)=-\operatorname{Im}\zeta$, $\operatorname{Re}(-i\zeta)=\operatorname{Im}\zeta$, and for real $a,b,\varphi$ the cartesian multiplication gives $(a+ib)(\cos\varphi+i\sin\varphi)=(a\cos\varphi-b\sin\varphi)+i(a\sin\varphi+b\cos\varphi)$, so $\operatorname{Re}\bigl((a+ib)(\cos\varphi+i\sin\varphi)\bigr)=a\cos\varphi-b\sin\varphi$ ([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]); the complex exponential of [[def-complex-exponential]] is entire with $\exp'=\exp$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F4] The real exponential is $C^\infty$ with $(\exp)'=\exp$ ([[thm-derivative-of-exponential]]) and $\exp x>0$ for real $x$ ([[cor-exponential-reciprocal-and-positivity]]); $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$ ([[thm-sine-and-cosine-derivatives]]); sums, scalar multiples and products of differentiable real functions satisfy the sum, scalar and product rules and composites satisfy the chain rule for total derivatives, which applies to the affine substitutions $x_3\mapsto\pm qx_3$ and $x_3,t\mapsto px_3-\omega t$ composed with the outer exponential, sine and cosine ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]).

[F5] For all real $A,B$, $\sin(A+B)=\sin A\cos B+\cos A\sin B$ and $\cos(A+B)=\cos A\cos B-\sin A\sin B$ ([[thm-sine-and-cosine-addition-formulas]]); $\sin(-A)=-\sin A$, $\cos(-A)=\cos A$ and $\sin^2A+\cos^2A=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]); finally $\sin x=0$ if and only if $x\in\pi\mathbb Z$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F6] For a $C^1$ field $F=(F_1,F_2,F_3)$ on an open subset of $\mathbb R^3$, $\operatorname{div}F=\partial_1F_1+\partial_2F_2+\partial_3F_3$ and $\operatorname{curl}F=(\partial_2F_3-\partial_3F_2,\ \partial_3F_1-\partial_1F_3,\ \partial_1F_2-\partial_2F_1)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).



## Proof

**Proof technique:** direct: reduce the complex phase to real cartesian factors, differentiate the explicit components along coordinate lines with the real one-variable rules, assemble the divergence and curl, and settle the injectivity clause by a two-phase linear system.

1.1 [Reduction of the phase and of the components] Since $\beta=p+iq$ and $i^2=-1$, $i\theta=i(\beta x_3-\omega t)=i(px_3-\omega t)+i(iqx_3)=-qx_3+i(px_3-\omega t)$; with $\varphi:=px_3-\omega t$ the cartesian form [F3] gives $e^{i\theta}=e^{-qx_3}(\cos\varphi+i\sin\varphi)$. By [F2] the component of $\tilde Fe^{i\theta}$ with index $l$ is $e^{-qx_3}\bigl[(a_l\cos\varphi-b_l\sin\varphi)+i(a_l\sin\varphi+b_l\cos\varphi)\bigr]$; taking real parts, $F_l=e^{-qx_3}(a_l\cos\varphi-b_l\sin\varphi)$. [given, F2, F3, algebra]

1.2 [The two-phase system] For clause (d), write $C=a+ib$ with $a,b\in\mathbb R^3$. By [F2], $\operatorname{Re}(Ce^{i\varphi_j})=a\cos\varphi_j-b\sin\varphi_j$ componentwise, so $\operatorname{Re}(Ce^{i\varphi_1})=\operatorname{Re}(Ce^{i\varphi_2})=0$ is the system $a_l\cos\varphi_1=b_l\sin\varphi_1$ and $a_l\cos\varphi_2=b_l\sin\varphi_2$ for every $l$. Multiplying the two equations of index $l$ by $\cos\varphi_2$ and $\cos\varphi_1$ and subtracting gives $b_l(\sin\varphi_1\cos\varphi_2-\cos\varphi_1\sin\varphi_2)=0$, and multiplying them by $\sin\varphi_2$ and $\sin\varphi_1$ and subtracting gives $a_l(\cos\varphi_1\sin\varphi_2-\cos\varphi_2\sin\varphi_1)=0$. [given, F2, algebra]

2.1 [The phase factor and its derivatives] By step 1.1 the real and imaginary parts of $(x_3,t)\mapsto e^{i\theta}$ are $e^{-qx_3}\cos\varphi$ and $e^{-qx_3}\sin\varphi$, which are $C^\infty$ on $\mathbb R^2$ by [F4] (the chain rule applied to the affine substitutions $x_3\mapsto-qx_3$ and $x_3,t\mapsto px_3-\omega t$ composed with the outer exponential, sine and cosine, together with the sum, scalar and product rules), with $\partial_{x_3}e^{-qx_3}=-qe^{-qx_3}$, $\partial_te^{-qx_3}=0$, $\partial_{x_3}\cos\varphi=-p\sin\varphi$, $\partial_{x_3}\sin\varphi=p\cos\varphi$, $\partial_t\cos\varphi=\omega\sin\varphi$ and $\partial_t\sin\varphi=-\omega\cos\varphi$. Pairing these, $\partial_{x_3}e^{i\theta}=(-q+ip)e^{i\theta}=i\beta e^{i\theta}$ and $\partial_te^{i\theta}=-i\omega e^{i\theta}$ by [F2], while $e^{i\theta}$ does not depend on $x_1,x_2$, so $\partial_{x_j}e^{i\theta}=0$ for $j=1,2$. [step 1.1, F2, F4]

2.2 [Transverse derivatives] Fix $j\in\{1,2\}$ and $l\in\{1,2,3\}$. Along the $x_j$-coordinate line the factors $e^{-qx_3}$, $\cos\varphi$ and $\sin\varphi$ of step 1.1 are constant, so the derivative of the partial application is $e^{-qx_3}\bigl[(\partial_ja_l)\cos\varphi-(\partial_jb_l)\sin\varphi\bigr]$ by the sum and scalar rules [F4], the derivatives $\partial_ja_l,\partial_jb_l$ existing by [F1]; by the expansion of step 1.1 applied to $\partial_j\tilde F_l$ in place of $\tilde F_l$, this number is $\operatorname{Re}\bigl((\partial_j\tilde F_l)e^{i\theta}\bigr)$. Hence $\partial_{x_j}F=\operatorname{Re}\bigl(\partial_{x_j}\tilde F\,e^{i\theta}\bigr)$ componentwise for $j=1,2$. [step 1.1, F1, F2, F4]

2.3 [Injectivity] By the addition and parity formulas [F5], $\sin(\varphi_1-\varphi_2)=\sin\varphi_1\cos\varphi_2-\cos\varphi_1\sin\varphi_2$ and $-\sin(\varphi_1-\varphi_2)=\cos\varphi_1\sin\varphi_2-\cos\varphi_2\sin\varphi_1$. Since $\varphi_1-\varphi_2\notin\pi\mathbb Z$, [F5] gives $\sin(\varphi_1-\varphi_2)\ne0$, so the two equations of step 1.2 force $b_l=0$ and $a_l=0$ for every $l$, that is, $C=0$. [step 1.2, F5]

3.1 [Longitudinal and time derivatives] Fix $l$. Along the $x_3$-line the amplitudes $a_l,b_l$ are constant, so the product and scalar rules [F4] and the derivatives of step 2.1 give $\partial_{x_3}F_l=-qe^{-qx_3}(a_l\cos\varphi-b_l\sin\varphi)+e^{-qx_3}(-pa_l\sin\varphi-pb_l\cos\varphi)$; by [F2], $i\beta(a_l+ib_l)=(-qa_l-pb_l)+i(pa_l-qb_l)$, so $\operatorname{Re}\bigl(i\beta\tilde F_l e^{i\theta}\bigr)=e^{-qx_3}\bigl[(-qa_l-pb_l)\cos\varphi-(pa_l-qb_l)\sin\varphi\bigr]$, which is the displayed expression. Along the $t$-line the amplitudes and $e^{-qx_3}$ are constant, so $\partial_tF_l=e^{-qx_3}(a_l\omega\sin\varphi+b_l\omega\cos\varphi)$; by [F2], $-i\omega(a_l+ib_l)=\omega b_l-i\omega a_l$, so $\operatorname{Re}\bigl(-i\omega\tilde F_l e^{i\theta}\bigr)=e^{-qx_3}(\omega b_l\cos\varphi+\omega a_l\sin\varphi)$, the displayed expression. Assembling the components gives $\partial_{x_3}F=\operatorname{Re}(i\beta\tilde Fe^{i\theta})$ and $\partial_tF=\operatorname{Re}(-i\omega\tilde Fe^{i\theta})$. [step 1.1, step 2.1, F2, F4, algebra]

4.1 [Regularity] Every partial derivative displayed in steps 2.2 and 3.1 is continuous on $\Omega_t\times\mathbb R\times\mathbb R$: the partial derivatives $\partial_ja_l,\partial_jb_l$ ($j=1,2$) are continuous by [F1], the factors $e^{-qx_3}$, $\cos\varphi$, $\sin\varphi$ and their displayed partial derivatives are smooth by step 2.1, and each displayed formula is a finite sum of products of such continuous functions. Thus all first partial derivatives of $F$ exist and are continuous, so $F$ is $C^1$. [step 2.2, step 3.1, F1, F4]

4.2 [Divergence] By [F6] and steps 2.2 and 3.1, $\operatorname{div}F=\partial_1F_1+\partial_2F_2+\partial_3F_3=\operatorname{Re}\bigl((\partial_1\tilde F_1+\partial_2\tilde F_2+i\beta\tilde F_3)e^{i\theta}\bigr)$: indeed, for complex $\zeta_l$ the $\mathbb R$-linearity of $\operatorname{Re}$ and distributivity in $\mathbb C$ [F2] give $\operatorname{Re}(\zeta_1e^{i\theta})+\operatorname{Re}(\zeta_2e^{i\theta})+\operatorname{Re}(\zeta_3e^{i\theta})=\operatorname{Re}\bigl((\zeta_1+\zeta_2+\zeta_3)e^{i\theta}\bigr)$. [step 2.2, step 3.1, F2, F6, algebra]

4.3 [Curl] Similarly, [F6] together with steps 2.2 and 3.1 gives the three components of $\operatorname{curl}F$ as $\partial_2F_3-\partial_3F_2=\operatorname{Re}\bigl((\partial_2\tilde F_3-i\beta\tilde F_2)e^{i\theta}\bigr)$, $\partial_3F_1-\partial_1F_3=\operatorname{Re}\bigl((i\beta\tilde F_1-\partial_1\tilde F_3)e^{i\theta}\bigr)$ and $\partial_1F_2-\partial_2F_1=\operatorname{Re}\bigl((\partial_1\tilde F_2-\partial_2\tilde F_1)e^{i\theta}\bigr)$, since [F2] gives $\operatorname{Re}(\zeta e^{i\theta})-\operatorname{Re}(\eta e^{i\theta})=\operatorname{Re}((\zeta-\eta)e^{i\theta})$ for complex $\zeta,\eta$. This is clause (c). [step 2.2, step 3.1, F2, F6, algebra]

5.1 [Open-set consequence] Let $U\subseteq\Omega_t\times\mathbb R\times\mathbb R$ be nonempty open with $F=G$ on $U$. Its projection $\pi(U)$ to $\Omega_t$ is nonempty and open. Fix $x_t\in\pi(U)$; the fibre $\{(x_3,t):(x_t,x_3,t)\in U\}$ is a nonempty open subset of $\mathbb R^2$, so there are $x_3\in\mathbb R$ and an open interval $J$ of $t$-values on which $(x_t,x_3,t)\in U$; choose $t_1,t_2\in J$ with $0<\omega|t_1-t_2|<\pi$. Put $C:=(\tilde F(x_t)-\tilde G(x_t))e^{i\beta x_3}$. For $j=1,2$, the $\mathbb R$-linearity of $\operatorname{Re}$ [F2] and $F=G$ on $U$ give $\operatorname{Re}(Ce^{-i\omega t_j})=\operatorname{Re}\bigl((\tilde F-\tilde G)(x_t)e^{i\theta(x_3,t_j)}\bigr)=F(x_t,x_3,t_j)-G(x_t,x_3,t_j)=0$. The phases $\varphi_j:=-\omega t_j$ are real and $\varphi_1-\varphi_2=-\omega(t_1-t_2)\notin\pi\mathbb Z$, so step 2.3 gives $C=0$. Finally $e^{i\beta x_3}=e^{-qx_3}\bigl(\cos(px_3)+i\sin(px_3)\bigr)$ by step 1.1, where $e^{-qx_3}>0$ by [F4] and $\cos(px_3)+i\sin(px_3)\ne0$ because its real and imaginary parts have $\cos^2(px_3)+\sin^2(px_3)=1\ne0$ [F5]; since a product of nonzero elements of the field $\mathbb C$ is nonzero [F2], $\tilde F(x_t)=\tilde G(x_t)$. As $x_t\in\pi(U)$ was arbitrary and $\pi(U)$ is nonempty open, this is the stated consequence. [step 2.3, F2, F4, F5, algebra] ∎
