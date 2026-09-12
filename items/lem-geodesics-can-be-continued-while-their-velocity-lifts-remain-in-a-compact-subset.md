---
id: "lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset"
kind: "lemma"
title: "Geodesics continue while velocity lifts remain compact"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow","def-countable-choice","lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm","thm-fundamental-theorem-on-flows","def-product-topology","def-compact-space","lem-compactness-of-a-subspace-is-ambient","lem-finite-set-has-max"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, proof of Proposition 20.2.2, p.151
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    - title: Ben Andrews, Geodesics and Completeness, proof of Theorem 11.5.1, printed pp.106–107
      url: https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "compactness and the maximal flow domain"
---

## Statement

Assume $\mathrm{AC}_\omega$, and let $M$ be a Riemannian manifold without
boundary. Let $\gamma:I=(a,b)\to M$ be an affinely parametrized geodesic on a
nonempty open interval, where either endpoint may be infinite, and write
$z(t)=(\gamma(t),\gamma'(t))\in TM$ for its velocity lift.

1. If $b<\infty$ and there are $t_0\in I$ and a compact subset $K\subseteq TM$
   such that $z(t)\in K$ whenever $t_0<t<b$, then $\gamma$ extends as a
   geodesic to an open interval with right endpoint strictly greater than $b$.
2. If $a> -\infty$ and there are $t_0\in I$ and a compact subset $K\subseteq TM$
   such that $z(t)\in K$ whenever $a<t<t_0$, then $\gamma$ extends as a
   geodesic to an open interval with left endpoint strictly less than $a$.

Consequently, the velocity lift of a maximal geodesic leaves every compact
subset of $TM$ along each tail approaching a finite endpoint of its maximal
interval.

## Facts & Assumptions

**Given:** The data in the statement. The boundaryless convention is [[rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow]].

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] [[lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm]] uses [A1] to supply a smooth geodesic spray $S$ on $TM$ whose integral curves are exactly the velocity lifts of affinely parametrized geodesics.

[F2] Applied to $S$, [[thm-fundamental-theorem-on-flows]] supplies an open maximal-flow domain $\mathcal D\subseteq\mathbb R\times TM$ and a smooth map $\Phi:\mathcal D\to TM$; the time curve $s\mapsto\Phi(s,w)$ is the unique maximal integral curve through every $w\in TM$.

[F3] In a binary product, every open neighbourhood contains a product of open neighbourhoods ([[def-product-topology]]).

[F4] Compactness means that every open cover has a finite subcover ([[def-compact-space]]), and the indexed ambient-open form for a compact subset is [[lem-compactness-of-a-subspace-is-ambient]].

[F5] Every nonempty finite set of real numbers has a positive minimum when all its members are positive ([[lem-finite-set-has-max]]).

## Proof

1.1 By [F1], $z$ is an integral curve of $S$. By [F2], for every $w\in TM$ one has $(0,w)\in\mathcal D$. Since $\mathcal D$ is open, [F3] gives an open set $U\subseteq TM$ containing $w$ and an $\varepsilon>0$ such that $(-\varepsilon,\varepsilon)\times U\subseteq\mathcal D$. Thus the set $$ \mathcal A:=\{(\varepsilon,U):\varepsilon>0,\ U\subseteq TM\text{ open},\ (-\varepsilon,\varepsilon)\times U\subseteq\mathcal D\} $$ indexes an ambient-open cover $(U_{(\varepsilon,U)})_{(\varepsilon,U)\in \mathcal A}$ of $TM$, and hence of $K$. [A1, F1, F2, F3]

2.1 The tail hypothesis makes $K$ nonempty. By [F4], finitely many indices $(\varepsilon_0,U_0),\ldots,(\varepsilon_n,U_n)\in\mathcal A$ cover $K$. By [F5], $$ \delta:=\min\{\varepsilon_0,\ldots,\varepsilon_n\}>0. $$ If $w\in K$, then $w\in U_i$ for some $i$, and $|s|<\delta\le\varepsilon_i$ implies $(s,w)\in\mathcal D$. Therefore $$(-\delta,\delta)\times K\subseteq\mathcal D.$$ No pointwise family of choices was made: the index of the cover already contains both $U$ and its admissible $\varepsilon$, and compactness returns a finite list of those pairs. [F4, F5, step 1.1]

3.1 Assume the right-endpoint hypotheses. Put $c=\max\{t_0,b-\delta/2\}<b$ and $t_1=(c+b)/2$. Then $t_1\in I$, $t_1>t_0$, $z_1:=z(t_1)\in K$, and $b-t_1<\delta/2$. Step 2.1 makes $s\mapsto\Phi(s,z_1)$ an integral curve for $|s|<\delta$. By uniqueness in [F2], it agrees with $s\mapsto z(t_1+s)$ wherever both are defined. [F2, F5, step 2.1, given, algebra]

4.1 Projecting the curve in step 3.1 to $M$ gives a geodesic by [F1]. It agrees with $\gamma$ on the overlap, so it glues smoothly to $\gamma$ and defines a geodesic on $$I\cup(t_1-\delta,t_1+\delta)=(a,t_1+\delta).$$ Because $t_1+\delta>b$, this is the required extension past $b$. Notice that the new interval contains the formerly missing parameter value $b$; no value of $\gamma$ at $b$ was assumed. [F1, F2, step 3.1]

5.1 For a finite left endpoint, put $c=\min\{t_0,a+\delta/2\}>a$ and $t_1=(a+c)/2$. Then $z(t_1)\in K$ and $t_1-a<\delta/2$. The same maximal-flow curve, now using negative times, glues to $z$ and projects to a geodesic on $(t_1-\delta,b)$, whose left endpoint is strictly less than $a$. This proves claim 2. If $\gamma$ were maximal, either extension would contradict maximality; contraposition gives the final consequence. [F1, F2, F5, step 2.1, step 3.1, step 4.1]

6.1 The empty manifold admits no geodesic with nonempty domain. In dimension zero the spray curves are stationary, and in dimension one the preceding argument is unchanged; no positive-dimensional coordinate was used. An empty $K$ cannot contain the nonempty tail, while a one-member finite subcover is allowed and gives $\delta=\varepsilon_0$. Only finite endpoints are asserted, and steps 4.1 and 5.1 treat both endpoint directions. The sole choice principle is the stated $\mathrm{AC}_\omega$ used through [F1]; the compact-cover argument itself is a ZF argument and makes no countable or arbitrary selection. [A1, F1, step 1.1, step 2.1, step 4.1, step 5.1] ∎

## Remarks

- Datar's proof of Proposition 20.2.2 gives the same endpoint-extension move for an integral curve once a subsequence converges in a compact set. Andrews, Theorem 11.5.1, printed pp.106--107, instead obtains a limiting base point from metric completeness and continues a radial geodesic there. Neither source states the finite-flow-box proof verbatim; the exact uniform compact argument above is derived from the published maximal-flow theorem [F2].
- Compactness of the image in $M$ alone would not suffice here: the initial condition for the spray is the full velocity lift in $TM$.
