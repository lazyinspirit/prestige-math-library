---
id: thm-extension-theorem-for-bounded-smooth-domains
kind: theorem
title: Bounded C^k domains admit integer-order Sobolev extension
status: published
origin: pipeline
deps: [def-sobolev-extension-domain-and-extension-operator, def-bounded-c-k-domain-and-boundary-charts, thm-wkp-extension-from-a-half-space, lem-c-k-boundary-flattening-preserves-wkp-locally, lem-test-function-cutoffs-and-euclidean-localization, lem-weak-leibniz-rule-with-a-smooth-factor, lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces, lem-compact-support-zero-extension-in-wkp, def-sobolev-space-wkp-and-its-norm, thm-monotone-convergence-for-the-integral, def-axiom-of-choice]
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: Sung-Jin Oh, Lecture Notes for Math 222A (2024), §11.3
      url: https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
      locator: §11.3, Proposition 11.13 and Remark 11.14, printed pp. 157–159
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Theorem 3.12 and Corollary 3.13
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.6, printed pp. 60–62
    - title: Juha Kinnunen, Sobolev Spaces (2026), Definition 3.42 and Theorem 3.43
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 3 §3.6, printed pp. 84–85
---

## Statement

Assume the Axiom of Choice. Let $k\ge1$, $1\le p\le\infty$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, and let $\Omega\subset\mathbb R^n$ be a
bounded $C^k$ domain in the graph sense of
[[def-bounded-c-k-domain-and-boundary-charts]]. Then for every open set
$V\subseteq\mathbb R^n$ with $\overline\Omega\subseteq V$ there is a bounded
linear extension operator
$$E:W^{k,p}(\Omega;\mathbb K)\longrightarrow W^{k,p}(\mathbb R^n;\mathbb K),\qquad (Eu)|_\Omega=u\ \text{a.e. on }\Omega,$$
such that $\operatorname{supp}(Eu)$ is a compact subset of $V$ for every
$u\in W^{k,p}(\Omega;\mathbb K)$. In particular each bounded $C^k$ domain is a
$W^{k,p}$-extension domain, with an operator whose output is supported in any
prescribed neighbourhood of $\overline\Omega$. For $k=0$, extension by zero
is an isometric $L^p$ extension on any open $\Omega$; its output is supported
in the compact set $\overline\Omega\subseteq V$ when $\Omega$ is bounded.

## Facts & Assumptions

**Given:** the Axiom of Choice; $k\ge1$; $1\le p\le\infty$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; a bounded $C^k$ domain $\Omega\subset\mathbb R^n$; an open $V$ with $\overline\Omega\subseteq V$; and a class $u\in W^{k,p}(\Omega;\mathbb K)$.

[F1] Chart data: by [[def-bounded-c-k-domain-and-boundary-charts]], at every $x\in\partial\Omega$ there are an open neighbourhood $W_x$, a rigid motion and a graph function $h_x\in C^k$ making $W_x\cap\Omega$ the one-sided subgraph $t<h_x(y)$; the flattening chart $\Phi_x$ and its inverse are $C^k$ maps whose derivatives through order $k$ are bounded on compactly contained patches, and $\det D\Phi_x=\det Q_x\in\{-1,1\}$, so $|\det D\Phi_x|=1$. Compactness of $\partial\Omega$ is what allows finitely many such charts to cover the boundary.

[F2] Half-space extension: for $H=\mathbb R^{n-1}\times(0,\infty)$ and all $k\ge0$, $1\le p\le\infty$ there is a bounded linear extension operator $W^{k,p}(H;\mathbb K)\to W^{k,p}(\mathbb R^n;\mathbb K)$, equal to the input on $H$, given for $k\ge1$ by the moment reflection and for $k=0$ by even reflection ([[thm-wkp-extension-from-a-half-space]]).

[F3] $C^k$ flattening is a bounded change of variables between corresponding compactly contained local $W^{k,p}$ spaces when the two patches are images of one another, with constants depending only on $n,k,p$ and the compact chart bounds; for $k=1$ bounded $C^1$ data suffice ([[lem-c-k-boundary-flattening-preserves-wkp-locally]]).

[F4] Cutoffs and locally finite partitions: every open cover of an open Euclidean set has an at most countable locally finite smooth partition of unity with compact supports, each lying in some cover member; a compact set inside an open set admits a smooth cutoff equal to one nearby ([[lem-test-function-cutoffs-and-euclidean-localization]]). On a compact neighbourhood of $\overline\Omega$, local finiteness leaves only finitely many active pieces, which can be grouped by the finitely many chart labels.

