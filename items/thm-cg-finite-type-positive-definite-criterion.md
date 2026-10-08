---
id: thm-cg-finite-type-positive-definite-criterion
kind: theorem
title: "Finiteness criterion: W is finite exactly when the Coxeter form is positive definite"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 13
deps: [lem-cg-diagram-products-and-invariant-form-comparison, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, def-cg-dual-chambers-and-reflection-hyperplanes, lem-cg-dual-action-and-chamber-faces-exist, thm-cg-root-length-criterion-and-faithfulness, thm-cg-dual-chamber-intersections-and-point-stabilizers, def-hh-coxeter-matrix-word-group-and-length, def-definiteness-inertia-and-signature-data-over-the-reals, def-bilinear-symmetric-skew-and-alternating-forms, thm-bilinear-forms-correspond-to-linear-maps-into-the-dual, def-linear-isomorphism-and-invertible-linear-map, def-linear-map, def-vector-space-of-linear-maps, def-algebraic-dual-and-linear-functional, def-dual-family-associated-to-a-basis, thm-dual-family-is-a-basis-in-finite-dimension, def-linear-basis, def-generated-subgroup, def-group, def-metric-continuity, thm-metric-continuity-characterisations, def-metric-compactness, thm-heine-borel-rn, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, def-norm-and-normed-space, lem-metrics-on-rn, def-metric-bounded-diameter, def-metric-ball, def-metric-topology, def-metric-space, def-coordinate-column-and-matrix-of-a-linear-map, thm-continuous-image-of-a-compact-space-is-compact, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-inner-product-norm, cor-triangle-inequality-for-inner-product-norm, lem-algebra-of-continuous-real-maps-on-a-space, cor-inverse-matrix-by-adjugate, thm-rank-nullity, thm-dimension-of-a-linear-subspace, thm-laplace-cofactor-expansion, thm-metric-open-set-algebra, lem-compactness-is-intrinsic]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Theorem 6.12.9 with its proof (printed pp. 119-120) for the equivalence of finiteness, positive definiteness and the reflection-group condition; Corollary D.1.3 and Theorem D.1.1 (printed p. 440) for discreteness of the canonical image via collision of open chambers; Corollary 6.12.11 (printed p. 120) for faithfulness of the canonical representation"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Proposition 5.14 and the proof of its part (ii), printed pp. 12-13: 'if B(Gamma) is definite positive its orthogonal group is compact and W is a discrete subgroup of this orthogonal group, thus finite', with the discreteness neighbourhood {g : g(x) in C} for x in C"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S$ be a finite set with Coxeter matrix $m$, presented group $W$, length
function $\ell$ and diagram $\Gamma$
([[def-hh-coxeter-matrix-word-group-and-length]],
[[def-cg-coxeter-diagram-components-and-finite-type]]); let $V=\mathbb R^S$
carry the Coxeter form $B$ with reflections $r_a$
([[def-cg-real-coxeter-form-and-reflection]]), let
$\rho:W\to\mathrm{GL}(V)$ be the canonical reflection homomorphism
([[def-cg-canonical-reflection-homomorphism]]), and let $V^*$ be the algebraic
dual with its dual action, the closed chamber $C$ and its interior $C^\circ$
([[def-cg-dual-chambers-and-reflection-hyperplanes]],
[[lem-cg-dual-action-and-chamber-faces-exist]]).

**(1) Finiteness criterion.** $W$ is finite if and only if $B$ is positive
definite ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

**(2) The dual form.** Assume $B$ is positive definite. Then
$b:V\to V^*$, $b(v):=B(v,\cdot)$, is a linear isomorphism, and
$B^*(f,g):=B(b^{-1}f,b^{-1}g)$ defines a positive definite symmetric bilinear
form $B^*$ on $V^*$; for every $w\in W$ the dual map $\rho^*(w)$ preserves
$B^*$: $B^*(w\cdot f,w\cdot g)=B^*(f,g)$ for all $f,g\in V^*$.

**(3) Isolation of the identity and discreteness.** For every $f\in C^\circ$
the set $\Omega_f:=\{h\in\mathrm{GL}(V^*):h\cdot f\in C^\circ\}$ is an open
neighbourhood of $\mathrm{id}_{V^*}$ in $\mathrm{GL}(V^*)$ and
$\Omega_f\cap\rho^*(W)=\{\mathrm{id}\}$. Consequently $\rho^*(W)$ is a discrete
subgroup of $\mathrm{GL}(V^*)$, and $\rho(W)$ is a discrete subgroup of
$\mathrm{GL}(V)$. This clause uses no positive definiteness of $B$.

