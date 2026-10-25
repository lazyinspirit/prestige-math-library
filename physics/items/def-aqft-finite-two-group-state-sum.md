---
id: def-aqft-finite-two-group-state-sum
kind: definition
title: Finite two-group lattice spin state-sum model
status: "published"
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - def-aqft-background-gauging-data
  - def-aqft-two-group-symmetry-realization
dependency_roles:
  def-aqft-background-gauging-data: mathematical-premise
  def-aqft-two-group-symmetry-realization: formulation-prerequisite
physical_scope: Finite oriented three-dimensional vertex-spin regulator with G = Z/2 and trivial A; unit background response and finite background gauging only; no continuum or empirical claim.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology, §23.3
      url: https://arxiv.org/pdf/2510.07408
      locator: PDF pp. 97–100 / printed pp. 96–99, equations (23.27) and (23.34)–(23.38); finite state spaces and homotopy-cardinality amplitudes, with explicit higher-group constructions left separate.
    - title: Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group, §2
      url: https://www.math.ru.nl/~mueger/TQFT/FQ.pdf
      locator: PDF pp. 8–11, equations (2.1)–(2.12), Lemma 2.4, and Theorem 2.13; finite ordinary gauge-groupoid measures and sewing.
    - title: "John C. Baez and Aaron D. Lauda, Higher-Dimensional Algebra V: 2-Groups, §8.3"
      url: https://arxiv.org/pdf/math/0307200
      locator: PDF pp. 54–59; skeletal two-group data, normalized associator three-cocycle, and pentagon convention.
    - title: Francesco Benini, Clay Córdova, and Po-Shen Hsin, On 2-Group Global Symmetries and Their Anomalies, §2.3
      url: https://arxiv.org/pdf/1803.09336
      locator: PDF pp. 18–20, equations (2.14)–(2.20); simplicial two-group backgrounds and gauge transformations.
---

## Definition

A finite ordered simplicial complex $K$ has a finite vertex set with a total order and a collection of nonempty finite vertex subsets, called simplices, closed under taking nonempty subsets. Its dimension is the maximum of $|\sigma|-1$ over its simplices. A closed physical regulator is a finite ordered triangulation of a closed compact oriented smooth three-manifold; relative amplitudes are also defined on its finite ordered subcomplexes. The increasing vertex order orients every simplex.

Choose $G=\mathbb Z/2$, the trivial Abelian group $A=\{0\}$, the unique action $\rho:G\to\operatorname{Aut}(A)$, and the zero normalized Postnikov cocycle $\beta=0$. A background on $K$ is a flat edge cochain $a_{ij}\in G$, satisfying $a_{ij}+a_{jk}-a_{ik}=0$ on each ordered triangle; its face cochain $B$ is uniquely zero. A raw $1$-gauge arrow has vertex labels $g_i\in G$ and sends $a_{ij}$ to $a'_{ij}=g_i+a_{ij}-g_j$. The edge label $\lambda$ and vertex $2$-gauge label $t$ are necessarily zero, so this selected two-group is the ordinary finite $G$ symmetry regarded as a two-group with trivial $A$.

For each background $x=(a,0)$, the model's cell-value sets are $X_v=G$ at each vertex and a singleton at every positive-dimensional simplex. The configuration set is $\Phi_x=C^0(K;G)$, the set of spin assignments $\sigma=(\sigma_v)_{v\in K^{(0)}}$. There are no further constraints. Set the dimensionless action $S_x(\sigma)=0$, the finite measure weight $\mu_x(\sigma)=2^{-V_K}$, where $V_K$ is the number of vertices, and the observable algebra $\mathcal O_x=\operatorname{Fun}(\Phi_x,\mathbb C)$. A function is local when it depends on spins in a specified subcomplex. The local spin observable $m_v(\sigma)=(-1)^{\sigma_v}$ transforms nontrivially under the constant global $G$ action, so this $0$-form symmetry is effective. For a closed one-dimensional subcomplex $\gamma$, the product $\prod_{v\in\gamma^{(0)}}m_v(\sigma)$ is a line-supported observable defined without an attached surface. The selected $1$-form group is trivial: its only defect is $U_0(\Sigma)=1$, and the line observable has only the trivial $A$-character.

The complete defect-bearing input domain consists of any finite list of admitted ordinary spin functions, with their subcomplex supports, and any finite decorated network of the identity defect $U_0$. Every stratum has the trivial $A$ label, every junction has scalar $1$, and the model admits all choices of orientation or framing only with this same trivial response; the incidence and ordering data are recorded even though their factors are $1$. For each such input $I$, set $\Omega_x(I)=\Phi_x$ and

$$
w_x(I;\sigma)=2^{-V_K}\prod_j o_{j,x}(\sigma),\qquad \widehat C_x(I)=\sum_{\sigma\in C^0(K;G)}2^{-V_K}\prod_j o_{j,x}(\sigma).
$$

Thus every identity-network factor is exactly $1$ for every spin configuration. The combined boundary datum in the relative convention is the fixed background restriction $s$; no boundary spin value is fixed, and there is no additional boundary datum for a closed regulator. Gauge transport sends each spin by $T_g$ and every insertion function by pullback, transports the boundary background when it is allowed to vary, and preserves identity-network labels and junctions. Boundary-fixed relative gauge arrows restrict to $g=0$ on the boundary subcomplex. These are bijections of the complete inputs and configurations and preserve the displayed integrands with phase $1$; all comparison maps and $2$-arrow maps are identities under the strict translation composition law.

