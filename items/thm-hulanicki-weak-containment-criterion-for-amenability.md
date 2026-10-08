---
id: thm-hulanicki-weak-containment-criterion-for-amenability
kind: theorem
title: The Hulanicki–Reiter weak containment criterion for amenability
status: draft
origin: pipeline
dependency_level: 7
proof_strategy: direct
deps:
  - thm-amenability-is-equivalent-to-reiter-p1
  - def-amenable-locally-compact-group
  - def-reiter-condition-p1
  - def-weak-containment-of-unitary-representations
  - lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors
  - def-left-and-right-regular-unitary-representations
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - def-matrix-coefficient-of-a-unitary-representation
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-complex-l-two-inner-product
  - def-real-and-complex-inner-product-space
  - lem-complex-conjugation-and-modulus-laws
  - def-left-haar-integral-and-left-haar-measure
  - def-strongly-continuous-unitary-representation
  - def-axiom-of-choice
axiom_use: >-
  Assume AC. It is used through the amenability/Reiter equivalence, the
  strongly-continuous regular-representation supplier, and the weak-containment
  to almost-invariant-vector lemma. The square-root, coefficient, and
  Cauchy–Schwarz estimates add no choice use.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.3, Theorem G.3.2 (Hulanicki-Reiter) and its complete proof (printed pp. 456–457)"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F.1, Corollary F.1.5 and proof (printed pp. 423–424)"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 20: Invariant Mean implies Reiter's Property"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture20_2012_InvMeanImpliesReiter.pdf"
      locator: "Slides 17–18 (PDF pp. 17–18), translating Reiter's property into almost-invariant $L^2$ vectors"
---

## Statement

Assume AC. Let $G$ be a locally compact Hausdorff group with fixed left Haar measure $\mu$. Let $1_G$ be the trivial unitary representation on $\mathbb C$ with its standard inner product, given by $1_G(g)z=z$, and let $\lambda_G$ be the left regular representation on $L^2(G)$ ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]]). Then $G$ is amenable ([[def-amenable-locally-compact-group]]) if and only if $1_G\prec\lambda_G$ ([[def-weak-containment-of-unitary-representations]]). Equivalently, $G$ is amenable if and only if $\lambda_G$ almost has invariant unit vectors: for every compact $Q\subseteq G$ and every $\varepsilon>0$ there is a unit vector $\xi\in L^2(G)$ with $\sup_{x\in Q}\lVert\lambda_G(x)\xi-\xi\rVert_2<\varepsilon$.

## Facts & Assumptions

**Given:** AC, a locally compact Hausdorff group $G$, a fixed left Haar measure $\mu$, and the representations $1_G$ on $\mathbb C$ and $\lambda_G$ on $L^2(G)$.

[A1] AC is assumed in the choice-function form ([[def-axiom-of-choice]]).

[F1] Under AC, amenability of a locally compact Hausdorff group is equivalent to Reiter's condition (P1) ([[thm-amenability-is-equivalent-to-reiter-p1]]).

[F2] Reiter (P1) means that for every compact $Q$ and every $\delta>0$ there is $f\in L^1(G)$ with $f\ge0$, $\lVert f\rVert_1=1$, and $\sup_{x\in Q}\lVert L_xf-f\rVert_1\le\delta$ ([[def-reiter-condition-p1]]).

[F3] The left regular action is $\lambda_G(x)\xi(y)=\xi(x^{-1}y)$; it is a unitary representation, and under AC it is strongly continuous ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]]).

[F4] $L^1(G)$ and $L^2(G)$ are complex almost-everywhere classes with $\lVert f\rVert_1=\int_G|f|\,d\mu$ and $\lVert\xi\rVert_2^2=\int_G|\xi|^2\,d\mu$; the $L^2$ pairing is the integral pairing ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[def-complex-l-two-inner-product]]).

[F5] For vectors $u,v$ in a complex inner-product space, $|\langle u,v\rangle|\le\lVert u\rVert\lVert v\rVert$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F6] Complex modulus is subadditive and satisfies $\bigl||a|-|b|\bigr|\le|a-b|$ for $a,b\in\mathbb C$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F7] Weak containment $\pi\prec\rho$ means that every diagonal coefficient of $\pi$ is uniformly approximable on compact subsets by finite sums of diagonal coefficients of $\rho$ ([[def-weak-containment-of-unitary-representations]]).

[F8] Under AC, $1_G\prec\pi$ is equivalent to existence of unit vectors in $\pi$ that are arbitrarily invariant on each compact subset ([[lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors]]).

