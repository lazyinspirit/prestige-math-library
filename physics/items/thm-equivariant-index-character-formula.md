---
id: thm-equivariant-index-character-formula
kind: theorem
title: "Equivariant elliptic-complex index character and fixed-component formula"
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-index
dependency_level: 5
deps:
  - def-equivariant-elliptic-complex-index
  - lem-equivariant-relative-tangent-groupoid-heat-trace-limit
  - def-countable-choice
  - def-axiom-of-choice
  - def-equivariant-compact-symbol-k-theory
  - lem-equivariant-symbol-index-comparison
  - lem-equivariant-symbol-fixed-inclusion-localization
  - lem-equivariant-symbol-chern-character-pushforward
dependency_roles:
  def-equivariant-elliptic-complex-index: mathematical-premise
  lem-equivariant-relative-tangent-groupoid-heat-trace-limit: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-equivariant-compact-symbol-k-theory: mathematical-premise
  lem-equivariant-symbol-index-comparison: mathematical-premise
  lem-equivariant-symbol-fixed-inclusion-localization: mathematical-premise
  lem-equivariant-symbol-chern-character-pushforward: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "M. F. Atiyah and I. M. Singer, The Index of Elliptic Operators: I,
        §§4–9"
      url: "https://math.cs.kitami-it.ac.jp/~kouno/paper/Atiyah_Index.pdf"
    - title: "Graeme Segal, Equivariant K-theory, §§2–4"
      url: "https://www.numdam.org/item/PMIHES_1968__34__129_0/"
    - title: "Peter B. Gilkey, Invariance Theory, the Heat Equation, and the
        Atiyah-Singer Index Theorem, first edition"
      url: "https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf"
    - title: "Zelin Yi, A Groupoid Proof of the Lefschetz fixed point formula"
      url: "https://arxiv.org/pdf/2003.00955"
    - title: "Nicole Berline, Ezra Getzler, and Michèle Vergne, Heat Kernels and Dirac
        Operators"
      url: "https://djvu.online/file/ruwkno3rtNaI5"
    - title: "J. L. Heitsch, The Lefschetz Principle, Fixed Point Theory, and Index
        Theory"
      url: "https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf"
---

## Statement

Assume full AC. Let $T=(\mathbb R/\mathbb Z)^r$, $r\ge0$, act smoothly by isometries on a compact smooth manifold $M$ without boundary. Let $E^0,\ldots,E^N$ be smooth finite-rank Hermitian complex bundles and $d_j:C^\infty(M,E^j)\to C^\infty(M,E^{j+1})$ first-order differential maps with $d_{j+1}d_j=0$, setting $d_{-1}=d_N=0$. Their positive-frequency symbols use $\partial_x^\alpha\mapsto(i\xi)^\alpha$. Assume the symbol sequence is exact for every nonzero real cotangent vector. A jointly smooth unitary bundle action has maps $\rho_t^j(x):E_x^j\to E_{t\cdot x}^j$, with $\rho_e^j(x)=I$ and $\rho_{st}^j(x)=\rho_s^j(t\cdot x)\rho_t^j(x)$; set $(U_t^js)(x)=\rho_t^j(t^{-1}\cdot x)s(t^{-1}\cdot x)$ and require $U_t^{j+1}d_j=d_jU_t^j$.

Write $d=\bigoplus_jd_j$, let $d^*$ be its formal adjoint for the invariant metrics and Riemannian volume, and put $D=d+d^*$. Its even-to-odd symbol defines the compact-support class $\sigma\in K^0_{T,c}(T^*M)$. The cohomology groups $H^j=\ker d_j/\operatorname{im}d_{j-1}$ are finite dimensional. Define $\operatorname{Ind}_T(E^\bullet)=\sum_j(-1)^j[H^j]\in R(T)$, where $R(T)$ is the Grothendieck ring of finite-dimensional continuous complex representations.

For any $g\in T$, write $M^g=\coprod_aF_a$ for its finitely many connected fixed components, $\nu_a=(TF_a)^\perp\subset TM|_{F_a}$, $\pi_a:T^*F_a\to F_a$, and $i_a:T^*F_a\hookrightarrow T^*M$ for extension of covectors by zero on $\nu_a$. Put $\nu_{a,\mathbb C}=\nu_a\otimes_{\mathbb R}\mathbb C$ and $e_a=\lambda_{-1}(\nu_{a,\mathbb C}^*)=\sum_k(-1)^k[\Lambda^k\nu_{a,\mathbb C}^*]$. Then

$$\chi_{\operatorname{Ind}_T(E^\bullet)}(g)=\sum_a\int_{T^*F_a}\frac{\operatorname{ch}_{g,c}(i_a^*\sigma)}{\pi_a^*\operatorname{ch}_g(e_a)}\,\pi_a^*\operatorname{Td}(TF_a\otimes_{\mathbb R}\mathbb C).$$

