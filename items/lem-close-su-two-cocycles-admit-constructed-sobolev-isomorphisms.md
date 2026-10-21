---
id: lem-close-su-two-cocycles-admit-constructed-sobolev-isomorphisms
kind: lemma
title: "Constructed Sobolev isomorphisms between close SU(2) cocycles"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-higher-order-sobolev-embedding
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-holder-inequality-for-integrals
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
sources:
  references:
    - title: "Swarnendu Sil, Topology of weak G-bundles via Coulomb gauges in critical dimensions, final step of Theorem 32, p.27"
      url: "https://arxiv.org/pdf/1909.07308"
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
---

## Statement

Assume full AC and put $s=12/5$. Let finitely many open Euclidean balls $U_i\subset\mathbb R^4$ cover a nonempty compact set $K$. Suppose $h_{ij}$ and, for each positive integer $n$, $h_{ij}^n$ are continuous $SU(2)$ transition cocycles on this same cover, with all maps in $W^{2,s}_{\mathrm{loc}}$ on their overlaps. Assume $h_{ij}^n\to h_{ij}$ strongly in $W^{2,s}_{\mathrm{loc}}$ and uniformly on compact subsets.

There exist an open neighborhood $V$ of $K$, smaller open sets $V_i\Subset U_i$ covering $V$, an integer $n_0$, and continuous maps $\sigma_i^n:V\cap V_i\to SU(2)$ in $W^{2,s}_{\mathrm{loc}}$ for every $n\ge n_0$ such that
$$h_{ij}=(\sigma_i^n)^{-1}h_{ij}^n\sigma_j^n\quad\text{on }V\cap V_i\cap V_j,\qquad \sigma_i^n\to I\text{ strongly in }W^{2,s}_{\mathrm{loc}}\text{ and uniformly on compact subsets}.$$
Thus these are explicit Sobolev isomorphisms with the fixed limiting cocycle on the smaller neighborhood.

In particular, apply this to the cocycles and connection forms $a_i^n,a_i$ constructed by [[lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover]], and to any compact $K\subset\bigcup_iU_i$. Then
$$b_i^n=(a_i^n)^{\sigma_i^n}=(\sigma_i^n)^{-1}d\sigma_i^n+(\sigma_i^n)^{-1}a_i^n\sigma_i^n$$
are connection forms with transition cocycle exactly $h_{ij}$, and $b_i^n-a_i^n\to0$ strongly in $W^{1,2}_{\mathrm{loc}}$. Consequently $b_i^n\rightharpoonup a_i$ in $W^{1,2}_{\mathrm{loc}}$, $b_i^n\to a_i$ in every $L^p_{\mathrm{loc}}$ for $1\le p<4$, and $F_{b_i^n}\rightharpoonup F_{a_i}$ in $L^2_{\mathrm{loc}}$. Euclidean anti-self-duality is preserved if present. No Coulomb or normal boundary condition for the transferred forms $b_i^n$ is asserted.

## Statement references

[[lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover|Constructed limit cocycle and weak connection]]

