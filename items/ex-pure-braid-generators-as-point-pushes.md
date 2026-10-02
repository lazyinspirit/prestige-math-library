---
id: ex-pure-braid-generators-as-point-pushes
kind: example
title: "Standard $A_{ij}$ as point pushes after relabeling"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-standard-pure-braid-generators,
       lem-standard-pure-braids-generate-each-free-kernel,
       def-point-pushing-homomorphism-for-a-puncture,
       thm-point-pushing-is-the-kernel-of-forgetting-a-puncture,
       def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice,
       cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations,
       def-elementary-geometric-half-twist,
       def-geometric-braid-with-setwise-endpoints,
       def-ordered-configuration-space,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws,
       prop-the-symmetric-group-acts-freely-on-ordered-configurations,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent,
       thm-geometric-braids-form-a-group,
       prop-stacking-of-geometric-braids-is-well-defined,
       def-pure-braid-group-from-ordered-configurations,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk,
       def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes,
       lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles,
       thm-ordered-configurations-cover-unordered-configurations-regularly]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.2, author manuscript pp. 4-5 (the elementary braid sigma_{s,t} and the pure generators A_{s,t}=sigma_{s,t}^2)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1, printed pp. 11-14 (Artin words of the pure generators, meridian description of the free kernel)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, sections 4.2.1-4.2.3, printed pp. 101-105 (point pushing)"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
verification:
  audited: 2026-10-02
---

## Example

Assume the Axiom of Choice, let $n\ge2$ and $1\le i<j\le n$, and use the base configuration $Q=(q_1,\dots,q_n)$ and positive half twists of [[def-elementary-geometric-half-twist]]. The standard pure braid $A_{ij}\in PB_n$ is the image of the geometric word $W_{ij}$ of [[def-standard-pure-braid-generators]]. Put
$$Y^{(j)}:=\operatorname{int}D^2\setminus\{q_k:k\ne j\}.$$
For a based loop $\gamma$ of $Y^{(j)}$ at $q_j$, let
$$M_j(\gamma)(t):=(q_1,\dots,q_{j-1},\gamma(t),q_{j+1},\dots,q_n)\in F_n(\operatorname{int}D^2).$$
This is the ordered motion in which only the $j$-th point moves.

Choose the compatible family of local meridian circles and stems constructed by the puncture-avoiding fan argument in the proof of [[lem-standard-pure-braids-generate-each-free-kernel]]. Thus, for each $r<n$, take $0<\epsilon_r\le h_n/10$, let $C_r=\{z:|z-q_r|=\epsilon_r\}$ and $c_r=q_r+(\epsilon_r,0)$, and use the local stem $\tau_r$ from $q_{r+1}$ to $c_r$ selected in that compatible family, inside $U_r\setminus\{q_r\}$. For $i<j$, let
$$h_{i,j}:=H_{j-1}\circ\cdots\circ H_{i+1},$$
where $H_s$ represents the positive half twist $\sigma_s$ and the empty composition for $j=i+1$ is the identity. The associated meridian stem from $q_j$ to $C_i$ is $h_{i,j}\circ\tau_i$; let $\gamma_{i,j}^{\mathrm{cw}}$ be the based loop that follows this stem, traverses $C_i$ clockwise once, and returns along the reverse stem. These are the compatible standard meridian stems obtained by transporting the adjacent local stem through the successive half twists. Then:

1. **Point push.** For every $1\le i<j\le n$,
   $$A_{ij}=\iota^F_*[M_j(\gamma_{i,j}^{\mathrm{cw}})]\in PB_n.$$
   Thus the positive standard generator is the class of the motion that holds the other $n-1$ labelled points fixed and moves the $j$-th point clockwise once around $q_i$ along the stated stem.
