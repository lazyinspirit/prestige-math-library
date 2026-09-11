---
id: "thm-countable-mayer-vietoris-open-set-principle"
kind: "theorem"
title: "Countable mayer vietoris open set principle"
deps: ["lem-de-rham-and-singular-cohomology-respect-countable-disjoint-unions", "thm-five-lemma-for-modules", "thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function", "def-topological-manifold-with-boundary", "def-the-standard-smooth-step-function", "def-countable-choice", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 22; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $H^q,K^q$ be contravariant cohomology functors to real vector spaces on smooth manifolds without boundary, invariant under diffeomorphisms, equipped with two-open Mayer–Vietoris exact sequences and countable disjoint-union product isomorphisms. Let $\eta:H^q\to K^q$ be natural in every integer degree, commute with all arrows of those sequences, including the connectors, and with the product isomorphisms. If $\eta$ is an isomorphism on the empty space and on every rational open box in each Euclidean dimension, it is an isomorphism on every such manifold. The same conclusion holds on manifolds with boundary if the functors and these hypotheses extend to them and the local hypothesis also includes convex rational half-boxes, that is intersections of rational boxes with the closed half-space. No continuity with respect to increasing unions is assumed.

## Facts & Assumptions

**Given:** The functors, transformation, exact sequences, products and local isomorphisms in the statement. Write $P(X)$ for the assertion that $\eta_X$ is an isomorphism in every degree.

[F1] Four outside isomorphisms in a commutative five-term diagram with exact rows imply the middle isomorphism ([[thm-five-lemma-for-modules]]).

[F2] The actual singular and de Rham theories have the countable product interface under countable choice ([[lem-de-rham-and-singular-cohomology-respect-countable-disjoint-unions]]). Here the corresponding interface is a supplied hypothesis on $H,K$.

[F3] Boundaryless smooth manifolds admit a nonnegative proper smooth exhaustion under countable choice ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]).

[F4] Boundary manifolds are Hausdorff, second countable and locally modelled on relatively open half-spaces ([[def-topological-manifold-with-boundary]]); the standard smooth step supplies finite chart cutoffs ([[def-the-standard-smooth-step-function]]).

[A1] Countable choice is [[def-countable-choice]], the countable instance of [[def-axiom-of-choice]].

## Proof

1.1 The five terms $H^{q-1}(U)\oplus H^{q-1}(V)\to H^{q-1}(U\cap V)\to H^q(U\cup V)\to H^q(U)\oplus H^q(V)\to H^q(U\cap V)$ and their $K$ counterparts show by [F1] that $P(U),P(V),P(U\cap V)$ imply $P(U\cup V)$. The product hypothesis likewise gives $P$ on countable disjoint unions of $P$ sets, since the product of specified isomorphisms has the coordinatewise inverse. These statements apply in every integer degree, including any zero negative groups at the initial endpoint. [given, F1, F2]

1.2 We will use a continuous nonnegative exhaustion with compact sublevels. For boundaryless manifolds [F3] supplies it. The empty manifold uses the empty function; suppose henceforth that the manifold is nonempty. For completeness it exists also with boundary: form all relatively compact chart balls or half-balls with their data, whose closures are compact in the Hausdorff manifold. A countable basis and [A1] select one eligible chart-ball tuple above each nonempty basis member contained in such a ball. The selected balls cover the manifold; enumerate them $(B_n)_{n\ge1}$, repeating a ball if needed. Put $L_r=\bigcup_{n\le r}\overline{B_n}$. Their interiors cover the manifold. Starting with $r_1=1$, take $r_{m+1}$ to be the least integer greater than $r_m$ with $L_{r_m}\subseteq\operatorname{int}L_{r_{m+1}}$; compactness supplies it. Set $K_m=L_{r_m}$. Then $K_m\subseteq\operatorname{int}K_{m+1}$ and their interiors cover. [F3, F4, A1]

