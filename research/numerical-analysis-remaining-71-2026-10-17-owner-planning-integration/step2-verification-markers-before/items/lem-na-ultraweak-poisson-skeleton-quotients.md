---
id: "lem-na-ultraweak-poisson-skeleton-quotients"
kind: "lemma"
title: "Ultraweak Poisson skeleton spaces are Hilbert trace quotients"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 6
deps: ["def-na-ultraweak-poisson-dpg-formulation", "def-na-hdiv-space", "lem-na-hdiv-is-hilbert-and-h0div-closed", "lem-na-hdiv-weak-normal-trace", "lem-na-simplex-h1-facet-trace-bound", "lem-na-h1-interior-facet-traces-agree", "def-countable-choice", "lem-l-two-with-the-integral-pairing-is-a-hilbert-space", "def-sobolev-space-wkp-and-its-norm", "def-wkp-zero-as-a-sobolev-closure"]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG method", "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf", "locator": "Complete 15-page paper; §2 Theorem 2.1 and proof; §§3.1–3.4, including Lemmas 3.1–3.3 on ultraweak Poisson and Fortin maps."}, {"title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method for the Poisson equation", "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf", "locator": "Complete 22-page paper; §§3.1–3.2, Lemmas 4.1–4.4, Theorem 4.2. The graph inf-sup proof assumes simply connected Lipschitz domain."}, {"title": "Leszek Demkowicz, Mathematical Theory of Finite Elements", "url": "https://users.ices.utexas.edu/~leszek/classes/EM394H/book.pdf", "locator": "Complete 229-page course monograph; §§5.1–5.2 ideal/practical DPG; §§5.6.2 and 5.6.4 Fortin and mixed stability."}, {"title": "C. Carstensen, L. Demkowicz, and J. Gopalakrishnan, A Posteriori Error Control for DPG Methods", "url": "https://web.pdx.edu/~gjay/pub/cdg.pdf", "locator": "Complete 21-page paper; full §2 and Theorem 2.1 proof, §3.1. The Poisson stability application cites the same simply-connected source."}]}
---

## Statement

Assume Countable Choice and [[def-na-ultraweak-poisson-dpg-formulation]]. The elementwise trace map $\Gamma_0:H^1_0(\Omega)\to\prod_KH^1(K)/H^1_0(K)$ and normal-trace map $\Gamma_n:H(div;\Omega)\to\prod_K(H^1(K)/H^1_0(K))'$ have real Hilbert quotient ranges with global lift infimum norms. These equal the infima over broken extensions whose gluing belongs to the respective global space. Compatibility means membership in these ranges, so normal traces are conservative on each interior facet in the weak distributional sense.

## Facts & Assumptions

**Given:** The finite mesh, trace maps, Countable Choice.

[A1] Countable Choice is declared for trace interfaces. ([[def-countable-choice]])

[F1] H(div) is Hilbert and its zero-trace subspace is closed. ([[lem-na-hdiv-is-hilbert-and-h0div-closed]])

[F2] Cell weak normal traces are continuous. ([[lem-na-hdiv-weak-normal-trace]])

[F3] Cell scalar traces are bounded in H1. ([[lem-na-simplex-h1-facet-trace-bound]])

[F4] Global H1 traces agree on interior facets. ([[lem-na-h1-interior-facet-traces-agree]])

[F5] The formulation fixes the trace ranges and lift norms. ([[def-na-ultraweak-poisson-dpg-formulation]])

[F6] Real L2 with its integral inner product is a Hilbert space. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]])

[F7] H1 functions and their first derivatives are L2 classes defined by distributional derivatives; H1_0 is the stated closure. ([[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]])

[F8] A global H(div) field has an L2 distributional divergence, so for every $\phi\in C_c^\infty(\Omega)$, $\int_\Omega(\tau\cdot\nabla\phi+(\operatorname{div}\tau)\phi)=0$. ([[def-na-hdiv-space]])

## Proof

1.1 H1 is complete: completeness of real $L^{2}$ [F6] gives limits in $L^{2}$ of a Cauchy sequence and each weak derivative satisfy distributional derivative identities by testing against compactly supported smooth functions and passing both integrals to their limits. H1_0 is closed by its closure definition. The scalar trace-quotient map is continuous because $\|[u|_K]\|_{H^1(K)/H^1_0(K)}\le\|u|_K\|_{H^1(K)}$ on each cell; the finite product preserves continuity. The normal map is continuous by [F2], again with a finite product. Thus both kernels are closed. [A1, F1, F2, F5, F6, F7, algebra]


1.2 Let $\tau\in H(\operatorname{div};\Omega)$ and let an interior facet $F=K_+\cap K_-$ be fixed. For $\psi\in C_c^\infty(\operatorname{relint}F)$, choose a smooth function $\phi\in C_c^\infty(\Omega)$ supported in a small tubular neighborhood of $\operatorname{supp}\psi$ meeting only $K_+$ and $K_-$ and having trace $\psi$ on $F$. The global distributional-divergence identity [F8] gives $\int_\Omega(\tau\cdot\nabla\phi+(\operatorname{div}\tau)\phi)=0$. Applying the cell Green identity [F2] to the two restrictions, with all other cell traces zero, yields $$\langle\gamma_{n_+,K_+}(\tau|_{K_+}),[\phi|_{K_+}]\rangle+\langle\gamma_{n_-,K_-}(\tau|_{K_-}),[\phi|_{K_-}]\rangle=0.$$ The two cell trace classes in this equation restrict to the same $\psi$ on $F$ and vanish on the other facets. Since this holds for every such $\psi$, the two outward weak normal traces cancel as distributions on the relative interior of each interior facet. This is the conservative facet relation for a global H(div) lift; it uses the distributional divergence identity and weak Green formula, not pointwise normal values. [F2, F8, given, construct, algebra]


2.1 For a closed subspace $M$ of a Hilbert space, a distance-minimizing sequence is Cauchy by the parallelogram identity; its limit is nearest, and variation along $M$ makes the residual orthogonal. Thus $H=M\oplus M^\perp$ and $H/M$ is isometric to $M^\perp$. Applying this to both kernels in step 1.1 proves the quotient ranges are Hilbert with their infimum norms. [A1, F1, step 1.1, algebra]


3.1 Global lifts restrict to broken lifts; conversely the admissible broken extensions in the Statement are exactly those gluing to a global lift, so the two infima have the same set. Cell scalar traces are bounded by [F3] and those of a global H1 lift match across interior facets by [F4]; normal traces of a global H(div) lift satisfy the cancellation proved in step 1.2. Thus range membership is precisely the stated compatibility, with the global lift infimum norms. [F2, F3, F4, F5, step 2.1, step 1.2, algebra] ∎

