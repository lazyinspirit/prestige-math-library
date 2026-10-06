---
id: lem-spectral-measure-multiplicity-model-for-a-transitive-system
kind: lemma
title: Spectral multiplicity model of a transitive system of imprimitivity
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
local_addition: true
proof_strategy: direct
deps:
  - def-system-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - lem-pvm-multiplicity-model-over-a-standard-borel-space
  - lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base
  - lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic
  - def-quasi-invariant-measure-on-a-homogeneous-space
  - thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - thm-bounded-borel-pvm-integral
  - lem-scalar-and-complex-measures-from-a-pvm
  - def-standard-borel-space
  - def-separable-space
  - def-hilbert-space
  - def-axiom-of-choice
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - lem-second-countable-lch-spaces-are-standard-borel
provenance:
  statement: literature-derived
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

Assume AC. Let $G$ be a second-countable locally compact Hausdorff topological
group, $H\le G$ a closed subgroup, and let $(U,P)$ be a transitive system of
imprimitivity on $X=G/H$ acting on a nonzero separable Hilbert space $H_0$.
Then there exist a finite Borel measure $\mu$ on $G/H$ in the quasi-invariant
class, a nonzero separable Hilbert space $K$, and a unitary
$$W:H_0\longrightarrow L^2(G/H,\mu;K)$$
such that $WP(E)W^{-1}=M_{\mathbf 1_E}$ for every Borel $E\subseteq G/H$.
Moreover $\mu$ is quasi-invariant under every $g\in G$, and the multiplicity
is constant almost everywhere; any two such normalizations differ by a
decomposable unitary, so $K$ is determined up to isometric isomorphism and
$\mu$ up to equivalence.

## Facts & Assumptions

**Given:** AC, the transitive system $(U,P)$ on $X=G/H$ with nonzero separable $H_0$.

[F1] The base $X=G/H$ is a standard Borel space, and the quasi-invariant class is the unique class of nonzero quasi-invariant measures; a Borel set invariant up to null sets for the class is null or conull ([[lem-second-countable-lch-spaces-are-standard-borel]], [[def-transitive-system-of-imprimitivity]], [[def-quasi-invariant-measure-on-a-homogeneous-space]], [[thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h]], [[lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic]]).

[F2] Multiplicity model over a standard Borel base: for a PVM $P$ on $X$ and a $P$-faithful finite Borel measure $\mu_0$ there are a Borel $m:X\to\{1,2,\dots\}\cup\{\infty\}$ and a unitary $W:H_0\to\int_X^\oplus\mathbb C^{m(x)}\,d\mu_0(x)$ with $WP(E)W^{-1}=M_{\mathbf 1_E}$ for all Borel $E$; $P$-faithful measures exist and any two are mutually absolutely continuous ([[lem-pvm-multiplicity-model-over-a-standard-borel-space]], [[def-direct-integral-of-a-measurable-hilbert-field]], [[def-measurable-hilbert-field-from-a-countable-fundamental-family]], [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]).

