---
id: thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex
kind: theorem
title: "Termwise Hochschild spectral sequence of a bounded bimodule complex"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-hochschild-hyperhomology-of-a-bimodule-complex
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - def-termwise-hochschild-homology-complex-and-iterated-homology
  - thm-the-cohomological-filtered-complex-construction
  - thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
  - def-cochain-complex-in-an-abelian-category
  - def-cohomological-spectral-sequence
  - def-abutment-to-a-filtered-object
  - prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Beliakova–Putyra–Wehrli, Quantum Link Homology via Trace Functor I, §3.8.6, printed p.38"
      url: "https://arxiv.org/pdf/1605.03523"
      locator: "§3.8.6: the Hochschild complex of a complex of bimodules and the role of the two gradings."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5, §5.4–5.6, printed pp.133–143"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
      locator: "§5.4–5.5: the spectral sequence of a filtered complex and its convergence under degreewise finiteness; §5.6: the exact couple of a double complex."
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, printed pp.5–7"
      url: "https://arxiv.org/pdf/math/0510265"
      locator: "pp.6–7: the termwise Hochschild homology of a complex of graded bimodules and its gradings."
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Statement

Let $k$ be a field, let $A$ be a unital associative $k$-algebra, and let
$F=(F^i,d_F^i)$ be a bounded cochain complex of $k$-central $A$-bimodules with
differentials of internal degree zero
([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).
Write $T^\bullet(A,F)$ for the Hochschild hyperhomology complex of
[[def-hochschild-hyperhomology-of-a-bimodule-complex]] and, for every $p$,
$$F^pT^n(A,F):=\bigoplus_{\substack{i\geq p\\ i-j=n\\ j\geq0}}C_j(A,F^i).$$
Then the decreasing filtration $F^\bullet T^\bullet$ by subcomplexes is finite,
exhaustive and separated in every total degree, and its spectral sequence is a
natural cohomological spectral sequence
$$E_1^{i,-j}=HH_j(A,F^i),\qquad E_2^{i,-j}=H^i\bigl(HH_j(A,F^\bullet)\bigr),$$
with differentials $d_r:E_r^{i,-j}\to E_r^{i+r,-j-r+1}$
([[def-cohomological-spectral-sequence]]), abutting to the finite image
filtration on the hyperhomology $\mathrm{HH}^{\mathrm{hyper},i-j}(A,F)$
([[def-abutment-to-a-filtered-object]]):
$$E_\infty^{i,-j}\cong \operatorname{gr}^i\,\mathrm{HH}^{\mathrm{hyper},i-j}(A,F).$$
The second page is the iterated homology of
[[def-termwise-hochschild-homology-complex-and-iterated-homology]]. When $A$ and
$F$ carry internal gradings and the differentials have internal degree zero,
the spectral sequence is compatible with the internal grading: each term
$E_r^{i,-j}$ splits as a direct sum over internal degrees, all differentials
preserve the internal degree, and the abutment isomorphism is internal-degree
preserving. The result asserts nothing about the vanishing of higher
differentials: it is not claimed that the spectral sequence degenerates at any
page, and extension problems in passing from $E_\infty$ to
$\mathrm{HH}^{\mathrm{hyper}}$ are not excluded.

## Facts & Assumptions

**Given:** a field $k$, a unital associative $k$-algebra $A$, and a bounded cochain complex $F$ of $k$-central $A$-bimodules with internal-degree-zero differentials.

[F1] The hyperhomology complex has $T^n(A,F)=\bigoplus_{i-j=n,\,j\geq0}C_j(A,F^i)$ with $D=d_F+(-1)^ib$ on the $(i,j)$ summand; the subspaces $F^pT^n:=\bigoplus_{i\geq p,\,i-j=n}C_j(A,F^i)$ form a decreasing filtration by subcomplexes that is finite at each total degree because $F$ is bounded, and $\mathrm{HH}^{\mathrm{hyper},n}(A,F)=H^n(T^\bullet(A,F))$ ([[def-hochschild-hyperhomology-of-a-bimodule-complex]]).

[F2] For fixed $j$ the maps $HH_j(A,d_F^i):HH_j(A,F^i)\to HH_j(A,F^{i+1})$ induced by the coefficient differentials make $\bigl(HH_j(A,F^\bullet),HH_j(A,d_F^\bullet)\bigr)$ a cochain complex, and its cohomology $H^i(HH_j(A,F^\bullet))$ is the iterated Hochschild homology ([[def-termwise-hochschild-homology-complex-and-iterated-homology]]).

[F3] The cochain complex $K=K^\bullet$ with a decreasing filtration by subcomplexes produces a cohomological spectral sequence with $E_0^{p,q}=\operatorname{gr}^pK^{p+q}$, $E_1^{p,q}\cong H^{p+q}(\operatorname{gr}^pK)$, differentials $d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}$, and, when the filtration is degreewise finite, abutment $E_\infty^{p,q}\cong\operatorname{gr}^pH^{p+q}(K)$ with the decreasing image filtration; the construction is natural in the filtered complex ([[thm-the-cohomological-filtered-complex-construction]]).

