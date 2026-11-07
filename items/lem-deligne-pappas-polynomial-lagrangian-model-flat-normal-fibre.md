---
id: lem-deligne-pappas-polynomial-lagrangian-model-flat-normal-fibre
kind: lemma
title: Flat polynomial Lagrangian model and normal special fibre
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - lem-deligne-pappas-truncated-dvr-lagrangian-strata
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-parameters-and-regular-sequences-in-cohen-macaulay-modules
  - thm-krull-height-theorem
  - thm-krull-height-theorem-converse
  - cor-height-plus-quotient-dimension-affine-domain
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
  - thm-regular-quotients-and-cohen-macaulayness
  - lem-parameter-dimension-drop-is-exact
  - def-standard-etale-algebra
  - thm-serre-normality-criterion
  - thm-jacobian-criterion-smooth-morphism
proof_strategy: direct
axiom_use: AC is used through the regular-ring, parameter-sequence, height, affine-dimension and Serre-criterion suppliers. The finite graph and polynomial coefficient calculations add no choice hypothesis.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pierre Deligne and Georgios Pappas, Singularités des espaces de modules de Hilbert, en les caractéristiques divisant le discriminant
      url: https://www.numdam.org/item/CM_1994__90_1_59_0.pdf
      locator: §§4.3–4.4, printed pp.71–72; specialization to a complete DVR with perfect residue field
---

## Statement

Assume AC. Let $O$ be a complete discrete valuation ring with uniformizer $\pi$ and perfect residue field $k$, let $e\ge1$, and let $P(t)\in O[t]$ be monic of degree $e$ with $P(t)\equiv t^e\pmod\pi$. Put $R_P=O[t]/(P)$. Let $X_P$ be the closed subfunctor of the relative Grassmannian of scalar rank-$e$ direct subbundles in $R_P^2$ whose subbundles are $R_P$-stable and isotropic for the $R_P$-valued wedge pairing.

Then $X_P\to\operatorname{Spec}O$ is flat and is a relative local complete intersection of pure relative dimension $e$. Its geometric special fibre is the truncated-DVR space $X_e$ from the stratum lemma; it is normal and geometrically irreducible. The open stratum is covered by affine $e$-spaces, and its complement has dimension at most $e-2$ (empty for $e=1$).

More explicitly, at a closed special-fibre point of type $(i,j)$ with $i+j=e$, after a finite unramified base extension if necessary, a graph chart is the coefficient-equation scheme
$$\operatorname{Spec}O[a_0,\ldots,a_{i-1},b_0,\ldots,b_{i-1},c_0,\ldots,c_{j-1},d_0,\ldots,d_{j-1}]/(E_0,\ldots,E_{e-1}),$$
where $a,b$ have degree less than $i$, $c,d$ have degree less than $j$, and $E_l$ is the coefficient of $t^l$ in
$$(t^i+a(t))(t^j+d(t))-b(t)c(t)-P(t).$$
The empty coefficient lists for $i=0$ are allowed. These charts are regular-sequence charts; the statement supplies no crystalline deformation comparison or abelian-moduli compactification.

## Facts & Assumptions

**Given:** The complete DVR and polynomial in the Statement, and its explicit AC assumption.

[A1] The Axiom of Choice is retained for the commutative-algebra suppliers below. [[def-axiom-of-choice]]

[F1] The geometric special-fibre module space has the finite strata $S_i$ of dimensions $e-2i$, with two affine charts on each positive-dimensional stratum and a reduced-point endpoint. [[lem-deligne-pappas-truncated-dvr-lagrangian-strata]]

[F2] Under AC, polynomial extensions and localizations of regular Noetherian rings are regular; regular local rings are Cohen–Macaulay; every system of parameters in a Cohen–Macaulay local ring is regular. [[thm-localisation-and-polynomial-extension-of-regular-rings]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]], [[thm-parameters-and-regular-sequences-in-cohen-macaulay-modules]]

