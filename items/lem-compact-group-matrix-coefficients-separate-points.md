---
id: lem-compact-group-matrix-coefficients-separate-points
kind: lemma
title: Matrix coefficients of finite-dimensional representations separate points of a compact group
deps:
- lem-finite-rank-spectral-pieces-of-compact-convolution
- lem-compact-convolution-operators-commute-with-right-translations
- def-matrix-coefficient-of-a-unitary-representation
- def-left-and-right-regular-unitary-representations
- thm-urysohn-lemma
- cor-a-compact-hausdorff-space-is-tychonoff
- def-normal-and-t4-spaces
- lem-topological-group-translations-and-inversion
- def-topological-group
- lem-convolution-preserves-cc-and-is-associative
- def-compactly-supported-convolution-on-a-group
- cor-normalized-haar-probability-on-a-compact-group
- thm-cauchy-schwarz-in-an-inner-product-space
- def-axiom-of-choice
- lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
- lem-the-l1-involution-is-isometric-and-reverses-convolution
- thm-integrals-are-invariant-under-measure-preserving-maps
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- def-hilbert-space-adjoint
- lem-compact-convolution-operators-are-hilbert-schmidt
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Terence Tao, 254A Notes 3 (author-hosted lecture notes, 2011)
    url: https://terrytao.wordpress.com/2011/09/27/254a-notes-3-haar-measure-and-the-peter-weyl-theorem/
    locator: Theorem 7 (baby Peter-Weyl) and the spectral argument preceding it
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Exercise 5.4.6 and Corollary 5.4.8(1), printed pp. 234–235
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact Hausdorff group with normalized Haar probability $\mu$. For all distinct $x,y\in K$ there exist a finite-dimensional continuous unitary representation $\pi$ of $K$ and vectors $v,w$ in its carrier with $\langle\pi(x)v,w\rangle\ne\langle\pi(y)v,w\rangle$. Equivalently, the finite-dimensional continuous unitary representations of $K$ separate the points of $K$.

## Facts & Assumptions

[F1] A topological group has continuous multiplication and inversion; if $g\ne e$ there is an open symmetric neighbourhood $U$ of $e$ with $g\notin U\cdot U$, because multiplication is continuous at $(e,e)$ and $K$ is Hausdorff. ([[def-topological-group]], [[lem-topological-group-translations-and-inversion]])

[F2] On the compact Hausdorff space $K$, Urysohn's lemma applied to the compact set $\{e\}$ inside the open set $U$ gives a continuous $\varphi_0:K\to[0,1]$ with $\varphi_0(e)=1$ and $\varphi_0=0$ outside $U$; compact Hausdorff spaces are normal (indeed Tychonoff). ([[thm-urysohn-lemma]], [[cor-a-compact-hausdorff-space-is-tychonoff]], [[def-normal-and-t4-spaces]])

[F3] On the compact group $K$, every continuous function has compact support, so $C(K)=C_c(K)$. For $f,g\in C(K)$, convolution is $(f*g)(x)=\int_Kf(v)g(v^{-1}x)\,d\mu(v)$, belongs to $C(K)$, and is associative. On the unimodular group $K$ the involution is $f^*=\overline{f\circ\iota}$ and satisfies $(f*g)^*=g^**f^*$. ([[def-compactly-supported-convolution-on-a-group]], [[lem-convolution-preserves-cc-and-is-associative]], [[lem-the-l1-involution-is-isometric-and-reverses-convolution]])

[F4] The normalized Haar probability satisfies $\mu(K)=1$ and is invariant under translations and inversion, and $\mu(U)>0$ for every nonempty open $U\subseteq K$. ([[cor-normalized-haar-probability-on-a-compact-group]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[thm-integrals-are-invariant-under-measure-preserving-maps]])

[F5] For $f\in L^2(K)$ the operator $C_f$ is compact and Hilbert–Schmidt; if $f^*=f$ almost everywhere then $C_f$ is self-adjoint, and then each $\ker(C_f-\lambda I)$ and $\ker C_f$ is invariant under the right regular representation $\rho$; the nonzero eigenspaces $E_\lambda$ are finite dimensional with closed linear span $(\ker C_f)^\perp$ and $L^2(K)=\ker C_f\oplus\widehat\bigoplus_{\lambda\ne0}E_\lambda$. ([[lem-compact-convolution-operators-are-hilbert-schmidt]], [[lem-compact-convolution-operators-commute-with-right-translations]], [[lem-finite-rank-spectral-pieces-of-compact-convolution]])

[F7] For a self-adjoint bounded operator $T$ and vector $z$ one has $\langle T^2z,z\rangle=\langle Tz,Tz\rangle=\|Tz\|^2$. ([[def-hilbert-space-adjoint]], [[thm-cauchy-schwarz-in-an-inner-product-space]])

[F8] Matrix coefficients of a representation $\pi$ are the functions $c^{\pi}_{v,w}(k)=\langle\pi(k)v,w\rangle$. ([[def-matrix-coefficient-of-a-unitary-representation]])

