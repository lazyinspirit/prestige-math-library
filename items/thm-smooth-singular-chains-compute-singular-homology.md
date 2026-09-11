---
id: "thm-smooth-singular-chains-compute-singular-homology"
kind: "theorem"
title: "Smooth singular chains compute singular homology"
deps: ["def-smooth-singular-chain-and-cochain-complexes", "prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains", "lem-relative-smoothing-of-a-continuous-simplex-along-its-faces", "thm-singular-chain-homotopy-formula", "thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold", "def-interior-point-boundary-point-interior-and-boundary-of-a-manifold", "def-the-standard-smooth-step-function", "def-axiom-of-choice", "def-countable-choice"]
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
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 item 18; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. For every smooth manifold $M$, possibly with boundary, the inclusion of smooth into continuous real singular chains induces an isomorphism
$$H_k^\infty(M;\mathbb R)\longrightarrow H_k^{\mathrm{sing}}(M;\mathbb R)$$
in every integer degree. This isomorphism is natural for smooth maps. The proof smooths only finitely many simplices at a time. For boundary targets it moves a finite compact set into the interior; it does not prescribe arbitrary boundary faces during smoothing.

## Facts & Assumptions

**Given:** The strict smooth chain complex and its inclusion into continuous chains.

[F1] Smooth chains form the stated subcomplex ([[def-smooth-singular-chain-and-cochain-complexes]]).

[F2] Subdivision and target-valued smooth homotopy prisms preserve smooth chains ([[prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains]]).

[F3] Boundaryless relative simplex smoothing preserves exactly the prescribed compatible face homotopies and fixes an originally smooth simplex when all of its face homotopies are constant ([[lem-relative-smoothing-of-a-continuous-simplex-along-its-faces]]).

[F4] The ordinary prism identity is the signed top-minus-bottom chain homotopy formula ([[thm-singular-chain-homotopy-formula]]).

[F5] Boundary charts describe a closed boundary and an open boundaryless interior ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]], [[def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]]).

[F6] The standard smooth step takes values in $[0,1]$, is zero for nonpositive inputs and one for inputs at least one ([[def-the-standard-smooth-step-function]]).

[A1] Countable choice is [[def-countable-choice]], the countable instance of [[def-axiom-of-choice]]. It is inherited solely through [F3].

## Proof

1.1 First let $M$ be boundaryless. From any finite list of chains take their finite supports and all iterated faces, identifying equal parametrized maps in each degree. This is a finite face-closed set. Assign each zero-simplex itself and its constant homotopy. Inductively the already assigned face homotopies of a simplex agree on intersections, because the affine face identities produce the same lower-dimensional map. Apply [F3] to give the simplex a smooth replacement and a homotopy with these exact faces. If the simplex was originally smooth, all its faces were smooth and already fixed, so use the fixed clause of [F3]. Only finitely many choices are made at each of finitely many dimensions. [F1, F3, A1]

1.2 Now let $M$ have boundary and let $K\subseteq M$ be compact. Its boundary part is compact by [F5]. For each eligible boundary chart centred at $q=(z_0,0)$, choose $r>0$ so its closed half-ball of radius $3r$ is inside the chart, and put $\chi(z,s)=1-s_0((\|(z,s)-q\|^2-r^2)/(3r^2))$ with step $s_0$ from [F6]. Extend $\chi$ by zero outside the chart. It is smooth, equals one on the radius-$r$ half-ball, and has compact support in the radius-$2r$ half-ball. The family of all such smaller half-balls covers $K\cap\partial M$; take a finite subcover. No chart is selected simultaneously for every boundary point. [F5, F6]

2.1 Replacements respect faces exactly, hence give a chain map $Q$ on the finite graded spans in question. The homotopy prisms give $\partial P+P\partial=Q-1$: apply the oriented-prism calculation [F4] to each simplex homotopy; the side terms are the already assigned face prisms, so cancel with $P\partial$. For a continuous cycle $z$, this gives $Qz-z=\partial Pz$ with $Qz$ smooth, proving surjectivity. If a smooth cycle $z$ bounds a continuous $b$, use the supports of both $b$ and $z$ in step 1.1. Then $Qz=z$ and $\partial Qb=Q\partial b=z$, proving injectivity. Equal nonsmooth faces that cancel in $\partial b$ have the same replacement, so the equality survives all cancellations. No assertion that a constant unnormalized prism vanishes is needed. [F1, F4, step 1.1, algebra]

2.2 For one chosen chart take $0<\varepsilon<r/2$ and define $P_t(z,s)=(z,s+\varepsilon s_0(t)\chi(z,s))$ there, and the identity elsewhere, for every real $t$. The displacement is nonnegative and less than $r/2$; where it is nonzero the original point is within radius $2r$, so the image remains within radius $5r/2<3r$. Thus the map is well-defined into $M$. It is jointly smooth across the chart edge because the support is compactly inside the chart. It preserves interior points, equals the identity for $t\le0$, and at $t=1$ moves inward every boundary point where $\chi>0$. Compose the finitely many maps at the same time to obtain $J_t$ and set $j=J_1$. If an original boundary point of $K$ has not yet moved, all earlier maps have fixed it exactly; eventually its covering bump moves it inward. Once interior, it remains interior. Therefore $j(K)\subseteq M^\circ$. [F5, F6, step 1.2, algebra]

3.1 For a smooth simplex with extension $\bar\tau:O\to M$, $(x,t)\mapsto J_t(\bar\tau(x))$ is smooth into $M$ on $O\times\mathbb R$. Hence [F2] makes the prism $P_J$ preserve smooth chains. The ordinary and smooth identities are both $\partial P_J+P_J\partial=j_\#-1$ by [F4]. If $j\tau$ has image in $M^\circ$, restrict its extension to the open inverse image of $M^\circ$; it is then a strict smooth simplex into that boundaryless manifold. [F1, F2, F4, F5, step 2.2]

4.1 For surjectivity let $z$ be a continuous cycle, and let $K$ be the finite union of its simplex images. Step 2.2 gives $j_\#z$ in $M^\circ$, homologous to $z$ in $M$ by step 3.1. Boundaryless surjectivity from step 2.1 makes $j_\#z$ homologous in $M^\circ$ to a smooth cycle, which is also smooth in $M$. For injectivity let a smooth cycle $z$ satisfy $z=\partial b$ with $b$ continuous, and include both supports in $K$. Then $j_\#z$ is smooth in $M^\circ$ by step 3.1 and bounds $j_\#b$ there. Boundaryless injectivity supplies smooth $c$ in $M^\circ$ with $\partial c=j_\#z$. The smooth prism gives $\partial(c-P_Jz)=j_\#z-(j_\#z-z)=z$. [F1, F2, step 2.1, step 2.2, step 3.1, algebra]

5.1 The actual inclusion of complexes commutes with postcomposition by every smooth map, so its induced isomorphism is natural; no naturality of the chosen finite smoothings or pushes is claimed. For an empty compact boundary part take no chart maps and $J=1$. Empty chains have empty support, and all negative chain groups are zero. Degree-zero cycles and one-point manifolds are covered by steps 1.1–2.1; zero-dimensional manifolds have empty boundary. Constant and repeated simplices are retained. All boundary pushes are finite; the sole countable-choice cost is that of [F3]. [F1, F3, F5, A1, step 1.1, step 2.1, step 2.2, step 4.1] ∎
