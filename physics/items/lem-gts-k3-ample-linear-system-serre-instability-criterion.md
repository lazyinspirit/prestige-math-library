---
id: lem-gts-k3-ample-linear-system-serre-instability-criterion
kind: lemma
title: K3 ample linear systems from Serre extensions and instability
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- def-chern-character-and-todd-class
- thm-grothendieck-riemann-roch-for-projective-morphisms
- thm-riemann-roch-for-smooth-projective-surfaces
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- thm-hodge-index-theorem-for-smooth-projective-surfaces
- thm-bertini-smooth-hyperplane-section
- thm-auslander-buchsbaum-formula
- thm-auslander-buchsbaum-serre-regularity-criterion
- lem-gts-log-adjoint-vanishing-on-snc-pairs
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
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
  - title: Olivier Debarre, Surfaces K3
    url: https://www.math.ens.psl.eu/~debarre/K3.pdf
    locator: Chapter 3 §§3.1–3.3, PDF pp. 29–34 (printed pp. 25–30), especially Theorem 3.8, Proposition 3.9 and
      Corollary 3.10. Actually read; Theorem 3.8 proof is referred elsewhere by Debarre. Original Saint-Donat DOI
      was incorrectly 2373704; correct 2373709 was bibliographically verified, but article fulltext not read.
dependency_level: 2
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-riemann-roch-for-smooth-projective-surfaces: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-hodge-index-theorem-for-smooth-projective-surfaces: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
---

## Statement

Assume AC. Let S be a smooth complex projective surface with $K_S=O_S$ and $H1(S,O_S)=0$ (in particular a K3 surface), and L an ample line bundle with $d=L^2\ge 4$.

If L is not globally generated, S has a primitive nef elliptic pencil E with $E^2=0$ and L $E=1$. If L is globally generated but not very ample, then either S has such a pencil with L $E\le 2$, or $d=8$ and $L=2B$ with $B^2=2$. Consequently an ample primitive generator L of Pic(S)=ZL is very ample whenever $L^2\ge 4$.

For $d\ge 6$ there is at most one primitive nef elliptic pencil E with L $E\le 2$. The proof supplies the rank-two Serre construction for every minimal length-one or length-two obstruction, including a nonreduced length-two subscheme. No Saint-Donat, Reider, Bogomolov or Hermitian–Einstein theorem is a logical premise.

## Facts & Assumptions

**Given:** The surface with $K_S=O_S$ and $H1(S,O_S)=0$, and the ample line bundle. Simple connectivity is not used.

[F1] [[lem-gts-log-adjoint-vanishing-on-snc-pairs]] for the ample SNC-empty case gives $H^q(S,L)=0$ for $q>0$. [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] gives $H2(O_S)=C$ and extends to the finite locally free resolutions used below by taking the dual finite complexes. [[thm-grothendieck-riemann-roch-for-projective-morphisms]] and [[def-chern-character-and-todd-class]] give $chi(V)=rank(V)chi(O_S)+ch2(V)$ for bundles V with c1(V)=0, and $chi(O_S)=2$. The actual line formula [[thm-riemann-roch-for-smooth-projective-surfaces]] makes every divisor square even.

[F2] [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] supplies the negative-definite orthogonal complement of L and the resulting Lorentzian Cauchy bounds. Numerical triviality of a line bundle N on S implies its triviality directly: surface RR gives $chi(N)=chi(O_S)=2$. If N were nontrivial, neither N nor $N^{-1}$ could have a section, because its zero divisor would have zero ample degree and hence be empty, trivializing that line bundle. Serre duality would then give $\chi(N)=-h^1(N)\le0$, a contradiction. This uses no fundamental-group or torsion-freeness assertion. [[thm-bertini-smooth-hyperplane-section]] is used only for the constructed basepoint-free elliptic pencil.

[F3] [[thm-auslander-buchsbaum-serre-regularity-criterion]] and [[thm-auslander-buchsbaum-formula]] give that reflexive finite modules on a smooth surface are locally free. The local argument is the second-syzygy/depth-two computation: dualize a presentation of the dual, then use depth of a torsion-free submodule of a free module. Full AC is retained. [[def-axiom-of-choice]].

## Proof

