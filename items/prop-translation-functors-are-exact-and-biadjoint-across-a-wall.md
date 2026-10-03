---
id: prop-translation-functors-are-exact-and-biadjoint-across-a-wall
kind: proposition
title: "Translation functors are exact and biadjoint"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-injective-object
  - def-projective-object
  - def-translation-functor-between-o-blocks
  - def-weight-and-weight-space-of-a-lie-algebra-representation
  - prop-tensoring-with-a-finite-dimensional-module-preserves-category-o
  - thm-category-o-decomposes-by-generalized-central-character
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9, Lemma 3.3 and Constructions 3.6-3.7"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
      locator: "§3, Lemma 3.3 with proof (adjunction of T_V and T_{V*}) and Constructions 3.6-3.7, printed pp. 4-5 (full text read at harvest)"
    - title: "Dennis Gaitsgory, Geometric Representation Theory (Fall 2005), Sec. 4.23"
      url: https://people.mpim-bonn.mpg.de/gaitsgde/267y/catO.pdf
      locator: "§4.23, exactness and biadjointness of the translation functors, printed p. 24 (full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every
finite-dimensional $\mathfrak h$-semisimple $\mathfrak g$-module $E$ the
translation functor $T_{\chi,E,\chi'}$
([[def-translation-functor-between-o-blocks]]) is exact, and
$T_{\chi',E^*,\chi}$ is both a left and a right adjoint of
$T_{\chi,E,\chi'}$; in particular both functors send projectives to
projectives and injectives to injectives. Consequently, in the setting of
[[def-translation-functor-between-o-blocks]], $T_\mu^\lambda$ is both a left
and a right adjoint of $T_\lambda^\mu$, and the two functors are exact.

## Facts & Assumptions

**Given:** The Axiom of Choice, finite-dimensional $\mathfrak h$-semisimple $\mathfrak g$-modules $E,E^*$, generalized central characters $\chi,\chi'$, and the translation functors $T_{\chi,E,\chi'}=\operatorname{pr}_{\chi'}\circ(E\otimes-)\circ\operatorname{incl}_\chi$.

[F1] The functors $\operatorname{incl}_\chi$, $\operatorname{pr}_{\chi'}$ are exact and $\operatorname{pr}_\chi\circ\operatorname{incl}_\chi=\operatorname{id}$; $E\otimes-$ and $E^*\otimes-$ are exact endofunctors of $\mathcal O$; hence $T_{\chi,E,\chi'}$ and $T_{\chi',E^*,\chi}$ are exact ([[thm-category-o-decomposes-by-generalized-central-character]], [[prop-tensoring-with-a-finite-dimensional-module-preserves-category-o]], [[def-translation-functor-between-o-blocks]]).

[F2] For a $\mathfrak g$-module $M$ and $X\in\mathcal O$ the tensor-Hom adjunction gives natural isomorphisms $\operatorname{Hom}_{\mathcal O}(E\otimes M,X)\cong\operatorname{Hom}_{\mathcal O}(M,E^*\otimes X)$ and $\operatorname{Hom}_{\mathcal O}(X,E\otimes M)\cong\operatorname{Hom}_{\mathcal O}(E^*\otimes X,M)$, where $E^*$ is the linear dual with its standard contragredient action ([[prop-tensoring-with-a-finite-dimensional-module-preserves-category-o]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]]).

[F3] For $A\in\mathcal O_\chi$ and $X\in\mathcal O$ the block decomposition gives natural isomorphisms $\operatorname{Hom}_{\mathcal O}(\operatorname{incl}_\chi A,X)\cong\operatorname{Hom}_{\mathcal O_\chi}(A,\operatorname{pr}_\chi X)$ and $\operatorname{Hom}_{\mathcal O}(X,\operatorname{incl}_\chi A)\cong\operatorname{Hom}_{\mathcal O_\chi}(\operatorname{pr}_\chi X,A)$ ([[thm-category-o-decomposes-by-generalized-central-character]]).

[F4] An object $P$ is projective exactly when $\operatorname{Hom}(P,-)$ is exact, and $I$ is injective exactly when $\operatorname{Hom}(-,I)$ is exact; a left adjoint of an exact functor carries projectives to projectives, and a right adjoint of an exact functor carries injectives to injectives ([[def-projective-object]], [[def-injective-object]]).

## Proof

**Proof technique:** direct: exactness is composition of exact functors, and the two adjunctions are the tensor-Hom pairing transported through the block inclusion and projection.

1.1 Each of $T_{\chi,E,\chi'}$ and $T_{\chi',E^*,\chi}$ is a composite of exact functors by [F1], hence exact. [F1, given]

1.2 For $M\in\mathcal O_\chi$ and $N\in\mathcal O_{\chi'}$ the natural isomorphisms of [F3] and [F2] compose to $\operatorname{Hom}_{\mathcal O_{\chi'}}(T_{\chi,E,\chi'}M,N)\cong\operatorname{Hom}_{\mathcal O}(E\otimes\operatorname{incl}_\chi M,\operatorname{incl}_{\chi'}N)\cong\operatorname{Hom}_{\mathcal O}(\operatorname{incl}_\chi M,E^*\otimes\operatorname{incl}_{\chi'}N)\cong\operatorname{Hom}_{\mathcal O_\chi}(M,T_{\chi',E^*,\chi}N)$, natural in $M$ and $N$, so $T_{\chi,E,\chi'}$ is left adjoint to $T_{\chi',E^*,\chi}$. [F1, F2, F3, given]

1.3 Composing the other pair of isomorphisms gives $\operatorname{Hom}_{\mathcal O_{\chi'}}(N,T_{\chi,E,\chi'}M)\cong\operatorname{Hom}_{\mathcal O}(\operatorname{incl}_{\chi'}N,E\otimes\operatorname{incl}_\chi M)\cong\operatorname{Hom}_{\mathcal O}(E^*\otimes\operatorname{incl}_{\chi'}N,\operatorname{incl}_\chi M)\cong\operatorname{Hom}_{\mathcal O_\chi}(T_{\chi',E^*,\chi}N,M)$, natural in $M$ and $N$, so $T_{\chi,E,\chi'}$ is also right adjoint to $T_{\chi',E^*,\chi}$; equivalently $T_{\chi',E^*,\chi}$ is both a left and a right adjoint of $T_{\chi,E,\chi'}$. [F2, F3, given]

2.1 By [F4] a left adjoint of the exact functor $T_{\chi',E^*,\chi}$ carries projectives to projectives, so $T_{\chi,E,\chi'}$ preserves projectives; symmetrically $T_{\chi',E^*,\chi}$ preserves projectives as a left adjoint of the exact $T_{\chi,E,\chi'}$. A right adjoint of an exact functor preserves injectives, so each of the two functors preserves injectives. [F4, step 1.1, step 1.2, step 1.3]

3.1 Specializing $E=L(\nu)$ and $E^*=L(\nu)^*$ gives that $T_\mu^\lambda$ is both a left and a right adjoint of $T_\lambda^\mu$ and that both are exact, which is the stated consequence. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