## Facts & Assumptions

**Given:** A finite set $S$ with Coxeter matrix $m$, the presented group $W$ with length $\ell$, the diagram $\Gamma$, the space $V=\mathbb R^S$ with Coxeter form $B$, the canonical homomorphism $\rho$, the dual space $V^*$ with the dual action, the chambers $C,C^\circ$ and the sets $S(f)=\{s\in S:f(e_s)=0\}$.

[F1] If $W$ is finite then $B$ is positive definite ([[lem-cg-diagram-products-and-invariant-form-comparison]] (4)).

[F2] $B$ is the unique symmetric bilinear form on $V$ with $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$, respectively $B(e_s,e_t)=-1$ for $m(s,t)=\infty$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F3] $\rho:W\to\mathrm{GL}(V)$ is a homomorphism with $\rho(s)=r_{e_s}$, and $B(\rho(w)u,\rho(w)u')=B(u,u')$ for all $w\in W$ ([[def-cg-canonical-reflection-homomorphism]], [[lem-cg-reflection-representation-descends-and-root-norms]]).

[F4] The dual action is $(w\cdot f)(v)=f(\rho(w)^{-1}v)$; the closed chamber is $C=\{f:f(e_s)\ge0\ \forall s\}$, its interior is $C^\circ=\{f:f(e_s)>0\ \forall s\}$, and $S(f)=\{s:f(e_s)=0\}$ ([[def-cg-dual-chambers-and-reflection-hyperplanes]]).

[F5] The dual action is an action by linear maps, and every face of $C$ is nonempty; in particular $C^\circ\ne\emptyset$ ([[lem-cg-dual-action-and-chamber-faces-exist]]).

[F6] $\rho$ is injective, the dual action $W\to\mathrm{GL}(V^*)$ is injective, and if $w\ne1$ there is $s\in S$ with $\rho(w)e_s$ negative in the root decomposition ([[thm-cg-root-length-criterion-and-faithfulness]] (3)).

[F7] If $f,g\in C$, $w\in W$ and $w\cdot f=g$, then $f=g$ and $w\in W_{S(f)}$; moreover $\operatorname{Stab}_W(f)=W_{S(f)}$ for $f\in C$ ([[thm-cg-dual-chamber-intersections-and-point-stabilizers]] (3),(4)).

[F8] $B$ is positive definite when $B(v,v)>0$ for every $v\ne0$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F9] $V^*$ is the vector space of linear functionals $V\to\mathbb R$; for every bilinear form the map $v\mapsto B(v,\cdot)$ is linear $V\to V^*$, rank-nullity implies that an injective linear map between spaces of equal finite dimension is an isomorphism, and the functionals $f_s$ dual to a basis $(e_s)$ form a basis of $V^*$, so that $\dim V^*=\dim V$ ([[def-algebraic-dual-and-linear-functional]], [[thm-bilinear-forms-correspond-to-linear-maps-into-the-dual]], [[def-linear-isomorphism-and-invertible-linear-map]], [[def-linear-map]], [[def-vector-space-of-linear-maps]], [[def-dual-family-associated-to-a-basis]], [[thm-dual-family-is-a-basis-in-finite-dimension]], [[def-linear-basis]], [[thm-rank-nullity]], [[thm-dimension-of-a-linear-subspace]]).

[F10] On $\mathbb R^N$ the open sets are the metric-topology open sets, and a map is continuous exactly when preimages of open sets are open; finite unions and intersections of open sets are open; sums and products of continuous real maps are continuous, and composites of continuous maps are continuous because $(g\circ f)^{-1}(U)=f^{-1}(g^{-1}(U))$; a subset of $\mathbb R^N$ is compact exactly when it is closed and bounded; $\mathbb R^n$ carries the metrics $d_1,d_2,d_\infty$ of [[lem-metrics-on-rn]] and any two norms on it are equivalent ([[def-metric-space]], [[def-metric-topology]], [[def-metric-ball]], [[def-metric-continuity]], [[thm-metric-continuity-characterisations]], [[def-metric-compactness]], [[thm-heine-borel-rn]], [[def-metric-bounded-diameter]], [[thm-metric-open-set-algebra]], [[lem-compactness-is-intrinsic]], [[lem-algebra-of-continuous-real-maps-on-a-space]], [[def-norm-and-normed-space]], [[def-equivalent-norms]], [[thm-all-norms-on-rn-are-equivalent]], [[def-coordinate-column-and-matrix-of-a-linear-map]], [[thm-continuous-image-of-a-compact-space-is-compact]]).

