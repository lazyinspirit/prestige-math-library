---
id: lem-weak-containment-implies-kernel-inclusion
kind: lemma
title: Weak containment implies kernel inclusion
deps:
  - def-weak-containment-of-unitary-representations
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - lem-quadratic-form-of-a-self-adjoint-operator-attains-the-norm
  - def-continuous-function-of-positive-type
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - def-full-group-c-star-algebra
  - def-integrated-form-of-a-unitary-representation
  - def-axiom-of-choice
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the completion and quadratic-form suppliers; the coefficient comparison adds no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Proposition 8.B.4 (weak containment in terms of C*-kernels)"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Theorem F.4.4(i)⇒(ii)"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group and let $\pi\prec\rho$ be
strongly continuous unitary representations related by weak containment
([[def-weak-containment-of-unitary-representations]]). Then the extended
representations of $C^*(G)$
([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]])
satisfy $\ker\rho\subseteq\ker\pi$; more precisely,
$$\|\pi(a)\|\le\|\rho(a)\|\qquad(a\in C^*(G)).$$

## Facts & Assumptions

**Given:** AC; an LCH group $G$; unitary representations $\pi,\rho$ with $\pi\prec\rho$; the integrated forms and their extensions to $C^*(G)$.

[F1] Weak containment: for every $\xi\in H_\pi$, compact $Q\subseteq G$ and $\epsilon>0$ there are $\eta_1,\dots,\eta_n\in H_\rho$ with $\sup_Q|\langle\pi(g)\xi,\xi\rangle-\sum_j\langle\rho(g)\eta_j,\eta_j\rangle|<\epsilon$ ([[def-weak-containment-of-unitary-representations]]).

[F2] The integrated forms are the weak integrals $\langle\pi(f)\xi,\xi\rangle=\int_Gf(g)\langle\pi(g)\xi,\xi\rangle\,dg$, and $C_c(G)$ is dense in $L^1(G)$, which maps densely into $C^*(G)$; the extended representations of $C^*(G)$ are continuous and agree with the integrated forms on $L^1(G)$ ([[def-integrated-form-of-a-unitary-representation]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[def-full-group-c-star-algebra]], [[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]]).

[F3] For a self-adjoint operator $S\in\mathcal B(H)$, $\|S\|=\sup_{\|\xi\|=1}|\langle S\xi,\xi\rangle|$ ([[lem-quadratic-form-of-a-self-adjoint-operator-attains-the-norm]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$, unitary representations $\pi\prec\rho$, unit vectors and the integrated forms.

1.1 For every compactly supported continuous $f$ and unit vector $\xi\in H_\pi$: $|\langle\pi(f)\xi,\xi\rangle|\le\|\rho(f)\|$. Indeed, let $Q\supseteq\operatorname{supp}f\cup\{e\}$ be compact and let $\epsilon>0$; [F1] provides $\eta_1,\dots,\eta_n$ with $\sup_Q|\langle\pi(g)\xi,\xi\rangle-\sum_j\langle\rho(g)\eta_j,\eta_j\rangle|<\epsilon$, and integrating against $f$ gives $|\langle\pi(f)\xi,\xi\rangle-\sum_j\langle\rho(f)\eta_j,\eta_j\rangle|\le\epsilon\|f\|_1$ by [F2]. Evaluating the same coefficient comparison at $e\in Q$ gives $|\,\|\xi\|^2-\sum_j\|\eta_j\|^2\,|<\epsilon$, so $\sum_j\|\eta_j\|^2\le1+\epsilon$, and hence $|\sum_j\langle\rho(f)\eta_j,\eta_j\rangle|\le(1+\epsilon)\|\rho(f)\|$. Therefore $|\langle\pi(f)\xi,\xi\rangle|\le(1+\epsilon)\|\rho(f)\|+\epsilon\|f\|_1$ for every $\epsilon>0$, and letting $\epsilon\to0$ gives the claim. [F1, F2]

2.1 For every $f\in C_c(G)$: $\|\pi(f)\|\le\|\rho(f)\|$. Indeed, $\pi(f^*\ast f)$ is self-adjoint with $\pi(f^*\ast f)=\pi(f)^*\pi(f)$, so [F3] gives $\|\pi(f)\|^2=\|\pi(f^*\ast f)\|=\sup_{\|\xi\|=1}|\langle\pi(f^*\ast f)\xi,\xi\rangle|\le\|\rho(f^*\ast f)\|=\|\rho(f)\|^2$ by step 1.1 and the multiplicativity of the integrated forms. [F1, F2, F3, step 1.1]

3.1 The inequality holds for all $f\in L^1(G)$ by density of $C_c(G)$: both $f\mapsto\|\pi(f)\|$ and $f\mapsto\|\rho(f)\|$ are continuous in the $L^1$ norm (the integrated forms are contractive), and the set where the inequality holds is closed in $L^1(G)$. [F2, step 2.1]

4.1 The inequality extends to $C^*(G)$: for $a\in C^*(G)$ and $f_n\in L^1(G)$ with $\|a-f_n\|_{C^*}\to0$ (using density of the image of $L^1(G)$ in $C^*(G)$), continuity of the extended representations gives $\|\pi(a)\|=\lim\|\pi(f_n)\|\le\lim\|\rho(f_n)\|=\|\rho(a)\|$ by step 3.1; in particular $a\in\ker\rho$ implies $\pi(a)=0$, that is $\ker\rho\subseteq\ker\pi$. [F2, step 3.1]

5.1 The Axiom of Choice is inherited from the completion and quadratic-form suppliers; the coefficient, integration and density arguments use no further choice ([[def-axiom-of-choice]]). [given, F1] ∎ 