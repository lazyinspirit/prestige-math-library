---
id: lem-gts-projective-space-bayer-restriction-stability
kind: lemma
title: Projective-space stability with Bayer and restriction bounds
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
domain: mathematics
library: physics
category: string-theory
deps:
- def-gts-bridgeland-stability-condition-with-support-property
- lem-gts-rational-elliptic-product-parameters-and-support
- lem-gts-elliptic-product-isogeny-and-restriction-order
- lem-gts-compact-adjoint-induced-stability
- lem-gts-ramified-finite-map-induced-stability
- lem-gts-symmetric-root-graph-filtration
- def-axiom-of-choice
dependency_roles:
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  lem-gts-rational-elliptic-product-parameters-and-support: mathematical-premise
  lem-gts-elliptic-product-isogeny-and-restriction-order: mathematical-premise
  lem-gts-compact-adjoint-induced-stability: mathematical-premise
  lem-gts-ramified-finite-map-induced-stability: mathematical-premise
  lem-gts-symmetric-root-graph-filtration: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Chunyi Li, A remark on stability conditions on smooth projective varieties
    url: https://arxiv.org/pdf/2601.22994v1
    locator: Section 6.1–6.4, Lemma 6.1, Proposition 6.2, Theorem 6.3 and Corollary 6.4
axiom_use: ZF + AC
dependency_level: 7
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume AC. For every $n\ge0$ and integer $N\ge1$ there is a locally finite finite-rank-support Bridgeland stability condition $\sigma=(Z,\mathcal P)$ on $D^b(\operatorname{Coh}\mathbb P^n_{\mathbb C})$ such that every skyscraper sheaf is semistable of phase $1$ and
$$\sigma\preceq\sigma\otimes\mathcal O(1),\qquad \sigma\otimes\mathcal O(N)\prec\sigma[1].$$
For slicings, $\alpha\preceq\beta$ means $\mathcal P_\alpha(t)\subseteq\mathcal P_\beta(( -\infty,t])$ for every real $t$, and $\prec$ uses $(-\infty,t)$ instead. Tensor and $[1]$ act by exact autoequivalences, so $\mathcal P_{\sigma[1]}(t)=\mathcal P_\sigma(t+1)$.

## Statement references

[[def-gts-bridgeland-stability-condition-with-support-property]]

## Facts & Assumptions

**Given:** Integers $n\ge0$, $N\ge1$, and AC. The following suppliers are local mathematical prerequisites.

[F1] [[lem-gts-rational-elliptic-product-parameters-and-support]] and [[lem-gts-elliptic-product-isogeny-and-restriction-order]] supply on $E^n$, for an elliptic curve $E$ and $L=\boxtimes_i\mathcal O_E(q)$, finite-rank-support locally finite conditions $\sigma_{a,b}$ with all skyscrapers semistable of phase $1$, invariance under factor reflections and permutations, the Bayer comparisons for every factor-point divisor, and, for each integer $K$, a choice satisfying $\sigma_{a,b}\otimes L^K\prec\sigma_{a,b}[1]$. Its order comparison is invariant under exact autoequivalences and passes to induced slicings whenever these exist.

[F2] [[lem-gts-ramified-finite-map-induced-stability]] supplies finite-flat induction: if $g:T\to S$ is finite faithfully flat between smooth projective varieties, $\mathcal Hom_S(g_*\mathcal O_T,\mathcal O_S)$ is invertible as a $g_*\mathcal O_T$-module, and $g^*g_*\mathcal P(t)\subseteq\mathcal P(( -\infty,t])$, the pair $g_\sharp\sigma$ with slicing $\{A:g^*A\in\mathcal P(t)\}$ and charge $Z\circ v\circ g^*$ is a locally finite stability condition on the finite free image lattice $\operatorname{im}(v g^*)$. [[lem-gts-compact-adjoint-induced-stability]] is its local compact-adjoint supplier. The dual-line hypothesis is proved there for monic quotient towers, which cover the double-cover and ordered-root maps used here. The hypotheses of these local suppliers are checked at each application below.

