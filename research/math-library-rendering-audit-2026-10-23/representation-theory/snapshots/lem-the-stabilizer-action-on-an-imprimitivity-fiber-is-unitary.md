---
id: lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary
kind: lemma
title: The stabilizer acts unitarily on an imprimitivity fibre
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
local_addition: true
proof_strategy: direct
deps:
  - lem-spectral-measure-multiplicity-model-for-a-transitive-system
  - lem-borel-cocycle-fields-for-imprimitivity-systems
  - lem-borel-cross-sections-for-closed-subgroups
  - lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups
  - def-system-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - def-strongly-continuous-unitary-representation
  - thm-hilbert-adjoint-properties
  - def-standard-borel-space
  - def-separable-space
  - def-hilbert-space
  - def-axiom-of-choice
  - lem-haar-regularization-of-transitive-unitary-cocycles
  - def-unitary-equivalence-of-systems-of-imprimitivity
  - def-coset
  - def-group-action
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
    - title: "G. Misra, E. K. Narayanan and C. Varughese, Mackey Imprimitivity and commuting tuples of homogeneous normal operators, arXiv:2402.15737"
      url: "https://arxiv.org/pdf/2402.15737"
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
---

## Statement

Assume AC and let $(U,P)$ be a transitive system on $G/H$ on a separable
Hilbert space, with multiplicity-normalized model and source-variable cocycle
fields $\varphi_g$ as above. Fix a Borel section $s$ with $s(eH)=e$. There
exist a Borel unitary field $B_x$ and a strongly continuous unitary
representation $\sigma:H\to U(K)$, unique up to unitary equivalence, such that
for every $g$ and almost every $x$,
$$\varphi_g(x)=B_{gx}\,\sigma(h(g,x))\,B_x^{-1},$$
where $h(g,x)=s(gx)^{-1}gs(x)$. The representatives can be replaced by this
strict formula on all pairs and normalized with $B_{eH}=I$, so that
$\sigma(h)=\varphi_h(eH)$ and $B_x=\varphi_{s(x)}(eH)$. Changes of fields or
section give equivalent $\sigma$. If $H=G$ one recovers the original
representation; if $H$ is trivial the recovered representation is trivial.

## Facts & Assumptions

**Given:** AC, the normalized transitive system, its cocycle fields $\varphi_g$, a Borel section $s$ with $s(eH)=e$, and the section cocycle $h(g,x)=s(gx)^{-1}gs(x)$.

[F1] The cocycle fields $\varphi_g$ may be chosen jointly Borel on $G\times G/H$, unitary for every $g$ and a.e. $x$, with the a.e. cocycle law and with $g\mapsto\varphi_g$ continuous in local measure in the strong topology; they represent the operators $W_g=V_g^{-1}WU_gW^{-1}$ ([[lem-borel-cocycle-fields-for-imprimitivity-systems]]).

[F2] Haar regularization: every such Borel $U(K)$-valued cocycle factors as $c(g,x)=B(gx)\sigma(h(g,x))B(x)^{-1}$ for a Borel unitary field $B$ and a strongly continuous unitary $\sigma:H\to U(K)$, and $\sigma$ is unique up to unitary equivalence under Borel gauge changes ([[lem-haar-regularization-of-transitive-unitary-cocycles]]).

