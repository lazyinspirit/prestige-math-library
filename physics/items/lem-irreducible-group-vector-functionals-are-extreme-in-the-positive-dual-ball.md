---
id: lem-irreducible-group-vector-functionals-are-extreme-in-the-positive-dual-ball
kind: lemma
title: Irreducible group vector functionals are extreme in the positive dual ball
deps:
  - def-full-group-c-star-algebra
  - lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - def-state-on-a-c-star-algebra
  - def-strongly-continuous-unitary-representation
  - def-integrated-form-of-a-unitary-representation
  - lem-integrated-forms-are-nondegenerate-star-representations
  - thm-banach-alaoglu
  - thm-ultrafilter-lemma
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-riesz-representation-for-hilbert-space
  - thm-schurs-lemma-for-unitary-representations
  - thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity
  - def-axiom-of-choice
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the ultrafilter lemma used by Banach-Alaoglu, from the maximal-norm completion and from Schur's lemma; the domination and extremality arguments add no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix C, Proposition C.5.1, Theorem C.5.6 and Proposition F.1.4, proofs read in full; the local argument works in the positive contractive C*(G)-functional ball instead of importing compactness of P_1(G)"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Propositions 8.B.3-8.B.4 and Remark 8.B.6"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group with a fixed left Haar
measure, let $A=C^*(G)$ be the full group C\*-algebra
([[def-full-group-c-star-algebra]]), and let
$$K:=\{\omega\in A^*:\|\omega\|\le1,\ \omega(a^*a)\ge0\text{ for every }a\in A\}$$
be the positive part of the dual unit ball. Then $K$ is a weak-\* compact
convex subset of $A^*$. Let $\pi$ be an irreducible strongly continuous unitary
representation of $G$ on a nonzero Hilbert space
([[def-strongly-continuous-unitary-representation]]) and let $\xi\in H_\pi$
be a unit vector; write $\pi$ also for the extension of $\pi$ to a
nondegenerate star-representation of $A$
([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]]).
Then the functional $\omega_{\pi,\xi}(a):=\langle\pi(a)\xi,\xi\rangle$
belongs to $K$, has norm $1$, and is an extreme point of $K$.

## Facts & Assumptions

**Given:** AC; an LCH group $G$ with fixed left Haar measure; $A=C^*(G)$; an irreducible strongly continuous unitary representation $\pi$ on $H_\pi\ne\{0\}$; a unit vector $\xi\in H_\pi$.

[F1] $A$ is the completion of $L^1(G)/N$ in the maximal norm $\|f\|_{C^*}=\sup_\rho\|\rho(f)\|$, the canonical map $q:L^1(G)\to A$ is a $\ast$-homomorphism with dense image, and every unitary representation $\rho$ of $G$ descends to a contractive $\ast$-homomorphism $\rho:A\to B(H_\rho)$ with $\|\rho(a)\|\le\|a\|$; the norm on $A$ is a C\*-norm ([[def-full-group-c-star-algebra]], [[lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient]], [[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]]).

[F2] The integrated form of $\pi$ is $\pi(f)=\int_Gf(g)\pi(g)\,dg$ for $f\in L^1(G)$, it is a contractive $\ast$-homomorphism, and $\pi(g)\pi(f)=\pi(L_gf)$ where $L_gf(h)=f(g^{-1}h)$; left translation is complex linear and isometric for $\|\cdot\|_{C^*}$, since $\|\rho(L_gf)\|=\|\rho(g)\rho(f)\|=\|\rho(f)\|$ for every unitary representation $\rho$. Thus it descends to a linear isometry $\tau_g$ of $A$ with inverse $\tau_{g^{-1}}$ and $\pi(g)\pi(a)=\pi(\tau_ga)$ for every $a\in A$ ([[def-integrated-form-of-a-unitary-representation]], [[lem-integrated-forms-are-nondegenerate-star-representations]], [[def-full-group-c-star-algebra]]).

[F3] The net $(e_U)_{U\in\mathcal U}$ of [[thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity]] consists of $e_U\in C_c(G)$ with $e_U\ge0$, $\operatorname{supp}e_U\subseteq U$, $\|e_U\|_1=1$, and it is a two-sided $L^1$-approximate identity: $\|e_U\ast f-f\|_1\to0$ and $\|f\ast e_U-f\|_1\to0$ for every $f\in L^1(G)$.

