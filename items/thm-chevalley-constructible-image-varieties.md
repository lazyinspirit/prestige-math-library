---
id: "thm-chevalley-constructible-image-varieties"
kind: "theorem"
title: "Chevalley: images of constructible sets are constructible"
deps: ["def-constructible-subset-variety", "lem-constructible-boolean-operations", "lem-constructible-dense-contains-open", "lem-dominant-affine-image-contains-principal-open", "lem-classical-variety-noetherian-components"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Theorem 9.7"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Reduce to locally closed irreducible source pieces and affine charts. Find a nonempty open in the image closure using the affine open-image lemma; remove its inverse image and use Noetherian induction on proper closed subsets. Finite unions finish."
---

## Statement

Every morphism $f:X\to Y$ of classical varieties sends every constructible subset of $X$ to a constructible subset of $Y$. In particular $f(X)$ is constructible.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A subset $S$ of a classical variety $X$ is locally closed if $S=U\cap Z$ for some open $U\subseteq X$ and closed $Z\subseteq X$. A subset is constructible if it is a finite union of locally closed subsets. The empty union is allowed, so $\varnothing$ is constructible. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-constructible-subset-variety]]).

[F2] Constructible subsets are closed under finite unions, finite intersections and complements. If $C$ is constructible in $X$ and $S\subseteq X$ is any subspace, $C\cap S$ is constructible in $S$. If $S$ is locally closed and $C$ is constructible in $S$, then $C$ is constructible in $X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-constructible-boolean-operations]]).

[F4] The image of a dominant morphism $f:X\to Y$ between irreducible affine varieties contains a nonempty principal open subset of $Y$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dominant-affine-image-contains-principal-open]]).

[F5] Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-classical-variety-noetherian-components]]).

## Proof

1.1 First prove, for fixed $f$, that the image of every closed subvariety $T\subseteq X$ is constructible, by Noetherian induction on $T$. The empty case has empty image. If $T$ is reducible, its finitely many proper irreducible components have constructible images by the induction hypothesis and their finite union is constructible. It remains to treat nonempty irreducible $T$, assuming the result on its proper closed subsets. [F2, F5]

1.2 Put $Z=\overline{f(T)}$, an irreducible closed subvariety, since a continuous image and its closure preserve irreducibility. Choose a nonempty affine chart $V\subseteq Z$ and a nonempty affine chart $W\subseteq T\cap f^{-1}(V)$. The restriction $W\to V$ is dominant: every nonempty target open has nonempty open inverse image in irreducible $T$, which meets $W$. The affine image lemma gives a nonempty open $O\subseteq V$ contained in $f(W)$, hence in $f(T)$. It is open in $Z$ and locally closed in $Y$. [F4]

2.1 The subset $T_0=T\setminus f^{-1}(O)$ is proper closed in $T$, because $f$ factors through $Z$ and $O$ is open in $Z$. Its image is constructible by induction. Thus $f(T)=O\cup f(T_0)$ is constructible. Noetherianity validates the induction: a failure would have an inclusion-minimal closed counterexample, contradicted by these reductions. [F2, F5, step 1.1, step 1.2]

3.1 For a constructible $C\subseteq X$, write it as a finite union of locally closed subsets $S_j$. Each $S_j$ is itself a classical variety with a finite affine cover. Apply the result just proved to the whole source $S_j$ for the morphism $f|_{S_j}:S_j\to Y$. Then $f(C)=\bigcup_j f(S_j)$ is constructible. This includes $C=\varnothing$ and $C=X$. [F1, F2, F5, step 2.1] ∎
