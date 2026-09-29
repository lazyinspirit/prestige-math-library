---
id: lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles
kind: lemma
title: Existence of compatible connections
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-complex-linear-and-compatible-bundle-connections
  - def-connection-on-a-smooth-vector-bundle
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Raoul Bott, Lectures on Characteristic Classes and Foliations
      url: https://poisson.phc.dm.unipi.it/~lmigliorini/secondo_magistrale/gauge_theory/bott_foliations.pdf
      locator: §4, Lemma 4.2, printed p. 23 (PDF p. 26), local connections patched by a partition of unity
    - title: John Milnor and James Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: Appendix C, printed pp. 289–312
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice (AC). Let $M$ be a finite-dimensional Hausdorff
second-countable smooth manifold, with boundary allowed. Every finite-rank
smooth real vector bundle over $M$ admits a smooth Euclidean bundle metric
and a Euclidean-compatible smooth connection. Every finite-rank smooth
complex vector bundle over $M$ admits a smooth Hermitian metric and a
Hermitian complex connection. In particular, any supplied Euclidean or
Hermitian metric on such a bundle admits a compatible connection. Here
“complex connection,” “Hermitian,” and “Euclidean-compatible” have the
meanings in [[def-complex-linear-and-compatible-bundle-connections]].

## Facts & Assumptions

**Given:** The stated manifold and bundle; a metric is supplied for the
connection-existence clause.

[A1] Full AC says every family of nonempty sets has a choice function.
[[def-axiom-of-choice]].

[F1] Under countable choice, every smooth real vector bundle over a
boundaryless base admits a smooth bundle metric.
[[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]].

[F2] Under countable choice, every open cover of a boundaryless smooth
manifold admits a smooth subordinate partition of unity.
[[thm-smooth-partitions-of-unity-exist-on-manifolds]].

[F3] Under countable choice, every open cover of a smooth manifold with
boundary admits a smooth subordinate partition of unity.
[[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]].

[F4] A smooth complex bundle has local smooth complex frames and a smooth
complex structure on its underlying real bundle.
[[def-complex-linear-and-compatible-bundle-connections]].

[F8] A complex connection is $\mathbb C$-linear and obeys the
smooth-function Leibniz rule.
[[def-complex-linear-and-compatible-bundle-connections]].

[F5] A Hermitian connection obeys the Hermitian metric-derivative identity.
[[def-complex-linear-and-compatible-bundle-connections]].

[F6] A real Euclidean-compatible connection obeys the real metric-derivative
identity.
[[def-complex-linear-and-compatible-bundle-connections]].

[F7] The same local product convention for smooth real vector bundles is used
when the base has boundary.
[[def-connection-on-a-smooth-vector-bundle]].

## Proof

**Proof technique:** local trivial connections and a partition-of-unity average.

**Given:** Full AC, a bundle over $M$, and, when constructing a compatible connection, a supplied smooth Hermitian or Euclidean metric.

1.1 Let $(X_n)_{n\in\mathbb N}$ be any sequence of nonempty sets. Apply [A1] to the set of distinct values $\{X_n:n\in\mathbb N\}$ and compose the resulting choice function with $n\mapsto X_n$. This gives a choice function for the sequence; the finite and empty indexed cases are immediate. Thus the countable-choice hypotheses of [F1], [F2], and [F3] hold. This is the only use of full AC. [A1, F1, F2, F3, construct]

2.1 For a real bundle over a boundaryless base, [F1] supplies a smooth Euclidean metric. If $M$ has boundary, take its supplied local trivializing frame cover by [F7]; in each frame pull back the standard positive-definite inner product on $\mathbb R^r$. Apply [F3] to this cover and call the resulting partition $(\rho_\alpha)$. The locally finite sum $g=\sum_\alpha \rho_\alpha g_\alpha$, with each weighted term extended by zero outside its frame domain, is smooth because $\operatorname{supp}\rho_\alpha$ lies inside that domain. At each point the weights are nonnegative and sum to one, so $g$ is positive definite. The empty base has its unique metric. Hence every real bundle in the statement has a smooth Euclidean metric. [F1, F3, F7, step 1.1, construct]

3.1 For a complex bundle, let $J$ be its smooth complex structure from [F4] and let $g$ be the real metric from step 2.1 on its underlying real bundle. Set $q(u,v)=g(u,v)+g(Ju,Jv)$. Then $q$ is smooth, positive definite, and $J$-invariant; in particular $q(Ju,v)=-q(u,Jv)$. Define $h(u,v)=q(u,v)-i\,q(Ju,v)$. The skew identity gives $h(Ju,v)=i h(u,v)$ and $h(u,Jv)=-i h(u,v)$; real bilinearity therefore makes $h$ complex-linear in its first variable and conjugate-linear in its second. Symmetry of $q$ gives $h(v,u)=\overline{h(u,v)}$, while $q(Ju,u)=0$ gives $h(u,u)=q(u,u)>0$ for $u\ne0$. Thus $h$ is a smooth Hermitian metric in the stated convention. [F4, step 2.1, algebra]

4.1 Apply the local construction to a metric supplied at the start, or to the metric produced in steps 2.1 and 3.1 when proving existence for an arbitrary bundle. On each member of its local bundle-frame cover, apply Gram–Schmidt to the supplied frame to obtain an orthonormal frame in the real case or a unitary frame in the complex case, using [F4] and [F7]. All denominators are norms of nonzero vectors, so the procedure is smooth; in boundary charts the same formulas restrict from local smooth extensions. For a frame $e_\alpha$, define a local connection by $\nabla^\alpha(e_\alpha u)=e_\alpha\,du$. Its matrix is zero in that orthonormal or unitary frame, so it is compatible with the metric by [F5] and [F6]. It is a complex connection by [F8]. Rank zero gives the empty frame and the unique zero connection. [F4, F5, F6, F7, F8, step 2.1, step 3.1, given, construct]

5.1 Choose the partition $(\rho_\alpha)$ subordinate to this orthonormal/unitary frame cover using [F2] when $M$ is boundaryless and [F3] when it has boundary. Define $\nabla s=\sum_\alpha\rho_\alpha\nabla^\alpha s$, extending each weighted term by zero outside its frame domain. This sum is locally finite and smooth. For a smooth scalar function $f$, each local connection obeys the relevant Leibniz rule by [F8], so $\nabla(fs)=\sum_\alpha\rho_\alpha(df\otimes s+f\nabla^\alpha s)=df\otimes s+f\nabla s$, because $\sum_\alpha\rho_\alpha=1$. The same calculation gives complex-linearity in the complex case. Since every $\rho_\alpha$ is real-valued, summing the local metric identities [F5] and [F6] gives $Xh(s,t)=h(\nabla_Xs,t)+h(s,\nabla_Xt)$, or its real Euclidean version. Thus $\nabla$ is globally compatible. [F2, F3, F5, F6, F8, step 4.1, algebra]

6.1 Steps 2.1 and 3.1 construct the stated real and complex metrics, and step 5.1 constructs compatible connections both for those metrics and for any metric supplied at the start. At an empty base the assertions are vacuous; at rank zero the unique metric and connection satisfy the identities vacuously. At rank one Gram–Schmidt and the local connection formula remain valid. On a zero-dimensional base every local connection one-form is zero, and the averaging and compatibility identities still hold. The partition and frame formulas also restrict to the boundary by steps 2.1, 4.1, and 5.1. [step 2.1, step 3.1, step 4.1, step 5.1, cases] ∎
