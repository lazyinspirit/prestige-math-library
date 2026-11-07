---
dependency_level: 6
id: thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group
kind: theorem
title: "Decomposition groups at finite global places are local absolute Galois groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - lem-separable-local-polynomials-are-stable-under-small-coefficient-perturbations
  - def-global-field
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-absolute-galois-group-of-a-field
  - def-absolute-galois-group-of-a-global-field
  - def-absolute-galois-group-of-a-local-field
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-algebraic-embedding-extension
  - thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
  - thm-finite-galois-extension-characterizations
  - thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - thm-weak-approximation-for-inequivalent-absolute-values
  - def-equivalent-field-absolute-values
  - thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
  - thm-metric-completion-unique
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-local-inertia-subgroup-of-absolute-galois-group
sources:
  references:
    - title: "Fesenko and Vostokov, Local Fields and Their Extensions, Chapter II sections 2.6–2.7 and Exercise 6, printed pp.42–44,49"
      url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    - title: "Milne, Algebraic Number Theory v3.08, Proposition 8.10 and its alternate proof, printed p.139; Proposition 7.61 and Corollary 7.62, printed p.132"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
---

## Statement

Assume the Axiom of Choice. Let $F$ be a global field, let $v$ be a finite place, and let $F_v$ be its completion. Fix a separable closure $F_s/F$ and a prolongation $w$ of $v$ to $F_s$. Normalize its absolute value to restrict to the chosen absolute value on $F$. Then the decomposition subgroup

$$D_w=\{\sigma\in G_F:|\sigma x|_w=|x|_w\text{ for all }x\in F_s\}$$

is closed, and continuous extension at finite levels gives a topological group isomorphism

$$D_w\cong G_{F_v}.$$

More precisely, for finite Galois $L/F$ inside $F_s$, let $L_w$ be its completion at $w|_L$. The finite stabilizer $D(w|_L/v)$ identifies with $\operatorname{Gal}(L_w/F_v)$ by continuous extension. These maps commute with restriction and induce the displayed absolute isomorphism after choosing compatible separable closures. The residue field of $F_s$ is identified with the union of the residue fields of these finite completions. Under the absolute isomorphism its residue-kernel subgroup identifies with the absolute local inertia subgroup $I_{F_v}$.

Every two prolongations of $v$ to $F_s$ are $G_F$-conjugate. Conjugation carries their decomposition and inertia groups and residue actions to one another. The induced residue-field isomorphism commutes with $x\mapsto x^{q_v}$, where $q_v$ is the residue-field order of $F_v$. This includes both number fields and global function fields; archimedean places are excluded. The isomorphism depends on compatible closure choices, rather than specifying a choice-independent embedding of $G_{F_v}$ into $G_F$.

## Statement references

[Fesenko and Vostokov, *Local Fields and Their Extensions*, Chapter II sections 2.6–2.7 and Exercise 6, printed pp.42–44,49](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[Milne, *Algebraic Number Theory*, Proposition 8.10 and alternate proof, printed p.139; Proposition 7.61 and Corollary 7.62, printed p.132](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

These sources give the finite completion/decomposition identification and polynomial stability. The proof below supplies dense-field descent, the absolute inverse limit and prolongation conjugacy explicitly. Milne's number-field specialization is not used to restrict the global-function-field clause.

## Facts & Assumptions

**Given:** Choice, $F,v,F_v,F_s,w$ in the Statement.

[A1] [[def-axiom-of-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]] supply algebraic embedding extension, inverse-limit compactness, and Countable Choice for finite-dimensional norm/completion arguments.

[F1] [[def-global-field]], [[def-place-of-a-global-field]] and [[def-completion-of-a-global-field-at-a-place]]: $F_v$ is the complete valued field containing the dense isometric image of $F$. [[def-local-field-valuation-ring-uniformizer-and-residue-field]] gives, for finite $v$, a complete discretely valued field with finite residue field. The local absolute-group convention is [[def-absolute-galois-group-of-a-local-field]].

[F2] [[lem-separable-local-polynomials-are-stable-under-small-coefficient-perturbations]]: a sufficiently small coefficient perturbation of a monic irreducible separable local polynomial is irreducible and separable, with nearby roots generating the same local subfield.

[F3] [[thm-primitive-element-theorem-for-finite-separable-extensions]]: every finite separable extension has a primitive element.

[F4] [[thm-algebraic-embedding-extension]]: under Choice an embedding into an algebraically closed field extends across any algebraic extension of its domain.

[F5] [[thm-finite-galois-extension-characterizations]]: a finite extension is Galois exactly when it is a splitting field of a separable polynomial. In particular it is normal and its fixed field under the full Galois group is the base field.

[F6] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]] and [[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]: finite extensions of $F_v$ are complete for their unique extending absolute value; embeddings over $F_v$ preserve it. Every finite-dimensional subspace is closed. [[thm-metric-completion-unique]] extends isometries uniquely to completions.

[F7] [[thm-weak-approximation-for-inequivalent-absolute-values]]: finitely many pairwise inequivalent nontrivial absolute values on any field admit simultaneous approximation to prescribed field elements. [[def-equivalent-field-absolute-values]]: equivalence means one is a positive power of the other.

[F8] [[def-absolute-galois-group-of-a-field]] and [[def-absolute-galois-group-of-a-global-field]] identify $G_F$ with the compatible finite Galois automorphisms. [[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]] makes every finite restriction surjective under Choice. [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]] makes this group compact and Hausdorff, with the finite restriction topology.

