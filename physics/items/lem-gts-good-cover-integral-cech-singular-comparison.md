---
id: lem-gts-good-cover-integral-cech-singular-comparison
kind: lemma
title: Natural integral good-cover Cech to singular comparison
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
deps:
  - def-axiom-of-choice
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-open-cover
  - def-refinement-open-cover
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cohomology-with-coefficients
  - def-cover-small-singular-chain-subcomplex
  - thm-cover-small-inclusion-is-a-chain-homotopy-equivalence
  - thm-singular-chain-homotopy-formula
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cech-cochain-complex-open-cover: mathematical-premise
  def-cech-cohomology-open-cover: mathematical-premise
  def-refinement-open-cover: mathematical-premise
  def-singular-cochain-complex-with-coefficients: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-cover-small-singular-chain-subcomplex: mathematical-premise
  thm-cover-small-inclusion-is-a-chain-homotopy-equivalence: mathematical-premise
  thm-singular-chain-homotopy-formula: mathematical-premise
proof_strategy: direct
axiom_strength: ZF + full AC for simultaneous choices of cover indices and intersection contractions
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
      locator: Proposition 2.21 motivates the small-chain input; the explicit published local chain-homotopy supplier is used below, and the integral Cech double-complex comparison is proved here.
    - title: Michael K. Murray, Bundle Gerbes
      url: https://arxiv.org/pdf/dg-ga/9407015v1
      locator: Section 5 uses the integral Cech-to-singular identification for the Dixmier–Douady class; no external comparison theorem is imported as a proof premise.
dependency_level: 0
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. Let $X$ be a topological space, let $\mathcal U=(U_i)_{i\in I}$ be an open cover indexed by a linearly ordered set, and let $G$ be an abelian group. Write $\underline G$ for the sheaf of locally constant $G$-valued functions, with $G$ discrete. There is a canonical homomorphism
$$\Psi^q_{X,\mathcal U,G}:\check H^q(\mathcal U;\underline G)\longrightarrow H^q_{\mathrm{sing}}(X;G)\qquad(q\ge0).$$
If every nonempty finite intersection of members of $\mathcal U$ is contractible, this homomorphism is an isomorphism in every degree. It is natural in homomorphisms of coefficient groups and in continuous maps with compatible cover functions: if $f:Y\to X$ is continuous, $\mathcal V=(V_j)_{j\in J}$ is an ordered open cover of $Y$, and $c:J\to I$ satisfies $f(V_j)\subseteq U_{c(j)}$, then
$$f^*\Psi^q_{X,\mathcal U,G}=\Psi^q_{Y,\mathcal V,G}\,H^q(f,c)^*,$$
where $(f,c)^*$ is the usual alternating Cech pullback using $c$ and restriction of locally constant functions along $f$. In particular this includes refinement functions, which need not preserve order, and open restrictions. For two contractible-intersection covers, the resulting refinement homomorphism on cohomology is independent of the refinement function. For contractible-intersection covers and an arbitrary continuous map $f$, even when no cover function is supplied, the canonical pullback between the fixed-cover cohomology groups is defined by $\Psi_{Y,\mathcal V,G}^{-1}f^*\Psi_{X,\mathcal U,G}$; these maps are functorial and agree with the usual Cech cover-map pullbacks whenever such a cover map is supplied. In degree zero, $\Psi^0$ sends a compatible family of locally constant functions to the same function on the points of $X$.

The cohomology conventions are the ordered Cech differential with alternating deletion and the singular coboundary $d\varphi=\varphi\partial$, without an extra degree sign. Cochains are arbitrary functions on the singular simplex set, not finitely supported functions. For a nonempty contractible space the one-member cover in particular gives $H^0_{\mathrm{sing}}(X;G)=G$ and $H^q_{\mathrm{sing}}(X;G)=0$ for $q>0$. In particular, for $G=\mathbb Z$ this supplies natural integral comparison isomorphisms for every good cover of a finite-dimensional Hausdorff second-countable smooth manifold. No realification, universal-coefficient theorem, dualization of a mere homology isomorphism, or field-coefficient hypothesis is used. An arbitrary restricted cover $(U_i\cap O)$ of an open subset need not have contractible intersections: the naturality square still holds for it, while an isomorphism is asserted only for covers satisfying the stated intersection condition.

## Statement references

