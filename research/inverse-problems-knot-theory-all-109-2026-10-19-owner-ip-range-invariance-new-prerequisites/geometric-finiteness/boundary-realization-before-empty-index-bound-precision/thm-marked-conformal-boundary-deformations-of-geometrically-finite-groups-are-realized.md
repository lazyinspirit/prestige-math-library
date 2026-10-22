---
id: thm-marked-conformal-boundary-deformations-of-geometrically-finite-groups-are-realized
kind: theorem
title: Realization of prescribed marked conformal-boundary deformations of geometrically finite groups
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-invariant-beltrami-coefficients-deform-kleinian-groups
  - thm-limit-set-conjugacies-preserve-geometric-finiteness-in-hyperbolic-three-space
  - thm-composition-and-inverse-quasiconformal
  - thm-one-quasiconformal-is-conformal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: Entire Section 8.7, printed pp. 176–179, and Sections 4.14–4.18 and 8.3 read; this realization direction is proved from the mapping theorem and the complete local geometric-finiteness preservation chain
---

## Statement

Assume AC. Let $\Gamma\le\mathrm{PSL}_2(\mathbb C)$ be discrete, torsion-free, nonelementary and geometrically finite in the convex-core-neighborhood-volume sense. Let $\Lambda$ be its limit set and $\Omega=\widehat{\mathbb C}\setminus\Lambda$. Supply representatives $\Omega_j$, $j\in J$, of all $\Gamma$-orbits of connected components of $\Omega$, their full stabilizers $\Gamma_j$, and the free holomorphic covering quotients $\pi_j:\Omega_j\to X_j=\Omega_j/\Gamma_j$. For every $j$, supply an orientation-preserving quasiconformal marking $m_j:X_j\to Y_j$ onto a Riemann surface. Assume the uniform strict bound
$$\sup_{j\in J}\|\mu_{m_j}\|_\infty\le\kappa<1.$$
The index set is automatically at most countable. The usual finite collection of finite-type conformal-boundary surfaces is included; if marked puncture or end labels and their extensions are supplied, the markings preserve those labels. No simple connectedness, Jordan-boundary assumption or null-area assumption on $\Lambda$ is imposed. The empty case $\Omega=\varnothing$ is included.

There is a normalized quasiconformal sphere homeomorphism $f$ fixing $0,1,\infty$, of maximal dilatation at most $(1+\kappa)/(1-\kappa)$, such that $\rho(\gamma)=f\gamma f^{-1}$ is a discrete faithful Möbius representation and $\Gamma'=\rho(\Gamma)$ is torsion-free, nonelementary and geometrically finite. Its limit set is $f(\Lambda)$ and its discontinuity components are exactly $f(\Omega_j)$ and their translates. The full stabilizer of $f(\Omega_j)$ is $\rho(\Gamma_j)$, and there are biholomorphisms
$$I_j:f(\Omega_j)/\rho(\Gamma_j)\longrightarrow Y_j$$
for which $I_j\overline f_j=m_j$ exactly, where $\overline f_j:X_j\to f(\Omega_j)/\rho(\Gamma_j)$ is the induced marking. Thus the complete conformal boundary is the disjoint union of precisely these supplied marked targets.

The conjugacy preserves parabolic type, all maximal parabolic stabilizers and their ranks, and any supplied primitive peripheral generators. Labels of punctures or ends in the supplied component markings are preserved under the exact identifications above, including when two labels correspond to the same ambient parabolic class. The realizing coefficient is the invariant assembly of the pulled-back coefficients of $m_j$ on $\Omega$ and zero on $\Lambda$. In particular, if all supplied markings are conformal this normalization gives $f=\mathrm{id}$ and the original group. The result asserts realization, not injectivity or a complete parameterization by marked conformal boundary.

## Statement references

[[lem-invariant-beltrami-coefficients-deform-kleinian-groups]]

