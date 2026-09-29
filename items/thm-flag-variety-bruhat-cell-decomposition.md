---
id: thm-flag-variety-bruhat-cell-decomposition
kind: theorem
title: Bruhat cells of the flag variety
status: published
origin: pipeline
landmark: true
deps:
  - thm-semisimple-flag-variety-smooth-projective
  - lem-semisimple-bruhat-double-cosets
  - lem-semisimple-opposite-borel-big-cell
  - lem-semisimple-flag-torsor-zariski-charts
  - lem-semisimple-rank-one-sl2-root-homomorphism
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-weyl-group-of-a-root-system
  - prop-weyl-length-equals-positive-root-inversion-number
  - thm-chevalley-constructible-image-varieties
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7, 17, 20-23, especially 7.18, 17.3, 20.32, 21.68-21.91, 22.17-22.27, 23.59"
    - title: "Michel Brion, Lectures on the Geometry of Flag Varieties"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf
      locator: "§§1.2-1.4 and §2.1 (Bruhat decomposition and Schubert cells)"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with Borel $B=T\ltimes U$, maximal torus $T$,
root system $\Phi$, positive system $\Phi^+$ and Weyl group $W=N_G(T)/T$ fixed
in [[def-complex-semisimple-algebraic-group-borel-and-flag-variety]] and
[[lem-semisimple-borel-root-factorization]], and let $X_B=G/B$ be the flag
variety with its quotient morphism $\pi_B:G\to X_B$ of
[[thm-semisimple-flag-variety-smooth-projective]]. For $w\in W$ let $n_w$ be a
representative and let $BwB/B:=\pi_B(Bn_wB)$ be the image of the double coset.
Then:

(i) $X_B$ is the disjoint union of the $B$-orbits $BwB/B$, $w\in W$, under the
left action of $B$ on $X_B$; each $BwB/B$ is a locally closed irreducible
subvariety of $X_B$ (a Bruhat cell);

(ii) for every $w\in W$ there is an isomorphism of varieties
$$BwB/B\;\cong\;U_w=\prod_{\alpha\in\Phi^+\cap w\Phi^-}U_\alpha\;\cong\; \mathbb A^{\ell(w)},$$
so each cell is affine of dimension $\ell(w)$; and

(iii) the cell of the longest element $w_0\in W$ is the unique open dense cell;
it is isomorphic to $\mathbb A^{|\Phi^+|}$ and is the image of the big open
cell $\Omega=U^-B$ of [[lem-semisimple-opposite-borel-big-cell]] under the
automorphism of $X_B$ induced by left translation by $n_{w_0}$.

## Facts & Assumptions

**Given:** the group $G$, its Borel $B=T\ltimes U$, maximal torus $T$ and opposite data $U^-,B^-$, the root system $\Phi$ with positive system $\Phi^+$, the Weyl group $W$ with representatives $n_w$, the flag variety $X_B=G/B$ with quotient morphism $\pi_B$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] $X_B=\pi_B(G)$ is a nonempty closed irreducible smooth projective subvariety of $\mathbb P(W_B)$ on which $G$ acts transitively, $\pi_B$ is a surjective morphism whose fibres are exactly the right cosets $gB$, and the bijection $G/B\to X_B$, $gB\mapsto g[v_B]$, exhibits $X_B$ as an algebraic quotient of $G$ by right translation by $B$, compatible with the proved Zariski-local product sections of the flag torsor. ([[thm-semisimple-flag-variety-smooth-projective]], [[lem-semisimple-flag-torsor-zariski-charts]])

[F2] $G$ is the disjoint union of the double cosets $Bn_wB$, $w\in W$; for every $w$ the multiplication morphism $$U_w\times B\longrightarrow Bn_wB,\qquad(u,b)\longmapsto u\,n_w\,b,$$ is an isomorphism of varieties onto $Bn_wB$; and $U_w\cong\mathbb A^{\ell(w)}$ with $\dim U_w=\ell(w)$. ([[lem-semisimple-bruhat-double-cosets]])

[F3] The multiplication morphism $U^-\times T\times U\to G$ is an open immersion onto a nonempty open dense subscheme $\Omega=U^-B=B^-U$, and the multiplication morphism $U^-\times B\to\Omega$, $(u^-,b)\mapsto u^-b$, is an isomorphism, so $\Omega/B\cong U^-\cong\mathbb A^{|\Phi^+|}$. ([[lem-semisimple-opposite-borel-big-cell]])

