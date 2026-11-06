---
id: thm-cft-principal-admissible-affine-module-classification
kind: theorem
title: Admissible affine VOA modules in category O
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
deps:
  - lem-cft-principal-level-affine-admissibility
  - def-cft-principal-admissible-level
  - def-cft-root-data-for-principal-w-levels
  - lem-cft-affine-zhu-quotient-and-integrable-descent
  - lem-cft-affine-integral-root-and-module-transports
  - lem-cft-admissible-sl2-vacuum-null-polynomial
  - lem-cft-affine-parabolic-simple-levi-restriction
  - lem-cft-affine-off-critical-shapovalov-and-linkage
  - def-sugawara-modes
  - lem-sugawara-quadratic-modes-well-defined
  - lem-sugawara-modes-act-on-currents
  - def-kac-moody-category-o
  - def-axiom-of-choice
dependency_roles:
  lem-cft-principal-level-affine-admissibility: mathematical-premise
  def-cft-principal-admissible-level: mathematical-premise
  def-cft-root-data-for-principal-w-levels: mathematical-premise
  lem-cft-affine-zhu-quotient-and-integrable-descent: mathematical-premise
  lem-cft-affine-integral-root-and-module-transports: mathematical-premise
  lem-cft-admissible-sl2-vacuum-null-polynomial: mathematical-premise
  lem-cft-affine-parabolic-simple-levi-restriction: mathematical-premise
  lem-cft-affine-off-critical-shapovalov-and-linkage: mathematical-premise
  def-sugawara-modes: mathematical-premise
  lem-sugawara-quadratic-modes-well-defined: mathematical-premise
  lem-sugawara-modes-act-on-currents: mathematical-premise
  def-kac-moody-category-o: mathematical-premise
  def-axiom-of-choice: mathematical-premise
domain: mathematics
library: mathematics
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa, Rationality of admissible affine vertex algebras in the category O
      url: https://arxiv.org/pdf/1207.4857v4
      locator: Main Theorem and §§2–4, complete characteristic-variety, Zhu, integrable-module, and semi-infinite-restriction proof routes.
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: §§5.1–5.3, Zhu algebra and top-level action conventions.
    - title: Tomoyuki Arakawa, Corrigendum to Rationality of admissible affine vertex algebras in the category O
      url: https://www.kurims.kyoto-u.ac.jp/~arakawa/errata_admissible.pdf
      locator: Both pages; corrected Main Theorem and Proposition 4.5. Extended-Weyl conjugacy replaces abstract root-system isomorphism, which is insufficient in type C with even denominator.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\widehat{\mathfrak g}$ be the untwisted affine Kac–Moody algebra of a finite-dimensional complex simple $\mathfrak g$, let $k$ be a nondegenerate principal admissible level, and suppose a simple affine vertex algebra $L(k\Lambda_0)$ at level $k$ is supplied as a quotient of $V^k(\mathfrak g)$. For a weight $\lambda$ of level $k$, define
$$\widehat\Delta(\lambda)=\{\alpha\in\widehat\Delta^{\rm re}:\langle\lambda+\widehat\rho,\alpha^\vee\rangle\in\mathbb Z\}.$$
Here $\widehat\Delta^{\rm re}$ is the set of real affine roots, $\widehat\rho$ pairs as $1$ with each simple affine coroot, and $\lambda$ is **admissible** if it is regular dominant,
$$\langle\lambda+\widehat\rho,\alpha^\vee\rangle\notin\{0,-1,-2,\ldots\}\quad(\alpha\in\widehat\Delta^{\rm re}_+),$$
and $\mathbb Q\widehat\Delta(\lambda)=\mathbb Q\widehat\Delta^{\rm re}$.
Let $\widetilde W=W\ltimes P^\vee$ be the extended affine Weyl group, where $W$ is the finite Weyl group and $P^\vee=\{\eta:\alpha_i(\eta)\in\mathbb Z\text{ for every finite simple }\alpha_i\}$ is the coweight lattice. Its translations act on real roots by $t_\eta(\alpha+n\delta)=\alpha+(n-\alpha(\eta))\delta$. Set
$$\mathrm{Pr}_k=\{\lambda:\lambda\text{ has level }k,\ \lambda\text{ is admissible, and }\widehat\Delta(\lambda)=y\widehat\Delta(k\Lambda_0)\text{ for some }y\in\widetilde W\}.$$
Then the irreducible highest-weight module $L(\lambda)$ is an $L(k\Lambda_0)$-module if and only if $\lambda\in\mathrm{Pr}_k$. In the source's standard category $\mathcal O$, every module is an algebraic direct sum of these admissible simple modules. The convention bridge proved below also gives this algebraic direct-sum conclusion in def-kac-moody-category-o, without imposing finite generation or finite length. The arbitrary direct-sum assertions use the Axiom of Choice.



