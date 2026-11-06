---
id: lem-gts-ddbar-lemma-implies-frolicher-e1-degeneration
kind: lemma
title: "The ddbar lemma implies Frölicher E1 degeneration"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC inherited from the compact Kähler ddbar supplier."
deps:
  - thm-gts-the-lemma-for-compact-kahler-manifolds
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
dependency_roles:
  thm-gts-the-lemma-for-compact-kahler-manifolds: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-bigraded-complex-differential-forms: mathematical-premise
  thm-d-dbar-decomposition-and-identities: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter VI, §8.2, Lemma 8.6 and Corollary 8.7, pp. 311–312, and §11, equations (11.1)–(11.3), pp. 322–323. The source supplies the ddbar and Frölicher spectral-sequence conventions and the Kähler case; the implication for any compact complex manifold satisfying the stated ddbar hypothesis is derived locally here."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $X$ be a compact complex manifold satisfying the $∂\bar\partial$ lemma: every $d$-closed, $d$-exact form of pure type is $∂\bar\partial$-exact. Filter the smooth complex de Rham complex by holomorphic degree, so that its Frölicher spectral sequence has $E_1^{p,q}=H^q(A^{p,\bullet}(X),\bar\partial)$. Then every $E_1$ class has a representative closed under both $∂$ and $\bar\partial$, and the spectral sequence degenerates at $E_1$.

## Statement references

[Jean-Pierre Demailly, Complex Analytic and Differential Geometry](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf), Chapter VI, §8.2, Lemma 8.6 and Corollary 8.7, pp. 311–312, and §11, equations (11.1)–(11.3), pp. 322–323. The source supplies the ddbar and Frölicher spectral-sequence conventions and the Kähler case; the implication for any compact complex manifold satisfying the stated ddbar hypothesis is derived locally here.

[[thm-gts-the-lemma-for-compact-kahler-manifolds]]

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

## Facts & Assumptions

**Given:** A compact complex manifold $X$ with the $∂\bar\partial$ lemma.

[F1] The complex manifold and holomorphic-coordinate conventions are those of [[def-complex-manifolds-and-holomorphic-vector-bundles]]. Smooth complex forms decompose by type in holomorphic coordinates, and $\partial$ and $\bar\partial$ are the two bidegree components of $d$ ([[def-bigraded-complex-differential-forms]]); their decomposition and identities $d=\partial+\bar\partial$, $\partial^2=\bar\partial^2=0$, and $\partial\bar\partial+\bar\partial\partial=0$ are given by [[thm-d-dbar-decomposition-and-identities]].

[F2] The exactness implication used below is the $\partial\bar\partial$-lemma hypothesis in the Statement. The supplier [[thm-gts-the-lemma-for-compact-kahler-manifolds]] establishes this condition for compact Kähler manifolds; the present Statement assumes it directly for a compact complex manifold and does not infer that $X$ is Kähler.

## Proof

**Proof technique:** direct.

1.1 Let $\alpha\in A^{p,q}(X)$ satisfy $\bar\partial\alpha=0$. Then $u:=\partial\alpha$ has pure type $(p+1,q)$, is $d$-exact since $u=d\alpha$, and is $d$-closed since $du=d\partial\alpha=-\partial\bar\partial\alpha=0$. By [F2], $u=\partial\bar\partial\beta$ for $\beta\in A^{p,q-1}(X)$; when $q=0$ or $p=n$, the required bidegree is absent and [F2] forces $u=0$. Therefore $\alpha':=\alpha-\bar\partial\beta$ (or $\alpha'=\alpha$ at those boundary bidegrees) satisfies $\bar\partial\alpha'=0$ and $\partial\alpha'=u-\partial\bar\partial\beta=0$. It differs from $\alpha$ by a $\bar\partial$-exact form, so it represents the same Dolbeault class. [F1, F2, given, algebra]

2.1 We prove vanishing of the differentials inductively. At page $r=1$, every $E_1^{p,q}$ class has, by step 1.1, a representative $\alpha'$ of type $(p,q)$ with $d\alpha'=0$. Suppose $d_1,\ldots,d_{r-1}$ vanish. The canonical identifications then give $E_r=E_1$; in particular every class in every possible source term of $d_r$ is represented by such a $d$-closed $\alpha'$. The spectral-sequence differential is induced by the first component of $d\alpha'$ that could survive to page $r$, and that component is zero because $d\alpha'=0$. Hence $d_r=0$. This proves the induction for every $r$, including all possible incoming differentials to each target class. Since $0\le p\le n$, the filtration has finitely many steps in each total degree, so it converges and $E_1=E_\infty$. [step 1.1, given, construct] ∎

## Remarks

This lemma supplies only the spectral-sequence consequence of the stated $∂\bar\partial$ lemma. It makes no claim about relative Artin base change; that is a separate theorem and proof obligation.
