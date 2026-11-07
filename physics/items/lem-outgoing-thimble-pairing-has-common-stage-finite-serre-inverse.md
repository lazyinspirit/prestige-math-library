---
id: lem-outgoing-thimble-pairing-has-common-stage-finite-serre-inverse
kind: lemma
title: Outgoing pairing and finite Serre inverse on one common model
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 4
deps:
  - def-countable-choice
  - def-stopped-fukaya-category-algebraic-conventions
  - def-differential-graded-algebra
  - def-differential-graded-module
  - thm-weinstein-lagrangian-neighborhood-theorem
  - lem-finite-exact-stopped-floer-history-and-localization-model
  - thm-critical-thimble-path-slide-evaluation-triangle
dependency_roles:
  def-countable-choice: mathematical-premise
  def-stopped-fukaya-category-algebraic-conventions: mathematical-premise
  def-differential-graded-algebra: mathematical-premise
  def-differential-graded-module: mathematical-premise
  thm-weinstein-lagrangian-neighborhood-theorem: mathematical-premise
  lem-finite-exact-stopped-floer-history-and-localization-model: mathematical-premise
  thm-critical-thimble-path-slide-evaluation-triangle: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lectures 7 and 10, finite twisted and wrapped-category conventions; no unproved Serre or generation conclusion is imported.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: §§1.5 and 7.2--7.3, localization context; the outgoing pairing here has additional stated geometric hypotheses.
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$. For the finite critical family, construct the outgoing two-cusp pairing
$$\operatorname{CW}(\Delta_i,U)^\vee\simeq \operatorname{CW}(U,\Gamma_i[2])$$
naturally in the complete operations. Use the same raw one-turn transport and a finite Liouville-compression profile to give actual $\Gamma_i$-to-$F_H(\Delta_i)$ endpoint maps, retaining the allowed suffix inverse and its cone homotopies. With actual forward finite membership from the path-slide theorem, construct finite inverse objects $B_i$ and maps $F_H(B_i)[2]\simeq\Delta_i$ by finite directed bars. Realize all maps and evaluations in the same finite history/cochain comparison for the mixed-clock probe family.

The compressed endpoint movie and common-clock support argument are recorded below. The actual outgoing count and the forward finite membership/functor maps are absent, so the pairing and inverse conclusion remains conditional and this item is escalated.

## Statement references

[[def-countable-choice]]

[[def-stopped-fukaya-category-algebraic-conventions]]

[[def-differential-graded-algebra]]

[[def-differential-graded-module]]

[[thm-weinstein-lagrangian-neighborhood-theorem]]

[[lem-finite-exact-stopped-floer-history-and-localization-model]]

[[thm-critical-thimble-path-slide-evaluation-triangle]]

## Facts & Assumptions

**Given:** The finite exact datum, finite critical thimble order $D_1,\ldots,D_m$, and the mixed clock and actual one-turn transport used by the assigned statement.

[F1] [[def-stopped-fukaya-category-algebraic-conventions]] fixes finite twisted objects, shifts, modules, and the distinction between a localized inverse and an ordinary-stage chain inverse.

[F2] [[lem-finite-exact-stopped-floer-history-and-localization-model]] supplies the four-dimensional finite operation/history model, its full geometric homological units and derived bar/localization comparison. It does not construct the outgoing two-cusp pairing [A1], the specific Serre functor comparison [A2], or the critical-slide forward membership [A3].

[F3] [[thm-critical-thimble-path-slide-evaluation-triangle]] has not yet proved actual forward finite membership or its object/functor maps.

[F4] [[thm-weinstein-lagrangian-neighborhood-theorem]] assumes $\mathrm{AC}_\omega$. For a closed Lagrangian embedding it supplies a symplectomorphism from a neighborhood of its zero section in $(T^*L,-d\lambda)$ to a neighborhood of the embedded Lagrangian.

[F5] [[def-differential-graded-algebra]] fixes the cohomological differential and signed composition rule used in the finite DG enhancement.

[F6] [[def-differential-graded-module]] fixes the right-module differential/action identity used by the finite bar resolution.

[F7] [[def-countable-choice]] supplies the Countable Choice hypothesis $\mathrm{AC}_\omega$ required by [F4].

[A1] Required geometric pairing input: actual two-cusp moduli counts, orientations and full-operation compactification giving the chain homotopy equivalence $\operatorname{CW}(D_i,U)^\vee\simeq\operatorname{CW}(U,\Gamma_i[2])$.