## Statement references

[[def-kac-moody-category-o]]

## Facts & Assumptions

**Given:** The affine and supplied-quotient data in the Statement. Admissibility means the displayed regular-dominance condition and equality of rational spans, not integral-lattice equality.

[F1] [[lem-cft-principal-level-affine-admissibility]] proves the actual source admissible-number implication, noncriticality and vacuum integral-root system. The dual Lie algebra in the second level branch is supplied data, and its optional construction under Choice is recorded in the root-data item.

[F2] [[lem-cft-affine-zhu-quotient-and-integrable-descent]] gives the actual affine Zhu quotient/top correspondence, the maximal vacuum singular-generator type, and G-integrable admissible descent.

[F3] [[lem-cft-affine-integral-root-and-module-transports]], Statement's congruence-conditional clause and Proof 11.2–12.1, 14.1–21.1, gives congruence/chamber reduction and actual positive-system highest-module transports, including length-zero extended elements. Only these clauses are used. No inference from abstract root-system isomorphism alone is used; the supplier now explicitly disclaims that inference, which fails in type $C_\ell$ at even denominator. Here the extended-Weyl orbit condition is explicit, as in the corrigendum, and the converse obtains the congruences directly from the rank-one null relations.

[F4] [[lem-cft-admissible-sl2-vacuum-null-polynomial]] gives the rank-one null polynomial on scalar and generalized highest spaces, with its exact finite root set.

[F5] [[lem-cft-affine-parabolic-simple-levi-restriction]] gives the actual simple-Levi action and the lowest-depth Chevalley cohomology, with all central shifts and the singular-state boundary proved.

[F6] [[lem-cft-affine-off-critical-shapovalov-and-linkage]] supplies off-critical strong linkage for simple subquotients of affine Vermas.

[F7] [[def-sugawara-modes]] and [[lem-sugawara-quadratic-modes-well-defined]] give the pointwise finite quadratic modes; [[lem-sugawara-modes-act-on-currents]] gives $[L_0,x_n]=-n x_n$. On a highest vector the formula gives $h_\lambda=(\bar\lambda,\bar\lambda+2\rho)/(2(k+h^\vee))$.

[F8] [[def-kac-moody-category-o]] supplies the workspace full-Cartan finite-weight/finite-upper-cone convention, with no finite-generation or finite-length assumption. The source standard convention is fixed explicitly below.

[C1] In the source standard category O the finite Cartan acts semisimply, Sugawara L0 acts locally finitely, and the positive Borel is locally finite (equivalently the positive nilpotent action is locally nilpotent in the standard highest-weight sense). No finite generation or finite length is assumed.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]) is used only to choose bases of the multiplicity spaces in the arbitrary algebraic direct-sum conclusion. The highest-weight classification and finite-length splitting arguments do not require this choice.

## Proof


1.1 **The actual admissible level and quotient.** F1 makes the supplied nondegenerate principal level an actual admissible number and gives its integral simple roots. F2 identifies the supplied simple quotient with the canonical affine highest vacuum quotient, computes its Zhu algebra and proves descent for every finite dominant weight in the source alcove. No source theorem is being applied conditional on an unproved arithmetic or top-correspondence input. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, algebra]