[F4] A positive functional $\omega$ on $A$ satisfies the Cauchy-Schwarz inequality $|\omega(b^*a)|^2\le\omega(a^*a)\omega(b^*b)$ and $\omega(x^*)=\overline{\omega(x)}$; positive functionals form a convex cone, and $c\omega-\psi\ge0$ means $\psi(a^*a)\le c\,\omega(a^*a)$ for all $a$ ([[def-state-on-a-c-star-algebra]]).

[F5] The dual unit ball of a normed space is weak-\* compact (ultrafilter lemma), and a closed subset of a compact space is compact ([[thm-banach-alaoglu]], [[thm-ultrafilter-lemma]], [[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F6] Every bounded sesquilinear form on a Hilbert space is $q(u,v)=\langle Tu,v\rangle$ for a unique bounded operator $T$ ([[thm-riesz-representation-for-hilbert-space]]).

[F7] Every bounded operator on $H_\pi$ commuting with $\pi(g)$ for all $g\in G$ is a scalar multiple of the identity ([[thm-schurs-lemma-for-unitary-representations]]).

[F8] Irreducibility means that $H_\pi\ne\{0\}$ and its only closed invariant subspaces are $\{0\}$ and $H_\pi$ ([[def-strongly-continuous-unitary-representation]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$ with left Haar measure, $A=C^*(G)$, an irreducible unitary representation $\pi$ on $H_\pi$ and a unit vector $\xi$.

1.1 $K$ is weak-\* compact and convex. The unit ball $B:=\{\omega\in A^*:\|\omega\|\le1\}$ is weak-\* compact by [F5], and the positivity set $P:=\{\omega:\omega(a^*a)\ge0\text{ for all }a\in A\}$ is an intersection of weak-\* closed sets, because for fixed $a$ the map $\omega\mapsto\omega(a^*a)$ is evaluation at $a^*a$ and hence weak-\* continuous; thus $K=B\cap P$ is a weak-\* closed subset of a compact space, hence compact by [F5]. Convexity is immediate from the linearity of $\omega\mapsto\omega(a^*a)$ for each $a$: if $\omega_1,\omega_2\ge0$ then $(t\omega_1+(1-t)\omega_2)(a^*a)\ge0$, and the norm bound is convex. [F5]

1.2 The canonical images $q(e_U)$ form a two-sided norm approximate identity for $A$, and $\pi(e_U)\eta\to\eta$ for every $\eta\in H_\pi$. For $f\in L^1(G)$ the contractivity of $q$ gives $\|q(e_U)q(f)-q(f)\|\le\|e_U\ast f-f\|_1\to0$ and similarly on the right; given $x\in A$, choose $f$ with $\|x-q(f)\|<\epsilon$; then $\|q(e_U)x-x\|\le\|q(e_U)\|\,\|x-q(f)\|+\|q(e_U)q(f)-q(f)\|+\|q(f)-x\|<2\epsilon+o(1)$, and $\|q(e_U)\|\le\|e_U\|_1=1$, so the left convergence follows; the right convergence is identical. For $\pi(e_U)\eta=\int_Ge_U(g)\pi(g)\eta\,dg$, nonnegativity, unit mass and $\operatorname{supp}e_U\subseteq U$ give $\|\pi(e_U)\eta-\eta\|\le\int_Ge_U(g)\|\pi(g)\eta-\eta\|\,dg\le\sup_{g\in U}\|\pi(g)\eta-\eta\|$, which tends to $0$ as $U$ shrinks, by strong continuity of $\pi$ at $e$. [F1, F2, F3]

2.1 $\omega(e_U)\to1$ and $\|\omega\|=1$. Since $\pi(e_U)\xi\to\xi$ by step 1.2, $|\omega(e_U)-1|=|\langle\pi(e_U)\xi-\xi,\xi\rangle|\le\|\pi(e_U)\xi-\xi\|\to0$, where $\omega:=\omega_{\pi,\xi}$. Thus $1=\lim_U\omega(e_U)\le\limsup_U\|\omega\|\,\|e_U\|=\|\omega\|$, using $\|e_U\|_1=1$ and $\|q(e_U)\|\le1$; the reverse inequality $\|\omega\|\le1$ holds because $|\omega(a)|=|\langle\pi(a)\xi,\xi\rangle|\le\|\pi(a)\|\le\|a\|$ for all $a\in A$ by [F1]. [F1, F3, step 1.2]

2.2 The subspace $D:=\pi(A)\xi$ is dense in $H_\pi$. It is nonzero: $\pi(e_U)\xi\in D$ and $\pi(e_U)\xi\to\xi\ne0$ by step 1.2, so $\xi\in\overline D$. It is $\pi(G)$-invariant: for $a\in A$ and $g\in G$, $\pi(g)\pi(a)\xi=\pi(\tau_ga)\xi\in D$ by [F2]. Hence $\overline D$ is a nonzero closed invariant subspace of $H_\pi$, so $\overline D=H_\pi$ by irreducibility [F8]. [F2, F8, step 1.2]

3.1 Domination lemma. If a positive functional $\psi\in A^*$ satisfies $0\le\psi\le c\,\omega$ for some $c\ge0$, then $\psi=\lambda\omega$ for a unique $\lambda\in[0,c]$. Define $q(\pi(a)\xi,\pi(b)\xi):=\psi(b^*a)$ on $D\times D$. This is well defined: if $\pi(a)\xi=\pi(a')\xi$ and $d=a-a'$, then $\omega(d^*d)=\|\pi(d)\xi\|^2=0$, so $0\le\psi(d^*d)\le c\,\omega(d^*d)=0$ and Cauchy-Schwarz [F4] gives $|\psi(b^*d)|^2\le\psi(d^*d)\psi(b^*b)=0$, hence $\psi(b^*a)=\psi(b^*a')$; conjugate symmetry and conjugate linearity in $b$ follow from [F4] and linearity of $\psi$. It is bounded: $|q(\pi(a)\xi,\pi(b)\xi)|^2=|\psi(b^*a)|^2\le\psi(a^*a)\psi(b^*b)\le c^2\omega(a^*a)\omega(b^*b)=c^2\|\pi(a)\xi\|^2\|\pi(b)\xi\|^2$ by [F4], and $q(u,u)=\psi(a^*a)\ge0$. Since $D$ is dense by step 2.2, $q$ extends uniquely to a bounded sesquilinear form on $H_\pi$ with $0\le q(u,u)\le c\|u\|^2$, and [F6] provides $T\in B(H_\pi)$ with $q(u,v)=\langle Tu,v\rangle$, $0\le T\le cI$. For $d,a,b\in A$, $q(\pi(d)\pi(a)\xi,\pi(b)\xi)=\psi(b^*da)=q(\pi(a)\xi,\pi(d^*)\pi(b)\xi)$, that is $\langle T\pi(d)\pi(a)\xi,\pi(b)\xi\rangle=\langle\pi(d)T\pi(a)\xi,\pi(b)\xi\rangle$; as $\{\pi(b)\xi:b\in A\}=D$ is dense, $T$ commutes with every $\pi(d)$, and then with every $\pi(g)$: for each $U$, it commutes with $\pi(L_g e_U)=\pi(g)\pi(e_U)$ by [F2], and these operators converge strongly to $\pi(g)$ by step 1.2. Bounded $T$ commutes with this strong limit. Schur's lemma [F7] gives $T=\lambda I$ with $\lambda\in[0,c]$. Finally, for $a\in A$ one has $\psi(e_U^*a)=q(\pi(a)\xi,\pi(e_U)\xi)=\langle T\pi(a)\xi,\pi(e_U)\xi\rangle\to\langle\lambda\pi(a)\xi,\xi\rangle=\lambda\omega(a)$, because $e_U^*a\to a$ in norm (the two-sided approximate identity of step 1.2 applied to $a^*$ and adjunction) and $\pi(e_U)\xi\to\xi$ by step 1.2; hence $\psi=\lambda\omega$. [F4, F6, F7, step 1.2, step 2.2]

4.1 The functional $\omega$ is extreme in $K$. Let $0<t<1$ and $\omega=t\psi_1+(1-t)\psi_2$ with $\psi_1,\psi_2\in K$. Then $0\le\psi_1\le\omega/t$ and $0\le\psi_2\le\omega/(1-t)$, so step 3.1 gives $\psi_j=\lambda_j\omega$ with $\lambda_j\ge0$. Since $\|\omega\|=1$ by step 2.1 and $\|\psi_j\|\le1$, $\lambda_j=\|\psi_j\|\le1$. Substituting into the convex decomposition gives $(t\lambda_1+(1-t)\lambda_2)\omega=\omega$, and $\omega\ne0$, so $t\lambda_1+(1-t)\lambda_2=1$; with $0\le\lambda_j\le1$ this forces $\lambda_1=\lambda_2=1$. Hence $\psi_1=\psi_2=\omega$, and $\omega$ is extreme in $K$. [step 2.1, step 3.1]

5.1 The Axiom of Choice is spent through the ultrafilter lemma in Banach-Alaoglu and is inherited from the maximal-norm completion and Schur's lemma; the domination and convexity arguments are choice-free ([[def-axiom-of-choice]]). [given, F5] ∎ 