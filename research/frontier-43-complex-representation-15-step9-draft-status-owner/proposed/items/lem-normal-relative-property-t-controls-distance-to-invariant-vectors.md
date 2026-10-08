---
status: draft
id: lem-normal-relative-property-t-controls-distance-to-invariant-vectors
kind: lemma
title: Normal relative property (T) controls the distance to the invariant subspace
deps:
  - def-relative-property-t-for-a-pair
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-hilbert-space
  - def-topological-group
  - def-normal-subgroup
  - def-orthogonality-and-orthogonal-complement
  - lem-orthogonal-complement-is-closed
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
  - cor-triangle-inequality-for-inner-product-norm
  - def-compact-space
  - def-complete-ordered-field
  - def-upper-bound
  - def-infimum
  - thm-infimum-property
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-continuous-function-of-positive-type
  - lem-diagonal-unitary-coefficients-have-positive-type
  - thm-gns-construction-for-topological-groups
  - def-hilbert-direct-sum-of-unitary-representations
  - def-product-topology
  - thm-product-universal-property
  - thm-compactness-under-continuous-maps
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals
  - thm-dominated-convergence
  - thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation
  - thm-mazur-weak-and-norm-closure-of-convex-sets
  - thm-cauchy-schwarz-in-an-inner-product-space
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. AC implies Countable Choice for the orthogonal-decomposition supplier, is assumed by the GNS and Hilbert-direct-sum suppliers, and selects one coefficient function from each nonempty set of candidate functions G→C in the compact-Kazhdan-pair and uniform-gap arguments. AC implies Dependent Choice for the complex C_0 dual representation and supports Mazur separation. No selection from a proper class of representations is made."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Proposition 1.1.9 and Remark 1.1.10, printed pp. 35–36: the absolute Kazhdan-pair distance estimate and its compact-set strict form. The normal-subgroup relative version is proved locally."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups (complete notes with exercise sheets)"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Exercises for the PCMI Summer School, §2 I.1 and I.4, printed pp. 2–3/PDF pp. 32–33: finite-generator projection estimates and the relative-property-(T)/bounded-generation route are posed as exercises; no proof of this lemma is supplied there."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a
topological group, let $N\trianglelefteq G$ be a closed normal subgroup
([[def-normal-subgroup]]), and let $(Q,\varepsilon)$ be a relative Kazhdan pair
for $(G,N)$ ([[def-relative-property-t-for-a-pair]]). For a strongly continuous
unitary representation $(\pi,H)$ and $\xi\in H$, put
$H^N:=\{v\in H:\pi(n)v=v\text{ for every }n\in N\}$ and define
$\Delta_Q^\pi(\xi):=0$ if $Q=\varnothing$, while for nonempty $Q$ set
$\Delta_Q^\pi(\xi):=\sup_{q\in Q}\|\pi(q)\xi-\xi\|$. This supremum exists in
$\mathbb R$ because each displacement is at most $2\|\xi\|$. Then
$$\operatorname{dist}(\xi,H^N)\le\varepsilon^{-1}\Delta_Q^\pi(\xi),\qquad\sup_{n\in N}\|\pi(n)\xi-\xi\|\le2\varepsilon^{-1}\Delta_Q^\pi(\xi),$$
where $\operatorname{dist}(\xi,H^N):=\inf_{v\in H^N}\|\xi-v\|$.

Moreover, if $(G,N)$ has relative property (T), then for every compact
$Q\subseteq G$ with $\bigcup_{k\ge1}Q^k=G$, where $Q^k$ is the set of products of $k$
elements of $Q$, there is $\delta>0$ such that every strongly
continuous unitary representation of $G$ without a nonzero $N$-invariant
vector satisfies $\Delta_Q^\pi(\xi)\ge\delta\|\xi\|$ for every $\xi\in H$.

## Facts & Assumptions

**Given:** AC; a topological group $G$; a closed normal subgroup $N$; a relative Kazhdan pair $(Q,\varepsilon)$; a strongly continuous unitary representation $(\pi,H)$; and a vector $\xi\in H$.

