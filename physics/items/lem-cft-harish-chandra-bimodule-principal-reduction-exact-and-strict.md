---
id: lem-cft-harish-chandra-bimodule-principal-reduction-exact-and-strict
kind: lemma
title: Exact principal reduction of Harish–Chandra bimodules and its Kazhdan filtration
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
axiom_use: ZF + AC
deps:
  - def-axiom-of-choice
  - lem-cft-principal-whittaker-universal-equivalence
  - lem-cft-equivariant-arc-module-classical-brst-exactness
  - lem-enveloping-algebra-is-left-and-right-noetherian
  - thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra
  - thm-weyls-complete-reducibility-theorem
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-cft-principal-whittaker-universal-equivalence: mathematical-premise
  lem-cft-equivariant-arc-module-classical-brst-exactness: mathematical-premise
  lem-enveloping-algebra-is-left-and-right-noetherian: mathematical-premise
  thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra: mathematical-premise
  thm-weyls-complete-reducibility-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa, Rationality of W-algebras, principal nilpotent cases
      url: https://arxiv.org/pdf/1211.7124v3
      locator: Sections 2–3 and 8; the HC-relative Artin–Rees proof and bounded-ghost filtered comparison below reconstruct the needed exactness and good-Kazhdan comparison.
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 7
---

## Statement

Assume AC. Let g be finite-dimensional complex simple with a principal integral grading, $U=U(g)$, n its positive nilpotent algebra, and chi its nondegenerate principal character. Let HC consist of U-bimodules B finitely generated on the left such that the adjoint action x dot $b=xb-bx$ is locally finite. Put $I_{\chi}=\operatorname{ker}(U(n) \to C_{\chi})$, $P(B)=B/B I_{\chi}$ and Phi(B)=Wh(P(B)), where Wh consists of vectors killed by all left x-chi(x), x in n. Then P and Phi are exact on HC, right-n character homology of B vanishes above degree zero, and its actual finite constraint/Clifford BRST complex has cohomology only in degree zero, equal to Phi(B).

Suppose B has a good, adjoint-stable PBW filtration F with finite-dimensional pieces, both U actions having the usual degree-one bound, and ad g preserving F. For a vector of h/2 weight j define its Kazhdan degree by PBW degree minus j; write $K_p$ $B_j=F_{p+j}B_j$. Give the constraint antighost for $n_j$ degree 1-j and its cochain ghost degree j. The actual cohomology filtration on Phi(B) then satisfies

    gr_K Phi(B) = Phi_classical(gr_K B),

with the actual finite moment constraints and classical n-invariants. A strict filtered HC short exact sequence gives a strict filtered exact sequence after Phi. No bounded-below Kazhdan filtration on the unreduced bimodule is assumed.

## Statement references

[[lem-cft-principal-whittaker-universal-equivalence]]

[[lem-cft-equivariant-arc-module-classical-brst-exactness]]

[[lem-enveloping-algebra-is-left-and-right-noetherian]]