2.1 **The complete if direction.** For $\lambda\in\mathrm{Pr}_k$, its integral roots have every finite root direction: the vacuum system does, and an extended-Weyl element permutes those directions. In particular for each finite simple $\alpha_i$ some $\alpha_i+n_i\delta$ is integral. Writing $u_i=\langle\lambda+\widehat\rho,\alpha_i^\vee\rangle$ and $r_i=2/(\alpha_i,\alpha_i)$, this says $u_i+n_i r_ip/q\in\mathbb Z$, so $qu_i\in\gcd(q,r_i)\mathbb Z$. The congruence-conditional construction in [F3] therefore supplies $y$ and $\mu=y^{-1}\cdot\lambda$ with integral finite Cartan weight and $y\widehat\Delta(k\Lambda_0)^+=\widehat\Delta(\lambda)^+$. Regular dominance of $\lambda$ makes $\mu$ regular dominant for the vacuum integral roots; its finite weight is integral dominant, and evaluation on the extra integral simple root gives the finite alcove inequality. By [F2], $L(\mu)$ is an actual quotient-VOA module. The nonintegral-wall and length-zero transports of [F3] give the actual $L(\lambda)$-module. Every inverse in this gallery again has nonintegral shifted pairing; the one-way zero/negative integral case is not used as an equivalence. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, algebra]

3.1 **The converse and its finite cohomology class.** Suppose L(lambda) is an actual L(k)-module. The simple-Levi BRST supplier gives a rank-one highest subquotient of weight $j_{i}=\lambda(h_{i})$ for each finite simple i. Its null polynomial forces `j_i = r-s t_i,  0<=r<=p_i-2,  0<=s<=q_i-1,` The rank-one action here is the simple quotient action on the actual BRST complex: F5 identifies the image of the maximal-ideal singular state with a vacuum BRST boundary, whose field homotopy kills all its modes on every weak coefficient module. Therefore its operator null relation applies to this actual highest subquotient. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, algebra]

4.1 where $t_{i}=r_{i} p/q=p_{i}/q_{i}$ is reduced. In particular the congruences above hold. Transport to the horizontally integral representative mu; this preserves actual quotient-module status, because the chosen positive integral chamber makes every crossed original wall nonintegral. Applying the rank-one polynomial again, integrality now forces all $\mu(h_{i})\ge 0$. Its finite highest module $E_{\mu}$ is finite dimensional. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 3.1, algebra]

5.1 Here is exactly the parabolic cohomology class needed to bound mu; a full parabolic Kostant theorem is unnecessary. Choose a regular dominant finite Cartan element H. For w with $w^{-1} \alpha_{i}$ positive, put $S=\text{positive}$ roots beta with $w^{-1} \beta$ negative, and choose the extremal vector v_(wmu). Then `Gamma_w=(wedge_(beta in S) x_beta^*) tensor v_(wmu)` [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 4.1, algebra]

6.1 is a nonzero cochain on $m_{i}$ (the positive nilradical excluding alpha_i), of degree ell(w) and weight w dot mu. Its weight occurs in no other cochain degree. Indeed for any cochain weight nu-sum_(beta in T) beta, `(nu+rho-sum_T beta,wH) <=(mu,H)+(rho,H),` [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 5.1, algebra]

7.1 with equality only when $\nu=wmu$ and $T=S$: the first maximum is the unique extremal weight line of the finite representation, and the second chooses exactly the roots negative on wH. The identity $\rho-\sum_{S} \beta=w \rho$ gives the asserted weight. Because alpha_i is positive on wH, adding alpha_i would exceed this maximum. Thus Gamma_w is automatically closed, cannot be a boundary, and is killed by $e_{i}$. These conclusions use preservation of Cartan weight by the finite Chevalley differential, not a character/Euler identity. Weyl symmetry and the one-dimensional extremal line follow directly from the finite Tits operators on $E_{\mu}$ and its unique highest line; only finite-dimensional linear algebra is used. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 6.1, algebra]

