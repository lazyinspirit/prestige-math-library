---
id: thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications
kind: theorem
title: Vogan and Satake diagrams give equivalent real form classifications
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-classification-of-real-forms-by-vogan-diagrams, def-satake-diagram, def-vogan-diagram, thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification, thm-restricted-root-space-decomposition, def-axiom-of-choice, thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence, thm-conjugacy-of-compact-real-forms, thm-conjugacy-of-cartan-involutions, thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one, def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-cayley-transform-of-a-theta-stable-cartan-subalgebra, def-maximal-split-abelian-subspace-and-real-rank, thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k, def-complexification-of-a-real-lie-algebra, def-restricted-root-and-restricted-root-space, thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals, def-simple-semisimple-and-reductive-lie-algebras]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §7, Propositions 6.69-6.72, printed pp. 389-394; §8, Theorems 6.74 and 6.88 with their proofs, printed pp. 399-406; §10, Theorems 6.96 and 6.105 with Figures 6.1-6.3, printed pp. 408-422; §11, restricted roots in the classification, printed pp. 422-426; §12, Problem 7, printed p. 427"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra and let $\mathfrak g_0,\mathfrak g_0'$ be real forms of
$\mathfrak g$. Let $V(\mathfrak g_0)$ denote the equivalence class of the Vogan
diagram of $\mathfrak g_0$ ([[def-vogan-diagram]]) and
$S(\mathfrak g_0)$ the equivalence class of its Satake diagram
([[def-satake-diagram]]), both formed with the help of a Cartan involution and
the appropriate Cartan subalgebra. Then:

