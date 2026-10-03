---
id: lem-compact-convolution-operators-commute-with-right-translations
kind: lemma
title: Compact convolution operators commute with right translations and have conjugate-kernel adjoints
deps:
- lem-compact-convolution-operators-are-hilbert-schmidt
- def-left-and-right-regular-unitary-representations
- thm-regular-representations-are-unitary-and-strongly-continuous
- cor-normalized-haar-probability-on-a-compact-group
- prop-compact-discrete-and-abelian-groups-are-unimodular
- def-hilbert-space-adjoint
- thm-hilbert-adjoint-properties
- thm-integrals-are-invariant-under-measure-preserving-maps
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- def-complex-haar-lp-spaces-and-compactly-supported-functions
- lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
- def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Ch. 5 §5.4, printed p. 233 (self-adjoint convolution operator $T_\psi$)
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: §2.7, printed pp. 5–6 (left and right translation actions)
  - title: Terence Tao, 254A Notes 3 (author-hosted lecture notes, 2011)
    url: https://terrytao.wordpress.com/2011/09/27/254a-notes-3-haar-measure-and-the-peter-weyl-theorem/
    locator: Spectral-theorem paragraph preceding Theorem 7
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $K$ be a compact Hausdorff group with normalized Haar probability $\mu$, let $\varphi\in L^2(K,\mu;\mathbb C)$ and let $C_\varphi$ be left convolution by $\varphi$ on $L^2(K)$,
$$(C_\varphi h)(x)=\int_K\varphi(xy^{-1})h(y)\,d\mu(y)$$
([[lem-compact-convolution-operators-are-hilbert-schmidt]]).

1. For every $g\in K$, $C_\varphi\rho(g)=\rho(g)C_\varphi$, where $\rho(g)h(x)=h(xg)$ is the right regular unitary representation ([[def-left-and-right-regular-unitary-representations]]); here $\Delta_K\equiv1$ because compact groups are unimodular ([[prop-compact-discrete-and-abelian-groups-are-unimodular]]).
2. With $\varphi^*(k):=\overline{\varphi(k^{-1})}$ one has $C_\varphi^*=C_{\varphi^*}$; hence if $\varphi^*=\varphi$ almost everywhere then $C_\varphi$ is self-adjoint. Moreover, when $\varphi=\varphi^*$, every eigenspace $\ker(C_\varphi-\lambda I)$ for $\lambda\in\mathbb C$ (the case $\lambda=0$ being the kernel $\ker C_\varphi$) is $\rho(K)$-invariant.

## Facts & Assumptions

[F1] Under AC the compact group $K$ carries a normalized Haar probability $\mu$, and this measure is left invariant, right invariant and inversion invariant. ([[cor-normalized-haar-probability-on-a-compact-group]])

[F2] Integrals of integrable complex functions are invariant under measure-preserving maps. ([[thm-integrals-are-invariant-under-measure-preserving-maps]])

[F3] Compact groups are unimodular, so $\Delta_K\equiv1$, and the right regular representation is $\rho(g)h(x)=h(xg)$ on $L^2(K)$. ([[prop-compact-discrete-and-abelian-groups-are-unimodular]], [[def-left-and-right-regular-unitary-representations]])

[F4] Under AC the operator $C_\varphi$ is a well-defined bounded linear operator on $L^2(K)$, independent of the chosen representative of $\varphi$, and it is Hilbert–Schmidt with $\|C_\varphi\|_{HS}=\|\varphi\|_2$. ([[lem-compact-convolution-operators-are-hilbert-schmidt]])

[F5] The right regular representation $\rho$ is unitary and strongly continuous. ([[thm-regular-representations-are-unitary-and-strongly-continuous]], [[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]])

[F6] On the product of sigma-finite measure spaces, a product-measurable $L^1$ function has equal iterated integrals and its value is the product integral. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F7] The inner product on $L^2(K)$ is $\langle h_1,h_2\rangle=\int_Kh_1\overline{h_2}\,d\mu$. ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]])

[F8] The Hilbert adjoint of a bounded operator is the unique bounded operator satisfying $\langle Tx,y\rangle=\langle x,T^*y\rangle$ for all $x,y$. ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]])

## Proof

**Given:** AC, a compact Hausdorff group $K$ with normalized Haar probability $\mu$, a class $\varphi\in L^2(K)$, the operator $C_\varphi$, the right regular representation $\rho$, and $\varphi^*(k)=\overline{\varphi(k^{-1})}$.

