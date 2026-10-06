---
id: lem-cylinders-give-reflexivity-of-cobordism
kind: lemma
title: Cylinders give reflexivity of cobordism
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-unoriented-smooth-cobordism-of-closed-manifolds
  - def-oriented-smooth-cobordism
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - def-product-orientation
  - prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary
  - prop-boundary-orientation-is-independent-of-the-outward-vector-field
  - def-induced-boundary-orientation
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-smooth-immersion-and-embedding-for-manifolds-with-boundary
  - thm-finite-products-of-compact-spaces
  - cor-euclidean-closed-balls-and-spheres-are-compact
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-13.md"
      - "research/frontier-38-owner-30-alpha-batch-13-5a.md"
      - "research/frontier-38-owner-30-step5-hash-13-post-5a.json"
    content_sha256: "15971a24a551fbcace0cb05c0fc56ed23e4d0e75fd8949b7adb397f4f5061e59"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Lemma 1.25 proof (reflexivity), printed p.10, and Figure 5/(2.22), printed pp.18-19"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, 2016)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
      locator: "Section 8.2, inverse from $\\partial(M\\times I)$, printed p.247"
---

## Statement

For every closed smooth $n$-manifold $M$, the product $M\times[0,1]$ with its
product smooth structure and the collars
$$\theta_0:[0,1)\times M\to M\times[0,1],\quad \theta_0(s,x)=(x,s),$$
$$\theta_1:(-1,0]\times M\to M\times[0,1],\quad \theta_1(s,x)=(x,1+s),$$
is a bordism from $M$ to $M$: take
$(\partial(M\times[0,1]))_0=M\times\{0\}$ and
$(\partial(M\times[0,1]))_1=M\times\{1\}$
([[def-unoriented-smooth-cobordism-of-closed-manifolds]]).

If $(M,o)$ is oriented and $[0,1]$ carries its standard orientation, then with
the product orientation $o\otimes dt$ of $M\times[0,1]$ the induced boundary
orientation ([[def-induced-boundary-orientation]]) on $M\times\{0\}$ is
$(-1)^{n+1}o$ and that on $M\times\{1\}$ is $(-1)^n o$; consequently
$M\times[0,1]$ oriented by $(-1)^n(o\otimes dt)$ is an oriented bordism from
$(M,o)$ to $(M,o)$ ([[def-oriented-smooth-cobordism]]). Hence $M$ is cobordant
to itself in both theories.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, the product $W=M\times[0,1]$ with its product smooth structure, and the maps $\theta_0(s,x)=(x,s)$, $\theta_1(s,x)=(x,1+s)$. In the oriented case, orientations $o$ of $M$ and the standard orientation of $[0,1]$.

[F1] The boundaryless product atlas is given by [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]. For $M\times[0,1]$, use the same product charts with interval charts $t$ in the interior, $t$ near $0$, and $1-t$ near $1$; the last two take values in a half-space and their transitions extend smoothly, so [[def-smooth-immersion-and-embedding-for-manifolds-with-boundary]] supplies the usual product collars. The interval is compact by [[cor-euclidean-closed-balls-and-spheres-are-compact]] after affine rescaling, and $M\times[0,1]$ is compact by [[thm-finite-products-of-compact-spaces]].

[F2] If one factor of a product is closed, the boundary is the product of the other factor's boundary with the closed factor, and the orientation sign is $(-1)^{\dim}$ of the closed factor: for oriented $M^m$ with $\partial N=\varnothing$ one has $\partial(M\times N)=\partial M\times N$ with the product boundary orientation, while if $\partial M=\varnothing$ then $M\times\partial N$ carries $(-1)^m$ times the product orientation ([[prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary]]). On the interval with its standard orientation, $\partial[0,1]=\{1\}-\{0\}$ ([[prop-boundary-orientation-is-independent-of-the-outward-vector-field]]).

