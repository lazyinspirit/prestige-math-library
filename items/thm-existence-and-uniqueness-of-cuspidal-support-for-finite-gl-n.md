---
id: thm-existence-and-uniqueness-of-cuspidal-support-for-finite-gl-n
kind: theorem
title: Existence and uniqueness of cuspidal support
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, def-cuspidal-support-and-harish-chandra-series, def-harish-chandra-induction-and-restriction-for-finite-gl-n, def-induced-r-linear-g-module-by-h-covariant-functions, def-coordinate-parabolics-for-ordered-partitions, def-compositions-partial-flags-and-standard-parabolics, def-standard-subgroups-of-gl-n-over-a-finite-field, def-weyl-group-and-length-for-finite-gl-n, thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq, thm-harish-chandra-adjunction-for-finite-gl-n, thm-transitivity-and-parabolic-independence-of-harish-chandra-induction, thm-parabolic-mackey-formula-for-finite-gl-n, lem-unipotent-invariants-are-exact-over-c, thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order, thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique, cor-schurs-lemma-for-irreducible-representations, def-simple-module, def-g-module-over-a-commutative-ring, def-subgroup, def-normal-subgroup, def-group-action, def-symmetric-group, lem-symmetric-group-is-a-group, thm-matrix-multiplication-laws, def-matrix-product-and-identity-matrix, cor-general-linear-group-is-a-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Lemma 10.3 and Proposition 10.6, printed pp. 41-43"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Definition 5.7 and Proposition 5.9, printed pp. 43-44"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $q$ be a prime power and put $G=\operatorname{GL}_n(\mathbb F_q)$.
All modules below are complex and finite-dimensional, and cuspidal pairs,
Harish-Chandra series and transport by a permutation are as in
[[def-cuspidal-support-and-harish-chandra-series]]. For an ordered partition
$\eta=(S_1,\dots,S_r)$ set $d(\eta):=\sum_i|S_i|^2$.

1. **Existence.** Let $M$ be a simple complex $G$-module, and let
   $\gamma$ be an ordered partition of $\{1,\dots,n\}$ for which $d(\gamma)$ is least among the values $d(\delta)$ with
   $M^{U_\delta}\ne0$. Then $M^{U_\gamma}$ is a nonzero cuspidal
   $L_\gamma$-module, every simple $L_\gamma$-submodule $N$ of $M^{U_\gamma}$
   is cuspidal, and for each such $N$ the pair $(L_\gamma,N)$ is a cuspidal pair
   with $M\in\operatorname{Irr}(G\,|\,(L_\gamma,N))$.
