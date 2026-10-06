---
id: thm-uniqueness-in-mackey-imprimitivity
kind: theorem
title: Uniqueness in the imprimitivity theorem
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
proof_strategy: direct
deps:
  - thm-mackey-imprimitivity-theorem
  - lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary
  - lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining
  - lem-borel-cross-sections-for-closed-subgroups
  - def-unitary-equivalence-of-systems-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - thm-unitary-induction-from-a-closed-subgroup
  - def-strongly-continuous-unitary-representation
  - def-axiom-of-choice
  - lem-haar-regularization-of-transitive-unitary-cocycles
  - lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - lem-borel-cocycle-fields-for-imprimitivity-systems
  - lem-spectral-measure-multiplicity-model-for-a-transitive-system
  - lem-induced-representations-carry-a-canonical-system-of-imprimitivity
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
    - title: "G. Misra, E. K. Narayanan and C. Varughese, Mackey Imprimitivity and commuting tuples of homogeneous normal operators, arXiv:2402.15737"
      url: "https://arxiv.org/pdf/2402.15737"
---

## Statement

Assume AC and keep the hypotheses of the imprimitivity theorem. If
$\sigma:H\to U(K)$ and $\sigma':H\to U(K')$ are strongly continuous unitary
representations, then the canonical transitive systems of
$\operatorname{Ind}_H^G\sigma$ and $\operatorname{Ind}_H^G\sigma'$ on $G/H$
are unitarily equivalent if and only if $\sigma$ and $\sigma'$ are unitarily
equivalent. Consequently the map of the imprimitivity theorem is a bijection
between unitary equivalence classes of transitive systems on $G/H$ and unitary
equivalence classes of strongly continuous unitary representations of $H$.

## Facts & Assumptions

**Given:** AC, the second-countable LCH group $G$ and closed subgroup $H$, and strongly continuous unitary representations $\sigma:H\to U(K)$, $\sigma':H\to U(K')$ on separable spaces.

[F1] The canonical system of $\sigma$ is the induced representation on its covariant completion together with the multiplication PVM $P(E)=M_{\mathbf 1_E}$; the induced action in section coordinates is $D_g(x)^{1/2}\sigma(s(x)^{-1}gs(g^{-1}x))f(g^{-1}x)$ ([[lem-induced-representations-carry-a-canonical-system-of-imprimitivity]], [[lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining]], [[thm-unitary-induction-from-a-closed-subgroup]]).

[F2] A system equivalence between two multiplicity-normalized models intertwines the diagonal multiplications, so it is decomposable with unitary fibres almost everywhere, and the fibre dimensions agree a.e.; equivalently, over a fixed base the unitary intertwiners of two models are precisely the decomposable unitaries ([[lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base]], [[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]], [[lem-spectral-measure-multiplicity-model-for-a-transitive-system]]).

[F3] The cocycle fields of the canonical model of $\sigma$ factor through a trivialization $b_\sigma$: writing $\varphi^\sigma_g(x)=\sigma(s(gx)^{-1}gs(x))$ at the source variable, the Haar regularization uniqueness argument shows that if two trivializations of the same cocycle differ by a gauge $A$, then $b_{\sigma'}(t)^{-1}A(q(t))b_\sigma(t)$ is left-translation invariant for a.e. $t$, hence a constant unitary $T$, and right-$H$ covariance gives $\sigma'(h)T=T\sigma(h)$ for all $h$ ([[lem-haar-regularization-of-transitive-unitary-cocycles]], [[lem-borel-cocycle-fields-for-imprimitivity-systems]], [[lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary]]).

[F4] The imprimitivity theorem gives the forward and inverse constructions and the zero cases: zero fibres induce exactly the zero system, and a nonzero fibre induces a nonzero space because the quotient measure has full support and nonzero square-integrable sections exist ([[thm-mackey-imprimitivity-theorem]], [[def-transitive-system-of-imprimitivity]], [[def-unitary-equivalence-of-systems-of-imprimitivity]]).

[F5] AC is the standing hypothesis ([[def-axiom-of-choice]], [[def-strongly-continuous-unitary-representation]], [[lem-borel-cross-sections-for-closed-subgroups]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the two representations $\sigma,\sigma'$ and their canonical systems.

1.1 If $\sigma$ and $\sigma'$ are unitarily equivalent via $T:K\to K'$, define $\widehat T$ on the covariant completion of $\operatorname{Ind}\sigma$ pointwise, $(\widehat TF)(x)=T(F(x))$. Then $\widehat T$ is unitary, preserves covariance ($T(F(xh))=T(\sigma(h)^{-1}F(x))=\sigma'(h)^{-1}(TF)(x)$), and intertwines the induced actions and the multiplication PVM: $\widehat T\,\Pi_\sigma(g)\widehat T^{-1}=\Pi_{\sigma'}(g)$ and $\widehat T\,P(E)\widehat T^{-1}=P'(E)$. Hence the canonical systems are unitarily equivalent. [F1]

2.1 Conversely, suppose the canonical systems are unitarily equivalent by $W_0$. Then $W_0$ intertwines all multiplications by indicators, and by [F2] it is multiplication by a Borel unitary field $A(x)$ between the two constant fibres, whose dimensions agree. Fix unitary identifications of the fibres and use [F3]: the two cocycle fields of the canonical models are related by the gauge $A$, and lifting the gauge to $G$ produces a constant unitary $T$ with $\sigma'(h)T=T\sigma(h)$ for every $h\in H$. Thus $\sigma$ and $\sigma'$ are unitarily equivalent. [F2, F3, step 1.1]

3.1 Zero cases: if $K=0$ then the canonical system is the zero system and $H$ acts trivially; two zero systems are unitarily equivalent, and the zero representation of $H$ is unitarily equivalent only to the zero representation; if both $K,K'$ are nonzero the argument [step 2.1] applies verbatim, and a nonzero fibre induces a nonzero system by [F4], so the zero and nonzero classes do not mix. [F4, step 2.1]

4.1 Steps [1.1], [2.1] and [3.1] show that the canonical construction induces a well-defined bijection between unitary equivalence classes of strongly continuous unitary representations of $H$ and unitary equivalence classes of transitive systems on $G/H$, in both directions; the map of the imprimitivity theorem is that bijection. [step 1.1, step 2.1, step 3.1, F5] ∎ 