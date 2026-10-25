---
id: thm-topological-characterisation-of-profinite-groups
kind: theorem
title: "Assuming Choice, a topological group is profinite exactly when it is compact, Hausdorff, and totally disconnected"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-profinite-group-by-inverse-limit,
       thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected,
       lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis,
       thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree,
       thm-continuity-into-an-inverse-limit-is-coordinatewise,
       def-topological-group,
       thm-compactness-under-continuous-maps,
       thm-finite-products-of-compact-spaces,
       thm-closed-subspace-of-a-compact-space-is-compact]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

Assuming the Axiom of Choice, a topological group is profinite if and only if
it is compact, Hausdorff, and totally disconnected. Equivalently, under the
same assumption, a compact Hausdorff topological group is profinite if and only
if it has a neighbourhood basis at the identity consisting of open normal
subgroups with finite quotients.

## Facts & Assumptions

**Given:** The Axiom of Choice and a topological group $G$.

[L1] Inverse limits of finite discrete groups are compact, Hausdorff, and totally disconnected ([[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]).

[L2] In a profinite presentation, the coordinate kernels form an open normal neighbourhood basis ([[lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis]]).

[L3] In compact Hausdorff spaces, total disconnectedness is equivalent to total separatedness ([[thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree]]).

[F1] A profinite group is, by definition, a topological group isomorphic to an inverse limit of finite discrete groups ([[def-profinite-group-by-inverse-limit]], [[def-topological-group]]).

[L4] A map into an inverse limit is continuous when all coordinate composites are continuous ([[thm-continuity-into-an-inverse-limit-is-coordinatewise]]).

[L5] Continuous images of compact spaces are compact, compact subsets of Hausdorff spaces are closed, and a continuous bijection from compact to Hausdorff is a homeomorphism ([[thm-compactness-under-continuous-maps]]).

[L6] Finite products of compact spaces are compact ([[thm-finite-products-of-compact-spaces]]).

[L7] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is profinite, then by [F1] it is topologically isomorphic to an inverse limit of finite discrete groups. Therefore [L1] gives that $G$ is compact, Hausdorff, and totally disconnected. The same presentation gives the open normal basis in [L2]; each quotient by a coordinate kernel is isomorphic to the image of a projection and is therefore finite. [F1, L1, L2, given, algebra]

1.2 Conversely, assume that $G$ is compact, Hausdorff, and totally disconnected. By [L3], $G$ is totally separated. Let $U$ be an identity neighbourhood and choose an open identity neighbourhood $O\subseteq U$. For each $x\in G\setminus O$, total separatedness gives a clopen set $A_x$ containing $1$ but not $x$. The open complements $G\setminus A_x$ cover the compact set $G\setminus O$, so finitely many suffice. Their complementary intersection is a clopen identity neighbourhood $C\subseteq O\subseteq U$. [L3, L7, given, choose, construct]

2.1 Put $K:=(G\setminus C)\cap C^2$. The set $C$ is compact by [L7], so $C\times C$ is compact by [L6], its product image $C^2$ is compact by [L5], and $K$ is compact by [L7]. Since $G$ is Hausdorff, [L5] makes $K$ closed. For each $h\in C$, continuity of multiplication at $(h,1)$ and openness of $C$ give open neighbourhoods $W_h\subseteq C$ of $h$ and $X_h\subseteq C$ of $1$ such that $$W_hX_h\subseteq(G\setminus K)\cap C^2\subseteq C.$$ Compactness of $C$ gives finitely many $W_{h_j}$ covering it. [L5, L6, L7, step 1.2, choose]

3.1 Let $X:=\bigcap_jX_{h_j}$ and $Y:=X\cap X^{-1}$. Then $Y$ is a symmetric open identity neighbourhood and $CY\subseteq C$. Hence $$H_0:=\bigcup_{n\ge1}Y^n$$ is an open subgroup contained in $C$. Its open cosets cover compact $G$, so $H_0$ has finite index. The normalizer of $H_0$ contains $H_0$, so $H_0$ has only finitely many distinct conjugates. Their intersection $N$ is therefore an open normal finite-index subgroup with $N\subseteq H_0\subseteq C\subseteq U$. Since $U$ was arbitrary, these $N$ form an identity-neighbourhood basis. [step 2.1, algebra, construct]

4.1 Now let $G$ be any compact Hausdorff topological group having an identity-neighbourhood basis of open normal finite-index subgroups; this includes the situation produced in step 3.1. Let $\mathcal N$ be the family of all open normal finite-index subgroups. It still contains such a basis, and it is directed under reverse inclusion because it is closed under finite intersections. The quotient maps define a homomorphism $$\eta:G\to\varprojlim_{N\in\mathcal N}G/N.$$ Every coordinate map is continuous because its fibres are open cosets of $N$, so [L4] makes $\eta$ continuous. [L4, step 3.1, given, construct]

5.1 The basis separates points: if $g\ne1$, Hausdorffness gives an identity neighbourhood omitting $g$, and some $N\in\mathcal N$ lies inside it. Hence $\eta$ is injective. To prove density, let a nonempty basic cylinder in the inverse limit restrict the finitely many coordinates $N_1,\ldots,N_k$. If $k=0$, it contains $\eta(1)$. Otherwise put $M:=N_1\cap\cdots\cap N_k\in\mathcal N$, choose a compatible tuple in the cylinder, and choose a representative $g\in G$ of its $M$-coordinate. Compatibility makes the image of $g$ equal to the prescribed value in every restricted coordinate, so $\eta(g)$ lies in the cylinder. Thus $\eta[G]$ is dense. [step 4.1, given, algebra, choose]

6.1 By compactness of $G$ and [L5], the continuous image $\eta[G]$ is compact. The target is Hausdorff by [L1], so [L5] makes the image closed. It is both closed and dense by step 5.1, hence is the whole target. Thus $\eta$ is a continuous bijection from compact to Hausdorff and is a homeomorphism by [L5]. It is a group isomorphism by construction, so [F1] makes $G$ profinite. [F1, L1, L5, step 4.1, step 5.1]

7.1 Step 1.1 proves both forward implications. For a compact Hausdorff totally disconnected group, steps 1.2-3.1 construct the required basis and steps 4.1-6.1 make $G$ profinite. For a compact Hausdorff group already having the stated basis, steps 4.1-6.1 apply directly. This establishes both equivalences exactly as stated. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎
