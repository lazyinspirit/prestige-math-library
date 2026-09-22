---
id: thm-conjugacy-of-maximal-tori
kind: theorem
title: Conjugacy of maximal tori
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics, prop-adjoint-is-a-smooth-lie-group-representation, def-conjugation-and-the-adjoint-representation-of-a-lie-group, thm-the-differential-of-adjoint-is-ad, def-torus-and-maximal-torus-in-a-compact-lie-group, thm-cartans-closed-subgroup-theorem, thm-closure-of-a-connected-set, thm-closed-subspace-of-a-compact-space-is-compact, prop-commuting-lie-algebra-elements-have-multiplicative-exponentials, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, prop-exponential-map-is-natural-for-lie-group-homomorphisms, prop-exponential-scales-one-parameter-subgroups, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, thm-lie-subgroup-lie-subalgebra-correspondence]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §5, Theorem 4.34 and its critical-point proof"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§11"
proof_strategy: direct
landmark: true
---

## Statement

Assume the Axiom of Choice. Any two maximal tori of a compact connected Lie
group are conjugate.

## Facts & Assumptions

**Given:** AC, a compact connected Lie group $G$, and maximal tori $T_1,T_2$ with Lie algebras $\mathfrak t_1,\mathfrak t_2\subseteq\mathfrak g$.

[A1] AC is [[def-axiom-of-choice]]; it supplies the metric existence theorem and countable choice for the Lie-group interfaces below.

[L1] A compact Lie group admits a bi-invariant metric ([[prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics]]). The adjoint map is a smooth homomorphism ([[prop-adjoint-is-a-smooth-lie-group-representation]]), defined as the differential of conjugation ([[def-conjugation-and-the-adjoint-representation-of-a-lie-group]]), with $d\operatorname{Ad}_e(X)(U)=[X,U]$ ([[thm-the-differential-of-adjoint-is-ad]]).

[L2] A torus of $G$ is a compact connected abelian closed embedded Lie subgroup, and maximal means maximal by inclusion ([[def-torus-and-maximal-torus-in-a-compact-lie-group]]). A closed subgroup of a Lie group is embedded ([[thm-cartans-closed-subgroup-theorem]]). Closure preserves connectedness ([[thm-closure-of-a-connected-set]]), and closed subsets of a compact space are compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[L3] For commuting Lie-algebra elements, $\exp(U+V)=\exp U\exp V=\exp V\exp U$ ([[prop-commuting-lie-algebra-elements-have-multiplicative-exponentials]]). The exponential is locally a diffeomorphism at zero ([[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]]) and is natural for homomorphisms ([[prop-exponential-map-is-natural-for-lie-group-homomorphisms]]). Also $t\mapsto\exp(tV)$ has initial velocity $V$ ([[prop-exponential-scales-one-parameter-subgroups]]).

