---
id: lem-kernel-inclusion-implies-weak-containment
kind: lemma
title: Kernel inclusion implies weak containment
deps:
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - lem-states-of-a-concretely-represented-c-star-algebra-are-weak-star-limits-of-vector-states
  - lem-positive-type-functions-satisfy-translation-estimates
  - lem-integrated-forms-are-nondegenerate-star-representations
  - lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra
  - def-weak-containment-of-unitary-representations
  - def-state-on-a-c-star-algebra
  - lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
  - def-continuous-function-of-positive-type
  - def-full-group-c-star-algebra
  - def-integrated-form-of-a-unitary-representation
  - def-axiom-of-choice
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, used for the geometric separation behind the vector-state approximation and inherited from the whole chain; the translation estimates and net comparison add no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Proposition 8.B.4 (with its proof reference to Dixmier §3.4 and §18)"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Theorem F.4.4(ii)⇒(i), proved here through vector states and the translation estimates"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group and let $\pi$ and $\rho$ be
strongly continuous unitary representations whose extended representations of
$C^*(G)$
([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]],
[[def-full-group-c-star-algebra]]) satisfy
$\ker\rho\subseteq\ker\pi$. Then $\pi\prec\rho$
([[def-weak-containment-of-unitary-representations]]).

## Facts & Assumptions

**Given:** AC; an LCH group $G$; unitary representations $\pi,\rho$ with $\ker\rho\subseteq\ker\pi$; unit vectors $\xi\in H_\pi$.

[F1] $\varphi(a):=\langle\pi(a)\xi,\xi\rangle$ is a state of $C^*(G)$ for every unit vector $\xi$ ([[def-state-on-a-c-star-algebra]]); it vanishes on $\ker\rho\subseteq\ker\pi$ and therefore factors as $\varphi=\widetilde\varphi\circ\rho$ with $\widetilde\varphi$ a state of the C\*-algebra $B:=\rho(C^*(G))\subseteq\mathcal B(K_\rho)$, because $C^*(G)/\ker\rho\cong B$ isometrically ([[lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra]]).

[F2] Every state of $B$ is a weak-* limit of a net of convex combinations of normalized vector states: for suitable nets $\theta_i=\sum_j\lambda_{i,j}\omega_{\eta_{i,j}}$, with $\|\eta_{i,j}\|=1$, $\lambda_{i,j}\ge0$, $\sum_j\lambda_{i,j}=1$, one has $\theta_i(b)\to\widetilde\varphi(b)$ for every $b\in B$ ([[lem-states-of-a-concretely-represented-c-star-algebra-are-weak-star-limits-of-vector-states]]).

[F3] Translation estimates: for a normalized coefficient $\psi(x)=\langle\sigma(x)\eta,\eta\rangle$, $\|\eta\|=1$, one has $|\psi(xh)-\psi(x)|\le\bigl(2(1-\operatorname{Re}\psi(h))\bigr)^{1/2}$ ([[lem-positive-type-functions-satisfy-translation-estimates]], [[def-continuous-function-of-positive-type]]).

