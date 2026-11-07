---
dependency_level: 2
id: lem-frobenius-compatible-frames-form-a-finite-etale-torsor
kind: lemma
title: Frobenius-compatible frames form a finite étale torsor
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-general-linear-restriction-over-finite-field-algebra-is-smooth-and-integral
- lem-lang-map-surjective-for-smooth-connected-group-over-finite-field
- thm-jacobian-criterion-smooth-morphism
- def-etale-morphism-schemes
- thm-adjugate-identity-over-a-commutative-ring
- thm-nakayama-lemma
- thm-structure-theorem-for-artinian-rings
- thm-etale-morphisms-open-and-quasi-finite
- lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point
- thm-affine-quasi-coherent-equivalence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Tuan Ngo Dac, Compactification des champs de chtoucas et théorie géométrique
      des invariants
    url: https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf
    locator: Chapter II §2, Frobenius/Lang cover; arbitrary-base finite-equation proof
      reconstructed locally.
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $B$ be any finite-dimensional commutative $\mathbb F_q$-algebra, let $S$ be any $\mathbb F_q$-scheme, and let $M$ be a rank-$r$ vector bundle on $\operatorname{Spec}B\times S$, where $r\ge1$. Put $\sigma=\operatorname{id}_{\operatorname{Spec}B}\times\operatorname{Frob}_{q,S}$. Given an isomorphism $\tau:\sigma^*M\to M$, the functor of frames $u:M\xrightarrow{\sim}(B\otimes\mathcal O_S)^r$ satisfying $\sigma^*u=u\tau$ is represented by a finite étale surjective $S$-scheme $P$. Postcomposition makes $P$ a torsor under the constant group $\Gamma=\mathrm{GL}_r(B)$. The assertion holds for nonreduced $B$ and arbitrary non-Noetherian $S$.

## Facts & Assumptions

**Given:** AC and the data in the Statement.

[F1] The general linear restriction over $B$ is smooth, connected, separated and of finite type. The Lang map on its algebraic-closure points is surjective. ([[lem-general-linear-restriction-over-finite-field-algebra-is-smooth-and-integral]], [[lem-lang-map-surjective-for-smooth-connected-group-over-finite-field]])

[F2] A finite presentation with a square invertible Jacobian matrix is smooth of relative dimension zero, hence étale, under AC. ([[thm-jacobian-criterion-smooth-morphism]], [[def-etale-morphism-schemes]], [[def-axiom-of-choice]])

[F3] Finite projective modules over a local ring are free: lift a residue-field basis, use Nakayama for the surjection onto the module, split it by projectivity, and apply Nakayama again to the finite complementary summand, whose reduction is zero. A matrix with unit determinant is invertible. ([[thm-nakayama-lemma]], [[thm-adjugate-identity-over-a-commutative-ring]])

[F4] A finite-dimensional commutative algebra over a field is a finite product of Artinian local rings. ([[thm-structure-theorem-for-artinian-rings]])

[F5] Étale morphisms are open and have finite separable residue extensions. Every nonempty finite-type scheme over an algebraically closed field has a rational point. ([[thm-etale-morphisms-open-and-quasi-finite]], [[lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point]])

[F6] Under AC, quasi-coherent sheaves on an affine scheme are modules, compatibly with localization and morphisms. ([[thm-affine-quasi-coherent-equivalence]])

## Proof

1.1 Work over an affine $S=\operatorname{Spec}R$. By [F6], regard the bundle as a module over $C=B\otimes R$. Here is the finite-projective assertion used below. Choose a finite principal trivializing cover $D(f_i)$. Lifting the finitely many local basis vectors after multiplication by denominators gives a finite submodule whose quotient vanishes at every $f_i$; since the $f_i$ generate the unit ideal, that quotient is zero. Thus $M$ is finitely generated. A finite free surjection onto $M$ has kernel finitely generated locally on this cover, because locally it splits onto a finite free module; lifting those generators and clearing denominators again makes the kernel finitely generated globally. Hence $M$ is finitely presented. Localization commutes with its Hom module by localizing this finite presentation and its finite equations. Clear denominators in each local dual-basis identity to express $f_i^{k_i}\operatorname{id}_M$ as a finite sum of global rank-one maps. The powers $f_i^{k_i}$ still generate the unit ideal; a linear combination of these identities is a global dual-basis identity, splitting $M$ off a finite free $C$-module. Thus $M$, and $H=\operatorname{Hom}_{B\otimes R}(M,(B\otimes R)^r)$, are finite projective over $R$, being summands of finite free $B\otimes R$-modules and hence of finite free $R$-modules. Finite projectives are locally free on $\operatorname{Spec}R$: the local bases furnished by [F3] extend to a neighborhood by clearing finitely many denominators in a splitting and its inverse. On geometric fibres [F4] and [F3] trivialize $M$ as a rank-$r$ module over $B\otimes\Omega$, so its $R$-rank is $dr$ and that of $H$ is $m=dr^2$, where $d=\dim B$. We may therefore shrink $S$ until these two $R$-modules are free, without assuming that $M$ has a global $B\otimes R$-frame. [F3, F4, F6, given, construct, algebra]