2. **Conjugacy of cuspidal pairs.** Let $(L_\gamma,N)$ and
   $(L_{\gamma'},N')$ be cuspidal pairs. If their Harish-Chandra series meet,
   then there is $\sigma\in S_n$ with
   $$w_\sigma L_\gamma w_\sigma^{-1}=L_{\gamma'},\qquad N'\cong N^\sigma,$$
   where $w_\sigma=P_\sigma$ is the permutation matrix of $\sigma$; conversely,
   if such a $\sigma$ exists, then the two series are matched by the transport
   of modules, that is $M\in\operatorname{Irr}(G\,|\,(L_\gamma,N))$ if and only
   if $M^\sigma\in\operatorname{Irr}(G\,|\,(L_{\gamma'},N'))$.
3. **Partition.** Every irreducible complex $G$-module lies in at least one
   Harish-Chandra series, and the pairs $(L_\gamma,N)$ whose series contain a
   fixed $M$ are pairwise conjugate in the sense of claim 2. Consequently the
   assignment to $M$ of the conjugacy class of a cuspidal pair whose series
   contains $M$ is well defined, and it partitions
   $\operatorname{Irr}(\mathbb CG)$ into the unions of the series attached to
   the cuspidal pairs in each class.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a prime power $q$, the group $G=\operatorname{GL}_n(\mathbb F_q)$ with diagonal torus $T$ and standard basis $e_1,\dots,e_n$, a simple complex $G$-module $M$, and cuspidal pairs $(L_\gamma,N)$ and $(L_{\gamma'},N')$ as in the statement.

[L1] Harish-Chandra induction and restriction with respect to a coordinate parabolic $P_\eta=L_\eta\ltimes U_\eta$ are the additive functors $R_{L_\eta}^G(W)=\operatorname{Ind}_{P_\eta}^G(\operatorname{Inf}_{L_\eta}^{P_\eta}W)$, realised as the set of functions $f:G\to W$ with $f(gp)=\pi(p)^{-1}f(g)$ for all $g\in G$, $p\in P_\eta$, where $\pi:P_\eta\to L_\eta$ is the projection with kernel $U_\eta$, and ${}^*\!R_{L_\eta}^G(X)=X^{U_\eta}=\{x\in X:ux=x\text{ for all }u\in U_\eta\}$ with the $L_\eta$-action through $P_\eta/U_\eta\cong L_\eta$; for the one-block partition $\eta=(\{1,\dots,n\})$ one has $U_\eta=\{I_n\}$ and both functors are the identity ([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]], [[def-induced-r-linear-g-module-by-h-covariant-functions]], [[def-g-module-over-a-commutative-ring]]).

[L2] For every complex $L_\eta$-module $V$ and every complex $G$-module $X$ there is a natural bijection $\operatorname{Hom}_G(R_{L_\eta}^G(V),X)\to\operatorname{Hom}_{L_\eta}(V,{}^*\!R_{L_\eta}^G(X))$, and the same holds with $G$ replaced by a coordinate Levi $L\le G$ and $P_\eta$ replaced by a coordinate parabolic of $L$ ([[thm-harish-chandra-adjunction-for-finite-gl-n]]).

[L3] For an ordered partition $\eta$ the subgroups $P_\eta,L_\eta,U_\eta$ are given by the entry criteria $\operatorname{blk}_\eta(k)>\operatorname{blk}_\eta(l)$, $\operatorname{blk}_\eta(k)\ne\operatorname{blk}_\eta(l)$, and $k\ne l$ together with $\operatorname{blk}_\eta(k)\ge\operatorname{blk}_\eta(l)$ and $g_{kk}=1$; then $P_\eta=L_\eta\ltimes U_\eta$ with $L_\eta\cap U_\eta=\{I_n\}$, $U_\eta\trianglelefteq P_\eta$, $P_\eta$ is the stabiliser of the coordinate flag of $\eta$, $T\le L_\eta$, and for every $\sigma\in S_n$ one has $P_{\sigma(\eta)}=w_\sigma P_\eta w_\sigma^{-1}$, $L_{\sigma(\eta)}=w_\sigma L_\eta w_\sigma^{-1}$ and $U_{\sigma(\eta)}=w_\sigma U_\eta w_\sigma^{-1}$ for the permutation matrix $w_\sigma=P_\sigma$; the Levi $L_\eta$ determines the set partition underlying $\eta$, because a transposition matrix $w_{(kl)}=P_{(kl)}$ lies in $L_\eta$ exactly when $k$ and $l$ lie in a common block of $\eta$ ([[def-coordinate-parabolics-for-ordered-partitions]], [[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]], [[def-compositions-partial-flags-and-standard-parabolics]], [[def-standard-subgroups-of-gl-n-over-a-finite-field]], [[def-weyl-group-and-length-for-finite-gl-n]]).

[L4] If $\delta$ is a refinement of $\gamma$ then $L_\delta\le L_\gamma$, $P_\delta\cap L_\gamma=L_\delta\ltimes(U_\delta\cap L_\gamma)$ is a coordinate parabolic of $L_\gamma$ with radical $U_\delta\cap L_\gamma$, and the Harish-Chandra restriction from $L_\gamma$ to $L_\delta$ is ${}^*\!R_{L_\delta}^{L_\gamma}(N)=N^{U_\delta\cap L_\gamma}$; this $L_\delta$-module does not depend, up to isomorphism, on the order in which the blocks of $\delta$ are listed, and every refinement can be reordered so that its blocks are listed block by block in the order of $\gamma$. A complex $L_\gamma$-module $N$ is cuspidal when ${}^*\!R_{L_\delta}^{L_\gamma}(N)=0$ for every proper refinement $\delta$ of $\gamma$; a cuspidal pair is a pair $(L_\gamma,N)$ with $N$ irreducible and cuspidal, and its Harish-Chandra series $\operatorname{Irr}(G\,|\,(L_\gamma,N))$ is the set of isomorphism classes of irreducible complex $G$-modules which are quotients, equivalently direct summands, of $R_{L_\gamma}^G(N)$, a nonempty set. For $\sigma\in S_n$ and a complex $L_\gamma$-module $N$ the transport $N^\sigma$ is the vector space $N$ with the $L_{\sigma(\gamma)}$-action $m\cdot x=(w_\sigma^{-1}mw_\sigma)\cdot x$, and for a complex $G$-module $X$ the transport $X^\sigma$ carries the $G$-action $g\cdot x=(w_\sigma^{-1}gw_\sigma)\cdot x$; transport is compatible with composition, $(Y^\rho)^\sigma=Y^{\sigma\circ\rho}$, fixes the identity, preserves dimensions and the lattice of submodules, and a module is irreducible exactly when its transport is ([[def-cuspidal-support-and-harish-chandra-series]], [[def-coordinate-parabolics-for-ordered-partitions]]).

[L5] Let $\delta$ be a refinement of $\gamma$ listed block by block in the order of $\gamma$, so that the hypothesis of claim 1 of the transitivity theorem holds for the pair $(\delta,\gamma)$. Then $U_\delta=U_\gamma\rtimes(U_\delta\cap L_\gamma)$, for every complex $G$-module $X$ one has $X^{U_\delta}=(X^{U_\gamma})^{U_\delta\cap L_\gamma}$, and there are isomorphisms of functors $R_{L_\delta}^{G,P_\delta}\cong R_{L_\gamma}^{G,P_\gamma}\circ R_{L_\delta}^{L_\gamma}$ and ${}^*\!R_{L_\delta}^{G,P_\delta}\cong{}^*\!R_{L_\delta}^{L_\gamma}\circ{}^*\!R_{L_\gamma}^{G,P_\gamma}$, where the functors between the Levis are taken with respect to $P_\delta\cap L_\gamma$; moreover, for two coordinate parabolics with the same Levi $L$ the associated Harish-Chandra induction and restriction functors are isomorphic over $\mathbb C$ ([[thm-transitivity-and-parabolic-independence-of-harish-chandra-induction]]).

[L6] Let $P=L\ltimes U$ be a coordinate parabolic of $G$ and $Q=M\ltimes V$ a coordinate parabolic with Levi $M$, let $\mathcal D$ be a finite set of permutation representatives of the $(W_L,W_M)$-double cosets, and let $X$ be a complex $M$-module. Then $${}^*\!R_L^G\bigl(R_M^G(X)\bigr)\cong\bigoplus_{\rho\in\mathcal D}R_{C_\rho}^{L}\bigl(({}^\rho X)^{D_\rho}\bigr),$$ where $w_\rho=P_\rho$, $C_\rho=L\cap w_\rho Mw_\rho^{-1}$, $D_\rho=U\cap w_\rho Mw_\rho^{-1}$ and $A_\rho=L\cap w_\rho Vw_\rho^{-1}$ satisfy $P\cap w_\rho Mw_\rho^{-1}=C_\rho\ltimes D_\rho$ and $L\cap w_\rho Qw_\rho^{-1}=C_\rho\ltimes A_\rho$, the outer induction is taken along the coordinate parabolic $L\cap w_\rho Qw_\rho^{-1}$ of $L$, and ${}^\rho X$ is the transport of $X$ to the Levi $w_\rho Mw_\rho^{-1}$ ([[thm-parabolic-mackey-formula-for-finite-gl-n]]).

[L7] Over $\mathbb C$ every finite-dimensional module of a finite group is completely reducible; a nonzero completely reducible module is a direct sum of simple submodules, and every nonzero map between simple modules is an isomorphism while $\operatorname{Hom}(S,S)=\mathbb C\,\mathrm{id}_S$ for a simple module $S$, so writing a completely reducible module as $\bigoplus_jS_j^{\oplus m_j}$ with pairwise non-isomorphic simple $S_j$, both $\operatorname{Hom}(N,V)$ and $\operatorname{Hom}(V,N)$ have dimension $m_N$ for a simple $N$ ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]], [[thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique]], [[cor-schurs-lemma-for-irreducible-representations]], [[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]], [[def-simple-module]]).

