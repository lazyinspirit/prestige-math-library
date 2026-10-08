---
id: lem-second-countable-group-c-star-algebra-has-a-sequential-approximate-identity
kind: lemma
title: "A sequential approximate identity concentrated near the identity"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - lem-l-one-of-a-second-countable-group-is-separable
  - def-full-group-c-star-algebra
  - def-nondegenerate-star-representation-of-a-banach-star-algebra
  - def-bounded-linear-operator
  - def-space-of-bounded-linear-operators
  - def-operator-norm
  - lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient
  - thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - lem-convolution-preserves-cc-and-is-associative
  - def-second-countable-space
  - lem-countable-iff-surjection-from-n
  - def-axiom-of-choice
dependency_level: 1
axiom_use: >-
  Assume AC. It is inherited from the normalized L1 approximate-identity net,
  the full group C*-algebra construction, and the L1 separability supplier.
  The local basis enumeration uses the choice-free surjection characterization
  of countability, and the local convergence arguments make no family-wide
  choices.
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Definition 8.B.1 and Remark 8.B.2 (maximal group C*-algebra, printed p. 242); Proposition 8.B.3 and the following paragraph (nondegenerate C*-representations, printed pp. 243–244). The support-concentrated sequential approximate identity and its representation convergence are proved locally here; §8.D is not their source."
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part II, §II.4.1.1–II.4.1.4, printed pp. 85–86 (PDF pp. 93–94): general C*-approximate units and sequentialization for separable algebras with a dense ideal. This is general background; the normalized group kernels, support concentration, and representation convergence are proved locally here."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $G$ be a second-countable locally compact
Hausdorff group with a fixed left Haar measure $\mu$. There is a sequence
$(u_n)_{n\in\mathbb N}\subseteq C_c(G)$ such that $u_n\ge0$, $\int_Gu_n\,d\mu=1$,
and for every identity neighbourhood $U$ there is $n_0$ with
$\operatorname{supp}u_n\subseteq U$ for every $n\ge n_0$. It is a two-sided
approximate identity in $L^1(G)$:
$$\|f*u_n-f\|_1\longrightarrow0\quad\hbox{and}\quad\|u_n*f-f\|_1\longrightarrow0\qquad(f\in L^1(G)).$$
If $q:L^1(G)\to C^*(G)$ is the canonical dense-image map and $\rho$ is any
nondegenerate star-representation of $C^*(G)$ on a Hilbert space $H$, then
$$\rho(q(u_n))\longrightarrow I_H\quad\hbox{in the strong operator topology}.$$
We write $\rho(u_n)$ for $\rho(q(u_n))$ when the canonical map is understood.
The sequential construction and the representation limit are proved locally;
the cited literature passages supply only the stated C*-algebraic context.

## Facts & Assumptions

**Given:** AC; a second-countable LCH group $G$ with fixed left Haar measure
$\mu$; the space $L^1(G)$ and its convolution; the full group C*-algebra
$C^*(G)$ and its canonical map $q$; and a nondegenerate star-representation
$\rho:C^*(G)\to\mathcal B(H)$.

[F1] The image of $C_c(G)$ in $L^1(G)$ contains a countable dense subset, so
$C_c(G)$ is dense in $L^1(G)$
([[lem-l-one-of-a-second-countable-group-is-separable]]).

[F2] The canonical map $q:L^1(G)\to C^*(G)$ is a star-homomorphism with dense
image ([[def-full-group-c-star-algebra]]).

[F3] For the directed set of identity neighbourhoods there is a net
$(e_U)_U\subseteq C_c(G)$ with $e_U\ge0$, $\operatorname{supp}e_U\subseteq U$,
$\|e_U\|_1=1$, and, for every $f\in L^1(G)$,
$\|e_U*f-f\|_1\to0$ and $\|f*e_U-f\|_1\to0$
([[thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity]]).