1.1 Fix $g\in K$ and $h\in L^2(K)$; for every $x$ the function $y\mapsto\varphi(xy^{-1})h(yg)$ is integrable by Cauchy–Schwarz and Haar invariance, and the substitution $y'=yg$ together with right invariance of $\mu$ and the identity $x(y'g^{-1})^{-1}=xgy'^{-1}$ gives $(C_\varphi\rho(g)h)(x)=\int_K\varphi(xy^{-1})h(yg)\,d\mu(y)=\int_K\varphi(xgy'^{-1})h(y')\,d\mu(y')=(\rho(g)C_\varphi h)(x)$ for almost every $x\in K$, whence $C_\varphi\rho(g)=\rho(g)C_\varphi$ in $L^2(K)$; this is (1). [F1, F2, F3, F4, F5]

1.2 First suppose $\varphi\in C(K)$. Its kernel $(x,y)\mapsto\varphi(xy^{-1})$ is product-measurable by the finite-rectangle product-measurability argument in [[lem-compact-convolution-operators-are-hilbert-schmidt]]. For $h_1,h_2\in L^2(K)$ the function $(x,y)\mapsto\varphi(xy^{-1})h_1(y)\overline{h_2(x)}$ lies in $L^1(K\times K)$ because its absolute integral is at most $\|\varphi\|_2\|h_1\|_2\|h_2\|_2$ and $\mu$ is a probability, so Fubini and the definition of $C_\varphi$ give $\langle C_\varphi h_1,h_2\rangle=\int_K\int_K\varphi(xy^{-1})h_1(y)\overline{h_2(x)}\,d\mu(y)\,d\mu(x)$. [F1, F2, F4, F6, F7]

2.1 By definition of $\varphi^*$ one has $\overline{\varphi^*(yx^{-1})}=\varphi(xy^{-1})$ for all $x,y\in K$, so expanding the definition of $C_{\varphi^*}$ in the second slot and applying Fubini to the same $L^1$ function as in step 1.2 gives $\langle h_1,C_{\varphi^*}h_2\rangle=\int_K\int_K h_1(y)\overline{\varphi^*(yx^{-1})}\overline{h_2(x)}\,d\mu(x)\,d\mu(y)=\int_K\int_K\varphi(xy^{-1})h_1(y)\overline{h_2(x)}\,d\mu(y)\,d\mu(x)=\langle C_\varphi h_1,h_2\rangle$ for all $h_1,h_2\in L^2(K)$. [F4, F6, F7, step 1.2]

3.1 For continuous $\varphi$, the identity of step 2.1 exhibits $C_{\varphi^*}$ as an adjoint of the bounded operator $C_\varphi$, so $C_\varphi^*=C_{\varphi^*}$ by uniqueness of the Hilbert adjoint. For general $\varphi\in L^2(K)$ choose $\varphi_n\in C(K)$ converging in $L^2$ to $\varphi$, as in the convolution supplier [F4]. Haar inversion gives $\|\varphi_n^*-\varphi^*\|_2=\|\varphi_n-\varphi\|_2$, and Cauchy–Schwarz gives $\|C_a\|\le\|a\|_2$. Hence $C_{\varphi_n}\to C_\varphi$ and $C_{\varphi_n^*}\to C_{\varphi^*}$ in operator norm; the adjoint norm identity in [F8] passes $C_{\varphi_n}^*=C_{\varphi_n^*}$ to the limit. Thus $C_\varphi^*=C_{\varphi^*}$ for every $L^2$ kernel. If $\varphi^*=\varphi$ almost everywhere, independence of the representative gives $C_{\varphi^*}=C_\varphi$, and $C_\varphi$ is self-adjoint. [F4, F8, step 2.1]

4.1 Let $z\in\ker(C_\varphi-\lambda I)$ for some $\lambda\in\mathbb C$ and let $g\in K$; by (1) the operators $C_\varphi$ and $\rho(g)$ commute, hence $C_\varphi(\rho(g)z)=\rho(g)C_\varphi z=\lambda\,\rho(g)z$, so $\rho(g)z$ lies in the same eigenspace, and applying this to $g^{-1}$ gives $\rho(g)\ker(C_\varphi-\lambda I)=\ker(C_\varphi-\lambda I)$; the case $\lambda=0$ is the kernel $\ker C_\varphi$. The Axiom of Choice is consumed through the normalized Haar probability and the cited Hilbert-space and adjoint suppliers; the computations above are choice-free apart from those inputs. [step 1.1, algebra] ∎