For a symbol on the $g$-fixed base, $\operatorname{ch}_{g,c}$ means the compact-support relative Chern character weighted by the eigenvalue of $g$ on each eigenbundle; for an absolute virtual bundle $V$, $\operatorname{ch}_g(V)=\sum_\lambda\lambda\operatorname{ch}(V_\lambda)$. The Todd class is $\prod_jx_j/(1-e^{-x_j})$ in formal Chern roots, truncated in each degree. The integral is the oriented compact-support cohomological pairing on the cotangent bundle, oriented by $d\theta=\sum_jd\xi_j\wedge dx_j$. The denominator has nonzero degree-zero term $\det_{\mathbb R}(I-dg|_{\nu_a})$, so its positive-degree part is inverted by a finite nilpotent series. Its full characteristic class is retained for a positive-dimensional component. The degree-zero value of $\operatorname{ch}_g$ is the trace at $g$; it is distinct from the degree-zero rank of a Borel equivariant Chern character.

At an element where the fixed locus changes, the formula uses that element's actual fixed components and normal bundles. It applies also at $g=e$, when $F=M$ and the normal denominator is $1$; it asserts no transversally elliptic distribution formula. If the fixed components are isolated points, it specializes to

$$\chi_{\operatorname{Ind}_T(E^\bullet)}(g)=\sum_{x\in M^g}\frac{\sum_j(-1)^j\operatorname{tr}(\rho_g^j(x)|_{E_x^j})}{|\det_{\mathbb R}(I-dg_x)|}.$$

This isolated-point assertion also holds assuming only countable choice, provided every fixed point is simple and the nonnegative selfadjoint Hodge realization of $\Delta=D^2$ has discrete spectrum, smooth eigensections, trace-class heat operators with smooth kernels for positive time, finite-dimensional cohomology, and zero eigenspace canonically isomorphic to that cohomology. Thus the earlier spectral isolated-point case retains its weaker choice assumption.

## Statement references

[[def-equivariant-elliptic-complex-index]]

[[def-equivariant-compact-symbol-k-theory]]

[[lem-equivariant-symbol-index-comparison]]

[[lem-equivariant-symbol-fixed-inclusion-localization]]

[[lem-equivariant-symbol-chern-character-pushforward]]