[F11] In an orthonormal basis of a finite-dimensional inner product space every vector is $\sum_j\langle v,\varphi_j\rangle\varphi_j$, the inner-product norm is a norm, and $|\langle u,v\rangle|\le\|u\|\,\|v\|$ with equality exactly for linearly dependent vectors; the matrix $A$ of an isometry satisfies $A^{\mathsf T}A=I$, and the adjugate formula gives $A^{-1}=\det(A)^{-1}\operatorname{adj}(A)$ for invertible matrices ([[def-inner-product-norm]], [[cor-triangle-inequality-for-inner-product-norm]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[cor-inverse-matrix-by-adjugate]]). Determinants and cofactors are polynomials in the entries by induction using [[thm-laplace-cofactor-expansion]].

[F12] $W_J=\langle J\rangle$ for $J\subseteq S$, the subgroup generated by the empty set is $\{1\}$, and $m(s,t)$ is the order of $st$ in $W$ ([[def-generated-subgroup]], [[def-group]], [[def-hh-coxeter-matrix-word-group-and-length]]).

## Proof

**Proof technique:** direct; positive definiteness makes $B$ an inner product, and finiteness is read off a compact orthogonal group and an isolated identity.

1.1 (The dual form.) The case $S=\emptyset$ is trivial: then $V=\{0\}$, $W=\{1\}$ is finite by [F12] and $B$ is positive definite vacuously, so assume $S\ne\emptyset$ and put $n:=|S|\ge1$. Assume $B$ positive definite. If $B(v,x)=0$ for all $x$ then $B(v,v)=0$, so $v=0$ by [F8]; hence the linear map $b:V\to V^*$, $b(v):=B(v,\cdot)$ [F9], has kernel $\{0\}$ and, since $\dim V^*=\dim V=n$ is finite, it is a linear isomorphism [F9]. The form $B^*(f,g):=B(b^{-1}f,b^{-1}g)$ is symmetric and bilinear, and positive definite because $f\ne0$ gives $b^{-1}f\ne0$ and $B^*(f,f)=B(b^{-1}f,b^{-1}f)>0$ [F8]. For $w\in W$ and $v\in V$ the two functionals $b(\rho(w)v)$ and $w\cdot b(v)$ agree: at $x$ both take the value $B(\rho(w)v,x)=B(v,\rho(w)^{-1}x)$, by [F3] applied to the pair $\rho(w)^{-1}x$ and by the dual-action formula [F4]; hence $b^{-1}(w\cdot f)=\rho(w)b^{-1}f$ and $B^*(w\cdot f,w\cdot g)=B(\rho(w)b^{-1}f,\rho(w)b^{-1}g)=B(b^{-1}f,b^{-1}g)=B^*(f,g)$ for all $f,g$, so the dual action preserves $B^*$ [F3]. This is clause (2). [F2, F3, F4, F8, F9, algebra]

1.2 (Isolation of the identity.) Let $f\in C^\circ$, nonempty by [F5], and put $\Omega_f:=\{h\in\mathrm{GL}(V^*):h(f)\in C^\circ\}$ and $\Omega'_f:=\{g\in\mathrm{GL}(V):f\circ g\in C^\circ\}$. $C^\circ$ is open in $V^*$: it is the finite intersection of the sets $\{f':f'(e_s)>0\}$ [F4], each the preimage of the open interval $(0,\infty)\subseteq\mathbb R$ under the coordinate functional $f'\mapsto f'(e_s)$, which is continuous since its difference is bounded by the maximum coordinate difference [F10]; the maps $h\mapsto h(f)$ and $g\mapsto f\circ g$ are linear on the finite-dimensional spaces $\mathrm{End}(V^*)$ and $\mathrm{End}(V)$ and hence continuous (each coordinate is a finite sum of matrix entries multiplied by fixed coordinates) [F9, F10], so $\Omega_f$ and $\Omega'_f$ are open neighbourhoods of the identities, because $f\in C^\circ$. If $\rho^*(w)\in\Omega_f$, that is $w\cdot f=\rho^*(w)f\in C^\circ$, then $f\in C$ and $w\cdot f\in C$, and the collision theorem [F7] gives $w\in W_{S(f)}$ with $S(f)=\emptyset$ because $f\in C^\circ$; as $W_\emptyset=\{1\}$ [F12], $w=1$ and $\Omega_f\cap\rho^*(W)=\{\mathrm{id}\}$. If instead $\rho(w)\in\Omega'_f$, then $w^{-1}\cdot f=f\circ\rho(w)\in C^\circ$ by [F4], so the same argument with $w^{-1}$ gives $w^{-1}\in W_{S(f)}=\{1\}$ and $\rho(w)=\mathrm{id}_V$; hence $\Omega'_f\cap\rho(W)=\{\mathrm{id}_V\}$. No positive definiteness is used in this step. [F4, F5, F7, F9, F10, F12, algebra]

