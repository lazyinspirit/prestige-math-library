---
id: ex-cft-2d-free-majorana-fermion
kind: example
title: Exact chiral Majorana field with central charge one half
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-2d-stress-tensor-data
  - def-cft-2d-radial-quantization
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-2d-stress-tensor-data: mathematical-premise
  def-cft-2d-radial-quantization: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§3.2, printed pp. 29–30 (PDF pp. 17–18): one free massless Majorana field, the sign of its chiral contraction, stress tensor, central charge, and weight."
---

## Example

Let $\mathcal F=\bigwedge_{\mathrm{alg}}\langle e_{1/2},e_{3/2},\ldots\rangle$ be the algebraic exterior algebra on finitely supported half-integer mode labels, with vacuum $\Omega=1$. For $r>0$, let $\xi_{-r}$ act by exterior multiplication by $e_r$, and let $\xi_r$ act by contraction with $e_r$, so
$$\{\xi_r,\xi_s\}=\delta_{r+s,0}I,\qquad \xi_r\Omega=0\quad(r>0).$$
Define $\varepsilon:\mathcal F\to\mathbb C$ by $\varepsilon(\Omega)=1$ and zero on every positive exterior-degree basis vector. The real one-species CAR field is $\xi(z)=\sum_{r\in\mathbb Z+1/2}\xi_r z^{-r-1/2}$, and its formal vacuum contraction is $\langle A(z)B(w)\rangle_{\mathrm{contr}}:=\varepsilon(A(z)B(w)\Omega)$. Fix the source's complex Euclidean normalization $\psi(z):=i\xi(z)$; then its radial contraction is $-1/(z-w)$ for $|z|>|w|$. This phase convention does not assert that $\psi$ itself is self-adjoint.

Define fermionic normal ordering by moving all creation modes $\xi_{-r}$, $r>0$, to the left of all annihilation modes $\xi_r$, $r>0$, with a factor $-1$ for every interchange of two odd modes. Set
$$T(z):=\frac12:\psi(z)\partial\psi(z):.$$
Every fixed Laurent coefficient of $T$ is a finite sum on $\mathcal F$; the OPE below is a formal radially ordered expansion, not an analytic convergence claim.

## Example references

[[def-cft-2d-stress-tensor-data]]

[[def-cft-2d-radial-quantization]]

## Facts & Assumptions

**Given:** The half-integer CAR representation on $\mathcal F$, its vacuum, the phase choice $\psi=i\xi$, the normal-ordering rule, and $|z|>|w|>0$.

[F1] [[def-cft-2d-radial-quantization]]: radial products are expanded with the larger-radius field to the left.

[F2] [[def-cft-2d-stress-tensor-data]]: the stress OPE convention is $T(z)T(w)\sim c/(2(z-w)^4)+2T(w)/(z-w)^2+\partial T(w)/(z-w)$, and $T$-primary weight is the coefficient of the double pole in $T(z)\psi(w)$.

[A1] The finite-particle CAR representation, its vacuum, the mode expansion, and the phase $\psi=i\xi$ are the adopted algebraic model data stated in the Example.

[A2] Fermionic normal ordering moves creation modes left of annihilation modes, with a sign $-1$ for each interchange of two odd modes. The single- and double-contraction signs used below are derived from this rule and the CAR in steps 1.2 and 2.1.

## Verification

**Proof technique:** direct.

**Given:** [F1]–[F2], [A1]–[A2], and the explicitly defined finite-particle CAR domain.

1.1 For $r=n+\tfrac12>0$, $\varepsilon(\xi_r\xi_{-r}\Omega)=1$, while every other mode pairing has zero vacuum coefficient. Therefore, in $|z|>|w|$,
$$\varepsilon(\xi(z)\xi(w)\Omega) =\sum_{n=0}^\infty z^{-n-1}w^n =\frac1{z-w}.$$
The phase $\psi=i\xi$ gives the required negative contraction. Differentiation yields
$$\langle\psi(z)\psi(w)\rangle_{\mathrm{contr}}=-s^{-1},\quad \langle\psi(z)\partial\psi(w)\rangle_{\mathrm{contr}}=-s^{-2},\quad \langle\partial\psi(z)\psi(w)\rangle_{\mathrm{contr}}=s^{-2},\quad \langle\partial\psi(z)\partial\psi(w)\rangle_{\mathrm{contr}}=2s^{-3}, \qquad s=z-w.$$
[F1, A1, algebra]

