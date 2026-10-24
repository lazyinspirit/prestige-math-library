---
id: thm-category-o-translation-intertwines-residue-induction-and-restriction
kind: theorem
title: "Category-O translation intertwines residue induction and restriction"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 38
deps: [def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality,
       def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks,
       thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects,
       def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks,
       lem-residue-casimir-operators-give-local-affine-hecke-actions,
       thm-residue-translation-functors-give-the-integrable-fock-space-action,
       def-the-higher-level-schur-weyl-projective-generator-and-schur-functor,
       def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality,
       def-axiom-of-choice,
       thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives,
       def-the-whittaker-functor-from-the-relevant-parabolic-o-summand,
       thm-higher-level-schur-weyl-endomorphism-isomorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Theorem 3.7(iv) and its proof, Theorem 4.5 and Section 4.1, printed pp. 27-28 and 33-35: the functors f_i commuting with the Schur quotient pi^Lambda and with the duality; complete passages read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Lemma 5.16 and its proof, printed pp. 32-33: the natural isomorphisms sigma and tau intertwining induction with the tensor functors; complete passage read."
    - title: "Alexander Kleshchev, Linear and Projective Representations of Symmetric Groups, Cambridge Tracts in Mathematics 163, Lemma 8.2.2 (as cited by [BKAR, (3.19)])"
      url: "https://doi.org/10.1017/CBO9780511542806"
      locator: "The biadjunction and duality compatibility of the Hecke residue functors used on the Hecke side; supplemented locally by the trace-form verification of the batch-17 definition item."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and fix an admissible origin $c$; let
$f_i^{\mathcal O},e_i^{\mathcal O}$ be the residue translation functors on the
sum of parabolic blocks of
[[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]] and put $B_d=\operatorname{End}_{\mathfrak g}(T_d)^{\mathrm{op}}$, the tensor image algebra of
[[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]].
Use its generator-preserving image-tower map $B_d\to B_{d+1}$. If $u_i$ is
the generalized-$i$ projector of the last dot in $B_{d+1}$, define the
**image residue functors** by
$$f_i^{H}(X)=B_{d+1}u_i\otimes_{B_d}X,\qquad e_i^{H}(Y)=u_iY,$$
with the corresponding source and target content projections. These are the
full cyclotomic residue functors of
[[def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks]]
whenever both selected algebras are faithfully realized, or the compatible
central cuts on the selected contents are fully supported.
Then there are natural isomorphisms
$$f_i^{H}\pi\cong\pi f_i^{\mathcal O},\qquad e_i^{H}\pi\cong\pi e_i^{\mathcal O},$$
where $\pi=\operatorname{Hom}_{\mathfrak g}(T,-)$ is the Schur functor of
[[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]],
compatible with the residue eigenvalue projectors, the units and counits of the
evaluation/coevaluation adjunction and its dual transported reverse adjunction, and with ordinary restricted duality and the $*$-duality of the
Hecke side. Consequently the ungraded Grothendieck operators at parameter $1$
agree. On the admitted residue intervals of the Fock realization, these
operators give the enveloping-algebra Chevalley action and the Schur quotient
is a homomorphism for that action. For
admissible nonintegral origins the category $\mathcal O$ side uses the genuine
typed coset realization, not an unqualified integer block. The statement
preserves the actual residue and standard filtrations; no graded parity or
Koszul lift is asserted by these ungraded suppliers.

## Facts & Assumptions

**Given:** The admissible origin $c$, the tensor objects $T_d=P_c\otimes V^{\otimes d}$ and $T_{d+1}=T_d\otimes V$, the Schur functors $\pi_d,\pi_{d+1}$, and the residue functors on both sides.

[F1] The O-side residue functors are exact, biadjoint, preserve projectives and injectives, commute with restricted duality, and agree with the generalized Casimir eigencomponents; their $K_0$ operators are the integrable Fock Chevalley action ([[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]], [[lem-residue-casimir-operators-give-local-affine-hecke-actions]], [[thm-residue-translation-functors-give-the-integrable-fock-space-action]]).

[F2] The full cyclotomic residue functors are exact, biadjoint and commute with the $*$-duality ([[def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks]]). The image algebra $B_d$ is the supporting central summand of that algebra for an admissible origin, and inherits its nondegenerate symmetric trace ([[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]]). Exactness, duality and biadjunction for the image functors defined above are proved below, rather than inferred for an arbitrary quotient tower.

[F3] The Schur functor is exact, kills exactly the off-standard simples and sends standards to intrinsic Specht modules. Its tensor detector $T_d$ is prinjective, its Hecke endomorphism algebra is $B_d$, and its Whittaker image $U_d$ is a projective generator of the corresponding finite-W image category. There are natural identifications $\gamma_M:\pi_dM\cong\operatorname{Hom}_{W_d}(U_d,V_{\!\mathrm{Wh}}M)$ and the coherent tensor isomorphisms $\nu_M:V_{\!\mathrm{Wh}}(M\otimes V)\cong V_{\!\mathrm{Wh}}(M)\circledast V$, with $\mu_d:U_d\circledast V\cong U_{d+1}$ intertwining the tower generators. In the stable realization $B_d$ is the full cyclotomic algebra, while content projections give the supported blocks. Every category-O projective has a copresentation $0\to P\to T_1\to T_2$ with $T_1,T_2\in\operatorname{add}(T_d)$. These are the actual Whittaker/Morita, copresentation and tensor contracts of [[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]], [[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]], [[thm-higher-level-schur-weyl-endomorphism-isomorphism]] and [[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]].

[F4] The parabolic and genuine category-O interfaces with the typed coset realization for admissible nonintegral origins ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]]).



