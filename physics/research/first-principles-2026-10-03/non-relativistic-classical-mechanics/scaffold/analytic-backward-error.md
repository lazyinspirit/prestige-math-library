# E29 — Analytic Verlet backward error with exponential time bounds

2026-10-03. Pure mathematics. This proves the specified analytic splitting-method extension of E15, rather than claiming exponential estimates for every merely smooth scheme. Ernst Hairer's author-hosted *Geometric Numerical Integration*, TU München2010, Lecture3, §§1–3 and5, supplies the formal coefficient construction, symplectic-to-Hamiltonian induction and energy-telescoping argument. Its p7 exponential assertion has no full estimate there; the analytic operator/domain estimates below supply the actual missing implication. Original/local lecture PDF and extraction are in sources-advanced/, with retrieval hashes.

## Statement and domains

Let H=A+B be real analytic on a real star-shaped bounded open set U⊂R^{2d}. Assume A,B have holomorphic extensions to a uniform complex neighborhood U_ρ of its closure, with their Hamiltonian vector fields bounded there by M≥1. Use the standard constant canonical form ω=Σdqᵢ∧dpᵢ. Fix a compact star-shaped real K with positive distance from ∂U, and assume all numerical iterates under consideration lie in K. Distances and norms use fixed dimensionless coordinates; restore action/time scales afterward. Take the exact symmetric splitting Ψ_h=φ_A^{h/2}∘φ_B^h∘φ_A^{h/2}, or interchange A,B (the Verlet variant). For sufficiently small h>0, constants C,c,h₀>0 depending only on d,M,ρ and these domain margins give a real analytic modified Hamiltonian H_h on a neighborhood of K satisfying

|H_h−H|≤C h², |Ψ_h(z)−φ_{H_h}^h(z)|≤C h exp(−c/h)

for z∈K. Consequently for t=nh≤exp(c/(2h)), as long as the numerical iterates remain in K,

|H(Ψ_h^n(z₀))−H(z₀)|≤C'h².

The modified Hamiltonian is a finite optimally truncated sum, not a convergent infinite formal series. This is an energy/backward-error theorem, not an exponentially accurate all-time original-trajectory theorem. Numerical domain retention is a stated hypothesis, not inferred from a picture or from finite-time convergence.

## Analytic flow and difference-operator estimate

Shrink ρ finitely so every complex domain used below is contained in U_ρ and has a fixed real star-shaped core. A holomorphic bounded vector field has a holomorphic short-time flow on a smaller complex domain: Picard iteration on the complex continuous-curve ball is a contraction for short time, every iterate is holomorphic in initial data and complex time, and uniform convergence on smaller compact polydiscs preserves holomorphy by the one-variable Cauchy formula, applied successively to coordinates. The state displacement is bounded by CM|h|; the same estimate for a three-part splitting follows by adding its three flow displacements. Cauchy's formula on a coordinate circle radiusb gives |∂ᵢf|≤|f|/b. Integrating f along the three subflows therefore proves

