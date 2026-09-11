---
id: lem-green-distinguished-summands-are-mutually-inverse
kind: lemma
title: Green distinguished summands are mutually inverse
status: draft
origin: pipeline
deps: [lem-green-restriction-has-one-distinguished-summand, lem-green-induction-has-one-distinguished-summand, lem-green-exceptional-family-containment-and-fusion, thm-krull-schmidt-for-finite-dimensional-kg-modules, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Saunders, Modular Representation Theory, Lemmas 4.18–4.19 and 4.35–4.38, Theorem 4.34
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Lassueur–Farrell, Chapter 7, §29, Theorem 29.4 and proof
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload2.pdf
proof_strategy: direct
---

## Statement

Assume AC. In the finite-group characteristic-$p$ setting, let $f(M)$ be the distinguished restriction summand of a nonzero indecomposable $G$-module with a vertex in $\mathcal Z$, and let $g(U)$ be the distinguished induced summand of an analogous $H$-module. Then $g(f(M))\cong M$ and $f(g(U))\cong U$. Both assignments depend only on module isomorphism classes.

## Facts & Assumptions

**Given:** The admissible finite-dimensional modules and assignments above.

[A1] AC ([[def-axiom-of-choice]]) is inherited from the decomposition arguments.

[F1] Restriction gives a unique admissible summand $f(M)$ with the same vertex and with $M\mid\operatorname{Ind}_H^G f(M)$ ([[lem-green-restriction-has-one-distinguished-summand]]).

[F2] Induction gives a unique admissible summand $g(U)$ with the same vertex and with $U\mid\operatorname{Res}_H^G g(U)$ ([[lem-green-induction-has-one-distinguished-summand]]).

[F3] Admissible vertices avoid both exceptional containment classes ([[lem-green-exceptional-family-containment-and-fusion]]).

[F4] Indecomposable multiplicities in a finite decomposition are unique ([[thm-krull-schmidt-for-finite-dimensional-kg-modules]]).

## Proof

1.1 By F1, $M\mid\operatorname{Ind}_H^G f(M)$. Applying F2 to $f(M)$ gives exactly one summand with vertex in $\mathcal Z$, namely $g(f(M))$. The module $M$ is indecomposable with such a vertex, and F3 excludes it from the exceptional part. Comparing indecomposable multiplicities by F4 forces $M\cong g(f(M))$. The use of F1, F2 and F4 carries the assumed AC. [A1, F1, F2, F3, F4, given]

1.2 Conversely, F2 gives $U\mid\operatorname{Res}_H^G g(U)$. By F1 this restriction has exactly one admissible indecomposable summand, $f(g(U))$. Since $U$ is admissible and F3 excludes it from the error, F4 gives $U\cong f(g(U))$. [F1, F2, F3, F4, given]

2.1 An isomorphism of $G$-modules restricts to an $H$-isomorphism. An $H$-isomorphism $a:U\to U'$ induces an isomorphism $x\otimes u\mapsto x\otimes a(u)$, with inverse induced by $a^{-1}$. Thus each functor preserves the whole module isomorphism class. By F1, F2 and F4 its unique admissible summand has an isomorphism class independent of every chosen decomposition. Hence both assignments descend to isomorphism classes and 1.1–1.2 make them inverse there. [F1, F2, F4, step 1.1, step 1.2]

3.1 If $H=G$, both functors and assignments are identities on the stated domain and both errors are zero. If $P=1$, the normalizer hypothesis forces $H=G$. Zero modules are not indecomposable inputs. No canonical vector-space representatives or simultaneous choices of representatives of all isomorphism classes are needed: uniqueness defines the maps on classes. This proves the assertion with precisely the inherited AC assumption. [F1, F2, step 2.1] QED