[F3] Unitary intertwiners preserve fibre multiplicity: if $U:L^2(X,\mu;m)\to L^2(X,\mu;m')$ is unitary with $UM_f=M_fU$ for all bounded Borel $f$, then $m=m'$ a.e.; two normalizations of one model over a fixed base therefore differ by a decomposable unitary with unitary fibres a.e. ([[lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base]]).

[F4] Transport and Radon–Nikodym: for bimeasurable base homeomorphisms and mutually absolutely continuous finite measures there are unitaries of the associated $L^2$-direct-integrals intertwining the multiplication actions, with multiplication by the square root of the appropriate density; the diagonal commutant identifies the intertwining operators as decomposable ([[lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]]).

[F5] For a Borel $E$, $\mu_0(E)=0\iff P(E)=0\iff P(gE)=0\iff\mu_0(gE)=0$, because $P(gE)=U_gP(E)U_g^{-1}$ and conjugation by a unitary preserves zero projections; hence any $P$-faithful $\mu_0$ is quasi-invariant ([[def-system-of-imprimitivity]], [[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-bounded-borel-pvm-integral]]).

[F6] AC is the standing hypothesis ([[def-axiom-of-choice]], [[def-separable-space]], [[def-hilbert-space]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the transitive system $(U,P)$ on $X=G/H$.

1.1 Choose a $P$-faithful finite Borel measure $\mu_0$ on $X$ by [F2] and apply the multiplicity model: there are a Borel $m:X\to\{1,2,\dots\}\cup\{\infty\}$ and a unitary $W:H_0\to\int_X^\oplus\mathbb C^{m(x)}\,d\mu_0(x)$ with $WP(E)W^{-1}=M_{\mathbf 1_E}$ for every Borel $E$. By [F5] $\mu_0$ is quasi-invariant, so $\mu_0$ lies in the normalized class of $G/H$. [F1, F2, F5]

2.1 Conjugate the representation: $T_g:=WU_gW^{-1}$ is a unitary of the model with $T_gM_fT_g^{-1}=M_{f\circ g^{-1}}$ for every bounded Borel $f$, because $W$ conjugates $P(E)$ to $M_{\mathbf 1_E}$ and $U_gP(E)U_g^{-1}=P(gE)$. [F5, step 1.1]

3.1 For each $g$, form the unitary $\Theta_g:=c_g^*T_g$ where $c_g^*$ is the transport unitary associated with the base homeomorphism $x\mapsto gx$; here $c_g^*$ sends $\eta$ to $x\mapsto\eta(gx)$, from the model over $(X,\mu_0;m)$ to the pulled-back model over $(X,(g^{-1})_*\mu_0;m\circ g)$, and intertwines $M_{f\circ g^{-1}}$ with $M_f$, so $\Theta_g$ is a unitary $L^2(X,\mu_0;m)\to L^2(X,(g^{-1})_*\mu_0;m\circ g)$ with $\Theta_gM_f=M_f\Theta_g$. Since $(g^{-1})_*\mu_0$ is equivalent to $\mu_0$ by [F5], the Radon–Nikodym isometry $J_g$ of [F4] converts it into a unitary $U_g':=J_g\Theta_g:L^2(X,\mu_0;m)\to L^2(X,\mu_0;m\circ g)$ with $U_g'M_f=M_fU_g'$ for all bounded Borel $f$. [F4, step 2.1]

4.1 By the rigidity lemma [F3] applied to $U_g'$, the multiplicities agree: $m=m\circ g$ $\mu_0$-almost everywhere, for every $g$ (replacing $g$ by $g^{-1}$ gives the form stated in the strategy). Therefore each level set $\{m=k\}$ is invariant under the action up to $\mu_0$-null sets. [F3, step 3.1]

5.1 Ergodicity forces one level set to be conull: the countably many level sets partition $X$, each is invariant up to null sets, so by [F1] each is null or conull; since $\mu_0$ is nonzero and finite, exactly one level set $X_0=\{m=k_0\}$ is conull, and $k_0\in\{1,2,\dots\}\cup\{\infty\}$. Restrict the model to $X_0$: the restriction of $W$ is a unitary $H_0\to L^2(X_0,\mu_0;k_0)$ and, viewed on $X$ by zero extension outside $X_0$, a unitary $W_0:H_0\to L^2(X,\mu_0;K)$ with $K=\mathbb C^{k_0}$ ($K=\ell^2$ if $k_0=\infty$), nonzero and separable, and $W_0P(E)W_0^{-1}=M_{\mathbf 1_E}$ for every Borel $E$. [F1, step 4.1]

6.1 This proves existence with constant multiplicity and quasi-invariant $\mu=\mu_0$. Uniqueness: if $(W_1,\mu_1,K_1)$ and $(W_2,\mu_2,K_2)$ are two such normalizations, $W_2W_1^{-1}$ is a unitary intertwining the two multiplication actions over any common base; taking $\mu_1$ as the base and using mutual absolute continuity, [F3] gives $K_1\cong K_2$ isometrically and identifies the intertwiners as decomposable with unitary fibres, while $\mu_1\sim\mu_2$ by mutual absolute continuity of $P$-faithful measures. [F2, F3, step 5.1]

7.1 Steps 4.1 and 5.1 establish the model and the constancy of the multiplicity, and step 6.1 gives the stated uniqueness; the measure is quasi-invariant by [step 1.1]. [step 1.1, step 6.1, step 4.1, step 5.1, F6] ∎