[F3] [[lem-gts-symmetric-root-graph-filtration]] supplies the finite locally free symmetric quotient $f:(\mathbb P^1)^n\to\mathbb P^n$ and a finite filtration of $\mathcal O_{T\times_{\mathbb P^n}T}$ on $T\times T$ by graph sheaves $\mathcal O_{\operatorname{Gr}w}\otimes p_2^*L_w^{-1}$, with $w\in S_n$ and each $L_w$ a product of effective pair-diagonal lines, hence of the form $\boxtimes_i\mathcal O(d_i)$ with $d_i\ge0$, on $T=(\mathbb P^1)^n$. Replacing graph convention by inverse permutations gives the same set of factors. The graph filtration is proved in the cited local supplier.

## Proof

1.1 First record two direct properties of induced slicings. For a finite flat $g$, the projection formula gives $g^*(A\otimes M)=g^*A\otimes g^*M$, so $g_\sharp(\sigma\otimes g^*M)=(g_\sharp\sigma)\otimes M$, including their charges. If $\alpha\preceq\beta$ and both induced slicings exist, pull back the finite HN filtration of a $g_\sharp\beta$-unstable object: its factors remain nonzero by faithful flatness and are the $\beta$-HN factors of its pullback. Their largest phase is at most the old phase, so $g_\sharp\alpha\preceq g_\sharp\beta$. The same proof gives the strict comparison. Transitivity and invariance under exact autoequivalences follow by applying the functor to finite HN triangles and by closure of phase half-lines under extensions. [F1, F2, construct]

1.2 Choose $E$ with origin $q$ and the double cover $p:E\to E/\{\pm1\}=\mathbb P^1$ associated to $|2q|$. Concretely one can take the smooth completion of $y^2=x(x-1)(x-\lambda)$ for $\lambda\ne0,1$, with $q$ the point at infinity. The map $x$ is finite locally free of degree $2$: the algebra is locally $\mathcal O\oplus\mathcal O t$ with $t^2=s$, and the other standard chart gives the same description at infinity. The involution is $t\mapsto-t$ and its fixed divisor $D$ has four reduced points. For $g=p\times\mathrm{id}_M:E\times M\to\mathbb P^1\times M$ the fiber product kernel fits into
$$0\to\mathcal O_{\operatorname{Gr}\tau}\otimes p_2^*\mathcal O(-D\times M)\to\mathcal O_{(E\times M)\times_{(\mathbb P^1\times M)}(E\times M)}\to\mathcal O_\Delta\to0.$$
Indeed on a quadratic chart its ring is $A[t_1,t_2]/(t_1^2-s,t_2^2-s)$; restriction to the diagonal has kernel $(t_1-t_2)$, killed by $t_1+t_2$, so it is a rank-one module on the opposite graph. On that graph its generator restricts to $-2t_2$ and hence vanishes exactly on the reduced ramification divisor. These generators transform as its ideal line $\mathcal O(-D)$ on overlaps, which proves the global exact sequence, including the ramification locus. [given, construct, algebra]

2.1 Suppose a stability condition $\rho$ on $E\times M$ is invariant under $\tau$ and satisfies $\rho\preceq\rho\otimes\mathcal O(D\times M)$. Applying the kernel sequence in step 1.2 to $A\in\mathcal P_\rho(t)$ gives a triangle
$$\tau^*A\otimes\mathcal O(-D\times M)\to g^*g_*A\to A\to.$$
Both outside terms have all phases at most $t$: this is immediate for $A$, and for the first it is the assumed comparison and $\tau$-invariance. Therefore $g^*g_*A$ also has all phases at most $t$, and F2 gives $g_\sharp\rho$ with the complete stability axioms. [F2, step 1.2, algebra]