[F3] Under AC, an ideal with $r$ generators has minimal primes of height at most $r$; systems of parameters exist in finite-dimensional Noetherian local rings; height plus quotient dimension equals ambient dimension for affine domains over a field. [[thm-krull-height-theorem]], [[thm-krull-height-theorem-converse]], [[cor-height-plus-quotient-dimension-affine-domain]]

[F4] Over a PID, torsion-free modules are flat. Quotients by regular sequences of Cohen–Macaulay local rings are Cohen–Macaulay, with the expected dimension drop. [[thm-over-a-pid-flat-is-equivalent-to-torsion-free]], [[thm-regular-quotients-and-cohen-macaulayness]], [[lem-parameter-dimension-drop-is-exact]]

[F5] Under AC, the normality criterion is $(R_1)+(S_2)$; a polynomial chart with no defining equations is smooth and has geometrically regular fibres by the Jacobian criterion, using its $0\times0$ minor $1$. [[thm-serre-normality-criterion]], [[thm-jacobian-criterion-smooth-morphism]]

[F6] A monic polynomial quotient with invertible derivative is a standard étale algebra. [[def-standard-etale-algebra]]

## Proof

**Proof technique:** two-generator determinant charts, then regular sequences and the codimension-two normality criterion.

1.1 The top-coefficient functional on $R_P$ makes its wedge pairing a perfect scalar alternating pairing. In the power basis its trace matrix has zeros below the anti-diagonal and units on the anti-diagonal; reduction of powers $t^{r+s}$ with $r+s\ge e$ changes only entries beyond that anti-diagonal. Thus the half-rank isotropic argument of [F1] works over $O$ and after any base change: such an $F$ equals its wedge orthogonal, and isotropy then forces $R_P$-stability, since $(rf)\wedge g=r(f\wedge g)=0$. The functor is cut out by finite matrix equations on the Grassmannian charts. The maximal-minor, or Plücker, coordinates embed the ordinary Grassmannian as a closed projective scheme: on each nonzero-minor open, row reduction gives exactly the graph chart and its minor identities. Consequently $X_P$ is projective, hence proper, over $O$. Its special fibre is exactly $X_e$ by reduction of $P$. [F1, A1, given, construct, algebra]

1.2 Work first at a special-fibre point whose normal-form basis is defined over $k$. Lift that basis to $R_P^2$. It is invertible: its determinant is a unit modulo $\pi$, and $R_P$ is finite free and complete over $O$, so a geometric series in $\pi R_P$ gives its inverse. Write $i+j=e$, and let $A$ be spanned by $t^re_1$ for $r\ge i$ and $t^se_2$ for $s\ge j$, and $B$ by the remaining basis vectors. On the graph chart for $A\oplus B$, the first two generating vectors are
$$u=(t^i+a)e_1+ce_2,\qquad v=be_1+(t^j+d)e_2,$$
with the coefficient bounds in the Statement. The vectors $t^ru$ for $0\le r<j$ and $t^sv$ for $0\le s<i$ project to a triangular basis of $A$ with diagonal entries $1$. Indeed every nonleading contribution has a smaller power index in its corresponding family; a power reduced using $P$ has index below the start of the other family whenever reduction is needed. They therefore give a scalar direct rank-$e$ graph. Their wedges vanish precisely when $u\wedge v=0$ in $R_P$. The determinant polynomial is monic of degree $e$, so its vanishing modulo $P$ is exactly equality with $P$, giving the displayed $e$ coefficient equations. Conversely these equations make the graph isotropic and hence stable by step 1.1. When $i=0$, the second family is empty and the equations force $d=P-t^e$, so $v=0$ and the same chart formula still works. [F1, step 1.1, A1, construct, algebra]

1.3 Over a closed special-fibre point, choose a geometric point over it. Then the normal-form matrix in [F1] uses finitely many coefficients in a finite extension $k'/k$. Because $k$ is perfect, this extension is separable. A finite unramified extension of the complete DVR with residue field $k'$ is obtained by lifting a monic separable primitive polynomial of $k'/k$: its quotient is finite free, complete, has residue field $k'$, and has uniformizer $\pi$. The derivative is a unit, so this is an étale extension; every element with nonzero residue is invertible by completeness. It is faithfully flat, being finite free and nonzero over the local base. Thus step 1.2 applies after this base extension and covers every closed special-fibre point. The constructions commute with further residue-field extensions. [F1, F4, F6, step 1.2, A1, algebra]

