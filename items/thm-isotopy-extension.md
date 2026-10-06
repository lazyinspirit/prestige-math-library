---
id: thm-isotopy-extension
kind: theorem
title: "The isotopy extension theorem"
status: published
origin: session
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-compactness-of-a-subspace-is-ambient,
       def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy,
       lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image,
       lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood,
       lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field,
       lem-the-extended-time-dependent-field-has-a-global-time-one-flow,
       def-smooth-embedding,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       def-compact-space,
       def-countable-choice,
       thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set,
       lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure,
       def-smooth-map-between-manifolds-with-boundary,
       def-interior-point-boundary-point-interior-and-boundary-of-a-manifold,
       thm-unique-maximal-integral-curve-through-each-point,
       thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary,
       prop-smooth-maps-are-continuous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "Julian Chaidez, Notes on Smooth Topology and Symplectic Embedding Problems (Berkeley Geometry REU), Proposition 2.38 (Picard–Lindelöf for time-dependent fields) and Theorem 2.39 (isotopy extension), printed pp. 35–36"
      url: "https://julianchaidez.net/materials/reu/notes_on_smooth_and_symplectic_topology.pdf"
    - title: "The Isotopy Extension Theorem (University of California, Riverside, graduate differential topology hand-out, 2010), complete 14-page document: statement and applications of the isotopy extension theorem, uniqueness of tubular and collar neighbourhoods, and the knotted-line counterexample to ambient extension"
      url: "https://math.ucr.edu/~res/math260s10/isotopyextension.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$.

1. **Compact main case.** Let $M$ be a compact smooth manifold, possibly with boundary, let $N$ be a smooth manifold without boundary, let $F:M\times I\to N$ be a smooth isotopy of embeddings that is constant near the ends of $I$, and let $W$ be an open neighbourhood of $F(M\times I)$ in $N$. Then there is an ambient isotopy $H:N\times I\to N$ with $H_0=\mathrm{id}_N$, every $H_t$ a diffeomorphism, $H_t\circ F_0=F_t$ for all $t\in I$, $H_t=\mathrm{id}_N$ outside $W$ for every $t$, and $H_t$ stationary near the ends; if $F$ is constant near the ends with parameter $\varepsilon$, then $H_t=\mathrm{id}_N$ for $t\le\varepsilon/2$ and $H_t=H_1$ for $t\ge1-\varepsilon/2$.
2. **Relative form.** Let $N$ be boundaryless, $U\subseteq N$ open, $A\subseteq U$ compact, and let $F:U\times I\to N$ be a smooth isotopy of embeddings whose track image is open in $N\times I$. Then there is a compactly supported ambient isotopy $H$ of $N$ with $H_t\circ F_0=F_t$ on a neighbourhood of $A$ for every $t$.
3. **Boundary stratum.** If $N$ has boundary and $F(M\times I)\subseteq\partial N$, then the ambient isotopy of clause 1 can be chosen with every $H_t$ carrying $\partial N$ onto itself; if $F(M\times I)\subseteq N\setminus\partial N$, it can be chosen compactly supported in $N\setminus\partial N$.
4. **General isotopies.** For the same compact source (possibly with boundary) and boundaryless target as in clause 1, every smooth isotopy extends with support in a compact subset of any prescribed neighbourhood $W$ of $F(M\times I)$. The endpoint-constancy hypothesis and the stationary-end conclusion are both omitted; all other conclusions of clause 1 hold.

## Facts & Assumptions

**Given:** Countable choice; for clause 1 a compact $M$, possibly with boundary, a boundaryless $N$, a smooth isotopy $F:M\times I\to N$ constant near the ends with parameter $\varepsilon$, and an open neighbourhood $W$ of the compact image $F(M\times I)$.

[F1] An isotopy of embeddings is a smooth $F$ with every slice an embedding; a diffeotopy $H$ of $N$ extends $F$ when $H_t\circ F_0=F_t$; support, compact support and stationarity near the ends are as displayed ([[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]], [[def-smooth-embedding]]).