[F4] For $f\in C_c(G)$ the integrated forms give $\langle\pi(L_gf)\xi,\xi\rangle=\int_Gf(h)\langle\pi(gh)\xi,\xi\rangle\,dh$ and likewise for $\rho$ and for vector functionals; the maps $g\mapsto L_gf$ are continuous in $L^1(G)$ with $\|L_gf\|_{C^*}\le\|L_gf\|_1=\|f\|_1$ ([[def-integrated-form-of-a-unitary-representation]], [[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]], [[lem-integrated-forms-are-nondegenerate-star-representations]], [[def-full-group-c-star-algebra]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$, unitary representations $\pi,\rho$ with $\ker\rho\subseteq\ker\pi$, a unit vector $\xi\in H_\pi$, a compact set $Q\subseteq G$ and $\epsilon>0$.

1.1 Let $k(g):=\langle\pi(g)\xi,\xi\rangle$ and, for a convex combination $\theta=\sum_j\lambda_j\omega_{\eta_j}$ of normalized vector states of $B$ with associated coefficient $k_\theta(g):=\sum_j\lambda_j\langle\rho(g)\eta_j,\eta_j\rangle$, and for $f\in C_c(G)$ with $\int_Gf=1$ and $f\ge0$, one has $|k(g)-\langle\pi(f)\xi,\xi\rangle_g|\le(2(1-\operatorname{Re}\varphi(f)))^{1/2}$ and $|k_\theta(g)-\theta(L_gf)|\le(2(1-\operatorname{Re}\theta(f)))^{1/2}$ for every $g$, where $\langle\pi(f)\xi,\xi\rangle_g:=\int_Gf(h)k(gh)\,dh$ and $\theta(L_gf)=\int_Gf(h)k_\theta(gh)\,dh$ by [F4]. Indeed, $|k(g)-k(gh)|\le(2(1-\operatorname{Re}k(h)))^{1/2}$ by [F3], and Cauchy–Schwarz for the probability measure $f\,dh$ gives $\int_Gf(h)(2(1-\operatorname{Re}k(h)))^{1/2}dh\le(2(1-\int_Gf(h)\operatorname{Re}k(h)\,dh))^{1/2}=(2(1-\operatorname{Re}\varphi(f)))^{1/2}$; the same computation applies to $k_\theta$, whose summands satisfy the same estimate by [F3] and Cauchy–Schwarz for the weights $\lambda_j$. [F3, F4]

1.2 Fix $f\in C_c(G)$. The set $\{L_gf:g\in Q\}$ is compact in $L^1(G)$ by [F4], hence its image under the continuous map into $C^*(G)$ is compact; since $\theta_i(\rho(b))\to\widetilde\varphi(\rho(b))$ for every $b\in C^*(G)$ by [F1] and [F2], a finite $\delta$-net argument gives $\sup_{g\in Q}|\theta_i(L_gf)-\varphi(L_gf)|\to0$, where $\varphi(L_gf)=\widetilde\varphi(\rho(L_gf))$. [F1, F2, F4]

2.1 Consequently $k$ is a compact-uniform limit of the coefficients $k_\theta$: enlarging the given compact set $Q$ to $Q\cup\{e\}$ if necessary, and given $\epsilon>0$, choose $f\in C_c(G)$ with $f\ge0$, $\int f=1$ and support so small that $1-\operatorname{Re}k(h)<\epsilon$ on it, so that $1-\operatorname{Re}\varphi(f)<\epsilon$; eventually $1-\operatorname{Re}\theta_i(f)<2\epsilon$ by step 1.2 applied at $e$, and then $\sup_Q|k-k_{\theta_i}|\le(2\epsilon)^{1/2}+\sup_Q|\theta_i(L_gf)-\varphi(L_gf)|+(4\epsilon)^{1/2}$, which is $<4\sqrt\epsilon$ once $i$ is large: the first and third terms sum to $(\sqrt2+2)\sqrt\epsilon<4\sqrt\epsilon$, and the middle term tends to zero, by steps 1.1 and 1.2. [F1, step 1.1, step 1.2]

3.1 Therefore every normalized diagonal coefficient of $\pi$ is a compact-uniform limit of finite sums of diagonal coefficients of $\rho$; for an arbitrary vector $\xi\ne0$ the coefficient $c_{\xi,\xi}=\|\xi\|^2c_{\xi/\|\xi\|,\xi/\|\xi\|}$ is a nonnegative multiple of a normalized one and the approximating sums scale by the same factor, so by [F1]–[F2] and the definition of weak containment $\pi\prec\rho$. [step 2.1]

4.1 The Axiom of Choice is used for the geometric separation behind the vector-state approximation of step 2.1 and is inherited from the whole chain ([[def-axiom-of-choice]]). [given, F2] ∎ 