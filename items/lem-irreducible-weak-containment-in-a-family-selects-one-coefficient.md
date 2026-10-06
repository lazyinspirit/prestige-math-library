---
id: lem-irreducible-weak-containment-in-a-family-selects-one-coefficient
kind: lemma
title: Irreducible weak containment in a family selects one coefficient
deps:
  - def-weak-star-topology
  - def-weak-containment-of-unitary-representations
  - def-continuous-function-of-positive-type
  - def-matrix-coefficient-of-a-unitary-representation
  - def-hilbert-direct-sum-of-unitary-representations
  - def-cyclic-vector-and-cyclic-unitary-representation
  - def-strongly-continuous-unitary-representation
  - lem-irreducible-group-vector-functionals-are-extreme-in-the-positive-dual-ball
  - lem-positive-type-functions-satisfy-translation-estimates
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - def-full-group-c-star-algebra
  - def-state-on-a-c-star-algebra
  - thm-milman-converse-for-compact-generating-sets
  - thm-raikov-compact-open-and-weak-star-topologies-coincide-on-normalized-positive-type-functions
  - def-fell-topology-on-the-unitary-dual
  - thm-banach-alaoglu
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-axiom-of-choice
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the extreme-point supplier, the Hilbert direct sum, Raikov's theorem and the finitely many group elements chosen in the cyclicity argument; no further choice is used."
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix C, Proposition C.5.1 and its complete domination proof; Appendix F, Proposition F.1.4 and complete proof; Appendix C, Theorem C.5.6 and complete proof"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Propositions 8.B.3-8.B.4 and Remark 8.B.6, complete sections 1.C and 8.B read"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group with a fixed left Haar
measure and let $(\rho_s)_{s\in S}$ be a set-indexed family of nonzero
strongly continuous unitary representations of $G$
([[def-strongly-continuous-unitary-representation]]). Let $\pi$ be an
irreducible strongly continuous unitary representation with
$\pi\prec\widehat\bigoplus_{s\in S}\rho_s$
([[def-weak-containment-of-unitary-representations]],
[[def-hilbert-direct-sum-of-unitary-representations]]). Then:

1. for every unit vector $\xi\in H_\pi$, every compact $Q\subseteq G$ and every
   $\epsilon>0$ there are $s\in S$ and a unit vector $\eta\in H_{\rho_s}$ with
   $$\sup_{g\in Q}\bigl|\langle\pi(g)\xi,\xi\rangle-\langle\rho_s(g)\eta,\eta\rangle\bigr|<\epsilon;$$
2. for all vectors $\xi_1,\dots,\xi_n\in H_\pi$, every compact $Q\subseteq G$
   and every $\epsilon>0$ there are a single $s\in S$ and vectors
   $\eta_1,\dots,\eta_n\in H_{\rho_s}$ (not required to be normalized) with
   $$\sup_{g\in Q}\bigl|\langle\pi(g)\xi_i,\xi_i\rangle-\langle\rho_s(g)\eta_i,\eta_i\rangle\bigr|<\epsilon\qquad(i=1,\dots,n);$$
3. if every $\rho_s$ is irreducible, then the class $[\pi]$ lies in the
   closure of $\{[\rho_s]:s\in S\}$ in the Fell topology
   ([[def-fell-topology-on-the-unitary-dual]]).

## Facts & Assumptions

**Given:** AC; an LCH group $G$ with fixed left Haar measure; a family $(\rho_s)_{s\in S}$ of nonzero unitary representations; an irreducible unitary representation $\pi$ with $\pi\prec\widehat\bigoplus_s\rho_s$; $A=C^*(G)$.

