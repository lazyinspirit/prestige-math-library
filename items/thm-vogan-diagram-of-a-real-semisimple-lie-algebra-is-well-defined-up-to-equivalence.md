---
id: thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence
kind: theorem
title: Vogan diagram for a fixed Cartan involution is well defined up to equivalence
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification, def-vogan-diagram, def-axiom-of-choice, def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-cayley-transform-of-a-theta-stable-cartan-subalgebra, def-cartan-involution-of-a-real-semisimple-lie-algebra, cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra, cor-semisimple-lie-algebras-are-centerless-and-perfect, thm-cartans-closed-subgroup-theorem, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, prop-commuting-lie-algebra-elements-have-multiplicative-exponentials, thm-conjugacy-of-maximal-tori, thm-analytic-and-root-system-weyl-groups-agree, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, prop-complexification-preserves-semisimplicity, thm-root-sl-two-triple, thm-root-string-property, thm-finite-dimensional-representations-of-sl-two, prop-brackets-of-root-spaces, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-torus-and-maximal-torus-in-a-compact-lie-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI §8, definition p.397; Problem 18 p.429 and its solution hint p.734, imaginary-simple-root reflection and painting"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 40, §40.2 and Lecture 41, §41.1, printed pp. 187-191"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra with Cartan involution $\theta$, and let
$(\mathfrak h_0,\Delta^{+})$ and $(\mathfrak h_0',(\Delta')^{+})$ be two choices
of a maximally compact $\theta$-stable Cartan subalgebra with a compatible
positive system ([[def-vogan-diagram]]). Then the Vogan diagrams of the triples
$(\mathfrak g_0,\mathfrak h_0,\Delta^{+})$ and
$(\mathfrak g_0,\mathfrak h_0',(\Delta')^{+})$ are equivalent abstract Vogan
diagrams in the sense of [[def-vogan-diagram]]. Consequently the Vogan diagram
of a real semisimple Lie algebra with a fixed Cartan involution is well defined
up to the standard equivalence.

## Facts & Assumptions

**Given:** AC; the real semisimple algebra, fixed Cartan involution, and two maximally compact theta-stable Cartans and compatible positive systems in the Statement. Write $B$ for the Killing form and $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$.

[A1] The Axiom of Choice [[def-axiom-of-choice]] covers the following Lie-group and root-theoretic interfaces.

[L1] A real-root Cayley transform increases the compact dimension by one; thus a maximally compact Cartan has no real roots ([[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]]). The compact/split parts and real/imaginary root conventions are those of [[def-theta-stable-cartan-subalgebra-and-compact-split-parts]] and [[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]].

[L2] $B_\theta(X,Y)=-B(X,\theta Y)$ is positive definite. An automorphism preserves $B$ by invariance of the trace defining it ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]]). The closed automorphism group has Lie algebra $\operatorname{Der}(\mathfrak g_0)=\operatorname{ad}\mathfrak g_0$, and $\mathfrak g_0$ is centerless ([[cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L3] Closed subgroups are Lie subgroups, exponentials give local identity charts, and commuting Lie-algebra elements have multiplicative exponentials ([[thm-cartans-closed-subgroup-theorem]], [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]], [[prop-commuting-lie-algebra-elements-have-multiplicative-exponentials]]). Tori are compact connected abelian closed subgroups ([[def-torus-and-maximal-torus-in-a-compact-lie-group]]); maximal tori of a compact connected group are conjugate ([[thm-conjugacy-of-maximal-tori]]).

[L4] A compact connected group's root reflections are realized by normalizer elements of its maximal torus, including trivial action on the central torus directions ([[thm-analytic-and-root-system-weyl-groups-agree]]).

[L5] Complexification preserves semisimplicity; for a complex Cartan, the root decomposition is direct with zero space the Cartan and one-dimensional nonzero root spaces ([[prop-complexification-preserves-semisimplicity]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]]).

[L6] Root $\mathfrak{sl}_2$ triples exist, root strings are consecutive with $p-q=\beta(h_\alpha)$, and finite-dimensional $\mathfrak{sl}_2$ modules are direct sums of modules with weights $m,m-2,\ldots,-m$ ([[thm-root-sl-two-triple]], [[thm-root-string-property]], [[thm-finite-dimensional-representations-of-sl-two]]). Root brackets respect sums of weights ([[prop-brackets-of-root-spaces]]), and a positive root is a nonnegative integral sum of simple roots ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[L7] Compatible systems are theta-stable; markings are the theta eigenvalues on fixed root lines. The abstract equivalence moves are diagram isomorphisms and the parity painting move at a painted fixed simple vertex ([[def-vogan-diagram]]). No arbitrary change-of-base move is part of this definition.

