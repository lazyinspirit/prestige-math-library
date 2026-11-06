---
id: thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality
kind: theorem
title: Ordinary sheaf Bogomolov Gieseker discriminant inequality
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
axiom_use: "ZF + full Axiom of Choice, inherited from the explicit geometric and coherent suppliers."
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-chern-character-and-todd-class
  - thm-auslander-buchsbaum-formula
  - thm-auslander-buchsbaum-serre-regularity-criterion
  - thm-grothendieck-riemann-roch-for-projective-morphisms
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-hodge-index-theorem-for-smooth-projective-surfaces
  - lem-gts-homogeneous-representations-preserve-slope-semistability
  - lem-gts-ordinary-slope-semistable-restriction-to-high-degree-surfaces
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-hodge-index-theorem-for-smooth-projective-surfaces: mathematical-premise
  lem-gts-homogeneous-representations-preserve-slope-semistability: mathematical-premise
  lem-gts-ordinary-slope-semistable-restriction-to-high-degree-surfaces: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Bayer, Macri and Stellari, The space of stability conditions on abelian threefolds and on some Calabi–Yau threefolds
      url: https://arxiv.org/abs/1410.1585
      locator: v2 Section 3 Theorem 3.2, exact classical ordinary-sheaf Statement read; it is not a proof input
    - title: Ramanan and Ramanathan, Some remarks on the instability flag
      url: https://doi.org/10.2748/tmj/1178228852
      locator: Homogeneous-representation method; its actual proof is supplied by the attached local GIT lemma
    - title: Flenner, Restrictions of semistable bundles on projective varieties
      url: https://eudml.org/doc/139994
      locator: Independent ordinary restriction supplied by the separately authored local restriction lemma, not by a tilt theorem
dependency_level: 2
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume AC. Let S be a smooth integral complex projective surface, H an ample Cartier divisor and F a torsion-free coherent sheaf of $\operatorname{rank} r>0$ which is slope-semistable for degree H c1 and slope H c1/r. Then

    $\Delta(F):=c1(F)^2−2r ch2(F) \ge 0,
    (H c1(F))^2−2(H^2 r)ch2(F) \ge 0$.

Let X be a smooth integral complex projective threefold, H ample Cartier, and F torsion-free slope-semistable for degree $H^2 c1$ and slope $H^2 c1/r$. Then

    $H(c1(F)^2−2r ch2(F)) \ge 0,
    \Delta_H(F):=(H^2 c1(F))^2−2(H^3 r)(H ch2(F)) \ge 0$.

All displayed inequalities mean degrees of their zero-cycles. Multiplying either slope convention by the common positive number $H^2$ or $H^3$ leaves semistability unchanged, so these Statements include the normalized conventions of the tilt consumer. No singular-surface inequality or tilt-restriction theorem is asserted.

## Facts & Assumptions

**Given:** Exactly the smooth varieties, polarization and slope-semistable torsion-free sheaf in the Statement.

[F1] [[lem-gts-homogeneous-representations-preserve-slope-semistability]] proves directly in characteristic zero that a homogeneous rational $GL_r$ representation of scalar weight w sends a slope-semistable bundle to a slope-semistable bundle of slope w mu. In particular $\operatorname{End} \operatorname{Sym}^m$ is semistable of slope zero. Its proof uses no Bogomolov or restriction theorem.

[F2] [[def-chern-character-and-todd-class]] gives $ch=\operatorname{rank}+c1+(c1^2−2c2)/2+$..., with coherent extension by finite resolutions on smooth projective schemes. [[thm-grothendieck-riemann-roch-for-projective-morphisms]] applied to the projective structure map supplies the ACTUAL bundle/coherent Euler formula, chi(E)=degree(ch(E)td(TS)). The narrower line-bundle-only surface RR Statement is not used outside its scope. In particular c1(E)=0 on a surface gives $\chi(E)=\operatorname{rank}(E)\chi(O_S)+ch2(E)$.

[F3] [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] gives $h2(E)=h0(E \operatorname{dual} \otimes K_S)$ for bundles on S. [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] gives $(H D)^2\ge H^2 D^2$ for divisor classes, by applying its orthogonal Statement to a rational multiple of $D−(H D/H^2)H$.

[F4] Same-packet independent ordinary restriction interface [[lem-gts-ordinary-slope-semistable-restriction-to-high-degree-surfaces]]: on the smooth complex projective threefold, a sufficiently high general smooth member of |mH| has torsion-free slope-semistable restriction of F. The actual attached source supplies this exact existence Statement by its ordinary incidence/GIT proof. It may not be replaced by the tilt-restriction lemma, which assumes the present theorem. Only the threefold clauses use this interface. Its sole new representation dependency is [F1], so the dependency order is representation preservation, ordinary restriction, then the present theorem.

