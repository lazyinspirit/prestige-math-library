---
id: lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics
kind: lemma
title: "Baire diagonal passage from finite regularity to smooth metrics"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-nowhere-dense-meagre-and-residual-subsets, thm-baire-category-for-complete-metric-spaces, thm-sard-smale-residual-regular-values-for-fredholm-maps, lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, cor-finite-dimensional-subspaces-are-complemented, thm-bounded-inverse-theorem, thm-implicit-function-theorem-for-banach-spaces]
proof_strategy: direct
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex, Lemma 2.25"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical accept review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed
smooth finite-dimensional manifold and $f:M\to\mathbb R$ a fixed smooth Morse
function. For a fixed pair $p,q$ of its critical points, the smooth metrics for
which its stable and unstable manifolds are transverse form a residual subset
of the standard $C^\infty$ metric space.

## Facts & Assumptions

**Given:** The Axiom of Choice and $M,f,p,q$ as in the statement. Write $\mathcal G^\infty$ for the space of all smooth metrics. Finite metric regularity may be chosen arbitrarily high; the required universal projection and its regular-value interpretation are constructed below, not assumed.

[F1] For a reference smooth metric and disjoint closed critical neighbourhoods, let $K$ be the closed Banach subspace of $C^h$ symmetric two-tensors vanishing on these neighbourhoods. Positive metrics in the corresponding affine space form an open subset. Trajectory variations are $E=C^1_0(\mathbb R,\gamma^*TM)$ and equation values are $F=C^0_0(\mathbb R,\gamma^*TM)$, with the norms in [F4]. No universal surjectivity assertion is included in this fact.

[F2] Sard--Smale makes its regular values residual at every sufficiently high finite regularity ([[thm-sard-smale-residual-regular-values-for-fredholm-maps]]).

[F3] A complete metric space satisfies the Baire conclusion ([[thm-baire-category-for-complete-metric-spaces]]).

[F4] The fixed-metric trajectory operator $D_\gamma:E\to F$ is bounded Fredholm of index $\lambda(p)-\lambda(q)$ and is onto exactly when the stable and unstable manifolds are transverse ([[lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator]]).

[F5] Continuous finite-dimensional linear matrix ODEs have unique solutions on every compact interval ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]). Uniqueness patches these solutions on nested compact intervals.

[F6] Finite-dimensional subspaces of normed spaces have bounded projections ([[cor-finite-dimensional-subspaces-are-complemented]]).

[F7] A bounded bijection between Banach spaces has bounded inverse under DC ([[thm-bounded-inverse-theorem]]). The assumed AC supplies DC: choose one successor for each point of an entire relation and iterate that function from the specified starting point.

[F8] The Banach-space implicit-function theorem applies to a $C^k$ map whose partial derivative in one Banach factor is a bounded linear isomorphism, under AC ([[thm-implicit-function-theorem-for-banach-spaces]]).




## Proof

**Proof technique:** direct.

1.1 First take distinct $p,q$ and a connecting trajectory $\gamma$. Use a fixed smooth background exponential map to chart nearby curves by small elements of $E$; these curves have the same limits at both ends. Parallel transport back to $\gamma^*TM$ trivializes the equation bundle. The section is $\dot\gamma+\operatorname{grad}_g f(\gamma)$. In these charts it is at least $C^{h-1}$ for $h\ge2$: derivatives of the finite-dimensional exponential and gradient maps are uniformly bounded on the relevant compact coordinate sets, so Taylor remainder estimates hold uniformly in the supremum norms. Variations and their first derivatives tend to zero at the ends, and metric variations vanish near the limiting critical points, so all these derivatives take values in $F$. Its derivative at a zero is $L(k,\xi)=Ak+D_\gamma\xi$, where $Ak=-g^{-1}k(\operatorname{grad}_g f,\cdot)$ along $\gamma$, by differentiating the inverse metric. [F1, F4, given, algebra]

1.2 If $p=q$, the stable and unstable tangent spaces at $p$ are complementary eigenspaces of the hyperbolic gradient linearization; strict descent excludes any other intersection. If $p\ne q$ and $f(p)\leq f(q)$, strict descent makes the intersection empty. These cases hold for every metric. Hence suppose $f(p)>f(q)$. [given, algebra]

