---
id: ex-cg-reducible-semidefinite-forms-are-factorwise
kind: example
title: "Reducible positive semidefinite forms: factorwise treatment and the square alcove"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps: [def-cg-irreducible-affine-coxeter-type, def-cg-standard-affine-diagrams, lem-cg-diagram-products-and-invariant-form-comparison, def-cg-coxeter-diagram-components-and-finite-type, thm-cg-finite-type-positive-definite-criterion, def-cg-real-coxeter-form-and-reflection, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, def-definiteness-inertia-and-signature-data-over-the-reals, def-linear-subspace, def-linear-basis, def-linear-combination-and-span, def-dimension, def-internal-direct-sum, def-sum-of-linear-subspaces, cor-dimension-of-a-direct-sum, thm-dimension-of-a-linear-subspace, def-group, def-generated-subgroup, def-group-homomorphism, def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, def-group-isomorphism-and-automorphism, def-isometry-and-metric-embedding, lem-integer-part]
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "M. W. Davis and G. Moussong, Notes on nonpositively curved polyhedra (Turan Workshop lecture notes, 1998/1999; 65 PDF pages)"
      url: "https://people.math.osu.edu/davis.12/notes.pdf"
      locator: "Section 6.1, Example 6.1.3 (PDF pp. 33-34, lines 1535-1555) records the polygon angle-sum criterion and identifies the rectangle as the nonobtuse Euclidean polygon case. It is background only: the factorwise semidefinite result and square reflection group below are proved directly, without consuming the polygon-classification claim."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $(W,S,m)$ be a Coxeter system with $S$ finite and disconnected diagram $\Gamma$, whose connected components have nonempty vertex sets $S_1,\dots,S_k$ ([[def-cg-coxeter-diagram-components-and-finite-type]] (2)); let $W_i:=W_{S_i}$, $V=\mathbb R^S$, $V_i:=\operatorname{span}\{e_s:s\in S_i\}$, and let $B$ be the Coxeter form on $V$ ([[def-cg-real-coxeter-form-and-reflection]]). Here positive semidefinite means $B(v,v)\ge0$ for every $v$, corank means $\dim\operatorname{rad}(B)$, and indefinite means the form takes both positive and negative values. Write $B_i:=B|_{V_i\times V_i}$ and $\operatorname{rad}(B_i):=\{v\in V_i:B_i(v,w)=0\text{ for all }w\in V_i\}$. Then:

**(i) Factorwise structure.** The form is the orthogonal direct sum $B=B_1\oplus\dots\oplus B_k$ on $V=V_1\oplus\dots\oplus V_k$, and $W\cong W_1\times\dots\times W_k$ with length additive ([[lem-cg-diagram-products-and-invariant-form-comparison]] (1)-(2)). The form $B$ is positive semidefinite if and only if every $B_i$ is; it is positive definite if and only if every $B_i$ is; and $\operatorname{rad}(B)=\bigoplus_{i=1}^k\operatorname{rad}(B_i)$, so $\dim\operatorname{rad}(B)=\sum_{i=1}^k\dim\operatorname{rad}(B_i)$.

**(ii) The corank-one criterion.** The form $B$ is positive semidefinite of corank one if and only if exactly one component form is positive semidefinite of corank one and every other component form is positive definite. The unique corank-one block has connected diagram, hence affine form type by [[def-cg-irreducible-affine-coxeter-type]] (1); each positive-definite component is finite by [[thm-cg-finite-type-positive-definite-criterion]] (1) applied to its restricted Coxeter system. Thus reducible corank-one semidefinite forms consist of one affine component and finitely many finite components.

**(iii) Two computations.** For $S_1=\{s,t\}$ with $m(s,t)=\infty$, the block matrix is $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, its quadratic form is $(x-y)^2$, and it has the positive radical vector $e_s+e_t$. With an additional one-generator component $S_2=\{u\}$, the block is $(1)$ and the full form has corank one with kernel $\mathbb R(1,1,0)$. With a second two-generator component $S_2=\{u,v\}$ and $m(u,v)=\infty$, the full radical is $\mathbb R(1,1,0,0)\oplus\mathbb R(0,0,1,1)$, so the corank is two and $W\cong D_\infty\times D_\infty$, where $D_\infty$ is the infinite dihedral group $W(\tilde A_1)$ ([[def-cg-standard-affine-diagrams]] (1)).

