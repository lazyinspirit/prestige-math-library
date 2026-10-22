---
id: lem-ip-sharp-weighted-modulated-cgo-remainder-absorption
kind: lemma
title: Sharp weighted absorption of modulated CGO remainders
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-plancherel
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs
      url: https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1
      locator: Theorems 6.9–6.10; the independent weighted proof below retains the modulation omitted in the printed negative-Sobolev argument
---

## Statement

Assume Countable Choice. Write $\langle\xi\rangle=(1+|\xi|^2)^{1/2}$ and use unitary Fourier transformation on $\mathbb R^3$. There is an absolute constant $C$ such that for every $b\ge1$ and $Q\in H^{-1/2}(\mathbb R^3)$,
$$\int_{|\xi|\le b}\langle\xi\rangle^{-1}\|e^{-i\xi\cdot x}Q\|_{H^{-1/2}}^2\,d\xi\le Cb^2\|Q\|_{H^{-1/2}}^2.$$
Consequently, if $t>0$, $L\ge0$ and $a_\xi\in H^{1/2}(\mathbb R^3)$ is any family with $\|a_\xi\|_{H^{1/2}}\le L/t$ for $|\xi|\le b$, its modulated bilinear distributional remainders
$$R(\xi)=\langle e^{-i\xi\cdot x}Q,a_\xi\rangle$$
satisfy
$$\left(\int_{|\xi|\le b}\langle\xi\rangle^{-1}|R(\xi)|^2\,d\xi\right)^{1/2}\le C\frac{Lb}{t}\|Q\|_{H^{-1/2}},$$
whenever the scalar family $R$ is measurable. No continuity or derivative bound in $\xi$ is required.

## Statement references

[[def-countable-choice]]

[[thm-plancherel]]

[Weidling, Theorems 6.9–6.10](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

## Facts & Assumptions

**Given:** Countable Choice and the whole-space Sobolev norms, radius, potential difference, remainder bounds in the Statement.

[A1] Countable Choice is assumed for the Fourier isometry in [F1]. [[def-countable-choice]]

[F1] Under [A1], the unitary Fourier transform is an isometry on $L^2$ and defines the Fourier Sobolev norms by $\|f\|_{H^u}^2=\int\langle\eta\rangle^{2u}|\widehat f(\eta)|^2\,d\eta$. [[thm-plancherel]]

## Proof

1.1 Define $J_b(\eta)=\int_{|\xi|\le b}\langle\xi\rangle^{-1}\langle\eta-\xi\rangle^{-1}\,d\xi$. For $|\eta|\ge2b$, $|\eta-\xi|\ge|\eta|/2$ throughout the integration ball, so $\langle\eta-\xi\rangle^{-1}\le2\langle\eta\rangle^{-1}$. Polar integration gives $\int_{|\xi|\le b}\langle\xi\rangle^{-1}\,d\xi\le Cb^2$ for $b\ge1$. Hence $J_b(\eta)\le Cb^2\langle\eta\rangle^{-1}$ in this region. [given, algebra]

2.1 If $|\eta|<2b$, Cauchy–Schwarz gives $J_b(\eta)\le(\int_{|\xi|\le b}\langle\xi\rangle^{-2}\,d\xi)^{1/2}(\int_{|\xi|\le b}\langle\eta-\xi\rangle^{-2}\,d\xi)^{1/2}$. The first integral is at most $Cb$ by polar integration. In the second, the substitution $z=\eta-\xi$ places its domain inside $B_{3b}$, so it is also at most $Cb$. Thus $J_b(\eta)\le Cb$. Since $\langle\eta\rangle\le\sqrt{1+4b^2}\le\sqrt5b$, this is at most $C' b^2\langle\eta\rangle^{-1}$. Together with step 1.1 this proves $J_b(\eta)\le Cb^2\langle\eta\rangle^{-1}$ for every $\eta$. [step 1.1, algebra]

3.1 Fourier translation gives $\|e^{-i\xi\cdot x}Q\|_{H^{-1/2}}^2=\int\langle\eta-\xi\rangle^{-1}|\widehat Q(\eta)|^2\,d\eta$. This identity holds for Sobolev distributions as well as smooth functions, because the Fourier transform is represented by a locally square integrable function with the indicated weight, and translation preserves weighted square integrability for every fixed $\xi$. Tonelli's theorem for the nonnegative integrand and step 2.1 now give $\int_{|\xi|\le b}\langle\xi\rangle^{-1}\|e^{-i\xi\cdot x}Q\|_{H^{-1/2}}^2\,d\xi=\int|\widehat Q(\eta)|^2J_b(\eta)\,d\eta\le Cb^2\|Q\|_{H^{-1/2}}^2$. [A1, F1, step 2.1, algebra]

4.1 For the bilinear duality pairing, weighted Fourier Cauchy–Schwarz gives $|\langle e^{-i\xi\cdot x}Q,a_\xi\rangle|\le\|e^{-i\xi\cdot x}Q\|_{H^{-1/2}}\|a_\xi\|_{H^{1/2}}$. The absence of complex conjugation changes the second Fourier factor to its reflection and does not change its Sobolev norm. Squaring, integrating with weight $\langle\xi\rangle^{-1}$, using the bound $L/t$, and applying step 3.1 prove the remainder estimate. [F1, step 3.1, given, algebra] ∎

## Application to the conductivity remainder

For the exact CGO identity, take $a_\xi=\chi(r_1+r_2+r_1r_2)$, with a fixed smooth cutoff equal to one on the support of $Q$. The existing positive-Sobolev CGO estimates give $\|\chi r_j\|_{H^{1/2}}\le C/t$ and uniformly bounded $L^\infty$ norms. The fractional difference formula for $H^{1/2}$, applied to the identity $f(x)g(x)-f(y)g(y)=f(x)(g(x)-g(y))+g(y)(f(x)-f(y))$, gives $\|fg\|_{H^{1/2}}\le C(\|f\|_\infty\|g\|_{H^{1/2}}+\|g\|_\infty\|f\|_{H^{1/2}})$. Insert cutoffs equal to one on the support of $\chi$ to apply this estimate to $\chi r_1r_2$. Consequently $\|a_\xi\|_{H^{1/2}}\le C/t$, uniformly in $\xi$. One may combine this bound with the separate exact boundary identity, high frequency cutoff and Liouville recovery suppliers. No measurable phase selection is necessary for that application: bound the remainder pointwise by $(C/t)\|e^{-i\xi\cdot x}Q\|_{H^{-1/2}}$, which is measurable by step 3.1, before integrating the resulting scalar Fourier inequality.

## Source-reading note

The source text at printed pages 172–179, including the full proofs of Theorems 6.8–6.11, and the norm convention (5.8b) and Theorem 5.8 were read. The source norm is an unmodulated localized Sobolev norm. The printed passage on page 176 bounds an absolute volume integral by negative-Sobolev duality and omits the actual Fourier modulation. The proof above uses neither that passage nor its pointwise conclusion: it keeps the modulation, moves it to $Q$, and uses the integrated kernel estimate in steps 1.1–3.1. No independent proof review or native workflow acceptance is asserted.