[[def-cech-cohomology-open-cover]]

[[def-refinement-open-cover]]

[[def-singular-cochain-complex-with-coefficients]]

[[def-singular-cohomology-with-coefficients]]

[[thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]]

## Facts & Assumptions

**Given:** Full AC, $X,\mathcal U,G$ as stated. All chains below have integer coefficients. The cochain group with values in $G$ means $\operatorname{Hom}_{\mathbb Z}(-,G)$, and all chain groups in negative degrees are zero. Empty intersections contribute zero cochains. In an alternating family, a repeated cover index has value zero; permuting distinct indices multiplies its value by the permutation sign. This identifies alternating families with the stated increasing-tuple Cech convention by sorting.

[F1] [[def-cech-cochain-complex-open-cover]], [[def-cech-cohomology-open-cover]] and [[def-refinement-open-cover]] supply the ordered and alternating deletion formulas, with cover functions allowed to repeat or reorder indices.

[F2] [[def-cover-small-singular-chain-subcomplex]] gives $A_*=C_*^{\mathcal U}(X;\mathbb Z)$, the free subgroup on simplices whose image lies in one cover member. The complete integral construction in [[thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]] supplies maps $r:C_*(X;\mathbb Z)\to A_*$ and $D:C_*(X;\mathbb Z)\to C_{*+1}(X;\mathbb Z)$ with $r\iota=1$ and $1-\iota r=\partial D+D\partial$, where $\iota$ is inclusion. That supplier constructs them by image-preserving barycentric subdivision and a dimension-recursive finite subdivision depth; it is a chain homotopy equivalence, not only a homology isomorphism.

[F3] [[def-singular-cochain-complex-with-coefficients]] and [[def-singular-cohomology-with-coefficients]] give the positive-precomposition coboundary and all-degree quotient convention. [[thm-singular-chain-homotopy-formula]] gives the integral signed prism identity for a supplied continuous homotopy, including degree zero.

[A1] [[def-axiom-of-choice]] is used to choose one admissible cover index for each cover-small simplex in each degree, and one contraction and point for each nonempty finite cover intersection. The comparison maps themselves will be defined using canonical maps and inverses on cohomology; they do not depend on those choices.

## Proof

1.1 Put $A^q=\operatorname{Hom}_{\mathbb Z}(A_q,G)$ and $C^q=\operatorname{Hom}_{\mathbb Z}(C_q(X;\mathbb Z),G)$. Restriction $\rho=\iota^*:C^*\to A^*$ is a cochain homotopy equivalence. Indeed $r^*$ is a cochain map, $\rho r^*=1$, and $r^*\rho-1=-dD^*-D^*d$, where $(D^*\varphi)(a)=\varphi(Da)$. These equations follow by precomposing [F2]'s integral chain identities and use precisely the positive convention [F3]. Thus $H^q(\rho)$ is invertible for every abelian $G$, without assuming that $\operatorname{Hom}(-,G)$ preserves arbitrary quasi-isomorphisms. This restriction map is canonical, although the homotopy inverse used to prove it is an isomorphism need not be. [given, F2, F3, algebra]

1.2 For $p,q\ge0$ define $$K^{p,q}=\prod_{i_0<\cdots<i_p}C^q(U_{i_0}\cap\cdots\cap U_{i_p};G).$$ Use alternating extension in the cover indices. Let $\delta_h$ be alternating deletion followed by restriction and let $d_v$ be the singular coboundary on each intersection. Both square to zero and commute, because restriction of a cochain commutes with precomposition by the singular boundary. The total complex is $\operatorname{Tot}^nK=\bigoplus_{p+q=n}K^{p,q}$, with total differential $d_T=\delta_h+(-1)^p d_v$ on bidegree $(p,q)$; the sum has finitely many bidegrees for each $n$. Define $a:A^*\to\operatorname{Tot}K$ by restricting a small cochain to each $U_i$, placing it in $K^{0,*}$. Its horizontal differential is zero on overlaps, and its vertical differential is the singular one, so it is a cochain map. Augment each horizontal row by $A^q$ in column $p=-1$. Given a small simplex $\sigma$, let $I_\sigma=\{i:\operatorname{im}\sigma\subset U_i\}$ and choose $i(\sigma)\in I_\sigma$ using [A1]. On a component evaluated at a singular simplex with image in $U_{i_0}\cap\cdots\cap U_{i_{p-1}}$, set $$ (hc)_{i_0\cdots i_{p-1}}(\sigma)=c_{i(\sigma),i_0,\ldots,i_{p-1}}(\sigma).$$ For $p=0$ this means $(hc)(\sigma)=c_{i(\sigma)}(\sigma)\in A^q$. Alternating deletion gives $\delta_hh+h\delta_h=1$ on the augmented row: the deletion of the newly prepended index gives $c$ and the other deletion terms cancel in pairs with opposite signs. Repetitions give zero in exactly the alternating convention. Thus every augmented row is split exact. No commutation between $h$ and $d_v$ is asserted or needed. [F1, F2, F3, A1, algebra]