1.3 (Finite groups have positive definite form.) If $W$ is finite then $B$ is positive definite by [F1]; this proves the finite-$W$ to positive-definite-$B$ direction of (1), and no other argument is needed for it. [F1]

2.1 (Closedness and boundedness of $O(B^*)$.) Assume $B$ positive definite and let $B^*$ be the form of step 1.1; put $O(B^*):=\{h\in\mathrm{GL}(V^*):B^*(h\varphi,h\psi)=B^*(\varphi,\psi)\ \forall\varphi,\psi\in V^*\}$. Identify $\mathrm{End}(V^*)$ with $\mathbb R^{n^2}$ by the dual basis $(f_s)$ of [F9] [F10]. For each pair $i,j$ the function $h\mapsto B^*(hf_i,hf_j)$ is a finite sum of products $\sum_{p,q}h_{pi}h_{qj}B^*(f_p,f_q)$ of entries of $h$ with constants, hence continuous [F10]; Any endomorphism preserving $B^*$ is injective: $h\varphi=0$ implies $B^*(\varphi,\varphi)=0$ and hence $\varphi=0$; it is invertible by rank-nullity in finite dimension [F9]. Thus $O(B^*)$ is exactly the preimage of the single point $(B^*(f_i,f_j))_{ij}$ under a continuous map $\mathrm{End}(V^*)\to\mathbb R^{n^2}$, hence closed [F10]. For boundedness fix an orthonormal basis $(\varphi_1,\dots,\varphi_n)$ of $V^*$ for $B^*$ [F11]; if $h\in O(B^*)$ and $h\varphi_i=\sum_ja_{ji}\varphi_j$, then $a_{ji}=B^*(h\varphi_i,\varphi_j)$ by the orthonormal expansion [F11], so $|a_{ji}|\le\|h\varphi_i\|\,\|\varphi_j\|=1$ by Cauchy-Schwarz because $B^*(h\varphi_i,h\varphi_i)=B^*(\varphi_i,\varphi_i)=1$ [F11]; hence all matrix entries in this orthonormal basis are bounded by $1$. A change to the fixed dual basis expresses each new entry as a finite linear combination of these entries with fixed coefficients; its absolute value is bounded by the sum of the absolute values of those coefficients. Therefore $O(B^*)$ is bounded in the original $\mathbb R^{n^2}$ coordinates [F10]. [F9, F10, F11, step 1.1, algebra]

2.2 (Discreteness of both images.) Let $\gamma\in\rho^*(W)$. The set $\gamma\Omega_f=\{h\in\mathrm{GL}(V^*):\gamma^{-1}h\in\Omega_f\}$ is open in $\mathrm{GL}(V^*)$ as the preimage of the open set $\Omega_f$ under the continuous map $h\mapsto\gamma^{-1}h$ [F10], and it contains $\gamma$; if $w=\gamma h\in\rho^*(W)$ with $h\in\Omega_f$, then $h=\gamma^{-1}w\in\rho^*(W)$ (a subgroup) and step 1.2 forces $h=\mathrm{id}$, so $w=\gamma$. Hence $\gamma\Omega_f\cap\rho^*(W)=\{\gamma\}$ for every $\gamma$, so each point of $\rho^*(W)$ is open in the subspace topology and $\rho^*(W)$ is discrete [F10]. The same translation argument with $\Omega'_f$ shows that each point of $\rho(W)$ is isolated, so $\rho(W)$ is discrete as well. This proves clause (3), and no positive definiteness was used. [F10, step 1.2, algebra]