[[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The explicit HC, character, right quotient and good filtration conventions of the Statement.

[F1] [[lem-cft-principal-whittaker-universal-equivalence]] supplies $Y=U/U(n-\chi)$, the actual equivalence $P=Y \otimes_Z \operatorname{Wh}(P)$ for jointly locally nilpotent shifted-n modules, exactness of Wh on that category, and the split finite Chevalley complex of Y over Z. Hence such modules have zero positive shifted-n cohomology, not merely an abstract exact invariant functor.

[F2] [[lem-cft-equivariant-arc-module-classical-brst-exactness]], at finite jet order zero, gives exact classical reduction on coherent equivariant modules, including the formal transverse argument and explicit Hopf descent. Its principal torsor identifies the classical free-bimodule reduction with O(S) tensor its finite coefficient space.

[F3] [[lem-enveloping-algebra-is-left-and-right-noetherian]] supplies finite enveloping Noetherianity. [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]] supplies ordered-word PBW and its finite-dimensional Lie special case.

[F4] [[thm-weyls-complete-reducibility-theorem]] splits the finite-dimensional adjoint-g stable filtration flags used to choose equivariant free generators in step 6.1.

[F5] The finite BRST complex is B tensor Cl(n direct-sum n*). Its odd generators $b_i,c^j$ satisfy $b_i c^j+c^j b_i=\delta_i^j$ and the other anticommutators zero, with degrees -1,+1. On this bimodule use $d=Q_{\mathrm{left}}$ minus the signed $Q_{\mathrm{right}}$, where $Q=\sum_i (u_i-\chi_i)c^i$ minus one half sum $f_{ij}^k c^i c^j b_k$. Its square is zero: the coefficient-action commutators cancel the mixed bracket term, the triple-bracket term is Jacobi, and chi([n,n])=0 removes the character term. This also fixes the chain/cochain convention in step 4.1.

[A1] [[def-axiom-of-choice]] is used for extending linear functionals on possibly infinite-dimensional vector spaces in step 3.1; the Whittaker and completion suppliers also retain it. Finite-dimensional basis choices alone are not asserted to need full AC.

## Proof

**Given:** F1–F5 and A1. The full algebraic dual, not the restricted category-O dual, is used below.

1.1 First prove the required HC-relative Artin–Rees property. For the augmentation ideal I of U(n), root-height PBW gives $I^r$ equal to the sum of root-height degrees at least r: a root vector of height d is an iterated bracket of d simple-root vectors and lies in $I^d$. Its Rees algebra is generated by the finite Lie space L spanned by $x_{\beta}$ $t^s$, with beta positive and $0\le s\le \operatorname{height}(\beta)$. Brackets preserve this space and distributing a t-exponent among PBW factors gives all Rees degrees. Thus $\operatorname{Rees}_I$ U(n) is a quotient of U(L), and is Noetherian by F3. Character translation x to x-chi(x) is an algebra automorphism and proves the same for $I_{\chi}$. The algebra $A=U(g)_{\mathrm{left}} \otimes (\operatorname{Rees}_{I_{\chi}} U(n))^{\mathrm{op}}$ is a quotient of the finite enveloping algebra U(g direct-sum $L^{\mathrm{op}}$), hence is Noetherian as well. [given, F3, construct, algebra]

2.1 For B in HC, $\operatorname{Rees}(B)=\sum_{(r\ge 0)} B I_{\chi}^r t^r$ is finitely generated over A: any finite set of left-U generators in degree zero generates it, since the left action commutes with the right character-ideal action. For a bimodule subobject B' subset B, $\sum (B' \cap B I_{\chi}^r)t^r$ is an A-submodule and therefore has finitely many homogeneous generators of degrees at most c. Taking its degree s component gives, for $s\ge c$, $B' I_{\chi}^s \subset B' \cap B I_{\chi}^s \subset B' I_{\chi}^{(s-c)}$. Indeed multiplying a degree-j generator on the right uses $I_{\chi}^{(s-j)}$, while its left U multiples stay in B'. This is the cofinal topology statement needed for dual extension. It uses left-U finite generation and commuting right n, not the false assertion that B is finitely generated over U(n). [F3, step 1.1, construct, algebra]

3.1 On the full dual B* use the left g action $(x \phi)(b)=\phi(bx)$. Its generalized Whittaker part is exactly $\bigcup_r$ $(B/B I_{\chi}^r)*$. For an exact HC sequence, this dual generalized-Whittaker sequence is exact. To lift a functional on B' annihilating $B'I_{\chi}^r$, step 2.1 lets it descend to the image of B' in B/B $I_{\chi}^s$ for sufficiently large s. Extend it linearly to that possibly infinite-dimensional quotient using AC, then pull it back. Injection and the kernel assertion are immediate on functionals. These generalized-Whittaker subspaces are g-stable: commuting a long shifted n word past any fixed x in g uses only finitely many adjoint-n operations on x, and those are jointly nilpotent in the finite adjoint representation. Thus they are objects of the actual Whittaker category in F1. Apply its exact Wh functor. The resulting spaces are precisely $(B/B I_{\chi})*$. Exactness of their algebraic dual sequence implies exactness of B to B/B $I_{\chi}$: algebraic duals detect a nonzero kernel or cokernel by extending a nonzero functional. This proves exact character coinvariants on HC. [F1, A1, step 2.1, construct, algebra]

4.1 Choose finite-dimensional adjoint-g-stable generators E of B. The free HC bimodule $P=U$ tensor E maps onto B, with left action regular and right action $(u \otimes e)x=ux \otimes e-u \otimes (x e)$. Its map sends u tensor e to ue in B; the formula makes it a bimodule map. The finite Hopf coproduct/antipode untwisting makes P free also as a right U-module. Its kernel is HC and left finitely generated by F3. Right-n character homology of P vanishes in positive degrees by regular-module PBW contraction and character translation. The long homology sequence and exactness of coinvariants in step 3.1 give $H_1(B)=0$; repeatedly applying the same argument to the kernel gives $H_i(B)=0$ for every $i>0$. On P(B), left x-chi(x) equals adjoint x, which is jointly nilpotent for x in positive n on each finite adjoint-g submodule. Thus P(B) belongs to F1's Whittaker category. Wh exactness gives Phi exact. Splitting the actual finite Clifford BRST differential into right-n chain degree and adjoint-n cochain degree computes first this right homology, then shifted-n cohomology of P(B). The finite ghost ranges make this a finite bicomplex. F1 gives the latter cohomology only in degree zero. Therefore actual finite BRST cohomology is exactly Phi(B), concentrated in degree zero. [F1, F3, F5, step 3.1, construct, algebra]

