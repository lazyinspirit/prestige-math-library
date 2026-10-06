---
id: cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup
kind: corollary
title: Mackey little-group reduction for an abelian normal subgroup
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
proof_strategy: direct
deps:
  - thm-mackey-imprimitivity-theorem
  - thm-uniqueness-in-mackey-imprimitivity
  - lem-spectral-measure-of-a-representation-of-an-abelian-lch-group
  - lem-ergodic-imprimitivity-systems-with-regular-orbits-concentrate-on-one-orbit
  - def-external-semidirect-product
  - def-pontryagin-dual-and-compact-open-topology
  - thm-dual-of-an-lca-group-is-locally-compact-abelian
  - def-strongly-continuous-unitary-representation
  - def-system-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - def-axiom-of-choice
  - lem-second-countable-lch-spaces-are-standard-borel
  - lem-closed-subgroup-quotient-averaging-and-compact-lifts
  - lem-haar-lifts-and-borel-descent-on-a-homogeneous-space
  - def-coset
  - lem-borel-cross-sections-for-closed-subgroups
  - thm-schurs-lemma-for-unitary-representations
  - lem-induced-representations-carry-a-canonical-system-of-imprimitivity
  - def-unitary-equivalence-of-systems-of-imprimitivity
  - def-group-action
  - def-continuous-map-top
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters, arXiv:1912.07262 (AMS Mathematical Surveys and Monographs 250)"
      url: "https://arxiv.org/pdf/1912.07262"
---

## Statement

Assume AC. Let $G=N\rtimes K$ be a topological semidirect product with continuous automorphism action and product topology, $N$ abelian and
closed normal, $G$ second countable locally compact, and let the dual action of
$K$ on $\widehat N$ have regular orbits in the sense of the preceding lemma
(equivalently, the orbit space $\widehat N/K$ is countably separated). For
$\chi\in\widehat N$ let $K_\chi=\{k\in K:k\cdot\chi=\chi\}$ and
$H_\chi=N\rtimes K_\chi$. Then every irreducible strongly continuous unitary
representation $\pi$ of $G$ is unitarily equivalent to
$\operatorname{Ind}_{H_\chi}^G(\chi\otimes\theta)$ for some
$\chi\in\widehat N$ and some irreducible strongly continuous unitary
representation $\theta$ of $K_\chi$, where $\chi\otimes\theta$ denotes the
representation $(n,k_\chi)\mapsto\chi(n)\theta(k_\chi)$ of $H_\chi$.

## Facts & Assumptions

**Given:** AC, the semidirect product $G=N\rtimes K$ with abelian closed normal $N$, an irreducible strongly continuous unitary representation $\pi$ of $G$ on a separable Hilbert space, and the regular-orbit hypothesis on the dual action.

[F1] Restricting $\pi$ to $N$ and letting $K$ act through $\pi|_K$ satisfies the covariance hypothesis of the spectral lemma: there is a unique regular PVM $P$ on $\widehat N$ with $\pi(n)=\int\chi(n)\,dP(\chi)$ and $\pi(k)P(E)\pi(k)^{-1}=P(k\cdot E)$ for all $k$, with the dual action $k\cdot\chi=\chi\circ\alpha_k^{-1}$ ([[lem-spectral-measure-of-a-representation-of-an-abelian-lch-group]], [[def-external-semidirect-product]], [[def-pontryagin-dual-and-compact-open-topology]], [[def-strongly-continuous-unitary-representation]], [[def-group-action]]).

[F2] If $\pi$ is irreducible, the system is ergodic: an invariant spectral projection $P(E)$ commutes with $\pi(N)$ and is invariant under $\pi(K)$, hence carries an invariant closed subspace; irreducibility forces it to be $0$ or $I$ ([[lem-spectral-measure-of-a-representation-of-an-abelian-lch-group]], [[thm-schurs-lemma-for-unitary-representations]]).

[F3] Under the regular-orbit hypothesis, an ergodic system of imprimitivity on $\widehat N$ concentrates on a single orbit: there is $\chi\in\widehat N$ with $P(K\cdot\chi)=I$, and the orbit is Borel ([[lem-ergodic-imprimitivity-systems-with-regular-orbits-concentrate-on-one-orbit]]).

[F4] The dual is second countable and standard Borel by the spectral lemma’s proof step 1.1. The dual action is jointly continuous: for a compact $C\subseteq N$ and a compact neighbourhood $V$ in $K$, the images $\alpha_k^{-1}(C)$, $k\in V$, lie in one compact set; uniform convergence of characters there and continuity of the action give compact-open continuity. For $\chi\in\widehat N$ the stabilizer $K_\chi$ is closed, the orbit map $K/K_\chi\to K\cdot\chi$ is a continuous bijection onto the Borel orbit, and $G/H_\chi\cong K/K_\chi$; these homogeneous spaces are Polish standard Borel with Borel actions ([[lem-spectral-measure-of-a-representation-of-an-abelian-lch-group]], [[thm-dual-of-an-lca-group-is-locally-compact-abelian]], [[def-continuous-map-top]], [[def-coset]], [[lem-closed-subgroup-quotient-averaging-and-compact-lifts]], [[lem-second-countable-lch-spaces-are-standard-borel]]).