2.3 (Continuity of the operations, and a symmetric neighbourhood squaring into $\Omega_f$.) With $\mathrm{End}(V^*)\cong\mathbb R^{n^2}$ and $\mathrm{End}(V)\cong\mathbb R^{n^2}$ as in [F10], matrix multiplication has entries that are finite sums of products of entries of the factors, hence is continuous [F10], and the entries of the inverse are given by the adjugate formula $h^{-1}=\det(h)^{-1}\operatorname{adj}(h)$ [F11], a polynomial in the entries divided by the continuous function $\det$, which is nonzero on $\mathrm{GL}$ [F10]; hence multiplication and inversion are continuous on the general linear groups [F10], and $\mathrm{GL}(V^*)$ is open in $\mathrm{End}(V^*)$ as the preimage of $\mathbb R\setminus\{0\}$ under $\det$ [F10, F11]. Since multiplication sends $(\mathrm{id},\mathrm{id})$ to $\mathrm{id}\in\Omega_f$ with $\Omega_f$ open [step 1.2], there are open neighbourhoods $V_1,V_2\subseteq\mathrm{GL}(V^*)$ of $\mathrm{id}$ with $m(V_1\times V_2)\subseteq\Omega_f$: the open preimage $m^{-1}(\Omega_f)$ contains a maximum-coordinate ball around $(\mathrm{id},\mathrm{id})$ in the paired matrix coordinates, and such a ball is a product of two balls about $\mathrm{id}$ [F10]; then $U:=V_1\cap V_2\cap V_1^{-1}\cap V_2^{-1}$ (where $W^{-1}:=\{h^{-1}:h\in W\}$) is an open symmetric neighbourhood of $\mathrm{id}$ in $\mathrm{GL}(V^*)$, since $U=U^{-1}$, with $U\cdot U\subseteq V_1\cdot V_2\subseteq\Omega_f$ [F10]. [F10, F11, step 1.2, algebra]

3.1 (Compactness of $O(B^*)$.) By step 2.1, $O(B^*)$ is a closed and bounded subset of $\mathrm{End}(V^*)\cong\mathbb R^{n^2}$; by the Heine-Borel theorem a subset of $\mathbb R^{n^2}$ is compact if and only if it is closed and bounded [F10], so $O(B^*)$ is compact. [F10, step 2.1]

4.1 (Positive definite $B$ gives finite $W$; conclusion.) Assume $B$ positive definite and $S\ne\emptyset$ as in step 1.1; put $\Gamma:=\rho^*(W)$, a subgroup of $\mathrm{GL}(V^*)$ that is contained in $O(B^*)$ by the invariance proved in step 1.1 [step 1.1]. Let $f\in C^\circ$ and let $U$ be the open symmetric neighbourhood of $\mathrm{id}$ with $U\cdot U\subseteq\Omega_f$ from step 2.3 [step 2.3]. Each $hU$ ($h\in O(B^*)$) is open in $\mathrm{End}(V^*)$, being the image of the open set $U$ under the linear isomorphism $u\mapsto hu$ with inverse $k\mapsto h^{-1}k$ [F10, F11], so the family $\{hU\cap O(B^*):h\in O(B^*)\}$ is an open cover of the compact space $O(B^*)$ from step 3.1 [step 3.1]; choose a finite subcover, say $O(B^*)=\bigcup_{i=1}^N(h_iU\cap O(B^*))$ [F10]. Each $h_iU$ contains at most one element of $\Gamma$: if $w_1=h_iu_1$ and $w_2=h_iu_2$ with $u_1,u_2\in U$ and $w_1,w_2\in\Gamma$, then $w_2^{-1}w_1=u_2^{-1}u_1\in U\cdot U\subseteq\Omega_f$ because $U=U^{-1}$, and $w_2^{-1}w_1\in\Gamma$, so step 1.2 gives $w_2^{-1}w_1=\mathrm{id}$ and $w_1=w_2$ [step 1.2]. Hence $\Gamma$ has at most $N$ elements, and faithfulness of the dual action [F6] gives $|W|=|\Gamma|\le N<\infty$. Therefore $W$ finite if and only if $B$ is positive definite, which is (1); clause (2) is step 1.1, clause (3) is steps 1.2 and 2.2, and the finite-$W$ direction of (1) is step 1.3. [F6, F10, F11, step 1.1, step 1.2, step 1.3, step 2.2, step 2.3, step 3.1, algebra] ∎
