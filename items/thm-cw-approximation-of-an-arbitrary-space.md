---
id: "thm-cw-approximation-of-an-arbitrary-space"
kind: "theorem"
title: "CW approximation of an arbitrary space"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-cellular-approximation-for-maps-of-cw-pairs","lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex","lem-compact-cw-images-have-finite-cell-support-without-choice","prop-cubical-and-spherical-models-of-higher-homotopy-agree","prop-higher-homotopy-basepoint-transport-and-moving-homotopies","thm-transfinite-recursion","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-closed-subspace-of-a-compact-space-is-compact"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Proposition 4.13; May Chapter 10 §5
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For every topological space $X$ there are a CW complex $\Gamma X$ and a continuous map $\gamma:\Gamma X\to X$ that induces a bijection on path components and isomorphisms $\pi_n(\Gamma X,z)\to\pi_n(X,\gamma(z))$ for every $z\in\Gamma X$ and every $n\ge1$.

More generally, given a CW complex $P$ with supplied structure and a continuous map $q:P\to X$, there are a CW complex $Z$ containing $P$ as a subcomplex and a map $Q:Z\to X$ extending $q$ with those same weak-equivalence properties. In particular, for a pair $(X,A)$ a prescribed CW approximation $q_A:P\to A$ extends to a map of pairs $(Z,P)\to(X,A)$ whose map on the whole spaces is a CW approximation of $X$ and whose restriction is exactly $q_A$.

No choice principle is assumed. Cells are indexed by all actual maps and extension data, not by a selected set of homotopy-class representatives. Only the finite-source clause of cellular approximation is used. No separation or compact-generation assumption is placed on $X$.

## Facts & Assumptions

[F1] [[thm-cellular-approximation-for-maps-of-cw-pairs]] makes a map from a finite CW pair cellular rel its specified subcomplex, without choice.

[F2] [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] proves that the supplied cellular attachments with finite boundary support form a CW complex, preserving earlier closed subcomplexes, and gives the continuous map-out test.

[F3] [[lem-compact-cw-images-have-finite-cell-support-without-choice]] gives finite cell support for each compact-source image in a CW complex. [[thm-heine-borel-rn]] and [[thm-compactness-agrees-with-metric-compactness]] give compact spheres, disks and their cylinders. [[thm-compact-subset-of-a-hausdorff-space-is-closed]] and [[thm-closed-subspace-of-a-compact-space-is-compact]] give the compact-to-Hausdorff closed-map test used for the cone quotient.

[F4] [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]] identifies based sphere classes and boundary-constant cube classes, including their group laws.

[F5] [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] gives path-induced isomorphisms and their inverses on all $\pi_n$, $n\ge1$. Its radial-shell formula commutes pointwise with continuous postcomposition.

[F6] [[thm-transfinite-recursion]], applied to the well-order $\mathbb N$, gives recursion for a definable class function producing sets. It uses ZF Replacement and no AC, so the sets of cells need not lie in one fixed set supplied in advance.

## Proof

**Given:** An arbitrary topological space $X$, a supplied CW complex $P$, and a continuous map $q:P\to X$. The absolute case will take $P=\varnothing$.

1.1 Form $Z_0=P\sqcup\{v_x:x\in X\}$, with the new vertices discrete, and put $Q_0|_P=q$, $Q_0(v_x)=x$. This is continuous because the disjoint pieces are open. All vertices of every later stage will be exactly those of $P$ and these new vertices. No path component or point in a component is selected. Give each sphere used below its finite CW structure with its designated basepoint a vertex. The based quotient model in [F4] gives this structure by one zero-cell and one top cell; $S^0$ is two vertices. A disk boundary and disk can use the corresponding finite CW pair structure. [F2, F4, given]

2.1 Suppose $Z_{k-1}$ is CW and $Q_{k-1}:Z_{k-1}\to X$ is specified, for $k\ge1$. Let $\mathcal E_k$ be the set of all pairs $(a,b)$ where $a:S^{k-1}\to Z_{k-1}$ is cellular and $b:D^k\to X$ is continuous, with $$b|_{S^{k-1}}=Q_{k-1}\circ a.$$ For $k=1$, cellular means that the two boundary points go to vertices. Attach one labeled $k$-disk for every member of $\mathcal E_k$, using $a$ as its attaching map, and define $Q_k$ on this disk to equal its stored map $b$. It agrees with $Q_{k-1}$ on the boundary, so the attachment quotient makes $Q_k$ continuous. These are sets: each map is a subset of the relevant domain-codomain Cartesian product; continuity, cellularity and the boundary equation cut out subsets of their power sets. Labels distinguish different extension data even when their boundary maps coincide. [F2, step 1.1]

3.1 Every attaching image in step 2.1 meets finitely many cells by [F3], and it lies in $Z_{k-1}^{k-1}$ because $a$ is cellular. Thus [F2] proves that $Z_k$ is CW with the preceding stage a closed subcomplex. This proves the induction assertion needed to make the next stage legitimate. The construction of its quotient topology, labeled cells and stored map is specified by the preceding data, rather than chosen from possible extensions. Apply [F6] to the finite histories of these constructions (and use a fixed default value on invalid histories) to produce all stages. Taking their union with the weak attachment topology gives a CW complex $Z$ by [F2], and their compatible maps give a continuous $Q:Z\to X$ extending $q$. Every stage is a closed subcomplex of $Z$. The number of cells can grow with $k$; Replacement in [F6] is precisely what collects this set-sized sequence. [F2, F3, F6, step 2.1]

