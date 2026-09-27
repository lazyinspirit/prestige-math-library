---
id: thm-whitehead-torsion-is-independent-of-cellular-approximation-basepaths-lifts-orientations-orders-and-contraction
kind: theorem
title: "Whitehead torsion is independent of all auxiliary choices"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence, lem-contraction-torsion-is-independent-of-the-contracting-homotopy, lem-basis-change-and-direct-sum-formulas-for-chain-torsion, lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group, lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear, lem-homotopic-maps-have-chain-isomorphic-mapping-cones, thm-cellular-approximation-for-maps-of-cw-pairs, lem-chain-homotopy-is-compatible-with-addition-and-composition, def-finite-based-free-chain-complex-and-its-contraction-torsion, lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup, def-mapping-cone-of-a-chain-map]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, Definition 2.13 and Lemma 2.9, pp.29–31"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Definition 2.13 and Lemma 2.9, pp.29–31"
    - title: "Davis–Kirk, Theorem 11.31(1), pp.343–344"
      url: "https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf"
      locator: "Theorem 11.31(1), pp.343–344"
    - title: "Cohen, §§19,22, pp.62–65,72–75"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§§19,22, pp.62–65,72–75"
---
## Statement

Let $f:X\to Y$ be a homotopy equivalence of finite CW complexes and let $\tau(f)$ be the class of [[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]] attached to a choice of cellular representative, universal covers, lifts, basepoints, orientations, orders of the cells and chain contraction. Then the image of that class in $\mathrm{Wh}(\pi_1(Y,y))$ depends on none of these choices.

Moreover:

1. Changing the basepoint $y$ to $y'$ transports $\tau(f)$ under the canonical isomorphism $\mathrm{Wh}(\pi_1(Y,y))\to\mathrm{Wh}(\pi_1(Y,y'))$ of basepoint change, and two different paths from $y$ to $y'$ induce the same isomorphism, so the transport is canonical; the same holds at the source.
2. If $f'\simeq f$ is a second finite CW homotopy equivalence with the same target basepoint, then $\tau(f')=\tau(f)$ after the canonical identifications; in particular homotopic homotopy equivalences of finite CW complexes have equal torsion.
3. For disconnected $Y$ all statements hold componentwise in $\bigoplus_{D\in\pi_0(Y)}\mathrm{Wh}(\pi_1D)$.

## Facts & Assumptions

**Given:** A homotopy equivalence $f:X\to Y$ of finite CW complexes with the chosen data of [[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]], and a second choice of the same kind, written with primes.

[F1] $\tau(f)$ is the image in $\mathrm{Wh}(\pi_1(Y,y))$ of the contraction torsion of the based contractible complex $\operatorname{Cone}(C_*(\widetilde f))_n=C_n(\widetilde Y)\oplus C_{n-1}(\widetilde X)$ with the target summands first, computed from the odd-to-even part of $d+s$ in the displayed bases ([[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]], [[def-finite-based-free-chain-complex-and-its-contraction-torsion]]).

[F2] The contraction torsion of a bounded contractible based free complex does not depend on the contraction ([[lem-contraction-torsion-is-independent-of-the-contracting-homotopy]]).

[F3] If the degree-$n$ basis is replaced by the basis whose coordinate columns are the columns of the invertible matrix $P_n$ in the old basis, then $\tau_{\text{new}}=\tau_{\text{old}}+\sum_n(-1)^{n+1}[P_n]$ in $\tilde K_1(R)$; if $u:F\to G$ is a chain isomorphism with equal degreewise displayed basis sizes then $\tau(G)=\tau(F)+\sum_n(-1)^n[u_n]$; and unipotent upper triangular matrices have class $0$ ([[lem-basis-change-and-direct-sum-formulas-for-chain-torsion]], [[lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup]]).

[F4] Reordering a basis changes the class in $K_1$ only by $[-1]$, reversing an orientation or replacing a chosen cell lift changes it by a unit $\pm g$ of $\mathbb Z[\pi]$, and all of these classes vanish in $\mathrm{Wh}(\pi)$; a change of basepoint path conjugates the fundamental group, inner automorphisms induce the identity on $\mathrm{Wh}$, and two basepoint paths induce the same map there ([[lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group]]).

[F5] Chain homotopic chain maps $f_0\simeq f_1:C_*\to D_*$ have chain-isomorphic mapping cones, by the unitriangular isomorphism $\Psi(y,x)=(y+h_{n-1}x,x)$ on $D_n\oplus C_{n-1}$ for a chain homotopy $h$; chain homotopy is compatible with composition, and a deck transformation is an additive chain isomorphism which is semilinear for the corresponding inner automorphism of the group ring ([[lem-homotopic-maps-have-chain-isomorphic-mapping-cones]], [[def-mapping-cone-of-a-chain-map]], [[lem-chain-homotopy-is-compatible-with-addition-and-composition]], [[lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear]]).

