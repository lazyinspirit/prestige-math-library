---
id: lem-even-unimodular-rank16-has-480-roots
kind: lemma
title: A positive even unimodular rank-16 lattice has 480 norm-2 vectors
domain: mathematics
library: physics
category: string-theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - def-positive-even-unimodular-lattice
  - def-inner-product-space
  - def-orthogonal-vectors-sets-and-orthonormal-bases
  - thm-gram-schmidt-orthonormalisation
  - def-full-rank-lattice-covolume-and-dual-lattice
  - lem-gaussian-poisson-summation-for-a-lattice
  - thm-ring-of-level-one-modular-forms
  - thm-eisenstein-series-are-modular-forms
  - def-level-one-modular-form-and-cusp-form
  - cor-complex-power-series-sums-are-analytic
  - thm-holomorphic-if-and-only-if-analytic
  - thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-identity-theorem-holomorphic-functions
  - def-complex-domain
  - thm-path-connected-implies-connected
  - thm-ratio-test
dependency_roles:
  def-positive-even-unimodular-lattice: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  thm-gram-schmidt-orthonormalisation: mathematical-premise
  def-full-rank-lattice-covolume-and-dual-lattice: mathematical-premise
  lem-gaussian-poisson-summation-for-a-lattice: mathematical-premise
  thm-ring-of-level-one-modular-forms: mathematical-premise
  thm-eisenstein-series-are-modular-forms: mathematical-premise
  def-level-one-modular-form-and-cusp-form: mathematical-premise
  cor-complex-power-series-sums-are-analytic: mathematical-premise
  thm-holomorphic-if-and-only-if-analytic: mathematical-premise
  thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-identity-theorem-holomorphic-functions: mathematical-premise
  def-complex-domain: mathematical-premise
  thm-path-connected-implies-connected: mathematical-premise
  thm-ratio-test: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "Chapter 7, printed pp. 104-107, even self-dual lattice examples and heterotic context; the theta-series proof is supplied locally."
    - title: "Timo Weigand, Introduction to String Theory, Heidelberg lecture notes, winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.9, printed pp. 151-154, and §7.2, printed pp. 157-160, heterotic context; the theta-series proof is supplied locally."
    - title: "Gaëtan Chenevier and Jean Lannes, Formes automorphes et voisins de Kneser des réseaux de Niemeier, arXiv:1409.7616v2"
      url: "https://arxiv.org/pdf/1409.7616v2"
      locator: "§II.3, Corollaire 3.6, printed p. 41 (PDF p. 46), which derives 480 norm-2 vectors from the normalized weight-8 theta series."
    - title: "Noam Elkies, Math 272y: Rational Lattices and their Theta Functions, lecture notes for 23 and 25 September 2019"
      url: "https://people.math.harvard.edu/~elkies/M272.19/sep23.pdf"
      locator: "The modular-form ring theorem and theta-series corollary, PDF pp. 3-5; the normalization and weight-8 coefficient used by the local proof."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

If $\Lambda$ is a positive-definite, integral, even, unimodular full lattice of rank $16$, then exactly $480$ vectors $x\in\Lambda$ satisfy $\langle x,x\rangle=2$.

## Facts & Assumptions

**Given:** A $16$-dimensional positive-definite real inner-product space $V$ and a full lattice $\Lambda\subseteq V$ that is integral, even, and unimodular ([[def-positive-even-unimodular-lattice]]).

[F1] Gram-Schmidt gives orthonormal coordinates on $V$; in these coordinates $\Lambda=A\mathbb Z^{16}$ for an invertible matrix $A$, and its dual has reciprocal covolume ([[def-inner-product-space]], [[def-orthogonal-vectors-sets-and-orthonormal-bases]], [[thm-gram-schmidt-orthonormalisation]], [[def-full-rank-lattice-covolume-and-dual-lattice]]).

[F2] For $A\in GL_n(\mathbb R)$, $t>0$, and $x\in\mathbb R^n$, Gaussian Poisson summation gives $\sum_{\lambda\in A\mathbb Z^n}e^{-\pi t|x+\lambda|^2}=|\det A|^{-1}t^{-n/2}\sum_{\mu\in A^{-T}\mathbb Z^n}e^{-\pi|\mu|^2/t}e^{2\pi i\mu\cdot x}$ ([[lem-gaussian-poisson-summation-for-a-lattice]]).

[F3] The graded ring of level-one modular forms is freely generated by $E_4$ and $E_6$, so $M_8$ is one-dimensional and spanned by $E_4^2$ ([[thm-ring-of-level-one-modular-forms]]).

[F4] $E_4(\tau)=1+240q+O(q^2)$ for $q=e^{2\pi i\tau}$ ([[thm-eisenstein-series-are-modular-forms]]).

[F5] A level-one modular form is holomorphic on the upper half-plane, obeys the weight-$k$ $SL_2(\mathbb Z)$ transformation law, and is holomorphic in its $q$-expansion at $q=0$ ([[def-level-one-modular-form-and-cusp-form]]).