8.1 The lowest-loop-depth identification in the parabolic BRST proof turns this class into an actual rank-one highest subquotient with weight (w dot $\mu)(h_{i}$). It is integral, hence lies between0 and $p_{i}-2$ by the null polynomial. In the coprime branch choose a long simple alpha_i and w with $w^{-1} \alpha_{i}=\theta$. Then `p-2 >= <mu+rho,theta-coroot>-1 =mu(theta-coroot)+hvee-2,` In this application the current-equivariant lowest-depth comparison of F5 identifies the corrected Cartan action with its original finite Chevalley action on Gamma_w. Since the class occurs in one cochain degree at its full weight, it is not killed by a differential or by a comparison kernel. Its null relation consequently concerns the actual quotient-module cohomology class. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 7.1, algebra]

9.1 so $\mu(\theta^\vee)\le p-h^\vee$. In the coprincipal branch choose a short alpha_i and $w^{-1} \alpha_{i}=\theta_{s}$. Its reduced rank-one numerator is p; therefore `p-2 >= mu(theta_s-coroot)+h-2,` [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 8.1, algebra]

10.1 giving $\mu(\theta_{s}^\vee)\le p-h$. Such w has $w^{-1} \alpha_{i}$ positive, as required. Thus mu belongs to the finite admissible alcove. It is regular dominant for all vacuum integral roots and has full rational span. Its finite Cartan integrality and level p/q give exactly the vacuum root periods by F1. The congruence construction used in step 4.1 therefore gives the equality $\widehat\Delta(\lambda)=y\widehat\Delta(k\Lambda_0)$, not merely abstract isomorphism. Its positive-system identification transports regular dominance back to lambda. This proves the full only-if direction with the corrected orbit condition. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 9.1, algebra]

11.1 **There are finitely many derived labels.** The finite alcove contains finitely many dominant integral weights: the relevant highest-root coroot has strictly positive simple-coroot coefficients. There are also finitely many positive-system embeddings y. The vacuum integral Weyl group contains the translations q Q-coroot, so has finite index in the extended group. At most one element in each corresponding coset sends its integral chamber to the chamber containing the original alcove. Hence there are finitely many y, and finitely many possible finite highest weights for admissible simple L(k)-modules. Their Sugawara highest eigenvalues $h_{\lambda}$ are fixed by their finite Casimir values. Derivation shifts are separate from this finite derived-label statement. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 10.1, algebra]

12.1 **Finite-length reduction.** Use the actual standard source convention: finite Cartan semisimple, L0 locally finite, and positive Borel locally nilpotent/locally finite on each vector. A finitely generated object has finite-dimensional generalized full-Cartan pieces and finitely many upper cones after adjoining d=-L0: take the finite Borel envelope of its generators, triangularize its commuting Cartan action, and induce its finite flag. PBW gives the stated finite pieces. Every simple highest subquotient is an actual quotient-VOA module and has the classified label, and its d eigenvalue is $-h_{\lambda}$. Thus only finitely many full highest weights occur. The sum of dimensions of the object's generalized spaces at these finitely many weights bounds its composition length, since every simple section contributes its highest line to that sum. The sum is additive on exact sequences and is positive on every nonzero subquotient: choose a highest cyclic submodule and its simple highest quotient, whose label is in that finite list. Every strict subobject chain therefore changes this finite integer, so both ascending and descending chains terminate. This proves finite length without assuming it. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 10.1, step 11.1, algebra]