[F5] On a smooth surface a torsion-free sheaf's double dual is a bundle, with finite-length quotient. One direct local verification: a finite presentation of the dual module, when dualized, realizes a reflexive module M as a kernel 0 -> M -> free -> C -> 0 with C a submodule of a free module. Since the ring is a two-dimensional regular local domain, C has depth at least one, and the depth lemma makes M have depth two. The actual [[thm-auslander-buchsbaum-serre-regularity-criterion]] gives finite projective dimension there, and [[thm-auslander-buchsbaum-formula]] gives projective dimension zero, hence freeness. Determinants, finite-length Chern characters, and saturated ranks can consequently be handled by the codimension-one DVR and finite-resolution calculus.

[F6] Full AC is retained from the listed coherent and GIT interfaces. [[def-axiom-of-choice]].

## Proof

1.1 We establish a section bound on S which uses no semistability of any restriction. Fix a real number u and let B be ANY slope-semistable vector bundle with $\mu_H(B)=u$. Let G be the coherent image of $H0(B) \otimes O_S$ -> B, of rank k. It is globally generated and torsion-free, H0(G)=H0(B), and $H c1(G)\le ku$. If $k<\operatorname{rank}(B)$ this is semistability; if $k=\operatorname{rank}(B)$, the determinant of its inclusion has effective zero divisor and gives the same inequality. If $u<0$, global generation makes the determinant of G effective of nonnegative H-degree, a contradiction unless $G=0$. Thus h0(B)=0 in that case. [F1, F5, given, construct]

2.1 Suppose $u\ge 0$. Choose once an integer $a>0$ such that aH is very ample and $a H^2>u$. Semistability and step1.1 imply H0(B(−aH))=0. Choose a smooth C in |aH| avoiding the finite singular set of G. Such choices exist directly from the very ample embedding: the incidence of hyperplanes containing a surface tangent plane has dimension one less than the full dual projective space, and finitely many point-incidence hyperplanes are also proper subsets. The sequence for G and C therefore gives an injection H0(G)->H0(C,G|C). The latter is a globally generated bundle of rank k and degree aH $c1(G)\le aku$. For ANY globally generated rank-k bundle V on a smooth curve, choose k−1 general generating sections with no rank drop: at a fixed point rank drop has matrix codimension two, and union over a one-dimensional curve still has positive codimension in the section parameter space. Its quotient is the line bundle det V. Hence $h0(V)\le k−1+h0(\operatorname{det} V)\le k+deg V$. The last bound follows by evaluation at deg(V)+1 distinct points; a nonzero line section cannot vanish at more points than its degree. We conclude $h0(S,B)\le \operatorname{rank}(B)(1+a u)$. The constant depends only on u,H, not on B or its rank. The chosen curve may vary with G while its degree aH is fixed; no sheaf restriction theorem was used. [F5, F6, step 1.1, construct, algebra]

3.1 Let E be a slope-semistable bundle of rank r on S. For $m\ge 1$ set $R_m=\operatorname{binomial}(m+r−1,r−1)$, and $B_m=\operatorname{End}(\operatorname{Sym}^m E)$. The attached GIT lemma [F1] makes $B_m$ semistable of slope zero and $\operatorname{rank} R_m^2$. Its trace pairing identifies it with its dual. Twisting by $K_S$ preserves semistability and shifts slope by the FIXED number $H K_S$. Apply steps1.1–2.1 first at $u=0$ and then at $u=H K_S$. Serre duality [F3] gives constants C0,C2 independent of m with $h0(B_m)\le C0 R_m^2, h2(B_m)\le C2 R_m^2$. One may take C0=1; if $H K_S<0$ take C2=0, otherwise choose a as in step2.1 and $C2=1+a H K_S$. [F1, F3, step 1.1, step 2.1, algebra]