## Proof

**Proof technique:** direct.

**Given:** The tensor identity $T_{d+1}=T_d\otimes V$, the actual Whittaker/Morita tensor data of [F3], and the two pairs of residue functors.

1.1 **Restriction uses the dual natural module.** For $N$ in the degree-$(d+1)$ summand and a basis $v_a$ of $V$ with dual basis $v^a$, tensor adjunction gives the natural map $\rho_N:\operatorname{Hom}_{\mathfrak g}(T_{d+1},N)\to\operatorname{Hom}_{\mathfrak g}(T_d,N\otimes V^*)$, $\rho_N(h)(t)=\sum_a h(t\otimes v_a)\otimes v^a$. Its inverse sends $g$ to $(t\otimes v)\mapsto(1\otimes\operatorname{ev}_v)g(t)$. These maps are basis-independent by coevaluation and evaluation and commute with the first $d$ tower generators, acting on the $T_d$ factors. Thus they identify restriction of $\pi_{d+1}N$ with $\pi_d(N\otimes V^*)$ after the appropriate degree/block projection. The natural and dual natural modules are distinct $\mathfrak{gl}_n$-modules; no identification between them is used. [F1, F3, construct, algebra]

1.2 **The induction map is an actual tensor map.** Tensoring an endomorphism of $T_d$ with $\mathrm{id}_V$ gives the image-tower homomorphism $B_d\to B_{d+1}$; it sends the unit to the unit and the first $d$ generators to their tensor actions. For $M$ of degree $d$, put $\tau_M:B_{d+1}\otimes_{B_d}\pi_dM\to\pi_{d+1}(M\otimes V)$, $b\otimes f\mapsto(f\otimes\mathrm{id}_V)\circ R_b$, where $R_b$ is the right action on $T_{d+1}$. The first $d$ generators act on $T_d$, so this expression is balanced over $B_d$ and is $B_{d+1}$-linear for the left-module convention; naturality follows by postcomposition. To prove it invertible, on the finite-W side form $\sigma_X(b\otimes g)=(g\circledast\mathrm{id}_V)\circ\mu_d^{-1}\circ R_b$. For $X=U_d$ this is the regular-module isomorphism $B_{d+1}\otimes_{B_d}B_d\cong B_{d+1}$. It remains an isomorphism on finite sums and summands. Every finite-W image object has a finite projective presentation by summands of finite sums of $U_d$, and both sides are right exact: induction is right exact, tensoring with $V$ is exact and Hom from $U_d,U_{d+1}$ is exact. Passing to cokernels proves $\sigma_X$ invertible for all $X$. Since the Morita functors and tensoring are exact, this also proves image induction exact; its residue summands are exact as well. Image restriction is exact directly. The coherent $\gamma,\nu,\mu$ square of [F3] sends $1\otimes f$ by either route to $(V_{\!\mathrm{Wh}}(f)\circledast\mathrm{id}_V)\mu_d^{-1}$; $B_{d+1}$-linearity then makes the square commute on every $b\otimes f$. Consequently $\tau_M$ is invertible for every $M$. This presentation argument takes place in the finite-W image category, where $U_d$ is a full projective generator; it does not assert that $T_d$ is a full category-O generator. [F3, construct, algebra]

