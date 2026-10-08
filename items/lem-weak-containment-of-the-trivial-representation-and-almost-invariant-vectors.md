---
id: lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors
kind: lemma
title: Weak containment of the trivial representation and almost invariant vectors
deps:
  - lem-matrix-rank-detected-by-nonzero-minors
  - def-hilbert-direct-sum-of-unitary-representations
  - thm-tychonoff
  - def-weak-containment-of-unitary-representations
  - lem-normalized-coefficient-approximation-for-irreducible-weak-containment
  - def-continuous-function-of-positive-type
  - def-matrix-coefficient-of-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-compact-space
  - def-product-topology
  - def-initial-and-final-topology
  - def-hausdorff-space
  - lem-compactness-of-a-subspace-is-ambient
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-axiom-of-choice
  - cor-heine-borel-in-the-product-topology
  - thm-complex-spectral-theorem-for-normal-endomorphisms
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the normalized-coefficient approximation lemma. The counterexample uses AC through Tychonoff and for the recursive stage-neighbourhood and escaping-point selections. The elementary coefficient estimates and rank-one sign operators are choice-free."
verification:
  precheck: pass
  repair: research/frontier-43-complex-representation-15-compact-stage-product-published-repair/receipt.json
sources:
  references:
    - title: "Helge Gloeckner, Ralf Gramlich and Tobias Hartnick, Final Group Topologies, Kac-Moody Groups and Pontryagin Duality, arXiv:math/0603537v3"
      url: "https://arxiv.org/pdf/math/0603537"
      locator: "Definition 4.1, Proposition 4.7 with proof (printed pp. 10 and 12-13); compact containment Lemma 1.1(d). Complete 43-page PDF retrieved; these bounded sections read."
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.1: Corollary F.1.5 and the proof of Proposition F.1.4"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.C: the characterisation of 1_G ≺ π by almost invariant vectors"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group, let
$1_G$ denote the **trivial representation** on $\mathbb C$
($1_G(g)z=z$, a strongly continuous unitary representation) and let $\pi$ be a
strongly continuous unitary representation of $G$ on a Hilbert space $H$
([[def-strongly-continuous-unitary-representation]]). Then
$1_G\prec\pi$
([[def-weak-containment-of-unitary-representations]]) if and only if for every
compact $Q\subseteq G$ and every $\epsilon>0$ there is a unit vector
$\xi\in H$ with $\sup_{g\in Q}\|\pi(g)\xi-\xi\|<\epsilon$.

## Facts & Assumptions

**Given:** AC; an LCH group $G$; the trivial representation $1_G$ on $\mathbb C$; a strongly continuous unitary representation $\pi$ on $H$.

