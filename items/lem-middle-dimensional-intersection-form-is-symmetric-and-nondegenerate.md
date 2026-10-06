---
id: lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate
kind: lemma
title: "The middle-dimensional intersection form is symmetric and nondegenerate"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 6
deps:
  - def-middle-dimensional-intersection-form
  - thm-singular-cohomology-is-graded-commutative
  - cor-poincare-duality-gives-a-nonsingular-cup-pairing
  - thm-poincare-duality-for-oriented-topological-manifolds
  - lem-closed-oriented-pid-manifolds-have-finitely-generated-homology
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - prop-singular-homology-of-a-disjoint-union-is-the-direct-sum
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - def-axiom-of-choice
  - def-fundamental-class-of-a-compact-oriented-manifold
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lecture 11 section 11.2, printed pp. 93-94: symmetry from the cup product, nondegeneracy from Poincare duality, and Exercise 11.8 for the torsion kernel"
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original p. 224: signature is defined by diagonalizing the rational middle cup-product form; perfectness and integral unimodularity are supplied by the cited Poincare-duality corollary"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 34: the rational form is symmetric and is diagonalized to define the signature"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC ([[def-axiom-of-choice]]), inherited from Poincare duality. Let $M$
be a closed oriented smooth $4k$-manifold with middle form $Q_M$
([[def-middle-dimensional-intersection-form]]). Then: (1) $Q_M(x,y)=Q_M(y,x)$
for all $x,y\in H^{2k}(M;\mathbb R)$; (2) the adjoint maps
$x\mapsto Q_M(x,-)$ and $y\mapsto Q_M(-,y)$ are isomorphisms onto the full
$\mathbb R$-linear dual, so $Q_M$ is nondegenerate and $H^{2k}(M;\mathbb R)$ is
finite dimensional; (3) on the free quotient
$H^{2k}(M;\mathbb Z)/\operatorname{Tor}$ the integral pairing is unimodular,
and the torsion subgroup lies in its kernel; (4) for
$M=M_1\sqcup\cdots\sqcup M_r$ with induced orientations, $Q_M$ is the
orthogonal direct sum $\bigoplus_jQ_{M_j}$ under
$H^{2k}(M;\mathbb R)\cong\bigoplus_jH^{2k}(M_j;\mathbb R)$. All statements hold
verbatim with $\mathbb Q$ in place of $\mathbb R$.

## Facts & Assumptions

**Given:** AC; a closed oriented smooth $4k$-manifold $M$ with fundamental class $[M]$ and middle form $Q_M$; the field $F$ is $\mathbb R$ or $\mathbb Q$.

[F1] $Q_M(x,y)=\langle x\smile y,[M]\rangle$ on $H^{2k}(M;\mathbb R)\times H^{2k}(M;\mathbb R)$, restricting on integral classes to the integral pairing, and $Q_{\varnothing}=0$ ([[def-middle-dimensional-intersection-form]]).

[F2] Cup product is graded commutative: $u\smile v=(-1)^{pq}v\smile u$ for $u\in H^p$, $v\in H^q$ ([[thm-singular-cohomology-is-graded-commutative]]).

[F3] Assume AC. For a closed $F$-oriented $n$-manifold with $F$ a field, the pairing $H^p\times H^{n-p}\to F$, $(a,b)\mapsto\langle a\smile b,[M]\rangle$, is perfect with both adjoints onto the full dual, and the groups are finite-dimensional; for $R=\mathbb Z$ and an integral orientation the same formula induces a unimodular pairing on the free quotients $H^p(M;\mathbb Z)/\operatorname{Tor}$ and $H^{n-p}(M;\mathbb Z)/\operatorname{Tor}$, which are finite free abelian groups with both adjoints to the integer duals isomorphisms ([[cor-poincare-duality-gives-a-nonsingular-cup-pairing]]).

[F4] Cap with the compatible compact orientation classes gives the duality isomorphisms $D_M:H_c^p(M;R)\to H_{n-p}(M;R)$, and for compact $M$ one has $D_M(a)=a\cap[M]$ ([[thm-poincare-duality-for-oriented-topological-manifolds]]).

[F5] For a closed $R$-oriented $n$-manifold with $R$ a commutative PID, every $H_q(M;R)$ and $H^p(M;R)$ is finitely generated and vanishes outside degrees $0,\dots,n$ ([[lem-closed-oriented-pid-manifolds-have-finitely-generated-homology]]).

