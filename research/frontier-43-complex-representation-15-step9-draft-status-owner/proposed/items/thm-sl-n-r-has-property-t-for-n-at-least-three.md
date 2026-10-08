---
status: draft
id: thm-sl-n-r-has-property-t-for-n-at-least-three
kind: theorem
title: SLn(R) has property (T) for n at least three
deps:
  - cor-triangle-inequality-for-inner-product-norm
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-axiom-of-choice
  - def-compact-space
  - def-continuous-map-top
  - def-countable-choice
  - def-determinant-of-a-square-matrix
  - def-elementary-matrix
  - def-external-semidirect-product
  - def-hilbert-space
  - def-kazhdan-pair-and-kazhdan-constant
  - def-kazhdans-property-t
  - def-matrix-product-and-identity-matrix
  - def-metric-topology
  - def-product-topology
  - def-relative-normed-convexity-and-separation
  - def-relative-property-t-for-a-pair
  - def-strongly-continuous-unitary-representation
  - def-subgroup
  - def-subspace-topology-top
  - def-topological-group
  - def-topological-space
  - ex-general-and-special-linear-lie-groups
  - lem-normal-relative-property-t-controls-distance-to-invariant-vectors
  - lem-reverse-triangle-inequality-in-a-normed-space
  - lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups
  - lem-sl2-r-semidirect-r2-has-relative-property-t
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-external-semidirect-product-is-a-group
  - thm-matrix-multiplication-laws
  - thm-product-universal-property
  - thm-projection-onto-a-nonempty-closed-convex-set
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. It supports the set-sized coefficient/GNS/PVM/probability-subsequence steps in the relative-(T) supplier, set-sized coefficient selection and Hilbert decomposition in the normal-relative supplier, and ACω required by the embedded Lie-group interface. Through AC it supplies Countable Choice for the least-norm supplier. The bounded-generation pivot choices use least available indices, and no choice is made from a proper class."
verification:
  precheck: pass
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Theorem 1.4.15 and complete proof, printed pp. 54–55/PDF pp. 60–61; the source proves the stronger local-field theorem by relative (T) and Mautner's lemma. This item follows the owner-approved real bounded-generation/least-norm route instead."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups (complete notes with exercise sheets)"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Exercises for the PCMI Summer School, §2 I.1–I.4, II.1, III.1–III.5 and IV, printed pp. 2–4/PDF pp. 32–34: bounded generation and relative-(T) strategies are posed as exercises without solutions; they are not proof support for the local suppliers."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every integer
$n\ge3$, the group $\mathrm{SL}_n(\mathbb R)$ with its embedded matrix Lie
group topology ([[ex-general-and-special-linear-lie-groups]]) has Kazhdan's
property (T) ([[def-kazhdans-property-t]]).

## Facts & Assumptions

**Given:** AC; an integer $n\ge3$; the matrix group $\mathrm{SL}_n(\mathbb R)$; the relative-(T) supplier for $\mathrm{SL}_2(\mathbb R)\ltimes\mathbb R^2$; the quantitative normal-relative property-(T) inequalities; and bounded generation by elementary transvections.

[F1] $\mathrm{SL}_n(\mathbb R)$ and $\mathrm{SL}_2(\mathbb R)$ carry their embedded matrix Lie group topologies. Finite-coordinate block insertions and coordinate restrictions are continuous for the product and subspace topologies; the block determinant and product follow the finite matrix formulas. ([[ex-general-and-special-linear-lie-groups]], [[def-product-topology]], [[thm-product-universal-property]], [[def-subspace-topology-top]], [[def-continuous-map-top]], [[def-topological-group]], [[def-matrix-product-and-identity-matrix]], [[thm-matrix-multiplication-laws]], [[def-determinant-of-a-square-matrix]])

[F2] The external semidirect product has multiplication $(A,v)(A',v')=(AA',v+Av')$ and is a group. Its translation subgroup is closed and normal, and the four-element set in [[lem-sl2-r-semidirect-r2-has-relative-property-t]] is a relative Kazhdan pair for this group and subgroup. ([[def-external-semidirect-product]], [[thm-external-semidirect-product-is-a-group]], [[def-subgroup]], [[def-relative-property-t-for-a-pair]])

[F3] The second quantitative inequality of the normal-relative supplier is
used: for a relative Kazhdan pair $(Q,\delta)$ for $(G,N)$,
$$\sup_{v\in N}\lVert\pi(v)\xi-\xi\rVert\le2\delta^{-1}\Delta_Q^\pi(\xi).$$
([[lem-normal-relative-property-t-controls-distance-to-invariant-vectors]])

[F4] Use the bounded-generation supplier's row and column labels $1,\ldots,n$: $e_i$ is the coordinate vector with zero-based index $i-1$, and $e_{ij}$ has zero-based matrix indices $(i-1,j-1)$. Every $g\in\mathrm{SL}_n(\mathbb R)$ is a product of at most $M(n)=2n^2+6n$ elementary transvections $E_{ij}(t)=I_n+t e_{ij}$. ([[lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups]], [[def-elementary-matrix]])

[F5] Each $\pi(g)$ is a norm-isometric homeomorphism with inverse $\pi(g^{-1})$; a product of $r$ factors each moving $\xi$ by at most $c$ moves it by at most $rc$ (telescoping and the triangle inequality). ([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]], [[cor-triangle-inequality-for-inner-product-norm]])

