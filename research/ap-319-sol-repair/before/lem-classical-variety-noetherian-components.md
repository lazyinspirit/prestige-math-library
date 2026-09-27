---
id: "lem-classical-variety-noetherian-components"
kind: "lemma"
title: "Classical varieties have finite irreducible decompositions"
deps: ["def-classical-algebraic-prevariety-regular-maps-and-varieties", "def-noetherian-topological-space", "lem-algebraic-set-finite-irreducible-components", "thm-hilbert-basis-theorem"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne §5j p.115"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Restrict descending closed chains to a finite affine cover; use the affine component decompositions and take closures. Noetherian spaces have quasi-compact open subsets, proved by ascending-open stabilization."
---

## Statement

Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Fix an algebraically closed field $k$. A **classical algebraic prevariety** over $k$ is a quasi-compact locally ringed space over $k$ that is covered by open subspaces isomorphic, as locally ringed spaces over $k$, to affine algebraic sets with their regular-function sheaves. Equivalently, it admits a finite such affine cover. A map is **regular** when it is a morphism of these locally ringed spaces over $k$; equivalently, this can be checked on affine charts. Thus its maps on structure sheaves respect the fixed $k$-algebra structures. A prevariety is **separated** when the equalizer of every pair of regular maps into it is closed. A (classical) **algebraic variety** is a separated prevariety. In the comparison below, “irreducible classical variety” means a nonempty variety whose underlying topological space is irreducible. ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]).

[F2] Let $(X,\mathcal T)$ be a topological space (def-topological-space). The space $X$ is **Noetherian** when every ascending chain $$ U_0\subseteq U_1\subseteq U_2\subseteq\cdots $$ of open subsets stabilizes. Equivalently, $X$ is Noetherian when every descending chain $$ F_0\supseteq F_1\supseteq F_2\supseteq\cdots $$ of closed subsets stabilizes. ([[def-noetherian-topological-space]]).

[F3] Let $k$ be an algebraically closed field and let $X\subseteq \mathbf A_k^n$ be an affine algebraic set. Then there exist finitely many irreducible closed subsets $X_1,\ldots,X_m\subseteq X$ such that $$ X=X_1\cup\cdots\cup X_m, $$ no $X_i$ is contained in the union of the others, and the family $\{X_1,\ldots,X_m\}$ is uniquely determined up to reordering. These sets are the irreducible components of $X$. ([[lem-algebraic-set-finite-irreducible-components]]).

[F4] Let $R$ be a Noetherian commutative ring. Then the polynomial ring $R[x]$ is a Noetherian commutative ring. No hypothesis beyond Noetherianity is placed on $R$: it may have zero divisors, and it may be the zero ring. ([[thm-hilbert-basis-theorem]]).

## Proof

1.1 An affine coordinate ring is a quotient of a polynomial ring over $k$. Repeated Hilbert basis and the fact that ideals of a quotient lift to ideals make it Noetherian. In a descending chain of affine closed sets, their vanishing ideals ascend and stabilize, so the closed sets stabilize. A finite affine cover exists by the classical definition. Restricting a descending chain to each chart and taking the largest of the finitely many stabilization indices proves Noetherianity of the whole variety. [F1, F2, F4]

1.2 Each affine chart has finitely many irreducible components. Their closures in $X$ are irreducible closed sets and together cover $X$. Remove contained members to get a finite irreducible decomposition. Any irreducible closed subset lies in one member of this finite cover; consequently the maximal members are exactly the components. For the empty variety the list is empty. [F3]

2.1 Every open subset of a Noetherian space is quasi-compact: if an open cover had no finite subcover, successively adding a cover member would produce a strictly increasing sequence of finite unions of opens in the ambient space. Closed subsets inherit the descending-chain property as well. An open subset of an affine algebraic set is covered by principal opens, each affine via $D(g)\cong V(tg-1)$; a closed subset of an affine chart is affine. These chart covers of open or closed subvarieties therefore have finite subcovers. [F2, step 1.1] ∎