1.1 If global generation fails, choose a point Z of length one where evaluation fails. If global generation holds but very ampleness fails, choose a length-two subscheme Z where evaluation is not surjective, minimal for that property. A length-two subscheme of a smooth surface is either two distinct reduced points or the tangent infinitesimal scheme with local ring $C[\epsilon ]/\epsilon ^2$; both are local complete intersections. Every proper length-one subscheme imposes an independent condition in the second case. This follows from the proper globally generated morphism: an ample generated line has finite morphism, and failure to be a closed immersion is exactly failure to separate two points or a tangent vector, by the finite local Nakayama criterion. [F1, F3, given, construct]

2.1 We construct the Serre extension and check local freeness rather than assuming Cayley–Bacharach. The sequence 0 -> $I_Z$ L -> L -> L|Z -> 0 and the dual finite resolutions give an exact segment $Ext^1(I_Z L,O_S)$ -> $H0(omega_Z tensor L^{-1}|Z)$ -> $H2(L^{-1})$. Its right-hand arrow is dual to evaluation H0(L)->H0(L|Z), under the local residue trace. Moreover $H1(L^{-1})=0$ by [F1] and Serre duality. Thus a nonzero functional annihilating the evaluation image lifts to an extension 0 -> $O_S$ -> V -> $I_Z$ L -> 0. In length one the image is zero and its nonzero functional generates the local extension module. For two reduced points the evaluation image is a line with both coordinates nonzero, so a nonzero annihilating functional has both coordinates nonzero. For the tangent ring choose a local generator for L and write the image as C u, with $u=u0+u1$ epsilon a unit, since L is generated. The residue trace tr(a0+a1 epsilon)=a1 identifies the dual ring with the ring. An annihilator lambda(b)=tr(a b), lambda(u)=0, has $a1=-a0$ u1/u0; nonzero lambda therefore has a0 nonzero and a is a unit. In ALL cases the extension class is a unit at every point of Z. [F1, F3, step 1.1, construct, algebra]

3.1 Locally $I_Z=(f,g)$ has the two-generator Koszul relation. Its extension V has generators v0,v1,v2 with one relation a v0+g v1−f $v2=0$, where a lifts the local residue/extension class. Since a is a unit modulo (f,g), it is a unit in the local ring; eliminate v0 to see V is free of rank two. Away from Z the extension is an extension of line bundles and is locally free as well. Chern additivity gives c1(V)=L and $c2(V)=ell=length(Z)\le 2$. The use of finite-resolution duality in step2.1 is justified by dualizing these explicit Koszul complexes; the residue evaluation is their last coefficient map, so no duality theorem for arbitrary singular sheaves was imported. [F1, F3, step 2.1, algebra]

4.1 V cannot be slope-stable with respect to L. A stable rank-two bundle has only scalar endomorphisms: choose an eigenvalue of an endomorphism, whose characteristic coefficients are constant on the connected projective surface. If its difference from that scalar were nonzero, its positive-rank kernel and image would both be proper subsheaves of strictly smaller slope, contradicting degree additivity in 0 -> kernel -> V -> image -> 0. Thus h0(End V)=1. Since $K_S$ is trivial, Serre duality gives h2(End V)=1, so $\chi(\operatorname{End}V)\le2$. But GRR and Chern additivity give $\chi(\operatorname{End}V)=8+d-4\ell\ge4$, a contradiction. This proves nonstability, without any discriminant theorem. [F1, step 1.1, step 3.1, algebra]

5.1 Choose a rank-one subsheaf of V of slope at least that of V and saturate it. It is a line bundle M: its quotient is torsion-free, and the depth lemma together with [F3] makes this saturated kernel reflexive and locally free. Write its quotient as $I_W$ N, where $N=L-M$ and W has finite length. Put $a=L$ N and $q=N^2$. The inclusion M->V cannot factor through the $O_S$ in the Serre extension, since L $M\ge d/2>0$ implies H0(−M)=0. Its nonzero projection to $I_Z$ L is a section of $I_Z$ N. Therefore N has a nonzero EFFECTIVE divisor containing Z; in particular a is a positive integer. Chern additivity gives $ell=M$ N+length(W)=a−q+length(W). Hence $q\ge a-ell$, and Hodge index gives $q\le a^2/d$. [F1, F2, F3, step 3.1, step 4.1, algebra]