[F1] Weak containment means: for every $\xi\in H_\pi$, compact $Q\subseteq G$ and $\epsilon>0$ there are finitely many $\eta_1,\dots,\eta_n\in H_{\widehat\bigoplus_s\rho_s}$ with $\sup_{g\in Q}|\langle\pi(g)\xi,\xi\rangle-\sum_l\langle(\widehat\bigoplus_s\rho_s)(g)\eta_l,\eta_l\rangle|<\epsilon$ ([[def-weak-containment-of-unitary-representations]], [[def-continuous-function-of-positive-type]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F2] On the Hilbert direct sum, a finitely supported vector $v=\sum_{s\in F}v_s$ has coefficient $\langle(\widehat\bigoplus_s\rho_s)(g)v,v\rangle=\sum_{s\in F}\langle\rho_s(g)v_s,v_s\rangle$, and $(\widehat\bigoplus_s\rho_s)$ is again a strongly continuous unitary representation; every diagonal coefficient $\varphi(g)=\langle\rho(g)\eta,\eta\rangle$ satisfies $\varphi(e)=\|\eta\|^2$ and $|\varphi(g)|\le\|\eta\|^2$ ([[def-hilbert-direct-sum-of-unitary-representations]], [[def-matrix-coefficient-of-a-unitary-representation]], [[lem-positive-type-functions-satisfy-translation-estimates]]).

[F3] Every unitary representation of $G$ extends to a nondegenerate star-representation of $A$ with $\|\rho(a)\|\le\|a\|$; hence for a unit vector $\eta$ the functional $\omega_{\rho,\eta}(a)=\langle\rho(a)\eta,\eta\rangle$ is positive and satisfies $\|\omega_{\rho,\eta}\|\le1$, that is, it lies in $K=\{\omega\in A^*:\|\omega\|\le1,\ \omega\ge0\}$ ([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]], [[def-full-group-c-star-algebra]], [[def-state-on-a-c-star-algebra]]).

[F4] $K$ is weak-\* compact and convex ([[thm-banach-alaoglu]]); the functional $\omega:=\omega_{\pi,\xi}$ belongs to $K$, has norm $1$ and is extreme in $K$ ([[lem-irreducible-group-vector-functionals-are-extreme-in-the-positive-dual-ball]]).

[F5] Milman's converse: if $K$ is compact convex in a locally convex Hausdorff space and $K=\overline{\operatorname{co}}(A)$, then $\operatorname{ext}K\subseteq\overline A$ ([[thm-milman-converse-for-compact-generating-sets]]). Its ambient weak-* dual is locally convex and Hausdorff: its neighbourhoods are finite intersections of sets $|\psi(a_j)|<\epsilon$, which are convex, and evaluations separate distinct functionals ([[def-weak-star-topology]]).

[F6] Raikov's theorem: on normalized continuous functions of positive type, weak-\* convergence against $L^1(G)$ coincides with uniform convergence on compact subsets ([[thm-raikov-compact-open-and-weak-star-topologies-coincide-on-normalized-positive-type-functions]]).

[F7] The Fell topology on the unitary dual has as basic neighbourhoods of $[\pi]$ the sets $W(\pi;\phi_1,\dots,\phi_N,Q,\epsilon)$ of classes $[\rho]$ such that each tested single diagonal coefficient $\phi_i$ of $\pi$ is within $\epsilon$ on $Q$ of a finite sum of functions of positive type associated to $\rho$ ([[def-fell-topology-on-the-unitary-dual]]).

[F8] $C_c(G)$ is dense in $L^1(G)$ ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F9] In an irreducible representation every nonzero vector is cyclic: for $\xi\ne0$ the closed span of $\{\pi(x)\xi:x\in G\}$ is a nonzero closed invariant subspace ([[def-cyclic-vector-and-cyclic-unitary-representation]], [[def-strongly-continuous-unitary-representation]]).

[F10] Coefficient perturbation: $|\langle\rho(g)\xi,\xi\rangle-\langle\rho(g)v,v\rangle|\le(\|\xi\|+\|v\|)\|\xi-v\|$ for unitary $\rho$, and $|\langle\pi(g)v_i,v_i\rangle-\langle\rho_s(g)w_i,w_i\rangle|\le\delta\sum_{j,k}|c_{ij}c_{ik}|$ if the tested single coefficients differ by at most $\delta$ uniformly ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$ with left Haar measure, a family $(\rho_s)_{s\in S}$ of nonzero unitary representations, an irreducible unitary representation $\pi$ with $\pi\prec\widehat\bigoplus_s\rho_s$, and $A=C^*(G)$.

1.1 If $S=\varnothing$ the direct sum is the zero representation and $\pi\prec0$ is impossible, because the unit coefficient $\langle\pi(\cdot)\xi,\xi\rangle$ takes the value $1$ at $e$ and cannot be approximated by $0$ on the compact set $\{e\}$; hence $S\ne\varnothing$ and $F:=\{\omega_{\rho_s,\eta}:s\in S,\ \eta\in H_{\rho_s},\ \|\eta\|=1\}$ is a nonempty subset of $K$ by [F3]. The functional $\omega:=\omega_{\pi,\xi}$ lies in $K$, has norm $1$ and is extreme in $K$ by [F4]. [F2, F3, F4]