[A2] Required algebraic input for the finite inverse: the actual finite strictly unital directed thimble category $A$, finite-dimensional chain models, an actual exact functor $S=F_H[2]$ from $T=\operatorname{Perf}(A)$ to the ambient wrapped category, and a natural chain-level Serre comparison $\operatorname{Hom}(Y,SX)\simeq\operatorname{Hom}(X,Y)^\vee$ with its trace-unit compatibility.

[A3] Required forward membership input: actual finite twisted objects and chain homotopy maps representing every $S(D_i)$ inside $T$, with all continuation and higher functor components in the same bar model. This is not implied by [A2].

[A4] For the common-stage statement, use the fixed adapted clock $H=\kappa(\rho)(h+c\rho)\eta(q)$, $q=\rho/(\rho+h)$, $s=\rho+h$, with the cutoffs specified in step 2.3, and the fixed raw one-turn path.

## Proof

1.1 Under [A1], count the two-cusp domains with their actual incoming/outgoing orientations. Their zero-dimensional counts define the pairing map; the compactified one-dimensional boundary consists of the two cusp breakings and the full Floer-operation breakings. If those are the complete boundary strata and their gluing multiplicities match the chosen orientation lines, the signed boundary identity makes the map a chain map, and the reversed cusp count gives its chain homotopy inverse. The dual reverses cohomological degree; the geometric outgoing rotation contributes the stated shift $[2]$. These are conditional consequences of [A1], not a construction of its moduli spaces. [A1, F1, F5, F6, given, construct, algebra]

1.2 The chosen auxiliary outgoing endpoint can be compared to the actual rotation as follows. In a regular product sector with primitive chart $\alpha_M=\lambda_\Sigma+M\,d\theta$, compress the transported circle by $V_s^k=\phi_Z^{\log k(s)}V$ and its primitive by $f_s^k=k(s)f$, where $k(s)>0$, $k\le1$, and $k=1$ outside a buffered sector. Liouville pullback scales $\lambda_\Sigma$ by $k$, so the displayed primitive remains exact. Choose a plateau containing the crossing of $\theta=\pi$, with two times whose central angles differ by $2\delta$ and lie on opposite sides; require $k_{\min}\operatorname{osc}(f)/M<\delta/4$, including the retained end constant. The normalized family is $\theta(q,s)=\theta_s-k(s)f(q)/M$; its contact velocity is $ \alpha_M(\partial_s\Lambda_s) =M\theta_s'+\lambda_\Sigma(\partial_sV_s^k)-\partial_sf_s^k. $ The compression term on the product sector is $-k'f$. Choose $k$ itself to interpolate with bounded derivative relative to the increasing base angle (not $\log k$); then this term is uniformly bounded as the positive plateau value tends to zero. First choose one sufficiently large fixed $M$, then $\delta$, then $k_{\min}$; the family is positive and its entire plateau trace stays on the chosen sides with its actual primitive and grading transport. The prefix to $D_{\rm in}$ stays on the incoming side and is an allowed positive history; its continuation arrow $D_{\rm in}\to D_i$ is invertible in the stopped localization. The plateau crossing is not inverted. The suffix arrow $D_k\to\Gamma_i$ stays on the outgoing side and is allowed, hence invertible only after localization. [F1, A4, construct, algebra]

1.3 Assuming [A2], applying its natural Serre pairing twice gives $ \operatorname{Hom}(SX,SY)\simeq \operatorname{Hom}(Y,SX)^\vee\simeq \operatorname{Hom}(X,Y)^{\vee\vee}\simeq \operatorname{Hom}(X,Y). $ Naturality and the trace-unit identity identify this comparison with the map induced by $S$, so $S$ is fully faithful on $T=\operatorname{Perf}(A)$. For $X\in T$, the covariant module $M_X(i)=\operatorname{Hom}(X,S D_i)$ has a finite directed bar resolution: normalized terms use strictly increasing strings of distinct labels, so their length is at most $m-1$; the unit-insertion contraction proves the augmentation is a quasi-isomorphism. A term $V\otimes A(i,-)$ is corepresented by $V^\vee\otimes D_i$, since $ \operatorname{Hom}(V^\vee\otimes D_i,Y) \cong V\otimes\operatorname{Hom}(D_i,Y). $ Reversing this finite resolution with the actual shift and dual differential constructs $LX$ and chain comparisons $\operatorname{Hom}(LX,Y)\simeq\operatorname{Hom}(X,SY)$, hence $L\dashv S$. [A2, F1, F5, F6, construct, algebra]