[F2] The track $S=\overline F(M\times I)$ is a compact closed smoothly embedded track in $N\times I$ (with source boundary faces, time endpoint faces and their product corners as applicable, using the isotopy definition's coordinate-extension convention) and the horizontal velocity $Y$ is a smooth field along $S$ with values in $TN\oplus0$ ([[lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image]]).

[L1] Under $\mathrm{AC}_\omega$ the velocity extends horizontally over a neighbourhood of $S$, the extension can be taken tangent to $\partial N$ when $F$ takes values in $\partial N$, and it can be taken inside any prescribed neighbourhood of $S$; it can also be blended with a prescribed extension near a compact subset of $S$ ([[lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood]]).

[L2] Under $\mathrm{AC}_\omega$, if $W$ is an open neighbourhood of the compact image with $\overline W$ compact, there is a smooth space-first field $G(y,t)$ representing the time-dependent field $H(t,y)=G(y,t)$, whose slice supports lie in one compact subset of $W$, with $G_t(F(x,t))=\partial_tF(x,t)$ and $G_t=0$ for $t\le\varepsilon/2$ and $t\ge1-\varepsilon/2$ ([[lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field]]).

[L3] Under $\mathrm{AC}_\omega$ such a compactly supported field $G$ has a unique global evolution operator (also on a manifold with boundary when $G$ is boundary-tangent) $\Psi_{t,s}$; the diffeomorphisms $H_t=\Psi_{t,0}$ form a compactly supported ambient isotopy with $H_0=\mathrm{id}_N$, inverse flow $\Psi_{0,t}$, and $H_t$ stationary on every interval where $G$ vanishes ([[lem-the-extended-time-dependent-field-has-a-global-time-one-flow]]).

[L4] Integral curves of a smooth vector field with prescribed initial value are unique ([[thm-unique-maximal-integral-curve-through-each-point]]).

[L5] Compact subsets admit finite subcovers from ambient open covers ([[lem-compactness-of-a-subspace-is-ambient]]). In a locally compact Hausdorff space every compact set has basic open neighbourhoods with compact closure; a smooth manifold and its products are locally compact Hausdorff, and the image of a compact space under a continuous map is compact ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]], [[prop-smooth-maps-are-continuous]], [[def-compact-space]]).

[L6] Near a compact track in $N\times I$, finitely many restricted Euclidean chart bumps provide the cutoff also at product corners, as in [[lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood]], proof steps 1.1 and 3.1. For a closed set inside an open set there is a smooth cutoff equal to $1$ on a neighbourhood of the closed set with support in the open set ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]], [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]); diffeomorphisms and the boundary stratum are as in [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]] and [[def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]].

[A1] Countable choice is used exactly for the cutoffs; with that exception every step is an explicit construction and no further selection occurs ([[def-countable-choice]], [[def-smooth-map-between-manifolds-with-boundary]]).

## Proof

**Proof technique:** direct.

