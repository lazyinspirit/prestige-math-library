---
id: lem-borel-cocycle-fields-for-imprimitivity-systems
kind: lemma
title: Measurable cocycle fields for a multiplicity-normalized system
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
local_addition: true
proof_strategy: direct
deps:
  - lem-spectral-measure-multiplicity-model-for-a-transitive-system
  - lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base
  - lem-borel-cross-sections-for-closed-subgroups
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - thm-measurable-essentially-bounded-operator-fields-act-decomposably
  - def-measurable-and-decomposable-operator-fields
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-strongly-continuous-unitary-representation
  - def-standard-borel-space
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - def-axiom-of-choice
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - thm-separable-hilbert-space-has-a-countable-orthonormal-basis
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-monotone-convergence-for-the-integral
  - lem-the-induced-action-is-unitary
  - lem-continuity-criteria-for-unitary-representations
  - lem-haar-lifts-and-borel-descent-on-a-homogeneous-space
  - thm-induced-representation-is-independent-of-rho-function-and-measure-representative
  - lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - thm-composition-with-borel-functions-preserves-measurability
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
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

Assume AC. Let $(U,P)$ be a transitive system of imprimitivity on $G/H$ and
fix a normalization $W:H_0\to L^2(G/H,\mu;K)$ with
$WP(E)W^{-1}=M_{\mathbf 1_E}$, $G$ second countable locally compact, $H$
closed, $K$ separable, $\mu$ a nonzero $\sigma$-finite quasi-invariant Borel measure. For $g\in G$ let $V_g$ be the
canonical translation operator
$(V_gf)(x)=[d((L_g)_*\mu)/d\mu(x)]^{1/2}f(g^{-1}x)$ and put
$W_g=V_g^{-1}WU_gW^{-1}$. Then $W_g$ commutes with all multiplications and is
therefore multiplication by an essentially bounded measurable operator field
$x\mapsto\varphi_g(x)\in\mathcal B(K)$; the field may be chosen so that
$(g,x)\mapsto\langle\varphi_g(x)\xi,\eta\rangle$ is Borel on $G\times G/H$ for
$\xi,\eta$ in a fixed dense countable subset of $K$ and so that
$\varphi_g(x)$ is unitary for almost every $x$ and every $g$, with the cocycle
identity
$$\varphi_{g_1g_2}(x)=\varphi_{g_1}(g_2x)\,\varphi_{g_2}(x)$$
holding for every $g_1,g_2$ and almost every $x$.

## Facts & Assumptions

**Given:** AC, the transitive system with its normalization $W$ and the data of the statement.

[F1] The normalization is unitary with $WP(E)W^{-1}=M_{\mathbf 1_E}$; for every bounded Borel $f$ one has $T_gM_fT_g^{-1}=M_{f\circ g^{-1}}$ for $T_g:=WU_gW^{-1}$, and $\mu$ may be taken to be a finite measure in the quasi-invariant class with $L^2(G/H,\mu;K)$ the direct integral of the constant field $\mathbb C^{\dim K}$ ([[lem-spectral-measure-multiplicity-model-for-a-transitive-system]], [[def-direct-integral-of-a-measurable-hilbert-field]]).

[F2] The translation operators $V_g$ are unitary and $g\mapsto V_g$ is strongly continuous on the induced model: $V_g$ is the induced action of the trivial representation of $H$, and the criterion for strong continuity of unitary representations applies ([[lem-the-induced-action-is-unitary]], [[lem-continuity-criteria-for-unitary-representations]], [[thm-induced-representation-is-independent-of-rho-function-and-measure-representative]]).

[F3] The commutant of the diagonal multiplications $\{M_f\}$ on a direct integral is exactly the set of decomposable operators, and an essentially bounded weakly measurable field acts decomposably and is unique up to a null set; multiplication by a unitary operator corresponds to a field that is unitary almost everywhere ([[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]], [[thm-measurable-essentially-bounded-operator-fields-act-decomposably]], [[def-measurable-and-decomposable-operator-fields]], [[lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base]]).

[F4] The base $G/H$ is standard Borel. Its constant-field direct integral is separable; AC fixes a countable norm-dense sequence with Borel section representatives and a countable orthonormal basis of $K$. Tonelli applies to sums of squared errors ([[lem-borel-cross-sections-for-closed-subgroups]], [[def-standard-borel-space]], [[lem-measurable-sections-have-measurable-pointwise-inner-products]], [[thm-composition-with-borel-functions-preserves-measurability]], [[lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms]], [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]], [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F5] Radon–Nikodym densities of the quasi-invariant measure class are measurable and finite a.e., and the resulting $L^2$-multiplications are measurable in the parameters ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[thm-monotone-convergence-for-the-integral]]).