[F6] A continuous map of finite CW complexes is homotopic to a cellular map, and homotopic cellular maps of finite CW pairs admit a cellular homotopy; both statements are choice-free for finite complexes ([[thm-cellular-approximation-for-maps-of-cw-pairs]]).

[F7] A lifted cellular homotopy induces a right-linear chain homotopy from the initial compatible lift to the deck-twisted endpoint composite, both interpreted with the initial map’s coefficient transport; the deck map alone need not be right-linear ([[lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear]]).

## Proof

**Proof technique:** direct.

1.1 Replacing the contraction of the cone changes nothing, by [F2]; this proves independence of the contraction. [F1, F2]

1.2 Consider a change of the displayed cellular bases only. In degree $n$ the cone basis is the concatenation of the basis of $C_n(\widetilde Y)$ and of $C_{n-1}(\widetilde X)$, so a change of the cell bases induces the block-diagonal basis change $\operatorname{diag}(P_n^{\widetilde Y},P_{n-1}^{\widetilde X})$ in degree $n$; by [F3] the torsion changes by $\sum_n(-1)^{n+1}[\operatorname{diag}(P_n^{\widetilde Y},P_{n-1}^{\widetilde X})]$. Reordering, reorienting or relifting cells changes only the individual factors $P^{\widetilde Y}_n$, $P^{\widetilde X}_{n-1}$ by permutation matrices, by diagonal matrices with a single entry $-1$, or by diagonal matrices with a single entry a group element, all of which have class $0$ in $\mathrm{Wh}(\pi_1(Y,y))$ by [F4]; hence the class in $\mathrm{Wh}$ is unchanged. [F1, F3, F4]

1.3 For a fixed based map $f$ and based cover identifications, a compatible lift is unique. Changing the chosen lift over the target basepoint by a deck map $T_\beta$ changes the compatible lift to $T_\beta\widetilde f$ and the coefficient identification from $f_*$ to $\alpha_\beta f_*$, where $\alpha_\beta(h)=\beta h\beta^{-1}$. Indeed $T_\beta(c\cdot h)=T_\beta(c)\cdot\alpha_\beta(h)$, so $T_\beta$ is $\alpha_\beta$-semilinear, generally not $R$-linear. With this simultaneous coefficient change, $(y,u)\mapsto(T_\beta y,u)$ is a semilinear chain isomorphism from the cone of $C_*(\widetilde f)$ to the cone of $C_*(T_\beta\widetilde f)$. In the transported target bases $T_\beta\widetilde e$ and unchanged source bases it preserves the displayed bases; using the original target lifts instead changes each target basis by a diagonal group unit. Inner automorphisms act trivially on $\mathrm{Wh}$ and these diagonal units vanish there by [F4]. Thus the torsion class is unchanged under a change of compatible cover identification or lifted map. [F1, F3, F4, F5]

1.4 A change of basepoint $y\to y'$ transports the coefficient group ring along the basepoint isomorphism $\pi_1(Y,y)\to\pi_1(Y,y')$ of [F4], and every path gives the same map on $\mathrm{Wh}$ because two such isomorphisms differ by an inner automorphism, which acts trivially; the same argument applies at the source, and the class of a componentwise definition on a disconnected target is transported componentwise. [F4]

2.1 Let $f'$ be a second cellular representative of the given homotopy class, with compatible lift $\widetilde f'$. By [F6] there is a cellular homotopy $H$ from $f$ to $f'$. Its lift beginning at $\widetilde f$ ends at $T_\beta\widetilde f'$, and [F7] supplies a right-linear chain homotopy $C_*(\widetilde f)\simeq C_*(T_\beta\widetilde f')$ for the initial coefficient transport. Step 1.3 identifies the torsion of the latter map, after its corresponding inner coefficient transport, with the torsion of $C_*(\widetilde f')$. Thus it remains to compare cones of the two chain-homotopic maps over the same ring. [F6, F7, step 1.3]

3.1 For chain-homotopic $f_0\simeq f_1$ the isomorphism $\Psi$ of [F5] has matrix $\begin{pmatrix}I&h_{n-1}\\0&I\end{pmatrix}$ in the target-first cone bases, so by the isomorphism formula of [F3] the two cone torsions differ by a sum of classes of unipotent matrices, namely $0$; hence the two cones give the same class in $\tilde K_1$ and therefore the same class in $\mathrm{Wh}$. This proves independence of the cellular representative and of homotopic replacements. [F3, F5, step 2.1]

4.1 Combining steps 1.1, 1.2, 1.3 and 1.4 gives independence of contraction, cell bases, cover identifications, lifts and basepoint paths; combining with step 3.1 gives independence of the cellular approximation and equality for homotopic homotopy equivalences; the disconnected statement is the componentwise reading of steps 1.1 through 1.4 and step 2.1. [step 1.1, step 1.2, step 1.3, step 1.4, step 3.1] ∎
