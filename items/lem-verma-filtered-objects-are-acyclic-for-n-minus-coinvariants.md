---
id: lem-verma-filtered-objects-are-acyclic-for-n-minus-coinvariants
kind: lemma
title: Verma-filtered objects are acyclic for n-minus coinvariants
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-verma-type-of-a-module-with-a-standard-filtration, thm-pbw-model-of-a-verma-module, def-tor-by-resolving-the-left-module, thm-long-exact-tor-sequence-in-the-left-module-variable, prop-positive-tor-vanishes-when-the-resolved-variable-is-projective, def-axiom-of-choice]
proof_strategy: induction
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
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 4.2.3, pp. 27-29"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "A. Rocha-Caridi, Splitting criteria, Trans. AMS 262 (1980), Sec. 7, pp. 345-348"
      url: "https://www.ams.org/journals/tran/1980-262-02/S0002-9947-1980-0586721-0/S0002-9947-1980-0586721-0.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M\in\mathcal O$ be Verma-filtered. Then $\operatorname{Tor}_j^{U(\mathfrak n^-)}\bigl(\mathbb C,M\bigr)=0$ for all $j>0$. In particular the coinvariant functor $M\mapsto M/\mathfrak n^-M=\mathbb C\otimes_{U(\mathfrak n^-)}M$ is exact on Verma-filtered objects.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Verma-filtered object $M\in\mathcal O$ with a filtration $0=M_0\subseteq M_1\subseteq\cdots\subseteq M_n=M$ and $M_j/M_{j-1}\cong M(\psi_j)$.

[F1] Each Verma module satisfies $M(\psi)\cong U(\mathfrak n^-)$ as a left $U(\mathfrak n^-)$-module, so it is free, hence projective ([[thm-pbw-model-of-a-verma-module]], [[def-tor-by-resolving-the-left-module]]).

[F2] If the resolved variable is projective, then $\operatorname{Tor}_i=0$ for all $i>0$ for every supplied projective resolution ([[prop-positive-tor-vanishes-when-the-resolved-variable-is-projective]]).

[F3] For a short exact sequence $0\to A\to B\to C\to0$ of left $U(\mathfrak n^-)$-modules and the right module $\mathbb C$ there is a natural long exact sequence in $\operatorname{Tor}$, ending in $\mathbb C\otimes A\to\mathbb C\otimes B\to\mathbb C\otimes C\to0$; it requires Dependent Choice to supply the resolutions, and the Axiom of Choice implies Dependent Choice ([[thm-long-exact-tor-sequence-in-the-left-module-variable]], [[def-axiom-of-choice]]).

[F4] Verma filtrations and their length are as in [[def-verma-type-of-a-module-with-a-standard-filtration]].

## Proof

1.1 For $j>0$ one has $\operatorname{Tor}_j^{U(\mathfrak n^-)}(\mathbb C,M(\psi))=0$: by [F1] the module $M(\psi)$ is free, hence projective, and [F2] applies to a projective resolution of $M(\psi)$. [F1, F2]

2.1 Induction on the filtration length $n$. For $n=0$ we have $M=0$ and all Tors vanish. For $n\ge1$ use the short exact sequence $0\to M_{n-1}\to M_n\to M(\psi_n)\to0$ and its long exact Tor sequence [F3]. Its piece $\operatorname{Tor}_j(\mathbb C,M_{n-1})\to\operatorname{Tor}_j(\mathbb C,M_n)\to\operatorname{Tor}_j(\mathbb C,M(\psi_n))$ has vanishing outer terms for $j>0$: the first by induction and the second by step 1.1. Exactness in the middle gives $\operatorname{Tor}_j^{U(\mathfrak n^-)}(\mathbb C,M)=0$ for all $j>0$. [F3, F4, step 1.1, base, ih]

3.1 For exactness of the coinvariant functor, let $0\to A\to B\to C\to0$ be a short exact sequence of Verma-filtered objects. Its long exact Tor sequence begins $\operatorname{Tor}_1(\mathbb C,C)\to\mathbb C\otimes A\to\mathbb C\otimes B\to\mathbb C\otimes C\to0$; the first term vanishes by step 2.1, so $0\to\mathbb C\otimes A\to\mathbb C\otimes B\to\mathbb C\otimes C\to0$ is exact. Hence $M\mapsto\mathbb C\otimes_{U(\mathfrak n^-)}M$ is exact on Verma-filtered objects. [F3, step 2.1, discharge-induction: induction on the filtration length] ∎