[F6] AC is the standing hypothesis ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the normalized transitive system and the operators $W_g$.

1.1 If $K=0$, choose the sole operator on each fibre; all conclusions are immediate. Assume $K\ne0$. By the Haar-lift lemma, $\mu$ is equivalent to a rho-derived Radon measure $\nu$. Put $a=d\mu/d\nu$, choosing a finite positive Borel version off a null set, and $Jf=\sqrt a\,f$. The set-integral formula shows that $J:L^2(\mu;K)\to L^2(\nu;K)$ is unitary and that $d(g_*\mu)/d\mu(x)=a(g^{-1}x)a(x)^{-1}d(g_*\nu)/d\nu(x)$ a.e. Hence $JV_gJ^{-1}=V_g^\nu$. The latter is the strongly continuous scalar induced translation tensored with $I_K$, as verified first on finite sums of scalar sections times fibre vectors and then by density. Thus $V_g$ is a strongly continuous unitary representation, and so is $T_g=WU_gW^{-1}$; their product $W_g=V_g^{-1}T_g$ is strongly continuous and unitary. [F1, F2, F5]

2.1 $W_g$ commutes with all $M_f$: both $T_g$ and $V_g$ conjugate $M_f$ to $M_{f\circ g^{-1}}$, so $V_g^{-1}T_gM_f=M_fV_g^{-1}T_g$. The commutant theorem therefore gives a measurable field representing $W_g$; the fibrewise identities for $W_g^*W_g=W_gW_g^*=I$ make its fibres unitary almost everywhere. [F1, F3, step 1.1, algebra]

3.1 Construct a joint representative without changing the fixed measure. Choose a finite-measure Borel partition $(A_l)$ of $X=G/H$ and put $r(x)=2^{-l}(1+\mu(A_l))^{-1/2}$ on $A_l$; then $r>0$ is Borel and belongs to $L^2(\mu)$. Fix an orthonormal basis $(e_j)$ of $K$ and a countable norm-dense sequence of Borel sections $(u_l)$ by [F4]. For each $j,n$, choose the least $l=l(g,j,n)$ with $\|u_l-W_g(re_j)\|_2<2^{-n}$. Its level sets are Borel in $g$ by step 1.1, so $u_{l(g,j,n)}(x)$ is jointly Borel. For each fixed $g,j$, the sum of squared $L^2$ errors is finite. Tonelli, using any representative of $W_g(re_j)$, makes the pointwise squared errors summable a.e.; hence the approximants converge a.e. Their limits divided by $r(x)$ are the columns of the field from step 2.1. The set where any column limit fails, or where the columns fail to be a complete orthonormal family, is jointly Borel: convergence, Gram identities, and Parseval on the fixed basis are countably many Borel conditions. Set the field to $I$ there. This gives a jointly Borel $U(K)$-valued field representing $W_g$ for every fixed $g$. [F3, F4, F6, step 1.1, step 2.1, construct]

4.1 For every finite-measure Borel $E$ and basis vector $e_j$, strong continuity of $W_g$ gives $\int_E\|\varphi_g(x)e_j-\varphi_{g_0}(x)e_j\|^2\,d\mu(x)\to0$. Chebyshev's inequality then gives local convergence in measure of each basis column. Finite linear combinations approximate every fibre vector uniformly under unitaries, so this is convergence in measure in the strong topology of $U(K)$. [F3, step 1.1, step 3.1]

4.2 Expanding $T_{g_1g_2}=T_{g_1}T_{g_2}$ and $V_{g_1g_2}=V_{g_1}V_{g_2}$ gives $W_{g_1g_2}=V_{g_2}^{-1}W_{g_1}V_{g_2}W_{g_2}$. The first conjugated multiplier has field $x\mapsto\varphi_{g_1}(g_2x)$. Uniqueness of decomposable fields therefore gives $\varphi_{g_1g_2}(x)=\varphi_{g_1}(g_2x)\varphi_{g_2}(x)$ for every fixed pair and a.e. $x$. [F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 Steps 2.1, 3.1, 4.1 and 4.2 give the decomposable unitary fields, a jointly Borel representative, local-measure continuity, and the pairwise a.e. cocycle law, respectively. No representative has been evaluated at a prescribed null coset. [step 2.1, step 3.1, step 4.1, step 4.2, F6] ∎
