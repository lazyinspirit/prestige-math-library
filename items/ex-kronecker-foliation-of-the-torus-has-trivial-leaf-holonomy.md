---
id: ex-kronecker-foliation-of-the-torus-has-trivial-leaf-holonomy
kind: example
title: "The Kronecker foliation of the torus has dense leaves and trivial leaf holonomy"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps:
  - def-holonomy-representation-and-holonomy-group-of-a-leaf
  - lem-holonomy-germ-is-independent-of-the-foliation-chart-chain
  - thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints
  - thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
  - thm-convex-subsets-have-trivial-fundamental-group
  - thm-the-strong-pigeonhole-principle
  - def-two-dimensional-torus
  - def-quotient-topology
  - def-leaf-of-a-regular-foliation
  - prop-suspension-holonomy-is-the-germ-of-the-monodromy-action
  - def-suspension-foliation-of-a-group-action
  - def-circle-as-real-line-mod-integers
  - def-countable-choice
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
verification:
  precheck: pass
---

## Example

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let
$\alpha\in\mathbb R\setminus\mathbb Q$ and let $F_\alpha$ be the linear foliation
of $\mathbb T^2=\mathbb R^2/\mathbb Z^2$ ([[def-two-dimensional-torus]]) whose
leaves are the images of the lines $t\mapsto[p+t(1,\alpha)]$. Then every leaf is
dense in $\mathbb T^2$, every leaf is diffeomorphic to $\mathbb R$, and the
holonomy group of every point is trivial: for every leaf $L$ and $x\in L$ the
holonomy representation
$\rho_x:\pi_1(L,x)\to\operatorname{Diff}_x(T)$ has trivial domain
$\pi_1(L,x)=0$ ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]),
so every leaf loop has the identity holonomy germ. In particular this foliation
has dense leaves while its holonomy is as trivial as that of a product
foliation.

## Facts & Assumptions

**Given:** An irrational real number $\alpha$, the quotient torus $\mathbb T^2=\mathbb R^2/\mathbb Z^2$ with class map $x\mapsto[x]$, and the foliation $F_\alpha$ whose leaves are the images of the lines $t\mapsto[p+t(1,\alpha)]$.

[F1] $\mathbb T^2$ carries the quotient topology of $\mathbb R^2\to\mathbb T^2$, so a subset is open exactly when its preimage is open, the class map is continuous and open, and translations of $\mathbb R^2$ by vectors of $\mathbb Z^2$ induce homeomorphisms of $\mathbb T^2$; the open boxes are a basis ([[def-two-dimensional-torus]], [[def-quotient-topology]]).

[F2] If $N$ is a natural number and $N+1$ points are assigned to $N$ intervals of the form $[j/N,(j+1)/N)$, then two of them lie in one interval ([[thm-the-strong-pigeonhole-principle]], counting form with $|A|=N+1>N=|B|$).

[F3] The leaves of $F_\alpha$ are the maximal connected integral manifolds of the distribution spanned by $(1,\alpha)$, they carry a unique smooth structure making the inclusion a connected injective immersion, and a leaf is connected and closed under the flow of the vector field $(1,\alpha)$ ([[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]], [[def-leaf-of-a-regular-foliation]]).

[F4] Every nonempty convex subset of $\mathbb R$ is simply connected; in particular $\pi_1(\mathbb R,t)=0$ ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[F5] Holonomy germs are unchanged by leafwise homotopy relative to endpoints, and the holonomy representation sends the trivial class to the identity germ, its image being the holonomy group ([[thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints]], [[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]], [[def-holonomy-representation-and-holonomy-group-of-a-leaf]]).

## Verification

**Proof technique:** direct.

1.1 **The multiples of $\alpha$ are dense.** For $N\ge1$ consider the $N+1$ numbers $\{k\alpha\}$, $k=0,\dots,N$, where $\{z\}$ denotes the fractional part, and assign $k$ to the interval $[j/N,(j+1)/N)$ containing $\{k\alpha\}$. By [F2] two of them, say $k<l$, lie in the same interval, so $0<|\{l\alpha\}-\{k\alpha\}|<1/N$. Hence there is an integer $m$ with $1\le m\le N$ and a real $\beta\in(0,1/N)$ with $\beta\equiv\pm m\alpha\pmod 1$: the difference $m\alpha$ lies within $1/N$ of an integer, and $\beta$ is its positive distance to the nearest integer, nonzero because $\alpha$ is irrational. [F2, algebra]