[Sil, Theorem 32, final paragraph](https://arxiv.org/pdf/1909.07308)

## Facts & Assumptions

[F1] Smooth bumps equal to one on a smaller concentric ball and supported in a larger ball exist ([[lem-smooth-bump-between-concentric-euclidean-balls]]). Compactness of $K$ supplies finite subcovers.

[F2] On smaller balls in four dimensions, $W^{2,s}$ embeds continuously into $C^0$ and its first derivatives belong to $L^6$, for $s=12/5$. The latter follows by applying the order-one case of the proved higher-order embedding to each first derivative. The same supplier gives $W^{1,2}\hookrightarrow L^4$. Balls have bounded Sobolev extension operators ([[thm-higher-order-sobolev-embedding]], [[thm-extension-theorem-for-bounded-smooth-domains]]).

[F3] Holder gives the product bounds below. Smooth approximation gives the weak product rule and finite-order composition rules proved by approximation below ([[thm-holder-inequality-for-integrals]], [[thm-meyers-serrin-density-on-an-arbitrary-open-set]]).

[F4] The preceding [[lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover]] constructs the exact transition cocycles, their strong $W^{2,s}_{\mathrm{loc}}$ and uniform-on-compact convergence, bounded local $W^{1,2}$ forms $a_i^n$, strong $L^p$ convergence for $p<4$, weak $L^2$ curvature convergence, and all transition equations. Its gauges justify the connection composition and curvature covariance identities.

[F5] Full AC is inherited from the analytic suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** The compact set, fixed ball cover, transition cocycles and convergence in the statement.

1.1 **Finite smooth weights and smaller domains.** For every $x\in K$ choose $i$ and a ball $B(x,2r)\Subset U_i$. The balls $B(x,r)$ cover $K$; select a finite subcover and use [F1] to choose nonnegative smooth bumps equal to one on each selected smaller ball and supported in its doubled ball. Sum bumps assigned to index $i$ to obtain $\beta_i\in C_c^\infty(U_i)$, allowing $\beta_i=0$. Then $H=\sum_i\beta_i$ is positive on $K$. Set $V=\{H>0\}$ and $\phi_i=\beta_i/H$ there; these are smooth nonnegative weights summing to one. Choose a concentric smaller ball $V_i\Subset U_i$ containing $\operatorname{supp}\beta_i$; if this support is empty, any smaller ball suffices. Every point of $V$ lies in some $\operatorname{supp}\beta_i\subset V_i$, so the $V_i$ cover $V$. For every $i,j$, the set $C_{ij}=\overline V_i\cap\operatorname{supp}\beta_j$ is compactly contained in $U_i\cap U_j$ whenever nonempty. [F1, given, choose, construct]

2.1 **The explicit quaternionic average.** Uniform convergence on the finitely many $C_{ij}$ gives an integer $n_0$ for which $|h_{ij}^n-h_{ij}|<1/2$ on each $C_{ij}$ whenever $n\ge n_0$, using the Frobenius norm. On $V\cap V_i$ define $S_i^n=\sum_j\phi_j h_{ij}^nh_{ji}$; a summand is extended by zero where $x\notin U_j$. This extension is legitimate locally because $\beta_j$ has compact support inside $U_j$ and $H>0$ on $V$. Since $h_{ij}h_{ji}=I$ and right multiplication by a unitary matrix preserves the Frobenius norm, $|S_i^n-I|\le\sum_j\phi_j|h_{ij}^n-h_{ij}|<1/2$. Every $SU(2)$ matrix has the form $\left(\begin{smallmatrix}\alpha&\beta\\-\overline\beta&\overline\alpha\end{smallmatrix}\right)$. The real vector space of matrices of this form is closed under products, adjoints and real sums, and for any such matrix $S$, direct multiplication gives $S^*S=(|\alpha|^2+|\beta|^2)I$ and $\det S=|\alpha|^2+|\beta|^2$. Thus $S_i^n$ lies in this space and is nonzero. Put $\lambda_i^n=(\tfrac12\operatorname{tr}((S_i^n)^*S_i^n))^{1/2}>0$ and $\sigma_i^n=S_i^n/\lambda_i^n$. These maps are continuous and take values in $SU(2)$. Moreover $\lambda_i^n\ge1-|S_i^n-I|/\sqrt2>1/2$. [step 1.1, given, choose, construct, algebra]

3.1 **The exact intertwining identity.** On $V\cap V_i\cap V_k$, use both cocycle identities to obtain $h_{ik}^nS_k^nh_{ki}=\sum_j\phi_jh_{ik}^nh_{kj}^nh_{jk}h_{ki}=\sum_j\phi_jh_{ij}^nh_{ji}=S_i^n$. All nonzero summands are evaluated inside $U_j$, so the identities apply there; terms with zero weight vanish. Unitarity implies $\lambda_i^n=\lambda_k^n$, since left and right multiplication preserve the Frobenius norm. Dividing yields $\sigma_i^n=h_{ik}^n\sigma_k^nh_{ki}$, or equivalently $h_{ik}=(\sigma_i^n)^{-1}h_{ik}^n\sigma_k^n$. This holds pointwise on the whole smaller overlap. [step 1.1, step 2.1, algebra]

3.2 **Sobolev regularity and convergence of the isomorphisms.** On every ball compactly contained in an overlap, [F2]–[F3] give continuity of multiplication in $W^{2,s}$: undifferentiated factors use $L^\infty$, and second-derivative cross terms use $L^6\cdot L^6\subset L^3\subset L^s$ on bounded sets. Multiplication by a fixed smooth cutoff preserves this class. The compact supports of the $\beta_j$ allow finitely many such smaller balls to control every compact subset of $V\cap V_i$, including across the zero extensions in step 2.1. Therefore $S_i^n\in W^{2,s}_{\mathrm{loc}}$ and $S_i^n\to\sum_j\phi_jh_{ij}h_{ji}=I$ strongly in that space and uniformly on compact subsets. The normalization $S\mapsto S/(\tfrac12\operatorname{tr}S^*S)^{1/2}$ is smooth away from zero with bounded derivatives through order three on the bounded annulus in step 2.1. Smooth approximation converges uniformly by [F2], so approximants eventually lie in a slightly larger such annulus. The classical first and second derivative formulas for this smooth map pass to the Sobolev limit: first derivatives are bounded-coefficient multiples of $DS$, and second derivatives are bounded-coefficient multiples of $D^2S$ and products $DS\,DS$. Their convergence follows from uniform coefficient convergence, strong $D^2S$ convergence in $L^s$ and strong $DS$ convergence in $L^6$. Hence $\sigma_i^n\in W^{2,s}_{\mathrm{loc}}$ and $\sigma_i^n\to I$ strongly there and uniformly on compact subsets. [F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 **Transfer of the connection to the fixed cocycle.** In the situation of [F4], restrict to the smaller neighborhood and define $b_i^n=(a_i^n)^{\sigma_i^n}$. The regularity in step 3.2 makes this a $W^{1,2}_{\mathrm{loc}}$ form, as the estimates below verify. Gauge composition and step 3.1 give $(b_i^n)^{h_{ij}}=(a_i^n)^{\sigma_i^nh_{ij}}=(a_i^n)^{h_{ij}^n\sigma_j^n}=(a_j^n)^{\sigma_j^n}=b_j^n$. These weak identities follow either by expanding matrix products or by the smooth approximation and product limits of [F3]. Thus every transferred connection uses exactly the fixed limiting transition cocycle. [F3, F4, step 3.1, step 3.2, construct, algebra]

5.1 **Preservation of convergence and ASD.** Work on any smaller ball compactly contained in $V\cap V_i$. Step 3.2 gives $\sigma_i^n-I\to0$ in $L^\infty$, $d\sigma_i^n\to0$ in $L^6$, and $D^2\sigma_i^n\to0$ in $L^s$, hence also in $L^2$. The derivative of $(\sigma_i^n)^{-1}d\sigma_i^n$ has terms bounded by $|D^2\sigma_i^n|+|d\sigma_i^n|^2$, which tend to zero in $L^2$ because $L^6\cdot L^6\subset L^3\subset L^2$. This gauge term tends to zero in $W^{1,2}$. Write the remaining difference as $(\sigma^{-1}-I)a_i^n\sigma+a_i^n(\sigma-I)$, with $\sigma=\sigma_i^n$. Its undifferentiated terms tend to zero in $L^2$. Terms differentiated on $a_i^n$ tend to zero by the uniform matrix difference and bounded $Da_i^n$ in $L^2$; terms differentiated on $\sigma$ tend to zero by bounded $a_i^n$ in $L^4$ and $d\sigma\to0$ in $L^4$, following from its $L^6$ convergence on this bounded ball. Thus $b_i^n-a_i^n\to0$ in $W^{1,2}$ locally. This and [F4] give the stated weak $W^{1,2}$ and strong $L^p$, $p<4$, limits, using [F2] for the difference. Finally $F_{b_i^n}=\sigma^{-1}F_{a_i^n}\sigma$ follows by the same product identities; its difference from $F_{a_i^n}$ tends to zero in $L^2$ by uniform $\sigma\to I$ and the bounded curvature norm. Weak curvature convergence and preservation of the Euclidean ASD projection follow. Full AC is inherited through [F1]–[F5]. [F1, F2, F3, F4, F5, step 3.1, step 3.2, step 4.1, algebra] ∎

## Source notes

Sil's complete Theorem 32 proof, PDF pp.24–27, was read. Its final paragraph invokes a separate bundle-isomorphism result. The present $SU(2)$ proof supplies the needed isomorphisms directly, by finite quaternionic averaging and scalar normalization; it does not use that quoted result. Strong transition convergence comes from the preceding locally proved compactness lemma. The compact set and shrinking are explicit, and the transferred forms need not remain Coulomb. No general compact-group polar-decomposition theorem, global singular gauge, curved-metric ASD regularity, transversality or gluing theorem is asserted.