[Atiyah–Singer I, §§4–9: analytic symbol index and the embedding method](https://math.cs.kitami-it.ac.jp/~kouno/paper/Atiyah_Index.pdf)

[Segal, §§2–4: fixed-inclusion localization in equivariant K-theory](https://www.numdam.org/item/PMIHES_1968__34__129_0/)

[Yi, Theorem 1.1 and §§2–5: the separate simple isolated-point heat-kernel formula](https://arxiv.org/pdf/2003.00955)

## Facts & Assumptions

**Given:** The equivariant first-order elliptic complex and invariant metrics in the Statement; full AC for the general fixed-component assertion, or the separately stated countable-choice Hodge heat hypotheses for its isolated-point branch.

[F1] The index and its character are the alternating cohomology representation and trace. [[def-equivariant-elliptic-complex-index]]

[F2] The positive-frequency even-to-odd symbol gives a compact-support equivariant triple, and the doubled real normal uses the exterior-multiplication Koszul convention. [[def-equivariant-compact-symbol-k-theory]]

[L1] Compact-symbol analytic realization identifies the complex's index with $a_{T,M}(\sigma)$. Analytic Gysin compatibility holds for a real equivariant embedding. On a base fixed by $g$, evaluation is the eigenvalue-weighted ordinary topological pushforward. The full analytic calculus, controlled excision, positive-order associated product and orthogonal Bott normalization are proved in its prerequisite chain. [[lem-equivariant-symbol-index-comparison]]

[L2] After localization at $S_g=\{s\in R(T):s(g)\ne0\}$, the fixed inclusion reconstructs every class by $\sigma=\sum_ai_{a!}((\pi_a^*e_a)^{-1}i_a^*\sigma)$. It proves smoothness and finiteness of the actual fixed components, the normal Koszul self-intersection, and invertibility of the normal class. [[lem-equivariant-symbol-fixed-inclusion-localization]]

[L3] The trace-weighted ordinary compact-symbol pushforward is the cotangent integral of its relative Chern character times $\operatorname{Td}(TF_{\mathbb C})$, with precisely the stated orientation. It respects localized quotients and retains the full normal characteristic denominator. [[lem-equivariant-symbol-chern-character-pushforward]]

[L4] With countable choice and the stated Hodge heat data, simple fixed points have heat-supertrace limit $\sum_x\operatorname{Str}(\rho_g(x))/|\det_{\mathbb R}(I-dg_x)|$. [[lem-equivariant-relative-tangent-groupoid-heat-trace-limit]]

[A1] Full AC is inherited from the new analytic and topological prerequisites for the general formula. [[def-axiom-of-choice]]

[A2] Only countable choice is used through the original local heat supplier in the isolated-point spectral branch. [[def-countable-choice]]

## Proof

**Proof technique:** Construct the general analytic-symbol reduction and fixed-inclusion reconstruction before evaluating the relative characteristic pushforward; retain the independent isolated heat argument.

**Given:** The hypotheses and exact conventions in the Statement.

1.1 Put $b=\sigma_1(d)$ at a nonzero real covector. The complex identity gives $b^2=0$. The positive-frequency symbol of the formal adjoint is $b^*$ by integration by parts, so the symbol of $D$ is $b+b^*$. Its square is $bb^*+b^*b$; a vector in its kernel is killed by both $b$ and $b^*$, hence belongs to $\ker b=\operatorname{im}b$ and is orthogonal to that image, so is zero. Thus its even-to-odd block is invertible off the zero section and represents $\sigma$ in [F2]. By [L1] the cohomology is finite dimensional and its alternating representation is exactly $a_{T,M}(\sigma)$. This uses the general matrix-symbol analytic chain and does not assume a Clifford-module reduction. [given, F1, F2, L1, A1, algebra]

2.1 Apply [L2] to this actual $g$. Let $b_a=(\pi_a^*e_a)^{-1}i_a^*\sigma$ in the localized compact-support group of $T^*F_a$. Its reconstruction is $\sigma=\sum_ai_{a!}b_a$. The analytic index in [L1] is $R(T)$-linear and its Gysin compatibility applies to the real embedding $F_a\hookrightarrow M$, with exactly the doubled-real Koszul normal used by [L2]. Applying that homomorphism, and then evaluating the localized representations at $g$, gives $\chi_{\operatorname{Ind}_T(E^\bullet)}(g)=\sum_a\chi_{a_{T,F_a}(b_a)}(g)$. The sum is finite; all denominators lie in $S_g$, so evaluation is defined. [L1, L2, step 1.1, algebra]

3.1 The closure of the cyclic group generated by $g$ fixes $F_a$ pointwise. The weightwise assertion in [L1] expresses each character on the right of step 2.1 as the weighted ordinary topological pushforward of $b_a$. Apply [L3]. The relative character is multiplicative by an absolute bundle class, so $\operatorname{ch}_{g,c}(b_a)=\operatorname{ch}_{g,c}(i_a^*\sigma)/(\pi_a^*\operatorname{ch}_g(e_a))$. Its compact support is inherited from the restricted symbol; the other factors are pulled back from compact $F_a$. The resulting cotangent integral is precisely the displayed term. Sum over $a$ to prove the general formula. [L1, L3, step 2.1, algebra]

4.1 The normal has no $g$-fixed vector by [L2], so the constant term of $\operatorname{ch}_g(e_a)$ is the nonzero determinant $\det_{\mathbb C}(I-g|_{\nu_{a,\mathbb C}^*})=\det_{\mathbb R}(I-dg|_{\nu_a})$. Orthogonality makes it positive: conjugate nonreal eigenvalues give positive paired factors, and the only possible real eigenvalue different from $1$ is $-1$. Positive-degree cohomology of compact $F_a$ is nilpotent by its finite dimension, so dividing by that constant and taking a finite geometric series defines the inverse. If $F_a$ is a point its Todd factor is $1$ and its symbol triple is the virtual graded fiber, so step 3.1 gives the isolated formula. Empty fixed loci give the empty sum, rank-zero normals give denominator $1$, and the identity element uses $F=M$. At an element with larger fixed locus the same proof uses its larger tangent fixed subspace, so no zero normal eigenvalue is retained as a denominator. [F2, L2, L3, step 3.1, algebra]

5.1 For the separate countable-choice branch, assume only its stated spectral data. The unitary action commutes with $d$ and hence with $d^*$ and $D$. On each positive $\Delta$-eigenspace with eigenvalue $\lambda$, the map $\lambda^{-1/2}D$ is an equivariant isomorphism between even and odd parity. Their traces therefore cancel. Trace-classness makes the heat trace series absolutely convergent, so these cancellations can be summed. The zero eigenspace is the cohomology by the branch's Hodge hypothesis, giving $\operatorname{Str}(U_ge^{-t\Delta})=\chi_{\operatorname{Ind}_T(E^\bullet)}(g)$ for every $t>0$. The limit in [L4] proves the isolated-point formula under [A2], independently of [A1] and the general-branch steps. Thus the original weaker-choice spectral assertion is retained as well as the full fixed-component claim. [given, F1, L4, A2, algebra] ∎

## Proof sources

[Atiyah–Singer I, §§4–9, and Segal, §§2–4, organize the normal-index and fixed-inclusion methods. Their required analytic, topological and characteristic calculations are supplied by the declared local proof chain.](https://math.cs.kitami-it.ac.jp/~kouno/paper/Atiyah_Index.pdf)

[Yi, §§2–5: the independent simple-point heat-supertrace argument](https://arxiv.org/pdf/2003.00955)
