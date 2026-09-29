---
id: fs-nullity-of-the-cut-locus-follows-merely-because-it-has-empty-interior
kind: false-statement
title: Nullity of the cut locus follows merely because it has empty interior
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-cut-point-and-cut-locus-of-a-point
  - def-fat-cantor-set
  - def-measure-zero-and-content-zero
  - def-nowhere-dense-meager
  - thm-cut-locus-of-a-point-has-riemannian-volume-zero
  - thm-fat-cantor-set-has-positive-measure
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190 (PDF label P206): the cut locus of a point as the set of finite cut-time endpoints."
    - title: Ved Datar, Lectures on Riemannian Geometry (2025)
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Section 23.3, printed pp.170-171: the measure-theoretic step that confirms the cut locus can be discarded in integration."
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, inherited from the
cut-locus interface. The following universal claim is **false**: *every subset
of $\mathbb R$ with empty interior has measure zero*, that is, nullity is
deducible from the emptiness of the interior alone. The claim fails already
for closed sets: the Smith-Volterra-Cantor set is compact, perfect and nowhere
dense, hence has empty interior, and it is not null. Consequently the nullity
of the cut locus $\operatorname{Cut}(p)$ cannot be obtained from the emptiness
of its interior: the measure-theoretic argument of
[[thm-cut-locus-of-a-point-has-riemannian-volume-zero]] is required to prove
$\operatorname{vol}_g(\operatorname{Cut}(p))=0$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; the Smith-Volterra-Cantor set
$S\subseteq\mathbb R$; a complete, connected, boundaryless, finite-dimensional
Riemannian manifold $(M,g)$, a point $p\in M$, the unit tangent sphere
$S_pM$, the cut time $c_p$ and the cut locus $\operatorname{Cut}(p)$.

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ is the standing
assumption ([[def-countable-choice]]).

[F1] $S$ is closed and bounded, hence compact, perfect, and nowhere dense
([[thm-fat-cantor-set-has-positive-measure]]).

[F2] In particular $S$ does not have measure zero (in the vocabulary of
[[def-measure-zero-and-content-zero]]): no cover of $S$ by intervals has total
length below $2^{-1}$, let alone below every positive $\varepsilon$
([[thm-fat-cantor-set-has-positive-measure]]).

[F3] $A\subseteq\mathbb R$ is nowhere dense when the interior of its closure
is empty, and a closed set is nowhere dense exactly when its interior is empty
([[def-nowhere-dense-meager]]).

[F4] $A\subseteq\mathbb R$ has measure zero, equivalently is null, when for
every real $\varepsilon>0$ there are sequences $(a_k)$ and $(b_k)$ of reals
with $a_k\le b_k$ and $A\subseteq\bigcup_{k}[a_k,b_k]$ whose lengths sum to at
most $\varepsilon$; content zero is the same demand with a finite cover
([[def-measure-zero-and-content-zero]]).

[F5] The cut locus of $p$ is
$\operatorname{Cut}(p)=\{\exp_p(c_p(v)v):v\in S_pM,\ c_p(v)<\infty\}$, the
finite cut-time endpoint set ([[def-cut-point-and-cut-locus-of-a-point]]).

[F6] Assume $\mathrm{AC}_\omega$; for a complete, connected, boundaryless,
finite-dimensional Riemannian manifold $(M,g)$ and $p\in M$ the cut locus has
zero Riemannian volume ([[thm-cut-locus-of-a-point-has-riemannian-volume-zero]]).

[F7] $S$ is the Smith-Volterra-Cantor set: the intersection
$S=\bigcap_{n\in\mathbb N}S_n$ of the nested unions
$S_n=\bigcup_{j<N_n}[e^{(n)}_j,e^{(n)}_j+\lambda_n]$ of its construction
([[def-fat-cantor-set]]).

## Refutation

**Proof technique:** direct.

1.1 The witness has empty interior. [F1, F3, F7]
By [F1] the set $S$ is closed and nowhere dense, so [F3] applies to the closed
set $S$ and gives that $S$ has empty interior. Thus the antecedent of the
refuted claim holds for $S$.

1.2 The witness is not null. [F2, F4]
By [F2] the set $S$ does not have measure zero, and by [F4] having measure zero
is exactly being null; hence $S$ is not null. The consequent of the refuted
claim therefore fails for $S$.

2.1 The implication fails, with an explicit witness. [step 1.1, step 1.2]
The set $S$ has empty interior (step 1.1) and is not null (step 1.2), a
closed, compact and perfect set. Hence "empty interior implies measure zero"
is false; no topological smallness of that kind forces nullity.

3.1 Consequence for the cut locus, and boundary audit. [A1, F5, F6, step 2.1]
By [F5] the cut locus $\operatorname{Cut}(p)$ is the radial image of the
finite cut-time endpoints, and by [F6], under the inherited [A1] and on the
complete connected boundaryless manifold, it has zero Riemannian volume,
proved in this library through the radial-graph measure argument. Step 2.1
shows that the emptiness of the interior of a closed set cannot replace such
an argument, so the nullity of $\operatorname{Cut}(p)$ does not follow merely
because its interior is empty; the measure-theoretic input of [F6] is
required. Boundary cases: the empty set has empty interior and is null, so it
is not a witness; the exhibited witness $S$ is not null, hence nonempty, and
the refutation never relies on the empty set. Zero-length intervals add
nothing to the total length of a cover in [F4], although singleton intervals
can cover nonempty countable sets. They do not evade [F2]: its lower bound
applies to every countable interval cover of $S$, including covers with
degenerate intervals. The witness is one-dimensional, in
$\mathbb R$; no higher-dimensional or vector-space object is involved, and no
distinguished "zero" element is used. Degenerate and endpoint conventions
match: [F4] uses closed intervals $[a_k,b_k]$ with $a_k\le b_k$, endpoints
included, exactly as [F2] does, so the quantitative lower bound of [F2]
applies to every cover the definition of nullity allows. No choice is made in
this refutation: the witness $S$ is a single set given by [F7]; the
assumption [A1] is inherited from the cut-locus interface and is spent only
through [F6]. The refuted claim is a universal implication and contains no
biconditional, so there is no converse direction to check; the failing
instance is the pair of steps 1.1 and 1.2, antecedent true and consequent
false.

$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed
pp.173-190, defines the cut locus of a point as the set of finite cut-time
endpoints, and Datar, *Lectures on Riemannian Geometry*, Section 23.3, printed
pp.170-171, records that the cut locus may be discarded in measure-theoretic
integration. The mathematical witness of this refutation is the library's own
published theorem [[thm-fat-cantor-set-has-positive-measure]] on the
Smith-Volterra-Cantor set, whose construction is in
[[def-fat-cantor-set]]; no source text is quoted, and the impossibility of
deducing nullity from empty interior is exhibited by that witness.
