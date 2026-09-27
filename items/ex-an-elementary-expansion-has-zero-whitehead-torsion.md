---
id: ex-an-elementary-expansion-has-zero-whitehead-torsion
kind: example
title: "A free-face interval expansion has zero torsion"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-an-elementary-expansion-has-zero-whitehead-torsion, def-elementary-expansion-and-collapse-of-finite-cw-complexes, def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence, def-cell-attachment-by-a-characteristic-map, lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, cor-convex-subsets-of-rn-are-contractible, lem-contractibility-implies-trivial-fundamental-group, prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant, def-based-cellular-chain-complex-of-a-universal-cover]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, Lemma 2.18(1), p.35"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Lemma 2.18(1), p.35"
    - title: "Davis–Kirk, Theorem 11.31(2), p.344"
      url: "https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf"
      locator: "Theorem 11.31(2), p.344"
---
## Statement

Starting from the one-vertex complex $X=\{v\}$, attach a new vertex $w$ and a $1$-cell $e$ running from $v$ to $w$. The new vertex is a free face of the new $1$-cell, so $X\hookrightarrow Y$ is an elementary expansion. The relative universal-cover chains are
$$0\to\mathbb Z\langle e\rangle\xrightarrow{\ 1\ }\mathbb Z\langle w\rangle\to0,$$
so that $\tau(X\hookrightarrow Y)=0$ in $\mathrm{Wh}(1)$. The same computation over any group $\pi$ produces the boundary unit $\pm g$ and the zero Whitehead class.

## Facts & Assumptions

**Given:** The one-vertex complex $X=\{v\}$, a new vertex $w$ and a new $1$-cell $e$ attached from $v$ to $w$, giving $Y=X\cup\{w\}\cup e$.

[F1] An elementary expansion of dimension $n$ is an inclusion $X\hookrightarrow Y$ together with a homeomorphism $\Phi:(D^n,D^{n-1}_+)\to(Q^n,Q^{n-1})$ and a characteristic map $\varphi:Q^n\to Y$ such that $\varphi|_{Q^{n-1}}$ is a characteristic map for the new $(n-1)$-cell $e^{n-1}$, all other boundary values of $\varphi$ lie in $X$, and $Y=X\cup e^{n-1}\cup e^n$; equivalently the new $(n-1)$-cell is a free face of the new $n$-cell, and the pair deformation retracts onto $X$ ([[def-elementary-expansion-and-collapse-of-finite-cw-complexes]], [[def-cell-attachment-by-a-characteristic-map]]).

[F2] The relative cellular chains of a finite CW pair over the universal cover with chosen oriented lifts are finite free right $\mathbb Z[\pi_1]$-modules on the lifts of the relative cells, concentrated in the degrees in which relative cells occur, and the boundary is right group-ring linear ([[def-based-cellular-chain-complex-of-a-universal-cover]], [[lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear]]).

[F3] If $j:X\hookrightarrow Y$ is an elementary expansion of finite CW complexes, then $\tau(j)=0$ in $\mathrm{Wh}(\pi_1Y)$, componentwise, and the only nonzero relative cellular boundary of the pair in suitable oriented lifts is $R\xrightarrow{\ \pm g\ }R$ in two consecutive degrees, with $g\in\pi_1Y$ and $[\pm g]=0$ in $\mathrm{Wh}(\pi_1Y)$ ([[lem-an-elementary-expansion-has-zero-whitehead-torsion]]).