2.1 For every compact $Q\subseteq G$ and $\epsilon>0$, a convex combination of $F$ approximates $\omega$ within $\epsilon$ on $Q$. Fix $0<\delta<1/4$ so that $4\delta/(1-2\delta)<\epsilon$, and apply [F1] on $Q\cup\{e\}$ with error $\delta$. This gives finitely many vectors $\eta_l$ in the Hilbert direct sum. Truncate each $\eta_l$ to finitely many summands so that the sum of the uniform coefficient errors is $<\delta$: this is possible by norm density of finitely supported vectors and the estimate $|c_{\eta_l,\eta_l}-c_{v_l,v_l}|\le(\|\eta_l\|+\|v_l\|)\|\eta_l-v_l\|$. Write the resulting finite coefficient sum as $\psi(g)=\sum_{l,s}\langle\rho_s(g)v_l^{(s)},v_l^{(s)}\rangle$, retaining each pair $(l,s)$ separately. Then $\sup_{Q\cup\{e\}}|\psi-\omega|<2\delta$. Put $t=\sum_{l,s}\|v_l^{(s)}\|^2=\psi(e)$, so $|t-1|<2\delta$ and $t>0$. Dividing each nonzero vector by its norm shows that $\phi:=\psi/t$ is the convex combination of normalized vector states with weights $\|v_l^{(s)}\|^2/t$. Finally $|\phi-\omega|\le(|\psi-\omega|+|1-t||\omega|)/t<4\delta/(1-2\delta)<\epsilon$ on $Q$. [F1, F2, F10, step 1.1]

3.1 The functional $\omega$ lies in the weak-\* closure $C$ of $\operatorname{co}(F)$ in $A^*$. Let $f_1,\dots,f_N\in L^1(G)$ and $\eta>0$. By [F8] choose compactly supported continuous $g_i$ with $\|f_i-g_i\|_1<\eta/12$, and put $Q:=\bigcup_i\operatorname{supp}g_i$, a compact set with $2\int_{G\setminus Q}|f_i|<\eta/3$ for every $i$. By step 2.1 choose $\phi\in\operatorname{co}(F)$ with $\sup_Q|\phi-\omega|<\eta/(3+3\sum_i\|f_i\|_1)$; then, since $|\phi-\omega|\le2$ on $G$ and each $\phi\in\operatorname{co}(F)$ lies in $K$ by convexity [F4], $\bigl|\int_Gf_i(\phi-\omega)\bigr|\le\|f_i\|_1\sup_Q|\phi-\omega|+2\int_{G\setminus Q}|f_i|<\eta$ for every $i$. The image of $L^1(G)$ is dense in $A$ and $\|\phi\|,\|\omega\|\le1$, so the same conclusion holds with $f_i$ replaced by arbitrary $a_i\in A$: every weak-\* neighbourhood of $\omega$ meets $\operatorname{co}(F)$, that is, $\omega\in C$. [F4, F8, step 2.1]

4.1 Since $C=\overline{\operatorname{co}}(F)\subseteq K$ is weak-\* closed and convex and $K$ is compact by [F4], $C$ is compact. By step 1.1 the functional $\omega$ is extreme in $K$ and $\omega\in C$ by step 3.1, so $\omega$ is extreme in $C$; Milman's converse [F5] applied to the compact convex set $C=\overline{\operatorname{co}}(F)$ gives $\omega\in\overline F$. Hence there is a net $(\phi_\alpha)\subseteq F$ converging to $\omega$ in the weak-\* topology of $A^*$. [F4, F5, step 1.1, step 3.1]

5.1 Part 1 of the statement holds. Each $\phi_\alpha$ is $\omega_{\rho_{s(\alpha)},\eta(\alpha)}$ for some $s(\alpha)\in S$ and unit vector $\eta(\alpha)\in H_{\rho_{s(\alpha)}}$; its restriction to $L^1(G)$ is integration against the normalized coefficient $\psi_\alpha(g)=\langle\rho_{s(\alpha)}(g)\eta(\alpha),\eta(\alpha)\rangle\in P_1(G)$, and $\int_Gf\psi_\alpha\to\int_Gf\,\omega_{\pi,\xi}(g)\,dg$ for every $f\in L^1(G)$ because $\phi_\alpha\to\omega$ weak-\* on $A$. By Raikov's theorem [F6] the net $(\psi_\alpha)$ converges to the coefficient $\langle\pi(\cdot)\xi,\xi\rangle$ uniformly on compact subsets, so for the prescribed compact $Q$ and $\epsilon$ some $\alpha$ has $\sup_Q|\psi_\alpha(g)-\langle\pi(g)\xi,\xi\rangle|<\epsilon$; with $s=s(\alpha)$ and $\eta=\eta(\alpha)$ this is the first assertion. [F6, step 4.1]

