---
dependency_level: 1
id: lem-spaced-polynomial-congruence-family-rescaling
kind: lemma
title: "Rescaling Spaced Polynomial Congruence Families"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-spaced-polynomial-weighted-congruence-mean-values
  - thm-holder-inequality-for-integrals
  - thm-bezout-identity
  - thm-bezout-identity-for-polynomials
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Wooley, Nested efficient congruencing and relatives of Vinogradov's mean value theorem, arXiv:1708.01220v2, Lemmas 4.1–4.2 and 6.2"
      url: "https://arxiv.org/pdf/1708.01220v2"
---

## Statement

Use the weighted congruence mean-value definition. For integer
$s\ge1$ one has $0\le\Lambda_{s,k}\le s$. Fix $\tau,\eta,\delta>0$ with
$\delta<1$, and put $\Lambda=\Lambda_{s,k}$, $H=\lceil B/k\rceil$.
For all sufficiently large $B$, uniformly over all admissible places, all
$\boldsymbol\phi\in\Phi_\tau(B)$ and all finite coefficient sequences,

$$
U^{B,h}_{s,k}\le Q^{(H-h)(\Lambda+\eta)}U^{B,H}_{s,k} \quad(0\le h\le(1-\delta)H). \tag{1}
$$

The threshold depends only on $k,s,\tau,\eta,\delta$.
For $s=k(k+1)/2$, $k\ge2$, $1\le r\le k-1$, and
$\nu\le a,b\le(1-\delta)H$, the sharp mixed bound is

$$
K^r_{a,b}\le U^{B,H}Q^{(\Lambda+\eta) ((H-a)T_r/s+(H-b)(1-T_r/s))}. \tag{2}
$$

For any integer $w\ge1$, $0\le a\le b$, and any residue $\xi$, one also has
the pointwise refinement inequality

$$
\rho_a(\xi)^2|f_a(\cdot;\xi)|^{2w} \le Q^{w(b-a)}\sum_{\zeta\equiv\xi\ (\pi^a)\bmod\pi^b} \rho_b(\zeta)^2|f_b(\cdot;\zeta)|^{2w}. \tag{3}
$$

## Statement references

[[def-spaced-polynomial-weighted-congruence-mean-values]]

## Facts & Assumptions

**Given:** The ranks, admissible places, finite complex sequences and parameter hypotheses in the Statement.

[F1] All means, the universal exponent and zero-mass conventions are those
of [[def-spaced-polynomial-weighted-congruence-mean-values]].

[F2] Hölder's inequality applies to finite sums and finite probability
averages by [[thm-holder-inequality-for-integrals]]. All sums here are finite.

[F3] A coefficient relatively prime to $\pi$ has an inverse modulo every
$\pi^B$, by [[thm-bezout-identity]] over the integers and
[[thm-bezout-identity-for-polynomials]] over the polynomial ring.

## Proof

1.1 The concrete character formulas in [F1] give $\mathbb E_{\chi\in\mathcal X_B}\chi(x)=1$ if $\pi^B\mid x$, and zero otherwise: over the integers this is a geometric sum, and over the polynomial ring it is a product of geometric sums over the prime-field coordinates. Thus expansion of an even integral moment enforces exactly the indicated polynomial congruences. Coefficients on the second tuple are conjugated. This identity remains valid with extra, independent character averages. In particular an extra average imposing a congruence already implied by the original congruences leaves the expanded sum unchanged. No inequality between individual complex solution weights is used. [F1, algebra]

