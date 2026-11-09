---
id: lem-author-58e57d689702-affine-vanishing
kind: lemma
title: Affine Artin bound and its consequence after localization
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - thm-author-c5b0693f4fc3-top-torsion-artin-affine
  - lem-author-58e57d689702-evaluation-equivalence
  - lem-author-58e57d689702-coefficient-trivialization
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  thm-author-c5b0693f4fc3-top-torsion-artin-affine: mathematical-premise
  lem-author-58e57d689702-evaluation-equivalence: mathematical-premise
  lem-author-58e57d689702-coefficient-trivialization: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 17
---

## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied derived-localization constructions. Let $k$ be an algebraically closed field, $p$ a prime invertible in $k$, and $X$ an affine finite-type $k$-scheme. Then $H^a_{\mathrm{et}}(X,\mathbb Z/p)=0$ for $a>\dim X$, hence for $a\geq4$ when $\dim X\leq3$. If in addition $\dim X\leq3$, let $F$ be the prime field of $k$, put $B=R\Gamma_{\mathrm{et}}(-,\mathbb Z/p)$ on the supplied qcqs prime-field cdh site, and let $L^{o,F}_{\mathrm{cdh}}$ denote ordinary source sheafification. Then $(L^{o,F}_{\mathrm{cdh}}\tau^{\leq3}B)(X)$ has $H^5=0$. Both assertions include singular and nonreduced schemes.

## Facts & Assumptions

[A1] Choice and the stated bounds are inherited through the finite-coefficient locality, ordinary slice localization and derived-evaluation suppliers used below. [[math:def-axiom-of-choice]]

**Given:** The algebraically closed field $k$, the invertible prime $p$, the affine finite-type $k$-scheme $X$, and the Choice, universe and site-size conventions in the statement. For the localized-complex conclusion also assume $\dim X\leq3$.

**Goal:** Prove the affine cohomological bound and the dimension-bounded localized $H^5$ vanishing.

[F1] [[thm-author-c5b0693f4fc3-top-torsion-artin-affine]] gives the affine Artin bound for $\mu_p^{\otimes3}$ under exactly the stated field, prime and finite-type hypotheses, without smoothness or reducedness.

[F2] [[lem-author-58e57d689702-coefficient-trivialization]] gives the primitive-root coefficient equivalence on the slice over $X$ and its compatibility with ordinary localization units.

[F3] [[lem-author-58e57d689702-evaluation-equivalence]] identifies $(L^{o,F}_{\mathrm{cdh}}\tau^{\leq3}B)(X)$ with $B(X)$ when $X$ is finite type over $k$ and $\dim X\leq3$.

## Proof

1.1 Choose a primitive $p$th root in $k$. The coefficient equivalence of [F2], evaluated at $X$, identifies $R\Gamma_{\mathrm{et}}(X,\mathbb Z/p)$ with $R\Gamma_{\mathrm{et}}(X,\mu_p^{\otimes3})$. Apply [F1] with twist $3$: its hypotheses hold for the stated affine finite-type $X/k$ and invertible $p$. Taking cohomology yields $H^a_{\mathrm{et}}(X,\mathbb Z/p)=0$ for $a>\dim X$, in particular for $a\geq4$ if $\dim X\leq3$. [given, F1, F2, A1, choose]

2.1 Under the additional hypothesis $\dim X\leq3$, apply the actual evaluation equivalence [F3] for the ordinary source reflector. It gives $H^5((L^{o,F}_{\mathrm{cdh}}\tau^{\leq3}B)(X))\cong H^5_{\mathrm{et}}(X,\mathbb Z/p)=0$ by step 1.1, since $5>\dim X$. This proves the localized consequence at $X$; it does not assert a global equivalence between $B$ and its unlocalized truncation on the unbounded qcqs site. [given, F3, A1, step 1.1] ∎
