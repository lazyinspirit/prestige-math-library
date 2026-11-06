---
id: lem-gts-weak-quadric-and-plane-polarization-generation
kind: lemma
title: Weak quadric and projective-plane polarization generation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
- thm-grothendieck-riemann-roch-for-projective-morphisms
- thm-riemann-roch-for-smooth-projective-surfaces
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- thm-hodge-index-theorem-for-smooth-projective-surfaces
- lem-gts-log-adjoint-vanishing-on-snc-pairs
- thm-bertini-smooth-hyperplane-section
- thm-riemann-roch-euler-characteristic-curve
- thm-serre-duality-curves-vector-bundles
- thm-auslander-buchsbaum-formula
- thm-auslander-buchsbaum-serre-regularity-criterion
- def-axiom-of-choice
dependency_roles:
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-riemann-roch-for-smooth-projective-surfaces: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-hodge-index-theorem-for-smooth-projective-surfaces: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-riemann-roch-euler-characteristic-curve: mathematical-premise
  thm-serre-duality-curves-vector-bundles: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Mella, Existence of good divisors on Mukai varieties
    url: https://arxiv.org/pdf/alg-geom/9705012v1
    locator: 'arXiv:alg-geom/9705012v1, complete printed pp. 1–10 read, especially §2 pp. 4–8: Lemma 2.1 and Theorems
      2.2–2.5. This is source context; the present proof reconstructs its actual stated interface locally.'
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 2
---

## Statement

Assume AC. Let $T$ be a smooth connected projective complex surface and let $L$ be nef and big Cartier, the pullback of an ample Cartier line bundle under a birational contraction to a normal surface. If either $(K_T,L^2)=(-2L,2)$ or $(K_T,L^2)=(-3L,1)$, then $L$ is globally generated. In the first case $h^0(L)=4$ and in the second case $h^0(L)=3$.

## Facts & Assumptions

**Given:** Exactly the smooth surface and nef-big pullback line bundle in the Statement. Degree-zero effective curves are contracted by the stipulated birational contraction and have negative-definite intersection matrix by Hodge. Stability against rank-one subsheaves is defined using L-intersection, although L need not be ample.

[F1] [[thm-grothendieck-riemann-roch-for-projective-morphisms]] and [[thm-riemann-roch-for-smooth-projective-surfaces]] give the bundle and line Euler formulas. [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] gives the bundle dualities. [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] gives the negative-definite orthogonal space and degree/square inequalities.

[F2] [[lem-gts-log-adjoint-vanishing-on-snc-pairs]] gives the empty-boundary nef-big adjoint vanishing used for O and L. [[thm-bertini-smooth-hyperplane-section]] supplies smooth general members once generation has actually been established. [[thm-riemann-roch-euler-characteristic-curve]] and [[thm-serre-duality-curves-vector-bundles]] give the smooth-fibre and P1 Euler calculations.

[F3] [[thm-auslander-buchsbaum-formula]] and [[thm-auslander-buchsbaum-serre-regularity-criterion]] make reflexive modules on a regular surface locally free. This is used for a saturated rank-one kernel. The point-Serre extension and its local freeness are constructed explicitly; no Reider, Bogomolov or surface classification is imported.

[F4] [[def-axiom-of-choice]] is inherited from these suppliers.

## Proof

1.1 Let T be a smooth projective surface, L nef and big, $K_{T}=−2L$ and L²=2. Adjoint nef-big vanishing gives $H1(O_{T})=0$ and H1(L)=0. RR gives h0(L)=4 and χ(N)=1+(N²+2LN)/2. If L has a base point, its point-Serre bundle V has determinant L and c2=1. A stable V would have h0(End V)=1 and h2(End V)=0 (twist by $K_{T}$ lowers slope), whereas χ(End V)=L²=2. Hence it has a saturated destabilizing line M. As before $N=L−M$ is nonzero effective with $a=LN\ge 0$, $q=N²$, $a\le 1$, $a−1\le q\le a²/2$, and q even. Negative definiteness excludes $a=0$; therefore $a=1$ and $q=0$. [F1, F2, F3, F4, given, construct]

