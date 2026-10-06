---
id: lem-boundary-restriction-image-is-lagrangian
kind: lemma
title: "The restriction image on a cobordism boundary is Lagrangian"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 7
deps:
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - def-axiom-of-choice
  - def-annihilators-under-the-evaluation-pairing
  - def-cap-product-with-cohomology-first
  - def-kronecker-evaluation-pairing
  - def-middle-dimensional-intersection-form
  - def-relative-cap-product
  - def-relative-fundamental-class-and-boundary-orientation
  - def-singular-cohomology-with-coefficients
  - def-singular-cup-product-on-cochains
  - lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice
  - lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - thm-cap-product-boundary-identity
  - thm-cup-product-leibniz-identity
  - thm-double-annihilator-and-annihilator-dimension
  - thm-long-exact-sequence-of-a-pair-in-singular-cohomology
  - thm-poincare-lefschetz-duality
  - thm-rank-nullity
  - thm-singular-cohomology-is-graded-commutative
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lemma 11.30 and Theorem 11.31, printed pp. 96-97: the boundary middle-form has a half-dimensional isotropic subspace"
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "chapter 19, Lemma 19.3(3), original pp. 224-225: signature vanishes on oriented boundaries"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $W$ be a compact oriented smooth manifold of dimension $4k+1$,
$k\ge0$, with boundary $M=\partial W$ carrying the induced orientation and
inclusion $i:M\hookrightarrow W$. Let
$K=\operatorname{im}\bigl(i^*:H^{2k}(W;\mathbb R)\to H^{2k}(M;\mathbb R)\bigr)$
and let $Q_M$ be the middle-dimensional intersection form of
[[def-middle-dimensional-intersection-form]]. Then $K=K^{\perp_{Q_M}}$. In
particular $K$ is a totally isotropic subspace of dimension one half of
$\dim H^{2k}(M;\mathbb R)$, hence is Lagrangian.

## Facts & Assumptions

**Given:** AC; a compact oriented smooth $(4k+1)$-manifold $W$ with boundary $M=\partial W$, inclusion $i$, the induced boundary orientation, and the image $K=\operatorname{im}i^*$ in $V:=H^{2k}(M;\mathbb R)$.

[F1] $Q_M(x,y)=\langle x\smile y,[M]\rangle$ for $x,y\in H^{2k}(M;\mathbb R)$, and $K^\perp=\{x\in V:Q_M(k,x)=0\text{ for all }k\in K\}$ ([[def-middle-dimensional-intersection-form]]).