2.1 Consider one of the coefficient charts and reduce modulo $\pi$. It has $2e$ variables and $e$ equations. By [F3], every irreducible component has dimension at least $e$; by [F1], its dimension is at most $e$. Thus all its components have dimension exactly $e$. The affine-domain dimension formula in [F3] then gives local dimension $e$ at every closed point of this special-fibre chart. Its ambient polynomial local ring over $k$ is regular of dimension $2e$ by [F2]. Choose $e$ parameters in the quotient using [F3] and lift them. Together with the $e$ equations they are a full system of parameters of that ambient regular local ring. By [F2], that system, in any order, is regular. In particular the $e$ coefficient equations form a regular sequence in the ambient local ring. Hence all special-fibre chart local rings are complete intersections and Cohen–Macaulay by [F4]; checking closed points suffices, since every prime in a finite-type field algebra lies under a maximal ideal and these properties localize. [F1, F2, F3, F4, A1, step 1.2, step 1.3, algebra]

2.2 At the corresponding closed special-fibre point over $O$, the ambient polynomial local ring is regular of dimension $2e+1$. To see the dimension, reduce modulo $\pi$, where the maximal ideal has height $2e$ by [F3]; lifting its regular local parameters together with $\pi$ gives the stated regular local system. The quotient by $\pi$ and the $e$ coefficient equations has dimension $e$ by step 2.1. Adjoin $e$ lifted quotient parameters as there. The resulting $2e+1$ elements form a system of parameters, so [F2] makes them regular in every order. Ordering the coefficient equations first and $\pi$ next proves that the equations are a regular sequence and $\pi$ is a non-zero-divisor on their quotient. It is therefore torsion-free over the DVR, hence flat by [F4]. This is precisely a relative complete-intersection chart of relative dimension $2e-e=e$. The conclusions descend from the finite unramified extensions of step 1.3: their faithful flatness detects the vanishing of the relevant Koszul homology and of the kernel of multiplication by $\pi$. [F2, F3, F4, A1, step 1.3, step 2.1, algebra]

3.1 These regular-sequence and flat charts cover a neighbourhood of the entire special fibre: they cover every closed point, and any nonempty closed complement in the finite-type special fibre would have a closed point. The regular-sequence locus is open: its positive Koszul homology modules are finite, so their supports are closed. The locus where $\pi$ is a non-zero-divisor is likewise the complement of the support of its finite kernel. The complement of this open neighbourhood is closed in the proper scheme $X_P$. If it were nonempty, its proper image in $\operatorname{Spec}O$ would contain the generic point and hence the closed point, contrary to its having empty special fibre. Thus the neighbourhood is all of $X_P$. This proves the asserted global flatness and relative local complete-intersection property, with pure relative dimension $e$ from the regular-sequence chart dimension drop. [F2, F4, A1, step 1.1, step 2.2, algebra]

3.2 Work over an algebraic closure of $k$ and apply the equal-characteristic coefficient-chart argument of step 2.1 directly. These chart rings are Cohen–Macaulay by step 2.1, hence satisfy $(S_2)$. The open stratum $S_0$ has the affine $e$-space charts of [F1], so is regular by [F5]. All components of the special fibre have dimension $e$, while its complement has dimension at most $e-2$ by [F1]. The affine dimension formula [F3] therefore puts every point of codimension zero or one in $S_0$. This is $(R_1)$, so [F5] proves normality. Every irreducible component meets $S_0$, since no dimension-$e$ component can be contained in the smaller complement. Because $S_0$ is irreducible by [F1], it lies densely in just one irreducible component; hence there is only one. Normality gives reducedness, proving geometric irreducibility as well. For $e=1$, $S_0$ is the whole special fibre, and the same argument has no exceptional locus. No assertion here supplies the separate crystalline or moduli comparison. [F1, F2, F3, F4, F5, A1, step 2.1, step 3.1, algebra] ∎
