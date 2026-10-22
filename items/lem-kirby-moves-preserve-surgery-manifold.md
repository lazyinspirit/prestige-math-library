---
id: lem-kirby-moves-preserve-surgery-manifold
kind: lemma
title: "Kirby moves preserve the oriented surgery manifold"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-integral-framed-link-surgery-diagram
  - def-kirby-moves-on-integral-framed-links
  - def-oriented-slope-and-knot-dehn-filling
  - def-countable-choice
  - def-axiom-of-choice
  - def-handle-slide-of-one-k-handle-over-another
  - def-surgery-trace-cobordism
  - lem-handle-slides-preserve-the-relative-diffeomorphism-type
  - thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
      locator: "Lecture 3 §3.2, proof of Theorem 3.1 for K1 and K2, printed pp. 46–47"
    - title: "Robion Kirby, A Calculus for Framed Links in S3"
      url: "https://math.berkeley.edu/~kirby/papers/Kirby%20-%20A%20calculus%20for%20framed%20links%20in%20S%5E3%20-%20MR0467753.pdf"
      locator: "§1 operations and §2 easy direction, printed pp. 35–37"
---

## Statement

Assume the Axiom of Choice. If two integral framed-link surgery diagrams are related by one ambient isotopy, handle slide, or split $\pm1$-unknot stabilization or destabilization as defined for this page, then their oriented surgery results are orientation-preservingly diffeomorphic. The same holds for any finite sequence of these moves.

## Statement references

[[def-integral-framed-link-surgery-diagram|Integral surgery result]]

[[def-kirby-moves-on-integral-framed-links|The three allowed moves]]

[[def-countable-choice|Countable-choice consequence of full AC used by the trace and slide suppliers]]

## Facts & Assumptions

**Given:** Full AC, two integral framed-link diagrams, and one allowed Kirby move between them.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. Applying it to the range of any sequence of nonempty sets gives the countable-choice axiom required by the framed handle-slide and surgery-trace interfaces.

[F1] [[def-integral-framed-link-surgery-diagram]]: component $K_i$ is filled with a solid torus whose meridian maps to $n_i[\mu_i]+[\lambda_i]$.

[F2] [[def-kirby-moves-on-integral-framed-links]]: a handle slide replaces a component by the band sum with a framed parallel of another component, and stabilization adds or removes a split unknot with coefficient $+1$ or $-1$.

[F3] [[def-handle-slide-of-one-k-handle-over-another]]: the slid attaching sphere is the band sum of the first attaching sphere with a signed framed parallel copy of the second, with the full framing carried across the band.

[F4] [[lem-handle-slides-preserve-the-relative-diffeomorphism-type]]: for $1\le k\le n-2$, a handle slide gives a diffeomorphism of the handle attachments relative to the incoming boundary.

[F5] [[def-surgery-trace-cobordism]]: a framed surgery trace is the cylinder with a handle attached along the framed sphere.

[F6] [[thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold]]: the outgoing face of a framed surgery trace is diffeomorphic, as a smooth manifold, to the corresponding surgered manifold; the identification is the identity on the complement of the surgery neighbourhood. The orientation agreement needed here is checked in step 1.2.

[F7] [[def-oriented-slope-and-knot-dehn-filling]]: the integer $r$ filling slope is $r[\mu]+[\lambda]$, and the orientation-reversing gluing gives a filled orientation agreeing with the oriented exterior.

[F8] [[def-countable-choice]]: $\mathrm{AC}_\omega$ says that every sequence of nonempty sets $(X_n)_{n\in\mathbb N}$ has a choice function $f$ with $f(n)\in X_n$.

## Proof

1.1 For an ambient isotopy, carry each component neighbourhood, meridian, and preferred longitude along the isotopy. The endpoint diffeomorphism of $S^3$ therefore maps every filling meridian to the same framed slope on the corresponding endpoint torus. Extend it over each attached solid torus by the product identification used in the filling. The resulting map is an orientation-preserving diffeomorphism of the filled manifolds. [given, F1, F2, construct]