1.3 Let $B^p=C^p(\mathcal U;\underline G)$. Define $w:B^*\to\operatorname{Tot}K$ in bidegree $(p,0)$ by evaluating the locally constant function on each singular vertex in its intersection. A locally constant function is constant along a path, so its singular coboundary on every singular edge is zero. Thus $w$ commutes with the total differential and is a cochain map for any open cover. Now assume every nonempty finite intersection $U_J$ is contractible. A supplied contraction, its point inclusion and the constant map give integral chain maps whose composites are chain homotopic to the identity by the signed prism formula [F3]. Dualizing these homotopies into $G$ shows that $C^*(U_J;G)$ has the cohomology of the singular cochain complex of a point. That point complex has $G$ in each degree, with coboundary zero in even degrees and the identity in odd degrees: its degree-$q$ boundary sum is $\sum_{j=0}^{q+1}(-1)^j$. Hence its cohomology is $G$ in degree zero and zero in positive degrees. Since a nonempty contractible space is path connected, evaluation of a locally constant function is precisely its degree-zero cocycle identification. Consequently each column augmented by $B^p$ at $q=-1$ is exact; for products over intersections, choose all contractions simultaneously by [A1], or solve each cocycle component with their prism homotopies. This proves product exactness without a field or finite-cover hypothesis. [F1, F3, A1, algebra]

2.1 This augmented row exactness proves that $a$ is a quasi-isomorphism by a finite elimination, as follows. Add column $p=-1$ with entries $A^q$, horizontal map the augmentation $a$, and vertical part $-d$ in the total differential; the resulting total complex is the cochain mapping cone of $a$, with its degree-$n$ group $\operatorname{Tot}^nK\oplus A^{n+1}$ and differential $(z,u)\mapsto(d_Tz+au,-du)$. Let $z$ be a cocycle of this augmented total complex. It has finitely many bidegrees $p+q=n$, $p\ge-1,q\ge0$. Take its largest occupied $p$. In the cocycle equation at $(p+1,q)$, no vertical term from column $p+1$ is present, so $\delta_hz^{p,q}=0$. If $p\ge0$, augmented row exactness gives $y^{p-1,q}$ with $\delta_hy^{p-1,q}=z^{p,q}$. Subtracting $d_Ty$ removes that component and introduces only one component with smaller $p$. Iterating terminates at column $-1$; there, injectivity of the row augmentation makes a horizontally closed component zero. Hence every cocycle is a coboundary, also in degree $-1$, and the cone is acyclic. Equivalently $a$ induces isomorphisms: this equivalence can be seen directly from the cone equations, since an $a$-image that is a coboundary gives a cone cocycle, and a cocycle of the target lifts modulo a cone boundary. Therefore $H(a)$ is invertible in every degree. [step 1.2, algebra]

2.2 Exactness of the augmented columns proves that $w$ is a quasi-isomorphism by the other finite elimination. Place $B^p$ in bidegree $(p,-1)$, use its Cech differential horizontally and its evaluation augmentation vertically, and retain $d_T=\delta_h+(-1)^p d_v$. This augmented total complex is the cone of $w$ after multiplying its bottom-row coordinate in column $p$ by $(-1)^p$; under that identification its differential is $(z,u)\mapsto(d_Tz+wu,-\delta_hu)$. For a cocycle, choose the largest occupied $q$. In the equation at $(p,q+1)$, no horizontal contribution from row $q+1$ is present, so $d_vz^{p,q}=0$. Column exactness supplies a preimage in $(p,q-1)$ if $q\ge0$; multiply it by $(-1)^p$ before subtracting its total differential. This removes the component and introduces only a component with smaller $q$. The process terminates at $q=-1$, where injectivity of the evaluation augmentation makes the final component zero. There are finitely many bidegrees on each total diagonal, so no convergence, completion or spectral-sequence limiting argument occurs. Thus the cone is acyclic and $H(w)$ is an isomorphism. [step 1.3, algebra]