2.1 In the boundary case, for each compact $K_m$ in $\operatorname{int}K_{m+1}$, cover it by all chart balls/half-balls whose doubled closures lie in that open set. A finite subcover exists. The smooth step produces bumps $\eta_a(x)=1-s((\|x-p_a\|^2-r_a^2)/(3r_a^2))$ in these charts, extended by zero, equal to one on the smaller balls and supported in the doubled balls. Put $\chi_m=1-\prod_a(1-\eta_a)$; it is one near $K_m$ and has support in $\operatorname{int}K_{m+1}$. Use [A1] to choose these cutoffs for all $m$. Then $f=\sum_{m\ge1}(1-\chi_m)$ is smooth and nonnegative: on $\operatorname{int}K_t$ every summand with $m\ge t$ vanishes identically, giving neighbourhood local finiteness. If $N>c$ and $x\notin K_{N+1}$, the first $N$ summands equal one, so $f(x)\ge N>c$. Thus $\{f\le c\}$ is a closed subset of compact $K_{N+1}$ and is compact. This supplies the exhaustion also in the boundary case, with no full AC. Empty manifolds use the empty function. [F4, A1, step 1.2, algebra]

2.2 Let $\mathcal B$ be an intersection-stable basis, including the empty set, whose members satisfy $P$. Every finite union of members has $P$: induct on its length, noting that the intersection of its last member with the preceding union is a union of fewer members of $\mathcal B$, by distributivity. Step 1.1 then applies. Intersections of two finite unions are themselves finite unions of members and also have $P$. [step 1.1]

3.1 On a manifold $X$ with the exhaustion $f$, define $A_j=f^{-1}([j,j+1])$ and $O_j=f^{-1}((j-1/3,j+4/3))$, $j\ge0$. The sets $A_j$ are compact and cover $X$, while $O_j\cap O_k=\varnothing$ for $|j-k|\ge2$. Cover each $A_j$ by basis members contained in $O_j$, extract a finite subcover, and let $V_j$ be its union; use the empty union when $A_j$ is empty. Countable choice selects these finite lists. Then $A_j\subseteq V_j\subseteq O_j$, so $X=\bigcup_jV_j$, and step 2.2 gives $P(V_j)$ and $P(V_j\cap V_{j+1})$. [A1, step 1.2, step 2.1, step 2.2]

4.1 The opens $V_{\mathrm{even}}=\bigcup_{j\text{ even}}V_j$ and $V_{\mathrm{odd}}=\bigcup_{j\text{ odd}}V_j$ are countable disjoint unions, so have $P$. Their intersection is the disjoint union of $W_j=V_j\cap V_{j+1}$. Indeed only adjacent even-odd indices can meet. For distinct $j,k$ with $|j-k|\ge2$, $W_j\cap W_k\subseteq V_j\cap V_k=\varnothing$; for $k=j+1$, it lies in $V_j\cap V_{j+2}=\varnothing$. Thus the intersection also has $P$ by the product hypothesis, and step 1.1 proves $P(X)$. [step 1.1, step 3.1]

5.1 First apply steps 2.2–4.1 to any Euclidean open set with the basis of rational boxes contained in it and the empty set. Finite intersections are boxes or empty, so the local hypothesis supplies $P$ on that basis. This proves $P$ for all Euclidean opens. For a boundaryless manifold use as basis all chart-contained open subsets: each is diffeomorphic to a Euclidean open, and an intersection is an open subset of its first chart domain. Hence this basis is intersection-stable and satisfies $P$; steps 2.2–4.1 prove $P$ on the manifold. Chart intersections are not asserted to be convex. [given, step 2.2, step 3.1, step 4.1]

6.1 In the boundary variant, repeat step 5.1 first on relatively open half-space subsets with rational half-box basis, closed under finite intersection, using steps 1.2–2.1 for exhaustion. Their local $P$ is an extra hypothesis stated above. Chart-contained opens of a boundary manifold then reduce to these relatively open half-space sets, giving the same second stage. Empty sets are supplied at the outset; compact manifolds merely have empty high bands. A zero-dimensional box is a point. Disconnected manifolds require no choices of components. The only infinite selections are the countable selections in steps 1.2, 2.1 and 3.1; the product interface carries its separately stated cost. This completes both asserted versions. [given, A1, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1] ∎