4.1 Each point of $Z$ can be joined to a vertex. In a positive-dimensional open cell, use its interior characteristic preimage and a line segment to a boundary point of the disk; the image is a path ending in a lower-dimensional cell. Repeat in that cell until dimension zero is reached. This terminates after finitely many decreases, so requires only finitely many existential choices for one specified point. Zero-cells are already vertices. For any vertices $u,v$ whose images can be joined by a path $b:I\to X$, their endpoint map is a cellular $a:S^0\to Z_0$ and $(a,b)\in\mathcal E_1$, so its attached edge joins $u,v$ in $Z$. Every component of $X$ is met by some $v_x$ (indeed every point is met). If two points of $Z$ have images in the same component, join each to a vertex as above, compose their image paths with a connecting path in $X$, and use the corresponding edge to join the vertices. The original two points are then in the same component of $Z$. Conversely, $Q$ sends any connecting path to a connecting path. This proves the bijection on path components without selecting a vertex for every component simultaneously. [step 1.1, step 2.1, step 3.1]

4.2 Fix any vertex $v\in Z$ and $n\ge1$. A based class in $\pi_n(X,Q(v))$ has, by [F4] and the cube-disk radial homeomorphism, a representative $b:D^n\to X$ constant at $Q(v)$ on its boundary. The constant map $a:S^{n-1}\to\{v\}\subset Z_{n-1}$ is cellular, so this pair occurs in $\mathcal E_n$. The characteristic disk of its attached cell has boundary constantly $v$; it therefore descends to a based sphere map into $Z_n$, whose composite with $Q$ is the given representative. Descent is continuous by the quotient definition, and the chosen identification $D^n/\partial D^n\cong S^n$ is the same for the original and lifted representatives. Thus $Q_*$ is onto at every vertex in every positive degree. [F4, step 1.1, step 2.1, step 3.1]

4.3 To prove injectivity, let $u:(S^n,*)\to(Z,v)$ have nullhomotopic composite with $Q$. Apply the finite-source clause of [F1] to obtain a based homotopy from $u$ to a cellular $a:S^n\to Z$. Its image lies in $Z^n$, which is contained in $Z_n$: all cells added after stage $n$ have higher dimension, while every old cell of $P$ was present initially. Since $Z_n$ embeds with its subspace topology, $a$ is a continuous cellular map into $Z_n$. The homotopy composed with $Q$ followed by the specified nullhomotopy gives a based nullhomotopy of $Qa$. It defines a disk map $b:D^{n+1}\to X$ extending $Qa$: collapse the terminal sphere of $S^n\times I$ to obtain its cone, identified with the disk by $(z,t)\mapsto(1-t)z$. The quotient is compact by pulling covers back to the compact sphere cylinder. Its closed subsets are compact and their images in the Hausdorff disk are closed by [F3], so this continuous bijection is a homeomorphism; the nullhomotopy therefore descends continuously to the disk. Consequently $(a,b)\in\mathcal E_{n+1}$. Its attached disk extends $a$ in $Z$. If $s_0$ is the marked boundary point of that disk, composing its characteristic map with $(z,t)\mapsto(1-t)z+ts_0$ for $z\in S^n$ contracts $a$ to $v$ while fixing the marked point. Hence $a$, and therefore $u$, is based-nullhomotopic. Postcomposition with $Q$ commutes with cubical concatenation, so [F4] makes $Q_*$ a homomorphism. Its kernel is trivial, which proves injectivity. [F1, F3, F4, step 2.1, step 3.1]

5.1 Now fix any $z\in Z$ and one path $c$ from a vertex $v$ to $z$, whose existence was proved in step 4.1. By [F5], transport gives isomorphisms from the groups based at $z$ to those based at $v$, and from the groups based at $Q(z)$ to those based at $Q(v)$. The square with the maps induced by $Q$ commutes: the radial-shell transport formula is a representative map on a cube using the original representative on its core and the path on its shell, so composing with $Q$ replaces the path by $Qc$ and the core by its composite. The bottom vertex-based map is an isomorphism by steps 4.2 and 4.3; conjugating it by these two transport isomorphisms proves the same for $Q_*:\pi_n(Z,z)\to\pi_n(X,Q(z))$. This chooses one path only after one basepoint has been fixed; it is not a simultaneous choice of paths for all points. [F5, step 4.1, step 4.2, step 4.3]

6.1 Taking $P=\varnothing$ gives the asserted $\Gamma X$ and $\gamma$. For a pair $(X,A)$ with prescribed approximation $q_A:P\to A$, apply exactly the same construction to its composite with the inclusion $A\hookrightarrow X$. The resulting $Q$ agrees literally with that composite on the unchanged subcomplex $P$, so it is a map of pairs with the required restriction, and steps 4.1–5.1 give its whole-space weak equivalence. This argument only uses that the prescribed source $P$ is CW; it does not require $A$ or $X$ to be Hausdorff. No mapping-cylinder theorem with a narrower category of spaces is used. [step 1.1, step 3.1, step 4.1, step 5.1]

7.1 If $X=\varnothing$, the existence of $q$ forces $P=\varnothing$, and there are no vertices or extension data, so $Z=\varnothing$; the component assertion and all basepoint assertions have their stated vacuous meanings. Empty extension sets at any stage simply attach no cells. For $n=1$, step 4.2 attaches loops from all actual path loops and step 4.3 attaches disks for their actual nullhomotopies; trivial kernel implies injectivity for this possibly nonabelian group as well. Degree zero was proved by actual connecting paths rather than by a group argument. Finite-source cellular approximation and canonical indexing of all data preserve the choice-free claim. The zero and endpoint conditions on every attached disk are its stored boundary equation, not additional extension assumptions. [F1, F4, F6, step 2.1, step 4.1, step 4.2, step 4.3, step 6.1] ∎