[F9] With the standard inner product on $\mathbb C$, the diagonal coefficient of $1_G$ at $z\in\mathbb C$ is the constant function $|z|^2$; this follows from $1_G(g)z=z$ and the matrix-coefficient definition ([[def-real-and-complex-inner-product-space]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F10] Amenability is existence of a left-invariant mean on $L^\infty(G)$ ([[def-amenable-locally-compact-group]]).

[F11] A strongly continuous unitary representation has continuous orbit maps; the trivial action on $\mathbb C$ is constant, hence strongly continuous ([[def-strongly-continuous-unitary-representation]]).

[F12] Left Haar measure is left invariant, and the left regular action uses $(L_xf)(y)=f(x^{-1}y)$ ([[def-left-haar-integral-and-left-haar-measure]], [[def-left-and-right-regular-unitary-representations]]).

## Proof

**Given:** AC, an LCH group $G$ with fixed left Haar measure $\mu$, and its left regular representation $\lambda_G$.

**Proof technique:** direct.

1.1 Suppose $G$ is amenable in the sense of [F10]. By [F1], $G$ satisfies Reiter (P1). [F1, F10, given]

1.2 Fix compact $Q\subseteq G$ and $\varepsilon>0$. By [F2] choose $f\in L^1(G)$ with $f\ge0$, $\lVert f\rVert_1=1$, and $\sup_{x\in Q}\lVert L_xf-f\rVert_1\le\varepsilon^2/2$. Set $g:=\sqrt f\in L^2(G)$; then $\lVert g\rVert_2=1$. For $a,b\ge0$ with $a\ne b$, $|\sqrt a-\sqrt b|^2=|a-b|\,|\sqrt a-\sqrt b|/(\sqrt a+\sqrt b)\le|a-b|$, and for $a=b$ both sides are zero. Thus for every $x\in Q$, $\lVert\lambda_G(x)g-g\rVert_2^2=\int_G|\sqrt{f(x^{-1}y)}-\sqrt{f(y)}|^2\,d\mu(y)\le\lVert L_xf-f\rVert_1\le\varepsilon^2/2$, so $\sup_{x\in Q}\lVert\lambda_G(x)g-g\rVert_2<\varepsilon$. [F2, F3, F4, F12, algebra]

1.3 Assume that $\lambda_G$ almost has invariant unit vectors. Let $Q$ be compact, $\tau>0$, and let $z\in\mathbb C$ with $c:=|z|^2$. If $c=0$, the coefficient of the zero vector is exactly $0$. If $c>0$, choose a unit vector $\xi\in L^2(G)$ with $\sup_{x\in Q}\lVert\lambda_G(x)\xi-\xi\rVert_2<\tau/c$ and put $\eta:=\sqrt c\,\xi$. By [F5], $|1-\langle\lambda_G(x)\xi,\xi\rangle|=|\langle\xi-\lambda_G(x)\xi,\xi\rangle|\le\lVert\lambda_G(x)\xi-\xi\rVert_2$, so $\sup_{x\in Q}|c-\langle\lambda_G(x)\eta,\eta\rangle|<\tau$. By [F9] every diagonal coefficient of $1_G$ is such a constant $c\ge0$, and each approximant used here is one coefficient of $\lambda_G$; thus [F7] gives $1_G\prec\lambda_G$. [F3, F5, F7, F9, F11, given]

1.4 If $1_G\prec\lambda_G$, [F8] gives almost invariant unit vectors for $\lambda_G$ on every compact subset. [A1, F3, F8, given]

2.1 Fix compact $Q\subseteq G$ and $\varepsilon>0$. By step 1.4 choose a unit vector $\xi\in L^2(G)$ with $\sup_{x\in Q}\lVert\lambda_G(x)\xi-\xi\rVert_2<\varepsilon/2$. Set $f:=|\xi|^2\in L^1(G)$, so $f\ge0$ and $\lVert f\rVert_1=\lVert\xi\rVert_2^2=1$. Since $L_xf=|\lambda_G(x)\xi|^2$, [F6] gives $\bigl||\lambda_G(x)\xi|^2-|\xi|^2\bigr|\le|\lambda_G(x)\xi-\xi|(|\lambda_G(x)\xi|+|\xi|)$ pointwise. By [F5], $\lVert L_xf-f\rVert_1\le\lVert\lambda_G(x)\xi-\xi\rVert_2\,\bigl\lVert|\lambda_G(x)\xi|+|\xi|\bigr\rVert_2$; the pointwise estimate $(|a|+|b|)^2\le2(|a|^2+|b|^2)$ and unitarity [F3] give $\bigl\lVert|\lambda_G(x)\xi|+|\xi|\bigr\rVert_2\le2$. Therefore $\lVert L_xf-f\rVert_1\le2\lVert\lambda_G(x)\xi-\xi\rVert_2<\varepsilon$ for all $x\in Q$, so Reiter (P1) holds. [F2, F3, F4, F5, F6, F12, step 1.4, algebra]

3.1 Reiter (P1) implies amenability in the sense of [F10] by [F1], while steps 1.1–2.1 give amenability implies $1_G\prec\lambda_G$ and $1_G\prec\lambda_G$ implies Reiter (P1). By [F8], weak containment is equivalent to almost invariant unit vectors, proving both formulations in the Statement. AC is used only through the cited suppliers [F1], [F3], and [F8]. [A1, F1, F3, F8, F10, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎

## Sources

BHV, *Kazhdan's Property (T)*, Appendix G.3, Theorem G.3.2 (Hulanicki–Reiter), printed pp. 456–457, proves amenability iff $1_G\prec\lambda_G$ by converting between Reiter densities and almost-invariant $L^2$ vectors. Appendix F.1, Corollary F.1.5 and its proof, printed pp. 423–424, gives the weak-containment/almost-invariant-vector equivalence. Thomas, Lecture 20, slides 17–18 (PDF pp. 17–18), gives the same Reiter-to-$L^2$ conversion.
