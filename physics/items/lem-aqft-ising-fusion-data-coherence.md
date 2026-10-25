---
id: lem-aqft-ising-fusion-data-coherence
kind: lemma
title: "Coherence of the Ising fusion data"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-noninvertible-symmetries
dependency_level: 2
deps:
  - def-aqft-noninvertible-defect-fusion
  - def-aqft-ising-fusion-data
  - def-monoidal-category
dependency_roles:
  def-aqft-noninvertible-defect-fusion: mathematical-premise
  def-aqft-ising-fusion-data: mathematical-premise
  def-monoidal-category: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Steven H. Simon, Topological Quantum, §§9.2–9.3"
      url: "https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf"
      locator: "PDF pp. 119–121 (book pagination approximately 103–105): Ising fusion rules, F-symbols, unitary basis changes and the pentagon equation."
    - title: "David Aasen, Roger S. K. Mong, and Paul Fendley, Topological Defects on the Lattice I: The Ising Model"
      url: "https://arxiv.org/pdf/1601.07185"
      locator: "§§4.1–4.3, PDF pp. 17–22, equations (4.6) and (4.19)–(4.21): lattice junction weights and Ising F-moves."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let $\mathcal I$ be the following complex-linear category. An object is a triple $X=(H_{\mathbf 1},H_\psi,H_\sigma)$ of finite-dimensional complex Hilbert spaces; a morphism $f:X\to Y$ is a triple of linear maps $f_a:H_a\to K_a$, with componentwise composition. For $a\in\{\mathbf 1,\psi,\sigma\}$, let $\underline a$ be the triple with component $\mathbb C$ in position $a$ and zero in the other two positions. A zero object is an object with a unique morphism to and from every object. A monomorphism $u:Y\to X$ is a morphism such that $u\circ f=u\circ g$ implies $f=g$ for every object $Z$ and maps $f,g:Z\to Y$; a subobject of $X$ is an isomorphism class of monomorphisms into $X$. An object is simple if it is nonzero and its only subobjects are the zero subobject and itself. The objects $\underline{\mathbf 1},\underline\psi,\underline\sigma$ are the three simple labels, and every object is a finite direct sum of them. The tensor product on these labels is

$$
\mathbf 1\otimes a=a\otimes\mathbf 1=a,\qquad \psi\otimes\psi=\mathbf 1,\qquad \psi\otimes\sigma=\sigma\otimes\psi=\sigma,\qquad \sigma\otimes\sigma=\mathbf 1\oplus\psi,
$$

and extends to arbitrary objects by orthogonal direct sums and to morphisms by tensor products of their component maps. More explicitly, if $Y=(K_{\mathbf 1},K_\psi,K_\sigma)$, then $(X\otimes Y)_c=\bigoplus_{a,b}H_a\otimes K_b\otimes V_{ab}^c$, where $V_{ab}^c=\mathbb C$ with its unit basis vector when the fusion rule allows $c$, and $V_{ab}^c=0$ otherwise. Put $N_{ab}^c=\dim_{\mathbb C}V_{ab}^c$, so $N_{ab}^c$ is $1$ for an allowed channel and $0$ otherwise. The unit object is $\underline{\mathbf 1}$. The left unitor on the unique summand $\mathbb C\otimes H_a\otimes V_{\mathbf 1a}^a$ is $z\otimes v\otimes u_{\mathbf 1a}^a\mapsto zv$; the right unitor on $H_a\otimes\mathbb C\otimes V_{a\mathbf 1}^a$ is $v\otimes z\otimes u_{a\mathbf 1}^a\mapsto zv$. Here $u_{ab}^c$ is the chosen unit fusion basis vector. These canonical unitors are specified isomorphisms, not literal equalities of Hilbert spaces; they realize the skeletal package's strict unit convention in this Hilbert-space presentation. For each allowed one-dimensional fusion space choose this unit basis vector. On simple labels the associator from $(a\otimes b)\otimes c$ to $a\otimes(b\otimes c)$ has coefficients $[F^{abc}_d]_{xy}$, where $x$ and $y$ are respectively the left and right intermediate labels. Set $\epsilon(\mathbf 1)=0$ and $\epsilon(\psi)=1$, and specify