1.2 Applying [A1] to the family of values of any sequence $(X_n)$ in [F8] gives a choice function on that range; composing it with $n\mapsto X_n$ supplies the choice function required by [F8]. Thus the $\mathrm{AC}_\omega$ hypothesis of [F3]–[F6] holds. For a diagram $D$, form its $4$-dimensional surgery trace from $S^3\times[0,1]$ by attaching one $2$-handle for each framed link component. Orient the product by $dt$ followed by the fixed orientation of $S^3$, and orient each handle so its attaching identification reverses the induced boundary orientations of the handle and cylinder, as required by [F5]; this is possible because each attaching region $S^1\times D^2$ is connected. The trace is connected. On the outgoing face, the unaltered part $E_D=S^3\setminus\bigcup_i\operatorname{int}N(K_i)$ has the standard $S^3$ orientation from the upper product face, exactly the orientation that the filling conventions [F1, F7] extend over the attached solid tori. The link exterior is nonempty and connected (paths in $S^3$ can be perturbed off the one-dimensional link; for the empty diagram $E_D=S^3$). Thus the identity-on-$E_D$ identification in [F6] preserves the surgery orientation. The link slide of [F2] is exactly the $k=2$ handle slide of [F3], including its full transported normal framing. Since $1\le2\le4-2$, [F4] supplies a diffeomorphism between the two traces relative to the incoming $S^3$ face. Both traces have the product orientation there and the diffeomorphism fixes that face; its tangent derivative is the identity and its normal derivative preserves the interior side, so it preserves the trace orientation. Its restriction preserves the induced orientations on the outgoing faces. Composing with the identifications in [F6] gives the required orientation-preserving diffeomorphism of surgery results. [given, A1, F2, F3, F4, F5, F6, F7, F8, construct]

1.3 Suppose a split unknot is added with coefficient $\varepsilon\in\{1,-1\}$ in a ball disjoint from the rest of the link. The separating sphere shows that the filled manifold is the connected sum of the old surgery result with the filling of the unknot exterior along $\varepsilon[\mu_U]+[\lambda_U]$. For the standard unknot, take $E_U=\{|z_2|\ge1/\sqrt2\}\subset S^3\subset\mathbb C^2$, identified with $D^2\times S^1$ by $(z_1,z_2)\mapsto(z_1,z_2/|z_2|)$. Its preferred longitude $\lambda_U$ is the meridian of this solid torus, and $\mu_U$ is its core longitude. The diffeomorphism $g_\varepsilon(z,w)=(w^{-\varepsilon}z,w)$ of $D^2\times S^1$ preserves orientation, fixes $[\lambda_U]$, and sends $[\mu_U]$ to $[\mu_U]-\varepsilon[\lambda_U]$; hence it sends the slope $\varepsilon[\mu_U]+[\lambda_U]$ to the unoriented meridional slope $[\mu_U]$. Choose the $S^3$ gluing with meridian $[\mu_U]$ and the $\varepsilon$-filling gluing as its pullback by $g_\varepsilon^{-1}$. The map $g_\varepsilon$ on the exterior and the identity on the attached solid torus then give an orientation-preserving diffeomorphism between the two fillings. Filling along $[\mu_U]$ restores the original unknot neighbourhood, so the $\varepsilon$-framed unknot filling is orientation-preservingly diffeomorphic to $S^3$. Hence the connected sum is the original manifold: deleting a ball and regluing the complementary ball of $S^3$ restores the same manifold. Removing a split $\varepsilon$-framed unknot is the inverse operation. [given, A1, F1, F2, F7, construct]

2.1 Each allowed move preserves the oriented surgery manifold by steps 1.1–1.3. Composing the finitely many orientation-preserving diffeomorphisms along a move sequence proves the assertion for Kirby-move-equivalent diagrams. [given, step 1.1, step 1.2, step 1.3, algebra] ∎