2.1 In $T(z)\psi(w)$, contracting the first odd factor across the second gives a minus sign, while the second factor is already adjacent and gives a plus sign. Thus the two single contractions of $\frac12:\psi(z)\partial\psi(z):\psi(w)$ are
$$\frac12\left(-\langle\psi(z)\psi(w)\rangle\partial\psi(z) +\langle\partial\psi(z)\psi(w)\rangle\psi(z)\right) =\frac12\left(\frac{\partial\psi(z)}s+\frac{\psi(z)}{s^2}\right).$$
Expanding $\psi(z)=\psi(w)+s\partial\psi(w)+O(s^2)$ and $\partial\psi(z)=\partial\psi(w)+O(s)$ gives
$$T(z)\psi(w)\sim\frac{\psi(w)}{2s^2}+\frac{\partial\psi(w)}s.$$
Thus the formal stress OPE has the primary-field singular form with coefficient $h=\tfrac12$. This identifies the Virasoro weight in the declared stress-OPE convention; this algebraic calculation does not establish the finite passive-coordinate covariance defined by `def-cft-2d-primary-field`. [F2, A2, step 1.1, algebra]

3.1 For $T(z)T(w)$, write $A=\psi(z)$, $B=\partial\psi(z)$, $C=\psi(w)$, and $D=\partial\psi(w)$. Move the annihilation modes to the right using [A2]. The possible single pairings AC, AD, BC, BD cross respectively 1, 2, 0, 1 odd factors, so their signs are $-,+,+,-$; the two double pairings AC·BD and AD·BC have odd and even crossing parity, so their signs are $-,+$. These exhaust the pairings of the four odd factors, with the uncontracted fully normal-ordered term regular at $z=w$. The double pairings therefore equal
$$-\left(-\frac1s\right)\left(\frac2{s^3}\right) +\left(-\frac1{s^2}\right)\left(\frac1{s^2}\right) =\frac1{s^4}.$$
Multiplication by the two stress prefactors $1/2$ gives the central term $1/(4s^4)$. The single contractions are
$$\frac14\left( \frac{:\partial\psi(z)\partial\psi(w):}{s} -\frac{:\partial\psi(z)\psi(w):}{s^2} +\frac{:\psi(z)\partial\psi(w):}{s^2} -\frac{2:\psi(z)\psi(w):}{s^3} \right).$$
Using fermionic antisymmetry and the Taylor expansions
$$:\partial\psi(z)\psi(w):=-2T(w)-2s\,\partial T(w)+O(s^2),\quad :\psi(z)\partial\psi(w):=2T(w)+O(s^2),\quad :\psi(z)\psi(w):=-2sT(w)-s^2\partial T(w)+O(s^3),$$
the pole terms combine to $2T(w)/s^2+\partial T(w)/s$; the first single-contraction term has no pole because $:\partial\psi(w)\partial\psi(w):=0$. Therefore
$$T(z)T(w)\sim\frac{1/4}{(z-w)^4}+\frac{2T(w)}{(z-w)^2}+\frac{\partial T(w)}{z-w}.$$
Comparison with [F2] yields $c/2=1/4$, hence $c=\tfrac12$. [F2, A2, step 1.1, step 2.1, algebra]

4.1 For fixed integer mode index $m$, the coefficient of $z^{-m-2}$ is $L_m=\frac12\sum_{r+s=m}(-s-\tfrac12):\psi_r\psi_s:$. Terms with both indices negative have only finitely many solutions; terms with both positive also have only finitely many solutions. In a mixed-sign term, the positive-index annihilation operator can act nontrivially on a fixed exterior basis vector only when its label belongs to that vector's finite occupied set, leaving finitely many terms. Hence each stress mode is defined on all of $\mathcal F$. The finite-particle mode sums establish the formal OPE and its two boundary coefficients $h=\tfrac12$, $c=\tfrac12$ on the specified domain. No conclusion about a full nonchiral theory, a spin-structure sum, analytic convergence, or a physical path integral follows. [step 2.1, step 3.1] ∎
