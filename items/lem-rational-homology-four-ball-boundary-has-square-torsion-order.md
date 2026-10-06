---
id: lem-rational-homology-four-ball-boundary-has-square-torsion-order
kind: lemma
title: A rational homology four-ball has square boundary torsion order
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-axiom-of-choice
- def-countable-choice
- thm-choice-implies-dependent-implies-countable-choice
- thm-collar-neighborhood-theorem
- lem-second-countable-smooth-manifolds-have-cw-homotopy-type
- cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex
- thm-cellular-homology-computes-singular-homology
- thm-poincare-lefschetz-duality
- thm-long-exact-sequence-of-a-pair-in-singular-homology
- thm-universal-coefficient-theorem-for-cohomology-over-a-pid
- thm-universal-coefficient-theorem-for-homology-over-a-pid
- cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
sources:
  references:
  - title: R. H. Fox and J. W. Milnor, Singularities of 2-spheres in 4-space and cobordism of knots, Osaka Journal
      of Mathematics 3 (1966), 257-267 (digitised publisher copy)
    url: https://www.i-repository.net/contents/osakacu/sugaku/111F0000002-00302-8.pdf
    locator: Theorem 2 and the trefoil nonsliceness discussion motivate these local adapters; the proof below uses
      elementary duality and universal coefficients, not an imported Fox-Milnor factorization theorem

verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
dependency_level: 0
---

## Statement

Assume AC. Let $W$ be a compact connected oriented smooth $4$-manifold with connected boundary $M$ and the rational homology of a point. Then $M$ is a rational homology $3$-sphere and $|H_1(M;\mathbb Z)|$ is a square.

## Facts & Assumptions

**Given:** A compact connected oriented smooth $4$-manifold $W$ with connected boundary $M$ and $H_i(W;\mathbb Q)=0$ for $i>0$; all homology and cohomology groups below have integral coefficients unless a coefficient field is written.

[F1] A compact smooth manifold has finitely generated homology: the double along a collared boundary is a compact smooth manifold without boundary, which has the homotopy type of a CW complex, its compact image under the equivalence lies in a finite subcomplex, and the folding retraction shows the manifold is homotopy dominated by that finite complex ([[thm-collar-neighborhood-theorem]], [[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]], [[cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex]], [[thm-cellular-homology-computes-singular-homology]]).