1.3 Near each metric $g_*$ choose compact local unstable and stable disks at $p,q$, with parametrizations depending continuously in $C^1$ on $g$ in a $C^2$ neighbourhood $U$. Here is the parameter dependence needed: in coordinates near either zero fix its hyperbolic linearization $L$ at $g_*$ and write $X_g(x)=Lx+R_g(x)$. After a cutoff on a sufficiently small ball, $R_g$ has uniformly small Lipschitz constant. For prescribed small stable coordinate $z$, the integral equation $$ x(t)=e^{tL}z+\int_0^t e^{(t-s)L}P_sR_g(x(s))\,ds-\int_t^\infty e^{(t-s)L}P_uR_g(x(s))\,ds $$ is a uniform contraction on a small exponentially weighted space of paths on $[0,\infty)$. Its fixed point and its derivative with respect to $z$ depend continuously on $g$; the derivative solves a linear contraction equation. Evaluation at zero gives the stable disk. Reversing time gives the unstable disk. Restrict to smaller closed parameter balls so both disks extend beyond their boundaries. Finite-time flows also depend continuously in $C^1$ on $g$. [given, algebra]

2.1 Write $D=D_\gamma$. Its range $R$ is closed and $Q=F/R$ is finite-dimensional by [F4]. Suppose the image of $A$ in $Q$ were proper. A nonzero linear functional on $Q$ vanishing on that image would lift to a nonzero bounded functional $\ell$ on $F$ with $\ell D=0$ and $\ell A=0$. Trivialize along $\gamma$ by a parallel orthonormal frame, so $D\xi=\xi'+H(t)\xi$ with continuous matrix $H$. By [F5] obtain $\Phi'=-H\Phi$, $\Phi(0)=I$, on $\mathbb R$; solving $\Psi'=\Psi H$, $\Psi(0)=I$, shows $\Psi\Phi=I$ and hence invertibility. No global bound on $\Phi$ is required. [F4, F5, step 1.1, algebra]

2.2 For integers $j,k\geq0$, let $T_{jk}\subset U$ require transversality of the disk maps $\Phi_j^g D^u_g(p)$ and $\Phi_{-k}^g D^s_g(q)$ at every coincidence of points in their compact parameter domains. Tangent spaces here are those of the extended disks, including at boundary points. This is an open condition: if failing metrics converged in $C^2$ to a metric satisfying it, compactness would give convergent coincidence parameters, and the closed rank-deficiency condition would contradict transversality at their limit. Every point of a global stable or unstable manifold eventually flows into the interior of the corresponding local disk. Thus all $T_{jk}$ together are equivalent to the desired global transversality on $U$. [step 1.3, algebra]

3.1 For a continuous compactly supported vector function $\psi$ put $T(\psi)=\ell(\Phi\psi)$. If $\int\psi=0$, its primitive $v(t)=\int_{-\infty}^t\psi(s)\,ds$ is compactly supported and $C^1$, and $D(\Phi v)=\Phi\psi$. Thus $T(\psi)=0$. Fix a continuous compactly supported scalar $\rho$ with integral one. Subtracting $\rho\int\psi$ gives $T(\psi)=c\cdot\int\psi$ for a fixed vector $c$. Consequently, for every compactly supported continuous $w$, $$\ell(w)=\int_{\mathbb R}a(t)\cdot w(t)\,dt,\qquad a(t)=\Phi(t)^{-T}c.$$ Compactly supported functions are dense in $C^0_0$ by cutoff, so $c\ne0$, since $\ell\ne0$. Hence $a(t)$ is continuous and nowhere zero. All products with $\Phi$ used here have compact support. [step 2.1, algebra]

4.1 Strict descent of $f\circ\gamma$ makes the connecting orbit injective and gives a point $x=\gamma(t_0)$ outside the fixed critical neighbourhoods with $v=\operatorname{grad}_g f(x)\ne0$. A small neighbourhood of $x$ can meet the orbit only in a short compact time interval: restrict first to a sufficiently small $f$-level slab about $f(x)$ and then to a coordinate ball. At $x$ a symmetric endomorphism can send $v$ to any prescribed vector $b$; explicitly $$B=\frac{b\otimes v+v\otimes b}{|v|^2}-\frac{\langle b,v\rangle}{|v|^4}v\otimes v,\qquad Bv=b.$$ Choose a symmetric two-tensor $k_0$ at $x$ such that its metric variation $Ak_0$ has positive pairing with $a(t_0)$, and extend its coordinate components smoothly nearby. Continuity preserves positive pairing along the short orbit segment after shrinking the ball. Multiply by a nonnegative smooth bump supported there and positive at $x$. The resulting $k\in K$ has $Ak$ compactly supported along the orbit, with nonnegative pairing everywhere and positive pairing on an interval. Step 3.1 gives $\ell(Ak)>0$, a contradiction. Thus $A$ maps onto $Q$, and $L$ maps onto $F$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 Choose finitely many tensors whose $A$-images form a basis of $Q$, giving a bounded linear lift $J:Q\to K$ with $\pi_QAJ=I_Q$. By [F6] write $E=\ker D\oplus E_1$ with closed $E_1$; by [F7], $D|_{E_1}:E_1\to R$ has bounded inverse $B_R$. Then $$S(w)=\bigl(J\pi_Qw,\ B_R(w-AJ\pi_Qw)\bigr)$$ is a bounded right inverse of $L$. Therefore $I-SL$ is a bounded projection onto $\ker L$, while $\operatorname{ran}S$ is a closed complementary subspace. Apply [F8] using this complement as the invertible-derivative variable. The zero set is locally a $C^{h-1}$ Banach manifold with tangent exactly $\ker L$. The parameter projection on this tangent has kernel $\ker D$ and range $\ker(\pi_QA)$, a closed subspace of codimension $\dim Q$. It is therefore Fredholm of index $\dim\ker D-\dim Q=\lambda(p)-\lambda(q)$. These are the zero-set charts and projection used below. [F4, F6, F7, F8, step 4.1, algebra]