2.1 Reflect N in an L-degree-zero exceptional irreducible curve E whenever $NE<0$. Negative definiteness and adjunction with $K_{T}$ $E=0$ give $E^{2}=-2$ and arithmetic genus zero, so E is smooth rational. Put $N_{prime}=N+(NE)E$. Then $N_{prime}^{2}=N^{2}=0$ and $LN_{prime}=LN=1$. RR gives $\chi (N_{prime})=1+(N_{prime}^{2}+2LN_{prime})/2=2$. Also $h2(N_{prime})=h0(K_{T}-N_{prime})=0$ because that class has negative L-degree. Hence $h0(N_{prime})\ge 2$, so $N_{prime}$ is effective. For a fixed ample Cartier divisor H its degree drops by the positive integer -(NE)HE. Positive integral H-degree cannot decrease indefinitely; the process terminates with an effective D of square zero and L-degree one having nonnegative intersection with every exceptional curve. There is a unique nonexceptional component C, with coefficient one; write $D=C+B$, with B effective exceptional. Adjunction and Hodge give $C^{2}=0$: $C^{2}-2=2p_{a}(C)-2$, so $C^{2}=2p_{a}(C)\ge 0$, while $C^{2}\le$ $(LC)^{2}/L^{2}=1/2$. Therefore $DC=C^{2}+BC=BC\ge 0$. Every other component of D is exceptional and has already been treated; a curve outside its support intersects the effective D nonnegatively. Therefore D is nef. [F1, F2, F3, F4, step 1.1, construct]

3.1 Its complete system has no fixed part and no base point: the movable part is numerically proportional by Hodge, has positive integral L-degree one, and its fixed exceptional part has square zero, hence vanishes. Let f:T→P1 be the connected-fibre morphism. A general fibre F has F²=0, LF=1 and genus zero by adjunction. There is no singular fibre. For a multiple irreducible fibre, LF=1 forces multiplicity one and arithmetic genus zero makes it smooth. In a reducible fibre, every component has negative square, and $\sum m_{i}$ $K_{T}$ $C_{i}=K_{T}$ F=−2 gives a component with $K_{T}$ $C_{i}<0$; adjunction forces it to be a rational (−1)-curve. This is impossible since $K_{T}=−2L$ has even degree on every curve. [F1, F2, F3, F4, step 2.1, construct]

4.1 Thus f is a smooth P1 fibration. Since L restricts to O(1) on every fibre, the Cech cohomology of P1 gives a rank-two bundle $E=f_*L$, base change, and surjective evaluation f*E→L. The induced T→P(E) is an isomorphism on every fibre and hence an isomorphism. Higher direct images of L vanish, and χ(L)=4 gives deg $E=2$. A maximal-degree line subbundle O(a)⊂E has $a\ge 1$ because χ(E(−1))=2; its quotient is O(2−a). The extension splits, since H1(O(2a−2))=0. Nefness of the tautological L forces both quotient degrees a and2−a to be nonnegative. Thus E is a sum of generated line bundles and L is generated. This contradicts the assumed base point. Consequently the weak quadric polarization is globally generated. [F1, F2, F3, F4, step 3.1, construct]

5.1 The argument constructing the maximal line subbundle is elementary on P1: twist down until sections cease, saturate a nonzero section to a line, and choose the largest resulting degree; the degrees are bounded above by embedding E into a sum of sufficiently positive line bundles. No splitting theorem is imported. [F1, F2, F3, F4, step 4.1, construct]

6.1 Let T be smooth, L nef and big, $K_{T}=−3L$ and L²=1. Adjoint vanishing gives $H1(O_{T})=H1(L)=0$ and RR gives h0(L)=3. Write |L|=B+|P| with B fixed. The moving part has $LP>0$, and $LP\le 1$, so LP=1, LB=0 and $P²\le 1$. Its square cannot be zero: a square-zero moving pencil has no base point, and its connected primitive fibre F would have LF=1 and F²=0, giving 2g(F)−2=−3 by adjunction. Hence P²=1, and B²=(L−P)²=0 forces $B=0$ by negative definiteness on the L-null locus. [F1, F2, F3, F4, step 5.1, construct]

7.1 If |L| had a base point, two general members would have common zero scheme of length one. Their independent first-order local terms make a general member C smooth there; Bertini makes it smooth elsewhere. No exceptional component occurs in a general member, and the total L-degree one permits only one nonexceptional component, so C is connected and integral. Adjunction gives genus zero. But H0(L)→H0(C,L|C) is surjective because $H1(O_{T})=0$, and $L|C=O_{P1}(1)$ is generated. A common base point on C is impossible. Thus L is generated. [F1, F2, F3, F4, step 6.1, construct] ∎

## Remarks

Research-only source candidate; no production admission or mathematical-acceptance claim. The separate canonical-surface resolution and fundamental-section restriction arguments are required to apply this smooth-surface statement to a singular cut. Full Mella9705012v1 was read for the overall problem; no full Saint-Donat or del-Pezzo classification source was read or invoked.
