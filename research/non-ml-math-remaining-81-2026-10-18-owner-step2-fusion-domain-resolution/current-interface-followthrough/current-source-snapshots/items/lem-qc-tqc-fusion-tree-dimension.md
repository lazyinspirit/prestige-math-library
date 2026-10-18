---
id: lem-qc-tqc-fusion-tree-dimension
kind: lemma
title: Fusion-tree basis and dimension recursion
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [ def-qc-tqc-fusion-tree-basis, def-qc-tqc-fusion-multiplicity-space, thm-qc-tqc-fusion-multiplicity-space-is-hilbert, def-qc-tqc-unitary-fusion-category, def-fusion-and-multifusion-category, def-simple-object, def-absolutely-simple-object ]
justified_by: []
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.1–3.5, PDF pp. 1–16: finite semisimple decompositions, orthogonal tree bases, and multiplicity spaces."
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§4.1, Definition 4.1.1, printed p. 65: fusion categories are finite semisimple rigid tensor categories."
---

## Statement

Let $\mathcal C$ be a unitary fusion category, let $\operatorname{Irr}(\mathcal C)$
be the representative set fixed in [[def-qc-tqc-fusion-tree-basis]], and take
$a_1,\ldots,a_n,d\in\operatorname{Irr}(\mathcal C)$. Fix any parenthesized
binary tree $T$ on the ordered input list. The fusion-tree vectors of
[[def-qc-tqc-fusion-tree-basis]] form an orthonormal basis of
$\operatorname{Hom}(T,d)$. Their number is

$$m_T(d)=\sum_{\substack{\ell\text{ admissible, with every internal label in }\operatorname{Irr}(\mathcal C)}}\;\prod_{v\,\mathrm{internal}}N_{\ell(v_L)\,\ell(v_R)}^{\ell(v)},$$

where the leaves carry the inputs, the root carries $d$, and each internal edge
is labeled by a representative simple charge. For the left-associated tree on
$n$ inputs this gives $m_0(d)=1$ if $d=\mathbf1$ and $0$ otherwise,
$m_1(d)=1$ if $a_1=d$ and $0$ otherwise, and

$$m_n(d)=\sum_e m_{n-1}(e)N_{e a_n}^d\qquad(n\ge2).$$

## Facts & Assumptions

**Given:** a unitary fusion category $\mathcal C$, a finite ordered list of
input representatives $a_i\in\operatorname{Irr}(\mathcal C)$, a total-charge
representative $d\in\operatorname{Irr}(\mathcal C)$, and a parenthesized
binary tree $T$.

[F1] [[def-fusion-and-multifusion-category]]: a fusion category is finite
semisimple and rigid; every object is a finite direct sum of simple objects,
and tensor product is bilinear.

[F2] [[def-qc-tqc-unitary-fusion-category]]: the dagger is compatible with
tensor product, and semisimple direct sums can be chosen orthogonally with
isometric inclusions whose orthogonal projections sum to the identity.

[F3] [[def-qc-tqc-fusion-tree-basis]]: a fusion-tree vector is obtained by
composing vertex multiplicity-basis morphisms along the chosen tree, retaining
each internal charge and vertex basis index.

[F4] [[thm-qc-tqc-fusion-multiplicity-space-is-hilbert]]: every vertex
multiplicity space has a finite-dimensional positive-definite Hermitian inner
product with its chosen orthonormal bases.

[F5] [[def-absolutely-simple-object]]: each simple charge $x$ has
$\operatorname{End}(x)=\mathbb C\operatorname{id}_x$.

[F6] [[def-simple-object]]: a simple object is nonzero and has no proper
nonzero subobject.

[F7] [[def-qc-tqc-fusion-multiplicity-space]]: the number of basis vectors at
a vertex with inputs $x,y$ and output $z$ is $N_{xy}^z$.

## Proof
**Given:** the category, inputs, output, and tree described above.