## Proof

**Proof technique:** direct.

1.1 Define $K=(\operatorname{Aut}(\mathfrak g_0)\cap O(B_\theta))^0$. By [L2]--[L3] it is a compact connected Lie group. An automorphism preserves $B_\theta$ exactly when it commutes with $\theta$, since it preserves the nondegenerate form $B$. Differentiating shows that its Lie algebra consists of $\operatorname{ad}X$ commuting with $\theta$, equivalently $\operatorname{ad}(X-\theta X)=0$. Centerlessness gives $\operatorname{Lie}K=\operatorname{ad}\mathfrak k_0$. Conversely exponentials of these derivations preserve both forms. A connected group is generated by an exponential neighborhood, since the generated subgroup and its other cosets are open. Thus every element of $K$ is a product of $\exp(\operatorname{ad}X)$ with $X\in\mathfrak k_0$, is real inner, and commutes with $\theta$. This construction requires no finite-center integration of $\mathfrak g_0$. [L2, L3, algebra]

1.2 Write $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$. It has no real roots by [L1]. A root vanishes on $\mathfrak t_0$ precisely when it is real, so [L5] gives $Z_{\mathfrak g_0}(\mathfrak t_0)=\mathfrak h_0$ and $Z_{\mathfrak k_0}(\mathfrak t_0)=\mathfrak t_0$. For completeness, the complex Cartan assertion uses the nilpotence and self-normalization of the real Cartan: compact adjoints are skew-adjoint and split adjoints self-adjoint for $B_\theta$, so on the invariant Cartan their nilpotent restrictions are zero. Thus the real Cartan is abelian; comparison of real and imaginary parts shows its complexification is self-normalizing, hence a complex Cartan. The same adjoint identities on the ambient algebra make root values imaginary on $\mathfrak t_0$ and real on $\mathfrak a_0$. In particular $\mathfrak t_0$ is maximal abelian in $\mathfrak k_0$. The same statements hold for the second Cartan. [L1, L2, L5, algebra]

2.1 Identify $\mathfrak k_0$ with $\operatorname{Lie}K$ using injective $\operatorname{ad}$. For a maximal abelian subalgebra $\mathfrak b$, the closure of $\exp\mathfrak b$ in $K$ is compact, connected and abelian: exponentials commute by [L3], connectedness is preserved by closure, and continuity of commutators extends abelianness to the closure. Its Lie algebra contains $\mathfrak b$ and is abelian, so equals $\mathfrak b$. It is a maximal torus: a larger torus would give a larger abelian algebra, or would have the same algebra and contain the first as an open subgroup by exponential charts, forcing equality by connectedness. Apply maximal-torus conjugacy to the compact parts in step 1.2. It supplies $k\in K$ taking $\mathfrak t_0$ to $\mathfrak t_0'$, hence taking their centralizers $\mathfrak h_0$ to $\mathfrak h_0'$. The transported root map is $\alpha\mapsto\alpha\circ k^{-1}$, preserves Cartan integers, and intertwines theta and its eigenvalues on root lines. Thus it gives a diagram isomorphism from the first diagram to the diagram of the transported positive system on the second Cartan. [L3, L7, step 1.1, step 1.2, algebra]

2.2 It remains to compare two compatible systems on one fixed Cartan $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$. Put $E=i\mathfrak t_0$. Every root restricts nontrivially to $E$ by step 1.2. Each compatible system is realized by a point of $E$: choose a point $H$ realizing it in the real root space $i\mathfrak t_0\oplus\mathfrak a_0$ of [L7] and average $H$ with $\theta H$. Every positive root is positive on both points, so the average remains in the same open chamber and lies in $E$. Consider the finitely many distinct hyperplanes $\ker(\alpha|_E)$. Chambers of their complement therefore parametrize these systems. Any two such chambers can be joined by a finite sequence of adjacent chambers: choose interior endpoints and a generic polygonal path avoiding intersections of two distinct hyperplanes and crossing each hyperplane transversely. Such a path exists by avoiding finitely many proper affine subspaces when selecting intermediate vertices; it meets only finitely many walls. In dimension one there is just the wall $0$; in dimension zero there are no roots and nothing to prove. [L7, step 1.2, algebra]

