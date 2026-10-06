---
id: lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients
kind: lemma
title: Continuous finite-dimensional representations of profinite groups factor through finite quotients
deps:
- def-profinite-group-by-inverse-limit
- lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis
- ex-unitary-and-special-unitary-lie-groups
- def-lie-group
- lem-no-small-subgroups-in-a-lie-group
- def-strongly-continuous-unitary-representation
- thm-first-isomorphism-theorem-groups
- def-quotient-topology
- thm-compactness-under-continuous-maps
- def-continuous-map-top
- def-group-homomorphism
- def-kernel-and-image-of-group-homomorphism
- lem-topological-group-translations-and-inversion
- def-axiom-of-choice
- def-matrix-coefficient-of-a-unitary-representation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-11.md
      - research/frontier-38-owner-30-dispatch/reader-reader-11.result.json
      - research/frontier-38-owner-30-step5-hash-11-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-11-5a-decisions.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: "§2 opening discussion of compact groups that are not Lie groups: profinite Galois groups, Z_p and GL(n,Z_p), printed pp. 1–2"
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Ch. 5 §5.4, printed pp. 230–236 (the general compact-group theory that the example applies)
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a profinite group ([[def-profinite-group-by-inverse-limit]]) and let $\rho:K\to U(n)$ be a continuous homomorphism, regarded as a continuous finite-dimensional unitary representation on $\mathbb C^n$ ([[def-strongly-continuous-unitary-representation]]). Then $\ker\rho$ is open in $K$, and $\rho$ factors through the finite quotient $K/\ker\rho$: there are a finite group $F$, a surjective continuous homomorphism $q:K\to F$ and a homomorphism $\bar\rho:F\to U(n)$ with $\rho=\bar\rho\circ q$. More precisely, if $K=\varprojlim_iG_i$ with coordinate projections $\pi_i$, then $\ker\pi_i\subseteq\ker\rho$ for some $i$, so $\rho$ factors through the finite quotient $K/\ker\pi_i$ of $K$ (isomorphic to the image $\pi_i(K)$, a subgroup of the finite group $G_i$). Consequently every matrix coefficient of $\rho$ ([[def-matrix-coefficient-of-a-unitary-representation]]) is locally constant on $K$ and factors through a finite quotient.

## Facts & Assumptions

[F1] A profinite group is a topological group isomorphic to an inverse limit of finite discrete groups, presented concretely as $K=\varprojlim_iG_i$ with coordinate projections $\pi_i$, and the kernels $\ker\pi_i$ form an open normal neighbourhood basis at the identity. ([[def-profinite-group-by-inverse-limit]], [[lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis]])

[F2] Regarded as a real Lie group, $U(n)$ is a finite-dimensional Lie group, and every finite-dimensional Lie group has an open identity neighbourhood $V$ containing no subgroup other than $\{e\}$. ([[ex-unitary-and-special-unitary-lie-groups]], [[def-lie-group]], [[lem-no-small-subgroups-in-a-lie-group]])

[F3] Strong continuity of a representation on a finite-dimensional Hilbert space means that every orbit map $k\mapsto\rho(k)x$ is norm-continuous. ([[def-strongly-continuous-unitary-representation]])

[F4] The image of a subgroup under a homomorphism is a subgroup, the kernel of a homomorphism is a normal subgroup, the quotient map is continuous for the quotient topology, and the first isomorphism theorem gives $K/\ker\pi_i\cong\pi_i(K)$. ([[def-group-homomorphism]], [[def-kernel-and-image-of-group-homomorphism]], [[def-quotient-topology]], [[thm-first-isomorphism-theorem-groups]])

[F5] Matrix coefficients are the functions $c^{\rho}_{v,w}(k)=\langle\rho(k)v,w\rangle$ for $v,w\in\mathbb C^n$. ([[def-matrix-coefficient-of-a-unitary-representation]])

## Proof

**Given:** AC, a profinite group $K=\varprojlim_iG_i$ with coordinate projections $\pi_i$, and a continuous homomorphism $\rho:K\to U(n)$ that is strongly continuous as a representation on $\mathbb C^n$.

1.1 If $n=0$, $U(0)$ is the trivial group, $\ker\rho=K$ and the representation factors through the trivial finite quotient; also $\ker\pi_i\subseteq K$ for any index $i$. Hence assume $n\ge1$. First $\rho$ is continuous in operator norm: for an orthonormal basis $e_1,\dots,e_n$ of $\mathbb C^n$ and $x=\sum_ix_ie_i$ with $\|x\|\le1$, $\|(\rho(k)-\rho(k_0))x\|\le\sum_i|x_i|\,\|(\rho(k)-\rho(k_0))e_i\|\le\bigl(\sum_i\|(\rho(k)-\rho(k_0))e_i\|^2\bigr)^{1/2}$ by Cauchy–Schwarz, and the right side tends to $0$ as $k\to k_0$ because the finitely many orbit maps are continuous [F3]; by [F2] the group $U(n)$ is a finite-dimensional real Lie group, so its no-small-subgroups lemma provides an open identity neighbourhood $V\subseteq U(n)$ containing no subgroup other than $\{e\}$, and $W:=\rho^{-1}(V)$ is an open neighbourhood of the identity of $K$. [F2, F3]

2.1 By [F1] the subgroups $\ker\pi_i$ form an open normal neighbourhood basis at the identity, so $\ker\pi_i\subseteq W$ for some $i$; then $\rho(\ker\pi_i)$ is a subgroup of $U(n)$ by [F4] and lies in $V$, hence $\rho(\ker\pi_i)=\{e\}$ by the choice of $V$, that is, $\ker\pi_i\subseteq\ker\rho$. Since $\ker\pi_i$ is open, its cosets are open, and $\ker\rho$ is a union of cosets of $\ker\pi_i$, so $\ker\rho$ is open as well. [F1, F4, step 1.1]

3.1 The inclusion $\ker\pi_i\subseteq\ker\rho$ implies that $\rho$ factors as $\rho=\bar\rho\circ q$, where $q:K\to F:=K/\ker\pi_i$ is the quotient homomorphism and $\bar\rho(q(k)):=\rho(k)$; here $q$ is a surjective continuous homomorphism and $F$ is finite because the first isomorphism theorem gives $F\cong\pi_i(K)\subseteq G_i$ with $G_i$ finite [F4]. Every matrix coefficient $c^{\rho}_{v,w}$ is constant on each coset of $\ker\pi_i$, since $\rho$ is, hence is locally constant and factors through the finite group $F$; this proves the lemma. The Axiom of Choice is consumed through the countable choice assumed by the Lie-group example [F2] and the profinite presentation; the factorisation argument itself is choice-free apart from those inputs. [F1, F4, F5, step 2.1] ∎