[[thm-limit-set-conjugacies-preserve-geometric-finiteness-in-hyperbolic-three-space]]

## Facts & Assumptions

**Given:** AC, the geometrically finite group, representatives of all component orbits, their actual holomorphic quotient covers, and all markings with the uniform coefficient bound.

[A1] Full choice is [[def-axiom-of-choice]]. It permits the component representatives and the countable choices of translating elements and coefficient representatives. The stated representative data are already supplied.

[F1] An invariant sphere coefficient of norm at most $\kappa<1$ has a unique $0,1,\infty$-normalized quasiconformal solution. That solution gives a faithful discrete Möbius conjugacy, preserves element orders, and has the stated maximal-dilatation bound. [[lem-invariant-beltrami-coefficients-deform-kleinian-groups]]

[F2] A sphere conjugacy of discrete torsion-free nonelementary Möbius groups carries the actual limit set and discontinuity domain to their counterparts, preserves parabolic type and bounded-parabolic data, and preserves geometric finiteness in the convex-core-volume definition. [[thm-limit-set-conjugacies-preserve-geometric-finiteness-in-hyperbolic-three-space]]

[F3] Quasiconformal coefficient composition and inversion hold with null-set transport. Maps with equal coefficients cancel to a conformal homeomorphism, and a coefficient-zero quasiconformal map is biholomorphic. [[thm-composition-and-inverse-quasiconformal]], [[thm-one-quasiconformal-is-conformal]]

## Proof

1.1 There are at most countably many components of $\Omega$: each open component contains a distinct member of a fixed countable sphere base, choosing the first basic set contained in that component. They are open since an open subset of a surface is locally path connected. Hence their orbit representatives also form an at most countable set. For every $j$ pull $\mu_{m_j}$ back through the holomorphic covering $\pi_j$ to a coefficient $\nu_j$ on $\Omega_j$. In a sheet chart this is just holomorphic pullback of a measurable coefficient and has the same essential modulus bound. Countably many sheet charts suffice because $\Omega_j$ is second countable. Thus exceptional null sets remain null and $\|\nu_j\|_\infty\le\kappa$. The deck identity $\pi_j\gamma=\pi_j$ makes $\nu_j$ invariant under every $\gamma\in\Gamma_j$, with the coefficient transformation rule $\nu_j(\gamma z)\overline{\gamma'(z)}/\gamma'(z)=\nu_j(z)$ almost everywhere. This is the equality of pulled-back tensor classes; no globally injective chart or universal-cover hypothesis has entered it. [A1, F3, given, construct, algebra]

2.1 For a component $V=\gamma\Omega_j$, define its coefficient as the pushforward $\nu_V=\gamma_*\nu_j$. If also $V=\gamma'\Omega_{j'}$, the supplied orbit representatives force $j=j'$, and $(\gamma')^{-1}\gamma\in\Gamma_j$. Its invariance from step 1.1 proves that both definitions agree almost everywhere. Assemble $\mu$ as $\nu_V$ on every component $V$ and zero on $\Lambda$. This is a measurable sphere coefficient of norm at most $\kappa$: the components form a countable measurable partition of the open set $\Omega$, and $\Lambda$ is closed. Holomorphic coordinate changes and Möbius maps preserve null sets in finite charts; at their poles one uses the infinity chart. Consequently the assembled classes and their norm bound are independent of the chosen representatives. For every $g\in\Gamma$, its action permutes the components, and on each component $(g\gamma)_*\nu_j=g_*(\gamma_*\nu_j)$. On the invariant complement $\Lambda$ both coefficients are zero. This proves global invariance almost everywhere. In particular it does not require that $\Lambda$ itself have measure zero. [A1, F3, step 1.1, given, construct, algebra]

