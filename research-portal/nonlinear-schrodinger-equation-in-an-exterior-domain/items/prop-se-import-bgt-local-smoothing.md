---
id: prop-se-import-bgt-local-smoothing
kind: proposition
domain: mathematics
title: Imported homogeneous and retarded exterior smoothing
status: draft
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - math:def-axiom-of-choice
  - def-se-foundation-time-function-spaces
  - math:def-bochner-integrable-function
  - lem-se-spectral-cutoff-duality
  - lem-se-positive-spectral-scale-contract
  - math:thm-holder-inequality-for-integrals
  - lem-author-9e2ffff7db46-free-continuous-convolution
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:def-bochner-integrable-function: mathematical-premise
  lem-se-spectral-cutoff-duality: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  math:thm-holder-inequality-for-integrals: mathematical-premise
  lem-author-9e2ffff7db46-free-continuous-convolution: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: On nonlinear Schrödinger equations in exterior domains
      url: https://www.numdam.org/article/AIHPC_2004__21_3_295_0.pdf
      locator: Section 2.3, Proposition 2.7, equations (2.14) and (2.15), and Remark
        2.8; published page 302, PDF page 8
      statement: On a nontrapping exterior with a nonempty compact smooth obstacle,
        the cutoff retarded Dirichlet evolution gains one spectral derivative
        for -1 <= s <= 1, and the cutoff homogeneous evolution gains one-half
        spectral derivative for 0 <= s <= 1; the constants are independent of T.
      hypotheses: Dimension n >= 2; nonempty compact smooth obstacle; nontrapping
        generalized rays; homogeneous Dirichlet Laplacian; smooth compactly
        supported spatial cutoff; the indicated Dirichlet spectral spaces and
        time interval [0,T].
      reading_limits: Read Section 2.1 on published page 299 for the spectral-space
        convention, and Proposition 2.7 and Remark 2.8 on published page 302
        (PDF page 8) for the estimates, order ranges, unrestricted homogeneous
        initial support and time-uniformity. The smoothing proof is imported,
        not reconstructed; the local Justification below establishes only the
        well-definedness of the displayed constructions from existing suppliers.
        No negative homogeneous orders or retarded orders outside [-1,1] are
        asserted.
dependency_level: 7
proof_strategy: direct
formulation_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - math:def-axiom-of-choice
  - def-se-foundation-time-function-spaces
  - math:def-bochner-integrable-function
  - lem-se-spectral-cutoff-duality
argument_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - math:def-axiom-of-choice
  - def-se-foundation-time-function-spaces
  - math:def-bochner-integrable-function
  - lem-se-spectral-cutoff-duality
  - lem-se-positive-spectral-scale-contract
  - math:thm-holder-inequality-for-integrals
  - lem-author-9e2ffff7db46-free-continuous-convolution
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $\Omega=\mathbb R^n\setminus\Theta$ be the connected exterior of a nonempty compact obstacle with smooth boundary. Assume that the obstacle is non-trapping in the complete-ray sense: for every complete unit-speed admissible generalized reflected or glancing ray $x:\mathbb R\to\overline\Omega$ and every compact $K\subset\mathbb R^n$, there is $t\ge0$ with $x(t)\notin K$. Let $\Delta_D$ be the Dirichlet Laplacian on $L^2(\Omega)$, let $H_D^s(\Omega)$ be the spectral scale of $I-\Delta_D$, and let $\chi\in C_c^\infty(\mathbb R^n)$. Here $C_c^\infty$ means smooth functions with compact support, restricted to $\Omega$ when multiplying functions on the exterior.

For every $T>0$, every $s\in[-1,1]$, and every $f\in L^2((0,T);H_D^s(\Omega))$, define $u(t)=\int_0^t e^{i(t-\tau)\Delta_D}\chi f(\tau)\,d\tau$. Then $\|\chi u\|_{L^2((0,T);H_D^{s+1}(\Omega))}\le C\|\chi f\|_{L^2((0,T);H_D^s(\Omega))}$.

For every $s\in[0,1]$ and $v_0\in H_D^s(\Omega)$, put $v(t)=e^{it\Delta_D}v_0$. Then $\|\chi v\|_{L^2((0,T);H_D^{s+1/2}(\Omega))}\le C\|v_0\|_{H_D^s(\Omega)}$. In each estimate $C$ may depend on the obstacle, cutoff and order, but is independent of $T$ and the data. No compact-support assumption is imposed on $v_0$.

## Statement references

[[def-se-geometry]]

[[def-se-nontrapping]]

[[def-se-dirichlet-scale]]

[[math:def-axiom-of-choice]]

## External input