[F5] Multiplication by a smooth factor with bounded derivatives through order $k$ is bounded on $W^{k,p}$ and satisfies the Leibniz formula ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F6] Restriction and cutoff localisation: restriction to an open subset is a contraction, and multiplication by a factor $\eta\in C_c^\infty(\Omega)$ is bounded, with the explicit constants $C_\alpha(\eta)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}\|D^\beta\eta\|_\infty$ ([[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]]).

[F7] Compactly supported Sobolev classes extend by zero in every integer order and every $1\le p\le\infty$, with equal norms ([[lem-compact-support-zero-extension-in-wkp]]).

[F8] Extension operator and Sobolev norms: the definition of a bounded linear extension operator as a right inverse of the restriction map ([[def-sobolev-extension-domain-and-extension-operator]]), with the norm convention of [[def-sobolev-space-wkp-and-its-norm]].

[F9] For an increasing sequence of nonnegative measurable functions, the integrals converge to the integral of the pointwise limit ([[thm-monotone-convergence-for-the-integral]]).

**Choice use.** AC selects a chart from the nonempty chart family at each boundary point before compactness reduces the cover to finitely many charts. Its countable instance is inherited through the Sobolev, cutoff and weak-Leibniz interfaces [F3]–[F6]. The remaining finite cutoffs and reflection formulas use no additional selection.

## Proof

**Proof technique:** direct.

1.1 Since $\partial\Omega$ is compact and $V$ is an open neighbourhood of $\overline\Omega$, choose $\rho>0$ with $\{x:\operatorname{dist}(x,\overline\Omega)<2\rho\}\subseteq V$. Choose finitely many boundary charts $\Phi_i$, with the larger patches compactly contained in their original chart neighbourhoods, on nested patches $W_i'\Subset W_i$, so that the larger patches have $\rho$-neighbourhoods in $V$ and the smaller patches cover $\partial\Omega$. The inner patches may be taken thin enough in flattened normal coordinates that reflection by any factor $j\le k$ keeps the support of a function localized there inside the larger flattened patch. Compactness also gives an open set $\Omega_0\subset\subset\Omega$ with $\overline\Omega\subseteq\Omega_0\cup\bigcup_{i=1}^mW_i'$. [F1, given]

2.1 Let $N:=\Omega_0\cup\bigcup_{i=1}^mW_i'$, an open neighbourhood of $\overline\Omega$ inside $V$. Apply [F4] on $N$ to this finite cover and choose a compact neighbourhood $K\Subset N$ of $\overline\Omega$. Only finitely many partition supports meet $K$; these pieces still sum to one on a neighbourhood of $\overline\Omega$. Group them by their assigned cover member and extend them by zero outside $N$. This gives $\zeta_0,\zeta_1,\dots,\zeta_m\in C_c^\infty(V;[0,1])$ with $\sum_i\zeta_i=1$ near $\overline\Omega$, $\operatorname{supp}\zeta_0\subset\Omega_0\Subset\Omega$, and $\operatorname{supp}\zeta_i\subset W_i'$ for $i\ge1$. Each support is compact in $V$. [F4, step 1.1]

2.2 To apply [F3] on patches reaching the boundary, let $T:A\to B$ be either direction of a chart restricted to corresponding open half-patches. The derivatives of $T$ and $T^{-1}$ through order $k$ have uniform bounds inherited from the compact ambient chart. Exhaust $A$ by nested open sets $A_j\Subset A$, $j\ge1$, and put $B_j=T(A_j)\Subset B$. For $v\in W^{k,p}(B)$, [F3] applied on each matched pair gives the weak composition formulas and $\|v\circ T\|_{W^{k,p}(A_j)}\le C\|v\|_{W^{k,p}(B_j)}\le C\|v\|_{W^{k,p}(B)}$, with $C$ independent of $j$. Every test support in $A$ lies in some $A_j$, so these same formula fields are weak derivatives on $A$. Increasing the integrals by [F9] for finite $p$, or taking essential bounds on the countable union for $p=\infty$, proves the identical norm bound on $A$. Thus no compact-containment hypothesis is being assumed of the entire half-patch. [F3, F6, F9, step 1.1]