1.2 The needed Lang argument works over every algebraically closed extension $\Omega/\mathbb F_q$, not only over $\overline{\mathbb F}_q$. Let $G$ be the group in [F1]; $G_\Omega$ is smooth and integral. For $c\in G(\Omega)$ the twisted orbit map $h\mapsto F(h)c h^{-1}$ has invertible differential: $dF=0$, while inversion and translations have invertible differentials. Between these smooth schemes of equal dimension the Jacobian criterion [F2] makes it étale, so [F5] makes its image a nonempty open. Two such images intersect by integrality. Choose an affine principal neighborhood inside their intersection; [F5] gives an $\Omega$-point there. Its two nonempty étale fibres have $\Omega$-points, because their residue fields are finite separable over the algebraically closed field by [F5]. Thus any two twisted-conjugation orbits intersect. Orbits are disjoint or equal, so the action is transitive and $g\mapsto F(g)g^{-1}$ is surjective on $G(\Omega)$. This is the full orbit proof, rather than an inference of extension-field surjectivity from the bare $\overline{\mathbb F}_q$-point statement. [F1, F2, F5, construct, algebra]

2.1 Base change of the dual-basis splitting identifies $\sigma_R^*H$ with the homomorphisms from $\sigma^*M$ to $(B\otimes R)^r$. Precomposition by $\tau$ gives an isomorphism $H\to\sigma_R^*H$. In a basis of $H$ and its pulled-back basis, this has matrix $A\in\mathrm{GL}_m(R)$. The compatibility equation for $u=\sum x_i h_i$ is therefore $x_i^q=\sum_j A_{ij}x_j$. Its solution algebra $T=R[x_1,\ldots,x_m]/(x_i^q-\sum_j A_{ij}x_j)$ is finite over $R$: replacing a factor $x_i^q$ decreases total degree, so induction expresses every monomial as a combination of the finitely many monomials with all exponents less than $q$. Its Jacobian is $-A$, which is invertible, so it is étale by [F2]. [F2, step 1.1, construct, algebra]

3.1 Let $z=\det_R(u)$ using the chosen $R$-bases of $M$ and $(B\otimes R)^r$. The $B\otimes R$-linear map $u$ is an isomorphism exactly when $z$ is a unit: its $R$-inverse then commutes with every element of $B$. Taking $R$-determinants of $\sigma^*u=u\tau$ yields $z^q=a z$, where $a=\det_R(\tau)$ is a unit, since the bases on $\sigma_R^*M$ are pulled back from those on $M$. In $T_z$, the relation gives $z^{-1}=a^{-1}z^{q-2}$. Hence $T\to T_z$ is surjective and $T_z$ remains finite over $R$. It is étale as an open subscheme of the étale solution scheme. This constructs the finite étale frame scheme locally; uniqueness of the represented frame functor glues it over all of $S$. [F2, F3, step 2.1, construct, algebra]

4.1 Over $\Omega$, choose a $B\otimes\Omega$-frame of $M$ using [F4] and [F3]. In that frame $\tau$ is $C\in G(\Omega)$ and compatibility becomes $F(u)=uC$. Apply step 1.2 to $C^{-1}$ and invert the resulting matrix to obtain $u$. Hence all geometric fibres of $P$ are nonempty and $P\to S$ is surjective. No Noetherian descent assertion is used. [F3, F4, step 3.1, step 1.2, choose, algebra]

5.1 For two compatible frames their ratio $h$ satisfies $F(h)=h$. Expand each entry in an $\mathbb F_q$-basis of $B$. Each coefficient satisfies $t^q-t=0$; this polynomial is the product of the distinct factors $t-c$ for $c\in\mathbb F_q$. Consequently the fixed-point scheme of the general linear restriction is exactly the constant scheme $\Gamma$: invertibility retains precisely the constant coefficient matrices invertible over $B$. Ratio and postcomposition are inverse morphisms between $P\times_S P$ and $\Gamma\times P$. This proves the torsor assertion, including nonreduced bases and nilpotents in $B$. If $B=0$, $m=0$ and all these schemes are the identity cover. AC is inherited from [F1]–[F4]. [F1, step 3.1, step 4.1, construct, algebra] ∎
