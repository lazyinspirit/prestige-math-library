---
id: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion
title: "Tor one of a cyclic abelian group detects n-torsion"
kind: theorem
status: published
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "def-projective-resolution-in-an-abelian-category", "def-tor-by-resolving-the-right-module", "def-projective-module", "thm-universal-property-of-module-tensor-products", "prop-each-tor-construction-is-covariant-in-both-variables", "prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions", "def-axiom-of-choice", "def-dependent-choice", "thm-recursion"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: Codex
    verdict: locally-repaired
    date: 2026-09-10
    scope: "Owner-authorized fixed-resolution and balanced-Tor choice-interface repair; no independent judge"
    delegated_by: owner
---

## Statement

Assume AC ([[def-axiom-of-choice]]), and use the supplied-resolution
conventions of [[def-balanced-tor-bifunctor]]. For every abelian group $M$
and integer $n\ge1$,
$$\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/n,M)\cong\{m\in M:nm=0\},$$
naturally in $M$. The right resolution of $\mathbb Z/n$ is explicitly
provided below; comparison with a left resolution uses that resolution as
supplied data, not an unproved assertion that DC constructs resolutions.

Without any choice axiom, the same formula holds for the homology of the
specific two-term right resolution below. Choice is used only to invoke the
published comparison and balance results for arbitrary supplied resolutions.

## Facts & Assumptions

[F1] Projectivity is the lifting property for surjections ([[def-projective-module]]), and resolutions are exact augmented complexes of projectives ([[def-projective-resolution-in-an-abelian-category]]).

[L1] Tensor maps and their identities follow on elementary tensors from [[thm-universal-property-of-module-tensor-products]].

[L2] Under DC, supplied right resolutions give the same homology functor up to canonical comparison, and the balance isomorphisms identify this with any supplied left resolution ([[prop-each-tor-construction-is-covariant-in-both-variables]], [[prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]], [[def-balanced-tor-bifunctor]]).

[F2] The right-resolution construction is [[def-tor-by-resolving-the-right-module]].

[L3] Iteration of a self-map of a set from a specified starting point exists by [[thm-recursion]].

## Proof

**Given:** an abelian group $M$ and an integer $n\ge1$; AC is assumed for the balanced comparison clause only.

1.1 Let $Q_1=Q_0=\mathbb Z$, with $d_1(k)=nk$, zero terms above degree one, and augmentation the quotient map to $\mathbb Z/n$. Multiplication by $n$ is injective and its image is the augmentation kernel. The module $\mathbb Z$ is projective without choice: to lift a map $\mathbb Z\to B$ through $E\twoheadrightarrow B$, choose one preimage of the image of $1$ and extend by integer multiplication. The zero module is projective by its unique map. Thus $Q$ is a projective resolution, also when $n=1$. [given, F1, construct]

1.2 AC supplies DC as follows. For any nonempty set $X$ with an entire relation and specified start $a$, apply AC to the family of its nonempty successor sets to obtain a successor function $s:X\to X$. Iterate $s$ from $a$ using [L3]. The resulting sequence is precisely the chain required by [[def-dependent-choice]]. This is the use of AC; it is not an appeal to a later choice theorem. [given, L3, construct]

2.1 The maps $\mathbb Z\otimes_{\mathbb Z}M\to M$, $k\otimes m\mapsto km$, and $M\to\mathbb Z\otimes_{\mathbb Z}M$, $m\mapsto1\otimes m$, are inverse: the first descends by balance and the composites are identities because $k\otimes m=1\otimes km$. Under these maps $d_1\otimes1$ is multiplication by $n$. Hence $Q\otimes M$ is $0\to M\xrightarrow{n}M\to0$ in degrees one and zero. [L1, step 1.1, algebra]

3.1 There are no degree-two boundaries, so $H_1(Q\otimes M)=\ker(n:M\to M)=\{m:nm=0\}$. For a homomorphism $v:M\to M'$, the map $1_Q\otimes v$ is $v$ in both degrees and induces its restriction on these kernels. This proves the calculation and its naturality without choice; for $n=1$ the kernel is zero. [F2, step 2.1, algebra]

4.1 Apply [L2] using the DC supplied in step 1.2. The right-resolution calculation in step 3.1 agrees canonically with that from any other supplied right resolution and, when a left resolution of $M$ is supplied, with the left-resolution calculation. Naturality and coherence of these identifications transport the explicit natural kernel map. Thus the displayed balanced-Tor formula holds under the stated conventions without assuming any unprovided resolution-existence theorem. [L2, step 3.1, step 1.2] ∎
