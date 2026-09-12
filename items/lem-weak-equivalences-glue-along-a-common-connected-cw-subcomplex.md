---
id: "lem-weak-equivalences-glue-along-a-common-connected-cw-subcomplex"
kind: "lemma"
title: "Weak equivalences glue along a common connected CW subcomplex"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-weak-homotopy-equivalence","def-n-connected-cw-pair","lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex","lem-compact-cw-images-have-finite-cell-support-without-choice","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness","lem-finite-relative-homotopy-lifting-across-a-weak-equivalence","thm-cellular-approximation-for-maps-of-cw-pairs","lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes","prop-higher-homotopy-basepoint-transport-and-moving-homotopies","def-higher-homotopy-group-by-based-cubes"]
sources:
  references:
    - title: May, A Concise Course, Chapter11 §3 p87, weak CW-triad reduction;
        Chapter10 §3 p75 HELP; finite-data proof supplied locally
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $X=A\cup B$ be a CW complex decomposed into subcomplexes with intersection $C\ne\varnothing$. Suppose $C$ is path-connected and $(A,C),(B,C)$ are $0$-connected. Let $P_A,P_B$ be CW complexes containing the same CW subcomplex $C$, and let $q_A:P_A\to A$, $q_B:P_B\to B$ be weak homotopy equivalences equal to the identity on $C$.

Then the ordinary amalgamated union $P=P_A\cup_C P_B$ is a CW complex and the glued map $q:P\to X$ is a weak homotopy equivalence. This assertion uses no choice principle. No global homotopy inverses or global cellular approximations of $q_A,q_B$ are assumed.

## Facts & Assumptions

[F1] [[def-weak-homotopy-equivalence]] gives component bijectivity and all-basepoint isomorphisms. [[def-n-connected-cw-pair]] says that $0$-connectedness means that every ambient component meets the subspace.

[F2] [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] constructs a CW union by attaching one side's supplied relative cells to the other and gives its final map-out topology.

[F3] [[lem-compact-cw-images-have-finite-cell-support-without-choice]] gives finite CW support for each compact image. [[thm-heine-borel-rn]] and [[thm-compactness-agrees-with-metric-compactness]] give compact cubes, disks and characteristic disk cylinders.

[F4] [[lem-finite-relative-homotopy-lifting-across-a-weak-equivalence]] lifts maps on a CW pair with finitely many relative cells, using a supplied boundary homotopy; the lift extends the boundary map exactly and constant boundary tracks stay constant. No choice is used.

[F5] [[thm-cellular-approximation-for-maps-of-cw-pairs]] applies choice-free to a source with finitely many cells outside its fixed cellular subcomplex.

[F6] [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]] proves the CW structure and endpoint embeddings for the relative cylinder of a cellular map fixed on $C$. It identifies the cells outside the source endpoint as the target cells outside $C$ and one prism cell for every source cell outside $C$; finiteness follows only when both of those cell sets are finite.

[F7] [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] gives transport isomorphisms; its radial-shell formula commutes with postcomposition. [[def-higher-homotopy-group-by-based-cubes]] supplies based cubes and based nullhomotopies.

## Proof

**Given:** All spaces and maps in the statement. Choose one point $c\in C$; this is one existential instantiation, not a family of choices.

1.1 Build $P$ from $P_B$ by adjoining the vertices and then the positive-dimensional cells of $P_A\setminus C$ using their supplied boundaries. The boundaries have finite support and are cellular, so [F2] proves that the result is CW with both sides as subcomplexes. Its underlying set identifies exactly the common $C$, and its map-out test is continuity on the two endpoint spaces agreeing on $C$, hence is the ordinary amalgamated topology. The maps $q_A,q_B$ therefore glue continuously to $q$. The spaces $A,B$ are path-connected: each point is joined to a point of $C$ by [F1], and points of $C$ are mutually joined. Since $q_A,q_B$ induce component bijections, $P_A,P_B$ are also path-connected. Thus $X$ and $P$ are path-connected, and $q$ is automatically bijective on components. [F1, F2, given]

2.1 Let $i\ge1$ and let $u:(I^i,\partial I^i)\to(X,c)$ be a based cube. By [F3], its image lies in a finite subcomplex $T$ of $X$. Put $K=C\cup T$, $K_A=K\cap A$, $K_B=K\cap B$. These are subcomplexes, $K_A\cap K_B=C$, and each $K_A,K_B$ has finitely many cells outside $C$. Apply [F4] to $q_A$, the source pair $(K_A,C)$, the inclusion $K_A\to A$, the identity $C\to P_A$ and the constant homotopy on $C$. It gives $w_A:K_A\to P_A$ equal to the identity on $C$ and a homotopy from the inclusion to $q_Aw_A$ rel $C$. Do the same on the $B$ side. The two maps and homotopies agree on $C$ and glue continuously on $K=K_A\cup K_B$: the sides are closed subcomplexes, and their cylinder products form a finite closed cover of $K\times I$. This gives $w:K\to P$ and a homotopy $\mathrm{incl}_K\simeq qw$ fixed on $C$. Composing with $u$ proves that $q_*[wu]=[u]$. Therefore $q_*:\pi_i(P,c)\to\pi_i(X,c)$ is surjective. [F3, F4, step 1.1]

