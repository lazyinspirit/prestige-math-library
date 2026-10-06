---
id: lem-abelian-scheme-fibres-commutative-and-pointed-morphisms
kind: lemma
title: "Fibres of abelian schemes and unit-preserving morphisms"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-abelian-scheme
  - def-abelian-variety-over-a-field
  - prop-abelian-variety-commutativity-from-rigidity
  - thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism
  - def-scheme-theoretic-fibre
  - lem-field-valued-points-of-schemes
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-abelian-scheme-fibrewise-constant-morphism-rigidity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, v2.00 (2008), Chapter I sections 3, 5, 8 (fibres and pointed morphisms)"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
---

## Statement

Assume AC and DC. Let $S$ be a scheme, let $A\to S$ and $B\to S$ be abelian schemes of relative dimensions $g_A,g_B$ ([[def-abelian-scheme]]), and let $s\in S$. Then:

(a) the fibre $A_s$ is an abelian variety of dimension $g_A$ over $\kappa(s)$;

(b) the multiplication of $A$ is commutative and the inversion is the morphism $-1_A:A\to A$;

(c) every $S$-morphism $u:A\to B$ with $u\circ e_A=e_B$ is a homomorphism of $S$-group schemes;

(d) consequently, on a connected base, any two abelian-scheme group structures on the same smooth proper $S$-scheme with the same unit section coincide.

## Facts & Assumptions

**Given:** AC and DC, abelian schemes $A\to S$, $B\to S$ and a point $s\in S$.

[F1] An abelian scheme has smooth proper connected geometric fibres of constant dimension ([[def-abelian-scheme]]); the fibre over $s$ is the base change to $\kappa(s)$ ([[def-scheme-theoretic-fibre]], [[lem-field-valued-points-of-schemes]]).

[F2] Every abelian variety over a field is commutative, and a pointed morphism from a smooth geometrically integral group variety to an abelian variety is a homomorphism ([[prop-abelian-variety-commutativity-from-rigidity]], [[thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism]], [[def-abelian-variety-over-a-field]]).

[F3] A morphism of abelian schemes over $S$ which is constant on every geometric fibre factors through the base ([[lem-abelian-scheme-fibrewise-constant-morphism-rigidity]]).

## Proof

**Proof technique:** direct: the field-level statements applied fibrewise, then the rigidity factorization to pass to morphisms.

1.1 The fibre $A_s=A\times_S\operatorname{Spec}\kappa(s)$ is smooth, proper and geometrically connected of dimension $g_A$ over $\kappa(s)$ by [F1], hence an abelian variety of dimension $g_A$; this is (a). [F1, given, algebra]

2.1 For commutativity, let $c:A\times_SA\to A$ be the commutator morphism $c(a,b)=aba^{-1}b^{-1}$, using the group law; it sends the unit sections to the unit. For each geometric point $\bar t$ of the base, the fibre of $A\times_SA\to S$ over $\bar t$ is $A_{\bar t}\times_{\bar t}A_{\bar t}$, and by the field-level commutativity [F2] the commutator is constant, equal to the identity, on each geometric fibre of the second projection; by [F3] applied to the base change $A_{A}\to A$ (second projection), $c$ factors through the base, and evaluating at the first unit section gives $c=1$, hence $ab=ba$ as morphisms. This proves the first claim of (b), including nilpotents. [F2, F3, step 1.1, algebra]

3.1 For the inverse: $m(\operatorname{id}_A,-1_A)$ and $e\circ f$ agree on the closed subscheme $A$ by the group axioms, so the inverse is $-1_A$ as defined; this is the second claim of (b). [F1, step 2.1, algebra]

4.1 For (c), let $u:A\to B$ satisfy $u\circ e_A=e_B$ and consider the defect morphism $d(a,b)=u(a+b)-u(a)-u(b)$ on $A\times_SA$, using the group law of $B$. On each geometric fibre of the first projection, the field-level pointed-morphism theorem [F2] makes $d$ constant, equal to $0$; by [F3] it factors through the base and evaluation at $a=e_A$ gives $d\equiv0$, so $u$ is additive; compatibility with the unit is assumed, so $u$ is a homomorphism of $S$-group schemes. For (d), two group structures on the same $S$-scheme with the same unit section have an identity morphism which preserves the unit, hence is a homomorphism by (c), and being an isomorphism of underlying schemes it identifies the two structures. [F2, F3, step 2.1, algebra] ∎ 