3.1 Fix one crossing and a point $H_0$ of its wall lying on no other distinct wall. First suppose some nonzero weight $\gamma$ of $\mathfrak k_{\mathbb C}$ relative to $\mathfrak t_{\mathbb C}$ has this kernel. The torus from step 2.1 has Cartan algebra $\mathfrak t_{\mathbb C}$ in $\mathfrak k_{\mathbb C}$; thus $\gamma$ is a compact-group root. By [L4] an element of $K$ normalizing this torus acts on $E$ by a reflection fixing the wall pointwise. It normalizes $\mathfrak h_0=Z_{\mathfrak g_0}(\mathfrak t_0)$, commutes with $\theta$, and permutes the full root restrictions. It therefore interchanges the two adjacent chambers: near $H_0$ it reverses the normal coordinate and fixes the wall, while no other hyperplane occurs locally. The resulting map of bases preserves all theta eigenvalues and Cartan integers. The diagrams are isomorphic, an allowed move of [L7]. [L4, L7, step 2.1, step 2.2, algebra]

3.2 If no such compact-group root exists, every full root whose restriction has this wall is imaginary and noncompact. Indeed a compact imaginary root already provides a nonzero weight in $\mathfrak k_{\mathbb C}$. A complex root $\alpha$ provides one as well: if $0\ne X\in\mathfrak g_\alpha$, then $X+\theta X\ne0$, lies in $\mathfrak k_{\mathbb C}$, and has weight $\alpha|_E=(\theta\alpha)|_E$. This rules out both cases. Imaginary roots vanish on $\mathfrak a_0$, so proportional restrictions to $E$ mean proportional full roots. Reducedness leaves only $\alpha,-\alpha$ on this wall. Orient $\alpha$ to be positive before crossing. It is simple: a decomposition into two positive roots would force both to vanish at $H_0$, because all positive roots are nonnegative there; the only such positive root is $\alpha$, an impossibility. Crossing changes the sign of just this pair. Hence the second system is $s_\alpha$ of the first: for another positive root, reflection changes only its simple-$\alpha$ coefficient, and some other positive simple coefficient remains, so the one-sign property in [L6] keeps it positive. The root $\alpha$ is fixed by theta and painted. [L5, L6, L7, step 2.2, algebra]

4.1 We verify the painting change in step 3.2. Normalize the root triple $e,f,h_\alpha$ of [L6]. Since $\alpha$ is imaginary noncompact, $\theta e=-e$, $\theta f=-f$, and $\theta h_\alpha=h_\alpha$. For another fixed simple root $\beta$, put $m=-\beta(h_\alpha)\ge0$. Its string is $\beta,\beta+\alpha,\ldots,\beta+m\alpha$: $\beta-\alpha$ is not a root by the one-sign property, and [L6] determines the upper endpoint. This string is an irreducible root-$\mathfrak{sl}_2$ module. To see this explicitly, all its weight spaces are one-dimensional by [L5]; the irreducible summand intervals in [L6] are centered at the same weight zero and overlap if more than one occurs, contradicting one-dimensionality. Thus $(\operatorname{ad}e)^m$ maps a nonzero $X_\beta$ to a nonzero vector of weight $s_\alpha\beta$. Applying theta to this iterated bracket gives eigenvalue $(-1)^m\varepsilon(\beta)$. The color of $-\alpha$ stays painted, and nonfixed vertices remain paired because $s_\alpha$ commutes with theta. Relabel the new simple roots $s_\alpha\beta$ by their old positions; Cartan integers and the involution are unchanged. Colors of the other fixed vertices toggle exactly for odd $\beta(h_\alpha)$, which is precisely $F_\alpha$ in [L7]. [L5, L6, L7, step 3.2, algebra]

5.1 By step 2.2 a finite sequence of wall crossings connects the two compatible systems. Each crossing is an allowed diagram isomorphism by step 3.1 or an allowed painting move by steps 3.2 and 4.1. Combining this sequence with the Cartan conjugacy isomorphism of step 2.1 proves the claimed equivalence. The empty diagram of the zero algebra uses a sequence of zero moves. Compact factors cause no exception: their wall crossings are all of the first kind. Throughout theta is fixed, as required by the Statement. [A1, step 2.1, step 2.2, step 3.1, step 4.1] ∎