1. $V(\mathfrak g_0)=V(\mathfrak g_0')$ if and only if
   $\mathfrak g_0$ and $\mathfrak g_0'$ are isomorphic;
2. $S(\mathfrak g_0)=S(\mathfrak g_0')$ if and only if
   $V(\mathfrak g_0)=V(\mathfrak g_0')$, and the assignment
   $V(\mathfrak g_0)\mapsto S(\mathfrak g_0)$ is a bijection between the Vogan
   classes and the Satake classes realized by real forms;

so the two decorations determine the same real-form isomorphism classes. The
two decorations are nevertheless not literally identical: the Vogan diagram
records the involution induced by a Cartan involution on the simple roots of a
maximally compact Cartan subalgebra and paints its noncompact imaginary simple
roots, while the Satake diagram colours the imaginary simple roots of a
maximally split Cartan subalgebra black, leaves the remaining vertices white,
and joins two distinct white vertices by an arrow exactly when their
restrictions to the split part $\mathfrak a_0$ agree.

## Facts & Assumptions

**Given:** The Axiom of Choice; a complex semisimple $\mathfrak g$ with real forms $\mathfrak g_0,\mathfrak g_0'$; for each form a Cartan involution $\theta$ with Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, a maximally compact $\theta$-stable Cartan subalgebra $\mathfrak h_0$ with complexification $\mathfrak h$ and compatible positive system used for the Vogan diagram, and a maximally split $\theta$-stable Cartan subalgebra $\mathfrak h_0^{s}=\mathfrak t_0\oplus\mathfrak a_0$ with compatible positive system used for the Satake diagram.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the conjugacy statements of [L2] and [L4] and through the classification quoted in [L7].

[L1] The Vogan diagram of a real semisimple Lie algebra is well defined up to equivalence, independently of the Cartan involution, the maximally compact $\theta$-stable Cartan subalgebra and the compatible positive system; two real forms with equivalent Vogan diagrams are isomorphic; every equivalence class of abstract Vogan diagrams over the root system of a complex simple Lie algebra is realized by a real form; and real semisimple Lie algebras are direct sums of simple ideals ([[thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence]], [[thm-classification-of-real-forms-by-vogan-diagrams]], [[thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]], [[def-simple-semisimple-and-reductive-lie-algebras]]).

[L2] Cartan involutions of a real semisimple Lie algebra are conjugate by real inner automorphisms, every Cartan subalgebra of $\mathfrak g_0$ is conjugate to a $\theta$-stable one, maximally compact $\theta$-stable Cartan subalgebras are mutually conjugate, and maximally noncompact (maximally split) $\theta$-stable Cartan subalgebras are mutually conjugate ([[thm-conjugacy-of-cartan-involutions]], [[thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one]], [[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]]).

[L3] A $\theta$-stable Cartan subalgebra $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ is maximally split exactly when $\mathfrak a_0$ is a maximal abelian subspace of $\mathfrak p_0$, exactly when $\mathfrak h_0$ has no noncompact imaginary root; the real roots of a $\theta$-stable Cartan subalgebra admit real-root Cayley transforms increasing the compact dimension, the noncompact imaginary roots admit noncompact-imaginary Cayley transforms increasing the noncompact dimension, and the two constructions are inverse to one another ([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]], [[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]], [[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]]).

[L4] Any two compact real forms of $\mathfrak g$ are conjugate by an inner automorphism, and any two maximal abelian subspaces of $\mathfrak p_0$ are conjugate by $\operatorname{Ad}(K)$ for the compact group of the global Cartan decomposition ([[thm-conjugacy-of-compact-real-forms]], [[thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k]], [[def-maximal-split-abelian-subspace-and-real-rank]]).

[L5] The Satake diagram of a quadruple $(\mathfrak g_0,\mathfrak h_0^{s},\Sigma^{+},\Phi^{+})$ is the Dynkin diagram of $\Phi$ with the black/white colouring given by the vanishing of the restriction to $\mathfrak a_0$ and the arrow pairing given by equality of nonzero restrictions; two Satake diagrams are equivalent when they are related by a diagram isomorphism and by changes of base; and for every simple root outside the span of the imaginary simple roots the root $-\theta\alpha$ differs from a simple root by an element of that span, so that two distinct white simple roots have equal restriction exactly when they are paired by the resulting involution ([[def-satake-diagram]]).

[L6] The restricted-root decomposition $\mathfrak g_0=\mathfrak g_0^{0}\oplus\bigoplus_{\lambda\in\Sigma}\mathfrak g_0^{\lambda}$ with $\Sigma$ finite holds for a maximal abelian $\mathfrak a_0\subseteq\mathfrak p_0$, $\theta\mathfrak g_0^{\lambda}=\mathfrak g_0^{-\lambda}$, and the restricted roots are exactly the nonzero restrictions to $\mathfrak a_0$ of the roots of $(\mathfrak g,\mathfrak h)$, with $\mathfrak g_0^{\lambda}\otimes_{\mathbb R}\mathbb C=\bigoplus_{\alpha|_{\mathfrak a_0}=\lambda}\mathfrak g_\alpha$ ([[thm-restricted-root-space-decomposition]], [[def-restricted-root-and-restricted-root-space]], [[def-complexification-of-a-real-lie-algebra]]).

[L7] The source records, for every noncomplex simple real Lie algebra, the real rank and the restricted-root system with its multiplicities computed from the maximally compact data, and its classification theorem lists all simple real Lie algebras as the complex simple algebras regarded as real, the compact and split forms, the classical matrix algebras in their admissible ranges, and the twelve exceptional noncompact noncomplex forms of Figures 6.2 and 6.3, with $\mathfrak{so}^{*}(8)\cong\mathfrak{so}(6,2)$ the only isomorphism among the entries (Source, Theorem 6.105 and its remark, printed pp. 421-422; tables (6.107) and (6.108), printed pp. 424-425; Figures 6.1-6.3, printed pp. 413-420).

## Proof
**Proof technique:** direct.

1.1 The Vogan assignment of [L1] depends only on the isomorphism class of $\mathfrak g_0$: if $\varphi\colon\mathfrak g_0\to\mathfrak g_0'$ is an isomorphism, then $\varphi\theta\varphi^{-1}$ is a Cartan involution of $\mathfrak g_0'$ and $\varphi(\mathfrak h_0)$ is a maximally compact Cartan subalgebra for it, so the Vogan diagram computed from these data is the image under $\varphi$ of the diagram of $\mathfrak g_0$, and by [L1] it is equivalent to the diagram computed from any other choices. [L1, algebra]

1.2 The Satake assignment of [L5] is well defined up to the equivalence of [[def-satake-diagram]]. Indeed, a second maximally split $\theta$-stable Cartan subalgebra is conjugate to $\mathfrak h_0^{s}$ by a real inner automorphism of $\mathfrak g_0$ by [L2], and an inner automorphism carries roots, root spaces, the Cartan involution, the restricted-root system and the compatible positive systems to their images, hence carries the Satake diagram to an equivalent one; and for a fixed Cartan subalgebra two compatible positive systems differ by a change of base, which is exactly the second generating move of the equivalence relation. If $\varphi\colon\mathfrak g_0\to\mathfrak g_0'$ is an isomorphism, then $\varphi$ carries the whole Satake datum of $\mathfrak g_0$ to a Satake datum of $\mathfrak g_0'$ with the same diagram, because a Cartan involution of $\mathfrak g_0'$ is conjugate to $\varphi\theta\varphi^{-1}$ by [L2] and the conjugating automorphism changes the diagram only by the moves above. [L2, L4, L5, algebra]

1.3 For a $\theta$-stable Cartan subalgebra $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ the following are equivalent: $\mathfrak a_0$ is maximal abelian in $\mathfrak p_0$; $\mathfrak h_0$ has maximal noncompact dimension; $\mathfrak h_0$ has no noncompact imaginary root. This is [L3], and it shows in particular that the maximally split Cartan subalgebra used in the Satake construction has no noncompact imaginary root, so its black vertices are exactly its compact imaginary simple roots. [L3]

1.4 Fix a maximal abelian $\mathfrak a_0\subseteq\mathfrak p_0$ and a $\theta$-stable Cartan subalgebra $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ containing it, with root system $\Phi=\Phi(\mathfrak g,\mathfrak h)$ and restricted-root system $\Sigma$ of [L6]. The Satake diagram of the quadruple records three objects: the simple roots of $\Phi$ whose restriction to $\mathfrak a_0$ vanishes (the black vertices); those whose restriction does not vanish (the white vertices); and the pairing of distinct white vertices with the same nonzero restriction (the arrows). By [L5] the simple restricted roots are exactly the restrictions of the white simple roots, two distinct white simple roots have equal restriction exactly when they are joined by an arrow, and a linear relation among the restricted simple roots holds exactly when it holds modulo the span of the imaginary simple roots; hence $\Sigma$ and the real rank $\dim\mathfrak a_0$ are determined by the decorated diagram, and so is, for each simple restricted root, the restriction of the corresponding white simple root. [L5, L6]

1.5 For a restricted root $\lambda$ the multiplicity $m(\lambda):=\dim\mathfrak g_0^{\lambda}$ is computed from the root data of $(\mathfrak g,\mathfrak h)$: by [L6] the root spaces contributing to $\mathfrak g_0^{\lambda}$ are the imaginary roots $\alpha$ with $\alpha|_{\mathfrak a_0}=\lambda$ together with the complex roots with that restriction, each complex pair $\{\alpha,\theta\alpha\}$ contributing one complex dimension. On the span of the imaginary simple roots the restriction map to $\mathfrak t_0^{*}$ has as kernel exactly the span of the black vertices, and the multiplicativity rules
$$\text{compact}+\text{compact}=\text{compact},\qquad \text{compact}+\text{noncompact}=\text{noncompact},\qquad \text{noncompact}+\text{noncompact}=\text{compact}$$
for sums of imaginary roots compute the compact or noncompact type of every imaginary root from that of the simple ones. Therefore the decorated diagram determines the multiplicity of every simple restricted root, hence, by additivity of multiplicities over the restricted-root decomposition, the entire function $m$ on $\Sigma$. [L5, L6, algebra]

2.1 The compactness rules used in step 1.5 are those of the source's Proposition 6.72 (printed pp. 393-394), stated for a noncompact imaginary root $\alpha$ and a root $\beta$ orthogonal to it: if $\beta\pm\alpha$ are not roots then the Cayley transform $c_\alpha$ fixes $E_\beta$, so $\beta$ and $c_\alpha(\beta)$ have the same compactness; if $\beta\pm\alpha$ are roots then $c_\alpha(E_\beta)=\tfrac12([E_\alpha,E_\beta]-[\overline{E_\alpha},E_\beta])$, where $\overline{E_\alpha}$ denotes the root vector of $-\alpha$, and the compactness is reversed. The companion rule for a complex simple root $\beta$ orthogonal to $\theta\beta$, needed when the Vogan diagram carries a nontrivial automorphism, is the source's Proposition 6.104 (printed pp. 420-421): then $\alpha-\theta\beta$ is an imaginary root of the same compact or noncompact type as $\alpha+\beta$. [L3, L6, algebra]

3.1 The source records, for every noncomplex simple real Lie algebra $\mathfrak g_0$, the following procedure: start from a Vogan diagram of $\mathfrak g_0$ as supplied by the normal form of [L1]; choose a maximal strongly orthogonal sequence of noncompact imaginary simple roots; apply the Cayley transforms of [L3] along that sequence, using the rules of step 2.1 to label the compactness of the roots orthogonal to each step; and compute the resulting Cartan subalgebra, whose split dimension is $\dim\mathfrak a_0$ and whose restricted-root system is $\Sigma$ with multiplicities $m(\lambda)$. The procedure is carried out in the source for the example $\mathfrak g_0=\mathfrak{su}(p,n-p)$ and the discussion immediately following (Source, §11, printed pp. 422-423), for all classical matrix algebras in table (6.107) (printed p. 424), for all exceptional algebras in table (6.108) (printed p. 425), and for the algebras $\mathfrak g_{\mathbb R}$ at the end of §11 (printed pp. 425-426). [L3, L6, L7, algebra]

4.1 In the entries of step 3.1 the invariants $(\Sigma,m,\dim\mathfrak a_0)$ are exactly those displayed in the source: for $\mathfrak{su}(p,q)$ with $p\ge q>0$ one has $\dim\mathfrak a_0=q$ and $\Sigma$ of type $(BC)_q$ when $p>q$ and of type $C_q$ with $m=2$ when $p=q$, so that $(p,q)$ is recovered from the multiplicity pattern and the rank; for $\mathfrak{so}(p,q)$ with $p\ge q>0$ one has $\dim\mathfrak a_0=q$ and $\Sigma$ of type $B_q$ when $p>q$ and $D_q$ when $p=q$; for $\mathfrak{sp}(p,q)$ with $p\ge q>0$ one has $\dim\mathfrak a_0=q$ and $\Sigma$ of type $(BC)_q$ or $C_q$ according as $p>q$ or $p=q$; for $\mathfrak{sp}(n,\mathbb R)$ one has $m=1$ on all roots of $C_n$; for $\mathfrak{sl}(n,\mathbb R)$ and $\mathfrak{sl}(n,\mathbb H)$ one has $\Sigma$ of type $A_{n-1}$ with $m=1$; for $\mathfrak{so}^{*}(2n)$ one has $\dim\mathfrak a_0=\lfloor n/2\rfloor$ and $\Sigma$ of type $C_{n/2}$ for even $n$ and $(BC)_{(n-1)/2}$ for odd $n$; and for $\mathfrak g_{\mathbb R}$ one has $m=2$ on all roots. Two different classical families therefore cannot share their invariants: the multiplicities and root types separate $\mathfrak{su}$, $\mathfrak{so}$, $\mathfrak{sp}$ and the quaternionic forms, and within each family the rank and the $(BC)$-versus-$C$ or $B$-versus-$D$ alternative recover the pair $(p,q)$. [L6, step 3.1, algebra]

5.1 The data $(\Sigma,m,\dim\mathfrak a_0)$ determine the isomorphism class of a simple real form: this is read off from the source's classification, where the restricted-root system with its multiplicities and the real rank distinguish the compact form (empty $\Sigma$), the split form (multiplicity $1$ on every root, restricted system of the type of $\mathfrak g$), the entries of tables (6.107) and (6.108), and the algebras $\mathfrak g_{\mathbb R}$ (multiplicity $2$ on every root), whose entries include $\mathfrak{su}(p,q)$ with $p+q=n+1$, $p\ge q>0$, $\mathfrak{sl}(n+1,\mathbb R)$, $\mathfrak{sl}_m(\mathbb H)$ with $n+1=2m$, $\mathfrak{so}(p,q)$, $\mathfrak{sp}(p,q)$, $\mathfrak{sp}(n,\mathbb R)$ and $\mathfrak{so}^{*}(2n)$ in their admissible ranges, together with the twelve exceptional forms of Figures 6.2 and 6.3; the only isomorphism in the list is $\mathfrak{so}^{*}(8)\cong\mathfrak{so}(6,2)$ (Source, Theorem 6.105 with the remark following it, printed pp. 421-422, and the tables at pp. 424-425). [L5, L7, step 3.1, step 4.1]

6.1 Suppose that $\mathfrak g_0$ and $\mathfrak g_0'$ are real forms with equivalent Satake diagrams. By step 1.2 the diagram of each is computed from the data $(\Sigma,m,\dim\mathfrak a_0)$ of a maximally split Cartan subalgebra as in steps 1.4 and 1.5, and an equivalence of decorated diagrams matches these data; so the two forms have the same restricted-root system with multiplicities and the same real rank. If either form is compact its restricted-root system is empty and its Satake diagram has no arrows and only black vertices, and the equivalence then forces the other form to be compact as well, hence isomorphic to it. Otherwise, applying step 5.1, with the case distinctions of step 4.1, to one simple ideal at a time, the two forms have isomorphic simple ideals and hence are isomorphic by the decomposition of [L1]. This proves the converse of the implication proved in step 1.2. [L1, L5, L6, step 1.2, step 1.4, step 5.1]

7.1 Isomorphic real forms have equivalent Vogan diagrams by step 1.1, and real forms with equivalent Vogan diagrams are isomorphic by [L1]; this is assertion 1 of the Statement. The Vogan and Satake assignments are well defined on isomorphism classes by steps 1.1 and 1.2, injective on isomorphism classes by [L1] for the Vogan assignment and by step 6.1 for the Satake assignment, and surjective onto the realized classes by construction; composing the Satake assignment with the inverse of the Vogan assignment therefore gives a bijection between the Vogan classes and the Satake classes realized by real forms. [L1, step 1.1, step 1.2, step 6.1]

8.1 The implication $V(\mathfrak g_0)=V(\mathfrak g_0')\Rightarrow S(\mathfrak g_0)=S(\mathfrak g_0')$ follows from step 1.1 and step 1.2: equivalent Vogan diagrams give isomorphic forms, and isomorphic forms have equivalent Satake diagrams. The converse implication $S(\mathfrak g_0)=S(\mathfrak g_0')\Rightarrow V(\mathfrak g_0)=V(\mathfrak g_0')$ follows from step 6.1 and step 1.1: equivalent Satake diagrams give isomorphic forms, and isomorphic forms have equivalent Vogan diagrams. This proves the equivalence in assertion 2, and the bijection clause is step 7.1. [L1, step 1.1, step 1.2, step 6.1, step 7.1]

9.1 Assertions 1 and 2 follow from steps 7.1 and 8.1, and the final paragraph of the Statement is not a further claim about the classifications: by step 1.3 the maximally split Cartan subalgebra has no noncompact imaginary root, so the compact/noncompact distinction of the Vogan painting is not part of the Satake colouring, which records instead the arrow pairing of the restrictions to $\mathfrak a_0$ plus the blackening of the imaginary simple roots; the passage between the two decorations is given by the Cayley transforms of [L3] with the compactness rules of step 2.1. [step 1.3, step 2.1, step 7.1, step 8.1] ∎

## Remarks

- **The passage between the two pictures.** The Vogan and Satake classes
  determine each other by assertion 2, and the passage in either direction is
  given by Cayley transforms: from the maximally compact end, real-root Cayley
  transforms remove the real roots one at a time, and from the maximally split
  end, noncompact-imaginary Cayley transforms with respect to a maximal
  strongly orthogonal sequence of noncompact imaginary roots restore the
  compact imaginary roots, their compactness being changed or preserved
  according to the string data of the source's Proposition 6.72 (printed
  pp. 393-394) and Proposition 6.104 (printed pp. 420-421). The reconstruction
  of step 6.1 recognizes the form from its restricted-root invariants rather
  than redrawing one diagram from the other, and the two incidence rules are
  where the two decorations are related.
- **Why the decorations are not identical.** The Vogan diagram of a real form
  is computed from a maximally compact Cartan subalgebra and paints its
  noncompact imaginary simple roots; the Satake diagram is computed from a
  maximally split one, where by step 1.3 no noncompact imaginary root exists,
  so its black vertices record exactly the imaginary simple roots and the
  compact/noncompact distinction is replaced by the arrow pairing of the
  restrictions to $\mathfrak a_0$. The passage between the two pictures is
  given by Cayley transforms and is not a relabelling of one diagram by the
  other; the two decorations agree as classifications but not literally as
  drawings.