$$
[F^{\sigma\sigma\sigma}_{\sigma}]_{xy}=\frac{1}{\sqrt2}(-1)^{\epsilon(x)\epsilon(y)},\qquad x,y\in\{\mathbf 1,\psi\},
$$

$$
[F^{\psi\sigma\psi}_{\sigma}]_{\sigma\sigma}=-1,\qquad [F^{\sigma\psi\sigma}_{\psi}]_{\sigma\sigma}=-1.
$$

Every other coefficient is $1$ if all four fusion vertices are allowed and is $0$ otherwise. For general triples $X=(H_a)$, $Y=(K_b)$, $Z=(L_c)$, the associator sends the left-channel elementary tensor

$$
(v\otimes w\otimes u_{ab}^{x})\otimes z\otimes u_{xc}^{d}\ \longmapsto\ \sum_y[F^{abc}_d]_{xy}\,v\otimes(w\otimes z\otimes u_{bc}^{y})\otimes u_{ay}^{d},
$$

where $v\in H_a$, $w\in K_b$, $z\in L_c$, and the sum ranges over allowed channels. Extend this formula complex-linearly to every orthogonal direct-sum block. It includes the ordinary reassociation of the three Hilbert-space factors and moves no multiplicity vector between different labels.

For each simple label $a$, both chosen left and right dual labels are $a$. The four evaluation and coevaluation maps for $a$ have coefficient $\lambda_a$ in the unique unit channel, where $\lambda_{\mathbf 1}=\lambda_\psi=1$ and $\lambda_\sigma=2^{1/4}$; for $a=\sigma$ the coefficient in the $\psi$ channel is zero. For a general object $X=(H_a)_{a\in\{\mathbf 1,\psi,\sigma\}}$, set $X^L=X^R=(H_a^*)_a$, where $H_a^*$ is the linear dual equipped with its dual Hilbert inner product. The evaluation maps pair $x\otimes\varphi$ or $\varphi\otimes x$ as $\lambda_a\varphi(x)$ in the $a\otimes a\to\mathbf 1$ channel, and vanish between different simple labels. For any basis $(e_{a,r})_r$ of each $H_a$ with dual basis $(e_{a,r}^*)_r$, the right coevaluation is $\sum_a\lambda_a\sum_r e_{a,r}^*\otimes e_{a,r}$ and the left coevaluation is $\sum_a\lambda_a\sum_r e_{a,r}\otimes e_{a,r}^*$, each in the $a\otimes a\to\mathbf 1$ channel.

Equip the category with the dagger $f^\dagger=(f_a^\dagger)_a$, where $f_a^\dagger$ is the Hilbert-space adjoint, and with the positive Hermitian inner products

$$
\langle f,g\rangle_{X,Y}=\sum_{a\in\{\mathbf 1,\psi,\sigma\}}d_a\,\operatorname{Tr}(f_a^\dagger g_a),\qquad d_{\mathbf 1}=d_\psi=1,\quad d_\sigma=\sqrt2,
$$

on each $\operatorname{Hom}_{\mathcal I}(X,Y)$. Composition-adjoint means $\langle g\circ f,h\rangle_{X,Z}=\langle f,g^\dagger\circ h\rangle_{X,Y}$ for $f:X\to Y$, $g:Y\to Z$, and $h:X\to Z$. Tensor compatibility means $(f\otimes g)^\dagger=f^\dagger\otimes g^\dagger$ and $\langle f\otimes g,f'\otimes g'\rangle=\langle f,f'\rangle\langle g,g'\rangle$ for parallel pairs of maps. A morphism is unitary when its dagger is its two-sided inverse. Here “unitary fusion category” means that all Hom spaces are finite-dimensional; the three $\underline a$ are exactly the simple isomorphism classes and every object is a finite direct sum of them; the component categories have kernels and cokernels and every subspace has a complement; the bilinear tensor product has unit $\mathbf 1$, its associator is a natural isomorphism satisfying the pentagon, and its specified canonical unitors satisfy the triangle; every object has the stated left and right dual maps satisfying the two snakes; and the dagger and Hom inner products are positive and composition-adjoint, the tensor product satisfies the stated compatibilities, the left evaluation is adjoint to the right coevaluation, the right evaluation is adjoint to the left coevaluation, and the associator and unitors are unitary. These data satisfy all of these conditions.

