# Task — Fourier analysis

**You are an expert in Fourier analysis and harmonic analysis.** Prefix **`FR`**.
You own exactly `research/plan-fourier-analysis-track.md`. Anchor:
**`scalar-conservation-laws-and-entropy-solutions-examples`** — the last PDE page,
i.e. the end of the analysis band. This keeps your track **below complex analysis**
(order 303+), so complex analysis can cite Hardy spaces and BMO rather than
forward-reference them.

## What you must NOT re-mint

**Functional analysis owns the transform itself** and you cite it by page id:
`fourier-transform-convolution-and-approximate-identities`,
`schwartz-space-and-the-plancherel-theorem`,
`distributions-test-functions-and-differentiation`,
`tempered-distributions-and-the-fourier-transform`, and
`orthonormal-bases-parseval-and-fourier-series` for the Hilbert-space view of
Fourier series. **Measure theory owns** `density-separability-and-convolution-in-lp`,
the **Hardy–Littlewood maximal function with Lebesgue differentiation**, and
**Riesz–Thorin interpolation** (subjects-01 ruling R-6). **PDE owns Sobolev spaces
and their embeddings**; you own their Fourier characterisations and cite PDE for
the spaces.

`RG` (representation theory of groups, concurrent) owns unitary representation
theory of noncommutative locally compact groups. **You own Pontryagin duality and
harmonic analysis on locally compact ABELIAN groups.** Cite `RG-n` by relative
label where the noncommutative statement is needed.

## Expected shape

**Classical Fourier series, properly:** Dirichlet and Fejér kernels, the Dirichlet
and Dini criteria, Fejér's theorem, Cesàro and Abel summability, the Riemann–Lebesgue
lemma, localisation, Gibbs' phenomenon, absolute convergence and Bernstein's
theorem, Wiener's lemma, and the genuine failure results — **du Bois-Reymond's
continuous function with a divergent Fourier series**, Kolmogorov's $L^1$ example,
and Carleson's theorem in statement with an honest account of what it costs.
Lacunary series and Sidon sets if your sources support them.

**Real-variable harmonic analysis:** the conjugate function and the **Hilbert
transform**, its $L^p$ boundedness (Riesz) and its failure on $L^1$ and
$L^\infty$; Calderón–Zygmund decomposition and CZ singular integral operators;
weak-type estimates and Marcinkiewicz interpolation; **Hardy spaces** $H^p$, their
atomic and maximal-function characterisations; **BMO** and the John–Nirenberg
inequality; $H^1$–BMO duality; Littlewood–Paley theory and square functions;
Muckenhoupt weights if reachable; the Fourier restriction problem and
Stein–Tomas at least in statement; Strichartz estimates by citation to PDE.

**Abstract and discrete:** Pontryagin duality with Bochner's theorem and
Plancherel on locally compact abelian groups; the Fourier transform on
$\mathbb Z/N$, the finite Fourier transform, and the FFT as an algorithm with its
correctness proof; Poisson summation and its hypotheses; uncertainty principles,
including Heisenberg and the Hardy uncertainty theorem.

Be exact about which $L^p$ each theorem lives on, which need $1<p<\infty$
strictly, and which fail at the endpoints — endpoint behaviour is where this
subject's real content lives, and a scaffold that blurs it is not usable.