[F6] A power series is holomorphic inside its disc of convergence; holomorphic functions are closed under composition, and the complex exponential is entire ([[cor-complex-power-series-sums-are-analytic]], [[thm-holomorphic-if-and-only-if-analytic]], [[thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition]], [[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F7] Holomorphic functions on a domain that agree on a set with an interior accumulation point agree throughout that domain ([[thm-identity-theorem-holomorphic-functions]], [[def-complex-domain]]).

[F8] The upper half-plane is open, convex, and connected because it is path-connected ([[thm-path-connected-implies-connected]]).

[F9] For each $0\le\rho<1$, the polynomially weighted geometric series $\sum_{m\ge0}(1+m)^8\rho^m$ converges: at $\rho=0$ its first term is $1$ and all later terms are $0$; for $0<\rho<1$ its terms are positive and their successive ratio is $\rho((m+2)/(m+1))^8\to\rho<1$, so the ratio test applies ([[thm-ratio-test]]).

## Proof

**Proof technique:** direct.

1.1 Choose orthonormal coordinates and write $\Lambda=A\mathbb Z^{16}$ using [F1]. Write $B=A^{-1}=(b_{ij})$. For any $x$, $|(Bx)_i|\le(\sum_j|b_{ij}|)|x|$, so $|Bx|\le4\max_i\sum_j|b_{ij}|\,|x|$ by summing the sixteen squared component bounds. Put $C:=4\max_i\sum_j|b_{ij}|$. For $m\ge0$ let $r_m:=\#\{x\in\Lambda:\langle x,x\rangle=2m\}$. If $x=Ak$ is counted, $|k|=|A^{-1}x|\le C\sqrt{2m}$, hence $r_m\le(2C\sqrt{2m}+1)^{16}\le C'(1+m)^8$ for a constant $C'$. This proves every coefficient is finite and $\sum_{m\ge0}r_mq^m$ converges for $|q|<1$ by [F9]. Define $\Theta_\Lambda(\tau):=\sum_{m\ge0}r_m e^{2\pi i m\tau}$; by [F6] it is holomorphic on $\mathfrak H$ and holomorphic at the cusp. [F1, F6, F9, given, algebra]

1.2 Let $c=\operatorname{covol}(\Lambda)$. By [F1] and unimodularity, $c=c^{-1}$; since $c>0$, $c=1$. Apply [F2] with $n=16$ and $x=0$ to obtain, for every $y>0$,
$$\Theta_\Lambda(iy)=\sum_{\lambda\in\Lambda}e^{-\pi y|\lambda|^2}=y^{-8}\sum_{\mu\in\Lambda^*}e^{-\pi|\mu|^2/y}=y^{-8}\Theta_\Lambda(i/y),$$
where $\Lambda=\Lambda^*$. Thus $\Theta_\Lambda(-1/(iy))=(iy)^8\Theta_\Lambda(iy)$ because $i^8=1$. [F1, F2, given, algebra]

2.1 Each lattice vector has squared norm $2m$ for an integer $m\ge0$ because $\Lambda$ is even. Hence $e^{\pi i\langle x,x\rangle}=1$ and $\Theta_\Lambda(\tau+1)=\Theta_\Lambda(\tau)$. Positive definiteness makes $0$ the only vector with squared norm zero, so the constant coefficient is $r_0=1$. [given, step 1.1, algebra]

2.2 The functions $\tau\mapsto\Theta_\Lambda(-1/\tau)$ and $\tau\mapsto\tau^8\Theta_\Lambda(\tau)$ are holomorphic on $\mathfrak H$ by [F6], since $-1/\tau\in\mathfrak H$ there. Their difference vanishes at all $iy$ with $y>0$ by step 1.2, and these zeros accumulate at $i\in\mathfrak H$. By [F8], $\mathfrak H$ is a complex domain; [F7] gives $\Theta_\Lambda(-1/\tau)=\tau^8\Theta_\Lambda(\tau)$ on all of $\mathfrak H$. [F6, F7, F8, step 1.2]

3.1 The matrices $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ and $T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ generate $SL_2(\mathbb Z)$: left multiplication by powers of $T$ and by $S$ performs the Euclidean algorithm on the coprime first-column entries $(a,c)$ of a determinant-one integer matrix until they are $(\pm1,0)$; the remaining matrix is $\pm T^j$, and $-I=S^2$. The weight factors compose by $(c_1(\gamma_2\tau)+d_1)(c_2\tau+d_2)=c_{12}\tau+d_{12}$. Therefore steps 2.1 and 2.2 imply the weight-$8$ transformation law for every $SL_2(\mathbb Z)$ matrix. By [F5] and steps 1.1-2.1, $\Theta_\Lambda\in M_8$. [F5, step 1.1, step 2.1, step 2.2, algebra]

4.1 By [F3], $M_8$ is spanned by $E_4^2$. Its constant coefficient and that of $\Theta_\Lambda$ are both $1$ by step 2.1, so $\Theta_\Lambda=E_4^2$. By [F4], the coefficient of $q$ in $(1+240q+O(q^2))^2$ is $480$. The coefficient of $q$ in $\Theta_\Lambda$ is $r_1$, exactly the number of vectors of squared norm $2$, so $r_1=480$. [F3, F4, step 2.1, step 3.1, algebra] ∎
