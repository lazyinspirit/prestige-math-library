---
id: cex-soergel-full-faithfulness-does-not-hold-on-all-category-o-objects
kind: counterexample
title: The Soergel functor is not fully faithful on all category-O objects
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-axiom-of-choice,
       def-regular-integral-category-o-block-and-its-antidominant-weight,
       def-the-antidominant-projective-and-the-soergel-functor,
       thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra,
       thm-soergels-struktursatz-full-faithfulness-on-projectives,
       lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label,
       lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension,
       thm-bgg-reciprocity,
       def-verma-module,
       thm-simple-objects-of-category-o-are-highest-weight-modules]
generation:
  role: counterexample
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIP preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.2, Lemma 1 and its use in the proofs of Lemmas 3-4; Section 2.6, Lemma 10(i): <P(x^{-1}.0)> = C_x(1)<M(0)> and the associated Verma multiplicity statement"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Definition 4.17, Theorems 4.18-4.19, Remark 4.20 and Corollary 4.21, printed pp. 10-11; source uses right modules, converted here to left modules over commutative C"
---

## Statement refuted

Assume the inherited Axiom of Choice. In the regular integral
$\mathfrak{sl}_2$ block at $\lambda=0$ (so $\rho=1$ and $s\cdot0=-2$), the
functor $V=\operatorname{Hom}_{\mathcal O}(P(-2),-)$ is fully faithful on
every object of the block, i.e. $V\colon\operatorname{Hom}_{\mathcal O}(M,N)\to\operatorname{Hom}_{C\text{-mod}}(VM,VN)$
is a bijection for all objects $M,N$. This is false.

## Facts & Assumptions

**Given:** The ground field is $\mathbb k=\mathbb C$. The Axiom of Choice inherited from the published category-$\mathcal O$ suppliers, the regular integral $\mathfrak{sl}_2$ block at $\lambda=0$ of [[def-regular-integral-category-o-block-and-its-antidominant-weight]], and the Soergel functor $V=\operatorname{Hom}(P(-2),-)$ of [[def-the-antidominant-projective-and-the-soergel-functor]] with $C=\operatorname{End}(P(-2))$.

[F1] In the block, $\Delta_e=M(0)=\Delta(0)$ and $\Delta_s=M(-2)=\Delta(-2)$; the Verma $M(-2)=L(-2)$ is simple and there is a nonsplit sequence $0\to L(-2)\to M(0)\to L(0)\to0$ with $L(0)$ one-dimensional and $L(-2)=M(-2)$ infinite-dimensional; the projective cover $P(-2)$ has head $L(-2)$ and Verma flag $M(0),M(-2)$, once each ([[def-verma-module]], [[thm-simple-objects-of-category-o-are-highest-weight-modules]], [[thm-bgg-reciprocity]], [[lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension]], [[lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label]]).

[F2] $V$ is exact with $C\cong\mathbb k[x]/(x^2)$, $\deg x=2$, and values $V(P(-2))=C$, $V(M(0))=\mathbb k$, $V(M(-2))=\mathbb k$, $V(L(0))=0$, $V(L(-2))=\mathbb k$; in particular $\operatorname{Hom}_C(\mathbb k,\mathbb k)=\mathbb k$ ([[thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra]], [[def-the-antidominant-projective-and-the-soergel-functor]]).

[F3] A homomorphism $M(0)\to L(-2)$ carries the cyclic highest-weight vector of weight $0$ into the weight-$0$ part of $L(-2)$, which is zero because the weights of $L(-2)$ are $-2,-4,\dots$; hence $\operatorname{Hom}_{\mathcal O}(M(0),L(-2))=0$ ([[def-verma-module]], [[thm-simple-objects-of-category-o-are-highest-weight-modules]]).

## Counterexample

**Proof technique:** direct.

1.1 Exactness of $V$ applied to $0\to L(-2)\to M(0)\to L(0)\to0$ gives $0\to V(L(-2))\to V(M(0))\to V(L(0))\to0$, that is $0\to\mathbb k\to V(M(0))\to0$, so $V(M(0))\cong\mathbb k$, and $V(P(-2))\cong C$; also $P(-2)$ has indecomposable head $L(-2)$ so $V(L(0))=\operatorname{Hom}(P(-2),L(0))=0$ and $V(L(-2))=\mathbb k$. [F1, F2]

2.1 Non-faithfulness: $L(0)$ is a nonzero object with one-dimensional endomorphism ring, and $\operatorname{id}_{L(0)}\ne0$ is a nonzero element of $\operatorname{Hom}_{\mathcal O}(L(0),L(0))=\mathbb k$, while $V(L(0))=0$ forces its image in $\operatorname{Hom}_C(0,0)=0$ to be zero; so $V$ is not faithful. [F2, step 1.1]

2.2 Failure of fullness: $\operatorname{Hom}_{\mathcal O}(M(0),L(-2))=0$ while $V(M(0))\cong V(L(-2))\cong\mathbb k$ and $\operatorname{Hom}_C(\mathbb k,\mathbb k)=\mathbb k\ne0$, so the induced map between these Hom spaces is the zero map on a nonzero target and is not surjective. [F2, F3, step 1.1]

3.1 The two failures use a nonprojective target: $L(0)$ is nonprojective because the nonsplit surjection $M(0)\to L(0)$ would otherwise split, and $L(-2)$ is nonprojective because the nonsplit surjection $P(-2)\to L(-2)$ would otherwise split, with $P(-2)$ indecomposable; hence they do not contradict the Struktursatz [[thm-soergels-struktursatz-full-faithfulness-on-projectives]], whose target hypothesis is exactly that $Q$ be projective (the source may be arbitrary), and they do not refute the separate assertion of faithfulness on the quotient by the $V$-killed Serre subcategory, since $L(0)$ is precisely an object killed by $V$. [F1, step 2.1, step 2.2] ∎
