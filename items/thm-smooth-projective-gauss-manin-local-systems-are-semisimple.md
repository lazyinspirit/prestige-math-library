---
id: thm-smooth-projective-gauss-manin-local-systems-are-semisimple
kind: theorem
title: "Semisimplicity of geometric Gauss-Manin local systems"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases,
       def-geometric-polarizable-hodge-variation,
       def-local-system-of-r-modules-and-its-pullback,
       def-semisimple-module,
       def-socle-of-a-module,
       lem-regular-trace-kernel-descends-the-complex-socle,
       lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity,
       lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations,
       thm-finite-length-semisimple-module-characterizations,
       def-stiefel-space-grassmannian-and-tautological-bundle,
       thm-continuous-image-of-a-compact-space-is-compact,
       cor-heine-borel-in-the-product-topology,
       def-axiom-of-choice,
       cor-bolzano-weierstrass-in-rn]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57; Theoreme 4.2.6 and Lemme 4.2.7, printed pp. 45-47 (semisimplicity of the monodromy representation and the determinant-line argument)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
    - title: "Claire Voisin, Hodge structures and the topology of algebraic varieties, author-hosted lecture notes (Harvard CMSA revision); SS3.2, printed pp. 38-41 (invariant classes and their Hodge components)"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
---

## Statement

Assume AC ([[def-axiom-of-choice]]). If $f:X\to S$ is smooth projective with
$S$ a connected smooth quasiprojective complex variety, then every local system
$R^mf_*\mathbb Q$ ([[def-local-system-of-r-modules-and-its-pullback]]) is
semisimple over $\mathbb Q$ ([[def-semisimple-module]]) and remains semisimple
after scalar extension to every characteristic-zero field. More generally the
complex local system of every geometric polarizable rational Hodge variation is
semisimple. The algebraic realization and geometric integral lattice are
essential hypotheses; no claim is made for every polarized analytic variation
on a punctured disk.

## Facts & Assumptions

**Given:** AC; a geometric polarizable rational Hodge variation $H$ in the sense of [[def-geometric-polarizable-hodge-variation]], say pure of weight $n$ (a non-pure object of finite weight support is a finite direct sum of pure weight pieces, and the argument below applies to each piece). At a point $s$ the fibre $V_s=H_s$ is a finite-dimensional rational vector space with a continuous pure Hodge decomposition $V_{s,\mathbb C}=\bigoplus_{p+q=n}V_s^{p,q}$; the Hodge torus $\mathbb C^\times$ acts on $V_s^{p,q}$ by the scalar $t^p\bar t^q$. Its characters on the finitely many nonzero pieces are distinct, so the complexification of a rational subspace of $V_s$ is stable under the torus exactly when that rational subspace is a Hodge substructure; a complex torus-stable subspace need not be defined over $\mathbb Q$. To see the criterion, choose one torus element with distinct values on all nonzero type characters (possible by avoiding their finitely many equality loci). Each type projection is then a polynomial in its action, by finite Lagrange interpolation, so torus-stability is precisely stability under every type projection; on a tensor or exterior power of $H$ the torus acts by the corresponding tensor action. The complex monodromy module is $V_{s,\mathbb C}$ as a module over the complexified rational monodromy algebra, and flat rational subspaces of $V_s$ correspond to local subsystems of $H$ ([[def-local-system-of-r-modules-and-its-pullback]]).

[F1] The fixed part of a geometric polarizable variation is a constant Hodge substructure, and the Hodge components of global flat sections are global flat sections ([[thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases]]).

[F2] The complex socle of a finite-dimensional rational monodromy module is defined over $\mathbb Q$ and is nonzero for a nonzero module ([[lem-regular-trace-kernel-descends-the-complex-socle]]); the socle is $\operatorname{Soc}(V_{\mathbb C})=\sum\{S:S\text{ a simple submodule}\}$ ([[def-socle-of-a-module]]).

[F3] Finite-dimensional geometric objects form a category closed under finite direct sums, tensor products, exterior powers, Tate twists and Hodge direct summands, with full monodromy-stable integral lattices; tensor and exterior powers of the local system carry the tensor and exterior torus actions ([[lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations]]).

[F4] For a finite-length module the sum-of-simples, direct-sum and invariant-complement characterizations of semisimplicity are equivalent, and semisimple means a direct sum of simple submodules ([[thm-finite-length-semisimple-module-characterizations]], [[def-semisimple-module]]).

[F5] The Grassmannian is the quotient of the orthonormal-frame Stiefel space ([[def-stiefel-space-grassmannian-and-tautological-bundle]]). Every sequence of $d$-planes has a convergent subsequence: choose orthonormal frames under AC; their coordinates are bounded in $\mathbb R^{2Nd}$, so [[cor-bolzano-weierstrass-in-rn]] gives a convergent subsequence, and orthonormality is closed. Passing to the quotient gives convergence of the planes. For $d=0$ there is only the zero plane. Equivalently, send a plane to its orthogonal projection matrix $P=UU^*$; convergence of frames gives convergence of these matrices. This also exhibits the usual Grassmannian topology as a metric topology: projections depend continuously on frames, and near any fixed plane their images are the graph subspaces of the definition, with continuously varying graph coordinates.

[F6] Complex semisimplicity of a finite-rank rational local system implies semisimplicity over $\mathbb Q$ and over every characteristic-zero field ([[lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity]]).

## Proof

**Proof technique:** direct.

1.1 Rational descent of the socle and its lattice. Let $H$ be a nonzero pure geometric object of rank $r$ over the connected base $S$, and let $W_{\mathbb C}$ be the socle of the complex monodromy module $V_{s,\mathbb C}$, a nonzero finite-dimensional complex module by [F2]. By [F2] there is a rational flat subspace $W_{\mathbb Q}\subseteq V_s$ with $W_{\mathbb C}=W_{\mathbb Q}\otimes\mathbb C$; since it is monodromy-invariant it is the fibre at $s$ of a local subsystem of $H$, which we again call $W$. Let $H_{\mathbb Z}$ be the full monodromy-stable integral lattice of [F3] and put $W_{\mathbb Z}=W_{\mathbb Q}\cap H_{\mathbb Z}$; a rational basis of $W_{\mathbb Q}$ becomes integral after clearing denominators, so $W_{\mathbb Z}$ is a full lattice in $W_{\mathbb Q}$, and the monodromy preserves it and acts by invertible integral matrices. On the determinant line $\det W=\bigwedge^{e}W$, $e=\dim_{\mathbb Q}W_{\mathbb Q}$, the monodromy therefore acts by $\pm1$, so $(\det W)^{\otimes2}$ is a constant rank-one local subsystem of the geometric tensor object $\bigwedge^eH\otimes\bigwedge^eH$ of [F3], generated by a global horizontal section. [F2, F3, algebra]

2.1 Torus images of simple summands are flat. Write the complex socle as $W_{\mathbb C}=\bigoplus_i S_i$ by [F4]. Fix a summand $T$ of dimension $d$ and its flat complement $T'=\bigoplus_{S_i\ne T}S_i$ in $W_{\mathbb C}$, using the chosen summand indices. Put $A=\bigwedge^dH_{\mathbb C}\otimes\bigwedge^{e-d}H_{\mathbb C}$ and $V=\bigwedge^dT\otimes\bigwedge^{e-d}T'\subset A$. The determinant identification for $W=T\oplus T'$ is flat, so step 1.1 makes $V^{\otimes2}\subset A^{\otimes2}$ a constant line. The rational object underlying $A^{\otimes2}$ is geometric by [F3]; its complex invariant part is the complexification of its rational invariant part, because invariants are common kernels of rational matrices, reducible to finitely many linear equations in a finite-dimensional fibre. By [F1] this fixed part is a constant Hodge structure. For any Hodge-torus element $t$, the image $t(V^{\otimes2})=(tV)^{\otimes2}$ is therefore a flat line in that fixed part. In a local flat frame choose a nonzero continuous generator $\sigma$ of $tV$; its squared projective class is constant. The map $[u]\mapsto[u\otimes u]$ is injective: if $u\otimes u$ and $v\otimes v$ are proportional, contraction with a functional nonzero on $u$ shows $v$ is proportional to $u$. Thus $[\sigma]$ is constant and $tV$ is flat. A decomposable tensor line in $E\otimes F$ determines its factor lines by contraction with $F^*$ and $E^*$; applying this to $tV$ shows that $\bigwedge^d(tT)$ is flat. Finally the Plücker line determines $tT$ by $tT=\{v:v\wedge p=0\}$ for any nonzero $p\in\bigwedge^d(tT)$, as is checked by completing a basis of $tT$ to a basis of the ambient space. This identity commutes with transport, so $tT$ is flat for every $t$. The case $e=d$ uses the constant zeroth exterior power and satisfies the same argument. [F1, F3, F4, step 1.1, construct, algebra]