[F4] $\Phi$ is a reduced crystallographic root system with Weyl group $W$ and length function $\ell$; $W$ is finite, and there is a unique longest element $w_0\in W$ with $w_0(\Phi^+)=\Phi^-$ and $\ell(w_0)=|\Phi^+|$. ([[def-weyl-group-of-a-root-system]], [[prop-weyl-length-equals-positive-root-inversion-number]])

[F5] For a simple root $\alpha$ the representative $n_\alpha\in N_G(T)$ satisfies $\operatorname{Ad}(n_\alpha)|_{\mathfrak h}=s_\alpha$ and $n_\alpha U_\beta n_\alpha^{-1}=U_{s_\alpha\beta}$ for every root $\beta$; in particular $n_\alpha B n_\alpha^{-1}$ is the Borel subgroup with unipotent part $\prod_{\beta>0,\,\beta\neq\alpha}U_\beta\cdot U_{-\alpha}$. ([[lem-semisimple-rank-one-sl2-root-homomorphism]], [[lem-semisimple-bruhat-double-cosets]])

[F6] The quotient morphism $\pi_B:G\to X_B$ is open: over the Zariski torsor charts it agrees with the projection $U\times B\to U$ of a product, and these charts cover $X_B$. ([[lem-semisimple-flag-torsor-zariski-charts]], [[thm-semisimple-flag-variety-smooth-projective]])

[F7] Every morphism $f:X\to Y$ of classical varieties sends every constructible subset of $X$ to a constructible subset of $Y$; in particular the image of $f$ is constructible. ([[thm-chevalley-constructible-image-varieties]])



**Proof technique:** direct: push the group-level disjoint decomposition $G=\bigsqcup_wBn_wB$ through the quotient morphism $\pi_B$, identify each image with the quotient of $U_w\times B$ by right $B$, and deduce dimension and affineness from $U_w\cong\mathbb A^{\ell(w)}$; the top-dimensional cell is the translate of the dense big cell $\Omega$.

## Proof

1.1 The left $B$-action and the cells. By [F1] the quotient morphism $\pi_B$ has fibres the right cosets $gB$, so left translation by $B$ on $G$ descends to a morphism $B\times X_B\to X_B$; the orbit of the point $\pi_B(n_w)=n_wB$ is exactly $B\cdot\pi_B(n_w)=\pi_B(Bn_wB)=BwB/B$ by $B$-equivariance of $\pi_B$. Since $Bn_wB$ is stable under right translation by $B$, one has $\pi_B^{-1}(BwB/B)=Bn_wB$: a point $g$ maps into the orbit precisely when $g\in Bn_wB$. [F1]

1.2 The longest cell is the translate of the big cell. Let $w_0\in W$ be the longest element, so $w_0(\Phi^+)=\Phi^-$ and $\ell(w_0)=|\Phi^+|$ by [F4]. Since $B=T\,U=U\,T$ and $T$ normalises $U$, and since conjugation by the Weyl representative $n_{w_0}$ permutes the root subgroups according to $w_0$ (the rank-one formula of [F5] for the simple reflections whose product is $w_0$), $$Bn_{w_0}B=T\,U\,n_{w_0}\,B=n_{w_0}\,(n_{w_0}^{-1}Un_{w_0})\,B=n_{w_0}\,U^{-}B=n_{w_0}\,\Omega,$$ where $n_{w_0}^{-1}Un_{w_0}=U^-$ because $w_0(\Phi^+)=\Phi^-$. Hence the longest double coset is the left translate by $n_{w_0}$ of the big cell $\Omega=U^-B$ of [F3]. [F3, F4, F5]

2.1 Covering and disjointness. By [F2](i) the double cosets $Bn_wB$ are pairwise disjoint with union $G$, and each is right-$B$-stable. Applying the surjective morphism $\pi_B$ and using step 1.1, the cells $BwB/B=\pi_B(Bn_wB)$ are pairwise disjoint and their union is $X_B$. [F1, F2, step 1.1]