An identity support may be moved through any smooth decorated isotopy preserving incidence and avoiding the other supports: the model evaluates every intermediate identity network by exactly the same spin sum, including when its support is not a subcomplex of the fixed regulator. The endpoint comparison is the identity on spins and on ordinary insertion functions. If a supplied compatible subdivision $K'$ is used to represent a support, retain the old ordinary observables by pullback along restriction of vertex spins to $K$. Summing over the $V_{K'}-V_K$ new spins gives $2^{V_{K'}-V_K}2^{-V_{K'}}=2^{-V_K}$ for each old spin assignment, hence exactly the same complete correlator, for any supplied compatible refined background. This is a comparison for this identity response and these transported observables, not an assertion of triangulation independence of the separate background-gauging amplitude.

For a background gauge arrow with vertex labels $g$, the configuration bijection is $T_g(\sigma)_v=\sigma_v+g_v$ and the observable-algebra isomorphism is $\alpha_g(O)=O\circ T_g^{-1}$. These assignments respect identity and composition. The per-background partition weight is

$$
W_K(x)=Z_x=\sum_{\sigma\in\Phi_x}2^{-V_K}=1.
$$

The boundary state space on a subcomplex $L$ is the finite-dimensional space $\mathcal H(L)=\operatorname{Fun}(\pi_0\mathcal B(L),\mathbb C)$. For a fixed background $s$ on $L$, the relative convention fixes only this background restriction and sums over all spins on $K$ with weight $2^{-V_K}$; it does not fix boundary spin values. Thus the spin sector contributes $1$ for each extending background and introduces no additional seam factor. The relative background amplitude then uses the relative higher-gauge sum. All fields, action phases, measures, and amplitudes are dimensionless in the convention $\hbar=1$.

The closed-manifold data instantiate the finite-regulator two-group model interface. The relative subcomplex amplitudes and the background-only boundary state space are the additional boundary convention adopted here; they are not inferred from the closed-manifold interface. No continuum limit or empirical conclusion is part of this definition.

## Definition references

[[def-aqft-background-gauging-data|finite background-groupoid and relative higher-gauge sums]]

[[def-aqft-two-group-symmetry-realization|finite-regulator two-group model-data interface]]

[Moore and Saxena, §23.3](https://arxiv.org/pdf/2510.07408)

[Freed and Quinn, §2](https://www.math.ru.nl/~mueger/TQFT/FQ.pdf)

[Baez and Lauda, §8.3](https://arxiv.org/pdf/math/0307200)

[Benini, Córdova, and Hsin, §2.3](https://arxiv.org/pdf/1803.09336)

## Facts & Assumptions

**Given:** a finite ordered complex $K$, the chosen groups and action, a flat background $a$, the spin configuration set and measure, and the specified background gauge arrows.

[F1] [[def-aqft-two-group-symmetry-realization]]: a selected finite-regulator model specifies finite cell-value sets, configuration spaces, dimensionless action and measure, observable algebra, and coherent configuration bijections for background gauge arrows. The current carrier is a model-data interface, not a continuum or empirical theorem.

[F2] [[def-aqft-two-group-symmetry-realization]]: a finite abelian $1$-form symmetry is represented by topological codimension-two defects; an observable is genuine when it needs no attached support, and its charge is defined by moving the symmetry defect across it. For $A=\{0\}$ the only defect and character are the identity.

[F3] [[def-aqft-background-gauging-data]]: the finite two-group background model uses raw vertex/edge $1$-gauge labels, vertex $2$-gauge labels, and the relative higher sum with mass $|\pi_2|/|\pi_1|$.

[A1] The concrete model choices are $|G|=2$, $|A|=1$, $\Phi_x=C^0(K;G)$, $S_x=0$, and $\mu_x=2^{-V_K}$.

## Proof

1.1 Since $K$ has $V_K<\infty$ vertices and each spin has two possible values, $|\Phi_x|=2^{V_K}$. The algebra of complex-valued functions on this finite set is finite-dimensional and unital. Every configuration has action $0$ and weight $2^{-V_K}$, so the total measure is $2^{V_K}2^{-V_K}=1$. [given, F1, A1, algebra]

2.1 For any vertex label $g$, the map $T_g(\sigma)=\sigma+g$ has inverse $T_{-g}$, and $T_h\circ T_g=T_{g+h}$. Pullback by a bijection is a unital algebra isomorphism, preserves dependence on each specified subcomplex, and these pullbacks respect the same composition law. Since the configuration weights are uniformly $2^{-V_K}$, the complete integrand is unchanged after simultaneous spin and insertion transport. Identity networks contribute scalar $1$ independently of position or decoration, so every declared support move preserves every complete correlator; the subdivision comparison is the explicit new-spin sum stated in the Definition. The line function $\prod_{v\in\gamma^{(0)}}m_v$ depends only on spins supported on $\gamma$ and needs no attached surface, so it is a well-defined genuine line observable under [F2]. Because $A=\{0\}$, its only character and the only defect $U_0(\Sigma)$ are trivial; that identity defect is invariant under every permitted isotopy. The global constant label $h=1$ sends $m_v$ to $-m_v$, proving that the selected $G$ action is effective. [given, F1, F2, A1, step 1.1, construct, algebra]

2.2 The background gauge groupoid is finite because $K$ and $G$ are finite; the face cochain and all $2$-gauge labels are unique. For every background its spin partition weight is $1$ by step 1.1. The function space on $\pi_0\mathcal B(L)$ is finite for every finite boundary subcomplex $L$. [given, F3, A1, step 1.1, algebra]

3.1 Fix a background $s$ on $L$. The relative convention fixes no spin values, so for every extending background the spin sum is over all $2^{V_K}$ configurations, each with weight $2^{-V_K}$. By step 1.1 this contributes $1$; the remaining relative amplitude is exactly the finite higher-gauge sum over background extensions specified in the Definition. [given, F1, F3, A1, step 1.1, algebra] ∎
