---
id: thm-baer-criterion-for-injective-modules
kind: theorem
title: "Baer's criterion for injective modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-injective-module, thm-zorn, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. A left $R$-module $I$ is injective if and only if every homomorphism $f:J\to I$ from a left ideal $J\le R$ extends to a homomorphism $R\to I$.

The forward implication is choice-free. The converse uses AC through Zorn's lemma.

## Facts & Assumptions

**Given:** A unital ring $R$ and a left $R$-module $I$.

[F1] Injectivity is extension of homomorphisms along every module monomorphism ([[def-injective-module]]).

[L1] Under AC, every nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 If $I$ is injective, apply [F1] to the inclusion of any left ideal $J\hookrightarrow R$ to extend each $J\to I$ to $R\to I$. [assume-hyp, F1]

1.2 Conversely, assume the ideal-extension condition. Given a submodule $N\le M$ and a homomorphism $f:N\to I$, let $\mathcal P$ be the poset of extensions $(N',f')$ with $N\le N'\le M$, ordered by further extension. It is nonempty because $(N,f)\in\mathcal P$. [assume-hyp, construct]

2.1 The union of a chain of compatible extensions is a submodule and carries the unique map agreeing with every map in the chain, so it is an upper bound. By [L1], choose a maximal extension $(N_0,f_0)$. [step 1.2, L1, choose]

3.1 If $N_0\ne M$, choose $x\in M\setminus N_0$ and put $J=\{r\in R:rx\in N_0\}$, a left ideal. The map $h:J\to I$, $h(r)=f_0(rx)$, is $R$-linear and by hypothesis extends to $H:R\to I$. Put $y=H(1)$. [step 2.1, choose, construct]

4.1 Define $f_1:N_0+Rx\to I$ by $f_1(n+rx)=f_0(n)+ry$. If $n+rx=n'+r'x$, then $(r-r')x=n'-n\in N_0$, so $r-r'\in J$ and $f_0(n'-n)=H(r-r')=(r-r')y$; hence the formula is well defined. It is linear and extends $f_0$. [step 3.1, algebra, construct]

5.1 Since $x\notin N_0$, the domain $N_0+Rx$ strictly contains $N_0$, contradicting maximality. Thus $N_0=M$, so $f$ extends to $M$ and $I$ is injective by [F1]. [step 2.1, step 3.1, step 4.1, F1]

6.1 Steps 1.1 and 5.1 prove both directions, with Zorn used only in the converse. [step 1.1, step 5.1] ∎