[F9] [[def-local-inertia-subgroup-of-absolute-galois-group]] defines $I_{F_v}$ as the inverse limit of the finite residue-action kernels. This definition alone is used here; surjectivity of the absolute residue map is a separate theorem.

## Proof

1.1 Fix an algebraic closure $\Omega$ of $F_v$. By [F4], embed $F_s$ into $\Omega$ over $F$. Its image consists of all elements of $\Omega$ separable algebraic over $F$: indeed every separable polynomial over $F$ splits in $F_s$, so all its roots in $\Omega$ occur in the image. Give this image the restriction of the compatible absolute value on $\Omega$, obtained from [F6] on finite subextensions. Denote the induced prolongation by $w_0$. In steps 1–5 use this embedding and prolongation. [A1, F1, F4, F6, given, construct]

1.2 For a finite Galois extension $L/F$, let $u_1,u_2$ be two absolute values extending the same chosen nontrivial value of $F$. Suppose their orbits under $\operatorname{Gal}(L/F)$ were disjoint. The union of these two finite orbits is a finite list of pairwise inequivalent absolute values: equivalent ones differ by a positive power by [F7], and restriction to the same nontrivial value on $F$ forces that power to be $1$. By [F7] choose $x\in L$ with $|x|_u<1$ at every member of the first orbit, and $|x-1|_u<1$ at every member of the second orbit. The latter imply $|x|_u=1$, so $x\ne0$. The product $N=\prod_{\sigma\in\operatorname{Gal}(L/F)}\sigma x$ belongs to $F^\times$, since the group permutes its factors and its fixed field is $F$ by [F5]. But $|N|_{u_1}<1$ whereas $|N|_{u_2}=1$, contradicting equality of their restrictions on $F$. Thus the two prolongations are conjugate at every finite Galois level. [F5, F7, given, construct, algebra]

2.1 For finite Galois $L/F$ in $F_s$, put $E_L=F_vL\subset\Omega$. By [F5], $L$ is generated by the roots of a separable polynomial over $F$; the same roots generate $E_L$ over $F_v$, so $E_L/F_v$ is finite Galois. It is complete by [F6]. A finite spanning list from $L$ spans $E_L$ over $F_v$. Approximating each of its finitely many coefficients by elements of $F$ proves that $L$ is dense in $E_L$. Consequently $E_L$ is $L_{w_0}$, the completion of $L$ for its induced absolute value. [A1, F1, F5, F6, step 1.1, algebra]

2.2 Let $E/F_v$ be any finite separable subextension of $\Omega$. By [F3] choose a primitive element $\alpha$ and its monic minimal polynomial $f$ of degree $d$. By density of $F$ in $F_v$, choose a monic degree-$d$ polynomial $g\in F[X]$ sufficiently coefficient-close for [F2]. It has a root $\beta\in E$ with $F_v(\beta)=E$. Its irreducibility over $F_v$ implies irreducibility over $F$, and it is separable over $F$ because it has distinct roots over $\Omega$. Step 1.1 thus puts $\beta$ in the image of $F_s$. The splitting field $L$ of $g$ in that image is a finite Galois extension of $F$ by [F5], and $E=F_v(\beta)\subseteq E_L$. This argument applies in characteristic $p$ because [F2] assumes separability, not characteristic zero. [A1, F1, F2, F3, F5, step 1.1, construct]