3.1 The cells are locally closed subschemes. Each cell is the orbit in $X_B$ of the point $\pi_B(n_w)$ under the algebraic group $B$ acting on the variety $X_B$, hence is constructible by [F7] as the image of the orbit morphism $B\to X_B$, $b\mapsto b\cdot\pi_B(n_w)$, whose source is irreducible, so the cell is irreducible. A constructible orbit contains a dense open subset of its closure, and translating that open subset by the group action covers the orbit, so the orbit is open in its closure and therefore locally closed. Endowing each cell with the reduced subscheme structure induced from $X_B$ gives a stratification of the scheme $X_B$ by locally closed subschemes: because $W$ is finite by [F4], the disjoint union of the cells is a finite scheme-theoretic stratification with $\pi_B^{-1}(BwB/B)=Bn_wB$ as a subscheme equality. [F1, F2, F4, F7, step 1.1, step 2.1]

3.2 The longest cell is open and dense. By [F3] the big cell $\Omega$ is open and dense in $G$, and left translation by $n_{w_0}$ is an automorphism of $G$, so $Bn_{w_0}B=n_{w_0}\Omega$ is open and dense. By [F6] the quotient morphism $\pi_B$ is open, so its image $Bw_0B/B$ is open in $X_B$; since $\pi_B$ is surjective and continuous, the image of a dense subset is dense, so the cell is dense as well. Therefore the $w_0$-cell is the unique open dense cell: the other cells are the images of the other double cosets, whose closures avoid the open dense cell because the finitely many cells are disjoint. [F3, F6, step 2.1, step 1.2]

4.1 The cell isomorphism. By [F2](ii) the multiplication morphism $U_w\times B\to Bn_wB$ is an isomorphism; it is right-$B$-equivariant when $U_w\times B$ carries right translation on the $B$-factor and $Bn_wB$ carries right multiplication in $G$. The quotient of $U_w\times B$ by this free right action is $U_w$, via the projection $U_w\times B\to U_w$, which is a categorical quotient (it is $B$-invariant, and an invariant morphism factors through the first coordinate). The quotient of $Bn_wB$ by right translation by $B$ exists and equals $BwB/B$ by [F1] together with step 1.1. Passing the isomorphism to the quotients, which is possible since the actions are identified, gives an isomorphism of varieties $$BwB/B\;\cong\;U_w\;\cong\;\mathbb A^{\ell(w)},$$ in particular each cell is affine of dimension $\ell(w)$. This also identifies the scheme structures of step 3.1: both sides are reduced and the bijection is an isomorphism of varieties. [F1, F2, step 3.1]

5.1 The cell as a translate of the big cell quotient. Applying $\pi_B$ to the identity $Bn_{w_0}B=n_{w_0}\Omega$ of step 1.2 gives $$Bw_0B/B=\pi_B(n_{w_0}\Omega)=n_{w_0}\cdot\pi_B(\Omega)=n_{w_0}\cdot(\Omega/B),$$ the image of the open cell $\Omega/B$ under the automorphism of $X_B$ induced by left translation by $n_{w_0}$. By [F3] one has $\Omega/B\cong U^-\cong\mathbb A^{|\Phi^+|}$, so the longest cell is isomorphic to $\mathbb A^{|\Phi^+|}$ and has dimension $|\Phi^+|=\ell(w_0)$ by [F4], in agreement with step 4.1. [F3, F4, step 4.1, step 1.2]

6.1 Conclusion. Step 2.1 gives the disjoint covering by the $B$-orbits $BwB/B$, step 3.1 the locally closed scheme-level cells, step 4.1 the affine isomorphism $BwB/B\cong U_w\cong\mathbb A^{\ell(w)}$, and steps 3.2 and 5.1 the unique open dense longest cell as a translate of the big cell. The Axiom of Choice [A1] is assumed in the statement and is inherited through the three in-run suppliers [F1], [F2] and [F3], which assume it; the proof adds no further choice, all decompositions being indexed by the finite Weyl group $W$ of [F4]. The quotient structure of [F1] is supplied by the proved flag-torsor charts, while [F2] proves disjointness and cell isomorphisms and [F3] proves the open big cell; their uses occur at steps 1.1, 2.1, 4.1 and 1.2 respectively. [A1, F1, F2, F3, F4, F5, F6, F7, step 1.1, step 2.1, step 3.1, step 4.1, step 1.2, step 3.2, step 5.1] ∎
