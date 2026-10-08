---
id: lem-round-circles-are-conformally-removable
kind: lemma
title: Round circles and straight lines are conformally removable
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-axiom-of-choice
  - def-complex-domain
  - def-conformal-removable-compact-set
  - def-countable-choice
  - def-mobius-transformation
  - def-riemann-sphere-holomorphic-charts
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps
  - thm-biholomorphic-self-maps-riemann-sphere-are-mobius
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-heine-borel-rn
  - thm-one-quasiconformal-is-conformal
axiom_use: Assume the Axiom of Choice to use the analytic ACL/Sobolev convention, the 1-quasiconformal/conformal theorem, and the smooth-line gluing theorem. Countable Choice is used inside those interfaces and follows from AC by [[thm-choice-implies-dependent-implies-countable-choice]]. The Möbius and subset arguments use no choice.
proof_strategy: direct
verification:
  precheck: pass
dependency_level: 11
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §16.1, printed p. 215: the source records in one sentence the classical removability of smooth Jordan curves but supplies no proof there. The present item supplies the argument using the smooth-circle gluing and 1-quasiconformal/conformal suppliers."
---

## Statement

Assume the Axiom of Choice. Every compact subset $K$ of a straight line or a round circle in $\mathbb C$ is globally conformally removable ([[def-conformal-removable-compact-set]]). In particular, the round circle $\mathbb S^1$ and the generalized line $\mathbb R\cup\{\infty\}$ are conformally removable.

## Facts & Assumptions

**Given:** AC and the global conformal-removability definition on compact subsets of the Riemann sphere.

[F1] A compact set is globally conformally removable if every sphere homeomorphism conformal off it is Möbius; the property is invariant under Möbius maps and passes to compact subsets ([[def-conformal-removable-compact-set]]).

[F2] A $1$-quasiconformal homeomorphism between complex domains is conformal, and a conformal homeomorphism is $1$-quasiconformal in the analytic sense ([[thm-one-quasiconformal-is-conformal]], [[def-acl-sobolev-quasiconformal-homeomorphism]]).

[F3] A sphere homeomorphism that is analytically $1$-quasiconformal off a round circle is analytically $1$-quasiconformal on the whole sphere ([[lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps]]).

[F4] Holomorphy and quasiconformality of sphere maps are tested in the standard finite and infinity charts ([[def-riemann-sphere-holomorphic-charts]]); the chart domains can be restricted to complex domains ([[def-complex-domain]]).

[F5] The round unit circle $\mathbb S^1=\partial\mathbb D=\{z\in\mathbb C:|z|=1\}$ is closed and bounded in $\mathbb R^2$, hence compact ([[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[thm-heine-borel-rn]]).

[F6] Every biholomorphic self-map of the Riemann sphere is Möbius ([[thm-biholomorphic-self-maps-riemann-sphere-are-mobius]]).

[F7] The maps $z\mapsto c+rz$ for $r>0$ and $z\mapsto p+ui(1+z)/(1-z)$ for $u\ne0$ are Möbius transformations when their coefficient determinants are nonzero ([[def-mobius-transformation]]).

[F8] AC implies Countable Choice; the analytic ACL/Sobolev and gluing suppliers carry these assumptions ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

**Proof technique:** prove removability of the unit circle by gluing analytic $1$-quasiconformality across it, then use Möbius invariance and subset monotonicity.

1.1 Let $F:\widehat{\mathbb C}\to\widehat{\mathbb C}$ be a homeomorphism conformal on $\widehat{\mathbb C}\setminus\mathbb S^1$. By [F4], around each point of this complement its local chart expression is a conformal homeomorphism between complex domains. By [F2] every such expression is analytically $1$-quasiconformal, so $F$ is analytically $1$-quasiconformal off $\mathbb S^1$. Countable Choice used in the analytic interface follows from AC by [F8]. [F2, F4, F8, given]

2.1 The unit circle is a compact round circle by [F5]. Apply the sphere clause [F3] to $F$ and $\mathbb S^1$; it follows that $F$ is analytically $1$-quasiconformal on the whole sphere. The gluing interface carries the same AC/CC assumptions recorded in [F8]. [F3, F5, F8, step 1.1]

3.1 Around any point of the sphere, choose source and target holomorphic charts and restrict them so the chart expression of $F$ is a homeomorphism between complex domains. By [F4] and step 2.1 it is analytically $1$-quasiconformal; [F2] makes it conformal. Thus $F$ is a biholomorphic self-map of the sphere, and [F6] makes it Möbius. Since $F$ was arbitrary, [F1] shows that $\mathbb S^1$ is globally conformally removable. [F1, F2, F4, F6, step 2.1, given]

4.1 If $\Gamma=\{c+rz:|z|=1\}$ with $r>0$, the affine map $A(z)=c+rz$ has determinant $r\ne0$ and is Möbius by [F7], with $A(\mathbb S^1)=\Gamma$. Möbius invariance [F1] therefore makes every round circle $\Gamma$ globally conformally removable. [F1, F7, step 3.1, algebra]

4.2 Let $L=p+u\mathbb R$ be any straight line, with $p,u\in\mathbb C$ and $u\ne0$. The map $M(z)=p+ui(1+z)/(1-z)$ has coefficient determinant $2iu\ne0$, hence is Möbius by [F7]. For $z\in\mathbb S^1\setminus\{1\}$, $i(1+z)/(1-z)$ is real; conversely, for $t\in\mathbb R$, $z=(t-i)/(t+i)$ lies on $\mathbb S^1$ and maps to $t$, while $z=1$ maps to $\infty$. Hence $M(\mathbb S^1)=L\cup\{\infty\}$, which is globally conformally removable by [F1] and step 3.1. [F1, F7, step 3.1, algebra]

5.1 A compact subset $K$ of a round circle or straight line is a compact subset of the corresponding globally removable sphere circle from steps 4.1–4.2. Monotonicity in [F1] makes $K$ globally conformally removable. This proves the Statement, including $\mathbb S^1$ and $\mathbb R\cup\{\infty\}$. [F1, step 3.1, step 4.1, step 4.2] ∎