2.2 For injectivity, let $u:(I^i,\partial I^i)\to(P,c)$ have a based nullhomotopy $H$ after composing with $q$. By [F3] put the image of $u$ in a finite source subcomplex $S\subseteq P$, and set $L=C\cup S$, $L_A=L\cap P_A$, $L_B=L\cap P_B$. Each $L_A,L_B$ is finite relative to $C$. Apply [F5] separately to $q_A|_{L_A}:L_A\to A$ and $q_B|_{L_B}:L_B\to B$, fixing $C$, where both maps are already the cellular identity. Obtain cellular $F_A,F_B$ and homotopies $E_A:q_A|_{L_A}\simeq F_A$, $E_B:q_B|_{L_B}\simeq F_B$ rel $C$. They glue to a cellular map $F:L\to X$ and a homotopy $E:q|_L\simeq F$ rel $C$. These are two applications of finite-relative cellular approximation; no approximation of either whole $q_A$ or $q_B$ is selected. [F3, F5, step 1.1]

3.1 There is a finite-relative target subcomplex $K=C\cup T\subseteq X$ containing the image of $H$ and all of $E$. Indeed $H$ has compact cube domain. On each of the finitely many characteristic cells of $L\setminus C$, the composite of $E$ with its characteristic disk cylinder has compact domain by [F3], so its image lies in a finite target subcomplex. A finite union of these finite subcomplexes, together with one for $H$, is a finite subcomplex $T$. The remaining part $E(C\times I)$ is just $C$. This also includes the endpoints $q(L),F(L)$. Set $K_A=K\cap A$, $K_B=K\cap B$. Then $F_A:L_A\to K_A$ and $F_B:L_B\to K_B$ are cellular maps of CW complexes fixed on $C$; corestriction is continuous because these are subspaces. The reversed homotopy $E\circ(u\times\mathrm{id})$ followed by $H$ is a based nullhomotopy of $Fu$ wholly in $K$. [F3, step 2.2]

4.1 Form the relative cylinder $W$ of $F:L\to K$ fixed on $C$, using [F6]. It has top inclusion $j:L\hookrightarrow W$, target inclusion $k:K\hookrightarrow W$, and retraction $r:W\to K$ with $rj=F$. The cell description splits it into subcomplexes $W_A,W_B$ with intersection $C$: use the target cells of $K_A$ and the top and prism cells of $L_A\setminus C$ for $W_A$, and the corresponding $B$ cells for $W_B$. Their characteristic boundaries stay on their indicated side because $F_A,F_B$ do. Each is the relative cylinder of that side's map. In particular $(W_A,j(L_A))$ and $(W_B,j(L_B))$ are CW pairs with finitely many relative cells: by [F6] those relative cells are exactly the target cells of $K_A\setminus C$ or $K_B\setminus C$ and the prism cells over $L_A\setminus C$ or $L_B\setminus C$, respectively, and all four sets are finite by steps 2.2–3.1. The possibly infinite common $C$ introduces no new relative cells. [F6, step 2.2, step 3.1]

5.1 Apply [F4] to $q_A:P_A\to A$ with source pair $(W_A,j(L_A))$. Its target map is $v_A:W_A\xrightarrow{r}K_A\hookrightarrow A$ and its prescribed lift on $j(L_A)$ is $j(l)\mapsto l\in P_A$. On that subcomplex $v_Aj=F_A$, so the reversed homotopy $E_A$ is exactly the required homotopy from $v_A|_{j(L_A)}$ to $q_A$ of the prescribed lift. Thus [F4] gives a continuous $w_A:W_A\to P_A$ extending the inclusion of $L_A$ exactly. Apply the identical argument on the $B$ side. Both maps equal the identity on $C$, so closed pasting gives a continuous $w:W\to P$ with $wj=\mathrm{incl}_L$. No global inverse of a weak equivalence has been invoked. [F4, step 2.2, step 4.1]

6.1 The cylinder height homotopy in [F6] joins $ju$ to $kFu$ while fixing the cubical boundary at $c$, since $c\in C$ has its whole cylinder track collapsed. Step 3.1 supplies a based nullhomotopy of $Fu$ in $K$, hence of $kFu$ in $W$. Concatenation proves that $ju$ is based null in $W$. Composing with $w$ from step 5.1 gives a based nullhomotopy of $wju=u$ in $P$. Therefore the homomorphism $q_*$ at $c$ has trivial kernel. Together with step 2.1 it is an isomorphism in every positive degree, including degree one without an abelian assumption. [F6, F7, step 2.1, step 3.1, step 5.1]

7.1 For arbitrary $p\in P$, path-connectedness in step 1.1 supplies one path from $c$ to $p$. The transport square for this path and its image under $q$ commutes by the representative formula in [F7]. Since the map at $c$ is an isomorphism by step 6.1, the map at $p$ is an isomorphism as well. Combining with component bijectivity from step 1.1 proves weak equivalence [F1]. Only a path for the one point currently under consideration is used. [F1, F7, step 1.1, step 6.1]

8.1 Nonempty $C$ is required to supply $c$ and the single-component reduction; empty $C$ is outside this statement. A side equal to $C$ and empty relative cell sets cause no change in the constructions or finite lifting arguments. All degrees are positive in the group calculation, and components were treated separately. Constant cubes and repeated cell-boundary identifications retain their prescribed values because every construction fixes $C$ and every lift extends its specified source subcomplex exactly. The nullhomotopy in step 6.1 fixes the basepoint even when $c$ is not a vertex. The only witness families taken together in steps 2.1–5.1 are finite, or are given data on the common $C$; each cellular approximation and lifting has finitely many relative source cells. This proves the claim without AC. [F3, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1] ∎