[F1] A relative Kazhdan pair means that every strongly continuous representation with a $(Q,\varepsilon)$-invariant unit vector has a nonzero $N$-invariant vector; relative property (T) tests representations with almost invariant vectors ([[def-relative-property-t-for-a-pair]], [[def-almost-invariant-vectors-for-a-unitary-representation]]).

[F2] Each $\pi(g)$ is a unitary linear isometry, the representation law is $\pi(gh)=\pi(g)\pi(h)$, and each orbit map is norm-continuous ([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]], [[def-topological-group]]).

[F3] Normality means $g^{-1}Ng=N$ for every $g\in G$ ([[def-normal-subgroup]]).

[F4] The orthogonal complement of a subspace is closed, and AC supplies Countable Choice for the Hilbert orthogonal-decomposition theorem ([[lem-orthogonal-complement-is-closed]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F5] Orthogonal vectors satisfy Pythagoras, and the inner-product norm satisfies the triangle inequality ([[def-orthogonality-and-orthogonal-complement]], [[lem-pythagorean-theorem-and-finite-orthogonal-sums]], [[cor-triangle-inequality-for-inner-product-norm]]).

[F6] For any vector, $\|\pi(g)\xi-\xi\|\le2\|\xi\|$ by unitarity and the triangle inequality. Thus a nonempty displacement family defining $\Delta_Q^\pi(\xi)$ is bounded and has a real supremum ([[def-complete-ordered-field]], [[def-upper-bound]]). The distance infimum exists because $H^N$ contains $0$ and the distances are nonnegative ([[def-infimum]], [[thm-infimum-property]]); the empty-$Q$ convention is explicit in the statement.

[F7] Under AC, a continuous function of positive type has a cyclic strongly continuous GNS representation with the same coefficient, and its cyclic vector has squared norm $\varphi(e)$ ([[def-continuous-function-of-positive-type]], [[lem-diagonal-unitary-coefficients-have-positive-type]], [[thm-gns-construction-for-topological-groups]]).

[F8] AC selects a member from each set-indexed family of nonempty sets ([[def-axiom-of-choice]]); the compact-pair argument chooses functions from subsets of $\mathbb C^G$.

[F9] Under AC, a set-indexed family of strongly continuous unitary representations has a strongly continuous Hilbert direct sum, with componentwise action and coordinate embeddings ([[def-hilbert-direct-sum-of-unitary-representations]]).

[F10] Componentwise continuous maps into a product are continuous; continuous images of compact spaces are compact ([[def-product-topology]], [[thm-product-universal-property]], [[thm-compactness-under-continuous-maps]]).

[F11] On an LCH space, $C_0(X;\mathbb C)$ consists of continuous functions with compact positive superlevel sets. Under Dependent Choice, every bounded complex-linear functional on this space is integration against a finite regular complex Borel measure ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]]). AC implies Dependent Choice by [F4].

[F12] Dominated convergence gives $L^1$ convergence under an integrable majorant; complex-measure integrals satisfy $|\int h\,d\mu|\le\int|h|\,d|\mu|$ ([[thm-dominated-convergence]], [[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]]).

[F13] Under AC, a convex subset of a real or complex normed space has the same weak and norm closures; weak neighborhoods test finitely many bounded linear functionals ([[thm-mazur-weak-and-norm-closure-of-convex-sets]]).

[F14] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).



## Proof

**Proof technique:** Obtain a compact relative Kazhdan pair, then decompose into fixed and orthogonal parts. For the final clause, turn pointwise convergence of coefficients into uniform approximation on a compact Hausdorff image by taking finite convex combinations.