3.1 Let $u\in W^{k,p}(\Omega;\mathbb K)$. By [F5], since the ambient cutoff has bounded derivatives through order $k$, each product $\zeta_iu|_\Omega$ belongs to $W^{k,p}(\Omega;\mathbb K)$, is supported in $\operatorname{supp}\zeta_i\cap\Omega$, and satisfies $\|\zeta_iu\|_{W^{k,p}(\Omega)}\le C_i\|u\|_{W^{k,p}(\Omega)}$ with $C_i$ determined by the cutoff; moreover $u=\sum_{i=0}^m\zeta_iu$ almost everywhere on $\Omega$. [F5, F6, step 2.1, given]

4.1 Interior piece: $\zeta_0u$ is supported in the compact set $\operatorname{supp}\zeta_0\subset\Omega$, so by [F7] its extension by zero $E_0(\zeta_0u)$ lies in $W^{k,p}(\mathbb R^n;\mathbb K)$, agrees with $\zeta_0u$ on $\Omega$, is supported in $\operatorname{supp}\zeta_0\subseteq V$, and satisfies $\|E_0(\zeta_0u)\|_{W^{k,p}(\mathbb R^n)}=\|\zeta_0u\|_{W^{k,p}(\Omega)}$. [F7, step 3.1]

4.2 Boundary pieces: fix $i\ge1$. The flattened function $w_i:=(\zeta_iu)\circ\Phi_i^{-1}$ is defined on $\Phi_i(W_i\cap\Omega)=\Phi_i(W_i)\cap\{t<0\}$. The cutoff support is compactly contained laterally in the chart; extending $w_i$ by zero across the artificial edges inside this half-space gives a $W^{k,p}(H_-)$ class, since the cutoff vanishes near those edges and tests in $H_-$ stay away from $t=0$. Step 2.2 applied to the corresponding half-patches bounds its norm by $C_i\|\zeta_iu\|_{W^{k,p}(\Omega)}$. Conjugating the upper-half-space operator of [F2] by the coordinate flip gives an extension from $H_-=\{t<0\}$, so the zero-extended $w_i$ has an extension $\widetilde w_i\in W^{k,p}(\mathbb R^n;\mathbb K)$. Its support remains inside the larger flattened patch by the choice in step 1.1, and its extension formula is linear. Pulling back by $\Phi_i$ and multiplying by a cutoff $\psi_i\in C_c^\infty(W_i)$ equal to one near $\operatorname{supp}\zeta_i$ gives $$E_i(u):=\psi_i\cdot(\widetilde w_i\circ\Phi_i)\in W^{k,p}(\mathbb R^n;\mathbb K),$$ by [F3] on matched ambient patches and [F5], followed by [F7] to extend the compactly supported product from $W_i$ by zero. These operations give $\|E_i(u)\|_{W^{k,p}(\mathbb R^n)}\le C_i\|\zeta_i u\|_{W^{k,p}(\Omega)}$. It agrees with $\zeta_iu$ almost everywhere on $\Omega$, and its support lies in $\operatorname{supp}\psi_i\cap\Phi_i^{-1}(\operatorname{supp}\widetilde w_i)$, a compact subset of $V$. [F2, F3, F5, F7, step 1.1, step 2.1, step 2.2, step 3.1]

5.1 Define $E(u):=E_0(\zeta_0u)+\sum_{i=1}^mE_i(u)$. Each step above is linear in $u$, so $E$ is linear; on $\Omega$ the sum equals $\sum_{i=0}^m\zeta_iu=u$ almost everywhere by step 3.1; the support of $E(u)$ is contained in the union of finitely many compact subsets of $V$, hence compact in $V$; and [F8] together with the bounds of steps 3.1, 4.1 and 4.2 gives $\|E(u)\|_{W^{k,p}(\mathbb R^n)}\le C\|u\|_{W^{k,p}(\Omega)}$ for a constant $C$ independent of $u$. [F8, step 3.1, step 4.1, step 4.2]

6.1 Therefore $E$ is a bounded linear extension operator in the sense of [F8], and $\Omega$ is a $W^{k,p}$-extension domain for every $1\le p\le\infty$, including $p=\infty$ through the chart and half-space interfaces used above. For $k=0$ the $L^p$ extension property is immediate on any open $\Omega$: extension by zero of an $L^p(\Omega;\mathbb K)$ class lies in $L^p(\mathbb R^n;\mathbb K)$ with the same norm, is linear, and restricts back to the class, so zero extension is the required operator; its support is contained in $\overline\Omega$, which is compact in $V$ under the bounded-domain hypotheses. [F7, F8, step 5.1] ∎
