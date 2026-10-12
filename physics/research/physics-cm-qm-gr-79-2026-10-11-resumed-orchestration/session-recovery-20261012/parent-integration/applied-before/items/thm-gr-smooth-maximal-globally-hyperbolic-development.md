---
id: thm-gr-smooth-maximal-globally-hyperbolic-development
kind: theorem
title: "Existence and uniqueness of the smooth maximal globally hyperbolic development of constrained initial data in the selected matter sectors"
status: draft
origin: session
domain: mathematics
dependency_level: 39
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-maximal-geodesics-and-extension, def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-maximal-common-development, lem-gr-no-corresponding-boundary-points, lem-gr-development-pair-gluing, lem-gr-universal-development, lem-gr-development-quotient-dense-set, lem-gr-development-quotient-second-countable, lem-gr-data-fixing-immersion-is-embedding, lem-gr-isometric-immersion-rigidity, lem-gr-subdevelopment-convexity, lem-gr-portion-inextendibility, thm-gr-local-geometric-development, thm-gr-high-regularity-selected-matter-development, thm-gr-cauchy-surface-implies-globally-hyperbolic, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-countable-choice, def-dependent-choice]
dependency_roles:
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-maximal-common-development: mathematical-premise
  lem-gr-no-corresponding-boundary-points: mathematical-premise
  lem-gr-development-pair-gluing: mathematical-premise
  lem-gr-universal-development: mathematical-premise
  lem-gr-development-quotient-dense-set: mathematical-premise
  lem-gr-development-quotient-second-countable: mathematical-premise
  lem-gr-data-fixing-immersion-is-embedding: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-portion-inextendibility: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  thm-gr-high-regularity-selected-matter-development: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Theorems 2.7 and 2.8 with their proofs, printed pp. 12 and 20-24"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "Y. Choquet-Bruhat and R. Geroch, Global aspects of the Cauchy problem in general relativity, Communications in Mathematical Physics 14 (1969), 329-335: the original existence and uniqueness theorem for the maximal globally hyperbolic development"
      url: "https://doi.org/10.1007/BF01645389"
    - title: "H. Ringstrom, On the Topology and Future Stability of the Universe, Oxford University Press 2013: the Cauchy problem and geometric uniqueness, Chapter 8 (background)"
      url: "https://doi.org/10.1093/acprof:oso/9780199680296.001.0001"