[F4] If the filtration on every $C_n$ of a chain complex is finite, the spectral sequence of the filtered complex stabilizes pointwise and naturally abuts to $H_n(C)$ with the image filtration, which is finite, exhaustive and separated; no uniform filtration bound in $n$ is needed ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

[F5] A filtered chain map induces a morphism of the associated spectral sequences, respecting identities, composition and the differentials ([[prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences]]).

[F6] A cochain complex over an abelian category is a graded family of objects with degree-raising differentials squaring to zero; a filtration by subcomplexes restricts the differential to each filtration level ([[def-cochain-complex-in-an-abelian-category]]).

[F7] A cohomological spectral sequence is a family of bigraded objects $E_r^{p,q}$ with differentials $d_r$ of bidegree $(r,1-r)$ satisfying $d_r^2=0$ and $E_{r+1}\cong H(E_r,d_r)$ ([[def-cohomological-spectral-sequence]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the filtration $F^pT^\bullet$ is a decreasing filtration by subcomplexes: $D$ preserves $F^pT^\bullet$, since $d_F$ raises $i$ and $b$ preserves $i$. It is exhaustive and separated in each total degree, and finite there because for $i-j=n$ with $0\leq j$ and $F$ supported on a finite interval $[a,b]$ only the indices $i\in[a,b]\cap[n,\infty)$ contribute, a finite set; the quotient $F^pT^n/F^{p+1}T^n$ retains exactly the summand with $i=p$. Thus $\operatorname{gr}^pT^n=C_{p-n}(A,F^p)$ for $p\geq n$, and it is zero for $p<n$ (equivalently, $C_j=0$ for $j<0$). In particular $E_0^{p,q}=C_{-q}(A,F^p)$, zero for $q>0$. [F1, given, algebra]

1.2 Because the filtration is decreasing and degreewise finite, [F3] (with [F4] for the chain-level abutment statement, read in the degreewise-finite form supplied by [F3]) gives a cohomological spectral sequence in the sense of [F7] whose $E_0$-page is the associated graded of $T^\bullet(A,F)$ and whose $E_1$-page is the cohomology of the associated graded. On $\operatorname{gr}^pT^n$ the differential induced by $D=d_F+(-1)^ib$ is the summand-$b$ term $(-1)^pb$; the $d_F$-part raises the filtration index and therefore contributes zero to the associated-graded differential. Hence $H^{p+q}(\operatorname{gr}^pT^\bullet)=H^{n}(C_\bullet(A,F^p),(-1)^pb)=HH_j(A,F^p)$ with $j=-q$, because multiplying a complex by the invertible constant $(-1)^p$ does not change homology. Thus $E_1^{i,-j}=HH_j(A,F^i)$. [F1, F3, F6, F7, given, algebra]

1.3 The $E_1$-differential is induced by the part of $D$ that raises the filtration index, namely $d_F$; on the summand $\operatorname{gr}^iT^\bullet$ it is the map on homology $HH_j(A,d_F^i):HH_j(A,F^i)\to HH_j(A,F^{i+1})$ induced by the coefficient differential, with the standard sign convention of $D$. By [F2] these maps make the iterated complex, and $E_2^{i,-j}=H^i(HH_j(A,F^\bullet))$ is its cohomology. [F1, F2, F3, given, algebra]

1.4 Convergence is the degreewise-finite abutment of [F3]: the filtration on $T^n(A,F)$ is finite, so the spectral sequence stabilizes pointwise and $E_\infty^{i,-j}\cong\operatorname{gr}^i\mathrm{HH}^{\mathrm{hyper},i-j}(A,F)$ with the decreasing image filtration; [F4] supplies the corresponding chain-level statement, both being the same theorem transported across the reindexing $C_n=T^{-n}$, $F_pC_n=F^{-p}T^{-n}$ stated in [F3]. The filtration is finite, exhaustive and separated, so no convergence condition beyond degreewise finiteness is used. [F1, F3, F4, given, algebra]

2.1 Naturality: a degree-zero bimodule map of bounded coefficient complexes $u:F\to F'$ commutes with both $d_F$ and the Hochschild boundary, so it preserves the filtrations of 1.1 and is a filtered chain map; by [F5] it induces a morphism of the associated spectral sequences, compatible with all pages and with the abutment. If $A$ and the coefficient complexes are internally graded and all maps have internal degree zero, then $T^\bullet(A,F)$, the filtration levels $F^pT^n$, and every differential are internal-degree homogeneous; hence each $E_r^{i,-j}$ inherits a direct-sum decomposition by internal degree, all $d_r$ preserve it, and the abutment isomorphism of 1.4 is internal-degree preserving. No claim of degeneration or of vanishing of higher differentials is made, and extension problems in reconstructing $\mathrm{HH}^{\mathrm{hyper}}$ from $E_\infty$ are not excluded. [F1, F3, F5, step 1.1, step 1.4, given, algebra] ∎