5.1 We now establish filtration strictness rather than infer it from the unfiltered result. First take a free HC bimodule U tensor E with finite E, assigning its generators finite old PBW shifts and their h/2 weights. The right-n chain contraction replaces a constrained PBW letter by its antighost of the same K degree. Commutator corrections lower PBW degree without changing h weight, and a nonzero character correction removes only a grade-one letter of K degree zero. The Hopf untwisting and its inverse are triangular and K-filtered. Their locally finite correction series terminate by PBW word length. Perturbing by the remaining cochain differential terminates because the c-exterior degree has the fixed finite bound dim n. This identifies the full finite BRST complex with the actual relative Chevalley complex on Y tensor E, filtered for K. The surviving opposite-Borel generators have K degree at least one, the c ghosts have positive root-height degree, and E has finitely many shifts. Every K bound of this relative complex is therefore finite-dimensional and its filtration is bounded below. Its associated graded is the classical torsor complex of F2, contracted by the explicit affine-space Euler homotopy. Finite filtered lifting proves its cohomology concentration, its associated-graded comparison and a K-filtered vector-space contraction to Phi(U tensor E). It also proves that this cohomology has a good bounded-below K filtration; its associated graded is finite free over O(S). No lower bound on the full unreduced complex was used. [F1, F2, F3, step 4.1, construct, algebra]

6.1 Take an adjoint-equivariant strict good-PBW free HC resolution $P_*$ to B, with each $P_j=U$ tensor $E_j$ and $E_j$ finite. Such a resolution is constructed successively: the good filtered module has finitely many homogeneous Rees generators; take their finite adjoint-g spans and split their finite filtration flags into g-stable summands, assigning the corresponding PBW shifts. The resulting free cover is strict. Its kernel has an induced good filtration because the PBW Rees algebra is Noetherian, by the same PBW/polynomial argument as F3; repeat. Each row admits a linear section preserving old PBW filtration and Cartan weight, by choosing bases for the finite filtered weight spaces. Hence its horizontal resolution contraction is K-filtered. Apply the finite BRST complex to this resolution and totalize. The comparison with $C_{\mathrm{fin}}(B)$ is a K-filtered homotopy equivalence: perturb the horizontal contraction by the BRST differential. Every correction raises the finite ghost cohomological degree, so the series stops after at most 2 dim n+1 terms on every column. In the other order use the filtered contractions in step 5.1 on the columns. Perturbing by the horizontal differential now lowers finite ghost degree, and again terminates. The transferred differential on their degree-zero cohomologies is just the induced horizontal differential; every higher correction contains a negative ghost-degree homotopy and projects to zero. Thus the natural cohomology filtration on Phi(B) is the filtration of the cokernel of $\Phi(P_1)$ to $\Phi(P_0)$, not a potentially larger unseparated filtration. [F2, F3, F4, step 5.1, construct, algebra]

7.1 The strict free resolution has an exact associated-graded resolution, and the classical reduction functor F2 is exact. Hence its reduced graded resolution is exact. The maps on $\Phi(P_j)$ have these as their associated graded by step 5.1. Their first differential has strict image: if d(a) has K degree at most p but a has degree $q>p$, its top symbol is in the kernel of the graded first differential, hence is the image of the graded second differential. Lift that symbol to $P_2$ cohomology, subtract its differential from a, and lower q by at least one. Only q-p finite repetitions are required. This supplies a preimage in degree at most p. Therefore the associated graded of the cokernel in step 6.1 is exactly the classical reduction of $\operatorname{gr}_K$ B. The same construction on a strict filtered HC short exact sequence identifies the associated graded maps with the exact classical maps; finite leading-symbol lifting in their good bounded-below reduced filtrations proves strict exactness. This proves all claimed Kazhdan comparisons and completes the result. [F1, F2, F3, step 6.1, construct, algebra] ∎

## Actual use in the VOA comparison

The input is an HC bimodule with the actual affine Zhu ideal, not a
classification-of-tops polynomial. Finite category-O Whittaker coinvariants
alone would not imply this statement; the commuting-left-U Rees argument is
what permits the HC passage. The good reduced filtration is proved through
free HC complexes and bounded ghost range, rather than assumed on the
unreduced negative-Kazhdan-degree generators.