verification:
  precheck: pending
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $\Lambda\in\mathbb R$,
$\kappa>0$, let $\Sigma$ be a connected smooth three-manifold with smooth
Riemannian metric $h$ and smooth symmetric $2$-tensor $K$, and let smooth
complete matter initial data be given for one fixed admissible covariant coupled model of [[def-gr-development-and-data-fixing-isometry]], with the constraints satisfied and at least one development existing. The supplied local existence and uniqueness obligations must hold for that same model and for the complete data at every spacelike restart used in the proof. This includes vacuum, scalar, strict barotropic fluid and geodesic nonnegative tilted dust (with velocity prescribed through zero density) via [[thm-gr-high-regularity-selected-matter-development]]; additional fixed models must supply the same actual obligations. Then there exists a development
$(M_{\mathrm{max}},g_{\mathrm{max}},N_{\mathrm{max}},j_{\mathrm{max}},\psi_{\mathrm{max}})$
of the data in the sense of [[def-gr-development-and-data-fixing-isometry]]
clause (a) that is maximal in the sense of clause (d) of that definition:
for every development $(M,g,N,j,\psi)$ of the same data there is a
data-fixing development embedding $M\to M_{\mathrm{max}}$. Moreover, if
$(M'_{\mathrm{max}},g'_{\mathrm{max}},N'_{\mathrm{max}},j'_{\mathrm{max}},\psi'_{\mathrm{max}})$
is another maximal development of the same data, then there is exactly one
data-fixing isometry $M_{\mathrm{max}}\to M'_{\mathrm{max}}$; the maximal
development is thus unique up to a unique data-fixing isometry. It is
connected and, by [[thm-gr-cauchy-surface-implies-globally-hyperbolic]],
globally hyperbolic with Cauchy surface $j_{\mathrm{max}}(\Sigma)$.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, connected complete constrained initial data of the specified fixed admissible model, and at least one development, with the actual branch local existence and geometric uniqueness/restart obligations supplied.

[L1] The set-sized family and the quotient: the family $\mathcal X$ of canonical developments over $\Sigma\times\mathbb R$ is a set, the generated identification relation on the disjoint union is given by the pairwise maximal common developments, and the quotient $Q$ is Hausdorff, locally Euclidean and smooth with a Lorentzian metric, time orientation and matter fields, all member maps being diffeomorphisms onto open sets preserving the structure; these maps are data-fixing isometries onto their images, and every causal curve in $Q$ inextendible in $Q$ meets the initial surface exactly once ([[lem-gr-universal-development]] clauses (a)-(d)).

[L2] Second countability of $Q$: there is a countable dense subset of $Q$, and from it and the convex normal exponential charts a countable basis of $Q$ is produced; hence $Q$ is second countable ([[lem-gr-development-quotient-dense-set]], [[lem-gr-development-quotient-second-countable]]).

[L3] Every development embeds into $Q$: for every development $(M,g,N,j,\psi)$ of the data there is a data-fixing development embedding into $Q$ ([[lem-gr-universal-development]] clause (e)).

[L4] Rigidity and uniqueness of data-fixing maps: a data-fixing isometric immersion between developments is injective and a diffeomorphism onto its open image; on a connected development two data-fixing isometric immersions coincide; and every data-fixing self-isometry of a connected development is the identity ([[lem-gr-data-fixing-immersion-is-embedding]] clauses (b)-(c), [[lem-gr-isometric-immersion-rigidity]] clause (a)).

[L5] Connectedness of members and of $Q$: if $\Sigma$ is connected, every member $U_\alpha$ is connected, and $Q$ is connected. Indeed, each member contains $j_0(\Sigma)$ and is a development, so a maximal timelike geodesic through any point is inextendible in that member and meets its Cauchy surface. Its connected image lies in the component of that point, proving every component meets $j_0(\Sigma)$ ([[lem-gr-maximal-geodesics-and-extension]] clause (b), [[def-gr-development-and-data-fixing-isometry]] clause (a)5); the member maps identify these initial surfaces, so the union $Q$ of the images is connected.

[L6] Development axioms of $Q$: with [L2] the space $Q$ satisfies every clause of [[def-gr-development-and-data-fixing-isometry]] clause (a), i.e. it is a time-oriented second countable smooth Lorentzian four-manifold with a Cauchy embedding of $\Sigma$, the field equations, and the induced data; hence $(Q,\bar g,\bar N,\bar j,\bar\psi)$ is a development of the data.

## Proof

**Proof technique:** direct.

1.1 (Existence.) Let $Q$ be the quotient of [[lem-gr-universal-development]]. By [L1] it is Hausdorff and locally Euclidean with a smooth atlas, metric, time orientation and matter fields; by [L2] it is second countable; by [L1] its initial surface is met exactly once by every inextendible causal curve and the field equations and induced data hold. Hence by [L6] $Q$ is a development of the data. [L1, L2, L6, algebra]

1.2 (Maximality.) Let $(M,g,N,j,\psi)$ be a development of the data. By [L3] there is a data-fixing development embedding $\Phi:M\to Q$. Hence every development admits a data-fixing development embedding into $Q$, which is the maximality property of [[def-gr-development-and-data-fixing-isometry]] clause (d). [L3, algebra]

2.1 (Uniqueness.) Let $Q,Q'$ both be maximal developments of the data. By maximality of $Q'$ applied to the development $Q$, there is a data-fixing development embedding $\Phi:Q\to Q'$; by maximality of $Q$ applied to $Q'$, there is $\Phi':Q'\to Q$. The composition $\Phi'\circ\Phi:Q\to Q$ is a data-fixing isometric immersion of the development $Q$ into itself (compositions of isometric immersions preserving the data and the time orientation are again such); by [L4] it is the identity of $Q$ because $Q$ is connected by [L5]. Similarly $\Phi\circ\Phi'=\mathrm{id}_{Q'}$. Hence $\Phi$ is a data-fixing isometry with inverse $\Phi'$, and $Q,Q'$ are isometric over the data. [step 1.2, L4, L5, algebra]

3.1 (Uniqueness of the isometry.) If $\Phi_1,\Phi_2:Q\to Q'$ are both data-fixing isometries, then on the connected development $Q$ the two data-fixing isometric immersions coincide by [L4]; hence the isometry is unique. [step 2.1, L4, algebra]

4.1 (Conclusion.) The preceding steps show that the quotient $Q$ of [[lem-gr-universal-development]] is a maximal development of the data to which every development embeds by a data-fixing development embedding, and that any two maximal developments are related by exactly one data-fixing isometry. This is the assertion. [step 1.1, step 1.2, step 2.1, step 3.1, algebra] ∎

## Remarks

The theorem is the mathematical content of Sbierski's Theorems 2.7 and 2.8 for the stated fixed admissible coupled model, including the four concrete smooth matter branches. The physical reading of the objects, and the question whether the data represent an observed configuration, are not part of this statement; see [[pthm-gr-smooth-maximal-development]] for the conditional model deduction and [[rem-gr-mghd-scope]] for the empirical qualifications. For disconnected second countable initial data the proof is applied to the at most countably many connected components and their disjoint union, which is again second countable; every development restricts componentwise by its Cauchy surface, so the same existence, maximality and uniqueness statements hold.