1.1 For the empty input list, the tensor is $\mathbf1$. If a nonzero map $\mathbf1\to d$ exists, its kernel is zero and its image is the nonzero subobject $d$, so it is an isomorphism by simplicity [F6]. Since all charge labels are fixed representatives, this occurs exactly when $d=\mathbf1$; then $\operatorname{Hom}(\mathbf1,d)=\mathbb C\operatorname{id}_{\mathbf1}$ by [F5], and the identity is the empty tree vector. Thus the empty tree has one basis vector precisely for $d=\mathbf1$, giving $m_0(d)$. For one input $a_1$, the same kernel/image argument shows $\operatorname{Hom}(a_1,d)=0$ unless $a_1=d$. In that case $\operatorname{End}(a_1)=\mathbb C\operatorname{id}_{a_1}$ by [F5], and the identity is the unique tree vector. This gives $m_1(d)$. [F1, F3, F5, F6, given, base]

1.2 Proceed by induction on the number of leaves. Write a nontrivial tree as $T=T_L\otimes T_R$, with left and right input sublists. By induction, for each simple representative output $e$ the left-tree vectors $t_{e,\lambda}$ form an orthonormal basis of $\operatorname{Hom}(T_L,e)$. Put $i_{e,\lambda}:=t_{e,\lambda}^\dagger:e\to T_L$. If $e=e'$, then $i_{e,\lambda}^\dagger i_{e,\lambda'}=\delta_{\lambda,\lambda'}\operatorname{id}_e$ by [F4]; if $e\ne e'$, the same composite is zero because a nonzero map between nonisomorphic simple objects is an isomorphism [F1, F6]. Thus these inclusions are orthogonal. Choose a finite semisimple decomposition of $T_L$ into simple representatives by [F1], and choose this decomposition orthogonally by [F2], so its inclusions are orthogonal and its adjoint projections sum to $\operatorname{id}_{T_L}$. For each simple representative $e$, its adjoint projections form an orthonormal family in $\operatorname{Hom}(T_L,e)$. Semisimplicity decomposes this Hom space as the direct sum of $\operatorname{Hom}(f,e)$ over the simple representative summands $f$ of $T_L$; only $f=e$ contributes, and that space has dimension one by [F5]. Thus the projections form a basis. Changing that basis to $t_{e,\lambda}$ multiplies the inclusion columns by a unitary matrix, which preserves orthogonality and the sum-of-projections identity. The same argument applies to $T_R$. Tensoring the child inclusions preserves these relations by [F2]. For each pair of child outputs $e,f$, choose an orthogonal finite semisimple decomposition of $e\otimes f$ into simple representatives, as permitted by [F1] and [F2]; the number of copies of $d$ is $N_{ef}^d$ by [F1] and [F7]. Composing the child inclusions with an orthonormal basis of each $V_{ef}^d$ gives orthogonal isometric inclusions of $d$ into $T$. Their projections sum to $\operatorname{id}_T$, because the child decompositions and each decomposition of $e\otimes f$ do. Taking adjoints therefore gives a complete orthonormal basis of $\operatorname{Hom}(T,d)$, exactly the fusion-tree vectors of [F3]. [F1, F2, F3, F4, F5, F6, F7, construct, ih]

2.1 For each pair of representative child outputs $e,f$, the construction in step 1.2 contributes $m_{T_L}(e)m_{T_R}(f)N_{ef}^d$ tree vectors. Summing over all representative $e,f$ yields the recurrence $m_T(d)=\sum_{e,f}m_{T_L}(e)m_{T_R}(f)N_{ef}^d$. Repeated expansion of this finite recurrence chooses one representative label at each internal edge and one basis index at each vertex, so it equals the displayed sum of products over all admissible labelings. [F1, F3, F4, step 1.2, algebra]

3.1 For the left-associated tree, the right subtree at the last vertex is the single input $a_n$. Its only nonzero simple output is $a_n$, with multiplicity one by [F5] and [F6]. Substituting this into the recurrence of step 2.1 gives $m_n(d)=\sum_e m_{n-1}(e)N_{e a_n}^d$ for $n\ge2$, with the empty and one-input values already established in step 1.1. Every sum is finite because the set of simple charges and each multiplicity space are finite. [F1, F4, F5, F6, step 1.1, step 2.1, step 1.2, discharge-induction: step 1.2] ∎