2. **Relabeled form.** Let $\rho\in S_n$ satisfy $\rho(j)=n$, $\rho(k)=k-1$ for $j<k\le n$, and $\rho(k)=k$ for $k<j$. The coordinate permutation
   $$(Rx)_k:=x_{\rho^{-1}(k)}$$
   gives homeomorphisms $R^\circ$ and $R^D$ on the open and closed ordered configuration spaces, respectively. It takes $Q$ to
   $$Q^\rho=(q_1,\dots,q_{j-1},q_{j+1},\dots,q_n,q_j).$$
   Put $Y^\rho:=\operatorname{int}D^2\setminus\{q_k:k\ne j\}$, and define the open terminal-coordinate inclusion
   $$\widetilde\kappa^\rho:\pi_1(Y^\rho,q_j)\longrightarrow\pi_1(F_n(\operatorname{int}D^2),Q^\rho),\qquad [\gamma]\longmapsto[(q_1,\dots,q_{j-1},q_{j+1},\dots,q_n,\gamma)].$$
   With $\iota^{F,\rho}_*$ the open-to-closed map at basepoint $Q^\rho$, set $\kappa^\rho:=\iota^{F,\rho}_*\circ\widetilde\kappa^\rho$. Then
   $$R^D_*(A_{ij})=\kappa^\rho([\gamma_{i,j}^{\mathrm{cw}}])\in\pi_1(F_n(D^2),Q^\rho),$$
   the loop class in which the last coordinate moves clockwise around $q_i$ and all other coordinates remain fixed.
3. **Terminal mapping-class sign.** For $i<n$,
   $$\Theta_n(A_{in})=\operatorname{Push}_n([\gamma_{i,n}^{\mathrm{cw}}]),\qquad \Theta_n:=\Psi_n^{\mathrm{mc}}\circ(\Psi_n^{\mathrm{conf}})^{-1},$$
   where $\Theta_n$ is the isomorphism of [[thm-point-pushing-is-the-kernel-of-forgetting-a-puncture]]. The inverse-endpoint convention in [[def-point-pushing-homomorphism-for-a-puncture]] makes the clockwise fibre meridian correspond to the positive generator. The raw ordered slice of the positive standard word runs counterclockwise; the configuration identification inverts that slice.

## Facts & Assumptions

**Given:** AC, $n\ge2$, $1\le i<j\le n$, the base configuration $Q$, the half twists $\sigma_1,\dots,\sigma_{n-1}$ and their supports $U_1,\dots,U_{n-1}$, the words $W_{ij}$, and the maps in the statement.

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[F1] In ZF, AC implies DC and DC implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] The Statement of [[lem-standard-pure-braids-generate-each-free-kernel]] says that, under AC, the last-coordinate fibre inclusion $\kappa$ identifies $F_{m-1}$ with the kernel of forgetting $PB_m\to PB_{m-1}$, and the $m-1$ configuration-group images $\Psi([A_{1m}]),\dots,\Psi([A_{m-1,m}])$ of the standard geometric classes form a free basis. For the compatible stem family constructed in its proof, if $[\lambda_r]$ is the counterclockwise meridian class in the fibre, then $$\Psi([A_{rm}])=(\kappa_*[\lambda_r])^{-1}.$$ Here $[A_{rm}]=[W_{rm}]$ is the geometric braid class and, by [F3], its configuration-group image is the element denoted $A_{rm}$ in this example; $\kappa_*[\lambda]$ is the closed-disc image of the open fibre loop. The supplier Statement makes this last-column assertion; its proof also supplies the local winding and conjugation arguments used below for arbitrary $j$. It does not assert that the whole word motion is braid-isotopic to a one-coordinate motion.

[F3] The standard generators are $A_{rs}=\Psi_n^{\mathrm{conf}}([W_{rs}])$, where
$$W_{rs}=\sigma_{s-1}\cdots\sigma_{r+1}\sigma_r^2\sigma_{r+1}^{-1}\cdots\sigma_{s-1}^{-1}.$$
The rightmost factor is the bottom one, $[\gamma\star\beta]=[\gamma][\beta]$, and $\Psi_n^{\mathrm{conf}}([\beta])=(\iota^F_*[z_\beta])^{-1}$ for the ordered coordinate loop $z_\beta$ ([[def-standard-pure-braid-generators]], [[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]]).

[F4] The positive half twist $\sigma_r$ exchanges $q_r,q_{r+1}$, is supported in $U_r=B(m_r,3h_n/2)$, and fixes every other base point; $U_r\cap U_s=\varnothing$ when $|r-s|>1$. Here the base points are equally spaced by $2h_n$, so the center of $U_{r+1}$ is distance $3h_n$ from $q_r$ ([[def-elementary-geometric-half-twist]]).