1.1 Suppose, toward a contradiction, that relative property (T) holds but no relative Kazhdan pair has compact first component. The compact subsets of $G$ form a set $\mathcal K(G)\subseteq\mathcal P(G)$, and $\mathbb N_{>0}$ is a set. For each $(K,m)\in\mathcal K(G)\times\mathbb N_{>0}$, let $\mathcal F_{K,m}\subseteq\mathbb C^G$ consist of the normalized continuous positive-type coefficient functions of strongly continuous representations with no nonzero $N$-invariant vector and a unit vector that is $(K,1/m)$-invariant. Failure of every compact relative Kazhdan pair makes each $\mathcal F_{K,m}$ nonempty. By AC choose $\varphi_{K,m}\in\mathcal F_{K,m}$ for all $(K,m)$. For any witness $(\pi^w,H^w,\xi^w)$ realizing $\varphi_{K,m}$, equality of the coefficients gives equality of the Gram matrices on finite orbit sums; thus $\sum_g c_g\pi_{\varphi_{K,m}}(g)\eta_{\varphi_{K,m}}\mapsto\sum_g c_g\pi^w(g)\xi^w$ is a well-defined isometry of cyclic spans, extends to a unitary onto the witness's cyclic carrier, and intertwines the representations. The carrier has no nonzero $N$-invariant vector, while its cyclic unit vector is $(K,1/m)$-invariant; hence the canonical GNS representation has these same properties. The Hilbert direct sum over this set-indexed family has no nonzero $N$-invariant vector, while for every compact $K$ and every $\eta>0$ a coordinate with $1/m<\eta$ supplies a $(K,\eta)$-invariant unit vector. Thus the direct sum has almost invariant vectors, contradicting relative property (T). Therefore some compact $K_0$ and $\varepsilon_0>0$ form a relative Kazhdan pair. [F1, F7, F8, F9, algebra]

1.2 The fixed-vector subspace is $H^N=\bigcap_{n\in N}\ker(\pi(n)-I)$. Every kernel is closed because $\pi(n)-I$ is continuous linear, so $H^N$ is a closed linear subspace. It is $G$-invariant: if $v\in H^N$, then for $g\in G$ and $n\in N$, $\pi(n)\pi(g)v=\pi(g)\pi(g^{-1}ng)v=\pi(g)v$ because $N$ is normal. Its orthogonal complement is also $G$-invariant: if $w\perp H^N$ and $v\in H^N$, then $\langle\pi(g)w,v\rangle=\langle w,\pi(g^{-1})v\rangle=0$. [F2, F3, algebra]

2.1 By AC and [F4], write $\xi=\xi_N+\xi_\perp$ with $\xi_N\in H^N$ and $\xi_\perp\in(H^N)^\perp$. Pythagoras shows that $\operatorname{dist}(\xi,H^N)=\|\xi_\perp\|$: for every $v\in H^N$, $\|\xi-v\|^2=\|\xi_N-v\|^2+\|\xi_\perp\|^2$, with equality at $v=\xi_N$. [F4, F5, F6, step 1.2]

2.2 The restriction to $(H^N)^\perp$ is strongly continuous and has no nonzero $N$-invariant vector, since such a vector would lie in both $H^N$ and $(H^N)^\perp$. If $Q=\varnothing$, any unit vector in this restriction is vacuously $(Q,\varepsilon)$-invariant, so [F1] forces $(H^N)^\perp=\{0\}$. If $Q\ne\varnothing$, no unit vector in the restriction can be $(Q,\varepsilon)$-invariant by [F1]; hence every nonzero $w\in(H^N)^\perp$ has some $q\in Q$ with $\|\pi(q)w-w\|\ge\varepsilon\|w\|$. [F1, F2, F3, step 1.2]

2.3 For the final clause, choose the compact relative pair $(K_0,\varepsilon_0)$ from step 1.1. If $K_0=\varnothing$, [F1] forces every representation without nonzero $N$-invariants to be the zero representation, and any $\delta>0$ works. Otherwise suppose no uniform $\delta$ exists. For every positive integer $m$ there is a representation without nonzero $N$-invariants and a unit vector with $\Delta_Q<1/m$, by normalizing a nonzero vector violating the proposed bound $1/m$. As in step 1.1, AC chooses their normalized coefficient functions $\varphi_m$ from nonempty subsets of $\mathbb C^G$, and canonical GNS gives representations $(\pi_m,H_m)$ with unit vectors $\xi_m$, no nonzero $N$-invariants and $\Delta_Q^{\pi_m}(\xi_m)<1/m$. The Gram-isometry argument of step 1.1 transfers all these properties from any witness. For each $g\in Q^k$, telescoping gives $\|\pi_m(g)\xi_m-\xi_m\|\le k\Delta_Q^{\pi_m}(\xi_m)<k/m$; therefore [F14] gives $|\varphi_m(g)-1|\le\|\pi_m(g)\xi_m-\xi_m\|\to0$. Since the positive powers of $Q$ cover $G$, $\varphi_m(g)\to1$ at every $g\in G$. [F1, F2, F5, F7, F8, F14, step 1.1, algebra]

