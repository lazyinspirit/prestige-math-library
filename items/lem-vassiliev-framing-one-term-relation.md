---
id: lem-vassiliev-framing-one-term-relation
kind: lemma
title: The one-term relation and framing
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-singular-knot-and-vassiliev-derivative
  - def-framed-chord-diagram-and-four-term-relations
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-framed-knot-self-linking-and-seifert-framing
  - lem-framed-knot-push-off-self-linking-well-defined
  - alg-oriented-linking-number-from-diagram
  - thm-oriented-linking-number-scan-terminates-and-is-correct
  - thm-blackboard-framing-self-linking-is-writhe
  - def-countable-choice
justified_by: []
dependency_level: 7
sources:
  references:
    - title: "The Fundamental Theorem of Vassiliev Invariants"
      url: "https://arxiv.org/pdf/q-alg/9702009v1"
    - title: "Introduction to Vassiliev Knot Invariants"
      url: "https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf"
      locator: "§4.2.2, printed p. 94"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020)"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, PDF pp. 7–9; §6, PDF pp. 15–16"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $R$ be a commutative ring, let $n\ge1$, and let $V$ be an $R$-valued invariant of unframed oriented knots of type at most $n$. Then $D_nV(K)=0$ whenever the degree-$n$ chord diagram of the $n$-singular knot $K$ has a chord that intersects no other chord. This is the 1T vanishing law for unframed symbols. In the framed category no universal 1T vanishing law holds: under $\mathrm{AC}_\omega$, integer-valued framed self-linking has type at most $1$ and has derivative $2$ on a one-chord diagram with blackboard framing.

## Statement references