The two estimates and their independence from $T$ are imported from Burq–Gérard–Tzvetkov, Proposition 2.7, equations (2.14) and (2.15), and Remark 2.8. The source treats the nonempty nontrapping smooth obstacle in dimension at least two and uses the Dirichlet spectral scale. Its retarded estimate applies for $-1\le s\le1$; its homogeneous estimate applies for $0\le s\le1$. The proposition and remark were read for these assertions; their proof is not reconstructed here.

## Facts & Assumptions

[F1] The exterior geometry and smooth-obstacle terminology are those of [[def-se-geometry]].

[F2] The generalized-ray non-trapping convention is fixed by [[def-se-nontrapping]].

[F3] Under the Axiom of Choice, the Dirichlet Laplacian, spectral spaces, negative-order dual spaces, and unitary evolution used above are supplied by [[def-se-dirichlet-scale]] and [[math:def-axiom-of-choice]].

[F4] The time spaces are the almost-everywhere classes of strongly measurable maps with the Bochner norms of [[def-se-foundation-time-function-spaces]]. Integration uses the norm limit of integrable simple-function integrals in [[math:def-bochner-integrable-function]].

[F5] For every $-2\le q\le2$, multiplication by the restricted smooth cutoff $\chi$ is bounded on $H_D^q$, by [[lem-se-spectral-cutoff-duality]]. For $r>0$ in this range, its negative-order action is $\langle\chi f,h\rangle_{-r,r}=\langle f,\overline\chi h\rangle_{-r,r}$; thus no pointwise product of a general distribution is assumed.

[F6] The scale argument in [[lem-se-positive-spectral-scale-contract]], Proof step 1.3, gives strong continuity of $W(t)=e^{it\Delta_D}$ on each $H_D^q$, as well as unitarity: its onto scale isometry $J_q$ intertwines the scale evolution with the strongly continuous spectral evolution on $L^2(\Omega)$. This is a mathematical construction under Choice, including its mathematical Physics-Library flow supplier.

[F7] Scalar Hölder with exponents $2,2$ gives $\int_0^T\|g(t)\|_{H_D^s}\,dt\le T^{1/2}\|g\|_{L^2((0,T);H_D^s)}$ for a strongly measurable $g$ in that time space [[math:thm-holder-inequality-for-integrals]].

[F8] Under Countable Choice, [[lem-author-9e2ffff7db46-free-continuous-convolution]] supplies the retarded Bochner integral for every strongly continuous group on a complex Banach space regarded as real, with a finite uniform group bound on $[-T,T]$, and every strongly measurable $L^1$ forcing. Its proof establishes strong measurability of the evolution integrand, continuity of the resulting path, and independence of the forcing representative. The real and complex Bochner integrals coincide here because their defining simple sums and norm limits are identical.

## Justification

This local argument supplies the constructions used in the Statement. The two smoothing estimates and their time-uniform constants remain the external input recorded above; their proof is not claimed here.

**Given:** The geometry, Choice assumption, cutoff, scale, time and data in the Statement.

**Goal:** Justify cutoff multiplication, the time spaces, and the retarded integral without using either smoothing estimate as a premise.

1.1 Fix $s\in[-1,1]$ and set $E=H_D^s(\Omega)$, a complex Hilbert space by the scale construction. The restricted cutoff has bounded derivatives through order two, so [F5] defines a bounded multiplier $M_\chi:E\to E$, including its specified antidual extension when $s<0$. If simple functions $f_j$ converge almost everywhere in $E$ to a representative of $f$, then $M_\chi f_j$ are simple and converge there to $g=M_\chi f$. Hence $g$ is strongly measurable and belongs to $L^2((0,T);E)$ with norm at most $\|M_\chi\|\|f\|_{L^2((0,T);E)}$. By [F7] it belongs to $L^1((0,T);E)$. The other cutoff expressions in the Statement use the same compatible multiplier at orders within $[-2,2]$. [F3, F4, F5, F7, given]

1.2 By [F6], $W$ is a strongly continuous unitary group on $E$, with uniform bound $M=1$ on $[-T,T]$. Choice supplies the Countable Choice assumption of [F8]. Apply [F8] with base time $0$ and forcing $g$ from step 1.1: the integrand is strongly measurable and its norm is integrable, and $u(t)=\int_0^tW(t-\tau)g(\tau)\,d\tau$ is a well-defined Bochner integral in $E$, independent of the representative of $f$, and continuous in $t$. Its integral is the complex Bochner integral of [F4] by the identical simple-sum construction in [F8]. The homogeneous orbit is continuous by [F6], so its cutoff is also strongly measurable at its initial scale level. The higher output regularities and estimates are precisely the imported assertions, rather than premises of this construction. [F3, F4, F5, F6, F8, step 1.1] ∎