4.1 We compute the discriminant coefficient exactly. Use formal Chern roots x1,...,xr. On the full flag bundle E has line quotients; the induced symmetric-power filtration has the monomial line quotients indexed below. Additivity of the Chern character and injectivity in the splitting principle therefore justify computing the actual bundle character by these formal weights. The weights of $\operatorname{Sym}^m$ are $\sum \alpha_i x_i$ for all $\alpha_i\ge 0$ with $\sum \alpha_i=m$. Symmetry and the product generating function $\prod_i(1−t_i)^{(−1)}$ give $\sum_{\alpha} \alpha_i =R_m m/r, \sum_{\alpha} \alpha_i(\alpha_i−1)=2R_m m(m−1)/(r(r+1)), \sum_{\alpha} \alpha_i \alpha_j=R_m m(m−1)/(r(r+1))$ for $i\ne j$. For example the last two follow by differentiating in $t_i$ twice, or once in each of $t_i,t_j$, and then taking the coefficient of total degree m. Consequently $c1(\operatorname{Sym}^m E)=R_m m c1(E)/r, ch2(\operatorname{Sym}^m E)=R_m m(m+r) ch2(E)/(r(r+1)) +R_m m(m−1)c1(E)^2/(2r(r+1))$. Since $ch2(\operatorname{End} V)=2 \operatorname{rank}(V)ch2(V)−c1(V)^2$ and c1(End V)=0, substitution gives $ch2(B_m)/R_m^2 =−m(m+r)\Delta(E)/(r^2(r+1))$. These are equalities of rational Chow zero-cycles, so taking degrees is legitimate. They include rank one, where a line bundle has $\Delta=0$. [F2, step 3.1, algebra]

5.1 Riemann–Roch [F2] and $c1(B_m)=0$ give $\chi(B_m)/R_m^2 =\chi(O_S)−m(m+r)\Delta(E)/(r^2(r+1))$. On the other hand h1 is nonnegative, so step3.1 implies $\chi(B_m)/R_m^2 \le C0+C2$. If Delta(E)<0 the displayed Euler quotient tends to positive infinity, a contradiction. Thus $\Delta(E)\ge 0$ for every slope-semistable bundle E on S. This is the ordinary surface Bogomolov inequality, obtained without Hermitian–Einstein or ordinary restriction as a premise. [F2, step 3.1, step 4.1, algebra]

6.1 For the given torsion-free F on S, let $E=F$ double dual. Its quotient $Q=E/F$ has finite length, and E is locally free by [F5]. It is semistable: intersect any positive-rank subsheaf of E with F; that changes it only at finitely many points and hence preserves rank and degree. For a closed point p, GRR for its closed immersion into S gives ch(k(p))=[p] in degree two and zero in lower degrees. A composition series and Chern additivity therefore give c1(F)=c1(E), ch2(E)=ch2(F)+length(Q). Therefore $\Delta(F)=\Delta(E)+2r \operatorname{length}(Q)\ge 0$. This proves the full torsion-free surface clause. The normalized surface discriminant is also nonnegative because $(H c1)^2−2H^2 r$ ch2 $=[(H c1)^2−H^2 c1^2]+H^2 \Delta(F)$, and the first bracket is nonnegative by the exact surface index theorem [F3]. [F2, F3, F5, step 5.1, algebra]

7.1 For the threefold choose a sufficiently high general smooth S in |mH| by the INDEPENDENT ordinary restriction interface [F4]. The restricted sheaf is torsion-free and slope-semistable. Restriction of its coherent Chern character is the usual pullback: multiplication by the Cartier equation is injective on the original torsion-free F, so its derived Cartier restriction has no negative homology; restrict a finite locally free resolution to compute it. Applying step6.1 on S yields $0\le \Delta(F|S)=m H(c1(F)^2−2r ch2(F))$. Division by $m>0$ proves the strong threefold inequality. This is the only use of [F4]. [F2, F4, step 6.1, algebra]

8.1 Apply the surface Hodge index also to H|S and c1(F)|S. Their intersection numbers are respectively $mH^3, mH^2c1(F)$, and mH $c1(F)^2$. Thus $(H^2c1(F))^2−H^3(Hc1(F)^2)\ge 0$. Adding $H^3$ times step7.1's strong discriminant gives $(H^2c1(F))^2−2H^3 r(Hch2(F))\ge 0$, exactly the normalized scalar required by the primary tilt construction. Positive normalization of slope by $H^3$, or by $H^2$ on the surface, has no effect on any subobject inequality. No conclusion on singular normal surfaces is drawn. [F3, step 6.1, step 7.1, algebra] ∎

## Source and interface limits

Read the exact classical ordinary threefold Statement in Bayer–Macri–Stellari 1410.1585v2, Section3 Theorem3.2, and its immediate discriminant-definition context. That passage states ordinary BG without proving it, so it supplies attribution only. The GIT preservation argument is a separately complete local construction, not a named tensor-product theorem premise. Actual Chern-character Definition, full projective GRR Statement, smooth-projective locally-free Serre duality Statement and surface Hodge-index Statement were read for precisely the uses above. The simple surface line-bundle RR theorem alone would NOT supply step5.1's vector-bundle Euler formula; GRR does. The independent ordinary restriction source is separately authored in the same packet; its exact public existence interface and hypotheses were read for step7.1, without a new full-proof review claim. No tilt restriction, Bogomolov inequality, Hermitian–Einstein existence theorem, Narasimhan–Seshadri theorem or projective/rational replacement is hidden among the premises.
