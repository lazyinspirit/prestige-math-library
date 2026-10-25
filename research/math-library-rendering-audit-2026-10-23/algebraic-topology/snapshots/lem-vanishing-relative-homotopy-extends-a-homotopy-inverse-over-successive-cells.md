---
id: "lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells"
kind: "lemma"
title: "Vanishing relative homotopy extends an inverse over cells"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-relative-cubical-disk-model-and-compression","prop-relative-cw-inclusions-are-cofibrations","def-skeleta-cw-subcomplex-and-relative-cw-complex","def-cw-complex-with-closure-finiteness-and-weak-topology","thm-the-exponential-law","lem-finite-choice","thm-recursion","def-axiom-of-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Lemma 4.6 and the subcomplex case of Theorem
        4.5, printed pp.346–347
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $i:X\hookrightarrow Z$ be the inclusion of a CW subcomplex, with supplied characteristic maps. Suppose $\pi_0(X)\to\pi_0(Z)$ is bijective and $\pi_n(Z,X,x)$ is the one-element pointed set or trivial group for every $x\in X$ and every $n\ge1$. If $Z\setminus X$ has finitely many cells, there are, without any choice principle, a continuous map $r:Z\to X$ and a homotopy $H:Z\times I\to Z$ with
$$ri=\mathrm{id}_X,\qquad H(z,0)=z,\qquad H(z,1)=i(r(z)),\qquad H(i(x),t)=i(x).$$
Assuming the Axiom of Choice, the same conclusion holds for an arbitrary set of cells and unbounded dimension. Thus the conclusion is a deformation retraction fixing the whole subcomplex throughout.

## Facts & Assumptions

[F1] [[lem-relative-cubical-disk-model-and-compression]] says that a relative disk is null precisely when it compresses into the subspace by a homotopy fixing its entire boundary, including in degree one.

[F2] [[prop-relative-cw-inclusions-are-cofibrations]] gives the homotopy extension property for any CW subcomplex, without assuming a choice principle.

[F3] [[def-skeleta-cw-subcomplex-and-relative-cw-complex]] and [[def-cw-complex-with-closure-finiteness-and-weak-topology]] give the subcomplexes, attachment quotients and weak topology on closed cells.

[F4] [[thm-the-exponential-law]] transposes homotopies with the ordinary interval factor to continuous maps into $C(I,Z)$. The characteristic-disk quotient and weak-topology argument in the proof of [F2] therefore tests a CW-domain homotopy on all its characteristic disk cylinders.

[F5] [[lem-finite-choice]] supplies a selection from a finite family of nonempty witness sets in ZF. [[thm-recursion]] iterates a specified successor function on a set.

[A1] [[def-axiom-of-choice]] is assumed only in the arbitrary-cell clause, to choose compressions, paths and HEP extensions from the sets of all such problems described below.

## Proof

**Given:** The CW pair $(Z,X)$ and the relative vanishing and component hypotheses. Put $D_n=X\cup Z^n$ and $D_{-1}=X$.

1.1 For a map $u:(D^n,S^{n-1})\to(Z,X)$ with $n\ge1$, use the fixed marked boundary point $b=(1,0,\ldots,0)$ and the actual point $x=u(b)$. It is a disk representative of a relative class based at $x$. The hypothesis at this very basepoint and [F1] give a homotopy from $u$ into $X$ fixing all of $S^{n-1}$. No constant-boundary assumption and no choice of transport paths are needed. For $n=1$ the same statement fixes both endpoints, even if they were initially different points of $X$. For $n=0$, a disk is a point $z$ of $Z$; surjectivity on path components supplies a path from $z$ to some point of $X$, which is exactly its required compression. Only surjectivity, rather than injectivity, on components is needed in this construction. [F1, given]

1.2 The continuity test to be used is valid for arbitrary cell sets. If a function $K:W\times I\to Z$, with $W$ a CW complex, is continuous on every characteristic disk cylinder, each track is continuous and its transpose $\widehat K:W\to C(I,Z)$ is defined. By [F4], its composite with each characteristic map is continuous. A characteristic map is quotient onto its closed cell: by [F3] it is surjective there, and its compact disk domain and Hausdorff CW target make it a closed map. Thus $\widehat K$ is continuous on every closed cell. The weak topology [F3] makes the inverse image of each closed subset of $C(I,Z)$ closed in $W$, so $\widehat K$ is continuous. Untransposing gives continuity of $K$ in the ordinary product topology. This also applies to the subcomplexes $D_n$, even when $X$ has cells in unbounded dimensions. [F3, F4]