3.1 An element of $D(w_0|_L/v)$ is an isometry of $L$, so [F6] extends it uniquely to $E_L$, fixing $F_v$ by density. Conversely, an $F_v$-automorphism of $E_L$ maps $L$ into $L$ because it fixes $F$ and permutes the roots of the global splitting polynomial; applying its inverse gives equality. Its restriction is isometric by uniqueness in [F6] and hence belongs to the finite stabilizer. Extension and restriction are inverse by density. They commute with inclusions of finite Galois extensions. [F5, F6, step 2.1, algebra]

4.1 The $E_L$ are directed by compositum and are separable over $F_v$. Step 2.2 shows that their union is the separable closure $\Omega_s$ of $F_v$ in $\Omega$, and that every finite local Galois subextension is contained in some $E_L$. A compatible family of the finite stabilizer automorphisms acts on the union of the $L$, namely $F_s$, and stabilizes $w_0$; conversely an element of $D_{w_0}$ gives such a family. Step 3.1 identifies these families with compatible automorphisms of the $E_L$, hence with $\operatorname{Gal}(\Omega_s/F_v)$. The $E_L$ are cofinal among the finite local Galois subextensions, so both this map and its inverse are continuous for finite restriction neighborhoods. This proves a topological isomorphism $D_{w_0}\cong G_{F_v}$. The subgroup $D_{w_0}$ is closed: it is the intersection, over finite Galois $L/F$, of the inverse images of their finite stabilizers in $G_F$. [F8, step 3.1, step 2.2, construct]

5.1 Density identifies the residue field of $L$ with that of $E_L$. For any $a\in\mathcal O_{E_L}$ choose $b\in L$ with $|a-b|<1$; then $b\in\mathcal O_L$ and their residues agree. The residue embedding is injective because it preserves the absolute value. These identifications commute with inclusions and the automorphisms in step 3.1. Since every element of $F_s$ lies in some $L$, its residue field is their residue-field union. An automorphism acts trivially on this union exactly when each corresponding $E_L$-automorphism acts trivially on its residue field. These are exactly the finite inertia kernels. Every finite local Galois subextension lies in an $E_L$ by step 2.2, so the kernel on the union identifies with their full inverse limit $I_{F_v}$ in [F9]. No residue-surjectivity assertion is needed here. [F6, F9, step 2.1, step 3.1, step 2.2, step 4.1, algebra]

6.1 For any two prolongations $w,w'$ on $F_s$, let $C_L\subseteq G_F$ be the set of $\sigma$ for which $|\sigma x|_{w'}=|x|_w$ for every $x\in L$, for each finite Galois $L/F$. It is determined by a finite restriction, hence clopen. Step 1.2 and finite restriction surjectivity [F8] make it nonempty. For any finite list of such $L$, their compositum is finite Galois and its $C_L$ lies in all the listed sets. Compactness in [F8] gives an element in their total intersection. It conjugates the prolongations on every element of $F_s$. In particular $w$ is conjugate to $w_0$, so steps 3.1–5.1 transport to $w$; continuous conjugation also transports closedness and the topological isomorphism. [A1, F8, step 1.2, step 4.1, step 5.1, construct]

7.1 If $|\sigma x|_{w'}=|x|_w$, the induced field isomorphism carries valuation rings and maximal ideals onto one another. It therefore induces a residue-field isomorphism commuting with the action of the conjugate decomposition groups. Residue-action kernels are carried to one another, and step 5.1 identifies them with the corresponding absolute local inertia groups. Every field isomorphism commutes with taking the $q_v$th power; hence the transported arithmetic residue Frobenius is the same power map. This proves all compatibility and choice-of-prolongation assertions. Only the finite nonarchimedean place property was used, so both kinds of global field in [F1] are covered. [F1, F9, step 5.1, step 6.1, algebra] ∎
