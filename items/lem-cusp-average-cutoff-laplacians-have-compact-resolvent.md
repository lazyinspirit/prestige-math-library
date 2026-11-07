---
id: lem-cusp-average-cutoff-laplacians-have-compact-resolvent
kind: lemma
title: Cusp-average cutoff Laplacians have compact resolvent
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-cusp-pseudo-laplacian-data
- def-axiom-of-choice
- thm-finite-area-fuchsian-quotients-have-compact-cusp-truncations
- thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain
- thm-lax-milgram
- thm-self-adjointness-range-criterion
- thm-spectral-theorem-for-compact-self-adjoint-operators
- thm-interior-h-k-plus-two-elliptic-regularity
- thm-fourier-basis-and-parseval-on-the-n-torus
- lem-l-two-with-the-integral-pairing-is-a-hilbert-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Yves Colin de Verdière, Pseudo-laplaciens II, Annales de l'Institut Fourier 33(2) (1983), 87–113
    url: https://www.numdam.org/article/AIF_1983__33_2_87_0.pdf
    locator: 'Sections 1–2, printed pp. 89–92 / PDF pp. 4–7: the one-cusp pseudo-Laplacian form and compact-resolvent method; finite cusps, twists, Rellich tails and form details are supplied locally.'
  - title: Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh
    url: https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf
    locator: 'Sections 4.1–4.3, printed pp. 19–23: the compact cutoff-kernel route and its compactness purpose; the form and finite-cusp compactness proof is supplied locally.'
dependency_level: 8
axiom_use: Axiom of Choice is an explicit public hypothesis; Countable and Dependent Choice follow.
---

## Statement

For the public AC finite-cusp data, the full form operator $A$ and each cutoff form operator $A_Y$ exist as densely defined nonnegative self-adjoint operators. The operator $A_Y$ has compact resolvent: its spectrum consists of finite-multiplicity eigenvalues tending to infinity, its eigenfunctions are smooth away from the cutoff horocycles, and $(A_Y-\lambda)^{-1}$ is meromorphic in $\lambda$ with finite-rank poles. Distributionally, if $v\in D(A_Y)$, then
$$\Delta_Hv=A_Yv+\sum_{j\in J}c_j(v)\delta_{j,Y},$$
where $\langle\delta_{j,Y},\varphi\rangle=\int_0^1\varphi(N_j^{-1}(x+iY))\,dx$ is constant-mode horocycle evaluation and $c_j(v)=\partial_yv_{0,j}(Y^-)$ is the left derivative trace of the zero Fourier coefficient in the normalized cusp coordinate. The map $v\mapsto c_j(v)$ is continuous for the graph norm $\|v\|_H+\|A_Yv\|_H$. Thus only the constant normal derivative may jump at a cutoff horocycle; no nonconstant mode has a jump.

## Statement references

[Yves Colin de Verdière, Pseudo-laplaciens II, Ann. Inst. Fourier 33(2) (1983), 87–113](https://www.numdam.org/item/AIF_1983__33_2_87_0.pdf)

[Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh](https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf)

## Facts & Assumptions

**Given:** The complete objects, conventions and PUBLIC Axiom of Choice in the Statement.

[F1] The finite-cusp form spaces and PUBLIC AC ([[def-finite-cusp-pseudo-laplacian-data]]).

[F2] Under AC, H¹-bounded sequences on bounded smooth chart disks have L²-convergent subsequences ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]]).

[F3] A bounded coercive sesquilinear form gives a unique weak solution ([[thm-lax-milgram]]).

[F4] A dense symmetric operator with both nonreal conjugate ranges surjective is self-adjoint ([[thm-self-adjointness-range-criterion]]).