[F2] Poincare-Lefschetz duality for the compact oriented $4$-manifold $W$ with boundary $M$ gives isomorphisms $H^p(W)\cong H_{4-p}(W,M)$ and $H^p(W,M)\cong H_{4-p}(W)$ ([[thm-poincare-lefschetz-duality]]), and the homology of the pair fits in the long exact sequence $\cdots\to H_i(M)\to H_i(W)\to H_i(W,M)\to H_{i-1}(M)\to\cdots$ ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F3] The cohomology universal coefficient theorem over the PID $\mathbb Z$ gives short exact sequences $0\to\operatorname{Ext}(H_{n-1}(X),\mathbb Z)\to H^n(X)\to\operatorname{Hom}(H_n(X),\mathbb Z)\to0$ ([[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]), and finitely generated abelian groups decompose into free and cyclic torsion parts ([[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]).

[F4] The Axiom of Choice is assumed in the statement; through [[thm-choice-implies-dependent-implies-countable-choice]] it supplies countable choice for collaring, while the CW, duality and universal-coefficient inputs themselves assume full AC ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F5] Under AC, homology universal coefficients compute $H_i(W;\mathbb Q)$ from integral homology by $0\to H_i(W;\mathbb Z)\otimes\mathbb Q\to H_i(W;\mathbb Q)\to\operatorname{Tor}(H_{i-1}(W;\mathbb Z),\mathbb Q)\to0$ ([[thm-universal-coefficient-theorem-for-homology-over-a-pid]]). For finitely generated integral groups the Tor term is zero: it is zero on a free summand, and on $\mathbb Z/n$ it is the kernel of multiplication by $n$ on $\mathbb Q$, also zero.

## Proof

**Proof technique:** direct; compute the rational and integral homology of $W$ and $M$ by duality and the pair sequence, then compare orders in the resulting exact sequence.

1.1 By [F1] the integral homology groups of $W$ and $M$ are finitely generated. By [F5], the rational homology hypothesis makes $H_i(W;\mathbb Z)\otimes\mathbb Q=0$ for $i>0$; finite generation and the decomposition of [F3] therefore make those integral groups finite. Apply [F3] also with coefficient module $\mathbb Q$: the Hom terms vanish in positive degrees and the Ext terms for finite cyclic groups vanish because multiplication by their orders is onto on $\mathbb Q$. Thus $H^i(W;\mathbb Q)=0$ for $i>0$ and $H^0(W;\mathbb Q)=\mathbb Q$. Duality [F2] gives $H_i(W,M;\mathbb Q)=0$ for $i\ne4$, and $H_4(W,M;\mathbb Q)=\mathbb Q$. The pair sequence now gives $H_3(M;\mathbb Q)=\mathbb Q$, $H_1(M;\mathbb Q)=H_2(M;\mathbb Q)=0$, and $H_0(M;\mathbb Q)=\mathbb Q$. Hence $M$ is a rational homology sphere and $H_1(M)$ is finite. Integral duality on $M$, followed by [F3], gives $H_2(M)\cong H^1(M)=0$: the Ext term for $H_0(M)=\mathbb Z$ and the Hom term for finite $H_1(M)$ both vanish. Likewise $H_3(W,M)\cong H^1(W)=0$. These are exactly the vanishings needed in the order calculation. [F1, F2, F3, F5, given, algebra]

2.1 Put $A:=H_2(W)$ and $B:=H_1(W)$; both are finite, because $W$ is rationally a point and the groups are finitely generated by [F1]. Duality [F2] and the cohomology universal coefficient sequence [F3] give $H_2(W,M)\cong H^2(W)\cong\operatorname{Ext}(B,\mathbb Z)$ and $H_1(W,M)\cong H^3(W)\cong\operatorname{Ext}(A,\mathbb Z)$, the Hom terms vanishing because $A,B$ are finite. For a finite abelian group $F$ decomposed into cyclic summands, the sequence $0\to\mathbb Z\xrightarrow{n}\mathbb Z\to\mathbb Z/n\to0$ computes $\operatorname{Ext}(\mathbb Z/n,\mathbb Z)=\mathbb Z/n$, so $|\operatorname{Ext}(F,\mathbb Z)|=|F|$. [F2, F3, step 1.1, algebra]

3.1 The long exact sequence of the pair $(W,M)$ in low degrees, using $H_2(M)=0$ and the isomorphism $H_0(M)\to H_0(W)$ of connected spaces, reads $0\to A\to\operatorname{Ext}(B,\mathbb Z)\to H_1(M)\to B\to\operatorname{Ext}(A,\mathbb Z)\to0$. Split it into the short exact sequences $0\to A\to\operatorname{Ext}(B,\mathbb Z)\to K\to0$ and $0\to K\to H_1(M)\to B'\to0$, where $K$ is the image of $\operatorname{Ext}(B,\mathbb Z)$ and $B'$ the image of $H_1(M)$; then $|K|=|B|/|A|$ and $|H_1(M)|=|K|\cdot|B'|$. The third short exact sequence $0\to B'\to B\to\operatorname{Ext}(A,\mathbb Z)\to0$, the last map being surjective by exactness at the final term, gives $|B'|=|B|/|\operatorname{Ext}(A,\mathbb Z)|=|B|/|A|$ by step 2.1. Hence $|H_1(M)|=(|B|/|A|)^2$. The injection $A\hookrightarrow\operatorname{Ext}(B,\mathbb Z)$ makes $|A|$ divide $|B|=|\operatorname{Ext}(B,\mathbb Z)|$, so $|B|/|A|$ is a positive integer and $|H_1(M)|$ is a square. Choice enters only through [F4] and the cited inputs. [F1, F2, F3, F4, step 2.1, algebra] ∎