[F4] Every member of $C_c(G)$ determines a class in $L^1(G)$, where
$\|f\|_1=\int_G|f|\,d\mu$
([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F5] $C_c(G)$ is closed under group convolution
([[lem-convolution-preserves-cc-and-is-associative]]).

[F6] A second-countable space has an at most countable global basis; the
nonempty subfamily of basis members containing $e$ has a surjection from
$\mathbb N$, so it can be listed with repetitions if finite
([[def-second-countable-space]], [[lem-countable-iff-surjection-from-n]]).

[F7] AC is a stated hypothesis of the $L^1$ separability, full group
$C^*$-algebra, and normalized approximate-identity suppliers. In the last
supplier it supplies the cutoff construction and selection of one normalized
cutoff for each identity neighbourhood ([[def-axiom-of-choice]]).

[F8] The representation $\rho$ is a bounded linear map, and its
nondegeneracy means the closed linear span of
$\{\rho(a)\xi:a\in C^*(G),\ \xi\in H\}$ is all of $H$
([[def-nondegenerate-star-representation-of-a-banach-star-algebra]],
[[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]],
[[def-operator-norm]]).

[F9] The full-group seminorm satisfies $\|f\|_{C^*}\le\|f\|_1$
([[lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient]]).

## Proof

**Proof technique:** direct.

1.1 By [F6], list the basis members containing $e$ as $(B_k)_{k\in\mathbb N}$, repeating members if there are only finitely many, and put $V_n=\bigcap_{k=0}^nB_k$. Each $V_n$ is an identity neighbourhood, $V_{n+1}\subseteq V_n$, and for every identity neighbourhood $U$ there is $N$ such that $V_n\subseteq U$ for all $n\ge N$: choose a basis member $B_j$ with $e\in B_j\subseteq U$ and take $N=j$. Define $u_n=e_{V_n}$ using the net in [F3]. By [F4], each such compactly supported function defines an $L^1(G)$ class, and its nonnegativity gives $\int_Gu_n\,d\mu=\|u_n\|_1$. Thus $u_n\in C_c(G)$, $u_n\ge0$, $\operatorname{supp}u_n\subseteq V_n$, and $\int_Gu_n\,d\mu=\|u_n\|_1=1$. The countability lemma supplies the enumeration without choice; AC is inherited from the net supplier [F3]. [F3, F4, F6, F7]

2.1 Fix $f\in L^1(G)$ and $\epsilon>0$. By [F3], there is an identity neighbourhood $W$ such that both $\|e_U*f-f\|_1<\epsilon$ and $\|f*e_U-f\|_1<\epsilon$ whenever $U\subseteq W$. By step 1.1 choose $N$ with $V_N\subseteq W$. For every $n\ge N$, $V_n\subseteq V_N\subseteq W$, so $u_n=e_{V_n}$ satisfies both inequalities. This proves the two stated $L^1$ limits. [F3, step 1.1]

3.1 Let $C_\rho$ be a bound for $\rho$ from [F8]. The set $q(C_c(G))$ is dense in $C^*(G)$: approximate first by $q(f)$ with $f\in L^1(G)$ using [F2], then approximate $f$ in $L^1$ by a member of $C_c(G)$ using [F1] and apply $\|q(g)\|_{C^*}\le\|g\|_1$ from [F9]. For $a\in C^*(G)$ and $\eta\in H$, boundedness of $\rho$ carries approximations $q(c)\to a$ to $\rho(q(c))\eta\to\rho(a)\eta$; thus nondegeneracy [F8] makes the linear span of $\rho(q(c))\eta$ dense in $H$. For each $c\in C_c(G)$ and $\eta\in H$, [F5] gives $u_n*c\in C_c(G)$, and the star-homomorphism identity for $q$ gives $\rho(q(u_n))\rho(q(c))\eta-\rho(q(c))\eta=\rho(q(u_n*c-c))\eta$. Its norm is at most $C_\rho\|q(u_n*c-c)\|_{C^*}\|\eta\|\le C_\rho\|u_n*c-c\|_1\|\eta\|$, which tends to zero by step 2.1. Linearity gives convergence on finite linear combinations of these vectors. Moreover, $\|\rho(q(u_n))\|\le C_\rho\|q(u_n)\|_{C^*}\le C_\rho\|u_n\|_1=C_\rho$, uniformly in $n$. For any $\xi\in H$ and any $\xi_0$ in that dense span, $\|\rho(q(u_n))\xi-\xi\|\le(C_\rho+1)\|\xi-\xi_0\|+\|\rho(q(u_n))\xi_0-\xi_0\|$; density and convergence on the span therefore give convergence for every $\xi$. If $H=\{0\}$ the strong limit statement is immediate. [F1, F2, F5, F7, F8, F9, step 2.1] ∎

## Remarks

- The sequence is cofinal at the identity because $(V_n)$ is a decreasing
  local basis. The two-sided $L^1$ convergence follows from the supplied net
  theorem and this cofinality, with no separate translation estimate.
- The general C*-approximate-unit passages in Blackadar and the group
  C*-algebra correspondence in Bekka–de la Harpe are context only; neither
  passage is used as a substitute for the support-concentrated construction
  or its strong-convergence proof above.
