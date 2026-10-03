---
id: thm-the-artin-representation-is-faithful
kind: theorem
title: "The Artin representation is faithful"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 7
deps: [prop-the-geometric-action-on-meridians-is-the-artin-representation, lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity, thm-the-artin-presentation-is-complete-for-geometric-braids, prop-the-artin-presentation-surjects-onto-geometric-braids, thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, def-the-artin-representation-on-a-free-group, def-braid-group-by-the-artin-presentation, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-9 (Artin showed that rho is faithful by topological arguments)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, Theorem 15 and the faithfulness statement, printed pp. 112-115"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
---

## Statement

Assume AC. For every $n\ge1$ the Artin representation
$\rho:B_n\to\operatorname{Aut}(F_n)$ of
[[def-the-artin-representation-on-a-free-group]] is injective; equivalently, a
braid word acts trivially on $F_n$ only if it represents the trivial braid.

## Facts & Assumptions

**Given:** AC, the number $n\ge1$, the abstract braid group $B_n$ on
$\sigma_1,\dots,\sigma_{n-1}$, the geometric braid group $G_n$ with the
surjection $\varphi_n:B_n\to G_n$ and the isomorphism
$$\Psi:G_n\longrightarrow\operatorname{Mod}(D^2,Q_n;\partial D^2)$$
of [[prop-the-artin-presentation-surjects-onto-geometric-braids]] and
[[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]],
and the identification of $F_n$ with $\pi_1(D^2\setminus Q_n,d)$ by the
standard meridians
([[def-the-artin-representation-on-a-free-group]],
[[def-braid-group-by-the-artin-presentation]]).

[F1] *The geometric action is the Artin representation.* Assume AC. For every
braid word $\beta$, the automorphism of $F_n$ induced by the mapping class
$\Psi(\varphi_n(\beta))$ equals $\rho(\beta)$; in particular, if
$\rho(\beta)=\operatorname{id}$ then the homeomorphism representing
$\Psi(\varphi_n(\beta))$ acts as the identity on $\pi_1(D^2\setminus Q_n,d)$.
([[prop-the-geometric-action-on-meridians-is-the-artin-representation]].)

[F2] *Trivial action implies isotopy to the identity.* Assume AC. Let
$h\in\operatorname{Homeo}^+(D^2,\partial D^2)$ preserve $Q_n$ setwise and act
as the identity on $\pi_1(D^2\setminus Q_n,d)$; then $h$ is isotopic to
$\mathrm{id}_{D^2}$ relative to $\partial D^2$ and $Q_n$. Hence such an $h$
represents the identity element of
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$.
([[lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity]].)

[F3] *Completeness of the presentation.* Assume AC. The published surjection
$\varphi_n$ is injective, hence an isomorphism; that is, a braid word whose
geometric braid is trivial represents the trivial element of $B_n$.
([[thm-the-artin-presentation-is-complete-for-geometric-braids]].)

[F4] *The isomorphism $\Psi$.* $\Psi$ is a group isomorphism, so it is
injective: if $\Psi(\varphi_n(\beta))$ is the identity mapping class, then
$\varphi_n(\beta)=1$ in $G_n$.
([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]],
AC used through the published isomorphism.)

## Proof

**Proof technique:** direct.

1.1 *The case $n=1$.* For $n=1$ there is no generator, $B_1$ is the trivial group by [[def-braid-group-by-the-artin-presentation]], and the unique map $\rho:B_1\to\operatorname{Aut}(F_1)$ is injective; the assertion holds vacuously. [given]

1.2 *Assume a word acts trivially.* Let $n\ge2$ and let $\beta$ be a braid word with $\rho(\beta)=\operatorname{id}$. By [F1] the mapping class $\Psi(\varphi_n(\beta))$ induces the identity automorphism of $\pi_1(D^2\setminus Q_n,d)$. Choose a homeomorphism $h$ representing this mapping class (for instance the homeomorphism attached to $\beta$ by the geometric construction underlying $\varphi_n$); then $h$ fixes $\partial D^2$ pointwise, preserves $Q_n$ setwise and acts as the identity on $\pi_1(D^2\setminus Q_n,d)$. [F1, given]

2.1 *Trivial action forces the identity mapping class.* By [F2], applied under the present assumption AC, the homeomorphism $h$ of step 1.2 is isotopic to the identity relative to $\partial D^2$ and $Q_n$; hence $\Psi(\varphi_n(\beta))=1$ in $\operatorname{Mod}(D^2,Q_n;\partial D^2)$. [F2, step 1.2]

3.1 *Injectivity of the presentation.* By [F4] the isomorphism $\Psi$ is injective, so step 2.1 gives $\varphi_n(\beta)=1$ in $G_n$. By [F3], $\varphi_n$ is injective, so the braid word $\beta$ represents the trivial element of $B_n$. [F3, F4, step 2.1]

4.1 *Conclusion.* Steps 1.1, 1.2, 2.1 and 3.1 show that every braid word acting trivially on $F_n$ represents the trivial braid, which is exactly the injectivity of $\rho$. The converse (the trivial braid acts trivially) is immediate from $\rho$ being a homomorphism, so injectivity holds for every $n\ge1$. AC is used exactly through the three published or previously proved inputs [F1], [F2] and [F3], namely the geometric-action proposition, the isotopy-to-identity lemma and the completeness theorem, all of which assume AC; the final argument itself is elementary. [F1, F2, F3, step 1.1, step 3.1] ∎

## Remarks

- The proof replaces Artin's original topological faithfulness argument by the
  route through the mapping class group: the geometric action identifies
  $\rho$ with the action of $\operatorname{Mod}(D^2,Q_n;\partial D^2)$ on
  $\pi_1$, and a boundary-fixed homeomorphism acting trivially on $\pi_1$ is
  isotopic to the identity by induction on the number of punctures and the point-pushing kernel theorem. The last point-motion loop is detected by a compact tether square after filling that puncture; no Markov theorem or general arc-tameness theorem is used.
- Consequently $\rho$ is an isomorphism onto its image, and $B_n$ is
  isomorphic to the Artin braid subgroup of $\operatorname{Aut}(F_n)$
  characterized in
  `thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n`.
