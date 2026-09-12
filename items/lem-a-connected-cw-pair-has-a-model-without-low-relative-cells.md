---
id: "lem-a-connected-cw-pair-has-a-model-without-low-relative-cells"
kind: "lemma"
title: "A connected CW pair has a model without low relative cells"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-n-connected-cw-pair","thm-long-exact-sequence-of-relative-homotopy-groups","lem-high-relative-cells-do-not-change-lower-homotopy","lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex","lem-compact-cw-images-have-finite-cell-support-without-choice","thm-transfinite-recursion","thm-cellular-approximation-for-maps-of-cw-pairs","prop-cubical-and-spherical-models-of-higher-homotopy-agree","thm-cw-approximation-of-an-arbitrary-space","prop-higher-homotopy-basepoint-transport-and-moving-homotopies","lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes","lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells","def-weak-homotopy-equivalence","def-axiom-of-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Proposition4.15 pp353–354 and construction
        on pp352–353; all-data choice-free weak model and relative inverse
        details supplied locally
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $n\ge1$ and let $(X,A)$ be an $(n-1)$-connected CW pair with $A\ne\varnothing$ and supplied characteristic maps. There are, without any choice principle, a CW complex $Z$ containing the given $A$ as a subcomplex, with no cells of $Z\setminus A$ below dimension $n$, and a weak homotopy equivalence $Q:Z\to X$ satisfying $Q|_A=\mathrm{id}_A$.

Assuming the Axiom of Choice, this $Q$ is a homotopy equivalence rel $A$: there is $R:X\to Z$ equal to the identity on $A$, with $RQ\simeq\mathrm{id}_Z$ and $QR\simeq\mathrm{id}_X$ through homotopies fixing $A$ pointwise. Choice is used to produce these homotopies, not to construct the weak model.

## Facts & Assumptions

[F1] [[def-n-connected-cw-pair]] includes component-surjectivity and the positive relative trivialities. [[thm-long-exact-sequence-of-relative-homotopy-groups]] gives exactness at every eligible group and pointed-set term.

[F2] [[lem-high-relative-cells-do-not-change-lower-homotopy]] gives lower homotopy isomorphisms, the endpoint surjection and component control when attaching cells of dimension at least $n$, without choice or a basepoint-vertex restriction.

[F3] [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] gives the CW topology and map-out criterion for supplied ascending-dimensional attachments. [[lem-compact-cw-images-have-finite-cell-support-without-choice]] gives finite support for each compact attaching sphere.

[F4] [[thm-transfinite-recursion]] gives specified class-function recursion on the natural numbers using Replacement, without AC.

[F5] [[thm-cellular-approximation-for-maps-of-cw-pairs]] gives based cellular representatives for finite sphere sources without choice, and arbitrary-source approximation rel a cellular subcomplex under AC. [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]] identifies based spheres and boundary-constant disks with the homotopy groups.

[F6] The construction in [[thm-cw-approximation-of-an-arbitrary-space]] supplies the finite sphere CW models and the explicit cone-to-disk descent of a based nullhomotopy used below. Its proof gives these elementary constructions without assuming a CW target or a homology comparison.

[F7] [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] gives transport and the effect of a moving-basepoint homotopy; its actual radial-shell formula commutes with continuous postcomposition.

[F8] [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]] gives the relative CW cylinder, its endpoint subcomplexes, and retraction isomorphisms at all basepoints.

[F9] [[lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells]] gives a source-fixing compression from vanishing relative groups and a component bijection, with AC for arbitrary relative cells.

[F10] [[def-weak-homotopy-equivalence]] requires component bijectivity and isomorphisms at every source basepoint.

[A1] [[def-axiom-of-choice]] is assumed only for the rel-$A$ homotopy-equivalence conclusion, in the two arbitrary-cell applications of [F5] and [F9].

## Proof

**Given:** The pair and $n$ in the statement. Identify $A$ with its given subspace of $X$.

1.1 If $n\ge2$, the inclusion $A\to X$ induces isomorphisms on $\pi_i$ for $1\le i<n-1$ and a surjection on $\pi_{n-1}$ at every $a\in A$. Indeed the two adjacent relative terms vanish for the isomorphism assertion, while the following relative term vanishes for the surjection, so [F1] gives these assertions by exactness. It is also bijective on components: surjectivity is in the definition, and if $a,b\in A$ are joined in $X$, the path from $a$ to $b$ represents a relative degree-one class based at $b$. Its triviality and exactness at $\pi_0(A,b)$ put $a$ in the component of $b$ within $A$. If $n=1$, only component-surjectivity is needed and asserted at this initial stage. [F1, given]

