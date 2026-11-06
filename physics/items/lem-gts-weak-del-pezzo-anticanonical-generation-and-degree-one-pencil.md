---
id: lem-gts-weak-del-pezzo-anticanonical-generation-and-degree-one-pencil
kind: lemma
title: Weak del Pezzo generation and the smooth degree-one pencil
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
  precheck: pending
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

Assume AC. Let $T$ be a smooth connected projective complex surface and $L$ a nef and big Cartier line bundle, the pullback of an ample Cartier line bundle under a birational contraction to a normal surface. Suppose $K_T=-L$ and put $d=L^2>0$. Then $h^0(L)=d+1$. If $d\ge2$, $L$ is globally generated. If $d=1$, $|L|$ is a pencil without a fixed component, with a single reduced base point outside the contraction's exceptional locus; its general member is a smooth connected curve of genus one, disjoint from the exceptional locus. In this degree-one case every $kL$ with integer $k\ge2$ is globally generated.

## Facts & Assumptions

**Given:** Exactly the smooth surface and nef-big pullback line bundle in the Statement. Degree-zero effective curves are contracted by the stipulated birational contraction and have negative-definite intersection matrix by Hodge. Stability against rank-one subsheaves is defined using L-intersection, although L need not be ample.

[F1] [[thm-grothendieck-riemann-roch-for-projective-morphisms]] and [[thm-riemann-roch-for-smooth-projective-surfaces]] give the bundle and line Euler formulas. [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] gives the bundle dualities. [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] gives the negative-definite orthogonal space and degree/square inequalities.

[F2] [[lem-gts-log-adjoint-vanishing-on-snc-pairs]] gives the empty-boundary nef-big adjoint vanishing used for O and L. [[thm-bertini-smooth-hyperplane-section]] supplies smooth general members once generation has actually been established. [[thm-riemann-roch-euler-characteristic-curve]] and [[thm-serre-duality-curves-vector-bundles]] give the smooth-fibre and P1 Euler calculations.

[F3] [[thm-auslander-buchsbaum-formula]] and [[thm-auslander-buchsbaum-serre-regularity-criterion]] make reflexive modules on a regular surface locally free. This is used for a saturated rank-one kernel. At a base point of $L$, the point-Serre extension has determinant $2L$: its extension class is the kernel of the dual evaluation map for $K_T+2L=L$, and its nonzero local class gives a locally free middle term. No Reider, Bogomolov or surface classification is imported.

[F4] [[def-axiom-of-choice]] is inherited from these suppliers.

## Proof

1.1 Empty-boundary nef-big adjoint vanishing applied to $K_{T}+L=0$ gives $H^{i}(O_{T})=0$ for $i>0$, and to $K_{T}+2L=L$ gives $H^{i}(L)=0$ for $i>0$. Write $d=L²>0$. Surface RR gives h0(L)=d+1,       χ(N)=1+(N²+LN)/2 [F1, F2, F3, F4, given, construct]

2.1 for every line bundle N. In particular N²+LN is even. The pullback degree-zero curves form the negative-definite exceptional locus. The minimal-resolution operation is the direct projective (−1)-curve contraction described in the companion nef-K3 note. [F1, F2, F3, F4, step 1.1, construct]

3.1 Assume $d\ge2$ and evaluation of $L$ fails at a point $z$. Apply $\operatorname{Hom}(-,O_T)$ to $0\to I_z(2L)\to O_T(2L)\to O_z(2L)\to0$. By Serre duality and $H^1(L)=0$, $\operatorname{Ext}^1(O_T(2L),O_T)=0$; the map $\operatorname{Ext}^2(O_z(2L),O_T)\to\operatorname{Ext}^2(O_T(2L),O_T)$ is dual to evaluation $H^0(K_T+2L)=H^0(L)\to L|_z$, hence is zero. Thus $\operatorname{Ext}^1(I_z(2L),O_T)\cong\mathbb C$. Choose a nonzero class. Its restriction to the regular local ring at $z$ is the nonzero class in $\operatorname{Ext}^1(\mathfrak m_z,O_{T,z})\cong\mathbb C$, whose middle module is free of rank two; away from $z$ the quotient is a line bundle and the extension is locally free. We obtain $0\to O_T\to V\to I_z(2L)\to0$, with $V$ a rank-two vector bundle, $c_1(V)=2L$ and $c_2(V)=1$. [F1, F2, F3, F4, step 2.1, construct]

4.1 Suppose $V$ is $L$-slope-stable, where $\mu_L(F)=c_1(F)\cdot L/\operatorname{rk}(F)$ for a torsion-free sheaf $F$, and stability tests every rank-one subsheaf. Then $\mu_L(V)=d$, and twisting by $-L$ preserves stability while changing this slope to $0$. Any nonscalar endomorphism of $V$ has, after subtracting a constant eigenvalue, a nonzero rank-one map $V\to V$; its rank-one kernel and image would both have slope $<d$, contradicting additivity of $L$-degree. Hence $h^0(\operatorname{End}V)=1$. A nonzero map $V\to V(-L)$ cannot have generic rank two, since its determinant would be a nonzero section of $O_T(-2L)$, impossible because $L$ is nef and $L^2>0$. If it has rank one, its kernel has slope $<d$, so its image has slope $>d$, contradicting stability of $V(-L)$, whose rank-one subsheaves have slope $<0$. Thus $h^2(\operatorname{End}V)=\dim\operatorname{Hom}(V,V(K_T))=0$ by Serre duality. Riemann--Roch gives $\chi(\operatorname{End}V)=4\chi(O_T)+c_1(V)^2-4c_2(V)=4d$, whereas $h^0=1$ and $h^2=0$ imply $\chi\le1$. This contradiction proves that $V$ is not $L$-slope-stable. [F1, F2, F3, F4, given, step 3.1, algebra]

5.1 A saturated rank-one destabilizing subsheaf is a line bundle $M$ and satisfies $LM\ge d$. Its projection into $I_z(2L)$ is nonzero: otherwise a nonzero map $M\to O_T$ would give an effective divisor of $L$-degree $-LM<0$, contrary to nefness. Consequently $N=2L-M$ has a nonzero section vanishing at $z$, so $N$ is a nonzero effective divisor containing $z$. Put $a=LN$ and $q=N^2$. Then $0\le a\le d$; writing the torsion-free rank-one quotient by $M$ as $I_Z(N)$, Chern additivity gives $2a-q=M\cdot N\le c_2(V)=1$, hence $q\ge2a-1$. Hodge index gives $q\le a^2/d$, and surface Riemann--Roch gives $q+a$ even. [F1, F2, F3, F4, step 4.1, construct]

6.1 If $a=0$, then $N$ is supported on the contracted curves, so negative definiteness gives $q<0$; together with $q\ge-1$ this forces $q=-1$, contradicting the evenness of $q+a$. If $a>0$, then $2a-1\le q\le a^2/d\le a$, so $a=1$. But then $q\ge1$ and $q\le1/d<1$, impossible. There is no base point. Hence the anticanonical pullback $L$, and therefore $H$ on $S$, is globally generated for every $d\ge2$. [F1, F2, F3, F4, step 5.1, construct]

7.1 Now $d=1$ and h0(L)=2. Write |L|=B+|P| with B fixed and |P| a nonzero movable pencil. Since L is nef, $0\le LP\le 1$. The value $LP=0$ is impossible: the class P would lie in the negative-definite exceptional subspace although $P²\ge 0$. Thus $LP=1$ and $LB=0$; B is exceptional. The identity $LP=P²+PB=1$ gives $P²=0$ or1. [F1, F2, F3, F4, step 6.1, construct]

8.1 The value $P²=0$ is impossible. To see this without assuming irreducibility of a possibly composed moving divisor, take the connected-fibre morphism associated to its basepoint-free movable part after blowing up any base points. Since $P²=0$, two general members have intersection zero, so the original pencil already has no base point. Its connected generic fibre F is a smooth integral curve, $P=kF$, and LF is a positive integer. Since $LP=1, k=1$ and $LF=1$. Adjunction with $K_{T}=−L$ would give 2g(F)−2=F²−LF=−1, impossible. Hence $P²=1$. [F1, F2, F3, F4, step 7.1, construct]

9.1 Then B²=(L−P)²=1−2+1=0. Negative definiteness forces $B=0$. Thus |L| is a pencil without a fixed component. Two independent sections have total intersection one, so their common zero scheme consists of a single point q of length one. In regular local parameters, length one means that their linear terms are independent. Every general member is therefore smooth at q, and ordinary Bertini makes it smooth elsewhere. [F1, F2, F3, F4, step 8.1, construct]

10.1 This base point cannot lie on an exceptional irreducible curve E: L|E is trivial (E is a rational (−2)-curve by $K_{T}=−L$ and adjunction), so vanishing of every section at q∈E would force E to be a fixed component. A general member contains no exceptional curve and has zero intersection with each, hence is disjoint from the exceptional locus. Every nonexceptional component has positive integral L-degree, while the total member has L-degree one; there is exactly one such component and no exceptional component. The smooth member is therefore connected and integral. Its image on S is smooth, and adjunction gives genus one. For every integer $k\ge 2$, the line bundle kL restricts to degree k on this smooth genus-one curve and is generated there: curve RR and Serre duality give h0(kL|C)−h0(kL|C(−x))=1 at every x, since both relevant positive degrees have H1 zero. The restriction map H0(kL)→H0(C,kL|C) is onto because H1((k−1)L)=0 by nef-big adjoint vanishing. Thus a kL section does not vanish at the single base point q of L. Away from q, powers of generated L sections suffice. Therefore every kL with $k\ge 2$ is globally generated. [F1, F2, F3, F4, step 9.1, construct] ∎

## Remarks

Research-only source candidate; no production admission or mathematical-acceptance claim. The separate canonical-surface resolution and fundamental-section restriction arguments are required to apply this smooth-surface statement to a singular cut. Full Mella9705012v1 was read for the overall problem; no full Saint-Donat or del-Pezzo classification source was read or invoked.