[F1] $1_G$ is irreducible (its space is one-dimensional) and its diagonal coefficient at the unit vector $1\in\mathbb C$ is the constant function $1$; the functions of positive type associated to $1_G$ are exactly the nonnegative constants $c\ge0$, and finite sums of them are again of this form ([[def-weak-containment-of-unitary-representations]], [[def-continuous-function-of-positive-type]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F2] If $\xi$ is a unit vector and $g\in G$, then $\|\pi(g)\xi-\xi\|^2=2(1-\operatorname{Re}\langle\pi(g)\xi,\xi\rangle)$ and, by Cauchy-Schwarz applied to $\langle\xi-\pi(g)\xi,\xi\rangle$, $\bigl|1-\langle\pi(g)\xi,\xi\rangle\bigr|\le\|\pi(g)\xi-\xi\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F3] Normalized coefficient approximation: if $\phi$ is a normalized function of positive type associated to an irreducible representation $\pi_0$ and $\pi_0\prec\pi$, then for every compact $Q$ and $\epsilon>0$ there is a unit vector $\eta$ with $\sup_{g\in Q}|\phi(g)-\langle\pi(g)\eta,\eta\rangle|<\epsilon$ ([[lem-normalized-coefficient-approximation-for-irreducible-weak-containment]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$, the trivial representation $1_G$ and a strongly continuous unitary representation $\pi$ on $H$.

1.1 If $H=0$, both conditions fail on the compact set $\{e\}$: its only coefficient is $0$ and it has no unit vector. For every unit vector $\xi\in H$ and every $g\in G$ the invariant-vector defect and the coefficient are related by $\|\pi(g)\xi-\xi\|^2=2(1-\operatorname{Re}\langle\pi(g)\xi,\xi\rangle)$, hence $2(1-\operatorname{Re}\langle\pi(g)\xi,\xi\rangle)\le2|1-\langle\pi(g)\xi,\xi\rangle|$ and $\bigl|1-\langle\pi(g)\xi,\xi\rangle\bigr|\le\|\pi(g)\xi-\xi\|$. [F2]

2.1 Almost invariant vectors imply $1_G\prec\pi$. Suppose that for every compact $Q$ and $\epsilon>0$ there is a unit $\xi$ with $\sup_Q\|\pi(g)\xi-\xi\|<\epsilon$; given $Q,\epsilon$, choose such $\xi$ for $Q$ and $\epsilon$. Then for $g\in Q$, $\bigl|1-\langle\pi(g)\xi,\xi\rangle\bigr|\le\|\pi(g)\xi-\xi\|<\epsilon$ by step 1.1, so the constant function $1$, the normalized coefficient of $1_G$, is approximated on $Q$ by the single function of positive type $\langle\pi(\cdot)\xi,\xi\rangle$ associated to $\pi$; multiplying $\xi$ by $\sqrt c$ approximates $c\ge0$ in the same way, so every function of positive type associated to $1_G$ (a nonnegative constant by [F1]) is a compact-uniform limit of finite sums of functions of positive type associated to $\pi$. This is exactly $1_G\prec\pi$. [F1, step 1.1]

2.2 $1_G\prec\pi$ implies almost invariant vectors. Assume $1_G\prec\pi$, let $Q$ be compact and $\epsilon>0$. Since $1_G$ is irreducible with normalized coefficient the constant function $1$ by [F1], [F3] provides a unit vector $\xi\in H$ with $\sup_Q|1-\langle\pi(g)\xi,\xi\rangle|<\epsilon^2/2$. For $g\in Q$ step 1.1 gives $\|\pi(g)\xi-\xi\|^2=2(1-\operatorname{Re}\langle\pi(g)\xi,\xi\rangle)\le2\bigl|1-\langle\pi(g)\xi,\xi\rangle\bigr|<\epsilon^2$, hence $\sup_Q\|\pi(g)\xi-\xi\|<\epsilon$. [F1, F3, step 1.1]

3.1 Steps 2.1 and 2.2 prove the equivalence. The Axiom of Choice is inherited from the normalized-coefficient approximation lemma; the estimates in step 1.1 and the passage to nonnegative multiples are choice-free ([[def-axiom-of-choice]]). [step 2.1, step 2.2] ∎ 

## Remarks

The LCH hypothesis cannot be dropped for the finite-sum coefficient definition of weak containment used here. Let $K_k=\{(g_d)_{d\ge1}\in\prod_{d\ge1}U(d):\operatorname{rank}(g_d-I)\le k\text{ for every }d\}$. The group $U(d)$ is closed and bounded in $\mathbb C^{d^2}\cong\mathbb R^{2d^2}$, since $g^*g=I$ is a closed condition and each entry has modulus at most one; it is therefore compact by [[cor-heine-borel-in-the-product-topology]]. Each complex rank condition is closed: the real matrix of a complex-linear map has twice its complex rank (its image is the realification of the complex image), so use the vanishing of all $(2k+1)$-minors of the real matrix, by [[lem-matrix-rank-detected-by-nonzero-minors]]; the condition is vacuous when $k\ge d$. Thus every $K_k$ is compact by [[thm-tychonoff]]. Put $G=\bigcup_{k\ge1}K_k$ with the final topology of this increasing compact sequence. It is Hausdorff, since that topology contains the ambient product topology. Each $K_k$ has its original compact Hausdorff topology as a subspace of $G$: final-open sets restrict to original-open sets, and ambient-open sets are final-open. The following local argument identifies the product topology on $G\times G$ with the final topology of the stage products.

First, in a compact Hausdorff space $T$, every compact $C\subseteq O$ with $O$ open has a compact neighbourhood $A$ such that $C\subseteq\operatorname{int}_T A\subseteq A\subseteq O$. Here compact subsets are closed: for $t\notin C$, separate $t$ from each point of $C$ by disjoint open sets and take a finite subcover of $C$; intersecting the finitely many neighbourhoods of $t$ gives a neighbourhood disjoint from $C$. Closed subsets of $T$ are compact by adjoining their open complement to a cover. For $c\in O$, separate $c$ from each point of the compact closed set $T\setminus O$ and take a finite subcover of that set; the resulting intersection $N_c$ of neighbourhoods of $c$ has closure inside $O$, since it misses an open set containing $T\setminus O$. If the complement is empty take $N_c=T$. A finite collection of these $N_c$ covers $C$, and the union of their closures is the required $A$. These ambient-cover uses are justified by [[lem-compactness-of-a-subspace-is-ambient]], and the separation property is [[def-hausdorff-space]].

Second, if $C,D$ are nonempty compact subsets of spaces $T,S$ and $C\times D\subseteq W$ with $W$ product-open, there are open $P\supseteq C$, $Q\supseteq D$ with $P\times Q\subseteq W$. For each $c\in C$, choose rectangles $P_{c,d}\times Q_{c,d}\subseteq W$ about $(c,d)$; finitely many $Q_{c,d}$ cover $D$. Their corresponding $P_{c,d}$ have intersection $P_c$, and their union is $Q_c$, so $P_c\times Q_c\subseteq W$ and $Q_c\supseteq D$. Finitely many $P_c$ cover $C$; their union $P$ and the intersection of their corresponding $Q_c$ give the claim. This uses the rectangle basis of [[def-product-topology]].

Now let $X=\bigcup_n K_n$, $Y=\bigcup_n L_n$ be increasing unions of compact Hausdorff spaces with inclusions inducing the original stage topologies, each union carrying the final topology ([[def-initial-and-final-topology]]). Suppose $W\subseteq X\times Y$ has open trace on every $K_n\times L_n$, and fix $(a,b)\in W$, in some stage $n_0$. A rectangle about $(a,b)$ in that trace and the first paragraph give compact neighbourhoods $A_{n_0}\subseteq K_{n_0}$, $B_{n_0}\subseteq L_{n_0}$ with $A_{n_0}\times B_{n_0}\subseteq W$. Inductively regard $A_n,B_n$ as compact subsets of the next stages. Apply the second paragraph to their product in $W\cap(K_{n+1}\times L_{n+1})$, then shrink the resulting factor neighbourhoods by the first paragraph to obtain compact $A_{n+1},B_{n+1}$ with $A_n\subseteq\operatorname{int}_{K_{n+1}}A_{n+1}$, $B_n\subseteq\operatorname{int}_{L_{n+1}}B_{n+1}$ and $A_{n+1}\times B_{n+1}\subseteq W$. AC supplies these recursive selections. Put $U=\bigcup_{n\ge n_0}\operatorname{int}_{K_n}A_n$ and $V=\bigcup_{n\ge n_0}\operatorname{int}_{L_n}B_n$. For every $m$,
$$U\cap K_m=\bigcup_{n\ge\max(m,n_0)}\bigl(\operatorname{int}_{K_n}A_n\cap K_m\bigr).$$
Earlier terms are absorbed by later interiors, and each displayed term is open in $K_m$ by the subspace inclusions. Hence $U$ is final-open; the same proof applies to $V$. They contain $a,b$, and $U\times V\subseteq W$ by moving both factors to the larger of their stage indices. Thus $W$ is product-open. Conversely product-open sets have open stage traces because the stage inclusions are continuous. This proves the required equality of topologies, in particular for $X=Y=G$ and $L_n=K_n$, without importing the proof of Gloeckner--Gramlich--Hartnick Proposition 4.7.

Coordinatewise multiplication restricts continuously to $K_k\times K_k\to K_{2k}$ because $gg'-I=(g-I)+g(g'-I)$ and ranks are subadditive; inversion preserves $K_k$ because $g^{-1}-I=-g^{-1}(g-I)$. Thus $G$ is a Hausdorff topological group.

Every compact subset of $G$ lies in one $K_k$. Otherwise choose distinct points $x_n$ of that compact subset outside $K_n$. Every subset of $\{x_n:n\ge1\}$ has finite, hence closed, intersection with each $K_k$, so is closed in the final topology. This would give an infinite closed discrete subspace of a compact Hausdorff space, a contradiction. The representation $\rho=\widehat\bigoplus_{d\ge1}\mathbb C^d$ with coordinatewise standard action is strongly continuous: each orbit map is continuous in the ambient product topology by truncating its square-summable tail, hence in the finer final topology ([[def-hilbert-direct-sum-of-unitary-representations]]).

The functions $\phi_d(g)=d^{-1}\operatorname{tr}(g_d)$ are finite sums of diagonal coefficients of $\rho$, using the vectors $d^{-1/2}e_1,\ldots,d^{-1/2}e_d$ in the $d$th summand. By [[thm-complex-spectral-theorem-for-normal-endomorphisms]], a unitary has an orthonormal eigenbasis; all eigenvalues have modulus one, and $\operatorname{rank}(g_d-I)\le k$ allows at most $k$ nonidentity eigenvalues. Hence $\sup_{K_k}|1-\phi_d|\le2k/d$. Compact containment therefore gives $1_G\prec\rho$. However, $K_1$ is compact, and for any unit vector $\xi=(\xi_d)$ choose $g_d$ to act as $-I$ on $\mathbb C\xi_d$ and as $I$ on its orthogonal complement when $\xi_d\ne0$, and to be the identity otherwise. Then $g\in K_1$ and $\rho(g)\xi=-\xi$, so $\sup_{g\in K_1}\|\rho(g)\xi-\xi\|=2$. There are no almost invariant unit vectors. This proves that the general topological-group version of the equivalence is false.
