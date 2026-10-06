---
id: lem-two-torsion-and-uniqueness-of-plane-cubic-group-law
kind: lemma
title: "Two-torsion and uniqueness of the group law on a Weierstrass cubic"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - thm-plane-cubic-chord-tangent-group-law
  - thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism
  - prop-abelian-variety-commutativity-from-rigidity
  - def-abelian-variety-over-a-field
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
    - title: "J. S. Milne, Elliptic Curves, v2.0, Chapter III (two-torsion and the group law)"
      url: "https://www.jmilne.org/math/Books/ectext6.pdf"
---

## Statement

Assume AC. Let $k$ be a field of characteristic not $2$ or $3$, let $a,b\in k$ with $4a^3+27b^2\ne0$, and let $C$ be the smooth cubic $Y^2Z=X^3+aXZ^2+bZ^3$ with $O=[0:1:0]$, regarded as an abelian variety by [[thm-plane-cubic-chord-tangent-group-law]]. Then:

(a) scheme-theoretically, $C[2]$ is the disjoint union of $O\cong\operatorname{Spec}k$ and $\operatorname{Spec}k[x]/(x^3+ax+b)$ in the affine chart $y=0$; its geometric points are $O$ and the three points $[x:0:1]$ with $x^3+ax+b=0$; in particular $C[2](k)=\{O\}$ if and only if $x^3+ax+b$ has no root in $k$;

(b) if $C$ carries any abelian-variety structure with unit section $O$, then that group law equals the chord-tangent law.

## Facts & Assumptions

**Given:** AC, a field $k$ of characteristic not $2$ or $3$, $a,b\in k$ with $4a^3+27b^2\ne0$, the cubic $C:Y^2Z=X^3+aXZ^2+bZ^3$ with origin $O=[0:1:0]$, and an abelian-variety group law $*$ on $C$ with unit $O$.

[F1] The chord-tangent law makes $C$ an abelian variety over $k$ with inversion $[X:Y:Z]\mapsto[X:-Y:Z]$ and with the affine formulas of [[thm-plane-cubic-chord-tangent-group-law]]; in particular the difference of the two laws is measured by the identity morphism of the underlying curve.

[F2] A $k$-morphism from a smooth geometrically integral group variety to an abelian variety which sends the unit to the unit is a group homomorphism ([[thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism]], assuming AC).

[F3] Every abelian variety is commutative ([[prop-abelian-variety-commutativity-from-rigidity]]), and the definitions and conventions are those of [[def-abelian-variety-over-a-field]].

## Proof

**Proof technique:** direct: compute the fixed points of inversion for (a), and compare two laws by the pointed-morphism theorem for (b).

1.1 In the chord-tangent law, $2P=O$ if and only if $P=-P$, i.e. if and only if $P$ is fixed by the inversion $[X:Y:Z]\mapsto[X:-Y:Z]$. For $P\ne O$ write $P=[x:y:1]$; the fixed-point condition is $y=-y$, hence $y=0$ because $\operatorname{char}k\ne2$, and such points satisfy $x^3+ax+b=0$. These equalities also compute the scheme-theoretic kernel: $[2]=0$ is equivalent on all tests to equality of identity and inversion. On $Z=1$ its ideal is $(2y)=(y)$. Near $O$ use the chart $Y=1$ with coordinates $u=X/Y$, $v=Z/Y$; inversion sends $(u,v)$ to $(-u,-v)$, so its equalizer has ideal $(u,v)$, defining the single reduced point $O$. [F1, given, algebra]

2.1 The polynomial $x^3+ax+b$ has three distinct roots in an algebraic closure: a common root of $x^3+ax+b$ and its derivative $3x^2+a$ would force $y=0$ in the smoothness computation, i.e. would give $3x^2=-a$, $x^3=b/2$ and hence $4a^3+27b^2=0$, contrary to the hypothesis; so the discriminant $-(4a^3+27b^2)$ is nonzero. Hence $C[2](\bar k)$ consists exactly of $O$ and the three points $[x:0:1]$ over the roots, and $C[2](k)=\{O\}$ exactly when the cubic has no $k$-root. These are two-torsion points, not inflection points; inflection points satisfy $3P=O$ instead. [F1, step 1.1, algebra]

3.1 For (b), let $*$ be the given abelian-variety law with unit $O$. The identity morphism $\operatorname{id}:(C,\cdot)\to(C,*)$ carries the unit of the chord-tangent law to the unit of $*$, and the source is a smooth geometrically integral group variety and the target an abelian variety, so by [F2] it is a group homomorphism; being an isomorphism of schemes, it is an isomorphism of group varieties, so the two laws coincide. The reverse implication is the same statement read backwards, and both laws are commutative by [F3]. [F2, F3, step 2.1, algebra] ∎ 