6.1 Part 2 of the statement holds. If the tested vector list is empty, choose any $s\in S$, which is nonempty by step 1.1, and the assertion is vacuous. Otherwise fix a unit vector $\xi\in H_\pi$, which exists since $\pi$ is irreducible and hence acts on a nonzero space. For each $i$ with $\xi_i\ne0$, cyclicity [F9] (applied to the nonzero vector $\xi$) gives $c_{ij}\in\mathbb C$ and $x_{ij}\in G$ with $v_i:=\sum_jc_{ij}\pi(x_{ij})\xi$ satisfying $\|\xi_i-v_i\|<\min(1,\epsilon/(4(1+\|\xi_i\|)))$. Then $\|v_i\|\le\|\xi_i\|+1$, so $(\|\xi_i\|+\|v_i\|)\|\xi_i-v_i\|<\epsilon/2$ by [F10]; for $\xi_i=0$ take $v_i=0$. Put $M_i=(\sum_j|c_{ij}|)^2$ and $M=1+\max_iM_i$, and apply part 1 to the compact set $\bigcup_{i,j,k}x_{ik}^{-1}Qx_{ij}$ with radius $\delta=\epsilon/(2M)$: this gives $s\in S$ and a unit vector $\eta\in H_{\rho_s}$ with $\sup|\langle\pi(h)\xi,\xi\rangle-\langle\rho_s(h)\eta,\eta\rangle|<\delta$ over that union. Set $w_i:=\sum_jc_{ij}\rho_s(x_{ij})\eta$. Expanding, $\langle\pi(g)v_i,v_i\rangle=\sum_{j,k}c_{ij}\bar c_{ik}\langle\pi(x_{ik}^{-1}gx_{ij})\xi,\xi\rangle$ and $\langle\rho_s(g)w_i,w_i\rangle=\sum_{j,k}c_{ij}\bar c_{ik}\langle\rho_s(x_{ik}^{-1}gx_{ij})\eta,\eta\rangle$, so on $Q$ the two coefficients differ by at most $\delta M_i<\epsilon/2$ by [F2] and [F10]; combined with the perturbation bound $|\langle\pi(g)\xi_i,\xi_i\rangle-\langle\pi(g)v_i,v_i\rangle|\le(\|\xi_i\|+\|v_i\|)\|\xi_i-v_i\|<\epsilon/2$ of [F10] this yields $\sup_Q|\langle\pi(g)\xi_i,\xi_i\rangle-\langle\rho_s(g)w_i,w_i\rangle|<\epsilon$ for every $i$. [F2, F9, F10, step 1.1, step 5.1]

7.1 Part 3 of the statement holds. Let $W(\pi;\phi_1,\dots,\phi_N,Q,\epsilon)$ be a basic Fell neighbourhood of $[\pi]$ [F7]; if $N=0$ the neighbourhood is the whole dual and meets the nonempty family. Otherwise write each tested function as $\phi_i(g)=\langle\pi(g)\xi_i,\xi_i\rangle$. Applying step 6.1 to $\xi_1,\dots,\xi_N$ with precision $\epsilon$ gives one $s\in S$ and vectors $\eta_i\in H_{\rho_s}$ whose individual diagonal coefficients approximate the corresponding $\phi_i$ on $Q$ within $\epsilon$; each is an allowed one-term approximating sum. Hence $[\rho_s]\in W$; since every basic neighbourhood of $[\pi]$ is met by $\{[\rho_s]:s\in S\}$, the class $[\pi]$ lies in the closure of that set when all $\rho_s$ are irreducible (so that their classes lie in the dual). [F7, step 6.1]

8.1 The Axiom of Choice is inherited from the extreme-point supplier, the Hilbert direct sum, Raikov's theorem and the finitely many group elements selected in the cyclicity argument; the coefficient and convexity computations are choice-free ([[def-axiom-of-choice]]). [given] ∎ 