2.1 **The two residue projectors.** The tower's last dot on $T_d\otimes V$ is the tensor Casimir, with the normalization of [F1]. Hence $\tau$ intertwines its generalized-$i$ eigenprojector with the projector defining $f_i^{\mathcal O}$. On the dual tensor factor one has the actual operator identity $\Omega_{N,V^*}\rho_N(h)=-\rho_N(h\Omega_{T_d,V})-n\rho_N(h)$. Indeed $E_{ba}v^c=-\delta_{bc}v^a$ and equivariance of $h$ give the first term $-\sum_{a,b}h(E_{ab}t\otimes v_b)\otimes v^a$ and the second term $-n\sum_a h(t\otimes v_a)\otimes v^a$, exactly that identity. Thus the last-dot generalized-$i$ projector corresponds to the dual-Casimir generalized-$(-n-i)$ projector, including its nilpotent part. This is the actual adjunction mate and agrees with the flag normalization in [F1]. Under $\rho$ the last-dot projector therefore corresponds to the generalized-$(-n-i)$ projector defining $e_i^{\mathcal O}$. Applying the source content projector $e_\alpha$ and target projector $e_{\alpha+\alpha_i}$ to steps 1.1–1.2 gives $u_{\alpha,i}\pi_{\alpha+\alpha_i}N\cong\pi_\alpha e_i^{\mathcal O}N$ and $B_{\alpha+\alpha_i}u_{\alpha,i}\otimes_{B_\alpha}\pi_\alpha M\cong\pi_{\alpha+\alpha_i}f_i^{\mathcal O}M$. Polynomial generalized-eigenspace projectors commute with these natural maps because the maps intertwine the operators, proving the asserted residue compatibility. [F1, F2, step 1.1, step 1.2, algebra]

3.1 **The natural duality comparison.** The ordinary category-O duality $D$ uses matrix transpose and restricted weight-space duals. The product of the ground contravariant form and the natural-factor forms gives a nondegenerate detector form $(xtb,t')=(t,x^{\mathrm{tr}}t'b^*)$; the Casimir, crossings and content projectors are self-adjoint. Put $\delta M=\operatorname{Hom}_{\mathfrak g}(M,T_d)$ with $(bf)(m)=f(m)b^*$ and $X^\#=\operatorname{Hom}_{B_d}(X,B_d)$ with the same twist. The detector form gives an actual isomorphism $\beta:T_d\cong DT_d$, $\beta(t)(t')=(t,t')$. Exact restricted contravariant duality, with its canonical bidual map, consequently gives $\delta M=\operatorname{Hom}_{\mathfrak g}(M,T_d)\cong\operatorname{Hom}_{\mathfrak g}(M,DT_d)\cong\operatorname{Hom}_{\mathfrak g}(T_d,DM)=\pi_dDM$. Its explicit map is $f\mapsto[t\mapsto(m\mapsto(t,f(m)))]$; its inverse sends $g:T_d\to DM$ to $\beta^{-1}\circ Dg\circ\operatorname{bidual}_M:M\to T_d$. These maps are inverse by the symmetry and nondegeneracy of the form and the bidual identities, and the form's $*$-invariance makes them Hecke-linear. This is a canonical natural Hom-duality isomorphism; it requires neither dimensions of simple images nor self-duality of individual projective summands. Tensor-Hom gives $\delta\pi_d^*\cong\#$, while the symmetric trace of [F2] gives $\#\cong D_H$ by $h\mapsto\mathrm{tr}\circ h$. Define $\theta_M:M\to D\pi_d^*\delta M$ by $\theta_M(m)(t\otimes f)=(t,f(m))$. The displayed form identity makes it balanced over $B_d$ and $\mathfrak g$-linear. Applying $\pi_d$ gives a natural transformation $\pi_d\to\pi_dD\pi_d^*\delta\cong\#\pi_dD$ between exact functors. It is an isomorphism on $T_d$ and hence on its finite sums and summands. Apply the copresentations in [F3] to prove it an isomorphism on every projective, by exactness and kernels; then apply projective presentations to prove it on every object, by cokernels. Dualizing yields the natural comparison $\pi_dD\cong D_H\pi_d$. The product forms, tensor evaluation and trace form are the same forms used for the dual adjunctions; consequently this comparison identifies their dual unit/counit squares. Since the residue projectors are self-adjoint, it also commutes with each $f_i,e_i$ separately. Thus $Df_i\cong f_iD$ and $De_i\cong e_iD$. None of this identifies the usual tensor dual $V^*$ with $V$. [F1, F2, F3, step 2.1, construct, algebra]