[F6] The set of all closed convex subsets of a Hilbert space containing a given orbit has a nonempty intersection, which is closed and convex. A closed ball is closed by the reverse triangle inequality and convex by the triangle inequality. ([[def-relative-normed-convexity-and-separation]], [[def-topological-space]], [[def-metric-topology]], [[lem-reverse-triangle-inequality-in-a-normed-space]], [[cor-triangle-inequality-for-inner-product-norm]])

[F7] Under Countable Choice, every nonempty closed convex subset of a Hilbert space has a unique nearest point to $0$; under AC this applies by the declared AC-to-Countable-Choice implication. ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-projection-onto-a-nonempty-closed-convex-set]])

[F8] A compact Kazhdan pair applied to a representation with almost invariant vectors yields a nonzero invariant vector: almost invariance provides a witnessing unit vector on its compact first set. ([[def-kazhdan-pair-and-kazhdan-constant]], [[def-almost-invariant-vectors-for-a-unitary-representation]], [[def-kazhdans-property-t]])

[F9] AC implies Countable Choice through the declared theorem; the semidirect and normal-relative suppliers also use AC for their set-indexed constructions. ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[lem-sl2-r-semidirect-r2-has-relative-property-t]], [[lem-normal-relative-property-t-controls-distance-to-invariant-vectors]])

## Proof

**Proof technique:** Embed finitely many copies of the relative-(T) semidirect product, use their translation subgroups to control every elementary transvection, then find a nonzero fixed vector as the least-norm point of a bounded closed convex orbit hull.

1.1 Fix distinct indices $i,j$ and $k\notin\{i,j\}$ in $\{1,\ldots,n\}$, using [F4]'s coordinate labels. In the coordinate order $(e_i,e_k,e_j)$, define $\theta_{ij,k}(A,v)$ to have block $\begin{pmatrix}A&v\\0&1\end{pmatrix}$ and to fix all other basis vectors. Its determinant is $\det A=1$, and block multiplication gives $\theta(A,v)\theta(A',v')=\theta(AA',v+Av')$. The map and its inverse (coordinate restriction) are continuous by [F1], so its image $G_{ij,k}$ is a topological subgroup isomorphic to $\mathrm{SL}_2(\mathbb R)\ltimes\mathbb R^2$. Its translation subgroup $N_{ij,k}=\theta_{ij,k}(\{I\}\times\mathbb R^2)$ is closed and normal, and contains $E_{ij}(t)$ as $v=(t,0)$. [F1, F2, F4, construct]

2.1 Let $(Q_{\mathrm{rel}},\delta)$ be the relative Kazhdan pair supplied by [F2], and let $Q_{ij,k}=\theta_{ij,k}(Q_{\mathrm{rel}})$. Each $(Q_{ij,k},\delta)$ is a relative Kazhdan pair for $(G_{ij,k},N_{ij,k})$. Let $Q_*:=\bigcup_{i\ne j,\ k\notin\{i,j\}}Q_{ij,k}$; this is a finite set and hence compact. Every transvection $E_{ij}(t)$ belongs to at least one $N_{ij,k}$, since for each $i\ne j$ there is a remaining index $k$. [F2, step 1.1, construct]

3.1 Put $M=M(n)$ from [F4] and $\varepsilon=\delta/(4M)$. Let $\pi$ be a strongly continuous unitary representation of $\mathrm{SL}_n(\mathbb R)$ with a $(Q_*,\varepsilon)$-invariant unit vector $\xi$. For each triple, $Q_{ij,k}\subseteq Q_*$ gives $\Delta_{Q_{ij,k}}^\pi(\xi)\le\varepsilon$. Applying the second inequality [F3] to the restriction of $\pi$ to $G_{ij,k}$ yields $\sup_{v\in N_{ij,k}}\lVert\pi(v)\xi-\xi\rVert\le2\varepsilon/\delta=1/(2M)$. Hence every elementary transvection moves $\xi$ by at most $1/(2M)$. [F3, F4, step 2.1]

4.1 Every $g\in\mathrm{SL}_n(\mathbb R)$ is a product of at most $M$ transvections by [F4]. Telescoping along such a product and using [F5] gives $\lVert\pi(g)\xi-\xi\rVert\le M/(2M)=1/2$. Therefore the orbit $\pi(G)\xi$ lies in the closed ball of radius $1/2$ centered at $\xi$. Let $C$ be the intersection of all closed convex subsets of $H$ containing this orbit. By [F6], $C$ is nonempty, closed and convex, and it is contained in that closed ball. [F4, F5, F6, step 3.1, construct]

5.1 For each $g\in G$, the set $\pi(g)C$ is closed and convex and contains the orbit, so minimality of the intersection gives $\pi(g)C\supseteq C$; applying the same argument to $g^{-1}$ gives equality. By [F7], $C$ has a unique point $\eta$ of least norm. Since $C$ is $G$-invariant and $\pi(g)$ preserves norms, uniqueness implies $\pi(g)\eta=\eta$ for every $g$. Moreover $\lVert\eta-\xi\rVert\le1/2$, so the reverse triangle inequality and $\lVert\xi\rVert=1$ give $\lVert\eta\rVert\ge1/2>0$. Thus every representation with a $(Q_*,\varepsilon)$-invariant unit vector has a nonzero invariant vector; almost invariance provides such a vector because $Q_*$ is compact, so $G$ has property (T) by [F8]. AC is used through the relative-(T), normal-distance, and least-norm suppliers as stated in the axiom audit. [F2, F7, F8, F9, step 4.1] ∎