**(iv) The square chamber.** Let $E=\mathbb R^2$ with its Euclidean metric and $Q=[0,1]^2$. Let $r_1,r_2$ be reflection in the vertical sides $x=0,1$, and $s_1,s_2$ reflection in the horizontal sides $y=0,1$. The group $G=\langle r_1,r_2,s_1,s_2\rangle\le\operatorname{Isom}(E)$ is isomorphic to $D_\infty\times D_\infty$: the two parallel pairs give the two infinite-dihedral factors, and reflections from different pairs commute and have product of order two. The resulting Coxeter diagram is $\tilde A_1\perp\tilde A_1$. The $G$-translates of the closed square are all unit grid squares; they cover $E$ and have pairwise disjoint interiors. Moreover every $G$-orbit meets $Q$ in exactly one point, so $Q$ is a strict fundamental domain in this stated sense. Its four walls form two parallel pairs, and its interior angle at each vertex is $\pi/2$.

**(v) Consequences.** The connected-matrix affine classification applies factorwise: in the positive-semidefinite corank-one case there is exactly one affine component and all remaining components are finite. Any component on which $B_i$ takes a negative value makes $B$ indefinite: each component has a vertex $s$ with $B_i(e_s,e_s)=1$. Two components with nonzero radicals force $\dim\operatorname{rad}(B)\ge2$. No connected affine-form-type condition is imposed on a reducible matrix as a whole.

## Facts & Assumptions

**Given:** A finite-rank Coxeter system $(W,S,m)$, its disconnected diagram with connected components $S_1,\dots,S_k$, the coordinate subspaces $V_i$ and Coxeter form $B$ as above. In the square calculation, $E=\mathbb R^2$ has distance $d((x,y),(x',y'))=\sqrt{(x-x')^2+(y-y')^2}$.

[F1] For disconnected $\Gamma$, $W_1,\dots,W_k$ commute, their product map is an isomorphism, length is additive, and $V=V_1\oplus\dots\oplus V_k$ is an orthogonal direct sum for $B$ ([[lem-cg-diagram-products-and-invariant-form-comparison]] (1)-(2)). This is an in-run supplier whose current proof decision is still open; its use is provisional pending that item audit.

[F2] The component vertex sets are nonempty and partition $S$, and $V_i$ is spanned by the coordinate vectors indexed by $S_i$ ([[def-cg-coxeter-diagram-components-and-finite-type]] (2), [[def-cg-real-coxeter-form-and-reflection]]). The Coxeter form has $B(e_s,e_s)=1$ and is symmetric bilinear.

[F3] The subgroup $W_{S_i}$ with generating set $S_i$ is the Coxeter system for the restricted matrix on $S_i$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)); for a Coxeter system, its group is finite exactly when its Coxeter form is positive definite ([[thm-cg-finite-type-positive-definite-criterion]] (1)). Both are current in-run suppliers; their uses remain provisional until their item decisions are reconciled.

[F4] The radical consists of vectors annihilating every vector, and corank is its dimension ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[F5] A finite set of coordinate vectors $\{e_s:s\in S_i\}$ is a basis of its coordinate span $V_i$, a subspace of a finite-dimensional space is finite-dimensional, and dimensions of a finite internal direct sum add ([[def-linear-basis]], [[def-linear-combination-and-span]], [[def-linear-subspace]], [[def-dimension]], [[thm-dimension-of-a-linear-subspace]], [[def-internal-direct-sum]], [[def-sum-of-linear-subspaces]], [[cor-dimension-of-a-direct-sum]]).

[F6] A Coxeter group is the quotient by the relators $a^2=1$ and $(ab)^m=1$ for finite labels $m$; its universal property extends a generator assignment satisfying these relators to a homomorphism ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F7] The external direct product has coordinatewise multiplication and is a group; a group isomorphism is a bijective group homomorphism; and a generated subgroup is the smallest subgroup containing its stated generators ([[def-external-direct-product-of-groups]], [[thm-external-direct-product-is-a-group]], [[def-group-isomorphism-and-automorphism]], [[def-group-homomorphism]], [[def-generated-subgroup]], [[def-group]]).

[F8] A Euclidean isometry is a bijective distance-preserving map ([[def-isometry-and-metric-embedding]]); in particular the coordinate reflections and the explicit maps computed below are checked against the Euclidean distance directly.

[F9] The standard diagram $\tilde A_1$ is the two-vertex diagram with its single edge labelled $\infty$ ([[def-cg-standard-affine-diagrams]] (1)).

[F10] Positive definiteness means $B(v,v)>0$ for every nonzero $v$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F11] Affine form type requires a connected diagram and a positive-semidefinite form of corank one ([[def-cg-irreducible-affine-coxeter-type]] (1)).

[F12] Every real $z$ has a unique integer $n$ with $n\le z<n+1$ ([[lem-integer-part]]).