[F3] The product orientation is the tensor product of the selected rays under the ordered determinant isomorphism, and the induced boundary orientation is the outward-normal-first one ([[def-product-orientation]], [[def-induced-boundary-orientation]]).

[F4] A bordism from $M_0$ to $M_1$ is data $(W,\theta_0,\theta_1)$ with a decomposition of $\partial W$ into open and closed parts and collar embeddings onto open collar neighbourhoods; an oriented bordism additionally carries an orientation of $W$ whose induced boundary orientations are $-o_0$ on the incoming and $o_1$ on the outgoing face ([[def-unoriented-smooth-cobordism-of-closed-manifolds]], [[def-oriented-smooth-cobordism]]).

[F5] The maps $\theta_0,\theta_1$ have injective differentials and are homeomorphisms onto their images, hence are smooth embeddings ([[def-smooth-immersion-and-embedding-for-manifolds-with-boundary]], [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

## Proof

1.1 ($W$ with the two collars is a bordism.) The product charts and compactness in [F1] make $W$ a compact smooth manifold with boundary. The boundary of $W=M\times[0,1]$ is $M\times\partial[0,1]=M\times\{0\}\sqcup M\times\{1\}$ by [F2] applied with the second factor $[0,1]$; the two parts are open and closed in the boundary. The maps $\theta_0$ and $\theta_1$ are smooth embeddings by [F5]; their images are $M\times[0,1)$ and $M\times(0,1]$, which are open neighbourhoods of $M\times\{0\}$ and $M\times\{1\}$ in $W$, and $\theta_0(\{0\}\times M)=M\times\{0\}$, $\theta_1(\{0\}\times M)=M\times\{1\}$. By [F4] the data $(W,\theta_0,\theta_1)$ are a bordism from $M$ to $M$; the construction uses no choice. [F1, F2, F4, F5]

1.2 (Induced orientations of the two faces.) Suppose $M$ is oriented by $o$. Apply the second clause of [F2] to $M^m=M$, $m=n$, and $N=[0,1]$ with its standard orientation: the boundary $M\times\partial[0,1]$ carries $(-1)^n$ times the product orientation $o\otimes o_{[0,1]}$. Since $\partial[0,1]=\{1\}-\{0\}$ by [F2], the face $M\times\{1\}$ carries $(-1)^n\bigl(o\otimes(+1)\bigr)=(-1)^n o$ and the face $M\times\{0\}$ carries $(-1)^n\bigl(o\otimes(-1)\bigr)=(-1)^{n+1}o$. [F2, F3]

2.1 ($W$ oriented by $(-1)^n(o\otimes dt)$ is an oriented bordism.) Reverse the orientation of $W$ when $n$ is odd; that is, orient $W$ by $\omega:=(-1)^n(o\otimes dt)$. Reversing an orientation reverses every induced boundary orientation, so by step 1.2 the face $M\times\{0\}$ now carries $-o$ and the face $M\times\{1\}$ carries $o$. With $(\partial W)_0=M\times\{0\}$ and $(\partial W)_1=M\times\{1\}$, this is exactly the oriented bordism condition $-o$ incoming, $o$ outgoing of [F4]: $(W,\omega,\theta_0,\theta_1)$ is an oriented bordism from $(M,o)$ to $(M,o)$. For even $n$ the orientation $\omega$ is the product orientation itself. [F3, F4, step 1.2]

3.1 (Reflexivity in both theories.) Step 1.1 exhibits the cylinder as a bordism from $M$ to $M$, so $M$ is cobordant to itself in the unoriented theory; step 2.1 exhibits, for every orientation $o$ of a closed smooth $M$, an oriented bordism from $(M,o)$ to $(M,o)$, so $(M,o)$ is oriented cobordant to itself. The empty manifold is covered ($M=\varnothing$, $W=\varnothing\times[0,1]=\varnothing$). No choice principle is used anywhere: the data are the explicit collars of the product. [F4, step 1.1, step 2.1] ∎