2.1 Set $k_r(s)=1-r+r k(s)$. This two-parameter normalized circle family has the prescribed one-turn movie at $r=0$ and the compressed movie at $r=1$; the time endpoints have $k_r=1$, so their link, primitive constant, monodromy, and grading are fixed. Extend its contact velocity relative to the two endpoint Hamiltonians, lift it with a common radial cutoff, and apply the resulting ambient flows to the same initial disk. The end link is stationary in $r$, so the endpoint isotopy $i_r$ is exact. Differentiating $i_r^*\lambda=dh_r$ shows that $\alpha_r=i_r^*(\iota_{\partial_r i_r}\omega)=d(\partial_rh_r-\lambda(\partial_ri_r))$. The primitive is constant on the unique end; subtract that one constant, leaving a compactly supported primitive. The initial disk is a proper closed Lagrangian embedding by [F1,F2], so the hypothesis [F7] permits [F4] to supply its cotangent neighborhood. In that neighborhood the family is a graph of these exact one-forms; the fiber-linear Hamiltonian with a cutoff equal to one near the zero section generates it and has compact support. Thus it gives an ordinary compact Hamiltonian equivalence $D_k\simeq F_H(D_i)$. Combining it with the inverse of the allowed suffix arrow gives $\Gamma_i\simeq F_H(D_i)$. This proves the chosen auxiliary endpoint comparison; it does not prove [A1] or [A3]. [F1, F2, F4, F7, step 1.2, construct, algebra]

2.2 Full faithfulness makes the counit $LSY\to Y$ an equivalence. For the unit $X\to SLX$, let $C_X$ be its cone. The adjunction identifies $\operatorname{Hom}(C_X,SY)$ with zero for every $Y$; [A2] identifies this with $\operatorname{Hom}(Y,C_X)^\vee$. Hence $\operatorname{Hom}(D_i,C_X)$ is acyclic for every generator. Since $C_X$ is itself a finite perfect object, its finite directed bar resolution is acyclic and its identity is a boundary; therefore $C_X$ is zero and the unit is an equivalence. Taking $B_i=LD_i$ gives the actual finite inverse maps $S(B_i)\simeq D_i$, provided the geometric functor and pairing in [A2] are actually supplied. This algebraic construction does not manufacture [A2] or the forward maps [A3]. [A2, F1, step 1.3, construct, algebra]

2.3 The mixed-clock family admits one fixed geometric pairing stage. On each normalized product end [A4] gives $ H=\kappa(\rho)(h+c\rho)\eta(q),\qquad q=\frac{\rho}{\rho+h},\qquad s=\rho+h, $ with $\kappa=0$ for $\rho\le\rho_a$, $\kappa=1$ for $\rho\ge\rho_b$, and $\eta=0$ for $q\le q_0$. Choose a common contact level $Y=\{\Phi=C_0\}$ with $C_0>\rho_b/q_0$, beyond every original conical threshold. On the active product support the flow preserves $\rho,h,q,s$; the inner cutoff transition does not meet $Y$, and the remaining clock is homogeneous there and preserves its level and actual end Liouville field. Its support on $Y$ is the compact set $A=\{\rho\ge\rho_a,q\ge q_0\}\cap Y$, disjoint from the stop. Include all fixed source/test links in a compact set $K\subset Y\setminus S$; the clock preserves those links for every real time. Choose the two cusp tails in one neighborhood of $S$ disjoint from $K$. The same incoming sources, outgoing $\Gamma_i$, and neck can then be chosen for all clock indices. The outgoing targets lie inside the outgoing cusp and are not included among the links avoided by the source tails. Modifying the clock only inside that cusp to vanish near the fixed $\Gamma_i$ leaves every source path unchanged and fixes each target; thus one fixed target stage works for the entire mixed-clock family. This proves the geometric common-stage support assertion, not the actual outgoing count or finite bar comparison. [F1, A4, step 1.2, construct, algebra]

3.1 To instantiate the finite inverse in the requested ordinary history model one still needs [A3], the actual outgoing pairing [A1], and chain maps/homotopies comparing their localized suffix words with that same finite model. A pairing against $\Gamma_i$ alone does not identify $\Gamma_i$ with $F_H(D_i)$; step 2.1 supplies that endpoint map for the chosen auxiliary copy, while step 2.2 requires the distinct forward membership of $S(D_i)$. The common support geometry in step 2.3 does not turn either missing count into a chain map. Therefore this item remains escalated at the actual outgoing count and forward finite-membership interfaces. [A1, A2, A3, F2, F3, F4, step 2.1, step 2.2, step 2.3] ∎

## Remarks

The common-stage compact-link argument and the compressed endpoint movie are ported from the current local research dossier. The finite inverse is a conditional algebraic construction. Neither item proves the absent two-cusp count or the critical-slide forward membership, and neither turns a localized inverse into an ordinary chain inverse without the stated comparison maps.