## Verification

**Proof technique:** direct block calculations, followed by explicit one- and two-dimensional reflection computations.

1.1 (Definiteness is blockwise.) By [F1], if $v=\sum_i v_i$ with $v_i\in V_i$, then $B(v,v)=\sum_i B_i(v_i,v_i)$. If $B$ is positive semidefinite, taking $v$ supported in one block shows each $B_i$ is positive semidefinite; conversely, if every block is positive semidefinite, every term in the sum is nonnegative. The same one-block test proves that positive definiteness of $B$ implies positive definiteness of each $B_i$; conversely, if each $B_i$ is positive definite and $v\ne0$, at least one $v_i\ne0$, so the corresponding term is positive and all other terms are nonnegative. [F1, F10, algebra]

1.2 (Radicals and coranks add.) Bilinearity and orthogonality give $B(v,w_i)=B_i(v_i,w_i)$ for every $w_i\in V_i$. Thus $v\in\operatorname{rad}(B)$ exactly when $v_i\in\operatorname{rad}(B_i)$ for every $i$, and the direct decomposition of $V$ makes $\operatorname{rad}(B)=\bigoplus_i\operatorname{rad}(B_i)$. The vectors $e_s$ for $s\in S_i$ are linearly independent by their coordinates and span $V_i$ by definition, so $V_i$ is finite-dimensional. Each radical is a linear subspace because its annihilation conditions are linear by bilinearity, hence it is finite-dimensional by the subspace dimension theorem. Applying the finite direct-sum dimension formula to these radical subspaces gives $\dim\operatorname{rad}(B)=\sum_i\dim\operatorname{rad}(B_i)$. This also covers $k=0$: then $V=0$ and both sides are zero. [F1, F2, F4, F5, algebra]

1.3 (Group and length factorization.) The factorwise group isomorphism and length-additivity assertion are precisely [F1](1); their current supplier proof remains open for this run, so this citation is used provisionally and is recorded as an open obligation. [F1]

1.4 (The line reflection factors.) In $E=\mathbb R^2$ define $r_1(x,y)=(-x,y)$, $r_2(x,y)=(2-x,y)$, $s_1(x,y)=(x,-y)$ and $s_2(x,y)=(x,2-y)$. The identity, composites and inverses of bijective distance-preserving maps are again bijective and distance-preserving, so $\operatorname{Isom}(E)$ is a group under composition; the four displayed maps are involutive isometries by the coordinate distance formula. Put $H_x:=\langle r_1,r_2\rangle$ and $H_y:=\langle s_1,s_2\rangle$. The maps in $H_x$ are exactly $(x,y)\mapsto(\varepsilon x+2k,y)$ with $\varepsilon\in\{1,-1\}$ and $k\in\mathbb Z$: composition sends parameters $(\varepsilon,k),(\eta,l)$ to $(\varepsilon\eta,\varepsilon l+k)$, the identity has parameters $(1,0)$, and the inverse of $(\varepsilon,k)$ has parameters $(\varepsilon,-\varepsilon k)$, so these maps form a subgroup. The translation $r_2r_1$ is $x\mapsto x+2$, and its powers, followed by $r_1$, give every displayed map. By [F6], sending the two Coxeter generators $a,b$ of $W(\tilde A_1)$ to $r_1,r_2$ defines a homomorphism to $H_x$: both images are involutions, and the infinity label supplies no further relator. Every word in $a,b$ reduces by $a^2=b^2=1$ to an alternating word, hence to $(ab)^k$ or $(ab)^ka$ for some $k\in\mathbb Z$. Their images are respectively $x\mapsto x-2k$ and $x\mapsto -x-2k$, which are pairwise distinct and exhaust the displayed maps, so the homomorphism is bijective and $H_x\cong W(\tilde A_1)=D_\infty$. The same coordinate calculation gives $H_y\cong D_\infty$. [F6, F7, F8, F9, algebra]

2.1 (Corank one.) Suppose first that $B$ is positive semidefinite with $\dim\operatorname{rad}(B)=1$. Step 1.1 makes every $B_i$ positive semidefinite, and step 1.2 says the nonnegative integers $d_i:=\dim\operatorname{rad}(B_i)$ sum to one; hence exactly one $d_i$ is one and all others are zero. For any positive-semidefinite block $C$ with zero radical, if $C(v,v)=0$, then for every $w$ and every real $t$, $0\le C(v+tw,v+tw)=2tC(v,w)+t^2C(w,w)$; if $C(v,w)\ne0$, sufficiently small $t$ of the opposite sign makes the right-hand side negative, a contradiction. Therefore such $v$ is in the radical, so zero radical implies $C(v,v)>0$ for every nonzero $v$, i.e. $C$ is positive definite. Conversely, if exactly one block is positive semidefinite of radical dimension one and all others are positive definite, step 1.1 gives $B$ positive semidefinite and step 1.2 gives radical dimension one. The forms $B_i$ are symmetric bilinear and the component diagrams are connected by Fact F2. Thus the unique block is of affine form type by Fact F11; the other blocks are finite type by Fact F3. [F2, F3, F4, F10, F11, step 1.1, step 1.2, algebra]