6.1 The ambient spaces here are separable: finite-$C^h$ tensors on compact $M$, and $C^1_0$ paths on $\mathbb R$ in finitely many components, admit countable dense approximating families in their indicated norms; closed subspaces and open subsets remain separable metrizable. The trajectory path space has a countable atlas by finite-coordinate piecewise approximations on compact time intervals and fixed endpoint charts on the tails. The zero set inherits second countability from this ambient space. Thus its Fredholm projection meets the countable-base hypotheses of [F2]. Choose $h$ so large that $h-1>\max\{\lambda(p)-\lambda(q),0\}$; no loss of one derivative affects availability at arbitrarily high finite regularity. [F1, F2, step 1.1, step 5.1, given]

6.2 At a zero, the surjectivity of $L$ and tangent identity are now established by steps 4.1–5.1. The projection differential is $(k,\xi)\mapsto k$ on $\ker L$. If $D$ is onto, it is onto by solving $D\xi=-Ak$. Conversely, write any $w\in F$ as $Ak+D\xi$, choose $(k,\eta)\in\ker L$ using surjectivity of the projection, and obtain $w=D(\xi-\eta)$. Hence regular values of the projection are exactly metrics for which all the corresponding $D$ are onto, equivalently the required transversality by [F4]. [F4, step 4.1, step 5.1, algebra]

7.1 Each $T_{jk}\cap\mathcal G^\infty$ is dense in $U\cap\mathcal G^\infty$. Indeed, start at any smooth $g_0$ in a specified basic smooth neighbourhood controlling derivatives through order $r$. Choose finite $H\geq\max\{r,2\}$ with $H-1$ above the Sard--Smale threshold. Fix $g_0$ on small disjoint critical neighbourhoods. Every trajectory between distinct critical points leaves their union, so the supported variations of step 4.1 are permitted. Steps 5.1–6.1 construct the Fredholm projection; [F2], step 6.2 and Baire give arbitrarily $C^H$-close metrics in this open affine Banach parameter space for which the pair is transverse. Choose one, $g_1$, still in $U$ and within the prescribed derivative bounds; it satisfies $T_{jk}$. [F1, F2, F3, step 5.1, step 6.1, step 6.2, step 2.2, given]

8.1 Approximate $g_1$ by a smooth symmetric tensor using convolution in a finite coordinate cover and a smooth partition of unity. This converges in $C^H$ because $H$ is finite and $M$ is compact. Sufficiently close approximants remain positive definite, remain in the prescribed neighbourhood, and still satisfy $T_{jk}$ by its $C^2$ openness. Only this compact-disk condition needs to survive smoothing. Since $g_0$ was arbitrary, this proves the claimed smooth density without fixing any common critical-neighbourhood data throughout $U$. [step 2.2, step 7.1, algebra]

9.1 The smooth symmetric tensors on compact $M$ form a separable complete metrizable space under their countable derivative seminorms; positivity is an open condition. Hence $\mathcal G^\infty$ is second countable and completely metrizable (an open subset admits an equivalent complete metric). Choose countably many neighbourhoods $U_i$ as above and closed sets $V_i\subset U_i\cap\mathcal G^\infty$ whose interiors cover $\mathcal G^\infty$. This is obtained by taking sufficiently small closed balls from a countable metric basis. For each $i,j,k$, set $$ O_{ijk}=(\mathcal G^\infty\setminus V_i)\cup(T_{i,jk}\cap\mathcal G^\infty). $$ These sets are open and dense by steps 2.2 and 8.1. [step 2.2, step 8.1, given]

10.1 By [F3], under the assumed Axiom of Choice, $\bigcap_{i,j,k}O_{ijk}$ is dense and residual. Any metric in this intersection belongs to some $V_i$, hence satisfies every $T_{i,jk}$ and therefore the global pair transversality by step 2.2. The complement of the desired set is consequently contained in a countable union of closed nowhere dense sets, so the desired set itself is residual. Together with step 1.2 this covers all ordered pairs. [F3, step 1.2, step 2.2, step 9.1] ∎
