---
id: "thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms"
kind: "theorem"
title: "Compact Kähler Hodge decomposition from elliptic harmonic forms"
status: "draft"
origin: "session"
deps: ["def-compact-kahler-manifold-and-hodge-polarization-conventions", "lem-kahler-commutators-and-laplacian-type-preservation", "lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds", "thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition", "thm-dolbeault-lemma-polydisc", "thm-smooth-function-module-sheaves-are-acyclic", "thm-acyclic-resolution-theorem-for-right-derived-functors", "thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}]}
proof_strategy: direct
---

## Statement

For a compact Kähler manifold $X$, every de Rham class has a unique smooth harmonic representative and
$$H^k(X;\mathbb C)=\bigoplus_{p+q=k}H^{p,q}(X),\qquad \overline{H^{p,q}(X)}=H^{q,p}(X).$$
Here $H^{p,q}(X)$ is precisely the classes with a $d$-closed smooth representative of type $(p,q)$, so the decomposition is independent of the Kähler metric. It identifies with $H^q(X,\Omega_X^p)$, where $\Omega_X^p$ is the sheaf of holomorphic $p$-forms. The Hodge filtration $F^a=\bigoplus_{p\ge a}H^{p,k-p}$ equals that induced by the holomorphic-degree filtration of the de Rham complex; its spectral sequence has $E_1^{p,q}=H^q(X,\Omega_X^p)$ and degenerates at $E_1$. Pullback by holomorphic maps of compact Kähler manifolds and cup product preserve Hodge type, so $H^k(X;\mathbb Q)$ is a functorial rational pure Hodge structure.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] [[lem-kahler-commutators-and-laplacian-type-preservation]] gives the Laplacian identities. [[lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds]] gives the rational comparison. The new analytic input is [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]; its exact contract is Green decomposition for nonnegative scalar-principal Laplace-type operators on compact bundles, including smoothness and finite kernel. The sheaf and spectral-sequence suppliers are explicitly listed in deps.

## Proof

1.1 If $n=0$, compactness makes $X$ a finite discrete set; only degree-zero functions occur, the Laplacian is zero, and every assertion follows componentwise with $G=0$. Assume henceforth $n\ge1$, so real dimension is at least two as required by the analytic supplier. For $\Delta=dd^*+d^*d$, wedge $\varepsilon(\xi)$ and metric contraction $\iota(\xi)$ satisfy $\iota(\xi)\varepsilon(\xi)+\varepsilon(\xi)\iota(\xi)=|\xi|^2I$. Thus the principal symbol of $\Delta$ is $|\xi|^2I$; Stokes gives its nonnegative energy $\|du\|^2+\|d^*u\|^2$. The compact Laplace-type supplier therefore gives a finite smooth harmonic space, smooth Green inverse $G$, and $u=\Pi u+\Delta Gu$. For closed $u$, $dGu$ is harmonic because $\Delta dGu=d(u-\Pi u)=0$. It is exact and hence orthogonal to harmonic forms by Stokes, so it is zero. Consequently $u=\Pi u+dd^*Gu$. A harmonic exact form $dv$ has norm squared $\langle dv,h\rangle=\langle v,d^*h\rangle=0$; harmonic representatives are unique. [given, algebra]

2.1 The Kähler commutator supplier gives $\Delta=2\Delta_{\bar\partial}$, so the harmonic projection preserves type. If $u$ is closed of pure type $(p,q)$, its harmonic representative $\Pi u$ has that type. Conversely every harmonic $(p,q)$ form is closed and represents such a class. Taking type components in the unique harmonic representative proves the direct decomposition; the real Laplacian commutes with complex conjugation, giving the conjugate symmetry. The closed-type characterization proves metric independence and immediately proves holomorphic pullback and cup compatibility: pullback and wedge preserve type and closedness, and the de Rham theorem identifies wedge with singular cup. The rational comparison supplier gives the rational underlying space and real structure. [step 1.1, given, algebra]

3.1 In fixed type $(p,q)$, the same compact elliptic supplier applies to $\Delta_{\bar\partial}=\Delta/2$. Repeating step 1.1 for $\bar\partial$ gives unique harmonic representatives of its global cohomology. The local polydisc Dolbeault lemma proves stalkwise exactness of $0\to\Omega_X^p\to\mathcal A^{p,0}\to\cdots\to\mathcal A^{p,n}\to0$; in degree zero the equation $\partial_{\bar z_j}f=0$ is the holomorphic coefficient condition. Each $\mathcal A^{p,q}$ is a sheaf of smooth real-function modules and is acyclic by the supplied theorem. The acyclic-resolution theorem therefore identifies $H^q(X,\Omega_X^p)$ with global Dolbeault cohomology, which was just identified with the harmonic $(p,q)$ forms. [step 1.1, step 2.1, given, algebra]

4.1 Filter the global de Rham complex by holomorphic degree. Reindexing the published chain-filtration supplier by chain degree $-k$ and increasing filtration index $-a$ gives the cochain convention used here. Its bounded spectral sequence has first page the Dolbeault groups in step 3.1. Every class there is represented by a harmonic $(p,q)$ form which is $d$-closed. Therefore its representative has zero differential on every page and all outgoing differentials vanish; incoming differentials vanish for the same reason on their sources. Induction gives $E_r=E_1$ for every $r$. Convergence of the bounded filtration identifies its associated graded with these same groups. Closed harmonic forms of holomorphic degree at least $a$ give inclusion of $\bigoplus_{p\ge a}H^{p,k-p}$ into the induced $F^a$. The associated graded dimensions agree by convergence, and descending induction on the finite filtration gives equality. This proves all assertions without importing an unproved degeneration theorem. [step 2.1, step 3.1, given, algebra, induction] ∎