2.1 Start with $f_{-1}=\mathrm{id}_Z$. Suppose $f_{n-1}:Z\to Z$ fixes $X$ and sends $D_{n-1}$ into $X$. For every relative $n$-cell with characteristic map $\chi_e$, its composite $f_{n-1}\chi_e$ satisfies the disk problem of step 1.1: the attaching boundary lies in $D_{n-1}$. Use a supplied witness compression for each such cell. Together with the stationary homotopy on $D_{n-1}$, these maps agree on every boundary identification and give a homotopy $L_n:D_n\times I\to Z$. On each new characteristic disk it is its chosen compression, and on all closed cells of $X$ or of lower dimension it is stationary. Step 1.2 proves continuity. Its final image lies in $X$. Apply [F2] to $(Z,D_n)$ to extend it to $K_n:Z\times I\to Z$ starting at $f_{n-1}$, and put $f_n=K_n(-,1)$. This fixes $D_{n-1}$ throughout $K_n$, and $f_n(D_n)\subseteq X$. In particular every map and homotopy still fixes $X$ pointwise. [F2, F3, step 1.1, step 1.2]

3.1 If there are no relative cells, take $r=\mathrm{id}_X$ and the constant homotopy. Otherwise finitely many relative cells have a maximum dimension $N$. For each of the finitely many stages $0,\ldots,N$, enumerate the finite cell set at that stage and apply the finite clause of [F5] to its nonempty compression sets and to the nonempty set of HEP extensions supplied by [F2]. This is a finite sequence of existential choices, not a chosen infinite sequence, and remains valid even if $X$ itself is infinite. Concatenate $K_0,\ldots,K_N$ on successive equal subintervals. Finite pasting gives a homotopy from the identity to $f_N$ fixed on $X$, and $f_N(Z)=f_N(D_N)\subseteq X$. [F2, F5, step 2.1]

3.2 For an arbitrary cell set assume [A1]. Form the set of all problems $(n,u)$ of step 1.1, with $n\ge1$ and $u:(D^n,S^{n-1})\to(Z,X)$, together with the point problems $(0,z)$ for $z\in Z$. These form a set because their functions are subsets of fixed domain-target products, followed by a union over $n\in\mathbb N$. Each problem has a nonempty set of continuous compression homotopies, or of paths in the point case. Form also the set of all HEP problems that can arise in step 2.1; their initial maps, prescribed subcomplex homotopies and candidate extensions are subsets of fixed products formed from $Z$, $I$ and $Z$, and [F2] makes every candidate-extension set nonempty. AC supplies choice functions for both families. Use those same functions on $f_{n-1}\chi_e$ and on the resulting HEP problem at every stage of step 2.1. This specifies the successor on the set of finite histories of maps and homotopies on the fixed spaces. Recursion [F5] gives all $f_n,K_n$. This is the exact choice use: no additional countable selection of stage witnesses is left implicit. [A1, F2, F5, step 1.1, step 2.1]

4.1 In the arbitrary-cell case run $K_n$ on $[1-2^{-n},1-2^{-(n+1)}]$ by linear time rescaling. The successive endpoints agree. If $z\in Z^d$, all stages with $n>d$ fix $z$, since $z\in D_{n-1}$. Define $f_\infty(z)=f_d(z)$ and set $H(z,1)=f_\infty(z)$. Compatibility makes these values independent of a larger choice of $d$. On any characteristic $d$-disk, $H$ is a concatenation of the finitely many restrictions through stage $d$, followed by the stationary endpoint for the rest of the interval. It is therefore continuous on that whole disk cylinder, including at time one. Step 1.2 gives continuity on $Z\times I$. It fixes $X$, starts at the identity and ends with image in $X$. [step 1.2, step 2.1, step 3.2]

5.1 In either case write $f$ for the final map into $Z$, whose image is contained in $X$, and let $r$ be the same function with codomain $X$. It is continuous for the subspace topology: for $V=X\cap U$ with $U$ open in $Z$, one has $r^{-1}(V)=f^{-1}(U)$. Since the homotopy fixes $X$, $ri=\mathrm{id}_X$ and its endpoint is $ir$. These are exactly the four required identities. If $X$ is empty, the component hypothesis forces $Z$ empty and the unique empty maps satisfy them. If $X=Z$, including a singleton, the constant construction applies. Relative zero-cells use actual connecting paths, degree-one cells use both fixed endpoints, and higher cells require no regularity of their attaching maps. The finite branch remains choice-free; the arbitrary branch uses AC exactly in step 3.2, with the accumulating-time endpoint verified in step 4.1. [step 1.1, step 3.1, step 4.1] ∎