|(Ψ_h^*−Id)f|_{D'}≤C_d M|h| b⁻¹|f|_D

whenever D' has complex margin2b inside D and CM|h|<b. Here Ψ_h^*f=f∘Ψ_h. This is an actual bounded operator between domains of different widths; no unbounded differentiation is treated as a bounded operator on a single analytic strip.

Choose an integer N≥2. Allocate a total marginρ/4 among N successive difference applications, b=ρ/(8N). Let C_d be a constant valid in the proved difference bound above (the finite gradient sum and the total subflow time supply such a fixed constant). Take C₀≥32C_d, increasing it if needed for the subflow displacement bound, and r_N=ρ/(C₀MN). On |h|≤r_N the operator factor is explicitly q=C_dM|h|/b≤8C_d/C₀≤1/4. Its successive domain margins sum to2Nb=ρ/4; all repeated compositions in Δ_h^k therefore remain in the original holomorphic neighborhood for k≤N. Let Δ_h=Ψ_h^*−Id. On coordinate functions zᵢ, its first application has sharper bound |Δ_h zᵢ|≤CM|h|. Hence

|Δ_h^k zᵢ|≤CM|h| q^{k−1}, 1≤k≤N,

on the inner domain, with the successive margin allocation just described. The finite analytic sum L_N(h)=Σk=1^N(−1)^{k+1}Δ_h^k/k therefore satisfies the explicit bound

|L_N(h)zᵢ/h|≤CM Σk=1^N q^{k−1}/k≤CM/(1−q)≤(4/3)CM.

The apparent value at h=0 is filled by its holomorphic limit, since every Δ_h^k starts at orderh^k. It is holomorphic in h for |h|≤r_N, and its h^j coefficient for j≤N is exactly the formal coefficient of log(Ψ_h^*): since Δ_h=O(h), omitted k>N terms begin at orderN+1. Writing L_N(h)zᵢ/h=Σj≥1 a_j(z)h^{j−1}, Cauchy's coefficient formula on |h|=r<r_N gives |a_j|≤(4/3)CM r^{−(j−1)}. Let r↑r_N; the bound remains valid with r_N. For j≤N these a_j are exactly X_j's coordinate components, because omitted log terms begin at orderN+1. Thus it yields the bound

|X_j|≤C M (C₀MN/ρ)^{j−1}, j≤N,

for the vector field coefficients defined below. Taking N=j separately gives the sharper useful bound |X_j|≤C M(C₀Mj/ρ)^{j−1}. All constants are uniform on the retained inner complex domain. Thus factorial-type growth is quantified rather than assumed absent.

## Why the formal logarithm consists of Hamiltonian vector fields

For a formal parameter h define the binomial operator T_h^s=Σk≥0 binom(s,k)Δ_h^k. At each fixed h-degree this is a finite polynomial in s. For every nonnegative integer s=m, it equals the m-fold pullback by Ψ_h, so it preserves both products and Poisson brackets. The product/bracket identities at each h-degree are polynomial identities in s, holding at every m≥0 and hence for every s. Differentiate at s=0. Because d/ds binom(s,k)|₀=(−1)^{k+1}/k, the formal logarithm L_h=log T_h is a derivation of products and of the Poisson bracket.

Each h-coefficient of L_h is a finite-order differential operator: expand the three analytic subflows formally, so at orderj only finitely many compositions of derivatives up to orderj occur. A finite-order differential operator that is a derivation is a vector field. To verify this without an unexplained theorem, apply the derivation rule repeatedly to coordinate monomials: at z₀ it annihilates constants and every monomial in (z−z₀) of degree≥2; Taylor's finite jet then gives Df(z₀)=Σi D(zᵢ)(z₀)∂ᵢf(z₀). This identifies the coefficient operator with its coordinate vector field. Consequently

h⁻¹L_h=X₁+hX₂+h²X₃+⋯.

Bracket derivation for each coefficient means its vector field is symplectic: applying the identity to coordinate pairs whose bracket is the constant J_ij gives DX_j J+J DX_jᵀ=0. Equivalently the contraction ιX_jω is closed, by coordinate differentiation. On the star-shaped core E1's radial one-form primitive gives H_j with ιX_jω=dH_j; normalize H_j(z_ref)=0 for j≥2. Its analytic extension follows from the same radial integral. X₁=X_H, since the splitting's first h coefficient is X_A+X_B. Symmetry Ψ_{−h}=Ψ_h⁻¹ implies L_{−h}=−L_h as a formal operator (multiply their formal exponentials), so X₂=X₄=⋯=0. There is therefore no orderh correction to H.

This proves globally compatible modified Hamiltonians on the stated star-shaped domain. On a noncontractible phase space, a closed contraction form need not have a global primitive; this statement does not bypass that obstruction.

## Optimal truncation and a proved exponential defect

Set X^{[N]}(h)=Σj=1^N h^{j−1}X_j and H^{[N]}=H+Σj=2^N h^{j−1}H_j. For |h|≤r_N/4, the first coefficient bound gives |X^{[N]}|≤CM uniformly. Its time-h flow exists and is holomorphic in complex h on a possibly smaller disc |h|≤r_N/C₁, by the analytic flow argument and the remaining positive domain margin. Its Taylor expansion matches Ψ_h through orderN: formally exp(hX^{[N]}) agrees with exp L_h=Ψ_h^* to that order, because the omitted term in hX begins at degreeN+1. This assertion concerns only finite coefficients of analytic maps and can be checked by multiplication of finite formal polynomials.

The difference D_N(h,z)=Ψ_h(z)−φ_{H^{[N]}(h)}^h(z) is analytic in h, has zeros through orderN, and has |D_N|≤CM|h| on |h|≤r_N/C₁ (both maps move z by≤CM|h|). Cauchy coefficients followed by the geometric tail therefore give

|D_N(h,z)|≤C M|h| (C₁|h|/r_N)^N/[1−C₁|h|/r_N].

Choose N=floor(ρ/(C₂Mh)), with C₂ large enough that C₁h/r_N≤1/2 and N≥2. Then this is≤C M h2^{−N}≤C'h exp(−c/h). Constants c include the explicitρ/M scale. No convergent infinite logarithm is claimed.

For |X^{[N]}−X_H|, use the coefficient estimate with N=j rather than the coarse uniformN bound. Terms with j≥3 satisfy

|h^{j−1}X_j|≤CM(C₀Mhj/ρ)^{j−1}.

The ratio of successive majorants is bounded by C₀Mh(j+1)e/ρ, since (1+1/j)^{j−1}≤e. Choosing C₂ still larger makes this ratio≤1/2 for all j≤N. Summing from j=3 and using X₂=0 gives |X^{[N]}−X_H|≤C h²; integration of their contraction one-forms along uniformly bounded radial paths gives |H^{[N]}−H|≤C h² after the chosen normalization. The same estimates give uniformly bounded first derivative/Lipschitz norm of H^{[N]} on K by Cauchy on an additional fixed margin. Set H_h=H^{[N(h)]}. This proves both bounds in the statement.

## Energy accumulation, numerical error and physical interpretation

Along the exact modified flow, dH_h/dt=dH_h(X_Hh)=ω(X_Hh,X_Hh)=0. Thus at each numerical step,

|H_h(z_{j+1})−H_h(z_j)|=|H_h(Ψ_h z_j)−H_h(φ_Hh^h z_j)|≤C h exp(−c/h).

Finite summation gives |H_h(z_n)−H_h(z₀)|≤C t exp(−c/h). For t≤exp(c/(2h)) this is≤Cexp(−c/(2h)), and adding the two |H_h−H| errors gives O(h²). Since exp(−c/(2h))≤C h² for sufficiently small h (take logarithms), the stated bound follows.

If each actually computed step incurs an additional state error of norm≤η and remains in the same compact domain, the energy estimate adds at mostC nη=C(t/h)η. Floating-point dynamics is not declared exactly symplectic. Quantities h,ρ,M were in scaled coordinates; a physical step is h t₀ and energy is multiplied by its stated energy scale. Analyticity, fixed complex-domain bounds, step restriction, star-shaped primitive and bounded numerical trajectory are explicit conditions. Smooth C∞ without a holomorphic neighborhood does not satisfy this exponential proof, and no empirical long-time performance is asserted.
