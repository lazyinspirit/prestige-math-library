---
id: lem-integrated-forms-are-nondegenerate-star-representations
kind: lemma
title: Integrated forms are contractive nondegenerate star representations of L one
deps:
  - def-integrated-form-of-a-unitary-representation
  - def-nondegenerate-star-representation-of-a-banach-star-algebra
  - def-convolution-on-cc-and-l1-of-a-group
  - def-compactly-supported-convolution-on-a-group
  - lem-l1-convolution-norm-inequality
  - def-involution-on-l1-of-a-group
  - def-modular-function-of-a-locally-compact-group
  - lem-haar-change-of-variables-under-inversion
  - thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra
  - thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - def-banach-star-algebra-without-required-unit
  - def-strongly-continuous-unitary-representation
  - def-hilbert-space
  - lem-bounded-hilbert-operators-form-a-c-star-algebra
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-axiom-of-choice
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the convolution, approximate identity and Haar change-of-variables suppliers; the Cc computations and the density extension add no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: the paragraphs before Definition 8.B.1 (π is a *-representation of L1(G))"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: second paragraph after Example F.4.1 (nondegenerate *-representation of L1(G))"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group with a fixed left Haar
measure and let $(\pi,H)$ be a strongly continuous unitary representation
([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]).
Then $f\mapsto\pi(f)$ is a $*$-representation of the Banach $*$-algebra
$L^1(G)$ ([[def-banach-star-algebra-without-required-unit]]): for all
$f,h\in L^1(G)$,
$$\pi(f\ast h)=\pi(f)\pi(h),\qquad \pi(f^*)=\pi(f)^*,\qquad\|\pi(f)\|\le\|f\|_1,$$
where $\pi(f)$ is the integrated form
([[def-integrated-form-of-a-unitary-representation]]). It is **nondegenerate**:
the closed linear span of $\{\pi(f)\xi:f\in L^1(G),\ \xi\in H\}$ is $H$, and
equivalently no nonzero $\xi\in H$ is annihilated by every $\pi(f)$
([[def-nondegenerate-star-representation-of-a-banach-star-algebra]]).

## Facts & Assumptions

**Given:** AC; an LCH group $G$ with fixed left Haar measure; a strongly continuous unitary representation $(\pi,H)$; the integrated forms $\pi(f)$ for $f\in L^1(G)$; the net $(e_U)$ of the approximate identity.

[F1] For every $f\in L^1(G)$ the operator $\pi(f)$ is bounded with $\|\pi(f)\xi\|\le\|f\|_1\|\xi\|$, called the integrated form, and $f\mapsto\pi(f)$ is complex-linear ([[def-integrated-form-of-a-unitary-representation]]).