[F2] The long exact cohomology sequence of the pair is $\cdots\to H^{2k}(W,M;\mathbb R)\xrightarrow{j}H^{2k}(W;\mathbb R)\xrightarrow{i^*}H^{2k}(M;\mathbb R)\xrightarrow{\delta}H^{2k+1}(W,M;\mathbb R)\to\cdots$, exact at every term; the connector sends a cocycle class $[x]$ to $[\delta\widetilde x]$ for any cochain extension $\widetilde x$ of a representative ([[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]).

[F3] The cup product on cochains satisfies the Leibniz identity $\delta(\varphi\smile\psi)=\delta\varphi\smile\psi+(-1)^{|\varphi|}\varphi\smile\delta\psi$ and restricts naturally to subspaces ([[thm-cup-product-leibniz-identity]], [[def-singular-cup-product-on-cochains]]).

[F4] The singular coboundary is defined on chains by $(\delta\varphi)(\sigma)=\varphi(\partial\sigma)$, so $(\delta\varphi)(z)=\varphi(\partial z)$ for every finite chain $z$; the Kronecker pairings on $W$ and on $M$ evaluate a cocycle class on a cycle class by evaluating representatives and are well defined and independent of the chosen representatives ([[def-singular-cohomology-with-coefficients]], [[def-kronecker-evaluation-pairing]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[F5] The relative fundamental class satisfies $\partial[W,M]=[M]\in H_{4k}(M;\mathbb R)$ ([[def-relative-fundamental-class-and-boundary-orientation]]).

[F6] Relative cap and evaluation: for a relative $p$-cocycle $\alpha\in Z^{p}(W,M;\mathbb R)$, a relative $n$-cycle $z$ with $\partial z\in C_{n-1}(M)$, and an absolute $(n-p)$-cochain $\xi$, the front-evaluation/back-face formulas of the cohomology-first convention give the cochain identity $(\alpha\smile\xi)(z)=\xi(\alpha\cap z)$ ([[def-relative-cap-product]], [[def-singular-cup-product-on-cochains]]). By the boundary identity $\partial(\alpha\cap z)=(-1)^{p}(\alpha\cap\partial z-\delta\alpha\cap z)$ ([[thm-cap-product-boundary-identity]]) the chain $\alpha\cap z$ is a cycle: the first term vanishes because $\alpha$ vanishes on chains in $M$, the second because $\delta\alpha=0$ as a relative cocycle. Its class is the relative cap product $\alpha\cap[W,M]$, which is the Poincaré–Lefschetz map $T_p(\alpha)$ of [[thm-poincare-lefschetz-duality]].

[F7] Poincare-Lefschetz duality gives isomorphisms $T_p:H^p(W,M;\mathbb R)\to H_{n-p}(W;\mathbb R)$, $a\mapsto a\cap[W,M]$, for every $p$, in particular an isomorphism $T_{2k+1}$ out of $H^{2k+1}(W,M;\mathbb R)$; their representative independence and naturality are as stated there ([[thm-poincare-lefschetz-duality]]).

[F8] $Q_M$ is symmetric, nondegenerate and finite-dimensional, with both adjoints $x\mapsto Q_M(x,-)$, $y\mapsto Q_M(-,y)$ isomorphisms onto the full dual; the Kronecker pairing over the field $\mathbb R$ satisfies $H^{2k}(W;\mathbb R)\cong\operatorname{Hom}_{\mathbb R}(H_{2k}(W;\mathbb R),\mathbb R)$, so a class $z\in H_{2k}(W;\mathbb R)$ with $\langle a,z\rangle=0$ for all $a$ is zero ([[lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[F9] For a finite-dimensional vector space and a subspace $U$, the annihilator $U^\circ=\{f:f|_U=0\}$ has $\dim U^\circ=\dim V-\dim U$; a projection onto a finite-dimensional subspace exists without choice, and rank-nullity computes the dimension of a kernel ([[thm-double-annihilator-and-annihilator-dimension]], [[def-annihilators-under-the-evaluation-pairing]], [[lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice]], [[thm-rank-nullity]]).

[F10] Cup product is graded commutative, so $u\smile v=v\smile u$ whenever the degrees are even ([[thm-singular-cohomology-is-graded-commutative]]).

## Proof

**Proof technique:** direct; identify the orthogonal complement with the kernel of the cohomology connector by a cochain evaluation computation, then count dimensions.

1.1 Exactness at $H^{2k}(M;\mathbb R)$ in [F2] reads $\operatorname{im}i^*=\ker\delta$, so $K=\ker\delta$; in particular $K\le V:=H^{2k}(M;\mathbb R)$ is a linear subspace and $x\in K$ holds exactly when $\delta x=0$. [given, F1, F2]

1.2 Pairing identity: for $x\in H^{2k}(M;\mathbb R)$ and $a\in H^{2k}(W;\mathbb R)$, $Q_M(i^*a,x)=\langle a,T_{2k+1}(\delta x)\rangle$. Indeed choose cocycle representatives $X\in Z^{2k}(M;\mathbb R)$ of $x$ and $A\in Z^{2k}(W;\mathbb R)$ of $a$, an extension $\widetilde X\in C^{2k}(W;\mathbb R)$ of $X$, and a relative cycle $z$ with $[z]=[W,M]$ and $[\partial z]=[M]$, possible by [F5]. Since $X$ is a cocycle, $\delta\widetilde X$ vanishes on chains in $M$, and $\delta x$ is the class of the relative cocycle $\delta\widetilde X$ by [F2]; hence by [F6] the chain $\delta\widetilde X\cap z$ is a cycle representing $T_{2k+1}(\delta x)=\delta x\cap[W,M]$. Then $\langle a,T_{2k+1}(\delta x)\rangle=A(\delta\widetilde X\cap z)=(\delta\widetilde X\smile A)(z)=(\delta(\widetilde X\smile A))(z)=(\widetilde X\smile A)(\partial z)=(X\smile i^*A)(\partial z)$, where the equalities use, in order, the absolute Kronecker pairing on $W$ [F4], the cochain identity of [F6], the Leibniz rule [F3] with $\delta A=0$, the definition of the coboundary [F4], and the fact that $\widetilde X$ restricts to $X$ on $M$ while $A$ restricts to $i^*A$; since $\partial z$ represents $[M]$ and $X\smile i^*A$ is a cocycle representing $x\smile i^*a$ on $M$, the last value is $\langle x\smile i^*a,[M]\rangle$ by [F4]. Graded commutativity [F10] (degrees $2k,2k$) and [F1] give $\langle x\smile i^*a,[M]\rangle=\langle i^*a\smile x,[M]\rangle=Q_M(i^*a,x)$, as asserted. [given, F1, F2, F3, F4, F5, F6, F10]

1.3 Tools for the two inclusions: by [F8], $V$ is finite-dimensional and the adjoint map $\Phi:V\to V^*$, $\Phi(x)=Q_M(x,-)$, is an isomorphism; by [F8], a homology class $z\in H_{2k}(W;\mathbb R)$ that pairs to zero with every cohomology class is zero; and by [F7] the map $T_{2k+1}$ is injective. [given, F7, F8]

2.1 Orthogonal complement equals the kernel: for $x\in V$, $x\in K^\perp$ holds exactly when $Q_M(i^*a,x)=0$ for all $a\in H^{2k}(W;\mathbb R)$; by step 1.2 this is equivalent to $\langle a,T_{2k+1}(\delta x)\rangle=0$ for all such $a$, hence by step 1.3 to $T_{2k+1}(\delta x)=0$, hence to $\delta x=0$ by the injectivity in step 1.3, and hence to $x\in K$ by step 1.1. Therefore $K^\perp=K$. [step 1.1, step 1.2, step 1.3, F8]

3.1 Dimension and isotropy: by step 2.1, $\Phi(K^\perp)=K^\circ$ is the annihilator of $K$ in $V^*$, so $\dim K=\dim K^\perp=\dim K^\circ=\dim V-\dim K$ by the annihilator dimension formula [F9]; hence $2\dim K=\dim V=\dim H^{2k}(M;\mathbb R)$. Since $K=K^\perp$, $Q_M(x,y)=0$ for all $x,y\in K$, so $K$ is totally isotropic; a totally isotropic subspace of half the dimension of a nondegenerate finite-dimensional form is Lagrangian. [step 2.1, F1, F9]

4.1 If $M=\varnothing$ (in particular if $W$ is empty), $V=H^{2k}(M;\mathbb R)=0$, so both $K$ and $K^\perp$ are zero, so the identity and the dimension count hold trivially; for $k=0$ the formula counts the oriented boundary points and gives $K=K^\perp$ of dimension $\tfrac12\dim H^0(M;\mathbb R)$. Thus steps 2.1 and 3.1 prove $K=K^{\perp_{Q_M}}$ and the Lagrangian property in all cases, AC being used only through the inherited duality and field-dual suppliers. [step 2.1, step 3.1, given] ∎
