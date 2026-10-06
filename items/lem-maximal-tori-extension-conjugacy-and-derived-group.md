---
id: lem-maximal-tori-extension-conjugacy-and-derived-group
kind: lemma
title: Maximal tori, field extensions, normal subgroups and derived groups
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 18
deps: [def-axiom-of-choice, def-borel-subgroup-and-maximal-torus, def-group-of-multiplicative-type-and-torus, lem-fixed-loci-and-centralizers-of-torus-actions-are-connected, lem-nilpotent-group-structure-and-maximal-torus-criterion, thm-unipotent-group-triangular-criterion, def-unipotent-algebraic-group, thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field, thm-chevalley-centralizer-radical-and-reductive-centralizers, lem-nonempty-smooth-scheme-finite-separable-point, thm-multiplicative-type-groups-and-galois-character-modules, lem-nonaffine-group-image-exact-quotient-properties, lem-nonaffine-reduced-neutral-subgroup-over-perfect-field, lem-derived-subgroup-properties, thm-nonaffine-affine-normal-group-quotient-affine, lem-unipotent-and-diagonalizable-intersection-is-trivial]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 17 (17.81)-(17.87); Appendix A (A.48)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a smooth connected affine group variety over $k$. (a) A torus $T\subseteq G$ is maximal iff $T_{k'}$ is maximal in $G_{k'}$ for every field extension $k'/k$; equivalently iff $C_G(T)/T$ contains no nontrivial torus. (b) There is a maximal torus of $G_{k^{\mathrm a}}$ defined over $k$. (c) If $G$ is reductive, then a torus $T\subseteq G$ is maximal iff $C_G(T)=T$. (d) If $N\subseteq G$ is a smooth connected normal subgroup variety and $T$ a maximal torus of $G$, then $(T\cap N)_t$, the largest subtorus of $T\cap N$, is a maximal torus of $N$, and every maximal torus of $N$ arises this way. (e) If $G=G_1\cdots G_n$ is an almost-direct product of connected subgroup varieties, then every maximal torus $T$ of $G$ is an almost-direct product $T=(T\cap G_1)_t\cdots(T\cap G_n)_t$. (f) Any two maximal tori of $G$ become conjugate over some finite separable extension of $k$; in particular they are conjugate over a separably closed field.

## Facts & Assumptions

**Given:** AC, smooth connected affine $G$ over arbitrary $k$, and a torus $T\subseteq G$. The subscript $t$ denotes the largest subtorus of a group of multiplicative type, namely its reduced neutral component.

[F1] Torus centralizers in smooth connected affine groups are smooth connected. The maximal-torus criterion says $T$ is maximal if and only if $C_G(T)/T$ contains no nontrivial $k$-torus. A smooth connected nilpotent affine group has a central largest multiplicative-type subgroup which is a torus, with unipotent quotient. ([[lem-fixed-loci-and-centralizers-of-torus-actions-are-connected]], [[lem-nilpotent-group-structure-and-maximal-torus-criterion]])

[F2] Unipotence is preserved and detected under field extension: under AC its faithful upper-unitriangular embedding persists, and descent follows from $(V^G)\otimes K=(V\otimes K)^{G_K}$ for finite-dimensional $V$. Over an algebraically closed field, maximal tori are conjugate; for a reductive group $C_G(T)=T$ when $T$ is geometrically maximal. ([[thm-unipotent-group-triangular-criterion]], [[def-unipotent-algebraic-group]], [[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]], [[thm-chevalley-centralizer-radical-and-reductive-centralizers]])

[F3] A nonempty smooth finite-type scheme has a point over a finite separable extension. Multiplicative-type rigidity makes a connected group act trivially by group automorphisms on a torus. Thus $N_G(T)^\circ=C_G(T)$; smoothness of the latter and translation to all geometric components show $N_G(T)$ smooth. ([[lem-nonempty-smooth-scheme-finite-separable-point]], [[lem-fixed-loci-and-centralizers-of-torus-actions-are-connected]]; Milne12.36–12.40.)

[F4] Groups of multiplicative type are classified under AC by Galois character modules. Their largest subtorus corresponds to the quotient of the character module by its torsion subgroup, so its formation commutes with field extension. Affine homomorphic images are closed and satisfy the kernel/image exact theorem; reductions over perfect fields are subgroup varieties, and smooth connected groups have smooth connected derived subgroup. ([[thm-multiplicative-type-groups-and-galois-character-modules]], [[lem-nonaffine-group-image-exact-quotient-properties]], [[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]], [[lem-derived-subgroup-properties]])

[F5] The precise extra arbitrary-field input is Milne17.81: a smooth connected affine group over $k$ containing no nontrivial $k$-torus is unipotent. The full source proof uses the central multiplicative factor for nilpotent groups; over infinite fields it reduces dimension through a noncentral semisimple Lie element and its centralizer, and uses the source infinitesimal-isogeny reduction when necessary (17.79–17.80). Over finite fields the source maximal-torus existence theorem17.99 gives a geometrically maximal torus. Together with unipotence detection this proves the arbitrary-field assertion, not a descent of a chosen torus from a finite extension. This is the external input to17.82, and no commutativity of a general torus centralizer is assumed.