1.1 Clause 1, construction: by [L5] choose a relatively compact open neighbourhood $W'\subseteq W$ of the compact image $F(M\times I)$ with $\overline{W'}$ compact and $\overline{W'}\subseteq W$. Apply [L2] with $W'$ to obtain a smooth time-dependent field $G$ on $N$ whose supports lie in one compact subset of $W'$, with $G_t(F(x,t))=\partial_tF(x,t)$ and $G_t=0$ for $t\le\varepsilon/2$ and $t\ge1-\varepsilon/2$, and apply [L3] to obtain its global evolution operator and the compactly supported ambient isotopy $H_t=\Psi_{t,0}$. [F2, L1, L2, L3, L5, A1]

1.2 For clause 2 put $O:=\overline F(U\times I)$, the open track image. Each slice differential is an isomorphism, so in product coordinates the track has invertible block differential. The Euclidean inverse function theorem, applied to local extensions at the time endpoints, gives a smooth local inverse preserving time; injectivity makes these inverses agree on $O$. Thus $Z(\overline F(x,t)):=\partial_tF(x,t)$ is a smooth horizontal field on $O$. The compact set $C:=\overline F(A\times I)$ has a relatively compact open neighbourhood $O'\subseteq O$ with compact closure contained in $O$, by [L5]. Choose a smooth cutoff $\chi$ equal to one near $C$, with support in $O'$, by [L6]. Define $G=\chi Z$ on $O$ and zero outside $\operatorname{supp}\chi$. This zero extension is smooth; the projection of $\operatorname{supp}\chi$ to $N$ is compact and contains every slice support. By [L3] its evolution gives a compactly supported ambient isotopy. [F1, L3, L5, L6, A1, construct]

1.3 Clause 4, field construction without endpoint stationarity: let $F:M\times I\to N$ be any smooth isotopy of the compact $M$, possibly with boundary. Its track $S$ and horizontal velocity $Y$ are still compact and smooth by [F2], which does not require stationarity. The local extension construction in [L1] applies on the finite interval itself: at an endpoint, smoothness in a product boundary chart means restriction of a smooth map across that endpoint, and injectivity of the track differential persists locally, so the same graph-coordinate extension of the velocity components is smooth up to $t=0,1$. Restricting each extension to $N\times I$ and patching by the partitions of [L6] gives a smooth horizontal field $Z$ on an open neighbourhood of $S$. By [L5] choose a relatively compact neighbourhood of $S$ inside that neighbourhood and $W\times I$, and by [L6] a cutoff $\rho$ equal to one near $S$ with compact support there. Define $G=\rho Z$ on its domain and zero outside its support. The zero extension is smooth, $G_t(F(x,t))=\partial_tF(x,t)$ including both endpoints, and its spatial support lies in a compact subset of $W$. No time reparametrization or vanishing end velocity is needed. [F1, F2, L1, L5, L6, A1, construct]

2.1 Clause 1, the identity $H_t\circ F_0=F_t$: fix $x\in M$. The curve $t\mapsto F(x,t)$ satisfies $\frac{d}{dt}F(x,t)=\partial_tF(x,t)=G_t(F(x,t))$ by the defining property of $G$, and the curve $t\mapsto H_t(F_0(x))$ satisfies the same equation with the same initial value $F_0(x)=F(x,0)$ by the defining ODE of the flow. By uniqueness of integral curves [L4] the two curves agree for every $t$. [F1, L3, L4, step 1.1]

2.2 Clause 1, support and stationarity: a point outside $\overline{W'}$ lies outside $\bigcup_t\operatorname{supp}G_t$, so its integral curve is constant and $H_t=\mathrm{id}_N$ there; in particular $H_t=\mathrm{id}_N$ outside $W$, as $\overline{W'}\subseteq W$. For $t\le\varepsilon/2$ one has $G\equiv0$ on $[0,t]$, so $\Psi_{t,0}=\mathrm{id}_N$ and $H_t=\mathrm{id}_N$; for $t\ge1-\varepsilon/2$, $G$ vanishes on $[1-\varepsilon/2,t]$, so $\Psi_{t,1-\varepsilon/2}=\mathrm{id}_N$ and hence $H_t=\Psi_{t,1-\varepsilon/2}\circ H_{1-\varepsilon/2}=H_{1-\varepsilon/2}$, the maps being diffeomorphisms. This is clause 1. [F1, L3, step 1.1]

2.3 Clause 2, the identity near $A$: by construction $\chi=1$ on a neighbourhood of $\overline F(A\times I)$ in $N\times I$, so compactness of $I$ gives an open neighbourhood $A'$ of $A$ in $U$ with $\overline F(A'\times I)\subseteq\{\chi=1\}$. Indeed the preimage of the open set where $\chi=1$ contains $A\times I$; finitely many product neighbourhoods covering each $\{a\}\times I$ supply one source neighbourhood of $a$, and their union over $a\in A$ gives $A'$. For $x\in A'$ the curve $t\mapsto F(x,t)$ solves the ODE of the field $Z$ and hence of $G$; the curve $t\mapsto H_t(F_0(x))$ solves the same equation with the same initial value, so [L4] gives $H_t(F_0(x))=F_t(x)$ for all $t$ and all $x\in A'$. This is clause 2. [L3, L4, L6, step 1.2]

2.4 Apply [L3] to this field on $I=[0,1]$ to obtain $H_t=\Psi_{t,0}$. Its inverse is $\Psi_{0,t}$, it starts at the identity, and it fixes the complement of $W$. For each $x$, both $F(x,t)$ and $H_t(F_0(x))$ solve the same initial-value problem; [L4] therefore gives $H_t\circ F_0=F_t$ for every $t\in I$. This proves clause 4, including smoothness at the original endpoints. Stationarity of the extension is claimed only when the given isotopy is stationary, as proved for clause 1. [L3, L4, step 1.3]

3.1 For the boundary-valued track use the tangent extension of [L1] and restricted product-chart cutoffs; multiplication and zero extension preserve boundary tangency. The boundary-tangent evolution argument in [L3] then supplies diffeomorphisms of $N$ preserving $\partial N$ in both time directions. The ODE comparison of step 2.1 still gives $H_t\circ F_0=F_t$. If the track is interior-valued, perform the compact construction in $\operatorname{Int}N$, with support in a compact subset of $W\cap\operatorname{Int}N$, and extend the resulting diffeotopy by the identity near $\partial N$. This proves clause 3 without applying a boundaryless flow theorem directly to a manifold with boundary. [L1, L3, L6, step 1.1, step 2.1, construct]

4.1 The four clauses have been established, with countable choice used in the stated extension and cutoff constructions. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 2.3, step 1.3, step 2.4] ∎