## Statement references

[Simon, *Topological Quantum*, §§9.2–9.3](https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf)

[Aasen, Mong, and Fendley, §§4.1–4.3](https://arxiv.org/pdf/1601.07185)

## Facts & Assumptions

**Given:** Work over $\mathbb C$ with the finite direct-sum category candidate, fusion rules, associator maps, canonical unitors and evaluation/coevaluation maps in the stated data package.

[F1] [[def-aqft-noninvertible-defect-fusion]]: a finite semisimple fusion category is a finite semisimple rigid monoidal category with simple unit. That supplier explicitly does not infer a unitary structure from finite semisimplicity or unitary associator matrices alone.

[F2] [[def-aqft-ising-fusion-data]]: the labels are $\mathbf 1,\psi,\sigma$ with the displayed Ising fusion rules and strict unitors; the two-channel associator is $F^{\sigma\sigma\sigma}_{\sigma}=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, the two exceptional one-channel coefficients are $F^{\psi\sigma\psi}_{\sigma}=-1$ and $F^{\sigma\psi\sigma}_{\psi}=-1$, every other allowed coefficient is $1$ and forbidden channels are zero, and the left and right $\sigma$ evaluation and coevaluation maps have coefficient $2^{1/4}$ in the unit channel and zero in the $\psi$ channel.

[F3] [[def-monoidal-category]]: the associator must satisfy the pentagon and the unitors the triangle equation for all objects.

## Proof

1.1 For triples with no unit label, the two bracketings have the same direct-sum decomposition: $\psi\psi\psi$ gives $\psi$; $\psi\psi\sigma$, $\psi\sigma\psi$, and $\sigma\psi\psi$ give $\sigma$; $\psi\sigma\sigma$, $\sigma\psi\sigma$, and $\sigma\sigma\psi$ give $\mathbf 1\oplus\psi$; and $\sigma\sigma\sigma$ gives $2\sigma$. Triples containing $\mathbf 1$ reduce by the explicitly specified canonical unitors. Thus the fusion products define the same channel bases on both sides of each associator. Each component category of finite-dimensional Hilbert spaces and linear maps has kernels and cokernels (the underlying finite-dimensional vector-space kernels and quotients with induced Hilbert structures), and each subspace has an orthogonal complement; hence the triple category is abelian and every short exact sequence splits. It has exactly three simple isomorphism classes, all Hom spaces are finite-dimensional, every object is a finite direct sum of simples, and $\operatorname{End}(\mathbf 1)=\mathbb C$, so it is finite semisimple with simple unit. [given, F1, F2, algebra]

1.2 The dagger is conjugate-linear, involutive, and contravariant for composition because it is the Hilbert adjoint on every multiplicity block; the trace pairing also gives $\langle g\circ f,h\rangle=\langle f,g^\dagger\circ h\rangle$ for composable maps by direct substitution in each block. All weights $d_a$ are positive, so the displayed Hom inner product is positive definite. The weights are multiplicative across the fusion rules: $d_{\mathbf 1}d_a=d_a$, $d_\psi^2=d_{\mathbf 1}$, $d_\psi d_\sigma=d_\sigma$, and $d_\sigma^2=d_{\mathbf 1}+d_\psi$. Thus, for morphisms $f,f':X\to X'$ and $g,g':Y\to Y'$, expanding the tensor-product blocks gives $\langle f\otimes g,f'\otimes g'\rangle=\sum_{a,b,c}d_cN_{ab}^c\operatorname{Tr}(f_a^\dagger f'_a)\operatorname{Tr}(g_b^\dagger g'_b)=\langle f,f'\rangle\langle g,g'\rangle$, with the identity extending by sesquilinearity to finite sums. The tensor product is dagger-compatible since each block is a direct sum of Kronecker products of the component maps. The associator acts by the stated $F$ matrices on fusion-channel factors and by identity maps on multiplicity factors, whereas morphisms act on multiplicity factors; hence every naturality square commutes. Its Hadamard block divided by $\sqrt2$ is unitary, as are the one-channel blocks $1$ and $-1$, so the associator is unitary; the canonical unitors are unitary because their fusion-basis factors have norm one. On the dual multiplicity spaces, the left evaluation is the adjoint of the right coevaluation and the right evaluation is the adjoint of the left coevaluation: each adjoint is the canonical dual-basis pairing map in the same ordered tensor factors, with the same positive coefficient $\lambda_a$. [F2, algebra]

1.3 In the pentagon equation, write $F^{abc}_d[x,y]=0$ whenever either intermediate fusion channel is forbidden. For each choice of simple labels $a,b,c,d,e,f,g,k,\ell\in\{\mathbf 1,\psi,\sigma\}$, the two paths are $F^{fcd}_e[g,\ell]F^{ab\ell}_e[f,k]=\sum_{h\in\{\mathbf 1,\psi,\sigma\}}F^{abc}_g[f,h]F^{ahd}_e[g,k]F^{bcd}_k[h,\ell]$. The exact checker `research/advanced-qft-supersymmetry-build-2026-10-23-batch-39-ising-pentagon-check.py` substitutes the specified $F$-rules using rational arithmetic in $\mathbb Q(\sqrt2)$ over all $3^9=19{,}683$ outer label assignments. It finds 132 assignments with a nonzero side, verifies equality in all 132, and finds the remaining 19,551 assignments are $0=0$. The checker exits successfully only at those exact totals. Thus the pentagon holds for simple labels; multilinearity extends it to finite direct sums. [F2, F3, algebra]

1.4 Every associator coefficient involving $\mathbf 1$ is $1$. On an elementary tensor $(v\otimes z\otimes u_{a\mathbf 1}^a)\otimes w\otimes u_{ab}^c$ in $(X\otimes\mathbf 1)\otimes Y$, the route through the associator and the left unitor sends it to $v\otimes zw\otimes u_{ab}^c$, while the route through the right unitor sends it to $zv\otimes w\otimes u_{ab}^c$. These are equal by the balancing relation of the complex tensor product. Such tensors span, proving the triangle for all objects. For $\psi$, each of the two snake composites has scalar $1\cdot1=1$. For $\sigma$, each composite uses the unit-channel associator coefficient $[F^{\sigma\sigma\sigma}_{\sigma}]_{\mathbf 1,\mathbf 1}=1/\sqrt2$ and the two duality coefficients $\lambda_\sigma=2^{1/4}$, giving $\lambda_\sigma^2/\sqrt2=1$; the $\psi$ channel contributes zero because its evaluation coefficient is zero. For $X=(H_a)_a$, the dual object and both coevaluations are the stated direct sums of dual-basis tensors, while evaluation pairs only equal simple labels. Consequently every off-diagonal simple-label block of either snake composite is zero, and on each multiplicity space $H_a$ the dual-basis contraction is the identity multiplied by the corresponding simple-label snake scalar just computed. Both snake identities therefore hold for arbitrary finite direct sums, not only for simple labels. [given, F2, F3, algebra]

2.1 The candidate has finite-dimensional Hom spaces, exactly three simple isomorphism classes, and every object a finite direct sum of simples; its unit is simple. Its tensor product is bilinear and its natural associator and canonical unitors satisfy the pentagon and triangle, while every object has the left and right duals and snake identities checked above. By [F1] it is a finite semisimple fusion category. Step 1.2 additionally supplies the positive dagger structure, proves tensor compatibility, and verifies unitary associators and adjoint duality maps, so the category is unitary in the explicit sense defined in the Statement. This is a purely mathematical result and makes no QFT-realization claim. [F1, step 1.1, step 1.2, step 1.3, step 1.4] ∎

## Remarks

The pentagon is the equality of the two composites of associators between the five bracketings of four tensor factors. The diagram records those paths; the proof uses the exact finite $F$-symbol check above, not the drawing.

```tikzcd
& (((a\otimes b)\otimes c)\otimes d) \arrow[rr,"\alpha_{a\otimes b,c,d}"] \arrow[dl,"\alpha_{a,b,c}\otimes 1_d"'] & & (a\otimes b)\otimes(c\otimes d) \arrow[dr,"\alpha_{a,b,c\otimes d}"] & \\
(a\otimes(b\otimes c))\otimes d \arrow[rr,"\alpha_{a,b\otimes c,d}"'] & & a\otimes((b\otimes c)\otimes d) \arrow[rr,"1_a\otimes\alpha_{b,c,d}"'] & & a\otimes(b\otimes(c\otimes d))
```
