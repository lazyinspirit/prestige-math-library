---
id: lem-gts-canonical-curve-section-ring-generation-by-inner-projection
kind: lemma
title: Canonical curve section-ring generation by inner projection
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- thm-riemann-roch-euler-characteristic-curve
- thm-serre-duality-curves-line-bundles
- cor-generic-smoothness-on-source-characteristic-zero
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
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
sources:
  references:
  - title: Miles Reid, MA4L7 Algebraic Curves, Part 3 (2022)
    url: https://mreid.warwick.ac.uk/MA4L7/Part3_2022.pdf
    locator: '§§9.3–9.4, PDF/printed pp. 14–16: Proposition 9.5 (Castelnuovo free pencil trick), Theorem 9.6 (Max
      Noether) and its proof. Actually read; no full-document or ACGH book reading claimed.'
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-canonical-curve-section-ring-generation-by-inner-projection.md
dependency_level: 0
dependency_roles:
  thm-riemann-roch-euler-characteristic-curve: mathematical-premise
  thm-serre-duality-curves-line-bundles: mathematical-premise
  cor-generic-smoothness-on-source-characteristic-zero: mathematical-premise
  def-axiom-of-choice: mathematical-premise
---

## Statement

Assume AC. Let C be a smooth connected complex projective curve whose complete canonical system is a closed immersion. Put $K=K_C$. For every integer $m\ge 1$ the multiplication H0(C,K) tensor H0(C,mK) -> H0(C,(m+1)K) is surjective. Consequently the complete canonical section ring is generated in degree one. No converse canonical-embedding criterion is included.

## Statement references

[[thm-riemann-roch-euler-characteristic-curve]]

[[thm-serre-duality-curves-line-bundles]]