2.2 (The two block examples.) For $m(s,t)=\infty$, the defining entries of $B$ give $B_1((x,y),(x,y))=x^2-2xy+y^2=(x-y)^2$, so it is positive semidefinite with positive radical vector $e_s+e_t$ and radical $\mathbb R(e_s+e_t)$. A one-generator block has matrix $(1)$, hence is positive definite and has zero radical; with this block the full radical is spanned by $(1,1,0)$. With two $m=\infty$ blocks, the orthogonal sum has radical spanned by $(1,1,0,0)$ and $(0,0,1,1)$ and has corank two by step 1.2. The group factorization from step 1.3 and the identification in step 1.4 give $W\cong D_\infty\times D_\infty$. [F1, F2, F4, F9, F10, step 1.2, step 1.3, step 1.4, algebra]

2.3 (The square group and its product map.) Let $G=\langle r_1,r_2,s_1,s_2\rangle\le\operatorname{Isom}(E)$. The groups $H_x$ and $H_y$ from step 1.4 commute elementwise because they act on separate coordinates, their intersection is the identity because a map acting trivially on both coordinates is the identity, and they generate $G$. The map $\mu:H_x\times H_y\to G$, $\mu(h_x,h_y)=h_xh_y$, is a homomorphism by commutation, is surjective by generation, and is injective since $h_xh_y=1$ implies $h_x=h_y^{-1}\in H_x\cap H_y=\{1\}$. Thus it is an isomorphism by [F7], and step 1.4 identifies both factors with $D_\infty$. Within either parallel pair the product is a nonzero translation by two units and has infinite order; across the pairs the reflections commute, and their product is a nonidentity involution because a vertical reflection moves some first coordinate while a horizontal reflection fixes every first coordinate. The products therefore give the disconnected diagram $\tilde A_1\perp\tilde A_1$. [F7, F8, step 1.4, algebra]

3.1 (Grid and strict fundamental domain.) The orbit of $[0,1]$ under $H_x$ is $\{[2k,2k+1],[2k-1,2k]:k\in\mathbb Z\}$, exactly the unit intervals $[m,m+1]$; [F12] applied to each real $x$ gives $m\le x<m+1$, proving coverage of $\mathbb R$, and the interval interiors are pairwise disjoint. The corresponding statement holds for $H_y$, so the $G$-translates of $Q$ are exactly all grid squares, covering $E$ with pairwise disjoint interiors. To prove the stronger orbit assertion including boundary points, apply [F12] to $x/2$ and put $n=\lfloor x/2\rfloor$, $u=x-2n$; then $n\in\mathbb Z$ and $0\le u<2$. Its orbit under $H_x$ is $\{u+2j,-u+2j:j\in\mathbb Z\}$; if $0\le u\le1$, its unique value in $[0,1]$ is $u$: among the values $u+2j$ only $j=0$ qualifies, and among $-u+2j$ the only possible additional values occur at $(u,j)=(0,0)$ or $(1,1)$ and equal that same point. If $1<u<2$, the unique value there is $2-u=-u+2$. Applying this independently to both coordinates shows every $G$-orbit meets $Q$ in exactly one point. [F12, step 1.4, step 2.3, algebra]

4.1 (The remaining geometric and factorwise conclusions.) The four side walls are $x=0$, $x=1$, $y=0$, and $y=1$; at each of the four vertices one vertical and one horizontal wall meet, so the interior angle is $\pi/2$. Step 3.1 proves the precise closed-square tiling and orbit statement in (iv), including boundary points. Clauses (i)-(ii) give the positive-semidefinite corank-one factorization in (v); if one block has a vector of negative quadratic value, the same vector in $V$ shows that $B$ is indefinite, and if two blocks have nonzero radicals, step 1.2 gives radical dimension at least two. If $k=0$, then $V=0$ and $\dim\operatorname{rad}(B)=0$, so both sides of the equivalence in (ii) are false and the empty direct sums in (i) have value zero. All arguments use finite sums and explicit constructions, so no Choice is used. [F2, step 1.2, step 3.1, algebra] ∎
