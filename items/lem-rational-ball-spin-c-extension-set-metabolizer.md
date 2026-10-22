---
id: lem-rational-ball-spin-c-extension-set-metabolizer
kind: lemma
title: "Spin-c extensions over a rational ball form a metabolizer coset"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - lem-rational-homology-four-ball-admits-spinc
  - lem-spin-c-structures-form-an-h2-torsor
  - lem-boundary-spin-c-restriction-and-line-twists-are-equivariant
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-poincare-lefschetz-duality
  - thm-long-exact-sequence-of-a-pair-in-singular-cohomology
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - thm-poincare-duality-for-oriented-topological-manifolds
  - def-bockstein-connecting-operation
  - lem-the-bockstein-is-independent-of-lift-and-cocycle-representative
  - prop-cup-product-is-natural-unital-and-associative
  - def-axiom-of-choice
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
axiom_strength: "Assume AC for finite triangulation, Poincare-Lefschetz duality, UCT, and Bockstein cochain lifts."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Paolo Aceto and Marco Golla, Dehn Surgeries and Rational Homology Balls"
      url: "https://arxiv.org/pdf/1509.07559v2"
      locator: "Section 2, Proposition 2.2 and proof sketch; extension-set size and square-order argument"
    - title: "Tim D. Cochran, Shelly Harvey, and Peter Horn, Filtering Smooth Concordance Classes of Topologically Slice Knots"
      url: "https://msp.org/gt/2013/17-4/gt-v17-n4-p04-s.pdf"
      locator: "Section 6, Lemma 6.3, printed pp. 2129–2131; exact sequence and metabolizer proof"
---

## Statement

Assume AC. Let $B$ be a compact connected oriented smooth four-manifold with $H_*(B;\mathbb Q)\cong H_*(\mathrm{point};\mathbb Q)$ and connected rational homology sphere boundary $Y$. The coefficient sequence $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$ gives an isomorphism $\beta:H^1(Y;\mathbb Q/\mathbb Z)\to H^2(Y;\mathbb Z)$. Define the cohomological linking pairing by
$$\lambda_Y(x,y)=\langle\beta^{-1}(x)\smile y,[Y]\rangle\in\mathbb Q/\mathbb Z.$$
Under Poincare duality $H^2(Y;\mathbb Z)\cong H_1(Y;\mathbb Z)$, this pairing agrees, up to the global orientation sign, with the chain torsion linking pairing: for torsion classes represented by oriented 1-cycles $C,D$, choose $n>0$ and an integral 2-chain $F$ with $\partial F=nC$, and set $\lambda_Y([C],[D])=(F\mathbin{\cdot}D)/n\pmod{\mathbb Z}$. The two conventions therefore have the same annihilator subgroups.
Let $M$ be the image of restriction $H^2(B;\mathbb Z)\to H^2(Y;\mathbb Z)$ and $M^\perp=\{x:\lambda_Y(m,x)=0\text{ for every }m\in M\}$. Then the boundary Spin$^c$ structures extending over $B$ form one affine coset of $M$, the pairing is nonsingular, $M=M^\perp$, and $|M|^2=|H_1(Y;\mathbb Z)|$.

## Statement references

[[lem-spin-c-structures-form-an-h2-torsor|The affine H2 action on Spin-c structures]]

[[thm-poincare-duality-for-oriented-topological-manifolds|Poincare duality for the oriented boundary]]

## Facts & Assumptions

**Given:** AC, the compact connected oriented smooth rational homology four-ball $B$, and its connected rational homology sphere boundary $Y$.

[A1] AC is assumed by the finite-triangulation, Poincare-Lefschetz, UCT, and Bockstein suppliers used below ([[def-axiom-of-choice]]).

[F1] Compact smooth manifolds admit finite triangulations, so the integral homology groups of $B$ are finitely generated ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]).

[F2] For a compact oriented four-manifold with boundary, cap product gives $H^j(B,Y;\mathbb Z)\cong H_{4-j}(B;\mathbb Z)$ and $H^j(B;\mathbb Z)\cong H_{4-j}(B,Y;\mathbb Z)$ under AC ([[thm-poincare-lefschetz-duality]]).