13.1 **The actual full-weight duality.** For the finite-length extension argument use full-Cartan-weight restricted BGG duality, not an inapplicable finite-L0-piece contragredient theorem. On the affine Lie algebra the Chevalley anti-involution fixes the Cartan including $K,d$ and swaps the positive and negative simple generators; transpose with it preserves the full weights. It defines a restricted current representation because the support remains in the same finite upper cones. To see that it is a SIMPLE-QUOTIENT vertex module, combine the finite Chevalley automorphism $\theta$ with opposite-coordinate transpose. On currents the opposite formula is $-x_{-n}^{\mathsf t}$, so composition with $\theta(x)=-\tau(x)$ is exactly the stated BGG transpose. On all current PBW states the same formula follows inductively from their normally ordered derivative products, $[L_1,x_n]=-n x_{n+1}$, and the binomial residue identity: it is $Y_E(e^{zL_1}(-z^{-2})^{L_0}\theta(a),z^{-1})^{\mathsf t}$. Each state has only finitely many $L_1$ terms; each full-weight pairing has finite coefficients by the upper-cone bounds. Thus this identity is justified even though an entire L0 piece can be infinite dimensional. The unique vacuum ideal is invariant under $\theta,L_1,L_0$, so its fields remain zero after transpose. The affine reconstruction of F2 then gives an actual quotient-VOA module. Finite full weight spaces make duality exact and biduality the identity. It fixes the simple highest labels. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 10.1, step 11.1, step 12.1, algebra]

14.1 **Distinct extensions and self-extensions split.** There are no nonsplit extensionsbetween distinct classified simples. In 0→L(mu)→E→L(lambda)→0, if lambda is not below mu, lift the highest line of L(lambda); all positive operators land in absent weights of L(mu), so the lift is highest and gives a quotient of M(lambda). A nonsplit intersection would force L(mu) to be a subquotient of M(lambda), hence strongly linked. If lambda is below mu, apply the weight-restricted BGG duality to reverse the extension and use the same argument. This duality is an actual quotient-module duality: combine the opposite-field transpose with the finite Chevalley involution. The latter preserves the unique vacuum ideal, and the former kills its modes because the ideal is stable under L1,L0 and the state involution. Each full Cartan piece is finite, so double duality and exactness are algebraic. Strong linkage puts both simples in one integral orbit, but two regular dominant weights in that orbit must coincide. Thus a distinct pair cannot extend. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 10.1, step 11.1, step 12.1, step 13.1, algebra]

15.1 Self-extensions split as well. Lift its highest line in the generalized top weight. Positive currents again kill the lift. Its finite Cartan is semisimple by the category convention. Sugawara on this highest lift is the scalar $h_{\lambda}$, so its generalized L0 top is also semisimple: no independent Jordan d=-L0 remains. The generated quotient of M(lambda) has a one-dimensional highest line and cannot contain the independent highest line of the kernel copy. Its intersection with that simple kernel is therefore zero, which splits the extension. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 10.1, step 11.1, step 12.1, step 13.1, step 14.1, algebra]

16.1 **All source objects and the workspace convention.** Each finitely generated object is finite length and its simple Ext1 groups vanish, hence it is semisimple. Every object is the sum of these finitely generated semisimple submodules, and therefore the sum of its simple submodules. The canonical evaluation from the sum of simple modules tensor their multiplicity spaces is an isomorphism, checked on each finite semisimple submodule. Choose bases in those multiplicity spaces using A1 to obtain the asserted algebraic direct sum. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 10.1, step 11.1, step 12.1, step 13.1, step 15.1, A1, algebra]

17.1 Finally the workspace full-Cartan convention is covered by the previously proved convention bridge: its finite weight spaces and finite upper cones give the source local-nilpotence and L0-local-finiteness conditions. After the derived decomposition, d+L0 commutes with all currents and is diagonalizable on multiplicity spaces because the original d and the intrinsic simple-module L0 commute and are diagonalizable. Its eigenspaces give actual full affine highest summands with the prescribed derivation shifts. Thus the direct-sum conclusion transfers to the workspace convention as well; no finite-generation or finite-length restriction is added to the final theorem. [given, C1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 10.1, step 11.1, step 12.1, step 13.1, step 15.1, step 16.1, A1, algebra] ∎

## Proof status

The full affine highest-weight classification and both category-O conclusions use the attached arithmetic, determinant/BGG, twisting/Wakimoto, rank-one and parabolic BRST arguments. The integral-root condition includes both full rational span and extended-Weyl conjugacy with the vacuum system; abstract isomorphism alone is insufficient in type C at even denominator. No principal-W DS, Slodowy, generic reverse-Zhu, or modular-category result is asserted here.