1.2 Put $Z_k=A$ with its inclusion map to $X$ for $0\le k<n$. For each $k\ge n$ attach to $Z_{k-1}$ one $k$-disk for every actual pair $(a,b)$ consisting of a cellular map $a:S^{k-1}\to Z_{k-1}$ and a continuous $b:D^k\to X$ with $b|_{S^{k-1}}=Q_{k-1}a$. Extend $Q_{k-1}$ over that disk by its stored $b$. For $k=1$ the sphere has two vertices, so $a$ specifies two vertices of $A$. For positive-dimensional spheres use the finite based CW model of [F6]. There is no selection of homotopy-class representatives or nullhomotopies: all actual extension data are labels of cells, including constant-boundary data. [F3, F6, given]

2.1 Each boundary in step 1.2 has finite cell support by [F3] and is cellular into dimension $k-1$. Its specified extension agrees on that boundary. Applying the assembly lemma in [F3] at each stage therefore gives a CW complex $Z_k$ and a continuous $Q_k$, with earlier stages as closed subcomplexes. The indexing collections are sets of maps, cut out of the appropriate power sets by continuity, cellularity and the boundary equation. The successor operation is specified from the previous history; on invalid histories it may be assigned a fixed empty value. Thus [F4] collects the sequence, even though the cell sets grow and need not lie in a fixed ambient set in advance. Its weak attachment union $Z$ is CW by [F3], and its compatible disk maps give a continuous $Q:Z\to X$ fixed on $A$. It has only new cells of dimensions at least $n$, and every vertex belongs to $A$. [F3, F4, step 1.2]

3.1 Every point of $Z$ has a path to a vertex of $A$. One can use [F2] for $(Z,A)$ with the lower bound one to reach $A$, and then for $(A,A^0)$ with the same lower bound to reach a vertex; these are arguments for one specified point. Component-surjectivity of $Q$ follows from that of $A\to X$. If $n\ge2$, [F2] makes $\pi_0(A)\to\pi_0(Z)$ bijective, and step 1.1 gives the same for $A\to X$; hence $\pi_0(Q)$ is bijective. If $n=1$ and two points of $Z$ have images joined in $X$, join each to a vertex as above and obtain a path $b$ in $X$ between the two vertex images. The endpoint map $a:S^0\to A=Z_0$ is cellular, so the actual pair $(a,b)$ labels an edge attached at stage one. This edge joins the vertices in $Z$, proving component injectivity in this case as well. [F1, F2, step 1.1, step 1.2, step 2.1]

3.2 Fix a vertex $v\in A$ and a positive degree $i\ge n$. By [F5], each based class of $\pi_i(X,v)$ has a disk representative $b:D^i\to X$ constant at $v$ on its boundary. The constant cellular map $a:S^{i-1}\to\{v\}\subset Z_{i-1}$ with this $b$ is one of the stage-$i$ labels. Its characteristic disk descends to a based sphere in $Z$ because its boundary is constant. Its composite with $Q$ represents the given class, using the same disk-boundary quotient model. Thus $Q_*$ is surjective in every $i\ge n$. If $n\ge2$ and $i=n-1$, surjectivity instead follows from step 1.1 and the factorization $A\hookrightarrow Z\xrightarrow{Q}X$. [F5, step 1.1, step 1.2, step 2.1]

3.3 For a positive degree $i\ge n-1$, let a based sphere $u:S^i\to Z$ at $v$ have nullhomotopic composite with $Q$. Apply the finite-source clause of [F5] fixing its basepoint vertex to make $u$ based-homotopic to a cellular map $a:S^i\to Z$. It lands in $Z^i\subseteq Z_i$: all old cells of $A$ are already present, and newly attached cells after stage $i$ have higher dimension. By the subcomplex topology, $a$ is a continuous cellular map into $Z_i$. The composite $Qa$ has a based nullhomotopy, by composing the approximation homotopy with $Q$ and then the stipulated nullhomotopy. Collapsing the terminal sphere in its cylinder and using $(z,t)\mapsto(1-t)z$ identifies its cone with $D^{i+1}$, giving a continuous $b:D^{i+1}\to X$ extending $Qa$. The actual quotient and compact-Hausdorff verification for this descent is in [F6]. Since $i+1\ge n$, the pair $(a,b)$ occurs at stage $i+1$. Its characteristic disk extends $a$ in $Z$. Composing that disk with $(z,t)\mapsto(1-t)z+ts_0$, where $s_0$ is its marked boundary point, gives a based nullhomotopy of $a$ fixing $s_0$. Thus $u$ is based null. The homomorphism $Q_*$ has trivial kernel and is injective in these degrees, including the nonabelian degree-one case. [F5, F6, step 1.2, step 2.1]