3.1 Openness of irreducibility and torus-stability of the socle. For $t$ near $1$ the flat subspace $tT$ is simple: were there $t_n\to1$ with $t_nT$ reducible, there would be, for each $n$, a proper nonzero flat subspace $U_n\subset t_nT$; their dimensions have finitely many possible values $\varrho$, $1\le\varrho<d$; pass to a subsequence with fixed $\varrho$, then use [F5] to make the orthogonal projections $P_n$ onto $U_n$ converge to a rank-$\varrho$ projection $P$. The inclusions $U_n\subset t_nT$ give $\operatorname{im}P\subset T$. For each monodromy matrix $M$, invariance is the closed matrix equation $(I-P_n)MP_n=0$; taking limits gives $(I-P)MP=0$ for every $M$. No finite generation of the fundamental group is assumed. Thus $U=\operatorname{im}P$ is a nonzero proper flat subspace of $T$, contradicting simplicity of $T$. Hence, for $t$ in a neighbourhood of $1$, each $tS_i$ is a simple flat subspace of $H_{\mathbb C}$, and every simple flat subspace is contained in the socle $W_{\mathbb C}$ by [F2]; summing over the finitely many $S_i$ gives $tW\subseteq W$, hence $tW=W$ by dimension. Thus the stabilizer of $W$ in $\mathbb C^\times$ contains a neighbourhood of the identity; a subgroup of a topological group with nonempty interior is open, and the connected group $\mathbb C^\times$ has no proper nonempty open subgroup, so $tW=W$ for every $t\in\mathbb C^\times$. Consequently $W_s$ is stable under the Hodge torus at every point $s$, so $W_{\mathbb Q}$ is a Hodge substructure of $H$ at every point; since it is already flat, it is a Hodge subvariation. [F2, F5, step 2.1, algebra]

4.1 Polarization splitting and induction. Let $Q$ be a polarization of the pure object $H$. Its restriction to the Hodge subvariation $W$ is nondegenerate: if $v\in W_{s,\mathbb C}$ were a nonzero radical vector, then with the Weil operator $C$ of the Hodge structure the vector $C\bar v$ lies in $W_{s,\mathbb C}$ because $W_s$ is a Hodge substructure, so the positivity of the Weil-operator Hermitian form $h(v,v)=Q(Cv,\bar v)=(-1)^nQ(v,C\bar v)$ would give the contradiction $0=Q(v,C\bar v)\ne0$. Hence the $Q$-orthogonal complement $W^\perp$ is a flat Hodge subvariation and $H=W\oplus W^\perp$; the orthogonal projection onto $W$ is a flat rational idempotent that is a Hodge morphism, so $W^\perp$ is a geometric direct summand of $H$ by [F3], of smaller rank unless $W=H$. The submodule $W_{\mathbb C}$ is a direct sum of simples by construction, and by induction over the rank the complex monodromy module of $W^\perp$ is semisimple; a direct sum of semisimple modules is semisimple, so the complex monodromy module of $H$ is semisimple. A non-pure object is a finite direct sum of pure weight pieces, handled one weight at a time, and the rank-zero case is the empty direct sum. [F3, F4, step 3.1, algebra]

5.1 Coefficient fields and the Gauss-Manin case. Complex semisimplicity of the monodromy module of $H$ means exactly that the complex local system $H\otimes\mathbb C$ is semisimple in the sense of [F4]. By [F6] the rational local system $H$ is then semisimple over $\mathbb Q$ and over every characteristic-zero field, with no embedding of that field into $\mathbb C$ used. For a smooth projective $f:X\to S$, the local systems $R^mf_*\mathbb Q$ are geometric and polarizable by [F3], so step 4.1 and [F6] apply to give their semisimplicity over $\mathbb Q$ and over every characteristic-zero field. This proves both asserted clauses; the algebraic realization and the integral lattice were used exactly in steps 1.1 and 2.1, and no statement is made about an arbitrary polarized analytic variation on a punctured disk. [F1, F3, F6, step 4.1, algebra] ∎

## Source notes

Deligne II 4.2.6-4.2.7 were read in full: the argument follows his determinant-line and Hodge-torus stabilisation route, with the sum of minimal-dimensional subsystems replaced by the full socle, whose rational descent and torus-stability are established here; these two sums need not coincide, even for a semisimple module and the rational descent of the complex socle supplied by [[lem-regular-trace-kernel-descends-the-complex-socle]] instead of Deligne's abbreviation. The unpublished Schmid footnote in Deligne II 4.2.6 extending the statement to arbitrary analytic variations is deliberately not used, and no claim is made in that generality.