[F2] $L^1(G)$ is a Banach $\ast$-algebra with convolution $\ast$; on $C_c(G)$ the convolution is $(u\ast w)(z)=\int u(x)w(x^{-1}z)\,dx$; $\|u\ast w\|_1\le\|u\|_1\|w\|_1$; $C_c(G)$ is dense in $L^1(G)$; and the involution is $f^*(x)=\Delta_G(x^{-1})\overline{f(x^{-1})}$, isometric, with $(f\ast h)^*=h^*\ast f^*$ ([[def-convolution-on-cc-and-l1-of-a-group]], [[def-compactly-supported-convolution-on-a-group]], [[def-involution-on-l1-of-a-group]], [[thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra]], [[lem-l1-convolution-norm-inequality]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F3] Haar change of variables under inversion: $\int_Gf(x^{-1})\,dx=\int_G\Delta_G(x^{-1})f(x)\,dx$ for nonnegative Borel $f$ and for complex $f$ with $\int\Delta_G(x^{-1})|f(x)|\,dx<\infty$ ([[lem-haar-change-of-variables-under-inversion]], [[def-modular-function-of-a-locally-compact-group]]).

[F4] There is a net $(e_U)\subseteq C_c(G)$ with $e_U\ge0$, $\operatorname{supp}e_U\subseteq U$, $\|e_U\|_1=1$ and $e_U\ast f\to f$, $f\ast e_U\to f$ in $L^1(G)$ for every $f$ ([[thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity]]).

[F5] Fubini holds for $L^1$ functions on products of finite-measure spaces, in particular on products of compact sets, where the two iterated integrals may be computed in either order ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F6] Nondegeneracy of a bounded star-representation means that the closed span of its action on $H$ is $H$, equivalently that its common kernel on $H$ is zero ([[def-nondegenerate-star-representation-of-a-banach-star-algebra]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$ with left Haar measure, a strongly continuous unitary representation $(\pi,H)$, and the integrated forms $\pi(f)$.

1.1 For $u,w\in C_c(G)$ one has $\pi(u\ast w)=\pi(u)\pi(w)$. Indeed, for $\xi,\eta\in H$ the defining identity [F1] and the convolution formula give $\langle\pi(u\ast w)\xi,\eta\rangle=\int_G(u\ast w)(z)\langle\pi(z)\xi,\eta\rangle\,dz=\int_G\int_Gu(x)w(x^{-1}z)\langle\pi(z)\xi,\eta\rangle\,dx\,dz$; the integrand is continuous on the compact product $\operatorname{supp}u\times\{z:x^{-1}z\in\operatorname{supp}w\ \text{for some }x\in\operatorname{supp}u\}$, so [F5] lets us substitute $z=xy$ (left invariance of Haar measure) and factor: $\int_G\int_Gu(x)w(y)\langle\pi(x)\pi(y)\xi,\eta\rangle\,dy\,dx=\int_Gu(x)\langle\pi(x)\pi(w)\xi,\eta\rangle\,dx=\langle\pi(u)\pi(w)\xi,\eta\rangle$, using the defining weak integrals for $w$ and then $u$. [F1, F2, F5]

1.2 For $u\in C_c(G)$ one has $\pi(u^*)=\pi(u)^*$. Indeed, for $\xi,\eta\in H$ the defining identity and [F2] give $\langle\pi(u^*)\xi,\eta\rangle=\int_G\Delta_G(x^{-1})\overline{u(x^{-1})}\langle\pi(x)\xi,\eta\rangle\,dx$; substituting $x=y^{-1}$ with [F3] and $\Delta_G(x^{-1})dx=dy$ yields $\int_G\overline{u(y)}\langle\pi(y^{-1})\xi,\eta\rangle\,dy=\int_G\overline{u(y)}\langle\pi(y)^*\xi,\eta\rangle\,dy=\overline{\int_Gu(y)\langle\pi(y)\eta,\xi\rangle\,dy}=\overline{\langle\pi(u)\eta,\xi\rangle}=\langle\xi,\pi(u)\eta\rangle=\langle\pi(u)^*\xi,\eta\rangle$. [F1, F2, F3]

1.3 For every $\xi\in H$, $\pi(e_U)\xi\to\xi$: using $e_U\ge0$, $\int e_U=1$ and the defining identity, $\|\pi(e_U)\xi-\xi\|\le\int_G e_U(g)\|\pi(g)\xi-\xi\|\,dg\le\sup_{g\in U}\|\pi(g)\xi-\xi\|$, which tends to $0$ along the directed set of identity neighbourhoods by strong continuity. Hence every $\xi$ lies in the closure of the span of $\{\pi(f)\xi'\}$, and the closed span is $H$: it is a closed subspace containing every vector, so it is $H$, and no nonzero vector is annihilated by all $\pi(f)$; by [F6] this is nondegeneracy. [F1, F4, F6]

2.1 Multiplicativity for arbitrary $f,h\in L^1(G)$ follows from step 1.1 by density: for fixed $w\in C_c(G)$ both $f\mapsto\pi(f\ast w)$ and $f\mapsto\pi(f)\pi(w)$ are bounded complex-linear maps $L^1(G)\to\mathcal B(H)$, with bounds $\|f\ast w\|_1\le\|f\|_1\|w\|_1$ and $\|\pi(f)\|\,\|\pi(w)\|\le\|f\|_1\|\pi(w)\|$, and they agree on the dense subspace $C_c(G)$; hence they agree for all $f$. Repeating with $f$ fixed and the variable $h$ — both sides bounded and linear in $h$ by [F1] and [F2], agreeing on $C_c(G)$ — gives $\pi(f\ast h)=\pi(f)\pi(h)$ for all $f,h\in L^1(G)$. [F1, F2, step 1.1]

2.2 The involution identity extends by density: both $f\mapsto\pi(f^*)$ and $f\mapsto\pi(f)^*$ are bounded conjugate-linear, hence continuous, maps $L^1(G)\to\mathcal B(H)$ (boundedness of the adjoint map uses $\|T^*\|=\|T\|$, available in the C\*-algebra $\mathcal B(H)$), and they agree on the dense subspace $C_c(G)$ by step 1.2, hence everywhere. [F1, F2, step 1.2]

3.1 By [F1] the map $f\mapsto\pi(f)$ is a bounded star-representation of the Banach $\ast$-algebra $L^1(G)$ with $\|\pi(f)\|\le\|f\|_1$, by steps 2.1 and 2.2 it is multiplicative and star-preserving, and by step 1.3 it is nondegenerate; this is exactly the assertion that $f\mapsto\pi(f)$ is a nondegenerate star-representation of $L^1(G)$ in the sense of [F6], with contractive bound. The Axiom of Choice is inherited from the Haar, convolution, approximate-identity and Fubini suppliers of [F1]–[F5], and no further choice is used ([[def-axiom-of-choice]]). [F1, F6, step 1.3, step 2.1, step 2.2] ∎ 