3.1 Put $h=p^n:E^n\to T=(\mathbb P^1)^n$. Start with $\sigma_{a,b}$ from F1 and descend one factor at a time using step 2.1. At every intermediate stage the involutions in the remaining factors preserve the slicing, because they commute with the previous pullbacks and preserve the original slicing. The comparisons for the remaining factor-point divisors also descend by step 1.1: the line in question pulls back to that same factor-point line upstairs. In particular their sums give the needed comparison for the four-point fixed divisor of the next involution. Thus the process is justified at every step and gives $\rho=h_\sharp\sigma_{a,b}$ on $T$. It is $S_n$-invariant, directly from the defining condition $h^*A\in\mathcal P_{a,b}(t)$ and equivariance of $h$. For $M_i=\operatorname{pr}_i^*\mathcal O_{\mathbb P^1}(1)$, $h^*M_i=\operatorname{pr}_i^*\mathcal O_E(2q)$, so F1 and step 1.1 give $\rho\preceq\rho\otimes M_i$. Tensoring and composing gives $\rho\preceq\rho\otimes M$ for every line bundle of the form $M=\boxtimes_i\mathcal O(d_i)$, $d_i\ge0$, on $T$; this includes every graph twist supplied by F3. [F1, F2, step 1.1, step 2.1, construct]

4.1 Apply the fiber-product filtration F3 to $A\in\mathcal P_\rho(t)$. The integral transform of each graph factor is $w^*A\otimes L_w^{-1}$ (possibly replacing $w$ by $w^{-1}$ according to the graph convention). Each has all phases at most $t$, by $S_n$-invariance and the effective-line comparison in step 3.1. Finite flat base change and the projection formula identify the full transform with $f^*f_*A$: on affine charts this is the identity $B\otimes_A A\text{-}\mathrm{Res}(A')$ for the two factors of $B\otimes_AB$, so no Tor correction is suppressed. Tensoring the finite filtration derives a finite sequence of triangles even for a complex $A$, since all graph maps over the relevant projection are isomorphisms. Consequently $f^*f_*A\in\mathcal P_\rho(( -\infty,t])$. F2 gives $\sigma= f_\sharp\rho=\pi_\sharp\sigma_{a,b}$ on $\mathbb P^n$, where $\pi=f h$. [F2, F3, step 3.1, algebra]

5.1 The quotient $f$ is the map sending ordered linear factors to their product binary form; its pullback of $\mathcal O_{\mathbb P^n}(1)$ is $\boxtimes_i\mathcal O_{\mathbb P^1}(1)$. Thus $\pi^*\mathcal O(1)=L^2$. Choose the initial condition in F1 with $K=2N$. All twists of that condition still satisfy the hypotheses used in steps 2.1–4.1: tensoring by $L^k$ preserves factor reflection and permutation invariance (choose $q$ fixed by reflection), and conjugating comparisons by tensor preserves them. Step 1.1 then gives
$$\sigma\preceq\pi_\sharp(\sigma_{a,b}\otimes L^2)=\sigma\otimes\mathcal O(1),$$
$$\sigma\otimes\mathcal O(N)=\pi_\sharp(\sigma_{a,b}\otimes L^{2N})\prec\pi_\sharp(\sigma_{a,b}[1])=\sigma[1].$$
For the first comparison use the factor-point Bayer comparisons twice in each factor. [F1, step 1.1, step 3.1, step 4.1, construct]

6.1 For a closed point $z$ of $\mathbb P^n$, $\pi^*k(z)$ is a nonzero zero-dimensional coherent sheaf since $\pi$ is finite faithfully flat. Its finite composition series has skyscraper quotients on $E^n$, all of phase $1$ by F1. The phase-$1$ category is extension closed, so $\pi^*k(z)\in\mathcal P_{a,b}(1)$; hence $k(z)\in\mathcal P_\sigma(1)$. Support is on the actual image $\Lambda_{\mathbb P^n}=\operatorname{im}(v_{E^n}\pi^*)$ inside the finite free lattice upstairs, with its inherited norm and the same support inequality. Local finiteness and HN were supplied at each descent by F2; neither has been inferred from a weak stability function. If $n=0$, use the ordinary finite-length slicing on bounded complexes of finite-dimensional vector spaces with $Z=-\dim$ and nonzero sheaves of phase $1$; the twisting line is trivial, the nonstrict comparison is equality and the strict comparison to $\sigma[1]$ holds. This also covers the zero category if it occurs. [F1, F2, step 4.1, step 5.1, construct] ∎