3.1 Apply [F1] to this invariant coefficient. It gives the normalized map $f$ and the discrete faithful Möbius representation $\rho$, with the required orientation and dilatation bound. Torsion-freeness follows from preserved element orders. Nonelementarity follows as well: the whole-sphere conjugacy preserves the finite fixed-orbit alternatives, or equivalently [F2] identifies its limit set as $f(\Lambda)$, which still contains at least three points. By [F2], that is the actual new limit set, its complement is exactly $f(\Omega)$, and the new group is geometrically finite in the stated volume sense. A homeomorphism maps the components of an open set bijectively to the components of its image. Conjugacy therefore gives the full orbit correspondence, with $\operatorname{Stab}_{\Gamma'}f(\Omega_j)=\rho(\Gamma_j)$. No unproved claim that conjugacy alone controls convex-core volume is substituted here for [F2]'s actual criterion proof chain. [F1, F2, step 2.1, given, construct, algebra]

4.1 The equivariant restriction of $f$ descends to a quasiconformal homeomorphism $\overline f_j:X_j\to X'_j=f(\Omega_j)/\rho(\Gamma_j)$ by quotient sheet charts. Define $I_j=m_j\overline f_j^{-1}$ as an actual homeomorphism $X'_j\to Y_j$. In any source sheet, $m_j\pi_j$ and $f|_{\Omega_j}$ have the same coefficient by the construction in step 1.1 and step 2.1. Hence $m_j\pi_j(f|_{\Omega_j})^{-1}$ is conformal by [F3]. These are precisely the sheet expressions of $I_j$. The inverse has the corresponding cancellation, so $I_j$ is biholomorphic, and its defining equality gives $I_j\overline f_j=m_j$ exactly. The disjoint union of the quotients over the component orbits is the whole new conformal boundary, since step 3.1 accounts for every component and every stabilizer. This proves simultaneous realization even for nonsimply connected components and for countably many orbits under the uniform norm bound. [F3, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Parabolic and loxodromic elements have respectively one and two ideal fixed points, and all these points lie in the limit set. Conjugacy therefore preserves their types, as also proved in [F2]. For any parabolic fixed point $p$, it takes the full stabilizer to the full stabilizer of $f(p)$, since fixing the point is exactly the conjugated equality. Maximal parabolic groups, their rank-one or rank-two group structures and their conjugacy classes thus correspond bijectively. A supplied primitive generator is not replaced by a proper power: an equality $\rho(g)=a^k$ in the target stabilizer with $|k|>1$ would pull back under the group isomorphism to $g=\rho^{-1}(a)^k$. For supplied puncture or end labels on a component quotient, transport its compactification or its labeled end neighborhoods by $\overline f_j$. The identity $I_j\overline f_j=m_j$ then makes the labeled extensions exactly the supplied ones on $Y_j$. This keeps different labels distinct even if their loops belong to the same ambient parabolic class; no abstract recognition of end labels from ambient conjugacy classes is being assumed. Finally, if all markings are conformal, all their coefficients and hence $\mu$ vanish. The identity sphere map is the normalized solution in [F1], proving the last assertion. The empty discontinuity-domain case is this zero coefficient construction with an empty collection of targets. [F1, F2, step 3.1, step 4.1, given, algebra] ∎

## Actual source reading and precise scope

The entire actual invariant-Beltrami deformation theorem was read again, including its matrix-topology discreteness argument. The full geometric-finiteness preservation theorem and its local forward, thin-classifier and reverse proofs were developed and read before this realization proof. The actual quasiconformal composition and one-quasiconformal conformality proofs were read in full during the preceding analytic development. Kapovich Section 8.7 was read in full from the cached primary PDF, as were Sections 4.14–4.18 and 8.3. None of its omitted parabolic geometric-finiteness proofs is used as an unproved premise.

Only realization is asserted. A fiber-uniqueness or global boundary-parameterization theorem needs additional actual proofs. In particular this construction does not assume simply connected or Jordan components, area-zero limit set, or a global Ahlfors–Bers bijection.