[F3] The pair $(B,Y)$ has the cohomology and homology long exact sequences, and cohomology of a free integral chain complex satisfies the UCT exact sequence ([[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[F4] The connecting map for a short exact coefficient sequence is defined by lifting cocycles and taking the coboundary; it is independent of the chosen lift and representative ([[def-bockstein-connecting-operation]], [[lem-the-bockstein-is-independent-of-lift-and-cocycle-representative]]).

[F5] Cup product is natural under inclusion. For the oriented rational homology sphere $Y$, Poincare duality identifies $H^2(Y;\mathbb Z)$ with $H_1(Y;\mathbb Z)$, and the universal coefficient theorem identifies $H^1(Y;\mathbb Q/\mathbb Z)$ with $\operatorname{Hom}(H_1(Y),\mathbb Q/\mathbb Z)$ ([[prop-cup-product-is-natural-unital-and-associative]], [[thm-poincare-duality-for-oriented-topological-manifolds]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[F6] Once a Spin$^c$ lift is given, the isomorphism classes of lifts form an affine $H^2(-;\mathbb Z)$-space ([[lem-spin-c-structures-form-an-h2-torsor]]). Boundary restriction is the actual normal-first rank-four-to-rank-three principal reduction and is equivariant for the restriction of line bundles and $H^2$ ([[lem-boundary-spin-c-restriction-and-line-twists-are-equivariant]]).

[F7] Every compact connected oriented smooth rational homology four-ball admits at least one Spin$^c$ structure ([[lem-rational-homology-four-ball-admits-spinc]]).

## Proof
**Proof technique:** compute the restriction subgroup from the cohomology sequence, prove it isotropic by the coefficient Bockstein formula, and compare orders.

**Given:** The data above.

1.1 Since $B$ has finite CW type by [F1] and has zero positive rational homology, each $H_i(B;\mathbb Z)$ for $i>0$ is finite. Put $a=|H_1(B;\mathbb Z)|$ and $b=|H_2(B;\mathbb Z)|$. The UCT [F3] gives $|H^2(B;\mathbb Z)|=a$ and $|H^3(B;\mathbb Z)|=b$, because the Hom terms from finite groups vanish and $\operatorname{Ext}^1(\mathbb Z/m,\mathbb Z)\cong\mathbb Z/m$. Poincare-Lefschetz duality [F2] gives $|H^2(B,Y;\mathbb Z)|=b$ and $|H^3(B,Y;\mathbb Z)|=a$. [A1, F1, F2, F3, given]

2.1 In the pair sequence, $H^1(Y;\mathbb Z)=0$ because $Y$ is a rational homology sphere and its first integral cohomology is $\operatorname{Hom}(H_1(Y),\mathbb Z)$. Thus $H^2(B,Y)\to H^2(B)$ is injective. Also $H^3(Y;\mathbb Z)\cong\mathbb Z$, so the map from the finite group $H^3(B;\mathbb Z)$ to $H^3(Y;\mathbb Z)$ is zero; exactness makes $H^3(B,Y)\to H^3(B)$ surjective. It follows that the restriction image $M$ has order $a/b$, and that $H^2(Y)/M$ has order $a/b$. Hence $|H^2(Y)|=(a/b)^2$ and $|M|^2=|H^2(Y)|=|H_1(Y)|$, the last equality following from UCT and Poincare duality for the rational homology sphere. [F2, F3, step 1.1, algebra]

2.2 For any $m\in M$, choose $u\in H^2(B;\mathbb Z)$ restricting to $m$, and let $c$ be an integral cocycle representing $u$. Since $H^2(B;\mathbb Q)=0$, the rational cocycle $c$ is $\delta q$ for a rational $1$-cochain $q$; reducing $q$ modulo $\mathbb Z$ gives a cocycle $v\in H^1(B;\mathbb Q/\mathbb Z)$ with $\beta(v)=u$. It is unique because $H^1(B;\mathbb Q)=0$. Restriction of this cochain lift gives $\beta(v|_Y)=m$. For $Y$, both $H^1(Y;\mathbb Q)$ and $H^2(Y;\mathbb Q)$ vanish, so the same coefficient sequence proves that $\beta:H^1(Y;\mathbb Q/\mathbb Z)\to H^2(Y;\mathbb Z)$ is an isomorphism. By UCT, $H^1(Y;\mathbb Q/\mathbb Z)\cong\operatorname{Hom}(H_1(Y),\mathbb Q/\mathbb Z)$; by Poincare duality, $H^2(Y;\mathbb Z)\cong H_1(Y;\mathbb Z)$. Cup evaluation is therefore the perfect character-evaluation pairing under these identifications. If $X,D$ are torsion $1$-cycles with $mX=\partial F$, the cochain represented by the rational bounding chain $F/m$, reduced modulo integral cochains, is $\beta^{-1}(\mathrm{PD}^{-1}[X])$; its evaluation against $\mathrm{PD}^{-1}[D]$ is $F\cdot D/m$ modulo $\mathbb Z$. Thus this cohomological formula agrees with the chain linking form up to the global orientation sign, which does not change annihilators. [F2, F3, F4, F5, step 1.1]

3.1 If $x\in M$ is the restriction of $w\in H^2(B;\mathbb Z)$, naturality of cup product [F5] gives $\lambda_Y(m,x)=\langle v|_Y\smile w|_Y,[Y]\rangle=\langle v\smile w,i_*[Y]\rangle=0$, since $i_*[Y]=0$ in $H_3(B;\mathbb Z)$ by the homology pair sequence: $[Y]$ is the boundary of the relative fundamental class $[B,Y]$. Therefore $M\subseteq M^\perp$. For a nonsingular finite pairing on a group $G$, restriction of characters $G\to\operatorname{Hom}(G,\mathbb Q/\mathbb Z)$ to $\operatorname{Hom}(M,\mathbb Q/\mathbb Z)$ is onto. To see this, extend a character from a subgroup $H$ one generator $g$ at a time: if the least $n>0$ with $ng\in H$ is fixed, choose $z\in\mathbb Q/\mathbb Z$ with $nz=f(ng)$ (possible because multiplication by $n$ is onto), and set $f'(h+kg)=f(h)+kz$; the relation $ng\in H$ makes $f'$ well defined. Since $G$ is finite this process terminates. Hence $|M^\perp|=|G|/|M|$. Apply this with $G=H^2(Y;\mathbb Z)$ and use step 2.1 to obtain $|M^\perp|=|M|$. Thus $M=M^\perp$. [F5, step 2.1, step 2.2, algebra]

4.1 By [F7], choose a Spin$^c$ structure on $B$. Then [F6] makes the Spin$^c$ structures on $B$ an affine $H^2(B;\mathbb Z)$-space. Restriction is equivariant, so the image of this nonempty affine space is one affine coset of the image subgroup $M$. This proves the extension-set assertion. If $M=0$, the same sequence gives $|H^2(Y)|=1$, so the trivial subgroup is its own annihilator; the empty-boundary case is excluded by the connected-boundary hypothesis. [F6, F7, step 2.1, step 3.1] ∎