[F6] The Kronecker pairing is additive in both variables, independent of representatives, and natural: $\langle f^*\alpha,z\rangle=\langle\alpha,f_*z\rangle$ ([[def-kronecker-evaluation-pairing]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[F7] The fundamental class of a disjoint union corresponds to the finite tuple of component fundamental classes: for $M=\bigsqcup_{j=1}^rM_j$ with inclusions $i_j$, the class $[M]$ is $\sum_j(i_j)_*[M_j]$, and the orientation of $M$ restricts to the given orientation on each component ([[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F8] For every field $k$ and space $X$, evaluation is an isomorphism $H^n(X;k)\to\operatorname{Hom}_k(H_n(X;k),k)$ ([[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]).

[F9] Singular homology of a disjoint union splits: $H_n(\bigsqcup_\alpha X_\alpha;G)\cong\bigoplus_\alpha H_n(X_\alpha;G)$ ([[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]]).

## Proof

**Proof technique:** direct; symmetry from graded commutativity, nondegeneracy from Poincare duality, and the componentwise clause from naturality.

1.1 Symmetry: for $x,y\in H^{2k}(M;F)$ the cup product has $p=q=2k$ in [F2], so $x\smile y=(-1)^{4k^2}y\smile x=y\smile x$ because $4k^2$ is even; since the Kronecker evaluation is additive in the first variable by [F6], $Q_M(x,y)=Q_M(y,x)$. [given, F1, F2, F6]

1.2 Nondegeneracy and finite-dimensionality: with $p=n-p=2k$ the perfectness clause of [F3] says that $H^{2k}(M;F)$ is finite dimensional and that the adjoint maps $x\mapsto\langle x\smile-, [M]\rangle$ and $y\mapsto\langle-\smile y,[M]\rangle$ into the full $F$-linear dual are isomorphisms; these maps are exactly $x\mapsto Q_M(x,-)$ and $y\mapsto Q_M(-,y)$ by [F1], the duality isomorphisms underlying the perfectness being the cap isomorphisms of [F4]; finite generation for $F=\mathbb R,\mathbb Q$ also follows from [F5] with $R=F$. [given, F1, F3, F4, F5]

1.3 Integral clause: the second clause of [F3] gives that the integral pairing descends to a unimodular pairing on $H^{2k}(M;\mathbb Z)/\operatorname{Tor}$ with both adjoints to the integer duals isomorphisms, with these groups finite free abelian. The torsion subgroup lies in the kernel: if $nx=0$ in $H^{2k}(M;\mathbb Z)$, then $n(x\smile y)=(nx)\smile y=0$ by bilinearity, so $x\smile y$ is torsion in $H^{4k}(M;\mathbb Z)$, and any group homomorphism from a torsion group to the torsion-free group $\mathbb Z$ is zero, whence $\langle x\smile y,[M]\rangle=0$ for every $y$ by [F1]. [given, F1, F3, F5, F6, algebra]

1.4 Componentwise clause: write $M=\bigsqcup_{j=1}^rM_j$ with inclusions $i_j$. By [F7] $[M]=\sum_j(i_j)_*[M_j]$, and by [F6] evaluated on this sum, $Q_M(x,y)=\sum_j\langle x\smile y,(i_j)_*[M_j]\rangle=\sum_j\langle i_j^*(x\smile y),[M_j]\rangle=\sum_j\langle i_j^*x\smile i_j^*y,[M_j]\rangle=\sum_jQ_{M_j}(i_j^*x,i_j^*y)$, using naturality of the cup product. The restriction maps $(i_j^*)_j$ identify $H^{2k}(M;F)$ with $\bigoplus_jH^{2k}(M_j;F)$: by [F8] and [F9] the group is $\operatorname{Hom}_F(\bigoplus_jH_{2k}(M_j;F),F)\cong\prod_jH^{2k}(M_j;F)$, a finite product, hence the direct sum, and naturality of the duality isomorphism in the inclusions identifies the factors with the restrictions. Under this identification the displayed identity says precisely that $Q_M$ is the orthogonal direct sum of the forms $Q_{M_j}$: classes from distinct components pair to zero and each summand carries its own form. [given, F1, F6, F7, F8, F9]

2.1 Steps 1.1-1.4 prove clauses (1)-(4); replacing $F$ by $\mathbb Q$ throughout uses the field clauses of [F3] and [F5] verbatim, while clause (3) remains the assertion about integral coefficients. For $k=0$ the pairing is $Q_M(x,y)=\sum_j\varepsilon_jx_jy_j$ on the component-wise constant classes, the signed count; for $M=\varnothing$ all groups vanish and $Q_{\varnothing}=0$, and both assertions hold trivially. [step 1.1, step 1.2, step 1.3, step 1.4, given] ∎