[L4] A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]). A commuting family of diagonalizable endomorphisms is simultaneously diagonalizable ([[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

[L5] A finite-dimensional vector space over an infinite field is not a finite union of proper linear subspaces ([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).

[L6] Connected immersed Lie subgroups are uniquely determined, as subgroups with their intrinsic smooth structures, by their Lie subalgebras ([[thm-lie-subgroup-lie-subalgebra-correspondence]]).

## Proof

**Proof technique:** direct.

1.1 Choose the metric of [L1] and its inner product on $\mathfrak g$. Conjugation is a composite of left and right isometries fixing $e$, so its differential $\operatorname{Ad}_g$ preserves this inner product. Differentiate along $\exp(tX)$ using [L1] and [L3] to obtain $\langle[X,U],V\rangle=-\langle U,[X,V]\rangle$. Thus every $\operatorname{ad}_X$ is skew-adjoint. [A1, L1, L3]

1.2 If an abelian Lie subalgebra $\mathfrak a$ contains $\mathfrak t_i$, then $A=\exp_G(\mathfrak a)$ is a subgroup by [L3] and is abelian; it is connected as the continuous image of a vector space. Its closure $H$ is a connected compact subgroup by [L2]. To check the group and abelian assertions for the closure, continuity of multiplication, inversion and the commutator map extends the corresponding identities from the dense subset $A$ (and $A\times A$) to $H$ (and $H\times H$). The closed-subgroup theorem gives its embedded Lie structure. For $V\in\mathfrak a$, the curve $\exp_G(tV)$ lies in $H$, and submanifold charts make this ambient smooth curve smooth as an $H$-valued curve; hence its velocity $V$ lies in $\operatorname{Lie}H$. Naturality and local invertibility of the exponential on $T_i$ show that $A$ contains an identity neighborhood in $T_i$; the subgroup it generates is open and closed in connected $T_i$, hence is all of $T_i$. Thus $H$ is a torus containing $T_i$, so maximality gives $H=T_i$ and $\mathfrak a\subseteq\mathfrak t_i$. Therefore $\mathfrak t_i$ is maximal abelian. [L2, L3]

2.1 Fix either $\mathfrak t=\mathfrak t_i$. Extend the real inner product to the positive Hermitian product on $\mathfrak g_{\mathbb C}$ using a real orthonormal basis. The operators $\operatorname{ad}_H$, $H\in\mathfrak t$, remain skew-adjoint after complexification, so are normal and diagonalizable by [L4]. They commute because $[H,H']=0$ and Jacobi gives $[\operatorname{ad}_H,\operatorname{ad}_{H'}]=\operatorname{ad}_{[H,H']}$. Simultaneous diagonalization yields finitely many joint eigenspaces with eigenvalue functions $\alpha:\mathfrak t\to\mathbb C$ that are real-linear, by linearity of $H\mapsto\operatorname{ad}_H$. The joint zero eigenspace is $\mathfrak t_{\mathbb C}$: if a real $U$ commutes with all of $\mathfrak t$, then $\mathfrak t+\mathbb RU$ is abelian, so $U\in\mathfrak t$ by step 1.2; for complex $U$ the real and imaginary parts separately commute. [L4, step 1.1, step 1.2, algebra]

3.1 For every nonzero eigenvalue function $\alpha$ in step 2.1, its real kernel is a proper subspace of $\mathfrak t$. By [L5] choose $X_i$ outside the finite union of these kernels. On each nonzero joint eigenspace $\operatorname{ad}_{X_i}$ has nonzero eigenvalue, and its kernel is therefore exactly $\mathfrak t_{i,\mathbb C}$. Intersecting with $\mathfrak g$ gives $\mathfrak c_{\mathfrak g}(X_i)=\mathfrak t_i$. If the family of nonzero eigenvalue functions is empty, step 2.1 says $\mathfrak t_i=\mathfrak g$, and $X_i=0$ works, including the zero-dimensional case. [L5, step 2.1]

4.1 Put $X=X_1$ and $Y=X_2$. The smooth function $f(g)=\langle\operatorname{Ad}_gX,Y\rangle$ attains a maximum at $g_0$ by compactness. For each $Z\in\mathfrak g$, differentiate $f(\exp(tZ)g_0)$ at zero. With $U=\operatorname{Ad}_{g_0}X$, the derivative is $\langle[Z,U],Y\rangle=\langle Z,[U,Y]\rangle$ by step 1.1 and symmetry. Its vanishing for every $Z$ implies $[U,Y]=0$. [L1, L3, step 1.1, step 3.1]

5.1 Step 3.1 gives $U\in\mathfrak c(Y)=\mathfrak t_2$. Since $\mathfrak t_2$ is abelian, $\mathfrak t_2\subseteq\mathfrak c(U)=\operatorname{Ad}_{g_0}\mathfrak c(X)=\operatorname{Ad}_{g_0}\mathfrak t_1$. The last space is abelian because conjugation induces a Lie-algebra automorphism. Maximal abelianness of $\mathfrak t_2$ forces equality. [L1, step 1.2, step 3.1, step 4.1]

6.1 The connected embedded subgroups $g_0T_1g_0^{-1}$ and $T_2$ have the same Lie algebra by step 5.1, and therefore are the same subgroup by [L6]. This proves conjugacy. The argument includes trivial tori, the zero Lie algebra and the empty family of nonzero weights as treated in step 3.1. All choice requirements are covered by [A1]; no reductivity, Cartan-subalgebra recognition, root decomposition or torus lattice classification was invoked. [A1, L6, step 3.1, step 5.1] ∎
