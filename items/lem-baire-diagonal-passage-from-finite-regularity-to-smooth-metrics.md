---
id: lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics
kind: lemma
title: "Baire diagonal passage from finite regularity to smooth metrics"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nowhere-dense-meagre-and-residual-subsets, thm-baire-category-for-complete-metric-spaces, thm-sard-smale-residual-regular-values-for-fredholm-maps, lem-universal-metric-trajectory-projection-is-fredholm, lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator]
proof_strategy: direct
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex, Lemma 2.25"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Statement

Assume dependent choice. Let $M$ be a closed smooth finite-dimensional manifold and $f:M\to\mathbb R$ a fixed smooth Morse function. For a fixed pair $p,q$ of its critical points, the smooth metrics for which its stable and unstable manifolds are transverse form a residual subset of the standard $C^\infty$ metric space.

## Facts & Assumptions

**Given:** Dependent choice, $M,f,p,q$ as in the statement, and the finite-$C^h$ universal projection, available at every sufficiently high finite regularity. Write $\mathcal G^\infty$ for the space of all smooth metrics.

[F1] That projection is Fredholm ([[lem-universal-metric-trajectory-projection-is-fredholm]]).

[F2] Sard--Smale makes its regular values residual at every sufficiently high finite regularity ([[thm-sard-smale-residual-regular-values-for-fredholm-maps]]).

[F3] A complete metric space satisfies the Baire conclusion ([[thm-baire-category-for-complete-metric-spaces]]).

[F4] The fixed-metric trajectory operator is onto exactly when the stable and unstable manifolds are transverse ([[lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator]]).

## Proof

**Proof technique:** direct.

1.1 At a zero $(g,\gamma)$ of the universal section, write its surjective linearization as $$L(\delta g,\xi)=A(\delta g)+D_\gamma\xi.$$ Then the tangent space to the universal zero set is $\ker L$, and the differential of its metric projection is $(\delta g,\xi)\mapsto\delta g$.  If $D_\gamma$ is onto, this projection is onto by solving $D_\gamma\xi=-A(\delta g)$.  Conversely, if the projection is onto, write any target vector as $A(\delta g)+D_\gamma\xi$ using surjectivity of $L$, choose $(\delta g,\eta)\in\ker L$, and subtract to obtain $D_\gamma(\xi-\eta)$ equal to that target.  Hence a metric is a regular value of the projection exactly when every corresponding $D_\gamma$ is onto, which by [F4] is exactly the required stable--unstable transversality. [F1, F4, given, algebra]

1.2 If $p=q$, the stable and unstable tangent spaces at $p$ are complementary eigenspaces of the hyperbolic gradient linearization; strict descent excludes any other intersection. If $p\ne q$ and $f(p)\leq f(q)$, strict descent makes the intersection empty. These cases hold for every metric. Hence suppose $f(p)>f(q)$. [given, algebra]

1.3 Near each metric $g_*$ choose compact local unstable and stable disks at $p,q$, with parametrizations depending continuously in $C^1$ on $g$ in a $C^2$ neighbourhood $U$. Here is the parameter dependence needed: in coordinates near either zero fix its hyperbolic linearization $L$ at $g_*$ and write $X_g(x)=Lx+R_g(x)$. After a cutoff on a sufficiently small ball, $R_g$ has uniformly small Lipschitz constant. For prescribed small stable coordinate $z$, the integral equation $$ x(t)=e^{tL}z+\int_0^t e^{(t-s)L}P_sR_g(x(s))\,ds-\int_t^\infty e^{(t-s)L}P_uR_g(x(s))\,ds $$ is a uniform contraction on a small exponentially weighted space of paths on $[0,\infty)$. Its fixed point and its derivative with respect to $z$ depend continuously on $g$; the derivative solves a linear contraction equation. Evaluation at zero gives the stable disk. Reversing time gives the unstable disk. Restrict to smaller closed parameter balls so both disks extend beyond their boundaries. Finite-time flows also depend continuously in $C^1$ on $g$. [given, algebra]

2.1 For integers $j,k\geq0$, let $T_{jk}\subset U$ require transversality of the disk maps $\Phi_j^g D^u_g(p)$ and $\Phi_{-k}^g D^s_g(q)$ at every coincidence of points in their compact parameter domains. Tangent spaces here are those of the extended disks, including at boundary points. This is an open condition: if failing metrics converged in $C^2$ to a metric satisfying it, compactness would give convergent coincidence parameters, and the closed rank-deficiency condition would contradict transversality at their limit. Every point of a global stable or unstable manifold eventually flows into the interior of the corresponding local disk. Thus all $T_{jk}$ together are equivalent to the desired global transversality on $U$. [step 1.3, algebra]

3.1 Each $T_{jk}\cap\mathcal G^\infty$ is dense in $U\cap\mathcal G^\infty$. Indeed, start at any smooth $g_0$ in a specified basic smooth neighbourhood controlling derivatives through order $r$. Choose finite $H\geq\max\{r,2\}$ above the Sard--Smale threshold. Fix $g_0$ on small disjoint critical neighbourhoods. Every trajectory between distinct critical points leaves their union, so metric variations outside them are the variations allowed in [F1]. By [F1], [F2], step 1.1 and Baire, there are arbitrarily $C^H$-close metrics in this affine Banach parameter space for which the pair is transverse. Choose one, $g_1$, still in $U$ and within the prescribed derivative bounds; it satisfies $T_{jk}$. [F1, F2, F3, step 1.1, step 2.1, given]

4.1 Approximate $g_1$ by a smooth symmetric tensor using convolution in a finite coordinate cover and a smooth partition of unity. This converges in $C^H$ because $H$ is finite and $M$ is compact. Sufficiently close approximants remain positive definite, remain in the prescribed neighbourhood, and still satisfy $T_{jk}$ by its $C^2$ openness. Only this compact-disk condition needs to survive smoothing. Since $g_0$ was arbitrary, this proves the claimed smooth density without fixing any common critical-neighbourhood data throughout $U$. [step 2.1, step 3.1, algebra]

5.1 The smooth symmetric tensors on compact $M$ form a separable complete metrizable space under their countable derivative seminorms; positivity is an open condition. Hence $\mathcal G^\infty$ is second countable and completely metrizable (an open subset admits an equivalent complete metric). Choose countably many neighbourhoods $U_i$ as above and closed sets $V_i\subset U_i\cap\mathcal G^\infty$ whose interiors cover $\mathcal G^\infty$. This is obtained by taking sufficiently small closed balls from a countable metric basis. For each $i,j,k$, set $$ O_{ijk}=(\mathcal G^\infty\setminus V_i)\cup(T_{i,jk}\cap\mathcal G^\infty). $$ These sets are open and dense by steps 2.1 and 4.1. [step 2.1, step 4.1, given]

6.1 By [F3] and dependent choice, $\bigcap_{i,j,k}O_{ijk}$ is dense and residual. Any metric in this intersection belongs to some $V_i$, hence satisfies every $T_{i,jk}$ and therefore the global pair transversality by step 2.1. The complement of the desired set is consequently contained in a countable union of closed nowhere dense sets, so the desired set itself is residual. Together with step 1.2 this covers all ordered pairs. [F3, step 1.2, step 2.1, step 5.1] ∎ 