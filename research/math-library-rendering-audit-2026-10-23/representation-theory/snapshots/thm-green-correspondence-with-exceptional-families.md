---
id: thm-green-correspondence-with-exceptional-families
kind: theorem
title: Green correspondence with exceptional families
status: published
origin: pipeline
deps: [def-green-exceptional-intersection-families, lem-green-restriction-has-one-distinguished-summand, lem-green-induction-has-one-distinguished-summand, lem-green-distinguished-summands-are-mutually-inverse, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
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

Assume AC. Let $G$ be finite, $k$ a field of characteristic $p>0$, $P$ a $p$-subgroup and $N_G(P)\leq H\leq G$. Use $\mathcal X,\mathcal Y,\mathcal Z$ from [[def-green-exceptional-intersection-families]]. Restriction and induction determine inverse bijections $f$ and $g$ between isomorphism classes of nonzero indecomposable finite-dimensional $kG$-modules and $kH$-modules having a vertex in $\mathcal Z$. Correspondents have a common vertex $Q\in\mathcal Z$, and

$$\operatorname{Res}_H^G M\cong f(M)\oplus Y_M,\qquad \operatorname{Ind}_H^G U\cong g(U)\oplus X_U,$$

where $Y_M$ is relatively $\mathcal Y$-projective and $X_U$ relatively $\mathcal X$-projective. The distinguished summands have multiplicity one. No common-source assertion is included.

## Facts & Assumptions

**Given:** The finite groups, field and finite-dimensional indecomposable domains above.

[A1] AC ([[def-axiom-of-choice]]) is inherited through the finite-length decomposition argument.

[F1] The precise families, class conventions and identity boundaries are in [[def-green-exceptional-intersection-families]].

[F2] Restriction has a unique distinguished summand of the same vertex with $\mathcal Y$-projective error ([[lem-green-restriction-has-one-distinguished-summand]]).

[F3] Induction has a unique distinguished summand of the same vertex with $\mathcal X$-projective error ([[lem-green-induction-has-one-distinguished-summand]]).

[F4] These assignments are well defined on isomorphism classes and mutually inverse ([[lem-green-distinguished-summands-are-mutually-inverse]]).

## Proof

1.1 Under the inherited AC assumption, F2 defines $f(M)$ for every module in the $G$-domain. It has the same specified vertex $Q\in\mathcal Z$, so belongs to the $H$-domain. F2 also gives multiplicity one and exactly the first displayed decomposition. [A1, F2, given]

1.2 F3 defines $g(U)$ for every module in the $H$-domain. It has the same vertex $Q\in\mathcal Z$, belongs to the $G$-domain, and satisfies multiplicity one and the second displayed decomposition. [F3, given]

2.1 By F4 these constructions depend only on isomorphism classes and satisfy $g(f(M))\cong M$ and $f(g(U))\cong U$. The first equality proves injectivity of $f$ and surjectivity of $g$; the second proves injectivity of $g$ and surjectivity of $f$. Thus they are inverse bijections with the decompositions and common vertex established in 1.1–1.2. [F4, step 1.1, step 1.2]

3.1 For $H=G$, F1 gives empty error families and F2–F3 give zero errors, so the assignments are identities on the stated vertex domain. If $P=1$, then $N_G(P)=G$ forces this case. Zero modules are outside both indecomposable domains; zero errors are allowed. The two families remain distinct in general, and no assertion about sources follows or is required. This completes the theorem. [F1, F2, F3, step 2.1] QED