[[cor-generic-smoothness-on-source-characteristic-zero]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The exact curve and complete-canonical-embedding hypothesis. Work over C and retain AC as the ambient convention of the cited suppliers.

[F1] [[thm-riemann-roch-euler-characteristic-curve]] and [[thm-serre-duality-curves-line-bundles]] supply curve Riemann–Roch, h0(K)=g, degree(K)=2g−2, and the stated H1 dualities.

[F2] [[cor-generic-smoothness-on-source-characteristic-zero]] supplies etale local sheets of the generically finite dominant incidence maps over a nonempty smooth open set in characteristic zero. A nonconstant map of integral curves in characteristic zero has nonzero generic differential: its function-field extension is finite separable and its differential sequence has no inseparable kernel. The projective tangent/line calculations are explicitly proved below. [[def-axiom-of-choice]].

## Proof

1.1 Let T be an integral nondegenerate curve in $P^{r}$ over C, $r\ge 3$. Projection from a general smooth point p of T is birational on T. Here curves occurring after earlier projections may be singular; all differential arguments take place on their smooth open subsets. [given, F1, F2, construct, algebra]

1.2 Suppose otherwise. Then for general distinct p,q in T the secant pq contains a third point x of T, distinct from both: a generic fibre of the inner projection has degree at least two. The incidence of such triples has a component dominating T times T. Its map to T times T is generically finite, since an integral curve other than a line has only finitely many intersections with a fixed secant. In characteristic zero, choose local analytic parameters p,q on an etale open sheet of this map. Thus $x=x(p,q)$ depends holomorphically on p and q, lies on their line, and is distinct from them. [given, F1, F2, construct, algebra]

1.3 Neither partial derivative of x is identically zero. If, for example, x were locally constant in p for fixed general q, then varying p would lie on the fixed line qx, forcing T to be a line. Hence both derivatives are nonzero at a general triple. Write $x=a$ p+b q in a local affine/projective lift, with a,b nonzero. Differentiation in p shows that the projective tangent line $T_xT$ lies in the plane spanned by $T_pT$ and q; differentiation in q puts $T_xT$ in the plane spanned by p and $T_qT$. Both planes contain pq. If they were distinct, their intersection would be pq, and hence $T_xT=pq$. For fixed general q, varying p makes x range over an open subset of T, so the tangent line to T at every point of that open subset would contain q. Projection from q would have zero differential on that subset. In characteristic zero a nonconstant map of curves has nonzero differential generically; thus that projection would be constant, again forcing T to be a line. This is impossible. Therefore the two planes coincide for general p,q, so $T_pT$ and $T_qT$ are coplanar, and consequently intersect. [given, F1, F2, construct, algebra]

1.4 An irreducible one-parameter family of projective lines in which two general members intersect is either planar or concurrent. To check this directly, fix two distinct general lines meeting at o and spanning a plane Pi. Any line meeting both is either contained in Pi or passes through o. These are closed conditions on the irreducible parameter curve, so one holds identically. In the concurrent case all tangents pass through o; projection from o has zero differential generically, and T is a line by the preceding characteristic-zero argument. In the planar case each smooth point lies on its tangent in Pi, so T is planar. Both contradict nondegeneracy in $P^{r}$ with $r\ge 3$. This proves the lemma. [given, F1, F2, construct, algebra]

1.5 Let $g=h0(C,K)$; canonical very ampleness implies $g\ge 3$. Start with the canonical embedding in $P^{g-1}$. Subtract one general point at a time from its complete linear system. A generated system W defining a birational map to an integral curve T stays generated after subtracting a point p provided its image is a smooth point of T with a unique preimage and the map is unramified there: hyperplanes through the image have no base point elsewhere and some vanish to order exactly one at p. There is a nonempty open set of such points for a birational map of curves. Since evaluation at p is onto, the full space of sections loses exactly one dimension. The resulting map is inner projection from the image of p. [given, F1, F2, construct, algebra]

1.6 While the image lies in $P^{r}$ with $r\ge 3$, the inner-projection lemma makes this new map birational. Continue until the image is a nondegenerate plane curve and then subtract one more point whose image is smooth with a unique unramified preimage. The two-dimensional system of lines through that plane point is basepoint-free on C after subtracting p; this last projection need not be birational. In total we have subtracted a reduced divisor D of degree g-2 and obtained the **complete**, basepoint-free pencil [given, F1, F2, construct, algebra]

1.7 $A=K-D$, $W=H0(C,A)$, dim $W=2$. [given, F1, F2, construct, algebra]

1.8 Curve Riemann–Roch gives h0(D)=h0(K-D)-1=1. Each choice was made in a nonempty open set; one divisor D suffices for the subsequent argument. No assertion about all divisors of degree g-2 is needed. [given, F1, F2, construct, algebra]

1.9 The evaluation sequence of W is [given, F1, F2, construct, algebra]

1.10 0 -> $A^{-1}$ -> W tensor $O_C$ -> A -> 0. [given, F1, F2, construct, algebra]

1.11 Its kernel follows locally from a pair of generating sections (u,v): the relation is (-v,u), identifying the kernel with $A^{-1}$. Tensor by K to obtain [given, F1, F2, construct, algebra]

1.12 0 -> $O_C(D)$ -> W tensor K -> 2K-D -> 0. [given, F1, F2, construct, algebra]

1.13 The cohomology map H1(O(D))->W tensor H1(K) is an isomorphism. Indeed Serre duality identifies its dual with W* tensor H0(O)->H0(K-D); in the displayed local relation it sends the two dual basis vectors to -v and u, hence is an isomorphism between two-dimensional spaces. The connecting homomorphism from H0(2K-D) is therefore zero, proving [given, F1, F2, construct, algebra]

1.14 W tensor H0(K) -> H0(2K-D) [given, F1, F2, construct, algebra]

1.15 surjective. Products of canonical sections consequently contain the entire subspace of sections of 2K vanishing along D. [given, F1, F2, construct, algebra]

1.16 Evaluation H0(K)->H0(K|D) is onto: its kernel has dimension two and its target dimension g-2. Choose canonical sections $u_i$ whose values form a diagonal basis at the distinct points of D, and choose one canonical section t nonzero at all of them. The products t $u_i$ span H0(2K|D). As H1(2K-D)=0 (its degree is $3g-2>2g-2$), these products, together with H0(2K-D), span H0(2K). This proves the $m=1$ multiplication assertion. [given, F1, F2, construct, algebra]

1.17 For $m\ge 2$, tensor the same pencil sequence by mK: [given, F1, F2, construct, algebra]

1.18 0 -> (m-1)K+D -> W tensor mK -> (m+1)K-D -> 0. [given, F1, F2, construct, algebra]

1.19 Serre duality gives H1((m-1)K+D)=0: the dual line is (2-m)K-D, which has negative degree for $m\ge 2$ because D has positive degree. Thus [given, F1, F2, construct, algebra]

1.20 W tensor H0(mK) -> H0((m+1)K-D) [given, F1, F2, construct, algebra]

2.1 is onto. Also H1(mK-D)=0 for $m\ge 2$, so evaluation of H0(mK) at D is surjective. Choose a section $t_m$ of mK nonzero at all points of D. Then the products $u_i t_m$ span H0((m+1)K|D), and H1((m+1)K-D)=0 makes this the quotient by H0((m+1)K-D). Multiplication is therefore surjective in degree m+1 as well. This completes the claim and proves generation of the canonical section ring in degree one. [given, F1, F2, construct, algebra] ∎



This is a research candidate. Its detailed unnumbered construction and actual independent-reading message are in the adjacent research files. The source reference is Miles Reid's author-hosted MA4L7 course notes, §§9.3–9.4, actually read for the free-pencil trick and Max Noether theorem. The original unread ACGH bibliography is preserved only in the immutable source-resolution history. No production adoption or workflow certification is asserted.

## Remarks

This is a research candidate. Its detailed unnumbered construction and actual independent-reading message are in the adjacent research files. The source reference is Miles Reid's author-hosted MA4L7 course notes, §§9.3–9.4, actually read for the free-pencil trick and Max Noether theorem. The original unread ACGH bibliography is preserved only in the immutable source-resolution history. No production adoption or workflow certification is asserted.