[L8] Let $k$ be a field, $U$ a finite group with $|U|$ invertible in $k$, and $X\subseteq Y$ $k$-linear $U$-modules; then the invariants functor $Z\mapsto Z^U$ is exact and additive, so it carries the inclusion $X\hookrightarrow Y$ to an inclusion $X^U\hookrightarrow Y^U$; applied to $k=\mathbb C$ and to the unipotent radical $U_\gamma$ of a coordinate parabolic of $G$, the Harish-Chandra restriction ${}^*\!R_{L_\gamma}^G$ is exact ([[lem-unipotent-invariants-are-exact-over-c]]).

[L9] Subgroups and their cosets, conjugation, group actions, complex modules and matrix products obey the usual laws: intersections of subgroups are subgroups, $H\le G$ and $g\in G$ give $gHg^{-1}\le G$, a complex $G$-module is a complex vector space with a linear action satisfying $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$, matrix multiplication is associative, $I_n$ is its identity, $G=\operatorname{GL}_n(\mathbb F_q)$ is a group, $S_n$ is the group of bijections of $\{1,\dots,n\}$ under composition with $(\sigma^{-1})^{-1}=\sigma$, and the permutation matrices satisfy $P_{\sigma}P_{\tau}=P_{\sigma\circ\tau}$ and $P_{\sigma^{-1}}=P_\sigma^{-1}$ ([[def-subgroup]], [[def-normal-subgroup]], [[def-group-action]], [[def-g-module-over-a-commutative-ring]], [[thm-matrix-multiplication-laws]], [[def-matrix-product-and-identity-matrix]], [[cor-general-linear-group-is-a-group]], [[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]).

## Proof

**Proof technique:** direct.

1.1 **A smallest block statistic with nonzero invariants.** The set $\mathcal S:=\{\eta:\eta\text{ an ordered partition of }\{1,\dots,n\}\text{ with }M^{U_\eta}\ne0\}$ is nonempty, because the one-block partition $\eta_0=(\{1,\dots,n\})$ has $U_{\eta_0}=\{I_n\}$ and hence $M^{U_{\eta_0}}=M\ne0$ by [L1] and [L7]. Since there are finitely many ordered partitions, the positive integers $d(\eta)=\sum_i|S_i|^2$ for $\eta\in\mathcal S$ have a least value, attained at some $\gamma\in\mathcal S$; fix such a $\gamma$. If $L_\eta\le L_\gamma$, then every block of $\eta$ is contained in a block of $\gamma$: for any two indices in one $\eta$-block their transposition matrix lies in $L_\eta$, hence in $L_\gamma$, so they lie in one $\gamma$-block by [L3]. Thus $\eta$ refines $\gamma$. Splitting a block of size $a+b$ into nonempty blocks of sizes $a,b$ decreases $d$ by $2ab>0$, so $d(\eta)\le d(\gamma)$, with equality only when $L_\eta=L_\gamma$. For such $\eta\in\mathcal S$ the minimality of $d(\gamma)$ forces equality, and therefore $L_\eta=L_\gamma$. [L1, L3, L7, given, choose]

1.2 **Transport of Harish-Chandra induction.** Let $\tau\in S_n$, put $w:=w_\tau=P_\tau$, and let $W$ be a complex $L_\gamma$-module. For $f\in R_{L_\gamma}^{G}(W)$ define $f'(g):=f(gw)$. If $p'\in P_{\tau(\gamma)}=wP_\gamma w^{-1}$, then $p:=w^{-1}p'w\in P_\gamma$, and the covariance of $f$ gives $$f'(gp')=f(gp'w)=f(gwp)=\pi_\gamma(p)^{-1}f(gw)=\pi_{\tau(\gamma)}(p')^{-1}\cdot_{W^\tau}f'(g).$$ Here $\pi_{\tau(\gamma)}(p')=w\pi_\gamma(p)w^{-1}$ by the transported Levi decomposition of [L3], and its action on $W^\tau$ is the action of $\pi_\gamma(p)$ on $W$ by [L4]. Thus $f'\in R_{L_{\tau(\gamma)}}^{G}(W^\tau)$. The assignment $f\mapsto f'$ is a $G$-linear bijection: its inverse is $h\mapsto(g\mapsto h(gw^{-1}))$, and left translation commutes with the fixed right translation $g\mapsto gw$. Hence $$R_{L_\gamma}^{G}(W)\cong R_{L_{\tau(\gamma)}}^{G}(W^\tau).$$ Moreover every $G$-module $Y$ is isomorphic to its $\tau$-transport $Y^\tau$: if $\rho_Y$ denotes its action, $\rho_Y(w^{-1}):Y\to Y^\tau$ intertwines the actions, since $\rho_Y(w^{-1})\rho_Y(g)=\rho_Y(w^{-1}gw)\rho_Y(w^{-1})$. In particular the two Harish-Chandra inductions have the same simple constituents, with $M^\tau\cong M$. If a cuspidal pair $(L_{\gamma'},N')$ satisfies $L_{\gamma'}=L_{\tau(\gamma)}$ and $N'\cong N^\tau$, parabolic independence [L5] handles any different order of the same blocks; consequently $M\in\operatorname{Irr}(G\,|\,(L_\gamma,N))$ if and only if $M^\tau\in\operatorname{Irr}(G\,|\,(L_{\gamma'},N'))$. [L1, L3, L4, L5, L9, construct]