[F5] Geometric braids form a group under stacking, with the right factor running first; coordinate paths of pure braids are loops in $F_n(\operatorname{int}D^2)$, and reversed braid paths represent inverse classes ([[thm-geometric-braids-form-a-group]], [[prop-stacking-of-geometric-braids-is-well-defined]]).

[F6] Coordinate permutations act by homeomorphisms on both $F_n(\operatorname{int}D^2)$ and $F_n(D^2)$, and the open-to-closed inclusions commute with these permutations ([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]], [[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

[F7] The maps $\Psi_n^{\mathrm{conf}}:G_n^{\mathrm{pure}}\to PB_n$ and $\Psi_n^{\mathrm{mc}}:G_n\to\operatorname{Mod}(D^2,Q;\partial D^2)$ are group isomorphisms, with $\Psi_n^{\mathrm{conf}}([\beta])=(\iota^F_*[z_\beta])^{-1}$ and, for the raw unordered slice $S(\beta)$, $\Psi_n^{\mathrm{mc}}([\beta])=\delta([S(\beta)]^{-1})$; on a half twist, $\Psi_n^{\mathrm{mc}}([\sigma_r])=[H_r]$, where $H_r$ is orientation-preserving, supported in $U_r$, and exchanges $q_r,q_{r+1}$ ([[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]], [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]).

[F8] The point-pushing map for the last puncture is $\operatorname{Push}_n([\gamma])=\delta([\bar\gamma])$, where $\bar\gamma$ is the unordered loop of the ordered motion that moves only $q_n$ and $\delta$ is the inverse-endpoint boundary map. The braid-to-mapping-class map sends that raw geometric motion to $\delta([\bar\gamma]^{-1})=\operatorname{Push}_n([\gamma])^{-1}$ ([[def-point-pushing-homomorphism-for-a-puncture]], [[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]]).

[F9] Under AC, $\Theta_n=\Psi_n^{\mathrm{mc}}|_{G_n^{\mathrm{pure}}}\circ(\Psi_n^{\mathrm{conf}})^{-1}$ is an isomorphism and $\Theta_n\circ\kappa=\operatorname{Push}_n$ for the terminal-coordinate fibre inclusion ([[thm-point-pushing-is-the-kernel-of-forgetting-a-puncture]]).

[F10] $F_n(X)$ is the space of pairwise distinct tuples in $X^n$, $PB_n=\pi_1(F_n(D^2),Q)$, and $\iota^F_*:\pi_1(F_n(\operatorname{int}D^2),Q)\to PB_n$ is an isomorphism ([[def-ordered-configuration-space]], [[def-pure-braid-group-from-ordered-configurations]], [[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

[F11] The local two-point winding computation in the proof of [[lem-standard-pure-braids-generate-each-free-kernel]] identifies $F_2(U_r)\cong S^1\times C$ with $C$ convex and shows that the raw coordinate loop of $\sigma_r^2$ has relative winding $+1$, equal to a counterclockwise local meridian motion of $q_{r+1}$ around $q_r$. By the inverse-endpoint convention, $$\Psi_n^{\mathrm{mc}}([\sigma_r^2])=\operatorname{Push}_{q_{r+1}}([\lambda_r^{\mathrm{ccw}}])^{-1}=\operatorname{Push}_{q_{r+1}}([\lambda_r^{\mathrm{cw}}]).$$ The proof's conjugation argument establishes, for any mapping class $h$ taking a marked point $p$ to $p'$, the typed naturality $$h\operatorname{Push}_p([\alpha])h^{-1}=\operatorname{Push}_{p'}([h\circ\alpha]),$$ where $\alpha$ is a loop in the complement of $Q\setminus\{p\}$ based at $p$ and $h\circ\alpha$ is based at $p'$ in the complement of $Q\setminus\{p'\}$. There $\operatorname{Push}_p$ is the inverse endpoint of an ambient lift of this single-point motion; for $p=q_n$ it agrees with [F8].

## Verification

**Proof technique:** direct.

**Choice bookkeeping.** AC supplies DC and countable choice, so the cited fibre exact sequence, braid identifications, and point-pushing identifications are available. [A1, F1, F2, F7, F9]

1.1 The choice hypothesis discharges the cited fibration and mapping-class identifications. [A1, F1, F2, F7, F9]

**Terminal fibre case.** Fix $i<n$ and let $[\lambda_i^{\mathrm{ccw}}]$ be the counterclockwise based meridian class in the last-coordinate fibre at $q_n$ from [F2]. Write $[\lambda_i^{\mathrm{cw}}]=[\lambda_i^{\mathrm{ccw}}]^{-1}$. The standard generator in $PB_n$ is $A_{in}=\Psi_n^{\mathrm{conf}}([W_{in}])$; applying $\Psi_n^{\mathrm{conf}}$ to $A_{in}$ again would be ill-typed. The source formula and the fact that the fibre inclusion is a homomorphism give
$$A_{in}=(\kappa_*[\lambda_i^{\mathrm{ccw}}])^{-1}=\kappa_*[\lambda_i^{\mathrm{cw}}]=\iota^F_*[M_n(\lambda_i^{\mathrm{cw}})].$$
This proves the terminal instance of claim 1. [F2, F3, F10]

2.1 Thus the terminal generator is the closed-disc image of the clockwise last-coordinate meridian. [step 1.1, F2, F3, F10]

**A point-motion loop maps to its point push.** Let $p=q_j$ and let $\gamma$ be any based loop in $Y^{(j)}$ at $q_j$. By the geometric-braid/configuration identification [F3] and the open-to-closed map [F10], the ordered loop $M_j(\gamma)$ defines a pure geometric braid $\beta_\gamma$ whose unordered slice is $\bar\gamma$. Its inverse braid $\beta_\gamma^{-1}$ has coordinate loop class $[M_j(\gamma)]^{-1}$ and unordered slice class $[\bar\gamma]^{-1}$. The braid/configuration and braid/mapping-class maps [F7] therefore give
$$\Psi_n^{\mathrm{conf}}(\beta_\gamma^{-1})=(\iota^F_*[M_j(\gamma)]^{-1})^{-1}=\iota^F_*[M_j(\gamma)],\qquad \Psi_n^{\mathrm{mc}}(\beta_\gamma^{-1})=\delta(([\bar\gamma]^{-1})^{-1})=\delta([\bar\gamma]).$$
For any marked point $q_j$, the inverse-endpoint point-motion map constructed in the kernel lemma's proof is $\operatorname{Push}_{q_j}([\gamma])=\delta([\bar\gamma])$; for $j=n$ this agrees with [F8]. Thus
$$\Theta_n(\iota^F_*[M_j(\gamma)])=\Psi_n^{\mathrm{mc}}(\beta_\gamma^{-1})=\operatorname{Push}_{q_j}([\gamma]).$$
This identity will compare classes by the isomorphism $\Theta_n$ and uses no fibre-inclusion injectivity. [F3, F7, F8, F10, F11]

2.2 For every marked point, the image under $\Theta_n$ of its one-coordinate motion is the corresponding point push. [step 1.1, F3, F7, F8, F10, F11]

**Transport the adjacent point push.** Fix $i<j$. Choose the local circle $C_i$ and stem $\tau_i$ from the statement, and let $\lambda_i^{\mathrm{cw}}$ be the loop following $\tau_i$, once clockwise around $C_i$, and back. Put $g_{i,j}:=[\sigma_{j-1}]\cdots[\sigma_{i+1}]\in G_n$ and let $h_{i,j}=H_{j-1}\circ\cdots\circ H_{i+1}$ be its mapping-class representative, with the rightmost map acting first. Hence $h_{i,j}(q_{i+1})=q_j$ and $h_{i,j}(q_i)=q_i$. It fixes $C_i$ pointwise: each support $U_r$ for $r\ge i+2$ is disjoint from $U_i$, while every point of $C_i$ is at distance at least $3h_n-\epsilon_i\ge 2.9h_n>3h_n/2$ from the center of $U_{i+1}$. Thus $h_{i,j}\circ\tau_i$ is a stem from $q_j$ to $C_i$, and $h_{i,j}\circ\lambda_i^{\mathrm{cw}}=\gamma_{i,j}^{\mathrm{cw}}$. The path avoids all punctures other than its basepoint because $h_{i,j}$ permutes $Q$ and sends the omitted point $q_{i+1}$ to $q_j$. The word identity [F3], first-under-second product, and the local winding and typed naturality in [F11] now give
$$\Theta_n(A_{ij})=\Psi_n^{\mathrm{mc}}([W_{ij}])=h_{i,j}\Psi_n^{\mathrm{mc}}([\sigma_i^2])h_{i,j}^{-1}=h_{i,j}\operatorname{Push}_{q_{i+1}}([\lambda_i^{\mathrm{cw}}])h_{i,j}^{-1}=\operatorname{Push}_{q_j}([\gamma_{i,j}^{\mathrm{cw}}]).$$
For $j=i+1$, $h_{i,j}$ is the identity and this is exactly the local winding case. [F3, F7, F11]

2.3 The conjugated geometric generator has the point-push image along the transported standard stem. [step 1.1, F3, F4, F5, F7, F11]

**Point-push claim for every pair.** By step 2.2, the image under $\Theta_n$ of the one-coordinate motion along $\gamma_{i,j}^{\mathrm{cw}}$ is $\operatorname{Push}_{q_j}([\gamma_{i,j}^{\mathrm{cw}}])$. By step 2.3, this equals $\Theta_n(A_{ij})$. Since $\Theta_n$ is an isomorphism by [F9], it is injective, and therefore
$$A_{ij}=\iota^F_*[M_j(\gamma_{i,j}^{\mathrm{cw}})].$$
This proves claim 1 without an isotopy assertion about the full word motion. [F9, step 2.2, step 2.3]

3.1 Equality under $\Theta_n$ proves the point-push statement for every pair. [F9, step 2.2, step 2.3]

**Relabeled form and open-to-closed maps.** Let $M_n^\rho(\gamma)=(q_1,\dots,q_{j-1},q_{j+1},\dots,q_n,\gamma)$ be the open ordered loop based at $Q^\rho$. Pointwise, $R^\circ\circ M_j(\gamma)=M_n^\rho(\gamma)$. The coordinate-permutation square commutes with the open-to-closed inclusions, so
$$R^D_*\bigl(\iota^F_*[M_j(\gamma)]\bigr)=\iota^{F,\rho}_*[M_n^\rho(\gamma)]=\kappa^\rho([\gamma]).$$
Apply this identity to the loop from the point-push claim to obtain
$$R^D_*(A_{ij})=\kappa^\rho([\gamma_{i,j}^{\mathrm{cw}}]).$$
This is the relabeled terminal-coordinate form. The argument uses functoriality only and asserts no injectivity of $\widetilde\kappa^\rho$ or $\kappa^\rho$. [F6, F10, step 3.1]

4.1 The coordinate permutation carries the proven open motion to the stated closed-disc terminal-coordinate class. [F6, F10, step 3.1]

**Terminal mapping-class sign.** For $i<n$, the fibre formula and [F9] give
$$\Theta_n(A_{in})=\Theta_n(\kappa_*[\lambda_i^{\mathrm{cw}}])=\operatorname{Push}_n([\lambda_i^{\mathrm{cw}}]).$$
The source formula [F2] identifies the configuration-group image of $[W_{in}]$ as $(\kappa_*[\lambda_i^{\mathrm{ccw}}])^{-1}$, while [F3] identifies the same image as $(\iota^F_*[z_{W_{in}}])^{-1}$ for the raw ordered coordinate loop. Equating and inverting gives $\iota^F_*[z_{W_{in}}]=\kappa_*[\lambda_i^{\mathrm{ccw}}]$: the raw ordered slice is counterclockwise in the fibre. The configuration identification inverts it, so $A_{in}=\kappa_*[\lambda_i^{\mathrm{cw}}]$. The inverse-endpoint convention then gives exactly the clockwise point push. [F2, F3, F8, F9, step 2.1]

5.1 This proves the terminal mapping-class sign in claim 3 with the positive generator clockwise. [F2, F3, F8, F9, step 2.1] ∎

## Remarks

- The stem for $A_{ij}$ is the image of the adjacent local stem under the actual mapping-class representative $H_{j-1}\circ\cdots\circ H_{i+1}$. This specifies the compatible meridian path and preserves its clockwise orientation.
- The relabeling is a coordinate-permutation homeomorphism from basepoint $Q$ to $Q^\rho$. The open terminal-coordinate map and its closed-disc composite have distinct codomains; only the latter is denoted $\kappa^\rho$ in the statement.
- The example identifies standard generators and makes no new generation or presentation claim. The proof uses the local two-point winding and typed point-push conjugation already proved in [[lem-standard-pure-braids-generate-each-free-kernel]].