[F3] The section satisfies $s(eH)=e$, $q\circ s=\mathrm{id}$, and the section cocycle satisfies the strict identity $h(g_1g_2,x)=h(g_1,g_2x)h(g_2,x)$; moreover $h(h',eH)=h'$ for $h'\in H$ and $h(s(x),eH)=e$ ([[lem-borel-cross-sections-for-closed-subgroups]], [[def-coset]], [[def-group-action]]).

[F4] Unitary fields over a standard Borel base may be modified on null sets, conjugated pointwise, and evaluated at points after being placed in strict form; changes on null sets do not change the a.e. class of the field, and conjugating the whole factorization by a fixed unitary does not change the equivalence class of $\sigma$ ([[def-standard-borel-space]], [[def-hilbert-space]], [[def-separable-space]], [[thm-hilbert-adjoint-properties]], [[def-unitary-equivalence-of-systems-of-imprimitivity]]).

[F5] $U(K)$ with the strong topology is a second-countable topological group, and Borel homomorphisms from the second-countable group $H$ into it are strongly continuous ([[lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups]]).

[F6] AC is the standing hypothesis ([[def-axiom-of-choice]], [[def-system-of-imprimitivity]], [[def-transitive-system-of-imprimitivity]], [[def-strongly-continuous-unitary-representation]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the transitive system with normalized model, the cocycle fields, and the section $s$.

1.1 The assignment $c(g,x):=\varphi_g(x)$ is a Borel $U(K)$-valued cocycle on $G\times G/H$ satisfying the a.e. cocycle law and the local-measure continuity of [F1]; hence [F2] applies and produces a Borel unitary field $B$ and a strongly continuous unitary $\sigma:H\to U(K)$ with $\varphi_g(x)=B(gx)\sigma(h(g,x))B(x)^{-1}$ for every $g$ and a.e. $x$. [F1, F2]

1.2 Normalization at $eH$: if $\{eH\}$ is $\mu$-null, redefine $B_{eH}=I$; this changes $B$ on a null set and the factorization remains valid a.e. If $\{eH\}$ is an atom, replace $B_x$ by $B_xB_{eH}^{-1}$ and $\sigma$ by $B_{eH}\sigma(\cdot)B_{eH}^{-1}$, which is a unitary equivalence of representations and makes the new field equal to $I$ at $eH$. In both cases the factorization holds for every $g$ and a.e. $x$, and $B_{eH}=I$. [F2, F4]

1.3 Uniqueness and gauge: if $(B_1,\sigma_1)$ and $(B_2,\sigma_2)$ both factorize the same cocycle, the uniqueness clause of [F2] gives a single unitary $T$ with $\sigma_2(h)T=T\sigma_1(h)$ for all $h$; a Borel gauge change $B\mapsto AB$ multiplies the lifted trivializations on the left and does not change the equivalence class. A change of section changes $B$ by the corresponding $\sigma$-factor and leaves the class of $\sigma$ fixed. [F2, F3]

2.1 Place the formula in strict form: define $\widehat\varphi_g(x):=B(gx)\sigma(h(g,x))B(x)^{-1}$; by [step 1.1] $\widehat\varphi_g=\varphi_g$ a.e. for every $g$, and the right-hand side is jointly Borel in $(g,x)$; the strict section identity of [F3] makes $\widehat\varphi$ an exact cocycle on all of $G\times G/H$, so replacing the original fields by $\widehat\varphi$ changes nothing in the a.e. class and gives the displayed formula for every pair. [F3, step 1.1]

3.1 Evaluating the strict formula at $x=eH$: for $h'\in H$ one has $h(h',eH)=s(eH)^{-1}h's(eH)=h'$, so $\varphi_{h'}(eH)=B(eH)\sigma(h')B(eH)^{-1}=\sigma(h')$ because $B_{eH}=I$; and for $g=s(x)$, $h(s(x),eH)=s(x)^{-1}s(x)s(eH)=e$ gives $\varphi_{s(x)}(eH)=B(x)\sigma(e)B_{eH}^{-1}=B(x)$. Thus the recovered data are exactly $\sigma(h')=\varphi_{h'}(eH)$ and $B_x=\varphi_{s(x)}(eH)$. [F3, step 1.2, step 2.1]

4.1 Boundary cases: if $H=G$ then $G/H$ is a point, $s(eH)=e$, and the factorization collapses to $\varphi_g=B\sigma(g)B^{-1}$, so $\sigma$ is unitarily equivalent to the original representation carried by the fields. If $H=\{e\}$ then $H$ is the trivial group and $\sigma$ is a strongly continuous unitary representation of the trivial group, hence the identity representation on its given fibre $K$; nothing more is asserted. [F3, F4, step 3.1]

5.1 Steps 1.1, 2.1 and 3.1 give existence of $B,\sigma$ with the strict factorization and the two evaluation identities; [step 1.3] gives uniqueness up to unitary equivalence and gauge; [step 4.1] gives the two boundary cases. This proves the statement. [step 1.1, step 2.1, step 3.1, step 1.3, step 4.1, F5, F6] ∎ 