1.2 **Every leaf is diffeomorphic to $\mathbb R$.** For a point $p\in\mathbb R^2$ consider $\varphi:\mathbb R\to\mathbb T^2$, $\varphi(t):=[p+t(1,\alpha)]$. It is continuous by [F1], its image is the leaf through $[p]$, and it is injective: if $\varphi(t)=\varphi(s)$ with $t\neq s$ then $(t-s)(1,\alpha)\in\mathbb Z^2$, so $t-s\in\mathbb Z$ and $(t-s)\alpha\in\mathbb Z$, forcing $\alpha=(t-s)^{-1}(t-s)\alpha\in\mathbb Q$, contrary to hypothesis. Near any $t_0$, the image of $\varphi$ is, in a small box of the torus adapted to the constant vector field $(1,\alpha)$, the graph of a straight line over the first coordinate; hence $\varphi$ is a local homeomorphism onto the leaf with the leaf topology and an immersion. By the uniqueness clause of [F3] the smooth structure on the leaf making the inclusion an immersion is unique, so $\varphi$ is a diffeomorphism $\mathbb R\to L$ onto the leaf with its intrinsic structure. [F1, F3, given]

2.1 **The orbit of $0$ under the flow is dense.** For any $w\in[0,1)$ and $N$ as in step 1.1, choose the natural number $j$ with $j\beta\le w<j\beta+\beta$; then $\lvert w-j\beta\rvert<\beta<1/N$. Since $j\beta\equiv\pm jm\alpha\pmod1$, there is an integer $k$ with $\lvert w-k\alpha\rvert<1/N$ in $\mathbb R/\mathbb Z$. As $N$ is arbitrary, the set $\{k\alpha:k\in\mathbb Z\}$ is dense in $\mathbb R/\mathbb Z$. [step 1.1, algebra]

2.2 **The holonomy group of every leaf is trivial.** Let $L$ be a leaf and $x\in L$. By step 1.2 and [F4], $\pi_1(L,x)\cong\pi_1(\mathbb R,0)=0$. Hence the holonomy representation $\rho_x$ is a homomorphism from the trivial group, so its image $\operatorname{Hol}(L,x)$ is the trivial subgroup of $\operatorname{Diff}_x(T)$; equivalently, the only leaf loop class is the trivial one and its germ is the identity germ, and every leaf loop — being null-homotopic — has identity holonomy germ by [F5]. [F4, F5, step 1.2]

3.1 **Every leaf is dense.** The leaf through $[0]$ contains the points $[k(1,\alpha)]=[(k,k\alpha)]$, $k\in\mathbb Z$, so for a nonempty open box $(u-\delta,u+\delta)\times(v-\varepsilon,v+\varepsilon)$ choose by step 2.1 an integer $k$ with $\lvert (v-u\alpha)-k\alpha\rvert<\varepsilon$ in $\mathbb R/\mathbb Z$; then $t:=u+k$ gives $[t(1,\alpha)]=[(u,u\alpha+k\alpha)]$, a point of the leaf through $[0]$ lying in the box, because $t\bmod 1=u\bmod1$ and $u\alpha+k\alpha$ is within $\varepsilon$ of $v$ modulo $1$. Hence the leaf through $[0]$ is dense, and since translation by the class of $p$ is a homeomorphism of $\mathbb T^2$ carrying the leaf through $[0]$ onto the leaf through $[p]$ by [F1], every leaf is dense. [F1, step 2.1]

4.1 **Conclusion.** Every leaf of $F_\alpha$ is dense by step 3.1 and diffeomorphic to $\mathbb R$ by step 1.2, and every leaf holonomy group is trivial by step 2.2. Thus dense leaves coexist with completely trivial holonomy. [step 3.1, step 1.2, step 2.2] ∎
## Remarks

- **Density of the leaves is not detected by the holonomy groups.** The product foliation of $\mathbb T^2$ by circles also has trivial leaf holonomy, yet its leaves are closed; the Kronecker foliation shows that the holonomy group of a leaf says nothing about how the leaf is embedded globally.

- **Non-closed leaf paths over a base loop can still have non-trivial germs.** Via the map $[t,\theta]\mapsto[-t,\theta-\alpha t]$, which is unchanged modulo $\mathbb Z^2$ under $(t,\theta)\mapsto(t+k,\theta+k\alpha)$ and sends horizontal paths to lines of slope $\alpha$, the foliation $F_\alpha$ is the suspension of the translation $\theta\mapsto\theta+\alpha$ of the circle $\mathbb R/\mathbb Z$ ([[def-circle-as-real-line-mod-integers]], [[def-suspension-foliation-of-a-group-action]]): its leaves are the images of $\mathbb R\times\{\theta\}$ in $(\mathbb R\times S^1)/\mathbb Z$ with $k\cdot(t,\theta)=(t+k,\theta+k\alpha)$. The base loop has a leafwise path which is not a loop in the leaf (the leaf is $\mathbb R$), and by [[prop-suspension-holonomy-is-the-germ-of-the-monodromy-action]] its holonomy germ is the translation by $-\alpha$, which is not the identity. So a trivial holonomy group of a leaf and a non-trivial holonomy germ of a leafwise path are compatible: the path must be closed in the leaf to represent an element of the holonomy group.
