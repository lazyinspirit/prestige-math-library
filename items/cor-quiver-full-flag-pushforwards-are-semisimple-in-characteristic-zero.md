---
id: cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero
kind: corollary
title: "Full quiver-flag pushforwards are semisimple in characteristic zero"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 26
deps: [def-axiom-of-choice,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-algebraic-open-inclusion-surjects-on-fundamental-groups,
       lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom,
       lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative,
       lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom,
       lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification,
       thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology,
       thm-constructible-six-functors-proper-base-change-and-verdier-duality,
       thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes,
       thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes,
       thm-projective-morphism-proper,
       thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Varagnolo, E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992v2, Secs. 1.1-1.3"
      url: "https://arxiv.org/pdf/0901.3992"
      locator: "the incidence variety and its proper first projection, the dimension bookkeeping (1.2), D_G(X) as simplicial sheaves on the action nerve, and the semisimple complexes L_y=(pi_y)_!(k), L_y^vee=L_y[2d_y], delta L_y=L_y[d_y] (1.5); the source uses decreasing flags"
    - title: "T. Bozec, Quivers with loops and perverse sheaves, arXiv:1401.5302v4, Sec. 1.1"
      url: "https://arxiv.org/pdf/1401.5302"
      locator: "increasing flags, the incidence of x-stable flags with its proper projection pi_{i,a}, and the semisimplicity of pi_{i,a!}1 by the Beilinson-Bernstein-Deligne decomposition theorem"
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Asterisque 100 (1982), Theoreme 6.2.5 and its proof 6.2.7"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "PDF pp. 161-163: a proper direct image of a semisimple geometrically-origin complex is semisimple"
---

## Statement

Assume the Axiom of Choice as inherited from the geometry and equivariant
constructible-category suppliers. Let $\Gamma$ be any finite loopless complex
quiver, with arbitrary finite arrow multiplicities, and let $\beta$ be any
finite dimension vector. For a color word $\nu$ of content $\beta$, use the
increasing full graded flag incidence $\pi_\nu:X_\nu\to E_V$ and
$G_V=\prod_i\operatorname{GL}(V_i)$ of
[[lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification]].
For every coefficient field $k$ of characteristic zero, in the actual bounded
equivariant constructible category,
$$L_\nu=R\pi_{\nu!}k_{X_\nu}[d_\nu],\qquad d_\nu=\dim_\mathbb C X_\nu,$$
is a finite direct sum of shifts of simple $G_V$-equivariant perverse sheaves.
Consequently the finite sum over all such words is a semisimple complex in the
same sense. No semismallness, finite-ADE hypothesis or affine paving of the
fibers of $\pi_\nu$ is required.

## Facts & Assumptions

**Given:** the finite loopless quiver with its finite dimension vector, the complex graded space $V=\bigoplus_iV_i$, the group $G_V=\prod_i\operatorname{GL}(V_i)$ and the representation space $E_V$ with its action, the coefficient field $k$ of characteristic zero, the actual bounded equivariant constructible category $D^b_{G,c}(E_V;k)$, and the Axiom of Choice of [A1].

[F1] The incidence geometry ([[lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification]]): $X_\nu$ is the total space of a $G_V$-equivariant subbundle $W_\nu\subseteq E_V\times\mathcal F_\nu$ of rank $r_\nu=\sum_{h:i\to j}\#\{(p,q):\nu_p=i,\nu_q=j,q<p\}$ and dimension $d_\nu=r_\nu+\sum_i\beta_i(\beta_i-1)/2$, the map $\pi_\nu$ is projective, and the finite Grassmannian models $B_N=\prod_{\beta_i>0}\operatorname{Gr}(\beta_i,N_i)$, $E_N$, $\mathcal F_{\nu,N}$, $X_{\nu,N}$ carry compactifications $\bar\pi_{\nu,N}:\bar X_{\nu,N}\to\bar E_N$ that are projective maps between smooth projective varieties of source dimension $\dim_\mathbb C X_{\nu,N}=d_\nu+s_N$ and restrict over the affine chart $t\ne0$ to $\pi_{\nu,N}:X_{\nu,N}\to E_N$.

[F2] Finite cochain models ([[thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology]]): on a quasi-projective complex algebraic variety of dimension at most $f$, the ordinary and compact-support cohomology of the constant sheaf vanishes outside $[0,2f]$, through finite bounded cochain models.

[F3] The equivariant category ([[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]): for a characteristic-zero field $k$ and a product of general linear groups acting on a separated finite-type complex variety, $D^b_{G,c}$ is the full subcategory of the bounded derived category of simplicial sheaves on the action nerve with Cartesian cohomology and constructible degree-zero restriction; constants with the trivial equivariant structure are objects.

[F4] The equivariant six operations ([[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]): the operations $f^*,Rf_*,Rf_!,f^!$ are defined on $D^b_{G,c}$ for equivariant algebraic maps, proper maps satisfy $Rf_!=Rf_*$, and for a Cartesian square with $u$ and $v$ the exchange $u^*Rf_!\simeq Rf'_!v^*$ holds and obeys Cartesian pasting. Its construction is compatible with ordinary restriction: Proof 1.1 transports the ordinary operations from the resolution representatives and identifies their unshifted restrictions with the ordinary operations on $X$. For ordinary maps the same base-change statement applies with the trivial group.

[F5] The finite Stiefel resolution ([[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]]): for integers $N_i\ge n_i+1$ the frame spaces $U_N\to B_N$, the associated varieties $X_N=(U_N\times X)/G$ and the functor $Q_N$ satisfy the Hom comparison $\operatorname{Hom}_G(A,B[m])\cong\operatorname{Hom}_{X_N}(Q_N(A),Q_N(B)[m])$ for $m\le b+r_N-a$ with $r_N=2\min_i(N_i-n_i)$, full faithfulness and the image description on intervals of width at most $r_N$, and the trivial-group clause $r_N=\infty$, $Q_N=\mathrm{id}$.

[F6] The Cartesian simplicial model ([[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]]): $D^b_{G,c}(X;k)$ is triangulated, locally small and idempotent complete, restriction to $X$ is conservative, the bounded Hom and degree-zero ring comparisons of [F5] hold for it, and the resolution triples satisfy $\operatorname{pr}_X^*A\cong q_N^*Q_N(A)$ with $q_N:P_N\to X_N$ and $\operatorname{pr}_X:P_N\to X$.

[F7] Perverse normalization ([[lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative]]): for sufficiently large $N$ the assignment $A\mapsto Q_N(A)[s_N]$ is exact and conservative for the middle-perverse t-structures, $s_N=\dim_\mathbb C B_N$, and at the degree-zero Hom stabilization bound $r_N\ge a-b$ for objects of ordinary amplitude in $[b,a]$ it lifts finite families of orthogonal idempotents and preserves and reflects perverse concentration and simplicity.

[F8] The ordinary perverse core ([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]): on $D_c^b$ of a separated finite-type complex variety, middle perversity is a bounded t-structure whose simple objects are the intersection complexes $j_{!*}L[\dim_{\mathbb C}Z]$ of simple finite-rank local systems on dense smooth opens of irreducible supports $Z$, and open restriction is perverse exact.

[F9] The equivariant perverse core ([[thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]): on $D^b_{G,c}(X;k)$ middle perversity is a bounded t-structure detected by restriction to $X$, with abelian finite-length heart whose simple objects are the equivariant intermediate extensions $\operatorname{IC}_Z(L)=j_{!*}L[\dim_{\mathbb C}Z]$.

[F10] Compact smooth-source semisimplicity ([[thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology]]): for a projective morphism $f:X\to Y$ of complex projective varieties with $X$ smooth of pure dimension $n$ and $k$ any characteristic-zero field, $Rf_*k_X[n]$ is a finite direct sum of shifts of simple perverse sheaves on $Y$.

[F11] Fundamental groups of algebraic opens ([[lem-algebraic-open-inclusion-surjects-on-fundamental-groups]]): a nonempty Zariski open subset of a connected smooth complex algebraic variety has surjective fundamental-group map at every point.

[F12] Projective implies proper ([[thm-projective-morphism-proper]]): under AC, every projective morphism in the finite-dimensional H-projective convention is proper.


[A1] AC is assumed ([[def-axiom-of-choice]]) and is inherited exactly from the suppliers of [F1]-[F12]: the relative Proj and properness conversion, the finite triangulations of [F2], the injective replacements and finite resolutions of [F3]-[F7], and the perverse and compact-projective suppliers of [F8]-[F10]. The selections made below are finite: the color words, one tuple $(N_i)$, and finitely many idempotents on fixed finite-dimensional data.

## Proof

**Proof technique:** direct: bound the ordinary amplitude, transport the pushforwards to one finite frame model, decompose them there by the compact smooth-source theorem, and lift the resulting idempotents back through the perverse normalization.

1.1 There are finitely many color words $\nu$ of content $\beta$. If $\beta=0$ then $G_V$ is trivial, $E_V=0$, each $X_\nu$ and $L_\nu=k[0]$ is the simple equivariant perverse sheaf $k$, so assume some $\beta_i>0$ and fix once the finite identifications $V_i\cong\mathbb C^{\beta_i}$. For each $\nu$, the constant sheaf $k_{X_\nu}$ with its trivial equivariant structure is a bounded Cartesian constructible object of $D^b_{G,c}(X_\nu;k)$ by [F3], and $\pi_\nu$ is $G_V$-equivariant by [F1], so $L_\nu=R\pi_{\nu!}k[d_\nu]$ is an object of $D^b_{G,c}(E_V;k)$ by [F4]. For $x\in E_V$ the fiber $\pi_\nu^{-1}(x)$ is a closed subvariety of $\mathcal F_\nu$ of complex dimension at most $f=\sum_i\beta_i(\beta_i-1)/2$ by [F1], forget equivariance and apply ordinary proper base change, using the restriction-compatible construction of [F4], to the ordinary inclusion of $x$; this gives $(R\pi_{\nu!}k)_x\simeq R\Gamma_c(\pi_\nu^{-1}(x);k)$, and the fibre is compact because $\pi_\nu$ is projective; no uniform all-sheaf dimension hypothesis is inferred from the constant-coefficient calculation; the compact-support cohomology of the fiber lies in degrees $[0,2f]$ by [F2]. Hence $L_\nu$ has ordinary amplitude $[-d_\nu,2f-d_\nu]$, and the finite sum $K=\bigoplus_\nu L_\nu$ has ordinary amplitude $[b,a]$ with $b=-\max_\nu d_\nu$ and $a=2f-\min_\nu d_\nu$. Choose integers $N_i\ge\beta_i+1$ with $r_N=2\min_{\beta_i>0}(N_i-\beta_i)\ge a-b$; such a tuple exists because the bounds are finite, and then $r_N\ge 2f$, the width of every single $L_\nu$. [F1, F2, F3, F4, given, construct]

2.1 Fix the chosen tuple $N$, put $U_N=\prod_{\beta_i>0}\operatorname{Inj}(\mathbb C^{\beta_i},\mathbb C^{N_i})$, and identify the two models of the same quotient: the frame model $X_N=(U_N\times E_V)/G_V$ of [F5] is the total space of $\bigoplus_{h:i\to j}\mathcal Hom(S_i,S_j)$ over $B_N$ with tautological subbundles $S_i$, and $(U_N\times X_\nu)/G_V$ is the incidence model $X_{\nu,N}$ of [F1], both because a frame trivializes $S_i\cong\mathbb C^{\beta_i}$ and transports representations and flags. Write $q_N:U_N\times E_V\to E_N$ and $\operatorname{pr}_{E_V}:U_N\times E_V\to E_V$ for the two projections and $q_\nu:U_N\times X_\nu\to X_{\nu,N}$; the quotient square comparing $q_N,q_\nu$ with the equivariant map $\mathrm{id}\times\pi_\nu$ is Cartesian because both $G_V$-actions on $U_N\times E_V$ and $U_N\times X_\nu$ are free (the action on $U_N$ is free by [F5]), and the induced map of quotients is $\pi_{\nu,N}$ by [F1]. By the descent equivalence of [F6], $Q_N$ is characterized by $q_N^*Q_N(A)\cong\operatorname{pr}_{E_V}^*A$, and the principal-bundle Cech nerve carries the descent equivalence; ordinary $q_N^*$ is conservative, while descent-compatible morphisms are recovered through that equivalence. Applying the unconditional exchange $u^*Rf_!\simeq Rf'_!v^*$ of [F4] to the Cartesian squares of the two quotient maps gives $\operatorname{pr}_{E_V}^*(R\pi_{\nu!}k[d_\nu])\cong R(\mathrm{id}\times\pi_\nu)_!k[d_\nu]$ and $q_N^*(R\pi_{\nu,N!}k[d_\nu])\cong R(\mathrm{id}\times\pi_\nu)_!k[d_\nu]$, where $\mathrm{id}\times\pi_\nu:U_N\times X_\nu\to U_N\times E_V$ is the common base change. Combining with the characterizing identity gives $q_N^*Q_N(L_\nu)\cong q_N^*(R\pi_{\nu,N!}k[d_\nu])$, and both canonical base-change identifications satisfy the same Cartesian descent data by their naturality; hence the Cech-nerve descent equivalence yields $Q_N(L_\nu)\cong R\pi_{\nu,N!}k[d_\nu]$, and hence $Q_N(K)[s_N]\cong\bigoplus_\nu R\pi_{\nu,N!}k[d_\nu+s_N]$ with $\dim_\mathbb C X_{\nu,N}=d_\nu+s_N$ by [F1]. [F1, F4, F5, F6, step 1.1, construct]

3.1 For each $\nu$ the map $\bar\pi_{\nu,N}:\bar X_{\nu,N}\to\bar E_N$ of [F1] is a projective morphism of complex projective varieties with $\bar X_{\nu,N}$ smooth of pure dimension $d_\nu+s_N$, so it is proper by [F12], and $\bar X_{\nu,N}$ restricts over the chart $E_N$ to $X_{\nu,N}$ with restricted map $\pi_{\nu,N}$. By [F10] applied to $\bar\pi_{\nu,N}$ there is a finite decomposition $R\bar\pi_{\nu,N*}k[d_\nu+s_N]\cong\bigoplus_iS_i[m_i]$ into shifts of simple ordinary perverse sheaves on $\bar E_N$; applying $j^*$ for the open immersion $j:E_N\hookrightarrow\bar E_N$ and using $R\bar\pi_{\nu,N*}=R\bar\pi_{\nu,N!}$ of [F4] together with the exchange $j^*R\bar\pi_{\nu,N!}\simeq R\pi_{\nu,N!}j'^*$ along the Cartesian chart square gives $R\pi_{\nu,N!}k[d_\nu+s_N]\cong\bigoplus_i(j^*S_i)[m_i]$. Open restriction is perverse exact by [F8], so each $j^*S_i$ is perverse, and it is either zero or simple: if $Z$ is the irreducible support of $S_i$ with $Z\cap E_N=\varnothing$ then $j^*S_i=0$; otherwise $Z\cap E_N$ is a nonempty dense open of $Z$, the intermediate extension $S_i=\operatorname{IC}_Z(L)$ restricts to $\operatorname{IC}_{Z\cap E_N}(L|_{Z^{sm}\cap E_N})$, because the intermediate extension is computed as the image of ${}^pH^0(j_!L)\to{}^pH^0(Rj_*L)$ and the open immersion commutes with extension by zero and with pushforward along the same restriction, and that restricted local system is simple because $Z^{sm}\cap E_N\hookrightarrow Z^{sm}$ is a nonempty Zariski open inclusion of a connected smooth complex algebraic variety, hence surjective on fundamental groups by [F11]. Therefore each $R\pi_{\nu,N!}k[d_\nu+s_N]$, and with step 2.1 each $Q_N(L_\nu)[s_N]$, is a finite direct sum of shifts of simple ordinary perverse sheaves on $E_N$. [F1, F4, F8, F10, F11, F12, step 2.1, construct]

4.1 Fix $\nu$ and write $L=L_\nu$, of ordinary amplitude $[-d_\nu,2f-d_\nu]$ with $2f\le r_N$ by step 1.1. The finite decomposition of $Q_N(L)[s_N]$ into shifts of simple ordinary perverse sheaves from step 3.1 determines pairwise orthogonal idempotents $e_i$ in $\operatorname{End}(Q_N(L)[s_N])=\operatorname{End}(Q_N L)$ with sum the identity, the projectors onto the displayed summands. Since $r_N\ge 2f$, the degree-zero Hom comparison of [F5], restated for the actual category in [F6], is a ring isomorphism $\operatorname{End}_G(L)\cong\operatorname{End}_{E_N}(Q_NL)$, so these idempotents and all their relations lift uniquely to $\operatorname{End}_G(L)$; by the idempotent completeness of $D^b_{G,c}(E_V;k)$ established in [F6], the lifted idempotents split inside that actual category, producing $G_V$-equivariant summands $T_i$ of $L$ with $Q_N(T_i)[s_N]\cong S_i[m_i]$ and ordinary amplitude within $[-d_\nu,2f-d_\nu]$. [F5, F6, step 1.1, step 3.1, algebra]

5.1 For each summand $T_i$ of step 4.1 the model $Q_N(T_i)[s_N]$ is concentrated in perverse degree $-m_i$. By [F7] the normalized functor $Q_N(-)[s_N]$ is perverse exact and conservative and preserves and reflects perverse concentration and simplicity at the stabilization bound; hence $T_i$ is concentrated in perverse degree $-m_i$, say $T_i=U_i[m_i]$ with $U_i$ in the equivariant perverse heart of [F9], and $U_i$ is simple because simplicity is reflected. Thus $L=\bigoplus_iT_i$ is a finite direct sum of shifts of simple $G_V$-equivariant perverse sheaves, repeating this argument for each of the finitely many words $\nu$ proves the individual clause for every $L_\nu$ at the same tuple $N$. [F7, F9, step 3.1, step 4.1, algebra]

6.1 Since there are finitely many words and each $L_\nu$ is a finite direct sum of shifts of simple equivariant perverse sheaves, the finite sum $K=\bigoplus_\nu L_\nu$ is again such a finite direct sum, i.e. semisimple in the actual bounded equivariant constructible category. The argument used only the amplitude bound of step 1.1, the model identification of step 2.1, the compact smooth-source theorem [F10] for the projective maps $\bar\pi_{\nu,N}$ and its restriction to the open chart, the ordinary perverse restriction facts of [F8], the fundamental-group lemma [F11] and the normalization [F7]; no semismallness of $\pi_\nu$, no finite-ADE hypothesis and no affine paving of any fiber is assumed or used, and the empty dimension vector, zero arrows, zero-rank subbundles and arbitrary finite multiplicities are covered by steps 1.1 and 3.1. AC is consumed exactly as recorded in [A1]. [F7, F8, F10, F11, A1, given, step 3.1, step 5.1] ∎

## Remarks

- **What replaces semismallness.** The naive decomposition input would be semismallness of $\pi_\nu$, which fails already for the one-vertex empty-arrow case recorded on the companion examples page. The proof instead compacts $\pi_\nu$ to a projective map of smooth projective varieties and applies the compact smooth-source theorem there; the finite Stiefel model then transports the decomposition across the equivariant quotient.
- **Shifts.** The common shift $s_N=\dim_\mathbb C B_N$ is exactly the base-dimension correction of the normalization; the model source has dimension $d_\nu+s_N$, so the compact theorem's normalization restricts back to the original $d_\nu$ in $L_\nu$.
- **Choice.** AC enters through the listed suppliers only; the proof itself selects finitely many words, one tuple $N=(N_i)$ and finitely many lifted idempotents, all on fixed finite-dimensional data.