1.3 **The mixed Hom-space and its Mackey expansion.** Suppose now that $M$ lies in the series of both cuspidal pairs, that is $R_{L_\gamma}^{G}(N)\twoheadrightarrow M$ and $R_{L_{\gamma'}}^{G}(N')\twoheadrightarrow M$ by [L4]. Since $R_{L_{\gamma'}}^{G}(N')$ is completely reducible by [L7] and $M$ is one of its quotients, $M$ is a direct summand of $R_{L_{\gamma'}}^{G}(N')$, so the composite of the surjection $R_{L_\gamma}^{G}(N)\twoheadrightarrow M$ with an inclusion $M\hookrightarrow R_{L_{\gamma'}}^{G}(N')$ is a nonzero $G$-linear map and $\operatorname{Hom}_G\bigl(R_{L_\gamma}^{G}(N),R_{L_{\gamma'}}^{G}(N')\bigr)\ne0$. By adjunction [L2] this space is isomorphic to $\operatorname{Hom}_{L_\gamma}\bigl(N,{}^*\!R_{L_\gamma}^{G}(R_{L_{\gamma'}}^{G}(N'))\bigr)$, and the Mackey formula [L6] applied to the $L_{\gamma'}$-module $N'$ rewrites the inner restriction as a direct sum, so that $$0\ne\bigoplus_{\rho\in\mathcal D}\operatorname{Hom}_{L_\gamma}\bigl(N,\,R_{C_\rho}^{L_\gamma}\bigl(({}^\rho N')^{D_\rho}\bigr)\bigr),$$ with $C_\rho=L_\gamma\cap w_\rho L_{\gamma'}w_\rho^{-1}$, $D_\rho=U_\gamma\cap w_\rho L_{\gamma'}w_\rho^{-1}$, $A_\rho=L_\gamma\cap w_\rho U_{\gamma'}w_\rho^{-1}$ with intersected parabolics in $w_\rho L_{\gamma'}w_\rho^{-1}$ and $L_\gamma$, respectively, as in [L6]; hence there is $\rho\in\mathcal D$ with $\operatorname{Hom}_{L_\gamma}(N,R_{C_\rho}^{L_\gamma}(Y_\rho))\ne0$ for $Y_\rho:=({}^\rho N')^{D_\rho}$, a complex $C_\rho$-module. [L2, L6, L7, given]

2.1 **$M^{U_\gamma}$ is cuspidal.** Let $\delta$ be a proper refinement of $\gamma$, listed block by block in the order of $\gamma$, as [L4] allows. Then $L_\delta\le L_\gamma$ and $U_\delta=U_\gamma\rtimes(U_\delta\cap L_\gamma)$ with $M^{U_\delta}=(M^{U_\gamma})^{U_\delta\cap L_\gamma}$ by [L4] and [L5]. If $\delta\in\mathcal S$ then $L_\delta=L_\gamma$ by step 1.1; but a proper refinement $\delta$ of $\gamma$ has $L_\delta\ne L_\gamma$, since the two set partitions differ and so some two indices lie in a common block of exactly one of them, whence the transposition matrix $w_{(kl)}$ lies in exactly one of $L_\delta,L_\gamma$ by [L3]. Hence $\delta\notin\mathcal S$, that is $M^{U_\delta}=0$, and therefore $(M^{U_\gamma})^{U_\delta\cap L_\gamma}=0$. For an arbitrary proper refinement $\delta'$ of $\gamma$, let $\delta$ be the rearrangement of $\delta'$ that lists blocks block by block in the order of $\gamma$; the defining entry conditions for $P_{\delta'}\cap L_\gamma$ and $P_\delta\cap L_\gamma$ on a $\gamma$-block diagonal matrix involve only the relative order of the blocks of $\delta'$ inside each block of $\gamma$, which the rearrangement preserves, so $P_{\delta'}\cap L_\gamma=P_\delta\cap L_\gamma$ and hence $U_{\delta'}\cap L_\gamma=U_\delta\cap L_\gamma$ by [L3], [L4]. Therefore ${}^*\!R_{L_{\delta'}}^{L_\gamma}(M^{U_\gamma})=(M^{U_\gamma})^{U_{\delta'}\cap L_\gamma}=0$ for every proper refinement $\delta'$ of $\gamma$, and $M^{U_\gamma}$ is a cuspidal $L_\gamma$-module by [L4]. [L3, L4, L5, step 1.1]

3.1 **A simple cuspidal submodule.** The module $M^{U_\gamma}$ is nonzero, finite-dimensional and complex, so it is completely reducible and hence a direct sum of simple submodules by [L7]; fix a simple $L_\gamma$-submodule $N\subseteq M^{U_\gamma}$ with $N\ne0$. For every proper refinement $\delta$ of $\gamma$ the inclusion $N\hookrightarrow M^{U_\gamma}$ gives an inclusion ${}^*\!R_{L_\delta}^{L_\gamma}(N)\hookrightarrow{}^*\!R_{L_\delta}^{L_\gamma}(M^{U_\gamma})=0$ by exactness [L8] and step 2.1, so ${}^*\!R_{L_\delta}^{L_\gamma}(N)=0$ and the simple module $N$ is cuspidal; hence $(L_\gamma,N)$ is a cuspidal pair by [L4]. [L4, L7, L8, step 2.1]

4.1 **$M$ lies in the series.** The inclusion $N\subseteq M^{U_\gamma}={}^*\!R_{L_\gamma}^{G}(M)$ is a nonzero $L_\gamma$-linear map from $N$ to ${}^*\!R_{L_\gamma}^{G}(M)$, so its image under the adjunction bijection of [L2] is a nonzero $G$-linear map $R_{L_\gamma}^{G}(N)\to M$. The image of that map is a nonzero submodule of the simple module $M$ and therefore equals $M$, so the map is surjective and $M\in\operatorname{Irr}(G\,|\,(L_\gamma,N))$ by [L4]. [L1, L2, L4, L7, step 3.1]

4.2 **Terms over a proper Levi vanish.** Let $C\le L_\gamma$ be a proper coordinate Levi, say $C=L_\eta$ with $\eta$ a proper refinement of $\gamma$, let $A=U_\eta\cap L_\gamma$ be the radical of the coordinate parabolic $P_\eta\cap L_\gamma=L_\eta\ltimes(U_\eta\cap L_\gamma)$ of $L_\gamma$ by [L4], and let $Y$ be a complex $C$-module. Then $\operatorname{Hom}_{L_\gamma}(R_C^{L_\gamma}(Y),N)\cong\operatorname{Hom}_C(Y,{}^*\!R_C^{L_\gamma}(N))=\operatorname{Hom}_C(Y,N^{A})=0$ by adjunction [L2] applied to the parabolic $P_\eta\cap L_\gamma$ of $L_\gamma$ and by the assumed cuspidality of $N$ from [L4]. Since $R_C^{L_\gamma}(Y)$ is completely reducible by [L7] and $N$ is simple, both $\operatorname{Hom}_{L_\gamma}(N,R_C^{L_\gamma}(Y))$ and $\operatorname{Hom}_{L_\gamma}(R_C^{L_\gamma}(Y),N)$ have dimension equal to the multiplicity of $N$ in $R_C^{L_\gamma}(Y)$, by Schur's lemma [L7]; hence $\operatorname{Hom}_{L_\gamma}(N,R_C^{L_\gamma}(Y))=0$ as well. [L2, L4, L7, step 3.1]

5.1 **The contributing double coset has Levi $L_\gamma$.** In the nonzero Hom-space of step 1.3 the group $C_\rho=L_\gamma\cap w_\rho L_{\gamma'}w_\rho^{-1}$ is the coordinate Levi $L_\eta$ of $L_\gamma$ for the ordered partition $\eta$ whose blocks are the nonempty intersections of a block of $\gamma$ with a block of $\rho(\gamma')$ and which lists its blocks block by block in the order of $\gamma$: a matrix is block diagonal for both $\gamma$ and $\rho(\gamma')$ exactly when it is block diagonal for the common refinement $\eta$ by [L3], and $L_\eta\le L_\gamma$ with $L_\eta\le L_{\rho(\gamma')}$ by [L4]. Similarly the parabolic $L_\gamma\cap w_\rho P_{\gamma'}w_\rho^{-1}=C_\rho\ltimes A_\rho$ of [L6] equals $P_\eta\cap L_\gamma=L_\eta\ltimes(U_\eta\cap L_\gamma)$, so that $A_\rho=U_\eta\cap L_\gamma$: a matrix $g$ lies in $L_\gamma\cap w_\rho P_{\gamma'}w_\rho^{-1}$ exactly when it is $\gamma$-block diagonal and satisfies the entry conditions $\operatorname{blk}_{\rho(\gamma')}(k)\le\operatorname{blk}_{\rho(\gamma')}(l)$ for all pairs with $g_{kl}\ne0$, and on a $\gamma$-block diagonal matrix the conditions of [L3] for $P_\eta$ reduce to the same requirements, because the entries of $g$ outside a single block of $\gamma$ vanish and the blocks of $\rho(\gamma')$ meeting a block of $\gamma$ occur in $\eta$ in their order of $\rho(\gamma')$. Since $Y_\rho=({}^\rho N')^{D_\rho}$ is a complex $C_\rho$-module and the induction in the summand of step 1.3 is along $L_\gamma\cap w_\rho P_{\gamma'}w_\rho^{-1}=C_\rho\ltimes A_\rho$ by [L6], step 4.2 with $C=C_\rho$ shows that $C_\rho\ne L_\gamma$ is impossible; hence $C_\rho=L_\gamma$, that is $L_\gamma\le w_\rho L_{\gamma'}w_\rho^{-1}$ and $d(\gamma)\le d(\gamma')$. [L3, L4, L6, step 1.3, step 4.2]

6.1 **The reverse inequality.** The argument of steps 1.3, 4.2 and 5.1 applied to the same $M$ with the two pairs interchanged uses $\operatorname{Hom}_G(R_{L_{\gamma'}}^{G}(N'),R_{L_\gamma}^{G}(N))\ne0$, which holds because $M$ is a quotient of $R_{L_{\gamma'}}^{G}(N')$ and a direct summand of the completely reducible module $R_{L_\gamma}^{G}(N)$ by [L7]; expanding $0\ne\operatorname{Hom}_{L_{\gamma'}}(N',{}^*\!R_{L_{\gamma'}}^{G}(R_{L_\gamma}^{G}(N)))$ by [L2] and the Mackey formula [L6], and discarding the summands over proper coordinate Levis of $L_{\gamma'}$ by step 4.2 with $N'$ in place of $N$ (which is cuspidal by [L4]), yields $d(\gamma')\le d(\gamma)$. Hence $d(\gamma)=d(\gamma')$, and the inclusion of step 5.1 is an equality: $L_\gamma=w_\rho L_{\gamma'}w_\rho^{-1}$ for the $\rho\in\mathcal D$ of step 1.3. With $\tau:=\rho^{-1}\in S_n$ and $w_\tau=w_\rho^{-1}$ by [L9] this reads $w_\tau L_\gamma w_\tau^{-1}=L_{\gamma'}$, that is $L_{\tau(\gamma)}=L_{\gamma'}$ by [L3], so that $\gamma'$ and $\tau(\gamma)$ have the same blocks. [L2, L3, L4, L6, L7, L9, step 5.1]

7.1 **The modules are transported.** In the summand of step 1.3 with $C_\rho=L_\gamma$ the group $w_\rho L_{\gamma'}w_\rho^{-1}$ equals $L_\gamma$ by step 6.1, so $D_\rho=U_\gamma\cap w_\rho L_{\gamma'}w_\rho^{-1}=U_\gamma\cap L_\gamma=\{I_n\}$, $A_\rho=L_\gamma\cap w_\rho U_{\gamma'}w_\rho^{-1}\subseteq w_\rho L_{\gamma'}w_\rho^{-1}\cap w_\rho U_{\gamma'}w_\rho^{-1}=w_\rho(L_{\gamma'}\cap U_{\gamma'})w_\rho^{-1}=\{I_n\}$, the parabolic $L_\gamma\cap w_\rho P_{\gamma'}w_\rho^{-1}=C_\rho\ltimes A_\rho$ is $L_\gamma$, the functor $R_{C_\rho}^{L_\gamma}=R_{L_\gamma}^{L_\gamma}$ is the identity of [L1], and $Y_\rho=({}^\rho N')^{D_\rho}={}^\rho N'$ is the transport of $N'$ to $L_\gamma$ by [L4]. Step 1.3 therefore gives $\operatorname{Hom}_{L_\gamma}(N,(N')^\rho)\ne0$; as $N$ and $(N')^\rho$ are simple $L_\gamma$-modules, $N\cong(N')^\rho$ by Schur's lemma [L7]. Transporting this isomorphism by $\tau=\rho^{-1}$ and using $(Y^\rho)^{\rho^{-1}}\cong Y$ of [L4] gives $N^\tau\cong N'$, so that the pairs are conjugate in the sense of claim 2. [L1, L3, L4, L7, step 1.3, step 6.1]

8.1 **The partition of the irreducibles.** By step 4.1 every simple complex $G$-module $M$ lies in the series of at least one cuspidal pair, and by step 7.1 any two cuspidal pairs whose series both contain $M$ are conjugate in the sense of claim 2; conversely step 1.2 shows that conjugate pairs have their series matched by the transport bijection, so that pairs in one conjugacy class carry the same irreducibles. Hence the assignment to $M$ of the conjugacy class of a cuspidal pair $(L_\gamma,N)$ with $M\in\operatorname{Irr}(G\,|\,(L_\gamma,N))$ is well defined, series attached to pairwise non-conjugate cuspidal pairs are pairwise disjoint, and the unions of the series over one conjugacy class partition $\operatorname{Irr}(\mathbb CG)$. This proves all three claims. ∎ [step 4.1, step 1.2, step 7.1, algebra]

## Remarks

The theorem is the complex case of Dudas and Michel, Lemma 10.3 and
Proposition 10.6: they take an algebraic Levi of least dimension such that
${}^*\!R_L^{G^F}(M)\ne0$, deduce that ${}^*\!R_L^{G^F}(M)$ is cuspidal from
transitivity of parabolic restriction and exactness, and prove uniqueness by
applying the Mackey formula together with cuspidality to the two cuspidal pairs
and their common constituent. Over $\mathbb C$ their use of projective covers,
which is needed to make the argument work over an arbitrary field, is replaced
above by the complete reducibility of [L7]; this is why no hypothesis on
projective modules appears. Taylor, Proposition 5.9, contains the same existence
and uniqueness statements for the standard Levis of a fixed split BN-pair.

Two conventions of this page enter the formulation. First, all Levis are
coordinate Levis $L_\gamma$ of ordered partitions. This is not a restriction of
the conjugacy statement, because by [L3] the conjugating element can be taken to
be a permutation matrix $w_\sigma$, so that the conjugate of a coordinate Levi
is again a coordinate Levi. Second, the class of parabolics containing the
diagonal torus is strictly larger than the class of coordinate parabolics when
$q=2$ ([[def-coordinate-parabolics-for-ordered-partitions]]); the theorem
quantifies only over coordinate parabolics and coordinate Levis, and so is
unaffected by that exception. The proof also uses that the parabolic of
$L_\gamma$ occurring in the Mackey formula is a coordinate parabolic of
$L_\gamma$ with coordinate Levi $C_\rho$, and this is verified directly in
step 5.1 of the proof above.

The argument for compatibility with Harish-Chandra induction in Dudas and
Michel is the following consequence of transitivity, and it holds in the
present setting: if $L_\gamma\le L_{\gamma'}$ are coordinate Levis listed
compatibly and $M$ is an irreducible $L_{\gamma'}$-module in
$\operatorname{Irr}(L_{\gamma'}\,|\,(L_\gamma,N))$, so that
$R_{L_\gamma}^{L_{\gamma'}}(N)\twoheadrightarrow M$, then
$R_{L_{\gamma'}}^{G}(M)$ is a quotient of
$R_{L_{\gamma'}}^{G}(R_{L_\gamma}^{L_{\gamma'}}(N))\cong R_{L_\gamma}^{G}(N)$,
because induction preserves surjections — it is $(\mathbb C[G/U]\otimes_{\mathbb C L}(-))$
and the balanced product of a surjection of modules with a fixed module is
surjective. Hence every irreducible constituent of $R_{L_{\gamma'}}^{G}(M)$
lies in $\operatorname{Irr}(G\,|\,(L_\gamma,N))$, as asserted at the end of the
Harish-Chandra series discussion in Dudas and Michel.