3.2 **Grothendieck operators and quotient.** Exactness of $\pi$ and of the residue functors makes the natural isomorphisms of step 2.1 induce $[f_i^H][\pi]=[\pi][f_i^{\mathcal O}]$ and $[e_i^H][\pi]=[\pi][e_i^{\mathcal O}]$. On $G_0$, the source simple-class basis shows that $\ker[\pi]$ is exactly the span of the off-standard simple classes, and the induced map from this quotient onto $G_0(B)$ is an isomorphism. No isomorphism from the entire category-O Grothendieck group is asserted. On split projective groups only $\operatorname{add}(T)$ is equivalent to Hecke projectives; an ambient off-standard projective need not have projective image. These distinctions leave the displayed operator equalities intact. On the admitted Fock residue intervals, [F1] supplies the Chevalley relations, and the quotient operator equalities transport them to $G_0(B)$. When the selected contents are fully supported, $B$ is their full cyclotomic cut, so the same comparisons apply to that cut. [F1, F2, F3, step 2.1, algebra]

4.1 **Adjunction maps.** The first tensor unit is the coevaluation $m\mapsto\sum_a(m\otimes v_a)\otimes v^a$, and the tensor counit is evaluation. The induction/restriction unit is $z\mapsto1\otimes z$, and the counit is $b\otimes z\mapsto bz$. Substituting these formulas into $\tau$ and $\rho$ gives the same composite maps, term by term: coevaluation is precisely the sum in $\rho$, and evaluation cancels that sum by $v^a(v_b)=\delta_{ab}$. Restricting the commuting squares by the content and residue projectors proves compatibility for $f_i\dashv e_i$. For the reverse adjunction use the biadjoint mate maps supplied by [F1]. By step 3.1 both image functors commute with duality, so dualizing their first adjunction gives the reverse one. Define its unit and counit by these dual mates, with the same normalization as the O-side maps. The first commuting squares then dualize to the reverse commuting squares. The two pairs are thus compared with their transported normalizations; this is stronger than asserting abstract uniqueness of adjoints across a quotient. [F1, F2, step 1.1, step 1.2, step 2.1, step 3.1, construct, algebra]

5.1 **Filtrations and boundaries.** Applying exact $\pi$ to the O-side residue standard flags preserves their successive quotients, and the intertwined generalized-eigenvalue projectors select the corresponding residue pieces. Admissible nonintegral origins retain the typed coset realization of [F4]; an integral highest-weight Fock interpretation is used only on its actual integral residue component. All comparisons here are ungraded at parameter one. Together with steps 2.1–3.2 this proves the statement. [F1, F3, F4, step 2.1, step 4.1, step 3.1, step 3.2, given] ∎

## Remarks

The raising tensor factor is $V$ and the lowering tensor factor is $V^*$. Their adjunction is evaluation/coevaluation. Restricted transpose duality fixes the natural factor and commutes with each residue functor; these are different constructions.


For a selected content $\alpha$ of degree $d$, write $\beta=\alpha+\alpha_i$ (of degree $d+1$) and $\mathcal O_\alpha^d,\mathcal O_\beta^{d+1}$ for the corresponding admitted blocks, with the typed coset interpretation when required. The paired squares display the two natural comparisons; each square commutes up to the indicated natural isomorphism.

```tikzcd
\mathcal O_\alpha^d \arrow[r, "f_i^{\mathcal O}"] \arrow[d, "\pi_\alpha"'] \arrow[dr, phantom, "\cong" description] & \mathcal O_\beta^{d+1} \arrow[d, "\pi_\beta"] \\
B_\alpha\text{-mod} \arrow[r, "f_i^H"'] & B_\beta\text{-mod}
```

```tikzcd
\mathcal O_\beta^{d+1} \arrow[r, "e_i^{\mathcal O}"] \arrow[d, "\pi_\beta"'] \arrow[dr, phantom, "\cong" description] & \mathcal O_\alpha^d \arrow[d, "\pi_\alpha"] \\
B_\beta\text{-mod} \arrow[r, "e_i^H"'] & B_\alpha\text{-mod}
```

Here the lower arrows are the image residue functors, with both content cuts already applied: $f_i^H(X)=B_\beta u_{\alpha,i}\otimes_{B_\alpha}X$ and $e_i^H(Y)=u_{\alpha,i}Y$. Step 2.1 supplies the two isomorphisms from $\tau$ and $\rho$: the generalized-$i$ last-dot projector corresponds to the generalized-$i$ Casimir projector for raising and the generalized-$(-n-i)$ dual-Casimir projector for lowering. Thus the reverse square uses $V^*$ on the category-$\mathcal O$ side. The squares illustrate the comparisons proved above; the rigorous proof is independent of the figures.