[F4] $\tau$ of a homotopy equivalence of finite CW complexes is the image in the target Whitehead group of the contraction torsion of its algebraic mapping cone; $K_1$ is written additively with $[I]=0$ and $[A^{-1}]=-[A]$, and $\tilde K_1(R)=K_1(R)/\langle[-1]\rangle$, so both $[1]$ and $[-1]$ vanish in $\tilde K_1(R)$ ([[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]], [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

[F5] Every nonempty convex subset of $\mathbb R^n$ is contractible, a contractible space has trivial fundamental group at each basepoint, and the induced maps on all homotopy groups are functorial and invariant under based homotopies ([[cor-convex-subsets-of-rn-are-contractible]], [[lem-contractibility-implies-trivial-fundamental-group]], [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]).

## Proof

**Proof technique:** direct.

1.1 Realize $Y$ as the CW complex with vertex set $\{v,w\}$ and the single $1$-cell $e$ attached by the map $q:S^0=\{-1,+1\}\to Y^0$ with $q(-1)=v$ and $q(+1)=w$. With $Q^1=D^1=[-1,1]$, $Q^0=D^0_+=\{+1\}$ and $\varphi$ the characteristic map of $e$, the restriction $\varphi|_{Q^0}$ is a characteristic map for the new $0$-cell $w$ (mapping $+1$ homeomorphically onto $w$), the remaining boundary value $\varphi(-1)=v$ lies in $X$, and $Y=X\cup\{w\}\cup e$. Hence $X\hookrightarrow Y$ is an elementary expansion of dimension $1$ by [F1], and the new vertex $w$ is a free face of $e$. [F1]

1.2 The pair $(Y,X)$ deformation retracts onto $X$ by [F1]; the retraction $r:Y\to X$ therefore satisfies $r\circ i=\mathrm{id}_X$ for the inclusion $i:X=\{v\}\hookrightarrow Y$ and $i\circ r\simeq\mathrm{id}_Y$. The one-point space $X$ is a nonempty convex subset of $\mathbb R^1$, hence contractible with $\pi_1(X,v)=1$ by [F5], and functoriality together with based-homotopy invariance of the induced maps gives $i_*\circ r_*=(i\circ r)_*=\mathrm{id}$ and $r_*\circ i_*=(r\circ i)_*=\mathrm{id}$ on $\pi_1$, so $i_*:\pi_1(X,v)\to\pi_1(Y,v)$ is an isomorphism and $\pi_1(Y,v)=1$; the edge $e$ supplies a path from $v$ to $w$, so basepoint change also gives $\pi_1(Y,w)=1$. [F1, F5]

1.3 Over the universal cover the pair $(Y,X)$ has exactly two relative cells, the lift of $w$ in degree $0$ and the lift of $e$ in degree $1$, so by [F2] the relative based chain complex $T_\bullet$ is concentrated in degrees $0$ and $1$ with a single displayed basis vector in each degree and its differential has the $1\times1$ right-module matrix $\pm1$: the characteristic map restricts to a homeomorphism on the free face, so the incidence of $w$ in the boundary of the lift of $e$ is $\pm1$. This is the complex displayed in the statement, where the orientation is chosen so that the entry is $1$. [F1, F2]

2.1 With the contraction $s(e_0)=e_1$ for the displayed differential $d(e_1)=e_0$, the odd-to-even map $(d+s)_{\mathrm{odd}}:T_1\to T_0$ is $d$ and has the $1\times1$ matrix $(1)$. Thus $\tau(T_\bullet)=[1]=0$ in $\tilde K_1(\mathbb Z)$. Reversing either cell orientation changes the matrix to $(-1)$, whose class is also $0$ in the reduced group. The resulting image in $\mathrm{Wh}(1)$ vanishes. [F2, F4, step 1.3]

2.2 By [F3] applied to the elementary expansion $j:X\hookrightarrow Y$ of step 1.1, $\tau(X\hookrightarrow Y)=0$ in $\mathrm{Wh}(\pi_1Y)=\mathrm{Wh}(1)$ by step 1.2; the relative boundary is the unit $\pm g$ of [F3] with $g$ the group element determined by the chosen lifts, and $[\pm g]=0$ in $\mathrm{Wh}(\pi_1Y)$ since here $g=1$. [F3, step 1.1, step 1.2]

3.1 The identical computation applies to an elementary expansion performed on any finite CW complex: by [F3] the only nonzero relative cellular boundary of the pair is the unit $\pm g$ in two consecutive degrees and the class $[\pm g]$ dies in $\mathrm{Wh}(\pi_1Y)$, so the boundary unit $\pm g$ produces zero Whitehead class over any group $\pi$. [F3] ∎