[Bar-Natan and Stoimenow, §1.1, pp. 3–5](https://arxiv.org/pdf/q-alg/9702009v1)

[Chmutov, Duzhin, and Mostovoy, §4.2.2, p. 94](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Elhamdadi, Hajij, and Istvan, “Framed Knots,” §§3 and 6](https://arxiv.org/pdf/1910.10257v6)

## Facts & Assumptions

**Given:** An unframed invariant $V$ of type at most $n$, its singular-knot finite-difference convention, and the chord-intersection convention in the statement. The separate framed witness assumes $\mathrm{AC}_\omega$.

[F1] [[def-singular-knot-and-vassiliev-derivative]]: the finite difference is the alternating sum over independent resolutions, and type at most $n$ means that every $(n+1)$-st finite difference vanishes; framed singularities may be double points or simple framing zeroes.

[F2] [[def-framed-chord-diagram-and-four-term-relations]]: two chords intersect when their endpoints alternate, a chord is isolated when it intersects no other chord, and 1T sets an unframed diagram with an isolated chord equal to zero.

[F3] [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]: crossing sign is $\operatorname{sgn}\det(v_{\mathrm{over}},v_{\mathrm{under}})$, the writhe is the sum of crossing signs, and the positive Artin half twist has sign $+1$.

[F4] [[def-framed-knot-self-linking-and-seifert-framing]]: under $\mathrm{AC}_\omega$, framed self-linking is the linking number of the knot and a sufficiently small push-off along its framing section.

[F5] [[lem-framed-knot-push-off-self-linking-well-defined]]: under $\mathrm{AC}_\omega$, that push-off linking number is independent of the sufficiently small radius, framing representative, and normalized tubular chart.

[F6] [[thm-blackboard-framing-self-linking-is-writhe]]: under $\mathrm{AC}_\omega$, the self-linking of the blackboard framing of a regular knot diagram equals its writhe.

[F7] [[alg-oriented-linking-number-from-diagram]]: for a two-component diagram, linking number is one half the signed sum of mixed crossing signs.

[F8] [[thm-oriented-linking-number-scan-terminates-and-is-correct]]: under $\mathrm{AC}_\omega$, the finite scan returns the integer linking number.

[F9] External input: framing classes are classified by the winding integer in $\pi_1(SO(2))$, and a unit framing twist changes self-linking by one. Elhamdadi, Hajij, and Istvan identify the framing integer with push-off self-linking ("Framed Knots," §3, PDF pp. 7–9, and §6, PDF pp. 15–16). Only these passages are used; the sign of the positive twist is fixed directly by the oriented meridian calculation in step 1.2.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts that every sequence of nonempty sets has a choice function; it is used only for the framed self-linking supplier branch, not for the finite unframed crossing-change argument.

## Proof

**Given:** As above. The unframed argument is choice-free; the framed witness is a separate $\mathrm{AC}_\omega$ branch.

1.1 Let $K$ be an $n$-singular knot with an isolated chord corresponding to the double point $p$. Its two preimages split the parameter circle into arcs $A$ and $B$. Isolation means no other marked double point has one preimage on each of $A$ and $B$. Choose a regular projection. There are finitely many ordinary crossings between the arcs. Switch them one at a time until every crossing has the $A$-branch over the $B$-branch. Each switch changes $D_nV$ by, up to sign, the $(n+1)$-fold difference on the knot with that ordinary crossing newly marked; this is zero by [F1]. Thus these switches preserve $D_nV(K)$. [given, F1, F2, F3, choose]

1.2 For the framed branch, let $V$ be integer-valued self-linking. On a regular framed diagram compare a unit representative of its framing section $f$ with the unit blackboard normal section $b$. Their oriented fibrewise angle defines a map $S^1\to S^1$; let $\tau(f,b)\in\mathbb Z$ be its degree. In the tubular coordinates determined by $(b,Jb)$, the push-off along $f$ winds $\tau(f,b)$ times meridionally relative to the blackboard push-off. A positive meridian links the core once, since its oriented normal disk meets the core once with the sign fixed by the positive frame $(T,b,Jb)$. Thus $\operatorname{sl}(K,f)=\operatorname{sl}(K,b)+\tau(f,b)$; [F9] supplies the unit-twist normalization, and this local orientation calculation fixes its sign. Equivalently, each positive turn creates a local clasp with two positive mixed crossings, and [F7]–[F8] give the same linking increment. By [F6], $\operatorname{sl}(K,b)=\operatorname{wr}(D)$. For a framed singular knot with two disjoint singularities, all changes outside their local balls are fixed. Inside each ball, resolving a double point changes only that crossing's writhe contribution and local angle path; resolving a framing zero changes only the local angle path. Winding degrees add under concatenation, so the four self-linking values have the form $C+c_1\epsilon_1+c_2\epsilon_2$ for constants independent of $(\epsilon_1,\epsilon_2)$. Their alternating second difference is $(C+c_1+c_2)-(C+c_1-c_2)-(C-c_1+c_2)+(C-c_1-c_2)=0$. This covers any pair of double-point or framing-zero singularities, so self-linking has type at most $1$. On a one-chord diagram with blackboard framing, the two crossing resolutions have writhes $+1$ and $-1$ and zero relative twist; their derivative is $1-(-1)=2$ by [F3] and [F6]. This is nonzero over $\mathbb Z$, so no universal framed 1T vanishing law is valid. The $\mathrm{AC}_\omega$ assumption enters only through [F4]–[F9] and [A1]. [given, A1, F1, F3, F4, F5, F6, F7, F8, F9, algebra]

2.1 The consistent over-under assignment lets the lifts of the interiors of $A$ and $B$ lie in opposite open half-spaces bounded by a plane through $p$. Cap each arc on its own side by a short boundary-parallel arc to obtain oriented singular knots $A^\circ$ and $B^\circ$ carrying the remaining marked double points. The two resolutions at $p$ are the connected sums $A^\circ\#B^\circ$ and $B^\circ\#A^\circ$. An orientation-preserving half-turn of the round $S^3$ that exchanges the two balls of the connected-sum decomposition carries the first knot, with its orientation, to the second; the path of rotations through angles from $0$ to $\pi$ is an ambient isotopy. Hence the two resolutions are ambient-isotopic, so their $V$-values agree and $D_nV(K)=0$. [given, F1, step 1.1, construct] ∎