2.1 Decompose $\rho_a f_a=\sum_{\zeta\equiv\xi}\rho_b(\zeta)f_b(\zeta)$. Cauchy–Schwarz followed by weighted Hölder gives $|\sum\rho_b f_b|^{2w}\le Q^{w(b-a)} (\sum\rho_b^2)^{w-1}\sum\rho_b^2|f_b|^{2w}$. Here $\sum\rho_b^2=\rho_a^2$; division proves (3), with zero-mass cases immediate. Taking $a=0,b=H,w=s$ and averaging gives $U^B\le Q^{sH}U^{B,H}$. A one-point supported sequence gives equality $U^B=U^{B,H}=1$. Hence all the limiting exponents lie between $0$ and $s$. Since $\Phi_\tau(B)$ shrinks as $\tau$ increases, $\lambda_{s,k}(\tau)\le\Lambda$ for every $\tau>0$. The definition of limsup now gives, for every $\tau,\eta>0$, uniformly in all data and for all sufficiently large $D$, $U^D\le Q^{(\Lambda+\eta)\lceil D/k\rceil}U^{D,\lceil D/k\rceil}$. The zero-denominator case follows from refinement. [F1, F2, step 1.1]

2.2 Fix $\xi\bmod\pi^h$ with positive mass and write $n=\pi^h y+\xi$. Subtract constants from the polynomials. Their coefficient matrix in degrees $1,\ldots,k$ is congruent to the identity modulo $\pi^c$. It has an inverse modulo $\pi^B$: its determinant is a unit and its adjugate, multiplied by a modular inverse of that determinant, is an integral inverse. Replace the system by the resulting linear combinations, and discard coefficient multiples of $\pi^B$ in degrees at most $k$. This gives $X^j+\pi^c X^{k+1}P_j(X)$ without changing the congruence system. After translation by $\xi$, its low coefficient matrix is upper triangular modulo $\pi^c$ with diagonal $1$; invert it in the same way and discard its constant terms. Thus the translated system is equivalent modulo $\pi^B$ to $X^j+\pi^c X^{k+1}\widetilde P_j(X)$. After substituting $X=\pi^hy$ and dividing the $j$th equation by $\pi^{jh}$, the original congruences imply a system $\sum_i(\Psi_j(y_i)-\Psi_j(z_i))\equiv0\pmod{\pi^D}$, where $D=B-kh$ and $\Psi_j(Y)=Y^j+\pi^{c+h}Y^{k+1}P_j^*(Y)$. Discarded coefficient errors are multiples of $\pi^{B-jh}$ after division, so they do not affect the modulus $D$. [F3, step 1.1, algebra]

3.1 For each fixed original character tuple $\boldsymbol\chi$ use the twisted sequence $b_y=a_{\pi^hy+\xi}\chi_\phi(\pi^hy+\xi)$. It has squared mass $\rho_h(\xi)^2$, independently of the characters. Insert an independent rank-$k$ character average modulo $\pi^D$ enforcing the implied $\boldsymbol\Psi$ congruences of step 2.2. The system $\boldsymbol\Psi$ belongs to $\Phi_\tau(D)$ since $c+h\ge\tau B\ge\tau D$. Also $D\ge\delta B-k$ and $\lceil D/k\rceil=H-h$. Consequently step 2.1 applies uniformly to this twisted sequence at modulus $D$, restricting its variables to one class modulo $\pi^{H-h}$ at cost $Q^{(H-h)(\Lambda+\eta)}$. Average the resulting inequality over the original characters. By step 1.1 the extra congruences can be removed both before and after this restriction. Pairs of residues $\xi\bmod\pi^h$, $\zeta\bmod\pi^{H-h}$ identify the single original residue $\xi+\pi^h\zeta\bmod\pi^H$; their squared masses are exactly $\rho_H^2$. Multiply by $\rho_h(\xi)^2/\rho_0^2$ and sum over $\xi$ to obtain (1). All thresholds in this argument are uniform because the supremum in [F1] includes every admissible place and every transformed coefficient sequence. [F1, step 1.1, step 2.1, step 2.2]

4.1 In $K^r_{a,b}$ drop the restriction on the residue pairs; all summands of this outer sum are nonnegative. Hölder on the joint finite probability space of characters and mass-weighted residues gives $K^r_{a,b}\le (U^{B,a})^{T_r/s}(U^{B,b})^{1-T_r/s}$. Apply (1) twice. This is exactly (2). [F2, step 3.1] ∎