[F5] Mackey's imprimitivity theorem applies to the transported transitive system: there are a strongly continuous unitary $\sigma:H_\chi\to U(K_0)$ and a unitary intertwining $\pi$ with $\operatorname{Ind}_{H_\chi}^G\sigma$ ([[thm-mackey-imprimitivity-theorem]], [[def-transitive-system-of-imprimitivity]], [[def-unitary-equivalence-of-systems-of-imprimitivity]]).

[F6] In the normalized induced model of the system concentrated on $K\cdot\chi$, the action of $N$ is multiplication by the character $\chi$ evaluated at the source point, the gauge commutes with the scalar action of $N$, and the induced formula for $\sigma$ gives $\sigma(s(x)^{-1}ns(x))=(s(x)\cdot\chi)(n)I$ for a.e. $x$; since $N$ is normal, conjugation by $s(x)$ maps $N$ onto itself, and strong continuity extends the identity from a countable dense subset of $N$ to all of $N$ ([[lem-haar-lifts-and-borel-descent-on-a-homogeneous-space]], [[lem-induced-representations-carry-a-canonical-system-of-imprimitivity]], [[lem-borel-cross-sections-for-closed-subgroups]], [[def-strongly-continuous-unitary-representation]]).

[F7] AC is the standing hypothesis ([[def-axiom-of-choice]], [[def-system-of-imprimitivity]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the semidirect product, the irreducible $\pi$, and the regular-orbit hypothesis.

1.1 The representation space is separable even if this was not assumed. For $v\ne0$, the closed span of $\pi(G)v$ is invariant and hence is the whole space by irreducibility. A countable dense subset $D\subseteq G$ exists because $G$ is second-countable LCH; strong continuity makes $\pi(D)v$ dense in the orbit. Its finite rational-complex linear combinations are countable and dense in the Hilbert space. Thus [F1] applies. It produces $P$, which is ergodic by [F2] and concentrates on a Borel orbit $C=K\cdot\chi$ by [F3]. [F1, F2, F3, F4]

2.1 The continuous orbit bijection $r:K/K_\chi\to C$ of [F4] is bimeasurable. Indeed, every open subset $O$ of the second-countable LCH quotient is a countable union of compact sets contained in $O$: use a countable base with compact closures and shrink inside $O$. Their images under $r$ are compact, hence closed in the Hausdorff dual, so $r(O)$ is Borel. This proves measurability of $r^{-1}$ without assuming that $r$ is a homeomorphism. Transporting $P|_C$ gives a transitive system for $G$ on $G/H_\chi\cong K/K_\chi$; $N$ acts trivially on the base. By [F5], $\pi\cong\operatorname{Ind}_{H_\chi}^G\sigma$ for a strongly continuous $\sigma$. [F3, F4, F5, step 1.1]

3.1 Choose the Borel section in $G$ with values $s(x)\in K$. For every $n\in N$, the spectral formula makes $\pi(n)$ multiplication by $x(n)$ on the orbit, and the reconstruction gauge commutes with this scalar multiplier. Since $N$ fixes the base, the induced Radon–Nikodym factor is one and the induced formula gives $\sigma(s(x)^{-1}ns(x))=\chi(s(x)^{-1}ns(x))I$ for a.e. $x$. Intersect these conull sets over a countable dense subset of $N$ and fix one $x$ in the intersection. Continuity of both sides extends the identity to all $n\in N$ at this $x$. Conjugation by $s(x)$ maps $N$ onto itself, so $\sigma(m)=\chi(m)I$ for all $m\in N$. Put $\theta=\sigma|_{K_\chi}$; it is strongly continuous and $\sigma(n,k)=\chi(n)\theta(k)$. Stabilizer invariance of $\chi$ verifies multiplicativity of this formula in the semidirect product. [F4, F6, step 2.1]

4.1 $\theta$ is irreducible: if $\theta$ had a nontrivial closed invariant subspace, inducing it would produce a nontrivial closed invariant subspace of $\operatorname{Ind}_{H_\chi}^G(\chi\otimes\theta)\cong\pi$, because the quotient measure class has full support so a nonzero fibrewise subspace induces a nonzero closed subspace; this contradicts irreducibility of $\pi$. [F5, step 3.1]

5.1 Therefore $\pi$ is unitarily equivalent to $\operatorname{Ind}_{H_\chi}^G(\chi\otimes\theta)$ with $\chi\in\widehat N$ and $\theta$ an irreducible strongly continuous unitary representation of $K_\chi$, as claimed; the orbit $\chi$ is the one selected by the spectral PVM, and the inducing class is determined by the system uniqueness theorem. [F5, step 1.1, step 3.1, step 4.1, F7] ∎