[F6] Under AC, normal affine-group quotients are represented affine fppf quotients. Over perfect fields a smooth connected commutative affine group is the product of its unipotent and multiplicative-type factors (Milne16.13). A torus cannot receive a nontrivial homomorphic image of a unipotent group. An almost-direct product means the multiplication map from the product of the subgroup varieties is a surjective homomorphism with finite kernel; its factors commute and that kernel is central. ([[thm-nonaffine-affine-normal-group-quotient-affine]], [[lem-unipotent-and-diagonalizable-intersection-is-trivial]])

## Proof

**Given:** AC and smooth connected affine $G$ over arbitrary $k$.

1.1 Put $C=C_G(T)$ and $Q=C/T$, smooth connected affine by [F1] and [F6]. The maximal-torus criterion and [F5] give $T$ maximal in $G$ if and only if $Q$ is unipotent. Centralizers and represented normal quotients commute with field extension, and unipotence is detected and preserved by it [F2]. Applying the same criterion over every extension proves (a). No larger torus over an extension is asserted to descend to $k$. [F1, F2, F5, F6]

2.1 The trivial torus exists and torus dimensions are bounded by $\dim G$. Choose a torus of maximum dimension over $k$. It is maximal, and step1.1 makes its algebraic-closure extension maximal. This proves (b). For reductive $G$, a maximal $T$ is geometrically maximal by step1.1, so [F2] gives $C_{G_{k^{\mathrm a}}}(T_{k^{\mathrm a}})=T_{k^{\mathrm a}}$. Faithfully flat descent gives $C_G(T)=T$. Conversely this equality rules out a larger torus because any torus containing $T$ centralizes it. This proves (c). [F2, step 1.1, choose]

3.1 Let $N$ be smooth connected normal in $G$, and choose a maximal torus $T'$ of $N$. Among the tori of $G$ containing $T'$, choose one of maximal dimension, $T''$; it is maximal in $G$. The largest subtorus $(T''\cap N)_t$ contains $T'$ and is a torus of $N$, so maximality of $T'$ gives equality. For any maximal $T$ of $G$, step1.1 and geometric conjugacy supply $g\in G(k^{\mathrm a})$ with $T_{k^{\mathrm a}}=gT''_{k^{\mathrm a}}g^{-1}$. Normality of $N$ and the field compatibility in [F4] give $(T\cap N)_{t,k^{\mathrm a}}=gT'_{k^{\mathrm a}}g^{-1}$, a maximal torus of $N_{k^{\mathrm a}}$. Step1.1 applied to $N$ descends maximality. The construction of $T''$ also proves that every maximal torus of $N$ arises as such an intersection. This proves (d), including possible nonreduced finite parts of $T\cap N$ which are not confused with its largest subtorus. [F2, F4, step 1.1, step 2.1, choose]

4.1 For (e), set $T_i=(T\cap G_i)_t$. The almost-product factors are normal in $G$, so step3.1 makes each $T_i$ maximal in $G_i$. The image $S=T_1\cdots T_n$ is a torus contained in $T$, of dimension $\sum_i\dim T_i$ because the multiplication map has finite kernel. We show it maximal after algebraic closure. If a larger torus $T'\supseteq S$ existed, its inverse image $P$ in $G_1\times\cdots\times G_n$ would have finite central kernel and torus quotient. Its smooth connected reduced neutral component $P_0$ maps onto $T'$ by dimension and [F4]. Its derived subgroup lies in the finite central kernel and is smooth connected, hence trivial; thus $P_0$ is commutative. By [F6] its unipotent factor maps trivially to $T'$ and is finite, so is trivial. Hence $P_0$ is a torus. But $T_1\times\cdots\times T_n$ is maximal in the product (each torus projects into a torus of each factor), and geometric conjugacy of maximal tori [F2] bounds the dimension of every torus by that of this maximal product torus. Thus $\dim T'=\dim P_0\le\sum_i\dim T_i=\dim S$, a contradiction. Thus $S$ is maximal, and since $S\subseteq T$, $S=T$. Its finite product kernel gives the asserted almost-direct torus decomposition, and step1.1 descends it to $k$. [F2, F4, F6, step 1.1, step 3.1]

5.1 Finally let $T,T'$ be maximal. By step1.1 they become conjugate over $k^{\mathrm a}$. The transporter $X(R)=\{g\in G(R):gT_Rg^{-1}=T'_R\}$ is represented by a closed finite-type subscheme of affine $G$: impose both conjugate subgroup inclusions, expand the conjugation pullbacks of finite ideal generators in finite linearly independent coefficient lists of the torus coordinate algebra, and set all these coefficients to zero. This gives the two closed transporter conditions on every base algebra. If $g_0\in X(k^{\mathrm a})$, multiplication $h\mapsto g_0h$ identifies $N_G(T)_{k^{\mathrm a}}$ with $X_{k^{\mathrm a}}$, with inverse $g\mapsto g_0^{-1}g$. Thus $X$ is nonempty and smooth by [F3]. Its finite separable point in [F3] supplies the desired conjugating element over a finite separable extension of $k$. Over a separably closed $k$ that extension is $k$ itself. This proves (f) and all clauses. [F2, F3, F4, step 1.1, construct] ∎