3.1 Since both orthogonal summands are $G$-invariant, Pythagoras gives, for every $q\in Q$, $\|\pi(q)\xi-\xi\|^2=\|\pi(q)\xi_N-\xi_N\|^2+\|\pi(q)\xi_\perp-\xi_\perp\|^2$. For nonempty $Q$ and $\xi_\perp\ne0$, step 2.2 supplies a $q$ whose second term is at least $\varepsilon^2\|\xi_\perp\|^2$, hence $\Delta_Q^\pi(\xi)\ge\varepsilon\|\xi_\perp\|$. If $Q$ is empty or $\xi_\perp=0$, the same inequality follows from step 2.2. By step 2.1 this proves the first bound. [F5, step 2.1, step 2.2, algebra]

3.2 Define $T:K_0\to\mathbb C^{\mathbb N_{>0}}$ by $T(g)=(\varphi_m(g))_m$ and put $X=T(K_0)$ with the product subspace topology. By [F10], $X$ is compact. It is Hausdorff: distinct points differ in some coordinate, whose distinct complex values have disjoint open disks; the inverse images of those disks separate the points. Thus $X$ is LCH, because the whole compact space is a neighborhood of each point. Its coordinate functions $f_m(x)=x_m$ are continuous, satisfy $|f_m|\le1$ by [F14], and converge pointwise to $1$ by step 2.3. Every continuous function on $X$ is bounded by compactness and has compact positive superlevel sets (closed subsets of $X$), so $C(X;\mathbb C)=C_0(X;\mathbb C)$ with its supremum norm. For any bounded complex-linear functional $L$, [F11] supplies a finite regular complex measure $\mu$ representing it. Applying [F12] with the finite measure $|\mu|$ and the constant majorant $2$ gives $\int_X|f_m-1|\,d|\mu|\to0$, hence $|L(f_m)-L(1)|\le\int_X|f_m-1|\,d|\mu|\to0$. Convergence for each functional implies convergence on every finite list of functionals, so $f_m\to1$ weakly in $C(X;\mathbb C)$. [F4, F10, F11, F12, F14, step 2.3]

4.1 For $n\in N$, $\pi(n)\xi_N=\xi_N$, so $\|\pi(n)\xi-\xi\|=\|\pi(n)\xi_\perp-\xi_\perp\|\le2\|\xi_\perp\|$ by [F2, F5]. Taking the supremum over $n$ and applying steps 2.1 and 3.1 proves the second inequality, including $N=\{e\}$ and $\xi_\perp=0$. [F2, F5, step 2.1, step 3.1]

5.1 The constant $1$ lies in the weak closure of the convex hull of $\{f_m:m\ge1\}$ and therefore, by [F13], in its norm closure. Choose a finite convex combination $f=\sum_{j=1}^r a_j f_{m_j}$ with $a_j\ge0$, $\sum_j a_j=1$ and $\|f-1\|_\infty<\varepsilon_0^2/2$. The finite direct sum $\rho=\bigoplus_{j=1}^r\pi_{m_j}$ is strongly continuous, has no nonzero $N$-invariant vector, and has the unit vector $\eta=(\sqrt{a_j}\xi_{m_j})_j$. Its coefficient is $\sum_j a_j\varphi_{m_j}(g)=f(T(g))$ for $g\in K_0$. Thus $\|\rho(g)\eta-\eta\|^2=2(1-\operatorname{Re}f(T(g)))<\varepsilon_0^2$ for every $g\in K_0$, contradicting the relative pair. A uniform $\delta>0$ consequently exists for unit vectors; homogeneity gives the asserted inequality for every nonzero vector, while the zero vector is immediate. The positive-power hypothesis excludes $Q=\varnothing$ since $G$ contains its identity. No bounded-word-length claim on $K_0$, Hausdorff hypothesis on $G$, or identity-neighborhood hypothesis on $Q$ was used. [F1, F2, F9, F13, step 1.1, step 2.3, step 3.2, construct, algebra] ∎