[F5] A compact self-adjoint positive operator has finite-dimensional nonzero eigenspaces and eigenvalues accumulating only at zero ([[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[F6] Interior elliptic estimates give local smoothness and parameter-dependent estimates under CC, supplied here by AC ([[thm-interior-h-k-plus-two-elliptic-regularity]]).

[F7] The unit-circle Fourier characters form a complete orthonormal basis and satisfy Parseval under Countable Choice, supplied by the public AC; multiplication by exp(2πiαx) gives the shifted-frequency version. ([[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[F8] Under Countable Choice, L² with the integral pairing is a Hilbert space; quotient sections are identified with scalar L² on a measurable fundamental domain. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

## Proof

1.1 The energy completion V equals H¹(X,χ): cut off each cusp between heights R and R² with a function of log y whose hyperbolic gradient is bounded by C/log R. Dominated convergence for u and its gradient, together with this gradient bound, approximates every H¹ section in the form norm by compactly supported sections. Local smoothing in finitely many charts, averaging over each finite elliptic stabilizer, then gives smooth compactly supported approximation. Conversely local weak derivative closure makes the completion a subspace of H¹. Fix Y>b. Let H_Y be the closed subspace of L²(X,L) whose open-cusp averages vanish for y>Y, and V_Y=H¹(X,L)∩H_Y. Averaging is bounded on every finite cusp band, so its zero constraints are closed. The energy derivative is closed locally, hence V_Y is complete for ||u||²+q(u,u). It is dense in H_Y: approximate on a core below Y and above Y separately, first removing a shrinking band aroundY in L², then using smooth cutoffs and smooth Fourier-mode approximations in the tails. No H¹ approximation of a forbidden nonzero trace is asserted. [given, F1, F2, F3, F4, F5, F6, F7, F8]

2.1 The embedding V_Y→H_Y is compact. For open cusps above Y every Fourier frequency is a nonzero multiple of 1/1. For closed cusps every frequency is(n+α_j)/1 and has magnitude≥δ_j/1, δ_j=min(α_j,1−α_j)>0. Circle Parseval therefore gives, for all sufficiently largeR, ∫_{y>R}|u|²dxdy/y²≤C_X,L,Y R^−2q(u,u). The circle inequality follows first for finite Fourier sums, then by H¹ completion. Compact-core Rellich, finitely many chart cutoffs and a diagonal subsequence over integerR give convergence on every core. The displayed uniform tails give full L² convergence. The constants may depend on the nontrivial holonomies; no uniform positive closed-cusp gap across bundles is assumed. [given, F1, F2, F3, F4, F5, F6, step 1.1, F7]

3.1 Lax–Milgram for q+⟨·,·⟩ defines R_Y:H_Y→V_Y by q(R_Yf,v)+⟨R_Yf,v⟩=⟨f,v⟩. Testing the two defining equations gives symmetry and positivity. Density gives zero kernel; symmetry then gives dense range. step 2.1 makes R_Y compact on H_Y. Set A_Y=R_Y^−1−I on ranR_Y. It is symmetric and nonnegative. Lax–Milgram for q+(1±i)⟨·,·⟩ makes both A_Y+1±i onto, so the range criterion proves self-adjointness. Compact spectral decomposition gives finite-dimensional eigenspaces P_n with λ_n≥0 tending∞ and (A_Y−λ)^−1=Σ_n(λ_n−λ)^−1P_n. Near any finite λ only finitely many denominators can vanish; the rest converge in operator norm locally uniformly. Thus this is meromorphic with finite-rank poles. The same form/range construction without the H_Y constraint gives fullA. [given, F1, F2, F3, F4, F5, F6, step 2.1]

4.1 For v∈D(A_Y), distributionally Δv=A_Yv+Σ_j c_j(v)δ_{j,Y}, where δ_{j,Y} is open-cusp averaging at Y with a fixed normalization. Indeed every compactly supported test below Y is admissible. Every nonconstant Fourier-mode test above and acrossY is admissible. AboveY the constant modes ofv and A_Yv vanish. The discrepancy is consequently supported on the finite horocycles, only in constant Fourier mode, and lies in H^−1. A point-supported normal distribution is a finite sum of δ derivatives; derivatives of orderr≥1 are notH^−1. Explicitly testing its highest derivative on ε^r ψ((y−Y)/ε) gives nonzero limiting action while the H¹ norm isO(ε^(r−1/2))→0. Only δ remains. Hence the constant coefficient is continuous at Y and may have a first derivative jump; all other modes are smooth there by the local elliptic theorem. [given, F1, F2, F3, F4, F5, F6, step 3.1, F7]


5.1 The derivative normalization and graph-norm assertion follow explicitly. Fix an open cusp and $b<a<Y$. Its zero coefficient $v_0$ vanishes above $Y$, has value trace zero there, and on $(a,Y)$ satisfies $-y^2v_0''=(A_Yv)_0$. Thus $v_0\in H^2(a,Y)$ and its left derivative exists. In the $d\mu$ distribution pairing, integration by parts gives the coefficient $c_j(v)=v_0'(Y^-)$ multiplying exactly the horocycle functional in the Statement. Put $t=(y-a)/(Y-a)$ and $\psi(y)=3t^2-2t^3$. Since $\psi(a)=\psi'(a)=\psi'(Y)=0$ and $\psi(Y)=1$, two integrations by parts give $v_0'(Y^-)=\int_a^Yv_0''\psi\,dy-\int_a^Yv_0\psi''\,dy$. On this fixed finite band the weights are bounded above and below, so $|c_j(v)|\le C(\|A_Yv\|_H+\|v\|_H)$. This proves the graph-norm continuity clause and its exact normalization. [given, F1, F7, F8, step 4.1, algebra] ∎

## Source notes

The source locators above record actual reading limits. Every proof step is supplied locally; no external spectral theorem, computation or source-only proof is imported. The general cofinite theorem under PUBLIC AC is used for the congruence consumer36, whose public AC hypothesis matches. This item makes no choice-free claim for 95.