[F9] AC supplies Dependent Choice, the hypothesis under which the published Urysohn lemma is stated. ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]])

## Proof

**Given:** AC, a compact Hausdorff group $K$ with normalized Haar probability $\mu$, and distinct $x,y\in K$ with $g:=y^{-1}x\ne e$.

1.1 By [F1] choose an open symmetric neighbourhood $U$ of $e$ with $g\notin U\cdot U$ and by [F2] a continuous $\varphi_0:K\to[0,1]$ with $\varphi_0(e)=1$ and vanishing outside $U$; put $\varphi(k):=\tfrac12(\varphi_0(k)+\varphi_0(k^{-1}))$, so $\varphi\ge0$ is continuous with $\varphi(e)>0$, vanishing outside $U$ and $\varphi(k^{-1})=\varphi(k)$, hence $\varphi^*=\varphi$; put $\psi:=\varphi*\varphi\in C(K)$. Then $\psi$ is real and satisfies $\psi^*=\varphi^*\!*\varphi^*=\psi$ by [F3], and $\psi=C_\varphi\varphi$ because $C_\varphi\varphi(x)=\int_K\varphi(xv^{-1})\varphi(v)\,d\mu(v)=\int_K\varphi(w)\varphi(w^{-1}x)\,d\mu(w)=\psi(x)$ under the substitution $w=xv^{-1}$, which preserves $\mu$ by [F4]; moreover $\psi(e)=\int_K\varphi(v)\varphi(v^{-1})\,d\mu(v)=\int_K\varphi^2\,d\mu>0$ because $\varphi$ is continuous, positive at $e$ and $\mu$ is positive on the nonempty open set where $\varphi>0$, while $\psi(g)=\int_K\varphi(v)\varphi(v^{-1}g)\,d\mu(v)=0$ since $\varphi(v)\varphi(v^{-1}g)\ne0$ would give $v\in U$ and $v^{-1}g\in U$, hence $g\in U\cdot U$ by symmetry of $U$; finally $C_\varphi$ and $C_\psi$ are compact self-adjoint with the spectral decomposition $L^2(K)=\ker C_\varphi\oplus\widehat\bigoplus_{\lambda\ne0}E_\lambda$ into finite-dimensional $\rho$-invariant pieces by [F5]. [F1, F2, F3, F4, F5]

2.1 Suppose for contradiction that $\rho(g)$ acts as the identity on every nonzero eigenspace $E_\lambda$ of $C_\varphi$. The spectral decomposition from step 1.1 and continuity of $\rho(g)$ imply that it is the identity on $(\ker C_\varphi)^\perp$. Since $C_\varphi$ is self-adjoint, its range is contained in that orthogonal complement: for $z\in\ker C_\varphi$, $\langle C_\varphi h,z\rangle=\langle h,C_\varphi z\rangle=0$. Thus $\rho(g)C_\varphi=C_\varphi$, and applying this to $\varphi$ gives $\rho(g)\psi=\psi$ in $L^2(K)$, where $\psi=C_\varphi\varphi$ from step 1.1. Both functions are continuous. Their almost-everywhere equality is therefore pointwise, since a nonzero continuous difference would be nonzero on a nonempty open set of positive Haar measure [F4]. At $e$ this gives $\psi(g)=\psi(e)$, contradicting $\psi(g)=0<\psi(e)$ from step 1.1. Hence some nonzero eigenspace of $C_\varphi$ contains $\xi$ with $\rho(g)\xi\ne\xi$. [F4, F5, F7, step 1.1]

3.1 For such $\lambda$ and $\xi$ put $\Pi(k):=\langle\rho(k)\xi,\rho(g)\xi-\xi\rangle$ and $u(k):=\Pi(y^{-1}k)$; then $u(x)=\Pi(g)=\|\rho(g)\xi\|^2-\langle\rho(g)\xi,\xi\rangle$ and $u(y)=\Pi(e)=\langle\xi,\rho(g)\xi\rangle-\|\xi\|^2$, so $u(x)-u(y)=\langle\rho(g)\xi-\xi,\rho(g)\xi-\xi\rangle=\|\rho(g)\xi-\xi\|^2>0$ and $u(x)\ne u(y)$. On the other hand $u(k)=\langle\rho(k)\xi,\rho(y)(\rho(g)\xi-\xi)\rangle$ for every $k$, by unitarity of $\rho(y)$, so $u$ is a matrix coefficient of the finite-dimensional continuous unitary representation $\rho|_{E_\lambda}$ with the vectors $\xi$ and $\rho(y)(\rho(g)\xi-\xi)$ [F8]; hence the finite-dimensional representations separate $x$ and $y$, which proves the lemma. Dependent Choice, and with it the Urysohn lemma used in [F2], is supplied by AC through [F9]; no other choice is made in the separation argument itself. [F2, F8, F9, step 2.1] ∎