6.1 In the strictly destabilizing case L $M>d/2$, we have $a<d/2$ and therefore $q<a/2$. For $ell=1$, $q\ge a-1$ makes $a<2$, so $a=1$; evenness and $0\le q<1/2$ give $q=0$. For $ell=2$, $a\ge 4$ would give $a-2\ge a/2$, impossible; $a=3$ would require even $q\ge 2$ but $q<3/2$, also impossible. Thus $a=1$ or 2, and the inequalities and evenness again give $q=0$. We have obtained an effective square-zero divisor of L-degree at most ell. [F1, F2, step 5.1, algebra]

7.1 In the equal-slope case $a=d/2$, the inequalities become $d/2-ell\le q\le d/4$, with q even. For $ell=1$ and $d\ge 4$ there is no such even integer (at $d=4$ the only possible value would be one). For $ell=2$ they force $d\le 8$. At $d=4$ one gets $q=0$ and $a=2$; at $d=6$ there is no even value; at $d=8$ one gets $q=2$ and equality in Hodge index. Equality gives N numerically L/2, and [F2] then gives $L=2N$ as actual line bundles, with $N^2=2$. Thus the only new case is the stated imprimitive degree-eight exception. [F1, F2, step 5.1, step 6.1, algebra]

8.1 An effective square-zero divisor D of L-degree one or two yields a nef square-zero divisor of no larger degree. If the degree is one it is irreducible, so it is nef. In degree two it is either irreducible (again nef), twice a degree-one component of square zero, or the sum of two degree-one components. For any such component C, adjunction gives $C^2\ge -2$ and Hodge gives $C^2\le 1/d<1$, so $C^2$ is either −2 or zero. A square-zero component already gives the claim. If both squares are −2, then $D^2=0$ forces their mutual intersection to be two. Thus D has zero intersection with its two components, and nonnegative intersection with every other curve, hence is nef. This exhaustive degree argument does not use a K3 linear-system classification. [F1, F2, step 6.1, step 7.1, algebra]

9.1 A nonzero nef square-zero divisor D is a multiple of an elliptic pencil. RR and Serre duality give $h^0(D)\ge2$. Write its complete system as movable part P plus fixed part B. Nefness and $D^2=0$ imply D $P=D$ $B=0$. Two general members of |P| have nonnegative intersection, so $P^2\ge 0$. The Lorentzian Hodge inequality forces P numerically proportional to D, whence $P^2=P$ $B=B^2=0$. If B were nonzero, RR would give $h^0(B)\ge2$; varying B and multiplying by a member of the movable system avoiding a changed component contradicts that B is fixed. Thus there is no fixed part. Two general members now have total intersection zero and no common curves, so there are no base points. The map given by |D| has curve image; take its connected-fibre Stein factor f:S->B0. The injection $H1(B0,O_{B0})->H1(S,O_S)=0$ makes $B0=P1$. Thus $D=f*O_{P1}(k)$, and the connected fibre class $E=f*O(1)$ is nef and primitive: if E were a multiple $m>1$ of a line class, that class is nef square zero and the same pencil argument would give $h^0(E)\ge m+1$, while connected fibres give h0(E)=2. A general fibre is smooth by Bertini, connected and of arithmetic genus one by adjunction, hence an elliptic curve. Its L-degree does not exceed that of D. [F1, F2, F3, step 8.1, algebra]

10.1 Steps1.1–9.1 prove the obstruction assertions. In particular if Pic(S)=ZL with L primitive and $L^2\ge 4$, no nonzero square-zero class exists and L cannot be twice another line bundle. There is neither a length-one nor a length-two obstruction, so L is globally generated and very ample by the criterion in step1.1. This conclusion has NOT been applied to a K3 section before its Picard hypothesis is supplied. [F1, F2, step 1.1, step 7.1, step 9.1, algebra]

11.1 Finally suppose $d\ge 6$ and E,E' are distinct primitive nef elliptic pencil classes with $e=L$ $E\le 2$ and $e'=L E'\le2$. Their intersection is positive; zero would force proportionality by Hodge index and hence equality by primitivity. It cannot be one: then $(E-E')^2=-2$, RR makes one of E−E' or E'−E effective, and its intersection with the appropriate nef pencil is −1, impossible. Thus $E E'\ge2$. On the other hand write $E=(e/d)L+v$ and E'=(e'/d)L+v' in the L-orthogonal negative-definite space. Since $E^2=E'^2=0$, Cauchy–Schwarz gives E $E'\le 2ee'/d\le 8/d<2$. Contradiction. This proves uniqueness and completes the lemma. [F1, F2, step 9.1, step 10.1, algebra] ∎