4.1 For $1\le i<n-1$, [F2] identifies $\pi_i(A,v)$ with $\pi_i(Z,v)$, and step 1.1 identifies it with $\pi_i(X,v)$. Since the composite is the original inclusion, $Q_*$ is an isomorphism in these remaining degrees. The range is empty for $n=1,2$. Combined with steps 3.2–3.3, $Q_*$ is an isomorphism in every positive degree at every vertex of $A$. [F2, step 1.1, step 2.1, step 3.2, step 3.3]

5.1 For arbitrary $z\in Z$, fix one path $c$ from a vertex $v\in A$ to $z$, whose existence was proved in step 3.1. Transport [F7] gives isomorphisms from groups at $z$ to groups at $v$, and from groups at $Q(z)$ to those at $Q(v)$. The square with the maps induced by $Q$ commutes: the radial-shell representative has its original map on its core and the path on its shell, and postcomposition replaces these by their composites with $Q$. Conjugating the vertex isomorphism in step 4.1 by these transport maps proves that $Q_*$ is an isomorphism at $z$. No family of paths for all $z$ is selected. Together with step 3.1 this proves the weak-equivalence assertion [F10], so far without AC. [F7, F10, step 3.1, step 4.1]

6.1 Now assume [A1]. The restriction $Q|_A$ is cellular. Apply the arbitrary-source clause of [F5] to obtain a cellular $F:Z\to X$ and a homotopy $E:Q\simeq F$ fixed on $A$. For each source point the actual track of $E$ and [F7] show that $F_*$ differs from the isomorphism $Q_*$ only by a transport isomorphism. The component functions agree by their tracks. Thus $F$ is a weak equivalence, still literally the identity on $A$. [F5, F7, A1, step 5.1]

7.1 Form the relative cylinder $W$ of $F$ in [F8], with inclusions $j:Z\hookrightarrow W$, $k:X\hookrightarrow W$ agreeing on $A$, retraction $r:W\to X$ and homotopy $D:\mathrm{id}_W\simeq kr$ fixing $k(X)$. The equations $rj=F$ and the component and all-basepoint isomorphisms of $r$ show that $j$ is weak. Exactness [F1] now gives $\pi_i(W,Z,j(z))=0$ for every $z\in Z$ and $i\ge1$. Explicitly, in degrees $i\ge2$ injectivity on the preceding absolute group makes the relative boundary zero, so a relative class comes from $\pi_i(W)$; surjectivity from $\pi_i(Z)$ makes that image zero. In degree one, component injectivity makes the relative boundary distinguished, so exactness puts each relative class in the image of $\pi_1(W)$; surjectivity from $\pi_1(Z)$ makes this image the distinguished point. This argument treats the relative degree-one set as pointed and retains the component bijection separately. [F1, F8, step 6.1]

8.1 Apply [F9] under [A1] to the CW inclusion $j$. It gives $\rho:W\to Z$ with $\rho j=\mathrm{id}_Z$ and $K:\mathrm{id}_W\simeq j\rho$ fixing $j(Z)$. Put $R=\rho k:X\to Z$. Then $R|_A=\mathrm{id}_A$. The homotopies $\rho D j$ and $rKk$ run respectively from $\mathrm{id}_Z$ to $RF$ and from $\mathrm{id}_X$ to $FR$, by $rj=F$, $rk=\mathrm{id}_X$ and $\rho j=\mathrm{id}_Z$. Both fix $A$: $D$ fixes $k(X)$, $K$ fixes $j(Z)$, and all endpoint maps restrict to the common identity on $A$. Finally composing the homotopy $E$ on the left and right with $R$, and concatenating with reversals of these two homotopies, gives $RQ\simeq\mathrm{id}_Z$ and $QR\simeq\mathrm{id}_X$ rel $A$. This proves the promised relative equivalence for the original $Q$. [F9, A1, step 6.1, step 7.1]

9.1 Empty extension sets in step 1.2 attach no cells; no initial vertices were adjoined, which is essential for the no-low-cell claim. The hypothesis $A\ne\varnothing$ supplies the setting for the stated based groups, but no preferred point of $A$ was selected. The case $n=1$ uses actual stage-one paths for component injectivity; the critical degree $n-1\ge1$ uses the original pair surjection and stage-$n$ kernel-killing cells. Lower and higher ranges are separately proved. Arbitrarily high-dimensional cells of $A$ are all present from the start, so they do not invalidate $Z^i\subseteq Z_i$. If the original pair is equal, the all-data construction may still add cells, but all the conclusions follow from the same argument. The only AC uses occur in steps 6.1 and 8.1, for cellular approximation and compression over arbitrary cell sets. Every earlier construction and every test on one sphere, path or nullhomotopy is choice-free. [F3, F4, A1, step 1.2, step 2.1, step 3.1, step 3.2, step 3.3, step 4.1, step 5.1, step 6.1, step 8.1] ∎