3.1 Define, for every ordered open cover, $$\Psi^q_{X,\mathcal U,G}=H^q(\rho)^{-1}\,H^q(a)^{-1}\,H^q(w).$$ Steps 1.1 and 2.1 give the two inverse maps in this formula for any cover. Step 2.2 says that $H(w)$ is also invertible for a contractible-intersection cover, proving the asserted isomorphism. All three maps $\rho,a,w$ were defined without choices; the cover-index selections and intersection contractions only proved their required properties. In degree zero, a Cech cocycle consists of compatible locally constant functions, hence glues to a function on $X$. Evaluating at vertices describes both $a\rho$ of that function and $w$ of its compatible family. The formula for $\Psi^0$ therefore gives that same function, with no sign change. For $X=\varnothing$ all groups are zero, and the conclusion still holds. The one-member cover of a nonempty contractible space has Cech cohomology $G$ in degree zero and zero otherwise, proving the stated singular-cohomology consequence. [step 1.1, step 2.1, step 2.2, algebra]

4.1 For the pair $(f,c)$ in the Statement, postcomposition sends a $\mathcal V$-small singular simplex in $Y$ to a $\mathcal U$-small simplex in $X$, and commutes with all singular face maps. Precomposition therefore defines pullback maps on the full and small cochain complexes, commuting with $\rho$. On the double complex use $$((f,c)^*k)_{j_0\cdots j_p}(\sigma)=k_{c(j_0),\ldots,c(j_p)}(f\circ\sigma).$$ Every map is defined on the required intersection because $f(V_j)\subset U_{c(j)}$. Repeated indices are assigned zero and arbitrary reordering uses its sign. Alternating deletion shows this map commutes with $\delta_h$ term by term; postcomposition commuting with faces shows it commutes with $d_v$. It also commutes with $a$ and $w$, since both sides restrict/evaluate the same cochain or locally constant function on the same simplex. These three commuting squares, after taking cohomology and inverting $H(\rho)$ and $H(a)$, give exactly the stated naturality equality. Applying the same construction to a homomorphism $G\to G'$ gives coefficient naturality. In particular the inclusion $\mathbb Z\to\mathbb R$ is the literal coefficient change on singular and Cech cochains, not a tensor-duality identification. [F1, F3, step 3.1, algebra]

5.1 A refinement is the case $f=\operatorname{id}$; if both covers have contractible intersections, naturality gives $H(c^\sharp)=\Psi_{\mathcal V}^{-1}\Psi_{\mathcal U}$, independently of the refinement function. Taking $f:O\hookrightarrow X$ and the cover $(U_i\cap O)$ gives the open-restriction square without requiring that the restricted cover be good. For a supplied contractible-intersection cover of $O$ mapping to $\mathcal U$, the same formula gives the square between comparison isomorphisms. For arbitrary good-cover presentations of $X,Y$ and an arbitrary continuous $f:Y\to X$, define their cohomology pullback to be $\Psi_{Y,\mathcal V,G}^{-1}f^*\Psi_{X,\mathcal U,G}$. The identity and composition laws follow by cancelling adjacent comparison inverses and using the identity and composition laws for singular cochain pullback. The cover-map equality of step 4.1 shows that this agrees with the usual Cech pullback whenever an index map exists. It also makes identity maps between any two good-cover presentations canonical and transitive. Thus arbitrary open restriction or smooth pullback is available between any supplied good-cover presentations, without assuming that restricted intersections remain contractible or that a common good refinement has been supplied. Thus the theorem supplies the integral natural good-cover comparison interface under its exact cochain conventions, while making no false assertion that open restriction preserves good covers. [step 3.1, step 4.1, algebra] ∎

## Remarks

The proof is entirely integral before applying $\operatorname{Hom}_{\mathbb Z}(-,G)$. In particular it retains torsion. It establishes no geometric differential-character comparison, Deligne cup product, anomaly physics, or charge completeness beyond this precise comparison premise. Those separate consumer hypotheses remain as stated.
